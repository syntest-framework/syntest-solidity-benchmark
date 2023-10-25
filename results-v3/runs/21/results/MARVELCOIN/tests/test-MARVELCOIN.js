const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintNES6zs = BigInt("773")
		const string5P7OzX = "h2sUXngX1tUSghjCSx8nFOTf4bvgpkaQ83rhqKPQu"
		const stringNFQiiAo = "vf3oCxpZWCjd202Vyo6wUn6GEQj9afnSMfoNML2tVhr9SHnJ1XtuerI8QGWLXAAY"
		const MARVELCOIN0cskCQ = await MARVELCOIN.new(uintNES6zs, string5P7OzX, stringNFQiiAo, {from: accounts[1]});
		const uintLPPz7Zi = BigInt("1748")
		const byteWynvp57 = "0x060a071a20010a1b0d10170104041216090c1b0f"
		const uintVTKwy4K = BigInt("1660")
		const addressAb8jd7i = accounts[5]
		const uintoOqVsSK = BigInt("478")
		const addresswyMLqEM = accounts[4]
		const uintcKQ1rsb = BigInt("961")
		const addressifEtCZk = accounts[0]
		const boolmCK3JGr = await MARVELCOIN0cskCQ.burn.call(uintLPPz7Zi, {from: accounts[5]});
		const boolc9SbSFu = await MARVELCOIN0cskCQ.approveAndCall.call(addressAb8jd7i, uintVTKwy4K, byteWynvp57, {from: "0x0000000000000000000000000000000000000001"});
		const boolvD0XMF1 = await MARVELCOIN0cskCQ.approve.call(addresswyMLqEM, uintoOqVsSK, {from: "0x0000000000000000000000000000000000000001"});
		const boolbIHMJGo = await MARVELCOIN0cskCQ.burnFrom.call(addressifEtCZk, uintcKQ1rsb, {from: accounts[4]});

		await expect(MARVELCOIN0cskCQ.burn.call(uintLPPz7Zi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintMbPE6TW = BigInt("1042")
		const stringaoGANYY = "ijhUd8aVk"
		const stringICvmIPF = "MszISYGRC"
		const MARVELCOINS0e1NM2 = await MARVELCOIN.new(uintMbPE6TW, stringaoGANYY, stringICvmIPF, {from: accounts[3]});
		const byteFfp7yM = "0x0a001c1d11050b0f060a120718120b051f00120504111a150d0d061e0e111915"
		const uintiLD8aCx = BigInt("923")
		const addressuTf3Oqy = accounts[0]
		const uintNThMIW = BigInt("1805")
		const byteslrL6iM = "0x140c201b110b00170c161a161b1813"
		const uintsNy3Tz = BigInt("1378")
		const addressCWAw3V7 = accounts[2]
		const boolGd983Fc = await MARVELCOINS0e1NM2.approveAndCall.call(addressuTf3Oqy, uintiLD8aCx, byteFfp7yM, {from: accounts[1]});
		const boolKmf8wcH = await MARVELCOINS0e1NM2.burn.call(uintNThMIW, {from: accounts[0]});
		const boolcwzazsV = await MARVELCOINS0e1NM2.approveAndCall.call(addressCWAw3V7, uintsNy3Tz, byteslrL6iM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINS0e1NM2.approveAndCall.call(addressuTf3Oqy, uintiLD8aCx, byteFfp7yM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintxLRsVt = BigInt("700")
		const stringfIEJ4qu = "QCzeraJfcFqqarrP75HtD85hqVGVYyHOE8cE3BHa4fVHRYFRMzU24og6Vl6ecDihQWZCE4VAoDKGs8mhKbMHW"
		const stringz95ehV = "Sf4cZQUTYzYr2NBQULE4d3ism"
		const MARVELCOINB1Zlhqn = await MARVELCOIN.new(uintxLRsVt, stringfIEJ4qu, stringz95ehV, {from: accounts[2]});
		const uintHGL8A5F = BigInt("230")
		const addressCQrV4G5 = accounts[4]
		const addressg0t5Zit = accounts[1]
		const bytesyhNjg = "0x0b1307"
		const uintUWmjEy = BigInt("120")
		const addressu6AbxdA = accounts[3]
		const bytelMSgPlM = "0x0b161c1719"
		const uintxM08Yzg = BigInt("1699")
		const addressanpKtXj = accounts[3]
		const uintgA67Uqy = BigInt("1035")
		const uintfZgoCGh = BigInt("1226")
		const addresswG2MN1V = "0x0000000000000000000000000000000000000001"
		const addressxSRwsj = "0x0000000000000000000000000000000000000001"
		const boolOTasqc9 = await MARVELCOINB1Zlhqn.transferFrom.call(addressg0t5Zit, addressCQrV4G5, uintHGL8A5F, {from: accounts[4]});
		const booljfFceTu = await MARVELCOINB1Zlhqn.approveAndCall.call(addressu6AbxdA, uintUWmjEy, bytesyhNjg, {from: accounts[2]});
		const boolUlgUNtu = await MARVELCOINB1Zlhqn.approveAndCall.call(addressanpKtXj, uintxM08Yzg, bytelMSgPlM, {from: accounts[5]});
		const booloeVkyo8 = await MARVELCOINB1Zlhqn.burn.call(uintgA67Uqy, {from: accounts[1]});
		const boolEikDHf = await MARVELCOINB1Zlhqn.transferFrom.call(addressxSRwsj, addresswG2MN1V, uintfZgoCGh, {from: accounts[5]});

		await expect(MARVELCOINB1Zlhqn.transferFrom.call(addressg0t5Zit, addressCQrV4G5, uintHGL8A5F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinthA8bnQ = BigInt("1709")
		const stringe6LzoJJ = "4LYCd6ZnzqCVrixADtGf6vM4WTjAKQBDPjFeXPupzYBFfJq8QWuxJY5wfB3iLNhHNfWPx2m4g7NLVhSN"
		const stringUb6cak7 = "uW9AEdKRWRnXY2RtoIVIeJ4aSXlt1UK21CmhY3L"
		const MARVELCOINhKr89d2 = await MARVELCOIN.new(uinthA8bnQ, stringe6LzoJJ, stringUb6cak7, {from: accounts[0]});
		const uintFJHXr7 = BigInt("0")
		const addressRBZFUPj = accounts[3]
		const uintsmtbcu9 = BigInt("146")
		const addressxRKXyGw = accounts[5]
		const uintbB7Col5 = BigInt("95")
		const uintDMXaxbv = BigInt("1779")
		const addressH1R03q2 = accounts[3]
		const uintI355Ivi = BigInt("351")
		const addressJWqPHAn = accounts[0]
		const boolOO6Cd4 = await MARVELCOINhKr89d2.approve.call(addressRBZFUPj, uintFJHXr7, {from: accounts[1]});
		const boolWKrweye = await MARVELCOINhKr89d2.transfer.call(addressxRKXyGw, uintsmtbcu9, {from: accounts[3]});
		const booleysKtxV = await MARVELCOINhKr89d2.burn.call(uintbB7Col5, {from: accounts[3]});
		const boolsOVanN = await MARVELCOINhKr89d2.transfer.call(addressH1R03q2, uintDMXaxbv, {from: accounts[1]});
		const boolelU97Hs = await MARVELCOINhKr89d2.burnFrom.call(addressJWqPHAn, uintI355Ivi, {from: accounts[3]});

		assert.equal(boolOO6Cd4, true)
		await expect(MARVELCOINhKr89d2.transfer.call(addressxRKXyGw, uintsmtbcu9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintZwoQhlh = BigInt("56")
		const stringhM4KQ7H = "LAtIcGPOIbBqOCzEmQYKWhstpDQxkQQW4aQk8ogGCI2dq2XrqCVsB"
		const stringI9JImq5 = "Rows45NYEJhmcD2LdObCdGFZNA3HEuLgl7typvJeF9Vjxy4sjhnLCWkqJH9MP8wMY"
		const MARVELCOINPu8xTgu = await MARVELCOIN.new(uintZwoQhlh, stringhM4KQ7H, stringI9JImq5, {from: accounts[5]});
		const uintU1stgQz = BigInt("41")
		const addressoshjrfi = accounts[0]
		const uintV4aUsjL = BigInt("654")
		const uintDW83pct = BigInt("838")
		const addressDTb9Cb8 = accounts[2]
		const boolZ3191Vp = await MARVELCOINPu8xTgu.burnFrom.call(addressoshjrfi, uintU1stgQz, {from: accounts[1]});
		const boolBFsd7S0 = await MARVELCOINPu8xTgu.burn.call(uintV4aUsjL, {from: accounts[2]});
		const boolO4JJVDb = await MARVELCOINPu8xTgu.transfer.call(addressDTb9Cb8, uintDW83pct, {from: accounts[1]});

		await expect(MARVELCOINPu8xTgu.burnFrom.call(addressoshjrfi, uintU1stgQz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintZDvOioh = BigInt("1496")
		const stringuBuomC1 = "h6tCtmq5R9SclAAAFaLBkwhvQlkhteQFE8"
		const stringXqYEc9T = "WvIfdbpBPdFrdKeEMzy5MG8KsXlbQmfv9g3OMEFh6BWSdmyUMyfg2lkVM67I9tUibQq"
		const MARVELCOINSJVTMR9 = await MARVELCOIN.new(uintZDvOioh, stringuBuomC1, stringXqYEc9T, {from: accounts[0]});
		const uintSyrI9tn = BigInt("1116")
		const addresstoIa5BJ = accounts[0]
		const uintnLI96jC = BigInt("1527")
		const uintm7lnmHU = BigInt("1823")
		const addressg2xUom5 = accounts[2]
		const booliRnpCrF = await MARVELCOINSJVTMR9.burnFrom.call(addresstoIa5BJ, uintSyrI9tn, {from: accounts[4]});
		const boolYwgiSln = await MARVELCOINSJVTMR9.burn.call(uintnLI96jC, {from: accounts[2]});
		const boolAEZyOHO = await MARVELCOINSJVTMR9.approve.call(addressg2xUom5, uintm7lnmHU, {from: accounts[3]});

		await expect(MARVELCOINSJVTMR9.burnFrom.call(addresstoIa5BJ, uintSyrI9tn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintLNzGBLr = BigInt("773")
		const string5P7OzX = "h2sUXngX1tUSghjCSx8nFOTf4bvgpkaQ83rhqKPQu"
		const stringNFQiiAo = "vf3oCxpZWCjd202Vyo6wUn6GEQj9afnSMfoNML2tVhr9SHnJ1XtuerI8QGWLXAAY"
		const MARVELCOIN0cskCQ = await MARVELCOIN.new(uintLNzGBLr, string5P7OzX, stringNFQiiAo, {from: accounts[1]});
		const uintU2pm2BK = BigInt("1290")
		const addressq7OvunB = accounts[2]
		const uintSJypdXy = BigInt("961")
		const addressJ59Roxw = accounts[1]
		const boolQYqxtJf = await MARVELCOIN0cskCQ.transfer.call(addressq7OvunB, uintU2pm2BK, {from: accounts[1]});
		const boolbIHMJGo = await MARVELCOIN0cskCQ.burnFrom.call(addressJ59Roxw, uintSJypdXy, {from: accounts[4]});

		assert.equal(boolQYqxtJf, true)
		await expect(MARVELCOIN0cskCQ.burnFrom.call(addressJ59Roxw, uintSJypdXy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintHoWdqCw = BigInt("773")
		const string5P7OzX = "h2sUXngX1tUSghjCSx8nFOTf4bvgpkaQ83rhqKPQu"
		const stringNFQiiAo = "vf3oCxpZWCjd202Vyo6wUn6GEQj9afnSMfoNML2tVhr9SHnJ1XtuerI8QGWLXAAY"
		const MARVELCOIN0cskCQ = await MARVELCOIN.new(uintHoWdqCw, string5P7OzX, stringNFQiiAo, {from: accounts[1]});
		const uintRTYXU4I = BigInt("1652")
		const uintFQ56ULB = BigInt("1748")
		const uintrJ58bz7 = BigInt("935")
		const addressW0HWlKi = accounts[0]
		const boolcfGjlOV = await MARVELCOIN0cskCQ.burn.call(uintRTYXU4I, {from: accounts[1]});
		const boolmCK3JGr = await MARVELCOIN0cskCQ.burn.call(uintFQ56ULB, {from: accounts[5]});
		const boolbIHMJGo = await MARVELCOIN0cskCQ.burnFrom.call(addressW0HWlKi, uintrJ58bz7, {from: accounts[4]});

		assert.equal(boolcfGjlOV, true)
		await expect(MARVELCOIN0cskCQ.burn.call(uintFQ56ULB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCfCahJ = BigInt("216")
		const stringN49Om2H = "gwD5DxfqRbgKPvnBVz141JJgIAiOtthdbNheErBp"
		const stringjbV97Dv = "7MlciqCFSWmdTBnKBVUasigK9aCkX82YlZ9CcXOemxNB0MGNTv"
		const MARVELCOINkBiv63I = await MARVELCOIN.new(uintCfCahJ, stringN49Om2H, stringjbV97Dv, {from: "0x0000000000000000000000000000000000000001"});
		const uintyS8kd0K = BigInt("1257")
		const byteRLJZEXy = "0x0d0e09080609150b09021e1f1f1b0d"
		const uintFaAeKms = BigInt("1880")
		const addressA2TL7R = accounts[4]
		const uintgscNFQ6 = BigInt("33")
		const addressdk7IQKa = accounts[5]
		const addressEeElQZ = accounts[2]
		const uintyfs5zpE = BigInt("1976")
		const addressqJvkSvR = accounts[0]
		const boolyyMwDgS = await MARVELCOINkBiv63I.burn.call(uintyS8kd0K, {from: accounts[1]});
		const boolq3kRjOm = await MARVELCOINkBiv63I.approveAndCall.call(addressA2TL7R, uintFaAeKms, byteRLJZEXy, {from: accounts[2]});
		const booll8ul0Mw = await MARVELCOINkBiv63I.transferFrom.call(addressEeElQZ, addressdk7IQKa, uintgscNFQ6, {from: accounts[1]});
		const boolXQEtmfB = await MARVELCOINkBiv63I.approve.call(addressqJvkSvR, uintyfs5zpE, {from: accounts[5]});
	});
})