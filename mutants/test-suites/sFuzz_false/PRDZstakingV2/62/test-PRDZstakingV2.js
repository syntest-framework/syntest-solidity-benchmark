const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2HYsrLXO = await PRDZstakingV2.new({from: accounts[2]});
		const uinte4Q4FMe = BigInt("221")
		const addressZ7CsbdV = accounts[3]
		const addressiQUNWgE = accounts[3]
		const addresse2Xshu0 = accounts[4]
//		const uintcVaXn8 = await PRDZstakingV2HYsrLXO.unstake.call(uinte4Q4FMe, {from: accounts[5]});
//		const addressMiysnSJ = await PRDZstakingV2HYsrLXO.transferOwnership.call(addressZ7CsbdV, {from: accounts[1]});
//		const uintLpG41qv = await PRDZstakingV2HYsrLXO.getStakingScore.call(addressiQUNWgE, {from: accounts[1]});
//		const uintbnMBDSf = await PRDZstakingV2HYsrLXO.getScoreEth.call(addresse2Xshu0, {from: accounts[0]});
//		const uintkst4rLx = await PRDZstakingV2HYsrLXO.getTotalUnStaked.call({from: accounts[4]});

		await expect(PRDZstakingV2HYsrLXO.unstake.call(uinte4Q4FMe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NhPBdIh = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyCiuXTe = await PRDZstakingV2NhPBdIh.getTotalStaked.call({from: accounts[3]});
		await PRDZstakingV2NhPBdIh.claimReward.call({from: accounts[0]});
		const uintiHEIV6r = await PRDZstakingV2NhPBdIh.getNumberOfHolders.call({from: accounts[3]});
		await PRDZstakingV2NhPBdIh.claimScoreEth.call({from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2BFtNQFD = await PRDZstakingV2.new({from: accounts[3]});
		const addressq4TRlEY = accounts[5]
//		await PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2BFtNQFD.deposit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintxWRo27h = await PRDZstakingV2BFtNQFD.getStakingScore.call(addressq4TRlEY, {from: accounts[1]});

		await expect(PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RHWcuAQ = await PRDZstakingV2.new({from: accounts[0]});
		const uintSaHcGnQ = BigInt("1627")
		const addressyaTq7tc = accounts[3]
//		const uintVXhQVba = await PRDZstakingV2RHWcuAQ.updateScoreEth.call(uintSaHcGnQ, {from: accounts[4]});
//		const uintRbgb4P = await PRDZstakingV2RHWcuAQ.getTotalUnStaked.call({from: accounts[3]});
//		const addressFU4hVzS = await PRDZstakingV2RHWcuAQ.transferOwnership.call(addressyaTq7tc, {from: accounts[2]});

		await expect(PRDZstakingV2RHWcuAQ.updateScoreEth.call(uintSaHcGnQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2q5DL5W = await PRDZstakingV2.new({from: accounts[3]});
		const addressWDkPiXw = accounts[4]
//		await PRDZstakingV2q5DL5W.claimScoreEth.call({from: accounts[0]});
//		const uintGYMQik = await PRDZstakingV2q5DL5W.getNumberOfHolders.call({from: accounts[0]});
//		const uintXpAZrmI = await PRDZstakingV2q5DL5W.getStakingScore.call(addressWDkPiXw, {from: accounts[5]});
//		await PRDZstakingV2q5DL5W.claimScoreEth.call({from: accounts[3]});
//		const uintkFLCycb = await PRDZstakingV2q5DL5W.getTotalClaimed.call({from: accounts[0]});

		await expect(PRDZstakingV2q5DL5W.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2p19OjxY = await PRDZstakingV2.new({from: accounts[1]});
		const addressz5GSNb9 = accounts[0]
		const uintxrdd5Vg = BigInt("1092")
		const uintDwAwUea = await PRDZstakingV2p19OjxY.getPendingReward.call(addressz5GSNb9, {from: accounts[3]});
		const uintoHoFr9H = await PRDZstakingV2p19OjxY.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		const uintKaBuZvR = await PRDZstakingV2p19OjxY.getTotalClaimed.call({from: accounts[2]});
//		const uintcEckk4p = await PRDZstakingV2p19OjxY.unstake.call(uintxrdd5Vg, {from: accounts[3]});

		assert.equal(uintDwAwUea, BigInt("0"))
		assert.equal(uintKaBuZvR, BigInt("0"))
		assert.equal(uintoHoFr9H, BigInt("0"))
		await expect(PRDZstakingV2p19OjxY.unstake.call(uintxrdd5Vg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qtwq3Tr = await PRDZstakingV2.new({from: accounts[3]});
		const addressEczDu5g = accounts[4]
		const uintCkwnEk0 = await PRDZstakingV2Qtwq3Tr.getTotalClaimed.call({from: accounts[1]});
//		await PRDZstakingV2Qtwq3Tr.claimReward.call({from: accounts[3]});
//		const addressQpURaCI = await PRDZstakingV2Qtwq3Tr.transferOwnership.call(addressEczDu5g, {from: accounts[2]});

		assert.equal(uintCkwnEk0, BigInt("0"))
		await expect(PRDZstakingV2Qtwq3Tr.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2XEyYzyJ = await PRDZstakingV2.new({from: accounts[2]});
		const addressOzE0NP = "0x0000000000000000000000000000000000000001"
		const uintyqep2sl = BigInt("1186")
		const uintlELqHK3 = BigInt("809")
		const uintESnpWxY = BigInt("1065")
		const uintO9qEHUx = await PRDZstakingV2XEyYzyJ.getStakingScore.call(addressOzE0NP, {from: accounts[0]});
//		const uintFGeH5dU = await PRDZstakingV2XEyYzyJ.stake.call(uintyqep2sl, {from: accounts[2]});
//		const uintkoNKm5q = await PRDZstakingV2XEyYzyJ.unstake.call(uintlELqHK3, {from: accounts[5]});
//		const uintF3FrjRI = await PRDZstakingV2XEyYzyJ.stake.call(uintESnpWxY, {from: accounts[4]});
//		const uintMCXJxJl = await PRDZstakingV2XEyYzyJ.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintO9qEHUx, BigInt("0"))
		await expect(PRDZstakingV2XEyYzyJ.stake.call(uintyqep2sl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2KeUVKTh = await PRDZstakingV2.new({from: accounts[4]});
		const addressSj9OXm = accounts[2]
		const uintqLqY3ov = await PRDZstakingV2KeUVKTh.getStakingScore.call(addressSj9OXm, {from: accounts[0]});
//		await PRDZstakingV2KeUVKTh.onlyOwner.call({from: accounts[4]});
//		const uintBCuWnf9 = await PRDZstakingV2KeUVKTh.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintqLqY3ov, BigInt("0"))
		await expect(PRDZstakingV2KeUVKTh.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2BFtNQFD = await PRDZstakingV2.new({from: accounts[3]});
		const uintWVrI5yC = BigInt("33")
		const uintx3EtBy = BigInt("1003")
		const addresspRHmRcw = accounts[5]
//		await PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[3]});
//		const uinttavPQUg = await PRDZstakingV2BFtNQFD.updateOffer.call(uintx3EtBy, uintWVrI5yC, {from: accounts[3]});
//		await PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[1]});
//		const uintxWRo27h = await PRDZstakingV2BFtNQFD.getStakingScore.call(addresspRHmRcw, {from: accounts[1]});

		await expect(PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2KeUVKTh = await PRDZstakingV2.new({from: accounts[4]});
		const addressta2Rczh = accounts[2]
		const uintqLqY3ov = await PRDZstakingV2KeUVKTh.getStakingScore.call(addressta2Rczh, {from: accounts[0]});
		const uintVUOAviX = await PRDZstakingV2KeUVKTh.getTotalFeeCollected.call({from: accounts[4]});
//		await PRDZstakingV2KeUVKTh.onlyOwner.call({from: accounts[4]});
//		const uintBCuWnf9 = await PRDZstakingV2KeUVKTh.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintVUOAviX, BigInt("0"))
		assert.equal(uintqLqY3ov, BigInt("0"))
		await expect(PRDZstakingV2KeUVKTh.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qtwq3Tr = await PRDZstakingV2.new({from: accounts[3]});
		const addressyFmNYp = accounts[2]
		const address56FySW = "0x0000000000000000000000000000000000000001"
		const addressUOm8D2k = accounts[4]
		const uintCkwnEk0 = await PRDZstakingV2Qtwq3Tr.getTotalClaimed.call({from: accounts[1]});
		const uintBJEjjGR = await PRDZstakingV2Qtwq3Tr.getScoreEth.call(addressyFmNYp, {from: accounts[0]});
//		await PRDZstakingV2Qtwq3Tr.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2Qtwq3Tr.claimReward.call({from: accounts[3]});
//		const uintB9wBzt = await PRDZstakingV2Qtwq3Tr.getStakingScore.call(address56FySW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQpURaCI = await PRDZstakingV2Qtwq3Tr.transferOwnership.call(addressUOm8D2k, {from: accounts[2]});

		assert.equal(uintBJEjjGR, BigInt("0"))
		assert.equal(uintCkwnEk0, BigInt("0"))
		await expect(PRDZstakingV2Qtwq3Tr.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qtwq3Tr = await PRDZstakingV2.new({from: accounts[3]});
		const uintCkwnEk0 = await PRDZstakingV2Qtwq3Tr.getTotalClaimed.call({from: accounts[1]});
//		await PRDZstakingV2Qtwq3Tr.claimReward.call({from: accounts[3]});
//		const uintAOlD4dI = await PRDZstakingV2Qtwq3Tr.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintCkwnEk0, BigInt("0"))
		await expect(PRDZstakingV2Qtwq3Tr.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2BFtNQFD = await PRDZstakingV2.new({from: accounts[3]});
		const addressswcokt3 = accounts[3]
		const addressvbhqNhJ = accounts[6]
//		await PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2BFtNQFD.deposit.call({from: accounts[4]});
//		const addressPUCgiyg = await PRDZstakingV2BFtNQFD.transferOwnership.call(addressswcokt3, {from: accounts[3]});
//		const uintnaKNAYY = await PRDZstakingV2BFtNQFD.getTotalUnStaked.call({from: accounts[1]});
//		const uintxWRo27h = await PRDZstakingV2BFtNQFD.getStakingScore.call(addressvbhqNhJ, {from: accounts[1]});

		await expect(PRDZstakingV2BFtNQFD.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rEKoSQ2 = await PRDZstakingV2.new({from: accounts[4]});
		const addressTO8IMcL = accounts[4]
//		await PRDZstakingV2rEKoSQ2.deposit.call({from: accounts[1]});
//		const uintiZmHlgV = await PRDZstakingV2rEKoSQ2.getTotalStaked.call({from: accounts[1]});
//		const uintmSqjCAU = await PRDZstakingV2rEKoSQ2.getPendingReward.call(addressTO8IMcL, {from: accounts[1]});
//		await PRDZstakingV2rEKoSQ2.claimReward.call({from: accounts[0]});
//		const uintUtk6w4u = await PRDZstakingV2rEKoSQ2.getTotalFeeCollected.call({from: accounts[4]});

		await expect(PRDZstakingV2rEKoSQ2.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RibhIQI = await PRDZstakingV2.new({from: accounts[2]});
		const uintV2epSLa = BigInt("4")
		const addressoXBMQhX = accounts[3]
		const uintqRff5xc = BigInt("710")
		const uintbAsF5SQ = await PRDZstakingV2RibhIQI.updateScoreEth.call(uintV2epSLa, {from: accounts[2]});
//		await PRDZstakingV2RibhIQI.deposit.call({from: accounts[2]});
//		const uintZg0VeAN = await PRDZstakingV2RibhIQI.getScoreEth.call(addressoXBMQhX, {from: accounts[4]});
//		const uintFLjzXgT = await PRDZstakingV2RibhIQI.updateScoreEth.call(uintqRff5xc, {from: accounts[4]});

		await expect(PRDZstakingV2RibhIQI.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})