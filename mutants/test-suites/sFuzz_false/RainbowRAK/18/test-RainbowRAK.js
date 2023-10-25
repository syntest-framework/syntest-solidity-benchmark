const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKqJXIzJG = await RainbowRAK.new({from: accounts[1]});
		const addressTlquwTx = await RainbowRAKqJXIzJG.owner.call({from: accounts[4]});
//		await RainbowRAKqJXIzJG.claimRewards.call({from: accounts[3]});
//		const uint256zSugu96 = await RainbowRAKqJXIzJG.getCurrentRewardReserve.call({from: accounts[0]});
//		const boolKh748xY = await RainbowRAKqJXIzJG.isOwner.call({from: accounts[4]});

		assert.equal(addressTlquwTx, 0x2274648FF53044eebB46E8948e1d7631C9E0ccFa)
		await expect(RainbowRAKqJXIzJG.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKBWgExcM = await RainbowRAK.new({from: accounts[3]});
		const addressIsbpZhB = accounts[2]
		const boolEyLFJNp = await RainbowRAKBWgExcM.isOwner.call({from: accounts[1]});
		const uint256emWlERo = await RainbowRAKBWgExcM.rewardPerToken.call({from: accounts[4]});
//		const addressWz76Qo = await RainbowRAKBWgExcM.transferOwnership.call(addressIsbpZhB, {from: accounts[1]});
//		await RainbowRAKBWgExcM.exit.call({from: accounts[0]});

		assert.equal(boolEyLFJNp, false)
		assert.equal(uint256emWlERo, BigInt("0"))
		await expect(RainbowRAKBWgExcM.transferOwnership.call(addressIsbpZhB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKs1XRsAn = await RainbowRAK.new({from: accounts[4]});
		const uintt9y5WpO = BigInt("1455")
		const uintoP7cbFW = BigInt("806")
		const addressB5DmmMP = "0x0000000000000000000000000000000000000001"
//		const uint256uUNATat = await RainbowRAKs1XRsAn.stake.call(uintt9y5WpO, {from: accounts[1]});
//		const uint256ByhyBr7 = await RainbowRAKs1XRsAn.stake.call(uintoP7cbFW, {from: accounts[2]});
//		const addressaLxKTXm = await RainbowRAKs1XRsAn.transferOwnership.call(addressB5DmmMP, {from: accounts[1]});

		await expect(RainbowRAKs1XRsAn.stake.call(uintt9y5WpO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKp4rqXl4 = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayfWsYSza = await RainbowRAKp4rqXl4.getCommunity.call({from: accounts[2]});
		const boolMhVr7uA = await RainbowRAKp4rqXl4.isOwner.call({from: accounts[5]});
		await RainbowRAKp4rqXl4.renounceOwnership.call({from: accounts[3]});
		const boolektfaa9 = await RainbowRAKp4rqXl4.isOwner.call({from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIBwrM2x = await RainbowRAK.new({from: accounts[4]});
		const addressSVloEEw = accounts[1]
		const addressvGE5dz = accounts[0]
		const uint256BAzXX7 = await RainbowRAKIBwrM2x.earned.call(addressSVloEEw, {from: accounts[1]});
//		await RainbowRAKIBwrM2x.exit.call({from: accounts[4]});
//		const addresswD4s9KJ = await RainbowRAKIBwrM2x.transferOwnership.call(addressvGE5dz, {from: accounts[1]});

		assert.equal(uint256BAzXX7, BigInt("0"))
		await expect(RainbowRAKIBwrM2x.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKemAMn6e = await RainbowRAK.new({from: accounts[5]});
		const boolSJbCgmv = await RainbowRAKemAMn6e.isOwner.call({from: accounts[4]});
		const uint256A65Uj5 = await RainbowRAKemAMn6e.lastTimeRewardApplicable.call({from: accounts[4]});
//		await RainbowRAKemAMn6e.onlyOwner.call({from: accounts[3]});
//		const addressfcmVw3i = await RainbowRAKemAMn6e.owner.call({from: accounts[0]});

		assert.equal(boolSJbCgmv, false)
		assert.equal(uint256A65Uj5, BigInt("0"))
		await expect(RainbowRAKemAMn6e.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKH1CC7T4 = await RainbowRAK.new({from: accounts[3]});
		const uintLZMmqS4 = BigInt("898")
		const uint256xb8s04v = await RainbowRAKH1CC7T4.getCurrentRewardReserve.call({from: accounts[0]});
//		const uint256lyAR10C = await RainbowRAKH1CC7T4.stake.call(uintLZMmqS4, {from: accounts[0]});
//		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});

		assert.equal(uint256xb8s04v, BigInt("0"))
		await expect(RainbowRAKH1CC7T4.stake.call(uintLZMmqS4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKH1CC7T4 = await RainbowRAK.new({from: accounts[3]});
		const uintmRQeQj = BigInt("1606")
//		const uint256MEssFNw = await RainbowRAKH1CC7T4.unstake.call(uintmRQeQj, {from: accounts[3]});
//		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});

		await expect(RainbowRAKH1CC7T4.unstake.call(uintmRQeQj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKH1CC7T4 = await RainbowRAK.new({from: accounts[3]});
//		await RainbowRAKH1CC7T4.renounceOwnership.call({from: accounts[3]});
//		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});

		await expect(RainbowRAKH1CC7T4.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKH1CC7T4 = await RainbowRAK.new({from: accounts[3]});
		const addressarrayUAvMStJ = await RainbowRAKH1CC7T4.getCommunity.call({from: accounts[3]});
//		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});

		assert.equal(addressarrayUAvMStJ, )
		await expect(RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKH1CC7T4 = await RainbowRAK.new({from: accounts[3]});
		const addresslbGT1f4 = accounts[1]
		const addressRc60IB = await RainbowRAKH1CC7T4.transferOwnership.call(addresslbGT1f4, {from: accounts[3]});
//		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});
		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});

		await expect(RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKH1CC7T4 = await RainbowRAK.new({from: accounts[3]});
		const uintJGmu5hZ = BigInt("130")
//		const uint256OR7Apbi = await RainbowRAKH1CC7T4.notifyRewardAmount.call(uintJGmu5hZ, {from: accounts[3]});
//		await RainbowRAKH1CC7T4.claimRewards.call({from: accounts[0]});

		await expect(RainbowRAKH1CC7T4.notifyRewardAmount.call(uintJGmu5hZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})