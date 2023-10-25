const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintTW5wxta = BigInt("1699")
		const stringabzc3B5 = "U"
		const stringNHuE3ZR = "sqZW6wc5Iku"
		const uintry7i2vD = BigInt("1486")
		const ANRXTokenPSRU1af = await ANRXToken.new(uintTW5wxta, stringabzc3B5, stringNHuE3ZR, uintry7i2vD, {from: accounts[4]});
		const uinthxB6fpe = BigInt("783")
		const address5EO8To = accounts[2]
		const uinthJO0nT = BigInt("1226")
		const uintGX2GQ0M = BigInt("1569")
		const addressPZj1ERX = accounts[0]
		const uinto8KAZgx = BigInt("1289")
		const boolOGC2M4G = await ANRXTokenPSRU1af.approve.call(address5EO8To, uinthxB6fpe, {from: accounts[4]});
//		const uintdHiKmH = await ANRXTokenPSRU1af.issue.call(uinthJO0nT, {from: accounts[3]});
//		const uintuajxT1v = await ANRXTokenPSRU1af.issue.call(uintGX2GQ0M, {from: accounts[5]});
//		const uinteMpqZdY = await ANRXTokenPSRU1af.balanceOf.call(addressPZj1ERX, {from: accounts[1]});
//		const uintNFmqGes = await ANRXTokenPSRU1af.redeem.call(uinto8KAZgx, {from: accounts[0]});
//		const uintddwPieW = await ANRXTokenPSRU1af.totalSupply.call({from: accounts[2]});

		assert.equal(boolOGC2M4G, true)
		await expect(ANRXTokenPSRU1af.issue.call(uinthJO0nT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlUsNDKX = BigInt("1093")
		const stringKgFcfUO = "r6ql7uc8Jw0OduyJ34egolUL60WRW1tWWqYHJsPQk3186lXxBNvJkwCifNQOA"
		const stringgsVue4l = "B4z"
		const uintQEjGQe1 = BigInt("1923")
		const ANRXTokenM5wrHSD = await ANRXToken.new(uintlUsNDKX, stringKgFcfUO, stringgsVue4l, uintQEjGQe1, {from: accounts[5]});
		const addressTmPKxJY = accounts[0]
		const addressLVSByly = accounts[0]
		const uintrfiHhcO = BigInt("645")
		const addressTYQP6jh = accounts[4]
		const addresskcTvtkl = accounts[2]
		const uintnv8NSud = BigInt("1203")
		const addressr78fAyd = "0x0000000000000000000000000000000000000001"
		const addressZnnGzA9 = accounts[4]
		const uintJ089Aam = BigInt("401")
		const uintIxTnZj = BigInt("1262")
		const addressKQcWtTK = accounts[4]
		const address8Ko8S5 = accounts[2]
		const uintn2UY6NZ = await ANRXTokenM5wrHSD.allowance.call(addressLVSByly, addressTmPKxJY, {from: accounts[2]});
//		const boolBGTwtdh = await ANRXTokenM5wrHSD.transferFrom.call(addresskcTvtkl, addressTYQP6jh, uintrfiHhcO, {from: accounts[1]});
//		const boolF4ySTyT = await ANRXTokenM5wrHSD.transferFrom.call(addressZnnGzA9, addressr78fAyd, uintnv8NSud, {from: accounts[2]});
//		const uintZR4JcVL = await ANRXTokenM5wrHSD.totalSupply.call({from: accounts[1]});
//		const uintLTdeMfb = await ANRXTokenM5wrHSD.issue.call(uintJ089Aam, {from: accounts[2]});
//		const boolZf9jCpY = await ANRXTokenM5wrHSD.transferFrom.call(address8Ko8S5, addressKQcWtTK, uintIxTnZj, {from: accounts[4]});

		assert.equal(uintn2UY6NZ, BigInt("0"))
		await expect(ANRXTokenM5wrHSD.transferFrom.call(addresskcTvtkl, addressTYQP6jh, uintrfiHhcO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintV9Syouo = BigInt("1452")
		const stringroSP8C = "Lod4v4obOniOesmgP7rC5DgAwfwjp"
		const stringr4Lh8tF = "ChhVIA9IXCU3gHz9npwpYllZSBGmVrTTaTe0X8m41wkFbDpDLvCv27fnHsrnDrqaG5DqRV"
		const uintACiMdF7 = BigInt("1526")
		const ANRXTokenzHS1TkR = await ANRXToken.new(uintV9Syouo, stringroSP8C, stringr4Lh8tF, uintACiMdF7, {from: accounts[3]});
		const uintz5Tcp9 = BigInt("572")
		const addressSq5p80G = accounts[0]
		const addressMMQsJ8Q = accounts[4]
		const addressCpg48Wk = accounts[1]
		const addressZORfWBw = accounts[2]
//		const boolaDdPogd = await ANRXTokenzHS1TkR.transfer.call(addressSq5p80G, uintz5Tcp9, {from: accounts[4]});
//		const uintSlDBqA6 = await ANRXTokenzHS1TkR.balanceOf.call(addressMMQsJ8Q, {from: accounts[3]});
//		const uintaNgBNS = await ANRXTokenzHS1TkR.balanceOf.call(addressCpg48Wk, {from: accounts[4]});
//		const uintyNXrz9Q = await ANRXTokenzHS1TkR.balanceOf.call(addressZORfWBw, {from: accounts[4]});

		await expect(ANRXTokenzHS1TkR.transfer.call(addressSq5p80G, uintz5Tcp9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintpTWLkg = BigInt("256")
		const stringMVusbnD = "XwVGJss7tLywd91WlIzwim7AOx1Jya5nviXVXonE"
		const stringBxMK939 = "We1yRWJbl3fymYiPTNoKykou26JrQoID0PiqDUoMWM9FOB1CbE7yYYDq"
		const uintTlAczjY = BigInt("1613")
		const ANRXTokenk7qIw9x = await ANRXToken.new(uintpTWLkg, stringMVusbnD, stringBxMK939, uintTlAczjY, {from: accounts[4]});
		const addressu4qMsqd = accounts[4]
		const uinthqL66c2 = BigInt("2031")
		const addressdmfWTgK = accounts[1]
		const addresspW0O1FQ = accounts[5]
		const addressvEMxOt1 = accounts[0]
		const addressKxuCydo = accounts[3]
		const addressPl8Cdt = accounts[0]
		const addressHMKfEle = accounts[4]
		const uintoshIG1W = BigInt("1896")
		const addressk2sSLFT = accounts[0]
		const addressNvdzcn = accounts[1]
		const addressqj0n9AD = await ANRXTokenk7qIw9x.deprecate.call(addressu4qMsqd, {from: accounts[4]});
//		const boolNCKDgpy = await ANRXTokenk7qIw9x.transferFrom.call(addresspW0O1FQ, addressdmfWTgK, uinthqL66c2, {from: accounts[2]});
//		const uintD3BZ8Fs = await ANRXTokenk7qIw9x.allowance.call(addressKxuCydo, addressvEMxOt1, {from: "0x0000000000000000000000000000000000000001"});
//		const uintT88CVT = await ANRXTokenk7qIw9x.allowance.call(addressHMKfEle, addressPl8Cdt, {from: accounts[3]});
//		const boolkWkrHf = await ANRXTokenk7qIw9x.transferFrom.call(addressNvdzcn, addressk2sSLFT, uintoshIG1W, {from: accounts[5]});

		await expect(ANRXTokenk7qIw9x.transferFrom.call(addresspW0O1FQ, addressdmfWTgK, uinthqL66c2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintj8zaW5E = BigInt("369")
		const stringtw0qQf6 = "wLEYui68UtLr6r8vflITA5ZyQYHXUxyEpUpaj"
		const stringg5KmF3T = "4YsTg8yLuBkOH9DevH0VTxUCtT3eTn62vVVaRbIo9wIxzt"
		const uintCPy3u7 = BigInt("556")
		const ANRXTokenRBJYB5I = await ANRXToken.new(uintj8zaW5E, stringtw0qQf6, stringg5KmF3T, uintCPy3u7, {from: accounts[3]});
		const uintne1QdF = BigInt("223")
		const addressdrpN6hC = accounts[3]
		const addressrj93DMX = accounts[3]
		const uintwsqR8dD = BigInt("1446")
		const addressCy3oxD = accounts[4]
		const uintmWNsv8 = BigInt("451")
		const addressoTo2uAg = accounts[5]
		const boolLRAnQD6 = await ANRXTokenRBJYB5I.approve.call(addressdrpN6hC, uintne1QdF, {from: accounts[5]});
		const uintnnXiF75 = await ANRXTokenRBJYB5I.balanceOf.call(addressrj93DMX, {from: accounts[4]});
		const boolXxdFTr = await ANRXTokenRBJYB5I.approve.call(addressCy3oxD, uintwsqR8dD, {from: accounts[4]});
		const booludYtBH0 = await ANRXTokenRBJYB5I.approve.call(addressoTo2uAg, uintmWNsv8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLRAnQD6, true)
		assert.equal(boolXxdFTr, true)
		assert.equal(booludYtBH0, true)
		assert.equal(uintnnXiF75, BigInt("369"))
	});

	it('test for ANRXToken', async () => {
		const uintlixOWye = BigInt("921")
		const stringXOlymBu = "qFcdQ74oBKDkMA2i9fZQD1CAqJ3BhE3q94niOzFiPpaquU28yzRoVuNMIolbCANbozFySlhYvASptOe2Hek39n"
		const stringJsSZHV3 = "ggTYxlvWvo1rOrw3Cm623yaEoIT5dUieTbsTFUiWt1PJUalQjCw"
		const uintBnbLBi = BigInt("1136")
		const ANRXTokenLUiUgdo = await ANRXToken.new(uintlixOWye, stringXOlymBu, stringJsSZHV3, uintBnbLBi, {from: accounts[2]});
		const uintsLZHtvo = BigInt("960")
		const address6cKRbQ = "0x0000000000000000000000000000000000000001"
		const uintQcaZMdZ = BigInt("1407")
		const addressQZifaBo = accounts[4]
		const addressIoRPrb7 = accounts[5]
		const uintfOTK3K = BigInt("116")
		const addressbjwXG2T = "0x0000000000000000000000000000000000000001"
		const uintXf3sMGI = await ANRXTokenLUiUgdo.totalSupply.call({from: accounts[3]});
//		const uintrVErncw = await ANRXTokenLUiUgdo.redeem.call(uintsLZHtvo, {from: accounts[2]});
//		const uintw6WipJ = await ANRXTokenLUiUgdo.balanceOf.call(address6cKRbQ, {from: accounts[0]});
//		const boolgxy3r6l = await ANRXTokenLUiUgdo.approve.call(addressQZifaBo, uintQcaZMdZ, {from: accounts[3]});
//		const uintrNqD7rR = await ANRXTokenLUiUgdo.balanceOf.call(addressIoRPrb7, {from: accounts[2]});
//		const boolHVe7byd = await ANRXTokenLUiUgdo.approve.call(addressbjwXG2T, uintfOTK3K, {from: accounts[4]});

		assert.equal(uintXf3sMGI, BigInt("921"))
		await expect(ANRXTokenLUiUgdo.redeem.call(uintsLZHtvo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintUK5cBsk = BigInt("256")
		const stringMVusbnD = "XwVGJss7tLywd91WlIzwim7AOx1Jya5nviXVXonE"
		const stringBxMK939 = "We1yRWJbl3fymYiPTNoKykou26JrQoID0PiqDUoMWM9FOB1CbE7yYYDq"
		const uintWXqtbiF = BigInt("1613")
		const ANRXTokenk7qIw9x = await ANRXToken.new(uintUK5cBsk, stringMVusbnD, stringBxMK939, uintWXqtbiF, {from: accounts[4]});
		const uinthIQuZoP = BigInt("1294")
		const uintVXo1lZ8 = BigInt("1174")
		const addressCVkvPA9 = accounts[4]
		const uintJwbtqw = BigInt("2031")
		const addressgI6X8qO = accounts[1]
		const addresspZfsXtP = accounts[5]
		const addressPPL47jC = accounts[0]
		const addressFH7qoXf = accounts[3]
		const uintyJsUbha = BigInt("1896")
		const addressCW2cJ7f = accounts[0]
		const addressVX6P0Rf = accounts[1]
		const uintq0LfpMp = BigInt("631")
//		const uint4JKbqA = await ANRXTokenk7qIw9x.setParams.call(uintVXo1lZ8, uinthIQuZoP, {from: accounts[4]});
//		const addressqj0n9AD = await ANRXTokenk7qIw9x.deprecate.call(addressCVkvPA9, {from: accounts[4]});
//		const boolNCKDgpy = await ANRXTokenk7qIw9x.transferFrom.call(addresspZfsXtP, addressgI6X8qO, uintJwbtqw, {from: accounts[2]});
//		const uintD3BZ8Fs = await ANRXTokenk7qIw9x.allowance.call(addressFH7qoXf, addressPPL47jC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkWkrHf = await ANRXTokenk7qIw9x.transferFrom.call(addressVX6P0Rf, addressCW2cJ7f, uintyJsUbha, {from: accounts[5]});
//		const uintNfxwqGY = await ANRXTokenk7qIw9x.redeem.call(uintq0LfpMp, {from: accounts[3]});

		await expect(ANRXTokenk7qIw9x.setParams.call(uintVXo1lZ8, uinthIQuZoP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintq6BtjHn = BigInt("1578")
		const stringU33soaU = "G4w1yWOjKy1eb5e6OaKFJEA2v333xypmrgTjiic"
		const stringBmhiNRW = "IVCdNxOCD0PQM1zKGCJc67TAgtJOyQ"
		const uintWJmDid = BigInt("1460")
		const ANRXTokenSsnCDtZ = await ANRXToken.new(uintq6BtjHn, stringU33soaU, stringBmhiNRW, uintWJmDid, {from: accounts[3]});
		const uintpSyGJqH = BigInt("47")
		const addressNyVFm3I = accounts[0]
		const addressPWkoYb = accounts[3]
		const uintXtwQklv = BigInt("280")
		const uintZjS4PGG = BigInt("1488")
		const boolk1wqa0h = await ANRXTokenSsnCDtZ.approve.call(addressNyVFm3I, uintpSyGJqH, {from: accounts[3]});
		const uintRJgixJi = await ANRXTokenSsnCDtZ.balanceOf.call(addressPWkoYb, {from: accounts[0]});
		const uintTKq0zZM = await ANRXTokenSsnCDtZ.issue.call(uintXtwQklv, {from: accounts[3]});
		const uintdaeJ6yD = await ANRXTokenSsnCDtZ.totalSupply.call({from: accounts[3]});
//		const uintm2I4iBu = await ANRXTokenSsnCDtZ.issue.call(uintZjS4PGG, {from: accounts[2]});

		assert.equal(boolk1wqa0h, true)
		assert.equal(uintRJgixJi, BigInt("1578"))
		assert.equal(uintdaeJ6yD, BigInt("1578"))
		await expect(ANRXTokenSsnCDtZ.issue.call(uintZjS4PGG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintd7idF7U = BigInt("1856")
		const stringPOcI8nG = "MGFd6DdTX3etrx7NAf1nxTOaYfwcbGJhDNTNU8v12mxWvuwXj99DpBLHKthkwVLcvZF8n5Z0gTHiAa9YOLp"
		const stringm3nzfEw = "Op3MqRMp5PW16bdzgSLCOost1QUejONqisfm8TlDDwUBUVRAobcAIbofrRGquu76deA6nJRDDf1WiShbYT6vy6x"
		const uintxxrzVib = BigInt("1524")
		const ANRXTokenHVhGmSM = await ANRXToken.new(uintd7idF7U, stringPOcI8nG, stringm3nzfEw, uintxxrzVib, {from: "0x0000000000000000000000000000000000000001"});
		const addressafsQtEJ = accounts[5]
		const uintbv5Z0m = BigInt("1178")
		const addresskumn6fY = accounts[0]
		const uintl9Kseen = await ANRXTokenHVhGmSM.balanceOf.call(addressafsQtEJ, {from: accounts[0]});
		const boolBDDBqKb = await ANRXTokenHVhGmSM.transfer.call(addresskumn6fY, uintbv5Z0m, {from: accounts[0]});
	});
})