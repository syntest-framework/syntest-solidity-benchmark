const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKZ8oJ1AV = await RainbowRAK.new({from: accounts[3]});
		const uintEpmfkVM = BigInt("583")
		const addressXHvFZG5 = "0x0000000000000000000000000000000000000001"
		const addressLOunstA = "0x0000000000000000000000000000000000000001"
//		const uint256idRrNgA = await RainbowRAKZ8oJ1AV.stake.call(uintEpmfkVM, {from: accounts[0]});
//		const addressQ3m7tLc = await RainbowRAKZ8oJ1AV.updateReward.call(addressXHvFZG5, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLvPKBeh = await RainbowRAKZ8oJ1AV.isOwner.call({from: accounts[2]});
//		await RainbowRAKZ8oJ1AV.claimRewards.call({from: accounts[0]});
//		const addresscB2VQmi = await RainbowRAKZ8oJ1AV.updateReward.call(addressLOunstA, {from: accounts[1]});

		await expect(RainbowRAKZ8oJ1AV.stake.call(uintEpmfkVM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKysgJR36 = await RainbowRAK.new({from: accounts[1]});
		const addressp7WAbDS = accounts[0]
		const addresshFBDLp = accounts[4]
//		const addressBI7IyOd = await RainbowRAKysgJR36.updateReward.call(addressp7WAbDS, {from: accounts[1]});
//		await RainbowRAKysgJR36.onlyOwner.call({from: accounts[2]});
//		const uint256TIk7yST = await RainbowRAKysgJR36.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256RRBV8OT = await RainbowRAKysgJR36.rewardPerToken.call({from: accounts[1]});
//		const uint256eWFIp9M = await RainbowRAKysgJR36.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addressQQgF5i = await RainbowRAKysgJR36.updateReward.call(addresshFBDLp, {from: accounts[0]});

		await expect(RainbowRAKysgJR36.updateReward.call(addressp7WAbDS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKB536JUS = await RainbowRAK.new({from: accounts[2]});
		const addressOWVxE2 = accounts[1]
		const uintfCZXZRS = BigInt("1892")
		const addressarraylnvAn1G = await RainbowRAKB536JUS.getCommunity.call({from: accounts[3]});
		const uint256GZpSm9R = await RainbowRAKB536JUS.earned.call(addressOWVxE2, {from: accounts[2]});
		const addressarraySiJ2E88 = await RainbowRAKB536JUS.getCommunity.call({from: accounts[3]});
//		const uint256xySHCIT = await RainbowRAKB536JUS.unstake.call(uintfCZXZRS, {from: accounts[3]});
//		const boolElTPlp = await RainbowRAKB536JUS.isOwner.call({from: accounts[5]});

		assert.equal(addressarraySiJ2E88, )
		assert.equal(addressarraylnvAn1G, )
		assert.equal(uint256GZpSm9R, BigInt("0"))
		await expect(RainbowRAKB536JUS.unstake.call(uintfCZXZRS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCEC9XO2 = await RainbowRAK.new({from: accounts[1]});
		const addressaiS0l7v = accounts[0]
		const uint256KDVYHYU = await RainbowRAKCEC9XO2.lastTimeRewardApplicable.call({from: accounts[1]});
//		await RainbowRAKCEC9XO2.claimRewards.call({from: accounts[2]});
//		const addressJd8q1P = await RainbowRAKCEC9XO2.updateReward.call(addressaiS0l7v, {from: accounts[2]});

		assert.equal(uint256KDVYHYU, BigInt("0"))
		await expect(RainbowRAKCEC9XO2.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlOSPXFU = await RainbowRAK.new({from: accounts[2]});
		const uintUwFQznS = BigInt("1913")
		const addressc4aDZPh = accounts[4]
//		const uint256JPMQLkQ = await RainbowRAKlOSPXFU.notifyRewardAmount.call(uintUwFQznS, {from: accounts[2]});
//		await RainbowRAKlOSPXFU.renounceOwnership.call({from: accounts[4]});
//		const uint256ymtU6If = await RainbowRAKlOSPXFU.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addressarraymwq5Z9m = await RainbowRAKlOSPXFU.getCommunity.call({from: accounts[4]});
//		const uint256b87hTY3 = await RainbowRAKlOSPXFU.earned.call(addressc4aDZPh, {from: accounts[5]});

		await expect(RainbowRAKlOSPXFU.notifyRewardAmount.call(uintUwFQznS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKcPLBoOp = await RainbowRAK.new({from: accounts[5]});
		const addressarrayBw1shSD = await RainbowRAKcPLBoOp.getCommunity.call({from: accounts[0]});
		const uint256pD4BMyL = await RainbowRAKcPLBoOp.getCurrentRewardReserve.call({from: accounts[3]});

		assert.equal(addressarrayBw1shSD, )
		assert.equal(uint256pD4BMyL, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKW2arE0d = await RainbowRAK.new({from: accounts[1]});
		const addressi3xnZG = accounts[2]
//		await RainbowRAKW2arE0d.exit.call({from: accounts[3]});
//		const boolhh7kUSc = await RainbowRAKW2arE0d.isOwner.call({from: accounts[2]});
		await RainbowRAKW2arE0d.exit.call({from: accounts[3]});
//		const uint256vbeFDy5 = await RainbowRAKW2arE0d.getCurrentRewardReserve.call({from: accounts[2]});
//		await RainbowRAKW2arE0d.renounceOwnership.call({from: accounts[3]});
//		const uint256FAmDppQ = await RainbowRAKW2arE0d.earned.call(addressi3xnZG, {from: accounts[1]});

		await expect(RainbowRAKW2arE0d.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKwbdimCJ = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyJUl3qV = accounts[4]
		const uintw18tjHi = BigInt("1170")
		await RainbowRAKwbdimCJ.renounceOwnership.call({from: accounts[0]});
		await RainbowRAKwbdimCJ.renounceOwnership.call({from: accounts[1]});
		const addresslz98F3m = await RainbowRAKwbdimCJ.updateReward.call(addressyJUl3qV, {from: accounts[5]});
		const uint256DK2DkrQ = await RainbowRAKwbdimCJ.unstake.call(uintw18tjHi, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKd69JOiq = await RainbowRAK.new({from: accounts[3]});
//		await RainbowRAKd69JOiq.renounceOwnership.call({from: accounts[4]});
//		await RainbowRAKd69JOiq.onlyOwner.call({from: accounts[0]});

		await expect(RainbowRAKd69JOiq.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlOSPXFU = await RainbowRAK.new({from: accounts[2]});
		const uintnvhAgM8 = BigInt("1913")
		const uintnbudhI6 = BigInt("1284")
		const addressqme17Bv = accounts[4]
		const addressrCL1Vdu = accounts[3]
		const uintdqJO9Vf = BigInt("625")
		const uintEGDNH1I = BigInt("810")
		const addressqrHzGlm = accounts[4]
		const uint256Xwq32Uq = await RainbowRAKlOSPXFU.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressIk6TIWf = await RainbowRAKlOSPXFU.owner.call({from: accounts[5]});
//		const uint256JPMQLkQ = await RainbowRAKlOSPXFU.notifyRewardAmount.call(uintnvhAgM8, {from: accounts[2]});
//		await RainbowRAKlOSPXFU.renounceOwnership.call({from: accounts[4]});
//		const uint2567TXo7x = await RainbowRAKlOSPXFU.notifyRewardAmount.call(uintnbudhI6, {from: accounts[3]});
//		const uint256ALIl9I2 = await RainbowRAKlOSPXFU.earned.call(addressqme17Bv, {from: accounts[5]});
//		const uint256Zo29je5 = await RainbowRAKlOSPXFU.earned.call(addressrCL1Vdu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressp49x50Z = await RainbowRAKlOSPXFU.owner.call({from: accounts[2]});
//		const uint256mjKq23x = await RainbowRAKlOSPXFU.unstake.call(uintdqJO9Vf, {from: accounts[3]});
//		const uint256aHLNU0 = await RainbowRAKlOSPXFU.stake.call(uintEGDNH1I, {from: accounts[2]});
//		await RainbowRAKlOSPXFU.renounceOwnership.call({from: accounts[4]});
//		const uint256ymtU6If = await RainbowRAKlOSPXFU.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256b87hTY3 = await RainbowRAKlOSPXFU.earned.call(addressqrHzGlm, {from: accounts[5]});

		assert.equal(addressIk6TIWf, 0xee26C027e11f14e34B3eB260947569FeD6Bf07d0)
		assert.equal(uint256Xwq32Uq, BigInt("0"))
		await expect(RainbowRAKlOSPXFU.notifyRewardAmount.call(uintnvhAgM8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCEC9XO2 = await RainbowRAK.new({from: accounts[1]});
		const addressxUza84y = accounts[5]
		const addressCBaBVmZ = await RainbowRAKCEC9XO2.transferOwnership.call(addressxUza84y, {from: accounts[1]});
//		await RainbowRAKCEC9XO2.claimRewards.call({from: accounts[2]});

		await expect(RainbowRAKCEC9XO2.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlOSPXFU = await RainbowRAK.new({from: accounts[2]});
		const uintGf1psk = BigInt("1903")
//		await RainbowRAKlOSPXFU.renounceOwnership.call({from: accounts[2]});
//		const uint256JPMQLkQ = await RainbowRAKlOSPXFU.notifyRewardAmount.call(uintGf1psk, {from: accounts[2]});
//		const addressVKjIYri = await RainbowRAKlOSPXFU.owner.call({from: accounts[5]});

		await expect(RainbowRAKlOSPXFU.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})