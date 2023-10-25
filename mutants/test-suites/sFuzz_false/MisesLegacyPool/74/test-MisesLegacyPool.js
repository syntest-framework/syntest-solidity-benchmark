const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresstroUe5z = accounts[5]
		const addressmvfbRHg = accounts[0]
		const uintCYVRcW = BigInt("1945")
		const uintuwAIGzS = BigInt("1258")
		const MisesLegacyPoolaVMNjwR = await MisesLegacyPool.new(addresstroUe5z, addressmvfbRHg, uintCYVRcW, uintuwAIGzS, {from: accounts[2]});
		const addressmSMYRNb = accounts[3]
		const uintaJHGrxf = BigInt("305")
		const addresswxyMJ1 = accounts[2]
		const uintugyaIUD = BigInt("70")
//		const addressYwzrh5P = await MisesLegacyPoolaVMNjwR.updateReward.call(addressmSMYRNb, {from: accounts[2]});
//		const uint256X74BE2 = await MisesLegacyPoolaVMNjwR.notifyRewardAmount.call(uintaJHGrxf, {from: accounts[0]});
//		const uint256bvlvL6 = await MisesLegacyPoolaVMNjwR.earned.call(addresswxyMJ1, {from: accounts[2]});
//		await MisesLegacyPoolaVMNjwR.exit.call({from: accounts[0]});
//		const uint256SWRtoGq = await MisesLegacyPoolaVMNjwR.notifyRewardAmount.call(uintugyaIUD, {from: accounts[1]});

		await expect(MisesLegacyPoolaVMNjwR.updateReward.call(addressmSMYRNb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressljCM8oK = accounts[4]
		const addressHkyEbHD = accounts[1]
		const uintuqCSupA = BigInt("1258")
		const uintjgFRNLm = BigInt("1918")
		const MisesLegacyPoolY3QZEbz = await MisesLegacyPool.new(addressljCM8oK, addressHkyEbHD, uintuqCSupA, uintjgFRNLm, {from: accounts[4]});
		const uinttamhBe = BigInt("564")
		const addressZWA3hkk = accounts[0]
		const uintXm64OTV = BigInt("543")
		const uintdfVENRt = BigInt("1894")
//		const uint256ELBIYaL = await MisesLegacyPoolY3QZEbz.notifyRewardAmount.call(uinttamhBe, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mc1ULs6 = await MisesLegacyPoolY3QZEbz.earned.call(addressZWA3hkk, {from: accounts[2]});
//		const uint256Szg2dTl = await MisesLegacyPoolY3QZEbz.stake.call(uintXm64OTV, {from: accounts[5]});
//		const uint256NNlppuH = await MisesLegacyPoolY3QZEbz.stake.call(uintdfVENRt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPoolY3QZEbz.notifyRewardAmount.call(uinttamhBe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressbhIa4BJ = accounts[0]
		const addresscsg21a = accounts[2]
		const uintZyeJkbz = BigInt("1418")
		const uintfLqvPw2 = BigInt("775")
		const MisesLegacyPoolYvQlV8Y = await MisesLegacyPool.new(addressbhIa4BJ, addresscsg21a, uintZyeJkbz, uintfLqvPw2, {from: "0x0000000000000000000000000000000000000001"});
		const uintDptxowT = BigInt("1422")
		const uintGZAqdpo = BigInt("1072")
		const addressXUidyb = accounts[2]
		const uint256H3CY4CQ = await MisesLegacyPoolYvQlV8Y.notifyRewardAmount.call(uintDptxowT, {from: accounts[4]});
		const uint256dwlL6Zn = await MisesLegacyPoolYvQlV8Y.withdraw.call(uintGZAqdpo, {from: accounts[5]});
		const uint256EH5DD5o = await MisesLegacyPoolYvQlV8Y.earned.call(addressXUidyb, {from: accounts[1]});
	});

	it('test for MisesLegacyPool', async () => {
		const addresslC7kLuA = accounts[2]
		const addresshmAOzo = accounts[0]
		const uintffrNk2b = BigInt("601")
		const uinthSoD56t = BigInt("823")
		const MisesLegacyPoolWDlhov6 = await MisesLegacyPool.new(addresslC7kLuA, addresshmAOzo, uintffrNk2b, uinthSoD56t, {from: accounts[0]});
		const uintRgCr1lC = BigInt("952")
		const uintnYwNScC = BigInt("1155")
//		const uint256VxsLPG5 = await MisesLegacyPoolWDlhov6.withdraw.call(uintRgCr1lC, {from: accounts[3]});
//		const uint256UESo0Ij = await MisesLegacyPoolWDlhov6.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256o4t5ljr = await MisesLegacyPoolWDlhov6.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256MN4AIU = await MisesLegacyPoolWDlhov6.withdraw.call(uintnYwNScC, {from: accounts[0]});
//		const uint256qggiccD = await MisesLegacyPoolWDlhov6.rewardPerToken.call({from: accounts[5]});
//		const uint256HoRICeE = await MisesLegacyPoolWDlhov6.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(MisesLegacyPoolWDlhov6.withdraw.call(uintRgCr1lC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressFqsYa7 = accounts[3]
		const addressmZ2mFmG = "0x0000000000000000000000000000000000000001"
		const uintv5oXnN = BigInt("1371")
		const uintVKCTv0f = BigInt("1989")
		const MisesLegacyPoolj3Bk2nZ = await MisesLegacyPool.new(addressFqsYa7, addressmZ2mFmG, uintv5oXnN, uintVKCTv0f, {from: accounts[3]});
		const uintk36Muhm = BigInt("1584")
		const uint256EIOkmQy = await MisesLegacyPoolj3Bk2nZ.lastTimeRewardApplicable.call({from: accounts[4]});
//		await MisesLegacyPoolj3Bk2nZ.exit.call({from: accounts[0]});
//		const uint256HRGy1x = await MisesLegacyPoolj3Bk2nZ.notifyRewardAmount.call(uintk36Muhm, {from: accounts[1]});

		assert.equal(uint256EIOkmQy, BigInt("0"))
		await expect(MisesLegacyPoolj3Bk2nZ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressp1jj9Z = accounts[5]
		const addressXHuewWn = accounts[1]
		const uintNcTnXD = BigInt("1971")
		const uintOFalOS0 = BigInt("1625")
		const MisesLegacyPoolWDuQoGD = await MisesLegacyPool.new(addressp1jj9Z, addressXHuewWn, uintNcTnXD, uintOFalOS0, {from: accounts[0]});
		const uintxsdyAR0 = BigInt("888")
		const uintqQYGv1 = BigInt("918")
		const uintc9m3QcE = BigInt("358")
//		const uint256Jq9oMgB = await MisesLegacyPoolWDuQoGD.stake.call(uintxsdyAR0, {from: accounts[1]});
//		const uint256PZZ1H6 = await MisesLegacyPoolWDuQoGD.withdraw.call(uintqQYGv1, {from: accounts[5]});
//		const uint256YOPTPzN = await MisesLegacyPoolWDuQoGD.withdraw.call(uintc9m3QcE, {from: accounts[0]});

		await expect(MisesLegacyPoolWDuQoGD.stake.call(uintxsdyAR0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressnLQSwWu = "0x0000000000000000000000000000000000000001"
		const addressrOXCKFA = accounts[4]
		const uintzpCt3DB = BigInt("1590")
		const uintBnlggDy = BigInt("710")
		const MisesLegacyPoolkgAJMZX = await MisesLegacyPool.new(addressnLQSwWu, addressrOXCKFA, uintzpCt3DB, uintBnlggDy, {from: accounts[1]});
		const uintlDNe2Ft = BigInt("223")
		const uint256dof9Clc = await MisesLegacyPoolkgAJMZX.rewardPerToken.call({from: accounts[3]});
//		await MisesLegacyPoolkgAJMZX.getReward.call({from: accounts[1]});
//		await MisesLegacyPoolkgAJMZX.getReward.call({from: accounts[4]});
//		const uint256HSSBQx1 = await MisesLegacyPoolkgAJMZX.withdraw.call(uintlDNe2Ft, {from: accounts[5]});

		assert.equal(uint256dof9Clc, BigInt("0"))
		await expect(MisesLegacyPoolkgAJMZX.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})