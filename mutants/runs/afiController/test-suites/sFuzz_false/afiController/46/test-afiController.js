const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressFYzquPu = accounts[1]
		const afiControllerJm7rsdv = await afiController.new(addressFYzquPu, {from: "0x0000000000000000000000000000000000000001"});
		const addresshvrmFaq = accounts[0]
		const addressfyFisYu = accounts[5]
		const addressqHlKIgm = "0x0000000000000000000000000000000000000001"
		const uintOgq4dmJ = BigInt("1384")
		const addressRuYMTvO = accounts[3]
		const addressxN6blW3 = accounts[2]
		const uintEKwdy2 = BigInt("1345")
		const addressVd7t2To = accounts[3]
		const addressG8xgvxE = accounts[0]
		const addressJZtngC1 = await afiControllerJm7rsdv.setVault.call(addressfyFisYu, addresshvrmFaq, {from: accounts[1]});
		const uintubxYiNE = await afiControllerJm7rsdv.balanceOf.call(addressqHlKIgm, {from: accounts[4]});
		const uintTKVCilN = await afiControllerJm7rsdv.getExpectedReturn.call(addressxN6blW3, addressRuYMTvO, uintOgq4dmJ, {from: accounts[1]});
		const addressqerucVh = await afiControllerJm7rsdv.yearn.call(addressG8xgvxE, addressVd7t2To, uintEKwdy2, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for afiController', async () => {
		const addressodvORpS = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressodvORpS, {from: accounts[0]});
		const addressTBn8YWM = accounts[2]
		const addressKwq1Hw = accounts[0]
		const address6NELIK = accounts[4]
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressKwq1Hw, addressTBn8YWM, {from: accounts[3]});
		const addresscSlCvI8 = await afiControllergSmwOYl.setOneSplit.call(address6NELIK, {from: accounts[1]});

		await expect(afiControllergSmwOYl.revokeStrategy.call(addressKwq1Hw, addressTBn8YWM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssQNckqI = accounts[3]
		const afiControllerwQ7nFYg = await afiController.new(addresssQNckqI, {from: accounts[4]});
		const uintwc5Ystw = BigInt("1629")
		const addressRky513h = accounts[1]
		const uintiETwU7t = await afiControllerwQ7nFYg.setSplit.call(uintwc5Ystw, {from: accounts[4]});
		const addressguAbz3 = await afiControllerwQ7nFYg.withdrawAll.call(addressRky513h, {from: accounts[1]});

		await expect(afiControllerwQ7nFYg.withdrawAll.call(addressRky513h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstuzO4p2 = accounts[1]
		const afiControllerwA1GJP = await afiController.new(addresstuzO4p2, {from: accounts[1]});
		const uintIH6aFXq = BigInt("1763")
		const addresspVqynA0 = accounts[2]
		const addresssGbH6m = accounts[2]
		const addressS677UXc = "0x0000000000000000000000000000000000000001"
		const uinth7otbf3 = BigInt("70")
		const addressf4o5vEI = accounts[0]
		const uintpBM94tx = BigInt("694")
		const addressGHX8p4l = accounts[3]
		const addressEwfOgvN = accounts[3]
		const addresstk0erlR = await afiControllerwA1GJP.yearn.call(addresssGbH6m, addresspVqynA0, uintIH6aFXq, {from: accounts[4]});
		const address2Jo3Bx = await afiControllerwA1GJP.setGovernance.call(addressS677UXc, {from: accounts[1]});
		const addresskwzOBl6 = await afiControllerwA1GJP.earn.call(addressf4o5vEI, uinth7otbf3, {from: accounts[1]});
		const uintuOFQLc4 = await afiControllerwA1GJP.getExpectedReturn.call(addressEwfOgvN, addressGHX8p4l, uintpBM94tx, {from: accounts[3]});

		await expect(afiControllerwA1GJP.yearn.call(addresssGbH6m, addresspVqynA0, uintIH6aFXq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressh3Nx0uF = accounts[1]
		const afiControllerU2pN9Rd = await afiController.new(addressh3Nx0uF, {from: accounts[3]});
		const addressJnj9EuX = "0x0000000000000000000000000000000000000001"
		const addressFKvyA3d = accounts[2]
		const addressHYmX4Or = "0x0000000000000000000000000000000000000001"
		const uintSATg7j = BigInt("56")
		const addressCktLvmO = accounts[3]
		const addressJU06P2W = accounts[2]
		const addressI5O4Jjl = await afiControllerU2pN9Rd.approveStrategy.call(addressFKvyA3d, addressJnj9EuX, {from: accounts[1]});
		const addressMGckIoh = await afiControllerU2pN9Rd.withdrawAll.call(addressHYmX4Or, {from: accounts[1]});
		const addressANiZoRF = await afiControllerU2pN9Rd.yearn.call(addressJU06P2W, addressCktLvmO, uintSATg7j, {from: accounts[5]});

		await expect(afiControllerU2pN9Rd.approveStrategy.call(addressFKvyA3d, addressJnj9EuX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIMsoBOf = accounts[2]
		const afiControllerqydFfRK = await afiController.new(addressIMsoBOf, {from: accounts[2]});
		const addressp6ucirJ = accounts[4]
		const addresseEgSKK0 = accounts[3]
		const addresstuctk9x = accounts[1]
		const addressE5INNYD = accounts[5]
		const addresshUtpoyz = accounts[4]
		const addressfg9sWw8 = accounts[4]
		const addressocZsbW = await afiControllerqydFfRK.setVault.call(addresseEgSKK0, addressp6ucirJ, {from: accounts[3]});
		const addresslac1hJW = await afiControllerqydFfRK.inCaseStrategyTokenGetStuck.call(addressE5INNYD, addresstuctk9x, {from: accounts[1]});
		const addressqI7Oppx = await afiControllerqydFfRK.inCaseStrategyTokenGetStuck.call(addressfg9sWw8, addresshUtpoyz, {from: accounts[5]});

		await expect(afiControllerqydFfRK.setVault.call(addresseEgSKK0, addressp6ucirJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvqa93ZP = accounts[1]
		const afiController4xJCEJ = await afiController.new(addressvqa93ZP, {from: accounts[4]});
		const addressEC02Jyw = accounts[2]
		const uintFTLKjbB = BigInt("1655")
		const addressgLGDvj2 = accounts[4]
		const addressLNc4JDL = accounts[1]
		const addresslfFEw0N = accounts[4]
		const addressegZ4U2O = await afiController4xJCEJ.withdrawAll.call(addressEC02Jyw, {from: accounts[4]});
		const addresse58UlU = await afiController4xJCEJ.withdraw.call(addressgLGDvj2, uintFTLKjbB, {from: "0x0000000000000000000000000000000000000001"});
		const addressQkAaGPu = await afiController4xJCEJ.setStrategy.call(addresslfFEw0N, addressLNc4JDL, {from: accounts[1]});

		await expect(afiController4xJCEJ.withdrawAll.call(addressEC02Jyw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDvu12vs = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressDvu12vs, {from: accounts[4]});
		const addressxvQndyK = accounts[4]
		const uintckCVCvq = BigInt("1999")
		const addressNCl7day = accounts[2]
		const addresstYgd93M = accounts[1]
		const addressShy0dET = accounts[1]
		const addressJrXltN = accounts[4]
		const addressWKCGRp = accounts[2]
		const addressxX4dhY = accounts[1]
		const addressNn7JZas = await afiControllerYnRpUeB.setOneSplit.call(addressxvQndyK, {from: accounts[5]});
		const addressZEgXUTV = await afiControllerYnRpUeB.yearn.call(addresstYgd93M, addressNCl7day, uintckCVCvq, {from: accounts[2]});
		const addressv9bhsI = await afiControllerYnRpUeB.withdrawAll.call(addressShy0dET, {from: accounts[3]});
		const addressiymmbj5 = await afiControllerYnRpUeB.setStrategist.call(addressJrXltN, {from: accounts[5]});
		const addressHCu7mKE = await afiControllerYnRpUeB.setStrategy.call(addressxX4dhY, addressWKCGRp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerYnRpUeB.setOneSplit.call(addressxvQndyK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshjTNn5Q = accounts[1]
		const afiControllerDTTphAh = await afiController.new(addresshjTNn5Q, {from: accounts[4]});
		const addressjQHFAHc = accounts[3]
		const addressIETOMT = accounts[4]
		const addressVvVKPRf = accounts[2]
		const addressIEGvsQa = accounts[2]
		const addressobKLE2W = accounts[3]
		const addressTBym2ZY = accounts[0]
		const addressgL5e90k = await afiControllerDTTphAh.setConverter.call(addressVvVKPRf, addressIETOMT, addressjQHFAHc, {from: accounts[5]});
		const addresseriCdXz = await afiControllerDTTphAh.setGovernance.call(addressIEGvsQa, {from: accounts[0]});
		const addresskun7fic = await afiControllerDTTphAh.setVault.call(addressTBym2ZY, addressobKLE2W, {from: accounts[0]});

		await expect(afiControllerDTTphAh.setConverter.call(addressVvVKPRf, addressIETOMT, addressjQHFAHc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJ6I7DoX = accounts[1]
		const afiControllerU2pN9Rd = await afiController.new(addressJ6I7DoX, {from: accounts[3]});
		const addressmU7x0Tf = accounts[1]
		const addressjDR0ipR = accounts[4]
		const addresskK6JZ3L = "0x0000000000000000000000000000000000000002"
		const uintvbeMpX3 = BigInt("56")
		const addresssX75q8F = accounts[3]
		const addressr2DeQY = accounts[5]
		const addresscbto62 = await afiControllerU2pN9Rd.setStrategy.call(addressjDR0ipR, addressmU7x0Tf, {from: accounts[5]});
		const addressMGckIoh = await afiControllerU2pN9Rd.withdrawAll.call(addresskK6JZ3L, {from: accounts[1]});
		const addressANiZoRF = await afiControllerU2pN9Rd.yearn.call(addressr2DeQY, addresssX75q8F, uintvbeMpX3, {from: accounts[5]});

		await expect(afiControllerU2pN9Rd.setStrategy.call(addressjDR0ipR, addressmU7x0Tf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZ4F17tm = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressZ4F17tm, {from: accounts[0]});
		const addressoPArsMy = accounts[1]
		const uintcrhsEbt = BigInt("1434")
		const addressGGRZMwZ = accounts[4]
		const addressbD6ptwW = accounts[3]
		const addresst7VU3XF = accounts[2]
		const address4imxbT = accounts[1]
		const addressz6EAY1 = await afiControllergSmwOYl.setGovernance.call(addressoPArsMy, {from: accounts[2]});
		const address3S5G5p = await afiControllergSmwOYl.yearn.call(addressbD6ptwW, addressGGRZMwZ, uintcrhsEbt, {from: accounts[0]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(address4imxbT, addresst7VU3XF, {from: accounts[3]});

		await expect(afiControllergSmwOYl.setGovernance.call(addressoPArsMy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscld1qEQ = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addresscld1qEQ, {from: accounts[0]});
		const uinttuKvjph = BigInt("363")
		const addressAQeXOX8 = accounts[3]
		const addresszIvgRNw = accounts[2]
		const addressCGHj9xl = accounts[1]
		const addressmFrIbWh = await afiControllergSmwOYl.earn.call(addressAQeXOX8, uinttuKvjph, {from: accounts[0]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressCGHj9xl, addresszIvgRNw, {from: accounts[3]});

		await expect(afiControllergSmwOYl.earn.call(addressAQeXOX8, uinttuKvjph, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSvHJqjG = accounts[2]
		const afiControllerWmMV6JF = await afiController.new(addressSvHJqjG, {from: accounts[0]});
		const uint7G10Oc = BigInt("309")
		const addressvYj8BYs = accounts[0]
		const addressxzC2Ua0 = accounts[1]
		const uintednlXsR = BigInt("473")
		const addressSFoBLQT = accounts[3]
		const addressVKwmBxq = accounts[2]
		const addressZqucgcP = accounts[1]
		const addressLZjm9Hq = accounts[1]
		const uint5aaekC = await afiControllerWmMV6JF.getExpectedReturn.call(addressxzC2Ua0, addressvYj8BYs, uint7G10Oc, {from: accounts[2]});
		const addressfBXOElo = await afiControllerWmMV6JF.inCaseTokensGetStuck.call(addressSFoBLQT, uintednlXsR, {from: "0x0000000000000000000000000000000000000001"});
		const addresspR1SDGj = await afiControllerWmMV6JF.setConverter.call(addressLZjm9Hq, addressZqucgcP, addressVKwmBxq, {from: accounts[3]});

		await expect(afiControllerWmMV6JF.getExpectedReturn.call(addressxzC2Ua0, addressvYj8BYs, uint7G10Oc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseV6QJOs = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addresseV6QJOs, {from: accounts[0]});
		const uintvyW7tls = BigInt("1691")
		const addressdasa6x2 = accounts[2]
		const uintXV2fUip = BigInt("363")
		const address0XmLpG = accounts[3]
		const uintQOqn992 = BigInt("1241")
		const addressU1Wgcyn = accounts[0]
		const addresstQJ8r6r = accounts[3]
		const addressovOurSH = accounts[2]
		const addressUPhhIAS = accounts[1]
		const addressmPKMBhY = await afiControllergSmwOYl.inCaseTokensGetStuck.call(addressdasa6x2, uintvyW7tls, {from: "0x0000000000000000000000000000000000000001"});
		const addressmFrIbWh = await afiControllergSmwOYl.earn.call(address0XmLpG, uintXV2fUip, {from: accounts[0]});
		const addressFTn5ySb = await afiControllergSmwOYl.yearn.call(addresstQJ8r6r, addressU1Wgcyn, uintQOqn992, {from: accounts[3]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressUPhhIAS, addressovOurSH, {from: accounts[3]});

		await expect(afiControllergSmwOYl.inCaseTokensGetStuck.call(addressdasa6x2, uintvyW7tls, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswH74JF = "0x0000000000000000000000000000000000000001"
		const afiControlleriage3b = await afiController.new(addresswH74JF, {from: accounts[0]});
		const addressv5L0xKE = accounts[1]
		const addressW3MRNQx = accounts[3]
		const addressPweSOlx = accounts[5]
		const addressacqwHyY = accounts[2]
		const uint2ut4Tf = BigInt("784")
		const addressM8EWai = accounts[3]
		const addressD3znbWK = "0x0000000000000000000000000000000000000001"
		const addresspMrDwoL = await afiControlleriage3b.inCaseStrategyTokenGetStuck.call(addressW3MRNQx, addressv5L0xKE, {from: accounts[0]});
		const addressGzbb5ly = await afiControlleriage3b.inCaseStrategyTokenGetStuck.call(addressacqwHyY, addressPweSOlx, {from: accounts[5]});
		const addressXS58QGl = await afiControlleriage3b.yearn.call(addressD3znbWK, addressM8EWai, uint2ut4Tf, {from: accounts[2]});

		await expect(afiControlleriage3b.inCaseStrategyTokenGetStuck.call(addressW3MRNQx, addressv5L0xKE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuPA3R2W = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressuPA3R2W, {from: accounts[0]});
		const addressSfL108k = accounts[0]
		const addressnHwhLXP = accounts[5]
		const uintxJvQFw = await afiControllergSmwOYl.balanceOf.call(addressSfL108k, {from: accounts[1]});
		const addresscSlCvI8 = await afiControllergSmwOYl.setOneSplit.call(addressnHwhLXP, {from: accounts[1]});

		await expect(afiControllergSmwOYl.balanceOf.call(addressSfL108k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIntVfT9 = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressIntVfT9, {from: accounts[0]});
		const addressyJ4xhMl = accounts[0]
		const addressNhzHJVa = accounts[5]
		const addressGP73qxI = accounts[4]
		const addresszl0ohHr = await afiControllergSmwOYl.setStrategist.call(addressyJ4xhMl, {from: accounts[0]});
		const addresscSlCvI8 = await afiControllergSmwOYl.setOneSplit.call(addressNhzHJVa, {from: accounts[1]});
		const addressorgv3s = await afiControllergSmwOYl.setStrategist.call(addressGP73qxI, {from: accounts[4]});

		await expect(afiControllergSmwOYl.setOneSplit.call(addressNhzHJVa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLQB5UE4 = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressLQB5UE4, {from: accounts[0]});
		const addressAFDAeDo = accounts[1]
		const addresszhpKqpm = accounts[4]
		const addressF4rcN2Q = accounts[0]
		const addresskI3uMui = accounts[4]
		const addresseU09V3 = accounts[5]
		const addressn3O1dFf = await afiControllergSmwOYl.setStrategy.call(addresszhpKqpm, addressAFDAeDo, {from: accounts[0]});
		const addresshRnvba2 = await afiControllergSmwOYl.setVault.call(addresskI3uMui, addressF4rcN2Q, {from: accounts[0]});
		const addresscSlCvI8 = await afiControllergSmwOYl.setOneSplit.call(addresseU09V3, {from: accounts[1]});

		await expect(afiControllergSmwOYl.setStrategy.call(addresszhpKqpm, addressAFDAeDo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresse2Z2e1e = accounts[0]
		const afiControllercsJQxqo = await afiController.new(addresse2Z2e1e, {from: accounts[4]});
		const uintrsHw6D4 = BigInt("501")
		const addressKDFopL = accounts[2]
		const uinttKIZF1H = BigInt("333")
		const addresscplLhum = accounts[0]
		const addressvlOjc4W = accounts[1]
		const uintPLLafOy = BigInt("1710")
		const addressof6MpAX = accounts[2]
		const addressH488OnJ = await afiControllercsJQxqo.withdraw.call(addressKDFopL, uintrsHw6D4, {from: accounts[1]});
		const addresskOjB0aU = await afiControllercsJQxqo.yearn.call(addressvlOjc4W, addresscplLhum, uinttKIZF1H, {from: accounts[1]});
		const addressta3tSt9 = await afiControllercsJQxqo.inCaseTokensGetStuck.call(addressof6MpAX, uintPLLafOy, {from: accounts[2]});

		await expect(afiControllercsJQxqo.withdraw.call(addressKDFopL, uintrsHw6D4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZ51Kcpd = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressZ51Kcpd, {from: accounts[0]});
		const uint2rILRR = BigInt("19")
		const addressYKzZOi3 = accounts[1]
		const addressJBnPdIZ = accounts[5]
		const addressN1fSSwg = await afiControllergSmwOYl.inCaseTokensGetStuck.call(addressYKzZOi3, uint2rILRR, {from: accounts[0]});
		const addresscSlCvI8 = await afiControllergSmwOYl.setOneSplit.call(addressJBnPdIZ, {from: accounts[1]});

		await expect(afiControllergSmwOYl.inCaseTokensGetStuck.call(addressYKzZOi3, uint2rILRR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWtwms1u = accounts[4]
		const afiControlleryMdZHHn = await afiController.new(addressWtwms1u, {from: accounts[1]});
		const addressN4Mv59f = accounts[2]
		const addresszZ85Uci = accounts[0]
		const addressfpqzAUm = accounts[3]
		const addressjJOTchD = accounts[4]
		const uintel40aOH = BigInt("1850")
		const addressdAKCyFB = accounts[0]
		const addresst1FApjm = accounts[2]
		const addressIBkeJ0D = await afiControlleryMdZHHn.setRewards.call(addressN4Mv59f, {from: accounts[2]});
		const addressXdjJtJy = await afiControlleryMdZHHn.setStrategist.call(addresszZ85Uci, {from: accounts[4]});
		const addressprzerV6 = await afiControlleryMdZHHn.setOneSplit.call(addressfpqzAUm, {from: accounts[4]});
		const addressHdcd0B1 = await afiControlleryMdZHHn.setStrategist.call(addressjJOTchD, {from: accounts[1]});
		const addressG1HT8Wr = await afiControlleryMdZHHn.yearn.call(addresst1FApjm, addressdAKCyFB, uintel40aOH, {from: accounts[0]});

		await expect(afiControlleryMdZHHn.setRewards.call(addressN4Mv59f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})