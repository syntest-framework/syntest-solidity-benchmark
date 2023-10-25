const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakinguiZ1zoa = await SLTDStaking.new({from: accounts[4]});
		const addressDB4i6M4 = accounts[1]
		const uint256rJ0C97Z = await SLTDStakinguiZ1zoa.rewardPerToken.call({from: accounts[0]});
//		const addressDYJzUZ = await SLTDStakinguiZ1zoa.setRewardDistribution.call(addressDB4i6M4, {from: accounts[0]});
//		const uint256Id0ELLH = await SLTDStakinguiZ1zoa.rewardPerToken.call({from: accounts[2]});
//		const uint256IrI1hyM = await SLTDStakinguiZ1zoa.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256rJ0C97Z, BigInt("0"))
		await expect(SLTDStakinguiZ1zoa.setRewardDistribution.call(addressDB4i6M4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSeSBM3A = await SLTDStaking.new({from: accounts[2]});
		const uintP23G1jp = BigInt("1324")
		const uinti6eqIZ = BigInt("623")
//		const uint256VzWrlX = await SLTDStakingSeSBM3A.stake.call(uintP23G1jp, {from: accounts[0]});
//		await SLTDStakingSeSBM3A.exit.call({from: accounts[3]});
//		await SLTDStakingSeSBM3A.getReward.call({from: accounts[2]});
//		const uint256yvol1ON = await SLTDStakingSeSBM3A.stake.call(uinti6eqIZ, {from: accounts[3]});

		await expect(SLTDStakingSeSBM3A.stake.call(uintP23G1jp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsvG1yvP = await SLTDStaking.new({from: accounts[0]});
		const uintGoSPzZi = BigInt("1936")
		const uintWZiktHL = BigInt("1143")
		const uint256sB9cZq = await SLTDStakingsvG1yvP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256pSr98ES = await SLTDStakingsvG1yvP.notifyRewardAmount.call(uintGoSPzZi, {from: accounts[0]});
//		const uint256Xr9VJ3j = await SLTDStakingsvG1yvP.rewardPerToken.call({from: accounts[3]});
//		const uint256w9VDlEZ = await SLTDStakingsvG1yvP.withdraw.call(uintWZiktHL, {from: accounts[4]});

		assert.equal(uint256sB9cZq, BigInt("0"))
		await expect(SLTDStakingsvG1yvP.notifyRewardAmount.call(uintGoSPzZi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzJ5EZ9n = await SLTDStaking.new({from: accounts[2]});
//		await SLTDStakingzJ5EZ9n.getReward.call({from: accounts[2]});
//		await SLTDStakingzJ5EZ9n.renounceOwnership.call({from: accounts[4]});

		await expect(SLTDStakingzJ5EZ9n.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingmxu1FgN = await SLTDStaking.new({from: accounts[0]});
		const addressLaFiXL = accounts[1]
		const uintkcRMpup = BigInt("772")
		const uint256LpOP1cm = await SLTDStakingmxu1FgN.balanceOf.call(addressLaFiXL, {from: accounts[2]});
		const bool1kzlVv = await SLTDStakingmxu1FgN.isOwner.call({from: accounts[1]});
//		const uint256tZ80Mf = await SLTDStakingmxu1FgN.withdraw.call(uintkcRMpup, {from: accounts[3]});

		assert.equal(bool1kzlVv, false)
		assert.equal(uint256LpOP1cm, BigInt("0"))
		await expect(SLTDStakingmxu1FgN.withdraw.call(uintkcRMpup, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingd6TxOgQ = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrRFEorZ = accounts[5]
		const uintc0xmqFc = BigInt("1439")
		const uintyqhEmJu = BigInt("1906")
		const addressQaYMxkv = await SLTDStakingd6TxOgQ.transferOwnership.call(addressrRFEorZ, {from: accounts[2]});
		const uint256s6ro5se = await SLTDStakingd6TxOgQ.stake.call(uintc0xmqFc, {from: accounts[1]});
		const uint256OnqwqOX = await SLTDStakingd6TxOgQ.withdraw.call(uintyqhEmJu, {from: accounts[0]});
		await SLTDStakingd6TxOgQ.renounceOwnership.call({from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingdVXEiAC = await SLTDStaking.new({from: accounts[0]});
		const addressze7E5Sr = accounts[3]
		const addressMuhx5su = "0x0000000000000000000000000000000000000001"
//		const addresspZciLmz = await SLTDStakingdVXEiAC.updateReward.call(addressze7E5Sr, {from: accounts[5]});
//		const uint256acFrrfr = await SLTDStakingdVXEiAC.totalSupply.call({from: accounts[4]});
//		const uint256EuFBnAW = await SLTDStakingdVXEiAC.balanceOf.call(addressMuhx5su, {from: accounts[0]});
//		await SLTDStakingdVXEiAC.onlyOwner.call({from: accounts[3]});
//		const uint256AZMQyyY = await SLTDStakingdVXEiAC.totalSupply.call({from: accounts[3]});

		await expect(SLTDStakingdVXEiAC.updateReward.call(addressze7E5Sr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingmxu1FgN = await SLTDStaking.new({from: accounts[0]});
		const addressgLXbVk4 = accounts[1]
		const uintQCt7GZc = BigInt("763")
		const uint256LpOP1cm = await SLTDStakingmxu1FgN.balanceOf.call(addressgLXbVk4, {from: accounts[2]});
		const addressS3UQXJe = await SLTDStakingmxu1FgN.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const bool1kzlVv = await SLTDStakingmxu1FgN.isOwner.call({from: accounts[1]});
//		const uint256tZ80Mf = await SLTDStakingmxu1FgN.withdraw.call(uintQCt7GZc, {from: accounts[3]});

		assert.equal(addressS3UQXJe, 0x2e8dAf8AD96724A3dE56668042c09aB1b9e12307)
		assert.equal(bool1kzlVv, false)
		assert.equal(uint256LpOP1cm, BigInt("0"))
		await expect(SLTDStakingmxu1FgN.withdraw.call(uintQCt7GZc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSeSBM3A = await SLTDStaking.new({from: accounts[2]});
		const addressdU5RWXJ = accounts[5]
		const uinteDz789w = BigInt("623")
		const uint256XMzAbd1 = await SLTDStakingSeSBM3A.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SLTDStakingSeSBM3A.exit.call({from: accounts[3]});
//		await SLTDStakingSeSBM3A.getReward.call({from: accounts[2]});
//		const address3WUADe = await SLTDStakingSeSBM3A.updateReward.call(addressdU5RWXJ, {from: accounts[0]});
//		const uint256yvol1ON = await SLTDStakingSeSBM3A.stake.call(uinteDz789w, {from: accounts[3]});

		assert.equal(uint256XMzAbd1, BigInt("0"))
		await expect(SLTDStakingSeSBM3A.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsvG1yvP = await SLTDStaking.new({from: accounts[0]});
		const uintPFiXn0 = BigInt("1266")
		const uinthunarzg = BigInt("443")
		const uintruFBx4B = BigInt("1143")
		const uint256sB9cZq = await SLTDStakingsvG1yvP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDStakingsvG1yvP.renounceOwnership.call({from: accounts[0]});
//		await SLTDStakingsvG1yvP.getReward.call({from: accounts[2]});
//		const uint256pSr98ES = await SLTDStakingsvG1yvP.notifyRewardAmount.call(uintPFiXn0, {from: accounts[0]});
//		const uint256Xr9VJ3j = await SLTDStakingsvG1yvP.rewardPerToken.call({from: accounts[3]});
//		const uint256hFnJEKY = await SLTDStakingsvG1yvP.withdraw.call(uinthunarzg, {from: accounts[3]});
//		await SLTDStakingsvG1yvP.exit.call({from: accounts[3]});
//		const uint256w9VDlEZ = await SLTDStakingsvG1yvP.withdraw.call(uintruFBx4B, {from: accounts[4]});

		assert.equal(uint256sB9cZq, BigInt("0"))
		await expect(SLTDStakingsvG1yvP.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzJ5EZ9n = await SLTDStaking.new({from: accounts[2]});
		const addressQ44gg7 = accounts[0]
		const addressAd5M6At = await SLTDStakingzJ5EZ9n.transferOwnership.call(addressQ44gg7, {from: accounts[2]});
//		await SLTDStakingzJ5EZ9n.getReward.call({from: accounts[2]});

		await expect(SLTDStakingzJ5EZ9n.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzJ5EZ9n = await SLTDStaking.new({from: accounts[2]});
		const addressrueHBA0 = accounts[4]
//		await SLTDStakingzJ5EZ9n.getReward.call({from: accounts[2]});
//		const addressDdnu7ox = await SLTDStakingzJ5EZ9n.setRewardDistribution.call(addressrueHBA0, {from: accounts[2]});
//		await SLTDStakingzJ5EZ9n.onlyOwner.call({from: accounts[1]});
//		await SLTDStakingzJ5EZ9n.renounceOwnership.call({from: accounts[4]});

		await expect(SLTDStakingzJ5EZ9n.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})