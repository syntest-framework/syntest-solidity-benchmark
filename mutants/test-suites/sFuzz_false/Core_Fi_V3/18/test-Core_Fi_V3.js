const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Jqdq36 = await Core_Fi_V3.new({from: accounts[5]});
		const addressGE7plqn = accounts[4]
		const uintg44z73O = BigInt("44")
		const addressXBb8ctu = accounts[1]
		const addressVPMhaxT = accounts[5]
		const uintoFM1OOq = BigInt("133")
		const addressKFywG0P = accounts[3]
		const addressCAmjWFU = accounts[2]
		const uintwH4kI4w = BigInt("917")
		const addressuL9FhO8 = accounts[3]
		const addressPSPbmL = accounts[3]
		const uintvld2Cb = BigInt("1778")
		const addressoPymp44 = accounts[2]
		const addressXZ08lOw = accounts[2]
		const uint256G9vP47x = await Core_Fi_V3Jqdq36.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hpchgAs = await Core_Fi_V3Jqdq36.balanceOf.call(addressGE7plqn, {from: accounts[2]});
		const boolhlfjcG = await Core_Fi_V3Jqdq36.transferFrom.call(addressVPMhaxT, addressXBb8ctu, uintg44z73O, {from: accounts[3]});
		const boolKVNq3oB = await Core_Fi_V3Jqdq36.transferFrom.call(addressCAmjWFU, addressKFywG0P, uintoFM1OOq, {from: accounts[3]});
		const boolVuz6cEW = await Core_Fi_V3Jqdq36.transferFrom.call(addressPSPbmL, addressuL9FhO8, uintwH4kI4w, {from: accounts[4]});
		const boolOhoBSQ5 = await Core_Fi_V3Jqdq36.transferFrom.call(addressXZ08lOw, addressoPymp44, uintvld2Cb, {from: accounts[3]});

		assert.equal(boolKVNq3oB, false)
		assert.equal(boolOhoBSQ5, false)
		assert.equal(boolVuz6cEW, false)
		assert.equal(boolhlfjcG, false)
		assert.equal(uint256G9vP47x, BigInt("84000000000000000000000"))
		assert.equal(uint256hpchgAs, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Dwuxat3 = await Core_Fi_V3.new({from: accounts[0]});
		const addresswvUDIlw = accounts[0]
		const addressOQB3X2 = accounts[0]
		const addressBxO0NOu = accounts[4]
		const addressIYtNK8M = "0x0000000000000000000000000000000000000001"
		const uintxGFCPx = BigInt("866")
		const addressUhYfE39 = accounts[4]
		const addressBxCLKF5 = accounts[0]
		const uint256rTeBvyN = await Core_Fi_V3Dwuxat3.balanceOf.call(addresswvUDIlw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LpJYTtx = await Core_Fi_V3Dwuxat3.balanceOf.call(addressOQB3X2, {from: accounts[1]});
		const uintiVk9u6q = await Core_Fi_V3Dwuxat3.allowance.call(addressIYtNK8M, addressBxO0NOu, {from: accounts[0]});
		const uint256Eblt0Z8 = await Core_Fi_V3Dwuxat3.totalSupply.call({from: accounts[0]});
		const boolKL8u0xZ = await Core_Fi_V3Dwuxat3.transferFrom.call(addressBxCLKF5, addressUhYfE39, uintxGFCPx, {from: accounts[3]});

		assert.equal(boolKL8u0xZ, false)
		assert.equal(uint256Eblt0Z8, BigInt("84000000000000000000000"))
		assert.equal(uint256LpJYTtx, BigInt("84000000000000000000000"))
		assert.equal(uint256rTeBvyN, BigInt("84000000000000000000000"))
		assert.equal(uintiVk9u6q, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3S63ljWx = await Core_Fi_V3.new({from: accounts[2]});
		const uintLDVOaTm = BigInt("1928")
		const addressp3nVLFT = "0x0000000000000000000000000000000000000001"
		const addresshoZXmkH = accounts[5]
		const uintTvIotjz = BigInt("1736")
		const addressR2W6jrA = accounts[3]
		const uintrbbi8EO = BigInt("275")
		const addressfhCI73i = "0x0000000000000000000000000000000000000001"
		const addressB5MH52S = accounts[0]
		const addressaEupZy1 = accounts[0]
		const addressv29i1in = accounts[3]
		const addressM7Kqr7O = accounts[4]
		const boolL2M23W = await Core_Fi_V3S63ljWx.transferFrom.call(addresshoZXmkH, addressp3nVLFT, uintLDVOaTm, {from: accounts[4]});
		const booltTh30EI = await Core_Fi_V3S63ljWx.transfer.call(addressR2W6jrA, uintTvIotjz, {from: accounts[2]});
		const boolECLpMfi = await Core_Fi_V3S63ljWx.transferFrom.call(addressB5MH52S, addressfhCI73i, uintrbbi8EO, {from: accounts[1]});
		const uint256KQWU4hm = await Core_Fi_V3S63ljWx.balanceOf.call(addressaEupZy1, {from: accounts[0]});
		const uintKcOyVTV = await Core_Fi_V3S63ljWx.allowance.call(addressM7Kqr7O, addressv29i1in, {from: accounts[1]});

		assert.equal(boolECLpMfi, false)
		assert.equal(boolL2M23W, false)
		assert.equal(booltTh30EI, true)
		assert.equal(uint256KQWU4hm, BigInt("0"))
		assert.equal(uintKcOyVTV, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Z0HoeXy = await Core_Fi_V3.new({from: accounts[4]});
		const addressDwDEyZY = accounts[3]
		const uintAprwSs2 = BigInt("645")
		const addressiZqQvl1 = "0x0000000000000000000000000000000000000001"
		const addressmWhae9E = accounts[0]
		const addressyK2U9Ci = accounts[4]
		const addressij2Nn6e = accounts[3]
		const uintmLeu1ps = BigInt("1716")
		const addresssasyqd = accounts[3]
		const uint256YpyN4uF = await Core_Fi_V3Z0HoeXy.balanceOf.call(addressDwDEyZY, {from: "0x0000000000000000000000000000000000000001"});
		const boolwvKE9k4 = await Core_Fi_V3Z0HoeXy.approve.call(addressiZqQvl1, uintAprwSs2, {from: accounts[0]});
		const uintSGnETkE = await Core_Fi_V3Z0HoeXy.allowance.call(addressyK2U9Ci, addressmWhae9E, {from: accounts[2]});
		const uint256IJyX2yP = await Core_Fi_V3Z0HoeXy.balanceOf.call(addressij2Nn6e, {from: "0x0000000000000000000000000000000000000001"});
		const booljDZRFWX = await Core_Fi_V3Z0HoeXy.approve.call(addresssasyqd, uintmLeu1ps, {from: accounts[2]});

		assert.equal(booljDZRFWX, true)
		assert.equal(boolwvKE9k4, true)
		assert.equal(uint256IJyX2yP, BigInt("0"))
		assert.equal(uint256YpyN4uF, BigInt("0"))
		assert.equal(uintSGnETkE, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3SBwJUPH = await Core_Fi_V3.new({from: accounts[1]});
		const uintIx3J84C = BigInt("144")
		const addresslAUweo = accounts[4]
		const addressto6boE = accounts[1]
		const uintTpn6PsS = BigInt("417")
		const addressMJbB1ed = "0x0000000000000000000000000000000000000001"
		const uintKX3ZFUi = BigInt("578")
		const addressi5Adinn = accounts[5]
		const boolKJGpqo1 = await Core_Fi_V3SBwJUPH.transfer.call(addresslAUweo, uintIx3J84C, {from: accounts[0]});
		const uint256wNrRwJW = await Core_Fi_V3SBwJUPH.balanceOf.call(addressto6boE, {from: accounts[0]});
		const boolgqPZFLJ = await Core_Fi_V3SBwJUPH.transfer.call(addressMJbB1ed, uintTpn6PsS, {from: accounts[4]});
		const boollNu8U2S = await Core_Fi_V3SBwJUPH.transfer.call(addressi5Adinn, uintKX3ZFUi, {from: accounts[2]});

		assert.equal(boolKJGpqo1, false)
		assert.equal(boolgqPZFLJ, false)
		assert.equal(boollNu8U2S, false)
		assert.equal(uint256wNrRwJW, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3mQCVPDl = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressB7NiwHW = accounts[1]
		const addressiJJtdHi = accounts[3]
		const addressVqSEWbz = accounts[0]
		const addressmnkvSh = accounts[0]
		const uintqwAxARS = BigInt("122")
		const addresstRM9tzC = accounts[3]
		const addressdiIf1eX = accounts[0]
		const uint256XOi5Ilt = await Core_Fi_V3mQCVPDl.balanceOf.call(addressB7NiwHW, {from: accounts[1]});
		const uint256zIppRMc = await Core_Fi_V3mQCVPDl.balanceOf.call(addressiJJtdHi, {from: accounts[2]});
		const uintnxsOLaZ = await Core_Fi_V3mQCVPDl.allowance.call(addressmnkvSh, addressVqSEWbz, {from: "0x0000000000000000000000000000000000000001"});
		const boolhnKYnb = await Core_Fi_V3mQCVPDl.transferFrom.call(addressdiIf1eX, addresstRM9tzC, uintqwAxARS, {from: accounts[3]});
	});
})