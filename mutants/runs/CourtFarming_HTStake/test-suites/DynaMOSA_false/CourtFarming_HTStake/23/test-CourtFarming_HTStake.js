const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeq0DzBoD = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressIJthJ4b = accounts[4]
		const addresst5OhBH0 = "0x0000000000000000000000000000000000000001"
		const addressIkIW4v1 = accounts[1]
		const uint256ismrH8D = await CourtFarming_HTStakeq0DzBoD.totalStaked.call({from: accounts[2]});
		const uint256zDO4U0Z = await CourtFarming_HTStakeq0DzBoD.blockNumber.call({from: accounts[0]});
		const uint256CgjIZkh = await CourtFarming_HTStakeq0DzBoD.rewards.call(addressIJthJ4b, {from: accounts[2]});
		const addressV4xGOO = await CourtFarming_HTStakeq0DzBoD.getBeneficiaryInfo.call(addresst5OhBH0, {from: accounts[5]});
		const uint256lRKBop = await CourtFarming_HTStakeq0DzBoD.rewards.call(addressIkIW4v1, {from: accounts[3]});

		assert.equal(uint256ismrH8D, BigInt("0"))
		assert.equal(uint256zDO4U0Z, BigInt("1780"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeD9Jpiqv = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressuAOfsiC = accounts[3]
		const addressAByHCJa = accounts[1]
		const addressS7sQZo5 = await CourtFarming_HTStakeD9Jpiqv.setCourtStake.call(addressuAOfsiC, {from: accounts[0]});
		const addressRjHtKG4 = await CourtFarming_HTStakeD9Jpiqv.updateReward.call(addressAByHCJa, {from: accounts[2]});

		await expect(CourtFarming_HTStakeD9Jpiqv.setCourtStake.call(addressuAOfsiC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQjjVwqP = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uinth5CQ6Tf = BigInt("543")
		const booluqtqRBE = await CourtFarming_HTStakeQjjVwqP.stakeIncvRewards.call(uinth5CQ6Tf, {from: accounts[3]});
		const uint256sIikPDf = await CourtFarming_HTStakeQjjVwqP.blockNumber.call({from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeDz0seCW = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintKsS7aSb = BigInt("1012")
		const addressXGuGqY = accounts[3]
		const addressDaCjWjo = accounts[3]
		const uint256LPmdnEd = await CourtFarming_HTStakeDz0seCW.getCurrentTime.call({from: accounts[3]});
		const uint256KTfQDVL = await CourtFarming_HTStakeDz0seCW.stake.call(uintKsS7aSb, {from: accounts[3]});
		const uint256xEJFxSr = await CourtFarming_HTStakeDz0seCW.blockNumber.call({from: accounts[4]});
		const uint256t1lHFNM = await CourtFarming_HTStakeDz0seCW.balanceOf.call(addressXGuGqY, {from: accounts[2]});
		const addressoZmc0PR = await CourtFarming_HTStakeDz0seCW.setCourtStake.call(addressDaCjWjo, {from: accounts[5]});
		const uint256CZDYjo1 = await CourtFarming_HTStakeDz0seCW.blockNumber.call({from: accounts[5]});

		assert.equal(uint256LPmdnEd, BigInt("1630201549"))
		await expect(CourtFarming_HTStakeDz0seCW.stake.call(uintKsS7aSb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecmHfokI = await CourtFarming_HTStake.new({from: accounts[1]});
		const addresstbvTrVT = accounts[3]
		const uintkRf8SDZ = BigInt("688")
		const uint256qDmcVDD = await CourtFarming_HTStakecmHfokI.incvRewardInfo.call({from: accounts[3]});
		const addressolj6dBI = await CourtFarming_HTStakecmHfokI.updateReward.call(addresstbvTrVT, {from: accounts[1]});
		const boolWAbaei = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uintkRf8SDZ, {from: accounts[4]});

		assert.equal(boolWAbaei, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNwMjpL7 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressNyD4LZK = accounts[4]
		const addressELOOeDM = accounts[0]
		const addressCkISSa = accounts[3]
		const uint256EnuxVvz = await CourtFarming_HTStakeNwMjpL7.incvRewardClaim.call({from: accounts[1]});
		const addressD7APKdk = await CourtFarming_HTStakeNwMjpL7.setCourtStake.call(addressNyD4LZK, {from: accounts[2]});
		const uint256s9cwG5l = await CourtFarming_HTStakeNwMjpL7.balanceOf.call(addressELOOeDM, {from: accounts[3]});
		const uint256aDW2Cxi = await CourtFarming_HTStakeNwMjpL7.rewards.call(addressCkISSa, {from: accounts[1]});

		assert.equal(uint256EnuxVvz, BigInt("0"))
		await expect(CourtFarming_HTStakeNwMjpL7.setCourtStake.call(addressNyD4LZK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakesjtJJOc = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintWWKMqN = BigInt("1591")
		const uintXM4K1bR = BigInt("1224")
		const uintafidiuO = BigInt("1903")
		const addressbe7Uv9W = "0x0000000000000000000000000000000000000001"
		await CourtFarming_HTStakesjtJJOc.changeStakeParameters.call(uintafidiuO, uintXM4K1bR, uintWWKMqN, {from: accounts[0]});
		const addressTIz705I = await CourtFarming_HTStakesjtJJOc.setCourtStake.call(addressbe7Uv9W, {from: accounts[4]});
		const uint256wJHVxU = await CourtFarming_HTStakesjtJJOc.getCurrentTime.call({from: accounts[3]});
		const uint256r3Us6GX = await CourtFarming_HTStakesjtJJOc.getCurrentTime.call({from: accounts[4]});

		await expect(CourtFarming_HTStakesjtJJOc.changeStakeParameters.call(uintafidiuO, uintXM4K1bR, uintWWKMqN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecmHfokI = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressVYsy48B = accounts[1]
		const addressZR1GUZh = accounts[4]
		const addressvvFce5i = accounts[0]
		const uintj77ZHUa = BigInt("688")
		const uint256qDmcVDD = await CourtFarming_HTStakecmHfokI.incvRewardInfo.call({from: accounts[3]});
		const uint256ztbBTmW = await CourtFarming_HTStakecmHfokI.balanceOf.call(addressVYsy48B, {from: accounts[1]});
		const addressolj6dBI = await CourtFarming_HTStakecmHfokI.updateReward.call(addressZR1GUZh, {from: accounts[1]});
		const addressWOEh2D3 = await CourtFarming_HTStakecmHfokI.getBeneficiaryInfo.call(addressvvFce5i, {from: accounts[1]});
		const boolWAbaei = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uintj77ZHUa, {from: accounts[4]});
		const uint256F4BUx0R = await CourtFarming_HTStakecmHfokI.blockNumber.call({from: accounts[2]});

		assert.equal(boolWAbaei, false)
		assert.equal(uint256F4BUx0R, BigInt("1780"))
		assert.equal(uint256ztbBTmW, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekeX0mvj = await CourtFarming_HTStake.new({from: accounts[4]});
		const uint9kYeSH = BigInt("638")
		const uintTSQru2J = BigInt("809")
		const uintb8bvjHR = BigInt("695")
		const uinthDDYnck = BigInt("709")
		const uint256z1IWF4w = await CourtFarming_HTStakekeX0mvj.lastUpdateBlock.call({from: accounts[1]});
		const uint256uGAlUPi = await CourtFarming_HTStakekeX0mvj.incvRewardClaim.call({from: accounts[3]});
		const boolJ11wc0t = await CourtFarming_HTStakekeX0mvj.stakeIncvRewards.call(uint9kYeSH, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakekeX0mvj.changeStakeParameters.call(uinthDDYnck, uintb8bvjHR, uintTSQru2J, {from: accounts[3]});

		assert.equal(boolJ11wc0t, false)
		assert.equal(uint256uGAlUPi, BigInt("0"))
		assert.equal(uint256z1IWF4w, BigInt("1780"))
		await expect(CourtFarming_HTStakekeX0mvj.changeStakeParameters.call(uinthDDYnck, uintb8bvjHR, uintTSQru2J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecmHfokI = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintjwDxQGT = BigInt("910")
		const addressgV7ZUuO = accounts[4]
		const uint8TJUCx = BigInt("688")
		const uint256qDmcVDD = await CourtFarming_HTStakecmHfokI.incvRewardInfo.call({from: accounts[3]});
		const uint256AC31ua1 = await CourtFarming_HTStakecmHfokI.expectedRewardsToday.call(uintjwDxQGT, {from: accounts[2]});
		const uint256xz1BUIx = await CourtFarming_HTStakecmHfokI.totalStaked.call({from: accounts[1]});
		const addressolj6dBI = await CourtFarming_HTStakecmHfokI.updateReward.call(addressgV7ZUuO, {from: accounts[1]});
		const boolWAbaei = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uint8TJUCx, {from: accounts[4]});

		assert.equal(boolWAbaei, false)
		assert.equal(uint256xz1BUIx, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeq0DzBoD = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolJoE6IuC = true
		const uintOWKrTNR = BigInt("1455")
		const addressYKnJzpa = accounts[4]
		const addressRWZo7N5 = "0x0000000000000000000000000000000000000001"
		const addressqvgbBaU = accounts[1]
		const uint256ismrH8D = await CourtFarming_HTStakeq0DzBoD.totalStaked.call({from: accounts[2]});
		const uint256PELGOk = await CourtFarming_HTStakeq0DzBoD.unstake.call(uintOWKrTNR, boolJoE6IuC, {from: accounts[4]});
		const uint256zDO4U0Z = await CourtFarming_HTStakeq0DzBoD.blockNumber.call({from: accounts[0]});
		const uint256CgjIZkh = await CourtFarming_HTStakeq0DzBoD.rewards.call(addressYKnJzpa, {from: accounts[2]});
		const addressV4xGOO = await CourtFarming_HTStakeq0DzBoD.getBeneficiaryInfo.call(addressRWZo7N5, {from: accounts[5]});
		const uint256lRKBop = await CourtFarming_HTStakeq0DzBoD.rewards.call(addressqvgbBaU, {from: accounts[3]});

		assert.equal(uint256ismrH8D, BigInt("0"))
		await expect(CourtFarming_HTStakeq0DzBoD.unstake.call(uintOWKrTNR, boolJoE6IuC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecmHfokI = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressTXBoSZx = accounts[2]
		const addresswx7XBFM = accounts[4]
		const uintjbCcvNC = BigInt("688")
		const uint256qDmcVDD = await CourtFarming_HTStakecmHfokI.incvRewardInfo.call({from: accounts[3]});
		const addressQYglRKh = await CourtFarming_HTStakecmHfokI.setCourtStake.call(addressTXBoSZx, {from: accounts[1]});
		const addressolj6dBI = await CourtFarming_HTStakecmHfokI.updateReward.call(addresswx7XBFM, {from: accounts[1]});
		const uint256IbBpPp8 = await CourtFarming_HTStakecmHfokI.incvRewardClaim.call({from: accounts[0]});
		const uint256OZZ04H7 = await CourtFarming_HTStakecmHfokI.blockNumber.call({from: accounts[4]});
		const boolWAbaei = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uintjbCcvNC, {from: accounts[4]});

		await expect(CourtFarming_HTStakecmHfokI.setCourtStake.call(addressTXBoSZx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecmHfokI = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressmW8zYm8 = accounts[0]
		const uintopnSH3n = BigInt("1780")
		const uintvlmVJr = BigInt("51")
		const uintg5cPfa5 = BigInt("1290")
		const addressM3JE3tu = accounts[3]
		const uinteb7Jzrw = BigInt("688")
		const uint256IIy5Au3 = await CourtFarming_HTStakecmHfokI.rewards.call(addressmW8zYm8, {from: accounts[5]});
		const uint256Jg85fNf = await CourtFarming_HTStakecmHfokI._stakeParametrsCalculation.call(uintg5cPfa5, uintvlmVJr, uintopnSH3n, {from: accounts[0]});
		const uint256qDmcVDD = await CourtFarming_HTStakecmHfokI.incvRewardInfo.call({from: accounts[3]});
		const addressolj6dBI = await CourtFarming_HTStakecmHfokI.updateReward.call(addressM3JE3tu, {from: accounts[1]});
		const boolWAbaei = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uinteb7Jzrw, {from: accounts[4]});

		await expect(CourtFarming_HTStakecmHfokI._stakeParametrsCalculation.call(uintg5cPfa5, uintvlmVJr, uintopnSH3n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeq0DzBoD = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressw8Xkfjh = accounts[5]
		const addressECPYFQR = accounts[4]
		const uintieA4FL2 = BigInt("194")
		const addressxGHjIfx = "0x00000000000000000000000000000000000000-1"
		const addressjeadRUM = accounts[2]
		const uint256ismrH8D = await CourtFarming_HTStakeq0DzBoD.totalStaked.call({from: accounts[2]});
		const uint256bPAdbsA = await CourtFarming_HTStakeq0DzBoD.incvRewardClaim.call({from: accounts[2]});
		const addresscbx0kIY = await CourtFarming_HTStakeq0DzBoD.updateReward.call(addressw8Xkfjh, {from: accounts[0]});
		const uint256CgjIZkh = await CourtFarming_HTStakeq0DzBoD.rewards.call(addressECPYFQR, {from: accounts[2]});
		const boolRoksycG = await CourtFarming_HTStakeq0DzBoD.stakeIncvRewards.call(uintieA4FL2, {from: accounts[5]});
		const addressV4xGOO = await CourtFarming_HTStakeq0DzBoD.getBeneficiaryInfo.call(addressxGHjIfx, {from: accounts[5]});
		const uint256lRKBop = await CourtFarming_HTStakeq0DzBoD.rewards.call(addressjeadRUM, {from: accounts[3]});

		assert.equal(boolRoksycG, false)
		assert.equal(uint256bPAdbsA, BigInt("0"))
		assert.equal(uint256ismrH8D, BigInt("0"))
		await expect(CourtFarming_HTStakeq0DzBoD.getBeneficiaryInfo.call(addressxGHjIfx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecmHfokI = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintO3YURlt = BigInt("0")
		const uintzoBAEwB = BigInt("1504")
		const boolHI2jZl6 = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uintO3YURlt, {from: accounts[0]});
		const boolrzAg0BT = await CourtFarming_HTStakecmHfokI.stakeIncvRewards.call(uintzoBAEwB, {from: accounts[1]});
		const uint256qDmcVDD = await CourtFarming_HTStakecmHfokI.incvRewardInfo.call({from: accounts[3]});

		assert.equal(boolHI2jZl6, false)
		assert.equal(boolrzAg0BT, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekeX0mvj = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintKlOhVCd = BigInt("0")
		const uint256Ans03Ii = await CourtFarming_HTStakekeX0mvj.stake.call(uintKlOhVCd, {from: accounts[0]});
		const uint256fUpuoq2 = await CourtFarming_HTStakekeX0mvj.getCurrentTime.call({from: accounts[3]});
		const uint256RyftOWI = await CourtFarming_HTStakekeX0mvj.totalStaked.call({from: accounts[3]});
		const uint256fRWL4LL = await CourtFarming_HTStakekeX0mvj.incvRewardClaim.call({from: accounts[0]});

		assert.equal(uint256RyftOWI, BigInt("0"))
		assert.equal(uint256fRWL4LL, BigInt("0"))
		assert.equal(uint256fUpuoq2, BigInt("1630201558"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekQPVyk8 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressbWK44dA = accounts[0]
		const addressuLjyL80 = accounts[5]
		const booluwf8i5 = false
		const uintD1vtqt = BigInt("0")
		const addresskZBVHxM = await CourtFarming_HTStakekQPVyk8.getBeneficiaryInfo.call(addressbWK44dA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RxYAfY = await CourtFarming_HTStakekQPVyk8.rewards.call(addressuLjyL80, {from: accounts[3]});
		const uint256S5X9MeR = await CourtFarming_HTStakekQPVyk8.unstake.call(uintD1vtqt, booluwf8i5, {from: accounts[1]});
	});
})