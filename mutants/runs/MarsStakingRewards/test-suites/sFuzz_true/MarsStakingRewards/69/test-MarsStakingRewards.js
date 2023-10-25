const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressCZ03ykh = accounts[3]
		const addresssKOxdDI = accounts[3]
		const address0OPTu3 = accounts[4]
		const MarsStakingRewardsgqiYZ4y = await MarsStakingRewards.new(addressCZ03ykh, addresssKOxdDI, address0OPTu3, {from: accounts[4]});
		const addressXfDv70 = accounts[4]
		const uint256E3pUsyq = await MarsStakingRewardsgqiYZ4y.balanceOf.call(addressXfDv70, {from: accounts[4]});
		await MarsStakingRewardsgqiYZ4y.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256OXl9I7V = await MarsStakingRewardsgqiYZ4y.totalSupply.call({from: accounts[5]});
		const uint256dg8cTgd = await MarsStakingRewardsgqiYZ4y.getRewardForDuration.call({from: accounts[4]});

		assert.equal(uint256E3pUsyq, BigInt("0"))
		await expect(MarsStakingRewardsgqiYZ4y.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqjfcJGl = accounts[5]
		const addressWoa29sB = accounts[4]
		const addresselyOOJf = accounts[4]
		const MarsStakingRewardszEhovE7 = await MarsStakingRewards.new(addressqjfcJGl, addressWoa29sB, addresselyOOJf, {from: accounts[0]});
		const bool1kRqJS = await MarsStakingRewardszEhovE7.isOwner.call({from: accounts[2]});
		const uint256pejrMGc = await MarsStakingRewardszEhovE7.totalSupply.call({from: accounts[2]});
		await MarsStakingRewardszEhovE7.renounceOwnership.call({from: accounts[2]});
		const addressZ84stUv = await MarsStakingRewardszEhovE7.owner.call({from: accounts[2]});

		assert.equal(bool1kRqJS, false)
		assert.equal(uint256pejrMGc, BigInt("0"))
		await expect(MarsStakingRewardszEhovE7.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressO38yQ0g = accounts[4]
		const addresshIxY3EA = accounts[2]
		const addressF1k9RA3 = accounts[2]
		const MarsStakingRewardsytBuK5I = await MarsStakingRewards.new(addressO38yQ0g, addresshIxY3EA, addressF1k9RA3, {from: "0x0000000000000000000000000000000000000001"});
		const uintO72GE7 = BigInt("1090")
		const uintisLwgYY = BigInt("990")
		const addressv8yzGLC = accounts[0]
		const uint256BA0i6NI = await MarsStakingRewardsytBuK5I.stake.call(uintO72GE7, {from: accounts[1]});
		const uint256oMbDJFl = await MarsStakingRewardsytBuK5I.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ClbkpWk = await MarsStakingRewardsytBuK5I.withdraw.call(uintisLwgYY, {from: accounts[2]});
		const addressriDifO0 = await MarsStakingRewardsytBuK5I.setRewardsDistribution.call(addressv8yzGLC, {from: accounts[5]});
		const addressOA6GLO = await MarsStakingRewardsytBuK5I.owner.call({from: accounts[3]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressO8IQa92 = accounts[0]
		const addressLLjHA39 = accounts[1]
		const addresskPlLTxu = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addressO8IQa92, addressLLjHA39, addresskPlLTxu, {from: accounts[0]});
		const addressCqgEd6 = accounts[4]
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressCqgEd6, {from: accounts[0]});
		await MarsStakingRewardsSDZirDK.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VUsGuw, BigInt("0"))
		await expect(MarsStakingRewardsSDZirDK.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgmJl6n = accounts[1]
		const addressXYjFzn = accounts[1]
		const addressj4Gdcnz = accounts[4]
		const MarsStakingRewardsdQ0FOOG = await MarsStakingRewards.new(addressgmJl6n, addressXYjFzn, addressj4Gdcnz, {from: accounts[0]});
		const uintTtfg91b = BigInt("1626")
		const uintgAKGmo2 = BigInt("679")
		const addressk9hs58g = "0x0000000000000000000000000000000000000001"
		const uint256mMAW1xy = await MarsStakingRewardsdQ0FOOG.stake.call(uintTtfg91b, {from: accounts[4]});
		const uint256VfpmEyc = await MarsStakingRewardsdQ0FOOG.stake.call(uintgAKGmo2, {from: accounts[5]});
		const uint256PaToa60 = await MarsStakingRewardsdQ0FOOG.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsdQ0FOOG.renounceOwnership.call({from: accounts[4]});
		const addressVOtE9KK = await MarsStakingRewardsdQ0FOOG.setRewardsDistribution.call(addressk9hs58g, {from: accounts[0]});

		await expect(MarsStakingRewardsdQ0FOOG.stake.call(uintTtfg91b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressf8MMcxt = accounts[1]
		const addressC2S30uV = accounts[3]
		const addressCryWInS = accounts[0]
		const MarsStakingRewardsLI1iMtd = await MarsStakingRewards.new(addressf8MMcxt, addressC2S30uV, addressCryWInS, {from: accounts[1]});
		const addresssHyIzBV = accounts[5]
		const uintQItWm0u = BigInt("1065")
		const uintipFzPup = BigInt("567")
		const uint256mmlV5lq = await MarsStakingRewardsLI1iMtd.lastTimeRewardApplicable.call({from: accounts[2]});
		await MarsStakingRewardsLI1iMtd.renounceOwnership.call({from: accounts[0]});
		const uint256RFY538z = await MarsStakingRewardsLI1iMtd.earned.call(addresssHyIzBV, {from: accounts[1]});
		const uint256BOZEDae = await MarsStakingRewardsLI1iMtd.notifyRewardAmount.call(uintipFzPup, uintQItWm0u, {from: accounts[3]});
		await MarsStakingRewardsLI1iMtd.exit.call({from: accounts[4]});

		assert.equal(uint256mmlV5lq, BigInt("0"))
		await expect(MarsStakingRewardsLI1iMtd.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressNhQDRsR = accounts[0]
		const addressDREX0Gx = accounts[1]
		const addresscsHVv5b = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addressNhQDRsR, addressDREX0Gx, addresscsHVv5b, {from: accounts[0]});
		const uintQ6gkMMy = BigInt("612")
		const uintwqNjHxu = BigInt("1452")
		const addressfvgBwt = accounts[4]
		const uint256eVBag6Y = await MarsStakingRewardsSDZirDK.notifyRewardAmount.call(uintwqNjHxu, uintQ6gkMMy, {from: accounts[5]});
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressfvgBwt, {from: accounts[0]});
		await MarsStakingRewardsSDZirDK.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsSDZirDK.notifyRewardAmount.call(uintwqNjHxu, uintQ6gkMMy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresseDEK9k = accounts[4]
		const addressIW83vJZ = accounts[3]
		const addressojKxE33 = accounts[1]
		const MarsStakingRewardsXUVRvlb = await MarsStakingRewards.new(addresseDEK9k, addressIW83vJZ, addressojKxE33, {from: accounts[0]});
		const uint256Z35i7xl = await MarsStakingRewardsXUVRvlb.lastTimeRewardApplicable.call({from: accounts[0]});
		await MarsStakingRewardsXUVRvlb.exit.call({from: accounts[3]});

		assert.equal(uint256Z35i7xl, BigInt("0"))
		await expect(MarsStakingRewardsXUVRvlb.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLcIuIIq = accounts[5]
		const addresscBzLMJs = accounts[0]
		const addressenPvYnA = accounts[1]
		const MarsStakingRewards5Qxb4P = await MarsStakingRewards.new(addressLcIuIIq, addresscBzLMJs, addressenPvYnA, {from: accounts[4]});
		const uintadyShuO = BigInt("1590")
		const addressioRIKdO = accounts[6]
		const uint256Mta9ZX7 = await MarsStakingRewards5Qxb4P.getRewardForDuration.call({from: accounts[2]});
		const addresslRzRdhQ = await MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressioRIKdO, uintadyShuO, {from: accounts[3]});

		assert.equal(uint256Mta9ZX7, BigInt("0"))
		await expect(MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressioRIKdO, uintadyShuO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYO0CohD = accounts[0]
		const addressKgzDo20 = accounts[1]
		const addressyX8npkA = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addressYO0CohD, addressKgzDo20, addressyX8npkA, {from: accounts[0]});
		const addressFIX8wUp = accounts[6]
		const uint256mO91Rl = await MarsStakingRewardsSDZirDK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsSDZirDK.renounceOwnership.call({from: accounts[0]});
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressFIX8wUp, {from: accounts[0]});

		assert.equal(uint256mO91Rl, BigInt("0"))
		await expect(MarsStakingRewardsSDZirDK.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmKWoJPc = accounts[0]
		const address1qTdow = accounts[1]
		const addressXWjIUvC = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addressmKWoJPc, address1qTdow, addressXWjIUvC, {from: accounts[0]});
		const addressPnJMQQ1 = accounts[6]
		const uintAOD69pV = BigInt("197")
		const addressbfhrW7c = accounts[0]
		const addressQ6HQePr = await MarsStakingRewardsSDZirDK.owner.call({from: accounts[5]});
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressPnJMQQ1, {from: accounts[0]});
		const addresswB2gqg = await MarsStakingRewardsSDZirDK.inCaseTokensGetStuck.call(addressbfhrW7c, uintAOD69pV, {from: accounts[2]});
		const uint256TeXBTuX = await MarsStakingRewardsSDZirDK.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256qsR7flF = await MarsStakingRewardsSDZirDK.totalSupply.call({from: accounts[0]});

		assert.equal(addressQ6HQePr, 0xDF13aEdB8968084Fc935Ef958fed560A1e499C3a)
		assert.equal(uint256VUsGuw, BigInt("0"))
		await expect(MarsStakingRewardsSDZirDK.inCaseTokensGetStuck.call(addressbfhrW7c, uintAOD69pV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMDvY5Ca = accounts[5]
		const addresszLytE8 = accounts[0]
		const addressWWX2q8 = accounts[1]
		const MarsStakingRewards5Qxb4P = await MarsStakingRewards.new(addressMDvY5Ca, addresszLytE8, addressWWX2q8, {from: accounts[4]});
		const addressTKEzhZ = accounts[0]
		const uintfcPNts = BigInt("1607")
		const addressXhNOmsu = accounts[6]
		const addressBc0jrv = await MarsStakingRewards5Qxb4P.transferOwnership.call(addressTKEzhZ, {from: accounts[4]});
		const addresslRzRdhQ = await MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressXhNOmsu, uintfcPNts, {from: accounts[3]});

		await expect(MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressXhNOmsu, uintfcPNts, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbPIN71I = accounts[5]
		const addressXkxg3NI = accounts[0]
		const addressROhBYOz = accounts[1]
		const MarsStakingRewards5Qxb4P = await MarsStakingRewards.new(addressbPIN71I, addressXkxg3NI, addressROhBYOz, {from: accounts[4]});
		const addressjm0dNls = accounts[0]
		const uintGzcikDq = BigInt("1613")
		const addressT30sTmx = accounts[6]
		const uintmAqNfH4 = BigInt("570")
		const addressLcdq4e5 = accounts[3]
		const addressNEciLaM = await MarsStakingRewards5Qxb4P.setRewardsDistribution.call(addressjm0dNls, {from: accounts[4]});
		const addresslRzRdhQ = await MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressT30sTmx, uintGzcikDq, {from: accounts[3]});
		const addressnzDe2Cp = await MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressLcdq4e5, uintmAqNfH4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewards5Qxb4P.inCaseTokensGetStuck.call(addressT30sTmx, uintGzcikDq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQJWaix = accounts[0]
		const addressSlDwUTv = accounts[1]
		const addressw9v8qKn = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addressQJWaix, addressSlDwUTv, addressw9v8qKn, {from: accounts[0]});
		const uintuATcyny = BigInt("1683")
		const addressELtXBU7 = accounts[4]
		const addressV9tYixP = accounts[6]
		const addressC635Ypz = await MarsStakingRewardsSDZirDK.inCaseTokensGetStuck.call(addressELtXBU7, uintuATcyny, {from: accounts[0]});
		await MarsStakingRewardsSDZirDK.renounceOwnership.call({from: accounts[2]});
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressV9tYixP, {from: accounts[0]});
		await MarsStakingRewardsSDZirDK.getReward.call({from: accounts[0]});

		await expect(MarsStakingRewardsSDZirDK.inCaseTokensGetStuck.call(addressELtXBU7, uintuATcyny, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresso3hard = accounts[0]
		const addressraLCuEl = accounts[1]
		const addressYA9DNiD = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addresso3hard, addressraLCuEl, addressYA9DNiD, {from: accounts[0]});
		const uintmbkgKmi = BigInt("1229")
		const addresstpSlAGH = accounts[5]
		const addressVB0vN8W = accounts[6]
		const addressgB130DK = await MarsStakingRewardsSDZirDK.inCaseTokensGetStuck.call(addresstpSlAGH, uintmbkgKmi, {from: accounts[0]});
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressVB0vN8W, {from: accounts[0]});

		await expect(MarsStakingRewardsSDZirDK.inCaseTokensGetStuck.call(addresstpSlAGH, uintmbkgKmi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXi2S2ye = accounts[0]
		const addressshErcad = accounts[1]
		const addressCk1taZK = accounts[5]
		const MarsStakingRewardsSDZirDK = await MarsStakingRewards.new(addressXi2S2ye, addressshErcad, addressCk1taZK, {from: accounts[0]});
		const uintSlwM7dB = BigInt("429")
		const uintpj5vecK = BigInt("1087")
		const addressHzLKKG2 = accounts[0]
		const addressUiTYScu = accounts[2]
		const uint256Ss7n7r = await MarsStakingRewardsSDZirDK.notifyRewardAmount.call(uintpj5vecK, uintSlwM7dB, {from: accounts[0]});
		const uint256VUsGuw = await MarsStakingRewardsSDZirDK.earned.call(addressHzLKKG2, {from: accounts[0]});
		const uint256cwQ3dmy = await MarsStakingRewardsSDZirDK.earned.call(addressUiTYScu, {from: accounts[4]});

		await expect(MarsStakingRewardsSDZirDK.notifyRewardAmount.call(uintpj5vecK, uintSlwM7dB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})