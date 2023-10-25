const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractK9IECQ = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _approvedZ2mKHel = false
		const operatorIYd5fg = accounts[1]
		const tokenIdtKJZttb = BigInt("230")
		const datapZ19TPa = "0x141e080212180004020b0810051702040607010e140717171416140d0b"
		const tokenIdNKvZFHW = BigInt("997")
		const totssyqg9 = accounts[5]
		const fromHZdFrb = accounts[4]
		await contractK9IECQ.setApprovalForAll.call(operatorIYd5fg, _approvedZ2mKHel, {from: accounts[4]});
		const operatoran2isTp = await contractK9IECQ.getApproved.call(tokenIdtKJZttb, {from: accounts[4]});
		await contractK9IECQ.safeTransferFrom.call(fromHZdFrb, totssyqg9, tokenIdNKvZFHW, datapZ19TPa, {from: accounts[0]});
	});
})