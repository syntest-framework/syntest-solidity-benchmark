const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressLNjM08 = accounts[1]
		const afiControllerwIweNnb = await afiController.new(addressLNjM08, {from: accounts[0]});
		const addresssJS36oc = accounts[3]
		const addressM9TOMcc = accounts[5]
		const uintc6smhhm = BigInt("1441")
		const addressXJWsaxE = "0x0000000000000000000000000000000000000001"
		const uintk8qo8QD = BigInt("1108")
		const uintD8l69sy = BigInt("1289")
		const addresszmSZqPp = accounts[0]
		const addressXs9by8U = accounts[0]
		const addressEdEOOQl = accounts[4]
//		const addressyTZNjyi = await afiControllerwIweNnb.revokeStrategy.call(addressM9TOMcc, addresssJS36oc, {from: accounts[3]});
//		const uintS3m0RvX = await afiControllerwIweNnb.setSplit.call(uintc6smhhm, {from: accounts[3]});
//		const uintMeqBna7 = await afiControllerwIweNnb.balanceOf.call(addressXJWsaxE, {from: accounts[0]});
//		const uintKTr1Dy0 = await afiControllerwIweNnb.setSplit.call(uintk8qo8QD, {from: accounts[0]});
//		const uintH5w34eu = await afiControllerwIweNnb.getExpectedReturn.call(addressXs9by8U, addresszmSZqPp, uintD8l69sy, {from: accounts[1]});
//		const addressYm8krN = await afiControllerwIweNnb.setOneSplit.call(addressEdEOOQl, {from: accounts[3]});

		await expect(afiControllerwIweNnb.revokeStrategy.call(addressM9TOMcc, addresssJS36oc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoXfp0P = accounts[3]
		const afiControllerEbIfQ6n = await afiController.new(addressoXfp0P, {from: accounts[0]});
		const addresslp3oYdc = accounts[0]
		const addressrsCHP6K = accounts[4]
		const addressXWJE9e = accounts[0]
		const address8uul8g = "0x0000000000000000000000000000000000000001"
		const addresscvhZ7cf = accounts[3]
		const addressBiYr0lr = accounts[3]
//		const addresszCs8IKu = await afiControllerEbIfQ6n.withdrawAll.call(addresslp3oYdc, {from: accounts[2]});
//		const addressMpGAWO1 = await afiControllerEbIfQ6n.setGovernance.call(addressrsCHP6K, {from: "0x0000000000000000000000000000000000000001"});
//		const addresso7pOq6m = await afiControllerEbIfQ6n.setVault.call(address8uul8g, addressXWJE9e, {from: accounts[1]});
//		const addressm6ze7p7 = await afiControllerEbIfQ6n.setRewards.call(addresscvhZ7cf, {from: accounts[5]});
//		const addressAOuRms = await afiControllerEbIfQ6n.setOneSplit.call(addressBiYr0lr, {from: accounts[4]});

		await expect(afiControllerEbIfQ6n.withdrawAll.call(addresslp3oYdc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskPSDA1 = accounts[2]
		const afiControllereZGulfC = await afiController.new(addresskPSDA1, {from: accounts[4]});
		const addressYAnZbcO = accounts[1]
		const addressHJqxM11 = accounts[1]
		const addresssEQKvI5 = accounts[3]
		const addressPxyRtJv = accounts[4]
		const addressrOmjPDW = accounts[0]
		const addresssOFaSxJ = accounts[3]
		const addresszMDhiHr = accounts[0]
		const uintNL7CZSV = BigInt("243")
		const addressvraXuiH = accounts[5]
		const uintaTRPUMo = BigInt("656")
		const addressVktAq7n = accounts[3]
		const addressgcDLsrH = accounts[2]
//		const addressbPAnczX = await afiControllereZGulfC.setStrategy.call(addressHJqxM11, addressYAnZbcO, {from: accounts[4]});
//		const addressfiinUj = await afiControllereZGulfC.inCaseStrategyTokenGetStuck.call(addressPxyRtJv, addresssEQKvI5, {from: accounts[0]});
//		const addressFNLng3C = await afiControllereZGulfC.setVault.call(addresssOFaSxJ, addressrOmjPDW, {from: accounts[5]});
//		const addressPUAelxy = await afiControllereZGulfC.setOneSplit.call(addresszMDhiHr, {from: accounts[0]});
//		const address4pu3Y3 = await afiControllereZGulfC.earn.call(addressvraXuiH, uintNL7CZSV, {from: accounts[5]});
//		const addressTDeHgwz = await afiControllereZGulfC.yearn.call(addressgcDLsrH, addressVktAq7n, uintaTRPUMo, {from: accounts[1]});

		await expect(afiControllereZGulfC.setStrategy.call(addressHJqxM11, addressYAnZbcO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFPTHD5v = accounts[3]
		const afiControllerFlBfifo = await afiController.new(addressFPTHD5v, {from: accounts[1]});
		const addresszTeULU5 = accounts[2]
		const addressYmnVDAI = accounts[3]
		const addressSxLnhiB = accounts[2]
		const addresswV2e8Sa = accounts[3]
		const addressGYmiNw = await afiControllerFlBfifo.setConverter.call(addressSxLnhiB, addressYmnVDAI, addresszTeULU5, {from: accounts[1]});
//		const addressMj3hTdG = await afiControllerFlBfifo.setStrategist.call(addresswV2e8Sa, {from: accounts[2]});

		await expect(afiControllerFlBfifo.setStrategist.call(addresswV2e8Sa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvBIs8Na = "0x0000000000000000000000000000000000000001"
		const afiControllerRjQLmIf = await afiController.new(addressvBIs8Na, {from: accounts[0]});
		const addressdVncGcE = accounts[0]
		const uintu0SHVty = BigInt("1532")
		const addressmEQEQhY = accounts[3]
		const addressMId6F1 = accounts[4]
		const addressLDGBBfu = accounts[0]
		const addresszN8Nlov = accounts[2]
		const addressVG93mgh = accounts[1]
		const addressvKFuVLa = "0x0000000000000000000000000000000000000001"
//		const addressvKpvTtt = await afiControllerRjQLmIf.setGovernance.call(addressdVncGcE, {from: accounts[5]});
//		const uintjqOiCGz = await afiControllerRjQLmIf.getExpectedReturn.call(addressMId6F1, addressmEQEQhY, uintu0SHVty, {from: accounts[0]});
//		const addressLKrDYRV = await afiControllerRjQLmIf.inCaseStrategyTokenGetStuck.call(addresszN8Nlov, addressLDGBBfu, {from: accounts[1]});
//		const addressP5JKjXQ = await afiControllerRjQLmIf.approveStrategy.call(addressvKFuVLa, addressVG93mgh, {from: accounts[4]});

		await expect(afiControllerRjQLmIf.setGovernance.call(addressdVncGcE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSRE0qO = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressSRE0qO, {from: accounts[0]});
		const uinthPc69rN = BigInt("225")
		const addressir0zg8g = accounts[1]
		const addressBA4aTga = accounts[4]
		const addressixBuoPf = "0x0000000000000000000000000000000000000001"
		const addressvNwF1Xz = "0x0000000000000000000000000000000000000001"
		const uintXhGns13 = BigInt("832")
		const addressfzMl5Eq = accounts[4]
		const addresstqLkfPB = accounts[1]
//		const address36ENBi = await afiControllerGUhhFcy.earn.call(addressir0zg8g, uinthPc69rN, {from: accounts[2]});
//		const addresspIDKzm3 = await afiControllerGUhhFcy.approveStrategy.call(addressixBuoPf, addressBA4aTga, {from: accounts[2]});
//		const uintRjURfPK = await afiControllerGUhhFcy.balanceOf.call(addressvNwF1Xz, {from: accounts[5]});
//		const addressjrLdV6h = await afiControllerGUhhFcy.yearn.call(addresstqLkfPB, addressfzMl5Eq, uintXhGns13, {from: accounts[1]});

		await expect(afiControllerGUhhFcy.earn.call(addressir0zg8g, uinthPc69rN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshnp3jhR = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addresshnp3jhR, {from: accounts[4]});
		const addressB6eEytR = "0x0000000000000000000000000000000000000001"
		const addressxHdx9TL = accounts[0]
		const uintDqwPQ9M = BigInt("264")
		const addressTCfkgTA = accounts[5]
		const addressdU6DrtT = accounts[4]
		const addressb9eNICD = "0x0000000000000000000000000000000000000001"
		const addressoLqAAch = await afiControllerzghUfSu.revokeStrategy.call(addressxHdx9TL, addressB6eEytR, {from: accounts[4]});
//		const addressRrWONFE = await afiControllerzghUfSu.withdraw.call(addressTCfkgTA, uintDqwPQ9M, {from: accounts[2]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addressb9eNICD, addressdU6DrtT, {from: accounts[4]});

		await expect(afiControllerzghUfSu.withdraw.call(addressTCfkgTA, uintDqwPQ9M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZXSyFSO = accounts[2]
		const afiControllerd6IFGni = await afiController.new(addressZXSyFSO, {from: "0x0000000000000000000000000000000000000001"});
		const addressH7Ng1af = accounts[1]
		const addressaK6GI9L = accounts[3]
		const addressFVcvWpA = accounts[3]
		const address7rVgvE = accounts[2]
		const uintNKoyfG0 = BigInt("1695")
		const addresswaA8Uoy = accounts[1]
		const uintWKG3AlA = BigInt("1776")
		const addressLLVJyCM = accounts[3]
		const addressp1Aq8P6 = await afiControllerd6IFGni.setConverter.call(addressFVcvWpA, addressaK6GI9L, addressH7Ng1af, {from: accounts[4]});
		const addresssZFp3pF = await afiControllerd6IFGni.withdrawAll.call(address7rVgvE, {from: accounts[4]});
		const addressL9eVMQM = await afiControllerd6IFGni.earn.call(addresswaA8Uoy, uintNKoyfG0, {from: accounts[0]});
		const addressnQAwsPM = await afiControllerd6IFGni.earn.call(addressLLVJyCM, uintWKG3AlA, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressVoAeLHr = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addressVoAeLHr, {from: accounts[4]});
		const addressz6CHfl = accounts[2]
		const addresslZQfKeo = "0x0000000000000000000000000000000000000001"
		const addressjab0fuw = accounts[1]
		const addressP46Hugk = accounts[0]
		const addressWvkkFG9 = accounts[4]
		const addressXwRsxmI = "0x0000000000000000000000000000000000000001"
//		const uintCqIn3Ld = await afiControllerzghUfSu.balanceOf.call(addressz6CHfl, {from: accounts[1]});
//		const addressoLqAAch = await afiControllerzghUfSu.revokeStrategy.call(addressjab0fuw, addresslZQfKeo, {from: accounts[4]});
//		const addressVaVwL6j = await afiControllerzghUfSu.setStrategist.call(addressP46Hugk, {from: accounts[5]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addressXwRsxmI, addressWvkkFG9, {from: accounts[4]});

		await expect(afiControllerzghUfSu.balanceOf.call(addressz6CHfl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIGA50Il = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressIGA50Il, {from: accounts[0]});
		const addressCfg43rp = accounts[4]
		const addressp27B8ju = "0x0000000000000000000000000000000000000001"
		const addressbIgXRBj = accounts[2]
		const uintShlyG2 = BigInt("832")
		const addresstOItd8U = accounts[4]
		const addressJ3cuw6T = accounts[1]
//		const addresspIDKzm3 = await afiControllerGUhhFcy.approveStrategy.call(addressp27B8ju, addressCfg43rp, {from: accounts[2]});
//		const uintRjURfPK = await afiControllerGUhhFcy.balanceOf.call(addressbIgXRBj, {from: accounts[5]});
//		const addressjrLdV6h = await afiControllerGUhhFcy.yearn.call(addressJ3cuw6T, addresstOItd8U, uintShlyG2, {from: accounts[1]});

		await expect(afiControllerGUhhFcy.approveStrategy.call(addressp27B8ju, addressCfg43rp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOPa5qt3 = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addressOPa5qt3, {from: accounts[4]});
		const addressMSUThR6 = "0x0000000000000000000000000000000000000001"
		const addressvUcvX1p = accounts[0]
		const uintGEpUNa4 = BigInt("233")
		const addressG4Wulfh = accounts[1]
		const addressdgxNUdZ = accounts[4]
		const uint74VqfI = BigInt("264")
		const addressIsGfpm = accounts[5]
		const addressffjqle = accounts[4]
		const addresstnLNg5X = accounts[1]
		const addressoLqAAch = await afiControllerzghUfSu.revokeStrategy.call(addressvUcvX1p, addressMSUThR6, {from: accounts[4]});
//		const addressapwhp9D = await afiControllerzghUfSu.yearn.call(addressdgxNUdZ, addressG4Wulfh, uintGEpUNa4, {from: accounts[4]});
//		const addressRrWONFE = await afiControllerzghUfSu.withdraw.call(addressIsGfpm, uint74VqfI, {from: accounts[2]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addresstnLNg5X, addressffjqle, {from: accounts[4]});

		await expect(afiControllerzghUfSu.yearn.call(addressdgxNUdZ, addressG4Wulfh, uintGEpUNa4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszF5hvjF = accounts[3]
		const afiControllerFlBfifo = await afiController.new(addresszF5hvjF, {from: accounts[1]});
		const addressrcH4pL0 = accounts[2]
		const addressWXVvRvJ = accounts[3]
		const addressf8plBVN = accounts[3]
		const uintVAwnsWO = BigInt("1551")
		const addressFpsDj0M = accounts[3]
		const addressovDObKR = accounts[4]
		const addressE1yeRUJ = accounts[3]
		const addressGYmiNw = await afiControllerFlBfifo.setConverter.call(addressf8plBVN, addressWXVvRvJ, addressrcH4pL0, {from: accounts[1]});
//		const uintFuklcO8 = await afiControllerFlBfifo.getExpectedReturn.call(addressovDObKR, addressFpsDj0M, uintVAwnsWO, {from: accounts[1]});
//		const addressMj3hTdG = await afiControllerFlBfifo.setStrategist.call(addressE1yeRUJ, {from: accounts[2]});

		await expect(afiControllerFlBfifo.getExpectedReturn.call(addressovDObKR, addressFpsDj0M, uintVAwnsWO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address3cK3yy = accounts[2]
		const afiControllergXiGQQ = await afiController.new(address3cK3yy, {from: accounts[4]});
		const addressdwQPih = accounts[3]
		const addressJGweKzd = accounts[0]
		const uintimpHSEu = BigInt("299")
		const addressfZzyZdh = accounts[0]
		const uintaoDSfI5 = BigInt("1104")
		const addressSCrnKK = accounts[2]
//		const addressi9mFd6p = await afiControllergXiGQQ.inCaseStrategyTokenGetStuck.call(addressJGweKzd, addressdwQPih, {from: accounts[3]});
//		const uintlrUcFwF = await afiControllergXiGQQ.setSplit.call(uintimpHSEu, {from: accounts[5]});
//		const addressUyvgjhF = await afiControllergXiGQQ.withdrawAll.call(addressfZzyZdh, {from: accounts[1]});
//		const uinttXlai2 = await afiControllergXiGQQ.setSplit.call(uintaoDSfI5, {from: accounts[1]});
//		const addresssVOBrd1 = await afiControllergXiGQQ.setRewards.call(addressSCrnKK, {from: accounts[4]});

		await expect(afiControllergXiGQQ.inCaseStrategyTokenGetStuck.call(addressJGweKzd, addressdwQPih, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresse5s2YGT = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addresse5s2YGT, {from: accounts[4]});
		const addresspH7tPUS = "0x0000000000000000000000000000000000000001"
		const addressCtVLEGv = accounts[0]
		const addresscn5QPDB = accounts[4]
		const uinta1UKDJg = BigInt("233")
		const addresslVhXAnA = accounts[1]
		const addressPOf6dI6 = accounts[4]
		const addressk4TlcI = accounts[0]
		const addresse2S3dtf = accounts[2]
		const uintP6awad0 = BigInt("264")
		const addressR0CEryy = accounts[5]
		const addressTAxFkGp = accounts[4]
		const addressr2TYwmw = accounts[2]
		const addressoLqAAch = await afiControllerzghUfSu.revokeStrategy.call(addressCtVLEGv, addresspH7tPUS, {from: accounts[4]});
//		const addressDjk4kjp = await afiControllerzghUfSu.setOneSplit.call(addresscn5QPDB, {from: accounts[3]});
//		const addressapwhp9D = await afiControllerzghUfSu.yearn.call(addressPOf6dI6, addresslVhXAnA, uinta1UKDJg, {from: accounts[4]});
//		const addressv6ZcZlJ = await afiControllerzghUfSu.revokeStrategy.call(addresse2S3dtf, addressk4TlcI, {from: accounts[0]});
//		const addressRrWONFE = await afiControllerzghUfSu.withdraw.call(addressR0CEryy, uintP6awad0, {from: accounts[2]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addressr2TYwmw, addressTAxFkGp, {from: accounts[4]});

		await expect(afiControllerzghUfSu.setOneSplit.call(addresscn5QPDB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQvxlppc = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressQvxlppc, {from: accounts[0]});
		const uintg0xeneZ = BigInt("1764")
		const addresspUXrTZ5 = accounts[2]
		const addresseNTdTaC = accounts[3]
		const addressvfO4NtP = accounts[3]
		const addressvTJC9CE = accounts[0]
		const uintu7mgWLa = BigInt("844")
		const addressMaoLnsX = accounts[2]
		const addresshtRe0u5 = accounts[1]
//		const addresskJyfKdM = await afiControllerGUhhFcy.inCaseTokensGetStuck.call(addresspUXrTZ5, uintg0xeneZ, {from: accounts[5]});
//		const addresspVhAyal = await afiControllerGUhhFcy.setConverter.call(addressvTJC9CE, addressvfO4NtP, addresseNTdTaC, {from: accounts[2]});
//		const addressjrLdV6h = await afiControllerGUhhFcy.yearn.call(addresshtRe0u5, addressMaoLnsX, uintu7mgWLa, {from: accounts[1]});

		await expect(afiControllerGUhhFcy.inCaseTokensGetStuck.call(addresspUXrTZ5, uintg0xeneZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBrBhdgk = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addressBrBhdgk, {from: accounts[4]});
		const addressuRBIjsR = "0x0000000000000000000000000000000000000001"
		const addressKycBBTS = accounts[0]
		const addressmnfBzTt = accounts[2]
		const uintDP2CjYj = BigInt("233")
		const addressUbZe0JJ = accounts[1]
		const addresszOEaZ6q = accounts[4]
		const uintIGhdWHu = BigInt("264")
		const addressRbSD3lm = accounts[5]
		const addressOIR0KQF = accounts[4]
		const addressv0Smegf = accounts[4]
		const addressChiQnsK = accounts[2]
		const addressoLqAAch = await afiControllerzghUfSu.revokeStrategy.call(addressKycBBTS, addressuRBIjsR, {from: accounts[4]});
//		const addressoxmkZTd = await afiControllerzghUfSu.setRewards.call(addressmnfBzTt, {from: accounts[0]});
//		const addressapwhp9D = await afiControllerzghUfSu.yearn.call(addresszOEaZ6q, addressUbZe0JJ, uintDP2CjYj, {from: accounts[4]});
//		const addressRrWONFE = await afiControllerzghUfSu.withdraw.call(addressRbSD3lm, uintIGhdWHu, {from: accounts[2]});
//		const uinttNRYT0S = await afiControllerzghUfSu.balanceOf.call(addressOIR0KQF, {from: accounts[2]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addressChiQnsK, addressv0Smegf, {from: accounts[4]});

		await expect(afiControllerzghUfSu.setRewards.call(addressmnfBzTt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressci3Qlm5 = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addressci3Qlm5, {from: accounts[4]});
		const addressfNZAJet = "0x0000000000000000000000000000000000000001"
		const addressTYVEU6 = accounts[0]
		const addressUvien9Q = accounts[1]
		const uintloKjEN2 = BigInt("1658")
		const addressyCgQrWM = accounts[1]
		const uinthWMOYYU = BigInt("233")
		const addressnz125v6 = accounts[2]
		const addressXTci9jx = accounts[4]
		const uint0gv4ZP = BigInt("264")
		const addressxbdY3PK = accounts[5]
		const uintqgtv9fP = BigInt("910")
		const addressjyceAx2 = accounts[1]
		const addressRi6mXTC = accounts[1]
		const addressSsBzlmo = accounts[3]
		const addressPR2TcI1 = accounts[5]
		const addressEUma8n4 = accounts[4]
		const addresswK7Tbwx = accounts[1]
		const addressoLqAAch = await afiControllerzghUfSu.revokeStrategy.call(addressTYVEU6, addressfNZAJet, {from: accounts[4]});
		const addressm4zyenX = await afiControllerzghUfSu.setStrategist.call(addressUvien9Q, {from: accounts[4]});
//		const addresseyiH8LH = await afiControllerzghUfSu.earn.call(addressyCgQrWM, uintloKjEN2, {from: accounts[2]});
//		const addressapwhp9D = await afiControllerzghUfSu.yearn.call(addressXTci9jx, addressnz125v6, uinthWMOYYU, {from: accounts[4]});
//		const addressRrWONFE = await afiControllerzghUfSu.withdraw.call(addressxbdY3PK, uint0gv4ZP, {from: accounts[2]});
//		const addresskMLAhWj = await afiControllerzghUfSu.yearn.call(addressRi6mXTC, addressjyceAx2, uintqgtv9fP, {from: accounts[3]});
//		const addressfpmJ1Uj = await afiControllerzghUfSu.inCaseStrategyTokenGetStuck.call(addressPR2TcI1, addressSsBzlmo, {from: accounts[4]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addresswK7Tbwx, addressEUma8n4, {from: accounts[4]});

		await expect(afiControllerzghUfSu.earn.call(addressyCgQrWM, uintloKjEN2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmEC6EXs = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressmEC6EXs, {from: accounts[0]});
		const addressDIE3rJz = "0x0000000000000000000000000000000000000001"
		const addressMP5XM79 = accounts[5]
		const uintndVIGKV = BigInt("709")
		const addressIvZEtE4 = accounts[2]
		const addressv9KM2nK = accounts[0]
		const uintkxvj7X7 = BigInt("237")
		const addressiKyidaY = "0x0000000000000000000000000000000000000001"
		const address3SHTV7 = await afiControllerGUhhFcy.approveStrategy.call(addressMP5XM79, addressDIE3rJz, {from: accounts[0]});
//		const uintfQnUUIr = await afiControllerGUhhFcy.getExpectedReturn.call(addressv9KM2nK, addressIvZEtE4, uintndVIGKV, {from: accounts[2]});
//		const address36ENBi = await afiControllerGUhhFcy.earn.call(addressiKyidaY, uintkxvj7X7, {from: accounts[2]});

		await expect(afiControllerGUhhFcy.getExpectedReturn.call(addressv9KM2nK, addressIvZEtE4, uintndVIGKV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressD7OV8L = accounts[5]
		const afiControllerfzAfzVO = await afiController.new(addressD7OV8L, {from: accounts[5]});
		const addressI4Cqyz = accounts[4]
		const addressrWgnHpy = accounts[1]
		const addressW7ILsww = accounts[0]
		const addressHDNkqnn = accounts[0]
//		const addressb09sqv7 = await afiControllerfzAfzVO.withdrawAll.call(addressI4Cqyz, {from: accounts[5]});
//		const addressoBRKD87 = await afiControllerfzAfzVO.setStrategy.call(addressW7ILsww, addressrWgnHpy, {from: accounts[3]});
//		const addressjONfuFq = await afiControllerfzAfzVO.withdrawAll.call(addressHDNkqnn, {from: accounts[3]});

		await expect(afiControllerfzAfzVO.withdrawAll.call(addressI4Cqyz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPjkYRj4 = "0x0000000000000000000000000000000000000001"
		const afiControllerRjQLmIf = await afiController.new(addressPjkYRj4, {from: accounts[0]});
		const uintPKQ2MyK = BigInt("1632")
		const addressy2Hck5A = accounts[1]
		const addresstwru4Rt = accounts[1]
		const addressn8xp4cd = accounts[0]
		const addressJRe5HOQ = accounts[3]
//		const uintA4tUvG = await afiControllerRjQLmIf.setSplit.call(uintPKQ2MyK, {from: accounts[2]});
//		const addressHrNja7Q = await afiControllerRjQLmIf.setGovernance.call(addressy2Hck5A, {from: accounts[3]});
//		const addressvKpvTtt = await afiControllerRjQLmIf.setGovernance.call(addresstwru4Rt, {from: accounts[5]});
//		const addressLKrDYRV = await afiControllerRjQLmIf.inCaseStrategyTokenGetStuck.call(addressJRe5HOQ, addressn8xp4cd, {from: accounts[1]});

		await expect(afiControllerRjQLmIf.setSplit.call(uintPKQ2MyK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseCxEW2C = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addresseCxEW2C, {from: accounts[0]});
		const uintjrUs0N7 = BigInt("215")
		const uintv3lfn8f = BigInt("259")
		const addresslQzFYmi = accounts[1]
		const uintxG3IsWg = await afiControllerGUhhFcy.setSplit.call(uintjrUs0N7, {from: accounts[0]});
//		const address36ENBi = await afiControllerGUhhFcy.earn.call(addresslQzFYmi, uintv3lfn8f, {from: accounts[2]});

		await expect(afiControllerGUhhFcy.earn.call(addresslQzFYmi, uintv3lfn8f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOYyM3Mh = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addressOYyM3Mh, {from: accounts[4]});
		const addressvXsYtN = accounts[4]
		const uintU9Mt3FJ = BigInt("233")
		const addressKaey46 = accounts[3]
		const addressGpFk6GQ = accounts[4]
		const uint74DQbj = BigInt("264")
		const addresshqLJu7Y = accounts[5]
		const uintS800WYZ = BigInt("1450")
		const addresshZODNk = accounts[0]
		const addressCFyME2C = accounts[4]
		const addressJzCKJQM = accounts[4]
		const addressem0avRJ = accounts[1]
		const addressdnCrf2 = await afiControllerzghUfSu.setOneSplit.call(addressvXsYtN, {from: accounts[4]});
//		const addressapwhp9D = await afiControllerzghUfSu.yearn.call(addressGpFk6GQ, addressKaey46, uintU9Mt3FJ, {from: accounts[4]});
//		const addressRrWONFE = await afiControllerzghUfSu.withdraw.call(addresshqLJu7Y, uint74DQbj, {from: accounts[2]});
//		const addressHtDiqTv = await afiControllerzghUfSu.yearn.call(addressCFyME2C, addresshZODNk, uintS800WYZ, {from: accounts[3]});
//		const address3VzRoE = await afiControllerzghUfSu.approveStrategy.call(addressem0avRJ, addressJzCKJQM, {from: accounts[4]});

		await expect(afiControllerzghUfSu.yearn.call(addressGpFk6GQ, addressKaey46, uintU9Mt3FJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvoq131O = "0x0000000000000000000000000000000000000001"
		const afiControllerpRnfJTf = await afiController.new(addressvoq131O, {from: accounts[0]});
		const addressKOvYX8q = accounts[0]
		const addressOcP9fI0 = accounts[1]
		const addressoE7EAO = accounts[3]
		const uintrRkN94 = BigInt("581")
		const addressaLoacaM = accounts[4]
//		const addressjKfpQmn = await afiControllerpRnfJTf.setVault.call(addressOcP9fI0, addressKOvYX8q, {from: accounts[5]});
//		const addressKud914 = await afiControllerpRnfJTf.withdrawAll.call(addressoE7EAO, {from: accounts[3]});
//		const addresssWo1CY = await afiControllerpRnfJTf.inCaseTokensGetStuck.call(addressaLoacaM, uintrRkN94, {from: accounts[0]});

		await expect(afiControllerpRnfJTf.setVault.call(addressOcP9fI0, addressKOvYX8q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressI431F7 = "0x0000000000000000000000000000000000000001"
		const afiControllerRjQLmIf = await afiController.new(addressI431F7, {from: accounts[0]});
		const addressclvWp8Z = accounts[1]
		const addressAxht4u7 = accounts[4]
		const addressEyofuvu = "0x0000000000000000000000000000000000000001"
		const addresssDlDyEz = accounts[3]
		const addressHMz2WJI = accounts[2]
		const addressiDrbz9O = await afiControllerRjQLmIf.setGovernance.call(addressclvWp8Z, {from: accounts[0]});
//		const addressiyHNWIh = await afiControllerRjQLmIf.inCaseStrategyTokenGetStuck.call(addressEyofuvu, addressAxht4u7, {from: accounts[4]});
//		const addressLKrDYRV = await afiControllerRjQLmIf.inCaseStrategyTokenGetStuck.call(addressHMz2WJI, addresssDlDyEz, {from: accounts[1]});

		await expect(afiControllerRjQLmIf.inCaseStrategyTokenGetStuck.call(addressEyofuvu, addressAxht4u7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSsfVPAi = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressSsfVPAi, {from: accounts[0]});
		const addressDfC8Iog = "0x0000000000000000000000000000000000000001"
		const address7PyzcN = accounts[3]
		const uintWDaC3Hi = BigInt("414")
		const addresstXfrkP1 = accounts[1]
		const uintewUhvvx = BigInt("225")
		const addressAiXKHc = accounts[1]
		const uintAFFrEUf = BigInt("1867")
		const addressK6kja66 = accounts[3]
		const addressjIUnQD7 = accounts[0]
		const addressXirPcxn = await afiControllerGUhhFcy.setVault.call(address7PyzcN, addressDfC8Iog, {from: accounts[0]});
//		const addressaHVXEeG = await afiControllerGUhhFcy.earn.call(addresstXfrkP1, uintWDaC3Hi, {from: accounts[3]});
//		const address36ENBi = await afiControllerGUhhFcy.earn.call(addressAiXKHc, uintewUhvvx, {from: accounts[2]});
//		const uintEhu2ucQ = await afiControllerGUhhFcy.getExpectedReturn.call(addressjIUnQD7, addressK6kja66, uintAFFrEUf, {from: accounts[2]});

		await expect(afiControllerGUhhFcy.earn.call(addresstXfrkP1, uintWDaC3Hi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFl0FnUp = accounts[2]
		const afiControllerzghUfSu = await afiController.new(addressFl0FnUp, {from: accounts[4]});
		const uintXedgHt7 = BigInt("100")
		const addressZQjQ7xU = accounts[1]
		const uinte7Ov6MM = BigInt("233")
		const addressA7MnxEw = accounts[2]
		const addressYvBKETs = accounts[4]
		const addresswa5ZX6n = accounts[4]
		const addressso2zKWp = "0x0000000000000000000000000000000000000001"
//		const addressxRiZMj = await afiControllerzghUfSu.inCaseTokensGetStuck.call(addressZQjQ7xU, uintXedgHt7, {from: accounts[4]});
//		const addressapwhp9D = await afiControllerzghUfSu.yearn.call(addressYvBKETs, addressA7MnxEw, uinte7Ov6MM, {from: accounts[4]});
//		const addressb41lzEl = await afiControllerzghUfSu.setVault.call(addressso2zKWp, addresswa5ZX6n, {from: accounts[2]});

		await expect(afiControllerzghUfSu.inCaseTokensGetStuck.call(addressZQjQ7xU, uintXedgHt7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressw8EgwNq = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressw8EgwNq, {from: accounts[0]});
		const addressvDXndYW = accounts[5]
		const addressQUaYXjH = accounts[3]
		const uintlPvsBTi = BigInt("225")
		const addresstD0VCS1 = accounts[1]
		const addressQkazAlv = "0x0000000000000000000000000000000000000001"
		const addresst62rzzl = accounts[0]
		const addressTaXRc11 = accounts[5]
//		const addressCB8JUpH = await afiControllerGUhhFcy.inCaseStrategyTokenGetStuck.call(addressQUaYXjH, addressvDXndYW, {from: accounts[0]});
//		const address36ENBi = await afiControllerGUhhFcy.earn.call(addresstD0VCS1, uintlPvsBTi, {from: accounts[2]});
//		const addresspOcMWop = await afiControllerGUhhFcy.setOneSplit.call(addressQkazAlv, {from: accounts[3]});
//		const addressLoGLXhq = await afiControllerGUhhFcy.revokeStrategy.call(addressTaXRc11, addresst62rzzl, {from: accounts[3]});

		await expect(afiControllerGUhhFcy.inCaseStrategyTokenGetStuck.call(addressQUaYXjH, addressvDXndYW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressexjW6mu = accounts[2]
		const afiControllerGUhhFcy = await afiController.new(addressexjW6mu, {from: accounts[0]});
		const addressfVoQTbg = accounts[5]
		const uinta8mPF9Y = BigInt("1842")
		const addresszLvwYVL = "0x0000000000000000000000000000000000000001"
		const addressiwiO2dp = accounts[5]
		const addresszgdIUvJ = await afiControllerGUhhFcy.setRewards.call(addressfVoQTbg, {from: accounts[0]});
//		const addresstfbBiDv = await afiControllerGUhhFcy.earn.call(addresszLvwYVL, uinta8mPF9Y, {from: accounts[4]});
//		const addressTZioKw2 = await afiControllerGUhhFcy.setRewards.call(addressiwiO2dp, {from: accounts[2]});

		await expect(afiControllerGUhhFcy.earn.call(addresszLvwYVL, uinta8mPF9Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})