const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKgYBJtlz = await RainbowRAK.new({from: accounts[5]});
		const uintrSxxxuh = BigInt("760")
		const uint256imnabUZ = await RainbowRAKgYBJtlz.unstake.call(uintrSxxxuh, {from: accounts[2]});
		await RainbowRAKgYBJtlz.renounceOwnership.call({from: accounts[1]});
		const addressarrayZFu4NuJ = await RainbowRAKgYBJtlz.getCommunity.call({from: accounts[0]});

		await expect(RainbowRAKgYBJtlz.unstake.call(uintrSxxxuh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKLQL5bqw = await RainbowRAK.new({from: accounts[3]});
		const uint256gwI6Uw8 = await RainbowRAKLQL5bqw.getCurrentRewardReserve.call({from: accounts[1]});
		await RainbowRAKLQL5bqw.renounceOwnership.call({from: accounts[3]});
		await RainbowRAKLQL5bqw.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256gwI6Uw8, BigInt("0"))
		await expect(RainbowRAKLQL5bqw.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKHyEXyQS = await RainbowRAK.new({from: accounts[5]});
		const addressb97xoUf = accounts[2]
		await RainbowRAKHyEXyQS.exit.call({from: accounts[4]});
		await RainbowRAKHyEXyQS.claimRewards.call({from: accounts[3]});
		const boollsyVxk = await RainbowRAKHyEXyQS.isOwner.call({from: accounts[0]});
		const uint256TNfrYU3 = await RainbowRAKHyEXyQS.earned.call(addressb97xoUf, {from: accounts[2]});

		await expect(RainbowRAKHyEXyQS.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaIpL6Za = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressj9qxr9m = accounts[2]
		await RainbowRAKaIpL6Za.renounceOwnership.call({from: accounts[2]});
		const addressarrayavLbxtB = await RainbowRAKaIpL6Za.getCommunity.call({from: accounts[1]});
		await RainbowRAKaIpL6Za.claimRewards.call({from: accounts[2]});
		await RainbowRAKaIpL6Za.onlyOwner.call({from: accounts[1]});
		const addressC72ha91 = await RainbowRAKaIpL6Za.updateReward.call(addressj9qxr9m, {from: accounts[0]});
		const uint256ed3VEu1 = await RainbowRAKaIpL6Za.rewardPerToken.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKL7BghCt = await RainbowRAK.new({from: accounts[4]});
		await RainbowRAKL7BghCt.claimRewards.call({from: accounts[2]});
		await RainbowRAKL7BghCt.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKL7BghCt.claimRewards.call({from: accounts[3]});
		await RainbowRAKL7BghCt.claimRewards.call({from: accounts[4]});

		await expect(RainbowRAKL7BghCt.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKI2fAAw9 = await RainbowRAK.new({from: accounts[4]});
		const uintRwP4WcB = BigInt("1343")
		const uint256srTZs5v = await RainbowRAKI2fAAw9.stake.call(uintRwP4WcB, {from: accounts[3]});
		const addressw9e0GcG = await RainbowRAKI2fAAw9.owner.call({from: accounts[3]});
		await RainbowRAKI2fAAw9.onlyOwner.call({from: accounts[3]});
		const uint256mIKghtY = await RainbowRAKI2fAAw9.lastTimeRewardApplicable.call({from: accounts[4]});
		await RainbowRAKI2fAAw9.onlyOwner.call({from: accounts[3]});

		await expect(RainbowRAKI2fAAw9.stake.call(uintRwP4WcB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfaLJweT = await RainbowRAK.new({from: accounts[3]});
		const uinti3oBv3c = BigInt("1921")
		const addressilfLVBt = "0x0000000000000000000000000000000000000001"
		const uint256crpzIg4 = await RainbowRAKfaLJweT.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256Hm2sfxV = await RainbowRAKfaLJweT.notifyRewardAmount.call(uinti3oBv3c, {from: accounts[1]});
		const uint256LBxdUj = await RainbowRAKfaLJweT.earned.call(addressilfLVBt, {from: accounts[0]});
		const addressv5hu68j = await RainbowRAKfaLJweT.owner.call({from: accounts[4]});

		assert.equal(uint256crpzIg4, BigInt("0"))
		await expect(RainbowRAKfaLJweT.notifyRewardAmount.call(uinti3oBv3c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKBbn5CEB = await RainbowRAK.new({from: accounts[2]});
		const uintRep0jd = BigInt("180")
		const uintQ1B49P4 = BigInt("1719")
		const addressarraypRdoROO = await RainbowRAKBbn5CEB.getCommunity.call({from: accounts[3]});
		await RainbowRAKBbn5CEB.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yoI1L8Q = await RainbowRAKBbn5CEB.stake.call(uintRep0jd, {from: accounts[1]});
		const uint256OjFpBPX = await RainbowRAKBbn5CEB.unstake.call(uintQ1B49P4, {from: accounts[4]});
		await RainbowRAKBbn5CEB.exit.call({from: accounts[1]});

		assert.equal(addressarraypRdoROO, )
		await expect(RainbowRAKBbn5CEB.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgYBJtlz = await RainbowRAK.new({from: accounts[5]});
		const uintyUbRymS = BigInt("1159")
		const uintImdcEv4 = BigInt("331")
		const uint256nJzOcew = await RainbowRAKgYBJtlz.notifyRewardAmount.call(uintyUbRymS, {from: accounts[5]});
		const uint256imnabUZ = await RainbowRAKgYBJtlz.unstake.call(uintImdcEv4, {from: accounts[2]});
		await RainbowRAKgYBJtlz.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKgYBJtlz.notifyRewardAmount.call(uintyUbRymS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgYBJtlz = await RainbowRAK.new({from: accounts[5]});
		const addressFZs2DNg = accounts[6]
		const uintZ1fjsR3 = BigInt("474")
		const addressoqHOxnH = await RainbowRAKgYBJtlz.owner.call({from: accounts[5]});
		const uint256Wlf0axd = await RainbowRAKgYBJtlz.rewardPerToken.call({from: accounts[4]});
		const uint256gYyjBlr = await RainbowRAKgYBJtlz.earned.call(addressFZs2DNg, {from: accounts[1]});
		const uint256imnabUZ = await RainbowRAKgYBJtlz.unstake.call(uintZ1fjsR3, {from: accounts[2]});
		await RainbowRAKgYBJtlz.exit.call({from: accounts[4]});

		assert.equal(addressoqHOxnH, 0xa22af5689E7D003b4C9d4da0e03F2f0928Db556A)
		assert.equal(uint256Wlf0axd, BigInt("0"))
		assert.equal(uint256gYyjBlr, BigInt("0"))
		await expect(RainbowRAKgYBJtlz.unstake.call(uintZ1fjsR3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKL7BghCt = await RainbowRAK.new({from: accounts[4]});
		const addresszAxkd0A = accounts[3]
		const uintloHB3WD = BigInt("1638")
		const addressI60iDCa = await RainbowRAKL7BghCt.transferOwnership.call(addresszAxkd0A, {from: accounts[4]});
		const uint256kZ98jiZ = await RainbowRAKL7BghCt.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256S3OXFu5 = await RainbowRAKL7BghCt.notifyRewardAmount.call(uintloHB3WD, {from: accounts[0]});
		await RainbowRAKL7BghCt.claimRewards.call({from: accounts[2]});

		assert.equal(uint256kZ98jiZ, BigInt("0"))
		await expect(RainbowRAKL7BghCt.notifyRewardAmount.call(uintloHB3WD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})