const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressDwmSkvl = accounts[2]
		const ControllerRypaL7l = await Controller.new(addressDwmSkvl, {from: accounts[3]});
		const uintNnT4gTp = BigInt("1068")
		const addressDP3KFW1 = "0x0000000000000000000000000000000000000001"
		const addressVj9UmV = accounts[2]
		const addressIjLIosb = accounts[0]
		const uintO5W7IpL = BigInt("966")
		const addresseeTHSjL = accounts[3]
		const addressKzKXKYT = accounts[1]
		const uintQNKnNei = await ControllerRypaL7l.setSplit.call(uintNnT4gTp, {from: accounts[0]});
		const addressvWcugVP = await ControllerRypaL7l.setGovernance.call(addressDP3KFW1, {from: accounts[2]});
		const addresslQyJ4ZZ = await ControllerRypaL7l.setStrategy.call(addressIjLIosb, addressVj9UmV, {from: accounts[4]});
		const addressSaY0wrt = await ControllerRypaL7l.yearn.call(addressKzKXKYT, addresseeTHSjL, uintO5W7IpL, {from: accounts[1]});

		await expect(ControllerRypaL7l.setSplit.call(uintNnT4gTp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbkuRGr9 = accounts[0]
		const ControllerQ2q3Muw = await Controller.new(addressbkuRGr9, {from: accounts[0]});
		const addressyBtiSBO = "0x0000000000000000000000000000000000000001"
		const addressB2mayHp = accounts[5]
		const addresss7JIJ2 = accounts[3]
		const address2Mh6Q5 = accounts[3]
		const addresstFVZ2p3 = accounts[0]
		const addressCQiP8sA = accounts[4]
		const addresskJd1cv9 = accounts[4]
		const addresssBjttwz = accounts[3]
		const addressMYhgoTE = accounts[2]
		const addressYXRtbT5 = accounts[2]
		const addressMccGEMW = accounts[1]
		const addressXn9vX5z = await ControllerQ2q3Muw.setStrategy.call(addressB2mayHp, addressyBtiSBO, {from: accounts[1]});
		const addressV93ttS = await ControllerQ2q3Muw.setConverter.call(addresstFVZ2p3, address2Mh6Q5, addresss7JIJ2, {from: accounts[0]});
		const addressEUNUbq = await ControllerQ2q3Muw.setConverter.call(addresssBjttwz, addresskJd1cv9, addressCQiP8sA, {from: accounts[4]});
		const addressnnS97nk = await ControllerQ2q3Muw.setConverter.call(addressMccGEMW, addressYXRtbT5, addressMYhgoTE, {from: accounts[4]});

		await expect(ControllerQ2q3Muw.setStrategy.call(addressB2mayHp, addressyBtiSBO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbq9Es14 = accounts[4]
		const ControllerWe5RUGH = await Controller.new(addressbq9Es14, {from: accounts[2]});
		const addressEarYei = accounts[4]
		const addressAN3ZrAt = accounts[2]
		const addressCahsKpZ = accounts[5]
		const addressunAFHZ3 = accounts[0]
		const uintUzoOCqS = BigInt("1872")
		const addressKiYaCT = accounts[0]
		const addressKWDatYc = accounts[1]
		const addressaQxqcoF = await ControllerWe5RUGH.setStrategist.call(addressEarYei, {from: accounts[3]});
		const addressKV4V5m9 = await ControllerWe5RUGH.setOneSplit.call(addressAN3ZrAt, {from: accounts[4]});
		const addressRBdOtS = await ControllerWe5RUGH.approveStrategy.call(addressunAFHZ3, addressCahsKpZ, {from: accounts[3]});
		const addressHVJmAQI = await ControllerWe5RUGH.yearn.call(addressKWDatYc, addressKiYaCT, uintUzoOCqS, {from: accounts[0]});

		await expect(ControllerWe5RUGH.setStrategist.call(addressEarYei, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiT7s8sD = accounts[4]
		const Controllerrgor10q = await Controller.new(addressiT7s8sD, {from: accounts[3]});
		const addresswyMFjK4 = accounts[3]
		const addressueTafvE = accounts[3]
		const addresscHs5ypK = "0x0000000000000000000000000000000000000001"
		const addressb3gsY4C = accounts[0]
		const uintiXKtxiV = await Controllerrgor10q.balanceOf.call(addresswyMFjK4, {from: accounts[1]});
		const addressCichXca = await Controllerrgor10q.setGovernance.call(addressueTafvE, {from: accounts[2]});
		const addressyRZ63Yd = await Controllerrgor10q.setOneSplit.call(addresscHs5ypK, {from: accounts[0]});
		const addressBDmf0E9 = await Controllerrgor10q.setStrategist.call(addressb3gsY4C, {from: accounts[0]});

		await expect(Controllerrgor10q.balanceOf.call(addresswyMFjK4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOfsGvP6 = accounts[3]
		const ControllerSkvOasO = await Controller.new(addressOfsGvP6, {from: accounts[4]});
		const addressEMDKDYy = accounts[5]
		const addressvNs1eo7 = accounts[5]
		const uintUnmwN4B = BigInt("752")
		const addressoLU5gA6 = accounts[4]
		const addressmAHySRJ = accounts[0]
		const addressjtio8V2 = await ControllerSkvOasO.revokeStrategy.call(addressvNs1eo7, addressEMDKDYy, {from: accounts[2]});
		const addresshFm4GMl = await ControllerSkvOasO.yearn.call(addressmAHySRJ, addressoLU5gA6, uintUnmwN4B, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerSkvOasO.revokeStrategy.call(addressvNs1eo7, addressEMDKDYy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFp6q3n = accounts[2]
		const Controllercfu3wza = await Controller.new(addressFp6q3n, {from: accounts[2]});
		const addresswLkvFZE = accounts[1]
		const addressMllmY7M = accounts[1]
		const addressWusbXl9 = accounts[0]
		const addressdzFAIdu = accounts[0]
		const addressS0DXNVu = accounts[0]
		const addressxTzIT4l = accounts[0]
		const uintMaAjZtr = BigInt("1901")
		const addresskMhfruV = accounts[4]
		const addresssmCNIpx = accounts[3]
		const addressQ1XhjZ0 = accounts[5]
		const addresshGtsJCf = await Controllercfu3wza.setOneSplit.call(addresswLkvFZE, {from: accounts[3]});
		const addressPi24d2l = await Controllercfu3wza.setConverter.call(addressdzFAIdu, addressWusbXl9, addressMllmY7M, {from: accounts[1]});
		const addressFotTnci = await Controllercfu3wza.setStrategy.call(addressxTzIT4l, addressS0DXNVu, {from: accounts[1]});
		const addresszE4zwbW = await Controllercfu3wza.yearn.call(addresssmCNIpx, addresskMhfruV, uintMaAjZtr, {from: accounts[3]});
		const addressrCg7rix = await Controllercfu3wza.setGovernance.call(addressQ1XhjZ0, {from: accounts[3]});

		await expect(Controllercfu3wza.setOneSplit.call(addresswLkvFZE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXSd55A = accounts[3]
		const ControllerZwTMyz1 = await Controller.new(addressXSd55A, {from: accounts[2]});
		const addressMW7plJY = accounts[5]
		const addressJ1S3D5N = accounts[2]
		const addressLwWVjDp = accounts[5]
		const addressYniqGq = "0x0000000000000000000000000000000000000001"
		const addresspLuWvAy = accounts[2]
		const addressbxegqnU = accounts[2]
		const addressWnPT2l2 = await ControllerZwTMyz1.withdrawAll.call(addressMW7plJY, {from: accounts[2]});
		const addressKFi61I0 = await ControllerZwTMyz1.setConverter.call(addressYniqGq, addressLwWVjDp, addressJ1S3D5N, {from: accounts[3]});
		const addressUniondS = await ControllerZwTMyz1.setStrategy.call(addressbxegqnU, addresspLuWvAy, {from: accounts[1]});

		await expect(ControllerZwTMyz1.withdrawAll.call(addressMW7plJY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQu3WeVh = accounts[1]
		const ControllerWqr6snO = await Controller.new(addressQu3WeVh, {from: accounts[1]});
		const addressBv4auQ = accounts[3]
		const addresscM3PS9t = accounts[2]
		const addressjFdj2Mn = accounts[4]
		const address2c4733 = accounts[2]
		const uintiijqVVm = BigInt("1609")
		const addressKPg3nNs = "0x0000000000000000000000000000000000000001"
		const uintt0pFhWX = BigInt("257")
		const addressTvDZXW = accounts[5]
		const addressafC9bX = accounts[2]
		const addressSpDWpNF = await ControllerWqr6snO.inCaseStrategyTokenGetStuck.call(addresscM3PS9t, addressBv4auQ, {from: accounts[1]});
		const addressbH61Jsu = await ControllerWqr6snO.setVault.call(address2c4733, addressjFdj2Mn, {from: accounts[1]});
		const addressG4PYR0R = await ControllerWqr6snO.earn.call(addressKPg3nNs, uintiijqVVm, {from: accounts[5]});
		const uintIMJuvHO = await ControllerWqr6snO.getExpectedReturn.call(addressafC9bX, addressTvDZXW, uintt0pFhWX, {from: accounts[0]});

		await expect(ControllerWqr6snO.inCaseStrategyTokenGetStuck.call(addresscM3PS9t, addressBv4auQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAiye1I5 = accounts[5]
		const ControllerjI15QjK = await Controller.new(addressAiye1I5, {from: accounts[5]});
		const addressmBJMx6v = accounts[1]
		const addressjvBuG4 = accounts[4]
		const addressMUujgoC = accounts[2]
		const addressvTellB = accounts[3]
		const addressflAA7p7 = accounts[2]
		const addressLGXBauE = accounts[1]
		const uintuacjS3 = BigInt("1505")
		const addressPvbc89K = accounts[2]
		const addresslLGv6o = accounts[4]
		const addressijOW00u = "0x0000000000000000000000000000000000000001"
		const addressTtn97Ze = await ControllerjI15QjK.setRewards.call(addressmBJMx6v, {from: accounts[5]});
		const addressRJ7bfnh = await ControllerjI15QjK.revokeStrategy.call(addressMUujgoC, addressjvBuG4, {from: accounts[0]});
		const addressJBJPn2e = await ControllerjI15QjK.setVault.call(addressflAA7p7, addressvTellB, {from: accounts[1]});
		const addresskirSGbL = await ControllerjI15QjK.setGovernance.call(addressLGXBauE, {from: accounts[0]});
		const addressElSIRD7 = await ControllerjI15QjK.yearn.call(addresslLGv6o, addressPvbc89K, uintuacjS3, {from: accounts[4]});
		const addressQ56ci6O = await ControllerjI15QjK.setStrategist.call(addressijOW00u, {from: accounts[2]});

		await expect(ControllerjI15QjK.revokeStrategy.call(addressMUujgoC, addressjvBuG4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGYB6kb6 = accounts[2]
		const ControllerRypaL7l = await Controller.new(addressGYB6kb6, {from: accounts[3]});
		const uintBUtBZBK = BigInt("966")
		const addressGb9Qdfa = accounts[2]
		const addressI9s25BQ = accounts[1]
		const addressSaY0wrt = await ControllerRypaL7l.yearn.call(addressI9s25BQ, addressGb9Qdfa, uintBUtBZBK, {from: accounts[1]});

		await expect(ControllerRypaL7l.yearn.call(addressI9s25BQ, addressGb9Qdfa, uintBUtBZBK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKCivrG2 = accounts[4]
		const ControllerzcY1h2g = await Controller.new(addressKCivrG2, {from: accounts[3]});
		const uintAEfZPfb = BigInt("1685")
		const addressNKRpjcV = accounts[0]
		const addressmVcxRdx = accounts[3]
		const addresskpDJWwu = accounts[2]
		const addressnovehR = await ControllerzcY1h2g.withdraw.call(addressNKRpjcV, uintAEfZPfb, {from: "0x0000000000000000000000000000000000000001"});
		const addresssYwyflI = await ControllerzcY1h2g.setOneSplit.call(addressmVcxRdx, {from: accounts[2]});
		const uintQmbFWoM = await ControllerzcY1h2g.balanceOf.call(addresskpDJWwu, {from: accounts[2]});

		await expect(ControllerzcY1h2g.withdraw.call(addressNKRpjcV, uintAEfZPfb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressB7toZat = accounts[2]
		const ControllerRypaL7l = await Controller.new(addressB7toZat, {from: accounts[3]});
		const addressXi29LS = accounts[0]
		const addressVeUq8Go = accounts[0]
		const addressVMdzvUv = accounts[2]
		const uintg63zmlK = BigInt("1089")
		const uintYQBCVbY = BigInt("966")
		const addressKbcRn6T = accounts[2]
		const addressVXYDm7c = accounts[2]
		const addressiL4ZuAK = await ControllerRypaL7l.setConverter.call(addressVMdzvUv, addressVeUq8Go, addressXi29LS, {from: accounts[4]});
		const uintQNKnNei = await ControllerRypaL7l.setSplit.call(uintg63zmlK, {from: accounts[0]});
		const addressSaY0wrt = await ControllerRypaL7l.yearn.call(addressVXYDm7c, addressKbcRn6T, uintYQBCVbY, {from: accounts[1]});

		await expect(ControllerRypaL7l.setConverter.call(addressVMdzvUv, addressVeUq8Go, addressXi29LS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressr5JyQZ4 = accounts[3]
		const ControllerSkvOasO = await Controller.new(addressr5JyQZ4, {from: accounts[4]});
		const uinthbzlMNu = BigInt("1428")
		const addressvG0oRk5 = "0x0000000000000000000000000000000000000001"
		const addressXSq7Kjc = accounts[3]
		const addresscxHDo3m = accounts[5]
		const addressxWxZniz = accounts[5]
		const addressTGqcZEX = accounts[0]
		const addressY82kQaa = await ControllerSkvOasO.yearn.call(addressXSq7Kjc, addressvG0oRk5, uinthbzlMNu, {from: accounts[4]});
		const addressjtio8V2 = await ControllerSkvOasO.revokeStrategy.call(addressxWxZniz, addresscxHDo3m, {from: accounts[2]});
		const addressmM8X4mX = await ControllerSkvOasO.setGovernance.call(addressTGqcZEX, {from: accounts[3]});

		await expect(ControllerSkvOasO.yearn.call(addressXSq7Kjc, addressvG0oRk5, uinthbzlMNu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWWFvbjD = accounts[3]
		const ControllerPw0tyZE = await Controller.new(addressWWFvbjD, {from: accounts[1]});
		const uintCBjGG42 = BigInt("401")
		const addressKK9nEG5 = accounts[5]
		const addressisES0dN = accounts[4]
		const addressspZjvCR = accounts[4]
		const addressjUx2hcE = await ControllerPw0tyZE.earn.call(addressKK9nEG5, uintCBjGG42, {from: accounts[2]});
		const addressZR9ekA = await ControllerPw0tyZE.setRewards.call(addressisES0dN, {from: accounts[4]});
		const addressqIIKZcO = await ControllerPw0tyZE.setGovernance.call(addressspZjvCR, {from: accounts[0]});

		await expect(ControllerPw0tyZE.earn.call(addressKK9nEG5, uintCBjGG42, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressk1b5pm8 = accounts[4]
		const ControllerzcY1h2g = await Controller.new(addressk1b5pm8, {from: accounts[3]});
		const addressipaNIP = accounts[5]
		const addressBxFasPQ = accounts[0]
		const uintYfBmlu = BigInt("1680")
		const addressc0WIkBm = accounts[0]
		const addressMAcM3aC = accounts[3]
		const addressXAgaqzs = accounts[3]
		const addressJS7pSyl = accounts[3]
		const uintZ9x8syS = BigInt("1987")
		const addressknCKDvM = await ControllerzcY1h2g.approveStrategy.call(addressBxFasPQ, addressipaNIP, {from: accounts[4]});
		const addressnovehR = await ControllerzcY1h2g.withdraw.call(addressc0WIkBm, uintYfBmlu, {from: "0x0000000000000000000000000000000000000001"});
		const uintkQmY8GS = await ControllerzcY1h2g.balanceOf.call(addressMAcM3aC, {from: accounts[1]});
		const addresssYwyflI = await ControllerzcY1h2g.setOneSplit.call(addressXAgaqzs, {from: accounts[2]});
		const uintQmbFWoM = await ControllerzcY1h2g.balanceOf.call(addressJS7pSyl, {from: accounts[2]});
		const uinthNCW9lV = await ControllerzcY1h2g.setSplit.call(uintZ9x8syS, {from: accounts[0]});

		await expect(ControllerzcY1h2g.approveStrategy.call(addressBxFasPQ, addressipaNIP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQXBXX43 = accounts[2]
		const ControllerJBojbbU = await Controller.new(addressQXBXX43, {from: accounts[1]});
		const addressv1EQTdc = "0x0000000000000000000000000000000000000001"
		const addressD7LEogy = accounts[2]
		const uintKiIf2Kh = BigInt("365")
		const addresswtvUAw = accounts[3]
		const addresssfmUdXX = accounts[2]
		const addressSNXW2Y = accounts[3]
		const addresswggHYCV = accounts[3]
		const addressQLPwRQp = await ControllerJBojbbU.setVault.call(addressD7LEogy, addressv1EQTdc, {from: accounts[2]});
		const uintjAgMOm1 = await ControllerJBojbbU.getExpectedReturn.call(addresssfmUdXX, addresswtvUAw, uintKiIf2Kh, {from: accounts[2]});
		const addressezFC1l3 = await ControllerJBojbbU.setStrategy.call(addresswggHYCV, addressSNXW2Y, {from: accounts[4]});

		await expect(ControllerJBojbbU.setVault.call(addressD7LEogy, addressv1EQTdc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjz32wD = accounts[4]
		const ControllerWe5RUGH = await Controller.new(addressjz32wD, {from: accounts[2]});
		const addressKKB2vSG = accounts[1]
		const addresssETOTpE = accounts[7]
		const addressfuhhGI = await ControllerWe5RUGH.setGovernance.call(addressKKB2vSG, {from: accounts[0]});
		const addressaQxqcoF = await ControllerWe5RUGH.setStrategist.call(addresssETOTpE, {from: accounts[3]});

		await expect(ControllerWe5RUGH.setGovernance.call(addressKKB2vSG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMdEBdgB = accounts[3]
		const ControllerSkvOasO = await Controller.new(addressMdEBdgB, {from: accounts[4]});
		const addressJK0VDS6 = accounts[0]
		const addressJIl5ML8 = accounts[6]
		const addressGNrsQM1 = accounts[5]
		const addressQUFO85K = await ControllerSkvOasO.setOneSplit.call(addressJK0VDS6, {from: accounts[4]});
		const addressjtio8V2 = await ControllerSkvOasO.revokeStrategy.call(addressGNrsQM1, addressJIl5ML8, {from: accounts[2]});

		await expect(ControllerSkvOasO.revokeStrategy.call(addressGNrsQM1, addressJIl5ML8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskj2XOy5 = accounts[2]
		const ControlleroPYBfW2 = await Controller.new(addresskj2XOy5, {from: accounts[2]});
		const addressOpFZjRa = accounts[3]
		const addressU6WkX3q = "0x0000000000000000000000000000000000000001"
		const addressx0y2e5 = accounts[0]
		const addressLrvXa2p = accounts[5]
		const uintJup3E5Z = BigInt("1041")
		const addressTsZDCky = accounts[5]
		const addressY4ehn46 = accounts[5]
		const addresseMYj3WR = accounts[4]
		const addressCYN1CeY = await ControlleroPYBfW2.revokeStrategy.call(addressU6WkX3q, addressOpFZjRa, {from: accounts[2]});
		const addressAL71oV = await ControlleroPYBfW2.approveStrategy.call(addressLrvXa2p, addressx0y2e5, {from: accounts[1]});
		const uintma1hiT = await ControlleroPYBfW2.getExpectedReturn.call(addressY4ehn46, addressTsZDCky, uintJup3E5Z, {from: accounts[2]});
		const addressEktYL76 = await ControlleroPYBfW2.setGovernance.call(addresseMYj3WR, {from: accounts[0]});

		await expect(ControlleroPYBfW2.approveStrategy.call(addressLrvXa2p, addressx0y2e5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUuZF2ql = accounts[1]
		const ControllerKKy8JKK = await Controller.new(addressUuZF2ql, {from: accounts[4]});
		const uintcCGcidk = BigInt("1402")
		const addresshqOBKNl = accounts[3]
		const addressa4zRkdv = accounts[3]
		const addressqeFHmuQ = accounts[1]
		const addressHQbqLP = accounts[0]
		const uintXi8yCwW = BigInt("1391")
		const addressNzBRsoZ = accounts[1]
		const addressWB6xEuY = accounts[3]
		const addressRFJy7Vi = accounts[5]
		const addresstfj2iev = accounts[4]
		const addressXySrVI = accounts[3]
		const addresssRhW3CE = await ControllerKKy8JKK.inCaseTokensGetStuck.call(addresshqOBKNl, uintcCGcidk, {from: "0x0000000000000000000000000000000000000001"});
		const addressCg75No = await ControllerKKy8JKK.withdrawAll.call(addressa4zRkdv, {from: accounts[2]});
		const addressPjsyLTq = await ControllerKKy8JKK.inCaseStrategyTokenGetStuck.call(addressHQbqLP, addressqeFHmuQ, {from: accounts[0]});
		const addressCOZbXJk = await ControllerKKy8JKK.earn.call(addressNzBRsoZ, uintXi8yCwW, {from: accounts[2]});
		const addressI09mZgc = await ControllerKKy8JKK.setStrategy.call(addressRFJy7Vi, addressWB6xEuY, {from: accounts[3]});
		const addressfFTmKyi = await ControllerKKy8JKK.approveStrategy.call(addressXySrVI, addresstfj2iev, {from: accounts[1]});

		await expect(ControllerKKy8JKK.inCaseTokensGetStuck.call(addresshqOBKNl, uintcCGcidk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssnHasYe = accounts[2]
		const ControllerRypaL7l = await Controller.new(addresssnHasYe, {from: accounts[3]});
		const addressSa04zSz = accounts[4]
		const addressDnOSa0x = accounts[1]
		const addresswciMphP = accounts[3]
		const addressZ91MHCt = accounts[3]
		const addressAA0xjX1 = accounts[3]
		const addressmhH2HbB = accounts[1]
		const uintVaqVygf = BigInt("1042")
		const addressP8q4XQS = await ControllerRypaL7l.setStrategy.call(addressDnOSa0x, addressSa04zSz, {from: accounts[3]});
		const addressyxyQ4Ie = await ControllerRypaL7l.setConverter.call(addressAA0xjX1, addressZ91MHCt, addresswciMphP, {from: accounts[1]});
		const addressTrIImKG = await ControllerRypaL7l.setOneSplit.call(addressmhH2HbB, {from: accounts[3]});
		const uintQNKnNei = await ControllerRypaL7l.setSplit.call(uintVaqVygf, {from: accounts[0]});

		await expect(ControllerRypaL7l.setStrategy.call(addressDnOSa0x, addressSa04zSz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCupXo3 = accounts[4]
		const ControllerWe5RUGH = await Controller.new(addressCupXo3, {from: accounts[2]});
		const uint4HfOmU = BigInt("112")
		const addressbO9KII = accounts[0]
		const addresszzp7UrX = accounts[1]
		const addressWUCnv08 = accounts[5]
		const uintvutZGo = await ControllerWe5RUGH.getExpectedReturn.call(addresszzp7UrX, addressbO9KII, uint4HfOmU, {from: accounts[2]});
		const addressaQxqcoF = await ControllerWe5RUGH.setStrategist.call(addressWUCnv08, {from: accounts[3]});

		await expect(ControllerWe5RUGH.getExpectedReturn.call(addresszzp7UrX, addressbO9KII, uint4HfOmU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAIDH0pw = accounts[3]
		const ControllerA5WZvF7 = await Controller.new(addressAIDH0pw, {from: accounts[4]});
		const addressROoOOFn = accounts[3]
		const addressLLH952B = "0x0000000000000000000000000000000000000001"
		const addressPVeK5Rx = accounts[0]
		const address876XHw = accounts[2]
		const addresscElTPc2 = accounts[4]
		const addressktJMPA2 = accounts[3]
		const addressxO86pIr = await ControllerA5WZvF7.setConverter.call(addressPVeK5Rx, addressLLH952B, addressROoOOFn, {from: accounts[4]});
		const addressCdiD28U = await ControllerA5WZvF7.setStrategist.call(address876XHw, {from: accounts[4]});
		const addressRfAfwHq = await ControllerA5WZvF7.inCaseStrategyTokenGetStuck.call(addressktJMPA2, addresscElTPc2, {from: accounts[2]});

		await expect(ControllerA5WZvF7.inCaseStrategyTokenGetStuck.call(addressktJMPA2, addresscElTPc2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspd7RiR = accounts[0]
		const ControllerOvlY7CM = await Controller.new(addresspd7RiR, {from: "0x0000000000000000000000000000000000000001"});
		const uintR7SvbL = BigInt("1622")
		const addresshg0tqjq = accounts[1]
		const uintkKu1J6W = BigInt("977")
		const addressQ9TejtQ = accounts[4]
		const addressnUfTGTm = accounts[4]
		const uintJl7xMJg = BigInt("1015")
		const addressZi25k4 = accounts[0]
		const addressQDVfdh = accounts[1]
		const uinttbvA6H = BigInt("208")
		const addressbZX29X8 = accounts[2]
		const address3Fq9vV = accounts[4]
		const addressdXiaGV2 = await ControllerOvlY7CM.earn.call(addresshg0tqjq, uintR7SvbL, {from: accounts[4]});
		const uintv7XqEj6 = await ControllerOvlY7CM.getExpectedReturn.call(addressnUfTGTm, addressQ9TejtQ, uintkKu1J6W, {from: accounts[2]});
		const uintkkyI053 = await ControllerOvlY7CM.getExpectedReturn.call(addressQDVfdh, addressZi25k4, uintJl7xMJg, {from: accounts[3]});
		const uintpBNaFIm = await ControllerOvlY7CM.setSplit.call(uinttbvA6H, {from: accounts[0]});
		const addressc5JYkm0 = await ControllerOvlY7CM.setVault.call(address3Fq9vV, addressbZX29X8, {from: accounts[4]});
	});

	it('test for Controller', async () => {
		const addressqQXpVLv = accounts[4]
		const ControllerzcY1h2g = await Controller.new(addressqQXpVLv, {from: accounts[3]});
		const addressc0arPhj = accounts[2]
		const addressB6IK01C = accounts[5]
		const uintF1d5DY7 = BigInt("878")
		const addressGV1sR7 = accounts[5]
		const addressq6hz81h = accounts[0]
		const uintc5nMjhT = BigInt("1685")
		const addressPXpXHtn = accounts[1]
		const addressPVXNcTv = await ControllerzcY1h2g.setVault.call(addressB6IK01C, addressc0arPhj, {from: accounts[3]});
		const uintgCViowH = await ControllerzcY1h2g.getExpectedReturn.call(addressq6hz81h, addressGV1sR7, uintF1d5DY7, {from: accounts[2]});
		const addressnovehR = await ControllerzcY1h2g.withdraw.call(addressPXpXHtn, uintc5nMjhT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerzcY1h2g.getExpectedReturn.call(addressq6hz81h, addressGV1sR7, uintF1d5DY7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBrhpEmx = accounts[2]
		const ControllerA7sKsTh = await Controller.new(addressBrhpEmx, {from: accounts[2]});
		const addresslnXpVND = accounts[3]
		const addressCi0APLC = accounts[4]
		const uintKs1Ycll = BigInt("1535")
		const addressqCUcgQC = accounts[2]
		const addressBAaOVDC = accounts[3]
		const addressuAodO9l = accounts[3]
		const addressooAyxxM = accounts[1]
		const addressbQfRU1z = accounts[4]
		const addresspr9mCpZ = await ControllerA7sKsTh.approveStrategy.call(addressCi0APLC, addresslnXpVND, {from: accounts[2]});
		const uintLBunEH = await ControllerA7sKsTh.setSplit.call(uintKs1Ycll, {from: accounts[4]});
		const addressDbUrim = await ControllerA7sKsTh.approveStrategy.call(addressBAaOVDC, addressqCUcgQC, {from: accounts[1]});
		const addressXRVfGMO = await ControllerA7sKsTh.setConverter.call(addressbQfRU1z, addressooAyxxM, addressuAodO9l, {from: accounts[3]});

		await expect(ControllerA7sKsTh.setSplit.call(uintKs1Ycll, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressESTkqDq = accounts[2]
		const ControllerRypaL7l = await Controller.new(addressESTkqDq, {from: accounts[3]});
		const uintLKv7BAq = BigInt("1288")
		const uintnCBrPQb = BigInt("1091")
		const uintbEaqDT5 = await ControllerRypaL7l.setSplit.call(uintLKv7BAq, {from: accounts[3]});
		const uintQNKnNei = await ControllerRypaL7l.setSplit.call(uintnCBrPQb, {from: accounts[0]});

		await expect(ControllerRypaL7l.setSplit.call(uintnCBrPQb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGWU6DpC = accounts[2]
		const ControllerRypaL7l = await Controller.new(addressGWU6DpC, {from: accounts[3]});
		const addressxgYk5dw = accounts[3]
		const uint5E1GCa = BigInt("370")
		const addressuT2qAjG = accounts[3]
		const addressUuTWGYb = accounts[1]
		const addressoxgNd4 = accounts[1]
		const uintVcnIAfV = BigInt("1100")
		const addresszHdRViM = await ControllerRypaL7l.setGovernance.call(addressxgYk5dw, {from: accounts[3]});
		const addressDWd7lRp = await ControllerRypaL7l.inCaseTokensGetStuck.call(addressuT2qAjG, uint5E1GCa, {from: accounts[4]});
		const addressYy9aqnq = await ControllerRypaL7l.setStrategy.call(addressoxgNd4, addressUuTWGYb, {from: accounts[3]});
		const uintQNKnNei = await ControllerRypaL7l.setSplit.call(uintVcnIAfV, {from: accounts[0]});

		await expect(ControllerRypaL7l.inCaseTokensGetStuck.call(addressuT2qAjG, uint5E1GCa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVF7COHr = accounts[4]
		const ControllerzcY1h2g = await Controller.new(addressVF7COHr, {from: accounts[3]});
		const uints9d4d7Z = BigInt("1860")
		const addresshUKskG = accounts[3]
		const uinttA1wIFF = BigInt("1685")
		const addressGlHoNd = accounts[0]
		const addressIJmfW7t = await ControllerzcY1h2g.inCaseTokensGetStuck.call(addresshUKskG, uints9d4d7Z, {from: accounts[3]});
		const addressnovehR = await ControllerzcY1h2g.withdraw.call(addressGlHoNd, uinttA1wIFF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerzcY1h2g.inCaseTokensGetStuck.call(addresshUKskG, uints9d4d7Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})