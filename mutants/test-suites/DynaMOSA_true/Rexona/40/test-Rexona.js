const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringqZDurZE = "tPTpdrgCKBwhiQC1Bv9IUYzEfBUyyD0uAG3OYRdRlhKxgAk0XJkdENgXNxENQfDtacoKU"
		const stringfLQsA4z = "37MkWlbviUGEs9Jk8DJ"
		const uintK9zmT2z = BigInt("1057")
		const RexonaO2V8l41 = await Rexona.new(stringqZDurZE, stringfLQsA4z, uintK9zmT2z, {from: accounts[3]});
		const uintZZe3krM = BigInt("507")
		const addressLQPn5Vf = accounts[5]
		const addressmyg05wz = accounts[5]
		const uintvH7r0IT = BigInt("1809")
		const addressyKhzeCT = accounts[3]
		const uintcBROEgp = BigInt("1921")
		const addressJOtEao = accounts[2]
//		const boolLlqYVZQ = await RexonaO2V8l41.transferFrom.call(addressmyg05wz, addressLQPn5Vf, uintZZe3krM, {from: accounts[2]});
//		const boolLY8EOTI = await RexonaO2V8l41.approve.call(addressyKhzeCT, uintvH7r0IT, {from: accounts[2]});
//		const boolLJT4iwq = await RexonaO2V8l41.approveAndCall.call(addressJOtEao, uintcBROEgp, {from: accounts[3]});

		await expect(RexonaO2V8l41.transferFrom.call(addressmyg05wz, addressLQPn5Vf, uintZZe3krM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringQAVKgL7 = "ZgfQuUpO"
		const stringZHUjIVJ = "n7aV8ow0bUYZTXqeqgtmEGIjzyRVtAxRqifWmQoyVWI3WgMvnvbSCFSBkP98VcFnmOmKeP"
		const uintv8IS6xK = BigInt("1790")
		const Rexonat5GXkH3 = await Rexona.new(stringQAVKgL7, stringZHUjIVJ, uintv8IS6xK, {from: accounts[3]});
		const uintAEfmdo4 = BigInt("1250")
		const addressRX0I8CK = accounts[4]
		const uintdHaFjKM = BigInt("1140")
		const addressRrWsFJZ = accounts[4]
		const boolD4MM99x = await Rexonat5GXkH3.approve.call(addressRX0I8CK, uintAEfmdo4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolt7ZPCZC = await Rexonat5GXkH3.approveAndCall.call(addressRrWsFJZ, uintdHaFjKM, {from: accounts[1]});

		assert.equal(boolD4MM99x, true)
		await expect(Rexonat5GXkH3.approveAndCall.call(addressRrWsFJZ, uintdHaFjKM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkHa1hjs = "ThPMKtxRSWbinx0djSVcz"
		const stringlR9cbBP = "gDB"
		const uintMIFwZmf = BigInt("1505")
		const RexonavqcW6D = await Rexona.new(stringkHa1hjs, stringlR9cbBP, uintMIFwZmf, {from: accounts[3]});
		const uintuc9b4ja = BigInt("431")
		const addressW2yTa6W = accounts[2]
		const addresslRraqpA = "0x0000000000000000000000000000000000000001"
		const uintCpkNuI8 = BigInt("1450")
		const addressIZe78cW = accounts[1]
		const uintRGR5ez = BigInt("1293")
		const addressE1geEt3 = accounts[3]
		const uint0yW1Gb = BigInt("61")
		const addressic6pQgJ = accounts[5]
		const uintFWXUyKv = BigInt("550")
		const addressN3tww0i = accounts[4]
		const boolTVBRxQ1 = await RexonavqcW6D.approve.call(addressW2yTa6W, uintuc9b4ja, {from: accounts[3]});
//		const boolMKNLSYP = await RexonavqcW6D.transferownership.call(addresslRraqpA, {from: accounts[2]});
//		const boolTHOnhuV = await RexonavqcW6D.approveAndCall.call(addressIZe78cW, uintCpkNuI8, {from: accounts[4]});
//		const boolIrUPuKl = await RexonavqcW6D.approveAndCall.call(addressE1geEt3, uintRGR5ez, {from: accounts[3]});
//		const boolroUfOt5 = await RexonavqcW6D.approveAndCall.call(addressic6pQgJ, uint0yW1Gb, {from: accounts[0]});
//		const boolMqXtIQS = await RexonavqcW6D.approveAndCall.call(addressN3tww0i, uintFWXUyKv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTVBRxQ1, true)
		await expect(RexonavqcW6D.transferownership.call(addresslRraqpA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringabvOdt1 = "8fDB31yAM4B2Bh4WneL6nphP9DyYXIYxALS0rgKt6HmuBM39nuGR7Hyk6jzPzdmDi"
		const stringoeMQuWk = "BMkeH9dxk8d4Xr4RVPil8pegfjKTkiIpJrvrfFIHvt36Bg8w"
		const uintf3I2GkE = BigInt("1197")
		const RexonaXlFnQ5W = await Rexona.new(stringabvOdt1, stringoeMQuWk, uintf3I2GkE, {from: "0x0000000000000000000000000000000000000001"});
		const uintTrc0wA7 = BigInt("1399")
		const addressRje44XQ = accounts[0]
		const uintyF5nn6 = BigInt("988")
		const addressjT9Bsko = accounts[0]
		const addressdty0Vm7 = accounts[3]
		const boolFLCwX4 = await RexonaXlFnQ5W.approveAndCall.call(addressRje44XQ, uintTrc0wA7, {from: "0x0000000000000000000000000000000000000001"});
		const boolPRSvUgS = await RexonaXlFnQ5W.approveAndCall.call(addressjT9Bsko, uintyF5nn6, {from: accounts[0]});
		const booldF4LvyV = await RexonaXlFnQ5W.transferownership.call(addressdty0Vm7, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringQMBaVeA = "2aWBJwz5yJAkaKLKJgjv5QIgTfgDIoL4mStm4i2sOamiGm"
		const stringb0BTqKc = "XVl5v7ADhI"
		const uinthVOqMeP = BigInt("1602")
		const Rexonab33MpMv = await Rexona.new(stringQMBaVeA, stringb0BTqKc, uinthVOqMeP, {from: accounts[4]});
		const addressYu5D04v = accounts[2]
		const addressDMYpF0h = accounts[5]
		const uintS0xLQub = BigInt("1584")
		const addressNsZNW8c = accounts[2]
		const uintpHHiJHC = BigInt("829")
		const addressGizWbp7 = "0x0000000000000000000000000000000000000001"
		const boolrCMvHt = await Rexonab33MpMv.transferownership.call(addressYu5D04v, {from: accounts[4]});
//		const booluY7os4R = await Rexonab33MpMv.transferownership.call(addressDMYpF0h, {from: accounts[2]});
//		const boolw7k8h3c = await Rexonab33MpMv.transfer.call(addressNsZNW8c, uintS0xLQub, {from: accounts[0]});
//		const boolyQ3ODKh = await Rexonab33MpMv.approveAndCall.call(addressGizWbp7, uintpHHiJHC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrCMvHt, true)
		await expect(Rexonab33MpMv.transferownership.call(addressDMYpF0h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkSBGdcW = "3bnTtFj"
		const stringJFDiQtX = "3p72XxLWHtC0yoK3iDYwjtIqTWfPIAkj7i68gicHt8HSezy"
		const uintlvnuTgW = BigInt("342")
		const Rexonam8XMxmv = await Rexona.new(stringkSBGdcW, stringJFDiQtX, uintlvnuTgW, {from: accounts[3]});
		const uintQj1bSqD = BigInt("1541")
		const addressiLAqLC7 = accounts[0]
		const addressr8yxCXf = accounts[4]
		const uintTXcLJc = BigInt("1266")
		const addressP7RALvB = accounts[2]
//		const boolYAnJLul = await Rexonam8XMxmv.transferFrom.call(addressr8yxCXf, addressiLAqLC7, uintQj1bSqD, {from: accounts[4]});
//		const boolZRFuKI5 = await Rexonam8XMxmv.approveAndCall.call(addressP7RALvB, uintTXcLJc, {from: accounts[4]});

		await expect(Rexonam8XMxmv.transferFrom.call(addressr8yxCXf, addressiLAqLC7, uintQj1bSqD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringW560RHw = "s4V1r5ix6xxj"
		const stringwu3hr6J = "TizGlXC735ab6oUn5fJDoRzx3ropM3ORncTO5DWtSesnmIhGDUQPKSgvCJ4VXky4joJmkuH2PpIvyb5FP"
		const uintqkgYkBP = BigInt("870")
		const RexonamkJILNx = await Rexona.new(stringW560RHw, stringwu3hr6J, uintqkgYkBP, {from: accounts[3]});
		const uintN3rJ7Vv = BigInt("74")
		const addressxnsgOiG = accounts[2]
		const addressaEqobF = accounts[1]
		const booloQim2cE = await RexonamkJILNx.approveAndCall.call(addressxnsgOiG, uintN3rJ7Vv, {from: accounts[3]});
//		const boolrk8IiUT = await RexonamkJILNx.transferownership.call(addressaEqobF, {from: accounts[4]});

		assert.equal(booloQim2cE, true)
		await expect(RexonamkJILNx.transferownership.call(addressaEqobF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringW560RHw = "s4V1r5ix6xxj"
		const stringwu3hr6J = "TizGlXC735ab6oUn5fJDoRzx3ropM3ORncTO5DWtSesnmIhGDUQPKSgvCJ4VXky4joJmkuH2PpIvyb5FP"
		const uintvUzljnt = BigInt("870")
		const RexonamkJILNx = await Rexona.new(stringW560RHw, stringwu3hr6J, uintvUzljnt, {from: accounts[3]});
		const uintwFS1XGw = BigInt("847")
		const addressmozRFtn = accounts[4]
		const uintZ8sPrco = BigInt("715")
		const addressDHN6Ri = accounts[4]
		const addresskFFt00C = accounts[4]
		const uintEAO9v5 = BigInt("74")
		const addressGQpPFIx = accounts[2]
		const addressrHRjy2n = accounts[2]
//		const boolpvUoZqf = await RexonamkJILNx.transfer.call(addressmozRFtn, uintwFS1XGw, {from: accounts[4]});
//		const boolYtghyks = await RexonamkJILNx.transferFrom.call(addresskFFt00C, addressDHN6Ri, uintZ8sPrco, {from: accounts[2]});
//		const booloQim2cE = await RexonamkJILNx.approveAndCall.call(addressGQpPFIx, uintEAO9v5, {from: accounts[3]});
//		const boolrk8IiUT = await RexonamkJILNx.transferownership.call(addressrHRjy2n, {from: accounts[4]});

		await expect(RexonamkJILNx.transfer.call(addressmozRFtn, uintwFS1XGw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringfX5qe4z = "qlmbiS4L6KGVgFThe6rbx9nuOm3Erp8z12fIc9N79ownPOJAMKL"
		const stringRKbZhF = "pTxd91DzClMbM2BBXG6I2Cgm2lxRN5HzIk"
		const uintcQsVSR4 = BigInt("1352")
		const RexonaoQHeUV1 = await Rexona.new(stringfX5qe4z, stringRKbZhF, uintcQsVSR4, {from: accounts[5]});
		const uintdEnbmyV = BigInt("326")
		const addressreV8OHw = accounts[0]
		const uintTu1oQm8 = BigInt("701")
		const addressGXpbZWI = accounts[0]
		const addressmidTtkD = accounts[1]
		const uintvcDbNNv = BigInt("1769")
		const addressWeOK8S6 = accounts[2]
		const boolDLTnCbn = await RexonaoQHeUV1.transfer.call(addressreV8OHw, uintdEnbmyV, {from: accounts[5]});
		const boolyttWxqR = await RexonaoQHeUV1.approve.call(addressGXpbZWI, uintTu1oQm8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHxxNgpB = await RexonaoQHeUV1.transferownership.call(addressmidTtkD, {from: accounts[1]});
//		const boolbYgm6F = await RexonaoQHeUV1.approveAndCall.call(addressWeOK8S6, uintvcDbNNv, {from: accounts[2]});

		assert.equal(boolDLTnCbn, true)
		assert.equal(boolyttWxqR, true)
		await expect(RexonaoQHeUV1.transferownership.call(addressmidTtkD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringwDOjQE = "wKhYc1tt79EwBC1La1w3SeDYi9XgVfR48E5P94OciMPaSP8mvpp8bsXwukeO7LULYXVT2G9nbIMT"
		const stringZ1v8BvA = "lDhsePxnMah7DdjNpkAAtcefp95BoXQfqOftrbV8L24Wv6RF4DH5hpX1WWp844SvWbAqGN5fdv7xymij1ppuqwkrUHTRjDfrtQ"
		const uintIQxtggb = BigInt("1166")
		const RexonarVXvRxc = await Rexona.new(stringwDOjQE, stringZ1v8BvA, uintIQxtggb, {from: accounts[1]});
		const uintda1bd5B = BigInt("219")
		const addresssEP2HJo = accounts[1]
		const uintK2bu5DQ = BigInt("0")
		const addresskmRHYk1 = "0x0000000000000000000000000000000000000001"
		const addresskBe4q8z = "0x0000000000000000000000000000000000000001"
		const boolDVFZ265 = await RexonarVXvRxc.transfer.call(addresssEP2HJo, uintda1bd5B, {from: accounts[1]});
		const boolS1Wnx0R = await RexonarVXvRxc.transferFrom.call(addresskBe4q8z, addresskmRHYk1, uintK2bu5DQ, {from: accounts[2]});

		assert.equal(boolDVFZ265, true)
		assert.equal(boolS1Wnx0R, true)
	});

	it('test for Rexona', async () => {
		const stringfX5qe4z = "qlmbiS4L6KGVgFThe6rbx9nuOm3Erp8z12fIc9N79ownPOJAMKL"
		const stringRKbZhF = "pTxd91DzClMbM2BBXG6I2Cgm2lxRN5HzIk"
		const uintTuBMqKS = BigInt("1352")
		const RexonaoQHeUV1 = await Rexona.new(stringfX5qe4z, stringRKbZhF, uintTuBMqKS, {from: accounts[5]});
		const uintxnHZWZb = BigInt("946")
		const address4g6OL5 = accounts[0]
		const uintwmKv12u = BigInt("0")
		const addressYOxLkTU = accounts[1]
		const uintmYrK5ok = BigInt("1069")
		const addressnE81wGu = accounts[1]
		const addressnK7JokC = accounts[2]
		const uintkz9OUPH = BigInt("1404")
		const addressTJ2PCaJ = accounts[4]
		const boolyXrutZB = await RexonaoQHeUV1.approve.call(address4g6OL5, uintxnHZWZb, {from: accounts[1]});
		const boolFSF12aF = await RexonaoQHeUV1.approveAndCall.call(addressYOxLkTU, uintwmKv12u, {from: accounts[5]});
//		const boolFURha2 = await RexonaoQHeUV1.transferFrom.call(addressnK7JokC, addressnE81wGu, uintmYrK5ok, {from: accounts[0]});
//		const boolPehx9W7 = await RexonaoQHeUV1.transfer.call(addressTJ2PCaJ, uintkz9OUPH, {from: accounts[4]});

		assert.equal(boolFSF12aF, true)
		assert.equal(boolyXrutZB, true)
		await expect(RexonaoQHeUV1.transferFrom.call(addressnK7JokC, addressnE81wGu, uintmYrK5ok, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})