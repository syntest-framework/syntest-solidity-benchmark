const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressKfAPO04 = accounts[0]
		const addressJEranFA = accounts[2]
		const addressiVSr3R = accounts[0]
		const BACMARSLPTOKENPoolbp33GRS = await BACMARSLPTOKENPool.new(addressKfAPO04, addressJEranFA, addressiVSr3R, {from: accounts[3]});
		const uintLhHCnrX = BigInt("1990")
		const addressZ6xA4L4 = accounts[0]
		const uint256wEHYZis = await BACMARSLPTOKENPoolbp33GRS.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256gDac0qp = await BACMARSLPTOKENPoolbp33GRS.rewardPerToken.call({from: accounts[0]});
//		const uint256f4VX6k1 = await BACMARSLPTOKENPoolbp33GRS.notifyRewardAmount.call(uintLhHCnrX, {from: accounts[1]});
//		const uint256AcjzKiP = await BACMARSLPTOKENPoolbp33GRS.earned.call(addressZ6xA4L4, {from: accounts[0]});

		assert.equal(uint256gDac0qp, BigInt("0"))
		assert.equal(uint256wEHYZis, BigInt("0"))
		await expect(BACMARSLPTOKENPoolbp33GRS.notifyRewardAmount.call(uintLhHCnrX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringydlE2aI = "ZKmaDPa63YMWNVdslTNBgtzkBK4jqU2wAzlv1DZrW8kQyToGsQ"
		const stringarDj9wr = "j6mMYS8CQd7FIQztLkjPwBzOlxaG5QBQTrA6qfoCVkql89zTUdlLtLNEGuJ4SRLYBnyuowLlw86DkfMwN608RWQl7B9ikh"
		const uintExDM6qX = BigInt("157")
		const BACMARSLPTOKENPoolz0TuzD = await BACMARSLPTOKENPool.new(stringydlE2aI, stringarDj9wr, uintExDM6qX, {from: accounts[0]});
		const uintOmPgRd = BigInt("845")
		const uintr6E360G = BigInt("1638")
		await BACMARSLPTOKENPoolz0TuzD.exit.call({from: accounts[1]});
		const uint256hQBm0EZ = await BACMARSLPTOKENPoolz0TuzD.notifyRewardAmount.call(uintOmPgRd, {from: accounts[4]});
		const uint256TqePvA = await BACMARSLPTOKENPoolz0TuzD.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256OihDS1d = await BACMARSLPTOKENPoolz0TuzD.withdraw.call(uintr6E360G, {from: accounts[3]});
		await BACMARSLPTOKENPoolz0TuzD.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyOH5sM = "vufUqZgfXgCP9IrvIsJRb3ZWl1RsNy1x457FMK9v3OydKW6a6b8kJwJfzvJ4j3at09KhLfEQ3M7iztWB6FYK67bJIdIJRA3Tg"
		const stringXo5iJUH = "RZ0xAuQVQkLDB"
		const uintbf6pade = BigInt("220")
		const BACMARSLPTOKENPoolcUpIxzH = await BACMARSLPTOKENPool.new(stringyOH5sM, stringXo5iJUH, uintbf6pade, {from: accounts[4]});
		const addressBeM1RM9 = accounts[2]
		const uintnqAC5bZ = BigInt("569")
		const uint256sZFA7vK = await BACMARSLPTOKENPoolcUpIxzH.balanceOf.call(addressBeM1RM9, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolcUpIxzH.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eumzKHj = await BACMARSLPTOKENPoolcUpIxzH.withdraw.call(uintnqAC5bZ, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressckxT0sM = accounts[1]
		const addressLxSV1bZ = accounts[2]
		const addressTkp0ewn = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressckxT0sM, addressLxSV1bZ, addressTkp0ewn, {from: accounts[4]});
//		const uint8WRTWTKQ = await BACMARSLPTOKENPoolcL93lrN.decimals.call({from: accounts[3]});
//		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolcL93lrN.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxzq5DwH = accounts[5]
		const addressGRnHyY2 = accounts[1]
		const addressh3QF0Ag = accounts[5]
		const BACMARSLPTOKENPoolnWNxjIG = await BACMARSLPTOKENPool.new(addressxzq5DwH, addressGRnHyY2, addressh3QF0Ag, {from: accounts[2]});
		const addressIOhz61U = accounts[1]
		const address5MjBD1 = accounts[4]
		const uintC013BmM = BigInt("204")
//		await BACMARSLPTOKENPoolnWNxjIG.getReward.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolnWNxjIG.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressHzB8NH = await BACMARSLPTOKENPoolnWNxjIG.updateReward.call(addressIOhz61U, {from: accounts[1]});
//		const uint256jk5udC = await BACMARSLPTOKENPoolnWNxjIG.balanceOf.call(address5MjBD1, {from: accounts[0]});
//		const uint256tIWNaHF = await BACMARSLPTOKENPoolnWNxjIG.withdraw.call(uintC013BmM, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolnWNxjIG.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtQ1SvxU = "3A2fgEd4rFVOYvWVLy8yuYcxTnKWdpWCW5pnZ12kYruQhY0OvDep8BqPYdY9TUvb2L4aA1F5Tsbg2uNr6Jh"
		const stringBgr6MZS = "wSQiNbWhrOTVphmeFLy5Le7OFYUPIYSLeh5y4hFObL"
		const uintrIlwkZj = BigInt("206")
		const BACMARSLPTOKENPoolz9hpGMW = await BACMARSLPTOKENPool.new(stringtQ1SvxU, stringBgr6MZS, uintrIlwkZj, {from: accounts[2]});
		const uint8digOjKf = await BACMARSLPTOKENPoolz9hpGMW.decimals.call({from: accounts[0]});
		const uint256nY4vr8t = await BACMARSLPTOKENPoolz9hpGMW.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolz9hpGMW.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxZRF67T = "KJ1O1UweK9cngIIsh"
		const stringLWAf0z1 = "yJhMOa3Af"
		const uintMSUG9tm = BigInt("166")
		const BACMARSLPTOKENPoolpmnIaFb = await BACMARSLPTOKENPool.new(stringxZRF67T, stringLWAf0z1, uintMSUG9tm, {from: accounts[4]});
		const uintNdV7xAj = BigInt("1073")
		const uint256lNfKkit = await BACMARSLPTOKENPoolpmnIaFb.rewardPerToken.call({from: accounts[3]});
		const uint256UFLXntn = await BACMARSLPTOKENPoolpmnIaFb.withdraw.call(uintNdV7xAj, {from: accounts[3]});
		const uint256r2L9cIh = await BACMARSLPTOKENPoolpmnIaFb.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmFv7Tqk = "j9i1IeG6Mw1DqSo5w8bHo"
		const stringQrCLc15 = "1VgDRgsavVHytL3M9hkc2mlv"
		const uintAwXrnMn = BigInt("242")
		const BACMARSLPTOKENPoolmuEJtpN = await BACMARSLPTOKENPool.new(stringmFv7Tqk, stringQrCLc15, uintAwXrnMn, {from: accounts[2]});
		const uintluZnuc6 = BigInt("496")
		const bytepR6SvA3 = "0x18100d0e1001080f0e16130b1302010b1704000904151d1c1a180a1d0a1f0c08"
		const byteT2Kize4 = "0x1418051f1a08150f181b0d0712031512050a170d101d0f030b170219190c0112"
		const uintdL0O0k = BigInt("211")
		const uintEdcF49q = BigInt("1674")
		const uintEpZZxqL = BigInt("1297")
		const addresswFBYR6s = accounts[1]
		const uint256K0omCqW = await BACMARSLPTOKENPoolmuEJtpN.notifyRewardAmount.call(uintluZnuc6, {from: accounts[1]});
		const uint256DRWu91y = await BACMARSLPTOKENPoolmuEJtpN.stakeWithPermit.call(uintEpZZxqL, uintEdcF49q, uintdL0O0k, byteT2Kize4, bytepR6SvA3, {from: accounts[1]});
		const uint256P8o2LAj = await BACMARSLPTOKENPoolmuEJtpN.balanceOf.call(addresswFBYR6s, {from: accounts[2]});
		await BACMARSLPTOKENPoolmuEJtpN.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOpWxpfS = accounts[1]
		const addressguqpMeu = accounts[2]
		const addressm1ob3vC = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressOpWxpfS, addressguqpMeu, addressm1ob3vC, {from: accounts[4]});
		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});

		assert.equal(uint256Klf6EYZ, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address9je6C3 = accounts[0]
		const addressciMmYk = accounts[5]
		const addressvW8iz8x = accounts[3]
		const BACMARSLPTOKENPoolWLavSNH = await BACMARSLPTOKENPool.new(address9je6C3, addressciMmYk, addressvW8iz8x, {from: accounts[2]});
		const uintF84vAJV = BigInt("1919")
		const addressUy6Sm8Z = "0x0000000000000000000000000000000000000001"
		const uinthyLrpQh = BigInt("1253")
//		const uint256WuygEJ = await BACMARSLPTOKENPoolWLavSNH.withdraw.call(uintF84vAJV, {from: accounts[2]});
//		const addressGj6xixP = await BACMARSLPTOKENPoolWLavSNH.updateReward.call(addressUy6Sm8Z, {from: accounts[0]});
//		const uint256tyv8Tvl = await BACMARSLPTOKENPoolWLavSNH.withdraw.call(uinthyLrpQh, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolWLavSNH.withdraw.call(uintF84vAJV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscpypbzJ = accounts[1]
		const addressrkAQ4ZR = accounts[2]
		const addresscWcH7A = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addresscpypbzJ, addressrkAQ4ZR, addresscWcH7A, {from: accounts[4]});
		const addressxq2dVaM = accounts[3]
		const addressVRubwd = accounts[4]
		const uint256vczPIu7 = await BACMARSLPTOKENPoolcL93lrN.balanceOf.call(addressxq2dVaM, {from: accounts[2]});
//		const uint8cm8bIAe = await BACMARSLPTOKENPoolcL93lrN.decimals.call({from: accounts[1]});
//		const stringOVZ487w = await BACMARSLPTOKENPoolcL93lrN.name.call({from: accounts[4]});
//		const uint256vm0j07j = await BACMARSLPTOKENPoolcL93lrN.balanceOf.call(addressVRubwd, {from: accounts[1]});
//		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});

		assert.equal(uint256vczPIu7, BigInt("0"))
		await expect(BACMARSLPTOKENPoolcL93lrN.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUk27bzv = "IFdwWip34fg4bYPI628dQfbKUetwxouwpaoc2yl51Yd28WA38K982yIn5K0"
		const stringa2tFRCL = "nEH7bUrw0nA8JZBNChH30IDCW5uFgbVcCeZL5ug1nUEzkHkaPo5RWhCc7jdEvw3NCKWZHjKfT0kZTPFtT5fBaUWrztM"
		const uintYVYPpR5 = BigInt("71")
		const BACMARSLPTOKENPoolyKyeRjP = await BACMARSLPTOKENPool.new(stringUk27bzv, stringa2tFRCL, uintYVYPpR5, {from: accounts[0]});
		const uint256bCY7Ec9 = await BACMARSLPTOKENPoolyKyeRjP.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolyKyeRjP.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolyKyeRjP.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswFzn9Tq = accounts[1]
		const addressxwPH78t = accounts[2]
		const addressBNiR56 = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addresswFzn9Tq, addressxwPH78t, addressBNiR56, {from: accounts[4]});
		const addressij7Uq71 = accounts[3]
		const uint256jh491wZ = await BACMARSLPTOKENPoolcL93lrN.earned.call(addressij7Uq71, {from: accounts[2]});
		const uint256q7bBWHM = await BACMARSLPTOKENPoolcL93lrN.totalSupply.call({from: accounts[3]});
		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});

		assert.equal(uint256Klf6EYZ, BigInt("0"))
		assert.equal(uint256jh491wZ, BigInt("0"))
		assert.equal(uint256q7bBWHM, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTD8tFvA = "wlwUygjUjmLmjsrChUJ9l8qjkV03YmjFQVQvVGnlkxIhIyXHDjwSHB6PJgUgtfg"
		const stringhm0a2i3 = "QdbKePBVg7CNQwe6gMgkcFQ2tgPuftCf7nI"
		const uintZYdXhXB = BigInt("180")
		const BACMARSLPTOKENPoolwyDzSd = await BACMARSLPTOKENPool.new(stringTD8tFvA, stringhm0a2i3, uintZYdXhXB, {from: accounts[4]});
		const uintMK4gObi = BigInt("1059")
		const uintSyGLrMA = BigInt("57")
		const uint256AH5mMDE = await BACMARSLPTOKENPoolwyDzSd.stake.call(uintMK4gObi, {from: accounts[5]});
		const uint256iN9OoWP = await BACMARSLPTOKENPoolwyDzSd.notifyRewardAmount.call(uintSyGLrMA, {from: accounts[0]});
		const uint256646AGp = await BACMARSLPTOKENPoolwyDzSd.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kLfE68i = await BACMARSLPTOKENPoolwyDzSd.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSh76QJv = accounts[1]
		const addressUU7Sq6J = accounts[2]
		const addressabz5QIa = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressSh76QJv, addressUU7Sq6J, addressabz5QIa, {from: accounts[4]});
		const byteTLnvcAi = "0x16030b091811041a10190a1a0f1e170c1c1a121c18050d1816041b03170e0d09"
		const byteVzUYgE = "0x161b120c111314021e0e1e1807061a03200c01021e1e0f1f1f160c0b0806150e"
		const uintrVcYqNS = BigInt("232")
		const uintYuQMbJT = BigInt("1614")
		const uintAjjdbSJ = BigInt("163")
		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});
//		const uint256bAxEJiA = await BACMARSLPTOKENPoolcL93lrN.stakeWithPermit.call(uintAjjdbSJ, uintYuQMbJT, uintrVcYqNS, byteVzUYgE, byteTLnvcAi, {from: accounts[1]});

		assert.equal(uint256Klf6EYZ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolcL93lrN.stakeWithPermit.call(uintAjjdbSJ, uintYuQMbJT, uintrVcYqNS, byteVzUYgE, byteTLnvcAi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNgd4gOr = accounts[1]
		const addressKKRZM5 = accounts[2]
		const addressEYe6xBf = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressNgd4gOr, addressKKRZM5, addressEYe6xBf, {from: accounts[4]});
//		await BACMARSLPTOKENPoolcL93lrN.getReward.call({from: accounts[1]});
//		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolcL93lrN.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTKXO3lI = accounts[1]
		const addressuVMAWJ = accounts[2]
		const addressXeN2KWq = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressTKXO3lI, addressuVMAWJ, addressXeN2KWq, {from: accounts[4]});
		const uintyHIb7Q7 = BigInt("662")
//		const uint256WoXCFqI = await BACMARSLPTOKENPoolcL93lrN.notifyRewardAmount.call(uintyHIb7Q7, {from: accounts[1]});
//		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolcL93lrN.notifyRewardAmount.call(uintyHIb7Q7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFQ7RGVj = "oAnGsQVpv9DFrltxTErFDcxe92L83sfHkIkdIU8cLpR6er"
		const stringSLui8kq = "6Ho2o"
		const uintoQfkU8k = BigInt("139")
		const BACMARSLPTOKENPoolFsiNWev = await BACMARSLPTOKENPool.new(stringFQ7RGVj, stringSLui8kq, uintoQfkU8k, {from: accounts[0]});
		const addressOP0tA5B = accounts[4]
		const uint256yeYqqj = await BACMARSLPTOKENPoolFsiNWev.balanceOf.call(addressOP0tA5B, {from: accounts[3]});
		const uint256yNjIzKZ = await BACMARSLPTOKENPoolFsiNWev.getRewardForDuration.call({from: accounts[4]});
		const uint8YvtIOeM = await BACMARSLPTOKENPoolFsiNWev.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressL3cGtXE = accounts[1]
		const addressQVcD07k = accounts[2]
		const addressCzaWR1L = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressL3cGtXE, addressQVcD07k, addressCzaWR1L, {from: accounts[4]});
		const byteQYbfdru = "0x16030b091811041a10190a1a0f1e170c1c1a121c18050d1816041b03170e0d09"
		const byteiinT9Z = "0x161b120c111314021e0e1e1807061a03200c01021e1e0f1f1f160c0b0806150e"
		const uintRyApoU = BigInt("232")
		const uintUrSAuTb = BigInt("1614")
		const uintgCNhQA = BigInt("163")
		const uint256Klf6EYZ = await BACMARSLPTOKENPoolcL93lrN.getRewardForDuration.call({from: accounts[0]});
		const uint256poYrla = await BACMARSLPTOKENPoolcL93lrN.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256bAxEJiA = await BACMARSLPTOKENPoolcL93lrN.stakeWithPermit.call(uintgCNhQA, uintUrSAuTb, uintRyApoU, byteiinT9Z, byteQYbfdru, {from: accounts[1]});

		assert.equal(uint256Klf6EYZ, BigInt("0"))
		assert.equal(uint256poYrla, BigInt("0"))
		await expect(BACMARSLPTOKENPoolcL93lrN.stakeWithPermit.call(uintgCNhQA, uintUrSAuTb, uintRyApoU, byteiinT9Z, byteQYbfdru, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnY8IjOM = "KeKbJ34oPXQCqObqXRISteAFGjiI2DvNAFW7cRm3wN6ZRJxM"
		const stringxb4xQFY = "2MhgICwRF7mkefg4F8nhTt6FBkFdW5wQLmR6cmJMR2BkkScW1vA5d85TQ4NDrTtmFMs9W9gCNbfVytHpXxPdfB6PADXXnDiD"
		const uintBQ1DNML = BigInt("44")
		const BACMARSLPTOKENPoolEcVWHME = await BACMARSLPTOKENPool.new(stringnY8IjOM, stringxb4xQFY, uintBQ1DNML, {from: accounts[3]});
		const stringt0TZBsD = await BACMARSLPTOKENPoolEcVWHME.name.call({from: accounts[3]});
		const uint8IKvjVTK = await BACMARSLPTOKENPoolEcVWHME.decimals.call({from: accounts[1]});
		const uint256xNDVmhG = await BACMARSLPTOKENPoolEcVWHME.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressimHdEOB = accounts[1]
		const addressRZdr9ID = accounts[2]
		const addressNXQp1B = accounts[4]
		const BACMARSLPTOKENPoolcL93lrN = await BACMARSLPTOKENPool.new(addressimHdEOB, addressRZdr9ID, addressNXQp1B, {from: accounts[4]});
		const uintqV4jDR = BigInt("1285")
		const uint256KInkExK = await BACMARSLPTOKENPoolcL93lrN.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256U9GVcTN = await BACMARSLPTOKENPoolcL93lrN.stake.call(uintqV4jDR, {from: accounts[4]});
//		await BACMARSLPTOKENPoolcL93lrN.getReward.call({from: accounts[1]});

		assert.equal(uint256KInkExK, BigInt("0"))
		await expect(BACMARSLPTOKENPoolcL93lrN.stake.call(uintqV4jDR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresshwkEkGh = accounts[0]
		const addressTMz3848 = accounts[5]
		const addressC8mzFcC = accounts[3]
		const BACMARSLPTOKENPoolWLavSNH = await BACMARSLPTOKENPool.new(addresshwkEkGh, addressTMz3848, addressC8mzFcC, {from: accounts[2]});
		const uintrcCOIPM = BigInt("1960")
//		await BACMARSLPTOKENPoolWLavSNH.getReward.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolWLavSNH.getReward.call({from: accounts[2]});
//		const uint256I8CuZ8o = await BACMARSLPTOKENPoolWLavSNH.notifyRewardAmount.call(uintrcCOIPM, {from: accounts[3]});
//		const uint256RrFQP3I = await BACMARSLPTOKENPoolWLavSNH.totalSupply.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolWLavSNH.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXwVLWk = accounts[0]
		const addressLsw2Yd7 = accounts[5]
		const addressHXbKnyh = accounts[3]
		const BACMARSLPTOKENPoolWLavSNH = await BACMARSLPTOKENPool.new(addressXwVLWk, addressLsw2Yd7, addressHXbKnyh, {from: accounts[2]});
		const uintLAYJSd = BigInt("517")
//		const uint256xGaBkqO = await BACMARSLPTOKENPoolWLavSNH.stake.call(uintLAYJSd, {from: accounts[0]});
//		await BACMARSLPTOKENPoolWLavSNH.exit.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolWLavSNH.stake.call(uintLAYJSd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressy3xe28l = accounts[1]
		const addressUOVSztd = accounts[3]
		const addressGUiau1 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolfrWpfsF = await BACMARSLPTOKENPool.new(addressy3xe28l, addressUOVSztd, addressGUiau1, {from: "0x0000000000000000000000000000000000000001"});
		const uintlbWApE = BigInt("309")
		const byteNg25QL = "0x0c0c0e081208181d0c100206101f1918011201051d121b1802000c200e020310"
		const byteYAX2Nqy = "0x1a170513011a0419030d1f0d031b0c141e0a1515011219100e101e161c110007"
		const uintDQzmp4S = BigInt("221")
		const uintAsfFbaH = BigInt("469")
		const uintDDNEM30 = BigInt("1963")
		const uint256IpPiMf7 = await BACMARSLPTOKENPoolfrWpfsF.withdraw.call(uintlbWApE, {from: accounts[1]});
		await BACMARSLPTOKENPoolfrWpfsF.nonReentrant.call({from: accounts[1]});
		const uint2561PDiTS = await BACMARSLPTOKENPoolfrWpfsF.getRewardForDuration.call({from: accounts[4]});
		const uint256BADNDOB = await BACMARSLPTOKENPoolfrWpfsF.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ka9W6x = await BACMARSLPTOKENPoolfrWpfsF.stakeWithPermit.call(uintDDNEM30, uintAsfFbaH, uintDQzmp4S, byteYAX2Nqy, byteNg25QL, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNa2LdcA = "uzO2KqHBcidCS3FkvWB14Ox8W6hz"
		const stringqmN9KjF = "E5rOcBLtFv4F6nCeh9wv4Tp3TXggC32SH7rW6"
		const uintu5zviw = BigInt("155")
		const BACMARSLPTOKENPooljAShcay = await BACMARSLPTOKENPool.new(stringNa2LdcA, stringqmN9KjF, uintu5zviw, {from: accounts[3]});
		const uint256OBlwIvy = await BACMARSLPTOKENPooljAShcay.rewardPerToken.call({from: accounts[3]});
		const uint256kBAJPJS = await BACMARSLPTOKENPooljAShcay.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnMMkELT = "PwvVBagp32QLwHBtJNxgrkORn"
		const stringPjAd0ON = "gixj9Srh5XjPadLJnIGxiMBJE5PqcO7w7bVL4G7bVgjINUiO25es7jxiz7lrU1ARuAeZS7cZ4fdcmSFpgGFuNPgnR"
		const uintqByFYIQ = BigInt("122")
		const BACMARSLPTOKENPoolUtDB0H8 = await BACMARSLPTOKENPool.new(stringnMMkELT, stringPjAd0ON, uintqByFYIQ, {from: accounts[1]});
		const addressd0pSzQ1 = accounts[5]
		const uint8gz5aBL0 = await BACMARSLPTOKENPoolUtDB0H8.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolUtDB0H8.exit.call({from: accounts[4]});
		const uint256MNXnZoM = await BACMARSLPTOKENPoolUtDB0H8.balanceOf.call(addressd0pSzQ1, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfVKw3a = "F2RItU99r7E8E7EzxNqbAXOxsq6kzPHQXOG19o"
		const stringNLnSSRT = "Y4v9L"
		const uintA53K3Nb = BigInt("241")
		const BACMARSLPTOKENPoolnBJNi5A = await BACMARSLPTOKENPool.new(stringfVKw3a, stringNLnSSRT, uintA53K3Nb, {from: accounts[1]});
		const uintiFXYDF = BigInt("287")
		const addressRFMl1FA = accounts[0]
		const uint256SR1pjvt = await BACMARSLPTOKENPoolnBJNi5A.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolnBJNi5A.nonReentrant.call({from: accounts[2]});
		const uint256eMNb8aG = await BACMARSLPTOKENPoolnBJNi5A.withdraw.call(uintiFXYDF, {from: accounts[0]});
		const addressACw4D46 = await BACMARSLPTOKENPoolnBJNi5A.updateReward.call(addressRFMl1FA, {from: accounts[1]});
		const stringtiVqNW4 = await BACMARSLPTOKENPoolnBJNi5A.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpvJQPex = "OB5PJMt9ov1NnjpNwkbyHamRN4FmAkFJyNGfMpbKUxEL8CE01I"
		const stringNDzVLC7 = "hdztmeK9RxAmLqF"
		const uintiGhJR5Y = BigInt("13")
		const BACMARSLPTOKENPoolcJqqa85 = await BACMARSLPTOKENPool.new(stringpvJQPex, stringNDzVLC7, uintiGhJR5Y, {from: accounts[1]});
		await BACMARSLPTOKENPoolcJqqa85.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolcJqqa85.nonReentrant.call({from: accounts[3]});
		const uint256iIdZmY = await BACMARSLPTOKENPoolcJqqa85.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringawf12lK = "lmJoZJAbym3pvgIaOe6dP5iiMuFxavw4nk2pfFxsGtXzqSYj586HPHWGg1pGws72QFEJZLxC7iDki"
		const stringTJvG3MQ = "dw"
		const uintLgslTO2 = BigInt("159")
		const BACMARSLPTOKENPoolZgHPG4X = await BACMARSLPTOKENPool.new(stringawf12lK, stringTJvG3MQ, uintLgslTO2, {from: accounts[0]});
		await BACMARSLPTOKENPoolZgHPG4X.exit.call({from: accounts[3]});
		const uint256cqZX90i = await BACMARSLPTOKENPoolZgHPG4X.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBxJixDY = "Y6eoS4EoJEsDNagGER9mz2MRUJH6nmjmyWippEzfOrraCfpd9a2zLMMc9X52h9Jb8QIcL8sCERBJvwMmErcDeNSvwMW"
		const stringuGyo1iD = "GRoJ5uNJri4352KyIVWXYmb24iWuI2A4xJBIgmdQ3D2LMHzLqsGDsEamrD6Anud6UorXrJgYQwfZclqistJBhITuly3G3AV"
		const uints7wvRs = BigInt("166")
		const BACMARSLPTOKENPoolA2cjioP = await BACMARSLPTOKENPool.new(stringBxJixDY, stringuGyo1iD, uints7wvRs, {from: accounts[3]});
		const uintyXxXgG = BigInt("1666")
		await BACMARSLPTOKENPoolA2cjioP.exit.call({from: accounts[0]});
		const uint256ej0Tz37 = await BACMARSLPTOKENPoolA2cjioP.notifyRewardAmount.call(uintyXxXgG, {from: accounts[3]});
		await BACMARSLPTOKENPoolA2cjioP.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolA2cjioP.nonReentrant.call({from: accounts[3]});
		const uint8uWVvsvZ = await BACMARSLPTOKENPoolA2cjioP.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWznQ2p0 = "lFR8SwuWJhBKuw0A1ayEozsbyQE4bVJsUEz1Qs0xi6PlT7HYAmPvOm0f2"
		const stringOR4Dwf8 = "r2mduNyFscdbNQgBerIHHQGRtlOGSciGLoX"
		const uint8Itv1d = BigInt("5")
		const BACMARSLPTOKENPooltQnAGfu = await BACMARSLPTOKENPool.new(stringWznQ2p0, stringOR4Dwf8, uint8Itv1d, {from: accounts[4]});
		const uintMNlYn64 = BigInt("1426")
		const addressZwU0yYf = accounts[3]
		const addressQxSOgkT = accounts[1]
		const uint256fxwZsGJ = await BACMARSLPTOKENPooltQnAGfu.notifyRewardAmount.call(uintMNlYn64, {from: accounts[4]});
		const uint256trU1Ldr = await BACMARSLPTOKENPooltQnAGfu.earned.call(addressZwU0yYf, {from: accounts[2]});
		const uint256A4YVI6D = await BACMARSLPTOKENPooltQnAGfu.balanceOf.call(addressQxSOgkT, {from: accounts[4]});
		await BACMARSLPTOKENPooltQnAGfu.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringa15bUfA = "YlPGVgE7DNjI6Er78uOafnJQm9ybwvXxQp41b5zOpoumo9zEcPz"
		const stringpWfdJD = "tjKi9XYqvYQobr0jjujMXTWW"
		const uintOkoezGL = BigInt("32")
		const BACMARSLPTOKENPoolYUkDry = await BACMARSLPTOKENPool.new(stringa15bUfA, stringpWfdJD, uintOkoezGL, {from: accounts[4]});
		const uintwGeyn71 = BigInt("202")
		const uint256PM8dCLW = await BACMARSLPTOKENPoolYUkDry.stake.call(uintwGeyn71, {from: accounts[4]});
		await BACMARSLPTOKENPoolYUkDry.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrZqLGu6 = "QRm4IrGCcm7hzKIFBkwbfL3IIuc6oPJjKIZzd8"
		const stringsX1M6Z = "aGhFU7CnMvwqfKSJDsLrVwQLQLjcHQyrsuDbtg"
		const uint6Mx94x = BigInt("109")
		const BACMARSLPTOKENPoolsKTHPtk = await BACMARSLPTOKENPool.new(stringrZqLGu6, stringsX1M6Z, uint6Mx94x, {from: accounts[2]});
		const uintUcrTJkz = BigInt("43")
		const uint256sYcxxHF = await BACMARSLPTOKENPoolsKTHPtk.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolsKTHPtk.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256s6mMUnz = await BACMARSLPTOKENPoolsKTHPtk.withdraw.call(uintUcrTJkz, {from: "0x0000000000000000000000000000000000000001"});
		const uint8JXWZR61 = await BACMARSLPTOKENPoolsKTHPtk.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaqJpR0M = "8pzlVfLsY0hL525AFMqhx8x4VI3UrNT6Y2h31mSvM5eVz1STGYNOwAwNhIej3V4OOxYYogLrt0jDyzRwMOuhDVWL7Ss8"
		const stringQSXKXPv = "EkwfkRwD7zo8FcV06bNuSRXU9xjrI6vHiFUM"
		const uintY7QdOud = BigInt("113")
		const BACMARSLPTOKENPool5wXacj = await BACMARSLPTOKENPool.new(stringaqJpR0M, stringQSXKXPv, uintY7QdOud, {from: accounts[4]});
		const addressAyO95Bm = accounts[4]
		const uintKLymCP8 = BigInt("1821")
		const addressxmZwnYF = accounts[0]
		const addressXA37k9s = await BACMARSLPTOKENPool5wXacj.updateReward.call(addressAyO95Bm, {from: accounts[2]});
		const uint256tlQ9nKH = await BACMARSLPTOKENPool5wXacj.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gwNgS4 = await BACMARSLPTOKENPool5wXacj.withdraw.call(uintKLymCP8, {from: accounts[0]});
		const addressoTmCxau = await BACMARSLPTOKENPool5wXacj.updateReward.call(addressxmZwnYF, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlhWgiYg = "A4IYdw9PLh5mtSP5WW9MTErD1iR05G6MexfCMqtrySyBh3Uylrd5vDaaUnyNTFps"
		const stringMpZB8bX = "uTIDAbHTPrgHulNaTRR7R9og4dSp7zr6gKx3tdBknNKPhGFUaTvsAnrGwkvlsRGd17Cm91QPRgUHKelx8BmD"
		const uintqZhKRJB = BigInt("222")
		const BACMARSLPTOKENPoolHphM6f = await BACMARSLPTOKENPool.new(stringlhWgiYg, stringMpZB8bX, uintqZhKRJB, {from: accounts[3]});
		await BACMARSLPTOKENPoolHphM6f.nonReentrant.call({from: accounts[5]});
		const uint84GdgpA = await BACMARSLPTOKENPoolHphM6f.decimals.call({from: accounts[2]});
		const uint256Hka93X = await BACMARSLPTOKENPoolHphM6f.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUaNcmTa = "lYBYbMy2I8ksbRHFtxIhf1sOZGlk58m4trPltplODBOA42hRz614dkW8czNDK3J1tMbEC8OzzjwoVSn"
		const stringea4WkPu = "uBJhgEHejAxbDuP815bEFOc5pIlGgHpQmHAPMt9JPm3F7Wy9kRLKsDLNR4DSs4YwM9T9m6mp992Uov8WXS"
		const uintpqXqqP0 = BigInt("191")
		const BACMARSLPTOKENPoolL2wCZY = await BACMARSLPTOKENPool.new(stringUaNcmTa, stringea4WkPu, uintpqXqqP0, {from: accounts[0]});
		const addressa9wpru = accounts[1]
		const byteBoKDfbX = "0x1716130d0e15120b0602120114131f1c1a1a0a0310121e011c011e170e110718"
		const bytekmSNcv = "0x0a000d03051c0c121f0408020517031d0002140f081e1414140a0715001b0711"
		const uintDm1Vg2X = BigInt("157")
		const uintO6tKU5N = BigInt("435")
		const uintXdISkTv = BigInt("1340")
		const addresstFbSOXc = accounts[2]
		const uint256KAosTHL = await BACMARSLPTOKENPoolL2wCZY.balanceOf.call(addressa9wpru, {from: accounts[1]});
		await BACMARSLPTOKENPoolL2wCZY.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SouTSPP = await BACMARSLPTOKENPoolL2wCZY.stakeWithPermit.call(uintXdISkTv, uintO6tKU5N, uintDm1Vg2X, bytekmSNcv, byteBoKDfbX, {from: accounts[3]});
		const uint256cTmylKN = await BACMARSLPTOKENPoolL2wCZY.rewardPerToken.call({from: accounts[4]});
		const uint256C1NUxFH = await BACMARSLPTOKENPoolL2wCZY.balanceOf.call(addresstFbSOXc, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYGWV60E = "tJTOpwbN1n3hGBJA3"
		const stringyTT9EXL = "TO6IiByPF8U2fHWi6DLnpR7DsY2x8ONPhbuC1QShwSpwQbEbIooNh2BxvjiVahQRrjcAQUi6F"
		const uintYItwSf2 = BigInt("191")
		const BACMARSLPTOKENPoolIg3uIp = await BACMARSLPTOKENPool.new(stringYGWV60E, stringyTT9EXL, uintYItwSf2, {from: accounts[2]});
		const stringjdpkkEs = await BACMARSLPTOKENPoolIg3uIp.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolIg3uIp.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256c6rzlDp = await BACMARSLPTOKENPoolIg3uIp.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlRpTtDT = "D52uf5ONHJl1V"
		const stringgSgwq0 = "wQl"
		const uintxcMe4mJ = BigInt("87")
		const BACMARSLPTOKENPoolFl3zU2r = await BACMARSLPTOKENPool.new(stringlRpTtDT, stringgSgwq0, uintxcMe4mJ, {from: accounts[2]});
		const uintj4uifyN = BigInt("1304")
		const byteE8eQEyT = "0x0f200c10051516020f190e161b11091612150407130711050904181b04080d0d"
		const bytelSZL5Hp = "0x07021402120c080c02160b011f0518140a18041f1317171e130901050d161f11"
		const uintfH1MW2H = BigInt("93")
		const uintuIsn1Vj = BigInt("1958")
		const uintqPLgXA = BigInt("1011")
		const uint256OqBE9hv = await BACMARSLPTOKENPoolFl3zU2r.stake.call(uintj4uifyN, {from: accounts[4]});
		await BACMARSLPTOKENPoolFl3zU2r.getReward.call({from: accounts[3]});
		const uint256sShIN6H = await BACMARSLPTOKENPoolFl3zU2r.stakeWithPermit.call(uintqPLgXA, uintuIsn1Vj, uintfH1MW2H, bytelSZL5Hp, byteE8eQEyT, {from: accounts[4]});
		const uint256Ftck2mf = await BACMARSLPTOKENPoolFl3zU2r.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNdlGxAZ = "4a"
		const stringUaJcazy = "Ti4JnCn7AIfeDYsEzA0P3Afzk5ugzGAOjAi4BrrDUvkgvWSYPKtcXR9TQxK"
		const uintMOkoKil = BigInt("165")
		const BACMARSLPTOKENPooldRgal6j = await BACMARSLPTOKENPool.new(stringNdlGxAZ, stringUaJcazy, uintMOkoKil, {from: accounts[2]});
		const addressSBVzodm = accounts[2]
		await BACMARSLPTOKENPooldRgal6j.exit.call({from: accounts[3]});
		const uint256EqHC730 = await BACMARSLPTOKENPooldRgal6j.earned.call(addressSBVzodm, {from: accounts[4]});
		const uint256Lln9rcp = await BACMARSLPTOKENPooldRgal6j.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCqQbg6O = "N8PPGNMY2YmkPL3gxYTh4nbum3ejb87iMmmkwcJE6hI1fzs2u"
		const stringTvE0f97 = "vQMRPcA1QT3CkufgQTx2Bgi7hCxIw5q7Lwt4xdNvoNYdA8LfBVlEEdnf3u1OlKn9aHDF1IWerQD6MIXbEhtUd"
		const uintKCM10Yl = BigInt("26")
		const BACMARSLPTOKENPoolDTvTFi = await BACMARSLPTOKENPool.new(stringCqQbg6O, stringTvE0f97, uintKCM10Yl, {from: accounts[3]});
		const addressrb8Hjb0 = accounts[2]
		const addresssxnqkf8 = await BACMARSLPTOKENPoolDTvTFi.updateReward.call(addressrb8Hjb0, {from: accounts[4]});
		await BACMARSLPTOKENPoolDTvTFi.nonReentrant.call({from: accounts[1]});
		const uint256nDE29Cf = await BACMARSLPTOKENPoolDTvTFi.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiEE1q57 = "YJ7"
		const stringtKbD5fs = "tSlnQ9"
		const uintatwdIN6 = BigInt("16")
		const BACMARSLPTOKENPoolJxirGCA = await BACMARSLPTOKENPool.new(stringiEE1q57, stringtKbD5fs, uintatwdIN6, {from: accounts[0]});
		const uint256oklHH7c = await BACMARSLPTOKENPoolJxirGCA.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolJxirGCA.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrauvOMo = "ttqomzXLTSKjrytnXaDxQIBhv9E"
		const stringkx716IS = "u1unFvYMoJxFAzkJl5v5dvhQ7dHSTIjYXh5fNBCP4LGQFPfDv5g3nNSa9Jbg6aXJRyF"
		const uintlmaJEDK = BigInt("39")
		const BACMARSLPTOKENPoolZGfbzI = await BACMARSLPTOKENPool.new(stringrauvOMo, stringkx716IS, uintlmaJEDK, {from: accounts[1]});
		const uintBf8ML62 = BigInt("742")
		await BACMARSLPTOKENPoolZGfbzI.exit.call({from: accounts[1]});
		const stringgWP51XW = await BACMARSLPTOKENPoolZGfbzI.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZGfbzI.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256vLvIaSk = await BACMARSLPTOKENPoolZGfbzI.withdraw.call(uintBf8ML62, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringINpd2H = "rQtbMeJTM3cBrbmbVNkJt6wrQaC2Tb2NsN"
		const stringyU3dQpr = "1Q2N28InYFyOGgio34CGmnq1o0biznvkolIJC2lP8nAAsBYDKuELvrHC9OyCs"
		const uintdWrsOFO = BigInt("80")
		const BACMARSLPTOKENPoolqGDUwWa = await BACMARSLPTOKENPool.new(stringINpd2H, stringyU3dQpr, uintdWrsOFO, {from: accounts[4]});
		const uintKNlYOIS = BigInt("563")
		const address7sgVFG = accounts[1]
		const uintVwbX2D7 = BigInt("842")
		const uintjiL3bKs = BigInt("1949")
		const uintpfhlGLu = BigInt("2004")
		const uint256MuWuAJO = await BACMARSLPTOKENPoolqGDUwWa.notifyRewardAmount.call(uintKNlYOIS, {from: accounts[4]});
		const addressob6ALv = await BACMARSLPTOKENPoolqGDUwWa.updateReward.call(address7sgVFG, {from: accounts[1]});
		const uint256WZ5tOc = await BACMARSLPTOKENPoolqGDUwWa.stake.call(uintVwbX2D7, {from: accounts[4]});
		const uint256J3yoWBN = await BACMARSLPTOKENPoolqGDUwWa.stake.call(uintjiL3bKs, {from: accounts[4]});
		const uint256znM2bBl = await BACMARSLPTOKENPoolqGDUwWa.stake.call(uintpfhlGLu, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringByQVKq = "et1I9PE9m6tuh4I8VfsDxuHzYoCu9CtqKxRxzhUc6fKOvxQXtKsTOUXkdJjLPb8p37OE"
		const stringCIVA3Mu = "nJsfx4styiu36Y9dnWUBPryC8Y8saSR19hF5rRJ79Dbq"
		const uintf42wbuP = BigInt("236")
		const BACMARSLPTOKENPoolccV52qX = await BACMARSLPTOKENPool.new(stringByQVKq, stringCIVA3Mu, uintf42wbuP, {from: accounts[2]});
		const uintexnQQVO = BigInt("870")
		const uintvFwjjJ = BigInt("810")
		const uint256kAhHpwu = await BACMARSLPTOKENPoolccV52qX.getRewardForDuration.call({from: accounts[1]});
		const uint256nqEplpE = await BACMARSLPTOKENPoolccV52qX.withdraw.call(uintexnQQVO, {from: accounts[3]});
		const uint256YH24egv = await BACMARSLPTOKENPoolccV52qX.notifyRewardAmount.call(uintvFwjjJ, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBGotBvY = "g"
		const stringirdqiFd = "iTzBWJUta5Y63P4rpxc4LWBC6SxRIQ48"
		const uinto94u4If = BigInt("146")
		const BACMARSLPTOKENPoolBtIBo4g = await BACMARSLPTOKENPool.new(stringBGotBvY, stringirdqiFd, uinto94u4If, {from: accounts[1]});
		const addressYmJV2Q = accounts[2]
		const uintC3fbGvz = BigInt("1046")
		const uintbRWcEkH = BigInt("1501")
		const addressTIimyT = accounts[2]
		const uint256YlKXTu1 = await BACMARSLPTOKENPoolBtIBo4g.getRewardForDuration.call({from: accounts[3]});
		const uint256lC0OZUW = await BACMARSLPTOKENPoolBtIBo4g.balanceOf.call(addressYmJV2Q, {from: accounts[4]});
		const uint256EMnouG7 = await BACMARSLPTOKENPoolBtIBo4g.withdraw.call(uintC3fbGvz, {from: accounts[1]});
		const uint256Pn7dbhr = await BACMARSLPTOKENPoolBtIBo4g.stake.call(uintbRWcEkH, {from: accounts[0]});
		await BACMARSLPTOKENPoolBtIBo4g.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jhCROKX = await BACMARSLPTOKENPoolBtIBo4g.earned.call(addressTIimyT, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHKABMiR = "APLzPHrATPoDnfEdWh0RJA7s4eSaS3eJ7HS9qj4LumJNlTkpXWiA4qpfVaiHCfU2Lrr8e8o4bX1"
		const string04a3hg = "cngUmTyEYEIJoVglb2iMq6XmzfToYE0zutzvayhzVbKw"
		const uintjCuboLs = BigInt("27")
		const BACMARSLPTOKENPoolyRjbAr3 = await BACMARSLPTOKENPool.new(stringHKABMiR, string04a3hg, uintjCuboLs, {from: accounts[2]});
		const uintePh4oIc = BigInt("315")
		const byteXJCwnj8 = "0x150f0500151a1f070c02000c16151c1319071f1116041e1f0d0506150b1d1619"
		const byteQJ5tHJ0 = "0x001b06190903121f120c090a04040c0209041d14131c021c091812070b051816"
		const uintGMWSPg = BigInt("234")
		const uintVliWNS = BigInt("968")
		const uintXlm1sOp = BigInt("1620")
		const uintdTMpM1 = BigInt("873")
		const addressanj7HR8 = accounts[1]
		const uint256lYXrk86 = await BACMARSLPTOKENPoolyRjbAr3.notifyRewardAmount.call(uintePh4oIc, {from: accounts[4]});
		const stringtcmmgmL = await BACMARSLPTOKENPoolyRjbAr3.symbol.call({from: accounts[5]});
		const uint256iEsuyA3 = await BACMARSLPTOKENPoolyRjbAr3.stakeWithPermit.call(uintXlm1sOp, uintVliWNS, uintGMWSPg, byteQJ5tHJ0, byteXJCwnj8, {from: accounts[5]});
		const uint2568RRfEq = await BACMARSLPTOKENPoolyRjbAr3.notifyRewardAmount.call(uintdTMpM1, {from: accounts[4]});
		const uint256dbnGHHJ = await BACMARSLPTOKENPoolyRjbAr3.balanceOf.call(addressanj7HR8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringghJ6lvn = "DTSvaCAgxhLLPYM6psy"
		const stringfZzwdPg = "FkgoZoxemaOYoOnA3FWWfgXcQ16Tej6O3DPN4k18JJficy4s"
		const uintibrt5C8 = BigInt("67")
		const BACMARSLPTOKENPooladkGSkX = await BACMARSLPTOKENPool.new(stringghJ6lvn, stringfZzwdPg, uintibrt5C8, {from: "0x0000000000000000000000000000000000000001"});
		const addressct05Cz8 = accounts[1]
		await BACMARSLPTOKENPooladkGSkX.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPooladkGSkX.exit.call({from: accounts[5]});
		const addressBzGg371 = await BACMARSLPTOKENPooladkGSkX.updateReward.call(addressct05Cz8, {from: accounts[0]});
		const uint256KMYBzb = await BACMARSLPTOKENPooladkGSkX.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcn9QK2O = "D12zkOnBO3y6MkaNZxGrFX15wPzAmvgEWLwE29CfL9VTU1Z41wHvtxhICb6weBd8AnjLt46E3UovzA4KX"
		const stringjWfTrf = "49o3bY9g3GR9TEUWM249cpdvDdSjcc1c6ZO5Hrk3U"
		const uintTlQe37E = BigInt("237")
		const BACMARSLPTOKENPoolni8mLtX = await BACMARSLPTOKENPool.new(stringcn9QK2O, stringjWfTrf, uintTlQe37E, {from: accounts[4]});
		const addressBgP5gZh = accounts[1]
		const uint256nzpOjaV = await BACMARSLPTOKENPoolni8mLtX.rewardPerToken.call({from: accounts[4]});
		const uint256JDUxCiw = await BACMARSLPTOKENPoolni8mLtX.getRewardForDuration.call({from: accounts[4]});
		const uint256oyXcJAF = await BACMARSLPTOKENPoolni8mLtX.getRewardForDuration.call({from: accounts[1]});
		const uint256CD351tp = await BACMARSLPTOKENPoolni8mLtX.earned.call(addressBgP5gZh, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringo7UWg2x = "uYGr5koXfepc55ZIKqOmgexI2J3mMN3ds76nWTE3S66KLkX6cDiIauC75raOfNd"
		const stringf0ulmZP = "HZUIxkqEYEJGcS1n"
		const uintF5E1Cry = BigInt("30")
		const BACMARSLPTOKENPoolaWCjpSP = await BACMARSLPTOKENPool.new(stringo7UWg2x, stringf0ulmZP, uintF5E1Cry, {from: accounts[0]});
		const addresspRp4are = accounts[0]
		const addressOsfpPnd = accounts[1]
		const uint256krz6Fp = await BACMARSLPTOKENPoolaWCjpSP.balanceOf.call(addresspRp4are, {from: accounts[2]});
		await BACMARSLPTOKENPoolaWCjpSP.nonReentrant.call({from: accounts[0]});
		const uint256XWENNIy = await BACMARSLPTOKENPoolaWCjpSP.balanceOf.call(addressOsfpPnd, {from: accounts[5]});
		await BACMARSLPTOKENPoolaWCjpSP.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmUf1mlx = "CFmxR8USMIpZrJi2p5Puo"
		const stringLGvLUeq = "GHJ1YLjdXYCALUqTmGHbbJGgZXaapluPmxQxLdDLmKeM79b6sTh1Bwi7GXSxPOv"
		const uintaVPa6Bd = BigInt("238")
		const BACMARSLPTOKENPoolPFaYJ1r = await BACMARSLPTOKENPool.new(stringmUf1mlx, stringLGvLUeq, uintaVPa6Bd, {from: "0x0000000000000000000000000000000000000001"});
		const bytexvaDxnf = "0x11031e0a190f1f130e120e1f071f0d0c17060d0e0b060e0205181214070a0e1a"
		const byterwMuPVe = "0x051c021e1e0f030c0d0d010605120219070c2007021420000114181f0f131400"
		const uintB2o27EJ = BigInt("124")
		const uintxB6DAM = BigInt("611")
		const uintzFMy9jk = BigInt("671")
		const addresstHEZmfD = accounts[3]
		const uint256wsfmKP = await BACMARSLPTOKENPoolPFaYJ1r.stakeWithPermit.call(uintzFMy9jk, uintxB6DAM, uintB2o27EJ, byterwMuPVe, bytexvaDxnf, {from: accounts[5]});
		const uint256bSxKzoy = await BACMARSLPTOKENPoolPFaYJ1r.earned.call(addresstHEZmfD, {from: accounts[3]});
		await BACMARSLPTOKENPoolPFaYJ1r.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLBuYHnm = "DnuSsWNpS129ap0bpJiya7aKqLhcfsVsWVBjXWLtWqkWi35725CgwhRODAeVPbh3VU8SWDQJHRDMj2bow6rD"
		const stringpog00lA = "jhska1brTNth12Rtb2HYsvCncGgKM9WqpubCJqfGfnR4uItFBIAW8Sz1LDoIIP"
		const uintMXxkjSk = BigInt("74")
		const BACMARSLPTOKENPoolEr1FsAA = await BACMARSLPTOKENPool.new(stringLBuYHnm, stringpog00lA, uintMXxkjSk, {from: accounts[2]});
		const bytef2AHrq9 = "0x19141b0e131d12080c060b0d1d140c171701020209080c181e0f0d161217121e"
		const bytebwChOqS = "0x181e010c000f180d0a0f04121d09180a1816101a151f021401081b1e1d1e0b0e"
		const uintgJvPiMw = BigInt("76")
		const uintJO1Hwp0 = BigInt("1720")
		const uintIOanPZ4 = BigInt("2")
		const addressucSdKD5 = accounts[2]
		const uint256t9L4njB = await BACMARSLPTOKENPoolEr1FsAA.stakeWithPermit.call(uintIOanPZ4, uintJO1Hwp0, uintgJvPiMw, bytebwChOqS, bytef2AHrq9, {from: accounts[5]});
		const addressXzfD8FM = await BACMARSLPTOKENPoolEr1FsAA.updateReward.call(addressucSdKD5, {from: accounts[3]});
		await BACMARSLPTOKENPoolEr1FsAA.onlyRewardsDistribution.call({from: accounts[5]});
		await BACMARSLPTOKENPoolEr1FsAA.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGwmq3Fz = "wB"
		const stringolRFROm = "DJq0dzEoP3AvR8EG4XVpGpJrYstRiYoOs10IVgW95QYtEPUr1IGqnInLNkMNnDI1zj2rzPIT7CFF1fYo"
		const uintelVmarY = BigInt("94")
		const BACMARSLPTOKENPoollg665Z = await BACMARSLPTOKENPool.new(stringGwmq3Fz, stringolRFROm, uintelVmarY, {from: accounts[2]});
		const addressPHVdJjE = accounts[4]
		const addressnLxGNNV = accounts[3]
		await BACMARSLPTOKENPoollg665Z.getReward.call({from: accounts[0]});
		const uint256h03wOri = await BACMARSLPTOKENPoollg665Z.earned.call(addressPHVdJjE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UjpWowC = await BACMARSLPTOKENPoollg665Z.earned.call(addressnLxGNNV, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiNLjWx4 = "i2KS7sKZqt893J1zzVnPees3LtDT6Gj8HWxxAryPyMwiCJbQmIpmzrXNvRPsGoqvc4wM7jslOV7I9U2a7EA"
		const stringt91GUfM = "zOZppJTwnx3oHrYu7Uo"
		const uintNHSST4F = BigInt("175")
		const BACMARSLPTOKENPoolDBpZ1f8 = await BACMARSLPTOKENPool.new(stringiNLjWx4, stringt91GUfM, uintNHSST4F, {from: accounts[2]});
		const uint2567VKog2 = await BACMARSLPTOKENPoolDBpZ1f8.totalSupply.call({from: accounts[0]});
		const uint256xwv0mQL = await BACMARSLPTOKENPoolDBpZ1f8.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqFEL6fl = "PpxwB0r0EKbH4YAYl1JlRRdU82fjD1YpSf"
		const stringCtXZAsb = "dqNyVeGxaquMrsCu6cL8Fn7P2vTKrl5p4FCBlNtLvlH562FhoUTLJzFYrHk"
		const uintN59bLGf = BigInt("196")
		const BACMARSLPTOKENPoolnyk1wsS = await BACMARSLPTOKENPool.new(stringqFEL6fl, stringCtXZAsb, uintN59bLGf, {from: accounts[4]});
		const uintvhMRZV1 = BigInt("855")
		const uintF2PdE3m = BigInt("464")
		const uint256gpKX0jU = await BACMARSLPTOKENPoolnyk1wsS.withdraw.call(uintvhMRZV1, {from: accounts[2]});
		const uint256tQZfDqv = await BACMARSLPTOKENPoolnyk1wsS.stake.call(uintF2PdE3m, {from: accounts[3]});
		await BACMARSLPTOKENPoolnyk1wsS.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdNiLhDX = "VqsVqNq"
		const stringcj3Ck10 = "2fcfj"
		const uintsfuJag0 = BigInt("158")
		const BACMARSLPTOKENPoolJuuDh4s = await BACMARSLPTOKENPool.new(stringdNiLhDX, stringcj3Ck10, uintsfuJag0, {from: accounts[1]});
		const uintullDmp8 = BigInt("11")
		const uint1CTMdp = BigInt("1511")
		await BACMARSLPTOKENPoolJuuDh4s.nonReentrant.call({from: accounts[3]});
		const uint256zdZ5d3l = await BACMARSLPTOKENPoolJuuDh4s.withdraw.call(uintullDmp8, {from: accounts[2]});
		await BACMARSLPTOKENPoolJuuDh4s.getReward.call({from: accounts[1]});
		const stringZaLzC93 = await BACMARSLPTOKENPoolJuuDh4s.name.call({from: accounts[1]});
		const uint256ODfIkl = await BACMARSLPTOKENPoolJuuDh4s.withdraw.call(uint1CTMdp, {from: accounts[0]});
		const stringrVHQVuq = await BACMARSLPTOKENPoolJuuDh4s.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiAikrvD = "UTDDKBhu6PkxyUNG17oBC6C"
		const stringOCpjOIF = "7lm0ESrFG9gGPncgQ5UlIop"
		const uintQDQXYPO = BigInt("125")
		const BACMARSLPTOKENPoolgmhp3nj = await BACMARSLPTOKENPool.new(stringiAikrvD, stringOCpjOIF, uintQDQXYPO, {from: accounts[4]});
		const addressH4vnOI8 = accounts[0]
		const stringbVZ1IyG = await BACMARSLPTOKENPoolgmhp3nj.name.call({from: accounts[3]});
		const addresslHjeMhd = await BACMARSLPTOKENPoolgmhp3nj.updateReward.call(addressH4vnOI8, {from: accounts[0]});
		const uint256GHaiN0U = await BACMARSLPTOKENPoolgmhp3nj.rewardPerToken.call({from: accounts[3]});
		const uint256E0W0NQ = await BACMARSLPTOKENPoolgmhp3nj.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolgmhp3nj.exit.call({from: accounts[2]});
		const uint256Wsgkt6x = await BACMARSLPTOKENPoolgmhp3nj.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmA5HDGM = "2O66YSPGhr1ufUpwk5mVZbR7r2w6MlC3CP0qL7t08iNB0TU5oT1WOsx3VTodt1fGuMFnDJGOWCRTCQ54KIF"
		const stringN8Mh74J = "eZVVvjEQRuSdpVQjqFvOvmTDBdSwUdGWi5IhU8l7NXQEpcAOZBKDniy9fGJ8BkDs2f6v5o7E"
		const uintdMDu0lj = BigInt("138")
		const BACMARSLPTOKENPoolD6BPIPA = await BACMARSLPTOKENPool.new(stringmA5HDGM, stringN8Mh74J, uintdMDu0lj, {from: accounts[0]});
		const addresshvYw10l = accounts[2]
		const uint256tpG1TDq = await BACMARSLPTOKENPoolD6BPIPA.balanceOf.call(addresshvYw10l, {from: accounts[4]});
		const uint256L5Lz6Sp = await BACMARSLPTOKENPoolD6BPIPA.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});
})