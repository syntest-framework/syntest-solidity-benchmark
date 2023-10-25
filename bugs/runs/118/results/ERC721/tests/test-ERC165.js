const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracttozcxvI = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdU1SsA3o = "0x12120c07"
		const interfaceIdOe3aMxE = "0x12150401"
		const interfaceIdTyLIdU4 = "0x07010012"
		const interfaceIdSbJz0q = "0x121b1d04"
		const interfaceIdzk5dOBN = "0x111c180a"
		const nullJClrrYG = await contracttozcxvI.supportsInterface.call(interfaceIdU1SsA3o, {from: accounts[1]});
		const nullhSR66t2 = await contracttozcxvI.supportsInterface.call(interfaceIdOe3aMxE, {from: accounts[4]});
		const nullKtuq7Dj = await contracttozcxvI.supportsInterface.call(interfaceIdTyLIdU4, {from: accounts[3]});
		const nullITYf1K6 = await contracttozcxvI.supportsInterface.call(interfaceIdSbJz0q, {from: accounts[3]});
		const nullXPx8Vbs = await contracttozcxvI.supportsInterface.call(interfaceIdzk5dOBN, {from: accounts[5]});
	});
})