const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2b6CSffL = await PRDZstakingV2.new({from: accounts[1]});
		const addressQGMvqp = accounts[4]
		await PRDZstakingV2b6CSffL.deposit.call({from: accounts[2]});
		const uintiUrBPV = await PRDZstakingV2b6CSffL.getTotalUnStaked.call({from: accounts[2]});
		const addressMha9i5i = await PRDZstakingV2b6CSffL.transferOwnership.call(addressQGMvqp, {from: accounts[0]});
		const uintd0QJ3VC = await PRDZstakingV2b6CSffL.getTotalStaked.call({from: accounts[1]});

		await expect(PRDZstakingV2b6CSffL.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2b39NIAH = await PRDZstakingV2.new({from: accounts[3]});
		const uintr09orde = BigInt("1691")
		const uintOzJqE6N = BigInt("1053")
		const uintKkvtg19 = await PRDZstakingV2b39NIAH.updateOffer.call(uintOzJqE6N, uintr09orde, {from: accounts[3]});
		const uintFNR99qg = await PRDZstakingV2b39NIAH.getNumberOfHolders.call({from: accounts[4]});
		const uintV6DoSPa = await PRDZstakingV2b39NIAH.getNumberOfHolders.call({from: accounts[0]});
		await PRDZstakingV2b39NIAH.claimReward.call({from: accounts[4]});
		await PRDZstakingV2b39NIAH.deposit.call({from: accounts[0]});
		await PRDZstakingV2b39NIAH.deposit.call({from: accounts[4]});

		assert.equal(uintFNR99qg, BigInt("0"))
		assert.equal(uintV6DoSPa, BigInt("0"))
		await expect(PRDZstakingV2b39NIAH.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2qLAPRi7 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgmlS16S = BigInt("1356")
		const addressXJB1Yl = accounts[1]
		const address9z1WsT = accounts[2]
		const addressy8hh410 = accounts[1]
		const addresstR6hgPF = accounts[3]
		const uintbch08l3 = await PRDZstakingV2qLAPRi7.stake.call(uintgmlS16S, {from: "0x0000000000000000000000000000000000000001"});
		const uinthHWbBMm = await PRDZstakingV2qLAPRi7.getScoreEth.call(addressXJB1Yl, {from: accounts[0]});
		const uintNDAhxk = await PRDZstakingV2qLAPRi7.getScoreEth.call(address9z1WsT, {from: accounts[4]});
		const uintl6YYvbT = await PRDZstakingV2qLAPRi7.getTotalClaimed.call({from: accounts[4]});
		const uintnLBblO = await PRDZstakingV2qLAPRi7.getScoreEth.call(addressy8hh410, {from: accounts[0]});
		const uinthj15B3r = await PRDZstakingV2qLAPRi7.getScoreEth.call(addresstR6hgPF, {from: accounts[2]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fhNJvpc = await PRDZstakingV2.new({from: accounts[4]});
		const addressjC5cWZn = accounts[4]
		const uintrWJBOmE = BigInt("101")
		const addressZ0EGFsP = accounts[1]
		const uintaNzKrSQ = await PRDZstakingV2fhNJvpc.getScoreEth.call(addressjC5cWZn, {from: accounts[4]});
		const uintncklc5z = await PRDZstakingV2fhNJvpc.stake.call(uintrWJBOmE, {from: accounts[4]});
		await PRDZstakingV2fhNJvpc.claimScoreEth.call({from: accounts[1]});
		const uintdUymLr = await PRDZstakingV2fhNJvpc.getStakingScore.call(addressZ0EGFsP, {from: accounts[4]});

		assert.equal(uintaNzKrSQ, BigInt("0"))
		await expect(PRDZstakingV2fhNJvpc.stake.call(uintrWJBOmE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2liSUSz1 = await PRDZstakingV2.new({from: accounts[3]});
		const uintAhbzZFG = BigInt("1514")
		const uintvUsGoNd = await PRDZstakingV2liSUSz1.getTotalFeeCollected.call({from: accounts[0]});
		await PRDZstakingV2liSUSz1.onlyOwner.call({from: accounts[0]});
		const uintia3kGL4 = await PRDZstakingV2liSUSz1.unstake.call(uintAhbzZFG, {from: accounts[2]});

		assert.equal(uintvUsGoNd, BigInt("0"))
		await expect(PRDZstakingV2liSUSz1.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ANkVdvd = await PRDZstakingV2.new({from: accounts[1]});
		const uintIQtdAqL = BigInt("760")
		const addresseHUxTAG = accounts[2]
		await PRDZstakingV2ANkVdvd.deposit.call({from: accounts[5]});
		const uintNZFR518 = await PRDZstakingV2ANkVdvd.getTotalClaimed.call({from: accounts[1]});
		const uintn9I6HEw = await PRDZstakingV2ANkVdvd.updateScoreEth.call(uintIQtdAqL, {from: accounts[3]});
		const uintk4rl4YE = await PRDZstakingV2ANkVdvd.getScoreEth.call(addresseHUxTAG, {from: accounts[5]});

		await expect(PRDZstakingV2ANkVdvd.deposit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oRIbKY = await PRDZstakingV2.new({from: accounts[1]});
		const uintvQ5P691 = await PRDZstakingV2oRIbKY.getTotalUnStaked.call({from: accounts[0]});
		await PRDZstakingV2oRIbKY.claimScoreEth.call({from: accounts[1]});

		assert.equal(uintvQ5P691, BigInt("0"))
		await expect(PRDZstakingV2oRIbKY.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2IRNOgrm = await PRDZstakingV2.new({from: accounts[4]});
		const addressKVwBAw = accounts[1]
		const addressH7z5JiI = accounts[2]
		const uintqn1aHmL = await PRDZstakingV2IRNOgrm.getStakingScore.call(addressKVwBAw, {from: accounts[3]});
		const uintpKHcGm = await PRDZstakingV2IRNOgrm.getScoreEth.call(addressH7z5JiI, {from: accounts[1]});
		const uintmxq4St = await PRDZstakingV2IRNOgrm.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uintmxq4St, BigInt("0"))
		assert.equal(uintpKHcGm, BigInt("0"))
		assert.equal(uintqn1aHmL, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2b39NIAH = await PRDZstakingV2.new({from: accounts[3]});
		const uintNJOmwMu = BigInt("1691")
		const uintH1qGUAE = BigInt("1053")
		const addressaGdWDwF = accounts[4]
		const uintDe63e5h = BigInt("939")
		const uintKkvtg19 = await PRDZstakingV2b39NIAH.updateOffer.call(uintH1qGUAE, uintNJOmwMu, {from: accounts[3]});
		const uintAgazBRf = await PRDZstakingV2b39NIAH.getStakingScore.call(addressaGdWDwF, {from: accounts[3]});
		const uintV6DoSPa = await PRDZstakingV2b39NIAH.getNumberOfHolders.call({from: accounts[0]});
		await PRDZstakingV2b39NIAH.claimReward.call({from: accounts[4]});
		await PRDZstakingV2b39NIAH.deposit.call({from: accounts[4]});
		const uintdfk0kQ = await PRDZstakingV2b39NIAH.unstake.call(uintDe63e5h, {from: accounts[1]});

		assert.equal(uintAgazBRf, BigInt("0"))
		assert.equal(uintV6DoSPa, BigInt("0"))
		await expect(PRDZstakingV2b39NIAH.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2b39NIAH = await PRDZstakingV2.new({from: accounts[3]});
		const uintneM41Q8 = BigInt("1691")
		const uintFrSQ1wP = BigInt("1053")
		const addresst7Soa59 = accounts[2]
		const uintctlpw8T = BigInt("2035")
		const addresstID5t1R = accounts[2]
		const uintKkvtg19 = await PRDZstakingV2b39NIAH.updateOffer.call(uintFrSQ1wP, uintneM41Q8, {from: accounts[3]});
		const uintFNR99qg = await PRDZstakingV2b39NIAH.getNumberOfHolders.call({from: accounts[4]});
		const uintwPJtRs = await PRDZstakingV2b39NIAH.getTotalStaked.call({from: accounts[3]});
		const uintV6DoSPa = await PRDZstakingV2b39NIAH.getNumberOfHolders.call({from: accounts[0]});
		const uintocQKpn = await PRDZstakingV2b39NIAH.getScoreEth.call(addresst7Soa59, {from: accounts[5]});
		await PRDZstakingV2b39NIAH.claimReward.call({from: accounts[4]});
		await PRDZstakingV2b39NIAH.deposit.call({from: accounts[0]});
		const uintcwfa1DR = await PRDZstakingV2b39NIAH.unstake.call(uintctlpw8T, {from: accounts[0]});
		await PRDZstakingV2b39NIAH.deposit.call({from: accounts[4]});
		const addressxBAO87T = await PRDZstakingV2b39NIAH.transferOwnership.call(addresstID5t1R, {from: accounts[3]});

		assert.equal(uintFNR99qg, BigInt("0"))
		assert.equal(uintV6DoSPa, BigInt("0"))
		assert.equal(uintocQKpn, BigInt("0"))
		assert.equal(uintwPJtRs, BigInt("0"))
		await expect(PRDZstakingV2b39NIAH.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ce0u4z = await PRDZstakingV2.new({from: accounts[0]});
		const addressylxqJCL = accounts[3]
		const addressvbkwluk = await PRDZstakingV2ce0u4z.transferOwnership.call(addressylxqJCL, {from: accounts[0]});
		await PRDZstakingV2ce0u4z.claimReward.call({from: accounts[3]});
		await PRDZstakingV2ce0u4z.claimScoreEth.call({from: accounts[1]});

		await expect(PRDZstakingV2ce0u4z.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2IRNOgrm = await PRDZstakingV2.new({from: accounts[4]});
		const addressJPrBdZK = accounts[2]
		const uintlYqDpgb = BigInt("1574")
		const uinty9sVKCn = BigInt("587")
		const uintf0UcQem = BigInt("958")
		const addressFSpakk = accounts[0]
		const uintqn1aHmL = await PRDZstakingV2IRNOgrm.getStakingScore.call(addressJPrBdZK, {from: accounts[3]});
		const uintwfVq9Si = await PRDZstakingV2IRNOgrm.updateScoreEth.call(uintlYqDpgb, {from: accounts[4]});
		const uintlAjBEJN = await PRDZstakingV2IRNOgrm.updateScoreEth.call(uinty9sVKCn, {from: accounts[1]});
		await PRDZstakingV2IRNOgrm.claimScoreEth.call({from: accounts[1]});
		const uintoWJQkg = await PRDZstakingV2IRNOgrm.unstake.call(uintf0UcQem, {from: accounts[2]});
		const uintFFVrwN3 = await PRDZstakingV2IRNOgrm.getPendingReward.call(addressFSpakk, {from: accounts[0]});

		assert.equal(uintqn1aHmL, BigInt("0"))
		await expect(PRDZstakingV2IRNOgrm.updateScoreEth.call(uinty9sVKCn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2IRNOgrm = await PRDZstakingV2.new({from: accounts[4]});
		const uintvW0Xc3T = BigInt("0")
		const addressblzW4cw = accounts[1]
		const addresstzivD0P = accounts[0]
		const uintwllM1Im = await PRDZstakingV2IRNOgrm.getTotalStaked.call({from: accounts[1]});
		const uintmnRxUg0 = await PRDZstakingV2IRNOgrm.stake.call(uintvW0Xc3T, {from: accounts[3]});
		const addressXg4XXSV = await PRDZstakingV2IRNOgrm.transferOwnership.call(addressblzW4cw, {from: accounts[2]});
		const uintph6Fa2G = await PRDZstakingV2IRNOgrm.getScoreEth.call(addresstzivD0P, {from: accounts[3]});

		assert.equal(uintwllM1Im, BigInt("0"))
		await expect(PRDZstakingV2IRNOgrm.stake.call(uintvW0Xc3T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})