/**
 *Submitted for verification at Etherscan.io on 2020-11-24
*/

// File: contracts\BAE.sol

// SPDX-License-Identifier: MIT

pragma solidity ^0.5.12;

import "./BAE_utils.sol";

contract BAE is ERC1155Tradable {
    event AuctionStart(address creator, uint256 token, uint256 startingBid, uint256 auctionIndex, uint256 expiry);
    event AuctionEnd(uint256 token, uint256 finalBid, address owner, address newOwner, uint256 auctionIndex);
    event AuctionReset(uint256 auctionIndex, uint256 newExpiry, uint256 newPrice);
    event Bid(address bidder, uint256 token, uint256 auctionIndex, uint256 amount);

    uint256 public auctionCount;

    uint256 public auctionFee = 5; //Out of 1000 for 100%

    struct auctionData{
        address owner;
        address lastBidder;
        uint256 bid;
        uint256 expiry;
        uint256 token;
    }

    mapping(uint256 => auctionData) public auctionList;

    constructor(address _proxyRegistryAddress)
    ERC1155Tradable(
        "Blockchain Art Exchange",
        "BAE",
        _proxyRegistryAddress
    ) public {
        _setBaseMetadataURI("https://api.mybae.io/tokens/");
    }

    function changePrintFee(uint256 _newPrice) public onlyAdmin{
        printFee = _newPrice;
    }

    function setAuctionFee(uint256 _newFee) public onlyAdmin{
        require(_newFee < 1000, "Fee Too High!");
        auctionFee = _newFee;
    }

    function createAuction(uint256 _price, uint256 _expiry, uint256 _token, uint256 _amount) public ownersOnly(_token, _amount){
        require(block.timestamp < _expiry, "Auction Date Passed");
        require(block.timestamp + (86400 * 14) > _expiry, "Auction Date Too Far");
        require(_price > 0, "Auction Price Cannot Be 0");
        for(uint x = 0; x < _amount; x++){
            safeTransferFrom(msg.sender, address(this), _token, 1, "");
            auctionList[auctionCount] = auctionData(msg.sender, address(0), _price, _expiry, _token);
            emit AuctionStart(msg.sender, _token, _price, auctionCount, _expiry);
            auctionCount++;
        }
    }

    function bid(uint256 _index) public payable {
        require(auctionList[_index].expiry > block.timestamp);
        require(auctionList[_index].bid + 10000000000000000 <= msg.value);
        require(msg.sender != auctionList[_index].owner);
        require(msg.sender != auctionList[_index].lastBidder);
        if(auctionList[_index].lastBidder != address(0)){
            auctionList[_index].lastBidder.call.value(auctionList[_index].bid)("");
        }
        auctionList[_index].bid = msg.value;
        auctionList[_index].lastBidder = msg.sender;
        emit Bid(msg.sender, auctionList[_index].token, _index, msg.value);
    }

    function buy(uint256 _index) public payable {
//        require(auctionList[_index].expiry < block.timestamp);
        require(auctionList[_index].bid <= msg.value);
        require(address(0) == auctionList[_index].lastBidder);
        require(auctionList[_index].bid > 0);
        this.safeTransferFrom(address(this), msg.sender, auctionList[_index].token, 1, "");
        uint256 fee = auctionList[_index].bid * auctionFee / 1000;
        treasurer.call.value(fee)("");
        auctionList[_index].owner.call.value(auctionList[_index].bid.sub(fee))("");
        emit AuctionEnd(auctionList[_index].token, auctionList[_index].bid, auctionList[_index].owner, msg.sender, _index);

        auctionList[_index].lastBidder = msg.sender;
        auctionList[_index].bid = 0;
    }

    function resetAuction(uint256 _index, uint256 _expiry, uint256 _price) public{
        require(msg.sender == auctionList[_index].owner, "You Dont Own This Auction!");
        require(address(0) == auctionList[_index].lastBidder, "Someone Won This Auction!");
        require(auctionList[_index].expiry < block.timestamp, "Auction Is Still Running");
        require(_expiry > block.timestamp, "Auction Date Passed");
        auctionList[_index].expiry = _expiry;
        auctionList[_index].bid = _price;
        emit AuctionReset(_index, _expiry, _price);
    }

    function concludeAuction(uint256 _index) public{
        require(auctionList[_index].expiry < block.timestamp, "Auction Not Expired");
        require(auctionList[_index].bid != 0, "Auction Concluded");
        if(auctionList[_index].lastBidder != address(0)){
            this.safeTransferFrom(address(this), auctionList[_index].lastBidder, auctionList[_index].token, 1, "");
            uint256 fee = auctionList[_index].bid * auctionFee / 1000;
            treasurer.call.value(fee)("");
            auctionList[_index].owner.call.value(auctionList[_index].bid.sub(fee))("");
            emit AuctionEnd(auctionList[_index].token, auctionList[_index].bid, auctionList[_index].owner, auctionList[_index].lastBidder, _index);
        }
        else{
            this.safeTransferFrom(address(this), auctionList[_index].owner, auctionList[_index].token, 1, "");
            emit AuctionEnd(auctionList[_index].token, 0, auctionList[_index].owner, auctionList[_index].owner, _index);
        }
        auctionList[_index].lastBidder = address(0);
        auctionList[_index].bid = 0;
    }


}