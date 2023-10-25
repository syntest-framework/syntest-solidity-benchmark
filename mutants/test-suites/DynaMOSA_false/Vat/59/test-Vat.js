const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatCNjmgsu = await Vat.new({from: accounts[0]});
		const addressGcw2xc3 = accounts[4]
//		await VatCNjmgsu.auth.call({from: accounts[2]});
//		const addressDeDqZwy = await VatCNjmgsu.nope.call(addressGcw2xc3, {from: accounts[2]});

		await expect(VatCNjmgsu.auth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatJrFeSaS = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxoPDw8T = accounts[1]
		const uintvcVHbPc = BigInt("1155")
		const addressQUsZem4 = "0x0000000000000000000000000000000000000001"
		const addressIiND7Xr = accounts[1]
		await VatJrFeSaS.cage.call({from: accounts[0]});
		await VatJrFeSaS.auth.call({from: accounts[2]});
		await VatJrFeSaS.auth.call({from: accounts[2]});
		const addressp8jDJYq = await VatJrFeSaS.deny.call(addressxoPDw8T, {from: accounts[5]});
		const addressljnVUeA = await VatJrFeSaS.move.call(addressIiND7Xr, addressQUsZem4, uintvcVHbPc, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const VatlEFLWc = await Vat.new({from: accounts[2]});
		const uintyyCDhID = BigInt("1311")
		const address1Sczdi = accounts[1]
		const addressVhcSc72 = accounts[4]
		const intbdZaCK6 = BigInt("-471")
		const intdVehnp7 = BigInt("-1394")
		const addressuVrkjyp = accounts[2]
		const addressTeilWHQ = accounts[4]
		const addressNb3gfze = accounts[5]
		const byteQgBdPXu = "0x19060c1e1f1f072006031f1a1c090e0a0d1b040818021f08101e180e171c0119"
		const intkwakwwy = BigInt("621")
		const addressP0ofd1q = accounts[1]
		const byte3akNRO = "0x08170a050a021f10070909141b1a150e1a110408071a090f0b1a1a1a051d1a00"
		const int1EZcyS = BigInt("1302")
		const addressrIyWpuD = accounts[3]
		const byteXUl2hFv = "0x0a10041c1e141a1c0c0b1c1a050a200c1a11030f18121617070d0f121719040d"
		const uintocWM77m = BigInt("693")
		const addressDwFD7Id = accounts[1]
		const addresskSctweK = accounts[2]
		const byteEsA3Ox6 = "0x0b03121a181d1d0f0d1c11180b040e00161816180500190318010e1911070f20"
//		const addressSpFt3Oo = await VatlEFLWc.move.call(addressVhcSc72, address1Sczdi, uintyyCDhID, {from: accounts[2]});
//		const bytes32UI9awyJ = await VatlEFLWc.frob.call(byteQgBdPXu, addressNb3gfze, addressTeilWHQ, addressuVrkjyp, intdVehnp7, intbdZaCK6, {from: accounts[1]});
//		const bytes32sQsCutO = await VatlEFLWc.slip.call(byte3akNRO, addressP0ofd1q, intkwakwwy, {from: accounts[1]});
//		const bytes32WvrTdlq = await VatlEFLWc.fold.call(byteXUl2hFv, addressrIyWpuD, int1EZcyS, {from: accounts[1]});
//		const bytes32SllVcGG = await VatlEFLWc.flux.call(byteEsA3Ox6, addresskSctweK, addressDwFD7Id, uintocWM77m, {from: accounts[3]});

		await expect(VatlEFLWc.move.call(addressVhcSc72, address1Sczdi, uintyyCDhID, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatT2X9fNV = await Vat.new({from: accounts[4]});
		const byteQtvpJf5 = "0x120d0a0407170f06150a08101e190f04081317041e0106090e14030d18031903"
		const addressae0UrUN = accounts[5]
		const bytes32ml8ZvWV = await VatT2X9fNV.init.call(byteQtvpJf5, {from: accounts[4]});
//		await VatT2X9fNV.auth.call({from: "0x0000000000000000000000000000000000000001"});
//		await VatT2X9fNV.cage.call({from: accounts[1]});
//		const addressiLfJiJ5 = await VatT2X9fNV.rely.call(addressae0UrUN, {from: accounts[2]});

		await expect(VatT2X9fNV.auth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatz78hX6O = await Vat.new({from: accounts[2]});
		const intWRcv7FH = BigInt("-1802")
		const intqHFletW = BigInt("433")
		const addressxx1QBEZ = accounts[2]
		const addresspDI3GKJ = accounts[0]
		const addressFkI9Y5w = accounts[4]
		const byteqI2OsTx = "0x140903150f0c050204000c08100f14000a1310151f0607060a0801011c050a1e"
//		await Vatz78hX6O.cage.call({from: accounts[2]});
//		await Vatz78hX6O.note.call({from: accounts[2]});
//		const bytes32ISpFBEr = await Vatz78hX6O.grab.call(byteqI2OsTx, addressFkI9Y5w, addresspDI3GKJ, addressxx1QBEZ, intqHFletW, intWRcv7FH, {from: accounts[4]});

		await expect(Vatz78hX6O.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintCpU5syo = BigInt("466")
		const addresstvc1ZY8 = accounts[1]
		const addressnLmpQI5 = accounts[5]
		const addresszWiEHTc = accounts[1]
		const byter4p7sCC = "0x0514190f051f1b071b19060405131f0313121b1515031b0e1c1410121c0f020e"
		const byteN2Pwt7n = "0x06140005091b1a041003051805141315170f1106040c0f1f0416000309110b05"
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addressnLmpQI5, addresstvc1ZY8, uintCpU5syo, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addresszWiEHTc, {from: accounts[0]});
//		const bytes32ElnztB5 = await VatWhcXAnI.init.call(byter4p7sCC, {from: accounts[0]});
//		await VatWhcXAnI.auth.call({from: accounts[1]});
//		const bytes32PC1y5P = await VatWhcXAnI.init.call(byteN2Pwt7n, {from: accounts[3]});

		await expect(VatWhcXAnI.suck.call(addressnLmpQI5, addresstvc1ZY8, uintCpU5syo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXMXJbXL = await Vat.new({from: accounts[3]});
		const intwnJ3FgF = BigInt("29")
		const intFsbwvBS = BigInt("1015")
		const addressKOLlIyJ = accounts[4]
		const addressDqR664O = accounts[1]
		const addressaxDIkB0 = "0x0000000000000000000000000000000000000001"
		const bytesBnNNcd = "0x01031d2001201c05160a0c0e1e0c0c07180b0d200217050f0c10031516011114"
		const addressAy6sd5b = accounts[1]
		const uintr1ksFIT = BigInt("384")
		const addressgSXaIpY = accounts[2]
		const addressFfpTCEl = accounts[0]
		const addressBQiDCAp = accounts[2]
//		const bytes32SLxa1yh = await VatXMXJbXL.frob.call(bytesBnNNcd, addressaxDIkB0, addressDqR664O, addressKOLlIyJ, intFsbwvBS, intwnJ3FgF, {from: accounts[2]});
//		const addressviuoAar = await VatXMXJbXL.hope.call(addressAy6sd5b, {from: accounts[1]});
//		const addressAEmLgGN = await VatXMXJbXL.move.call(addressFfpTCEl, addressgSXaIpY, uintr1ksFIT, {from: accounts[2]});
//		const addressAVjS7Zv = await VatXMXJbXL.nope.call(addressBQiDCAp, {from: accounts[3]});

		await expect(VatXMXJbXL.frob.call(bytesBnNNcd, addressaxDIkB0, addressDqR664O, addressKOLlIyJ, intFsbwvBS, intwnJ3FgF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatz78hX6O = await Vat.new({from: accounts[2]});
		const intU04g3gR = BigInt("1508")
		const intURT0NFm = BigInt("191")
		const addresszAL6z3Z = accounts[2]
		const addressPfFJRrT = accounts[5]
		const byteGT8S35A = "0x0b1b1204191706120e1c0009100c0809121a12200e04181000031c1e13191a0e"
		const intJeiZK8K = BigInt("-1802")
		const intj93sblY = BigInt("433")
		const addressTrPV4X3 = accounts[2]
		const addressLr4BNtn = accounts[0]
		const addressUtrCvSX = accounts[5]
		const byteIye0SL = "0x140903150f0c050204000c08100f14000a1310151f0607060a0801011c050a1e"
//		const bytes32a8OcEGn = await Vatz78hX6O.fork.call(byteGT8S35A, addressPfFJRrT, addresszAL6z3Z, intURT0NFm, intU04g3gR, {from: accounts[0]});
//		await Vatz78hX6O.cage.call({from: accounts[2]});
//		const bytes32ISpFBEr = await Vatz78hX6O.grab.call(byteIye0SL, addressUtrCvSX, addressLr4BNtn, addressTrPV4X3, intj93sblY, intJeiZK8K, {from: accounts[4]});

		await expect(Vatz78hX6O.fork.call(byteGT8S35A, addressPfFJRrT, addresszAL6z3Z, intURT0NFm, intU04g3gR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKuOtEoP = await Vat.new({from: accounts[5]});
		const uintviyHNPa = BigInt("1468")
		const addressOFvJfBL = accounts[3]
		const addressqsbFfv8 = accounts[0]
		const uintEDcoUyA = BigInt("1174")
		const byteV9Icfuu = "0x130c0a0a0a040c180113171b140b1d0d15010b121a1f0213011d1b01050e1e1b"
		const byteXDbwqnM = "0x0a0a071c0d0310111a1c0c0f1f0b1902181607161212170117160b1b0f1a0e06"
		const addressRDqdRVl = accounts[3]
		const uintIaKr0uh = BigInt("679")
		const addresstzZsvxu = accounts[0]
		const addressnuk0iG4 = "0x0000000000000000000000000000000000000001"
		const byteUxtrtQ = "0x1f05191e1c180d100e1a181a03120510090d0e2004051e1d05070c1e0a0a1b15"
//		const addressDLxSDmF = await VatKuOtEoP.move.call(addressqsbFfv8, addressOFvJfBL, uintviyHNPa, {from: accounts[0]});
//		const bytes32R5g1P59 = await VatKuOtEoP.file.call(byteXDbwqnM, byteV9Icfuu, uintEDcoUyA, {from: accounts[1]});
//		const addressVOMDgqy = await VatKuOtEoP.hope.call(addressRDqdRVl, {from: accounts[1]});
//		const bytes32vVUD4C9 = await VatKuOtEoP.flux.call(byteUxtrtQ, addressnuk0iG4, addresstzZsvxu, uintIaKr0uh, {from: "0x0000000000000000000000000000000000000001"});
//		await VatKuOtEoP.cage.call({from: accounts[1]});

		await expect(VatKuOtEoP.move.call(addressqsbFfv8, addressOFvJfBL, uintviyHNPa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintyFWzYf0 = BigInt("1086")
		const bytep9O0eBK = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const byteH2Hp8ux = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const uintqCfSnfh = BigInt("466")
		const addressMlOH0Th = accounts[1]
		const addressLK4rCzb = accounts[5]
		const addresshkAvrE6 = accounts[1]
		const bytezH7GvA5 = "0x0514190f051f1b071b19060405131f0313121b1515031b0e1c1410121c10020e"
		const uintyIlhUIr = BigInt("1322")
		const byteKWCJej = "0x06140005091b1a041003051805141315170f1106040c0f1f0416000309110b05"
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(byteH2Hp8ux, bytep9O0eBK, uintyFWzYf0, {from: accounts[1]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addressLK4rCzb, addressMlOH0Th, uintqCfSnfh, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addresshkAvrE6, {from: accounts[0]});
//		const bytes32ElnztB5 = await VatWhcXAnI.init.call(bytezH7GvA5, {from: accounts[0]});
//		const uintrMfqFzr = await VatWhcXAnI.heal.call(uintyIlhUIr, {from: accounts[1]});
//		await VatWhcXAnI.auth.call({from: accounts[1]});
//		const bytes32PC1y5P = await VatWhcXAnI.init.call(byteKWCJej, {from: accounts[3]});

		await expect(VatWhcXAnI.file.call(byteH2Hp8ux, bytep9O0eBK, uintyFWzYf0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatjREpPKe = await Vat.new({from: accounts[5]});
		const uintsWYroWs = BigInt("1745")
		const byte73weaR = "0x0e19160a1e1d1b130917070f1b0307020a071812200209121911091003161920"
		const uintX7oSxKd = BigInt("565")
		const addressxJyuaUY = accounts[4]
		const addressbdt95Pq = accounts[3]
		const uintK74mndy = BigInt("906")
		const bytee0eVu9I = "0x030313111f0f140714191113051b16171712150a181d0a1c05050a0b1a0e0d1d"
//		const uintICWTyQX = await VatjREpPKe.heal.call(uintsWYroWs, {from: accounts[1]});
//		const bytes32Dag0NmB = await VatjREpPKe.init.call(byte73weaR, {from: accounts[1]});
//		const addressaUZ5nli = await VatjREpPKe.move.call(addressbdt95Pq, addressxJyuaUY, uintX7oSxKd, {from: "0x0000000000000000000000000000000000000001"});
//		const uintiYZZpx = await VatjREpPKe.heal.call(uintK74mndy, {from: accounts[4]});
//		const bytes32TyTx4Ib = await VatjREpPKe.init.call(bytee0eVu9I, {from: accounts[0]});

		await expect(VatjREpPKe.heal.call(uintsWYroWs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatCNjmgsu = await Vat.new({from: accounts[0]});
		const addressmMMu21P = accounts[4]
		const addressDeDqZwy = await VatCNjmgsu.nope.call(addressmMMu21P, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatANZK6Z9 = await Vat.new({from: accounts[0]});
		const intRrUMsfO = BigInt("1688")
		const addressouT4KFP = accounts[5]
		const byteOhRnqMe = "0x0d1510141f1a0c1e0e020c141c1e00080b091f100f0c021e0a0b1a1a11060805"
		const bytes32JQtED0X = await VatANZK6Z9.slip.call(byteOhRnqMe, addressouT4KFP, intRrUMsfO, {from: accounts[0]});
//		await VatANZK6Z9.note.call({from: accounts[4]});

		await expect(VatANZK6Z9.note.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const addressJwwcMiB = accounts[3]
		const uintp6Doj12 = BigInt("1086")
		const bytehIHRrP = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const bytec7L3iNw = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const uintkywSWFB = BigInt("1531")
		const uintDjPgtAR = BigInt("466")
		const addressLd9Tht3 = accounts[1]
		const addresshcptrO = accounts[5]
		const addressw2tjQRA = accounts[1]
		const uintAiIwxW2 = BigInt("1322")
		const byteyHvrkBW = "0x06140005091b1a041003051805141315170f1106040c0f1f0416000309110b05"
		const addressz1HyBE6 = await VatWhcXAnI.hope.call(addressJwwcMiB, {from: accounts[2]});
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(bytec7L3iNw, bytehIHRrP, uintp6Doj12, {from: accounts[1]});
//		const uintnfqiM1c = await VatWhcXAnI.heal.call(uintkywSWFB, {from: accounts[0]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addresshcptrO, addressLd9Tht3, uintDjPgtAR, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addressw2tjQRA, {from: accounts[0]});
//		await VatWhcXAnI.auth.call({from: accounts[0]});
//		const uintrMfqFzr = await VatWhcXAnI.heal.call(uintAiIwxW2, {from: accounts[1]});
//		await VatWhcXAnI.auth.call({from: accounts[1]});
//		const bytes32PC1y5P = await VatWhcXAnI.init.call(byteyHvrkBW, {from: accounts[3]});

		await expect(VatWhcXAnI.file.call(bytec7L3iNw, bytehIHRrP, uintp6Doj12, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vata0ElTn0 = await Vat.new({from: accounts[4]});
		const addressDbqI9Q6 = accounts[3]
		const uintJKOdI8V = BigInt("539")
		const addressk2TqTrJ = accounts[4]
		const addressnolpKUW = accounts[2]
		const uintfgaV7h = BigInt("664")
		const addressfYqI1ZD = accounts[4]
		const addressGOCBQH0 = accounts[5]
		const addressNADjUP = await Vata0ElTn0.nope.call(addressDbqI9Q6, {from: accounts[2]});
		const addressyQ9JheV = await Vata0ElTn0.suck.call(addressnolpKUW, addressk2TqTrJ, uintJKOdI8V, {from: accounts[4]});
		const addressbrUhmN = await Vata0ElTn0.suck.call(addressGOCBQH0, addressfYqI1ZD, uintfgaV7h, {from: accounts[4]});
	});

	it('test for Vat', async () => {
		const VatQvcWIqH = await Vat.new({from: accounts[3]});
		const uintFyWVnR = BigInt("312")
		const byteVfiWjJb = "0x1401141a1f190203121d0616150419111b0c140c12130519011f06091c1c120b"
		const intUpOpiE = BigInt("-641")
		const intUmEu47 = BigInt("-1283")
		const addressNHamtwh = accounts[2]
		const addresse8A8qi = accounts[2]
		const byteuZe97mn = "0x0a0f0c20111c0b1d02161207170e080d1a0e12191e0c111b07030c041814020c"
//		const bytes32b9lyO8y = await VatQvcWIqH.file.call(byteVfiWjJb, uintFyWVnR, {from: accounts[2]});
//		const bytes32Lhf7890 = await VatQvcWIqH.fork.call(byteuZe97mn, addresse8A8qi, addressNHamtwh, intUmEu47, intUpOpiE, {from: accounts[4]});

		await expect(VatQvcWIqH.file.call(byteVfiWjJb, uintFyWVnR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const intMh6SqQn = BigInt("-1430")
		const addressPE173ev = accounts[3]
		const bytev8tr0z = "0x141a131718190a1e1601020317150e1c1e0d1a04091d19100c16180013051103"
		const uintyePqYcS = BigInt("1086")
		const byteKqWI4WR = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const byteWmalSBH = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const uintZxrOARy = BigInt("466")
		const addressMt5LDPw = accounts[2]
		const addressk5saZd3 = accounts[5]
		const addressZG8mWG = accounts[1]
		const bytekVzxFUv = "0x0514190f051f1b071b19060405131f0313121b1515031b0e1c1410121c10020e"
//		const bytes32UtB7fSg = await VatWhcXAnI.fold.call(bytev8tr0z, addressPE173ev, intMh6SqQn, {from: accounts[1]});
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(byteWmalSBH, byteKqWI4WR, uintyePqYcS, {from: accounts[1]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addressk5saZd3, addressMt5LDPw, uintZxrOARy, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addressZG8mWG, {from: accounts[0]});
//		const bytes32ElnztB5 = await VatWhcXAnI.init.call(bytekVzxFUv, {from: accounts[0]});

		await expect(VatWhcXAnI.fold.call(bytev8tr0z, addressPE173ev, intMh6SqQn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintqElkIdC = BigInt("1086")
		const byteJ5zBWiy = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const byteOV7sD1Q = "0x130c13080e1213081f1010150a0c1713130715081c1e140903ffffffff100118040905"
		const addressddvJ3BB = accounts[1]
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(byteOV7sD1Q, byteJ5zBWiy, uintqElkIdC, {from: accounts[1]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addressddvJ3BB, {from: accounts[0]});

		await expect(VatWhcXAnI.file.call(byteOV7sD1Q, byteJ5zBWiy, uintqElkIdC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnUAM6dZ = await Vat.new({from: accounts[4]});
		const addresse05Dkxl = accounts[5]
		const byteKCk5iE8 = "0x191006041a121013191f141c190e0a1c1109100a0f11121312041c1f1a080910"
		const addressU4cHflA = await VatnUAM6dZ.rely.call(addresse05Dkxl, {from: accounts[4]});
//		const bytes32wylyeag = await VatnUAM6dZ.init.call(byteKCk5iE8, {from: accounts[0]});

		await expect(VatnUAM6dZ.init.call(byteKCk5iE8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintBfvcrkP = BigInt("1086")
		const bytewxhgj9s = "0x181d0910110a1f0d1c0410181a101a071201040bffffffff101f0a1f11061401070414"
		const bytebgEIF3k = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const byteVhOMyPt = "0x0f1d0315110907000104081a18141c050c120207031d141200021c1705051c1f"
		const uintcxBneFC = BigInt("466")
		const addressvg5teJl = accounts[1]
		const addresshpWT3x = accounts[5]
		const addressme5VdZz = accounts[1]
		const intZpvx9nj = BigInt("-1419")
		const intDYrAFEw = BigInt("1985")
		const addressgLD3ova = accounts[4]
		const addressmqGGU9c = accounts[5]
		const addressKZ66vM3 = accounts[5]
		const byteehl77P = "0x141f1b131c18131b051a060a20180319141b1b021d180318061c040c040a0e0d"
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(bytebgEIF3k, bytewxhgj9s, uintBfvcrkP, {from: accounts[1]});
//		const bytes321d74lR = await VatWhcXAnI.init.call(byteVhOMyPt, {from: accounts[0]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addresshpWT3x, addressvg5teJl, uintcxBneFC, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addressme5VdZz, {from: accounts[0]});
//		const bytes32JpBAR5q = await VatWhcXAnI.frob.call(byteehl77P, addressKZ66vM3, addressmqGGU9c, addressgLD3ova, intDYrAFEw, intZpvx9nj, {from: accounts[0]});

		await expect(VatWhcXAnI.file.call(bytebgEIF3k, bytewxhgj9s, uintBfvcrkP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uinti4sWvVA = BigInt("2034")
		const addressTiC2bwv = accounts[1]
		const addressMe57m5Q = accounts[2]
		const bytec4PpuMp = "0x1512150917051c1a1c060a111e1c0504161f02051f0f0b1c051107051506190e"
		const uintZDKLKvL = BigInt("1086")
		const byteCuSEEaC = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const bytecEoctAe = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const uintCgvjsrG = BigInt("549")
		const addressmZNNM1 = accounts[1]
		const addressGQFuJSu = accounts[5]
//		const bytes32nC0dirV = await VatWhcXAnI.flux.call(bytec4PpuMp, addressMe57m5Q, addressTiC2bwv, uinti4sWvVA, {from: accounts[0]});
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(bytecEoctAe, byteCuSEEaC, uintZDKLKvL, {from: accounts[1]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addressGQFuJSu, addressmZNNM1, uintCgvjsrG, {from: accounts[5]});

		await expect(VatWhcXAnI.flux.call(bytec4PpuMp, addressMe57m5Q, addressTiC2bwv, uinti4sWvVA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const intCpDhA78 = BigInt("-1800")
		const intBPWNSAf = BigInt("-307")
		const addressafhkyo = accounts[4]
		const addressJy0MH7v = accounts[4]
		const bytethy0wED = "0x150a11190d0a091707180f1a1320100d1f0d051e1a140c0d180b1020061c2019"
		const uintrVe7KqY = BigInt("1086")
		const bytevQoL5z = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const bytevp99hCK = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const uinta4AEtG6 = BigInt("466")
		const addressmgRHA1J = accounts[1]
		const addresspSyaAOn = accounts[5]
		const addresshjqJG7J = accounts[2]
		const byteOorlOj = "0x0514190f051f1b071b19060405131f0313121b1515031b0e1c1410121c10020e"
		const uintK33eZVy = BigInt("1322")
		const bytegVTANvb = "0x061a1a1a0e0d1513001c2006070908121f0e0c1f150a1f0a12080d1e141a1a11"
		const byteajzOmyH = "0x140f1e0b1f151010150e0908011f1c17201c0c07111d060f02110809041b0b1d"
		const byteFh1xmrL = "0x06140005091b1a041003051805141315170f1106040c0f1f0416000309110b05"
//		const bytes32BMi9pk = await VatWhcXAnI.fork.call(bytethy0wED, addressJy0MH7v, addressafhkyo, intBPWNSAf, intCpDhA78, {from: accounts[3]});
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(bytevp99hCK, bytevQoL5z, uintrVe7KqY, {from: accounts[1]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addresspSyaAOn, addressmgRHA1J, uinta4AEtG6, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addresshjqJG7J, {from: accounts[0]});
//		const bytes32ElnztB5 = await VatWhcXAnI.init.call(byteOorlOj, {from: accounts[0]});
//		const uintrMfqFzr = await VatWhcXAnI.heal.call(uintK33eZVy, {from: accounts[1]});
//		await VatWhcXAnI.auth.call({from: accounts[1]});
//		const bytes32AKbsEYQ = await VatWhcXAnI.init.call(bytegVTANvb, {from: accounts[2]});
//		const bytes32K8t39to = await VatWhcXAnI.init.call(byteajzOmyH, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32PC1y5P = await VatWhcXAnI.init.call(byteFh1xmrL, {from: accounts[3]});

		await expect(VatWhcXAnI.fork.call(bytethy0wED, addressJy0MH7v, addressafhkyo, intBPWNSAf, intCpDhA78, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const intCHnojUZ = BigInt("1103")
		const intSy8HTCP = BigInt("1235")
		const addressoflbps7 = accounts[4]
		const addressjShkMaV = accounts[3]
		const addressdujmzqg = accounts[2]
		const byteajMdEuD = "0x121810101a0712131b0512121a0800100c0f000a100a19131a0a071305000c04"
		const uintgLEoR8K = BigInt("1086")
		const byteA9aGcTB = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const bytegKu2pP = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const addressAJ5gAOV = accounts[4]
//		const bytes32FbMmOSB = await VatWhcXAnI.grab.call(byteajMdEuD, addressdujmzqg, addressjShkMaV, addressoflbps7, intSy8HTCP, intCHnojUZ, {from: accounts[1]});
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(bytegKu2pP, byteA9aGcTB, uintgLEoR8K, {from: accounts[1]});
//		const addressJeIIjyv = await VatWhcXAnI.deny.call(addressAJ5gAOV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatWhcXAnI.grab.call(byteajMdEuD, addressdujmzqg, addressjShkMaV, addressoflbps7, intSy8HTCP, intCHnojUZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrXH82u5 = await Vat.new({from: accounts[3]});
		const addressJfK6y86 = accounts[1]
		const uintaLQvRXG = BigInt("680")
		const byteEPI73V6 = "0x001d1c000d1b091301190500100a0b1d1a0d0408031e0f0607070c1c0b090209"
		const addresslhIeqrW = await VatrXH82u5.deny.call(addressJfK6y86, {from: accounts[3]});
//		const bytes32sAmW1O0 = await VatrXH82u5.file.call(byteEPI73V6, uintaLQvRXG, {from: accounts[4]});
//		await VatrXH82u5.auth.call({from: accounts[0]});

		await expect(VatrXH82u5.file.call(byteEPI73V6, uintaLQvRXG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintoZXgxUH = BigInt("1086")
		const byteT09j1ee = "0x181d0910110a1f0d1cffffffff10181a101a071201040b02101f0a1f11061401070414"
		const byteuT63HJ = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(byteuT63HJ, byteT09j1ee, uintoZXgxUH, {from: accounts[1]});

		await expect(VatWhcXAnI.file.call(byteuT63HJ, byteT09j1ee, uintoZXgxUH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintqZRiEg9 = BigInt("1086")
		const byteri4JiDL = "0x181d0910110a1f0d1c0410181a101a071201040b02101f0a1f11061401070414"
		const byteTKJyvbQ = "0x130c13080e1213081f1010150a0c1713130715081c1e1409030110fffffffe18040905"
		const uintVtesa2B = BigInt("466")
		const addressCpPZIPg = accounts[1]
		const addressgyd3ZD = accounts[5]
		const addresspYR0PRm = accounts[1]
		const byteotyXAsn = "0x0514190f051f1b071b19060405131f0313121b1515031b0e1c1410121c10020e"
		const byteU5hJ99f = "0x06140005091b1a041003051805141315170f1106040c0f1f0416000309110b05"
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(byteTKJyvbQ, byteri4JiDL, uintqZRiEg9, {from: accounts[1]});
//		const addressHYkbl6 = await VatWhcXAnI.suck.call(addressgyd3ZD, addressCpPZIPg, uintVtesa2B, {from: accounts[5]});
//		const addressjVUv7S5 = await VatWhcXAnI.nope.call(addresspYR0PRm, {from: accounts[0]});
//		const bytes32ElnztB5 = await VatWhcXAnI.init.call(byteotyXAsn, {from: accounts[0]});
//		const bytes32PC1y5P = await VatWhcXAnI.init.call(byteU5hJ99f, {from: accounts[3]});

		await expect(VatWhcXAnI.file.call(byteTKJyvbQ, byteri4JiDL, uintqZRiEg9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWhcXAnI = await Vat.new({from: accounts[1]});
		const uintsA44Hh = BigInt("1086")
		const byteRAi3PrM = "0x181d0910110a1f0d1c0410181a101a071201040bfffffffe101f0a1f11061401070414"
		const byteeQdQOYN = "0x130c13080e1213081f1010150a0c1713130715081c1e14090301100118040905"
		const uintCKc0H1H = BigInt("819")
		const intbpnYZGh = BigInt("-481")
		const intWRPL5q = BigInt("-1816")
		const addressAf07Lqb = accounts[5]
		const addressg2O5vGn = accounts[2]
		const bytethrTyBt = "0x1f120c091e181b1108130d11061811161604170803030d1c1802041f11181717"
//		const bytes32k1WVaDB = await VatWhcXAnI.file.call(byteeQdQOYN, byteRAi3PrM, uintsA44Hh, {from: accounts[1]});
//		const uintGhRQ4At = await VatWhcXAnI.heal.call(uintCKc0H1H, {from: accounts[2]});
//		const bytes32LjTyy6E = await VatWhcXAnI.fork.call(bytethrTyBt, addressg2O5vGn, addressAf07Lqb, intWRPL5q, intbpnYZGh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatWhcXAnI.file.call(byteeQdQOYN, byteRAi3PrM, uintsA44Hh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})