// SPDX-License-Identifier: MIT

pragma solidity ^0.5.16;

interface Uni {
    function swapExactTokensForTokens(
        uint256,
        uint256,
        address[] calldata,
        address,
        uint256
    ) external;
}
