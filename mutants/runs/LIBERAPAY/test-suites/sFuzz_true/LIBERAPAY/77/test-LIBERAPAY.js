const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsGem5uy = await LIBERAPAY.new({from: accounts[4]});
		const uintgQW9ZXh = BigInt("1888")
		const addressO6lvqu8 = "0x0000000000000000000000000000000000000001"
		const uintT4hOy6E = BigInt("857")
		const addresswnpr8xS = accounts[3]
		const booliG056YG = await LIBERAPAYsGem5uy.transfer.call(addressO6lvqu8, uintgQW9ZXh, {from: accounts[2]});
		const boolUzMfjyl = await LIBERAPAYsGem5uy.decreaseAllowance.call(addresswnpr8xS, uintT4hOy6E, {from: accounts[0]});

		await expect(LIBERAPAYsGem5uy.transfer.call(addressO6lvqu8, uintgQW9ZXh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAhi39Vv = await LIBERAPAY.new({from: accounts[4]});
		const uintINFpBWJ = BigInt("1871")
		const addressrU8waC = accounts[0]
		const addressFJBJkZ0 = accounts[4]
		const addressbJcSSXD = accounts[1]
		const uintVgio6O = BigInt("1095")
		const addressUDOw3Go = accounts[3]
		const boolEjQiSDY = await LIBERAPAYAhi39Vv.decreaseAllowance.call(addressrU8waC, uintINFpBWJ, {from: accounts[0]});
		const addressvu9vZxA = await LIBERAPAYAhi39Vv.transferOwnership.call(addressFJBJkZ0, {from: accounts[3]});
		const uint256IP9nWua = await LIBERAPAYAhi39Vv.currentBalanceOf.call(addressbJcSSXD, {from: accounts[1]});
		await LIBERAPAYAhi39Vv.pause.call({from: accounts[4]});
		const boolFP04HcR = await LIBERAPAYAhi39Vv.distribute.call(addressUDOw3Go, uintVgio6O, {from: accounts[4]});

		await expect(LIBERAPAYAhi39Vv.decreaseAllowance.call(addressrU8waC, uintINFpBWJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJZDtB8n = await LIBERAPAY.new({from: accounts[4]});
		const addressV35aZr3 = accounts[3]
		const uintm4rTRLl = BigInt("1149")
		const addresspyQ8DHp = accounts[1]
		const uintuOzV9kI = BigInt("1946")
		const addresswcUrsHR = accounts[3]
		const addressT8TUlCj = accounts[2]
		const addressXS3mFPB = accounts[4]
		const uint256QwCuGpC = await LIBERAPAYJZDtB8n.currentBalanceOf.call(addressV35aZr3, {from: accounts[1]});
		await LIBERAPAYJZDtB8n.unpause.call({from: accounts[4]});
		const boolyrZOaNa = await LIBERAPAYJZDtB8n.burnFrom.call(addresspyQ8DHp, uintm4rTRLl, {from: accounts[2]});
		const boolUXbW0VV = await LIBERAPAYJZDtB8n.increaseAllowance.call(addresswcUrsHR, uintuOzV9kI, {from: accounts[0]});
		const boolGwZKBk = await LIBERAPAYJZDtB8n.freezeAccount.call(addressT8TUlCj, {from: "0x0000000000000000000000000000000000000001"});
		const addressREJbuc = await LIBERAPAYJZDtB8n.notFrozen.call(addressXS3mFPB, {from: accounts[2]});

		assert.equal(uint256QwCuGpC, BigInt("0"))
		await expect(LIBERAPAYJZDtB8n.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnHlLTlY = await LIBERAPAY.new({from: accounts[4]});
		const uintFEWvM9n = BigInt("1542")
		const addressVdDnJ8P = accounts[3]
		const addressDPZlgSK = accounts[1]
		const uintDoFJHsR = BigInt("484")
		const addressi2rdj1E = accounts[2]
		const boolqY8MzwE = await LIBERAPAYnHlLTlY.transferFrom.call(addressDPZlgSK, addressVdDnJ8P, uintFEWvM9n, {from: accounts[2]});
		const uint256jTM4vSl = await LIBERAPAYnHlLTlY.getNowTime.call({from: accounts[2]});
		await LIBERAPAYnHlLTlY.pause.call({from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYnHlLTlY.showLockState.call(addressi2rdj1E, uintDoFJHsR, {from: accounts[0]});

		await expect(LIBERAPAYnHlLTlY.transferFrom.call(addressDPZlgSK, addressVdDnJ8P, uintFEWvM9n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIS6zaAg = await LIBERAPAY.new({from: accounts[1]});
		const uintoXFxykB = BigInt("356")
		const addressjcwy1bF = accounts[3]
		const addressaiaS555 = accounts[1]
		const uintUozsmZg = BigInt("705")
		const addressG6CtxTG = accounts[2]
		const addressdTE4T3g = accounts[1]
		const booluE1DAKF = await LIBERAPAYIS6zaAg.increaseAllowance.call(addressjcwy1bF, uintoXFxykB, {from: accounts[0]});
		const addressMknisB = await LIBERAPAYIS6zaAg.upgradeTo.call(addressaiaS555, {from: accounts[2]});
		const boolFltwd1k = await LIBERAPAYIS6zaAg.transfer.call(addressG6CtxTG, uintUozsmZg, {from: accounts[3]});
		await LIBERAPAYIS6zaAg.whenNotPaused.call({from: accounts[0]});
		const uint256B2gUPWB = await LIBERAPAYIS6zaAg.balanceOf.call(addressdTE4T3g, {from: accounts[0]});

		assert.equal(booluE1DAKF, true)
		await expect(LIBERAPAYIS6zaAg.upgradeTo.call(addressaiaS555, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIS6zaAg = await LIBERAPAY.new({from: accounts[1]});
		const uintapCiDNO = BigInt("431")
		const uinthItA1Bz = BigInt("1392")
		const addressSGGCQ07 = "0x0000000000000000000000000000000000000001"
		const addressyvHmC7J = accounts[4]
		await LIBERAPAYIS6zaAg.whenNotPaused.call({from: accounts[0]});
		const boolEhbPSVG = await LIBERAPAYIS6zaAg.burn.call(uintapCiDNO, {from: accounts[2]});
		const boolJQXvGkb = await LIBERAPAYIS6zaAg.transferFrom.call(addressyvHmC7J, addressSGGCQ07, uinthItA1Bz, {from: accounts[3]});

		await expect(LIBERAPAYIS6zaAg.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYm21kTvQ = await LIBERAPAY.new({from: accounts[2]});
		const uintPgcRw4x = BigInt("171")
		const addresspw8X2Ew = accounts[5]
		const booleWDPfi = await LIBERAPAYm21kTvQ.burn.call(uintPgcRw4x, {from: accounts[2]});
		const uint256tqVdXA3 = await LIBERAPAYm21kTvQ.balanceOf.call(addresspw8X2Ew, {from: accounts[1]});
		await LIBERAPAYm21kTvQ.pause.call({from: accounts[2]});
		await LIBERAPAYm21kTvQ.pause.call({from: accounts[0]});

		assert.equal(booleWDPfi, true)
		assert.equal(uint256tqVdXA3, BigInt("0"))
		await expect(LIBERAPAYm21kTvQ.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsGem5uy = await LIBERAPAY.new({from: accounts[4]});
		const uints0wFstN = BigInt("350")
		const addressWfLFndP = "0x0000000000000000000000000000000000000001"
		const addressXx8hli = accounts[1]
		const uint256fsYohkV = await LIBERAPAYsGem5uy.getNowTime.call({from: accounts[0]});
		const uint256MuwQWOY = await LIBERAPAYsGem5uy.getNowTime.call({from: accounts[1]});
		const booliG056YG = await LIBERAPAYsGem5uy.transfer.call(addressWfLFndP, uints0wFstN, {from: accounts[2]});
		const boolsugXUlE = await LIBERAPAYsGem5uy.freezeAccount.call(addressXx8hli, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256MuwQWOY, BigInt("1630230704"))
		assert.equal(uint256fsYohkV, BigInt("1630230704"))
		await expect(LIBERAPAYsGem5uy.transfer.call(addressWfLFndP, uints0wFstN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsGem5uy = await LIBERAPAY.new({from: accounts[4]});
		const uintF7gk4a = BigInt("1273")
		const addressgv5hjch = accounts[2]
		const addresszGG9ldL = accounts[2]
		const uintEgFrlwF = BigInt("1886")
		const addresst07mk5S = "0x0000000000000000000000000000000000000001"
		await LIBERAPAYsGem5uy.showLockState.call(addressgv5hjch, uintF7gk4a, {from: accounts[1]});
		const addressQFsYX0C = await LIBERAPAYsGem5uy.notFrozen.call(addresszGG9ldL, {from: accounts[2]});
		const booliG056YG = await LIBERAPAYsGem5uy.transfer.call(addresst07mk5S, uintEgFrlwF, {from: accounts[2]});

		await expect(LIBERAPAYsGem5uy.showLockState.call(addressgv5hjch, uintF7gk4a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqovHiM6 = await LIBERAPAY.new({from: accounts[2]});
		const uintt5rWCX = BigInt("621")
		const addressKWGOWcZ = "0x0000000000000000000000000000000000000001"
		const addressdMfWgtL = accounts[1]
		const uintNQJc2XV = BigInt("1151")
		const addressQPq5HgY = accounts[1]
		const addressO3uw66E = accounts[4]
		const uintgqbitI0 = BigInt("1507")
		const addresst1GoO9g = accounts[0]
		const boolYzxZTy = await LIBERAPAYqovHiM6.transfer.call(addressKWGOWcZ, uintt5rWCX, {from: accounts[2]});
		const uint256DzR0gDF = await LIBERAPAYqovHiM6.balanceOf.call(addressdMfWgtL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UZ5oN3 = await LIBERAPAYqovHiM6.getNowTime.call({from: accounts[3]});
		const boolMeBfygb = await LIBERAPAYqovHiM6.mint.call(addressQPq5HgY, uintNQJc2XV, {from: accounts[1]});
		const uint256hb7MGuW = await LIBERAPAYqovHiM6.currentBalanceOf.call(addressO3uw66E, {from: accounts[1]});
		const boolLaWFKcW = await LIBERAPAYqovHiM6.burnFrom.call(addresst1GoO9g, uintgqbitI0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYzxZTy, true)
		assert.equal(uint256DzR0gDF, BigInt("0"))
		assert.equal(uint256UZ5oN3, BigInt("1630230696"))
		await expect(LIBERAPAYqovHiM6.mint.call(addressQPq5HgY, uintNQJc2XV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsGem5uy = await LIBERAPAY.new({from: accounts[4]});
		const uintFSxvE7F = BigInt("1888")
		const addressO2SIjRV = "0x00000000000000000000000000000000000000-1"
		const addressdpxr90s = accounts[2]
		const uintQJXApw = BigInt("83")
		const addressaM93EVm = accounts[1]
		const addressgqrt5jC = accounts[2]
		const booliG056YG = await LIBERAPAYsGem5uy.transfer.call(addressO2SIjRV, uintFSxvE7F, {from: accounts[2]});
		const boolQKmoXgw = await LIBERAPAYsGem5uy.freezeAccount.call(addressdpxr90s, {from: accounts[3]});
		const booliHjhRvL = await LIBERAPAYsGem5uy.transfer.call(addressaM93EVm, uintQJXApw, {from: accounts[4]});
		const addressgmXbIOF = await LIBERAPAYsGem5uy.transferOwnership.call(addressgqrt5jC, {from: accounts[3]});

		await expect(LIBERAPAYsGem5uy.transfer.call(addressO2SIjRV, uintFSxvE7F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsGem5uy = await LIBERAPAY.new({from: accounts[4]});
		const addressPKFvSt = accounts[3]
		const addresssQkbRuX = accounts[0]
		const uintMLxKfj8 = BigInt("1888")
		const addressv1YP59 = "0x0000000000000000000000000000000000000000"
		const uint256m6kKj2P = await LIBERAPAYsGem5uy.allowance.call(addresssQkbRuX, addressPKFvSt, {from: accounts[0]});
		const booliG056YG = await LIBERAPAYsGem5uy.transfer.call(addressv1YP59, uintMLxKfj8, {from: accounts[2]});

		assert.equal(uint256m6kKj2P, BigInt("0"))
		await expect(LIBERAPAYsGem5uy.transfer.call(addressv1YP59, uintMLxKfj8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJZDtB8n = await LIBERAPAY.new({from: accounts[4]});
		const addressKMFF78k = accounts[3]
		const uint256QwCuGpC = await LIBERAPAYJZDtB8n.currentBalanceOf.call(addressKMFF78k, {from: accounts[1]});
		const uint256WjDTyi6 = await LIBERAPAYJZDtB8n.getNowTime.call({from: accounts[5]});
		await LIBERAPAYJZDtB8n.f.call({from: accounts[3]});
		await LIBERAPAYJZDtB8n.unpause.call({from: accounts[4]});

		assert.equal(uint256QwCuGpC, BigInt("0"))
		assert.equal(uint256WjDTyi6, BigInt("1630230695"))
		await expect(LIBERAPAYJZDtB8n.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsGem5uy = await LIBERAPAY.new({from: accounts[4]});
		const uintNRIfZar = BigInt("1266")
		const addressvtLGNM = accounts[0]
		const uintu40c2JU = BigInt("1846")
		const addressgteAT0r = "0x0000000000000000000000000000000000000000"
		const boolF8iLhwO = await LIBERAPAYsGem5uy.approve.call(addressvtLGNM, uintNRIfZar, {from: accounts[4]});
		const booliG056YG = await LIBERAPAYsGem5uy.transfer.call(addressgteAT0r, uintu40c2JU, {from: accounts[2]});

		assert.equal(boolF8iLhwO, true)
		await expect(LIBERAPAYsGem5uy.transfer.call(addressgteAT0r, uintu40c2JU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgAhsEff = await LIBERAPAY.new({from: accounts[4]});
		const uint5R4ZO7 = BigInt("1509")
		const addressfIXEcjY = accounts[3]
		const addressciVpf9Q = accounts[0]
		const addressqVRIq0W = accounts[2]
		const boolanS7ReZ = await LIBERAPAYgAhsEff.approve.call(addressfIXEcjY, uint5R4ZO7, {from: accounts[4]});
		const uint256VZ5L6xM = await LIBERAPAYgAhsEff.allowance.call(addressqVRIq0W, addressciVpf9Q, {from: accounts[3]});
		const uint256TIlUWpl = await LIBERAPAYgAhsEff.totalSupply.call({from: accounts[2]});

		assert.equal(boolanS7ReZ, true)
		assert.equal(uint256TIlUWpl, BigInt("3000000000000000000000000000"))
		assert.equal(uint256VZ5L6xM, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnHlLTlY = await LIBERAPAY.new({from: accounts[4]});
		const uintpabtUSI = BigInt("132")
		const addresso8W26hF = accounts[2]
		const addressn1MJvYH = accounts[4]
		const uintnqAtXyc = BigInt("484")
		const addressl6R1IlE = accounts[3]
		const bool9oGxXa = await LIBERAPAYnHlLTlY.transferFrom.call(addressn1MJvYH, addresso8W26hF, uintpabtUSI, {from: accounts[0]});
		await LIBERAPAYnHlLTlY.pause.call({from: accounts[1]});
		await LIBERAPAYnHlLTlY.showLockState.call(addressl6R1IlE, uintnqAtXyc, {from: accounts[0]});

		await expect(LIBERAPAYnHlLTlY.transferFrom.call(addressn1MJvYH, addresso8W26hF, uintpabtUSI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIS6zaAg = await LIBERAPAY.new({from: accounts[1]});
		const uintUkVUCYk = BigInt("1893")
		const address8a9M9f = "0x0000000000000000000000000000000000000001"
		const uintZKtcdW9 = BigInt("733")
		const addressF2yqYE = accounts[1]
		const boolxIAlUGi = await LIBERAPAYIS6zaAg.distribute.call(address8a9M9f, uintUkVUCYk, {from: accounts[1]});
		const boolFltwd1k = await LIBERAPAYIS6zaAg.transfer.call(addressF2yqYE, uintZKtcdW9, {from: accounts[3]});

		assert.equal(boolxIAlUGi, true)
		await expect(LIBERAPAYIS6zaAg.transfer.call(addressF2yqYE, uintZKtcdW9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJZDtB8n = await LIBERAPAY.new({from: accounts[4]});
		const addressFXPIfd0 = "0x0000000000000000000000000000000000000001"
		const addressAK6vjYo = accounts[3]
		const addressZMRu7dx = accounts[4]
		const boolo4HxYDn = await LIBERAPAYJZDtB8n.unfreezeAccount.call(addressFXPIfd0, {from: accounts[4]});
		const uint256QwCuGpC = await LIBERAPAYJZDtB8n.currentBalanceOf.call(addressAK6vjYo, {from: accounts[1]});
		const addressREJbuc = await LIBERAPAYJZDtB8n.notFrozen.call(addressZMRu7dx, {from: accounts[2]});

		await expect(LIBERAPAYJZDtB8n.unfreezeAccount.call(addressFXPIfd0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYF867rSS = await LIBERAPAY.new({from: accounts[5]});
		const uintOyE7LLB = BigInt("431")
		const addressL5O0xpd = "0x0000000000000000000000000000000000000001"
		const addressvJljUs = accounts[4]
		const addressT593mA = accounts[5]
		const uintI9soNa = BigInt("1980")
		const addressgtwVccF = accounts[1]
		const boolkhhRP1d = await LIBERAPAYF867rSS.unlock.call(addressL5O0xpd, uintOyE7LLB, {from: accounts[5]});
		const uint256hJwvIrZ = await LIBERAPAYF867rSS.totalSupply.call({from: accounts[0]});
		const boolCpXqc5j = await LIBERAPAYF867rSS.unfreezeAccount.call(addressvJljUs, {from: accounts[2]});
		const addressPBElZtH = await LIBERAPAYF867rSS.upgradeTo.call(addressT593mA, {from: accounts[0]});
		await LIBERAPAYF867rSS.whenNotPaused.call({from: accounts[5]});
		const boolwQTSUOZ = await LIBERAPAYF867rSS.distribute.call(addressgtwVccF, uintI9soNa, {from: accounts[2]});

		await expect(LIBERAPAYF867rSS.unlock.call(addressL5O0xpd, uintOyE7LLB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnHlLTlY = await LIBERAPAY.new({from: accounts[4]});
		const uinte6flPEf = BigInt("2027")
		const addressqFVGVFS = accounts[1]
		const uintceNyjjj = BigInt("480")
		const addressR3iYAV5 = accounts[3]
		const boolXR5bDjh = await LIBERAPAYnHlLTlY.burnFrom.call(addressqFVGVFS, uinte6flPEf, {from: accounts[4]});
		await LIBERAPAYnHlLTlY.showLockState.call(addressR3iYAV5, uintceNyjjj, {from: accounts[0]});

		await expect(LIBERAPAYnHlLTlY.burnFrom.call(addressqFVGVFS, uinte6flPEf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJZDtB8n = await LIBERAPAY.new({from: accounts[4]});
		const addressn7rgxKQ = accounts[0]
		const addressipPi3yW = accounts[4]
		const addressfjvRHY2 = await LIBERAPAYJZDtB8n.transferOwnership.call(addressn7rgxKQ, {from: accounts[4]});
		await LIBERAPAYJZDtB8n.f.call({from: accounts[0]});
		const uint256QwCuGpC = await LIBERAPAYJZDtB8n.currentBalanceOf.call(addressipPi3yW, {from: accounts[1]});

		await expect(LIBERAPAYJZDtB8n.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYm21kTvQ = await LIBERAPAY.new({from: accounts[2]});
		const addressWvjvaVq = accounts[4]
		const addressyXbmIQ6 = accounts[6]
		const boolQ5ty1Jq = await LIBERAPAYm21kTvQ.freezeAccount.call(addressWvjvaVq, {from: accounts[2]});
		const uint256tqVdXA3 = await LIBERAPAYm21kTvQ.balanceOf.call(addressyXbmIQ6, {from: accounts[1]});

		assert.equal(boolQ5ty1Jq, true)
		assert.equal(uint256tqVdXA3, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMx2PS59 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjgQztLR = BigInt("1898")
		const addressviemlNu = accounts[1]
		const uintaNHLtj6 = BigInt("222")
		const uintcThWayv = BigInt("245")
		const addressVcudtFH = accounts[2]
		const boolfSmz0xr = await LIBERAPAYMx2PS59.unlock.call(addressviemlNu, uintjgQztLR, {from: accounts[4]});
		const boolAcJ9Lzc = await LIBERAPAYMx2PS59.lock.call(addressVcudtFH, uintcThWayv, uintaNHLtj6, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnHlLTlY = await LIBERAPAY.new({from: accounts[4]});
		const addressDgk5zeb = accounts[2]
		const uintyNd3qAt = BigInt("109")
		const addressBr8Rsbe = accounts[0]
		const uintkjlk8Kq = BigInt("1972")
		const uintmCtRyZs = BigInt("1542")
		const addressbGZWim6 = accounts[3]
		const addressMVx9Tq4 = accounts[3]
		const addressW9cRqK3 = await LIBERAPAYnHlLTlY.upgradeTo.call(addressDgk5zeb, {from: accounts[4]});
		const boolJMngtV = await LIBERAPAYnHlLTlY.distribute.call(addressBr8Rsbe, uintyNd3qAt, {from: accounts[3]});
		const booleuM5Lu = await LIBERAPAYnHlLTlY.burn.call(uintkjlk8Kq, {from: accounts[4]});
		const boolqY8MzwE = await LIBERAPAYnHlLTlY.transferFrom.call(addressMVx9Tq4, addressbGZWim6, uintmCtRyZs, {from: accounts[2]});

		await expect(LIBERAPAYnHlLTlY.distribute.call(addressBr8Rsbe, uintyNd3qAt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})