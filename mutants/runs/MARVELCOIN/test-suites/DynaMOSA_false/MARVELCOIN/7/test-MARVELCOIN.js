const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintEimSKm7 = BigInt("669")
		const stringnBoUcHs = "4OFsHpyNoilLhQJ4jVIs"
		const stringbknzgXQ = "8amIXxgcu465HdIziF2G4dvWjzxscRyvd"
		const MARVELCOINFCarf8g = await MARVELCOIN.new(uintEimSKm7, stringnBoUcHs, stringbknzgXQ, {from: accounts[0]});
		const uintM1MmBk0 = BigInt("799")
		const uintUe76gHR = BigInt("1230")
		const addresseki9yFC = accounts[2]
		const addressm1BlbCr = "0x0000000000000000000000000000000000000001"
		const uintsBvI16b = BigInt("1982")
		const addressDJnF53W = accounts[4]
		const byteBYI0k4 = "0x121e061a16031d1a000a1d091b1e091f19040a14"
		const uintA5oAcC7 = BigInt("665")
		const addressmMPUz3L = accounts[1]
		const boolX08qubs = await MARVELCOINFCarf8g.burn.call(uintM1MmBk0, {from: accounts[2]});
		const boolYfR6fb6 = await MARVELCOINFCarf8g.transferFrom.call(addressm1BlbCr, addresseki9yFC, uintUe76gHR, {from: "0x0000000000000000000000000000000000000001"});
		const boolSTvimfO = await MARVELCOINFCarf8g.burnFrom.call(addressDJnF53W, uintsBvI16b, {from: accounts[3]});
		const boolzusZCX2 = await MARVELCOINFCarf8g.approveAndCall.call(addressmMPUz3L, uintA5oAcC7, byteBYI0k4, {from: accounts[4]});

		await expect(MARVELCOINFCarf8g.burn.call(uintM1MmBk0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintd1vlmS4 = BigInt("317")
		const stringlPVQXTM = "qxR"
		const stringK2OyP6M = "p1tWAkyTjGD2hEUIFr4dsJWAFQ2SN25s"
		const MARVELCOINVyBrdaL = await MARVELCOIN.new(uintd1vlmS4, stringlPVQXTM, stringK2OyP6M, {from: accounts[0]});
		const uintForGUTi = BigInt("1309")
		const addressjISL7XG = "0x0000000000000000000000000000000000000001"
		const bytewtVMi5T = "0x161202"
		const uintxY9pZgw = BigInt("722")
		const addressPv4hiEf = accounts[1]
		const uintZL4Duvp = BigInt("53")
		const uinthXpTzKU = BigInt("2000")
		const addressmw8E6c3 = accounts[4]
		const uintZb9RE9 = BigInt("239")
		const uintxhsRYa0 = BigInt("160")
		const addresscNLCUo = accounts[2]
		const boolCfA6PHQ = await MARVELCOINVyBrdaL.approve.call(addressjISL7XG, uintForGUTi, {from: accounts[4]});
		const boolqdMrgQn = await MARVELCOINVyBrdaL.approveAndCall.call(addressPv4hiEf, uintxY9pZgw, bytewtVMi5T, {from: accounts[3]});
		const booltpQIqnz = await MARVELCOINVyBrdaL.burn.call(uintZL4Duvp, {from: accounts[4]});
		const boolSSo6yBJ = await MARVELCOINVyBrdaL.approve.call(addressmw8E6c3, uinthXpTzKU, {from: accounts[3]});
		const boolGaQhwPz = await MARVELCOINVyBrdaL.burn.call(uintZb9RE9, {from: accounts[5]});
		const boolvDtGCTi = await MARVELCOINVyBrdaL.approve.call(addresscNLCUo, uintxhsRYa0, {from: accounts[1]});

		assert.equal(boolCfA6PHQ, true)
		await expect(MARVELCOINVyBrdaL.approveAndCall.call(addressPv4hiEf, uintxY9pZgw, bytewtVMi5T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintPwaW5dw = BigInt("318")
		const stringIsPiNCD = "R8MEECeAco"
		const stringG9xPV8h = "ksTUMX3W2VyBtdHfztcLaBWPvZXrmG2NhU5V5yTT9a4YSqeqAJ7xx2MyY6NnDurdT"
		const MARVELCOINsNWDc5F = await MARVELCOIN.new(uintPwaW5dw, stringIsPiNCD, stringG9xPV8h, {from: accounts[3]});
		const uintbf8RZuy = BigInt("2028")
		const addressN5HUGRV = "0x0000000000000000000000000000000000000001"
		const addressdJBu7zr = accounts[0]
		const byteDdVkvb9 = "0x161e171c1f181a18051a11030602131f1c191d14040f1704201505"
		const uintHo0leCK = BigInt("626")
		const addressJXxEJC = accounts[1]
		const uintojbDRJW = BigInt("1949")
		const addressatBNV2W = "0x0000000000000000000000000000000000000001"
		const addressEEKCCDy = accounts[0]
		const uintGcj5qSA = BigInt("1022")
		const boolyo1UIHB = await MARVELCOINsNWDc5F.transferFrom.call(addressdJBu7zr, addressN5HUGRV, uintbf8RZuy, {from: "0x0000000000000000000000000000000000000001"});
		const boolFCvCW3m = await MARVELCOINsNWDc5F.approveAndCall.call(addressJXxEJC, uintHo0leCK, byteDdVkvb9, {from: "0x0000000000000000000000000000000000000001"});
		const booluR7HbdB = await MARVELCOINsNWDc5F.transferFrom.call(addressEEKCCDy, addressatBNV2W, uintojbDRJW, {from: accounts[5]});
		const boollNUwlgx = await MARVELCOINsNWDc5F.burn.call(uintGcj5qSA, {from: accounts[1]});

		await expect(MARVELCOINsNWDc5F.transferFrom.call(addressdJBu7zr, addressN5HUGRV, uintbf8RZuy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintjIxYEVA = BigInt("1695")
		const stringGSHn0LU = "W5sFqszxyBxyD4TUwQVl5n4PSIwGlTI1sqxdnwu58WCFE3Rkmjxh"
		const stringtZ05dAM = "EvjwtcIV8xXYkvplcCrmpoK"
		const MARVELCOINgOD9DKE = await MARVELCOIN.new(uintjIxYEVA, stringGSHn0LU, stringtZ05dAM, {from: accounts[3]});
		const uintlguguuZ = BigInt("1391")
		const addressvD9ArR1 = accounts[4]
		const byteKVHLyfh = "0x0f02010503161f"
		const uintoXuwbUz = BigInt("1610")
		const addressIFvOw5N = accounts[1]
		const uintPmR7TFR = BigInt("2015")
		const addressXaE9HkB = accounts[1]
		const addressiMfH3Ef = "0x0000000000000000000000000000000000000001"
		const uinthQeUom9 = BigInt("956")
		const addressUtjdVvA = accounts[4]
		const addressLxyzWfl = accounts[3]
		const uintBSZmLK = BigInt("1913")
		const addresshIMq3SH = "0x0000000000000000000000000000000000000001"
		const boolyVEkhby = await MARVELCOINgOD9DKE.burnFrom.call(addressvD9ArR1, uintlguguuZ, {from: accounts[4]});
		const boolkVHTBbU = await MARVELCOINgOD9DKE.approveAndCall.call(addressIFvOw5N, uintoXuwbUz, byteKVHLyfh, {from: accounts[3]});
		const boolyr8n0mm = await MARVELCOINgOD9DKE.transferFrom.call(addressiMfH3Ef, addressXaE9HkB, uintPmR7TFR, {from: accounts[1]});
		const boolMg8u5e9 = await MARVELCOINgOD9DKE.transferFrom.call(addressLxyzWfl, addressUtjdVvA, uinthQeUom9, {from: accounts[0]});
		const boolBzuZWQB = await MARVELCOINgOD9DKE.burnFrom.call(addresshIMq3SH, uintBSZmLK, {from: accounts[1]});

		await expect(MARVELCOINgOD9DKE.burnFrom.call(addressvD9ArR1, uintlguguuZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintcNLqbqr = BigInt("318")
		const stringIsPiNCD = "R8MEECeAco"
		const stringG9xPV8h = "ksTUMX3W2VyBtdHfztcLaBWPvZXrmG2NhU5V5yTT9a4YSqeqAJ7xx2MyY6NnDurdT"
		const MARVELCOINsNWDc5F = await MARVELCOIN.new(uintcNLqbqr, stringIsPiNCD, stringG9xPV8h, {from: accounts[3]});
		const uintyBiqcs8 = BigInt("526")
		const addressvLPBXzi = accounts[2]
		const uintJq5nAq8 = BigInt("2028")
		const addresswxI3TuS = "0x0000000000000000000000000000000000000001"
		const addresst57T25y = accounts[0]
		const bytes46Fjp = "0x161e171c1f181a18051a11030602131f1c191d14040f1704201505"
		const uintkSh6mfC = BigInt("626")
		const addressGTcLxlq = accounts[1]
		const uintYi0Paf = BigInt("1949")
		const addressa9xxPks = "0x0000000000000000000000000000000000000000"
		const address11YwOn = accounts[0]
		const uintDkd3Dsh = BigInt("1022")
		const boold4CFGMx = await MARVELCOINsNWDc5F.transfer.call(addressvLPBXzi, uintyBiqcs8, {from: accounts[3]});
		const boolyo1UIHB = await MARVELCOINsNWDc5F.transferFrom.call(addresst57T25y, addresswxI3TuS, uintJq5nAq8, {from: "0x0000000000000000000000000000000000000001"});
		const boolFCvCW3m = await MARVELCOINsNWDc5F.approveAndCall.call(addressGTcLxlq, uintkSh6mfC, bytes46Fjp, {from: "0x0000000000000000000000000000000000000001"});
		const booluR7HbdB = await MARVELCOINsNWDc5F.transferFrom.call(address11YwOn, addressa9xxPks, uintYi0Paf, {from: accounts[5]});
		const boollNUwlgx = await MARVELCOINsNWDc5F.burn.call(uintDkd3Dsh, {from: accounts[1]});

		assert.equal(boold4CFGMx, true)
		await expect(MARVELCOINsNWDc5F.transferFrom.call(addresst57T25y, addresswxI3TuS, uintJq5nAq8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintuwZsl3j = BigInt("790")
		const stringgHK0KDp = "VvQCEoKmqTzgtzUWzmFm1vJhNnuHn7hHoii1BlTFrxTL2uc3BIJECWi1H68tZHxCzPO5HF6EiOEU9RYKuY1KAYUiyO8N"
		const stringfRPPVej = "c8PXVmDCQmLY8uanQSNTfem2GMuALVJm9JY8oXvLT5JFxg6BnO6O3eloxHE64hgla1tgkfne7gzJwXDIAV93DcbhIg2BwGLnJBu"
		const MARVELCOINq2tIF2n = await MARVELCOIN.new(uintuwZsl3j, stringgHK0KDp, stringfRPPVej, {from: "0x0000000000000000000000000000000000000001"});
		const uintRfVzkL1 = BigInt("628")
		const uintov3PN27 = BigInt("1135")
		const addressX7juUQ = accounts[2]
		const boolcujMC5z = await MARVELCOINq2tIF2n.burn.call(uintRfVzkL1, {from: accounts[1]});
		const boolithYcbs = await MARVELCOINq2tIF2n.burnFrom.call(addressX7juUQ, uintov3PN27, {from: accounts[4]});
	});
})