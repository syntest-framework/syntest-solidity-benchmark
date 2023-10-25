const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contracto1F418f = await IUSDT.new({from: accounts[2]});
		const amountayfOn4Z = BigInt("2046")
		const recipientDlc9Kg = accounts[1]
		const amountOfgb31G = BigInt("1650")
		const recipient7qzDn2 = accounts[4]
		const amountWZRsUrH = BigInt("1946")
		const recipienttCP1Dt = accounts[1]
		const amountNNY6bME = BigInt("1210")
		const spenderQwdeN8t = accounts[0]
		await contracto1F418f.transfer.call(recipientDlc9Kg, amountayfOn4Z, {from: accounts[1]});
		await contracto1F418f.transfer.call(recipient7qzDn2, amountOfgb31G, {from: "0x0000000000000000000000000000000000000001"});
		await contracto1F418f.transfer.call(recipienttCP1Dt, amountWZRsUrH, {from: accounts[3]});
		await contracto1F418f.approve.call(spenderQwdeN8t, amountNNY6bME, {from: accounts[1]});
		const nullI5CRJtU = await contracto1F418f.totalSupply.call({from: accounts[4]});
	});
})