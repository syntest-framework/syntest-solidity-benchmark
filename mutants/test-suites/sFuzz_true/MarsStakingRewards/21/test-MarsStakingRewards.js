const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressKHHoKuI = accounts[3]
		const addresss1eqLq2 = accounts[0]
		const addressVYTaSb6 = accounts[3]
		const MarsStakingRewardsUTyrO6b = await MarsStakingRewards.new(addressKHHoKuI, addresss1eqLq2, addressVYTaSb6, {from: accounts[3]});
//		await MarsStakingRewardsUTyrO6b.onlyOwner.call({from: accounts[3]});
//		const uint256C2nnIsH = await MarsStakingRewardsUTyrO6b.lastTimeRewardApplicable.call({from: accounts[1]});
//		const boolzUw4eFJ = await MarsStakingRewardsUTyrO6b.isOwner.call({from: accounts[1]});

		await expect(MarsStakingRewardsUTyrO6b.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskoY6Ox = accounts[0]
		const addresseKm489t = accounts[5]
		const addressPIkNnU1 = accounts[3]
		const MarsStakingRewardskGKY7T = await MarsStakingRewards.new(addresskoY6Ox, addresseKm489t, addressPIkNnU1, {from: accounts[4]});
		const uinthD2XDs = BigInt("130")
		const uintojoDJ6 = BigInt("582")
		const uintQCUaQHi = BigInt("1453")
		const uint256o9F7UDK = await MarsStakingRewardskGKY7T.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256RFGkH36 = await MarsStakingRewardskGKY7T.withdraw.call(uinthD2XDs, {from: accounts[1]});
//		const uint256INRQJkb = await MarsStakingRewardskGKY7T.notifyRewardAmount.call(uintQCUaQHi, uintojoDJ6, {from: accounts[2]});

		assert.equal(uint256o9F7UDK, BigInt("0"))
		await expect(MarsStakingRewardskGKY7T.withdraw.call(uinthD2XDs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressOkCQ8bq = accounts[2]
		const addressgg9jOYE = accounts[4]
		const addresskXaLrlG = accounts[0]
		const MarsStakingRewardsiU4Qfqc = await MarsStakingRewards.new(addressOkCQ8bq, addressgg9jOYE, addresskXaLrlG, {from: accounts[2]});
//		await MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[4]});
//		const addressZQZtYKG = await MarsStakingRewardsiU4Qfqc.owner.call({from: accounts[4]});

		await expect(MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLE3SSgy = accounts[2]
		const addressKMJoD9t = accounts[1]
		const addressKes9iqp = accounts[1]
		const MarsStakingRewardsyRHxe5J = await MarsStakingRewards.new(addressLE3SSgy, addressKMJoD9t, addressKes9iqp, {from: accounts[4]});
		const addressxAwOopQ = accounts[4]
		const uint256pw63umf = await MarsStakingRewardsyRHxe5J.rewardPerToken.call({from: accounts[5]});
//		await MarsStakingRewardsyRHxe5J.onlyRewardsDistribution.call({from: accounts[3]});
//		await MarsStakingRewardsyRHxe5J.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256w9EOm4w = await MarsStakingRewardsyRHxe5J.earned.call(addressxAwOopQ, {from: accounts[3]});
//		const uint256cQqSuD = await MarsStakingRewardsyRHxe5J.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256pw63umf, BigInt("0"))
		await expect(MarsStakingRewardsyRHxe5J.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXVd7AP = "0x0000000000000000000000000000000000000001"
		const addressEpns9C4 = accounts[0]
		const addressAadz9R = accounts[2]
		const MarsStakingRewardsOiXJIwF = await MarsStakingRewards.new(addressXVd7AP, addressEpns9C4, addressAadz9R, {from: "0x0000000000000000000000000000000000000001"});
		const addressDgutMig = accounts[5]
		const addressgIAZcTY = accounts[2]
		const uintFSOLtdU = BigInt("1190")
		const addressahpUbeZ = accounts[5]
		const byteiwu2rbd = "0x1c0a071c1203130d0515190419081c15070d0f171f0c170b1b19060d0803000a"
		const bytebH57NRb = "0x0715051c00090c0f1016200a1b111a011d14070f1c140c11020e0f0d070f1802"
		const uintQGQ1ZL = BigInt("26")
		const uintW6xQcSO = BigInt("600")
		const uintzsT2f8o = BigInt("297")
		const addressSAkdv5K = await MarsStakingRewardsOiXJIwF.updateReward.call(addressDgutMig, {from: "0x0000000000000000000000000000000000000001"});
		const addresskQ9yZKo = await MarsStakingRewardsOiXJIwF.transferOwnership.call(addressgIAZcTY, {from: accounts[5]});
		await MarsStakingRewardsOiXJIwF.renounceOwnership.call({from: accounts[2]});
		const uint256AGqy1tL = await MarsStakingRewardsOiXJIwF.withdraw.call(uintFSOLtdU, {from: accounts[2]});
		const addressnfy0BE8 = await MarsStakingRewardsOiXJIwF.transferOwnership.call(addressahpUbeZ, {from: accounts[0]});
		const uint256kZgQaE = await MarsStakingRewardsOiXJIwF.stakeWithPermit.call(uintzsT2f8o, uintW6xQcSO, uintQGQ1ZL, bytebH57NRb, byteiwu2rbd, {from: accounts[4]});
	});

	it('test for MarsStakingRewards', async () => {
		const address7Hqph6 = accounts[4]
		const addressqVbM0ET = accounts[3]
		const addressqTxlWng = accounts[4]
		const MarsStakingRewardsTjX5pVn = await MarsStakingRewards.new(address7Hqph6, addressqVbM0ET, addressqTxlWng, {from: accounts[1]});
		const uintMNcRrzQ = BigInt("1685")
		const addressuep9sdX = accounts[2]
		const uinteEpbtER = BigInt("1179")
		const addressakjKKKe = accounts[5]
		const uint256c3PttO7 = await MarsStakingRewardsTjX5pVn.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PLHt7ps = await MarsStakingRewardsTjX5pVn.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressm2SQfOq = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addressuep9sdX, uintMNcRrzQ, {from: accounts[5]});
//		await MarsStakingRewardsTjX5pVn.onlyRewardsDistribution.call({from: accounts[1]});
//		const addressHVWbmoC = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addressakjKKKe, uinteEpbtER, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256PLHt7ps, BigInt("0"))
		assert.equal(uint256c3PttO7, BigInt("0"))
		await expect(MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addressuep9sdX, uintMNcRrzQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressckVNTwp = accounts[4]
		const addressqt8GpqD = accounts[3]
		const addresse4gUzW0 = accounts[4]
		const MarsStakingRewardsTjX5pVn = await MarsStakingRewards.new(addressckVNTwp, addressqt8GpqD, addresse4gUzW0, {from: accounts[1]});
		const addresstLF3SM8 = accounts[1]
		const addressLrMgQSs = accounts[0]
		const uintVOGo4Kr = BigInt("1685")
		const addresszslUfpx = accounts[2]
		const uintx7qk2nb = BigInt("1179")
		const addressZz9XKpo = accounts[5]
		const uint256c3PttO7 = await MarsStakingRewardsTjX5pVn.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressTVd0YVD = await MarsStakingRewardsTjX5pVn.setRewardsDistribution.call(addresstLF3SM8, {from: accounts[1]});
		const uint256PLHt7ps = await MarsStakingRewardsTjX5pVn.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const address0gBIcE = await MarsStakingRewardsTjX5pVn.setRewardsDistribution.call(addressLrMgQSs, {from: accounts[1]});
//		const addressm2SQfOq = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addresszslUfpx, uintVOGo4Kr, {from: accounts[5]});
//		await MarsStakingRewardsTjX5pVn.onlyRewardsDistribution.call({from: accounts[1]});
//		const addressHVWbmoC = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addressZz9XKpo, uintx7qk2nb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256PLHt7ps, BigInt("0"))
		assert.equal(uint256c3PttO7, BigInt("0"))
		await expect(MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addresszslUfpx, uintVOGo4Kr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressD4AO8oS = accounts[4]
		const addressyovK1G4 = accounts[3]
		const addressCMR1Ti = accounts[4]
		const MarsStakingRewardsTjX5pVn = await MarsStakingRewards.new(addressD4AO8oS, addressyovK1G4, addressCMR1Ti, {from: accounts[1]});
		const uintdowKfQ = BigInt("929")
		const addressF495oej = accounts[0]
		const uintCkE4OG = BigInt("1685")
		const addresszM14kIe = accounts[2]
		const uintrLyTrc = BigInt("1179")
		const addresskNLpRnl = accounts[5]
		const uint256c3PttO7 = await MarsStakingRewardsTjX5pVn.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressZZEXNmz = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addressF495oej, uintdowKfQ, {from: accounts[1]});
//		const uint256PLHt7ps = await MarsStakingRewardsTjX5pVn.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsTjX5pVn.exit.call({from: accounts[4]});
//		const addressm2SQfOq = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addresszM14kIe, uintCkE4OG, {from: accounts[5]});
//		await MarsStakingRewardsTjX5pVn.onlyRewardsDistribution.call({from: accounts[1]});
//		const addressHVWbmoC = await MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addresskNLpRnl, uintrLyTrc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256c3PttO7, BigInt("0"))
		await expect(MarsStakingRewardsTjX5pVn.inCaseTokensGetStuck.call(addressF495oej, uintdowKfQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDx27M1w = accounts[2]
		const addressm1SY91V = accounts[4]
		const addressO8FLN9z = accounts[4]
		const MarsStakingRewardstGf0lvw = await MarsStakingRewards.new(addressDx27M1w, addressm1SY91V, addressO8FLN9z, {from: accounts[5]});
		const uintU3iGFbI = BigInt("1109")
		const addressY6iGg7 = accounts[4]
		const addressumwAIcR = accounts[3]
		const addressrE0ES1O = accounts[4]
//		const addressc1p6ha = await MarsStakingRewardstGf0lvw.inCaseTokensGetStuck.call(addressY6iGg7, uintU3iGFbI, {from: accounts[5]});
//		const addressag2FORQ = await MarsStakingRewardstGf0lvw.transferOwnership.call(addressumwAIcR, {from: accounts[4]});
//		await MarsStakingRewardstGf0lvw.exit.call({from: accounts[5]});
//		const addressZQuiNu = await MarsStakingRewardstGf0lvw.setRewardsDistribution.call(addressrE0ES1O, {from: accounts[1]});

		await expect(MarsStakingRewardstGf0lvw.inCaseTokensGetStuck.call(addressY6iGg7, uintU3iGFbI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVNGVcq = accounts[3]
		const addresssDgFwni = accounts[1]
		const addressAftQIKJ = accounts[3]
		const MarsStakingRewardsUa3WPw = await MarsStakingRewards.new(addressVNGVcq, addresssDgFwni, addressAftQIKJ, {from: accounts[2]});
		const addressa5cEfan = accounts[4]
		const addressk0BK1WA = accounts[2]
		const addressnxi0OT5 = accounts[3]
		const uint256xNW4Sdy = await MarsStakingRewardsUa3WPw.balanceOf.call(addressa5cEfan, {from: accounts[3]});
//		await MarsStakingRewardsUa3WPw.exit.call({from: accounts[4]});
//		const addressGULYDM8 = await MarsStakingRewardsUa3WPw.updateReward.call(addressk0BK1WA, {from: accounts[0]});
//		const uint256yDolohl = await MarsStakingRewardsUa3WPw.earned.call(addressnxi0OT5, {from: accounts[3]});

		assert.equal(uint256xNW4Sdy, BigInt("0"))
		await expect(MarsStakingRewardsUa3WPw.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQF5LKo = accounts[2]
		const addressEIFgJgO = accounts[4]
		const addressb7DbpPV = accounts[0]
		const MarsStakingRewardsiU4Qfqc = await MarsStakingRewards.new(addressQF5LKo, addressEIFgJgO, addressb7DbpPV, {from: accounts[2]});
		const uinte0Mxlj = BigInt("60")
		const uintTnAAasT = BigInt("719")
		const uint256Xl8xyQf = await MarsStakingRewardsiU4Qfqc.getRewardForDuration.call({from: accounts[0]});
//		const uint256kWWo0R = await MarsStakingRewardsiU4Qfqc.notifyRewardAmount.call(uintTnAAasT, uinte0Mxlj, {from: accounts[2]});
//		await MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256Xl8xyQf, BigInt("0"))
		await expect(MarsStakingRewardsiU4Qfqc.notifyRewardAmount.call(uintTnAAasT, uinte0Mxlj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscven1l8 = accounts[2]
		const addressviAWu1h = accounts[0]
		const addressVu58GaO = accounts[3]
		const MarsStakingRewardsJnd1DDS = await MarsStakingRewards.new(addresscven1l8, addressviAWu1h, addressVu58GaO, {from: accounts[0]});
		const addressbkJ4GD4 = accounts[4]
		const addressoWpiamA = accounts[0]
		const addressQJKi80q = accounts[1]
		const uintUvKf9dw = BigInt("199")
		const uintD95mcyK = BigInt("1407")
		const uint256Zxb1vyo = await MarsStakingRewardsJnd1DDS.balanceOf.call(addressbkJ4GD4, {from: accounts[0]});
		const uint256pLQWO50 = await MarsStakingRewardsJnd1DDS.earned.call(addressoWpiamA, {from: accounts[5]});
//		const addressjo8Ppx5 = await MarsStakingRewardsJnd1DDS.transferOwnership.call(addressQJKi80q, {from: accounts[3]});
//		await MarsStakingRewardsJnd1DDS.onlyOwner.call({from: accounts[5]});
//		const uint256wmlzflQ = await MarsStakingRewardsJnd1DDS.notifyRewardAmount.call(uintD95mcyK, uintUvKf9dw, {from: accounts[2]});

		assert.equal(uint256Zxb1vyo, BigInt("0"))
		assert.equal(uint256pLQWO50, BigInt("0"))
		await expect(MarsStakingRewardsJnd1DDS.transferOwnership.call(addressQJKi80q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKKMXXDl = accounts[2]
		const addressAMizqEv = accounts[4]
		const addressoQ5i3BS = accounts[0]
		const MarsStakingRewardsiU4Qfqc = await MarsStakingRewards.new(addressKKMXXDl, addressAMizqEv, addressoQ5i3BS, {from: accounts[2]});
		const uintqCPFrfX = BigInt("60")
		const uintKegaHtU = BigInt("719")
		const uint256Xl8xyQf = await MarsStakingRewardsiU4Qfqc.getRewardForDuration.call({from: accounts[0]});
		const uint256uST9ULm = await MarsStakingRewardsiU4Qfqc.totalSupply.call({from: accounts[1]});
//		const uint256kWWo0R = await MarsStakingRewardsiU4Qfqc.notifyRewardAmount.call(uintKegaHtU, uintqCPFrfX, {from: accounts[2]});
//		await MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256Xl8xyQf, BigInt("0"))
		assert.equal(uint256uST9ULm, BigInt("0"))
		await expect(MarsStakingRewardsiU4Qfqc.notifyRewardAmount.call(uintKegaHtU, uintqCPFrfX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIUiheb = accounts[2]
		const addressaqOWIgR = accounts[1]
		const addressxvCESJX = accounts[1]
		const MarsStakingRewardsyRHxe5J = await MarsStakingRewards.new(addressIUiheb, addressaqOWIgR, addressxvCESJX, {from: accounts[4]});
		const address2478Vb = accounts[2]
		const uintvCbrgbK = BigInt("754")
		const uintevxHror = BigInt("1660")
		const uint256hqbEIC = await MarsStakingRewardsyRHxe5J.balanceOf.call(address2478Vb, {from: accounts[3]});
//		const uint256K5ePnay = await MarsStakingRewardsyRHxe5J.notifyRewardAmount.call(uintevxHror, uintvCbrgbK, {from: accounts[1]});
//		const uint256pw63umf = await MarsStakingRewardsyRHxe5J.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256hqbEIC, BigInt("0"))
		await expect(MarsStakingRewardsyRHxe5J.notifyRewardAmount.call(uintevxHror, uintvCbrgbK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressPyxsPe7 = accounts[2]
		const addressNikWnNW = accounts[4]
		const addresswjgqVuC = accounts[0]
		const MarsStakingRewardsiU4Qfqc = await MarsStakingRewards.new(addressPyxsPe7, addressNikWnNW, addresswjgqVuC, {from: accounts[2]});
		const addressu1tKwoZ = accounts[0]
		const uint256Xl8xyQf = await MarsStakingRewardsiU4Qfqc.getRewardForDuration.call({from: accounts[0]});
		const uint256YtukM7K = await MarsStakingRewardsiU4Qfqc.balanceOf.call(addressu1tKwoZ, {from: accounts[5]});
//		await MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256Xl8xyQf, BigInt("0"))
		assert.equal(uint256YtukM7K, BigInt("0"))
		await expect(MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressWJdJTi = accounts[2]
		const addressmd9y6y1 = accounts[4]
		const addressqk9d8z6 = accounts[0]
		const MarsStakingRewardsiU4Qfqc = await MarsStakingRewards.new(addressWJdJTi, addressmd9y6y1, addressqk9d8z6, {from: accounts[2]});
		const addressNJt5lK7 = accounts[3]
		const addressLNVIbXH = await MarsStakingRewardsiU4Qfqc.transferOwnership.call(addressNJt5lK7, {from: accounts[2]});
		const uint256Xl8xyQf = await MarsStakingRewardsiU4Qfqc.getRewardForDuration.call({from: accounts[0]});
//		await MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256Xl8xyQf, BigInt("0"))
		await expect(MarsStakingRewardsiU4Qfqc.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})