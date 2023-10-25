const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerimcS1Qo = await TimeMiner.new({from: accounts[4]});
		const addressaACrg5w = accounts[5]
		const uintEiTgFO = BigInt("375")
		const uintnAsNwMy = BigInt("1653")
		const uintC1I95KF = BigInt("717")
		const uintov9Bkh = BigInt("167")
		const boolmZXNdav = await TimeMinerimcS1Qo.isWhitelisted.call(addressaACrg5w, {from: accounts[2]});
//		const uint256Wux33VD = await TimeMinerimcS1Qo.setPrizeFromNewAddress.call(uintnAsNwMy, uintEiTgFO, {from: accounts[1]});
//		const uint256JkcE4X7 = await TimeMinerimcS1Qo.setPrizeFromNewAddress.call(uintov9Bkh, uintC1I95KF, {from: accounts[1]});

		assert.equal(boolmZXNdav, false)
		await expect(TimeMinerimcS1Qo.setPrizeFromNewAddress.call(uintnAsNwMy, uintEiTgFO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernnnym3b = await TimeMiner.new({from: accounts[4]});
		const booluM55ITC = true
		const uinteAiH6uv = BigInt("448")
		const addresshza8QgW = "0x0000000000000000000000000000000000000001"
//		const boolK4P0OjW = await TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]});
//		const boolWvsXTGg = await TimeMinernnnym3b.infoStableSystem.call({from: accounts[1]});
//		const boolH7qbSne = await TimeMinernnnym3b.transfer.call(addresshza8QgW, uinteAiH6uv, {from: accounts[2]});
//		const uint256T6v8jN0 = await TimeMinernnnym3b.totalSupply.call({from: accounts[2]});

		await expect(TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxTjnoE1 = await TimeMiner.new({from: accounts[4]});
		const addressHUhWFdk = accounts[0]
		const uintQle6Vhz = BigInt("624")
		const addresswJufdGL = accounts[0]
		const uint5FhpBM = BigInt("201")
		const addressy6bq4a = accounts[2]
//		const uint256k8ePXaz = await TimeMinerxTjnoE1.tokensToClaim.call(addressHUhWFdk, {from: accounts[3]});
//		const boolyDgxTJR = await TimeMinerxTjnoE1.infoStableSystem.call({from: accounts[2]});
//		const boolK3la9MW = await TimeMinerxTjnoE1.infoStableSystem.call({from: accounts[3]});
//		const boolpuHwJMj = await TimeMinerxTjnoE1.transfer.call(addresswJufdGL, uintQle6Vhz, {from: accounts[3]});
//		const boolMQHC8HK = await TimeMinerxTjnoE1.transfer.call(addressy6bq4a, uint5FhpBM, {from: accounts[2]});

		await expect(TimeMinerxTjnoE1.tokensToClaim.call(addressHUhWFdk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbRw67HK = await TimeMiner.new({from: accounts[1]});
		const addresslUpKPD = accounts[5]
		const addressBUDI5GK = accounts[1]
		const addressMVOfF1r = accounts[5]
		const uintveoXkQq = BigInt("282")
		const addressAVw3RgT = accounts[0]
		const uint256GZId3BL = await TimeMinerbRw67HK.balanceOf.call(addresslUpKPD, {from: accounts[5]});
		const uint256ErFZsH = await TimeMinerbRw67HK.balanceOf.call(addressBUDI5GK, {from: accounts[3]});
//		const uint256qEzXNBS = await TimeMinerbRw67HK.allInfoFor.call(addressMVOfF1r, {from: "0x0000000000000000000000000000000000000001"});
//		const booljJ68Muj = await TimeMinerbRw67HK.approve.call(addressAVw3RgT, uintveoXkQq, {from: accounts[3]});

		assert.equal(uint256ErFZsH, BigInt("12000000"))
		assert.equal(uint256GZId3BL, BigInt("0"))
		await expect(TimeMinerbRw67HK.allInfoFor.call(addressMVOfF1r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineruTI6zSn = await TimeMiner.new({from: accounts[2]});
		const uinth7jU9Uv = BigInt("1670")
		const uintug55Br = BigInt("1069")
		const uinttVIjRDq = BigInt("39")
		const addressnCJ3HcE = accounts[4]
		const uintiFqiz3W = BigInt("1602")
		const uintWJ3wOOr = BigInt("1603")
		const booliJSOvq8 = false
		const addressap07YvK = accounts[2]
		const addressQmlNzhM = accounts[4]
		const addressl4MWwxF = accounts[4]
//		await TimeMineruTI6zSn.preSaleFinished.call({from: accounts[4]});
//		const uint256h1wMuS = await TimeMineruTI6zSn.setPrizeFromNewAddress.call(uintug55Br, uinth7jU9Uv, {from: accounts[2]});
//		const boolegqeUZL = await TimeMineruTI6zSn.approve.call(addressnCJ3HcE, uinttVIjRDq, {from: accounts[3]});
//		const uint256zsmPTZf = await TimeMineruTI6zSn.setPrizeFromNewAddress.call(uintWJ3wOOr, uintiFqiz3W, {from: accounts[1]});
//		const addressPWIP1cI = await TimeMineruTI6zSn.whitelist.call(addressap07YvK, booliJSOvq8, {from: accounts[5]});
//		const uint256Pr7q4Y = await TimeMineruTI6zSn.allowance.call(addressl4MWwxF, addressQmlNzhM, {from: accounts[1]});

		await expect(TimeMineruTI6zSn.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinersffCreo = await TimeMiner.new({from: accounts[1]});
		const addresszxQR6g = accounts[2]
		const addressRL2NBZ8 = accounts[2]
		const addresshWVXO7N = "0x0000000000000000000000000000000000000001"
		const addressXprhyqb = accounts[3]
		const uint256t7nwxz = await TimeMinersffCreo.allowance.call(addressRL2NBZ8, addresszxQR6g, {from: accounts[4]});
		const uint256M25GWss = await TimeMinersffCreo.balanceOfTokenCirculation.call(addresshWVXO7N, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Slfnow = await TimeMinersffCreo.tokensToClaim.call(addressXprhyqb, {from: accounts[2]});

		assert.equal(uint256M25GWss, BigInt("0"))
		assert.equal(uint256t7nwxz, BigInt("0"))
		await expect(TimeMinersffCreo.tokensToClaim.call(addressXprhyqb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlApGOGy = await TimeMiner.new({from: accounts[1]});
		const boolsE5Yq5R = true
		const addressACiYIps = accounts[0]
//		const addressxUyrucA = await TimeMinerlApGOGy.whitelist.call(addressACiYIps, boolsE5Yq5R, {from: accounts[5]});
//		const uint256TLNqMm = await TimeMinerlApGOGy.totalSupply.call({from: accounts[5]});

		await expect(TimeMinerlApGOGy.whitelist.call(addressACiYIps, boolsE5Yq5R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbRw67HK = await TimeMiner.new({from: accounts[1]});
		const addressFgry7G = accounts[5]
		const uinthJ3ZqCb = BigInt("427")
		const addressSqNbMOM = accounts[1]
		const addressnvZ227v = accounts[1]
		const uintWvIGMN = BigInt("282")
		const addressH8iZC8Q = accounts[0]
		const uint256GZId3BL = await TimeMinerbRw67HK.balanceOf.call(addressFgry7G, {from: accounts[5]});
//		const boolzyp6rM = await TimeMinerbRw67HK.transfer.call(addressSqNbMOM, uinthJ3ZqCb, {from: accounts[4]});
//		const uint256ErFZsH = await TimeMinerbRw67HK.balanceOf.call(addressnvZ227v, {from: accounts[3]});
//		const booljJ68Muj = await TimeMinerbRw67HK.approve.call(addressH8iZC8Q, uintWvIGMN, {from: accounts[3]});

		assert.equal(uint256GZId3BL, BigInt("0"))
		await expect(TimeMinerbRw67HK.transfer.call(addressSqNbMOM, uinthJ3ZqCb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlApGOGy = await TimeMiner.new({from: accounts[1]});
		const uintPiyGcyk = BigInt("1348")
		const addressh1vguFc = accounts[0]
		const boolLhPjbKb = true
		const addressLaKVl03 = "0x0000000000000000000000000000000000000001"
		const boolsE5Yq5R = true
		const addressx6omVH = accounts[0]
		const boolQAUpWsA = await TimeMinerlApGOGy.approve.call(addressh1vguFc, uintPiyGcyk, {from: accounts[1]});
//		const addressYz9epZc = await TimeMinerlApGOGy.whitelist.call(addressLaKVl03, boolLhPjbKb, {from: accounts[2]});
//		const addressxUyrucA = await TimeMinerlApGOGy.whitelist.call(addressx6omVH, boolsE5Yq5R, {from: accounts[5]});
//		const uint256TLNqMm = await TimeMinerlApGOGy.totalSupply.call({from: accounts[5]});

		assert.equal(boolQAUpWsA, true)
		await expect(TimeMinerlApGOGy.whitelist.call(addressLaKVl03, boolLhPjbKb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPqELd96 = await TimeMiner.new({from: accounts[3]});
		const uintsbPn3i5 = BigInt("1872")
		const addresssnIMU7S = accounts[0]
		const uinttJTkHOe = BigInt("1241")
		const uintGDmdi7t = BigInt("475")
		const addressvraEyCN = accounts[1]
		const uint4D6VDg = BigInt("1888")
		const addressVTnNX4T = accounts[4]
		const boolKfotFym = await TimeMinerPqELd96.approve.call(addresssnIMU7S, uintsbPn3i5, {from: accounts[1]});
		const uint256f5SzZVV = await TimeMinerPqELd96.setPrizeFromNewAddress.call(uintGDmdi7t, uinttJTkHOe, {from: accounts[3]});
//		const uint256nrbfZ4r = await TimeMinerPqELd96.allInfoFor.call(addressvraEyCN, {from: accounts[3]});
//		const boolzIHRDv = await TimeMinerPqELd96.transfer.call(addressVTnNX4T, uint4D6VDg, {from: accounts[4]});

		assert.equal(boolKfotFym, true)
		await expect(TimeMinerPqELd96.allInfoFor.call(addressvraEyCN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbRw67HK = await TimeMiner.new({from: accounts[1]});
		const uintCka0QHN = BigInt("1440")
		const uinthttaODY = BigInt("427")
		const addressqSlFJhl = accounts[1]
		const uintDQjg266 = BigInt("284")
		const addresshErutbn = accounts[1]
		const uint256xe3cYE8 = await TimeMinerbRw67HK.changePreSalePriceIfToHigh.call(uintCka0QHN, {from: accounts[1]});
//		const boolzyp6rM = await TimeMinerbRw67HK.transfer.call(addressqSlFJhl, uinthttaODY, {from: accounts[4]});
//		const booljJ68Muj = await TimeMinerbRw67HK.approve.call(addresshErutbn, uintDQjg266, {from: accounts[3]});

		await expect(TimeMinerbRw67HK.transfer.call(addressqSlFJhl, uinthttaODY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlApGOGy = await TimeMiner.new({from: accounts[1]});
		const addressTdett4W = accounts[1]
		const boolX6UjRt = true
		const addresso0uCrnU = accounts[3]
		const uintZswVvzi = BigInt("1593")
		const addressqzFYPVe = accounts[1]
		const boolsE5Yq5R = false
		const addressoDLLpuv = accounts[1]
//		await TimeMinerlApGOGy.preSaleFinished.call({from: accounts[1]});
//		const uint256jRGIZCe = await TimeMinerlApGOGy.balanceOfTokenCirculation.call(addressTdett4W, {from: accounts[1]});
//		const booldwpTHrt = await TimeMinerlApGOGy.setStableCoinSystem.call(boolX6UjRt, {from: accounts[2]});
//		const uint256YTdHR6h = await TimeMinerlApGOGy.balanceOfTokenCirculation.call(addresso0uCrnU, {from: accounts[4]});
//		const boolu92OPoO = await TimeMinerlApGOGy.approve.call(addressqzFYPVe, uintZswVvzi, {from: accounts[5]});
//		const addressxUyrucA = await TimeMinerlApGOGy.whitelist.call(addressoDLLpuv, boolsE5Yq5R, {from: accounts[5]});

		await expect(TimeMinerlApGOGy.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernnnym3b = await TimeMiner.new({from: accounts[4]});
		const booluM55ITC = false
		const boolJEMdqCJ = await TimeMinernnnym3b.infoStableSystem.call({from: accounts[4]});
//		const boolK4P0OjW = await TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]});

		await expect(TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernnnym3b = await TimeMiner.new({from: accounts[4]});
		const uintsii0u9j = BigInt("853")
		const uintFRXMKHo = BigInt("669")
		const booluM55ITC = false
//		const uintYX0HjvT = await TimeMinernnnym3b.preSale.call(uintsii0u9j, {from: accounts[4]});
//		const uintrHpmEQG = await TimeMinernnnym3b.preSale.call(uintFRXMKHo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK4P0OjW = await TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]});

		await expect(TimeMinernnnym3b.preSale.call(uintsii0u9j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJo2TmH = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzpCuwTk = BigInt("1686")
		const addressGkRX8wX = accounts[2]
		const uintmwOvwar = BigInt("1221")
		const boolEauUgrD = false
		const addresstoab2q = accounts[4]
		await TimeMinerJo2TmH.preSaleFinished.call({from: accounts[5]});
		const boolO3p7H6R = await TimeMinerJo2TmH.approve.call(addressGkRX8wX, uintzpCuwTk, {from: accounts[4]});
		await TimeMinerJo2TmH.preSaleFinished.call({from: accounts[1]});
		const uintVjshP0e = await TimeMinerJo2TmH.preSale.call(uintmwOvwar, {from: "0x0000000000000000000000000000000000000001"});
		const addressp6xGjzQ = await TimeMinerJo2TmH.whitelist.call(addresstoab2q, boolEauUgrD, {from: accounts[0]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerssiL0lC = await TimeMiner.new({from: accounts[0]});
		const uintpN0nmJ7 = BigInt("370")
		const addresst4WQEde = accounts[4]
		const uintGoSSrDo = BigInt("1529")
		const addressLipkZ1 = "0x0000000000000000000000000000000000000001"
		const addressmNvM44T = accounts[2]
		const uintx5Bf34d = BigInt("603")
		const addressXwvCfp9 = accounts[1]
		const boolrByAh9v = await TimeMinerssiL0lC.approve.call(addresst4WQEde, uintpN0nmJ7, {from: accounts[1]});
//		const boolBpV7qRV = await TimeMinerssiL0lC.transferFrom.call(addressmNvM44T, addressLipkZ1, uintGoSSrDo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDTrqmvg = await TimeMinerssiL0lC.approve.call(addressXwvCfp9, uintx5Bf34d, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrByAh9v, true)
		await expect(TimeMinerssiL0lC.transferFrom.call(addressmNvM44T, addressLipkZ1, uintGoSSrDo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlApGOGy = await TimeMiner.new({from: accounts[1]});
		const boolQOzNyCC = true
		const addressrczhIdZ = accounts[2]
		const addressRyGITts = accounts[2]
		const boolX6UjRt = true
		const addressvNzJq3A = accounts[3]
//		await TimeMinerlApGOGy.preSaleFinished.call({from: accounts[1]});
//		const addressPa5bzjv = await TimeMinerlApGOGy.whitelist.call(addressrczhIdZ, boolQOzNyCC, {from: accounts[1]});
		await TimeMinerlApGOGy.preSaleFinished.call({from: accounts[1]});
//		const uint256jRGIZCe = await TimeMinerlApGOGy.balanceOfTokenCirculation.call(addressRyGITts, {from: accounts[1]});
//		const booldwpTHrt = await TimeMinerlApGOGy.setStableCoinSystem.call(boolX6UjRt, {from: accounts[2]});
//		const uint256YTdHR6h = await TimeMinerlApGOGy.balanceOfTokenCirculation.call(addressvNzJq3A, {from: accounts[4]});

		await expect(TimeMinerlApGOGy.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernnnym3b = await TimeMiner.new({from: accounts[4]});
		const boolRIzxMD2 = true
		const addressQRvAfd7 = accounts[1]
		const booluM55ITC = false
		const boolvZKrpgd = await TimeMinernnnym3b.setStableCoinSystem.call(boolRIzxMD2, {from: accounts[4]});
		const uint256JtXOQO = await TimeMinernnnym3b.balanceOf.call(addressQRvAfd7, {from: accounts[4]});
//		const boolK4P0OjW = await TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]});

		assert.equal(uint256JtXOQO, BigInt("0"))
		await expect(TimeMinernnnym3b.setStableCoinSystem.call(booluM55ITC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner3GCem9 = await TimeMiner.new({from: accounts[3]});
		const uintknPkbh0 = BigInt("923")
		const addressZJA9jvF = accounts[4]
		const uintXqJQJCG = BigInt("976")
		const boolh8FIdO = true
		const addressjGwgoT9 = accounts[4]
		const boolgVrQape = await TimeMiner3GCem9.transfer.call(addressZJA9jvF, uintknPkbh0, {from: accounts[3]});
//		const uint256hTCiPr = await TimeMiner3GCem9.changePreSalePriceIfToHigh.call(uintXqJQJCG, {from: accounts[4]});
//		const addressnMvRxU = await TimeMiner3GCem9.whitelist.call(addressjGwgoT9, boolh8FIdO, {from: accounts[2]});

		assert.equal(boolgVrQape, true)
		await expect(TimeMiner3GCem9.changePreSalePriceIfToHigh.call(uintXqJQJCG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})