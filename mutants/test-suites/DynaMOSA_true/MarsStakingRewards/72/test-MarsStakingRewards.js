const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressWO4qNXh = accounts[1]
		const addresshfIiqo9 = accounts[3]
		const addressmMhIzW7 = accounts[2]
		const MarsStakingRewardsVqjIu9A = await MarsStakingRewards.new(addressWO4qNXh, addresshfIiqo9, addressmMhIzW7, {from: accounts[0]});
		const uintaq1Qzs = BigInt("1608")
		const addressrNYEHT6 = accounts[2]
//		const uint256H7aSGkt = await MarsStakingRewardsVqjIu9A.stake.call(uintaq1Qzs, {from: accounts[3]});
//		const addresslolP8Og = await MarsStakingRewardsVqjIu9A.setRewardsDistribution.call(addressrNYEHT6, {from: accounts[1]});
//		const booluJ1OHw4 = await MarsStakingRewardsVqjIu9A.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsVqjIu9A.stake.call(uintaq1Qzs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgOpUzz9 = accounts[3]
		const addressSDqOM1 = accounts[5]
		const addressJBwtua = accounts[0]
		const MarsStakingRewardswxIrBiM = await MarsStakingRewards.new(addressgOpUzz9, addressSDqOM1, addressJBwtua, {from: accounts[2]});
		const addressDsAT0qW = accounts[3]
		const addressgytK3VS = "0x0000000000000000000000000000000000000001"
		const addressOYCsIwf = "0x0000000000000000000000000000000000000001"
//		await MarsStakingRewardswxIrBiM.onlyOwner.call({from: accounts[2]});
		await MarsStakingRewardswxIrBiM.onlyOwner.call({from: accounts[2]});
//		const addressbv4OsF = await MarsStakingRewardswxIrBiM.updateReward.call(addressDsAT0qW, {from: accounts[1]});
//		const uint256ZuF11FS = await MarsStakingRewardswxIrBiM.earned.call(addressgytK3VS, {from: accounts[1]});
//		const uint256VWjPYBy = await MarsStakingRewardswxIrBiM.balanceOf.call(addressOYCsIwf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardswxIrBiM.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKEOEL8t = accounts[1]
		const addresszOGhUzz = accounts[3]
		const addresst5Qh7ML = accounts[1]
		const MarsStakingRewardsgXoeCp = await MarsStakingRewards.new(addressKEOEL8t, addresszOGhUzz, addresst5Qh7ML, {from: accounts[0]});
		const addressc3BG3Es = accounts[0]
		const uintL3RHtKF = BigInt("877")
		const uint256O8fxZBo = await MarsStakingRewardsgXoeCp.getRewardForDuration.call({from: accounts[0]});
		const uint256vNIGPl = await MarsStakingRewardsgXoeCp.earned.call(addressc3BG3Es, {from: accounts[2]});
//		await MarsStakingRewardsgXoeCp.exit.call({from: accounts[1]});
//		const uint256m7TqRAg = await MarsStakingRewardsgXoeCp.withdraw.call(uintL3RHtKF, {from: accounts[0]});
//		await MarsStakingRewardsgXoeCp.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256O8fxZBo, BigInt("0"))
		assert.equal(uint256vNIGPl, BigInt("0"))
		await expect(MarsStakingRewardsgXoeCp.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressyiTmQ1M = accounts[0]
		const addresskdUXlJ9 = accounts[1]
		const addressjgn6iuf = accounts[4]
		const MarsStakingRewardsBYSbfIu = await MarsStakingRewards.new(addressyiTmQ1M, addresskdUXlJ9, addressjgn6iuf, {from: accounts[4]});
		const uintUvoaF7Z = BigInt("1768")
		const addressxPyWchZ = accounts[1]
		const uintdzXczJA = BigInt("479")
		const addressn0P3ALl = accounts[0]
		const uinteBurRQ = BigInt("484")
//		const addressTvQFmeN = await MarsStakingRewardsBYSbfIu.inCaseTokensGetStuck.call(addressxPyWchZ, uintUvoaF7Z, {from: accounts[3]});
//		await MarsStakingRewardsBYSbfIu.renounceOwnership.call({from: accounts[4]});
//		const addressTgcpAKM = await MarsStakingRewardsBYSbfIu.inCaseTokensGetStuck.call(addressn0P3ALl, uintdzXczJA, {from: accounts[2]});
//		await MarsStakingRewardsBYSbfIu.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsBYSbfIu.exit.call({from: accounts[0]});
//		const uint256n3yx79s = await MarsStakingRewardsBYSbfIu.withdraw.call(uinteBurRQ, {from: accounts[4]});

		await expect(MarsStakingRewardsBYSbfIu.inCaseTokensGetStuck.call(addressxPyWchZ, uintUvoaF7Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgQEeGeV = accounts[5]
		const addressAmE79Ui = accounts[4]
		const addresslAu9Wa1 = accounts[2]
		const MarsStakingRewardsOP8OwoN = await MarsStakingRewards.new(addressgQEeGeV, addressAmE79Ui, addresslAu9Wa1, {from: accounts[4]});
		const uint256b5oHwKM = await MarsStakingRewardsOP8OwoN.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Llu6SU1 = await MarsStakingRewardsOP8OwoN.getRewardForDuration.call({from: accounts[3]});

		assert.equal(uint256Llu6SU1, BigInt("0"))
		assert.equal(uint256b5oHwKM, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressNeQlAro = "0x0000000000000000000000000000000000000001"
		const addressbFENpQi = "0x0000000000000000000000000000000000000001"
		const addresso8Ig6XJ = accounts[0]
		const MarsStakingRewardsESre3t = await MarsStakingRewards.new(addressNeQlAro, addressbFENpQi, addresso8Ig6XJ, {from: accounts[3]});
		const addressDBdjVtD = accounts[1]
		const uint256c55QFYC = await MarsStakingRewardsESre3t.totalSupply.call({from: accounts[2]});
//		const addressbjJcKp7 = await MarsStakingRewardsESre3t.updateReward.call(addressDBdjVtD, {from: accounts[4]});
//		const uint256GoA89RX = await MarsStakingRewardsESre3t.getRewardForDuration.call({from: accounts[3]});
//		await MarsStakingRewardsESre3t.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256c55QFYC, BigInt("0"))
		await expect(MarsStakingRewardsESre3t.updateReward.call(addressDBdjVtD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxjeCvAR = "0x0000000000000000000000000000000000000001"
		const addressorcxwPU = "0x0000000000000000000000000000000000000001"
		const addressX2ov3J0 = accounts[0]
		const MarsStakingRewardsESre3t = await MarsStakingRewards.new(addressxjeCvAR, addressorcxwPU, addressX2ov3J0, {from: accounts[3]});
		const uint256c55QFYC = await MarsStakingRewardsESre3t.totalSupply.call({from: accounts[2]});
		const uint256GoA89RX = await MarsStakingRewardsESre3t.getRewardForDuration.call({from: accounts[3]});
//		await MarsStakingRewardsESre3t.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256GoA89RX, BigInt("0"))
		assert.equal(uint256c55QFYC, BigInt("0"))
		await expect(MarsStakingRewardsESre3t.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfcixagP = accounts[5]
		const addressSckSAE4 = accounts[4]
		const addressRpSUFIk = accounts[2]
		const MarsStakingRewardsOP8OwoN = await MarsStakingRewards.new(addressfcixagP, addressSckSAE4, addressRpSUFIk, {from: accounts[4]});
		const addresscbH4V30 = accounts[5]
		const uint256eGJWfw6 = await MarsStakingRewardsOP8OwoN.rewardPerToken.call({from: accounts[1]});
		const uint256b5oHwKM = await MarsStakingRewardsOP8OwoN.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Gv4xK1J = await MarsStakingRewardsOP8OwoN.balanceOf.call(addresscbH4V30, {from: accounts[1]});

		assert.equal(uint256Gv4xK1J, BigInt("0"))
		assert.equal(uint256b5oHwKM, BigInt("0"))
		assert.equal(uint256eGJWfw6, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresspd0LaKw = accounts[5]
		const address1kTXFC = accounts[4]
		const addressyQjhxmc = accounts[2]
		const MarsStakingRewardsOP8OwoN = await MarsStakingRewards.new(addresspd0LaKw, address1kTXFC, addressyQjhxmc, {from: accounts[4]});
		const uints7uZQDh = BigInt("42")
		const uintuEfCamf = BigInt("1375")
		const uint256eGJWfw6 = await MarsStakingRewardsOP8OwoN.rewardPerToken.call({from: accounts[1]});
//		const uint256AyU5k9o = await MarsStakingRewardsOP8OwoN.notifyRewardAmount.call(uintuEfCamf, uints7uZQDh, {from: accounts[3]});
//		await MarsStakingRewardsOP8OwoN.nonReentrant.call({from: accounts[1]});
//		const uint256b5oHwKM = await MarsStakingRewardsOP8OwoN.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256eGJWfw6, BigInt("0"))
		await expect(MarsStakingRewardsOP8OwoN.notifyRewardAmount.call(uintuEfCamf, uints7uZQDh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgn12qwX = accounts[1]
		const addressOno2sbF = accounts[3]
		const addressNYwuCMv = accounts[1]
		const MarsStakingRewardsgXoeCp = await MarsStakingRewards.new(addressgn12qwX, addressOno2sbF, addressNYwuCMv, {from: accounts[0]});
		const addressJJgDsr2 = accounts[0]
		const uintgVv5pp0 = BigInt("1053")
		const addressV05wvzm = accounts[2]
		const uintimM4k0L = BigInt("877")
		const uint256O8fxZBo = await MarsStakingRewardsgXoeCp.getRewardForDuration.call({from: accounts[0]});
		const uint256vNIGPl = await MarsStakingRewardsgXoeCp.earned.call(addressJJgDsr2, {from: accounts[2]});
		const addressevGrt0 = await MarsStakingRewardsgXoeCp.owner.call({from: accounts[2]});
//		const addressU8j7WYu = await MarsStakingRewardsgXoeCp.inCaseTokensGetStuck.call(addressV05wvzm, uintgVv5pp0, {from: accounts[2]});
//		await MarsStakingRewardsgXoeCp.exit.call({from: accounts[1]});
//		await MarsStakingRewardsgXoeCp.renounceOwnership.call({from: accounts[0]});
//		const uint256m7TqRAg = await MarsStakingRewardsgXoeCp.withdraw.call(uintimM4k0L, {from: accounts[0]});
//		await MarsStakingRewardsgXoeCp.onlyOwner.call({from: accounts[1]});

		assert.equal(addressevGrt0, 0xE499989EfB21ba5aba2729ce9480C7D874f81A88)
		assert.equal(uint256O8fxZBo, BigInt("0"))
		assert.equal(uint256vNIGPl, BigInt("0"))
		await expect(MarsStakingRewardsgXoeCp.inCaseTokensGetStuck.call(addressV05wvzm, uintgVv5pp0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZq5sli7 = accounts[2]
		const addressVivRTOo = accounts[1]
		const addressJUcAzil = accounts[2]
		const MarsStakingRewardsayptxg3 = await MarsStakingRewards.new(addressZq5sli7, addressVivRTOo, addressJUcAzil, {from: "0x0000000000000000000000000000000000000001"});
		const addresso1HZPc = accounts[0]
		const addresssQUIqWZ = accounts[1]
		const boolLhNKmJ = await MarsStakingRewardsayptxg3.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pD3mBi = await MarsStakingRewardsayptxg3.balanceOf.call(addresso1HZPc, {from: "0x0000000000000000000000000000000000000001"});
		const addressVbHqB6r = await MarsStakingRewardsayptxg3.transferOwnership.call(addresssQUIqWZ, {from: accounts[1]});
		await MarsStakingRewardsayptxg3.onlyOwner.call({from: accounts[5]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressqnsn2Pa = accounts[0]
		const addressExV6zxw = accounts[1]
		const addressDFjJqmD = accounts[0]
		const MarsStakingRewardsibNxww1 = await MarsStakingRewards.new(addressqnsn2Pa, addressExV6zxw, addressDFjJqmD, {from: accounts[4]});
		const addressarvMwT = accounts[2]
		const addresslLzJoT = accounts[3]
		const addressxcriOr = accounts[0]
		const addressrFeYVcu = await MarsStakingRewardsibNxww1.setRewardsDistribution.call(addressarvMwT, {from: accounts[4]});
//		const addressjIEcNXE = await MarsStakingRewardsibNxww1.updateReward.call(addresslLzJoT, {from: accounts[2]});
//		const uint256emQhcjz = await MarsStakingRewardsibNxww1.earned.call(addressxcriOr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsibNxww1.updateReward.call(addresslLzJoT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressWXG1wBE = accounts[5]
		const addressKEJs6D = accounts[4]
		const addressZiWhh2X = accounts[2]
		const MarsStakingRewardsOP8OwoN = await MarsStakingRewards.new(addressWXG1wBE, addressKEJs6D, addressZiWhh2X, {from: accounts[4]});
		const addressxYOAJaZ = accounts[0]
		const byteNy7CAbm = "0x170c0f010f14071f11052020091b112003030203170c0513000d1a030e090e01"
		const bytezht3AdA = "0x03151d181b0c140f0d190e00171e10151c1f0b140f1713011518151d0b141e13"
		const uintrTvwnPZ = BigInt("57")
		const uintJzSb5gJ = BigInt("1151")
		const uintMcvACkT = BigInt("331")
		const uint256eGJWfw6 = await MarsStakingRewardsOP8OwoN.rewardPerToken.call({from: accounts[1]});
		const addressIsLsHbx = await MarsStakingRewardsOP8OwoN.transferOwnership.call(addressxYOAJaZ, {from: accounts[4]});
//		const uint256iz5kTnp = await MarsStakingRewardsOP8OwoN.stakeWithPermit.call(uintMcvACkT, uintJzSb5gJ, uintrTvwnPZ, bytezht3AdA, byteNy7CAbm, {from: accounts[0]});

		assert.equal(uint256eGJWfw6, BigInt("0"))
		await expect(MarsStakingRewardsOP8OwoN.stakeWithPermit.call(uintMcvACkT, uintJzSb5gJ, uintrTvwnPZ, bytezht3AdA, byteNy7CAbm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspY6Qy3l = accounts[5]
		const addresswbKVlfL = accounts[4]
		const addressUO26Zs4 = accounts[2]
		const MarsStakingRewardsOP8OwoN = await MarsStakingRewards.new(addresspY6Qy3l, addresswbKVlfL, addressUO26Zs4, {from: accounts[4]});
		const uintnGf5Hqy = BigInt("1811")
		const uintfrLfgsI = BigInt("1103")
		const uintQDOtT7U = BigInt("1943")
		const addresswkUhF0V = accounts[0]
//		const uint256otNGRD = await MarsStakingRewardsOP8OwoN.notifyRewardAmount.call(uintfrLfgsI, uintnGf5Hqy, {from: accounts[5]});
//		const uint256Llu6SU1 = await MarsStakingRewardsOP8OwoN.getRewardForDuration.call({from: accounts[3]});
//		const addresslh9Zzg = await MarsStakingRewardsOP8OwoN.inCaseTokensGetStuck.call(addresswkUhF0V, uintQDOtT7U, {from: accounts[2]});

		await expect(MarsStakingRewardsOP8OwoN.notifyRewardAmount.call(uintfrLfgsI, uintnGf5Hqy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskLmdZIU = accounts[5]
		const addressl2aJYzD = accounts[4]
		const addressrVLKiU = accounts[2]
		const MarsStakingRewardsOP8OwoN = await MarsStakingRewards.new(addresskLmdZIU, addressl2aJYzD, addressrVLKiU, {from: accounts[4]});
		const uintKpPCXUw = BigInt("1157")
		const addresslI3oRNK = accounts[2]
//		const addressxL2apSc = await MarsStakingRewardsOP8OwoN.inCaseTokensGetStuck.call(addresslI3oRNK, uintKpPCXUw, {from: accounts[4]});
//		const uint256Llu6SU1 = await MarsStakingRewardsOP8OwoN.getRewardForDuration.call({from: accounts[3]});

		await expect(MarsStakingRewardsOP8OwoN.inCaseTokensGetStuck.call(addresslI3oRNK, uintKpPCXUw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressiFLchzF = accounts[2]
		const addressUF0IO0 = accounts[0]
		const addressmyGQMt = accounts[3]
		const MarsStakingRewardsqjkHzAT = await MarsStakingRewards.new(addressiFLchzF, addressUF0IO0, addressmyGQMt, {from: accounts[1]});
		const uintixzWQAI = BigInt("1512")
		const addressBUfBgC0 = accounts[4]
		const addressuFD6yzj = accounts[2]
//		const addresspCFOdhx = await MarsStakingRewardsqjkHzAT.inCaseTokensGetStuck.call(addressBUfBgC0, uintixzWQAI, {from: accounts[1]});
//		const uint256XdTzEkg = await MarsStakingRewardsqjkHzAT.earned.call(addressuFD6yzj, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsqjkHzAT.onlyRewardsDistribution.call({from: accounts[0]});
//		const addressH6ifoZP = await MarsStakingRewardsqjkHzAT.owner.call({from: accounts[3]});

		await expect(MarsStakingRewardsqjkHzAT.inCaseTokensGetStuck.call(addressBUfBgC0, uintixzWQAI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})