const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerEfnuk7B = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressugzu621 = accounts[0]
		const addresswAsofUH = accounts[2]
		const booljJ3tWYg = true
		const addressPm1iki = accounts[1]
		const uintVOPvkFB = BigInt("134")
		const addressf0fmRCo = accounts[3]
		const uintbhOZOL0 = BigInt("1724")
		const uintXYPpbvh = BigInt("22")
		const uint256iSYSICM = await TimeMinerEfnuk7B.allowance.call(addresswAsofUH, addressugzu621, {from: accounts[4]});
		const boolvgX957 = await TimeMinerEfnuk7B.setStableCoinSystem.call(booljJ3tWYg, {from: accounts[0]});
		const uint256IPK1Ods = await TimeMinerEfnuk7B.allInfoFor.call(addressPm1iki, {from: accounts[4]});
		const boolOyEYM3Q = await TimeMinerEfnuk7B.approve.call(addressf0fmRCo, uintVOPvkFB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nnDEW1Z = await TimeMinerEfnuk7B.setPrizeFromNewAddress.call(uintXYPpbvh, uintbhOZOL0, {from: accounts[2]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGhbnNID = await TimeMiner.new({from: accounts[5]});
		const addressk3tkNX3 = accounts[0]
		const addressBeGD9zd = accounts[0]
		const uint256ZnE1Ain = await TimeMinerGhbnNID.totalSupply.call({from: accounts[4]});
		const uint256L14Wbi = await TimeMinerGhbnNID.allowance.call(addressBeGD9zd, addressk3tkNX3, {from: accounts[5]});

		assert.equal(uint256L14Wbi, BigInt("0"))
		assert.equal(uint256ZnE1Ain, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEmXfhyo = await TimeMiner.new({from: accounts[2]});
		const uintlY4D4KH = BigInt("822")
		const uintlUcRpUp = BigInt("1336")
		const uintAXQXxGX = BigInt("1687")
		const addressqBTsRdS = accounts[1]
		const uint256ol5Avcs = await TimeMinerEmXfhyo.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256AUP5zwT = await TimeMinerEmXfhyo.setPrizeFromNewAddress.call(uintlUcRpUp, uintlY4D4KH, {from: accounts[4]});
//		const uint256z8vJ9Ar = await TimeMinerEmXfhyo.changePreSalePriceIfToHigh.call(uintAXQXxGX, {from: accounts[0]});
//		const boolSvV2wjd = await TimeMinerEmXfhyo.infoStableSystem.call({from: accounts[0]});
//		const uint256WgFZsU0 = await TimeMinerEmXfhyo.tokensToClaim.call(addressqBTsRdS, {from: accounts[4]});

		assert.equal(uint256ol5Avcs, BigInt("24000000"))
		await expect(TimeMinerEmXfhyo.setPrizeFromNewAddress.call(uintlUcRpUp, uintlY4D4KH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqKJPF98 = await TimeMiner.new({from: accounts[1]});
		const addressGoRoNu = accounts[1]
		const addressfUJiMoG = accounts[3]
//		await TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]});
//		const uint256QARwmx = await TimeMinerqKJPF98.allowance.call(addressfUJiMoG, addressGoRoNu, {from: accounts[4]});

		await expect(TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervdIFG3M = await TimeMiner.new({from: accounts[4]});
		const addresskymE23x = accounts[2]
		const uint256GYckgWn = await TimeMinervdIFG3M.totalSupply.call({from: accounts[1]});
		const uint256m4JKsW = await TimeMinervdIFG3M.totalSupply.call({from: accounts[3]});
		const uint256X1AIE7C = await TimeMinervdIFG3M.balanceOf.call(addresskymE23x, {from: accounts[0]});
		const boolouy2JPT = await TimeMinervdIFG3M.infoStableSystem.call({from: accounts[5]});

		assert.equal(uint256GYckgWn, BigInt("24000000"))
		assert.equal(uint256X1AIE7C, BigInt("0"))
		assert.equal(uint256m4JKsW, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerFYgScPy = await TimeMiner.new({from: accounts[0]});
		const uintYtTFKl2 = BigInt("1697")
		const addressUogUpHT = accounts[3]
		const addressejohKK8 = accounts[3]
		const addressYCoJrhV = "0x0000000000000000000000000000000000000001"
//		const uint25662kjOX = await TimeMinerFYgScPy.changePreSalePriceIfToHigh.call(uintYtTFKl2, {from: accounts[2]});
//		const boolUSFiZvI = await TimeMinerFYgScPy.isWhitelisted.call(addressUogUpHT, {from: accounts[1]});
//		const uint256vz4Q85 = await TimeMinerFYgScPy.allowance.call(addressYCoJrhV, addressejohKK8, {from: accounts[0]});

		await expect(TimeMinerFYgScPy.changePreSalePriceIfToHigh.call(uintYtTFKl2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQEYPQxr = await TimeMiner.new({from: accounts[0]});
		const booldTXb7WR = false
		const addressaPj0WJ = accounts[3]
		const uintmM5km9j = BigInt("893")
		const boolZd3SAKz = true
		const addresskp0Fz9R = accounts[1]
//		const addressvAXjjZ = await TimeMinerQEYPQxr.whitelist.call(addressaPj0WJ, booldTXb7WR, {from: accounts[1]});
//		await TimeMinerQEYPQxr.preSaleFinished.call({from: accounts[3]});
//		const uintAT4k1mw = await TimeMinerQEYPQxr.preSale.call(uintmM5km9j, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYBmYFMC = await TimeMinerQEYPQxr.whitelist.call(addresskp0Fz9R, boolZd3SAKz, {from: accounts[3]});

		await expect(TimeMinerQEYPQxr.whitelist.call(addressaPj0WJ, booldTXb7WR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOHYvVZ = await TimeMiner.new({from: accounts[4]});
		const addressIinCGDD = accounts[4]
		const addressGB7mt6D = accounts[0]
		const uintVYbLOM = BigInt("223")
		const uintWE4y3Wi = BigInt("1049")
		const addressbCfyZG6 = accounts[4]
		const addressWrSQht = accounts[2]
		const addressQETEshw = accounts[0]
		const boolJlSqbUL = await TimeMinerOHYvVZ.infoStableSystem.call({from: accounts[0]});
		const uint256WZnBD0 = await TimeMinerOHYvVZ.tokensToClaim.call(addressIinCGDD, {from: accounts[5]});
		const uint256LgQwCjk = await TimeMinerOHYvVZ.balanceOf.call(addressGB7mt6D, {from: accounts[3]});
//		const uint256ZKsf1Zw = await TimeMinerOHYvVZ.setPrizeFromNewAddress.call(uintWE4y3Wi, uintVYbLOM, {from: accounts[5]});
//		const uint256UxtzpgP = await TimeMinerOHYvVZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await TimeMinerOHYvVZ.preSaleFinished.call({from: accounts[1]});
//		const boolqtUWyGZ = await TimeMinerOHYvVZ.isWhitelisted.call(addressbCfyZG6, {from: accounts[3]});
//		const uint256VSCrilE = await TimeMinerOHYvVZ.allowance.call(addressQETEshw, addressWrSQht, {from: accounts[3]});

		assert.equal(uint256LgQwCjk, BigInt("0"))
		assert.equal(uint256WZnBD0, BigInt("12000000"))
		await expect(TimeMinerOHYvVZ.setPrizeFromNewAddress.call(uintWE4y3Wi, uintVYbLOM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGhbnNID = await TimeMiner.new({from: accounts[5]});
		const addressKJtZNdW = accounts[4]
		const addressTPkKJBt = accounts[0]
		const addressNJJ5h2z = accounts[0]
		const uintHkJplkf = BigInt("1171")
		const addressl1YOBy4 = accounts[2]
		const addressJcfmuYK = accounts[0]
		const addressqx0Zbpw = accounts[1]
		const uint256ZnE1Ain = await TimeMinerGhbnNID.totalSupply.call({from: accounts[4]});
		const uint256ByLea9h = await TimeMinerGhbnNID.balanceOf.call(addressKJtZNdW, {from: accounts[2]});
		const uint256L14Wbi = await TimeMinerGhbnNID.allowance.call(addressNJJ5h2z, addressTPkKJBt, {from: accounts[5]});
//		const boolq2WRMHQ = await TimeMinerGhbnNID.transfer.call(addressl1YOBy4, uintHkJplkf, {from: accounts[2]});
//		const uint256OAqk3ML = await TimeMinerGhbnNID.allowance.call(addressqx0Zbpw, addressJcfmuYK, {from: accounts[0]});

		assert.equal(uint256ByLea9h, BigInt("0"))
		assert.equal(uint256L14Wbi, BigInt("0"))
		assert.equal(uint256ZnE1Ain, BigInt("24000000"))
		await expect(TimeMinerGhbnNID.transfer.call(addressl1YOBy4, uintHkJplkf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqKJPF98 = await TimeMiner.new({from: accounts[1]});
		const addressDTLAOaK = accounts[4]
		const boolft35KeO = true
		const addressNhVQdKQ = accounts[2]
		const uintjwk4H2N = BigInt("393")
		const addressvgLAs6P = accounts[2]
		const addresspvrMsHO = accounts[1]
		const addressIafjpk9 = accounts[3]
//		await TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]});
//		const uint256SSQmb62 = await TimeMinerqKJPF98.allInfoFor.call(addressDTLAOaK, {from: accounts[5]});
//		const addressD27qQuG = await TimeMinerqKJPF98.whitelist.call(addressNhVQdKQ, boolft35KeO, {from: accounts[1]});
//		const boolBYZx4P = await TimeMinerqKJPF98.transfer.call(addressvgLAs6P, uintjwk4H2N, {from: accounts[2]});
//		const uint256QARwmx = await TimeMinerqKJPF98.allowance.call(addressIafjpk9, addresspvrMsHO, {from: accounts[4]});

		await expect(TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNqfWDYd = await TimeMiner.new({from: accounts[3]});
		const uintK1S2WG = BigInt("1005")
		const addressrPlFn0Q = accounts[1]
		const addressE3evWzL = accounts[4]
		const uintzXcSxet = BigInt("207")
		const addressWjTkwIQ = accounts[1]
		const addressRPfVyRy = accounts[0]
//		const booliiOVQxZ = await TimeMinerNqfWDYd.transferFrom.call(addressE3evWzL, addressrPlFn0Q, uintK1S2WG, {from: accounts[4]});
//		const boolSPJPpOi = await TimeMinerNqfWDYd.transferFrom.call(addressRPfVyRy, addressWjTkwIQ, uintzXcSxet, {from: accounts[1]});

		await expect(TimeMinerNqfWDYd.transferFrom.call(addressE3evWzL, addressrPlFn0Q, uintK1S2WG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqKJPF98 = await TimeMiner.new({from: accounts[1]});
		const addressrxswBF = accounts[3]
		const addressL5NAare = accounts[1]
		const addressRmuHHL = accounts[4]
		const addressPJsjxz = accounts[3]
//		await TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]});
//		const boolgDQqJrz = await TimeMinerqKJPF98.isWhitelisted.call(addressrxswBF, {from: accounts[1]});
//		const uint256QARwmx = await TimeMinerqKJPF98.allowance.call(addressRmuHHL, addressL5NAare, {from: accounts[4]});
//		const boolO8Uygga = await TimeMinerqKJPF98.isWhitelisted.call(addressPJsjxz, {from: accounts[4]});

		await expect(TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerIT175Ul = await TimeMiner.new({from: accounts[0]});
		const boolHpyCxWp = false
		const boolrpQrPLe = true
		const addressxCeoOK4 = accounts[2]
		const boolPn9lClX = await TimeMinerIT175Ul.infoStableSystem.call({from: accounts[1]});
//		const bool0yzBkZ = await TimeMinerIT175Ul.setStableCoinSystem.call(boolHpyCxWp, {from: accounts[4]});
//		const boolOzLtAoK = await TimeMinerIT175Ul.infoStableSystem.call({from: accounts[1]});
//		const boolqaNQyFJ = await TimeMinerIT175Ul.setStableCoinSystem.call(boolrpQrPLe, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256X4bUBYr = await TimeMinerIT175Ul.balanceOfTokenCirculation.call(addressxCeoOK4, {from: accounts[1]});

		await expect(TimeMinerIT175Ul.setStableCoinSystem.call(boolHpyCxWp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqKJPF98 = await TimeMiner.new({from: accounts[1]});
		const uintXWDZyeR = BigInt("825")
		const addressBmhXH5S = accounts[2]
		const addressRN4X2Sq = accounts[2]
		const address7vtEks = accounts[3]
		const addressBnKrXDm = accounts[3]
		const boolPowNSE = await TimeMinerqKJPF98.approve.call(addressBmhXH5S, uintXWDZyeR, {from: accounts[1]});
		const uint256RpAlCqD = await TimeMinerqKJPF98.allowance.call(address7vtEks, addressRN4X2Sq, {from: accounts[0]});
		const uint256nDgKsci = await TimeMinerqKJPF98.balanceOf.call(addressBnKrXDm, {from: accounts[2]});
//		await TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]});

		assert.equal(boolPowNSE, true)
		assert.equal(uint256RpAlCqD, BigInt("0"))
		assert.equal(uint256nDgKsci, BigInt("0"))
		await expect(TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqKJPF98 = await TimeMiner.new({from: accounts[1]});
		const addresss5wawY4 = accounts[0]
		const uintQ607wmZ = BigInt("390")
		const addressn9f0YoG = accounts[3]
		const uinteAH3zh = BigInt("393")
		const addressZ1tQBC0 = accounts[2]
		const uint256kpQYfJ9 = await TimeMinerqKJPF98.balanceOfTokenCirculation.call(addresss5wawY4, {from: accounts[0]});
//		await TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]});
//		const boolhJS275l = await TimeMinerqKJPF98.transfer.call(addressn9f0YoG, uintQ607wmZ, {from: accounts[1]});
//		const boolBYZx4P = await TimeMinerqKJPF98.transfer.call(addressZ1tQBC0, uinteAH3zh, {from: accounts[2]});

		assert.equal(uint256kpQYfJ9, BigInt("0"))
		await expect(TimeMinerqKJPF98.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerp9DFcz = await TimeMiner.new({from: accounts[4]});
		const uintfCnyil9 = BigInt("1435")
		const addresstaakP8R = accounts[2]
		const boolzzhA6F = false
		const addressnB11G9D = accounts[1]
//		const uintOi9Tov = await TimeMinerp9DFcz.preSale.call(uintfCnyil9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolc6O93NX = await TimeMinerp9DFcz.infoStableSystem.call({from: accounts[4]});
//		const booldMH1CNu = await TimeMinerp9DFcz.isWhitelisted.call(addresstaakP8R, {from: accounts[2]});
//		const addressJ9BjoMj = await TimeMinerp9DFcz.whitelist.call(addressnB11G9D, boolzzhA6F, {from: accounts[1]});

		await expect(TimeMinerp9DFcz.preSale.call(uintfCnyil9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})