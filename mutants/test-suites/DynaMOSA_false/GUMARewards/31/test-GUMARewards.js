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
		const GUMARewardssMCHP88 = await GUMARewards.new({from: accounts[2]});
		const addressnEiQpEh = accounts[4]
		const addressfHzYLRC = accounts[0]
		const addressNiL7mHc = accounts[3]
		const uint256RT11mpe = await GUMARewardssMCHP88.rewardPerToken.call({from: accounts[5]});
		const uint256ljlJHP = await GUMARewardssMCHP88.earned.call(addressnEiQpEh, {from: accounts[0]});
		const uint256uYIqsu0 = await GUMARewardssMCHP88.totalSupply.call({from: accounts[2]});
		const uint256UKDV8z5 = await GUMARewardssMCHP88.lastTimeRewardApplicable.call({from: accounts[3]});
		const addresscCrCTn9 = await GUMARewardssMCHP88.transferOwnership.call(addressfHzYLRC, {from: accounts[2]});
		const uint256ZPDVJ5 = await GUMARewardssMCHP88.totalSupply.call({from: accounts[1]});
		const uint256OPihQLB = await GUMARewardssMCHP88.earned.call(addressNiL7mHc, {from: accounts[5]});
		const boolLWTzsm = await GUMARewardssMCHP88.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLWTzsm, false)
		assert.equal(uint256OPihQLB, BigInt("0"))
		assert.equal(uint256RT11mpe, BigInt("0"))
		assert.equal(uint256UKDV8z5, BigInt("0"))
		assert.equal(uint256ZPDVJ5, BigInt("0"))
		assert.equal(uint256ljlJHP, BigInt("0"))
		assert.equal(uint256uYIqsu0, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsh17SwwP = await GUMARewards.new({from: accounts[4]});
		const uintK3vjJW8 = BigInt("867")
		const uintXVcs4wz = BigInt("596")
		const uintMLkzRo = BigInt("276")
		const addressW63LRZe = accounts[1]
//		await GUMARewardsh17SwwP.renounceOwnership.call({from: accounts[4]});
//		const uint256tkGL4iX = await GUMARewardsh17SwwP.stake.call(uintK3vjJW8, {from: accounts[2]});
//		const uint256KSz1lcH = await GUMARewardsh17SwwP.notifyRewardAmount.call(uintXVcs4wz, {from: accounts[1]});
//		await GUMARewardsh17SwwP.renounceOwnership.call({from: accounts[0]});
//		const uint256w37DmXj = await GUMARewardsh17SwwP.notifyRewardAmount.call(uintMLkzRo, {from: accounts[3]});
//		const boolCqyYx3g = await GUMARewardsh17SwwP.isOwner.call({from: accounts[3]});
//		const addressdkNzKrS = await GUMARewardsh17SwwP.updateReward.call(addressW63LRZe, {from: accounts[1]});
//		await GUMARewardsh17SwwP.onlyOwner.call({from: accounts[4]});
//		const boolNMbcNcC = await GUMARewardsh17SwwP.isOwner.call({from: accounts[0]});

		await expect(GUMARewardsh17SwwP.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardssMCHP88 = await GUMARewards.new({from: accounts[2]});
		const addresswOySala = accounts[2]
		const addressjYT3jeL = await GUMARewardssMCHP88.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256touupzs = await GUMARewardssMCHP88.rewardPerToken.call({from: accounts[0]});
		const uint256wH7oQ0P = await GUMARewardssMCHP88.earned.call(addresswOySala, {from: accounts[2]});

		assert.equal(addressjYT3jeL, 0x72AD266cA37829539b1C2B61C23ce65431b14B4b)
		assert.equal(uint256touupzs, BigInt("0"))
		assert.equal(uint256wH7oQ0P, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGseDPR = await GUMARewards.new({from: accounts[0]});
		const addressYbxhvhr = accounts[1]
		const addresss251eAt = accounts[4]
		const uintVkEHM2 = BigInt("1615")
		const addresse2Rcd2F = accounts[4]
//		await GUMARewardsGseDPR.getReward.call({from: accounts[4]});
//		const addressMSgptx = await GUMARewardsGseDPR.setGUMA.call(addresss251eAt, addressYbxhvhr, {from: accounts[0]});
//		const uint256rHyCYzP = await GUMARewardsGseDPR.stake.call(uintVkEHM2, {from: accounts[1]});
//		const uint256H4niQwf = await GUMARewardsGseDPR.balanceOf.call(addresse2Rcd2F, {from: accounts[3]});
//		await GUMARewardsGseDPR.renounceOwnership.call({from: accounts[5]});

		await expect(GUMARewardsGseDPR.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGFTtkG3 = await GUMARewards.new({from: accounts[3]});
		const addressV0o60i6 = accounts[0]
		const uinth0pV3UH = BigInt("1418")
		const addressDFdOLLq = accounts[3]
//		await GUMARewardsGFTtkG3.getReward.call({from: accounts[4]});
//		const addressxLNM6Ex = await GUMARewardsGFTtkG3.setRewardDistribution.call(addressV0o60i6, {from: accounts[3]});
//		const uint256fGxruc = await GUMARewardsGFTtkG3.stake.call(uinth0pV3UH, {from: accounts[2]});
//		const uint256rZr2q5e = await GUMARewardsGFTtkG3.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressxONYpLi = await GUMARewardsGFTtkG3.transferOwnership.call(addressDFdOLLq, {from: accounts[3]});
//		const uint256egP7bu4 = await GUMARewardsGFTtkG3.rewardPerToken.call({from: accounts[0]});
//		const uint256YK9Q00s = await GUMARewardsGFTtkG3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsGFTtkG3.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})