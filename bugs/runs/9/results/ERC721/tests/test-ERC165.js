const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractcG8r89s = await ERC165.new({from: accounts[1]});
		const interfaceIdGu9wK1V = "0x0a1c1716"
		const interfaceIdfnje5Sv = "0x0f1e1215"
		const interfaceIdivDjDs = "0x1a12091d"
		const nullcJszzV = await contractcG8r89s.supportsInterface.call(interfaceIdGu9wK1V, {from: accounts[3]});
		const nullbmNy9kY = await contractcG8r89s.supportsInterface.call(interfaceIdfnje5Sv, {from: accounts[2]});
		const nullXiVYR5f = await contractcG8r89s.supportsInterface.call(interfaceIdivDjDs, {from: accounts[1]});
	});
})