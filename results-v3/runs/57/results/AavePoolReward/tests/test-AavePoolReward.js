const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardRweoKBn = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQLJOkQH = accounts[2]
		const uintZ0YxOII = BigInt("460")
		const uint9qyBLI = BigInt("513")
		const uint256dFoG504 = await AavePoolRewardRweoKBn.earned.call(addressQLJOkQH, {from: accounts[0]});
		await AavePoolRewardRweoKBn.exit.call({from: accounts[3]});
		const uint256qOtmgKE = await AavePoolRewardRweoKBn.notifyRewardAmount.call(uintZ0YxOII, {from: accounts[0]});
		const uint256AxnhflO = await AavePoolRewardRweoKBn.lastTimeRewardApplicable.call({from: accounts[3]});
		await AavePoolRewardRweoKBn.exit.call({from: accounts[4]});
		const uint256JNq5vO2 = await AavePoolRewardRweoKBn.withdraw.call(uint9qyBLI, {from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJXsh8ji = await AavePoolReward.new({from: accounts[2]});
		const addresstuPZl6n = accounts[4]
		await AavePoolRewardJXsh8ji.getReward.call({from: accounts[5]});
		const uint256yy2J8UD = await AavePoolRewardJXsh8ji.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256glIwgfr = await AavePoolRewardJXsh8ji.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256XWGQxDq = await AavePoolRewardJXsh8ji.earned.call(addresstuPZl6n, {from: accounts[1]});
		const uint256A9olsQ = await AavePoolRewardJXsh8ji.rewardPerToken.call({from: accounts[3]});

		await expect(AavePoolRewardJXsh8ji.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardsdmH0L = await AavePoolReward.new({from: accounts[4]});
		const addressRHa20xX = accounts[4]
		const uintNizh6Qb = BigInt("1576")
		const uintxTwEk2j = BigInt("1142")
		const uint256uiPbCew = await AavePoolRewardsdmH0L.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256rjgvho = await AavePoolRewardsdmH0L.earned.call(addressRHa20xX, {from: accounts[2]});
		const uint256aIq7SEb = await AavePoolRewardsdmH0L.notifyRewardAmount.call(uintNizh6Qb, {from: accounts[5]});
		const uint256xpr3Ikh = await AavePoolRewardsdmH0L.notifyRewardAmount.call(uintxTwEk2j, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256rjgvho, BigInt("0"))
		assert.equal(uint256uiPbCew, BigInt("0"))
		await expect(AavePoolRewardsdmH0L.notifyRewardAmount.call(uintNizh6Qb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardrRJPK2H = await AavePoolReward.new({from: accounts[1]});
		const addressZapq2B = accounts[0]
		const uinttZNsBhy = BigInt("2038")
		const addresskBuum2u = accounts[1]
		const addressrmmFtOW = await AavePoolRewardrRJPK2H.updateReward.call(addressZapq2B, {from: accounts[3]});
		const uint256JU8RKey = await AavePoolRewardrRJPK2H.stake.call(uinttZNsBhy, {from: "0x0000000000000000000000000000000000000001"});
		const addressUX2vXBw = await AavePoolRewardrRJPK2H.dev.call(addresskBuum2u, {from: accounts[3]});

		await expect(AavePoolRewardrRJPK2H.updateReward.call(addressZapq2B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewarddwW0yIB = await AavePoolReward.new({from: accounts[1]});
		const addressrwfjNQk = accounts[4]
		const addressef18ktA = accounts[3]
		const uint256OTJV4sB = await AavePoolRewarddwW0yIB.earned.call(addressrwfjNQk, {from: accounts[0]});
		const uint256cLbZGcF = await AavePoolRewarddwW0yIB.earned.call(addressef18ktA, {from: accounts[0]});
		await AavePoolRewarddwW0yIB.getReward.call({from: accounts[3]});
		await AavePoolRewarddwW0yIB.exit.call({from: accounts[4]});

		assert.equal(uint256OTJV4sB, BigInt("0"))
		assert.equal(uint256cLbZGcF, BigInt("0"))
		await expect(AavePoolRewarddwW0yIB.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardECXl48p = await AavePoolReward.new({from: accounts[4]});
		const addressXwjBvtO = accounts[3]
		const uintARrSgH = BigInt("1196")
		const addressOaHlDKT = await AavePoolRewardECXl48p.dev.call(addressXwjBvtO, {from: accounts[0]});
		const uint256wxhsO44 = await AavePoolRewardECXl48p.lastTimeRewardApplicable.call({from: accounts[1]});
		await AavePoolRewardECXl48p.exit.call({from: accounts[5]});
		await AavePoolRewardECXl48p.getReward.call({from: accounts[5]});
		const uint256lFR4Nyj = await AavePoolRewardECXl48p.notifyRewardAmount.call(uintARrSgH, {from: accounts[0]});

		await expect(AavePoolRewardECXl48p.dev.call(addressXwjBvtO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnvDl4BH = await AavePoolReward.new({from: accounts[3]});
		const uintzxhvA3A = BigInt("1270")
		const uint256o7Yigz = await AavePoolRewardnvDl4BH.withdraw.call(uintzxhvA3A, {from: accounts[1]});
		await AavePoolRewardnvDl4BH.exit.call({from: accounts[0]});

		await expect(AavePoolRewardnvDl4BH.withdraw.call(uintzxhvA3A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardMxWj9I2 = await AavePoolReward.new({from: accounts[0]});
		const uintvWg78Ms = BigInt("531")
		const addressSykNibW = accounts[4]
		const uintmjGhPEW = BigInt("102")
		const uinteP8ax7x = BigInt("124")
		const uintuYX0pAF = BigInt("970")
		await AavePoolRewardMxWj9I2.getReward.call({from: accounts[2]});
		const uint256zLdYoG8 = await AavePoolRewardMxWj9I2.stake.call(uintvWg78Ms, {from: accounts[1]});
		const uint256Js0Ajjo = await AavePoolRewardMxWj9I2.earned.call(addressSykNibW, {from: accounts[4]});
		const uint256OuSyLT1 = await AavePoolRewardMxWj9I2.stake.call(uintmjGhPEW, {from: accounts[3]});
		const uint256iOgdy6b = await AavePoolRewardMxWj9I2.notifyRewardAmount.call(uinteP8ax7x, {from: accounts[0]});
		const uint256NEEQMW7 = await AavePoolRewardMxWj9I2.withdraw.call(uintuYX0pAF, {from: accounts[0]});

		await expect(AavePoolRewardMxWj9I2.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnvDl4BH = await AavePoolReward.new({from: accounts[3]});
		const uintb7P3kTA = BigInt("847")
		const uintRXynV3c = BigInt("1959")
		const uintatO053E = BigInt("1271")
		const uint256lSvFTt6 = await AavePoolRewardnvDl4BH.notifyRewardAmount.call(uintb7P3kTA, {from: accounts[3]});
		const uint256jF4XQwr = await AavePoolRewardnvDl4BH.notifyRewardAmount.call(uintRXynV3c, {from: accounts[1]});
		const uint256o7Yigz = await AavePoolRewardnvDl4BH.withdraw.call(uintatO053E, {from: accounts[1]});

		await expect(AavePoolRewardnvDl4BH.notifyRewardAmount.call(uintRXynV3c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardtkVCEiP = await AavePoolReward.new({from: accounts[0]});
		const uintvPWxHHv = BigInt("1959")
		const addressaZeoBsn = accounts[1]
		const uint256qBTMWSe = await AavePoolRewardtkVCEiP.notifyRewardAmount.call(uintvPWxHHv, {from: accounts[0]});
		const uint256voLjLyh = await AavePoolRewardtkVCEiP.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256mQ89SdG = await AavePoolRewardtkVCEiP.lastTimeRewardApplicable.call({from: accounts[1]});
		const address0CNwfj = await AavePoolRewardtkVCEiP.dev.call(addressaZeoBsn, {from: accounts[0]});
		const uint256TCrrWCV = await AavePoolRewardtkVCEiP.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256TCrrWCV, BigInt("0"))
		assert.equal(uint256mQ89SdG, BigInt("0"))
		assert.equal(uint256voLjLyh, BigInt("0"))
	});
})