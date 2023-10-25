const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokeneuJktZ = await POWToken.new({from: accounts[3]});
		const uintFxMYGaf = BigInt("197")
		const uint1eO3mg = BigInt("1429")
		const uintsnW4KbU = BigInt("1973")
		const uintIhPG2CX = BigInt("1032")
		const uintRsbxVC6 = BigInt("1375")
		const addressH7FOyf8 = accounts[2]
		const addressfUAR5Lp = "0x0000000000000000000000000000000000000001"
		const addressxIXZrgq = accounts[1]
		const addressoKWd4Ne = accounts[1]
		const addressjxu2uFZ = accounts[5]
		const addressBqiU5NI = accounts[4]
		const addresshdDl3av = accounts[0]
		const addresscfcPcSS = accounts[2]
		const stringswY8KIJ = "Inaob8fvLdlCvtu6CVLmWx4h18gsF193yaggaYa4cz8DUoCw54W5HzEGDSDfi0n1Grtw4GdK2UfKKb1gS"
		const stringHRoB5Yh = "GYsmuonebZm9zmQnPuIuJYVJSDOvDA"
		const uintjDsbw3b = BigInt("590")
		const stringcau0pm0 = await POWTokeneuJktZ.initialize.call(stringHRoB5Yh, stringswY8KIJ, addresscfcPcSS, addresshdDl3av, addressBqiU5NI, addressjxu2uFZ, addressoKWd4Ne, addressxIXZrgq, addressfUAR5Lp, addressH7FOyf8, uintRsbxVC6, uintIhPG2CX, uintsnW4KbU, uint1eO3mg, uintFxMYGaf, {from: accounts[4]});
		const uint256I3w1LlU = await POWTokeneuJktZ.setWorkingHashRate.call(uintjDsbw3b, {from: accounts[3]});
		const uint256DQjE0oH = await POWTokeneuJktZ.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nM1KJhz = await POWTokeneuJktZ.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
		await POWTokeneuJktZ.unpause.call({from: accounts[4]});

		await expect(POWTokeneuJktZ.initialize.call(stringHRoB5Yh, stringswY8KIJ, addresscfcPcSS, addresshdDl3av, addressBqiU5NI, addressjxu2uFZ, addressoKWd4Ne, addressxIXZrgq, addressfUAR5Lp, addressH7FOyf8, uintRsbxVC6, uintIhPG2CX, uintsnW4KbU, uint1eO3mg, uintFxMYGaf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkYberI = await POWToken.new({from: accounts[3]});
		const uintHpxUoBb = BigInt("325")
		const addressIsfTSr3 = "0x0000000000000000000000000000000000000001"
		const uintYjmeRzC = BigInt("1129")
		const addressAg0tXP = await POWTokenkYberI.inCaseTokensGetStuck.call(addressIsfTSr3, uintHpxUoBb, {from: accounts[1]});
		const uint256tTPBUoY = await POWTokenkYberI.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
		const uint256L3UzHCV = await POWTokenkYberI.setDepreciationNumerator.call(uintYjmeRzC, {from: accounts[2]});

		await expect(POWTokenkYberI.inCaseTokensGetStuck.call(addressIsfTSr3, uintHpxUoBb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenoo6HoUL = await POWToken.new({from: accounts[2]});
		const uintqXsarXK = BigInt("519")
		const addresslaHwjcM = accounts[3]
		const uintlUlOHS = BigInt("1460")
		const uintOBwIfyg = BigInt("560")
		const uintTz1yVWb = BigInt("456")
		const addressyCoZbSp = accounts[3]
		const addressYhaezXV = "0x0000000000000000000000000000000000000001"
		const addressBDKPSw1 = await POWTokenoo6HoUL.claimReward.call(addresslaHwjcM, uintqXsarXK, {from: accounts[2]});
		const uint256KE3gvmb = await POWTokenoo6HoUL.notifyRewardAmount.call(uintlUlOHS, {from: accounts[1]});
		const uint256fZlZk7v = await POWTokenoo6HoUL.setStartMiningTime.call(uintOBwIfyg, {from: accounts[1]});
		const boolQAK7ItC = await POWTokenoo6HoUL.transferFrom.call(addressYhaezXV, addressyCoZbSp, uintTz1yVWb, {from: "0x0000000000000000000000000000000000000001"});
		const uint2569LD3Ci = await POWTokenoo6HoUL.stakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenoo6HoUL.claimReward.call(addresslaHwjcM, uintqXsarXK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFPzPRRH = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwB5hvyE = BigInt("1396")
		const uintPr1kQI = BigInt("1444")
		const addressYfp99a = "0x0000000000000000000000000000000000000001"
		const uint256Ic9IrP = await POWTokenFPzPRRH.lpStakingRewardRate.call({from: accounts[4]});
		const uint256ic96jQM = await POWTokenFPzPRRH.setElectricCharge.call(uintwB5hvyE, {from: accounts[4]});
		const uint256nePwoOO = await POWTokenFPzPRRH.remainingAmount.call({from: accounts[2]});
		await POWTokenFPzPRRH.whenPaused.call({from: accounts[1]});
		const addressau0n1tM = await POWTokenFPzPRRH.claimIncome.call(addressYfp99a, uintPr1kQI, {from: accounts[3]});
	});

	it('test for POWToken', async () => {
		const POWTokenJ5LODZY = await POWToken.new({from: accounts[0]});
		const uintzRX53wY = BigInt("1041")
		const addressXduscCT = accounts[1]
		const addresswqtjeE = accounts[1]
		const uintWoaPMoV = BigInt("247")
		const uinta6IRVZl = BigInt("752")
		const addressrCTH1Me = accounts[3]
		const boolP2gdwm = await POWTokenJ5LODZY.transferFrom.call(addresswqtjeE, addressXduscCT, uintzRX53wY, {from: accounts[1]});
		const uint256g5KsIyw = await POWTokenJ5LODZY.addHashRate.call(uintWoaPMoV, {from: accounts[3]});
		const boolHTcdg8 = await POWTokenJ5LODZY.approve.call(addressrCTH1Me, uinta6IRVZl, {from: accounts[2]});

		await expect(POWTokenJ5LODZY.transferFrom.call(addresswqtjeE, addressXduscCT, uintzRX53wY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRRZAPuK = await POWToken.new({from: accounts[1]});
		const uintVEXJYMm = BigInt("1169")
		const addressiv1iksd = "0x0000000000000000000000000000000000000001"
		const addressZOO6v6t = await POWTokenRRZAPuK.mint.call(addressiv1iksd, uintVEXJYMm, {from: accounts[1]});
		await POWTokenRRZAPuK.updateIncomeRate.call({from: accounts[4]});

		await expect(POWTokenRRZAPuK.mint.call(addressiv1iksd, uintVEXJYMm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const uintdiUXMug = BigInt("1380")
		const addressg0dOt8u = accounts[1]
		const uintElzLBg = BigInt("1038")
		const uint14xTSP = BigInt("109")
		const addressdx7J2Sf = accounts[4]
		const uintSaEuaL9 = BigInt("1161")
		const addressGmbVmav = accounts[4]
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const boolFo36CEq = await POWTokennHyQJD.approve.call(addressg0dOt8u, uintdiUXMug, {from: accounts[2]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintElzLBg, {from: accounts[1]});
		const boolEwdZMJM = await POWTokennHyQJD.approve.call(addressdx7J2Sf, uint14xTSP, {from: accounts[4]});
		const addressOWJU56j = await POWTokennHyQJD.mint.call(addressGmbVmav, uintSaEuaL9, {from: accounts[4]});

		await expect(POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRRZAPuK = await POWToken.new({from: accounts[1]});
		await POWTokenRRZAPuK.updateIncomeRate.call({from: accounts[4]});

		await expect(POWTokenRRZAPuK.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const uintTeSjtBK = BigInt("1380")
		const addressPJ7VyY = accounts[2]
		const uintwtgwFex = BigInt("1038")
		const addressOeRwOk1 = accounts[4]
		const uintWwhR0Ij = BigInt("109")
		const addresss0rmoj = accounts[4]
		const uintmR9sL8T = BigInt("1161")
		const addressULpWQ5Z = accounts[4]
		const uint256HQ15LJq = await POWTokennHyQJD.remainingAmount.call({from: accounts[2]});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const boolFo36CEq = await POWTokennHyQJD.approve.call(addressPJ7VyY, uintTeSjtBK, {from: accounts[2]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintwtgwFex, {from: accounts[1]});
		const addressWwAnMhv = await POWTokennHyQJD.transferOwnership.call(addressOeRwOk1, {from: "0x0000000000000000000000000000000000000001"});
		const boolEwdZMJM = await POWTokennHyQJD.approve.call(addresss0rmoj, uintWwhR0Ij, {from: accounts[4]});
		const addressOWJU56j = await POWTokennHyQJD.mint.call(addressULpWQ5Z, uintmR9sL8T, {from: accounts[4]});

		assert.equal(uint256HQ15LJq, BigInt("0"))
		await expect(POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const uintuLk1tHl = BigInt("1380")
		const addressoKetuIp = accounts[1]
		const uintpwFRIGL = BigInt("1039")
		const uintAITkrdc = BigInt("1161")
		const addressNg9CqLy = accounts[4]
		const uintTFDEhxL = BigInt("1017")
		const uint256GIALwjo = await POWTokennHyQJD.stakingRewardRate.call({from: accounts[3]});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256Zx1WyYw = await POWTokennHyQJD.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const boolFo36CEq = await POWTokennHyQJD.approve.call(addressoKetuIp, uintuLk1tHl, {from: accounts[2]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintpwFRIGL, {from: accounts[1]});
		const addressOWJU56j = await POWTokennHyQJD.mint.call(addressNg9CqLy, uintAITkrdc, {from: accounts[4]});
		const uint256WH6Lz67 = await POWTokennHyQJD.setStakingRewardRatio.call(uintTFDEhxL, {from: accounts[4]});

		assert.equal(uint256GIALwjo, BigInt("0"))
		await expect(POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const uintX75mVRC = BigInt("34")
		const addressYtv0sAX = accounts[1]
		const uintuKJb6M9 = BigInt("1380")
		const addressLpZ9aqP = accounts[3]
		const uintGC7Pw5b = BigInt("1038")
		const addressSozXVJ3 = accounts[4]
		const uintvxwvylr = BigInt("109")
		const addresstCnpUa = accounts[4]
		const uintBvZ6NzJ = BigInt("1161")
		const addressItuRE0x = accounts[4]
		const uint256HQ15LJq = await POWTokennHyQJD.remainingAmount.call({from: accounts[2]});
		const boolPUIGVtR = await POWTokennHyQJD.approve.call(addressYtv0sAX, uintX75mVRC, {from: accounts[0]});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const boolFo36CEq = await POWTokennHyQJD.approve.call(addressLpZ9aqP, uintuKJb6M9, {from: accounts[2]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintGC7Pw5b, {from: accounts[1]});
		const addressWwAnMhv = await POWTokennHyQJD.transferOwnership.call(addressSozXVJ3, {from: "0x0000000000000000000000000000000000000001"});
		const boolEwdZMJM = await POWTokennHyQJD.approve.call(addresstCnpUa, uintvxwvylr, {from: accounts[4]});
		const addressOWJU56j = await POWTokennHyQJD.mint.call(addressItuRE0x, uintBvZ6NzJ, {from: accounts[4]});

		assert.equal(boolPUIGVtR, true)
		assert.equal(uint256HQ15LJq, BigInt("0"))
		await expect(POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenu70h2z = await POWToken.new({from: accounts[1]});
		const uintNqoLMoJ = BigInt("1395")
		const uinttpxqsjK = BigInt("1714")
		const uinty35ZmB = BigInt("250")
		const address1hHJZx = accounts[1]
		const uintRaKB5SH = BigInt("776")
		const addresseBbr11Y = accounts[3]
		const uint256PNvK30o = await POWTokenu70h2z.setMinerPoolFeeNumerator.call(uintNqoLMoJ, {from: accounts[0]});
		const uint256U33qPPz = await POWTokenu70h2z.setDepreciationNumerator.call(uinttpxqsjK, {from: accounts[2]});
		const addressvNrABx0 = await POWTokenu70h2z.inCaseTokensGetStuck.call(address1hHJZx, uinty35ZmB, {from: "0x0000000000000000000000000000000000000001"});
		const addressO42UFGf = await POWTokenu70h2z.claimReward.call(addresseBbr11Y, uintRaKB5SH, {from: accounts[5]});
		const uint256CwgmUFc = await POWTokenu70h2z.stakingRewardRate.call({from: accounts[1]});

		await expect(POWTokenu70h2z.setMinerPoolFeeNumerator.call(uintNqoLMoJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const uintZAvia5U = BigInt("1038")
		await POWTokennHyQJD.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintZAvia5U, {from: accounts[1]});
		const uint256S7GdO6N = await POWTokennHyQJD.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		await expect(POWTokennHyQJD.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRRZAPuK = await POWToken.new({from: accounts[1]});
		const uintU5NKW3l = BigInt("1731")
		const addressMP9svt = accounts[0]
		const uinttpzyRVu = BigInt("1169")
		const addressmFHDy2u = "0x0000000000000000000000000000000000000002"
		const boolC9wX78 = await POWTokenRRZAPuK.transfer.call(addressMP9svt, uintU5NKW3l, {from: accounts[0]});
		const addressZOO6v6t = await POWTokenRRZAPuK.mint.call(addressmFHDy2u, uinttpzyRVu, {from: accounts[1]});

		await expect(POWTokenRRZAPuK.transfer.call(addressMP9svt, uintU5NKW3l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const uintcl4SsQI = BigInt("670")
		const addressPnBIpN = accounts[2]
		const uintuOShaL0 = BigInt("1361")
		const uintLtzUBdT = BigInt("1038")
		const addressYJt0VNj = await POWTokennHyQJD.claimIncome.call(addressPnBIpN, uintcl4SsQI, {from: accounts[0]});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256gnVELbe = await POWTokennHyQJD.remainingAmount.call({from: accounts[5]});
		const uint256pkvARLg = await POWTokennHyQJD.setStakingRewardRatio.call(uintuOShaL0, {from: accounts[4]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintLtzUBdT, {from: accounts[1]});

		await expect(POWTokennHyQJD.claimIncome.call(addressPnBIpN, uintcl4SsQI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRRZAPuK = await POWToken.new({from: accounts[1]});
		const uint256Zkigbe9 = await POWTokenRRZAPuK.lpStakingRewardRate.call({from: accounts[3]});
		await POWTokenRRZAPuK.updateIncomeRate.call({from: accounts[4]});

		assert.equal(uint256Zkigbe9, BigInt("0"))
		await expect(POWTokenRRZAPuK.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennTCfbjJ = await POWToken.new({from: accounts[1]});
		const uintP6GTurL = BigInt("906")
		const uint256eK5y4AW = await POWTokennTCfbjJ.lpStakingRewardRate.call({from: accounts[3]});
		const boolLqInlQ = await POWTokennTCfbjJ.paused.call({from: "0x0000000000000000000000000000000000000001"});
		await POWTokennTCfbjJ.onlyOwner.call({from: accounts[1]});
		const uint256XosxM0 = await POWTokennTCfbjJ.setWorkingHashRate.call(uintP6GTurL, {from: accounts[4]});

		assert.equal(boolLqInlQ, false)
		assert.equal(uint256eK5y4AW, BigInt("0"))
		await expect(POWTokennTCfbjJ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const addressUuZPyp = accounts[1]
		const uint256VP22jgT = await POWTokennHyQJD.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const uint256w8CuCBJ = await POWTokennHyQJD.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
		const addressPfCkRN = await POWTokennHyQJD.setBtcParam.call(addressUuZPyp, {from: accounts[2]});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});

		await expect(POWTokennHyQJD.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennHyQJD = await POWToken.new({from: accounts[5]});
		const byteVGJIrq1 = "0x120d030d0e0f041908010b17100b050e0307031214121c0d190b0d1b0f1b0f16"
		const byteNI7PlwJ = "0x001c1a150c1115120a0b08201913070705070d071e081902081e131d19160f1e"
		const uintyLucAzQ = BigInt("68")
		const uintfO9OcBa = BigInt("985")
		const uintZTlsuMM = BigInt("204")
		const addressNR8WhHO = accounts[4]
		const addressAMPinNh = accounts[1]
		const uintxKDCuh7 = BigInt("1038")
		const addressdbMCa3l = await POWTokennHyQJD.permit.call(addressAMPinNh, addressNR8WhHO, uintZTlsuMM, uintfO9OcBa, uintyLucAzQ, byteNI7PlwJ, byteVGJIrq1, {from: accounts[1]});
		const uint256tK66I7d = await POWTokennHyQJD.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256wgoTdbf = await POWTokennHyQJD.setElectricCharge.call(uintxKDCuh7, {from: accounts[1]});
		const uint256hVSNGHI = await POWTokennHyQJD.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});

		await expect(POWTokennHyQJD.permit.call(addressAMPinNh, addressNR8WhHO, uintZTlsuMM, uintfO9OcBa, uintyLucAzQ, byteNI7PlwJ, byteVGJIrq1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})