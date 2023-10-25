pragma solidity >=0.8.0;

contract Test {
    function uncheckedInc(uint256 i) external pure returns (uint256) {
        unchecked {
            return i + 1;
        }
    }
}