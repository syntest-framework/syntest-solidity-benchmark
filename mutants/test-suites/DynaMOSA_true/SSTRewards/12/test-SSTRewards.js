const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardswGcZ3R = await SSTRewards.new({from: accounts[4]});
		const uintXg97MRs = BigInt("674")
		const addressdJHXJKQ = accounts[4]
		const addressUyoNhP1 = accounts[4]
		const addresspcfAls = accounts[2]
		const uintofttYVe = BigInt("2014")
		const addressc1q0fh = "0x0000000000000000000000000000000000000001"
//		const uint256FlpeT6K = await SSTRewardswGcZ3R.stake.call(uintXg97MRs, {from: accounts[2]});
//		const uint256lh6e2KN = await SSTRewardswGcZ3R.earned.call(addressdJHXJKQ, {from: accounts[2]});
//		const uint256ZaSnuwP = await SSTRewardswGcZ3R.balanceOf.call(addressUyoNhP1, {from: accounts[4]});
//		const addressy3awdMJ = await SSTRewardswGcZ3R.updateReward.call(addresspcfAls, {from: accounts[1]});
//		const uint256Z08ZIgn = await SSTRewardswGcZ3R.stake.call(uintofttYVe, {from: accounts[1]});
//		const uint256bArFbJw = await SSTRewardswGcZ3R.balanceOf.call(addressc1q0fh, {from: accounts[4]});

		await expect(SSTRewardswGcZ3R.stake.call(uintXg97MRs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsqg0oDYM = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressA76s35J = "0x0000000000000000000000000000000000000001"
		const uintiSgrdB = BigInt("859")
		const addressgK27UH = "0x0000000000000000000000000000000000000001"
		const uint256dCcpOD = await SSTRewardsqg0oDYM.balanceOf.call(addressA76s35J, {from: accounts[3]});
		const uint256G9EyUtK = await SSTRewardsqg0oDYM.notifyRewardAmount.call(uintiSgrdB, {from: accounts[3]});
		await SSTRewardsqg0oDYM.exit.call({from: accounts[1]});
		const uint256cIRoePH = await SSTRewardsqg0oDYM.earned.call(addressgK27UH, {from: accounts[5]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsNNbS6h7 = await SSTRewards.new({from: accounts[4]});
		const addressWNLKuS = accounts[1]
		const uintDQr0pcy = BigInt("1410")
		const uint256oSyCWvP = await SSTRewardsNNbS6h7.earned.call(addressWNLKuS, {from: accounts[4]});
		const uint256WvozFOV = await SSTRewardsNNbS6h7.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256aRzovmm = await SSTRewardsNNbS6h7.rewardPerToken.call({from: accounts[1]});
//		const uint256JnPp0J0 = await SSTRewardsNNbS6h7.withdraw.call(uintDQr0pcy, {from: accounts[5]});

		assert.equal(uint256WvozFOV, BigInt("0"))
		assert.equal(uint256aRzovmm, BigInt("0"))
		assert.equal(uint256oSyCWvP, BigInt("0"))
		await expect(SSTRewardsNNbS6h7.withdraw.call(uintDQr0pcy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsNNbS6h7 = await SSTRewards.new({from: accounts[4]});
		const addressp9RL5k = accounts[4]
		const addresslD1Bv6M = accounts[2]
		const uintEQtt5qG = BigInt("1410")
//		const addressATPlJD5 = await SSTRewardsNNbS6h7.updateReward.call(addressp9RL5k, {from: accounts[1]});
//		const uint256oSyCWvP = await SSTRewardsNNbS6h7.earned.call(addresslD1Bv6M, {from: accounts[4]});
//		const uint256WvozFOV = await SSTRewardsNNbS6h7.lastTimeRewardApplicable.call({from: accounts[1]});
//		await SSTRewardsNNbS6h7.getReward.call({from: accounts[2]});
//		const uint256aRzovmm = await SSTRewardsNNbS6h7.rewardPerToken.call({from: accounts[1]});
//		const uint256JnPp0J0 = await SSTRewardsNNbS6h7.withdraw.call(uintEQtt5qG, {from: accounts[5]});

		await expect(SSTRewardsNNbS6h7.updateReward.call(addressp9RL5k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsrRYhHnd = await SSTRewards.new({from: accounts[2]});
		const uintjWu5vJM = BigInt("938")
		const addressEBcxtg = accounts[0]
		const addressOae9Za7 = accounts[4]
		const uintFBqlQ01 = BigInt("202")
//		await SSTRewardsrRYhHnd.exit.call({from: accounts[3]});
//		const uint256dhirhVQ = await SSTRewardsrRYhHnd.stake.call(uintjWu5vJM, {from: accounts[4]});
//		const address2xtG69 = await SSTRewardsrRYhHnd.updateReward.call(addressEBcxtg, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsrRYhHnd.checkStart.call({from: accounts[4]});
//		const uint256AddGM4O = await SSTRewardsrRYhHnd.earned.call(addressOae9Za7, {from: accounts[3]});
//		const uint2561EiXSK = await SSTRewardsrRYhHnd.withdraw.call(uintFBqlQ01, {from: accounts[4]});

		await expect(SSTRewardsrRYhHnd.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsawbki0A = await SSTRewards.new({from: accounts[3]});
		const uintWxnq5cA = BigInt("221")
//		await SSTRewardsawbki0A.getReward.call({from: accounts[2]});
//		const uint256R89cnqC = await SSTRewardsawbki0A.totalSupply.call({from: accounts[3]});
//		const uint256WJfeiIL = await SSTRewardsawbki0A.withdraw.call(uintWxnq5cA, {from: accounts[0]});
//		const uint256VNQ9ysx = await SSTRewardsawbki0A.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(SSTRewardsawbki0A.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgRhcdpr = await SSTRewards.new({from: accounts[0]});
		const uintP9FPtF = BigInt("0")
		const uintWha0NDy = BigInt("1229")
//		const uint256w11Ewqx = await SSTRewardsgRhcdpr.stake.call(uintP9FPtF, {from: accounts[2]});
//		const uint256C6g2j1e = await SSTRewardsgRhcdpr.stake.call(uintWha0NDy, {from: accounts[5]});

		await expect(SSTRewardsgRhcdpr.stake.call(uintP9FPtF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsnsw8x1U = await SSTRewards.new({from: accounts[3]});
		const addressIH50y0A = "0x0000000000000000000000000000000000000001"
		const uinttYOuWv = BigInt("546")
		const uint256JVMYPAr = await SSTRewardsnsw8x1U.earned.call(addressIH50y0A, {from: accounts[2]});
//		const uint256tkzQ68D = await SSTRewardsnsw8x1U.notifyRewardAmount.call(uinttYOuWv, {from: accounts[0]});
//		const uint256apVWRDK = await SSTRewardsnsw8x1U.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256gmI6M4L = await SSTRewardsnsw8x1U.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256JVMYPAr, BigInt("0"))
		await expect(SSTRewardsnsw8x1U.notifyRewardAmount.call(uinttYOuWv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})