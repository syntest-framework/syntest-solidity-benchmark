const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringAK0XWYe = "DAPY3485aXLC7oqHYusxD468s6zxVhxJlENUQftgk3HOOxggMECH"
		const stringkC1S4u7 = "mGIvmSPqicFS5ovkPWjHH9bQqkylxrlBM3Ush8sy3w6o9wPu4fHf4W06VU8kixGC5vidyqd53eQdWwIA4atiDtzPTX64gx7OUf"
		const uintC4VCtr5 = BigInt("241")
		const TPAKv9MwEV = await TPA.new(stringAK0XWYe, stringkC1S4u7, uintC4VCtr5, {from: accounts[2]});
		const uintgpYG1Ck = BigInt("154")
		const addressQRiMRnO = accounts[1]
		const uinttn3ebex = BigInt("1775")
		const uintLPW4gDY = BigInt("1569")
		const addressYzGjQkL = accounts[0]
		await TPAKv9MwEV.renounceAdmin.call({from: accounts[3]});
		const boolxcbm7aW = await TPAKv9MwEV.approve.call(addressQRiMRnO, uintgpYG1Ck, {from: accounts[1]});
		const uint256XUvLo0u = await TPAKv9MwEV.burn.call(uinttn3ebex, {from: accounts[0]});
		await TPAKv9MwEV.onlyAdmin.call({from: accounts[3]});
		const boolcnFjAWL = await TPAKv9MwEV.transfer.call(addressYzGjQkL, uintLPW4gDY, {from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAnrtcFX0 = await TPA.new({from: accounts[3]});
		const addressIP2TSLu = accounts[1]
		const addresspQV3LE = accounts[1]
		const boolwZW0OW = await TPAnrtcFX0.isOwner.call(addressIP2TSLu, {from: accounts[4]});
//		const addressBgAKhTI = await TPAnrtcFX0.notFrozen.call(addresspQV3LE, {from: accounts[0]});
//		const uint8HKYeem = await TPAnrtcFX0.decimals.call({from: accounts[4]});

		assert.equal(boolwZW0OW, false)
		await expect(TPAnrtcFX0.notFrozen.call(addresspQV3LE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAPdju25H = await TPA.new({from: accounts[4]});
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
		const boolFKlYShR = await TPAPdju25H.transfer.call(addresszSndpnI, uintieB2Kjl, {from: accounts[4]});
//		const addressJjFcLVV = await TPAPdju25H.notFrozen.call(addressImuozV, {from: accounts[1]});
//		const address3Jy7rn = await TPAPdju25H.notFrozen.call(addresszWs9CDD, {from: accounts[1]});
//		const boolB8bkmvc = await TPAPdju25H.increaseAllowance.call(addressUBxwPs, uintTd2b1eU, {from: accounts[0]});
//		const addressqnaE4VL = await TPAPdju25H.addAdmin.call(addressFpJGUZ, {from: accounts[3]});
//		const boolye2JUYE = await TPAPdju25H.transferFrom.call(addresskavu4cO, addressbvFR5rl, uintdZ4ROXh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFKlYShR, true)
		await expect(TPAPdju25H.notFrozen.call(addressImuozV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAsl8ixHR = await TPA.new({from: accounts[3]});
		const addressnV62mQE = accounts[3]
		const uintjzevLBh = BigInt("1371")
		const addressGjBo0U = accounts[4]
		const uintgpBw6CT = BigInt("656")
		const addressX11lOdw = accounts[0]
		const addressU5KnWXE = accounts[1]
		const uintiIzalFY = BigInt("1680")
		const uinta3j4qcE = BigInt("1055")
		const addresswhFwf2c = accounts[2]
		const boolWK642CF = await TPAsl8ixHR.isOwner.call(addressnV62mQE, {from: accounts[5]});
//		const addresspLtxp3P = await TPAsl8ixHR.burnFrom.call(addressGjBo0U, uintjzevLBh, {from: accounts[0]});
//		const boolA5nxGvq = await TPAsl8ixHR.transferFrom.call(addressU5KnWXE, addressX11lOdw, uintgpBw6CT, {from: accounts[4]});
//		const boolPM01jCU = await TPAsl8ixHR.lock.call(addresswhFwf2c, uinta3j4qcE, uintiIzalFY, {from: accounts[2]});

		assert.equal(boolWK642CF, true)
		await expect(TPAsl8ixHR.burnFrom.call(addressGjBo0U, uintjzevLBh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAp6RcGD7 = await TPA.new({from: accounts[3]});
		const addressCIMGIQ = accounts[3]
		const uintsmeA9u = BigInt("988")
		const addresshptNbnU = accounts[1]
		const addressHyGuutj = accounts[2]
		const uintSUWgHtw = BigInt("1953")
		const addressl5mYwyg = accounts[5]
		const booliFPM0I7 = await TPAp6RcGD7.isAdmin.call(addressCIMGIQ, {from: accounts[2]});
		const stringe36C4WL = await TPAp6RcGD7.symbol.call({from: accounts[0]});
//		const boolLVZnfSw = await TPAp6RcGD7.transferFrom.call(addressHyGuutj, addresshptNbnU, uintsmeA9u, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAp6RcGD7.onlyAdmin.call({from: accounts[2]});
//		const boolAXtRjk = await TPAp6RcGD7.unlock.call(addressl5mYwyg, uintSUWgHtw, {from: accounts[5]});

		assert.equal(booliFPM0I7, true)
		assert.equal(stringe36C4WL, "TPA")
		await expect(TPAp6RcGD7.transferFrom.call(addressHyGuutj, addresshptNbnU, uintsmeA9u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAp6RcGD7 = await TPA.new({from: accounts[3]});
		const addresss9rSASs = accounts[3]
		const uintWdaQY9n = BigInt("988")
		const addressUgmcZoB = accounts[1]
		const addressDvnH5ap = accounts[2]
		const uintdd7q8BJ = BigInt("1953")
		const addresskocE0De = accounts[5]
		const booliFPM0I7 = await TPAp6RcGD7.isAdmin.call(addresss9rSASs, {from: accounts[2]});
		const uint256CoeL5dp = await TPAp6RcGD7.totalSupply.call({from: accounts[1]});
		const stringe36C4WL = await TPAp6RcGD7.symbol.call({from: accounts[0]});
//		const boolLVZnfSw = await TPAp6RcGD7.transferFrom.call(addressDvnH5ap, addressUgmcZoB, uintWdaQY9n, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAp6RcGD7.onlyAdmin.call({from: accounts[2]});
//		const boolAXtRjk = await TPAp6RcGD7.unlock.call(addresskocE0De, uintdd7q8BJ, {from: accounts[5]});

		assert.equal(booliFPM0I7, true)
		assert.equal(stringe36C4WL, "TPA")
		assert.equal(uint256CoeL5dp, BigInt("10000000000000000000000000000"))
		await expect(TPAp6RcGD7.transferFrom.call(addressDvnH5ap, addressUgmcZoB, uintWdaQY9n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnrtcFX0 = await TPA.new({from: accounts[3]});
		const uint8HKYeem = await TPAnrtcFX0.decimals.call({from: accounts[4]});

		assert.equal(uint8HKYeem, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const uintrTioCGz = BigInt("1475")
		const addresswQtj8Ms = accounts[1]
//		const boolb1fxxXv = await TPAHk6Wlor.decreaseAllowance.call(addresswQtj8Ms, uintrTioCGz, {from: accounts[5]});

		await expect(TPAHk6Wlor.decreaseAllowance.call(addresswQtj8Ms, uintrTioCGz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAvhp73AG = await TPA.new({from: accounts[1]});
		const addressQv6GZWq = accounts[1]
		const uintSCAEYQp = BigInt("697")
		const addressiyllzyw = accounts[2]
		const uint256uBYTBs2 = await TPAvhp73AG.balanceOf.call(addressQv6GZWq, {from: accounts[5]});
//		const uint256nyJu8xQ = await TPAvhp73AG.burn.call(uintSCAEYQp, {from: accounts[2]});
//		const stringxKo9nRL = await TPAvhp73AG.symbol.call({from: accounts[3]});
//		const boolk2ifIVK = await TPAvhp73AG.unfreezeAccount.call(addressiyllzyw, {from: accounts[3]});

		assert.equal(uint256uBYTBs2, BigInt("10000000000000000000000000000"))
		await expect(TPAvhp73AG.burn.call(uintSCAEYQp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnrtcFX0 = await TPA.new({from: accounts[3]});
		const addressU83ZTgn = accounts[4]
//		await TPAnrtcFX0.renounceAdmin.call({from: accounts[1]});
//		const addressBgAKhTI = await TPAnrtcFX0.notFrozen.call(addressU83ZTgn, {from: accounts[0]});
//		const uint8UH4gGZ9 = await TPAnrtcFX0.decimals.call({from: accounts[2]});

		await expect(TPAnrtcFX0.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const uintXyfsEOn = BigInt("1480")
		const addressbH3m9ut = "0x0000000000000000000000000000000000000001"
		const uintuakh1uW = BigInt("630")
		const addressMmPITk4 = accounts[0]
		const stringcDr2ilj = await TPAHk6Wlor.name.call({from: accounts[2]});
//		const boolkdcNpdd = await TPAHk6Wlor.transfer.call(addressbH3m9ut, uintXyfsEOn, {from: accounts[2]});
//		const boolBkZ4dV = await TPAHk6Wlor.approve.call(addressMmPITk4, uintuakh1uW, {from: accounts[2]});

		assert.equal(stringcDr2ilj, "TPA")
		await expect(TPAHk6Wlor.transfer.call(addressbH3m9ut, uintXyfsEOn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const uintlACmnU = BigInt("1858")
		const addressCR6Lisz = accounts[5]
		const uintcszoEWP = BigInt("1474")
		const addressE6ugCKc = "0x0000000000000000000000000000000000000000"
		const boolH8mcD1E = await TPAHk6Wlor.increaseAllowance.call(addressCR6Lisz, uintlACmnU, {from: accounts[4]});
//		const boolkdcNpdd = await TPAHk6Wlor.transfer.call(addressE6ugCKc, uintcszoEWP, {from: accounts[2]});
//		await TPAHk6Wlor.pause.call({from: accounts[2]});

		assert.equal(boolH8mcD1E, true)
		await expect(TPAHk6Wlor.transfer.call(addressE6ugCKc, uintcszoEWP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAnrtcFX0 = await TPA.new({from: accounts[3]});
		const uintT1sYMeZ = BigInt("862")
		const addressrQzNHOS = accounts[3]
		const addressJ9RIlfu = accounts[3]
		const addressGU1wAc5 = "0x0000000000000000000000000000000000000001"
		const uintNdDqzar = BigInt("1044")
		const addressSaTcmWm = accounts[2]
		const addressxEe3wAW = accounts[0]
		const boolDLEpfyz = await TPAnrtcFX0.approve.call(addressrQzNHOS, uintT1sYMeZ, {from: accounts[2]});
//		const addressBgAKhTI = await TPAnrtcFX0.notFrozen.call(addressJ9RIlfu, {from: accounts[0]});
//		const addresslJ8xaTo = await TPAnrtcFX0.transferOwnership.call(addressGU1wAc5, {from: accounts[3]});
//		const boolP9IW7j = await TPAnrtcFX0.transferFrom.call(addressxEe3wAW, addressSaTcmWm, uintNdDqzar, {from: accounts[0]});

		assert.equal(boolDLEpfyz, true)
		await expect(TPAnrtcFX0.notFrozen.call(addressJ9RIlfu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const uinttldZRmx = BigInt("1458")
		const addresshKQ2LPP = "0x0000000000000000000000000000000000000001"
		const uintyTLKNmS = BigInt("1865")
		const addresswEprhOG = accounts[4]
		const uintsWp6yyf = BigInt("1707")
		const addressKoILROe = accounts[3]
		const boolNKVmvJh = await TPAHk6Wlor.paused.call({from: accounts[4]});
//		const boolkdcNpdd = await TPAHk6Wlor.transfer.call(addresshKQ2LPP, uinttldZRmx, {from: accounts[2]});
//		const boolQIy6ymh = await TPAHk6Wlor.transfer.call(addresswEprhOG, uintyTLKNmS, {from: accounts[1]});
//		const stringaKTnZLI = await TPAHk6Wlor.symbol.call({from: accounts[0]});
//		const boolnO7t0Vs = await TPAHk6Wlor.increaseAllowance.call(addressKoILROe, uintsWp6yyf, {from: accounts[1]});

		assert.equal(boolNKVmvJh, false)
		await expect(TPAHk6Wlor.transfer.call(addresshKQ2LPP, uinttldZRmx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAp6RcGD7 = await TPA.new({from: accounts[3]});
		const addresswrMU7Yc = accounts[3]
		const uinth7kasap = BigInt("988")
		const addressZ6ld5LD = accounts[2]
		const address2MulZm = accounts[2]
		const boolinXUKG = await TPAp6RcGD7.freezeAccount.call(addresswrMU7Yc, {from: accounts[3]});
//		const boolLVZnfSw = await TPAp6RcGD7.transferFrom.call(address2MulZm, addressZ6ld5LD, uinth7kasap, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolinXUKG, true)
		await expect(TPAp6RcGD7.transferFrom.call(address2MulZm, addressZ6ld5LD, uinth7kasap, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const addressxyabg8g = accounts[1]
		const addressz36TqRB = accounts[4]
		const addressKBNnJaK = accounts[3]
		const uintq4RnO76 = BigInt("1249")
		const uintKDltVJv = BigInt("213")
		const addressrREkelE = accounts[2]
		const uint256gaRNF5 = await TPAHk6Wlor.balanceOf.call(addressxyabg8g, {from: accounts[3]});
		const uint256vFVG3F = await TPAHk6Wlor.allowance.call(addressKBNnJaK, addressz36TqRB, {from: accounts[2]});
//		const boolcGdzvFv = await TPAHk6Wlor.transferWithLock.call(addressrREkelE, uintKDltVJv, uintq4RnO76, {from: accounts[1]});

		assert.equal(uint256gaRNF5, BigInt("0"))
		assert.equal(uint256vFVG3F, BigInt("0"))
		await expect(TPAHk6Wlor.transferWithLock.call(addressrREkelE, uintKDltVJv, uintq4RnO76, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const addressYFyMg2h = "0x0000000000000000000000000000000000000001"
		const addressfBBN5co = accounts[3]
		const uintmKTqQxo = BigInt("1474")
		const addresseJi9FjM = "0x0000000000000000000000000000000000000001"
		const uint256nhU4zD = await TPAHk6Wlor.balanceOf.call(addressYFyMg2h, {from: accounts[5]});
		const addressQ4h2QHE = await TPAHk6Wlor.addAdmin.call(addressfBBN5co, {from: accounts[0]});
//		const boolkdcNpdd = await TPAHk6Wlor.transfer.call(addresseJi9FjM, uintmKTqQxo, {from: accounts[2]});

		assert.equal(uint256nhU4zD, BigInt("0"))
		await expect(TPAHk6Wlor.transfer.call(addresseJi9FjM, uintmKTqQxo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAS9KOu2y = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmRqsovf = BigInt("1014")
		const addressuDxBjY9 = accounts[4]
		const addressjlRgzLk = accounts[3]
		const addressF3E6lV = "0x0000000000000000000000000000000000000001"
		const addressxodS5BO = accounts[4]
		const boolpX2gFC7 = await TPAS9KOu2y.transfer.call(addressuDxBjY9, uintmRqsovf, {from: accounts[1]});
		const uint256nqHYSL2 = await TPAS9KOu2y.allowance.call(addressF3E6lV, addressjlRgzLk, {from: accounts[2]});
		const boolMdlpzLU = await TPAS9KOu2y.isAdmin.call(addressxodS5BO, {from: accounts[4]});
	});

	it('test for TPA', async () => {
		const TPAHk6Wlor = await TPA.new({from: accounts[0]});
		const uintIpqQ2yH = BigInt("1474")
		const addressoUIwOgL = "0x0000000000000000000000000000000000000000"
//		await TPAHk6Wlor.pause.call({from: accounts[0]});
//		const boolkdcNpdd = await TPAHk6Wlor.transfer.call(addressoUIwOgL, uintIpqQ2yH, {from: accounts[2]});

		await expect(TPAHk6Wlor.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAp6RcGD7 = await TPA.new({from: accounts[3]});
		const uintFmSTFu0 = BigInt("71")
		const uinth3NBZcy = BigInt("791")
		const addressCQRXAj = accounts[4]
		const uintNka0uTA = BigInt("988")
		const addressVeIKwX = accounts[2]
		const addressnCN1c21 = accounts[2]
		const booloeU2lWI = await TPAp6RcGD7.transferWithLock.call(addressCQRXAj, uinth3NBZcy, uintFmSTFu0, {from: accounts[3]});
//		const boolLVZnfSw = await TPAp6RcGD7.transferFrom.call(addressnCN1c21, addressVeIKwX, uintNka0uTA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booloeU2lWI, true)
		await expect(TPAp6RcGD7.transferFrom.call(addressnCN1c21, addressVeIKwX, uintNka0uTA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})