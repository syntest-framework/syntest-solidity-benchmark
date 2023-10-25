const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardc1S5tfz = await SLTDETHlpReward.new({from: accounts[0]});
		const addressKgoHcBe = accounts[5]
		const addressOpFHrw6 = accounts[2]
		const uintIetjgQz = BigInt("1872")
		const uintjmaRUQX = BigInt("2036")
		const addresss7n7Fgu = accounts[2]
		const uint256kOxaXbZ = await SLTDETHlpRewardc1S5tfz.balanceOf.call(addressKgoHcBe, {from: accounts[1]});
		const uint256nsvWe6g = await SLTDETHlpRewardc1S5tfz.earned.call(addressOpFHrw6, {from: accounts[0]});
//		const uint256LMCwY4L = await SLTDETHlpRewardc1S5tfz.stake.call(uintIetjgQz, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LzOljtZ = await SLTDETHlpRewardc1S5tfz.withdraw.call(uintjmaRUQX, {from: accounts[3]});
//		const addressvylKeyb = await SLTDETHlpRewardc1S5tfz.updateReward.call(addresss7n7Fgu, {from: accounts[4]});

		assert.equal(uint256kOxaXbZ, BigInt("0"))
		assert.equal(uint256nsvWe6g, BigInt("0"))
		await expect(SLTDETHlpRewardc1S5tfz.stake.call(uintIetjgQz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarda5LN8ca = await SLTDETHlpReward.new({from: accounts[0]});
		const addressXn2I1X = accounts[2]
		const addressm1rLAv3 = accounts[3]
		const uint256rO6zs7B = await SLTDETHlpRewarda5LN8ca.balanceOf.call(addressXn2I1X, {from: accounts[0]});
//		await SLTDETHlpRewarda5LN8ca.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresslOHDT9f = await SLTDETHlpRewarda5LN8ca.setRewardDistribution.call(addressm1rLAv3, {from: accounts[3]});

		assert.equal(uint256rO6zs7B, BigInt("0"))
		await expect(SLTDETHlpRewarda5LN8ca.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQY2ZgY6 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintvjwGBQS = BigInt("86")
		const uinteBtuDWd = BigInt("2026")
		const addressjqWCPvm = accounts[4]
		const addressm6aL0qd = accounts[5]
		const uintxhxbgul = BigInt("1977")
//		const uint256IJtqrsC = await SLTDETHlpRewardQY2ZgY6.notifyRewardAmount.call(uintvjwGBQS, {from: accounts[5]});
//		const uint256tIBJLV = await SLTDETHlpRewardQY2ZgY6.setStartTime.call(uinteBtuDWd, {from: accounts[2]});
//		const addressTcQ0vAd = await SLTDETHlpRewardQY2ZgY6.setRewardDistribution.call(addressjqWCPvm, {from: "0x0000000000000000000000000000000000000001"});
//		const addressg8nD0R2 = await SLTDETHlpRewardQY2ZgY6.transferOwnership.call(addressm6aL0qd, {from: accounts[2]});
//		const uint256GjLfybo = await SLTDETHlpRewardQY2ZgY6.rewardPerToken.call({from: accounts[3]});
//		const uint256cWYT1HL = await SLTDETHlpRewardQY2ZgY6.stake.call(uintxhxbgul, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardQY2ZgY6.notifyRewardAmount.call(uintvjwGBQS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardY13Ptw = await SLTDETHlpReward.new({from: accounts[4]});
		const uintTAzgpuq = BigInt("766")
//		const uint256JiTNi6U = await SLTDETHlpRewardY13Ptw.remainingReward.call({from: accounts[1]});
//		const uint256Dw3ThM = await SLTDETHlpRewardY13Ptw.withdraw.call(uintTAzgpuq, {from: accounts[4]});
//		const uint256G3VHaya = await SLTDETHlpRewardY13Ptw.totalSupply.call({from: accounts[0]});

		await expect(SLTDETHlpRewardY13Ptw.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMCtYeTo = await SLTDETHlpReward.new({from: accounts[2]});
		const uintmS0CbhU = BigInt("1718")
//		const uint256QHyBSvR = await SLTDETHlpRewardMCtYeTo.withdraw.call(uintmS0CbhU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256n66Xelq = await SLTDETHlpRewardMCtYeTo.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardMCtYeTo.checkStart.call({from: accounts[2]});

		await expect(SLTDETHlpRewardMCtYeTo.withdraw.call(uintmS0CbhU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkjb8jzM = await SLTDETHlpReward.new({from: accounts[3]});
		const addressqcyPPeH = accounts[5]
		const addressSb1F8Oc = accounts[3]
		const uintqlZIX3k = BigInt("225")
		const uintFlIapWl = BigInt("1795")
		const addressLP6Hayx = await SLTDETHlpRewardkjb8jzM.setStakeAddress.call(addressqcyPPeH, {from: accounts[3]});
//		const addresstfnMBmO = await SLTDETHlpRewardkjb8jzM.setRewardDistribution.call(addressSb1F8Oc, {from: accounts[0]});
//		const uint256NgxKN33 = await SLTDETHlpRewardkjb8jzM.withdraw.call(uintqlZIX3k, {from: accounts[5]});
//		const uint256bGh4FJb = await SLTDETHlpRewardkjb8jzM.stake.call(uintFlIapWl, {from: accounts[4]});

		await expect(SLTDETHlpRewardkjb8jzM.setRewardDistribution.call(addressSb1F8Oc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const uintpWueUy2 = BigInt("1587")
//		await SLTDETHlpReward7JTvYd.exit.call({from: accounts[4]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uintpWueUy2, {from: accounts[0]});
//		await SLTDETHlpReward7JTvYd.checkStart.call({from: accounts[3]});

		await expect(SLTDETHlpReward7JTvYd.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const addressSj9R6Q = accounts[1]
		const uintcy9PqZG = BigInt("1597")
//		const addressbwd4jph = await SLTDETHlpReward7JTvYd.updateReward.call(addressSj9R6Q, {from: accounts[3]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uintcy9PqZG, {from: accounts[0]});

		await expect(SLTDETHlpReward7JTvYd.updateReward.call(addressSj9R6Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const uintYsWKR9 = BigInt("1592")
		const addressjRKBGlM = await SLTDETHlpReward7JTvYd.owner.call({from: accounts[1]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uintYsWKR9, {from: accounts[0]});

		assert.equal(addressjRKBGlM, 0xD0b4854Cb4Ca3BDBBa4f9939F56f53918F83E52F)
		await expect(SLTDETHlpReward7JTvYd.withdraw.call(uintYsWKR9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardVhDnRHX = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvxdWWJ6 = BigInt("391")
		const uintRXutQqp = BigInt("1135")
		const uintFVMhNR1 = BigInt("402")
		const addressVkrHiXW = accounts[2]
		const addressg5Gznno = accounts[1]
		const uint256tK9ZJg3 = await SLTDETHlpRewardVhDnRHX.setStartTime.call(uintvxdWWJ6, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardVhDnRHX.getReward.call({from: accounts[3]});
		const uint256y3CGD6I = await SLTDETHlpRewardVhDnRHX.stake.call(uintRXutQqp, {from: accounts[2]});
		const uint256vDQCqFi = await SLTDETHlpRewardVhDnRHX.withdraw.call(uintFVMhNR1, {from: "0x0000000000000000000000000000000000000001"});
		const addressmMBZM5V = await SLTDETHlpRewardVhDnRHX.transferOwnership.call(addressVkrHiXW, {from: accounts[0]});
		const addressVOwxHkM = await SLTDETHlpRewardVhDnRHX.transferOwnership.call(addressg5Gznno, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const addressthjwsP = accounts[2]
		const uintFeGK3lB = BigInt("1570")
		const addressN0mzeUT = await SLTDETHlpReward7JTvYd.transferOwnership.call(addressthjwsP, {from: accounts[4]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uintFeGK3lB, {from: accounts[0]});

		await expect(SLTDETHlpReward7JTvYd.withdraw.call(uintFeGK3lB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCqzV86 = await SLTDETHlpReward.new({from: accounts[2]});
		const uintCGCwh84 = BigInt("307")
		const uintPA5UFWZ = BigInt("1128")
		const uint256ULgwh5E = await SLTDETHlpRewardCqzV86.notifyRewardAmount.call(uintCGCwh84, {from: accounts[2]});
//		const uint256ocH2tcX = await SLTDETHlpRewardCqzV86.remainingReward.call({from: accounts[1]});
//		const uint256g0hGnFZ = await SLTDETHlpRewardCqzV86.stake.call(uintPA5UFWZ, {from: accounts[2]});

		await expect(SLTDETHlpRewardCqzV86.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const uintHDAdwya = BigInt("1571")
//		await SLTDETHlpReward7JTvYd.getReward.call({from: accounts[4]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uintHDAdwya, {from: accounts[0]});
//		await SLTDETHlpReward7JTvYd.checkStart.call({from: accounts[1]});

		await expect(SLTDETHlpReward7JTvYd.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const addresstORV6JN = accounts[3]
		const uinthfChMpK = BigInt("1587")
		const addressSILiUCU = await SLTDETHlpReward7JTvYd.setRewardDistribution.call(addresstORV6JN, {from: accounts[4]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uinthfChMpK, {from: accounts[0]});

		await expect(SLTDETHlpReward7JTvYd.withdraw.call(uinthfChMpK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCqzV86 = await SLTDETHlpReward.new({from: accounts[2]});
		const uintsqbQS9 = BigInt("1934")
		const uintqcTvg4l = BigInt("1680")
		const uint256ULgwh5E = await SLTDETHlpRewardCqzV86.notifyRewardAmount.call(uintsqbQS9, {from: accounts[2]});
		const uint256qIbBEUM = await SLTDETHlpRewardCqzV86.setStartTime.call(uintqcTvg4l, {from: accounts[2]});
		const uint256qgui4ZM = await SLTDETHlpRewardCqzV86.totalSupply.call({from: accounts[3]});

		assert.equal(uint256qgui4ZM, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward7JTvYd = await SLTDETHlpReward.new({from: accounts[4]});
		const uintip0u0U = BigInt("896")
		const uintfrTU4n2 = BigInt("1556")
//		await SLTDETHlpReward7JTvYd.renounceOwnership.call({from: accounts[4]});
//		const uint256b1NVAWx = await SLTDETHlpReward7JTvYd.stake.call(uintip0u0U, {from: accounts[1]});
//		const uint256Oopijq = await SLTDETHlpReward7JTvYd.withdraw.call(uintfrTU4n2, {from: accounts[0]});

		await expect(SLTDETHlpReward7JTvYd.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})