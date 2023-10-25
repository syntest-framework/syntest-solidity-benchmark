const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaQHHiHn = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintZafQRVR = BigInt("1693")
		const boolJzpbgAb = false
		const uintJPLghKw = BigInt("493")
		const addresse33TQLr = accounts[2]
		const addressmD5Fgk4 = accounts[3]
		const uintvKoPy7x = BigInt("1983")
		const uintRmI48xh = BigInt("380")
		const uintLBn6TXd = BigInt("1699")
		const uint256tMtobm9 = await CourtFarming_HTStakeaQHHiHn.expectedRewardsToday.call(uintZafQRVR, {from: accounts[1]});
		const uint256xRdqPD6 = await CourtFarming_HTStakeaQHHiHn.unstake.call(uintJPLghKw, boolJzpbgAb, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ2AWUeN = await CourtFarming_HTStakeaQHHiHn.getBeneficiaryInfo.call(addresse33TQLr, {from: accounts[4]});
		const uint256NYFHnh7 = await CourtFarming_HTStakeaQHHiHn.balanceOf.call(addressmD5Fgk4, {from: accounts[2]});
		await CourtFarming_HTStakeaQHHiHn.changeStakeParameters.call(uintLBn6TXd, uintRmI48xh, uintvKoPy7x, {from: accounts[3]});

		await expect(CourtFarming_HTStakeaQHHiHn.unstake.call(uintJPLghKw, boolJzpbgAb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNP2Q305 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressubR593T = "0x0000000000000000000000000000000000000001"
		const uintqH9eNZ5 = BigInt("543")
		const uintl94f330 = BigInt("224")
		const uintKZ8cQce = BigInt("602")
		const addressKmd23aT = await CourtFarming_HTStakeNP2Q305.setCourtStake.call(addressubR593T, {from: accounts[3]});
		const uint256yvLL1Vm = await CourtFarming_HTStakeNP2Q305.incvRewardInfo.call({from: accounts[3]});
		const uint256shMXFZE = await CourtFarming_HTStakeNP2Q305.blockNumber.call({from: accounts[4]});
		const uint256Gv6iHJ = await CourtFarming_HTStakeNP2Q305._stakeParametrsCalculation.call(uintKZ8cQce, uintl94f330, uintqH9eNZ5, {from: accounts[2]});

		await expect(CourtFarming_HTStakeNP2Q305.setCourtStake.call(addressubR593T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLUeLeB1 = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintiAnGxUS = BigInt("1473")
		const addressfmzHwFu = accounts[2]
		const uint256wMI6qNf = await CourtFarming_HTStakeLUeLeB1.stake.call(uintiAnGxUS, {from: accounts[3]});
		const addressTP0GJol = await CourtFarming_HTStakeLUeLeB1.setCourtStake.call(addressfmzHwFu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeLUeLeB1.stake.call(uintiAnGxUS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakehtOHFIh = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressmzaRp0X = accounts[3]
		const uintxWRIztK = BigInt("1873")
		const uintek0RZG6 = BigInt("1723")
		const uinta6oy1gb = BigInt("285")
		const addressKWAMttx = accounts[0]
		const uintSYgK0Gl = BigInt("203")
		const addressTWlpsqB = accounts[1]
		const uint256gjtBsBa = await CourtFarming_HTStakehtOHFIh.balanceOf.call(addressmzaRp0X, {from: accounts[0]});
		await CourtFarming_HTStakehtOHFIh.changeStakeParameters.call(uinta6oy1gb, uintek0RZG6, uintxWRIztK, {from: accounts[4]});
		const uint256CxuyLma = await CourtFarming_HTStakehtOHFIh.rewards.call(addressKWAMttx, {from: accounts[2]});
		const uint256lnKxufD = await CourtFarming_HTStakehtOHFIh.stake.call(uintSYgK0Gl, {from: accounts[4]});
		const uint256ZDghRW = await CourtFarming_HTStakehtOHFIh.getCurrentTime.call({from: accounts[2]});
		const addressgW0DCb = await CourtFarming_HTStakehtOHFIh.setCourtStake.call(addressTWlpsqB, {from: accounts[0]});

		assert.equal(uint256gjtBsBa, BigInt("0"))
		await expect(CourtFarming_HTStakehtOHFIh.changeStakeParameters.call(uinta6oy1gb, uintek0RZG6, uintxWRIztK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqt6UUUe = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressyXcHbZ = accounts[3]
		const uintsiAQ9n8 = BigInt("766")
		const uintqLxHk0 = BigInt("891")
		const addressz1bpoW = await CourtFarming_HTStakeqt6UUUe.updateReward.call(addressyXcHbZ, {from: accounts[5]});
		const boolxAXrJA1 = await CourtFarming_HTStakeqt6UUUe.stakeIncvRewards.call(uintsiAQ9n8, {from: accounts[3]});
		const uint256fM6JgC = await CourtFarming_HTStakeqt6UUUe.blockNumber.call({from: accounts[3]});
		const boolY7akpo = await CourtFarming_HTStakeqt6UUUe.stakeIncvRewards.call(uintqLxHk0, {from: accounts[2]});

		assert.equal(boolY7akpo, false)
		assert.equal(boolxAXrJA1, false)
		assert.equal(uint256fM6JgC, BigInt("1768"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeDP5nYJe = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressY0JNp03 = accounts[3]
		const addresszveYIvY = accounts[5]
		const addressO45yfkK = accounts[1]
		const addressXdz1D2C = "0x0000000000000000000000000000000000000001"
		const uint256tohujkV = await CourtFarming_HTStakeDP5nYJe.balanceOf.call(addressY0JNp03, {from: accounts[3]});
		const uint256hEsSbl2 = await CourtFarming_HTStakeDP5nYJe.rewards.call(addresszveYIvY, {from: "0x0000000000000000000000000000000000000001"});
		const addressU1mebS1 = await CourtFarming_HTStakeDP5nYJe.updateReward.call(addressO45yfkK, {from: "0x0000000000000000000000000000000000000001"});
		const addressz992OYu = await CourtFarming_HTStakeDP5nYJe.updateReward.call(addressXdz1D2C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eJJqjuE = await CourtFarming_HTStakeDP5nYJe.incvRewardInfo.call({from: accounts[4]});

		assert.equal(uint256tohujkV, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezU4u3H9 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressvaBmHFD = "0x0000000000000000000000000000000000000001"
		const addressU9AsIk5 = accounts[1]
		const addressOFFwRHp = accounts[4]
		const addressjSnVU5 = await CourtFarming_HTStakezU4u3H9.getBeneficiaryInfo.call(addressvaBmHFD, {from: "0x0000000000000000000000000000000000000001"});
		const addressou4sm42 = await CourtFarming_HTStakezU4u3H9.setCourtStake.call(addressU9AsIk5, {from: accounts[0]});
		const uint256ozAj33 = await CourtFarming_HTStakezU4u3H9.totalStaked.call({from: accounts[3]});
		const uint256bzl3rx = await CourtFarming_HTStakezU4u3H9.rewards.call(addressOFFwRHp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakezU4u3H9.setCourtStake.call(addressU9AsIk5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTe4K93b = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressllAaWzy = accounts[0]
		const addressFSI1ydJ = accounts[0]
		const uintmIOw6k2 = BigInt("1403")
		const uint256WudjcKK = await CourtFarming_HTStakeTe4K93b.incvRewardClaim.call({from: accounts[4]});
		const uint256K0tKPwY = await CourtFarming_HTStakeTe4K93b.incvRewardClaim.call({from: accounts[1]});
		const addressiREEhrZ = await CourtFarming_HTStakeTe4K93b.setCourtStake.call(addressllAaWzy, {from: accounts[4]});
		const addresstbSuLGc = await CourtFarming_HTStakeTe4K93b.setCourtStake.call(addressFSI1ydJ, {from: accounts[4]});
		const uint256YR47T73 = await CourtFarming_HTStakeTe4K93b.stake.call(uintmIOw6k2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NK4hSnI = await CourtFarming_HTStakeTe4K93b.lastUpdateBlock.call({from: accounts[3]});

		assert.equal(uint256K0tKPwY, BigInt("0"))
		assert.equal(uint256WudjcKK, BigInt("0"))
		await expect(CourtFarming_HTStakeTe4K93b.setCourtStake.call(addressllAaWzy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqt6UUUe = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressIp0e86D = accounts[3]
		const uintcVnZwXB = BigInt("1741")
		const uintp4b195M = BigInt("86")
		const uintavBCaM = BigInt("202")
		const uintMP274RB = BigInt("1803")
		const uintqmsU2or = BigInt("286")
		const uintTg6XVFP = BigInt("1028")
		const uintJcEBSR = BigInt("766")
		const uintPurSTBJ = BigInt("265")
		const uinttWYtvdb = BigInt("891")
		const addressz1bpoW = await CourtFarming_HTStakeqt6UUUe.updateReward.call(addressIp0e86D, {from: accounts[5]});
		const uint256T3RNJV = await CourtFarming_HTStakeqt6UUUe._stakeParametrsCalculation.call(uintavBCaM, uintp4b195M, uintcVnZwXB, {from: accounts[1]});
		await CourtFarming_HTStakeqt6UUUe.changeStakeParameters.call(uintTg6XVFP, uintqmsU2or, uintMP274RB, {from: accounts[2]});
		const boolxAXrJA1 = await CourtFarming_HTStakeqt6UUUe.stakeIncvRewards.call(uintJcEBSR, {from: accounts[3]});
		const uint256dF5oAVt = await CourtFarming_HTStakeqt6UUUe.expectedRewardsToday.call(uintPurSTBJ, {from: accounts[2]});
		const uint256fM6JgC = await CourtFarming_HTStakeqt6UUUe.blockNumber.call({from: accounts[3]});
		const boolY7akpo = await CourtFarming_HTStakeqt6UUUe.stakeIncvRewards.call(uinttWYtvdb, {from: accounts[2]});

		await expect(CourtFarming_HTStakeqt6UUUe._stakeParametrsCalculation.call(uintavBCaM, uintp4b195M, uintcVnZwXB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezU4u3H9 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressbXL3WZ = "0x0000000000000000000000000000000000000001"
		const addressZWsndS5 = accounts[4]
		const addressjSnVU5 = await CourtFarming_HTStakezU4u3H9.getBeneficiaryInfo.call(addressbXL3WZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ozAj33 = await CourtFarming_HTStakezU4u3H9.totalStaked.call({from: accounts[3]});
		const uint256bzl3rx = await CourtFarming_HTStakezU4u3H9.rewards.call(addressZWsndS5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ozAj33, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYIhtm1b = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTw5gXl0 = BigInt("56")
		const uintkwoeKeR = BigInt("15")
		const uintxPUAErS = BigInt("534")
		const uintDr6Mdt = BigInt("2037")
		const uintnnxFR6j = BigInt("832")
		const addressX14li5i = accounts[5]
		const boolMXQ5QWD = await CourtFarming_HTStakeYIhtm1b.stakeIncvRewards.call(uintTw5gXl0, {from: accounts[2]});
		const uint256GZp8M6L = await CourtFarming_HTStakeYIhtm1b._stakeParametrsCalculation.call(uintDr6Mdt, uintxPUAErS, uintkwoeKeR, {from: accounts[1]});
		const uint256YPktrWw = await CourtFarming_HTStakeYIhtm1b.expectedRewardsToday.call(uintnnxFR6j, {from: "0x0000000000000000000000000000000000000001"});
		const addressi87r7Ea = await CourtFarming_HTStakeYIhtm1b.updateReward.call(addressX14li5i, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Uv6fvEQ = await CourtFarming_HTStakeYIhtm1b.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezU4u3H9 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressM4lPXJH = "0x0000000000000000000000000000000000000001"
		const uintBnOwgqs = BigInt("437")
		const addressjFjqkCp = accounts[1]
		const addresskNxEjOL = accounts[4]
		const addressjSnVU5 = await CourtFarming_HTStakezU4u3H9.getBeneficiaryInfo.call(addressM4lPXJH, {from: "0x0000000000000000000000000000000000000001"});
		const boolIg91IDq = await CourtFarming_HTStakezU4u3H9.stakeIncvRewards.call(uintBnOwgqs, {from: accounts[1]});
		const uint256jZJtblf = await CourtFarming_HTStakezU4u3H9.lastUpdateBlock.call({from: accounts[4]});
		const addressou4sm42 = await CourtFarming_HTStakezU4u3H9.setCourtStake.call(addressjFjqkCp, {from: accounts[0]});
		const uint256ozAj33 = await CourtFarming_HTStakezU4u3H9.totalStaked.call({from: accounts[3]});
		const uint256bzl3rx = await CourtFarming_HTStakezU4u3H9.rewards.call(addresskNxEjOL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIg91IDq, false)
		assert.equal(uint256jZJtblf, BigInt("1768"))
		await expect(CourtFarming_HTStakezU4u3H9.setCourtStake.call(addressjFjqkCp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezU4u3H9 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressAathw7E = accounts[3]
		const addressSmddyVA = "0x0000000000000000000000000000000000000000"
		const addressSCY04b9 = accounts[0]
		const addressmCTJeqr = await CourtFarming_HTStakezU4u3H9.setCourtStake.call(addressAathw7E, {from: accounts[1]});
		const addressjSnVU5 = await CourtFarming_HTStakezU4u3H9.getBeneficiaryInfo.call(addressSmddyVA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ad4uKVm = await CourtFarming_HTStakezU4u3H9.rewards.call(addressSCY04b9, {from: accounts[1]});
		const uint256oq1IfKP = await CourtFarming_HTStakezU4u3H9.getCurrentTime.call({from: accounts[0]});

		await expect(CourtFarming_HTStakezU4u3H9.setCourtStake.call(addressAathw7E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRpuf2KN = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintR6xoPjE = BigInt("0")
		const uintu8gO6OQ = BigInt("716")
		const uintmQdQQq = BigInt("135")
		const uint256hm6fdaw = await CourtFarming_HTStakeRpuf2KN.incvRewardClaim.call({from: accounts[2]});
		const uint256exxOM0D = await CourtFarming_HTStakeRpuf2KN.stake.call(uintR6xoPjE, {from: accounts[2]});
		const uint256DyB8iEb = await CourtFarming_HTStakeRpuf2KN.incvRewardClaim.call({from: accounts[3]});
		const uint256ZwPULcp = await CourtFarming_HTStakeRpuf2KN.incvRewardClaim.call({from: accounts[2]});
		const uint256zKZtdxt = await CourtFarming_HTStakeRpuf2KN.expectedRewardsToday.call(uintu8gO6OQ, {from: accounts[2]});
		const uint256zpmV28g = await CourtFarming_HTStakeRpuf2KN.expectedRewardsToday.call(uintmQdQQq, {from: accounts[0]});
		const uint256EviWiYu = await CourtFarming_HTStakeRpuf2KN.lastUpdateBlock.call({from: accounts[0]});
		const uint256TxunjRR = await CourtFarming_HTStakeRpuf2KN.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256DyB8iEb, BigInt("0"))
		assert.equal(uint256EviWiYu, BigInt("1768"))
		assert.equal(uint256TxunjRR, BigInt("0"))
		assert.equal(uint256ZwPULcp, BigInt("0"))
		assert.equal(uint256hm6fdaw, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRpuf2KN = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintFTktmUC = BigInt("0")
		const uintTQ0gCCV = BigInt("1635")
		const addressE3VokZz = accounts[1]
		const boolsCNsaLO = await CourtFarming_HTStakeRpuf2KN.stakeIncvRewards.call(uintFTktmUC, {from: accounts[3]});
		const boolA156Bp9 = await CourtFarming_HTStakeRpuf2KN.stakeIncvRewards.call(uintTQ0gCCV, {from: accounts[1]});
		const uint256TYPeh7b = await CourtFarming_HTStakeRpuf2KN.rewards.call(addressE3VokZz, {from: accounts[1]});

		assert.equal(boolA156Bp9, false)
		assert.equal(boolsCNsaLO, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaQHHiHn = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolKD1YOLk = false
		const uintzBsEDF1 = BigInt("0")
		const addresscbKWHQZ = accounts[0]
		const uint256uUGMmHV = await CourtFarming_HTStakeaQHHiHn.unstake.call(uintzBsEDF1, boolKD1YOLk, {from: accounts[2]});
		const addresss0OTzO = await CourtFarming_HTStakeaQHHiHn.getBeneficiaryInfo.call(addresscbKWHQZ, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRpuf2KN = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintMUacRdZ = BigInt("0")
		const uint256Na7jTXA = await CourtFarming_HTStakeRpuf2KN.expectedRewardsToday.call(uintMUacRdZ, {from: accounts[4]});
		const uint256npxXC1I = await CourtFarming_HTStakeRpuf2KN.incvRewardClaim.call({from: accounts[5]});

		await expect(CourtFarming_HTStakeRpuf2KN.expectedRewardsToday.call(uintMUacRdZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})