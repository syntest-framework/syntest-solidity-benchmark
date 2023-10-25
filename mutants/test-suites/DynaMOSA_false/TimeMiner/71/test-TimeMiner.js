const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerDo7BUT1 = await TimeMiner.new({from: accounts[2]});
		const uintZ6kU7ii = BigInt("240")
		const addressQvy7TET = accounts[4]
		const addressmrGHC9d = accounts[0]
		const uintr455OVP = BigInt("1040")
		const addresscvKrDk = accounts[3]
		const addressbA7Og1s = accounts[2]
		const addressRf97rvs = accounts[5]
//		const boolhXGHOZU = await TimeMinerDo7BUT1.transferFrom.call(addressmrGHC9d, addressQvy7TET, uintZ6kU7ii, {from: accounts[2]});
//		const boolEaD23jY = await TimeMinerDo7BUT1.transferFrom.call(addressbA7Og1s, addresscvKrDk, uintr455OVP, {from: accounts[5]});
//		const uint256wO3yd5E = await TimeMinerDo7BUT1.balanceOfTokenCirculation.call(addressRf97rvs, {from: accounts[3]});

		await expect(TimeMinerDo7BUT1.transferFrom.call(addressmrGHC9d, addressQvy7TET, uintZ6kU7ii, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervRl6HO4 = await TimeMiner.new({from: accounts[0]});
		const uintYq7kV4 = BigInt("1904")
//		await TimeMinervRl6HO4.preSaleFinished.call({from: accounts[3]});
//		const uint256SvEK2Tk = await TimeMinervRl6HO4.changePreSalePriceIfToHigh.call(uintYq7kV4, {from: accounts[0]});

		await expect(TimeMinervRl6HO4.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineropMBlnb = await TimeMiner.new({from: accounts[2]});
		const addressveeLI6u = accounts[0]
		const uintWdjFV2q = BigInt("1468")
		const uintg2RRKcd = BigInt("1441")
		const uinti4Z9Ppx = BigInt("784")
		const addressonScps4 = accounts[4]
		const boolWEddSKR = await TimeMineropMBlnb.isWhitelisted.call(addressveeLI6u, {from: accounts[3]});
//		await TimeMineropMBlnb.preSaleFinished.call({from: accounts[3]});
//		const uint256cvs6lj = await TimeMineropMBlnb.changePreSalePriceIfToHigh.call(uintWdjFV2q, {from: accounts[1]});
//		const uint256o8YR4Lf = await TimeMineropMBlnb.setPrizeFromNewAddress.call(uinti4Z9Ppx, uintg2RRKcd, {from: accounts[4]});
//		const uint256WdcBqOy = await TimeMineropMBlnb.balanceOf.call(addressonScps4, {from: accounts[2]});

		assert.equal(boolWEddSKR, false)
		await expect(TimeMineropMBlnb.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxXgRv8h = await TimeMiner.new({from: accounts[0]});
		const addressyHPj39N = accounts[4]
		const addressBGsGX0d = accounts[4]
		const addressmlTQO5X = accounts[2]
		const addressydpq4Qo = accounts[0]
		const addressQutJzZC = accounts[2]
		const addressmcjzqE3 = accounts[2]
		const addressZ9451CT = accounts[2]
//		const uint2564PVbLG = await TimeMinerxXgRv8h.tokensToClaim.call(addressyHPj39N, {from: accounts[2]});
//		const uint256w4t0QA = await TimeMinerxXgRv8h.allowance.call(addressmlTQO5X, addressBGsGX0d, {from: accounts[4]});
//		const uint256f4IKNR6 = await TimeMinerxXgRv8h.balanceOf.call(addressydpq4Qo, {from: accounts[5]});
//		const uint256unCv8Xa = await TimeMinerxXgRv8h.allowance.call(addressmcjzqE3, addressQutJzZC, {from: accounts[3]});
//		const uint256z1z8sSc = await TimeMinerxXgRv8h.tokensToClaim.call(addressZ9451CT, {from: accounts[4]});

		await expect(TimeMinerxXgRv8h.tokensToClaim.call(addressyHPj39N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpxNle0W = await TimeMiner.new({from: accounts[2]});
		const boolEBHt83 = true
		const uintAGexCd = BigInt("1746")
		const addressHh3cXWR = accounts[1]
		const addressUONWBaI = accounts[1]
//		const boolaPLELh9 = await TimeMinerpxNle0W.setStableCoinSystem.call(boolEBHt83, {from: accounts[0]});
//		const boold1SdyJ = await TimeMinerpxNle0W.approve.call(addressHh3cXWR, uintAGexCd, {from: accounts[4]});
//		const booleT0LpBY = await TimeMinerpxNle0W.infoStableSystem.call({from: accounts[4]});
//		const uint256ObiCabR = await TimeMinerpxNle0W.allInfoFor.call(addressUONWBaI, {from: accounts[2]});

		await expect(TimeMinerpxNle0W.setStableCoinSystem.call(boolEBHt83, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerB2zR0r = await TimeMiner.new({from: accounts[2]});
		const addressi1fthc0 = accounts[3]
		const boolfnxhnOF = true
		const boolMe9MTiE = await TimeMinerB2zR0r.infoStableSystem.call({from: accounts[0]});
		const uint256nYhAwkE = await TimeMinerB2zR0r.balanceOf.call(addressi1fthc0, {from: accounts[0]});
		const boolGsOinjE = await TimeMinerB2zR0r.setStableCoinSystem.call(boolfnxhnOF, {from: accounts[2]});
		const boolverG9Wn = await TimeMinerB2zR0r.infoStableSystem.call({from: accounts[2]});
		const boolmvcFc7P = await TimeMinerB2zR0r.infoStableSystem.call({from: accounts[3]});

		assert.equal(uint256nYhAwkE, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPTwEkQk = await TimeMiner.new({from: accounts[4]});
		const addressurLSBNl = accounts[4]
		const addressDAhL0zn = accounts[1]
		const uinttT5uQGq = BigInt("1700")
		const addresszGp9XYT = accounts[4]
		const uint256REFvJTt = await TimeMinerPTwEkQk.tokensToClaim.call(addressurLSBNl, {from: accounts[4]});
		const uint256eBVjte6 = await TimeMinerPTwEkQk.balanceOfTokenCirculation.call(addressDAhL0zn, {from: accounts[2]});
//		const boolQKHULoH = await TimeMinerPTwEkQk.transfer.call(addresszGp9XYT, uinttT5uQGq, {from: accounts[2]});

		assert.equal(uint256REFvJTt, BigInt("12000000"))
		assert.equal(uint256eBVjte6, BigInt("0"))
		await expect(TimeMinerPTwEkQk.transfer.call(addresszGp9XYT, uinttT5uQGq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPTwEkQk = await TimeMiner.new({from: accounts[4]});
		const addressLLEa7k8 = accounts[4]
		const addressz1JL2RY = accounts[2]
		const address7y5UFe = accounts[4]
		const uintiGz78YB = BigInt("1700")
		const addressUxieiM3 = accounts[4]
		const uint256REFvJTt = await TimeMinerPTwEkQk.tokensToClaim.call(addressLLEa7k8, {from: accounts[4]});
		const uint256eBVjte6 = await TimeMinerPTwEkQk.balanceOfTokenCirculation.call(addressz1JL2RY, {from: accounts[2]});
		const uint256IAlYgAj = await TimeMinerPTwEkQk.allInfoFor.call(address7y5UFe, {from: accounts[3]});
//		const boolQKHULoH = await TimeMinerPTwEkQk.transfer.call(addressUxieiM3, uintiGz78YB, {from: accounts[2]});

		assert.equal(uint256REFvJTt, BigInt("12000000"))
		assert.equal(uint256eBVjte6, BigInt("0"))
		await expect(TimeMinerPTwEkQk.transfer.call(addressUxieiM3, uintiGz78YB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPTwEkQk = await TimeMiner.new({from: accounts[4]});
		const addressFCX3Kj3 = accounts[4]
		const uintWlTbOZT = BigInt("1424")
		const addressofAYuoP = accounts[5]
		const addressstsxwqv = accounts[2]
		const boolmscvXOp = false
		const addressLnrR6MB = accounts[0]
		const uintxfqeIVp = BigInt("1700")
		const addressCKyDGck = accounts[4]
		const uint256REFvJTt = await TimeMinerPTwEkQk.tokensToClaim.call(addressFCX3Kj3, {from: accounts[4]});
		const boolrKuFj12 = await TimeMinerPTwEkQk.approve.call(addressofAYuoP, uintWlTbOZT, {from: accounts[5]});
		const uint256eBVjte6 = await TimeMinerPTwEkQk.balanceOfTokenCirculation.call(addressstsxwqv, {from: accounts[2]});
//		const addressOrF4y2B = await TimeMinerPTwEkQk.whitelist.call(addressLnrR6MB, boolmscvXOp, {from: accounts[3]});
//		const boolQKHULoH = await TimeMinerPTwEkQk.transfer.call(addressCKyDGck, uintxfqeIVp, {from: accounts[2]});

		assert.equal(boolrKuFj12, true)
		assert.equal(uint256REFvJTt, BigInt("12000000"))
		assert.equal(uint256eBVjte6, BigInt("0"))
		await expect(TimeMinerPTwEkQk.whitelist.call(addressLnrR6MB, boolmscvXOp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineropMBlnb = await TimeMiner.new({from: accounts[2]});
		const addressLC3MPzG = accounts[0]
		const uintC4jbSb8 = BigInt("296")
		const uintc9QfDV2 = BigInt("1468")
		const uintHQhBlSB = BigInt("1441")
		const uintMgNFi7 = BigInt("784")
		const addressP5eH8Xl = accounts[4]
		const addressR8isFyW = accounts[0]
		const boolWEddSKR = await TimeMineropMBlnb.isWhitelisted.call(addressLC3MPzG, {from: accounts[3]});
//		const uint2meB0C = await TimeMineropMBlnb.preSale.call(uintC4jbSb8, {from: accounts[1]});
//		await TimeMineropMBlnb.preSaleFinished.call({from: accounts[3]});
//		const uint256cvs6lj = await TimeMineropMBlnb.changePreSalePriceIfToHigh.call(uintc9QfDV2, {from: accounts[1]});
//		const uint256o8YR4Lf = await TimeMineropMBlnb.setPrizeFromNewAddress.call(uintMgNFi7, uintHQhBlSB, {from: accounts[4]});
//		const uint256WdcBqOy = await TimeMineropMBlnb.balanceOf.call(addressP5eH8Xl, {from: accounts[2]});
//		const boolmn3SB7S = await TimeMineropMBlnb.isWhitelisted.call(addressR8isFyW, {from: accounts[5]});

		assert.equal(boolWEddSKR, false)
		await expect(TimeMineropMBlnb.preSale.call(uintC4jbSb8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPTwEkQk = await TimeMiner.new({from: accounts[4]});
		const addressv7oGOAB = accounts[0]
		const addresswtibBMZ = accounts[2]
		const addressYpgvKH = accounts[4]
		const addresstRwvWR1 = accounts[5]
		const uintGcJvinK = BigInt("702")
		const addressbKdxAT9 = "0x0000000000000000000000000000000000000001"
		const uintoc7TzW = BigInt("1700")
		const addressN1KdbYR = accounts[6]
		const boolM20FHf = await TimeMinerPTwEkQk.isWhitelisted.call(addressv7oGOAB, {from: accounts[3]});
		const uint256EONCAHS = await TimeMinerPTwEkQk.allowance.call(addressYpgvKH, addresswtibBMZ, {from: accounts[1]});
//		const uint256REFvJTt = await TimeMinerPTwEkQk.tokensToClaim.call(addresstRwvWR1, {from: accounts[4]});
//		const boolN7jc36S = await TimeMinerPTwEkQk.approve.call(addressbKdxAT9, uintGcJvinK, {from: accounts[4]});
//		const boolQKHULoH = await TimeMinerPTwEkQk.transfer.call(addressN1KdbYR, uintoc7TzW, {from: accounts[2]});

		assert.equal(boolM20FHf, false)
		assert.equal(uint256EONCAHS, BigInt("0"))
		await expect(TimeMinerPTwEkQk.tokensToClaim.call(addresstRwvWR1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQqnAtc6 = await TimeMiner.new({from: accounts[4]});
		const uintybz1erN = BigInt("1889")
		const boolhr1Vlf7 = false
		const boolm6Q6RNq = false
		const addresshqoXjj5 = accounts[1]
//		const uint2564Bpe0o = await TimeMinerQqnAtc6.changePreSalePriceIfToHigh.call(uintybz1erN, {from: accounts[1]});
//		const boolvsjlupj = await TimeMinerQqnAtc6.setStableCoinSystem.call(boolhr1Vlf7, {from: accounts[4]});
//		const addressHmj5SrU = await TimeMinerQqnAtc6.whitelist.call(addresshqoXjj5, boolm6Q6RNq, {from: accounts[4]});

		await expect(TimeMinerQqnAtc6.changePreSalePriceIfToHigh.call(uintybz1erN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPTwEkQk = await TimeMiner.new({from: accounts[4]});
		const address4X0oj2 = accounts[5]
		const uintQ1kBPXQ = BigInt("1700")
		const address0NUbHy = accounts[5]
//		await TimeMinerPTwEkQk.preSaleFinished.call({from: accounts[4]});
//		const uint256REFvJTt = await TimeMinerPTwEkQk.tokensToClaim.call(address4X0oj2, {from: accounts[4]});
//		const boolQKHULoH = await TimeMinerPTwEkQk.transfer.call(address0NUbHy, uintQ1kBPXQ, {from: accounts[2]});

		await expect(TimeMinerPTwEkQk.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDk0ojI = await TimeMiner.new({from: accounts[0]});
		const uintNcIgRMB = BigInt("132")
		const uintDqNzSRx = BigInt("1310")
		const uintxGAMBrr = BigInt("1293")
		const addressKwvdgHy = accounts[1]
		const addressyaDCLol = accounts[1]
		const uint256kdwVOnr = await TimeMinerDk0ojI.setPrizeFromNewAddress.call(uintDqNzSRx, uintNcIgRMB, {from: accounts[0]});
		const boolL1TzkCc = await TimeMinerDk0ojI.approve.call(addressKwvdgHy, uintxGAMBrr, {from: accounts[0]});
		const uint256Gpnc55P = await TimeMinerDk0ojI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HhciFzP = await TimeMinerDk0ojI.tokensToClaim.call(addressyaDCLol, {from: accounts[2]});

		assert.equal(boolL1TzkCc, true)
		assert.equal(uint256Gpnc55P, BigInt("24000000"))
		await expect(TimeMinerDk0ojI.tokensToClaim.call(addressyaDCLol, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPTwEkQk = await TimeMiner.new({from: accounts[4]});
		const address9SbnBO = accounts[4]
		const addressdDTSiyo = accounts[0]
		const addressWxyb8o = accounts[3]
		const uintwYCYmuP = BigInt("872")
		const addressSUNgksT = "0x0000000000000000000000000000000000000001"
		const addressHdIvvT = accounts[4]
		const uint256REFvJTt = await TimeMinerPTwEkQk.tokensToClaim.call(address9SbnBO, {from: accounts[4]});
		const boolwUmMr0F = await TimeMinerPTwEkQk.isWhitelisted.call(addressdDTSiyo, {from: accounts[1]});
		const boolsCxi9dj = await TimeMinerPTwEkQk.isWhitelisted.call(addressWxyb8o, {from: accounts[0]});
//		await TimeMinerPTwEkQk.preSaleFinished.call({from: accounts[4]});
//		const boolyR3bi5W = await TimeMinerPTwEkQk.transfer.call(addressSUNgksT, uintwYCYmuP, {from: accounts[4]});
//		const uint256YvAzfAk = await TimeMinerPTwEkQk.allInfoFor.call(addressHdIvvT, {from: accounts[5]});

		assert.equal(boolsCxi9dj, false)
		assert.equal(boolwUmMr0F, false)
		assert.equal(uint256REFvJTt, BigInt("12000000"))
		await expect(TimeMinerPTwEkQk.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerscH5o8f = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const booll5Fyf3 = false
		const addresshtjM25R = accounts[0]
		const addressO7ZnSY2 = accounts[5]
		const addressWcWDzIH = accounts[1]
		const addressRKnw62W = accounts[1]
		const addressKFKNDjR = await TimeMinerscH5o8f.whitelist.call(addresshtjM25R, booll5Fyf3, {from: accounts[0]});
		const uint256KwPsrQy = await TimeMinerscH5o8f.balanceOfTokenCirculation.call(addressO7ZnSY2, {from: accounts[0]});
		const uint256XneuJ9J = await TimeMinerscH5o8f.tokensToClaim.call(addressWcWDzIH, {from: accounts[4]});
		const boolFDvxjM = await TimeMinerscH5o8f.isWhitelisted.call(addressRKnw62W, {from: accounts[2]});
	});
})