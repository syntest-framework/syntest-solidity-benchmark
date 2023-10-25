const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHfJhz0h = accounts[4]
		const FrogDAOGovernanceRewardsPJAnMQH = await FrogDAOGovernanceRewards.new(addressHfJhz0h, {from: accounts[1]});
		const addresshiswWDb = accounts[1]
		const uintpPRPoBE = BigInt("1274")
		const addressTzJNCX = accounts[3]
//		const addressFBhCrhd = await FrogDAOGovernanceRewardsPJAnMQH.updateReward.call(addresshiswWDb, {from: accounts[0]});
//		const uint256dJmh3O = await FrogDAOGovernanceRewardsPJAnMQH.notifyRewardAmount.call(uintpPRPoBE, {from: accounts[1]});
//		const uint256UFw7G0Q = await FrogDAOGovernanceRewardsPJAnMQH.earned.call(addressTzJNCX, {from: accounts[2]});
//		const uint256G5eXFI9 = await FrogDAOGovernanceRewardsPJAnMQH.devFundAvailable.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsPJAnMQH.getReward.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsPJAnMQH.updateReward.call(addresshiswWDb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRVz20TV = accounts[2]
		const FrogDAOGovernanceRewardsNJWWazs = await FrogDAOGovernanceRewards.new(addressRVz20TV, {from: accounts[2]});
		const uintCxBqtdq = BigInt("1010")
		const address7jxO9d = accounts[2]
		const uint256yrCXnq9 = await FrogDAOGovernanceRewardsNJWWazs.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256csmsoh = await FrogDAOGovernanceRewardsNJWWazs.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256yPr3l8g = await FrogDAOGovernanceRewardsNJWWazs.notifyRewardAmount.call(uintCxBqtdq, {from: accounts[3]});
//		const addressyllhTt = await FrogDAOGovernanceRewardsNJWWazs.updateReward.call(address7jxO9d, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsNJWWazs.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256pifo4uL = await FrogDAOGovernanceRewardsNJWWazs.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256csmsoh, BigInt("0"))
		assert.equal(uint256yrCXnq9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsNJWWazs.notifyRewardAmount.call(uintCxBqtdq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTFn1Blv = accounts[2]
		const FrogDAOGovernanceRewardsgWXTfI3 = await FrogDAOGovernanceRewards.new(addressTFn1Blv, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsgWXTfI3.renounceDevAddr.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsgWXTfI3.renounceDevAddr.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsgWXTfI3.exit.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsgWXTfI3.checkStart.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsgWXTfI3.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgWhfJ8W = accounts[4]
		const FrogDAOGovernanceRewardsgmGzoKV = await FrogDAOGovernanceRewards.new(addressgWhfJ8W, {from: accounts[2]});
		const uintXLa1dXe = BigInt("893")
		const uintWWF4NpS = BigInt("979")
		const addresslfS2QUD = accounts[2]
//		const uint2562qt02c = await FrogDAOGovernanceRewardsgmGzoKV.stake.call(uintXLa1dXe, {from: accounts[2]});
//		const uint256siBzhGS = await FrogDAOGovernanceRewardsgmGzoKV.stake.call(uintWWF4NpS, {from: accounts[5]});
//		const addressVPVLpME = await FrogDAOGovernanceRewardsgmGzoKV.transferDevAddr.call(addresslfS2QUD, {from: accounts[5]});
//		const uint256dsDESZ = await FrogDAOGovernanceRewardsgmGzoKV.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsgmGzoKV.stake.call(uintXLa1dXe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressPXlLDnt = accounts[4]
		const FrogDAOGovernanceRewardsEP8ex70 = await FrogDAOGovernanceRewards.new(addressPXlLDnt, {from: accounts[5]});
		const addressxASjSOW = accounts[5]
		const uintd7UbaWP = BigInt("974")
//		await FrogDAOGovernanceRewardsEP8ex70.exit.call({from: accounts[2]});
//		const addressnE3HTLS = await FrogDAOGovernanceRewardsEP8ex70.updateReward.call(addressxASjSOW, {from: accounts[0]});
//		const uint256T65IpO = await FrogDAOGovernanceRewardsEP8ex70.rewardPerToken.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsEP8ex70.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ESYu2VJ = await FrogDAOGovernanceRewardsEP8ex70.notifyRewardAmount.call(uintd7UbaWP, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsEP8ex70.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdj3x2bG = accounts[3]
		const FrogDAOGovernanceRewardsn47ZfZF = await FrogDAOGovernanceRewards.new(addressdj3x2bG, {from: accounts[1]});
		const uintbviZSHT = BigInt("1632")
		const addressErfBZdy = accounts[0]
//		const uint256AgDT9RS = await FrogDAOGovernanceRewardsn47ZfZF.withdrawDevFund.call(uintbviZSHT, {from: accounts[2]});
//		const addressteUHdZC = await FrogDAOGovernanceRewardsn47ZfZF.updateReward.call(addressErfBZdy, {from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsn47ZfZF.exit.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsn47ZfZF.withdrawDevFund.call(uintbviZSHT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressyVo0kO = accounts[4]
		const FrogDAOGovernanceRewardsTGemvtI = await FrogDAOGovernanceRewards.new(addressyVo0kO, {from: accounts[3]});
		const addressuvh62MC = accounts[4]
		const uintndVRiKd = BigInt("256")
		const addressg0rBlV6 = await FrogDAOGovernanceRewardsTGemvtI.transferDevAddr.call(addressuvh62MC, {from: accounts[4]});
//		const uint256nBMR8T4 = await FrogDAOGovernanceRewardsTGemvtI.stake.call(uintndVRiKd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsTGemvtI.stake.call(uintndVRiKd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressG7Gegm4 = accounts[4]
		const FrogDAOGovernanceRewardsTGemvtI = await FrogDAOGovernanceRewards.new(addressG7Gegm4, {from: accounts[3]});
		const addressEhJtkRR = accounts[4]
		const uintinLUZca = BigInt("256")
//		await FrogDAOGovernanceRewardsTGemvtI.renounceDevAddr.call({from: accounts[4]});
//		const uint256ecmXS83 = await FrogDAOGovernanceRewardsTGemvtI.rewardPerToken.call({from: accounts[2]});
//		const uint256he9DaA = await FrogDAOGovernanceRewardsTGemvtI.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressg0rBlV6 = await FrogDAOGovernanceRewardsTGemvtI.transferDevAddr.call(addressEhJtkRR, {from: accounts[4]});
//		const uint256nBMR8T4 = await FrogDAOGovernanceRewardsTGemvtI.stake.call(uintinLUZca, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsTGemvtI.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresskHeH3xM = accounts[4]
		const FrogDAOGovernanceRewardsTGemvtI = await FrogDAOGovernanceRewards.new(addresskHeH3xM, {from: accounts[3]});
		const uintiEH4AQP = BigInt("1900")
		const uint5BtJ5b = BigInt("256")
//		const uint256ACf8fIQ = await FrogDAOGovernanceRewardsTGemvtI.withdraw.call(uintiEH4AQP, {from: accounts[3]});
//		const uint256nBMR8T4 = await FrogDAOGovernanceRewardsTGemvtI.stake.call(uint5BtJ5b, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsTGemvtI.withdraw.call(uintiEH4AQP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnFcbpAo = accounts[5]
		const FrogDAOGovernanceRewardsJRVrz37 = await FrogDAOGovernanceRewards.new(addressnFcbpAo, {from: "0x0000000000000000000000000000000000000001"});
		const uintLEwNTy = BigInt("1556")
		const uintGDkbxoq = BigInt("1539")
		const addressGLi1DOm = "0x0000000000000000000000000000000000000001"
		const uint256Ybt0zDi = await FrogDAOGovernanceRewardsJRVrz37.withdraw.call(uintLEwNTy, {from: accounts[0]});
		const uint256j3eYkQp = await FrogDAOGovernanceRewardsJRVrz37.withdraw.call(uintGDkbxoq, {from: accounts[5]});
		const addressNTIQIln = await FrogDAOGovernanceRewardsJRVrz37.updateReward.call(addressGLi1DOm, {from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressGammFmZ = accounts[2]
		const FrogDAOGovernanceRewardsKKVUtYx = await FrogDAOGovernanceRewards.new(addressGammFmZ, {from: accounts[4]});
		const uintT6Y6rmE = BigInt("1495")
		const addressXyAlaTw = accounts[5]
		const uintUoelBcO = BigInt("1020")
		const uintmKvkY8n = BigInt("332")
//		const uint256haBI0pu = await FrogDAOGovernanceRewardsKKVUtYx.withdrawDevFund.call(uintT6Y6rmE, {from: accounts[2]});
//		const addressfAPGAt = await FrogDAOGovernanceRewardsKKVUtYx.transferDevAddr.call(addressXyAlaTw, {from: accounts[0]});
//		const uint256kxa4GZU = await FrogDAOGovernanceRewardsKKVUtYx.withdrawDevFund.call(uintUoelBcO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256hvGCrAO = await FrogDAOGovernanceRewardsKKVUtYx.stake.call(uintmKvkY8n, {from: accounts[2]});
//		const uint256jR0PZ6s = await FrogDAOGovernanceRewardsKKVUtYx.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsKKVUtYx.withdrawDevFund.call(uintT6Y6rmE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressbNvXUiN = accounts[3]
		const FrogDAOGovernanceRewardsITf2BtN = await FrogDAOGovernanceRewards.new(addressbNvXUiN, {from: accounts[0]});
		const uintc2eK3f = BigInt("469")
		const uint4B8BfM = BigInt("1164")
//		const uint256twVVxK = await FrogDAOGovernanceRewardsITf2BtN.notifyRewardAmount.call(uintc2eK3f, {from: accounts[0]});
//		const uint256BH2sIpz = await FrogDAOGovernanceRewardsITf2BtN.notifyRewardAmount.call(uint4B8BfM, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsITf2BtN.notifyRewardAmount.call(uintc2eK3f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})