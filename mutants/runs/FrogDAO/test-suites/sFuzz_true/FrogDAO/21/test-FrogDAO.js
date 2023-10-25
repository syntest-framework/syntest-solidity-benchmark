const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOdNOvu5S = await FrogDAO.new({from: accounts[0]});
		const uintopJ1Hc = BigInt("562")
		const addresskbJo8E = accounts[3]
		const addressHS2IEJs = accounts[4]
		const uintoTH6vyf = BigInt("1102")
		const addressQduLaqx = accounts[0]
		const uintlEpfiQ2 = BigInt("228")
		const uintp0vMAbK = BigInt("1723")
		const uintwcRdqyQ = BigInt("628")
		const uintOjMkmhX = BigInt("1169")
		const uintifuUKaL = BigInt("976")
		const uintp0ERcH6 = BigInt("1321")
		const booliRkByxP = await FrogDAOdNOvu5S.transfer.call(addresskbJo8E, uintopJ1Hc, {from: accounts[1]});
		const uintO8BWql = await FrogDAOdNOvu5S.balanceOf.call(addressHS2IEJs, {from: accounts[4]});
		const boolqrMdCla = await FrogDAOdNOvu5S.approve.call(addressQduLaqx, uintoTH6vyf, {from: accounts[3]});
		const uintQoLI7pe = await FrogDAOdNOvu5S.safeSub.call(uintp0vMAbK, uintlEpfiQ2, {from: accounts[1]});
		const uintasCGAr = await FrogDAOdNOvu5S.safeSub.call(uintOjMkmhX, uintwcRdqyQ, {from: accounts[2]});
		const uintheai1sL = await FrogDAOdNOvu5S.safeMul.call(uintp0ERcH6, uintifuUKaL, {from: accounts[1]});

		await expect(FrogDAOdNOvu5S.transfer.call(addresskbJo8E, uintopJ1Hc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOQF2t3dg = await FrogDAO.new({from: accounts[2]});
		const uintOykqfI = BigInt("657")
		const addressJTrhhD = accounts[3]
		const addresslSGX2Hm = accounts[4]
		const addressanxovqB = accounts[1]
		const addresskAsuxy = accounts[3]
		const uintvtmMXy4 = BigInt("163")
		const uintFXah3Eu = BigInt("1422")
		const uintHI40Oy9 = BigInt("1152")
		const uint6l5ih3 = BigInt("282")
		const boolByK9YzS = await FrogDAOQF2t3dg.transferFrom.call(addresslSGX2Hm, addressJTrhhD, uintOykqfI, {from: "0x0000000000000000000000000000000000000001"});
		const uintGcGjUAK = await FrogDAOQF2t3dg.allowance.call(addresskAsuxy, addressanxovqB, {from: accounts[4]});
		const uintWMdh9Uh = await FrogDAOQF2t3dg.safeSub.call(uintFXah3Eu, uintvtmMXy4, {from: accounts[0]});
		const uintiLERfTo = await FrogDAOQF2t3dg.safeSub.call(uint6l5ih3, uintHI40Oy9, {from: accounts[4]});

		await expect(FrogDAOQF2t3dg.transferFrom.call(addresslSGX2Hm, addressJTrhhD, uintOykqfI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOGaIcPTF = await FrogDAO.new({from: accounts[5]});
		const uintAbGMPs = BigInt("1834")
		const addressspyhJwv = accounts[1]
		const uintHlx59DF = BigInt("695")
		const uintXvdxU0 = BigInt("1382")
		const uintBPRnsDu = await FrogDAOGaIcPTF.totalSupply.call({from: accounts[4]});
		const boolCeWZ7vB = await FrogDAOGaIcPTF.transfer.call(addressspyhJwv, uintAbGMPs, {from: accounts[0]});
		const uintQjBC1HB = await FrogDAOGaIcPTF.safeSub.call(uintXvdxU0, uintHlx59DF, {from: accounts[0]});

		assert.equal(uintBPRnsDu, BigInt("1000000000000000000000000"))
		await expect(FrogDAOGaIcPTF.transfer.call(addressspyhJwv, uintAbGMPs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOjnDC328 = await FrogDAO.new({from: accounts[0]});
		const uinthxctJ3V = BigInt("70")
		const addressWHCQDhF = accounts[3]
		const uintTuTIMi = BigInt("947")
		const uintQrPeyBi = BigInt("1585")
		const uintAF1zHHd = BigInt("716")
		const uintVZ483LE = BigInt("393")
		const uintVrnlKMc = BigInt("2016")
		const addressz4rNWUw = accounts[3]
		const uintLPFkddO = BigInt("774")
		const address71G1D0 = accounts[0]
		const boolkLL1aiD = await FrogDAOjnDC328.approve.call(addressWHCQDhF, uinthxctJ3V, {from: accounts[3]});
		const uinty2oNAa = await FrogDAOjnDC328.safeSub.call(uintQrPeyBi, uintTuTIMi, {from: "0x0000000000000000000000000000000000000001"});
		const uintozV3yfY = await FrogDAOjnDC328.safeMul.call(uintVZ483LE, uintAF1zHHd, {from: accounts[1]});
		const boolaXRsYUD = await FrogDAOjnDC328.transfer.call(addressz4rNWUw, uintVrnlKMc, {from: accounts[2]});
		const boolXDfw7cA = await FrogDAOjnDC328.approve.call(address71G1D0, uintLPFkddO, {from: accounts[1]});

		assert.equal(boolkLL1aiD, true)
		assert.equal(uintozV3yfY, BigInt("281388"))
		assert.equal(uinty2oNAa, BigInt("638"))
		await expect(FrogDAOjnDC328.transfer.call(addressz4rNWUw, uintVrnlKMc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOodIwzvt = await FrogDAO.new({from: accounts[4]});
		const addressCO15PvE = accounts[0]
		const addressJ3XlYOm = accounts[3]
		const addressdzK4xG = accounts[3]
		const uintt0XXcdw = BigInt("644")
		const uintcaZsOvn = BigInt("1175")
		const addressRtDIf8Y = accounts[3]
		const addresskVndM7f = accounts[4]
		const uintJDeskkB = await FrogDAOodIwzvt.balanceOf.call(addressCO15PvE, {from: accounts[3]});
		const uintln64ARr = await FrogDAOodIwzvt.allowance.call(addressdzK4xG, addressJ3XlYOm, {from: accounts[2]});
		const uintX1f4Lkl = await FrogDAOodIwzvt.safeMul.call(uintcaZsOvn, uintt0XXcdw, {from: accounts[4]});
		const uintaM47hoV = await FrogDAOodIwzvt.allowance.call(addresskVndM7f, addressRtDIf8Y, {from: accounts[0]});

		assert.equal(uintJDeskkB, BigInt("0"))
		assert.equal(uintX1f4Lkl, BigInt("756700"))
		assert.equal(uintaM47hoV, BigInt("0"))
		assert.equal(uintln64ARr, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOYX7XJY5 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintiye5J52 = BigInt("1457")
		const uintih3xL5 = BigInt("1032")
		const uintbTSUeRb = BigInt("921")
		const uintYDk0u7m = BigInt("1987")
		const uintoKOO7E = await FrogDAOYX7XJY5.safeMul.call(uintih3xL5, uintiye5J52, {from: accounts[5]});
		const uintgcBg5eK = await FrogDAOYX7XJY5.safeSub.call(uintYDk0u7m, uintbTSUeRb, {from: accounts[0]});
		const uintLePZJZ = await FrogDAOYX7XJY5.totalSupply.call({from: accounts[0]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOefMo4OH = await FrogDAO.new({from: accounts[4]});
		const uintvuCrojR = BigInt("1296")
		const addressF2S8BVM = accounts[3]
		const addressU5kfVN = accounts[5]
		const uintyvkerCc = BigInt("1636")
		const addresssi7qXI0 = accounts[4]
		const uintKAi6Knc = BigInt("1952")
		const addressEE4NAE = accounts[3]
		const boolS5gMEEK = await FrogDAOefMo4OH.transfer.call(addressF2S8BVM, uintvuCrojR, {from: accounts[4]});
		const uintkDEvYm = await FrogDAOefMo4OH.balanceOf.call(addressU5kfVN, {from: accounts[3]});
		const boolQodtBFU = await FrogDAOefMo4OH.transfer.call(addresssi7qXI0, uintyvkerCc, {from: accounts[1]});
		const boolLuY6c45 = await FrogDAOefMo4OH.approve.call(addressEE4NAE, uintKAi6Knc, {from: accounts[1]});

		assert.equal(boolS5gMEEK, true)
		assert.equal(uintkDEvYm, BigInt("0"))
		await expect(FrogDAOefMo4OH.transfer.call(addresssi7qXI0, uintyvkerCc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOt7TuUj1 = await FrogDAO.new({from: accounts[1]});
		const uintjXLp2jS = BigInt("539")
		const uintbtpBwvD = BigInt("902")
		const uintK88hNUc = BigInt("237")
		const uintmh0diyL = BigInt("233")
		const addressMR4OjL0 = accounts[4]
		const uintlJFLcx = BigInt("290")
		const uintVqOyUbv = BigInt("1759")
		const uintc5I5ma3 = BigInt("316")
		const addresssP5UVMN = accounts[0]
		const uintEHt2X6y = BigInt("1581")
		const addressjGMrOxf = accounts[3]
		const uintsDpHVfa = await FrogDAOt7TuUj1.safeDiv.call(uintbtpBwvD, uintjXLp2jS, {from: accounts[0]});
		const uintW7cIU1f = await FrogDAOt7TuUj1.safeDiv.call(uintmh0diyL, uintK88hNUc, {from: accounts[4]});
		const uintwOe63hq = await FrogDAOt7TuUj1.balanceOf.call(addressMR4OjL0, {from: accounts[3]});
		const uintFFFgQw = await FrogDAOt7TuUj1.safeDiv.call(uintVqOyUbv, uintlJFLcx, {from: accounts[5]});
		const boolxhJVnqn = await FrogDAOt7TuUj1.transfer.call(addresssP5UVMN, uintc5I5ma3, {from: accounts[1]});
		const boolz8nye2b = await FrogDAOt7TuUj1.transfer.call(addressjGMrOxf, uintEHt2X6y, {from: accounts[3]});

		assert.equal(boolxhJVnqn, true)
		assert.equal(uintFFFgQw, BigInt("6"))
		assert.equal(uintW7cIU1f, BigInt("0"))
		assert.equal(uintsDpHVfa, BigInt("1"))
		assert.equal(uintwOe63hq, BigInt("0"))
		await expect(FrogDAOt7TuUj1.transfer.call(addressjGMrOxf, uintEHt2X6y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})