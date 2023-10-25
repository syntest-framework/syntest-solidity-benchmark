pragma solidity ^0.5.0;
contract Example {

    modifier onlyAboveZero(int a, int b, int c) {
        require(a>1000);
        require(b>1000);
        require(c>0);
        _;
    }

    modifier X() {
        require(msg.sender == owner, "You are not the owner");
        _;
        require();
    }

    modifier Y() {
        require(msg.sender == owner, "You are not the owner");
        _;
        require();
    }

    function Z() public X Y {
        ... logic
    }

    function triangle(int a, int b, int c) public onlyAboveZero(a, b, c) returns(string memory) {
        if (a > b) {
            return "HERE";
        }
        return "DONE5";
    }
}
