const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintS0wxOtg = BigInt("1238")
		const stringSOR2X93 = "oHsk5dcpqbDx3NG3px5iyzoZIl6GBxFHlkNSF1aGnkC43d18mdCDcbRb69LxJKgffbcnw8d"
		const stringe61zANo = "Ny7nsEEV0jYxGurLfgD"
		const MARVELCOINUyciHMG = await MARVELCOIN.new(uintS0wxOtg, stringSOR2X93, stringe61zANo, {from: "0x0000000000000000000000000000000000000001"});
		const uintSKFMyua = BigInt("1615")
		const addressRgJVXV = accounts[4]
		const addressqtLrb1k = accounts[2]
		const byteRqRR2qg = "0x1f0d031806081b0b030c000e1115171e03101312"
		const uintZsbPjQ5 = BigInt("1827")
		const addressqXYF4Md = accounts[0]
		const uintMxSe4Z8 = BigInt("618")
		const addressNsjEwV = accounts[2]
		const uintaQhEkmo = BigInt("1634")
		const addressdaxc3eT = accounts[0]
		const addressKKOBbOk = "0x0000000000000000000000000000000000000001"
		const bool3SIHZ0 = await MARVELCOINUyciHMG.transferFrom.call(addressqtLrb1k, addressRgJVXV, uintSKFMyua, {from: accounts[2]});
		const boolm8WVzWS = await MARVELCOINUyciHMG.approveAndCall.call(addressqXYF4Md, uintZsbPjQ5, byteRqRR2qg, {from: accounts[4]});
		const bool94Q8wt = await MARVELCOINUyciHMG.transfer.call(addressNsjEwV, uintMxSe4Z8, {from: accounts[3]});
		const boolXCYgvli = await MARVELCOINUyciHMG.transferFrom.call(addressKKOBbOk, addressdaxc3eT, uintaQhEkmo, {from: accounts[1]});
	});

	it('test for MARVELCOIN', async () => {
		const uintyezphn9 = BigInt("155")
		const stringPHvA33c = "UZfOFSiPtVa234lPpOtARoCBPZgwvaCZODKtPT9TLDxgCapwG4UBiiAUBYWEx13AdiuSXFSa3sEvcWCC0ypx"
		const stringgJz2Rf6 = "nkFMzVewzvUs4EUus7RhOjMmVnVr3WSO3GQjuBJHEzzPMEI"
		const MARVELCOINxB27EA = await MARVELCOIN.new(uintyezphn9, stringPHvA33c, stringgJz2Rf6, {from: accounts[3]});
		const uintD9qbNox = BigInt("1164")
		const addressoQRhdl3 = accounts[3]
		const addressorL8R9h = accounts[3]
		const uintjhaUM2H = BigInt("1929")
		const uintielVkmW = BigInt("798")
		const addressriDttOI = accounts[4]
//		const boolFZT1Vl2 = await MARVELCOINxB27EA.transferFrom.call(addressorL8R9h, addressoQRhdl3, uintD9qbNox, {from: accounts[2]});
//		const boolSkeyTKI = await MARVELCOINxB27EA.burn.call(uintjhaUM2H, {from: accounts[2]});
//		const boolAECjIpq = await MARVELCOINxB27EA.transfer.call(addressriDttOI, uintielVkmW, {from: accounts[3]});

		await expect(MARVELCOINxB27EA.transferFrom.call(addressorL8R9h, addressoQRhdl3, uintD9qbNox, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinti4tHAMv = BigInt("821")
		const string0OmgCi = "nS16qg0M7KKc1Vy3qLij7yRPfYLCOtwb08BkgdetmEEIUlrhRRevcn8kOAMwIt7qzbICbwF1Q7AfN3"
		const stringV2OQPw = "8QfIbACsDPjGprMjLBXIesB572vJoDoQzCrQgmTl9YgV17lz4LkVkjrTWCFqmtyH7Y7foYtvjjF87HUQDWau"
		const MARVELCOINqQwE4Zw = await MARVELCOIN.new(uinti4tHAMv, string0OmgCi, stringV2OQPw, {from: accounts[3]});
		const uintQpkKL0W = BigInt("247")
		const uintCv4Cs0x = BigInt("321")
		const addresslfVVXFB = accounts[5]
		const uintaWFxby0 = BigInt("586")
		const addresseCPkYZH = accounts[3]
		const uintUgVLKWi = BigInt("1059")
//		const boolFlm1qF5 = await MARVELCOINqQwE4Zw.burn.call(uintQpkKL0W, {from: accounts[0]});
//		const boolHdDjUaK = await MARVELCOINqQwE4Zw.burnFrom.call(addresslfVVXFB, uintCv4Cs0x, {from: accounts[3]});
//		const boolY27Wnxd = await MARVELCOINqQwE4Zw.transfer.call(addresseCPkYZH, uintaWFxby0, {from: accounts[3]});
//		const booldMVaKq = await MARVELCOINqQwE4Zw.burn.call(uintUgVLKWi, {from: accounts[5]});

		await expect(MARVELCOINqQwE4Zw.burn.call(uintQpkKL0W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintNyBoGp4 = BigInt("800")
		const stringAzQadM = "B7whHWLqNrXE1w3JsWLdvTcMVvvGQusEYW1K62uknz3kAGdDXru4T7Qgs"
		const stringtaSmVGQ = "oRQF7bmmjeefiUMpb1BahpRSb1Od3BsnEnW5dHxNt2U3oKOAiGYGtY"
		const MARVELCOINYkPlSX3 = await MARVELCOIN.new(uintNyBoGp4, stringAzQadM, stringtaSmVGQ, {from: accounts[3]});
		const uintg7jxHLh = BigInt("1326")
		const addresseVoRamD = accounts[4]
		const uintcpc48eV = BigInt("270")
		const addresseYXI0xO = accounts[0]
		const uintO1nZVHC = BigInt("174")
		const addressT9MtR68 = "0x0000000000000000000000000000000000000001"
		const uintR3F8gOj = BigInt("64")
		const addressUeNOZly = accounts[2]
		const uintFQeg0uc = BigInt("365")
		const addressfVg64KE = accounts[4]
		const bytefEpVN1h = "0x1506000402090e001219081a090c0b0e1c1603160c1707050c15021a0903"
		const uintoAWFA1n = BigInt("876")
		const addressvFiLzO = accounts[1]
		const boolzEp2PWP = await MARVELCOINYkPlSX3.approve.call(addresseVoRamD, uintg7jxHLh, {from: accounts[1]});
		const boolJt9EKS = await MARVELCOINYkPlSX3.transfer.call(addresseYXI0xO, uintcpc48eV, {from: accounts[3]});
		const boolfxVE9jU = await MARVELCOINYkPlSX3.approve.call(addressT9MtR68, uintO1nZVHC, {from: accounts[4]});
		const boolcINA2l = await MARVELCOINYkPlSX3.approve.call(addressUeNOZly, uintR3F8gOj, {from: accounts[0]});
//		const boolbepDB9J = await MARVELCOINYkPlSX3.transfer.call(addressfVg64KE, uintFQeg0uc, {from: accounts[0]});
//		const boolk0KQlN4 = await MARVELCOINYkPlSX3.approveAndCall.call(addressvFiLzO, uintoAWFA1n, bytefEpVN1h, {from: accounts[0]});

		assert.equal(boolJt9EKS, true)
		assert.equal(boolcINA2l, true)
		assert.equal(boolfxVE9jU, true)
		assert.equal(boolzEp2PWP, true)
		await expect(MARVELCOINYkPlSX3.transfer.call(addressfVg64KE, uintFQeg0uc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintvXwPOx = BigInt("1942")
		const stringcL7epKH = "xr4l3CB5K6tXnI2XCatmCKLibrjp39O00WJBlxhY4bZtIVJxj9uwhQwBSrjsTFhdJYTHxtOSMBqJwenugi1GjMs2D3"
		const stringmnIiQd = "HxFS11014k87z01E97d3JJzqbdDeZgruj3vUsJASviNRrlIT"
		const MARVELCOINZ4vd9V = await MARVELCOIN.new(uintvXwPOx, stringcL7epKH, stringmnIiQd, {from: accounts[0]});
		const uintLYpKOAw = BigInt("597")
		const addressXqV0g1K = accounts[2]
		const uintn6eAXa = BigInt("802")
		const addressTcxO3iX = "0x0000000000000000000000000000000000000001"
		const uintJ4BIgI7 = BigInt("229")
		const addressLiQb4Di = accounts[3]
		const byte10SGIc = "0x18030a1a1c1309051f0c011c12131219"
		const uintLcdKSsN = BigInt("698")
		const addressrmJhytA = accounts[4]
		const uintNkILNC = BigInt("949")
		const uinte0yoQsF = BigInt("601")
		const addressJIqA2Ul = accounts[4]
		const addressLdKCt2 = accounts[1]
//		const boolu9IlIzO = await MARVELCOINZ4vd9V.burnFrom.call(addressXqV0g1K, uintLYpKOAw, {from: accounts[2]});
//		const boolCE5zlLl = await MARVELCOINZ4vd9V.approve.call(addressTcxO3iX, uintn6eAXa, {from: accounts[1]});
//		const booleZD5azn = await MARVELCOINZ4vd9V.burnFrom.call(addressLiQb4Di, uintJ4BIgI7, {from: accounts[0]});
//		const boolEOtU81l = await MARVELCOINZ4vd9V.approveAndCall.call(addressrmJhytA, uintLcdKSsN, byte10SGIc, {from: accounts[1]});
//		const boolqurSFuE = await MARVELCOINZ4vd9V.burn.call(uintNkILNC, {from: accounts[1]});
//		const boolEFpzLMW = await MARVELCOINZ4vd9V.transferFrom.call(addressLdKCt2, addressJIqA2Ul, uinte0yoQsF, {from: accounts[3]});

		await expect(MARVELCOINZ4vd9V.burnFrom.call(addressXqV0g1K, uintLYpKOAw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintlXloq9d = BigInt("1809")
		const string3K6xap = "Qt31iEa38nUTER8MFJoIu8kXH2ptG4ICa4PLQivWIxxyzX5"
		const stringhj1qwns = "Jg"
		const MARVELCOINtVhiBx = await MARVELCOIN.new(uintlXloq9d, string3K6xap, stringhj1qwns, {from: accounts[4]});
		const uints7cf6BF = BigInt("1365")
		const addressPh6rXWh = accounts[3]
		const uintHqEqIt = BigInt("1467")
		const addresshOVpiAw = accounts[4]
		const bytef1eCLOc = "0x181804121c05151f0e040c04160514180d01031a0805080e161b131e0a0f1a"
		const uintYLOmO8V = BigInt("181")
		const addressVtWWBia = accounts[5]
		const byteDPzJQEP = "0x0b1b1f0a"
		const uintPe2Kww = BigInt("613")
		const addresspqXERem = accounts[0]
		const uintxzFiWif = BigInt("169")
		const addresslNbmnob = accounts[1]
		const boolfoRZSn9 = await MARVELCOINtVhiBx.approve.call(addressPh6rXWh, uints7cf6BF, {from: accounts[4]});
		const boolNq283d5 = await MARVELCOINtVhiBx.approve.call(addresshOVpiAw, uintHqEqIt, {from: accounts[4]});
//		const boolxuOPsjz = await MARVELCOINtVhiBx.approveAndCall.call(addressVtWWBia, uintYLOmO8V, bytef1eCLOc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGauOFYk = await MARVELCOINtVhiBx.approveAndCall.call(addresspqXERem, uintPe2Kww, byteDPzJQEP, {from: accounts[1]});
//		const boolX8UJkQJ = await MARVELCOINtVhiBx.burnFrom.call(addresslNbmnob, uintxzFiWif, {from: accounts[2]});

		assert.equal(boolNq283d5, true)
		assert.equal(boolfoRZSn9, true)
		await expect(MARVELCOINtVhiBx.approveAndCall.call(addressVtWWBia, uintYLOmO8V, bytef1eCLOc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})