const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20K8mUsvH = await GAZ_ERC20.new({from: accounts[0]});
		const uintl08Niza = BigInt("1063")
		const addresski8BnnP = accounts[5]
		const uintNb4psiW = BigInt("1743")
		const addressm2I0YVj = "0x0000000000000000000000000000000000000001"
		const addressWmtKn3n = accounts[1]
		const addressvQFz4G = accounts[1]
//		const booloVSB7bR = await GAZ_ERC20K8mUsvH.transfer.call(addresski8BnnP, uintl08Niza, {from: accounts[3]});
//		const boolgpZaJiF = await GAZ_ERC20K8mUsvH.transfer.call(addressm2I0YVj, uintNb4psiW, {from: accounts[3]});
//		const boolgGRyhIr = await GAZ_ERC20K8mUsvH.approve.call(addressWmtKn3n, {from: accounts[1]});
//		const boolxF6hfY = await GAZ_ERC20K8mUsvH.approve.call(addressvQFz4G, {from: accounts[5]});

		await expect(GAZ_ERC20K8mUsvH.transfer.call(addresski8BnnP, uintl08Niza, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20b7wOIB = await GAZ_ERC20.new({from: accounts[5]});
		const addressBqOUBAS = accounts[4]
		const uint2y9aux = BigInt("526")
		const addressVCz9c41 = accounts[5]
		const uintjHPHmkQ = BigInt("1596")
		const addressvJtcsuH = accounts[0]
//		const boolcoqUGR1 = await GAZ_ERC20b7wOIB.approve.call(addressBqOUBAS, {from: accounts[0]});
//		const boolU5lZ4Hd = await GAZ_ERC20b7wOIB.transfer.call(addressVCz9c41, uint2y9aux, {from: accounts[4]});
//		const boolD82bLqd = await GAZ_ERC20b7wOIB.approve.call(addressvJtcsuH, uintjHPHmkQ, {from: accounts[0]});

		await expect(GAZ_ERC20b7wOIB.approve.call(addressBqOUBAS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pqK4dmK = await GAZ_ERC20.new({from: accounts[1]});
		const address6imwAJ = accounts[2]
		const uintF7t6NWm = BigInt("1038")
		const addressM87JiFB = "0x0000000000000000000000000000000000000001"
		const uinteY7s7Q2 = BigInt("1917")
		const addressxu4w8PA = accounts[2]
		const address2XErOm = "0x0000000000000000000000000000000000000001"
		const uintPSKuhg5 = BigInt("935")
		const addressozsnSnk = "0x0000000000000000000000000000000000000001"
		const uintc3p8Vl = BigInt("581")
		const addressxc2eVG8 = accounts[0]
		const addressNNWxXto = accounts[1]
		const uintAMRhXR9 = BigInt("318")
		const addressEVjV0lJ = accounts[3]
//		const boolSBNaNSl = await GAZ_ERC20pqK4dmK.approve.call(address6imwAJ, {from: accounts[4]});
//		const boolpyUAWv5 = await GAZ_ERC20pqK4dmK.approve.call(addressM87JiFB, uintF7t6NWm, {from: accounts[0]});
//		const bool4bsTKh = await GAZ_ERC20pqK4dmK.transferFrom.call(address2XErOm, addressxu4w8PA, uinteY7s7Q2, {from: accounts[1]});
//		const boolcBkLGOB = await GAZ_ERC20pqK4dmK.approve.call(addressozsnSnk, uintPSKuhg5, {from: accounts[3]});
//		const boolFlxcrvG = await GAZ_ERC20pqK4dmK.transferFrom.call(addressNNWxXto, addressxc2eVG8, uintc3p8Vl, {from: accounts[5]});
//		const booliJJFdRO = await GAZ_ERC20pqK4dmK.transfer.call(addressEVjV0lJ, uintAMRhXR9, {from: accounts[4]});

		await expect(GAZ_ERC20pqK4dmK.approve.call(address6imwAJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Gv1D8dg = await GAZ_ERC20.new({from: accounts[0]});
		const addressX7p44Q = accounts[1]
		const uintxotXox = BigInt("906")
		const addressdSvoitR = accounts[0]
		const uintTGcSLnT = BigInt("1879")
		const addressSaNOAug = accounts[1]
		const addressmKuUJqY = accounts[1]
		const uinthNxH2fE = BigInt("91")
		const addressdf40jIv = accounts[0]
//		const booljJiTCb8 = await GAZ_ERC20Gv1D8dg.approve.call(addressX7p44Q, {from: accounts[1]});
//		const boolKeiI7Wu = await GAZ_ERC20Gv1D8dg.approve.call(addressdSvoitR, uintxotXox, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTenegdW = await GAZ_ERC20Gv1D8dg.approve.call(addressSaNOAug, uintTGcSLnT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLKhHRSA = await GAZ_ERC20Gv1D8dg.approve.call(addressmKuUJqY, {from: accounts[0]});
//		const boolOk3Cuu3 = await GAZ_ERC20Gv1D8dg.transfer.call(addressdf40jIv, uinthNxH2fE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20Gv1D8dg.approve.call(addressX7p44Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20v7lb6t = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwgsiJQr = BigInt("1498")
		const addressEUfK8ev = accounts[2]
		const uintuNq9LyC = BigInt("1590")
		const addresskuhqY6d = "0x0000000000000000000000000000000000000001"
		const boolP3cZvFJ = await GAZ_ERC20v7lb6t.transfer.call(addressEUfK8ev, uintwgsiJQr, {from: accounts[4]});
		const booliJrh2jW = await GAZ_ERC20v7lb6t.approve.call(addresskuhqY6d, uintuNq9LyC, {from: accounts[0]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YepBIxT = await GAZ_ERC20.new({from: accounts[2]});
		const uintGAbjVEz = BigInt("317")
		const addressMki8eeE = accounts[4]
		const uintIDoPqtw = BigInt("425")
		const addressjtUXQEw = accounts[1]
		const uintUrMro5B = BigInt("1362")
		const address6TUsL0 = accounts[3]
		const addresstAxYAs9 = accounts[0]
		const boolfUqgiUS = await GAZ_ERC20YepBIxT.approve.call(addressMki8eeE, uintGAbjVEz, {from: accounts[1]});
		const boolh4IZwzi = await GAZ_ERC20YepBIxT.approve.call(addressjtUXQEw, uintIDoPqtw, {from: "0x0000000000000000000000000000000000000001"});
		const boolbk5qdfi = await GAZ_ERC20YepBIxT.approve.call(address6TUsL0, uintUrMro5B, {from: accounts[2]});
//		const boolcBFuzTr = await GAZ_ERC20YepBIxT.approve.call(addresstAxYAs9, {from: accounts[2]});

		assert.equal(boolbk5qdfi, true)
		assert.equal(boolfUqgiUS, true)
		assert.equal(boolh4IZwzi, true)
		await expect(GAZ_ERC20YepBIxT.approve.call(addresstAxYAs9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zDXqxuG = await GAZ_ERC20.new({from: accounts[3]});
		const uintbzDNYsi = BigInt("1228")
		const addressE4jKcYt = accounts[0]
		const addressbHDZzCZ = "0x0000000000000000000000000000000000000001"
		const uintSN6zjXo = BigInt("252")
		const addressI0iZdS1 = accounts[5]
		const uinti6oEIpA = BigInt("1933")
		const addressciyeRzr = accounts[5]
//		const bool5e334z = await GAZ_ERC20zDXqxuG.transferFrom.call(addressbHDZzCZ, addressE4jKcYt, uintbzDNYsi, {from: accounts[1]});
//		const boolYfftFkY = await GAZ_ERC20zDXqxuG.transfer.call(addressI0iZdS1, uintSN6zjXo, {from: accounts[0]});
//		const boolWn9IZx3 = await GAZ_ERC20zDXqxuG.approve.call(addressciyeRzr, uinti6oEIpA, {from: accounts[4]});

		await expect(GAZ_ERC20zDXqxuG.transferFrom.call(addressbHDZzCZ, addressE4jKcYt, uintbzDNYsi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BUs4wME = await GAZ_ERC20.new({from: accounts[4]});
		const addressf28DnC = accounts[2]
		const uintKkYRra = BigInt("1405")
		const addressonjUskl = accounts[2]
		const uintaiqgqy = BigInt("1068")
		const addressZYUDAlU = accounts[2]
		const addressxqtN9o7 = accounts[4]
		const uintHNGI1F2 = BigInt("1240")
		const addressrI8vvR4 = accounts[2]
		const uintRCRla0h = BigInt("1472")
		const addresstG1XOhj = accounts[3]
//		const boolMdOjlE = await GAZ_ERC20BUs4wME.approve.call(addressf28DnC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgJ58Leb = await GAZ_ERC20BUs4wME.transfer.call(addressonjUskl, uintKkYRra, {from: accounts[1]});
//		const booluLJiCml = await GAZ_ERC20BUs4wME.approve.call(addressZYUDAlU, uintaiqgqy, {from: "0x0000000000000000000000000000000000000001"});
//		const booleqgOQJB = await GAZ_ERC20BUs4wME.approve.call(addressxqtN9o7, {from: accounts[1]});
//		const booleQWdIw = await GAZ_ERC20BUs4wME.approve.call(addressrI8vvR4, uintHNGI1F2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKbGyHRq = await GAZ_ERC20BUs4wME.approve.call(addresstG1XOhj, uintRCRla0h, {from: accounts[4]});

		await expect(GAZ_ERC20BUs4wME.approve.call(addressf28DnC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20I5kzPeR = await GAZ_ERC20.new({from: accounts[3]});
		const addressW9a7PLF = accounts[4]
		const uintq58yubY = BigInt("50")
		const addressDCrWVD = accounts[5]
//		const boolJdZSozp = await GAZ_ERC20I5kzPeR.approve.call(addressW9a7PLF, {from: accounts[3]});
//		const boolkNbIA25 = await GAZ_ERC20I5kzPeR.transfer.call(addressDCrWVD, uintq58yubY, {from: accounts[0]});

		await expect(GAZ_ERC20I5kzPeR.approve.call(addressW9a7PLF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BAIlOWw = await GAZ_ERC20.new({from: accounts[0]});
		const uintup1TJsm = BigInt("809")
		const addressblehhk5 = accounts[4]
		const uintQFtUJ8F = BigInt("657")
		const addressb4AOXF6 = accounts[4]
		const uintIdHjeBb = BigInt("320")
		const addressaWUt43n = accounts[2]
		const addresszUiAr11 = accounts[3]
		const uintofHcGKH = BigInt("1789")
		const addressJqBWyd4 = "0x0000000000000000000000000000000000000001"
		const booltquAe0I = await GAZ_ERC20BAIlOWw.approve.call(addressblehhk5, uintup1TJsm, {from: accounts[3]});
		const boolTNRUvYQ = await GAZ_ERC20BAIlOWw.approve.call(addressb4AOXF6, uintQFtUJ8F, {from: accounts[1]});
		const boolsva6s5F = await GAZ_ERC20BAIlOWw.approve.call(addressaWUt43n, uintIdHjeBb, {from: accounts[0]});
//		const booltF3ybmG = await GAZ_ERC20BAIlOWw.approve.call(addresszUiAr11, {from: accounts[5]});
//		const boolya7Y0s0 = await GAZ_ERC20BAIlOWw.approve.call(addressJqBWyd4, uintofHcGKH, {from: accounts[4]});

		assert.equal(boolTNRUvYQ, true)
		assert.equal(boolsva6s5F, true)
		assert.equal(booltquAe0I, true)
		await expect(GAZ_ERC20BAIlOWw.approve.call(addresszUiAr11, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pqK4dmK = await GAZ_ERC20.new({from: accounts[1]});
		const uintpBPBKk = BigInt("1458")
		const addressemBsZuQ = "0x0000000000000000000000000000000000000001"
		const addressCx7uyF4 = accounts[1]
		const addressjq5lslg = accounts[2]
		const uintIaEZs3 = BigInt("1891")
		const addresso5iVV8Q = accounts[3]
		const uintcqeBDiq = BigInt("1038")
		const addressqH7nUM = "0x0000000000000000000000000000000000000001"
		const uintnXRZjK = BigInt("1917")
		const addressLbEuNDR = accounts[2]
		const addressPfLbKN3 = "0x0000000000000000000000000000000000000001"
		const uintnGvVYhH = BigInt("983")
		const addressLteVaWE = accounts[4]
		const uinthDq2aLe = BigInt("935")
		const addressqaGZ5Il = "0x0000000000000000000000000000000000000001"
		const uintzpteOz = BigInt("581")
		const addressukOmF5 = accounts[0]
		const addressqwNeMIL = accounts[1]
		const uintEsNVCWL = BigInt("318")
		const addresstcFse3B = accounts[3]
		const boolTzT4Xcb = await GAZ_ERC20pqK4dmK.transferFrom.call(addressCx7uyF4, addressemBsZuQ, uintpBPBKk, {from: accounts[1]});
//		const boolSBNaNSl = await GAZ_ERC20pqK4dmK.approve.call(addressjq5lslg, {from: accounts[4]});
//		const booleG1kkMg = await GAZ_ERC20pqK4dmK.transfer.call(addresso5iVV8Q, uintIaEZs3, {from: accounts[3]});
//		const boolpyUAWv5 = await GAZ_ERC20pqK4dmK.approve.call(addressqH7nUM, uintcqeBDiq, {from: accounts[0]});
//		const bool4bsTKh = await GAZ_ERC20pqK4dmK.transferFrom.call(addressPfLbKN3, addressLbEuNDR, uintnXRZjK, {from: accounts[1]});
//		const boolU42aaJf = await GAZ_ERC20pqK4dmK.approve.call(addressLteVaWE, uintnGvVYhH, {from: accounts[0]});
//		const boolcBkLGOB = await GAZ_ERC20pqK4dmK.approve.call(addressqaGZ5Il, uinthDq2aLe, {from: accounts[3]});
//		const boolFlxcrvG = await GAZ_ERC20pqK4dmK.transferFrom.call(addressqwNeMIL, addressukOmF5, uintzpteOz, {from: accounts[5]});
//		const booliJJFdRO = await GAZ_ERC20pqK4dmK.transfer.call(addresstcFse3B, uintEsNVCWL, {from: accounts[4]});

		assert.equal(boolTzT4Xcb, true)
		await expect(GAZ_ERC20pqK4dmK.approve.call(addressjq5lslg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})