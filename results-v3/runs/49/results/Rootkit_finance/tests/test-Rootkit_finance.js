const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financetmG6mql = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHQkAB0 = accounts[5]
		const addressyDzSPtV = accounts[3]
		const uintfvRORxl = BigInt("1755")
		const addresswh18TMb = accounts[5]
		const uint256QPiEJH8 = await Rootkit_financetmG6mql.totalSupply.call({from: accounts[3]});
		const uintnAswHlF = await Rootkit_financetmG6mql.allowance.call(addressyDzSPtV, addressHQkAB0, {from: accounts[4]});
		const boolY987Aev = await Rootkit_financetmG6mql.transfer.call(addresswh18TMb, uintfvRORxl, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeIRMXQsK = await Rootkit_finance.new({from: accounts[3]});
		const addressXhZdnte = accounts[1]
		const addressY3Ewme1 = accounts[1]
		const addressWBGJAu7 = accounts[2]
		const addressc3e3DWC = accounts[1]
		const uintsxQ5Hm6 = BigInt("1022")
		const addresse90w1CP = "0x0000000000000000000000000000000000000001"
		const uintSDPPTGG = await Rootkit_financeIRMXQsK.allowance.call(addressY3Ewme1, addressXhZdnte, {from: accounts[0]});
		const uintatkzuMa = await Rootkit_financeIRMXQsK.allowance.call(addressc3e3DWC, addressWBGJAu7, {from: accounts[2]});
		const boolkVVkDIk = await Rootkit_financeIRMXQsK.transfer.call(addresse90w1CP, uintsxQ5Hm6, {from: accounts[0]});

		assert.equal(boolkVVkDIk, false)
		assert.equal(uintSDPPTGG, BigInt("0"))
		assert.equal(uintatkzuMa, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financecesUYfJ = await Rootkit_finance.new({from: accounts[0]});
		const addresss1AgLop = accounts[4]
		const address9B4q2e = accounts[0]
		const uintEoxRjWJ = BigInt("1494")
		const addressSqVOrxu = accounts[3]
		const addressPhLwKfe = "0x0000000000000000000000000000000000000001"
		const uintpMpdm6P = BigInt("1854")
		const addressg6XevrI = accounts[1]
		const addresse5XWB5 = accounts[3]
		const uintb6OOiFt = BigInt("678")
		const addresse7T9Esh = accounts[0]
		const addressKgF3YgP = accounts[0]
		const uintdM7Ohef = await Rootkit_financecesUYfJ.allowance.call(address9B4q2e, addresss1AgLop, {from: accounts[4]});
		const boolAjGgNZI = await Rootkit_financecesUYfJ.transferFrom.call(addressPhLwKfe, addressSqVOrxu, uintEoxRjWJ, {from: accounts[2]});
		const bool7GCjgh = await Rootkit_financecesUYfJ.transferFrom.call(addresse5XWB5, addressg6XevrI, uintpMpdm6P, {from: accounts[2]});
		const boolSXoy9tW = await Rootkit_financecesUYfJ.transferFrom.call(addressKgF3YgP, addresse7T9Esh, uintb6OOiFt, {from: accounts[3]});

		assert.equal(bool7GCjgh, false)
		assert.equal(boolAjGgNZI, false)
		assert.equal(boolSXoy9tW, false)
		assert.equal(uintdM7Ohef, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financetyQs01t = await Rootkit_finance.new({from: accounts[4]});
		const uintHv3ZL1W = BigInt("2028")
		const addressjuZDxRH = accounts[5]
		const addressBvl7Esc = accounts[4]
		const uint256eBGZNJ = await Rootkit_financetyQs01t.totalSupply.call({from: accounts[1]});
		const boolZfgDIvL = await Rootkit_financetyQs01t.transfer.call(addressjuZDxRH, uintHv3ZL1W, {from: accounts[3]});
		const uint256UZOXpjl = await Rootkit_financetyQs01t.balanceOf.call(addressBvl7Esc, {from: accounts[1]});

		assert.equal(boolZfgDIvL, false)
		assert.equal(uint256UZOXpjl, BigInt("10000000000000000000000"))
		assert.equal(uint256eBGZNJ, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeWXbegUs = await Rootkit_finance.new({from: accounts[2]});
		const addressVZt3yw = accounts[4]
		const addressPfwIgup = accounts[1]
		const uintFvf6f7T = BigInt("1595")
		const addressiTZs5Zw = "0x0000000000000000000000000000000000000001"
		const uint9AFtSE = BigInt("349")
		const addressQukXOWM = accounts[0]
		const addressoTAtoL3 = accounts[4]
		const uint256C5t3TzT = await Rootkit_financeWXbegUs.balanceOf.call(addressVZt3yw, {from: accounts[0]});
		const uint256euM7M3x = await Rootkit_financeWXbegUs.balanceOf.call(addressPfwIgup, {from: accounts[4]});
		const boolKFFLp0F = await Rootkit_financeWXbegUs.approve.call(addressiTZs5Zw, uintFvf6f7T, {from: "0x0000000000000000000000000000000000000001"});
		const boolImc0DLd = await Rootkit_financeWXbegUs.transferFrom.call(addressoTAtoL3, addressQukXOWM, uint9AFtSE, {from: accounts[1]});

		assert.equal(boolImc0DLd, false)
		assert.equal(boolKFFLp0F, true)
		assert.equal(uint256C5t3TzT, BigInt("0"))
		assert.equal(uint256euM7M3x, BigInt("0"))
	});
})