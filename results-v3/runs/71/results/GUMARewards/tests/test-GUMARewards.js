const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsTBr8kGH = await GUMARewards.new({from: accounts[2]});
		const addressYEZ9aJB = accounts[0]
		const addressGssZOaY = accounts[1]
		const addressunRwxzD = await GUMARewardsTBr8kGH.setRewardDistribution.call(addressYEZ9aJB, {from: accounts[1]});
		await GUMARewardsTBr8kGH.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsTBr8kGH.onlyRewardDistribution.call({from: accounts[5]});
		const uint256CWyWTYN = await GUMARewardsTBr8kGH.balanceOf.call(addressGssZOaY, {from: accounts[2]});
		const uint256peFhaPO = await GUMARewardsTBr8kGH.rewardPerToken.call({from: accounts[4]});

		await expect(GUMARewardsTBr8kGH.setRewardDistribution.call(addressYEZ9aJB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsSEyrIk5 = await GUMARewards.new({from: accounts[5]});
		const addressUoIYEuD = accounts[4]
		const addressIbZrqvK = accounts[1]
		const uintHQiVEgC = BigInt("767")
		const uint256MwmpgT9 = await GUMARewardsSEyrIk5.earned.call(addressUoIYEuD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ATM0Ff = await GUMARewardsSEyrIk5.earned.call(addressIbZrqvK, {from: accounts[0]});
		const uint256HXDihUg = await GUMARewardsSEyrIk5.notifyRewardAmount.call(uintHQiVEgC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ATM0Ff, BigInt("0"))
		assert.equal(uint256MwmpgT9, BigInt("0"))
		await expect(GUMARewardsSEyrIk5.notifyRewardAmount.call(uintHQiVEgC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdR3uB6v = await GUMARewards.new({from: accounts[3]});
		const uintf7PPIo = BigInt("1056")
		const uintjnNnyRi = BigInt("227")
		const uint256a3n2ltG = await GUMARewardsdR3uB6v.stake.call(uintf7PPIo, {from: accounts[0]});
		await GUMARewardsdR3uB6v.onlyRewardDistribution.call({from: accounts[1]});
		const uint256ycLoOy8 = await GUMARewardsdR3uB6v.notifyRewardAmount.call(uintjnNnyRi, {from: accounts[0]});
		await GUMARewardsdR3uB6v.onlyOwner.call({from: accounts[4]});

		await expect(GUMARewardsdR3uB6v.stake.call(uintf7PPIo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsCUbof10 = await GUMARewards.new({from: accounts[0]});
		const addresshmSozuS = "0x0000000000000000000000000000000000000001"
		const addressmoHKB8O = accounts[4]
		const addressylPsdYU = accounts[3]
		const address6KQuJF = accounts[5]
		const addressyNy0SVK = accounts[5]
		await GUMARewardsCUbof10.getReward.call({from: accounts[0]});
		const addressG1695pg = await GUMARewardsCUbof10.setGUMA.call(addressmoHKB8O, addresshmSozuS, {from: accounts[0]});
		await GUMARewardsCUbof10.onlyOwner.call({from: accounts[2]});
		const addressqpG0aPR = await GUMARewardsCUbof10.setRewardDistribution.call(addressylPsdYU, {from: accounts[5]});
		await GUMARewardsCUbof10.onlyRewardDistribution.call({from: accounts[0]});
		const addresseC1yLlr = await GUMARewardsCUbof10.setGUMA.call(addressyNy0SVK, address6KQuJF, {from: accounts[2]});

		await expect(GUMARewardsCUbof10.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJbCy76x = await GUMARewards.new({from: accounts[2]});
		await GUMARewardsJbCy76x.onlyRewardDistribution.call({from: accounts[1]});
		const uint256VWo7Vax = await GUMARewardsJbCy76x.lastTimeRewardApplicable.call({from: accounts[3]});
		await GUMARewardsJbCy76x.renounceOwnership.call({from: accounts[0]});

		await expect(GUMARewardsJbCy76x.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJSRcgXl = await GUMARewards.new({from: accounts[0]});
		const addressIJFtYL4 = accounts[1]
		const addressAiTPc9t = accounts[3]
		const boolKopdh0g = await GUMARewardsJSRcgXl.isOwner.call({from: accounts[3]});
		const addressXE5qheO = await GUMARewardsJSRcgXl.owner.call({from: accounts[2]});
		const uint256fWPFBRH = await GUMARewardsJSRcgXl.earned.call(addressIJFtYL4, {from: accounts[5]});
		const addressrPQfMOz = await GUMARewardsJSRcgXl.updateReward.call(addressAiTPc9t, {from: accounts[4]});
		await GUMARewardsJSRcgXl.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressXE5qheO, 0x42BF336562223A88DB106302a59de8294B79Bb09)
		assert.equal(boolKopdh0g, false)
		assert.equal(uint256fWPFBRH, BigInt("0"))
		await expect(GUMARewardsJSRcgXl.updateReward.call(addressAiTPc9t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsCUbof10 = await GUMARewards.new({from: accounts[0]});
		const uints1gFv2r = BigInt("293")
		const uintAi4A8mj = BigInt("997")
		const addressewcNMUm = accounts[5]
		const addressj8d6XYy = accounts[5]
		const uint256PkINzm = await GUMARewardsCUbof10.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsCUbof10.getReward.call({from: accounts[0]});
		await GUMARewardsCUbof10.renounceOwnership.call({from: accounts[0]});
		const uint256Sj4V5uX = await GUMARewardsCUbof10.totalSupply.call({from: accounts[5]});
		const uint256fEz6AEu = await GUMARewardsCUbof10.stake.call(uints1gFv2r, {from: accounts[2]});
		await GUMARewardsCUbof10.onlyOwner.call({from: accounts[3]});
		const uint256B2BYvO0 = await GUMARewardsCUbof10.stake.call(uintAi4A8mj, {from: accounts[3]});
		await GUMARewardsCUbof10.onlyOwner.call({from: accounts[2]});
		await GUMARewardsCUbof10.onlyRewardDistribution.call({from: accounts[0]});
		const addresseC1yLlr = await GUMARewardsCUbof10.setGUMA.call(addressj8d6XYy, addressewcNMUm, {from: accounts[2]});

		assert.equal(uint256PkINzm, BigInt("0"))
		await expect(GUMARewardsCUbof10.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsCUbof10 = await GUMARewards.new({from: accounts[0]});
		const addressKTD2ox9 = accounts[0]
		const uintJOozb9T = BigInt("293")
		const addressqGmcx1 = "0x0000000000000000000000000000000000000001"
		const addressASEtyjO = accounts[4]
		const addressalNQKXG = accounts[5]
		const addressBC9aqud = accounts[5]
		const uint256PkINzm = await GUMARewardsCUbof10.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsCUbof10.getReward.call({from: accounts[0]});
		const addressKVCHdP6 = await GUMARewardsCUbof10.setRewardDistribution.call(addressKTD2ox9, {from: accounts[0]});
		const uint256fEz6AEu = await GUMARewardsCUbof10.stake.call(uintJOozb9T, {from: accounts[2]});
		const boolYbPD62 = await GUMARewardsCUbof10.isOwner.call({from: accounts[3]});
		await GUMARewardsCUbof10.onlyOwner.call({from: accounts[3]});
		const addressG1695pg = await GUMARewardsCUbof10.setGUMA.call(addressASEtyjO, addressqGmcx1, {from: accounts[0]});
		await GUMARewardsCUbof10.onlyRewardDistribution.call({from: accounts[0]});
		const addresseC1yLlr = await GUMARewardsCUbof10.setGUMA.call(addressBC9aqud, addressalNQKXG, {from: accounts[2]});

		assert.equal(uint256PkINzm, BigInt("0"))
		await expect(GUMARewardsCUbof10.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEoHHFbh = await GUMARewards.new({from: accounts[1]});
		const addressQfhDLbL = "0x0000000000000000000000000000000000000001"
		const addressIhExJy = accounts[4]
		const addressSQXucQd = accounts[4]
		const addressZ0E1lDh = accounts[2]
		const addressWzDin4d = await GUMARewardsEoHHFbh.transferOwnership.call(addressQfhDLbL, {from: accounts[1]});
		const addressRSDIzRy = await GUMARewardsEoHHFbh.setRewardDistribution.call(addressIhExJy, {from: accounts[3]});
		await GUMARewardsEoHHFbh.getReward.call({from: accounts[2]});
		const uint256fHW9hnP = await GUMARewardsEoHHFbh.rewardPerToken.call({from: accounts[0]});
		const addresshWsSxFr = await GUMARewardsEoHHFbh.setRewardDistribution.call(addressSQXucQd, {from: accounts[4]});
		const addressZVO1gO2 = await GUMARewardsEoHHFbh.updateReward.call(addressZ0E1lDh, {from: accounts[0]});

		await expect(GUMARewardsEoHHFbh.setRewardDistribution.call(addressIhExJy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardscI7fGOu = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const boolY1vXakR = await GUMARewardscI7fGOu.isOwner.call({from: accounts[2]});
		const boolHIW5mXh = await GUMARewardscI7fGOu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardscI7fGOu.onlyOwner.call({from: accounts[3]});
	});
})