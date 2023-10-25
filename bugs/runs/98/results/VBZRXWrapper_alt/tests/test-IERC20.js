const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractaXOTmc3 = await IERC20.new({from: accounts[4]});
		const amounttbgfHu = BigInt("210")
		const recipientjY3wuG8 = accounts[4]
		const accounttMm0Q0w = accounts[1]
		const amountcgPw49z = BigInt("1034")
		const recipientzwJc6o = accounts[0]
		const nullTu26WaW = await contractaXOTmc3.transfer.call(recipientjY3wuG8, amounttbgfHu, {from: accounts[0]});
		const nullfyTwQ3j = await contractaXOTmc3.totalSupply.call({from: accounts[5]});
		const nullcmyKfI5 = await contractaXOTmc3.balanceOf.call(accounttMm0Q0w, {from: accounts[5]});
		const nullNACBpJv = await contractaXOTmc3.transfer.call(recipientzwJc6o, amountcgPw49z, {from: accounts[1]});
	});
})