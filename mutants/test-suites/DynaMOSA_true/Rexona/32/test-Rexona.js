const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringTg4YYK = "pEv4LWE1h3htesjUi4tgPFqVU2aFJo687jhkDdvi2VG94udBAzQxFczjkiHz7ankD6uh9icWgmjJwF9cHJKUTX2DYC"
		const stringf3i762L = "dqxAAcqUS5CoaGVstvNXCJl9NJLcyhYkSGsBld5ihRjGFXoMQrwlC41bsM8SoRtiIiG2We2lfZKFBhyFykmbQJ"
		const uintrF5eKsA = BigInt("1147")
		const RexonaPNsCDD0 = await Rexona.new(stringTg4YYK, stringf3i762L, uintrF5eKsA, {from: accounts[0]});
		const uintHl5H7Uc = BigInt("683")
		const addressNCazlPu = accounts[3]
		const uintAaNve1a = BigInt("345")
		const addressqZ6q4Bq = accounts[4]
		const addressKyXXaqx = accounts[0]
		const addressP6vKW34 = accounts[4]
		const uintqgaHccR = BigInt("1056")
		const addressnappX7q = accounts[3]
//		const boolem42Ta = await RexonaPNsCDD0.approveAndCall.call(addressNCazlPu, uintHl5H7Uc, {from: accounts[4]});
//		const boolBubByp = await RexonaPNsCDD0.transferFrom.call(addressKyXXaqx, addressqZ6q4Bq, uintAaNve1a, {from: accounts[1]});
//		const boolQKGiscv = await RexonaPNsCDD0.transferownership.call(addressP6vKW34, {from: accounts[0]});
//		const booletozGR = await RexonaPNsCDD0.approveAndCall.call(addressnappX7q, uintqgaHccR, {from: accounts[2]});

		await expect(RexonaPNsCDD0.approveAndCall.call(addressNCazlPu, uintHl5H7Uc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringjh0ZUq1 = "q6yV4UasZGIhGKYkvAXfeTIb38hFqrBMwuyOEZ0DPbbzg3qNiJfmbEMtHk8qAMLS0wONPSYi4uNo6pZz4IzJpgi"
		const stringzwokvOX = "eJJhyfkv9TB9uNtOECh9j46cjNKHH"
		const uintO6MEmle = BigInt("843")
		const Rexona7Msfbq = await Rexona.new(stringjh0ZUq1, stringzwokvOX, uintO6MEmle, {from: accounts[2]});
		const uintdnX0oBO = BigInt("1748")
		const addresshNpjlta = accounts[3]
		const uintuYuDfgt = BigInt("1383")
		const addressZzL0Erk = accounts[0]
		const uintWcDaSRv = BigInt("1940")
		const addressQFGtze6 = accounts[3]
		const addressLM3tP5 = accounts[2]
		const uintv7KUr8z = BigInt("1911")
		const addressFdM2mek = accounts[0]
//		const boolSL2nx2y = await Rexona7Msfbq.transfer.call(addresshNpjlta, uintdnX0oBO, {from: accounts[0]});
//		const boolPZV8wLM = await Rexona7Msfbq.approveAndCall.call(addressZzL0Erk, uintuYuDfgt, {from: accounts[2]});
//		const boolsVKOjhv = await Rexona7Msfbq.transferFrom.call(addressLM3tP5, addressQFGtze6, uintWcDaSRv, {from: accounts[1]});
//		const boolb83vbnP = await Rexona7Msfbq.approveAndCall.call(addressFdM2mek, uintv7KUr8z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Rexona7Msfbq.transfer.call(addresshNpjlta, uintdnX0oBO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringcJPrcX5 = "4AN5MPMRCDpD3C5ncon2FcqJ0p7mDAyc8sULWGnTfJpb6ovWgewpm7Xw612mBklaHwChKhQjmAbLrTcOn8"
		const stringeYlGWWc = "kPMekJj7F8xnolmMmMDrD0lwriik7CSv7TDtJrX9eKW6R2y2UM85UJMoGwHd5i22ImTPXSYvJ7QUw"
		const uintl4odeb2 = BigInt("316")
		const RexonaxSah0EY = await Rexona.new(stringcJPrcX5, stringeYlGWWc, uintl4odeb2, {from: accounts[3]});
		const uintKmMShVj = BigInt("1433")
		const addresszwSOOJt = accounts[2]
		const uintgrXZ0LI = BigInt("801")
		const addressZ49VHLc = accounts[3]
		const boolUJW8j8g = await RexonaxSah0EY.approve.call(addresszwSOOJt, uintKmMShVj, {from: accounts[3]});
		const boolqHloZlI = await RexonaxSah0EY.approveAndCall.call(addressZ49VHLc, uintgrXZ0LI, {from: accounts[3]});

		assert.equal(boolUJW8j8g, true)
		assert.equal(boolqHloZlI, true)
	});

	it('test for Rexona', async () => {
		const stringIuSOlTz = "uM61Q4eU7S1ZVa2ciiecMe83Ku1hKoXVJTyQ"
		const stringcZtZFwf = "NkBhQRqTq1dGQ7lVEswW2hdlyN3AmegEaihKtnUPO6nQj4m44VGcd5dOrbhyJr37uiuGJU32lqO"
		const uintYJLBpt = BigInt("601")
		const RexonaJS2llQI = await Rexona.new(stringIuSOlTz, stringcZtZFwf, uintYJLBpt, {from: accounts[1]});
		const uintW5LbqRr = BigInt("735")
		const addresst8r9Zx9 = accounts[1]
		const addressZosHOEF = accounts[0]
		const uintWi0lgjG = BigInt("1241")
		const addresshA7oRoc = accounts[2]
		const uintZYtkmwB = BigInt("98")
		const addressjSCIOXc = accounts[2]
		const addressG6SOkY8 = accounts[0]
		const uintOv2NT2E = BigInt("648")
		const addressLKe3sqm = accounts[4]
//		const booluBPtlxt = await RexonaJS2llQI.transferFrom.call(addressZosHOEF, addresst8r9Zx9, uintW5LbqRr, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrmbS5ac = await RexonaJS2llQI.transfer.call(addresshA7oRoc, uintWi0lgjG, {from: accounts[0]});
//		const boolDkBzup7 = await RexonaJS2llQI.transfer.call(addressjSCIOXc, uintZYtkmwB, {from: accounts[1]});
//		const boolXD4zAiw = await RexonaJS2llQI.transferownership.call(addressG6SOkY8, {from: accounts[3]});
//		const boolTojRbX = await RexonaJS2llQI.approve.call(addressLKe3sqm, uintOv2NT2E, {from: accounts[2]});

		await expect(RexonaJS2llQI.transferFrom.call(addressZosHOEF, addresst8r9Zx9, uintW5LbqRr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringnBDebdH = "v6BiL7ZcuHDXvJwC1BlMpLCVBh7kLoDSP2"
		const stringQnmcoyr = "jR6mW0J7y45ffkCO"
		const uintLMxcMNC = BigInt("526")
		const RexonaD5FnvXh = await Rexona.new(stringnBDebdH, stringQnmcoyr, uintLMxcMNC, {from: accounts[0]});
		const addressKZWyo6v = accounts[4]
		const uintU2RHD8h = BigInt("953")
		const addressp04RHZG = accounts[0]
		const address3gyOC3 = accounts[0]
		const uintSeCpPo = BigInt("1932")
		const addressU6aAKnk = accounts[1]
//		const boolWMOzLbZ = await RexonaD5FnvXh.transferownership.call(addressKZWyo6v, {from: accounts[3]});
//		const bool68M3RG = await RexonaD5FnvXh.transferFrom.call(address3gyOC3, addressp04RHZG, uintU2RHD8h, {from: accounts[4]});
//		const boolgtPqNUV = await RexonaD5FnvXh.approveAndCall.call(addressU6aAKnk, uintSeCpPo, {from: accounts[4]});

		await expect(RexonaD5FnvXh.transferownership.call(addressKZWyo6v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgY0faHx = "lf5qNkBYhgSXp2jF"
		const stringvu5YnMZ = "ra"
		const uinttugRxYf = BigInt("937")
		const Rexonaqqv1Uw = await Rexona.new(stringgY0faHx, stringvu5YnMZ, uinttugRxYf, {from: "0x0000000000000000000000000000000000000001"});
		const uintLAaDJV = BigInt("414")
		const addressUti88Zx = accounts[2]
		const uintqt3Eyrv = BigInt("446")
		const addressjyRyeV9 = accounts[1]
		const uintbk1IoJ = BigInt("950")
		const addressDWyLGLb = accounts[1]
		const boolxXYdCps = await Rexonaqqv1Uw.approve.call(addressUti88Zx, uintLAaDJV, {from: accounts[2]});
		const bool8r8LWw = await Rexonaqqv1Uw.approveAndCall.call(addressjyRyeV9, uintqt3Eyrv, {from: accounts[0]});
		const bool3JxFbS = await Rexonaqqv1Uw.approveAndCall.call(addressDWyLGLb, uintbk1IoJ, {from: accounts[1]});
	});

	it('test for Rexona', async () => {
		const stringVhzPcIq = "JeKAFS"
		const string6MYWD4 = "FrAaUYnnYDfiPjv6lLV0DamFJMLD"
		const uinthWCtmMi = BigInt("693")
		const RexonaEJAuvXH = await Rexona.new(stringVhzPcIq, string6MYWD4, uinthWCtmMi, {from: accounts[3]});
		const uintQsAjiHh = BigInt("1102")
		const addressYLq0BpX = accounts[2]
		const uintFq2PsHr = BigInt("199")
		const addressSDKJzvW = accounts[3]
		const uintDQMcjU2 = BigInt("1448")
		const addressEj25Ra = accounts[2]
		const uintfKPhpZz = BigInt("561")
		const addressa3LywN7 = accounts[1]
		const uintWyfkqLg = BigInt("1028")
		const addresswUCNE9 = "0x0000000000000000000000000000000000000001"
		const uintxjFhhzb = BigInt("1440")
		const addresscVGye8W = accounts[2]
		const uintmuDx9l = BigInt("515")
		const addresskLM6x6i = "0x0000000000000000000000000000000000000001"
		const addressORVUlc5 = accounts[0]
		const boolL02Qp9I = await RexonaEJAuvXH.approve.call(addressYLq0BpX, uintQsAjiHh, {from: accounts[5]});
//		const boolaaXPOT6 = await RexonaEJAuvXH.transfer.call(addressSDKJzvW, uintFq2PsHr, {from: accounts[4]});
//		const boolU7HMlEa = await RexonaEJAuvXH.approveAndCall.call(addressEj25Ra, uintDQMcjU2, {from: accounts[3]});
//		const boolRs8yhM = await RexonaEJAuvXH.approve.call(addressa3LywN7, uintfKPhpZz, {from: accounts[3]});
//		const bool3JpoRa = await RexonaEJAuvXH.transfer.call(addresswUCNE9, uintWyfkqLg, {from: accounts[1]});
//		const boolIOrfsom = await RexonaEJAuvXH.transfer.call(addresscVGye8W, uintxjFhhzb, {from: accounts[4]});
//		const boolOg2Xgay = await RexonaEJAuvXH.transferFrom.call(addressORVUlc5, addresskLM6x6i, uintmuDx9l, {from: accounts[0]});

		assert.equal(boolL02Qp9I, true)
		await expect(RexonaEJAuvXH.transfer.call(addressSDKJzvW, uintFq2PsHr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringcJPrcX5 = "4AN5MPMRCDpD3C5ncon2FcqJ0p7mDAyc8sULWGnTfJpb6ovWgewpm7Xw612mBklaHwChKhQjmAbLrTcOn8"
		const stringeYlGWWc = "kPMekJj7F8xnolmMmMDrD0lwriik7CSv7TDtJrX9eKW6R2y2UM85UJMoGwHd5i22ImTPXSYvJ7QUw"
		const uintZAUYu4l = BigInt("316")
		const RexonaxSah0EY = await Rexona.new(stringcJPrcX5, stringeYlGWWc, uintZAUYu4l, {from: accounts[3]});
		const uintlM1wNnL = BigInt("1433")
		const addresstg2yyQz = accounts[3]
		const uintS7xmNj9 = BigInt("890")
		const addressHH3PvC = accounts[1]
		const uintQbRZrMy = BigInt("801")
		const addresskUg7LlY = accounts[3]
		const addresszxxkX7a = accounts[2]
		const boolUJW8j8g = await RexonaxSah0EY.approve.call(addresstg2yyQz, uintlM1wNnL, {from: accounts[3]});
		const boolybUZwqs = await RexonaxSah0EY.approveAndCall.call(addressHH3PvC, uintS7xmNj9, {from: accounts[3]});
		const boolqHloZlI = await RexonaxSah0EY.approveAndCall.call(addresskUg7LlY, uintQbRZrMy, {from: accounts[3]});
		const boolWVH0dB = await RexonaxSah0EY.transferownership.call(addresszxxkX7a, {from: accounts[3]});

		assert.equal(boolUJW8j8g, true)
		assert.equal(boolWVH0dB, true)
		assert.equal(boolqHloZlI, true)
		assert.equal(boolybUZwqs, true)
	});

	it('test for Rexona', async () => {
		const stringjh0ZUq1 = "q6yV4UasZGIhGKYkvAXfeTIb38hFqrBMwuyOEZ0DPbbzg3qNiJfmbEMtHk8qAMLS0wONPSYi4uNo6pZz4IzJpgi"
		const stringzwokvOX = "eJJhyfkv9TB9uNtOECh9j46cjNKHH"
		const uintHo9DcAx = BigInt("843")
		const Rexona7Msfbq = await Rexona.new(stringjh0ZUq1, stringzwokvOX, uintHo9DcAx, {from: accounts[2]});
		const uintnzOaasS = BigInt("0")
		const addressxNvvHwr = "0x0000000000000000000000000000000000000001"
		const addressGqhrKI0 = accounts[3]
		const boolabKqpEi = await Rexona7Msfbq.transferFrom.call(addressGqhrKI0, addressxNvvHwr, uintnzOaasS, {from: accounts[2]});

		assert.equal(boolabKqpEi, true)
	});

	it('test for Rexona', async () => {
		const stringAArHQ2 = "qEyRFRX86agSzH"
		const stringCDI4Yi = "p3HVGqG"
		const uintmDc9ZTx = BigInt("1418")
		const RexonacuSKpAe = await Rexona.new(stringAArHQ2, stringCDI4Yi, uintmDc9ZTx, {from: accounts[4]});
		const uintu2sKW5e = BigInt("1304")
		const addressmO9MToX = accounts[2]
		const uintzOStG68 = BigInt("0")
		const addressWYBSOKy = accounts[2]
		const boolK9Wx9w9 = await RexonacuSKpAe.approve.call(addressmO9MToX, uintu2sKW5e, {from: accounts[2]});
		const boolS2hFLJO = await RexonacuSKpAe.approveAndCall.call(addressWYBSOKy, uintzOStG68, {from: accounts[4]});

		assert.equal(boolK9Wx9w9, true)
		assert.equal(boolS2hFLJO, true)
	});

	it('test for Rexona', async () => {
		const stringjh0ZUq1 = "q6yV4UasZGIhGKYkvAXfeTIb38hFqrBMwuyOEZ0DPbbzg3qNiJfmbEMtHk8qAMLS0wONPSYi4uNo6pZz4IzJpgi"
		const stringzwokvOX = "eJJhyfkv9TB9uNtOECh9j46cjNKHH"
		const uintfcO86JF = BigInt("843")
		const Rexona7Msfbq = await Rexona.new(stringjh0ZUq1, stringzwokvOX, uintfcO86JF, {from: accounts[2]});
		const uintkoMHa8m = BigInt("3")
		const addressPmurZSV = "0x00000000000000000000000000000000000000-1"
		const addressvieyDx0 = accounts[3]
//		const boolabKqpEi = await Rexona7Msfbq.transferFrom.call(addressvieyDx0, addressPmurZSV, uintkoMHa8m, {from: accounts[2]});

		await expect(Rexona7Msfbq.transferFrom.call(addressvieyDx0, addressPmurZSV, uintkoMHa8m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})