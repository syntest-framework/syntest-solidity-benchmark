const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringAK0XWYe = "DAPY3485aXLC7oqHYusxD468s6zxVhxJlENUQftgk3HOOxggMECH"
		const stringkC1S4u7 = "mGIvmSPqicFS5ovkPWjHH9bQqkylxrlBM3Ush8sy3w6o9wPu4fHf4W06VU8kixGC5vidyqd53eQdWwIA4atiDtzPTX64gx7OUf"
		const uintC4VCtr5 = BigInt("241")
		const NALKv9MwEV = await NAL.new(stringAK0XWYe, stringkC1S4u7, uintC4VCtr5, {from: accounts[2]});
		const uintgpYG1Ck = BigInt("154")
		const addressQRiMRnO = accounts[1]
		const uinttn3ebex = BigInt("1775")
		const uintLPW4gDY = BigInt("1569")
		const addressYzGjQkL = accounts[0]
		await NALKv9MwEV.renounceAdmin.call({from: accounts[3]});
		const boolxcbm7aW = await NALKv9MwEV.approve.call(addressQRiMRnO, uintgpYG1Ck, {from: accounts[1]});
		const uint256XUvLo0u = await NALKv9MwEV.burn.call(uinttn3ebex, {from: accounts[0]});
		await NALKv9MwEV.onlyAdmin.call({from: accounts[3]});
		const boolcnFjAWL = await NALKv9MwEV.transfer.call(addressYzGjQkL, uintLPW4gDY, {from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressIP2TSLu = accounts[1]
		const addresspQV3LE = accounts[1]
		const boolwZW0OW = await NALnrtcFX0.isOwner.call(addressIP2TSLu, {from: accounts[4]});
//		const addressBgAKhTI = await NALnrtcFX0.notFrozen.call(addresspQV3LE, {from: accounts[0]});
//		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});

		assert.equal(boolwZW0OW, false)
		await expect(NALnrtcFX0.notFrozen.call(addresspQV3LE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALPdju25H = await NAL.new({from: accounts[4]});
		const uintieB2Kjl = BigInt("1400")
		const addresszSndpnI = accounts[3]
		const addressImuozV = accounts[5]
		const addresszWs9CDD = accounts[2]
		const uintTd2b1eU = BigInt("1941")
		const addressUBxwPs = accounts[1]
		const addressFpJGUZ = accounts[0]
		const uintdZ4ROXh = BigInt("1312")
		const addressbvFR5rl = accounts[1]
		const addresskavu4cO = accounts[5]
		const boolFKlYShR = await NALPdju25H.transfer.call(addresszSndpnI, uintieB2Kjl, {from: accounts[4]});
//		const addressJjFcLVV = await NALPdju25H.notFrozen.call(addressImuozV, {from: accounts[1]});
//		const address3Jy7rn = await NALPdju25H.notFrozen.call(addresszWs9CDD, {from: accounts[1]});
//		const boolB8bkmvc = await NALPdju25H.increaseAllowance.call(addressUBxwPs, uintTd2b1eU, {from: accounts[0]});
//		const addressqnaE4VL = await NALPdju25H.addAdmin.call(addressFpJGUZ, {from: accounts[3]});
//		const boolye2JUYE = await NALPdju25H.transferFrom.call(addresskavu4cO, addressbvFR5rl, uintdZ4ROXh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFKlYShR, true)
		await expect(NALPdju25H.notFrozen.call(addressImuozV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsl8ixHR = await NAL.new({from: accounts[3]});
		const addressnV62mQE = accounts[3]
		const uintjzevLBh = BigInt("1371")
		const addressGjBo0U = accounts[4]
		const uintgpBw6CT = BigInt("656")
		const addressX11lOdw = accounts[0]
		const addressU5KnWXE = accounts[1]
		const uintiIzalFY = BigInt("1680")
		const uinta3j4qcE = BigInt("1055")
		const addresswhFwf2c = accounts[2]
		const boolWK642CF = await NALsl8ixHR.isOwner.call(addressnV62mQE, {from: accounts[5]});
//		const addresspLtxp3P = await NALsl8ixHR.burnFrom.call(addressGjBo0U, uintjzevLBh, {from: accounts[0]});
//		const boolA5nxGvq = await NALsl8ixHR.transferFrom.call(addressU5KnWXE, addressX11lOdw, uintgpBw6CT, {from: accounts[4]});
//		const boolPM01jCU = await NALsl8ixHR.lock.call(addresswhFwf2c, uinta3j4qcE, uintiIzalFY, {from: accounts[2]});

		assert.equal(boolWK642CF, true)
		await expect(NALsl8ixHR.burnFrom.call(addressGjBo0U, uintjzevLBh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALp6RcGD7 = await NAL.new({from: accounts[3]});
		const addressCIMGIQ = accounts[3]
		const uintsmeA9u = BigInt("988")
		const addresshptNbnU = accounts[1]
		const addressHyGuutj = accounts[2]
		const uintSUWgHtw = BigInt("1953")
		const addressl5mYwyg = accounts[5]
		const booliFPM0I7 = await NALp6RcGD7.isAdmin.call(addressCIMGIQ, {from: accounts[2]});
		const stringe36C4WL = await NALp6RcGD7.symbol.call({from: accounts[0]});
//		const boolLVZnfSw = await NALp6RcGD7.transferFrom.call(addressHyGuutj, addresshptNbnU, uintsmeA9u, {from: "0x0000000000000000000000000000000000000001"});
//		await NALp6RcGD7.onlyAdmin.call({from: accounts[2]});
//		const boolAXtRjk = await NALp6RcGD7.unlock.call(addressl5mYwyg, uintSUWgHtw, {from: accounts[5]});

		assert.equal(booliFPM0I7, true)
		assert.equal(stringe36C4WL, "NAL")
		await expect(NALp6RcGD7.transferFrom.call(addressHyGuutj, addresshptNbnU, uintsmeA9u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALPdju25H = await NAL.new({from: accounts[4]});
		const uintZz9Mkm = BigInt("1400")
		const addressVIjhMX4 = accounts[3]
		const uinte9Y33fh = BigInt("1157")
		const addressqHljJr = accounts[4]
		const addressUUJDU1T = accounts[6]
		const addresssQKtqo3 = accounts[2]
		const uintkYI4IS9 = BigInt("1941")
		const addressBewHywy = accounts[1]
		const addressZAsA18q = accounts[0]
		const addressUWseikd = accounts[2]
		const uintCQKKvR2 = BigInt("1312")
		const addressIUXPNN7 = accounts[1]
		const addressXl5MMl5 = accounts[5]
		const boolFKlYShR = await NALPdju25H.transfer.call(addressVIjhMX4, uintZz9Mkm, {from: accounts[4]});
		const boolu2stI2F = await NALPdju25H.increaseAllowance.call(addressqHljJr, uinte9Y33fh, {from: accounts[0]});
//		const addressJjFcLVV = await NALPdju25H.notFrozen.call(addressUUJDU1T, {from: accounts[1]});
//		const address3Jy7rn = await NALPdju25H.notFrozen.call(addresssQKtqo3, {from: accounts[1]});
//		const boolB8bkmvc = await NALPdju25H.increaseAllowance.call(addressBewHywy, uintkYI4IS9, {from: accounts[0]});
//		const addressqnaE4VL = await NALPdju25H.addAdmin.call(addressZAsA18q, {from: accounts[3]});
//		const addresshodSogk = await NALPdju25H.addAdmin.call(addressUWseikd, {from: accounts[0]});
//		const boolye2JUYE = await NALPdju25H.transferFrom.call(addressXl5MMl5, addressIUXPNN7, uintCQKKvR2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFKlYShR, true)
		assert.equal(boolu2stI2F, true)
		await expect(NALPdju25H.notFrozen.call(addressUUJDU1T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressFLFghJv = accounts[1]
		const addressKiaHzD = accounts[1]
		const addressCWRIIOU = accounts[1]
//		await NALnrtcFX0.pause.call({from: accounts[3]});
//		const boolcPXP3Yb = await NALnrtcFX0.unfreezeAccount.call(addressFLFghJv, {from: accounts[1]});
//		const boolwZW0OW = await NALnrtcFX0.isOwner.call(addressKiaHzD, {from: accounts[4]});
//		const addressBgAKhTI = await NALnrtcFX0.notFrozen.call(addressCWRIIOU, {from: accounts[0]});
//		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});

		await expect(NALnrtcFX0.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALgSKfls0 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlY8aTm = BigInt("1570")
		const addressA6iHJVW = "0x0000000000000000000000000000000000000001"
		const addressjvNPG8s = "0x0000000000000000000000000000000000000001"
		const addressTulkUu = accounts[3]
		const uintu0jNcCk = BigInt("835")
		const uintDQxrPrE = BigInt("1187")
		const addressElsYypX = "0x0000000000000000000000000000000000000001"
		const uint6cChh5 = BigInt("1957")
		const addressXH6IPBi = "0x0000000000000000000000000000000000000001"
		const boolfs815sj = await NALgSKfls0.transferFrom.call(addressjvNPG8s, addressA6iHJVW, uintlY8aTm, {from: accounts[0]});
		const boolgqzp4OG = await NALgSKfls0.isOwner.call(addressTulkUu, {from: accounts[5]});
		const uint256SBd4b0B = await NALgSKfls0.burn.call(uintu0jNcCk, {from: accounts[3]});
		const boolL9I98B8 = await NALgSKfls0.approve.call(addressElsYypX, uintDQxrPrE, {from: accounts[1]});
		const booluwLoNuP = await NALgSKfls0.transfer.call(addressXH6IPBi, uint6cChh5, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressLBqAzyP = accounts[4]
		const addresseLXPztZ = accounts[2]
		const uinttW8fafK = BigInt("1302")
		const uintzDiwIdh = BigInt("1677")
		const addressYJEYJqZ = accounts[0]
//		const boolFHiPima = await NALnrtcFX0.unfreezeAccount.call(addressLBqAzyP, {from: accounts[3]});
//		const addressBgAKhTI = await NALnrtcFX0.notFrozen.call(addresseLXPztZ, {from: accounts[0]});
//		const boolDyStt8X = await NALnrtcFX0.lock.call(addressYJEYJqZ, uintzDiwIdh, uinttW8fafK, {from: accounts[0]});
//		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});

		await expect(NALnrtcFX0.unfreezeAccount.call(addressLBqAzyP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressbcnzgZg = accounts[1]
		const boolwZW0OW = await NALnrtcFX0.isOwner.call(addressbcnzgZg, {from: accounts[4]});
		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});

		assert.equal(boolwZW0OW, false)
		assert.equal(uint8HKYeem, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALPdju25H = await NAL.new({from: accounts[4]});
		const uintumvs46K = BigInt("1400")
		const addressFQkXX65 = accounts[4]
		const addressVBGOfay = accounts[2]
		const uintFRJjJa = BigInt("1946")
		const addressCfsx1Tl = accounts[1]
		const addressTLozpA9 = accounts[0]
		const uintd7hBvuQ = BigInt("1312")
		const addresskdMGrcH = accounts[1]
		const addressedmWnhA = accounts[5]
		const boolFKlYShR = await NALPdju25H.transfer.call(addressFQkXX65, uintumvs46K, {from: accounts[4]});
//		await NALPdju25H.renounceAdmin.call({from: accounts[4]});
//		const address3Jy7rn = await NALPdju25H.notFrozen.call(addressVBGOfay, {from: accounts[1]});
//		const boolB8bkmvc = await NALPdju25H.increaseAllowance.call(addressCfsx1Tl, uintFRJjJa, {from: accounts[0]});
//		const addressqnaE4VL = await NALPdju25H.addAdmin.call(addressTLozpA9, {from: accounts[3]});
//		const boolye2JUYE = await NALPdju25H.transferFrom.call(addressedmWnhA, addresskdMGrcH, uintd7hBvuQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFKlYShR, true)
		await expect(NALPdju25H.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALp6RcGD7 = await NAL.new({from: accounts[3]});
		const addressCKlYn37 = accounts[3]
		const uintTn9gk4Z = BigInt("988")
		const addressATA0PXg = accounts[1]
		const addressTEra7l = accounts[2]
		const uintZ6kcJ7c = BigInt("1953")
		const addresssGP6E5H = accounts[5]
		const stringyYwV8S2 = await NALp6RcGD7.name.call({from: accounts[0]});
		const booliFPM0I7 = await NALp6RcGD7.isAdmin.call(addressCKlYn37, {from: accounts[2]});
//		const boolLVZnfSw = await NALp6RcGD7.transferFrom.call(addressTEra7l, addressATA0PXg, uintTn9gk4Z, {from: "0x0000000000000000000000000000000000000001"});
//		await NALp6RcGD7.onlyAdmin.call({from: accounts[2]});
//		const boolAXtRjk = await NALp6RcGD7.unlock.call(addresssGP6E5H, uintZ6kcJ7c, {from: accounts[5]});

		assert.equal(booliFPM0I7, true)
		assert.equal(stringyYwV8S2, "Personal Token")
		await expect(NALp6RcGD7.transferFrom.call(addressTEra7l, addressATA0PXg, uintTn9gk4Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALp6RcGD7 = await NAL.new({from: accounts[3]});
		const addressAJT3EZm = accounts[3]
		const uintwAww0C3 = BigInt("988")
		const addressDFrnrDw = accounts[1]
		const addressFAChN5I = accounts[2]
		const addressZpfPT8z = accounts[1]
		const uintCkdpW7U = BigInt("1953")
		const addressAj0suy2 = accounts[5]
		const uint256hYQDEDR = await NALp6RcGD7.totalSupply.call({from: accounts[4]});
		const booliFPM0I7 = await NALp6RcGD7.isAdmin.call(addressAJT3EZm, {from: accounts[2]});
		const stringe36C4WL = await NALp6RcGD7.symbol.call({from: accounts[0]});
//		const boolLVZnfSw = await NALp6RcGD7.transferFrom.call(addressFAChN5I, addressDFrnrDw, uintwAww0C3, {from: "0x0000000000000000000000000000000000000001"});
//		await NALp6RcGD7.onlyAdmin.call({from: accounts[2]});
//		const uint256IWmt3qR = await NALp6RcGD7.balanceOf.call(addressZpfPT8z, {from: accounts[0]});
//		const boolAXtRjk = await NALp6RcGD7.unlock.call(addressAj0suy2, uintCkdpW7U, {from: accounts[5]});

		assert.equal(booliFPM0I7, true)
		assert.equal(stringe36C4WL, "NAL")
		assert.equal(uint256hYQDEDR, BigInt("2000000000000000000000000000"))
		await expect(NALp6RcGD7.transferFrom.call(addressFAChN5I, addressDFrnrDw, uintwAww0C3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addresskLChlzN = accounts[2]
		const addressWpEeodp = accounts[0]
		const boolwZW0OW = await NALnrtcFX0.isOwner.call(addresskLChlzN, {from: accounts[4]});
		const uint256vfJbpt = await NALnrtcFX0.balanceOf.call(addressWpEeodp, {from: accounts[2]});
		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});

		assert.equal(boolwZW0OW, false)
		assert.equal(uint256vfJbpt, BigInt("0"))
		assert.equal(uint8HKYeem, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALp6RcGD7 = await NAL.new({from: accounts[3]});
		const addressNhS6oaK = accounts[3]
		const uintO9qmDr2 = BigInt("988")
		const addressZdge3yF = accounts[2]
		const addresshK0fpm = accounts[2]
		const uintsuMRpeE = BigInt("1953")
		const addressmW5gfdQ = accounts[5]
		const booliFPM0I7 = await NALp6RcGD7.isAdmin.call(addressNhS6oaK, {from: accounts[2]});
		const boolq8vxq1O = await NALp6RcGD7.paused.call({from: accounts[5]});
//		const boolLVZnfSw = await NALp6RcGD7.transferFrom.call(addresshK0fpm, addressZdge3yF, uintO9qmDr2, {from: "0x0000000000000000000000000000000000000001"});
//		await NALp6RcGD7.onlyAdmin.call({from: accounts[2]});
//		const boolAXtRjk = await NALp6RcGD7.unlock.call(addressmW5gfdQ, uintsuMRpeE, {from: accounts[5]});

		assert.equal(booliFPM0I7, true)
		assert.equal(boolq8vxq1O, false)
		await expect(NALp6RcGD7.transferFrom.call(addresshK0fpm, addressZdge3yF, uintO9qmDr2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressQfU2FNI = accounts[1]
		const addressk5pawqo = accounts[4]
		const addressGDPXMiC = accounts[4]
		const boolwZW0OW = await NALnrtcFX0.isOwner.call(addressQfU2FNI, {from: accounts[4]});
		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});
		const uint256QqXDjlu = await NALnrtcFX0.balanceOf.call(addressk5pawqo, {from: accounts[0]});
//		const addressbBkOCec = await NALnrtcFX0.removeAdmin.call(addressGDPXMiC, {from: accounts[3]});

		assert.equal(boolwZW0OW, false)
		assert.equal(uint256QqXDjlu, BigInt("0"))
		assert.equal(uint8HKYeem, BigInt("18"))
		await expect(NALnrtcFX0.removeAdmin.call(addressGDPXMiC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const uintmXE9Aqf = BigInt("1179")
		const addressqf73uL = accounts[0]
		const addressoPx7iI7 = accounts[1]
		const addressyAIh9l7 = accounts[4]
		const addressHZTRfUV = accounts[4]
//		const boolsucwRkk = await NALnrtcFX0.decreaseAllowance.call(addressqf73uL, uintmXE9Aqf, {from: accounts[3]});
//		const boolwZW0OW = await NALnrtcFX0.isOwner.call(addressoPx7iI7, {from: accounts[4]});
//		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});
//		const uint256QqXDjlu = await NALnrtcFX0.balanceOf.call(addressyAIh9l7, {from: accounts[0]});
//		const boolrdrtKoY = await NALnrtcFX0.paused.call({from: accounts[2]});
//		const addressbBkOCec = await NALnrtcFX0.removeAdmin.call(addressHZTRfUV, {from: accounts[3]});

		await expect(NALnrtcFX0.decreaseAllowance.call(addressqf73uL, uintmXE9Aqf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALPdju25H = await NAL.new({from: accounts[4]});
		const uintflCCAlE = BigInt("1933")
		const addressVdfPkiz = accounts[3]
		const uintcKc46Iu = BigInt("1400")
		const addressKvujYFK = accounts[5]
		const addressdG3JY0 = accounts[4]
		const addressV3reCHu = "0x0000000000000000000000000000000000000001"
		const addressr2ZglOk = accounts[2]
		const uintR4ilgzE = BigInt("1312")
		const addressnBDTRKB = accounts[1]
		const addressSDqXH6 = accounts[5]
//		const boolaLc6JWt = await NALPdju25H.unlock.call(addressVdfPkiz, uintflCCAlE, {from: accounts[4]});
//		const boolFKlYShR = await NALPdju25H.transfer.call(addressKvujYFK, uintcKc46Iu, {from: accounts[4]});
//		const uint256j1AQDWm = await NALPdju25H.balanceOf.call(addressdG3JY0, {from: accounts[4]});
//		const addressjC6DVqi = await NALPdju25H.addAdmin.call(addressV3reCHu, {from: accounts[0]});
//		const address3Jy7rn = await NALPdju25H.notFrozen.call(addressr2ZglOk, {from: accounts[1]});
//		const boolye2JUYE = await NALPdju25H.transferFrom.call(addressSDqXH6, addressnBDTRKB, uintR4ilgzE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALPdju25H.unlock.call(addressVdfPkiz, uintflCCAlE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALvaFeGez = await NAL.new({from: accounts[3]});
		const uintzCyafHT = BigInt("807")
		const addressN2KQyCk = accounts[0]
		const addressWdJdPon = accounts[5]
		const boolZRhjRDn = await NALvaFeGez.approve.call(addressN2KQyCk, uintzCyafHT, {from: accounts[1]});
		const uint256FpX7DST = await NALvaFeGez.balanceOf.call(addressWdJdPon, {from: accounts[3]});
		const stringwm4uqFj = await NALvaFeGez.symbol.call({from: accounts[4]});

		assert.equal(boolZRhjRDn, true)
		assert.equal(stringwm4uqFj, "NAL")
		assert.equal(uint256FpX7DST, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const uintrlgXOf = BigInt("451")
		const addressA6rMCFv = accounts[1]
		const addressHZVPRzD = accounts[0]
		const uintmxgViPA = BigInt("1323")
		const addresse9yE2j7 = accounts[1]
		const boolFmdqk3z = await NALnrtcFX0.approve.call(addressA6rMCFv, uintrlgXOf, {from: accounts[0]});
		const uint256vfJbpt = await NALnrtcFX0.balanceOf.call(addressHZVPRzD, {from: accounts[2]});
		const boolKXuhLyD = await NALnrtcFX0.paused.call({from: accounts[1]});
//		const uint256sZYWYbg = await NALnrtcFX0.burn.call(uintmxgViPA, {from: accounts[4]});
//		const addressyaX9zhi = await NALnrtcFX0.transferOwnership.call(addresse9yE2j7, {from: accounts[1]});
//		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});
//		const stringQvarCJ = await NALnrtcFX0.symbol.call({from: accounts[0]});

		assert.equal(boolFmdqk3z, true)
		assert.equal(boolKXuhLyD, false)
		assert.equal(uint256vfJbpt, BigInt("0"))
		await expect(NALnrtcFX0.burn.call(uintmxgViPA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressNXZzvgs = accounts[2]
		const uintG3JAkM = BigInt("451")
		const addressQtthq0 = accounts[1]
		const addressNoWS39O = accounts[0]
		const addressRlzrcZ9 = accounts[3]
		const uintxyDHJdD = BigInt("1323")
		const addressiyFmac = accounts[1]
		const uintbA556fs = BigInt("123")
		const uintIJELNra = BigInt("1099")
		const addressZLbfawc = accounts[4]
		const uint256MnOTxqo = await NALnrtcFX0.balanceOf.call(addressNXZzvgs, {from: accounts[0]});
		const boolFmdqk3z = await NALnrtcFX0.approve.call(addressQtthq0, uintG3JAkM, {from: accounts[0]});
		const uint256vfJbpt = await NALnrtcFX0.balanceOf.call(addressNoWS39O, {from: accounts[2]});
		const boolKXuhLyD = await NALnrtcFX0.paused.call({from: accounts[1]});
		const boolW7MzmL6 = await NALnrtcFX0.freezeAccount.call(addressRlzrcZ9, {from: accounts[3]});
//		const uint256sZYWYbg = await NALnrtcFX0.burn.call(uintxyDHJdD, {from: accounts[4]});
//		const addressyaX9zhi = await NALnrtcFX0.transferOwnership.call(addressiyFmac, {from: accounts[1]});
//		const uint8HKYeem = await NALnrtcFX0.decimals.call({from: accounts[4]});
//		const boolrrV3YEz = await NALnrtcFX0.transferWithLock.call(addressZLbfawc, uintIJELNra, uintbA556fs, {from: accounts[1]});
//		const stringQvarCJ = await NALnrtcFX0.symbol.call({from: accounts[0]});

		assert.equal(boolFmdqk3z, true)
		assert.equal(boolKXuhLyD, false)
		assert.equal(boolW7MzmL6, true)
		assert.equal(uint256MnOTxqo, BigInt("0"))
		assert.equal(uint256vfJbpt, BigInt("0"))
		await expect(NALnrtcFX0.burn.call(uintxyDHJdD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const addressovZ76Pt = accounts[1]
		const addressrjVxVOA = accounts[0]
		const uint256vfJbpt = await NALnrtcFX0.balanceOf.call(addressovZ76Pt, {from: accounts[2]});
		const addressaR249RV = await NALnrtcFX0.transferOwnership.call(addressrjVxVOA, {from: accounts[3]});

		assert.equal(uint256vfJbpt, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALnrtcFX0 = await NAL.new({from: accounts[3]});
		const uintF5gsI7t = BigInt("1382")
		const uintV5HTNf = BigInt("1902")
		const addressNxUNl9I = accounts[0]
		const addressZ1GmoIM = accounts[0]
//		const boolidDP8jn = await NALnrtcFX0.lock.call(addressNxUNl9I, uintV5HTNf, uintF5gsI7t, {from: accounts[3]});
//		const uint256vfJbpt = await NALnrtcFX0.balanceOf.call(addressZ1GmoIM, {from: accounts[2]});

		await expect(NALnrtcFX0.lock.call(addressNxUNl9I, uintV5HTNf, uintF5gsI7t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTiLDIhV = await NAL.new({from: accounts[1]});
		const addressqyyelGv = accounts[1]
		const addressYkBxEEK = accounts[3]
		const uintgehDXB3 = BigInt("954")
		const addressHG1e4Ly = accounts[4]
		const addressBlErgo = accounts[2]
		const uint256d1clw70 = await NALTiLDIhV.allowance.call(addressYkBxEEK, addressqyyelGv, {from: accounts[2]});
		const uint8X9WS7uc = await NALTiLDIhV.decimals.call({from: accounts[2]});
//		const boolHK8S7fR = await NALTiLDIhV.transferFrom.call(addressBlErgo, addressHG1e4Ly, uintgehDXB3, {from: accounts[2]});
//		const uint8ZtYsrdU = await NALTiLDIhV.decimals.call({from: accounts[4]});

		assert.equal(uint256d1clw70, BigInt("0"))
		assert.equal(uint8X9WS7uc, BigInt("18"))
		await expect(NALTiLDIhV.transferFrom.call(addressBlErgo, addressHG1e4Ly, uintgehDXB3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALPdju25H = await NAL.new({from: accounts[4]});
		const addressOoeARUR = accounts[5]
		const uintAZO2bpA = BigInt("1384")
		const addresssRLfDW7 = accounts[5]
		const addressrSC9QaV = await NALPdju25H.addAdmin.call(addressOoeARUR, {from: accounts[4]});
		const uint256eEo19sV = await NALPdju25H.totalSupply.call({from: accounts[3]});
		const boolFKlYShR = await NALPdju25H.transfer.call(addresssRLfDW7, uintAZO2bpA, {from: accounts[4]});

		assert.equal(boolFKlYShR, true)
		assert.equal(uint256eEo19sV, BigInt("2000000000000000000000000000"))
	});
})