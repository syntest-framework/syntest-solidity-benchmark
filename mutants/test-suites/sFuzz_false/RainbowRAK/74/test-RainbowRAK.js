const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKRl2gY41 = await RainbowRAK.new({from: accounts[3]});
		const addresspfu57Wo = accounts[4]
//		const addressgRuRe4k = await RainbowRAKRl2gY41.transferOwnership.call(addresspfu57Wo, {from: accounts[1]});
//		const uint256j4YZMKy = await RainbowRAKRl2gY41.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256UtbBeua = await RainbowRAKRl2gY41.rewardPerToken.call({from: accounts[4]});

		await expect(RainbowRAKRl2gY41.transferOwnership.call(addresspfu57Wo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIlh7hJM = await RainbowRAK.new({from: accounts[2]});
		const boolFjv1veG = await RainbowRAKIlh7hJM.isOwner.call({from: accounts[0]});
		const uint256tCwKdn = await RainbowRAKIlh7hJM.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256vkSe4VR = await RainbowRAKIlh7hJM.getCurrentRewardReserve.call({from: accounts[2]});

		assert.equal(boolFjv1veG, false)
		assert.equal(uint256tCwKdn, BigInt("0"))
		assert.equal(uint256vkSe4VR, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFKMfBFv = await RainbowRAK.new({from: accounts[3]});
		const uintkppB52S = BigInt("1481")
//		const uint256SUnQxtf = await RainbowRAKFKMfBFv.stake.call(uintkppB52S, {from: accounts[1]});
//		await RainbowRAKFKMfBFv.claimRewards.call({from: accounts[3]});
//		await RainbowRAKFKMfBFv.exit.call({from: accounts[0]});
//		const uint256GJxmVC = await RainbowRAKFKMfBFv.rewardPerToken.call({from: accounts[1]});

		await expect(RainbowRAKFKMfBFv.stake.call(uintkppB52S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKp42zphO = await RainbowRAK.new({from: accounts[4]});
		const uintBD3MXSN = BigInt("1301")
		const addressaZllo2u = accounts[2]
		const uintIWiqDoZ = BigInt("74")
//		await RainbowRAKp42zphO.onlyOwner.call({from: accounts[5]});
//		const boolU2nJbSA = await RainbowRAKp42zphO.isOwner.call({from: accounts[2]});
//		const uint256BZud4uR = await RainbowRAKp42zphO.stake.call(uintBD3MXSN, {from: accounts[0]});
//		const addressWg1UYsS = await RainbowRAKp42zphO.updateReward.call(addressaZllo2u, {from: accounts[2]});
//		const uint256KtSmvm6 = await RainbowRAKp42zphO.unstake.call(uintIWiqDoZ, {from: accounts[1]});

		await expect(RainbowRAKp42zphO.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKBKyXNb = await RainbowRAK.new({from: accounts[0]});
		const uintTyrE9vj = BigInt("1547")
		const uintImpYEuy = BigInt("1404")
		const uint256fagea9p = await RainbowRAKBKyXNb.getCurrentRewardReserve.call({from: accounts[2]});
		const addressarrayGmxA8sj = await RainbowRAKBKyXNb.getCommunity.call({from: accounts[4]});
//		const uint256Unf79yg = await RainbowRAKBKyXNb.unstake.call(uintTyrE9vj, {from: accounts[2]});
//		const uint256VfzbiEh = await RainbowRAKBKyXNb.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256DyFezbM = await RainbowRAKBKyXNb.notifyRewardAmount.call(uintImpYEuy, {from: accounts[4]});

		assert.equal(addressarrayGmxA8sj, )
		assert.equal(uint256fagea9p, BigInt("0"))
		await expect(RainbowRAKBKyXNb.unstake.call(uintTyrE9vj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKA6fYuO = await RainbowRAK.new({from: accounts[4]});
		const addressXmMK1b1 = accounts[4]
		const addresss19FEU = accounts[3]
		const uint256qgv80fk = await RainbowRAKA6fYuO.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKA6fYuO.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressrEqwexg = await RainbowRAKA6fYuO.transferOwnership.call(addressXmMK1b1, {from: accounts[0]});
//		const addressURjwG8s = await RainbowRAKA6fYuO.transferOwnership.call(addresss19FEU, {from: accounts[2]});

		assert.equal(uint256qgv80fk, BigInt("0"))
		await expect(RainbowRAKA6fYuO.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWM8NCxG = await RainbowRAK.new({from: accounts[1]});
		const uintfNof6eI = BigInt("1491")
		const uint256RvPjCL = await RainbowRAKWM8NCxG.rewardPerToken.call({from: accounts[3]});
		const uint256z4ABDlM = await RainbowRAKWM8NCxG.rewardPerToken.call({from: accounts[0]});
//		await RainbowRAKWM8NCxG.claimRewards.call({from: accounts[0]});
//		const uint256Ss893X8 = await RainbowRAKWM8NCxG.stake.call(uintfNof6eI, {from: accounts[5]});

		assert.equal(uint256RvPjCL, BigInt("0"))
		assert.equal(uint256z4ABDlM, BigInt("0"))
		await expect(RainbowRAKWM8NCxG.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtVlC4ar = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqvBRS4V = BigInt("1825")
		const uint256ZLtJDx = await RainbowRAKtVlC4ar.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ydBtO4S = await RainbowRAKtVlC4ar.unstake.call(uintqvBRS4V, {from: "0x0000000000000000000000000000000000000001"});
		const addressilVycQz = await RainbowRAKtVlC4ar.owner.call({from: accounts[0]});
		await RainbowRAKtVlC4ar.claimRewards.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWM8NCxG = await RainbowRAK.new({from: accounts[1]});
		const uintNEa2vD6 = BigInt("1501")
		const addressTXYykSm = await RainbowRAKWM8NCxG.owner.call({from: accounts[3]});
//		const uint256Ss893X8 = await RainbowRAKWM8NCxG.stake.call(uintNEa2vD6, {from: accounts[5]});
//		await RainbowRAKWM8NCxG.exit.call({from: accounts[4]});

		assert.equal(addressTXYykSm, 0xeC6A3381781a0d0BF4Ad59A51C5EaC8020C23A30)
		await expect(RainbowRAKWM8NCxG.stake.call(uintNEa2vD6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWM8NCxG = await RainbowRAK.new({from: accounts[1]});
		const addresskBtUu3c = accounts[2]
		const uintzO5EPyD = BigInt("1519")
		const addressO1yYxOh = await RainbowRAKWM8NCxG.transferOwnership.call(addresskBtUu3c, {from: accounts[1]});
//		const uint256Ss893X8 = await RainbowRAKWM8NCxG.stake.call(uintzO5EPyD, {from: accounts[5]});

		await expect(RainbowRAKWM8NCxG.stake.call(uintzO5EPyD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWM8NCxG = await RainbowRAK.new({from: accounts[1]});
		const uintCKBWpOz = BigInt("1520")
		const uint256MG62nnC = await RainbowRAKWM8NCxG.lastTimeRewardApplicable.call({from: accounts[4]});
//		await RainbowRAKWM8NCxG.renounceOwnership.call({from: accounts[1]});
//		const uint256Ss893X8 = await RainbowRAKWM8NCxG.stake.call(uintCKBWpOz, {from: accounts[5]});

		assert.equal(uint256MG62nnC, BigInt("0"))
		await expect(RainbowRAKWM8NCxG.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWM8NCxG = await RainbowRAK.new({from: accounts[1]});
		const uintPkG0IA = BigInt("1527")
		const uintNkSsvu1 = BigInt("1481")
//		const uint256qK5YPU = await RainbowRAKWM8NCxG.notifyRewardAmount.call(uintPkG0IA, {from: accounts[1]});
//		await RainbowRAKWM8NCxG.claimRewards.call({from: accounts[0]});
//		const uint256Ss893X8 = await RainbowRAKWM8NCxG.stake.call(uintNkSsvu1, {from: accounts[5]});

		await expect(RainbowRAKWM8NCxG.notifyRewardAmount.call(uintPkG0IA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})