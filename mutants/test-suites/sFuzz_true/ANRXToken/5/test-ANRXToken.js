const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintS0wxOtg = BigInt("1238")
		const stringSOR2X93 = "oHsk5dcpqbDx3NG3px5iyzoZIl6GBxFHlkNSF1aGnkC43d18mdCDcbRb69LxJKgffbcnw8d"
		const stringe61zANo = "Ny7nsEEV0jYxGurLfgD"
		const uintUyciHMG = BigInt("17")
		const ANRXTokenEO66jZX = await ANRXToken.new(uintS0wxOtg, stringSOR2X93, stringe61zANo, uintUyciHMG, {from: accounts[3]});
		const addressdlWOKo = accounts[2]
		const uintWCNsjEw = BigInt("704")
		const addressOCDacC = accounts[1]
		const addressdaxc3eT = accounts[0]
//		const addressE0XYF4M = await ANRXTokenEO66jZX.deprecate.call(addressdlWOKo, {from: accounts[2]});
//		const boolMxSe4Z8 = await ANRXTokenEO66jZX.approve.call(addressOCDacC, uintWCNsjEw, {from: accounts[1]});
//		const addressaQhEkmo = await ANRXTokenEO66jZX.deprecate.call(addressdaxc3eT, {from: accounts[4]});

		await expect(ANRXTokenEO66jZX.deprecate.call(addressdlWOKo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintYbqRR2q = BigInt("1074")
		const stringpphn9E0 = "YmlPniOHGFtN3fcwQJbHrRAQ2hw9lnlsa6dNJqM9Si97pQul9pkUfEahVH7x6pNXF6BUpOfve2AYu"
		const stringNUqxk6O = "ZfOFSiPtVa234lPpOtARoCBPZgwvaCZODKtPT9TLDxgCapwG4UBiiAUBYWEx13AdiuSXFSa3sEvcWCC0ypxp8K1TTst"
		const uintWjf5cEo = BigInt("1871")
		const ANRXTokenUcH1RyT = await ANRXToken.new(uintYbqRR2q, stringpphn9E0, stringNUqxk6O, uintWjf5cEo, {from: accounts[4]});
		const addressJ1Vl2au = accounts[1]
		const uintorL8R9h = BigInt("1296")
		const addressTT7LJHn = accounts[5]
		const addressEEhvPut = accounts[1]
		const uint27EAoC = BigInt("381")
		const uintq1Telt = BigInt("1441")
		const uintnZSB0t4 = await ANRXTokenUcH1RyT.balanceOf.call(addressJ1Vl2au, {from: accounts[2]});
		const booloQRhdl3 = await ANRXTokenUcH1RyT.approve.call(addressTT7LJHn, uintorL8R9h, {from: accounts[0]});
//		const addressXaUM2H6 = await ANRXTokenUcH1RyT.deprecate.call(addressEEhvPut, {from: accounts[2]});
//		const uintUlVkmWY = await ANRXTokenUcH1RyT.totalSupply.call({from: accounts[0]});
//		const uintIXWfCPE = await ANRXTokenUcH1RyT.issue.call(uint27EAoC, {from: accounts[4]});
//		const uintejj0wos = await ANRXTokenUcH1RyT.issue.call(uintq1Telt, {from: accounts[3]});

		assert.equal(booloQRhdl3, true)
		assert.equal(uintnZSB0t4, BigInt("0"))
		await expect(ANRXTokenUcH1RyT.deprecate.call(addressEEhvPut, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintk9pgCDO = BigInt("1925")
		const stringzJnvPFv = "hKBzHUTwXRT7USUaAywH"
		const stringsNigbPq = "JdIv6PmdCs9"
		const uintlqSXbAN = BigInt("1650")
		const ANRXTokenADxVMux = await ANRXToken.new(uintk9pgCDO, stringzJnvPFv, stringsNigbPq, uintlqSXbAN, {from: accounts[3]});
		const addressbVhR8EK = accounts[3]
		const addressPDIyAA6 = accounts[1]
		const uintUCmlFu = BigInt("209")
		const addressFOx64hb = accounts[4]
		const addressFCETMX6 = accounts[5]
		const addressMHmCxAH = accounts[4]
		const uintzct5uhT = await ANRXTokenADxVMux.allowance.call(addressPDIyAA6, addressbVhR8EK, {from: accounts[0]});
		const boolT8XsC8m = await ANRXTokenADxVMux.approve.call(addressFOx64hb, uintUCmlFu, {from: accounts[0]});
		const uintUa8wscb = await ANRXTokenADxVMux.balanceOf.call(addressFCETMX6, {from: accounts[2]});
//		const addressbDHnqCz = await ANRXTokenADxVMux.deprecate.call(addressMHmCxAH, {from: accounts[4]});

		assert.equal(boolT8XsC8m, true)
		assert.equal(uintUa8wscb, BigInt("0"))
		assert.equal(uintzct5uhT, BigInt("0"))
		await expect(ANRXTokenADxVMux.deprecate.call(addressMHmCxAH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintgI7GoZ = BigInt("116")
		const stringTXHSvXl = "qPC78cmEE27u5tsMeTyn5DWu1oqoc5VOBbAnUn1CvmBUuxGlPwQalpEaf1LiUY8B8Pex1Lz4NtlsJInQe6j6tSvMSril"
		const stringgwnsGtV = "GZtStQt31iEa38nUTER8MFJoIu8kXH2ptG4ICa4PLQivWIxxyzX59TbVMqE1JgHzR"
		const uintXiBx2id = BigInt("997")
		const ANRXTokenXMx3o9V = await ANRXToken.new(uintgI7GoZ, stringTXHSvXl, stringgwnsGtV, uintXiBx2id, {from: accounts[4]});
		const addressqEqIts = accounts[0]
		const addresshOVpiAw = accounts[4]
		const uintnp1eCLO = BigInt("952")
		const addressQr0k5Ud = accounts[1]
		const addresskZCGyPJ = accounts[3]
		const uintQiLOmO8 = BigInt("714")
		const addressxftWWBi = accounts[2]
		const uintyTNPzJQ = BigInt("164")
		const uintmJ32lNz = BigInt("1402")
		const addressaQJdPCs = accounts[0]
		const addressMifFh8U = accounts[2]
		const uintNq283d5 = await ANRXTokenXMx3o9V.allowance.call(addresshOVpiAw, addressqEqIts, {from: accounts[4]});
//		const boolxuOPsjz = await ANRXTokenXMx3o9V.transferFrom.call(addresskZCGyPJ, addressQr0k5Ud, uintnp1eCLO, {from: "0x0000000000000000000000000000000000000001"});
//		const bool8vuHj2 = await ANRXTokenXMx3o9V.approve.call(addressxftWWBi, uintQiLOmO8, {from: accounts[0]});
//		const uintFQauOFY = await ANRXTokenXMx3o9V.redeem.call(uintyTNPzJQ, {from: accounts[3]});
//		const boolNERemJP = await ANRXTokenXMx3o9V.transferFrom.call(addressMifFh8U, addressaQJdPCs, uintmJ32lNz, {from: accounts[2]});

		assert.equal(uintNq283d5, BigInt("0"))
		await expect(ANRXTokenXMx3o9V.transferFrom.call(addresskZCGyPJ, addressQr0k5Ud, uintnp1eCLO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintIn91FHc = BigInt("194")
		const string7PN8w0 = "K7c"
		const stringuYhhHx = "iHRVR"
		const uintoySqtk = BigInt("325")
		const ANRXTokenUt5oIp = await ANRXToken.new(uintIn91FHc, string7PN8w0, stringuYhhHx, uintoySqtk, {from: accounts[1]});
		const uintJbCKaUt = BigInt("1247")
		const addressUogREhx = accounts[1]
		const addressYckaNK6 = accounts[5]
		const uintvU2YOip = BigInt("266")
		const uintcPkgTkK = BigInt("718")
		const uintI867NAt = BigInt("1617")
		const addressOHLNjth = accounts[0]
		const addressOsgLR2S = accounts[1]
		const uintbQzfCSO = BigInt("844")
		const uintJsdcYlZ = await ANRXTokenUt5oIp.totalSupply.call({from: accounts[5]});
//		const bool34S0bh = await ANRXTokenUt5oIp.transferFrom.call(addressYckaNK6, addressUogREhx, uintJbCKaUt, {from: accounts[1]});
//		const uintOqPb3fW = await ANRXTokenUt5oIp.setParams.call(uintcPkgTkK, uintvU2YOip, {from: accounts[0]});
//		const boolIOYVMpO = await ANRXTokenUt5oIp.transferFrom.call(addressOsgLR2S, addressOHLNjth, uintI867NAt, {from: accounts[5]});
//		const uintidB1gVh = await ANRXTokenUt5oIp.redeem.call(uintbQzfCSO, {from: accounts[1]});

		assert.equal(uintJsdcYlZ, BigInt("194"))
		await expect(ANRXTokenUt5oIp.transferFrom.call(addressYckaNK6, addressUogREhx, uintJbCKaUt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintnX9dsBQ = BigInt("116")
		const stringTXHSvXl = "qPC78cmEE27u5tsMeTyn5DWu1oqoc5VOBbAnUn1CvmBUuxGlPwQalpEaf1LiUY8B8Pex1Lz4NtlsJInQe6j6tSvMSril"
		const stringgwnsGtV = "GZtStQt31iEa38nUTER8MFJoIu8kXH2ptG4ICa4PLQivWIxxyzX59TbVMqE1JgHzR"
		const uintdBTufyf = BigInt("997")
		const ANRXTokenXMx3o9V = await ANRXToken.new(uintnX9dsBQ, stringTXHSvXl, stringgwnsGtV, uintdBTufyf, {from: accounts[4]});
		const addressMjfBy9q = accounts[0]
		const addressEv2ywpg = accounts[4]
		const uintqkA1ikX = BigInt("415")
		const uintr8QlwTE = BigInt("952")
		const addresszActLv = accounts[1]
		const addressXZIo9n = accounts[3]
		const uintbEWSzcJ = BigInt("714")
		const addressuq3vrgL = accounts[2]
		const uintgTDeK55 = BigInt("164")
		const uintMplfDS = BigInt("1407")
		const addresspv8uV2S = accounts[0]
		const addresswtZSPvk = accounts[2]
		const uintNq283d5 = await ANRXTokenXMx3o9V.allowance.call(addressEv2ywpg, addressMjfBy9q, {from: accounts[4]});
		const uintEmIHvUS = await ANRXTokenXMx3o9V.issue.call(uintqkA1ikX, {from: accounts[4]});
//		const boolxuOPsjz = await ANRXTokenXMx3o9V.transferFrom.call(addressXZIo9n, addresszActLv, uintr8QlwTE, {from: "0x0000000000000000000000000000000000000001"});
//		const bool8vuHj2 = await ANRXTokenXMx3o9V.approve.call(addressuq3vrgL, uintbEWSzcJ, {from: accounts[0]});
//		const uintFQauOFY = await ANRXTokenXMx3o9V.redeem.call(uintgTDeK55, {from: accounts[3]});
//		const boolNERemJP = await ANRXTokenXMx3o9V.transferFrom.call(addresswtZSPvk, addresspv8uV2S, uintMplfDS, {from: accounts[2]});

		assert.equal(uintNq283d5, BigInt("0"))
		await expect(ANRXTokenXMx3o9V.transferFrom.call(addressXZIo9n, addresszActLv, uintr8QlwTE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintUnRCVPm = BigInt("1468")
		const stringrZjiHu = "1kCDQohm3T1ShSCQXPouJRKk13vJYvosGjIq"
		const stringCxIeWAq = "zwNrfmwn2rChRGHGh5FK6NdDGLD9o9Ub1RRNEj8979Y"
		const uintmLw8Ved = BigInt("1665")
		const ANRXTokenXKHPR30 = await ANRXToken.new(uintUnRCVPm, stringrZjiHu, stringCxIeWAq, uintmLw8Ved, {from: accounts[4]});
		const uintLlUuXcI = BigInt("938")
		const addressS6pQce = accounts[2]
		const addressUI7aM6X = accounts[1]
		const uintQ5IDDVz = BigInt("1212")
		const addressqUIjGUw = accounts[3]
		const boolBTYWRPS = await ANRXTokenXKHPR30.approve.call(addressS6pQce, uintLlUuXcI, {from: accounts[1]});
		const uintSxZYEoP = await ANRXTokenXKHPR30.balanceOf.call(addressUI7aM6X, {from: "0x0000000000000000000000000000000000000001"});
//		const boolg7hnJJ = await ANRXTokenXKHPR30.transfer.call(addressqUIjGUw, uintQ5IDDVz, {from: accounts[0]});

		assert.equal(boolBTYWRPS, true)
		assert.equal(uintSxZYEoP, BigInt("0"))
		await expect(ANRXTokenXKHPR30.transfer.call(addressqUIjGUw, uintQ5IDDVz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintPx1ke4 = BigInt("1925")
		const stringzJnvPFv = "hKBzHUTwXRT7USUaAywH"
		const stringsNigbPq = "JdIv6PmdCs9"
		const uintj2SCfrs = BigInt("1650")
		const ANRXTokenADxVMux = await ANRXToken.new(uintPx1ke4, stringzJnvPFv, stringsNigbPq, uintj2SCfrs, {from: accounts[3]});
		const addresssf47s2Z = accounts[3]
		const addressibNshM2 = accounts[1]
		const uintUuGYYIS = BigInt("209")
		const addressKfIkkW1 = accounts[4]
		const uintWIv7yBz = BigInt("2011")
		const addressB93wnfN = accounts[6]
		const addressv5jzhSD = accounts[1]
		const uintzct5uhT = await ANRXTokenADxVMux.allowance.call(addressibNshM2, addresssf47s2Z, {from: accounts[0]});
		const boolT8XsC8m = await ANRXTokenADxVMux.approve.call(addressKfIkkW1, uintUuGYYIS, {from: accounts[0]});
//		const uintZwMDJFY = await ANRXTokenADxVMux.redeem.call(uintWIv7yBz, {from: accounts[3]});
//		const uintUa8wscb = await ANRXTokenADxVMux.balanceOf.call(addressB93wnfN, {from: accounts[2]});
//		const addressojA1xuH = await ANRXTokenADxVMux.deprecate.call(addressv5jzhSD, {from: accounts[0]});

		assert.equal(boolT8XsC8m, true)
		assert.equal(uintzct5uhT, BigInt("0"))
		await expect(ANRXTokenADxVMux.redeem.call(uintWIv7yBz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintiupffOH = BigInt("173")
		const stringpWoEXY1 = "aYT7l8rVsK0k7bygsCNX34BiKtfehy6"
		const stringDPPTqzS = "6sBIbVMnRejvLQVbfUjGOgrdeqbzM5Pd3Lq3RB1lcnNM5Mk13ZALhmncl3uCp1sBXSAk3UzDjLty6cBCRGFwSBE"
		const uintjAYFU1C = BigInt("1450")
		const ANRXTokentN3uWr7 = await ANRXToken.new(uintiupffOH, stringpWoEXY1, stringDPPTqzS, uintjAYFU1C, {from: accounts[5]});
		const uintMSOx9Lc = BigInt("1664")
		const addressINN6xzN = accounts[0]
		const uintuL8Upoy = BigInt("565")
		const uintLn1YDIJ = BigInt("1345")
		const addressL5KV2Fh = accounts[2]
		const booleXeqoPN = await ANRXTokentN3uWr7.approve.call(addressINN6xzN, uintMSOx9Lc, {from: accounts[0]});
//		const uintPHXpSdA = await ANRXTokentN3uWr7.setParams.call(uintLn1YDIJ, uintuL8Upoy, {from: accounts[5]});
//		const uintxAN60kT = await ANRXTokentN3uWr7.balanceOf.call(addressL5KV2Fh, {from: accounts[0]});

		assert.equal(booleXeqoPN, true)
		await expect(ANRXTokentN3uWr7.setParams.call(uintLn1YDIJ, uintuL8Upoy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintEFqvChS = BigInt("1925")
		const stringzJnvPFv = "hKBzHUTwXRT7USUaAywH"
		const stringsNigbPq = "JdIv6PmdCs9"
		const uintF7Bl5vo = BigInt("1650")
		const ANRXTokenADxVMux = await ANRXToken.new(uintEFqvChS, stringzJnvPFv, stringsNigbPq, uintF7Bl5vo, {from: accounts[3]});
		const addressDWeiD1W = accounts[3]
		const addressdnCoKRw = accounts[2]
		const uintgVe4uDs = BigInt("1192")
		const uintWwfhuBf = BigInt("231")
		const addresskIAmGAX = accounts[4]
		const uintzct5uhT = await ANRXTokenADxVMux.allowance.call(addressdnCoKRw, addressDWeiD1W, {from: accounts[0]});
		const uintveactEB = await ANRXTokenADxVMux.redeem.call(uintgVe4uDs, {from: accounts[3]});
		const uintATRmrMS = await ANRXTokenADxVMux.totalSupply.call({from: accounts[3]});
		const boolT8XsC8m = await ANRXTokenADxVMux.approve.call(addresskIAmGAX, uintWwfhuBf, {from: accounts[0]});

		assert.equal(boolT8XsC8m, true)
		assert.equal(uintATRmrMS, BigInt("1925"))
		assert.equal(uintzct5uhT, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintdOeTxD = BigInt("1468")
		const stringrZjiHu = "1kCDQohm3T1ShSCQXPouJRKk13vJYvosGjIq"
		const stringCxIeWAq = "zwNrfmwn2rChRGHGh5FK6NdDGLD9o9Ub1RRNEj8979Y"
		const uintQqJVdXN = BigInt("1665")
		const ANRXTokenXKHPR30 = await ANRXToken.new(uintdOeTxD, stringrZjiHu, stringCxIeWAq, uintQqJVdXN, {from: accounts[4]});
		const uintmCwfx0y = BigInt("938")
		const addressBLspDH1 = accounts[2]
		const addresspuqqkn8 = accounts[3]
		const addressXj9qamB = accounts[2]
		const uintEpTzY4q = BigInt("1212")
		const addressL3rQVQ3 = accounts[3]
		const boolBTYWRPS = await ANRXTokenXKHPR30.approve.call(addressBLspDH1, uintmCwfx0y, {from: accounts[1]});
		const addressvduVrjc = await ANRXTokenXKHPR30.deprecate.call(addresspuqqkn8, {from: accounts[4]});
		const uintSxZYEoP = await ANRXTokenXKHPR30.balanceOf.call(addressXj9qamB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolg7hnJJ = await ANRXTokenXKHPR30.transfer.call(addressL3rQVQ3, uintEpTzY4q, {from: accounts[0]});

		assert.equal(boolBTYWRPS, true)
		assert.equal(uintSxZYEoP, BigInt("0"))
		await expect(ANRXTokenXKHPR30.transfer.call(addressL3rQVQ3, uintEpTzY4q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintLsKErci = BigInt("889")
		const stringwzPT9O = "aqQXnlgCouB62l5mvGDCAwmflQe4cWlFSkxEvreAe9s8raEseo46nm7z"
		const stringtiULjpB = "IMBO1zq"
		const uintbJzEEYm = BigInt("41")
		const ANRXTokenaK1OS1r = await ANRXToken.new(uintLsKErci, stringwzPT9O, stringtiULjpB, uintbJzEEYm, {from: "0x0000000000000000000000000000000000000001"});
		const addresskDzeCvG = "0x0000000000000000000000000000000000000001"
		const uintAiGfM28 = BigInt("1422")
		const addressFY9F51C = accounts[0]
		const uintTjj4WM2 = BigInt("585")
		const uintmbwvGMg = await ANRXTokenaK1OS1r.balanceOf.call(addresskDzeCvG, {from: accounts[5]});
		const boolfNsldNw = await ANRXTokenaK1OS1r.transfer.call(addressFY9F51C, uintAiGfM28, {from: accounts[2]});
		const uintRdu3Yyl = await ANRXTokenaK1OS1r.redeem.call(uintTjj4WM2, {from: accounts[2]});
	});
})