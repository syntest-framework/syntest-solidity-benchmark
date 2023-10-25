const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintzc86yw = BigInt("2045")
		const stringVtcJGIE = "UlQ7"
		const stringwJox4re = "fA1TZy1HMFuaFyQ5kubdvXJMzuXiIEd1QNX"
		const uintdpHhQg4 = BigInt("53")
		const TetherTokenBDyRnR = await TetherToken.new(uintzc86yw, stringVtcJGIE, stringwJox4re, uintdpHhQg4, {from: accounts[1]});
		const uintezLQgIb = BigInt("1802")
		const uintj8LrzCx = BigInt("1735")
		const addressggVrvZI = accounts[1]
		const uintnI5swHD = await TetherTokenBDyRnR.setParams.call(uintj8LrzCx, uintezLQgIb, {from: accounts[3]});
		const addressVS0uYtW = await TetherTokenBDyRnR.deprecate.call(addressggVrvZI, {from: accounts[2]});
		const uintnVav66J = await TetherTokenBDyRnR.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenBDyRnR.setParams.call(uintj8LrzCx, uintezLQgIb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintl28Edp4 = BigInt("1655")
		const stringGc9zilr = "3U8bAeDUZLO5L4zQG3GlHIa2CWexuptrZYHJrjaPeTqP9jBcCei5RSYkb5MOhse4L73c81vOutvuQBy2bgBxILP"
		const stringxKfvWOa = "IiMTQR3GzeTM6yfgkyG17P78jzqtQnwzG2pNo9qIKZwEQkAVideGdwLyA8xhd2hKubB"
		const uintvefJA0i = BigInt("1125")
		const TetherTokenijlw8tg = await TetherToken.new(uintl28Edp4, stringGc9zilr, stringxKfvWOa, uintvefJA0i, {from: accounts[2]});
		const uint4irwqu = BigInt("1772")
		const addressu6xjoH = accounts[5]
		const addressowWjYO = accounts[2]
		const uintMb8W36 = await TetherTokenijlw8tg.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintsMQNP22 = await TetherTokenijlw8tg.issue.call(uint4irwqu, {from: accounts[2]});
		const uintzkIgRkn = await TetherTokenijlw8tg.allowance.call(addressowWjYO, addressu6xjoH, {from: accounts[5]});

		assert.equal(uintMb8W36, BigInt("1655"))
		assert.equal(uintzkIgRkn, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintKlor33V = BigInt("1675")
		const stringoY5e7HQ = "CN4SqbnVSMqZ5EU8dBL4qMOHwgFPmZelMM8qWLuzd2ncn63EIWSzQr2P83ZdtLbjYdw8vWQ"
		const stringuC7bXhI = "kIf3SqVRQE3dtXs3Vls1YP"
		const uintfFwYqKA = BigInt("1209")
		const TetherTokenu2QDqrv = await TetherToken.new(uintKlor33V, stringoY5e7HQ, stringuC7bXhI, uintfFwYqKA, {from: accounts[4]});
		const uintYbGSZWq = BigInt("1459")
		const uintW9byCbY = BigInt("85")
		const addressJqTI71n = "0x0000000000000000000000000000000000000001"
		const addresscMi1Jf2 = accounts[2]
		const uintZC01MJv = BigInt("1881")
		const addresskSpvIsb = accounts[2]
		const addressJPWBmXy = accounts[4]
		const uintc9FhXwe = BigInt("1428")
		const addresseIJMXPc = accounts[0]
		const uinteoOGGza = BigInt("1690")
		const addresskPdh9A = accounts[5]
		const addressBWVQmkv = accounts[3]
		const uintdFgKabj = await TetherTokenu2QDqrv.redeem.call(uintYbGSZWq, {from: accounts[2]});
		const addressfkwRRJd = await TetherTokenu2QDqrv.transferFrom.call(addresscMi1Jf2, addressJqTI71n, uintW9byCbY, {from: accounts[1]});
		const addressmfJFyX = await TetherTokenu2QDqrv.transferFrom.call(addressJPWBmXy, addresskSpvIsb, uintZC01MJv, {from: accounts[0]});
		const uintCfELm2A = await TetherTokenu2QDqrv.issue.call(uintc9FhXwe, {from: accounts[3]});
		const uintUc0sThY = await TetherTokenu2QDqrv.balanceOf.call(addresseIJMXPc, {from: accounts[4]});
		const addressmDuYDzt = await TetherTokenu2QDqrv.transferFrom.call(addressBWVQmkv, addresskPdh9A, uinteoOGGza, {from: accounts[4]});

		await expect(TetherTokenu2QDqrv.redeem.call(uintYbGSZWq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintI1lHU60 = BigInt("1543")
		const stringFSpSH83 = "GfdlAUVCCCKj6SlgpfHlSzeAjPQquCX4eQRX1hNLRKFnTdc7g"
		const stringsETsWA = "kNyxyhq8wUEG0QpKJyTMmNiYhwwwg8uTzdYUCtkrGzbb85Dj8xgQtcMU4gfn51mtWlfmdHeTdzA"
		const uintlt5kdfV = BigInt("771")
		const TetherTokenD4H8YFJ = await TetherToken.new(uintI1lHU60, stringFSpSH83, stringsETsWA, uintlt5kdfV, {from: accounts[5]});
		const uintHhJTPn4 = BigInt("1589")
		const addresslNve57g = "0x0000000000000000000000000000000000000001"
		const addressRwIdNdZ = accounts[3]
		const addressKmqBm5W = accounts[0]
		const addressKJ1BnKv = accounts[1]
		const addressW8aJmIF = await TetherTokenD4H8YFJ.approve.call(addresslNve57g, uintHhJTPn4, {from: accounts[1]});
		const addressJ8MYZuv = await TetherTokenD4H8YFJ.deprecate.call(addressRwIdNdZ, {from: accounts[0]});
		const addressO8fgLoF = await TetherTokenD4H8YFJ.deprecate.call(addressKmqBm5W, {from: accounts[4]});
		const addressXA5MJrn = await TetherTokenD4H8YFJ.deprecate.call(addressKJ1BnKv, {from: accounts[2]});

		await expect(TetherTokenD4H8YFJ.deprecate.call(addressRwIdNdZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintu6oDnUo = BigInt("730")
		const stringLrQPBCc = "erFM8D9Sp35gxlIKG"
		const stringyCq22PK = "lsFH"
		const uintiTYOck7 = BigInt("321")
		const TetherTokenQxiybk = await TetherToken.new(uintu6oDnUo, stringLrQPBCc, stringyCq22PK, uintiTYOck7, {from: accounts[5]});
		const address3G6pD7 = accounts[5]
		const addressG5M0Y50 = accounts[1]
		const addressntuTru = accounts[1]
		const uintZkf0NrJ = BigInt("770")
		const uintAalfrkJ = await TetherTokenQxiybk.balanceOf.call(address3G6pD7, {from: accounts[1]});
		const uintGiD66yJ = await TetherTokenQxiybk.allowance.call(addressntuTru, addressG5M0Y50, {from: accounts[1]});
		const uintg4A6AL = await TetherTokenQxiybk.issue.call(uintZkf0NrJ, {from: accounts[5]});

		assert.equal(uintAalfrkJ, BigInt("730"))
		assert.equal(uintGiD66yJ, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintMzo82JN = BigInt("1346")
		const stringAKySLVJ = "594RiWW82seW3Eo7WYKCC41ZlvAYQqOMfYJwCfXwx6v9LHRL2vRavZOv217hDYhSOrb7HxAedY1NWp1GEqe3tkAII8mTT7fSIY"
		const stringXUEMu1N = "jCKf"
		const uintvnjp49M = BigInt("1440")
		const TetherTokenPbw17wF = await TetherToken.new(uintMzo82JN, stringAKySLVJ, stringXUEMu1N, uintvnjp49M, {from: accounts[3]});
		const uintZyH8haO = BigInt("512")
		const uintUowi8zk = BigInt("1787")
		const addressbNH2KAw = accounts[0]
		const uintIuQ46Zb = BigInt("1652")
		const addresscOAxAO = accounts[2]
		const addressN9sWJPy = accounts[2]
		const addresskgNUQKm = "0x0000000000000000000000000000000000000001"
		const addressRjPEaYC = "0x0000000000000000000000000000000000000001"
		const uintsKxkEV = await TetherTokenPbw17wF.redeem.call(uintZyH8haO, {from: accounts[3]});
		const addresspjfZRxo = await TetherTokenPbw17wF.approve.call(addressbNH2KAw, uintUowi8zk, {from: accounts[1]});
		const addressELgKQgQ = await TetherTokenPbw17wF.transferFrom.call(addressN9sWJPy, addresscOAxAO, uintIuQ46Zb, {from: accounts[3]});
		const uintkg723S = await TetherTokenPbw17wF.allowance.call(addressRjPEaYC, addresskgNUQKm, {from: accounts[4]});

		await expect(TetherTokenPbw17wF.transferFrom.call(addressN9sWJPy, addresscOAxAO, uintIuQ46Zb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBS12pCZ = BigInt("1543")
		const stringFSpSH83 = "GfdlAUVCCCKj6SlgpfHlSzeAjPQquCX4eQRX1hNLRKFnTdc7g"
		const stringsETsWA = "kNyxyhq8wUEG0QpKJyTMmNiYhwwwg8uTzdYUCtkrGzbb85Dj8xgQtcMU4gfn51mtWlfmdHeTdzA"
		const uintCDCmkB = BigInt("771")
		const TetherTokenD4H8YFJ = await TetherToken.new(uintBS12pCZ, stringFSpSH83, stringsETsWA, uintCDCmkB, {from: accounts[5]});
		const uintGYjXsF1 = BigInt("1589")
		const addresseztL00A = "0x0000000000000000000000000000000000000001"
		const uinthJ76iyv = BigInt("783")
		const addresso12rfAV = accounts[0]
		const addressBqMgnXF = accounts[3]
		const addresssoELzjS = accounts[0]
		const addressdPYBOeS = accounts[1]
		const addressW8aJmIF = await TetherTokenD4H8YFJ.approve.call(addresseztL00A, uintGYjXsF1, {from: accounts[1]});
		const addressDh381rp = await TetherTokenD4H8YFJ.transfer.call(addresso12rfAV, uinthJ76iyv, {from: accounts[1]});
		const addressJ8MYZuv = await TetherTokenD4H8YFJ.deprecate.call(addressBqMgnXF, {from: accounts[0]});
		const addressO8fgLoF = await TetherTokenD4H8YFJ.deprecate.call(addresssoELzjS, {from: accounts[4]});
		const addressXA5MJrn = await TetherTokenD4H8YFJ.deprecate.call(addressdPYBOeS, {from: accounts[2]});

		await expect(TetherTokenD4H8YFJ.transfer.call(addresso12rfAV, uinthJ76iyv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintZ2vsiIP = BigInt("1543")
		const stringFSpSH83 = "GfdlAUVCCCKj6SlgpfHlSzeAjPQquCX4eQRX1hNLRKFnTdc7g"
		const stringsETsWA = "kNyxyhq8wUEG0QpKJyTMmNiYhwwwg8uTzdYUCtkrGzbb85Dj8xgQtcMU4gfn51mtWlfmdHeTdzA"
		const uintYsP0RNA = BigInt("771")
		const TetherTokenD4H8YFJ = await TetherToken.new(uintZ2vsiIP, stringFSpSH83, stringsETsWA, uintYsP0RNA, {from: accounts[5]});
		const uintkq10ZwM = BigInt("1589")
		const addressqzWtie6 = "0x0000000000000000000000000000000000000001"
		const addressBu97rtw = accounts[2]
		const addressyrn8ehH = accounts[2]
		const uintnwCu8TC = BigInt("1784")
		const addressY6Y0b9H = accounts[4]
		const addressdgT8OwF = accounts[4]
		const addressYE6Z6Hn = accounts[0]
		const addressOw7nnMi = accounts[1]
		const addressW8aJmIF = await TetherTokenD4H8YFJ.approve.call(addressqzWtie6, uintkq10ZwM, {from: accounts[1]});
		const uintni0ZzRt = await TetherTokenD4H8YFJ.balanceOf.call(addressBu97rtw, {from: accounts[2]});
		const addressPYs5qCu = await TetherTokenD4H8YFJ.deprecate.call(addressyrn8ehH, {from: accounts[5]});
		const uintWWMBvRg = await TetherTokenD4H8YFJ.totalSupply.call({from: accounts[0]});
		const addressvIJZHFj = await TetherTokenD4H8YFJ.transferFrom.call(addressdgT8OwF, addressY6Y0b9H, uintnwCu8TC, {from: accounts[4]});
		const addressO8fgLoF = await TetherTokenD4H8YFJ.deprecate.call(addressYE6Z6Hn, {from: accounts[4]});
		const addressXA5MJrn = await TetherTokenD4H8YFJ.deprecate.call(addressOw7nnMi, {from: accounts[2]});

		assert.equal(uintWWMBvRg, BigInt("1543"))
		assert.equal(uintni0ZzRt, BigInt("0"))
		await expect(TetherTokenD4H8YFJ.transferFrom.call(addressdgT8OwF, addressY6Y0b9H, uintnwCu8TC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinteMmC4dV = BigInt("2045")
		const stringVtcJGIE = "UlQ7"
		const stringwJox4re = "fA1TZy1HMFuaFyQ5kubdvXJMzuXiIEd1QNX"
		const uintfG5PNAH = BigInt("53")
		const TetherTokenBDyRnR = await TetherToken.new(uinteMmC4dV, stringVtcJGIE, stringwJox4re, uintfG5PNAH, {from: accounts[1]});
		const uinttKrLVbq = BigInt("1013")
		const uintk0QCN6G = BigInt("687")
		const addressDC0Zhz5 = accounts[4]
		const uintXLr4C36 = BigInt("1802")
		const uintQQgNlZJ = BigInt("1715")
		const uintB9tOLos = BigInt("1073")
		const uintXaXtKmd = await TetherTokenBDyRnR.setParams.call(uintk0QCN6G, uinttKrLVbq, {from: accounts[1]});
		const uintyLDx5UD = await TetherTokenBDyRnR.balanceOf.call(addressDC0Zhz5, {from: accounts[1]});
		const uintnI5swHD = await TetherTokenBDyRnR.setParams.call(uintQQgNlZJ, uintXLr4C36, {from: accounts[3]});
		const uintm1sT6yr = await TetherTokenBDyRnR.issue.call(uintB9tOLos, {from: accounts[1]});

		await expect(TetherTokenBDyRnR.setParams.call(uintk0QCN6G, uinttKrLVbq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintFpA4coh = BigInt("500")
		const stringWJU51s = "bOaukgCt7jwUARNFtnVR3MKwMpUmGJpclLh7sgpqIogFHCd42Eg"
		const stringwnAXlZ = "DoUUFjCYmkxwrIf65V3bwwEdxlra7Aaaek0I4wuDyy2UlvJGwEg3A4JJYTU"
		const uintS20pqMw = BigInt("1573")
		const TetherTokenrZrRlfD = await TetherToken.new(uintFpA4coh, stringWJU51s, stringwnAXlZ, uintS20pqMw, {from: "0x0000000000000000000000000000000000000001"});
		const uintnX3g4B5 = BigInt("2022")
		const uinty440KOe = BigInt("1571")
		const uintmL0BMHA = BigInt("94")
		const addressCOJoK2 = accounts[0]
		const uintBf1axn2 = BigInt("1348")
		const uintoPs8Fb = BigInt("1078")
		const addressbJeDn4J = accounts[4]
		const uintkeZNOf = BigInt("1689")
		const addressaSXyNTP = "0x0000000000000000000000000000000000000001"
		const addressNh3WdhK = accounts[1]
		const uintdqzt0zH = await TetherTokenrZrRlfD.setParams.call(uinty440KOe, uintnX3g4B5, {from: accounts[2]});
		const addressGGa3Vgl = await TetherTokenrZrRlfD.transfer.call(addressCOJoK2, uintmL0BMHA, {from: accounts[4]});
		const uintuZuiDp = await TetherTokenrZrRlfD.setParams.call(uintoPs8Fb, uintBf1axn2, {from: accounts[4]});
		const uintGsfM2Bf = await TetherTokenrZrRlfD.balanceOf.call(addressbJeDn4J, {from: accounts[0]});
		const addressQ5Lku5y = await TetherTokenrZrRlfD.transferFrom.call(addressNh3WdhK, addressaSXyNTP, uintkeZNOf, {from: accounts[3]});
	});
})