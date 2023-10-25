const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsjim2BhM = await SSTRewards.new({from: accounts[3]});
		const uintRCAbYq = BigInt("1371")
		const uintPWVgKB = BigInt("591")
		const uintqzRG5wW = BigInt("2030")
//		await SSTRewardsjim2BhM.checkStart.call({from: accounts[2]});
//		const uint256vO1CeA = await SSTRewardsjim2BhM.stake.call(uintRCAbYq, {from: accounts[3]});
//		const uint256xP239Bb = await SSTRewardsjim2BhM.stake.call(uintPWVgKB, {from: accounts[4]});
//		const uint256kvnBrGR = await SSTRewardsjim2BhM.withdraw.call(uintqzRG5wW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256j5ecOYP = await SSTRewardsjim2BhM.totalSupply.call({from: accounts[2]});

		await expect(SSTRewardsjim2BhM.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsIuT1sS1 = await SSTRewards.new({from: accounts[4]});
		const uintvQL0T1 = BigInt("0")
		const uintj5WkZGl = BigInt("747")
//		const uint256cP1PHq6 = await SSTRewardsIuT1sS1.stake.call(uintvQL0T1, {from: accounts[2]});
//		const uint256ploFC1p = await SSTRewardsIuT1sS1.withdraw.call(uintj5WkZGl, {from: accounts[3]});

		await expect(SSTRewardsIuT1sS1.stake.call(uintvQL0T1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsl2b7exm = await SSTRewards.new({from: accounts[2]});
		const uintn3WU4Xy = BigInt("916")
		const addressQ9YDxhq = accounts[2]
		const uintZ5oazHk = BigInt("131")
		const uintgGy0wnH = BigInt("288")
//		const uint256FBvwcP7 = await SSTRewardsl2b7exm.withdraw.call(uintn3WU4Xy, {from: accounts[2]});
//		const uint256s4s5FCe = await SSTRewardsl2b7exm.earned.call(addressQ9YDxhq, {from: accounts[2]});
//		const uint256JbxNW1A = await SSTRewardsl2b7exm.notifyRewardAmount.call(uintZ5oazHk, {from: accounts[5]});
//		const uint256DzSd6dC = await SSTRewardsl2b7exm.withdraw.call(uintgGy0wnH, {from: accounts[3]});
//		await SSTRewardsl2b7exm.getReward.call({from: accounts[1]});

		await expect(SSTRewardsl2b7exm.withdraw.call(uintn3WU4Xy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsJ2m2R2 = await SSTRewards.new({from: accounts[2]});
		const addressVbR36Sf = accounts[4]
		const uintBpAVkfR = BigInt("1172")
		const addressCwb9BNQ = accounts[1]
		const uint256FLHsCC = await SSTRewardsJ2m2R2.earned.call(addressVbR36Sf, {from: accounts[0]});
//		const uint256Q6orLRc = await SSTRewardsJ2m2R2.stake.call(uintBpAVkfR, {from: accounts[0]});
//		const uint256R406JKQ = await SSTRewardsJ2m2R2.rewardPerToken.call({from: accounts[0]});
//		const uint256DhnlC5 = await SSTRewardsJ2m2R2.rewardPerToken.call({from: accounts[3]});
//		const uint256z4aiJya = await SSTRewardsJ2m2R2.balanceOf.call(addressCwb9BNQ, {from: accounts[0]});

		assert.equal(uint256FLHsCC, BigInt("0"))
		await expect(SSTRewardsJ2m2R2.stake.call(uintBpAVkfR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsrmYXvxc = await SSTRewards.new({from: accounts[3]});
		const addressBjhHoS = accounts[2]
		const uint256sLisXq4 = await SSTRewardsrmYXvxc.rewardPerToken.call({from: accounts[4]});
//		await SSTRewardsrmYXvxc.exit.call({from: accounts[5]});
//		await SSTRewardsrmYXvxc.getReward.call({from: accounts[4]});
//		await SSTRewardsrmYXvxc.exit.call({from: accounts[3]});
//		const uint256XadfGYW = await SSTRewardsrmYXvxc.earned.call(addressBjhHoS, {from: accounts[2]});

		assert.equal(uint256sLisXq4, BigInt("0"))
		await expect(SSTRewardsrmYXvxc.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsUhzsLob = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintd1WFuIk = BigInt("933")
		const addresscS5Dbgt = accounts[5]
		const uintXdpSb9u = BigInt("1271")
		const uint256WJkJLl = await SSTRewardsUhzsLob.withdraw.call(uintd1WFuIk, {from: accounts[1]});
		const uint256k4jTEl = await SSTRewardsUhzsLob.balanceOf.call(addresscS5Dbgt, {from: accounts[2]});
		const uint256SrizmFV = await SSTRewardsUhzsLob.withdraw.call(uintXdpSb9u, {from: accounts[4]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsIuT1sS1 = await SSTRewards.new({from: accounts[4]});
		const addresso1iq7Dl = accounts[4]
		const uintruwK7Eq = BigInt("1560")
		const uint256Ds4AdWK = await SSTRewardsIuT1sS1.balanceOf.call(addresso1iq7Dl, {from: accounts[1]});
//		await SSTRewardsIuT1sS1.getReward.call({from: accounts[4]});
//		const uint256ploFC1p = await SSTRewardsIuT1sS1.withdraw.call(uintruwK7Eq, {from: accounts[3]});

		assert.equal(uint256Ds4AdWK, BigInt("0"))
		await expect(SSTRewardsIuT1sS1.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsIuT1sS1 = await SSTRewards.new({from: accounts[4]});
		const uintM61wVzG = BigInt("1714")
		const uintxW98NQg = BigInt("768")
		const uint2562IsMPh = await SSTRewardsIuT1sS1.rewardPerToken.call({from: accounts[0]});
//		const uint256hPHmkb0 = await SSTRewardsIuT1sS1.notifyRewardAmount.call(uintM61wVzG, {from: accounts[2]});
//		const uint256ZR25aYC = await SSTRewardsIuT1sS1.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ploFC1p = await SSTRewardsIuT1sS1.withdraw.call(uintxW98NQg, {from: accounts[3]});

		assert.equal(uint2562IsMPh, BigInt("0"))
		await expect(SSTRewardsIuT1sS1.notifyRewardAmount.call(uintM61wVzG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})