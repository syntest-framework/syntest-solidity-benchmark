const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehcJcoLj = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uinteuy3mc = BigInt("1310")
		const addressqdozeUk = accounts[5]
		const uintVdeLZPg = BigInt("188")
		const uintjdHnH6v = BigInt("775")
		const addressC8qaPBU = accounts[3]
		const uint256jCxcMEj = await CourtFarming_RoomLPStakehcJcoLj.expectedRewardsToday.call(uinteuy3mc, {from: accounts[3]});
		const uint256OWaggHI = await CourtFarming_RoomLPStakehcJcoLj.rewards.call(addressqdozeUk, {from: accounts[5]});
		const uint256Gkzl6Y7 = await CourtFarming_RoomLPStakehcJcoLj.expectedRewardsToday.call(uintVdeLZPg, {from: accounts[1]});
		const uint256TRqLOnE = await CourtFarming_RoomLPStakehcJcoLj.getCurrentTime.call({from: accounts[0]});
		const boollm95KYq = await CourtFarming_RoomLPStakehcJcoLj.stakeIncvRewards.call(uintjdHnH6v, {from: accounts[1]});
//		const addressPxos4fv = await CourtFarming_RoomLPStakehcJcoLj.setCourtStake.call(addressC8qaPBU, {from: accounts[3]});

		assert.equal(boollm95KYq, false)
		assert.equal(uint256TRqLOnE, BigInt("1630201468"))
		await expect(CourtFarming_RoomLPStakehcJcoLj.setCourtStake.call(addressC8qaPBU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerhfXj9C = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressuco2rMX = accounts[0]
		const addressdRuAYvm = accounts[0]
		const addresszygDNoQ = accounts[2]
		const addressdNvdoCA = await CourtFarming_RoomLPStakerhfXj9C.updateReward.call(addressuco2rMX, {from: accounts[1]});
		const uint256GIjd1fp = await CourtFarming_RoomLPStakerhfXj9C.getCurrentTime.call({from: accounts[0]});
//		const addressSYH5V7L = await CourtFarming_RoomLPStakerhfXj9C.setCourtStake.call(addressdRuAYvm, {from: accounts[4]});
//		const addresswVN1PR = await CourtFarming_RoomLPStakerhfXj9C.getBeneficiaryInfo.call(addresszygDNoQ, {from: accounts[1]});

		assert.equal(uint256GIjd1fp, BigInt("1630201463"))
		await expect(CourtFarming_RoomLPStakerhfXj9C.setCourtStake.call(addressdRuAYvm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemaTykYY = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressAN1KMnO = accounts[4]
		const addressG76cPJ3 = accounts[4]
		const uint2564Me0VF = await CourtFarming_RoomLPStakemaTykYY.balanceOf.call(addressAN1KMnO, {from: accounts[1]});
		const uint256QBnSfmD = await CourtFarming_RoomLPStakemaTykYY.balanceOf.call(addressG76cPJ3, {from: accounts[4]});
		const uint256G12RxXw = await CourtFarming_RoomLPStakemaTykYY.getCurrentTime.call({from: accounts[3]});
		const uint256KnYF6P = await CourtFarming_RoomLPStakemaTykYY.totalStaked.call({from: accounts[3]});

		assert.equal(uint2564Me0VF, BigInt("0"))
		assert.equal(uint256G12RxXw, BigInt("1630201459"))
		assert.equal(uint256KnYF6P, BigInt("0"))
		assert.equal(uint256QBnSfmD, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeo8ucqZh = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintfL7JM4 = BigInt("1283")
		const uintR3Dd90k = BigInt("959")
		const uintw8BvlCS = BigInt("448")
		const uintrTNy8ci = BigInt("29")
		const addressv8R12A = accounts[4]
		const uint256mSBZ0H = await CourtFarming_RoomLPStakeo8ucqZh.expectedRewardsToday.call(uintfL7JM4, {from: accounts[4]});
//		await CourtFarming_RoomLPStakeo8ucqZh.changeStakeParameters.call(uintrTNy8ci, uintw8BvlCS, uintR3Dd90k, {from: accounts[2]});
//		const addressIX1rPLD = await CourtFarming_RoomLPStakeo8ucqZh.setCourtStake.call(addressv8R12A, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeo8ucqZh.changeStakeParameters.call(uintrTNy8ci, uintw8BvlCS, uintR3Dd90k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiMhliVq = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintw9cSfod = BigInt("4")
		const uintecReCtR = BigInt("1873")
		const uintX4yX8aD = BigInt("1215")
		const uintr2khr8s = BigInt("44")
		const uintrUS4KqN = BigInt("1522")
		const addressa6Z8ve = accounts[2]
		const uint256PbDsWjV = await CourtFarming_RoomLPStakeiMhliVq.stake.call(uintw9cSfod, {from: accounts[4]});
		const uint256nq4aX3k = await CourtFarming_RoomLPStakeiMhliVq.expectedRewardsToday.call(uintecReCtR, {from: accounts[4]});
		await CourtFarming_RoomLPStakeiMhliVq.changeStakeParameters.call(uintrUS4KqN, uintr2khr8s, uintX4yX8aD, {from: accounts[4]});
		const addressCwXDNb5 = await CourtFarming_RoomLPStakeiMhliVq.updateReward.call(addressa6Z8ve, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZqJs6o = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintnHVz6V2 = BigInt("1878")
		const boolFJjmgIw = true
		const uintwvZvqcC = BigInt("350")
		const uint9hZQLY = BigInt("797")
		const uintttFuJAX = BigInt("192")
		const uintTi3RYSf = BigInt("1185")
//		const uint256NlknnVm = await CourtFarming_RoomLPStakeZqJs6o.stake.call(uintnHVz6V2, {from: accounts[4]});
//		const uint256sLepOb = await CourtFarming_RoomLPStakeZqJs6o.unstake.call(uintwvZvqcC, boolFJjmgIw, {from: accounts[2]});
//		const uint256guYEQ5Y = await CourtFarming_RoomLPStakeZqJs6o.blockNumber.call({from: accounts[2]});
//		await CourtFarming_RoomLPStakeZqJs6o.changeStakeParameters.call(uintTi3RYSf, uintttFuJAX, uint9hZQLY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeZqJs6o.stake.call(uintnHVz6V2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehcJcoLj = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintqYGLL91 = BigInt("1310")
		const addressKl7i4fa = accounts[5]
		const uint7eCNN5 = BigInt("188")
		const uintNj6VWAM = BigInt("812")
		const addressLWKuOEx = accounts[3]
		const uint256IdYDGg1 = await CourtFarming_RoomLPStakehcJcoLj.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jCxcMEj = await CourtFarming_RoomLPStakehcJcoLj.expectedRewardsToday.call(uintqYGLL91, {from: accounts[3]});
		const uint256gT1Nb12 = await CourtFarming_RoomLPStakehcJcoLj.getCurrentTime.call({from: accounts[0]});
		const uint256OWaggHI = await CourtFarming_RoomLPStakehcJcoLj.rewards.call(addressKl7i4fa, {from: accounts[5]});
		const uint256Gkzl6Y7 = await CourtFarming_RoomLPStakehcJcoLj.expectedRewardsToday.call(uint7eCNN5, {from: accounts[1]});
		const uint256TRqLOnE = await CourtFarming_RoomLPStakehcJcoLj.getCurrentTime.call({from: accounts[0]});
		const boollm95KYq = await CourtFarming_RoomLPStakehcJcoLj.stakeIncvRewards.call(uintNj6VWAM, {from: accounts[1]});
		const uint256CWuwhZh = await CourtFarming_RoomLPStakehcJcoLj.incvRewardClaim.call({from: accounts[2]});
//		const addressPxos4fv = await CourtFarming_RoomLPStakehcJcoLj.setCourtStake.call(addressLWKuOEx, {from: accounts[3]});

		assert.equal(boollm95KYq, false)
		assert.equal(uint256CWuwhZh, BigInt("0"))
		assert.equal(uint256IdYDGg1, BigInt("1630201467"))
		assert.equal(uint256TRqLOnE, BigInt("1630201467"))
		assert.equal(uint256gT1Nb12, BigInt("1630201467"))
		await expect(CourtFarming_RoomLPStakehcJcoLj.setCourtStake.call(addressLWKuOEx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerKAXMi0 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolzPQ0S25 = false
		const uint3r7jQ0 = BigInt("1509")
		const uintGLupoNg = BigInt("999")
		const addressQFGm2Lf = "0x0000000000000000000000000000000000000001"
		const addresswR9TZSp = accounts[4]
//		const uint256FcvCJ8x = await CourtFarming_RoomLPStakerKAXMi0.unstake.call(uint3r7jQ0, boolzPQ0S25, {from: accounts[3]});
//		const uint256ekwnSI = await CourtFarming_RoomLPStakerKAXMi0.expectedRewardsToday.call(uintGLupoNg, {from: accounts[2]});
//		const addressSER59g2 = await CourtFarming_RoomLPStakerKAXMi0.updateReward.call(addressQFGm2Lf, {from: accounts[3]});
//		const uint256rEJudGa = await CourtFarming_RoomLPStakerKAXMi0.balanceOf.call(addresswR9TZSp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakerKAXMi0.unstake.call(uint3r7jQ0, boolzPQ0S25, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePFtNicl = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressEX1wc6t = accounts[4]
		const addressMAMBJpD = accounts[5]
		const uint256PdCuPOc = await CourtFarming_RoomLPStakePFtNicl.lastUpdateBlock.call({from: accounts[1]});
		const uint256pWrwwa = await CourtFarming_RoomLPStakePFtNicl.rewards.call(addressEX1wc6t, {from: accounts[2]});
//		const addressMikeH4k = await CourtFarming_RoomLPStakePFtNicl.setCourtStake.call(addressMAMBJpD, {from: accounts[1]});

		assert.equal(uint256PdCuPOc, BigInt("1636"))
		await expect(CourtFarming_RoomLPStakePFtNicl.setCourtStake.call(addressMAMBJpD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePFtNicl = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressXk3yl9 = accounts[4]
		const uintx7obRmZ = BigInt("1188")
		const uint256mi1ckiR = await CourtFarming_RoomLPStakePFtNicl.totalStaked.call({from: accounts[4]});
		const uint256yuVFaT9 = await CourtFarming_RoomLPStakePFtNicl.incvRewardInfo.call({from: accounts[1]});
//		const addressMikeH4k = await CourtFarming_RoomLPStakePFtNicl.setCourtStake.call(addressXk3yl9, {from: accounts[1]});
//		const uint256NmHNY2g = await CourtFarming_RoomLPStakePFtNicl.expectedRewardsToday.call(uintx7obRmZ, {from: accounts[2]});

		assert.equal(uint256mi1ckiR, BigInt("0"))
		await expect(CourtFarming_RoomLPStakePFtNicl.setCourtStake.call(addressXk3yl9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePFtNicl = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressrYDt804 = accounts[3]
		const addressEBTHAcP = accounts[4]
		const uintD5X5kZ5 = BigInt("1188")
		const uint256mi1ckiR = await CourtFarming_RoomLPStakePFtNicl.totalStaked.call({from: accounts[4]});
		const uint256yuVFaT9 = await CourtFarming_RoomLPStakePFtNicl.incvRewardInfo.call({from: accounts[1]});
		const addressaZiG4pV = await CourtFarming_RoomLPStakePFtNicl.getBeneficiaryInfo.call(addressrYDt804, {from: accounts[5]});
//		const addressMikeH4k = await CourtFarming_RoomLPStakePFtNicl.setCourtStake.call(addressEBTHAcP, {from: accounts[1]});
//		const uint256NmHNY2g = await CourtFarming_RoomLPStakePFtNicl.expectedRewardsToday.call(uintD5X5kZ5, {from: accounts[2]});

		assert.equal(uint256mi1ckiR, BigInt("0"))
		await expect(CourtFarming_RoomLPStakePFtNicl.setCourtStake.call(addressEBTHAcP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZmA1ufM = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintd4LwnMh = BigInt("303")
		const uintyl6J7KU = BigInt("908")
		const uintH3eDhF = BigInt("414")
		const uintqCjI7l = BigInt("1121")
		const addressw9OWQO4 = accounts[0]
		const addressd4LpaU = accounts[1]
		const boolAR6USwF = await CourtFarming_RoomLPStakeZmA1ufM.stakeIncvRewards.call(uintd4LwnMh, {from: accounts[3]});
//		await CourtFarming_RoomLPStakeZmA1ufM.changeStakeParameters.call(uintqCjI7l, uintH3eDhF, uintyl6J7KU, {from: accounts[1]});
//		const addressKYCckKr = await CourtFarming_RoomLPStakeZmA1ufM.updateReward.call(addressw9OWQO4, {from: accounts[4]});
//		const uint256kLu6l7 = await CourtFarming_RoomLPStakeZmA1ufM.balanceOf.call(addressd4LpaU, {from: accounts[2]});

		assert.equal(boolAR6USwF, false)
		await expect(CourtFarming_RoomLPStakeZmA1ufM.changeStakeParameters.call(uintqCjI7l, uintH3eDhF, uintyl6J7KU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePFtNicl = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addresspYbHFYN = accounts[1]
		const addresszbMbkvq = accounts[3]
		const boolYJuEXz0 = true
		const uintsesJZ1h = BigInt("0")
		const addressdspYFzk = await CourtFarming_RoomLPStakePFtNicl.getBeneficiaryInfo.call(addresspYbHFYN, {from: accounts[2]});
		const addressCxUNfGb = await CourtFarming_RoomLPStakePFtNicl.getBeneficiaryInfo.call(addresszbMbkvq, {from: accounts[3]});
		const uint256boy0YTX = await CourtFarming_RoomLPStakePFtNicl.unstake.call(uintsesJZ1h, boolYJuEXz0, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerh782fw = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressradnkqY = accounts[3]
		const uintTGMto4X = BigInt("1728")
		const addressTf6b3C = accounts[4]
		const uintfwd6gN0 = BigInt("0")
		const uint256BtMt8hD = await CourtFarming_RoomLPStakerh782fw.balanceOf.call(addressradnkqY, {from: accounts[0]});
		const boolNbgkpns = await CourtFarming_RoomLPStakerh782fw.stakeIncvRewards.call(uintTGMto4X, {from: accounts[3]});
		const addressSDfIYsV = await CourtFarming_RoomLPStakerh782fw.getBeneficiaryInfo.call(addressTf6b3C, {from: accounts[2]});
		const boolU4BHtAc = await CourtFarming_RoomLPStakerh782fw.stakeIncvRewards.call(uintfwd6gN0, {from: accounts[2]});

		assert.equal(boolNbgkpns, false)
		assert.equal(boolU4BHtAc, false)
		assert.equal(uint256BtMt8hD, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerh782fw = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintDKi1l5p = BigInt("0")
		const uintBnL5ids = BigInt("18")
		const uint256fcs7jCj = await CourtFarming_RoomLPStakerh782fw.stake.call(uintDKi1l5p, {from: "0x0000000000000000000000000000000000000001"});
		const boolU4BHtAc = await CourtFarming_RoomLPStakerh782fw.stakeIncvRewards.call(uintBnL5ids, {from: accounts[2]});

		assert.equal(boolU4BHtAc, false)
	});
})