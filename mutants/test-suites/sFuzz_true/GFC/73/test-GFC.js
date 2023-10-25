const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintdUoWXTx = BigInt("152")
		const stringN189ypX = "6Ly3ErJWPDk2"
		const stringYjs6qc8 = "OGkFRHQxsx0rtwUgap2B6uGKOAjZEoUzUxrw9R2IuDoOA4A"
		const GFClzzXyat = await GFC.new(uintdUoWXTx, stringN189ypX, stringYjs6qc8, {from: accounts[3]});
		const uintOO3x17e = BigInt("83")
		const addressFXULmsg = accounts[2]
		const uintOb0TLp = BigInt("1236")
		const uintm0q3W8x = BigInt("1341")
//		const boolt6mnWpy = await GFClzzXyat.burnFrom.call(addressFXULmsg, uintOO3x17e, {from: accounts[0]});
//		const boolbmeFOgJ = await GFClzzXyat.burn.call(uintOb0TLp, {from: accounts[2]});
//		const boolyaWlyMU = await GFClzzXyat.burn.call(uintm0q3W8x, {from: accounts[3]});

		await expect(GFClzzXyat.burnFrom.call(addressFXULmsg, uintOO3x17e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintQQYKLt = BigInt("1952")
		const stringrjpPSdm = "qxJiWdadNL3"
		const stringvfstEtU = "8O4r4tBuatnfJsgF7hCXHsJnPaVhCykUSIElSLKkcNcqoQcbfhs4KSoMEYr9hysPe4dRw73zK51w0eJrwu"
		const GFCeRgqmNi = await GFC.new(uintQQYKLt, stringrjpPSdm, stringvfstEtU, {from: accounts[1]});
		const uintCkuAkCh = BigInt("1393")
		const uinte9Fh4oY = BigInt("1430")
		const addressksVZn3r = accounts[4]
		const uintuUKafgY = BigInt("95")
		const byteQLbfi1k = "0x0609"
		const uintV1rkWq5 = BigInt("1829")
		const addressMMxptUM = accounts[4]
		const uintCP4V6Ns = BigInt("1784")
		const addressFUwxUc = accounts[4]
		const uintGKuDXxr = BigInt("1123")
		const addressrTJEQBi = accounts[5]
		const addressIfuBIpd = accounts[4]
//		const boolbiYyR0 = await GFCeRgqmNi.burn.call(uintCkuAkCh, {from: accounts[0]});
//		const booltFGtdHo = await GFCeRgqmNi.approve.call(addressksVZn3r, uinte9Fh4oY, {from: accounts[1]});
//		const boolYtkGneK = await GFCeRgqmNi.burn.call(uintuUKafgY, {from: accounts[4]});
//		const boolczcjMhu = await GFCeRgqmNi.approveAndCall.call(addressMMxptUM, uintV1rkWq5, byteQLbfi1k, {from: accounts[5]});
//		const boolVuS2rwg = await GFCeRgqmNi.approve.call(addressFUwxUc, uintCP4V6Ns, {from: accounts[2]});
//		const boolLrvXk4m = await GFCeRgqmNi.transferFrom.call(addressIfuBIpd, addressrTJEQBi, uintGKuDXxr, {from: accounts[0]});

		await expect(GFCeRgqmNi.burn.call(uintCkuAkCh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintxCDdgPP = BigInt("1521")
		const stringLlYVBx5 = "CgvIARZHhGlKVNiG9EMIyKugbsRdnP6jw22iBo6pncfsP"
		const stringr8S0ML = "5C"
		const GFCyisvsub = await GFC.new(uintxCDdgPP, stringLlYVBx5, stringr8S0ML, {from: accounts[2]});
		const uintmJFtgFK = BigInt("716")
		const addressmQ6UIGP = accounts[1]
		const byteHRK5Ru = "0x190a1206"
		const uintuSE6z7J = BigInt("1021")
		const addressYLvHFOB = accounts[2]
		const uintryAMusF = BigInt("876")
		const boolL8gti7E = await GFCyisvsub.approve.call(addressmQ6UIGP, uintmJFtgFK, {from: accounts[2]});
//		const boolrXqUHPJ = await GFCyisvsub.approveAndCall.call(addressYLvHFOB, uintuSE6z7J, byteHRK5Ru, {from: accounts[4]});
//		const booliKRc99 = await GFCyisvsub.burn.call(uintryAMusF, {from: accounts[3]});

		assert.equal(boolL8gti7E, true)
		await expect(GFCyisvsub.approveAndCall.call(addressYLvHFOB, uintuSE6z7J, byteHRK5Ru, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintJo8Oir = BigInt("1834")
		const stringpYrg5hA = "Cn1waQTHd9UrpHQ8mx5CKAMi5MtJgDvFFw5YMR5Vg5TNUwXwaZacwLwbCPAzS9FDvQHNmNdIfDMjHsRs5vPqhHC2gNQh3MGRg"
		const stringWEFnDQ = "lzCpq3mJ2qOpHf8mzxyRrDidq355jBhrGrocMMA6opE135xhPQPG9WQx2qzXH2xT3hFV95HUnP72Y5gENybig1pY14l8M"
		const GFCz2lzCnU = await GFC.new(uintJo8Oir, stringpYrg5hA, stringWEFnDQ, {from: accounts[1]});
		const uint5vFXD4 = BigInt("837")
		const addressVJNcEa = accounts[4]
		const addressZoBTVxU = accounts[4]
		const uintaI9BSdP = BigInt("1760")
		const addressrMg3JMu = accounts[4]
		const uintkWoUZ63 = BigInt("1828")
//		const boolXtKrh3R = await GFCz2lzCnU.transferFrom.call(addressZoBTVxU, addressVJNcEa, uint5vFXD4, {from: accounts[3]});
//		const boolt4tDZTK = await GFCz2lzCnU.approve.call(addressrMg3JMu, uintaI9BSdP, {from: accounts[2]});
//		const boolj44W12 = await GFCz2lzCnU.burn.call(uintkWoUZ63, {from: accounts[0]});

		await expect(GFCz2lzCnU.transferFrom.call(addressZoBTVxU, addressVJNcEa, uint5vFXD4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgWoqGsk = BigInt("1455")
		const stringKuCLjPZ = "D"
		const stringuNSEB0x = "93AyHHO2fOKCF"
		const GFCpEfJHFK = await GFC.new(uintgWoqGsk, stringKuCLjPZ, stringuNSEB0x, {from: "0x0000000000000000000000000000000000000001"});
		const uintL564vAq = BigInt("1448")
		const addresseaDP2xH = accounts[2]
		const uint9k4HiY = BigInt("979")
		const uintjNS5IAk = BigInt("98")
		const addressZb8ySI5 = accounts[3]
		const addressStAMHSL = accounts[1]
		const uint0wL27J = BigInt("1633")
		const addressFDTWCZ1 = "0x0000000000000000000000000000000000000001"
		const uintVKhjnSR = BigInt("417")
		const addresslAwulnx = accounts[4]
		const uintOCKU3aI = BigInt("466")
		const boolDWq0efa = await GFCpEfJHFK.approve.call(addresseaDP2xH, uintL564vAq, {from: accounts[0]});
		const boolbnCkmL5 = await GFCpEfJHFK.burn.call(uint9k4HiY, {from: accounts[0]});
		const boolRj8TIvY = await GFCpEfJHFK.transferFrom.call(addressStAMHSL, addressZb8ySI5, uintjNS5IAk, {from: accounts[4]});
		const boolhLD3e45 = await GFCpEfJHFK.transfer.call(addressFDTWCZ1, uint0wL27J, {from: accounts[0]});
		const boolEkCW7GS = await GFCpEfJHFK.approve.call(addresslAwulnx, uintVKhjnSR, {from: accounts[2]});
		const boolkOGaXYT = await GFCpEfJHFK.burn.call(uintOCKU3aI, {from: accounts[0]});
	});

	it('test for GFC', async () => {
		const uintbSCB1l = BigInt("210")
		const stringC2pjavZ = "8bIQBbfb2WiWOKKafjW6dNWc07iuU8w4vP4j4hp7ImPLhBb17j818mco7zVG08rpdgHOXipIM"
		const stringWgblid6 = "oxYiMJCfKmkFRAqnmProa01Efas4LquPeoWbE6MzOFwcCJ0bEoLC6bIQ"
		const GFClNuMlNM = await GFC.new(uintbSCB1l, stringC2pjavZ, stringWgblid6, {from: accounts[0]});
		const uintZUNYKmq = BigInt("76")
		const addressVMsX7PC = accounts[3]
		const uintM3rkFGQ = BigInt("1752")
		const addressFdZwLt = accounts[0]
		const uintAtjssRO = BigInt("1498")
		const addressVq9mmHF = accounts[4]
		const booljq9I6EM = await GFClNuMlNM.approve.call(addressVMsX7PC, uintZUNYKmq, {from: accounts[1]});
//		const bool7wQhia = await GFClNuMlNM.transfer.call(addressFdZwLt, uintM3rkFGQ, {from: accounts[5]});
//		const boolgxObwr8 = await GFClNuMlNM.approve.call(addressVq9mmHF, uintAtjssRO, {from: accounts[2]});

		assert.equal(booljq9I6EM, true)
		await expect(GFClNuMlNM.transfer.call(addressFdZwLt, uintM3rkFGQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintT46yyX = BigInt("1791")
		const stringFoW11w3 = "XFUew5KAqohh7BjjMj9XFkjdx37lnNhDTlNtLUiIEJLKDMrkdDX2WMVdvHlfRnlH8YUvphyTbuvudB"
		const stringkZPWEaw = "eAaQvPZb3BTjOy5miDBjPMxAncIKXRMuOqJkKzMxhIAhx4A8mXwH7tpQcrS9hAy1SjHRYeUpjLjxhDpdwj5dO"
		const GFCGViiSB = await GFC.new(uintT46yyX, stringFoW11w3, stringkZPWEaw, {from: accounts[2]});
		const uintJU85Dg3 = BigInt("1952")
		const addressLFE0ocR = accounts[1]
		const uintCvH4LXD = BigInt("41")
		const addressfkwKKbM = accounts[2]
		const uintzdHRrUm = BigInt("1783")
		const uintqT9OM5g = BigInt("1322")
		const addressq4SzSWo = accounts[3]
		const boolr38rjqo = await GFCGViiSB.approve.call(addressLFE0ocR, uintJU85Dg3, {from: accounts[0]});
//		const boolOUWY142 = await GFCGViiSB.burnFrom.call(addressfkwKKbM, uintCvH4LXD, {from: accounts[0]});
//		const boolPxEYoEe = await GFCGViiSB.burn.call(uintzdHRrUm, {from: accounts[3]});
//		const boolms62ioa = await GFCGViiSB.transfer.call(addressq4SzSWo, uintqT9OM5g, {from: accounts[0]});

		assert.equal(boolr38rjqo, true)
		await expect(GFCGViiSB.burnFrom.call(addressfkwKKbM, uintCvH4LXD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintTrzkofH = BigInt("1791")
		const stringFoW11w3 = "XFUew5KAqohh7BjjMj9XFkjdx37lnNhDTlNtLUiIEJLKDMrkdDX2WMVdvHlfRnlH8YUvphyTbuvudB"
		const stringkZPWEaw = "eAaQvPZb3BTjOy5miDBjPMxAncIKXRMuOqJkKzMxhIAhx4A8mXwH7tpQcrS9hAy1SjHRYeUpjLjxhDpdwj5dO"
		const GFCGViiSB = await GFC.new(uintTrzkofH, stringFoW11w3, stringkZPWEaw, {from: accounts[2]});
		const uintnBZQCvH = BigInt("1352")
		const addressXykQhDj = accounts[4]
		const byteiP9xtdF = "0x0f09040b07030a061c0a11000b1a081c0c05090c1612"
		const uintTsWePET = BigInt("1581")
		const addressGRlTrpf = accounts[4]
		const uintEQLQRdb = BigInt("1766")
		const uintB5lFLhH = BigInt("502")
		const addressAh63oLs = accounts[2]
		const addressv8xV0F = accounts[2]
		const boolssxZdmX = await GFCGViiSB.transfer.call(addressXykQhDj, uintnBZQCvH, {from: accounts[2]});
//		const boolR0c10Ow = await GFCGViiSB.approveAndCall.call(addressGRlTrpf, uintTsWePET, byteiP9xtdF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPxEYoEe = await GFCGViiSB.burn.call(uintEQLQRdb, {from: accounts[3]});
//		const boolkMcBGZ = await GFCGViiSB.transferFrom.call(addressv8xV0F, addressAh63oLs, uintB5lFLhH, {from: accounts[4]});

		assert.equal(boolssxZdmX, true)
		await expect(GFCGViiSB.approveAndCall.call(addressGRlTrpf, uintTsWePET, byteiP9xtdF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintB9EtkZ = BigInt("750")
		const stringOimM5tg = "zfjm41wxVrJuk9UIO6R1LD4e2IpMyVFO6RYnNTbgX5RcMdPsyqxfI08urroR18V5"
		const stringLtKhHnZ = "i4EYhzlsE8GbCOG3GtPAYnAjOvFsztLGbl7oZ9Ei2Go"
		const GFCDM8NMh = await GFC.new(uintB9EtkZ, stringOimM5tg, stringLtKhHnZ, {from: accounts[1]});
		const uintWu8Ybwq = BigInt("614")
		const uintzAuQgUi = BigInt("497")
		const addressaQ9mbH2 = accounts[1]
		const address3ZhtWX = accounts[5]
		const byteTdYDPF9 = "0x1e1b1d16191e011012170a14"
		const uintayWAW8m = BigInt("785")
		const addressXwoVWOk = "0x0000000000000000000000000000000000000001"
		const boolfca40MZ = await GFCDM8NMh.burn.call(uintWu8Ybwq, {from: accounts[1]});
//		const boolUqi31xk = await GFCDM8NMh.transferFrom.call(address3ZhtWX, addressaQ9mbH2, uintzAuQgUi, {from: accounts[2]});
//		const boolTdUuF96 = await GFCDM8NMh.approveAndCall.call(addressXwoVWOk, uintayWAW8m, byteTdYDPF9, {from: accounts[5]});

		assert.equal(boolfca40MZ, true)
		await expect(GFCDM8NMh.transferFrom.call(address3ZhtWX, addressaQ9mbH2, uintzAuQgUi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})