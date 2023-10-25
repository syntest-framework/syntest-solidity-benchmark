const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintK6yvS9z = BigInt("204")
		const stringn5ZyuZf = "kk1EgeLpo4IejjRyrhwKpRnxusyNGd6Q9RA1PFT87pVDKsnGUOLCQ3KMMBzSHhIfV1my"
		const stringhJt2i9 = "fGMuz1roZpnHAm1uKdJroLix8elQs"
		const MARVELCOINcGOi8f = await MARVELCOIN.new(uintK6yvS9z, stringn5ZyuZf, stringhJt2i9, {from: accounts[2]});
		const uintJvkQGMk = BigInt("1416")
		const addressjVHLiXa = accounts[2]
		const addressshrnZLX = accounts[3]
		const uintihPbleM = BigInt("1145")
		const addressRpekFPp = accounts[1]
		const uintty0XEAE = BigInt("2029")
		const addressPwDqgE7 = accounts[2]
//		const booltaPlJEY = await MARVELCOINcGOi8f.transferFrom.call(addressshrnZLX, addressjVHLiXa, uintJvkQGMk, {from: accounts[0]});
//		const boolpYJZFbZ = await MARVELCOINcGOi8f.approve.call(addressRpekFPp, uintihPbleM, {from: accounts[0]});
//		const booljPJ4Hdv = await MARVELCOINcGOi8f.approve.call(addressPwDqgE7, uintty0XEAE, {from: accounts[1]});

		await expect(MARVELCOINcGOi8f.transferFrom.call(addressshrnZLX, addressjVHLiXa, uintJvkQGMk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintJCMICQe = BigInt("67")
		const stringWq0x2OM = "tydEohNsQrUrWQuuKcj84QSpdIgwqNtN49dWq1h9"
		const stringCbkrbsI = "rmvhXBLDGBfsO6HadGC3v"
		const MARVELCOINHkxvsEj = await MARVELCOIN.new(uintJCMICQe, stringWq0x2OM, stringCbkrbsI, {from: accounts[3]});
		const uintntLafF4 = BigInt("332")
		const addressmwMsOjx = accounts[0]
		const uintB6qE7QK = BigInt("1068")
		const addressNBiLiI3 = accounts[1]
		const uintXeu39lW = BigInt("1706")
		const addressHxKuZH = accounts[4]
		const addressUQ02hsU = accounts[1]
		const boolzy9wuR = await MARVELCOINHkxvsEj.approve.call(addressmwMsOjx, uintntLafF4, {from: accounts[2]});
//		const booll0otvRR = await MARVELCOINHkxvsEj.transfer.call(addressNBiLiI3, uintB6qE7QK, {from: accounts[5]});
//		const boolGcNUQXH = await MARVELCOINHkxvsEj.transferFrom.call(addressUQ02hsU, addressHxKuZH, uintXeu39lW, {from: accounts[2]});

		assert.equal(boolzy9wuR, true)
		await expect(MARVELCOINHkxvsEj.transfer.call(addressNBiLiI3, uintB6qE7QK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintbUxOYsx = BigInt("164")
		const stringQxyeum9 = "MXPp5hScVatAzpI"
		const stringmH9pVKq = "wti4FaSX0QQAgNx8S0EUwKaLLwNeUAOSMAKlt6kt2Ocx"
		const MARVELCOINBekRULw = await MARVELCOIN.new(uintbUxOYsx, stringQxyeum9, stringmH9pVKq, {from: accounts[2]});
		const byteIyHOHcV = "0x20160317060f1c081d090b14041219190a051711051b1c10120b0601171d"
		const uintbvt1ECW = BigInt("1140")
		const addressG38LlZI = accounts[1]
		const uintrOS6dtW = BigInt("1667")
		const addressVZ3ScWw = accounts[0]
		const uintX8aWaSj = BigInt("74")
		const uinteYcrUhC = BigInt("1183")
		const addressxKRnAWu = "0x0000000000000000000000000000000000000001"
		const addresss1zMAns = accounts[3]
		const byteyrCQYpw = "0x181d11000107011e0c1b18090e0304160a0a19061a1e1a1a0a0520201e02051b"
		const uintg9H0IG = BigInt("1082")
		const addressEwY2jzP = accounts[1]
//		const boolopdnxlV = await MARVELCOINBekRULw.approveAndCall.call(addressG38LlZI, uintbvt1ECW, byteIyHOHcV, {from: accounts[0]});
//		const boolft6IxwC = await MARVELCOINBekRULw.approve.call(addressVZ3ScWw, uintrOS6dtW, {from: accounts[0]});
//		const boolidbhEca = await MARVELCOINBekRULw.burn.call(uintX8aWaSj, {from: accounts[2]});
//		const boolp0CvkV8 = await MARVELCOINBekRULw.transferFrom.call(addresss1zMAns, addressxKRnAWu, uinteYcrUhC, {from: accounts[0]});
//		const booleWxAg41 = await MARVELCOINBekRULw.approveAndCall.call(addressEwY2jzP, uintg9H0IG, byteyrCQYpw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINBekRULw.approveAndCall.call(addressG38LlZI, uintbvt1ECW, byteIyHOHcV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintMFapCVP = BigInt("677")
		const stringwfcPKeE = "WU3YxCMEemQGAbhKQOBrLjpIPmcSaCHkEgKgAg4YkOOvYBk8YV5lNQgYgB9xjSd8caimnKI87NM2fsAO8t4vudAWw0VWqLuG6"
		const stringdRaGP9C = "TAA1mCtws8qKyLIgDjU49e5Rtzd80mjfIxvU6kE5xLn7ylFw"
		const MARVELCOINsc15jMt = await MARVELCOIN.new(uintMFapCVP, stringwfcPKeE, stringdRaGP9C, {from: "0x0000000000000000000000000000000000000001"});
		const byteMwHP1C2 = "0x1f120f171c0d0305100a17090f090806140c0a1e021c15"
		const uintovoX5T9 = BigInt("532")
		const addressPcMvCIw = accounts[3]
		const uinthuKc8UO = BigInt("1173")
		const uintaMHUaP8 = BigInt("1314")
		const addressvAqdco = accounts[0]
		const bytecQc0vBE = "0x0d0302130b0d1c"
		const uintgbKGIw4 = BigInt("1128")
		const addressEMxwtx = accounts[4]
		const uint7bzwh2 = BigInt("1373")
		const addressh0fhzx2 = "0x0000000000000000000000000000000000000001"
		const boolAzDUXMt = await MARVELCOINsc15jMt.approveAndCall.call(addressPcMvCIw, uintovoX5T9, byteMwHP1C2, {from: accounts[1]});
		const boolIhsHY4 = await MARVELCOINsc15jMt.burn.call(uinthuKc8UO, {from: accounts[2]});
		const boolX6LHbUL = await MARVELCOINsc15jMt.approve.call(addressvAqdco, uintaMHUaP8, {from: accounts[1]});
		const boolD3vAo3b = await MARVELCOINsc15jMt.approveAndCall.call(addressEMxwtx, uintgbKGIw4, bytecQc0vBE, {from: accounts[1]});
		const boolIX68HUn = await MARVELCOINsc15jMt.approve.call(addressh0fhzx2, uint7bzwh2, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintvrAHYi6 = BigInt("1455")
		const stringMwrd4r = "C95fdN6xR4hF6I4l4ZLWOEHJGoNpSDKqopZQqppBncv0fdU8oKmYjgASPBNF2KQqD1n4CyAElaM"
		const stringfvhSCt9 = "WwBacCMp39zJhB2lSVqQ2NC9J54JSNF14cdmV7j437TwvdOPhCS2"
		const MARVELCOINeoJWF1J = await MARVELCOIN.new(uintvrAHYi6, stringMwrd4r, stringfvhSCt9, {from: accounts[4]});
		const uintxFHwhGV = BigInt("269")
		const uintZ2iXtaZ = BigInt("1510")
		const uintBt59Xp1 = BigInt("496")
		const addressRI7X1oR = accounts[3]
		const uintXm4cD4h = BigInt("849")
		const addressocGyleX = accounts[4]
		const bytehGl27Bu = "0x0500181b0a"
		const uintlUV7lvo = BigInt("761")
		const addressWVdFDPB = accounts[4]
		const uintUTFxgu0 = BigInt("150")
		const addressmOBQxe9 = accounts[0]
//		const boolRHM8G0I = await MARVELCOINeoJWF1J.burn.call(uintxFHwhGV, {from: "0x0000000000000000000000000000000000000001"});
//		const booluPDT3Kx = await MARVELCOINeoJWF1J.burn.call(uintZ2iXtaZ, {from: accounts[2]});
//		const boolcbdxQVc = await MARVELCOINeoJWF1J.transfer.call(addressRI7X1oR, uintBt59Xp1, {from: accounts[2]});
//		const boolEdR8Ug = await MARVELCOINeoJWF1J.approve.call(addressocGyleX, uintXm4cD4h, {from: accounts[0]});
//		const boolIRLeyLU = await MARVELCOINeoJWF1J.approveAndCall.call(addressWVdFDPB, uintlUV7lvo, bytehGl27Bu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWFkZI7X = await MARVELCOINeoJWF1J.transfer.call(addressmOBQxe9, uintUTFxgu0, {from: accounts[2]});

		await expect(MARVELCOINeoJWF1J.burn.call(uintxFHwhGV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintnF9QE24 = BigInt("1951")
		const stringe9N975a = "0VaaafTxALOCYRzRvQeOWBMrvDtMagdZKCBV5d2JUPUowcugN1PGjcfJ0uJsj4VHQAU1y"
		const stringMexX1Gv = "FqA7C167gzdLNeQ43cEmRpeh7YMZNeFuUcOEKruF2u9iVq9fpWouhPa4EokmfKdru"
		const MARVELCOINUgGZA7Z = await MARVELCOIN.new(uintnF9QE24, stringe9N975a, stringMexX1Gv, {from: accounts[3]});
		const uintVslojx = BigInt("475")
		const addressQwFeBO7 = "0x0000000000000000000000000000000000000001"
		const byteRzHzqr = "0x19040f110c161a1c160f0a0407020d0c1814"
		const uintF7xYu9 = BigInt("911")
		const addressy7M6CcU = accounts[2]
//		const boolGCDKCtM = await MARVELCOINUgGZA7Z.burnFrom.call(addressQwFeBO7, uintVslojx, {from: accounts[4]});
//		const boolFvMsz6R = await MARVELCOINUgGZA7Z.approveAndCall.call(addressy7M6CcU, uintF7xYu9, byteRzHzqr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINUgGZA7Z.burnFrom.call(addressQwFeBO7, uintVslojx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintVHU1xU9 = BigInt("67")
		const stringWq0x2OM = "tydEohNsQrUrWQuuKcj84QSpdIgwqNtN49dWq1h9"
		const stringCbkrbsI = "rmvhXBLDGBfsO6HadGC3v"
		const MARVELCOINHkxvsEj = await MARVELCOIN.new(uintVHU1xU9, stringWq0x2OM, stringCbkrbsI, {from: accounts[3]});
		const uinti0OmyX4 = BigInt("342")
		const addressmc4WVet = accounts[0]
		const uintsPNEELs = BigInt("831")
		const uintEtooXx2 = BigInt("1068")
		const addressEUf6X6e = accounts[1]
		const uintZo07sle = BigInt("1706")
		const addressW27MN2S = accounts[4]
		const addresswdW0Gm5 = accounts[1]
		const uintoxx40wV = BigInt("1063")
		const addressVmWuSWf = accounts[4]
		const addresshz2yoS7 = accounts[5]
		const boolzy9wuR = await MARVELCOINHkxvsEj.approve.call(addressmc4WVet, uinti0OmyX4, {from: accounts[2]});
		const boolB3tIGH = await MARVELCOINHkxvsEj.burn.call(uintsPNEELs, {from: accounts[3]});
//		const booll0otvRR = await MARVELCOINHkxvsEj.transfer.call(addressEUf6X6e, uintEtooXx2, {from: accounts[5]});
//		const boolGcNUQXH = await MARVELCOINHkxvsEj.transferFrom.call(addresswdW0Gm5, addressW27MN2S, uintZo07sle, {from: accounts[2]});
//		const boolGinjPrI = await MARVELCOINHkxvsEj.transferFrom.call(addresshz2yoS7, addressVmWuSWf, uintoxx40wV, {from: accounts[3]});

		assert.equal(boolB3tIGH, true)
		assert.equal(boolzy9wuR, true)
		await expect(MARVELCOINHkxvsEj.transfer.call(addressEUf6X6e, uintEtooXx2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintFj7oGpP = BigInt("1951")
		const stringe9N975a = "0VaaafTxALOCYRzRvQeOWBMrvDtMagdZKCBV5d2JUPUowcugN1PGjcfJ0uJsj4VHQAU1y"
		const stringMexX1Gv = "FqA7C167gzdLNeQ43cEmRpeh7YMZNeFuUcOEKruF2u9iVq9fpWouhPa4EokmfKdru"
		const MARVELCOINUgGZA7Z = await MARVELCOIN.new(uintFj7oGpP, stringe9N975a, stringMexX1Gv, {from: accounts[3]});
		const uintGbq7YrC = BigInt("475")
		const address25OI5B = "0x00000000000000000000000000000000000000-1"
//		const boolGCDKCtM = await MARVELCOINUgGZA7Z.burnFrom.call(address25OI5B, uintGbq7YrC, {from: accounts[4]});

		await expect(MARVELCOINUgGZA7Z.burnFrom.call(address25OI5B, uintGbq7YrC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintHHbXClZ = BigInt("1817")
		const stringOsG8FZ7 = "Uat5l2Ngx5Y6IQQYoM4ndTmJ9xByBDw5"
		const stringhFXPK3e = "oawj8qUflTGvYfQpCC9YjmoTign"
		const MARVELCOINMYoCqXC = await MARVELCOIN.new(uintHHbXClZ, stringOsG8FZ7, stringhFXPK3e, {from: accounts[4]});
		const uintBUDYIzI = BigInt("357")
		const addressk2JnHRn = accounts[4]
		const byteBPwVJ5V = "0x1d1018040f1d191402170e0a1c0c10"
		const uintExVPQZH = BigInt("537")
		const addressiyztOhI = accounts[3]
		const uintZJNugbp = BigInt("1796")
		const addresssZhOlGi = accounts[2]
//		const boolbLEQEgO = await MARVELCOINMYoCqXC.burnFrom.call(addressk2JnHRn, uintBUDYIzI, {from: accounts[3]});
//		const boolZ3ssGMe = await MARVELCOINMYoCqXC.approveAndCall.call(addressiyztOhI, uintExVPQZH, byteBPwVJ5V, {from: accounts[2]});
//		const boolIaUa1B9 = await MARVELCOINMYoCqXC.transfer.call(addresssZhOlGi, uintZJNugbp, {from: accounts[2]});

		await expect(MARVELCOINMYoCqXC.burnFrom.call(addressk2JnHRn, uintBUDYIzI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintu5oT2k = BigInt("67")
		const stringWq0x2OM = "tydEohNsQrUrWQuuKcj84QSpdIgwqNtN49dWq1h9"
		const stringCbkrbsI = "rmvhXBLDGBfsO6HadGC3v"
		const MARVELCOINHkxvsEj = await MARVELCOIN.new(uintu5oT2k, stringWq0x2OM, stringCbkrbsI, {from: accounts[3]});
		const uintjrJJAnN = BigInt("1094")
		const addressSM6sW86 = accounts[5]
		const uintt4uHb7Z = BigInt("231")
		const addresss7aXH2t = "0x0000000000000000000000000000000000000001"
		const uintlAEg2rV = BigInt("1039")
		const addressU6uRge9 = accounts[2]
		const boolM8lTu1i = await MARVELCOINHkxvsEj.approve.call(addressSM6sW86, uintjrJJAnN, {from: accounts[0]});
		const boolhZ1z8hk = await MARVELCOINHkxvsEj.transfer.call(addresss7aXH2t, uintt4uHb7Z, {from: accounts[3]});
//		const booll0otvRR = await MARVELCOINHkxvsEj.transfer.call(addressU6uRge9, uintlAEg2rV, {from: accounts[5]});

		assert.equal(boolM8lTu1i, true)
		assert.equal(boolhZ1z8hk, true)
		await expect(MARVELCOINHkxvsEj.transfer.call(addressU6uRge9, uintlAEg2rV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})