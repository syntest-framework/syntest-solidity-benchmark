const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringpWevYks = "E72SVuLcjpwBtis3kwzhJWCmuL5lrKHdvF8rInYgadVpL"
		const stringJQ068ST = "K0rOLTXAQTFcQYHtXD6Bw2gCE55YxvWzEmSJHOLJwvvkh6o7LBkn4bC45oKRPeQv86YRH"
		const uintpB2FUGt = BigInt("1996")
		const FinalVNndnJ8 = await Final.new(stringpWevYks, stringJQ068ST, uintpB2FUGt, {from: accounts[4]});
		const addressbmZ7bv = accounts[1]
		const uintL1GtYeq = BigInt("945")
		const addressav3K9V0 = accounts[0]
		const uintZsFTuk1 = BigInt("1895")
		const addressWuroOZE = accounts[0]
		const uintrz60uCz = BigInt("44")
		const addressuhHjn0U = accounts[5]
		const addressIjqogUb = accounts[4]
		const uintrDoTvZm = BigInt("767")
		const addressItNIgOg = accounts[1]
		const addressyO5BkpQ = accounts[0]
		const uintUv0mbTb = await FinalVNndnJ8.balanceOf.call(addressbmZ7bv, {from: accounts[5]});
//		const boolasp4zct = await FinalVNndnJ8.transfer.call(addressav3K9V0, uintL1GtYeq, {from: accounts[0]});
//		const booltge9LTz = await FinalVNndnJ8.transfer.call(addressWuroOZE, uintZsFTuk1, {from: accounts[3]});
//		const boolxcE9KXi = await FinalVNndnJ8.approve.call(addressuhHjn0U, uintrz60uCz, {from: accounts[0]});
//		const boolYLG7bqF = await FinalVNndnJ8.transferownership.call(addressIjqogUb, {from: accounts[2]});
//		const boolWwpJu7s = await FinalVNndnJ8.transferFrom.call(addressyO5BkpQ, addressItNIgOg, uintrDoTvZm, {from: accounts[3]});

		assert.equal(uintUv0mbTb, BigInt("0"))
		await expect(FinalVNndnJ8.transfer.call(addressav3K9V0, uintL1GtYeq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSpNxrQa = "6UM7"
		const stringXF0toR = "8JwxkQYSGoHC3uVLaPgi2WYbVA4oQR9sks4egdhOOk7Yrv73jvCHS8uaEO7xsbB8hAvMdnIi"
		const uintjVvj6XA = BigInt("66")
		const FinalX7KfxZz = await Final.new(stringSpNxrQa, stringXF0toR, uintjVvj6XA, {from: accounts[2]});
		const uintYRXFaQT = BigInt("2011")
		const addressxMOD5b = accounts[4]
		const addressJJQJNNT = accounts[4]
		const uintMIicuUt = BigInt("1812")
		const addresst7g6aqp = accounts[0]
		const addressCRC1P6s = accounts[3]
		const uint8xZKEv0q = await FinalX7KfxZz.decimals.call({from: accounts[0]});
//		const boolcFTSQLf = await FinalX7KfxZz.decreaseAllowance.call(addressxMOD5b, uintYRXFaQT, {from: accounts[1]});
//		const uintpIGd9B = await FinalX7KfxZz.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintRlHSKUE = await FinalX7KfxZz.balanceOf.call(addressJJQJNNT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbGY43Xz = await FinalX7KfxZz.transferFrom.call(addressCRC1P6s, addresst7g6aqp, uintMIicuUt, {from: accounts[3]});

		assert.equal(uint8xZKEv0q, BigInt("18"))
		await expect(FinalX7KfxZz.decreaseAllowance.call(addressxMOD5b, uintYRXFaQT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringB43oqLO = "JeOUGMPB"
		const stringZr4waZz = ""
		const uintEB4h2P7 = BigInt("202")
		const FinalHesVIrg = await Final.new(stringB43oqLO, stringZr4waZz, uintEB4h2P7, {from: accounts[4]});
		const uintxZeuIMQ = BigInt("1020")
		const addressOE5ASyX = accounts[2]
		const uintMnYJUcA = BigInt("1848")
		const addressNuZEa9U = "0x0000000000000000000000000000000000000001"
		const uintw75gwYS = BigInt("1105")
		const addressPx9Itq8 = accounts[2]
		const uintlpTAPMH = BigInt("1772")
		const addressVm13TIU = accounts[4]
		const booltY351c = await FinalHesVIrg.approve.call(addressOE5ASyX, uintxZeuIMQ, {from: accounts[1]});
		const stringRnNE8HV = await FinalHesVIrg.symbol.call({from: accounts[0]});
//		const boolpyRtONu = await FinalHesVIrg.approveAndCall.call(addressNuZEa9U, uintMnYJUcA, {from: accounts[1]});
//		const stringDofvAyA = await FinalHesVIrg.symbol.call({from: accounts[0]});
//		const boolCsHLHjM = await FinalHesVIrg.approve.call(addressPx9Itq8, uintw75gwYS, {from: accounts[0]});
//		const boolkkocsBX = await FinalHesVIrg.increaseAllowance.call(addressVm13TIU, uintlpTAPMH, {from: accounts[5]});

		assert.equal(booltY351c, true)
		assert.equal(stringRnNE8HV, "")
		await expect(FinalHesVIrg.approveAndCall.call(addressNuZEa9U, uintMnYJUcA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringwzShUbD = "VFo7JQmG64c4cRf1L7xzHMHw6yMB0PU3NaSP1KlAPdrPrL0vHKigbX0pfLDdCssOYe8Ded78aEfQ6GXnES9vJqJIL3b"
		const stringysNL4ki = "d6"
		const uintYqQtVZC = BigInt("66")
		const FinalnZ35MeI = await Final.new(stringwzShUbD, stringysNL4ki, uintYqQtVZC, {from: accounts[1]});
		const addressVGsC5Xb = "0x0000000000000000000000000000000000000001"
		const uintSEwTnnm = BigInt("476")
		const addressbCaZWAl = accounts[4]
		const uint4pOp4Q = BigInt("208")
		const addresswKI6a0E = accounts[2]
		const uintHCZaUQP = BigInt("1478")
		const addresshO6OK0P = accounts[4]
		const addressvU9RBVe = accounts[5]
//		const boolYJNAAvy = await FinalnZ35MeI.transferownership.call(addressVGsC5Xb, {from: accounts[3]});
//		const uint8PSyf9qm = await FinalnZ35MeI.decimals.call({from: accounts[4]});
//		const boolhfZTQ5m = await FinalnZ35MeI.transfer.call(addressbCaZWAl, uintSEwTnnm, {from: accounts[1]});
//		const bools3Qr9C = await FinalnZ35MeI.transfer.call(addresswKI6a0E, uint4pOp4Q, {from: accounts[1]});
//		const boolJK9E1qL = await FinalnZ35MeI.transfer.call(addresshO6OK0P, uintHCZaUQP, {from: accounts[3]});
//		const uintfMI6E3G = await FinalnZ35MeI.balanceOf.call(addressvU9RBVe, {from: accounts[1]});

		await expect(FinalnZ35MeI.transferownership.call(addressVGsC5Xb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringt4lcsE = "xNsefXXOLPQN1ffyVeZ4x9v1q5njAH9yw6ihFNhyMfL2XA"
		const stringObyKLf = "l287OS9pRMgAfsKXH52gCyi548LZbyergt6ki62B2FrPzR6jZ"
		const uintgUoAUyq = BigInt("639")
		const Finalysup1JC = await Final.new(stringt4lcsE, stringObyKLf, uintgUoAUyq, {from: accounts[4]});
		const uintqgnjpeo = BigInt("1585")
		const addressJHmtytT = accounts[0]
		const uintmXjGLP2 = BigInt("1587")
		const addressHegqjag = accounts[4]
		const uintPJMzV79 = BigInt("1502")
		const addressQiT5VOL = accounts[3]
		const uinthkztUl = BigInt("1668")
		const addressgwdKJOt = accounts[1]
		const boolKu92SRi = await Finalysup1JC.transfer.call(addressJHmtytT, uintqgnjpeo, {from: accounts[4]});
		const boolz93GcfT = await Finalysup1JC.approve.call(addressHegqjag, uintmXjGLP2, {from: accounts[3]});
		const stringvi6cfW2 = await Finalysup1JC.name.call({from: accounts[0]});
		const boolud3yGT = await Finalysup1JC.approve.call(addressQiT5VOL, uintPJMzV79, {from: accounts[4]});
		const uint8m3f7bUm = await Finalysup1JC.decimals.call({from: accounts[2]});
//		const booluhDtegr = await Finalysup1JC.transfer.call(addressgwdKJOt, uinthkztUl, {from: accounts[3]});

		assert.equal(boolKu92SRi, true)
		assert.equal(boolud3yGT, true)
		assert.equal(boolz93GcfT, true)
		assert.equal(stringvi6cfW2, "xNsefXXOLPQN1ffyVeZ4x9v1q5njAH9yw6ihFNhyMfL2XA")
		assert.equal(uint8m3f7bUm, BigInt("18"))
		await expect(Finalysup1JC.transfer.call(addressgwdKJOt, uinthkztUl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringatZmvRT = "rM88WFtT5HilCqQ0okdYhuC7PzKOsaMIT3U1osodaXNYZjn8a0MHntEtCH4eg4VosIwFbiv7EncLbd7z1m38V"
		const stringvUEgqx = "h"
		const uintuTAmUeB = BigInt("220")
		const FinalvBioP8V = await Final.new(stringatZmvRT, stringvUEgqx, uintuTAmUeB, {from: "0x0000000000000000000000000000000000000001"});
		const uintS2QPFx2 = BigInt("1091")
		const addressvSqv8rB = accounts[4]
		const addresswMks2nw = accounts[1]
		const uintaSNHTpf = BigInt("1724")
		const addressf9epBEo = accounts[3]
		const addressoXzrScD = accounts[2]
		const boolyWCUkNs = await FinalvBioP8V.increaseAllowance.call(addressvSqv8rB, uintS2QPFx2, {from: accounts[2]});
		const uintWLvRgWj = await FinalvBioP8V.balanceOf.call(addresswMks2nw, {from: accounts[2]});
		const boolbw6xs6m = await FinalvBioP8V.approve.call(addressf9epBEo, uintaSNHTpf, {from: accounts[3]});
		const uintetyv9tc = await FinalvBioP8V.balanceOf.call(addressoXzrScD, {from: accounts[1]});
		const uintQX0mW7h = await FinalvBioP8V.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Final', async () => {
		const stringB43oqLO = "JeOUGMPB"
		const stringZr4waZz = ""
		const uintrbP7Rgh = BigInt("202")
		const FinalHesVIrg = await Final.new(stringB43oqLO, stringZr4waZz, uintrbP7Rgh, {from: accounts[4]});
		const addressucv2Sy = accounts[1]
		const addressecmXJqL = accounts[4]
		const uintL2TSfP6 = BigInt("1114")
		const address0BXoSp = accounts[4]
		const addressaATYnL = accounts[2]
		const addressvQPgsR = accounts[3]
		const uintO47Tf61 = BigInt("1848")
		const addressHB5JAR = "0x0000000000000000000000000000000000000001"
		const addressgwEYj2u = accounts[4]
		const addressDiVBLB1 = accounts[3]
		const uintSRp7ODc = BigInt("1656")
		const addressDYHFdAg = accounts[4]
		const uintUF8avGQ = BigInt("1772")
		const addressvNiLgCb = accounts[4]
		const uintZdWFera = BigInt("1400")
		const addressJ5U0DO = accounts[3]
		const uintqQLNdK = await FinalHesVIrg.totalSupply.call({from: accounts[2]});
		const uintCM4h6G = await FinalHesVIrg.allowance.call(addressecmXJqL, addressucv2Sy, {from: accounts[2]});
		const stringn9ROaXx = await FinalHesVIrg.name.call({from: accounts[4]});
		const boolcC2MHI2 = await FinalHesVIrg.approveAndCall.call(address0BXoSp, uintL2TSfP6, {from: accounts[4]});
		const stringLhsVoJL = await FinalHesVIrg.name.call({from: accounts[2]});
		const uintpN9pGls = await FinalHesVIrg.totalSupply.call({from: accounts[1]});
		const uintSLpv08 = await FinalHesVIrg.allowance.call(addressvQPgsR, addressaATYnL, {from: accounts[1]});
//		const boolpyRtONu = await FinalHesVIrg.approveAndCall.call(addressHB5JAR, uintO47Tf61, {from: accounts[1]});
//		const uintoeRDsDV = await FinalHesVIrg.allowance.call(addressDiVBLB1, addressgwEYj2u, {from: accounts[0]});
//		const stringDofvAyA = await FinalHesVIrg.symbol.call({from: accounts[0]});
//		const booll30Eej = await FinalHesVIrg.approveAndCall.call(addressDYHFdAg, uintSRp7ODc, {from: accounts[3]});
//		const boolkkocsBX = await FinalHesVIrg.increaseAllowance.call(addressvNiLgCb, uintUF8avGQ, {from: accounts[5]});
//		const bool2il1nG = await FinalHesVIrg.approve.call(addressJ5U0DO, uintZdWFera, {from: accounts[0]});

		assert.equal(boolcC2MHI2, true)
		assert.equal(stringLhsVoJL, "JeOUGMPB")
		assert.equal(stringn9ROaXx, "JeOUGMPB")
		assert.equal(uintCM4h6G, BigInt("0"))
		assert.equal(uintSLpv08, BigInt("0"))
		assert.equal(uintpN9pGls, BigInt("202000000000000000000"))
		assert.equal(uintqQLNdK, BigInt("202000000000000000000"))
		await expect(FinalHesVIrg.approveAndCall.call(addressHB5JAR, uintO47Tf61, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringulYZQ8q = "HHBnSQUpbCfeAfaXF6OlBtrge0iYryqGQURSum7XwqtSJBxZQsguRovskRRzBS14fFoGBq9HLatnrkQYV8STnwx3fEPldWLyj1"
		const stringtoqT9EC = "kKGaBoVSqjW1LaVs06dhSJR31glrOcCP9M4GyGR4KAP9Y"
		const uintskhyYdt = BigInt("38")
		const FinalqFQiA0S = await Final.new(stringulYZQ8q, stringtoqT9EC, uintskhyYdt, {from: accounts[1]});
		const uintCjE4qQW = BigInt("1623")
		const addressFkADYu3 = accounts[2]
		const uintTxdXqNo = BigInt("0")
		const addressFkjgaUl = accounts[3]
		const addressHr4nhp = "0x0000000000000000000000000000000000000001"
		const boolvcBLQW = await FinalqFQiA0S.transfer.call(addressFkADYu3, uintCjE4qQW, {from: accounts[1]});
		const boolupnAQKK = await FinalqFQiA0S.transferFrom.call(addressHr4nhp, addressFkjgaUl, uintTxdXqNo, {from: accounts[4]});

		assert.equal(boolupnAQKK, true)
		assert.equal(boolvcBLQW, true)
	});

	it('test for Final', async () => {
		const string8GEH5L = "SwAqmDlSy5ruEiQmgDnx1X6C1aLHeknxM9t1CnMhbFqEaLNJBEDSb"
		const stringR5uc2WP = "Aj1Gn65BJE0SywPAkWQjsqtE7HGDfMBVhiM4UKpkGPEjoVQUQ9Qfw2uhox"
		const uintVfKzGj = BigInt("790")
		const FinalB0feWkE = await Final.new(string8GEH5L, stringR5uc2WP, uintVfKzGj, {from: accounts[2]});
		const uint9jZNLJ = BigInt("1230")
		const addressNORcDvJ = accounts[1]
		const addressvMXKYWG = accounts[4]
		const addresslpWolgH = accounts[5]
		const addresscnXhHZU = accounts[1]
		const addressrGykIkF = accounts[0]
		const uintK2nWXU = BigInt("1428")
		const addressUDxgKsK = "0x0000000000000000000000000000000000000001"
		const uintEWPxx4H = BigInt("0")
		const addresscTOJof2 = accounts[0]
		const uintEsxH6v1 = BigInt("1537")
		const addressKEruLQ = accounts[4]
		const uintGqnbNk7 = BigInt("732")
		const addressa5P5s0r = accounts[5]
		const uintmNc99Iy = BigInt("534")
		const addressfOBjiFR = accounts[2]
		const boolu37itoX = await FinalB0feWkE.approve.call(addressNORcDvJ, uint9jZNLJ, {from: accounts[1]});
		const uintERne2Va = await FinalB0feWkE.allowance.call(addresslpWolgH, addressvMXKYWG, {from: accounts[3]});
		const uintAHlhjw = await FinalB0feWkE.allowance.call(addressrGykIkF, addresscnXhHZU, {from: accounts[3]});
		const boolodBuOsG = await FinalB0feWkE.approve.call(addressUDxgKsK, uintK2nWXU, {from: accounts[2]});
		const boolND2ueb1 = await FinalB0feWkE.approveAndCall.call(addresscTOJof2, uintEWPxx4H, {from: accounts[2]});
		const boolt2ikv9V = await FinalB0feWkE.approveAndCall.call(addressKEruLQ, uintEsxH6v1, {from: accounts[2]});
//		const boolaKJxCc = await FinalB0feWkE.transfer.call(addressa5P5s0r, uintGqnbNk7, {from: accounts[0]});
//		const uintEoB7OuM = await FinalB0feWkE.totalSupply.call({from: accounts[0]});
//		const boolf0mXftv = await FinalB0feWkE.approveAndCall.call(addressfOBjiFR, uintmNc99Iy, {from: accounts[2]});
//		const stringswXjIT4 = await FinalB0feWkE.name.call({from: accounts[4]});

		assert.equal(boolND2ueb1, true)
		assert.equal(boolodBuOsG, true)
		assert.equal(boolt2ikv9V, true)
		assert.equal(boolu37itoX, true)
		assert.equal(uintAHlhjw, BigInt("0"))
		assert.equal(uintERne2Va, BigInt("0"))
		await expect(FinalB0feWkE.transfer.call(addressa5P5s0r, uintGqnbNk7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})