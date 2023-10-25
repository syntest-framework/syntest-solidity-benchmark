const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100ytZHGEu = await Token50X100.new({from: accounts[4]});
		const uintYY3ppsT = BigInt("501")
		const uintpIht1Bo = BigInt("287")
//		await Token50X100ytZHGEu.onlyOwner.call({from: accounts[4]});
//		const boolbH7SByV = await Token50X100ytZHGEu.safeLock.call(uintpIht1Bo, uintYY3ppsT, {from: accounts[2]});

		await expect(Token50X100ytZHGEu.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100awreH7L = await Token50X100.new({from: accounts[1]});
		const uintUK3eGeF = BigInt("651")
		const addresshyR8Qe3 = accounts[3]
		const uintALm3fd0 = BigInt("2042")
		const uintFMgQEW6 = BigInt("628")
		const uintUZJd0A3 = BigInt("1097")
		const addressmQZfvLa = accounts[1]
		const uintByJmqz = BigInt("434")
		const addressCPsb3C = accounts[3]
//		await Token50X100awreH7L.release.call({from: accounts[2]});
//		const boolnPtI4MX = await Token50X100awreH7L.transfer.call(addresshyR8Qe3, uintUK3eGeF, {from: accounts[3]});
//		const boolavSEZY = await Token50X100awreH7L.setMaxLockPeriod.call(uintALm3fd0, {from: "0x0000000000000000000000000000000000000001"});
//		const bool6NSqkB = await Token50X100awreH7L.setVesting.call(addressmQZfvLa, uintUZJd0A3, uintFMgQEW6, {from: accounts[0]});
//		const boolSgJmDWx = await Token50X100awreH7L.transfer.call(addressCPsb3C, uintByJmqz, {from: accounts[4]});

		await expect(Token50X100awreH7L.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100liclz7 = await Token50X100.new({from: accounts[3]});
		const uintOmA6vMl = BigInt("1169")
		const uintdpvOI5S = BigInt("1275")
		const uintID3Zbcg = BigInt("248")
		const stringK1inark = "mawrtBRKKgrzSUaLZd4AOa8mNqvQWHitGgGzhcEvJh2J6TStPgmOjlamcKv9rH9Uj31VtCkqlcyM7MH6tKOF9IToc0LsyR74"
		const stringStCmSj = "oV4zxXltZNZ3NlY1TVmwt8gp42Hz9TaGcqjn0tmTGeJd7V0bDHFSWHaKAG1NnJ9IC0C"
//		const boolOL6kuCH = await Token50X100liclz7.safeLock.call(uintdpvOI5S, uintOmA6vMl, {from: accounts[3]});
//		const boolksbzbkf = await Token50X100liclz7.setSymbolNameDecimals.call(stringStCmSj, stringK1inark, uintID3Zbcg, {from: accounts[4]});
//		await Token50X100liclz7.release.call({from: accounts[4]});

		await expect(Token50X100liclz7.safeLock.call(uintdpvOI5S, uintOmA6vMl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100y3ESVY = await Token50X100.new({from: accounts[1]});
		const uintjPfvZNf = BigInt("1795")
		const addresso0nI2p2 = accounts[4]
		const addressygEG1bc = accounts[1]
		const addressTHZkdqc = accounts[0]
		const addressflOhB1v = accounts[2]
		const uintNgJY7RL = BigInt("1133")
		const addressYUfIC4K = accounts[4]
		const addresshEObLX0 = "0x0000000000000000000000000000000000000001"
		const uintJsuscSC = BigInt("483")
		const addressMoOBCuk = accounts[1]
//		const boolZsnyUZE = await Token50X100y3ESVY.transferFrom.call(addressygEG1bc, addresso0nI2p2, uintjPfvZNf, {from: accounts[5]});
//		await Token50X100y3ESVY.setLinkingAddresses.call(addressflOhB1v, addressTHZkdqc, {from: accounts[3]});
//		const boolszyMa4x = await Token50X100y3ESVY.transferFrom.call(addresshEObLX0, addressYUfIC4K, uintNgJY7RL, {from: accounts[1]});
//		const boolE6bjZP9 = await Token50X100y3ESVY.transfer.call(addressMoOBCuk, uintJsuscSC, {from: accounts[0]});

		await expect(Token50X100y3ESVY.transferFrom.call(addressygEG1bc, addresso0nI2p2, uintjPfvZNf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const uintAzSCeYj = BigInt("1731")
		const addressRcaXOSx = "0x0000000000000000000000000000000000000001"
		const addressjX6L594 = accounts[0]
//		const boolnINRRCR = await Token50X100shQIXhr.transfer.call(addressRcaXOSx, uintAzSCeYj, {from: accounts[1]});
//		const addresscDxMN5R = await Token50X100shQIXhr.setOriginalContract.call(addressjX6L594, {from: accounts[1]});

		await expect(Token50X100shQIXhr.transfer.call(addressRcaXOSx, uintAzSCeYj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kW5trwM = await Token50X100.new({from: accounts[4]});
		const uintW2Bqe8h = BigInt("869")
		const addresskKECdBC = accounts[3]
		const uintFz9ne7b = BigInt("2047")
		const uintsl0TLB = BigInt("478")
		const boololFcDO5 = await Token50X100kW5trwM.approve.call(addresskKECdBC, uintW2Bqe8h, {from: "0x0000000000000000000000000000000000000001"});
//		const boolF6eh0Fv = await Token50X100kW5trwM.safeLock.call(uintsl0TLB, uintFz9ne7b, {from: accounts[3]});

		assert.equal(boololFcDO5, true)
		await expect(Token50X100kW5trwM.safeLock.call(uintsl0TLB, uintFz9ne7b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Ef22WaG = await Token50X100.new({from: accounts[2]});
		const uintYDmxW18 = BigInt("368")
		const uintV9f9IJZ = BigInt("1347")
		const addressuQ5DDgi = accounts[1]
		const uintTiifCTB = BigInt("84")
		const stringB8ByBx3 = "DOCripWBOsI5mWhQ49uVF2Scz60lLRSwuI6lvAGbBUg5l13ixJ3cb"
		const stringbMmIwat = "7qccowZsZFa04kBcrJxIIUHq5pMj7Q86iEwJYBO4OJoT35wzuGw6G6oTLoOfTXcmBxde2swcWbuXW6IwbD3opi1nPkVfVkmV"
		const uintzU73NBG = BigInt("1968")
		const address9lGB9G = accounts[5]
		const addresso1DtgMO = accounts[4]
		const addressPZSQZ4x = accounts[5]
		const boolgzKivg5 = await Token50X100Ef22WaG.setMaxLockPeriod.call(uintYDmxW18, {from: accounts[4]});
//		await Token50X100Ef22WaG.onlyOwner.call({from: accounts[1]});
//		const boolUFqXia = await Token50X100Ef22WaG.increaseApproval.call(addressuQ5DDgi, uintV9f9IJZ, {from: accounts[2]});
//		await Token50X100Ef22WaG.setSymbolNameDecimals.call(stringbMmIwat, stringB8ByBx3, uintTiifCTB, {from: accounts[1]});
//		const boolujCC9cY = await Token50X100Ef22WaG.increaseApproval.call(address9lGB9G, uintzU73NBG, {from: accounts[4]});
//		const uint256fopmFH4 = await Token50X100Ef22WaG.allowance.call(addressPZSQZ4x, addresso1DtgMO, {from: accounts[2]});

		assert.equal(boolgzKivg5, false)
		await expect(Token50X100Ef22WaG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const addressExS5UVs = accounts[0]
		const uintouieEy2 = BigInt("1700")
		const addressVCntXsy = "0x0000000000000000000000000000000000000001"
		const addressskbSRWp = accounts[2]
		const addressIuyBWNe = accounts[0]
		const uint256ad40V0 = await Token50X100shQIXhr.balanceOf.call(addressExS5UVs, {from: accounts[4]});
//		const boolnINRRCR = await Token50X100shQIXhr.transfer.call(addressVCntXsy, uintouieEy2, {from: accounts[1]});
//		const addressSFTWQY2 = await Token50X100shQIXhr.transferOwnership.call(addressskbSRWp, {from: accounts[0]});
//		const addresscDxMN5R = await Token50X100shQIXhr.setOriginalContract.call(addressIuyBWNe, {from: accounts[1]});

		assert.equal(uint256ad40V0, BigInt("0"))
		await expect(Token50X100shQIXhr.transfer.call(addressVCntXsy, uintouieEy2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const uintyjAlQl1 = BigInt("1731")
		const addressQgE1K5A = "0x0000000000000000000000000000000000000000"
		const addressvRD6SJA = accounts[0]
		const uintmtQPaQe = BigInt("1801")
		const addressLTxEMY = accounts[3]
		const addressRjR8Ojs = "0x0000000000000000000000000000000000000001"
		const addressHhGsRuD = accounts[1]
//		const boolnINRRCR = await Token50X100shQIXhr.transfer.call(addressQgE1K5A, uintyjAlQl1, {from: accounts[1]});
//		const addresscDxMN5R = await Token50X100shQIXhr.setOriginalContract.call(addressvRD6SJA, {from: accounts[1]});
//		await Token50X100shQIXhr.onlyOwner.call({from: accounts[1]});
//		const boolUY7cWB7 = await Token50X100shQIXhr.transferFrom.call(addressRjR8Ojs, addressLTxEMY, uintmtQPaQe, {from: accounts[2]});
//		const addressuTnT7ml = await Token50X100shQIXhr.setOriginalContract.call(addressHhGsRuD, {from: accounts[2]});

		await expect(Token50X100shQIXhr.transfer.call(addressQgE1K5A, uintyjAlQl1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Ekb5jA0 = await Token50X100.new({from: accounts[1]});
		const uinthiXJFwo = BigInt("1799")
		const addressrc2wzQI = accounts[0]
		const uintvpVDo2C = BigInt("274")
		const addresstqJ0Dcx = accounts[3]
		const booljEGdLk8 = await Token50X100Ekb5jA0.increaseApproval.call(addressrc2wzQI, uinthiXJFwo, {from: accounts[5]});
//		const boolAXA4tOL = await Token50X100Ekb5jA0.transfer.call(addresstqJ0Dcx, uintvpVDo2C, {from: accounts[4]});
//		await Token50X100Ekb5jA0.release.call({from: accounts[5]});

		assert.equal(booljEGdLk8, true)
		await expect(Token50X100Ekb5jA0.transfer.call(addresstqJ0Dcx, uintvpVDo2C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TrLafQl = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQOvqwzQ = BigInt("141")
		const stringHBlKDsx = "orJB5dqDH1YxzqLkrSkvwwojeb5sE4zL6D6T2cpqP6UVLT1ji3QBpn08Lvwsa21csW"
		const stringwUihHue = "fTt"
		const addressJ4cmNW = accounts[5]
		const uinttV6VU7 = BigInt("155")
		const addressyCaJzhD = accounts[1]
		const addressGLyxRNj = accounts[5]
		const uintqA78gtQ = BigInt("23")
		const uintFIxhsir = BigInt("725")
		const addressICVj8JM = accounts[3]
		const addressIiPopXZ = accounts[3]
		const addresssLTpmS4 = accounts[0]
		const boolITfGBRu = await Token50X100TrLafQl.setSymbolNameDecimals.call(stringwUihHue, stringHBlKDsx, uintQOvqwzQ, {from: accounts[4]});
		const addressQBeot7e = await Token50X100TrLafQl.setOriginalContract.call(addressJ4cmNW, {from: accounts[0]});
		const boolhkPgMAX = await Token50X100TrLafQl.issueTokens.call(addressGLyxRNj, addressyCaJzhD, uinttV6VU7, {from: accounts[2]});
		await Token50X100TrLafQl.release.call({from: accounts[3]});
		const boolicYOOc = await Token50X100TrLafQl._transfer.call(addressIiPopXZ, addressICVj8JM, uintFIxhsir, uintqA78gtQ, {from: accounts[4]});
		const addressPDjEJqU = await Token50X100TrLafQl.setOriginalContract.call(addresssLTpmS4, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const addresswndzmcn = accounts[3]
		const addressuMNThMe = accounts[4]
		const addressnQvPFT = accounts[1]
		const uintuDZDnmq = BigInt("69")
		const addressXV3kiqE = accounts[4]
		const addressOdfuKon = accounts[4]
		const uint256ejwXBaY = await Token50X100shQIXhr.allowance.call(addressuMNThMe, addresswndzmcn, {from: accounts[0]});
//		const addresscDxMN5R = await Token50X100shQIXhr.setOriginalContract.call(addressnQvPFT, {from: accounts[1]});
//		const boolSe2OP8 = await Token50X100shQIXhr.issueTokens.call(addressOdfuKon, addressXV3kiqE, uintuDZDnmq, {from: accounts[3]});

		assert.equal(uint256ejwXBaY, BigInt("0"))
		await expect(Token50X100shQIXhr.setOriginalContract.call(addressnQvPFT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kW5trwM = await Token50X100.new({from: accounts[4]});
		const uintww3SGJ4 = BigInt("2026")
		const uintsqqS1ri = BigInt("478")
//		await Token50X100kW5trwM.release.call({from: accounts[4]});
//		const boolF6eh0Fv = await Token50X100kW5trwM.safeLock.call(uintsqqS1ri, uintww3SGJ4, {from: accounts[3]});

		await expect(Token50X100kW5trwM.release.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100DgIWvVG = await Token50X100.new({from: accounts[3]});
		const uintvfydY6 = BigInt("160")
		const string63eDWm = "WaGuFOI9pchnQEGI42dx0N1"
		const stringx4irOzq = "NpAlnnPdWBdVMIEMdSek1Jq1LaUVIw77ZjMtIaTVS7511oBakXPTGiydgxrcAcwhmvbkvFjoA8j58lzeIaZHwXP1UFhKFI3Eq"
		const uinttNmNPdC = BigInt("1520")
		const addressoVkTxUl = accounts[0]
		const uintySJhWEw = BigInt("975")
//		await Token50X100DgIWvVG.setSymbolNameDecimals.call(stringx4irOzq, string63eDWm, uintvfydY6, {from: accounts[3]});
//		const boolPHW7k0p = await Token50X100DgIWvVG.transfer.call(addressoVkTxUl, uinttNmNPdC, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100DgIWvVG.lock.call({from: accounts[1]});
//		const boolf5pA0YU = await Token50X100DgIWvVG.setMaxLockPeriod.call(uintySJhWEw, {from: accounts[1]});

		await expect(Token50X100DgIWvVG.setSymbolNameDecimals.call(stringx4irOzq, string63eDWm, uintvfydY6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kW5trwM = await Token50X100.new({from: accounts[4]});
		const uintDV0zPgj = BigInt("697")
		const uintMfJbN0S = BigInt("16")
		const addressxs7XJo = accounts[2]
		const uintC9uDmpU = BigInt("2026")
		const uintHaiViCk = BigInt("478")
		const uintpPUmq1E = BigInt("975")
		const uintsKdNFC = BigInt("806")
		const addressMNNyR3e = accounts[0]
		const boolTUSDOFe = await Token50X100kW5trwM.setVesting.call(addressxs7XJo, uintMfJbN0S, uintDV0zPgj, {from: accounts[4]});
//		const boolF6eh0Fv = await Token50X100kW5trwM.safeLock.call(uintHaiViCk, uintC9uDmpU, {from: accounts[3]});
//		const uint256SuuKhS0 = await Token50X100kW5trwM.totalSupply.call({from: accounts[3]});
//		const uint256zy1uDwn = await Token50X100kW5trwM.totalSupply.call({from: accounts[1]});
//		const boolHpNNTiY = await Token50X100kW5trwM.setVesting.call(addressMNNyR3e, uintsKdNFC, uintpPUmq1E, {from: accounts[2]});

		assert.equal(boolTUSDOFe, true)
		await expect(Token50X100kW5trwM.safeLock.call(uintHaiViCk, uintC9uDmpU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kW5trwM = await Token50X100.new({from: accounts[4]});
		const uintC2vc1e = BigInt("894")
		const addressDMu2IlI = accounts[4]
		const uintBIb7ttl = BigInt("2026")
		const uintmkg4cef = BigInt("513")
		const boolHh9Hsj3 = await Token50X100kW5trwM.decreaseApproval.call(addressDMu2IlI, uintC2vc1e, {from: accounts[3]});
//		await Token50X100kW5trwM.onlyOwner.call({from: accounts[5]});
//		const boolF6eh0Fv = await Token50X100kW5trwM.safeLock.call(uintmkg4cef, uintBIb7ttl, {from: accounts[3]});

		assert.equal(boolHh9Hsj3, true)
		await expect(Token50X100kW5trwM.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const boolbJ94cUE = true
		const addressvobRcAb = "0x0000000000000000000000000000000000000001"
		const uintnq9pKm = BigInt("1724")
		const addressZaAWRjH = "0x0000000000000000000000000000000000000001"
		const uint256mfhNVJ3 = await Token50X100shQIXhr.totalSupply.call({from: accounts[3]});
//		await Token50X100shQIXhr.setWhiteListReceivers.call(addressvobRcAb, boolbJ94cUE, {from: accounts[3]});
//		const boolnINRRCR = await Token50X100shQIXhr.transfer.call(addressZaAWRjH, uintnq9pKm, {from: accounts[1]});

		assert.equal(uint256mfhNVJ3, BigInt("4714285714285710"))
		await expect(Token50X100shQIXhr.setWhiteListReceivers.call(addressvobRcAb, boolbJ94cUE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100E9YAhDN = await Token50X100.new({from: accounts[2]});
		const boolcRxgu5R = true
		const addressXg4PgeW = accounts[3]
		const uintvYFXsYm = BigInt("858")
		const addressw4SnmtP = "0x0000000000000000000000000000000000000001"
		const uintorvuBqI = BigInt("744")
		const uintmRK3FJj = BigInt("1993")
		const uintQIiTeV = BigInt("131")
//		await Token50X100E9YAhDN.setWhiteList.call(addressXg4PgeW, boolcRxgu5R, {from: accounts[2]});
//		const boolOxRQFR = await Token50X100E9YAhDN.increaseApproval.call(addressw4SnmtP, uintvYFXsYm, {from: accounts[0]});
//		const booldsCteIT = await Token50X100E9YAhDN.setMaxLockPeriod.call(uintorvuBqI, {from: accounts[1]});
//		const boolt3bTtig = await Token50X100E9YAhDN.setMaxLockPeriod.call(uintmRK3FJj, {from: accounts[5]});
//		const boolxQsdwSH = await Token50X100E9YAhDN.setMaxLockPeriod.call(uintQIiTeV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100E9YAhDN.setWhiteList.call(addressXg4PgeW, boolcRxgu5R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100jA000GX = await Token50X100.new({from: accounts[0]});
		const boolVMqeN69 = false
		const addressRFaK0tR = accounts[3]
		const uintGFiun6c = BigInt("1854")
		const uintPOYy8bj = BigInt("1345")
		const addressxvus2ic = accounts[0]
		const uintd5bJxU = BigInt("1253")
		const addressvCm9wgQ = accounts[4]
//		await Token50X100jA000GX.setWhiteListReceivers.call(addressRFaK0tR, boolVMqeN69, {from: accounts[0]});
//		const boolVOtr0jP = await Token50X100jA000GX.setMaxLockPeriod.call(uintGFiun6c, {from: accounts[4]});
//		const booleqlXzQk = await Token50X100jA000GX.increaseApproval.call(addressxvus2ic, uintPOYy8bj, {from: accounts[3]});
//		const booloyLPTCY = await Token50X100jA000GX.transfer.call(addressvCm9wgQ, uintd5bJxU, {from: accounts[5]});

		await expect(Token50X100jA000GX.setWhiteListReceivers.call(addressRFaK0tR, boolVMqeN69, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const addressKILByUb = accounts[2]
		const uintKbTONBv = BigInt("1731")
		const addressBPgeMMQ = "0x0000000000000000000000000000000000000000"
		const addressjI9w5UC = await Token50X100shQIXhr.transferOwnership.call(addressKILByUb, {from: accounts[0]});
//		const boolnINRRCR = await Token50X100shQIXhr.transfer.call(addressBPgeMMQ, uintKbTONBv, {from: accounts[1]});
//		await Token50X100shQIXhr.release.call({from: accounts[1]});

		await expect(Token50X100shQIXhr.transfer.call(addressBPgeMMQ, uintKbTONBv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kW5trwM = await Token50X100.new({from: accounts[4]});
		const uintj2kxD4 = BigInt("516")
		const addressPbKYAWe = accounts[6]
		const uintaFg1mZF = BigInt("159")
		const uintTpxqAy = BigInt("1546")
		const addressYfOPwH = accounts[5]
		const addressIFVkAq = "0x0000000000000000000000000000000000000001"
		const addressYfbB7e4 = accounts[1]
		const boolOBcuKJn = await Token50X100kW5trwM.decreaseApproval.call(addressPbKYAWe, uintj2kxD4, {from: accounts[1]});
//		const boolzsu6Af = await Token50X100kW5trwM._transfer.call(addressIFVkAq, addressYfOPwH, uintTpxqAy, uintaFg1mZF, {from: accounts[4]});
//		const addressJAj332s = await Token50X100kW5trwM.transferOwnership.call(addressYfbB7e4, {from: accounts[5]});

		assert.equal(boolOBcuKJn, true)
		await expect(Token50X100kW5trwM._transfer.call(addressIFVkAq, addressYfOPwH, uintTpxqAy, uintaFg1mZF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100shQIXhr = await Token50X100.new({from: accounts[0]});
		const uintdq5aWgj = BigInt("202")
		const addressKZWDVuj = accounts[1]
		const uintQYqzfUO = BigInt("504")
		const addressCXJS3bu = accounts[3]
		const addressqio0CVJ = accounts[1]
		const boola5yZzx = await Token50X100shQIXhr.increaseApproval.call(addressKZWDVuj, uintdq5aWgj, {from: accounts[1]});
		const boolrDAQ5NQ = await Token50X100shQIXhr.decreaseApproval.call(addressCXJS3bu, uintQYqzfUO, {from: accounts[0]});
//		await Token50X100shQIXhr.setTokenContract.call(addressqio0CVJ, {from: accounts[0]});

		assert.equal(boola5yZzx, true)
		assert.equal(boolrDAQ5NQ, true)
		await expect(Token50X100shQIXhr.setTokenContract.call(addressqio0CVJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kW5trwM = await Token50X100.new({from: accounts[4]});
		const uintv7QARXB = BigInt("989")
		const addresswLveIKU = accounts[3]
		const uintmtV2nej = BigInt("2026")
		const uintDMTDkg = BigInt("478")
		const boolDeZegd = await Token50X100kW5trwM.increaseApproval.call(addresswLveIKU, uintv7QARXB, {from: accounts[1]});
//		await Token50X100kW5trwM.lock.call({from: accounts[4]});
//		const boolF6eh0Fv = await Token50X100kW5trwM.safeLock.call(uintDMTDkg, uintmtV2nej, {from: accounts[3]});

		assert.equal(boolDeZegd, true)
		await expect(Token50X100kW5trwM.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})