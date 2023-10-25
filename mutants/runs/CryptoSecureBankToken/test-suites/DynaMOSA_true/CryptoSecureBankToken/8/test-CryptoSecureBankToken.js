const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN592Zqp = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressr1zdCaJ = accounts[1]
		const addressWP9CglR = accounts[5]
		const uintdCSSryX = BigInt("503")
		const addressd2F9UrX = accounts[4]
		const addressfZUlKOs = accounts[3]
		const addresszr2n9y8 = accounts[1]
		const booloeKCVu9 = await CryptoSecureBankTokenN592Zqp.getBlackListStatus.call(addressr1zdCaJ, {from: accounts[0]});
		const addressemFBr2i = await CryptoSecureBankTokenN592Zqp.transferOwnership.call(addressWP9CglR, {from: accounts[0]});
		await CryptoSecureBankTokenN592Zqp.whenNotPaused.call({from: accounts[3]});
		const boolRfCN45B = await CryptoSecureBankTokenN592Zqp.approve.call(addressd2F9UrX, uintdCSSryX, {from: accounts[1]});
		await CryptoSecureBankTokenN592Zqp.whenPaused.call({from: accounts[4]});
		const uintKRSW2Rm = await CryptoSecureBankTokenN592Zqp.allowance.call(addresszr2n9y8, addressfZUlKOs, {from: accounts[1]});

		assert.equal(booloeKCVu9, false)
		await expect(CryptoSecureBankTokenN592Zqp.transferOwnership.call(addressWP9CglR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINWzOPm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressTJIP4Mb = accounts[4]
		const uintodEMiSz = await CryptoSecureBankTokenINWzOPm.balanceOf.call(addressTJIP4Mb, {from: accounts[2]});
		await CryptoSecureBankTokenINWzOPm.onlyOwner.call({from: accounts[5]});

		assert.equal(uintodEMiSz, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenINWzOPm.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMgJBnP = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDh1ztfc = BigInt("1830")
		const addressqK8HU6G = accounts[3]
		const addressrQcmK1j = accounts[3]
		const uintXqTC0Q6 = BigInt("377")
		const addressqWahcBc = accounts[2]
		const booljTTOJOf = await CryptoSecureBankTokenMgJBnP.transferFrom.call(addressrQcmK1j, addressqK8HU6G, uintDh1ztfc, {from: accounts[3]});
		const boolYYnUwR = await CryptoSecureBankTokenMgJBnP.transfer.call(addressqWahcBc, uintXqTC0Q6, {from: accounts[1]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPO0slzc = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressqSmRMp4 = accounts[0]
		const uintHIOP72 = BigInt("1123")
		const addressbB3vN7m = accounts[0]
		const addresstKZZoUp = accounts[0]
		const uintpv2e9nU = await CryptoSecureBankTokenPO0slzc.balanceOf.call(addressqSmRMp4, {from: accounts[2]});
		const addressdW8mznh = await CryptoSecureBankTokenPO0slzc.getOwner.call({from: accounts[1]});
		const boolf79z0Yi = await CryptoSecureBankTokenPO0slzc.transferFrom.call(addresstKZZoUp, addressbB3vN7m, uintHIOP72, {from: accounts[0]});

		assert.equal(addressdW8mznh, 0x192Eb341BD2a3A41E233120CfD2Ec94a6757d9bf)
		assert.equal(uintpv2e9nU, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenPO0slzc.transferFrom.call(addresstKZZoUp, addressbB3vN7m, uintHIOP72, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNMTJRU5 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintQfPNAAe = BigInt("400")
		const addresslKcDHt = accounts[0]
		const addressQYfUe3K = accounts[2]
		const boolZnMDRNT = await CryptoSecureBankTokenNMTJRU5.approve.call(addresslKcDHt, uintQfPNAAe, {from: accounts[3]});
		await CryptoSecureBankTokenNMTJRU5.onlyOwner.call({from: accounts[2]});
		const boolpnoQNto = await CryptoSecureBankTokenNMTJRU5.getBlackListStatus.call(addressQYfUe3K, {from: accounts[3]});

		assert.equal(boolZnMDRNT, true)
		await expect(CryptoSecureBankTokenNMTJRU5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN592Zqp = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressm51xEUz = accounts[2]
		const addressMxRCNMl = accounts[5]
		const addressagljgyF = accounts[5]
		const addressRc43YIg = accounts[5]
		const uint7pKQZR = BigInt("503")
		const addressYrTPJbE = accounts[4]
		const addresscdac4zA = accounts[3]
		const addressNsLz5TV = accounts[1]
		const booloeKCVu9 = await CryptoSecureBankTokenN592Zqp.getBlackListStatus.call(addressm51xEUz, {from: accounts[0]});
		const uintmhfPAsQ = await CryptoSecureBankTokenN592Zqp.allowance.call(addressagljgyF, addressMxRCNMl, {from: accounts[4]});
		const addressemFBr2i = await CryptoSecureBankTokenN592Zqp.transferOwnership.call(addressRc43YIg, {from: accounts[0]});
		await CryptoSecureBankTokenN592Zqp.whenNotPaused.call({from: accounts[3]});
		const boolRfCN45B = await CryptoSecureBankTokenN592Zqp.approve.call(addressYrTPJbE, uint7pKQZR, {from: accounts[1]});
		await CryptoSecureBankTokenN592Zqp.whenPaused.call({from: accounts[4]});
		const uintKRSW2Rm = await CryptoSecureBankTokenN592Zqp.allowance.call(addressNsLz5TV, addresscdac4zA, {from: accounts[1]});

		assert.equal(booloeKCVu9, false)
		assert.equal(uintmhfPAsQ, BigInt("0"))
		await expect(CryptoSecureBankTokenN592Zqp.transferOwnership.call(addressRc43YIg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPO0slzc = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintFBdhTn = BigInt("1932")
		const addressqSvaiUo = accounts[3]
		const addressfdzsYtM = accounts[1]
		const uintykx71V2 = BigInt("1386")
		const addresszxiYhWl = accounts[3]
		const uintnC7sSHL = BigInt("1123")
		const addressRYjsHvg = accounts[0]
		const addressylWfIK = accounts[0]
		const boolt348Vp = await CryptoSecureBankTokenPO0slzc.approve.call(addressqSvaiUo, uintFBdhTn, {from: accounts[2]});
		const uintpv2e9nU = await CryptoSecureBankTokenPO0slzc.balanceOf.call(addressfdzsYtM, {from: accounts[2]});
		const boolFFprjuC = await CryptoSecureBankTokenPO0slzc.transfer.call(addresszxiYhWl, uintykx71V2, {from: accounts[1]});
		const addressdW8mznh = await CryptoSecureBankTokenPO0slzc.getOwner.call({from: accounts[1]});
		const boolf79z0Yi = await CryptoSecureBankTokenPO0slzc.transferFrom.call(addressylWfIK, addressRYjsHvg, uintnC7sSHL, {from: accounts[0]});

		assert.equal(boolt348Vp, true)
		assert.equal(uintpv2e9nU, BigInt("0"))
		await expect(CryptoSecureBankTokenPO0slzc.transfer.call(addresszxiYhWl, uintykx71V2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenw5AXxl0 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintOWAsRh2 = BigInt("1696")
		const addresstvN7Onf = accounts[3]
		const addressYaiz1k4 = accounts[0]
		const addressaoOoLj = accounts[2]
		const uintiEP3Nc = await CryptoSecureBankTokenw5AXxl0.totalSupply.call({from: accounts[3]});
		const booltbqI7Np = await CryptoSecureBankTokenw5AXxl0.approve.call(addresstvN7Onf, uintOWAsRh2, {from: accounts[2]});
		const addresskKCiYC = await CryptoSecureBankTokenw5AXxl0.destroyBlackFunds.call(addressYaiz1k4, {from: accounts[2]});
		const uintsDFdQxG = await CryptoSecureBankTokenw5AXxl0.balanceOf.call(addressaoOoLj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltbqI7Np, true)
		assert.equal(uintiEP3Nc, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenw5AXxl0.destroyBlackFunds.call(addressYaiz1k4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINWzOPm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressafkkBFN = accounts[3]
		const addressDSe8b46 = accounts[2]
		const addresseYBkbYm = accounts[4]
		const address3dSS8g = accounts[6]
		const addresshs1LLDH = await CryptoSecureBankTokenINWzOPm.removeBlackList.call(addressafkkBFN, {from: accounts[4]});
		const uintH5ERKe = await CryptoSecureBankTokenINWzOPm.allowance.call(addresseYBkbYm, addressDSe8b46, {from: accounts[2]});
		const uintodEMiSz = await CryptoSecureBankTokenINWzOPm.balanceOf.call(address3dSS8g, {from: accounts[2]});

		assert.equal(uintH5ERKe, BigInt("0"))
		assert.equal(uintodEMiSz, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXZeECbo = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresseq8oWK6 = accounts[4]
		const addressQi1aWlB = accounts[3]
		const uintvy1gLZK = BigInt("1232")
		const addressbCjmE4Z = accounts[4]
		const uintw48kyl4 = BigInt("2010")
		const uintZnw5I8P = await CryptoSecureBankTokenXZeECbo.allowance.call(addressQi1aWlB, addresseq8oWK6, {from: accounts[5]});
		const boolDYl2otl = await CryptoSecureBankTokenXZeECbo.transfer.call(addressbCjmE4Z, uintvy1gLZK, {from: accounts[0]});
		await CryptoSecureBankTokenXZeECbo.pause.call({from: accounts[3]});
		const uintw0c6K39 = await CryptoSecureBankTokenXZeECbo.onlyPayloadSize.call(uintw48kyl4, {from: accounts[4]});

		assert.equal(boolDYl2otl, true)
		assert.equal(uintZnw5I8P, BigInt("0"))
		await expect(CryptoSecureBankTokenXZeECbo.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN592Zqp = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressZD3V6I = accounts[2]
		const addressgQAUvdt = accounts[4]
		const addressxoVCNe6 = accounts[0]
		const addressUIsN54c = accounts[5]
		const addressox6Vw5I = accounts[5]
		const addressP4EmAnh = accounts[5]
		const uintmh0EaTk = BigInt("503")
		const addresstI2JkHE = accounts[4]
		const uintxHNlfm = BigInt("329")
		const addressZ752OnE = accounts[1]
		const addressrCnatGY = accounts[3]
		const uintpWFpxp = BigInt("273")
		const addressDPPeNzT = accounts[3]
		const addressBc20Dj = accounts[1]
		const booloeKCVu9 = await CryptoSecureBankTokenN592Zqp.getBlackListStatus.call(addressZD3V6I, {from: accounts[0]});
		const addressFhxIKZ9 = await CryptoSecureBankTokenN592Zqp.addBlackList.call(addressgQAUvdt, {from: accounts[3]});
		const uintd0KB7uR = await CryptoSecureBankTokenN592Zqp.balanceOf.call(addressxoVCNe6, {from: accounts[4]});
		const uintmhfPAsQ = await CryptoSecureBankTokenN592Zqp.allowance.call(addressox6Vw5I, addressUIsN54c, {from: accounts[4]});
		const addressemFBr2i = await CryptoSecureBankTokenN592Zqp.transferOwnership.call(addressP4EmAnh, {from: accounts[0]});
		await CryptoSecureBankTokenN592Zqp.whenNotPaused.call({from: accounts[3]});
		const boolRfCN45B = await CryptoSecureBankTokenN592Zqp.approve.call(addresstI2JkHE, uintmh0EaTk, {from: accounts[1]});
		const boolZuxAgL = await CryptoSecureBankTokenN592Zqp.transferFrom.call(addressrCnatGY, addressZ752OnE, uintxHNlfm, {from: accounts[1]});
		await CryptoSecureBankTokenN592Zqp.whenPaused.call({from: accounts[4]});
		const boolM8v0emn = await CryptoSecureBankTokenN592Zqp.redeem.call(uintpWFpxp, {from: accounts[0]});
		const uintKRSW2Rm = await CryptoSecureBankTokenN592Zqp.allowance.call(addressBc20Dj, addressDPPeNzT, {from: accounts[1]});

		assert.equal(booloeKCVu9, false)
		assert.equal(uintd0KB7uR, BigInt("0"))
		assert.equal(uintmhfPAsQ, BigInt("0"))
		await expect(CryptoSecureBankTokenN592Zqp.transferOwnership.call(addressP4EmAnh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINWzOPm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressqV1PXBV = accounts[2]
		const addressjh0UT5n = accounts[6]
		const addressHY3AgEC = accounts[4]
		const uintmpdp3ee = BigInt("1911")
		const addressI7uZz5E = accounts[4]
		const addresspKANx3T = accounts[2]
		const uintQ9Ql6Ym = BigInt("1531")
		const addressr7GJcG = accounts[2]
		const addressoVLloxK = accounts[0]
		const addressI49vNLD = await CryptoSecureBankTokenINWzOPm.addBlackList.call(addressqV1PXBV, {from: accounts[4]});
		const uintodEMiSz = await CryptoSecureBankTokenINWzOPm.balanceOf.call(addressjh0UT5n, {from: accounts[2]});
		const addressxp0PrVK = await CryptoSecureBankTokenINWzOPm.transferOwnership.call(addressHY3AgEC, {from: accounts[4]});
		const boolTtNGLne = await CryptoSecureBankTokenINWzOPm.transferFrom.call(addresspKANx3T, addressI7uZz5E, uintmpdp3ee, {from: accounts[1]});
		const boolv7WyQil = await CryptoSecureBankTokenINWzOPm.transferFrom.call(addressoVLloxK, addressr7GJcG, uintQ9Ql6Ym, {from: accounts[5]});

		assert.equal(uintodEMiSz, BigInt("0"))
		await expect(CryptoSecureBankTokenINWzOPm.transferFrom.call(addresspKANx3T, addressI7uZz5E, uintmpdp3ee, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenw5AXxl0 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressHzEPnRA = accounts[0]
		const addressNLZj6fm = accounts[7]
		const uintKHmBVt7 = BigInt("1144")
		const addressLzgOicJ = accounts[0]
		const addressNATwps4 = accounts[3]
		const address9zKxPC = "0x0000000000000000000000000000000000000001"
		const boolr3q8mWm = await CryptoSecureBankTokenw5AXxl0.deprecate.call(addressHzEPnRA, {from: accounts[4]});
		const addressPuCjqOF = await CryptoSecureBankTokenw5AXxl0.transferOwnership.call(addressNLZj6fm, {from: accounts[0]});
		const bool6UDEEX = await CryptoSecureBankTokenw5AXxl0.transferFrom.call(addressNATwps4, addressLzgOicJ, uintKHmBVt7, {from: accounts[4]});
		const boolPMvAAzK = await CryptoSecureBankTokenw5AXxl0.getBlackListStatus.call(address9zKxPC, {from: accounts[3]});

		assert.equal(boolr3q8mWm, true)
		await expect(CryptoSecureBankTokenw5AXxl0.transferOwnership.call(addressNLZj6fm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINWzOPm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressBIpGMXM = accounts[4]
		const addresshWOBnqo = accounts[1]
		const addressIYl0Dn = accounts[7]
		const uintGlkKbvN = BigInt("41")
		const addressDztPTv5 = accounts[1]
		const uintZBsxalN = await CryptoSecureBankTokenINWzOPm.allowance.call(addresshWOBnqo, addressBIpGMXM, {from: accounts[4]});
		const uintodEMiSz = await CryptoSecureBankTokenINWzOPm.balanceOf.call(addressIYl0Dn, {from: accounts[2]});
		const boolu0Xqi6m = await CryptoSecureBankTokenINWzOPm.redeem.call(uintGlkKbvN, {from: accounts[4]});
		const addressmsWP0f7 = await CryptoSecureBankTokenINWzOPm.setOwner2.call(addressDztPTv5, {from: accounts[1]});

		assert.equal(boolu0Xqi6m, true)
		assert.equal(uintZBsxalN, BigInt("0"))
		assert.equal(uintodEMiSz, BigInt("0"))
		await expect(CryptoSecureBankTokenINWzOPm.setOwner2.call(addressDztPTv5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNMTJRU5 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressndzmhio = accounts[3]
		const addressHoGAIF = accounts[3]
		const uintPtn6Jr3 = BigInt("370")
		const addressruj89dJ = accounts[0]
		const addressSpo2Ppz = await CryptoSecureBankTokenNMTJRU5.setOwner2.call(addressndzmhio, {from: accounts[4]});
		const uintZDcbPj = await CryptoSecureBankTokenNMTJRU5.balanceOf.call(addressHoGAIF, {from: accounts[0]});
		const boolZnMDRNT = await CryptoSecureBankTokenNMTJRU5.approve.call(addressruj89dJ, uintPtn6Jr3, {from: accounts[3]});

		assert.equal(boolZnMDRNT, true)
		assert.equal(uintZDcbPj, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNMTJRU5 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintvFybLDn = BigInt("400")
		const addressFHvFMr0 = accounts[2]
		const addressTfnWE4I = accounts[2]
		const addressaALMYdX = accounts[2]
		const boolZnMDRNT = await CryptoSecureBankTokenNMTJRU5.approve.call(addressFHvFMr0, uintvFybLDn, {from: accounts[3]});
		const addressSYG0jXu = await CryptoSecureBankTokenNMTJRU5.removeBlackList.call(addressTfnWE4I, {from: accounts[4]});
		const addressmM9Yh0w = await CryptoSecureBankTokenNMTJRU5.destroyBlackFunds.call(addressaALMYdX, {from: accounts[4]});

		assert.equal(boolZnMDRNT, true)
		await expect(CryptoSecureBankTokenNMTJRU5.destroyBlackFunds.call(addressaALMYdX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNMTJRU5 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresst0oUciQ = accounts[2]
		const uintyydrvXm = BigInt("0")
		const addressQdlm2IN = accounts[3]
		const addressXXHHBAy = accounts[4]
		const addressMvcVJb6 = accounts[4]
		const uintGAAiBRf = await CryptoSecureBankTokenNMTJRU5.balanceOf.call(addresst0oUciQ, {from: accounts[2]});
		const booln6hxgY = await CryptoSecureBankTokenNMTJRU5.transferFrom.call(addressXXHHBAy, addressQdlm2IN, uintyydrvXm, {from: accounts[0]});
		const boolkxcQGUV = await CryptoSecureBankTokenNMTJRU5.deprecate.call(addressMvcVJb6, {from: accounts[3]});

		assert.equal(booln6hxgY, true)
		assert.equal(uintGAAiBRf, BigInt("0"))
		await expect(CryptoSecureBankTokenNMTJRU5.deprecate.call(addressMvcVJb6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNMTJRU5 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintnjHdbHm = BigInt("400")
		const addresslrNn03I = accounts[1]
		const addressvBteo7N = accounts[3]
		const addresscuvfe1Q = accounts[3]
		const uintkxY9B6w = BigInt("1835")
		const uintnyRsiuS = BigInt("1941")
		const boolZnMDRNT = await CryptoSecureBankTokenNMTJRU5.approve.call(addresslrNn03I, uintnjHdbHm, {from: accounts[3]});
		const uintQCE4PNo = await CryptoSecureBankTokenNMTJRU5.allowance.call(addresscuvfe1Q, addressvBteo7N, {from: accounts[4]});
		const uintRjJTy9c = await CryptoSecureBankTokenNMTJRU5.setParams.call(uintnyRsiuS, uintkxY9B6w, {from: accounts[4]});

		assert.equal(boolZnMDRNT, true)
		assert.equal(uintQCE4PNo, BigInt("0"))
		await expect(CryptoSecureBankTokenNMTJRU5.setParams.call(uintnyRsiuS, uintkxY9B6w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINWzOPm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressUceb1hN = accounts[5]
		const addresswj62UI6 = accounts[6]
		await CryptoSecureBankTokenINWzOPm.pause.call({from: accounts[4]});
		const addresst4TBWAV = await CryptoSecureBankTokenINWzOPm.addBlackList.call(addressUceb1hN, {from: accounts[3]});
		const uintodEMiSz = await CryptoSecureBankTokenINWzOPm.balanceOf.call(addresswj62UI6, {from: accounts[2]});

		await expect(CryptoSecureBankTokenINWzOPm.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})