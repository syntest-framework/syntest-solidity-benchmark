const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Efnuk7B = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVOPvkFB = BigInt("134")
		const uintXYPpbvh = BigInt("22")
		await PRDZstakingV2Efnuk7B.claimScoreEth.call({from: accounts[4]});
		const uintLBPm1ik = await PRDZstakingV2Efnuk7B.getTotalStaked.call({from: accounts[2]});
		const uintOyEYM3Q = await PRDZstakingV2Efnuk7B.stake.call(uintVOPvkFB, {from: "0x0000000000000000000000000000000000000001"});
		const uintHJ2TYyA = await PRDZstakingV2Efnuk7B.getTotalStaked.call({from: accounts[3]});
		const uintbhOZOL0 = await PRDZstakingV2Efnuk7B.unstake.call(uintXYPpbvh, {from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2efUHH4g = await PRDZstakingV2.new({from: accounts[4]});
		const addresskaQp9BQ = accounts[1]
		const addressC0WrW5E = "0x0000000000000000000000000000000000000001"
		const uintALeGD9z = await PRDZstakingV2efUHH4g.getNumberOfHolders.call({from: accounts[2]});
		const addressXbnNID7 = await PRDZstakingV2efUHH4g.transferOwnership.call(addresskaQp9BQ, {from: accounts[4]});
		const uintbATXNuD = await PRDZstakingV2efUHH4g.getScoreEth.call(addressC0WrW5E, {from: accounts[0]});

		assert.equal(uintALeGD9z, BigInt("0"))
		assert.equal(uintbATXNuD, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2in1XYT = await PRDZstakingV2.new({from: accounts[0]});
		const addressNQXxGXz = accounts[0]
		const uintn71H0k2 = BigInt("667")
		const addressz8vJ9Ar = await PRDZstakingV2in1XYT.transferOwnership.call(addressNQXxGXz, {from: accounts[0]});
//		await PRDZstakingV2in1XYT.claimReward.call({from: accounts[0]});
//		const uintWgFZsU0 = await PRDZstakingV2in1XYT.getTotalClaimed.call({from: accounts[4]});
//		const uintrkLFqyu = await PRDZstakingV2in1XYT.getTotalFeeCollected.call({from: accounts[2]});
//		const uintPWHtaG = await PRDZstakingV2in1XYT.stake.call(uintn71H0k2, {from: accounts[0]});

		await expect(PRDZstakingV2in1XYT.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mmxyrYM = await PRDZstakingV2.new({from: accounts[4]});
//		await PRDZstakingV2mmxyrYM.claimReward.call({from: accounts[1]});
//		const uintnRGJsF = await PRDZstakingV2mmxyrYM.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2mmxyrYM.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PT4qGU = await PRDZstakingV2.new({from: accounts[4]});
		const addressMoKyDFx = accounts[3]
		const addresstxh1AIE = accounts[4]
//		await PRDZstakingV2PT4qGU.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2PT4qGU.claimReward.call({from: accounts[1]});
//		const uinto4EbbLU = await PRDZstakingV2PT4qGU.getNumberOfHolders.call({from: accounts[4]});
//		const uintzQLQYck = await PRDZstakingV2PT4qGU.getStakingScore.call(addressMoKyDFx, {from: accounts[2]});
//		const addressxCOEoy7 = await PRDZstakingV2PT4qGU.transferOwnership.call(addresstxh1AIE, {from: accounts[2]});

		await expect(PRDZstakingV2PT4qGU.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2c9jbKT4 = await PRDZstakingV2.new({from: accounts[3]});
		const uintXLCv6MN = BigInt("855")
		const addressRHkRwRx = accounts[2]
//		const uintZpBfPN3 = await PRDZstakingV2c9jbKT4.unstake.call(uintXLCv6MN, {from: accounts[0]});
//		const uintZZQBKcU = await PRDZstakingV2c9jbKT4.getTotalFeeCollected.call({from: accounts[2]});
//		const uintqWJnTXb = await PRDZstakingV2c9jbKT4.getTotalFeeCollected.call({from: accounts[5]});
//		const addressLWmbqjV = await PRDZstakingV2c9jbKT4.transferOwnership.call(addressRHkRwRx, {from: accounts[2]});

		await expect(PRDZstakingV2c9jbKT4.unstake.call(uintXLCv6MN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2EPHsnap = await PRDZstakingV2.new({from: accounts[4]});
		const uintNW5Fbyd = BigInt("523")
		const uintPrnmVL0 = await PRDZstakingV2EPHsnap.getTotalStaked.call({from: accounts[3]});
		const uintGIAiuZS = await PRDZstakingV2EPHsnap.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintqR10NPk = await PRDZstakingV2EPHsnap.updateScoreEth.call(uintNW5Fbyd, {from: accounts[2]});
//		await PRDZstakingV2EPHsnap.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGIAiuZS, BigInt("0"))
		assert.equal(uintPrnmVL0, BigInt("0"))
		await expect(PRDZstakingV2EPHsnap.updateScoreEth.call(uintNW5Fbyd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PT4qGU = await PRDZstakingV2.new({from: accounts[4]});
		const addressfZ45Lo = accounts[3]
//		await PRDZstakingV2PT4qGU.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2PT4qGU.claimReward.call({from: accounts[1]});
//		const uinto4EbbLU = await PRDZstakingV2PT4qGU.getNumberOfHolders.call({from: accounts[4]});
//		await PRDZstakingV2PT4qGU.deposit.call({from: accounts[2]});
//		const uintzQLQYck = await PRDZstakingV2PT4qGU.getStakingScore.call(addressfZ45Lo, {from: accounts[2]});

		await expect(PRDZstakingV2PT4qGU.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2efUHH4g = await PRDZstakingV2.new({from: accounts[4]});
		const uinth046vMR = BigInt("1645")
		const addressgV5xxD = "0x0000000000000000000000000000000000000001"
//		await PRDZstakingV2efUHH4g.claimReward.call({from: accounts[2]});
//		const uintPkrzX1T = await PRDZstakingV2efUHH4g.getTotalStaked.call({from: accounts[2]});
//		await PRDZstakingV2efUHH4g.deposit.call({from: accounts[2]});
//		const uintocmrSoy = await PRDZstakingV2efUHH4g.updateScoreEth.call(uinth046vMR, {from: accounts[4]});
//		const uintALeGD9z = await PRDZstakingV2efUHH4g.getNumberOfHolders.call({from: accounts[2]});
//		const uintbATXNuD = await PRDZstakingV2efUHH4g.getScoreEth.call(addressgV5xxD, {from: accounts[0]});

		await expect(PRDZstakingV2efUHH4g.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pwTzLR5 = await PRDZstakingV2.new({from: accounts[4]});
		const addresslO6TuSq = accounts[2]
		const uintc8IeNVH = await PRDZstakingV2pwTzLR5.getScoreEth.call(addresslO6TuSq, {from: accounts[3]});
//		await PRDZstakingV2pwTzLR5.onlyOwner.call({from: accounts[0]});
//		const uintERuqKO = await PRDZstakingV2pwTzLR5.getTotalClaimed.call({from: accounts[2]});
//		await PRDZstakingV2pwTzLR5.claimReward.call({from: accounts[4]});

		assert.equal(uintc8IeNVH, BigInt("0"))
		await expect(PRDZstakingV2pwTzLR5.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2IaoUHej = await PRDZstakingV2.new({from: accounts[1]});
		const uintGst7AzU = BigInt("1300")
		const uintIn2hAhN = BigInt("1873")
//		await PRDZstakingV2IaoUHej.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2IaoUHej.deposit.call({from: accounts[4]});
//		const uintTEhD19h = await PRDZstakingV2IaoUHej.updateOffer.call(uintIn2hAhN, uintGst7AzU, {from: accounts[1]});

		await expect(PRDZstakingV2IaoUHej.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2IaoUHej = await PRDZstakingV2.new({from: accounts[1]});
		const uintkgHnUOy = BigInt("0")
		const addressQ5Tzqc = accounts[4]
//		await PRDZstakingV2IaoUHej.claimScoreEth.call({from: accounts[2]});
//		const uintYgnxjID = await PRDZstakingV2IaoUHej.getTotalUnStaked.call({from: accounts[0]});
//		const uint0kpfa0 = await PRDZstakingV2IaoUHej.unstake.call(uintkgHnUOy, {from: "0x0000000000000000000000000000000000000001"});
//		const uintgn9y61h = await PRDZstakingV2IaoUHej.getStakingScore.call(addressQ5Tzqc, {from: accounts[2]});

		await expect(PRDZstakingV2IaoUHej.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2efUHH4g = await PRDZstakingV2.new({from: accounts[4]});
		const addressWPpX7SK = accounts[4]
		const addressrNbwgR7 = accounts[1]
		const uintFmLk7Xt = BigInt("0")
		const uintYg7GTbI = await PRDZstakingV2efUHH4g.getScoreEth.call(addressWPpX7SK, {from: accounts[2]});
		const uinttSXCPPU = await PRDZstakingV2efUHH4g.getPendingReward.call(addressrNbwgR7, {from: accounts[1]});
		const uintaLc5fgX = await PRDZstakingV2efUHH4g.getTotalFeeCollected.call({from: accounts[1]});
//		const uintJtVxRm = await PRDZstakingV2efUHH4g.stake.call(uintFmLk7Xt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintYg7GTbI, BigInt("0"))
		assert.equal(uintaLc5fgX, BigInt("0"))
		assert.equal(uinttSXCPPU, BigInt("0"))
		await expect(PRDZstakingV2efUHH4g.stake.call(uintFmLk7Xt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})