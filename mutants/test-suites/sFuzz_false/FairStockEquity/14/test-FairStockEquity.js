const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressqXAevuQ = "0x0000000000000000000000000000000000000001"
		const addressRLgykXW = "0x0000000000000000000000000000000000000001"
		const addressSoalXM3 = accounts[2]
		const addresstLbW8DA = accounts[5]
		const uintiO6rVN = BigInt("596")
		const FairStockEquityYDgYC56 = await FairStockEquity.new(addressqXAevuQ, addressRLgykXW, addressSoalXM3, addresstLbW8DA, uintiO6rVN, {from: accounts[5]});
		const uint2MJw7n = BigInt("1841")
		const uintPD6GMAS = BigInt("861")
		const addressLlMllUE = accounts[3]
		const uintkqmRJLY = BigInt("791")
		const uintl2IvZWC = BigInt("549")
		const uintsrkh3Ha = BigInt("145")
		const addressh3JvAqU = accounts[5]
		const boolyQnyQ0L = true
		const addresss7d5Yfj = accounts[5]
//		const addresskN4Qct = await FairStockEquityYDgYC56.setModule.call(addressLlMllUE, uintPD6GMAS, uint2MJw7n, {from: accounts[3]});
//		const uint256BBaaj37 = await FairStockEquityYDgYC56.setProfitPercentMT.call(uintkqmRJLY, {from: accounts[1]});
//		const addressxo70kxP = await FairStockEquityYDgYC56.withdrawBonusCallback.call(addressh3JvAqU, uintsrkh3Ha, uintl2IvZWC, {from: accounts[4]});
//		const addressr01a0iV = await FairStockEquityYDgYC56.setLPT.call(addresss7d5Yfj, boolyQnyQ0L, {from: accounts[4]});
//		await FairStockEquityYDgYC56.checkStart.call({from: accounts[4]});

		await expect(FairStockEquityYDgYC56.setModule.call(addressLlMllUE, uintPD6GMAS, uint2MJw7n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressIhWT421 = accounts[5]
		const addressv2hShVb = accounts[4]
		const addressOL7VkhN = accounts[4]
		const addressCSPI0LY = accounts[4]
		const uinty4VqkGP = BigInt("177")
		const FairStockEquityelng5l = await FairStockEquity.new(addressIhWT421, addressv2hShVb, addressOL7VkhN, addressCSPI0LY, uinty4VqkGP, {from: accounts[1]});
		const uintrJ6gFyV = BigInt("950")
		const uintvNgrzZl = BigInt("1683")
		const uintWbJZHUT = BigInt("1611")
		const uintxcQDz3 = BigInt("1391")
		const uintxjpnzBU = BigInt("178")
		const addressa4U1Td6 = accounts[4]
		const addressoTHNqr8 = accounts[3]
		const uintgesuS45 = BigInt("966")
		const uint256ya16boj = await FairStockEquityelng5l.getCostAmount.call(uintrJ6gFyV, {from: accounts[1]});
//		const uint256ab59uC9 = await FairStockEquityelng5l.setProfitPercentBonus.call(uintvNgrzZl, {from: accounts[3]});
//		const uint256QpYBTng = await FairStockEquityelng5l.reduceShare.call(uintWbJZHUT, {from: accounts[5]});
//		const addressf1ZuhRR = await FairStockEquityelng5l.withdrawBonusCallback.call(addressa4U1Td6, uintxjpnzBU, uintxcQDz3, {from: accounts[5]});
//		const addressdu2aktD = await FairStockEquityelng5l.setDataSource.call(addressoTHNqr8, {from: accounts[4]});
//		const uint256XucO1zI = await FairStockEquityelng5l.setGasFeeForCallback.call(uintgesuS45, {from: accounts[0]});

		await expect(FairStockEquityelng5l.setProfitPercentBonus.call(uintvNgrzZl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGdl6MkV = accounts[4]
		const addressGy3UyuS = accounts[2]
		const addressamsFHLP = accounts[0]
		const addressUiRK9ix = accounts[2]
		const uintd4JIEnq = BigInt("1865")
		const FairStockEquitydGM0bjM = await FairStockEquity.new(addressGdl6MkV, addressGy3UyuS, addressamsFHLP, addressUiRK9ix, uintd4JIEnq, {from: accounts[0]});
		const uintD1yALPp = BigInt("1081")
		const uintcsVBL1F = BigInt("1788")
		const uintvUMzhnk = BigInt("657")
		const uintzHJBTIB = BigInt("1957")
		const addressBaKdMZz = accounts[1]
		const uinthy4FMsm = BigInt("1059")
		const uintc8zmdd4 = BigInt("2043")
		const uintMSyORcy = BigInt("1636")
		const uintdM9ruku = BigInt("664")
		const uintpHcAwIC = BigInt("534")
		const uintqbDKmlh = BigInt("623")
		const uintCu6IntE = BigInt("226")
		const uintAdZKoxu = BigInt("1231")
		const uintyd2bFpJ = BigInt("1594")
		const uintFxBjggG = BigInt("1568")
		const uintYETxBT4 = BigInt("1387")
//		const addressCD1Mgqp = await FairStockEquitydGM0bjM.business.call(addressBaKdMZz, uintzHJBTIB, uintvUMzhnk, uintcsVBL1F, uintD1yALPp, {from: accounts[2]});
//		const uint256UTlNyRG = await FairStockEquitydGM0bjM.setProfitPercentMT.call(uinthy4FMsm, {from: accounts[4]});
//		await FairStockEquitydGM0bjM.withdrawMT.call({from: accounts[0]});
//		const uint256bd4oa4X = await FairStockEquitydGM0bjM.setDegree.call(uintqbDKmlh, uintpHcAwIC, uintdM9ruku, uintMSyORcy, uintc8zmdd4, {from: accounts[4]});
//		const uint256LUzwf9l = await FairStockEquitydGM0bjM.setDegree.call(uintYETxBT4, uintFxBjggG, uintyd2bFpJ, uintAdZKoxu, uintCu6IntE, {from: accounts[2]});

		await expect(FairStockEquitydGM0bjM.business.call(addressBaKdMZz, uintzHJBTIB, uintvUMzhnk, uintcsVBL1F, uintD1yALPp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHhjsQnh = accounts[2]
		const addressZ0tRSNp = accounts[0]
		const addressdq2C8Pr = accounts[2]
		const addressh6oiYbY = accounts[2]
		const uintLuwrf9w = BigInt("1109")
		const FairStockEquityHkt9Qy5 = await FairStockEquity.new(addressHhjsQnh, addressZ0tRSNp, addressdq2C8Pr, addressh6oiYbY, uintLuwrf9w, {from: accounts[3]});
		const uintgHpwWba = BigInt("1260")
		const uintoqaxWXz = BigInt("314")
		const addresst9gTAn9 = accounts[3]
		const uintP0DmCH = BigInt("733")
		const uintRkzc9GN = BigInt("1105")
		const uintaXGIgxo = BigInt("1580")
		const uintkmqQfql = BigInt("1850")
		const uintuZJvO73 = BigInt("1852")
//		await FairStockEquityHkt9Qy5.withdrawMT.call({from: accounts[2]});
//		const addresscOZTo3n = await FairStockEquityHkt9Qy5.setModule.call(addresst9gTAn9, uintoqaxWXz, uintgHpwWba, {from: accounts[0]});
//		const uint256m05CxIU = await FairStockEquityHkt9Qy5.setDegree.call(uintuZJvO73, uintkmqQfql, uintaXGIgxo, uintRkzc9GN, uintP0DmCH, {from: accounts[0]});
//		await FairStockEquityHkt9Qy5.withdrawPJ.call({from: accounts[4]});
//		await FairStockEquityHkt9Qy5.withdrawPJ.call({from: accounts[1]});

		await expect(FairStockEquityHkt9Qy5.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNbDMQPF = accounts[4]
		const addressyDLby8b = accounts[3]
		const addressWLj9dCV = accounts[4]
		const addressbiGPkDa = accounts[1]
		const uintE0m77Zs = BigInt("754")
		const FairStockEquitynVaP5ma = await FairStockEquity.new(addressNbDMQPF, addressyDLby8b, addressWLj9dCV, addressbiGPkDa, uintE0m77Zs, {from: accounts[3]});
		const uinthwoLqoO = BigInt("1054")
		const uintazF04O3 = BigInt("1589")
		const uintdv5uJJo = BigInt("1866")
		const addressRAEyVQA = accounts[3]
//		await FairStockEquitynVaP5ma.withdrawBonus.call({from: accounts[3]});
//		const uint256QvHPudb = await FairStockEquitynVaP5ma.setProfitPercentPJ.call(uinthwoLqoO, {from: accounts[3]});
//		const addressP8Oenie = await FairStockEquitynVaP5ma.withdrawMTCallback.call(addressRAEyVQA, uintdv5uJJo, uintazF04O3, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquitynVaP5ma.withdrawMT.call({from: accounts[4]});
//		await FairStockEquitynVaP5ma.checkStart.call({from: accounts[4]});

		await expect(FairStockEquitynVaP5ma.withdrawBonus.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPgBF6kb = accounts[2]
		const addressUq3GZUq = accounts[4]
		const addresspNg9VBa = accounts[4]
		const addressSeaqte = accounts[0]
		const uintADhVHa7 = BigInt("380")
		const FairStockEquityiNfp54 = await FairStockEquity.new(addressPgBF6kb, addressUq3GZUq, addresspNg9VBa, addressSeaqte, uintADhVHa7, {from: accounts[2]});
		const uintj85OkQS = BigInt("1112")
		const uintKoa13Vw = BigInt("1261")
		const uint256y3kVbOT = await FairStockEquityiNfp54.setStartTime.call(uintj85OkQS, {from: accounts[2]});
//		const uint256wy6v1Ph = await FairStockEquityiNfp54.setGasFeeForCallback.call(uintKoa13Vw, {from: accounts[1]});

		await expect(FairStockEquityiNfp54.setGasFeeForCallback.call(uintKoa13Vw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressd0GhOis = accounts[5]
		const addressN1oI6Bw = accounts[2]
		const addressdieF8Su = accounts[5]
		const addressN2IbgZI = accounts[1]
		const uintmvrgwFr = BigInt("832")
		const FairStockEquityayuoCgV = await FairStockEquity.new(addressd0GhOis, addressN1oI6Bw, addressdieF8Su, addressN2IbgZI, uintmvrgwFr, {from: accounts[5]});
		const uintof7jbTJ = BigInt("232")
		const uintYcNDSyy = BigInt("362")
		const uintMGsHg2R = BigInt("2019")
		const uintYursPvi = BigInt("555")
		const uintOmSRT8Z = BigInt("1264")
		const uintF93UcSy = BigInt("1646")
		const addressYH03KRZ = accounts[4]
		const uintlto1WP5 = BigInt("1637")
//		const uint256qje6FBg = await FairStockEquityayuoCgV.depositBonus.call(uintof7jbTJ, {from: accounts[2]});
//		const uint256QaDNkFm = await FairStockEquityayuoCgV.bonus.call(uintYcNDSyy, {from: accounts[2]});
//		const addresst9dhE1p = await FairStockEquityayuoCgV.business.call(addressYH03KRZ, uintF93UcSy, uintOmSRT8Z, uintYursPvi, uintMGsHg2R, {from: accounts[3]});
//		const uint256v9QliBX = await FairStockEquityayuoCgV.setProfitPercentPJ.call(uintlto1WP5, {from: accounts[5]});

		await expect(FairStockEquityayuoCgV.depositBonus.call(uintof7jbTJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqT2mjY3 = accounts[5]
		const addressEbsfsC = accounts[2]
		const addressKWAQu6z = accounts[0]
		const addressPS1Lmj = accounts[0]
		const uintlAgwHYI = BigInt("1615")
		const FairStockEquityeXNypOU = await FairStockEquity.new(addressqT2mjY3, addressEbsfsC, addressKWAQu6z, addressPS1Lmj, uintlAgwHYI, {from: accounts[2]});
		const boolzPSIPad = false
		const addresszWiIGNi = accounts[4]
		const uintACh9GpY = BigInt("469")
		const addressiS3JUSk = accounts[4]
		const uintWmXl44x = BigInt("1891")
		const uintk200jH = BigInt("815")
		const uintMiCvhT4 = BigInt("820")
		const addressrps8UGU = accounts[4]
		const addressGNlrADw = await FairStockEquityeXNypOU.setLPT.call(addresszWiIGNi, boolzPSIPad, {from: accounts[2]});
//		const addressyfA2vQj = await FairStockEquityeXNypOU.depositLPT.call(addressiS3JUSk, uintACh9GpY, {from: accounts[4]});
//		const uint256a4feW0s = await FairStockEquityeXNypOU.setGasFeeForCallback.call(uintWmXl44x, {from: accounts[4]});
//		const addressm6lQ1SP = await FairStockEquityeXNypOU.withdrawMTCallback.call(addressrps8UGU, uintMiCvhT4, uintk200jH, {from: accounts[4]});

		await expect(FairStockEquityeXNypOU.depositLPT.call(addressiS3JUSk, uintACh9GpY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXGPyCWU = accounts[5]
		const addressTMGifwA = accounts[4]
		const addressx3KfLGa = accounts[4]
		const addressV1lPz4j = accounts[4]
		const uintf3CuoEd = BigInt("177")
		const FairStockEquityelng5l = await FairStockEquity.new(addressXGPyCWU, addressTMGifwA, addressx3KfLGa, addressV1lPz4j, uintf3CuoEd, {from: accounts[1]});
		const uintEZ8MT0S = BigInt("977")
		const uintLv3KfXC = BigInt("1391")
		const uintFlmAQ4 = BigInt("178")
		const addressfACGOAX = accounts[4]
		const addressdHBBVa = accounts[3]
		const uintUjz2vS6 = BigInt("966")
		const uint256ya16boj = await FairStockEquityelng5l.getCostAmount.call(uintEZ8MT0S, {from: accounts[1]});
//		const addressf1ZuhRR = await FairStockEquityelng5l.withdrawBonusCallback.call(addressfACGOAX, uintFlmAQ4, uintLv3KfXC, {from: accounts[5]});
//		const addressdu2aktD = await FairStockEquityelng5l.setDataSource.call(addressdHBBVa, {from: accounts[4]});
//		const uint256XucO1zI = await FairStockEquityelng5l.setGasFeeForCallback.call(uintUjz2vS6, {from: accounts[0]});

		await expect(FairStockEquityelng5l.withdrawBonusCallback.call(addressfACGOAX, uintFlmAQ4, uintLv3KfXC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshZ5boNl = accounts[5]
		const addressvetMp7Q = accounts[0]
		const addressL0a2Wh2 = accounts[0]
		const addressYbSx4Qq = accounts[4]
		const uintip8U0he = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(addresshZ5boNl, addressvetMp7Q, addressL0a2Wh2, addressYbSx4Qq, uintip8U0he, {from: accounts[1]});
		const boolGY7E6p0 = true
		const addressRYXehF = "0x0000000000000000000000000000000000000001"
		const uintlFh37Pv = BigInt("1808")
		const addressXjJ6DH9 = await FairStockEquityooA5mgG.setLPT.call(addressRYXehF, boolGY7E6p0, {from: accounts[1]});
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uintlFh37Pv, {from: accounts[4]});
//		await FairStockEquityooA5mgG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquityooA5mgG.invest.call(uintlFh37Pv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressO62eKYg = accounts[5]
		const addressRuRMQEX = "0x0000000000000000000000000000000000000001"
		const addressW6wigqr = accounts[3]
		const addressdJS6QRS = accounts[1]
		const uintlUaBdlC = BigInt("172")
		const FairStockEquityMG98LZV = await FairStockEquity.new(addressO62eKYg, addressRuRMQEX, addressW6wigqr, addressdJS6QRS, uintlUaBdlC, {from: accounts[5]});
		const uintGKBPhfW = BigInt("86")
		const uintUUhFuL6 = BigInt("580")
		const addressZGC2sS = accounts[4]
		const uintrYzbmiV = BigInt("1284")
//		await FairStockEquityMG98LZV.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityMG98LZV.onlyDataSource.call({from: accounts[0]});
//		const addressqSUNihw = await FairStockEquityMG98LZV.setModule.call(addressZGC2sS, uintUUhFuL6, uintGKBPhfW, {from: accounts[5]});
//		const uint256yaEZZg2 = await FairStockEquityMG98LZV.setProfitPercentMT.call(uintrYzbmiV, {from: accounts[4]});

		await expect(FairStockEquityMG98LZV.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressy2F3HKC = accounts[0]
		const addressGFMyvOp = accounts[2]
		const addressEd55fu9 = accounts[3]
		const addressnMoiHtB = accounts[4]
		const uintH6LvJbe = BigInt("1745")
		const FairStockEquityuayqfqB = await FairStockEquity.new(addressy2F3HKC, addressGFMyvOp, addressEd55fu9, addressnMoiHtB, uintH6LvJbe, {from: "0x0000000000000000000000000000000000000001"});
		const uintX8YdRg = BigInt("819")
		const uintXJPPs9E = BigInt("138")
		const uint256mFxKIFf = await FairStockEquityuayqfqB.invest.call(uintX8YdRg, {from: accounts[5]});
		await FairStockEquityuayqfqB.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zBppS91 = await FairStockEquityuayqfqB.setProfitPercentBonus.call(uintXJPPs9E, {from: accounts[4]});
		await FairStockEquityuayqfqB.withdrawMT.call({from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const address03aCf3 = accounts[5]
		const addressRN9hv90 = accounts[0]
		const addressHZ037gd = accounts[0]
		const address4J3xBJ = accounts[4]
		const uintK6Ps7Fi = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(address03aCf3, addressRN9hv90, addressHZ037gd, address4J3xBJ, uintK6Ps7Fi, {from: accounts[1]});
		const boolGY7E6p0 = true
		const address1Q6p8E = "0x0000000000000000000000000000000000000001"
		const uinto0ExQI4 = BigInt("1230")
		const uintJGBsz7Q = BigInt("1381")
		const addressSzbdReX = accounts[1]
		const uintpNKFct9 = BigInt("1809")
		const uintR9GRmI = BigInt("1920")
		const addressXjJ6DH9 = await FairStockEquityooA5mgG.setLPT.call(address1Q6p8E, boolGY7E6p0, {from: accounts[1]});
		const addressvlp9lii = await FairStockEquityooA5mgG.setModule.call(addressSzbdReX, uintJGBsz7Q, uinto0ExQI4, {from: accounts[1]});
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uintpNKFct9, {from: accounts[4]});
//		const uint256f2AeLQh = await FairStockEquityooA5mgG.bonus.call(uintR9GRmI, {from: accounts[3]});
//		await FairStockEquityooA5mgG.withdrawPJ.call({from: accounts[2]});

		await expect(FairStockEquityooA5mgG.invest.call(uintpNKFct9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqZXcOb = accounts[5]
		const addressFXGSbjd = accounts[0]
		const addressrBPySey = accounts[0]
		const addressRlotvmN = accounts[4]
		const uintuhBAgz = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(addressqZXcOb, addressFXGSbjd, addressrBPySey, addressRlotvmN, uintuhBAgz, {from: accounts[1]});
		const uintP9LaVph = BigInt("581")
		const addressAL7YLPj = accounts[4]
		const uintMTs4Sl2 = BigInt("53")
		const uinttKHKsmk = BigInt("1176")
		const uintfyWgiI2 = BigInt("863")
		const addresszlGwhS = accounts[4]
		const boolGY7E6p0 = true
		const addressA2YJb9A = "0x0000000000000000000000000000000000000000"
		const uintQHj0zew = BigInt("1808")
//		const addressXqJg0kh = await FairStockEquityooA5mgG.withdrawLPT.call(addressAL7YLPj, uintP9LaVph, {from: accounts[1]});
//		const uint256NT5iAPv = await FairStockEquityooA5mgG.setStartTime.call(uintMTs4Sl2, {from: accounts[3]});
//		const addresshGv1fp1 = await FairStockEquityooA5mgG.setModule.call(addresszlGwhS, uintfyWgiI2, uinttKHKsmk, {from: accounts[1]});
//		await FairStockEquityooA5mgG.f.call({from: accounts[2]});
//		const addressXjJ6DH9 = await FairStockEquityooA5mgG.setLPT.call(addressA2YJb9A, boolGY7E6p0, {from: accounts[1]});
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uintQHj0zew, {from: accounts[4]});
//		await FairStockEquityooA5mgG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquityooA5mgG.withdrawLPT.call(addressAL7YLPj, uintP9LaVph, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnxWYJNY = accounts[5]
		const addressCTgiGZ = accounts[0]
		const addressyKvI6F8 = accounts[0]
		const addressNXP03z = accounts[4]
		const uintpIvzFmw = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(addressnxWYJNY, addressCTgiGZ, addressyKvI6F8, addressNXP03z, uintpIvzFmw, {from: accounts[1]});
		const boolGY7E6p0 = true
		const addressaZDGduu = "0x0000000000000000000000000000000000000001"
		const uintgHnv5DH = BigInt("1752")
		const uintMfsPOCh = BigInt("1808")
		const addressXjJ6DH9 = await FairStockEquityooA5mgG.setLPT.call(addressaZDGduu, boolGY7E6p0, {from: accounts[1]});
//		const uint256X0D6rJ = await FairStockEquityooA5mgG.reduceShare.call(uintgHnv5DH, {from: accounts[1]});
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uintMfsPOCh, {from: accounts[4]});
//		await FairStockEquityooA5mgG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquityooA5mgG.reduceShare.call(uintgHnv5DH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuHY73f = accounts[5]
		const addressvbgUfl0 = "0x0000000000000000000000000000000000000001"
		const addressVYpuTwR = accounts[3]
		const addressHdNUAGx = accounts[1]
		const uintf7pr3Zl = BigInt("172")
		const FairStockEquityMG98LZV = await FairStockEquity.new(addressuHY73f, addressvbgUfl0, addressVYpuTwR, addressHdNUAGx, uintf7pr3Zl, {from: accounts[5]});
		const uintFaPSKj = BigInt("346")
		const uinty8YQWM6 = BigInt("412")
		const addresscfGP4tl = accounts[2]
		const uintnkAYdja = BigInt("1482")
		const uintVJLRfnN = BigInt("1284")
//		const addresswovpji = await FairStockEquityMG98LZV.withdrawMTCallback.call(addresscfGP4tl, uinty8YQWM6, uintFaPSKj, {from: accounts[1]});
//		await FairStockEquityMG98LZV.onlyDataSource.call({from: accounts[1]});
//		const uint256jTJlRNW = await FairStockEquityMG98LZV.bonus.call(uintnkAYdja, {from: accounts[0]});
//		const uint256yaEZZg2 = await FairStockEquityMG98LZV.setProfitPercentMT.call(uintVJLRfnN, {from: accounts[4]});

		await expect(FairStockEquityMG98LZV.withdrawMTCallback.call(addresscfGP4tl, uinty8YQWM6, uintFaPSKj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOVWu20N = accounts[5]
		const addressAjpncYC = accounts[0]
		const addressKA94ULf = accounts[0]
		const addressxixjO3Y = accounts[4]
		const uintJaaqlNW = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(addressOVWu20N, addressAjpncYC, addressKA94ULf, addressxixjO3Y, uintJaaqlNW, {from: accounts[1]});
		const uinta3BTKws = BigInt("775")
		const uintojPUStT = BigInt("2032")
		const uintnj7S8Qp = BigInt("40")
//		await FairStockEquityooA5mgG.f.call({from: accounts[1]});
//		const uint256YDizGpZ = await FairStockEquityooA5mgG.getCostAmount.call(uinta3BTKws, {from: accounts[5]});
//		const uint256cRgxR1 = await FairStockEquityooA5mgG.getCostAmount.call(uintojPUStT, {from: accounts[3]});
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uintnj7S8Qp, {from: accounts[4]});

		await expect(FairStockEquityooA5mgG.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUM8h3D = accounts[1]
		const addressvppMRLi = accounts[2]
		const addressQWNrDes = accounts[3]
		const addressrCAevW = "0x0000000000000000000000000000000000000001"
		const uintGl5ldax = BigInt("424")
		const FairStockEquitycBAKCsu = await FairStockEquity.new(addressUM8h3D, addressvppMRLi, addressQWNrDes, addressrCAevW, uintGl5ldax, {from: accounts[3]});
		const uintiAswgrQ = BigInt("255")
		const uintLVGAPgc = BigInt("152")
		const addressA8iEVMX = accounts[4]
		const uintxT7X6Nr = BigInt("1189")
//		const addressXX33OlO = await FairStockEquitycBAKCsu.withdrawBonusCallback.call(addressA8iEVMX, uintLVGAPgc, uintiAswgrQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lTgEt7U = await FairStockEquitycBAKCsu.setProfitPercentPJ.call(uintxT7X6Nr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitycBAKCsu.withdrawBonusCallback.call(addressA8iEVMX, uintLVGAPgc, uintiAswgrQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaClkHc8 = accounts[5]
		const addressGSqzBtW = accounts[0]
		const address7BesZ5 = accounts[0]
		const addressyx8claF = accounts[4]
		const uintxvB1PZa = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(addressaClkHc8, addressGSqzBtW, address7BesZ5, addressyx8claF, uintxvB1PZa, {from: accounts[1]});
		const uinto7IjoYd = BigInt("46")
//		await FairStockEquityooA5mgG.withdrawPJ.call({from: accounts[1]});
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uinto7IjoYd, {from: accounts[4]});

		await expect(FairStockEquityooA5mgG.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjjz0xq = accounts[5]
		const addressMEUwHnx = accounts[0]
		const addresszhkmx37 = accounts[0]
		const addressfhtRK6z = accounts[4]
		const uintfZjIdj9 = BigInt("579")
		const FairStockEquityooA5mgG = await FairStockEquity.new(addressjjz0xq, addressMEUwHnx, addresszhkmx37, addressfhtRK6z, uintfZjIdj9, {from: accounts[1]});
		const uintMNYCfS9 = BigInt("0")
//		const uint256LXdErBD = await FairStockEquityooA5mgG.invest.call(uintMNYCfS9, {from: accounts[4]});

		await expect(FairStockEquityooA5mgG.invest.call(uintMNYCfS9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressI2B9usw = accounts[5]
		const addressZRT2fil = "0x0000000000000000000000000000000000000001"
		const addresshg1NYAZ = accounts[3]
		const addressbCOvco = accounts[1]
		const uintebs5zrS = BigInt("172")
		const FairStockEquityMG98LZV = await FairStockEquity.new(addressI2B9usw, addressZRT2fil, addresshg1NYAZ, addressbCOvco, uintebs5zrS, {from: accounts[5]});
		const uintesqsL0q = BigInt("2020")
		const uintBMR3VIK = BigInt("1284")
		const uintgGnkSD7 = BigInt("164")
//		const uint256lnQ4POx = await FairStockEquityMG98LZV.bonus.call(uintesqsL0q, {from: accounts[1]});
//		const uint256yaEZZg2 = await FairStockEquityMG98LZV.setProfitPercentMT.call(uintBMR3VIK, {from: accounts[4]});
//		const uint256PPCGVEN = await FairStockEquityMG98LZV.getCostAmount.call(uintgGnkSD7, {from: accounts[0]});

		await expect(FairStockEquityMG98LZV.bonus.call(uintesqsL0q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszEHLVnU = accounts[3]
		const addressQyNhX5y = accounts[0]
		const addressaRhmKic = accounts[3]
		const addressfM32XGI = accounts[1]
		const uintUPuLvOw = BigInt("744")
		const FairStockEquityxbp4Ymp = await FairStockEquity.new(addresszEHLVnU, addressQyNhX5y, addressaRhmKic, addressfM32XGI, uintUPuLvOw, {from: accounts[1]});
		const uint82pGMN = BigInt("205")
		const uintrbLiBC = BigInt("371")
		const uintLNIFqxZ = BigInt("1934")
		const uinty6Vpq4 = BigInt("1750")
		const uintKUizdzg = BigInt("1355")
		const uint9s5Pw0 = BigInt("836")
		const uintRPg7P1 = BigInt("461")
		const uintfNI2s0n = BigInt("698")
		const uintVZoqAjS = BigInt("2021")
//		const uint256pHwpTyH = await FairStockEquityxbp4Ymp.setStartTime.call(uint82pGMN, {from: accounts[1]});
//		const uint256AOrKQMn = await FairStockEquityxbp4Ymp.setDegree.call(uint9s5Pw0, uintKUizdzg, uinty6Vpq4, uintLNIFqxZ, uintrbLiBC, {from: accounts[4]});
//		const uint256ZELFmYM = await FairStockEquityxbp4Ymp.reduceShare.call(uintRPg7P1, {from: accounts[0]});
//		const uint256W3o0RF = await FairStockEquityxbp4Ymp.reduceShare.call(uintfNI2s0n, {from: accounts[4]});
//		await FairStockEquityxbp4Ymp.withdrawMT.call({from: accounts[0]});
//		const uint256AJ7Yvmp = await FairStockEquityxbp4Ymp.depositBonus.call(uintVZoqAjS, {from: accounts[0]});

		await expect(FairStockEquityxbp4Ymp.setStartTime.call(uint82pGMN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})