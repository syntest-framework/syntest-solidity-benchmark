const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintlKRqrxq = BigInt("161")
		const stringnnqD60i = "kA3l8ZL26zirzpJvMLIvzLybRk9P6NACMc2aRlNseOFLHi7fzurispAqSMwcakBpRdXMgpwrLOeiH172Gs5uHxaXzV17"
		const stringRxTPmsS = "OkBB8fb3BSyKEz3c9JmRdW5KOWhe7JsaprmTFNAGUV8Q6WgiiVALnNjw"
		const INSgwbEsc0 = await INS.new(uintlKRqrxq, stringnnqD60i, stringRxTPmsS, {from: "0x0000000000000000000000000000000000000001"});
		const byteAUnwOCE = "0x151c071d0c12"
		const uintxPxXhca = BigInt("901")
		const addressZtQu1vJ = accounts[4]
		const uintz8HFSf = BigInt("1512")
		const addressB8P3ngK = accounts[0]
		const addressn42ebBy = "0x0000000000000000000000000000000000000001"
		const uintbP5SQSd = BigInt("1744")
		const addressKa9HBuT = "0x0000000000000000000000000000000000000001"
		const byteJf41GR3 = "0x0f01170613032013100d0e1b0002041a0f"
		const uintK8mnZmP = BigInt("768")
		const addressQzCMprW = "0x0000000000000000000000000000000000000001"
		const uintarDntr9 = BigInt("1828")
		const addressHp5TZhm = accounts[3]
		const booln1r2Oz = await INSgwbEsc0.approveAndCall.call(addressZtQu1vJ, uintxPxXhca, byteAUnwOCE, {from: accounts[3]});
		const boolEnql0lR = await INSgwbEsc0.transferFrom.call(addressn42ebBy, addressB8P3ngK, uintz8HFSf, {from: accounts[3]});
		const boolGmSnUsU = await INSgwbEsc0.approve.call(addressKa9HBuT, uintbP5SQSd, {from: accounts[1]});
		const boolBgGvhjl = await INSgwbEsc0.approveAndCall.call(addressQzCMprW, uintK8mnZmP, byteJf41GR3, {from: accounts[2]});
		const boolTVPdAqj = await INSgwbEsc0.burnFrom.call(addressHp5TZhm, uintarDntr9, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintqeNbsPh = BigInt("965")
		const stringA0HakDD = "GLjI9kdbLuA1bgZIqeDwss364jXyzczwQkRzCd1g9MhIoXxfQIiUER3Kj"
		const stringMsWmgY4 = "8musx1Cr12uwznCEaCQtJ2vncz5aTNszVvbtSH2XumqWGY9RghtBCau8X3SE3"
		const INScVrger8 = await INS.new(uintqeNbsPh, stringA0HakDD, stringMsWmgY4, {from: accounts[4]});
		const uintzXUEJ1s = BigInt("485")
		const addresswt6JGvX = accounts[1]
		const addressI4wI7cc = accounts[4]
		const uintHdaK0Di = BigInt("1256")
		const addressxhW7768 = accounts[0]
		const addresslhycK05 = "0x0000000000000000000000000000000000000001"
		const uintSoYxzl = BigInt("726")
		const addressz3fTGTD = accounts[3]
		const byteLR00w1V = "0x18170c060b191e03031e1001"
		const uintIgAIkrR = BigInt("573")
		const addressdRn01U = accounts[0]
//		const boolOQJ0Gp4 = await INScVrger8.transferFrom.call(addressI4wI7cc, addresswt6JGvX, uintzXUEJ1s, {from: accounts[5]});
//		const boolpFtoGyT = await INScVrger8.transferFrom.call(addresslhycK05, addressxhW7768, uintHdaK0Di, {from: accounts[4]});
//		const boolWdZTsKo = await INScVrger8.burnFrom.call(addressz3fTGTD, uintSoYxzl, {from: accounts[2]});
//		const boolw1HBhfn = await INScVrger8.approveAndCall.call(addressdRn01U, uintIgAIkrR, byteLR00w1V, {from: accounts[1]});

		await expect(INScVrger8.transferFrom.call(addressI4wI7cc, addresswt6JGvX, uintzXUEJ1s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintB6UjASi = BigInt("714")
		const stringisYaz5K = "riAjs48E4F8mWrmCTgD8zptoJ1niI7hVmjmzu7DOEQTKXeK5eNqJGETNM8sr5xeIbAnF66bnd6m6CgRIq9cw85wO"
		const stringecnI1Jc = "AxxGUfIsuOeQWEPIULzXNOUSaP6Inn1TfWBnXB4LCpwa0cWil15SD61XrXg4V"
		const INSKfliaAW = await INS.new(uintB6UjASi, stringisYaz5K, stringecnI1Jc, {from: accounts[5]});
		const uintVLKtjS = BigInt("1838")
		const addressbsqR4qv = accounts[1]
		const byteQDdpGG2 = "0x141b101303171c03140410110f051310001c071815120d1f1d1e"
		const uintv8oMzgu = BigInt("1158")
		const addressYhsaY5r = "0x0000000000000000000000000000000000000001"
		const uintqNDJA0 = BigInt("177")
		const uintioPJ9R = BigInt("1331")
		const addressWadPTma = "0x0000000000000000000000000000000000000001"
		const boolGEimdyC = await INSKfliaAW.approve.call(addressbsqR4qv, uintVLKtjS, {from: accounts[4]});
//		const boolLOKRtOI = await INSKfliaAW.approveAndCall.call(addressYhsaY5r, uintv8oMzgu, byteQDdpGG2, {from: accounts[2]});
//		const boolTBloSOo = await INSKfliaAW.burn.call(uintqNDJA0, {from: accounts[2]});
//		const boolyjxrTMP = await INSKfliaAW.approve.call(addressWadPTma, uintioPJ9R, {from: accounts[5]});

		assert.equal(boolGEimdyC, true)
		await expect(INSKfliaAW.approveAndCall.call(addressYhsaY5r, uintv8oMzgu, byteQDdpGG2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintIOE8T5o = BigInt("898")
		const stringlyHljGf = "Hk5Ke3aj6rnQWbU8n2UrfT5mRlcfKHm6hMQlX0y38B9fgo2a9nck2nkwT9CqzJLwfCVk6BcMtX4dWPwq5936uU"
		const stringtQTam37 = "EzieVwGCTSA4MGYkK2lxu1Ip397mKnnNIrcnlAojn1f1gK1pDek6dOuWmyR92Jyp9qmrG"
		const INSMIJr0p8 = await INS.new(uintIOE8T5o, stringlyHljGf, stringtQTam37, {from: accounts[5]});
		const uintCIPLCWP = BigInt("840")
		const uint45coww = BigInt("1190")
		const address3WH1TU = accounts[3]
		const uintHdY89Oo = BigInt("753")
		const uintz9SgzrD = BigInt("1377")
		const addressIKYQy3L = accounts[2]
//		const booljnmwXJd = await INSMIJr0p8.burn.call(uintCIPLCWP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDRAbRQL = await INSMIJr0p8.transfer.call(address3WH1TU, uint45coww, {from: accounts[3]});
//		const boolzaX9mUt = await INSMIJr0p8.burn.call(uintHdY89Oo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolz5vVq2 = await INSMIJr0p8.approve.call(addressIKYQy3L, uintz9SgzrD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSMIJr0p8.burn.call(uintCIPLCWP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintqq2I5on = BigInt("1940")
		const stringYwQPeqg = "as9ChSe12Uw5OLc6guH7QGbXsvOFD0rUPhdwRHfXYW6OgmlGKI6zcR9wySCkiiWhu2pTVS0h1soDrX"
		const stringg08oeGD = "pGUGdHyYjAxMBFCyhfIpew7Ea6TIXiopltvf7qoLsTIlhHL42qNEmLOtdHsaQPSJuXduIwozCm7"
		const INSOBIcEw = await INS.new(uintqq2I5on, stringYwQPeqg, stringg08oeGD, {from: accounts[1]});
		const uinti11vek5 = BigInt("955")
		const uintw22QiUt = BigInt("1445")
		const addressrHrWbNT = accounts[2]
		const byte7dNlcQ = "0x021b1f0a1d02101e0512001018041e05091a1b1d11"
		const uintLYNlC9O = BigInt("1095")
		const addressQ4RRit5 = accounts[5]
		const boolO4pUc3 = await INSOBIcEw.burn.call(uinti11vek5, {from: accounts[1]});
//		const boolfJkvb53 = await INSOBIcEw.transfer.call(addressrHrWbNT, uintw22QiUt, {from: accounts[0]});
//		const bool0NUqyd = await INSOBIcEw.approveAndCall.call(addressQ4RRit5, uintLYNlC9O, byte7dNlcQ, {from: accounts[2]});

		assert.equal(boolO4pUc3, true)
		await expect(INSOBIcEw.transfer.call(addressrHrWbNT, uintw22QiUt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintMT8uG2q = BigInt("965")
		const stringA0HakDD = "GLjI9kdbLuA1bgZIqeDwss364jXyzczwQkRzCd1g9MhIoXxfQIiUER3Kj"
		const stringMsWmgY4 = "8musx1Cr12uwznCEaCQtJ2vncz5aTNszVvbtSH2XumqWGY9RghtBCau8X3SE3"
		const INScVrger8 = await INS.new(uintMT8uG2q, stringA0HakDD, stringMsWmgY4, {from: accounts[4]});
		const uintnb1n5tW = BigInt("834")
		const addressOGMp38 = accounts[3]
		const uintFZtZt8I = BigInt("792")
		const addressifJjIOY = accounts[4]
		const addressBrPlenS = accounts[2]
		const uintwkyGJdJ = BigInt("485")
		const addressen19tJd = accounts[2]
		const addressGQbqnyF = accounts[4]
//		const boolTQrMXn = await INScVrger8.burnFrom.call(addressOGMp38, uintnb1n5tW, {from: accounts[5]});
//		const boolGJHUCxX = await INScVrger8.transferFrom.call(addressBrPlenS, addressifJjIOY, uintFZtZt8I, {from: accounts[2]});
//		const boolOQJ0Gp4 = await INScVrger8.transferFrom.call(addressGQbqnyF, addressen19tJd, uintwkyGJdJ, {from: accounts[5]});

		await expect(INScVrger8.burnFrom.call(addressOGMp38, uintnb1n5tW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintwVlRgm3 = BigInt("965")
		const stringA0HakDD = "GLjI9kdbLuA1bgZIqeDwss364jXyzczwQkRzCd1g9MhIoXxfQIiUER3Kj"
		const stringMsWmgY4 = "8musx1Cr12uwznCEaCQtJ2vncz5aTNszVvbtSH2XumqWGY9RghtBCau8X3SE3"
		const INScVrger8 = await INS.new(uintwVlRgm3, stringA0HakDD, stringMsWmgY4, {from: accounts[4]});
		const uintSVtzvCw = BigInt("834")
		const addressfADiyAg = accounts[4]
		const uintZUfQBzl = BigInt("1866")
		const uinthj61h57 = BigInt("792")
		const addressP3RjcX = accounts[4]
		const addressrzYapl = accounts[2]
		const uintod2RC3 = BigInt("200")
		const addressmhQRXdw = accounts[5]
//		const boolTQrMXn = await INScVrger8.burnFrom.call(addressfADiyAg, uintSVtzvCw, {from: accounts[5]});
//		const boolqbhFGCQ = await INScVrger8.burn.call(uintZUfQBzl, {from: accounts[4]});
//		const boolGJHUCxX = await INScVrger8.transferFrom.call(addressrzYapl, addressP3RjcX, uinthj61h57, {from: accounts[2]});
//		const boolf5ny5V = await INScVrger8.approve.call(addressmhQRXdw, uintod2RC3, {from: accounts[2]});

		await expect(INScVrger8.burnFrom.call(addressfADiyAg, uintSVtzvCw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintItLJ01u = BigInt("532")
		const stringm3RG6X = "j4d4xavmgnIPjME84"
		const stringvtOO0Rq = "b8EAghPbcy6GYTG6oq01OtrzOUSoLprr"
		const INSUR18DoI = await INS.new(uintItLJ01u, stringm3RG6X, stringvtOO0Rq, {from: accounts[0]});
		const uintSaXGWec = BigInt("1745")
		const addressWbghpu = accounts[2]
		const uintQR4QbT = BigInt("418")
		const addressi3iCeiU = accounts[2]
		const uintsBfzqO = BigInt("965")
		const uintlTLDtSr = BigInt("1399")
		const addresswvBlIBf = accounts[2]
		const addressq4eYVoo = accounts[2]
		const boolfYvjPu = await INSUR18DoI.transfer.call(addressWbghpu, uintSaXGWec, {from: accounts[0]});
		const boolQ2ypwo = await INSUR18DoI.approve.call(addressi3iCeiU, uintQR4QbT, {from: accounts[2]});
//		const boolbbPfUDk = await INSUR18DoI.burn.call(uintsBfzqO, {from: accounts[2]});
//		const boolkPI2rY = await INSUR18DoI.transferFrom.call(addressq4eYVoo, addresswvBlIBf, uintlTLDtSr, {from: accounts[2]});

		assert.equal(boolQ2ypwo, true)
		assert.equal(boolfYvjPu, true)
		await expect(INSUR18DoI.burn.call(uintsBfzqO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})