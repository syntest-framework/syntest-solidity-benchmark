const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uinttegmofJ = BigInt("1374")
		const stringf0fM9e0 = "P1kZ2gSBGQiIunfEeh5ldAM0RtjFV7kqdrfd3EwRafKJ6hs5cfeXRq6AUNJuSieiCIX8tRVF2A8urliHVn8SHbtI"
		const stringgBu5FYc = "POIcqJFXQ"
		const uintmFJy2lj = BigInt("425")
		const ANRXTokenbc5wtwM = await ANRXToken.new(uinttegmofJ, stringf0fM9e0, stringgBu5FYc, uintmFJy2lj, {from: accounts[1]});
		const uintUmh3vFz = BigInt("458")
		const uintz9vWhZJ = BigInt("900")
		const addressd09Npym = accounts[5]
		const addressJRY35bf = accounts[1]
		const uintIwR4Tt2 = BigInt("651")
		const addressii54N2W = accounts[4]
//		const uintGJyVwJp = await ANRXTokenbc5wtwM.issue.call(uintUmh3vFz, {from: accounts[2]});
//		const boolJqxYFLP = await ANRXTokenbc5wtwM.transferFrom.call(addressJRY35bf, addressd09Npym, uintz9vWhZJ, {from: accounts[0]});
//		const boolj7ATAxk = await ANRXTokenbc5wtwM.transfer.call(addressii54N2W, uintIwR4Tt2, {from: accounts[4]});

		await expect(ANRXTokenbc5wtwM.issue.call(uintUmh3vFz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintisNiPro = BigInt("436")
		const stringdPXR5Or = "vhUaURHqaWOXxgMeWcfJ7BzIj6YW"
		const stringOFXxnFy = "HgcvHFX3HqN4WdHQL2YN1HsXPbgGehHNYHUmsxxUqK48Fy4GjDUL7iyhQZvUuxuiTzMivy5rhPt3MChE4cP"
		const uintXRx3Jd = BigInt("1218")
		const ANRXTokenTo8NVnv = await ANRXToken.new(uintisNiPro, stringdPXR5Or, stringOFXxnFy, uintXRx3Jd, {from: accounts[1]});
		const addressgYlcWLx = accounts[0]
		const uintEGoNEOt = BigInt("1890")
		const uintiX3xEjp = BigInt("476")
		const uintp7jOgCB = BigInt("1828")
		const uintkD9gqQ = BigInt("1571")
		const addressNfpGdn = accounts[5]
		const addressZoVi0af = accounts[3]
		const uintvI729Eu = BigInt("1319")
		const addressg8RerWW = "0x0000000000000000000000000000000000000001"
		const addresskqbnJte = accounts[1]
		const uintYl7LWJt = BigInt("579")
		const uintsml8Wvs = await ANRXTokenTo8NVnv.balanceOf.call(addressgYlcWLx, {from: accounts[1]});
//		const uintJEUpam = await ANRXTokenTo8NVnv.setParams.call(uintiX3xEjp, uintEGoNEOt, {from: accounts[0]});
//		const uintLy4p3wJ = await ANRXTokenTo8NVnv.issue.call(uintp7jOgCB, {from: accounts[3]});
//		const boolAcGmAJX = await ANRXTokenTo8NVnv.transferFrom.call(addressZoVi0af, addressNfpGdn, uintkD9gqQ, {from: accounts[5]});
//		const boolEXVyALn = await ANRXTokenTo8NVnv.transferFrom.call(addresskqbnJte, addressg8RerWW, uintvI729Eu, {from: accounts[2]});
//		const uintWXhI66b = await ANRXTokenTo8NVnv.issue.call(uintYl7LWJt, {from: accounts[3]});

		assert.equal(uintsml8Wvs, BigInt("0"))
		await expect(ANRXTokenTo8NVnv.setParams.call(uintiX3xEjp, uintEGoNEOt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlkaBGji = BigInt("308")
		const stringiaKlcVg = "flgzFTcEvvyLyKjARtYDSSPgHGlX9qPtbOsiBgHqD4GS8LOpGskMvYbVLOm4VfKTyA3QF"
		const stringzY5Tv5U = "eUiqqyL1QT6"
		const uintdHhRQgM = BigInt("1606")
		const ANRXTokenLWc7P6 = await ANRXToken.new(uintlkaBGji, stringiaKlcVg, stringzY5Tv5U, uintdHhRQgM, {from: accounts[1]});
		const addressUg6YT2z = accounts[2]
		const uintbHWuoMP = BigInt("344")
		const addresss1VPCYH = accounts[2]
		const addressyF1CHLq = accounts[1]
		const uinttWwA44D = BigInt("969")
		const uintPsVI9xe = await ANRXTokenLWc7P6.balanceOf.call(addressUg6YT2z, {from: accounts[3]});
		const booltZdYaC = await ANRXTokenLWc7P6.approve.call(addresss1VPCYH, uintbHWuoMP, {from: accounts[2]});
		const uintrHMmySh = await ANRXTokenLWc7P6.totalSupply.call({from: accounts[4]});
//		const addressRwerImy = await ANRXTokenLWc7P6.deprecate.call(addressyF1CHLq, {from: accounts[3]});
//		const uintSk3Wb3k = await ANRXTokenLWc7P6.redeem.call(uinttWwA44D, {from: accounts[1]});

		assert.equal(booltZdYaC, true)
		assert.equal(uintPsVI9xe, BigInt("0"))
		assert.equal(uintrHMmySh, BigInt("308"))
		await expect(ANRXTokenLWc7P6.deprecate.call(addressyF1CHLq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintaUtxY7H = BigInt("1559")
		const stringWNnWZit = "DKKzFrRcqR8LaSKCwS4ex8"
		const stringHiKMaab = "blB9gIiCuwy8nW4Iq7qKy5rUaIPhuYoyFHR13Y8b8R7BCmdU75ehSbuB7QCiQik"
		const uintyzTLr0K = BigInt("1579")
		const ANRXTokenTEaZUJU = await ANRXToken.new(uintaUtxY7H, stringWNnWZit, stringHiKMaab, uintyzTLr0K, {from: accounts[0]});
		const addressNAw0aw = accounts[5]
		const addressKIrjJah = accounts[3]
		const uinthxTaJB = BigInt("907")
		const addressjFVKYVk = accounts[3]
		const addressufELBO = accounts[1]
		const uintoQDWVzD = await ANRXTokenTEaZUJU.allowance.call(addressKIrjJah, addressNAw0aw, {from: "0x0000000000000000000000000000000000000001"});
//		const uinttSoVuwY = await ANRXTokenTEaZUJU.issue.call(uinthxTaJB, {from: accounts[2]});
//		const uintShwMNe = await ANRXTokenTEaZUJU.allowance.call(addressufELBO, addressjFVKYVk, {from: accounts[4]});

		assert.equal(uintoQDWVzD, BigInt("0"))
		await expect(ANRXTokenTEaZUJU.issue.call(uinthxTaJB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintJTfqEv = BigInt("1514")
		const stringnDUVTy0 = "zScbNvaibMvzUWbLxI7JdHpepxaoXFt0B1xLv8JkXwdI1qplqf57NYafl1RkSa"
		const stringi9EPfQ = "iEHPUJWNibIk77t2u2Pb"
		const uinto9K9tXz = BigInt("1043")
		const ANRXTokenSw8TT56 = await ANRXToken.new(uintJTfqEv, stringnDUVTy0, stringi9EPfQ, uinto9K9tXz, {from: accounts[3]});
		const uintrrkkhvQ = BigInt("1090")
		const addressBoEv0fA = accounts[2]
		const uintTfWkRnk = BigInt("428")
		const addresspJbkgTD = accounts[4]
		const uinthccDeFh = BigInt("791")
		const boolkK6TgEb = await ANRXTokenSw8TT56.transfer.call(addressBoEv0fA, uintrrkkhvQ, {from: accounts[3]});
//		const uintrZRZHbt = await ANRXTokenSw8TT56.issue.call(uintTfWkRnk, {from: accounts[5]});
//		const uintcOXGqXX = await ANRXTokenSw8TT56.balanceOf.call(addresspJbkgTD, {from: accounts[5]});
//		const uintDIGz4KW = await ANRXTokenSw8TT56.redeem.call(uinthccDeFh, {from: accounts[3]});

		assert.equal(boolkK6TgEb, true)
		await expect(ANRXTokenSw8TT56.issue.call(uintTfWkRnk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintwrbkif1 = BigInt("308")
		const stringiaKlcVg = "flgzFTcEvvyLyKjARtYDSSPgHGlX9qPtbOsiBgHqD4GS8LOpGskMvYbVLOm4VfKTyA3QF"
		const stringzY5Tv5U = "eUiqqyL1QT6"
		const uintC1jgayW = BigInt("1606")
		const ANRXTokenLWc7P6 = await ANRXToken.new(uintwrbkif1, stringiaKlcVg, stringzY5Tv5U, uintC1jgayW, {from: accounts[1]});
		const uintBOLCU0I = BigInt("1530")
		const addressjs7ZF6U = accounts[0]
		const addressHXmDxRU = accounts[4]
		const addressxk8Bv2 = accounts[2]
		const uintdiIiujn = BigInt("344")
		const addressIOV8lsO = accounts[2]
		const addressM8VvSAn = accounts[1]
		const uintVCHlz7V = BigInt("969")
//		const boolMd2B4Df = await ANRXTokenLWc7P6.transferFrom.call(addressHXmDxRU, addressjs7ZF6U, uintBOLCU0I, {from: accounts[4]});
//		const uintPsVI9xe = await ANRXTokenLWc7P6.balanceOf.call(addressxk8Bv2, {from: accounts[3]});
//		const booltZdYaC = await ANRXTokenLWc7P6.approve.call(addressIOV8lsO, uintdiIiujn, {from: accounts[2]});
//		const uintrHMmySh = await ANRXTokenLWc7P6.totalSupply.call({from: accounts[4]});
//		const addressRwerImy = await ANRXTokenLWc7P6.deprecate.call(addressM8VvSAn, {from: accounts[3]});
//		const uintSk3Wb3k = await ANRXTokenLWc7P6.redeem.call(uintVCHlz7V, {from: accounts[1]});

		await expect(ANRXTokenLWc7P6.transferFrom.call(addressHXmDxRU, addressjs7ZF6U, uintBOLCU0I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintcj8p9rf = BigInt("308")
		const stringiaKlcVg = "flgzFTcEvvyLyKjARtYDSSPgHGlX9qPtbOsiBgHqD4GS8LOpGskMvYbVLOm4VfKTyA3QF"
		const stringzY5Tv5U = "eUiqqyL1QT6"
		const uintG63JVha = BigInt("1606")
		const ANRXTokenLWc7P6 = await ANRXToken.new(uintcj8p9rf, stringiaKlcVg, stringzY5Tv5U, uintG63JVha, {from: accounts[1]});
		const uintEF194yW = BigInt("280")
		const uintv3RZmw9 = BigInt("216")
		const uintSc8d3C8 = BigInt("1530")
		const addressEYgq2Sb = accounts[0]
		const addressSN3l8XB = accounts[4]
		const addressS9ykZU5 = accounts[3]
		const uintMPQQCPT = BigInt("344")
		const addressIiCZRw = accounts[2]
		const uintcmovoL1 = BigInt("737")
		const addressDcmUaoZ = accounts[4]
		const uintYkFGTk = BigInt("67")
		const uintkZ5B2P6 = BigInt("1022")
		const address84Lium = accounts[1]
		const uintI4792y4 = BigInt("324")
		const uintrp21hwd = BigInt("919")
		const uintzxRpNYb = await ANRXTokenLWc7P6.issue.call(uintEF194yW, {from: accounts[1]});
//		const uintbRXueHA = await ANRXTokenLWc7P6.redeem.call(uintv3RZmw9, {from: accounts[0]});
//		const boolMd2B4Df = await ANRXTokenLWc7P6.transferFrom.call(addressSN3l8XB, addressEYgq2Sb, uintSc8d3C8, {from: accounts[4]});
//		const uintPsVI9xe = await ANRXTokenLWc7P6.balanceOf.call(addressS9ykZU5, {from: accounts[3]});
//		const booltZdYaC = await ANRXTokenLWc7P6.approve.call(addressIiCZRw, uintMPQQCPT, {from: accounts[2]});
//		const uintrHMmySh = await ANRXTokenLWc7P6.totalSupply.call({from: accounts[4]});
//		const bool1DJgQc = await ANRXTokenLWc7P6.approve.call(addressDcmUaoZ, uintcmovoL1, {from: accounts[0]});
//		const uintTu637zl = await ANRXTokenLWc7P6.setParams.call(uintkZ5B2P6, uintYkFGTk, {from: "0x0000000000000000000000000000000000000001"});
//		const addressRwerImy = await ANRXTokenLWc7P6.deprecate.call(address84Lium, {from: accounts[3]});
//		const uintMvJ8WY = await ANRXTokenLWc7P6.redeem.call(uintI4792y4, {from: accounts[2]});
//		const uintSk3Wb3k = await ANRXTokenLWc7P6.redeem.call(uintrp21hwd, {from: accounts[1]});

		await expect(ANRXTokenLWc7P6.redeem.call(uintv3RZmw9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinth1lp4KV = BigInt("308")
		const stringiaKlcVg = "flgzFTcEvvyLyKjARtYDSSPgHGlX9qPtbOsiBgHqD4GS8LOpGskMvYbVLOm4VfKTyA3QF"
		const stringzY5Tv5U = "eUiqqyL1QT6"
		const uintLaSshaH = BigInt("1606")
		const ANRXTokenLWc7P6 = await ANRXToken.new(uinth1lp4KV, stringiaKlcVg, stringzY5Tv5U, uintLaSshaH, {from: accounts[1]});
		const uintHxtRPvh = BigInt("344")
		const addressEpQjyyY = accounts[2]
		const uintKo8F2Wp = BigInt("969")
		const booltZdYaC = await ANRXTokenLWc7P6.approve.call(addressEpQjyyY, uintHxtRPvh, {from: accounts[2]});
		const uintrHMmySh = await ANRXTokenLWc7P6.totalSupply.call({from: accounts[4]});
//		const uintSk3Wb3k = await ANRXTokenLWc7P6.redeem.call(uintKo8F2Wp, {from: accounts[1]});

		assert.equal(booltZdYaC, true)
		assert.equal(uintrHMmySh, BigInt("308"))
		await expect(ANRXTokenLWc7P6.redeem.call(uintKo8F2Wp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintY5LnfJM = BigInt("1916")
		const stringBOBGsp5 = "BDecCVqmnZxcHtsdSKp15ma2wqF98xm9C"
		const stringyfdKC4E = "wECzvNY3vhPtyOtAosNTYJ6bWaeb4lSSA4kH9tfxONWjTKjSneuLtkF0udehqXZ6VyCpLAWMEm7d7vm7wzNMDfiVKYqr"
		const uintzAHGk2Q = BigInt("674")
		const ANRXTokent2HaCnA = await ANRXToken.new(uintY5LnfJM, stringBOBGsp5, stringyfdKC4E, uintzAHGk2Q, {from: accounts[2]});
		const addressBAWj5qm = accounts[0]
		const addressdXMhs69 = accounts[1]
		const addressDen23L7 = accounts[2]
		const addressyZZrWh = accounts[3]
		const uintT89ptrk = BigInt("267")
		const uintFMKtsNw = BigInt("645")
		const addressvghmZq = accounts[2]
		const addresscYIV9hj = accounts[1]
		const addressqj85cex = await ANRXTokent2HaCnA.deprecate.call(addressBAWj5qm, {from: accounts[2]});
		const uintXfdIV7E = await ANRXTokent2HaCnA.allowance.call(addressDen23L7, addressdXMhs69, {from: "0x0000000000000000000000000000000000000001"});
		const uintYqEXmAB = await ANRXTokent2HaCnA.balanceOf.call(addressyZZrWh, {from: accounts[4]});
//		const uintRkURMBg = await ANRXTokent2HaCnA.redeem.call(uintT89ptrk, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHH0wXr4 = await ANRXTokent2HaCnA.transfer.call(addressvghmZq, uintFMKtsNw, {from: accounts[1]});
//		const uintp2voyRr = await ANRXTokent2HaCnA.balanceOf.call(addresscYIV9hj, {from: accounts[0]});

		assert.equal(uintXfdIV7E, BigInt("0"))
		assert.equal(uintYqEXmAB, BigInt("0"))
		await expect(ANRXTokent2HaCnA.redeem.call(uintT89ptrk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintyJJkB7o = BigInt("1916")
		const stringBOBGsp5 = "BDecCVqmnZxcHtsdSKp15ma2wqF98xm9C"
		const stringyfdKC4E = "wECzvNY3vhPtyOtAosNTYJ6bWaeb4lSSA4kH9tfxONWjTKjSneuLtkF0udehqXZ6VyCpLAWMEm7d7vm7wzNMDfiVKYqr"
		const uintSJf4Hjy = BigInt("674")
		const ANRXTokent2HaCnA = await ANRXToken.new(uintyJJkB7o, stringBOBGsp5, stringyfdKC4E, uintSJf4Hjy, {from: accounts[2]});
		const uintrDP7TNf = BigInt("1473")
		const uintpUtS2dF = BigInt("1041")
		const addresscFJuNiw = accounts[2]
		const uintUKsVJGL = BigInt("1404")
		const addressLDfCYa = accounts[0]
//		const uintFWdRQo5 = await ANRXTokent2HaCnA.setParams.call(uintpUtS2dF, uintrDP7TNf, {from: accounts[2]});
//		const uintp2voyRr = await ANRXTokent2HaCnA.balanceOf.call(addresscFJuNiw, {from: accounts[0]});
//		const boolfyesc7O = await ANRXTokent2HaCnA.transfer.call(addressLDfCYa, uintUKsVJGL, {from: accounts[0]});

		await expect(ANRXTokent2HaCnA.setParams.call(uintpUtS2dF, uintrDP7TNf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintaGXBhGA = BigInt("1462")
		const stringjSR9xKT = "Zq8VdbyFgW5Gy5O1cWX4ByRlK8qQGMizZtgitQo8Ub6qtckDqnyiywvFD9LsCBUyzuC8LByGVhKioqZ"
		const stringx0gk7q = "BrT0lzKYhPeb6DNWSTxusb1XCtsV8hTVvrJuVltVNFFQS3bQkCe1TCXh1nXI9"
		const uintMxZjOn8 = BigInt("1204")
		const ANRXTokenhip8cyt = await ANRXToken.new(uintaGXBhGA, stringjSR9xKT, stringx0gk7q, uintMxZjOn8, {from: "0x0000000000000000000000000000000000000001"});
		const uintkWn1g5t = BigInt("275")
		const address7SAoXn = accounts[1]
		const addressoFTxPPb = accounts[2]
		const uintKWcHgB = BigInt("1520")
		const addressC6PhDDi = accounts[0]
		const uintjStfJ4b = BigInt("461")
		const addressBjusOne = accounts[5]
		const uintwOkTK6h = BigInt("1787")
		const uintf7qERch = BigInt("1046")
		const booldBdFCQw = await ANRXTokenhip8cyt.transferFrom.call(addressoFTxPPb, address7SAoXn, uintkWn1g5t, {from: accounts[2]});
		const boolBatssON = await ANRXTokenhip8cyt.transfer.call(addressC6PhDDi, uintKWcHgB, {from: accounts[5]});
		const boolWPJRrG = await ANRXTokenhip8cyt.approve.call(addressBjusOne, uintjStfJ4b, {from: accounts[3]});
		const uintVyeGhf3 = await ANRXTokenhip8cyt.issue.call(uintwOkTK6h, {from: "0x0000000000000000000000000000000000000001"});
		const uintbGbeU4E = await ANRXTokenhip8cyt.redeem.call(uintf7qERch, {from: accounts[4]});
	});
})