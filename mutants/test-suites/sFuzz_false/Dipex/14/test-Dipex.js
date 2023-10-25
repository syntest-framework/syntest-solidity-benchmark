const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringmbTaDs = "vfQP3ma5IvsHtudzfyWIVvmweu1TXXkm3w52kYJwwZ3tvA3qgz"
		const stringNOqDMRu = "n3DL2M9UDFycUhHbLqYmEuMxyN1WrjSXt"
		const uintzzOnFQ6 = BigInt("937")
		const DipexUfMDLvc = await Dipex.new(stringmbTaDs, stringNOqDMRu, uintzzOnFQ6, {from: accounts[4]});
		const uintiKfMYsU = BigInt("1703")
		const addressFEECZYH = accounts[4]
		const uintiJdyPTI = BigInt("301")
		const addressj6UgLB = accounts[5]
		const addressNa1cWPy = accounts[3]
		const uintxZJNUzi = BigInt("806")
		const addressTRJb4m1 = accounts[0]
		const uintuIfvkzf = BigInt("1341")
		const addressLfQ26MT = accounts[3]
//		const boolTahd2eA = await DipexUfMDLvc.approveAndCall.call(addressFEECZYH, uintiKfMYsU, {from: accounts[0]});
//		const boolhPBGYfH = await DipexUfMDLvc.transferFrom.call(addressNa1cWPy, addressj6UgLB, uintiJdyPTI, {from: accounts[3]});
//		const boolnzrLl2 = await DipexUfMDLvc.approve.call(addressTRJb4m1, uintxZJNUzi, {from: accounts[4]});
//		const boolIlzrKmk = await DipexUfMDLvc.approveAndCall.call(addressLfQ26MT, uintuIfvkzf, {from: accounts[3]});

		await expect(DipexUfMDLvc.approveAndCall.call(addressFEECZYH, uintiKfMYsU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringipcGNxV = "Mb2MlJQ"
		const stringRQCgR5X = "BMNeprlcjSy3KKkXacNPqV2tQIWswPBDXM3q6h4l7Rohh5Hm"
		const uintjnYTOC3 = BigInt("784")
		const DipexHpy8tb7 = await Dipex.new(stringipcGNxV, stringRQCgR5X, uintjnYTOC3, {from: accounts[3]});
		const uintoRaUo8 = BigInt("925")
		const addressQIs3Gx = accounts[3]
		const addresseT33KCX = accounts[4]
		const uintgVySNGl = BigInt("534")
		const addressiRN3t7Q = accounts[0]
		const addressNlNlDz1 = accounts[4]
		const uinthi4KQes = BigInt("178")
		const addressld0pFAB = accounts[2]
		const uintdVr1uKD = BigInt("1819")
		const addresse6S2xgn = accounts[2]
		const uinthVWXzZp = BigInt("1985")
		const addressOzbGcIZ = accounts[4]
//		const boolDuSH2X = await DipexHpy8tb7.transferFrom.call(addresseT33KCX, addressQIs3Gx, uintoRaUo8, {from: accounts[0]});
//		const boolIns4U0t = await DipexHpy8tb7.transferFrom.call(addressNlNlDz1, addressiRN3t7Q, uintgVySNGl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTXz0JPj = await DipexHpy8tb7.approve.call(addressld0pFAB, uinthi4KQes, {from: accounts[5]});
//		const bools8qba5f = await DipexHpy8tb7.approveAndCall.call(addresse6S2xgn, uintdVr1uKD, {from: accounts[4]});
//		const bool42Tku8 = await DipexHpy8tb7.approve.call(addressOzbGcIZ, uinthVWXzZp, {from: accounts[1]});

		await expect(DipexHpy8tb7.transferFrom.call(addresseT33KCX, addressQIs3Gx, uintoRaUo8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringhxjtDj = "f4xeiOOVfj5BL7ttJDii7F"
		const stringXka6xxN = "H7Ykcsp8yARAsf7RL1sZAzi69PYFScM4oPzwSQzEaANJHew3ldazjIMjZ0oaUAdUpozQyLMw4hhsZMhF51OI9T3NWX6g7MyW"
		const uintGAh1aXd = BigInt("180")
		const DipexDoc2r0t = await Dipex.new(stringhxjtDj, stringXka6xxN, uintGAh1aXd, {from: accounts[1]});
		const uintouR3EdM = BigInt("874")
		const addressTeeI7Tn = accounts[5]
		const uintF4lStML = BigInt("1522")
		const addressVjtYYX = accounts[4]
		const addressRrI27FG = accounts[3]
		const uintKouB40p = BigInt("1863")
		const address3BG7KG = accounts[1]
		const addressYE1FEfi = accounts[5]
		const boolLkeruUf = await DipexDoc2r0t.approve.call(addressTeeI7Tn, uintouR3EdM, {from: accounts[2]});
//		const boolbP9vnTb = await DipexDoc2r0t.transferFrom.call(addressRrI27FG, addressVjtYYX, uintF4lStML, {from: accounts[5]});
//		const boolyxiGaqg = await DipexDoc2r0t.approve.call(address3BG7KG, uintKouB40p, {from: accounts[3]});
//		const boolDKTFjL6 = await DipexDoc2r0t.transferownership.call(addressYE1FEfi, {from: accounts[2]});

		assert.equal(boolLkeruUf, true)
		await expect(DipexDoc2r0t.transferFrom.call(addressRrI27FG, addressVjtYYX, uintF4lStML, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringAjExeyO = "p5WNvKtrzX3bS3EU76"
		const stringDIDD0Cn = "mtl1bgFaqwm1MP4kdasF4vKqO86lnveBqbSGmz1FtTAHBJYufOCnRiwqXTCUrGPoGTQ88HijnUJV3hAn5vBV"
		const uintXPeZHSM = BigInt("1332")
		const Dipexiyqf2bu = await Dipex.new(stringAjExeyO, stringDIDD0Cn, uintXPeZHSM, {from: accounts[3]});
		const addressS2QWPjS = accounts[3]
		const uintuzOXPnn = BigInt("895")
		const addresscizuzRH = accounts[4]
		const addressYfakUJ5 = accounts[1]
		const uintWde3Ksv = BigInt("53")
		const addressjfFRZm7 = accounts[5]
		const uintlilC1Zy = BigInt("1553")
		const addressdqisow = accounts[3]
//		const boolq9PDY0T = await Dipexiyqf2bu.transferownership.call(addressS2QWPjS, {from: accounts[0]});
//		const boolFUIvwV = await Dipexiyqf2bu.transferFrom.call(addressYfakUJ5, addresscizuzRH, uintuzOXPnn, {from: accounts[4]});
//		const booldT6ONFk = await Dipexiyqf2bu.approveAndCall.call(addressjfFRZm7, uintWde3Ksv, {from: accounts[4]});
//		const booltmNAUaK = await Dipexiyqf2bu.approve.call(addressdqisow, uintlilC1Zy, {from: accounts[1]});

		await expect(Dipexiyqf2bu.transferownership.call(addressS2QWPjS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringyjTyXLm = "Ee64GrbAdtC9MOntsuqtaTL1LaihYXqUtM2OOssstPYvD89L2DB23N6PHqUKnNK5JBVah"
		const stringDRnVexu = "cnMgponDF6NUYB2zy0WUdkVbPyTPOtgGV8Mmeh5ywyAJpuzGfe2aBKabPffbp03h7"
		const uintiV2ZNtt = BigInt("1177")
		const Dipexm235Hfx = await Dipex.new(stringyjTyXLm, stringDRnVexu, uintiV2ZNtt, {from: accounts[1]});
		const uintV3F9bvW = BigInt("1744")
		const addressk7MuCqh = accounts[4]
		const uinta4wKxA8 = BigInt("1612")
		const addressTKlC7cI = accounts[3]
		const addressmjwfbQ6 = accounts[0]
		const uintzrx5RFE = BigInt("320")
		const addressRFMBZFq = accounts[5]
		const addressyBVLRLk = accounts[3]
//		const boolc0Wpdox = await Dipexm235Hfx.transfer.call(addressk7MuCqh, uintV3F9bvW, {from: accounts[3]});
//		const boolFpBLOd = await Dipexm235Hfx.transferFrom.call(addressmjwfbQ6, addressTKlC7cI, uinta4wKxA8, {from: accounts[3]});
//		const boolX5dsLgS = await Dipexm235Hfx.approve.call(addressRFMBZFq, uintzrx5RFE, {from: accounts[0]});
//		const boolVHzKQI = await Dipexm235Hfx.transferownership.call(addressyBVLRLk, {from: accounts[4]});

		await expect(Dipexm235Hfx.transfer.call(addressk7MuCqh, uintV3F9bvW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringyjTyXLm = "Ee64GrbAdtC9MOntsuqtaTL1LaihYXqUtM2OOssstPYvD89L2DB23N6PHqUKnNK5JBVah"
		const stringDRnVexu = "cnMgponDF6NUYB2zy0WUdkVbPyTPOtgGV8Mmeh5ywyAJpuzGfe2aBKabPffbp03h7"
		const uint6cssZ6 = BigInt("1177")
		const Dipexm235Hfx = await Dipex.new(stringyjTyXLm, stringDRnVexu, uint6cssZ6, {from: accounts[1]});
		const uinthpOojl4 = BigInt("791")
		const addressbOKyYi8 = accounts[3]
		const uintW8BjycP = BigInt("489")
		const addresslg5EDxy = accounts[1]
		const uintk1cp0KJ = BigInt("1612")
		const address5Re0gm = accounts[4]
		const addressRXsW7Kp = accounts[0]
		const uinteWqnbse = BigInt("320")
		const addressvJcZWqX = accounts[4]
		const boolvyOWKeC = await Dipexm235Hfx.transfer.call(addressbOKyYi8, uinthpOojl4, {from: accounts[1]});
//		const boolhS46FDi = await Dipexm235Hfx.approveAndCall.call(addresslg5EDxy, uintW8BjycP, {from: accounts[3]});
//		const boolFpBLOd = await Dipexm235Hfx.transferFrom.call(addressRXsW7Kp, address5Re0gm, uintk1cp0KJ, {from: accounts[3]});
//		const boolX5dsLgS = await Dipexm235Hfx.approve.call(addressvJcZWqX, uinteWqnbse, {from: accounts[0]});

		assert.equal(boolvyOWKeC, true)
		await expect(Dipexm235Hfx.approveAndCall.call(addresslg5EDxy, uintW8BjycP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringt0awNf = "uP24sUCTsG5ByLl2BWAmvjN21UqatbxTflIc6KTRl3sljK5eY7qKZk"
		const stringorOoCAd = "wV8N3go5lXVGEhIdoBC8F88bN732qLuBHktyCdX5E7zyThLqAWz"
		const uintNMUP2pE = BigInt("1419")
		const DipexnLaDyVn = await Dipex.new(stringt0awNf, stringorOoCAd, uintNMUP2pE, {from: "0x0000000000000000000000000000000000000001"});
		const uintkHovgYj = BigInt("1179")
		const addressUulv6ls = accounts[1]
		const uintuFO16vw = BigInt("212")
		const addressfOfy1y5 = accounts[1]
		const addresspg966nF = accounts[3]
		const uintQrBn6dS = BigInt("34")
		const addresscuh6itF = accounts[3]
		const uintvhOHrLk = BigInt("1482")
		const addressm5BM5OI = accounts[0]
		const uintaNe781o = BigInt("1174")
		const addressfB9UuOq = accounts[2]
		const boolAOej2BO = await DipexnLaDyVn.approveAndCall.call(addressUulv6ls, uintkHovgYj, {from: accounts[4]});
		const boolav1yV0L = await DipexnLaDyVn.transferFrom.call(addresspg966nF, addressfOfy1y5, uintuFO16vw, {from: accounts[2]});
		const boolnOoD6dw = await DipexnLaDyVn.approveAndCall.call(addresscuh6itF, uintQrBn6dS, {from: accounts[4]});
		const boolMzDl76k = await DipexnLaDyVn.approve.call(addressm5BM5OI, uintvhOHrLk, {from: accounts[0]});
		const boolJ31e2E9 = await DipexnLaDyVn.transfer.call(addressfB9UuOq, uintaNe781o, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringvRjpZER = "SLEmBJ2rgUEJBMJNfCpo3sEYNfHuXol"
		const stringOLxzxWD = "9OqmwX2lgM3nEpQ4dArTmRqWsLBS1L"
		const uintzmRHJzM = BigInt("216")
		const DipexTiCmVDe = await Dipex.new(stringvRjpZER, stringOLxzxWD, uintzmRHJzM, {from: accounts[1]});
		const uintEqMSVrQ = BigInt("1435")
		const addresspWrDMvt = accounts[1]
		const uintXjpCvq9 = BigInt("88")
		const addressXOZpqDY = accounts[2]
		const addresslLICZNk = accounts[6]
		const boolmvrOuZ = await DipexTiCmVDe.approveAndCall.call(addresspWrDMvt, uintEqMSVrQ, {from: accounts[1]});
//		const boolya0tSzU = await DipexTiCmVDe.transferFrom.call(addresslLICZNk, addressXOZpqDY, uintXjpCvq9, {from: accounts[4]});

		assert.equal(boolmvrOuZ, true)
		await expect(DipexTiCmVDe.transferFrom.call(addresslLICZNk, addressXOZpqDY, uintXjpCvq9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringyefbcW5 = "6EyXNdUs2pRtU6ajydvMfHUzB14OBDSBxN9SH"
		const stringFFk6j3F = "vJN8IuzYsznOpa9uQpf1xWYOPhKHWsQB7lHmxIDyibFloDnBMveHexZCo7xsUJMhk9sa1hmzPEAwvcubji6lacd3"
		const uintVuwDsqq = BigInt("588")
		const Dipexd4fAR72 = await Dipex.new(stringyefbcW5, stringFFk6j3F, uintVuwDsqq, {from: accounts[3]});
		const uintBh3CnGN = BigInt("0")
		const addressN9wAtXA = accounts[5]
		const uintGWQUGR = BigInt("344")
		const addressrESTLcE = "0x0000000000000000000000000000000000000001"
		const bool8tykrY = await Dipexd4fAR72.approveAndCall.call(addressN9wAtXA, uintBh3CnGN, {from: accounts[3]});
		const boolcKzT9TD = await Dipexd4fAR72.approve.call(addressrESTLcE, uintGWQUGR, {from: accounts[2]});

		assert.equal(bool8tykrY, true)
		assert.equal(boolcKzT9TD, true)
	});

	it('test for Dipex', async () => {
		const stringvRjpZER = "SLEmBJ2rgUEJBMJNfCpo3sEYNfHuXol"
		const stringOLxzxWD = "9OqmwX2lgM3nEpQ4dArTmRqWsLBS1L"
		const uintYPBvk6E = BigInt("216")
		const DipexTiCmVDe = await Dipex.new(stringvRjpZER, stringOLxzxWD, uintYPBvk6E, {from: accounts[1]});
		const uintuesFu8k = BigInt("0")
		const addressLDaNm22 = accounts[3]
		const addressFDQOcZK = accounts[7]
		const boolya0tSzU = await DipexTiCmVDe.transferFrom.call(addressFDQOcZK, addressLDaNm22, uintuesFu8k, {from: accounts[4]});

		assert.equal(boolya0tSzU, true)
	});
})