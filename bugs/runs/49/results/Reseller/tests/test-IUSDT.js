const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractGD1xzvJ = await IUSDT.new({from: accounts[4]});
		const amountw1dnMTW = BigInt("1584")
		const recipientIONbFrp = accounts[2]
		const spenderGDwvGJg = accounts[0]
		const ownerWsFY5I = accounts[0]
		const amountO9Uc21h = BigInt("614")
		const recipientcnR18D = accounts[3]
		const amountwe1d7B8 = BigInt("1669")
		const recipientzEy89Kj = accounts[1]
		await contractGD1xzvJ.transfer.call(recipientIONbFrp, amountw1dnMTW, {from: accounts[0]});
		const nullMBbH5Bz = await contractGD1xzvJ.allowance.call(ownerWsFY5I, spenderGDwvGJg, {from: accounts[2]});
		await contractGD1xzvJ.transfer.call(recipientcnR18D, amountO9Uc21h, {from: accounts[4]});
		await contractGD1xzvJ.transfer.call(recipientzEy89Kj, amountwe1d7B8, {from: accounts[1]});
	});
})