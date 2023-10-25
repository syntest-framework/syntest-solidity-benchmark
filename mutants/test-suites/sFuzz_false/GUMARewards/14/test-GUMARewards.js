const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardspb5O8oC = await GUMARewards.new({from: accounts[4]});
		const addresss1cqQpJ = accounts[5]
		const uintLiWFKcV = BigInt("586")
//		const addressnPDwFOC = await GUMARewardspb5O8oC.updateReward.call(addresss1cqQpJ, {from: accounts[3]});
//		const uint256SB5d6NW = await GUMARewardspb5O8oC.stake.call(uintLiWFKcV, {from: accounts[3]});

		await expect(GUMARewardspb5O8oC.updateReward.call(addresss1cqQpJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJkk5vpw = await GUMARewards.new({from: accounts[5]});
		const addressFfWUw6a = accounts[2]
		const addresse7xOxwY = accounts[2]
		const addressvrQvTbb = accounts[3]
		const uint256OPW1xYl = await GUMARewardsJkk5vpw.rewardPerToken.call({from: accounts[2]});
//		const addressNPKJ4fS = await GUMARewardsJkk5vpw.transferOwnership.call(addressFfWUw6a, {from: accounts[3]});
//		const addressO0At23z = await GUMARewardsJkk5vpw.transferOwnership.call(addresse7xOxwY, {from: accounts[5]});
//		const uint256a0q576Z = await GUMARewardsJkk5vpw.balanceOf.call(addressvrQvTbb, {from: accounts[3]});
//		const addressC3rb1R = await GUMARewardsJkk5vpw.owner.call({from: accounts[4]});

		assert.equal(uint256OPW1xYl, BigInt("0"))
		await expect(GUMARewardsJkk5vpw.transferOwnership.call(addressFfWUw6a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsMRQYdYY = await GUMARewards.new({from: accounts[3]});
		const addressTsIvzn4 = accounts[3]
		const uint256j16zwqc = await GUMARewardsMRQYdYY.balanceOf.call(addressTsIvzn4, {from: accounts[4]});
//		await GUMARewardsMRQYdYY.getReward.call({from: accounts[0]});
//		await GUMARewardsMRQYdYY.onlyRewardDistribution.call({from: accounts[2]});
//		const uint256Qw0wss7 = await GUMARewardsMRQYdYY.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256j16zwqc, BigInt("0"))
		await expect(GUMARewardsMRQYdYY.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshvl6mmO = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzTNnvSM = BigInt("194")
		const addressymhJWf3 = accounts[1]
		const addressbvVCugW = accounts[0]
		const uintVoINO3p = BigInt("919")
		const uint256R6R9ezn = await GUMARewardshvl6mmO.stake.call(uintzTNnvSM, {from: accounts[5]});
		const addressorBrUv = await GUMARewardshvl6mmO.transferOwnership.call(addressymhJWf3, {from: accounts[3]});
		await GUMARewardshvl6mmO.onlyOwner.call({from: accounts[4]});
		const addressXhtzYI1 = await GUMARewardshvl6mmO.updateReward.call(addressbvVCugW, {from: accounts[4]});
		const uint256uPSVdh0 = await GUMARewardshvl6mmO.stake.call(uintVoINO3p, {from: accounts[5]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsidSmOQC = await GUMARewards.new({from: accounts[2]});
		const uintQZoJn0 = BigInt("160")
//		const uint256J6ZUBBB = await GUMARewardsidSmOQC.stake.call(uintQZoJn0, {from: accounts[3]});
//		const uint256K7Jph8n = await GUMARewardsidSmOQC.rewardPerToken.call({from: accounts[3]});

		await expect(GUMARewardsidSmOQC.stake.call(uintQZoJn0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsi0R1LiI = await GUMARewards.new({from: accounts[0]});
		const uintdAVlWo1 = BigInt("647")
		const addressXdu0qn = accounts[2]
		const addresszp8ZJI = accounts[0]
		const addresskdpPUSt = accounts[3]
//		const uint256usBBKo = await GUMARewardsi0R1LiI.notifyRewardAmount.call(uintdAVlWo1, {from: accounts[3]});
//		const uint256F6ojwTY = await GUMARewardsi0R1LiI.balanceOf.call(addressXdu0qn, {from: accounts[3]});
//		const addressXdDqW4Y = await GUMARewardsi0R1LiI.setGUMA.call(addresskdpPUSt, addresszp8ZJI, {from: accounts[0]});
//		const boolbzE9XD0 = await GUMARewardsi0R1LiI.isOwner.call({from: accounts[4]});
//		await GUMARewardsi0R1LiI.getReward.call({from: accounts[4]});

		await expect(GUMARewardsi0R1LiI.notifyRewardAmount.call(uintdAVlWo1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsMRQYdYY = await GUMARewards.new({from: accounts[3]});
		const addressfVIGQvQ = accounts[3]
		const uint256j16zwqc = await GUMARewardsMRQYdYY.balanceOf.call(addressfVIGQvQ, {from: accounts[4]});
//		await GUMARewardsMRQYdYY.renounceOwnership.call({from: accounts[3]});
//		await GUMARewardsMRQYdYY.onlyRewardDistribution.call({from: accounts[2]});
//		const uint256Qw0wss7 = await GUMARewardsMRQYdYY.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256j16zwqc, BigInt("0"))
		await expect(GUMARewardsMRQYdYY.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsMRQYdYY = await GUMARewards.new({from: accounts[3]});
		const addressUUGej0j = accounts[3]
		const addresslAwGE5O = accounts[3]
		const addresseMhUTTn = accounts[1]
		const address2DkYXj = accounts[0]
		const addressBscqnQ9 = accounts[3]
		const addressaFBsbGA = await GUMARewardsMRQYdYY.transferOwnership.call(addressUUGej0j, {from: accounts[3]});
		const uint256j16zwqc = await GUMARewardsMRQYdYY.balanceOf.call(addresslAwGE5O, {from: accounts[4]});
		const addressiRZyc39 = await GUMARewardsMRQYdYY.transferOwnership.call(addresseMhUTTn, {from: accounts[3]});
		const addressDO5TNOG = await GUMARewardsMRQYdYY.transferOwnership.call(address2DkYXj, {from: accounts[3]});
//		await GUMARewardsMRQYdYY.getReward.call({from: accounts[0]});
//		const addressh4lxXGG = await GUMARewardsMRQYdYY.transferOwnership.call(addressBscqnQ9, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Qw0wss7 = await GUMARewardsMRQYdYY.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256j16zwqc, BigInt("0"))
		await expect(GUMARewardsMRQYdYY.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsTn3wCcH = await GUMARewards.new({from: accounts[4]});
		const addressJmiEdrU = accounts[1]
		const addressBJOrJG = accounts[2]
		const uint256YSccULH = await GUMARewardsTn3wCcH.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressRRrIKlA = await GUMARewardsTn3wCcH.setRewardDistribution.call(addressJmiEdrU, {from: accounts[4]});
//		await GUMARewardsTn3wCcH.onlyOwner.call({from: accounts[0]});
//		const addressMZHofh = await GUMARewardsTn3wCcH.owner.call({from: accounts[5]});
//		const addressyhHFDI = await GUMARewardsTn3wCcH.updateReward.call(addressBJOrJG, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAHKc48R = await GUMARewardsTn3wCcH.isOwner.call({from: accounts[3]});

		assert.equal(uint256YSccULH, BigInt("0"))
		await expect(GUMARewardsTn3wCcH.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsMRQYdYY = await GUMARewards.new({from: accounts[3]});
		const addressHKrBhbG = accounts[3]
		const uint256j16zwqc = await GUMARewardsMRQYdYY.balanceOf.call(addressHKrBhbG, {from: accounts[4]});
//		await GUMARewardsMRQYdYY.getReward.call({from: accounts[0]});
//		const addressxXRsq1n = await GUMARewardsMRQYdYY.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Qw0wss7 = await GUMARewardsMRQYdYY.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256j16zwqc, BigInt("0"))
		await expect(GUMARewardsMRQYdYY.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})