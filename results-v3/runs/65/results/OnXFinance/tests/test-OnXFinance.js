const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringpA7e2S = "bHDPXXyxjNDERBKUg6vHXuVRKiocFfcP8aEAo6i27TFfTtU28bNt3VswUybaNQ0kOQks31J8GyoFiLgTJWO"
		const stringwkTRap = ""
		const uintgcnQrKG = BigInt("1872")
		const OnXFinanceZCADqnj = await OnXFinance.new(stringpA7e2S, stringwkTRap, uintgcnQrKG, {from: accounts[4]});
		const uintMUoImcm = BigInt("517")
		const addressGUJiMDe = accounts[4]
		const addressQthLTyV = accounts[5]
		const boolM8yz7k9 = await OnXFinanceZCADqnj.decreaseAllowance.call(addressGUJiMDe, uintMUoImcm, {from: "0x0000000000000000000000000000000000000001"});
		const boolp14WYJe = await OnXFinanceZCADqnj.transferownership.call(addressQthLTyV, {from: accounts[1]});

		await expect(OnXFinanceZCADqnj.decreaseAllowance.call(addressGUJiMDe, uintMUoImcm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringiOzT3nz = "eJ7xD8fzQKJR9oLnPjIXuddnt1xEXODk338KH6rHVrJnaVp8R4KnoLOMqfM17zzlbo9uuCV"
		const stringIK8nl3r = "V32"
		const uintwDKnGsd = BigInt("1399")
		const OnXFinanceno5JQMy = await OnXFinance.new(stringiOzT3nz, stringIK8nl3r, uintwDKnGsd, {from: accounts[3]});
		const uintYdsle2U = BigInt("736")
		const addresspYS6mS4 = accounts[2]
		const uintmJy6UVn = BigInt("1539")
		const addressWetKKay = accounts[5]
		const boolEYhtxZ9 = await OnXFinanceno5JQMy.approveAndCall.call(addresspYS6mS4, uintYdsle2U, {from: accounts[0]});
		const stringbdrm7nW = await OnXFinanceno5JQMy.symbol.call({from: accounts[1]});
		const stringCI4no5L = await OnXFinanceno5JQMy.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLOFO5UI = await OnXFinanceno5JQMy.increaseAllowance.call(addressWetKKay, uintmJy6UVn, {from: accounts[1]});

		await expect(OnXFinanceno5JQMy.approveAndCall.call(addresspYS6mS4, uintYdsle2U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringHO9avM = ""
		const stringyWJANoT = "P5bL6vvA6mfCU"
		const uintYUjTsKU = BigInt("1110")
		const OnXFinanceddPJCO = await OnXFinance.new(stringHO9avM, stringyWJANoT, uintYUjTsKU, {from: accounts[3]});
		const addresse43FfG = accounts[1]
		const addressQpxy0EO = accounts[3]
		const uintjVFoSb = BigInt("412")
		const addressvZ1ZSMU = accounts[3]
		const addressvsb5EDU = accounts[1]
		const addresseHshKB0 = accounts[4]
		const uintmm3GSrg = BigInt("1243")
		const addressS9GlYlM = accounts[1]
		const addresspo6mDXW = "0x0000000000000000000000000000000000000001"
		const uintmbuXd12 = await OnXFinanceddPJCO.allowance.call(addressQpxy0EO, addresse43FfG, {from: accounts[2]});
		const boolKE5rRhv = await OnXFinanceddPJCO.approve.call(addressvZ1ZSMU, uintjVFoSb, {from: accounts[2]});
		const stringu16hej = await OnXFinanceddPJCO.name.call({from: accounts[3]});
		const uintm7zYVKd = await OnXFinanceddPJCO.allowance.call(addresseHshKB0, addressvsb5EDU, {from: accounts[3]});
		const booluGSoMdR = await OnXFinanceddPJCO.transferFrom.call(addresspo6mDXW, addressS9GlYlM, uintmm3GSrg, {from: accounts[4]});

		assert.equal(boolKE5rRhv, true)
		assert.equal(stringu16hej, "")
		assert.equal(uintm7zYVKd, BigInt("0"))
		assert.equal(uintmbuXd12, BigInt("0"))
		await expect(OnXFinanceddPJCO.transferFrom.call(addresspo6mDXW, addressS9GlYlM, uintmm3GSrg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringI7E91sy = "3tTimZHu6ySGWpOOfxMqadpuCaD1mGAMNzoAhBjADyfZu4mu8oXuIOGd9hJFROpVEdbRdkBqybOUPiTUlRnT9YcMzFK"
		const string7J9mZL = "nlcf2OdbVvlmBLkWbT3azypkwklW4naU1cTNW9WJZgJ"
		const uintEUsfgiw = BigInt("1542")
		const OnXFinanceiWNA7qF = await OnXFinance.new(stringI7E91sy, string7J9mZL, uintEUsfgiw, {from: accounts[1]});
		const uinttzLVyP1 = BigInt("1591")
		const addressldH6Qtb = accounts[0]
		const address2Ig6QD = accounts[2]
		const uintZmCFsZ = BigInt("195")
		const addressm3cpcKa = accounts[4]
		const uintX5hcf4z = BigInt("974")
		const addresshCS6vTm = accounts[1]
		const address8U6vqH = accounts[3]
		const boolw4JHEcd = await OnXFinanceiWNA7qF.transfer.call(addressldH6Qtb, uinttzLVyP1, {from: accounts[3]});
		const uintJesPrLL = await OnXFinanceiWNA7qF.balanceOf.call(address2Ig6QD, {from: "0x0000000000000000000000000000000000000001"});
		const booljOgWOk7 = await OnXFinanceiWNA7qF.transfer.call(addressm3cpcKa, uintZmCFsZ, {from: accounts[1]});
		const boolHSaUhCl = await OnXFinanceiWNA7qF.approve.call(addresshCS6vTm, uintX5hcf4z, {from: accounts[1]});
		const uint8K899KNp = await OnXFinanceiWNA7qF.decimals.call({from: accounts[4]});
		const uintCNppYTJ = await OnXFinanceiWNA7qF.balanceOf.call(address8U6vqH, {from: accounts[2]});

		await expect(OnXFinanceiWNA7qF.transfer.call(addressldH6Qtb, uinttzLVyP1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringRSs4OT9 = "5yPhAyVS3CFHZLHbxmeWFTwqQaHvWJ3Fhk9FZaKR9gR7SVpdGHcv1ixS1M2UicA0AF85sYnPMjUyS"
		const stringh7T8Ti = "Nio09ASj8BcnQzxOQV4SjKzfZ1L9CSjApj"
		const uint1GDL4k = BigInt("192")
		const OnXFinancesGUOssc = await OnXFinance.new(stringRSs4OT9, stringh7T8Ti, uint1GDL4k, {from: "0x0000000000000000000000000000000000000001"});
		const uinte9bPJa = BigInt("57")
		const addressgLU7x0 = accounts[1]
		const uint2fgClG = BigInt("1194")
		const addressgc4Z4XS = accounts[0]
		const uintnSQkBWD = BigInt("1394")
		const addressyUqWgB = accounts[1]
		const uintMAfXWu6 = BigInt("788")
		const addressyr9LoR2 = accounts[2]
		const addressB6qX1G7 = accounts[0]
		const boolXOePPMJ = await OnXFinancesGUOssc.approve.call(addressgLU7x0, uinte9bPJa, {from: "0x0000000000000000000000000000000000000001"});
		const boolJnJHTF = await OnXFinancesGUOssc.transfer.call(addressgc4Z4XS, uint2fgClG, {from: accounts[4]});
		const boolmJjVGXQ = await OnXFinancesGUOssc.approve.call(addressyUqWgB, uintnSQkBWD, {from: accounts[1]});
		const boolBi1oI7E = await OnXFinancesGUOssc.transferFrom.call(addressB6qX1G7, addressyr9LoR2, uintMAfXWu6, {from: accounts[0]});
	});

	it('test for OnXFinance', async () => {
		const stringpA7e2S = "bHDPXXyxjNDERBKUg6vHXuVRKiocFfcP8aEAo6i27TFfTtU28bNt3VswUybaNQ0kOQks31J8GyoFiLgTJWO"
		const stringwkTRap = ""
		const uintt8f2EhC = BigInt("1872")
		const OnXFinanceZCADqnj = await OnXFinance.new(stringpA7e2S, stringwkTRap, uintt8f2EhC, {from: accounts[4]});
		const addressfdGT2UJ = accounts[5]
		const boolp14WYJe = await OnXFinanceZCADqnj.transferownership.call(addressfdGT2UJ, {from: accounts[1]});

		await expect(OnXFinanceZCADqnj.transferownership.call(addressfdGT2UJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringiaab3CV = "sDmfaPNi5U2v9lFDy7eUk3P8pFQRHic1atb4"
		const stringFlOvPL = "Xta18a0z9R9Vmg"
		const uintu2TKf3v = BigInt("222")
		const OnXFinancexVCRSEg = await OnXFinance.new(stringiaab3CV, stringFlOvPL, uintu2TKf3v, {from: accounts[4]});
		const uintcL45zbO = BigInt("517")
		const addressgST44Gf = accounts[4]
		const uinty8d3iuw = BigInt("1500")
		const addressI0ELMBh = accounts[4]
		const uintRCU7Fgu = BigInt("1048")
		const addressFgmUmhT = accounts[2]
		const uintlgxVno = BigInt("1120")
		const addressYNpazLQ = accounts[4]
		const addressglxVeeG = accounts[2]
		const boolNPPFPF4 = await OnXFinancexVCRSEg.transfer.call(addressgST44Gf, uintcL45zbO, {from: accounts[5]});
		const boolmUm2bx = await OnXFinancexVCRSEg.increaseAllowance.call(addressI0ELMBh, uinty8d3iuw, {from: accounts[2]});
		const boolUM9glTQ = await OnXFinancexVCRSEg.transfer.call(addressFgmUmhT, uintRCU7Fgu, {from: "0x0000000000000000000000000000000000000001"});
		const boolXOjpMbr = await OnXFinancexVCRSEg.transferFrom.call(addressglxVeeG, addressYNpazLQ, uintlgxVno, {from: accounts[2]});

		await expect(OnXFinancexVCRSEg.transfer.call(addressgST44Gf, uintcL45zbO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringJ5kQawP = "8bRaJ28Jxbo8bpxg4mwajooJYaMvcT4MgTJb45Yw6ecB8l7MrKAw1B1AH16fVtvJC5EN1PTaR"
		const stringmNpVo3c = "sTKhFrfqWcnDwlejAlTIcN"
		const uintG0xhmlM = BigInt("1105")
		const OnXFinanceJnza70Z = await OnXFinance.new(stringJ5kQawP, stringmNpVo3c, uintG0xhmlM, {from: accounts[2]});
		const uintctJvC6t = BigInt("715")
		const addressvfZGtDf = accounts[2]
		const uintw26bpz = BigInt("597")
		const addressOk2Iw3k = accounts[1]
		const stringiXNV9Xw = await OnXFinanceJnza70Z.symbol.call({from: accounts[0]});
		const boolOTdq4x6 = await OnXFinanceJnza70Z.approve.call(addressvfZGtDf, uintctJvC6t, {from: accounts[4]});
		const string9Fr5MY = await OnXFinanceJnza70Z.symbol.call({from: accounts[3]});
		const stringut40e0C = await OnXFinanceJnza70Z.symbol.call({from: accounts[4]});
		const boolnpc9KY1 = await OnXFinanceJnza70Z.approveAndCall.call(addressOk2Iw3k, uintw26bpz, {from: accounts[2]});

		assert.equal(boolOTdq4x6, true)
		assert.equal(boolnpc9KY1, true)
		assert.equal(string9Fr5MY, "sTKhFrfqWcnDwlejAlTIcN")
		assert.equal(stringiXNV9Xw, "sTKhFrfqWcnDwlejAlTIcN")
		assert.equal(stringut40e0C, "sTKhFrfqWcnDwlejAlTIcN")
	});

	it('test for OnXFinance', async () => {
		const stringn1Pr79D = "TReZdEvRjj8HrL9kmLLQvUY9tUwL4ygKsHLS8gEXYBwh3yDSuOxaVVpT2Gxrqcev9BoSEGe0WDlOZYWWkAVx0EmD3W4pygGw7H"
		const stringWAg4r6R = "GSyfRGyVUYKAew81YZxvDL5qs2Dlr8asQdrNkI8Wi4H"
		const uintQSnrD2e = BigInt("11")
		const OnXFinancerEpwNNn = await OnXFinance.new(stringn1Pr79D, stringWAg4r6R, uintQSnrD2e, {from: accounts[3]});
		const addresstPMluDv = accounts[5]
		const uintOkLH0NT = BigInt("160")
		const addressuu9pCT = "0x0000000000000000000000000000000000000001"
		const addressvwiqyJZ = accounts[0]
		const uintrsthFCi = BigInt("1697")
		const addresssjlE28j = accounts[1]
		const boolRTnK1oM = await OnXFinancerEpwNNn.transferownership.call(addresstPMluDv, {from: accounts[3]});
		const stringKDRrVub = await OnXFinancerEpwNNn.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolakbm8wN = await OnXFinancerEpwNNn.transferFrom.call(addressvwiqyJZ, addressuu9pCT, uintOkLH0NT, {from: accounts[4]});
		const stringLVP2YKc = await OnXFinancerEpwNNn.symbol.call({from: accounts[4]});
		const boolxocKObK = await OnXFinancerEpwNNn.approve.call(addresssjlE28j, uintrsthFCi, {from: accounts[4]});

		assert.equal(boolRTnK1oM, true)
		assert.equal(stringKDRrVub, "GSyfRGyVUYKAew81YZxvDL5qs2Dlr8asQdrNkI8Wi4H")
		await expect(OnXFinancerEpwNNn.transferFrom.call(addressvwiqyJZ, addressuu9pCT, uintOkLH0NT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringo8cwhIf = "stbzOv98xJGi6YqL2mUJ2o1NNaKt8IM6nV1hpCw"
		const stringzpN4yE8 = "hdsQVFhgka6kedVTbwoLXCOvCuMBHmNeI1eIUDgNMo94VqNiF"
		const uintmuLwWdO = BigInt("1808")
		const OnXFinancehMnt63t = await OnXFinance.new(stringo8cwhIf, stringzpN4yE8, uintmuLwWdO, {from: accounts[4]});
		const uintTTNoxJC = BigInt("0")
		const addressXxNsIkC = accounts[4]
		const addresshxMAqJI = accounts[0]
		const uintLDsnLLL = BigInt("758")
		const addressmCp5K6z = accounts[3]
		const addressRQLY9On = accounts[2]
		const addressALpfVfW = accounts[1]
		const uintGrBmODf = BigInt("756")
		const addressFCI4iqa = "0x0000000000000000000000000000000000000001"
		const addressVs1mksm = accounts[3]
		const boolIvUOS0a = await OnXFinancehMnt63t.transferFrom.call(addresshxMAqJI, addressXxNsIkC, uintTTNoxJC, {from: accounts[4]});
		const boolJVHm1qM = await OnXFinancehMnt63t.approveAndCall.call(addressmCp5K6z, uintLDsnLLL, {from: "0x0000000000000000000000000000000000000001"});
		const uintF8qL2NR = await OnXFinancehMnt63t.allowance.call(addressALpfVfW, addressRQLY9On, {from: accounts[3]});
		const boolfJiZzX9 = await OnXFinancehMnt63t.transferFrom.call(addressVs1mksm, addressFCI4iqa, uintGrBmODf, {from: accounts[0]});

		assert.equal(boolIvUOS0a, true)
		await expect(OnXFinancehMnt63t.approveAndCall.call(addressmCp5K6z, uintLDsnLLL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})