const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsepWQsh = await SSTRewards.new({from: accounts[3]});
		const uintPu6O2mc = BigInt("965")
		const uintqJaKG8u = BigInt("1061")
		const uint256O0KJz2d = await SSTRewardsepWQsh.lastTimeRewardApplicable.call({from: accounts[1]});
		await SSTRewardsepWQsh.exit.call({from: accounts[2]});
		const uint256ZZPBvk2 = await SSTRewardsepWQsh.withdraw.call(uintPu6O2mc, {from: accounts[0]});
		await SSTRewardsepWQsh.checkStart.call({from: accounts[2]});
		const uint256OUeoOI8 = await SSTRewardsepWQsh.stake.call(uintqJaKG8u, {from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsepWQsh.checkStart.call({from: accounts[2]});

		assert.equal(uint256O0KJz2d, BigInt("0"))
		await expect(SSTRewardsepWQsh.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsSZgTR9K = await SSTRewards.new({from: accounts[0]});
		const addressVUSFszn = accounts[3]
		const uintskjnxVt = BigInt("1918")
		const uint256VTxRgMi = await SSTRewardsSZgTR9K.rewardPerToken.call({from: accounts[1]});
		const addressKBBGxzG = await SSTRewardsSZgTR9K.updateReward.call(addressVUSFszn, {from: accounts[3]});
		const uint256bbutVPZ = await SSTRewardsSZgTR9K.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256LT3FcYM = await SSTRewardsSZgTR9K.stake.call(uintskjnxVt, {from: accounts[2]});

		assert.equal(uint256VTxRgMi, BigInt("0"))
		await expect(SSTRewardsSZgTR9K.updateReward.call(addressVUSFszn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsfzU156N = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRPes2kM = BigInt("987")
		const uintirUIhJc = BigInt("1700")
		const addresshvVf02i = accounts[3]
		const uint256zkoc8X = await SSTRewardsfzU156N.withdraw.call(uintRPes2kM, {from: accounts[0]});
		const uint256HEBk9B = await SSTRewardsfzU156N.withdraw.call(uintirUIhJc, {from: accounts[3]});
		const uint256Lk7Tqez = await SSTRewardsfzU156N.balanceOf.call(addresshvVf02i, {from: accounts[5]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsEZ1oWa = await SSTRewards.new({from: accounts[1]});
		const uintwXrCca7 = BigInt("1557")
		const addressXULBzE4 = accounts[4]
		const uintuNdGR2X = BigInt("1240")
		const uint256ehXzUsp = await SSTRewardsEZ1oWa.stake.call(uintwXrCca7, {from: accounts[2]});
		const uint256uwSPFLT = await SSTRewardsEZ1oWa.earned.call(addressXULBzE4, {from: accounts[4]});
		const uint256Qj4Vy2R = await SSTRewardsEZ1oWa.stake.call(uintuNdGR2X, {from: accounts[4]});

		await expect(SSTRewardsEZ1oWa.stake.call(uintwXrCca7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsIOAGwxv = await SSTRewards.new({from: accounts[0]});
		const uintybNWKYs = BigInt("465")
		const uinta6X8c4z = BigInt("1130")
		const uintmJwbCN9 = BigInt("1368")
		const uint256WMSYr9n = await SSTRewardsIOAGwxv.notifyRewardAmount.call(uintybNWKYs, {from: accounts[1]});
		const uint256O3UxKOi = await SSTRewardsIOAGwxv.stake.call(uinta6X8c4z, {from: accounts[3]});
		const uint256cauJ1Rf = await SSTRewardsIOAGwxv.stake.call(uintmJwbCN9, {from: accounts[0]});

		await expect(SSTRewardsIOAGwxv.notifyRewardAmount.call(uintybNWKYs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardscEL9nQ = await SSTRewards.new({from: accounts[0]});
		const addressazkyluh = accounts[2]
		const uintfesIa6m = BigInt("1341")
		const uintahkFaQY = BigInt("799")
		const addressFkUzlXq = accounts[1]
		const uint256YkK1NPq = await SSTRewardscEL9nQ.balanceOf.call(addressazkyluh, {from: accounts[4]});
		const uint256iRUKGg8 = await SSTRewardscEL9nQ.totalSupply.call({from: accounts[2]});
		const uint256LcALKkV = await SSTRewardscEL9nQ.withdraw.call(uintfesIa6m, {from: accounts[3]});
		const uint256LMSVqm = await SSTRewardscEL9nQ.stake.call(uintahkFaQY, {from: accounts[3]});
		const addressfLTKhkO = await SSTRewardscEL9nQ.updateReward.call(addressFkUzlXq, {from: accounts[0]});
		const uint256aK5fsHO = await SSTRewardscEL9nQ.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256YkK1NPq, BigInt("0"))
		assert.equal(uint256iRUKGg8, BigInt("0"))
		await expect(SSTRewardscEL9nQ.withdraw.call(uintfesIa6m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsIOAGwxv = await SSTRewards.new({from: accounts[0]});
		const uintkV55nLX = BigInt("1130")
		const uint256UKiOPmx = await SSTRewardsIOAGwxv.rewardPerToken.call({from: accounts[1]});
		const uint256ueRvyIi = await SSTRewardsIOAGwxv.totalSupply.call({from: accounts[3]});
		await SSTRewardsIOAGwxv.getReward.call({from: accounts[1]});
		const uint256O3UxKOi = await SSTRewardsIOAGwxv.stake.call(uintkV55nLX, {from: accounts[3]});

		assert.equal(uint256UKiOPmx, BigInt("0"))
		assert.equal(uint256ueRvyIi, BigInt("0"))
		await expect(SSTRewardsIOAGwxv.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})