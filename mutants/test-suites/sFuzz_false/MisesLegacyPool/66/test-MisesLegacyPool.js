const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressuYMmONj = "0x0000000000000000000000000000000000000001"
		const addressmeld9x = accounts[2]
		const uintVsaXG6y = BigInt("90")
		const uintapn3y2e = BigInt("1920")
		const MisesLegacyPoolJBmFMk = await MisesLegacyPool.new(addressuYMmONj, addressmeld9x, uintVsaXG6y, uintapn3y2e, {from: accounts[3]});
		const uintFXE4hmk = BigInt("1993")
		const uintl8QSmK8 = BigInt("1393")
		const uintx2eU663 = BigInt("2041")
//		const uint256rOgho9u = await MisesLegacyPoolJBmFMk.withdraw.call(uintFXE4hmk, {from: accounts[3]});
//		const uint256FnoYaMn = await MisesLegacyPoolJBmFMk.withdraw.call(uintl8QSmK8, {from: accounts[3]});
//		const uint256H8PQ364 = await MisesLegacyPoolJBmFMk.withdraw.call(uintx2eU663, {from: accounts[1]});

		await expect(MisesLegacyPoolJBmFMk.withdraw.call(uintFXE4hmk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressD1sJRbL = accounts[1]
		const addressCtPPBoO = accounts[3]
		const uintTWCQQyR = BigInt("1298")
		const uintWCxNCjy = BigInt("990")
		const MisesLegacyPoolIyjgfA = await MisesLegacyPool.new(addressD1sJRbL, addressCtPPBoO, uintTWCQQyR, uintWCxNCjy, {from: accounts[2]});
		const uintqxzsUoo = BigInt("1282")
//		await MisesLegacyPoolIyjgfA.exit.call({from: accounts[2]});
//		const uint256BdyRO2q = await MisesLegacyPoolIyjgfA.stake.call(uintqxzsUoo, {from: accounts[3]});

		await expect(MisesLegacyPoolIyjgfA.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressHsOgwLv = accounts[0]
		const addressQbvoh4N = accounts[4]
		const uintPJgvS18 = BigInt("595")
		const uintjrr52Mq = BigInt("1491")
		const MisesLegacyPooluXWaC8H = await MisesLegacyPool.new(addressHsOgwLv, addressQbvoh4N, uintPJgvS18, uintjrr52Mq, {from: accounts[0]});
//		await MisesLegacyPooluXWaC8H.getReward.call({from: accounts[2]});
//		await MisesLegacyPooluXWaC8H.checkStart.call({from: accounts[4]});
//		const uint256kZdGNnO = await MisesLegacyPooluXWaC8H.rewardPerToken.call({from: accounts[4]});
//		const uint256i19WEfI = await MisesLegacyPooluXWaC8H.lastTimeRewardApplicable.call({from: accounts[2]});
//		await MisesLegacyPooluXWaC8H.getReward.call({from: accounts[4]});
//		const uint256QzJ5QD9 = await MisesLegacyPooluXWaC8H.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(MisesLegacyPooluXWaC8H.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresszSHytcR = accounts[0]
		const addressWHgJu6A = "0x0000000000000000000000000000000000000001"
		const uintTh7Z0XG = BigInt("1246")
		const uint0rIOzC = BigInt("1149")
		const MisesLegacyPooljXmwt2J = await MisesLegacyPool.new(addresszSHytcR, addressWHgJu6A, uintTh7Z0XG, uint0rIOzC, {from: accounts[3]});
		const uintujxwf8S = BigInt("1014")
		const addressLoFClYy = accounts[2]
		const uint256xLp93yP = await MisesLegacyPooljXmwt2J.rewardPerToken.call({from: accounts[2]});
//		const uint256VhoMtaA = await MisesLegacyPooljXmwt2J.stake.call(uintujxwf8S, {from: accounts[2]});
//		const uint256XhQUld = await MisesLegacyPooljXmwt2J.earned.call(addressLoFClYy, {from: accounts[2]});
//		const uint256cORh86F = await MisesLegacyPooljXmwt2J.rewardPerToken.call({from: accounts[4]});
//		await MisesLegacyPooljXmwt2J.checkStart.call({from: accounts[2]});

		assert.equal(uint256xLp93yP, BigInt("0"))
		await expect(MisesLegacyPooljXmwt2J.stake.call(uintujxwf8S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressxapF2L = accounts[2]
		const addressOYxLFN2 = accounts[5]
		const uinthmOq46c = BigInt("134")
		const uintXnTZzI2 = BigInt("1988")
		const MisesLegacyPoolioshrvZ = await MisesLegacyPool.new(addressxapF2L, addressOYxLFN2, uinthmOq46c, uintXnTZzI2, {from: accounts[0]});
		const uintSaZJrfo = BigInt("34")
		const addressKz8znU7 = accounts[2]
//		const uint256VOF9Yc0 = await MisesLegacyPoolioshrvZ.notifyRewardAmount.call(uintSaZJrfo, {from: accounts[3]});
//		const uint256aWq75YR = await MisesLegacyPoolioshrvZ.earned.call(addressKz8znU7, {from: accounts[2]});
//		await MisesLegacyPoolioshrvZ.getReward.call({from: accounts[3]});

		await expect(MisesLegacyPoolioshrvZ.notifyRewardAmount.call(uintSaZJrfo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressQIUIgcm = accounts[2]
		const addresswCIez5V = accounts[4]
		const uintfDWoq1Y = BigInt("1789")
		const uintytvtvJP = BigInt("205")
		const MisesLegacyPoolpqnlL2R = await MisesLegacyPool.new(addressQIUIgcm, addresswCIez5V, uintfDWoq1Y, uintytvtvJP, {from: "0x0000000000000000000000000000000000000001"});
		const addressBKEswjt = accounts[4]
		const addressyavNup = accounts[4]
		const uintxBlOzC = BigInt("458")
		const uintYmAQrwT = BigInt("174")
		await MisesLegacyPoolpqnlL2R.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressk9Ty0x0 = await MisesLegacyPoolpqnlL2R.updateReward.call(addressBKEswjt, {from: accounts[3]});
		const addressWDJHcjY = await MisesLegacyPoolpqnlL2R.updateReward.call(addressyavNup, {from: accounts[4]});
		const uint256LcAoMd = await MisesLegacyPoolpqnlL2R.notifyRewardAmount.call(uintxBlOzC, {from: accounts[0]});
		const uint256yCGEIRt = await MisesLegacyPoolpqnlL2R.notifyRewardAmount.call(uintYmAQrwT, {from: accounts[0]});
	});
})