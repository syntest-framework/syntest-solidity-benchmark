const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnuEZNA5 = await LIBERAPAY.new({from: accounts[4]});
		const uints24CtLc = BigInt("1561")
		const addressjj14gGN = accounts[0]
		const uinthtifuPM = BigInt("691")
		const addressMXP2fz = accounts[0]
		const boolFKVuds = await LIBERAPAYnuEZNA5.approve.call(addressjj14gGN, uints24CtLc, {from: accounts[2]});
		const bool4I1a65 = await LIBERAPAYnuEZNA5.approve.call(addressMXP2fz, uinthtifuPM, {from: accounts[4]});
		const uint256JKUF2Bl = await LIBERAPAYnuEZNA5.totalSupply.call({from: accounts[3]});
		await LIBERAPAYnuEZNA5.whenPaused.call({from: accounts[2]});

		assert.equal(bool4I1a65, true)
		assert.equal(boolFKVuds, true)
		assert.equal(uint256JKUF2Bl, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYnuEZNA5.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintPNQStEh = BigInt("1720")
		const uinthqrMPaf = BigInt("1885")
		const addressfAgtVlB = accounts[0]
		const boolqiqMCgj = await LIBERAPAYNbODZ3k.burn.call(uintPNQStEh, {from: accounts[3]});
		await LIBERAPAYNbODZ3k.showLockState.call(addressfAgtVlB, uinthqrMPaf, {from: accounts[0]});

		await expect(LIBERAPAYNbODZ3k.burn.call(uintPNQStEh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDlkR5HM = await LIBERAPAY.new({from: accounts[4]});
		const uintwBmwQ2 = BigInt("1713")
		const address6MerjW = accounts[1]
		const uintocRcnrS = BigInt("1210")
		const addressQGhXMok = accounts[0]
		const boolK60yBQ = await LIBERAPAYDlkR5HM.increaseAllowance.call(address6MerjW, uintwBmwQ2, {from: accounts[4]});
		await LIBERAPAYDlkR5HM.whenNotPaused.call({from: accounts[0]});
		const boolM9FSFja = await LIBERAPAYDlkR5HM.unlock.call(addressQGhXMok, uintocRcnrS, {from: accounts[0]});
		await LIBERAPAYDlkR5HM.pause.call({from: accounts[5]});

		assert.equal(boolK60yBQ, true)
		await expect(LIBERAPAYDlkR5HM.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcWNCbzw = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWbXsIwD = accounts[1]
		const addressweEs4eW = accounts[3]
		const uinteLbI04I = BigInt("325")
		const addressh19lVUr = accounts[5]
		const uintp526qU1 = BigInt("210")
		const addressSjUYT6Y = accounts[0]
		const uint256oE9LVnr = await LIBERAPAYcWNCbzw.allowance.call(addressweEs4eW, addressWbXsIwD, {from: accounts[4]});
		await LIBERAPAYcWNCbzw.showLockState.call(addressh19lVUr, uinteLbI04I, {from: accounts[5]});
		const bool90kADL = await LIBERAPAYcWNCbzw.acceptOwnership.call({from: accounts[2]});
		const boolmWVm4ek = await LIBERAPAYcWNCbzw.burnFrom.call(addressSjUYT6Y, uintp526qU1, {from: accounts[0]});
		await LIBERAPAYcWNCbzw.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYcWNCbzw.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYh89qpZX = await LIBERAPAY.new({from: accounts[3]});
		const addressxnOewEb = accounts[1]
		const uintbLeyVjH = BigInt("535")
		const addressSpyszs6 = "0x0000000000000000000000000000000000000001"
		const uintqyuC9qq = BigInt("35")
		const addressKM9Lsv = accounts[1]
		const addressdj6oqyp = await LIBERAPAYh89qpZX.upgradeTo.call(addressxnOewEb, {from: accounts[3]});
		const boolKrB7aHh = await LIBERAPAYh89qpZX.burnFrom.call(addressSpyszs6, uintbLeyVjH, {from: accounts[1]});
		const booluvAIQDq = await LIBERAPAYh89qpZX.distribute.call(addressKM9Lsv, uintqyuC9qq, {from: accounts[5]});

		await expect(LIBERAPAYh89qpZX.burnFrom.call(addressSpyszs6, uintbLeyVjH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvgEyWpA = await LIBERAPAY.new({from: accounts[3]});
		await LIBERAPAYvgEyWpA.f.call({from: accounts[0]});
		const uint256vtpWOoz = await LIBERAPAYvgEyWpA.getNowTime.call({from: accounts[3]});

		await expect(LIBERAPAYvgEyWpA.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYut6oBvR = await LIBERAPAY.new({from: accounts[3]});
		const addressQ2qLj4g = accounts[0]
		const addressD9DGFp = accounts[0]
		const uint256iHA0UCz = await LIBERAPAYut6oBvR.getNowTime.call({from: accounts[2]});
		const addresstFw7Cle = await LIBERAPAYut6oBvR.transferOwnership.call(addressQ2qLj4g, {from: accounts[1]});
		const addressQsEMr4U = await LIBERAPAYut6oBvR.upgradeTo.call(addressD9DGFp, {from: accounts[3]});

		assert.equal(uint256iHA0UCz, BigInt("1630231012"))
		await expect(LIBERAPAYut6oBvR.transferOwnership.call(addressQ2qLj4g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintG4HevE = BigInt("932")
		const addressM1CUB3x = accounts[0]
		const uinteIjEWnd = BigInt("1281")
		const uintjWkOGts = BigInt("1720")
		const uintgaxT46P = BigInt("1885")
		const addresszDRLFop = accounts[1]
		const boolzZZqbPH = await LIBERAPAYNbODZ3k.decreaseAllowance.call(addressM1CUB3x, uintG4HevE, {from: accounts[2]});
		const boolttyiMW = await LIBERAPAYNbODZ3k.burn.call(uinteIjEWnd, {from: accounts[4]});
		const boolqiqMCgj = await LIBERAPAYNbODZ3k.burn.call(uintjWkOGts, {from: accounts[3]});
		await LIBERAPAYNbODZ3k.whenPaused.call({from: accounts[0]});
		await LIBERAPAYNbODZ3k.showLockState.call(addresszDRLFop, uintgaxT46P, {from: accounts[0]});

		await expect(LIBERAPAYNbODZ3k.decreaseAllowance.call(addressM1CUB3x, uintG4HevE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addressFXSqBB2 = accounts[0]
		const uintA5USuhN = BigInt("1129")
		const addressx7kTcH = accounts[1]
		const uintl5hdZeC = BigInt("1720")
		const uint256jkonu9F = await LIBERAPAYNbODZ3k.balanceOf.call(addressFXSqBB2, {from: accounts[0]});
		const booloKrNura = await LIBERAPAYNbODZ3k.distribute.call(addressx7kTcH, uintA5USuhN, {from: accounts[2]});
		const boolqiqMCgj = await LIBERAPAYNbODZ3k.burn.call(uintl5hdZeC, {from: accounts[3]});

		assert.equal(booloKrNura, true)
		assert.equal(uint256jkonu9F, BigInt("0"))
		await expect(LIBERAPAYNbODZ3k.burn.call(uintl5hdZeC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintp6SonZa = BigInt("1885")
		const addresscRetsga = accounts[0]
		await LIBERAPAYNbODZ3k.showLockState.call(addresscRetsga, uintp6SonZa, {from: accounts[0]});

		await expect(LIBERAPAYNbODZ3k.showLockState.call(addresscRetsga, uintp6SonZa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addressKw70uvR = accounts[1]
		const addressC2JIUGb = accounts[4]
		const uintqcXcwQg = BigInt("1885")
		const addressG9h3IN5 = accounts[0]
		const boolktwiY9g = await LIBERAPAYNbODZ3k.freezeAccount.call(addressKw70uvR, {from: accounts[2]});
		const uint256YiqTKhw = await LIBERAPAYNbODZ3k.balanceOf.call(addressC2JIUGb, {from: accounts[1]});
		await LIBERAPAYNbODZ3k.f.call({from: accounts[4]});
		await LIBERAPAYNbODZ3k.showLockState.call(addressG9h3IN5, uintqcXcwQg, {from: accounts[0]});

		assert.equal(boolktwiY9g, true)
		assert.equal(uint256YiqTKhw, BigInt("0"))
		await expect(LIBERAPAYNbODZ3k.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintHqP8T4t = BigInt("1869")
		const addressGMQsGGB = accounts[0]
		const uintZI2RZc3 = BigInt("1923")
		const addressMLN09bq = accounts[2]
		const uintFaWZCff = BigInt("285")
		const addressv7XiRXn = accounts[4]
		await LIBERAPAYNbODZ3k.showLockState.call(addressGMQsGGB, uintHqP8T4t, {from: accounts[0]});
		const boolBKqRtGR = await LIBERAPAYNbODZ3k.unlock.call(addressMLN09bq, uintZI2RZc3, {from: accounts[2]});
		const boolUxG54A = await LIBERAPAYNbODZ3k.decreaseAllowance.call(addressv7XiRXn, uintFaWZCff, {from: accounts[4]});

		await expect(LIBERAPAYNbODZ3k.showLockState.call(addressGMQsGGB, uintHqP8T4t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintA6hbApU = BigInt("954")
		const uintUrgvha = BigInt("239")
		const addressb7PXsSG = accounts[2]
		const addressdU1VhWA = accounts[0]
		const addressxexjJjj = accounts[0]
		const addresswtSnZ4P = accounts[0]
		const uint6XlhJV = BigInt("1129")
		const addressrP8OuHa = accounts[1]
		const uintEE5oRWk = BigInt("1707")
		const boolYK8GDPH = await LIBERAPAYNbODZ3k.lock.call(addressb7PXsSG, uintUrgvha, uintA6hbApU, {from: accounts[2]});
		const uint256jkonu9F = await LIBERAPAYNbODZ3k.balanceOf.call(addressdU1VhWA, {from: accounts[0]});
		const booliiYB1c = await LIBERAPAYNbODZ3k.freezeAccount.call(addressxexjJjj, {from: accounts[3]});
		const addressRgdXZhA = await LIBERAPAYNbODZ3k.notFrozen.call(addresswtSnZ4P, {from: accounts[3]});
		const booloKrNura = await LIBERAPAYNbODZ3k.distribute.call(addressrP8OuHa, uint6XlhJV, {from: accounts[2]});
		const boolqiqMCgj = await LIBERAPAYNbODZ3k.burn.call(uintEE5oRWk, {from: accounts[3]});

		assert.equal(boolYK8GDPH, true)
		assert.equal(uint256jkonu9F, BigInt("0"))
		await expect(LIBERAPAYNbODZ3k.freezeAccount.call(addressxexjJjj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addressoBS4m8l = "0x0000000000000000000000000000000000000002"
		const addressjB9N18p = accounts[0]
		const uint256OZ0w9lT = await LIBERAPAYNbODZ3k.balanceOf.call(addressoBS4m8l, {from: accounts[3]});
		const uint256qeD3LPs = await LIBERAPAYNbODZ3k.currentBalanceOf.call(addressjB9N18p, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OZ0w9lT, BigInt("0"))
		assert.equal(uint256qeD3LPs, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintwdhm45a = BigInt("701")
		const addressCItxlly = accounts[0]
		const uintiBB3uLB = BigInt("1885")
		const addressp0JutgN = accounts[1]
		const boolMbmokbh = await LIBERAPAYNbODZ3k.transfer.call(addressCItxlly, uintwdhm45a, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYNbODZ3k.showLockState.call(addressp0JutgN, uintiBB3uLB, {from: accounts[0]});

		await expect(LIBERAPAYNbODZ3k.transfer.call(addressCItxlly, uintwdhm45a, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addresslLr07Hs = accounts[2]
		const addressTsNCNBO = accounts[3]
		const uint256qeD3LPs = await LIBERAPAYNbODZ3k.currentBalanceOf.call(addresslLr07Hs, {from: "0x0000000000000000000000000000000000000001"});
		const addressub0IlJ5 = await LIBERAPAYNbODZ3k.transferOwnership.call(addressTsNCNBO, {from: accounts[2]});

		assert.equal(uint256qeD3LPs, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uinthc3OHSj = BigInt("1051")
		const addresslpod27K = accounts[1]
		const addressobyqpRt = accounts[2]
		const boolsrw1PZU = await LIBERAPAYNbODZ3k.mint.call(addresslpod27K, uinthc3OHSj, {from: accounts[2]});
		const uint256qeD3LPs = await LIBERAPAYNbODZ3k.currentBalanceOf.call(addressobyqpRt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYNbODZ3k.mint.call(addresslpod27K, uinthc3OHSj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintdCbCwoc = BigInt("1885")
		const addressVRkqqGE = accounts[1]
		const uintvwIEPZ = BigInt("368")
		const addressZy0RoJZ = "0x0000000000000000000000000000000000000001"
		const addressnIevSRX = accounts[0]
		const addressDtq7bNi = "0x0000000000000000000000000000000000000000"
		await LIBERAPAYNbODZ3k.showLockState.call(addressVRkqqGE, uintdCbCwoc, {from: accounts[0]});
		const boolNwKObah = await LIBERAPAYNbODZ3k.transferFrom.call(addressnIevSRX, addressZy0RoJZ, uintvwIEPZ, {from: accounts[5]});
		const uint256OZ0w9lT = await LIBERAPAYNbODZ3k.balanceOf.call(addressDtq7bNi, {from: accounts[3]});

		await expect(LIBERAPAYNbODZ3k.showLockState.call(addressVRkqqGE, uintdCbCwoc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uinti9i6U1P = BigInt("822")
		const addressJRw1LLb = accounts[1]
		const uintiPJxHO = BigInt("315")
		await LIBERAPAYNbODZ3k.showLockState.call(addressJRw1LLb, uinti9i6U1P, {from: accounts[0]});
		const boolArFfzr3 = await LIBERAPAYNbODZ3k.burn.call(uintiPJxHO, {from: accounts[2]});

		await expect(LIBERAPAYNbODZ3k.showLockState.call(addressJRw1LLb, uinti9i6U1P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addresscXd2EnO = "0x00000000000000000000000000000000000000-1"
		const addressl82f0Fj = accounts[4]
		const uintPXAXd44 = BigInt("1267")
		const addresszz4OEG0 = accounts[2]
		const uint256OZ0w9lT = await LIBERAPAYNbODZ3k.balanceOf.call(addresscXd2EnO, {from: accounts[3]});
		const addressDjS8GMw = await LIBERAPAYNbODZ3k.notFrozen.call(addressl82f0Fj, {from: accounts[3]});
		const boolzZTPmI3 = await LIBERAPAYNbODZ3k.distribute.call(addresszz4OEG0, uintPXAXd44, {from: accounts[0]});

		await expect(LIBERAPAYNbODZ3k.balanceOf.call(addresscXd2EnO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const uintZn94eun = BigInt("698")
		const addressIloXryM = accounts[1]
		const uintKTVFss6 = BigInt("1260")
		const addressDiQuJ93 = accounts[3]
		const uintdBeCbiC = BigInt("1885")
		const addressO3bfgJ4 = accounts[1]
		const boolMvNak1w = await LIBERAPAYNbODZ3k.transfer.call(addressIloXryM, uintZn94eun, {from: accounts[2]});
		const boolAhGaBLI = await LIBERAPAYNbODZ3k.unlock.call(addressDiQuJ93, uintKTVFss6, {from: accounts[3]});
		await LIBERAPAYNbODZ3k.showLockState.call(addressO3bfgJ4, uintdBeCbiC, {from: accounts[0]});

		assert.equal(boolMvNak1w, true)
		await expect(LIBERAPAYNbODZ3k.unlock.call(addressDiQuJ93, uintKTVFss6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addressz4ny8WJ = accounts[3]
		const addressivVFXw6 = "0x0000000000000000000000000000000000000001"
		const addressQi4lNDf = accounts[5]
		const uintWwqCXXd = BigInt("697")
		const addresskGseHhl = accounts[0]
		const boolAEMgGz2 = await LIBERAPAYNbODZ3k.unfreezeAccount.call(addressz4ny8WJ, {from: accounts[2]});
		const uint256wBiYvak = await LIBERAPAYNbODZ3k.allowance.call(addressQi4lNDf, addressivVFXw6, {from: accounts[0]});
		const boolMbmokbh = await LIBERAPAYNbODZ3k.transfer.call(addresskGseHhl, uintWwqCXXd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYNbODZ3k.unfreezeAccount.call(addressz4ny8WJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbODZ3k = await LIBERAPAY.new({from: accounts[2]});
		const addressxs18saY = accounts[1]
		await LIBERAPAYNbODZ3k.pause.call({from: accounts[2]});
		const uint256qeD3LPs = await LIBERAPAYNbODZ3k.currentBalanceOf.call(addressxs18saY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYNbODZ3k.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYx0ILhFN = await LIBERAPAY.new({from: accounts[2]});
		const uintpWHDfal = BigInt("1534")
		const addressx8TKXNh = "0x0000000000000000000000000000000000000001"
		const uinteNLXbnk = BigInt("496")
		const addresshbIBWq0 = accounts[1]
		const addressFyvYVAI = accounts[2]
		const addressQ4oMOow = "0x0000000000000000000000000000000000000001"
		const uintWj1UGAx = BigInt("540")
		const address86rdeF = accounts[0]
		const addressRNOAr95 = accounts[1]
		const boolpNnvgAs = await LIBERAPAYx0ILhFN.increaseAllowance.call(addressx8TKXNh, uintpWHDfal, {from: accounts[4]});
		const boolcLyWhf = await LIBERAPAYx0ILhFN.transferFrom.call(addressFyvYVAI, addresshbIBWq0, uinteNLXbnk, {from: accounts[0]});
		const boolxTRfLc = await LIBERAPAYx0ILhFN.freezeAccount.call(addressQ4oMOow, {from: accounts[4]});
		const boolKuqvby = await LIBERAPAYx0ILhFN.approve.call(address86rdeF, uintWj1UGAx, {from: accounts[4]});
		const addressxgRVzp6 = await LIBERAPAYx0ILhFN.notFrozen.call(addressRNOAr95, {from: accounts[3]});

		assert.equal(boolpNnvgAs, true)
		await expect(LIBERAPAYx0ILhFN.transferFrom.call(addressFyvYVAI, addresshbIBWq0, uinteNLXbnk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})