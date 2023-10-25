const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressGeTb1om = accounts[2]
		const addressTFN4klp = accounts[3]
		const uintzGjrLp = BigInt("90")
		const uintr7tU8px = BigInt("1353")
		const MisesLegacyPoolUeWgcoP = await MisesLegacyPool.new(addressGeTb1om, addressTFN4klp, uintzGjrLp, uintr7tU8px, {from: accounts[4]});
		const addresskquOQm7 = "0x0000000000000000000000000000000000000001"
		const uintp3xiGJp = BigInt("1224")
//		await MisesLegacyPoolUeWgcoP.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolUeWgcoP.checkStart.call({from: accounts[1]});
//		const addressO39kFdZ = await MisesLegacyPoolUeWgcoP.updateReward.call(addresskquOQm7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RjO8ERD = await MisesLegacyPoolUeWgcoP.withdraw.call(uintp3xiGJp, {from: accounts[5]});

		await expect(MisesLegacyPoolUeWgcoP.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressMLYNmJ = accounts[0]
		const addressjLTMyJD = accounts[1]
		const uintoeNT8t = BigInt("1510")
		const uintiVup66S = BigInt("1998")
		const MisesLegacyPoolCCCUMdJ = await MisesLegacyPool.new(addressMLYNmJ, addressjLTMyJD, uintoeNT8t, uintiVup66S, {from: accounts[2]});
		const uintFJUa8f = BigInt("1176")
//		const uint256u3RTWme = await MisesLegacyPoolCCCUMdJ.withdraw.call(uintFJUa8f, {from: accounts[1]});
//		await MisesLegacyPoolCCCUMdJ.exit.call({from: accounts[1]});

		await expect(MisesLegacyPoolCCCUMdJ.withdraw.call(uintFJUa8f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressIMccZLU = accounts[0]
		const addresspV2Vbut = accounts[3]
		const uinthSYR5Vh = BigInt("377")
		const uintnUZSjCw = BigInt("975")
		const MisesLegacyPoollWLyn1x = await MisesLegacyPool.new(addressIMccZLU, addresspV2Vbut, uinthSYR5Vh, uintnUZSjCw, {from: accounts[2]});
		const uintCJo9BI5 = BigInt("1454")
		const addressL1LgHKA = accounts[1]
		const addressz5nU7gX = accounts[3]
		const uintf6OQlaB = BigInt("725")
//		const uint25617gBcy = await MisesLegacyPoollWLyn1x.stake.call(uintCJo9BI5, {from: accounts[5]});
//		const addressXjdrFrb = await MisesLegacyPoollWLyn1x.updateReward.call(addressL1LgHKA, {from: accounts[2]});
//		const addressgAequcs = await MisesLegacyPoollWLyn1x.updateReward.call(addressz5nU7gX, {from: accounts[4]});
//		const uint256lKj0bmr = await MisesLegacyPoollWLyn1x.notifyRewardAmount.call(uintf6OQlaB, {from: accounts[3]});

		await expect(MisesLegacyPoollWLyn1x.stake.call(uintCJo9BI5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresshWTaTtr = accounts[4]
		const addressaSr1F56 = accounts[2]
		const uintTY7XfPZ = BigInt("793")
		const uintkkdBIp0 = BigInt("874")
		const MisesLegacyPoolhutd6tN = await MisesLegacyPool.new(addresshWTaTtr, addressaSr1F56, uintTY7XfPZ, uintkkdBIp0, {from: accounts[0]});
		const uintRb0oGMA = BigInt("99")
		const uintMpeXfiM = BigInt("1163")
//		await MisesLegacyPoolhutd6tN.getReward.call({from: accounts[1]});
//		const uint256fE8Xr8r = await MisesLegacyPoolhutd6tN.notifyRewardAmount.call(uintRb0oGMA, {from: accounts[2]});
//		const uint256fYY81RB = await MisesLegacyPoolhutd6tN.notifyRewardAmount.call(uintMpeXfiM, {from: accounts[5]});

		await expect(MisesLegacyPoolhutd6tN.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressXOXIVf = accounts[2]
		const addressPKgEln8 = accounts[1]
		const uintbgs7MmO = BigInt("1131")
		const uintumX1mAA = BigInt("1417")
		const MisesLegacyPoolMco5bb3 = await MisesLegacyPool.new(addressXOXIVf, addressPKgEln8, uintbgs7MmO, uintumX1mAA, {from: accounts[4]});
//		await MisesLegacyPoolMco5bb3.exit.call({from: accounts[2]});
//		const uint256A7MbqgH = await MisesLegacyPoolMco5bb3.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(MisesLegacyPoolMco5bb3.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressAFRwEZt = accounts[3]
		const addressaGnX3m2 = accounts[4]
		const uintKynLjZ7 = BigInt("97")
		const uintbECDhCR = BigInt("1617")
		const MisesLegacyPoolHHiYkwj = await MisesLegacyPool.new(addressAFRwEZt, addressaGnX3m2, uintKynLjZ7, uintbECDhCR, {from: "0x0000000000000000000000000000000000000001"});
		const addressIwO20C = accounts[5]
		const addressVrIm6Hs = accounts[0]
		const addressLCLRN0w = accounts[4]
		const uintut9BKhK = BigInt("479")
		const addressR5uBCzx = accounts[0]
		const addressIjJ0UG5 = accounts[0]
		const uint256x7gfRZ = await MisesLegacyPoolHHiYkwj.earned.call(addressIwO20C, {from: accounts[1]});
		const uint256mf8GQlQ = await MisesLegacyPoolHHiYkwj.earned.call(addressVrIm6Hs, {from: accounts[1]});
		const addressNOoNQH = await MisesLegacyPoolHHiYkwj.updateReward.call(addressLCLRN0w, {from: accounts[1]});
		const uint256BqNZcff = await MisesLegacyPoolHHiYkwj.stake.call(uintut9BKhK, {from: accounts[3]});
		const uint256WogmmA = await MisesLegacyPoolHHiYkwj.earned.call(addressR5uBCzx, {from: accounts[4]});
		const addressjv476Uf = await MisesLegacyPoolHHiYkwj.updateReward.call(addressIjJ0UG5, {from: accounts[4]});
	});
})