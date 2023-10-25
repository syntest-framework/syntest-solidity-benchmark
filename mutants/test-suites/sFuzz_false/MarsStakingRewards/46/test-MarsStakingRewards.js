const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressTvtE4zj = accounts[1]
		const addressACHJt3r = accounts[1]
		const addressV6u6mCW = accounts[2]
		const MarsStakingRewards09I9lA = await MarsStakingRewards.new(addressTvtE4zj, addressACHJt3r, addressV6u6mCW, {from: accounts[2]});
		const addresssO905bP = accounts[4]
		const addresswtuAmI3 = accounts[2]
		const addressXpmJiwO = accounts[2]
		const uint256Uw1TYX = await MarsStakingRewards09I9lA.earned.call(addresssO905bP, {from: accounts[2]});
		const uint256BIWuCt = await MarsStakingRewards09I9lA.earned.call(addresswtuAmI3, {from: accounts[5]});
//		const addressOJh6W27 = await MarsStakingRewards09I9lA.setRewardsDistribution.call(addressXpmJiwO, {from: accounts[3]});
//		const uint256xZ8RxQq = await MarsStakingRewards09I9lA.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256BIWuCt, BigInt("0"))
		assert.equal(uint256Uw1TYX, BigInt("0"))
		await expect(MarsStakingRewards09I9lA.setRewardsDistribution.call(addressXpmJiwO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressclE4kec = accounts[4]
		const addressZ3F6CXp = accounts[0]
		const addresszqN9S36 = accounts[3]
		const MarsStakingRewardsEjZbbgB = await MarsStakingRewards.new(addressclE4kec, addressZ3F6CXp, addresszqN9S36, {from: accounts[4]});
		const addresslVdp81p = accounts[2]
		const uintoznN0Z = BigInt("1470")
		const addressRbdpDpO = accounts[5]
//		await MarsStakingRewardsEjZbbgB.onlyRewardsDistribution.call({from: accounts[1]});
//		const uint256yI9tywM = await MarsStakingRewardsEjZbbgB.earned.call(addresslVdp81p, {from: accounts[3]});
//		await MarsStakingRewardsEjZbbgB.nonReentrant.call({from: accounts[0]});
//		await MarsStakingRewardsEjZbbgB.getReward.call({from: accounts[0]});
//		await MarsStakingRewardsEjZbbgB.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressIaIQnM2 = await MarsStakingRewardsEjZbbgB.inCaseTokensGetStuck.call(addressRbdpDpO, uintoznN0Z, {from: accounts[2]});

		await expect(MarsStakingRewardsEjZbbgB.onlyRewardsDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscQKl1za = accounts[3]
		const addressowbYItk = accounts[0]
		const addresszUAvWGC = accounts[0]
		const MarsStakingRewardsQStDCVk = await MarsStakingRewards.new(addresscQKl1za, addressowbYItk, addresszUAvWGC, {from: accounts[4]});
		const uintyLyJBkj = BigInt("1560")
		const uintWPfR1hi = BigInt("1405")
		const addressraFYRBl = accounts[0]
		const bytej1hxUrY = "0x000c1210170b1a0b141d07171e1c13191d070a1e160a0b0a1e15120c0e1a1d01"
		const bytebikzf6V = "0x1d161f05051201060f1d0720090101031611021f0f1f030f180d0f2008061c0f"
		const uintaJVmwhC = BigInt("154")
		const uintYWvJ3JA = BigInt("1129")
		const uintZ4FkXaH = BigInt("1637")
//		const uint256gzqO2Ha = await MarsStakingRewardsQStDCVk.stake.call(uintyLyJBkj, {from: accounts[2]});
//		const addressB1cr11B = await MarsStakingRewardsQStDCVk.inCaseTokensGetStuck.call(addressraFYRBl, uintWPfR1hi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xw7mvs = await MarsStakingRewardsQStDCVk.stakeWithPermit.call(uintZ4FkXaH, uintYWvJ3JA, uintaJVmwhC, bytebikzf6V, bytej1hxUrY, {from: accounts[4]});
//		const uint256umzCrDJ = await MarsStakingRewardsQStDCVk.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(MarsStakingRewardsQStDCVk.stake.call(uintyLyJBkj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxAcCpNy = accounts[0]
		const addresslnARh7g = accounts[3]
		const addressVgciBQT = accounts[3]
		const MarsStakingRewardspT6RdKc = await MarsStakingRewards.new(addressxAcCpNy, addresslnARh7g, addressVgciBQT, {from: accounts[3]});
		const uintzn66h6s = BigInt("1862")
		const uintYlzORDP = BigInt("1512")
		const addressj4Y0N6y = accounts[2]
		const uint256SpdRy7N = await MarsStakingRewardspT6RdKc.totalSupply.call({from: accounts[2]});
//		await MarsStakingRewardspT6RdKc.nonReentrant.call({from: accounts[1]});
//		const uint256pWzJyWz = await MarsStakingRewardspT6RdKc.notifyRewardAmount.call(uintYlzORDP, uintzn66h6s, {from: accounts[0]});
//		const uint256NfMYcSu = await MarsStakingRewardspT6RdKc.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256YIqYE2 = await MarsStakingRewardspT6RdKc.getRewardForDuration.call({from: accounts[0]});
//		const addressZBR0VnE = await MarsStakingRewardspT6RdKc.transferOwnership.call(addressj4Y0N6y, {from: accounts[4]});

		assert.equal(uint256SpdRy7N, BigInt("0"))
		await expect(MarsStakingRewardspT6RdKc.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjKMlIdw = accounts[1]
		const addressaNOXI0Q = accounts[1]
		const addressGdNRRiG = accounts[2]
		const MarsStakingRewards09I9lA = await MarsStakingRewards.new(addressjKMlIdw, addressaNOXI0Q, addressGdNRRiG, {from: accounts[2]});
		const addresspllhkDu = accounts[4]
		const addresskm3INuS = accounts[2]
		const addressw9HR5Ij = accounts[5]
		const addressRa0IVQn = accounts[3]
		const uint256h8T1y9V = await MarsStakingRewards09I9lA.balanceOf.call(addresspllhkDu, {from: accounts[0]});
//		await MarsStakingRewards09I9lA.onlyOwner.call({from: accounts[4]});
//		const uint256BIWuCt = await MarsStakingRewards09I9lA.earned.call(addresskm3INuS, {from: accounts[5]});
//		const addressrPwnW7o = await MarsStakingRewards09I9lA.setRewardsDistribution.call(addressw9HR5Ij, {from: accounts[3]});
//		const addressOJh6W27 = await MarsStakingRewards09I9lA.setRewardsDistribution.call(addressRa0IVQn, {from: accounts[3]});
//		const uint256xZ8RxQq = await MarsStakingRewards09I9lA.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256h8T1y9V, BigInt("0"))
		await expect(MarsStakingRewards09I9lA.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRkpDmv = accounts[1]
		const addressusSmZ4d = accounts[2]
		const addressP62X9WV = accounts[0]
		const MarsStakingRewardsZx5gFt = await MarsStakingRewards.new(addressRkpDmv, addressusSmZ4d, addressP62X9WV, {from: accounts[0]});
//		await MarsStakingRewardsZx5gFt.exit.call({from: accounts[4]});
//		await MarsStakingRewardsZx5gFt.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsZx5gFt.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressk3ndQ2 = accounts[0]
		const addresscFjBq8k = accounts[4]
		const addressn1LR0Q = accounts[2]
		const MarsStakingRewardsNbuU3yW = await MarsStakingRewards.new(addressk3ndQ2, addresscFjBq8k, addressn1LR0Q, {from: accounts[0]});
		const uintPadPziZ = BigInt("1293")
		const addresswQHEr4w = accounts[2]
		const uint256Zz6z0rH = await MarsStakingRewardsNbuU3yW.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256UkGGAfX = await MarsStakingRewardsNbuU3yW.totalSupply.call({from: accounts[5]});
//		await MarsStakingRewardsNbuU3yW.exit.call({from: accounts[5]});
//		await MarsStakingRewardsNbuU3yW.exit.call({from: accounts[4]});
//		const addressWxBl8QX = await MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(addresswQHEr4w, uintPadPziZ, {from: accounts[4]});

		assert.equal(uint256UkGGAfX, BigInt("0"))
		assert.equal(uint256Zz6z0rH, BigInt("0"))
		await expect(MarsStakingRewardsNbuU3yW.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoo3DR1x = accounts[0]
		const addresspYWndy6 = accounts[4]
		const addressDJIoMV = accounts[2]
		const MarsStakingRewardsNbuU3yW = await MarsStakingRewards.new(addressoo3DR1x, addresspYWndy6, addressDJIoMV, {from: accounts[0]});
		const uintppti8kg = BigInt("1327")
		const addressLTc8DGt = accounts[1]
		const uint256rMqLLrK = await MarsStakingRewardsNbuU3yW.getRewardForDuration.call({from: accounts[1]});
		const addressnKvZXP6 = await MarsStakingRewardsNbuU3yW.owner.call({from: accounts[0]});
//		const addressWxBl8QX = await MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(addressLTc8DGt, uintppti8kg, {from: accounts[4]});

		assert.equal(addressnKvZXP6, 0x9DdEFf1612aE2BF599E32e34C311cd0010AB6449)
		assert.equal(uint256rMqLLrK, BigInt("0"))
		await expect(MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(addressLTc8DGt, uintppti8kg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstqpweKE = accounts[4]
		const addressEvxJPDh = accounts[3]
		const addresstISsr5 = accounts[0]
		const MarsStakingRewardsVQo9rsX = await MarsStakingRewards.new(addresstqpweKE, addressEvxJPDh, addresstISsr5, {from: accounts[3]});
		const addressixG51f = accounts[3]
		const addressZOqXij = accounts[1]
		const uint256Bc1BHUI = await MarsStakingRewardsVQo9rsX.totalSupply.call({from: accounts[3]});
		const addressSxl5Rfm = await MarsStakingRewardsVQo9rsX.setRewardsDistribution.call(addressixG51f, {from: accounts[3]});
		const uint256n9FBWPW = await MarsStakingRewardsVQo9rsX.rewardPerToken.call({from: accounts[3]});
		const uint256JajWjOv = await MarsStakingRewardsVQo9rsX.earned.call(addressZOqXij, {from: accounts[0]});

		assert.equal(uint256Bc1BHUI, BigInt("0"))
		assert.equal(uint256JajWjOv, BigInt("0"))
		assert.equal(uint256n9FBWPW, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressYhwLvNo = accounts[1]
		const addressvN7GClL = accounts[1]
		const addressctadxk = accounts[2]
		const MarsStakingRewards09I9lA = await MarsStakingRewards.new(addressYhwLvNo, addressvN7GClL, addressctadxk, {from: accounts[2]});
		const uintP4vz56 = BigInt("111")
		const uintOrElxs = BigInt("2006")
		const addresszoM97Xh = accounts[2]
//		const uint256dPFCXsY = await MarsStakingRewards09I9lA.notifyRewardAmount.call(uintOrElxs, uintP4vz56, {from: accounts[1]});
//		const uint256BIWuCt = await MarsStakingRewards09I9lA.earned.call(addresszoM97Xh, {from: accounts[5]});
//		const uint256xZ8RxQq = await MarsStakingRewards09I9lA.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(MarsStakingRewards09I9lA.notifyRewardAmount.call(uintOrElxs, uintP4vz56, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRI1X6Yv = accounts[0]
		const addressgaXbixx = accounts[4]
		const addressNJ65zhf = accounts[2]
		const MarsStakingRewardsNbuU3yW = await MarsStakingRewards.new(addressRI1X6Yv, addressgaXbixx, addressNJ65zhf, {from: accounts[0]});
		const uintUblK2GY = BigInt("1293")
		const addresse5qq1Fk = accounts[1]
//		await MarsStakingRewardsNbuU3yW.renounceOwnership.call({from: accounts[0]});
//		const addressWxBl8QX = await MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(addresse5qq1Fk, uintUblK2GY, {from: accounts[4]});

		await expect(MarsStakingRewardsNbuU3yW.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEeDIjR2 = accounts[5]
		const addressIPLRDFu = accounts[3]
		const addresscrJLIVq = accounts[3]
		const MarsStakingRewardstdHjf8r = await MarsStakingRewards.new(addressEeDIjR2, addressIPLRDFu, addresscrJLIVq, {from: "0x0000000000000000000000000000000000000001"});
		const addressqvBCnQd = accounts[2]
		const byteKxX1sGc = "0x1b10071705061719011719091f15020c0b160e011c130218110a02020c091e0d"
		const bytet3yiasI = "0x1703131c0e031008081e040c071408140f1b0508061418140a1f151d1416190d"
		const uintEWShtrF = BigInt("7")
		const uintVKc1Dqc = BigInt("1926")
		const uintGJyuh2 = BigInt("357")
		const uint256E2Kka2d = await MarsStakingRewardstdHjf8r.earned.call(addressqvBCnQd, {from: accounts[2]});
		const uint256SzZX0u5 = await MarsStakingRewardstdHjf8r.getRewardForDuration.call({from: accounts[2]});
		await MarsStakingRewardstdHjf8r.exit.call({from: accounts[3]});
		const uint256MzZ1WpS = await MarsStakingRewardstdHjf8r.stakeWithPermit.call(uintGJyuh2, uintVKc1Dqc, uintEWShtrF, bytet3yiasI, byteKxX1sGc, {from: accounts[3]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressE79paTv = accounts[1]
		const addressoio5M3J = accounts[1]
		const addresscRv1V5c = accounts[2]
		const MarsStakingRewards09I9lA = await MarsStakingRewards.new(addressE79paTv, addressoio5M3J, addresscRv1V5c, {from: accounts[2]});
		const addressOnpfPkf = accounts[3]
		const uintfPvMdJ = BigInt("1892")
		const uintFrKZ01 = BigInt("19")
		const addressceRdHl = accounts[3]
		const uint256BIWuCt = await MarsStakingRewards09I9lA.earned.call(addressOnpfPkf, {from: accounts[5]});
//		const uint256nwHeAH4 = await MarsStakingRewards09I9lA.notifyRewardAmount.call(uintFrKZ01, uintfPvMdJ, {from: accounts[2]});
//		const addressOJh6W27 = await MarsStakingRewards09I9lA.setRewardsDistribution.call(addressceRdHl, {from: accounts[3]});

		assert.equal(uint256BIWuCt, BigInt("0"))
		await expect(MarsStakingRewards09I9lA.notifyRewardAmount.call(uintFrKZ01, uintfPvMdJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVCxdOx = accounts[1]
		const addressRik5nhe = accounts[1]
		const addressg7Quhhj = accounts[2]
		const MarsStakingRewards09I9lA = await MarsStakingRewards.new(addressVCxdOx, addressRik5nhe, addressg7Quhhj, {from: accounts[2]});
		const addressGeNpREx = accounts[2]
		const addresscNPUCWe = accounts[5]
		const uint256BIWuCt = await MarsStakingRewards09I9lA.earned.call(addressGeNpREx, {from: accounts[5]});
		const addresszSXNrq = await MarsStakingRewards09I9lA.transferOwnership.call(addresscNPUCWe, {from: accounts[2]});

		assert.equal(uint256BIWuCt, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressfrI86Sr = accounts[1]
		const addressb5mvno = accounts[1]
		const addresshNHZD0 = accounts[2]
		const MarsStakingRewards09I9lA = await MarsStakingRewards.new(addressfrI86Sr, addressb5mvno, addresshNHZD0, {from: accounts[2]});
		const uintsPzQCoj = BigInt("914")
		const addresswW3w5Ya = accounts[4]
		const addressDTHrM6r = accounts[3]
//		const addressH2WmNXb = await MarsStakingRewards09I9lA.inCaseTokensGetStuck.call(addresswW3w5Ya, uintsPzQCoj, {from: accounts[2]});
//		const addresshapD1V4 = await MarsStakingRewards09I9lA.owner.call({from: accounts[2]});
//		const uint256BIWuCt = await MarsStakingRewards09I9lA.earned.call(addressDTHrM6r, {from: accounts[5]});
//		await MarsStakingRewards09I9lA.renounceOwnership.call({from: accounts[1]});

		await expect(MarsStakingRewards09I9lA.inCaseTokensGetStuck.call(addresswW3w5Ya, uintsPzQCoj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressz65YiGI = accounts[0]
		const addressqdLOLiT = accounts[4]
		const addressrwz8pLY = accounts[2]
		const MarsStakingRewardsNbuU3yW = await MarsStakingRewards.new(addressz65YiGI, addressqdLOLiT, addressrwz8pLY, {from: accounts[0]});
		const uintCZX2vKG = BigInt("1874")
		const address23kg2b = accounts[2]
		const uintMaOLQP = BigInt("1293")
		const addressmKw1bj8 = accounts[1]
//		const addressJXtO8Th = await MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(address23kg2b, uintCZX2vKG, {from: accounts[0]});
//		const addressWxBl8QX = await MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(addressmKw1bj8, uintMaOLQP, {from: accounts[4]});

		await expect(MarsStakingRewardsNbuU3yW.inCaseTokensGetStuck.call(address23kg2b, uintCZX2vKG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})