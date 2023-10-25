const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PzQoWP = await PRDZstakingV2.new({from: accounts[5]});
		const uintbIil6nq = BigInt("1666")
		const uintw88mGxC = await PRDZstakingV2PzQoWP.updateScoreEth.call(uintbIil6nq, {from: accounts[5]});
		const uintjlzS6E2 = await PRDZstakingV2PzQoWP.getNumberOfHolders.call({from: accounts[2]});
		const uintROmPeYh = await PRDZstakingV2PzQoWP.getTotalClaimed.call({from: accounts[2]});

		assert.equal(uintROmPeYh, BigInt("0"))
		assert.equal(uintjlzS6E2, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2AbO3uvb = await PRDZstakingV2.new({from: accounts[2]});
		const uintztdfNWG = BigInt("944")
//		const uintNd7tcNg = await PRDZstakingV2AbO3uvb.updateScoreEth.call(uintztdfNWG, {from: accounts[0]});
//		const uintzAsDa10 = await PRDZstakingV2AbO3uvb.getNumberOfHolders.call({from: accounts[3]});
//		const uintSEo4hf1 = await PRDZstakingV2AbO3uvb.getTotalFeeCollected.call({from: accounts[1]});

		await expect(PRDZstakingV2AbO3uvb.updateScoreEth.call(uintztdfNWG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ApzJijs = await PRDZstakingV2.new({from: accounts[4]});
		const uintlxtMJUP = await PRDZstakingV2ApzJijs.getTotalFeeCollected.call({from: accounts[1]});
		const uintdRcLrWG = await PRDZstakingV2ApzJijs.getTotalUnStaked.call({from: accounts[1]});

		assert.equal(uintdRcLrWG, BigInt("0"))
		assert.equal(uintlxtMJUP, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WpX6EUm = await PRDZstakingV2.new({from: accounts[0]});
		const addressRWGRovJ = "0x0000000000000000000000000000000000000001"
//		await PRDZstakingV2WpX6EUm.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressaof7hHw = await PRDZstakingV2WpX6EUm.transferOwnership.call(addressRWGRovJ, {from: accounts[4]});

		await expect(PRDZstakingV2WpX6EUm.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WUt4Jpn = await PRDZstakingV2.new({from: accounts[2]});
		const addresswlP2l7A = accounts[3]
		const uintNAvv7PE = BigInt("1956")
		const uintiC6L9ZO = await PRDZstakingV2WUt4Jpn.getPendingReward.call(addresswlP2l7A, {from: accounts[2]});
//		const uintPPS9cLc = await PRDZstakingV2WUt4Jpn.stake.call(uintNAvv7PE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintiC6L9ZO, BigInt("0"))
		await expect(PRDZstakingV2WUt4Jpn.stake.call(uintNAvv7PE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pTTspT8 = await PRDZstakingV2.new({from: accounts[4]});
		const addressKltCDC = accounts[2]
		const uintng88Qr7 = BigInt("93")
		const addressXDpHaul = accounts[0]
		const uintKYTGJnA = await PRDZstakingV2pTTspT8.getPendingReward.call(addressKltCDC, {from: accounts[1]});
//		const uintCdKP7LZ = await PRDZstakingV2pTTspT8.unstake.call(uintng88Qr7, {from: accounts[3]});
//		const uintSPtMAks = await PRDZstakingV2pTTspT8.getTotalClaimed.call({from: accounts[4]});
//		await PRDZstakingV2pTTspT8.claimReward.call({from: accounts[2]});
//		const uintARaH1w0 = await PRDZstakingV2pTTspT8.getScoreEth.call(addressXDpHaul, {from: accounts[2]});
//		await PRDZstakingV2pTTspT8.claimScoreEth.call({from: accounts[1]});

		assert.equal(uintKYTGJnA, BigInt("0"))
		await expect(PRDZstakingV2pTTspT8.unstake.call(uintng88Qr7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2P9M1K5l = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUZdCvhe = BigInt("908")
		const uintWGNceSx = BigInt("1579")
		const addressjXAkFl = accounts[0]
		const addressoYynnuu = accounts[2]
		const uintg6a3I9e = BigInt("898")
		const uintiY3VY1 = BigInt("1103")
		const uintyAbJoG = await PRDZstakingV2P9M1K5l.updateOffer.call(uintWGNceSx, uintUZdCvhe, {from: accounts[1]});
		const uintM8iPpOB = await PRDZstakingV2P9M1K5l.getStakingScore.call(addressjXAkFl, {from: accounts[2]});
		const addressFJQ23si = await PRDZstakingV2P9M1K5l.transferOwnership.call(addressoYynnuu, {from: accounts[4]});
		const uintvCIRyf3 = await PRDZstakingV2P9M1K5l.stake.call(uintg6a3I9e, {from: accounts[0]});
		const uintmv3vMm8 = await PRDZstakingV2P9M1K5l.unstake.call(uintiY3VY1, {from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ApzJijs = await PRDZstakingV2.new({from: accounts[4]});
		const uintlxtMJUP = await PRDZstakingV2ApzJijs.getTotalFeeCollected.call({from: accounts[1]});
		const uinth2ZPfq = await PRDZstakingV2ApzJijs.getTotalStaked.call({from: accounts[2]});
		const uintdRcLrWG = await PRDZstakingV2ApzJijs.getTotalUnStaked.call({from: accounts[1]});

		assert.equal(uintdRcLrWG, BigInt("0"))
		assert.equal(uinth2ZPfq, BigInt("0"))
		assert.equal(uintlxtMJUP, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PzQoWP = await PRDZstakingV2.new({from: accounts[5]});
		const uintoBhmHLE = BigInt("1666")
		const addressl6PI8Uq = accounts[3]
		const uintw88mGxC = await PRDZstakingV2PzQoWP.updateScoreEth.call(uintoBhmHLE, {from: accounts[5]});
		const uintOrwNJMu = await PRDZstakingV2PzQoWP.getScoreEth.call(addressl6PI8Uq, {from: accounts[1]});
		const uintjlzS6E2 = await PRDZstakingV2PzQoWP.getNumberOfHolders.call({from: accounts[2]});
		const uintROmPeYh = await PRDZstakingV2PzQoWP.getTotalClaimed.call({from: accounts[2]});

		assert.equal(uintOrwNJMu, BigInt("0"))
		assert.equal(uintROmPeYh, BigInt("0"))
		assert.equal(uintjlzS6E2, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pTTspT8 = await PRDZstakingV2.new({from: accounts[4]});
		const addressgzHl0GS = accounts[2]
		const addressOaqvllI = accounts[0]
		const uintKYTGJnA = await PRDZstakingV2pTTspT8.getPendingReward.call(addressgzHl0GS, {from: accounts[1]});
		const uintSPtMAks = await PRDZstakingV2pTTspT8.getTotalClaimed.call({from: accounts[4]});
//		await PRDZstakingV2pTTspT8.claimReward.call({from: accounts[2]});
//		const uintARaH1w0 = await PRDZstakingV2pTTspT8.getScoreEth.call(addressOaqvllI, {from: accounts[2]});
//		await PRDZstakingV2pTTspT8.claimScoreEth.call({from: accounts[1]});

		assert.equal(uintKYTGJnA, BigInt("0"))
		assert.equal(uintSPtMAks, BigInt("0"))
		await expect(PRDZstakingV2pTTspT8.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2LROzvnw = await PRDZstakingV2.new({from: accounts[1]});
		const addressKyPnoCW = accounts[3]
		const uintpAFYBhm = BigInt("36")
		const uintUe8OSy0 = BigInt("1106")
		const uintVolbeck = await PRDZstakingV2LROzvnw.getStakingScore.call(addressKyPnoCW, {from: accounts[4]});
		const uintHhWbBqL = await PRDZstakingV2LROzvnw.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uinttEms2Mu = await PRDZstakingV2LROzvnw.getTotalUnStaked.call({from: accounts[1]});
//		const uintvrmvY4M = await PRDZstakingV2LROzvnw.unstake.call(uintpAFYBhm, {from: accounts[2]});
//		const uintfTE30jw = await PRDZstakingV2LROzvnw.updateScoreEth.call(uintUe8OSy0, {from: accounts[0]});

		assert.equal(uintHhWbBqL, BigInt("0"))
		assert.equal(uintVolbeck, BigInt("0"))
		assert.equal(uinttEms2Mu, BigInt("0"))
		await expect(PRDZstakingV2LROzvnw.unstake.call(uintpAFYBhm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WpX6EUm = await PRDZstakingV2.new({from: accounts[0]});
		const addressDSSNFHh = "0x0000000000000000000000000000000000000002"
//		await PRDZstakingV2WpX6EUm.deposit.call({from: accounts[2]});
//		await PRDZstakingV2WpX6EUm.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressaof7hHw = await PRDZstakingV2WpX6EUm.transferOwnership.call(addressDSSNFHh, {from: accounts[4]});
//		const uintZ1OppHc = await PRDZstakingV2WpX6EUm.getNumberOfHolders.call({from: accounts[0]});

		await expect(PRDZstakingV2WpX6EUm.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2I2Ujrkf = await PRDZstakingV2.new({from: accounts[3]});
//		await PRDZstakingV2I2Ujrkf.onlyOwner.call({from: accounts[1]});
//		await PRDZstakingV2I2Ujrkf.claimReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2I2Ujrkf.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WUt4Jpn = await PRDZstakingV2.new({from: accounts[2]});
		const addresssVFypKT = accounts[4]
		const addressHm46N47 = accounts[1]
		const uintiC6L9ZO = await PRDZstakingV2WUt4Jpn.getPendingReward.call(addresssVFypKT, {from: accounts[2]});
		const addressOK7iyVA = await PRDZstakingV2WUt4Jpn.transferOwnership.call(addressHm46N47, {from: accounts[2]});

		assert.equal(uintiC6L9ZO, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WpX6EUm = await PRDZstakingV2.new({from: accounts[0]});
		const uintsqPC0lL = BigInt("484")
		const uintILLwD57 = BigInt("521")
		const addressrRk4PbU = accounts[5]
		const uintYhrOvYR = await PRDZstakingV2WpX6EUm.updateOffer.call(uintILLwD57, uintsqPC0lL, {from: accounts[0]});
//		await PRDZstakingV2WpX6EUm.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintL6qB1Ts = await PRDZstakingV2WpX6EUm.getTotalFeeCollected.call({from: accounts[1]});
//		const uintIqvdSFP = await PRDZstakingV2WpX6EUm.getTotalStaked.call({from: accounts[2]});
//		const uintoSqWPOM = await PRDZstakingV2WpX6EUm.getStakingScore.call(addressrRk4PbU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2WpX6EUm.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pTTspT8 = await PRDZstakingV2.new({from: accounts[4]});
		const addresssOX66Lb = accounts[3]
		const uintkbkk7lm = BigInt("0")
		const uintKYTGJnA = await PRDZstakingV2pTTspT8.getPendingReward.call(addresssOX66Lb, {from: accounts[1]});
//		await PRDZstakingV2pTTspT8.deposit.call({from: accounts[4]});
//		const uintXFitpzf = await PRDZstakingV2pTTspT8.stake.call(uintkbkk7lm, {from: accounts[1]});
//		await PRDZstakingV2pTTspT8.claimScoreEth.call({from: accounts[1]});

		assert.equal(uintKYTGJnA, BigInt("0"))
		await expect(PRDZstakingV2pTTspT8.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})