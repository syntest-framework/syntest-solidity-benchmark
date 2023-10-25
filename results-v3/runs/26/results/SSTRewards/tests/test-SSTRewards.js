const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardstGmzAju = await SSTRewards.new({from: accounts[3]});
		const addressJuRqjNH = accounts[3]
		const uintwOEmRG = BigInt("407")
		const addressCMFSW6c = accounts[1]
		const addressRJG35LQ = accounts[4]
		const uint256S4vXFKy = await SSTRewardstGmzAju.balanceOf.call(addressJuRqjNH, {from: accounts[2]});
		const uint256CiO7MgC = await SSTRewardstGmzAju.stake.call(uintwOEmRG, {from: accounts[5]});
		const uint256orf8h59 = await SSTRewardstGmzAju.balanceOf.call(addressCMFSW6c, {from: accounts[2]});
		const uint256WEYnN1w = await SSTRewardstGmzAju.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressnAk2qkU = await SSTRewardstGmzAju.updateReward.call(addressRJG35LQ, {from: accounts[0]});

		assert.equal(uint256S4vXFKy, BigInt("0"))
		await expect(SSTRewardstGmzAju.stake.call(uintwOEmRG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardszGwU7r4 = await SSTRewards.new({from: accounts[1]});
		const addresspMYYFOS = accounts[1]
		const uintdTV5NIr = BigInt("1604")
		const uintIm99TH1 = BigInt("638")
		const uintmnWAYk = BigInt("129")
		await SSTRewardszGwU7r4.exit.call({from: accounts[1]});
		const uint256r0Gw7VT = await SSTRewardszGwU7r4.balanceOf.call(addresspMYYFOS, {from: accounts[0]});
		const uint256kHSVXx3 = await SSTRewardszGwU7r4.notifyRewardAmount.call(uintdTV5NIr, {from: accounts[4]});
		const uint256yW89Rq5 = await SSTRewardszGwU7r4.stake.call(uintIm99TH1, {from: accounts[5]});
		const uint256iwGKcd2 = await SSTRewardszGwU7r4.withdraw.call(uintmnWAYk, {from: accounts[1]});

		await expect(SSTRewardszGwU7r4.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsfi11B5P = await SSTRewards.new({from: accounts[4]});
		const uintMKupHFn = BigInt("1639")
		await SSTRewardsfi11B5P.getReward.call({from: accounts[3]});
		await SSTRewardsfi11B5P.checkStart.call({from: accounts[1]});
		const uint256b31z8hr = await SSTRewardsfi11B5P.withdraw.call(uintMKupHFn, {from: accounts[0]});
		const uint256POa2VbC = await SSTRewardsfi11B5P.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsfi11B5P.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsGhQlipu = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAbJ9dqU = accounts[1]
		const uintMcJQwu = BigInt("956")
		const uintP8VK3tf = BigInt("1181")
		const uint256oI5nYZ6 = await SSTRewardsGhQlipu.balanceOf.call(addressAbJ9dqU, {from: accounts[3]});
		await SSTRewardsGhQlipu.exit.call({from: accounts[0]});
		const uint256DPkFT1i = await SSTRewardsGhQlipu.withdraw.call(uintMcJQwu, {from: accounts[2]});
		const uint256OyKqS3e = await SSTRewardsGhQlipu.stake.call(uintP8VK3tf, {from: accounts[4]});
		await SSTRewardsGhQlipu.exit.call({from: accounts[4]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsJwXtY4K = await SSTRewards.new({from: accounts[0]});
		const uintOgmsbwP = BigInt("1402")
		const addressYCXw38p = accounts[4]
		const addressdd4dLgZ = accounts[2]
		const addressDstOQQT = accounts[4]
		const uint256xtfzgNQ = await SSTRewardsJwXtY4K.withdraw.call(uintOgmsbwP, {from: accounts[2]});
		const uint256dftnuSZ = await SSTRewardsJwXtY4K.earned.call(addressYCXw38p, {from: accounts[0]});
		const addressw4ZM5UU = await SSTRewardsJwXtY4K.updateReward.call(addressdd4dLgZ, {from: accounts[0]});
		const uint256HwwqgY4 = await SSTRewardsJwXtY4K.earned.call(addressDstOQQT, {from: accounts[3]});

		await expect(SSTRewardsJwXtY4K.withdraw.call(uintOgmsbwP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsaB1nXL = await SSTRewards.new({from: accounts[3]});
		const uintpDcIc0 = BigInt("319")
		const uint256W3Hthq7 = await SSTRewardsaB1nXL.notifyRewardAmount.call(uintpDcIc0, {from: accounts[0]});
		await SSTRewardsaB1nXL.getReward.call({from: accounts[4]});

		await expect(SSTRewardsaB1nXL.notifyRewardAmount.call(uintpDcIc0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})