const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintHLDamqR = BigInt("582")
		const stringuRDX2AF = "Kua8B"
		const stringE2sjfKh = "3F6uivRi5o2QTyrFVZ4amopRsYSeaGtujw4hw1LE8HhAFFQTuDJIaNMMC7PL"
		const MARVELCOINczq6qrd = await MARVELCOIN.new(uintHLDamqR, stringuRDX2AF, stringE2sjfKh, {from: accounts[4]});
		const byteiXaWeM2 = "0x18060c1b071d1a09181d"
		const uintfXYfU6V = BigInt("1410")
		const addressJteeUn0 = accounts[1]
		const uintCEWYovA = BigInt("1609")
		const address0M3Urh = accounts[1]
		const bytey72Ng6k = "0x110817100e1804060813"
		const uintVbnwUPK = BigInt("1381")
		const addresscgwY75X = accounts[1]
//		const boolnbTiVV1 = await MARVELCOINczq6qrd.approveAndCall.call(addressJteeUn0, uintfXYfU6V, byteiXaWeM2, {from: accounts[0]});
//		const boold7J0REb = await MARVELCOINczq6qrd.approve.call(address0M3Urh, uintCEWYovA, {from: accounts[4]});
//		const boolwIRYonC = await MARVELCOINczq6qrd.approveAndCall.call(addresscgwY75X, uintVbnwUPK, bytey72Ng6k, {from: accounts[4]});

		await expect(MARVELCOINczq6qrd.approveAndCall.call(addressJteeUn0, uintfXYfU6V, byteiXaWeM2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintbJ4yfFV = BigInt("1246")
		const stringL8tnpn = "S"
		const stringG2wpH2f = "uIgbdmLugjrSVz5xvCXtRR64oHgwqxc4pp8n"
		const MARVELCOINsJeDRuB = await MARVELCOIN.new(uintbJ4yfFV, stringL8tnpn, stringG2wpH2f, {from: "0x0000000000000000000000000000000000000001"});
		const uintMFyV6jY = BigInt("1122")
		const addresstlDm6u7 = accounts[3]
		const byteLrIPYgG = "0x1305171f0710060b02191602100d11131115060111"
		const uintipoiZTz = BigInt("1109")
		const addressSfRJ3gB = accounts[0]
		const uintTV7q1ru = BigInt("373")
		const addressACz626J = accounts[0]
		const addressl9PnEX7 = accounts[2]
		const bytefCdWG6X = "0x111d0e18050d011f121d070b151d021a1e180d1c04120d161813"
		const uintqHsuCO = BigInt("212")
		const addressqTfe9Wc = accounts[1]
		const uintD5JRSpN = BigInt("1254")
		const addressxJg48Fq = accounts[5]
		const addressJ1hlxrG = accounts[4]
		const bytedLQJkXG = "0x1b03030607120706060212081c1e"
		const uintwAwkYtL = BigInt("1096")
		const addressJ2zcaSU = accounts[4]
		const boolEqn5Dao = await MARVELCOINsJeDRuB.approve.call(addresstlDm6u7, uintMFyV6jY, {from: "0x0000000000000000000000000000000000000001"});
		const boolwA7bbjM = await MARVELCOINsJeDRuB.approveAndCall.call(addressSfRJ3gB, uintipoiZTz, byteLrIPYgG, {from: accounts[2]});
		const boolluJZKo9 = await MARVELCOINsJeDRuB.transferFrom.call(addressl9PnEX7, addressACz626J, uintTV7q1ru, {from: accounts[4]});
		const boolw35t1Of = await MARVELCOINsJeDRuB.approveAndCall.call(addressqTfe9Wc, uintqHsuCO, bytefCdWG6X, {from: accounts[0]});
		const boolDojOCp = await MARVELCOINsJeDRuB.transferFrom.call(addressJ1hlxrG, addressxJg48Fq, uintD5JRSpN, {from: accounts[4]});
		const boole6llq0m = await MARVELCOINsJeDRuB.approveAndCall.call(addressJ2zcaSU, uintwAwkYtL, bytedLQJkXG, {from: accounts[1]});
	});

	it('test for MARVELCOIN', async () => {
		const uintEiUbrdX = BigInt("1202")
		const stringy0Mvmeo = "Nl5BrXmJXcyZOAQMciH7Gr"
		const stringn8j2mpw = "zRbXfVzFxT2k61lZHHz8okipsalQNMnvBbhK49Qdbu5CQQPK86YDTxTqTJhmlapMhAmreZPYeJU3sFd26nxHonRXwVTA"
		const MARVELCOINdCqWhUw = await MARVELCOIN.new(uintEiUbrdX, stringy0Mvmeo, stringn8j2mpw, {from: accounts[3]});
		const uintgoTeOzc = BigInt("248")
		const addressvRG1VU1 = accounts[4]
		const uintFcCtxwM = BigInt("1248")
		const addresss8Y8ye4 = accounts[2]
		const byteWXElXUs = "0x0703041518020509170615050a0d180d1f0905"
		const uintwoZfIpr = BigInt("1854")
		const addressrMWxKQ = accounts[2]
		const uintullL7D = BigInt("2046")
		const addressSrXcA2a = accounts[2]
		const addresspbEpM9 = accounts[1]
		const uintex227cM = BigInt("329")
		const addresszTUo6Ad = accounts[3]
//		const boolIEv6Vf = await MARVELCOINdCqWhUw.burnFrom.call(addressvRG1VU1, uintgoTeOzc, {from: accounts[1]});
//		const boolIIfhSRT = await MARVELCOINdCqWhUw.approve.call(addresss8Y8ye4, uintFcCtxwM, {from: accounts[3]});
//		const boolNbkK2ZK = await MARVELCOINdCqWhUw.approveAndCall.call(addressrMWxKQ, uintwoZfIpr, byteWXElXUs, {from: accounts[4]});
//		const boolw9Gv1Jt = await MARVELCOINdCqWhUw.transferFrom.call(addresspbEpM9, addressSrXcA2a, uintullL7D, {from: accounts[0]});
//		const boolUulbJeN = await MARVELCOINdCqWhUw.approve.call(addresszTUo6Ad, uintex227cM, {from: accounts[1]});

		await expect(MARVELCOINdCqWhUw.burnFrom.call(addressvRG1VU1, uintgoTeOzc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkRvL6S = BigInt("1192")
		const stringGRuAF5s = "NgPqW1Y9gMzNNRM2NTLnsnSIBdY8JdrjbJjBDNYDQROjptQlqhsauYWkpMfbS2npBQNYE4psAzw"
		const stringTQWD1NY = "miFJaO7cpF6pNJb6KLnkb65H4lYFYdVXw7F7wXL4EiaJ"
		const MARVELCOINJmmSRrZ = await MARVELCOIN.new(uintkRvL6S, stringGRuAF5s, stringTQWD1NY, {from: accounts[5]});
		const uintFcYNypl = BigInt("1393")
		const addressWAihWPP = accounts[2]
		const addresseKHwnF = accounts[1]
		const uintqzxis3M = BigInt("612")
		const addressk30CKI = accounts[3]
		const uintopFix2A = BigInt("1963")
		const addressq4kwVzl = accounts[5]
		const addressbwJ2EsN = accounts[3]
//		const boolfYH7qrI = await MARVELCOINJmmSRrZ.transferFrom.call(addresseKHwnF, addressWAihWPP, uintFcYNypl, {from: accounts[0]});
//		const boolgThIHfH = await MARVELCOINJmmSRrZ.burnFrom.call(addressk30CKI, uintqzxis3M, {from: accounts[3]});
//		const booluCXDoL = await MARVELCOINJmmSRrZ.transferFrom.call(addressbwJ2EsN, addressq4kwVzl, uintopFix2A, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINJmmSRrZ.transferFrom.call(addresseKHwnF, addressWAihWPP, uintFcYNypl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintETYqDVO = BigInt("1262")
		const stringrDZIbyS = "pGCcPmVTLeHhUYMEWHxds"
		const stringg0sKuGr = "z9d0t4H85AEy6b04T5gc15Wifj44MhtaFzc1IeerMFA99ygnFRp4GMseXRV3V86RAGo3jYEz7Nr6uYGtGaJwP5dXIym"
		const MARVELCOINDFkPuYN = await MARVELCOIN.new(uintETYqDVO, stringrDZIbyS, stringg0sKuGr, {from: accounts[4]});
		const uintM9AAB9x = BigInt("1742")
		const addresscLZIXuh = accounts[0]
		const uintxy8NIe7 = BigInt("1102")
		const addressZReqwC = accounts[1]
		const uintq4pJwt = BigInt("1792")
		const addressENMDzh = accounts[2]
//		const boolXRX7e73 = await MARVELCOINDFkPuYN.transfer.call(addresscLZIXuh, uintM9AAB9x, {from: accounts[1]});
//		const booloxlk5os = await MARVELCOINDFkPuYN.transfer.call(addressZReqwC, uintxy8NIe7, {from: accounts[5]});
//		const boolxXFAPGz = await MARVELCOINDFkPuYN.approve.call(addressENMDzh, uintq4pJwt, {from: accounts[1]});

		await expect(MARVELCOINDFkPuYN.transfer.call(addresscLZIXuh, uintM9AAB9x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintrL1fLN2 = BigInt("1460")
		const stringPyYq1QS = "7ns7M3aDFFGgmqjAj17w5P9n8"
		const stringUXaB4IL = "b9BoRDn4Aq2fECW49VjyJyipRP9iIKvNhwhyMYY49oT3jEa7TPQ"
		const MARVELCOINNAcrW6A = await MARVELCOIN.new(uintrL1fLN2, stringPyYq1QS, stringUXaB4IL, {from: accounts[4]});
		const uintAOwjUiD = BigInt("1707")
		const uintD18yiis = BigInt("1161")
		const addressSpCBHyP = accounts[5]
		const addressRg26yI1 = accounts[0]
		const uintCxFp3lT = BigInt("1079")
		const uintEFflaxm = BigInt("925")
//		const boolUBGUuHH = await MARVELCOINNAcrW6A.burn.call(uintAOwjUiD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQdcPkpm = await MARVELCOINNAcrW6A.transferFrom.call(addressRg26yI1, addressSpCBHyP, uintD18yiis, {from: accounts[3]});
//		const boolvXfxubT = await MARVELCOINNAcrW6A.burn.call(uintCxFp3lT, {from: accounts[5]});
//		const boolD01uIU = await MARVELCOINNAcrW6A.burn.call(uintEFflaxm, {from: accounts[1]});

		await expect(MARVELCOINNAcrW6A.burn.call(uintAOwjUiD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uint3ywtBX = BigInt("61")
		const stringFBrWtj = "ONsw19pW8ZQzG4nuB4FKY6fN4lMwTChA"
		const stringkI5e2jB = "aXPq8CrwJbR1a0Yx7jNtuUYsg38jh3eDA1W7iOKbyX75zG4BZ0Ttildg"
		const MARVELCOINkvCfnuy = await MARVELCOIN.new(uint3ywtBX, stringFBrWtj, stringkI5e2jB, {from: accounts[0]});
		const uintgdGayGZ = BigInt("451")
		const addressuAqimEb = accounts[0]
		const uintoMfu2Hh = BigInt("950")
		const addressf05JWwY = accounts[4]
		const addressb6qt0w6 = accounts[2]
		const uintBIYrELH = BigInt("1066")
		const addressIvYrba7 = accounts[2]
		const addresstAmxPRG = accounts[0]
		const uintDdj16ZU = BigInt("1748")
		const addressLk9aAxB = accounts[1]
		const uintF1FpwWg = BigInt("2028")
		const uintzJDB8k1 = BigInt("45")
//		const boolaMAd0th = await MARVELCOINkvCfnuy.burnFrom.call(addressuAqimEb, uintgdGayGZ, {from: accounts[3]});
//		const boolCK5YTfZ = await MARVELCOINkvCfnuy.transferFrom.call(addressb6qt0w6, addressf05JWwY, uintoMfu2Hh, {from: accounts[0]});
//		const boolZ53DH7r = await MARVELCOINkvCfnuy.transferFrom.call(addresstAmxPRG, addressIvYrba7, uintBIYrELH, {from: accounts[2]});
//		const boolOrhrvgT = await MARVELCOINkvCfnuy.approve.call(addressLk9aAxB, uintDdj16ZU, {from: accounts[4]});
//		const boolJVnwHGI = await MARVELCOINkvCfnuy.burn.call(uintF1FpwWg, {from: accounts[4]});
//		const bool99ZOGC = await MARVELCOINkvCfnuy.burn.call(uintzJDB8k1, {from: accounts[3]});

		await expect(MARVELCOINkvCfnuy.burnFrom.call(addressuAqimEb, uintgdGayGZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintqD6rZs8 = BigInt("582")
		const stringuRDX2AF = "Kua8B"
		const stringE2sjfKh = "3F6uivRi5o2QTyrFVZ4amopRsYSeaGtujw4hw1LE8HhAFFQTuDJIaNMMC7PL"
		const MARVELCOINczq6qrd = await MARVELCOIN.new(uintqD6rZs8, stringuRDX2AF, stringE2sjfKh, {from: accounts[4]});
		const uintwNsVSvo = BigInt("497")
		const address3ImjmW = accounts[4]
		const bytesqfepYl = "0x110817100e1804060813"
		const uintGn3m5Ir = BigInt("1379")
		const addressbKgK1pp = accounts[1]
		const bool9edbpv = await MARVELCOINczq6qrd.transfer.call(address3ImjmW, uintwNsVSvo, {from: accounts[4]});
//		const boolwIRYonC = await MARVELCOINczq6qrd.approveAndCall.call(addressbKgK1pp, uintGn3m5Ir, bytesqfepYl, {from: accounts[4]});

		assert.equal(bool9edbpv, true)
		await expect(MARVELCOINczq6qrd.approveAndCall.call(addressbKgK1pp, uintGn3m5Ir, bytesqfepYl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintS3BSSv = BigInt("1192")
		const stringGRuAF5s = "NgPqW1Y9gMzNNRM2NTLnsnSIBdY8JdrjbJjBDNYDQROjptQlqhsauYWkpMfbS2npBQNYE4psAzw"
		const stringTQWD1NY = "miFJaO7cpF6pNJb6KLnkb65H4lYFYdVXw7F7wXL4EiaJ"
		const MARVELCOINJmmSRrZ = await MARVELCOIN.new(uintS3BSSv, stringGRuAF5s, stringTQWD1NY, {from: accounts[5]});
		const uintpXZN9oW = BigInt("117")
		const uintRTIkIg = BigInt("120")
		const uintxLWlgBU = BigInt("1393")
		const addressfEObLQp = accounts[2]
		const addressqBtljSD = accounts[1]
		const uintlaUV9BP = BigInt("455")
		const addressdz8NX7V = accounts[0]
		const uintJ6dCCye = BigInt("1963")
		const addressOPpz49k = accounts[5]
		const addressyiuCuv2 = accounts[5]
		const boolH5kl0Aj = await MARVELCOINJmmSRrZ.burn.call(uintpXZN9oW, {from: accounts[5]});
		const boolER6YY3L = await MARVELCOINJmmSRrZ.burn.call(uintRTIkIg, {from: accounts[5]});
//		const boolfYH7qrI = await MARVELCOINJmmSRrZ.transferFrom.call(addressqBtljSD, addressfEObLQp, uintxLWlgBU, {from: accounts[0]});
//		const boolufbNTXI = await MARVELCOINJmmSRrZ.burnFrom.call(addressdz8NX7V, uintlaUV9BP, {from: accounts[0]});
//		const booluCXDoL = await MARVELCOINJmmSRrZ.transferFrom.call(addressyiuCuv2, addressOPpz49k, uintJ6dCCye, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolER6YY3L, true)
		assert.equal(boolH5kl0Aj, true)
		await expect(MARVELCOINJmmSRrZ.transferFrom.call(addressqBtljSD, addressfEObLQp, uintxLWlgBU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})