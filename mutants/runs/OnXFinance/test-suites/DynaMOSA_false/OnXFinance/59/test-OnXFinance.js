const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringstKXVfP = "9ELgCX2QURtjFaXJWvU6AUpuBwdyP9AVV"
		const stringbz4JPkX = "kl6mrfF95uhB7pwKFonERAAA73ymMoxMcjQQpKxfCZFKaUOA1AMciAi8WgtcOGoyt1Djq1Awb2mvECX3JgH9nS"
		const uintukfZut5 = BigInt("45")
		const OnXFinanceV4llnF = await OnXFinance.new(stringstKXVfP, stringbz4JPkX, uintukfZut5, {from: accounts[1]});
		const addressenHwilB = accounts[1]
		const addressE5I8gvn = accounts[1]
		const uintXT737yV = BigInt("1540")
		const addressjHra1Gp = "0x0000000000000000000000000000000000000001"
		const uintuCV8Od = await OnXFinanceV4llnF.allowance.call(addressE5I8gvn, addressenHwilB, {from: accounts[2]});
		const uintgJexQVD = await OnXFinanceV4llnF.totalSupply.call({from: accounts[5]});
		const boolOCMzakr = await OnXFinanceV4llnF.approve.call(addressjHra1Gp, uintXT737yV, {from: accounts[5]});

		assert.equal(boolOCMzakr, true)
		assert.equal(uintgJexQVD, BigInt("45000000000000000000"))
		assert.equal(uintuCV8Od, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringEPLAna3 = "gPhbCIBAXsP8GQpao6RborQ0NyKYjrG3RuwWviH"
		const stringsH3oslE = "RfngWuqzqKrWEHohT1fOxvGxfekOshCfxGJeJFbMklfD7MjASpdk4SXAyTUwLb3WWaAvMtbmKCIB8q3pEBTh4y0h44C9vl"
		const uintTYiiVTg = BigInt("45")
		const OnXFinanceLOHXwVF = await OnXFinance.new(stringEPLAna3, stringsH3oslE, uintTYiiVTg, {from: accounts[4]});
		const uintTvCKzIy = BigInt("1363")
		const addresso35HWXY = accounts[0]
		const addressLuspEUx = accounts[0]
		const addresssDW9WIW = accounts[4]
		const uintk9uRHQR = BigInt("310")
		const addressRVctG38 = "0x0000000000000000000000000000000000000001"
		const addressiG6GFW6 = accounts[3]
		const uintJ1H3SJ1 = BigInt("1604")
		const addresslPlNfwa = accounts[3]
		const boolEi1wQuv = await OnXFinanceLOHXwVF.approve.call(addresso35HWXY, uintTvCKzIy, {from: "0x0000000000000000000000000000000000000001"});
		const uintnkt9kA = await OnXFinanceLOHXwVF.allowance.call(addresssDW9WIW, addressLuspEUx, {from: accounts[1]});
		const boolDx6r8e0 = await OnXFinanceLOHXwVF.transferFrom.call(addressiG6GFW6, addressRVctG38, uintk9uRHQR, {from: accounts[0]});
		const stringuTZq9gm = await OnXFinanceLOHXwVF.symbol.call({from: accounts[0]});
		const stringQKQr6EH = await OnXFinanceLOHXwVF.name.call({from: accounts[1]});
		const boolftyUnrM = await OnXFinanceLOHXwVF.approve.call(addresslPlNfwa, uintJ1H3SJ1, {from: accounts[5]});

		assert.equal(boolEi1wQuv, true)
		assert.equal(uintnkt9kA, BigInt("0"))
		await expect(OnXFinanceLOHXwVF.transferFrom.call(addressiG6GFW6, addressRVctG38, uintk9uRHQR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringrla7BvR = "3reVzaxDmsoIcocHPXPfZOvgywP8AVuztOtl9WPhxDNFHTOWFDV8q0xIT84HLKDJ94J1BhO5pg4HrKdAKDl8AonMl"
		const stringa1UNfz = "7Al8sKL1r2GXNxsIvEcHxWi9XAwyMHUqiB6nJj8Jaj899h1DoiBJNOwmUGh6OL3k4HThzSGgaxAlu8URKWnaUbKf"
		const uint1FjE2t = BigInt("1368")
		const OnXFinanceVUQQthn = await OnXFinance.new(stringrla7BvR, stringa1UNfz, uint1FjE2t, {from: accounts[3]});
		const uintCKDfbf = BigInt("2018")
		const addressg40uEgy = accounts[0]
		const uintToPosYT = BigInt("260")
		const addressUbm3ZgV = accounts[3]
		const addressYXQdqjP = accounts[3]
		const uintTcsxw3b = BigInt("1807")
		const addressU8NzaiF = accounts[5]
		const addresszrc9XnG = accounts[0]
		const addresseLxhvJI = accounts[5]
		const boolJGGE7CV = await OnXFinanceVUQQthn.transfer.call(addressg40uEgy, uintCKDfbf, {from: accounts[4]});
		const boolWpgri4K = await OnXFinanceVUQQthn.transferFrom.call(addressYXQdqjP, addressUbm3ZgV, uintToPosYT, {from: accounts[3]});
		const boolmQsq2h = await OnXFinanceVUQQthn.transfer.call(addressU8NzaiF, uintTcsxw3b, {from: accounts[0]});
		const uintmHiwQF = await OnXFinanceVUQQthn.allowance.call(addresseLxhvJI, addresszrc9XnG, {from: accounts[4]});

		await expect(OnXFinanceVUQQthn.transfer.call(addressg40uEgy, uintCKDfbf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringoKF4JhB = "MmeeU3EwhdX51BVuD8tzDXCTpDME3QLKNwa3uBYwPQ"
		const stringoxYqwd = "P3nz2TXS8T6ZRmvAjwLa8u1iZT7fQKnbGXLiQ1xlFLhLYXNn1zBPnPzoysGJ7mWt4s7Boi6c6vq97rl"
		const uintJ7N30eB = BigInt("128")
		const OnXFinancewdHWyvh = await OnXFinance.new(stringoKF4JhB, stringoxYqwd, uintJ7N30eB, {from: accounts[4]});
		const uintoYovi9V = BigInt("1994")
		const address9odsMU = accounts[0]
		const boolXQ162tq = await OnXFinancewdHWyvh.approveAndCall.call(address9odsMU, uintoYovi9V, {from: accounts[0]});
		const uintSHmdAVU = await OnXFinancewdHWyvh.totalSupply.call({from: accounts[0]});
		const stringPXA93RH = await OnXFinancewdHWyvh.name.call({from: accounts[4]});

		await expect(OnXFinancewdHWyvh.approveAndCall.call(address9odsMU, uintoYovi9V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringH4OyCgd = "yaE28Lku5W7k4GkDQhUmjIF0epElSXmmudDn4uIGtpF9coOQQY7fPsl8qCtS8f"
		const stringVpk5u05 = "98W5n"
		const uintE2dKhgJ = BigInt("80")
		const OnXFinanceLy10Pxn = await OnXFinance.new(stringH4OyCgd, stringVpk5u05, uintE2dKhgJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintVZkWbCA = BigInt("589")
		const addressIalmPZ7 = "0x0000000000000000000000000000000000000001"
		const stringbIlXxpm = await OnXFinanceLy10Pxn.symbol.call({from: accounts[0]});
		const boolToCLMMS = await OnXFinanceLy10Pxn.decreaseAllowance.call(addressIalmPZ7, uintVZkWbCA, {from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringjJ2jSJN = "IrY3V59o5QcuhlzFBO67tFBHP51ZGTp1k"
		const stringQ2oC63n = "4sVQuCIfhrpTjYT"
		const uintEv9jNTs = BigInt("79")
		const OnXFinancesNWRw1 = await OnXFinance.new(stringjJ2jSJN, stringQ2oC63n, uintEv9jNTs, {from: accounts[2]});
		const uintb95cnxM = BigInt("713")
		const addressKs8rrOa = "0x0000000000000000000000000000000000000001"
		const uintvXjEfR = BigInt("1324")
		const addressVlzEH6p = accounts[2]
		const addressKOWOBXl = accounts[4]
		const boolAxsWkoq = await OnXFinancesNWRw1.increaseAllowance.call(addressKs8rrOa, uintb95cnxM, {from: accounts[0]});
		const stringHRWGCML = await OnXFinancesNWRw1.name.call({from: accounts[0]});
		const uintqMs3DbD = await OnXFinancesNWRw1.totalSupply.call({from: accounts[0]});
		const uint8XFmaeP3 = await OnXFinancesNWRw1.decimals.call({from: accounts[1]});
		const boolJnBho9R = await OnXFinancesNWRw1.increaseAllowance.call(addressVlzEH6p, uintvXjEfR, {from: "0x0000000000000000000000000000000000000001"});
		const uintk83TlLQ = await OnXFinancesNWRw1.balanceOf.call(addressKOWOBXl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinancesNWRw1.increaseAllowance.call(addressKs8rrOa, uintb95cnxM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPQKVLcO = "D4RVAAbbnRYLiqSPRhhT4SK9LmcOGJqsrUI9TEOoHkK6A8U2dwEHGufXm6l40gISHnoscO"
		const stringRHcO5Vs = "bPWSlNVfuGWKtuzP1bfcXNUb3nlmWh8frm1B9m8C0sbODQaUxEea8zzEA"
		const uintLsowkcW = BigInt("10")
		const OnXFinanceVJ1ZKw = await OnXFinance.new(stringPQKVLcO, stringRHcO5Vs, uintLsowkcW, {from: accounts[2]});
		const uintACs7oDV = BigInt("707")
		const addressjsQROgj = "0x0000000000000000000000000000000000000001"
		const uintD2u7dpI = BigInt("1065")
		const addressrz9DwXN = accounts[3]
		const uintTeGVqJv = BigInt("640")
		const addressDaEqPMg = accounts[5]
		const boolSNy5BoM = await OnXFinanceVJ1ZKw.transfer.call(addressjsQROgj, uintACs7oDV, {from: accounts[2]});
		const boolHmBCsJC = await OnXFinanceVJ1ZKw.increaseAllowance.call(addressrz9DwXN, uintD2u7dpI, {from: accounts[4]});
		const bool5jj3uu = await OnXFinanceVJ1ZKw.transfer.call(addressDaEqPMg, uintTeGVqJv, {from: accounts[3]});

		assert.equal(boolSNy5BoM, true)
		await expect(OnXFinanceVJ1ZKw.increaseAllowance.call(addressrz9DwXN, uintD2u7dpI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVjvENiL = "v40Eq1CduMGUSMsJFBHfGMwA3SQDjwn"
		const stringdUHx8kw = "3dYurXuU48GeOuWhhyat2jtJqbmYHazrg"
		const uintXPrAet = BigInt("187")
		const OnXFinancexBZPPE3 = await OnXFinance.new(stringVjvENiL, stringdUHx8kw, uintXPrAet, {from: accounts[0]});
		const addressB223Okt = accounts[2]
		const addresskTLZbI = accounts[0]
		const uinthiZKvR = BigInt("1818")
		const addressra530xE = accounts[2]
		const uinttr9Ib6v = BigInt("772")
		const addressWYSfmYp = accounts[1]
		const uintQBtszG8 = BigInt("1311")
		const addressrwJd4lG = accounts[2]
		const boolnkfRr7V = await OnXFinancexBZPPE3.transferownership.call(addressB223Okt, {from: accounts[4]});
		const uintH4Y6wY6 = await OnXFinancexBZPPE3.balanceOf.call(addresskTLZbI, {from: accounts[4]});
		const uint8kk1Lv09 = await OnXFinancexBZPPE3.decimals.call({from: accounts[1]});
		const boolZGplxq5 = await OnXFinancexBZPPE3.transfer.call(addressra530xE, uinthiZKvR, {from: accounts[5]});
		const boolEKfCfWv = await OnXFinancexBZPPE3.decreaseAllowance.call(addressWYSfmYp, uinttr9Ib6v, {from: accounts[0]});
		const boolTb7uQYD = await OnXFinancexBZPPE3.decreaseAllowance.call(addressrwJd4lG, uintQBtszG8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinancexBZPPE3.transferownership.call(addressB223Okt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringrla7BvR = "3reVzaxDmsoIcocHPXPfZOvgywP8AVuztOtl9WPhxDNFHTOWFDV8q0xIT84HLKDJ94J1BhO5pg4HrKdAKDl8AonMl"
		const stringa1UNfz = "7Al8sKL1r2GXNxsIvEcHxWi9XAwyMHUqiB6nJj8Jaj899h1DoiBJNOwmUGh6OL3k4HThzSGgaxAlu8URKWnaUbKf"
		const uintPY9imLG = BigInt("1368")
		const OnXFinanceVUQQthn = await OnXFinance.new(stringrla7BvR, stringa1UNfz, uintPY9imLG, {from: accounts[3]});
		const uintEzwHXIR = BigInt("1444")
		const addressj4SPqZR = accounts[1]
		const uintxXu7Ic = BigInt("2018")
		const addressWaTAdHy = accounts[0]
		const uintMq7KUCB = BigInt("260")
		const addressuDHZJjL = accounts[4]
		const addressHgqNgrj = accounts[3]
		const addressQvFoLHy = accounts[4]
		const addressPsIoi3x = accounts[3]
		const addressk5P7m7 = accounts[0]
		const uintxy6RpG = BigInt("1807")
		const addressHEKJoS0 = accounts[5]
		const boollsWVei = await OnXFinanceVUQQthn.approveAndCall.call(addressj4SPqZR, uintEzwHXIR, {from: accounts[3]});
		const boolJGGE7CV = await OnXFinanceVUQQthn.transfer.call(addressWaTAdHy, uintxXu7Ic, {from: accounts[4]});
		const boolWpgri4K = await OnXFinanceVUQQthn.transferFrom.call(addressHgqNgrj, addressuDHZJjL, uintMq7KUCB, {from: accounts[3]});
		const uintrRo0SAV = await OnXFinanceVUQQthn.allowance.call(addressPsIoi3x, addressQvFoLHy, {from: accounts[0]});
		const boolTFpRikd = await OnXFinanceVUQQthn.transferownership.call(addressk5P7m7, {from: accounts[2]});
		const boolmQsq2h = await OnXFinanceVUQQthn.transfer.call(addressHEKJoS0, uintxy6RpG, {from: accounts[0]});

		assert.equal(boollsWVei, true)
		await expect(OnXFinanceVUQQthn.transfer.call(addressWaTAdHy, uintxXu7Ic, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringaWx9Wg6 = "i6H3mKDnLUkytJ9hyM3rrFLQKJTX6A6fch9e6ycML3pLlWvoBZNchDjM4"
		const stringWEO4Rzj = "3bUXfXxtawB5Q88rkL1mkDIs2mGnW4So6mIOsn"
		const uintsxINnat = BigInt("38")
		const OnXFinancey9O2pWh = await OnXFinance.new(stringaWx9Wg6, stringWEO4Rzj, uintsxINnat, {from: accounts[4]});
		const uintl8T9BPv = BigInt("0")
		const addressquSADfj = accounts[1]
		const uintU8TQWH = BigInt("489")
		const addressTANubU7 = accounts[1]
		const addressmyXzuNa = accounts[0]
		const addressKCXVqPW = accounts[1]
		const uintcm8mJ89 = BigInt("670")
		const addressG5hjyXz = accounts[1]
		const uintXDAJwtK = BigInt("598")
		const addressjATinsc = accounts[1]
		const addressRZQf2x6 = accounts[2]
		const uintQLzdTUp = BigInt("646")
		const addressPYNnlR = accounts[4]
		const uintUkHNmIY = BigInt("1681")
		const addressggv1W00 = accounts[0]
		const addresssu1C6Gj = accounts[2]
		const booljrIaXAq = await OnXFinancey9O2pWh.transfer.call(addressquSADfj, uintl8T9BPv, {from: accounts[4]});
		const string5DdrNi = await OnXFinancey9O2pWh.symbol.call({from: accounts[1]});
		const boolhutSUyG = await OnXFinancey9O2pWh.transferFrom.call(addressmyXzuNa, addressTANubU7, uintU8TQWH, {from: "0x0000000000000000000000000000000000000001"});
		const uintR0iOB57 = await OnXFinancey9O2pWh.balanceOf.call(addressKCXVqPW, {from: accounts[3]});
		const boolR5ppja5 = await OnXFinancey9O2pWh.approve.call(addressG5hjyXz, uintcm8mJ89, {from: accounts[2]});
		const boolokVbPUs = await OnXFinancey9O2pWh.transferFrom.call(addressRZQf2x6, addressjATinsc, uintXDAJwtK, {from: accounts[2]});
		const booliR01pzO = await OnXFinancey9O2pWh.decreaseAllowance.call(addressPYNnlR, uintQLzdTUp, {from: accounts[4]});
		const boolYgFw5P6 = await OnXFinancey9O2pWh.transferFrom.call(addresssu1C6Gj, addressggv1W00, uintUkHNmIY, {from: accounts[4]});

		assert.equal(booljrIaXAq, true)
		assert.equal(string5DdrNi, "3bUXfXxtawB5Q88rkL1mkDIs2mGnW4So6mIOsn")
		await expect(OnXFinancey9O2pWh.transferFrom.call(addressmyXzuNa, addressTANubU7, uintU8TQWH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})