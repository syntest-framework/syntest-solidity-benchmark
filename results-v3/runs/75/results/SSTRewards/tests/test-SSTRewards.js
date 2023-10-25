const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardstTq2aqv = await SSTRewards.new({from: accounts[3]});
		const addressRVNj3i4 = accounts[1]
		const uint256ExWVRSG = await SSTRewardstTq2aqv.rewardPerToken.call({from: accounts[3]});
		const uint256mHRVXME = await SSTRewardstTq2aqv.earned.call(addressRVNj3i4, {from: accounts[4]});
		await SSTRewardstTq2aqv.checkStart.call({from: accounts[3]});
		await SSTRewardstTq2aqv.exit.call({from: accounts[4]});
		await SSTRewardstTq2aqv.exit.call({from: accounts[1]});

		assert.equal(uint256ExWVRSG, BigInt("0"))
		assert.equal(uint256mHRVXME, BigInt("0"))
		await expect(SSTRewardstTq2aqv.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsMA675Yu = await SSTRewards.new({from: accounts[2]});
		const uintO7XbPRz = BigInt("1337")
		const addresswSvvx3C = accounts[2]
		const uintjS2jy7q = BigInt("1497")
		const uint256JcHwQjn = await SSTRewardsMA675Yu.lastTimeRewardApplicable.call({from: accounts[3]});
		await SSTRewardsMA675Yu.exit.call({from: accounts[2]});
		const uint256N7Q3uPO = await SSTRewardsMA675Yu.withdraw.call(uintO7XbPRz, {from: "0x0000000000000000000000000000000000000001"});
		const addressabWURFe = await SSTRewardsMA675Yu.updateReward.call(addresswSvvx3C, {from: accounts[0]});
		const uint256QJSzA4x = await SSTRewardsMA675Yu.stake.call(uintjS2jy7q, {from: accounts[3]});

		assert.equal(uint256JcHwQjn, BigInt("0"))
		await expect(SSTRewardsMA675Yu.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsKaCeCbU = await SSTRewards.new({from: accounts[4]});
		const uintRENbyO = BigInt("1410")
		const uintQMktQeV = BigInt("695")
		const uintofSq2aq = BigInt("190")
		const addressnCRXKv = accounts[4]
		const uint256juOncDP = await SSTRewardsKaCeCbU.withdraw.call(uintRENbyO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dYrIrNM = await SSTRewardsKaCeCbU.withdraw.call(uintQMktQeV, {from: accounts[1]});
		const uint256JRKyLm5 = await SSTRewardsKaCeCbU.stake.call(uintofSq2aq, {from: accounts[4]});
		const addressovs8byN = await SSTRewardsKaCeCbU.updateReward.call(addressnCRXKv, {from: accounts[4]});
		await SSTRewardsKaCeCbU.checkStart.call({from: accounts[5]});

		await expect(SSTRewardsKaCeCbU.withdraw.call(uintRENbyO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsl89ddfK = await SSTRewards.new({from: accounts[0]});
		const uint256bn7120g = await SSTRewardsl89ddfK.totalSupply.call({from: accounts[3]});
		await SSTRewardsl89ddfK.getReward.call({from: accounts[1]});
		await SSTRewardsl89ddfK.checkStart.call({from: accounts[1]});
		await SSTRewardsl89ddfK.checkStart.call({from: accounts[3]});

		assert.equal(uint256bn7120g, BigInt("0"))
		await expect(SSTRewardsl89ddfK.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardshUb4hC9 = await SSTRewards.new({from: accounts[3]});
		const uintQBeqDmH = BigInt("1364")
		const uint256v1FEhuz = await SSTRewardshUb4hC9.stake.call(uintQBeqDmH, {from: accounts[4]});
		await SSTRewardshUb4hC9.getReward.call({from: accounts[1]});
		const uint256hBQtqbM = await SSTRewardshUb4hC9.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(SSTRewardshUb4hC9.stake.call(uintQBeqDmH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsl89ddfK = await SSTRewards.new({from: accounts[0]});
		const uintbu5eHtE = BigInt("926")
		const uint256bn7120g = await SSTRewardsl89ddfK.totalSupply.call({from: accounts[3]});
		await SSTRewardsl89ddfK.getReward.call({from: accounts[1]});
		await SSTRewardsl89ddfK.getReward.call({from: accounts[2]});
		const uint256SvHG663 = await SSTRewardsl89ddfK.notifyRewardAmount.call(uintbu5eHtE, {from: accounts[5]});
		await SSTRewardsl89ddfK.checkStart.call({from: accounts[3]});

		assert.equal(uint256bn7120g, BigInt("0"))
		await expect(SSTRewardsl89ddfK.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardshjZZd0m = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshFlFn0R = accounts[5]
		const uint256Kum9xdp = await SSTRewardshjZZd0m.earned.call(addresshFlFn0R, {from: accounts[0]});
		await SSTRewardshjZZd0m.exit.call({from: accounts[2]});
		await SSTRewardshjZZd0m.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardshjZZd0m.checkStart.call({from: accounts[0]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsl89ddfK = await SSTRewards.new({from: accounts[0]});
		const uintqm0Op37 = BigInt("0")
		const uint256bn7120g = await SSTRewardsl89ddfK.totalSupply.call({from: accounts[3]});
		await SSTRewardsl89ddfK.getReward.call({from: accounts[1]});
		const uint256TtSSssV = await SSTRewardsl89ddfK.stake.call(uintqm0Op37, {from: accounts[0]});
		await SSTRewardsl89ddfK.getReward.call({from: accounts[1]});
		await SSTRewardsl89ddfK.checkStart.call({from: accounts[3]});

		assert.equal(uint256bn7120g, BigInt("0"))
		await expect(SSTRewardsl89ddfK.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})