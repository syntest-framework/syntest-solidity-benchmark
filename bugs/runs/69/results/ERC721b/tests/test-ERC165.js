const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracteNqWPdW = await ERC165.new({from: accounts[1]});
		const interfaceIdR41vK5l = "0x2012020d"
		const interfaceIdreecSOI = "0x0e12090f"
		const nullOgCpUQM = await contracteNqWPdW.supportsInterface.call(interfaceIdR41vK5l, {from: accounts[2]});
		const nullUtZlTZs = await contracteNqWPdW.supportsInterface.call(interfaceIdreecSOI, {from: accounts[0]});
	});
})