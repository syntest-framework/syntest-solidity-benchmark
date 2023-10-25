const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingbFVNh9i = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const boolofrxFjn = false
		const addressnIddI0M = accounts[2]
		const byteCuDiiRg = "0x0712040b0e1320150e090c170308051305071f0c131f03061a130e02030e1108"
		const byteJipWsK = "0x1c190d0f201005070e160d1e0c18160b1e0311191c08161204051615180a0218"
		const uintXn4Gwfa = BigInt("140")
		const uintQbPHSaz = BigInt("1446")
		const uintle92Bl1 = BigInt("1138")
		const uint256YKXAp0i = await LpStakingbFVNh9i.incomePerToken.call({from: accounts[4]});
		const booleeYfeWK = await LpStakingbFVNh9i.setEmergencyStop.call(boolofrxFjn, {from: accounts[2]});
		const uint256mxk2hJv = await LpStakingbFVNh9i.rewardEarned.call(addressnIddI0M, {from: accounts[0]});
		const uint256YDz2zgK = await LpStakingbFVNh9i.stakeWithPermit.call(uintle92Bl1, uintQbPHSaz, uintXn4Gwfa, byteJipWsK, byteCuDiiRg, {from: accounts[2]});
	});

	it('test for LpStaking', async () => {
		const LpStakingm31SMYB = await LpStaking.new({from: accounts[0]});
		const addresseFI2fhm = accounts[0]
		const bytevvCuJTP = "0x200a13120f0619050b17111c1b061017130e03131606170e1210050a1b180408"
		const bytekYNmpqm = "0x1513090e0a15060f06160f021404101b150d120a201a021c130e2019130f0709"
		const uintnEkdFo = BigInt("213")
		const uinttW9BcS0 = BigInt("1462")
		const uintq7qeAzK = BigInt("948")
		const addressY2umYJJ = accounts[1]
//		const addressENWlpiy = await LpStakingm31SMYB.updateIncome.call(addresseFI2fhm, {from: accounts[0]});
//		const uint256qEvtz10 = await LpStakingm31SMYB.stakeWithPermit.call(uintq7qeAzK, uinttW9BcS0, uintnEkdFo, bytekYNmpqm, bytevvCuJTP, {from: accounts[3]});
//		await LpStakingm31SMYB.nonEmergencyStop.call({from: accounts[0]});
//		const addressi3InN6d = await LpStakingm31SMYB.updateReward.call(addressY2umYJJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingm31SMYB.updateIncome.call(addresseFI2fhm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingpt7fDez = await LpStaking.new({from: accounts[1]});
		const addressrlC3lwM = accounts[2]
		const addressRfn8Tgt = "0x0000000000000000000000000000000000000001"
		const addressP3Nz6D4 = accounts[2]
		const addressUNUKSrE = accounts[0]
//		const uint256xBtyeMX = await LpStakingpt7fDez.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addresspLySE3C = await LpStakingpt7fDez.initialize.call(addressUNUKSrE, addressP3Nz6D4, addressRfn8Tgt, addressrlC3lwM, {from: accounts[2]});

		await expect(LpStakingpt7fDez.lastTimeRewardApplicable.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingEEGo5CX = await LpStaking.new({from: accounts[5]});
		const addressvypTQjd = accounts[5]
//		const uint256yS9qjj = await LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]});
//		const uint256RjoMpDn = await LpStakingEEGo5CX.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256ty5QzoM = await LpStakingEEGo5CX.rewardEarned.call(addressvypTQjd, {from: accounts[2]});

		await expect(LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingp5gE84g = await LpStaking.new({from: accounts[3]});
		const addresss1jxuqt = accounts[2]
		const byteOkJu9Tl = "0x0a00171c0e0c1a1c150711120904081b1a0f191212060304180a1f111e111a06"
		const bytexxver7P = "0x1a1201090d1f0a1f1a0d19131b061118161d07020c1a0d150f1e050c12031a1a"
		const uintrp2HJ9E = BigInt("170")
		const uintYgLAmC = BigInt("860")
		const uint3dstub = BigInt("612")
//		const addressFtmel7 = await LpStakingp5gE84g.transferOwnership.call(addresss1jxuqt, {from: accounts[1]});
//		await LpStakingp5gE84g.exit.call({from: accounts[0]});
//		const uint256NAIsByM = await LpStakingp5gE84g.stakeWithPermit.call(uint3dstub, uintYgLAmC, uintrp2HJ9E, bytexxver7P, byteOkJu9Tl, {from: accounts[3]});
//		await LpStakingp5gE84g.getReward.call({from: accounts[1]});
//		const uint256JW7aKfj = await LpStakingp5gE84g.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(LpStakingp5gE84g.transferOwnership.call(addresss1jxuqt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingKaItTL = await LpStaking.new({from: accounts[3]});
		const addressQXqYRrV = accounts[4]
		const addressLi9sdtS = accounts[3]
		const uintBlabQA = BigInt("1171")
		const boolypcSpur = true
//		const uint256MEW9Q0g = await LpStakingKaItTL.incomeEarned.call(addressQXqYRrV, {from: accounts[3]});
//		await LpStakingKaItTL.lpIncomeRateChanged.call({from: accounts[4]});
//		const uint256V2v1VH2 = await LpStakingKaItTL.lastTimeRewardApplicable.call({from: accounts[5]});
//		const addressdauJC1d = await LpStakingKaItTL.transferOwnership.call(addressLi9sdtS, {from: accounts[2]});
//		const uint256wuyFXRu = await LpStakingKaItTL.withdraw.call(uintBlabQA, {from: accounts[3]});
//		const boolLtOiHl = await LpStakingKaItTL.setEmergencyStop.call(boolypcSpur, {from: accounts[4]});

		await expect(LpStakingKaItTL.incomeEarned.call(addressQXqYRrV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingEEGo5CX = await LpStaking.new({from: accounts[5]});
		const uintgcsiFhC = BigInt("1860")
		const addressPNIyIcU = accounts[0]
		const bool3mgysG = false
		const addressfzPmVs = accounts[5]
//		const uint256hL3Bu92 = await LpStakingEEGo5CX.withdraw.call(uintgcsiFhC, {from: accounts[0]});
//		const uint256yS9qjj = await LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]});
//		await LpStakingEEGo5CX.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingEEGo5CX.lpIncomeRateChanged.call({from: accounts[4]});
//		const uint256RjoMpDn = await LpStakingEEGo5CX.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressw4KRNx6 = await LpStakingEEGo5CX.updateReward.call(addressPNIyIcU, {from: accounts[2]});
//		const boolQHp2IwM = await LpStakingEEGo5CX.setEmergencyStop.call(bool3mgysG, {from: accounts[1]});
//		const uint256ty5QzoM = await LpStakingEEGo5CX.rewardEarned.call(addressfzPmVs, {from: accounts[2]});

		await expect(LpStakingEEGo5CX.withdraw.call(uintgcsiFhC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDchJUWO = await LpStaking.new({from: accounts[4]});
		const uintOD5FBBI = BigInt("478")
		const addressp95qdx = accounts[4]
		const addressOiyXcSB = accounts[0]
		const addressESEgXZi = accounts[4]
		const addressd5AQFdu = accounts[4]
		const uint2566Jpgl9 = await LpStakingDchJUWO.weiToSatoshi.call(uintOD5FBBI, {from: accounts[2]});
//		const uint256NCcm7Xt = await LpStakingDchJUWO.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addresslH6zTjQ = await LpStakingDchJUWO.initialize.call(addressd5AQFdu, addressESEgXZi, addressOiyXcSB, addressp95qdx, {from: accounts[0]});
//		const uint256SuOF2lh = await LpStakingDchJUWO.incomePerToken.call({from: accounts[2]});

		assert.equal(uint2566Jpgl9, BigInt("0"))
		await expect(LpStakingDchJUWO.lastTimeRewardApplicable.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingpt7fDez = await LpStaking.new({from: accounts[1]});
		const addressWNnYr1n = accounts[1]
		const addressv2IuqGO = accounts[2]
		const addressDduns9 = "0x0000000000000000000000000000000000000001"
		const addressNxW8J7b = accounts[2]
		const addresscNyqqQY = accounts[0]
		const uintF4MR671 = BigInt("1606")
//		const uint256rhkjy7L = await LpStakingpt7fDez.getCurIncomeRate.call({from: accounts[0]});
//		const addressTB7EYx1 = await LpStakingpt7fDez.transferOwnership.call(addressWNnYr1n, {from: accounts[4]});
//		const addresspLySE3C = await LpStakingpt7fDez.initialize.call(addresscNyqqQY, addressNxW8J7b, addressDduns9, addressv2IuqGO, {from: accounts[2]});
//		const uint256Pe3PLI = await LpStakingpt7fDez.weiToSatoshi.call(uintF4MR671, {from: accounts[0]});

		await expect(LpStakingpt7fDez.getCurIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingEEGo5CX = await LpStaking.new({from: accounts[5]});
		const addressaXhPY9V = accounts[4]
		const uint256z6KtlhS = await LpStakingEEGo5CX.rewardEarned.call(addressaXhPY9V, {from: accounts[0]});
//		const uint256yS9qjj = await LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]});
//		const uint256RjoMpDn = await LpStakingEEGo5CX.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256z6KtlhS, BigInt("0"))
		await expect(LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingKyQZKv3 = await LpStaking.new({from: accounts[2]});
		const addressa4GqGPT = accounts[5]
		const address1TDneL = accounts[4]
		const addressyBQ1ir4 = accounts[3]
		const addressUauQUvT = accounts[0]
		const addressYM6wUNz = accounts[2]
		const addressiRlH62s = accounts[1]
		const addressBjlfNaj = accounts[5]
		const addressxqiaVeB = accounts[5]
		const addressWpuKufn = accounts[1]
		const bytet0A5Fbo = "0x11091b0a07031b04030e1e1e1d061919191d1e0009160f0b100e141213021e02"
		const bytedaIpl8L = "0x150b181e101302070b1e041315050e0b1a181a0a1e0f13101403111e1e071b0f"
		const uintFiAlF53 = BigInt("224")
		const uintgG6Bjek = BigInt("997")
		const uintfpGBM4 = BigInt("517")
		const addresslPcc3fL = await LpStakingKyQZKv3.initialize.call(addressUauQUvT, addressyBQ1ir4, address1TDneL, addressa4GqGPT, {from: accounts[3]});
		const addressUczKhJn = await LpStakingKyQZKv3.initialize.call(addressxqiaVeB, addressBjlfNaj, addressiRlH62s, addressYM6wUNz, {from: accounts[0]});
//		await LpStakingKyQZKv3.getIncome.call({from: accounts[1]});
//		const addressTiStb9U = await LpStakingKyQZKv3.transferOwnership.call(addressWpuKufn, {from: accounts[1]});
//		const uint256LceW2Ts = await LpStakingKyQZKv3.stakeWithPermit.call(uintfpGBM4, uintgG6Bjek, uintFiAlF53, bytedaIpl8L, bytet0A5Fbo, {from: accounts[3]});

		await expect(LpStakingKyQZKv3.getIncome.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingpt7fDez = await LpStaking.new({from: accounts[1]});
		const boolBEt1jw = true
//		await LpStakingpt7fDez.exit.call({from: accounts[1]});
//		const boolClAUPSq = await LpStakingpt7fDez.setEmergencyStop.call(boolBEt1jw, {from: accounts[3]});
//		const uint256rhkjy7L = await LpStakingpt7fDez.getCurIncomeRate.call({from: accounts[0]});

		await expect(LpStakingpt7fDez.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingEEGo5CX = await LpStaking.new({from: accounts[5]});
		const addressGkfQxy = accounts[2]
		const uint256evY26m = await LpStakingEEGo5CX.getUserAccumulatedWithdrawIncome.call(addressGkfQxy, {from: accounts[0]});
//		const uint256yS9qjj = await LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]});

		assert.equal(uint256evY26m, BigInt("0"))
		await expect(LpStakingEEGo5CX.incomePerToken.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})