const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringSGZAF73 = "YOVT7Ol7LupYt77R3iPMA5reGrjqEcaliJznXHo7yz1q"
		const stringqM1dFk5 = "an4Vg7phCgbR9WAqE7OR1sRT8bq5g7dn1VVpLljSNZQ3pORevv2V2Hla"
		const uintPW93JgF = BigInt("34")
		const XenoFelixE1R2Og3 = await XenoFelix.new(stringSGZAF73, stringqM1dFk5, uintPW93JgF, {from: "0x0000000000000000000000000000000000000001"});
		const uintJ5qB3Lf = BigInt("681")
		const addresstNJOKnu = accounts[3]
		const uintcIrFhy = BigInt("260")
		const addressd0UHRzk = accounts[1]
		const uintfXd5PX = BigInt("1706")
		const addressUPKIFeV = accounts[3]
		const addressA1aXcW1 = accounts[2]
		const uintFMEmPLc = BigInt("2004")
		const addressKP5gFvm = accounts[2]
		const addressdRitTWB = accounts[0]
		const addressiRsBs5S = await XenoFelixE1R2Og3.burnFrom.call(addresstNJOKnu, uintJ5qB3Lf, {from: accounts[2]});
		const bools6f88BG = await XenoFelixE1R2Og3.transfer.call(addressd0UHRzk, uintcIrFhy, {from: accounts[3]});
		const boolwi5ZwQp = await XenoFelixE1R2Og3.transferFrom.call(addressA1aXcW1, addressUPKIFeV, uintfXd5PX, {from: accounts[4]});
		const addressERZX3CB = await XenoFelixE1R2Og3.burnFrom.call(addressKP5gFvm, uintFMEmPLc, {from: accounts[5]});
		const addressPFt42e = await XenoFelixE1R2Og3.removePauser.call(addressdRitTWB, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringVKZRD8m = "tS6rgSKuqUJ2u"
		const stringxjgeQOv = "R7ELWb7brz3YQwCwU9gLBtOLiGQpjwTl4WMaBeotYHOALq1wjGaOd"
		const uintLDU33N = BigInt("135")
		const XenoFelixJrrphC = await XenoFelix.new(stringVKZRD8m, stringxjgeQOv, uintLDU33N, {from: accounts[4]});
		const addressgfTgXyO = accounts[2]
		await XenoFelixJrrphC.renouncePauser.call({from: accounts[5]});
		const boolrFQdcs = await XenoFelixJrrphC.isOwner.call(addressgfTgXyO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringskuK0dl = "bAiVpWVTKkF92BCkSbo5UHDMHzlasTcmoB90GeMb8iSv1"
		const stringK1SdLuM = "4TrbY95cXFD1rE9yJl8JyJW0BNRPWNAaZgOGwcRPPQJyVXoeCeLljyo"
		const uintAPkG3z = BigInt("151")
		const XenoFelixy3lGygY = await XenoFelix.new(stringskuK0dl, stringK1SdLuM, uintAPkG3z, {from: accounts[3]});
		const addressXh6gVj = accounts[1]
		const uintbnbeVnT = BigInt("1057")
		const addressEZ3yjaq = accounts[0]
		const uintZdhbra6 = BigInt("1540")
		const uintktCHwTu = BigInt("658")
		const addressNDClAdj = accounts[0]
		const uintdHGluYe = BigInt("1459")
		const boolK0VScFI = await XenoFelixy3lGygY.unfreezeAccount.call(addressXh6gVj, {from: "0x0000000000000000000000000000000000000001"});
		const boolmfunkca = await XenoFelixy3lGygY.increaseAllowance.call(addressEZ3yjaq, uintbnbeVnT, {from: accounts[4]});
		const boolpqJsvyj = await XenoFelixy3lGygY.lock.call(addressNDClAdj, uintktCHwTu, uintZdhbra6, {from: accounts[0]});
		const uint256ZHaA2PQ = await XenoFelixy3lGygY.burn.call(uintdHGluYe, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixloaB1iO = await XenoFelix.new({from: accounts[4]});
		const uintCcu4PAt = BigInt("352")
		const uint3zk9sm = BigInt("959")
		const addressrHJips = accounts[0]
		const uint256PU8QB8F = await XenoFelixloaB1iO.burn.call(uintCcu4PAt, {from: accounts[2]});
		const uint256cGGrkhO = await XenoFelixloaB1iO.totalSupply.call({from: accounts[5]});
		await XenoFelixloaB1iO.unpause.call({from: accounts[3]});
		const stringFqLjUro = await XenoFelixloaB1iO.name.call({from: "0x0000000000000000000000000000000000000001"});
		const booljXnQpeF = await XenoFelixloaB1iO.transfer.call(addressrHJips, uint3zk9sm, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const strings6xC6hy = "KKuLcAmodwIF0RGVUu0UQyEHVwmfmM6tyLE84xBxIZ3jzppcif1BQD1kJkUV55sCKzjbo40W3PJeaEGAM3ox7hjPFjN21iCWA"
		const stringoTthpKT = "kSR"
		const uintPqNW2nM = BigInt("934")
		const uintiVkO5dJ = BigInt("179")
		const XenoFelixbx9ZlqO = await XenoFelix.new(strings6xC6hy, stringoTthpKT, uintPqNW2nM, uintiVkO5dJ, {from: accounts[3]});
		const uintMdUpPsw = BigInt("1141")
		const uintAiZ3y2N = BigInt("1029")
		const addressWG4d6rz = accounts[2]
		const addressJrQyIot = accounts[5]
		const uint256q1A4T4j = await XenoFelixbx9ZlqO.burn.call(uintMdUpPsw, {from: accounts[2]});
		const boolyYnBzyY = await XenoFelixbx9ZlqO.paused.call({from: accounts[5]});
		const boolTDfiVIe = await XenoFelixbx9ZlqO.transferFrom.call(addressJrQyIot, addressWG4d6rz, uintAiZ3y2N, {from: accounts[1]});

		await expect(XenoFelixbx9ZlqO.burn.call(uintMdUpPsw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintvWGJCbb = BigInt("775")
		const uintdhElejj = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintvWGJCbb, uintdhElejj, {from: accounts[2]});
		const uintIOY7mOD = BigInt("777")
		const addressge3bC5F = accounts[4]
		const addressLEYOWXd = "0x0000000000000000000000000000000000000001"
		const addressCQjWmAU = accounts[0]
		const booljHTkwJg = await XenoFelixGbKjLOv.approve.call(addressge3bC5F, uintIOY7mOD, {from: accounts[1]});
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addressLEYOWXd, {from: accounts[2]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressCQjWmAU, {from: accounts[2]});

		assert.equal(booljHTkwJg, true)
		assert.equal(uint256xsfGxzN, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintrg0CpQp = BigInt("775")
		const uintCh1MW8k = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintrg0CpQp, uintCh1MW8k, {from: accounts[2]});
		const address9RIinn = "0x0000000000000000000000000000000000000001"
		const uintVtpezI2 = BigInt("435")
		const uintaIlmBz = BigInt("1679")
		const addresspjhH6z7 = accounts[1]
		const addresseF7r6d4 = accounts[1]
		const addressFCg5Q1 = accounts[0]
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(address9RIinn, {from: accounts[2]});
		const boolwBe5OF4 = await XenoFelixGbKjLOv.transferWithLock.call(addresspjhH6z7, uintaIlmBz, uintVtpezI2, {from: accounts[3]});
		const uint256GL81Osr = await XenoFelixGbKjLOv.balanceOf.call(addresseF7r6d4, {from: accounts[4]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressFCg5Q1, {from: accounts[2]});

		await expect(XenoFelixGbKjLOv.transferWithLock.call(addresspjhH6z7, uintaIlmBz, uintVtpezI2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintyCIB0e = BigInt("775")
		const uintBunYTTe = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintyCIB0e, uintBunYTTe, {from: accounts[2]});
		const uintzYXkuWz = BigInt("777")
		const addresseJSHEQt = accounts[4]
		const addresszuZYxMN = accounts[0]
		const booljHTkwJg = await XenoFelixGbKjLOv.approve.call(addresseJSHEQt, uintzYXkuWz, {from: accounts[1]});
		const stringybVIBau = await XenoFelixGbKjLOv.symbol.call({from: accounts[4]});
		const stringLXkn4EZ = await XenoFelixGbKjLOv.name.call({from: accounts[2]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addresszuZYxMN, {from: accounts[2]});

		assert.equal(booljHTkwJg, true)
		assert.equal(stringLXkn4EZ, "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec")
		assert.equal(stringybVIBau, "VQaXa")
		assert.equal(uint256xsfGxzN, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintgExCWBF = BigInt("775")
		const uintVpwTLR8 = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintgExCWBF, uintVpwTLR8, {from: accounts[2]});
		const addressxPJwILh = "0x0000000000000000000000000000000000000001"
		const addressO9zNY2J = accounts[0]
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addressxPJwILh, {from: accounts[2]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressO9zNY2J, {from: accounts[2]});
		await XenoFelixGbKjLOv.onlyNewOwner.call({from: accounts[3]});

		assert.equal(uint256xsfGxzN, BigInt("0"))
		await expect(XenoFelixGbKjLOv.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringuIjbGsE = "9PNHdXzF2SMZ9z9eyFTcWHy9"
		const stringf1rDjga = "tUA75W8oXpBje3ov2DkE5DJDryORVDs60tSxlbaquRkzfCgMqkyYYTZLokpiq6p"
		const uintAR4mU2 = BigInt("1943")
		const uintGuHg8FB = BigInt("203")
		const XenoFelixiYUYVp7 = await XenoFelix.new(stringuIjbGsE, stringf1rDjga, uintAR4mU2, uintGuHg8FB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Y0yokIR = await XenoFelixiYUYVp7.totalSupply.call({from: accounts[3]});
		await XenoFelixiYUYVp7.renouncePauser.call({from: accounts[2]});
		await XenoFelixiYUYVp7.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringyl9NH4T = "AHbc8Le32PApOJp1GnkWEJUIv53DBdpUoHqPNisArce1AUlBULuvTFAzxKL0w4jg9PQQx0k7vHRE7t"
		const stringOldPAd = "jTJUqKBg9bLAQzHG9Z"
		const uintzBgYXK = BigInt("417")
		const uintMghFHKy = BigInt("132")
		const XenoFelixjvaFrws = await XenoFelix.new(stringyl9NH4T, stringOldPAd, uintzBgYXK, uintMghFHKy, {from: accounts[2]});
		const addressUg2558 = accounts[2]
		const uintzxTRH15 = BigInt("1343")
		const addressYq09zRF = accounts[1]
		const boolADKflIW = await XenoFelixjvaFrws.paused.call({from: accounts[2]});
		const uint256GWXQ1qq = await XenoFelixjvaFrws.balanceOf.call(addressUg2558, {from: accounts[4]});
		const boolP7vNRUY = await XenoFelixjvaFrws.transfer.call(addressYq09zRF, uintzxTRH15, {from: accounts[0]});
		await XenoFelixjvaFrws.onlyPauser.call({from: accounts[2]});

		assert.equal(boolADKflIW, false)
		assert.equal(uint256GWXQ1qq, BigInt("102400393723337970666491650343230844331444756041997876168802052021952977043456"))
		await expect(XenoFelixjvaFrws.transfer.call(addressYq09zRF, uintzxTRH15, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintFP3lC7v = BigInt("775")
		const uintKOHmDN8 = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintFP3lC7v, uintKOHmDN8, {from: accounts[2]});
		const uintmB4Gian = BigInt("1784")
		const addressGESFzjk = accounts[4]
		const uintsCpyGvm = BigInt("850")
		const addressFKwDMCK = accounts[3]
		const stringCA0FXqK = await XenoFelixGbKjLOv.name.call({from: accounts[2]});
		const booljHTkwJg = await XenoFelixGbKjLOv.approve.call(addressGESFzjk, uintmB4Gian, {from: accounts[1]});
		const boolWGNG6p2 = await XenoFelixGbKjLOv.decreaseAllowance.call(addressFKwDMCK, uintsCpyGvm, {from: accounts[3]});

		assert.equal(booljHTkwJg, true)
		assert.equal(stringCA0FXqK, "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec")
		await expect(XenoFelixGbKjLOv.decreaseAllowance.call(addressFKwDMCK, uintsCpyGvm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintsOgtFGy = BigInt("775")
		const uintuxtex0B = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintsOgtFGy, uintuxtex0B, {from: accounts[2]});
		const uintQsVCv24 = BigInt("777")
		const addressXrSUnDQ = accounts[4]
		const addresshyPItfn = "0x0000000000000000000000000000000000000001"
		const addressRIM6Pv6 = accounts[1]
		const addressyUj7lmN = accounts[0]
		const booljHTkwJg = await XenoFelixGbKjLOv.approve.call(addressXrSUnDQ, uintQsVCv24, {from: accounts[1]});
		await XenoFelixGbKjLOv.pause.call({from: accounts[2]});
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addresshyPItfn, {from: accounts[2]});
		const uint256OsBMa6F = await XenoFelixGbKjLOv.balanceOf.call(addressRIM6Pv6, {from: accounts[4]});
		await XenoFelixGbKjLOv.renouncePauser.call({from: accounts[1]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressyUj7lmN, {from: accounts[2]});

		assert.equal(booljHTkwJg, true)
		await expect(XenoFelixGbKjLOv.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uinta9ZHDVi = BigInt("775")
		const uintKFXvqyQ = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uinta9ZHDVi, uintKFXvqyQ, {from: accounts[2]});
		const addressF2cEyA = "0x0000000000000000000000000000000000000002"
		const addressNpvEkdq = accounts[0]
		const uint80MPNeB = await XenoFelixGbKjLOv.decimals.call({from: accounts[4]});
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addressF2cEyA, {from: accounts[2]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressNpvEkdq, {from: accounts[2]});

		assert.equal(uint256xsfGxzN, BigInt("0"))
		assert.equal(uint80MPNeB, BigInt("86"))
	});

	it('test for XenoFelix', async () => {
		const stringkGVYOx8 = "7lANUXLweO95djk4U"
		const stringTrCLtyk = "1OwBHRd8kL78VAbr5JgKu8Qex8pQktnqEfLeZBjgFufWZf3HOwACJ8e6khiJ3b00HpcmB73n4U1WTluD7SzslJKiVo"
		const uintESSN9yB = BigInt("72")
		const XenoFelixbZMabTz = await XenoFelix.new(stringkGVYOx8, stringTrCLtyk, uintESSN9yB, {from: accounts[2]});
		const addresszRa6vJ = accounts[3]
		const uintSk3gNlW = BigInt("931")
		const addressobpvbrF = accounts[0]
		const uint256aRgdVtR = await XenoFelixbZMabTz.balanceOf.call(addresszRa6vJ, {from: accounts[0]});
		const booluqPuf3q = await XenoFelixbZMabTz.transfer.call(addressobpvbrF, uintSk3gNlW, {from: accounts[1]});
		await XenoFelixbZMabTz.pause.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintahror8w = BigInt("775")
		const uintri672Sa = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintahror8w, uintri672Sa, {from: accounts[2]});
		const uintXDfXuEf = BigInt("1130")
		const addresspP25KK8 = accounts[5]
		const address63UPhi = "0x0000000000000000000000000000000000000001"
		const addressPHSnLi0 = "0x0000000000000000000000000000000000000002"
		const addressA4gdwQe = accounts[0]
		const uintl77nKGJ = BigInt("435")
		const uintNTMAt3u = BigInt("1679")
		const addressDdRniUE = accounts[1]
		const boolV5ERHVo = await XenoFelixGbKjLOv.transferFrom.call(address63UPhi, addresspP25KK8, uintXDfXuEf, {from: accounts[4]});
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addressPHSnLi0, {from: accounts[2]});
		const boolczcq4Sn = await XenoFelixGbKjLOv.isPauser.call(addressA4gdwQe, {from: accounts[3]});
		const boolwBe5OF4 = await XenoFelixGbKjLOv.transferWithLock.call(addressDdRniUE, uintNTMAt3u, uintl77nKGJ, {from: accounts[3]});

		await expect(XenoFelixGbKjLOv.transferFrom.call(address63UPhi, addresspP25KK8, uintXDfXuEf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoI9Xfn0 = "mjbKgnQYWhJz1xIksiFD3Oln4reT6D2V"
		const stringoEBTKa9 = "eH4ww5xIQdeCTHlzNxhmUFJxZoNxZl47DjN6KXVULeL8NFCQrGHzW93DBu9kV0ReKecCc6Xf91usIzYIg"
		const uinttniYeeR = BigInt("60")
		const XenoFelixPpcIZHh = await XenoFelix.new(stringoI9Xfn0, stringoEBTKa9, uinttniYeeR, {from: accounts[1]});
		const uintlYF7urp = BigInt("1616")
		const uinttRnSRLt = BigInt("1256")
		const addressk5Cye7l = accounts[1]
		const addresskn8CMQh = accounts[3]
		const uintv0F6Hx2 = BigInt("1915")
		const boolNaAusGq = await XenoFelixPpcIZHh.transferWithLock.call(addressk5Cye7l, uinttRnSRLt, uintlYF7urp, {from: accounts[2]});
		const boolh5OblYI = await XenoFelixPpcIZHh.unfreezeAccount.call(addresskn8CMQh, {from: accounts[3]});
		const uint256iMyHTEn = await XenoFelixPpcIZHh.burn.call(uintv0F6Hx2, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintcCwhWda = BigInt("775")
		const uintNCAcKqt = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintcCwhWda, uintNCAcKqt, {from: accounts[2]});
		const uinthCd0I8 = BigInt("1264")
		const addressBH3Fiz2 = accounts[0]
		const uinteSKvvmw = BigInt("1130")
		const addressxIO1oIq = accounts[5]
		const addressUfiR3u1 = "0x0000000000000000000000000000000000000000"
		const uintKQfjOEr = BigInt("743")
		const addressz0iSRl3 = "0x0000000000000000000000000000000000000001"
		const addressOyVw3Ky = "0x0000000000000000000000000000000000000002"
		const addressaO54UJJ = accounts[1]
		const addressQph4Udn = accounts[5]
		const uintLH9PsN = BigInt("435")
		const uintWjttc9p = BigInt("1679")
		const addressTakO7ee = accounts[1]
		const boold4WtELa = await XenoFelixGbKjLOv.burnOwner.call(addressBH3Fiz2, uinthCd0I8, {from: accounts[2]});
		const boolV5ERHVo = await XenoFelixGbKjLOv.transferFrom.call(addressUfiR3u1, addressxIO1oIq, uinteSKvvmw, {from: accounts[4]});
		const boolI7rIenN = await XenoFelixGbKjLOv.decreaseAllowance.call(addressz0iSRl3, uintKQfjOEr, {from: accounts[0]});
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addressOyVw3Ky, {from: accounts[2]});
		const boolczcq4Sn = await XenoFelixGbKjLOv.isPauser.call(addressaO54UJJ, {from: accounts[3]});
		const addressHrqmRrh = await XenoFelixGbKjLOv.addPauser.call(addressQph4Udn, {from: accounts[2]});
		const boolwBe5OF4 = await XenoFelixGbKjLOv.transferWithLock.call(addressTakO7ee, uintWjttc9p, uintLH9PsN, {from: accounts[3]});

		await expect(XenoFelixGbKjLOv.burnOwner.call(addressBH3Fiz2, uinthCd0I8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintFI0pzdw = BigInt("775")
		const uintnbt1Vcu = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintFI0pzdw, uintnbt1Vcu, {from: accounts[2]});
		const addressQzHQ3Ro = "0x0000000000000000000000000000000000000003"
		const addressLK7HRZ = accounts[4]
		const addressZXMATJf = accounts[0]
		const uintIrJqRiI = BigInt("435")
		const uintzAXfFU = BigInt("1679")
		const addressKC7SAt = accounts[1]
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addressQzHQ3Ro, {from: accounts[2]});
		const uint256YRSgTEI = await XenoFelixGbKjLOv.allowance.call(addressZXMATJf, addressLK7HRZ, {from: accounts[4]});
		const boolwBe5OF4 = await XenoFelixGbKjLOv.transferWithLock.call(addressKC7SAt, uintzAXfFU, uintIrJqRiI, {from: accounts[3]});

		assert.equal(uint256YRSgTEI, BigInt("0"))
		await expect(XenoFelixGbKjLOv.transferWithLock.call(addressKC7SAt, uintzAXfFU, uintIrJqRiI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintGKkn51R = BigInt("775")
		const uintTxeXeUI = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintGKkn51R, uintTxeXeUI, {from: accounts[2]});
		const uint8b5412 = BigInt("1024")
		const uintBDOExgg = BigInt("777")
		const addressA91gHry = accounts[4]
		const addresszCB5RRl = "0x0000000000000000000000000000000000000000"
		const addressNe1YJos = accounts[1]
		const addressnlZyUuv = accounts[0]
		const uint256fhWt0L = await XenoFelixGbKjLOv.totalSupply.call({from: accounts[3]});
		const uint256Qp16cEk = await XenoFelixGbKjLOv.burn.call(uint8b5412, {from: accounts[4]});
		const booljHTkwJg = await XenoFelixGbKjLOv.approve.call(addressA91gHry, uintBDOExgg, {from: accounts[1]});
		await XenoFelixGbKjLOv.pause.call({from: accounts[2]});
		const addressy1IZjFp = await XenoFelixGbKjLOv.addPauser.call(addresszCB5RRl, {from: accounts[2]});
		const uint256OsBMa6F = await XenoFelixGbKjLOv.balanceOf.call(addressNe1YJos, {from: accounts[4]});
		await XenoFelixGbKjLOv.renouncePauser.call({from: accounts[1]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressnlZyUuv, {from: accounts[2]});

		assert.equal(uint256fhWt0L, BigInt("94886807988349622710252947579574448111609922696215448174231997924398612873216"))
		await expect(XenoFelixGbKjLOv.burn.call(uint8b5412, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringMs5yvue = "HGDPJuBJgvG2NE8aEyQNdjUTg2NNJIKpxLIteT22XT1R3VfoBKGH9utKLE9b6B5jh68xtcgaLXwRs7AVeJ9NeEYao79"
		const stringpUBJJin = "Ar"
		const uint4aYddi = BigInt("208")
		const XenoFelixDyuscvB = await XenoFelix.new(stringMs5yvue, stringpUBJJin, uint4aYddi, {from: accounts[0]});
		const uintKVwYCrM = BigInt("998")
		const uintd4V6sbN = BigInt("562")
		const addressPbJFzL = "0x0000000000000000000000000000000000000001"
		const addressKd3hYbp = accounts[4]
		await XenoFelixDyuscvB.unpause.call({from: accounts[0]});
		const boolyv7Uocp = await XenoFelixDyuscvB.lock.call(addressPbJFzL, uintd4V6sbN, uintKVwYCrM, {from: accounts[5]});
		const addressvHz04b5 = await XenoFelixDyuscvB.removePauser.call(addressKd3hYbp, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringh43M5Zi = "QmMRZq1PSdtFvJ"
		const stringkviRy6 = "M2roXxA9WRihEhJicSMBG77yD31ugkXrbcI6wewJavD"
		const uintn61vOjJ = BigInt("45")
		const XenoFelixAGlYdRI = await XenoFelix.new(stringh43M5Zi, stringkviRy6, uintn61vOjJ, {from: accounts[5]});
		const boolY632Q7q = await XenoFelixAGlYdRI.acceptOwnership.call({from: accounts[0]});
		const boolwmKpLdb = await XenoFelixAGlYdRI.paused.call({from: accounts[0]});
		const uint8BqSLAjP = await XenoFelixAGlYdRI.decimals.call({from: accounts[1]});
		const boolM0Yzwjy = await XenoFelixAGlYdRI.paused.call({from: accounts[4]});
		await XenoFelixAGlYdRI.unpause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintDd8rZtT = BigInt("775")
		const uintyMDhEmG = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintDd8rZtT, uintyMDhEmG, {from: accounts[2]});
		const uintZuKrkYY = BigInt("454")
		const addressKFYOb4w = accounts[0]
		const addresszcjwe0 = accounts[0]
		const uint8XfRC3h6 = await XenoFelixGbKjLOv.decimals.call({from: accounts[0]});
		const booltEqN34 = await XenoFelixGbKjLOv.increaseAllowance.call(addressKFYOb4w, uintZuKrkYY, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixGbKjLOv.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZPHlmuz = await XenoFelixGbKjLOv.balanceOf.call(addresszcjwe0, {from: accounts[4]});

		assert.equal(booltEqN34, true)
		assert.equal(uint8XfRC3h6, BigInt("86"))
		await expect(XenoFelixGbKjLOv.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintIRLjopJ = BigInt("775")
		const uintAVsbQfs = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintIRLjopJ, uintAVsbQfs, {from: accounts[2]});
		const uintrjyIgsj = BigInt("292")
		const addressbAuzvrW = accounts[0]
		const addressMZXGi6P = accounts[0]
		const boolw3WEpYs = await XenoFelixGbKjLOv.approve.call(addressbAuzvrW, uintrjyIgsj, {from: accounts[3]});
		const uint8XfRC3h6 = await XenoFelixGbKjLOv.decimals.call({from: accounts[0]});
		const boolzPE2spF = await XenoFelixGbKjLOv.freezeAccount.call(addressMZXGi6P, {from: accounts[2]});
		await XenoFelixGbKjLOv.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolw3WEpYs, true)
		assert.equal(boolzPE2spF, true)
		assert.equal(uint8XfRC3h6, BigInt("86"))
		await expect(XenoFelixGbKjLOv.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintMwRUo0 = BigInt("775")
		const uintUDwiyO6 = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintMwRUo0, uintUDwiyO6, {from: accounts[2]});
		await XenoFelixGbKjLOv.renouncePauser.call({from: accounts[2]});
		await XenoFelixGbKjLOv.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHzZzFc9 = await XenoFelixGbKjLOv.acceptOwnership.call({from: accounts[0]});

		await expect(XenoFelixGbKjLOv.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiwQ9qZE = "cmR9TNzMX5S1s4SmsU3VMUiHT5BO9zN2zvJq3W3Ec"
		const stringIwg609h = "VQaXa"
		const uintbckGfX7 = BigInt("775")
		const uintPwHByuO = BigInt("86")
		const XenoFelixGbKjLOv = await XenoFelix.new(stringiwQ9qZE, stringIwg609h, uintbckGfX7, uintPwHByuO, {from: accounts[2]});
		const uinthsTbD0G = BigInt("984")
		const addressdVOj5Fu = accounts[1]
		const addressNF2MOat = accounts[0]
		const addressCWrFBqd = await XenoFelixGbKjLOv.burnFrom.call(addressdVOj5Fu, uinthsTbD0G, {from: accounts[5]});
		const uint256xsfGxzN = await XenoFelixGbKjLOv.balanceOf.call(addressNF2MOat, {from: accounts[2]});

		await expect(XenoFelixGbKjLOv.burnFrom.call(addressdVOj5Fu, uinthsTbD0G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringyl9NH4T = "AHbc8Le32PApOJp1GnkWEJUIv53DBdpUoHqPNisArce1AUlBULuvTFAzxKL0w4jg9PQQx0k7vHRE7t"
		const stringOldPAd = "jTJUqKBg9bLAQzHG9Z"
		const uintoTCNMSY = BigInt("417")
		const uinte63IUi = BigInt("132")
		const XenoFelixjvaFrws = await XenoFelix.new(stringyl9NH4T, stringOldPAd, uintoTCNMSY, uinte63IUi, {from: accounts[2]});
		const addressJnB8Ngk = accounts[3]
		const addressxNa30N = accounts[2]
		const uintWc07Nwj = BigInt("1852")
		const uintzg3AsG = BigInt("1367")
		const addressg5j1K6x = accounts[0]
		const uintcFEa40d = BigInt("1343")
		const addressCQGit6F = accounts[2]
		const uintF15k5FZ = BigInt("1475")
		const addressOeWQ1GG = accounts[2]
		const boolCJU4NgO = await XenoFelixjvaFrws.isOwner.call(addressJnB8Ngk, {from: "0x0000000000000000000000000000000000000001"});
		const boolADKflIW = await XenoFelixjvaFrws.paused.call({from: accounts[2]});
		const uint256GWXQ1qq = await XenoFelixjvaFrws.balanceOf.call(addressxNa30N, {from: accounts[4]});
		const boolytJEHFg = await XenoFelixjvaFrws.transferWithLock.call(addressg5j1K6x, uintzg3AsG, uintWc07Nwj, {from: accounts[2]});
		await XenoFelixjvaFrws.whenPaused.call({from: accounts[2]});
		const boolP7vNRUY = await XenoFelixjvaFrws.transfer.call(addressCQGit6F, uintcFEa40d, {from: accounts[0]});
		const boolRmssCoA = await XenoFelixjvaFrws.unlock.call(addressOeWQ1GG, uintF15k5FZ, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixjvaFrws.onlyPauser.call({from: accounts[2]});
		await XenoFelixjvaFrws.pause.call({from: accounts[5]});

		assert.equal(boolADKflIW, false)
		assert.equal(boolCJU4NgO, false)
		assert.equal(boolytJEHFg, true)
		assert.equal(uint256GWXQ1qq, BigInt("102400393723337970666491650343230844331444756041997876168802052021952977043456"))
		await expect(XenoFelixjvaFrws.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjRcIJTS = "ReJeKiGDkKYpYTMMsOkh8rja7GQjgTIvuXSh19iF0NkXV1gtYtSG"
		const stringaWx2H58 = "OUFXmFWI2qbJEOmPAbS1kESnCxlB9eOwPrNZQZXaBKu2"
		const uint3eDrNY = BigInt("1054")
		const uintjouBHSS = BigInt("235")
		const XenoFelixDbAvgvn = await XenoFelix.new(stringjRcIJTS, stringaWx2H58, uint3eDrNY, uintjouBHSS, {from: accounts[3]});
		const uintjow3Kld = BigInt("1071")
		const addressehQQBg6 = accounts[2]
		const uintoU52zO = BigInt("2")
		const uintsbtnbv = BigInt("1580")
		const addressL2UcMr = "0x0000000000000000000000000000000000000001"
		const addressfvjJ0H = accounts[4]
		const boolajYcEZ7 = await XenoFelixDbAvgvn.approve.call(addressehQQBg6, uintjow3Kld, {from: "0x0000000000000000000000000000000000000001"});
		const boolUXqpkB = await XenoFelixDbAvgvn.lock.call(addressL2UcMr, uintsbtnbv, uintoU52zO, {from: accounts[3]});
		const stringGBdGwiX = await XenoFelixDbAvgvn.symbol.call({from: accounts[0]});
		const uint256QBX2i50 = await XenoFelixDbAvgvn.balanceOf.call(addressfvjJ0H, {from: accounts[2]});

		assert.equal(boolajYcEZ7, true)
		await expect(XenoFelixDbAvgvn.lock.call(addressL2UcMr, uintsbtnbv, uintoU52zO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})