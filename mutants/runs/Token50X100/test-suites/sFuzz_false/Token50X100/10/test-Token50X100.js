const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100me6mj6O = await Token50X100.new({from: accounts[2]});
		const uintKbNKEwR = BigInt("1119")
		const uintOVzeZ3 = BigInt("1067")
		const uintxHVSSMS = BigInt("5")
		const stringw8rpzUn = "K3PtARg2aVp6wCb9vHjwlGRBVG2u4UznkTYNeBOGWQMMTux9HiDCKasw2meoEDNlCnMw"
		const stringdOdVQNa = "t1Pw0VJpUkne"
		const uintpkkbs0R = BigInt("84")
		const stringYWzOyM = "KOTBWLMGc4lktq2axQzE4nLPmWFsVWtvR1GfA3PF7HvzaL3GBvawiHE"
		const stringOUsHUrM = "pCugVhqiqyWGrkcsu8HwUk8"
		const booliNzx8Bn = await Token50X100me6mj6O.safeLock.call(uintOVzeZ3, uintKbNKEwR, {from: accounts[0]});
		await Token50X100me6mj6O.onlyOwner.call({from: accounts[4]});
		await Token50X100me6mj6O.setSymbolNameDecimals.call(stringdOdVQNa, stringw8rpzUn, uintxHVSSMS, {from: accounts[2]});
		await Token50X100me6mj6O.release.call({from: accounts[4]});
		await Token50X100me6mj6O.setSymbolNameDecimals.call(stringOUsHUrM, stringYWzOyM, uintpkkbs0R, {from: accounts[1]});

		await expect(Token50X100me6mj6O.safeLock.call(uintOVzeZ3, uintKbNKEwR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100W34Z3x2 = await Token50X100.new({from: accounts[1]});
		const addressHxiiMWv = accounts[0]
		await Token50X100W34Z3x2.setTokenContract.call(addressHxiiMWv, {from: accounts[1]});
		await Token50X100W34Z3x2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Token50X100W34Z3x2.onlyOwner.call({from: accounts[3]});
		await Token50X100W34Z3x2.onlyOwner.call({from: accounts[5]});

		await expect(Token50X100W34Z3x2.setTokenContract.call(addressHxiiMWv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100g8qfqCl = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBWeIiCi = "0x0000000000000000000000000000000000000001"
		const uintnPCuEu5 = BigInt("1449")
		const addresssrrIVVB = accounts[4]
		const uintIilTvem = BigInt("1575")
		const addressacENFn3 = accounts[3]
		const uintzUetVOj = BigInt("713")
		const address1zmnAS = accounts[4]
		const addressi8X4nq = await Token50X100g8qfqCl.transferOwnership.call(addressBWeIiCi, {from: accounts[3]});
		const boolTpkTQ2A = await Token50X100g8qfqCl.approve.call(addresssrrIVVB, uintnPCuEu5, {from: accounts[1]});
		const boolamR3Ko = await Token50X100g8qfqCl.transfer.call(addressacENFn3, uintIilTvem, {from: accounts[5]});
		await Token50X100g8qfqCl.release.call({from: "0x0000000000000000000000000000000000000001"});
		const booliQhZPbk = await Token50X100g8qfqCl.approve.call(address1zmnAS, uintzUetVOj, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100ZM4sk91 = await Token50X100.new({from: accounts[4]});
		const addresstuFSLA = accounts[2]
		const addresswvMiwgk = accounts[0]
		const uintLlAZ4hY = BigInt("1610")
		const uintbj0JjhP = BigInt("118")
		const addressJIKEMMk = accounts[0]
		const addressOfU0yu2 = accounts[4]
		const uintgIHuCBc = BigInt("1597")
		const uintnmPsHf5 = BigInt("1982")
		const uint256D9VRbdJ = await Token50X100ZM4sk91.allowance.call(addresswvMiwgk, addresstuFSLA, {from: accounts[3]});
		const boolYVtepQs = await Token50X100ZM4sk91._transfer.call(addressOfU0yu2, addressJIKEMMk, uintbj0JjhP, uintLlAZ4hY, {from: accounts[2]});
		const boolaYsJW0K = await Token50X100ZM4sk91.setMaxLockPeriod.call(uintgIHuCBc, {from: accounts[3]});
		const boolUTczWvq = await Token50X100ZM4sk91.setMaxLockPeriod.call(uintnmPsHf5, {from: accounts[1]});

		assert.equal(uint256D9VRbdJ, BigInt("0"))
		await expect(Token50X100ZM4sk91._transfer.call(addressOfU0yu2, addressJIKEMMk, uintbj0JjhP, uintLlAZ4hY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vgwrRio = await Token50X100.new({from: accounts[2]});
		const uintpfhDXtr = BigInt("35")
		const uinty6AOMWE = BigInt("1151")
		const uintYSW1vTr = BigInt("1561")
		const addressfkMtCY = accounts[3]
		const addressIMc9PcH = "0x0000000000000000000000000000000000000001"
		const uintukmmPBP = BigInt("703")
		const addressurEEvz5 = accounts[4]
		const addressEdQD0h9 = accounts[0]
		const uintmFoHH59 = BigInt("397")
		const addressvzIvZtG = accounts[3]
		const uintzysOPyy = BigInt("145")
		const uintrXgUQr = BigInt("1415")
		const addressqLXh2Sm = accounts[2]
		const addressKmNK9rf = accounts[1]
		const boolDsg0Hoq = await Token50X100vgwrRio.setMaxLockPeriod.call(uintpfhDXtr, {from: accounts[0]});
		const boolxKbJnAA = await Token50X100vgwrRio._transfer.call(addressIMc9PcH, addressfkMtCY, uintYSW1vTr, uinty6AOMWE, {from: accounts[0]});
		const boolKrGVdEN = await Token50X100vgwrRio.transferFrom.call(addressEdQD0h9, addressurEEvz5, uintukmmPBP, {from: accounts[0]});
		const boolT7eFlB = await Token50X100vgwrRio.transfer.call(addressvzIvZtG, uintmFoHH59, {from: accounts[4]});
		const boolFvwzgJ = await Token50X100vgwrRio._transfer.call(addressKmNK9rf, addressqLXh2Sm, uintrXgUQr, uintzysOPyy, {from: accounts[4]});

		assert.equal(boolDsg0Hoq, false)
		await expect(Token50X100vgwrRio._transfer.call(addressIMc9PcH, addressfkMtCY, uintYSW1vTr, uinty6AOMWE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VPLfA2h = await Token50X100.new({from: accounts[5]});
		const uintOJavxal = BigInt("1919")
		const addressImmkTnx = accounts[2]
		const uintYcNKdpX = BigInt("868")
		const addressALR24bY = accounts[4]
		const uint0Ww7TH = BigInt("178")
		const stringJ7dsJ4B = "fsDK3e4D3itaUNxgE8gd3EYWt9Cf6Kh7Lq2O5faMRx5p6w8dIrAnhl3tmKXjpy3IutstMQDa2p44"
		const stringTX1F8RB = "oNqcjGbwEr6zXSg33OIqrvg9GkxY0f7MTqGfmVImrUCMnb3DLWFKbcLNP4NFCEebT51gSzHHcFIumg6"
		const boolQOhom3I = await Token50X100VPLfA2h.transfer.call(addressImmkTnx, uintOJavxal, {from: accounts[0]});
		await Token50X100VPLfA2h.onlyOwner.call({from: accounts[1]});
		const boolekw1Bvg = await Token50X100VPLfA2h.increaseApproval.call(addressALR24bY, uintYcNKdpX, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100VPLfA2h.setSymbolNameDecimals.call(stringTX1F8RB, stringJ7dsJ4B, uint0Ww7TH, {from: accounts[1]});

		await expect(Token50X100VPLfA2h.transfer.call(addressImmkTnx, uintOJavxal, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintS3TsRzm = BigInt("1670")
		const addresshOOOXLg = accounts[0]
		const uintEsHeTkw = BigInt("1245")
		const addressO5sUk1A = accounts[4]
		const boolfgcRZB0 = await Token50X100ipFSGKQ.increaseApproval.call(addresshOOOXLg, uintS3TsRzm, {from: accounts[2]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addressO5sUk1A, uintEsHeTkw, {from: accounts[1]});
		await Token50X100ipFSGKQ.onlyOwner.call({from: accounts[1]});

		assert.equal(boolfgcRZB0, true)
		await expect(Token50X100ipFSGKQ.transfer.call(addressO5sUk1A, uintEsHeTkw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100InMnIPq = await Token50X100.new({from: accounts[2]});
		const uintTMMICsU = BigInt("1564")
		const addresshgwYrDB = accounts[5]
		const addressuAmEUe = "0x0000000000000000000000000000000000000001"
		const uintw7uejd = BigInt("1781")
		const addressSBnOHot = accounts[2]
		const uintSmmz3tu = BigInt("420")
		const addressTJ606IO = accounts[1]
		const addressUbdZTu = accounts[4]
		const uinthaAJR0j = BigInt("1933")
		const uintoCeoHhV = BigInt("782")
		const addressziYzwL = accounts[3]
		const uinttmNgYoV = BigInt("162")
		const stringcmOpCEK = "6CGksW3h"
		const stringplEIQYO = "8MJEDfuZ3UfU4eHaEhSchrnB8SIews978uLhHwyyAKhgglZWXm7h8ly2CDlB7FNrQmtIGhEP61TLHVMIb1RKpmqFESBGtlmIJx"
		const boolXeZ32ma = await Token50X100InMnIPq.transferFrom.call(addressuAmEUe, addresshgwYrDB, uintTMMICsU, {from: accounts[2]});
		const boolS1q9xhX = await Token50X100InMnIPq.transfer.call(addressSBnOHot, uintw7uejd, {from: accounts[2]});
		const boolvE4Fil1 = await Token50X100InMnIPq.transferFrom.call(addressUbdZTu, addressTJ606IO, uintSmmz3tu, {from: accounts[0]});
		const boolBb38fcu = await Token50X100InMnIPq.setVesting.call(addressziYzwL, uintoCeoHhV, uinthaAJR0j, {from: accounts[1]});
		const booluUoklBy = await Token50X100InMnIPq.setSymbolNameDecimals.call(stringplEIQYO, stringcmOpCEK, uinttmNgYoV, {from: accounts[2]});

		await expect(Token50X100InMnIPq.transferFrom.call(addressuAmEUe, addresshgwYrDB, uintTMMICsU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintL8nnLuk = BigInt("1237")
		const addressgtlnFkk = accounts[4]
		await Token50X100ipFSGKQ.release.call({from: accounts[3]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addressgtlnFkk, uintL8nnLuk, {from: accounts[1]});

		await expect(Token50X100ipFSGKQ.release.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100fF9PrDh = await Token50X100.new({from: accounts[2]});
		const uintl7F3Hqv = BigInt("1453")
		const boolRI3Kwqi = await Token50X100fF9PrDh.setMaxLockPeriod.call(uintl7F3Hqv, {from: accounts[3]});
		const uint256rA7tkI = await Token50X100fF9PrDh.totalSupply.call({from: accounts[0]});

		assert.equal(boolRI3Kwqi, false)
		assert.equal(uint256rA7tkI, BigInt("4714285714285710"))
	});

	it('test for Token50X100', async () => {
		const Token50X100ELVOTi = await Token50X100.new({from: accounts[4]});
		const addressGgSqxOt = accounts[0]
		const uintuidiQNa = BigInt("1048")
		const uintlPb5zlS = BigInt("599")
		const uintpaZKNo6 = BigInt("1188")
		const addressh9aKKem = accounts[4]
		const addressCq6EJgp = accounts[0]
		const uint256RFYSTZ2 = await Token50X100ELVOTi.balanceOf.call(addressGgSqxOt, {from: accounts[1]});
		const boolLoWKlcQ = await Token50X100ELVOTi.setMaxLockPeriod.call(uintuidiQNa, {from: accounts[1]});
		const boolyTEEn7S = await Token50X100ELVOTi._transfer.call(addressCq6EJgp, addressh9aKKem, uintpaZKNo6, uintlPb5zlS, {from: accounts[2]});

		assert.equal(boolLoWKlcQ, false)
		assert.equal(uint256RFYSTZ2, BigInt("0"))
		await expect(Token50X100ELVOTi._transfer.call(addressCq6EJgp, addressh9aKKem, uintpaZKNo6, uintlPb5zlS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RJRceXe = await Token50X100.new({from: accounts[3]});
		const uintPUEc3WV = BigInt("698")
		const addressjI0dQ56 = accounts[3]
		const uintQuun0K4 = BigInt("531")
		const uintrv9tick = BigInt("1632")
		const uintgdHtm0x = BigInt("406")
		const addressJHJQBok = accounts[4]
		const addressoxYsWNy = accounts[2]
		const uintUezum8t = BigInt("589")
		const addressxakveNx = accounts[4]
		const addressTRtCbNE = accounts[0]
		const addressi9vahzV = accounts[5]
		const addressrDvdTr = accounts[1]
		const boolYT66lHh = await Token50X100RJRceXe.approve.call(addressjI0dQ56, uintPUEc3WV, {from: accounts[2]});
		const boolId6XvP = await Token50X100RJRceXe.safeLock.call(uintrv9tick, uintQuun0K4, {from: "0x0000000000000000000000000000000000000001"});
		const boolq1CJtw = await Token50X100RJRceXe.transferFrom.call(addressoxYsWNy, addressJHJQBok, uintgdHtm0x, {from: accounts[2]});
		const boolBvzPG26 = await Token50X100RJRceXe.transferFrom.call(addressTRtCbNE, addressxakveNx, uintUezum8t, {from: accounts[4]});
		const uint256mRnEi6V = await Token50X100RJRceXe.allowance.call(addressrDvdTr, addressi9vahzV, {from: accounts[5]});

		assert.equal(boolYT66lHh, true)
		await expect(Token50X100RJRceXe.safeLock.call(uintrv9tick, uintQuun0K4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintMn2GjKi = BigInt("81")
		const uintj4A1iqJ = BigInt("1121")
		const addressyKljN4l = accounts[4]
		const boolbMaMeCp = false
		const addresswSMAIMY = accounts[5]
		const uintZ0gY3x = BigInt("1237")
		const addresstnQKFr5 = accounts[4]
		const addressI1Rj3V4 = accounts[1]
		const uintC4y9Ot = BigInt("885")
		const uintHpe9uHZ = BigInt("238")
		const uintzYwnmbI = BigInt("1700")
		const addressRjdxCO1 = accounts[2]
		const boolOqme9aX = await Token50X100ipFSGKQ.setVesting.call(addressyKljN4l, uintj4A1iqJ, uintMn2GjKi, {from: accounts[3]});
		await Token50X100ipFSGKQ.setWhiteList.call(addresswSMAIMY, boolbMaMeCp, {from: accounts[0]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addresstnQKFr5, uintZ0gY3x, {from: accounts[1]});
		const addressNgIeB81 = await Token50X100ipFSGKQ.setOriginalContract.call(addressI1Rj3V4, {from: accounts[1]});
		const boolQZTMBnZ = await Token50X100ipFSGKQ.safeLock.call(uintHpe9uHZ, uintC4y9Ot, {from: "0x0000000000000000000000000000000000000001"});
		const boolU09lPJd = await Token50X100ipFSGKQ.transfer.call(addressRjdxCO1, uintzYwnmbI, {from: accounts[4]});

		assert.equal(boolOqme9aX, true)
		await expect(Token50X100ipFSGKQ.setWhiteList.call(addresswSMAIMY, boolbMaMeCp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintWGsGjT = BigInt("1157")
		const addressCzl0La = accounts[0]
		const addressVlFX89W = accounts[5]
		const uintqW2OnYp = BigInt("1237")
		const address8yZC0C = accounts[4]
		const boollP9HhG = await Token50X100ipFSGKQ.decreaseApproval.call(addressCzl0La, uintWGsGjT, {from: accounts[4]});
		const uint256WzaCGGh = await Token50X100ipFSGKQ.balanceOf.call(addressVlFX89W, {from: accounts[3]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(address8yZC0C, uintqW2OnYp, {from: accounts[1]});

		assert.equal(boollP9HhG, true)
		assert.equal(uint256WzaCGGh, BigInt("0"))
		await expect(Token50X100ipFSGKQ.transfer.call(address8yZC0C, uintqW2OnYp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintd9gPvWG = BigInt("1171")
		const addresssSMDiM = accounts[0]
		const addressm9r4WB4 = accounts[5]
		const uintC0y13rs = BigInt("1940")
		const uintTAJ2J7W = BigInt("113")
		const addresswrtdLZ1 = accounts[4]
		const addressHtUFJZK = accounts[0]
		const uintwCUYIh8 = BigInt("1237")
		const addresspXkb2R = accounts[4]
		const boollP9HhG = await Token50X100ipFSGKQ.decreaseApproval.call(addresssSMDiM, uintd9gPvWG, {from: accounts[4]});
		const uint256WzaCGGh = await Token50X100ipFSGKQ.balanceOf.call(addressm9r4WB4, {from: accounts[3]});
		const boolKeqO8Zz = await Token50X100ipFSGKQ._transfer.call(addressHtUFJZK, addresswrtdLZ1, uintTAJ2J7W, uintC0y13rs, {from: accounts[3]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addresspXkb2R, uintwCUYIh8, {from: accounts[1]});

		assert.equal(boollP9HhG, true)
		assert.equal(uint256WzaCGGh, BigInt("0"))
		await expect(Token50X100ipFSGKQ._transfer.call(addressHtUFJZK, addresswrtdLZ1, uintTAJ2J7W, uintC0y13rs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const addressyFYxfrd = accounts[4]
		const uintLNvWJTu = BigInt("1237")
		const addressnk5qLGI = accounts[6]
		const addressxZepb96 = await Token50X100ipFSGKQ.transferOwnership.call(addressyFYxfrd, {from: accounts[3]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addressnk5qLGI, uintLNvWJTu, {from: accounts[1]});

		await expect(Token50X100ipFSGKQ.transfer.call(addressnk5qLGI, uintLNvWJTu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintdarJTBG = BigInt("323")
		const addressOjt90M = accounts[1]
		const addresscm33G4d = accounts[5]
		await Token50X100ipFSGKQ.lock.call({from: accounts[3]});
		const boollP9HhG = await Token50X100ipFSGKQ.decreaseApproval.call(addressOjt90M, uintdarJTBG, {from: accounts[4]});
		const uint256WzaCGGh = await Token50X100ipFSGKQ.balanceOf.call(addresscm33G4d, {from: accounts[3]});

		await expect(Token50X100ipFSGKQ.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const addressgfIb6V = accounts[3]
		const addressq345Wh3 = accounts[2]
		const uintpaw3Bpa = BigInt("943")
		const uintb5bmOXz = BigInt("315")
		const addressJKpvUoN = accounts[1]
		await Token50X100ipFSGKQ.setLinkingAddresses.call(addressq345Wh3, addressgfIb6V, {from: accounts[3]});
		const boolV1rNXdX = await Token50X100ipFSGKQ.setMaxLockPeriod.call(uintpaw3Bpa, {from: accounts[4]});
		const boollP9HhG = await Token50X100ipFSGKQ.decreaseApproval.call(addressJKpvUoN, uintb5bmOXz, {from: accounts[4]});

		await expect(Token50X100ipFSGKQ.setLinkingAddresses.call(addressq345Wh3, addressgfIb6V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const addresscTAyuIe = accounts[3]
		const addresswze4cGu = accounts[2]
		const uintKo5OmO = BigInt("920")
		const uintuYve0bb = BigInt("38")
		const stringpLeEigu = "j3esLagIvHtfKeANj"
		const stringe4s5fz = "MA3tHJ"
		const uintn49kAG2 = BigInt("551")
		const addressEqsAD2G = accounts[2]
		const uintiTKJiJQ = BigInt("315")
		const addresswKTC5Vl = accounts[1]
		await Token50X100ipFSGKQ.setLinkingAddresses.call(addresswze4cGu, addresscTAyuIe, {from: accounts[3]});
		const boolV1rNXdX = await Token50X100ipFSGKQ.setMaxLockPeriod.call(uintKo5OmO, {from: accounts[4]});
		const booli19946C = await Token50X100ipFSGKQ.setSymbolNameDecimals.call(stringe4s5fz, stringpLeEigu, uintuYve0bb, {from: accounts[3]});
		const boolBvmBuS = await Token50X100ipFSGKQ.transfer.call(addressEqsAD2G, uintn49kAG2, {from: accounts[5]});
		const boollP9HhG = await Token50X100ipFSGKQ.decreaseApproval.call(addresswKTC5Vl, uintiTKJiJQ, {from: accounts[4]});

		await expect(Token50X100ipFSGKQ.setLinkingAddresses.call(addresswze4cGu, addresscTAyuIe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const boolfS6aXHf = false
		const addresskOMA3yO = accounts[4]
		const addressqLMG3wQ = accounts[2]
		const uintBOJOKc = BigInt("116")
		const addressF2HjlCZ = accounts[1]
		const addressZWJQ9By = accounts[0]
		await Token50X100ipFSGKQ.setWhiteList.call(addresskOMA3yO, boolfS6aXHf, {from: accounts[3]});
		const uint256rtczrmB = await Token50X100ipFSGKQ.balanceOf.call(addressqLMG3wQ, {from: accounts[0]});
		const boollP9HhG = await Token50X100ipFSGKQ.decreaseApproval.call(addressF2HjlCZ, uintBOJOKc, {from: accounts[4]});
		const addressN2czAbZ = await Token50X100ipFSGKQ.transferOwnership.call(addressZWJQ9By, {from: accounts[3]});

		await expect(Token50X100ipFSGKQ.setWhiteList.call(addresskOMA3yO, boolfS6aXHf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const boolTUheYjG = false
		const addresszxiZZ3N = accounts[0]
		const uintsXZoIwC = BigInt("1237")
		const addressio6lE6 = accounts[4]
		const uintSPmj4VT = BigInt("1311")
		const addressjHyp9gJ = accounts[0]
		const addresskK7nIBN = "0x0000000000000000000000000000000000000001"
		await Token50X100ipFSGKQ.setWhiteListReceivers.call(addresszxiZZ3N, boolTUheYjG, {from: accounts[3]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addressio6lE6, uintsXZoIwC, {from: accounts[1]});
		const boolNKKUiXl = await Token50X100ipFSGKQ.issueTokens.call(addresskK7nIBN, addressjHyp9gJ, uintSPmj4VT, {from: accounts[2]});

		await expect(Token50X100ipFSGKQ.setWhiteListReceivers.call(addresszxiZZ3N, boolTUheYjG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ipFSGKQ = await Token50X100.new({from: accounts[3]});
		const uintS4hvH46 = BigInt("871")
		const addressVDX2gR5 = "0x0000000000000000000000000000000000000001"
		const uintP66sKSC = BigInt("933")
		const addressWYKL8TJ = "0x0000000000000000000000000000000000000000"
		const uintc2ZMLS = BigInt("1237")
		const addressjSMonbj = accounts[5]
		const boolOX2QGT3 = await Token50X100ipFSGKQ.decreaseApproval.call(addressVDX2gR5, uintS4hvH46, {from: accounts[4]});
		const boolHqYddCw = await Token50X100ipFSGKQ.transfer.call(addressWYKL8TJ, uintP66sKSC, {from: accounts[1]});
		const boolJfttfFP = await Token50X100ipFSGKQ.transfer.call(addressjSMonbj, uintc2ZMLS, {from: accounts[1]});

		assert.equal(boolOX2QGT3, true)
		await expect(Token50X100ipFSGKQ.transfer.call(addressWYKL8TJ, uintP66sKSC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})