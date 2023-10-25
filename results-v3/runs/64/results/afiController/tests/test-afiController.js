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
		const addressqKdCE7Q = accounts[1]
		const afiControllerU2pN9Rd = await afiController.new(addressqKdCE7Q, {from: accounts[3]});
		const addresstSxEtd = accounts[4]
		const addressVZDgg4t = "0x0000000000000000000000000000000000000001"
		const addresstNQxPP4 = accounts[2]
		const addressYNJidal = accounts[4]
		const addressbJieVX8 = accounts[3]
		const addressSPPZ9ba = accounts[0]
		const addressZSKgyES = "0x0000000000000000000000000000000000000001"
		const uintDl8Et0a = BigInt("56")
		const addresscooHUJ = accounts[4]
		const addressCm7qeAg = accounts[2]
		const addressLbaCBGT = await afiControllerU2pN9Rd.setStrategist.call(addresstSxEtd, {from: accounts[5]});
		const addressI5O4Jjl = await afiControllerU2pN9Rd.approveStrategy.call(addresstNQxPP4, addressVZDgg4t, {from: accounts[1]});
		const addressd6j2wy = await afiControllerU2pN9Rd.setConverter.call(addressSPPZ9ba, addressbJieVX8, addressYNJidal, {from: accounts[3]});
		const addressMGckIoh = await afiControllerU2pN9Rd.withdrawAll.call(addressZSKgyES, {from: accounts[1]});
		const addressANiZoRF = await afiControllerU2pN9Rd.yearn.call(addressCm7qeAg, addresscooHUJ, uintDl8Et0a, {from: accounts[5]});

		await expect(afiControllerU2pN9Rd.setStrategist.call(addresstSxEtd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxkJoCXk = accounts[3]
		const afiControllerwQ7nFYg = await afiController.new(addressxkJoCXk, {from: accounts[4]});
		const uinthQOi4Zh = BigInt("1632")
		const addresslnrpQ4x = accounts[3]
		const addressne8JDzE = accounts[1]
		const uintiETwU7t = await afiControllerwQ7nFYg.setSplit.call(uinthQOi4Zh, {from: accounts[4]});
		const addressSRu7xP = await afiControllerwQ7nFYg.setGovernance.call(addresslnrpQ4x, {from: accounts[0]});
		const addressguAbz3 = await afiControllerwQ7nFYg.withdrawAll.call(addressne8JDzE, {from: accounts[1]});

		await expect(afiControllerwQ7nFYg.setGovernance.call(addresslnrpQ4x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWCtuyzr = accounts[2]
		const afiControllerqydFfRK = await afiController.new(addressWCtuyzr, {from: accounts[2]});
		const addressDNPTLCP = accounts[3]
		const addressfD4NP9O = "0x0000000000000000000000000000000000000001"
		const addressJoHJG1b = accounts[3]
		const addresswzUsUKX = accounts[4]
		const addressMCKwkg3 = accounts[3]
		const addressQvNHhTW = accounts[1]
		const addressGsKEh9Y = accounts[6]
		const addressIQ06ttD = accounts[4]
		const addresskhEgden = accounts[4]
		const address9L4M1p = accounts[1]
		const address6jQhug = accounts[4]
		const address8PCt52 = await afiControllerqydFfRK.setConverter.call(addressJoHJG1b, addressfD4NP9O, addressDNPTLCP, {from: accounts[2]});
		const addressocZsbW = await afiControllerqydFfRK.setVault.call(addressMCKwkg3, addresswzUsUKX, {from: accounts[3]});
		const addresslac1hJW = await afiControllerqydFfRK.inCaseStrategyTokenGetStuck.call(addressGsKEh9Y, addressQvNHhTW, {from: accounts[1]});
		const addressqI7Oppx = await afiControllerqydFfRK.inCaseStrategyTokenGetStuck.call(addresskhEgden, addressIQ06ttD, {from: accounts[5]});
		const addressj7Xhwsp = await afiControllerqydFfRK.approveStrategy.call(address6jQhug, address9L4M1p, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerqydFfRK.setVault.call(addressMCKwkg3, addresswzUsUKX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWHSycR = accounts[3]
		const afiControllerL8BOZqE = await afiController.new(addressWHSycR, {from: accounts[2]});
		const addressBPsFqc4 = accounts[3]
		const addressu48PCUI = accounts[5]
		const addressVhdpT7D = accounts[3]
		const addressIk8WYBZ = accounts[2]
		const addressx5lb6CZ = accounts[1]
		const addressqKBDZDK = accounts[2]
		const uintdpAVptf = BigInt("829")
		const addressQ4MJia7 = "0x0000000000000000000000000000000000000001"
		const address6MlFX2 = accounts[1]
		const addressVWjGytp = accounts[4]
		const addressd74sCS = await afiControllerL8BOZqE.setStrategy.call(addressu48PCUI, addressBPsFqc4, {from: accounts[3]});
		const addresskB52HnM = await afiControllerL8BOZqE.approveStrategy.call(addressIk8WYBZ, addressVhdpT7D, {from: accounts[2]});
		const addressny7452r = await afiControllerL8BOZqE.revokeStrategy.call(addressqKBDZDK, addressx5lb6CZ, {from: accounts[1]});
		const uintZFPd8TS = await afiControllerL8BOZqE.getExpectedReturn.call(address6MlFX2, addressQ4MJia7, uintdpAVptf, {from: accounts[4]});
		const addressUjDC4SG = await afiControllerL8BOZqE.withdrawAll.call(addressVWjGytp, {from: accounts[1]});

		await expect(afiControllerL8BOZqE.setStrategy.call(addressu48PCUI, addressBPsFqc4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxgiJn26 = accounts[3]
		const afiControllerwQ7nFYg = await afiController.new(addressxgiJn26, {from: accounts[4]});
		const uintHTgd20 = BigInt("1632")
		const uintFPajXqv = BigInt("765")
		const address7Pyzzp = accounts[0]
		const addressNCtW1uQ = accounts[4]
		const addressOlEepei = accounts[2]
		const addressbDCyR9 = accounts[4]
		const uintiETwU7t = await afiControllerwQ7nFYg.setSplit.call(uintHTgd20, {from: accounts[4]});
		const addressM95TB27 = await afiControllerwQ7nFYg.withdraw.call(address7Pyzzp, uintFPajXqv, {from: accounts[4]});
		const addressSRu7xP = await afiControllerwQ7nFYg.setGovernance.call(addressNCtW1uQ, {from: accounts[0]});
		const addressguAbz3 = await afiControllerwQ7nFYg.withdrawAll.call(addressOlEepei, {from: accounts[1]});
		const addressOrnua4 = await afiControllerwQ7nFYg.setGovernance.call(addressbDCyR9, {from: accounts[0]});

		await expect(afiControllerwQ7nFYg.withdraw.call(address7Pyzzp, uintFPajXqv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxuciwbo = accounts[3]
		const afiControllerwQ7nFYg = await afiController.new(addressxuciwbo, {from: accounts[4]});
		const uintQgPIhjf = BigInt("551")
		const addressJV9ldPh = accounts[4]
		const addressjWOOGuX = accounts[3]
		const addressbQIXtLJ = accounts[3]
		const addressKyXAb1D = accounts[1]
		const uintiETwU7t = await afiControllerwQ7nFYg.setSplit.call(uintQgPIhjf, {from: accounts[4]});
		const addressxKdi5V8 = await afiControllerwQ7nFYg.approveStrategy.call(addressjWOOGuX, addressJV9ldPh, {from: accounts[4]});
		const addressSRu7xP = await afiControllerwQ7nFYg.setGovernance.call(addressbQIXtLJ, {from: accounts[0]});
		const addressguAbz3 = await afiControllerwQ7nFYg.withdrawAll.call(addressKyXAb1D, {from: accounts[1]});

		await expect(afiControllerwQ7nFYg.setGovernance.call(addressbQIXtLJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMHcdQ6m = accounts[1]
		const afiControllerzBSjuv = await afiController.new(addressMHcdQ6m, {from: accounts[4]});
		const addressFjIyMg4 = accounts[3]
		const addresszMs1dza = accounts[3]
		const addresswP3TQU2 = accounts[3]
		const addressEp9fZ9t = accounts[4]
		const uintMCPg0Pq = await afiControllerzBSjuv.balanceOf.call(addressFjIyMg4, {from: accounts[3]});
		const addressynRLVB4 = await afiControllerzBSjuv.setStrategy.call(addresswP3TQU2, addresszMs1dza, {from: accounts[5]});
		const uintyvyd6r = await afiControllerzBSjuv.balanceOf.call(addressEp9fZ9t, {from: accounts[3]});

		await expect(afiControllerzBSjuv.balanceOf.call(addressFjIyMg4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressH1Z953n = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressH1Z953n, {from: accounts[0]});
		const uintHpeuONk = BigInt("543")
		const addressCfR8CFX = accounts[1]
		const addresstWWz1d5 = accounts[2]
		const addressu6PNJG = accounts[1]
		const uintQREn4VE = BigInt("47")
		const addressUhrgqjo = await afiControllergSmwOYl.inCaseTokensGetStuck.call(addressCfR8CFX, uintHpeuONk, {from: accounts[3]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressu6PNJG, addresstWWz1d5, {from: accounts[3]});
		const uintbJxCJwm = await afiControllergSmwOYl.setSplit.call(uintQREn4VE, {from: accounts[1]});

		await expect(afiControllergSmwOYl.inCaseTokensGetStuck.call(addressCfR8CFX, uintHpeuONk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTHkhLs = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressTHkhLs, {from: accounts[0]});
		const addressOYKVGOY = accounts[4]
		const addressVflnvsA = "0x0000000000000000000000000000000000000001"
		const addresszsCNDjr = accounts[3]
		const addressLswubPE = accounts[2]
		const addressz6DEWr2 = accounts[2]
		const addresshB35O08 = await afiControllergSmwOYl.inCaseStrategyTokenGetStuck.call(addressVflnvsA, addressOYKVGOY, {from: accounts[4]});
		const uintzoTr73 = await afiControllergSmwOYl.balanceOf.call(addresszsCNDjr, {from: accounts[3]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressz6DEWr2, addressLswubPE, {from: accounts[3]});

		await expect(afiControllergSmwOYl.inCaseStrategyTokenGetStuck.call(addressVflnvsA, addressOYKVGOY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrlxmywm = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressrlxmywm, {from: accounts[4]});
		const addressBC8kon4 = accounts[4]
		const addressfrhSifw = "0x0000000000000000000000000000000000000001"
		const addresspIA5ceZ = accounts[3]
		const addressp0qHjbi = accounts[1]
		const addresskdt6H2K = await afiControllerYnRpUeB.setStrategy.call(addressfrhSifw, addressBC8kon4, {from: accounts[4]});
		const addressHCu7mKE = await afiControllerYnRpUeB.setStrategy.call(addressp0qHjbi, addresspIA5ceZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerYnRpUeB.setStrategy.call(addressfrhSifw, addressBC8kon4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdXFjIv2 = accounts[4]
		const afiControlleroHEEcvf = await afiController.new(addressdXFjIv2, {from: accounts[3]});
		const addressu7JLK7U = accounts[0]
		const addresshVpplu0 = accounts[0]
		const addressduosCvt = accounts[0]
		const addressV3CEek = accounts[1]
		const uintlWMQJV = BigInt("370")
		const addressSrpBT1D = await afiControlleroHEEcvf.setVault.call(addresshVpplu0, addressu7JLK7U, {from: accounts[3]});
		const addressGYg9PcO = await afiControlleroHEEcvf.approveStrategy.call(addressV3CEek, addressduosCvt, {from: accounts[0]});
		const uintXfiHtz2 = await afiControlleroHEEcvf.setSplit.call(uintlWMQJV, {from: accounts[4]});

		await expect(afiControlleroHEEcvf.approveStrategy.call(addressV3CEek, addressduosCvt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCKIRtjE = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressCKIRtjE, {from: accounts[0]});
		const addressNjDTv8f = accounts[4]
		const addresswCWaOk = accounts[4]
		const addressKjU5Aaq = accounts[4]
		const addressVo7kmcz = "0x0000000000000000000000000000000000000001"
		const addressYcHDP5I = accounts[4]
		const addressgvI7oI5 = accounts[2]
		const addressGbNlOSF = accounts[2]
		const addresspgbYhjE = await afiControllergSmwOYl.revokeStrategy.call(addresswCWaOk, addressNjDTv8f, {from: accounts[0]});
		const addresshB35O08 = await afiControllergSmwOYl.inCaseStrategyTokenGetStuck.call(addressVo7kmcz, addressKjU5Aaq, {from: accounts[4]});
		const uintzoTr73 = await afiControllergSmwOYl.balanceOf.call(addressYcHDP5I, {from: accounts[3]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressGbNlOSF, addressgvI7oI5, {from: accounts[3]});

		await expect(afiControllergSmwOYl.inCaseStrategyTokenGetStuck.call(addressVo7kmcz, addressKjU5Aaq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNm1Sos = accounts[5]
		const afiControllergSmwOYl = await afiController.new(addressNm1Sos, {from: accounts[0]});
		const addressECdsOL = accounts[3]
		const addressL15yjFf = accounts[2]
		const addressx5Drxuj = accounts[0]
		const addressiOmWde = await afiControllergSmwOYl.setStrategist.call(addressECdsOL, {from: accounts[0]});
		const addresspbWLGf0 = await afiControllergSmwOYl.revokeStrategy.call(addressx5Drxuj, addressL15yjFf, {from: accounts[3]});

		await expect(afiControllergSmwOYl.revokeStrategy.call(addressx5Drxuj, addressL15yjFf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressc98JGf = accounts[3]
		const afiControllerXog2ImQ = await afiController.new(addressc98JGf, {from: accounts[1]});
		const addressoL9d165 = accounts[1]
		const addresspKrHERo = accounts[1]
		const addressLCi43Bn = accounts[3]
		const addresshnVM7B7 = accounts[4]
		const addressbpcAfUY = await afiControllerXog2ImQ.setRewards.call(addressoL9d165, {from: accounts[1]});
		const addressZ8fCiRu = await afiControllerXog2ImQ.setGovernance.call(addresspKrHERo, {from: accounts[4]});
		const uintDKEr7oK = await afiControllerXog2ImQ.balanceOf.call(addressLCi43Bn, {from: accounts[3]});
		const addresse6JzUur = await afiControllerXog2ImQ.setOneSplit.call(addresshnVM7B7, {from: accounts[3]});

		await expect(afiControllerXog2ImQ.setGovernance.call(addresspKrHERo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIzNsB9I = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressIzNsB9I, {from: accounts[4]});
		const uintm2biFZ = BigInt("1572")
		const addressccOf2Gb = accounts[1]
		const addressNPd4G70 = accounts[4]
		const addressrfeKpki = accounts[2]
		const addressH488OnJ = accounts[4]
		const addresstbyZQd = await afiControllerYnRpUeB.earn.call(addressccOf2Gb, uintm2biFZ, {from: accounts[0]});
		const addressKzbFsw4 = await afiControllerYnRpUeB.withdrawAll.call(addressNPd4G70, {from: accounts[3]});
		const addresslTMpm1X = await afiControllerYnRpUeB.setGovernance.call(addressrfeKpki, {from: accounts[0]});
		const addressNn7JZas = await afiControllerYnRpUeB.setOneSplit.call(addressH488OnJ, {from: accounts[5]});

		await expect(afiControllerYnRpUeB.earn.call(addressccOf2Gb, uintm2biFZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAFxHs1g = accounts[1]
		const afiControllervnyP3m3 = await afiController.new(addressAFxHs1g, {from: accounts[3]});
		const addressAlxiOc7 = accounts[1]
		const addressqgZWTG = accounts[4]
		const addressWnUMieT = accounts[2]
		const uintVbb37qA = BigInt("1633")
		const addressuNIMng9 = accounts[0]
		const addresseHLTd70 = accounts[5]
		const addressDFACOVC = accounts[1]
		const addressbHKGYp = accounts[2]
		const uintbDmFcA = BigInt("72")
		const addressPXd6dRn = accounts[0]
		const addressk3ronHA = await afiControllervnyP3m3.setConverter.call(addressWnUMieT, addressqgZWTG, addressAlxiOc7, {from: accounts[3]});
		const uintaSjTrEj = await afiControllervnyP3m3.getExpectedReturn.call(addresseHLTd70, addressuNIMng9, uintVbb37qA, {from: accounts[5]});
		const addressBmxQ8Iu = await afiControllervnyP3m3.approveStrategy.call(addressbHKGYp, addressDFACOVC, {from: accounts[5]});
		const addressr45LrML = await afiControllervnyP3m3.inCaseTokensGetStuck.call(addressPXd6dRn, uintbDmFcA, {from: accounts[3]});

		await expect(afiControllervnyP3m3.getExpectedReturn.call(addresseHLTd70, addressuNIMng9, uintVbb37qA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBquGmCX = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressBquGmCX, {from: accounts[4]});
		const uintEG7uMYa = BigInt("50")
		const addresstlV8l9q = "0x0000000000000000000000000000000000000001"
		const uintu3iq8NI = BigInt("1789")
		const addressmfUjaJ9 = accounts[0]
		const addressqf0xBpR = await afiControllerYnRpUeB.inCaseTokensGetStuck.call(addresstlV8l9q, uintEG7uMYa, {from: accounts[4]});
		const addressEedBfgp = await afiControllerYnRpUeB.withdraw.call(addressmfUjaJ9, uintu3iq8NI, {from: accounts[5]});

		await expect(afiControllerYnRpUeB.inCaseTokensGetStuck.call(addresstlV8l9q, uintEG7uMYa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTper99A = accounts[3]
		const afiControllerwQ7nFYg = await afiController.new(addressTper99A, {from: accounts[4]});
		const uintoPOl0Mo = BigInt("1979")
		const addressArPRCcG = accounts[3]
		const addresswg1PxnK = accounts[0]
		const uintT5EOH0p = BigInt("1630")
		const addressSaySOUE = accounts[5]
		const addresskNfBDhj = "0x0000000000000000000000000000000000000001"
		const addressOeDr80l = accounts[1]
		const addressMhM70cW = await afiControllerwQ7nFYg.yearn.call(addresswg1PxnK, addressArPRCcG, uintoPOl0Mo, {from: accounts[4]});
		const addressG9Lvpcr = await afiControllerwQ7nFYg.yearn.call(addresskNfBDhj, addressSaySOUE, uintT5EOH0p, {from: accounts[1]});
		const addressSRu7xP = await afiControllerwQ7nFYg.setGovernance.call(addressOeDr80l, {from: accounts[0]});

		await expect(afiControllerwQ7nFYg.yearn.call(addresswg1PxnK, addressArPRCcG, uintoPOl0Mo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLuYzaY = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressLuYzaY, {from: accounts[4]});
		const addressbHdtLrc = accounts[2]
		const addresslFX1jdL = accounts[2]
		const uintc8GjYWP = BigInt("50")
		const addressB5Fre50 = "0x0000000000000000000000000000000000000002"
		const addresssnExr39 = await afiControllerYnRpUeB.inCaseStrategyTokenGetStuck.call(addresslFX1jdL, addressbHdtLrc, {from: accounts[4]});
		const addressqf0xBpR = await afiControllerYnRpUeB.inCaseTokensGetStuck.call(addressB5Fre50, uintc8GjYWP, {from: accounts[4]});

		await expect(afiControllerYnRpUeB.inCaseStrategyTokenGetStuck.call(addresslFX1jdL, addressbHdtLrc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNm56NA = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressNm56NA, {from: accounts[4]});
		const uintYiDTIVf = BigInt("76")
		const addressF99upDl = "0x00000000000000000000000000000000000000-1"
		const addressPrE870m = accounts[5]
		const addressqXF1GJy = accounts[3]
		const addressqf0xBpR = await afiControllerYnRpUeB.inCaseTokensGetStuck.call(addressF99upDl, uintYiDTIVf, {from: accounts[4]});
		const addresslI14z4 = await afiControllerYnRpUeB.inCaseStrategyTokenGetStuck.call(addressqXF1GJy, addressPrE870m, {from: accounts[4]});

		await expect(afiControllerYnRpUeB.inCaseTokensGetStuck.call(addressF99upDl, uintYiDTIVf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdUWF8to = accounts[1]
		const afiControllerYnRpUeB = await afiController.new(addressdUWF8to, {from: accounts[4]});
		const addressiTbd2Ds = accounts[0]
		const addressQrzq3Ae = accounts[4]
		const addressKSBcuZN = await afiControllerYnRpUeB.setGovernance.call(addressiTbd2Ds, {from: accounts[4]});
		const addressNn7JZas = await afiControllerYnRpUeB.setOneSplit.call(addressQrzq3Ae, {from: accounts[5]});

		await expect(afiControllerYnRpUeB.setOneSplit.call(addressQrzq3Ae, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressamRnNRs = accounts[3]
		const afiControllerYXkQdLg = await afiController.new(addressamRnNRs, {from: accounts[0]});
		const addresslFRwCsK = accounts[4]
		const addressgLuza3L = accounts[0]
		const addressfuTYopu = accounts[0]
		const addresszVepQ7W = accounts[3]
		const addressIFaBLdK = accounts[0]
		const addresssv1rxDN = await afiControllerYXkQdLg.setOneSplit.call(addresslFRwCsK, {from: accounts[0]});
		const addressX2hvWJs = await afiControllerYXkQdLg.setOneSplit.call(addressgLuza3L, {from: accounts[4]});
		const uintDjvFcMm = await afiControllerYXkQdLg.balanceOf.call(addressfuTYopu, {from: accounts[3]});
		const addressLn2AsL = await afiControllerYXkQdLg.approveStrategy.call(addressIFaBLdK, addresszVepQ7W, {from: accounts[2]});

		await expect(afiControllerYXkQdLg.setOneSplit.call(addressgLuza3L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})