const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFktlvR = await SLTDETHlpReward.new({from: accounts[3]});
		const addressWwayXmY = accounts[2]
		const addressxrUh45n = accounts[2]
		const uint256gLrFMsh = await SLTDETHlpRewardFktlvR.totalSupply.call({from: accounts[3]});
		const uint256A5uQPft = await SLTDETHlpRewardFktlvR.rewardPerToken.call({from: accounts[4]});
//		const uint256u0khwpp = await SLTDETHlpRewardFktlvR.remainingReward.call({from: accounts[1]});
//		const uint256dJpgzUw = await SLTDETHlpRewardFktlvR.balanceOf.call(addressWwayXmY, {from: accounts[3]});
//		const uint256ZV3wOM = await SLTDETHlpRewardFktlvR.balanceOf.call(addressxrUh45n, {from: accounts[0]});
//		const uint256TzqGo3R = await SLTDETHlpRewardFktlvR.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256A5uQPft, BigInt("0"))
		assert.equal(uint256gLrFMsh, BigInt("0"))
		await expect(SLTDETHlpRewardFktlvR.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIFY0tJr = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQqLdhzL = accounts[2]
		await SLTDETHlpRewardIFY0tJr.checkStart.call({from: accounts[5]});
		await SLTDETHlpRewardIFY0tJr.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHXjhED = await SLTDETHlpRewardIFY0tJr.isOwner.call({from: accounts[3]});
		const uint256rTsUlZd = await SLTDETHlpRewardIFY0tJr.earned.call(addressQqLdhzL, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwN48jgi = await SLTDETHlpReward.new({from: accounts[4]});
		const addressX72a7j = accounts[3]
		const uintTv1DeA2 = BigInt("885")
		const uintvIaxSJF = BigInt("346")
		const uintFcTFYge = BigInt("1548")
//		const addressLmUOVBc = await SLTDETHlpRewardwN48jgi.setRewardDistribution.call(addressX72a7j, {from: accounts[1]});
//		const uint256lR1dmcm = await SLTDETHlpRewardwN48jgi.setStartTime.call(uintTv1DeA2, {from: accounts[5]});
//		const uint256GkenXZe = await SLTDETHlpRewardwN48jgi.notifyRewardAmount.call(uintvIaxSJF, {from: accounts[4]});
//		const uint256sekp2Ik = await SLTDETHlpRewardwN48jgi.setStartTime.call(uintFcTFYge, {from: accounts[5]});

		await expect(SLTDETHlpRewardwN48jgi.setRewardDistribution.call(addressX72a7j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFxKmNjK = await SLTDETHlpReward.new({from: accounts[0]});
//		await SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]});
//		await SLTDETHlpRewardFxKmNjK.onlyOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarde6Mx4NN = await SLTDETHlpReward.new({from: accounts[5]});
		const addressH79WJt = accounts[0]
		const addressaBiOv31 = accounts[0]
		const uintZfYU9j = BigInt("1909")
		const addressINezdv7 = await SLTDETHlpRewarde6Mx4NN.owner.call({from: accounts[2]});
//		const addressGp8FaAz = await SLTDETHlpRewarde6Mx4NN.updateReward.call(addressH79WJt, {from: accounts[4]});
//		await SLTDETHlpRewarde6Mx4NN.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolbLzsQSA = await SLTDETHlpRewarde6Mx4NN.isOwner.call({from: accounts[2]});
//		const addressx5eVI1 = await SLTDETHlpRewarde6Mx4NN.setStakeAddress.call(addressaBiOv31, {from: accounts[3]});
//		const uint256FNBR27e = await SLTDETHlpRewarde6Mx4NN.withdraw.call(uintZfYU9j, {from: accounts[3]});

		assert.equal(addressINezdv7, 0x190a5AfF3Ed117CD954a378a3d5d4B29Ab6bb5D1)
		await expect(SLTDETHlpRewarde6Mx4NN.updateReward.call(addressH79WJt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDUIGK01 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressJKmRmkH = accounts[5]
//		await SLTDETHlpRewardDUIGK01.exit.call({from: accounts[0]});
//		const addressShZVxhz = await SLTDETHlpRewardDUIGK01.setStakeAddress.call(addressJKmRmkH, {from: accounts[0]});
//		const uint256R0B3lrl = await SLTDETHlpRewardDUIGK01.remainingReward.call({from: accounts[5]});

		await expect(SLTDETHlpRewardDUIGK01.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFxKmNjK = await SLTDETHlpReward.new({from: accounts[0]});
		const uintbUmaZU7 = BigInt("1790")
		const addressDirRQ8K = accounts[4]
//		await SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]});
//		const uint256TStjAhY = await SLTDETHlpRewardFxKmNjK.withdraw.call(uintbUmaZU7, {from: accounts[0]});
//		await SLTDETHlpRewardFxKmNjK.onlyOwner.call({from: accounts[4]});
//		const uint256FirBjgw = await SLTDETHlpRewardFxKmNjK.earned.call(addressDirRQ8K, {from: accounts[2]});

		await expect(SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFxKmNjK = await SLTDETHlpReward.new({from: accounts[0]});
		const uintWTjiMl5 = BigInt("956")
//		const uint256aITsFzX = await SLTDETHlpRewardFxKmNjK.stake.call(uintWTjiMl5, {from: accounts[3]});
//		await SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]});
//		await SLTDETHlpRewardFxKmNjK.onlyOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardFxKmNjK.stake.call(uintWTjiMl5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFxKmNjK = await SLTDETHlpReward.new({from: accounts[0]});
//		await SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]});
//		await SLTDETHlpRewardFxKmNjK.renounceOwnership.call({from: accounts[0]});
//		await SLTDETHlpRewardFxKmNjK.onlyOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardFxKmNjK.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardXkyTG6f = await SLTDETHlpReward.new({from: accounts[4]});
		const uintHsnHL0n = BigInt("1782")
		const addressa4MV1NY = "0x0000000000000000000000000000000000000001"
		const addressIgUIRoN = accounts[1]
//		await SLTDETHlpRewardXkyTG6f.getReward.call({from: accounts[1]});
//		const uint256lPMNFDG = await SLTDETHlpRewardXkyTG6f.rewardPerToken.call({from: accounts[4]});
//		const uint256QSLVCuJ = await SLTDETHlpRewardXkyTG6f.setStartTime.call(uintHsnHL0n, {from: accounts[4]});
//		const uint256z8IGWfe = await SLTDETHlpRewardXkyTG6f.balanceOf.call(addressa4MV1NY, {from: accounts[4]});
//		const addresswgGVT75 = await SLTDETHlpRewardXkyTG6f.updateReward.call(addressIgUIRoN, {from: accounts[0]});

		await expect(SLTDETHlpRewardXkyTG6f.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardSwIbg8N = await SLTDETHlpReward.new({from: accounts[5]});
		const uintp2oQXD5 = BigInt("1411")
		const addresshAVgx7m = "0x0000000000000000000000000000000000000001"
		const uintgpTWYaK = BigInt("341")
		const addresszKqPT95 = accounts[0]
//		const uint256NaSZTN4 = await SLTDETHlpRewardSwIbg8N.notifyRewardAmount.call(uintp2oQXD5, {from: accounts[4]});
//		const addressIjIBSd5 = await SLTDETHlpRewardSwIbg8N.updateReward.call(addresshAVgx7m, {from: accounts[3]});
//		const uint256qzWKpgz = await SLTDETHlpRewardSwIbg8N.stake.call(uintgpTWYaK, {from: accounts[0]});
//		const address3Jl2hp = await SLTDETHlpRewardSwIbg8N.setRewardDistribution.call(addresszKqPT95, {from: accounts[1]});
//		const uint256WPP4vZq = await SLTDETHlpRewardSwIbg8N.rewardPerToken.call({from: accounts[4]});

		await expect(SLTDETHlpRewardSwIbg8N.notifyRewardAmount.call(uintp2oQXD5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardGgJVpl4 = await SLTDETHlpReward.new({from: accounts[1]});
		const addressQJH8FMn = accounts[4]
		const uintqLcUtSf = BigInt("2040")
		const addressMgOzxo0 = accounts[0]
		const addressWmRzRQk = await SLTDETHlpRewardGgJVpl4.setRewardDistribution.call(addressQJH8FMn, {from: accounts[1]});
//		const uint256CidrpBt = await SLTDETHlpRewardGgJVpl4.stake.call(uintqLcUtSf, {from: accounts[4]});
//		const uint256rYL7PwV = await SLTDETHlpRewardGgJVpl4.earned.call(addressMgOzxo0, {from: accounts[2]});

		await expect(SLTDETHlpRewardGgJVpl4.stake.call(uintqLcUtSf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrgggbW2 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressCOvpRBU = accounts[2]
		const addressUt2vpSx = accounts[0]
		const addressVfsJ2We = await SLTDETHlpRewardrgggbW2.transferOwnership.call(addressCOvpRBU, {from: accounts[3]});
//		await SLTDETHlpRewardrgggbW2.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressOZHhukF = await SLTDETHlpRewardrgggbW2.transferOwnership.call(addressUt2vpSx, {from: accounts[5]});
//		await SLTDETHlpRewardrgggbW2.exit.call({from: accounts[2]});
//		await SLTDETHlpRewardrgggbW2.onlyOwner.call({from: accounts[2]});

		await expect(SLTDETHlpRewardrgggbW2.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFxKmNjK = await SLTDETHlpReward.new({from: accounts[0]});
		const uintDN6kv58 = BigInt("1637")
		const uinteMwHbR2 = BigInt("1017")
		const addressfQaKcaX = "0x0000000000000000000000000000000000000001"
		const uint256EeMO343 = await SLTDETHlpRewardFxKmNjK.notifyRewardAmount.call(uintDN6kv58, {from: accounts[0]});
//		const uint256aITsFzX = await SLTDETHlpRewardFxKmNjK.stake.call(uinteMwHbR2, {from: accounts[3]});
//		await SLTDETHlpRewardFxKmNjK.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresseH9QklS = await SLTDETHlpRewardFxKmNjK.transferOwnership.call(addressfQaKcaX, {from: accounts[2]});

		await expect(SLTDETHlpRewardFxKmNjK.stake.call(uinteMwHbR2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})