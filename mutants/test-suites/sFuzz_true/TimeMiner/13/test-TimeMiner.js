const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerbAnqiu6 = await TimeMiner.new({from: accounts[0]});
		const addressLZHqKC = "0x0000000000000000000000000000000000000001"
		const uinta3tp0no = BigInt("967")
		const addressKFY6fpr = accounts[3]
		const uintxQWI0O8 = BigInt("1979")
		const addressC6GHtQS = "0x0000000000000000000000000000000000000001"
//		const uint256agvCWdS = await TimeMinerbAnqiu6.allInfoFor.call(addressLZHqKC, {from: accounts[0]});
//		const boolDQULZsm = await TimeMinerbAnqiu6.approve.call(addressKFY6fpr, uinta3tp0no, {from: accounts[1]});
//		const boolTZOmTsA = await TimeMinerbAnqiu6.approve.call(addressC6GHtQS, uintxQWI0O8, {from: accounts[2]});

		await expect(TimeMinerbAnqiu6.allInfoFor.call(addressLZHqKC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXNcSjwY = await TimeMiner.new({from: accounts[3]});
		const uintZO0RjZr = BigInt("1003")
		const boolRR93Hw = false
		const addressATSsFQH = accounts[2]
		const uintmKHecRo = BigInt("465")
		const addressOBwqAOT = accounts[0]
		const uint7x1TBl = BigInt("736")
//		const uint2568iF6Io = await TimeMinerXNcSjwY.changePreSalePriceIfToHigh.call(uintZO0RjZr, {from: accounts[0]});
//		const addressB85CDML = await TimeMinerXNcSjwY.whitelist.call(addressATSsFQH, boolRR93Hw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolytuZALD = await TimeMinerXNcSjwY.approve.call(addressOBwqAOT, uintmKHecRo, {from: accounts[2]});
//		const uint256beOhYe8 = await TimeMinerXNcSjwY.changePreSalePriceIfToHigh.call(uint7x1TBl, {from: accounts[2]});

		await expect(TimeMinerXNcSjwY.changePreSalePriceIfToHigh.call(uintZO0RjZr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner2hgVRa = await TimeMiner.new({from: accounts[0]});
		const uintfBmBcgB = BigInt("1133")
		const uintbSt2FT = BigInt("1331")
		const uintk8XIBS = BigInt("1598")
		const uintMednLbq = BigInt("1567")
		const addressnU9hw3a = accounts[0]
//		const uint256SJG5Hd = await TimeMiner2hgVRa.setPrizeFromNewAddress.call(uintbSt2FT, uintfBmBcgB, {from: accounts[2]});
//		const uint256ucZGLXO = await TimeMiner2hgVRa.setPrizeFromNewAddress.call(uintMednLbq, uintk8XIBS, {from: accounts[3]});
//		await TimeMiner2hgVRa.preSaleFinished.call({from: accounts[1]});
//		const uint256M2niPXg = await TimeMiner2hgVRa.balanceOfTokenCirculation.call(addressnU9hw3a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMiner2hgVRa.setPrizeFromNewAddress.call(uintbSt2FT, uintfBmBcgB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerydac890 = await TimeMiner.new({from: accounts[3]});
		const uintawnagOX = BigInt("1466")
		const boolfmDYpXz = await TimeMinerydac890.infoStableSystem.call({from: accounts[0]});
//		const uint256Xwc4XIH = await TimeMinerydac890.changePreSalePriceIfToHigh.call(uintawnagOX, {from: accounts[1]});
//		const boolk29dkjv = await TimeMinerydac890.infoStableSystem.call({from: accounts[3]});

		await expect(TimeMinerydac890.changePreSalePriceIfToHigh.call(uintawnagOX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzA33lgF = await TimeMiner.new({from: accounts[0]});
		const addressIq1mA1T = accounts[1]
		const boolTskhpRC = true
		const uintAyAyW5B = BigInt("1822")
		const addressVr3wdc0 = accounts[5]
		const booloqN9oK9 = false
		const addressYjLT8Jl = accounts[3]
		const uint256sNk3hBK = await TimeMinerzA33lgF.balanceOf.call(addressIq1mA1T, {from: accounts[3]});
		const boolwtarU7A = await TimeMinerzA33lgF.infoStableSystem.call({from: accounts[1]});
//		const boolOyeyR5y = await TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]});
//		const boolovGj465 = await TimeMinerzA33lgF.transfer.call(addressVr3wdc0, uintAyAyW5B, {from: accounts[2]});
//		const boolgCyymyB = await TimeMinerzA33lgF.setStableCoinSystem.call(booloqN9oK9, {from: accounts[5]});
//		const uint256ACnpBNM = await TimeMinerzA33lgF.balanceOfTokenCirculation.call(addressYjLT8Jl, {from: accounts[1]});

		assert.equal(uint256sNk3hBK, BigInt("0"))
		await expect(TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGL0WNPr = await TimeMiner.new({from: accounts[4]});
		const addressUuMR90G = accounts[5]
		const addressyj6iwV2 = accounts[1]
		const addressEh0sewn = accounts[5]
		const addresstZRAl7M = accounts[4]
		const addressvfH6m3z = accounts[4]
		const uintJLGFyn8 = BigInt("894")
		const addressko4hnvJ = accounts[1]
		const uintJH0rLj2 = BigInt("1145")
		const uintkcMN3Jm = BigInt("1664")
		const boolaVSGiNF = await TimeMinerGL0WNPr.isWhitelisted.call(addressUuMR90G, {from: accounts[0]});
		const uint256SbRbMRH = await TimeMinerGL0WNPr.balanceOf.call(addressyj6iwV2, {from: accounts[0]});
		const uint256WcQsGS9 = await TimeMinerGL0WNPr.balanceOfTokenCirculation.call(addressEh0sewn, {from: accounts[4]});
		const uint256clFINcK = await TimeMinerGL0WNPr.allowance.call(addressvfH6m3z, addresstZRAl7M, {from: accounts[0]});
//		const boolPC5fOat = await TimeMinerGL0WNPr.transfer.call(addressko4hnvJ, uintJLGFyn8, {from: accounts[0]});
//		const uint256cKnJkPS = await TimeMinerGL0WNPr.setPrizeFromNewAddress.call(uintkcMN3Jm, uintJH0rLj2, {from: accounts[3]});

		assert.equal(boolaVSGiNF, false)
		assert.equal(uint256SbRbMRH, BigInt("0"))
		assert.equal(uint256WcQsGS9, BigInt("0"))
		assert.equal(uint256clFINcK, BigInt("0"))
		await expect(TimeMinerGL0WNPr.transfer.call(addressko4hnvJ, uintJLGFyn8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerydac890 = await TimeMiner.new({from: accounts[3]});
		const addressZr7xKQp = accounts[0]
		const uintNVrzHtt = BigInt("1466")
		const boolfmDYpXz = await TimeMinerydac890.infoStableSystem.call({from: accounts[0]});
//		await TimeMinerydac890.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256EcQY4jT = await TimeMinerydac890.balanceOf.call(addressZr7xKQp, {from: accounts[5]});
//		const uint256Xwc4XIH = await TimeMinerydac890.changePreSalePriceIfToHigh.call(uintNVrzHtt, {from: accounts[1]});
//		const boolk29dkjv = await TimeMinerydac890.infoStableSystem.call({from: accounts[3]});

		await expect(TimeMinerydac890.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergBUVSdo = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYB4tqJa = accounts[2]
		const booludHtTjn = await TimeMinergBUVSdo.isWhitelisted.call(addressYB4tqJa, {from: accounts[4]});
		const boolupYgPP = await TimeMinergBUVSdo.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VIdbTkr = await TimeMinergBUVSdo.totalSupply.call({from: accounts[1]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerydac890 = await TimeMiner.new({from: accounts[3]});
		const boolFi0Ty2B = false
		const addressojn9iFl = accounts[1]
		const uintBBV9ZfN = BigInt("1466")
		const boolfmDYpXz = await TimeMinerydac890.infoStableSystem.call({from: accounts[0]});
//		const addressAeuoPbK = await TimeMinerydac890.whitelist.call(addressojn9iFl, boolFi0Ty2B, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xwc4XIH = await TimeMinerydac890.changePreSalePriceIfToHigh.call(uintBBV9ZfN, {from: accounts[1]});
//		const boolk29dkjv = await TimeMinerydac890.infoStableSystem.call({from: accounts[3]});

		await expect(TimeMinerydac890.whitelist.call(addressojn9iFl, boolFi0Ty2B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerH1yLur = await TimeMiner.new({from: accounts[3]});
		const uint6rWUZe = BigInt("1296")
		const uintEJht3A9 = BigInt("1638")
		const uintdEKFlvS = BigInt("902")
		const uint256JK1sogZ = await TimeMinerH1yLur.totalSupply.call({from: accounts[0]});
//		const uintFavEaVf = await TimeMinerH1yLur.preSale.call(uint6rWUZe, {from: accounts[5]});
//		const uint256kv1Bsqf = await TimeMinerH1yLur.setPrizeFromNewAddress.call(uintdEKFlvS, uintEJht3A9, {from: accounts[2]});
//		await TimeMinerH1yLur.preSaleFinished.call({from: accounts[1]});

		assert.equal(uint256JK1sogZ, BigInt("24000000"))
		await expect(TimeMinerH1yLur.preSale.call(uint6rWUZe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerH1yLur = await TimeMiner.new({from: accounts[3]});
		const boolVUGNRz = false
		const addresskRtbkLb = accounts[0]
		const uintqIkFawR = BigInt("1638")
		const uintYRDT2uA = BigInt("889")
		const addressFWeKyzc = await TimeMinerH1yLur.whitelist.call(addresskRtbkLb, boolVUGNRz, {from: accounts[3]});
//		const uint256kv1Bsqf = await TimeMinerH1yLur.setPrizeFromNewAddress.call(uintYRDT2uA, uintqIkFawR, {from: accounts[2]});

		await expect(TimeMinerH1yLur.setPrizeFromNewAddress.call(uintYRDT2uA, uintqIkFawR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzA33lgF = await TimeMiner.new({from: accounts[0]});
		const uintG3Z0VZq = BigInt("218")
		const addressNsi9zy = accounts[2]
		const uintI4Yx5xG = BigInt("906")
		const uintTJbZaQm = BigInt("1539")
		const boolTskhpRC = true
		const booloqN9oK9 = true
		const boolwtarU7A = await TimeMinerzA33lgF.infoStableSystem.call({from: accounts[1]});
		const boolqkYQcJ5 = await TimeMinerzA33lgF.approve.call(addressNsi9zy, uintG3Z0VZq, {from: accounts[2]});
//		const uint256h9GxT4S = await TimeMinerzA33lgF.setPrizeFromNewAddress.call(uintTJbZaQm, uintI4Yx5xG, {from: accounts[2]});
//		const boolOyeyR5y = await TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]});
//		const boolgCyymyB = await TimeMinerzA33lgF.setStableCoinSystem.call(booloqN9oK9, {from: accounts[5]});

		assert.equal(boolqkYQcJ5, true)
		await expect(TimeMinerzA33lgF.setPrizeFromNewAddress.call(uintTJbZaQm, uintI4Yx5xG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerH1yLur = await TimeMiner.new({from: accounts[3]});
		const uinth1pDLFi = BigInt("348")
		const addressKbrlF5s = "0x0000000000000000000000000000000000000001"
		const addressHZx4lcS = accounts[2]
		const uintSZphNFp = BigInt("1296")
//		const boolIcaokT = await TimeMinerH1yLur.transferFrom.call(addressHZx4lcS, addressKbrlF5s, uinth1pDLFi, {from: accounts[5]});
//		const uintFavEaVf = await TimeMinerH1yLur.preSale.call(uintSZphNFp, {from: accounts[5]});

		await expect(TimeMinerH1yLur.transferFrom.call(addressHZx4lcS, addressKbrlF5s, uinth1pDLFi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzA33lgF = await TimeMiner.new({from: accounts[0]});
		const uintjO5pZm5 = BigInt("67")
		const uintLRvoOuJ = BigInt("205")
		const boolTskhpRC = false
		const address2hKEZw = accounts[5]
		const uint256OjJxWtC = await TimeMinerzA33lgF.setPrizeFromNewAddress.call(uintLRvoOuJ, uintjO5pZm5, {from: accounts[0]});
//		const boolOyeyR5y = await TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]});
//		const uint256o4sIb65 = await TimeMinerzA33lgF.balanceOfTokenCirculation.call(address2hKEZw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerH1yLur = await TimeMiner.new({from: accounts[3]});
		const uintmU88Q8r = BigInt("1324")
		const uinthkJ5pom = BigInt("194")
		const addressVX1NCZ1 = accounts[0]
		const addresswWZHm7Z = accounts[3]
		const addressfuzRMne = "0x0000000000000000000000000000000000000001"
		const uintklMpHyC = BigInt("1076")
		const uint256CfqMjz = await TimeMinerH1yLur.changePreSalePriceIfToHigh.call(uintmU88Q8r, {from: accounts[3]});
		const boolRSc8Az = await TimeMinerH1yLur.approve.call(addressVX1NCZ1, uinthkJ5pom, {from: accounts[3]});
		const uint256G3WY0WI = await TimeMinerH1yLur.allowance.call(addressfuzRMne, addresswWZHm7Z, {from: accounts[1]});
//		const uintgeQbW9t = await TimeMinerH1yLur.preSale.call(uintklMpHyC, {from: accounts[3]});

		assert.equal(boolRSc8Az, true)
		assert.equal(uint256G3WY0WI, BigInt("0"))
		await expect(TimeMinerH1yLur.preSale.call(uintklMpHyC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzA33lgF = await TimeMiner.new({from: accounts[0]});
		const addressIcyG1it = accounts[0]
		const boolgdJkz7c = true
		const boolTskhpRC = false
		const uint256quvN4co = await TimeMinerzA33lgF.tokensToClaim.call(addressIcyG1it, {from: accounts[1]});
		const boolnu5gY3 = await TimeMinerzA33lgF.setStableCoinSystem.call(boolgdJkz7c, {from: accounts[0]});
//		const boolOyeyR5y = await TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]});

		assert.equal(uint256quvN4co, BigInt("12000000"))
		await expect(TimeMinerzA33lgF.setStableCoinSystem.call(boolTskhpRC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerH1yLur = await TimeMiner.new({from: accounts[3]});
		const uintD4GuegG = BigInt("1296")
//		await TimeMinerH1yLur.preSaleFinished.call({from: accounts[3]});
//		const uintFavEaVf = await TimeMinerH1yLur.preSale.call(uintD4GuegG, {from: accounts[5]});

		await expect(TimeMinerH1yLur.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerH1yLur = await TimeMiner.new({from: accounts[3]});
		const uintulHtEpN = BigInt("1843")
		const addressVYBiyt = accounts[4]
		const uintKRfySPy = BigInt("1267")
		const boolcb8Ueiv = await TimeMinerH1yLur.transfer.call(addressVYBiyt, uintulHtEpN, {from: accounts[3]});
//		const uintFavEaVf = await TimeMinerH1yLur.preSale.call(uintKRfySPy, {from: accounts[5]});

		assert.equal(boolcb8Ueiv, true)
		await expect(TimeMinerH1yLur.preSale.call(uintKRfySPy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})