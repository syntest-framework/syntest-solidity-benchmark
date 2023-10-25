const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractBZ9TDV9 = await IERC721.new({from: accounts[1]});
		const tokenIdqayRLCb = BigInt("459")
		const toa0QE10 = accounts[5]
		const fromo9eR78c = accounts[0]
		const _approvedomdSqF5 = true
		const operatorzQ0WiO = accounts[0]
		await contractBZ9TDV9.transferFrom.call(fromo9eR78c, toa0QE10, tokenIdqayRLCb, {from: accounts[0]});
		await contractBZ9TDV9.setApprovalForAll.call(operatorzQ0WiO, _approvedomdSqF5, {from: accounts[5]});
	});
})