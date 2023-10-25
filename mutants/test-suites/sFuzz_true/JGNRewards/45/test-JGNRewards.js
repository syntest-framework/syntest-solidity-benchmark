const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsrHqVg4O = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint2p8D9v = BigInt("1033")
		const uinttOrc193 = BigInt("1057")
		const uintCU9oDTc = BigInt("1628")
		const addresskPycFU = accounts[4]
		const uint256UMs0F0R = await JGNRewardsrHqVg4O.stake.call(uint2p8D9v, {from: accounts[0]});
		const uint256cjLuI38 = await JGNRewardsrHqVg4O.stake.call(uinttOrc193, {from: accounts[0]});
		const uint256xNKjbdc = await JGNRewardsrHqVg4O.stake.call(uintCU9oDTc, {from: accounts[5]});
		await JGNRewardsrHqVg4O.exit.call({from: accounts[4]});
		await JGNRewardsrHqVg4O.getReward.call({from: accounts[2]});
		const addressReB66Hb = await JGNRewardsrHqVg4O.updateReward.call(addresskPycFU, {from: accounts[0]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardspLV2fOX = await JGNRewards.new({from: accounts[0]});
		const uintls8s7iq = BigInt("1577")
		const uintMcWqgj = BigInt("1067")
		const addressfBQh8qi = accounts[0]
		const uintqFQlmTq = BigInt("844")
		const uintbwF6uAL = BigInt("1791")
//		const uint256LVIxSqv = await JGNRewardspLV2fOX.stake.call(uintls8s7iq, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wKyel4J = await JGNRewardspLV2fOX.rewardPerToken.call({from: accounts[5]});
//		const uint256exkm00y = await JGNRewardspLV2fOX.withdraw.call(uintMcWqgj, {from: accounts[3]});
//		const addresscOhafq2 = await JGNRewardspLV2fOX.updateReward.call(addressfBQh8qi, {from: accounts[4]});
//		const uint256a1tgsEM = await JGNRewardspLV2fOX.stake.call(uintqFQlmTq, {from: accounts[2]});
//		const uint256guXa2hJ = await JGNRewardspLV2fOX.withdraw.call(uintbwF6uAL, {from: accounts[3]});

		await expect(JGNRewardspLV2fOX.stake.call(uintls8s7iq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsV232myd = await JGNRewards.new({from: accounts[0]});
		const uintnfGlLai = BigInt("504")
		const addressGiMiAIg = accounts[2]
		const uintnbd0rB = BigInt("1828")
		const addressm1KQPKe = accounts[4]
//		const uint256DskKiyE = await JGNRewardsV232myd.withdraw.call(uintnfGlLai, {from: accounts[1]});
//		const uint256nXCjsH6 = await JGNRewardsV232myd.totalSupply.call({from: accounts[0]});
//		const uint256Mlt94ip = await JGNRewardsV232myd.balanceOf.call(addressGiMiAIg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qlINIet = await JGNRewardsV232myd.withdraw.call(uintnbd0rB, {from: accounts[1]});
//		const uint256dZdqghX = await JGNRewardsV232myd.balanceOf.call(addressm1KQPKe, {from: accounts[3]});

		await expect(JGNRewardsV232myd.withdraw.call(uintnfGlLai, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsHs5Imlu = await JGNRewards.new({from: accounts[3]});
		const addressd9TpXG = "0x0000000000000000000000000000000000000001"
		const uintQoGiFyA = BigInt("1053")
//		await JGNRewardsHs5Imlu.checkStart.call({from: accounts[1]});
//		await JGNRewardsHs5Imlu.getReward.call({from: accounts[3]});
//		const uint256vk47N1M = await JGNRewardsHs5Imlu.balanceOf.call(addressd9TpXG, {from: accounts[0]});
//		const uint256inEhT2q = await JGNRewardsHs5Imlu.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256YsHrNZO = await JGNRewardsHs5Imlu.notifyRewardAmount.call(uintQoGiFyA, {from: accounts[3]});

		await expect(JGNRewardsHs5Imlu.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsIJupYtL = await JGNRewards.new({from: accounts[4]});
		const uintUcTBB3z = BigInt("1666")
		const uint8gER4r = BigInt("543")
		const uintnxmT39n = BigInt("223")
//		await JGNRewardsIJupYtL.exit.call({from: accounts[5]});
//		const uint256XrBkgIX = await JGNRewardsIJupYtL.withdraw.call(uintUcTBB3z, {from: accounts[2]});
//		await JGNRewardsIJupYtL.exit.call({from: accounts[2]});
//		const uint256XNTRWgC = await JGNRewardsIJupYtL.withdraw.call(uint8gER4r, {from: accounts[2]});
//		const uint256s8mXIww = await JGNRewardsIJupYtL.withdraw.call(uintnxmT39n, {from: accounts[0]});

		await expect(JGNRewardsIJupYtL.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBHXSzmV = await JGNRewards.new({from: accounts[2]});
		const addresskvlK1pF = "0x0000000000000000000000000000000000000001"
		const uintdBJnTmc = BigInt("855")
		const uint256TvHZPkk = await JGNRewardsBHXSzmV.balanceOf.call(addresskvlK1pF, {from: accounts[1]});
//		await JGNRewardsBHXSzmV.getReward.call({from: accounts[3]});
//		const uint2564dMo2v = await JGNRewardsBHXSzmV.stake.call(uintdBJnTmc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256TvHZPkk, BigInt("0"))
		await expect(JGNRewardsBHXSzmV.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBHXSzmV = await JGNRewards.new({from: accounts[2]});
		const uintfL4Ykoz = BigInt("1124")
		const uintx9pA5o4 = BigInt("848")
		const uintsVUDVwa = BigInt("791")
//		const uint256zv2GYm1 = await JGNRewardsBHXSzmV.notifyRewardAmount.call(uintfL4Ykoz, {from: accounts[4]});
//		const uint256yoxHee6 = await JGNRewardsBHXSzmV.stake.call(uintx9pA5o4, {from: accounts[1]});
//		const uint2564dMo2v = await JGNRewardsBHXSzmV.stake.call(uintsVUDVwa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsBHXSzmV.notifyRewardAmount.call(uintfL4Ykoz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})