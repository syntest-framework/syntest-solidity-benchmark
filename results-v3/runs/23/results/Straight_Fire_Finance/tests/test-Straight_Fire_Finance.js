const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceLyf5b0 = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintDtMrZwL = BigInt("1296")
		const addresscSaeCmG = accounts[3]
		const addressC37F63V = accounts[4]
		const addresssJW5DY = accounts[0]
		const uint256XdJeKXL = await Straight_Fire_FinanceLyf5b0.totalSupply.call({from: accounts[3]});
		const boolTQ6hyMQ = await Straight_Fire_FinanceLyf5b0.transferFrom.call(addressC37F63V, addresscSaeCmG, uintDtMrZwL, {from: accounts[1]});
		const uint256zFUJPhb = await Straight_Fire_FinanceLyf5b0.balanceOf.call(addresssJW5DY, {from: accounts[1]});

		assert.equal(boolTQ6hyMQ, false)
		assert.equal(uint256XdJeKXL, BigInt("80000000000000000000000"))
		assert.equal(uint256zFUJPhb, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancejAiplcq = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkR6aarv = BigInt("761")
		const addressA1wXW4 = accounts[0]
		const addressSi4Nbtm = accounts[3]
		const uintMToAwjm = BigInt("1644")
		const address1NNWOB = accounts[4]
		const addressoeU7qws = "0x0000000000000000000000000000000000000001"
		const addressJESuTh2 = accounts[4]
		const addressQ9n53qV = accounts[2]
		const boolQOeAnyw = await Straight_Fire_FinancejAiplcq.transferFrom.call(addressSi4Nbtm, addressA1wXW4, uintkR6aarv, {from: accounts[1]});
		const boolop5DzS6 = await Straight_Fire_FinancejAiplcq.transferFrom.call(addressoeU7qws, address1NNWOB, uintMToAwjm, {from: accounts[4]});
		const uintUzJ1GWd = await Straight_Fire_FinancejAiplcq.allowance.call(addressQ9n53qV, addressJESuTh2, {from: accounts[5]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceBN81orZ = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintUR4LEKd = BigInt("1092")
		const addressX3HsM5s = "0x0000000000000000000000000000000000000001"
		const addressUA8h3mp = accounts[4]
		const addresspO6oQgS = accounts[2]
		const addressdJMIHQ2 = accounts[3]
		const addresssXWrqGj = accounts[4]
		const boolCbmcN7T = await Straight_Fire_FinanceBN81orZ.transfer.call(addressX3HsM5s, uintUR4LEKd, {from: accounts[2]});
		const uintTKf5oGX = await Straight_Fire_FinanceBN81orZ.allowance.call(addresspO6oQgS, addressUA8h3mp, {from: "0x0000000000000000000000000000000000000001"});
		const uintUUDsYzb = await Straight_Fire_FinanceBN81orZ.allowance.call(addresssXWrqGj, addressdJMIHQ2, {from: accounts[2]});

		assert.equal(boolCbmcN7T, false)
		assert.equal(uintTKf5oGX, BigInt("0"))
		assert.equal(uintUUDsYzb, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancersIWIEt = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintaIgMJMb = BigInt("721")
		const addressoTbu9s = accounts[1]
		const addressvpJXJak = accounts[3]
		const uintRv7hTNP = BigInt("331")
		const addressI6MQMDY = accounts[3]
		const addressSRThxsB = accounts[1]
		const addresshrswmpa = accounts[3]
		const uinttNhW2xW = BigInt("566")
		const addressfATKh6 = accounts[0]
		const addresszKFZEfW = accounts[0]
		const boolRyGbgR = await Straight_Fire_FinancersIWIEt.transferFrom.call(addressvpJXJak, addressoTbu9s, uintaIgMJMb, {from: accounts[2]});
		const boolTz7q5kW = await Straight_Fire_FinancersIWIEt.transferFrom.call(addressSRThxsB, addressI6MQMDY, uintRv7hTNP, {from: accounts[0]});
		const uint256injOGik = await Straight_Fire_FinancersIWIEt.balanceOf.call(addresshrswmpa, {from: "0x0000000000000000000000000000000000000001"});
		const boolu7fxuS5 = await Straight_Fire_FinancersIWIEt.approve.call(addressfATKh6, uinttNhW2xW, {from: accounts[2]});
		const uint256zYzu3RG = await Straight_Fire_FinancersIWIEt.balanceOf.call(addresszKFZEfW, {from: accounts[3]});

		assert.equal(boolRyGbgR, false)
		assert.equal(boolTz7q5kW, false)
		assert.equal(boolu7fxuS5, true)
		assert.equal(uint256injOGik, BigInt("0"))
		assert.equal(uint256zYzu3RG, BigInt("0"))
	});
})