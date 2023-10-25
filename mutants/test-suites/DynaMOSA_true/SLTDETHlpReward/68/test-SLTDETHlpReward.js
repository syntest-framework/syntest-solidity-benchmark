const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRH36Ly = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardtRH36Ly.renounceOwnership.call({from: accounts[4]});
		await SLTDETHlpRewardtRH36Ly.onlyOwner.call({from: accounts[4]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFAbRekb = await SLTDETHlpReward.new({from: accounts[3]});
		const uintmDGiO5e = BigInt("604")
//		await SLTDETHlpRewardFAbRekb.exit.call({from: accounts[2]});
//		const uint256YfnzXF = await SLTDETHlpRewardFAbRekb.stake.call(uintmDGiO5e, {from: accounts[4]});
//		await SLTDETHlpRewardFAbRekb.renounceOwnership.call({from: accounts[3]});

		await expect(SLTDETHlpRewardFAbRekb.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYG8YEJ5 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintSszvyv = BigInt("1457")
		const uintiRgaVS0 = BigInt("1871")
		const uint256m7a2S5r = await SLTDETHlpRewardYG8YEJ5.totalSupply.call({from: accounts[3]});
//		const uint256a9wNK94 = await SLTDETHlpRewardYG8YEJ5.stake.call(uintSszvyv, {from: accounts[1]});
//		const uint256jyVhcvV = await SLTDETHlpRewardYG8YEJ5.withdraw.call(uintiRgaVS0, {from: accounts[1]});
//		await SLTDETHlpRewardYG8YEJ5.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256m7a2S5r, BigInt("0"))
		await expect(SLTDETHlpRewardYG8YEJ5.stake.call(uintSszvyv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLZBe7c = await SLTDETHlpReward.new({from: accounts[1]});
		const addressEgvhqFw = accounts[1]
		const addressQ2uZz6i = "0x0000000000000000000000000000000000000001"
		const addressp7L1thO = accounts[5]
		const uint256Blww5fA = await SLTDETHlpRewardLZBe7c.earned.call(addressEgvhqFw, {from: accounts[4]});
		const uint256SHX9sSv = await SLTDETHlpRewardLZBe7c.totalSupply.call({from: accounts[0]});
//		await SLTDETHlpRewardLZBe7c.checkStart.call({from: accounts[1]});
//		await SLTDETHlpRewardLZBe7c.renounceOwnership.call({from: accounts[1]});
//		const addresstwHsiK = await SLTDETHlpRewardLZBe7c.setRewardDistribution.call(addressQ2uZz6i, {from: accounts[2]});
//		const uint256L2mDGqi = await SLTDETHlpRewardLZBe7c.balanceOf.call(addressp7L1thO, {from: accounts[4]});

		assert.equal(uint256Blww5fA, BigInt("0"))
		assert.equal(uint256SHX9sSv, BigInt("0"))
		await expect(SLTDETHlpRewardLZBe7c.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardnoa95vx = await SLTDETHlpReward.new({from: accounts[4]});
//		await SLTDETHlpRewardnoa95vx.renounceOwnership.call({from: accounts[0]});
//		const uint256lFuZcvF = await SLTDETHlpRewardnoa95vx.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256stN5yh5 = await SLTDETHlpRewardnoa95vx.rewardPerToken.call({from: accounts[4]});
//		const uint2560iIwIA = await SLTDETHlpRewardnoa95vx.rewardPerToken.call({from: accounts[5]});

		await expect(SLTDETHlpRewardnoa95vx.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
		const addressT1obBA6 = "0x0000000000000000000000000000000000000001"
		const addressxqcWQtX = accounts[5]
		const uint256UFUto8 = await SLTDETHlpRewardaMmzkqP.balanceOf.call(addressT1obBA6, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});
//		const addressesNq3vp = await SLTDETHlpRewardaMmzkqP.setStakeAddress.call(addressxqcWQtX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256UFUto8, BigInt("0"))
		await expect(SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZWa4ABK = await SLTDETHlpReward.new({from: accounts[1]});
		const addressCttNSRz = accounts[0]
		const uintXWnjGzm = BigInt("1041")
		const uintjv3UO1 = BigInt("696")
		const uintpIKxiu = BigInt("1359")
		const uint256oAYpuLR = await SLTDETHlpRewardZWa4ABK.balanceOf.call(addressCttNSRz, {from: accounts[4]});
//		const uint256AdLAbHa = await SLTDETHlpRewardZWa4ABK.withdraw.call(uintXWnjGzm, {from: accounts[4]});
//		const uint256vxvEvW2 = await SLTDETHlpRewardZWa4ABK.withdraw.call(uintjv3UO1, {from: accounts[5]});
//		const uint256l72iRiY = await SLTDETHlpRewardZWa4ABK.withdraw.call(uintpIKxiu, {from: accounts[3]});

		assert.equal(uint256oAYpuLR, BigInt("0"))
		await expect(SLTDETHlpRewardZWa4ABK.withdraw.call(uintXWnjGzm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
		const addressIwORx2z = "0x00000000000000000000000000000000000000-1"
		const addressZ0FII3R = accounts[5]
//		const uint256UFUto8 = await SLTDETHlpRewardaMmzkqP.balanceOf.call(addressIwORx2z, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardaMmzkqP.exit.call({from: accounts[4]});
//		const addressesNq3vp = await SLTDETHlpRewardaMmzkqP.setStakeAddress.call(addressZ0FII3R, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardaMmzkqP.balanceOf.call(addressIwORx2z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYG8YEJ5 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintEqbFkdw = BigInt("277")
		const uintgHb8Bgx = BigInt("1871")
		const addressx07DzwE = await SLTDETHlpRewardYG8YEJ5.owner.call({from: accounts[3]});
		const uint256m7a2S5r = await SLTDETHlpRewardYG8YEJ5.totalSupply.call({from: accounts[3]});
//		const uint256a9wNK94 = await SLTDETHlpRewardYG8YEJ5.stake.call(uintEqbFkdw, {from: accounts[1]});
//		const uint256jyVhcvV = await SLTDETHlpRewardYG8YEJ5.withdraw.call(uintgHb8Bgx, {from: accounts[1]});
//		await SLTDETHlpRewardYG8YEJ5.onlyOwner.call({from: accounts[1]});

		assert.equal(addressx07DzwE, 0x384a90e8cB8699d0D25F83DF87d3118bFe0Aa373)
		assert.equal(uint256m7a2S5r, BigInt("0"))
		await expect(SLTDETHlpRewardYG8YEJ5.stake.call(uintEqbFkdw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
		const addressFPrSc96 = "0x0000000000000000000000000000000000000000"
		const uintVLCZ7d7 = BigInt("498")
		const addresslyLG3Fb = accounts[5]
		const uint256UFUto8 = await SLTDETHlpRewardaMmzkqP.balanceOf.call(addressFPrSc96, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cpE4aYS = await SLTDETHlpRewardaMmzkqP.notifyRewardAmount.call(uintVLCZ7d7, {from: accounts[1]});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});
//		const addressesNq3vp = await SLTDETHlpRewardaMmzkqP.setStakeAddress.call(addresslyLG3Fb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256UFUto8, BigInt("0"))
		await expect(SLTDETHlpRewardaMmzkqP.notifyRewardAmount.call(uintVLCZ7d7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
//		const uint256TboU6XF = await SLTDETHlpRewardaMmzkqP.remainingReward.call({from: accounts[4]});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardaMmzkqP.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
		const addressTGi1XTy = "0x0000000000000000000000000000000000000001"
		const addressvZXFNBf = "0x0000000000000000000000000000000000000001"
		const uintVgy3Hoq = BigInt("1742")
		const addressp5xka7q = accounts[5]
		const uint256UFUto8 = await SLTDETHlpRewardaMmzkqP.balanceOf.call(addressTGi1XTy, {from: "0x0000000000000000000000000000000000000001"});
		const addressSpKFKM3 = await SLTDETHlpRewardaMmzkqP.setStakeAddress.call(addressvZXFNBf, {from: accounts[3]});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});
//		const uint256oKbnyDQ = await SLTDETHlpRewardaMmzkqP.stake.call(uintVgy3Hoq, {from: accounts[2]});
//		await SLTDETHlpRewardaMmzkqP.checkStart.call({from: accounts[2]});
//		const boolJRn78Sn = await SLTDETHlpRewardaMmzkqP.isOwner.call({from: accounts[1]});
//		const addressesNq3vp = await SLTDETHlpRewardaMmzkqP.setStakeAddress.call(addressp5xka7q, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardaMmzkqP.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardaMmzkqP.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256UFUto8, BigInt("0"))
		await expect(SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
		const addressUBgEo3h = "0x0000000000000000000000000000000000000001"
		const uintttFxXWa = BigInt("1742")
		const addressQ1SZSQm = accounts[5]
//		await SLTDETHlpRewardaMmzkqP.renounceOwnership.call({from: accounts[3]});
//		const uint256UFUto8 = await SLTDETHlpRewardaMmzkqP.balanceOf.call(addressUBgEo3h, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardaMmzkqP.checkStart.call({from: accounts[4]});
//		const uint256oKbnyDQ = await SLTDETHlpRewardaMmzkqP.stake.call(uintttFxXWa, {from: accounts[2]});
//		const addressesNq3vp = await SLTDETHlpRewardaMmzkqP.setStakeAddress.call(addressQ1SZSQm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardaMmzkqP.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYG8YEJ5 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressckgwpl5 = accounts[1]
		const uintWrq4j4A = BigInt("797")
		const addressRN7p2QL = await SLTDETHlpRewardYG8YEJ5.transferOwnership.call(addressckgwpl5, {from: accounts[0]});
//		const uint256a9wNK94 = await SLTDETHlpRewardYG8YEJ5.stake.call(uintWrq4j4A, {from: accounts[1]});

		await expect(SLTDETHlpRewardYG8YEJ5.stake.call(uintWrq4j4A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYG8YEJ5 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintTf983KV = BigInt("1660")
		const uintMIC3HVH = BigInt("801")
		const uinteP7Lx9P = BigInt("1452")
		const uint256LG7rEws = await SLTDETHlpRewardYG8YEJ5.notifyRewardAmount.call(uintTf983KV, {from: accounts[0]});
//		const uint256a9wNK94 = await SLTDETHlpRewardYG8YEJ5.stake.call(uintMIC3HVH, {from: accounts[1]});
//		const uint256xIvBFVE = await SLTDETHlpRewardYG8YEJ5.withdraw.call(uinteP7Lx9P, {from: accounts[4]});

		await expect(SLTDETHlpRewardYG8YEJ5.stake.call(uintMIC3HVH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYG8YEJ5 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressfngPZnv = accounts[1]
		const uint5kMSzP = BigInt("793")
		const addressRo4BMrt = await SLTDETHlpRewardYG8YEJ5.setRewardDistribution.call(addressfngPZnv, {from: accounts[0]});
//		await SLTDETHlpRewardYG8YEJ5.renounceOwnership.call({from: accounts[2]});
//		const uint256a9wNK94 = await SLTDETHlpRewardYG8YEJ5.stake.call(uint5kMSzP, {from: accounts[1]});

		await expect(SLTDETHlpRewardYG8YEJ5.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaMmzkqP = await SLTDETHlpReward.new({from: accounts[3]});
		const uintaZO5fa4 = BigInt("710")
		const uint256buYcfbj = await SLTDETHlpRewardaMmzkqP.setStartTime.call(uintaZO5fa4, {from: accounts[3]});
//		await SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardaMmzkqP.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})