const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakemXD5k3g = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressO5ulLEv = accounts[0]
		const addressgsBGSTy = accounts[0]
		const addressGOeBqU = accounts[1]
		const uint256WM59ei2 = await CourtFarming_HTStakemXD5k3g.blockNumber.call({from: accounts[1]});
		const uint256MytHDLS = await CourtFarming_HTStakemXD5k3g.getCurrentTime.call({from: accounts[2]});
		const uint256TSy2gP9 = await CourtFarming_HTStakemXD5k3g.incvRewardClaim.call({from: accounts[2]});
		const uint256QvixV9 = await CourtFarming_HTStakemXD5k3g.rewards.call(addressO5ulLEv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yZuzEmB = await CourtFarming_HTStakemXD5k3g.balanceOf.call(addressgsBGSTy, {from: accounts[2]});
		const addressytAnTC9 = await CourtFarming_HTStakemXD5k3g.getBeneficiaryInfo.call(addressGOeBqU, {from: accounts[3]});

		assert.equal(uint256MytHDLS, BigInt("1630201522"))
		assert.equal(uint256TSy2gP9, BigInt("0"))
		assert.equal(uint256WM59ei2, BigInt("1589"))
		assert.equal(uint256yZuzEmB, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebnYrQNd = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressjQNVpCp = accounts[2]
		const uint256X7G0Y2s = await CourtFarming_HTStakebnYrQNd.getCurrentTime.call({from: accounts[2]});
//		const addresshUv4sX4 = await CourtFarming_HTStakebnYrQNd.setCourtStake.call(addressjQNVpCp, {from: accounts[4]});
//		const uint256OBA3sLf = await CourtFarming_HTStakebnYrQNd.blockNumber.call({from: accounts[0]});
//		const uint256EJOrX1 = await CourtFarming_HTStakebnYrQNd.totalStaked.call({from: accounts[1]});

		assert.equal(uint256X7G0Y2s, BigInt("1630201526"))
		await expect(CourtFarming_HTStakebnYrQNd.setCourtStake.call(addressjQNVpCp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZg75bGI = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressdlkvaGK = accounts[3]
		const addressUgkrRSw = accounts[3]
		const uintdhqCh3l = BigInt("278")
		const uint256Mfk4cK = await CourtFarming_HTStakeZg75bGI.lastUpdateBlock.call({from: accounts[5]});
		const addressfwhd0R = await CourtFarming_HTStakeZg75bGI.updateReward.call(addressdlkvaGK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sI7kyo3 = await CourtFarming_HTStakeZg75bGI.balanceOf.call(addressUgkrRSw, {from: accounts[1]});
		const uint256tNRNDBO = await CourtFarming_HTStakeZg75bGI.expectedRewardsToday.call(uintdhqCh3l, {from: accounts[4]});

		assert.equal(uint256Mfk4cK, BigInt("1589"))
		assert.equal(uint256sI7kyo3, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeIXCbj0N = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintMBHWzr0 = BigInt("1875")
		const boolWhPVJa = await CourtFarming_HTStakeIXCbj0N.stakeIncvRewards.call(uintMBHWzr0, {from: accounts[3]});
		const uint256QRlN1D3 = await CourtFarming_HTStakeIXCbj0N.totalStaked.call({from: accounts[1]});
		const uint256rQe3Kw8 = await CourtFarming_HTStakeIXCbj0N.lastUpdateBlock.call({from: accounts[2]});

		assert.equal(boolWhPVJa, false)
		assert.equal(uint256QRlN1D3, BigInt("0"))
		assert.equal(uint256rQe3Kw8, BigInt("1589"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeA5XHh9B = await CourtFarming_HTStake.new({from: accounts[1]});
		const address0Bs9Kd = accounts[1]
		const boolOOdgfn = false
		const uintcZpEuow = BigInt("1703")
		const uinttRAeKXg = BigInt("1162")
		const uintI5L1ADA = BigInt("642")
		const uintqSlflyj = BigInt("1039")
		const boolph2qQNY = false
		const uintKBnScnX = BigInt("92")
		const booloMxBVgq = true
		const uintycjIgV6 = BigInt("1308")
		const uint256UkyIu7 = await CourtFarming_HTStakeA5XHh9B.balanceOf.call(address0Bs9Kd, {from: accounts[0]});
//		const uint256Pm4DoTh = await CourtFarming_HTStakeA5XHh9B.unstake.call(uintcZpEuow, boolOOdgfn, {from: accounts[1]});
//		const uint256utFrXM = await CourtFarming_HTStakeA5XHh9B._stakeParametrsCalculation.call(uintqSlflyj, uintI5L1ADA, uinttRAeKXg, {from: accounts[1]});
//		const uint256kil3xBT = await CourtFarming_HTStakeA5XHh9B.unstake.call(uintKBnScnX, boolph2qQNY, {from: accounts[1]});
//		const uint256eFRQy8Q = await CourtFarming_HTStakeA5XHh9B.unstake.call(uintycjIgV6, booloMxBVgq, {from: accounts[5]});

		assert.equal(uint256UkyIu7, BigInt("0"))
		await expect(CourtFarming_HTStakeA5XHh9B.unstake.call(uintcZpEuow, boolOOdgfn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeGRiBKh = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintQJBrHgG = BigInt("641")
		const uinto4tef0Z = BigInt("1587")
		const uintG0IZwCL = BigInt("902")
		const addresszHo1NFF = "0x0000000000000000000000000000000000000001"
		const addressFZ1e4bX = accounts[3]
		const uint256UT3xzHi = await CourtFarming_HTStakeeGRiBKh.getCurrentTime.call({from: accounts[2]});
//		await CourtFarming_HTStakeeGRiBKh.changeStakeParameters.call(uintG0IZwCL, uinto4tef0Z, uintQJBrHgG, {from: accounts[0]});
//		const uint256OTIPZ3D = await CourtFarming_HTStakeeGRiBKh.rewards.call(addresszHo1NFF, {from: accounts[2]});
//		const uint256xjQmWue = await CourtFarming_HTStakeeGRiBKh.rewards.call(addressFZ1e4bX, {from: accounts[4]});

		assert.equal(uint256UT3xzHi, BigInt("1630201518"))
		await expect(CourtFarming_HTStakeeGRiBKh.changeStakeParameters.call(uintG0IZwCL, uinto4tef0Z, uintQJBrHgG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGJfZEM = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintPYCkCcf = BigInt("198")
		const boolLusAclH = true
		const uintF5IM1CH = BigInt("1890")
		const addressiOjq0Bc = accounts[0]
		const uint256Cp5kdyq = await CourtFarming_HTStakeGJfZEM.incvRewardInfo.call({from: accounts[2]});
//		const uint256xDU0Jjt = await CourtFarming_HTStakeGJfZEM.stake.call(uintPYCkCcf, {from: accounts[5]});
//		const uint256KsLCOPn = await CourtFarming_HTStakeGJfZEM.unstake.call(uintF5IM1CH, boolLusAclH, {from: accounts[4]});
//		const addressgpu5tUB = await CourtFarming_HTStakeGJfZEM.updateReward.call(addressiOjq0Bc, {from: accounts[4]});
//		const uint256rrfyhWv = await CourtFarming_HTStakeGJfZEM.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeGJfZEM.stake.call(uintPYCkCcf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBc7yfQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintMlPWYi = BigInt("1419")
		const uintV2DRUdJ = BigInt("1607")
		const uintPv3D5d = BigInt("1588")
		const uint256X6D2l3M = await CourtFarming_HTStakeBc7yfQ.blockNumber.call({from: accounts[5]});
		const uint256X6mOPGw = await CourtFarming_HTStakeBc7yfQ.incvRewardInfo.call({from: accounts[3]});
//		const uint256r0LbiaB = await CourtFarming_HTStakeBc7yfQ._stakeParametrsCalculation.call(uintPv3D5d, uintV2DRUdJ, uintMlPWYi, {from: accounts[4]});
//		const uint256WWAggRY = await CourtFarming_HTStakeBc7yfQ.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256X6D2l3M, BigInt("1589"))
		await expect(CourtFarming_HTStakeBc7yfQ._stakeParametrsCalculation.call(uintPv3D5d, uintV2DRUdJ, uintMlPWYi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGDTC7U1 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressE4pWY3 = "0x0000000000000000000000000000000000000001"
		const addressHxFrjke = accounts[0]
		const uint256A6RXcO0 = await CourtFarming_HTStakeGDTC7U1.totalStaked.call({from: accounts[0]});
		const addresslcAlPM8 = await CourtFarming_HTStakeGDTC7U1.updateReward.call(addressE4pWY3, {from: accounts[3]});
		const uint256Cfpg8Qr = await CourtFarming_HTStakeGDTC7U1.blockNumber.call({from: accounts[4]});
		const uint256ivo6Lo5 = await CourtFarming_HTStakeGDTC7U1.incvRewardInfo.call({from: accounts[1]});
//		const addressWpFDcar = await CourtFarming_HTStakeGDTC7U1.setCourtStake.call(addressHxFrjke, {from: accounts[3]});

		assert.equal(uint256A6RXcO0, BigInt("0"))
		assert.equal(uint256Cfpg8Qr, BigInt("1589"))
		await expect(CourtFarming_HTStakeGDTC7U1.setCourtStake.call(addressHxFrjke, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake6tkSLH = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolqbjutsz = true
		const uintpJaYRnf = BigInt("1831")
		const booliyfzzLE = true
		const uintVzHuIDZ = BigInt("2018")
		const uint256kgYPubS = await CourtFarming_HTStake6tkSLH.unstake.call(uintpJaYRnf, boolqbjutsz, {from: accounts[4]});
		const uint256LXcLrHS = await CourtFarming_HTStake6tkSLH.lastUpdateBlock.call({from: accounts[0]});
		const uint256sNt3cEV = await CourtFarming_HTStake6tkSLH.unstake.call(uintVzHuIDZ, booliyfzzLE, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBc7yfQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressNBKVQ4v = accounts[0]
		const boolcGe7pMv = false
		const uintbTaJC9g = BigInt("0")
		const addressk2hg0vM = accounts[1]
		const addressbVN1gDJ = accounts[0]
		const uint256FAYcPg3 = await CourtFarming_HTStakeBc7yfQ.balanceOf.call(addressNBKVQ4v, {from: accounts[1]});
		const uint256vWMlcVF = await CourtFarming_HTStakeBc7yfQ.unstake.call(uintbTaJC9g, boolcGe7pMv, {from: accounts[4]});
//		const addresslJRmm5f = await CourtFarming_HTStakeBc7yfQ.setCourtStake.call(addressk2hg0vM, {from: accounts[1]});
//		const uint256dah1MSm = await CourtFarming_HTStakeBc7yfQ.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256dMkSJE = await CourtFarming_HTStakeBc7yfQ.balanceOf.call(addressbVN1gDJ, {from: accounts[4]});

		assert.equal(uint256FAYcPg3, BigInt("0"))
		await expect(CourtFarming_HTStakeBc7yfQ.setCourtStake.call(addressk2hg0vM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBc7yfQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintBhcm62P = BigInt("1309")
		const uintubXvQ7h = BigInt("0")
		const boolnInvyJM = await CourtFarming_HTStakeBc7yfQ.stakeIncvRewards.call(uintBhcm62P, {from: accounts[3]});
		const uint256vDn9oHI = await CourtFarming_HTStakeBc7yfQ.incvRewardClaim.call({from: accounts[4]});
		const uint256yxkmSIU = await CourtFarming_HTStakeBc7yfQ.blockNumber.call({from: accounts[2]});
		const boolEuHgBzi = await CourtFarming_HTStakeBc7yfQ.stakeIncvRewards.call(uintubXvQ7h, {from: accounts[3]});

		assert.equal(boolEuHgBzi, false)
		assert.equal(boolnInvyJM, false)
		assert.equal(uint256vDn9oHI, BigInt("0"))
		assert.equal(uint256yxkmSIU, BigInt("1589"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBc7yfQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintZdiDUpU = BigInt("0")
		const uint256dUQ9Pu = await CourtFarming_HTStakeBc7yfQ.stake.call(uintZdiDUpU, {from: "0x0000000000000000000000000000000000000001"});
	});
})