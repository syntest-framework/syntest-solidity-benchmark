const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerz3roUe5 = await TimeMiner.new({from: accounts[4]});
		const addresswxyMJ1 = accounts[2]
		const boolugyaIUD = true
		const addressYzvajw8 = accounts[1]
		const uintYVRcW6 = BigInt("1859")
		const uint256bvlvL6 = await TimeMinerz3roUe5.tokensToClaim.call(addresswxyMJ1, {from: accounts[2]});
		const boolPhNkiz = await TimeMinerz3roUe5.infoStableSystem.call({from: accounts[0]});
		const addressSWRtoGq = await TimeMinerz3roUe5.whitelist.call(addressYzvajw8, boolugyaIUD, {from: accounts[1]});
		const uint256mAIGzSm = await TimeMinerz3roUe5.changePreSalePriceIfToHigh.call(uintYVRcW6, {from: accounts[3]});

		await expect(TimeMinerz3roUe5.tokensToClaim.call(addresswxyMJ1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGFSIkwS = await TimeMiner.new({from: accounts[0]});
		const boolSgHR1k2 = true
		const addressbi0UMIN = accounts[1]
		const addressM8jP0hR = accounts[2]
		const uintBAnwHqr = BigInt("1495")
		const addressYMoxd5 = accounts[2]
		const uintNXRHvBC = BigInt("1965")
		const addressFcm8J3I = accounts[5]
		const boolOtkjZj = await TimeMinerGFSIkwS.setStableCoinSystem.call(boolSgHR1k2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h0iknB = await TimeMinerGFSIkwS.allowance.call(addressM8jP0hR, addressbi0UMIN, {from: accounts[2]});
		const boolA8Hsx8v = await TimeMinerGFSIkwS.approve.call(addressYMoxd5, uintBAnwHqr, {from: accounts[2]});
		const boolPk4sq88 = await TimeMinerGFSIkwS.infoStableSystem.call({from: accounts[1]});
		const boolbOoFaro = await TimeMinerGFSIkwS.approve.call(addressFcm8J3I, uintNXRHvBC, {from: accounts[5]});

		await expect(TimeMinerGFSIkwS.setStableCoinSystem.call(boolSgHR1k2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNwSXGtI = await TimeMiner.new({from: accounts[0]});
		const uintn643yc = BigInt("1063")
		const uintrwwiFMY = BigInt("1032")
		const addressGZEbz09 = accounts[4]
		const addressayEbHD4 = accounts[1]
		const uint256Xm64OTV = await TimeMinerNwSXGtI.changePreSalePriceIfToHigh.call(uintn643yc, {from: accounts[1]});
		const booldfVENRt = await TimeMinerNwSXGtI.approve.call(addressGZEbz09, uintrwwiFMY, {from: accounts[5]});
		const uint256gCSupAm = await TimeMinerNwSXGtI.balanceOf.call(addressayEbHD4, {from: accounts[3]});

		await expect(TimeMinerNwSXGtI.changePreSalePriceIfToHigh.call(uintn643yc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerBs6fq05 = await TimeMiner.new({from: accounts[3]});
		const addressXUidyb = accounts[2]
		const uintBqvPw2X = BigInt("1138")
		const addressUJkbzqp = accounts[4]
		const addressvttTpI = accounts[0]
		const uintQLE7BhA = BigInt("1942")
		const addressUROLBIY = "0x0000000000000000000000000000000000000001"
		const uint256EH5DD5o = await TimeMinerBs6fq05.allInfoFor.call(addressXUidyb, {from: accounts[1]});
		const boollQlV8YA = await TimeMinerBs6fq05.approve.call(addressUJkbzqp, uintBqvPw2X, {from: accounts[2]});
		const uint256bhIa4BJ = await TimeMinerBs6fq05.allInfoFor.call(addressvttTpI, {from: accounts[2]});
		const boolAFXOlEp = await TimeMinerBs6fq05.approve.call(addressUROLBIY, uintQLE7BhA, {from: accounts[1]});

		await expect(TimeMinerBs6fq05.allInfoFor.call(addressXUidyb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDY98Npt = await TimeMiner.new({from: accounts[4]});
		const uintqggiccD = BigInt("1990")
		const uintqT22YYx = BigInt("604")
		const uintlhov6H = BigInt("914")
		const uintIoD56tY = BigInt("1086")
		const address7kLuAG = accounts[4]
		const uintvwsCDcR = BigInt("783")
		const addressGvhbI2F = "0x0000000000000000000000000000000000000001"
		const uint256B3hZVOc = await TimeMinerDY98Npt.setPrizeFromNewAddress.call(uintqT22YYx, uintqggiccD, {from: accounts[3]});
		const uint256L9tXL3 = await TimeMinerDY98Npt.setPrizeFromNewAddress.call(uintIoD56tY, uintlhov6H, {from: accounts[1]});
		const uint256hmAOzo = await TimeMinerDY98Npt.tokensToClaim.call(address7kLuAG, {from: accounts[3]});
		const boolND40Ddt = await TimeMinerDY98Npt.transfer.call(addressGvhbI2F, uintvwsCDcR, {from: accounts[4]});

		await expect(TimeMinerDY98Npt.setPrizeFromNewAddress.call(uintqT22YYx, uintqggiccD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbjrGdec = await TimeMiner.new({from: accounts[4]});
		const addressvYCPFG = accounts[4]
		const addressvn42KMo = accounts[0]
		const addressZsyPFEH = accounts[0]
		await TimeMinerbjrGdec.preSaleFinished.call({from: accounts[1]});
		const boolxy7eKds = await TimeMinerbjrGdec.infoStableSystem.call({from: accounts[4]});
		const uint256QS8yT10 = await TimeMinerbjrGdec.tokensToClaim.call(addressvYCPFG, {from: accounts[3]});
		const uint256GypR4pq = await TimeMinerbjrGdec.balanceOfTokenCirculation.call(addressvn42KMo, {from: accounts[5]});
		const boolgCnbgCr = await TimeMinerbjrGdec.isWhitelisted.call(addressZsyPFEH, {from: accounts[4]});

		await expect(TimeMinerbjrGdec.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereHVaLBa = await TimeMiner.new({from: accounts[5]});
		const addressKtfffqm = "0x0000000000000000000000000000000000000001"
		const uintYzkjgQm = BigInt("905")
		const boolTsNNL4T = true
		const boolfJI47HJ = await TimeMinereHVaLBa.isWhitelisted.call(addressKtfffqm, {from: accounts[0]});
		const uintYFtm7XD = await TimeMinereHVaLBa.preSale.call(uintYzkjgQm, {from: accounts[2]});
		const booljb0hbnW = await TimeMinereHVaLBa.setStableCoinSystem.call(boolTsNNL4T, {from: accounts[4]});

		assert.equal(boolfJI47HJ, false)
		await expect(TimeMinereHVaLBa.preSale.call(uintYzkjgQm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinermGCv5o = await TimeMiner.new({from: accounts[1]});
		const addressBTv73Vw = accounts[2]
		const addressjHSkEAE = accounts[1]
		const addresso04msok = accounts[1]
		const addressBMOIOkm = accounts[4]
		const boolV8t3Bk2 = false
		const uint256aG7HizG = await TimeMinermGCv5o.allowance.call(addressjHSkEAE, addressBTv73Vw, {from: accounts[3]});
		const uint256j6Qhg3C = await TimeMinermGCv5o.allowance.call(addressBMOIOkm, addresso04msok, {from: "0x0000000000000000000000000000000000000001"});
		const boolq0zeOju = await TimeMinermGCv5o.infoStableSystem.call({from: accounts[4]});
		const boolXmvGHRG = await TimeMinermGCv5o.infoStableSystem.call({from: accounts[4]});
		const boolPtDkUlB = await TimeMinermGCv5o.setStableCoinSystem.call(boolV8t3Bk2, {from: accounts[1]});

		assert.equal(uint256aG7HizG, BigInt("0"))
		assert.equal(uint256j6Qhg3C, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerv1bJPZ = await TimeMiner.new({from: accounts[1]});
		const addressTXC2HcD = accounts[5]
		const addressmgTWFHh = accounts[4]
		const uintopEpvCq = BigInt("383")
		const addressWgkbOCY = accounts[1]
		const uintno5wS3W = BigInt("854")
		const addressAIC98yD = "0x0000000000000000000000000000000000000001"
		const addressSby36Ll = accounts[2]
		const addressii7sdyA = accounts[3]
		const uint256eDhvMA1 = await TimeMinerv1bJPZ.allowance.call(addressmgTWFHh, addressTXC2HcD, {from: accounts[3]});
		const boolBaDyvmw = await TimeMinerv1bJPZ.approve.call(addressWgkbOCY, uintopEpvCq, {from: accounts[3]});
		const boolzDuThNV = await TimeMinerv1bJPZ.approve.call(addressAIC98yD, uintno5wS3W, {from: accounts[5]});
		const boolVO8zzz8 = await TimeMinerv1bJPZ.isWhitelisted.call(addressSby36Ll, {from: accounts[3]});
		const uint256H0aTq9o = await TimeMinerv1bJPZ.tokensToClaim.call(addressii7sdyA, {from: accounts[0]});

		assert.equal(boolBaDyvmw, true)
		assert.equal(boolVO8zzz8, false)
		assert.equal(boolzDuThNV, true)
		assert.equal(uint256eDhvMA1, BigInt("0"))
		await expect(TimeMinerv1bJPZ.tokensToClaim.call(addressii7sdyA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerohHvuGx = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshYNONvH = accounts[3]
		const uintoxe1wnH = BigInt("699")
		const addressPVrhUN = "0x0000000000000000000000000000000000000001"
		const addressBafI0qV = accounts[1]
		const addressqh7tIFa = accounts[3]
		const uint256WPLMv1n = await TimeMinerohHvuGx.balanceOf.call(addresshYNONvH, {from: accounts[4]});
		const boolelUmUNX = await TimeMinerohHvuGx.approve.call(addressPVrhUN, uintoxe1wnH, {from: accounts[1]});
		const uint256m0t6MU5 = await TimeMinerohHvuGx.totalSupply.call({from: accounts[1]});
		const uint256nMJyIy3 = await TimeMinerohHvuGx.allowance.call(addressqh7tIFa, addressBafI0qV, {from: accounts[5]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNwSXGtI = await TimeMiner.new({from: accounts[0]});
		const addressMGBVHKD = accounts[2]
		const uintEtLzceE = BigInt("836")
		const addressKP6EEtQ = "0x0000000000000000000000000000000000000001"
		const uint256gCSupAm = await TimeMinerNwSXGtI.balanceOf.call(addressMGBVHKD, {from: accounts[3]});
		const boolm58E0Eo = await TimeMinerNwSXGtI.transfer.call(addressKP6EEtQ, uintEtLzceE, {from: accounts[0]});

		assert.equal(boolm58E0Eo, true)
		assert.equal(uint256gCSupAm, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNwSXGtI = await TimeMiner.new({from: accounts[0]});
		const addressBYavEx9 = accounts[2]
		const boolpVCl1BC = false
		const addressebRNN4u = accounts[0]
		const booluszA3tW = false
		const addressACr9EZ = accounts[3]
		const uint256gCSupAm = await TimeMinerNwSXGtI.balanceOf.call(addressBYavEx9, {from: accounts[3]});
		const addressZaWgHj = await TimeMinerNwSXGtI.whitelist.call(addressebRNN4u, boolpVCl1BC, {from: accounts[2]});
		const addressrJGOKXs = await TimeMinerNwSXGtI.whitelist.call(addressACr9EZ, booluszA3tW, {from: accounts[1]});

		assert.equal(uint256gCSupAm, BigInt("0"))
		await expect(TimeMinerNwSXGtI.whitelist.call(addressebRNN4u, boolpVCl1BC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNwSXGtI = await TimeMiner.new({from: accounts[0]});
		const addressR9SfFpX = accounts[1]
		const uinttWr3ByO = BigInt("1983")
		const addressGDoud2N = accounts[1]
		const addresscQ8urlK = accounts[3]
		const uint256gCSupAm = await TimeMinerNwSXGtI.balanceOf.call(addressR9SfFpX, {from: accounts[3]});
		const boolQoPp5P = await TimeMinerNwSXGtI.transferFrom.call(addresscQ8urlK, addressGDoud2N, uinttWr3ByO, {from: accounts[4]});

		assert.equal(uint256gCSupAm, BigInt("0"))
		await expect(TimeMinerNwSXGtI.transferFrom.call(addresscQ8urlK, addressGDoud2N, uinttWr3ByO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNwSXGtI = await TimeMiner.new({from: accounts[0]});
		const uintd5cJOfL = BigInt("1069")
		const addressoOSUdzq = "0x0000000000000000000000000000000000000001"
		const boolm58E0Eo = await TimeMinerNwSXGtI.transfer.call(addressoOSUdzq, uintd5cJOfL, {from: accounts[0]});
		await TimeMinerNwSXGtI.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolm58E0Eo, true)
		await expect(TimeMinerNwSXGtI.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})