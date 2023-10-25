const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintSNwmSkv = BigInt("1245")
		const stringmrtQuaG = "OFqbXBH2FnBw7syVglObnaokHEuj8izboVmX9FbtsqoQ"
		const stringGyJ4ZZ2 = "Ksqv9jzb8EIrr6lzZlClL"
		const GFCA4v6E00 = await GFC.new(uintSNwmSkv, stringmrtQuaG, stringGyJ4ZZ2, {from: accounts[0]});
		const uintz3ttSON = BigInt("186")
		const addressxJIJ2FV = accounts[3]
		const addressCh6Q5oF = accounts[4]
		const byteDUbq1Bh = "0x0d130e171c01121818191a1c18050f1c0f18201b070812081f170003020a"
		const uintxnkwVwb = BigInt("1437")
		const addresseTExnS9 = accounts[2]
		const uintLLadVWc = BigInt("956")
		const addressmHMaWCF = accounts[3]
		const addressh9a2q3M = accounts[0]
		const uintD1ETbX7 = BigInt("1256")
		const addressHdmgWCr = accounts[5]
		const uintlsJsXOI = BigInt("759")
		const addressSugVPfv = accounts[1]
		const boolQ0oug6 = await GFCA4v6E00.transferFrom.call(addressCh6Q5oF, addressxJIJ2FV, uintz3ttSON, {from: accounts[0]});
		const bool0Hx7cI = await GFCA4v6E00.approveAndCall.call(addresseTExnS9, uintxnkwVwb, byteDUbq1Bh, {from: accounts[4]});
		const boolEMWciX = await GFCA4v6E00.transferFrom.call(addressh9a2q3M, addressmHMaWCF, uintLLadVWc, {from: accounts[1]});
		const boolJAx6FYs = await GFCA4v6E00.approve.call(addressHdmgWCr, uintD1ETbX7, {from: accounts[0]});
		const booldT4gTpg = await GFCA4v6E00.burnFrom.call(addressSugVPfv, uintlsJsXOI, {from: accounts[2]});

		await expect(GFCA4v6E00.transferFrom.call(addressCh6Q5oF, addressxJIJ2FV, uintz3ttSON, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintcW6WnbP = BigInt("1928")
		const stringW7WUWDa = "264coDXXkMoy7RBGY5HRUwuUhl68rpydDeGY"
		const stringtUV4V5 = "osb6ayoq3kuOEf3GiUhl9C1g8bI0uBHwKl8UD168pSXcqxIbFp0h1teJiJGAjSGAGaradTqH"
		const GFCc9wbwuu = await GFC.new(uintcW6WnbP, stringW7WUWDa, stringtUV4V5, {from: accounts[5]});
		const bytehR2E7Gw = "0x170318081e0f1319070e1707191b0f1c1b"
		const uinte4Q8Rds = BigInt("817")
		const addresssNImKH8 = accounts[0]
		const byteusXKtxi = "0x191910150c15181e1a07031305"
		const uintYchXcag = BigInt("1611")
		const addressUTafvEM = accounts[4]
		const uintcHs5ypK = BigInt("1982")
		const addressxYDcLE = accounts[5]
		const addresscf0E9P2 = "0x0000000000000000000000000000000000000001"
		const uinter10qqC = BigInt("213")
		const addressxs8sD1g = accounts[1]
		const addressLivgovs = accounts[1]
		const uintlnyPir = BigInt("1242")
		const addressYkQxqco = accounts[2]
		const boolHySRJw = await GFCc9wbwuu.approveAndCall.call(addresssNImKH8, uinte4Q8Rds, bytehR2E7Gw, {from: accounts[4]});
		const boolLQ6n5yH = await GFCc9wbwuu.approveAndCall.call(addressUTafvEM, uintYchXcag, byteusXKtxi, {from: accounts[3]});
		const boolHZ63YdG = await GFCc9wbwuu.transferFrom.call(addresscf0E9P2, addressxYDcLE, uintcHs5ypK, {from: accounts[4]});
		const boolXe0jAgD = await GFCc9wbwuu.transferFrom.call(addressLivgovs, addressxs8sD1g, uinter10qqC, {from: accounts[0]});
		const boolItVczQ0 = await GFCc9wbwuu.approve.call(addressYkQxqco, uintlnyPir, {from: accounts[0]});

		await expect(GFCc9wbwuu.approveAndCall.call(addresssNImKH8, uinte4Q8Rds, bytehR2E7Gw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKgTTAyg = BigInt("1456")
		const stringtc5XwvG = "sbQ4t"
		const stringp9tZUUQ = "DrLVIx3CRKdy5H1zbl47hm1dRXcy7kkzkjLXBrhUXPAal8ZAalNg"
		const GFCNY7nikL = await GFC.new(uintKgTTAyg, stringtc5XwvG, stringp9tZUUQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintnFxMiq = BigInt("1624")
		const uintj9W2TWZ = BigInt("829")
		const addressikZjFui = accounts[0]
		const uintDWCrRCM = BigInt("155")
		const boolKBYjTYu = await GFCNY7nikL.burn.call(uintnFxMiq, {from: accounts[5]});
		const boolsjqKQul = await GFCNY7nikL.approve.call(addressikZjFui, uintj9W2TWZ, {from: accounts[3]});
		const boolI9u7RL6 = await GFCNY7nikL.burn.call(uintDWCrRCM, {from: accounts[4]});
	});

	it('test for GFC', async () => {
		const uint79QAJR = BigInt("1008")
		const stringZWp7nFe = "WYed4b3oOJJyEXlRwmNpxmWstrRwtuaClfcmW8yyDnjI3SL2rXnfNa9SjvPLfkbC"
		const stringYln7Jpk = "hNzV3"
		const GFCeNqwahf = await GFC.new(uint79QAJR, stringZWp7nFe, stringYln7Jpk, {from: accounts[4]});
		const uint3iltjz = BigInt("1550")
		const bytePZWLvKY = "0x0b180110101402041f031d09030f171205"
		const uintHoK9dRh = BigInt("354")
		const addressRmlb2ag = accounts[1]
		const uintNdj6wj = BigInt("265")
		const addressH6FdGEw = accounts[1]
		const uintBjh6yVF = BigInt("645")
		const addresshsXtF3L = accounts[3]
		const addressk5zzEy = accounts[3]
		const uintjm0CDlL = BigInt("1756")
		const addressF0Lkz3p = accounts[0]
		const boolHF5YWSb = await GFCeNqwahf.burn.call(uint3iltjz, {from: accounts[1]});
		const boolO3Hnu0 = await GFCeNqwahf.approveAndCall.call(addressRmlb2ag, uintHoK9dRh, bytePZWLvKY, {from: accounts[4]});
		const boolj3CKz3H = await GFCeNqwahf.transfer.call(addressH6FdGEw, uintNdj6wj, {from: accounts[4]});
		const boolQfaOteQ = await GFCeNqwahf.transferFrom.call(addressk5zzEy, addresshsXtF3L, uintBjh6yVF, {from: "0x0000000000000000000000000000000000000001"});
		const boolPAe1YKa = await GFCeNqwahf.approve.call(addressF0Lkz3p, uintjm0CDlL, {from: accounts[2]});

		await expect(GFCeNqwahf.burn.call(uint3iltjz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uinthIhfpUz = BigInt("1008")
		const stringZWp7nFe = "WYed4b3oOJJyEXlRwmNpxmWstrRwtuaClfcmW8yyDnjI3SL2rXnfNa9SjvPLfkbC"
		const stringYln7Jpk = "hNzV3"
		const GFCeNqwahf = await GFC.new(uinthIhfpUz, stringZWp7nFe, stringYln7Jpk, {from: accounts[4]});
		const uintEG0TSBd = BigInt("265")
		const addresshMs8maN = accounts[1]
		const uintvUflqEP = BigInt("645")
		const addressY7QqOc = accounts[3]
		const address4C38Jy = accounts[3]
		const boolj3CKz3H = await GFCeNqwahf.transfer.call(addresshMs8maN, uintEG0TSBd, {from: accounts[4]});
		const boolQfaOteQ = await GFCeNqwahf.transferFrom.call(address4C38Jy, addressY7QqOc, uintvUflqEP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolj3CKz3H, true)
		await expect(GFCeNqwahf.transferFrom.call(address4C38Jy, addressY7QqOc, uintvUflqEP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintBcFAsFf = BigInt("1008")
		const stringZWp7nFe = "WYed4b3oOJJyEXlRwmNpxmWstrRwtuaClfcmW8yyDnjI3SL2rXnfNa9SjvPLfkbC"
		const stringYln7Jpk = "hNzV3"
		const GFCeNqwahf = await GFC.new(uintBcFAsFf, stringZWp7nFe, stringYln7Jpk, {from: accounts[4]});
		const uintcX12tmn = BigInt("1665")
		const addressVz6Tb6S = accounts[0]
		const uintrOaYpf = BigInt("645")
		const addressrwbbXcU = accounts[3]
		const addressyJqKG75 = accounts[4]
		const boolNA8Tu1w = await GFCeNqwahf.burnFrom.call(addressVz6Tb6S, uintcX12tmn, {from: accounts[3]});
		const boolQfaOteQ = await GFCeNqwahf.transferFrom.call(addressyJqKG75, addressrwbbXcU, uintrOaYpf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCeNqwahf.burnFrom.call(addressVz6Tb6S, uintcX12tmn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})