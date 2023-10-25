const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractxFgu5yl = await ERC20Interface.new({from: accounts[4]});
		const tokensFkw1rLA = BigInt("759")
		const tovLN8caI = accounts[3]
		const tokenszUgoHcB = BigInt("737")
		const toivWe6gM = accounts[1]
		const spenderZtZpQCQ = accounts[1]
		const tokenOwnerPxtmaR = accounts[4]
		const successBBbCWEZ = await contractxFgu5yl.transfer.call(tovLN8caI, tokensFkw1rLA, {from: accounts[5]});
		const successprQT7ka = await contractxFgu5yl.transfer.call(toivWe6gM, tokenszUgoHcB, {from: accounts[1]});
		const remainingAmBIkHr = await contractxFgu5yl.allowance.call(tokenOwnerPxtmaR, spenderZtZpQCQ, {from: accounts[3]});
	});
})