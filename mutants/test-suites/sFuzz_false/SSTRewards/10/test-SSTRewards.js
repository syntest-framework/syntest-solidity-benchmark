const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsXqSlbP = await SSTRewards.new({from: accounts[1]});
		const uintQkTCnyn = BigInt("143")
//		await SSTRewardsXqSlbP.checkStart.call({from: accounts[2]});
//		await SSTRewardsXqSlbP.checkStart.call({from: accounts[1]});
//		const uint256wtTQs9u = await SSTRewardsXqSlbP.withdraw.call(uintQkTCnyn, {from: accounts[1]});

		await expect(SSTRewardsXqSlbP.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsYPWLi4o = await SSTRewards.new({from: accounts[5]});
		const uintOMiWrPX = BigInt("1712")
		const addressiuwjlx2 = accounts[2]
//		await SSTRewardsYPWLi4o.getReward.call({from: accounts[5]});
//		const uint256Q4Eg0c9 = await SSTRewardsYPWLi4o.withdraw.call(uintOMiWrPX, {from: accounts[0]});
//		const addressGV9gnyg = await SSTRewardsYPWLi4o.updateReward.call(addressiuwjlx2, {from: accounts[3]});
//		await SSTRewardsYPWLi4o.exit.call({from: accounts[3]});
//		const uint256a7ZksZn = await SSTRewardsYPWLi4o.rewardPerToken.call({from: accounts[1]});
//		const uint256j1h2l3O = await SSTRewardsYPWLi4o.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SSTRewardsYPWLi4o.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgwT6adY = await SSTRewards.new({from: accounts[2]});
		const uintsSbGc1r = BigInt("1765")
//		await SSTRewardsgwT6adY.exit.call({from: accounts[3]});
//		const uint256EsByld2 = await SSTRewardsgwT6adY.withdraw.call(uintsSbGc1r, {from: accounts[3]});
//		await SSTRewardsgwT6adY.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsgwT6adY.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsofxZ6c7 = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIf2HnqT = BigInt("1208")
		const uintpPiMItz = BigInt("349")
		const addressOGuJjHK = accounts[5]
		const uint256sTcxRI4 = await SSTRewardsofxZ6c7.withdraw.call(uintIf2HnqT, {from: accounts[4]});
		await SSTRewardsofxZ6c7.checkStart.call({from: accounts[3]});
		const uint256rBb4J4 = await SSTRewardsofxZ6c7.withdraw.call(uintpPiMItz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fG9oVks = await SSTRewardsofxZ6c7.earned.call(addressOGuJjHK, {from: accounts[0]});
		const uint256GKNtkPN = await SSTRewardsofxZ6c7.rewardPerToken.call({from: accounts[4]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsxKEdmpj = await SSTRewards.new({from: accounts[0]});
		const addresspkVXUG3 = accounts[0]
		const uintysP0SUJ = BigInt("1263")
		const addressNTPlkgn = accounts[3]
		const uintlbSQN80 = BigInt("850")
//		await SSTRewardsxKEdmpj.getReward.call({from: accounts[3]});
//		const uint256qAhwdjr = await SSTRewardsxKEdmpj.earned.call(addresspkVXUG3, {from: accounts[0]});
//		await SSTRewardsxKEdmpj.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256AMwDJXN = await SSTRewardsxKEdmpj.stake.call(uintysP0SUJ, {from: accounts[1]});
//		const uint2569pV1V5 = await SSTRewardsxKEdmpj.balanceOf.call(addressNTPlkgn, {from: accounts[4]});
//		const uint256cm3aVFL = await SSTRewardsxKEdmpj.withdraw.call(uintlbSQN80, {from: accounts[2]});
//		const uint256LJy6Xfr = await SSTRewardsxKEdmpj.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(SSTRewardsxKEdmpj.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsxKEdmpj = await SSTRewards.new({from: accounts[0]});
		const uintDenZxSZ = BigInt("1035")
		const uintGViQ2IB = BigInt("742")
		const uintpPCOhWK = BigInt("850")
//		const uint256RO4EbVE = await SSTRewardsxKEdmpj.notifyRewardAmount.call(uintDenZxSZ, {from: accounts[0]});
//		await SSTRewardsxKEdmpj.getReward.call({from: accounts[3]});
//		const uint256kmbCkKS = await SSTRewardsxKEdmpj.notifyRewardAmount.call(uintGViQ2IB, {from: accounts[2]});
//		const uint256cm3aVFL = await SSTRewardsxKEdmpj.withdraw.call(uintpPCOhWK, {from: accounts[2]});

		await expect(SSTRewardsxKEdmpj.notifyRewardAmount.call(uintDenZxSZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})