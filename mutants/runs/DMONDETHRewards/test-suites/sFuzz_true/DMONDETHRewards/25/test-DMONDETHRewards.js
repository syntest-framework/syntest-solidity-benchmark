const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsi6PgNEU = await DMONDETHRewards.new({from: accounts[3]});
		const uintnJDbfbR = BigInt("922")
		const uintELr7XmH = BigInt("1102")
		const uint256T0LYCEN = await DMONDETHRewardsi6PgNEU.notifyRewardAmount.call(uintnJDbfbR, {from: accounts[1]});
		const boolyf7iaeF = await DMONDETHRewardsi6PgNEU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256a2l5skM = await DMONDETHRewardsi6PgNEU.withdraw.call(uintELr7XmH, {from: accounts[2]});
		await DMONDETHRewardsi6PgNEU.checkStart.call({from: accounts[0]});

		await expect(DMONDETHRewardsi6PgNEU.notifyRewardAmount.call(uintnJDbfbR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsyERCrLg = await DMONDETHRewards.new({from: accounts[5]});
		const uintCkxGwDw = BigInt("988")
		const uint9FfVEQ = BigInt("1859")
		const addressHyvVNvH = accounts[0]
		const uintM1Wx64V = BigInt("349")
		const uint256IQCY8k2 = await DMONDETHRewardsyERCrLg.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IAXfjg = await DMONDETHRewardsyERCrLg.notifyRewardAmount.call(uintCkxGwDw, {from: accounts[2]});
		const uint256DpHYLL = await DMONDETHRewardsyERCrLg.setStartTime.call(uint9FfVEQ, {from: accounts[5]});
		const addressRmbaYyF = await DMONDETHRewardsyERCrLg.transferOwnership.call(addressHyvVNvH, {from: accounts[0]});
		const uint256fNUrZSm = await DMONDETHRewardsyERCrLg.stake.call(uintM1Wx64V, {from: accounts[4]});

		assert.equal(uint256IQCY8k2, BigInt("0"))
		await expect(DMONDETHRewardsyERCrLg.notifyRewardAmount.call(uintCkxGwDw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsL43eZGP = await DMONDETHRewards.new({from: accounts[5]});
		const uintnOn490M = BigInt("399")
		const uintgiGrmTS = BigInt("1859")
		const addressVRkz8u = accounts[3]
		const addressSq4SQtp = accounts[0]
		const uint256aNPz5Q8 = await DMONDETHRewardsL43eZGP.withdraw.call(uintnOn490M, {from: accounts[1]});
		const uint256maAb6p = await DMONDETHRewardsL43eZGP.stake.call(uintgiGrmTS, {from: accounts[5]});
		const addressn4wDcEv = await DMONDETHRewardsL43eZGP.setStakeAddress.call(addressVRkz8u, {from: accounts[5]});
		const addressil8hqtp = await DMONDETHRewardsL43eZGP.updateReward.call(addressSq4SQtp, {from: accounts[4]});
		const uint256qH1UK62 = await DMONDETHRewardsL43eZGP.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(DMONDETHRewardsL43eZGP.withdraw.call(uintnOn490M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsUNuOdcM = await DMONDETHRewards.new({from: accounts[5]});
		const addressUL9vM4b = accounts[2]
		const addressA5RrpW = accounts[3]
		const addressqWEJUgn = accounts[1]
		await DMONDETHRewardsUNuOdcM.onlyRewardDistribution.call({from: accounts[1]});
		const uint256m120ThC = await DMONDETHRewardsUNuOdcM.rewardPerToken.call({from: accounts[3]});
		const addressXrtIAeG = await DMONDETHRewardsUNuOdcM.setStakeAddress.call(addressUL9vM4b, {from: accounts[4]});
		const uint256dXktqob = await DMONDETHRewardsUNuOdcM.earned.call(addressA5RrpW, {from: accounts[1]});
		const addressS3dUuFp = await DMONDETHRewardsUNuOdcM.setStakeAddress.call(addressqWEJUgn, {from: accounts[3]});

		await expect(DMONDETHRewardsUNuOdcM.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslRrThZz = await DMONDETHRewards.new({from: accounts[3]});
		const uintiBU9lQ = BigInt("411")
		await DMONDETHRewardslRrThZz.getReward.call({from: accounts[3]});
		const uint256CL9NIx8 = await DMONDETHRewardslRrThZz.stake.call(uintiBU9lQ, {from: accounts[2]});
		await DMONDETHRewardslRrThZz.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LLHUvE8 = await DMONDETHRewardslRrThZz.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(DMONDETHRewardslRrThZz.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsKuonRob = await DMONDETHRewards.new({from: accounts[4]});
		const addressOyMsCA = accounts[0]
		const addresswbLWKSC = await DMONDETHRewardsKuonRob.owner.call({from: accounts[2]});
		await DMONDETHRewardsKuonRob.onlyRewardDistribution.call({from: accounts[5]});
		const addressCrLDAbM = await DMONDETHRewardsKuonRob.setStakeAddress.call(addressOyMsCA, {from: accounts[2]});

		assert.equal(addresswbLWKSC, 0x6285F5F630063EcECb663892d1C6aD114b39f552)
		await expect(DMONDETHRewardsKuonRob.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfApnLN3 = await DMONDETHRewards.new({from: accounts[1]});
		const uintup5hsVn = BigInt("1779")
		const addresscoY6eDk = accounts[3]
		const uint256hJjIvTY = await DMONDETHRewardsfApnLN3.remainingReward.call({from: accounts[1]});
		await DMONDETHRewardsfApnLN3.exit.call({from: accounts[0]});
		const uint256yPnIOmd = await DMONDETHRewardsfApnLN3.lastTimeRewardApplicable.call({from: accounts[1]});
		await DMONDETHRewardsfApnLN3.exit.call({from: accounts[0]});
		const uint256VFE0gZt = await DMONDETHRewardsfApnLN3.notifyRewardAmount.call(uintup5hsVn, {from: accounts[2]});
		const addressbX6Ig5j = await DMONDETHRewardsfApnLN3.setRewardDistribution.call(addresscoY6eDk, {from: accounts[1]});

		await expect(DMONDETHRewardsfApnLN3.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsq5NzPix = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXTYNsiU = BigInt("17")
		const uintVF0IHQ = BigInt("1960")
		await DMONDETHRewardsq5NzPix.getReward.call({from: accounts[2]});
		const uint256d9yzNc = await DMONDETHRewardsq5NzPix.stake.call(uintXTYNsiU, {from: accounts[5]});
		const uint256c5i1bEk = await DMONDETHRewardsq5NzPix.withdraw.call(uintVF0IHQ, {from: accounts[1]});
		await DMONDETHRewardsq5NzPix.exit.call({from: accounts[5]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslRrThZz = await DMONDETHRewards.new({from: accounts[3]});
		const addressEIINYB7 = accounts[0]
		const uintSkm4Ag8 = BigInt("1718")
		const uintraMuXo1 = BigInt("411")
		const addressp3yYPJ0 = await DMONDETHRewardslRrThZz.setRewardDistribution.call(addressEIINYB7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hqbi03 = await DMONDETHRewardslRrThZz.stake.call(uintSkm4Ag8, {from: accounts[5]});
		await DMONDETHRewardslRrThZz.getReward.call({from: accounts[3]});
		const uint256CL9NIx8 = await DMONDETHRewardslRrThZz.stake.call(uintraMuXo1, {from: accounts[2]});
		const uint256LLHUvE8 = await DMONDETHRewardslRrThZz.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(DMONDETHRewardslRrThZz.setRewardDistribution.call(addressEIINYB7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqqfZ15x = await DMONDETHRewards.new({from: accounts[5]});
		const uintM8HAdKF = BigInt("1183")
		const uintuCwYcWM = BigInt("1770")
		const uintb6PuxQC = BigInt("406")
		await DMONDETHRewardsqqfZ15x.exit.call({from: accounts[1]});
		const uint256A6yqpNo = await DMONDETHRewardsqqfZ15x.setStartTime.call(uintM8HAdKF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RC0DhJH = await DMONDETHRewardsqqfZ15x.withdraw.call(uintuCwYcWM, {from: accounts[2]});
		const uint256YoApAEI = await DMONDETHRewardsqqfZ15x.withdraw.call(uintb6PuxQC, {from: accounts[0]});

		await expect(DMONDETHRewardsqqfZ15x.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqqfZ15x = await DMONDETHRewards.new({from: accounts[5]});
		const addressK9uH0P1 = accounts[2]
		const uintQm6Ch6 = BigInt("441")
		await DMONDETHRewardsqqfZ15x.renounceOwnership.call({from: accounts[5]});
		const uint256RnkCZ96 = await DMONDETHRewardsqqfZ15x.earned.call(addressK9uH0P1, {from: accounts[1]});
		await DMONDETHRewardsqqfZ15x.onlyRewardDistribution.call({from: accounts[1]});
		const uint256YoApAEI = await DMONDETHRewardsqqfZ15x.withdraw.call(uintQm6Ch6, {from: accounts[0]});

		await expect(DMONDETHRewardsqqfZ15x.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqqfZ15x = await DMONDETHRewards.new({from: accounts[5]});
		const addressCgcr5Ke = accounts[1]
		const uintyN9L8U2 = BigInt("425")
		const addressSZTarrZ = await DMONDETHRewardsqqfZ15x.setStakeAddress.call(addressCgcr5Ke, {from: accounts[5]});
		const uint256YoApAEI = await DMONDETHRewardsqqfZ15x.withdraw.call(uintyN9L8U2, {from: accounts[0]});

		await expect(DMONDETHRewardsqqfZ15x.withdraw.call(uintyN9L8U2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqqfZ15x = await DMONDETHRewards.new({from: accounts[5]});
		const uintAIW4AsD = BigInt("1040")
		const addressakc3Ta2 = accounts[3]
		const uintHLqyTeK = BigInt("407")
		const uint256KdNNAn = await DMONDETHRewardsqqfZ15x.setStartTime.call(uintAIW4AsD, {from: accounts[5]});
		const addressWbAVJ1Q = await DMONDETHRewardsqqfZ15x.transferOwnership.call(addressakc3Ta2, {from: accounts[2]});
		const uint256YoApAEI = await DMONDETHRewardsqqfZ15x.withdraw.call(uintHLqyTeK, {from: accounts[0]});
		await DMONDETHRewardsqqfZ15x.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsqqfZ15x.transferOwnership.call(addressakc3Ta2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsiTMq7Z6 = await DMONDETHRewards.new({from: accounts[0]});
		const addressbD9cUv8 = accounts[1]
		const addressUbB9Ixq = accounts[1]
		const addressCXr3LPk = await DMONDETHRewardsiTMq7Z6.setRewardDistribution.call(addressbD9cUv8, {from: accounts[0]});
		const uint256GmgGukh = await DMONDETHRewardsiTMq7Z6.rewardPerToken.call({from: accounts[4]});
		const uint256ZKWz2f = await DMONDETHRewardsiTMq7Z6.earned.call(addressUbB9Ixq, {from: accounts[4]});
		await DMONDETHRewardsiTMq7Z6.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256GmgGukh, BigInt("0"))
		assert.equal(uint256ZKWz2f, BigInt("0"))
		await expect(DMONDETHRewardsiTMq7Z6.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslM8cLH0 = await DMONDETHRewards.new({from: accounts[0]});
		const uintBex5dPy = BigInt("1440")
		const addressrKcx1T9 = accounts[1]
		const uint3ZaskZ = BigInt("728")
		const uint256oAqHq9g = await DMONDETHRewardslM8cLH0.notifyRewardAmount.call(uintBex5dPy, {from: accounts[0]});
		const uint256PFzgvLm = await DMONDETHRewardslM8cLH0.earned.call(addressrKcx1T9, {from: accounts[0]});
		const uint256yj4YLJh = await DMONDETHRewardslM8cLH0.rewardPerToken.call({from: accounts[5]});
		const uint256jviZrQC = await DMONDETHRewardslM8cLH0.withdraw.call(uint3ZaskZ, {from: accounts[1]});

		assert.equal(uint256PFzgvLm, BigInt("0"))
		assert.equal(uint256yj4YLJh, BigInt("0"))
		await expect(DMONDETHRewardslM8cLH0.withdraw.call(uint3ZaskZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})