const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractZAACCY = await IERC20.new({from: accounts[1]});
		const spenderkfA4KO3 = accounts[3]
		const owner4TRvSz = accounts[1]
		const amounti6nIzus = BigInt("573")
		const recipienthC2oQay = accounts[0]
		const senderfu3PoXV = accounts[1]
		const spenderOidl6b = accounts[1]
		const ownerrmC6CUX = accounts[3]
		const nullaXw6Eqk = await contractZAACCY.allowance.call(owner4TRvSz, spenderkfA4KO3, {from: accounts[4]});
		const nullcdSmCSq = await contractZAACCY.transferFrom.call(senderfu3PoXV, recipienthC2oQay, amounti6nIzus, {from: accounts[4]});
		const nullZsdjEZN = await contractZAACCY.totalSupply.call({from: accounts[2]});
		const nullA7kRb0s = await contractZAACCY.allowance.call(ownerrmC6CUX, spenderOidl6b, {from: accounts[1]});
	});
})