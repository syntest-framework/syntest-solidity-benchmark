const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addresscgFFJTH = accounts[5]
		const afiControllerNQxZvGc = await afiController.new(addresscgFFJTH, {from: accounts[2]});
		const addressuCRZqJs = accounts[4]
		const addressfYBxqyz = accounts[2]
		const addressEYY0wqQ = accounts[0]
		const addressGxZwUzz = accounts[2]
		const addressY8QUOmV = accounts[0]
//		const addressLhWiCvi = await afiControllerNQxZvGc.setVault.call(addressfYBxqyz, addressuCRZqJs, {from: accounts[0]});
//		const addressRAqtC76 = await afiControllerNQxZvGc.setRewards.call(addressEYY0wqQ, {from: accounts[3]});
//		const addressHzyXoPX = await afiControllerNQxZvGc.setVault.call(addressY8QUOmV, addressGxZwUzz, {from: accounts[1]});

		await expect(afiControllerNQxZvGc.setVault.call(addressfYBxqyz, addressuCRZqJs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqVqTKMd = accounts[5]
		const afiControllernKWiVNC = await afiController.new(addressqVqTKMd, {from: accounts[4]});
		const uintfrH90dN = BigInt("1782")
		const addresstUxEF00 = accounts[1]
		const addressgYtlZ82 = accounts[4]
		const addressX0vAA7h = accounts[5]
		const addressEWKdB83 = accounts[0]
		const addressWVwoOIW = accounts[2]
		const addressh1iomj7 = accounts[1]
		const addressiTqBGP2 = accounts[4]
		const addressHBu2wqP = accounts[0]
//		const addressjzxn7CM = await afiControllernKWiVNC.earn.call(addresstUxEF00, uintfrH90dN, {from: accounts[4]});
//		const addressS48ktu7 = await afiControllernKWiVNC.setOneSplit.call(addressgYtlZ82, {from: accounts[0]});
//		const addresskTQm9nA = await afiControllernKWiVNC.setConverter.call(addressWVwoOIW, addressEWKdB83, addressX0vAA7h, {from: accounts[2]});
//		const addressQMSptyC = await afiControllernKWiVNC.setStrategist.call(addressh1iomj7, {from: accounts[0]});
//		const addressxIdiLqz = await afiControllernKWiVNC.setVault.call(addressHBu2wqP, addressiTqBGP2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllernKWiVNC.earn.call(addresstUxEF00, uintfrH90dN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNkVdAEq = accounts[1]
		const afiControllertZzatzo = await afiController.new(addressNkVdAEq, {from: accounts[1]});
		const addresskmQ23En = accounts[3]
		const uintYXAhbt7 = BigInt("711")
		const addressz7Zcl86 = accounts[1]
		const addressaXLUZyE = accounts[4]
		const addresso1Sq9g9 = accounts[1]
//		const addressVOPgj1n = await afiControllertZzatzo.setOneSplit.call(addresskmQ23En, {from: accounts[0]});
//		const uintNWx90v = await afiControllertZzatzo.setSplit.call(uintYXAhbt7, {from: accounts[0]});
//		const addresswAocQTh = await afiControllertZzatzo.inCaseStrategyTokenGetStuck.call(addressaXLUZyE, addressz7Zcl86, {from: accounts[3]});
//		const addressZ0VUzo8 = await afiControllertZzatzo.withdrawAll.call(addresso1Sq9g9, {from: accounts[3]});

		await expect(afiControllertZzatzo.setOneSplit.call(addresskmQ23En, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFHR33BF = accounts[2]
		const afiControllerxaQHKUQ = await afiController.new(addressFHR33BF, {from: accounts[1]});
		const addresszFYXDD = accounts[5]
		const addressmv3OIdC = accounts[2]
		const addressdZO3kTF = accounts[1]
		const uintFb399PG = BigInt("675")
		const uintzyQI4DJ = BigInt("988")
		const addressvbc4sGh = accounts[1]
		const addressctRYke6 = accounts[2]
		const uintzFabMTL = BigInt("42")
		const addressyDbtuO2 = accounts[1]
//		const addressQVkNA5 = await afiControllerxaQHKUQ.setRewards.call(addresszFYXDD, {from: accounts[0]});
//		const addressZD9k7TE = await afiControllerxaQHKUQ.setRewards.call(addressmv3OIdC, {from: accounts[3]});
//		const addressWM8jCcr = await afiControllerxaQHKUQ.setOneSplit.call(addressdZO3kTF, {from: accounts[2]});
//		const uintaK4VdjY = await afiControllerxaQHKUQ.setSplit.call(uintFb399PG, {from: accounts[3]});
//		const addressvizdXic = await afiControllerxaQHKUQ.yearn.call(addressctRYke6, addressvbc4sGh, uintzyQI4DJ, {from: accounts[4]});
//		const addressqiqsPcb = await afiControllerxaQHKUQ.earn.call(addressyDbtuO2, uintzFabMTL, {from: accounts[1]});

		await expect(afiControllerxaQHKUQ.setRewards.call(addresszFYXDD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxd4BhZK = accounts[1]
		const afiControllerTRa2gbU = await afiController.new(addressxd4BhZK, {from: accounts[2]});
		const uintEq2pU2S = BigInt("364")
		const uinty2q2yEl = BigInt("263")
		const addressHZ2dN6B = accounts[5]
		const addressXItzb6A = accounts[4]
		const uintvsWEOK8 = BigInt("962")
		const addressUA1t8SC = accounts[2]
//		const uintGJvKgVv = await afiControllerTRa2gbU.setSplit.call(uintEq2pU2S, {from: "0x0000000000000000000000000000000000000001"});
//		const uintz1R87mD = await afiControllerTRa2gbU.getExpectedReturn.call(addressXItzb6A, addressHZ2dN6B, uinty2q2yEl, {from: accounts[3]});
//		const uintJxMhNV = await afiControllerTRa2gbU.setSplit.call(uintvsWEOK8, {from: accounts[3]});
//		const addressbrhQyG = await afiControllerTRa2gbU.setOneSplit.call(addressUA1t8SC, {from: accounts[2]});

		await expect(afiControllerTRa2gbU.setSplit.call(uintEq2pU2S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTO3sOVX = accounts[2]
		const afiControllerZHXyjH = await afiController.new(addressTO3sOVX, {from: accounts[0]});
		const addressA0h3FZH = "0x0000000000000000000000000000000000000001"
		const address0T5kmW = accounts[0]
		const addresshe6H6No = accounts[1]
		const uintzAGGV4Z = BigInt("1608")
		const addresseggJ7S5 = accounts[2]
		const uintwpE2bQ = BigInt("1223")
//		const addressyyJ528 = await afiControllerZHXyjH.setConverter.call(addresshe6H6No, address0T5kmW, addressA0h3FZH, {from: accounts[3]});
//		const uintEM7RsmO = await afiControllerZHXyjH.setSplit.call(uintzAGGV4Z, {from: accounts[4]});
//		const addressUpMDxy5 = await afiControllerZHXyjH.setRewards.call(addresseggJ7S5, {from: accounts[1]});
//		const uintHJWuKwP = await afiControllerZHXyjH.setSplit.call(uintwpE2bQ, {from: accounts[2]});

		await expect(afiControllerZHXyjH.setConverter.call(addresshe6H6No, address0T5kmW, addressA0h3FZH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressecdKUf1 = accounts[2]
		const afiControllerbxZq1Ru = await afiController.new(addressecdKUf1, {from: accounts[1]});
		const addressbso9WFJ = accounts[4]
		const addresscmJHHEA = "0x0000000000000000000000000000000000000001"
		const addressbOXX9U4 = accounts[1]
		const uintOo1p3UB = BigInt("96")
		const addressD4rsA9D = accounts[1]
		const addresstiwZaxe = "0x0000000000000000000000000000000000000001"
		const uintmgea4La = BigInt("1424")
		const addressRWt2ooJ = accounts[2]
//		const addressQb1dolq = await afiControllerbxZq1Ru.inCaseStrategyTokenGetStuck.call(addresscmJHHEA, addressbso9WFJ, {from: accounts[5]});
//		const addressDnxoAKn = await afiControllerbxZq1Ru.setStrategist.call(addressbOXX9U4, {from: accounts[1]});
//		const addressVKqpVau = await afiControllerbxZq1Ru.yearn.call(addresstiwZaxe, addressD4rsA9D, uintOo1p3UB, {from: accounts[4]});
//		const addressEFwUTyN = await afiControllerbxZq1Ru.withdraw.call(addressRWt2ooJ, uintmgea4La, {from: accounts[3]});

		await expect(afiControllerbxZq1Ru.inCaseStrategyTokenGetStuck.call(addresscmJHHEA, addressbso9WFJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressM0dA1sH = accounts[0]
		const afiControllerDmzfEb2 = await afiController.new(addressM0dA1sH, {from: accounts[5]});
		const addressUZBAZDX = accounts[2]
		const addressp8m0rje = accounts[3]
//		const uintn5LI6GC = await afiControllerDmzfEb2.balanceOf.call(addressUZBAZDX, {from: accounts[4]});
//		const addresshN19ZA8 = await afiControllerDmzfEb2.withdrawAll.call(addressp8m0rje, {from: accounts[1]});

		await expect(afiControllerDmzfEb2.balanceOf.call(addressUZBAZDX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressYNszFb4 = accounts[5]
		const afiControllerxDRlAll = await afiController.new(addressYNszFb4, {from: accounts[1]});
		const uintAIBWjZx = BigInt("285")
		const addressll7ln0C = accounts[4]
		const addresslpwLog = accounts[0]
		const addressGM3GDyj = "0x0000000000000000000000000000000000000001"
		const addressFeur5r3 = accounts[1]
		const addressnF5EP4b = accounts[1]
		const addressG1gh6bX = accounts[0]
		const uintdsoVFI0 = BigInt("1897")
		const uintIQ9kkyc = BigInt("27")
		const addressbmiNABl = accounts[0]
		const addressl4oiEtn = accounts[1]
		const addressesqr5XI = accounts[4]
//		const addressfW1rMX = await afiControllerxDRlAll.inCaseTokensGetStuck.call(addressll7ln0C, uintAIBWjZx, {from: accounts[1]});
//		const addressGRRpbpp = await afiControllerxDRlAll.setConverter.call(addressFeur5r3, addressGM3GDyj, addresslpwLog, {from: accounts[4]});
//		const addressRLiONuH = await afiControllerxDRlAll.revokeStrategy.call(addressG1gh6bX, addressnF5EP4b, {from: accounts[3]});
//		const uintZksX4Zr = await afiControllerxDRlAll.setSplit.call(uintdsoVFI0, {from: accounts[2]});
//		const addressyAOf08 = await afiControllerxDRlAll.yearn.call(addressl4oiEtn, addressbmiNABl, uintIQ9kkyc, {from: accounts[1]});
//		const addressvcRsKgB = await afiControllerxDRlAll.setGovernance.call(addressesqr5XI, {from: accounts[1]});

		await expect(afiControllerxDRlAll.inCaseTokensGetStuck.call(addressll7ln0C, uintAIBWjZx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdGLUmc = accounts[0]
		const afiControllerkMPAZKn = await afiController.new(addressdGLUmc, {from: accounts[5]});
		const address5JBPUn = accounts[1]
		const addressfCYRVMO = accounts[2]
		const addressJeYtNRi = accounts[3]
//		const addresseZhrl3B = await afiControllerkMPAZKn.revokeStrategy.call(addressfCYRVMO, address5JBPUn, {from: accounts[0]});
//		const uintjmvpaxM = await afiControllerkMPAZKn.balanceOf.call(addressJeYtNRi, {from: accounts[3]});

		await expect(afiControllerkMPAZKn.revokeStrategy.call(addressfCYRVMO, address5JBPUn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNzsuA7p = accounts[5]
		const afiControllernKWiVNC = await afiController.new(addressNzsuA7p, {from: accounts[4]});
		const addressaU57aQo = accounts[1]
		const addresszJRnC6H = accounts[5]
		const addresshdc3QT3 = accounts[2]
		const uintmOoyhQk = BigInt("1782")
		const addressEUFjpS = accounts[1]
		const addressRObE9w2 = accounts[5]
		const address5r4sqL = accounts[5]
		const addressiqP3apq = accounts[0]
		const addressPfJgwK = accounts[2]
		const addressHUxQqb = accounts[1]
		const addressaADk9R = accounts[4]
		const addressr0GofdX = accounts[0]
//		const addresskskafWZ = await afiControllernKWiVNC.setStrategist.call(addressaU57aQo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressi4gaYyF = await afiControllernKWiVNC.approveStrategy.call(addresshdc3QT3, addresszJRnC6H, {from: accounts[0]});
//		const addressjzxn7CM = await afiControllernKWiVNC.earn.call(addressEUFjpS, uintmOoyhQk, {from: accounts[4]});
//		const addressS48ktu7 = await afiControllernKWiVNC.setOneSplit.call(addressRObE9w2, {from: accounts[0]});
//		const addresskTQm9nA = await afiControllernKWiVNC.setConverter.call(addressPfJgwK, addressiqP3apq, address5r4sqL, {from: accounts[2]});
//		const addressQMSptyC = await afiControllernKWiVNC.setStrategist.call(addressHUxQqb, {from: accounts[0]});
//		const addressxIdiLqz = await afiControllernKWiVNC.setVault.call(addressr0GofdX, addressaADk9R, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllernKWiVNC.setStrategist.call(addressaU57aQo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIpFMxXi = accounts[2]
		const afiControllerZHXyjH = await afiController.new(addressIpFMxXi, {from: accounts[0]});
		const addressFjvehcE = accounts[1]
		const addressVUoNBEk = accounts[4]
		const addressfXlv9vv = "0x0000000000000000000000000000000000000001"
		const addressL8Ov2WN = accounts[0]
		const addressgpwpNlS = accounts[1]
		const addressowcDcou = accounts[0]
		const addressf3DGN1o = accounts[2]
		const addressFpaDcXP = accounts[2]
		const uintFuaWAbl = BigInt("1608")
		const addressBjBkzZq = accounts[2]
//		const addressWbT4qqL = await afiControllerZHXyjH.setStrategy.call(addressVUoNBEk, addressFjvehcE, {from: accounts[4]});
//		const addressyyJ528 = await afiControllerZHXyjH.setConverter.call(addressgpwpNlS, addressL8Ov2WN, addressfXlv9vv, {from: accounts[3]});
//		const addressG9OHcjx = await afiControllerZHXyjH.setConverter.call(addressFpaDcXP, addressf3DGN1o, addressowcDcou, {from: accounts[0]});
//		const uintEM7RsmO = await afiControllerZHXyjH.setSplit.call(uintFuaWAbl, {from: accounts[4]});
//		const addressUpMDxy5 = await afiControllerZHXyjH.setRewards.call(addressBjBkzZq, {from: accounts[1]});

		await expect(afiControllerZHXyjH.setStrategy.call(addressVUoNBEk, addressFjvehcE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressl8VzLM = "0x0000000000000000000000000000000000000001"
		const afiControllerrlFkX0f = await afiController.new(addressl8VzLM, {from: accounts[1]});
		const uintHu4S4Z = BigInt("1334")
		const addressK0FS0GF = accounts[5]
		const addressvWnmlyY = accounts[2]
		const addressrofqIdS = accounts[0]
		const uintr9Q1cM = BigInt("1581")
		const addressCH17fEn = accounts[2]
		const addressHibsuND = accounts[3]
		const addresssNNieH4 = accounts[0]
//		const addressOIOrv3e = await afiControllerrlFkX0f.yearn.call(addressvWnmlyY, addressK0FS0GF, uintHu4S4Z, {from: accounts[1]});
//		const addressL4SOkSx = await afiControllerrlFkX0f.setGovernance.call(addressrofqIdS, {from: accounts[5]});
//		const uintGGlaEJ = await afiControllerrlFkX0f.getExpectedReturn.call(addressHibsuND, addressCH17fEn, uintr9Q1cM, {from: accounts[3]});
//		const addresspKfjDd = await afiControllerrlFkX0f.setRewards.call(addresssNNieH4, {from: accounts[4]});

		await expect(afiControllerrlFkX0f.yearn.call(addressvWnmlyY, addressK0FS0GF, uintHu4S4Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressY4XGWp = accounts[1]
		const afiControllerRpUi9ca = await afiController.new(addressY4XGWp, {from: accounts[4]});
		const uintTLJSFJ = BigInt("1274")
		const addressyLFmZWs = accounts[3]
		const addressMkifCdV = accounts[3]
		const addresswLRaTtd = accounts[1]
		const addressHRjuhfo = accounts[3]
		const addressVUiWDny = accounts[1]
		const addressjGQPJ2 = accounts[0]
		const addressSfY7jwz = accounts[3]
		const uintRQedZLU = BigInt("1103")
		const addressy3ppPjb = accounts[1]
//		const uintHumqFzg = await afiControllerRpUi9ca.getExpectedReturn.call(addressMkifCdV, addressyLFmZWs, uintTLJSFJ, {from: accounts[4]});
//		const addressdn14esZ = await afiControllerRpUi9ca.setVault.call(addressHRjuhfo, addresswLRaTtd, {from: accounts[0]});
//		const addressWCzuGBP = await afiControllerRpUi9ca.setConverter.call(addressSfY7jwz, addressjGQPJ2, addressVUiWDny, {from: accounts[3]});
//		const addressmqJmxxn = await afiControllerRpUi9ca.inCaseTokensGetStuck.call(addressy3ppPjb, uintRQedZLU, {from: accounts[3]});

		await expect(afiControllerRpUi9ca.getExpectedReturn.call(addressMkifCdV, addressyLFmZWs, uintTLJSFJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJcyUyHb = accounts[0]
		const afiControllerDmzfEb2 = await afiController.new(addressJcyUyHb, {from: accounts[5]});
		const addresskraeea1 = accounts[2]
		const addressmUINEo = accounts[2]
		const addressef7XCa3 = accounts[4]
		const addressuG2SE3k = accounts[5]
//		const addressOEBF3yj = await afiControllerDmzfEb2.setGovernance.call(addresskraeea1, {from: accounts[3]});
//		const uintn5LI6GC = await afiControllerDmzfEb2.balanceOf.call(addressmUINEo, {from: accounts[4]});
//		const addressnVBY2km = await afiControllerDmzfEb2.setRewards.call(addressef7XCa3, {from: accounts[4]});
//		const addresshN19ZA8 = await afiControllerDmzfEb2.withdrawAll.call(addressuG2SE3k, {from: accounts[1]});

		await expect(afiControllerDmzfEb2.setGovernance.call(addresskraeea1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqdemBOs = accounts[5]
		const afiControllernKWiVNC = await afiController.new(addressqdemBOs, {from: accounts[4]});
		const uinty1aZeHI = BigInt("1766")
		const addressuYeCEce = accounts[3]
		const uintwUlOlwp = BigInt("1774")
		const addressZMYkGYX = accounts[5]
		const addressvG1z8RT = accounts[5]
		const addressVnYRm1 = accounts[0]
		const addressbqJ6dK7 = "0x0000000000000000000000000000000000000001"
		const addressP9LDHHf = accounts[0]
		const addressvlBhzF6 = accounts[2]
		const addressVZT3mwj = accounts[4]
		const addressQIWKkcz = accounts[1]
//		const addressrHw7XHk = await afiControllernKWiVNC.withdraw.call(addressuYeCEce, uinty1aZeHI, {from: accounts[4]});
//		const addressjzxn7CM = await afiControllernKWiVNC.earn.call(addressZMYkGYX, uintwUlOlwp, {from: accounts[4]});
//		const addresskTQm9nA = await afiControllernKWiVNC.setConverter.call(addressbqJ6dK7, addressVnYRm1, addressvG1z8RT, {from: accounts[2]});
//		const uintuiqVnGT = await afiControllernKWiVNC.balanceOf.call(addressP9LDHHf, {from: accounts[0]});
//		const addressEEsCdhv = await afiControllernKWiVNC.approveStrategy.call(addressVZT3mwj, addressvlBhzF6, {from: accounts[1]});
//		const addressQMSptyC = await afiControllernKWiVNC.setStrategist.call(addressQIWKkcz, {from: accounts[0]});

		await expect(afiControllernKWiVNC.withdraw.call(addressuYeCEce, uinty1aZeHI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAnxH0on = accounts[0]
		const afiControllerDmzfEb2 = await afiController.new(addressAnxH0on, {from: accounts[5]});
		const addressvu7vYVd = accounts[1]
		const addresslHkCsOj = accounts[2]
		const uintaV3Ot7o = BigInt("47")
		const addresswgrocO = accounts[3]
		const addressAikvmab = accounts[1]
//		const addressmmHb0Co = await afiControllerDmzfEb2.approveStrategy.call(addresslHkCsOj, addressvu7vYVd, {from: "0x0000000000000000000000000000000000000001"});
//		const address1nZJN3 = await afiControllerDmzfEb2.withdraw.call(addresswgrocO, uintaV3Ot7o, {from: "0x0000000000000000000000000000000000000001"});
//		const uintn5LI6GC = await afiControllerDmzfEb2.balanceOf.call(addressAikvmab, {from: accounts[4]});

		await expect(afiControllerDmzfEb2.approveStrategy.call(addresslHkCsOj, addressvu7vYVd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDmmDwoA = accounts[0]
		const afiControllerDmzfEb2 = await afiController.new(addressDmmDwoA, {from: accounts[5]});
		const addressF88R3St = "0x0000000000000000000000000000000000000001"
		const addressvs4dO1f = accounts[2]
//		const address62m65a = await afiControllerDmzfEb2.withdrawAll.call(addressF88R3St, {from: accounts[2]});
//		const uintn5LI6GC = await afiControllerDmzfEb2.balanceOf.call(addressvs4dO1f, {from: accounts[4]});

		await expect(afiControllerDmzfEb2.withdrawAll.call(addressF88R3St, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshILkeSX = "0x0000000000000000000000000000000000000001"
		const afiControllerrrmBA1 = await afiController.new(addresshILkeSX, {from: accounts[3]});
		const addressrtGGsMy = accounts[2]
		const addressuAnkvKj = accounts[1]
		const uintETwzgX5 = BigInt("1120")
		const address846ItM = accounts[3]
//		const addresspFOAzNX = await afiControllerrrmBA1.setStrategy.call(addressuAnkvKj, addressrtGGsMy, {from: accounts[3]});
//		const addressH9XBywM = await afiControllerrrmBA1.earn.call(address846ItM, uintETwzgX5, {from: accounts[1]});

		await expect(afiControllerrrmBA1.setStrategy.call(addressuAnkvKj, addressrtGGsMy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnezCg5u = accounts[3]
		const afiControllernoCJhtL = await afiController.new(addressnezCg5u, {from: "0x0000000000000000000000000000000000000001"});
		const addressuBhPyyI = accounts[3]
		const addressJL8ipdf = accounts[3]
		const addressCWszeHX = accounts[1]
		const addressfNOtYjv = accounts[3]
		const uintvq0Pkb0 = BigInt("906")
		const addressKzYaeex = accounts[2]
		const addressB3Xbz5t = accounts[1]
		const addressrl97czV = await afiControllernoCJhtL.setVault.call(addressJL8ipdf, addressuBhPyyI, {from: accounts[4]});
		const addressS8suSV2 = await afiControllernoCJhtL.setStrategist.call(addressCWszeHX, {from: accounts[0]});
		const addressGp29yx = await afiControllernoCJhtL.setStrategist.call(addressfNOtYjv, {from: accounts[0]});
		const uintQkSehGA = await afiControllernoCJhtL.setSplit.call(uintvq0Pkb0, {from: accounts[2]});
		const addressYGeAkaU = await afiControllernoCJhtL.revokeStrategy.call(addressB3Xbz5t, addressKzYaeex, {from: accounts[0]});
	});
})