const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressXvTQs2r = accounts[3]
		const afiControllerSvZrUCg = await afiController.new(addressXvTQs2r, {from: accounts[2]});
		const uintGpPFTGp = BigInt("1775")
		const addressSxgGU2s = accounts[1]
		const addresskB0D7wY = accounts[1]
		const addressZtAdRwR = accounts[4]
		const addressQyaK0k = accounts[2]
		const addressLrGO1ol = accounts[0]
		const addressmZjH9Fl = accounts[1]
		const uintetcSgJ = BigInt("772")
		const addressLrjhz5B = accounts[1]
		const uintbjDu5mB = BigInt("1665")
		const addressx1Fy16o = accounts[2]
		const addressTf95Puo = accounts[1]
//		const addressRErhub = await afiControllerSvZrUCg.earn.call(addressSxgGU2s, uintGpPFTGp, {from: accounts[0]});
//		const addressbo3TjsX = await afiControllerSvZrUCg.revokeStrategy.call(addressZtAdRwR, addresskB0D7wY, {from: "0x0000000000000000000000000000000000000001"});
//		const addresseIONr3H = await afiControllerSvZrUCg.setConverter.call(addressmZjH9Fl, addressLrGO1ol, addressQyaK0k, {from: accounts[1]});
//		const addressWNGFYX8 = await afiControllerSvZrUCg.inCaseTokensGetStuck.call(addressLrjhz5B, uintetcSgJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintForW02P = await afiControllerSvZrUCg.getExpectedReturn.call(addressTf95Puo, addressx1Fy16o, uintbjDu5mB, {from: accounts[0]});

		await expect(afiControllerSvZrUCg.earn.call(addressSxgGU2s, uintGpPFTGp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNA8XIo8 = accounts[3]
		const afiControllerWD2Aia = await afiController.new(addressNA8XIo8, {from: accounts[1]});
		const addressc1qdRMJ = accounts[4]
		const uintiQchAm = BigInt("1745")
		const addressmuXg9z0 = accounts[2]
		const addresslMsSyGe = accounts[4]
//		const addressaupJBfF = await afiControllerWD2Aia.setStrategist.call(addressc1qdRMJ, {from: accounts[4]});
//		const uintKFXxkaE = await afiControllerWD2Aia.setSplit.call(uintiQchAm, {from: accounts[1]});
//		const uintBjmqGg9 = await afiControllerWD2Aia.balanceOf.call(addressmuXg9z0, {from: accounts[5]});
//		const uintQonSCSM = await afiControllerWD2Aia.balanceOf.call(addresslMsSyGe, {from: accounts[2]});

		await expect(afiControllerWD2Aia.setStrategist.call(addressc1qdRMJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLEWFUA6 = accounts[5]
		const afiControllerio0TZFa = await afiController.new(addressLEWFUA6, {from: accounts[3]});
		const uint61n9f4 = BigInt("1103")
		const addressWH1gSRL = accounts[4]
		const addresspnbBDC9 = accounts[4]
		const addressUHnslzu = accounts[5]
		const uintco75JDT = BigInt("733")
		const addresshBUEBDA = accounts[1]
		const addressZDYTN4Q = accounts[0]
		const uintpVUKkpf = await afiControllerio0TZFa.setSplit.call(uint61n9f4, {from: accounts[3]});
//		const addressPfbKAu0 = await afiControllerio0TZFa.setConverter.call(addressUHnslzu, addresspnbBDC9, addressWH1gSRL, {from: accounts[0]});
//		const uint2HwM3Y = await afiControllerio0TZFa.getExpectedReturn.call(addressZDYTN4Q, addresshBUEBDA, uintco75JDT, {from: accounts[4]});

		await expect(afiControllerio0TZFa.setConverter.call(addressUHnslzu, addresspnbBDC9, addressWH1gSRL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressyjGaBQF = accounts[1]
		const afiControllerwk8sPfz = await afiController.new(addressyjGaBQF, {from: accounts[3]});
		const addressJu1yLIN = accounts[5]
		const addresszQKw1m8 = accounts[0]
		const addressD1KRT9l = accounts[1]
		const addressBG9w3on = accounts[0]
//		const addressIvmNK7N = await afiControllerwk8sPfz.approveStrategy.call(addresszQKw1m8, addressJu1yLIN, {from: accounts[0]});
//		const addressL5Bv1NW = await afiControllerwk8sPfz.setStrategist.call(addressD1KRT9l, {from: "0x0000000000000000000000000000000000000001"});
//		const addressHl4N5M = await afiControllerwk8sPfz.setOneSplit.call(addressBG9w3on, {from: accounts[3]});

		await expect(afiControllerwk8sPfz.approveStrategy.call(addresszQKw1m8, addressJu1yLIN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVp0zasG = accounts[3]
		const afiControllerUHMI91E = await afiController.new(addressVp0zasG, {from: accounts[2]});
		const uintQKksc8T = BigInt("1572")
		const addresszzUEtN = accounts[4]
		const addressWPzQ8aT = accounts[4]
		const addresstmQtwfm = accounts[1]
//		const addressk78flCC = await afiControllerUHMI91E.withdraw.call(addresszzUEtN, uintQKksc8T, {from: accounts[2]});
//		const addressMGUFqWa = await afiControllerUHMI91E.approveStrategy.call(addresstmQtwfm, addressWPzQ8aT, {from: accounts[1]});

		await expect(afiControllerUHMI91E.withdraw.call(addresszzUEtN, uintQKksc8T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgiw7W2U = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressgiw7W2U, {from: accounts[1]});
		const addressbdP7BHh = accounts[5]
		const addressomk0LFJ = accounts[1]
		const addressSdl4J1V = accounts[1]
		const uintzMwW3Uu = BigInt("586")
		const addressmChJqy = accounts[3]
//		const addressa7o1XWs = await afiControllerJ2Pax9.setOneSplit.call(addressbdP7BHh, {from: accounts[2]});
//		const addressMAWj47F = await afiControllerJ2Pax9.setStrategy.call(addressSdl4J1V, addressomk0LFJ, {from: accounts[3]});
//		const uintPQqu5MD = await afiControllerJ2Pax9.setSplit.call(uintzMwW3Uu, {from: "0x0000000000000000000000000000000000000001"});
//		const uinthzWFUhc = await afiControllerJ2Pax9.balanceOf.call(addressmChJqy, {from: accounts[4]});

		await expect(afiControllerJ2Pax9.setOneSplit.call(addressbdP7BHh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEmv1E3u = accounts[3]
		const afiControllermabGhSm = await afiController.new(addressEmv1E3u, {from: accounts[2]});
		const addressTZ11FQC = accounts[2]
		const addressJKZQmVG = accounts[2]
		const addressT0aNMpw = accounts[0]
		const addressMC9tVj = accounts[3]
		const uintCIPYEeW = BigInt("1255")
		const addressFiD93j7 = accounts[0]
		const addressVcFvuBN = accounts[0]
//		const addressmPc4zK3 = await afiControllermabGhSm.setVault.call(addressJKZQmVG, addressTZ11FQC, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoYutDaP = await afiControllermabGhSm.inCaseStrategyTokenGetStuck.call(addressMC9tVj, addressT0aNMpw, {from: accounts[2]});
//		const addressmyNvk1 = await afiControllermabGhSm.yearn.call(addressVcFvuBN, addressFiD93j7, uintCIPYEeW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllermabGhSm.setVault.call(addressJKZQmVG, addressTZ11FQC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbo83fvE = accounts[3]
		const afiControllerWD2Aia = await afiController.new(addressbo83fvE, {from: accounts[1]});
		const uintkbYMCpD = BigInt("1745")
		const addressSiPsavp = accounts[2]
		const addressIvlLG6P = accounts[3]
		const uintKFXxkaE = await afiControllerWD2Aia.setSplit.call(uintkbYMCpD, {from: accounts[1]});
//		const uintBjmqGg9 = await afiControllerWD2Aia.balanceOf.call(addressSiPsavp, {from: accounts[5]});
//		const uintQonSCSM = await afiControllerWD2Aia.balanceOf.call(addressIvlLG6P, {from: accounts[2]});

		await expect(afiControllerWD2Aia.balanceOf.call(addressSiPsavp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressb4xDP8s = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressb4xDP8s, {from: accounts[1]});
		const addressQ5Dsvau = accounts[1]
		const addressdsvZeu8 = accounts[1]
		const addressKojgjtq = accounts[0]
		const addressY9TPDcr = accounts[4]
		const uintXkrrP0r = BigInt("586")
		const addressHPf5DHy = accounts[3]
//		const addressMAWj47F = await afiControllerJ2Pax9.setStrategy.call(addressdsvZeu8, addressQ5Dsvau, {from: accounts[3]});
//		const addressKpt2cv = await afiControllerJ2Pax9.setOneSplit.call(addressKojgjtq, {from: accounts[4]});
//		const addressIRpCsh1 = await afiControllerJ2Pax9.setOneSplit.call(addressY9TPDcr, {from: accounts[0]});
//		const uintPQqu5MD = await afiControllerJ2Pax9.setSplit.call(uintXkrrP0r, {from: "0x0000000000000000000000000000000000000001"});
//		const uinthzWFUhc = await afiControllerJ2Pax9.balanceOf.call(addressHPf5DHy, {from: accounts[4]});

		await expect(afiControllerJ2Pax9.setStrategy.call(addressdsvZeu8, addressQ5Dsvau, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLqc2EcW = accounts[2]
		const afiControllergVyGSkv = await afiController.new(addressLqc2EcW, {from: accounts[3]});
		const addressHYAcvq = "0x0000000000000000000000000000000000000001"
		const addressifEaPl = "0x0000000000000000000000000000000000000001"
		const addressq3m5cl1 = accounts[5]
		const addressN6MOzov = accounts[3]
		const addressP57hiIU = accounts[0]
		const uintEXXeKq = BigInt("1460")
		const addressXgDqhNW = accounts[2]
		const addressa8qn7B5 = accounts[4]
		const addressz0K3Ayx = await afiControllergVyGSkv.setVault.call(addressifEaPl, addressHYAcvq, {from: accounts[3]});
//		const addressBSIdfpd = await afiControllergVyGSkv.approveStrategy.call(addressN6MOzov, addressq3m5cl1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressb6MmYw = await afiControllergVyGSkv.setOneSplit.call(addressP57hiIU, {from: accounts[3]});
//		const addressBo9gNH = await afiControllergVyGSkv.yearn.call(addressa8qn7B5, addressXgDqhNW, uintEXXeKq, {from: accounts[4]});

		await expect(afiControllergVyGSkv.approveStrategy.call(addressN6MOzov, addressq3m5cl1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmWFfvaV = accounts[1]
		const afiControllerwk8sPfz = await afiController.new(addressmWFfvaV, {from: accounts[3]});
		const addressD7p5GFH = accounts[2]
		const addressLXRb9z = "0x0000000000000000000000000000000000000001"
		const addressmQE4Wl = accounts[5]
		const addressfgFyq0 = accounts[1]
		const addressBrip5Av = accounts[3]
		const addressmBCTxtq = "0x0000000000000000000000000000000000000001"
		const addressqJJw0Jj = accounts[1]
//		const addressHheKzdo = await afiControllerwk8sPfz.inCaseStrategyTokenGetStuck.call(addressLXRb9z, addressD7p5GFH, {from: accounts[4]});
//		const addressIvmNK7N = await afiControllerwk8sPfz.approveStrategy.call(addressfgFyq0, addressmQE4Wl, {from: accounts[0]});
//		const addressVHfAFQo = await afiControllerwk8sPfz.revokeStrategy.call(addressmBCTxtq, addressBrip5Av, {from: accounts[2]});
//		const addressL5Bv1NW = await afiControllerwk8sPfz.setStrategist.call(addressqJJw0Jj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerwk8sPfz.inCaseStrategyTokenGetStuck.call(addressLXRb9z, addressD7p5GFH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZGK5MSN = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressZGK5MSN, {from: accounts[1]});
		const addresszZJIxws = accounts[4]
		const addressTcJOq8K = accounts[4]
		const addressdViUZX = accounts[5]
		const addresssUbCOfC = accounts[1]
		const addressTsZzB5V = accounts[4]
		const addressvHiyFI = accounts[2]
//		const addressOFZFZXL = await afiControllerJ2Pax9.revokeStrategy.call(addressTcJOq8K, addresszZJIxws, {from: accounts[0]});
//		const addressa7o1XWs = await afiControllerJ2Pax9.setOneSplit.call(addressdViUZX, {from: accounts[2]});
//		const addressBcrG3Vi = await afiControllerJ2Pax9.setOneSplit.call(addresssUbCOfC, {from: accounts[0]});
//		const addresswfqu9ZH = await afiControllerJ2Pax9.revokeStrategy.call(addressvHiyFI, addressTsZzB5V, {from: accounts[3]});

		await expect(afiControllerJ2Pax9.revokeStrategy.call(addressTcJOq8K, addresszZJIxws, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressghdKWuN = accounts[1]
		const afiControllerwk8sPfz = await afiController.new(addressghdKWuN, {from: accounts[3]});
		const addressnCsFaqK = "0x00000000000000000000000000000000000000-1"
		const addressbj8sfG = accounts[2]
		const addressWH1e627 = accounts[4]
//		const addressL5Bv1NW = await afiControllerwk8sPfz.setStrategist.call(addressnCsFaqK, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKsMGPHS = await afiControllerwk8sPfz.revokeStrategy.call(addressWH1e627, addressbj8sfG, {from: accounts[5]});

		await expect(afiControllerwk8sPfz.setStrategist.call(addressnCsFaqK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVUSYsb5 = accounts[4]
		const afiControlleriMUDGuN = await afiController.new(addressVUSYsb5, {from: "0x0000000000000000000000000000000000000001"});
		const addressfaQDoHD = accounts[5]
		const addresssH8VWLw = accounts[3]
		const addressmce1xsx = "0x0000000000000000000000000000000000000001"
		const address51nhdD = accounts[3]
		const uintNnptJfI = BigInt("112")
		const addressHCjwwtB = accounts[1]
		const addressGVBJffE = await afiControlleriMUDGuN.setRewards.call(addressfaQDoHD, {from: accounts[3]});
		const addressMJN09jR = await afiControlleriMUDGuN.withdrawAll.call(addresssH8VWLw, {from: accounts[0]});
		const addressQQE3WAF = await afiControlleriMUDGuN.inCaseStrategyTokenGetStuck.call(address51nhdD, addressmce1xsx, {from: accounts[0]});
		const uintQ2ko62Z = await afiControlleriMUDGuN.setSplit.call(uintNnptJfI, {from: accounts[1]});
		const addresskyJIl8w = await afiControlleriMUDGuN.withdrawAll.call(addressHCjwwtB, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressHbEomoM = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressHbEomoM, {from: accounts[1]});
		const addressqXdNQgu = accounts[0]
		const addressL7WbfF4 = accounts[4]
		const addressbz1ubrw = accounts[4]
		const uintMZrdL7 = BigInt("1512")
		const addressDFHP1fj = accounts[1]
		const addressxcfgGjN = accounts[2]
		const addresslJI2oL2 = accounts[5]
		const addresslJ5i0gB = accounts[1]
		const addresswVmXGBI = accounts[5]
		const addressvaVFLUA = accounts[2]
		const uintCZJ2LvK = BigInt("1492")
		const addressjM4lFy = accounts[3]
		const addressyfqvRyP = await afiControllerJ2Pax9.setGovernance.call(addressqXdNQgu, {from: accounts[1]});
//		const addressOFZFZXL = await afiControllerJ2Pax9.revokeStrategy.call(addressbz1ubrw, addressL7WbfF4, {from: accounts[0]});
//		const addressacc1q5 = await afiControllerJ2Pax9.yearn.call(addressxcfgGjN, addressDFHP1fj, uintMZrdL7, {from: accounts[0]});
//		const addressa7o1XWs = await afiControllerJ2Pax9.setOneSplit.call(addresslJI2oL2, {from: accounts[2]});
//		const addressBcrG3Vi = await afiControllerJ2Pax9.setOneSplit.call(addresslJ5i0gB, {from: accounts[0]});
//		const addresswfqu9ZH = await afiControllerJ2Pax9.revokeStrategy.call(addressvaVFLUA, addresswVmXGBI, {from: accounts[3]});
//		const addresse1YY5Jl = await afiControllerJ2Pax9.earn.call(addressjM4lFy, uintCZJ2LvK, {from: accounts[1]});

		await expect(afiControllerJ2Pax9.revokeStrategy.call(addressbz1ubrw, addressL7WbfF4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTgwiFP9 = accounts[1]
		const afiControllerwk8sPfz = await afiController.new(addressTgwiFP9, {from: accounts[3]});
		const uintwvF0Sbs = BigInt("221")
		const addressTOHZaYj = accounts[2]
		const addressNXc2PwR = accounts[1]
		const addresstFXR5rv = accounts[1]
		const addressRDDl2Pb = accounts[2]
		const addressTkvidk1 = "0x0000000000000000000000000000000000000000"
//		const addressX3iH9Va = await afiControllerwk8sPfz.yearn.call(addressNXc2PwR, addressTOHZaYj, uintwvF0Sbs, {from: accounts[3]});
//		const addressXdlUV7Z = await afiControllerwk8sPfz.revokeStrategy.call(addressRDDl2Pb, addresstFXR5rv, {from: accounts[2]});
//		const addressL5Bv1NW = await afiControllerwk8sPfz.setStrategist.call(addressTkvidk1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerwk8sPfz.yearn.call(addressNXc2PwR, addressTOHZaYj, uintwvF0Sbs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjoBiM0y = accounts[3]
		const afiControllerUHMI91E = await afiController.new(addressjoBiM0y, {from: accounts[2]});
		const addressMpWfhtj = accounts[3]
		const addresssxEa55h = accounts[4]
		const addressBvuglmn = accounts[3]
		const address3xOwxA = accounts[5]
		const addressRYj1XDs = accounts[1]
		const addressF3LAPjH = await afiControllerUHMI91E.setConverter.call(addressBvuglmn, addresssxEa55h, addressMpWfhtj, {from: accounts[2]});
//		const addressMGUFqWa = await afiControllerUHMI91E.approveStrategy.call(addressRYj1XDs, address3xOwxA, {from: accounts[1]});

		await expect(afiControllerUHMI91E.approveStrategy.call(addressRYj1XDs, address3xOwxA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressL4GsUw = accounts[3]
		const afiControllercp3lbEb = await afiController.new(addressL4GsUw, {from: accounts[1]});
		const uintYz1MNQE = BigInt("1736")
		const addresspXz7aCM = accounts[1]
		const addressjrKr5w = accounts[5]
		const addressn78ZPDT = accounts[4]
		const addressGD2wQNr = accounts[0]
		const addressGVBXfbB = "0x0000000000000000000000000000000000000001"
		const uintWcg1TO = BigInt("533")
		const addressKs2nB80 = accounts[3]
		const addressry4ecw = accounts[3]
//		const uintcmB4LKj = await afiControllercp3lbEb.getExpectedReturn.call(addressjrKr5w, addresspXz7aCM, uintYz1MNQE, {from: accounts[1]});
//		const addressQlGSAr = await afiControllercp3lbEb.setConverter.call(addressGVBXfbB, addressGD2wQNr, addressn78ZPDT, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswxH3Usa = await afiControllercp3lbEb.yearn.call(addressry4ecw, addressKs2nB80, uintWcg1TO, {from: accounts[2]});

		await expect(afiControllercp3lbEb.getExpectedReturn.call(addressjrKr5w, addresspXz7aCM, uintYz1MNQE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDPbZixy = accounts[1]
		const afiControllerwYFUsz = await afiController.new(addressDPbZixy, {from: accounts[2]});
		const addressNHFaX2 = accounts[2]
		const uinthxAx35 = BigInt("1650")
		const addressr4GSXwf = accounts[3]
		const addressxrdN8w = accounts[0]
//		const addressyReTlLd = await afiControllerwYFUsz.withdrawAll.call(addressNHFaX2, {from: accounts[1]});
//		const addressTRIw3w = await afiControllerwYFUsz.withdraw.call(addressr4GSXwf, uinthxAx35, {from: accounts[4]});
//		const addressBjw1tVz = await afiControllerwYFUsz.setStrategist.call(addressxrdN8w, {from: accounts[0]});

		await expect(afiControllerwYFUsz.withdrawAll.call(addressNHFaX2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJ01rsRi = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressJ01rsRi, {from: accounts[1]});
		const addressULIPi4g = accounts[1]
		const addressvi1Cb1s = accounts[5]
		const uintRFsmo0X = BigInt("970")
		const addressQntWCeI = accounts[1]
		const uintafR9fdE = BigInt("1111")
		const addressQxasuP = accounts[4]
		const addressewjV9lB = accounts[4]
		const addressHgczIya = accounts[4]
		const addressNV5BH1J = accounts[1]
//		const addressn3ASUDI = await afiControllerJ2Pax9.setStrategy.call(addressvi1Cb1s, addressULIPi4g, {from: accounts[1]});
//		const addressWGIJOf = await afiControllerJ2Pax9.inCaseTokensGetStuck.call(addressQntWCeI, uintRFsmo0X, {from: accounts[3]});
//		const uintw9U3p8v = await afiControllerJ2Pax9.setSplit.call(uintafR9fdE, {from: accounts[4]});
//		const addressOFZFZXL = await afiControllerJ2Pax9.revokeStrategy.call(addressewjV9lB, addressQxasuP, {from: accounts[0]});
//		const addresss1uXhPZ = await afiControllerJ2Pax9.inCaseStrategyTokenGetStuck.call(addressNV5BH1J, addressHgczIya, {from: accounts[0]});

		await expect(afiControllerJ2Pax9.setStrategy.call(addressvi1Cb1s, addressULIPi4g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDQpPf3l = accounts[1]
		const afiControllerwk8sPfz = await afiController.new(addressDQpPf3l, {from: accounts[3]});
		const addressvyHgejR = accounts[5]
		const addressJUKFW2f = "0x0000000000000000000000000000000000000000"
//		const addressXtGqlLG = await afiControllerwk8sPfz.setRewards.call(addressvyHgejR, {from: accounts[2]});
//		const addressL5Bv1NW = await afiControllerwk8sPfz.setStrategist.call(addressJUKFW2f, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerwk8sPfz.setRewards.call(addressvyHgejR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOT6zmYT = accounts[3]
		const afiControllerUHMI91E = await afiController.new(addressOT6zmYT, {from: accounts[2]});
		const addressdF30BJX = accounts[1]
		const addressFWI0Iky = accounts[4]
		const addressJbhvRu0 = accounts[2]
		const addressjoJ5nxV = await afiControllerUHMI91E.setOneSplit.call(addressdF30BJX, {from: accounts[2]});
//		const addressMGUFqWa = await afiControllerUHMI91E.approveStrategy.call(addressJbhvRu0, addressFWI0Iky, {from: accounts[1]});

		await expect(afiControllerUHMI91E.approveStrategy.call(addressJbhvRu0, addressFWI0Iky, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrATRq5q = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressrATRq5q, {from: accounts[1]});
		const uintxlm1fDz = BigInt("1081")
		const addressjpRsM1V = accounts[4]
		const addressY6hFcQy = accounts[2]
//		const addresskL9hdhp = await afiControllerJ2Pax9.inCaseTokensGetStuck.call(addressjpRsM1V, uintxlm1fDz, {from: accounts[3]});
//		const addressa7o1XWs = await afiControllerJ2Pax9.setOneSplit.call(addressY6hFcQy, {from: accounts[2]});

		await expect(afiControllerJ2Pax9.inCaseTokensGetStuck.call(addressjpRsM1V, uintxlm1fDz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressler9D7w = accounts[1]
		const afiControllerfHcwAOX = await afiController.new(addressler9D7w, {from: accounts[3]});
		const addressjrOe5jV = accounts[4]
		const addressmAxbsSC = accounts[5]
		const addresscz0IOjJ = accounts[3]
		const addressqnee7zL = accounts[3]
//		const addressnhvzHHL = await afiControllerfHcwAOX.withdrawAll.call(addressjrOe5jV, {from: accounts[3]});
//		const addressTXsgFGg = await afiControllerfHcwAOX.setConverter.call(addressqnee7zL, addresscz0IOjJ, addressmAxbsSC, {from: accounts[5]});

		await expect(afiControllerfHcwAOX.withdrawAll.call(addressjrOe5jV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskByauk = accounts[1]
		const afiControllerwk8sPfz = await afiController.new(addresskByauk, {from: accounts[3]});
		const addressOVf10Uq = accounts[1]
		const addressCBDsqMe = accounts[2]
		const addresskHI0aDs = accounts[5]
//		const addresshz0evc = await afiControllerwk8sPfz.inCaseStrategyTokenGetStuck.call(addressCBDsqMe, addressOVf10Uq, {from: accounts[3]});
//		const addressXtGqlLG = await afiControllerwk8sPfz.setRewards.call(addresskHI0aDs, {from: accounts[2]});

		await expect(afiControllerwk8sPfz.inCaseStrategyTokenGetStuck.call(addressCBDsqMe, addressOVf10Uq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfaBgN1g = "0x0000000000000000000000000000000000000001"
		const afiControllerJ2Pax9 = await afiController.new(addressfaBgN1g, {from: accounts[1]});
		const addressFkPqYrc = accounts[5]
		const addressqeAsf8R = accounts[2]
		const addressK3Ki1Yg = accounts[5]
		const addressVTVPUY4 = accounts[3]
		const addressKrqJebd = accounts[3]
		const addressjXskzJ = accounts[5]
		const addressPh3STf7 = await afiControllerJ2Pax9.revokeStrategy.call(addressqeAsf8R, addressFkPqYrc, {from: accounts[1]});
//		const addressOFZFZXL = await afiControllerJ2Pax9.revokeStrategy.call(addressVTVPUY4, addressK3Ki1Yg, {from: accounts[0]});
//		const addressSIpsGsK = await afiControllerJ2Pax9.setVault.call(addressjXskzJ, addressKrqJebd, {from: accounts[3]});

		await expect(afiControllerJ2Pax9.revokeStrategy.call(addressVTVPUY4, addressK3Ki1Yg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnVx4jTM = accounts[3]
		const afiControllerUHMI91E = await afiController.new(addressnVx4jTM, {from: accounts[2]});
		const addressOYRG60s = accounts[3]
		const uintEs84OiV = BigInt("1580")
		const addressylkkcYg = accounts[4]
		const addressrf0zK5T = await afiControllerUHMI91E.setStrategist.call(addressOYRG60s, {from: accounts[2]});
//		const addressk78flCC = await afiControllerUHMI91E.withdraw.call(addressylkkcYg, uintEs84OiV, {from: accounts[2]});

		await expect(afiControllerUHMI91E.withdraw.call(addressylkkcYg, uintEs84OiV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressARNrn0e = accounts[3]
		const afiControllerUHMI91E = await afiController.new(addressARNrn0e, {from: accounts[2]});
		const addressnoCYhEo = accounts[3]
		const addressZw4Uoql = accounts[1]
		const addresstwLiE66 = accounts[3]
		const addressH9VOjTd = accounts[5]
		const uintL6aNlDP = BigInt("1580")
		const addressaw4RdON = accounts[5]
		const addressMQltMf8 = await afiControllerUHMI91E.setRewards.call(addressnoCYhEo, {from: accounts[2]});
//		const addressm38PBq0 = await afiControllerUHMI91E.setGovernance.call(addressZw4Uoql, {from: accounts[5]});
//		const addressSBRPJ3m = await afiControllerUHMI91E.approveStrategy.call(addressH9VOjTd, addresstwLiE66, {from: accounts[0]});
//		const addressk78flCC = await afiControllerUHMI91E.withdraw.call(addressaw4RdON, uintL6aNlDP, {from: accounts[2]});

		await expect(afiControllerUHMI91E.setGovernance.call(addressZw4Uoql, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZWRWF8 = accounts[3]
		const afiControllerS4PC7vR = await afiController.new(addressZWRWF8, {from: accounts[0]});
		const addressQeNbCSs = accounts[0]
		const address5f3qKd = accounts[4]
		const addressy8mxHBg = accounts[4]
		const addresscDN20ax = await afiControllerS4PC7vR.setStrategist.call(addressQeNbCSs, {from: accounts[0]});
		const addressYv0nN5H = await afiControllerS4PC7vR.approveStrategy.call(addressy8mxHBg, address5f3qKd, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressFMmxj7 = accounts[3]
		const afiControllerUHMI91E = await afiController.new(addressFMmxj7, {from: accounts[2]});
		const uintLgaaQTE = BigInt("1890")
		const address5fEGRu = accounts[2]
		const uintiy1x6gj = BigInt("1582")
		const addressUme0nlt = accounts[4]
		const addressmf1psq = accounts[1]
//		const addressqCaTAta = await afiControllerUHMI91E.inCaseTokensGetStuck.call(address5fEGRu, uintLgaaQTE, {from: accounts[2]});
//		const addressk78flCC = await afiControllerUHMI91E.withdraw.call(addressUme0nlt, uintiy1x6gj, {from: accounts[2]});
//		const addressP4YbWO = await afiControllerUHMI91E.setGovernance.call(addressmf1psq, {from: accounts[2]});

		await expect(afiControllerUHMI91E.inCaseTokensGetStuck.call(address5fEGRu, uintLgaaQTE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})