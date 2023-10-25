const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDqKcO61 = await LIBERAPAY.new({from: accounts[4]});
		const uintzKoAzWR = BigInt("1309")
		const addressM8TUX4n = accounts[4]
		const addressgfKsrhC = accounts[0]
		const uintP0C8Q7 = BigInt("1549")
		const address9jvc1H = accounts[4]
		const addressBd6nGBR = accounts[1]
		const boolxStSFDC = await LIBERAPAYDqKcO61.transferFrom.call(addressgfKsrhC, addressM8TUX4n, uintzKoAzWR, {from: accounts[3]});
		const boolO49vudo = await LIBERAPAYDqKcO61.transfer.call(address9jvc1H, uintP0C8Q7, {from: accounts[5]});
		const uint256AjpCMkZ = await LIBERAPAYDqKcO61.currentBalanceOf.call(addressBd6nGBR, {from: accounts[3]});
		await LIBERAPAYDqKcO61.onlyOwner.call({from: accounts[4]});
		await LIBERAPAYDqKcO61.unpause.call({from: accounts[5]});

		await expect(LIBERAPAYDqKcO61.transferFrom.call(addressgfKsrhC, addressM8TUX4n, uintzKoAzWR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYe4QSCzo = await LIBERAPAY.new({from: accounts[5]});
		const uintnNoKwrA = BigInt("103")
		const addressQWEP2q3 = accounts[5]
		const addressBsfV6yc = accounts[1]
		const addressf18uzqE = accounts[2]
		const uint256t2XRog = await LIBERAPAYe4QSCzo.getNowTime.call({from: accounts[0]});
		const boolBrkiTtU = await LIBERAPAYe4QSCzo.distribute.call(addressQWEP2q3, uintnNoKwrA, {from: accounts[3]});
		const boolGsTFoiE = await LIBERAPAYe4QSCzo.acceptOwnership.call({from: accounts[5]});
		const addressE57hfnn = await LIBERAPAYe4QSCzo.transferOwnership.call(addressBsfV6yc, {from: accounts[3]});
		await LIBERAPAYe4QSCzo.whenNotPaused.call({from: accounts[0]});
		const uint256kJi6HcR = await LIBERAPAYe4QSCzo.currentBalanceOf.call(addressf18uzqE, {from: accounts[0]});

		assert.equal(uint256t2XRog, BigInt("1630229529"))
		await expect(LIBERAPAYe4QSCzo.distribute.call(addressQWEP2q3, uintnNoKwrA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOZwJmds = await LIBERAPAY.new({from: accounts[2]});
		const addressQCKado9 = accounts[1]
		const addressHM71FNW = accounts[1]
		const uint256psRmGRK = await LIBERAPAYOZwJmds.currentBalanceOf.call(addressQCKado9, {from: accounts[2]});
		await LIBERAPAYOZwJmds.f.call({from: accounts[0]});
		const uint256SFZEYtb = await LIBERAPAYOZwJmds.getNowTime.call({from: accounts[2]});
		await LIBERAPAYOZwJmds.whenNotPaused.call({from: accounts[0]});
		await LIBERAPAYOZwJmds.whenPaused.call({from: accounts[1]});
		const boolvCrnsLS = await LIBERAPAYOZwJmds.unfreezeAccount.call(addressHM71FNW, {from: accounts[2]});

		assert.equal(uint256psRmGRK, BigInt("0"))
		await expect(LIBERAPAYOZwJmds.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrRE2P43 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz2CY3iG = BigInt("1027")
		const addressha4HcN6 = accounts[1]
		const addressqDGDO3Z = "0x0000000000000000000000000000000000000001"
		const addressXlPARHd = accounts[4]
		const addressiyeXFm = accounts[2]
		const boolHU0X3qS = await LIBERAPAYrRE2P43.approve.call(addressha4HcN6, uintz2CY3iG, {from: accounts[2]});
		const boolMdr1W1e = await LIBERAPAYrRE2P43.unfreezeAccount.call(addressqDGDO3Z, {from: accounts[3]});
		const uint256QHL3S30 = await LIBERAPAYrRE2P43.allowance.call(addressiyeXFm, addressXlPARHd, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYERLiCE7 = await LIBERAPAY.new({from: accounts[3]});
		const uintIsW5IG = BigInt("1239")
		const addressgsHDeTz = "0x0000000000000000000000000000000000000001"
		const uintzYnZ1PU = BigInt("658")
		const addressXEgeDtp = accounts[4]
		const uintLk3XJMS = BigInt("1517")
		const addressCtbykVb = "0x0000000000000000000000000000000000000001"
		const boolu5cienP = await LIBERAPAYERLiCE7.burnFrom.call(addressgsHDeTz, uintIsW5IG, {from: "0x0000000000000000000000000000000000000001"});
		const boolVX8awsM = await LIBERAPAYERLiCE7.unlock.call(addressXEgeDtp, uintzYnZ1PU, {from: accounts[5]});
		await LIBERAPAYERLiCE7.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcpVoFzJ = await LIBERAPAYERLiCE7.decreaseAllowance.call(addressCtbykVb, uintLk3XJMS, {from: accounts[0]});

		await expect(LIBERAPAYERLiCE7.burnFrom.call(addressgsHDeTz, uintIsW5IG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDqKcO61 = await LIBERAPAY.new({from: accounts[4]});
		const uintuwO0f0g = BigInt("1549")
		const addressXpN4oW4 = accounts[4]
		const addressxhQT0ja = accounts[1]
		const boolO49vudo = await LIBERAPAYDqKcO61.transfer.call(addressXpN4oW4, uintuwO0f0g, {from: accounts[5]});
		const uint256AjpCMkZ = await LIBERAPAYDqKcO61.currentBalanceOf.call(addressxhQT0ja, {from: accounts[3]});
		await LIBERAPAYDqKcO61.unpause.call({from: accounts[5]});

		await expect(LIBERAPAYDqKcO61.transfer.call(addressXpN4oW4, uintuwO0f0g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHMTB5NS = await LIBERAPAY.new({from: accounts[1]});
		const addresseU1oZYr = accounts[4]
		const uintlWe1Wi = BigInt("517")
		const address4UUh1Y = accounts[3]
		await LIBERAPAYHMTB5NS.onlyNewOwner.call({from: accounts[3]});
		const addressstgQKc = await LIBERAPAYHMTB5NS.upgradeTo.call(addresseU1oZYr, {from: accounts[3]});
		const boolmIWXKC = await LIBERAPAYHMTB5NS.transfer.call(address4UUh1Y, uintlWe1Wi, {from: accounts[2]});

		await expect(LIBERAPAYHMTB5NS.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4lnge = await LIBERAPAY.new({from: accounts[3]});
		const addresssvTGknC = accounts[2]
		const addressl9vAzlS = accounts[1]
		const addressLb4yD2K = "0x0000000000000000000000000000000000000001"
		const uintDEmISnS = BigInt("1150")
		const addressm7PmSM = accounts[0]
		const uint256y8LKjAR = await LIBERAPAYpt4lnge.allowance.call(addressl9vAzlS, addresssvTGknC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GhIzRSS = await LIBERAPAYpt4lnge.currentBalanceOf.call(addressLb4yD2K, {from: accounts[4]});
		await LIBERAPAYpt4lnge.showLockState.call(addressm7PmSM, uintDEmISnS, {from: accounts[4]});

		assert.equal(uint256GhIzRSS, BigInt("0"))
		assert.equal(uint256y8LKjAR, BigInt("0"))
		await expect(LIBERAPAYpt4lnge.showLockState.call(addressm7PmSM, uintDEmISnS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4lnge = await LIBERAPAY.new({from: accounts[3]});
		const uint8eMR7Z = BigInt("1421")
		const addresszqO6lvu = accounts[0]
		const addresso2nyUIw = accounts[2]
		const addressj4NMf3c = accounts[1]
		const addressfMxxU0w = accounts[1]
		const uintkmoHpbn = BigInt("1150")
		const addresser1zXa = accounts[0]
		await LIBERAPAYpt4lnge.showLockState.call(addresszqO6lvu, uint8eMR7Z, {from: accounts[1]});
		const uint256y8LKjAR = await LIBERAPAYpt4lnge.allowance.call(addressj4NMf3c, addresso2nyUIw, {from: "0x0000000000000000000000000000000000000001"});
		const uint2569uHIZo = await LIBERAPAYpt4lnge.balanceOf.call(addressfMxxU0w, {from: accounts[1]});
		await LIBERAPAYpt4lnge.showLockState.call(addresser1zXa, uintkmoHpbn, {from: accounts[4]});

		await expect(LIBERAPAYpt4lnge.showLockState.call(addresszqO6lvu, uint8eMR7Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkf2zrrW = await LIBERAPAY.new({from: accounts[2]});
		const uintKWodqDm = BigInt("1609")
		const address22Dovy = accounts[4]
		const boolOtSWDq3 = await LIBERAPAYkf2zrrW.burn.call(uintKWodqDm, {from: accounts[2]});
		const addressL9Hgowl = await LIBERAPAYkf2zrrW.notFrozen.call(address22Dovy, {from: accounts[2]});

		assert.equal(boolOtSWDq3, true)
		await expect(LIBERAPAYkf2zrrW.notFrozen.call(address22Dovy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDqKcO61 = await LIBERAPAY.new({from: accounts[4]});
		const uintQmA8vn = BigInt("1042")
		const addressmRfj3l3 = accounts[2]
		const uintJF2zLiO = BigInt("1309")
		const addressl3IAUtl = accounts[4]
		const addressP2Z7rHb = accounts[0]
		const uintAIcuWY9 = BigInt("1549")
		const addressvk92QpQ = accounts[5]
		const boolhJKgiZG = await LIBERAPAYDqKcO61.mint.call(addressmRfj3l3, uintQmA8vn, {from: accounts[4]});
		const boolxStSFDC = await LIBERAPAYDqKcO61.transferFrom.call(addressP2Z7rHb, addressl3IAUtl, uintJF2zLiO, {from: accounts[3]});
		const boolO49vudo = await LIBERAPAYDqKcO61.transfer.call(addressvk92QpQ, uintAIcuWY9, {from: accounts[5]});
		await LIBERAPAYDqKcO61.unpause.call({from: accounts[5]});

		await expect(LIBERAPAYDqKcO61.mint.call(addressmRfj3l3, uintQmA8vn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYg8iZoNS = await LIBERAPAY.new({from: accounts[2]});
		const uintU4P0nGB = BigInt("1553")
		const addresst6ddTAc = accounts[1]
		const uintRTTk7K = BigInt("12")
		const addresslR00xxG = accounts[1]
		const addresshEadu3a = accounts[4]
		const booljQB9q3f = await LIBERAPAYg8iZoNS.increaseAllowance.call(addresst6ddTAc, uintU4P0nGB, {from: accounts[5]});
		const booltWrvP96 = await LIBERAPAYg8iZoNS.transferFrom.call(addresshEadu3a, addresslR00xxG, uintRTTk7K, {from: accounts[5]});

		assert.equal(booljQB9q3f, true)
		await expect(LIBERAPAYg8iZoNS.transferFrom.call(addresshEadu3a, addresslR00xxG, uintRTTk7K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4lnge = await LIBERAPAY.new({from: accounts[3]});
		const uintfn2I7Ax = BigInt("1421")
		const addressnOVg9GT = accounts[0]
		const addressIm1UeU2 = accounts[2]
		const addressm4zHrk = accounts[1]
		const addressPPlb76Q = accounts[1]
		const uintJ2a86Kn = BigInt("1188")
		const addressS4dEIdD = accounts[0]
		const uintwhPE3B = BigInt("628")
		const address5tNGbP = accounts[3]
		await LIBERAPAYpt4lnge.showLockState.call(addressnOVg9GT, uintfn2I7Ax, {from: accounts[1]});
		const uint256y8LKjAR = await LIBERAPAYpt4lnge.allowance.call(addressm4zHrk, addressIm1UeU2, {from: "0x0000000000000000000000000000000000000001"});
		const uint2569uHIZo = await LIBERAPAYpt4lnge.balanceOf.call(addressPPlb76Q, {from: accounts[1]});
		await LIBERAPAYpt4lnge.showLockState.call(addressS4dEIdD, uintJ2a86Kn, {from: accounts[4]});
		const boolXOIxMM = await LIBERAPAYpt4lnge.unlock.call(address5tNGbP, uintwhPE3B, {from: accounts[3]});

		await expect(LIBERAPAYpt4lnge.showLockState.call(addressnOVg9GT, uintfn2I7Ax, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkLtoFv = await LIBERAPAY.new({from: accounts[0]});
		const addressk2s6WGZ = accounts[2]
		const addressY9VM4T5 = accounts[0]
		const uintPiBBc5J = BigInt("2036")
		const addressZyvoVgq = accounts[4]
		const uint256FkLMaVS = await LIBERAPAYkLtoFv.allowance.call(addressY9VM4T5, addressk2s6WGZ, {from: accounts[1]});
		const boolatITBS9 = await LIBERAPAYkLtoFv.decreaseAllowance.call(addressZyvoVgq, uintPiBBc5J, {from: accounts[5]});

		assert.equal(uint256FkLMaVS, BigInt("0"))
		await expect(LIBERAPAYkLtoFv.decreaseAllowance.call(addressZyvoVgq, uintPiBBc5J, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDqKcO61 = await LIBERAPAY.new({from: accounts[4]});
		const addressiK3Bhdt = accounts[3]
		const uinteTWhzf = BigInt("1415")
		const addressXQaYtXL = accounts[4]
		const uintHxkoWb = BigInt("1549")
		const addresszvWTcuL = accounts[5]
		const uintx8BPmcL = BigInt("625")
		const addressSIZZqbL = accounts[0]
		const boolVBig0oq = await LIBERAPAYDqKcO61.unfreezeAccount.call(addressiK3Bhdt, {from: accounts[4]});
		const booldW2Wza = await LIBERAPAYDqKcO61.transfer.call(addressXQaYtXL, uinteTWhzf, {from: "0x0000000000000000000000000000000000000001"});
		const boolO49vudo = await LIBERAPAYDqKcO61.transfer.call(addresszvWTcuL, uintHxkoWb, {from: accounts[5]});
		await LIBERAPAYDqKcO61.showLockState.call(addressSIZZqbL, uintx8BPmcL, {from: accounts[3]});

		await expect(LIBERAPAYDqKcO61.unfreezeAccount.call(addressiK3Bhdt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYg8iZoNS = await LIBERAPAY.new({from: accounts[2]});
		const uintoJhc87P = BigInt("1553")
		const addressKo0hXC4 = accounts[1]
		const uintMSOU94Q = BigInt("0")
		const addressoVR1yMh = accounts[1]
		const addresshWXKuxj = accounts[4]
		const booljQB9q3f = await LIBERAPAYg8iZoNS.increaseAllowance.call(addressKo0hXC4, uintoJhc87P, {from: accounts[5]});
		const uint256SdlBPxD = await LIBERAPAYg8iZoNS.totalSupply.call({from: accounts[0]});
		const booltWrvP96 = await LIBERAPAYg8iZoNS.transferFrom.call(addresshWXKuxj, addressoVR1yMh, uintMSOU94Q, {from: accounts[5]});

		assert.equal(booljQB9q3f, true)
		assert.equal(booltWrvP96, true)
		assert.equal(uint256SdlBPxD, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYERLiCE7 = await LIBERAPAY.new({from: accounts[3]});
		const addresserHxydw = accounts[3]
		const uinteyQRgei = BigInt("622")
		const addressVrLXIFu = accounts[5]
		const addressZvL6tso = await LIBERAPAYERLiCE7.upgradeTo.call(addresserHxydw, {from: accounts[3]});
		const boolVX8awsM = await LIBERAPAYERLiCE7.unlock.call(addressVrLXIFu, uinteyQRgei, {from: accounts[5]});

		await expect(LIBERAPAYERLiCE7.unlock.call(addressVrLXIFu, uinteyQRgei, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4lnge = await LIBERAPAY.new({from: accounts[3]});
		const addressAXHbSNV = accounts[1]
		const uintHFZlTBN = BigInt("799")
		const addressux1df7y = accounts[0]
		const uinthMcw7g = BigInt("1543")
		const addressyUmDXAe = accounts[3]
		const uintu6lNLuj = BigInt("1150")
		const addressXsoFSZg = accounts[0]
		const uint2569uHIZo = await LIBERAPAYpt4lnge.balanceOf.call(addressAXHbSNV, {from: accounts[1]});
		const boolHzMxp96 = await LIBERAPAYpt4lnge.approve.call(addressux1df7y, uintHFZlTBN, {from: "0x0000000000000000000000000000000000000001"});
		const boolOOmd87o = await LIBERAPAYpt4lnge.distribute.call(addressyUmDXAe, uinthMcw7g, {from: accounts[5]});
		await LIBERAPAYpt4lnge.showLockState.call(addressXsoFSZg, uintu6lNLuj, {from: accounts[4]});

		assert.equal(boolHzMxp96, true)
		assert.equal(uint2569uHIZo, BigInt("0"))
		await expect(LIBERAPAYpt4lnge.distribute.call(addressyUmDXAe, uinthMcw7g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYERLiCE7 = await LIBERAPAY.new({from: accounts[3]});
		const uintS9Ma7gj = BigInt("323")
		const uinthH8c6DD = BigInt("1912")
		const addressOX3ZfK = accounts[4]
		const addresspFJ6spp = accounts[5]
		const uintEAQxXSY = BigInt("622")
		const addressN1Q8qGN = accounts[5]
		const boolxgy3G0Y = await LIBERAPAYERLiCE7.lock.call(addressOX3ZfK, uinthH8c6DD, uintS9Ma7gj, {from: accounts[3]});
		const uint256ScY3HTC = await LIBERAPAYERLiCE7.currentBalanceOf.call(addresspFJ6spp, {from: accounts[2]});
		await LIBERAPAYERLiCE7.onlyNewOwner.call({from: accounts[3]});
		const boolVX8awsM = await LIBERAPAYERLiCE7.unlock.call(addressN1Q8qGN, uintEAQxXSY, {from: accounts[5]});

		await expect(LIBERAPAYERLiCE7.lock.call(addressOX3ZfK, uinthH8c6DD, uintS9Ma7gj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYg8iZoNS = await LIBERAPAY.new({from: accounts[2]});
		const uintYPrepzW = BigInt("12")
		const addressI7bTZBu = accounts[2]
		const addressSQ7znh = accounts[4]
		await LIBERAPAYg8iZoNS.pause.call({from: accounts[2]});
		const booltWrvP96 = await LIBERAPAYg8iZoNS.transferFrom.call(addressSQ7znh, addressI7bTZBu, uintYPrepzW, {from: accounts[5]});

		await expect(LIBERAPAYg8iZoNS.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYg8iZoNS = await LIBERAPAY.new({from: accounts[2]});
		const uintCCcMwRe = BigInt("947")
		const addressQB8qJD = accounts[1]
		const uintRrMD6WW = BigInt("454")
		const addressvJ5crKQ = accounts[1]
		const addresstamDG2d = accounts[4]
		const booljndLRMy = await LIBERAPAYg8iZoNS.distribute.call(addressQB8qJD, uintCCcMwRe, {from: accounts[2]});
		const booltWrvP96 = await LIBERAPAYg8iZoNS.transferFrom.call(addresstamDG2d, addressvJ5crKQ, uintRrMD6WW, {from: accounts[5]});

		assert.equal(booljndLRMy, true)
		await expect(LIBERAPAYg8iZoNS.transferFrom.call(addresstamDG2d, addressvJ5crKQ, uintRrMD6WW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4lnge = await LIBERAPAY.new({from: accounts[3]});
		const uintkIy4OlN = BigInt("175")
		const addressS3yX5vq = accounts[4]
		const addressTSX0cKB = accounts[3]
		const uinteh7JDRZ = BigInt("1182")
		const addressjizkJAO = accounts[0]
		const bool8Ym4yI = await LIBERAPAYpt4lnge.increaseAllowance.call(addressS3yX5vq, uintkIy4OlN, {from: accounts[4]});
		const addressufyJOS1 = await LIBERAPAYpt4lnge.transferOwnership.call(addressTSX0cKB, {from: accounts[3]});
		await LIBERAPAYpt4lnge.showLockState.call(addressjizkJAO, uinteh7JDRZ, {from: accounts[4]});

		assert.equal(bool8Ym4yI, true)
		await expect(LIBERAPAYpt4lnge.showLockState.call(addressjizkJAO, uinteh7JDRZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4lnge = await LIBERAPAY.new({from: accounts[3]});
		const uintEj7CZZz = BigInt("1175")
		const addressk5Y9bw4 = accounts[0]
		const uintlNKQX8l = BigInt("745")
		const addressOmHdPT = accounts[0]
		const addressL3aQPRS = "0x0000000000000000000000000000000000000001"
		await LIBERAPAYpt4lnge.showLockState.call(addressk5Y9bw4, uintEj7CZZz, {from: accounts[4]});
		const boolhQyqRl = await LIBERAPAYpt4lnge.approve.call(addressOmHdPT, uintlNKQX8l, {from: accounts[4]});
		const boolZKRI9MF = await LIBERAPAYpt4lnge.freezeAccount.call(addressL3aQPRS, {from: accounts[3]});

		await expect(LIBERAPAYpt4lnge.showLockState.call(addressk5Y9bw4, uintEj7CZZz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})