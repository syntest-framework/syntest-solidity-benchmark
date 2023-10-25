const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintDHl1Jfh = BigInt("766")
		const stringR60uapB = "FM7fwiShEl9mdAghHGmFxfHyUcxYa1uW9bqbjcDX4n4MDtk98W94v5h4UmW"
		const stringlNNOykg = "UfEM47go"
		const uintNX7yrl2 = BigInt("676")
		const ANRXTokengpE3FyJ = await ANRXToken.new(uintDHl1Jfh, stringR60uapB, stringlNNOykg, uintNX7yrl2, {from: accounts[4]});
		const uintvR15jLt = BigInt("1648")
		const addressA4IHIB9 = accounts[1]
		const addressOFuSG7r = accounts[4]
		const uintt4OsHe7 = BigInt("1324")
		const uintHCwCpvN = BigInt("116")
		const uintQr0TtM = BigInt("1643")
		const uintczPlBvy = BigInt("264")
		const uintO5bdxJ8 = await ANRXTokengpE3FyJ.issue.call(uintvR15jLt, {from: accounts[4]});
		const uintOhyuXNO = await ANRXTokengpE3FyJ.allowance.call(addressOFuSG7r, addressA4IHIB9, {from: accounts[2]});
//		const uintGXpNqdy = await ANRXTokengpE3FyJ.redeem.call(uintt4OsHe7, {from: accounts[3]});
//		const uintdkLLbB = await ANRXTokengpE3FyJ.redeem.call(uintHCwCpvN, {from: accounts[5]});
//		const uintWp6kwc = await ANRXTokengpE3FyJ.setParams.call(uintczPlBvy, uintQr0TtM, {from: accounts[4]});

		assert.equal(uintOhyuXNO, BigInt("0"))
		await expect(ANRXTokengpE3FyJ.redeem.call(uintt4OsHe7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintJTu7iX = BigInt("739")
		const stringlIQLAbd = "kc9APVO9fndGiToE9ZdOUN4TYTENaQzAH522hmdjV5FuMT7hyhR0yuVQKN8dXcawahN3DmCEeAL5CznoqxW7Dy1sKLFA4pt"
		const stringzKlmtrc = "cp5r"
		const uintr0ugcCZ = BigInt("1659")
		const ANRXTokenyOQFuca = await ANRXToken.new(uintJTu7iX, stringlIQLAbd, stringzKlmtrc, uintr0ugcCZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintacrZ8Ae = BigInt("1152")
		const addressIVlFSX3 = accounts[3]
		const uintnKJQBd6 = BigInt("1076")
		const addresstGSABg = accounts[1]
		const addressfsuQNbn = accounts[4]
		const bool5MvWR7 = await ANRXTokenyOQFuca.transfer.call(addressIVlFSX3, uintacrZ8Ae, {from: accounts[4]});
		const uintM8Uf7V8 = await ANRXTokenyOQFuca.redeem.call(uintnKJQBd6, {from: accounts[3]});
		const uintUlmrEqe = await ANRXTokenyOQFuca.totalSupply.call({from: accounts[0]});
		const uintcxPbji = await ANRXTokenyOQFuca.totalSupply.call({from: accounts[2]});
		const uintsCchEuG = await ANRXTokenyOQFuca.allowance.call(addressfsuQNbn, addresstGSABg, {from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uintpTAK12c = BigInt("567")
		const stringpYeUNWz = "1ZeP"
		const stringjKHUAK8 = "84o49FUq87lT2fA2TkdiU9UCTvKDKY"
		const uintRLBnNcK = BigInt("1476")
		const ANRXTokenpXxYkgR = await ANRXToken.new(uintpTAK12c, stringpYeUNWz, stringjKHUAK8, uintRLBnNcK, {from: accounts[4]});
		const addressO1wwjH = accounts[0]
		const addressbIqdVRe = accounts[0]
		const uintafs6vHX = BigInt("1623")
		const addresstGg1ct1 = accounts[5]
		const uintjbEjm3m = BigInt("1419")
		const uintqPSo129 = await ANRXTokenpXxYkgR.allowance.call(addressbIqdVRe, addressO1wwjH, {from: accounts[2]});
//		const booltnCoJwT = await ANRXTokenpXxYkgR.transfer.call(addresstGg1ct1, uintafs6vHX, {from: accounts[1]});
//		const uintj8SkETM = await ANRXTokenpXxYkgR.redeem.call(uintjbEjm3m, {from: accounts[3]});

		assert.equal(uintqPSo129, BigInt("0"))
		await expect(ANRXTokenpXxYkgR.transfer.call(addresstGg1ct1, uintafs6vHX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintDAS6qNt = BigInt("1153")
		const stringlGGIGzO = "f8Qx9W6QVyohxlsa7BLPULT5G9YEVotdAf8MQLw"
		const stringRisnzfx = "fl60XzBkKaQ8cCsD6x6Elfu2Svs81htYHdh7x5KEuIYusfwO5A56xSiQoRXwtswKQKcfJOx7gULXuhH6pIb7fsyKV"
		const uintXovxqSX = BigInt("1496")
		const ANRXTokenI7RVQaY = await ANRXToken.new(uintDAS6qNt, stringlGGIGzO, stringRisnzfx, uintXovxqSX, {from: accounts[0]});
		const addressu0hjDdo = accounts[4]
		const addressixmpoJr = accounts[3]
		const addressGuh05BY = accounts[3]
		const addresstPTgQy = "0x0000000000000000000000000000000000000001"
		const addressxfqArYO = accounts[1]
		const addressym3Ftob = accounts[1]
		const addresstdFnCRC = accounts[0]
		const uintIRQSPBv = await ANRXTokenI7RVQaY.allowance.call(addressixmpoJr, addressu0hjDdo, {from: accounts[5]});
		const uintvGyBh3c = await ANRXTokenI7RVQaY.balanceOf.call(addressGuh05BY, {from: accounts[0]});
//		const addressILv4vNj = await ANRXTokenI7RVQaY.deprecate.call(addresstPTgQy, {from: accounts[2]});
//		const addressUHedoJF = await ANRXTokenI7RVQaY.deprecate.call(addressxfqArYO, {from: accounts[1]});
//		const addressAwsw2jw = await ANRXTokenI7RVQaY.deprecate.call(addressym3Ftob, {from: accounts[2]});
//		const addressrWXdkPm = await ANRXTokenI7RVQaY.deprecate.call(addresstdFnCRC, {from: accounts[4]});

		assert.equal(uintIRQSPBv, BigInt("0"))
		assert.equal(uintvGyBh3c, BigInt("0"))
		await expect(ANRXTokenI7RVQaY.deprecate.call(addresstPTgQy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintEK7oJnp = BigInt("753")
		const stringeoKIYcP = "BqLNWtzYFyxPhwyHypO01RP0rq"
		const stringFUDnfMh = "evSlXiED21OFN9hDm7sYpNB6mHxOaJ"
		const uintpeze65o = BigInt("742")
		const ANRXTokena6zOVYQ = await ANRXToken.new(uintEK7oJnp, stringeoKIYcP, stringFUDnfMh, uintpeze65o, {from: accounts[2]});
		const uintiJP4y4J = BigInt("4")
		const addressNgMSvht = accounts[2]
		const addressJqORR6 = accounts[5]
		const uintqslFurc = BigInt("347")
		const addressJidSczx = accounts[6]
		const addressRg1xc9 = accounts[4]
//		const boolm1D3lM = await ANRXTokena6zOVYQ.transferFrom.call(addressJqORR6, addressNgMSvht, uintiJP4y4J, {from: accounts[1]});
//		const boolj2IVIoj = await ANRXTokena6zOVYQ.transferFrom.call(addressRg1xc9, addressJidSczx, uintqslFurc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXTokena6zOVYQ.transferFrom.call(addressJqORR6, addressNgMSvht, uintiJP4y4J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintShCWByn = BigInt("753")
		const stringeoKIYcP = "BqLNWtzYFyxPhwyHypO01RP0rq"
		const stringFUDnfMh = "evSlXiED21OFN9hDm7sYpNB6mHxOaJ"
		const uintIt0j02g = BigInt("742")
		const ANRXTokena6zOVYQ = await ANRXToken.new(uintShCWByn, stringeoKIYcP, stringFUDnfMh, uintIt0j02g, {from: accounts[2]});
		const uintBuaTSiX = BigInt("128")
		const addressIRgTDSz = accounts[2]
		const uintu3e2hde = BigInt("352")
		const uintRhbvKqQ = BigInt("463")
		const uintUBOFNcI = BigInt("35")
		const boolxVD1HpM = await ANRXTokena6zOVYQ.approve.call(addressIRgTDSz, uintBuaTSiX, {from: accounts[4]});
//		const uinttNJ0BQ4 = await ANRXTokena6zOVYQ.redeem.call(uintu3e2hde, {from: accounts[0]});
//		const uintSYaL85v = await ANRXTokena6zOVYQ.setParams.call(uintUBOFNcI, uintRhbvKqQ, {from: accounts[0]});

		assert.equal(boolxVD1HpM, true)
		await expect(ANRXTokena6zOVYQ.redeem.call(uintu3e2hde, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintpa5rook = BigInt("1536")
		const stringcwHphC = "U3LdDVWFiQjfn"
		const stringetWAMSj = "W7gLbEW51FJCIXst"
		const uintwa30ykB = BigInt("751")
		const ANRXTokenAe2GUWF = await ANRXToken.new(uintpa5rook, stringcwHphC, stringetWAMSj, uintwa30ykB, {from: accounts[4]});
		const uintVUET7Xb = BigInt("1045")
		const addressOGlBTHZ = accounts[2]
		const addressjbm59MJ = accounts[2]
		const uintO51LTfh = await ANRXTokenAe2GUWF.redeem.call(uintVUET7Xb, {from: accounts[4]});
		const uintoZUtylu = await ANRXTokenAe2GUWF.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressJ7OpiQ0 = await ANRXTokenAe2GUWF.deprecate.call(addressOGlBTHZ, {from: accounts[1]});
//		const addressQz217vZ = await ANRXTokenAe2GUWF.deprecate.call(addressjbm59MJ, {from: accounts[4]});

		assert.equal(uintoZUtylu, BigInt("1536"))
		await expect(ANRXTokenAe2GUWF.deprecate.call(addressOGlBTHZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintmMzRS7T = BigInt("567")
		const stringpYeUNWz = "1ZeP"
		const stringjKHUAK8 = "84o49FUq87lT2fA2TkdiU9UCTvKDKY"
		const uintLaN7vBD = BigInt("1476")
		const ANRXTokenpXxYkgR = await ANRXToken.new(uintmMzRS7T, stringpYeUNWz, stringjKHUAK8, uintLaN7vBD, {from: accounts[4]});
		const addressX8sHXB9 = accounts[0]
		const addressODagQYU = accounts[0]
		const uintii4Th9E = BigInt("273")
		const uintFlFzpQq = BigInt("458")
		const uintlXzUNMX = BigInt("932")
		const uintwwEh3eN = BigInt("1960")
		const uintjOKpHh7 = BigInt("2005")
		const uintaYJguZ6 = BigInt("1968")
		const addresszbyDbuq = accounts[5]
		const uintqPSo129 = await ANRXTokenpXxYkgR.allowance.call(addressODagQYU, addressX8sHXB9, {from: accounts[2]});
//		const uintDWtQM6A = await ANRXTokenpXxYkgR.setParams.call(uintFlFzpQq, uintii4Th9E, {from: accounts[4]});
//		const uintlGq1W3 = await ANRXTokenpXxYkgR.setParams.call(uintwwEh3eN, uintlXzUNMX, {from: accounts[3]});
//		const uintf6Dya9m = await ANRXTokenpXxYkgR.issue.call(uintjOKpHh7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQ9koBnm = await ANRXTokenpXxYkgR.approve.call(addresszbyDbuq, uintaYJguZ6, {from: accounts[0]});

		assert.equal(uintqPSo129, BigInt("0"))
		await expect(ANRXTokenpXxYkgR.setParams.call(uintFlFzpQq, uintii4Th9E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintfPDOZYX = BigInt("753")
		const stringeoKIYcP = "BqLNWtzYFyxPhwyHypO01RP0rq"
		const stringFUDnfMh = "evSlXiED21OFN9hDm7sYpNB6mHxOaJ"
		const uintCQQo17X = BigInt("742")
		const ANRXTokena6zOVYQ = await ANRXToken.new(uintfPDOZYX, stringeoKIYcP, stringFUDnfMh, uintCQQo17X, {from: accounts[2]});
		const addressychTwC1 = accounts[4]
		const uintgOtyv6Q = BigInt("128")
		const addresslFaLe07 = accounts[2]
		const uintPVMw0IH = BigInt("352")
		const addressfZTdofH = await ANRXTokena6zOVYQ.deprecate.call(addressychTwC1, {from: accounts[2]});
		const boolxVD1HpM = await ANRXTokena6zOVYQ.approve.call(addresslFaLe07, uintgOtyv6Q, {from: accounts[4]});
//		const uinttNJ0BQ4 = await ANRXTokena6zOVYQ.redeem.call(uintPVMw0IH, {from: accounts[0]});

		assert.equal(boolxVD1HpM, true)
		await expect(ANRXTokena6zOVYQ.redeem.call(uintPVMw0IH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})