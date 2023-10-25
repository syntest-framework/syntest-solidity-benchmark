const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsDxZXCYX = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXI5DQrg = BigInt("1835")
		const uintCFDrUCi = BigInt("1616")
		const uintcpJ0at5 = BigInt("153")
		const uintTp6WUx = BigInt("1051")
		const uint256ND631Po = await SSTRewardsDxZXCYX.stake.call(uintXI5DQrg, {from: accounts[0]});
		const uint256sfrEc2r = await SSTRewardsDxZXCYX.notifyRewardAmount.call(uintCFDrUCi, {from: accounts[4]});
		const uint256cQIKH4u = await SSTRewardsDxZXCYX.withdraw.call(uintcpJ0at5, {from: accounts[1]});
		const uint256jW26pvO = await SSTRewardsDxZXCYX.withdraw.call(uintTp6WUx, {from: accounts[2]});
		const uint256NaMZTEO = await SSTRewardsDxZXCYX.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256YrzdI6J = await SSTRewardsDxZXCYX.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsDWQZEKN = await SSTRewards.new({from: accounts[3]});
		const addressJzuhd3z = accounts[3]
		const uintKCfpaW = BigInt("84")
		const uint256tIzwU25 = await SSTRewardsDWQZEKN.earned.call(addressJzuhd3z, {from: accounts[1]});
		const uint256YkIyIGA = await SSTRewardsDWQZEKN.rewardPerToken.call({from: accounts[0]});
		const uint2569KzQUH = await SSTRewardsDWQZEKN.withdraw.call(uintKCfpaW, {from: accounts[2]});
		const uint256LQXip9y = await SSTRewardsDWQZEKN.lastTimeRewardApplicable.call({from: accounts[4]});
		await SSTRewardsDWQZEKN.exit.call({from: accounts[1]});

		assert.equal(uint256YkIyIGA, BigInt("0"))
		assert.equal(uint256tIzwU25, BigInt("0"))
		await expect(SSTRewardsDWQZEKN.withdraw.call(uintKCfpaW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardstDxl1Wr = await SSTRewards.new({from: accounts[3]});
		const uintT9HiRf3 = BigInt("1583")
		const addressBSMDMpX = accounts[2]
		const uintzgz4qcy = BigInt("912")
		const uintpiU7U1 = BigInt("1346")
		const uint256LDn1gG7 = await SSTRewardstDxl1Wr.notifyRewardAmount.call(uintT9HiRf3, {from: accounts[3]});
		const addressOAdqSB = await SSTRewardstDxl1Wr.updateReward.call(addressBSMDMpX, {from: accounts[4]});
		const uint256ARmcwfp = await SSTRewardstDxl1Wr.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256j026FI = await SSTRewardstDxl1Wr.withdraw.call(uintzgz4qcy, {from: accounts[2]});
		const uint256XC2dls = await SSTRewardstDxl1Wr.stake.call(uintpiU7U1, {from: accounts[4]});
		const uint256j3Vya4G = await SSTRewardstDxl1Wr.rewardPerToken.call({from: accounts[4]});

		await expect(SSTRewardstDxl1Wr.notifyRewardAmount.call(uintT9HiRf3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsA5B2gjN = await SSTRewards.new({from: accounts[4]});
		const addressNzMChws = accounts[5]
		await SSTRewardsA5B2gjN.getReward.call({from: accounts[2]});
		const uint256sAD3nES = await SSTRewardsA5B2gjN.earned.call(addressNzMChws, {from: accounts[0]});

		await expect(SSTRewardsA5B2gjN.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsPDjMb7j = await SSTRewards.new({from: accounts[5]});
		const addresspO9W956 = accounts[0]
		const uint256aoRwL2v = await SSTRewardsPDjMb7j.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Us0gv5i = await SSTRewardsPDjMb7j.earned.call(addresspO9W956, {from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsPDjMb7j.exit.call({from: accounts[4]});
		await SSTRewardsPDjMb7j.getReward.call({from: accounts[3]});
		await SSTRewardsPDjMb7j.checkStart.call({from: accounts[3]});

		assert.equal(uint256Us0gv5i, BigInt("0"))
		assert.equal(uint256aoRwL2v, BigInt("0"))
		await expect(SSTRewardsPDjMb7j.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardswmmo6b = await SSTRewards.new({from: accounts[4]});
		const uintE9PoIu2 = BigInt("957")
		const uintNjuYICg = BigInt("715")
		const uintFaTVS2X = BigInt("1444")
		const uint2563FDEou = await SSTRewardswmmo6b.stake.call(uintE9PoIu2, {from: accounts[0]});
		const uint256wKxCGcR = await SSTRewardswmmo6b.notifyRewardAmount.call(uintNjuYICg, {from: accounts[4]});
		const uint256qQpJEPk = await SSTRewardswmmo6b.stake.call(uintFaTVS2X, {from: accounts[2]});

		await expect(SSTRewardswmmo6b.stake.call(uintE9PoIu2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsA5B2gjN = await SSTRewards.new({from: accounts[4]});
		const addressNx8jwT6 = accounts[2]
		const addressaOZcOeZ = accounts[5]
		await SSTRewardsA5B2gjN.getReward.call({from: accounts[2]});
		await SSTRewardsA5B2gjN.getReward.call({from: accounts[3]});
		const addressAPDZ7Cw = await SSTRewardsA5B2gjN.updateReward.call(addressNx8jwT6, {from: accounts[5]});
		const uint256sAD3nES = await SSTRewardsA5B2gjN.earned.call(addressaOZcOeZ, {from: accounts[0]});

		await expect(SSTRewardsA5B2gjN.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})