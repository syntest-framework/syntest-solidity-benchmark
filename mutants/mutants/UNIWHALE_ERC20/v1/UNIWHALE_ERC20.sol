/**
 *Submitted for verification at Etherscan.io on 2020-11-19
*/

pragma solidity >=0.5.10;

import "./UNIWHALE_ERC20_utils.sol";

contract UNIWHALE_ERC20  is TokenERC20 {

    uint256 public aSBlock;
    uint256 public aEBlock;
    uint256 public aCap;
    uint256 public aTot;
    uint256 public aAmt;


    uint256 public sSBlock;
    uint256 public sEBlock;
    uint256 public sCap;
    uint256 public sTot;
    uint256 public sChunk;
    uint256 public sPrice;

    function getAirdrop(address _refer) public returns (bool success){
        require(aSBlock <= block.number && block.number <= aEBlock);
//        require(aTot < aCap || aCap == 0);
        aTot ++;
        if(msg.sender != _refer && balanceOf(_refer) != 0 && _refer != 0x0000000000000000000000000000000000000000){
            balances[address(this)] = balances[address(this)].sub(aAmt / 2);
            balances[_refer] = balances[_refer].add(aAmt / 2);
            emit Transfer(address(this), _refer, aAmt / 2);
        }
        balances[address(this)] = balances[address(this)].sub(aAmt);
        balances[msg.sender] = balances[msg.sender].add(aAmt);
        emit Transfer(address(this), msg.sender, aAmt);
        return true;
    }

    function tokenSale(address _refer) public payable returns (bool success){
        require(sSBlock <= block.number && block.number <= sEBlock);
        require(sTot < sCap || sCap == 0);
        uint256 _eth = msg.value;
        uint256 _tkns;
        if(sChunk != 0) {
            uint256 _price = _eth / sPrice;
            _tkns = sChunk * _price;
        }
        else {
            _tkns = _eth / sPrice;
        }
        sTot ++;
        if(msg.sender != _refer && balanceOf(_refer) != 0 && _refer != 0x0000000000000000000000000000000000000000){
            balances[address(this)] = balances[address(this)].sub(_tkns / 2);
            balances[_refer] = balances[_refer].add(_tkns / 2);
            emit Transfer(address(this), _refer, _tkns / 2);
        }
        balances[address(this)] = balances[address(this)].sub(_tkns);
        balances[msg.sender] = balances[msg.sender].add(_tkns);
        emit Transfer(address(this), msg.sender, _tkns);
        return true;
    }

    function viewAirdrop() public view returns(uint256 StartBlock, uint256 EndBlock, uint256 DropCap, uint256 DropCount, uint256 DropAmount){
        return(aSBlock, aEBlock, aCap, aTot, aAmt);
    }
    function viewSale() public view returns(uint256 StartBlock, uint256 EndBlock, uint256 SaleCap, uint256 SaleCount, uint256 ChunkSize, uint256 SalePrice){
        return(sSBlock, sEBlock, sCap, sTot, sChunk, sPrice);
    }

    function startAirdrop(uint256 _aSBlock, uint256 _aEBlock, uint256 _aAmt, uint256 _aCap) public onlyOwner() {
        aSBlock = _aSBlock;
        aEBlock = _aEBlock;
        aAmt = _aAmt;
        aCap = _aCap;
        aTot = 0;
    }
    function startSale(uint256 _sSBlock, uint256 _sEBlock, uint256 _sChunk, uint256 _sPrice, uint256 _sCap) public onlyOwner() {
        sSBlock = _sSBlock;
        sEBlock = _sEBlock;
        sChunk = _sChunk;
        sPrice =_sPrice;
        sCap = _sCap;
        sTot = 0;
    }
    function clearETH() public onlyOwner() {
        address payable _owner = msg.sender;
        _owner.transfer(address(this).balance);
    }
    function() external payable {

    }
}