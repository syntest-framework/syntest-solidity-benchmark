const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const addressHk9SPD = accounts[5]
		const uint256ZR3taxL = await AntiBaseProtocolSxzLOJ.balanceOf.call(addressHk9SPD, {from: accounts[2]});
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		assert.equal(uint256ZR3taxL, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolc0Mm0SQ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintNikryXU = BigInt("694")
		const addressJKCL0O9 = accounts[2]
		const uintjwmUQvY = BigInt("239")
		const addressStcNMX = accounts[2]
		const uintFktkemD = BigInt("287")
		const addresskxhvVuQ = accounts[4]
		const uintVDVnV7 = BigInt("1537")
		const uintRimVfLt = BigInt("1294")
		const boolQocb0bA = await AntiBaseProtocolc0Mm0SQ.transfer.call(addressJKCL0O9, uintNikryXU, {from: accounts[1]});
		const addressEOaWFAM = await AntiBaseProtocolc0Mm0SQ.burnFrom.call(addressStcNMX, uintjwmUQvY, {from: accounts[4]});
		const boolRxSUbJ = await AntiBaseProtocolc0Mm0SQ.decreaseAllowance.call(addresskxhvVuQ, uintFktkemD, {from: accounts[3]});
		const uint256Qz8D8au = await AntiBaseProtocolc0Mm0SQ.findBurnFee.call(uintVDVnV7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256i8Tvrl = await AntiBaseProtocolc0Mm0SQ.burn.call(uintRimVfLt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQocb0bA, true)
		await expect(AntiBaseProtocolc0Mm0SQ.burnFrom.call(addressStcNMX, uintjwmUQvY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNyOn9Pp = await AntiBaseProtocol.new({from: accounts[5]});
		const uintFGq0f2 = BigInt("426")
		const addressGGNOwXv = accounts[2]
		const uintmxjLs7q = BigInt("836")
		const addresslB3yxsN = "0x0000000000000000000000000000000000000001"
		const addresshGtILt = accounts[2]
		const addressJUQt9a2 = accounts[3]
		const addressjpu1PKk = accounts[1]
		const addressUtZXLV8 = accounts[2]
		const addressfCG1mPA = accounts[1]
		const boolcpgbHjX = await AntiBaseProtocolNyOn9Pp.transfer.call(addressGGNOwXv, uintFGq0f2, {from: accounts[2]});
		const addresshlkCeqg = await AntiBaseProtocolNyOn9Pp._burnFrom.call(addresslB3yxsN, uintmxjLs7q, {from: accounts[4]});
		const uint256QPtZaqf = await AntiBaseProtocolNyOn9Pp.allowance.call(addressJUQt9a2, addresshGtILt, {from: accounts[1]});
		const uint256MX0HOXE = await AntiBaseProtocolNyOn9Pp.allowance.call(addressUtZXLV8, addressjpu1PKk, {from: accounts[4]});
		const addressjgUXUK = await AntiBaseProtocolNyOn9Pp.transferOwnership.call(addressfCG1mPA, {from: accounts[5]});

		await expect(AntiBaseProtocolNyOn9Pp.transfer.call(addressGGNOwXv, uintFGq0f2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const addressgG0eIos = accounts[2]
		const uintUV1Vbty = BigInt("476")
		const uint256mVFMi0d = await AntiBaseProtocolme769uj.balanceOf.call(addressgG0eIos, {from: accounts[0]});
		const addressV0gT7B = await AntiBaseProtocolme769uj.owner.call({from: accounts[1]});
		const boolk9wLfx = await AntiBaseProtocolme769uj.isOwner.call({from: accounts[2]});
		const uint256W1zE4WX = await AntiBaseProtocolme769uj.findRewardFee.call(uintUV1Vbty, {from: accounts[1]});

		assert.equal(addressV0gT7B, 0x0995f8030dFaf248c4337b59394d39a0c5C01956)
		assert.equal(boolk9wLfx, false)
		assert.equal(uint256W1zE4WX, BigInt("25"))
		assert.equal(uint256mVFMi0d, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const stringDJFwegT = "mCtpZDRBsntNPYYDogJ87VrQROB2U2"
		const stringIjMBx1W = "15FuTvy0Rpt3QEsexdcqio00S6o4BaN2O918qSkUcRda8fsHBRX6rNJCsgs0jTJTpZdsU3skUzDqfcqtZy"
		const uintm00HI3b = BigInt("190")
		const AntiBaseProtocolN3KD7qK = await AntiBaseProtocol.new(stringDJFwegT, stringIjMBx1W, uintm00HI3b, {from: accounts[1]});
		const uintcUhU0GY = BigInt("1148")
		const addresssWwAwvS = accounts[0]
		const uint256VFEPYMk = await AntiBaseProtocolN3KD7qK.totalSupply.call({from: accounts[0]});
		const boolAO5Kghe = await AntiBaseProtocolN3KD7qK.decreaseAllowance.call(addresssWwAwvS, uintcUhU0GY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolwtpC7EU = await AntiBaseProtocol.new({from: accounts[0]});
		const uintXYvIutE = BigInt("1575")
		const addressHzcJhDn = accounts[1]
		const uintb3zoA71 = BigInt("669")
		const addressIt8L7Jz = accounts[3]
		const uintyxEr4af = BigInt("1190")
		const addressJPZEueP = accounts[0]
		const addressFnID4Oo = accounts[4]
		const addressCsvSZ7o = accounts[2]
		const addressGWbBJv = accounts[2]
		const address3yo1VS = await AntiBaseProtocolwtpC7EU._burn.call(addressHzcJhDn, uintXYvIutE, {from: "0x0000000000000000000000000000000000000001"});
		const boolw2CNmlM = await AntiBaseProtocolwtpC7EU.approve.call(addressIt8L7Jz, uintb3zoA71, {from: accounts[1]});
		const addressMl0jer7 = await AntiBaseProtocolwtpC7EU._approve.call(addressFnID4Oo, addressJPZEueP, uintyxEr4af, {from: accounts[5]});
		const uint256SBQDaUJ = await AntiBaseProtocolwtpC7EU.allowance.call(addressGWbBJv, addressCsvSZ7o, {from: accounts[4]});

		await expect(AntiBaseProtocolwtpC7EU._burn.call(addressHzcJhDn, uintXYvIutE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const addressDXs87PQ = accounts[0]
		const addressMw8BB1t = accounts[6]
		const uintCieuo68 = BigInt("589")
		const addressEFGuOAE = await AntiBaseProtocolSxzLOJ.transferOwnership.call(addressDXs87PQ, {from: accounts[4]});
		const uint256ZR3taxL = await AntiBaseProtocolSxzLOJ.balanceOf.call(addressMw8BB1t, {from: accounts[2]});
		const uint256tfc8hzD = await AntiBaseProtocolSxzLOJ.findRewardFee.call(uintCieuo68, {from: accounts[3]});
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});

		await expect(AntiBaseProtocolSxzLOJ.transferOwnership.call(addressDXs87PQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const uintVSNK5v6 = BigInt("1821")
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const uint256lXsoQP9 = await AntiBaseProtocolSxzLOJ.totalSupply.call({from: accounts[4]});
		const uint256ZYi4kU9 = await AntiBaseProtocolSxzLOJ.burn.call(uintVSNK5v6, {from: accounts[4]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		assert.equal(uint256lXsoQP9, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolSxzLOJ.burn.call(uintVSNK5v6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const uintmSWTq3 = BigInt("420")
		const addressgj755BU = accounts[0]
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const booliUDGLCR = await AntiBaseProtocolSxzLOJ.increaseAllowance.call(addressgj755BU, uintmSWTq3, {from: accounts[0]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		assert.equal(booliUDGLCR, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolrj72dXE = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqPPt0E8 = BigInt("1730")
		const addressOAy4DWv = accounts[0]
		const addressyKPmj66 = accounts[0]
		const addressTBZmcM = await AntiBaseProtocolrj72dXE.burnFrom.call(addressOAy4DWv, uintqPPt0E8, {from: accounts[4]});
		const addressQuWaLBU = await AntiBaseProtocolrj72dXE.owner.call({from: accounts[0]});
		const addressPC09kZ0 = await AntiBaseProtocolrj72dXE._transferOwnership.call(addressyKPmj66, {from: accounts[3]});
		await AntiBaseProtocolrj72dXE.renounceOwnership.call({from: accounts[4]});
		const stringdG1Bz9Y = await AntiBaseProtocolrj72dXE.name.call({from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const uintHWNyZLx = BigInt("231")
		const addressMB4PuQ1 = "0x0000000000000000000000000000000000000001"
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const boolS3zv2Xk = await AntiBaseProtocolSxzLOJ.decreaseAllowance.call(addressMB4PuQ1, uintHWNyZLx, {from: accounts[1]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		await expect(AntiBaseProtocolSxzLOJ.decreaseAllowance.call(addressMB4PuQ1, uintHWNyZLx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const uintGsIw92O = BigInt("499")
		const addressVbS23O8 = accounts[5]
		const addressuj9YQuH = accounts[2]
		const addressdta282M = accounts[2]
		const uintHtuEH7Y = BigInt("572")
		const addresstu9JpUD = accounts[2]
		const uintYxT41r3 = BigInt("476")
		const boolaw0M6s7 = await AntiBaseProtocolme769uj.approve.call(addressVbS23O8, uintGsIw92O, {from: accounts[4]});
		const uint256TtdRJc8 = await AntiBaseProtocolme769uj.balanceOf.call(addressuj9YQuH, {from: accounts[1]});
		const uint256mVFMi0d = await AntiBaseProtocolme769uj.balanceOf.call(addressdta282M, {from: accounts[0]});
		const boolZz7Ym4r = await AntiBaseProtocolme769uj.increaseAllowance.call(addresstu9JpUD, uintHtuEH7Y, {from: accounts[3]});
		const boolk9wLfx = await AntiBaseProtocolme769uj.isOwner.call({from: accounts[2]});
		const uint256W1zE4WX = await AntiBaseProtocolme769uj.findRewardFee.call(uintYxT41r3, {from: accounts[1]});

		assert.equal(boolZz7Ym4r, true)
		assert.equal(boolaw0M6s7, true)
		assert.equal(boolk9wLfx, false)
		assert.equal(uint256TtdRJc8, BigInt("0"))
		assert.equal(uint256W1zE4WX, BigInt("25"))
		assert.equal(uint256mVFMi0d, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const uintdPnC7c0 = BigInt("499")
		const addressIccMa6u = accounts[5]
		const uintjFSObQ = BigInt("766")
		const addressrtI1jNr = accounts[4]
		const addressTnJ7y94 = accounts[3]
		const addressyzPufuI = accounts[2]
		const uint0hejK7 = BigInt("572")
		const addressHT2wtnr = accounts[2]
		const uintcVlpbS9 = BigInt("476")
		const boolaw0M6s7 = await AntiBaseProtocolme769uj.approve.call(addressIccMa6u, uintdPnC7c0, {from: accounts[4]});
		const boolpDUde0 = await AntiBaseProtocolme769uj.approve.call(addressrtI1jNr, uintjFSObQ, {from: accounts[2]});
		const uint256TtdRJc8 = await AntiBaseProtocolme769uj.balanceOf.call(addressTnJ7y94, {from: accounts[1]});
		const stringYX9dTaP = await AntiBaseProtocolme769uj.symbol.call({from: accounts[4]});
		const uint256mVFMi0d = await AntiBaseProtocolme769uj.balanceOf.call(addressyzPufuI, {from: accounts[0]});
		const boolZz7Ym4r = await AntiBaseProtocolme769uj.increaseAllowance.call(addressHT2wtnr, uint0hejK7, {from: accounts[3]});
		const boolk9wLfx = await AntiBaseProtocolme769uj.isOwner.call({from: accounts[2]});
		const uint256W1zE4WX = await AntiBaseProtocolme769uj.findRewardFee.call(uintcVlpbS9, {from: accounts[1]});

		assert.equal(boolZz7Ym4r, true)
		assert.equal(boolaw0M6s7, true)
		assert.equal(boolk9wLfx, false)
		assert.equal(boolpDUde0, true)
		assert.equal(stringYX9dTaP, "ABASE")
		assert.equal(uint256TtdRJc8, BigInt("0"))
		assert.equal(uint256W1zE4WX, BigInt("25"))
		assert.equal(uint256mVFMi0d, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const addressXfFYsbE = accounts[2]
		const uintCdTGSW = BigInt("476")
		const uint256mVFMi0d = await AntiBaseProtocolme769uj.balanceOf.call(addressXfFYsbE, {from: accounts[0]});
		const boolk9wLfx = await AntiBaseProtocolme769uj.isOwner.call({from: accounts[2]});
		await AntiBaseProtocolme769uj.renounceOwnership.call({from: accounts[1]});
		const uint256W1zE4WX = await AntiBaseProtocolme769uj.findRewardFee.call(uintCdTGSW, {from: accounts[1]});

		assert.equal(boolk9wLfx, false)
		assert.equal(uint256mVFMi0d, BigInt("0"))
		await expect(AntiBaseProtocolme769uj.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const uintnN4nQIC = BigInt("990")
		const address6ze1sv = accounts[0]
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const addressTpM5Pht = await AntiBaseProtocolSxzLOJ.burnFrom.call(address6ze1sv, uintnN4nQIC, {from: accounts[2]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		await expect(AntiBaseProtocolSxzLOJ.burnFrom.call(address6ze1sv, uintnN4nQIC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const addressCsSDoT = accounts[2]
		const uintHjYo48P = BigInt("179")
		const addressaaeLR0S = accounts[3]
		const addressDI7SqTP = accounts[4]
		const uintdEZLMz = BigInt("476")
		const uint256mVFMi0d = await AntiBaseProtocolme769uj.balanceOf.call(addressCsSDoT, {from: accounts[0]});
		const boolk9wLfx = await AntiBaseProtocolme769uj.isOwner.call({from: accounts[2]});
		const boolsPAk6gr = await AntiBaseProtocolme769uj.transferFrom.call(addressDI7SqTP, addressaaeLR0S, uintHjYo48P, {from: accounts[3]});
		const stringZP8Cnu9 = await AntiBaseProtocolme769uj.symbol.call({from: accounts[0]});
		const uint256W1zE4WX = await AntiBaseProtocolme769uj.findRewardFee.call(uintdEZLMz, {from: accounts[1]});
		const addressTjVZkBY = await AntiBaseProtocolme769uj.owner.call({from: accounts[4]});

		assert.equal(boolk9wLfx, false)
		assert.equal(uint256mVFMi0d, BigInt("0"))
		await expect(AntiBaseProtocolme769uj.transferFrom.call(addressDI7SqTP, addressaaeLR0S, uintHjYo48P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const addressx2b1DLm = accounts[0]
		const addressrpoQ3xc = accounts[3]
		const uintceTpTVl = BigInt("646")
		const addressTh0mJrz = accounts[3]
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const stringdffOkAU = await AntiBaseProtocolSxzLOJ.symbol.call({from: accounts[0]});
		const uint256rksKON4 = await AntiBaseProtocolSxzLOJ.allowance.call(addressrpoQ3xc, addressx2b1DLm, {from: accounts[1]});
		const boolxGb7OPN = await AntiBaseProtocolSxzLOJ.transfer.call(addressTh0mJrz, uintceTpTVl, {from: accounts[5]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		assert.equal(stringdffOkAU, "ABASE")
		assert.equal(uint256rksKON4, BigInt("0"))
		await expect(AntiBaseProtocolSxzLOJ.transfer.call(addressTh0mJrz, uintceTpTVl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const addressgIq3EE = accounts[0]
		const addresslYJibxF = await AntiBaseProtocolSxzLOJ.transferOwnership.call(addressgIq3EE, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const addressi0nmwdy = accounts[2]
		const uintWoRKDGE = BigInt("488")
		const uint256mVFMi0d = await AntiBaseProtocolme769uj.balanceOf.call(addressi0nmwdy, {from: accounts[0]});
		const uint8OGTCHQ3 = await AntiBaseProtocolme769uj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolk9wLfx = await AntiBaseProtocolme769uj.isOwner.call({from: accounts[2]});
		const uint256W1zE4WX = await AntiBaseProtocolme769uj.findRewardFee.call(uintWoRKDGE, {from: accounts[1]});

		assert.equal(boolk9wLfx, false)
		assert.equal(uint256W1zE4WX, BigInt("25"))
		assert.equal(uint256mVFMi0d, BigInt("0"))
		assert.equal(uint8OGTCHQ3, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const stringrOyFdcQ = await AntiBaseProtocolSxzLOJ.name.call({from: accounts[3]});
		const uint8FJ2iUpF = await AntiBaseProtocolSxzLOJ.decimals.call({from: accounts[4]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		assert.equal(stringrOyFdcQ, "https://t.me/antibaseprotocol")
		assert.equal(uint8FJ2iUpF, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxzLOJ = await AntiBaseProtocol.new({from: accounts[0]});
		const uintCL6P3AX = BigInt("1924")
		const addressnsTTRz1 = accounts[0]
		const addressp126g0X = accounts[0]
		const uintNSAiwg = BigInt("1792")
		const addressPNaubsm = accounts[0]
		const addressHPIftaa = accounts[1]
		const addressdlrtkY8 = await AntiBaseProtocolSxzLOJ.owner.call({from: accounts[1]});
		const boolciFnqoq = await AntiBaseProtocolSxzLOJ.transferFrom.call(addressp126g0X, addressnsTTRz1, uintCL6P3AX, {from: accounts[1]});
		const addresslKdXwBz = await AntiBaseProtocolSxzLOJ._approve.call(addressHPIftaa, addressPNaubsm, uintNSAiwg, {from: accounts[0]});

		assert.equal(addressdlrtkY8, 0xEa78bd37D635Be51f635B821F741F56eF2737e5C)
		await expect(AntiBaseProtocolSxzLOJ.transferFrom.call(addressp126g0X, addressnsTTRz1, uintCL6P3AX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolme769uj = await AntiBaseProtocol.new({from: accounts[1]});
		const uintBJt7gml = BigInt("1743")
		const addressaXzSLOp = "0x00000000000000000000000000000000000000-1"
		const uinthlvZt2S = BigInt("1689")
		const addresshyig3WI = accounts[1]
		const uintqgcGxHM = BigInt("1270")
		const addressrRg6pAz = accounts[0]
		const boolMEgmgVS = await AntiBaseProtocolme769uj.transfer.call(addressaXzSLOp, uintBJt7gml, {from: accounts[3]});
		const addressCZcrrAu = await AntiBaseProtocolme769uj._burn.call(addresshyig3WI, uinthlvZt2S, {from: accounts[5]});
		const stringU6wbkK = await AntiBaseProtocolme769uj.symbol.call({from: accounts[2]});
		const uint256M252Re2 = await AntiBaseProtocolme769uj.burn.call(uintqgcGxHM, {from: accounts[0]});
		const uint256wmRfXsV = await AntiBaseProtocolme769uj.balanceOf.call(addressrRg6pAz, {from: accounts[1]});
		await AntiBaseProtocolme769uj.requestGas.call({from: accounts[2]});

		await expect(AntiBaseProtocolme769uj.transfer.call(addressaXzSLOp, uintBJt7gml, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})