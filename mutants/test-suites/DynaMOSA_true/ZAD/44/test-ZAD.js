const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADFMXlOb = await ZAD.new({from: accounts[1]});
		const uintLivemlZ = BigInt("428")
		const addressKQcyvnR = accounts[3]
		const uintjYT1dZ = BigInt("1699")
		const uintxaD9v52 = BigInt("469")
		const address6NVuGu = accounts[4]
		const addresspyQFCq1 = accounts[2]
		const addressvXkP6ou = accounts[2]
//		const boolOeLlnVc = await ZADFMXlOb.transfer.call(addressKQcyvnR, uintLivemlZ, {from: accounts[2]});
//		const uint2562dEAoK = await ZADFMXlOb._burn.call(uintjYT1dZ, {from: accounts[1]});
//		const uint8cg3QBlI = await ZADFMXlOb.decimals.call({from: accounts[4]});
//		const boolE0iVuu2 = await ZADFMXlOb.transfer.call(address6NVuGu, uintxaD9v52, {from: accounts[4]});
//		const uint256ykCiTp8 = await ZADFMXlOb.allowance.call(addressvXkP6ou, addresspyQFCq1, {from: accounts[0]});
//		const uint8DHG8zy4 = await ZADFMXlOb.decimals.call({from: accounts[4]});

		await expect(ZADFMXlOb.transfer.call(addressKQcyvnR, uintLivemlZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADp4jmZqt = await ZAD.new({from: accounts[0]});
		const uint8BP2NBsu = await ZADp4jmZqt.decimals.call({from: accounts[0]});
		const uint8VLDPjOg = await ZADp4jmZqt.decimals.call({from: accounts[0]});
		const stringgJJlOr = await ZADp4jmZqt.name.call({from: accounts[2]});

		assert.equal(stringgJJlOr, "Zadkiel")
		assert.equal(uint8BP2NBsu, BigInt("18"))
		assert.equal(uint8VLDPjOg, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADKiG4lTi = await ZAD.new({from: accounts[3]});
		const uintpciRO7s = BigInt("581")
		const addressVinUyfH = accounts[0]
		const stringefJTYfP = await ZADKiG4lTi.name.call({from: accounts[0]});
		const uint8E5qiuet = await ZADKiG4lTi.decimals.call({from: accounts[3]});
//		const boolCinrWeq = await ZADKiG4lTi.decreaseAllowance.call(addressVinUyfH, uintpciRO7s, {from: accounts[4]});

		assert.equal(stringefJTYfP, "Zadkiel")
		assert.equal(uint8E5qiuet, BigInt("18"))
		await expect(ZADKiG4lTi.decreaseAllowance.call(addressVinUyfH, uintpciRO7s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADHAKVZv9 = await ZAD.new({from: accounts[2]});
		const uint1Afxl7 = BigInt("542")
		const uintL9y0W1k = BigInt("1696")
		const addressJJQrfxW = accounts[2]
//		const uint256lg1rJFZ = await ZADHAKVZv9._burn.call(uint1Afxl7, {from: "0x0000000000000000000000000000000000000001"});
//		const stringOs5L2cC = await ZADHAKVZv9.symbol.call({from: accounts[3]});
//		const uint256xTtc22f = await ZADHAKVZv9.totalSupply.call({from: accounts[1]});
//		const boolFYSh0Ho = await ZADHAKVZv9.increaseAllowance.call(addressJJQrfxW, uintL9y0W1k, {from: accounts[4]});

		await expect(ZADHAKVZv9._burn.call(uint1Afxl7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVNQ8S2E = await ZAD.new({from: accounts[1]});
		const uintkIr0u4 = BigInt("741")
		const addressEBheCl = accounts[3]
		const booldFRxYop = await ZADVNQ8S2E.approve.call(addressEBheCl, uintkIr0u4, {from: accounts[4]});
		const uint8Os4vN0o = await ZADVNQ8S2E.decimals.call({from: accounts[5]});
		const uint8Uxlr30Z = await ZADVNQ8S2E.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldFRxYop, true)
		assert.equal(uint8Os4vN0o, BigInt("18"))
		assert.equal(uint8Uxlr30Z, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADRVx5Lrv = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uinta6KTxpD = BigInt("545")
		const addresscKCaEbH = accounts[3]
		const boolzqNtwue = await ZADRVx5Lrv.decreaseAllowance.call(addresscKCaEbH, uinta6KTxpD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256o0tphg3 = await ZADRVx5Lrv.totalSupply.call({from: accounts[5]});
	});

	it('test for ZAD', async () => {
		const ZADGPShEhk = await ZAD.new({from: accounts[4]});
		const addressrs3tAAS = accounts[1]
		const uintEfsyzbf = BigInt("809")
		const addresscre8jlP = accounts[1]
		const uintrgzkukn = BigInt("641")
		const addressX190vLr = accounts[1]
		const uint256f8VNVuJ = await ZADGPShEhk.balanceOf.call(addressrs3tAAS, {from: accounts[1]});
//		const boolF8u1flI = await ZADGPShEhk.transfer.call(addresscre8jlP, uintEfsyzbf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint89OYXfA = await ZADGPShEhk.decimals.call({from: accounts[3]});
//		const boolI9jiCZW = await ZADGPShEhk.increaseAllowance.call(addressX190vLr, uintrgzkukn, {from: accounts[1]});

		assert.equal(uint256f8VNVuJ, BigInt("0"))
		await expect(ZADGPShEhk.transfer.call(addresscre8jlP, uintEfsyzbf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZAD2g1gQc = await ZAD.new({from: accounts[5]});
		const uintPwveprh = BigInt("1937")
		const addressepB6DBP = "0x0000000000000000000000000000000000000001"
		const uintFHWcUse = BigInt("231")
		const addresskAlBsjw = accounts[5]
		const uintOAZu2w = BigInt("1085")
		const addressOUpMVAO = accounts[0]
		const boolFN5XvJE = await ZAD2g1gQc.increaseAllowance.call(addressepB6DBP, uintPwveprh, {from: accounts[3]});
//		const boolnkrYiJm = await ZAD2g1gQc.decreaseAllowance.call(addresskAlBsjw, uintFHWcUse, {from: accounts[4]});
//		const boolDeHxXy4 = await ZAD2g1gQc.approve.call(addressOUpMVAO, uintOAZu2w, {from: accounts[1]});

		assert.equal(boolFN5XvJE, true)
		await expect(ZAD2g1gQc.decreaseAllowance.call(addresskAlBsjw, uintFHWcUse, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZAD5YpRIp = await ZAD.new({from: accounts[2]});
		const uintGLpn83E = BigInt("155")
		const addressr1pbZzF = accounts[3]
		const addressw0AW7z9 = accounts[0]
//		const boolWYy6syu = await ZAD5YpRIp.transferFrom.call(addressw0AW7z9, addressr1pbZzF, uintGLpn83E, {from: accounts[1]});
//		const uint8rnR6icD = await ZAD5YpRIp.decimals.call({from: accounts[3]});
//		const stringN5E24N7 = await ZAD5YpRIp.symbol.call({from: accounts[2]});

		await expect(ZAD5YpRIp.transferFrom.call(addressw0AW7z9, addressr1pbZzF, uintGLpn83E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADKiG4lTi = await ZAD.new({from: accounts[3]});
		const uintHbhNCcI = BigInt("581")
		const addressbXJ6Na3 = accounts[0]
		const stringefJTYfP = await ZADKiG4lTi.name.call({from: accounts[0]});
		const stringsi7UtOF = await ZADKiG4lTi.symbol.call({from: accounts[3]});
		const uint8E5qiuet = await ZADKiG4lTi.decimals.call({from: accounts[3]});
//		const boolCinrWeq = await ZADKiG4lTi.decreaseAllowance.call(addressbXJ6Na3, uintHbhNCcI, {from: accounts[4]});

		assert.equal(stringefJTYfP, "Zadkiel")
		assert.equal(stringsi7UtOF, "ZAD")
		assert.equal(uint8E5qiuet, BigInt("18"))
		await expect(ZADKiG4lTi.decreaseAllowance.call(addressbXJ6Na3, uintHbhNCcI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZAD2g1gQc = await ZAD.new({from: accounts[5]});
		const uintAdAs6Ep = BigInt("2002")
		const addressUIWvu8F = accounts[0]
		const uintfxEqvUJ = BigInt("1937")
		const addressstff2CU = "0x0000000000000000000000000000000000000000"
		const uintbuzDTPj = BigInt("964")
		const address9FG1KN = accounts[2]
		const addressx1so04 = accounts[3]
		const uintCB6QjpK = BigInt("231")
		const addressUkgFgAX = accounts[5]
		const boolh9v4idF = await ZAD2g1gQc.increaseAllowance.call(addressUIWvu8F, uintAdAs6Ep, {from: accounts[3]});
//		const boolFN5XvJE = await ZAD2g1gQc.increaseAllowance.call(addressstff2CU, uintfxEqvUJ, {from: accounts[3]});
//		const boolqbn7bFu = await ZAD2g1gQc.transferFrom.call(addressx1so04, address9FG1KN, uintbuzDTPj, {from: accounts[4]});
//		const boolnkrYiJm = await ZAD2g1gQc.decreaseAllowance.call(addressUkgFgAX, uintCB6QjpK, {from: accounts[4]});

		assert.equal(boolh9v4idF, true)
		await expect(ZAD2g1gQc.increaseAllowance.call(addressstff2CU, uintfxEqvUJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADu9dm8m0 = await ZAD.new({from: accounts[3]});
		const addresseuShkXU = accounts[2]
		const addressJUDR6Ke = accounts[1]
		const addressAcbi7NB = accounts[1]
		const addressWj1CEy5 = accounts[3]
		const address54gn6q = "0x0000000000000000000000000000000000000001"
		const addressRRxu4MQ = accounts[2]
		const uint256U3L2Un = await ZADu9dm8m0.allowance.call(addressJUDR6Ke, addresseuShkXU, {from: "0x0000000000000000000000000000000000000001"});
		const stringfxK0Wx6 = await ZADu9dm8m0.symbol.call({from: accounts[5]});
		const uint256mSIza83 = await ZADu9dm8m0.allowance.call(addressWj1CEy5, addressAcbi7NB, {from: accounts[2]});
		const uint256W52RQlf = await ZADu9dm8m0.allowance.call(addressRRxu4MQ, address54gn6q, {from: accounts[2]});

		assert.equal(stringfxK0Wx6, "ZAD")
		assert.equal(uint256U3L2Un, BigInt("0"))
		assert.equal(uint256W52RQlf, BigInt("0"))
		assert.equal(uint256mSIza83, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADONrEKd = await ZAD.new({from: accounts[3]});
		const uintZtJUUeB = BigInt("1064")
		const addressOuSPRA6 = accounts[0]
		const addresswggxadz = accounts[1]
		const addressh62Q4yN = accounts[0]
		const uint256tMgPFaw = await ZADONrEKd.totalSupply.call({from: accounts[3]});
		const uint8IoRP51d = await ZADONrEKd.decimals.call({from: accounts[2]});
		const boolg05vkYp = await ZADONrEKd.approve.call(addressOuSPRA6, uintZtJUUeB, {from: accounts[4]});
		const stringP1yu1F5 = await ZADONrEKd.symbol.call({from: accounts[5]});
		const uint256aT4vyI = await ZADONrEKd.allowance.call(addressh62Q4yN, addresswggxadz, {from: accounts[0]});

		assert.equal(boolg05vkYp, true)
		assert.equal(stringP1yu1F5, "ZAD")
		assert.equal(uint256aT4vyI, BigInt("0"))
		assert.equal(uint256tMgPFaw, BigInt("100000000000000000000000000"))
		assert.equal(uint8IoRP51d, BigInt("18"))
	});
})