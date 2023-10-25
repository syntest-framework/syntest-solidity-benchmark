const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractfEz0EMU = await IERC721.new({from: accounts[3]});
		const operatorDGMfEtZ = accounts[1]
		const ownerXLR4y4 = accounts[2]
		const tokenIdgErdyda = BigInt("2025")
		const nullBG5RlZH = await contractfEz0EMU.isApprovedForAll.call(ownerXLR4y4, operatorDGMfEtZ, {from: accounts[4]});
		const operatorjIl3VHE = await contractfEz0EMU.getApproved.call(tokenIdgErdyda, {from: accounts[5]});
	});
})