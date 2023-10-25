const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsKSa1P4a = await SSTRewards.new({from: accounts[2]});
		const uinto93TAuv = BigInt("262")
		const uintbefDzX = BigInt("1333")
		const uintcl37Kkj = BigInt("543")
		const uintSNSpM1z = BigInt("398")
		await SSTRewardsKSa1P4a.checkStart.call({from: accounts[4]});
		const uint256RpGVJ1 = await SSTRewardsKSa1P4a.withdraw.call(uinto93TAuv, {from: accounts[2]});
		const uint256v7dCPfE = await SSTRewardsKSa1P4a.withdraw.call(uintbefDzX, {from: accounts[4]});
		const uint256MrpeuEc = await SSTRewardsKSa1P4a.stake.call(uintcl37Kkj, {from: accounts[2]});
		const uint256uMrIWOO = await SSTRewardsKSa1P4a.notifyRewardAmount.call(uintSNSpM1z, {from: accounts[4]});

		await expect(SSTRewardsKSa1P4a.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsC5aUgSz = await SSTRewards.new({from: accounts[0]});
		const uintAvhAT3m = BigInt("1875")
		const uint256EVsTdaP = await SSTRewardsC5aUgSz.totalSupply.call({from: accounts[1]});
		const uint256Jr4t5XL = await SSTRewardsC5aUgSz.stake.call(uintAvhAT3m, {from: accounts[5]});
		await SSTRewardsC5aUgSz.getReward.call({from: accounts[5]});

		assert.equal(uint256EVsTdaP, BigInt("0"))
		await expect(SSTRewardsC5aUgSz.stake.call(uintAvhAT3m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsKD11EOb = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressz4JFP2i = accounts[2]
		const uintYD7H8J5 = BigInt("850")
		const addressd9AMCjm = accounts[0]
		const uintvRineZq = BigInt("740")
		const addresswDzM66r = "0x0000000000000000000000000000000000000001"
		const uint256xunqJYc = await SSTRewardsKD11EOb.balanceOf.call(addressz4JFP2i, {from: accounts[0]});
		const uint256e1LN9gM = await SSTRewardsKD11EOb.stake.call(uintYD7H8J5, {from: accounts[0]});
		const uint256gOnoKxm = await SSTRewardsKD11EOb.balanceOf.call(addressd9AMCjm, {from: accounts[4]});
		const uint256QJyzGGH = await SSTRewardsKD11EOb.withdraw.call(uintvRineZq, {from: accounts[5]});
		const uint256gEPFJAk = await SSTRewardsKD11EOb.totalSupply.call({from: accounts[4]});
		const uint256bwbEPG3 = await SSTRewardsKD11EOb.earned.call(addresswDzM66r, {from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsWdr0hkG = await SSTRewards.new({from: accounts[0]});
		const uintqmNhRV = BigInt("1957")
		const uintA5ME1Tr = BigInt("1499")
		const uint256pnnpYTj = await SSTRewardsWdr0hkG.rewardPerToken.call({from: accounts[4]});
		const uint256dPT4lQj = await SSTRewardsWdr0hkG.rewardPerToken.call({from: accounts[5]});
		const uint256uIEO5ju = await SSTRewardsWdr0hkG.withdraw.call(uintqmNhRV, {from: accounts[2]});
		const uint256U6CKXc = await SSTRewardsWdr0hkG.totalSupply.call({from: accounts[0]});
		const uint256nxGNVFp = await SSTRewardsWdr0hkG.notifyRewardAmount.call(uintA5ME1Tr, {from: accounts[0]});

		assert.equal(uint256dPT4lQj, BigInt("0"))
		assert.equal(uint256pnnpYTj, BigInt("0"))
		await expect(SSTRewardsWdr0hkG.withdraw.call(uintqmNhRV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsOEJvHH9 = await SSTRewards.new({from: accounts[4]});
		const addressRtavi8H = accounts[5]
		const addressSFbGVDr = accounts[2]
		const uint256vk8t5cF = await SSTRewardsOEJvHH9.earned.call(addressRtavi8H, {from: accounts[0]});
		const uint256drjJ0Mf = await SSTRewardsOEJvHH9.balanceOf.call(addressSFbGVDr, {from: accounts[1]});
		await SSTRewardsOEJvHH9.exit.call({from: accounts[1]});

		assert.equal(uint256drjJ0Mf, BigInt("0"))
		assert.equal(uint256vk8t5cF, BigInt("0"))
		await expect(SSTRewardsOEJvHH9.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsC5aUgSz = await SSTRewards.new({from: accounts[0]});
		const addressLFHN8F = accounts[2]
		const uint256EVsTdaP = await SSTRewardsC5aUgSz.totalSupply.call({from: accounts[1]});
		const uint256cObVilH = await SSTRewardsC5aUgSz.totalSupply.call({from: accounts[2]});
		await SSTRewardsC5aUgSz.getReward.call({from: accounts[5]});
		const uint256D9rwyc5 = await SSTRewardsC5aUgSz.earned.call(addressLFHN8F, {from: accounts[0]});

		assert.equal(uint256EVsTdaP, BigInt("0"))
		assert.equal(uint256cObVilH, BigInt("0"))
		await expect(SSTRewardsC5aUgSz.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsC5aUgSz = await SSTRewards.new({from: accounts[0]});
		const uinti2DlFN = BigInt("1428")
		const addressiaDBV7F = accounts[2]
		const uint256EVsTdaP = await SSTRewardsC5aUgSz.totalSupply.call({from: accounts[1]});
		const uint256UMlwumf = await SSTRewardsC5aUgSz.notifyRewardAmount.call(uinti2DlFN, {from: accounts[0]});
		await SSTRewardsC5aUgSz.getReward.call({from: accounts[5]});
		const uint256D9rwyc5 = await SSTRewardsC5aUgSz.earned.call(addressiaDBV7F, {from: accounts[0]});

		assert.equal(uint256EVsTdaP, BigInt("0"))
		await expect(SSTRewardsC5aUgSz.notifyRewardAmount.call(uinti2DlFN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})