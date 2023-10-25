const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakinglFR3hpl = await LpStaking.new({from: accounts[0]});
		const addressqTKtJp = accounts[0]
		const addresstkAFCtW = accounts[4]
		const addressk3CFkU = accounts[4]
		const addressqzS2Ecg = accounts[3]
		const addressOGfMmMv = accounts[0]
		const addressqnGweny = await LpStakinglFR3hpl.initialize.call(addressqzS2Ecg, addressk3CFkU, addresstkAFCtW, addressqTKtJp, {from: accounts[4]});
		const uint256drLggoO = await LpStakinglFR3hpl.rewardEarned.call(addressOGfMmMv, {from: accounts[5]});
//		await LpStakinglFR3hpl.nonEmergencyStop.call({from: accounts[2]});
//		await LpStakinglFR3hpl.getReward.call({from: accounts[5]});
//		const uint256edPZ766 = await LpStakinglFR3hpl.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256drLggoO, BigInt("0"))
		await expect(LpStakinglFR3hpl.nonEmergencyStop.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingkvl1NKk = await LpStaking.new({from: accounts[3]});
//		await LpStakingkvl1NKk.exit.call({from: accounts[3]});
//		await LpStakingkvl1NKk.nonEmergencyStop.call({from: accounts[0]});
//		const uint256UGvbgAl = await LpStakingkvl1NKk.incomePerToken.call({from: accounts[3]});
//		await LpStakingkvl1NKk.nonEmergencyStop.call({from: accounts[1]});
//		await LpStakingkvl1NKk.getReward.call({from: accounts[4]});

		await expect(LpStakingkvl1NKk.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingCo8qJH = await LpStaking.new({from: accounts[2]});
		const uintnRPHcZ6 = BigInt("756")
		const addressN1KIDFU = accounts[0]
		const byteTaPfv5J = "0x150a1007150f000f0901020709071405170801061e0c090d0f1103021c011717"
		const bytekQkPk2p = "0x0f0b080a1b1b0215031a03040e0500010a010b16091e060c1a16110b15151a06"
		const uintYw1xmcE = BigInt("98")
		const uintGnOBE2W = BigInt("1371")
		const uintCH6DNyR = BigInt("890")
		const addressHHhDvI = accounts[3]
		const addressawwIXN = accounts[1]
		const addresscwcGirU = accounts[1]
		const addresspKrYRN = accounts[4]
		const uint256mrHwZHm = await LpStakingCo8qJH.weiToSatoshi.call(uintnRPHcZ6, {from: accounts[1]});
//		await LpStakingCo8qJH.lpIncomeRateChanged.call({from: accounts[2]});
//		await LpStakingCo8qJH.exit.call({from: accounts[5]});
//		const addressd9K12jY = await LpStakingCo8qJH.transferOwnership.call(addressN1KIDFU, {from: accounts[5]});
//		const uint256TBdHivB = await LpStakingCo8qJH.stakeWithPermit.call(uintCH6DNyR, uintGnOBE2W, uintYw1xmcE, bytekQkPk2p, byteTaPfv5J, {from: accounts[1]});
//		const addressEdqUP7N = await LpStakingCo8qJH.initialize.call(addresspKrYRN, addresscwcGirU, addressawwIXN, addressHHhDvI, {from: accounts[0]});

		assert.equal(uint256mrHwZHm, BigInt("0"))
		await expect(LpStakingCo8qJH.lpIncomeRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingACHEkBN = await LpStaking.new({from: accounts[3]});
		const uintO3orzV7 = BigInt("12")
		const addresswkOIxOq = accounts[5]
		const addressa2YTqIQ = accounts[4]
		const addressoW23K1Q = accounts[2]
		const addressOP7ZNmM = accounts[3]
		const addressx8PWySa = accounts[2]
		const uint256FTgIT6J = await LpStakingACHEkBN.weiToSatoshi.call(uintO3orzV7, {from: accounts[3]});
//		const addresslzV233d = await LpStakingACHEkBN.transferOwnership.call(addresswkOIxOq, {from: accounts[2]});
//		const addressp726XSZ = await LpStakingACHEkBN.initialize.call(addressx8PWySa, addressOP7ZNmM, addressoW23K1Q, addressa2YTqIQ, {from: accounts[4]});
//		await LpStakingACHEkBN.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingACHEkBN.nonEmergencyStop.call({from: accounts[1]});

		assert.equal(uint256FTgIT6J, BigInt("0"))
		await expect(LpStakingACHEkBN.transferOwnership.call(addresswkOIxOq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwg45y1r = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr29m7Df = BigInt("595")
		const addressuJKKELk = accounts[3]
		const uint256PsaNG1Q = await LpStakingwg45y1r.withdraw.call(uintr29m7Df, {from: accounts[2]});
		await LpStakingwg45y1r.exit.call({from: accounts[4]});
		await LpStakingwg45y1r.getReward.call({from: accounts[3]});
		const addresssZ8apG = await LpStakingwg45y1r.updateIncome.call(addressuJKKELk, {from: accounts[3]});
		const uint256yLX9XUx = await LpStakingwg45y1r.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for LpStaking', async () => {
		const LpStakingyIRWTYu = await LpStaking.new({from: accounts[3]});
		const addressVeu5xH2 = "0x0000000000000000000000000000000000000001"
		const addresshf0Cy9J = accounts[1]
//		const uint256OLMxecL = await LpStakingyIRWTYu.incomeEarned.call(addressVeu5xH2, {from: accounts[5]});
//		const uint256eTnIspr = await LpStakingyIRWTYu.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256CXhwVnu = await LpStakingyIRWTYu.rewardEarned.call(addresshf0Cy9J, {from: accounts[3]});

		await expect(LpStakingyIRWTYu.incomeEarned.call(addressVeu5xH2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFFgpRIP = await LpStaking.new({from: accounts[5]});
		const uintOmu4Mtx = BigInt("1965")
		const addressAfRcb2 = accounts[4]
		const addresshHldpmo = accounts[1]
		const addressLQ8GJgx = accounts[0]
		const addresspUUrpGR = accounts[3]
		const addressQO9j2yC = accounts[1]
		const byteRQwXWn7 = "0x150b0b17200f011d02151b110414201308200e05000b0f190701080c1c050f1d"
		const byteVGgBnWx = "0x161b0808040e12020f130e03060c201419121d1011051d0f101410121a1c181e"
		const uintaQ7x89C = BigInt("19")
		const uintqo6VouA = BigInt("414")
		const uintTfnKKLv = BigInt("1000")
		const uint256PqJxP1v = await LpStakingFFgpRIP.weiToSatoshi.call(uintOmu4Mtx, {from: accounts[0]});
		const addressThhV4n0 = await LpStakingFFgpRIP.initialize.call(addresspUUrpGR, addressLQ8GJgx, addresshHldpmo, addressAfRcb2, {from: accounts[5]});
//		const uint256yQNFUK6 = await LpStakingFFgpRIP.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256C1tMQvq = await LpStakingFFgpRIP.incomeEarned.call(addressQO9j2yC, {from: accounts[4]});
//		const uint256quReNQn = await LpStakingFFgpRIP.stakeWithPermit.call(uintTfnKKLv, uintqo6VouA, uintaQ7x89C, byteVGgBnWx, byteRQwXWn7, {from: accounts[2]});
//		await LpStakingFFgpRIP.exit.call({from: accounts[2]});

		assert.equal(uint256PqJxP1v, BigInt("0"))
		await expect(LpStakingFFgpRIP.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingKu0PfXs = await LpStaking.new({from: accounts[0]});
		const uintxeTn086 = BigInt("83")
		const addresseSkr88y = accounts[2]
		const addressWCfGaWK = accounts[4]
		const addresscNpDCf = accounts[1]
		const addressPIhaqJX = accounts[3]
		const addressiNbjoh7 = accounts[2]
//		const uint2568SCoDR = await LpStakingKu0PfXs.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressTC3fV1N = await LpStakingKu0PfXs.inCaseTokensGetStuck.call(addresseSkr88y, uintxeTn086, {from: accounts[4]});
//		await LpStakingKu0PfXs.nonReentrant.call({from: accounts[3]});
//		const addressdjTuMOe = await LpStakingKu0PfXs.initialize.call(addressiNbjoh7, addressPIhaqJX, addresscNpDCf, addressWCfGaWK, {from: accounts[4]});

		await expect(LpStakingKu0PfXs.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyIRWTYu = await LpStaking.new({from: accounts[3]});
		const addressz5RlXv2 = accounts[1]
		const addressLl6tCrg = "0x0000000000000000000000000000000000000000"
		const uint256O0iVNFJ = await LpStakingyIRWTYu.getUserAccumulatedWithdrawIncome.call(addressz5RlXv2, {from: accounts[2]});
//		const uint256OLMxecL = await LpStakingyIRWTYu.incomeEarned.call(addressLl6tCrg, {from: accounts[5]});

		assert.equal(uint256O0iVNFJ, BigInt("0"))
		await expect(LpStakingyIRWTYu.incomeEarned.call(addressLl6tCrg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})