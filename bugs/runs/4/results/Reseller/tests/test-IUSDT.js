const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractehn61b = await IUSDT.new({from: accounts[3]});
		const amountaQI23QM = BigInt("860")
		const recipientx5Vkroq = accounts[4]
		const sendermzsYeYW = accounts[4]
		const amountGjKFEqj = BigInt("1940")
		const spenderW5ZTJdl = accounts[2]
		const accountpHQUBPS = accounts[3]
		const accountljhILZ3 = accounts[2]
		const amountdDnDT4 = BigInt("1346")
		const recipientZJTIH4m = accounts[4]
		const senderHuBMqG = accounts[1]
		const accountCBXnHh5 = accounts[1]
		await contractehn61b.transferFrom.call(sendermzsYeYW, recipientx5Vkroq, amountaQI23QM, {from: accounts[3]});
		await contractehn61b.approve.call(spenderW5ZTJdl, amountGjKFEqj, {from: accounts[4]});
		const nullyqyjDKx = await contractehn61b.balanceOf.call(accountpHQUBPS, {from: accounts[2]});
		const nullHbgFJfX = await contractehn61b.balanceOf.call(accountljhILZ3, {from: accounts[4]});
		await contractehn61b.transferFrom.call(senderHuBMqG, recipientZJTIH4m, amountdDnDT4, {from: accounts[0]});
		const nullGmCcSl = await contractehn61b.balanceOf.call(accountCBXnHh5, {from: accounts[2]});
	});
})