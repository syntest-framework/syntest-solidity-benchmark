const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsll6CSff = await GUMARewards.new({from: accounts[0]});
		const uintOlQTJE = BigInt("290")
//		await GUMARewardsll6CSff.onlyRewardDistribution.call({from: accounts[3]});
//		const addressu9dJdyw = await GUMARewardsll6CSff.owner.call({from: accounts[3]});
//		const uint256UDiUrBP = await GUMARewardsll6CSff.stake.call(uintOlQTJE, {from: accounts[1]});
//		const addressyGQGMv = await GUMARewardsll6CSff.owner.call({from: accounts[3]});
//		const uint256Pn0QJ3V = await GUMARewardsll6CSff.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsll6CSff.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsn51XVsV = await GUMARewards.new({from: accounts[3]});
		const addressH97s20L = accounts[0]
		const uintzoTkucu = BigInt("1864")
		const uintR9YzJqE = BigInt("1935")
		const addressViMC9W = accounts[2]
		const addressj5szYoA = accounts[1]
//		const addressPRi7Bb = await GUMARewardsn51XVsV.transferOwnership.call(addressH97s20L, {from: accounts[5]});
//		const uint256kyYgYD7 = await GUMARewardsn51XVsV.stake.call(uintzoTkucu, {from: accounts[2]});
//		const uint256Df109or = await GUMARewardsn51XVsV.notifyRewardAmount.call(uintR9YzJqE, {from: accounts[2]});
//		const addressrWPNR99 = await GUMARewardsn51XVsV.transferOwnership.call(addressViMC9W, {from: accounts[3]});
//		const addressR4uao15 = await GUMARewardsn51XVsV.transferOwnership.call(addressj5szYoA, {from: accounts[3]});
//		await GUMARewardsn51XVsV.onlyRewardDistribution.call({from: accounts[2]});

		await expect(GUMARewardsn51XVsV.transferOwnership.call(addressH97s20L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardssMCHP88 = await GUMARewards.new({from: accounts[2]});
		const uint256RT11mpe = await GUMARewardssMCHP88.rewardPerToken.call({from: accounts[5]});
		const uint256bOMCbB2 = await GUMARewardssMCHP88.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RT11mpe, BigInt("0"))
		assert.equal(uint256bOMCbB2, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsh17SwwP = await GUMARewards.new({from: accounts[4]});
		const uintRzZFGts = BigInt("867")
		const uintOAVVvi = BigInt("596")
		const addressltC5cWZ = accounts[0]
//		const uint256tkGL4iX = await GUMARewardsh17SwwP.stake.call(uintRzZFGts, {from: accounts[2]});
//		const uint256KSz1lcH = await GUMARewardsh17SwwP.notifyRewardAmount.call(uintOAVVvi, {from: accounts[1]});
//		await GUMARewardsh17SwwP.renounceOwnership.call({from: accounts[0]});
//		const addressdkNzKrS = await GUMARewardsh17SwwP.updateReward.call(addressltC5cWZ, {from: accounts[1]});
//		await GUMARewardsh17SwwP.onlyOwner.call({from: accounts[4]});
//		const boolNMbcNcC = await GUMARewardsh17SwwP.isOwner.call({from: accounts[0]});

		await expect(GUMARewardsh17SwwP.stake.call(uintRzZFGts, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDdH1tt7 = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWLKHm46 = accounts[2]
		const addressku5tz4S = accounts[3]
		const addressb0zgfIe = accounts[3]
		const addresszu92hK0 = accounts[4]
		const addresseinhA6 = await GUMARewardsDdH1tt7.updateReward.call(addressWLKHm46, {from: accounts[4]});
		const uint256M0RWvS = await GUMARewardsDdH1tt7.totalSupply.call({from: accounts[1]});
		const uint256GtdAqLX = await GUMARewardsDdH1tt7.balanceOf.call(addressku5tz4S, {from: accounts[4]});
		const uint256eHUxTAG = await GUMARewardsDdH1tt7.earned.call(addressb0zgfIe, {from: accounts[4]});
		const addressMvtBCLK = await GUMARewardsDdH1tt7.updateReward.call(addresszu92hK0, {from: accounts[0]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsNFoRIbK = await GUMARewards.new({from: accounts[1]});
		const uintBOCaiGd = BigInt("569")
		const addressWrm0Wnh = accounts[0]
		const addressjFSabzp = accounts[4]
//		const uint256xz5JiII = await GUMARewardsNFoRIbK.notifyRewardAmount.call(uintBOCaiGd, {from: accounts[3]});
//		const addresspgbXWVD = await GUMARewardsNFoRIbK.transferOwnership.call(addressWrm0Wnh, {from: accounts[3]});
//		const uint256iq9eT7M = await GUMARewardsNFoRIbK.earned.call(addressjFSabzp, {from: accounts[1]});
//		await GUMARewardsNFoRIbK.onlyRewardDistribution.call({from: accounts[4]});
//		const boolpXlKxzF = await GUMARewardsNFoRIbK.isOwner.call({from: accounts[3]});

		await expect(GUMARewardsNFoRIbK.notifyRewardAmount.call(uintBOCaiGd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardscLtGzQs = await GUMARewards.new({from: accounts[3]});
		const addressmndM61f = accounts[3]
		const addresswISZyz8 = accounts[1]
		const uint256w4ep1dR = await GUMARewardscLtGzQs.earned.call(addressmndM61f, {from: "0x0000000000000000000000000000000000000001"});
		const addressMjUpv0 = await GUMARewardscLtGzQs.transferOwnership.call(addresswISZyz8, {from: accounts[3]});
//		await GUMARewardscLtGzQs.onlyRewardDistribution.call({from: accounts[2]});

		assert.equal(uint256w4ep1dR, BigInt("0"))
		await expect(GUMARewardscLtGzQs.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardssMCHP88 = await GUMARewards.new({from: accounts[2]});
		const uint256RT11mpe = await GUMARewardssMCHP88.rewardPerToken.call({from: accounts[5]});
//		await GUMARewardssMCHP88.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256RT11mpe, BigInt("0"))
		await expect(GUMARewardssMCHP88.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsMMIykdm = await GUMARewards.new({from: accounts[1]});
//		await GUMARewardsMMIykdm.getReward.call({from: accounts[5]});
//		const uint256y4NRt88 = await GUMARewardsMMIykdm.rewardPerToken.call({from: accounts[3]});
//		await GUMARewardsMMIykdm.onlyOwner.call({from: accounts[2]});

		await expect(GUMARewardsMMIykdm.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsMMIykdm = await GUMARewards.new({from: accounts[1]});
		const addressUAU8LdC = await GUMARewardsMMIykdm.owner.call({from: accounts[4]});
//		await GUMARewardsMMIykdm.getReward.call({from: accounts[5]});

		assert.equal(addressUAU8LdC, 0x74D5F451269B94f989a9125685b06e58e0Eb20F3)
		await expect(GUMARewardsMMIykdm.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardssMCHP88 = await GUMARewards.new({from: accounts[2]});
		const addressbGH6dO = accounts[2]
		const addressPewFOwa = "0x0000000000000000000000000000000000000001"
		const addressR5k9bKp = accounts[3]
		const uint256RT11mpe = await GUMARewardssMCHP88.rewardPerToken.call({from: accounts[5]});
		const addresswK2ZPzJ = await GUMARewardssMCHP88.setRewardDistribution.call(addressbGH6dO, {from: accounts[2]});
//		const addressGIef0E8 = await GUMARewardssMCHP88.setGUMA.call(addressR5k9bKp, addressPewFOwa, {from: accounts[1]});

		assert.equal(uint256RT11mpe, BigInt("0"))
		await expect(GUMARewardssMCHP88.setGUMA.call(addressR5k9bKp, addressPewFOwa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})