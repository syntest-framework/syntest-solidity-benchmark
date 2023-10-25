const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKNOGNpmf = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256ECBErT5 = await RainbowRAKNOGNpmf.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Hpkq0Nd = await RainbowRAKNOGNpmf.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256CIyHaUT = await RainbowRAKNOGNpmf.rewardPerToken.call({from: accounts[5]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKg9BcHTL = await RainbowRAK.new({from: accounts[1]});
		const addressI0umtC = accounts[4]
		const addresst3jYW8m = accounts[5]
		const addressaAhIlvS = await RainbowRAKg9BcHTL.transferOwnership.call(addressI0umtC, {from: accounts[0]});
		const boolT8GEXsg = await RainbowRAKg9BcHTL.isOwner.call({from: accounts[5]});
		const uint256yTA2zza = await RainbowRAKg9BcHTL.earned.call(addresst3jYW8m, {from: accounts[0]});

		await expect(RainbowRAKg9BcHTL.transferOwnership.call(addressI0umtC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMR8dyHG = await RainbowRAK.new({from: accounts[0]});
		const addressF9IdiWp = accounts[4]
		const uintAR1x1PT = BigInt("547")
		const uintfwXSXad = BigInt("339")
		const addressjrtgLCJ = accounts[4]
		const booljULS99d = await RainbowRAKMR8dyHG.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AtTGyf = await RainbowRAKMR8dyHG.earned.call(addressF9IdiWp, {from: accounts[5]});
		const uint256MHjB3IL = await RainbowRAKMR8dyHG.notifyRewardAmount.call(uintAR1x1PT, {from: accounts[0]});
		const uint256zKMiCjW = await RainbowRAKMR8dyHG.stake.call(uintfwXSXad, {from: accounts[5]});
		const addressBnRHB0B = await RainbowRAKMR8dyHG.transferOwnership.call(addressjrtgLCJ, {from: accounts[4]});

		assert.equal(booljULS99d, false)
		assert.equal(uint256AtTGyf, BigInt("0"))
		await expect(RainbowRAKMR8dyHG.notifyRewardAmount.call(uintAR1x1PT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXk4v3ww = await RainbowRAK.new({from: accounts[4]});
		const addressqPltwFu = accounts[3]
		const uint256KUWBAHB = await RainbowRAKXk4v3ww.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256N2dTc3p = await RainbowRAKXk4v3ww.lastTimeRewardApplicable.call({from: accounts[4]});
		await RainbowRAKXk4v3ww.claimRewards.call({from: accounts[3]});
		const addressOvC90yF = await RainbowRAKXk4v3ww.updateReward.call(addressqPltwFu, {from: accounts[1]});

		assert.equal(uint256KUWBAHB, BigInt("0"))
		assert.equal(uint256N2dTc3p, BigInt("0"))
		await expect(RainbowRAKXk4v3ww.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKzQOMrF = await RainbowRAK.new({from: accounts[0]});
		const uintAXRO5Rj = BigInt("967")
		const uinttgrrexy = BigInt("1326")
		const addressH2xhXyF = "0x0000000000000000000000000000000000000001"
		await RainbowRAKzQOMrF.exit.call({from: accounts[3]});
		const uint256a2NWvwi = await RainbowRAKzQOMrF.stake.call(uintAXRO5Rj, {from: accounts[3]});
		const uint256bDDrbgS = await RainbowRAKzQOMrF.stake.call(uinttgrrexy, {from: accounts[3]});
		const addressLYQQMO7 = await RainbowRAKzQOMrF.updateReward.call(addressH2xhXyF, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayisqxHTI = await RainbowRAKzQOMrF.getCommunity.call({from: accounts[2]});
		const uint2565SDjbH = await RainbowRAKzQOMrF.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(RainbowRAKzQOMrF.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKI9KKTL5 = await RainbowRAK.new({from: accounts[5]});
		const uintzQPwgls = BigInt("1173")
		const uintusUmF1U = BigInt("1113")
		const uint256z9DSEj = await RainbowRAKI9KKTL5.stake.call(uintzQPwgls, {from: accounts[3]});
		const uint256VtCeRZL = await RainbowRAKI9KKTL5.stake.call(uintusUmF1U, {from: accounts[4]});
		await RainbowRAKI9KKTL5.claimRewards.call({from: accounts[1]});
		const boolry0JLVu = await RainbowRAKI9KKTL5.isOwner.call({from: accounts[5]});

		await expect(RainbowRAKI9KKTL5.stake.call(uintzQPwgls, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKK3EyqtM = await RainbowRAK.new({from: accounts[3]});
		const addresslgwi8a = accounts[2]
		const addressK2iTY5 = accounts[2]
		await RainbowRAKK3EyqtM.onlyOwner.call({from: accounts[1]});
		const addressarraywRJsyey = await RainbowRAKK3EyqtM.getCommunity.call({from: accounts[2]});
		const address54rtbK = await RainbowRAKK3EyqtM.updateReward.call(addresslgwi8a, {from: accounts[2]});
		const uint256yvMjWp = await RainbowRAKK3EyqtM.earned.call(addressK2iTY5, {from: accounts[0]});

		await expect(RainbowRAKK3EyqtM.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKY987RZE = await RainbowRAK.new({from: accounts[4]});
		const uintM4hedK = BigInt("569")
		const addressarrayUfgjjkG = await RainbowRAKY987RZE.getCommunity.call({from: accounts[0]});
		const uint256eQNMT5s = await RainbowRAKY987RZE.stake.call(uintM4hedK, {from: accounts[3]});
		const uint256KxATDft = await RainbowRAKY987RZE.rewardPerToken.call({from: accounts[5]});
		const uint256ZaiC1Xt = await RainbowRAKY987RZE.rewardPerToken.call({from: accounts[1]});
		const uint256PMzpDZU = await RainbowRAKY987RZE.rewardPerToken.call({from: accounts[5]});
		const uint256bTpzuiZ = await RainbowRAKY987RZE.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayUfgjjkG, )
		await expect(RainbowRAKY987RZE.stake.call(uintM4hedK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKY987RZE = await RainbowRAK.new({from: accounts[4]});
		const uint61mcKk = BigInt("766")
		const uintmIsiqN = BigInt("541")
		const uint256NBDQQ6C = await RainbowRAKY987RZE.unstake.call(uint61mcKk, {from: accounts[3]});
		const uint256eQNMT5s = await RainbowRAKY987RZE.stake.call(uintmIsiqN, {from: accounts[3]});

		await expect(RainbowRAKY987RZE.unstake.call(uint61mcKk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxismo4O = await RainbowRAK.new({from: accounts[1]});
		const address69spGz = accounts[5]
		const uint256CHDY3hg = await RainbowRAKxismo4O.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressRBczMy = await RainbowRAKxismo4O.transferOwnership.call(address69spGz, {from: accounts[1]});
		await RainbowRAKxismo4O.claimRewards.call({from: accounts[4]});

		assert.equal(uint256CHDY3hg, BigInt("0"))
		await expect(RainbowRAKxismo4O.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKGQOpmL0 = await RainbowRAK.new({from: accounts[5]});
		const addressC0ee8D = accounts[4]
		const uintZwSSLE2 = BigInt("664")
		const addressna7WWYY = await RainbowRAKGQOpmL0.owner.call({from: accounts[4]});
		const addressZKRnl4r = await RainbowRAKGQOpmL0.updateReward.call(addressC0ee8D, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKGQOpmL0.renounceOwnership.call({from: accounts[2]});
		await RainbowRAKGQOpmL0.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lKaYL0M = await RainbowRAKGQOpmL0.unstake.call(uintZwSSLE2, {from: accounts[5]});

		assert.equal(addressna7WWYY, 0x916ce7156768D9a4e429EfF416cA78C478dA1182)
		await expect(RainbowRAKGQOpmL0.updateReward.call(addressC0ee8D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxismo4O = await RainbowRAK.new({from: accounts[1]});
		const addressRpZD4we = accounts[2]
		await RainbowRAKxismo4O.renounceOwnership.call({from: accounts[1]});
		const uint256y5Bs5eU = await RainbowRAKxismo4O.rewardPerToken.call({from: accounts[4]});
		await RainbowRAKxismo4O.renounceOwnership.call({from: accounts[0]});
		const uint256l9QF28r = await RainbowRAKxismo4O.earned.call(addressRpZD4we, {from: accounts[1]});

		await expect(RainbowRAKxismo4O.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})