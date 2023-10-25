const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKDLD9qza = await RainbowRAK.new({from: accounts[0]});
		const addresse6cNuQ = accounts[0]
		const uintgHQ7pI7 = BigInt("706")
		const uint256GEHO6y0 = await RainbowRAKDLD9qza.earned.call(addresse6cNuQ, {from: accounts[0]});
		const boolfCPA1Hc = await RainbowRAKDLD9qza.isOwner.call({from: accounts[4]});
		const uint2566lmy5N = await RainbowRAKDLD9qza.stake.call(uintgHQ7pI7, {from: accounts[0]});

		assert.equal(boolfCPA1Hc, false)
		assert.equal(uint256GEHO6y0, BigInt("0"))
		await expect(RainbowRAKDLD9qza.stake.call(uintgHQ7pI7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKE54wfy2 = await RainbowRAK.new({from: accounts[1]});
		const addresseynDYn = accounts[3]
		const addressz3ylB66 = accounts[3]
		const addressywLU80A = accounts[0]
		const addressKdQUnRi = await RainbowRAKE54wfy2.updateReward.call(addresseynDYn, {from: accounts[2]});
		const addressqBzJiBW = await RainbowRAKE54wfy2.updateReward.call(addressz3ylB66, {from: accounts[2]});
		const uint256hIqYq6Y = await RainbowRAKE54wfy2.earned.call(addressywLU80A, {from: accounts[3]});

		await expect(RainbowRAKE54wfy2.updateReward.call(addresseynDYn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUpYpZXe = await RainbowRAK.new({from: accounts[1]});
		const addressGNezB4z = accounts[0]
		await RainbowRAKUpYpZXe.claimRewards.call({from: accounts[2]});
		await RainbowRAKUpYpZXe.onlyOwner.call({from: accounts[1]});
		await RainbowRAKUpYpZXe.claimRewards.call({from: accounts[4]});
		const addressU6tYOh = await RainbowRAKUpYpZXe.transferOwnership.call(addressGNezB4z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKUpYpZXe.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYbWaLKm = await RainbowRAK.new({from: accounts[3]});
		const addressxotiGSB = accounts[4]
		await RainbowRAKYbWaLKm.exit.call({from: accounts[0]});
		await RainbowRAKYbWaLKm.renounceOwnership.call({from: accounts[4]});
		await RainbowRAKYbWaLKm.exit.call({from: accounts[2]});
		const uint256xLrw1ob = await RainbowRAKYbWaLKm.earned.call(addressxotiGSB, {from: accounts[1]});

		await expect(RainbowRAKYbWaLKm.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKReAkJSi = await RainbowRAK.new({from: accounts[3]});
		const uintnYcIaiF = BigInt("1680")
		await RainbowRAKReAkJSi.renounceOwnership.call({from: accounts[2]});
		await RainbowRAKReAkJSi.onlyOwner.call({from: accounts[3]});
		await RainbowRAKReAkJSi.renounceOwnership.call({from: accounts[1]});
		const uint256mg7LXxh = await RainbowRAKReAkJSi.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256wMVLdU = await RainbowRAKReAkJSi.stake.call(uintnYcIaiF, {from: accounts[3]});
		const addressarraypos0hkt = await RainbowRAKReAkJSi.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKReAkJSi.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCmsd6y = await RainbowRAK.new({from: accounts[1]});
		const uintnC7bRDt = BigInt("531")
		const addressS7SE4Q6 = accounts[4]
		const uint256WVwTYBe = await RainbowRAKCmsd6y.unstake.call(uintnC7bRDt, {from: accounts[1]});
		const addressiQvpYWy = await RainbowRAKCmsd6y.updateReward.call(addressS7SE4Q6, {from: accounts[2]});
		const addressqYZ0S9C = await RainbowRAKCmsd6y.owner.call({from: accounts[3]});

		await expect(RainbowRAKCmsd6y.unstake.call(uintnC7bRDt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfRNBFWu = await RainbowRAK.new({from: accounts[0]});
		const uintXkU5CT = BigInt("1330")
		const addressyYHnUBi = "0x0000000000000000000000000000000000000001"
		const uint256SgN8iP = await RainbowRAKfRNBFWu.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256sEzSNXK = await RainbowRAKfRNBFWu.stake.call(uintXkU5CT, {from: accounts[1]});
		await RainbowRAKfRNBFWu.renounceOwnership.call({from: accounts[2]});
		const addressjKuwxvP = await RainbowRAKfRNBFWu.updateReward.call(addressyYHnUBi, {from: accounts[3]});
		await RainbowRAKfRNBFWu.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256SgN8iP, BigInt("0"))
		await expect(RainbowRAKfRNBFWu.stake.call(uintXkU5CT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfRNBFWu = await RainbowRAK.new({from: accounts[0]});
		const uintMpcvAvM = BigInt("1330")
		const addressegRFhv = "0x0000000000000000000000000000000000000001"
		const uint256SgN8iP = await RainbowRAKfRNBFWu.getCurrentRewardReserve.call({from: accounts[0]});
		const addressyn81akq = await RainbowRAKfRNBFWu.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256sEzSNXK = await RainbowRAKfRNBFWu.stake.call(uintMpcvAvM, {from: accounts[1]});
		const boolcrghmIl = await RainbowRAKfRNBFWu.isOwner.call({from: accounts[3]});
		const uint256AYJWgJa = await RainbowRAKfRNBFWu.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressjKuwxvP = await RainbowRAKfRNBFWu.updateReward.call(addressegRFhv, {from: accounts[3]});
		await RainbowRAKfRNBFWu.onlyOwner.call({from: accounts[0]});

		assert.equal(addressyn81akq, 0x3eFe41Ea240AE522c37C2123c2A1AF5c03792944)
		assert.equal(uint256SgN8iP, BigInt("0"))
		await expect(RainbowRAKfRNBFWu.stake.call(uintMpcvAvM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDLD9qza = await RainbowRAK.new({from: accounts[0]});
		const addressb0RyoQT = accounts[0]
		const uintcBnuIjo = BigInt("1868")
		const uintIdndXKf = BigInt("730")
		const uint256GEHO6y0 = await RainbowRAKDLD9qza.earned.call(addressb0RyoQT, {from: accounts[0]});
		const boolfCPA1Hc = await RainbowRAKDLD9qza.isOwner.call({from: accounts[4]});
		const uint256Pa8uiok = await RainbowRAKDLD9qza.notifyRewardAmount.call(uintcBnuIjo, {from: accounts[0]});
		const uint2566lmy5N = await RainbowRAKDLD9qza.stake.call(uintIdndXKf, {from: accounts[0]});

		assert.equal(boolfCPA1Hc, false)
		assert.equal(uint256GEHO6y0, BigInt("0"))
		await expect(RainbowRAKDLD9qza.notifyRewardAmount.call(uintcBnuIjo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJtp27Q7 = await RainbowRAK.new({from: accounts[1]});
		const addresspSQrsss = accounts[2]
		await RainbowRAKJtp27Q7.renounceOwnership.call({from: accounts[1]});
		await RainbowRAKJtp27Q7.exit.call({from: accounts[1]});
		const addressv2FRZZ = await RainbowRAKJtp27Q7.updateReward.call(addresspSQrsss, {from: accounts[0]});
		await RainbowRAKJtp27Q7.claimRewards.call({from: accounts[0]});

		await expect(RainbowRAKJtp27Q7.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKe0S8k45 = await RainbowRAK.new({from: accounts[4]});
		const uintNOhY9Ga = BigInt("598")
		const addressarraylgwtQqp = await RainbowRAKe0S8k45.getCommunity.call({from: accounts[4]});
		await RainbowRAKe0S8k45.exit.call({from: accounts[2]});
		const uint256esDzdb = await RainbowRAKe0S8k45.stake.call(uintNOhY9Ga, {from: accounts[3]});

		assert.equal(addressarraylgwtQqp, )
		await expect(RainbowRAKe0S8k45.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWVc5494 = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressu1uyPM = accounts[3]
		const address9ccGTS = accounts[1]
		const uint256OL75NTV = await RainbowRAKWVc5494.earned.call(addressu1uyPM, {from: accounts[1]});
		const boolnftWm9l = await RainbowRAKWVc5494.isOwner.call({from: accounts[3]});
		const addressarrayvh8SX5y = await RainbowRAKWVc5494.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rIFWZRq = await RainbowRAKWVc5494.earned.call(address9ccGTS, {from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfUlqc7A = await RainbowRAK.new({from: accounts[1]});
		const addressJdlP5t = accounts[0]
		const addressfMa9JS = await RainbowRAKfUlqc7A.transferOwnership.call(addressJdlP5t, {from: accounts[1]});
		const uint256LbuXsMg = await RainbowRAKfUlqc7A.getCurrentRewardReserve.call({from: accounts[1]});
		await RainbowRAKfUlqc7A.renounceOwnership.call({from: accounts[2]});
		await RainbowRAKfUlqc7A.claimRewards.call({from: accounts[1]});
		const addressarraydn7pulP = await RainbowRAKfUlqc7A.getCommunity.call({from: accounts[3]});

		assert.equal(uint256LbuXsMg, BigInt("0"))
		await expect(RainbowRAKfUlqc7A.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})