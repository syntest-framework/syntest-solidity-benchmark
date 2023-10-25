const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Bzzik8K = await PRDZstakingV2.new({from: accounts[1]});
		const addressr4PNXKZ = accounts[1]
		const uintHlGxQPt = BigInt("1300")
		const uintEOlpA1C = BigInt("158")
		const addressbUuk5G7 = accounts[2]
		await PRDZstakingV2Bzzik8K.onlyOwner.call({from: accounts[0]});
		const addressZdAct5N = await PRDZstakingV2Bzzik8K.transferOwnership.call(addressr4PNXKZ, {from: accounts[1]});
		const uintpKfUAu4 = await PRDZstakingV2Bzzik8K.updateOffer.call(uintEOlpA1C, uintHlGxQPt, {from: "0x0000000000000000000000000000000000000001"});
		const uintnD4Q62r = await PRDZstakingV2Bzzik8K.getTotalClaimed.call({from: accounts[0]});
		const uintjCXWFEq = await PRDZstakingV2Bzzik8K.getPendingReward.call(addressbUuk5G7, {from: accounts[4]});

		await expect(PRDZstakingV2Bzzik8K.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2uIgB1XF = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintm46gT4V = await PRDZstakingV2uIgB1XF.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2uIgB1XF.claimScoreEth.call({from: accounts[2]});
		const uintk2jhCGg = await PRDZstakingV2uIgB1XF.getNumberOfHolders.call({from: accounts[1]});
		const uintVB5yt9S = await PRDZstakingV2uIgB1XF.getTotalUnStaked.call({from: accounts[2]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bebEfC = await PRDZstakingV2.new({from: accounts[0]});
		const addresslKqswaM = accounts[3]
		const addressV8QuGJq = accounts[2]
		const uintUnGBTh8 = BigInt("742")
		const uintO2pmd9P = BigInt("1515")
		const uintBadJFs5 = await PRDZstakingV2bebEfC.getTotalClaimed.call({from: accounts[1]});
		const uintxvuxbbo = await PRDZstakingV2bebEfC.getScoreEth.call(addresslKqswaM, {from: accounts[3]});
		const uintQDll3gX = await PRDZstakingV2bebEfC.getStakingScore.call(addressV8QuGJq, {from: accounts[1]});
		const uintFDEMvqI = await PRDZstakingV2bebEfC.updateOffer.call(uintO2pmd9P, uintUnGBTh8, {from: accounts[1]});
		await PRDZstakingV2bebEfC.onlyOwner.call({from: accounts[1]});

		assert.equal(uintBadJFs5, BigInt("0"))
		assert.equal(uintQDll3gX, BigInt("0"))
		assert.equal(uintxvuxbbo, BigInt("0"))
		await expect(PRDZstakingV2bebEfC.updateOffer.call(uintO2pmd9P, uintUnGBTh8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2viWhzEi = await PRDZstakingV2.new({from: accounts[0]});
		const uintMVcC0ZP = BigInt("2038")
		const uintv4JWz2i = BigInt("56")
		const addressq4spnFM = accounts[1]
		const uintUjUJtQg = BigInt("1644")
		const uintvofvZsY = await PRDZstakingV2viWhzEi.getTotalUnStaked.call({from: accounts[1]});
		const uintqBHDZc1 = await PRDZstakingV2viWhzEi.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintGZBitD3 = await PRDZstakingV2viWhzEi.unstake.call(uintMVcC0ZP, {from: accounts[3]});
		const uintZMbHZT = await PRDZstakingV2viWhzEi.stake.call(uintv4JWz2i, {from: accounts[3]});
		const uintsF998R6 = await PRDZstakingV2viWhzEi.getPendingReward.call(addressq4spnFM, {from: accounts[0]});
		const uintR4yAb3Y = await PRDZstakingV2viWhzEi.unstake.call(uintUjUJtQg, {from: accounts[1]});

		assert.equal(uintqBHDZc1, BigInt("0"))
		assert.equal(uintvofvZsY, BigInt("0"))
		await expect(PRDZstakingV2viWhzEi.unstake.call(uintMVcC0ZP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FCQqMFV = await PRDZstakingV2.new({from: accounts[1]});
		const addresslA2Tl1T = accounts[0]
		await PRDZstakingV2FCQqMFV.claimReward.call({from: accounts[1]});
		const addressSca7GmT = await PRDZstakingV2FCQqMFV.transferOwnership.call(addresslA2Tl1T, {from: accounts[4]});

		await expect(PRDZstakingV2FCQqMFV.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2imFjGeg = await PRDZstakingV2.new({from: accounts[5]});
		const uintGrYwXh6 = await PRDZstakingV2imFjGeg.getNumberOfHolders.call({from: accounts[2]});
		const uint3EMeXT = await PRDZstakingV2imFjGeg.getTotalClaimed.call({from: accounts[2]});
		await PRDZstakingV2imFjGeg.deposit.call({from: accounts[2]});

		assert.equal(uint3EMeXT, BigInt("0"))
		assert.equal(uintGrYwXh6, BigInt("0"))
		await expect(PRDZstakingV2imFjGeg.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FCQqMFV = await PRDZstakingV2.new({from: accounts[1]});
		const addressb8wDY88 = "0x0000000000000000000000000000000000000001"
		const addresstYjDdf1 = accounts[0]
		const uintiPomiJ = await PRDZstakingV2FCQqMFV.getStakingScore.call(addressb8wDY88, {from: accounts[1]});
		await PRDZstakingV2FCQqMFV.claimReward.call({from: accounts[4]});
		await PRDZstakingV2FCQqMFV.claimScoreEth.call({from: accounts[2]});
		const addressSca7GmT = await PRDZstakingV2FCQqMFV.transferOwnership.call(addresstYjDdf1, {from: accounts[4]});
		const uintGrJuKnt = await PRDZstakingV2FCQqMFV.getTotalClaimed.call({from: accounts[2]});

		assert.equal(uintiPomiJ, BigInt("0"))
		await expect(PRDZstakingV2FCQqMFV.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2E4zooku = await PRDZstakingV2.new({from: accounts[4]});
		const addressxYQAJ9S = accounts[2]
		const uintqoXatUd = await PRDZstakingV2E4zooku.getTotalFeeCollected.call({from: accounts[4]});
		await PRDZstakingV2E4zooku.deposit.call({from: accounts[1]});
		const uintUVxnHUU = await PRDZstakingV2E4zooku.getTotalFeeCollected.call({from: accounts[5]});
		const addressmG7skcx = await PRDZstakingV2E4zooku.transferOwnership.call(addressxYQAJ9S, {from: accounts[4]});

		assert.equal(uintqoXatUd, BigInt("0"))
		await expect(PRDZstakingV2E4zooku.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bebEfC = await PRDZstakingV2.new({from: accounts[0]});
		const addressImh6k35 = accounts[3]
		const uintMeXoTYg = BigInt("2013")
		const addressVFG2g3W = accounts[3]
		const uintxvuxbbo = await PRDZstakingV2bebEfC.getScoreEth.call(addressImh6k35, {from: accounts[3]});
		const uinti8bDlKN = await PRDZstakingV2bebEfC.stake.call(uintMeXoTYg, {from: accounts[2]});
		const uintQDll3gX = await PRDZstakingV2bebEfC.getStakingScore.call(addressVFG2g3W, {from: accounts[1]});
		await PRDZstakingV2bebEfC.onlyOwner.call({from: accounts[1]});

		assert.equal(uintxvuxbbo, BigInt("0"))
		await expect(PRDZstakingV2bebEfC.stake.call(uintMeXoTYg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FCQqMFV = await PRDZstakingV2.new({from: accounts[1]});
		const uintYdjYJu = BigInt("974")
		const addressstoa6nT = accounts[1]
		await PRDZstakingV2FCQqMFV.claimReward.call({from: accounts[1]});
		await PRDZstakingV2FCQqMFV.claimScoreEth.call({from: accounts[1]});
		const uintbmTfnR = await PRDZstakingV2FCQqMFV.updateScoreEth.call(uintYdjYJu, {from: accounts[1]});
		const uintxx9NDpA = await PRDZstakingV2FCQqMFV.getTotalStaked.call({from: accounts[3]});
		const addressSca7GmT = await PRDZstakingV2FCQqMFV.transferOwnership.call(addressstoa6nT, {from: accounts[4]});

		await expect(PRDZstakingV2FCQqMFV.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Q07VSn = await PRDZstakingV2.new({from: accounts[2]});
		const uinthffcdzY = BigInt("1766")
		const uintxNu5CUf = BigInt("723")
		const uintgP0506R = BigInt("1644")
		const uintElKcduq = BigInt("882")
		await PRDZstakingV2Q07VSn.deposit.call({from: accounts[4]});
		const uintJgEqvUh = await PRDZstakingV2Q07VSn.updateOffer.call(uintxNu5CUf, uinthffcdzY, {from: accounts[2]});
		const uintHzwWN4 = await PRDZstakingV2Q07VSn.unstake.call(uintgP0506R, {from: accounts[2]});
		const uintozs9JLz = await PRDZstakingV2Q07VSn.unstake.call(uintElKcduq, {from: accounts[5]});

		await expect(PRDZstakingV2Q07VSn.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bebEfC = await PRDZstakingV2.new({from: accounts[0]});
		const uintRG8IG3N = BigInt("0")
		const addressBuYqgFE = accounts[2]
		const uintJ2Vbx2z = BigInt("208")
		const uintmxlNhQs = BigInt("1138")
		const uintl6ndUfJ = await PRDZstakingV2bebEfC.stake.call(uintRG8IG3N, {from: accounts[1]});
		const uintG3nWOvh = await PRDZstakingV2bebEfC.getTotalFeeCollected.call({from: accounts[3]});
		await PRDZstakingV2bebEfC.claimScoreEth.call({from: accounts[0]});
		await PRDZstakingV2bebEfC.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintIcc4xWp = await PRDZstakingV2bebEfC.getTotalUnStaked.call({from: accounts[4]});
		const uinthEMcyx = await PRDZstakingV2bebEfC.getScoreEth.call(addressBuYqgFE, {from: accounts[3]});
		const uintoscf5bF = await PRDZstakingV2bebEfC.updateOffer.call(uintmxlNhQs, uintJ2Vbx2z, {from: accounts[2]});

		await expect(PRDZstakingV2bebEfC.stake.call(uintRG8IG3N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})