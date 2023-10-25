const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsmphvTQs = await SSTRewards.new({from: accounts[4]});
		const uintlSVrjhz = BigInt("1909")
		const uint256BetcSg = await SSTRewardsmphvTQs.stake.call(uintlSVrjhz, {from: accounts[0]});
		const uint256oPorW02 = await SSTRewardsmphvTQs.totalSupply.call({from: accounts[1]});
		await SSTRewardsmphvTQs.exit.call({from: accounts[5]});
		const uint256xNO4Qa8 = await SSTRewardsmphvTQs.rewardPerToken.call({from: accounts[3]});

		await expect(SSTRewardsmphvTQs.stake.call(uintlSVrjhz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardshGO1olj = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDr3HSE9 = BigInt("1731")
		const uint256qy9GlSc = await SSTRewardshGO1olj.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256qD7wYlo = await SSTRewardshGO1olj.totalSupply.call({from: accounts[4]});
		const uint256QuOnZvj = await SSTRewardshGO1olj.withdraw.call(uintDr3HSE9, {from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardslxfKilh = await SSTRewards.new({from: accounts[1]});
		const uintdSCSMer = BigInt("506")
		const uintyAQPlrX = BigInt("28")
		const uint256KNz3Lof = await SSTRewardslxfKilh.withdraw.call(uintdSCSMer, {from: accounts[4]});
		await SSTRewardslxfKilh.getReward.call({from: accounts[4]});
		const uint256yXIo8HW = await SSTRewardslxfKilh.notifyRewardAmount.call(uintyAQPlrX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardslxfKilh.withdraw.call(uintdSCSMer, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsm0UFXx = await SSTRewards.new({from: accounts[3]});
		const uintRjbymfc = BigInt("1608")
		const uintaE0m1qd = BigInt("575")
		await SSTRewardsm0UFXx.checkStart.call({from: accounts[0]});
		const uint256WFUA6s = await SSTRewardsm0UFXx.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Q82GbKw = await SSTRewardsm0UFXx.stake.call(uintRjbymfc, {from: accounts[1]});
		const uint256CJkupJB = await SSTRewardsm0UFXx.notifyRewardAmount.call(uintaE0m1qd, {from: accounts[2]});

		await expect(SSTRewardsm0UFXx.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardschY3Bof = await SSTRewards.new({from: accounts[3]});
		const uintpQ8aTWG = BigInt("666")
		const uintz1EbH01 = BigInt("441")
		await SSTRewardschY3Bof.getReward.call({from: accounts[3]});
		const uint256qWaUXG = await SSTRewardschY3Bof.withdraw.call(uintpQ8aTWG, {from: accounts[3]});
		const uint256wJjBWQ3 = await SSTRewardschY3Bof.stake.call(uintz1EbH01, {from: accounts[3]});

		await expect(SSTRewardschY3Bof.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsySGXDmx = await SSTRewards.new({from: accounts[0]});
		const uintGtH1R90 = BigInt("1795")
		const uint256MP42gRM = await SSTRewardsySGXDmx.notifyRewardAmount.call(uintGtH1R90, {from: accounts[2]});
		const uint256DqwEgra = await SSTRewardsySGXDmx.totalSupply.call({from: accounts[3]});
		const uint256NQXgFPn = await SSTRewardsySGXDmx.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(SSTRewardsySGXDmx.notifyRewardAmount.call(uintGtH1R90, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsfN9Ff49 = await SSTRewards.new({from: accounts[2]});
		const uint256Awb9ekM = await SSTRewardsfN9Ff49.lastTimeRewardApplicable.call({from: accounts[0]});
		await SSTRewardsfN9Ff49.exit.call({from: accounts[1]});

		assert.equal(uint256Awb9ekM, BigInt("0"))
		await expect(SSTRewardsfN9Ff49.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})