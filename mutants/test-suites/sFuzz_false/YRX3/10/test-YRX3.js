const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3DEjuzVP = await YRX3.new({from: accounts[3]});
		const addresszIhZUft = "0x0000000000000000000000000000000000000001"
//		await YRX3DEjuzVP.onlyRewardDistribution.call({from: accounts[3]});
//		await YRX3DEjuzVP.onlyRewardDistribution.call({from: accounts[0]});
//		const addressgk9LKuZ = await YRX3DEjuzVP.toPayable.call(addresszIhZUft, {from: accounts[1]});
//		await YRX3DEjuzVP.checkStart.call({from: accounts[1]});
//		await YRX3DEjuzVP.onlyOwner.call({from: accounts[2]});

		await expect(YRX3DEjuzVP.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3LATbkNs = await YRX3.new({from: accounts[5]});
		const uintkbGXFB = BigInt("1116")
		const addressgXEWps = accounts[0]
		const addressE2EUfgf = accounts[0]
//		const uint256RKNZTlt = await YRX3LATbkNs.withdraw.call(uintkbGXFB, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3LATbkNs.checkStart.call({from: accounts[4]});
//		const uint256jkBzVE4 = await YRX3LATbkNs.totalSupply.call({from: accounts[0]});
//		const addresshwV1P3c = await YRX3LATbkNs.toPayable.call(addressgXEWps, {from: accounts[1]});
//		const addressmQKIYCc = await YRX3LATbkNs.emergencyDrain.call(addressE2EUfgf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3LATbkNs.withdraw.call(uintkbGXFB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3T8vAmfu = await YRX3.new({from: accounts[3]});
		const uintcX5uoxS = BigInt("924")
		const uint256UcKEB2r = await YRX3T8vAmfu.totalSupply.call({from: accounts[2]});
		const addressQrsBwfJ = await YRX3T8vAmfu.owner.call({from: accounts[5]});
//		const uint256C91SmtA = await YRX3T8vAmfu.withdraw.call(uintcX5uoxS, {from: accounts[0]});

		assert.equal(addressQrsBwfJ, 0x248F85fD640D7B5dc0f8d6Fe4Bca38f986CfeA21)
		assert.equal(uint256UcKEB2r, BigInt("0"))
		await expect(YRX3T8vAmfu.withdraw.call(uintcX5uoxS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX30fGAKa = await YRX3.new({from: accounts[5]});
		const uintyYMqe4t = BigInt("180")
		const addressTDn3wd0 = accounts[1]
//		const uint256XsqvwFt = await YRX30fGAKa.stake.call(uintyYMqe4t, {from: accounts[2]});
//		const uint256nV2unpK = await YRX30fGAKa.balanceOf.call(addressTDn3wd0, {from: accounts[0]});
//		await YRX30fGAKa.getReward.call({from: accounts[3]});
//		const boolD809vXF = await YRX30fGAKa.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX30fGAKa.stake.call(uintyYMqe4t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Bvmiuv5 = await YRX3.new({from: accounts[3]});
//		await YRX3Bvmiuv5.renounceOwnership.call({from: accounts[0]});
//		await YRX3Bvmiuv5.checkNextEpoch.call({from: accounts[4]});
//		const uint256ZdPcZ5b = await YRX3Bvmiuv5.rewardPerToken.call({from: accounts[0]});

		await expect(YRX3Bvmiuv5.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3X6i3IkZ = await YRX3.new({from: accounts[5]});
		const uintIXs6V9n = BigInt("1360")
		const uintlLbzX4 = BigInt("1918")
//		await YRX3X6i3IkZ.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3X6i3IkZ.renounceOwnership.call({from: accounts[5]});
//		await YRX3X6i3IkZ.onlyOwner.call({from: accounts[0]});
//		const uint2560yaBpu = await YRX3X6i3IkZ.stake.call(uintIXs6V9n, {from: accounts[3]});
//		const uint2566Ql7d5 = await YRX3X6i3IkZ.withdraw.call(uintlLbzX4, {from: accounts[2]});

		await expect(YRX3X6i3IkZ.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vzAsDOa = await YRX3.new({from: accounts[3]});
		const addressBgfQlob = accounts[2]
//		await YRX3vzAsDOa.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressFpynv1l = await YRX3vzAsDOa.updateReward.call(addressBgfQlob, {from: accounts[4]});
//		await YRX3vzAsDOa.onlyOwner.call({from: accounts[1]});

		await expect(YRX3vzAsDOa.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3lqTGeVu = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHPvixM9 = await YRX3lqTGeVu.owner.call({from: accounts[1]});
		await YRX3lqTGeVu.checkNextEpoch.call({from: accounts[1]});
		await YRX3lqTGeVu.onlyRewardDistribution.call({from: accounts[0]});
		await YRX3lqTGeVu.onlyOwner.call({from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3T8vAmfu = await YRX3.new({from: accounts[3]});
		const uintMVpw7e = BigInt("925")
//		await YRX3T8vAmfu.getReward.call({from: accounts[3]});
//		const uint256C91SmtA = await YRX3T8vAmfu.withdraw.call(uintMVpw7e, {from: accounts[0]});
//		const uint256qu0bb3 = await YRX3T8vAmfu.rewardPerToken.call({from: accounts[1]});

		await expect(YRX3T8vAmfu.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3T8vAmfu = await YRX3.new({from: accounts[3]});
		const addressivSdvtX = accounts[3]
		const uintJcCeLc = BigInt("1806")
		const addresstbX4Gto = await YRX3T8vAmfu.setRewardDistribution.call(addressivSdvtX, {from: accounts[3]});
//		const uint256C91SmtA = await YRX3T8vAmfu.withdraw.call(uintJcCeLc, {from: accounts[0]});

		await expect(YRX3T8vAmfu.withdraw.call(uintJcCeLc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3T8vAmfu = await YRX3.new({from: accounts[3]});
//		await YRX3T8vAmfu.getReward.call({from: accounts[3]});
//		await YRX3T8vAmfu.renounceOwnership.call({from: accounts[3]});
//		await YRX3T8vAmfu.onlyOwner.call({from: accounts[5]});

		await expect(YRX3T8vAmfu.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3T8vAmfu = await YRX3.new({from: accounts[3]});
		const addressfrYELac = accounts[1]
		const uintgzcvhzU = BigInt("924")
		const addressXmqdgNX = accounts[5]
		const addressQEraTHT = await YRX3T8vAmfu.transferOwnership.call(addressfrYELac, {from: accounts[3]});
//		await YRX3T8vAmfu.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256C91SmtA = await YRX3T8vAmfu.withdraw.call(uintgzcvhzU, {from: accounts[0]});
//		const addressLHnkLf = await YRX3T8vAmfu.emergencyDrain.call(addressXmqdgNX, {from: accounts[0]});

		await expect(YRX3T8vAmfu.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})