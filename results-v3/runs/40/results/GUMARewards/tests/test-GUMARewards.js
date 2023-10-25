const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardspM86RFW = await GUMARewards.new({from: accounts[1]});
		const addressLLTocfs = accounts[4]
		const addressQlXildV = accounts[1]
		const uintWvP12eQ = BigInt("1735")
		await GUMARewardspM86RFW.onlyRewardDistribution.call({from: accounts[0]});
		const boolrtFaQLj = await GUMARewardspM86RFW.isOwner.call({from: accounts[1]});
		const uint256Fux4pti = await GUMARewardspM86RFW.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressISxWk1h = await GUMARewardspM86RFW.setGUMA.call(addressQlXildV, addressLLTocfs, {from: accounts[3]});
		const uint256foQRDX = await GUMARewardspM86RFW.stake.call(uintWvP12eQ, {from: accounts[3]});

		await expect(GUMARewardspM86RFW.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqItO7dw = await GUMARewards.new({from: accounts[1]});
		const addressYpkfZke = accounts[5]
		const address59HJH1 = accounts[4]
		await GUMARewardsqItO7dw.getReward.call({from: accounts[3]});
		const uint256mH9mofb = await GUMARewardsqItO7dw.rewardPerToken.call({from: accounts[5]});
		const uint256JTldLXZ = await GUMARewardsqItO7dw.lastTimeRewardApplicable.call({from: accounts[1]});
		await GUMARewardsqItO7dw.renounceOwnership.call({from: accounts[5]});
		const addressPI00qmY = await GUMARewardsqItO7dw.setGUMA.call(address59HJH1, addressYpkfZke, {from: accounts[2]});

		await expect(GUMARewardsqItO7dw.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsgOCHOqt = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthgxTcwU = BigInt("1301")
		const addressQnC3IWM = accounts[3]
		await GUMARewardsgOCHOqt.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsgOCHOqt.onlyRewardDistribution.call({from: accounts[0]});
		const uint256FhGJqC0 = await GUMARewardsgOCHOqt.stake.call(uinthgxTcwU, {from: accounts[3]});
		const uint256IVwZGlO = await GUMARewardsgOCHOqt.balanceOf.call(addressQnC3IWM, {from: accounts[1]});
		const addressXQElsOQ = await GUMARewardsgOCHOqt.owner.call({from: accounts[2]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEgC0UNk = await GUMARewards.new({from: accounts[1]});
		const uintDiHbeo1 = BigInt("1849")
		const uintUG3LnWV = BigInt("1306")
		const addressir2CbBO = "0x0000000000000000000000000000000000000001"
		const addressRlIaPlY = accounts[1]
		const uintmAd8hrV = BigInt("1689")
		const uint256MCBknzg = await GUMARewardsEgC0UNk.stake.call(uintDiHbeo1, {from: accounts[0]});
		const uint256pVOPDPr = await GUMARewardsEgC0UNk.stake.call(uintUG3LnWV, {from: accounts[5]});
		await GUMARewardsEgC0UNk.getReward.call({from: accounts[3]});
		const addresskSFqF6L = await GUMARewardsEgC0UNk.setGUMA.call(addressRlIaPlY, addressir2CbBO, {from: "0x0000000000000000000000000000000000000001"});
		const boolMfk46F = await GUMARewardsEgC0UNk.isOwner.call({from: accounts[2]});
		const uint256AX7FwB = await GUMARewardsEgC0UNk.notifyRewardAmount.call(uintmAd8hrV, {from: accounts[1]});

		await expect(GUMARewardsEgC0UNk.stake.call(uintDiHbeo1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsflobBFU = await GUMARewards.new({from: accounts[1]});
		const addressXGh4CQg = "0x0000000000000000000000000000000000000001"
		const uint256sBcP7MX = await GUMARewardsflobBFU.rewardPerToken.call({from: accounts[1]});
		const uint256sEn1LuM = await GUMARewardsflobBFU.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressEw2uyM = await GUMARewardsflobBFU.owner.call({from: accounts[2]});
		const addressAnW6Dp = await GUMARewardsflobBFU.transferOwnership.call(addressXGh4CQg, {from: accounts[4]});

		assert.equal(addressEw2uyM, 0x8A2e528A43fb636186EF7F416224A66787fd07F4)
		assert.equal(uint256sBcP7MX, BigInt("0"))
		assert.equal(uint256sEn1LuM, BigInt("0"))
		await expect(GUMARewardsflobBFU.transferOwnership.call(addressXGh4CQg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqItO7dw = await GUMARewards.new({from: accounts[1]});
		const addressoN0blIR = accounts[1]
		const addressNgjpfYC = accounts[4]
		const addressumlPPwq = accounts[5]
		const addresszxv3Tv = accounts[4]
		await GUMARewardsqItO7dw.getReward.call({from: accounts[3]});
		const addresso9Y9TUK = await GUMARewardsqItO7dw.setGUMA.call(addressNgjpfYC, addressoN0blIR, {from: accounts[2]});
		const uint256JTldLXZ = await GUMARewardsqItO7dw.lastTimeRewardApplicable.call({from: accounts[1]});
		await GUMARewardsqItO7dw.renounceOwnership.call({from: accounts[5]});
		const addressPI00qmY = await GUMARewardsqItO7dw.setGUMA.call(addresszxv3Tv, addressumlPPwq, {from: accounts[2]});

		await expect(GUMARewardsqItO7dw.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEWI0diX = await GUMARewards.new({from: accounts[0]});
		const addressCiYwcFd = accounts[4]
		const addresskRt7fcA = accounts[2]
		const addressIwmeOjM = accounts[4]
		const uintY2Kox3 = BigInt("189")
		const addressuKyQE7I = await GUMARewardsEWI0diX.setRewardDistribution.call(addressCiYwcFd, {from: accounts[0]});
		const addresscGrdSo = await GUMARewardsEWI0diX.setGUMA.call(addressIwmeOjM, addresskRt7fcA, {from: accounts[5]});
		const uint256XMojsMe = await GUMARewardsEWI0diX.stake.call(uintY2Kox3, {from: accounts[4]});

		await expect(GUMARewardsEWI0diX.setGUMA.call(addressIwmeOjM, addresskRt7fcA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqItO7dw = await GUMARewards.new({from: accounts[1]});
		const uintUVBUE3J = BigInt("1975")
		const addressiZlJNK6 = accounts[1]
		const addressiD4onF0 = accounts[4]
		const addressoMVQeqV = accounts[3]
		const addressbu9xYY = accounts[2]
		const addressJdius3c = accounts[5]
		const addresscijCx9v = accounts[5]
		await GUMARewardsqItO7dw.renounceOwnership.call({from: accounts[1]});
		await GUMARewardsqItO7dw.getReward.call({from: accounts[3]});
		const uint256BdYoQ0 = await GUMARewardsqItO7dw.notifyRewardAmount.call(uintUVBUE3J, {from: accounts[0]});
		const addresso9Y9TUK = await GUMARewardsqItO7dw.setGUMA.call(addressiD4onF0, addressiZlJNK6, {from: accounts[2]});
		const uint256JTldLXZ = await GUMARewardsqItO7dw.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressoElmDP = await GUMARewardsqItO7dw.updateReward.call(addressoMVQeqV, {from: accounts[1]});
		const uint256N0CqboW = await GUMARewardsqItO7dw.balanceOf.call(addressbu9xYY, {from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsqItO7dw.renounceOwnership.call({from: accounts[5]});
		const addressPI00qmY = await GUMARewardsqItO7dw.setGUMA.call(addresscijCx9v, addressJdius3c, {from: accounts[2]});

		await expect(GUMARewardsqItO7dw.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZPMWhu0 = await GUMARewards.new({from: accounts[0]});
		const addressY3N3eSz = accounts[1]
		await GUMARewardsZPMWhu0.getReward.call({from: accounts[4]});
		const addresspk0QMPY = await GUMARewardsZPMWhu0.transferOwnership.call(addressY3N3eSz, {from: accounts[0]});

		await expect(GUMARewardsZPMWhu0.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})