const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZ8oJ1AV = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintLvPKBeh = BigInt("896")
		const addressLOunstA = "0x0000000000000000000000000000000000000001"
		const uint256EpmfkVM = await CourtFarming_HTStakeZ8oJ1AV.totalStaked.call({from: accounts[1]});
		const uint256Q3m7tLc = await CourtFarming_HTStakeZ8oJ1AV.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256FAANYt8 = await CourtFarming_HTStakeZ8oJ1AV.stake.call(uintLvPKBeh, {from: accounts[1]});
//		const uint256P3qtqCq = await CourtFarming_HTStakeZ8oJ1AV.blockNumber.call({from: accounts[0]});
//		const addresscB2VQmi = await CourtFarming_HTStakeZ8oJ1AV.setCourtStake.call(addressLOunstA, {from: accounts[1]});

		assert.equal(uint256EpmfkVM, BigInt("0"))
		assert.equal(uint256Q3m7tLc, BigInt("0"))
		await expect(CourtFarming_HTStakeZ8oJ1AV.stake.call(uintLvPKBeh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelWIi883 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressk7yST2 = accounts[2]
		const addressk07b5tg = accounts[3]
		const uintQQgF5i = BigInt("451")
		const uintoAhFBDL = BigInt("1380")
		const uintHJilcG5 = BigInt("706")
//		const addresstQqivhp = await CourtFarming_HTStakelWIi883.setCourtStake.call(addressk7yST2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RRBV8OT = await CourtFarming_HTStakelWIi883.balanceOf.call(addressk07b5tg, {from: accounts[1]});
//		await CourtFarming_HTStakelWIi883.changeStakeParameters.call(uintHJilcG5, uintoAhFBDL, uintQQgF5i, {from: accounts[1]});

		await expect(CourtFarming_HTStakelWIi883.setCourtStake.call(addressk7yST2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeoOdQC8D = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressNzbo0Mx = accounts[4]
		const addressE4craea = "0x0000000000000000000000000000000000000001"
		const uint256DtHNubB = await CourtFarming_HTStakeoOdQC8D.lastUpdateBlock.call({from: accounts[3]});
		const addressfCZXZRS = await CourtFarming_HTStakeoOdQC8D.getBeneficiaryInfo.call(addressNzbo0Mx, {from: accounts[5]});
		const uint256MuaGhLp = await CourtFarming_HTStakeoOdQC8D.lastUpdateBlock.call({from: accounts[0]});
		const uint256Zvzxx0U = await CourtFarming_HTStakeoOdQC8D.balanceOf.call(addressE4craea, {from: accounts[0]});

		assert.equal(uint256DtHNubB, BigInt("1714"))
		assert.equal(uint256MuaGhLp, BigInt("1714"))
		assert.equal(uint256Zvzxx0U, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakec9Rj11h = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintlT3PlB4 = BigInt("1907")
		const boolohTIKj = await CourtFarming_HTStakec9Rj11h.stakeIncvRewards.call(uintlT3PlB4, {from: accounts[1]});
		const uint256rGsaP2E = await CourtFarming_HTStakec9Rj11h.lastUpdateBlock.call({from: accounts[4]});

		assert.equal(boolohTIKj, false)
		assert.equal(uint256rGsaP2E, BigInt("1714"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNisfQa6 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintK50N0wx = BigInt("2030")
		const addressKxXLSsF = accounts[2]
		const boolzlLGQl5 = await CourtFarming_HTStakeNisfQa6.stakeIncvRewards.call(uintK50N0wx, {from: accounts[0]});
		const uint256IWvSOr8 = await CourtFarming_HTStakeNisfQa6.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressxZTnrOY = await CourtFarming_HTStakeNisfQa6.setCourtStake.call(addressKxXLSsF, {from: accounts[0]});

		assert.equal(boolzlLGQl5, false)
		await expect(CourtFarming_HTStakeNisfQa6.setCourtStake.call(addressKxXLSsF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakex4G8gt = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressmq5Z9m4 = accounts[4]
		const uintsm4aDZP = BigInt("1109")
		const boolwXC9XM = true
		const uintvi3klQL = BigInt("1574")
		const uint256bOW8B9M = await CourtFarming_HTStakex4G8gt.balanceOf.call(addressmq5Z9m4, {from: accounts[1]});
		const uint256b87hTY3 = await CourtFarming_HTStakex4G8gt.expectedRewardsToday.call(uintsm4aDZP, {from: accounts[5]});
		const uint256ESPXFUb = await CourtFarming_HTStakex4G8gt.totalStaked.call({from: accounts[4]});
//		const uint256tVqnsbN = await CourtFarming_HTStakex4G8gt.unstake.call(uintvi3klQL, boolwXC9XM, {from: accounts[1]});

		assert.equal(uint256ESPXFUb, BigInt("0"))
		assert.equal(uint256bOW8B9M, BigInt("0"))
		await expect(CourtFarming_HTStakex4G8gt.unstake.call(uintvi3klQL, boolwXC9XM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelWIi883 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressNH9rJXF = accounts[3]
		const uintk57P8XO = BigInt("451")
		const uintAK8qgeF = BigInt("1380")
		const uintySvzmp = BigInt("725")
		const uint256RRBV8OT = await CourtFarming_HTStakelWIi883.balanceOf.call(addressNH9rJXF, {from: accounts[1]});
//		await CourtFarming_HTStakelWIi883.changeStakeParameters.call(uintySvzmp, uintAK8qgeF, uintk57P8XO, {from: accounts[1]});

		assert.equal(uint256RRBV8OT, BigInt("0"))
		await expect(CourtFarming_HTStakelWIi883.changeStakeParameters.call(uintySvzmp, uintAK8qgeF, uintk57P8XO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNisfQa6 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintaqtqFV1 = BigInt("1697")
		const uintYXgnEK = BigInt("461")
		const uintepSkMNM = BigInt("503")
		const uintnodf86f = BigInt("2005")
		const addresssTip1hd = accounts[2]
//		const uint256KUfUBN6 = await CourtFarming_HTStakeNisfQa6._stakeParametrsCalculation.call(uintepSkMNM, uintYXgnEK, uintaqtqFV1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzlLGQl5 = await CourtFarming_HTStakeNisfQa6.stakeIncvRewards.call(uintnodf86f, {from: accounts[0]});
//		const uint256IWvSOr8 = await CourtFarming_HTStakeNisfQa6.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressxZTnrOY = await CourtFarming_HTStakeNisfQa6.setCourtStake.call(addresssTip1hd, {from: accounts[0]});

		await expect(CourtFarming_HTStakeNisfQa6._stakeParametrsCalculation.call(uintepSkMNM, uintYXgnEK, uintaqtqFV1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeg1Pa4RN = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressGAKuQN1 = accounts[0]
		const addressm5kDQIJ = accounts[1]
		const uintypDEN4m = BigInt("1206")
		const uintGKXGvgq = BigInt("918")
		const uintaB6BcEE = BigInt("1505")
		const addressu0LIZI9 = await CourtFarming_HTStakeg1Pa4RN.updateReward.call(addressGAKuQN1, {from: accounts[3]});
		const uint256bZUDVY = await CourtFarming_HTStakeg1Pa4RN.rewards.call(addressm5kDQIJ, {from: accounts[0]});
//		await CourtFarming_HTStakeg1Pa4RN.changeStakeParameters.call(uintaB6BcEE, uintGKXGvgq, uintypDEN4m, {from: accounts[3]});

		await expect(CourtFarming_HTStakeg1Pa4RN.changeStakeParameters.call(uintaB6BcEE, uintGKXGvgq, uintypDEN4m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedGXSgs = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintaGpVCj = BigInt("1845")
		const uintBxVr6wT = BigInt("0")
		const addressTsq0JR = accounts[3]
		const boolqB8WxMs = await CourtFarming_HTStakedGXSgs.stakeIncvRewards.call(uintaGpVCj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256khAbhKs = await CourtFarming_HTStakedGXSgs.stake.call(uintBxVr6wT, {from: accounts[3]});
		const uint256tJXZ8aY = await CourtFarming_HTStakedGXSgs.totalStaked.call({from: accounts[4]});
		const addressfvlxHUL = await CourtFarming_HTStakedGXSgs.updateReward.call(addressTsq0JR, {from: accounts[2]});
		const uint256v21xzT1 = await CourtFarming_HTStakedGXSgs.getCurrentTime.call({from: accounts[0]});

		assert.equal(boolqB8WxMs, false)
		assert.equal(uint256tJXZ8aY, BigInt("0"))
		assert.equal(uint256v21xzT1, BigInt("1630201440"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecfIRC9j = await CourtFarming_HTStake.new({from: accounts[1]});
		const addresssLoeeVf = accounts[3]
		const uintAlpgI8 = BigInt("932")
		const addressaAkHyhL = accounts[4]
		const uint256yTawMG4 = await CourtFarming_HTStakecfIRC9j.incvRewardInfo.call({from: accounts[4]});
//		const addressGbZvEdn = await CourtFarming_HTStakecfIRC9j.setCourtStake.call(addresssLoeeVf, {from: accounts[1]});
//		const uint256tAb4Set = await CourtFarming_HTStakecfIRC9j.blockNumber.call({from: accounts[4]});
//		const uint256uX7ST1D = await CourtFarming_HTStakecfIRC9j.stake.call(uintAlpgI8, {from: accounts[5]});
//		const addresssYvmN56 = await CourtFarming_HTStakecfIRC9j.setCourtStake.call(addressaAkHyhL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakecfIRC9j.setCourtStake.call(addresssLoeeVf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeb91nl5L = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressULTyL5O = accounts[0]
		const uintdAPRjeg = BigInt("1792")
		const uintHDNoAfy = BigInt("57")
		const addressZvNbEBi = await CourtFarming_HTStakeb91nl5L.getBeneficiaryInfo.call(addressULTyL5O, {from: accounts[0]});
		const uint256zF6nnPB = await CourtFarming_HTStakeb91nl5L.stake.call(uintdAPRjeg, {from: accounts[4]});
		const uint256orIAFfa = await CourtFarming_HTStakeb91nl5L.expectedRewardsToday.call(uintHDNoAfy, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelWIi883 = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolUWlEmfD = true
		const uintHXZAS7e = BigInt("0")
		const uint256sgXbWl = await CourtFarming_HTStakelWIi883.unstake.call(uintHXZAS7e, boolUWlEmfD, {from: accounts[5]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakec9Rj11h = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintgmYOCSR = BigInt("1466")
		const uintKK8S6h9 = BigInt("0")
		const uint256YVLKJ34 = await CourtFarming_HTStakec9Rj11h.incvRewardInfo.call({from: accounts[4]});
		const boolZButtkM = await CourtFarming_HTStakec9Rj11h.stakeIncvRewards.call(uintgmYOCSR, {from: accounts[5]});
		const boolohTIKj = await CourtFarming_HTStakec9Rj11h.stakeIncvRewards.call(uintKK8S6h9, {from: accounts[1]});

		assert.equal(boolZButtkM, false)
		assert.equal(boolohTIKj, false)
	});
})