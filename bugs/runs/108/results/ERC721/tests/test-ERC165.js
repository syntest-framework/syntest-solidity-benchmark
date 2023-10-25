const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractqozzj7c = await ERC165.new({from: accounts[5]});
		const interfaceIdCNJ4Q01 = "0x0f111503"
		const interfaceIdsU7ncK5 = "0x1e0f1111"
		const interfaceIdd6EceYP = "0x111f1816"
		const interfaceIdXvGCgIv = "0x16130913"
		const interfaceIdtAX5ml = "0x1a03120e"
		const nullN0Lai3 = await contractqozzj7c.supportsInterface.call(interfaceIdCNJ4Q01, {from: accounts[4]});
		const nullAv5mUNh = await contractqozzj7c.supportsInterface.call(interfaceIdsU7ncK5, {from: accounts[1]});
		const nullW167wZy = await contractqozzj7c.supportsInterface.call(interfaceIdd6EceYP, {from: accounts[4]});
		const nullrNyCxH9 = await contractqozzj7c.supportsInterface.call(interfaceIdXvGCgIv, {from: accounts[4]});
		const nullxMhGlEu = await contractqozzj7c.supportsInterface.call(interfaceIdtAX5ml, {from: accounts[4]});
	});
})