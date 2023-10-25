const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintCNjmgsu = BigInt("231")
		const stringtNeDqZw = "v5i4rf1dSgsMSMs"
		const stringLHbPciv = "sJPaRILR7HI0MvezzOnKTKqZs0F6izBVNpB1rwGMn1gPqjH6uiqi1dYeShjSLEnjxd3XnH4rlIpuCTVs"
		const uintZnVUeAV = BigInt("813")
		const TetherTokenLRNxsUB = await TetherToken.new(uintCNjmgsu, stringtNeDqZw, stringLHbPciv, uintZnVUeAV, {from: accounts[1]});
		const addressHfWGPWU = accounts[0]
		const addressZkjH28z = accounts[2]
		const addressUweHH2 = accounts[0]
		const addressqH9uUdz = accounts[1]
		const addressYQl6pft = accounts[1]
		const uintzgUcudN = BigInt("1332")
		const addressenbfcQx = accounts[4]
		const uintAHtKAG5 = BigInt("393")
		const uintZDJYq5X = BigInt("117")
		const uintQ6ylye = await TetherTokenLRNxsUB.allowance.call(addressZkjH28z, addressHfWGPWU, {from: accounts[2]});
		const uintYflw7m2 = await TetherTokenLRNxsUB.allowance.call(addressqH9uUdz, addressUweHH2, {from: accounts[4]});
		const uintEdYKE4a = await TetherTokenLRNxsUB.balanceOf.call(addressYQl6pft, {from: accounts[0]});
		const addressKxH9EGi = await TetherTokenLRNxsUB.transfer.call(addressenbfcQx, uintzgUcudN, {from: accounts[2]});
		const uintQRBaRj3 = await TetherTokenLRNxsUB.setParams.call(uintZDJYq5X, uintAHtKAG5, {from: accounts[0]});

		assert.equal(uintEdYKE4a, BigInt("231"))
		assert.equal(uintQ6ylye, BigInt("0"))
		assert.equal(uintYflw7m2, BigInt("0"))
		await expect(TetherTokenLRNxsUB.transfer.call(addressenbfcQx, uintzgUcudN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintPYtPLiB = BigInt("970")
		const stringKcllVcG = "GwA5RfT5v6B55bmsuXpZ7CItDCl5yOLTTspSxKl8s0GKFKa0L6K2rMxdtYeH1SeMVwJisIMualdM63W8tOsmcXWC"
		const string16nz2W = "JPgnRUvNYju"
		const uintL1yIT9X = BigInt("1638")
		const TetherTokenWFctiqt = await TetherToken.new(uintPYtPLiB, stringKcllVcG, string16nz2W, uintL1yIT9X, {from: accounts[0]});
		const addressmyo2QsC = accounts[4]
		const uintoJ3yAG3 = BigInt("859")
		const addressJD7fNSR = accounts[0]
		const addressgQ3iPrU = accounts[5]
		const uintoWpuDE1 = BigInt("144")
		const addressshFvl1I = accounts[3]
		const addressktOYSVw = await TetherTokenWFctiqt.deprecate.call(addressmyo2QsC, {from: accounts[5]});
		const uintaNROSZ0 = await TetherTokenWFctiqt.issue.call(uintoJ3yAG3, {from: accounts[3]});
		const uintbzyncyg = await TetherTokenWFctiqt.allowance.call(addressgQ3iPrU, addressJD7fNSR, {from: accounts[0]});
		const addressPcySygv = await TetherTokenWFctiqt.approve.call(addressshFvl1I, uintoWpuDE1, {from: accounts[3]});

		await expect(TetherTokenWFctiqt.deprecate.call(addressmyo2QsC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintU6ucs1B = BigInt("1620")
		const stringA6XeI9a = "w1tfnKVnrSwvPuTtuyBm7gqTlGAzOEDluxDFXaBtpq3"
		const stringLxY9eG4 = "N9kSVw54szFRvxsitWSi7RisPtyYO33x93DsF6JTeEv81rhbxwhGuTdFzs9vSy4B829sQ0XtRnYvd"
		const uintaPYA9ke = BigInt("1732")
		const TetherTokenKrUNsLf = await TetherToken.new(uintU6ucs1B, stringA6XeI9a, stringLxY9eG4, uintaPYA9ke, {from: accounts[0]});
		const uintQpjNUIz = BigInt("1267")
		const uintyhX6Oha = BigInt("710")
		const uintfvduA5B = BigInt("779")
		const addresspsdfeRC = accounts[1]
		const uintLRbnFY = BigInt("1527")
		const uintmcIPlrH = BigInt("1922")
		const uintGRCaBVF = BigInt("718")
		const addressFgfGTSS = accounts[3]
		const uintHFodXJD = await TetherTokenKrUNsLf.setParams.call(uintyhX6Oha, uintQpjNUIz, {from: accounts[0]});
		const addressZ8CDJsx = await TetherTokenKrUNsLf.approve.call(addresspsdfeRC, uintfvduA5B, {from: accounts[3]});
		const uintwGatvp = await TetherTokenKrUNsLf.setParams.call(uintmcIPlrH, uintLRbnFY, {from: accounts[0]});
		const uintrjViYUI = await TetherTokenKrUNsLf.redeem.call(uintGRCaBVF, {from: accounts[0]});
		const addressLwTJnu7 = await TetherTokenKrUNsLf.deprecate.call(addressFgfGTSS, {from: accounts[2]});

		await expect(TetherTokenKrUNsLf.setParams.call(uintyhX6Oha, uintQpjNUIz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJxyPkI9 = BigInt("825")
		const string3xjHmY = "MaP49T7a9zXNRh25pQ75BuJmBwhsLW574jjF615GTWO4efSniJySICOLtA1quFSet9863YMmwFQOqnRPRk3Tqn3Kwoz6"
		const stringFC1y5Ps = "2wxsn0D8k2RJimbmRjcC09iPN8v6aJ9DADIswb8mtX7G16hwkanRfMJXC3"
		const uint7R5o0L = BigInt("282")
		const TetherTokenv2hAtLU = await TetherToken.new(uintJxyPkI9, string3xjHmY, stringFC1y5Ps, uint7R5o0L, {from: accounts[1]});
		const uintF8mSWNZ = BigInt("2025")
		const uintdej1cEa = BigInt("1762")
		const addressmcK80N0 = accounts[3]
		const uintMiEHTct = await TetherTokenv2hAtLU.issue.call(uintF8mSWNZ, {from: accounts[1]});
		const uintup7sCCO = await TetherTokenv2hAtLU.redeem.call(uintdej1cEa, {from: accounts[3]});
		const uintlKGJl7F = await TetherTokenv2hAtLU.balanceOf.call(addressmcK80N0, {from: accounts[3]});

		await expect(TetherTokenv2hAtLU.redeem.call(uintdej1cEa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintO8MpU5s = BigInt("1670")
		const stringPb7wYS4 = "e58oArBVUBuQviiX65Ik1Lq7Wlb4tIUVtCgKBTEczDPA33ztieRT8WXRrLaF3e6OL"
		const stringDpc1WsA = "q5XwJ1Fjnln87GE5GClqy91WncIl32MOZXRg9GtqVTF55uunwiktCzRKZ5VpCeuGuBz"
		const uintJDGg4m = BigInt("1463")
		const TetherTokenMnEvoIm = await TetherToken.new(uintO8MpU5s, stringPb7wYS4, stringDpc1WsA, uintJDGg4m, {from: "0x0000000000000000000000000000000000000001"});
		const uintVpTCElc = BigInt("1402")
		const uintg85XOqL = BigInt("520")
		const uintsrbGjOZ = BigInt("385")
		const addressRXLlmba = accounts[0]
		const addressRqFrXI9 = accounts[4]
		const uintPteiRql = BigInt("914")
		const addressX4WiPrU = accounts[3]
		const uintIXaIpY1 = await TetherTokenMnEvoIm.setParams.call(uintg85XOqL, uintVpTCElc, {from: accounts[4]});
		const addressGiDCApK = await TetherTokenMnEvoIm.approve.call(addressRXLlmba, uintsrbGjOZ, {from: accounts[1]});
		const address02h8A8 = await TetherTokenMnEvoIm.deprecate.call(addressRqFrXI9, {from: accounts[1]});
		const addressRtFemUf = await TetherTokenMnEvoIm.approve.call(addressX4WiPrU, uintPteiRql, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintvb5iuoA = BigInt("883")
		const stringoJPsbwv = "ocUO3WMPI35UZ2YR9GknqWnneJloZ3Hasov6DF2xDR1Ddest2AN39A1QhdGhWVUfTkebB9"
		const stringdJ3FgFf = "iKW"
		const uintSLxa1yh = BigInt("1096")
		const TetherTokenIitcEyG = await TetherToken.new(uintvb5iuoA, stringoJPsbwv, stringdJ3FgFf, uintSLxa1yh, {from: accounts[3]});
		const uintu2Hq91f = BigInt("1720")
		const addressOvnHRE7 = accounts[4]
		const addressDt5jlBC = accounts[4]
		const uintll6Wi3c = BigInt("1003")
		const uintoOUqlos = BigInt("1481")
		const uintoayudNX = BigInt("381")
		const addressjxILb8n = await TetherTokenIitcEyG.transferFrom.call(addressDt5jlBC, addressOvnHRE7, uintu2Hq91f, {from: accounts[0]});
		const uinti5zHGch = await TetherTokenIitcEyG.issue.call(uintll6Wi3c, {from: accounts[0]});
		const uintIxKQkkH = await TetherTokenIitcEyG.issue.call(uintoOUqlos, {from: accounts[3]});
		const uintCIOQdhh = await TetherTokenIitcEyG.issue.call(uintoayudNX, {from: accounts[3]});

		await expect(TetherTokenIitcEyG.transferFrom.call(addressDt5jlBC, addressOvnHRE7, uintu2Hq91f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintaOnIqMH = BigInt("1739")
		const stringDIkdfbH = "sP9uULkMYxAgFHe8xsxGMcjrME9XXXiV7HWG"
		const stringv0mUeN = "zDM1sXR3IgqbphI8zthxlyl4p4WGsY20kaL7t7L9iqjye9W3nJUb8StWOdAAQ5lU8NHUmBc9U1eGtN3"
		const uintWZrODSz = BigInt("283")
		const TetherTokenZyxqcLc = await TetherToken.new(uintaOnIqMH, stringDIkdfbH, stringv0mUeN, uintWZrODSz, {from: accounts[1]});
		const addresszYcDvl = accounts[2]
		const uintC3ybYXM = BigInt("1298")
		const addresseF7ZTkH = accounts[3]
		const addressT89rH9I = accounts[4]
		const uintxHzuaDb = BigInt("1349")
		const addressaOjRcN = await TetherTokenZyxqcLc.deprecate.call(addresszYcDvl, {from: accounts[1]});
		const uintbu08Gp5 = await TetherTokenZyxqcLc.totalSupply.call({from: accounts[1]});
		const uintwO2AjdL = await TetherTokenZyxqcLc.redeem.call(uintC3ybYXM, {from: accounts[1]});
		const uintOzeVbkB = await TetherTokenZyxqcLc.allowance.call(addressT89rH9I, addresseF7ZTkH, {from: accounts[1]});
		const uintNyMDZyD = await TetherTokenZyxqcLc.issue.call(uintxHzuaDb, {from: accounts[5]});

		assert.equal(uintOzeVbkB, BigInt("0"))
		assert.equal(uintbu08Gp5, BigInt("1739"))
		await expect(TetherTokenZyxqcLc.issue.call(uintxHzuaDb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintvp4ipm = BigInt("883")
		const stringoJPsbwv = "ocUO3WMPI35UZ2YR9GknqWnneJloZ3Hasov6DF2xDR1Ddest2AN39A1QhdGhWVUfTkebB9"
		const stringdJ3FgFf = "iKW"
		const uintlPb6292 = BigInt("1096")
		const TetherTokenIitcEyG = await TetherToken.new(uintvp4ipm, stringoJPsbwv, stringdJ3FgFf, uintlPb6292, {from: accounts[3]});
		const uintfTkGYGJ = BigInt("987")
		const addresskjgnnwn = accounts[0]
		const uintY9aJFqg = BigInt("1720")
		const addressRM25Yts = accounts[4]
		const addressT3JNGc = accounts[4]
		const uintoDuiWvj = BigInt("1003")
		const uintquR0Ww = BigInt("1481")
		const uintCDjfU1A = BigInt("391")
		const addressuDDr6dy = await TetherTokenIitcEyG.approve.call(addresskjgnnwn, uintfTkGYGJ, {from: accounts[4]});
		const addressjxILb8n = await TetherTokenIitcEyG.transferFrom.call(addressT3JNGc, addressRM25Yts, uintY9aJFqg, {from: accounts[0]});
		const uinti5zHGch = await TetherTokenIitcEyG.issue.call(uintoDuiWvj, {from: accounts[0]});
		const uintIxKQkkH = await TetherTokenIitcEyG.issue.call(uintquR0Ww, {from: accounts[3]});
		const uintCIOQdhh = await TetherTokenIitcEyG.issue.call(uintCDjfU1A, {from: accounts[3]});

		await expect(TetherTokenIitcEyG.transferFrom.call(addressT3JNGc, addressRM25Yts, uintY9aJFqg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})