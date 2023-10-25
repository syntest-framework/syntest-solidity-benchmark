const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressp9Zdi8b = accounts[4]
		const addressrWhsO82 = accounts[2]
		const uintTj3cbZF = BigInt("1331")
		const uintt4uEbw = BigInt("1226")
		const MisesLegacyPoolVduKMfp = await MisesLegacyPool.new(addressp9Zdi8b, addressrWhsO82, uintTj3cbZF, uintt4uEbw, {from: accounts[4]});
		const uintXL1N0Xi = BigInt("80")
		const uintTruwMnf = BigInt("1915")
//		await MisesLegacyPoolVduKMfp.checkStart.call({from: accounts[2]});
//		await MisesLegacyPoolVduKMfp.exit.call({from: accounts[5]});
//		const uint256oocg2lT = await MisesLegacyPoolVduKMfp.stake.call(uintXL1N0Xi, {from: accounts[0]});
//		const uint256FOQJnu = await MisesLegacyPoolVduKMfp.stake.call(uintTruwMnf, {from: accounts[2]});

		await expect(MisesLegacyPoolVduKMfp.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressuszUwrR = accounts[0]
		const addressuxF6x7Q = accounts[0]
		const uintA4u5Zkd = BigInt("266")
		const uintaemJEN3 = BigInt("1197")
		const MisesLegacyPool98b2Va = await MisesLegacyPool.new(addressuszUwrR, addressuxF6x7Q, uintA4u5Zkd, uintaemJEN3, {from: accounts[0]});
		const addressZ8c7gGy = accounts[0]
		const uint256kwgKfZC = await MisesLegacyPool98b2Va.earned.call(addressZ8c7gGy, {from: accounts[1]});
//		await MisesLegacyPool98b2Va.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPool98b2Va.getReward.call({from: accounts[1]});
//		await MisesLegacyPool98b2Va.getReward.call({from: accounts[0]});

		assert.equal(uint256kwgKfZC, BigInt("0"))
		await expect(MisesLegacyPool98b2Va.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address7Ii3Sw = accounts[3]
		const addressxxE1jM2 = accounts[4]
		const uintzLxfq5g = BigInt("1995")
		const uintBRMKXSh = BigInt("1756")
		const MisesLegacyPoolgRNyrnF = await MisesLegacyPool.new(address7Ii3Sw, addressxxE1jM2, uintzLxfq5g, uintBRMKXSh, {from: accounts[0]});
		const uintHPKVe1q = BigInt("1444")
		const uintRBQTus1 = BigInt("0")
//		const uint256LgllGSE = await MisesLegacyPoolgRNyrnF.withdraw.call(uintHPKVe1q, {from: accounts[3]});
//		const uint256KwBiwEI = await MisesLegacyPoolgRNyrnF.rewardPerToken.call({from: accounts[4]});
//		const uint256OnLzWf7 = await MisesLegacyPoolgRNyrnF.stake.call(uintRBQTus1, {from: accounts[0]});
//		const uint256cbBFwol = await MisesLegacyPoolgRNyrnF.rewardPerToken.call({from: accounts[3]});

		await expect(MisesLegacyPoolgRNyrnF.withdraw.call(uintHPKVe1q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressWObOfAM = accounts[0]
		const addressIQhhFC = accounts[3]
		const uintO1n0Wbr = BigInt("1724")
		const uintRlqTQuJ = BigInt("1084")
		const MisesLegacyPoolVe0xBBR = await MisesLegacyPool.new(addressWObOfAM, addressIQhhFC, uintO1n0Wbr, uintRlqTQuJ, {from: accounts[0]});
		const addresscndhWY = accounts[3]
//		await MisesLegacyPoolVe0xBBR.exit.call({from: accounts[0]});
//		await MisesLegacyPoolVe0xBBR.exit.call({from: accounts[2]});
//		const addressDmTsCl9 = await MisesLegacyPoolVe0xBBR.updateReward.call(addresscndhWY, {from: accounts[3]});
//		await MisesLegacyPoolVe0xBBR.checkStart.call({from: accounts[0]});

		await expect(MisesLegacyPoolVe0xBBR.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressPaFAjB = accounts[2]
		const addresssY1D92R = accounts[1]
		const uintpDlYc61 = BigInt("926")
		const uintSTWxhdG = BigInt("260")
		const MisesLegacyPoolDzMMR72 = await MisesLegacyPool.new(addressPaFAjB, addresssY1D92R, uintpDlYc61, uintSTWxhdG, {from: accounts[4]});
		const addressVaRXdhB = accounts[5]
		const addressZFS9kk = accounts[1]
		const uintFwypKP3 = BigInt("1997")
		const uint256KECVIiQ = await MisesLegacyPoolDzMMR72.earned.call(addressVaRXdhB, {from: accounts[1]});
		const uint256egNRYH3 = await MisesLegacyPoolDzMMR72.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256J4c9Zr = await MisesLegacyPoolDzMMR72.earned.call(addressZFS9kk, {from: accounts[1]});
//		await MisesLegacyPoolDzMMR72.getReward.call({from: accounts[1]});
//		const uint256MRpPqGo = await MisesLegacyPoolDzMMR72.stake.call(uintFwypKP3, {from: accounts[4]});

		assert.equal(uint256J4c9Zr, BigInt("0"))
		assert.equal(uint256KECVIiQ, BigInt("0"))
		assert.equal(uint256egNRYH3, BigInt("0"))
		await expect(MisesLegacyPoolDzMMR72.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressr6Ejq1k = "0x0000000000000000000000000000000000000001"
		const addressZqdWr2q = "0x0000000000000000000000000000000000000001"
		const uintsLoqMY = BigInt("1526")
		const uintC7HdyX9 = BigInt("1606")
		const MisesLegacyPoolbyOzRWG = await MisesLegacyPool.new(addressr6Ejq1k, addressZqdWr2q, uintsLoqMY, uintC7HdyX9, {from: "0x0000000000000000000000000000000000000001"});
		const uintQz5cJ3V = BigInt("518")
		const addresstWq9Wkn = accounts[1]
		const uintqw7mWV = BigInt("1837")
		await MisesLegacyPoolbyOzRWG.exit.call({from: accounts[1]});
		const uint256rYj0VDv = await MisesLegacyPoolbyOzRWG.notifyRewardAmount.call(uintQz5cJ3V, {from: accounts[1]});
		const uint256iLm8SHj = await MisesLegacyPoolbyOzRWG.earned.call(addresstWq9Wkn, {from: accounts[0]});
		const uint256bz7aPT = await MisesLegacyPoolbyOzRWG.stake.call(uintqw7mWV, {from: accounts[3]});
		await MisesLegacyPoolbyOzRWG.getReward.call({from: accounts[0]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressJKClJFx = accounts[0]
		const addressia8mle9 = accounts[0]
		const uintHKZ4LcJ = BigInt("266")
		const uintycHzXOj = BigInt("1197")
		const MisesLegacyPool98b2Va = await MisesLegacyPool.new(addressJKClJFx, addressia8mle9, uintHKZ4LcJ, uintycHzXOj, {from: accounts[0]});
		const addressccd0zm1 = accounts[0]
		const uinteov0SzC = BigInt("1656")
		const uint256kwgKfZC = await MisesLegacyPool98b2Va.earned.call(addressccd0zm1, {from: accounts[1]});
//		const uint2567PXHl3 = await MisesLegacyPool98b2Va.notifyRewardAmount.call(uinteov0SzC, {from: accounts[1]});
//		await MisesLegacyPool98b2Va.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPool98b2Va.getReward.call({from: accounts[0]});

		assert.equal(uint256kwgKfZC, BigInt("0"))
		await expect(MisesLegacyPool98b2Va.notifyRewardAmount.call(uinteov0SzC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})