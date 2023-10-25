const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressGrF22MK = "0x0000000000000000000000000000000000000001"
		const Controller53PuLK = await Controller.new(addressGrF22MK, {from: accounts[3]});
		const addressAZPAK1m = accounts[3]
		const addressQsurNnD = accounts[4]
		const addresshimmSQ = accounts[3]
		const address6yeUkC = accounts[3]
		const addressH4MGket = accounts[0]
		const addressPnoaD6Q = accounts[0]
		const addressdQAV6o1 = accounts[5]
//		const addresstmiMJXc = await Controller53PuLK.setVault.call(addressQsurNnD, addressAZPAK1m, {from: accounts[0]});
//		const addressQNhV0Wj = await Controller53PuLK.approveStrategy.call(address6yeUkC, addresshimmSQ, {from: accounts[5]});
//		const addressbvfg3Mt = await Controller53PuLK.setStrategist.call(addressH4MGket, {from: accounts[0]});
//		const addressQVfDsYx = await Controller53PuLK.inCaseStrategyTokenGetStuck.call(addressdQAV6o1, addressPnoaD6Q, {from: accounts[2]});

		await expect(Controller53PuLK.setVault.call(addressQsurNnD, addressAZPAK1m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslBKRrjl = accounts[5]
		const ControllerqzDUvPX = await Controller.new(addresslBKRrjl, {from: accounts[1]});
		const uintBOKaUsY = BigInt("1071")
		const addresszvUjyjC = accounts[1]
		const addressKs7jIrr = accounts[5]
		const addressnsyxHNu = accounts[0]
		const addresshNZkE60 = accounts[3]
		const uint7fziSh = BigInt("841")
		const addressSIVMHAu = accounts[5]
		const addressMHjFXRC = accounts[2]
		const addressaiqlfaf = accounts[1]
		const addresseDTO9Up = accounts[1]
		const uintiA6n5f8 = BigInt("1854")
		const addressUVbvNF3 = accounts[3]
		const addressFGFMyY = accounts[3]
//		const uintVlTkST5 = await ControllerqzDUvPX.getExpectedReturn.call(addressKs7jIrr, addresszvUjyjC, uintBOKaUsY, {from: accounts[2]});
//		const addresslIKO6a = await ControllerqzDUvPX.approveStrategy.call(addresshNZkE60, addressnsyxHNu, {from: accounts[1]});
//		const uintkbGbmQy = await ControllerqzDUvPX.getExpectedReturn.call(addressMHjFXRC, addressSIVMHAu, uint7fziSh, {from: accounts[5]});
//		const addressOa5XpAI = await ControllerqzDUvPX.setStrategy.call(addresseDTO9Up, addressaiqlfaf, {from: "0x0000000000000000000000000000000000000001"});
//		const uintr4O7n1C = await ControllerqzDUvPX.getExpectedReturn.call(addressFGFMyY, addressUVbvNF3, uintiA6n5f8, {from: accounts[2]});

		await expect(ControllerqzDUvPX.getExpectedReturn.call(addressKs7jIrr, addresszvUjyjC, uintBOKaUsY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEzmYPcQ = accounts[3]
		const ControllerHs9dtRE = await Controller.new(addressEzmYPcQ, {from: accounts[2]});
		const addressKfxiQlw = accounts[4]
		const addressvILUcCj = accounts[0]
		const uintrjkzOT8 = BigInt("891")
		const addressDlWBkya = accounts[0]
		const addressFs6ogxB = accounts[2]
		const addressgYFG7gV = accounts[4]
//		const addressbRww2dD = await ControllerHs9dtRE.inCaseStrategyTokenGetStuck.call(addressvILUcCj, addressKfxiQlw, {from: accounts[3]});
//		const addressXlWp2L = await ControllerHs9dtRE.inCaseTokensGetStuck.call(addressDlWBkya, uintrjkzOT8, {from: accounts[0]});
//		const addresserqtXeR = await ControllerHs9dtRE.approveStrategy.call(addressgYFG7gV, addressFs6ogxB, {from: accounts[0]});

		await expect(ControllerHs9dtRE.inCaseStrategyTokenGetStuck.call(addressvILUcCj, addressKfxiQlw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqiHdMQ = accounts[1]
		const ControllerLqFDrq = await Controller.new(addressqiHdMQ, {from: accounts[1]});
		const addressHZlJtUM = accounts[0]
		const addressgEMluoN = accounts[1]
		const uinttdtv45U = BigInt("1328")
		const addressvSA0EzX = accounts[4]
		const addressZvYgmto = accounts[1]
		const addressSjhxJZj = accounts[0]
		const addressIRqn6qK = accounts[1]
//		const addresssOXsguq = await ControllerLqFDrq.setStrategist.call(addressHZlJtUM, {from: accounts[0]});
//		const addressYxHa8XT = await ControllerLqFDrq.setGovernance.call(addressgEMluoN, {from: accounts[2]});
//		const uintNLOzaHV = await ControllerLqFDrq.getExpectedReturn.call(addressZvYgmto, addressvSA0EzX, uinttdtv45U, {from: accounts[3]});
//		const addresslyAzGe6 = await ControllerLqFDrq.setOneSplit.call(addressSjhxJZj, {from: accounts[2]});
//		const addressjVG0ZUR = await ControllerLqFDrq.setStrategist.call(addressIRqn6qK, {from: accounts[5]});

		await expect(ControllerLqFDrq.setStrategist.call(addressHZlJtUM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjimEdB4 = accounts[3]
		const ControllerOecsJPP = await Controller.new(addressjimEdB4, {from: accounts[3]});
		const addressP4soJ4M = accounts[2]
		const addresshT8p6X = accounts[1]
		const addressjoF3xJi = await ControllerOecsJPP.setGovernance.call(addressP4soJ4M, {from: accounts[3]});
//		const addressxNICOWZ = await ControllerOecsJPP.setGovernance.call(addresshT8p6X, {from: accounts[0]});

		await expect(ControllerOecsJPP.setGovernance.call(addresshT8p6X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYfwEysq = accounts[1]
		const ControllerIGe7JsN = await Controller.new(addressYfwEysq, {from: accounts[4]});
		const addressiXLcCm = accounts[5]
		const addressaXxqmuU = accounts[0]
		const addressSamSkRq = accounts[2]
//		const addressmnHSLil = await ControllerIGe7JsN.withdrawAll.call(addressiXLcCm, {from: accounts[1]});
//		const addressZrCyMxa = await ControllerIGe7JsN.setStrategy.call(addressSamSkRq, addressaXxqmuU, {from: accounts[0]});

		await expect(ControllerIGe7JsN.withdrawAll.call(addressiXLcCm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLj3BWeE = accounts[3]
		const ControllerrRLxcsJ = await Controller.new(addressLj3BWeE, {from: accounts[4]});
		const addressvcaDomj = accounts[2]
		const addressnKn1sKL = accounts[4]
		const addressJYhvnra = accounts[1]
		const uintsyM0yw = BigInt("93")
		const addressSSvVMqT = accounts[4]
		const address7nUyIH = accounts[0]
		const uintDMss4qK = BigInt("192")
		const addresslg5l2H1 = accounts[3]
		const addressI8IiI8N = accounts[2]
		const addressSotQV8Z = await ControllerrRLxcsJ.setConverter.call(addressJYhvnra, addressnKn1sKL, addressvcaDomj, {from: accounts[4]});
//		const addressoondAnj = await ControllerrRLxcsJ.yearn.call(address7nUyIH, addressSSvVMqT, uintsyM0yw, {from: accounts[5]});
//		const uintnDXBRZu = await ControllerrRLxcsJ.getExpectedReturn.call(addressI8IiI8N, addresslg5l2H1, uintDMss4qK, {from: accounts[4]});

		await expect(ControllerrRLxcsJ.yearn.call(address7nUyIH, addressSSvVMqT, uintsyM0yw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYwtPGQA = accounts[2]
		const ControllerpJllGGc = await Controller.new(addressYwtPGQA, {from: accounts[2]});
		const uintLA8AXan = BigInt("2043")
		const addressjoyWxr6 = accounts[0]
		const addresskAEbrYq = accounts[2]
		const addressISRkCPF = accounts[0]
		const addressR09zsR0 = accounts[0]
//		const uintSIWxMO8 = await ControllerpJllGGc.setSplit.call(uintLA8AXan, {from: accounts[0]});
//		const addressGrs6nYs = await ControllerpJllGGc.withdrawAll.call(addressjoyWxr6, {from: accounts[4]});
//		const addressy22xLMt = await ControllerpJllGGc.setOneSplit.call(addresskAEbrYq, {from: accounts[0]});
//		const uintqaHqMsg = await ControllerpJllGGc.balanceOf.call(addressISRkCPF, {from: accounts[5]});
//		const addressvojb1wR = await ControllerpJllGGc.withdrawAll.call(addressR09zsR0, {from: accounts[1]});

		await expect(ControllerpJllGGc.setSplit.call(uintLA8AXan, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressB60fo16 = accounts[0]
		const ControllergE79K01 = await Controller.new(addressB60fo16, {from: accounts[1]});
		const addressfju6wUR = accounts[4]
		const addressFSPMfUU = accounts[3]
		const address0MmnWN = accounts[4]
		const uintlGfaZST = BigInt("305")
		const addressalKDwsi = accounts[4]
		const addressWf2Pzwm = accounts[2]
		const addressm0jUWF6 = "0x0000000000000000000000000000000000000001"
		const addressaGulF78 = accounts[5]
		const addressCfMGw4x = accounts[3]
		const addressp0A1ms6 = accounts[5]
//		const addressatZkXbE = await ControllergE79K01.approveStrategy.call(addressFSPMfUU, addressfju6wUR, {from: accounts[3]});
//		const addressqdT1xF = await ControllergE79K01.setRewards.call(address0MmnWN, {from: accounts[5]});
//		const addressDiWFQ3q = await ControllergE79K01.yearn.call(addressWf2Pzwm, addressalKDwsi, uintlGfaZST, {from: accounts[2]});
//		const addresskyCIfgG = await ControllergE79K01.setStrategy.call(addressaGulF78, addressm0jUWF6, {from: accounts[0]});
//		const addressfAbygpQ = await ControllergE79K01.setGovernance.call(addressCfMGw4x, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgtOSe0B = await ControllergE79K01.withdrawAll.call(addressp0A1ms6, {from: accounts[4]});

		await expect(ControllergE79K01.approveStrategy.call(addressFSPMfUU, addressfju6wUR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAzlGrx4 = accounts[2]
		const ControllerZ1lgCch = await Controller.new(addressAzlGrx4, {from: accounts[0]});
		const addressQsjWYW1 = accounts[1]
		const addressiOmaMen = accounts[3]
		const addressLtDUI6X = accounts[0]
//		const uintCIpTSIn = await ControllerZ1lgCch.balanceOf.call(addressQsjWYW1, {from: accounts[0]});
//		const addresso6mY7LN = await ControllerZ1lgCch.setGovernance.call(addressiOmaMen, {from: accounts[3]});
//		const addressRczuc8q = await ControllerZ1lgCch.setGovernance.call(addressLtDUI6X, {from: accounts[0]});

		await expect(ControllerZ1lgCch.balanceOf.call(addressQsjWYW1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrX4ocHA = accounts[3]
		const ControllerrRLxcsJ = await Controller.new(addressrX4ocHA, {from: accounts[4]});
		const address5wYHhl = accounts[2]
		const addressBbdJRIz = accounts[4]
		const addresse4Y7kil = accounts[1]
		const addressCPT1S4M = accounts[1]
		const uintdKlAd7 = BigInt("1586")
		const addresslliSCD6 = accounts[2]
		const uintBxTtfL = BigInt("188")
		const addressRzMNgi6 = accounts[3]
		const addressY9WIGI5 = accounts[2]
		const addressSotQV8Z = await ControllerrRLxcsJ.setConverter.call(addresse4Y7kil, addressBbdJRIz, address5wYHhl, {from: accounts[4]});
		const addresskXDnU1l = await ControllerrRLxcsJ.setOneSplit.call(addressCPT1S4M, {from: accounts[4]});
//		const addressIcEsqHJ = await ControllerrRLxcsJ.earn.call(addresslliSCD6, uintdKlAd7, {from: accounts[2]});
//		const uintnDXBRZu = await ControllerrRLxcsJ.getExpectedReturn.call(addressY9WIGI5, addressRzMNgi6, uintBxTtfL, {from: accounts[4]});

		await expect(ControllerrRLxcsJ.earn.call(addresslliSCD6, uintdKlAd7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJeSzZtC = accounts[3]
		const ControllerrRLxcsJ = await Controller.new(addressJeSzZtC, {from: accounts[4]});
		const addressY81Sr0N = accounts[2]
		const addresstXBxrhW = accounts[4]
		const addressvyiZpr = accounts[1]
		const addressa2XkufX = accounts[2]
		const addresslQKdgOe = accounts[0]
		const uintBm4k62T = BigInt("85")
		const addressMShyKR3 = accounts[5]
		const addressQVuv1zQ = accounts[0]
		const addressq6maprK = accounts[3]
		const addressxK9D9fE = accounts[4]
		const uintjDm09OQ = BigInt("192")
		const addressxKnBkvg = accounts[4]
		const addressKkOxIow = accounts[2]
		const addressSotQV8Z = await ControllerrRLxcsJ.setConverter.call(addressvyiZpr, addresstXBxrhW, addressY81Sr0N, {from: accounts[4]});
//		const addressik1vNW3 = await ControllerrRLxcsJ.revokeStrategy.call(addresslQKdgOe, addressa2XkufX, {from: accounts[1]});
//		const addressoondAnj = await ControllerrRLxcsJ.yearn.call(addressQVuv1zQ, addressMShyKR3, uintBm4k62T, {from: accounts[5]});
//		const addressx3GKlYV = await ControllerrRLxcsJ.revokeStrategy.call(addressxK9D9fE, addressq6maprK, {from: accounts[2]});
//		const uintnDXBRZu = await ControllerrRLxcsJ.getExpectedReturn.call(addressKkOxIow, addressxKnBkvg, uintjDm09OQ, {from: accounts[4]});

		await expect(ControllerrRLxcsJ.revokeStrategy.call(addresslQKdgOe, addressa2XkufX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIS69LdD = accounts[3]
		const ControllerrRLxcsJ = await Controller.new(addressIS69LdD, {from: accounts[4]});
		const addressNx1sLdN = accounts[2]
		const addressZE0IDp5 = accounts[4]
		const addresspEgXgOz = accounts[1]
		const addressWrMia7B = accounts[2]
		const uintzExdUoQ = BigInt("85")
		const addressOpQqJbH = accounts[4]
		const addressPPPfRRq = accounts[0]
		const uintH6uwR2b = BigInt("192")
		const addressFmo3Nvr = accounts[3]
		const addresswNJDtq = accounts[2]
		const addressSotQV8Z = await ControllerrRLxcsJ.setConverter.call(addresspEgXgOz, addressZE0IDp5, addressNx1sLdN, {from: accounts[4]});
		const addressaGdUiAG = await ControllerrRLxcsJ.setRewards.call(addressWrMia7B, {from: accounts[4]});
//		const addressoondAnj = await ControllerrRLxcsJ.yearn.call(addressPPPfRRq, addressOpQqJbH, uintzExdUoQ, {from: accounts[5]});
//		const uintnDXBRZu = await ControllerrRLxcsJ.getExpectedReturn.call(addresswNJDtq, addressFmo3Nvr, uintH6uwR2b, {from: accounts[4]});

		await expect(ControllerrRLxcsJ.yearn.call(addressPPPfRRq, addressOpQqJbH, uintzExdUoQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswRzr1X = "0x0000000000000000000000000000000000000001"
		const ControllerfOU2jL = await Controller.new(addresswRzr1X, {from: accounts[3]});
		const uintV3P6VFb = BigInt("530")
		const addressu6fjtpk = accounts[4]
		const addressYEdEYR2 = accounts[1]
		const addresstmZPcdR = accounts[1]
		const address6H4sTq = accounts[5]
		const addressEh1bO5M = accounts[1]
		const addressy35EeB = "0x0000000000000000000000000000000000000001"
		const addressjTDhVHG = accounts[3]
		const addressqJA5mqL = accounts[4]
//		const addressI2uHxQX = await ControllerfOU2jL.inCaseTokensGetStuck.call(addressu6fjtpk, uintV3P6VFb, {from: accounts[0]});
//		const addressyIpzXf3 = await ControllerfOU2jL.setConverter.call(address6H4sTq, addresstmZPcdR, addressYEdEYR2, {from: accounts[0]});
//		const addressIRQl5X4 = await ControllerfOU2jL.withdrawAll.call(addressEh1bO5M, {from: accounts[3]});
//		const addresswdjUj9I = await ControllerfOU2jL.approveStrategy.call(addressjTDhVHG, addressy35EeB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZAnP8pe = await ControllerfOU2jL.setStrategist.call(addressqJA5mqL, {from: accounts[1]});

		await expect(ControllerfOU2jL.inCaseTokensGetStuck.call(addressu6fjtpk, uintV3P6VFb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressid6nRO = accounts[2]
		const ControllerUJRYvww = await Controller.new(addressid6nRO, {from: accounts[3]});
		const addressA2MDpcw = accounts[4]
		const addressMVXAIT = "0x0000000000000000000000000000000000000001"
		const uintAEHOcU = BigInt("475")
		const addressfJMk2kh = accounts[2]
		const addressfo8qV3P = accounts[0]
		const address6tHw8t = accounts[5]
		const addresso5YOk0p = accounts[1]
		const addressCeK7ZUm = accounts[0]
//		const addressUJVX5SY = await ControllerUJRYvww.setStrategy.call(addressMVXAIT, addressA2MDpcw, {from: accounts[2]});
//		const uintKx3nVA = await ControllerUJRYvww.setSplit.call(uintAEHOcU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOwNpev9 = await ControllerUJRYvww.revokeStrategy.call(addressfo8qV3P, addressfJMk2kh, {from: accounts[1]});
//		const addressRxHziF = await ControllerUJRYvww.setOneSplit.call(address6tHw8t, {from: accounts[0]});
//		const addressfaJ207G = await ControllerUJRYvww.revokeStrategy.call(addressCeK7ZUm, addresso5YOk0p, {from: accounts[1]});

		await expect(ControllerUJRYvww.setStrategy.call(addressMVXAIT, addressA2MDpcw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssA5BwzX = accounts[1]
		const ControllerFByQCT = await Controller.new(addresssA5BwzX, {from: accounts[1]});
		const uintHD04kEz = BigInt("919")
		const addressbaDnCT = accounts[3]
		const uintx0un53Z = BigInt("669")
		const addressJjK1BvY = accounts[2]
		const addressMaA7j1U = "0x0000000000000000000000000000000000000001"
		const addresshpHaGMK = accounts[2]
		const addressDXtePiW = accounts[5]
		const addressiuRSrci = "0x0000000000000000000000000000000000000001"
		const addressXbWQLLp = accounts[0]
		const addressrA3SLAf = accounts[2]
		const addressubrHEJi = accounts[1]
		const addressdv6RJAp = accounts[0]
		const addresskdCYg22 = accounts[0]
//		const addressWiw4Fp = await ControllerFByQCT.inCaseTokensGetStuck.call(addressbaDnCT, uintHD04kEz, {from: accounts[1]});
//		const addressjz0gqRr = await ControllerFByQCT.yearn.call(addressMaA7j1U, addressJjK1BvY, uintx0un53Z, {from: accounts[0]});
//		const addresstmyr0e = await ControllerFByQCT.inCaseStrategyTokenGetStuck.call(addressDXtePiW, addresshpHaGMK, {from: accounts[4]});
//		const addressgadCFR9 = await ControllerFByQCT.approveStrategy.call(addressXbWQLLp, addressiuRSrci, {from: accounts[1]});
//		const addressZLgyvC2 = await ControllerFByQCT.revokeStrategy.call(addressubrHEJi, addressrA3SLAf, {from: accounts[0]});
//		const addressKtWooPo = await ControllerFByQCT.setStrategy.call(addresskdCYg22, addressdv6RJAp, {from: accounts[1]});

		await expect(ControllerFByQCT.inCaseTokensGetStuck.call(addressbaDnCT, uintHD04kEz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressX9WLeef = accounts[3]
		const ControllerOecsJPP = await Controller.new(addressX9WLeef, {from: accounts[3]});
		const addressashZpx = accounts[3]
		const addressTxZ11x = accounts[4]
		const addressXZuqdEZ = accounts[4]
		const addressvrE8T8K = "0x0000000000000000000000000000000000000001"
		const addressYXtmac3 = accounts[3]
		const uinteDXHy4F = BigInt("659")
		const addressxCQAQrc = accounts[4]
		const addressjXAfwQw = accounts[4]
		const addressIgOk75e = accounts[3]
		const uintuozlzhJ = BigInt("1956")
		const addressGWZoUE9 = accounts[5]
		const addresscSicZw = accounts[3]
//		const addresspBoeU9K = await ControllerOecsJPP.setStrategy.call(addressTxZ11x, addressashZpx, {from: accounts[3]});
//		const addressa0TG2su = await ControllerOecsJPP.setConverter.call(addressYXtmac3, addressvrE8T8K, addressXZuqdEZ, {from: accounts[0]});
//		const addressPtHJmeI = await ControllerOecsJPP.yearn.call(addressjXAfwQw, addressxCQAQrc, uinteDXHy4F, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjoF3xJi = await ControllerOecsJPP.setGovernance.call(addressIgOk75e, {from: accounts[3]});
//		const addressYl1dQmR = await ControllerOecsJPP.yearn.call(addresscSicZw, addressGWZoUE9, uintuozlzhJ, {from: accounts[0]});

		await expect(ControllerOecsJPP.setStrategy.call(addressTxZ11x, addressashZpx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfW8W1V = accounts[2]
		const ControllerMu1sRQr = await Controller.new(addressfW8W1V, {from: "0x0000000000000000000000000000000000000001"});
		const uintzNg3Rf4 = BigInt("1093")
		const addressEzHXhfD = accounts[3]
		const addressc34fy2v = accounts[1]
		const addresssIhp2IJ = await ControllerMu1sRQr.withdraw.call(addressEzHXhfD, uintzNg3Rf4, {from: accounts[0]});
		const addressFhBWaR = await ControllerMu1sRQr.withdrawAll.call(addressc34fy2v, {from: accounts[4]});
	});

	it('test for Controller', async () => {
		const addressAmueeM5 = accounts[3]
		const ControllerrRLxcsJ = await Controller.new(addressAmueeM5, {from: accounts[4]});
		const uintmWITldN = BigInt("664")
		const addressNJSu5n = accounts[0]
		const uintLKrG58d = BigInt("1586")
		const addressYK6HiP3 = accounts[2]
		const addressmRjivDv = accounts[4]
		const addressZLiW5L = accounts[2]
//		const addressBD0Sufe = await ControllerrRLxcsJ.withdraw.call(addressNJSu5n, uintmWITldN, {from: accounts[4]});
//		const addressIcEsqHJ = await ControllerrRLxcsJ.earn.call(addressYK6HiP3, uintLKrG58d, {from: accounts[2]});
//		const addressSX7e8ni = await ControllerrRLxcsJ.setVault.call(addressZLiW5L, addressmRjivDv, {from: accounts[4]});

		await expect(ControllerrRLxcsJ.withdraw.call(addressNJSu5n, uintmWITldN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})