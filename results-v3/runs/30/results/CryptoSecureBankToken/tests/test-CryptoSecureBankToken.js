const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendx3oWvH = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresssbgJY65 = accounts[4]
		const addressaBRjVaE = accounts[2]
		const uintJT9TQPM = BigInt("265")
		const addresswUU9Rk2 = accounts[4]
		const uintQwrPHdM = await CryptoSecureBankTokendx3oWvH.balanceOf.call(addresssbgJY65, {from: accounts[4]});
		await CryptoSecureBankTokendx3oWvH.onlyOwner.call({from: accounts[0]});
		const addresszAvlAb4 = await CryptoSecureBankTokendx3oWvH.getOwner.call({from: accounts[5]});
		const boolfhPBUaZ = await CryptoSecureBankTokendx3oWvH.getBlackListStatus.call(addressaBRjVaE, {from: accounts[1]});
		const boolhDR9j8d = await CryptoSecureBankTokendx3oWvH.approve.call(addresswUU9Rk2, uintJT9TQPM, {from: accounts[0]});

		assert.equal(uintQwrPHdM, BigInt("0"))
		await expect(CryptoSecureBankTokendx3oWvH.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenJfgY92A = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressRTLUnwH = accounts[2]
		const addressYZDyzAp = accounts[5]
		const uintZvmNtei = BigInt("1695")
		const uintfjGZMYt = BigInt("308")
		const uintP88QMzw = await CryptoSecureBankTokenJfgY92A.allowance.call(addressYZDyzAp, addressRTLUnwH, {from: accounts[4]});
		await CryptoSecureBankTokenJfgY92A.unpause.call({from: accounts[2]});
		const uintRX7QdfU = await CryptoSecureBankTokenJfgY92A.onlyPayloadSize.call(uintZvmNtei, {from: accounts[1]});
		const uintQcneeiY = await CryptoSecureBankTokenJfgY92A.onlyPayloadSize.call(uintfjGZMYt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintP88QMzw, BigInt("0"))
		await expect(CryptoSecureBankTokenJfgY92A.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCK6XSi8 = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjjGJSD2 = BigInt("591")
		const addressVxerwg8 = accounts[2]
		const uinteQXSzhe = BigInt("83")
		const addressZEbAQo8 = accounts[4]
		const addressjAB4uD2 = "0x0000000000000000000000000000000000000001"
		await CryptoSecureBankTokenCK6XSi8.unpause.call({from: accounts[3]});
		const uintqKmJedc = await CryptoSecureBankTokenCK6XSi8.totalSupply.call({from: accounts[4]});
		const boolrWSuYrW = await CryptoSecureBankTokenCK6XSi8.transfer.call(addressVxerwg8, uintjjGJSD2, {from: accounts[4]});
		await CryptoSecureBankTokenCK6XSi8.onlyOwner.call({from: accounts[1]});
		const boolVO06sp3 = await CryptoSecureBankTokenCK6XSi8.transferFrom.call(addressjAB4uD2, addressZEbAQo8, uinteQXSzhe, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenJ645bL1 = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintI9KWf1H = BigInt("1300")
		const addressZalflKa = accounts[0]
		const uintGEVgO6L = BigInt("1672")
		const addresssrlcdBa = accounts[2]
		const addressLXg6SBq = accounts[0]
		const bool63OkCT = await CryptoSecureBankTokenJ645bL1.approve.call(addressZalflKa, uintI9KWf1H, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenJ645bL1.unpause.call({from: accounts[2]});
		const boolCtw6Rch = await CryptoSecureBankTokenJ645bL1.transfer.call(addresssrlcdBa, uintGEVgO6L, {from: accounts[0]});
		const addresskwRO5GT = await CryptoSecureBankTokenJ645bL1.addBlackList.call(addressLXg6SBq, {from: accounts[4]});

		assert.equal(bool63OkCT, true)
		await expect(CryptoSecureBankTokenJ645bL1.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenH78g7xY = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressvQ1PlY0 = accounts[3]
		const addressE2qUXnP = accounts[2]
		const addressJjSfc6 = accounts[1]
		const uintsl3L1J = await CryptoSecureBankTokenH78g7xY.balanceOf.call(addressvQ1PlY0, {from: accounts[0]});
		const addressmNtusLq = await CryptoSecureBankTokenH78g7xY.transferOwnership.call(addressE2qUXnP, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenH78g7xY.pause.call({from: accounts[1]});
		const addressCyb7M9p = await CryptoSecureBankTokenH78g7xY.getOwner.call({from: accounts[3]});
		const addressSE7Yoc = await CryptoSecureBankTokenH78g7xY.addBlackList.call(addressJjSfc6, {from: accounts[4]});

		assert.equal(uintsl3L1J, BigInt("0"))
		await expect(CryptoSecureBankTokenH78g7xY.transferOwnership.call(addressE2qUXnP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresssb6cbpZ = accounts[0]
		const uintQNwbdI3 = BigInt("430")
		const addressDLIYM54 = accounts[0]
		const addressYyHsW5 = accounts[0]
		const uintBakxhDv = BigInt("1814")
		const addressd9kFgR4 = "0x0000000000000000000000000000000000000000"
		const uintFMWllXM = BigInt("1021")
		const addressFc1iUrp = accounts[2]
		const uintlgHx0wU = await CryptoSecureBankToken9qiMXP.balanceOf.call(addresssb6cbpZ, {from: accounts[0]});
		const boolsMXS7FR = await CryptoSecureBankToken9qiMXP.transferFrom.call(addressYyHsW5, addressDLIYM54, uintQNwbdI3, {from: accounts[0]});
		const bool5KaGkV = await CryptoSecureBankToken9qiMXP.approve.call(addressd9kFgR4, uintBakxhDv, {from: accounts[0]});
		const booluvGDFIY = await CryptoSecureBankToken9qiMXP.approve.call(addressFc1iUrp, uintFMWllXM, {from: accounts[2]});

		assert.equal(uintlgHx0wU, BigInt("0"))
		await expect(CryptoSecureBankToken9qiMXP.transferFrom.call(addressYyHsW5, addressDLIYM54, uintQNwbdI3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressCXf2cjE = accounts[0]
		const uintAKNzmRK = BigInt("1814")
		const addressSRigE8r = "0x0000000000000000000000000000000000000000"
		const addresshiQWikE = accounts[1]
		const uintw55ysL = BigInt("1021")
		const addressVh0b8sz = accounts[2]
		const uintlgHx0wU = await CryptoSecureBankToken9qiMXP.balanceOf.call(addressCXf2cjE, {from: accounts[0]});
		const bool5KaGkV = await CryptoSecureBankToken9qiMXP.approve.call(addressSRigE8r, uintAKNzmRK, {from: accounts[0]});
		const boolq1u8n5 = await CryptoSecureBankToken9qiMXP.getBlackListStatus.call(addresshiQWikE, {from: "0x0000000000000000000000000000000000000001"});
		const booluvGDFIY = await CryptoSecureBankToken9qiMXP.approve.call(addressVh0b8sz, uintw55ysL, {from: accounts[2]});

		assert.equal(bool5KaGkV, true)
		assert.equal(boolq1u8n5, false)
		assert.equal(booluvGDFIY, true)
		assert.equal(uintlgHx0wU, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenc7gQgTC = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressIe1C1JV = accounts[4]
		const addressM0jrNvg = accounts[1]
		const addressg0cJJbs = accounts[2]
		const boolkKLMVeW = await CryptoSecureBankTokenc7gQgTC.getBlackListStatus.call(addressIe1C1JV, {from: accounts[1]});
		const addressmDZnePX = await CryptoSecureBankTokenc7gQgTC.destroyBlackFunds.call(addressM0jrNvg, {from: accounts[2]});
		await CryptoSecureBankTokenc7gQgTC.pause.call({from: accounts[2]});
		const addressM7zm36U = await CryptoSecureBankTokenc7gQgTC.removeBlackList.call(addressg0cJJbs, {from: accounts[3]});

		assert.equal(boolkKLMVeW, false)
		await expect(CryptoSecureBankTokenc7gQgTC.destroyBlackFunds.call(addressM0jrNvg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZESnElT = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressHpuwrJH = accounts[3]
		const addresse8RTnAp = accounts[1]
		const uintznf3DlX = BigInt("453")
		const addresskC8bI3C = accounts[2]
		const uintoT4m0jo = BigInt("1059")
		const addressyd9w1je = accounts[2]
		const addressVpLhDzF = accounts[5]
		const uintuCMeFue = await CryptoSecureBankTokenZESnElT.balanceOf.call(addressHpuwrJH, {from: accounts[3]});
		const uint3oXK9X = await CryptoSecureBankTokenZESnElT.balanceOf.call(addresse8RTnAp, {from: accounts[1]});
		const boolGybV9qy = await CryptoSecureBankTokenZESnElT.approve.call(addresskC8bI3C, uintznf3DlX, {from: "0x0000000000000000000000000000000000000001"});
		const booln0rR59T = await CryptoSecureBankTokenZESnElT.transfer.call(addressyd9w1je, uintoT4m0jo, {from: accounts[3]});
		await CryptoSecureBankTokenZESnElT.pause.call({from: accounts[1]});
		const uintgCyhaxN = await CryptoSecureBankTokenZESnElT.balanceOf.call(addressVpLhDzF, {from: accounts[0]});

		assert.equal(boolGybV9qy, true)
		assert.equal(uint3oXK9X, BigInt("0"))
		assert.equal(uintuCMeFue, BigInt("0"))
		await expect(CryptoSecureBankTokenZESnElT.transfer.call(addressyd9w1je, uintoT4m0jo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAJSLR5T = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressSyizZU7 = accounts[4]
		const addressEhXhdVR = accounts[0]
		const uintc1T0THx = BigInt("832")
		const addresso0kkkmX = accounts[5]
		const addressuQqeeuL = accounts[0]
		const uintb2tf9i = BigInt("285")
		const addresszA8nma1 = accounts[6]
		const addresszPimAFb = accounts[2]
		const uintEwt8rIu = await CryptoSecureBankTokenAJSLR5T.allowance.call(addressEhXhdVR, addressSyizZU7, {from: accounts[3]});
		const booleL4iP6 = await CryptoSecureBankTokenAJSLR5T.transfer.call(addresso0kkkmX, uintc1T0THx, {from: accounts[0]});
		const uintsZGTPkC = await CryptoSecureBankTokenAJSLR5T.balanceOf.call(addressuQqeeuL, {from: accounts[4]});
		await CryptoSecureBankTokenAJSLR5T.whenPaused.call({from: accounts[2]});
		const booldB2ORUc = await CryptoSecureBankTokenAJSLR5T.transferFrom.call(addresszPimAFb, addresszA8nma1, uintb2tf9i, {from: accounts[1]});

		assert.equal(booleL4iP6, true)
		assert.equal(uintEwt8rIu, BigInt("0"))
		assert.equal(uintsZGTPkC, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenAJSLR5T.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressvEkBuoD = accounts[1]
		const addresshQBxaje = accounts[2]
		const addressJseEFY = accounts[0]
		const uinthDIsB6 = BigInt("1021")
		const addressqsE5Tle = accounts[2]
		const addressVD1O2cj = accounts[4]
		const addressSSjVkx = accounts[4]
		const addressrdx7TNO = accounts[5]
		const uintajxjJe6 = await CryptoSecureBankToken9qiMXP.totalSupply.call({from: accounts[0]});
		const uintO4Bg9zt = await CryptoSecureBankToken9qiMXP.allowance.call(addresshQBxaje, addressvEkBuoD, {from: accounts[3]});
		const addresscEeUEAg = await CryptoSecureBankToken9qiMXP.setOwner2.call(addressJseEFY, {from: accounts[5]});
		const booluvGDFIY = await CryptoSecureBankToken9qiMXP.approve.call(addressqsE5Tle, uinthDIsB6, {from: accounts[2]});
		const uintnSswaEx = await CryptoSecureBankToken9qiMXP.allowance.call(addressSSjVkx, addressVD1O2cj, {from: accounts[3]});
		const boolnov8al = await CryptoSecureBankToken9qiMXP.deprecate.call(addressrdx7TNO, {from: accounts[3]});

		assert.equal(uintO4Bg9zt, BigInt("0"))
		assert.equal(uintajxjJe6, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankToken9qiMXP.setOwner2.call(addressJseEFY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeng1URQkZ = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressvqI3kBV = await CryptoSecureBankTokeng1URQkZ.getOwner.call({from: accounts[0]});
		await CryptoSecureBankTokeng1URQkZ.whenNotPaused.call({from: accounts[3]});

		assert.equal(addressvqI3kBV, 0x52A5B037E65caD7f9c1c025265f15D99e921a9CC)
		await expect(CryptoSecureBankTokeng1URQkZ.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressKsKlA4q = accounts[3]
		const addressKp2h5NF = accounts[0]
		const uintegaUmza = BigInt("1021")
		const addressTjNNiLX = accounts[3]
		const addressiIK0DXT = await CryptoSecureBankToken9qiMXP.addBlackList.call(addressKsKlA4q, {from: accounts[2]});
		const uintlgHx0wU = await CryptoSecureBankToken9qiMXP.balanceOf.call(addressKp2h5NF, {from: accounts[0]});
		const booluvGDFIY = await CryptoSecureBankToken9qiMXP.approve.call(addressTjNNiLX, uintegaUmza, {from: accounts[2]});

		assert.equal(booluvGDFIY, true)
		assert.equal(uintlgHx0wU, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenmPZqoM = await CryptoSecureBankToken.new({from: accounts[2]});
		const uinthhskMBb = BigInt("276")
		const addressk4RJtL = accounts[3]
		const address6griga = accounts[2]
		const uintNXTE8OC = BigInt("1168")
		const address2KmVJX = accounts[0]
		const addressHtUhKbt = accounts[1]
		const boolbyqdfOd = await CryptoSecureBankTokenmPZqoM.approve.call(addressk4RJtL, uinthhskMBb, {from: accounts[4]});
		const addressIRtpKBb = await CryptoSecureBankTokenmPZqoM.setOwner2.call(address6griga, {from: accounts[2]});
		const boolEZs5yB0 = await CryptoSecureBankTokenmPZqoM.approve.call(address2KmVJX, uintNXTE8OC, {from: accounts[0]});
		const boolanKtR7x = await CryptoSecureBankTokenmPZqoM.deprecate.call(addressHtUhKbt, {from: accounts[0]});

		assert.equal(boolEZs5yB0, true)
		assert.equal(boolbyqdfOd, true)
		await expect(CryptoSecureBankTokenmPZqoM.deprecate.call(addressHtUhKbt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressf0Odk6v = accounts[0]
		const uintTAHoT2I = BigInt("1981")
		const uintYGyhuYK = BigInt("347")
		const uintpcy4cVs = BigInt("1605")
		const addressKRdOZdT = accounts[0]
		const addresspgZJ35M = accounts[1]
		const uintiOXEplO = BigInt("1021")
		const addressmFSCBDi = accounts[3]
		const uintlgHx0wU = await CryptoSecureBankToken9qiMXP.balanceOf.call(addressf0Odk6v, {from: accounts[0]});
		const uintRMGVTsN = await CryptoSecureBankToken9qiMXP.setParams.call(uintYGyhuYK, uintTAHoT2I, {from: accounts[2]});
		const boolzs9iVYc = await CryptoSecureBankToken9qiMXP.transferFrom.call(addresspgZJ35M, addressKRdOZdT, uintpcy4cVs, {from: accounts[3]});
		const booluvGDFIY = await CryptoSecureBankToken9qiMXP.approve.call(addressmFSCBDi, uintiOXEplO, {from: accounts[2]});

		assert.equal(uintlgHx0wU, BigInt("0"))
		await expect(CryptoSecureBankToken9qiMXP.setParams.call(uintYGyhuYK, uintTAHoT2I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokent6loRHc = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressRG4KoZ = accounts[3]
		const addresskTTGeJ0 = accounts[1]
		const uintr5NCnB6 = BigInt("608")
		const uintRLdoDon = BigInt("1248")
		const addressKLEZmFN = accounts[1]
		const addressxmL6n5G = accounts[3]
		const uinteQYQkxZ = await CryptoSecureBankTokent6loRHc.allowance.call(addresskTTGeJ0, addressRG4KoZ, {from: accounts[3]});
		const addressIwozcrX = await CryptoSecureBankTokent6loRHc.getOwner.call({from: accounts[4]});
		const booloQ6AVOF = await CryptoSecureBankTokent6loRHc.redeem.call(uintr5NCnB6, {from: accounts[3]});
		await CryptoSecureBankTokent6loRHc.whenPaused.call({from: accounts[0]});
		const boolfya4Ec5 = await CryptoSecureBankTokent6loRHc.transferFrom.call(addressxmL6n5G, addressKLEZmFN, uintRLdoDon, {from: accounts[3]});
		const addressnKv4naD = await CryptoSecureBankTokent6loRHc.getOwner.call({from: accounts[3]});

		assert.equal(addressIwozcrX, 0xE2Dcd36FE3b4c29CD4eBf66d5d58ab9737838a21)
		assert.equal(booloQ6AVOF, true)
		assert.equal(uinteQYQkxZ, BigInt("0"))
		await expect(CryptoSecureBankTokent6loRHc.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintpxcebLL = BigInt("53")
		const addresspJNb3rB = accounts[4]
		const boolfsi5Svw = await CryptoSecureBankToken9qiMXP.transfer.call(addresspJNb3rB, uintpxcebLL, {from: accounts[2]});
		await CryptoSecureBankToken9qiMXP.pause.call({from: accounts[2]});

		assert.equal(boolfsi5Svw, true)
		await expect(CryptoSecureBankToken9qiMXP.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressdjhIzg3 = accounts[2]
		const uintZkzROtN = BigInt("967")
		const addressp3VHdoY = accounts[5]
		const uintKl6Zhq2 = BigInt("1854")
		const addresskXUmVXA = accounts[0]
		const addressgGpfx8 = await CryptoSecureBankToken9qiMXP.transferOwnership.call(addressdjhIzg3, {from: accounts[2]});
		const boolYkG0Tl0 = await CryptoSecureBankToken9qiMXP.approve.call(addressp3VHdoY, uintZkzROtN, {from: "0x0000000000000000000000000000000000000001"});
		const uintiB6sdhr = await CryptoSecureBankToken9qiMXP.onlyPayloadSize.call(uintKl6Zhq2, {from: accounts[3]});
		const addressyuv3MDP = await CryptoSecureBankToken9qiMXP.destroyBlackFunds.call(addresskXUmVXA, {from: accounts[5]});

		assert.equal(boolYkG0Tl0, true)
		await expect(CryptoSecureBankToken9qiMXP.onlyPayloadSize.call(uintKl6Zhq2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintKt9qx2B = BigInt("26")
		const addressGHsXVR8 = accounts[5]
		const addressAbRdD3 = accounts[4]
		const boolfsi5Svw = await CryptoSecureBankToken9qiMXP.transfer.call(addressGHsXVR8, uintKt9qx2B, {from: accounts[2]});
		const addressKYzkwhu = await CryptoSecureBankToken9qiMXP.removeBlackList.call(addressAbRdD3, {from: accounts[2]});

		assert.equal(boolfsi5Svw, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenozyfrng = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresscW0O7xD = accounts[2]
		const addresshdvG5dE = accounts[0]
		const addressdoVQ1Uo = accounts[3]
		const addressYZmba6Z = accounts[2]
		const uintC4R1FOR = BigInt("291")
		const booljPNWw9z = await CryptoSecureBankTokenozyfrng.deprecate.call(addresscW0O7xD, {from: accounts[5]});
		const uintCC2BkrT = await CryptoSecureBankTokenozyfrng.allowance.call(addressdoVQ1Uo, addresshdvG5dE, {from: accounts[3]});
		const addressOE9KxVh = await CryptoSecureBankTokenozyfrng.destroyBlackFunds.call(addressYZmba6Z, {from: accounts[5]});
		const uintks09g5C = await CryptoSecureBankTokenozyfrng.onlyPayloadSize.call(uintC4R1FOR, {from: accounts[3]});
		await CryptoSecureBankTokenozyfrng.whenPaused.call({from: accounts[3]});

		assert.equal(booljPNWw9z, true)
		assert.equal(uintCC2BkrT, BigInt("0"))
		await expect(CryptoSecureBankTokenozyfrng.destroyBlackFunds.call(addressYZmba6Z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken9qiMXP = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintTUVYonq = BigInt("0")
		const addressjI46GSw = accounts[4]
		const addressYj0an7B = accounts[3]
		const uintMfwzMBZ = BigInt("1285")
		const boolfsi5Svw = await CryptoSecureBankToken9qiMXP.transfer.call(addressjI46GSw, uintTUVYonq, {from: accounts[2]});
		const addressUVVHj1q = await CryptoSecureBankToken9qiMXP.removeBlackList.call(addressYj0an7B, {from: accounts[0]});
		const uintbm4jLs2 = await CryptoSecureBankToken9qiMXP.onlyPayloadSize.call(uintMfwzMBZ, {from: accounts[3]});
		const addressAnuXbn = await CryptoSecureBankToken9qiMXP.getOwner.call({from: accounts[3]});

		assert.equal(boolfsi5Svw, true)
		await expect(CryptoSecureBankToken9qiMXP.removeBlackList.call(addressYj0an7B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})