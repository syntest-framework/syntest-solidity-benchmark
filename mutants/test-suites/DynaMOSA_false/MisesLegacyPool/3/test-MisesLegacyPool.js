const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressIUFNmGw = "0x0000000000000000000000000000000000000001"
		const addresslNt8sFc = accounts[1]
		const uintJ3KAbqE = BigInt("1527")
		const uintPdH3Vz1 = BigInt("1326")
		const MisesLegacyPoolIWjzazY = await MisesLegacyPool.new(addressIUFNmGw, addresslNt8sFc, uintJ3KAbqE, uintPdH3Vz1, {from: accounts[4]});
		const uintPzLLzOX = BigInt("967")
//		await MisesLegacyPoolIWjzazY.checkStart.call({from: accounts[3]});
//		const uint256M3ivX8N = await MisesLegacyPoolIWjzazY.withdraw.call(uintPzLLzOX, {from: accounts[1]});

		await expect(MisesLegacyPoolIWjzazY.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressYO8P7UC = accounts[2]
		const addressMckvL18 = accounts[1]
		const uintjRiTmx8 = BigInt("38")
		const uinthfOLxQY = BigInt("309")
		const MisesLegacyPoolbvLLOQX = await MisesLegacyPool.new(addressYO8P7UC, addressMckvL18, uintjRiTmx8, uinthfOLxQY, {from: accounts[0]});
		const uintCMSKx5N = BigInt("1650")
		const uintfsvj8nG = BigInt("1021")
//		const uint256ckYFXBr = await MisesLegacyPoolbvLLOQX.withdraw.call(uintCMSKx5N, {from: accounts[1]});
//		const uint256iL2wFFV = await MisesLegacyPoolbvLLOQX.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256po7fAkG = await MisesLegacyPoolbvLLOQX.stake.call(uintfsvj8nG, {from: accounts[5]});
//		await MisesLegacyPoolbvLLOQX.exit.call({from: accounts[3]});
//		await MisesLegacyPoolbvLLOQX.exit.call({from: accounts[1]});
//		const uint256kRloYIE = await MisesLegacyPoolbvLLOQX.rewardPerToken.call({from: accounts[2]});

		await expect(MisesLegacyPoolbvLLOQX.withdraw.call(uintCMSKx5N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresssW44Uv = accounts[0]
		const addressX3oO3AR = accounts[0]
		const uintGQRUxt9 = BigInt("262")
		const uintJBlff4m = BigInt("1618")
		const MisesLegacyPoolscZh1qX = await MisesLegacyPool.new(addresssW44Uv, addressX3oO3AR, uintGQRUxt9, uintJBlff4m, {from: accounts[2]});
		const addressWTAktpA = accounts[0]
		const addressnXYBErU = accounts[2]
//		await MisesLegacyPoolscZh1qX.getReward.call({from: accounts[2]});
//		const uint256TrcZtv5 = await MisesLegacyPoolscZh1qX.earned.call(addressWTAktpA, {from: accounts[4]});
//		const addressFwqboV = await MisesLegacyPoolscZh1qX.updateReward.call(addressnXYBErU, {from: accounts[0]});
//		await MisesLegacyPoolscZh1qX.getReward.call({from: accounts[5]});

		await expect(MisesLegacyPoolscZh1qX.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressJJk3VE = accounts[1]
		const addressw4dfcAT = accounts[3]
		const uintzut7Hag = BigInt("1022")
		const uintY9bNFeU = BigInt("1415")
		const MisesLegacyPoolUMq24NI = await MisesLegacyPool.new(addressJJk3VE, addressw4dfcAT, uintzut7Hag, uintY9bNFeU, {from: accounts[3]});
		const uintu3LpGUZ = BigInt("1613")
//		await MisesLegacyPoolUMq24NI.exit.call({from: accounts[0]});
//		const uint256zDIcW1h = await MisesLegacyPoolUMq24NI.rewardPerToken.call({from: accounts[4]});
//		const uint256f29ptyZ = await MisesLegacyPoolUMq24NI.withdraw.call(uintu3LpGUZ, {from: accounts[0]});

		await expect(MisesLegacyPoolUMq24NI.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressgYkgG6y = accounts[1]
		const addresszuzg6C6 = accounts[5]
		const uintFBx2FQN = BigInt("642")
		const uintjDd8QP = BigInt("187")
		const MisesLegacyPoolKwlrmWH = await MisesLegacyPool.new(addressgYkgG6y, addresszuzg6C6, uintFBx2FQN, uintjDd8QP, {from: "0x0000000000000000000000000000000000000001"});
		const addressWSjYGhJ = accounts[1]
		const addressYVtKgeb = accounts[1]
		const uint256wqs3OGM = await MisesLegacyPoolKwlrmWH.earned.call(addressWSjYGhJ, {from: accounts[4]});
		const uint256TxlXEr = await MisesLegacyPoolKwlrmWH.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolKwlrmWH.checkStart.call({from: accounts[1]});
		const uint256rUcQsQL = await MisesLegacyPoolKwlrmWH.earned.call(addressYVtKgeb, {from: accounts[0]});
		const uint256loTQZcE = await MisesLegacyPoolKwlrmWH.rewardPerToken.call({from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressqIVeaWj = accounts[3]
		const addressY75K6E6 = accounts[1]
		const uintI3s8gVP = BigInt("45")
		const uintVTbZ3mS = BigInt("1292")
		const MisesLegacyPoolWKWGg41 = await MisesLegacyPool.new(addressqIVeaWj, addressY75K6E6, uintI3s8gVP, uintVTbZ3mS, {from: accounts[4]});
		const uintmyqyNQS = BigInt("1617")
		const addressYghbrdl = accounts[0]
		const addressgGU0HNo = accounts[3]
//		await MisesLegacyPoolWKWGg41.getReward.call({from: accounts[2]});
//		const uint256XLHS1ck = await MisesLegacyPoolWKWGg41.notifyRewardAmount.call(uintmyqyNQS, {from: accounts[2]});
//		const addressZd00LAS = await MisesLegacyPoolWKWGg41.updateReward.call(addressYghbrdl, {from: accounts[0]});
//		await MisesLegacyPoolWKWGg41.exit.call({from: accounts[0]});
//		const uint256PQgrk1b = await MisesLegacyPoolWKWGg41.earned.call(addressgGU0HNo, {from: accounts[0]});

		await expect(MisesLegacyPoolWKWGg41.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressrlOzbd = accounts[4]
		const addressmQRioSE = accounts[4]
		const uint9NWm1q = BigInt("1937")
		const uintZiSv3ut = BigInt("498")
		const MisesLegacyPoolPuxUQsx = await MisesLegacyPool.new(addressrlOzbd, addressmQRioSE, uint9NWm1q, uintZiSv3ut, {from: accounts[4]});
		const uintD8w2LfQ = BigInt("1745")
		const uintuoloO2S = BigInt("706")
		const uintCLWxP7f = BigInt("1674")
		const uint256GjyN7pw = await MisesLegacyPoolPuxUQsx.rewardPerToken.call({from: accounts[1]});
//		const uint256wsTnup = await MisesLegacyPoolPuxUQsx.stake.call(uintD8w2LfQ, {from: accounts[5]});
//		await MisesLegacyPoolPuxUQsx.checkStart.call({from: accounts[3]});
//		const uint256KJzyuTI = await MisesLegacyPoolPuxUQsx.stake.call(uintuoloO2S, {from: accounts[2]});
//		const uint256beztWpM = await MisesLegacyPoolPuxUQsx.stake.call(uintCLWxP7f, {from: accounts[2]});

		assert.equal(uint256GjyN7pw, BigInt("0"))
		await expect(MisesLegacyPoolPuxUQsx.stake.call(uintD8w2LfQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})