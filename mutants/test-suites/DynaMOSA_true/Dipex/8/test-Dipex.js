const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringgUGj13y = "z6wGm0blueHYI1aHgQr64uoMfSf45taYtWPgk2WlY0d1H4iWwIVxBa9dTpzDBvtVM0fEsgrdX6g54gDW5fvcNx6Zq4omE8X"
		const stringwQvOU0m = "UTKpeuuATLficW31oV2VAG9iDcul9q5TCAxB6ARVzbdS1BAmhXEqpkm47jeXUvuy1GwrEkwcD06Aax7"
		const uintbeQLwSl = BigInt("1999")
		const Dipex0zGmMN = await Dipex.new(stringgUGj13y, stringwQvOU0m, uintbeQLwSl, {from: accounts[2]});
		const uintV8RW1C1 = BigInt("1295")
		const addressi4L2wLC = accounts[0]
		const addressmlzXqSk = accounts[3]
		const uintp68qUlc = BigInt("1296")
		const addressSvUky3O = accounts[2]
		const addressjgNBgNR = accounts[0]
//		const boolrnOquvJ = await Dipex0zGmMN.approveAndCall.call(addressi4L2wLC, uintV8RW1C1, {from: accounts[5]});
//		const boolDi1bRrK = await Dipex0zGmMN.transferownership.call(addressmlzXqSk, {from: accounts[0]});
//		const boolqqlkaNR = await Dipex0zGmMN.transferFrom.call(addressjgNBgNR, addressSvUky3O, uintp68qUlc, {from: accounts[1]});

		await expect(Dipex0zGmMN.approveAndCall.call(addressi4L2wLC, uintV8RW1C1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringRcHA4T = "rDzjGMtFEBUaEokjcgph4JlKBuFBAbbTZBnFgHYioJUkgctCErUNvnpBtntumh95mGf"
		const stringPzIkfv = "Xj4skgoWqbFgL0Zfk1l2mATVvhTSqaa0SIVDNRUgnKlcrjr7hISBcR5HTb56xni4raK3vVDMsyWUoLAj"
		const uintcPDxDwo = BigInt("1941")
		const DipexGJEWbVk = await Dipex.new(stringRcHA4T, stringPzIkfv, uintcPDxDwo, {from: accounts[2]});
		const uintwRgZZgV = BigInt("1284")
		const addressjqZptxJ = accounts[3]
		const addressJQztjui = accounts[1]
		const uintokRQbyq = BigInt("1717")
		const addressm3HT2YJ = accounts[1]
//		const boolQ5Xpvpm = await DipexGJEWbVk.transferFrom.call(addressJQztjui, addressjqZptxJ, uintwRgZZgV, {from: accounts[2]});
//		const boolHNMorXd = await DipexGJEWbVk.approve.call(addressm3HT2YJ, uintokRQbyq, {from: accounts[5]});

		await expect(DipexGJEWbVk.transferFrom.call(addressJQztjui, addressjqZptxJ, uintwRgZZgV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringez8gbTQ = "OtDHf8ufG3VszDp6xfSgEiz5f1sQsUvJXt6p6n1mfAL2rJySmELwyTTuk"
		const stringJKPpPih = "19O0NbwVYhiM"
		const uinttdNIEDQ = BigInt("1600")
		const DipexIpTEBuk = await Dipex.new(stringez8gbTQ, stringJKPpPih, uinttdNIEDQ, {from: accounts[2]});
		const uintj4pxY53 = BigInt("1351")
		const addressKKwZw1A = accounts[0]
		const uintdEtTgst = BigInt("48")
		const addressriQ9pUe = "0x0000000000000000000000000000000000000001"
		const uinte0wJuO = BigInt("568")
		const addressodrSJW0 = accounts[0]
		const addressYbCTMu1 = accounts[1]
//		const boolSkv0GeS = await DipexIpTEBuk.transfer.call(addressKKwZw1A, uintj4pxY53, {from: accounts[0]});
//		const boolTeXXamC = await DipexIpTEBuk.approve.call(addressriQ9pUe, uintdEtTgst, {from: accounts[5]});
//		const boolTddsnes = await DipexIpTEBuk.transferFrom.call(addressYbCTMu1, addressodrSJW0, uinte0wJuO, {from: accounts[1]});

		await expect(DipexIpTEBuk.transfer.call(addressKKwZw1A, uintj4pxY53, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringGycbEHl = "k77h7F4fq9B"
		const stringMUZfNn = "YP0V6vM30PR7zy5HhsbkoXlfVdCWg3ocxWMFBr7H"
		const uintSxlk1ek = BigInt("851")
		const DipexfGA4Ndy = await Dipex.new(stringGycbEHl, stringMUZfNn, uintSxlk1ek, {from: accounts[2]});
		const uintpejE2Ao = BigInt("555")
		const addressNNPYQ77 = accounts[4]
		const uintB2QIJGF = BigInt("1900")
		const addressBOJKduz = accounts[1]
		const uintour1opG = BigInt("1417")
		const addressJhSsftn = accounts[4]
		const addressTnyPndZ = accounts[1]
		const boolrQsITsJ = await DipexfGA4Ndy.approveAndCall.call(addressNNPYQ77, uintpejE2Ao, {from: accounts[2]});
//		const boolCWZpRXX = await DipexfGA4Ndy.approveAndCall.call(addressBOJKduz, uintB2QIJGF, {from: accounts[0]});
//		const boolKg0hrUf = await DipexfGA4Ndy.transferFrom.call(addressTnyPndZ, addressJhSsftn, uintour1opG, {from: accounts[1]});

		assert.equal(boolrQsITsJ, true)
		await expect(DipexfGA4Ndy.approveAndCall.call(addressBOJKduz, uintB2QIJGF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringRrusdJ = "abD1yJJEjHKtibyYjv6GzpOv2IXlqmbF0GqfGLWoEC8QtjuE03wMXhL6L57t"
		const stringSVQZmW3 = "ZqHf4omlJofv7WYJ3Qa78wewEhKyAiHIiVQynyIh2n69A3G1jeNgIkd4JiyHM6w25KoRl2I7sUvmez7KIljBEfFLlhvmh1P"
		const uintOnozyGt = BigInt("1432")
		const DipexatZhFGd = await Dipex.new(stringRrusdJ, stringSVQZmW3, uintOnozyGt, {from: accounts[4]});
		const uintIR1M6JY = BigInt("1760")
		const addresswKLioW2 = accounts[4]
		const uintZzD5hL = BigInt("303")
		const addressyI4ef3Q = accounts[3]
		const addresshShLaDZ = accounts[2]
		const uintvhMrUdW = BigInt("554")
		const addressXMMvc3G = accounts[0]
		const uintkRN7gms = BigInt("1525")
		const addressSgR2iPt = accounts[0]
		const uinteyXkFE2 = BigInt("39")
		const addressdoC0ogI = "0x0000000000000000000000000000000000000001"
		const uintDxMrRhG = BigInt("931")
		const addresszBTsS1a = accounts[4]
		const boolnSM3zWB = await DipexatZhFGd.approve.call(addresswKLioW2, uintIR1M6JY, {from: accounts[3]});
//		const boolJtA1NS5 = await DipexatZhFGd.transferFrom.call(addresshShLaDZ, addressyI4ef3Q, uintZzD5hL, {from: accounts[0]});
//		const bool3SRaoV = await DipexatZhFGd.approveAndCall.call(addressXMMvc3G, uintvhMrUdW, {from: accounts[4]});
//		const booliA6T7y = await DipexatZhFGd.approveAndCall.call(addressSgR2iPt, uintkRN7gms, {from: accounts[2]});
//		const boolrRU4Zu0 = await DipexatZhFGd.transfer.call(addressdoC0ogI, uinteyXkFE2, {from: accounts[2]});
//		const boolFkNo3PH = await DipexatZhFGd.transfer.call(addresszBTsS1a, uintDxMrRhG, {from: accounts[1]});

		assert.equal(boolnSM3zWB, true)
		await expect(DipexatZhFGd.transferFrom.call(addresshShLaDZ, addressyI4ef3Q, uintZzD5hL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJYhqVlw = "HPOVtSo"
		const stringiXlnG5Q = "rfU"
		const uintsbnKGdn = BigInt("641")
		const DipexjPAwwNU = await Dipex.new(stringJYhqVlw, stringiXlnG5Q, uintsbnKGdn, {from: accounts[0]});
		const uintUvxPZSc = BigInt("67")
		const addressYk0mL3C = accounts[1]
		const uintzh5H0Ov = BigInt("1832")
		const addressvgocNh1 = accounts[0]
		const addressR0yBgOU = accounts[4]
		const boollEG4VAV = await DipexjPAwwNU.transfer.call(addressYk0mL3C, uintUvxPZSc, {from: accounts[0]});
		const boolo4yGKLm = await DipexjPAwwNU.approve.call(addressvgocNh1, uintzh5H0Ov, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCAFuYld = await DipexjPAwwNU.transferownership.call(addressR0yBgOU, {from: accounts[3]});

		assert.equal(boollEG4VAV, true)
		assert.equal(boolo4yGKLm, true)
		await expect(DipexjPAwwNU.transferownership.call(addressR0yBgOU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringHYp2JtA = "p5JSFG2MR52CBJcFmIQlkU1Lz"
		const stringVQDxw8g = "pa7QYwiMGnOX1rycQaUTVNCo"
		const uintBpaJHJn = BigInt("424")
		const Dipexk54Q1LY = await Dipex.new(stringHYp2JtA, stringVQDxw8g, uintBpaJHJn, {from: "0x0000000000000000000000000000000000000001"});
		const uintxwW0Zvy = BigInt("849")
		const addressp8Ab0GY = accounts[0]
		const uintz7CTsa = BigInt("1814")
		const addressedmTVv9 = accounts[3]
		const addressmZYdp0d = accounts[2]
		const uintxmh37XU = BigInt("1742")
		const addresswJkwvjG = accounts[2]
		const uintFARERz5 = BigInt("1669")
		const addressR1tVrtu = accounts[3]
		const addressD8HPJ5z = accounts[3]
		const boolxHdQzIL = await Dipexk54Q1LY.approveAndCall.call(addressp8Ab0GY, uintxwW0Zvy, {from: accounts[1]});
		const booln3ZE7V7 = await Dipexk54Q1LY.transferFrom.call(addressmZYdp0d, addressedmTVv9, uintz7CTsa, {from: accounts[4]});
		const boolU84v90G = await Dipexk54Q1LY.approveAndCall.call(addresswJkwvjG, uintxmh37XU, {from: accounts[1]});
		const boolfVhI9Gn = await Dipexk54Q1LY.transferFrom.call(addressD8HPJ5z, addressR1tVrtu, uintFARERz5, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringJYhqVlw = "HPOVtSo"
		const stringiXlnG5Q = "rfU"
		const uintBLgL8yi = BigInt("641")
		const DipexjPAwwNU = await Dipex.new(stringJYhqVlw, stringiXlnG5Q, uintBLgL8yi, {from: accounts[0]});
		const uintdYzS2NV = BigInt("54")
		const addressKy97Nmo = accounts[1]
		const uinta30BTlU = BigInt("1832")
		const addressVMxRetL = accounts[0]
		const addressMxrCiYN = "0x0000000000000000000000000000000000000001"
		const addressrr3H4op = accounts[4]
		const uintkpQsuyP = BigInt("465")
		const addresscjtkxwd = accounts[2]
		const boollEG4VAV = await DipexjPAwwNU.transfer.call(addressKy97Nmo, uintdYzS2NV, {from: accounts[0]});
		const boolo4yGKLm = await DipexjPAwwNU.approve.call(addressVMxRetL, uinta30BTlU, {from: "0x0000000000000000000000000000000000000001"});
		const boolCefQZA6 = await DipexjPAwwNU.transferownership.call(addressMxrCiYN, {from: accounts[0]});
//		const boolCAFuYld = await DipexjPAwwNU.transferownership.call(addressrr3H4op, {from: accounts[3]});
//		const boolBKiD1l = await DipexjPAwwNU.transfer.call(addresscjtkxwd, uintkpQsuyP, {from: accounts[5]});

		assert.equal(boolCefQZA6, true)
		assert.equal(boollEG4VAV, true)
		assert.equal(boolo4yGKLm, true)
		await expect(DipexjPAwwNU.transferownership.call(addressrr3H4op, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJYhqVlw = "HPOVtSo"
		const stringiXlnG5Q = "rfU"
		const uintzmvWjW = BigInt("641")
		const DipexjPAwwNU = await Dipex.new(stringJYhqVlw, stringiXlnG5Q, uintzmvWjW, {from: accounts[0]});
		const uintCcXpoxt = BigInt("54")
		const addressAWxUrZ = accounts[2]
		const addressNeIrTHp = "0x0000000000000000000000000000000000000001"
		const uintHZeuDCj = BigInt("1218")
		const addressS4qBVHv = accounts[3]
		const uintZOdLPXr = BigInt("0")
		const addressam0s7Qb = accounts[3]
		const uintGugT6v9 = BigInt("824")
		const addressurqTDtX = accounts[1]
		const addressCX0SRh5 = accounts[5]
		const addressRrSY9Jk = accounts[4]
		const boollEG4VAV = await DipexjPAwwNU.transfer.call(addressAWxUrZ, uintCcXpoxt, {from: accounts[0]});
		const boolCefQZA6 = await DipexjPAwwNU.transferownership.call(addressNeIrTHp, {from: accounts[0]});
		const booly7PXMrH = await DipexjPAwwNU.approve.call(addressS4qBVHv, uintHZeuDCj, {from: accounts[2]});
		const boolhJFpt8m = await DipexjPAwwNU.transfer.call(addressam0s7Qb, uintZOdLPXr, {from: accounts[0]});
//		const boolvdxLhB = await DipexjPAwwNU.transferFrom.call(addressCX0SRh5, addressurqTDtX, uintGugT6v9, {from: accounts[4]});
//		const boolCAFuYld = await DipexjPAwwNU.transferownership.call(addressRrSY9Jk, {from: accounts[3]});

		assert.equal(boolCefQZA6, true)
		assert.equal(boolhJFpt8m, true)
		assert.equal(boollEG4VAV, true)
		assert.equal(booly7PXMrH, true)
		await expect(DipexjPAwwNU.transferFrom.call(addressCX0SRh5, addressurqTDtX, uintGugT6v9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringBkYCXfV = "4exDJWtxVi7aDEEos3mWBsCOGcrslYHqUXA8KU3JsVUCnSCg3S0"
		const stringeARUBiS = "d18zPkq7lntXC41xKBQN"
		const uintkMs0EjK = BigInt("713")
		const DipexKpHO4Nc = await Dipex.new(stringBkYCXfV, stringeARUBiS, uintkMs0EjK, {from: accounts[5]});
		const uintQZViSFi = BigInt("180")
		const addressHaFaKY = accounts[5]
		const uintJVC3kx = BigInt("0")
		const addressijYR1Is = accounts[5]
		const uintajVyyIs = BigInt("1948")
		const addressxfO08Fe = accounts[4]
		const uintwQspZPm = BigInt("916")
		const addressHylH8yk = accounts[1]
		const address3fCpxE = accounts[2]
		const uintz549o2g = BigInt("925")
		const addressAiU6BsP = accounts[1]
		const uintkmddMEh = BigInt("904")
		const addressxBzsAIM = accounts[5]
		const uinthNQspB = BigInt("1229")
		const addressAHKBcVS = accounts[4]
		const addressRxFNBa1 = accounts[2]
		const boolRwVY446 = await DipexKpHO4Nc.approve.call(addressHaFaKY, uintQZViSFi, {from: accounts[4]});
		const boolb7ZzMbO = await DipexKpHO4Nc.approveAndCall.call(addressijYR1Is, uintJVC3kx, {from: accounts[5]});
		const boolQfvV5w = await DipexKpHO4Nc.approve.call(addressxfO08Fe, uintajVyyIs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrGetTKa = await DipexKpHO4Nc.transferFrom.call(address3fCpxE, addressHylH8yk, uintwQspZPm, {from: accounts[3]});
//		const boolbLDmVj1 = await DipexKpHO4Nc.approveAndCall.call(addressAiU6BsP, uintz549o2g, {from: accounts[2]});
//		const boolVJlhGK3 = await DipexKpHO4Nc.transfer.call(addressxBzsAIM, uintkmddMEh, {from: accounts[5]});
//		const boolxrlowrH = await DipexKpHO4Nc.transferFrom.call(addressRxFNBa1, addressAHKBcVS, uinthNQspB, {from: accounts[5]});

		assert.equal(boolQfvV5w, true)
		assert.equal(boolRwVY446, true)
		assert.equal(boolb7ZzMbO, true)
		await expect(DipexKpHO4Nc.transferFrom.call(address3fCpxE, addressHylH8yk, uintwQspZPm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})