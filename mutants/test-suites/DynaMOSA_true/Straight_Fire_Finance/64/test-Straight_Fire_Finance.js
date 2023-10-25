const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceEayJPkZ = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintU4ikts8 = BigInt("1286")
		const addresst1LHTuz = "0x0000000000000000000000000000000000000001"
		const uintzNoSmbQ = BigInt("1160")
		const addressiGe6cfS = accounts[3]
		const addressugzPasJ = accounts[0]
		const uint17yU75 = BigInt("840")
		const addressW6ki1dI = accounts[3]
		const addressbuAJEeO = accounts[4]
		const uintU1tryyA = BigInt("103")
		const addressaTRozMI = accounts[2]
		const addressjDrcmsV = "0x0000000000000000000000000000000000000001"
		const uintYz6toF4 = BigInt("54")
		const addressgWlK5OV = accounts[1]
		const boollrK7yb = await Straight_Fire_FinanceEayJPkZ.transfer.call(addresst1LHTuz, uintU4ikts8, {from: accounts[0]});
		const boolePkXYTt = await Straight_Fire_FinanceEayJPkZ.transferFrom.call(addressugzPasJ, addressiGe6cfS, uintzNoSmbQ, {from: accounts[5]});
		const boolFVQ1GWH = await Straight_Fire_FinanceEayJPkZ.transferFrom.call(addressbuAJEeO, addressW6ki1dI, uint17yU75, {from: accounts[2]});
		const boolvIHi2Ib = await Straight_Fire_FinanceEayJPkZ.transferFrom.call(addressjDrcmsV, addressaTRozMI, uintU1tryyA, {from: accounts[2]});
		const boolByihbuL = await Straight_Fire_FinanceEayJPkZ.transfer.call(addressgWlK5OV, uintYz6toF4, {from: accounts[3]});

		assert.equal(boolByihbuL, false)
		assert.equal(boolFVQ1GWH, false)
		assert.equal(boolePkXYTt, false)
		assert.equal(boollrK7yb, false)
		assert.equal(boolvIHi2Ib, false)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceEnj8YCT = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressJYNi0S = accounts[1]
		const addressYxsBKsI = accounts[0]
		const addresskMtfivv = accounts[2]
		const uintoOgAvsS = BigInt("465")
		const addressTuV9u7Q = accounts[3]
		const addressm5U3Hgt = accounts[2]
		const addressB3NNUMY = accounts[4]
		const uint256lmbbMZy = await Straight_Fire_FinanceEnj8YCT.balanceOf.call(addressJYNi0S, {from: accounts[4]});
		const uintfU3nGm = await Straight_Fire_FinanceEnj8YCT.allowance.call(addresskMtfivv, addressYxsBKsI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oxJ89H9 = await Straight_Fire_FinanceEnj8YCT.totalSupply.call({from: accounts[3]});
		const boolzK4knJ9 = await Straight_Fire_FinanceEnj8YCT.transfer.call(addressTuV9u7Q, uintoOgAvsS, {from: accounts[3]});
		const uintk7rOuCA = await Straight_Fire_FinanceEnj8YCT.allowance.call(addressB3NNUMY, addressm5U3Hgt, {from: accounts[4]});

		assert.equal(boolzK4knJ9, false)
		assert.equal(uint256lmbbMZy, BigInt("80000000000000000000000"))
		assert.equal(uint256oxJ89H9, BigInt("80000000000000000000000"))
		assert.equal(uintfU3nGm, BigInt("0"))
		assert.equal(uintk7rOuCA, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financew7b7PQt = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintEzk0MFw = BigInt("1325")
		const addressxHKouE = accounts[5]
		const addressJPU6Ibi = accounts[1]
		const uintulktQqJ = BigInt("565")
		const addressASkABVp = accounts[0]
		const uintmspkYmB = BigInt("1148")
		const addressaNTSLBp = accounts[3]
		const booldaVODa6 = await Straight_Fire_Financew7b7PQt.transfer.call(addressxHKouE, uintEzk0MFw, {from: accounts[1]});
		const uint256WVtIcgS = await Straight_Fire_Financew7b7PQt.balanceOf.call(addressJPU6Ibi, {from: accounts[2]});
		const boolyyjnBE = await Straight_Fire_Financew7b7PQt.approve.call(addressASkABVp, uintulktQqJ, {from: "0x0000000000000000000000000000000000000001"});
		const bool3Gut6z = await Straight_Fire_Financew7b7PQt.approve.call(addressaNTSLBp, uintmspkYmB, {from: accounts[1]});

		assert.equal(bool3Gut6z, true)
		assert.equal(booldaVODa6, false)
		assert.equal(boolyyjnBE, true)
		assert.equal(uint256WVtIcgS, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceE6eHUJ7 = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvCcLROO = BigInt("1271")
		const addressdgphJHg = accounts[1]
		const addressH7rGHF9 = "0x0000000000000000000000000000000000000001"
		const uintz9mMFDb = BigInt("896")
		const addresszud3Ilc = accounts[2]
		const boolsaOuhU = await Straight_Fire_FinanceE6eHUJ7.transfer.call(addressdgphJHg, uintvCcLROO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gR8NEpn = await Straight_Fire_FinanceE6eHUJ7.balanceOf.call(addressH7rGHF9, {from: accounts[3]});
		const boolxtYQKf8 = await Straight_Fire_FinanceE6eHUJ7.transfer.call(addresszud3Ilc, uintz9mMFDb, {from: accounts[5]});
	});
})