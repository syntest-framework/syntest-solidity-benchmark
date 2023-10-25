const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsaDVU4ib = await DMONDETHRewards.new({from: accounts[4]});
		const addresskkpDL8w = accounts[3]
		const addressZnkiECR = accounts[1]
		const uintlWbvG2p = BigInt("1025")
		const addressrcBtxzh = accounts[2]
		const addressGrRvlP = await DMONDETHRewardsaDVU4ib.setStakeAddress.call(addresskkpDL8w, {from: accounts[3]});
		const addressjV1XOdm = await DMONDETHRewardsaDVU4ib.transferOwnership.call(addressZnkiECR, {from: accounts[5]});
		const uint256q8frUEm = await DMONDETHRewardsaDVU4ib.stake.call(uintlWbvG2p, {from: accounts[2]});
		const addressR1hm7a = await DMONDETHRewardsaDVU4ib.setStakeAddress.call(addressrcBtxzh, {from: accounts[4]});

		await expect(DMONDETHRewardsaDVU4ib.setStakeAddress.call(addresskkpDL8w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsA60dFT2 = await DMONDETHRewards.new({from: accounts[3]});
		const addressTsddtFP = accounts[4]
		await DMONDETHRewardsA60dFT2.checkStart.call({from: accounts[1]});
		const uint256xtlEiqQ = await DMONDETHRewardsA60dFT2.rewardPerToken.call({from: accounts[3]});
		const uint256pmogEXH = await DMONDETHRewardsA60dFT2.earned.call(addressTsddtFP, {from: accounts[3]});

		await expect(DMONDETHRewardsA60dFT2.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYvUdI5w = await DMONDETHRewards.new({from: accounts[1]});
		await DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[1]});
		await DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsp85wMIj = await DMONDETHRewards.new({from: accounts[0]});
		const uintWkPu5I = BigInt("600")
		const addressvObJazX = await DMONDETHRewardsp85wMIj.owner.call({from: accounts[3]});
		await DMONDETHRewardsp85wMIj.getReward.call({from: accounts[1]});
		const uint256gYgOMgV = await DMONDETHRewardsp85wMIj.withdraw.call(uintWkPu5I, {from: accounts[2]});

		assert.equal(addressvObJazX, 0x960ffd5E2a7f05a412B7C5F8de5bDb4e29fe13Bc)
		await expect(DMONDETHRewardsp85wMIj.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmxujYC6 = await DMONDETHRewards.new({from: accounts[3]});
		const uint256CXMjMes = await DMONDETHRewardsmxujYC6.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256R1XMRF9 = await DMONDETHRewardsmxujYC6.totalSupply.call({from: accounts[4]});
		await DMONDETHRewardsmxujYC6.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256CXMjMes, BigInt("0"))
		assert.equal(uint256R1XMRF9, BigInt("0"))
		await expect(DMONDETHRewardsmxujYC6.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsKsXq3rn = await DMONDETHRewards.new({from: accounts[1]});
		const uintrueM9Ad = BigInt("1414")
		const addresst2CmvYw = accounts[2]
		const uint03N1Qc = BigInt("1079")
		const uint256ekDz4zj = await DMONDETHRewardsKsXq3rn.stake.call(uintrueM9Ad, {from: accounts[1]});
		const addressH2mKYk6 = await DMONDETHRewardsKsXq3rn.updateReward.call(addresst2CmvYw, {from: accounts[4]});
		await DMONDETHRewardsKsXq3rn.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kac6p1S = await DMONDETHRewardsKsXq3rn.withdraw.call(uint03N1Qc, {from: accounts[2]});
		const uint256DOnXEqI = await DMONDETHRewardsKsXq3rn.rewardPerToken.call({from: accounts[0]});
		await DMONDETHRewardsKsXq3rn.exit.call({from: accounts[5]});

		await expect(DMONDETHRewardsKsXq3rn.stake.call(uintrueM9Ad, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsUVa0f2A = await DMONDETHRewards.new({from: accounts[4]});
		const uintK07uFSm = BigInt("495")
		await DMONDETHRewardsUVa0f2A.exit.call({from: accounts[2]});
		const addressOqUqoQ = await DMONDETHRewardsUVa0f2A.owner.call({from: accounts[3]});
		const uint256K4kSii0 = await DMONDETHRewardsUVa0f2A.setStartTime.call(uintK07uFSm, {from: accounts[1]});
		const uint256fBbLMt = await DMONDETHRewardsUVa0f2A.remainingReward.call({from: accounts[1]});
		await DMONDETHRewardsUVa0f2A.renounceOwnership.call({from: accounts[0]});

		await expect(DMONDETHRewardsUVa0f2A.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYvUdI5w = await DMONDETHRewards.new({from: accounts[1]});
		const uintZ7o2BHn = BigInt("1578")
		const uint256bgr26r = await DMONDETHRewardsYvUdI5w.notifyRewardAmount.call(uintZ7o2BHn, {from: accounts[4]});
		await DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[1]});

		await expect(DMONDETHRewardsYvUdI5w.notifyRewardAmount.call(uintZ7o2BHn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsp85wMIj = await DMONDETHRewards.new({from: accounts[0]});
		const addressaUYkyQa = accounts[5]
		const uintvIx19J2 = BigInt("796")
		const uintCKwDHtH = BigInt("699")
		const addressMCp5SuT = await DMONDETHRewardsp85wMIj.setRewardDistribution.call(addressaUYkyQa, {from: accounts[0]});
		await DMONDETHRewardsp85wMIj.getReward.call({from: accounts[1]});
		const uint256gYgOMgV = await DMONDETHRewardsp85wMIj.withdraw.call(uintvIx19J2, {from: accounts[2]});
		const uint256YsFMXkC = await DMONDETHRewardsp85wMIj.withdraw.call(uintCKwDHtH, {from: accounts[1]});
		const uint256h7M6e2 = await DMONDETHRewardsp85wMIj.rewardPerToken.call({from: accounts[4]});

		await expect(DMONDETHRewardsp85wMIj.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards5SEX5D = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSqyzrE8 = BigInt("187")
		const uint256T9dSJU = await DMONDETHRewards5SEX5D.withdraw.call(uintSqyzrE8, {from: accounts[5]});
		await DMONDETHRewards5SEX5D.onlyOwner.call({from: accounts[0]});
		const uint256CfxTUs6 = await DMONDETHRewards5SEX5D.totalSupply.call({from: accounts[5]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWJ9waSh = await DMONDETHRewards.new({from: accounts[3]});
		const uintg1r5Dh = BigInt("474")
		const uint256DobRCeC = await DMONDETHRewardsWJ9waSh.rewardPerToken.call({from: accounts[4]});
		const uint256HVc7K3G = await DMONDETHRewardsWJ9waSh.remainingReward.call({from: accounts[1]});
		const uint256uHicM8h = await DMONDETHRewardsWJ9waSh.notifyRewardAmount.call(uintg1r5Dh, {from: accounts[0]});

		assert.equal(uint256DobRCeC, BigInt("0"))
		await expect(DMONDETHRewardsWJ9waSh.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYvUdI5w = await DMONDETHRewards.new({from: accounts[1]});
		const addressOf9r2P = accounts[4]
		const uintXHerRq = BigInt("1807")
		const addressFWDFkRQ = await DMONDETHRewardsYvUdI5w.setStakeAddress.call(addressOf9r2P, {from: accounts[1]});
		const uint256BW2bnsH = await DMONDETHRewardsYvUdI5w.stake.call(uintXHerRq, {from: accounts[0]});

		await expect(DMONDETHRewardsYvUdI5w.stake.call(uintXHerRq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYvUdI5w = await DMONDETHRewards.new({from: accounts[1]});
		const addressaCgRCmi = accounts[1]
		const addressWhze3lM = await DMONDETHRewardsYvUdI5w.transferOwnership.call(addressaCgRCmi, {from: accounts[1]});
		await DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYvUdI5w = await DMONDETHRewards.new({from: accounts[1]});
		const uintUYeKNcz = BigInt("440")
		const uintFGPBl89 = BigInt("1772")
		const uint256qhQ7cmh = await DMONDETHRewardsYvUdI5w.notifyRewardAmount.call(uintUYeKNcz, {from: accounts[1]});
		const uint256BW2bnsH = await DMONDETHRewardsYvUdI5w.stake.call(uintFGPBl89, {from: accounts[0]});

		await expect(DMONDETHRewardsYvUdI5w.stake.call(uintFGPBl89, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYvUdI5w = await DMONDETHRewards.new({from: accounts[1]});
		const uintdYlorEt = BigInt("71")
		const uintETFA9LX = BigInt("1495")
		const uint256d1RNUVi = await DMONDETHRewardsYvUdI5w.setStartTime.call(uintdYlorEt, {from: accounts[1]});
		const uint256Zbu5vQW = await DMONDETHRewardsYvUdI5w.withdraw.call(uintETFA9LX, {from: accounts[1]});
		await DMONDETHRewardsYvUdI5w.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsYvUdI5w.withdraw.call(uintETFA9LX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})