const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardNteqTY9 = await AavePoolReward.new({from: accounts[0]});
		const uintVsZhHki = BigInt("586")
		await AavePoolRewardNteqTY9.exit.call({from: accounts[0]});
		const uint256alDaF6V = await AavePoolRewardNteqTY9.notifyRewardAmount.call(uintVsZhHki, {from: accounts[2]});

		await expect(AavePoolRewardNteqTY9.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmlsOnXg = await AavePoolReward.new({from: accounts[2]});
		const addressbiPf5Oj = accounts[2]
		const uint256Pewx8t = await AavePoolRewardmlsOnXg.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256desZXZ1 = await AavePoolRewardmlsOnXg.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressMXjCZ00 = await AavePoolRewardmlsOnXg.updateReward.call(addressbiPf5Oj, {from: accounts[2]});
		const uint256gOMVgFy = await AavePoolRewardmlsOnXg.rewardPerToken.call({from: accounts[0]});
		await AavePoolRewardmlsOnXg.getReward.call({from: accounts[2]});

		assert.equal(uint256Pewx8t, BigInt("0"))
		assert.equal(uint256desZXZ1, BigInt("0"))
		await expect(AavePoolRewardmlsOnXg.updateReward.call(addressbiPf5Oj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardjCX8dZa = await AavePoolReward.new({from: accounts[5]});
		const uintU0yYKhk = BigInt("280")
		const uintS0WFh2E = BigInt("683")
		const addressnSqUKN = accounts[0]
		const addressYm3EwWn = accounts[2]
		const uint256Dkg83Iz = await AavePoolRewardjCX8dZa.notifyRewardAmount.call(uintU0yYKhk, {from: accounts[1]});
		await AavePoolRewardjCX8dZa.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MECOlsf = await AavePoolRewardjCX8dZa.notifyRewardAmount.call(uintS0WFh2E, {from: accounts[4]});
		const addressPBGOKFT = await AavePoolRewardjCX8dZa.dev.call(addressnSqUKN, {from: accounts[2]});
		await AavePoolRewardjCX8dZa.getReward.call({from: accounts[3]});
		const uint256L2jxjxR = await AavePoolRewardjCX8dZa.earned.call(addressYm3EwWn, {from: accounts[3]});

		await expect(AavePoolRewardjCX8dZa.notifyRewardAmount.call(uintU0yYKhk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcoHNpOM = await AavePoolReward.new({from: accounts[0]});
		const uintZ7uHOhc = BigInt("24")
		const uintOynItRV = BigInt("108")
		const addressVUhhei3 = accounts[4]
		const uint256uDRximG = await AavePoolRewardcoHNpOM.stake.call(uintZ7uHOhc, {from: accounts[1]});
		const uint2567EEmmi = await AavePoolRewardcoHNpOM.withdraw.call(uintOynItRV, {from: accounts[3]});
		const addresszrucX0v = await AavePoolRewardcoHNpOM.dev.call(addressVUhhei3, {from: accounts[0]});
		const uint256Jnr1Ep = await AavePoolRewardcoHNpOM.rewardPerToken.call({from: accounts[3]});
		const uint256E6pMXji = await AavePoolRewardcoHNpOM.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardcoHNpOM.stake.call(uintZ7uHOhc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardSfZ7bMK = await AavePoolReward.new({from: accounts[3]});
		const uintB3uzcqG = BigInt("667")
		const addresst91DtTS = accounts[2]
		const addressmzpd95 = accounts[0]
		await AavePoolRewardSfZ7bMK.getReward.call({from: accounts[0]});
		const uint256GTQi0Gv = await AavePoolRewardSfZ7bMK.withdraw.call(uintB3uzcqG, {from: accounts[3]});
		const uint256eRNaMSG = await AavePoolRewardSfZ7bMK.earned.call(addresst91DtTS, {from: accounts[3]});
		const uint256Zqfo5Sp = await AavePoolRewardSfZ7bMK.earned.call(addressmzpd95, {from: accounts[2]});

		await expect(AavePoolRewardSfZ7bMK.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardNteqTY9 = await AavePoolReward.new({from: accounts[0]});
		const addresspStfIum = accounts[2]
		const uintTY5F0Yo = BigInt("556")
		const addresss21a8z = accounts[5]
		const addressHL1oTth = await AavePoolRewardNteqTY9.dev.call(addresspStfIum, {from: accounts[2]});
		const uint256alDaF6V = await AavePoolRewardNteqTY9.notifyRewardAmount.call(uintTY5F0Yo, {from: accounts[2]});
		const addressQr05Jx0 = await AavePoolRewardNteqTY9.updateReward.call(addresss21a8z, {from: accounts[1]});

		await expect(AavePoolRewardNteqTY9.dev.call(addresspStfIum, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardNteqTY9 = await AavePoolReward.new({from: accounts[0]});
		const uintrGFdNUr = BigInt("1739")
		const uintSzC3iNd = BigInt("586")
		const uint256w9GinEa = await AavePoolRewardNteqTY9.notifyRewardAmount.call(uintrGFdNUr, {from: accounts[0]});
		await AavePoolRewardNteqTY9.exit.call({from: accounts[0]});
		const uint256tf17ku = await AavePoolRewardNteqTY9.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256alDaF6V = await AavePoolRewardNteqTY9.notifyRewardAmount.call(uintSzC3iNd, {from: accounts[2]});

		await expect(AavePoolRewardNteqTY9.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardTyDXqUT = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const address7ExlH0 = accounts[4]
		await AavePoolRewardTyDXqUT.exit.call({from: accounts[1]});
		const addressoqnQRJl = await AavePoolRewardTyDXqUT.dev.call(address7ExlH0, {from: accounts[3]});
		const uint256AbLWkM3 = await AavePoolRewardTyDXqUT.rewardPerToken.call({from: accounts[0]});
	});
})