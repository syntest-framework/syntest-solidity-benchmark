const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2aNiZPTh = await PRDZstakingV2.new({from: accounts[0]});
		const uintgfIlf5I = BigInt("1415")
		const uintpXs3hn = BigInt("822")
		const uintHGdWsyS = await PRDZstakingV2aNiZPTh.getTotalStaked.call({from: accounts[1]});
		const uintCYuqVHC = await PRDZstakingV2aNiZPTh.getTotalFeeCollected.call({from: accounts[0]});
		const uintH5v5cLw = await PRDZstakingV2aNiZPTh.updateOffer.call(uintpXs3hn, uintgfIlf5I, {from: accounts[4]});
		await PRDZstakingV2aNiZPTh.claimReward.call({from: accounts[0]});

		assert.equal(uintCYuqVHC, BigInt("0"))
		assert.equal(uintHGdWsyS, BigInt("0"))
		await expect(PRDZstakingV2aNiZPTh.updateOffer.call(uintpXs3hn, uintgfIlf5I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ooqWLf = await PRDZstakingV2.new({from: accounts[4]});
		const addressQdcssWw = accounts[2]
		const addressEyGrM7d = accounts[2]
		await PRDZstakingV2ooqWLf.deposit.call({from: accounts[3]});
		const uintMni9I0H = await PRDZstakingV2ooqWLf.getPendingReward.call(addressQdcssWw, {from: accounts[3]});
		const uintjqN3Nso = await PRDZstakingV2ooqWLf.getPendingReward.call(addressEyGrM7d, {from: accounts[1]});
		const uintzhAoDnC = await PRDZstakingV2ooqWLf.getTotalUnStaked.call({from: accounts[2]});

		await expect(PRDZstakingV2ooqWLf.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintEtqu5de = BigInt("1461")
		const uintbc8FunF = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintEtqu5de, {from: accounts[1]});
		await PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]});
		const uintZr5v1He = await PRDZstakingV2z1z5q0.getTotalUnStaked.call({from: accounts[0]});

		await expect(PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nlbunQZ = await PRDZstakingV2.new({from: accounts[2]});
		const addressFLqLP0 = accounts[4]
		const addressCkkziBs = accounts[2]
		const uintHyZdlL7 = await PRDZstakingV2nlbunQZ.getPendingReward.call(addressFLqLP0, {from: accounts[3]});
		const uintqPb9er = await PRDZstakingV2nlbunQZ.getTotalStaked.call({from: accounts[1]});
		const uintvM7YE3w = await PRDZstakingV2nlbunQZ.getScoreEth.call(addressCkkziBs, {from: accounts[5]});
		const uintBxMXi0r = await PRDZstakingV2nlbunQZ.getTotalUnStaked.call({from: accounts[4]});

		assert.equal(uintBxMXi0r, BigInt("0"))
		assert.equal(uintHyZdlL7, BigInt("0"))
		assert.equal(uintqPb9er, BigInt("0"))
		assert.equal(uintvM7YE3w, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nCUkjzC = await PRDZstakingV2.new({from: accounts[2]});
		await PRDZstakingV2nCUkjzC.deposit.call({from: accounts[5]});
		await PRDZstakingV2nCUkjzC.onlyOwner.call({from: accounts[5]});
		const uintLviAVrt = await PRDZstakingV2nCUkjzC.getTotalClaimed.call({from: accounts[3]});

		await expect(PRDZstakingV2nCUkjzC.deposit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YS2bL5g = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEI5fkc9 = accounts[1]
		const addressmV92RlO = accounts[4]
		await PRDZstakingV2YS2bL5g.claimReward.call({from: accounts[1]});
		const addressHzIyexT = await PRDZstakingV2YS2bL5g.transferOwnership.call(addressEI5fkc9, {from: accounts[0]});
		const uintcCzKfDp = await PRDZstakingV2YS2bL5g.getPendingReward.call(addressmV92RlO, {from: accounts[5]});
		const uinteVxrr0 = await PRDZstakingV2YS2bL5g.getTotalClaimed.call({from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nlbunQZ = await PRDZstakingV2.new({from: accounts[2]});
		const addresslGr0CEU = accounts[5]
		const addresschxJfaF = accounts[2]
		await PRDZstakingV2nlbunQZ.claimScoreEth.call({from: accounts[1]});
		const uintHyZdlL7 = await PRDZstakingV2nlbunQZ.getPendingReward.call(addresslGr0CEU, {from: accounts[3]});
		const uintqPb9er = await PRDZstakingV2nlbunQZ.getTotalStaked.call({from: accounts[1]});
		const uintvM7YE3w = await PRDZstakingV2nlbunQZ.getScoreEth.call(addresschxJfaF, {from: accounts[5]});
		const uintBxMXi0r = await PRDZstakingV2nlbunQZ.getTotalUnStaked.call({from: accounts[4]});

		await expect(PRDZstakingV2nlbunQZ.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintK26PWtJ = BigInt("1461")
		const uintbFbACZL = await PRDZstakingV2z1z5q0.getTotalClaimed.call({from: accounts[4]});
		const uintbc8FunF = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintK26PWtJ, {from: accounts[1]});
		const uintZr5v1He = await PRDZstakingV2z1z5q0.getTotalUnStaked.call({from: accounts[0]});

		assert.equal(uintZr5v1He, BigInt("0"))
		assert.equal(uintbFbACZL, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintqiXtTlh = BigInt("1461")
		const uintUynlmBo = BigInt("26")
		const uintbc8FunF = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintqiXtTlh, {from: accounts[1]});
		const uintpJfjx5 = await PRDZstakingV2z1z5q0.unstake.call(uintUynlmBo, {from: accounts[2]});
		await PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]});
		await PRDZstakingV2z1z5q0.onlyOwner.call({from: accounts[0]});

		await expect(PRDZstakingV2z1z5q0.unstake.call(uintUynlmBo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintmLrXQQ = BigInt("1467")
		const uintO4byWGj = BigInt("1820")
		const uintbc8FunF = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintmLrXQQ, {from: accounts[1]});
		await PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]});
		await PRDZstakingV2z1z5q0.deposit.call({from: accounts[3]});
		const uintybzK0R = await PRDZstakingV2z1z5q0.stake.call(uintO4byWGj, {from: accounts[2]});

		await expect(PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintgHf4Ct = BigInt("1461")
		await PRDZstakingV2z1z5q0.claimScoreEth.call({from: accounts[4]});
		const uintJwF7VyZ = await PRDZstakingV2z1z5q0.getNumberOfHolders.call({from: accounts[0]});
		const uintbc8FunF = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintgHf4Ct, {from: accounts[1]});

		await expect(PRDZstakingV2z1z5q0.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintRS2Nuh = BigInt("1461")
		const uintsR6gmp = BigInt("0")
		const uintlhzaQkq = await PRDZstakingV2z1z5q0.getTotalClaimed.call({from: accounts[0]});
		const uintbc8FunF = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintRS2Nuh, {from: accounts[1]});
		const uintpJfjx5 = await PRDZstakingV2z1z5q0.unstake.call(uintsR6gmp, {from: accounts[2]});
		await PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]});
		await PRDZstakingV2z1z5q0.onlyOwner.call({from: accounts[0]});

		assert.equal(uintlhzaQkq, BigInt("0"))
		await expect(PRDZstakingV2z1z5q0.unstake.call(uintsR6gmp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JvgLZQG = await PRDZstakingV2.new({from: accounts[3]});
		const uintTVqAREj = BigInt("1615")
		const addresscoBGPiH = accounts[3]
		const uint8ArPKP = await PRDZstakingV2JvgLZQG.getTotalUnStaked.call({from: accounts[3]});
		const uintV5Gei08 = await PRDZstakingV2JvgLZQG.updateScoreEth.call(uintTVqAREj, {from: accounts[3]});
		const uintesAreGB = await PRDZstakingV2JvgLZQG.getTotalUnStaked.call({from: accounts[0]});
		const uintmsZLtQz = await PRDZstakingV2JvgLZQG.getStakingScore.call(addresscoBGPiH, {from: accounts[0]});

		assert.equal(uint8ArPKP, BigInt("0"))
		assert.equal(uintesAreGB, BigInt("0"))
		assert.equal(uintmsZLtQz, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintN4PY80b = BigInt("1916")
		const uintDgsdRNK = BigInt("1289")
		await PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]});
		const uintG0BehB2 = await PRDZstakingV2z1z5q0.updateOffer.call(uintDgsdRNK, uintN4PY80b, {from: accounts[1]});

		await expect(PRDZstakingV2z1z5q0.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z1z5q0 = await PRDZstakingV2.new({from: accounts[1]});
		const uintqg6FBW = BigInt("1429")
		const addressGA3ImE = accounts[0]
		const addressmjlU3a2 = accounts[1]
		const uintErz1VWy = await PRDZstakingV2z1z5q0.updateScoreEth.call(uintqg6FBW, {from: accounts[1]});
		const addressr9M4rD = await PRDZstakingV2z1z5q0.transferOwnership.call(addressGA3ImE, {from: accounts[1]});
		const uinttycC4zf = await PRDZstakingV2z1z5q0.getStakingScore.call(addressmjlU3a2, {from: accounts[1]});

		assert.equal(uinttycC4zf, BigInt("0"))
	});
})