const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressmvt7c1w = accounts[4]
		const addresse6IFoI = accounts[4]
		const addressB0MRo3J = accounts[0]
		const WolfStakingRewardsP9ZMFtg = await WolfStakingRewards.new(addressmvt7c1w, addresse6IFoI, addressB0MRo3J, {from: accounts[0]});
		const uintKJIWcoZ = BigInt("382")
		const addressPQy5nQP = accounts[4]
		const uintpeDIZTP = BigInt("2009")
		const uintulchFV = BigInt("1778")
		const addresse3TlrHq = await WolfStakingRewardsP9ZMFtg.updateReward.call(addressPQy5nQP, uintKJIWcoZ, {from: accounts[5]});
		const uint256arraygFKfqO = await WolfStakingRewardsP9ZMFtg.updateNotifyRewardAmount.call(uintpeDIZTP, {from: accounts[3]});
		const uint256SW9woGL = await WolfStakingRewardsP9ZMFtg.lastTimeRewardApplicable.call(uintulchFV, {from: accounts[1]});

		await expect(WolfStakingRewardsP9ZMFtg.updateReward.call(addressPQy5nQP, uintKJIWcoZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const string99YtSy = "Lkz9yE4rQUqjLgsuBKGUe7pyGJoavDAePkyKLe9xUV2r9dyTWj6CVkJQLoY"
		const stringo6W0A9 = "gxr48B1h03DtSCT0cIuYsMtx0ZsjZbYIABHnNj3gdod8OwW7DCgSI1zoN4I"
		const uintnSzkCNR = BigInt("43")
		const WolfStakingRewardsc0tGGTB = await WolfStakingRewards.new(string99YtSy, stringo6W0A9, uintnSzkCNR, {from: accounts[5]});
		const uintH1o8mD = BigInt("589")
		const uintIcKFHCH = BigInt("2029")
		const uintqQEC1dQ = BigInt("427")
		const addressn7Z0iFw = accounts[1]
		const uint256arrayu3uq0rD = await WolfStakingRewardsc0tGGTB.updateNotifyRewardAmount.call(uintH1o8mD, {from: accounts[5]});
		const uint256arraylxTQQS = await WolfStakingRewardsc0tGGTB.updateNotifyRewardAmount.call(uintIcKFHCH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fwoSEiG = await WolfStakingRewardsc0tGGTB.earned.call(addressn7Z0iFw, uintqQEC1dQ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshykssAX = accounts[0]
		const addressT82cXsS = accounts[4]
		const addressPwP8SL4 = accounts[4]
		const WolfStakingRewardsxqLOG4j = await WolfStakingRewards.new(addresshykssAX, addressT82cXsS, addressPwP8SL4, {from: accounts[0]});
		const uintPHlOVtR = BigInt("2002")
		const uintf3UQky = BigInt("806")
		const uintFSDsTeh = BigInt("382")
		const uintQIICyWa = BigInt("1366")
		const uintKeHXBm0 = BigInt("820")
		const uint256R5ENIfe = await WolfStakingRewardsxqLOG4j.withdrawRemainingBalance.call(uintf3UQky, uintPHlOVtR, {from: accounts[1]});
		const uint256imzFTTQ = await WolfStakingRewardsxqLOG4j.stake.call(uintQIICyWa, uintFSDsTeh, {from: accounts[1]});
		const uint256MOGChD = await WolfStakingRewardsxqLOG4j.lastTimeRewardApplicable.call(uintKeHXBm0, {from: accounts[1]});

		await expect(WolfStakingRewardsxqLOG4j.withdrawRemainingBalance.call(uintf3UQky, uintPHlOVtR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJAdtQVs = "yjvowIEfTSjiNjd94BWzYDJoXjh2KPTsFQcckbQiTYOkj2YGli6HD"
		const stringv83BEfp = "Lda5N1tiHUG3ROMRH0qT1aLECDsrB6vQGM4lIq6St"
		const uintl6YwvEY = BigInt("229")
		const WolfStakingRewardsBp4wl6a = await WolfStakingRewards.new(stringJAdtQVs, stringv83BEfp, uintl6YwvEY, {from: accounts[2]});
		const uintcBxAKH = BigInt("770")
		const addressrQPlFR = "0x0000000000000000000000000000000000000001"
		const uintkI7r2mq = BigInt("1437")
		const stringK35VMQ6 = await WolfStakingRewardsBp4wl6a.symbol.call({from: accounts[2]});
		await WolfStakingRewardsBp4wl6a.onlyOwner.call({from: accounts[0]});
		const addressvpmEEaW = await WolfStakingRewardsBp4wl6a.updateReward.call(addressrQPlFR, uintcBxAKH, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsBp4wl6a.nonReentrant.call({from: accounts[4]});
		const uint256AjoEaLD = await WolfStakingRewardsBp4wl6a.getRewardForDuration.call(uintkI7r2mq, {from: accounts[0]});
		const stringjuLne4C = await WolfStakingRewardsBp4wl6a.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressfSHNx7S = accounts[3]
		const addresszEMjIm = accounts[1]
		const addressSqZbzn = accounts[3]
		const WolfStakingRewardsi92ohks = await WolfStakingRewards.new(addressfSHNx7S, addresszEMjIm, addressSqZbzn, {from: "0x0000000000000000000000000000000000000001"});
		const uintoWjEHBd = BigInt("1586")
		const uintJeDo5yD = BigInt("737")
		const uint256kOSJ4e7 = await WolfStakingRewardsi92ohks.lastTimeRewardApplicable.call(uintoWjEHBd, {from: accounts[5]});
		const uint256l95yWyq = await WolfStakingRewardsi92ohks.rewardPerToken.call(uintJeDo5yD, {from: accounts[4]});
		await WolfStakingRewardsi92ohks.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVqTn3Gs = "0XkVsGODeQlhYYm61MfKP3mfojVrEtnj35pRJMTMulnOst7LtkFFc6bAIDSlQBUc1attBBgn4x7fNcqbaHaJuqD"
		const stringMwcJPuG = "IaqRIyZKUK1IABTwbp3i"
		const uintPMeeqzR = BigInt("164")
		const WolfStakingRewardsS4SfKgW = await WolfStakingRewards.new(stringVqTn3Gs, stringMwcJPuG, uintPMeeqzR, {from: accounts[1]});
		const uintVFyKOXd = BigInt("532")
		const uintC1cq1Vm = BigInt("126")
		const uintAEGhxxG = BigInt("971")
		const uintFjeIeJW = BigInt("1205")
		const uint256UxlGnjx = await WolfStakingRewardsS4SfKgW.lastTimeRewardApplicable.call(uintVFyKOXd, {from: accounts[1]});
		const uint256bjAzpGX = await WolfStakingRewardsS4SfKgW.lastTimeRewardApplicable.call(uintC1cq1Vm, {from: "0x0000000000000000000000000000000000000001"});
		const uintuMkrH2v = await WolfStakingRewardsS4SfKgW.getReward.call(uintAEGhxxG, {from: accounts[1]});
		const uint256eRvyfX5 = await WolfStakingRewardsS4SfKgW.lastTimeRewardApplicable.call(uintFjeIeJW, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressksGu6OP = accounts[1]
		const addressBQ9t6vM = accounts[1]
		const addressCturjOD = accounts[2]
		const WolfStakingRewardsdHfxnJx = await WolfStakingRewards.new(addressksGu6OP, addressBQ9t6vM, addressCturjOD, {from: accounts[0]});
		const uintLwy9JvI = BigInt("1663")
		const uintrfQE5wP = BigInt("1798")
		const uintpIpmiW = BigInt("434")
		const uintMZXlr0M = BigInt("398")
		const addressZtiBjJ = accounts[2]
		const uint1378TW = BigInt("212")
		const uint256J3olkwY = await WolfStakingRewardsdHfxnJx.withdraw.call(uintrfQE5wP, uintLwy9JvI, {from: accounts[4]});
		const uint256arrayaTFhkhJ = await WolfStakingRewardsdHfxnJx.updateNotifyRewardAmount.call(uintpIpmiW, {from: accounts[3]});
		const uint8MzqCVb0 = await WolfStakingRewardsdHfxnJx.decimals.call({from: accounts[4]});
		const addressJOWYI2K = await WolfStakingRewardsdHfxnJx.updateReward.call(addressZtiBjJ, uintMZXlr0M, {from: accounts[2]});
		const uint256zQJhWzl = await WolfStakingRewardsdHfxnJx.totalSupplyPerPool.call(uint1378TW, {from: accounts[0]});

		await expect(WolfStakingRewardsdHfxnJx.withdraw.call(uintrfQE5wP, uintLwy9JvI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressH07rNTp = accounts[4]
		const addressxXnE7Rp = accounts[3]
		const addresshGWkwuQ = accounts[3]
		const WolfStakingRewardsuFYwVcm = await WolfStakingRewards.new(addressH07rNTp, addressxXnE7Rp, addresshGWkwuQ, {from: accounts[2]});
		const uintqDfs4vq = BigInt("1156")
		const uintpYGK3ia = BigInt("848")
		const uinte4oC7ty = BigInt("1231")
		const uint256S5bgQw5 = await WolfStakingRewardsuFYwVcm.withdrawRemainingBalance.call(uintpYGK3ia, uintqDfs4vq, {from: accounts[2]});
		const uint8mrwZVy = await WolfStakingRewardsuFYwVcm.decimals.call({from: accounts[3]});
		const uint8msGElnu = await WolfStakingRewardsuFYwVcm.decimals.call({from: accounts[0]});
		const uint256arrayaWd5LMQ = await WolfStakingRewardsuFYwVcm.updateNotifyRewardAmount.call(uinte4oC7ty, {from: accounts[4]});
		const stringsdblC7i = await WolfStakingRewardsuFYwVcm.symbol.call({from: accounts[0]});

		await expect(WolfStakingRewardsuFYwVcm.withdrawRemainingBalance.call(uintpYGK3ia, uintqDfs4vq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringmQMPy47 = "aVgXxYt5zwYXjoJVt9SMLomPhAB5Xd1n5FfR6Czfop8UVUc5V5ndDlMK3pk"
		const stringDc5OkLx = "jkKMuRDPokaSLhGLVBdSAzvGJFYuZvxX1IKuoRlDuyTA0tFeyYMq84PqJQGWxiPfnS5RnvlQpFSsRzQbRd98VnA70Ogetn"
		const uintB5VDOus = BigInt("44")
		const WolfStakingRewardsVDLjefo = await WolfStakingRewards.new(stringmQMPy47, stringDc5OkLx, uintB5VDOus, {from: accounts[0]});
		const uinttn8kHJJ = BigInt("800")
		const uintFLGnPsS = BigInt("1005")
		const uintzIM9ERu = BigInt("1601")
		const uinto7chL0 = BigInt("528")
		const uintV3sHYFi = BigInt("959")
		const uintUPasULE = BigInt("1868")
		const uint256sYEO8mw = await WolfStakingRewardsVDLjefo.withdraw.call(uintFLGnPsS, uinttn8kHJJ, {from: accounts[2]});
		const uint256VZYRxRY = await WolfStakingRewardsVDLjefo.withdraw.call(uinto7chL0, uintzIM9ERu, {from: accounts[1]});
		const uint256S4E6F9U = await WolfStakingRewardsVDLjefo.exit.call(uintV3sHYFi, {from: accounts[4]});
		const uint256UKx7dCF = await WolfStakingRewardsVDLjefo.exit.call(uintUPasULE, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressVfoSIDH = accounts[3]
		const addressx1jSl0P = accounts[3]
		const addressKiaO7SG = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(addressVfoSIDH, addressx1jSl0P, addressKiaO7SG, {from: accounts[5]});
		const uintrR7K6Bn = BigInt("1447")
		const addressuV7eCUt = accounts[5]
		const uintzQ89Zcb = BigInt("2027")
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressuV7eCUt, uintrR7K6Bn, {from: accounts[3]});
		const uint256QOey2Mo = await WolfStakingRewardsjI349i4.getRewardForDuration.call(uintzQ89Zcb, {from: accounts[2]});

		assert.equal(uint256asVSTnu, BigInt("0"))
		await expect(WolfStakingRewardsjI349i4.getRewardForDuration.call(uintzQ89Zcb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address13hsta = accounts[3]
		const addresss0YQOpu = accounts[3]
		const addresspE7ZURF = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(address13hsta, addresss0YQOpu, addresspE7ZURF, {from: accounts[5]});
		const uintf8rhKP = BigInt("1454")
		const addressInkBFup = accounts[4]
		const uintei7xAwe = BigInt("1718")
		const uintoeF7bYr = BigInt("181")
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressInkBFup, uintf8rhKP, {from: accounts[3]});
		const uint256FiuHHAJ = await WolfStakingRewardsjI349i4.stake.call(uintoeF7bYr, uintei7xAwe, {from: accounts[2]});

		assert.equal(uint256asVSTnu, BigInt("0"))
		await expect(WolfStakingRewardsjI349i4.stake.call(uintoeF7bYr, uintei7xAwe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresst29X7dw = accounts[3]
		const address4Whrwk = accounts[3]
		const addressGLZ8GWN = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(addresst29X7dw, address4Whrwk, addressGLZ8GWN, {from: accounts[5]});
		const uintB8UBJXH = BigInt("1267")
		const uintf0THO6Q = BigInt("1454")
		const addressvVdIPCV = accounts[4]
		const uintflGwacj = BigInt("768")
		const addressiC3RezL = accounts[2]
		const uintIzHiXPK = BigInt("1718")
		const uintN8UnjEY = BigInt("233")
		const uint256arrayEJE79GA = await WolfStakingRewardsjI349i4.updateNotifyRewardAmount.call(uintB8UBJXH, {from: accounts[5]});
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressvVdIPCV, uintf0THO6Q, {from: accounts[3]});
		const uint256kYtM8sB = await WolfStakingRewardsjI349i4.balanceOfPerPool.call(addressiC3RezL, uintflGwacj, {from: accounts[2]});
		const uint256FiuHHAJ = await WolfStakingRewardsjI349i4.stake.call(uintN8UnjEY, uintIzHiXPK, {from: accounts[2]});

		await expect(WolfStakingRewardsjI349i4.updateNotifyRewardAmount.call(uintB8UBJXH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressmN5lEQ9 = accounts[3]
		const addressCY1ptAl = accounts[3]
		const addressC3Wycrt = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(addressmN5lEQ9, addressCY1ptAl, addressC3Wycrt, {from: accounts[5]});
		const uintX4xIlwj = BigInt("206")
		const uintQPTxwKi = BigInt("1471")
		const addressrGOYoF = accounts[4]
		const uintC0dOD06 = await WolfStakingRewardsjI349i4.getReward.call(uintX4xIlwj, {from: accounts[2]});
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressrGOYoF, uintQPTxwKi, {from: accounts[3]});

		assert.equal(uint256asVSTnu, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addresspWfvIvq = accounts[3]
		const addresslKC9IS4 = accounts[3]
		const addressKp4VGg = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(addresspWfvIvq, addresslKC9IS4, addressKp4VGg, {from: accounts[5]});
		const uintoKlY8nt = BigInt("765")
		const uintUUSFzF = BigInt("603")
		const addresslaWCNt = accounts[2]
		const uintErmuABv = BigInt("1650")
		const addressF2opqof = accounts[2]
		const uintiryijN = BigInt("1447")
		const addressYGOFzaA = accounts[4]
		const uintFAknW51 = await WolfStakingRewardsjI349i4.getReward.call(uintoKlY8nt, {from: accounts[0]});
		const uint256V7LFznp = await WolfStakingRewardsjI349i4.balanceOfPerPool.call(addresslaWCNt, uintUUSFzF, {from: accounts[2]});
		const uint256RjVfTo1 = await WolfStakingRewardsjI349i4.balanceOfPerPool.call(addressF2opqof, uintErmuABv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressYGOFzaA, uintiryijN, {from: accounts[3]});

		assert.equal(uint256RjVfTo1, BigInt("0"))
		assert.equal(uint256V7LFznp, BigInt("0"))
		assert.equal(uint256asVSTnu, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringJpIFhih = "iBTQHUkFHBpoxdWGGhEBePEALIHvuD1oK9AAoXgc5BbzK1KvSRCCP"
		const stringoaPx307 = "Nk4XbnEvtQlefIcq5HRLF6JIS5xJUzn7BwiSSqUSHCfMQxlDumFLuiHq66"
		const uintf8Rp6AR = BigInt("182")
		const WolfStakingRewardscGnOusG = await WolfStakingRewards.new(stringJpIFhih, stringoaPx307, uintf8Rp6AR, {from: accounts[4]});
		const uintvP7V0nJ = BigInt("750")
		const addresszFrvPeQ = accounts[3]
		const uint256vQnD1CX = await WolfStakingRewardscGnOusG.balanceOfPerPool.call(addresszFrvPeQ, uintvP7V0nJ, {from: accounts[2]});
		await WolfStakingRewardscGnOusG.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswqsqWhb = accounts[3]
		const addressvdgUO90 = accounts[3]
		const addresssILYVR9 = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(addresswqsqWhb, addressvdgUO90, addresssILYVR9, {from: accounts[5]});
		const uintzzUR2Q2 = BigInt("180")
		const uintgLVqtU = BigInt("1878")
		const uintJehczQD = BigInt("1471")
		const addressqFP1Q5t = accounts[4]
		const uintC0dOD06 = await WolfStakingRewardsjI349i4.getReward.call(uintzzUR2Q2, {from: accounts[2]});
		const uint256dl4ATU7 = await WolfStakingRewardsjI349i4.totalSupplyPerPool.call(uintgLVqtU, {from: accounts[4]});
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressqFP1Q5t, uintJehczQD, {from: accounts[3]});

		assert.equal(uint256asVSTnu, BigInt("0"))
		assert.equal(uint256dl4ATU7, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringgq4ZSJx = "ZY1XJchRlHp9Yyu6gDVsXJ4Rl5v4fRpVg3jlb92k5zHRF3MzExMAk5wDDupQmCNu7ypxyNtwq2owGg4RCtmxsQKEk2c7cLrx"
		const stringcKmS3Yi = "BYIG3"
		const uintpfdTTiB = BigInt("124")
		const WolfStakingRewardsWNwz3RQ = await WolfStakingRewards.new(stringgq4ZSJx, stringcKmS3Yi, uintpfdTTiB, {from: accounts[0]});
		const uintcEG6qa6 = BigInt("1292")
		const uintpHWQWjR = BigInt("380")
		const uinty28kd2 = BigInt("998")
		const uintcXTWj53 = BigInt("1943")
		const uintIsKv9A5 = BigInt("785")
		const addressoUWMI70 = accounts[1]
		const uint2568E9Vsf = await WolfStakingRewardsWNwz3RQ.withdraw.call(uintpHWQWjR, uintcEG6qa6, {from: accounts[5]});
		const uint256gTAJEM = await WolfStakingRewardsWNwz3RQ.getRewardForDuration.call(uinty28kd2, {from: accounts[0]});
		const uint8RujkTGn = await WolfStakingRewardsWNwz3RQ.decimals.call({from: accounts[3]});
		const uint256FKAv7X1 = await WolfStakingRewardsWNwz3RQ.exit.call(uintcXTWj53, {from: accounts[1]});
		const uint256qju0QB = await WolfStakingRewardsWNwz3RQ.balanceOfPerPool.call(addressoUWMI70, uintIsKv9A5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDsC9Iej = accounts[3]
		const addressKoWjYIc = accounts[3]
		const addressA6Yjz6C = accounts[5]
		const WolfStakingRewardsjI349i4 = await WolfStakingRewards.new(addressDsC9Iej, addressKoWjYIc, addressA6Yjz6C, {from: accounts[5]});
		const uintRtm6VWs = BigInt("1454")
		const addressz5yzGmG = accounts[3]
		const uintx0mzO8i = BigInt("1260")
		const uintxhJWn7R = BigInt("1287")
		const uint256asVSTnu = await WolfStakingRewardsjI349i4.earned.call(addressz5yzGmG, uintRtm6VWs, {from: accounts[3]});
		const uint256JUdVFDm = await WolfStakingRewardsjI349i4.lastTimeRewardApplicable.call(uintx0mzO8i, {from: accounts[2]});
		const uint2566BEcNP = await WolfStakingRewardsjI349i4.exit.call(uintxhJWn7R, {from: accounts[1]});

		assert.equal(uint256JUdVFDm, BigInt("0"))
		assert.equal(uint256asVSTnu, BigInt("0"))
		await expect(WolfStakingRewardsjI349i4.exit.call(uintxhJWn7R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringvsT0prz = "jW0pr09oejvOxW3fxr52uc5CymkJkpxmTF1ywqlPxVa6jwiAJ7OlwlFC"
		const string79ptaq = "F8Tv9nnTcgh3SWlJuEUGllMHqyOlDpdaFQ5HlFy6d6MntWuIlxQJGCrUBJMJWq"
		const uinty0wyzx7 = BigInt("100")
		const WolfStakingRewardsdJjmfZE = await WolfStakingRewards.new(stringvsT0prz, string79ptaq, uinty0wyzx7, {from: "0x0000000000000000000000000000000000000001"});
		const uintUpIw0rA = BigInt("1251")
		const addresspetOxTM = accounts[0]
		const uintFlkxYUT = BigInt("1471")
		const addressgXiAWpF = accounts[3]
		const uintuFOA4Y6 = BigInt("1182")
		const uintSqayoL8 = BigInt("1555")
		const uintGnU37F = BigInt("15")
		const uint256eNS2ajq = await WolfStakingRewardsdJjmfZE.balanceOfPerPool.call(addresspetOxTM, uintUpIw0rA, {from: accounts[0]});
		const uint8Bi558ax = await WolfStakingRewardsdJjmfZE.decimals.call({from: accounts[4]});
		const uint256Xn3e1Ej = await WolfStakingRewardsdJjmfZE.earned.call(addressgXiAWpF, uintFlkxYUT, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsdJjmfZE.nonReentrant.call({from: accounts[1]});
		const uint256UDsyGX6 = await WolfStakingRewardsdJjmfZE.stake.call(uintSqayoL8, uintuFOA4Y6, {from: accounts[1]});
		const uint256xL3pfro = await WolfStakingRewardsdJjmfZE.totalSupplyPerPool.call(uintGnU37F, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhVwgvjK = "jMStdoEAHIcXMnPLHnbEohxKIY5jOVfcG3jyzmHpoHPovWYQt3E"
		const stringaUBUCCH = "cuM2MIbcXLGPD2BJk6wFTkB2GCT7gm9Qz4saiwDij6ethuXAn6bsOuIAJkYspILTSwaJcaE30H19mMRIgRuI7WbvbH"
		const uintv8m703L = BigInt("242")
		const WolfStakingRewardsC8VP7rq = await WolfStakingRewards.new(stringhVwgvjK, stringaUBUCCH, uintv8m703L, {from: accounts[2]});
		const uintFIhGw01 = BigInt("889")
		const uintIcUV5c5 = BigInt("612")
		const uintZa3801p = BigInt("970")
		const uintyZ0TD5D = BigInt("1109")
		const addressCyqOS0b = accounts[0]
		const uint256k6sMVnx = await WolfStakingRewardsC8VP7rq.getRewardForDuration.call(uintFIhGw01, {from: accounts[1]});
		const uint256YEBLhHM = await WolfStakingRewardsC8VP7rq.withdraw.call(uintZa3801p, uintIcUV5c5, {from: accounts[0]});
		const uint256EmMn5qm = await WolfStakingRewardsC8VP7rq.balanceOfPerPool.call(addressCyqOS0b, uintyZ0TD5D, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbp4EZGy = "sKlSGTRJUEMWMrBN5KWckmfzASCLqG5Yy3elFB48fIeIw5D36RE6Bh416d6RY1vXYmMdGDmeidUdjXwhG0XH"
		const stringgC4rbs = "RkLwLIuPcCnpUM8GdU5NAqzz7VVy3X5iM2XX23HT88zRLz15R1BlUCd54PoTPlbtnzzXEuqA4Yjx5NES"
		const uintgqMmd8B = BigInt("74")
		const WolfStakingRewardsssXHTDC = await WolfStakingRewards.new(stringbp4EZGy, stringgC4rbs, uintgqMmd8B, {from: accounts[0]});
		const uintKqxxqMY = BigInt("45")
		const uintLhyTkz6 = BigInt("971")
		const uint256arrayaxMPypO = await WolfStakingRewardsssXHTDC.updateNotifyRewardAmount.call(uintKqxxqMY, {from: accounts[0]});
		const stringSBQIhws = await WolfStakingRewardsssXHTDC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayNClGXz = await WolfStakingRewardsssXHTDC.updateNotifyRewardAmount.call(uintLhyTkz6, {from: accounts[3]});
		const uint8p230xL3 = await WolfStakingRewardsssXHTDC.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIjOKrlf = "YK1Rc7JFvivfubw649uocKnenyh6yJwziLj2CWuacdJcFQM0U1P9WIt7i5AyzzfdQKTNzlNBKRKjYiOT32Ucf5DfBz"
		const stringdaUIi3W = "ww1yRxqgtBgvsWu"
		const uintjMvANdX = BigInt("238")
		const WolfStakingRewardsPa7JoFd = await WolfStakingRewards.new(stringIjOKrlf, stringdaUIi3W, uintjMvANdX, {from: accounts[3]});
		const uintUlV4Flm = BigInt("117")
		const uint256wd56uIs = await WolfStakingRewardsPa7JoFd.rewardPerToken.call(uintUlV4Flm, {from: accounts[3]});
		const uint8B3Z1ke9 = await WolfStakingRewardsPa7JoFd.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const string0La9cG = "XWV4KjJNgErjNCjSCKDFpnW2dmM7WQpgX39zhIqgJwrbFlrcoCA4nyDJTpiOzOEplv4ZNJdTA22x2jhY5flXbM2htU"
		const stringadcvcU2 = "yeq1RNJI1mm6fthGtczMaJEGecv8JotZHSGov1g1PWjkzWsFRVM2R5WOfyyHMeU5796Mkz"
		const uintmaSnp1 = BigInt("131")
		const WolfStakingRewardsnhxIn2C = await WolfStakingRewards.new(string0La9cG, stringadcvcU2, uintmaSnp1, {from: accounts[2]});
		const uintDfujLCO = BigInt("1538")
		const uintVI0z6Y5 = BigInt("2025")
		const uintM9i0IRv = BigInt("60")
		const addressVpR6bs2 = accounts[4]
		const uintehwB3dt = await WolfStakingRewardsnhxIn2C.getReward.call(uintDfujLCO, {from: accounts[4]});
		const uint8kwbWQ6Z = await WolfStakingRewardsnhxIn2C.decimals.call({from: accounts[3]});
		const uint256XhiigG3 = await WolfStakingRewardsnhxIn2C.getRewardForDuration.call(uintVI0z6Y5, {from: accounts[2]});
		const addressWGk21xN = await WolfStakingRewardsnhxIn2C.updateReward.call(addressVpR6bs2, uintM9i0IRv, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsnhxIn2C.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringroQ0MlE = "TL41Aaad6btTEZ2bKmM6wPmJL9swuPmpnbqUyGjVCtxsLYl8PKcts2Yj"
		const stringzpcDK64 = "PCgSmR6hVvRqlOVyjtlvhQGJEwHPRDlLfLNkU22dOspCAYKiDxBN4bkb82RuKsUg"
		const uintz1FYJvi = BigInt("135")
		const WolfStakingRewardsg7Sn3OY = await WolfStakingRewards.new(stringroQ0MlE, stringzpcDK64, uintz1FYJvi, {from: accounts[5]});
		const uintCBibPwO = BigInt("797")
		const addressQYG46pJ = accounts[1]
		const uintLyZuPcd = BigInt("238")
		const addressO156WJZ = accounts[1]
		const uintuRlGUvV = BigInt("1952")
		const addressjqDx5SB = await WolfStakingRewardsg7Sn3OY.updateReward.call(addressQYG46pJ, uintCBibPwO, {from: accounts[0]});
		const uint256xa63w2 = await WolfStakingRewardsg7Sn3OY.balanceOfPerPool.call(addressO156WJZ, uintLyZuPcd, {from: accounts[3]});
		const uint256fsvGis1 = await WolfStakingRewardsg7Sn3OY.exit.call(uintuRlGUvV, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuAIMVtO = "L1jGaR6ze7HUSmEB31hnrv"
		const stringuf74v15 = "64yrxU1y8kOiMLnPPhf2VObtMvSGYTA7PwHe5XebcqVDjDx5g3LgbmcVAmyb8sxBMBgpUVeFlyYizf9EGSkz"
		const uintc1LmCfK = BigInt("213")
		const WolfStakingRewardscmdgZa = await WolfStakingRewards.new(stringuAIMVtO, stringuf74v15, uintc1LmCfK, {from: accounts[0]});
		const uintT2E36d6 = BigInt("79")
		const uintaPT5MzG = BigInt("1631")
		const addressQJTeLGk = accounts[2]
		const uintvKTDfZs = BigInt("1972")
		const uintkjd3HcH = BigInt("844")
		const addressrhCXpIZ = accounts[1]
		const uint256VMms8hR = await WolfStakingRewardscmdgZa.getRewardForDuration.call(uintT2E36d6, {from: accounts[3]});
		const addressIjWdJcM = await WolfStakingRewardscmdgZa.updateReward.call(addressQJTeLGk, uintaPT5MzG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256i340saT = await WolfStakingRewardscmdgZa.rewardPerToken.call(uintvKTDfZs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OqALmgA = await WolfStakingRewardscmdgZa.balanceOfPerPool.call(addressrhCXpIZ, uintkjd3HcH, {from: accounts[4]});
		const stringvjLcTBY = await WolfStakingRewardscmdgZa.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQZZyl0j = "IP5DC5dknSdb4pMWeA"
		const stringbGdBAr = "Bp5E9CgL7rYMq16Ue3YZBQXkiD5LvPgr2x14r2KqLG3p99AJ83J8Ftl"
		const uintS26ArRc = BigInt("50")
		const WolfStakingRewardsW4BeZ9 = await WolfStakingRewards.new(stringQZZyl0j, stringbGdBAr, uintS26ArRc, {from: accounts[2]});
		const uintI5rGpg9 = BigInt("1870")
		const uintytmyDUl = BigInt("569")
		const uint5t6kug = BigInt("1669")
		const uintR3Ow9xw = BigInt("1475")
		const uintP6YwXYl = BigInt("317")
		const uint256hnXyAao = await WolfStakingRewardsW4BeZ9.totalSupplyPerPool.call(uintI5rGpg9, {from: accounts[1]});
		const uint256R8d5k0r = await WolfStakingRewardsW4BeZ9.rewardPerToken.call(uintytmyDUl, {from: accounts[1]});
		const uint256gxPOSQ = await WolfStakingRewardsW4BeZ9.rewardPerToken.call(uint5t6kug, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y5WEbnJ = await WolfStakingRewardsW4BeZ9.withdrawRemainingBalance.call(uintP6YwXYl, uintR3Ow9xw, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxxeVuId = "JnkBs8zMLMLwt3dg5OUMAtQxCbstJNkALupYVh"
		const stringUQCHNKR = "cGfClIp8NWOnPE66yPnA9drJ6XwyKYxPGTIXENNLqrP1WcnCk"
		const uinta8xm9A = BigInt("155")
		const WolfStakingRewardsLhVJLlP = await WolfStakingRewards.new(stringxxeVuId, stringUQCHNKR, uinta8xm9A, {from: accounts[3]});
		const uintgTUzRbD = BigInt("1893")
		const uintKsMdyHK = BigInt("1319")
		const addressrbvCqb0 = accounts[1]
		const uintCQ61Rk9 = BigInt("1305")
		const uinte03D767 = BigInt("81")
		const uint256arrayZuaMW5J = await WolfStakingRewardsLhVJLlP.updateNotifyRewardAmount.call(uintgTUzRbD, {from: accounts[4]});
		const uint256zJ58mSs = await WolfStakingRewardsLhVJLlP.earned.call(addressrbvCqb0, uintKsMdyHK, {from: accounts[0]});
		const uint256array9U6vz8 = await WolfStakingRewardsLhVJLlP.updateNotifyRewardAmount.call(uintCQ61Rk9, {from: accounts[3]});
		const uint256XRdOTA6 = await WolfStakingRewardsLhVJLlP.rewardPerToken.call(uinte03D767, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzGC3Wg = "8f2HhdbT2cagATEbThLf"
		const stringh8TWfcx = "8N0kJLfxls6tFNn61PCUkOzpiArITMc1yQRH55WXdsp0wYNc7ooS"
		const uintDbiED0G = BigInt("49")
		const WolfStakingRewardsmE0w6Sa = await WolfStakingRewards.new(stringzGC3Wg, stringh8TWfcx, uintDbiED0G, {from: accounts[5]});
		const uintSOa5L9S = BigInt("1553")
		const uintrGwgzG4 = BigInt("1435")
		const uintNLfOfo2 = BigInt("1631")
		const uintTSUrVIC = BigInt("759")
		const uintDavgg8I = BigInt("689")
		const uintNCvKGiq = BigInt("1902")
		const uinteglY08R = BigInt("2037")
		const uintAC7XS6i = BigInt("627")
		const uint256lNrcJtK = await WolfStakingRewardsmE0w6Sa.exit.call(uintSOa5L9S, {from: accounts[2]});
		await WolfStakingRewardsmE0w6Sa.nonReentrant.call({from: accounts[0]});
		const uint256lHNY0kZ = await WolfStakingRewardsmE0w6Sa.stake.call(uintNLfOfo2, uintrGwgzG4, {from: accounts[5]});
		const uint256rmtQMUV = await WolfStakingRewardsmE0w6Sa.stake.call(uintDavgg8I, uintTSUrVIC, {from: accounts[3]});
		const uint256VL09NJn = await WolfStakingRewardsmE0w6Sa.lastTimeRewardApplicable.call(uintNCvKGiq, {from: accounts[3]});
		const uint256XH3FA1C = await WolfStakingRewardsmE0w6Sa.stake.call(uintAC7XS6i, uinteglY08R, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFd7Mwcz = "ToevoBmSE3KEVshei69TTpQFAmdXRxRzQB6UrzMsbuDP"
		const stringuYukHYk = "CQS7v7ABB0LeRJdzm2QKzOoy8Hf5ApNC1jR7V8uEoczxHC3dK6Q0E7OL04"
		const uintDhr4G6o = BigInt("252")
		const WolfStakingRewardshkjjOF1 = await WolfStakingRewards.new(stringFd7Mwcz, stringuYukHYk, uintDhr4G6o, {from: "0x0000000000000000000000000000000000000001"});
		const uintyAFNfMS = BigInt("167")
		const addresscGXtelU = accounts[1]
		const uintUlKAah = BigInt("1030")
		const addressAYnICm = accounts[2]
		const uintqcQG65k = BigInt("326")
		const uint256ZcMjqK = await WolfStakingRewardshkjjOF1.balanceOfPerPool.call(addresscGXtelU, uintyAFNfMS, {from: accounts[3]});
		const uint256g1sPyMN = await WolfStakingRewardshkjjOF1.balanceOfPerPool.call(addressAYnICm, uintUlKAah, {from: accounts[2]});
		const uint256nl8ZW2T = await WolfStakingRewardshkjjOF1.totalSupplyPerPool.call(uintqcQG65k, {from: accounts[2]});
		await WolfStakingRewardshkjjOF1.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringULkhHRs = "bT5k6Ej6xSg30QbEjtrH"
		const stringC9TAu4j = "k55yh2fQA"
		const uintlATzTRO = BigInt("193")
		const WolfStakingRewardsl7zk6v5 = await WolfStakingRewards.new(stringULkhHRs, stringC9TAu4j, uintlATzTRO, {from: "0x0000000000000000000000000000000000000001"});
		const uintBxjgcAB = BigInt("295")
		const uintw3ahfm2 = BigInt("937")
		const uintlvbITN1 = BigInt("1559")
		const addressPLgnQYe = accounts[0]
		const uintsLGo4Cj = BigInt("62")
		const uint256cghpnp6 = await WolfStakingRewardsl7zk6v5.withdrawRemainingBalance.call(uintw3ahfm2, uintBxjgcAB, {from: accounts[0]});
		await WolfStakingRewardsl7zk6v5.nonReentrant.call({from: accounts[3]});
		const uint256agGHN9 = await WolfStakingRewardsl7zk6v5.balanceOfPerPool.call(addressPLgnQYe, uintlvbITN1, {from: accounts[0]});
		const uint256cN4VT4 = await WolfStakingRewardsl7zk6v5.rewardPerToken.call(uintsLGo4Cj, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFkRKCPX = "2YE6xSNzYehSzr2KO6rYiDAyVrerC3IGHw72Tk29YuJLVmvNqoQHBqB995gCaVvbK3kheMNhYPmRHs5j9sPmZLSS22afjTzx6"
		const stringPNKeN0I = "AJQUTJUks4133EKf1RYJjuPaeVFZjgS1HH9rPFhKJFl3EeH9055aNT3vSsmIIoqHEyPR1lLiMVDwt8lGz8G5tmC27xPX8"
		const uintt6J1SJQ = BigInt("126")
		const WolfStakingRewardseqQoJwx = await WolfStakingRewards.new(stringFkRKCPX, stringPNKeN0I, uintt6J1SJQ, {from: accounts[1]});
		const uintwrPDxci = BigInt("1022")
		const addressQErsbbe = accounts[3]
		const uintH3mJ2xC = BigInt("1175")
		const uintUpH6dbA = BigInt("1005")
		const uintOyDitjg = BigInt("926")
		const uintWD6RI3Q = BigInt("909")
		const uintoiOeFIo = BigInt("158")
		const addressDRb8oA3 = accounts[3]
		const uint256dRc7Pcv = await WolfStakingRewardseqQoJwx.earned.call(addressQErsbbe, uintwrPDxci, {from: accounts[1]});
		const uint256hIitKXq = await WolfStakingRewardseqQoJwx.totalSupplyPerPool.call(uintH3mJ2xC, {from: accounts[2]});
		const uint256p43ZYoB = await WolfStakingRewardseqQoJwx.withdrawRemainingBalance.call(uintOyDitjg, uintUpH6dbA, {from: accounts[3]});
		const uint256W4qg5Mh = await WolfStakingRewardseqQoJwx.getRewardForDuration.call(uintWD6RI3Q, {from: accounts[1]});
		const uint256lnIIeT = await WolfStakingRewardseqQoJwx.balanceOfPerPool.call(addressDRb8oA3, uintoiOeFIo, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBV4KW12 = "oHGAcaNz3JxBzRRNZTHL7C99gLwMMVPmG5gLDFTtYCeuX8hCfbBchmNnL3H83YVQI71dNwl2jQuSnQdq0oujm7PKU8K"
		const stringjb2IciD = "anuiSV9DXqbz3jpU7yT7Ns96bYBDYbPCFcFPD48qpYfM2pz7AwfpMyM1pm765"
		const uintRCAzOyp = BigInt("49")
		const WolfStakingRewardsijuKSas = await WolfStakingRewards.new(stringBV4KW12, stringjb2IciD, uintRCAzOyp, {from: accounts[4]});
		const uintriUtVqA = BigInt("1768")
		const uintDYwV9sy = BigInt("790")
		const addressAb9hzWh = accounts[3]
		const uinto1NRvoh = BigInt("1800")
		await WolfStakingRewardsijuKSas.nonReentrant.call({from: accounts[0]});
		const uint256C1DMca1 = await WolfStakingRewardsijuKSas.getRewardForDuration.call(uintriUtVqA, {from: accounts[1]});
		const uint256XfRh9RS = await WolfStakingRewardsijuKSas.earned.call(addressAb9hzWh, uintDYwV9sy, {from: accounts[3]});
		const uint256BUPyNT9 = await WolfStakingRewardsijuKSas.rewardPerToken.call(uinto1NRvoh, {from: accounts[2]});
		const uint8CatnnrG = await WolfStakingRewardsijuKSas.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZKdG3O = "T48ljwP0i216kyLNppvuPsxWb9j96L2BCGwzTiw8QNA53z4E"
		const stringjLaTD9Y = "YNLQoXUr4QGr9XZpnYUAKzCmEheJmvhLrKvLak1rX"
		const uintGq52QAK = BigInt("163")
		const WolfStakingRewardshD5virn = await WolfStakingRewards.new(stringZKdG3O, stringjLaTD9Y, uintGq52QAK, {from: accounts[0]});
		const uintG6AHPOH = BigInt("258")
		const uintfM5BhQM = BigInt("1380")
		const uintdjVOEck = await WolfStakingRewardshD5virn.getReward.call(uintG6AHPOH, {from: accounts[0]});
		const uint256Wqp3jZN = await WolfStakingRewardshD5virn.rewardPerToken.call(uintfM5BhQM, {from: accounts[0]});
		await WolfStakingRewardshD5virn.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringT68Y50 = "P7EmiYloZs1eZiWw5ykV7xkeWf99wtjN56edTHBGOPS3WQb2sYNxF3lkU7O4IsHkeRsXoTits6XcYuE4YtMAT4Ca5V"
		const stringXpJySri = "vhJW7YmUTnM4bf4khHMJgSycHyBUeSQWehB0DDPzoskGSDS4r6JmKvZAv3zS5Cnha7UDRLOHIVLxnvK"
		const uintcPrFHuN = BigInt("172")
		const WolfStakingRewardsnefIkL = await WolfStakingRewards.new(stringT68Y50, stringXpJySri, uintcPrFHuN, {from: accounts[4]});
		const uint4JgfPT = BigInt("1087")
		const addressEtjCVF3 = accounts[1]
		const uintbZbe0I4 = BigInt("1280")
		const uintPeofuYY = BigInt("454")
		const uint256uSqJlHF = await WolfStakingRewardsnefIkL.balanceOfPerPool.call(addressEtjCVF3, uint4JgfPT, {from: accounts[1]});
		const uint256xztxB6 = await WolfStakingRewardsnefIkL.getRewardForDuration.call(uintbZbe0I4, {from: accounts[1]});
		const uintPLxV6YU = await WolfStakingRewardsnefIkL.getReward.call(uintPeofuYY, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string71lIMS = "lclUU5KXa4jrwkahL8DlC7e3429"
		const stringDKevhve = "gqRXYjdhNyvTb"
		const uintswbQh0J = BigInt("133")
		const WolfStakingRewardsKClPMF5 = await WolfStakingRewards.new(string71lIMS, stringDKevhve, uintswbQh0J, {from: accounts[0]});
		const uintdV9texF = BigInt("460")
		const addressePSColk = accounts[0]
		const uintkYLziEp = BigInt("207")
		const uintD8h8ebF = BigInt("1533")
		const addresssQxkBxL = await WolfStakingRewardsKClPMF5.updateReward.call(addressePSColk, uintdV9texF, {from: accounts[4]});
		const uint256CYKKib = await WolfStakingRewardsKClPMF5.exit.call(uintkYLziEp, {from: accounts[3]});
		const uint256Yz9GEdK = await WolfStakingRewardsKClPMF5.lastTimeRewardApplicable.call(uintD8h8ebF, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsH7m2fI = "qCTvYjYeIKETHUxen"
		const stringnuJYhKE = "e12b9nI9k8lnGLQE38NJcJkw62gTHypYHNpRr9UysCcpg1LmxamF"
		const uintyDg417c = BigInt("201")
		const WolfStakingRewardss4u4pke = await WolfStakingRewards.new(stringsH7m2fI, stringnuJYhKE, uintyDg417c, {from: accounts[1]});
		const uinthdfd3n = BigInt("1263")
		const uintPlyKcO7 = BigInt("178")
		const uintVC9wva = BigInt("1817")
		const uintJVHBtoX = BigInt("286")
		const addressAAAbAjJ = accounts[2]
		await WolfStakingRewardss4u4pke.onlyOwner.call({from: accounts[1]});
		await WolfStakingRewardss4u4pke.nonReentrant.call({from: accounts[5]});
		const uint256am7FHAm = await WolfStakingRewardss4u4pke.stake.call(uintPlyKcO7, uinthdfd3n, {from: accounts[0]});
		const uinteEVC2i = await WolfStakingRewardss4u4pke.getReward.call(uintVC9wva, {from: accounts[1]});
		const uint256n9gkHqi = await WolfStakingRewardss4u4pke.earned.call(addressAAAbAjJ, uintJVHBtoX, {from: accounts[2]});
		await WolfStakingRewardss4u4pke.onlyOwner.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringz7kGntr = "yLlat6iyQbF9KxlZB5vNXJsteGzDXRccJRZOB4oWP1jf9YuC"
		const stringbIYBF53 = "b8uPtqMgyBhVx37jZKaC71YGwQnfFCEthyQ7tEkBYWgCSyZ2hDUyarXLdxpwrTmyYWWF"
		const uintIKtiuy = BigInt("225")
		const WolfStakingRewardsbahaYfZ = await WolfStakingRewards.new(stringz7kGntr, stringbIYBF53, uintIKtiuy, {from: accounts[3]});
		const uintSlQMDW = BigInt("1604")
		const uinthJezQ54 = BigInt("718")
		const uint256OfTJ7X = await WolfStakingRewardsbahaYfZ.rewardPerToken.call(uintSlQMDW, {from: accounts[4]});
		const uint256GljJiPL = await WolfStakingRewardsbahaYfZ.lastTimeRewardApplicable.call(uinthJezQ54, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHA8ld6O = "GlbUxvvXEcSNYt6MKdU9gC8mVF7AK02ldkxWLUQdFaojeqttyDLpAC94SH8hVgmXlZvC"
		const stringNeH5Juw = "xcJDurJRHprkkdEf67PCCPTah8y9uDkdXPmXHue7mddth8wb3"
		const uintAijpSNJ = BigInt("202")
		const WolfStakingRewardsYIlGUdU = await WolfStakingRewards.new(stringHA8ld6O, stringNeH5Juw, uintAijpSNJ, {from: accounts[4]});
		const uintR0XxZVZ = BigInt("1544")
		const addressH7oe18f = accounts[2]
		const uintZLNmRlp = BigInt("259")
		const uint256o0ttpON = await WolfStakingRewardsYIlGUdU.earned.call(addressH7oe18f, uintR0XxZVZ, {from: accounts[1]});
		await WolfStakingRewardsYIlGUdU.nonReentrant.call({from: accounts[5]});
		const stringmUE3VN = await WolfStakingRewardsYIlGUdU.symbol.call({from: accounts[1]});
		const uint256arrayvziUWs = await WolfStakingRewardsYIlGUdU.updateNotifyRewardAmount.call(uintZLNmRlp, {from: accounts[3]});
		const stringBECF54 = await WolfStakingRewardsYIlGUdU.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQYVaGav = "d7M3JSwRQWZFtwNkmGROihKY7A14WfiL0sz8V9YDMGdCzxovf"
		const stringCFHTawN = "RukRe7YB3BL3PzD6VqOUu1frLyXh2v9ZkFsWLuzD0d"
		const uintNotOTX = BigInt("156")
		const WolfStakingRewardsGuX3U9t = await WolfStakingRewards.new(stringQYVaGav, stringCFHTawN, uintNotOTX, {from: accounts[5]});
		const uintm8GLQ2 = BigInt("867")
		const uintHGuaAr6 = BigInt("932")
		const stringtt9HSTH = await WolfStakingRewardsGuX3U9t.name.call({from: accounts[1]});
		await WolfStakingRewardsGuX3U9t.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256jDAl6ZV = await WolfStakingRewardsGuX3U9t.withdraw.call(uintHGuaAr6, uintm8GLQ2, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpuHHFu7 = "4vlm4wAZy3511nLJZphOmkGNlwPXj44YJ12yGCqcPNcs5yUBKD3q5h"
		const stringisHa7ez = "i0n25WoGl8ljd8I1SOIeFRHdjeiQKajqqbjl37a7v5OLTG7zGIsw4ttBJlDTFExUBfY2Okp4z6M5kEk"
		const uintn5YtYs5 = BigInt("200")
		const WolfStakingRewardsoSPPrMG = await WolfStakingRewards.new(stringpuHHFu7, stringisHa7ez, uintn5YtYs5, {from: "0x0000000000000000000000000000000000000001"});
		const uintLaTRkWm = BigInt("148")
		const uintqEC1Ox5 = BigInt("554")
		const uintOON7JTo = BigInt("217")
		const uint256AmTUnUn = await WolfStakingRewardsoSPPrMG.totalSupplyPerPool.call(uintLaTRkWm, {from: accounts[0]});
		const uint256sOiqBTA = await WolfStakingRewardsoSPPrMG.lastTimeRewardApplicable.call(uintqEC1Ox5, {from: accounts[4]});
		const uint256TSqdR5z = await WolfStakingRewardsoSPPrMG.rewardPerToken.call(uintOON7JTo, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdZeqj6N = "3dVUqJ"
		const stringJvR7wW9 = "ailQf2AYdy7CIl"
		const uintLkxqbCB = BigInt("226")
		const WolfStakingRewardskdeIFNj = await WolfStakingRewards.new(stringdZeqj6N, stringJvR7wW9, uintLkxqbCB, {from: accounts[3]});
		const uintncB3erS = BigInt("406")
		const uintnSwtiQG = BigInt("1100")
		const uintT0ZCkiB = BigInt("240")
		const uintogkaV0L = BigInt("1517")
		const uintW4o8vrc = BigInt("397")
		const uinteN19Tx6 = BigInt("1005")
		const uinthP9LWGH = BigInt("147")
		const uint256mlIl1iK = await WolfStakingRewardskdeIFNj.withdrawRemainingBalance.call(uintnSwtiQG, uintncB3erS, {from: accounts[0]});
		const uintkf66wcy = await WolfStakingRewardskdeIFNj.getReward.call(uintT0ZCkiB, {from: accounts[1]});
		const uint256By1r2vN = await WolfStakingRewardskdeIFNj.stake.call(uintW4o8vrc, uintogkaV0L, {from: accounts[2]});
		const uint256Nx6S6wd = await WolfStakingRewardskdeIFNj.rewardPerToken.call(uinteN19Tx6, {from: accounts[1]});
		const uint256WwrvX2Z = await WolfStakingRewardskdeIFNj.exit.call(uinthP9LWGH, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb5enYzE = "QvOP1qggOGMB3yzr7GuWSYA8L4Fa2HNbTeNkdA8eVW2ulxDfiP9ElIgDhjlN9XI593t6mzRkwMTHZQCxCtdu"
		const stringgKPjIHb = "R86prYsAJPx7ief6VObGMrYd"
		const uintCzRf9Vq = BigInt("253")
		const WolfStakingRewardsPqub2n3 = await WolfStakingRewards.new(stringb5enYzE, stringgKPjIHb, uintCzRf9Vq, {from: accounts[3]});
		const uint0NFjxV = BigInt("838")
		const uintO0FeSsy = BigInt("929")
		const uintb6V55w = BigInt("1127")
		const uintMc5BpMd = BigInt("1661")
		const addressL8Gm23c = accounts[3]
		const uintcNJD8mb = BigInt("167")
		const uintqF8pjhC = BigInt("1130")
		const uint256arraysPHXsUV = await WolfStakingRewardsPqub2n3.updateNotifyRewardAmount.call(uint0NFjxV, {from: accounts[4]});
		const uint256eTossfj = await WolfStakingRewardsPqub2n3.withdrawRemainingBalance.call(uintb6V55w, uintO0FeSsy, {from: accounts[3]});
		const uint256Zt0bZeX = await WolfStakingRewardsPqub2n3.balanceOfPerPool.call(addressL8Gm23c, uintMc5BpMd, {from: accounts[5]});
		const uint256gBemQS3 = await WolfStakingRewardsPqub2n3.rewardPerToken.call(uintcNJD8mb, {from: accounts[1]});
		const uintS30Vy9W = await WolfStakingRewardsPqub2n3.getReward.call(uintqF8pjhC, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLLbk8hu = "VJK5zvYY3jQ9N9rwYJccZTHhAFWnMKvnr8njBsAEayXBk2wNLnU"
		const stringpwDGefR = "CqtsXsPhIBywozzLGvB5c6MM1WeMWAJTAMRfkA"
		const uintMrdKWW = BigInt("56")
		const WolfStakingRewardsks8Qvcc = await WolfStakingRewards.new(stringLLbk8hu, stringpwDGefR, uintMrdKWW, {from: accounts[3]});
		const uintxA6SLEF = BigInt("719")
		const uintfotMwsb = BigInt("355")
		const addresseRDFznh = accounts[2]
		const uinthd6BFBj = BigInt("940")
		const uintZ4MRvuP = BigInt("1794")
		const uintp71rwSz = BigInt("1002")
		const uintOpd2BJ = BigInt("792")
		const uint256arraytx274Ux = await WolfStakingRewardsks8Qvcc.updateNotifyRewardAmount.call(uintxA6SLEF, {from: accounts[3]});
		const uint256wOiYV9J = await WolfStakingRewardsks8Qvcc.balanceOfPerPool.call(addresseRDFznh, uintfotMwsb, {from: accounts[0]});
		const uintyWVSj6g = await WolfStakingRewardsks8Qvcc.getReward.call(uinthd6BFBj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GeDQ9J = await WolfStakingRewardsks8Qvcc.totalSupplyPerPool.call(uintZ4MRvuP, {from: accounts[2]});
		const uint256TdeO2ux = await WolfStakingRewardsks8Qvcc.withdraw.call(uintOpd2BJ, uintp71rwSz, {from: accounts[5]});
	});
})