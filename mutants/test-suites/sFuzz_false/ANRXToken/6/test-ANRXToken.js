const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintIlhxe19 = BigInt("1028")
		const stringGT1AI9k = "PLhTzxK4xgoBYW6KGdMXymtZl67L7WxGLSrl8FMJehlVinUlrXHS73BjcYKL7Sfay4ssrb1kwVZI5YXHYfqPUUGwFVeXv"
		const stringJXrNG3Y = "xJ4w1cmn"
		const uint9HFjM6 = BigInt("311")
		const ANRXTokenbaTMrNs = await ANRXToken.new(uintIlhxe19, stringGT1AI9k, stringJXrNG3Y, uint9HFjM6, {from: accounts[4]});
		const uintNr21Q0d = BigInt("1251")
		const uintce4WWg = BigInt("493")
		const addressdFswabR = accounts[1]
		const address3MQnY8 = accounts[4]
		const addressTlK0gNP = accounts[3]
		const addressur1hvLh = accounts[2]
//		const uintv01WZm = await ANRXTokenbaTMrNs.redeem.call(uintNr21Q0d, {from: accounts[0]});
//		const boolvo71lu6 = await ANRXTokenbaTMrNs.transfer.call(addressdFswabR, uintce4WWg, {from: accounts[1]});
//		const uintVlH3nlL = await ANRXTokenbaTMrNs.balanceOf.call(address3MQnY8, {from: accounts[2]});
//		const addressiTMcqxd = await ANRXTokenbaTMrNs.deprecate.call(addressTlK0gNP, {from: accounts[2]});
//		const uintJp0Xb6z = await ANRXTokenbaTMrNs.balanceOf.call(addressur1hvLh, {from: accounts[4]});

		await expect(ANRXTokenbaTMrNs.redeem.call(uintNr21Q0d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintRJTAOKO = BigInt("1800")
		const stringeBHyFCp = "dN5jgSwl9z1vP2IQ7sjBMRyKJeUA7fnfDTourso8lX29LHl1Xog4d1GQLxaJFqF"
		const stringB7oN6YH = "3R8emrdYDXkX6VOfTeuOzo6RA4gLMsYbz4BFcavplIHGKK8bk"
		const uintQnBQZHv = BigInt("643")
		const ANRXTokenY0f04Sx = await ANRXToken.new(uintRJTAOKO, stringeBHyFCp, stringB7oN6YH, uintQnBQZHv, {from: accounts[3]});
		const addresswCB0ZGt = accounts[1]
		const uintvT4F625 = BigInt("1342")
		const addressbNgQC5D = accounts[5]
		const uintRQjYYVc = BigInt("770")
		const addresszVcMvdj = accounts[2]
		const addressxfxyDn6 = accounts[3]
		const addressscNm5Qs = "0x0000000000000000000000000000000000000001"
		const uintAJSh5JH = await ANRXTokenY0f04Sx.totalSupply.call({from: accounts[0]});
		const addressGQNtZl = await ANRXTokenY0f04Sx.deprecate.call(addresswCB0ZGt, {from: accounts[3]});
		const booll7MJ6Kl = await ANRXTokenY0f04Sx.approve.call(addressbNgQC5D, uintvT4F625, {from: accounts[4]});
//		const boolcF3HVHD = await ANRXTokenY0f04Sx.transferFrom.call(addressxfxyDn6, addresszVcMvdj, uintRQjYYVc, {from: accounts[1]});
//		const addressyHOojIf = await ANRXTokenY0f04Sx.deprecate.call(addressscNm5Qs, {from: accounts[3]});

		assert.equal(booll7MJ6Kl, true)
		assert.equal(uintAJSh5JH, BigInt("1800"))
		await expect(ANRXTokenY0f04Sx.transferFrom.call(addressxfxyDn6, addresszVcMvdj, uintRQjYYVc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzTNNIM = BigInt("916")
		const stringvCaZk42 = "fvAeGztH4IrruU1jQRSt7MeTkIvrrwPfntO1iHsNwihVWS0BS2HwElgD"
		const stringcORvmMF = "ywM737LSUpY4JUMvDt1Z6p6IjR0vKrMpzQ9qwDRlHlEe1lcaIScE74Zb4PcfRq6oWcXOXxChBdNlyWk8rLfWbFCVTpRhbCW"
		const uintAIIRHmC = BigInt("890")
		const ANRXTokenpibr7Pt = await ANRXToken.new(uintzTNNIM, stringvCaZk42, stringcORvmMF, uintAIIRHmC, {from: accounts[4]});
		const uintWeIKKYL = BigInt("152")
		const addressY2ErFi = accounts[2]
		const uintbTzb4b = BigInt("1510")
		const addressjLv0Kn4 = accounts[3]
		const addressURL3mpe = accounts[0]
		const uintE1vAYCL = await ANRXTokenpibr7Pt.totalSupply.call({from: accounts[3]});
//		const boolfoHITyX = await ANRXTokenpibr7Pt.transfer.call(addressY2ErFi, uintWeIKKYL, {from: accounts[0]});
//		const boolK7fyD5j = await ANRXTokenpibr7Pt.transferFrom.call(addressURL3mpe, addressjLv0Kn4, uintbTzb4b, {from: accounts[3]});

		assert.equal(uintE1vAYCL, BigInt("916"))
		await expect(ANRXTokenpibr7Pt.transfer.call(addressY2ErFi, uintWeIKKYL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintQ1DHwq = BigInt("868")
		const stringfsXBDbg = "IpLB9AvxK3wSuEVIDPgegiX1Y5gfmF7vKK6eL"
		const stringuglgDec = "MHItLzxsTmgbvDxE9Y4pSww42pBO8vve1QDkEVlSNA22DMLE51KfaHwvfoHKe8UUH"
		const uintydQ2pnB = BigInt("562")
		const ANRXTokeneTIUXdW = await ANRXToken.new(uintQ1DHwq, stringfsXBDbg, stringuglgDec, uintydQ2pnB, {from: accounts[2]});
		const addresscAP3vb2 = accounts[3]
		const addressvEuZA6J = accounts[1]
		const addresslvnY0Jg = accounts[1]
		const uintjHohezH = BigInt("1555")
		const addressgZHoNei = accounts[3]
		const uintGRvIA6P = BigInt("898")
		const uintpbVOVUn = BigInt("960")
		const uinta0Bc7vS = await ANRXTokeneTIUXdW.allowance.call(addressvEuZA6J, addresscAP3vb2, {from: accounts[1]});
		const uintm50yo6J = await ANRXTokeneTIUXdW.totalSupply.call({from: accounts[0]});
		const uintcoIfO6l = await ANRXTokeneTIUXdW.balanceOf.call(addresslvnY0Jg, {from: accounts[0]});
		const boolvS7VWAF = await ANRXTokeneTIUXdW.approve.call(addressgZHoNei, uintjHohezH, {from: accounts[5]});
//		const uinthLUWnK = await ANRXTokeneTIUXdW.setParams.call(uintpbVOVUn, uintGRvIA6P, {from: accounts[3]});

		assert.equal(boolvS7VWAF, true)
		assert.equal(uinta0Bc7vS, BigInt("0"))
		assert.equal(uintcoIfO6l, BigInt("0"))
		assert.equal(uintm50yo6J, BigInt("868"))
		await expect(ANRXTokeneTIUXdW.setParams.call(uintpbVOVUn, uintGRvIA6P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintiPuwL6O = BigInt("1294")
		const stringdHVbg9k = "DVwnv6r9s41HxthbCMxJKyFGFOymihnxN52ly"
		const stringw5IzRHM = "rHphhqM8WM"
		const uintXbD7MDD = BigInt("1629")
		const ANRXTokencwYaf3R = await ANRXToken.new(uintiPuwL6O, stringdHVbg9k, stringw5IzRHM, uintXbD7MDD, {from: "0x0000000000000000000000000000000000000001"});
		const addressn4fvVnr = accounts[3]
		const addressa40REXt = accounts[3]
		const uinta24kYjb = BigInt("2009")
		const addressESA9klG = accounts[5]
		const addressm46OJIf = accounts[5]
		const uintCR1m2OA = await ANRXTokencwYaf3R.balanceOf.call(addressn4fvVnr, {from: accounts[4]});
		const uintBVH6wER = await ANRXTokencwYaf3R.totalSupply.call({from: accounts[0]});
		const uintQPNKP2y = await ANRXTokencwYaf3R.balanceOf.call(addressa40REXt, {from: accounts[1]});
		const booloAILtbJ = await ANRXTokencwYaf3R.transfer.call(addressESA9klG, uinta24kYjb, {from: accounts[2]});
		const uint7X7V4l = await ANRXTokencwYaf3R.balanceOf.call(addressm46OJIf, {from: accounts[1]});
	});

	it('test for ANRXToken', async () => {
		const uintuKg3BDi = BigInt("916")
		const stringvCaZk42 = "fvAeGztH4IrruU1jQRSt7MeTkIvrrwPfntO1iHsNwihVWS0BS2HwElgD"
		const stringcORvmMF = "ywM737LSUpY4JUMvDt1Z6p6IjR0vKrMpzQ9qwDRlHlEe1lcaIScE74Zb4PcfRq6oWcXOXxChBdNlyWk8rLfWbFCVTpRhbCW"
		const uintFs1tO4X = BigInt("890")
		const ANRXTokenpibr7Pt = await ANRXToken.new(uintuKg3BDi, stringvCaZk42, stringcORvmMF, uintFs1tO4X, {from: accounts[4]});
		const uintuaHeuQ8 = BigInt("153")
		const uintPt8xdi5 = BigInt("2043")
		const uintx43Le9k = BigInt("1510")
		const addresswopUlNU = accounts[3]
		const addresssnTE1ZP = accounts[1]
//		const uintSpyHIls = await ANRXTokenpibr7Pt.setParams.call(uintPt8xdi5, uintuaHeuQ8, {from: accounts[4]});
//		const boolK7fyD5j = await ANRXTokenpibr7Pt.transferFrom.call(addresssnTE1ZP, addresswopUlNU, uintx43Le9k, {from: accounts[3]});

		await expect(ANRXTokenpibr7Pt.setParams.call(uintPt8xdi5, uintuaHeuQ8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinta3J3xIc = BigInt("1252")
		const stringThm3GUg = "m1WhqR6ronSMDWsQKiPncZtzF5qd"
		const stringxjbc5t = "wX64rrwE1qdrdQkomeCDG3wO51WiUzfvRVMF2jk0qZr8QmFopYKCaMYMd17pk29847j31xKeTezDm15mBAoJuguuBROiJ"
		const uinttPHCXwP = BigInt("1203")
		const ANRXTokenleQrRUF = await ANRXToken.new(uinta3J3xIc, stringThm3GUg, stringxjbc5t, uinttPHCXwP, {from: accounts[0]});
		const uintgA4keCS = BigInt("1306")
		const addresslykm85T = accounts[4]
		const addressGRI0W2F = accounts[1]
//		const uintSFaIvNN = await ANRXTokenleQrRUF.redeem.call(uintgA4keCS, {from: accounts[0]});
//		const uintvkoDpGN = await ANRXTokenleQrRUF.balanceOf.call(addresslykm85T, {from: accounts[3]});
//		const uintTUN2Zw3 = await ANRXTokenleQrRUF.balanceOf.call(addressGRI0W2F, {from: accounts[3]});

		await expect(ANRXTokenleQrRUF.redeem.call(uintgA4keCS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdOJRoOu = BigInt("1800")
		const stringeBHyFCp = "dN5jgSwl9z1vP2IQ7sjBMRyKJeUA7fnfDTourso8lX29LHl1Xog4d1GQLxaJFqF"
		const stringB7oN6YH = "3R8emrdYDXkX6VOfTeuOzo6RA4gLMsYbz4BFcavplIHGKK8bk"
		const uintU4JZ5Y = BigInt("643")
		const ANRXTokenY0f04Sx = await ANRXToken.new(uintdOJRoOu, stringeBHyFCp, stringB7oN6YH, uintU4JZ5Y, {from: accounts[3]});
		const addressKjCjF6d = accounts[5]
		const uintKowySG2 = BigInt("844")
		const addressHqMyVIN = accounts[1]
		const uintSRelR5z = BigInt("1342")
		const addressaKCXwd = accounts[5]
		const uintSudGWwo = BigInt("770")
		const addresszRDpOC = accounts[2]
		const addressVxuIGzV = accounts[3]
		const addressjnnRJH = "0x0000000000000000000000000000000000000001"
		const uintDRR2Bik = await ANRXTokenY0f04Sx.balanceOf.call(addressKjCjF6d, {from: accounts[1]});
		const uintuOTKwEJ = await ANRXTokenY0f04Sx.issue.call(uintKowySG2, {from: accounts[3]});
		const uintAJSh5JH = await ANRXTokenY0f04Sx.totalSupply.call({from: accounts[0]});
		const addressGQNtZl = await ANRXTokenY0f04Sx.deprecate.call(addressHqMyVIN, {from: accounts[3]});
		const booll7MJ6Kl = await ANRXTokenY0f04Sx.approve.call(addressaKCXwd, uintSRelR5z, {from: accounts[4]});
//		const boolcF3HVHD = await ANRXTokenY0f04Sx.transferFrom.call(addressVxuIGzV, addresszRDpOC, uintSudGWwo, {from: accounts[1]});
//		const addressyHOojIf = await ANRXTokenY0f04Sx.deprecate.call(addressjnnRJH, {from: accounts[3]});

		assert.equal(booll7MJ6Kl, true)
		assert.equal(uintAJSh5JH, BigInt("1800"))
		assert.equal(uintDRR2Bik, BigInt("0"))
		await expect(ANRXTokenY0f04Sx.transferFrom.call(addressVxuIGzV, addresszRDpOC, uintSudGWwo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})