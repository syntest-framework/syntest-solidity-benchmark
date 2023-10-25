const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardmuaEX1 = await AavePoolReward.new({from: accounts[1]});
		const uintLU3y7bj = BigInt("1205")
		const uintqqiGXpi = BigInt("1473")
//		await AavePoolRewardmuaEX1.exit.call({from: accounts[5]});
//		const uint256gIWs8V = await AavePoolRewardmuaEX1.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256VIYLB2o = await AavePoolRewardmuaEX1.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256QX0L8s0 = await AavePoolRewardmuaEX1.notifyRewardAmount.call(uintLU3y7bj, {from: accounts[2]});
//		await AavePoolRewardmuaEX1.getReward.call({from: accounts[3]});
//		const uint256YaAP6L9 = await AavePoolRewardmuaEX1.stake.call(uintqqiGXpi, {from: accounts[3]});

		await expect(AavePoolRewardmuaEX1.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmQiLm06 = await AavePoolReward.new({from: accounts[4]});
//		await AavePoolRewardmQiLm06.getReward.call({from: accounts[1]});
//		await AavePoolRewardmQiLm06.getReward.call({from: accounts[0]});

		await expect(AavePoolRewardmQiLm06.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQtk9kCc = await AavePoolReward.new({from: accounts[1]});
		const addressdmDEInc = accounts[3]
		const uint256dtMT3MG = await AavePoolRewardQtk9kCc.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressHFUcD5Z = await AavePoolRewardQtk9kCc.dev.call(addressdmDEInc, {from: accounts[1]});
		const uint256bYAu9UF = await AavePoolRewardQtk9kCc.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256bYAu9UF, BigInt("0"))
		assert.equal(uint256dtMT3MG, BigInt("0"))
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardpWSiOiM = await AavePoolReward.new({from: accounts[0]});
		const addresskABrwvR = accounts[2]
		const addressAQ1KsIQ = "0x0000000000000000000000000000000000000001"
		const uintNGSwoCu = BigInt("919")
		const addressiYc9jsp = accounts[2]
		const addressbnghuQE = accounts[0]
		const uint256AGz0NzL = await AavePoolRewardpWSiOiM.earned.call(addresskABrwvR, {from: accounts[1]});
		const uint256JsdPqAE = await AavePoolRewardpWSiOiM.earned.call(addressAQ1KsIQ, {from: accounts[0]});
//		const uint256jviLWZW = await AavePoolRewardpWSiOiM.withdraw.call(uintNGSwoCu, {from: accounts[5]});
//		const uint256djFwbo0 = await AavePoolRewardpWSiOiM.earned.call(addressiYc9jsp, {from: "0x0000000000000000000000000000000000000001"});
//		const addresscTGTHzT = await AavePoolRewardpWSiOiM.dev.call(addressbnghuQE, {from: accounts[0]});
//		const uint256RyVvac5 = await AavePoolRewardpWSiOiM.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256AGz0NzL, BigInt("0"))
		assert.equal(uint256JsdPqAE, BigInt("0"))
		await expect(AavePoolRewardpWSiOiM.withdraw.call(uintNGSwoCu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhyI9jtS = await AavePoolReward.new({from: accounts[0]});
		const uinteS24WYy = BigInt("980")
		const uintDXOvqsb = BigInt("1433")
		const addressNbfXPkU = accounts[2]
//		const uint256FNActLC = await AavePoolRewardhyI9jtS.stake.call(uinteS24WYy, {from: accounts[3]});
//		await AavePoolRewardhyI9jtS.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardhyI9jtS.getReward.call({from: accounts[0]});
//		const uint256DWZXP19 = await AavePoolRewardhyI9jtS.stake.call(uintDXOvqsb, {from: accounts[2]});
//		const addresseUIOdw0 = await AavePoolRewardhyI9jtS.dev.call(addressNbfXPkU, {from: accounts[2]});

		await expect(AavePoolRewardhyI9jtS.stake.call(uinteS24WYy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardonuhBh8 = await AavePoolReward.new({from: accounts[4]});
		const addressEBqQakb = accounts[2]
		const uintTKctJ7A = BigInt("451")
//		await AavePoolRewardonuhBh8.getReward.call({from: accounts[1]});
//		const uint256XdkaiIK = await AavePoolRewardonuhBh8.earned.call(addressEBqQakb, {from: accounts[0]});
//		const uint256M1vIaNx = await AavePoolRewardonuhBh8.notifyRewardAmount.call(uintTKctJ7A, {from: accounts[4]});
//		const uint256rwizfsj = await AavePoolRewardonuhBh8.rewardPerToken.call({from: accounts[0]});

		await expect(AavePoolRewardonuhBh8.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardv7AvCEo = await AavePoolReward.new({from: accounts[3]});
		const uintA6mQNyZ = BigInt("1454")
		const addresssFFk3SW = accounts[3]
		const addressiFzmnDm = "0x0000000000000000000000000000000000000001"
		const addressNWv4g96 = accounts[3]
		const addressZ06zLox = accounts[5]
//		const uint256sCuipSi = await AavePoolRewardv7AvCEo.notifyRewardAmount.call(uintA6mQNyZ, {from: accounts[1]});
//		const uint256Upwqw6 = await AavePoolRewardv7AvCEo.earned.call(addresssFFk3SW, {from: accounts[1]});
//		const uint256MJRHvEG = await AavePoolRewardv7AvCEo.earned.call(addressiFzmnDm, {from: accounts[2]});
//		const addressui4h9Y8 = await AavePoolRewardv7AvCEo.updateReward.call(addressNWv4g96, {from: accounts[1]});
//		const uint256wDg6Lcq = await AavePoolRewardv7AvCEo.earned.call(addressZ06zLox, {from: accounts[2]});

		await expect(AavePoolRewardv7AvCEo.notifyRewardAmount.call(uintA6mQNyZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmQiLm06 = await AavePoolReward.new({from: accounts[4]});
		const addresskJk3Rb6 = accounts[1]
//		await AavePoolRewardmQiLm06.getReward.call({from: accounts[1]});
//		const addressxBKHlM9 = await AavePoolRewardmQiLm06.updateReward.call(addresskJk3Rb6, {from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardmQiLm06.getReward.call({from: accounts[0]});

		await expect(AavePoolRewardmQiLm06.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmQiLm06 = await AavePoolReward.new({from: accounts[4]});
		const addressSBuRV4M = accounts[2]
		const addressx2s6Xz = accounts[5]
//		const addressLUTb8N = await AavePoolRewardmQiLm06.dev.call(addressSBuRV4M, {from: accounts[3]});
//		await AavePoolRewardmQiLm06.getReward.call({from: accounts[1]});
//		const addresspehCSYl = await AavePoolRewardmQiLm06.updateReward.call(addressx2s6Xz, {from: accounts[0]});

		await expect(AavePoolRewardmQiLm06.dev.call(addressSBuRV4M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardMkbsids = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwpaZZdX = BigInt("752")
		const uint8Cnf7J = BigInt("542")
		const addressn5JrQEj = accounts[1]
		const uintOlRYYOi = BigInt("1261")
		const uint256zyGW4bV = await AavePoolRewardMkbsids.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Un1FUr = await AavePoolRewardMkbsids.notifyRewardAmount.call(uintwpaZZdX, {from: accounts[3]});
		const uint256eKRTdD8 = await AavePoolRewardMkbsids.withdraw.call(uint8Cnf7J, {from: accounts[1]});
		const addressl9k4af8 = await AavePoolRewardMkbsids.dev.call(addressn5JrQEj, {from: accounts[2]});
		const uint256FQt95KD = await AavePoolRewardMkbsids.withdraw.call(uintOlRYYOi, {from: accounts[1]});
	});
})