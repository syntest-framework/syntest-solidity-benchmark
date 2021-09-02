/**
 *Submitted for verification at Etherscan.io on 2020-12-31
*/

// File: @openzeppelin/contracts/GSN/Context.sol

pragma solidity ^0.5.0;

import "./Cryptoz_utils.sol";

// File: contracts/CryptozCard.sol

pragma solidity ^0.5.0;




/*
interface ERC165 {
 /// @notice Query if a contract implements an interface
 /// @param interfaceID The interface identifier, as
 ///  specified in ERC-165
 /// @dev Interface identification is specified in
 ///  ERC-165. This function uses less than 30,000 gas.
 /// @return `true` if the contract implements `interfaceID`
 ///  and `interfaceID` is not 0xffffffff, `false` otherwise
 function supportsInterface(bytes4 interfaceID) external view returns (bool);
}
*/

/**
 * @title Full ERC721 Token
 * This implementation includes all the required and some optional functionality of the ERC721 standard
 * Moreover, it includes approve all functionality using operator terminology
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract CryptozCard is CryptozUniverse, ERC721Enumerable {

    // Token name
    string internal name_ = "Cryptoz Cards";

    // Token symbol
    string internal symbol_ = "Cryptoz";

    // Mapping from owner to list of owned token IDs
    mapping(address => uint256[]) internal ownedTokens;

    // Mapping from token ID to index of the owner tokens list
    mapping(uint256 => uint256) internal ownedTokensIndex;

    // Array with all token ids, used for enumeration
    uint256[] internal allTokens;

    // Mapping from token id to position in the allTokens array
    mapping(uint256 => uint256) internal allTokensIndex;

    // Optional mapping for token URIs
    mapping(uint256 => string) internal tokenURIs;

    //Track all tokens by rarity
    uint[7] public tokensByRarity = [0,0,0,0,0,0,0]; //[rarity] = total

    /*CRYPTOZ Overrides*/

    //Event Logs
    event LogCardCreated(address indexed owner, uint indexed cardTokenId, uint editionNumber, uint indexed cardTypeId, uint8 rarity, uint CzxpGained);
    event SacrificeCardEvent(address indexed owner, uint indexed cardTokenId, uint indexed cardTypeId, uint CzxpGained);

    // Track ownership of Card Type purchases from store to enforce 1 type per person once
    mapping (address => mapping(uint => bool)) public cardTypesOwned; //    [address][CardTypeId] = bool

    /**
     * @dev Gets the token name
     * @return string representing the token name
     */
    function name() external view returns (string memory _name) {
        return name_;
    }

    /**
     * @dev Gets the token symbol
     * @return string representing the token symbol
     */
    function symbol() external view returns (string memory _symbol) {
        return symbol_;
    }

    /**
     * @dev Returns an URI for a given token ID
     * @dev Throws if the token ID does not exist. May return an empty string.
     * @param _tokenId uint256 ID of the token to query
     */
    function tokenURI(uint256 _tokenId) external view returns (string memory) {
        return Strings.strConcat(
            baseTokenURI,
            Strings.uint2str(_tokenId)
        );
    }

    /**
     * @dev Gets the token ID at a given index of the tokens list of the requested owner
     * @param _owner address owning the tokens list to be accessed
     * @param _index uint256 representing the index to be accessed of the requested tokens list
     * @return uint256 token ID at the given index of the tokens list owned by the requested address
     */
    function tokenOfOwnerByIndex(
        address _owner,
        uint256 _index
    )
    public
    view
    returns (uint256)
    {
        require(_index < balanceOf(_owner));
        return ownedTokens[_owner][_index];
    }

    /**
     * @dev Gets the total amount of tokens stored by the contract
     * @return uint256 representing the total amount of tokens
     */
    function totalSupply() public view returns (uint256) {
        return allTokens.length;
    }

    /**
     * @dev Gets the token ID at a given index of all the tokens in this contract
     * @dev Reverts if the index is greater or equal to the total number of tokens
     * @param _index uint256 representing the index to be accessed of the tokens list
     * @return uint256 token ID at the given index of the tokens list
     */
    function tokenByIndex(uint256 _index) public view returns (uint256) {
        require(_index < totalSupply());
        return allTokens[_index];
    }

    /**
     * @dev Internal function to set the token URI for a given token
     * @dev Reverts if the token ID does not exist
     * @param _tokenId uint256 ID of the token to set its URI
     * @param _uri string URI to assign
     */
    function _setTokenURI(uint256 _tokenId, string memory _uri) internal {
        require(_exists(_tokenId));
        tokenURIs[_tokenId] = _uri;
    }

    /**
     * @dev Internal function to mint a new token
     * @dev Reverts if the given token ID already exists
     * @param _to address the beneficiary that will own the minted token
     * @param _tokenId uint256 ID of the token to be minted by the msg.sender
     */
    function _mint(address _to, uint256 _tokenId) internal {
        super._mint(_to, _tokenId);

        allTokensIndex[_tokenId] = allTokens.length;
        allTokens.push(_tokenId);
    }

    /**
     * @dev Internal function to burn a specific token
     * @dev Reverts if the token does not exist
     * @param _owner owner of the token to burn
     * @param _tokenId uint256 ID of the token being burned by the msg.sender
     */
    function _burn(address _owner, uint256 _tokenId) internal {

        super._burn(_owner, _tokenId);

        // Clear metadata (if any)
        if (bytes(tokenURIs[_tokenId]).length != 0) {
            delete tokenURIs[_tokenId];
        }

        // Reorg all tokens array
        uint256 tokenIndex = allTokensIndex[_tokenId];
        uint256 lastTokenIndex = allTokens.length.sub(1);
        uint256 lastToken = allTokens[lastTokenIndex];

        allTokens[tokenIndex] = lastToken;
        allTokens[lastTokenIndex] = 0;

        allTokens.length--;
        allTokensIndex[_tokenId] = 0;
        allTokensIndex[lastToken] = tokenIndex;

        //track rarity totals
        tokensByRarity[rarity[Cards[_tokenId].cardTypeId]] = tokensByRarity[rarity[Cards[_tokenId].cardTypeId]] - 1;

        // Gain czxp for sacrificing card
        uint256 sacrificeCzxp = allCardTypes[Cards[_tokenId].cardTypeId].sacrificeCzxp;
        awardCzxp(msg.sender,sacrificeCzxp);

        //remove from universe
        delete Cards[_tokenId];

        emit SacrificeCardEvent(msg.sender, _tokenId, Cards[_tokenId].cardTypeId, sacrificeCzxp);
    }

    /*CRYPTOZ Overrides */

    function _transferFrom(address from, address to, uint256 tokenId) internal {
        super._transferFrom(from, to, tokenId);
    }



    /**
     *  Public method to allow file transfer, we call our internal function
     */
    function transferFrom(address from, address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId));

        //Lets track the card transfers
        Cards[tokenId].transferCount += 1;

        _transferFrom(from, to, tokenId);
    }

    /**
    *   Create the Card for the owner
    */
    function _createCard(uint32 _cardTypeId, address _owner, uint czxpGained) internal returns (uint){
        //make sure we have a definition for this card
        require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId);

        //Increment edition number
        cardTypeToEdition[_cardTypeId] = cardTypeToEdition[_cardTypeId].add(1);

        //Create the card!
        Card memory _tempCard = Card({
        cardTypeId:_cardTypeId,
        editionNumber:cardTypeToEdition[_cardTypeId],
        transferCount:0
        });

        //add to the universe and get the ID, -1 for array offset
        uint256 _newCardId = Cards.push(_tempCard) - 1;

        //Give the ERC721 Card
        _mint(_owner,_newCardId);

        //Set the Metadata for this new token
        _setTokenURI(_newCardId, baseTokenURI);

        //track rarity
        uint8 _temp_rarity = rarity[_cardTypeId];
        tokensByRarity[_temp_rarity] = tokensByRarity[_temp_rarity] + 1;

        //Emit card created owner,tokenId,Edition of Token,Card type,czxp gained
        emit LogCardCreated(_owner, _newCardId, cardTypeToEdition[_cardTypeId], _cardTypeId, rarity[_cardTypeId], czxpGained);

        return _newCardId;
    }


    //Get a list of all the CardIDs( tokenIDs ) this user owns
    function tokensOfOwner(address _owner) external view returns(uint256[] memory ownerTokens) {
        return _tokensOfOwner(_owner);
    }

    //Get total tokens by rarity. diamond,platinum,epic,rare,uncommon,common
    function getTokensByRarity() external view returns(uint,uint,uint,uint,uint,uint) {
        return(tokensByRarity[1],tokensByRarity[2],tokensByRarity[3],tokensByRarity[4],tokensByRarity[5],tokensByRarity[6]);
    }

    //Get the info about the card
    function getOwnedCard(uint256 _tokenId) public view returns(uint32, uint, uint) {
        require(_exists(_tokenId));
        return (Cards[_tokenId].cardTypeId,Cards[_tokenId].editionNumber,Cards[_tokenId].transferCount);
    }
}

// File: contracts/Cryptoz.sol

pragma solidity ^0.5.0;

/******************************************

Our Matra our Motto for coding The Cryptoz Universe.buy

      Fail EARLY and Fail LOUD !!!!!!!

1.    First - Check all pre-conditions
2.    Then  - make changes to contract state
3.    Final - interact with other contracts

Pull funds over pushing them
Platform limits like max of 1023 loop interations.

all Events start with Log

******************************************/


contract Cryptoz is CryptozCard {

    //Constants
    uint constant private weiCostOfCard = 2000000000000000; //booster in wei = 0.002 ETH
    uint constant private czxpGainedBoosterPurchase = 120;
    uint constant private maxCardTypes = 5000; //allowed types in the Universe

    //Event Logs
    event LogCardTypeLoaded(uint32 indexed cardTypeId, string cardName);
    event LogCardPurchased(uint32 indexed cardTypeId, uint editionNumber, address indexed buyer);
    event LogPackOpened(address indexed buyer, uint packsOpened);
    event LogSponsorLinked(address sponsor, address affiliate);
    event LogSponsorReward(address sponsor, address affiliate, uint CzxpReward);
    event LogDailyReward(address player, uint newBonusBalance);

    //storage

    //Tracking affiliate sponsors
    mapping(address => address) public sponsors; // 1 sponsor can have many affiliates, but only 1 sponsor, returns sponsor

    //Track the timestamps for users to get their daily pull
    mapping(address => uint) private timeToCardsPull; //address to timestamp

    //Tracking booster pack count ownership. These are NOT tokens, just a counter for fun, not really
    mapping (address => uint256) public boosterPacksOwned;

    //where we hold inventory of the  booster packs
    mapping(uint8 => uint32[]) private allBoosterCardIds; // [rarityId][cardId]

    //check if cardType exists
    modifier isValidCard(uint32 _cardTypeId) {
        //TIGHTEN   //Make sure cardType exists and we dont have bad data coming in
        require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId);
        require(storeBoosterBonus[_cardTypeId] < 1); //you cant get cards marked for booster pack or bonus
        _;
    }

    function f() external {
        revert();
    }

    //Set our cxzp contract in the constructor
    function initialize(address payable _czxpContractAddress) onlyOwner public {
        CzxpContractAddress_ = _czxpContractAddress;
    }

    function loadNewCardType(
        uint8 _cardTypeId,
        string calldata _name,
        string calldata _set,
        uint8 _assetType,
        uint8 _notStoreOrBonus,
        uint8 _rarity,
        uint16 _totalAvailable,
        uint256 _weiCost,
        uint256 _buyCzxp
    ) external onlyOwner returns(bool){

        //what requires should we add ?

        //a max. of 5000 types in the universe ever
        require(cardTypesIds.length <= maxCardTypes);

        //not allowed to update existing cardTypeIds
        require(allCardTypes[_cardTypeId].cardTypeId == 0);

        allCardTypes[_cardTypeId].cardTypeId    = _cardTypeId;
        allCardTypes[_cardTypeId].name          = _name;
        allCardTypes[_cardTypeId].set           = _set;
        cardAssetType[_cardTypeId]              = _assetType;
        storeBoosterBonus[_cardTypeId]          = _notStoreOrBonus;
        rarity[_cardTypeId]                     = _rarity;
        totalAvailable[_cardTypeId]             = _totalAvailable;
        allCardTypes[_cardTypeId].weiCost       = _weiCost;
        allCardTypes[_cardTypeId].buyCzxp       = _buyCzxp;

        //If she be booster worthy
        if(_notStoreOrBonus == 1){ // 0=store,1=booster,2=bonus
            allBoosterCardIds[_rarity].push(_cardTypeId);
        }

        //Track the cardTypeIds count
        cardTypesIds.push(_cardTypeId);
        return true;
    }

    function addTocardType(
        uint32  _cardTypeId,
        uint256 _transferCzxp,
        uint256 _sacrificeCzxp,
        uint256 _unlockCzxp,
        uint8 _cardLevel
    ) external onlyOwner returns(bool){

        //not allowed to update existing cardTypeIds
        //TODO check for NULL in case we push 0 for a property
        require(allCardTypes[_cardTypeId].transferCzxp == 0);
        require(allCardTypes[_cardTypeId].sacrificeCzxp == 0);
        require(allCardTypes[_cardTypeId].unlockCzxp == 0);
        require(allCardTypes[_cardTypeId].cardLevel == 0);

        require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId);


        allCardTypes[_cardTypeId].transferCzxp  = _transferCzxp;
        allCardTypes[_cardTypeId].sacrificeCzxp = _sacrificeCzxp;
        allCardTypes[_cardTypeId].unlockCzxp    = _unlockCzxp;
        allCardTypes[_cardTypeId].cardLevel     = _cardLevel;

        //initialize editionNumber
        cardTypeToEdition[_cardTypeId] = 0;

        //Card type is defined, now emit a Log of it
        emit LogCardTypeLoaded(_cardTypeId,allCardTypes[_cardTypeId].name);
        return true;
    }


    /**
        /**
         *  Public interface to purchase a card, probablly the most insecure entry point !
         */
    function buyCard(uint32 _cardTypeId) external payable isValidCard(_cardTypeId) returns(bool) {

        // dont even bother if no ETH sent
        require(msg.value > 0, "Pay up!");

        //check for valid cardType
        require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId, "Cannot buy cards that are not defined");

        cardType memory _tempCard = allCardTypes[_cardTypeId];

        //check if store only
        require(storeBoosterBonus[_cardTypeId] == 0, "Can only buy cards from Store");

        //CHECKS-EFFECT, Can't buy cards you own
        require(cardTypesOwned[msg.sender][_cardTypeId] == false, "Only 1 Card Type purchase per wallet");

        //Check if this card amount we sell is more than edition+1 for this card type
        require((totalAvailable[_cardTypeId] >= cardTypeToEdition[_cardTypeId] + 1 ), "Maximum edition reached for this Card Type");

        //check if they have paid enough for it
        require(msg.value >= _tempCard.weiCost, "Not enough Ether sent to purchase this card");

        //check if we have enough czxp to unlock this card
        uint czxp = CzxpToken(CzxpContractAddress_).balanceOf(msg.sender);
        require(czxp >= _tempCard.unlockCzxp, "Wallet does not have enough czxp to unlock this Card Type");

        //Clear ? to buy the card

        //stop re-entrancy. Track the type of card puchased for this owner, so they cant buy again
        cardTypesOwned[msg.sender][_cardTypeId] = true;

        //Let the universe award our friend
        super.awardCzxp(msg.sender, allCardTypes[_cardTypeId].buyCzxp);

        //and award their sponsor
        rewardAffiliate(allCardTypes[_cardTypeId].buyCzxp);

        //Mint the real token and pass czxp gained for logging
        super._createCard(_cardTypeId, msg.sender,allCardTypes[_cardTypeId].buyCzxp);


        return true;
    }

    //every 8 hours, the address can get 2 free booster cards
    function getBonusBoosters() external {
        //this only runs if time to get new cards
        require(now > getTimeToDailyBonus(msg.sender), "Can't claim before time to claim next bonus");

        //Stop re-entrancy, update the lastpull value
        timeToCardsPull[msg.sender] = now + 8 hours;

        // add the boosters and emit event
        boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].add(2);
        emit LogDailyReward(msg.sender, boosterPacksOwned[msg.sender]);
    }

    /**
     *  Public interface to get card at no cost
     */
    function getFreeCard(uint32 _cardTypeId) external isValidCard(_cardTypeId) {
        //check if store only
        require(storeBoosterBonus[_cardTypeId] == 0);

        // ensure there is enough of a supply left
        require(totalAvailable[_cardTypeId] > (cardTypeToEdition[_cardTypeId]+1));

        //Can't get cards From shop that you own
        require(cardTypesOwned[msg.sender][_cardTypeId] == false);

        //check if we have enough czxp to unlock this card
        uint czxp = CzxpToken(CzxpContractAddress_).balanceOf(msg.sender);
        require(czxp >= allCardTypes[_cardTypeId].unlockCzxp);

        //Only cards that are Free
        require(allCardTypes[_cardTypeId].weiCost == 0);

        //ALL CLEAR ???????? claim a new card

        //Stop re-entrancy, Track the type of card puchased for this owner, so they cant buy again
        cardTypesOwned[msg.sender][_cardTypeId] = true;

        //Let the universe award our friend
        super.awardCzxp(msg.sender, allCardTypes[_cardTypeId].buyCzxp);

        //reward the sponsor
        rewardAffiliate(allCardTypes[_cardTypeId].buyCzxp);

        //now mint the card
        super._createCard(_cardTypeId, msg.sender, allCardTypes[_cardTypeId].buyCzxp);

    }

    /**
     *  Any user can sacrifice any card they own. Please don't burn down the universe :'(
     */
    function sacrifice(uint256 _tokenId) external {
        //Call our internal burn function does all our owner checks
        _burn(msg.sender, _tokenId);
    }

    //Booster Pack functions

    /**
     *  Public interface to buy booster card(s)
    */
    function buyBoosterCard(uint _amount) payable external returns(bool) {

        // is there enough wei sent 1 pack = 0.002 ETH ?
        require(msg.value >= weiCostOfCard.mul(_amount));

        //All good increase the number owned
        boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].add(_amount);

        //Award czxp for booster
        super.awardCzxp(msg.sender, uint(czxpGainedBoosterPurchase.mul(_amount)));

        rewardAffiliate(uint(czxpGainedBoosterPurchase.mul(_amount)));

        return true;
    }

    /**
     *  Public interface to buy booster pack(s) and open them - NO burn option
     */
    function buyBoosterCardAndOpen() payable external {
        // is there enough wei sent 1 pack = 0.005 ETH ?
        require(msg.value >= weiCostOfCard);

        //All good increase the number owned
        boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].add(1);

        //Award czxp per pack
        super.awardCzxp(msg.sender, czxpGainedBoosterPurchase);

        rewardAffiliate(czxpGainedBoosterPurchase);

        //Now open the pack
        openBoosterCard(0);
    }

    /**
     *  Public interface to open already purchased booster pack(s) - User can wager an amount
     */
    function openBoosterCard(uint czxpWager) public returns(bool) {
        //Ensure user owns unopened packs
        require(boosterPacksOwned[msg.sender] > 0);

        //czxpWager check czxpWager
        require(czxpWager >= 0);

        //STOP re-entrancy , decrement number of packs
        boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].sub(1);

        //Pull the card
        uint8 rarity = getRarity(czxpWager);
        pullCard(rarity);

        //Send a log event
        emit LogPackOpened(msg.sender, rarity);
        return true;
    }

    /**
     * Public interface to allow a player to forever link their 1 sponsor
     */
    function linkMySponsor(address mySponsor) external {
        //check that mySponsor arg is not 0x0
        require(mySponsor != address(0));

        //ensure the sponsor isn't Linked
        require(sponsors[msg.sender] == address(0));

        //Check they are not linking to themselves
        require(msg.sender != mySponsor);

        //All clear?  stop re-entrancy, set the association
        sponsors[msg.sender] = mySponsor;

        //Mint the Platinum Sponsor Card
        pullCard(2);
    }

    //Private

    /**
     * We always pay our affiliates 20% of the czxp
     */
    function rewardAffiliate(uint totalCZXP) private  {
        //first check if the caller has a sponsor
        if(sponsors[msg.sender] != address(0)){
            uint reward = totalCZXP / 20;
            if(reward == 0){
                reward = 1;
            }
            super.awardCzxp(sponsors[msg.sender], reward);
            emit LogSponsorReward(sponsors[msg.sender], msg.sender, reward);
        }
    }

    /**
     *
     */
    function pullCard(uint8 rarity) private {

        //Get a random number for the card to pull
        uint rand = selectRandom(allBoosterCardIds[rarity].length);

        //hit up the cardTypes
        uint32 pulledId = allBoosterCardIds[rarity][rand];

        //Give the player this cardType
        super._createCard(pulledId, msg.sender, 100);
    }

    /**
     *  Private function to diceroll the rarity pull Only from booster packs
     */
    function getRarity(uint czxpWager) private returns(uint8){

        //Check if below upper limit
//        require(czxpWager <= 1649267441667000);

        //FIRST ensure, player can back their wager
        uint _playerCZXPBalance = CzxpToken(CzxpContractAddress_).balanceOf(msg.sender);
        require(_playerCZXPBalance >= czxpWager);

        //Check effects - Take their czxp
        if(czxpWager > 0){
            CzxpToken(CzxpContractAddress_).burnCzxp(msg.sender, czxpWager);
        }

        //ALL CLEAR - grab a random number
        uint rand = selectRandom(10000);

        //get our probabilty distribution
        uint16[7] memory probs = burnAndBoost(czxpWager);

        //Get the rarity for this pull from the probs
        // 3=epic, 4=rare, 5=uncommon, 6=commmon
        for(uint8 i=2; i < probs.length; i++){
            if(rand <= probs[i]){
                return i;
            }
        }
        //REMOVE THIS !!!!
        return 6;
    }


    /**
     * Private Booster distribution function
     */
    function burnAndBoost(uint czxpWager) private returns(uint16[7] memory) {

        //buyBoosterCardAndOpen will pass a zero, set a default
        if(czxpWager == 0){
            return [0,0,0,1,50,2700,10000];
        }

        (uint16 c, uint16 u, uint16 r, uint16 e) = super.getProbs(czxpWager);

        //default distribution is 1,50,2700,10000
        uint16[7] memory probs = [0,0,0,e,r,u,c];

        return probs;
    }

    /**
     * Return the timestamp of the next daily bonus for a player
     */
    function getTimeToDailyBonus(address _player) public view returns(uint timeStamp){

        //check if address exists
        if(timeToCardsPull[_player] == 0){
            return now - 2 seconds;
        }else{
            return timeToCardsPull[_player];
        }
    }


    //Thanks! for supporting the Cryptoz universe <3 <3 <3
    /**
    * Withdraw balance to wallet ONLY for the owner to call this
    */
    function withdraw() external onlyOwner {
        msg.sender.transfer(address(this).balance);
    }
}