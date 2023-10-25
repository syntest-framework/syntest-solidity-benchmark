const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinqewRcJf = await DJCoin.new({from: accounts[2]});
		const uintn0URITn = BigInt("1597")
		const addressNMDjrku = accounts[2]
		const uintNLlVDK7 = BigInt("484")
		const addressuDRPFrG = accounts[2]
		const uintNoFkteM = BigInt("1560")
		const boolD2LBYmb = await DJCoinqewRcJf.approve.call(addressNMDjrku, uintn0URITn, {from: accounts[5]});
		const boolnar5VyL = await DJCoinqewRcJf.decreaseAllowance.call(addressuDRPFrG, uintNLlVDK7, {from: accounts[4]});
		const boolPjePeqD = await DJCoinqewRcJf.changetokensPerBlock.call(uintNoFkteM, {from: accounts[2]});

		assert.equal(boolD2LBYmb, true)
		assert.equal(boolPjePeqD, true)
		assert.equal(boolnar5VyL, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinqSDqqyZ = await DJCoin.new({from: accounts[5]});
		const addressZWaXYyE = accounts[5]
		const addressamE039c = accounts[3]
		const uintg2QSjCA = BigInt("1282")
		const addressTrjTyXw = accounts[4]
		const addresszRuF6ze = accounts[3]
		const addressmZh8Gvn = accounts[0]
		const addressX909Ok7 = accounts[1]
		const uint256W6pf8D = await DJCoinqSDqqyZ.allowance.call(addressamE039c, addressZWaXYyE, {from: accounts[0]});
		const boolahn9j2 = await DJCoinqSDqqyZ.increaseAllowance.call(addressTrjTyXw, uintg2QSjCA, {from: accounts[2]});
//		const addressfWnADuK = await DJCoinqSDqqyZ.transferOwnership.call(addresszRuF6ze, {from: accounts[4]});
//		const uint256AeYbePp = await DJCoinqSDqqyZ.allowance.call(addressX909Ok7, addressmZh8Gvn, {from: accounts[5]});

		assert.equal(boolahn9j2, true)
		assert.equal(uint256W6pf8D, BigInt("0"))
		await expect(DJCoinqSDqqyZ.transferOwnership.call(addresszRuF6ze, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinwAfuGge = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHW7onc1 = BigInt("1714")
		const addressxYK3ng = "0x0000000000000000000000000000000000000001"
		const addresse4lgl6L = "0x0000000000000000000000000000000000000001"
		const boolRlkGCiu = await DJCoinwAfuGge.decreaseAllowance.call(addressxYK3ng, uintHW7onc1, {from: accounts[3]});
		await DJCoinwAfuGge.onlyOwner.call({from: accounts[0]});
		const uint256OSMbrOa = await DJCoinwAfuGge.balanceOf.call(addresse4lgl6L, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCointrA52k = await DJCoin.new({from: accounts[5]});
		const uintDRxKrgu = BigInt("1628")
		const uintb0eaZg4 = BigInt("1452")
		const addressGNtHgfg = accounts[3]
		const boolggFYnC0 = await DJCointrA52k.changetokensPerBlock.call(uintDRxKrgu, {from: accounts[2]});
		const uint256PH7moT = await DJCointrA52k.totalSupply.call({from: accounts[2]});
//		const boolmSyWbbA = await DJCointrA52k.transfer.call(addressGNtHgfg, uintb0eaZg4, {from: accounts[2]});
//		const uint256hz869G3 = await DJCointrA52k.totalSupply.call({from: accounts[3]});

		assert.equal(boolggFYnC0, true)
		assert.equal(uint256PH7moT, BigInt("2100000000000"))
		await expect(DJCointrA52k.transfer.call(addressGNtHgfg, uintb0eaZg4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoincKp2j3 = await DJCoin.new({from: accounts[0]});
		const uintGj3sgW = BigInt("762")
		const addresszVmw1Ht = accounts[5]
		const addressC91TteL = accounts[2]
		const addressVavzc0u = accounts[0]
		const addressvl6Diyj = accounts[3]
		const boolvrcyLLp = await DJCoincKp2j3.approve.call(addresszVmw1Ht, uintGj3sgW, {from: accounts[0]});
//		const addressGmrMyTi = await DJCoincKp2j3.validRecipient.call(addressC91TteL, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoincKp2j3.onlyOwner.call({from: accounts[3]});
//		const addressVyGPyDm = await DJCoincKp2j3.validRecipient.call(addressVavzc0u, {from: accounts[3]});
//		const uint256x8skP8N = await DJCoincKp2j3.balanceOf.call(addressvl6Diyj, {from: accounts[5]});

		assert.equal(boolvrcyLLp, true)
		await expect(DJCoincKp2j3.validRecipient.call(addressC91TteL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinPhPDrh9 = await DJCoin.new({from: accounts[4]});
		const uintnzQG8w8 = BigInt("30")
		const addressFDOupHV = accounts[5]
		const addressLL9CbBb = accounts[0]
		const uintmw85myW = BigInt("740")
		const uintB2R9UZl = BigInt("1156")
		const uintOOALRJ = BigInt("1784")
		const addressb4p6Phc = accounts[3]
//		const boolWZIKxXt = await DJCoinPhPDrh9.transferFrom.call(addressLL9CbBb, addressFDOupHV, uintnzQG8w8, {from: accounts[1]});
//		await DJCoinPhPDrh9.onlyOwner.call({from: accounts[0]});
//		const uint256FJjcAcN = await DJCoinPhPDrh9.burn.call(uintB2R9UZl, uintmw85myW, {from: accounts[2]});
//		await DJCoinPhPDrh9.onlyOwner.call({from: accounts[1]});
//		const boolOxnSk8U = await DJCoinPhPDrh9.decreaseAllowance.call(addressb4p6Phc, uintOOALRJ, {from: accounts[2]});

		await expect(DJCoinPhPDrh9.transferFrom.call(addressLL9CbBb, addressFDOupHV, uintnzQG8w8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRWtThpA = await DJCoin.new({from: accounts[0]});
		const uintnm5HR3v = BigInt("160")
		const addressY2NvSq = accounts[0]
		const addresswRMyxPj = "0x0000000000000000000000000000000000000001"
		const uintDrbzt09 = BigInt("1548")
		const uintaRFX0A1 = BigInt("1590")
		const boolLT9sJ5a = await DJCoinRWtThpA.decreaseAllowance.call(addressY2NvSq, uintnm5HR3v, {from: accounts[1]});
		const uint256AOaQ1y2 = await DJCoinRWtThpA.balanceOf.call(addresswRMyxPj, {from: accounts[2]});
		const uint256LvZ3CeT = await DJCoinRWtThpA.totalSupply.call({from: accounts[1]});
//		await DJCoinRWtThpA.renounceOwnership.call({from: accounts[4]});
//		const uint256Rl4akXy = await DJCoinRWtThpA.burn.call(uintaRFX0A1, uintDrbzt09, {from: accounts[1]});

		assert.equal(boolLT9sJ5a, true)
		assert.equal(uint256AOaQ1y2, BigInt("0"))
		assert.equal(uint256LvZ3CeT, BigInt("2100000000000"))
		await expect(DJCoinRWtThpA.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCointrA52k = await DJCoin.new({from: accounts[5]});
		const uintqiJHWWa = BigInt("1762")
		const addressEwoFht = accounts[4]
		const uintY63LPB6 = BigInt("1628")
		const uinttxxWEWr = BigInt("1431")
		const addressV9vgdZl = accounts[5]
		const addresskNNlTEk = await DJCointrA52k.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUZ6qrnS = await DJCointrA52k.approve.call(addressEwoFht, uintqiJHWWa, {from: accounts[2]});
		const boolggFYnC0 = await DJCointrA52k.changetokensPerBlock.call(uintY63LPB6, {from: accounts[2]});
//		const boolmSyWbbA = await DJCointrA52k.transfer.call(addressV9vgdZl, uinttxxWEWr, {from: accounts[2]});
//		await DJCointrA52k.renounceOwnership.call({from: accounts[4]});
//		const uint256hz869G3 = await DJCointrA52k.totalSupply.call({from: accounts[3]});

		assert.equal(addresskNNlTEk, 0x21DcCed6638EF404e68b1e664AA0568DCC7f76CB)
		assert.equal(boolUZ6qrnS, true)
		assert.equal(boolggFYnC0, true)
		await expect(DJCointrA52k.transfer.call(addressV9vgdZl, uinttxxWEWr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCointrA52k = await DJCoin.new({from: accounts[5]});
		const uintgnXNvmC = BigInt("1628")
		const uintLlcTCLl = BigInt("793")
		const addressH8vsKRg = accounts[5]
		const uintU5x4gj4 = BigInt("604")
		const addressYssW72 = accounts[4]
		const addressWclhzf = "0x0000000000000000000000000000000000000001"
		const uintu01nYKJ = BigInt("1445")
		const addressQsarlyT = accounts[5]
		const boolggFYnC0 = await DJCointrA52k.changetokensPerBlock.call(uintgnXNvmC, {from: accounts[2]});
		const boolArDW0ka = await DJCointrA52k.decreaseAllowance.call(addressH8vsKRg, uintLlcTCLl, {from: accounts[1]});
		const boolu5S9Lu4 = await DJCointrA52k.decreaseAllowance.call(addressYssW72, uintU5x4gj4, {from: accounts[4]});
		const addressMN09WHW = await DJCointrA52k.transferOwnership.call(addressWclhzf, {from: accounts[5]});
//		const boolmSyWbbA = await DJCointrA52k.transfer.call(addressQsarlyT, uintu01nYKJ, {from: accounts[2]});
//		const uint256hz869G3 = await DJCointrA52k.totalSupply.call({from: accounts[3]});

		assert.equal(boolArDW0ka, true)
		assert.equal(boolggFYnC0, true)
		assert.equal(boolu5S9Lu4, true)
		await expect(DJCointrA52k.transfer.call(addressQsarlyT, uintu01nYKJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGv4e8YT = await DJCoin.new({from: accounts[2]});
		const uintIHK3W7a = BigInt("443")
		const addressiVXMi9 = accounts[0]
		const uintfeIUOjr = BigInt("106")
		const uintI4DUAXV = BigInt("535")
		const uintZtiCbU = BigInt("390")
		const addressrVsijDK = accounts[1]
		const uintIPSCPhy = BigInt("446")
		const addressiKgso8t = accounts[0]
		const booljGPQAXa = await DJCoinGv4e8YT.approve.call(addressiVXMi9, uintIHK3W7a, {from: accounts[0]});
		const uint256jijQq1W = await DJCoinGv4e8YT.burn.call(uintI4DUAXV, uintfeIUOjr, {from: accounts[2]});
//		const boolaLEnvZT = await DJCoinGv4e8YT.transfer.call(addressrVsijDK, uintZtiCbU, {from: accounts[0]});
//		const boolwKmRyQ0 = await DJCoinGv4e8YT.transfer.call(addressiKgso8t, uintIPSCPhy, {from: accounts[1]});
//		const addressQh0gpa8 = await DJCoinGv4e8YT.owner.call({from: accounts[0]});

		assert.equal(booljGPQAXa, true)
		assert.equal(uint256jijQq1W, BigInt("2077740000000"))
		await expect(DJCoinGv4e8YT.transfer.call(addressrVsijDK, uintZtiCbU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGv4e8YT = await DJCoin.new({from: accounts[2]});
		const uintkRCGZeR = BigInt("1785")
		const addressw2xwXf = accounts[4]
		const uintJM0NfJZ = BigInt("2009")
		const uintaJWH9tv = BigInt("96")
		const addressySxKun = accounts[1]
		const addressakT71hR = accounts[1]
		const uintv8HK41p = BigInt("452")
		const addressE3UaiK7 = accounts[2]
		const addressOJwcnlT = accounts[4]
		const uintacXdgLd = BigInt("1012")
		const addressWGQNcwa = accounts[5]
		const booljpfDxqN = await DJCoinGv4e8YT.approve.call(addressw2xwXf, uintkRCGZeR, {from: accounts[4]});
//		await DJCoinGv4e8YT.renounceOwnership.call({from: accounts[2]});
//		const boolxJYhbIX = await DJCoinGv4e8YT.changetokensPerBlock.call(uintJM0NfJZ, {from: accounts[0]});
//		const boolaLEnvZT = await DJCoinGv4e8YT.transfer.call(addressySxKun, uintaJWH9tv, {from: accounts[0]});
//		const addressDSpNRYl = await DJCoinGv4e8YT.validRecipient.call(addressakT71hR, {from: accounts[0]});
//		await DJCoinGv4e8YT.onlyOwner.call({from: accounts[0]});
//		const boolF0JRtwh = await DJCoinGv4e8YT.transferFrom.call(addressOJwcnlT, addressE3UaiK7, uintv8HK41p, {from: accounts[4]});
//		const boolfAQraw9 = await DJCoinGv4e8YT.transfer.call(addressWGQNcwa, uintacXdgLd, {from: accounts[5]});

		assert.equal(booljpfDxqN, true)
		await expect(DJCoinGv4e8YT.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinUXdhWNl = await DJCoin.new({from: accounts[3]});
		const uintrHZ9smV = BigInt("0")
		const addressgKFlDxB = accounts[1]
		const addressVAHhnff = accounts[1]
		const addressulVZ1MI = accounts[4]
		const uintNB8mQQ5 = BigInt("1387")
		const addressndscTbD = accounts[4]
		const boolEEsHudI = await DJCoinUXdhWNl.transfer.call(addressgKFlDxB, uintrHZ9smV, {from: accounts[2]});
//		const addressapZedbi = await DJCoinUXdhWNl.validRecipient.call(addressVAHhnff, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinUXdhWNl.onlyOwner.call({from: accounts[4]});
//		const uint256yT46w4G = await DJCoinUXdhWNl.balanceOf.call(addressulVZ1MI, {from: accounts[1]});
//		const uint256rDRJwiY = await DJCoinUXdhWNl.totalSupply.call({from: accounts[4]});
//		const boolSFZI35e = await DJCoinUXdhWNl.transfer.call(addressndscTbD, uintNB8mQQ5, {from: accounts[4]});

		assert.equal(boolEEsHudI, true)
		await expect(DJCoinUXdhWNl.validRecipient.call(addressVAHhnff, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})