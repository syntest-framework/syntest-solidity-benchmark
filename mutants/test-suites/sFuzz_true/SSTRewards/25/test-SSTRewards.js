const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsfKwdYCj = await SSTRewards.new({from: accounts[3]});
		const addressWmyVYBt = accounts[2]
		const uintt2nCGOE = BigInt("103")
		const uint256EqIx9aV = await SSTRewardsfKwdYCj.earned.call(addressWmyVYBt, {from: accounts[3]});
//		const uint256HNolQU7 = await SSTRewardsfKwdYCj.stake.call(uintt2nCGOE, {from: accounts[1]});
//		const uint256PKgL3Iu = await SSTRewardsfKwdYCj.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256VOrBLTB = await SSTRewardsfKwdYCj.totalSupply.call({from: accounts[1]});

		assert.equal(uint256EqIx9aV, BigInt("0"))
		await expect(SSTRewardsfKwdYCj.stake.call(uintt2nCGOE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardslkc6IkT = await SSTRewards.new({from: accounts[3]});
		const uintZBT4a1J = BigInt("1175")
		const uintyTJPVDR = BigInt("692")
		const addressB02GO0J = accounts[5]
//		const uint256crg4xK3 = await SSTRewardslkc6IkT.withdraw.call(uintZBT4a1J, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardslkc6IkT.checkStart.call({from: accounts[4]});
//		const uint256WjTUD5w = await SSTRewardslkc6IkT.stake.call(uintyTJPVDR, {from: accounts[3]});
//		const uint256OYqdS3B = await SSTRewardslkc6IkT.earned.call(addressB02GO0J, {from: accounts[5]});

		await expect(SSTRewardslkc6IkT.withdraw.call(uintZBT4a1J, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardss8oawx4 = await SSTRewards.new({from: accounts[5]});
		const addressIGZBfW6 = accounts[5]
		const uintzc0pIUy = BigInt("911")
		const uinti4C0zbJ = BigInt("1436")
//		const addressQPtTC20 = await SSTRewardss8oawx4.updateReward.call(addressIGZBfW6, {from: accounts[2]});
//		const uint256wqtcnPt = await SSTRewardss8oawx4.stake.call(uintzc0pIUy, {from: accounts[0]});
//		const uint256JSDMakn = await SSTRewardss8oawx4.notifyRewardAmount.call(uinti4C0zbJ, {from: accounts[0]});
//		await SSTRewardss8oawx4.exit.call({from: accounts[0]});

		await expect(SSTRewardss8oawx4.updateReward.call(addressIGZBfW6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsP6zPN3 = await SSTRewards.new({from: accounts[1]});
		const addressEfEScnH = accounts[0]
		const addressYrFVB3 = accounts[2]
		const uint256pjaFjSj = await SSTRewardsP6zPN3.earned.call(addressEfEScnH, {from: accounts[5]});
		const uint256RtaH2jw = await SSTRewardsP6zPN3.earned.call(addressYrFVB3, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsP6zPN3.exit.call({from: accounts[3]});
//		await SSTRewardsP6zPN3.checkStart.call({from: accounts[1]});
//		await SSTRewardsP6zPN3.exit.call({from: accounts[0]});

		assert.equal(uint256RtaH2jw, BigInt("0"))
		assert.equal(uint256pjaFjSj, BigInt("0"))
		await expect(SSTRewardsP6zPN3.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsX3IAXRZ = await SSTRewards.new({from: accounts[0]});
		const uintZGW0Wa = BigInt("495")
		const addressRvPgJ1k = "0x0000000000000000000000000000000000000001"
		const addressbbHSK8K = accounts[1]
		const uintco09Krq = BigInt("1438")
//		const uint256aociLnz = await SSTRewardsX3IAXRZ.notifyRewardAmount.call(uintZGW0Wa, {from: accounts[0]});
//		const uint256AJU2Ea2 = await SSTRewardsX3IAXRZ.balanceOf.call(addressRvPgJ1k, {from: accounts[2]});
//		const addressfECgj6k = await SSTRewardsX3IAXRZ.updateReward.call(addressbbHSK8K, {from: accounts[3]});
//		const uint256w8wAX2 = await SSTRewardsX3IAXRZ.stake.call(uintco09Krq, {from: accounts[0]});

		await expect(SSTRewardsX3IAXRZ.notifyRewardAmount.call(uintZGW0Wa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsX7yGgc = await SSTRewards.new({from: accounts[2]});
		const addressidjfgYS = accounts[1]
		const addressr4YsgHD = accounts[0]
		const uintnQk1lLS = BigInt("1878")
		const uint256B45vVrw = await SSTRewardsX7yGgc.balanceOf.call(addressidjfgYS, {from: accounts[4]});
//		await SSTRewardsX7yGgc.getReward.call({from: accounts[4]});
//		const uint256kVriQbt = await SSTRewardsX7yGgc.balanceOf.call(addressr4YsgHD, {from: accounts[1]});
		await SSTRewardsX7yGgc.getReward.call({from: accounts[4]});
//		const uint256peuptov = await SSTRewardsX7yGgc.stake.call(uintnQk1lLS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256B45vVrw, BigInt("0"))
		await expect(SSTRewardsX7yGgc.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsMbpbIK = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQUU52Iz = accounts[4]
		const addressdyeDsNy = accounts[1]
		const uint256uGxiy8M = await SSTRewardsMbpbIK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qwBBxku = await SSTRewardsMbpbIK.rewardPerToken.call({from: accounts[2]});
		const uint256v4lUc0E = await SSTRewardsMbpbIK.balanceOf.call(addressQUU52Iz, {from: accounts[5]});
		const addressZTykfOS = await SSTRewardsMbpbIK.updateReward.call(addressdyeDsNy, {from: accounts[2]});
	});
})