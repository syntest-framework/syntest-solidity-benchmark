const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerOeaPH7I = await TimeMiner.new({from: accounts[4]});
		const uinttUdGpfo = BigInt("738")
		const address72E8E4 = accounts[4]
		const addressbriEZE = accounts[2]
		const uintBj044M7 = BigInt("1193")
		const addressvg8xiJ8 = accounts[1]
		const uintAGKyTwE = BigInt("1604")
		const addresspyjWZTZ = accounts[1]
		const addresssOPsgFv = accounts[0]
		const uintTfkpPFn = BigInt("44")
		const addressFDmhKHG = accounts[3]
//		const uint256D2aOhhH = await TimeMinerOeaPH7I.changePreSalePriceIfToHigh.call(uinttUdGpfo, {from: accounts[0]});
//		const uint256tDIqgcg = await TimeMinerOeaPH7I.allowance.call(addressbriEZE, address72E8E4, {from: accounts[3]});
//		const boolxK91CDV = await TimeMinerOeaPH7I.transfer.call(addressvg8xiJ8, uintBj044M7, {from: accounts[0]});
//		const booleZqYqRk = await TimeMinerOeaPH7I.transferFrom.call(addresssOPsgFv, addresspyjWZTZ, uintAGKyTwE, {from: accounts[4]});
//		const boolwWAjPKY = await TimeMinerOeaPH7I.approve.call(addressFDmhKHG, uintTfkpPFn, {from: accounts[0]});

		await expect(TimeMinerOeaPH7I.changePreSalePriceIfToHigh.call(uinttUdGpfo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineropt1ZUd = await TimeMiner.new({from: accounts[0]});
		const addressUREx2IW = accounts[5]
		const uintj5mevC = BigInt("107")
		const boolQO4NiXV = true
		const addressfhlorYD = accounts[3]
		const uintm14SMDx = BigInt("1261")
		const uintXfyuvTF = BigInt("1731")
		const addressGeOQ9Gw = accounts[2]
		const addressjIKrn0m = "0x0000000000000000000000000000000000000001"
//		const uint256YWiwykM = await TimeMineropt1ZUd.allInfoFor.call(addressUREx2IW, {from: accounts[3]});
//		const uint256vF5BaQ = await TimeMineropt1ZUd.changePreSalePriceIfToHigh.call(uintj5mevC, {from: accounts[0]});
//		const addresscxRaWnM = await TimeMineropt1ZUd.whitelist.call(addressfhlorYD, boolQO4NiXV, {from: accounts[2]});
//		const boolRk5yuts = await TimeMineropt1ZUd.infoStableSystem.call({from: accounts[2]});
//		const uint256FHFFVX6 = await TimeMineropt1ZUd.changePreSalePriceIfToHigh.call(uintm14SMDx, {from: accounts[1]});
//		const boolbDEGYLC = await TimeMineropt1ZUd.transferFrom.call(addressjIKrn0m, addressGeOQ9Gw, uintXfyuvTF, {from: accounts[5]});

		await expect(TimeMineropt1ZUd.allInfoFor.call(addressUREx2IW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerV0PdAu = await TimeMiner.new({from: accounts[2]});
		const addressAfHLWJ0 = accounts[2]
		const boolYPIKmk5 = false
		const addressqhfnmfg = accounts[1]
		const uintNBbYi3G = BigInt("532")
		const addressFPjNH6R = accounts[4]
		const addresst2bJLe = accounts[4]
		const addressPE6xnpK = accounts[4]
		const uintNQKVlWT = BigInt("907")
		const addresslSRukjz = accounts[4]
		const uint256cLoqOaR = await TimeMinerV0PdAu.balanceOf.call(addressAfHLWJ0, {from: accounts[2]});
//		const addressoyXr2L9 = await TimeMinerV0PdAu.whitelist.call(addressqhfnmfg, boolYPIKmk5, {from: accounts[5]});
//		const boolLlDu3x = await TimeMinerV0PdAu.transfer.call(addressFPjNH6R, uintNBbYi3G, {from: accounts[4]});
//		const uint256CDBkX9 = await TimeMinerV0PdAu.allInfoFor.call(addresst2bJLe, {from: accounts[3]});
//		const uint256kQ3MxRd = await TimeMinerV0PdAu.tokensToClaim.call(addressPE6xnpK, {from: accounts[1]});
//		const boolPMaz357 = await TimeMinerV0PdAu.approve.call(addresslSRukjz, uintNQKVlWT, {from: accounts[5]});

		assert.equal(uint256cLoqOaR, BigInt("12000000"))
		await expect(TimeMinerV0PdAu.whitelist.call(addressqhfnmfg, boolYPIKmk5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhw9VTV = await TimeMiner.new({from: accounts[2]});
		const addresskx1YOY = accounts[0]
		const uintoCf0XMg = BigInt("706")
		const addressNi5S5mh = accounts[2]
		const addressi9uERQH = accounts[0]
		const addressLKMAbWH = accounts[3]
		const uintCjMNARt = BigInt("1146")
		const addressnRpifFH = accounts[5]
		const uint256Q9B6Io = await TimeMinerhw9VTV.balanceOf.call(addresskx1YOY, {from: accounts[2]});
//		const booluA3mbQw = await TimeMinerhw9VTV.transferFrom.call(addressi9uERQH, addressNi5S5mh, uintoCf0XMg, {from: accounts[1]});
//		const uint256r5z5Tns = await TimeMinerhw9VTV.balanceOfTokenCirculation.call(addressLKMAbWH, {from: accounts[3]});
//		const uintTIMGtfa = await TimeMinerhw9VTV.preSale.call(uintCjMNARt, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Cs94mYF = await TimeMinerhw9VTV.tokensToClaim.call(addressnRpifFH, {from: accounts[5]});

		assert.equal(uint256Q9B6Io, BigInt("0"))
		await expect(TimeMinerhw9VTV.transferFrom.call(addressi9uERQH, addressNi5S5mh, uintoCf0XMg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerjv2tqUn = await TimeMiner.new({from: accounts[4]});
		const boold7FReMl = true
		const addressSBpzQOR = accounts[5]
		const uintgOgFRRQ = BigInt("888")
		const addresstq3qvT0 = accounts[5]
		const booln5GurWW = false
		const boolSQWnhCb = await TimeMinerjv2tqUn.infoStableSystem.call({from: accounts[0]});
//		const addressXH3b2gF = await TimeMinerjv2tqUn.whitelist.call(addressSBpzQOR, boold7FReMl, {from: accounts[1]});
//		const uint256vBp9pfq = await TimeMinerjv2tqUn.changePreSalePriceIfToHigh.call(uintgOgFRRQ, {from: accounts[3]});
//		const uint256PPs4msZ = await TimeMinerjv2tqUn.balanceOfTokenCirculation.call(addresstq3qvT0, {from: accounts[2]});
//		const boolzoRrMz = await TimeMinerjv2tqUn.setStableCoinSystem.call(booln5GurWW, {from: accounts[2]});

		await expect(TimeMinerjv2tqUn.whitelist.call(addressSBpzQOR, boold7FReMl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerglK7vXp = await TimeMiner.new({from: accounts[4]});
		const uintnOPlnY2 = BigInt("781")
		const uintojks8uu = BigInt("1704")
		const addressUbIBBhn = accounts[2]
//		const uint256OGFAoHY = await TimeMinerglK7vXp.setPrizeFromNewAddress.call(uintojks8uu, uintnOPlnY2, {from: accounts[1]});
//		await TimeMinerglK7vXp.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256G3nNzDP = await TimeMinerglK7vXp.allInfoFor.call(addressUbIBBhn, {from: accounts[2]});

		await expect(TimeMinerglK7vXp.setPrizeFromNewAddress.call(uintojks8uu, uintnOPlnY2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const addressrJC4cHI = accounts[3]
		const addressOQzxEwg = accounts[1]
		const boolqCNJB0s = false
		const uint256nsMxA3w = await TimeMinereJs4xne.balanceOf.call(addressrJC4cHI, {from: accounts[2]});
		const uint256uhTmBi = await TimeMinereJs4xne.tokensToClaim.call(addressOQzxEwg, {from: accounts[2]});
		const bool1As1rM = await TimeMinereJs4xne.setStableCoinSystem.call(boolqCNJB0s, {from: accounts[1]});

		assert.equal(uint256nsMxA3w, BigInt("0"))
		assert.equal(uint256uhTmBi, BigInt("12000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const addresscrOFsja = accounts[3]
		const boolqCNJB0s = false
//		await TimeMinereJs4xne.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256nsMxA3w = await TimeMinereJs4xne.balanceOf.call(addresscrOFsja, {from: accounts[2]});
//		const bool1As1rM = await TimeMinereJs4xne.setStableCoinSystem.call(boolqCNJB0s, {from: accounts[1]});
//		const uint256j5rOAcG = await TimeMinereJs4xne.totalSupply.call({from: accounts[0]});

		await expect(TimeMinereJs4xne.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const uintBMtBUp = BigInt("665")
		const uintc1LxOW7 = BigInt("686")
		const addressgDY4oSJ = accounts[3]
		const boolqCNJB0s = false
//		const uintcr1sdyk = await TimeMinereJs4xne.preSale.call(uintBMtBUp, {from: accounts[1]});
//		const uint256LhYjAbF = await TimeMinereJs4xne.changePreSalePriceIfToHigh.call(uintc1LxOW7, {from: accounts[1]});
//		const uint256nsMxA3w = await TimeMinereJs4xne.balanceOf.call(addressgDY4oSJ, {from: accounts[2]});
//		const bool1As1rM = await TimeMinereJs4xne.setStableCoinSystem.call(boolqCNJB0s, {from: accounts[1]});

		await expect(TimeMinereJs4xne.preSale.call(uintBMtBUp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const addresspSsOisw = accounts[4]
		const uintvYCaDZ9 = BigInt("49")
		const addressZB5B5ZC = accounts[1]
		const addressl1tx4uE = accounts[0]
		const addressJzpM0Zh = accounts[4]
//		await TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]});
//		const uint256nsMxA3w = await TimeMinereJs4xne.balanceOf.call(addresspSsOisw, {from: accounts[2]});
//		const boolN2bfg6Z = await TimeMinereJs4xne.transfer.call(addressZB5B5ZC, uintvYCaDZ9, {from: accounts[5]});
//		const uint256l54ie0e = await TimeMinereJs4xne.balanceOfTokenCirculation.call(addressl1tx4uE, {from: accounts[1]});
//		const boolx5Wy3rj = await TimeMinereJs4xne.isWhitelisted.call(addressJzpM0Zh, {from: accounts[2]});

		await expect(TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const addressiBGe1VG = accounts[4]
		const addressCCIoe3c = accounts[5]
		const addressVrrY5sO = accounts[3]
		const uint256nsMxA3w = await TimeMinereJs4xne.balanceOf.call(addressiBGe1VG, {from: accounts[2]});
		const uint256zSsjXJy = await TimeMinereJs4xne.allowance.call(addressVrrY5sO, addressCCIoe3c, {from: accounts[1]});

		assert.equal(uint256nsMxA3w, BigInt("0"))
		assert.equal(uint256zSsjXJy, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const addressoDd7tYD = accounts[1]
		const addressNFQXv5d = accounts[4]
		const addressIv4ZHAY = accounts[5]
		const uintaURmTVb = BigInt("49")
		const address4IW1M6 = accounts[1]
		const addressMuqy5P7 = accounts[0]
		const addressgV8tjTg = accounts[5]
//		await TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]});
//		const boolpG7AJh9 = await TimeMinereJs4xne.isWhitelisted.call(addressoDd7tYD, {from: accounts[4]});
//		const uint256nsMxA3w = await TimeMinereJs4xne.balanceOf.call(addressNFQXv5d, {from: accounts[2]});
//		const uint256Nswyyea = await TimeMinereJs4xne.balanceOf.call(addressIv4ZHAY, {from: accounts[5]});
//		const boolN2bfg6Z = await TimeMinereJs4xne.transfer.call(address4IW1M6, uintaURmTVb, {from: accounts[5]});
//		const uint256l54ie0e = await TimeMinereJs4xne.balanceOfTokenCirculation.call(addressMuqy5P7, {from: accounts[1]});
//		const boolx5Wy3rj = await TimeMinereJs4xne.isWhitelisted.call(addressgV8tjTg, {from: accounts[2]});

		await expect(TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNF330Xh = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const address0mK3JI = accounts[0]
		const addressNIqoL6 = accounts[1]
		const uintqpr5ELd = BigInt("454")
		const uintyueePBq = BigInt("1539")
		const addressDu36lR = accounts[1]
		const boolW0J95gv = false
		const addressUNrQcV = accounts[5]
		const uint256LZen5nB = await TimeMinerNF330Xh.allowance.call(addressNIqoL6, address0mK3JI, {from: accounts[1]});
		const uint256ZCafWpD = await TimeMinerNF330Xh.changePreSalePriceIfToHigh.call(uintqpr5ELd, {from: accounts[3]});
		const boolbjxSgP = await TimeMinerNF330Xh.approve.call(addressDu36lR, uintyueePBq, {from: accounts[5]});
		const addressKDo70G7 = await TimeMinerNF330Xh.whitelist.call(addressUNrQcV, boolW0J95gv, {from: accounts[1]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const uintCTTPQmA = BigInt("1075")
		const addressafpnWSS = accounts[1]
		const addressZboQUHw = accounts[4]
		const boolk8DqOUE = await TimeMinereJs4xne.approve.call(addressafpnWSS, uintCTTPQmA, {from: accounts[1]});
//		await TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]});
//		const uint256jKNIMSU = await TimeMinereJs4xne.totalSupply.call({from: accounts[3]});
//		const boolx5Wy3rj = await TimeMinereJs4xne.isWhitelisted.call(addressZboQUHw, {from: accounts[2]});

		assert.equal(boolk8DqOUE, true)
		await expect(TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereJs4xne = await TimeMiner.new({from: accounts[1]});
		const uintuE4ZQL1 = BigInt("371")
		const addressRDsRNLH = accounts[3]
		const addresskWxjqB = accounts[5]
//		await TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]});
//		const bool5oZDQd = await TimeMinereJs4xne.infoStableSystem.call({from: accounts[5]});
//		const boolfSJczv = await TimeMinereJs4xne.transfer.call(addressRDsRNLH, uintuE4ZQL1, {from: accounts[1]});
//		const boolx5Wy3rj = await TimeMinereJs4xne.isWhitelisted.call(addresskWxjqB, {from: accounts[2]});

		await expect(TimeMinereJs4xne.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})