const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractSHn5whG = await IERC20.new({from: accounts[3]});
		const amounty4j6Cwo = BigInt("1275")
		const spenderUcMDN1N = "0x0000000000000000000000000000000000000001"
		const amounteSdeooe = BigInt("1363")
		const spenderelkA47f = accounts[3]
		const accountXGdBEI8 = accounts[3]
		const spenderPVLrO57 = accounts[0]
		const ownerG02NkzM = accounts[3]
		const nullonQn2yB = await contractSHn5whG.approve.call(spenderUcMDN1N, amounty4j6Cwo, {from: "0x0000000000000000000000000000000000000001"});
		const nullI909g9A = await contractSHn5whG.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullmqwndJZ = await contractSHn5whG.approve.call(spenderelkA47f, amounteSdeooe, {from: accounts[1]});
		const nullcFihUP3 = await contractSHn5whG.balanceOf.call(accountXGdBEI8, {from: accounts[2]});
		const nulltY9Hhed = await contractSHn5whG.allowance.call(ownerG02NkzM, spenderPVLrO57, {from: accounts[4]});
		const nullkn7HZb4 = await contractSHn5whG.totalSupply.call({from: accounts[1]});
	});
})