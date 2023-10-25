const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressYkQQk49 = accounts[5]
		const addressC3bXmmB = accounts[3]
		const addressbjaHCB = accounts[5]
		const WolfStakingRewardsFwE2QHb = await WolfStakingRewards.new(addressYkQQk49, addressC3bXmmB, addressbjaHCB, {from: accounts[4]});
		const uintVq9k9iB = BigInt("1072")
		const addressncGGnGP = accounts[1]
//		await WolfStakingRewardsFwE2QHb.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		await WolfStakingRewardsFwE2QHb.nonReentrant.call({from: accounts[1]});
//		const uint8tK20slQ = await WolfStakingRewardsFwE2QHb.decimals.call({from: accounts[3]});
//		const addressLpt4YQm = await WolfStakingRewardsFwE2QHb.updateReward.call(addressncGGnGP, uintVq9k9iB, {from: accounts[0]});

		await expect(WolfStakingRewardsFwE2QHb.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringlrZbMYb = "J5sGZUXUkunyP83oqmvQItUdLTwwV"
		const stringtkDd8f2 = "SEzSiaRLFCD7TzPf"
		const uintBxpAfWR = BigInt("170")
		const WolfStakingRewardsCloqLNX = await WolfStakingRewards.new(stringlrZbMYb, stringtkDd8f2, uintBxpAfWR, {from: accounts[1]});
		const uinty8tt6i = BigInt("369")
		const addressTAPMs4f = accounts[1]
		const uintyTmYkBC = BigInt("686")
		const addressgxXmlIR = accounts[4]
		const uinttRU8bx0 = BigInt("595")
		const uintDaOJPBf = BigInt("2022")
		const addressJkeDoZm = accounts[1]
		const uintwPJIBDG = BigInt("1892")
		const addressznfu86o = accounts[0]
		await WolfStakingRewardsCloqLNX.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256EhhfsbJ = await WolfStakingRewardsCloqLNX.earned.call(addressTAPMs4f, uinty8tt6i, {from: accounts[2]});
		const uint256j3gU3a5 = await WolfStakingRewardsCloqLNX.earned.call(addressgxXmlIR, uintyTmYkBC, {from: accounts[2]});
		const uint256t2QP0UG = await WolfStakingRewardsCloqLNX.getRewardForDuration.call(uinttRU8bx0, {from: accounts[0]});
		const uint256Nm83D7h = await WolfStakingRewardsCloqLNX.earned.call(addressJkeDoZm, uintDaOJPBf, {from: accounts[0]});
		const uint256ezE5cj8 = await WolfStakingRewardsCloqLNX.balanceOfPerPool.call(addressznfu86o, uintwPJIBDG, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvgedLtA = "aoqrela"
		const stringP3rAK9z = "u1AnhLHbVgPFbWfLHAXABVdKQvwbizPXahAgJK94gyFF8f36QEMDvUsQ9hZNzoLoDUYtYvA1Q5l57Utk"
		const uintGFiQ5ia = BigInt("22")
		const WolfStakingRewardspMKVCOb = await WolfStakingRewards.new(stringvgedLtA, stringP3rAK9z, uintGFiQ5ia, {from: accounts[4]});
		const uintRcjqurL = BigInt("1516")
		const uintZfEc75 = BigInt("1097")
		const uintjE7itWB = BigInt("1729")
		const uint256NwVJtSV = await WolfStakingRewardspMKVCOb.withdrawRemainingBalance.call(uintZfEc75, uintRcjqurL, {from: accounts[3]});
		await WolfStakingRewardspMKVCOb.onlyOwner.call({from: accounts[3]});
		const uint256HJADOv = await WolfStakingRewardspMKVCOb.lastTimeRewardApplicable.call(uintjE7itWB, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshWVVaLQ = "0x0000000000000000000000000000000000000001"
		const addressCFrKQmF = accounts[3]
		const addressgeKVkke = accounts[2]
		const WolfStakingRewardss9kbagn = await WolfStakingRewards.new(addresshWVVaLQ, addressCFrKQmF, addressgeKVkke, {from: accounts[2]});
		const uintVviCOzA = BigInt("524")
		const uintWnYSJqd = BigInt("1346")
		const uintywQh7aZ = BigInt("598")
		const uintwKvlZVY = BigInt("317")
		const uintPb6d3rb = BigInt("1896")
//		const uint256z4agPRQ = await WolfStakingRewardss9kbagn.withdraw.call(uintWnYSJqd, uintVviCOzA, {from: accounts[0]});
//		await WolfStakingRewardss9kbagn.onlyRewardsDistribution.call({from: accounts[1]});
//		const uint256hRrIQyJ = await WolfStakingRewardss9kbagn.totalSupplyPerPool.call(uintywQh7aZ, {from: accounts[0]});
//		const uint256yZsS3Yy = await WolfStakingRewardss9kbagn.withdrawRemainingBalance.call(uintPb6d3rb, uintwKvlZVY, {from: accounts[4]});

		await expect(WolfStakingRewardss9kbagn.withdraw.call(uintWnYSJqd, uintVviCOzA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressTWWtRMF = accounts[3]
		const addressmRkwTk = accounts[2]
		const addressd8JZusG = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsmjDZ9MS = await WolfStakingRewards.new(addressTWWtRMF, addressmRkwTk, addressd8JZusG, {from: "0x0000000000000000000000000000000000000001"});
		const uintJwero8Z = BigInt("1253")
		const uintB9vtjE = BigInt("1566")
		const addressc5oWUSS = accounts[3]
		const uint256n2kChmV = await WolfStakingRewardsmjDZ9MS.totalSupplyPerPool.call(uintJwero8Z, {from: accounts[4]});
		const stringCnZb6x = await WolfStakingRewardsmjDZ9MS.symbol.call({from: accounts[3]});
		const stringocF9U1p = await WolfStakingRewardsmjDZ9MS.name.call({from: accounts[0]});
		const addressahB18vX = await WolfStakingRewardsmjDZ9MS.updateReward.call(addressc5oWUSS, uintB9vtjE, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfrrOX8Y = "QWuxRZkRbGN65aBlRafgBWlEoQrBwZuhYNH1Zd5HOb3AovICitvDzqGXTylxMcelX9aDjCl7rvcSG"
		const stringSXEtQjY = "l9oEBHm3PG4xDlyr"
		const uintZmfHzHr = BigInt("254")
		const WolfStakingRewardsRoEiTBj = await WolfStakingRewards.new(stringfrrOX8Y, stringSXEtQjY, uintZmfHzHr, {from: accounts[1]});
		const uintQJgqMTH = BigInt("329")
		const uintUiuFHCf = BigInt("1457")
		const addressflX8ONT = "0x0000000000000000000000000000000000000001"
		const uintQCijLEj = BigInt("979")
		const uintAVV9bV0 = BigInt("607")
		const uint256YWRuzcD = await WolfStakingRewardsRoEiTBj.rewardPerToken.call(uintQJgqMTH, {from: accounts[3]});
		const uint256ypTNLD = await WolfStakingRewardsRoEiTBj.earned.call(addressflX8ONT, uintUiuFHCf, {from: accounts[1]});
		const uint256TXMn5PW = await WolfStakingRewardsRoEiTBj.getRewardForDuration.call(uintQCijLEj, {from: accounts[5]});
		const uint256EjeZPod = await WolfStakingRewardsRoEiTBj.totalSupplyPerPool.call(uintAVV9bV0, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const address7bKDcA = "0x0000000000000000000000000000000000000001"
		const addressLOOEIhe = accounts[3]
		const addressznD3Cd6 = accounts[2]
		const WolfStakingRewardss9kbagn = await WolfStakingRewards.new(address7bKDcA, addressLOOEIhe, addressznD3Cd6, {from: accounts[2]});
		const uinthKdgrW = BigInt("336")
		const addressqaQWhks = accounts[2]
		const uintwVel1En = BigInt("524")
		const uintmNNa4m1 = BigInt("1346")
		const uintfN5eyWH = BigInt("1205")
		const uintMgKDtYu = BigInt("598")
		const uintVJgCeSN = BigInt("317")
		const uintFq59FJV = BigInt("1896")
		const uint256OZ7WP7A = await WolfStakingRewardss9kbagn.balanceOfPerPool.call(addressqaQWhks, uinthKdgrW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256z4agPRQ = await WolfStakingRewardss9kbagn.withdraw.call(uintmNNa4m1, uintwVel1En, {from: accounts[0]});
//		const uint256TonoIvF = await WolfStakingRewardss9kbagn.exit.call(uintfN5eyWH, {from: accounts[1]});
//		await WolfStakingRewardss9kbagn.onlyRewardsDistribution.call({from: accounts[1]});
//		const uint256hRrIQyJ = await WolfStakingRewardss9kbagn.totalSupplyPerPool.call(uintMgKDtYu, {from: accounts[0]});
//		const uint256yZsS3Yy = await WolfStakingRewardss9kbagn.withdrawRemainingBalance.call(uintFq59FJV, uintVJgCeSN, {from: accounts[4]});

		assert.equal(uint256OZ7WP7A, BigInt("0"))
		await expect(WolfStakingRewardss9kbagn.withdraw.call(uintmNNa4m1, uintwVel1En, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresswAZUwRJ = accounts[3]
		const addressXcsdgjB = accounts[1]
		const addressC9bT4c = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addresswAZUwRJ, addressXcsdgjB, addressC9bT4c, {from: accounts[3]});
		const uintuTkek2B = BigInt("32")
		const uinttCbZBaO = BigInt("806")
//		const uint256tVUoIpT = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uinttCbZBaO, uintuTkek2B, {from: accounts[3]});

		await expect(WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uinttCbZBaO, uintuTkek2B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringA8uAgM = "OnMCMjpIGKGkasfohbvI7tX3gH7nbrtDAk7fHOWKLvhKj1oycCcd5JsQ8VCTQ4m9z4p2p4R8KfrrDVvzpybh0YF0fPYFQv7g"
		const stringBp6Ie9R = "3pk151UXTm4un0LVdXm1FCriCo352AFxauDYeMKp5h1pHO5Ape68H5xYLySpCDPeW3RcvGPOja2yQt2YipfwXUC"
		const uintsOHry2l = BigInt("34")
		const WolfStakingRewardsXmEsrxp = await WolfStakingRewards.new(stringA8uAgM, stringBp6Ie9R, uintsOHry2l, {from: accounts[2]});
		const uint7e3NJ2 = BigInt("1615")
		const uintMJyCe8e = BigInt("1284")
		const uintgSUVlED = BigInt("994")
		const uint256hoT4A4F = await WolfStakingRewardsXmEsrxp.totalSupplyPerPool.call(uint7e3NJ2, {from: accounts[5]});
		const uint256sn66O8h = await WolfStakingRewardsXmEsrxp.rewardPerToken.call(uintMJyCe8e, {from: accounts[1]});
		const uintf9rQ6J = await WolfStakingRewardsXmEsrxp.getReward.call(uintgSUVlED, {from: accounts[4]});
		await WolfStakingRewardsXmEsrxp.onlyOwner.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressZY0Wc67 = accounts[3]
		const addresspbQalia = accounts[1]
		const addressLL9DNUf = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressZY0Wc67, addresspbQalia, addressLL9DNUf, {from: accounts[3]});
		const uintpd0Zjd = BigInt("1858")
		const uintX1jfPTp = BigInt("1821")
		const uintSpmkrTe = BigInt("90")
		const uint256iltKsuX = await WolfStakingRewards04jpFB.totalSupplyPerPool.call(uintpd0Zjd, {from: accounts[4]});
//		const uint256FFX9m9a = await WolfStakingRewards04jpFB.withdraw.call(uintSpmkrTe, uintX1jfPTp, {from: accounts[4]});
//		await WolfStakingRewards04jpFB.onlyRewardsDistribution.call({from: accounts[2]});
//		await WolfStakingRewards04jpFB.onlyRewardsDistribution.call({from: accounts[1]});

		assert.equal(uint256iltKsuX, BigInt("0"))
		await expect(WolfStakingRewards04jpFB.withdraw.call(uintSpmkrTe, uintX1jfPTp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringUkjMUUY = "YygqMVhMWsVhY70iME1Sf9ra9WKz0IC8ZZxLpTbTffwA7EHVdEkRDvaeFSV7jxldUis7xjS"
		const stringJEMA3D = "ubCkCFxabdDDucxTAmVqL4KNTYoOoBB3t132Dms9XR"
		const uintgl1reHx = BigInt("186")
		const WolfStakingRewardsQFAN5jR = await WolfStakingRewards.new(stringUkjMUUY, stringJEMA3D, uintgl1reHx, {from: accounts[1]});
		const uintifB3y3M = BigInt("1872")
		const uintj1xlzZg = BigInt("474")
		const uintONCKUch = BigInt("468")
		const uintORg1HV8 = BigInt("2014")
		const uintfNjB69F = BigInt("1980")
		const uint256DMnQQDw = await WolfStakingRewardsQFAN5jR.withdrawRemainingBalance.call(uintj1xlzZg, uintifB3y3M, {from: accounts[0]});
		const uintCJlGHT = await WolfStakingRewardsQFAN5jR.getReward.call(uintONCKUch, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VuC2DEN = await WolfStakingRewardsQFAN5jR.stake.call(uintfNjB69F, uintORg1HV8, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressll1tppj = accounts[3]
		const addresswh7uFYW = accounts[1]
		const addressuXhRXI6 = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressll1tppj, addresswh7uFYW, addressuXhRXI6, {from: accounts[3]});
		const uintgIz7RCR = BigInt("661")
		const addressGj1G28a = accounts[4]
		const uintLld0x6 = BigInt("1386")
		const uintLxlqly7 = BigInt("747")
		const uintcutO1uL = BigInt("821")
		const uintjgR6c4J = BigInt("32")
		const uintlvnPpBc = BigInt("806")
		const uint256tkQSEvj = await WolfStakingRewards04jpFB.earned.call(addressGj1G28a, uintgIz7RCR, {from: accounts[0]});
//		const uint256arrayipWlJ0m = await WolfStakingRewards04jpFB.updateNotifyRewardAmount.call(uintLld0x6, {from: accounts[3]});
//		const uint256OKkED3o = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintcutO1uL, uintLxlqly7, {from: accounts[0]});
//		const uint256tVUoIpT = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintlvnPpBc, uintjgR6c4J, {from: accounts[3]});

		assert.equal(uint256tkQSEvj, BigInt("0"))
		await expect(WolfStakingRewards04jpFB.updateNotifyRewardAmount.call(uintLld0x6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringmbFYloc = "miNwSD5DSb58GTMGpeEYyOoBtf3TLTDWRZVmxHRYoKAI7Goa"
		const stringJYQF676 = "qyTBaU31s3AUiEmd2rADhyVYAXnkVoRmzwGgTjULxBbRg3jETjPTPdJD69R2qBz"
		const uintagMtnzX = BigInt("133")
		const WolfStakingRewardsNlD6bfD = await WolfStakingRewards.new(stringmbFYloc, stringJYQF676, uintagMtnzX, {from: accounts[3]});
		const uintcxRHzb8 = BigInt("184")
		const addressxx59oBA = accounts[4]
		const uintJ2HJNcp = BigInt("1397")
		const uintrXnxXOO = BigInt("571")
		const uintgmWzrI1 = BigInt("2032")
		const uinthQmUhqJ = BigInt("1882")
		const uintNaJTjsK = BigInt("77")
		const addressvo7t9Qw = accounts[4]
		const uint256GeLc4h6 = await WolfStakingRewardsNlD6bfD.earned.call(addressxx59oBA, uintcxRHzb8, {from: accounts[0]});
		const uint256I08oPgV = await WolfStakingRewardsNlD6bfD.withdraw.call(uintrXnxXOO, uintJ2HJNcp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZWjJVgy = await WolfStakingRewardsNlD6bfD.totalSupplyPerPool.call(uintgmWzrI1, {from: accounts[0]});
		const uint256xTWFfCR = await WolfStakingRewardsNlD6bfD.lastTimeRewardApplicable.call(uinthQmUhqJ, {from: accounts[2]});
		await WolfStakingRewardsNlD6bfD.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256llMadm = await WolfStakingRewardsNlD6bfD.earned.call(addressvo7t9Qw, uintNaJTjsK, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxBovUnj = accounts[3]
		const addressv3en1MO = accounts[1]
		const addressKVlNCeR = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressxBovUnj, addressv3en1MO, addressKVlNCeR, {from: accounts[3]});
		const uintbVKjev2 = BigInt("239")
		const addressdc6mjiv = accounts[1]
		const uintBn071gD = BigInt("581")
		const uint256YhhFcOm = await WolfStakingRewards04jpFB.balanceOfPerPool.call(addressdc6mjiv, uintbVKjev2, {from: accounts[3]});
//		const uint256rZo3GF5 = await WolfStakingRewards04jpFB.getRewardForDuration.call(uintBn071gD, {from: accounts[3]});

		assert.equal(uint256YhhFcOm, BigInt("0"))
		await expect(WolfStakingRewards04jpFB.getRewardForDuration.call(uintBn071gD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresshRIpM0l = accounts[3]
		const addressbMdMrE8 = accounts[1]
		const addressWfJLxUm = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addresshRIpM0l, addressbMdMrE8, addressWfJLxUm, {from: accounts[3]});
		const uintkgKBb1Q = BigInt("160")
		const uintg6GKAlO = BigInt("34")
		const uintwXQIvQB = BigInt("806")
		const uintcsKmmRL = await WolfStakingRewards04jpFB.getReward.call(uintkgKBb1Q, {from: accounts[3]});
//		const uint256tVUoIpT = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintwXQIvQB, uintg6GKAlO, {from: accounts[3]});

		await expect(WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintwXQIvQB, uintg6GKAlO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressrSE3MG = accounts[3]
		const addressWrSbMk = accounts[1]
		const addressYYrEA1a = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressrSE3MG, addressWrSbMk, addressYYrEA1a, {from: accounts[3]});
		const uintPHbmeeQ = BigInt("214")
		const uintAZsX7l = BigInt("1893")
		const uintJcVE1WW = BigInt("13")
		const uintuDXPyRL = BigInt("806")
		const uintTXPUmOR = BigInt("1042")
//		const uint256h4zU5xU = await WolfStakingRewards04jpFB.withdraw.call(uintAZsX7l, uintPHbmeeQ, {from: accounts[4]});
//		const uint256tVUoIpT = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintuDXPyRL, uintJcVE1WW, {from: accounts[3]});
//		const uint256TKBlomU = await WolfStakingRewards04jpFB.rewardPerToken.call(uintTXPUmOR, {from: accounts[2]});

		await expect(WolfStakingRewards04jpFB.withdraw.call(uintAZsX7l, uintPHbmeeQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressbmqN2Qj = accounts[3]
		const addressPg1gSuW = accounts[1]
		const addressdMbABuT = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressbmqN2Qj, addressPg1gSuW, addressdMbABuT, {from: accounts[3]});
		const uintfHRBp6H = BigInt("1719")
		const uintCNhXn1V = BigInt("136")
		const uintQfe6oR = BigInt("1706")
		const uintTxFlupC = BigInt("576")
		const uintNplDqX7 = BigInt("1401")
		const uintoHyl4oH = BigInt("34")
		const uintEFN7Oy = BigInt("806")
		const uint256fbXaLQE = await WolfStakingRewards04jpFB.lastTimeRewardApplicable.call(uintfHRBp6H, {from: accounts[4]});
		const uintcsKmmRL = await WolfStakingRewards04jpFB.getReward.call(uintCNhXn1V, {from: accounts[3]});
//		const uint256nPXhMj9 = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintTxFlupC, uintQfe6oR, {from: accounts[4]});
//		const uint256NNv7Y2f = await WolfStakingRewards04jpFB.lastTimeRewardApplicable.call(uintNplDqX7, {from: accounts[3]});
//		const uint256tVUoIpT = await WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintEFN7Oy, uintoHyl4oH, {from: accounts[3]});

		assert.equal(uint256fbXaLQE, BigInt("0"))
		await expect(WolfStakingRewards04jpFB.withdrawRemainingBalance.call(uintTxFlupC, uintQfe6oR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringbE3tZ0 = "yQaVRm1YESOSJaUeKDw25EHyLRZ5sdB6stiiyODK7f2IV07DOoUkpCHiZQm5J"
		const stringriLfXUw = "geare5Oxfu96jVST1ofTxp17e9UvIS3WqDmfwuxh4HMbux3e6Q"
		const uintNinshej = BigInt("131")
		const WolfStakingRewardscAUo2Jt = await WolfStakingRewards.new(stringbE3tZ0, stringriLfXUw, uintNinshej, {from: accounts[1]});
		const uintxfheLR = BigInt("1235")
		const uintiG3WKZB = BigInt("1914")
		const uint8ZrGZqe2 = await WolfStakingRewardscAUo2Jt.decimals.call({from: accounts[2]});
		const stringaKS9CTj = await WolfStakingRewardscAUo2Jt.symbol.call({from: accounts[3]});
		await WolfStakingRewardscAUo2Jt.onlyOwner.call({from: accounts[1]});
		const uint256arraywDQdMg9 = await WolfStakingRewardscAUo2Jt.updateNotifyRewardAmount.call(uintxfheLR, {from: accounts[0]});
		const uint256WDjv6e4 = await WolfStakingRewardscAUo2Jt.exit.call(uintiG3WKZB, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressU5ldMVB = accounts[3]
		const addressZ5mNN5l = accounts[1]
		const addresssxCXMFt = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressU5ldMVB, addressZ5mNN5l, addresssxCXMFt, {from: accounts[3]});
		const uintFBjd6f = BigInt("134")
		const uintxICGdVe = BigInt("174")
		const uintZx9ehSn = BigInt("1330")
		const uint8KH0Mo = BigInt("175")
//		const uint256HlRKHV0 = await WolfStakingRewards04jpFB.stake.call(uintxICGdVe, uintFBjd6f, {from: accounts[2]});
//		const uint256arrayB6qOscs = await WolfStakingRewards04jpFB.updateNotifyRewardAmount.call(uintZx9ehSn, {from: accounts[1]});
//		const uintcsKmmRL = await WolfStakingRewards04jpFB.getReward.call(uint8KH0Mo, {from: accounts[3]});

		await expect(WolfStakingRewards04jpFB.stake.call(uintxICGdVe, uintFBjd6f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressNXBcLbL = accounts[3]
		const addressI0R0VEZ = accounts[1]
		const addressicmmNkG = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressNXBcLbL, addressI0R0VEZ, addressicmmNkG, {from: accounts[3]});
		const uintb4XDjmr = BigInt("943")
		const uintmNSZvrP = BigInt("158")
		const uintXngZezH = BigInt("1052")
		const addressmOIplUK = accounts[3]
		const uint256gmp2t5W = await WolfStakingRewards04jpFB.lastTimeRewardApplicable.call(uintb4XDjmr, {from: accounts[4]});
		const uintcsKmmRL = await WolfStakingRewards04jpFB.getReward.call(uintmNSZvrP, {from: accounts[3]});
//		const addressgeKL05P = await WolfStakingRewards04jpFB.updateReward.call(addressmOIplUK, uintXngZezH, {from: accounts[0]});

		assert.equal(uint256gmp2t5W, BigInt("0"))
		await expect(WolfStakingRewards04jpFB.updateReward.call(addressmOIplUK, uintXngZezH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressRe0tUwI = accounts[3]
		const addressZ6wP1rO = accounts[1]
		const addressTIF55j = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressRe0tUwI, addressZ6wP1rO, addressTIF55j, {from: accounts[3]});
		const uintQ6gGwyi = BigInt("604")
		const uintERohNOX = BigInt("1811")
		const uintJUNBRjD = BigInt("618")
//		const uint256aY7QtuP = await WolfStakingRewards04jpFB.stake.call(uintERohNOX, uintQ6gGwyi, {from: accounts[3]});
//		await WolfStakingRewards04jpFB.onlyOwner.call({from: accounts[2]});
//		const uintcsKmmRL = await WolfStakingRewards04jpFB.getReward.call(uintJUNBRjD, {from: accounts[3]});

		await expect(WolfStakingRewards04jpFB.stake.call(uintERohNOX, uintQ6gGwyi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringdxWVVI = "JyeURzQJuFmyBOWo9jMbaypQ"
		const stringEaIaGqo = "YGUhTjLBg9Qn"
		const uintSVxTKSN = BigInt("49")
		const WolfStakingRewardsfSzROeM = await WolfStakingRewards.new(stringdxWVVI, stringEaIaGqo, uintSVxTKSN, {from: accounts[1]});
		const uintn995Dx2 = BigInt("1705")
		const uintfS9N3wk = BigInt("1766")
		const uintDPR5pcL = BigInt("661")
		const uintV3QlnfI = BigInt("77")
		const uint9Yk5BW = BigInt("95")
		const uintpaXrTOJ = BigInt("877")
		const uint256H28SoJT = await WolfStakingRewardsfSzROeM.withdraw.call(uintfS9N3wk, uintn995Dx2, {from: accounts[2]});
		const uint256XuV6cE9 = await WolfStakingRewardsfSzROeM.withdraw.call(uintV3QlnfI, uintDPR5pcL, {from: accounts[3]});
		const uint256y26p5yh = await WolfStakingRewardsfSzROeM.stake.call(uintpaXrTOJ, uint9Yk5BW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpNs8lgB = "E80HwNkklaUvYNsmyqfAzTyvWEikBbVAhL0jbMNES2sLPJZ2KPw8xV2ENXIw2MvMEXJWVmJRzXQKUYeyc4GlewoAoimDXjv"
		const stringkoYuezx = "z6vI84FgiuPkoEAgSxBw829puGQ6cIBmXasNv62i4NCGCyEvX8sk1MIWOlEnKmLxElqAT5m0BsiR"
		const uintH6kKdUx = BigInt("29")
		const WolfStakingRewardsKhvsVu3 = await WolfStakingRewards.new(stringpNs8lgB, stringkoYuezx, uintH6kKdUx, {from: accounts[0]});
		const uintpLoSiue = BigInt("311")
		const uinty9mb0Hs = BigInt("381")
		const uint256eEce7vM = await WolfStakingRewardsKhvsVu3.lastTimeRewardApplicable.call(uintpLoSiue, {from: accounts[3]});
		const uint256K28YOxC = await WolfStakingRewardsKhvsVu3.rewardPerToken.call(uinty9mb0Hs, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD2A2h6r = "y"
		const stringhLdTyTn = "TLVhe2snyYUhbkz7KS1nohp3b"
		const uintqmZw9L = BigInt("20")
		const WolfStakingRewardsATSwsJY = await WolfStakingRewards.new(stringD2A2h6r, stringhLdTyTn, uintqmZw9L, {from: accounts[1]});
		const uintwy5aiYQ = BigInt("503")
		const addressH82vtj2 = accounts[3]
		const uintM5PJqe = BigInt("523")
		const uint68Nsg3 = BigInt("789")
		const uintAZo0O5h = BigInt("571")
		const addresshPPDmvn = await WolfStakingRewardsATSwsJY.updateReward.call(addressH82vtj2, uintwy5aiYQ, {from: accounts[3]});
		const uintI1EKp3L = await WolfStakingRewardsATSwsJY.getReward.call(uintM5PJqe, {from: "0x0000000000000000000000000000000000000001"});
		const uint8jo34hcR = await WolfStakingRewardsATSwsJY.decimals.call({from: accounts[3]});
		const uint2562gROXJ = await WolfStakingRewardsATSwsJY.withdraw.call(uintAZo0O5h, uint68Nsg3, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSUW49dh = "zkjLAKMu7EhaFzCEMwcv"
		const stringyfIPMVC = "AJkXuCy9crKxowWvReR7yv7XqmAnPEsR1t6pBt7C8Y35SA62bPo9HPTxs9VXKRMfkWl9VceHK1u9TT7BIeCdc1G2Y37kkCpb2GX"
		const uintnSYOeHr = BigInt("225")
		const WolfStakingRewardsUoC4MsN = await WolfStakingRewards.new(stringSUW49dh, stringyfIPMVC, uintnSYOeHr, {from: "0x0000000000000000000000000000000000000001"});
		const uintCU4qlNP = BigInt("668")
		const uintGNEkyF = BigInt("621")
		const uintFyrWiNQ = BigInt("654")
		const addressoZD6W9m = accounts[1]
		const uint256mhE94HY = await WolfStakingRewardsUoC4MsN.stake.call(uintGNEkyF, uintCU4qlNP, {from: accounts[4]});
		const uint256nWsNE1N = await WolfStakingRewardsUoC4MsN.balanceOfPerPool.call(addressoZD6W9m, uintFyrWiNQ, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsUoC4MsN.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWEAAHh = accounts[3]
		const addressBGQMtLS = accounts[1]
		const addresstxXrtGS = accounts[2]
		const WolfStakingRewards04jpFB = await WolfStakingRewards.new(addressWEAAHh, addressBGQMtLS, addresstxXrtGS, {from: accounts[3]});
		const uintDqbtRIR = BigInt("213")
		const uintAK7ZFAZ = BigInt("206")
//		const uint256IegVIt = await WolfStakingRewards04jpFB.exit.call(uintDqbtRIR, {from: accounts[0]});
//		await WolfStakingRewards04jpFB.nonReentrant.call({from: accounts[2]});
//		const uintcsKmmRL = await WolfStakingRewards04jpFB.getReward.call(uintAK7ZFAZ, {from: accounts[3]});

		await expect(WolfStakingRewards04jpFB.exit.call(uintDqbtRIR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringVCnjHqE = "ugYhJVXyLSFHBu"
		const stringYdun5UF = "fW8"
		const uint6qgVsZ = BigInt("17")
		const WolfStakingRewardskkwh6lo = await WolfStakingRewards.new(stringVCnjHqE, stringYdun5UF, uint6qgVsZ, {from: accounts[2]});
		const uintmxK8ecL = BigInt("1955")
		const uintJmjtoZr = BigInt("717")
		const uintSfJ3JE2 = BigInt("1011")
		const uintqXDEPew = BigInt("1280")
		const uintEkzvBv = BigInt("903")
		const uintNi4V3za = BigInt("440")
		const uint256WHSrAV5 = await WolfStakingRewardskkwh6lo.stake.call(uintJmjtoZr, uintmxK8ecL, {from: accounts[3]});
		const uint256eg5M7yk = await WolfStakingRewardskkwh6lo.lastTimeRewardApplicable.call(uintSfJ3JE2, {from: accounts[2]});
		const uint256YaBXA7H = await WolfStakingRewardskkwh6lo.withdraw.call(uintEkzvBv, uintqXDEPew, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nb53nE = await WolfStakingRewardskkwh6lo.totalSupplyPerPool.call(uintNi4V3za, {from: accounts[2]});
		const string4AwjrR = await WolfStakingRewardskkwh6lo.name.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLg1nyCb = "aK4bH51jxBq5umrQWP9RCG6GGPQeAVV"
		const stringvVnaM3a = "hPpXVw8WRxNN3q6C87oot3FJKQuD3z39XzJIKs1CRnw6tRIkeig53PQE90jvHwsP527ALhiEDXhEv"
		const uintc6eevgY = BigInt("137")
		const WolfStakingRewardsEyzBBzO = await WolfStakingRewards.new(stringLg1nyCb, stringvVnaM3a, uintc6eevgY, {from: accounts[0]});
		const uintA3HJZYs = BigInt("1893")
		const addresszCPCG0w = accounts[1]
		const uintDFg4SHr = BigInt("2007")
		const addressk8GY6Ih = accounts[0]
		const uintQqwrGTc = BigInt("1402")
		const uintH5f28S8 = BigInt("1636")
		const uint4PqjPn = BigInt("649")
		const uintDIVEMtM = BigInt("782")
		await WolfStakingRewardsEyzBBzO.onlyRewardsDistribution.call({from: accounts[4]});
		const addressvv1pfQc = await WolfStakingRewardsEyzBBzO.updateReward.call(addresszCPCG0w, uintA3HJZYs, {from: accounts[4]});
		const uint256xYAkB3g = await WolfStakingRewardsEyzBBzO.earned.call(addressk8GY6Ih, uintDFg4SHr, {from: accounts[2]});
		const uint256PTAQqQb = await WolfStakingRewardsEyzBBzO.withdrawRemainingBalance.call(uintH5f28S8, uintQqwrGTc, {from: accounts[0]});
		const uint256JauuqaT = await WolfStakingRewardsEyzBBzO.stake.call(uintDIVEMtM, uint4PqjPn, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvSKGC7Y = "e88gW363AibAYNnKFkFm0XSG9varrN5ZK96AnesuVoY7XXV"
		const stringwNxwUtn = "FXRlraEWtWgN0WmWCLyYRupAsRrOOOZcalvNIxQt3YWQmv7Ser19m"
		const uintsgHhCQC = BigInt("80")
		const WolfStakingRewardsXY5fviv = await WolfStakingRewards.new(stringvSKGC7Y, stringwNxwUtn, uintsgHhCQC, {from: accounts[1]});
		const uintTaKWm8 = BigInt("1824")
		const addressBk2b8Tf = accounts[1]
		const uintDX7uiMe = BigInt("1941")
		const uintYCwDR7G = BigInt("503")
		const uintXNtz5wl = BigInt("204")
		const uint256B5dbeX = await WolfStakingRewardsXY5fviv.balanceOfPerPool.call(addressBk2b8Tf, uintTaKWm8, {from: accounts[3]});
		const uint256zaMdRVH = await WolfStakingRewardsXY5fviv.withdrawRemainingBalance.call(uintYCwDR7G, uintDX7uiMe, {from: accounts[2]});
		const uint256qdvXGIf = await WolfStakingRewardsXY5fviv.getRewardForDuration.call(uintXNtz5wl, {from: accounts[3]});
		await WolfStakingRewardsXY5fviv.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBj3pjMU = "YEmJMnTV6PzdWYQgXtldobazLY1MBTO"
		const stringocdw2ku = "cuVTv3lnKXIvFUKO"
		const uintaP4THod = BigInt("41")
		const WolfStakingRewardsr2hUpzl = await WolfStakingRewards.new(stringBj3pjMU, stringocdw2ku, uintaP4THod, {from: accounts[2]});
		const uintmA98EHW = BigInt("1247")
		const uintoTEVIGu = BigInt("1093")
		const uintr292xsJ = BigInt("1311")
		const uintzes87jg = BigInt("1606")
		const uint8cvZveB8 = await WolfStakingRewardsr2hUpzl.decimals.call({from: accounts[2]});
		const uint256arrayKXCRaLJ = await WolfStakingRewardsr2hUpzl.updateNotifyRewardAmount.call(uintmA98EHW, {from: accounts[1]});
		const uintROh42k = await WolfStakingRewardsr2hUpzl.getReward.call(uintoTEVIGu, {from: accounts[2]});
		const stringhVGwpLF = await WolfStakingRewardsr2hUpzl.name.call({from: accounts[4]});
		const uint256W2qdyL1 = await WolfStakingRewardsr2hUpzl.exit.call(uintr292xsJ, {from: accounts[2]});
		const uint256p5NA8Ea = await WolfStakingRewardsr2hUpzl.rewardPerToken.call(uintzes87jg, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyb7aRId = "GGIKaPjHpHumNFk7qKCWD1fByw03JmsK4WGnLrRRxS9ylRGMkXaj824O3pPm8cuJlULnpK8g"
		const stringhkiVjyq = "03lnk7xtj4KuV9zc83vNBNJxpxweBEqqMKrHYwsxgY9DVD52AyGwSwLohfYMVmjQ5TybicbgRfsAP"
		const uint7zV7SY = BigInt("90")
		const WolfStakingRewardsB3DPujA = await WolfStakingRewards.new(stringyb7aRId, stringhkiVjyq, uint7zV7SY, {from: accounts[2]});
		const uint0jR20E = BigInt("1342")
		const uintaGO4Iz4 = BigInt("216")
		const addressILSNctV = accounts[5]
		const uintgiTmxYf = BigInt("2041")
		const uint256kHSugpU = await WolfStakingRewardsB3DPujA.getRewardForDuration.call(uint0jR20E, {from: accounts[0]});
		const uint256xw6c9K = await WolfStakingRewardsB3DPujA.earned.call(addressILSNctV, uintaGO4Iz4, {from: accounts[2]});
		const uint256arrayhULti77 = await WolfStakingRewardsB3DPujA.updateNotifyRewardAmount.call(uintgiTmxYf, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzVwn6ZJ = "QBUyu5MIDFrBIrEoBsXCKHqSGrnqUTWUL4tgRl89IJj1myO1wl7erktrbLkYePxP4Y8FcQ2Iaj"
		const stringj0IKc1L = "O9v6kPYrJ9E7eAF0CPWySrNtEiSGEKt44NpBpEORdVk5fJVC91YiuvzjaVtMZMfX"
		const uintNGwDEka = BigInt("127")
		const WolfStakingRewardsGNfzKrH = await WolfStakingRewards.new(stringzVwn6ZJ, stringj0IKc1L, uintNGwDEka, {from: accounts[4]});
		const uintPi6Zcss = BigInt("1510")
		const uintrzYh66M = BigInt("347")
		const addresskUyqNu2 = accounts[1]
		const uintyNyoZjf = BigInt("126")
		const uintQ0ZudDu = BigInt("657")
		const uint256wKtWWLW = await WolfStakingRewardsGNfzKrH.exit.call(uintPi6Zcss, {from: accounts[3]});
		const addressq2hqQFd = await WolfStakingRewardsGNfzKrH.updateReward.call(addresskUyqNu2, uintrzYh66M, {from: accounts[0]});
		const uintwj9EyVs = await WolfStakingRewardsGNfzKrH.getReward.call(uintyNyoZjf, {from: accounts[3]});
		const uint256ByUW6h6 = await WolfStakingRewardsGNfzKrH.rewardPerToken.call(uintQ0ZudDu, {from: accounts[0]});
		const uint8FqtbVMb = await WolfStakingRewardsGNfzKrH.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnY0bqtd = "7KRTjW3usyijmgaRqkH7PNmpQcTyYnpfyvxCp"
		const stringH9mrD9d = "JahOAj69giLBwwyBi7gYF4npuvuwx15J72DYm4pw"
		const uintmXwx7Dm = BigInt("92")
		const WolfStakingRewards9VwK5X = await WolfStakingRewards.new(stringnY0bqtd, stringH9mrD9d, uintmXwx7Dm, {from: accounts[2]});
		const uintd2KdBFl = BigInt("180")
		const uintrj1cSLC = BigInt("2016")
		const uintmmltAUp = BigInt("1952")
		const uint256l5lNjMi = await WolfStakingRewards9VwK5X.withdrawRemainingBalance.call(uintrj1cSLC, uintd2KdBFl, {from: accounts[0]});
		const uint256RW69Xt0 = await WolfStakingRewards9VwK5X.totalSupplyPerPool.call(uintmmltAUp, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmCsHHno = "ovpKQjzuKyYBRh2ES1DoMf5pRmyQd5H5U2OY6k8VUJn9oYCzOByw15bmuK0483OQJTjzGcCbd2mfvwUVx1kH1XiDW"
		const stringTnk21Mf = "rl5aGtjGHzgHyEp9pSam1KDT2ezy2fxipFrvcsBnBzGzYwqPW"
		const uintMn9dbPM = BigInt("67")
		const WolfStakingRewardsQvZsh89 = await WolfStakingRewards.new(stringmCsHHno, stringTnk21Mf, uintMn9dbPM, {from: accounts[0]});
		const uintBZtpuL = BigInt("1790")
		const uintqa9BCP = BigInt("457")
		const uintGVsn1wi = BigInt("1194")
		const uintwqa94y = BigInt("1851")
		await WolfStakingRewardsQvZsh89.nonReentrant.call({from: accounts[1]});
		const uint256kAfPpQj = await WolfStakingRewardsQvZsh89.withdraw.call(uintqa9BCP, uintBZtpuL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ANHvHTd = await WolfStakingRewardsQvZsh89.getRewardForDuration.call(uintGVsn1wi, {from: accounts[0]});
		const uintMTj9wRA = await WolfStakingRewardsQvZsh89.getReward.call(uintwqa94y, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGOza5Hs = "xpKyhGuQ6hliG5DykkMDAeFO58OhIZ8"
		const stringmtIKKJc = "8rwvLSe4Y29amULvfF6dSEfan3E8T4aBA4diG98B2K89YkEHb8wghuEB"
		const uintpKpEeLw = BigInt("215")
		const WolfStakingRewardsnObAI1V = await WolfStakingRewards.new(stringGOza5Hs, stringmtIKKJc, uintpKpEeLw, {from: accounts[3]});
		const uintDtbT8Za = BigInt("820")
		const uintMcXQkA3 = BigInt("424")
		const uintRZqEmfH = BigInt("931")
		const uintB1DHM9f = await WolfStakingRewardsnObAI1V.getReward.call(uintDtbT8Za, {from: accounts[2]});
		const uint256ra996bx = await WolfStakingRewardsnObAI1V.withdrawRemainingBalance.call(uintRZqEmfH, uintMcXQkA3, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmY9aKJc = "kOn1MooyvKxgbTcYDYuljr3E8m2nH4A5A7k4OJ7f3nLC"
		const stringtnSOojQ = "2fpd48WlmzMmBcDk4THW7HogDW8QeucHDo4HQbCdzPKDrkRmKCtVsSrYpDh2zAldheFWXoXaKwzCstvkJ"
		const uintT0HmPL = BigInt("169")
		const WolfStakingRewardsgpKJZ3g = await WolfStakingRewards.new(stringmY9aKJc, stringtnSOojQ, uintT0HmPL, {from: accounts[0]});
		const uintu2BQrEl = BigInt("1670")
		const uint256Nct2EZr = await WolfStakingRewardsgpKJZ3g.lastTimeRewardApplicable.call(uintu2BQrEl, {from: accounts[1]});
		await WolfStakingRewardsgpKJZ3g.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhyTaorX = "q8MSS23"
		const stringFAnDjqN = "YDSferhQMdCmRQJyTYfgA2KkoEgcqGY8Cy6NB"
		const uintAlGl5ZY = BigInt("117")
		const WolfStakingRewardsCl7TVS6 = await WolfStakingRewards.new(stringhyTaorX, stringFAnDjqN, uintAlGl5ZY, {from: accounts[0]});
		const uintRuhWFW = BigInt("1188")
		const uintGl7N7Vm = BigInt("626")
		const uintBdtCsL5 = BigInt("271")
		const uinttlGV8LD = BigInt("1826")
		const addresstMwmHOM = accounts[1]
		const uint256arrayFXYIAZD = await WolfStakingRewardsCl7TVS6.updateNotifyRewardAmount.call(uintRuhWFW, {from: accounts[5]});
		const uint256uNt3PLB = await WolfStakingRewardsCl7TVS6.stake.call(uintBdtCsL5, uintGl7N7Vm, {from: accounts[1]});
		const uint256eSeqX1w = await WolfStakingRewardsCl7TVS6.earned.call(addresstMwmHOM, uinttlGV8LD, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ2W79Wn = "Uul1oX8wYXxQtqa214GuTjot8abCVY7q6ICCthhL4jpX76eXMnmXIv8NS24SW6AG7kwh3pKPmOPzbeitL143p9qpng9TkWE"
		const stringOAUnUOT = "NdgGcLEpUQMJ3z3BXifwpfbOg7cfOGOlJrcyxVxJ1Ol6qMDVnDETqPFJCyDYsw8DXYb5jynDjFxObyhcXSBbzd3"
		const uintkM27E85 = BigInt("231")
		const WolfStakingRewardsQ0z3P5j = await WolfStakingRewards.new(stringQ2W79Wn, stringOAUnUOT, uintkM27E85, {from: accounts[3]});
		const uintBmqxN1L = BigInt("357")
		const uinta7DHIQH = BigInt("729")
		const uint256sWdlfzM = await WolfStakingRewardsQ0z3P5j.exit.call(uintBmqxN1L, {from: accounts[4]});
		const uint256eJlLJeJ = await WolfStakingRewardsQ0z3P5j.rewardPerToken.call(uinta7DHIQH, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLtNYZRw = "OVdzLTN4sOy8ycBPeBhrixrjraKI8h9gV5b4Xzwas"
		const stringSL4miRx = "J"
		const uinttZxAZuR = BigInt("193")
		const WolfStakingRewardsoIbayve = await WolfStakingRewards.new(stringLtNYZRw, stringSL4miRx, uinttZxAZuR, {from: accounts[3]});
		const uintADu7UuO = BigInt("1156")
		const uintXO2OjWb = BigInt("1022")
		const uintmay8B7o = BigInt("5")
		const uint256f2KHAoA = await WolfStakingRewardsoIbayve.getRewardForDuration.call(uintADu7UuO, {from: accounts[5]});
		const uint256b3kAMe4 = await WolfStakingRewardsoIbayve.lastTimeRewardApplicable.call(uintXO2OjWb, {from: accounts[3]});
		await WolfStakingRewardsoIbayve.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qdgGlXt = await WolfStakingRewardsoIbayve.lastTimeRewardApplicable.call(uintmay8B7o, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSg6s71F = "AAkLOhuUHzYbQMo3ltqRuLIt5qGB5x1SRbWorMbvmUwNaQAihQu1o6qF72kvXL5ej0R2aalVJTVLSEYl4UVnzTOSyqezIsUNn"
		const stringr9Q406N = "6HSRjyYzqjHvA9IKl9JW5cErmLcC1XgfeFRe9fcgeUkjk7difENxA5cjw1"
		const uinttV7NrNz = BigInt("35")
		const WolfStakingRewardsXH64NkJ = await WolfStakingRewards.new(stringSg6s71F, stringr9Q406N, uinttV7NrNz, {from: accounts[0]});
		const uinthg4lo9T = BigInt("305")
		const uintWVOTkkk = BigInt("28")
		const uintD24SmDB = BigInt("13")
		const uintPc1W8z5 = BigInt("1444")
		const uintd15Vhd2 = BigInt("435")
		const uintQvbfjJg = BigInt("1841")
		const uint256xKWa4Dc = await WolfStakingRewardsXH64NkJ.stake.call(uintWVOTkkk, uinthg4lo9T, {from: accounts[0]});
		const uint256N4BPKDN = await WolfStakingRewardsXH64NkJ.withdrawRemainingBalance.call(uintPc1W8z5, uintD24SmDB, {from: accounts[0]});
		const uint256IRxt4Bb = await WolfStakingRewardsXH64NkJ.stake.call(uintQvbfjJg, uintd15Vhd2, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRyLXd09 = "UD4RjI0DrdhHmcY2RpLMRTZnzu7Wb6AndI9oYko3K9lLQ5BzQnBHNoZ0gaTXcVQAStGH6HQso28Z97QOKuLuhF"
		const stringfQXc3DL = "JQiAn"
		const uintZ8hretR = BigInt("15")
		const WolfStakingRewardsPoG5zjo = await WolfStakingRewards.new(stringRyLXd09, stringfQXc3DL, uintZ8hretR, {from: accounts[4]});
		const uintZge5UM = BigInt("1485")
		const uintR7IQkC5 = BigInt("482")
		const uintOvAbOQ7 = BigInt("1208")
		const addressG5gpIqn = accounts[5]
		const uintFlPYZhr = BigInt("683")
		const addresszKwU6vF = accounts[2]
		const uint8CWjcgDj = await WolfStakingRewardsPoG5zjo.decimals.call({from: accounts[5]});
		const stringdQaHoL9 = await WolfStakingRewardsPoG5zjo.name.call({from: accounts[2]});
		const uint256ko9V7V = await WolfStakingRewardsPoG5zjo.totalSupplyPerPool.call(uintZge5UM, {from: accounts[0]});
		const uint256uknBmxU = await WolfStakingRewardsPoG5zjo.exit.call(uintR7IQkC5, {from: accounts[0]});
		const addressfsZatPO = await WolfStakingRewardsPoG5zjo.updateReward.call(addressG5gpIqn, uintOvAbOQ7, {from: accounts[3]});
		const uint256xmg858a = await WolfStakingRewardsPoG5zjo.balanceOfPerPool.call(addresszKwU6vF, uintFlPYZhr, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const string83OA4Y = "LDBfCaOpGME8lRx7ayLS5jD6heXLQR9CJGe3nPQvQLTlBl"
		const string2wPHeg = "EIKxik"
		const uintfn1hsA = BigInt("151")
		const WolfStakingRewardspKsiml4 = await WolfStakingRewards.new(string83OA4Y, string2wPHeg, uintfn1hsA, {from: accounts[2]});
		const uintVr1Wls = BigInt("1905")
		const uinta51qTP = BigInt("657")
		const uintMYIe8k9 = BigInt("1446")
		const addressaVHj4Rs = accounts[3]
		const uint256ibLfg8L = await WolfStakingRewardspKsiml4.getRewardForDuration.call(uintVr1Wls, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V3VBnXJ = await WolfStakingRewardspKsiml4.rewardPerToken.call(uinta51qTP, {from: accounts[2]});
		const addresspovvMtc = await WolfStakingRewardspKsiml4.updateReward.call(addressaVHj4Rs, uintMYIe8k9, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmAswk0W = "f0CwAG0molcP68vR62UYgxepzwzvmttHG9pCuIAnqj9Ueb70uXoLRJO1oWWhkcarJDfrKbQ"
		const stringHJJCufG = "hlzjXt8fN93BviOkf35wZ3rti3AiyEj6qYnS88v1foqUNGfyYxiYwC1Kood"
		const uintyoiuuGj = BigInt("213")
		const WolfStakingRewardszusIWLq = await WolfStakingRewards.new(stringmAswk0W, stringHJJCufG, uintyoiuuGj, {from: accounts[2]});
		const uintLyEaACy = BigInt("1826")
		const uint8QxUt4Tx = await WolfStakingRewardszusIWLq.decimals.call({from: accounts[0]});
		await WolfStakingRewardszusIWLq.onlyRewardsDistribution.call({from: accounts[2]});
		const stringcF7XBit = await WolfStakingRewardszusIWLq.name.call({from: accounts[5]});
		const uint256NicFfGr = await WolfStakingRewardszusIWLq.exit.call(uintLyEaACy, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnKnJEE = "9uQC"
		const stringYC4fEv5 = "lAYk88ndwGGGahMXjxBQzAes54PAuh2D9RF"
		const uintrPLzAVy = BigInt("15")
		const WolfStakingRewardschNez8b = await WolfStakingRewards.new(stringnKnJEE, stringYC4fEv5, uintrPLzAVy, {from: accounts[1]});
		const uintulF68bG = BigInt("1897")
		const uintBdjF2Hs = BigInt("501")
		const uint9D477j = BigInt("1240")
		const uintGYREK5p = BigInt("475")
		const uintJdZ4VKr = BigInt("793")
		const uintVtMIiTh = BigInt("1570")
		const uint256PlAMfSg = await WolfStakingRewardschNez8b.exit.call(uintulF68bG, {from: accounts[4]});
		const uint256sBybYPn = await WolfStakingRewardschNez8b.totalSupplyPerPool.call(uintBdjF2Hs, {from: accounts[0]});
		const uint256erbBu9g = await WolfStakingRewardschNez8b.stake.call(uintGYREK5p, uint9D477j, {from: accounts[1]});
		const uint256rfl5R5M = await WolfStakingRewardschNez8b.withdrawRemainingBalance.call(uintVtMIiTh, uintJdZ4VKr, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGy6wAyh = "r7WVQeX4o2k80tq6zp8QDg6AHkzRShzOzQu3VzOnDpmDqYPFns2GLaKXkv3ad3FHQSQ3c110N86wEJDPp3jlI"
		const stringhZiFm8D = "JWy3siw3beM9eZYBFVip8UWeHwovFwKllMjQD3MlRUTzqnR7DaNhlhUmVjqXpOPafe43SxYWVf"
		const uintVJL2ABu = BigInt("188")
		const WolfStakingRewardsZssL62z = await WolfStakingRewards.new(stringGy6wAyh, stringhZiFm8D, uintVJL2ABu, {from: "0x0000000000000000000000000000000000000001"});
		const uintqY9okln = BigInt("857")
		const addressqbk8Yl1 = accounts[5]
		const uintT6SC1jh = BigInt("1673")
		const uintC0vZHPU = BigInt("1124")
		const addressXzo8T7 = accounts[2]
		const uintrj6pEhf = BigInt("1211")
		const uintBtofUl = BigInt("1428")
		const uint256sVR5Khl = await WolfStakingRewardsZssL62z.earned.call(addressqbk8Yl1, uintqY9okln, {from: accounts[3]});
		const stringHMF14Oc = await WolfStakingRewardsZssL62z.symbol.call({from: accounts[4]});
		const uint256eXlIw33 = await WolfStakingRewardsZssL62z.getRewardForDuration.call(uintT6SC1jh, {from: accounts[4]});
		const uint2560nV8o8 = await WolfStakingRewardsZssL62z.balanceOfPerPool.call(addressXzo8T7, uintC0vZHPU, {from: accounts[4]});
		const uint256Wvw6tEp = await WolfStakingRewardsZssL62z.stake.call(uintBtofUl, uintrj6pEhf, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzkci9Lj = "zVBb2bXoMo4FS9ptYMF7zDyIog9cs96KXoVNPby9q"
		const stringptxzgMX = "mXWThkCyDaPBeaUfp7a0tm2YNCsCwzEarEgXJzZwNaCMzm1utlD"
		const uint2xosPT = BigInt("11")
		const WolfStakingRewardsw5i0YzG = await WolfStakingRewards.new(stringzkci9Lj, stringptxzgMX, uint2xosPT, {from: accounts[0]});
		const uintHDXMs9h = BigInt("32")
		const uintXikkonu = BigInt("388")
		const uintnnALHTy = BigInt("1541")
		const uintltFVQ89 = BigInt("1813")
		const uintLGKtnS = BigInt("660")
		const uintcSU4VL = BigInt("74")
		const uintsCb10y = BigInt("115")
		const uintNH2uEC = BigInt("1931")
		const uint256MJZImUT = await WolfStakingRewardsw5i0YzG.totalSupplyPerPool.call(uintHDXMs9h, {from: accounts[3]});
		const uint256XUqLqnx = await WolfStakingRewardsw5i0YzG.lastTimeRewardApplicable.call(uintXikkonu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jTyUrKk = await WolfStakingRewardsw5i0YzG.withdrawRemainingBalance.call(uintltFVQ89, uintnnALHTy, {from: accounts[0]});
		const uint256K6U9kNB = await WolfStakingRewardsw5i0YzG.exit.call(uintLGKtnS, {from: accounts[3]});
		const uint256H5Wjfi6 = await WolfStakingRewardsw5i0YzG.lastTimeRewardApplicable.call(uintcSU4VL, {from: accounts[0]});
		const uint256Dfub2yH = await WolfStakingRewardsw5i0YzG.stake.call(uintNH2uEC, uintsCb10y, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringH5eDTpc = "1VAbP9cKGQyGJipIQHQKoL0aAFPRPHtlfNlkVELAGm7"
		const stringcBJUgA = "PmXbza4avSaueHcQxGp6FFxgsjerbNUMl3"
		const uintpp99I2u = BigInt("84")
		const WolfStakingRewardsp2qAyN4 = await WolfStakingRewards.new(stringH5eDTpc, stringcBJUgA, uintpp99I2u, {from: accounts[3]});
		const uintZboM9LK = BigInt("81")
		const uintMfIzIjw = BigInt("811")
		const uintKb2F0x5 = BigInt("1663")
		const uintXYogO9T = BigInt("2037")
		const addresshQtz4ze = accounts[0]
		const uintXEHheht = BigInt("1751")
		const uint256L2c9RuP = await WolfStakingRewardsp2qAyN4.stake.call(uintMfIzIjw, uintZboM9LK, {from: accounts[1]});
		const uint256jLuzys = await WolfStakingRewardsp2qAyN4.totalSupplyPerPool.call(uintKb2F0x5, {from: accounts[1]});
		const addressaeoB2LF = await WolfStakingRewardsp2qAyN4.updateReward.call(addresshQtz4ze, uintXYogO9T, {from: accounts[4]});
		const uint256QDeG5zz = await WolfStakingRewardsp2qAyN4.rewardPerToken.call(uintXEHheht, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKYymcSD = "SDaYgSfPqTuCiXIUXKwL6mOOCUomr50HHFYu0dL8RjXm4YfTUxM9JdzgOJjsiRvPJ5idR"
		const stringETMEvkE = "FKkqLs4ebvDb9ssCH7opkbw1xo34nVh"
		const uint6euBsw = BigInt("167")
		const WolfStakingRewardsrU3QbsO = await WolfStakingRewards.new(stringKYymcSD, stringETMEvkE, uint6euBsw, {from: accounts[0]});
		const uintEonprPx = BigInt("731")
		const uintwacgfaP = BigInt("882")
		const addressC9AjbMK = accounts[1]
		const uint256arraytWuW881 = await WolfStakingRewardsrU3QbsO.updateNotifyRewardAmount.call(uintEonprPx, {from: "0x0000000000000000000000000000000000000001"});
		const addressJimvH2t = await WolfStakingRewardsrU3QbsO.updateReward.call(addressC9AjbMK, uintwacgfaP, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKXhNQkM = "ipOHCWXIrch4O"
		const stringJxxYbsZ = "8LGrKOalqqk9vrOA8xF63WR9d3DY4nTktfkNhY4BMxYpsJxDyBJBrGDSNXDrT66dxGyfmwTkgP2"
		const uinteMmopg4 = BigInt("129")
		const WolfStakingRewardsNZjN2n3 = await WolfStakingRewards.new(stringKXhNQkM, stringJxxYbsZ, uinteMmopg4, {from: accounts[1]});
		const uintyNEaBTj = BigInt("1373")
		const uintEW2gaw9 = BigInt("236")
		const uint4hoHs0 = BigInt("1291")
		const addressJ1ym080 = accounts[4]
		const uintoxVtLB = BigInt("1543")
		const uint1HhAEG = BigInt("141")
		const addressyUkB9o2 = accounts[2]
		const uint256MUcN6Fp = await WolfStakingRewardsNZjN2n3.rewardPerToken.call(uintyNEaBTj, {from: accounts[3]});
		const uintdNKP6E3 = await WolfStakingRewardsNZjN2n3.getReward.call(uintEW2gaw9, {from: accounts[5]});
		const uint256RS2voxb = await WolfStakingRewardsNZjN2n3.balanceOfPerPool.call(addressJ1ym080, uint4hoHs0, {from: accounts[3]});
		const uint256rXAAwwQ = await WolfStakingRewardsNZjN2n3.exit.call(uintoxVtLB, {from: accounts[3]});
		const addressJtBxXZZ = await WolfStakingRewardsNZjN2n3.updateReward.call(addressyUkB9o2, uint1HhAEG, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMTzkQv = "hAdSi1CkbmUG1tB3k8K89FailOr1Mw9ZYcWpFYSiNC07Sw6hnDeellgG6oe1s7K2Ae2L4816nqxkYS2f7vIUG1rr"
		const stringjx4Vwy6 = "tYlSfy4YLuaSAfKIgFAhXX292ud9EdPVehYttmnjh"
		const uintUZHSmEW = BigInt("230")
		const WolfStakingRewardssApApsm = await WolfStakingRewards.new(stringMTzkQv, stringjx4Vwy6, uintUZHSmEW, {from: "0x0000000000000000000000000000000000000001"});
		const uintPEcse2b = BigInt("662")
		const uintQKtbNn = BigInt("779")
		const uintxAahrCu = BigInt("628")
		const uint8AXKh4ZN = await WolfStakingRewardssApApsm.decimals.call({from: accounts[3]});
		const uint256khO5vjl = await WolfStakingRewardssApApsm.getRewardForDuration.call(uintPEcse2b, {from: accounts[1]});
		const uint256OhdzLgL = await WolfStakingRewardssApApsm.withdraw.call(uintxAahrCu, uintQKtbNn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlc1RTZg = "U8l3xbU2Pz5NGsTJQsMGdOCHIWfI3FncZIiA4zFXy9crCbBUuATwvZlPuCjFCVFRflAmMINgRXer7XDUW0kjTqXJYDeZm5dj"
		const stringbxSelyO = "giRYXk7rRI2mFOzST"
		const uintpaL2bC = BigInt("33")
		const WolfStakingRewardsmShnTCm = await WolfStakingRewards.new(stringlc1RTZg, stringbxSelyO, uintpaL2bC, {from: accounts[0]});
		const uintr7mU0E = BigInt("836")
		const uintJlVh90d = BigInt("1687")
		const stringPhihymy = await WolfStakingRewardsmShnTCm.symbol.call({from: accounts[4]});
		const uint256JCMyRIX = await WolfStakingRewardsmShnTCm.withdraw.call(uintJlVh90d, uintr7mU0E, {from: accounts[1]});
		const stringMZIdlOB = await WolfStakingRewardsmShnTCm.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhZYAIrc = "FRVBwvy4RBG53x4Ij9o34yMchS2IfI3NAKwPYshGeomNHw5ach0DFQ1wWcHGx4aCEKIzlWm4m9odlsR3LHBEtKdRCMWQY"
		const stringzIvFMac = "9Ahn2k2M7WZxr6SYdLyqAJPp3CJlsi8RhSmDk7LkfH7K"
		const uintfLejfqz = BigInt("21")
		const WolfStakingRewards6hhm5A = await WolfStakingRewards.new(stringhZYAIrc, stringzIvFMac, uintfLejfqz, {from: accounts[0]});
		const uintInlz5Pq = BigInt("1689")
		const uintdfosdI = BigInt("341")
		const uintrXKfDff = BigInt("2024")
		const uintuPAVfPN = BigInt("1993")
		const uint256rcYKu4P = await WolfStakingRewards6hhm5A.withdrawRemainingBalance.call(uintdfosdI, uintInlz5Pq, {from: accounts[4]});
		const uint256Dibcg3u = await WolfStakingRewards6hhm5A.withdrawRemainingBalance.call(uintuPAVfPN, uintrXKfDff, {from: accounts[2]});
		await WolfStakingRewards6hhm5A.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlLjb73S = "IlaERz3jsF7SBflZhxLU2q05HV5oInphqknr719hHWWuRl3X2WSxpIpnhVUfm"
		const stringlbQcJLG = "D"
		const uintEc6X7Ra = BigInt("213")
		const WolfStakingRewardsKrxEdg = await WolfStakingRewards.new(stringlLjb73S, stringlbQcJLG, uintEc6X7Ra, {from: accounts[3]});
		const uintTnWnQdm = BigInt("343")
		const uintNfo2nOk = BigInt("433")
		const uintHEcLEdT = BigInt("1322")
		const uintKQ5amij = BigInt("1374")
		const uintZ5DuS9P = BigInt("120")
		const uint256arraybD2sc4U = await WolfStakingRewardsKrxEdg.updateNotifyRewardAmount.call(uintTnWnQdm, {from: accounts[1]});
		const uint256lEJcy7t = await WolfStakingRewardsKrxEdg.withdraw.call(uintHEcLEdT, uintNfo2nOk, {from: accounts[0]});
		const uint256p3KiL8y = await WolfStakingRewardsKrxEdg.stake.call(uintZ5DuS9P, uintKQ5amij, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIprWgX = "afM"
		const stringlut5ix = "ZHlDZHWgiNKY8lOjnwQoiuFVr6qxIkqwY3qkzGs4jn2qgDnCOXvCQySzB6VV97eU"
		const uintVb110hO = BigInt("215")
		const WolfStakingRewardslp1wGdu = await WolfStakingRewards.new(stringIprWgX, stringlut5ix, uintVb110hO, {from: accounts[4]});
		const uintXE2oLvl = BigInt("330")
		const uintwRTlJKj = BigInt("836")
		const uintooH1s7X = BigInt("1998")
		const uint256MJg4ePn = await WolfStakingRewardslp1wGdu.withdrawRemainingBalance.call(uintwRTlJKj, uintXE2oLvl, {from: accounts[1]});
		const uint256rwcSotP = await WolfStakingRewardslp1wGdu.rewardPerToken.call(uintooH1s7X, {from: accounts[0]});
		const stringgTIjGV = await WolfStakingRewardslp1wGdu.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDpyvZdS = "81OVaeRwb7jOjsaUekExi3"
		const stringgNtIPoB = "cVcxhjJTWlovHnsU4YMIn4c9ghq"
		const uintPEuaTFP = BigInt("120")
		const WolfStakingRewardsJoyVOO9 = await WolfStakingRewards.new(stringDpyvZdS, stringgNtIPoB, uintPEuaTFP, {from: accounts[1]});
		const uintwGhKaqW = BigInt("1845")
		const addressVVcb6Yi = accounts[1]
		const uintW4qpGKE = BigInt("1728")
		const addressNHcwRUK = accounts[5]
		const uintKEvu0Q8 = BigInt("706")
		const uintgisNj5S = BigInt("543")
		const uint256DRvQtZq = await WolfStakingRewardsJoyVOO9.earned.call(addressVVcb6Yi, uintwGhKaqW, {from: accounts[3]});
		const uint256k7iSdLl = await WolfStakingRewardsJoyVOO9.earned.call(addressNHcwRUK, uintW4qpGKE, {from: accounts[0]});
		const uint256TPATPEm = await WolfStakingRewardsJoyVOO9.exit.call(uintKEvu0Q8, {from: accounts[3]});
		const uint256BCD79Od = await WolfStakingRewardsJoyVOO9.rewardPerToken.call(uintgisNj5S, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCUsEZ1c = "XmjG8NXnFurhnUGRAyWXvCxbL1XbTRVhXlLiNgwnLQA57fBz0JbPo66aNuR5sRL"
		const stringWaaUDhI = "jYHyRYWcYFPhjb5U35D3YTyS6U2SViUfbqLQpvO1mRAhbnrb5obuaddqrBvkKbAg"
		const uinthpjPD0l = BigInt("161")
		const WolfStakingRewardsPGkbE4 = await WolfStakingRewards.new(stringCUsEZ1c, stringWaaUDhI, uinthpjPD0l, {from: accounts[5]});
		const uintB8hLpEi = BigInt("1566")
		const uintWpDhl2i = BigInt("1677")
		const uint256LF35C1q = await WolfStakingRewardsPGkbE4.exit.call(uintB8hLpEi, {from: accounts[3]});
		const uint256arrayZGi03qT = await WolfStakingRewardsPGkbE4.updateNotifyRewardAmount.call(uintWpDhl2i, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJpJA2Ab = "YDromv7GhXEgK5S3eJVod4RpeLO7d3MFvqn39Uny4bWBgOEAbUu4px6VONIZNqN77"
		const stringUrKtat5 = "j75jJgPnWTV42PjIycI5LblSJIWRRC0"
		const uintmCDMhAC = BigInt("172")
		const WolfStakingRewardsUKwTJsI = await WolfStakingRewards.new(stringJpJA2Ab, stringUrKtat5, uintmCDMhAC, {from: accounts[1]});
		const uintNLmbV8N = BigInt("997")
		const uintjRaepgQ = BigInt("857")
		const uintHHoocM0 = BigInt("1923")
		const uint256Mgxh9m = await WolfStakingRewardsUKwTJsI.exit.call(uintNLmbV8N, {from: accounts[1]});
		await WolfStakingRewardsUKwTJsI.nonReentrant.call({from: accounts[0]});
		const uint256umgMBWx = await WolfStakingRewardsUKwTJsI.stake.call(uintHHoocM0, uintjRaepgQ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAtYTHnS = "HAuctCdHnV4QlX9sdxRYu0pLvSvMlXKCT282Q7OoV8l5DpDiWhznU8XeymYUENrx5DALvE5gWSPQ"
		const stringpQGe2ET = "6SqxFbF8KWlg39Vvy4PtexkMo9EIlgRx6Nxvjlue9lmDLtGujlmYXrIKAqBQc76RBqojYeohgGpkPijQ6K1emXoUqItH2R"
		const uintX5tUD7X = BigInt("165")
		const WolfStakingRewardsBS34Ubv = await WolfStakingRewards.new(stringAtYTHnS, stringpQGe2ET, uintX5tUD7X, {from: accounts[4]});
		const uintLoX1Ype = BigInt("215")
		const addressuNTajfp = accounts[0]
		const uintKg2VyL2 = BigInt("1462")
		const uintpYDzgnz = BigInt("1464")
		const addressLo3ZtQo = await WolfStakingRewardsBS34Ubv.updateReward.call(addressuNTajfp, uintLoX1Ype, {from: accounts[1]});
		const uint256pKfxRPT = await WolfStakingRewardsBS34Ubv.withdrawRemainingBalance.call(uintpYDzgnz, uintKg2VyL2, {from: accounts[4]});
	});
})