const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractlecVasF = await IERC20.new({from: accounts[3]});
		const valuewgYtM0m = BigInt("894")
		const spenderrmT9xCv = "0x0000000000000000000000000000000000000001"
		const spenderKOeWvup = accounts[1]
		const ownerS09LciD = accounts[2]
		const whoytrXFCK = accounts[2]
		const nulloEJk83i = await contractlecVasF.approve.call(spenderrmT9xCv, valuewgYtM0m, {from: accounts[0]});
		const nullRmEFjUU = await contractlecVasF.allowance.call(ownerS09LciD, spenderKOeWvup, {from: "0x0000000000000000000000000000000000000001"});
		const nulldzIgLM = await contractlecVasF.balanceOf.call(whoytrXFCK, {from: "0x0000000000000000000000000000000000000001"});
	});
})