const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenqmD5O6D = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressYmaJvyl = accounts[1]
		const uintHuTZf2 = BigInt("1995")
		const addressHIEToGB = "0x0000000000000000000000000000000000000001"
		const addressgAue7qh = accounts[4]
//		const addressscyqKa7 = await CryptoSecureBankTokenqmD5O6D.transferOwnership.call(addressYmaJvyl, {from: accounts[3]});
//		const boolkpnQyF3 = await CryptoSecureBankTokenqmD5O6D.transfer.call(addressHIEToGB, uintHuTZf2, {from: accounts[4]});
//		const uintQb9mv1K = await CryptoSecureBankTokenqmD5O6D.balanceOf.call(addressgAue7qh, {from: accounts[0]});
//		const addressedSb9dJ = await CryptoSecureBankTokenqmD5O6D.getOwner.call({from: accounts[0]});

		await expect(CryptoSecureBankTokenqmD5O6D.transferOwnership.call(addressYmaJvyl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken7kLQfv = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressq52u9b0 = accounts[4]
		const addresscFvg0t9 = "0x0000000000000000000000000000000000000001"
		const addressp4UcTqz = accounts[2]
		const addressB9z3ssS = accounts[0]
		const addressugXD4Rm = await CryptoSecureBankToken7kLQfv.getOwner.call({from: accounts[2]});
//		await CryptoSecureBankToken7kLQfv.onlyOwner.call({from: accounts[1]});
//		const uintaV9FzLm = await CryptoSecureBankToken7kLQfv.allowance.call(addresscFvg0t9, addressq52u9b0, {from: accounts[3]});
//		const addressbpIuwP4 = await CryptoSecureBankToken7kLQfv.destroyBlackFunds.call(addressp4UcTqz, {from: accounts[0]});
//		const uintwFLBTot = await CryptoSecureBankToken7kLQfv.balanceOf.call(addressB9z3ssS, {from: accounts[0]});

		assert.equal(addressugXD4Rm, 0xBa5484606099A9cC3cC22f1978bC6Bf67c17D33f)
		await expect(CryptoSecureBankToken7kLQfv.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVfi3aPF = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintLpxM5iR = BigInt("843")
		const addressEbrJ70e = accounts[2]
		const uintHlbt9Kr = BigInt("1483")
		const addressu73KTLT = accounts[5]
		const addressELas5P = accounts[1]
		const addressFiydgI = await CryptoSecureBankTokenVfi3aPF.getOwner.call({from: accounts[1]});
		const boolojhH5u = await CryptoSecureBankTokenVfi3aPF.approve.call(addressEbrJ70e, uintLpxM5iR, {from: accounts[3]});
		const boolrQ45YfR = await CryptoSecureBankTokenVfi3aPF.approve.call(addressu73KTLT, uintHlbt9Kr, {from: accounts[0]});
//		const addressM6x3LYn = await CryptoSecureBankTokenVfi3aPF.destroyBlackFunds.call(addressELas5P, {from: accounts[4]});
//		await CryptoSecureBankTokenVfi3aPF.onlyOwner.call({from: accounts[5]});

		assert.equal(addressFiydgI, 0xBa5484606099A9cC3cC22f1978bC6Bf67c17D33f)
		assert.equal(boolojhH5u, true)
		assert.equal(boolrQ45YfR, true)
		await expect(CryptoSecureBankTokenVfi3aPF.destroyBlackFunds.call(addressELas5P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGDFEjF = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressOcSuU92 = accounts[5]
		const addressvnmqNzj = accounts[3]
		const addressZJYF75E = accounts[4]
		const addressNTcC45O = accounts[4]
		const uintPtVTTLj = await CryptoSecureBankTokenGDFEjF.allowance.call(addressvnmqNzj, addressOcSuU92, {from: accounts[5]});
//		const addressYpKiCA = await CryptoSecureBankTokenGDFEjF.destroyBlackFunds.call(addressZJYF75E, {from: accounts[2]});
//		const boolsLlbfLM = await CryptoSecureBankTokenGDFEjF.deprecate.call(addressNTcC45O, {from: accounts[4]});

		assert.equal(uintPtVTTLj, BigInt("0"))
		await expect(CryptoSecureBankTokenGDFEjF.destroyBlackFunds.call(addressZJYF75E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenY3WP9ey = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintwualqfV = BigInt("187")
		const addresskJvpnC = accounts[3]
		const uintehoBPSG = await CryptoSecureBankTokenY3WP9ey.totalSupply.call({from: accounts[2]});
		const boolYcMxIiA = await CryptoSecureBankTokenY3WP9ey.redeem.call(uintwualqfV, {from: accounts[1]});
		const bool6W9GnU = await CryptoSecureBankTokenY3WP9ey.getBlackListStatus.call(addresskJvpnC, {from: accounts[1]});
//		await CryptoSecureBankTokenY3WP9ey.whenPaused.call({from: accounts[5]});
//		await CryptoSecureBankTokenY3WP9ey.whenPaused.call({from: accounts[3]});

		assert.equal(bool6W9GnU, false)
		assert.equal(boolYcMxIiA, true)
		assert.equal(uintehoBPSG, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenY3WP9ey.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPcggvm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressJHODAvI = accounts[4]
		const addressktGCJ5M = accounts[1]
		const addresscptasuJ = accounts[2]
		const uintCJ0LRa8 = BigInt("1005")
		const addresspRplON = accounts[2]
		const boolK7iZY67 = await CryptoSecureBankTokenPcggvm.getBlackListStatus.call(addressJHODAvI, {from: accounts[4]});
		const boolbmBBRSW = await CryptoSecureBankTokenPcggvm.getBlackListStatus.call(addressktGCJ5M, {from: accounts[1]});
		const uintmv0DwsS = await CryptoSecureBankTokenPcggvm.balanceOf.call(addresscptasuJ, {from: accounts[3]});
//		await CryptoSecureBankTokenPcggvm.pause.call({from: accounts[1]});
//		const boollJDrykB = await CryptoSecureBankTokenPcggvm.approve.call(addresspRplON, uintCJ0LRa8, {from: accounts[4]});

		assert.equal(boolK7iZY67, false)
		assert.equal(boolbmBBRSW, false)
		assert.equal(uintmv0DwsS, BigInt("0"))
		await expect(CryptoSecureBankTokenPcggvm.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFdHdeZR = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintzhYOSK = BigInt("286")
		const addressNrRjIY = accounts[0]
		const addressog9FLM5 = accounts[2]
//		const boolkk7v7SL = await CryptoSecureBankTokenFdHdeZR.transfer.call(addressNrRjIY, uintzhYOSK, {from: accounts[1]});
//		await CryptoSecureBankTokenFdHdeZR.whenPaused.call({from: accounts[2]});
//		const booleYLdAoC = await CryptoSecureBankTokenFdHdeZR.deprecate.call(addressog9FLM5, {from: accounts[2]});

		await expect(CryptoSecureBankTokenFdHdeZR.transfer.call(addressNrRjIY, uintzhYOSK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPcggvm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressytqdvJ = accounts[4]
		const addresscmii5CW = accounts[1]
		const addressde81BM3 = accounts[2]
		const uintLwJ1X7 = BigInt("1158")
		const addressDI2FvAz = "0x0000000000000000000000000000000000000001"
		const uintJmX8184 = BigInt("637")
		const addressGCq6Cn = accounts[1]
		const addressPWBqOhz = accounts[3]
		const uintxPYVaQo = BigInt("1005")
		const addressRVvzjLs = accounts[2]
		const boolK7iZY67 = await CryptoSecureBankTokenPcggvm.getBlackListStatus.call(addressytqdvJ, {from: accounts[4]});
		const boolbmBBRSW = await CryptoSecureBankTokenPcggvm.getBlackListStatus.call(addresscmii5CW, {from: accounts[1]});
		const uintmv0DwsS = await CryptoSecureBankTokenPcggvm.balanceOf.call(addressde81BM3, {from: accounts[3]});
		const boolqJKz4iL = await CryptoSecureBankTokenPcggvm.approve.call(addressDI2FvAz, uintLwJ1X7, {from: accounts[3]});
//		const boolHc7KTuV = await CryptoSecureBankTokenPcggvm.transferFrom.call(addressPWBqOhz, addressGCq6Cn, uintJmX8184, {from: accounts[5]});
//		await CryptoSecureBankTokenPcggvm.pause.call({from: accounts[1]});
//		const boollJDrykB = await CryptoSecureBankTokenPcggvm.approve.call(addressRVvzjLs, uintxPYVaQo, {from: accounts[4]});

		assert.equal(boolK7iZY67, false)
		assert.equal(boolbmBBRSW, false)
		assert.equal(boolqJKz4iL, true)
		assert.equal(uintmv0DwsS, BigInt("0"))
		await expect(CryptoSecureBankTokenPcggvm.transferFrom.call(addressPWBqOhz, addressGCq6Cn, uintJmX8184, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvSouReE = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const address2wBJGD = accounts[0]
		const addressd5RMFlf = accounts[2]
		await CryptoSecureBankTokenvSouReE.whenNotPaused.call({from: accounts[2]});
		const uintK9p61J3 = await CryptoSecureBankTokenvSouReE.allowance.call(addressd5RMFlf, address2wBJGD, {from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGDFEjF = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressfKauaPY = accounts[3]
		const addressPyVpZC5 = accounts[5]
		const addressDlixJOW = accounts[4]
		const addressxoA4cdA = accounts[5]
		const addressz5aX5kc = accounts[4]
		const uintSJSgcF1 = await CryptoSecureBankTokenGDFEjF.balanceOf.call(addressfKauaPY, {from: accounts[3]});
		const uintPtVTTLj = await CryptoSecureBankTokenGDFEjF.allowance.call(addressDlixJOW, addressPyVpZC5, {from: accounts[5]});
//		await CryptoSecureBankTokenGDFEjF.pause.call({from: accounts[3]});
//		const addressYpKiCA = await CryptoSecureBankTokenGDFEjF.destroyBlackFunds.call(addressxoA4cdA, {from: accounts[2]});
//		const boolsLlbfLM = await CryptoSecureBankTokenGDFEjF.deprecate.call(addressz5aX5kc, {from: accounts[4]});

		assert.equal(uintPtVTTLj, BigInt("0"))
		assert.equal(uintSJSgcF1, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenGDFEjF.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendPBrh6N = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintCgL2Isr = BigInt("1567")
		const addressvOleF8c = accounts[3]
		const addressGAuvUKP = accounts[4]
		const uintrAp9Zp = BigInt("590")
		const boolAQdTKUS = await CryptoSecureBankTokendPBrh6N.approve.call(addressvOleF8c, uintCgL2Isr, {from: accounts[4]});
		const addressfwkZj5 = await CryptoSecureBankTokendPBrh6N.removeBlackList.call(addressGAuvUKP, {from: accounts[3]});
//		const boolCZO2JDk = await CryptoSecureBankTokendPBrh6N.redeem.call(uintrAp9Zp, {from: accounts[4]});
//		await CryptoSecureBankTokendPBrh6N.pause.call({from: accounts[0]});

		assert.equal(boolAQdTKUS, true)
		await expect(CryptoSecureBankTokendPBrh6N.redeem.call(uintrAp9Zp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGDFEjF = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresstnrvZGr = accounts[5]
		const addressIajnLeN = accounts[4]
		const addressEDMuTQG = accounts[2]
		const uintWkqi7i3 = BigInt("42")
		const addressoNfB1RD = accounts[3]
		const addressK15ay9 = accounts[2]
		const addresskajCJuu = accounts[2]
		const addresspygLUF4 = accounts[3]
		const uintfn4vvqs = BigInt("1094")
		const addressmy4lufR = accounts[3]
		const uintPtVTTLj = await CryptoSecureBankTokenGDFEjF.allowance.call(addressIajnLeN, addresstnrvZGr, {from: accounts[5]});
		const boolmU8K0Rv = await CryptoSecureBankTokenGDFEjF.deprecate.call(addressEDMuTQG, {from: accounts[3]});
//		const boolIhDI4nd = await CryptoSecureBankTokenGDFEjF.transferFrom.call(addressK15ay9, addressoNfB1RD, uintWkqi7i3, {from: accounts[4]});
//		const uintYBlH8LJ = await CryptoSecureBankTokenGDFEjF.allowance.call(addresspygLUF4, addresskajCJuu, {from: accounts[4]});
//		const boolQwCERzU = await CryptoSecureBankTokenGDFEjF.approve.call(addressmy4lufR, uintfn4vvqs, {from: accounts[5]});

		assert.equal(boolmU8K0Rv, true)
		assert.equal(uintPtVTTLj, BigInt("0"))
		await expect(CryptoSecureBankTokenGDFEjF.transferFrom.call(addressK15ay9, addressoNfB1RD, uintWkqi7i3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVfi3aPF = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressqo6htEL = accounts[3]
		const uintsuB4scy = BigInt("1659")
		const addressOkQZYs0 = accounts[2]
//		const addressmq3n1xr = await CryptoSecureBankTokenVfi3aPF.destroyBlackFunds.call(addressqo6htEL, {from: accounts[2]});
//		const boolojhH5u = await CryptoSecureBankTokenVfi3aPF.approve.call(addressOkQZYs0, uintsuB4scy, {from: accounts[3]});

		await expect(CryptoSecureBankTokenVfi3aPF.destroyBlackFunds.call(addressqo6htEL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVfi3aPF = await CryptoSecureBankToken.new({from: accounts[2]});
		const uinteHwxDDO = BigInt("1659")
		const addressD9XfgRL = accounts[3]
		const addressHB9ti6e = accounts[5]
		const boolojhH5u = await CryptoSecureBankTokenVfi3aPF.approve.call(addressD9XfgRL, uinteHwxDDO, {from: accounts[3]});
		const addressb31pja5 = await CryptoSecureBankTokenVfi3aPF.addBlackList.call(addressHB9ti6e, {from: accounts[2]});

		assert.equal(boolojhH5u, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPcggvm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressNsGEez4 = accounts[4]
		const addressRZJ91FK = accounts[5]
		const addressYFYhloS = await CryptoSecureBankTokenPcggvm.transferOwnership.call(addressNsGEez4, {from: accounts[4]});
//		await CryptoSecureBankTokenPcggvm.pause.call({from: accounts[1]});
//		const addressOgTocMi = await CryptoSecureBankTokenPcggvm.transferOwnership.call(addressRZJ91FK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenPcggvm.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVfi3aPF = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintaW2ICf = BigInt("1659")
		const addresszhU21wX = accounts[2]
		const addressxI1i9uF = accounts[4]
		const boolojhH5u = await CryptoSecureBankTokenVfi3aPF.approve.call(addresszhU21wX, uintaW2ICf, {from: accounts[3]});
		const addressLYAYYhB = await CryptoSecureBankTokenVfi3aPF.setOwner2.call(addressxI1i9uF, {from: accounts[2]});

		assert.equal(boolojhH5u, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGDFEjF = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintgTizNKG = BigInt("1436")
		const uintkKxwkhH = BigInt("47")
		const addressKKqTSI1 = accounts[0]
		const uintfOixkR = BigInt("42")
		const addressUAiDPr2 = accounts[2]
		const addressWIllK8b = accounts[3]
		const boolL6TYKD = await CryptoSecureBankTokenGDFEjF.redeem.call(uintgTizNKG, {from: accounts[3]});
		const boolNkHMm2w = await CryptoSecureBankTokenGDFEjF.transfer.call(addressKKqTSI1, uintkKxwkhH, {from: accounts[3]});
		const uintK5S1y61 = await CryptoSecureBankTokenGDFEjF.totalSupply.call({from: accounts[2]});
//		const boolIhDI4nd = await CryptoSecureBankTokenGDFEjF.transferFrom.call(addressWIllK8b, addressUAiDPr2, uintfOixkR, {from: accounts[4]});

		assert.equal(boolL6TYKD, true)
		assert.equal(boolNkHMm2w, true)
		assert.equal(uintK5S1y61, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenGDFEjF.transferFrom.call(addressWIllK8b, addressUAiDPr2, uintfOixkR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPcggvm = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintsRcPpSv = BigInt("667")
		const addresslENOPYX = accounts[2]
		const uintqeQD87d = BigInt("0")
		const addresspgP2sJ3 = accounts[0]
		const boolrzNjwG = await CryptoSecureBankTokenPcggvm.approve.call(addresslENOPYX, uintsRcPpSv, {from: accounts[2]});
		const boolti5hqmD = await CryptoSecureBankTokenPcggvm.transfer.call(addresspgP2sJ3, uintqeQD87d, {from: accounts[1]});

		assert.equal(boolrzNjwG, true)
		assert.equal(boolti5hqmD, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPcggvm = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintIf5qh3P = BigInt("0")
		const addressXfjD62R = accounts[1]
		const uintXTBrY9 = BigInt("1998")
		const uintIIvbi0y = BigInt("608")
		const boolti5hqmD = await CryptoSecureBankTokenPcggvm.transfer.call(addressXfjD62R, uintIf5qh3P, {from: accounts[1]});
//		const uinta9mBU6C = await CryptoSecureBankTokenPcggvm.setParams.call(uintIIvbi0y, uintXTBrY9, {from: accounts[4]});
//		const uint86MmBm = await CryptoSecureBankTokenPcggvm.totalSupply.call({from: accounts[2]});

		assert.equal(boolti5hqmD, true)
		await expect(CryptoSecureBankTokenPcggvm.setParams.call(uintIIvbi0y, uintXTBrY9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})