const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3lJqp26 = await Core_Fi_V3.new({from: accounts[4]});
		const addressJrghzi0 = accounts[2]
		const uintfTF2tAg = BigInt("1243")
		const addresslrAKc7a = "0x0000000000000000000000000000000000000001"
		const addressSFvSqi = accounts[1]
		const uint256TrnOnXz = await Core_Fi_V3lJqp26.balanceOf.call(addressJrghzi0, {from: accounts[3]});
		const boolN8krbJh = await Core_Fi_V3lJqp26.transfer.call(addresslrAKc7a, uintfTF2tAg, {from: accounts[1]});
		const uint256DJdGhek = await Core_Fi_V3lJqp26.totalSupply.call({from: accounts[1]});
		const uint256nX0fjwD = await Core_Fi_V3lJqp26.balanceOf.call(addressSFvSqi, {from: accounts[1]});

		assert.equal(boolN8krbJh, false)
		assert.equal(uint256DJdGhek, BigInt("84000000000000000000000"))
		assert.equal(uint256TrnOnXz, BigInt("0"))
		assert.equal(uint256nX0fjwD, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3BaCnSvP = await Core_Fi_V3.new({from: accounts[5]});
		const uintEaErSTn = BigInt("1963")
		const addressLCAc9W6 = accounts[2]
		const uintYqQNUwx = BigInt("1238")
		const addressEENB8yv = accounts[0]
		const addressInAxAyJ = accounts[4]
		const addressEbT3X7J = accounts[2]
		const boolVh1HcN = await Core_Fi_V3BaCnSvP.approve.call(addressLCAc9W6, uintEaErSTn, {from: accounts[4]});
		const boollELbUvD = await Core_Fi_V3BaCnSvP.transferFrom.call(addressInAxAyJ, addressEENB8yv, uintYqQNUwx, {from: accounts[2]});
		const uint256GVWnJsT = await Core_Fi_V3BaCnSvP.balanceOf.call(addressEbT3X7J, {from: accounts[0]});

		assert.equal(boolVh1HcN, true)
		assert.equal(boollELbUvD, false)
		assert.equal(uint256GVWnJsT, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3PPolo3B = await Core_Fi_V3.new({from: accounts[0]});
		const uintiP4QS6v = BigInt("16")
		const addressZINfna1 = accounts[0]
		const addressSsiPe6J = accounts[3]
		const addressLpZcWn8 = accounts[2]
		const addressrawcTrt = accounts[5]
		const addressBtDFjqT = "0x0000000000000000000000000000000000000001"
		const addressGvSQzxe = accounts[0]
		const uintO9e3byQ = BigInt("1886")
		const addressbToJqNe = "0x0000000000000000000000000000000000000001"
		const boolnW2QRb = await Core_Fi_V3PPolo3B.transfer.call(addressZINfna1, uintiP4QS6v, {from: accounts[1]});
		const uint256pNbGgs3 = await Core_Fi_V3PPolo3B.balanceOf.call(addressSsiPe6J, {from: accounts[2]});
		const uintZsYczu2 = await Core_Fi_V3PPolo3B.allowance.call(addressrawcTrt, addressLpZcWn8, {from: accounts[4]});
		const uintWPN1CzC = await Core_Fi_V3PPolo3B.allowance.call(addressGvSQzxe, addressBtDFjqT, {from: accounts[3]});
		const boolaYPTpde = await Core_Fi_V3PPolo3B.approve.call(addressbToJqNe, uintO9e3byQ, {from: accounts[3]});

		assert.equal(boolaYPTpde, true)
		assert.equal(boolnW2QRb, false)
		assert.equal(uint256pNbGgs3, BigInt("0"))
		assert.equal(uintWPN1CzC, BigInt("0"))
		assert.equal(uintZsYczu2, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ZDDGipC = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcPtN7wf = BigInt("281")
		const addressjUH2mi0 = accounts[2]
		const uintdyx3c2E = BigInt("682")
		const addresstPZpMw = accounts[3]
		const addressyzdyxFE = accounts[4]
		const boolQrfhSyI = await Core_Fi_V3ZDDGipC.transfer.call(addressjUH2mi0, uintcPtN7wf, {from: accounts[5]});
		const uint256RjA2rD2 = await Core_Fi_V3ZDDGipC.totalSupply.call({from: accounts[3]});
		const bool2etGlE = await Core_Fi_V3ZDDGipC.transferFrom.call(addressyzdyxFE, addresstPZpMw, uintdyx3c2E, {from: accounts[0]});
		const uint256G14km4 = await Core_Fi_V3ZDDGipC.totalSupply.call({from: accounts[4]});
	});
})