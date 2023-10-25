const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressKWKNhQR = accounts[1]
		const addressEvCkgI1 = accounts[1]
		const addresseQDYmQY = accounts[1]
		const MarsStakingRewardsQqD6AD3 = await MarsStakingRewards.new(addressKWKNhQR, addressEvCkgI1, addresseQDYmQY, {from: "0x0000000000000000000000000000000000000001"});
		const uintVvII0R2 = BigInt("1447")
		const uint256fzw839a = await MarsStakingRewardsQqD6AD3.totalSupply.call({from: accounts[5]});
		const uint256jJslFe2 = await MarsStakingRewardsQqD6AD3.withdraw.call(uintVvII0R2, {from: accounts[5]});
		const uint256DSxX9Sp = await MarsStakingRewardsQqD6AD3.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardsQqD6AD3.getReward.call({from: accounts[3]});
		const uint256YNjCxQS = await MarsStakingRewardsQqD6AD3.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MarsStakingRewards', async () => {
		const addressENf5fl = accounts[4]
		const addressMmJEPko = accounts[2]
		const addressxK6ibnt = accounts[0]
		const MarsStakingRewardsaJKmS3 = await MarsStakingRewards.new(addressENf5fl, addressMmJEPko, addressxK6ibnt, {from: accounts[2]});
		const uintbEf1MA3 = BigInt("1254")
		const uintJcs8jsn = BigInt("1363")
		const addressbseLHzA = "0x0000000000000000000000000000000000000001"
		const uint256I9evHk = await MarsStakingRewardsaJKmS3.notifyRewardAmount.call(uintJcs8jsn, uintbEf1MA3, {from: accounts[1]});
		const addresseiN5d0G = await MarsStakingRewardsaJKmS3.updateReward.call(addressbseLHzA, {from: accounts[1]});
		const uint256UCr2Rd = await MarsStakingRewardsaJKmS3.rewardPerToken.call({from: accounts[5]});

		await expect(MarsStakingRewardsaJKmS3.notifyRewardAmount.call(uintJcs8jsn, uintbEf1MA3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressL56bmdE = accounts[1]
		const addressjKsEKQ = accounts[3]
		const addressQamYOCd = accounts[0]
		const MarsStakingRewardsYwgNhLo = await MarsStakingRewards.new(addressL56bmdE, addressjKsEKQ, addressQamYOCd, {from: accounts[1]});
		const addressseQjv5 = accounts[0]
		await MarsStakingRewardsYwgNhLo.getReward.call({from: accounts[5]});
		const uint256KzvM7wf = await MarsStakingRewardsYwgNhLo.rewardPerToken.call({from: accounts[0]});
		const uint256M63oIfv = await MarsStakingRewardsYwgNhLo.earned.call(addressseQjv5, {from: accounts[0]});
		await MarsStakingRewardsYwgNhLo.onlyOwner.call({from: accounts[5]});

		await expect(MarsStakingRewardsYwgNhLo.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressSAfmx9e = accounts[5]
		const addressmNvUrPx = "0x0000000000000000000000000000000000000001"
		const addressIgR9Nwj = accounts[2]
		const MarsStakingRewardsCmMWGI5 = await MarsStakingRewards.new(addressSAfmx9e, addressmNvUrPx, addressIgR9Nwj, {from: accounts[5]});
		const addressh9EpYvE = accounts[3]
		const addresswD9qaT0 = accounts[3]
		const uint256yszKkFt = await MarsStakingRewardsCmMWGI5.balanceOf.call(addressh9EpYvE, {from: accounts[5]});
		const uint256RgDjk5d = await MarsStakingRewardsCmMWGI5.getRewardForDuration.call({from: accounts[0]});
		const addressIKJJ6Yd = await MarsStakingRewardsCmMWGI5.updateReward.call(addresswD9qaT0, {from: accounts[4]});

		assert.equal(uint256RgDjk5d, BigInt("0"))
		assert.equal(uint256yszKkFt, BigInt("0"))
		await expect(MarsStakingRewardsCmMWGI5.updateReward.call(addresswD9qaT0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZswQiqZ = accounts[2]
		const addressRYOdPuA = accounts[1]
		const addressipQgWed = accounts[3]
		const MarsStakingRewardsijB3CIg = await MarsStakingRewards.new(addressZswQiqZ, addressRYOdPuA, addressipQgWed, {from: accounts[1]});
		const addressrzX3IA1 = accounts[0]
		const addressv45mvx5 = accounts[5]
		const addressJ9A0V42 = await MarsStakingRewardsijB3CIg.transferOwnership.call(addressrzX3IA1, {from: accounts[2]});
		const addresswoEKAIB = await MarsStakingRewardsijB3CIg.setRewardsDistribution.call(addressv45mvx5, {from: accounts[0]});
		const uint256jdBDqUn = await MarsStakingRewardsijB3CIg.totalSupply.call({from: accounts[5]});
		await MarsStakingRewardsijB3CIg.exit.call({from: accounts[2]});

		await expect(MarsStakingRewardsijB3CIg.transferOwnership.call(addressrzX3IA1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaO4xWd9 = accounts[4]
		const addressSoYqfOz = accounts[1]
		const addressTWWQ5Ez = accounts[0]
		const MarsStakingRewardsrvZ5W7z = await MarsStakingRewards.new(addressaO4xWd9, addressSoYqfOz, addressTWWQ5Ez, {from: accounts[1]});
		const uintoLpF2Ln = BigInt("102")
		const uintM1X0G0w = BigInt("42")
		const uintYQm54FY = BigInt("1599")
		const uint256pL1aMgJ = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[3]});
		const uint256vGE5let = await MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintM1X0G0w, uintoLpF2Ln, {from: accounts[5]});
		const uint256mTfUWZn = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[0]});
		const uint256U2lXaur = await MarsStakingRewardsrvZ5W7z.withdraw.call(uintYQm54FY, {from: accounts[3]});
		const boolkfOjxFj = await MarsStakingRewardsrvZ5W7z.isOwner.call({from: accounts[4]});

		assert.equal(uint256pL1aMgJ, BigInt("0"))
		await expect(MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintM1X0G0w, uintoLpF2Ln, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQp7PKyz = "0x0000000000000000000000000000000000000001"
		const addressHisPpl2 = accounts[5]
		const addressdlop3lr = accounts[0]
		const MarsStakingRewardsu5OeHV = await MarsStakingRewards.new(addressQp7PKyz, addressHisPpl2, addressdlop3lr, {from: accounts[2]});
		const bytezSl8PTv = "0x17151b051a1b1504020704070215101a150a0b1401010e1b021404141f090706"
		const bytexkAtCp = "0x100d130714050208131f03100c1414000f200d121919060916080a0f010f1d07"
		const uintX14C3Bn = BigInt("145")
		const uinty4JmS37 = BigInt("262")
		const uintYnkSYVa = BigInt("1434")
		const uint256NFkLrLS = await MarsStakingRewardsu5OeHV.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardsu5OeHV.exit.call({from: accounts[1]});
		const uint256F6jUUXF = await MarsStakingRewardsu5OeHV.stakeWithPermit.call(uintYnkSYVa, uinty4JmS37, uintX14C3Bn, bytexkAtCp, bytezSl8PTv, {from: accounts[3]});

		assert.equal(uint256NFkLrLS, BigInt("0"))
		await expect(MarsStakingRewardsu5OeHV.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXBgVJj8 = accounts[4]
		const addresspEYrylh = accounts[1]
		const addressH9FhaiA = accounts[0]
		const MarsStakingRewardsrvZ5W7z = await MarsStakingRewards.new(addressXBgVJj8, addresspEYrylh, addressH9FhaiA, {from: accounts[1]});
		const addressToffmtC = accounts[3]
		const uintW9EOSb = BigInt("102")
		const uintJjj5G6s = BigInt("1385")
		const addressJwKXxyk = "0x0000000000000000000000000000000000000001"
		const uintGu9y5yD = BigInt("1599")
		const uint256pL1aMgJ = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[3]});
		const addressphmUiRS = await MarsStakingRewardsrvZ5W7z.transferOwnership.call(addressToffmtC, {from: accounts[1]});
		const uint256vGE5let = await MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintJjj5G6s, uintW9EOSb, {from: accounts[5]});
		const uint256mTfUWZn = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[0]});
		const addressoRP4bsO = await MarsStakingRewardsrvZ5W7z.setRewardsDistribution.call(addressJwKXxyk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U2lXaur = await MarsStakingRewardsrvZ5W7z.withdraw.call(uintGu9y5yD, {from: accounts[3]});
		const boolkfOjxFj = await MarsStakingRewardsrvZ5W7z.isOwner.call({from: accounts[4]});

		assert.equal(uint256pL1aMgJ, BigInt("0"))
		await expect(MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintJjj5G6s, uintW9EOSb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmONKk4l = accounts[4]
		const addressgH9l4UP = accounts[1]
		const addresstzVeQu = accounts[0]
		const MarsStakingRewardsrvZ5W7z = await MarsStakingRewards.new(addressmONKk4l, addressgH9l4UP, addresstzVeQu, {from: accounts[1]});
		const uintqhxxrul = BigInt("1089")
		const addresskRf6NT0 = accounts[1]
		const uintb2uNLNh = BigInt("102")
		const uintfa2TYRo = BigInt("42")
		const uinterd9Zoq = BigInt("1599")
		const addressO7W7EcS = await MarsStakingRewardsrvZ5W7z.inCaseTokensGetStuck.call(addresskRf6NT0, uintqhxxrul, {from: accounts[1]});
		const uint256pL1aMgJ = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[3]});
		const uint256vGE5let = await MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintfa2TYRo, uintb2uNLNh, {from: accounts[5]});
		const uint256mTfUWZn = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[0]});
		const uint256U2lXaur = await MarsStakingRewardsrvZ5W7z.withdraw.call(uinterd9Zoq, {from: accounts[3]});
		const boolkfOjxFj = await MarsStakingRewardsrvZ5W7z.isOwner.call({from: accounts[4]});

		await expect(MarsStakingRewardsrvZ5W7z.inCaseTokensGetStuck.call(addresskRf6NT0, uintqhxxrul, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrKcQ2Ks = accounts[4]
		const addressgF86goz = accounts[1]
		const addressjhqFLb0 = accounts[0]
		const MarsStakingRewardsrvZ5W7z = await MarsStakingRewards.new(addressrKcQ2Ks, addressgF86goz, addressjhqFLb0, {from: accounts[1]});
		const uintgd3oSVH = BigInt("1089")
		const addressrmmptsq = accounts[0]
		const uintDbCVcZi = BigInt("102")
		const uintmO3bNZy = BigInt("42")
		const uintHDRZhnx = BigInt("1580")
		const addressO7W7EcS = await MarsStakingRewardsrvZ5W7z.inCaseTokensGetStuck.call(addressrmmptsq, uintgd3oSVH, {from: accounts[1]});
		const uint256pL1aMgJ = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[3]});
		const uint256vGE5let = await MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintmO3bNZy, uintDbCVcZi, {from: accounts[5]});
		const uint256mTfUWZn = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[0]});
		const uint256U2lXaur = await MarsStakingRewardsrvZ5W7z.withdraw.call(uintHDRZhnx, {from: accounts[3]});
		const boolkfOjxFj = await MarsStakingRewardsrvZ5W7z.isOwner.call({from: accounts[4]});

		await expect(MarsStakingRewardsrvZ5W7z.inCaseTokensGetStuck.call(addressrmmptsq, uintgd3oSVH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDkOHRWN = accounts[4]
		const addresssdtueB = accounts[1]
		const addressajjhnTv = accounts[0]
		const MarsStakingRewardsrvZ5W7z = await MarsStakingRewards.new(addressDkOHRWN, addresssdtueB, addressajjhnTv, {from: accounts[1]});
		const address4CTujw = accounts[0]
		const uintDkynhJl = BigInt("102")
		const uintbKZF1oG = BigInt("42")
		const uintMPOCFwe = BigInt("1599")
		const uint2562fH0SW = await MarsStakingRewardsrvZ5W7z.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pL1aMgJ = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[3]});
		const addresssy2Ehre = await MarsStakingRewardsrvZ5W7z.setRewardsDistribution.call(address4CTujw, {from: accounts[3]});
		const uint256vGE5let = await MarsStakingRewardsrvZ5W7z.notifyRewardAmount.call(uintbKZF1oG, uintDkynhJl, {from: accounts[5]});
		const uint256mTfUWZn = await MarsStakingRewardsrvZ5W7z.rewardPerToken.call({from: accounts[0]});
		const uint256U2lXaur = await MarsStakingRewardsrvZ5W7z.withdraw.call(uintMPOCFwe, {from: accounts[3]});
		const boolkfOjxFj = await MarsStakingRewardsrvZ5W7z.isOwner.call({from: accounts[4]});

		assert.equal(uint2562fH0SW, BigInt("0"))
		assert.equal(uint256pL1aMgJ, BigInt("0"))
		await expect(MarsStakingRewardsrvZ5W7z.setRewardsDistribution.call(address4CTujw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjqXWGj1 = "0x0000000000000000000000000000000000000001"
		const addressc5GCedK = accounts[5]
		const addresstcIZhTD = accounts[0]
		const MarsStakingRewardsu5OeHV = await MarsStakingRewards.new(addressjqXWGj1, addressc5GCedK, addresstcIZhTD, {from: accounts[2]});
		const addressiYjorjI = accounts[5]
		const byteZKGV59L = "0x17151b051a1b1504020704070215101a15090b1401010e1b021404141f090706"
		const bytecTjNUL = "0x140f0a151c20191b031812120011110c190b1f140014200e1d0d1c110b07140f"
		const uintLWJD1VQ = BigInt("145")
		const uintR7rHI7e = BigInt("262")
		const uintHX2b1D = BigInt("1464")
		const uint256NFkLrLS = await MarsStakingRewardsu5OeHV.getRewardForDuration.call({from: accounts[3]});
		const uint256LCbjee = await MarsStakingRewardsu5OeHV.earned.call(addressiYjorjI, {from: accounts[3]});
		const uint256F6jUUXF = await MarsStakingRewardsu5OeHV.stakeWithPermit.call(uintHX2b1D, uintR7rHI7e, uintLWJD1VQ, bytecTjNUL, byteZKGV59L, {from: accounts[3]});

		assert.equal(uint256LCbjee, BigInt("0"))
		assert.equal(uint256NFkLrLS, BigInt("0"))
		await expect(MarsStakingRewardsu5OeHV.stakeWithPermit.call(uintHX2b1D, uintR7rHI7e, uintLWJD1VQ, bytecTjNUL, byteZKGV59L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressht6mgJ9 = "0x0000000000000000000000000000000000000001"
		const addressPwsCJ1K = accounts[5]
		const addressfF7xG3 = accounts[0]
		const MarsStakingRewardsu5OeHV = await MarsStakingRewards.new(addressht6mgJ9, addressPwsCJ1K, addressfF7xG3, {from: accounts[2]});
		const addressI8UqEWp = accounts[0]
		const bytetb2Q50K = "0x17151b051a1b1504020704070215101a150a0b1401010e1b021404141f090706"
		const byteWBfrVIM = "0x100d130714050208131f03100c1414000f200d121919060916080a0f010f1d07"
		const uintlZFFQTO = BigInt("145")
		const uintx9V5w8 = BigInt("262")
		const uintGDgXVNb = BigInt("1464")
		const uint256NFkLrLS = await MarsStakingRewardsu5OeHV.getRewardForDuration.call({from: accounts[3]});
		const uint256VzTSrs = await MarsStakingRewardsu5OeHV.totalSupply.call({from: accounts[0]});
		const addressmMYX4BF = await MarsStakingRewardsu5OeHV.updateReward.call(addressI8UqEWp, {from: accounts[2]});
		const uint256F6jUUXF = await MarsStakingRewardsu5OeHV.stakeWithPermit.call(uintGDgXVNb, uintx9V5w8, uintlZFFQTO, byteWBfrVIM, bytetb2Q50K, {from: accounts[3]});

		assert.equal(uint256NFkLrLS, BigInt("0"))
		assert.equal(uint256VzTSrs, BigInt("0"))
		await expect(MarsStakingRewardsu5OeHV.updateReward.call(addressI8UqEWp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscGtsjjB = "0x0000000000000000000000000000000000000001"
		const addressMj4KS4 = accounts[5]
		const addressD1p7CQ8 = accounts[0]
		const MarsStakingRewardsu5OeHV = await MarsStakingRewards.new(addresscGtsjjB, addressMj4KS4, addressD1p7CQ8, {from: accounts[2]});
		const byteMzOya6B = "0x17151b051a1b1504020704070215101a150a0b1401010e1b021404141f090706"
		const bytecH5ccz2 = "0x100d130714050208131f03100c1414000f200d121919060916080a0f010f1d07"
		const uintyiNhcFT = BigInt("145")
		const uintlD3MkvL = BigInt("262")
		const uintwa6Fe4K = BigInt("1464")
		const uint256NFkLrLS = await MarsStakingRewardsu5OeHV.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardsu5OeHV.renounceOwnership.call({from: accounts[2]});
		const uint256XZeKLxF = await MarsStakingRewardsu5OeHV.totalSupply.call({from: accounts[0]});
		const uint256F6jUUXF = await MarsStakingRewardsu5OeHV.stakeWithPermit.call(uintwa6Fe4K, uintlD3MkvL, uintyiNhcFT, bytecH5ccz2, byteMzOya6B, {from: accounts[3]});

		assert.equal(uint256NFkLrLS, BigInt("0"))
		await expect(MarsStakingRewardsu5OeHV.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYBL05W2 = accounts[2]
		const addressaCyX82s = "0x0000000000000000000000000000000000000001"
		const addressDY5y2Ew = accounts[4]
		const MarsStakingRewardsy05tmT2 = await MarsStakingRewards.new(addressYBL05W2, addressaCyX82s, addressDY5y2Ew, {from: accounts[4]});
		const uintgZqqd9J = BigInt("108")
		const uintlLoGtEm = BigInt("751")
		const uintHWZ1W9y = BigInt("1044")
		const uint256D9oYB8t = await MarsStakingRewardsy05tmT2.rewardPerToken.call({from: accounts[4]});
		const uint256TwYLaqH = await MarsStakingRewardsy05tmT2.notifyRewardAmount.call(uintlLoGtEm, uintgZqqd9J, {from: accounts[2]});
		const uint256cZQBn1X = await MarsStakingRewardsy05tmT2.rewardPerToken.call({from: accounts[3]});
		const uint256BOPkpCw = await MarsStakingRewardsy05tmT2.stake.call(uintHWZ1W9y, {from: accounts[1]});

		assert.equal(uint256D9oYB8t, BigInt("0"))
		await expect(MarsStakingRewardsy05tmT2.notifyRewardAmount.call(uintlLoGtEm, uintgZqqd9J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAue0Zh = "0x0000000000000000000000000000000000000001"
		const addressr9TVXPv = accounts[5]
		const addressEmXue9R = accounts[0]
		const MarsStakingRewardsu5OeHV = await MarsStakingRewards.new(addressAue0Zh, addressr9TVXPv, addressEmXue9R, {from: accounts[2]});
		const addressHKJ2sC2 = accounts[5]
		const addressnObeCsz = await MarsStakingRewardsu5OeHV.setRewardsDistribution.call(addressHKJ2sC2, {from: accounts[2]});
		const uint256sweLdUr = await MarsStakingRewardsu5OeHV.rewardPerToken.call({from: accounts[4]});
		const uint256NFkLrLS = await MarsStakingRewardsu5OeHV.getRewardForDuration.call({from: accounts[3]});

		assert.equal(uint256NFkLrLS, BigInt("0"))
		assert.equal(uint256sweLdUr, BigInt("0"))
	});
})