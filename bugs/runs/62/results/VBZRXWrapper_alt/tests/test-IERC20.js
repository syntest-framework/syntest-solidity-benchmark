const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractPx9pf2U = await IERC20.new({from: accounts[4]});
		const accountc0w9AWq = accounts[2]
		const amountKNzHj7P = BigInt("171")
		const recipienthse0rrx = accounts[0]
		const accountRHNmx1 = accounts[1]
		const amountzCAhdJR = BigInt("723")
		const recipientY48uNa = accounts[3]
		const nullqPRU52N = await contractPx9pf2U.balanceOf.call(accountc0w9AWq, {from: accounts[3]});
		const nullO7Nqp66 = await contractPx9pf2U.transfer.call(recipienthse0rrx, amountKNzHj7P, {from: accounts[4]});
		const nullRQQ7SFw = await contractPx9pf2U.balanceOf.call(accountRHNmx1, {from: accounts[4]});
		const nullhPGqs1D = await contractPx9pf2U.transfer.call(recipientY48uNa, amountzCAhdJR, {from: accounts[3]});
		const nulliIQD14i = await contractPx9pf2U.totalSupply.call({from: accounts[2]});
	});
})