const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingNOmewgu = await SLTDStaking.new({from: accounts[1]});
		const addressjASQ9bm = accounts[3]
		const uintqM14rvt = BigInt("720")
		await SLTDStakingNOmewgu.onlyRewardDistribution.call({from: accounts[3]});
		await SLTDStakingNOmewgu.renounceOwnership.call({from: accounts[4]});
		const addresstzb1bA4 = await SLTDStakingNOmewgu.transferOwnership.call(addressjASQ9bm, {from: accounts[1]});
		await SLTDStakingNOmewgu.getReward.call({from: accounts[4]});
		const uint256PE0G9th = await SLTDStakingNOmewgu.totalSupply.call({from: accounts[1]});
		const uint256GrkvmnM = await SLTDStakingNOmewgu.withdraw.call(uintqM14rvt, {from: accounts[4]});

		await expect(SLTDStakingNOmewgu.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingdtkQst = await SLTDStaking.new({from: accounts[2]});
		const addresszYwejLP = accounts[0]
		const addressu8aGFWr = "0x0000000000000000000000000000000000000001"
		const uint256cq0eAF9 = await SLTDStakingdtkQst.rewardPerToken.call({from: accounts[0]});
		const uint256piCu4Y6 = await SLTDStakingdtkQst.rewardPerToken.call({from: accounts[2]});
		const uint256SVZjXS = await SLTDStakingdtkQst.balanceOf.call(addresszYwejLP, {from: accounts[5]});
		const addressziiF8Km = await SLTDStakingdtkQst.transferOwnership.call(addressu8aGFWr, {from: accounts[1]});

		assert.equal(uint256SVZjXS, BigInt("0"))
		assert.equal(uint256cq0eAF9, BigInt("0"))
		assert.equal(uint256piCu4Y6, BigInt("0"))
		await expect(SLTDStakingdtkQst.transferOwnership.call(addressu8aGFWr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOb7ASzu = await SLTDStaking.new({from: accounts[0]});
		const uintmptylty = BigInt("108")
		const uintaxOmF6w = BigInt("258")
		const uintS4xLgA = BigInt("646")
		const boolkauUQHX = await SLTDStakingOb7ASzu.isOwner.call({from: accounts[2]});
		const uint2560uUEXB = await SLTDStakingOb7ASzu.withdraw.call(uintmptylty, {from: accounts[2]});
		const uint2568juE78 = await SLTDStakingOb7ASzu.stake.call(uintaxOmF6w, {from: accounts[0]});
		const uint256c2CLXNr = await SLTDStakingOb7ASzu.notifyRewardAmount.call(uintS4xLgA, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingOb7ASzu.getReward.call({from: accounts[4]});

		assert.equal(boolkauUQHX, false)
		await expect(SLTDStakingOb7ASzu.withdraw.call(uintmptylty, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingFajqHLA = await SLTDStaking.new({from: accounts[0]});
		const uintRuMRWyx = BigInt("1386")
		const addressVvTKJ7G = accounts[3]
		const uintycbApbs = BigInt("1825")
		const uint256wHO5YLq = await SLTDStakingFajqHLA.stake.call(uintRuMRWyx, {from: accounts[5]});
		const uint256ukyxN78 = await SLTDStakingFajqHLA.earned.call(addressVvTKJ7G, {from: accounts[3]});
		const uint256on3w1GK = await SLTDStakingFajqHLA.stake.call(uintycbApbs, {from: accounts[5]});
		await SLTDStakingFajqHLA.renounceOwnership.call({from: accounts[0]});
		const boolkXp70a = await SLTDStakingFajqHLA.isOwner.call({from: accounts[2]});

		await expect(SLTDStakingFajqHLA.stake.call(uintRuMRWyx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5bbffI = await SLTDStaking.new({from: accounts[2]});
		const uintcc8fvde = BigInt("518")
		await SLTDStaking5bbffI.getReward.call({from: accounts[5]});
		const uint256fMbfOP3 = await SLTDStaking5bbffI.stake.call(uintcc8fvde, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStaking5bbffI.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5bbffI = await SLTDStaking.new({from: accounts[2]});
		const uintL8hioBr = BigInt("1401")
		const uintK851JJ8 = BigInt("499")
		const uint256ftAdtC = await SLTDStaking5bbffI.notifyRewardAmount.call(uintL8hioBr, {from: accounts[0]});
		await SLTDStaking5bbffI.getReward.call({from: accounts[5]});
		await SLTDStaking5bbffI.onlyOwner.call({from: accounts[3]});
		const uint256fMbfOP3 = await SLTDStaking5bbffI.stake.call(uintK851JJ8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStaking5bbffI.notifyRewardAmount.call(uintL8hioBr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5bbffI = await SLTDStaking.new({from: accounts[2]});
		const uinthlahUpr = BigInt("518")
		await SLTDStaking5bbffI.getReward.call({from: accounts[5]});
		await SLTDStaking5bbffI.exit.call({from: accounts[2]});
		const uint256DsBN1Wv = await SLTDStaking5bbffI.totalSupply.call({from: accounts[4]});
		const uint256fMbfOP3 = await SLTDStaking5bbffI.stake.call(uinthlahUpr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStaking5bbffI.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingIHIagc7 = await SLTDStaking.new({from: accounts[5]});
		const uintVX3qiqe = BigInt("1537")
		const addressBe5aJPH = accounts[5]
		const addressBYWjW8M = await SLTDStakingIHIagc7.owner.call({from: accounts[3]});
		const uint256pndWxoP = await SLTDStakingIHIagc7.stake.call(uintVX3qiqe, {from: accounts[0]});
		const uint256bRxmu4n = await SLTDStakingIHIagc7.balanceOf.call(addressBe5aJPH, {from: accounts[3]});

		assert.equal(addressBYWjW8M, 0x4557D73f000a184900A000D05Db404fD80f7e77D)
		await expect(SLTDStakingIHIagc7.stake.call(uintVX3qiqe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingmhX6wyu = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressew7ESGX = accounts[5]
		const uintxdMb2EN = BigInt("1718")
		await SLTDStakingmhX6wyu.onlyRewardDistribution.call({from: accounts[0]});
		const uint256UQJrFgi = await SLTDStakingmhX6wyu.balanceOf.call(addressew7ESGX, {from: accounts[2]});
		const uint256Z9Fh6Yv = await SLTDStakingmhX6wyu.stake.call(uintxdMb2EN, {from: accounts[5]});
		const uint256XZn1cPN = await SLTDStakingmhX6wyu.totalSupply.call({from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5bbffI = await SLTDStaking.new({from: accounts[2]});
		const addressbV1TujA = accounts[5]
		const addressbw1CfFl = await SLTDStaking5bbffI.transferOwnership.call(addressbV1TujA, {from: accounts[2]});
		await SLTDStaking5bbffI.getReward.call({from: accounts[5]});

		await expect(SLTDStaking5bbffI.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5bbffI = await SLTDStaking.new({from: accounts[2]});
		const addressHgtyxFH = accounts[5]
		const addressZADjzZx = accounts[0]
		await SLTDStaking5bbffI.getReward.call({from: accounts[5]});
		await SLTDStaking5bbffI.renounceOwnership.call({from: accounts[2]});
		const addressStjV5xz = await SLTDStaking5bbffI.transferOwnership.call(addressHgtyxFH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pqxQIbu = await SLTDStaking5bbffI.earned.call(addressZADjzZx, {from: accounts[4]});

		await expect(SLTDStaking5bbffI.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5bbffI = await SLTDStaking.new({from: accounts[2]});
		const addressbMXQ40w = accounts[3]
		await SLTDStaking5bbffI.getReward.call({from: accounts[5]});
		const uint256QCCpuM5 = await SLTDStaking5bbffI.rewardPerToken.call({from: accounts[3]});
		const boolXWD1TkA = await SLTDStaking5bbffI.isOwner.call({from: accounts[2]});
		const addressdoHVVhp = await SLTDStaking5bbffI.setRewardDistribution.call(addressbMXQ40w, {from: accounts[2]});

		await expect(SLTDStaking5bbffI.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})