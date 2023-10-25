const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPtgfUfrW = await DSP.new({from: accounts[1]});
		const uintT0uQCZL = BigInt("502")
		const addressqEpkNuR = accounts[3]
		const addressEB7iPr9 = accounts[2]
		const addressDbye3Ak = accounts[2]
		const uintdQhiHFF = BigInt("1702")
		const addressJer8Obo = accounts[0]
		const boolbWjmR4s = await DSPtgfUfrW.transfer.call(addressqEpkNuR, uintT0uQCZL, {from: accounts[3]});
		const uint256UCfy9ng = await DSPtgfUfrW.allowance.call(addressDbye3Ak, addressEB7iPr9, {from: accounts[3]});
		await DSPtgfUfrW.renouncePauser.call({from: accounts[0]});
		const boolnTE0DXp = await DSPtgfUfrW.mint.call(addressJer8Obo, uintdQhiHFF, {from: accounts[0]});

		await expect(DSPtgfUfrW.transfer.call(addressqEpkNuR, uintT0uQCZL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPndVLw6B = await DSP.new({from: accounts[4]});
		const addressrfFiTvl = accounts[4]
		const uintCOOrdX1 = BigInt("600")
		const addressP6ihLiE = accounts[5]
		const addressaGMdmm6 = accounts[2]
		const uint3uxMcs = BigInt("212")
		const addressYR6iQtB = accounts[2]
		const addressEC7AAx = accounts[1]
		const addresssONLwoC = accounts[4]
		const boolStois3O = await DSPndVLw6B.isOwner.call(addressrfFiTvl, {from: accounts[4]});
		const boolatV3A0c = await DSPndVLw6B.increaseAllowance.call(addressP6ihLiE, uintCOOrdX1, {from: accounts[2]});
		const boolhHf08JQ = await DSPndVLw6B.isOwner.call(addressaGMdmm6, {from: accounts[1]});
		const boolitc1AJU = await DSPndVLw6B.increaseAllowance.call(addressYR6iQtB, uint3uxMcs, {from: accounts[2]});
		const uint256ZH1meC2 = await DSPndVLw6B.allowance.call(addresssONLwoC, addressEC7AAx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolStois3O, true)
		assert.equal(boolatV3A0c, true)
		assert.equal(boolhHf08JQ, false)
		assert.equal(boolitc1AJU, true)
		assert.equal(uint256ZH1meC2, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPimAxsVg = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressn1R0zc = accounts[2]
		const uint256XXOayDf = await DSPimAxsVg.totalSupply.call({from: accounts[3]});
		const uint256vdZoapo = await DSPimAxsVg.balanceOf.call(addressn1R0zc, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPO7yEMO7 = await DSP.new({from: accounts[0]});
		const addressQqJdqUe = accounts[1]
		const uintTmFlVrK = BigInt("289")
		const uintax4Fc7E = BigInt("1270")
		const addressAnwqCmC = accounts[5]
		const boolUVOZ5H7 = await DSPO7yEMO7.paused.call({from: accounts[0]});
		const addressQ3HcYUY = await DSPO7yEMO7.removePauser.call(addressQqJdqUe, {from: accounts[0]});
		const boolzoGoM8a = await DSPO7yEMO7.lock.call(addressAnwqCmC, uintax4Fc7E, uintTmFlVrK, {from: accounts[4]});
		await DSPO7yEMO7.renouncePauser.call({from: accounts[0]});
		await DSPO7yEMO7.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUVOZ5H7, false)
		await expect(DSPO7yEMO7.removePauser.call(addressQqJdqUe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringcdVgu18 = "kAOGwUHxLwgziTD"
		const stringQ60qLvj = "MpX5bnsoQqiinJIefcNPuG1HQvFe6BbHMVD26crc9ep6Jq5X4zrIRRYuRrcuKF5DpSEG2O85PAWJSOSDgtpjQ"
		const uintPPb0Hfc = BigInt("139")
		const DSPtpvIJhP = await DSP.new(stringcdVgu18, stringQ60qLvj, uintPPb0Hfc, {from: accounts[3]});
		const uintWyGP14q = BigInt("1956")
		const addressknoBMO = accounts[3]
		const addressNlbyy0 = accounts[3]
		const addressr8AjV7C = "0x0000000000000000000000000000000000000001"
		const uintY6phi1H = BigInt("1835")
		const addressMfGPlP0 = accounts[0]
		const boolVJp9QrP = await DSPtpvIJhP.transferFrom.call(addressNlbyy0, addressknoBMO, uintWyGP14q, {from: accounts[3]});
		const addressnLmux35 = await DSPtpvIJhP.upgradeTo.call(addressr8AjV7C, {from: accounts[0]});
		const booluZVFZFO = await DSPtpvIJhP.transfer.call(addressMfGPlP0, uintY6phi1H, {from: accounts[1]});
		await DSPtpvIJhP.whenNotPaused.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addresshizGAjf = "0x0000000000000000000000000000000000000001"
		const uintat54HyO = BigInt("356")
		const addressy5Yxmc2 = accounts[1]
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcOtqEcl = await DSPuEPx5ex.isOwner.call(addresshizGAjf, {from: accounts[5]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressy5Yxmc2, uintat54HyO, {from: accounts[2]});

		assert.equal(boolcOtqEcl, false)
		assert.equal(stringiOysVcO, "DSP")
		await expect(DSPuEPx5ex.transfer.call(addressy5Yxmc2, uintat54HyO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressSgUnVjG = accounts[0]
		const addressoJXhtb3 = "0x0000000000000000000000000000000000000001"
		const uintQfhsxli = BigInt("356")
		const addresstcQCHNb = accounts[1]
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZuxdyIk = await DSPuEPx5ex.totalSupply.call({from: accounts[1]});
		const boolQe6yMum = await DSPuEPx5ex.isOwner.call(addressSgUnVjG, {from: accounts[4]});
		const boolcOtqEcl = await DSPuEPx5ex.isOwner.call(addressoJXhtb3, {from: accounts[5]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addresstcQCHNb, uintQfhsxli, {from: accounts[2]});

		assert.equal(boolQe6yMum, true)
		assert.equal(boolcOtqEcl, false)
		assert.equal(stringiOysVcO, "DSP")
		assert.equal(uint256ZuxdyIk, BigInt("100000000000000000000000000000"))
		await expect(DSPuEPx5ex.transfer.call(addresstcQCHNb, uintQfhsxli, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNcIG5SG = await DSP.new({from: accounts[0]});
		const uintNkWGQXw = BigInt("142")
		const addressexttBmY = accounts[0]
		const addresswClvUlw = accounts[0]
		const addressDHA16Xj = accounts[2]
		const boolLP28EfD = await DSPNcIG5SG.unlock.call(addressexttBmY, uintNkWGQXw, {from: "0x0000000000000000000000000000000000000001"});
		const boolXCNwgUG = await DSPNcIG5SG.isPauser.call(addresswClvUlw, {from: accounts[1]});
		const uint8i6Cp27n = await DSPNcIG5SG.decimals.call({from: accounts[4]});
		const addressabRze74 = await DSPNcIG5SG.upgradeTo.call(addressDHA16Xj, {from: accounts[0]});

		await expect(DSPNcIG5SG.unlock.call(addressexttBmY, uintNkWGQXw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uinthWXnFtS = BigInt("842")
		const addresshmRFicx = accounts[0]
		const addressssFMqZu = "0x0000000000000000000000000000000000000002"
		const uintzK0sa5m = BigInt("356")
		const addresscft4FTL = accounts[1]
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPuEPx5ex.f.call({from: accounts[4]});
		const boolDbvPW56 = await DSPuEPx5ex.unlock.call(addresshmRFicx, uinthWXnFtS, {from: accounts[0]});
		const boolcOtqEcl = await DSPuEPx5ex.isOwner.call(addressssFMqZu, {from: accounts[5]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addresscft4FTL, uintzK0sa5m, {from: accounts[2]});

		assert.equal(stringiOysVcO, "DSP")
		await expect(DSPuEPx5ex.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressq0OKxuG = "0x0000000000000000000000000000000000000001"
		const uintGcjMVGh = BigInt("356")
		const addresskBnjydN = accounts[1]
		await DSPuEPx5ex.onlyNewOwner.call({from: accounts[3]});
		const boolcOtqEcl = await DSPuEPx5ex.isOwner.call(addressq0OKxuG, {from: accounts[5]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addresskBnjydN, uintGcjMVGh, {from: accounts[2]});

		await expect(DSPuEPx5ex.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uintLCOYYOD = BigInt("1945")
		const addressrLEEYB = accounts[2]
		const addressSO6sjVh = accounts[0]
		const addressjykl5Fg = accounts[2]
		const addressMNSnMaQ = accounts[3]
		const uintMECFWva = BigInt("356")
		const addressu74UCzU = accounts[1]
		const booljBzyXad = await DSPuEPx5ex.transferFrom.call(addressSO6sjVh, addressrLEEYB, uintLCOYYOD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bzxRiiU = await DSPuEPx5ex.allowance.call(addressMNSnMaQ, addressjykl5Fg, {from: accounts[2]});
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressu74UCzU, uintMECFWva, {from: accounts[2]});

		await expect(DSPuEPx5ex.transferFrom.call(addressSO6sjVh, addressrLEEYB, uintLCOYYOD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uintcNO3ijP = BigInt("356")
		const addressiXXQpWI = accounts[1]
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8nMyUZ9U = await DSPuEPx5ex.decimals.call({from: accounts[1]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressiXXQpWI, uintcNO3ijP, {from: accounts[2]});

		assert.equal(stringiOysVcO, "DSP")
		assert.equal(uint8nMyUZ9U, BigInt("18"))
		await expect(DSPuEPx5ex.transfer.call(addressiXXQpWI, uintcNO3ijP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressE4kt9y = accounts[2]
		const uintRqmNVyJ = BigInt("370")
		const addressVJ7k3gA = accounts[1]
		const addressh36hCl1 = accounts[2]
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iwTvZb3 = await DSPuEPx5ex.balanceOf.call(addressE4kt9y, {from: accounts[0]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressVJ7k3gA, uintRqmNVyJ, {from: accounts[2]});
		const addressYK5U5p3 = await DSPuEPx5ex.removePauser.call(addressh36hCl1, {from: accounts[4]});

		assert.equal(stringiOysVcO, "DSP")
		assert.equal(uint256iwTvZb3, BigInt("0"))
		await expect(DSPuEPx5ex.transfer.call(addressVJ7k3gA, uintRqmNVyJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uintRvzYTvp = BigInt("356")
		const addressLqbSknB = accounts[3]
		const stringWmFrqDb = await DSPuEPx5ex.name.call({from: accounts[2]});
		const stringROa6TA = await DSPuEPx5ex.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressLqbSknB, uintRvzYTvp, {from: accounts[2]});
		await DSPuEPx5ex.onlyOwner.call({from: accounts[2]});

		assert.equal(stringROa6TA, "DSP")
		assert.equal(stringWmFrqDb, "DSP")
		await expect(DSPuEPx5ex.transfer.call(addressLqbSknB, uintRvzYTvp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPt53RA4n = await DSP.new({from: accounts[4]});
		const uintl2nyisp = BigInt("664")
		const addresshuqnsqD = accounts[0]
		const uintbGPDMq3 = BigInt("2045")
		const addressAXsKeSM = accounts[4]
		const addressCTi4JvS = accounts[0]
		const uintPlIJuhH = BigInt("229")
		const addressZ1F6hBt = accounts[0]
		const stringXNYKXLH = await DSPt53RA4n.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcKufCUd = await DSPt53RA4n.approve.call(addresshuqnsqD, uintl2nyisp, {from: accounts[4]});
		const boolDq946QA = await DSPt53RA4n.transferFrom.call(addressCTi4JvS, addressAXsKeSM, uintbGPDMq3, {from: accounts[5]});
		const boolfdTqKS = await DSPt53RA4n.burnFrombyOwner.call(addressZ1F6hBt, uintPlIJuhH, {from: accounts[3]});

		assert.equal(boolcKufCUd, true)
		assert.equal(stringXNYKXLH, "DSP")
		await expect(DSPt53RA4n.transferFrom.call(addressCTi4JvS, addressAXsKeSM, uintbGPDMq3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uintuh8zegE = BigInt("536")
		const addressyK36vUk = accounts[3]
		const boolKhr5vNQ = await DSPuEPx5ex.decreaseAllowance.call(addressyK36vUk, uintuh8zegE, {from: accounts[1]});
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPuEPx5ex.decreaseAllowance.call(addressyK36vUk, uintuh8zegE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressVb9jEBU = accounts[3]
		const uintfEaElqz = BigInt("356")
		const addressexeT5oF = accounts[3]
		const addressdDZG2kS = accounts[4]
		const addressHzHox0l = await DSPuEPx5ex.transferOwnership.call(addressVb9jEBU, {from: accounts[0]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressexeT5oF, uintfEaElqz, {from: accounts[2]});
		const addressEKd2Y7E = await DSPuEPx5ex.removePauser.call(addressdDZG2kS, {from: accounts[4]});

		await expect(DSPuEPx5ex.transfer.call(addressexeT5oF, uintfEaElqz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressWmZSIds = accounts[0]
		const uintZATjZd = BigInt("356")
		const addressSydVHpv = accounts[2]
		const boolPvkzHS = await DSPuEPx5ex.unfreezeAccount.call(addressWmZSIds, {from: accounts[0]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressSydVHpv, uintZATjZd, {from: accounts[2]});

		await expect(DSPuEPx5ex.unfreezeAccount.call(addressWmZSIds, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const stringiOysVcO = await DSPuEPx5ex.name.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPuEPx5ex.renouncePauser.call({from: accounts[3]});
		await DSPuEPx5ex.whenPaused.call({from: accounts[2]});
		await DSPuEPx5ex.onlyPauser.call({from: accounts[4]});

		assert.equal(stringiOysVcO, "DSP")
		await expect(DSPuEPx5ex.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressAnIOa4 = accounts[1]
		const addressJ257sU0 = accounts[2]
		const addressbgYx8WY = accounts[2]
		const addressJrO6kbe = await DSPuEPx5ex.upgradeTo.call(addressAnIOa4, {from: accounts[0]});
		const uint256skdtGxK = await DSPuEPx5ex.balanceOf.call(addressJ257sU0, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ8kWZ6m = await DSPuEPx5ex.unfreezeAccount.call(addressbgYx8WY, {from: accounts[1]});

		assert.equal(uint256skdtGxK, BigInt("0"))
		await expect(DSPuEPx5ex.unfreezeAccount.call(addressbgYx8WY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVgfbhYk = await DSP.new({from: accounts[4]});
		const addressDSYNu2c = accounts[0]
		const addressNPBxOjc = accounts[3]
		const uintYnWx2ZF = BigInt("772")
		const addressjnRN2u = accounts[2]
		const uintGj6nRe8 = BigInt("717")
		const addresscHR9KiI = accounts[4]
		const addressLrTVbnX = await DSPVgfbhYk.addPauser.call(addressDSYNu2c, {from: accounts[4]});
		const boolTcEZ6Uz = await DSPVgfbhYk.unfreezeAccount.call(addressNPBxOjc, {from: "0x0000000000000000000000000000000000000001"});
		const boolCHiBiFn = await DSPVgfbhYk.increaseAllowance.call(addressjnRN2u, uintYnWx2ZF, {from: accounts[1]});
		const boolQcrD5sU = await DSPVgfbhYk.transfer.call(addresscHR9KiI, uintGj6nRe8, {from: accounts[0]});

		await expect(DSPVgfbhYk.unfreezeAccount.call(addressNPBxOjc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uintktffWlH = BigInt("434")
		const addressVinibnw = accounts[1]
		const addresszQpYpIz = accounts[0]
		const uintNQ1TnQ = BigInt("356")
		const addressRxMPmVe = accounts[3]
		const boolMj4AzDA = await DSPuEPx5ex.increaseAllowance.call(addressVinibnw, uintktffWlH, {from: accounts[2]});
		const boolYdmxOjN = await DSPuEPx5ex.freezeAccount.call(addresszQpYpIz, {from: accounts[0]});
		const boolsv30L7n = await DSPuEPx5ex.transfer.call(addressRxMPmVe, uintNQ1TnQ, {from: accounts[2]});

		assert.equal(boolMj4AzDA, true)
		assert.equal(boolYdmxOjN, true)
		await expect(DSPuEPx5ex.transfer.call(addressRxMPmVe, uintNQ1TnQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const uintiVohXxT = BigInt("1572")
		const uintHSsayrE = BigInt("1786")
		const addressQg5K1WE = "0x0000000000000000000000000000000000000001"
		const addressl7DOkc9 = accounts[1]
		const stringFgyDy9v = await DSPuEPx5ex.name.call({from: accounts[0]});
		const boolun2RHF = await DSPuEPx5ex.lock.call(addressQg5K1WE, uintHSsayrE, uintiVohXxT, {from: accounts[0]});
		const uint256skdtGxK = await DSPuEPx5ex.balanceOf.call(addressl7DOkc9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringFgyDy9v, "DSP")
		await expect(DSPuEPx5ex.lock.call(addressQg5K1WE, uintHSsayrE, uintiVohXxT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuEPx5ex = await DSP.new({from: accounts[0]});
		const addressZXnMZWz = accounts[2]
		const uintLW56UMg = BigInt("1683")
		const addressvzMU7r = accounts[1]
		const uint256skdtGxK = await DSPuEPx5ex.balanceOf.call(addressZXnMZWz, {from: "0x0000000000000000000000000000000000000001"});
		const boollRlM18f = await DSPuEPx5ex.burnFrombyOwner.call(addressvzMU7r, uintLW56UMg, {from: accounts[0]});

		assert.equal(uint256skdtGxK, BigInt("0"))
		await expect(DSPuEPx5ex.burnFrombyOwner.call(addressvzMU7r, uintLW56UMg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})