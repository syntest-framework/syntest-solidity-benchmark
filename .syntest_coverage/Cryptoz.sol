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
function coverage_0x22dbcb5a(bytes32 c__0x22dbcb5a) internal pure {}


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
    function name() external view returns (string memory _name) {coverage_0x22dbcb5a(0xdd4632525d4ba0812927ddb58429938493b1b0df5a0b40e617ebfb5564e83710); /* function */ 

coverage_0x22dbcb5a(0x3b3886354251eaf5d3038576cff6ffda00e3cd393389c15d71849b59db7f7cad); /* line */ 
        coverage_0x22dbcb5a(0x4b09a55f3bad7fc8f6cdccdc4138cfd8be136f71d5de946627c1b554fd5979ac); /* statement */ 
return name_;
    }

    /**
     * @dev Gets the token symbol
     * @return string representing the token symbol
     */
    function symbol() external view returns (string memory _symbol) {coverage_0x22dbcb5a(0x88977624316686f1bf25901258c513892cefe1930701d675238db15b8c14cfc5); /* function */ 

coverage_0x22dbcb5a(0x6d3a199caa528879ce7575884b8af80f03a7033603f1fd289a2a9eba46ed25f8); /* line */ 
        coverage_0x22dbcb5a(0x9aa206e1c6ea465f48c4031f71c7a6b168238cfaf8c7e7251364666181100993); /* statement */ 
return symbol_;
    }

    /**
     * @dev Returns an URI for a given token ID
     * @dev Throws if the token ID does not exist. May return an empty string.
     * @param _tokenId uint256 ID of the token to query
     */
    function tokenURI(uint256 _tokenId) external view returns (string memory) {coverage_0x22dbcb5a(0x3d7edd45c60abe320e95d50bf891fbec15eab3eec925b918aebbb54362453900); /* function */ 

coverage_0x22dbcb5a(0xfb59d1cd88432dfb78c6c8ed59704dd26c1465911714c7fa6f50eaacbe311140); /* line */ 
        coverage_0x22dbcb5a(0x3395cad676c23d80e9a64950232e8c0d7a3a87ba011fa81a5c70d9cbd65f46da); /* statement */ 
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
    {coverage_0x22dbcb5a(0x41b196dda7e2404839eac0a4bc32a58d1bb1131224db00c3099432e1193da294); /* function */ 

coverage_0x22dbcb5a(0x8ee8a4fa872f98eff9e0007efaada5e14f62dd535124200bd26cc6601ec70e4b); /* line */ 
        if(_index < balanceOf(_owner)){}coverage_0x22dbcb5a(0x1679235c75c6794fd45291b3da6143f5badf41042042ed4db92538af0cf59eb4); /* requirePre */ 
coverage_0x22dbcb5a(0xa6e5af42737f247adb884c40ce2846914afcb9013b39dd5f3274c0e8b95799ac); /* statement */ 
require(_index < balanceOf(_owner));coverage_0x22dbcb5a(0x691e971ca20bbaa3ea29597514daa393b8d36b7c0111fcb1ff166434bdb4410d); /* requirePost */ 

coverage_0x22dbcb5a(0x069b5410fb0cc1d0a77cd32243b688d51db8479753ba29f4f15742419e9483e5); /* line */ 
        coverage_0x22dbcb5a(0xc3ddf7e1973ba2b179d81f244f0bc017d386316ddbd2e526d1e97f35eb9318f9); /* statement */ 
return ownedTokens[_owner][_index];
    }

    /**
     * @dev Gets the total amount of tokens stored by the contract
     * @return uint256 representing the total amount of tokens
     */
    function totalSupply() public view returns (uint256) {coverage_0x22dbcb5a(0xd39f4fa6ff23b915372d38d9723a2a7c12aeebab219f1a2e92dfd4dfa0831636); /* function */ 

coverage_0x22dbcb5a(0xae113d5a7871642d6d712d6574cf2fc99accbe0059fb33d7c88f7013fffc5c74); /* line */ 
        coverage_0x22dbcb5a(0xb2e3b94e5266b31d5cba43bd7eeb2ba5bb78c5c0cc5af6a1ab1e854a12fcf4e9); /* statement */ 
return allTokens.length;
    }

    /**
     * @dev Gets the token ID at a given index of all the tokens in this contract
     * @dev Reverts if the index is greater or equal to the total number of tokens
     * @param _index uint256 representing the index to be accessed of the tokens list
     * @return uint256 token ID at the given index of the tokens list
     */
    function tokenByIndex(uint256 _index) public view returns (uint256) {coverage_0x22dbcb5a(0x25bf39844a5995c0a5f3331e55559e03d7fa13dc8814f678a2b900ac88811633); /* function */ 

coverage_0x22dbcb5a(0x0350c418c6e102467a8d363f86db5c38c66b2efe7b53100d7a0baf5f03e1c63c); /* line */ 
        if(_index < totalSupply()){}coverage_0x22dbcb5a(0x7200880d39aa422a52652d05e7b87cc880f2af8e59dcddf5b95e820ca040b4bd); /* requirePre */ 
coverage_0x22dbcb5a(0x0ffcd6e3fc8d776414c0a944c5b77693ab932125d7b47e5befdfb02fee981fb7); /* statement */ 
require(_index < totalSupply());coverage_0x22dbcb5a(0x59d4e71203c50d117e49f2339b50dd774fd3728686a2811dcab7a9adb60a7f54); /* requirePost */ 

coverage_0x22dbcb5a(0xcc12ac10029356646b31141156edf478b89c211d3eab93b9ac5943e368887010); /* line */ 
        coverage_0x22dbcb5a(0xadf28f5a6a92dc2a7409d458347ea38246554f7e7198a2d2621609e016a325ac); /* statement */ 
return allTokens[_index];
    }

    /**
     * @dev Internal function to set the token URI for a given token
     * @dev Reverts if the token ID does not exist
     * @param _tokenId uint256 ID of the token to set its URI
     * @param _uri string URI to assign
     */
    function _setTokenURI(uint256 _tokenId, string memory _uri) internal {coverage_0x22dbcb5a(0xdd1ae01ee1d0e6c1ba5948ac059a4a6267cc60b27932b98bcc6e7cf94a850bab); /* function */ 

coverage_0x22dbcb5a(0x7906076209195c85fa2b98774d5aeabb17565c6e200b91cf4635a0f0d5c62b45); /* line */ 
        if(_exists(_tokenId)){}coverage_0x22dbcb5a(0x56b3279a837a7f24b4cd6bd4f5b432db64d8d5e527a634de6114e69ae1c26f25); /* requirePre */ 
coverage_0x22dbcb5a(0xf382485ac4436ba554861a881e4bf778ccc2ec32f836a93a04b7d584449b279b); /* statement */ 
require(_exists(_tokenId));coverage_0x22dbcb5a(0xe94d323badfe9f2a1a57ef145292a703b4fba8d2e51b089aeccc04e7a4329758); /* requirePost */ 

coverage_0x22dbcb5a(0xcac1196b40dbad621c9dc7e6126402cc1ad2f2040da87c73f6f91177bb0af785); /* line */ 
        coverage_0x22dbcb5a(0xc95f51d9a5eb9a18c77e03c4d8f098e7331330053c2fdde3557784472e7497c2); /* statement */ 
tokenURIs[_tokenId] = _uri;
    }

    /**
     * @dev Internal function to mint a new token
     * @dev Reverts if the given token ID already exists
     * @param _to address the beneficiary that will own the minted token
     * @param _tokenId uint256 ID of the token to be minted by the msg.sender
     */
    function _mint(address _to, uint256 _tokenId) internal {coverage_0x22dbcb5a(0x980a6eca6e8e45e1a79a36dc907a6c22e3a45f2a466751ca447d06a6c22b7c1e); /* function */ 

coverage_0x22dbcb5a(0x63b3b25c79dfe3589b1c63c2b8d634cd799cda599860a0471bce998d0a882703); /* line */ 
        coverage_0x22dbcb5a(0x632ca60d9ae2cfce63708bb2332e264fad1587f9db620b5cfc284e1efe56cde9); /* statement */ 
super._mint(_to, _tokenId);

coverage_0x22dbcb5a(0x3f2baf550a890a1c0cfe17ec40c5dc98f3b5f11df1065e2ba8d34f37ce7fdfcc); /* line */ 
        coverage_0x22dbcb5a(0x87c78cc85f622a86d40ad0c10a6a26c7a3f8604e12472c51980ca9612e4e3a4c); /* statement */ 
allTokensIndex[_tokenId] = allTokens.length;
coverage_0x22dbcb5a(0xe759d0a0ddd68c22c943eaf835f6f8a347f3c64d5cd75dbb68453cda535b16ab); /* line */ 
        coverage_0x22dbcb5a(0x6dd4b4b0d5d93baeff2c68f20a82b340f1fb141916ec7c11b99e3e89d0a7e42b); /* statement */ 
allTokens.push(_tokenId);
    }

    /**
     * @dev Internal function to burn a specific token
     * @dev Reverts if the token does not exist
     * @param _owner owner of the token to burn
     * @param _tokenId uint256 ID of the token being burned by the msg.sender
     */
    function _burn(address _owner, uint256 _tokenId) internal {coverage_0x22dbcb5a(0x3bd13c4a30c308b54b27ad4cc801efd4213f286adb3f04e26a79de1a5885cb30); /* function */ 


coverage_0x22dbcb5a(0x0989165c5005c9fbed7440ddad135f91b7ea4d6f84657e315652e8b87602b632); /* line */ 
        coverage_0x22dbcb5a(0x98e3f027d4513039e30d15cd5d2734c6903364bde2f4b656b128aaf9257e6a1e); /* statement */ 
super._burn(_owner, _tokenId);

        // Clear metadata (if any)
coverage_0x22dbcb5a(0x5cf912888193616336c810534291b21851ed348db7de98a985ce9cf17b906bf5); /* line */ 
        coverage_0x22dbcb5a(0xe5293f9dc801330a283cf668868c9864e1a159b0726e9852f15df2dc5ca49da0); /* statement */ 
if (bytes(tokenURIs[_tokenId]).length != 0) {coverage_0x22dbcb5a(0x9a243c62a966f773948c78f6fa53a10beb4603f9c2e13efab1595bef1bf223d4); /* branch */ 

coverage_0x22dbcb5a(0xe1549a764ca23c252e65349cb7b15ce752f46667f337a7e96a29d6acc218be2f); /* line */ 
            delete tokenURIs[_tokenId];
        }else { coverage_0x22dbcb5a(0x2df77211182ac366d1c185affc5cc330694d04bdaf92495cb74c0818415078a1); /* branch */ 
}

        // Reorg all tokens array
coverage_0x22dbcb5a(0x67d8cca92b0277bc174f2f97c0509a67577a4fd6f62881e7bafda4cc4e70ca5c); /* line */ 
        coverage_0x22dbcb5a(0x04e10d63c40f1579239d462b72b387844c95eac77ba2e8d4d877fa56c08810c6); /* statement */ 
uint256 tokenIndex = allTokensIndex[_tokenId];
coverage_0x22dbcb5a(0x96eca89693f64f375b2bed18ccd62d9320fb3704c3c016b2e904c281ac001572); /* line */ 
        coverage_0x22dbcb5a(0x99731e1987d98d4741d948d9e4421368cb508b7f29ef328e895f62f67563ba16); /* statement */ 
uint256 lastTokenIndex = allTokens.length.sub(1);
coverage_0x22dbcb5a(0x91ee4d113ac536be539abf00a80f964cf87a86da0f6981b72b2f6ec90d9ca49c); /* line */ 
        coverage_0x22dbcb5a(0x6e24f29cb86e3d98e1ec15636d02aed7d56fe7df156cb7025185159308c27a53); /* statement */ 
uint256 lastToken = allTokens[lastTokenIndex];

coverage_0x22dbcb5a(0xf5391b54ebef82ace7b74133f11b487c305eac02aada35c4f5591fd9ca128665); /* line */ 
        coverage_0x22dbcb5a(0x458af5c8d3ff5d92e8088c2aa68fd799f4cd52346591aabecb9483842129d4e6); /* statement */ 
allTokens[tokenIndex] = lastToken;
coverage_0x22dbcb5a(0x267093e8ead98338eeb10c2b2e15c4f318e7431e49545f949bdacab105ba19c6); /* line */ 
        coverage_0x22dbcb5a(0x033aa90564ac1b0c7e180519dd979d7619af471c71c3b589a783a72c277e936c); /* statement */ 
allTokens[lastTokenIndex] = 0;

coverage_0x22dbcb5a(0x4270a8716a907f6093f3bb82a931e0e7cc14497c60754e2cc67ca2a233af83d3); /* line */ 
        allTokens.length--;
coverage_0x22dbcb5a(0x2470d3d267d8cef1cc90b0420a1b5e2020c0264a6c4c7c08ea14ca6907d41503); /* line */ 
        coverage_0x22dbcb5a(0x1dcad058b9512ca03f73bbb883719faa31373dbe2c3823d0d6b0703837694187); /* statement */ 
allTokensIndex[_tokenId] = 0;
coverage_0x22dbcb5a(0x863466b3404d982bcdd6af250b77a230f4c20a9b931d4cddcfe647a687cf3627); /* line */ 
        coverage_0x22dbcb5a(0x693119015ddcc11f173e1e472d02431e7cfe58d9255fc2114d0a26899cad425b); /* statement */ 
allTokensIndex[lastToken] = tokenIndex;

        //track rarity totals
coverage_0x22dbcb5a(0x1f136db3d0183020c3e6e6df2f9b4b72bb9c41bd6b1068fe09bdb44c813d814f); /* line */ 
        coverage_0x22dbcb5a(0xcd584696e2d4ffe1bb2736cb3220742b97350a9c62a7a161730def75563d2edd); /* statement */ 
tokensByRarity[rarity[Cards[_tokenId].cardTypeId]] = tokensByRarity[rarity[Cards[_tokenId].cardTypeId]] - 1;

        // Gain czxp for sacrificing card
coverage_0x22dbcb5a(0xec02938e775f5afbde832ad1ad994739850d82ca7db3bed23cbd7995387b227c); /* line */ 
        coverage_0x22dbcb5a(0xeaf726905fd91f8f9649aab7ab403e8aea2adba338ae5b7a81ddf23280072048); /* statement */ 
uint256 sacrificeCzxp = allCardTypes[Cards[_tokenId].cardTypeId].sacrificeCzxp;
coverage_0x22dbcb5a(0xead55a2b20576c40a211b6149282bc153868918184bfd9bf0cddd96bacce633a); /* line */ 
        coverage_0x22dbcb5a(0xde5d46d4d276e908a1f473852949b4c253f82bce093b442da5336071616f570a); /* statement */ 
awardCzxp(msg.sender,sacrificeCzxp);

        //remove from universe
coverage_0x22dbcb5a(0x12584e3818e90d903638647a9b80d63df2f11c4f80dae2128ec7c06ef959b9af); /* line */ 
        delete Cards[_tokenId];

coverage_0x22dbcb5a(0x079e14674dcd60ff4fb62047ebef25dfc8b031c22c475c77f607718374d72cad); /* line */ 
        coverage_0x22dbcb5a(0x25961d2d7dffba6d1334fca39c887a3c3d936ee8044f1875733c8151008775d2); /* statement */ 
emit SacrificeCardEvent(msg.sender, _tokenId, Cards[_tokenId].cardTypeId, sacrificeCzxp);
    }

    /*CRYPTOZ Overrides */

    function _transferFrom(address from, address to, uint256 tokenId) internal {coverage_0x22dbcb5a(0xe244e9af183659387a857071b979ea6e6581225a00c9c75944ac91bdee5a19f9); /* function */ 

coverage_0x22dbcb5a(0x2c9ae514eda62db2111a9ff3128809861d1f3f828bba9ef8d8ebf6628ac3e701); /* line */ 
        coverage_0x22dbcb5a(0xdaf171b1fd0d51ea008ca8702ff0bb4dbe0fb82e38e70e707da4fec215c70126); /* statement */ 
super._transferFrom(from, to, tokenId);
    }



    /**
     *  Public method to allow file transfer, we call our internal function
     */
    function transferFrom(address from, address to, uint256 tokenId) public {coverage_0x22dbcb5a(0xe8c323dc7f69e0648f0914aa40af441c50d5e4488543d02a89d1a870befac585); /* function */ 

coverage_0x22dbcb5a(0x3d93b0e935c6bf8320be909d49a255f7c7d2e567e15ecfd7be2271ea95ac4ea5); /* line */ 
        if(_isApprovedOrOwner(msg.sender, tokenId)){}coverage_0x22dbcb5a(0x8438439b079db7e71a485b433d89eff3ebf76d2513720731171509fcc385e58c); /* requirePre */ 
coverage_0x22dbcb5a(0xfbd199298e52171fbaf6bd425e273a0008d7b53ad68749727ea84f95b3187870); /* statement */ 
require(_isApprovedOrOwner(msg.sender, tokenId));coverage_0x22dbcb5a(0x3553545f2a3668558d2757f9641b9ab315d0b34375a0f49f3a9a0ef9219829c8); /* requirePost */ 


        //Lets track the card transfers
coverage_0x22dbcb5a(0x659069329abbe1245cc5eeb81857551282595fda67818576ee4589dfdfb9d67b); /* line */ 
        coverage_0x22dbcb5a(0x92039315ebbb605077fce53ad3f741a59b2581350e19d6db2517d56f13c31772); /* statement */ 
Cards[tokenId].transferCount += 1;

coverage_0x22dbcb5a(0x7940fc240e1046ded113c08e9316a702d843d114275032262567d1f282dd29e9); /* line */ 
        coverage_0x22dbcb5a(0x4553b0e33fcaa3194331405617834a7ffff490e4311b331351712335c269293d); /* statement */ 
_transferFrom(from, to, tokenId);
    }

    /**
    *   Create the Card for the owner
    */
    function _createCard(uint32 _cardTypeId, address _owner, uint czxpGained) internal returns (uint){coverage_0x22dbcb5a(0xac6b318fafb97843ff8837dbfbf90ed95a058d0cd1f7772da8c957d88735b80a); /* function */ 

        //make sure we have a definition for this card
coverage_0x22dbcb5a(0x92d0a532b135a289100880c4b984897157d47f8c4676fcb96f795de404f23c89); /* line */ 
        if(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId){}coverage_0x22dbcb5a(0xe4925206a22c9cdd79bd335fb7c38ceb611f1ee04b74d4543291f0ceae526f03); /* requirePre */ 
coverage_0x22dbcb5a(0xfec2b395b1cd38162b6b2849b197952aaf228b91da5f141b28a5d94517be2a8f); /* statement */ 
require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId);coverage_0x22dbcb5a(0x065c42d615a0608e3680ac83b4ce022bcf6800b8d97f1ed618b0e771d0bf428b); /* requirePost */ 


        //Increment edition number
coverage_0x22dbcb5a(0x6fe7c866377f52582fcd49c5462d4c6818b0473db413c6df9a357c61dd212de8); /* line */ 
        coverage_0x22dbcb5a(0xec3e72f16ac85504652e64d1b7aaab792156e152ccefd7807f914bc4894c31a6); /* statement */ 
cardTypeToEdition[_cardTypeId] = cardTypeToEdition[_cardTypeId].add(1);

        //Create the card!
coverage_0x22dbcb5a(0x26f06bffc7e4dea7737296bb64a30b1c9b5cdcd1c5a9747a80481abd15e1d320); /* line */ 
        coverage_0x22dbcb5a(0x866391147d4225fb98665342266ec4d32dd998b36896e87a9e6f27e3e2f26c75); /* statement */ 
Card memory _tempCard = Card({
        cardTypeId:_cardTypeId,
        editionNumber:cardTypeToEdition[_cardTypeId],
        transferCount:0
        });

        //add to the universe and get the ID, -1 for array offset
coverage_0x22dbcb5a(0x669ecb2c8e3c4548a7714a5ac983fdd26731d68b765f84d6c1b1f2ddf51b1b09); /* line */ 
        coverage_0x22dbcb5a(0xa7a502a8b898b6564776f28b72d1185c18ce9bab5050a4b117dd7902351a458a); /* statement */ 
uint256 _newCardId = Cards.push(_tempCard) - 1;

        //Give the ERC721 Card
coverage_0x22dbcb5a(0x39af5d5026ddbee4c2c1d2224f77355c57af8b03172721181081fb30b25ca4ad); /* line */ 
        coverage_0x22dbcb5a(0xfdc3a843de990054991b83111fa5ea4923af517c34c77290da7ff09644968be9); /* statement */ 
_mint(_owner,_newCardId);

        //Set the Metadata for this new token
coverage_0x22dbcb5a(0x932c1b27309d3adaddc52f68331a3df958f5c1c8ee403c75fbb12ca35331a15d); /* line */ 
        coverage_0x22dbcb5a(0xe8814529d51e3889381886dd96ea9698c3c188327f43b5fd1b7b3d454f3c0f34); /* statement */ 
_setTokenURI(_newCardId, baseTokenURI);

        //track rarity
coverage_0x22dbcb5a(0x645d4aa65e8c2be2c8680cb67e35b5f4637bd381e956e706e8fe1b4c2d1f462e); /* line */ 
        coverage_0x22dbcb5a(0xa99b36b0557e6fa65c196952c34cbe9b6fc86253fb0838c5896b041cad207c19); /* statement */ 
uint8 _temp_rarity = rarity[_cardTypeId];
coverage_0x22dbcb5a(0x4a6743cb2a40a631830fff65e6293940d961bf1cae73b89240b5eadf834894c3); /* line */ 
        coverage_0x22dbcb5a(0xd64871bb56dc6328253ee61ca2c858c03f7bc3f1bbbe6d3ca62e63e2b106e6ae); /* statement */ 
tokensByRarity[_temp_rarity] = tokensByRarity[_temp_rarity] + 1;

        //Emit card created owner,tokenId,Edition of Token,Card type,czxp gained
coverage_0x22dbcb5a(0xb08e82b71a0f8845410dab1dd862b55a2087ef54bd501bbc82ef8bf8162b929c); /* line */ 
        coverage_0x22dbcb5a(0xf8c3c97eaea25f2bfd75eaff4658fa87529f43f5e814c117978cfaf82c457a56); /* statement */ 
emit LogCardCreated(_owner, _newCardId, cardTypeToEdition[_cardTypeId], _cardTypeId, rarity[_cardTypeId], czxpGained);

coverage_0x22dbcb5a(0x2cb85ce2f178da6d6a47b60afedbff654d99c5b7f926a500450e7ea4c58b5dc7); /* line */ 
        coverage_0x22dbcb5a(0x419d772e86f4ba11137b3cb3b3fd3003c891f910038dcf831df08fc5edc56038); /* statement */ 
return _newCardId;
    }


    //Get a list of all the CardIDs( tokenIDs ) this user owns
    function tokensOfOwner(address _owner) external view returns(uint256[] memory ownerTokens) {coverage_0x22dbcb5a(0x9c840d977cab4a69bb1667f1da7d3e4f86c50942dcc1063969800114123017b1); /* function */ 

coverage_0x22dbcb5a(0x054d0e1b338cf5a29f4bd637514e8ce0fbe87a6bbac1cfb8972979529427daf3); /* line */ 
        coverage_0x22dbcb5a(0x104874a01a4c7212d677ac2d51d7fae0e39b96a316b6b601dcbea61442448dbe); /* statement */ 
return _tokensOfOwner(_owner);
    }

    //Get total tokens by rarity. diamond,platinum,epic,rare,uncommon,common
    function getTokensByRarity() external view returns(uint,uint,uint,uint,uint,uint) {coverage_0x22dbcb5a(0x75fdb825416112bde529f3e79b3aa498e493f84c71f8bbf1ae0ce70969f25dec); /* function */ 

coverage_0x22dbcb5a(0x933459e54bf47cfde036516d58c43efbbfaa5d42fcba69e7eba856afc116c637); /* line */ 
        coverage_0x22dbcb5a(0xed586adc0396126861488d32b29f4cc7592fbaf43169dfebe920d2cca4bda6ac); /* statement */ 
return(tokensByRarity[1],tokensByRarity[2],tokensByRarity[3],tokensByRarity[4],tokensByRarity[5],tokensByRarity[6]);
    }

    //Get the info about the card
    function getOwnedCard(uint256 _tokenId) public view returns(uint32, uint, uint) {coverage_0x22dbcb5a(0x383a5f17fc2bd04640832f86f2442d80acb9cc776c39d33e665f68b61c5a4a78); /* function */ 

coverage_0x22dbcb5a(0x7e20b652a4005a6bba6f475ecbdaafef8024beeee7aba9f46627f4bf0f91b633); /* line */ 
        if(_exists(_tokenId)){}coverage_0x22dbcb5a(0x7bb5810b9a1ab8fee4144600eeb426fb9cf08779bd1ecc82c6ebc816873db53e); /* requirePre */ 
coverage_0x22dbcb5a(0x3e35df04a8e4d091cfcfa6b3e015e5693445dacd6564f88254dcd18a9d7b9b61); /* statement */ 
require(_exists(_tokenId));coverage_0x22dbcb5a(0xd78ff9faf861f210039c9e424a331fd482e68730d4ce4c3ba8752071a35b9f7a); /* requirePost */ 

coverage_0x22dbcb5a(0x068a3c3f3504fcf76e8fc2e14ddd32b237215873a2baf77c0175d9e91a37a4b5); /* line */ 
        coverage_0x22dbcb5a(0x28286e6139c75c0566db2fed7b332dc8652d1d230d78684e7dbf709869c6ae7e); /* statement */ 
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
function coverage_0x97274b49(bytes32 c__0x97274b49) internal pure {}


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
    modifier isValidCard(uint32 _cardTypeId) {coverage_0x97274b49(0x92e35e490c9bc86291e1011f3cf34dcfdf0048ca98f51c3db51c8c2b3dad726c); /* function */ 

        //TIGHTEN   //Make sure cardType exists and we dont have bad data coming in
coverage_0x97274b49(0x8c87f344b60ccde2aab4295de54be092f84e805592f98a8e7a1b5e15451a32be); /* line */ 
        if(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId){}coverage_0x97274b49(0x3f1acaec797348c586492163c72fa9be799131119c8cd20e245c7095e37bc4ce); /* requirePre */ 
coverage_0x97274b49(0x0c3d22a781a63ad35e69032336dfdae16c363cab74a1730c49940d5f9c601ac8); /* statement */ 
require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId);coverage_0x97274b49(0xa2aeec3a15904c581d505c84cf5ac12d74f66c3c9496c4e73965e3abec29789d); /* requirePost */ 

coverage_0x97274b49(0xc7c8bd0b881d3d8ed34b5c3e0e916b9c0f28ece1b51a4262fd58b7532272ff88); /* line */ 
        if(storeBoosterBonus[_cardTypeId] < 1){}coverage_0x97274b49(0x24083481ac06f4458f178471525d8073fc42b4e2e803f5b054c0bb0dbe3f287d); /* requirePre */ 
coverage_0x97274b49(0xc37b7b48140406116d1fc5cba96fee2fc578e774f6b5fd5945de0539080e8a3f); /* statement */ 
require(storeBoosterBonus[_cardTypeId] < 1);coverage_0x97274b49(0xee9d5d464bdf649070012db52be3a0cd0f134075d3e48506227530000c86b65d); /* requirePost */ 
 //you cant get cards marked for booster pack or bonus
coverage_0x97274b49(0xeb9c1936cd084764147e4f8b0050136ae47311d687f7b3a73b0a7bcb6d4a57cb); /* line */ 
        _;
    }

    function f() external {coverage_0x97274b49(0x1e3518dea4a62b2b348a7262917e3237039a1f150d5bd4c20957176bc74eb3b0); /* function */ 

coverage_0x97274b49(0xb6254d2989e35df97beba7233461c59af2289d655b867c66e5d80252e08d69c0); /* line */ 
        coverage_0x97274b49(0x00befc392e37c8ee9c24372828b3b850101b687c59f56b539ca09fa9aab26e95); /* statement */ 
revert();
    }

    //Set our cxzp contract in the constructor
    function initialize(address payable _czxpContractAddress) onlyOwner public {coverage_0x97274b49(0x73d5fddfab23002b1db4db4825b3079edd6a8142192bdcb8deaefab866bfeb52); /* function */ 

coverage_0x97274b49(0xf8d32527404485990e37630b35ccae1d6368bcd9931c390fd39571f2a17ef534); /* line */ 
        coverage_0x97274b49(0xbfffb70b85d0b063f0a198cf613909bd3462eaf0467d87f72ca857e51a1da4c6); /* statement */ 
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
    ) external onlyOwner returns(bool){coverage_0x97274b49(0xe28a45f9c2916960637e5dd6976fc569e8a45969497a8bb51be221a0c11bfe09); /* function */ 


        //what requires should we add ?

        //a max. of 5000 types in the universe ever
coverage_0x97274b49(0xb62f8b86e8ecd86dbe388e4cd40ee8cd1e90075305c9c6067bb5c6e00a321c27); /* line */ 
        if(cardTypesIds.length <= maxCardTypes){}coverage_0x97274b49(0x3e4089cbd9eeb3f73f367b0426f8e71b9a4fe970df5ceefe30f5baf1201b3a57); /* requirePre */ 
coverage_0x97274b49(0x87c0303d1c5561404d57492a7e878517f4fa43a0866f9c5eaced668936b87af4); /* statement */ 
require(cardTypesIds.length <= maxCardTypes);coverage_0x97274b49(0x7ba3123b80f367d0a49d360a6f3f9b0dceca32369f39d2dc5c1c0f8b2160c33a); /* requirePost */ 


        //not allowed to update existing cardTypeIds
coverage_0x97274b49(0x41b9b21f856e6f8fcccf09600d2dd1d21db5e49fd119dc4a53ced49e75391067); /* line */ 
        if(allCardTypes[_cardTypeId].cardTypeId == 0){}coverage_0x97274b49(0x19e6d39eb81355be91c06bc75595749484a141e0010adef09efce0341affab19); /* requirePre */ 
coverage_0x97274b49(0x181fe263b5806026c9edcb9f2a6e8af15f1e93b780870db471e2209f2b2c6ca4); /* statement */ 
require(allCardTypes[_cardTypeId].cardTypeId == 0);coverage_0x97274b49(0x02bad0e9e5649b79cf49231996ad168d27c5ada4e877b7d01274c35389c7607a); /* requirePost */ 


coverage_0x97274b49(0xe66c4c59b019d976c275104a6a7ca14d8d3af1bf926d6a04fb64beb7113d3de2); /* line */ 
        coverage_0x97274b49(0x071616b386dcc57e6d6439ff88f1310c631d20600625c98b8e5f46829103158b); /* statement */ 
allCardTypes[_cardTypeId].cardTypeId    = _cardTypeId;
coverage_0x97274b49(0x1451a760bcb6c4486aa04ed3e48f81e0a9df148c25961ee9f30ff50c5383fa07); /* line */ 
        coverage_0x97274b49(0xcf03298d5ea1f5b3489b8cea4980669f9df83beb942fd198eb713e9ee9021376); /* statement */ 
allCardTypes[_cardTypeId].name          = _name;
coverage_0x97274b49(0xeb1ee9ddcb973fce1647f1bbece711f4a885018a1dd42fca65818b6b5b3e2d25); /* line */ 
        coverage_0x97274b49(0x6d3e6c1c7bcd498eea20c27c99ddd0b46c8b9bc4b2eecd2e933c87db1667aeea); /* statement */ 
allCardTypes[_cardTypeId].set           = _set;
coverage_0x97274b49(0xbbff2cff000f3dfd9c60922cac5b3a62662b18b75948f2f40182e21490a4211f); /* line */ 
        coverage_0x97274b49(0x77a59cb53c0644dfa73ab14a87995f0a3d858bf40eb744d42cedf361f1b0bbf4); /* statement */ 
cardAssetType[_cardTypeId]              = _assetType;
coverage_0x97274b49(0xe212ac26d5b649348e727b61be737849bfd39dc96b26e5b98e2a7c1ce385b088); /* line */ 
        coverage_0x97274b49(0x4a6c358ee9cdf9db93d3427a319fc4265bbdb5630c53385da898266923b56311); /* statement */ 
storeBoosterBonus[_cardTypeId]          = _notStoreOrBonus;
coverage_0x97274b49(0x5c4169c8767f933f5ae37b034bb80b5e3f8df965062d10c5d4b2c65b90f94702); /* line */ 
        coverage_0x97274b49(0xf201d22d753dfd28f78ce816997f94ad41165052d0bcf56508996786399de3b6); /* statement */ 
rarity[_cardTypeId]                     = _rarity;
coverage_0x97274b49(0xa73dd0ab0067079f89fa367b0477f94f136630cc387df624da6ae868549bb566); /* line */ 
        coverage_0x97274b49(0x785184ccc3b1f2d06c9b6d51ecf990c2108f7ec4145bd8cd25ba89cb57bafc5f); /* statement */ 
totalAvailable[_cardTypeId]             = _totalAvailable;
coverage_0x97274b49(0x518e417c1b263ab15e6d2198dc349e3eb3cb0b5388b90638a34a8c20ccbff50b); /* line */ 
        coverage_0x97274b49(0xa6f45b22cb5d05433ca201c454d07df492e0ae3e81193e0bdb0db318af1956f0); /* statement */ 
allCardTypes[_cardTypeId].weiCost       = _weiCost;
coverage_0x97274b49(0x421b51c8468d5d63c4933ce9ec975ee4462a6f7f8db74be24a60d80addf19237); /* line */ 
        coverage_0x97274b49(0x626e290864b587af6703648c90c6fe0a91d49b29582bef732a9646cda584d912); /* statement */ 
allCardTypes[_cardTypeId].buyCzxp       = _buyCzxp;

        //If she be booster worthy
coverage_0x97274b49(0x954648c938896863fdfc9f5576ec24a688c5464081c435e9b96a5922155adc1e); /* line */ 
        coverage_0x97274b49(0xf8b062645ed8271a6b93b4d4d04707a6e304bdcae57bd3ce4cc081887cc2387e); /* statement */ 
if(_notStoreOrBonus == 1){coverage_0x97274b49(0x142323008426e710c6b42187928b4a3ba2323756f7b62b3202c647f898a38ab7); /* branch */ 
 // 0=store,1=booster,2=bonus
coverage_0x97274b49(0x8188465e4d56c6628b4cebf341f52b99f01e85c62b69ed506f5d16e1d3c5eb4b); /* line */ 
            coverage_0x97274b49(0xae37e2d76c0f6312fd4760b7db44aa1b8b7b5ee3823365fe58fdd8f88efe9e01); /* statement */ 
allBoosterCardIds[_rarity].push(_cardTypeId);
        }else { coverage_0x97274b49(0x58eee54d145ea253b9a4980e380857de24e0cccc361c88ed8c5155d751fd8b0e); /* branch */ 
}

        //Track the cardTypeIds count
coverage_0x97274b49(0x8287c491d208fde6118f1b3616feac85b7e75a678415ebc53e81dba7b1879916); /* line */ 
        coverage_0x97274b49(0xee6e95a381c7c052fdc9bc9772a8c3642deccec0115fcaa014323d71fbefe1b7); /* statement */ 
cardTypesIds.push(_cardTypeId);
coverage_0x97274b49(0x02c68fc5de0e5cf1b4f7d0322975cb97fa75d0dc19cb38258f96912e7513ee59); /* line */ 
        coverage_0x97274b49(0xc6331fd0c4c888fbe1fad3a44d373e68cc8b4c03812a1d033a77d4adc129b3bc); /* statement */ 
return true;
    }

    function addTocardType(
        uint32  _cardTypeId,
        uint256 _transferCzxp,
        uint256 _sacrificeCzxp,
        uint256 _unlockCzxp,
        uint8 _cardLevel
    ) external onlyOwner returns(bool){coverage_0x97274b49(0x94e7b80a1653307455c48a5811e1498224851608fc9f9c96b77f019d2bc2afb6); /* function */ 


        //not allowed to update existing cardTypeIds
        //TODO check for NULL in case we push 0 for a property
coverage_0x97274b49(0x2eff6a615c08e35050a069824ebedfb0b748f83203dd6473b068f19912339262); /* line */ 
        if(allCardTypes[_cardTypeId].transferCzxp == 0){}coverage_0x97274b49(0x4cb04826dbbd7d9fe2c91e3961382ab84f3953fadde442fe2134e486a0be073a); /* requirePre */ 
coverage_0x97274b49(0xc4e27f4bda7e43b3478fc85249b3cd85249e7c471627414ff7dfd61463db10b6); /* statement */ 
require(allCardTypes[_cardTypeId].transferCzxp == 0);coverage_0x97274b49(0x466ef061f2b04cf9c7c85211689e3937d9e44ae9c4ad891539246b0f2f8d4140); /* requirePost */ 

coverage_0x97274b49(0x7bf7d38e10111c109fc64d4de302aeec03182d7c1988f34a887fb9ee52d7b76a); /* line */ 
        if(allCardTypes[_cardTypeId].sacrificeCzxp == 0){}coverage_0x97274b49(0xddb63952cd07468a4e13a17351d47203feb414bf3d095a047522b9c875b70e12); /* requirePre */ 
coverage_0x97274b49(0xbda9041295a747b51439f7d329445063fc66a8560b3b78a14f96ea80e5194264); /* statement */ 
require(allCardTypes[_cardTypeId].sacrificeCzxp == 0);coverage_0x97274b49(0xcc7b8cc6e647b7fde594a56c7745547bb1a99975118362fe13de31666bb6bc56); /* requirePost */ 

coverage_0x97274b49(0x977a72b9b08c85f50952f45b8431f219c03f5b20e621e8b60cde0b231e6af313); /* line */ 
        if(allCardTypes[_cardTypeId].unlockCzxp == 0){}coverage_0x97274b49(0xe54fb187234ca02114a7fc0231d6039cabd1185344c8ece036f12c3d2cc88a31); /* requirePre */ 
coverage_0x97274b49(0xf81fe5ecbe20fbfae8d895e4daac535667e931e221a281060dec647c17e36c54); /* statement */ 
require(allCardTypes[_cardTypeId].unlockCzxp == 0);coverage_0x97274b49(0x74a502cc1d06866c04f3fbe66f75d5dcfb1f4796ba1826b151154dc3cd3eafec); /* requirePost */ 

coverage_0x97274b49(0xba8b136ba0463e58ce60d962915ce3d773b037f9af378f0616991ce9630326cb); /* line */ 
        if(allCardTypes[_cardTypeId].cardLevel == 0){}coverage_0x97274b49(0x5260de9fec2835cdee9626287e9f550bd073f6c49396cb78e41a3db6cf2e9be2); /* requirePre */ 
coverage_0x97274b49(0x38a38c4b58d96e27fecbb119f1c22921dda15fee6e253967ab45a7b339e18d02); /* statement */ 
require(allCardTypes[_cardTypeId].cardLevel == 0);coverage_0x97274b49(0x4ffb41bb25bf605f7f694eb7c6ba3f6848abc48a73911d3e7f1719db0ae52612); /* requirePost */ 


coverage_0x97274b49(0x15645e5c4f520f0b177f9ebcec36ecf84c46c647e496f568dcce9386aacef234); /* line */ 
        if(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId){}coverage_0x97274b49(0xb496fe54d2ba9d3bcf7cac8463b81040d3b1b32e8728b2168e26808b831e50bb); /* requirePre */ 
coverage_0x97274b49(0x64d2771b0bd56b845f3ba6c034cbba7eecaff4c09ed12820f0de8c834713c304); /* statement */ 
require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId);coverage_0x97274b49(0xf33fe8350b6794536cf77a09b21a25bb2a3050ce62552819ecc1505a50b659ed); /* requirePost */ 



coverage_0x97274b49(0x7eab505292581d9487547d1c9cd687e29029498b3f24bae6c84a726af55a8901); /* line */ 
        coverage_0x97274b49(0x59ecfbb807bfd5ac9e8b9ad13e57766d2f5498c1d98feb369e6084ee68f881e9); /* statement */ 
allCardTypes[_cardTypeId].transferCzxp  = _transferCzxp;
coverage_0x97274b49(0x885ac82316849a04e83f99f4a5993e001bd16b887b378d5a51db25c2af746d79); /* line */ 
        coverage_0x97274b49(0xd226e3502a2d20f9d44389737257e6563afd05e8698fd4d3ac1fa5064d9ce54e); /* statement */ 
allCardTypes[_cardTypeId].sacrificeCzxp = _sacrificeCzxp;
coverage_0x97274b49(0x7b6db4ddd90a1743695cd22c4a290578b898bfd0f171757712485e3eed02fdf7); /* line */ 
        coverage_0x97274b49(0x31121dd350fe78d8ee5a0299e0d67cb78b529f7ba30ab6364e8e1661532dab13); /* statement */ 
allCardTypes[_cardTypeId].unlockCzxp    = _unlockCzxp;
coverage_0x97274b49(0x13c2af4c3ad36897b07e9c5f2e80d589137366b59e0ba1a43f655ff861574203); /* line */ 
        coverage_0x97274b49(0xeb1ac58d1403fdce856ec52a621c98e5b3936c8bbb1d29066c970c6e65bc96aa); /* statement */ 
allCardTypes[_cardTypeId].cardLevel     = _cardLevel;

        //initialize editionNumber
coverage_0x97274b49(0x9150e7dfdfbd10ac9782a0af10bb53e5d49e988acfd173ce73f7762b5569777f); /* line */ 
        coverage_0x97274b49(0x6e604673606552c2e03ad5ce58a9d0e1148c6993dc28b9abdfc08f7cb752ef67); /* statement */ 
cardTypeToEdition[_cardTypeId] = 0;

        //Card type is defined, now emit a Log of it
coverage_0x97274b49(0x0ee9965cc7e798826d8ec1b375de486d57012222d93db66f3df0402251d81255); /* line */ 
        coverage_0x97274b49(0x52edb781f60bbc193e3811862ce8dd9a125a2aacba390c6ca4d20ec4efeaaf63); /* statement */ 
emit LogCardTypeLoaded(_cardTypeId,allCardTypes[_cardTypeId].name);
coverage_0x97274b49(0x4282a546b42833dc5ab7ee696236a02ea97d9b804467b32c59173a706b63337c); /* line */ 
        coverage_0x97274b49(0x3d64d45721d4146e87e4f7b9451d4c57ab04581429ffa94ae45dae1ab5776f89); /* statement */ 
return true;
    }


    /**
        /**
         *  Public interface to purchase a card, probablly the most insecure entry point !
         */
    function buyCard(uint32 _cardTypeId) external payable isValidCard(_cardTypeId) returns(bool) {coverage_0x97274b49(0x0ba5ecd16a169c14ac2e58fd2ff818e9019ce5bff17d7695650cc1046d086609); /* function */ 


        // dont even bother if no ETH sent
coverage_0x97274b49(0x5fdc73d9cd8a1a07d7c7c66480a7fd0f524aa07e290e79b19bddfa3ed66bf67e); /* line */ 
        if(msg.value > 0){}coverage_0x97274b49(0x4160a5012c80fdaa72b8beacd4f507b0bd3fe27068459574beb2c1598395572c); /* requirePre */ 
coverage_0x97274b49(0xaa2d1759ec201652d4936943c3fc26ed324de7c21ab8535ba7db3ca19beb286d); /* statement */ 
require(msg.value > 0, "Pay up!");coverage_0x97274b49(0x35249ac91d293167418f2368d1f399cae2958e089ce5d2b72635b42947c65f13); /* requirePost */ 


        //check for valid cardType
coverage_0x97274b49(0xc4a1e43a55a92f437ab5c9e2fa42c1154eec60fedc48ef570392dd8fe5f3d703); /* line */ 
        if(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId){}coverage_0x97274b49(0x0d79d3d0e31d66f3209dc76c41f84bb1482d4b706772c07d65bad5dc32ec5b38); /* requirePre */ 
coverage_0x97274b49(0x59c6a7df29ed4977c8ad0f25b65bbd239b8014bdb44c29d72eab99984dc7c523); /* statement */ 
require(allCardTypes[_cardTypeId].cardTypeId == _cardTypeId, "Cannot buy cards that are not defined");coverage_0x97274b49(0x4940ee48d54d9b326fe0b9744956302e7e6f0c783ba0e5effb262aa65a50eb90); /* requirePost */ 


coverage_0x97274b49(0x723a52f3a203cafd220aaf58e4295dcf1887817387f184d656ccb7bca54526eb); /* line */ 
        coverage_0x97274b49(0xbe703360bfa24d4ea71a371bf9734dd5c471b7dfd327d47c888850db51e048d3); /* statement */ 
cardType memory _tempCard = allCardTypes[_cardTypeId];

        //check if store only
coverage_0x97274b49(0x7a757c89e35f53da475d2f612402075c039c422f704b694c14b2638b7370f979); /* line */ 
        if(storeBoosterBonus[_cardTypeId] == 0){}coverage_0x97274b49(0x423cc10191a1f9bfb2f8460573c88843b6b13f8ad7cb71495f9432270425c1d1); /* requirePre */ 
coverage_0x97274b49(0x6356f64127d4abc1fa1096108da641f3ab8dbcdade85af8c8305bf03d5a6b387); /* statement */ 
require(storeBoosterBonus[_cardTypeId] == 0, "Can only buy cards from Store");coverage_0x97274b49(0xfcad2788f1e69a040b8f53546b7bb0c1bd99c7599430127b5aaf184a7959ce16); /* requirePost */ 


        //CHECKS-EFFECT, Can't buy cards you own
coverage_0x97274b49(0x08764f731a47bfc4347b2fdeca941c1cac4a9823af89410c140898e4571b7433); /* line */ 
        if(cardTypesOwned[msg.sender][_cardTypeId] == false){}coverage_0x97274b49(0x4b598114f689813882cb1582e34820656899c6a3c0a298b88c6eedd1704ef952); /* requirePre */ 
coverage_0x97274b49(0xc1609f6c58516f2134ffd78239fd8e7ba153ab9c630876eb2340889922dd9ddc); /* statement */ 
require(cardTypesOwned[msg.sender][_cardTypeId] == false, "Only 1 Card Type purchase per wallet");coverage_0x97274b49(0xde1936ba4fd0000fdea4ec196b470948cc77022155dbb2266754d3e92606139b); /* requirePost */ 


        //Check if this card amount we sell is more than edition+1 for this card type
coverage_0x97274b49(0x6dff25fa6769eadeb98f64c8af6b87eb8e682da9ca49812743679dba30f9b0a7); /* line */ 
        if((totalAvailable[_cardTypeId] >= cardTypeToEdition[_cardTypeId] + 1 )){}coverage_0x97274b49(0xc425becc51c563ca33743f6dfac38037d226fb452ecef5769fec996d41063434); /* requirePre */ 
coverage_0x97274b49(0x65ca9895d7840a2fe58873ea5389e3bd424d6ff7da2fbccacead44013af27345); /* statement */ 
require((totalAvailable[_cardTypeId] >= cardTypeToEdition[_cardTypeId] + 1 ), "Maximum edition reached for this Card Type");coverage_0x97274b49(0x613b1f37ad86de6479970cac817baa83bcaac5f85cf4b978500f20feb64efcd3); /* requirePost */ 


        //check if they have paid enough for it
coverage_0x97274b49(0x7e2e615f198ad238287efb7d21bdb03e90f471862f2762980b084160589dfa2a); /* line */ 
        if(msg.value >= _tempCard.weiCost){}coverage_0x97274b49(0x698b2e5668eda6b9ccd37251bf09d138ec9ba89ce9aead5bea91fee191aa1907); /* requirePre */ 
coverage_0x97274b49(0x1d3364bf124504a47d95412e6c177d62512e31836a98ba1a9bcfbcefb1bfc2ba); /* statement */ 
require(msg.value >= _tempCard.weiCost, "Not enough Ether sent to purchase this card");coverage_0x97274b49(0x9afd708460db10bf58daaffcdf7d5e70edea702c628abb21f773d8564af7cbb2); /* requirePost */ 


        //check if we have enough czxp to unlock this card
coverage_0x97274b49(0x30e771b8d828e307c1f1be7aad2b893a4caccfa053f7c57e7f986897c6f490b7); /* line */ 
        coverage_0x97274b49(0x083b75298511622c57e5acba8d6012e572d07383e90c9c96999253d14cae53cf); /* statement */ 
uint czxp = CzxpToken(CzxpContractAddress_).balanceOf(msg.sender);
coverage_0x97274b49(0xa12f2b9f3cc3cd3ccfcd9db8c3492b00955bc67a43e3ddf376b6757da187a046); /* line */ 
        if(czxp >= _tempCard.unlockCzxp){}coverage_0x97274b49(0x336c81e57351333355385e13c5b3af75e8f89837aa7553bc4a3b0d8a2d669ef7); /* requirePre */ 
coverage_0x97274b49(0xc9acd79de29dedeb89188366ec5affe2d7a21e0c869d94dcf6bec684591b16ba); /* statement */ 
require(czxp >= _tempCard.unlockCzxp, "Wallet does not have enough czxp to unlock this Card Type");coverage_0x97274b49(0xe4df23045f1c5939b1c61980d471a4fb28a6286bd39b014fe25088254f9940c6); /* requirePost */ 


        //Clear ? to buy the card

        //stop re-entrancy. Track the type of card puchased for this owner, so they cant buy again
coverage_0x97274b49(0xf568bd41d2b919fe7bbde18154f11a57f5d1e60904c3bd3e439fbba2064b038d); /* line */ 
        coverage_0x97274b49(0x71d2a4f4cdfed090c409a41134926f6614f4d923c88d48b70e4dc94d2da81af9); /* statement */ 
cardTypesOwned[msg.sender][_cardTypeId] = true;

        //Let the universe award our friend
coverage_0x97274b49(0x405d2adc285e871c6d2397cf3959b92a564666c31fed3ff612a52446e5e6cb69); /* line */ 
        coverage_0x97274b49(0x489ed72f74a9c673a5d03985039a6984e91fa72770755a7994561bcc8b93a644); /* statement */ 
super.awardCzxp(msg.sender, allCardTypes[_cardTypeId].buyCzxp);

        //and award their sponsor
coverage_0x97274b49(0xa768a692df3c49e8840cc3f5506ccad0b072758cd0f3fd5be50577c780c06658); /* line */ 
        coverage_0x97274b49(0x9183531f7749f160f90576960a0d0cbb42f5692d2039e61f4ff6875109e4d141); /* statement */ 
rewardAffiliate(allCardTypes[_cardTypeId].buyCzxp);

        //Mint the real token and pass czxp gained for logging
coverage_0x97274b49(0x6c17739042beac1a01f1c490c4df58838df1a428233bb8a83edc6c50d562d9bd); /* line */ 
        coverage_0x97274b49(0x2f75551e409b3d2fcedbcef98a06a60ab125c109fb9d91fc2824437573251d5e); /* statement */ 
super._createCard(_cardTypeId, msg.sender,allCardTypes[_cardTypeId].buyCzxp);


coverage_0x97274b49(0x6cdae79a5bb1b335429d67ede894e25e4bdb5b5e1c7c8cf385ad000fd3994ecf); /* line */ 
        coverage_0x97274b49(0xa0827f4b1100600ec476cdc30cefeb00a6bf2696be1b5c809b9e8974f6039331); /* statement */ 
return true;
    }

    //every 8 hours, the address can get 2 free booster cards
    function getBonusBoosters() external {coverage_0x97274b49(0x91c7e7afe812c4e6341acddd688a6bdf0d0a5d3610a64911eb3ff6c011e15cc5); /* function */ 

        //this only runs if time to get new cards
coverage_0x97274b49(0xb7981aba7e8616ca55a75554a39b0ce97a2da300e90e9b8b784b90058b8096ba); /* line */ 
        if(now > getTimeToDailyBonus(msg.sender)){}coverage_0x97274b49(0x27c73cc455ee78e95c33b12ef483716bbc843f2af8b8a5ad235937e101a38ef0); /* requirePre */ 
coverage_0x97274b49(0x80f4ebc87cd454c78855e23ae90ddb83500b5b34228ddf18c95d567552778f48); /* statement */ 
require(now > getTimeToDailyBonus(msg.sender), "Can't claim before time to claim next bonus");coverage_0x97274b49(0xb9689a36a0c9a1040eb77a54214c12ddaddf2c48a958d2c2bf0cd5fa0ddf9d1c); /* requirePost */ 


        //Stop re-entrancy, update the lastpull value
coverage_0x97274b49(0x4f30caeec065175221f7aa8c78917198049ad36d31a3f91670d011f0e9776648); /* line */ 
        coverage_0x97274b49(0xd1aa5a2bf950c24906f9a5ad49cd8126049fdb80cb0dbcc7bc89d00b291c624b); /* statement */ 
timeToCardsPull[msg.sender] = now + 8 hours;

        // add the boosters and emit event
coverage_0x97274b49(0x047890dcf606eb1605337539aa571ad5d2143cd204103e588ec99266fa6b5262); /* line */ 
        coverage_0x97274b49(0xb06172599d8f0a9ab291f6d89687a5093b8ae8cf2749f02b2b9d9b8e9e1b4cf2); /* statement */ 
boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].add(2);
coverage_0x97274b49(0x3834925a29b520722c473c84583048e2c3e7695096582d13cedf27aa418fcb05); /* line */ 
        coverage_0x97274b49(0xe4e4e9a611eb480746b8e831c1da5d32880c2f1f79afe957de18a1a36beb0ae2); /* statement */ 
emit LogDailyReward(msg.sender, boosterPacksOwned[msg.sender]);
    }

    /**
     *  Public interface to get card at no cost
     */
    function getFreeCard(uint32 _cardTypeId) external isValidCard(_cardTypeId) {coverage_0x97274b49(0x01c0153160dc427b6945b8dd45b3fbc75c74e4a90d87147362a4f6aa685f2da5); /* function */ 

        //check if store only
coverage_0x97274b49(0x2337ca143b8dd7e09ad7e533796a6d3d9272f00c7794e2d0993165b08ec348d8); /* line */ 
        if(storeBoosterBonus[_cardTypeId] == 0){}coverage_0x97274b49(0x15c670abe2913bf9395ad724c10f61466d0173c4c8eebba95d56b1e490058f4e); /* requirePre */ 
coverage_0x97274b49(0x99facb9339f889f9d65b87f885f3de6a59dd62f553f655ffef666a159afadf80); /* statement */ 
require(storeBoosterBonus[_cardTypeId] == 0);coverage_0x97274b49(0x50d1011bc52636cbdc8b3c042a119b69109a544e56630922d7321d44da582de0); /* requirePost */ 


        // ensure there is enough of a supply left
coverage_0x97274b49(0x3e97d3c83ab42302ddc372346e27b309e9806ed0649774eb08a54f7212ec576f); /* line */ 
        if(totalAvailable[_cardTypeId] > (cardTypeToEdition[_cardTypeId]+1)){}coverage_0x97274b49(0x9087fc70b0525f5291ed8e3cbd1c17bfe8772502b18680c22295f7e3e2cfad52); /* requirePre */ 
coverage_0x97274b49(0xe0709acd6f04b3745b3f588216467cb1390caafe8cd7d878a00e33f809c36c66); /* statement */ 
require(totalAvailable[_cardTypeId] > (cardTypeToEdition[_cardTypeId]+1));coverage_0x97274b49(0x67483335be3434ae930951502420c03387cc1d36cd12c98a3e29d4e8c410800b); /* requirePost */ 


        //Can't get cards From shop that you own
coverage_0x97274b49(0xe43f1e049d11af645f83773bf2319382b4533e77ee91030630705234fbb07080); /* line */ 
        if(cardTypesOwned[msg.sender][_cardTypeId] == false){}coverage_0x97274b49(0x84200404276d9e888a645b3d20e5ee9ad22356853bad97136cc77410a9ae51f6); /* requirePre */ 
coverage_0x97274b49(0x2fa2ebb49c3e5eb26f337cb606bff79fff3d71947761eccde04e309998e2006f); /* statement */ 
require(cardTypesOwned[msg.sender][_cardTypeId] == false);coverage_0x97274b49(0xbc44d2355bf5ca65656e9de6dc89d8aacab2ffe9c0108a5ed7d4289550120383); /* requirePost */ 


        //check if we have enough czxp to unlock this card
coverage_0x97274b49(0x171d044155e8006079a9bd1d1f5355bdfbc9c542cd7235b0d79209473c40cca3); /* line */ 
        coverage_0x97274b49(0x3ec789952a9f33ef4a8c3268636883ec0777a1cf4ab128f51563a294d93d2292); /* statement */ 
uint czxp = CzxpToken(CzxpContractAddress_).balanceOf(msg.sender);
coverage_0x97274b49(0xecc87d516357706c842222e66a95df9c2812c934900bdcaa9d18cb9a3d8edeb4); /* line */ 
        if(czxp >= allCardTypes[_cardTypeId].unlockCzxp){}coverage_0x97274b49(0x0503e0a4bb4051002eb45abd6d5eb490315a21940ce8f0830ee066c528581c84); /* requirePre */ 
coverage_0x97274b49(0xb19635ac216761fe9f30b255c6d9209397e8faa9bec9b3e8d25f79c30b165e03); /* statement */ 
require(czxp >= allCardTypes[_cardTypeId].unlockCzxp);coverage_0x97274b49(0xb6141165c46c2e2f9678876cf3d9a9e794efb8af5c287cc5bec44234cf2ce1c0); /* requirePost */ 


        //Only cards that are Free
coverage_0x97274b49(0x447ad6a11645b4132a533c21a9d35017e0ad5e56be5d9eda4d9c87199ee1d605); /* line */ 
        if(allCardTypes[_cardTypeId].weiCost == 0){}coverage_0x97274b49(0x03898bbc552dd6a9ff8e287bcc31d0f47757b2b9b82ac9a57a9a71c2de2be356); /* requirePre */ 
coverage_0x97274b49(0x8ef702966b02d52b14d65c93372998770a5ee6f6eb9fcd6bafac3fe7820280af); /* statement */ 
require(allCardTypes[_cardTypeId].weiCost == 0);coverage_0x97274b49(0xaebf26175b28c1cff3e9aa34a2723f3c2055d6735fb1773a471a6b53241ee4d8); /* requirePost */ 


        //ALL CLEAR ???????? claim a new card

        //Stop re-entrancy, Track the type of card puchased for this owner, so they cant buy again
coverage_0x97274b49(0xa5f440b8474356dd0c5bfa3e02b3313b71ef6e90d501fb9584b740fe1d2af669); /* line */ 
        coverage_0x97274b49(0x5c88d1e6410507c530a33cf9e3b1f46783a25a829b697ea5ee0ac4dc7bc34146); /* statement */ 
cardTypesOwned[msg.sender][_cardTypeId] = true;

        //Let the universe award our friend
coverage_0x97274b49(0x8e5bb8e292a7d374fdc188aba6a7e756aba5d1d9b970a2ce6c8eb9c10fe533d5); /* line */ 
        coverage_0x97274b49(0x4b565b2a2258f02916145f4ef49d08de2adefa087658e963d57eaf1c7e7b8e08); /* statement */ 
super.awardCzxp(msg.sender, allCardTypes[_cardTypeId].buyCzxp);

        //reward the sponsor
coverage_0x97274b49(0x3080858f367f65c212d198809ec5ea4b6ff55043bfdfc0fac08ad39c1f154879); /* line */ 
        coverage_0x97274b49(0x2ef5a0efed74b50299324d723f132bdd1efbda2b277ede1cf9311d176ea6debd); /* statement */ 
rewardAffiliate(allCardTypes[_cardTypeId].buyCzxp);

        //now mint the card
coverage_0x97274b49(0x27e03dcc642d59e0792c6152c1e98baddc05e392e5c84da4684b35359eb35888); /* line */ 
        coverage_0x97274b49(0x307bdf15f298af078b5eea8eca99a390d42a258095042eb9f6209b305435d01c); /* statement */ 
super._createCard(_cardTypeId, msg.sender, allCardTypes[_cardTypeId].buyCzxp);

    }

    /**
     *  Any user can sacrifice any card they own. Please don't burn down the universe :'(
     */
    function sacrifice(uint256 _tokenId) external {coverage_0x97274b49(0x66a65e00174654076cd79233b958bd71693cfa9979eff93a138014e7ba677517); /* function */ 

        //Call our internal burn function does all our owner checks
coverage_0x97274b49(0xe546ee676afde7186a1e998e1a038a017b74a883c5b22cd7fa3538003f9b170b); /* line */ 
        coverage_0x97274b49(0xca18c88db7009f5abd1f4fad7b764a25ad561fde912087c5761947a02ad0dccb); /* statement */ 
_burn(msg.sender, _tokenId);
    }

    //Booster Pack functions

    /**
     *  Public interface to buy booster card(s)
    */
    function buyBoosterCard(uint _amount) payable external returns(bool) {coverage_0x97274b49(0x84b4561607d11d3253db0ba0894526d56a5d63c127461a84fee99d1f30a3e09f); /* function */ 


        // is there enough wei sent 1 pack = 0.002 ETH ?
coverage_0x97274b49(0xe49e7d5e61dc87aaa0819a9cfd9e20321d6c89ae068d57c4cc40b9115c2fb232); /* line */ 
        if(msg.value >= weiCostOfCard.mul(_amount)){}coverage_0x97274b49(0xc51640f06b326986330ab5bca10cbce03fbfd86f03cfbbcbe996ded20237de7d); /* requirePre */ 
coverage_0x97274b49(0xd772045ecb45214d91cb79edf1cb82f8fd769b83f82bba929d0c22f6e066b774); /* statement */ 
require(msg.value >= weiCostOfCard.mul(_amount));coverage_0x97274b49(0xa40fd6d3f16a7e9816b3b88ed85ce7f7dd374c89a018d097e63d4e86908f9922); /* requirePost */ 


        //All good increase the number owned
coverage_0x97274b49(0x094f97f4283495b111ba7af0b0339677619934af2323b0efd17521d4fa462670); /* line */ 
        coverage_0x97274b49(0x30f555c3496ec71770be2ccbfba06203d3ebbcf801459b76131bee165d7171c2); /* statement */ 
boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].add(_amount);

        //Award czxp for booster
coverage_0x97274b49(0x67acdff316f33dc006fbd09eaea38230d1862adca7a76fdd9e00a72a546ae0cb); /* line */ 
        coverage_0x97274b49(0x3d3fc298abc7431e8824a80a4df4b3e3f4c86b24adce92561858b16f5470eeae); /* statement */ 
super.awardCzxp(msg.sender, uint(czxpGainedBoosterPurchase.mul(_amount)));

coverage_0x97274b49(0x7b9ef35e6777f4451143d7ffe3b5acc9ecf18247b1ec551561286dfb8e6dbd27); /* line */ 
        coverage_0x97274b49(0x60caeeb408b60558df802e80c622d64f9ae295dbf10ece935e217fffbfa9f5ad); /* statement */ 
rewardAffiliate(uint(czxpGainedBoosterPurchase.mul(_amount)));

coverage_0x97274b49(0xca9f3f43851051a236f418d1e7c395f2b1c58aa40bb91dc9885649810c5ab5af); /* line */ 
        coverage_0x97274b49(0x4529ec021a4cab5c43608c4d9c660a621ca8075dec5b33cfd7548c28e353391c); /* statement */ 
return true;
    }

    /**
     *  Public interface to buy booster pack(s) and open them - NO burn option
     */
    function buyBoosterCardAndOpen() payable external {coverage_0x97274b49(0x2e919090411d12b537a37cf5379f1919ca521cbcf0903e7e40765351ece58a4b); /* function */ 

        // is there enough wei sent 1 pack = 0.005 ETH ?
coverage_0x97274b49(0xb737800695e9b4740d218ec3e697ee8f9effff295632ce99320cde26817b71ec); /* line */ 
        if(msg.value >= weiCostOfCard){}coverage_0x97274b49(0x3b0efde89ed8da7ed9227167ed95cef351c61edd492bb135ecc6960fde3f7f55); /* requirePre */ 
coverage_0x97274b49(0x0658db98042fc663b6199c9e6e48ec3693165d0a1fe8d2b3600054c07190fd92); /* statement */ 
require(msg.value >= weiCostOfCard);coverage_0x97274b49(0x2c9152238a75cf09bb6219f16cc7ac2ae52ec88cba2b67743999f14513fd1121); /* requirePost */ 


        //All good increase the number owned
coverage_0x97274b49(0x14af413f83a982f93593f6246340db0b71cc9fa461c36789493569a782e9d96e); /* line */ 
        coverage_0x97274b49(0xf1aa3d3f715cda71de34d9bf4890460163670e18108615f9dfaaf2dbc61301a6); /* statement */ 
boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].add(1);

        //Award czxp per pack
coverage_0x97274b49(0xa9599330c5fab202468a9c8d2801cebca4426fdc18105832ab72c5f69c538f0d); /* line */ 
        coverage_0x97274b49(0x8bcfc7155b49e645a210aca0de8613b05971ab90b2f834aaadf0371f48013e0b); /* statement */ 
super.awardCzxp(msg.sender, czxpGainedBoosterPurchase);

coverage_0x97274b49(0x2f6fe3c395f58f0f612273fb623b4c876aefdb36e64b09bf36d4575a77a08e95); /* line */ 
        coverage_0x97274b49(0x1e19e88bda833bda05d5b736e4cc4bf1335e8aa161934a0f31be5d4368afb256); /* statement */ 
rewardAffiliate(czxpGainedBoosterPurchase);

        //Now open the pack
coverage_0x97274b49(0x55cd79ff869c31c0c6a1f9031d01f948d7614550c6fe3e3bb2b850a1cc0a7f41); /* line */ 
        coverage_0x97274b49(0x8f9bdf2077a6eb996bd8364b582cef160062f86fb1a623e69bd4f22626fb195b); /* statement */ 
openBoosterCard(0);
    }

    /**
     *  Public interface to open already purchased booster pack(s) - User can wager an amount
     */
    function openBoosterCard(uint czxpWager) public returns(bool) {coverage_0x97274b49(0xc9a49b9175873a104b69739db771b76b0ea3bf26d4e0bd2bd4939db3ed7fb004); /* function */ 

        //Ensure user owns unopened packs
coverage_0x97274b49(0xa4276b219d162717974cc3130178b2958415b54724aaca82c1dd3f3e12ba850b); /* line */ 
        if(boosterPacksOwned[msg.sender] > 0){}coverage_0x97274b49(0x3e9b0896b9112dae359b645434e4f571297984083a981db91b37de7e36eacb1c); /* requirePre */ 
coverage_0x97274b49(0x86c9210564851ba6d91af3e9313c3d16fc6ea286da6c4a8264ab40d65c4e949c); /* statement */ 
require(boosterPacksOwned[msg.sender] > 0);coverage_0x97274b49(0x583e63bb6e64897527b316221f8ae86a881b31d9230301ed0978a3a75e9cb04d); /* requirePost */ 


        //czxpWager check czxpWager
coverage_0x97274b49(0x12f0828156b517eb02c302e0760b337849aeec9e2aa11f9673142907352c572d); /* line */ 
        if(czxpWager >= 0){}coverage_0x97274b49(0xfec79c9a6bcd01cb18256795fbd82ee6c7b6091937906c7e0e07b74cf124470e); /* requirePre */ 
coverage_0x97274b49(0x1ecb67bc25a9614d6f1e2a8799596042c48a0549962d49c8fb3f7cffdb5588db); /* statement */ 
require(czxpWager >= 0);coverage_0x97274b49(0x7a5ea0781faeab57fd2fd809b74df1098469caf264be8fc24f83da8c8bb9f83d); /* requirePost */ 


        //STOP re-entrancy , decrement number of packs
coverage_0x97274b49(0xab9993ebec55fb979c9d2c6ff62c8a928b63a36bf34cb4dd522455d96c9d96cb); /* line */ 
        coverage_0x97274b49(0xfc6d453117728c40902e9a0f46e3a01517fb7404b83fc0c97739ebdb5796dc67); /* statement */ 
boosterPacksOwned[msg.sender] = boosterPacksOwned[msg.sender].sub(1);

        //Pull the card
coverage_0x97274b49(0x622dac014cc6416186c6976c3c154d32292abb93322c818f8cf52670a0983692); /* line */ 
        coverage_0x97274b49(0x352cd8e4d32a7d36a6c5053a618db1d8d086bc78e6520d4b450a245c99a77831); /* statement */ 
uint8 rarity = getRarity(czxpWager);
coverage_0x97274b49(0x1c81c13144545757bfa9d090549d2ae8574ea350d98eea9a35894f3a4af05023); /* line */ 
        coverage_0x97274b49(0xdc2e86eeff6b83499fa5a6dbb26d753c4cf34233e0c76c55f81a816123519585); /* statement */ 
pullCard(rarity);

        //Send a log event
coverage_0x97274b49(0x6b82555380a094681000d2ddc789f08e8837f4a0758893590312f0a5dab8b8a7); /* line */ 
        coverage_0x97274b49(0xdc6bf11a6ed0a932a2c6fc6f9d610123bc43b526065e29ec5962c10f0eed05d7); /* statement */ 
emit LogPackOpened(msg.sender, rarity);
coverage_0x97274b49(0x32adbf83f818726ae732e24b5b5b1033fffc74ea1ee6a713cf5769e31ceb6729); /* line */ 
        coverage_0x97274b49(0x8cfd9ec9284606c4673413151254f01c8511466b329bd6d7ebac2ddc65d19f8d); /* statement */ 
return true;
    }

    /**
     * Public interface to allow a player to forever link their 1 sponsor
     */
    function linkMySponsor(address mySponsor) external {coverage_0x97274b49(0xdf4d56ae52da8137fc2feed887fd0182b3490e1acf9dcf1e6bbd19353479f21f); /* function */ 

        //check that mySponsor arg is not 0x0
coverage_0x97274b49(0x3ebe1ffe2d86e3f3550ae3c85f44be798cd09ed09de2c20b256f0e7b24a8d8bc); /* line */ 
        if(mySponsor != address(0)){}coverage_0x97274b49(0x3b9c9fc15cf23b1712952d340a9c87e1191399cc95b7dda6c11e717365e4ef0d); /* requirePre */ 
coverage_0x97274b49(0x1a937160b9a895f91254579c5abcc34485c5c2522e150b6acb224bab87c9feee); /* statement */ 
require(mySponsor != address(0));coverage_0x97274b49(0x596330c3d47e5fc209054d1102d19c0e2e4195217fc5d096600185285bc9f83b); /* requirePost */ 


        //ensure the sponsor isn't Linked
coverage_0x97274b49(0x6ed8d37a2aa949042c50279bf343303ffdb790a009ade5149f42dc5c8682a862); /* line */ 
        if(sponsors[msg.sender] == address(0)){}coverage_0x97274b49(0x4e660487ef2a69bdc0534de1b0cfcc3ffbd06a03c9334c8c66a5d36d0f97d11e); /* requirePre */ 
coverage_0x97274b49(0x6730f1e770a9600eceb03c9dc5e3d24927b5a23ab114f60c789c0fca4976d20f); /* statement */ 
require(sponsors[msg.sender] == address(0));coverage_0x97274b49(0xdfc590f3d17a95684891c30340406ab96234b48f25dd67f13fb6638ef9667541); /* requirePost */ 


        //Check they are not linking to themselves
coverage_0x97274b49(0xd0daf96de0fae3770501c2da72b30dc50749a8d7daaa4c2fdbe3f0aa8e428801); /* line */ 
        if(msg.sender != mySponsor){}coverage_0x97274b49(0x4cff0e48e09f6509904de411641327a699aee16a530bf477c5197cbf0a121017); /* requirePre */ 
coverage_0x97274b49(0x1a01497d464fcdf9767f22180f973b1d3428c7551956e239a47447e5138cd640); /* statement */ 
require(msg.sender != mySponsor);coverage_0x97274b49(0x66d4573706efeaf1fea2999e8800d33c8a3de62a0555e081210c1def1708f639); /* requirePost */ 


        //All clear?  stop re-entrancy, set the association
coverage_0x97274b49(0x22bdb56ee72158825c5c940668d12dbe78dfd2cb1c8c165050d7d0aeca010a4f); /* line */ 
        coverage_0x97274b49(0xd4e2109161eff6cf4ba1ee01c263054d6dccfde71aa0d7bdf883e0f17ed9a99a); /* statement */ 
sponsors[msg.sender] = mySponsor;

        //Mint the Platinum Sponsor Card
coverage_0x97274b49(0xdf992b268f961bc20f8b68049f49ce21424d40d0588a4f427e47b6a682afb13d); /* line */ 
        coverage_0x97274b49(0x8befd0bc43965c09ea29476421e7ef969267e0a6ba18df692fb04fd092f18cd2); /* statement */ 
pullCard(2);
    }

    //Private

    /**
     * We always pay our affiliates 20% of the czxp
     */
    function rewardAffiliate(uint totalCZXP) private  {coverage_0x97274b49(0x242e494e6bf46ea7f076510054ac1c99175499f2d89dbc217cb4c5d4e53be48e); /* function */ 

        //first check if the caller has a sponsor
coverage_0x97274b49(0xc7108e78a4ff6162a93d51cd0f4880b129f16c14bf3269281342697c07a807dc); /* line */ 
        coverage_0x97274b49(0xaf7f5e389071a713885854950298b93c6ddd6fe5d196e21a594e6ddf40b32ea3); /* statement */ 
if(sponsors[msg.sender] != address(0)){coverage_0x97274b49(0xbd0c34a332c4048b9a72e099d7420420ce5e78a19375156411132b4573163022); /* branch */ 

coverage_0x97274b49(0x553c7a5aba2a00909154a441f1a918401f936e445181c1d10426ff4f30a53e34); /* line */ 
            coverage_0x97274b49(0x86f658b846992ebea92ffc255c7aea7b8fbfbb34196566e150ae45fb5cde1b79); /* statement */ 
uint reward = totalCZXP / 20;
coverage_0x97274b49(0x7ab669fe29df43e2d427402fa0398631f930157bcb8bbc1f2a6ecc6e8c672be2); /* line */ 
            coverage_0x97274b49(0xde8f31d41dc4f6130ead6d78bb25a61cda8d7ae45e668dd85c79ffcd28c01a6d); /* statement */ 
if(reward == 0){coverage_0x97274b49(0xff33e3323627f857e08af290508e05ee0f042a524a61f31d0112e5374053df76); /* branch */ 

coverage_0x97274b49(0xac21ab61415609789144230842ed251df5dda30ae9659019e83030f967dc34ae); /* line */ 
                coverage_0x97274b49(0xf9e97302a614038907d9deb3b0fdafe736a60ac7d85dd1456fad38fa9415b451); /* statement */ 
reward = 1;
            }else { coverage_0x97274b49(0x063e6c8a99865318b415a398b06be1aea4ef1f747ee2f178fe1f0a4583765082); /* branch */ 
}
coverage_0x97274b49(0xa62e0a99597ac08c8f046c5cb4cbc97648a49b371ddedacef79f0b4b015fce77); /* line */ 
            coverage_0x97274b49(0x5d91dbbe64371714ecafde9e84417b4492ec8170881729bb8dc4df573a91774b); /* statement */ 
super.awardCzxp(sponsors[msg.sender], reward);
coverage_0x97274b49(0x2fd49fa23ab72a72836de9f0d34711f3b3218855c558105f122c36ba018f2b7b); /* line */ 
            coverage_0x97274b49(0x12b44b62bbc324688a289b37b3c739f828b3226ec1781c4633b85a406da6db0a); /* statement */ 
emit LogSponsorReward(sponsors[msg.sender], msg.sender, reward);
        }else { coverage_0x97274b49(0xc0bf7e5af0cc761c4caf1bab8040d20b1f4b72e349dbc78dc2ed75b14e0c6e23); /* branch */ 
}
    }

    /**
     *
     */
    function pullCard(uint8 rarity) private {coverage_0x97274b49(0x8eb9b2bf7677a18aa4b06f7bf59784919e7af4cace1203bb95f3f0e41588cbcb); /* function */ 


        //Get a random number for the card to pull
coverage_0x97274b49(0x9a6ce1a3ebd02739d4abb538028e46709451b5249b3821577dcc25f2384261f6); /* line */ 
        coverage_0x97274b49(0x420c3e756328ebcb55eec87d911439418bf46d891490aa0d85625f5ce7ba843b); /* statement */ 
uint rand = selectRandom(allBoosterCardIds[rarity].length);

        //hit up the cardTypes
coverage_0x97274b49(0x7280381254ab32bd423a0efe75d1652f9faed25dd31835fd00566fb37bf23842); /* line */ 
        coverage_0x97274b49(0x4e3c89e02bf2182fd4f59b92a91dbbbdde28320afd570334582624300fdd963e); /* statement */ 
uint32 pulledId = allBoosterCardIds[rarity][rand];

        //Give the player this cardType
coverage_0x97274b49(0x728591a9af22a251d8f1a393d4d93399052912daff54cd644c1ee23b25ff193c); /* line */ 
        coverage_0x97274b49(0x62667f2856fe01d2b8c0a433c365700c4e9ad52c3d153a00aa6d5a3925469192); /* statement */ 
super._createCard(pulledId, msg.sender, 100);
    }

    /**
     *  Private function to diceroll the rarity pull Only from booster packs
     */
    function getRarity(uint czxpWager) private returns(uint8){coverage_0x97274b49(0x71b18008dd0ac5def858b1a0d4d57718f3d5db2c9c1361bbc2c5e5461cbc9468); /* function */ 


        //Check if below upper limit
coverage_0x97274b49(0xe036af60caa0641d4d8eeb808698d6d4f325e4102d4bf29df7429a9b5836c348); /* line */ 
        if(czxpWager <= 1649267441667000){}coverage_0x97274b49(0x32ede6f52bbf591bb9366cdebb09d8aa7424d7e40d2bf23a80dfcd17f74fd0cf); /* requirePre */ 
coverage_0x97274b49(0x791a9b9f38971cccd475f7e2c6cbd9d3ec8f7c86a3ffc977e698e026c0c47eb0); /* statement */ 
require(czxpWager <= 1649267441667000);coverage_0x97274b49(0xcb7d0aba419d63cd05817e9b0229646998aaf2d21e84d9b16994e73b49442654); /* requirePost */ 


        //FIRST ensure, player can back their wager
coverage_0x97274b49(0x0735e9ce6bad492f74ccd4093d559238fc22568d5041b2b20568a42bd2911f38); /* line */ 
        coverage_0x97274b49(0xea09f523ec6a976dee70f092184ae68782281bf64b08efa45d0d93f6182b0710); /* statement */ 
uint _playerCZXPBalance = CzxpToken(CzxpContractAddress_).balanceOf(msg.sender);
coverage_0x97274b49(0x8f84a0f87b8c2cf064ee0775d48a0a59f4d19c3ded9d811bc1f876ce63a20b14); /* line */ 
        if(_playerCZXPBalance >= czxpWager){}coverage_0x97274b49(0x1790f6d1e69f4c186fa5e10c362e85057e782106dfeb45bb8b960d8d1793bb1f); /* requirePre */ 
coverage_0x97274b49(0x8cbade16f684c529abc542fb1a4c28a205111ee8d5a1225a3c2cb5a88640841b); /* statement */ 
require(_playerCZXPBalance >= czxpWager);coverage_0x97274b49(0x7f81c430164f52ab4a1d6bac5a54686470353a57e8cf437fc05778336c4a2bc0); /* requirePost */ 


        //Check effects - Take their czxp
coverage_0x97274b49(0x20a9e082eecd1f803a6970adcee51e4470385713b73c2ee7bfdbab3a8fddb84c); /* line */ 
        coverage_0x97274b49(0xa85366aa3056e72d39297183b4802d11d8997873528435895936c3fbd96322a5); /* statement */ 
if(czxpWager > 0){coverage_0x97274b49(0x151a60cee4557b969fcefacab370d465a94e6f2451f8d11b6560b6453923348d); /* branch */ 

coverage_0x97274b49(0xd7a1d98736dd7adcbdc411024afd719585ea28b3ce32a2c7cdb76fc16291a9bc); /* line */ 
            coverage_0x97274b49(0xcccf9ba7bbf5e3818fd59af97d4e271d7023699bbadf991289a0ef5ee5d915ba); /* statement */ 
CzxpToken(CzxpContractAddress_).burnCzxp(msg.sender, czxpWager);
        }else { coverage_0x97274b49(0x9c6efa2b88c9fa408932e6256d1cd3dfee4b1ad27ee84a7fa7c32ac5b3a5c3da); /* branch */ 
}

        //ALL CLEAR - grab a random number
coverage_0x97274b49(0xd8384e0082745c1ea6249a00ce1fe60a94b5e7b99eaccc492f502c87386e4a93); /* line */ 
        coverage_0x97274b49(0xf051be2963100ec0e90e4e1c59e0df94cad634c8d92fe2b9af1a7cc988bad400); /* statement */ 
uint rand = selectRandom(10000);

        //get our probabilty distribution
coverage_0x97274b49(0xf1f0a5ca8b18df3e4a0f1680552029ec69acd7c74f57be0d570ae70c70ab37ce); /* line */ 
        coverage_0x97274b49(0x36700aa91f2b86826b2dc4784bcd5906725a17b7fa31d19da10a48f67f794573); /* statement */ 
uint16[7] memory probs = burnAndBoost(czxpWager);

        //Get the rarity for this pull from the probs
        // 3=epic, 4=rare, 5=uncommon, 6=commmon
coverage_0x97274b49(0x442efffc11c151e615820ae01863d83eb6c9fff64e323781b3f74f32c1b32186); /* line */ 
        coverage_0x97274b49(0xac0b69da941c4ac1fecf2e4a5bd531b9cae09149082252308b16352d1196dc70); /* statement */ 
for(uint8 i=2; i < probs.length; i++){coverage_0x97274b49(0x90b95b12e1379caf3d05ee2d2760e3ff2fe3747a9cd00d2e0d40382403252410); /* branch */ 

coverage_0x97274b49(0xec573b92417930a8eff0792289e5188aa17bbebd52d80d7fac0d391dacf6728f); /* line */ 
            coverage_0x97274b49(0x43959d0861dd79236d9d6485ebf31d08e24e5fd62dbd351083d41491d4b36543); /* statement */ 
if(rand <= probs[i]){coverage_0x97274b49(0x4edacf47c74e5b8b5e1e3b048ee6b6b9c8c0345b9773a005d928f019f3430007); /* branch */ 

coverage_0x97274b49(0x7c4325987652836fa93cbb9a20b061ad1f348f13facda9cdaf9b72c47cc202e4); /* line */ 
                coverage_0x97274b49(0xdecd1b9aa1433ce30b3463099aa3c09ea568911ed8a2c32dab63d6836319d294); /* statement */ 
return i;
            }else { coverage_0x97274b49(0xc9ffb5cf6edfd791846f47d6ad3373d1ead5e7674ff539d768a24ff615f0491a); /* branch */ 
}
        }coverage_0x97274b49(0x284429609743bb6791db2aec05246d7ce4522d29660c57c9b5fa337ca0757b3b); /* branch */ 

        //REMOVE THIS !!!!
coverage_0x97274b49(0x8fb37389b4ab2a68b128305379b0f82c366ff7b2b07dd045f12db1c49a849c10); /* line */ 
        coverage_0x97274b49(0x58ba9f0b91bde4ba1c4951bf4dbf5d084d3ecc450610b271330bcf48c97423f9); /* statement */ 
return 6;
    }


    /**
     * Private Booster distribution function
     */
    function burnAndBoost(uint czxpWager) private returns(uint16[7] memory) {coverage_0x97274b49(0x54732faaa08ad03db3e7117d874327768ae2998ea5f9fabe4d8246e69399f5a0); /* function */ 


        //buyBoosterCardAndOpen will pass a zero, set a default
coverage_0x97274b49(0xb53717490eeca70d0750c6838f729fdcc6bdaae41ba681f31ba1432f40e8d91b); /* line */ 
        coverage_0x97274b49(0x8984dcbcd6fe1ed90fb054eb5a371bff9ce68ad5f6d5995312173cf527839fa0); /* statement */ 
if(czxpWager == 0){coverage_0x97274b49(0xabe44bd29a6948a8c8d08bc3bb4f70125fbe55c48854899cc21a6e15b784ea05); /* branch */ 

coverage_0x97274b49(0x2c40c139cc252569717ed18aea5714408437a95f2410829df7da2301ccb8e341); /* line */ 
            coverage_0x97274b49(0x88da0fae268401d12eea9628043cdecd3b97e6c7ac594141fa6090941e3dadc0); /* statement */ 
return [0,0,0,1,50,2700,10000];
        }else { coverage_0x97274b49(0x473bdc7fa48e132954bba15bf24631a8489a2a1e6379502b2b2dfe63cc432aed); /* branch */ 
}

coverage_0x97274b49(0xbe67e1e9915c3873b4c52ae59a40e763cc341ea3aa31c04fc6e48432291de0d7); /* line */ 
        coverage_0x97274b49(0xd86d43fa3c352b8b4e4c4e910df8056f98b68220bcc85062db4793addc2c2662); /* statement */ 
(uint16 c, uint16 u, uint16 r, uint16 e) = super.getProbs(czxpWager);

        //default distribution is 1,50,2700,10000
coverage_0x97274b49(0xbabd93186b901aabfc1f0eefb9eb3ad714b374e7e1edd1e51ea56d9e8696cde9); /* line */ 
        coverage_0x97274b49(0x875bccdcd2ff1174ceed28c92998a8c2d85fe4768d4c82e2d7a03348fd0f2552); /* statement */ 
uint16[7] memory probs = [0,0,0,e,r,u,c];

coverage_0x97274b49(0x82b4499b781c063e78c10e192436e78021be2d56f558b27a198dc5cd2de70038); /* line */ 
        coverage_0x97274b49(0xdc4b0359957a0613d4df8abe5ce0db9a6197b044d11a1c14059f6e4a4001fe8b); /* statement */ 
return probs;
    }

    /**
     * Return the timestamp of the next daily bonus for a player
     */
    function getTimeToDailyBonus(address _player) public view returns(uint timeStamp){coverage_0x97274b49(0xeb2079e147e728674b1689d265c9767a62eef1faef36c07680247f5162cca62c); /* function */ 


        //check if address exists
coverage_0x97274b49(0x202b2d96a3498a0893f8fce42ebbbd7c8913df473a09b470ce5c2d68c5b7cc77); /* line */ 
        coverage_0x97274b49(0x398250eb4f62207cbd1cbdf4f2c8f93e05c37e75e1ab0d645e856c9aff6f6eb7); /* statement */ 
if(timeToCardsPull[_player] == 0){coverage_0x97274b49(0xf7a0cf1de4aabe8500cde37ec4836ad390a64687e055d2e802bdd1da20ec6e84); /* branch */ 

coverage_0x97274b49(0xd92efb303fababe801475c452b87686723d6948493c911e076d199822cf7fa78); /* line */ 
            coverage_0x97274b49(0x10630961fed8e9d5debde4a440fb7c19aaa389a0e916a1afb7a07513c0a9dfbe); /* statement */ 
return now - 2 seconds;
        }else{coverage_0x97274b49(0xfc7b33821000882f580ee3cbae6df31b0b58b07c0ddf26d0fc913a663616d626); /* branch */ 

coverage_0x97274b49(0x1d7ffd88ccc5e7111708dd77d81cdbeaa0b31f5273c7dd4a9a3e39e88e4f5b39); /* line */ 
            coverage_0x97274b49(0x78ba5016d6c74b782362e5496ffd64f90a8cbadb0a58bf352e8188281db7da47); /* statement */ 
return timeToCardsPull[_player];
        }
    }


    //Thanks! for supporting the Cryptoz universe <3 <3 <3
    /**
    * Withdraw balance to wallet ONLY for the owner to call this
    */
    function withdraw() external onlyOwner {coverage_0x97274b49(0x94ef533b7770b34935e3ba2aab4357faa409b156cd68cdb9e37198f8508623fc); /* function */ 

coverage_0x97274b49(0xbcb84b98ce9a226d981b0901b27071b6d64d4e90ea2fd4ed119b5d178afbae1c); /* line */ 
        coverage_0x97274b49(0x64d1e85631c117dd9b7ad9cd4c4bd260425d22dde31d44643f09083932b139b7); /* statement */ 
msg.sender.transfer(address(this).balance);
    }
}