const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintJZTLlaR = BigInt("1055")
		const stringPaCYjDu = "MNdJNenOAk4k8QJmxnFM"
		const stringtXr7usp = "Tl"
		const INSn73YEOU = await INS.new(uintJZTLlaR, stringPaCYjDu, stringtXr7usp, {from: "0x0000000000000000000000000000000000000001"});
		const uintlNdrT9o = BigInt("880")
		const addressFt8wBK8 = accounts[3]
		const uinta3rd9wa = BigInt("862")
		const addressHD9311Q = accounts[4]
		const uintcYUp0R5 = BigInt("355")
		const addressUYL0mUO = accounts[0]
		const uintomLb6AC = BigInt("25")
		const addresswU4AlZP = "0x0000000000000000000000000000000000000001"
		const uintj7bOlWK = BigInt("1642")
		const addressSIlAI3q = accounts[3]
		const byteDgrqT2c = "0x0a1d160a11"
		const uintgWaZ9G1 = BigInt("1196")
		const addressQB9QqkZ = accounts[0]
		const boolXO0RfS0 = await INSn73YEOU.burnFrom.call(addressFt8wBK8, uintlNdrT9o, {from: accounts[2]});
		const boolweVcNaN = await INSn73YEOU.approve.call(addressHD9311Q, uinta3rd9wa, {from: accounts[3]});
		const boolY97KtVx = await INSn73YEOU.approve.call(addressUYL0mUO, uintcYUp0R5, {from: accounts[0]});
		const boolp4G7RC = await INSn73YEOU.approve.call(addresswU4AlZP, uintomLb6AC, {from: accounts[4]});
		const boolNJoNCgh = await INSn73YEOU.approve.call(addressSIlAI3q, uintj7bOlWK, {from: accounts[0]});
		const boolHatSi06 = await INSn73YEOU.approveAndCall.call(addressQB9QqkZ, uintgWaZ9G1, byteDgrqT2c, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for INS', async () => {
		const uintvGOWStT = BigInt("1524")
		const stringebRMhN7 = "lVPlUHt0agQ3kwQDcOomMtvyWlsYNlAK8RRYNKPoHpRuRxHWnaHX"
		const stringSMZeIs1 = "j26XdBcSzU9JR6tOP7uOHMYy"
		const INSVDmw8bA = await INS.new(uintvGOWStT, stringebRMhN7, stringSMZeIs1, {from: accounts[4]});
		const uintfLHb07m = BigInt("432")
		const addressljf6MTf = accounts[3]
		const address1mWj1B = accounts[4]
		const uintGMMLTSc = BigInt("1549")
		const addressoW71TbP = "0x0000000000000000000000000000000000000001"
		const uintVIcGKp3 = BigInt("2005")
		const addressZLel6TB = accounts[0]
		const bytegBRmkhq = "0x1208171c0b150115130c18151f130a120f13051e0005071c1f"
		const uintUEUPDkC = BigInt("1214")
		const addressdZ1Nyov = accounts[5]
		const boolEXkTz3 = await INSVDmw8bA.transferFrom.call(address1mWj1B, addressljf6MTf, uintfLHb07m, {from: accounts[0]});
		const boolSD9iBIK = await INSVDmw8bA.approve.call(addressoW71TbP, uintGMMLTSc, {from: accounts[0]});
		const booldjGrLDY = await INSVDmw8bA.approve.call(addressZLel6TB, uintVIcGKp3, {from: accounts[2]});
		const boolJGDLGzj = await INSVDmw8bA.approveAndCall.call(addressdZ1Nyov, uintUEUPDkC, bytegBRmkhq, {from: accounts[4]});

		await expect(INSVDmw8bA.transferFrom.call(address1mWj1B, addressljf6MTf, uintfLHb07m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintVuwi3Ve = BigInt("1272")
		const stringfuwglXy = "MgaRlc1SPKJG5PFa3"
		const stringAz40ow5 = "natFv5t6sfrwh5GqqoHgbBFVfQ45EpyuCBNuO4niFqAVbJ4ual2LBEPa2YY"
		const INSxGoCOb2 = await INS.new(uintVuwi3Ve, stringfuwglXy, stringAz40ow5, {from: accounts[5]});
		const bytenrzNxw9 = "0x09021811062011050f1010081d140f0e0e1f1b"
		const uintYwdQlRG = BigInt("1083")
		const addressiWQYKb8 = accounts[4]
		const uintRu4i4su = BigInt("801")
		const addressesvwGtO = accounts[4]
		const uintO1n0vwo = BigInt("1814")
		const boolkK0msz = await INSxGoCOb2.approveAndCall.call(addressiWQYKb8, uintYwdQlRG, bytenrzNxw9, {from: accounts[0]});
		const boolZfQQtg = await INSxGoCOb2.approve.call(addressesvwGtO, uintRu4i4su, {from: accounts[0]});
		const boolZgDddwu = await INSxGoCOb2.burn.call(uintO1n0vwo, {from: accounts[4]});

		await expect(INSxGoCOb2.approveAndCall.call(addressiWQYKb8, uintYwdQlRG, bytenrzNxw9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintpIrN4Yl = BigInt("1543")
		const stringrorgE5U = "69wQzh41nLhmoSgrsdfLpCYitTc0Fo2G6dKPZUVREHGoXN76IosbqCKU3myldjYkqOHsJLZaLz"
		const stringjXqBzJT = "Ac6yVk9bdH85vVTjTG8LYWOjqbt7zQTI0oXk7jneoCJbsuEciDXh3"
		const INSyrRNuM = await INS.new(uintpIrN4Yl, stringrorgE5U, stringjXqBzJT, {from: accounts[5]});
		const uintY3prluL = BigInt("1149")
		const uintCANdtAj = BigInt("652")
		const addressblgNqZX = accounts[3]
		const uintKrbq2cb = BigInt("1009")
		const addressHdnX2n3 = accounts[3]
		const addresssWXkXuz = accounts[1]
		const uintObuXgON = BigInt("1511")
		const addressSxcMBhH = accounts[0]
		const uintmNMLItT = BigInt("1434")
		const addressaXxD17 = accounts[1]
		const boolLQ93fHf = await INSyrRNuM.burn.call(uintY3prluL, {from: accounts[0]});
		const boolTPrQObN = await INSyrRNuM.approve.call(addressblgNqZX, uintCANdtAj, {from: accounts[0]});
		const boolPllGXPn = await INSyrRNuM.transferFrom.call(addresssWXkXuz, addressHdnX2n3, uintKrbq2cb, {from: accounts[1]});
		const boolyDDNNNP = await INSyrRNuM.approve.call(addressSxcMBhH, uintObuXgON, {from: accounts[0]});
		const boolLaiw8G = await INSyrRNuM.approve.call(addressaXxD17, uintmNMLItT, {from: accounts[3]});

		await expect(INSyrRNuM.burn.call(uintY3prluL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintAByiSsp = BigInt("1724")
		const stringJEOlec = "BCh"
		const stringSBoO0YH = "6bRdtDQdKSUy2Ix1IVixrKgouX7gPJlPtuB2GKa"
		const INSYPrdwRZ = await INS.new(uintAByiSsp, stringJEOlec, stringSBoO0YH, {from: accounts[0]});
		const uintCBSYF40 = BigInt("1975")
		const addressJHdEP0G = accounts[4]
		const boolYWeBUPp = await INSYPrdwRZ.transfer.call(addressJHdEP0G, uintCBSYF40, {from: accounts[2]});

		await expect(INSYPrdwRZ.transfer.call(addressJHdEP0G, uintCBSYF40, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintzl6bo2K = BigInt("1724")
		const stringJEOlec = "BCh"
		const stringSBoO0YH = "6bRdtDQdKSUy2Ix1IVixrKgouX7gPJlPtuB2GKa"
		const INSYPrdwRZ = await INS.new(uintzl6bo2K, stringJEOlec, stringSBoO0YH, {from: accounts[0]});
		const uintDjqD8vQ = BigInt("237")
		const addressqHRsnzb = accounts[2]
		const uintIvJGivi = BigInt("1535")
		const addressnnWf8l = accounts[3]
		const uintquJA9mv = BigInt("1975")
		const addressHciYCpg = accounts[4]
		const boolDTmac7Z = await INSYPrdwRZ.approve.call(addressqHRsnzb, uintDjqD8vQ, {from: accounts[3]});
		const boolKnYeUcb = await INSYPrdwRZ.burnFrom.call(addressnnWf8l, uintIvJGivi, {from: accounts[3]});
		const boolYWeBUPp = await INSYPrdwRZ.transfer.call(addressHciYCpg, uintquJA9mv, {from: accounts[2]});

		assert.equal(boolDTmac7Z, true)
		await expect(INSYPrdwRZ.burnFrom.call(addressnnWf8l, uintIvJGivi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})