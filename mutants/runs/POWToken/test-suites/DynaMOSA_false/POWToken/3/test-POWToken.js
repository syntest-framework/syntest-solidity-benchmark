const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenNOmewgu = await POWToken.new({from: accounts[1]});
		const uintUpc823X = BigInt("1339")
		const addressLR9P2LJ = accounts[1]
		const uintboRQQph = BigInt("407")
		const uint256srJXVM8 = await POWTokenNOmewgu.setStakingRewardRatio.call(uintUpc823X, {from: accounts[3]});
		const addressr1K0ozF = await POWTokenNOmewgu.setParamSetter.call(addressLR9P2LJ, {from: accounts[4]});
		const uint256atASQ9b = await POWTokenNOmewgu.notifyRewardAmount.call(uintboRQQph, {from: accounts[3]});
		await POWTokenNOmewgu.unpause.call({from: accounts[5]});
		const uint256GCFLX9 = await POWTokenNOmewgu.lpStakingRewardRate.call({from: accounts[1]});
		const uint256qM14rvt = await POWTokenNOmewgu.lpStakingRewardRate.call({from: accounts[1]});

		await expect(POWTokenNOmewgu.setStakingRewardRatio.call(uintUpc823X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkm2XIlx = await POWToken.new({from: accounts[1]});
		await POWTokenkm2XIlx.onlyOwner.call({from: accounts[3]});
		const uint2569YwejL = await POWTokenkm2XIlx.remainingAmount.call({from: accounts[0]});
		const uint256ziiF8Km = await POWTokenkm2XIlx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		await expect(POWTokenkm2XIlx.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentd80iJG = await POWToken.new({from: accounts[0]});
		const uintmJ0y1n2 = BigInt("1505")
		const addresssnBr17j = accounts[1]
		const addressWihioxt = accounts[1]
		const uintnD8HFgZ = BigInt("1939")
		const uintfXRW9Hj = BigInt("1323")
		const boolm3GmNY = await POWTokentd80iJG.transferFrom.call(addressWihioxt, addresssnBr17j, uintmJ0y1n2, {from: accounts[3]});
		const uint256UTDEQdD = await POWTokentd80iJG.notifyRewardAmount.call(uintnD8HFgZ, {from: accounts[0]});
		const uint256AD9ctPg = await POWTokentd80iJG.setStakingRewardRatio.call(uintfXRW9Hj, {from: accounts[5]});

		await expect(POWTokentd80iJG.transferFrom.call(addressWihioxt, addresssnBr17j, uintmJ0y1n2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpHJKT7e = await POWToken.new({from: accounts[5]});
		await POWTokenpHJKT7e.updateIncomeRate.call({from: accounts[0]});
		await POWTokenpHJKT7e.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenpHJKT7e.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenKEXBhx4 = await POWToken.new({from: accounts[0]});
		const uintYkcnqk3 = BigInt("270")
		const bytezUWCLY0 = "0x05120a0a181a160d0c07090406151a131d150d0a1c1d050f1d03171619081f12"
		const bytewZ0Bs27 = "0x101214122009131718190e111c170703131c0a150d17161802100c1b031b0a0a"
		const uintuVTkT4s = BigInt("219")
		const uintecv3Gin = BigInt("535")
		const uintRF0NaLt = BigInt("1499")
		const addressfYj551I = accounts[3]
		const addressM4q9rW = accounts[1]
		const uintJnrkLUY = BigInt("1185")
		const uint256OZz43L = await POWTokenKEXBhx4.setElectricCharge.call(uintYkcnqk3, {from: accounts[1]});
		const addressFX9BhVr = await POWTokenKEXBhx4.permit.call(addressM4q9rW, addressfYj551I, uintRF0NaLt, uintecv3Gin, uintuVTkT4s, bytewZ0Bs27, bytezUWCLY0, {from: accounts[4]});
		const uint2562cCHp7 = await POWTokenKEXBhx4.setMinerPoolFeeNumerator.call(uintJnrkLUY, {from: accounts[3]});
		await POWTokenKEXBhx4.onlyParamSetter.call({from: accounts[3]});
		await POWTokenKEXBhx4.pause.call({from: accounts[5]});

		await expect(POWTokenKEXBhx4.setElectricCharge.call(uintYkcnqk3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvzM24lm = await POWToken.new({from: accounts[2]});
		const uintcEkHcPa = BigInt("1183")
		const addressNZ9iIjO = accounts[5]
		const uintrhsY67b = BigInt("660")
		const addressOFbziwB = accounts[2]
		const addressDEFzSZ8 = accounts[2]
		const uintVNp2nM6 = BigInt("2020")
		const addresscuz4FVI = accounts[4]
		const addressgHLAMzn = await POWTokenvzM24lm.claimReward.call(addressNZ9iIjO, uintcEkHcPa, {from: accounts[0]});
		const boolXP5Ai1 = await POWTokenvzM24lm.approve.call(addressOFbziwB, uintrhsY67b, {from: accounts[0]});
		const addressE0ODpr = await POWTokenvzM24lm.setParamSetter.call(addressDEFzSZ8, {from: accounts[1]});
		const boolIO1r0aP = await POWTokenvzM24lm.transfer.call(addresscuz4FVI, uintVNp2nM6, {from: accounts[3]});
		await POWTokenvzM24lm.whenNotPaused.call({from: accounts[3]});

		await expect(POWTokenvzM24lm.claimReward.call(addressNZ9iIjO, uintcEkHcPa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenaEIcWFv = await POWToken.new({from: accounts[0]});
		const uintrDaUNz5 = BigInt("1317")
		const uintuEHwOIK = BigInt("644")
		const uintJn73ESn = BigInt("1251")
		const uint5TQGWd = BigInt("521")
		const uintatBiVwm = BigInt("1667")
		const addressJg4q3ii = "0x0000000000000000000000000000000000000001"
		const addressdXVm5B7 = accounts[1]
		const addresshnq8V1 = "0x0000000000000000000000000000000000000001"
		const addressf5GKfTA = accounts[5]
		const addressvpC4c1c = accounts[5]
		const addressDVNzm1O = accounts[1]
		const addressm8QeJn = accounts[1]
		const addressYGtUmiB = "0x0000000000000000000000000000000000000001"
		const stringcwiPDAZ = "thOlduoB7dDxkSZsj4zUX73gFY6PAWhNGUf5SUagDtpNvM8"
		const stringmpPPGWZ = "vefS11ghR89mVMvDlelrUiQ6oC5Q4zOB1orJnSTPFFVF"
		const uintRffIgm8 = BigInt("622")
		const uintvBUNviX = BigInt("1860")
		const uintGxbuMRW = BigInt("1665")
		const addressdSb7kjj = accounts[5]
		const address4kyxN7 = accounts[5]
		const uinti3yn3w1 = BigInt("202")
		const stringhlVP4TS = await POWTokenaEIcWFv.initialize.call(stringmpPPGWZ, stringcwiPDAZ, addressYGtUmiB, addressm8QeJn, addressDVNzm1O, addressvpC4c1c, addressf5GKfTA, addresshnq8V1, addressdXVm5B7, addressJg4q3ii, uintatBiVwm, uint5TQGWd, uintJn73ESn, uintuEHwOIK, uintrDaUNz5, {from: accounts[3]});
		const uint256e5QiGzm = await POWTokenaEIcWFv.addHashRate.call(uintRffIgm8, {from: accounts[2]});
		const uint256Ys2uXEU = await POWTokenaEIcWFv.addHashRate.call(uintvBUNviX, {from: accounts[1]});
		const boolnp6HO5Y = await POWTokenaEIcWFv.transferFrom.call(address4kyxN7, addressdSb7kjj, uintGxbuMRW, {from: accounts[0]});
		const uint256A6UB7rj = await POWTokenaEIcWFv.addHashRate.call(uinti3yn3w1, {from: accounts[3]});

		await expect(POWTokenaEIcWFv.initialize.call(stringmpPPGWZ, stringcwiPDAZ, addressYGtUmiB, addressm8QeJn, addressDVNzm1O, addressvpC4c1c, addressf5GKfTA, addresshnq8V1, addressdXVm5B7, addressJg4q3ii, uintatBiVwm, uint5TQGWd, uintJn73ESn, uintuEHwOIK, uintrDaUNz5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencqfLbtn = await POWToken.new({from: accounts[1]});
		const uinteMCA7M5 = BigInt("386")
		const addresshhb10Rd = accounts[0]
		const uintl62MewF = BigInt("1184")
		const addressdY72Bvb = await POWTokencqfLbtn.mint.call(addresshhb10Rd, uinteMCA7M5, {from: accounts[1]});
		const uint256yDvLWr1 = await POWTokencqfLbtn.getHistoryWorkingRate.call({from: accounts[3]});
		const uint256rBY5Rxy = await POWTokencqfLbtn.setStartMiningTime.call(uintl62MewF, {from: accounts[0]});
		const uint256vLCvuMC = await POWTokencqfLbtn.getIncomeBTCInWeiPerSec.call({from: accounts[2]});

		await expect(POWTokencqfLbtn.mint.call(addresshhb10Rd, uinteMCA7M5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkm2XIlx = await POWToken.new({from: accounts[1]});
		const uint2569YwejL = await POWTokenkm2XIlx.remainingAmount.call({from: accounts[0]});
		const uint256ziiF8Km = await POWTokenkm2XIlx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(uint2569YwejL, BigInt("0"))
		await expect(POWTokenkm2XIlx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenv8iVehP = await POWToken.new({from: accounts[3]});
		const uintNy8lkI6 = BigInt("817")
		const uint256YJgR5Lc = await POWTokenv8iVehP.lpStakingRewardRate.call({from: accounts[4]});
		const uint256Kk5XXYb = await POWTokenv8iVehP.remainingAmount.call({from: accounts[4]});
		const uint256ReLUjIO = await POWTokenv8iVehP.setWorkingHashRate.call(uintNy8lkI6, {from: accounts[2]});

		assert.equal(uint256Kk5XXYb, BigInt("0"))
		assert.equal(uint256YJgR5Lc, BigInt("0"))
		await expect(POWTokenv8iVehP.setWorkingHashRate.call(uintNy8lkI6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenN0Q5bTp = await POWToken.new({from: accounts[0]});
		const uintF1aeXJ2 = BigInt("1269")
		const uintbXI7Tz = BigInt("853")
		const addressGobDxVv = accounts[2]
		const uint256QAgpwD5 = await POWTokenN0Q5bTp.getHistoryWorkingRate.call({from: accounts[3]});
		await POWTokenN0Q5bTp.updateIncomeRate.call({from: accounts[2]});
		const uint256jqEvtFn = await POWTokenN0Q5bTp.notifyRewardAmount.call(uintF1aeXJ2, {from: accounts[3]});
		const addressLPMRV1G = await POWTokenN0Q5bTp.claimReward.call(addressGobDxVv, uintbXI7Tz, {from: accounts[0]});
		const boolUjw8Q1G = await POWTokenN0Q5bTp.paused.call({from: accounts[1]});

		await expect(POWTokenN0Q5bTp.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkm2XIlx = await POWToken.new({from: accounts[1]});
		const uintOhZOzG = BigInt("387")
		const addresslxRhM2L = accounts[1]
		const uint2569YwejL = await POWTokenkm2XIlx.remainingAmount.call({from: accounts[0]});
		const booljvFmn48 = await POWTokenkm2XIlx.transfer.call(addresslxRhM2L, uintOhZOzG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ziiF8Km = await POWTokenkm2XIlx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(uint2569YwejL, BigInt("0"))
		await expect(POWTokenkm2XIlx.transfer.call(addresslxRhM2L, uintOhZOzG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkm2XIlx = await POWToken.new({from: accounts[1]});
		const byteZ4nmj1 = "0x0216121a0b1d0a0b070c170f01060b040408121c1e011f0214020f011a090f18"
		const byteycQg5yc = "0x131e150d0b090a0006011f0606181c20081816090b011a0d111c0b180e181f0c"
		const uintcF4Lg8Y = BigInt("224")
		const uintZATOuKi = BigInt("1010")
		const uintC9iy6hH = BigInt("690")
		const addressyjN4AbQ = accounts[3]
		const addressv1GE4fb = accounts[0]
		const addressiQLjTMH = await POWTokenkm2XIlx.permit.call(addressv1GE4fb, addressyjN4AbQ, uintC9iy6hH, uintZATOuKi, uintcF4Lg8Y, byteycQg5yc, byteZ4nmj1, {from: accounts[3]});
		const uint256ziiF8Km = await POWTokenkm2XIlx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		await expect(POWTokenkm2XIlx.permit.call(addressv1GE4fb, addressyjN4AbQ, uintC9iy6hH, uintZATOuKi, uintcF4Lg8Y, byteycQg5yc, byteZ4nmj1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkm2XIlx = await POWToken.new({from: accounts[1]});
		const byteNLkmwGi = "0x0b0f1f19191009190c02160e1f160020160805021d17151e0a0318161a0e0716"
		const bytex8oOIg9 = "0x071e0519030b0111111a0215041c0a00110f140213030b121c101e091a1a0e14"
		const uintzEK3qMt = BigInt("87")
		const uintM80eabw = BigInt("2026")
		const uintMK1nom4 = BigInt("636")
		const addressEIyAlJ7 = accounts[1]
		const address9tCEe5 = accounts[1]
		const uint256FpdNdK = await POWTokenkm2XIlx.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		const uint256ziiF8Km = await POWTokenkm2XIlx.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
		const addressSmVjPRe = await POWTokenkm2XIlx.permit.call(address9tCEe5, addressEIyAlJ7, uintMK1nom4, uintM80eabw, uintzEK3qMt, bytex8oOIg9, byteNLkmwGi, {from: accounts[0]});

		await expect(POWTokenkm2XIlx.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpHJKT7e = await POWToken.new({from: accounts[5]});
		const uintG4HbwAG = BigInt("456")
		const addressFMdxVe4 = "0x0000000000000000000000000000000000000001"
		const addressaovoHqV = accounts[2]
		const uintXuWDb5Y = BigInt("1892")
		const uintQMgoVmf = BigInt("858")
		const addressm4piHu0 = accounts[2]
		const addresssrda9Pi = await POWTokenpHJKT7e.claimIncome.call(addressFMdxVe4, uintG4HbwAG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256apZNoTF = await POWTokenpHJKT7e.stakingRewardRate.call({from: accounts[2]});
		await POWTokenpHJKT7e.updateIncomeRate.call({from: accounts[0]});
		const addresskwO4Dx = await POWTokenpHJKT7e.transferOwnership.call(addressaovoHqV, {from: accounts[1]});
		const uint256HTB547U = await POWTokenpHJKT7e.getHistoryWorkingRate.call({from: accounts[4]});
		const uint256QbHV5Qw = await POWTokenpHJKT7e.addHashRate.call(uintXuWDb5Y, {from: accounts[2]});
		const boolZUItnjS = await POWTokenpHJKT7e.approve.call(addressm4piHu0, uintQMgoVmf, {from: accounts[1]});
		await POWTokenpHJKT7e.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenpHJKT7e.claimIncome.call(addressFMdxVe4, uintG4HbwAG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenN0Q5bTp = await POWToken.new({from: accounts[0]});
		const uintcK3vqrm = BigInt("1766")
		const addressdFpNMcW = accounts[3]
		const uintmtZCzs = BigInt("1269")
		const uintJLLJUFG = BigInt("1443")
		const addressDrXTeXB = accounts[3]
		const uintfg5SYZK = BigInt("853")
		const addressSDSMFT1 = accounts[2]
		const boolOUwi2BA = await POWTokenN0Q5bTp.approve.call(addressdFpNMcW, uintcK3vqrm, {from: accounts[0]});
		const uint256QAgpwD5 = await POWTokenN0Q5bTp.getHistoryWorkingRate.call({from: accounts[3]});
		await POWTokenN0Q5bTp.updateIncomeRate.call({from: accounts[2]});
		const uint256jqEvtFn = await POWTokenN0Q5bTp.notifyRewardAmount.call(uintmtZCzs, {from: accounts[3]});
		const uint256rX799d4 = await POWTokenN0Q5bTp.remainingAmount.call({from: accounts[5]});
		const boolbdbjWDL = await POWTokenN0Q5bTp.transfer.call(addressDrXTeXB, uintJLLJUFG, {from: accounts[1]});
		const addressLPMRV1G = await POWTokenN0Q5bTp.claimReward.call(addressSDSMFT1, uintfg5SYZK, {from: accounts[0]});
		const boolUjw8Q1G = await POWTokenN0Q5bTp.paused.call({from: accounts[1]});

		assert.equal(boolOUwi2BA, true)
		await expect(POWTokenN0Q5bTp.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvAa2XCF = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQ10mGh1 = BigInt("163")
		const addressagayTKM = accounts[4]
		const uint256TKvgL9 = await POWTokenvAa2XCF.remainingAmount.call({from: accounts[0]});
		const addressaOLoOjt = await POWTokenvAa2XCF.mint.call(addressagayTKM, uintQ10mGh1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZdFXn3Z = await POWTokenvAa2XCF.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenpHJKT7e = await POWToken.new({from: accounts[5]});
		const addressZI014H = accounts[2]
		const uintocoI2CA = BigInt("62")
		const uintCKsUEJ = BigInt("1907")
		const booltWMDmV = await POWTokenpHJKT7e.paused.call({from: accounts[3]});
		const uint256apZNoTF = await POWTokenpHJKT7e.stakingRewardRate.call({from: accounts[2]});
		await POWTokenpHJKT7e.updateIncomeRate.call({from: accounts[0]});
		const addresskwO4Dx = await POWTokenpHJKT7e.transferOwnership.call(addressZI014H, {from: accounts[1]});
		const uint256HTB547U = await POWTokenpHJKT7e.getHistoryWorkingRate.call({from: accounts[4]});
		const uint256gQrNUGR = await POWTokenpHJKT7e.notifyRewardAmount.call(uintocoI2CA, {from: accounts[1]});
		const uint256QbHV5Qw = await POWTokenpHJKT7e.addHashRate.call(uintCKsUEJ, {from: accounts[2]});
		await POWTokenpHJKT7e.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltWMDmV, false)
		assert.equal(uint256apZNoTF, BigInt("0"))
		await expect(POWTokenpHJKT7e.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})