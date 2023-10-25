const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2apZG2Ps = await PRDZstakingV2.new({from: accounts[2]});
//		await PRDZstakingV2apZG2Ps.onlyOwner.call({from: accounts[3]});
//		await PRDZstakingV2apZG2Ps.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2apZG2Ps.claimReward.call({from: accounts[3]});

		await expect(PRDZstakingV2apZG2Ps.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rC4QkwI = await PRDZstakingV2.new({from: accounts[3]});
		const addresssR7oWi7 = accounts[0]
		const uintBwBde89 = BigInt("1112")
		const uintWQd8QGa = BigInt("714")
		const uintEDnSqg6 = await PRDZstakingV2rC4QkwI.getTotalClaimed.call({from: accounts[3]});
		const uintYWwLPZO = await PRDZstakingV2rC4QkwI.getScoreEth.call(addresssR7oWi7, {from: accounts[3]});
//		await PRDZstakingV2rC4QkwI.claimReward.call({from: accounts[2]});
//		await PRDZstakingV2rC4QkwI.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinth6LjMQf = await PRDZstakingV2rC4QkwI.updateOffer.call(uintWQd8QGa, uintBwBde89, {from: accounts[4]});

		assert.equal(uintEDnSqg6, BigInt("0"))
		assert.equal(uintYWwLPZO, BigInt("0"))
		await expect(PRDZstakingV2rC4QkwI.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hZTJEDF = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2hZTJEDF.claimReward.call({from: accounts[1]});
		await PRDZstakingV2hZTJEDF.onlyOwner.call({from: accounts[1]});
		const uintJC2HcbV = await PRDZstakingV2hZTJEDF.getTotalFeeCollected.call({from: accounts[0]});
		await PRDZstakingV2hZTJEDF.claimReward.call({from: accounts[0]});
		await PRDZstakingV2hZTJEDF.onlyOwner.call({from: accounts[0]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2M9bxDCw = await PRDZstakingV2.new({from: accounts[4]});
		const addressmSInvH2 = accounts[4]
		const uintQa6y2XU = BigInt("117")
		const addressuYeBMGJ = accounts[0]
		const uintBJemqKD = await PRDZstakingV2M9bxDCw.getPendingReward.call(addressmSInvH2, {from: accounts[1]});
		const uintiFs8FN = await PRDZstakingV2M9bxDCw.getNumberOfHolders.call({from: accounts[2]});
//		const uintuBDD6JQ = await PRDZstakingV2M9bxDCw.stake.call(uintQa6y2XU, {from: accounts[1]});
//		const uintfiiNJ9 = await PRDZstakingV2M9bxDCw.getPendingReward.call(addressuYeBMGJ, {from: accounts[4]});

		assert.equal(uintBJemqKD, BigInt("0"))
		assert.equal(uintiFs8FN, BigInt("0"))
		await expect(PRDZstakingV2M9bxDCw.stake.call(uintQa6y2XU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QzLT9oy = await PRDZstakingV2.new({from: accounts[3]});
		const uintG79EwFZ = BigInt("1962")
//		await PRDZstakingV2QzLT9oy.deposit.call({from: accounts[0]});
//		await PRDZstakingV2QzLT9oy.claimReward.call({from: accounts[0]});
//		const uintyfNDDEL = await PRDZstakingV2QzLT9oy.getTotalUnStaked.call({from: accounts[2]});
//		const uintTci9CaQ = await PRDZstakingV2QzLT9oy.updateScoreEth.call(uintG79EwFZ, {from: accounts[1]});

		await expect(PRDZstakingV2QzLT9oy.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2iW1h4wq = await PRDZstakingV2.new({from: accounts[2]});
		const uintJot4EuH = BigInt("1719")
		const uintlgzdSK = await PRDZstakingV2iW1h4wq.updateScoreEth.call(uintJot4EuH, {from: accounts[2]});
		const uintmGiaZGo = await PRDZstakingV2iW1h4wq.getNumberOfHolders.call({from: accounts[4]});
		const uintslIMgbM = await PRDZstakingV2iW1h4wq.getNumberOfHolders.call({from: accounts[4]});
		const uintjW9H1cu = await PRDZstakingV2iW1h4wq.getTotalUnStaked.call({from: accounts[1]});
		const uintbGD1iMh = await PRDZstakingV2iW1h4wq.getNumberOfHolders.call({from: accounts[3]});

		assert.equal(uintbGD1iMh, BigInt("0"))
		assert.equal(uintjW9H1cu, BigInt("0"))
		assert.equal(uintmGiaZGo, BigInt("0"))
		assert.equal(uintslIMgbM, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rC4QkwI = await PRDZstakingV2.new({from: accounts[3]});
		const address84QEnm = accounts[5]
		const addressa4t4IDi = accounts[0]
		const uinttbmnGfN = BigInt("1112")
		const uintwZIW4s5 = BigInt("714")
		const uintEDnSqg6 = await PRDZstakingV2rC4QkwI.getTotalClaimed.call({from: accounts[3]});
		const uintEfNbXdQ = await PRDZstakingV2rC4QkwI.getNumberOfHolders.call({from: accounts[4]});
		const uintq3l5OlE = await PRDZstakingV2rC4QkwI.getStakingScore.call(address84QEnm, {from: accounts[5]});
		const uintYWwLPZO = await PRDZstakingV2rC4QkwI.getScoreEth.call(addressa4t4IDi, {from: accounts[3]});
//		await PRDZstakingV2rC4QkwI.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinth6LjMQf = await PRDZstakingV2rC4QkwI.updateOffer.call(uintwZIW4s5, uinttbmnGfN, {from: accounts[4]});

		assert.equal(uintEDnSqg6, BigInt("0"))
		assert.equal(uintEfNbXdQ, BigInt("0"))
		assert.equal(uintYWwLPZO, BigInt("0"))
		assert.equal(uintq3l5OlE, BigInt("0"))
		await expect(PRDZstakingV2rC4QkwI.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QzLT9oy = await PRDZstakingV2.new({from: accounts[3]});
		const uintoEhvbgx = BigInt("1105")
		const uintCb4aXqa = BigInt("1962")
//		await PRDZstakingV2QzLT9oy.deposit.call({from: accounts[0]});
//		await PRDZstakingV2QzLT9oy.claimReward.call({from: accounts[0]});
//		const uintawHMgH = await PRDZstakingV2QzLT9oy.unstake.call(uintoEhvbgx, {from: accounts[1]});
//		const uintyfNDDEL = await PRDZstakingV2QzLT9oy.getTotalUnStaked.call({from: accounts[2]});
//		const uintK2vl6hH = await PRDZstakingV2QzLT9oy.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintTci9CaQ = await PRDZstakingV2QzLT9oy.updateScoreEth.call(uintCb4aXqa, {from: accounts[1]});

		await expect(PRDZstakingV2QzLT9oy.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rC4QkwI = await PRDZstakingV2.new({from: accounts[3]});
		const addressD88NK85 = accounts[5]
		const addresspAMdhi1 = accounts[0]
		const uintlWDDQvH = BigInt("1143")
		const uintmFkLUGu = BigInt("714")
		const uintEDnSqg6 = await PRDZstakingV2rC4QkwI.getTotalClaimed.call({from: accounts[3]});
		const uintEfNbXdQ = await PRDZstakingV2rC4QkwI.getNumberOfHolders.call({from: accounts[4]});
		const uinteIPlhuV = await PRDZstakingV2rC4QkwI.getTotalFeeCollected.call({from: accounts[3]});
		const uintq3l5OlE = await PRDZstakingV2rC4QkwI.getStakingScore.call(addressD88NK85, {from: accounts[5]});
//		await PRDZstakingV2rC4QkwI.deposit.call({from: accounts[2]});
//		const uintYWwLPZO = await PRDZstakingV2rC4QkwI.getScoreEth.call(addresspAMdhi1, {from: accounts[3]});
//		await PRDZstakingV2rC4QkwI.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinth6LjMQf = await PRDZstakingV2rC4QkwI.updateOffer.call(uintmFkLUGu, uintlWDDQvH, {from: accounts[4]});

		assert.equal(uintEDnSqg6, BigInt("0"))
		assert.equal(uintEfNbXdQ, BigInt("0"))
		assert.equal(uinteIPlhuV, BigInt("0"))
		assert.equal(uintq3l5OlE, BigInt("0"))
		await expect(PRDZstakingV2rC4QkwI.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rC4QkwI = await PRDZstakingV2.new({from: accounts[3]});
		const address5IJsk2 = accounts[1]
		const addressZLNoPyJ = accounts[3]
		const uintYWwLPZO = await PRDZstakingV2rC4QkwI.getScoreEth.call(address5IJsk2, {from: accounts[3]});
		const addresssb9KoL = await PRDZstakingV2rC4QkwI.transferOwnership.call(addressZLNoPyJ, {from: accounts[3]});
//		await PRDZstakingV2rC4QkwI.claimReward.call({from: accounts[2]});
//		await PRDZstakingV2rC4QkwI.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintYWwLPZO, BigInt("0"))
		await expect(PRDZstakingV2rC4QkwI.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QzLT9oy = await PRDZstakingV2.new({from: accounts[3]});
		const addressIl0nrn4 = accounts[2]
		const uintOQ3kREY = await PRDZstakingV2QzLT9oy.getScoreEth.call(addressIl0nrn4, {from: accounts[5]});
		const uintvajbmow = await PRDZstakingV2QzLT9oy.getTotalStaked.call({from: accounts[0]});
//		await PRDZstakingV2QzLT9oy.claimReward.call({from: accounts[0]});

		assert.equal(uintOQ3kREY, BigInt("0"))
		assert.equal(uintvajbmow, BigInt("0"))
		await expect(PRDZstakingV2QzLT9oy.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QzLT9oy = await PRDZstakingV2.new({from: accounts[3]});
		const addressU3Phjn7 = accounts[1]
		const uintagDcw2D = BigInt("48")
		const uintVvpQzXE = BigInt("202")
		const uintePZMQu8 = await PRDZstakingV2QzLT9oy.getScoreEth.call(addressU3Phjn7, {from: accounts[4]});
		const uintYU0lwC1 = await PRDZstakingV2QzLT9oy.getNumberOfHolders.call({from: accounts[5]});
		const uintPckZ4ro = await PRDZstakingV2QzLT9oy.updateOffer.call(uintVvpQzXE, uintagDcw2D, {from: accounts[3]});

		assert.equal(uintYU0lwC1, BigInt("0"))
		assert.equal(uintePZMQu8, BigInt("0"))
	});
})