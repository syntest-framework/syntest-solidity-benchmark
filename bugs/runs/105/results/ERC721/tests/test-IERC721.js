const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractahvfJB8 = await IERC721.new({from: accounts[3]});
		const operatorNg75caJ = accounts[4]
		const ownercSeDXzD = accounts[1]
		const tokenIdr4DbUWw = BigInt("1350")
		const toes0Dp7A = accounts[1]
		const nulllc3pDdJ = await contractahvfJB8.isApprovedForAll.call(ownercSeDXzD, operatorNg75caJ, {from: accounts[4]});
		await contractahvfJB8.approve.call(toes0Dp7A, tokenIdr4DbUWw, {from: "0x0000000000000000000000000000000000000001"});
	});
})