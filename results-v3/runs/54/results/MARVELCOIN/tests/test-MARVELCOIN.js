const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintNSWxich = BigInt("538")
		const stringZoHLJpy = "votozkSMsthnqVTmsXgU8N2"
		const stringuh5m5T5 = "WPjU"
		const MARVELCOINHXrWmLe = await MARVELCOIN.new(uintNSWxich, stringZoHLJpy, stringuh5m5T5, {from: accounts[4]});
		const uintKsJo0Lt = BigInt("55")
		const byteRMFpuUY = "0x091e0003121304121d021f0d171c181a031f180a"
		const uintQ1hFHqo = BigInt("330")
		const addressqYp7v9a = accounts[0]
		const boolQ5pl9wF = await MARVELCOINHXrWmLe.burn.call(uintKsJo0Lt, {from: "0x0000000000000000000000000000000000000001"});
		const booly5PcdB = await MARVELCOINHXrWmLe.approveAndCall.call(addressqYp7v9a, uintQ1hFHqo, byteRMFpuUY, {from: accounts[2]});

		await expect(MARVELCOINHXrWmLe.burn.call(uintKsJo0Lt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintocIfpDZ = BigInt("1770")
		const stringe97Czs9 = "OqYeX0YHt23i4iqt07v58"
		const stringW6N55Tl = "RVgR5GI2tN4WocUncQTmNByXE3Bwgx2lMgmzft7Wg6YotEx93z5cP5qwHADZx5Mf6rOv5MUJUqFrhvOn8oJ9r6xyC7T6"
		const MARVELCOINghZka3Y = await MARVELCOIN.new(uintocIfpDZ, stringe97Czs9, stringW6N55Tl, {from: accounts[2]});
		const uintTRLqmxK = BigInt("933")
		const byteX9jN516 = "0x0f121c040b10171e1b080e1003080d1510"
		const uintSA1gemU = BigInt("2021")
		const addressT4m8SMy = accounts[5]
		const uintvebDrkb = BigInt("1929")
		const addressHKa4SBR = "0x0000000000000000000000000000000000000001"
		const addressjxbRGJt = accounts[0]
		const uintIFmogO3 = BigInt("1544")
		const addressDGxCoYD = accounts[2]
		const boolTdXwxUc = await MARVELCOINghZka3Y.burn.call(uintTRLqmxK, {from: accounts[2]});
		const boolXh7Kt84 = await MARVELCOINghZka3Y.approveAndCall.call(addressT4m8SMy, uintSA1gemU, byteX9jN516, {from: accounts[1]});
		const boolAdGixxa = await MARVELCOINghZka3Y.transferFrom.call(addressjxbRGJt, addressHKa4SBR, uintvebDrkb, {from: accounts[2]});
		const boolJqsOBQk = await MARVELCOINghZka3Y.approve.call(addressDGxCoYD, uintIFmogO3, {from: accounts[5]});

		assert.equal(boolTdXwxUc, true)
		await expect(MARVELCOINghZka3Y.approveAndCall.call(addressT4m8SMy, uintSA1gemU, byteX9jN516, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintTjKIvKA = BigInt("1132")
		const stringKFGorKo = "0lH9OyfK3kXQNeF4iDmC"
		const stringQgCKwi7 = "m8Xs67Z4El7rfReiYm9G88ewfqYalaq1GROALEpqWx233f"
		const MARVELCOINw61oeQ8 = await MARVELCOIN.new(uintTjKIvKA, stringKFGorKo, stringQgCKwi7, {from: accounts[0]});
		const uintxApJ73I = BigInt("322")
		const addressZLaaLrW = accounts[1]
		const uintQQtxPe = BigInt("418")
		const addressQdYgtAY = accounts[5]
		const addressDhFnFa = accounts[4]
		const boolf9moiMV = await MARVELCOINw61oeQ8.approve.call(addressZLaaLrW, uintxApJ73I, {from: accounts[4]});
		const boolU38NpRD = await MARVELCOINw61oeQ8.transferFrom.call(addressDhFnFa, addressQdYgtAY, uintQQtxPe, {from: accounts[1]});

		assert.equal(boolf9moiMV, true)
		await expect(MARVELCOINw61oeQ8.transferFrom.call(addressDhFnFa, addressQdYgtAY, uintQQtxPe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinty2x9FJx = BigInt("1177")
		const stringXeo6zq = "gdeBxarjvPbLejq7X3tHptJo4bn0UGq2r2Trflk2V1BXQb3gzvIIX5GHBog"
		const stringo9hwdyz = "UFk2h59mBiI8FejcytiJ0aAhLFbF16XgBSk6YlrPEGSwA6HqfTcHCArGP6cHfXGkZnhOo2MlJ3N5KXwfJz4A839lP8eIje0hBu"
		const MARVELCOINbHynnHD = await MARVELCOIN.new(uinty2x9FJx, stringXeo6zq, stringo9hwdyz, {from: "0x0000000000000000000000000000000000000001"});
		const uintBruI8xA = BigInt("567")
		const addressWMeCqg = accounts[4]
		const uinthPmDkkJ = BigInt("1156")
		const addressR9kpcQs = accounts[2]
		const uint5jHWYY = BigInt("506")
		const byteIBcyW5B = "0x1a150e0b05141219"
		const uintcWCrTVX = BigInt("1383")
		const addressxLOwpp = accounts[3]
		const uintdmX88Kh = BigInt("1993")
		const boolbEx64RR = await MARVELCOINbHynnHD.burnFrom.call(addressWMeCqg, uintBruI8xA, {from: accounts[3]});
		const boolZ5rx45 = await MARVELCOINbHynnHD.approve.call(addressR9kpcQs, uinthPmDkkJ, {from: accounts[4]});
		const boolGzizwGs = await MARVELCOINbHynnHD.burn.call(uint5jHWYY, {from: accounts[1]});
		const boolbRB8iCu = await MARVELCOINbHynnHD.approveAndCall.call(addressxLOwpp, uintcWCrTVX, byteIBcyW5B, {from: accounts[4]});
		const boolwcKxYB6 = await MARVELCOINbHynnHD.burn.call(uintdmX88Kh, {from: accounts[2]});
	});

	it('test for MARVELCOIN', async () => {
		const uintmo2599c = BigInt("538")
		const stringZoHLJpy = "votozkSMsthnqVTmsXgU8N2"
		const stringuh5m5T5 = "WPjU"
		const MARVELCOINHXrWmLe = await MARVELCOIN.new(uintmo2599c, stringZoHLJpy, stringuh5m5T5, {from: accounts[4]});
		const uintMcevWpO = BigInt("1005")
		const addressQyeJza = accounts[1]
		const uintCtzqzpX = BigInt("55")
		const uinthCLYf45 = BigInt("425")
		const addressGUHnOY = accounts[3]
		const byteRw8vpxQ = "0x091e0003121304121d021f0d171c181a031f180a"
		const uintBfCpUBP = BigInt("330")
		const addressMPieVkT = accounts[0]
		const boolomEDzE3 = await MARVELCOINHXrWmLe.burnFrom.call(addressQyeJza, uintMcevWpO, {from: accounts[3]});
		const boolQ5pl9wF = await MARVELCOINHXrWmLe.burn.call(uintCtzqzpX, {from: "0x0000000000000000000000000000000000000001"});
		const boolh2lUvrm = await MARVELCOINHXrWmLe.approve.call(addressGUHnOY, uinthCLYf45, {from: accounts[1]});
		const booly5PcdB = await MARVELCOINHXrWmLe.approveAndCall.call(addressMPieVkT, uintBfCpUBP, byteRw8vpxQ, {from: accounts[2]});

		await expect(MARVELCOINHXrWmLe.burnFrom.call(addressQyeJza, uintMcevWpO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintg3H8J5 = BigInt("850")
		const stringUgOUNY = "uQZCX9qoPoOElZVsJxytVkl8JtcnpbTvQtQuZujGZX3c8e1pGz6wL72HcG9I74w99he0lujyXiVNbNTNl4Vs7ybk"
		const stringN2wg3ix = "tAXUwmrngyxUbQn0zz2u5KOKlh6cAQI9egId5aoANwItPwM7Az89WGYom2jzP57KX7KKDMBTduoeetUJOSdJwkR"
		const MARVELCOINjWWqGQ = await MARVELCOIN.new(uintg3H8J5, stringUgOUNY, stringN2wg3ix, {from: accounts[5]});
		const uintmyNpo8k = BigInt("490")
		const addressdqb4wWb = accounts[0]
		const uintqLWWhX2 = BigInt("1118")
		const uintEZVQQJ4 = BigInt("1421")
		const uintkhGWmcg = BigInt("544")
		const addressOUXaTxY = accounts[1]
		const boolhJCZw8J = await MARVELCOINjWWqGQ.transfer.call(addressdqb4wWb, uintmyNpo8k, {from: accounts[1]});
		const boolNS9Ndo = await MARVELCOINjWWqGQ.burn.call(uintqLWWhX2, {from: accounts[4]});
		const boolOYWL5Tu = await MARVELCOINjWWqGQ.burn.call(uintEZVQQJ4, {from: accounts[3]});
		const boolnzWSumd = await MARVELCOINjWWqGQ.approve.call(addressOUXaTxY, uintkhGWmcg, {from: accounts[1]});

		await expect(MARVELCOINjWWqGQ.transfer.call(addressdqb4wWb, uintmyNpo8k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})