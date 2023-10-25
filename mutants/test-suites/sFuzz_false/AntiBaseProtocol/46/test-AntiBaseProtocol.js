const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoloieicsV = await AntiBaseProtocol.new({from: accounts[0]});
		const uintb7gIx14 = BigInt("1725")
		const addressJEnaJ9Q = "0x0000000000000000000000000000000000000001"
		const stringUArZSP9 = await AntiBaseProtocoloieicsV.name.call({from: "0x0000000000000000000000000000000000000001"});
		const booldElC6c = await AntiBaseProtocoloieicsV.approve.call(addressJEnaJ9Q, uintb7gIx14, {from: accounts[4]});
//		await AntiBaseProtocoloieicsV.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldElC6c, true)
		assert.equal(stringUArZSP9, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocoloieicsV.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringEWMPQhr = "x3ZI167bjIpWMpokouPtLz5niWhIFBQjLke5s4kFMWaqtOuiVkNudHz87OZT"
		const stringwhIOEb = "IKMs4TfmDVAjvqvNm2rANc1Qq61xQhltsGLsxGLeHyK4pOYR5cBjwXNfFU3a2QKnI5kcR4vJn67BfB9977J0ilmV7zzTAA1"
		const uintzlDJTFR = BigInt("15")
		const AntiBaseProtocolulLU2VQ = await AntiBaseProtocol.new(stringEWMPQhr, stringwhIOEb, uintzlDJTFR, {from: accounts[3]});
		const uintJl6d8qW = BigInt("292")
		const uintFzLWU7k = BigInt("754")
		const addressei4LpBH = accounts[0]
		const uintXf04ffR = BigInt("1647")
		const addressDfrZDMq = accounts[2]
		const uint256DSfmVXR = await AntiBaseProtocolulLU2VQ.findBurnFee.call(uintJl6d8qW, {from: accounts[4]});
		const addressZW57uKn = await AntiBaseProtocolulLU2VQ._mint.call(addressei4LpBH, uintFzLWU7k, {from: accounts[4]});
		const boolEVsJal0 = await AntiBaseProtocolulLU2VQ.increaseAllowance.call(addressDfrZDMq, uintXf04ffR, {from: accounts[0]});
		const addressvnRa01T = await AntiBaseProtocolulLU2VQ.owner.call({from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolLCbUvJZ = await AntiBaseProtocol.new({from: accounts[5]});
		const uintnauV9S4 = BigInt("642")
		const addressOgRzxII = accounts[4]
//		const boolBa1JKO7 = await AntiBaseProtocolLCbUvJZ.decreaseAllowance.call(addressOgRzxII, uintnauV9S4, {from: accounts[0]});
//		const uint8Dmf9XCR = await AntiBaseProtocolLCbUvJZ.decimals.call({from: accounts[3]});
//		const uint256QgQlCPd = await AntiBaseProtocolLCbUvJZ.totalSupply.call({from: accounts[4]});

		await expect(AntiBaseProtocolLCbUvJZ.decreaseAllowance.call(addressOgRzxII, uintnauV9S4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDl4eYAa = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLtQ8Tal = BigInt("1503")
		const uintns7B5qG = BigInt("60")
		const addressEk58cGF = accounts[2]
		const uint256Qo5ku6g = await AntiBaseProtocolDl4eYAa.findBurnFee.call(uintLtQ8Tal, {from: accounts[1]});
		const boolVkXU8s7 = await AntiBaseProtocolDl4eYAa.isOwner.call({from: accounts[4]});
		const boolu8V1Xal = await AntiBaseProtocolDl4eYAa.increaseAllowance.call(addressEk58cGF, uintns7B5qG, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolydNR0b8 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintywVe5p1 = BigInt("312")
		const addressRHiLf3N = accounts[5]
		const uintRkEXfPg = BigInt("1618")
		const addressVcnRTq9 = accounts[3]
		const addressIDX1tvz = accounts[5]
		const addressUBm5HmK = accounts[4]
		const addressKIpmLiu = accounts[0]
		const uinto8vJmnc = BigInt("1485")
		const addresslWiPDJO = accounts[5]
//		const addressqklsfm = await AntiBaseProtocolydNR0b8.burnFrom.call(addressRHiLf3N, uintywVe5p1, {from: accounts[5]});
//		const boolFeAx40C = await AntiBaseProtocolydNR0b8.transfer.call(addressVcnRTq9, uintRkEXfPg, {from: accounts[4]});
//		const uint256zYoF2e7 = await AntiBaseProtocolydNR0b8.balanceOf.call(addressIDX1tvz, {from: accounts[4]});
//		const uint256KxvbL8f = await AntiBaseProtocolydNR0b8.allowance.call(addressKIpmLiu, addressUBm5HmK, {from: accounts[4]});
//		const boolgsRiXB3 = await AntiBaseProtocolydNR0b8.increaseAllowance.call(addresslWiPDJO, uinto8vJmnc, {from: accounts[1]});

		await expect(AntiBaseProtocolydNR0b8.burnFrom.call(addressRHiLf3N, uintywVe5p1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKkdIKCw = await AntiBaseProtocol.new({from: accounts[2]});
		const addressGZl2jG2 = accounts[5]
		const uintTIP9fi0 = BigInt("1729")
		const addresszZLGCy = accounts[5]
		const addressrU9IVB = accounts[1]
		const boolbfUgisP = await AntiBaseProtocolKkdIKCw.isOwner.call({from: accounts[5]});
//		const addressTCjgN1O = await AntiBaseProtocolKkdIKCw.transferOwnership.call(addressGZl2jG2, {from: accounts[4]});
//		await AntiBaseProtocolKkdIKCw.renounceOwnership.call({from: accounts[2]});
//		const boolHAmLXTc = await AntiBaseProtocolKkdIKCw.transferFrom.call(addressrU9IVB, addresszZLGCy, uintTIP9fi0, {from: accounts[0]});
//		await AntiBaseProtocolKkdIKCw.requestGas.call({from: accounts[3]});

		assert.equal(boolbfUgisP, false)
		await expect(AntiBaseProtocolKkdIKCw.transferOwnership.call(addressGZl2jG2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintFFCJrM = BigInt("2001")
		const uintDRFUCc = BigInt("1062")
		const addresszCbB7b2 = accounts[0]
		const uintCEtaib = BigInt("997")
		const addressAbaTPi = "0x0000000000000000000000000000000000000001"
		const uint256Barid7f = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintFFCJrM, {from: accounts[1]});
//		const addressONjJbFq = await AntiBaseProtocolBfzII1O._mint.call(addresszCbB7b2, uintDRFUCc, {from: accounts[3]});
//		const addresspUXNIoA = await AntiBaseProtocolBfzII1O._burn.call(addressAbaTPi, uintCEtaib, {from: accounts[4]});

		assert.equal(uint256Barid7f, BigInt("105"))
		await expect(AntiBaseProtocolBfzII1O._mint.call(addresszCbB7b2, uintDRFUCc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintYWExixD = BigInt("2000")
		const uintOjA2Fre = BigInt("997")
		const addressbMeOAe = "0x0000000000000000000000000000000000000002"
		const uint256Barid7f = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintYWExixD, {from: accounts[1]});
		const uint8wKcWBc6 = await AntiBaseProtocolBfzII1O.decimals.call({from: accounts[4]});
//		const addresspUXNIoA = await AntiBaseProtocolBfzII1O._burn.call(addressbMeOAe, uintOjA2Fre, {from: accounts[4]});

		assert.equal(uint256Barid7f, BigInt("100"))
		assert.equal(uint8wKcWBc6, BigInt("18"))
		await expect(AntiBaseProtocolBfzII1O._burn.call(addressbMeOAe, uintOjA2Fre, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintxeu3u2Z = BigInt("1952")
		const uintGGVZcdr = BigInt("1933")
		const uint256Barid7f = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintxeu3u2Z, {from: accounts[1]});
		const stringpKZeWtx = await AntiBaseProtocolBfzII1O.symbol.call({from: accounts[2]});
		const uint256aCEcXve = await AntiBaseProtocolBfzII1O.burn.call(uintGGVZcdr, {from: accounts[4]});
//		await AntiBaseProtocolBfzII1O.onlyOwner.call({from: accounts[4]});

		assert.equal(stringpKZeWtx, "ABASE")
		assert.equal(uint256Barid7f, BigInt("100"))
		await expect(AntiBaseProtocolBfzII1O.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintwo0dO25 = BigInt("2038")
		const uintgYzSBe9 = BigInt("1104")
		const addressHydgNK = accounts[4]
		const addressmtfsQim = accounts[0]
		const uintsoThwUG = BigInt("789")
		const uint256Barid7f = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintwo0dO25, {from: accounts[1]});
//		const boolWUMgEJK = await AntiBaseProtocolBfzII1O.transferFrom.call(addressmtfsQim, addressHydgNK, uintgYzSBe9, {from: accounts[0]});
//		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintsoThwUG, {from: accounts[0]});

		assert.equal(uint256Barid7f, BigInt("105"))
		await expect(AntiBaseProtocolBfzII1O.transferFrom.call(addressmtfsQim, addressHydgNK, uintgYzSBe9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintN9lt9CL = BigInt("1178")
		const addressOiafErh = accounts[4]
		const uintGrzVi3r = BigInt("730")
		const boolASAm15L = await AntiBaseProtocolBfzII1O.increaseAllowance.call(addressOiafErh, uintN9lt9CL, {from: accounts[4]});
		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintGrzVi3r, {from: accounts[0]});

		assert.equal(boolASAm15L, true)
		assert.equal(uint256WZ1JU6X, BigInt("40"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolIK3vcCT = await AntiBaseProtocol.new({from: accounts[1]});
		const uintvjgD7Tv = BigInt("729")
		const uintD1dq6bk = BigInt("196")
		const addressusbwaGg = accounts[2]
		const uintwPKMPCG = BigInt("139")
		const addressEqfkmMZ = accounts[0]
		const uintqf7gIw = BigInt("1980")
		const addresszE4oCM5 = accounts[1]
		const uint256nPsBXee = await AntiBaseProtocolIK3vcCT.findBurnFee.call(uintvjgD7Tv, {from: accounts[3]});
//		const boolrcNUfYN = await AntiBaseProtocolIK3vcCT.transfer.call(addressusbwaGg, uintD1dq6bk, {from: accounts[0]});
//		const booluV65fvw = await AntiBaseProtocolIK3vcCT.transfer.call(addressEqfkmMZ, uintwPKMPCG, {from: accounts[2]});
//		const addressTB876Nz = await AntiBaseProtocolIK3vcCT._mint.call(addresszE4oCM5, uintqf7gIw, {from: accounts[2]});

		assert.equal(uint256nPsBXee, BigInt("120"))
		await expect(AntiBaseProtocolIK3vcCT.transfer.call(addressusbwaGg, uintD1dq6bk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const addressrGIK6lZ = accounts[3]
		const addressd9Q0iOA = accounts[3]
		const uintfwCDu6Q = BigInt("729")
		const uint256IDSFoJX = await AntiBaseProtocolBfzII1O.allowance.call(addressd9Q0iOA, addressrGIK6lZ, {from: accounts[3]});
//		await AntiBaseProtocolBfzII1O.renounceOwnership.call({from: accounts[4]});
//		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintfwCDu6Q, {from: accounts[0]});

		assert.equal(uint256IDSFoJX, BigInt("0"))
		await expect(AntiBaseProtocolBfzII1O.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintLR8yIQd = BigInt("561")
		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintLR8yIQd, {from: accounts[0]});
		const addresss98I0fC = await AntiBaseProtocolBfzII1O.owner.call({from: accounts[2]});

		assert.equal(addresss98I0fC, 0x4e173b08e3065A8dC376882Ffc5aba39b27CEF93)
		assert.equal(uint256WZ1JU6X, BigInt("30"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintvr05Fg = BigInt("765")
		const addresszneDocT = "0x0000000000000000000000000000000000000001"
		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintvr05Fg, {from: accounts[0]});
		const uint256g5s88WT = await AntiBaseProtocolBfzII1O.balanceOf.call(addresszneDocT, {from: accounts[2]});
		const stringH8bVhEx = await AntiBaseProtocolBfzII1O.name.call({from: accounts[4]});

		assert.equal(stringH8bVhEx, "https://t.me/antibaseprotocol")
		assert.equal(uint256WZ1JU6X, BigInt("40"))
		assert.equal(uint256g5s88WT, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintAakbtWD = BigInt("899")
		const addressNtokgC = accounts[4]
//		const addressKisMKEx = await AntiBaseProtocolBfzII1O.burnFrom.call(addressNtokgC, uintAakbtWD, {from: accounts[1]});
//		const addresss98I0fC = await AntiBaseProtocolBfzII1O.owner.call({from: accounts[2]});

		await expect(AntiBaseProtocolBfzII1O.burnFrom.call(addressNtokgC, uintAakbtWD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintlPaxBu = BigInt("783")
		const addressBSEk0Uf = accounts[5]
		const addressb0X2qGd = accounts[3]
		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintlPaxBu, {from: accounts[0]});
		const uint256LcGSg20 = await AntiBaseProtocolBfzII1O.totalSupply.call({from: accounts[3]});
		const uint256hLRvGZm = await AntiBaseProtocolBfzII1O.allowance.call(addressb0X2qGd, addressBSEk0Uf, {from: accounts[2]});

		assert.equal(uint256LcGSg20, BigInt("31250000000000000000"))
		assert.equal(uint256WZ1JU6X, BigInt("40"))
		assert.equal(uint256hLRvGZm, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintL4Nq1gB = BigInt("451")
		const uintwXiQ3Q = BigInt("1564")
		const addressDI74wN8 = accounts[3]
		const addressCwgoSzN = accounts[4]
		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uintL4Nq1gB, {from: accounts[0]});
//		const booloJ5ilR1 = await AntiBaseProtocolBfzII1O.transferFrom.call(addressCwgoSzN, addressDI74wN8, uintwXiQ3Q, {from: accounts[0]});

		assert.equal(uint256WZ1JU6X, BigInt("25"))
		await expect(AntiBaseProtocolBfzII1O.transferFrom.call(addressCwgoSzN, addressDI74wN8, uintwXiQ3Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uinttdarFl = BigInt("451")
		const addressp4RRjW4 = accounts[4]
		const uintaT0NHL4 = BigInt("1881")
		const addressAPPIObn = accounts[0]
		const uint256WZ1JU6X = await AntiBaseProtocolBfzII1O.findRewardFee.call(uinttdarFl, {from: accounts[0]});
		const addressEn0IKuH = await AntiBaseProtocolBfzII1O.transferOwnership.call(addressp4RRjW4, {from: accounts[4]});
		const booloIurNZN = await AntiBaseProtocolBfzII1O.isOwner.call({from: accounts[2]});
		const boolgRGCrhQ = await AntiBaseProtocolBfzII1O.increaseAllowance.call(addressAPPIObn, uintaT0NHL4, {from: accounts[4]});

		assert.equal(boolgRGCrhQ, true)
		assert.equal(booloIurNZN, false)
		assert.equal(uint256WZ1JU6X, BigInt("25"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBfzII1O = await AntiBaseProtocol.new({from: accounts[4]});
		const uintgDQYiHb = BigInt("0")
		const uint256J3r8DFD = await AntiBaseProtocolBfzII1O.findBurnFee.call(uintgDQYiHb, {from: accounts[3]});
		const stringFAq1eGQ = await AntiBaseProtocolBfzII1O.name.call({from: accounts[1]});

		assert.equal(stringFAq1eGQ, "https://t.me/antibaseprotocol")
		assert.equal(uint256J3r8DFD, BigInt("0"))
	});
})