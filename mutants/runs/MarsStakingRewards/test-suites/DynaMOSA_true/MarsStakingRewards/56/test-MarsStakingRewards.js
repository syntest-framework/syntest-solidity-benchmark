const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressDcvUb1G = "0x0000000000000000000000000000000000000001"
		const addressEuJOpvo = accounts[0]
		const addressV425Zi = accounts[3]
		const MarsStakingRewardsogoiB1d = await MarsStakingRewards.new(addressDcvUb1G, addressEuJOpvo, addressV425Zi, {from: accounts[4]});
		const byteQY47sHi = "0x1510080a0b1c0a141306191b0b161707100e111616120f020e14070b0418151a"
		const byteXM8twj = "0x0c061a1b1c1a1e0d0e1914000e181415111d0d02170d18181c1b10031a181a16"
		const uintAyPRtfK = BigInt("160")
		const uintTT74f3d = BigInt("984")
		const uintdNOZmTd = BigInt("2004")
		const boolf7o9LI5 = await MarsStakingRewardsogoiB1d.isOwner.call({from: accounts[3]});
		const uint256i3TJYco = await MarsStakingRewardsogoiB1d.stakeWithPermit.call(uintdNOZmTd, uintTT74f3d, uintAyPRtfK, byteXM8twj, byteQY47sHi, {from: accounts[5]});
		await MarsStakingRewardsogoiB1d.onlyOwner.call({from: accounts[0]});

		assert.equal(boolf7o9LI5, false)
		await expect(MarsStakingRewardsogoiB1d.stakeWithPermit.call(uintdNOZmTd, uintTT74f3d, uintAyPRtfK, byteXM8twj, byteQY47sHi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjJ8qNmV = accounts[4]
		const addressLjC5RcJ = accounts[2]
		const addressbbzgJv3 = accounts[3]
		const MarsStakingRewardsz3ROM5K = await MarsStakingRewards.new(addressjJ8qNmV, addressLjC5RcJ, addressbbzgJv3, {from: accounts[3]});
		const address5dgFYW = accounts[1]
		await MarsStakingRewardsz3ROM5K.onlyOwner.call({from: accounts[5]});
		const uint256JQ5swz6 = await MarsStakingRewardsz3ROM5K.rewardPerToken.call({from: accounts[1]});
		const addressFhrYGoi = await MarsStakingRewardsz3ROM5K.updateReward.call(address5dgFYW, {from: accounts[0]});
		const uint256QzoEq5K = await MarsStakingRewardsz3ROM5K.getRewardForDuration.call({from: accounts[3]});
		const boolIqSQ6Ql = await MarsStakingRewardsz3ROM5K.isOwner.call({from: accounts[1]});

		await expect(MarsStakingRewardsz3ROM5K.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJTkGUJ = accounts[4]
		const addressN5P7Rhh = accounts[3]
		const addresse7frtSe = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsF406saQ = await MarsStakingRewards.new(addressJTkGUJ, addressN5P7Rhh, addresse7frtSe, {from: accounts[3]});
		const addressmGdY9hw = accounts[4]
		const uintFLNqqwW = BigInt("1335")
		const addressoWjZs0a = accounts[5]
		const uint256eD74Ios = await MarsStakingRewardsF406saQ.earned.call(addressmGdY9hw, {from: accounts[2]});
		const uint256B75GaHU = await MarsStakingRewardsF406saQ.stake.call(uintFLNqqwW, {from: accounts[2]});
		const booluTySHW = await MarsStakingRewardsF406saQ.isOwner.call({from: accounts[4]});
		await MarsStakingRewardsF406saQ.exit.call({from: accounts[0]});
		const addressM5yQBe = await MarsStakingRewardsF406saQ.updateReward.call(addressoWjZs0a, {from: accounts[4]});
		const uint256Xvgl0GQ = await MarsStakingRewardsF406saQ.getRewardForDuration.call({from: accounts[4]});

		assert.equal(uint256eD74Ios, BigInt("0"))
		await expect(MarsStakingRewardsF406saQ.stake.call(uintFLNqqwW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZkjYXwa = "0x0000000000000000000000000000000000000001"
		const address63Z7UQ = accounts[1]
		const addressLOvOkIe = accounts[0]
		const MarsStakingRewardsWSAT9pJ = await MarsStakingRewards.new(addressZkjYXwa, address63Z7UQ, addressLOvOkIe, {from: accounts[1]});
		const boolk20fT3U = await MarsStakingRewardsWSAT9pJ.isOwner.call({from: accounts[1]});
		const uint256HLCe2w1 = await MarsStakingRewardsWSAT9pJ.rewardPerToken.call({from: accounts[5]});
		await MarsStakingRewardsWSAT9pJ.renounceOwnership.call({from: accounts[0]});
		await MarsStakingRewardsWSAT9pJ.exit.call({from: accounts[3]});

		assert.equal(boolk20fT3U, true)
		assert.equal(uint256HLCe2w1, BigInt("0"))
		await expect(MarsStakingRewardsWSAT9pJ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressV32Qpz0 = accounts[4]
		const addresscqpGda = accounts[1]
		const addressDjj1Gfp = accounts[1]
		const MarsStakingRewardsOWn1wkt = await MarsStakingRewards.new(addressV32Qpz0, addresscqpGda, addressDjj1Gfp, {from: accounts[1]});
		const addressmdK9EW = accounts[3]
		const uint256KJLQ2x3 = await MarsStakingRewardsOWn1wkt.getRewardForDuration.call({from: accounts[2]});
		await MarsStakingRewardsOWn1wkt.renounceOwnership.call({from: accounts[3]});
		const addressTvcTffh = await MarsStakingRewardsOWn1wkt.transferOwnership.call(addressmdK9EW, {from: accounts[3]});

		assert.equal(uint256KJLQ2x3, BigInt("0"))
		await expect(MarsStakingRewardsOWn1wkt.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressveJ9BT1 = accounts[1]
		const addressZCQQdcp = "0x0000000000000000000000000000000000000001"
		const address0kceoe = accounts[4]
		const MarsStakingRewardshb8QCHo = await MarsStakingRewards.new(addressveJ9BT1, addressZCQQdcp, address0kceoe, {from: accounts[3]});
		const addressRd2x5ya = accounts[5]
		const uintm5AlscG = BigInt("1245")
		const uintEfrQUel = BigInt("1246")
		const addressmISSili = accounts[4]
		const uint256BvxMeMg = await MarsStakingRewardshb8QCHo.balanceOf.call(addressRd2x5ya, {from: accounts[2]});
		const uint256b5cW2ld = await MarsStakingRewardshb8QCHo.withdraw.call(uintm5AlscG, {from: "0x0000000000000000000000000000000000000001"});
		const boolaxWhO8O = await MarsStakingRewardshb8QCHo.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressxoy2q5t = await MarsStakingRewardshb8QCHo.inCaseTokensGetStuck.call(addressmISSili, uintEfrQUel, {from: accounts[4]});

		assert.equal(uint256BvxMeMg, BigInt("0"))
		await expect(MarsStakingRewardshb8QCHo.withdraw.call(uintm5AlscG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqnVKp8m = accounts[4]
		const address8BCH2G = accounts[3]
		const addressRxB0Lts = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsF406saQ = await MarsStakingRewards.new(addressqnVKp8m, address8BCH2G, addressRxB0Lts, {from: accounts[3]});
		const addressDcJSmIo = accounts[4]
		const uintbsOcVw = BigInt("1335")
		const addresslikBysK = accounts[1]
		const addressG1twGm1 = accounts[1]
		await MarsStakingRewardsF406saQ.exit.call({from: accounts[5]});
		const uint256eD74Ios = await MarsStakingRewardsF406saQ.earned.call(addressDcJSmIo, {from: accounts[2]});
		const uint256B75GaHU = await MarsStakingRewardsF406saQ.stake.call(uintbsOcVw, {from: accounts[2]});
		await MarsStakingRewardsF406saQ.exit.call({from: accounts[0]});
		const addressEqDdcL7 = await MarsStakingRewardsF406saQ.setRewardsDistribution.call(addresslikBysK, {from: accounts[2]});
		const addressM5yQBe = await MarsStakingRewardsF406saQ.updateReward.call(addressG1twGm1, {from: accounts[4]});
		const uint256Xvgl0GQ = await MarsStakingRewardsF406saQ.getRewardForDuration.call({from: accounts[4]});

		await expect(MarsStakingRewardsF406saQ.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEV0nMjs = accounts[5]
		const addresswXPd3H = accounts[0]
		const addressko7ChiK = accounts[1]
		const MarsStakingRewardsKaCqR5k = await MarsStakingRewards.new(addressEV0nMjs, addresswXPd3H, addressko7ChiK, {from: accounts[2]});
		const uintSaM4p7L = BigInt("419")
		const uintnCrQTSC = BigInt("1455")
		const uintdst0iP = BigInt("1186")
		const addresssnGMJn1 = accounts[1]
		const uint256M4YK5mI = await MarsStakingRewardsKaCqR5k.notifyRewardAmount.call(uintnCrQTSC, uintSaM4p7L, {from: accounts[1]});
		const addressMCdUpXs = await MarsStakingRewardsKaCqR5k.inCaseTokensGetStuck.call(addresssnGMJn1, uintdst0iP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsKaCqR5k.notifyRewardAmount.call(uintnCrQTSC, uintSaM4p7L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLso5qJ = accounts[0]
		const addresskHugszP = accounts[4]
		const addressK0iiGzK = accounts[3]
		const MarsStakingRewardsgcu89N = await MarsStakingRewards.new(addressLso5qJ, addresskHugszP, addressK0iiGzK, {from: accounts[0]});
		const boolGjUJzXa = await MarsStakingRewardsgcu89N.isOwner.call({from: accounts[0]});
		const addresszDI6Ww9 = await MarsStakingRewardsgcu89N.owner.call({from: accounts[3]});
		await MarsStakingRewardsgcu89N.nonReentrant.call({from: accounts[0]});

		assert.equal(addresszDI6Ww9, 0xf4DED6a2067Da651c865C2e5dE2Db88f3b286659)
		assert.equal(boolGjUJzXa, true)
		await expect(MarsStakingRewardsgcu89N.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressNJiZzlg = accounts[0]
		const addresszylnYoL = accounts[4]
		const addressKFs4sHW = accounts[3]
		const MarsStakingRewardsgcu89N = await MarsStakingRewards.new(addressNJiZzlg, addresszylnYoL, addressKFs4sHW, {from: accounts[0]});
		const addressIEXvnGD = accounts[0]
		const uint256xaTgNiz = await MarsStakingRewardsgcu89N.totalSupply.call({from: accounts[2]});
		const addressuiNhNtM = await MarsStakingRewardsgcu89N.updateReward.call(addressIEXvnGD, {from: accounts[4]});
		await MarsStakingRewardsgcu89N.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256xaTgNiz, BigInt("0"))
		await expect(MarsStakingRewardsgcu89N.updateReward.call(addressIEXvnGD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQKllSNZ = accounts[0]
		const addressdCnbeKx = accounts[0]
		const addressGm7KTE = accounts[4]
		const MarsStakingRewardsBBfu9H5 = await MarsStakingRewards.new(addressQKllSNZ, addressdCnbeKx, addressGm7KTE, {from: "0x0000000000000000000000000000000000000001"});
		const uintCWA0VZ2 = BigInt("1905")
		const addressC2V2lT9 = accounts[5]
		const byteYgia6V = "0x181d0414120d1a1e1f1502090c050f1d1603201d0c041802010a0e1d0402160d"
		const byteOby3jsK = "0x03011c10130909110d02081d1105120d0f100b100715081611150004141f0c0d"
		const uintugLFjo3 = BigInt("163")
		const uintt2LT6Gx = BigInt("1002")
		const uintBD3SfXq = BigInt("1330")
		await MarsStakingRewardsBBfu9H5.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGQ6mgI4 = await MarsStakingRewardsBBfu9H5.isOwner.call({from: accounts[2]});
		const addressNCZnYyz = await MarsStakingRewardsBBfu9H5.inCaseTokensGetStuck.call(addressC2V2lT9, uintCWA0VZ2, {from: accounts[2]});
		const uint256Q7pRTX9 = await MarsStakingRewardsBBfu9H5.stakeWithPermit.call(uintBD3SfXq, uintt2LT6Gx, uintugLFjo3, byteOby3jsK, byteYgia6V, {from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressYf52rUC = accounts[0]
		const addressAGIwkhi = accounts[4]
		const addressF6zRvQ0 = accounts[3]
		const MarsStakingRewardsgcu89N = await MarsStakingRewards.new(addressYf52rUC, addressAGIwkhi, addressF6zRvQ0, {from: accounts[0]});
		const addressgWvosMo = accounts[4]
		const addressZC0JnOb = await MarsStakingRewardsgcu89N.setRewardsDistribution.call(addressgWvosMo, {from: accounts[0]});
		const boole0APrzL = await MarsStakingRewardsgcu89N.isOwner.call({from: accounts[4]});
		await MarsStakingRewardsgcu89N.nonReentrant.call({from: accounts[0]});

		assert.equal(boole0APrzL, false)
		await expect(MarsStakingRewardsgcu89N.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoOiKkzQ = accounts[4]
		const addressdcCgaLt = accounts[3]
		const addressJTkg0T8 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsF406saQ = await MarsStakingRewards.new(addressoOiKkzQ, addressdcCgaLt, addressJTkg0T8, {from: accounts[3]});
		const uintLjnuktr = BigInt("692")
		const uintLv1e47 = BigInt("366")
		const addressb4WRy8D = accounts[4]
		const uintx8uT6rK = BigInt("1335")
		const uint256BCTwwEL = await MarsStakingRewardsF406saQ.notifyRewardAmount.call(uintLv1e47, uintLjnuktr, {from: accounts[4]});
		const uint256eD74Ios = await MarsStakingRewardsF406saQ.earned.call(addressb4WRy8D, {from: accounts[2]});
		const uint256B75GaHU = await MarsStakingRewardsF406saQ.stake.call(uintx8uT6rK, {from: accounts[2]});
		await MarsStakingRewardsF406saQ.exit.call({from: accounts[0]});
		const uint256Xvgl0GQ = await MarsStakingRewardsF406saQ.getRewardForDuration.call({from: accounts[4]});

		await expect(MarsStakingRewardsF406saQ.notifyRewardAmount.call(uintLv1e47, uintLjnuktr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresssqfg3yH = "0x0000000000000000000000000000000000000001"
		const addressAsgMxFp = accounts[1]
		const addressTxwdLXG = accounts[0]
		const MarsStakingRewardsWSAT9pJ = await MarsStakingRewards.new(addresssqfg3yH, addressAsgMxFp, addressTxwdLXG, {from: accounts[1]});
		const addressyZM5bzm = accounts[4]
		const uint256HLCe2w1 = await MarsStakingRewardsWSAT9pJ.rewardPerToken.call({from: accounts[5]});
		const addressFAUvTfQ = await MarsStakingRewardsWSAT9pJ.transferOwnership.call(addressyZM5bzm, {from: accounts[1]});
		const uint256yezWLF5 = await MarsStakingRewardsWSAT9pJ.getRewardForDuration.call({from: accounts[1]});

		assert.equal(uint256HLCe2w1, BigInt("0"))
		assert.equal(uint256yezWLF5, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressjvV9WAL = "0x0000000000000000000000000000000000000001"
		const addressrq2ZOII = accounts[1]
		const addressTtsIUje = accounts[0]
		const MarsStakingRewardsWSAT9pJ = await MarsStakingRewards.new(addressjvV9WAL, addressrq2ZOII, addressTtsIUje, {from: accounts[1]});
		await MarsStakingRewardsWSAT9pJ.renounceOwnership.call({from: accounts[1]});
		const uint256ywwuADH = await MarsStakingRewardsWSAT9pJ.rewardPerToken.call({from: accounts[2]});
		const uint256HLCe2w1 = await MarsStakingRewardsWSAT9pJ.rewardPerToken.call({from: accounts[5]});

		await expect(MarsStakingRewardsWSAT9pJ.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressenbSy84 = accounts[4]
		const addressWLHO2NB = accounts[1]
		const addresse6hdygy = accounts[1]
		const MarsStakingRewardsOWn1wkt = await MarsStakingRewards.new(addressenbSy84, addressWLHO2NB, addresse6hdygy, {from: accounts[1]});
		const uintaby6EEf = BigInt("1829")
		const addressXlQZLs = accounts[0]
		const uintURxgvn0 = BigInt("466")
		const uintLiFwDu8 = BigInt("716")
		const uint256EzW2nDu = await MarsStakingRewardsOWn1wkt.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256KJLQ2x3 = await MarsStakingRewardsOWn1wkt.getRewardForDuration.call({from: accounts[2]});
		const addressnqtbwTF = await MarsStakingRewardsOWn1wkt.inCaseTokensGetStuck.call(addressXlQZLs, uintaby6EEf, {from: accounts[1]});
		const uint256dooH5uY = await MarsStakingRewardsOWn1wkt.notifyRewardAmount.call(uintLiFwDu8, uintURxgvn0, {from: accounts[4]});
		await MarsStakingRewardsOWn1wkt.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256EzW2nDu, BigInt("0"))
		assert.equal(uint256KJLQ2x3, BigInt("0"))
		await expect(MarsStakingRewardsOWn1wkt.inCaseTokensGetStuck.call(addressXlQZLs, uintaby6EEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressGWy6bui = accounts[4]
		const addressgY7MuQf = accounts[1]
		const addressqXRXlIS = accounts[1]
		const MarsStakingRewardsOWn1wkt = await MarsStakingRewards.new(addressGWy6bui, addressgY7MuQf, addressqXRXlIS, {from: accounts[1]});
		const uintdKP8Q0u = BigInt("1829")
		const addresszFDAKDi = accounts[1]
		const uintCVScF1P = BigInt("466")
		const uintkR2Wq4Y = BigInt("716")
		const uint256EzW2nDu = await MarsStakingRewardsOWn1wkt.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256KJLQ2x3 = await MarsStakingRewardsOWn1wkt.getRewardForDuration.call({from: accounts[2]});
		const addressnqtbwTF = await MarsStakingRewardsOWn1wkt.inCaseTokensGetStuck.call(addresszFDAKDi, uintdKP8Q0u, {from: accounts[1]});
		const uint256dooH5uY = await MarsStakingRewardsOWn1wkt.notifyRewardAmount.call(uintkR2Wq4Y, uintCVScF1P, {from: accounts[4]});
		await MarsStakingRewardsOWn1wkt.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256EzW2nDu, BigInt("0"))
		assert.equal(uint256KJLQ2x3, BigInt("0"))
		await expect(MarsStakingRewardsOWn1wkt.inCaseTokensGetStuck.call(addresszFDAKDi, uintdKP8Q0u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})