const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractZOUjuVX = await ERC165.new({from: accounts[5]});
		const interfaceIdbuchzRf = "0x08150102"
		const interfaceIdU52JH1O = "0x090a0719"
		const interfaceIdPHF536j = "0x1f101b20"
		const interfaceIdSnxmynj = "0x15061c12"
		const nullPcatBv = await contractZOUjuVX.supportsInterface.call(interfaceIdbuchzRf, {from: accounts[1]});
		const nullkayGOIs = await contractZOUjuVX.supportsInterface.call(interfaceIdU52JH1O, {from: accounts[3]});
		const nullDc7Nbup = await contractZOUjuVX.supportsInterface.call(interfaceIdPHF536j, {from: accounts[0]});
		const nullKX7PfdS = await contractZOUjuVX.supportsInterface.call(interfaceIdSnxmynj, {from: accounts[4]});
	});
})