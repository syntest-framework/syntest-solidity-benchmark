const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2c3sOjSh = await PRDZstakingV2.new({from: accounts[4]});
		const uint6XUHdA = BigInt("748")
		const uintY73W6yS = BigInt("477")
		const addressXeRNCS = accounts[4]
		const uintEmQDit = await PRDZstakingV2c3sOjSh.updateOffer.call(uintY73W6yS, uint6XUHdA, {from: "0x0000000000000000000000000000000000000001"});
		const uintIIKEy9V = await PRDZstakingV2c3sOjSh.getScoreEth.call(addressXeRNCS, {from: accounts[2]});

		await expect(PRDZstakingV2c3sOjSh.updateOffer.call(uintY73W6yS, uint6XUHdA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gl63tMj = await PRDZstakingV2.new({from: accounts[3]});
		const uint4KKZg8 = BigInt("826")
		const uintQ19ZCG = await PRDZstakingV2gl63tMj.getTotalUnStaked.call({from: accounts[4]});
		await PRDZstakingV2gl63tMj.deposit.call({from: accounts[2]});
		await PRDZstakingV2gl63tMj.claimReward.call({from: accounts[5]});
		const uintrwyIX3v = await PRDZstakingV2gl63tMj.updateScoreEth.call(uint4KKZg8, {from: accounts[0]});

		assert.equal(uintQ19ZCG, BigInt("0"))
		await expect(PRDZstakingV2gl63tMj.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2vQptvYx = await PRDZstakingV2.new({from: accounts[1]});
		const addressMPHwIHR = accounts[1]
		const uinty2qtYTN = await PRDZstakingV2vQptvYx.getTotalStaked.call({from: accounts[0]});
		const uintMvNSHWy = await PRDZstakingV2vQptvYx.getTotalFeeCollected.call({from: accounts[0]});
		const uinttlEViUo = await PRDZstakingV2vQptvYx.getStakingScore.call(addressMPHwIHR, {from: accounts[4]});

		assert.equal(uintMvNSHWy, BigInt("0"))
		assert.equal(uinttlEViUo, BigInt("0"))
		assert.equal(uinty2qtYTN, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dG3oHdN = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspVXrZqA = accounts[2]
		const uintbLQeKro = await PRDZstakingV2dG3oHdN.getScoreEth.call(addresspVXrZqA, {from: accounts[2]});
		const uinthj4MZEQ = await PRDZstakingV2dG3oHdN.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2dG3oHdN.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uinthPMQA2M = await PRDZstakingV2dG3oHdN.getTotalUnStaked.call({from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2sI8rhSa = await PRDZstakingV2.new({from: accounts[3]});
		const uinta8RO3Vn = BigInt("1564")
		const addressRldCbwm = accounts[3]
		const addressY9QGHsB = accounts[4]
		const uintvKTLJCV = await PRDZstakingV2sI8rhSa.unstake.call(uinta8RO3Vn, {from: accounts[4]});
		const uintRZWy4J7 = await PRDZstakingV2sI8rhSa.getScoreEth.call(addressRldCbwm, {from: accounts[3]});
		const uintu4uUKI = await PRDZstakingV2sI8rhSa.getStakingScore.call(addressY9QGHsB, {from: accounts[1]});
		const uintIRiztaf = await PRDZstakingV2sI8rhSa.getTotalFeeCollected.call({from: accounts[4]});
		await PRDZstakingV2sI8rhSa.claimScoreEth.call({from: accounts[2]});
		const uintsm0bL7 = await PRDZstakingV2sI8rhSa.getTotalUnStaked.call({from: accounts[5]});

		await expect(PRDZstakingV2sI8rhSa.unstake.call(uinta8RO3Vn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Df73hb = await PRDZstakingV2.new({from: accounts[1]});
		const addresszJHjfdZ = accounts[1]
		const uint380U3E = BigInt("1203")
		await PRDZstakingV2Df73hb.deposit.call({from: accounts[0]});
		const uintWY5cZzv = await PRDZstakingV2Df73hb.getStakingScore.call(addresszJHjfdZ, {from: accounts[5]});
		const uintUzKOLIY = await PRDZstakingV2Df73hb.stake.call(uint380U3E, {from: accounts[0]});
		await PRDZstakingV2Df73hb.claimScoreEth.call({from: accounts[2]});

		await expect(PRDZstakingV2Df73hb.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RRURM8C = await PRDZstakingV2.new({from: accounts[1]});
		const addressMgwXfiR = accounts[2]
		const uintsxTVK2z = await PRDZstakingV2RRURM8C.getNumberOfHolders.call({from: accounts[2]});
		await PRDZstakingV2RRURM8C.claimScoreEth.call({from: accounts[0]});
		await PRDZstakingV2RRURM8C.claimReward.call({from: accounts[0]});
		await PRDZstakingV2RRURM8C.onlyOwner.call({from: accounts[0]});
		const uintLptX1tC = await PRDZstakingV2RRURM8C.getPendingReward.call(addressMgwXfiR, {from: accounts[3]});

		assert.equal(uintsxTVK2z, BigInt("0"))
		await expect(PRDZstakingV2RRURM8C.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ThopAbM = await PRDZstakingV2.new({from: accounts[3]});
		const addressrXvRSwy = accounts[4]
		const uintSItGaXx = await PRDZstakingV2ThopAbM.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uinthFIjMU7 = await PRDZstakingV2ThopAbM.getTotalClaimed.call({from: accounts[0]});
		const uintpkXq6xU = await PRDZstakingV2ThopAbM.getNumberOfHolders.call({from: accounts[0]});
		const uintpdJKZU8 = await PRDZstakingV2ThopAbM.getScoreEth.call(addressrXvRSwy, {from: accounts[2]});

		assert.equal(uintSItGaXx, BigInt("0"))
		assert.equal(uinthFIjMU7, BigInt("0"))
		assert.equal(uintpdJKZU8, BigInt("0"))
		assert.equal(uintpkXq6xU, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2SCaNwWA = await PRDZstakingV2.new({from: accounts[5]});
		const uintAi5shCK = BigInt("1191")
		const uint3UlzYL = BigInt("1322")
		const addressxMa2Vqk = accounts[2]
		const uintAALgHvb = await PRDZstakingV2SCaNwWA.getTotalClaimed.call({from: accounts[3]});
		const uintcJLBzdh = await PRDZstakingV2SCaNwWA.updateOffer.call(uint3UlzYL, uintAi5shCK, {from: accounts[5]});
		await PRDZstakingV2SCaNwWA.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uintm9NcopD = await PRDZstakingV2SCaNwWA.getStakingScore.call(addressxMa2Vqk, {from: accounts[1]});

		assert.equal(uintAALgHvb, BigInt("0"))
		await expect(PRDZstakingV2SCaNwWA.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Vrq6Yqv = await PRDZstakingV2.new({from: accounts[0]});
		const addressvfLM02i = accounts[3]
		const addressqnotsxR = accounts[2]
		const uintpdeYtQ9 = await PRDZstakingV2Vrq6Yqv.getPendingReward.call(addressvfLM02i, {from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2Vrq6Yqv.deposit.call({from: accounts[4]});
		const addressxitYxC = await PRDZstakingV2Vrq6Yqv.transferOwnership.call(addressqnotsxR, {from: accounts[0]});
		await PRDZstakingV2Vrq6Yqv.onlyOwner.call({from: accounts[2]});

		assert.equal(uintpdeYtQ9, BigInt("0"))
		await expect(PRDZstakingV2Vrq6Yqv.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jJaEz7o = await PRDZstakingV2.new({from: accounts[0]});
		const uintoI4as6n = BigInt("1379")
		const uinttFqAd8Q = BigInt("752")
		const uintrGBNWJ2 = await PRDZstakingV2jJaEz7o.updateScoreEth.call(uintoI4as6n, {from: accounts[0]});
		await PRDZstakingV2jJaEz7o.claimScoreEth.call({from: accounts[3]});
		const uintMcuNn7p = await PRDZstakingV2jJaEz7o.stake.call(uinttFqAd8Q, {from: accounts[4]});

		await expect(PRDZstakingV2jJaEz7o.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})