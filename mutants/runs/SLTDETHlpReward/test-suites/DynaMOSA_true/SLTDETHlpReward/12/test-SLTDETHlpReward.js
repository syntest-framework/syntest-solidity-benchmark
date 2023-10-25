const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardVjbFGLb = await SLTDETHlpReward.new({from: accounts[2]});
		const addressARL2xab = accounts[0]
		const uint256gqNMOmH = await SLTDETHlpRewardVjbFGLb.totalSupply.call({from: accounts[0]});
		await SLTDETHlpRewardVjbFGLb.getReward.call({from: accounts[0]});
		const uint256XKfwDtj = await SLTDETHlpRewardVjbFGLb.balanceOf.call(addressARL2xab, {from: accounts[1]});
		await SLTDETHlpRewardVjbFGLb.onlyRewardDistribution.call({from: accounts[0]});
		await SLTDETHlpRewardVjbFGLb.checkStart.call({from: accounts[2]});

		assert.equal(uint256gqNMOmH, BigInt("0"))
		await expect(SLTDETHlpRewardVjbFGLb.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardHw4pbkQ = await SLTDETHlpReward.new({from: accounts[4]});
		const addressqhbTwfr = accounts[2]
		const uintiw78KJ = BigInt("1968")
		const uint256SsNU2FS = await SLTDETHlpRewardHw4pbkQ.balanceOf.call(addressqhbTwfr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oWLrvO = await SLTDETHlpRewardHw4pbkQ.stake.call(uintiw78KJ, {from: accounts[4]});
		const address6CMZ3t = await SLTDETHlpRewardHw4pbkQ.owner.call({from: accounts[3]});

		assert.equal(uint256SsNU2FS, BigInt("0"))
		await expect(SLTDETHlpRewardHw4pbkQ.stake.call(uintiw78KJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardUQMgLq = await SLTDETHlpReward.new({from: accounts[1]});
		const uintZpPoUyW = BigInt("1857")
		const uintIQX74Xm = BigInt("385")
		const addressW9o0Gwp = accounts[4]
		const addressPWpcGI3 = await SLTDETHlpRewardUQMgLq.owner.call({from: accounts[3]});
		const uint256jZBN1n = await SLTDETHlpRewardUQMgLq.withdraw.call(uintZpPoUyW, {from: accounts[3]});
		const uint256Xwm3HfU = await SLTDETHlpRewardUQMgLq.notifyRewardAmount.call(uintIQX74Xm, {from: accounts[2]});
		const uint256kcZsxUT = await SLTDETHlpRewardUQMgLq.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256SgbUWnD = await SLTDETHlpRewardUQMgLq.lastTimeRewardApplicable.call({from: accounts[2]});
		const addresskfN3nLJ = await SLTDETHlpRewardUQMgLq.transferOwnership.call(addressW9o0Gwp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressPWpcGI3, 0x149b607EB56EfD3993C15451bB7957E81575BC03)
		await expect(SLTDETHlpRewardUQMgLq.withdraw.call(uintZpPoUyW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardt687y1F = await SLTDETHlpReward.new({from: accounts[3]});
		const addresseqLCkPq = accounts[3]
		const boolS10OhTR = await SLTDETHlpRewardt687y1F.isOwner.call({from: accounts[2]});
		const uint256OU2oia1 = await SLTDETHlpRewardt687y1F.rewardPerToken.call({from: accounts[4]});
		const addresssdvtN5h = await SLTDETHlpRewardt687y1F.updateReward.call(addresseqLCkPq, {from: accounts[5]});
		await SLTDETHlpRewardt687y1F.checkStart.call({from: accounts[4]});

		assert.equal(boolS10OhTR, false)
		assert.equal(uint256OU2oia1, BigInt("0"))
		await expect(SLTDETHlpRewardt687y1F.updateReward.call(addresseqLCkPq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardosTENHa = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscO6wmdV = accounts[4]
		const addressfcg4jZb = accounts[5]
		const uintn0Jl5L9 = BigInt("363")
		const addresskPbs0n = await SLTDETHlpRewardosTENHa.setRewardDistribution.call(addresscO6wmdV, {from: accounts[2]});
		const addressfIZIX8p = await SLTDETHlpRewardosTENHa.setStakeAddress.call(addressfcg4jZb, {from: accounts[3]});
		const uint256yjGlRk9 = await SLTDETHlpRewardosTENHa.withdraw.call(uintn0Jl5L9, {from: accounts[3]});
		await SLTDETHlpRewardosTENHa.onlyOwner.call({from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardNLPX7oI = await SLTDETHlpReward.new({from: accounts[0]});
		await SLTDETHlpRewardNLPX7oI.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardNLPX7oI.onlyRewardDistribution.call({from: accounts[5]});
		await SLTDETHlpRewardNLPX7oI.getReward.call({from: accounts[5]});

		await expect(SLTDETHlpRewardNLPX7oI.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardVjbFGLb = await SLTDETHlpReward.new({from: accounts[2]});
		const uintAOhMZFF = BigInt("1352")
		const addresst8KUTDC = accounts[0]
		const uint256gqNMOmH = await SLTDETHlpRewardVjbFGLb.totalSupply.call({from: accounts[0]});
		await SLTDETHlpRewardVjbFGLb.getReward.call({from: accounts[0]});
		const uint256oObKozz = await SLTDETHlpRewardVjbFGLb.notifyRewardAmount.call(uintAOhMZFF, {from: accounts[1]});
		const uint256XKfwDtj = await SLTDETHlpRewardVjbFGLb.balanceOf.call(addresst8KUTDC, {from: accounts[1]});
		await SLTDETHlpRewardVjbFGLb.onlyRewardDistribution.call({from: accounts[0]});
		await SLTDETHlpRewardVjbFGLb.checkStart.call({from: accounts[2]});

		assert.equal(uint256gqNMOmH, BigInt("0"))
		await expect(SLTDETHlpRewardVjbFGLb.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardusPAxXM = await SLTDETHlpReward.new({from: accounts[4]});
		const uintCi3cJZI = BigInt("1754")
		const uintGEWIp8 = BigInt("1184")
		const uint256mY5EpxT = await SLTDETHlpRewardusPAxXM.notifyRewardAmount.call(uintCi3cJZI, {from: accounts[4]});
		const uint256AgPrLXc = await SLTDETHlpRewardusPAxXM.notifyRewardAmount.call(uintGEWIp8, {from: accounts[1]});

		await expect(SLTDETHlpRewardusPAxXM.notifyRewardAmount.call(uintGEWIp8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardVjbFGLb = await SLTDETHlpReward.new({from: accounts[2]});
		const uintOBT0Dhk = BigInt("1848")
		const uintvNpD5Af = BigInt("1352")
		const addressgzgnUEm = accounts[0]
		await SLTDETHlpRewardVjbFGLb.exit.call({from: accounts[0]});
		const uint256gqNMOmH = await SLTDETHlpRewardVjbFGLb.totalSupply.call({from: accounts[0]});
		await SLTDETHlpRewardVjbFGLb.getReward.call({from: accounts[0]});
		const uint256R3gwyLW = await SLTDETHlpRewardVjbFGLb.stake.call(uintOBT0Dhk, {from: accounts[4]});
		const uint256oObKozz = await SLTDETHlpRewardVjbFGLb.notifyRewardAmount.call(uintvNpD5Af, {from: accounts[1]});
		const uint256XKfwDtj = await SLTDETHlpRewardVjbFGLb.balanceOf.call(addressgzgnUEm, {from: accounts[1]});
		await SLTDETHlpRewardVjbFGLb.onlyRewardDistribution.call({from: accounts[0]});
		await SLTDETHlpRewardVjbFGLb.checkStart.call({from: accounts[2]});

		await expect(SLTDETHlpRewardVjbFGLb.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5foS8c = await SLTDETHlpReward.new({from: accounts[4]});
		const uintwcWnP18 = BigInt("1257")
		const addressSh73R6m = accounts[1]
		const addressdVCN4kf = accounts[0]
		const uint256b8C5bY = await SLTDETHlpReward5foS8c.remainingReward.call({from: accounts[0]});
		const uint256IVH6GDl = await SLTDETHlpReward5foS8c.withdraw.call(uintwcWnP18, {from: "0x0000000000000000000000000000000000000001"});
		const addressLi8x6R = await SLTDETHlpReward5foS8c.updateReward.call(addressSh73R6m, {from: "0x0000000000000000000000000000000000000001"});
		const addressaqJSpIy = await SLTDETHlpReward5foS8c.setStakeAddress.call(addressdVCN4kf, {from: accounts[1]});

		await expect(SLTDETHlpReward5foS8c.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrjqKqa = await SLTDETHlpReward.new({from: accounts[4]});
		const addressfIej154 = accounts[3]
		const addressqCw4v6r = accounts[2]
		const addressjYCdomn = accounts[4]
		const addressLiLefPY = await SLTDETHlpRewardrjqKqa.setRewardDistribution.call(addressfIej154, {from: accounts[4]});
		const uint256f9TU9HN = await SLTDETHlpRewardrjqKqa.earned.call(addressqCw4v6r, {from: accounts[3]});
		await SLTDETHlpRewardrjqKqa.onlyRewardDistribution.call({from: accounts[3]});
		await SLTDETHlpRewardrjqKqa.renounceOwnership.call({from: accounts[5]});
		const addresssGFVj5 = await SLTDETHlpRewardrjqKqa.transferOwnership.call(addressjYCdomn, {from: accounts[2]});

		assert.equal(uint256f9TU9HN, BigInt("0"))
		await expect(SLTDETHlpRewardrjqKqa.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardHw4pbkQ = await SLTDETHlpReward.new({from: accounts[4]});
		const addresscoM3gd = accounts[0]
		const uintW5fCVHU = BigInt("1931")
		const addressKAq5uL1 = await SLTDETHlpRewardHw4pbkQ.transferOwnership.call(addresscoM3gd, {from: accounts[4]});
		const uint256oWLrvO = await SLTDETHlpRewardHw4pbkQ.stake.call(uintW5fCVHU, {from: accounts[4]});
		const booljlBmsmE = await SLTDETHlpRewardHw4pbkQ.isOwner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardHw4pbkQ.stake.call(uintW5fCVHU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardHw4pbkQ = await SLTDETHlpReward.new({from: accounts[4]});
		const addressAGrXojF = accounts[3]
		const uintORYZ9fC = BigInt("1733")
		const addressKSjh8n = await SLTDETHlpRewardHw4pbkQ.setStakeAddress.call(addressAGrXojF, {from: accounts[4]});
		const uint256oWLrvO = await SLTDETHlpRewardHw4pbkQ.stake.call(uintORYZ9fC, {from: accounts[4]});
		const uint256wgRSqIP = await SLTDETHlpRewardHw4pbkQ.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SLTDETHlpRewardHw4pbkQ.stake.call(uintORYZ9fC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardHw4pbkQ = await SLTDETHlpReward.new({from: accounts[4]});
		const uintDmIzmiK = BigInt("1290")
		const addressSHpyfdk = accounts[3]
		const uinteK4eJeg = BigInt("793")
		const uintGSAR8Sk = BigInt("1389")
		const uint256diKz7f = await SLTDETHlpRewardHw4pbkQ.notifyRewardAmount.call(uintDmIzmiK, {from: accounts[4]});
		await SLTDETHlpRewardHw4pbkQ.getReward.call({from: accounts[4]});
		const uint256Kq1se6q = await SLTDETHlpRewardHw4pbkQ.earned.call(addressSHpyfdk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aFEEq3P = await SLTDETHlpRewardHw4pbkQ.setStartTime.call(uinteK4eJeg, {from: accounts[4]});
		const uint256PblWdQA = await SLTDETHlpRewardHw4pbkQ.stake.call(uintGSAR8Sk, {from: accounts[3]});
		await SLTDETHlpRewardHw4pbkQ.onlyRewardDistribution.call({from: accounts[2]});
		const address6CMZ3t = await SLTDETHlpRewardHw4pbkQ.owner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardHw4pbkQ.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})