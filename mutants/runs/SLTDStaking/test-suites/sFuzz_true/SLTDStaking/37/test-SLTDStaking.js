const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingqvb49Yf = await SLTDStaking.new({from: accounts[2]});
		const addressGtd8bTB = accounts[4]
		const uintktt7hXE = BigInt("735")
		const uintFhoD5AH = BigInt("869")
		const addressomKklVP = accounts[0]
		const addressqOHLqzx = await SLTDStakingqvb49Yf.transferOwnership.call(addressGtd8bTB, {from: accounts[3]});
		const uint256bIl8a83 = await SLTDStakingqvb49Yf.stake.call(uintktt7hXE, {from: accounts[0]});
		const uint256KQNK7P = await SLTDStakingqvb49Yf.totalSupply.call({from: accounts[2]});
		const uint256JRdr8Nb = await SLTDStakingqvb49Yf.stake.call(uintFhoD5AH, {from: accounts[5]});
		const uint256uo1dAoc = await SLTDStakingqvb49Yf.earned.call(addressomKklVP, {from: accounts[1]});

		await expect(SLTDStakingqvb49Yf.transferOwnership.call(addressGtd8bTB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9DGB91 = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingM9DGB91.exit.call({from: accounts[0]});
		const addressGhZrZLD = await SLTDStakingM9DGB91.owner.call({from: accounts[4]});

		await expect(SLTDStakingM9DGB91.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingoxQmyZE = await SLTDStaking.new({from: accounts[5]});
		const address588pH6 = accounts[1]
		const addressZS0I3vf = accounts[0]
		const uintuMikpbq = BigInt("1791")
		await SLTDStakingoxQmyZE.onlyRewardDistribution.call({from: accounts[5]});
		const uint256eBZfkil = await SLTDStakingoxQmyZE.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressJEBOZB8 = await SLTDStakingoxQmyZE.setSLTD.call(addressZS0I3vf, address588pH6, {from: accounts[0]});
		const uint256OqxLNNr = await SLTDStakingoxQmyZE.stake.call(uintuMikpbq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingoxQmyZE.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingKIv7oLm = await SLTDStaking.new({from: accounts[2]});
		const uintiz43QL = BigInt("1677")
		const boolYUDEdsQ = await SLTDStakingKIv7oLm.isOwner.call({from: accounts[2]});
		const uint256OLz5Plu = await SLTDStakingKIv7oLm.withdraw.call(uintiz43QL, {from: accounts[4]});
		await SLTDStakingKIv7oLm.getReward.call({from: accounts[0]});

		assert.equal(boolYUDEdsQ, true)
		await expect(SLTDStakingKIv7oLm.withdraw.call(uintiz43QL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingz6sWHpX = await SLTDStaking.new({from: accounts[2]});
		const addressHOqrRs = accounts[1]
		const addressTSVP7zJ = accounts[5]
		const address8Cg7yK = accounts[2]
		const uintDmAM3RB = BigInt("338")
		const addressuOw8kFG = await SLTDStakingz6sWHpX.setSLTD.call(addressTSVP7zJ, addressHOqrRs, {from: accounts[2]});
		const booleUqSgFN = await SLTDStakingz6sWHpX.isOwner.call({from: accounts[4]});
		const addresschhCtIy = await SLTDStakingz6sWHpX.setRewardDistribution.call(address8Cg7yK, {from: accounts[4]});
		const uint256aZBr4iA = await SLTDStakingz6sWHpX.withdraw.call(uintDmAM3RB, {from: accounts[2]});

		await expect(SLTDStakingz6sWHpX.setSLTD.call(addressTSVP7zJ, addressHOqrRs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingVeapWlR = await SLTDStaking.new({from: accounts[0]});
		const uintHDgpDLp = BigInt("54")
		const addressdKPD62V = accounts[0]
		const uint256vAZCtzT = await SLTDStakingVeapWlR.stake.call(uintHDgpDLp, {from: accounts[4]});
		const uint256Gq2sAXG = await SLTDStakingVeapWlR.totalSupply.call({from: accounts[5]});
		const addressKIGhAPp = await SLTDStakingVeapWlR.transferOwnership.call(addressdKPD62V, {from: accounts[0]});
		await SLTDStakingVeapWlR.getReward.call({from: accounts[2]});

		await expect(SLTDStakingVeapWlR.stake.call(uintHDgpDLp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9DGB91 = await SLTDStaking.new({from: accounts[2]});
		const addressGhZrZLD = await SLTDStakingM9DGB91.owner.call({from: accounts[4]});

		assert.equal(addressGhZrZLD, 0xb6273cD04f0A7DC10fa99d7aB1539c05f53Cf85D)
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingVzukAuM = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAsbEsC = BigInt("1651")
		const addressUfNDmhI = accounts[0]
		await SLTDStakingVzukAuM.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WXzWfSX = await SLTDStakingVzukAuM.stake.call(uintAsbEsC, {from: accounts[5]});
		const uint256emtZznj = await SLTDStakingVzukAuM.balanceOf.call(addressUfNDmhI, {from: accounts[0]});
		await SLTDStakingVzukAuM.getReward.call({from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9DGB91 = await SLTDStaking.new({from: accounts[2]});
		const uintzzeKhr = BigInt("298")
		await SLTDStakingM9DGB91.getReward.call({from: accounts[4]});
		const uint256oHpt7vp = await SLTDStakingM9DGB91.stake.call(uintzzeKhr, {from: accounts[2]});
		const addressGhZrZLD = await SLTDStakingM9DGB91.owner.call({from: accounts[4]});
		await SLTDStakingM9DGB91.onlyRewardDistribution.call({from: accounts[5]});

		await expect(SLTDStakingM9DGB91.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9DGB91 = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingM9DGB91.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingM9DGB91.renounceOwnership.call({from: accounts[2]});
		const addressGhZrZLD = await SLTDStakingM9DGB91.owner.call({from: accounts[4]});

		await expect(SLTDStakingM9DGB91.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9DGB91 = await SLTDStaking.new({from: accounts[2]});
		const addressmtSKMN6 = "0x0000000000000000000000000000000000000001"
		const addressmrQlBmN = await SLTDStakingM9DGB91.transferOwnership.call(addressmtSKMN6, {from: accounts[2]});
		await SLTDStakingM9DGB91.exit.call({from: accounts[0]});

		await expect(SLTDStakingM9DGB91.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM9DGB91 = await SLTDStaking.new({from: accounts[2]});
		const addressUDvxmjV = accounts[0]
		const uinthwb3EUX = BigInt("663")
		const addressTNVBlU2 = await SLTDStakingM9DGB91.setRewardDistribution.call(addressUDvxmjV, {from: accounts[2]});
		await SLTDStakingM9DGB91.exit.call({from: accounts[0]});
		const uint256NDEuvsl = await SLTDStakingM9DGB91.withdraw.call(uinthwb3EUX, {from: accounts[2]});

		await expect(SLTDStakingM9DGB91.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})