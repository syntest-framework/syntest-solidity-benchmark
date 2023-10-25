const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressYYJ9k44 = accounts[1]
		const addressLvksqJL = accounts[1]
		const SpiritCoinUv0juyl = await SpiritCoin.new(addressYYJ9k44, addressLvksqJL, {from: accounts[0]});
		const addressucCxQvy = accounts[0]
		const addressavwUjb = accounts[0]
		const uintDeV7ePX = await SpiritCoinUv0juyl.balanceOf.call(addressucCxQvy, {from: accounts[0]});
		const addresspyZCp8G = await SpiritCoinUv0juyl.setMinter.call(addressavwUjb, {from: accounts[1]});

		assert.equal(uintDeV7ePX, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresscvX3xt6 = "0x0000000000000000000000000000000000000001"
		const addressc2j4h6v = accounts[0]
		const SpiritCoinSPBGEV = await SpiritCoin.new(addresscvX3xt6, addressc2j4h6v, {from: accounts[2]});
		const addressdUx27UN = accounts[1]
		const addressKbjFhAV = accounts[0]
		const uintxK6vPNL = BigInt("618")
		const addressNuac2e7 = accounts[4]
		const addressqV9IlJ6 = accounts[2]
		const addressv27aeRe = accounts[1]
		const uintYUWoMmw = await SpiritCoinSPBGEV.balanceOf.call(addressdUx27UN, {from: accounts[0]});
		const address9ZFmpm = await SpiritCoinSPBGEV.setMinter.call(addressKbjFhAV, {from: accounts[0]});
//		const boolARCFbBv = await SpiritCoinSPBGEV.transfer.call(addressNuac2e7, uintxK6vPNL, {from: accounts[0]});
//		const addressLvxqV4I = await SpiritCoinSPBGEV.setMinter.call(addressqV9IlJ6, {from: accounts[3]});
//		const uintIOQXCiM = await SpiritCoinSPBGEV.balanceOf.call(addressv27aeRe, {from: accounts[4]});

		assert.equal(uintYUWoMmw, BigInt("0"))
		await expect(SpiritCoinSPBGEV.transfer.call(addressNuac2e7, uintxK6vPNL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressabID5ss = accounts[5]
		const addresslqZju07 = accounts[0]
		const SpiritCoinfGRnPPl = await SpiritCoin.new(addressabID5ss, addresslqZju07, {from: accounts[0]});
		const addresscCUJczE = "0x0000000000000000000000000000000000000001"
		const uintFfr9ncO = BigInt("350")
		const addressxl7LChW = accounts[2]
		const addressQQ7GGfz = accounts[4]
		const addressFy8jDPv = "0x0000000000000000000000000000000000000001"
		const uint1sUwfK = await SpiritCoinfGRnPPl.balanceOf.call(addresscCUJczE, {from: accounts[2]});
		const boollcggwW = await SpiritCoinfGRnPPl.transfer.call(addressxl7LChW, uintFfr9ncO, {from: accounts[5]});
		const uintazOE8uz = await SpiritCoinfGRnPPl.allowance.call(addressFy8jDPv, addressQQ7GGfz, {from: accounts[2]});

		assert.equal(boollcggwW, true)
		assert.equal(uint1sUwfK, BigInt("0"))
		assert.equal(uintazOE8uz, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressrtuWa27 = accounts[0]
		const addressRnSAtJG = accounts[2]
		const SpiritCoinfKh4QLp = await SpiritCoin.new(addressrtuWa27, addressRnSAtJG, {from: accounts[3]});
		const uinttApkRhU = BigInt("989")
		const addressEqbp8ks = accounts[0]
		const uint2oQncG = BigInt("1688")
		const addressuQZTolR = accounts[5]
		const boolnJsnuQJ = await SpiritCoinfKh4QLp.approve.call(addressEqbp8ks, uinttApkRhU, {from: accounts[2]});
		const boolOti20WU = await SpiritCoinfKh4QLp.approve.call(addressuQZTolR, uint2oQncG, {from: accounts[1]});

		assert.equal(boolOti20WU, true)
		assert.equal(boolnJsnuQJ, true)
	});

	it('test for SpiritCoin', async () => {
		const addressOieQQRB = "0x0000000000000000000000000000000000000001"
		const addressrSQ0Fb3 = accounts[4]
		const SpiritCoinf6sncmd = await SpiritCoin.new(addressOieQQRB, addressrSQ0Fb3, {from: accounts[2]});
		const addressMrBK3ku = accounts[3]
		const addressg5tcHpK = accounts[1]
		const uintoWnlT22 = BigInt("878")
		const addressSMWLMn = accounts[0]
		const uintkf1v1Xm = BigInt("370")
		const addressU49ZvGr = accounts[2]
		const addressTCyhXrm = accounts[0]
		const uintMhaCavP = await SpiritCoinf6sncmd.allowance.call(addressg5tcHpK, addressMrBK3ku, {from: accounts[0]});
		const boolujh6IcN = await SpiritCoinf6sncmd.approve.call(addressSMWLMn, uintoWnlT22, {from: accounts[3]});
		const boolPOi1y4 = await SpiritCoinf6sncmd.approve.call(addressU49ZvGr, uintkf1v1Xm, {from: accounts[4]});
//		const addressscOftVQ = await SpiritCoinf6sncmd.setMinter.call(addressTCyhXrm, {from: accounts[2]});

		assert.equal(boolPOi1y4, true)
		assert.equal(boolujh6IcN, true)
		assert.equal(uintMhaCavP, BigInt("0"))
		await expect(SpiritCoinf6sncmd.setMinter.call(addressTCyhXrm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresspRADVu = accounts[1]
		const address2c9SIR = accounts[0]
		const SpiritCoinxNOVohD = await SpiritCoin.new(addresspRADVu, address2c9SIR, {from: accounts[0]});
		const uintAq5WRc4 = BigInt("1859")
		const addressxttjgxn = accounts[4]
		const addresssYxODgB = accounts[2]
		const addressnJeyHEl = accounts[2]
		const uinto0Jqdfw = BigInt("1806")
		const addressFGEm0EU = "0x0000000000000000000000000000000000000001"
		const addressDINKO5p = accounts[5]
		const uinttYC3byO = BigInt("7")
		const addressGY9q264 = accounts[1]
		const addressnIc56Zb = accounts[4]
		const addressLosYt26 = accounts[1]
//		const boolJL0lALl = await SpiritCoinxNOVohD.transferFrom.call(addresssYxODgB, addressxttjgxn, uintAq5WRc4, {from: accounts[0]});
//		const uintkQGpZCZ = await SpiritCoinxNOVohD.balanceOf.call(addressnJeyHEl, {from: accounts[3]});
//		const boolk55QRGA = await SpiritCoinxNOVohD.transferFrom.call(addressDINKO5p, addressFGEm0EU, uinto0Jqdfw, {from: accounts[0]});
//		const boolQNp3OUZ = await SpiritCoinxNOVohD.approve.call(addressGY9q264, uinttYC3byO, {from: accounts[4]});
//		const uintsnKzRFQ = await SpiritCoinxNOVohD.allowance.call(addressLosYt26, addressnIc56Zb, {from: accounts[1]});

		await expect(SpiritCoinxNOVohD.transferFrom.call(addresssYxODgB, addressxttjgxn, uintAq5WRc4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressOp2biZk = accounts[3]
		const addressb8PELja = accounts[2]
		const SpiritCoinKJat6Bd = await SpiritCoin.new(addressOp2biZk, addressb8PELja, {from: accounts[3]});
		const uinthomIr9G = BigInt("1031")
		const addresspQS3lQw = accounts[2]
		const uinto95hw8S = BigInt("104")
		const addressE8GV3vl = accounts[1]
		const uintfNaa3p8 = BigInt("1447")
		const addressYQgUvc = accounts[1]
		const boolG14yLLo = await SpiritCoinKJat6Bd.transfer.call(addresspQS3lQw, uinthomIr9G, {from: accounts[3]});
//		const addressMPkmHfK = await SpiritCoinKJat6Bd.mint.call(addressE8GV3vl, uinto95hw8S, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK2MBCNE = await SpiritCoinKJat6Bd.transfer.call(addressYQgUvc, uintfNaa3p8, {from: accounts[3]});

		assert.equal(boolG14yLLo, true)
		await expect(SpiritCoinKJat6Bd.mint.call(addressE8GV3vl, uinto95hw8S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresscg6p0M1 = "0x0000000000000000000000000000000000000001"
		const addressdgZFUtD = accounts[4]
		const SpiritCoinf6sncmd = await SpiritCoin.new(addresscg6p0M1, addressdgZFUtD, {from: accounts[2]});
		const addressaEEalF = accounts[3]
		const addressYYDuUpy = accounts[1]
		const uinto7nqi7 = BigInt("1146")
		const addressq0pEvwH = accounts[0]
		const uint2QkmjS = BigInt("878")
		const addressBHiVJfi = accounts[0]
		const uintRlbR3gs = BigInt("370")
		const addressRFywFQ5 = accounts[2]
		const addressdDVkxnw = accounts[0]
		const uintMhaCavP = await SpiritCoinf6sncmd.allowance.call(addressYYDuUpy, addressaEEalF, {from: accounts[0]});
		const addressYENvAE4 = await SpiritCoinf6sncmd.mint.call(addressq0pEvwH, uinto7nqi7, {from: accounts[4]});
		const boolujh6IcN = await SpiritCoinf6sncmd.approve.call(addressBHiVJfi, uint2QkmjS, {from: accounts[3]});
		const boolPOi1y4 = await SpiritCoinf6sncmd.approve.call(addressRFywFQ5, uintRlbR3gs, {from: accounts[4]});
//		const addressscOftVQ = await SpiritCoinf6sncmd.setMinter.call(addressdDVkxnw, {from: accounts[2]});

		assert.equal(boolPOi1y4, true)
		assert.equal(boolujh6IcN, true)
		assert.equal(uintMhaCavP, BigInt("0"))
		await expect(SpiritCoinf6sncmd.setMinter.call(addressdDVkxnw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressUUCZlQd = accounts[4]
		const addresskyNmKQ = accounts[4]
		const SpiritCoinanecbM4 = await SpiritCoin.new(addressUUCZlQd, addresskyNmKQ, {from: "0x0000000000000000000000000000000000000001"});
		const addresssr4netF = "0x0000000000000000000000000000000000000001"
		const addresslJK59ca = accounts[3]
		const addressBjd7FWz = "0x0000000000000000000000000000000000000001"
		const uintZuJ7hrr = BigInt("1767")
		const addressMKsKpUz = accounts[2]
		const addresse4R4hqY = accounts[3]
		const uintsneqhoZ = BigInt("137")
		const addressqaxV5zM = accounts[5]
		const uintftj821y = await SpiritCoinanecbM4.allowance.call(addresslJK59ca, addresssr4netF, {from: accounts[4]});
		const addressE4dQGiD = await SpiritCoinanecbM4.setMinter.call(addressBjd7FWz, {from: accounts[1]});
		const addressBo1vME1 = await SpiritCoinanecbM4.mint.call(addressMKsKpUz, uintZuJ7hrr, {from: accounts[4]});
		const uintpLIdmpn = await SpiritCoinanecbM4.balanceOf.call(addresse4R4hqY, {from: accounts[4]});
		const boolzDJJ3PI = await SpiritCoinanecbM4.transfer.call(addressqaxV5zM, uintsneqhoZ, {from: accounts[1]});
	});
})