const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractS5p3UKL = await ERC165.new({from: accounts[5]});
		const interfaceIdAivw1W = "0x1d1c1e14"
		const interfaceIdkSfVY3K = "0x15041e0b"
		const interfaceIdIS4LVYH = "0x1c1f091a"
		const nullqWhoJYK = await contractS5p3UKL.supportsInterface.call(interfaceIdAivw1W, {from: accounts[4]});
		const nullWGwV2uZ = await contractS5p3UKL.supportsInterface.call(interfaceIdkSfVY3K, {from: accounts[1]});
		const nullzczF98l = await contractS5p3UKL.supportsInterface.call(interfaceIdIS4LVYH, {from: accounts[2]});
	});
})