const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeglXZMRn = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintHBfeBud = BigInt("1753")
		const uintYf5Mfv = BigInt("1111")
		const uintU0wTGD5 = BigInt("635")
		const uintjfvTr2U = BigInt("186")
		const uintUZGk2TF = BigInt("1123")
		const uintEOJpxuP = BigInt("1367")
		const boolE0DvcYy = true
		const uintGStJ9LW = BigInt("566")
//		await CourtFarming_HTStakeglXZMRn.changeStakeParameters.call(uintU0wTGD5, uintYf5Mfv, uintHBfeBud, {from: accounts[2]});
//		const uint256WeRsa6j = await CourtFarming_HTStakeglXZMRn.lastUpdateBlock.call({from: accounts[1]});
//		const uint256Vhq9QO = await CourtFarming_HTStakeglXZMRn.blockNumber.call({from: accounts[3]});
//		await CourtFarming_HTStakeglXZMRn.changeStakeParameters.call(uintEOJpxuP, uintUZGk2TF, uintjfvTr2U, {from: accounts[2]});
//		const uint256IcsfnOk = await CourtFarming_HTStakeglXZMRn.unstake.call(uintGStJ9LW, boolE0DvcYy, {from: accounts[0]});

		await expect(CourtFarming_HTStakeglXZMRn.changeStakeParameters.call(uintU0wTGD5, uintYf5Mfv, uintHBfeBud, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeiTVLLJY = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressQOn3ORR = accounts[1]
		const addressmksQ1YC = accounts[4]
		const uint256ahWpS58 = await CourtFarming_HTStakeiTVLLJY.lastUpdateBlock.call({from: accounts[2]});
		const uint256iuAgZ0Y = await CourtFarming_HTStakeiTVLLJY.incvRewardInfo.call({from: accounts[4]});
		const uint256OoZeTLe = await CourtFarming_HTStakeiTVLLJY.rewards.call(addressQOn3ORR, {from: accounts[2]});
		const uint256uW3KYXJ = await CourtFarming_HTStakeiTVLLJY.getCurrentTime.call({from: accounts[5]});
		const uint256PO3an5w = await CourtFarming_HTStakeiTVLLJY.lastUpdateBlock.call({from: accounts[1]});
		const addressCYrSjrk = await CourtFarming_HTStakeiTVLLJY.getBeneficiaryInfo.call(addressmksQ1YC, {from: accounts[2]});

		assert.equal(uint256PO3an5w, BigInt("1608"))
		assert.equal(uint256ahWpS58, BigInt("1608"))
		assert.equal(uint256uW3KYXJ, BigInt("1630201033"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefORppSP = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolAehpukv = false
		const uinth46iyuE = BigInt("1640")
		const uintlT1jCSX = BigInt("1760")
		const uintronFfnk = BigInt("1432")
//		const uint256iOHxAWZ = await CourtFarming_HTStakefORppSP.unstake.call(uinth46iyuE, boolAehpukv, {from: accounts[4]});
//		const uint256JeBrtqO = await CourtFarming_HTStakefORppSP.stake.call(uintlT1jCSX, {from: accounts[2]});
//		const uint256fVwEuNz = await CourtFarming_HTStakefORppSP.stake.call(uintronFfnk, {from: accounts[3]});

		await expect(CourtFarming_HTStakefORppSP.unstake.call(uinth46iyuE, boolAehpukv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebQVc5ti = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressiBzE5r4 = accounts[3]
		const uint256etxJK6u = await CourtFarming_HTStakebQVc5ti.totalStaked.call({from: accounts[2]});
		const addressHWKy01 = await CourtFarming_HTStakebQVc5ti.updateReward.call(addressiBzE5r4, {from: accounts[2]});
		const uint256PF986WI = await CourtFarming_HTStakebQVc5ti.lastUpdateBlock.call({from: accounts[3]});

		assert.equal(uint256PF986WI, BigInt("1608"))
		assert.equal(uint256etxJK6u, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeAnsCckE = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressGazjQOn = "0x0000000000000000000000000000000000000001"
		const addressOOhGQii = accounts[5]
		const uintSc0hxet = BigInt("62")
		const uintrXtDMHL = BigInt("1213")
		const uintUX9V881 = BigInt("108")
		const uint25625B9ah = await CourtFarming_HTStakeAnsCckE.balanceOf.call(addressGazjQOn, {from: accounts[3]});
		const uint256fq2zze = await CourtFarming_HTStakeAnsCckE.lastUpdateBlock.call({from: accounts[4]});
		const uint256nKvPedR = await CourtFarming_HTStakeAnsCckE.getCurrentTime.call({from: accounts[4]});
		const addressZJDZ4mt = await CourtFarming_HTStakeAnsCckE.getBeneficiaryInfo.call(addressOOhGQii, {from: accounts[3]});
//		const uint256wYZ8Pye = await CourtFarming_HTStakeAnsCckE._stakeParametrsCalculation.call(uintUX9V881, uintrXtDMHL, uintSc0hxet, {from: accounts[2]});

		assert.equal(uint25625B9ah, BigInt("0"))
		assert.equal(uint256fq2zze, BigInt("1608"))
		assert.equal(uint256nKvPedR, BigInt("1630201025"))
		await expect(CourtFarming_HTStakeAnsCckE._stakeParametrsCalculation.call(uintUX9V881, uintrXtDMHL, uintSc0hxet, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVHuW1R5 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintpxHeR83 = BigInt("169")
		const addressEiqlkGy = "0x0000000000000000000000000000000000000001"
		const addressG5nHMkb = accounts[3]
		const uintWnGRgJO = BigInt("187")
		const uint256nwLTkdp = await CourtFarming_HTStakeVHuW1R5.expectedRewardsToday.call(uintpxHeR83, {from: accounts[2]});
		const addressFl7nsIK = await CourtFarming_HTStakeVHuW1R5.updateReward.call(addressEiqlkGy, {from: accounts[5]});
		const uint256bjsUdjL = await CourtFarming_HTStakeVHuW1R5.totalStaked.call({from: accounts[1]});
		const addressrvCACBp = await CourtFarming_HTStakeVHuW1R5.getBeneficiaryInfo.call(addressG5nHMkb, {from: accounts[4]});
		const uint256JcPhpoc = await CourtFarming_HTStakeVHuW1R5.expectedRewardsToday.call(uintWnGRgJO, {from: accounts[5]});

		assert.equal(uint256bjsUdjL, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakel6nF9P = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintWS9uBfK = BigInt("937")
		const addressgT4nOxc = accounts[4]
		const uintUlQjJhF = BigInt("557")
		const boolOMZR3KX = await CourtFarming_HTStakel6nF9P.stakeIncvRewards.call(uintWS9uBfK, {from: accounts[1]});
		const uint256tu2RDc = await CourtFarming_HTStakel6nF9P.balanceOf.call(addressgT4nOxc, {from: accounts[2]});
		const uint256weMnt9e = await CourtFarming_HTStakel6nF9P.getCurrentTime.call({from: accounts[3]});
		const boolNpj5iAS = await CourtFarming_HTStakel6nF9P.stakeIncvRewards.call(uintUlQjJhF, {from: accounts[1]});

		assert.equal(boolNpj5iAS, false)
		assert.equal(boolOMZR3KX, false)
		assert.equal(uint256tu2RDc, BigInt("0"))
		assert.equal(uint256weMnt9e, BigInt("1630201028"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGueyqy3 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintaHI7fcB = BigInt("1536")
		const addressOgdrNpN = accounts[1]
		const uint256Gnuowj = await CourtFarming_HTStakeGueyqy3.blockNumber.call({from: accounts[2]});
		const boolIwQcVw5 = await CourtFarming_HTStakeGueyqy3.stakeIncvRewards.call(uintaHI7fcB, {from: accounts[1]});
		const uint256HHh9yT = await CourtFarming_HTStakeGueyqy3.incvRewardInfo.call({from: accounts[4]});
//		const addressx5O4Csx = await CourtFarming_HTStakeGueyqy3.setCourtStake.call(addressOgdrNpN, {from: accounts[1]});

		assert.equal(boolIwQcVw5, false)
		assert.equal(uint256Gnuowj, BigInt("1608"))
		await expect(CourtFarming_HTStakeGueyqy3.setCourtStake.call(addressOgdrNpN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefORppSP = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintcue4qZb = BigInt("1432")
//		const uint256fVwEuNz = await CourtFarming_HTStakefORppSP.stake.call(uintcue4qZb, {from: accounts[3]});

		await expect(CourtFarming_HTStakefORppSP.stake.call(uintcue4qZb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeon91i5d = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintjK0I5pl = BigInt("916")
		const uint256gW2XtTt = await CourtFarming_HTStakeon91i5d.incvRewardClaim.call({from: accounts[5]});
		const uint256uMJT15D = await CourtFarming_HTStakeon91i5d.blockNumber.call({from: accounts[4]});
		const boolcqRJCY = await CourtFarming_HTStakeon91i5d.stakeIncvRewards.call(uintjK0I5pl, {from: accounts[1]});

		assert.equal(boolcqRJCY, false)
		assert.equal(uint256gW2XtTt, BigInt("0"))
		assert.equal(uint256uMJT15D, BigInt("1608"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeiTVLLJY = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressHshTKEr = accounts[3]
		const addressAACBsck = accounts[1]
		const addressvw0eCRk = accounts[4]
		const uint256ahWpS58 = await CourtFarming_HTStakeiTVLLJY.lastUpdateBlock.call({from: accounts[2]});
//		const addressCJBJlq = await CourtFarming_HTStakeiTVLLJY.setCourtStake.call(addressHshTKEr, {from: accounts[2]});
//		const uint256iuAgZ0Y = await CourtFarming_HTStakeiTVLLJY.incvRewardInfo.call({from: accounts[4]});
//		const uint256OoZeTLe = await CourtFarming_HTStakeiTVLLJY.rewards.call(addressAACBsck, {from: accounts[2]});
//		const uint256uW3KYXJ = await CourtFarming_HTStakeiTVLLJY.getCurrentTime.call({from: accounts[5]});
//		const uint256PO3an5w = await CourtFarming_HTStakeiTVLLJY.lastUpdateBlock.call({from: accounts[1]});
//		const addressCYrSjrk = await CourtFarming_HTStakeiTVLLJY.getBeneficiaryInfo.call(addressvw0eCRk, {from: accounts[2]});

		assert.equal(uint256ahWpS58, BigInt("1608"))
		await expect(CourtFarming_HTStakeiTVLLJY.setCourtStake.call(addressHshTKEr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebeRoj5c = await CourtFarming_HTStake.new({from: accounts[2]});
		const uinta5Csj0L = BigInt("0")
		const uintsgMKuIR = BigInt("1761")
		const boolcIJk8Yn = await CourtFarming_HTStakebeRoj5c.stakeIncvRewards.call(uinta5Csj0L, {from: accounts[1]});
		const uint256z2oahke = await CourtFarming_HTStakebeRoj5c.blockNumber.call({from: accounts[1]});
		const boolOFYrGOd = await CourtFarming_HTStakebeRoj5c.stakeIncvRewards.call(uintsgMKuIR, {from: accounts[4]});

		assert.equal(boolOFYrGOd, false)
		assert.equal(boolcIJk8Yn, false)
		assert.equal(uint256z2oahke, BigInt("1608"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefORppSP = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolAehpukv = false
		const uintQOC3LXf = BigInt("0")
		const addressENv2Hhl = "0x0000000000000000000000000000000000000001"
		const addressl8Jfsux = accounts[1]
		const uintqiyp6j0 = BigInt("1383")
		const addressmrP0zQk = accounts[4]
		const uint256iOHxAWZ = await CourtFarming_HTStakefORppSP.unstake.call(uintQOC3LXf, boolAehpukv, {from: accounts[4]});
//		const addressOX4DuA7 = await CourtFarming_HTStakefORppSP.setCourtStake.call(addressENv2Hhl, {from: accounts[1]});
//		const addressUcBofHb = await CourtFarming_HTStakefORppSP.setCourtStake.call(addressl8Jfsux, {from: accounts[0]});
//		const uint256uddsEIM = await CourtFarming_HTStakefORppSP.stake.call(uintqiyp6j0, {from: accounts[4]});
//		const uint256qIIYVfX = await CourtFarming_HTStakefORppSP.rewards.call(addressmrP0zQk, {from: accounts[4]});

		await expect(CourtFarming_HTStakefORppSP.setCourtStake.call(addressENv2Hhl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefORppSP = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintxQ6PXC6 = BigInt("0")
		const uintudE9rMh = BigInt("460")
		const uintf9iPGHa = BigInt("1455")
		const uintd1KA1n0 = BigInt("788")
		const uintB1rnvG5 = BigInt("1171")
		const uint256fVwEuNz = await CourtFarming_HTStakefORppSP.stake.call(uintxQ6PXC6, {from: accounts[3]});
//		await CourtFarming_HTStakefORppSP.changeStakeParameters.call(uintd1KA1n0, uintf9iPGHa, uintudE9rMh, {from: accounts[1]});
//		const boolbxiYb8w = await CourtFarming_HTStakefORppSP.stakeIncvRewards.call(uintB1rnvG5, {from: accounts[2]});
//		const uint256zKEub0P = await CourtFarming_HTStakefORppSP.lastUpdateBlock.call({from: accounts[4]});

		await expect(CourtFarming_HTStakefORppSP.changeStakeParameters.call(uintd1KA1n0, uintf9iPGHa, uintudE9rMh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefcnym4R = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintErVmn9W = BigInt("963")
		const uint256xsGoIu9 = await CourtFarming_HTStakefcnym4R.getCurrentTime.call({from: accounts[1]});
		const uint256aWtrwEB = await CourtFarming_HTStakefcnym4R.expectedRewardsToday.call(uintErVmn9W, {from: accounts[0]});
	});
})