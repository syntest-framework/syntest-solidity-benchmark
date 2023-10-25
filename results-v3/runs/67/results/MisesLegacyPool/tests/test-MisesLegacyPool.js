const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresscC9ZeRZ = accounts[4]
		const addressdxP4YdQ = accounts[2]
		const uintsd7s91r = BigInt("284")
		const uintsyKFucE = BigInt("1270")
		const MisesLegacyPoolUFiyjFD = await MisesLegacyPool.new(addresscC9ZeRZ, addressdxP4YdQ, uintsd7s91r, uintsyKFucE, {from: "0x0000000000000000000000000000000000000001"});
		const uintdp9brf5 = BigInt("1895")
		const addressbmXWQas = accounts[0]
		await MisesLegacyPoolUFiyjFD.getReward.call({from: accounts[0]});
		await MisesLegacyPoolUFiyjFD.getReward.call({from: accounts[0]});
		const uint256Viwzw4 = await MisesLegacyPoolUFiyjFD.withdraw.call(uintdp9brf5, {from: accounts[3]});
		const addressTEUlMoB = await MisesLegacyPoolUFiyjFD.updateReward.call(addressbmXWQas, {from: accounts[4]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressDDv8jFd = accounts[2]
		const addresspzoi7Im = accounts[5]
		const uintvrVKMyN = BigInt("586")
		const uintPnc0wHM = BigInt("752")
		const MisesLegacyPoolzlYAFbq = await MisesLegacyPool.new(addressDDv8jFd, addresspzoi7Im, uintvrVKMyN, uintPnc0wHM, {from: accounts[4]});
		const addressQ5HsObT = accounts[2]
		const uint256JEdiUgu = await MisesLegacyPoolzlYAFbq.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256k2Nt4mb = await MisesLegacyPoolzlYAFbq.rewardPerToken.call({from: accounts[0]});
		const addressXJbW4Xk = await MisesLegacyPoolzlYAFbq.updateReward.call(addressQ5HsObT, {from: accounts[4]});
		await MisesLegacyPoolzlYAFbq.checkStart.call({from: accounts[5]});
		await MisesLegacyPoolzlYAFbq.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JEdiUgu, BigInt("0"))
		assert.equal(uint256k2Nt4mb, BigInt("0"))
		await expect(MisesLegacyPoolzlYAFbq.updateReward.call(addressQ5HsObT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressaSYC20k = accounts[2]
		const addresssmRAnFb = "0x0000000000000000000000000000000000000001"
		const uintDTDwSJ8 = BigInt("2001")
		const uintfJxijM = BigInt("1945")
		const MisesLegacyPoolvvIVMBU = await MisesLegacyPool.new(addressaSYC20k, addresssmRAnFb, uintDTDwSJ8, uintfJxijM, {from: accounts[5]});
		const addressrJyJEyv = "0x0000000000000000000000000000000000000001"
		const uintIbBqDtX = BigInt("1643")
		const addressCGYrty8 = accounts[4]
		const uintyszZUd = BigInt("1300")
		const uint256Qli1Q3t = await MisesLegacyPoolvvIVMBU.earned.call(addressrJyJEyv, {from: accounts[0]});
		const uint256JnSCxyM = await MisesLegacyPoolvvIVMBU.stake.call(uintIbBqDtX, {from: accounts[0]});
		await MisesLegacyPoolvvIVMBU.getReward.call({from: accounts[0]});
		const uint256xI8EPUP = await MisesLegacyPoolvvIVMBU.earned.call(addressCGYrty8, {from: accounts[4]});
		const uint256BYYGIQH = await MisesLegacyPoolvvIVMBU.rewardPerToken.call({from: accounts[4]});
		const uint256Mte1lV2 = await MisesLegacyPoolvvIVMBU.notifyRewardAmount.call(uintyszZUd, {from: accounts[3]});

		assert.equal(uint256Qli1Q3t, BigInt("0"))
		await expect(MisesLegacyPoolvvIVMBU.stake.call(uintIbBqDtX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressvw1lPs = accounts[2]
		const addressbKlfqiN = accounts[4]
		const uintxCcHRVV = BigInt("1855")
		const uintChJuoUn = BigInt("1311")
		const MisesLegacyPoolZgyBMlm = await MisesLegacyPool.new(addressvw1lPs, addressbKlfqiN, uintxCcHRVV, uintChJuoUn, {from: accounts[1]});
		const uintQDd5VcC = BigInt("1167")
		const addressvAKYuCG = accounts[3]
		const addressgGtusG7 = accounts[3]
		const uint256t9ZTzEB = await MisesLegacyPoolZgyBMlm.withdraw.call(uintQDd5VcC, {from: accounts[3]});
		const uint256WI4qVQY = await MisesLegacyPoolZgyBMlm.earned.call(addressvAKYuCG, {from: accounts[2]});
		await MisesLegacyPoolZgyBMlm.getReward.call({from: accounts[0]});
		const uint256qvcRkdZ = await MisesLegacyPoolZgyBMlm.earned.call(addressgGtusG7, {from: accounts[0]});

		await expect(MisesLegacyPoolZgyBMlm.withdraw.call(uintQDd5VcC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressF9IyGDQ = accounts[1]
		const addressYXqk2gq = accounts[5]
		const uintfFNt7zB = BigInt("959")
		const uintCEMwAJa = BigInt("1882")
		const MisesLegacyPoolo42E5u0 = await MisesLegacyPool.new(addressF9IyGDQ, addressYXqk2gq, uintfFNt7zB, uintCEMwAJa, {from: accounts[1]});
		const addresse7cerQB = accounts[2]
		await MisesLegacyPoolo42E5u0.getReward.call({from: accounts[3]});
		const uint256ixmOtfZ = await MisesLegacyPoolo42E5u0.earned.call(addresse7cerQB, {from: accounts[0]});
		await MisesLegacyPoolo42E5u0.exit.call({from: accounts[4]});
		await MisesLegacyPoolo42E5u0.exit.call({from: accounts[1]});
		await MisesLegacyPoolo42E5u0.getReward.call({from: accounts[2]});

		await expect(MisesLegacyPoolo42E5u0.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresswt85jWC = accounts[2]
		const addresscfZlWLz = accounts[1]
		const uintTAZ03cx = BigInt("1703")
		const uintMicr81T = BigInt("1806")
		const MisesLegacyPoolyaaljmt = await MisesLegacyPool.new(addresswt85jWC, addresscfZlWLz, uintTAZ03cx, uintMicr81T, {from: accounts[4]});
		const uintDjUNJL6 = BigInt("620")
		const addressDhXEh9S = accounts[5]
		const uint256peufNE1 = await MisesLegacyPoolyaaljmt.notifyRewardAmount.call(uintDjUNJL6, {from: accounts[1]});
		const addressIyEb8lf = await MisesLegacyPoolyaaljmt.updateReward.call(addressDhXEh9S, {from: accounts[2]});
		const uint256jTVrtxA = await MisesLegacyPoolyaaljmt.rewardPerToken.call({from: accounts[1]});

		await expect(MisesLegacyPoolyaaljmt.notifyRewardAmount.call(uintDjUNJL6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})