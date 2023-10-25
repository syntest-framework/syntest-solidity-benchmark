const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingXMMW9Tm = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingXMMW9Tm.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingXMMW9Tm.onlyRewardDistribution.call({from: accounts[1]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingPWyfLVC = await SLTDStaking.new({from: accounts[5]});
		const addressGBjJnm0 = accounts[4]
		const uintZ7yMpG0 = BigInt("1818")
		const addresssKXXSq = accounts[4]
		const addressM1SCAa6 = await SLTDStakingPWyfLVC.updateReward.call(addressGBjJnm0, {from: accounts[1]});
		const uint256TtqD0BK = await SLTDStakingPWyfLVC.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256FgybIlv = await SLTDStakingPWyfLVC.totalSupply.call({from: accounts[4]});
		const uint256OCp583 = await SLTDStakingPWyfLVC.notifyRewardAmount.call(uintZ7yMpG0, {from: accounts[4]});
		const addressubYAZIj = await SLTDStakingPWyfLVC.transferOwnership.call(addresssKXXSq, {from: accounts[2]});

		await expect(SLTDStakingPWyfLVC.updateReward.call(addressGBjJnm0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWgn04Z = await SLTDStaking.new({from: accounts[3]});
		const uintuIVeXed = BigInt("805")
		const addresszCyet0b = accounts[1]
		const addressqHzBpC = accounts[2]
		const addressAQ4L7vP = accounts[3]
		const uint256mAw437G = await SLTDStakingWgn04Z.withdraw.call(uintuIVeXed, {from: accounts[0]});
		await SLTDStakingWgn04Z.exit.call({from: accounts[5]});
		const uint256zV3GlDo = await SLTDStakingWgn04Z.balanceOf.call(addresszCyet0b, {from: accounts[0]});
		const uint256BNjD5gl = await SLTDStakingWgn04Z.totalSupply.call({from: accounts[4]});
		const uint256eN5bvm = await SLTDStakingWgn04Z.balanceOf.call(addressqHzBpC, {from: accounts[2]});
		const addresszp0oUVk = await SLTDStakingWgn04Z.updateReward.call(addressAQ4L7vP, {from: accounts[4]});

		await expect(SLTDStakingWgn04Z.withdraw.call(uintuIVeXed, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingVXnqDHl = await SLTDStaking.new({from: accounts[3]});
		const addressMZAVUj = accounts[3]
		const addressAW4TbFQ = accounts[1]
		const uintdpeltcM = BigInt("77")
		const addressUJ94MTZ = await SLTDStakingVXnqDHl.setSLTD.call(addressAW4TbFQ, addressMZAVUj, {from: accounts[2]});
		await SLTDStakingVXnqDHl.onlyRewardDistribution.call({from: accounts[4]});
		const uint256DTw7s82 = await SLTDStakingVXnqDHl.stake.call(uintdpeltcM, {from: accounts[3]});

		await expect(SLTDStakingVXnqDHl.setSLTD.call(addressAW4TbFQ, addressMZAVUj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSys911g = await SLTDStaking.new({from: accounts[5]});
		const uint2563vy9A2 = await SLTDStakingSys911g.lastTimeRewardApplicable.call({from: accounts[2]});
		await SLTDStakingSys911g.renounceOwnership.call({from: accounts[4]});
		await SLTDStakingSys911g.renounceOwnership.call({from: accounts[5]});
		const uint256aWZW7Fm = await SLTDStakingSys911g.rewardPerToken.call({from: accounts[1]});
		await SLTDStakingSys911g.getReward.call({from: accounts[0]});
		const uint256YIemc1a = await SLTDStakingSys911g.totalSupply.call({from: accounts[4]});

		assert.equal(uint2563vy9A2, BigInt("0"))
		await expect(SLTDStakingSys911g.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingy1EMJNv = await SLTDStaking.new({from: accounts[1]});
		const uintTR78tKI = BigInt("702")
		const uintAGcb0iy = BigInt("1951")
		await SLTDStakingy1EMJNv.getReward.call({from: accounts[2]});
		const uint256kM4lFR = await SLTDStakingy1EMJNv.withdraw.call(uintTR78tKI, {from: accounts[1]});
		const uint256mxFTsCu = await SLTDStakingy1EMJNv.stake.call(uintAGcb0iy, {from: accounts[1]});
		const bool29xu8I = await SLTDStakingy1EMJNv.isOwner.call({from: accounts[4]});

		await expect(SLTDStakingy1EMJNv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingYNa5bZm = await SLTDStaking.new({from: accounts[3]});
		const uintHgS5322 = BigInt("1829")
		const addressK0IugY5 = accounts[5]
		const uintCREsS0S = BigInt("730")
		const uintZPoMZLn = BigInt("843")
		const uint256hAALAJC = await SLTDStakingYNa5bZm.stake.call(uintHgS5322, {from: accounts[2]});
		const addressZofoimR = await SLTDStakingYNa5bZm.setRewardDistribution.call(addressK0IugY5, {from: accounts[1]});
		const uint256z6I5FGd = await SLTDStakingYNa5bZm.stake.call(uintCREsS0S, {from: accounts[1]});
		const uint2568y4RXG = await SLTDStakingYNa5bZm.withdraw.call(uintZPoMZLn, {from: accounts[1]});

		await expect(SLTDStakingYNa5bZm.stake.call(uintHgS5322, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingy1EMJNv = await SLTDStaking.new({from: accounts[1]});
		await SLTDStakingy1EMJNv.getReward.call({from: accounts[2]});
		await SLTDStakingy1EMJNv.renounceOwnership.call({from: accounts[1]});
		const bool29xu8I = await SLTDStakingy1EMJNv.isOwner.call({from: accounts[4]});

		await expect(SLTDStakingy1EMJNv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingNJsJBi = await SLTDStaking.new({from: accounts[3]});
		const uint4a6XhJ = BigInt("1012")
		const addressLDqHzHd = accounts[4]
		const addressTPBOfN = accounts[0]
		const uintlzI5Sot = BigInt("34")
		await SLTDStakingNJsJBi.exit.call({from: accounts[1]});
		const uint256Px65J8 = await SLTDStakingNJsJBi.stake.call(uint4a6XhJ, {from: accounts[3]});
		const uint256TwtkQl = await SLTDStakingNJsJBi.rewardPerToken.call({from: accounts[0]});
		const addressCJEFhG = await SLTDStakingNJsJBi.updateReward.call(addressLDqHzHd, {from: accounts[4]});
		const uint256W6sT0LA = await SLTDStakingNJsJBi.balanceOf.call(addressTPBOfN, {from: accounts[3]});
		const uint256oLBBWg = await SLTDStakingNJsJBi.withdraw.call(uintlzI5Sot, {from: accounts[1]});

		await expect(SLTDStakingNJsJBi.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingy1EMJNv = await SLTDStaking.new({from: accounts[1]});
		const addressCiE0VCV = accounts[3]
		await SLTDStakingy1EMJNv.getReward.call({from: accounts[2]});
		const addressS4p1Awa = await SLTDStakingy1EMJNv.transferOwnership.call(addressCiE0VCV, {from: accounts[1]});

		await expect(SLTDStakingy1EMJNv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingy1EMJNv = await SLTDStaking.new({from: accounts[1]});
		await SLTDStakingy1EMJNv.getReward.call({from: accounts[2]});
		const uint256gZz0ocj = await SLTDStakingy1EMJNv.totalSupply.call({from: accounts[4]});
		const addresshbgJtDl = await SLTDStakingy1EMJNv.owner.call({from: accounts[0]});

		await expect(SLTDStakingy1EMJNv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingy1EMJNv = await SLTDStaking.new({from: accounts[1]});
		const addressO1ZeDtj = "0x0000000000000000000000000000000000000001"
		const uinteWKJIwy = BigInt("143")
		await SLTDStakingy1EMJNv.getReward.call({from: accounts[2]});
		const addresswIcxRZA = await SLTDStakingy1EMJNv.setRewardDistribution.call(addressO1ZeDtj, {from: accounts[1]});
		const uint256ZG0XfsY = await SLTDStakingy1EMJNv.stake.call(uinteWKJIwy, {from: accounts[2]});

		await expect(SLTDStakingy1EMJNv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})