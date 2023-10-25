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
		const stringJYhqVlw = "HPOVtSo"
		const stringiXlnG5Q = "rfU"
		const uintIVQOpOi = BigInt("641")
		const DipexjPAwwNU = await Dipex.new(stringJYhqVlw, stringiXlnG5Q, uintIVQOpOi, {from: accounts[0]});
		const uintBV3sIsy = BigInt("0")
		const addressVf4wAC1 = accounts[2]
		const uintsWYMDh1 = BigInt("1593")
		const addressUpG8Rtb = accounts[5]
		const uintfaicitT = BigInt("500")
		const addressheNETMu = accounts[4]
		const uinteLnNoWG = BigInt("1441")
		const addressb5Po2gg = accounts[3]
		const addressf5o2lbF = accounts[5]
		const uintwwFoJPQ = BigInt("990")
		const addresszjBDFEc = accounts[5]
		const boollEG4VAV = await DipexjPAwwNU.transfer.call(addressVf4wAC1, uintBV3sIsy, {from: accounts[0]});
//		const boolx6yFLJ8 = await DipexjPAwwNU.transfer.call(addressUpG8Rtb, uintsWYMDh1, {from: accounts[3]});
//		const booltDfnDjb = await DipexjPAwwNU.approveAndCall.call(addressheNETMu, uintfaicitT, {from: accounts[2]});
//		const boolUZsWhXX = await DipexjPAwwNU.transfer.call(addressb5Po2gg, uinteLnNoWG, {from: accounts[3]});
//		const boolvc1CZA7 = await DipexjPAwwNU.transferownership.call(addressf5o2lbF, {from: accounts[1]});
//		const boolNC1G1Nq = await DipexjPAwwNU.approve.call(addresszjBDFEc, uintwwFoJPQ, {from: accounts[4]});

		assert.equal(boollEG4VAV, true)
		await expect(DipexjPAwwNU.transfer.call(addressUpG8Rtb, uintsWYMDh1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string8vdfk4 = "jCyBfS4HGzDyZGQOFO5p8Hel2b6m74x9MbNOKdGMYQPenwQ1uoHToDsqq3ZJBIbUS8mCbUYcPQDuk6TIbKM2Qj4GpaJKI2Fl"
		const stringjAVmfku = "jkySqyUfMCvK6tRK667GXbxBsmqpqsy4eVkiJm5aoErOBF1U93z7BF8NXGUnPBBxoXyEcE7UDYKb5EqiuH"
		const uintqgO2ZKt = BigInt("721")
		const Dipexjd4cZpc = await Dipex.new(string8vdfk4, stringjAVmfku, uintqgO2ZKt, {from: "0x0000000000000000000000000000000000000001"});
		const addressC0paDjc = accounts[5]
		const uintpisrUVN = BigInt("169")
		const addressA85CUGl = accounts[0]
		const addressC5jHXg4 = accounts[4]
		const addressYWjQGAQ = accounts[0]
		const uintkQRVzQn = BigInt("1020")
		const addressEh66ePj = accounts[0]
		const uintfgVQvqW = BigInt("1808")
		const addressyQYMYCs = accounts[5]
		const addressmiOtu8 = accounts[5]
		const boolxtwIsf6 = await Dipexjd4cZpc.transferownership.call(addressC0paDjc, {from: accounts[0]});
		const boolOLU64iK = await Dipexjd4cZpc.transferFrom.call(addressC5jHXg4, addressA85CUGl, uintpisrUVN, {from: "0x0000000000000000000000000000000000000001"});
		const boolGlRxxA = await Dipexjd4cZpc.transferownership.call(addressYWjQGAQ, {from: accounts[3]});
		const bool9ARgfz = await Dipexjd4cZpc.approveAndCall.call(addressEh66ePj, uintkQRVzQn, {from: accounts[0]});
		const boolSZYZRHT = await Dipexjd4cZpc.approve.call(addressyQYMYCs, uintfgVQvqW, {from: accounts[1]});
		const boolElDBfqu = await Dipexjd4cZpc.transferownership.call(addressmiOtu8, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringGycbEHl = "k77h7F4fq9B"
		const stringMUZfNn = "YP0V6vM30PR7zy5HhsbkoXlfVdCWg3ocxWMFBr7H"
		const uintarXSaTl = BigInt("851")
		const DipexfGA4Ndy = await Dipex.new(stringGycbEHl, stringMUZfNn, uintarXSaTl, {from: accounts[2]});
		const uintgGipBXu = BigInt("0")
		const addressQGXjC8p = accounts[2]
		const uinti7yr4l1 = BigInt("1167")
		const addressUIL2OMe = accounts[5]
		const boolXxty2kS = await DipexfGA4Ndy.approveAndCall.call(addressQGXjC8p, uintgGipBXu, {from: accounts[2]});
		const boolqLNVGRZ = await DipexfGA4Ndy.approve.call(addressUIL2OMe, uinti7yr4l1, {from: accounts[0]});

		assert.equal(boolXxty2kS, true)
		assert.equal(boolqLNVGRZ, true)
	});
})