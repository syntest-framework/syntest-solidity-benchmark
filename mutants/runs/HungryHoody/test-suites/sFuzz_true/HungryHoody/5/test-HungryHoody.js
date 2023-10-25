const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyeNnliMv = await HungryHoody.new({from: accounts[2]});
		const addressFchDMwO = "0x0000000000000000000000000000000000000001"
		const addressJY0RYq8 = accounts[4]
		const addressZHLc0mH = accounts[1]
		const uintyoHw9Nj = BigInt("45")
		const addressfbvz5ca = "0x0000000000000000000000000000000000000001"
		const uintSDzEKH7 = BigInt("522")
		const uintXlUof5 = BigInt("682")
		const uintib5yfor = await HungryHoodyeNnliMv.allowance.call(addressJY0RYq8, addressFchDMwO, {from: "0x0000000000000000000000000000000000000001"});
		const uintzVsdaX = await HungryHoodyeNnliMv.balanceOf.call(addressZHLc0mH, {from: "0x0000000000000000000000000000000000000001"});
		const boolI8Ara1y = await HungryHoodyeNnliMv.approve.call(addressfbvz5ca, uintyoHw9Nj, {from: accounts[4]});
		const uintzfIvn8P = await HungryHoodyeNnliMv.safeSub.call(uintXlUof5, uintSDzEKH7, {from: accounts[0]});

		assert.equal(boolI8Ara1y, true)
		assert.equal(uintib5yfor, BigInt("0"))
		assert.equal(uintzVsdaX, BigInt("0"))
		assert.equal(uintzfIvn8P, BigInt("160"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyllenOF = await HungryHoody.new({from: accounts[0]});
		const uintzt5jqyg = BigInt("622")
		const addressjZLx2lf = accounts[3]
		const uintwOYVzui = BigInt("809")
		const addressllPvUG = accounts[1]
		const uintUXrmkks = BigInt("1056")
		const addressL1Evab0 = accounts[0]
		const uintGec4IBz = BigInt("323")
		const uintsRYUkoi = BigInt("1078")
		const uintZxfXlS1 = BigInt("1535")
		const uintRh1GFPT = BigInt("73")
		const uintMozPYEG = BigInt("813")
		const uintQhr4sjh = BigInt("51")
		const boolhpK0Cpe = await HungryHoodyllenOF.transfer.call(addressjZLx2lf, uintzt5jqyg, {from: accounts[3]});
		const boolAAMpfoe = await HungryHoodyllenOF.approve.call(addressllPvUG, uintwOYVzui, {from: accounts[1]});
		const boolSAMZKd = await HungryHoodyllenOF.approve.call(addressL1Evab0, uintUXrmkks, {from: accounts[3]});
		const uintyC8IoM6 = await HungryHoodyllenOF.safeMul.call(uintsRYUkoi, uintGec4IBz, {from: accounts[0]});
		const uintI7E6hv = await HungryHoodyllenOF.safeMul.call(uintRh1GFPT, uintZxfXlS1, {from: accounts[3]});
		const uintxQxKUZ = await HungryHoodyllenOF.safeMul.call(uintQhr4sjh, uintMozPYEG, {from: accounts[1]});

		await expect(HungryHoodyllenOF.transfer.call(addressjZLx2lf, uintzt5jqyg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyo6pjPCi = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfP57dFJ = accounts[2]
		const addressKfk388O = accounts[0]
		const uintigj7uZB = BigInt("873")
		const addressvRFkrOZ = accounts[2]
		const uintwdtdWcf = BigInt("211")
		const addressKIhuQPw = accounts[5]
		const addressLeuJ8X = accounts[2]
		const uintqTGHjm = await HungryHoodyo6pjPCi.allowance.call(addressKfk388O, addressfP57dFJ, {from: accounts[0]});
		const boolL0YlaPj = await HungryHoodyo6pjPCi.approve.call(addressvRFkrOZ, uintigj7uZB, {from: accounts[2]});
		const boolDawbx6D = await HungryHoodyo6pjPCi.transferFrom.call(addressLeuJ8X, addressKIhuQPw, uintwdtdWcf, {from: accounts[2]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynlx0mwC = await HungryHoody.new({from: accounts[1]});
		const addresss3dFYPP = accounts[0]
		const addressSacNIji = accounts[0]
		const uintJwUCeay = BigInt("962")
		const uintr989kh = BigInt("1074")
		const addressOzfv5Ov = accounts[1]
		const addressRhmo5xs = accounts[2]
		const uintBZxcTz = BigInt("1032")
		const uintYOekjsv = BigInt("126")
		const addressiYOEZl = accounts[5]
		const uintHaNx9m = await HungryHoodynlx0mwC.allowance.call(addressSacNIji, addresss3dFYPP, {from: accounts[2]});
		const uintXdlDGMK = await HungryHoodynlx0mwC.safeDiv.call(uintr989kh, uintJwUCeay, {from: accounts[2]});
		const uintSvtPVe9 = await HungryHoodynlx0mwC.allowance.call(addressRhmo5xs, addressOzfv5Ov, {from: accounts[5]});
		const uinteYCDhot = await HungryHoodynlx0mwC.safeSub.call(uintYOekjsv, uintBZxcTz, {from: accounts[4]});
		const uintqsKWgF = await HungryHoodynlx0mwC.balanceOf.call(addressiYOEZl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHaNx9m, BigInt("0"))
		assert.equal(uintSvtPVe9, BigInt("0"))
		assert.equal(uintXdlDGMK, BigInt("1"))
		await expect(HungryHoodynlx0mwC.safeSub.call(uintYOekjsv, uintBZxcTz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodycDSd5qW = await HungryHoody.new({from: accounts[4]});
		const uintWFyx2LE = BigInt("1958")
		const addressYErvqfo = accounts[4]
		const addressx9rDj8X = accounts[3]
		const uintE8I9EUy = BigInt("1850")
		const uintcqVnhcA = BigInt("1699")
		const uintH3xgQ5G = BigInt("460")
		const uintDZeFiI6 = BigInt("139")
		const uintdpjpafd = BigInt("829")
		const uintfwj2Yje = BigInt("1567")
		const uintERjERD = BigInt("122")
		const uintFwizsP = BigInt("589")
		const booltrGWogU = await HungryHoodycDSd5qW.transferFrom.call(addressx9rDj8X, addressYErvqfo, uintWFyx2LE, {from: accounts[2]});
		const uintmMPaYyB = await HungryHoodycDSd5qW.safeSub.call(uintcqVnhcA, uintE8I9EUy, {from: accounts[1]});
		const uintxPGLWQF = await HungryHoodycDSd5qW.safeSub.call(uintDZeFiI6, uintH3xgQ5G, {from: accounts[2]});
		const uintlhPOWyU = await HungryHoodycDSd5qW.safeDiv.call(uintfwj2Yje, uintdpjpafd, {from: accounts[5]});
		const uintwdGSez = await HungryHoodycDSd5qW.safeAdd.call(uintFwizsP, uintERjERD, {from: accounts[3]});

		await expect(HungryHoodycDSd5qW.transferFrom.call(addressx9rDj8X, addressYErvqfo, uintWFyx2LE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyXaI6q2s = await HungryHoody.new({from: accounts[1]});
		const addressJsdPou2 = accounts[3]
		const addressLzqnHkO = accounts[5]
		const addressWzgHjLj = "0x0000000000000000000000000000000000000001"
		const addressnJTFpX0 = accounts[2]
		const addressmnBQOQ6 = accounts[0]
		const uintr8OrgtY = BigInt("1036")
		const uintWO4C9yo = BigInt("1533")
		const uintNIEsVkr = BigInt("98")
		const addressaULCe4m = accounts[3]
		const uintSYtPq2D = await HungryHoodyXaI6q2s.allowance.call(addressLzqnHkO, addressJsdPou2, {from: "0x0000000000000000000000000000000000000001"});
		const uintrMAjj1M = await HungryHoodyXaI6q2s.balanceOf.call(addressWzgHjLj, {from: accounts[3]});
		const uintYTk4bB9 = await HungryHoodyXaI6q2s.allowance.call(addressmnBQOQ6, addressnJTFpX0, {from: accounts[4]});
		const uintiIBkUZ6 = await HungryHoodyXaI6q2s.safeSub.call(uintWO4C9yo, uintr8OrgtY, {from: accounts[0]});
		const uintnaMoW1c = await HungryHoodyXaI6q2s.totalSupply.call({from: accounts[5]});
		const boolSgv8Dxp = await HungryHoodyXaI6q2s.transfer.call(addressaULCe4m, uintNIEsVkr, {from: accounts[2]});

		assert.equal(uintSYtPq2D, BigInt("0"))
		assert.equal(uintYTk4bB9, BigInt("0"))
		assert.equal(uintiIBkUZ6, BigInt("497"))
		assert.equal(uintnaMoW1c, BigInt("25000000000000000000"))
		assert.equal(uintrMAjj1M, BigInt("0"))
		await expect(HungryHoodyXaI6q2s.transfer.call(addressaULCe4m, uintNIEsVkr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyQJ5xgE = await HungryHoody.new({from: accounts[4]});
		const addressFIgSi0n = accounts[5]
		const uintXtbrWXI = BigInt("238")
		const addressKAnwPBr = accounts[2]
		const uintGpuKa62 = BigInt("1269")
		const addressOciKVUO = accounts[4]
		const uintINycwM = await HungryHoodyQJ5xgE.balanceOf.call(addressFIgSi0n, {from: accounts[4]});
		const boolCfxuAfW = await HungryHoodyQJ5xgE.transfer.call(addressKAnwPBr, uintXtbrWXI, {from: accounts[4]});
		const boolNeHcKRC = await HungryHoodyQJ5xgE.transfer.call(addressOciKVUO, uintGpuKa62, {from: accounts[1]});

		assert.equal(boolCfxuAfW, true)
		assert.equal(uintINycwM, BigInt("0"))
		await expect(HungryHoodyQJ5xgE.transfer.call(addressOciKVUO, uintGpuKa62, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})