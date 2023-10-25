const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardLodrQM = await AavePoolReward.new({from: accounts[4]});
		const uintuLzqoX4 = BigInt("927")
		const uint0U1fuJ = BigInt("1926")
		const uint256ZAmgXw0 = await AavePoolRewardLodrQM.rewardPerToken.call({from: accounts[4]});
		const uint256J6q0nWX = await AavePoolRewardLodrQM.rewardPerToken.call({from: accounts[2]});
		const uint256JZ9sYiI = await AavePoolRewardLodrQM.notifyRewardAmount.call(uintuLzqoX4, {from: accounts[3]});
		await AavePoolRewardLodrQM.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardLodrQM.getReward.call({from: accounts[1]});
		const uint256M0z7uqw = await AavePoolRewardLodrQM.stake.call(uint0U1fuJ, {from: accounts[2]});

		assert.equal(uint256J6q0nWX, BigInt("0"))
		assert.equal(uint256ZAmgXw0, BigInt("0"))
		await expect(AavePoolRewardLodrQM.notifyRewardAmount.call(uintuLzqoX4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardKegjyEn = await AavePoolReward.new({from: accounts[1]});
		const addresshUJJX80 = accounts[0]
		await AavePoolRewardKegjyEn.getReward.call({from: accounts[0]});
		await AavePoolRewardKegjyEn.getReward.call({from: accounts[3]});
		const addressRnqGjl = await AavePoolRewardKegjyEn.updateReward.call(addresshUJJX80, {from: accounts[0]});

		await expect(AavePoolRewardKegjyEn.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardC1wDnkq = await AavePoolReward.new({from: accounts[4]});
		const addresszQyohlh = accounts[5]
		const uintO0a2Vk8 = BigInt("1657")
		const addressJsURkcB = accounts[2]
		await AavePoolRewardC1wDnkq.exit.call({from: accounts[5]});
		const addressOXLwCP4 = await AavePoolRewardC1wDnkq.updateReward.call(addresszQyohlh, {from: accounts[2]});
		const uint256rFMoyaW = await AavePoolRewardC1wDnkq.withdraw.call(uintO0a2Vk8, {from: accounts[4]});
		const uint256eo2OveB = await AavePoolRewardC1wDnkq.earned.call(addressJsURkcB, {from: accounts[1]});
		const uint256Xbv9wBF = await AavePoolRewardC1wDnkq.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(AavePoolRewardC1wDnkq.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardpFvUJPT = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqrhr8fw = BigInt("1435")
		const addressGdot1q6 = accounts[1]
		const uint256CZxuXLw = await AavePoolRewardpFvUJPT.withdraw.call(uintqrhr8fw, {from: accounts[4]});
		await AavePoolRewardpFvUJPT.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F5Sizn = await AavePoolRewardpFvUJPT.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256AuCou9O = await AavePoolRewardpFvUJPT.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256RNL2jL = await AavePoolRewardpFvUJPT.earned.call(addressGdot1q6, {from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardFd732VI = await AavePoolReward.new({from: accounts[1]});
		const uintdHT39rO = BigInt("854")
		const addressvgz6ylg = accounts[3]
		const uint256Wu7Z2ZF = await AavePoolRewardFd732VI.withdraw.call(uintdHT39rO, {from: accounts[4]});
		await AavePoolRewardFd732VI.exit.call({from: accounts[4]});
		const uint256Srjuis = await AavePoolRewardFd732VI.earned.call(addressvgz6ylg, {from: accounts[3]});
		const uint256o76jrUv = await AavePoolRewardFd732VI.rewardPerToken.call({from: accounts[1]});

		await expect(AavePoolRewardFd732VI.withdraw.call(uintdHT39rO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDtVJ6m = await AavePoolReward.new({from: accounts[1]});
		const uintAi1c2ok = BigInt("632")
		const uintrQIa4x = BigInt("1195")
		const uintWuBYcNS = BigInt("1487")
		const uintLsvwc9 = BigInt("1389")
		const uint256aPyPEra = await AavePoolRewardDtVJ6m.stake.call(uintAi1c2ok, {from: accounts[0]});
		const uint2560bvaBf = await AavePoolRewardDtVJ6m.withdraw.call(uintrQIa4x, {from: accounts[3]});
		await AavePoolRewardDtVJ6m.exit.call({from: accounts[4]});
		const uint256J3jprUn = await AavePoolRewardDtVJ6m.notifyRewardAmount.call(uintWuBYcNS, {from: accounts[3]});
		await AavePoolRewardDtVJ6m.exit.call({from: accounts[0]});
		const uint256tHSOWkb = await AavePoolRewardDtVJ6m.withdraw.call(uintLsvwc9, {from: accounts[4]});

		await expect(AavePoolRewardDtVJ6m.stake.call(uintAi1c2ok, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhYsvK3H = await AavePoolReward.new({from: accounts[1]});
		const addressbrP0cD8 = accounts[4]
		const addressJ4ysnS3 = accounts[2]
		const uint256YTXjE3T = await AavePoolRewardhYsvK3H.rewardPerToken.call({from: accounts[2]});
		const addresscopcz3l = await AavePoolRewardhYsvK3H.dev.call(addressbrP0cD8, {from: "0x0000000000000000000000000000000000000001"});
		const addressK4lAJ4i = await AavePoolRewardhYsvK3H.dev.call(addressJ4ysnS3, {from: accounts[5]});
		await AavePoolRewardhYsvK3H.exit.call({from: accounts[2]});
		const uint256Qx8hLkQ = await AavePoolRewardhYsvK3H.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256YTXjE3T, BigInt("0"))
		await expect(AavePoolRewardhYsvK3H.dev.call(addressbrP0cD8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward434bVV = await AavePoolReward.new({from: accounts[0]});
		const uintIxAIao0 = BigInt("665")
		const uintMF6xyMU = BigInt("1211")
		const addressW5Q482z = accounts[5]
		const addresspG7Akv = accounts[3]
		const addresszbyUQeK = accounts[2]
		const uint256A8iGVC0 = await AavePoolReward434bVV.notifyRewardAmount.call(uintIxAIao0, {from: accounts[0]});
		const uint256GK41c1Q = await AavePoolReward434bVV.stake.call(uintMF6xyMU, {from: accounts[4]});
		const uint256Ai5E32f = await AavePoolReward434bVV.earned.call(addressW5Q482z, {from: accounts[1]});
		const addressL2zaYM = await AavePoolReward434bVV.dev.call(addresspG7Akv, {from: "0x0000000000000000000000000000000000000001"});
		const addressEdEHW2G = await AavePoolReward434bVV.updateReward.call(addresszbyUQeK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolReward434bVV.stake.call(uintMF6xyMU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})