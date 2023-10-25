const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringRomw6Ng = "1pVnqiRuu852r"
		const stringygOqMtg = "PXeGEq"
		const uintN0jq3bq = BigInt("1585")
		const WheatFarmKS1sHpH = await WheatFarm.new(stringRomw6Ng, stringygOqMtg, uintN0jq3bq, {from: accounts[2]});
		const uintPxpqhqS = BigInt("148")
		const addressFZnUANp = accounts[2]
		const addressq2UD2iM = "0x0000000000000000000000000000000000000001"
		const addressfRMrWEW = accounts[3]
		const uintHF3QHV3 = BigInt("1445")
		const addresspQXBAVg = "0x0000000000000000000000000000000000000001"
		const uintwgjLkH8 = BigInt("1824")
		const addressYhyLp0v = accounts[3]
		const uintiSYcZBp = BigInt("345")
		const addresscohvZOC = accounts[0]
		const uintqxgQUr1 = BigInt("196")
		const addressj8QNxDC = accounts[2]
//		const bool6otElq = await WheatFarmKS1sHpH.transfer.call(addressFZnUANp, uintPxpqhqS, {from: accounts[1]});
//		const uintVVXdEq9 = await WheatFarmKS1sHpH.allowance.call(addressfRMrWEW, addressq2UD2iM, {from: accounts[0]});
//		const booliHdWbuT = await WheatFarmKS1sHpH.approve.call(addresspQXBAVg, uintHF3QHV3, {from: accounts[2]});
//		const boolnBbhDRI = await WheatFarmKS1sHpH.approve.call(addressYhyLp0v, uintwgjLkH8, {from: accounts[2]});
//		const boolUkNBJnm = await WheatFarmKS1sHpH.transfer.call(addresscohvZOC, uintiSYcZBp, {from: accounts[0]});
//		const boolmCJb7Xw = await WheatFarmKS1sHpH.approve.call(addressj8QNxDC, uintqxgQUr1, {from: accounts[3]});

		await expect(WheatFarmKS1sHpH.transfer.call(addressFZnUANp, uintPxpqhqS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string5WBc41 = "n53f"
		const stringbvNlzcU = "OvmBJ37FHc21M8ByOjLFj1zVukcXGm4tJghlbudnEWW1q8zBQRgwBTvJMOk2GCdlo1nrtaek3uhgP3MfKYmIDSM"
		const uintGFxTrMW = BigInt("1845")
		const WheatFarmmCaoRHS = await WheatFarm.new(string5WBc41, stringbvNlzcU, uintGFxTrMW, {from: accounts[5]});
		const addressndi9T0F = accounts[1]
		const addresshtasjl1 = accounts[3]
		const uintVosgQhU = BigInt("1801")
		const addressMB3NLlv = accounts[5]
		const uintvo4kNo = await WheatFarmmCaoRHS.balanceOf.call(addressndi9T0F, {from: accounts[0]});
		const uintsyLvrF = await WheatFarmmCaoRHS.balanceOf.call(addresshtasjl1, {from: accounts[5]});
		const boolKUMSAHt = await WheatFarmmCaoRHS.approve.call(addressMB3NLlv, uintVosgQhU, {from: accounts[4]});

		assert.equal(boolKUMSAHt, true)
		assert.equal(uintsyLvrF, BigInt("0"))
		assert.equal(uintvo4kNo, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringm5mlJsr = "Pd5XbbSSbjV"
		const stringBnHM3W = "VPaz3hYqiXXtHVn6xfEhh4I4l4hk1jNmzlf2RHIcYlsKrgbdhi1loDqhG9G"
		const uintLlWCVGP = BigInt("19")
		const WheatFarmmeu6QQE = await WheatFarm.new(stringm5mlJsr, stringBnHM3W, uintLlWCVGP, {from: accounts[3]});
		const addressdZORFs = accounts[0]
		const uintyFSD1IM = BigInt("515")
		const addressDO0WfVV = accounts[1]
		const addresstJh25hJ = accounts[1]
		const addressKtZF2ET = "0x0000000000000000000000000000000000000001"
		const uintFXNhhK = await WheatFarmmeu6QQE.balanceOf.call(addressdZORFs, {from: accounts[1]});
//		const boolwW35Jlb = await WheatFarmmeu6QQE.decreaseAllowance.call(addressDO0WfVV, uintyFSD1IM, {from: "0x0000000000000000000000000000000000000001"});
//		const stringjxS9FS1 = await WheatFarmmeu6QQE.symbol.call({from: accounts[5]});
//		const stringaR3ghd3 = await WheatFarmmeu6QQE.symbol.call({from: accounts[1]});
//		const uintrzrXwNo = await WheatFarmmeu6QQE.allowance.call(addressKtZF2ET, addresstJh25hJ, {from: accounts[0]});

		assert.equal(uintFXNhhK, BigInt("0"))
		await expect(WheatFarmmeu6QQE.decreaseAllowance.call(addressDO0WfVV, uintyFSD1IM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringqduxhZ = "arT"
		const stringUHuD9yJ = "9nqizenPmI8CEWsrV6"
		const uintEXvH5dC = BigInt("1780")
		const WheatFarmaUbVjqo = await WheatFarm.new(stringqduxhZ, stringUHuD9yJ, uintEXvH5dC, {from: accounts[1]});
		const uintyA6Y3zf = BigInt("1326")
		const addressAqExQpY = accounts[2]
		const uintnn8affm = BigInt("1617")
		const addresstxMQ0An = accounts[1]
		const addressr8cWQUd = accounts[3]
		const addressW6qELL = accounts[4]
//		const boolwE2ubUM = await WheatFarmaUbVjqo.transfer.call(addressAqExQpY, uintyA6Y3zf, {from: accounts[0]});
//		const stringBoVNzW6 = await WheatFarmaUbVjqo.symbol.call({from: accounts[0]});
//		const boolJo1ZjFi = await WheatFarmaUbVjqo.transferFrom.call(addressr8cWQUd, addresstxMQ0An, uintnn8affm, {from: accounts[2]});
//		const uintvizjCmN = await WheatFarmaUbVjqo.totalSupply.call({from: accounts[3]});
//		const stringR7YnU3O = await WheatFarmaUbVjqo.symbol.call({from: accounts[0]});
//		const uintbSKr9z4 = await WheatFarmaUbVjqo.balanceOf.call(addressW6qELL, {from: accounts[5]});

		await expect(WheatFarmaUbVjqo.transfer.call(addressAqExQpY, uintyA6Y3zf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringRomw6Ng = "1pVnqiRuu852r"
		const stringygOqMtg = "PXeGEq"
		const uintUXMisUY = BigInt("1585")
		const WheatFarmKS1sHpH = await WheatFarm.new(stringRomw6Ng, stringygOqMtg, uintUXMisUY, {from: accounts[2]});
		const uintqKEIgDR = BigInt("155")
		const addressxhXTKJn = accounts[3]
		const uintle7nX2X = BigInt("148")
		const addressFawORx = accounts[2]
		const addresseTCeTIh = "0x0000000000000000000000000000000000000001"
		const addresshCUQZfz = accounts[3]
		const uintByGXXu = BigInt("1271")
		const addresskmcX8Wn = accounts[1]
		const uintHMcOYRx = BigInt("1445")
		const addressXpM5sT8 = "0x0000000000000000000000000000000000000001"
		const uintr58pd7J = BigInt("1824")
		const addresspSA90cA = accounts[3]
		const uintT2uyIyr = BigInt("345")
		const addressdcj5Aeg = accounts[0]
		const uinta0SIdZ5 = BigInt("196")
		const addressVtu1L3 = accounts[2]
//		const boolUoSsm8y = await WheatFarmKS1sHpH.approveAndCall.call(addressxhXTKJn, uintqKEIgDR, {from: accounts[0]});
//		const bool6otElq = await WheatFarmKS1sHpH.transfer.call(addressFawORx, uintle7nX2X, {from: accounts[1]});
//		const uintVVXdEq9 = await WheatFarmKS1sHpH.allowance.call(addresshCUQZfz, addresseTCeTIh, {from: accounts[0]});
//		const boolwXK1A8n = await WheatFarmKS1sHpH.decreaseAllowance.call(addresskmcX8Wn, uintByGXXu, {from: accounts[2]});
//		const booliHdWbuT = await WheatFarmKS1sHpH.approve.call(addressXpM5sT8, uintHMcOYRx, {from: accounts[2]});
//		const boolnBbhDRI = await WheatFarmKS1sHpH.approve.call(addresspSA90cA, uintr58pd7J, {from: accounts[2]});
//		const boolUkNBJnm = await WheatFarmKS1sHpH.transfer.call(addressdcj5Aeg, uintT2uyIyr, {from: accounts[0]});
//		const boolmCJb7Xw = await WheatFarmKS1sHpH.approve.call(addressVtu1L3, uinta0SIdZ5, {from: accounts[3]});

		await expect(WheatFarmKS1sHpH.approveAndCall.call(addressxhXTKJn, uintqKEIgDR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringKCCOMIa = "ThFzga5ddW5GzfzBm26DJXxHRAxBdWgu"
		const stringYkfXpfr = "pM3EPpngDE32xlK8NwcmkF5IWUHcAmLSwnKQAERXVK6V6EOwUFsHTh4rCVEPB4TXL"
		const uintIQM2r4C = BigInt("217")
		const WheatFarmXWK8jab = await WheatFarm.new(stringKCCOMIa, stringYkfXpfr, uintIQM2r4C, {from: accounts[1]});
		const uintEikDtl = BigInt("906")
		const addresst2cNiTr = accounts[3]
		const uintMNVZib = BigInt("845")
		const addressReUaMN7 = accounts[3]
		const addressk44ziSh = accounts[1]
		const boolkA235O0 = await WheatFarmXWK8jab.approve.call(addresst2cNiTr, uintEikDtl, {from: accounts[1]});
//		const boolu3hZt2x = await WheatFarmXWK8jab.transferFrom.call(addressk44ziSh, addressReUaMN7, uintMNVZib, {from: accounts[4]});
//		const stringm5N58W1 = await WheatFarmXWK8jab.name.call({from: accounts[4]});

		assert.equal(boolkA235O0, true)
		await expect(WheatFarmXWK8jab.transferFrom.call(addressk44ziSh, addressReUaMN7, uintMNVZib, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringWvpXmce = "nO3OBSBt4nwHkHSdzG7tiljKI1jxS6SVj"
		const stringTWyWdfZ = "Bvh5tr28MrvY9WwMykf7U6f1iUhdRqzeFMDU7wzkn3NLA2CUdfpNDTdNzY3MWEhUL7VMbQSNNUsdX4aLhFVnkAkVB0T"
		const uintnjDgsv = BigInt("162")
		const WheatFarmJj1PCeX = await WheatFarm.new(stringWvpXmce, stringTWyWdfZ, uintnjDgsv, {from: accounts[0]});
		const uintazkZfEK = BigInt("1650")
		const addressdI6QQmx = accounts[3]
		const addressWNhaMvy = accounts[2]
		const addresszpUckF = accounts[5]
		const addresscWxAIzB = accounts[0]
		const booljJbE4f4 = await WheatFarmJj1PCeX.transfer.call(addressdI6QQmx, uintazkZfEK, {from: accounts[0]});
//		const boolvcS3Vna = await WheatFarmJj1PCeX.transferownership.call(addressWNhaMvy, {from: accounts[4]});
//		const string44ev3R = await WheatFarmJj1PCeX.symbol.call({from: accounts[1]});
//		const uintQFDopCl = await WheatFarmJj1PCeX.allowance.call(addresscWxAIzB, addresszpUckF, {from: accounts[2]});

		assert.equal(booljJbE4f4, true)
		await expect(WheatFarmJj1PCeX.transferownership.call(addressWNhaMvy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringYUIT3Yb = "aDww"
		const stringwOp0r5i = "ufXn8IOZpnj92IklCrCkPekRN"
		const uinti7LsnhH = BigInt("519")
		const WheatFarmLRIPH1D = await WheatFarm.new(stringYUIT3Yb, stringwOp0r5i, uinti7LsnhH, {from: "0x0000000000000000000000000000000000000001"});
		const uintT5mT9uS = BigInt("178")
		const addressrRbFyV5 = accounts[3]
		const uintW6GsSST = BigInt("1422")
		const addressM4YxHSx = accounts[0]
		const addressHB6lKXy = accounts[2]
		const uintKd4YG3R = BigInt("932")
		const addressqsSwQyd = accounts[1]
		const addressjKqGrkl = accounts[3]
		const addressOxaEqZB = accounts[4]
		const addressIR9SNgE = "0x0000000000000000000000000000000000000001"
		const booljv2qVE9 = await WheatFarmLRIPH1D.decreaseAllowance.call(addressrRbFyV5, uintT5mT9uS, {from: accounts[4]});
		const uint8v5PVL7M = await WheatFarmLRIPH1D.decimals.call({from: accounts[4]});
		const uint8MbS0cYD = await WheatFarmLRIPH1D.decimals.call({from: accounts[2]});
		const boolLOlPVSn = await WheatFarmLRIPH1D.transferFrom.call(addressHB6lKXy, addressM4YxHSx, uintW6GsSST, {from: accounts[2]});
		const boolibARnQn = await WheatFarmLRIPH1D.transferFrom.call(addressjKqGrkl, addressqsSwQyd, uintKd4YG3R, {from: accounts[3]});
		const uintpuSTOvg = await WheatFarmLRIPH1D.allowance.call(addressIR9SNgE, addressOxaEqZB, {from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const strings2vQFnm = "qBSh4Ncoy3lVZyRU1OEJhvTqZcS"
		const stringCyU3ddR = "77pTCV5lpG8OKKYtZz5DvjmG7dJzd9PpNlDS5qF76WlUhM"
		const uintsSBZIse = BigInt("2044")
		const WheatFarmKQ8C0BJ = await WheatFarm.new(strings2vQFnm, stringCyU3ddR, uintsSBZIse, {from: accounts[2]});
		const uintvMOmTc2 = BigInt("1968")
		const addressnfVGAiJ = accounts[5]
		const uintc6SUkKy = BigInt("812")
		const addressxelcwww = accounts[0]
		const uintvpibxTp = BigInt("438")
		const addressyy05gh7 = accounts[4]
		const uintNXvWBpD = BigInt("1633")
		const addressRMUihU4 = accounts[5]
		const boolvOpt0bD = await WheatFarmKQ8C0BJ.approveAndCall.call(addressnfVGAiJ, uintvMOmTc2, {from: accounts[2]});
		const boolJGiXgE0 = await WheatFarmKQ8C0BJ.approve.call(addressxelcwww, uintc6SUkKy, {from: accounts[2]});
//		const boole91CWmZ = await WheatFarmKQ8C0BJ.increaseAllowance.call(addressyy05gh7, uintvpibxTp, {from: accounts[4]});
//		const booljjarmG9 = await WheatFarmKQ8C0BJ.increaseAllowance.call(addressRMUihU4, uintNXvWBpD, {from: accounts[0]});
//		const stringLB4w4kS = await WheatFarmKQ8C0BJ.name.call({from: accounts[4]});
//		const stringH2WNW2t = await WheatFarmKQ8C0BJ.name.call({from: accounts[5]});

		assert.equal(boolJGiXgE0, true)
		assert.equal(boolvOpt0bD, true)
		await expect(WheatFarmKQ8C0BJ.increaseAllowance.call(addressyy05gh7, uintvpibxTp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvJKMbw8 = "dW9ORXpr2eQcnhMR3lIbpnBNRJZaz3"
		const stringGHyG76V = "JLHgbHGV"
		const uintiUZtUO6 = BigInt("1378")
		const WheatFarmyteWVrV = await WheatFarm.new(stringvJKMbw8, stringGHyG76V, uintiUZtUO6, {from: accounts[0]});
		const uinth7hd7tL = BigInt("0")
		const addressszJO4Og = accounts[5]
		const uintTFJgTTu = BigInt("835")
		const addressqo9TUw6 = accounts[1]
		const boolKSzLyZu = await WheatFarmyteWVrV.transfer.call(addressszJO4Og, uinth7hd7tL, {from: accounts[4]});
		const boolcSznSjA = await WheatFarmyteWVrV.approve.call(addressqo9TUw6, uintTFJgTTu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKSzLyZu, true)
		assert.equal(boolcSznSjA, true)
	});

	it('test for WheatFarm', async () => {
		const stringvJKMbw8 = "dW9ORXpr2eQcnhMR3lIbpnBNRJZaz3"
		const stringGHyG76V = "JLHgbHGV"
		const uintjjDkDBC = BigInt("1378")
		const WheatFarmyteWVrV = await WheatFarm.new(stringvJKMbw8, stringGHyG76V, uintjjDkDBC, {from: accounts[0]});
		const addressKE9jZw5 = accounts[0]
		const uintqLGd2jo = BigInt("621")
		const addressRSJn7Ij = accounts[2]
		const boolMSpXtcW = await WheatFarmyteWVrV.transferownership.call(addressKE9jZw5, {from: accounts[0]});
//		const boolSCpxC5 = await WheatFarmyteWVrV.transfer.call(addressRSJn7Ij, uintqLGd2jo, {from: accounts[2]});

		assert.equal(boolMSpXtcW, true)
		await expect(WheatFarmyteWVrV.transfer.call(addressRSJn7Ij, uintqLGd2jo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})