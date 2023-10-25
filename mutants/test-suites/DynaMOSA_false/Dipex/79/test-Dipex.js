const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringrwr2vAI = "g58a4dyUMAn8NizFIy3b3KxvbbOox4sVvGx"
		const stringpqZdS4v = "sIbZz7p0YPgoSMB5j9ezmEr6OE8VtTOdSDw"
		const uintcxhVwqs = BigInt("1703")
		const DipexXkkIqCj = await Dipex.new(stringrwr2vAI, stringpqZdS4v, uintcxhVwqs, {from: "0x0000000000000000000000000000000000000001"});
		const uintzDiPJIO = BigInt("1770")
		const addressQ86eYx = accounts[1]
		const addressrhvRG9a = accounts[4]
		const addressN551IA3 = "0x0000000000000000000000000000000000000001"
		const addressSm5rSTV = accounts[1]
		const uintSTtu0sY = BigInt("1035")
		const addresslihrCfT = accounts[2]
		const addressd8Ln3M5 = accounts[5]
		const booloQrnHvU = await DipexXkkIqCj.approve.call(addressQ86eYx, uintzDiPJIO, {from: accounts[1]});
		const boolQz5VVnz = await DipexXkkIqCj.transferownership.call(addressrhvRG9a, {from: accounts[1]});
		const boolO2fbJIG = await DipexXkkIqCj.transferownership.call(addressN551IA3, {from: accounts[0]});
		const boolw1lQcwm = await DipexXkkIqCj.transferownership.call(addressSm5rSTV, {from: accounts[3]});
		const boolX3g1sGE = await DipexXkkIqCj.transferFrom.call(addressd8Ln3M5, addresslihrCfT, uintSTtu0sY, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringFvXudwn = "OJicTNGj4baA9cMw4oUm6SpRJU1S6dtTse3R3empyFG5Es"
		const stringTvQH1iV = "DuOypPSIaGyV39lP8BREkKfdrKlWKKb3Oz"
		const uintVUD6drR = BigInt("505")
		const Dipex2ymFzb = await Dipex.new(stringFvXudwn, stringTvQH1iV, uintVUD6drR, {from: accounts[2]});
		const uintAklkC7V = BigInt("1652")
		const addressKrGLE06 = accounts[0]
		const uintLR6HJP = BigInt("766")
		const addressv0lXKIv = accounts[0]
		const addressCYkW2O = accounts[0]
		const uintqm3wm7 = BigInt("455")
		const addressYBYhqMy = accounts[5]
//		const boolzc6d3wl = await Dipex2ymFzb.approveAndCall.call(addressKrGLE06, uintAklkC7V, {from: accounts[1]});
//		const boolxGOKHBE = await Dipex2ymFzb.approve.call(addressv0lXKIv, uintLR6HJP, {from: accounts[4]});
//		const bool5MPgvu = await Dipex2ymFzb.transferownership.call(addressCYkW2O, {from: accounts[1]});
//		const booloKRkyPJ = await Dipex2ymFzb.approve.call(addressYBYhqMy, uintqm3wm7, {from: accounts[4]});

		await expect(Dipex2ymFzb.approveAndCall.call(addressKrGLE06, uintAklkC7V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringElxGDOb = "HFmPaiME9"
		const stringIXdBGJc = "fFtn65FEdk3LTYm6xReYsCzBpM9kN5d2644nM7W8b7gSGCLFS4QCJnJtTplrF4hIOYIUjwCqIkobSt69k"
		const uintzg90b5J = BigInt("1085")
		const DipexZ4XnLAN = await Dipex.new(stringElxGDOb, stringIXdBGJc, uintzg90b5J, {from: accounts[3]});
		const uintHx39KUR = BigInt("1356")
		const addressqi7GRtH = "0x0000000000000000000000000000000000000001"
		const uintFM8FDlf = BigInt("1403")
		const addressg8GWUhD = accounts[0]
		const addressrAqlivB = accounts[0]
		const uintcFc86wc = BigInt("2046")
		const addressROz4GlF = accounts[0]
		const uintK3ozcP7 = BigInt("853")
		const addressWlkFuDZ = accounts[2]
		const addressV6R6F19 = accounts[0]
		const uintraKsTHz = BigInt("41")
		const addressKAkWhDK = accounts[4]
//		const booluKLtb1r = await DipexZ4XnLAN.transfer.call(addressqi7GRtH, uintHx39KUR, {from: accounts[1]});
//		const boolupXkihn = await DipexZ4XnLAN.transferFrom.call(addressrAqlivB, addressg8GWUhD, uintFM8FDlf, {from: accounts[2]});
//		const boolXYRQtY4 = await DipexZ4XnLAN.approve.call(addressROz4GlF, uintcFc86wc, {from: accounts[4]});
//		const booleSIO3ZF = await DipexZ4XnLAN.transferFrom.call(addressV6R6F19, addressWlkFuDZ, uintK3ozcP7, {from: accounts[1]});
//		const boolj5tsuX = await DipexZ4XnLAN.approve.call(addressKAkWhDK, uintraKsTHz, {from: accounts[3]});

		await expect(DipexZ4XnLAN.transfer.call(addressqi7GRtH, uintHx39KUR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringjELJgzp = "EtuAA839ens6WwVLMqdKG913DAIv3CWxUV6Mlklotrr17Sadz4iJ1K8W91qOTVkYs"
		const stringGHXOL45 = "dN63BJxyslGzITKhbSkGd5mw2b"
		const uintheHGLY4 = BigInt("407")
		const DipexQABwGQI = await Dipex.new(stringjELJgzp, stringGHXOL45, uintheHGLY4, {from: accounts[5]});
		const addressuX2Z2vd = accounts[3]
		const uintibVwdPM = BigInt("1290")
		const addressaSd9bBl = accounts[1]
		const uintWVXlAEC = BigInt("1862")
		const addressDjSrNI = accounts[0]
		const uintp6TMc1S = BigInt("410")
		const addressIadneIr = accounts[4]
		const addressP1otANl = accounts[0]
		const uintflDlnBQ = BigInt("1699")
		const addresskfEiTG1 = accounts[3]
		const addressHJXOUO6 = accounts[1]
//		const boolz8xSN77 = await DipexQABwGQI.transferownership.call(addressuX2Z2vd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQ5gVJHW = await DipexQABwGQI.approveAndCall.call(addressaSd9bBl, uintibVwdPM, {from: accounts[1]});
//		const boolsf3pjuv = await DipexQABwGQI.approve.call(addressDjSrNI, uintWVXlAEC, {from: accounts[3]});
//		const boolCWKDKhX = await DipexQABwGQI.transferFrom.call(addressP1otANl, addressIadneIr, uintp6TMc1S, {from: accounts[4]});
//		const boolve27OY = await DipexQABwGQI.approve.call(addresskfEiTG1, uintflDlnBQ, {from: accounts[1]});
//		const boolOwWkbCb = await DipexQABwGQI.transferownership.call(addressHJXOUO6, {from: accounts[0]});

		await expect(DipexQABwGQI.transferownership.call(addressuX2Z2vd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSKH8kWd = "WrAgPU6ETr1gebp9x3mYy6Qbqz6vFpWq6iOMblu2W"
		const stringqISJPo = "rFYT1tnLFzmoizKhrzpCh8ONJa5ZNxBT5zpMeek8tdxujfwh3QnNjJnN1lM4lU6RQtLWLbMsorm9SMz"
		const uintoeIeHS0 = BigInt("429")
		const DipexZ1qRjY = await Dipex.new(stringSKH8kWd, stringqISJPo, uintoeIeHS0, {from: accounts[0]});
		const uintCzvd8OO = BigInt("1821")
		const addressgtP1uzP = accounts[0]
		const uintCVPNulK = BigInt("132")
		const addressPgNDvgT = accounts[5]
		const uintXYfx6wt = BigInt("1435")
		const addressl6C9dmN = accounts[1]
		const uintgq1f7K = BigInt("786")
		const addressy6CYdD4 = accounts[2]
		const addressm4fyr7D = accounts[3]
		const uintcaDEta9 = BigInt("289")
		const addressK2JckVy = "0x0000000000000000000000000000000000000001"
		const addressKK01sxu = accounts[1]
		const uintJ0SfROJ = BigInt("1004")
		const addressCGQwMM7 = accounts[5]
		const addressMFthBAS = accounts[4]
		const boolI967Dp1 = await DipexZ1qRjY.approve.call(addressgtP1uzP, uintCzvd8OO, {from: accounts[2]});
//		const boolWGyDVKS = await DipexZ1qRjY.transfer.call(addressPgNDvgT, uintCVPNulK, {from: accounts[4]});
//		const boolp19creX = await DipexZ1qRjY.transfer.call(addressl6C9dmN, uintXYfx6wt, {from: accounts[0]});
//		const boolmhD2JQi = await DipexZ1qRjY.transferFrom.call(addressm4fyr7D, addressy6CYdD4, uintgq1f7K, {from: accounts[2]});
//		const boolEfjnlL5 = await DipexZ1qRjY.transferFrom.call(addressKK01sxu, addressK2JckVy, uintcaDEta9, {from: accounts[2]});
//		const booldWcDgbd = await DipexZ1qRjY.transferFrom.call(addressMFthBAS, addressCGQwMM7, uintJ0SfROJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolI967Dp1, true)
		await expect(DipexZ1qRjY.transfer.call(addressPgNDvgT, uintCVPNulK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringr4xafm3 = "JY4TJmglzbTZ1hPaeNwHiNFjQ9i3zOe1A6FtA3pmuKAULTygnOIUrzH1OkiBcGm9jR4vOTGR1MqFVAAqIrBOgRY9vN2fNVw0xl"
		const stringFDnLgHK = "z"
		const uinti50qSI = BigInt("1450")
		const DipexxtpGDBe = await Dipex.new(stringr4xafm3, stringFDnLgHK, uinti50qSI, {from: accounts[3]});
		const uintEyuXokw = BigInt("741")
		const addressfcZtu5 = accounts[4]
		const uintropZRVH = BigInt("217")
		const addressCIQDS4X = accounts[5]
		const boolKfZ89Pk = await DipexxtpGDBe.approveAndCall.call(addressfcZtu5, uintEyuXokw, {from: accounts[3]});
//		const boolQHep4R = await DipexxtpGDBe.approveAndCall.call(addressCIQDS4X, uintropZRVH, {from: accounts[1]});

		assert.equal(boolKfZ89Pk, true)
		await expect(DipexxtpGDBe.approveAndCall.call(addressCIQDS4X, uintropZRVH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringWFuRETK = "6W"
		const stringnovrAMx = "8iK2Nk8JNySywFPojOOhyHlT8yUXJlFCcGqH9JFYBY3KsXnm1Hk3Kr2qqnsn3Gi67NqwsOun2GTzKPlF"
		const uintbaYTYKD = BigInt("7")
		const Dipexo6MgBVT = await Dipex.new(stringWFuRETK, stringnovrAMx, uintbaYTYKD, {from: accounts[4]});
		const uintir0i3N = BigInt("1885")
		const addressmypfRcS = accounts[4]
		const address604feA = accounts[0]
		const addressJRUpgvA = accounts[4]
		const uintJazbUgU = BigInt("1892")
		const addressdk3WF5f = accounts[2]
		const addressvrRkVDV = accounts[2]
//		const boolCzgWhDw = await Dipexo6MgBVT.transferFrom.call(address604feA, addressmypfRcS, uintir0i3N, {from: accounts[0]});
//		const boolUQChKVt = await Dipexo6MgBVT.transferownership.call(addressJRUpgvA, {from: accounts[4]});
//		const boolnhQp6Xu = await Dipexo6MgBVT.transferFrom.call(addressvrRkVDV, addressdk3WF5f, uintJazbUgU, {from: accounts[0]});

		await expect(Dipexo6MgBVT.transferFrom.call(address604feA, addressmypfRcS, uintir0i3N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringToWbNBV = "3muag8P0krVxQVZxWQ1STvS9DShtbkzmieX7GNCvWoGUxhVv3HxywSwUSKBmHvrenDP7yWnP09YKqs"
		const stringaomMafZ = "pu7l9GAv33ewPSPqAbbbkAvlP4hKyuk6Ahxw3uHuuo"
		const uintbPzRgG = BigInt("1289")
		const DipexNOE3bH8 = await Dipex.new(stringToWbNBV, stringaomMafZ, uintbPzRgG, {from: accounts[3]});
		const uintWDE3V0M = BigInt("0")
		const addressLwHLyCz = accounts[3]
		const addressZeHhW6h = accounts[0]
		const boolmf5J3QX = await DipexNOE3bH8.transferFrom.call(addressZeHhW6h, addressLwHLyCz, uintWDE3V0M, {from: accounts[3]});

		assert.equal(boolmf5J3QX, true)
	});

	it('test for Dipex', async () => {
		const stringQuSMdMF = "xlLXYHOJeX4Wi"
		const stringH8X3uNv = "1UfCGySSp7ufqHGSD9j19OxYzfwLNdUI8SYTTDNURhR15bldmxzxYyyk9h5bSnNSYyMIeFiG"
		const uintTXZUk11 = BigInt("1624")
		const Dipexr1wojlc = await Dipex.new(stringQuSMdMF, stringH8X3uNv, uintTXZUk11, {from: accounts[0]});
		const uintzFzucj9 = BigInt("343")
		const addressTWJXKXm = accounts[1]
		const uintFaOlks2 = BigInt("213")
		const addressG1LFdIG = accounts[1]
		const uintLA33CDs = BigInt("894")
		const addressfUX7A0Z = accounts[0]
		const uintFxO6pE = BigInt("847")
		const addressHL870b = accounts[2]
		const uintlPqfmS = BigInt("1")
		const addressx7i91H = accounts[3]
		const uintYW0CEQT = BigInt("345")
		const addressBQ1wxCq = accounts[0]
		const uintiQ3z0vR = BigInt("0")
		const addressSDOI4PM = accounts[0]
		const uintGEQNTeN = BigInt("576")
		const addressRf02AjN = accounts[3]
		const uintf7w7B8l = BigInt("88")
		const addressIZ7hlf = accounts[4]
		const uintEF9U90 = BigInt("1741")
		const addressKdyFPH = "0x0000000000000000000000000000000000000001"
		const uintcdZ04gM = BigInt("132")
		const addressiUqhejf = accounts[7]
		const uintqOwMuR = BigInt("125")
		const addressP7pOng = accounts[4]
		const addressRNiNKFa = accounts[3]
		const uintUIODYPt = BigInt("1921")
		const addressJsyjVHe = accounts[3]
		const addressTkJE6VG = accounts[0]
		const booly4kdnAS = await Dipexr1wojlc.approveAndCall.call(addressTWJXKXm, uintzFzucj9, {from: accounts[0]});
		const boolIrFui5q = await Dipexr1wojlc.approve.call(addressG1LFdIG, uintFaOlks2, {from: accounts[2]});
		const boolHYEGkvv = await Dipexr1wojlc.approve.call(addressfUX7A0Z, uintLA33CDs, {from: "0x0000000000000000000000000000000000000001"});
		const boolU3u9SG4 = await Dipexr1wojlc.approve.call(addressHL870b, uintFxO6pE, {from: "0x0000000000000000000000000000000000000001"});
		const booltrV38pZ = await Dipexr1wojlc.approveAndCall.call(addressx7i91H, uintlPqfmS, {from: accounts[0]});
		const bool9mhYuR = await Dipexr1wojlc.approve.call(addressBQ1wxCq, uintYW0CEQT, {from: accounts[1]});
		const bool9v3roU = await Dipexr1wojlc.approveAndCall.call(addressSDOI4PM, uintiQ3z0vR, {from: accounts[0]});
		const boolcvTRMOc = await Dipexr1wojlc.approve.call(addressRf02AjN, uintGEQNTeN, {from: accounts[1]});
//		const booltPBI0H = await Dipexr1wojlc.transfer.call(addressIZ7hlf, uintf7w7B8l, {from: accounts[1]});
//		const boolPFn1bqY = await Dipexr1wojlc.approveAndCall.call(addressKdyFPH, uintEF9U90, {from: accounts[0]});
//		const boolpNKu2HE = await Dipexr1wojlc.approve.call(addressiUqhejf, uintcdZ04gM, {from: accounts[4]});
//		const boolqhvxYQ = await Dipexr1wojlc.transferFrom.call(addressRNiNKFa, addressP7pOng, uintqOwMuR, {from: accounts[1]});
//		const boolokrkOKa = await Dipexr1wojlc.transferFrom.call(addressTkJE6VG, addressJsyjVHe, uintUIODYPt, {from: accounts[0]});

		assert.equal(bool9mhYuR, true)
		assert.equal(bool9v3roU, true)
		assert.equal(boolHYEGkvv, true)
		assert.equal(boolIrFui5q, true)
		assert.equal(boolU3u9SG4, true)
		assert.equal(boolcvTRMOc, true)
		assert.equal(booltrV38pZ, true)
		assert.equal(booly4kdnAS, true)
		await expect(Dipexr1wojlc.transfer.call(addressIZ7hlf, uintf7w7B8l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})