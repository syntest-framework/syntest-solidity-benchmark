const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintX5cero6 = BigInt("572")
		const stringPrBHwHc = "eY547hmhVR7ErIE4asyl1Pw1fCVB"
		const stringErYInAR = "v0ymze9n9WdExlmf1se9jFs7M7pCF6VmnIi5lU6HasRLReyFyjaRBicl79YPxVFimGC"
		const INSvL3Pl3 = await INS.new(uintX5cero6, stringPrBHwHc, stringErYInAR, {from: accounts[0]});
		const uintegBTFON = BigInt("62")
		const uintTKu8hVI = BigInt("1213")
		const addressq79ct5 = accounts[4]
		const addressMqpAmGa = accounts[4]
		const uintz4hQ3hJ = BigInt("264")
		const addressuq0tV5v = accounts[1]
		const uintihizAEL = BigInt("418")
		const bytem16JDUV = "0x1c081920031a11180503090d021d19061e0a1f031c0f0e0c0a060b0d131f"
		const uintVdvh0LN = BigInt("1693")
		const addresse5esrUA = accounts[4]
//		const boola38HfEH = await INSvL3Pl3.burn.call(uintegBTFON, {from: accounts[3]});
//		const boolReAvta = await INSvL3Pl3.transferFrom.call(addressMqpAmGa, addressq79ct5, uintTKu8hVI, {from: accounts[5]});
//		const boolADCP0cO = await INSvL3Pl3.burnFrom.call(addressuq0tV5v, uintz4hQ3hJ, {from: accounts[2]});
//		const booli4cBzOR = await INSvL3Pl3.burn.call(uintihizAEL, {from: accounts[1]});
//		const boolMq44Yi = await INSvL3Pl3.approveAndCall.call(addresse5esrUA, uintVdvh0LN, bytem16JDUV, {from: accounts[4]});

		await expect(INSvL3Pl3.burn.call(uintegBTFON, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintGREx2Wx = BigInt("1384")
		const stringVQh2w5 = "LuL6yNremjpNvGy4d1Co7DDhrIaZxQQpXJ7I8gMhdRIlR0"
		const stringzxmRChr = "MC9c6yJ"
		const INSuEfcIVK = await INS.new(uintGREx2Wx, stringVQh2w5, stringzxmRChr, {from: accounts[4]});
		const byteVZLFsv0 = "0x18000a1a11000813"
		const uintRJ6MCZ = BigInt("252")
		const addresspglkFaP = accounts[0]
		const uinthDAmuVF = BigInt("239")
		const addressc2HhWmb = "0x0000000000000000000000000000000000000001"
		const uintVyiUeHi = BigInt("1205")
		const addressRma6goP = accounts[0]
		const addresszG0WxPG = accounts[5]
		const uintlv0bvJy = BigInt("1340")
		const addressfanowY1 = accounts[0]
//		const booldxSSs1T = await INSuEfcIVK.approveAndCall.call(addresspglkFaP, uintRJ6MCZ, byteVZLFsv0, {from: accounts[1]});
//		const boolUXKrZgA = await INSuEfcIVK.burnFrom.call(addressc2HhWmb, uinthDAmuVF, {from: accounts[5]});
//		const boolAC8IAnz = await INSuEfcIVK.transferFrom.call(addresszG0WxPG, addressRma6goP, uintVyiUeHi, {from: accounts[4]});
//		const booljxbYH9G = await INSuEfcIVK.approve.call(addressfanowY1, uintlv0bvJy, {from: accounts[1]});

		await expect(INSuEfcIVK.approveAndCall.call(addresspglkFaP, uintRJ6MCZ, byteVZLFsv0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintQlu23G5 = BigInt("816")
		const stringZTtNeLu = "RCt2X6pwkUDHIEhmVu5o0DfsrO5sFbtoDC6LAjqNxRr8RghgRkUo9ZfAYA5XUjikUDHVqUSA1VIEEvac"
		const stringQ0JolmH = "7jrveQP2e7strrASzunGraa9HTD"
		const INSXJg5alE = await INS.new(uintQlu23G5, stringZTtNeLu, stringQ0JolmH, {from: "0x0000000000000000000000000000000000000001"});
		const uintEnDbGz = BigInt("731")
		const addressBz77U6g = accounts[5]
		const addressynkvneB = accounts[1]
		const uintubuJn7s = BigInt("1310")
		const addressgAOu9sD = accounts[1]
		const byteejW9B1 = "0x11160f0d061303080e15141f101f131e100c061b0d0a07051801"
		const uintmBuq6YD = BigInt("121")
		const addressgqvIhwv = accounts[4]
		const byteLFnDFsi = "0x0c1c1d0712090a19"
		const uintGtxKTI = BigInt("1269")
		const addressdrUAKTt = "0x0000000000000000000000000000000000000001"
		const uintPrkxz1z = BigInt("1505")
		const addressUzHcCpb = accounts[3]
		const boolQzQgW4u = await INSXJg5alE.transferFrom.call(addressynkvneB, addressBz77U6g, uintEnDbGz, {from: accounts[1]});
		const boolWFORzEk = await INSXJg5alE.approve.call(addressgAOu9sD, uintubuJn7s, {from: accounts[0]});
		const boolADZsuD5 = await INSXJg5alE.approveAndCall.call(addressgqvIhwv, uintmBuq6YD, byteejW9B1, {from: accounts[5]});
		const boolVsBcHDp = await INSXJg5alE.approveAndCall.call(addressdrUAKTt, uintGtxKTI, byteLFnDFsi, {from: accounts[0]});
		const boolPNovcXM = await INSXJg5alE.transfer.call(addressUzHcCpb, uintPrkxz1z, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintDtBgrNf = BigInt("1065")
		const stringH14Eshg = "KUB2ghGEh"
		const stringhPZFHHJ = "vr93Iftgu96JWiBS9nuv1P461GDgdtb19cgBSrTrtkoAEYmnWKqBkHa5JpXjlM6q5H0OXMlP9Xp"
		const INSgaQ7tL4 = await INS.new(uintDtBgrNf, stringH14Eshg, stringhPZFHHJ, {from: accounts[5]});
		const uintFTPNDgN = BigInt("1737")
		const addressLdLJO4 = accounts[1]
		const uintZAnirvF = BigInt("2006")
		const addressxzOvqQP = accounts[1]
		const uintsyP0lmF = BigInt("1493")
		const addresswlq6IUr = accounts[3]
		const addressWVSNbTx = accounts[1]
		const uintixDofGM = BigInt("108")
		const addressPwisI69 = accounts[0]
		const uinttK44sv = BigInt("898")
		const addressSFoG6g = accounts[2]
		const uintGNoI8y = BigInt("1323")
		const addressH1cASf1 = accounts[2]
		const boolm8QbNS5 = await INSgaQ7tL4.approve.call(addressLdLJO4, uintFTPNDgN, {from: accounts[1]});
//		const boolp5xQoIC = await INSgaQ7tL4.transfer.call(addressxzOvqQP, uintZAnirvF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUl0IXis = await INSgaQ7tL4.transferFrom.call(addressWVSNbTx, addresswlq6IUr, uintsyP0lmF, {from: accounts[0]});
//		const boolusjdys7 = await INSgaQ7tL4.approve.call(addressPwisI69, uintixDofGM, {from: accounts[2]});
//		const boolExwLYIB = await INSgaQ7tL4.approve.call(addressSFoG6g, uinttK44sv, {from: accounts[3]});
//		const boolmfq2GAQ = await INSgaQ7tL4.transfer.call(addressH1cASf1, uintGNoI8y, {from: accounts[1]});

		assert.equal(boolm8QbNS5, true)
		await expect(INSgaQ7tL4.transfer.call(addressxzOvqQP, uintZAnirvF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintynBOuvz = BigInt("259")
		const stringPkvVIQ8 = "2UlBhRYtrAk6yspXr9pPaCJulBj1zKx28NcNlhJQmbvlwlYWMDDV18lAwiQv44ZpuA1EdFYUgN2rYDSE3utj2kOeQ8QRg0mm"
		const stringdCv5ZEh = "RYaKKiX3toFUb6mTYydSHssWKPCKRS53ogGPXH"
		const INSzqfjgWA = await INS.new(uintynBOuvz, stringPkvVIQ8, stringdCv5ZEh, {from: accounts[1]});
		const uintnI6IqG8 = BigInt("265")
		const addresskDvVyGn = accounts[4]
		const addressPopXQq = "0x0000000000000000000000000000000000000001"
		const uintKDOZPRW = BigInt("1796")
		const addressZgDDlWv = accounts[4]
		const uintLae44sW = BigInt("438")
		const addressMVTJQ3i = accounts[0]
		const addresseGGpNTW = accounts[1]
		const uintidp9kO1 = BigInt("150")
		const addresseQ4pRgU = accounts[4]
//		const boolActbKbw = await INSzqfjgWA.transferFrom.call(addressPopXQq, addresskDvVyGn, uintnI6IqG8, {from: accounts[1]});
//		const boolZfGSqJy = await INSzqfjgWA.approve.call(addressZgDDlWv, uintKDOZPRW, {from: accounts[3]});
//		const boolIttvrbZ = await INSzqfjgWA.transferFrom.call(addresseGGpNTW, addressMVTJQ3i, uintLae44sW, {from: accounts[3]});
//		const boolKrEhCfO = await INSzqfjgWA.burnFrom.call(addresseQ4pRgU, uintidp9kO1, {from: accounts[5]});

		await expect(INSzqfjgWA.transferFrom.call(addressPopXQq, addresskDvVyGn, uintnI6IqG8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintVekB2i = BigInt("39")
		const stringE16KweL = "YkISAxfHRs"
		const stringTYw3s89 = "rNRT5rqVWjAxLo91QnpmKurO14zXL4F"
		const INSG6mte07 = await INS.new(uintVekB2i, stringE16KweL, stringTYw3s89, {from: accounts[3]});
		const uintdUOBU4x = BigInt("159")
		const addresszv5oZbX = accounts[5]
		const uintbHQuaQp = BigInt("974")
		const addressiUVu4W1 = accounts[4]
		const uintjTS4vb = BigInt("1127")
		const addressVeLBmc = accounts[3]
		const uintLFuzSMI = BigInt("533")
		const addressQOWZWxG = accounts[3]
		const uintwGdhWLy = BigInt("133")
		const uintus7CWaj = BigInt("31")
		const boolt1NU6ip = await INSG6mte07.approve.call(addresszv5oZbX, uintdUOBU4x, {from: accounts[1]});
//		const boolog10Qrx = await INSG6mte07.burnFrom.call(addressiUVu4W1, uintbHQuaQp, {from: accounts[4]});
//		const boolc1XPWxV = await INSG6mte07.transfer.call(addressVeLBmc, uintjTS4vb, {from: accounts[2]});
//		const boolUnTUsrs = await INSG6mte07.approve.call(addressQOWZWxG, uintLFuzSMI, {from: accounts[1]});
//		const boolNNbUKZC = await INSG6mte07.burn.call(uintwGdhWLy, {from: "0x0000000000000000000000000000000000000001"});
//		const boollh2OW66 = await INSG6mte07.burn.call(uintus7CWaj, {from: accounts[0]});

		assert.equal(boolt1NU6ip, true)
		await expect(INSG6mte07.burnFrom.call(addressiUVu4W1, uintbHQuaQp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintA6yRRVZ = BigInt("1867")
		const stringBPOCIsc = "qg0mdNqiC3y16CcWVcVEtxlexqzaXbMtmngiGFCABTqKXzhqI8l4PzwJ8ckGqMC4jB9AXCd"
		const stringOOpCMXx = "BCImqxTokOrmgOKeFcrYCyJglVoy2kzzV3OrpzfAexQXvVEIw7G8FnnOtrYPhoyg"
		const INSe1bwMrv = await INS.new(uintA6yRRVZ, stringBPOCIsc, stringOOpCMXx, {from: accounts[3]});
		const uint1GdyLA = BigInt("784")
		const addressq8qtaUL = accounts[1]
		const uintAFM3ofz = BigInt("1670")
		const boolnHJ2oQV = await INSe1bwMrv.transfer.call(addressq8qtaUL, uint1GdyLA, {from: accounts[3]});
//		const boolasjAbZx = await INSe1bwMrv.burn.call(uintAFM3ofz, {from: accounts[1]});

		assert.equal(boolnHJ2oQV, true)
		await expect(INSe1bwMrv.burn.call(uintAFM3ofz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinti0HmZTW = BigInt("1352")
		const stringUMe75ls = "c48SNMy5Ok86AbreAbNjwqN9dyA9KHBWg4WQnNLilPByrRH97X1VOcIWfuU0vAFRrh4QRbz2cgX9HMOwF"
		const string0gIxBa = "Hhf9CVXoK1Hb31C807R2LkHRiLatR9J2yk4XxV1hmD8tJ5ECxQ6DncaV2kR0VHAXBzMHgzdRZQGB"
		const INStsCK713 = await INS.new(uinti0HmZTW, stringUMe75ls, string0gIxBa, {from: accounts[0]});
		const uintu26asMd = BigInt("1089")
		const bytei0AphGN = "0x15201c121a0809150808151d18"
		const uintNPzS92 = BigInt("703")
		const addressSGMgJW = accounts[1]
		const uintZvMZPJg = BigInt("1032")
		const addressycEolMT = accounts[0]
		const addressIYjxQAo = accounts[1]
		const boolJduZSep = await INStsCK713.burn.call(uintu26asMd, {from: accounts[0]});
//		const boolEMoQCaz = await INStsCK713.approveAndCall.call(addressSGMgJW, uintNPzS92, bytei0AphGN, {from: accounts[4]});
//		const boolJvlVYoW = await INStsCK713.transferFrom.call(addressIYjxQAo, addressycEolMT, uintZvMZPJg, {from: accounts[0]});

		assert.equal(boolJduZSep, true)
		await expect(INStsCK713.approveAndCall.call(addressSGMgJW, uintNPzS92, bytei0AphGN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintjrgVE6r = BigInt("3")
		const stringQynMZuT = "U7MTo57sdvgNLY5sdZ0pBbvYdM50qzemr6D9xPTo0LGTlGn4dDxqDoV8lhLuzU79mihr6uv"
		const stringfrbE79o = "bmefhfnxAXjm6jgeanhqVZTk6bOkB2MEu7K"
		const INShnip70 = await INS.new(uintjrgVE6r, stringQynMZuT, stringfrbE79o, {from: accounts[3]});
		const uintzq4j8NC = BigInt("1061")
		const addresst1hYF1l = accounts[2]
		const uintVQgfu4o = BigInt("1191")
		const addresswZs6K1e = accounts[3]
		const uint3HoGEV = BigInt("1041")
		const boolLlqmea8 = await INShnip70.approve.call(addresst1hYF1l, uintzq4j8NC, {from: accounts[1]});
//		const boolfgRyG8q = await INShnip70.burnFrom.call(addresswZs6K1e, uintVQgfu4o, {from: accounts[3]});
//		const boolRnAzakA = await INShnip70.burn.call(uint3HoGEV, {from: accounts[1]});

		assert.equal(boolLlqmea8, true)
		await expect(INShnip70.burnFrom.call(addresswZs6K1e, uintVQgfu4o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintigu3Cip = BigInt("3")
		const stringQynMZuT = "U7MTo57sdvgNLY5sdZ0pBbvYdM50qzemr6D9xPTo0LGTlGn4dDxqDoV8lhLuzU79mihr6uv"
		const stringfrbE79o = "bmefhfnxAXjm6jgeanhqVZTk6bOkB2MEu7K"
		const INShnip70 = await INS.new(uintigu3Cip, stringQynMZuT, stringfrbE79o, {from: accounts[3]});
		const uintvPEkLqU = BigInt("0")
		const addressTFtYiX2 = accounts[0]
		const addresspg8CGwp = accounts[1]
		const uintznpAw0 = BigInt("268")
		const address5rCYMx = accounts[4]
		const addressYZhf6lA = accounts[4]
		const uintNGQdjcW = BigInt("1061")
		const addressRLuI8R = accounts[1]
		const boolel6uFkn = await INShnip70.transferFrom.call(addresspg8CGwp, addressTFtYiX2, uintvPEkLqU, {from: accounts[0]});
//		const boolglqOmEH = await INShnip70.transferFrom.call(addressYZhf6lA, address5rCYMx, uintznpAw0, {from: accounts[4]});
//		const boolLlqmea8 = await INShnip70.approve.call(addressRLuI8R, uintNGQdjcW, {from: accounts[1]});

		assert.equal(boolel6uFkn, true)
		await expect(INShnip70.transferFrom.call(addressYZhf6lA, address5rCYMx, uintznpAw0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})