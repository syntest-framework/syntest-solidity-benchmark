const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressv8McilE = accounts[1]
		const addressc5eW9xe = accounts[0]
		const addressMWTuFPb = accounts[5]
		const BACMARSLPTOKENPoolclfIHoQ = await BACMARSLPTOKENPool.new(addressv8McilE, addressc5eW9xe, addressMWTuFPb, {from: accounts[0]});
		const addressvKZUsl4 = accounts[5]
		const addressVhigXA1 = accounts[0]
		const addressTH5KMHy = "0x0000000000000000000000000000000000000001"
//		const address7uY50M = await BACMARSLPTOKENPoolclfIHoQ.updateReward.call(addressvKZUsl4, {from: accounts[5]});
//		const addressvOq2DTg = await BACMARSLPTOKENPoolclfIHoQ.updateReward.call(addressVhigXA1, {from: accounts[4]});
//		const uint8OQClD6V = await BACMARSLPTOKENPoolclfIHoQ.decimals.call({from: accounts[0]});
//		const uint256aN85BD0 = await BACMARSLPTOKENPoolclfIHoQ.balanceOf.call(addressTH5KMHy, {from: accounts[1]});
//		const stringeDuTlpk = await BACMARSLPTOKENPoolclfIHoQ.symbol.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolclfIHoQ.exit.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolclfIHoQ.updateReward.call(addressvKZUsl4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNMHqGhg = "eSBHqMvdBrBi9rLCr1XzoyrvRW7jDdxkPrQZTdvpKcW7ug5y2"
		const stringrpcmHt8 = "EQbP0TajQsBpq6338zcP9uuckqbs4YMXENQYEKmFsBKad40qVKCmW3B75kI1vqap4Nha2XYoNXN"
		const uintOVsOzNT = BigInt("195")
		const BACMARSLPTOKENPoolJuPz9O4 = await BACMARSLPTOKENPool.new(stringNMHqGhg, stringrpcmHt8, uintOVsOzNT, {from: accounts[2]});
		const byteQS1ns1a = "0x1d1302131814181d07090d070906070b10140a181f18080c040a090204021701"
		const byteAaGMvfh = "0x091e1302021c151b0c0e031417101f161119161a08060c06111b20060c170c0b"
		const uintyPL8sY = BigInt("92")
		const uintbeUZ1n8 = BigInt("1923")
		const uintLrgQa2N = BigInt("1347")
		const uintOPZ8SZO = BigInt("404")
		const addressOJr60tz = accounts[5]
		const uintWYx2qXw = BigInt("1731")
		const uint256aylXaGq = await BACMARSLPTOKENPoolJuPz9O4.stakeWithPermit.call(uintLrgQa2N, uintbeUZ1n8, uintyPL8sY, byteAaGMvfh, byteQS1ns1a, {from: accounts[4]});
		const uint256x02sms1 = await BACMARSLPTOKENPoolJuPz9O4.notifyRewardAmount.call(uintOPZ8SZO, {from: accounts[4]});
		const uint256YjH40M = await BACMARSLPTOKENPoolJuPz9O4.earned.call(addressOJr60tz, {from: accounts[3]});
		await BACMARSLPTOKENPoolJuPz9O4.nonReentrant.call({from: accounts[3]});
		const uint256Npjenvd = await BACMARSLPTOKENPoolJuPz9O4.withdraw.call(uintWYx2qXw, {from: accounts[5]});
		const uint8VQ9sNm = await BACMARSLPTOKENPoolJuPz9O4.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressFcqzu7p = accounts[1]
		const addressE8P9gW8 = accounts[2]
		const addressjWZCzDL = accounts[4]
		const BACMARSLPTOKENPoollBWDVoU = await BACMARSLPTOKENPool.new(addressFcqzu7p, addressE8P9gW8, addressjWZCzDL, {from: accounts[0]});
		const uintknIQK0n = BigInt("1146")
		const uint256WQvEmsv = await BACMARSLPTOKENPoollBWDVoU.totalSupply.call({from: accounts[5]});
//		const uint8IKgy7QT = await BACMARSLPTOKENPoollBWDVoU.decimals.call({from: accounts[0]});
//		const uint256ROM60fP = await BACMARSLPTOKENPoollBWDVoU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256XTKLbsG = await BACMARSLPTOKENPoollBWDVoU.stake.call(uintknIQK0n, {from: accounts[0]});
//		const uint256i1MbLkV = await BACMARSLPTOKENPoollBWDVoU.getRewardForDuration.call({from: accounts[0]});

		assert.equal(uint256WQvEmsv, BigInt("0"))
		await expect(BACMARSLPTOKENPoollBWDVoU.decimals.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresshpSxSO3 = accounts[0]
		const addressrfoVwnl = accounts[3]
		const addressWU89Qi = accounts[5]
		const BACMARSLPTOKENPoolyRCeunf = await BACMARSLPTOKENPool.new(addresshpSxSO3, addressrfoVwnl, addressWU89Qi, {from: "0x0000000000000000000000000000000000000001"});
		const address8Euuhv = accounts[4]
		const addressVXa9KcR = accounts[1]
		await BACMARSLPTOKENPoolyRCeunf.getReward.call({from: accounts[2]});
		const uint256uHRpnzl = await BACMARSLPTOKENPoolyRCeunf.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolyRCeunf.exit.call({from: accounts[1]});
		const addressuppMGF = await BACMARSLPTOKENPoolyRCeunf.updateReward.call(address8Euuhv, {from: accounts[3]});
		const uint256yMydrN = await BACMARSLPTOKENPoolyRCeunf.rewardPerToken.call({from: accounts[4]});
		const uint256b6k39L3 = await BACMARSLPTOKENPoolyRCeunf.earned.call(addressVXa9KcR, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYtPK41 = "MDHPk2X2aNes6Iwi7Ts5MFMa4IWqxczjsVjLkT2zYY6E2jqF5VUm41wGp4ets816onxwlKiBsRVbOUOdYOLyh"
		const stringA0AralW = "7QdYjk2f1T6UwXWguu0YDxHDrHt8iv8txZAOU"
		const uintgQWELY = BigInt("86")
		const BACMARSLPTOKENPoolp0uuDVP = await BACMARSLPTOKENPool.new(stringYtPK41, stringA0AralW, uintgQWELY, {from: accounts[2]});
		const uintKYQgLmV = BigInt("1713")
		const uint256KbfvLgm = await BACMARSLPTOKENPoolp0uuDVP.withdraw.call(uintKYQgLmV, {from: accounts[0]});
		await BACMARSLPTOKENPoolp0uuDVP.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAQtv5bS = "QoK7U8DCuAEHgIod1mZEATd"
		const stringd1SA8d = "dXIvKjovM65mwkHpTil3M0QITrdebnlmuM8k3lC0b2uC5fgY4TkR"
		const uintTgdudgp = BigInt("209")
		const BACMARSLPTOKENPoolK9ngXSf = await BACMARSLPTOKENPool.new(stringAQtv5bS, stringd1SA8d, uintTgdudgp, {from: accounts[4]});
		const uintvrbT5wJ = BigInt("1945")
		await BACMARSLPTOKENPoolK9ngXSf.nonReentrant.call({from: accounts[2]});
		const uint256FJaGl21 = await BACMARSLPTOKENPoolK9ngXSf.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolK9ngXSf.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bGXiPH = await BACMARSLPTOKENPoolK9ngXSf.withdraw.call(uintvrbT5wJ, {from: accounts[3]});
		const stringFodVtoH = await BACMARSLPTOKENPoolK9ngXSf.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSXpQf7N = accounts[5]
		const addresscK1Mqqd = accounts[3]
		const addresswnGPIWU = accounts[0]
		const BACMARSLPTOKENPoolDvNjYX6 = await BACMARSLPTOKENPool.new(addressSXpQf7N, addresscK1Mqqd, addresswnGPIWU, {from: accounts[0]});
		const uintOkg8sK = BigInt("477")
//		await BACMARSLPTOKENPoolDvNjYX6.exit.call({from: accounts[4]});
//		const uint256UPs5Qn = await BACMARSLPTOKENPoolDvNjYX6.getRewardForDuration.call({from: accounts[4]});
//		const uint256IxqIB22 = await BACMARSLPTOKENPoolDvNjYX6.stake.call(uintOkg8sK, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolDvNjYX6.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringD4VGiP6 = "TyYiOTvH9unylF1RtYFGkuLxDCy39N9YhcdQ0n6vzQdHduNflBAwm1NuWdb7"
		const stringBbRa6Ym = "e2M"
		const uintq0ZwPyf = BigInt("47")
		const BACMARSLPTOKENPoolPRnqoW = await BACMARSLPTOKENPool.new(stringD4VGiP6, stringBbRa6Ym, uintq0ZwPyf, {from: accounts[0]});
		const byteZDjcnqP = "0x1b110316170e1910140b09131b161218090601021f13081e02201b0d1f1e0f20"
		const bytema8nmC = "0x11201b040d04071a0b01040a1c060a101a0c1e0806140b030604131f1a0b1710"
		const uintLYEGIg7 = BigInt("112")
		const uintgN5NFX2 = BigInt("480")
		const uintmUr34vu = BigInt("299")
		const uint256Sa6AvWG = await BACMARSLPTOKENPoolPRnqoW.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint8j1ucvfi = await BACMARSLPTOKENPoolPRnqoW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolPRnqoW.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256gsibLV = await BACMARSLPTOKENPoolPRnqoW.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256QiVaCZ = await BACMARSLPTOKENPoolPRnqoW.stakeWithPermit.call(uintmUr34vu, uintgN5NFX2, uintLYEGIg7, bytema8nmC, byteZDjcnqP, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresseDFNtL = accounts[3]
		const addressqTDQK6T = accounts[3]
		const addresse0JHBHz = accounts[5]
		const BACMARSLPTOKENPoolZF8ACu6 = await BACMARSLPTOKENPool.new(addresseDFNtL, addressqTDQK6T, addresse0JHBHz, {from: accounts[3]});
		const bytexTjKvKW = "0x0708100315191a0e1b0514040e1a1813180f1610111e16020e00071b19190c0b"
		const byteiRY9KqB = "0x19080204091c1b0d12080d1e161d0206070603080e16000b16121a0e200c0d19"
		const uintXQv4pKX = BigInt("250")
		const uinturqaMSw = BigInt("1897")
		const uintEXZpW3k = BigInt("76")
		const addresswb62Xmt = accounts[1]
//		const uint256hfycPfs = await BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintEXZpW3k, uinturqaMSw, uintXQv4pKX, byteiRY9KqB, bytexTjKvKW, {from: accounts[3]});
//		const addressADkLntT = await BACMARSLPTOKENPoolZF8ACu6.updateReward.call(addresswb62Xmt, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintEXZpW3k, uinturqaMSw, uintXQv4pKX, byteiRY9KqB, bytexTjKvKW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssGbEak2 = accounts[3]
		const addressAhvUKt = accounts[3]
		const addressEw1jDUz = accounts[5]
		const BACMARSLPTOKENPoolZF8ACu6 = await BACMARSLPTOKENPool.new(addresssGbEak2, addressAhvUKt, addressEw1jDUz, {from: accounts[3]});
		const byteRU1Yvsr = "0x0708100315191a0e1b0514040e1a1813180f1610111e16020e00071b19190c0b"
		const bytecIXIUQT = "0x19080204091c1b0d12ffffffff0d1e161d0206070603080e16000b16121a0e200c0d19"
		const uintMfSR8Ul = BigInt("250")
		const uintRg2LZIb = BigInt("1897")
		const uintpg3aqcg = BigInt("76")
		const addressHlwNVSM = accounts[1]
		const uinto8ohAe = BigInt("263")
//		const uint256hfycPfs = await BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintpg3aqcg, uintRg2LZIb, uintMfSR8Ul, bytecIXIUQT, byteRU1Yvsr, {from: accounts[3]});
//		const addressADkLntT = await BACMARSLPTOKENPoolZF8ACu6.updateReward.call(addressHlwNVSM, {from: accounts[2]});
//		const uint256YzUCQFe = await BACMARSLPTOKENPoolZF8ACu6.withdraw.call(uinto8ohAe, {from: accounts[3]});
//		await BACMARSLPTOKENPoolZF8ACu6.nonReentrant.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolZF8ACu6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintpg3aqcg, uintRg2LZIb, uintMfSR8Ul, bytecIXIUQT, byteRU1Yvsr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstJxNED = "0x0000000000000000000000000000000000000001"
		const addressE39bwNd = accounts[3]
		const addressatcqNJ7 = accounts[5]
		const BACMARSLPTOKENPooloW5NnLO = await BACMARSLPTOKENPool.new(addresstJxNED, addressE39bwNd, addressatcqNJ7, {from: accounts[3]});
		const uintRlIT8Un = BigInt("867")
		const uintcm3b1Y = BigInt("78")
//		const uint256fqHd5RX = await BACMARSLPTOKENPooloW5NnLO.withdraw.call(uintRlIT8Un, {from: accounts[3]});
//		const uint256yrnKeSf = await BACMARSLPTOKENPooloW5NnLO.notifyRewardAmount.call(uintcm3b1Y, {from: accounts[2]});
//		const uint8rNk5MT4 = await BACMARSLPTOKENPooloW5NnLO.decimals.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPooloW5NnLO.withdraw.call(uintRlIT8Un, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqun06NU = "ot"
		const stringfde1HQq = "tlUgIc2"
		const uintxQ3HJaL = BigInt("97")
		const BACMARSLPTOKENPoolA0dlMkp = await BACMARSLPTOKENPool.new(stringqun06NU, stringfde1HQq, uintxQ3HJaL, {from: accounts[0]});
		const addresscNoyTWQ = accounts[2]
		const byteJIX3Dv9 = "0x0f191a1309181f1d180105060b1e1a102003090b151618150b0c090d12161f19"
		const byteDMdpfi4 = "0x20081c14001d1e0d0e05101a0d100e1306090c0e0a0d0d191e0805080b11110b"
		const uintv2ihwu = BigInt("186")
		const uintV33tmt = BigInt("220")
		const uintOYDFDD = BigInt("1976")
		const uint256rSRqK1D = await BACMARSLPTOKENPoolA0dlMkp.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VIN84Jf = await BACMARSLPTOKENPoolA0dlMkp.balanceOf.call(addresscNoyTWQ, {from: accounts[4]});
		const uint256x4i4af2 = await BACMARSLPTOKENPoolA0dlMkp.stakeWithPermit.call(uintOYDFDD, uintV33tmt, uintv2ihwu, byteDMdpfi4, byteJIX3Dv9, {from: accounts[3]});
		const uint256GuIKS7f = await BACMARSLPTOKENPoolA0dlMkp.totalSupply.call({from: accounts[2]});
		const uint256cSS7FrK = await BACMARSLPTOKENPoolA0dlMkp.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressVe49svY = accounts[4]
		const addressbsYTTvE = accounts[1]
		const addressvtqcvvw = accounts[0]
		const BACMARSLPTOKENPoolMTDABG = await BACMARSLPTOKENPool.new(addressVe49svY, addressbsYTTvE, addressvtqcvvw, {from: accounts[1]});
		const uintLhzsBO3 = BigInt("735")
		const byteqV1v6d = "0x1607070907071718040a140f150d08131b1c0402040c101918100d0b1002150c"
		const byteoloxPs1 = "0x1c0b011c1113011e06060502100e1603130e10090c0f1f0c051820071b06131e"
		const uintpKa1n6X = BigInt("153")
		const uinteMnJLJk = BigInt("1665")
		const uintbLbbueb = BigInt("1631")
//		const uint256yhdDvM4 = await BACMARSLPTOKENPoolMTDABG.stake.call(uintLhzsBO3, {from: accounts[1]});
//		const uint256IgmVFTE = await BACMARSLPTOKENPoolMTDABG.stakeWithPermit.call(uintbLbbueb, uinteMnJLJk, uintpKa1n6X, byteoloxPs1, byteqV1v6d, {from: accounts[0]});
//		const uint256HvkUiXd = await BACMARSLPTOKENPoolMTDABG.getRewardForDuration.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolMTDABG.stake.call(uintLhzsBO3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressuTN82D7 = accounts[4]
		const addressnQs49Z7 = accounts[1]
		const addressUM4ontc = accounts[0]
		const BACMARSLPTOKENPoolMTDABG = await BACMARSLPTOKENPool.new(addressuTN82D7, addressnQs49Z7, addressUM4ontc, {from: accounts[1]});
		const uintTwK0qRQ = BigInt("718")
		const byteE7zeQ3L = "0x1607070907071718040a140f150d08131b1c0402040c101918100d0b1002150c"
		const byteINqWEox = "0x1c0b011c1113011e06060502100e1603130e1009100f1f0c051820071b06131e"
		const uintSwjJGGt = BigInt("153")
		const uintg1b0OoU = BigInt("1665")
		const uintODzeHTv = BigInt("1631")
		const uint256P0iKq1L = await BACMARSLPTOKENPoolMTDABG.getRewardForDuration.call({from: accounts[4]});
//		const uint256yhdDvM4 = await BACMARSLPTOKENPoolMTDABG.stake.call(uintTwK0qRQ, {from: accounts[1]});
//		const uint256IgmVFTE = await BACMARSLPTOKENPoolMTDABG.stakeWithPermit.call(uintODzeHTv, uintg1b0OoU, uintSwjJGGt, byteINqWEox, byteE7zeQ3L, {from: accounts[0]});
//		await BACMARSLPTOKENPoolMTDABG.exit.call({from: accounts[4]});
//		const uint256HvkUiXd = await BACMARSLPTOKENPoolMTDABG.getRewardForDuration.call({from: accounts[4]});

		assert.equal(uint256P0iKq1L, BigInt("0"))
		await expect(BACMARSLPTOKENPoolMTDABG.stake.call(uintTwK0qRQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwPVVzn = "IMfdrm55uQktAliPIDGYgtyfW9iYyyASYQd"
		const stringPYrZ4aE = "PzYzxjuhl7RNeZGr29FDwjR8pIxhO2DbgY31XzkAaIOrVorBuGwV9zr1m9cd6TLTRbhssHHsiQ1W8MTSAzt"
		const uintiMEiuoH = BigInt("61")
		const BACMARSLPTOKENPoolTSMH4SY = await BACMARSLPTOKENPool.new(stringwPVVzn, stringPYrZ4aE, uintiMEiuoH, {from: accounts[4]});
		const uintrPoTT4 = BigInt("1349")
		await BACMARSLPTOKENPoolTSMH4SY.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256a9rDT9X = await BACMARSLPTOKENPoolTSMH4SY.withdraw.call(uintrPoTT4, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOxtStzg = "VZudm9hO"
		const stringf71fc54 = "jCC8VeHSS"
		const uintykE4Z2R = BigInt("1")
		const BACMARSLPTOKENPoolvfazXOj = await BACMARSLPTOKENPool.new(stringOxtStzg, stringf71fc54, uintykE4Z2R, {from: accounts[5]});
		const addressCASU3Eo = accounts[3]
		const addressBmecgtf = accounts[4]
		await BACMARSLPTOKENPoolvfazXOj.exit.call({from: accounts[4]});
		const addressyhu6Onl = await BACMARSLPTOKENPoolvfazXOj.updateReward.call(addressCASU3Eo, {from: accounts[0]});
		const uint256c0qL3fj = await BACMARSLPTOKENPoolvfazXOj.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2563mZIOd = await BACMARSLPTOKENPoolvfazXOj.balanceOf.call(addressBmecgtf, {from: accounts[1]});
		const uint256Ib2Zzgv = await BACMARSLPTOKENPoolvfazXOj.totalSupply.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringthBaGCp = "lW9ZfhGjG3"
		const stringCJUTqDl = "mTzl17VprJbNtA5LAzMwt7biP1zT1Ne4hMA3fH9Gwzp"
		const uintBe5qgmt = BigInt("57")
		const BACMARSLPTOKENPoolKjSM5RQ = await BACMARSLPTOKENPool.new(stringthBaGCp, stringCJUTqDl, uintBe5qgmt, {from: accounts[4]});
		const byteDfkaqEA = "0x05160d05141b000d1b020916090a080c17160b031b200a11030a190b0113100a"
		const bytexrXh7x = "0x07071f1c18110f0304110902110c0b1b150317050a001a02171b0f080806120e"
		const uintOcYHP2 = BigInt("40")
		const uintUwN8PlO = BigInt("1374")
		const uintIutkYTZ = BigInt("1169")
		await BACMARSLPTOKENPoolKjSM5RQ.nonReentrant.call({from: accounts[1]});
		const uint256lRCzw3 = await BACMARSLPTOKENPoolKjSM5RQ.stakeWithPermit.call(uintIutkYTZ, uintUwN8PlO, uintOcYHP2, bytexrXh7x, byteDfkaqEA, {from: accounts[1]});
		await BACMARSLPTOKENPoolKjSM5RQ.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUb70tK1 = "rMn5J3yPtdJ39BvzS4gcAHRogQ9TDH5"
		const stringkrXCk2X = "nbMF01geLb8icHYWmTNkuNexT04K2VUcfwuheIDnRQ1mR6m6n5DguRB4i7h3vSxQ2"
		const uintfviL2uC = BigInt("163")
		const BACMARSLPTOKENPoolrmov8aN = await BACMARSLPTOKENPool.new(stringUb70tK1, stringkrXCk2X, uintfviL2uC, {from: accounts[3]});
		await BACMARSLPTOKENPoolrmov8aN.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPoolrmov8aN.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYKb4u0J = "ngQ41lTP5t63XqHpMAIQL"
		const stringVyg0xEK = "2Qu1XsvRgvlhSbNGscE"
		const uintmfDai9 = BigInt("20")
		const BACMARSLPTOKENPoolo3U6qUF = await BACMARSLPTOKENPool.new(stringYKb4u0J, stringVyg0xEK, uintmfDai9, {from: accounts[0]});
		const addresszGWCc2q = accounts[3]
		const uintUtQi1aG = BigInt("1275")
		const uint256GAvBbpu = await BACMARSLPTOKENPoolo3U6qUF.balanceOf.call(addresszGWCc2q, {from: accounts[1]});
		const uint256DJJRBpo = await BACMARSLPTOKENPoolo3U6qUF.notifyRewardAmount.call(uintUtQi1aG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cRoNdnq = await BACMARSLPTOKENPoolo3U6qUF.getRewardForDuration.call({from: accounts[5]});
		const uint256ZMvgg0F = await BACMARSLPTOKENPoolo3U6qUF.rewardPerToken.call({from: accounts[4]});
		const uint256WGNFEja = await BACMARSLPTOKENPoolo3U6qUF.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRQ9GC9p = "EebnWwwi529GkaloVTcUfQ7"
		const stringJJlxDDN = "gWl"
		const uintpVO1501 = BigInt("25")
		const BACMARSLPTOKENPoolWqGt9az = await BACMARSLPTOKENPool.new(stringRQ9GC9p, stringJJlxDDN, uintpVO1501, {from: accounts[1]});
		await BACMARSLPTOKENPoolWqGt9az.nonReentrant.call({from: accounts[0]});
		const uint256wKvsHDf = await BACMARSLPTOKENPoolWqGt9az.totalSupply.call({from: accounts[4]});
		const uint256Uhi3tnc = await BACMARSLPTOKENPoolWqGt9az.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKexxeGP = accounts[3]
		const addressNBE0igY = accounts[3]
		const addresscvi6orc = accounts[5]
		const BACMARSLPTOKENPoolZF8ACu6 = await BACMARSLPTOKENPool.new(addressKexxeGP, addressNBE0igY, addresscvi6orc, {from: accounts[3]});
		const bytevwcv4Fg = "0x0708100315191a0e1b0514040e1a1813180f1610111e16020e00071b19190c0b"
		const byteWXDBcA2 = "0x19080204091c1b0d12080d1e161d0206070603080e16000b16131a0e200c0d19"
		const uintUgLbwDf = BigInt("250")
		const uintwHsqji = BigInt("1897")
		const uintrPGLstC = BigInt("76")
		const uint256VQ6NZUY = await BACMARSLPTOKENPoolZF8ACu6.totalSupply.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolZF8ACu6.getReward.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolZF8ACu6.exit.call({from: accounts[0]});
//		const uint256z4NexdS = await BACMARSLPTOKENPoolZF8ACu6.getRewardForDuration.call({from: accounts[0]});
//		const uint256hfycPfs = await BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintrPGLstC, uintwHsqji, uintUgLbwDf, byteWXDBcA2, bytevwcv4Fg, {from: accounts[3]});

		assert.equal(uint256VQ6NZUY, BigInt("0"))
		await expect(BACMARSLPTOKENPoolZF8ACu6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string43LO19 = "3WnhwcpVti2XSFgdm58pFjnbjJ1Tt3TUMWSX5WBcOUqlvh1ZZfFmMzrk9GixznrnZfR3NSiv3UvGc0VbcqCfQGALBB3d"
		const stringQDM510W = "I4B3G9edJ72RnOlH9IpVXOfM0786NnT8466SMz5cBaBHbNP2C9gEdXJKOLD4RRapBND9AWIV38Ph66FCTBNHJ1FrQwlhZcnGAm"
		const uintQVn3eKb = BigInt("21")
		const BACMARSLPTOKENPooluWK0HM = await BACMARSLPTOKENPool.new(string43LO19, stringQDM510W, uintQVn3eKb, {from: accounts[5]});
		await BACMARSLPTOKENPooluWK0HM.getReward.call({from: accounts[3]});
		const uint256Q1Y29X = await BACMARSLPTOKENPooluWK0HM.rewardPerToken.call({from: accounts[5]});
		const stringQMC5EdY = await BACMARSLPTOKENPooluWK0HM.name.call({from: accounts[5]});
		await BACMARSLPTOKENPooluWK0HM.exit.call({from: accounts[0]});
		const uint256O3n45aT = await BACMARSLPTOKENPooluWK0HM.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256h6XGvsE = await BACMARSLPTOKENPooluWK0HM.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressX3rrDON = accounts[4]
		const addressAyoRdYr = accounts[1]
		const addressopeS5nh = accounts[0]
		const BACMARSLPTOKENPoolMTDABG = await BACMARSLPTOKENPool.new(addressX3rrDON, addressAyoRdYr, addressopeS5nh, {from: accounts[1]});
		const uintHXVZG13 = BigInt("735")
//		const uint256yhdDvM4 = await BACMARSLPTOKENPoolMTDABG.stake.call(uintHXVZG13, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolMTDABG.stake.call(uintHXVZG13, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressYdbPRb6 = accounts[3]
		const addressTNoMnrG = accounts[3]
		const addressGsJvWz = accounts[5]
		const BACMARSLPTOKENPoolZF8ACu6 = await BACMARSLPTOKENPool.new(addressYdbPRb6, addressTNoMnrG, addressGsJvWz, {from: accounts[3]});
		const bytefMLJuzI = "0x0708100315191a0e1b0514040e1a1813180f1610111e16020e00071b19190c0b"
		const byteFUb5Kky = "0x19080204091c1b0d12080d1e161d0206070603080e16000b16121a0e200c0d19"
		const uintnSbGfVi = BigInt("250")
		const uint9TLhcc = BigInt("1897")
		const uintFmwm4CX = BigInt("76")
		const addressxNH6Hj0 = accounts[2]
//		const uint256hfycPfs = await BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintFmwm4CX, uint9TLhcc, uintnSbGfVi, byteFUb5Kky, bytefMLJuzI, {from: accounts[3]});
//		const addressADkLntT = await BACMARSLPTOKENPoolZF8ACu6.updateReward.call(addressxNH6Hj0, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintFmwm4CX, uint9TLhcc, uintnSbGfVi, byteFUb5Kky, bytefMLJuzI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhrGzw7p = "MOUP8Phy1PFBtYdkIJPwq4hPtrit2HjPbKdB0OtdpfkXahqwpMvrmtA"
		const stringQL5ryll = "pkjuX3YXlpR1NjamAEkJQ"
		const uintr5byjYI = BigInt("149")
		const BACMARSLPTOKENPoolBJxASfN = await BACMARSLPTOKENPool.new(stringhrGzw7p, stringQL5ryll, uintr5byjYI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nc6dLp = await BACMARSLPTOKENPoolBJxASfN.rewardPerToken.call({from: accounts[2]});
		const uint8lkwi0zZ = await BACMARSLPTOKENPoolBJxASfN.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPka3QEs = accounts[3]
		const addresszCZ9PVX = accounts[3]
		const addressmGIY3lh = accounts[5]
		const BACMARSLPTOKENPoolZF8ACu6 = await BACMARSLPTOKENPool.new(addressPka3QEs, addresszCZ9PVX, addressmGIY3lh, {from: accounts[3]});
		const uintgGWV3kR = BigInt("436")
		const byte5GDhSN = "0x0708100315191a0e1b0514040e1a1813180f1610111e16020e00071b19190c0b"
		const bytea4oFKm3 = "0x19080204091c1b0d12080d1e161d0206070603080e16000b16121a0e200c0d19"
		const uinthP7ROkL = BigInt("250")
		const uintcAyyZiC = BigInt("1897")
		const uintKawIaVR = BigInt("76")
//		const uint256fatGR5E = await BACMARSLPTOKENPoolZF8ACu6.notifyRewardAmount.call(uintgGWV3kR, {from: accounts[0]});
//		const uint256hfycPfs = await BACMARSLPTOKENPoolZF8ACu6.stakeWithPermit.call(uintKawIaVR, uintcAyyZiC, uinthP7ROkL, bytea4oFKm3, byte5GDhSN, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolZF8ACu6.notifyRewardAmount.call(uintgGWV3kR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswHUDiM = accounts[4]
		const addressHML6mCm = accounts[1]
		const addressRYNHkcT = accounts[0]
		const BACMARSLPTOKENPoolMTDABG = await BACMARSLPTOKENPool.new(addresswHUDiM, addressHML6mCm, addressRYNHkcT, {from: accounts[1]});
		const uintm7R6JSg = BigInt("25")
		const uinthQOhgEQ = BigInt("724")
		const bytemeQggHo = "0x1607070907071718040a140f150d08131b1c0402040c101918100d0b1002150c"
		const byteULSPPhT = "0x1c0b011c1113011e06060502100e1604130e1009100f1f0c051820071b06131e"
		const uintEPoe4vM = BigInt("153")
		const uintqe3RlCK = BigInt("1665")
		const uintr5aeG7C = BigInt("1631")
		const byteHNvsVR0 = "0x1d0f121b170b001805121f0a02071a0a1712151c1a1a1315091c02131e110412"
		const byteU55By4e = "0x161a000c0a1a0608061a1d0a11100e0d09111e101a160a0b14100e141a0f1f1a"
		const uinteVPHlmo = BigInt("226")
		const uintnW1PR5w = BigInt("192")
		const uintyRZpcGX = BigInt("1081")
		const uint256DNuQpgg = await BACMARSLPTOKENPoolMTDABG.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256BQMwMMv = await BACMARSLPTOKENPoolMTDABG.withdraw.call(uintm7R6JSg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yhdDvM4 = await BACMARSLPTOKENPoolMTDABG.stake.call(uinthQOhgEQ, {from: accounts[1]});
//		const uint256IgmVFTE = await BACMARSLPTOKENPoolMTDABG.stakeWithPermit.call(uintr5aeG7C, uintqe3RlCK, uintEPoe4vM, byteULSPPhT, bytemeQggHo, {from: accounts[0]});
//		const uint256sU7cLum = await BACMARSLPTOKENPoolMTDABG.stakeWithPermit.call(uintyRZpcGX, uintnW1PR5w, uinteVPHlmo, byteU55By4e, byteHNvsVR0, {from: accounts[3]});
//		const uint256nlfJ4n = await BACMARSLPTOKENPoolMTDABG.rewardPerToken.call({from: accounts[1]});
//		const string1rK5Pc = await BACMARSLPTOKENPoolMTDABG.symbol.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolMTDABG.exit.call({from: accounts[4]});
//		const uint256HvkUiXd = await BACMARSLPTOKENPoolMTDABG.getRewardForDuration.call({from: accounts[4]});

		assert.equal(uint256DNuQpgg, BigInt("0"))
		await expect(BACMARSLPTOKENPoolMTDABG.withdraw.call(uintm7R6JSg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdt2lMd = "GwN26f1W9LRKRIuW8DsovAM5wP6oeu95aLHhGMoxgp6pS2k9nHmvcBPeajFCZQTGThMwX1"
		const stringKC6ViJt = "49VkyKrzVdv4dBCnnEhvRjJK92lIWtnVjVCUC2V4CAw8BE3ffia7fV5Nlz9ScwOCGl9MC0pV3HqtgqH2Rc3Vd0viO"
		const uintLridNpZ = BigInt("230")
		const BACMARSLPTOKENPoolw0mZTHI = await BACMARSLPTOKENPool.new(stringdt2lMd, stringKC6ViJt, uintLridNpZ, {from: accounts[1]});
		const uint256Xjl7yXb = await BACMARSLPTOKENPoolw0mZTHI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolw0mZTHI.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zBoYPLl = await BACMARSLPTOKENPoolw0mZTHI.totalSupply.call({from: accounts[5]});
		const stringBVRYSFe = await BACMARSLPTOKENPoolw0mZTHI.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256e66O9n = await BACMARSLPTOKENPoolw0mZTHI.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspYl8aa4 = accounts[5]
		const addressGUJfHKU = accounts[0]
		const addressp3dp1LH = accounts[5]
		const BACMARSLPTOKENPooleTkK7vP = await BACMARSLPTOKENPool.new(addresspYl8aa4, addressGUJfHKU, addressp3dp1LH, {from: accounts[1]});
		const addressWNNICv = accounts[0]
		const addressWQN5j4 = accounts[1]
		const uintpidOYF = BigInt("424")
		const byteDXP55m4 = "0x18080e18111e0b1d16160e0011140d121e150b1d19101e03030013090107070c"
		const bytekTafyLs = "0x1d1d0e161d20130e1c1b000b02061e051f160b0e18050e1e041b04131d021c0f"
		const uintDvAynKZ = BigInt("162")
		const uintOFSYty1 = BigInt("1980")
		const uintGv4RMA = BigInt("599")
		const uint256NS5eBJc = await BACMARSLPTOKENPooleTkK7vP.earned.call(addressWNNICv, {from: accounts[3]});
		const uint256UsYisGc = await BACMARSLPTOKENPooleTkK7vP.balanceOf.call(addressWQN5j4, {from: accounts[0]});
//		const uint256kF4rUaO = await BACMARSLPTOKENPooleTkK7vP.withdraw.call(uintpidOYF, {from: accounts[2]});
//		const uint256Rkh8Evz = await BACMARSLPTOKENPooleTkK7vP.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256BZyTqvE = await BACMARSLPTOKENPooleTkK7vP.stakeWithPermit.call(uintGv4RMA, uintOFSYty1, uintDvAynKZ, bytekTafyLs, byteDXP55m4, {from: accounts[4]});
//		await BACMARSLPTOKENPooleTkK7vP.nonReentrant.call({from: accounts[3]});
//		await BACMARSLPTOKENPooleTkK7vP.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256NS5eBJc, BigInt("0"))
		assert.equal(uint256UsYisGc, BigInt("0"))
		await expect(BACMARSLPTOKENPooleTkK7vP.withdraw.call(uintpidOYF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHrcTQjE = "RW5WELWWJ7oXggxoBJCqjEThAXdrYiTYCLbDfsskSikxiPF9KdfcUYKbOOmYIq2IqWMhDasFjwUizwuSU4vHGJn97LWRD"
		const stringzKRyPLn = "nXB1r3Vaz1fQ8uaQfmzlTetBYYAAOw5N"
		const uint7IuE6f = BigInt("84")
		const BACMARSLPTOKENPooljPgniCF = await BACMARSLPTOKENPool.new(stringHrcTQjE, stringzKRyPLn, uint7IuE6f, {from: accounts[3]});
		const addressnmVbGuI = accounts[0]
		const bytefFpVwu7 = "0x1e171a17120c0f0207020312140f120914170d0c1f1d1019081b151501060513"
		const byteHr8hN4n = "0x040a080a09171d0409100014020e030c060b0820020f05030b0f170606080e03"
		const uintnkBoQFo = BigInt("221")
		const uintVSOYKa7 = BigInt("1087")
		const uintEyLBTEQ = BigInt("1146")
		const uintceMZ5rC = BigInt("848")
		await BACMARSLPTOKENPooljPgniCF.nonReentrant.call({from: accounts[4]});
		const uint256JDI5nJw = await BACMARSLPTOKENPooljPgniCF.balanceOf.call(addressnmVbGuI, {from: accounts[1]});
		const uint256GBpi3yd = await BACMARSLPTOKENPooljPgniCF.rewardPerToken.call({from: accounts[1]});
		const uint256eXSWIGT = await BACMARSLPTOKENPooljPgniCF.stakeWithPermit.call(uintEyLBTEQ, uintVSOYKa7, uintnkBoQFo, byteHr8hN4n, bytefFpVwu7, {from: accounts[5]});
		const uint256DU1Q25D = await BACMARSLPTOKENPooljPgniCF.notifyRewardAmount.call(uintceMZ5rC, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYByOe3W = "S09VCH4MTK8Uj7tMQvwTVXrKGtHbmbFUWUUr5BM9lh9SvU6rdQ2sJyw3pmgBv7wTrtDSvVmN62YydTHTQcMbI0XWBAk1j"
		const stringZWbBFYu = "FlBosLikbsx48YjP2HBlCeRAUMQZAxp4WQyuSIVDC11HRc7FP"
		const uintw3Gtgfd = BigInt("17")
		const BACMARSLPTOKENPooljiZxzPd = await BACMARSLPTOKENPool.new(stringYByOe3W, stringZWbBFYu, uintw3Gtgfd, {from: accounts[5]});
		const byteU4qZPJu = "0x171f1118151b0d0001151a11041e1420181503100b120412052001131a141713"
		const bytek4AUWbT = "0x0d0908080b1c07111813181d130a0e06051413010603050d091d161e14080f16"
		const uintgjVGYCI = BigInt("184")
		const uintcqbbRZv = BigInt("1100")
		const uintMwyiWUB = BigInt("869")
		const addressybgofnX = accounts[2]
		await BACMARSLPTOKENPooljiZxzPd.exit.call({from: accounts[2]});
		const uint8BOPJMPf = await BACMARSLPTOKENPooljiZxzPd.decimals.call({from: accounts[2]});
		const uint256Y879SqB = await BACMARSLPTOKENPooljiZxzPd.rewardPerToken.call({from: accounts[1]});
		const uint256qDVkT3w = await BACMARSLPTOKENPooljiZxzPd.stakeWithPermit.call(uintMwyiWUB, uintcqbbRZv, uintgjVGYCI, bytek4AUWbT, byteU4qZPJu, {from: accounts[3]});
		const uint256uL4zeI2 = await BACMARSLPTOKENPooljiZxzPd.balanceOf.call(addressybgofnX, {from: accounts[4]});
		const uint256vqE4Mfi = await BACMARSLPTOKENPooljiZxzPd.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnDGcnyz = "cFepjtFbOZ6TtTP8IetLLLvIFn3UIDAak3RfAOR75IdWoGNzNleR7AgBhvvq2ffTM8ynahUJgI4R2HoavgONpPc"
		const stringjOcvcG = "dPHQnKHwtAHWAjwM7jQWTCLKS2fwPqXDSrj0eLNpuRhkUhYfkkHzcW59hm9qaBTiU5L17P5gV"
		const uintYzsuP5c = BigInt("16")
		const BACMARSLPTOKENPooliCaVrBH = await BACMARSLPTOKENPool.new(stringnDGcnyz, stringjOcvcG, uintYzsuP5c, {from: accounts[4]});
		const addresseFkzU0 = accounts[1]
		const uintBf74s8 = BigInt("1153")
		const addressXzeYuuM = accounts[0]
		const uint256oW4OOHL = await BACMARSLPTOKENPooliCaVrBH.balanceOf.call(addresseFkzU0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pBlvOs = await BACMARSLPTOKENPooliCaVrBH.withdraw.call(uintBf74s8, {from: accounts[3]});
		await BACMARSLPTOKENPooliCaVrBH.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256dSTxoWT = await BACMARSLPTOKENPooliCaVrBH.totalSupply.call({from: accounts[0]});
		const uint256TJqvhEO = await BACMARSLPTOKENPooliCaVrBH.earned.call(addressXzeYuuM, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz4hOhPj = "4nbdw9SijPMTdNaxdyyLndi3srC5zur7tOCblVrk83XsIYTmmVRjJQoFc7wJwnAhkHGnSgRJLFh8JmgM2Huxf7z"
		const stringY4bpNFC = "uP8h5Sze92pHAUkPDbdJaUJeZbR"
		const uintCvmyELU = BigInt("222")
		const BACMARSLPTOKENPoolYjEEqZS = await BACMARSLPTOKENPool.new(stringz4hOhPj, stringY4bpNFC, uintCvmyELU, {from: accounts[3]});
		const addressltrPDcX = accounts[1]
		await BACMARSLPTOKENPoolYjEEqZS.exit.call({from: accounts[1]});
		const uint256jM6UN6d = await BACMARSLPTOKENPoolYjEEqZS.earned.call(addressltrPDcX, {from: accounts[4]});
		await BACMARSLPTOKENPoolYjEEqZS.nonReentrant.call({from: accounts[4]});
		const stringgP4XvuF = await BACMARSLPTOKENPoolYjEEqZS.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolYjEEqZS.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringF8vGjY7 = "9GP8NYvEvV1BBkliROIqkARP2gXsanV8TR4iNHE7yeYoRSOKcIy"
		const stringvZKjXcg = "cXwvyvhdfcXl"
		const uintsX092ZS = BigInt("5")
		const BACMARSLPTOKENPoolefFAfd8 = await BACMARSLPTOKENPool.new(stringF8vGjY7, stringvZKjXcg, uintsX092ZS, {from: "0x0000000000000000000000000000000000000001"});
		const bytemTGXUkb = "0x121917050c11141c110d19011d021c1d0619160c0a1f0704011b041d020b180c"
		const byteb5C9v3r = "0x0c08011504020a1e090b1507080c1b161d16110a05050e1e18061b1f01140311"
		const uintjnaUcMO = BigInt("206")
		const uintidtexnq = BigInt("1116")
		const uint9lg7b7 = BigInt("223")
		const uint256nLqJOES = await BACMARSLPTOKENPoolefFAfd8.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256P0V3js7 = await BACMARSLPTOKENPoolefFAfd8.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolefFAfd8.nonReentrant.call({from: accounts[2]});
		const uint256WYEpD3n = await BACMARSLPTOKENPoolefFAfd8.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolefFAfd8.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256LRMPWnJ = await BACMARSLPTOKENPoolefFAfd8.stakeWithPermit.call(uint9lg7b7, uintidtexnq, uintjnaUcMO, byteb5C9v3r, bytemTGXUkb, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string8pvpOD = "r5dkesK5mICYDLLngFfS9gvPxwaekJrWHrqClv"
		const stringBj29NYx = "9bQPCi7h0OE7veUphR4xgujx5YGawCA2iahNvqj0i6DJ2uYTmNQxIyVvCOkdQUbwh2W3uOop3MGn"
		const uintPsvclH = BigInt("125")
		const BACMARSLPTOKENPoolZU8TElb = await BACMARSLPTOKENPool.new(string8pvpOD, stringBj29NYx, uintPsvclH, {from: accounts[3]});
		const addressEKpdSoX = accounts[5]
		const addressTCTW2as = accounts[2]
		const addressOUdjruT = accounts[2]
		const addresswC4vDWN = accounts[1]
		const uint256TaQnqaP = await BACMARSLPTOKENPoolZU8TElb.earned.call(addressEKpdSoX, {from: accounts[0]});
		const uint256wO48KaV = await BACMARSLPTOKENPoolZU8TElb.getRewardForDuration.call({from: accounts[2]});
		const uint256CUF1Ym = await BACMARSLPTOKENPoolZU8TElb.earned.call(addressTCTW2as, {from: accounts[1]});
		const addressnuKPez5 = await BACMARSLPTOKENPoolZU8TElb.updateReward.call(addressOUdjruT, {from: accounts[1]});
		const uint256P6L9fDt = await BACMARSLPTOKENPoolZU8TElb.balanceOf.call(addresswC4vDWN, {from: accounts[3]});
		const uint256LBqyio = await BACMARSLPTOKENPoolZU8TElb.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXNgRvz = "DsrEc5bGNMCjU9aihAVEIn1CO8xJTPqi3fsuQune6"
		const stringDzHSI0 = "gE1agyzfwAHzJZZ2YV88vkhnHQGSt2yEPncXghHt7o1Un4iQWU5URdVNXFuI6nTuidKPr8tfaYCtrYw"
		const uintrZRQIBw = BigInt("156")
		const BACMARSLPTOKENPoolwhZr2Yg = await BACMARSLPTOKENPool.new(stringXNgRvz, stringDzHSI0, uintrZRQIBw, {from: accounts[5]});
		const bytepsAzYlT = "0x0c170d1a0a06021901010c11140b140e15081b0b1c070112011f141d040e1a08"
		const bytezBXBGW1 = "0x041516011109071d1f1610171f140617130b180c1a0f0f0e08191e1819111418"
		const uintZ3dBSsI = BigInt("224")
		const uintiUNmUGr = BigInt("248")
		const uintrcN6zT3 = BigInt("1727")
		const uintTn9BsI = BigInt("454")
		const uint256uzSMYs = await BACMARSLPTOKENPoolwhZr2Yg.stakeWithPermit.call(uintrcN6zT3, uintiUNmUGr, uintZ3dBSsI, bytezBXBGW1, bytepsAzYlT, {from: accounts[0]});
		const uint256iuzwEaH = await BACMARSLPTOKENPoolwhZr2Yg.stake.call(uintTn9BsI, {from: accounts[1]});
		await BACMARSLPTOKENPoolwhZr2Yg.getReward.call({from: accounts[3]});
		await BACMARSLPTOKENPoolwhZr2Yg.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringspoGfcP = "QYuFsxOtuyG8pgyB"
		const stringlagjsxk = "jatcOr16Y6ET4rhfDjXaoOGmvo"
		const uintLSYpuDg = BigInt("224")
		const BACMARSLPTOKENPoolaYTGPhQ = await BACMARSLPTOKENPool.new(stringspoGfcP, stringlagjsxk, uintLSYpuDg, {from: accounts[2]});
		const uint256bARQXre = await BACMARSLPTOKENPoolaYTGPhQ.totalSupply.call({from: accounts[4]});
		const uint256DuosX9y = await BACMARSLPTOKENPoolaYTGPhQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolaYTGPhQ.nonReentrant.call({from: accounts[1]});
		const uint8WqVA5Im = await BACMARSLPTOKENPoolaYTGPhQ.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringonKac9G = "gLq3zK0Xbt4clExNtB4Q4uSpFXtN3ualORsP5gQjxL7CvJC8RJixcuXwjNdiKyOj5f957LH2q6uh7wIMclxd7YpuloUQ"
		const stringotfatL4 = "HxaLkF0AQepAI8ATrqL24Uafaj2"
		const uintARsTS6i = BigInt("154")
		const BACMARSLPTOKENPooly5p3IMG = await BACMARSLPTOKENPool.new(stringonKac9G, stringotfatL4, uintARsTS6i, {from: accounts[1]});
		const uintQ1xg3KW = BigInt("104")
		const uintR4G3W1n = BigInt("958")
		const addressFP3VoLG = accounts[2]
		const uint256u36e8Zp = await BACMARSLPTOKENPooly5p3IMG.notifyRewardAmount.call(uintQ1xg3KW, {from: accounts[0]});
		const uint256Hp8BvS = await BACMARSLPTOKENPooly5p3IMG.rewardPerToken.call({from: accounts[3]});
		const uint256D5a3H7A = await BACMARSLPTOKENPooly5p3IMG.notifyRewardAmount.call(uintR4G3W1n, {from: accounts[0]});
		await BACMARSLPTOKENPooly5p3IMG.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const addressuKtUiyy = await BACMARSLPTOKENPooly5p3IMG.updateReward.call(addressFP3VoLG, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringH8jJtRj = "2NbpCCtltm2R7fxGzBwsXMFRMIhbG543CYRC4zvFkb42n1QGfu"
		const stringlzTAM7 = "6WcmoveseFkxOGMcvfDKCF4rQPof4W6kPI7uyNJsIB2VyfTg6P0mAbvAMK"
		const uintiteUaDM = BigInt("147")
		const BACMARSLPTOKENPooly3LLVyQ = await BACMARSLPTOKENPool.new(stringH8jJtRj, stringlzTAM7, uintiteUaDM, {from: accounts[2]});
		const uint8YwEN2xc = await BACMARSLPTOKENPooly3LLVyQ.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPooly3LLVyQ.exit.call({from: accounts[1]});
		const uint256EXTmalx = await BACMARSLPTOKENPooly3LLVyQ.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNEUjas = accounts[3]
		const addressFp7ftPp = accounts[4]
		const addressXDmvcgx = accounts[0]
		const BACMARSLPTOKENPoolYR9vkEM = await BACMARSLPTOKENPool.new(addressNEUjas, addressFp7ftPp, addressXDmvcgx, {from: accounts[2]});
		const uintXTyV5g8 = BigInt("1454")
//		await BACMARSLPTOKENPoolYR9vkEM.getReward.call({from: accounts[4]});
//		const uint256yveuetI = await BACMARSLPTOKENPoolYR9vkEM.notifyRewardAmount.call(uintXTyV5g8, {from: accounts[3]});
//		await BACMARSLPTOKENPoolYR9vkEM.onlyRewardsDistribution.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolYR9vkEM.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfSGDRwS = "q23uOiachhGqLwsn0nDHRniimnmiHkY4uMRkncv2onwh4lKaueayTQphO1YrE4TQCOxWFv6"
		const stringxisogzG = "uZTmF3r7wgDvR09xVINbYiRIa5ixE7DYSKEXTgCxGBhQaF4KL0llma8SGmPO6jl2cup3K2C7qMQLxl7i"
		const uintOERDCm = BigInt("163")
		const BACMARSLPTOKENPoolmJd3bBD = await BACMARSLPTOKENPool.new(stringfSGDRwS, stringxisogzG, uintOERDCm, {from: accounts[4]});
		const addresskQIZbLL = accounts[1]
		const uint256cmI9coJ = await BACMARSLPTOKENPoolmJd3bBD.balanceOf.call(addresskQIZbLL, {from: accounts[2]});
		const stringymlPfSB = await BACMARSLPTOKENPoolmJd3bBD.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolmJd3bBD.getReward.call({from: accounts[4]});
		const uint8U3x8G3k = await BACMARSLPTOKENPoolmJd3bBD.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpr9yQv = "Me3kYWkXHp19pAMcX0W"
		const stringlxqlSdC = "9VU5UaXvodFeKc0zL"
		const uintH0z04k = BigInt("34")
		const BACMARSLPTOKENPooljsH3Dw8 = await BACMARSLPTOKENPool.new(stringpr9yQv, stringlxqlSdC, uintH0z04k, {from: "0x0000000000000000000000000000000000000001"});
		const uintbQq6R9p = BigInt("817")
		const addressZGoFhzf = accounts[1]
		const uint256dYO0s7m = await BACMARSLPTOKENPooljsH3Dw8.notifyRewardAmount.call(uintbQq6R9p, {from: accounts[1]});
		const addressw683mRv = await BACMARSLPTOKENPooljsH3Dw8.updateReward.call(addressZGoFhzf, {from: accounts[1]});
		const uint256eyiDJOR = await BACMARSLPTOKENPooljsH3Dw8.rewardPerToken.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringarqd5St = "S3"
		const stringTSSQoT = "iK512W9BDx93QZ4ThtDHT1Z2"
		const uintuRwk0kM = BigInt("151")
		const BACMARSLPTOKENPoolsjeDLkW = await BACMARSLPTOKENPool.new(stringarqd5St, stringTSSQoT, uintuRwk0kM, {from: accounts[3]});
		const uintcdJhJoP = BigInt("165")
		const uint256Iudk4C1 = await BACMARSLPTOKENPoolsjeDLkW.rewardPerToken.call({from: accounts[4]});
		const uint8vAzF1YS = await BACMARSLPTOKENPoolsjeDLkW.decimals.call({from: accounts[2]});
		const stringxlBWpzc = await BACMARSLPTOKENPoolsjeDLkW.name.call({from: accounts[1]});
		const uint256Vu1CcwK = await BACMARSLPTOKENPoolsjeDLkW.stake.call(uintcdJhJoP, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiJa09f6 = "ojBmW02WnGacAtCfuB76eL4od"
		const stringnE50reE = "ZmLNbDDbzBjBc7oxQ92BQAAv5KaaMRjKrEeWR4YWrMKW3JURDIPdIV"
		const uintf818T3u = BigInt("57")
		const BACMARSLPTOKENPoolbbMHCB8 = await BACMARSLPTOKENPool.new(stringiJa09f6, stringnE50reE, uintf818T3u, {from: "0x0000000000000000000000000000000000000001"});
		const uintN6XSugN = BigInt("1504")
		const stringI2VKzZQ = await BACMARSLPTOKENPoolbbMHCB8.symbol.call({from: accounts[3]});
		const uint256MqoASD9 = await BACMARSLPTOKENPoolbbMHCB8.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MFArHX = await BACMARSLPTOKENPoolbbMHCB8.notifyRewardAmount.call(uintN6XSugN, {from: accounts[3]});
		const uint256bNQ0TNI = await BACMARSLPTOKENPoolbbMHCB8.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMi1yZv9 = "PNJfnzIZbdc32"
		const stringZsE7pEL = "jbuu87vpImhFdXCLuHysgmkmAl74dzDSQ9IUlj6UlzS7315bP7Q"
		const uintwlI290V = BigInt("107")
		const BACMARSLPTOKENPoolKKb7CMD = await BACMARSLPTOKENPool.new(stringMi1yZv9, stringZsE7pEL, uintwlI290V, {from: accounts[1]});
		const uintXt7y04Y = BigInt("414")
		const bytehOHVgGS = "0x031104121e160a1f0e0c17110d0911151d051e091d0a0a0f031b0d13011e0c01"
		const bytevu2sn2C = "0x100d0a0204060f0d04120f1f060219130d04161e05081b0b101214060d13111b"
		const uintj6k3Kd = BigInt("134")
		const uintbzKhqKX = BigInt("1128")
		const uintP7VrN7i = BigInt("1762")
		const addressPJWv1F3 = accounts[4]
		await BACMARSLPTOKENPoolKKb7CMD.getReward.call({from: accounts[2]});
		const uint256t9IZH6O = await BACMARSLPTOKENPoolKKb7CMD.notifyRewardAmount.call(uintXt7y04Y, {from: accounts[4]});
		const uint256fhD49hi = await BACMARSLPTOKENPoolKKb7CMD.stakeWithPermit.call(uintP7VrN7i, uintbzKhqKX, uintj6k3Kd, bytevu2sn2C, bytehOHVgGS, {from: accounts[2]});
		await BACMARSLPTOKENPoolKKb7CMD.exit.call({from: accounts[2]});
		const uint256xSpvs85 = await BACMARSLPTOKENPoolKKb7CMD.earned.call(addressPJWv1F3, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxhFeXrt = "rVeOWIMwrcdplmC8sI2TSN3dj1DJSpeyG"
		const stringvjShboe = "q7Mt8mt615dehuhj0ntdkiPhOseaMzeEi1hg2VbNpCz78R7JzSpRelcpAzxgM"
		const uinthxjkeBE = BigInt("141")
		const BACMARSLPTOKENPooled6HY4Y = await BACMARSLPTOKENPool.new(stringxhFeXrt, stringvjShboe, uinthxjkeBE, {from: accounts[0]});
		const uintVt910w = BigInt("298")
		const uintVBfjR2 = BigInt("1018")
		const addressQyP47Vb = accounts[3]
		await BACMARSLPTOKENPooled6HY4Y.nonReentrant.call({from: accounts[5]});
		const uint256kc6ajjG = await BACMARSLPTOKENPooled6HY4Y.lastTimeRewardApplicable.call({from: accounts[1]});
		const stringk9YXjLU = await BACMARSLPTOKENPooled6HY4Y.name.call({from: accounts[2]});
		const uint256iFXs5yg = await BACMARSLPTOKENPooled6HY4Y.notifyRewardAmount.call(uintVt910w, {from: accounts[0]});
		const uint256PkyWdfx = await BACMARSLPTOKENPooled6HY4Y.withdraw.call(uintVBfjR2, {from: accounts[3]});
		const uint256FDv3RcY = await BACMARSLPTOKENPooled6HY4Y.earned.call(addressQyP47Vb, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd8zftsh = "B4kiR6Mo2JtMr3vt5Lo2FI5pjbYkegeaXQRIpHyML7Kt7mwMyGsP"
		const stringXXThZVq = "xq8roUvOdSNXa8RpjawMurK39YGnBGy1HWQhwBFoMNdZdKdOn8AqawA38SWnIj24M8eiBwCdUVPmuUscpGohgsANu"
		const uintLtJfk6 = BigInt("167")
		const BACMARSLPTOKENPoolYMI4lrr = await BACMARSLPTOKENPool.new(stringd8zftsh, stringXXThZVq, uintLtJfk6, {from: accounts[3]});
		const uintofQQGxV = BigInt("1668")
		const stringfqiMSF = await BACMARSLPTOKENPoolYMI4lrr.name.call({from: accounts[0]});
		const stringY52QwX5 = await BACMARSLPTOKENPoolYMI4lrr.symbol.call({from: accounts[4]});
		const uint256slIUPH = await BACMARSLPTOKENPoolYMI4lrr.notifyRewardAmount.call(uintofQQGxV, {from: accounts[0]});
		const uint2564nh1It = await BACMARSLPTOKENPoolYMI4lrr.totalSupply.call({from: accounts[5]});
		const stringZzsjB2 = await BACMARSLPTOKENPoolYMI4lrr.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZXiEtTa = "ZDfqSKLu2p0Fkc215Dn8d2LSIRacQsD5Lz5DXhGXDh2rlANtL"
		const stringX3CzoJl = "4sqa0R4QR3XGnnGjFpyqtOTbjiZFCozwNGQPYbedhofHywJpJ3pekX1MQbL8hgax"
		const uintqj2UOqy = BigInt("39")
		const BACMARSLPTOKENPoolo6VdAO = await BACMARSLPTOKENPool.new(stringZXiEtTa, stringX3CzoJl, uintqj2UOqy, {from: accounts[2]});
		const uintXgXiphw = BigInt("1748")
		const uint256RZNLl5p = await BACMARSLPTOKENPoolo6VdAO.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolo6VdAO.getReward.call({from: accounts[0]});
		const uint256KLa7G7 = await BACMARSLPTOKENPoolo6VdAO.withdraw.call(uintXgXiphw, {from: accounts[3]});
		await BACMARSLPTOKENPoolo6VdAO.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolo6VdAO.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGjXw26v = "bGLlLMzqkAy5isgY2ASLnKmCkCDi5HVvCDGQHL2mTEBnWzCjOFiwcwpwXGczp2vX9q8WFx0wqmMFUYhn3LeaW4fB"
		const stringbsgU4wO = "ZDD6DefFNfLWdBfILFLXcd3EOKTA2HNKqMhSD3AJIE5llEhmr6D3v"
		const uintTJqmfoZ = BigInt("143")
		const BACMARSLPTOKENPoolY2mXoDA = await BACMARSLPTOKENPool.new(stringGjXw26v, stringbsgU4wO, uintTJqmfoZ, {from: accounts[1]});
		await BACMARSLPTOKENPoolY2mXoDA.onlyRewardsDistribution.call({from: accounts[2]});
		const uint8rF0nsn8 = await BACMARSLPTOKENPoolY2mXoDA.decimals.call({from: accounts[5]});
		const uint8usX7XBx = await BACMARSLPTOKENPoolY2mXoDA.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolY2mXoDA.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPoolY2mXoDA.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZqcx1I2 = "5P"
		const stringEMNGN0 = "67DWn5FDabiDfnIeL69Xx1DDUT0aqjfCwSB9XF"
		const uintCEIaVMR = BigInt("11")
		const BACMARSLPTOKENPoolVaUASWH = await BACMARSLPTOKENPool.new(stringZqcx1I2, stringEMNGN0, uintCEIaVMR, {from: accounts[2]});
		const byteZee44F7 = "0x1d051e011a18080e1e0813091204190202020d1e0d12091c121c06080d190603"
		const byteaGXzw8O = "0x0e1313050b1c08170e1e0604110d161011131f0f1d0917020802041d06161515"
		const uintzOCpndU = BigInt("28")
		const uintjlu67u4 = BigInt("1165")
		const uintE6UeMkv = BigInt("233")
		const uintDF2CoNJ = BigInt("937")
		await BACMARSLPTOKENPoolVaUASWH.exit.call({from: accounts[0]});
		const uint256omdGJc = await BACMARSLPTOKENPoolVaUASWH.stakeWithPermit.call(uintE6UeMkv, uintjlu67u4, uintzOCpndU, byteaGXzw8O, byteZee44F7, {from: accounts[4]});
		const uint256J5t7xaO = await BACMARSLPTOKENPoolVaUASWH.withdraw.call(uintDF2CoNJ, {from: accounts[4]});
		await BACMARSLPTOKENPoolVaUASWH.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringb1cycW = "RVe7cJk6xTXvIo9LInPcG7ZsyjSXORND"
		const stringTQCtOJK = "DmkXesZFgXYkAPKeODUVZNXBm0yjb"
		const uintSrogB8X = BigInt("195")
		const BACMARSLPTOKENPoolKbFcst7 = await BACMARSLPTOKENPool.new(stringb1cycW, stringTQCtOJK, uintSrogB8X, {from: accounts[4]});
		const uintBIqYYKz = BigInt("789")
		await BACMARSLPTOKENPoolKbFcst7.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolKbFcst7.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256PYx3BOm = await BACMARSLPTOKENPoolKbFcst7.stake.call(uintBIqYYKz, {from: accounts[5]});
		const uint256T7UE2le = await BACMARSLPTOKENPoolKbFcst7.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFDYMZpS = "D5A8vpv4d8okldr4JZM8SUzq4jfDndulogytlhbtVUJ6Y"
		const stringjqh97sg = "PtKPMQjtBWqM0RDquRLE4ZqHC342mUFzc2IMUGuAhRnnXQdOINjILGCX8Q4WxbKuh6Qfl8k6NgnWt2"
		const uintZNNxMPs = BigInt("198")
		const BACMARSLPTOKENPoolxEDmGjH = await BACMARSLPTOKENPool.new(stringFDYMZpS, stringjqh97sg, uintZNNxMPs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S0mEu6Y = await BACMARSLPTOKENPoolxEDmGjH.rewardPerToken.call({from: accounts[2]});
		const uint256KLUoVVV = await BACMARSLPTOKENPoolxEDmGjH.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolxEDmGjH.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolxEDmGjH.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZu8KXHG = "syp29fmWUsCHvTawFYgicH57u9mhfvXsOwjFZSzRSVGs53"
		const stringOc1bGRm = "lN1GyV"
		const uinta3SLcB = BigInt("242")
		const BACMARSLPTOKENPoolDQjdDZG = await BACMARSLPTOKENPool.new(stringZu8KXHG, stringOc1bGRm, uinta3SLcB, {from: accounts[2]});
		const uintGXjPuf3 = BigInt("1115")
		const uint256I5dPMH = await BACMARSLPTOKENPoolDQjdDZG.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolDQjdDZG.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256i3E7xn = await BACMARSLPTOKENPoolDQjdDZG.stake.call(uintGXjPuf3, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy6OzCw2 = "3i1CgL86DYpXkFjjWrczRHVVwZezrdz8QWmPbavzp7TVUEMoCCwHZysF6irVjjcWpWKE4OOtbZUHm"
		const stringVNGrKW = "btrN7gWCxLO2Jwh3LJA1n"
		const uintyil3iSv = BigInt("152")
		const BACMARSLPTOKENPoolW7OiETf = await BACMARSLPTOKENPool.new(stringy6OzCw2, stringVNGrKW, uintyil3iSv, {from: accounts[4]});
		const addressiwDNLA0 = accounts[2]
		const uintTKnHl2M = BigInt("1197")
		const uint256ayd1nD0 = await BACMARSLPTOKENPoolW7OiETf.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Uqfv95G = await BACMARSLPTOKENPoolW7OiETf.balanceOf.call(addressiwDNLA0, {from: accounts[0]});
		await BACMARSLPTOKENPoolW7OiETf.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolW7OiETf.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256zms0B4S = await BACMARSLPTOKENPoolW7OiETf.stake.call(uintTKnHl2M, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLGXstl = "KgKKcbiC16nVfLW32jxEXwIiD2X50x1BvV44ALG7tz8PlsEktF3dvVnziIf8mGjp3uKcNEqES2s7o0cE"
		const stringHqc4nsf = "aW7TBeXw4Mw4qoMjn4Ng9C1T9Fu7wp6eU9l2Bc8TLQs3LSMO7se4gLI5TDEMPemOuauvd"
		const uintxJsf0Lm = BigInt("244")
		const BACMARSLPTOKENPoolQKqhQFM = await BACMARSLPTOKENPool.new(stringLGXstl, stringHqc4nsf, uintxJsf0Lm, {from: accounts[5]});
		const addressLlWUl5 = accounts[0]
		const addressUS3wjR2 = accounts[2]
		const addressXAQKvfC = accounts[2]
		const addressUQHtJbX = accounts[4]
		const uint256gOmjed0 = await BACMARSLPTOKENPoolQKqhQFM.balanceOf.call(addressLlWUl5, {from: accounts[4]});
		const uint256zKSWybd = await BACMARSLPTOKENPoolQKqhQFM.earned.call(addressUS3wjR2, {from: accounts[4]});
		const uint256sLB4evo = await BACMARSLPTOKENPoolQKqhQFM.balanceOf.call(addressXAQKvfC, {from: accounts[2]});
		const uint256tLz0DGr = await BACMARSLPTOKENPoolQKqhQFM.earned.call(addressUQHtJbX, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcnC2pC = "VsuXZHxfugshh3vFlfJapqe8m"
		const stringcJVIWYQ = "YMkN14p"
		const uintDK5KURj = BigInt("106")
		const BACMARSLPTOKENPoolZvCRnMl = await BACMARSLPTOKENPool.new(stringcnC2pC, stringcJVIWYQ, uintDK5KURj, {from: accounts[1]});
		const uintTlJ6p4g = BigInt("86")
		const stringPbwvKRW = await BACMARSLPTOKENPoolZvCRnMl.symbol.call({from: accounts[0]});
		const uint8jVJk0N = await BACMARSLPTOKENPoolZvCRnMl.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZvCRnMl.exit.call({from: accounts[1]});
		const uint256IiU5OF = await BACMARSLPTOKENPoolZvCRnMl.getRewardForDuration.call({from: accounts[2]});
		const uint256mkftgG = await BACMARSLPTOKENPoolZvCRnMl.withdraw.call(uintTlJ6p4g, {from: accounts[5]});
		await BACMARSLPTOKENPoolZvCRnMl.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqjzGIMY = "gg7Dl4QSkHMMEv1I78TJrzDTkqSJKuVS8La9Y7CZRTPhSzxEeASRtinnHNYpL"
		const stringwMGtTiQ = "7bTaNSHin6uZLE5UhuFPbfKb7cS1dHi2MdEDifOp5yrasfIf9uTB"
		const uintzTeeuwf = BigInt("7")
		const BACMARSLPTOKENPoolq7efkJs = await BACMARSLPTOKENPool.new(stringqjzGIMY, stringwMGtTiQ, uintzTeeuwf, {from: accounts[4]});
		const uintgtDb5W = BigInt("1567")
		const uintjt9Il4E = BigInt("1759")
		const uint256esgL1Ao = await BACMARSLPTOKENPoolq7efkJs.stake.call(uintgtDb5W, {from: accounts[4]});
		const uint256lfEPjOx = await BACMARSLPTOKENPoolq7efkJs.rewardPerToken.call({from: accounts[1]});
		const uint256ZUTu0X = await BACMARSLPTOKENPoolq7efkJs.withdraw.call(uintjt9Il4E, {from: accounts[0]});
		const uint256ubim6Hj = await BACMARSLPTOKENPoolq7efkJs.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfar3EE1 = "1OIThJNiloOI9cH5oktKEi29zqikrTCHaYcpF02GdGYTmqCJbReISqeSYBWlkH3q8OiEgRQQEMjF2CiWClzZ24h"
		const stringaWGDqIW = "R4o"
		const uintzxj09XP = BigInt("140")
		const BACMARSLPTOKENPooljwhTo9 = await BACMARSLPTOKENPool.new(stringfar3EE1, stringaWGDqIW, uintzxj09XP, {from: accounts[4]});
		const uintNmZK4zK = BigInt("343")
		const uint8dlr79u = await BACMARSLPTOKENPooljwhTo9.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPooljwhTo9.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256XViz26Q = await BACMARSLPTOKENPooljwhTo9.withdraw.call(uintNmZK4zK, {from: accounts[1]});
		const uint256MfIry0a = await BACMARSLPTOKENPooljwhTo9.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWWi26K = "xivQgJ2CPWPt2iT2UpgSv1aFke6Ft5MaepAIVmxFH9kHqJHQx1n5QIoaazS8zCqS6va1c9D"
		const stringVukj1Rc = "Thcq4WlcPlToTIfCBeWETvPvugR69JWQ4XMGZ29k3MCs"
		const uint9wKjcM = BigInt("169")
		const BACMARSLPTOKENPoolvxUZlbv = await BACMARSLPTOKENPool.new(stringWWi26K, stringVukj1Rc, uint9wKjcM, {from: accounts[5]});
		const byteqydxWvX = "0x13021f0b1920010d13171f1d0e1b05111419001b000e0a00131914160614120b"
		const byteh36kdAV = "0x0f120e011412040d1c1c1a0a1319040c0e151b041806121701191e021d010d1a"
		const uintDMnyWh8 = BigInt("110")
		const uintZWuXCEG = BigInt("1139")
		const uintgAyQ5WW = BigInt("40")
		const uintWUtzJG1 = BigInt("40")
		const uint256APJaebA = await BACMARSLPTOKENPoolvxUZlbv.stakeWithPermit.call(uintgAyQ5WW, uintZWuXCEG, uintDMnyWh8, byteh36kdAV, byteqydxWvX, {from: accounts[2]});
		const uint256bPTD3PC = await BACMARSLPTOKENPoolvxUZlbv.withdraw.call(uintWUtzJG1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256alfV5i8 = await BACMARSLPTOKENPoolvxUZlbv.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolvxUZlbv.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringF4FcKY = "7MtWFPbcszlE4b3aiHhxnjpjYPDIfIdd6l7KVBwncPd9OyajBRtFrOY6S1ADk1jQBSmcgxeeYeqilPEIuqnePqBlbuA8ascin"
		const stringSH0GvEI = "FwX1lc4oQ4wwGEALRe6hHhdLbW7elqepLOUvgpmQP"
		const uinta3iFQx = BigInt("46")
		const BACMARSLPTOKENPoolSkMxfx = await BACMARSLPTOKENPool.new(stringF4FcKY, stringSH0GvEI, uinta3iFQx, {from: accounts[0]});
		const uintREbWYyq = BigInt("2033")
		const addressTylwjLI = accounts[0]
		const uint256Wv6KEb = await BACMARSLPTOKENPoolSkMxfx.stake.call(uintREbWYyq, {from: accounts[0]});
		await BACMARSLPTOKENPoolSkMxfx.nonReentrant.call({from: accounts[4]});
		const uint256eOPe3dC = await BACMARSLPTOKENPoolSkMxfx.earned.call(addressTylwjLI, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolSkMxfx.nonReentrant.call({from: accounts[0]});
		const uint256OMmbG1Q = await BACMARSLPTOKENPoolSkMxfx.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkK5XxEE = "HBTPzJxE3beMP2dmnv5mW6DG2XlNh4QLthkOMgSbSiM8Z"
		const stringzmdNJ7L = "v9oeSAHIZqsevyqvYhsnSnvNoJV9GQqysgpdQAFLKvzFPCjidahpqJ47dUaQeKFgEa4L9GlJ1ijbh15IXJmCjczJVWT6Uf"
		const uinttBsGOEO = BigInt("240")
		const BACMARSLPTOKENPoolVgz0EF6 = await BACMARSLPTOKENPool.new(stringkK5XxEE, stringzmdNJ7L, uinttBsGOEO, {from: accounts[0]});
		const addressbY0bidf = accounts[4]
		const addresswdwMwd0 = await BACMARSLPTOKENPoolVgz0EF6.updateReward.call(addressbY0bidf, {from: accounts[5]});
		await BACMARSLPTOKENPoolVgz0EF6.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolVgz0EF6.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVUMcOqR = "jNjVSgzSoKSAWoQLwfgPYrx0atXWTto1FlCsYm6la"
		const stringwvy9WgW = "c8OHQS1hpU1QlHjwiMXFc3csIdDlLLbMfgY2sI28psnzFxNfUBFhvOREuw"
		const uintIZqHB6O = BigInt("105")
		const BACMARSLPTOKENPoolIwW4kHP = await BACMARSLPTOKENPool.new(stringVUMcOqR, stringwvy9WgW, uintIZqHB6O, {from: accounts[0]});
		await BACMARSLPTOKENPoolIwW4kHP.nonReentrant.call({from: accounts[4]});
		const stringQXuCcy2 = await BACMARSLPTOKENPoolIwW4kHP.symbol.call({from: accounts[4]});
		const uint256SoXUtDi = await BACMARSLPTOKENPoolIwW4kHP.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwhIiP7B = "nxXtjLSMppVqXAPQ2QEfctUnnCsmrFuRnhNodA"
		const stringh4LNIqL = "XlytaL6P5XVRdvor9tsxjn3PUCy67TMF11v6owKO8rst59kI3tH2EoyhGV3o5VsyY6GVvTDRAxf1KMIe7"
		const uintqsSjkYX = BigInt("93")
		const BACMARSLPTOKENPoolIorXZSr = await BACMARSLPTOKENPool.new(stringwhIiP7B, stringh4LNIqL, uintqsSjkYX, {from: accounts[2]});
		const uintrvNvgV = BigInt("1391")
		const addressV5EepPR = accounts[5]
		const uintz1CzdpO = BigInt("2013")
		const uint256BJGqwwA = await BACMARSLPTOKENPoolIorXZSr.notifyRewardAmount.call(uintrvNvgV, {from: accounts[0]});
		const addressuZStKKu = await BACMARSLPTOKENPoolIorXZSr.updateReward.call(addressV5EepPR, {from: accounts[0]});
		const uint256BD47Mu = await BACMARSLPTOKENPoolIorXZSr.totalSupply.call({from: accounts[0]});
		const uint256QYfe3lq = await BACMARSLPTOKENPoolIorXZSr.stake.call(uintz1CzdpO, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnuUmpXU = "sHCLvqqkHMfa9ciVNIvjey7MPnAVCKCPS0RAmyB17k"
		const stringkD2Eq5w = "Er05sIaoQWLJBD4TTJ7VpGTkR0SxsWsEurDginUIb7zRlpCUtcs7NqYoeiqRmCofVVbVu"
		const uintutaJ2sR = BigInt("205")
		const BACMARSLPTOKENPoolHRamAG7 = await BACMARSLPTOKENPool.new(stringnuUmpXU, stringkD2Eq5w, uintutaJ2sR, {from: accounts[0]});
		const addressAoWEjXJ = accounts[1]
		const uint256qvdBg2m = await BACMARSLPTOKENPoolHRamAG7.earned.call(addressAoWEjXJ, {from: accounts[1]});
		const uint256uHE8mw1 = await BACMARSLPTOKENPoolHRamAG7.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolHRamAG7.nonReentrant.call({from: accounts[0]});
		const uint256o9L6NMe = await BACMARSLPTOKENPoolHRamAG7.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHyOk0RM = "F4zM8qsFF823FkpZCppQ3N4N0NgjgphCNufRKksOT2AW0fKFfehezsKh7dZYnnsQp"
		const stringa4bRU2g = "AvuzKhc7wMz8QSzl6Cz23poGlf4"
		const uintz88UMN5 = BigInt("107")
		const BACMARSLPTOKENPoolTam1PF6 = await BACMARSLPTOKENPool.new(stringHyOk0RM, stringa4bRU2g, uintz88UMN5, {from: accounts[3]});
		const byte2R36Ot = "0x021310090d1c1c11091018011311001717171918061d1a101c09150b1315131d"
		const byteNZKRbZ2 = "0x071a1e0205100e01161b061b060e1c151d04181309051e0b200702120d1a1f10"
		const uintq1i9kwb = BigInt("254")
		const uintKkxd6j = BigInt("815")
		const uintSseePus = BigInt("978")
		const addressDMs0ZCo = accounts[4]
		const uint256LzUot2I = await BACMARSLPTOKENPoolTam1PF6.stakeWithPermit.call(uintSseePus, uintKkxd6j, uintq1i9kwb, byteNZKRbZ2, byte2R36Ot, {from: accounts[2]});
		await BACMARSLPTOKENPoolTam1PF6.nonReentrant.call({from: accounts[5]});
		const uint256iWNQU7c = await BACMARSLPTOKENPoolTam1PF6.earned.call(addressDMs0ZCo, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringijbRKXN = "EDgdaYbj7tN2JWJKy5Y"
		const stringA6YeXCZ = "jMgCqR9cook1bYZo3cqz6fwnUV5ITUOkIMO7RPyi0zIou01y"
		const uintxSMx2mj = BigInt("147")
		const BACMARSLPTOKENPooluUJy62r = await BACMARSLPTOKENPool.new(stringijbRKXN, stringA6YeXCZ, uintxSMx2mj, {from: accounts[1]});
		const uintGFWg02c = BigInt("554")
		const uintMMN8Y0w = BigInt("1570")
		const addressZtAKRt7 = accounts[4]
		const addressSYEwFdu = accounts[4]
		const uint2564LLdn6 = await BACMARSLPTOKENPooluUJy62r.notifyRewardAmount.call(uintGFWg02c, {from: accounts[1]});
		const uint256ds7dKd3 = await BACMARSLPTOKENPooluUJy62r.withdraw.call(uintMMN8Y0w, {from: accounts[3]});
		await BACMARSLPTOKENPooluUJy62r.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256tvUQaxI = await BACMARSLPTOKENPooluUJy62r.balanceOf.call(addressZtAKRt7, {from: accounts[1]});
		const addresscaCxST = await BACMARSLPTOKENPooluUJy62r.updateReward.call(addressSYEwFdu, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTq2iACo = "rP4Apqzn932gAj2VmcGb1tC"
		const stringz5aHa3 = "WZ1xpsL3F35Ic3GOGSNCBJuVyhDVmx89LyT7IRmwhHvrXagnLVuN3"
		const uintd1kf1uo = BigInt("122")
		const BACMARSLPTOKENPoolv5FRkx = await BACMARSLPTOKENPool.new(stringTq2iACo, stringz5aHa3, uintd1kf1uo, {from: "0x0000000000000000000000000000000000000001"});
		const byteYLQnx47 = "0x0002001b171c01050006151608011c0f181319120507131d1d141f160c081310"
		const byteWqeaWmb = "0x010b1b14020c171b06080a120501160c05111b0d17021e111e17030317031509"
		const uintML8FfhC = BigInt("177")
		const uintWqEhjW7 = BigInt("1999")
		const uintx2rX7f3 = BigInt("616")
		const address8mKTgR = accounts[0]
		const uint2569Aq08J = await BACMARSLPTOKENPoolv5FRkx.stakeWithPermit.call(uintx2rX7f3, uintWqEhjW7, uintML8FfhC, byteWqeaWmb, byteYLQnx47, {from: accounts[2]});
		const uint256m3KsDFu = await BACMARSLPTOKENPoolv5FRkx.lastTimeRewardApplicable.call({from: accounts[1]});
		const stringAC6zUzF = await BACMARSLPTOKENPoolv5FRkx.symbol.call({from: accounts[4]});
		const uint256GXCzJZy = await BACMARSLPTOKENPoolv5FRkx.getRewardForDuration.call({from: accounts[5]});
		const uint256pn2qy3X = await BACMARSLPTOKENPoolv5FRkx.balanceOf.call(address8mKTgR, {from: accounts[0]});
		const stringm7ajtJc = await BACMARSLPTOKENPoolv5FRkx.name.call({from: accounts[1]});
	});
})