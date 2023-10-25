const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractExgTLY6 = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const wholif7cnz = accounts[1]
		const spender7ivob1 = "0x0000000000000000000000000000000000000001"
		const ownerCC1cmt0 = accounts[2]
		const valueToIezya = BigInt("855")
		const spenderVqYgmf5 = accounts[1]
		const valueC1JDlFG = BigInt("1455")
		const spenderxpyTW6T = "0x0000000000000000000000000000000000000001"
		const nullEETh17 = await contractExgTLY6.balanceOf.call(wholif7cnz, {from: accounts[5]});
		const nullDMbELKS = await contractExgTLY6.allowance.call(ownerCC1cmt0, spender7ivob1, {from: accounts[0]});
		const nullau5Gd2K = await contractExgTLY6.approve.call(spenderVqYgmf5, valueToIezya, {from: accounts[3]});
		const nulleAyNegD = await contractExgTLY6.approve.call(spenderxpyTW6T, valueC1JDlFG, {from: accounts[4]});
	});
})