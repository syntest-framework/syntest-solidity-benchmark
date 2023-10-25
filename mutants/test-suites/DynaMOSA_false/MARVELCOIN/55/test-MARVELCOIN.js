const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintsPUExmn = BigInt("1915")
		const stringI0ty2tI = "wJGTSo6rwzih4wULiQE1x1zxrG37sanJQvmi83aJsOFJe56imbm3XPItGnzu"
		const stringG8p7DcV = "X3phgPOyiIFNbFmgNuMqJiN1hX35KQBBf4YuEJh1E3XH6ChOoIIvI6jbMVAfer5nSO92PKqXbaPIYEL"
		const MARVELCOINnuiRYtY = await MARVELCOIN.new(uintsPUExmn, stringI0ty2tI, stringG8p7DcV, {from: accounts[3]});
		const uintFDX5yX = BigInt("1345")
		const addresszABzjZw = accounts[0]
		const uintjhK5Buq = BigInt("1622")
		const addressLDno7E5 = accounts[1]
		const addressggyOHVY = accounts[4]
		const uintXHoWl9 = BigInt("129")
		const addresssgZEfgN = accounts[1]
		const addressWLvDt85 = accounts[4]
		const uintBAqIgGz = BigInt("584")
		const addressU99Zm2 = accounts[0]
		const addressgypxzc = accounts[2]
		const uintvbkPQX = BigInt("1571")
		const addressMhWe0V2 = accounts[5]
//		const boolCeiHVVt = await MARVELCOINnuiRYtY.transfer.call(addresszABzjZw, uintFDX5yX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolA1ysUY = await MARVELCOINnuiRYtY.transferFrom.call(addressggyOHVY, addressLDno7E5, uintjhK5Buq, {from: accounts[1]});
//		const boolDGGrTVj = await MARVELCOINnuiRYtY.transferFrom.call(addressWLvDt85, addresssgZEfgN, uintXHoWl9, {from: accounts[0]});
//		const boolaQpakJ3 = await MARVELCOINnuiRYtY.transferFrom.call(addressgypxzc, addressU99Zm2, uintBAqIgGz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBZfI4jY = await MARVELCOINnuiRYtY.burnFrom.call(addressMhWe0V2, uintvbkPQX, {from: accounts[0]});

		await expect(MARVELCOINnuiRYtY.transfer.call(addresszABzjZw, uintFDX5yX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintMERgCj = BigInt("818")
		const stringhhskAnX = "pdjDa6agxDDeMG1EvsjJ7iwAemto7N4GZoIbN4EDwkNwlGEa49jnD59EVneFQy"
		const stringMvo3KzB = "sVtCHThyxn2f3u9aHqfgs8oE9kqd"
		const MARVELCOINgmotx1 = await MARVELCOIN.new(uintMERgCj, stringhhskAnX, stringMvo3KzB, {from: accounts[3]});
		const uintw9U2Vcb = BigInt("348")
		const addressPcIIKuI = accounts[1]
		const uintqVhMOT = BigInt("993")
		const addressCd1dE5T = accounts[5]
		const boolfcv2ftP = await MARVELCOINgmotx1.approve.call(addressPcIIKuI, uintw9U2Vcb, {from: accounts[4]});
//		const bool32L5SB = await MARVELCOINgmotx1.burnFrom.call(addressCd1dE5T, uintqVhMOT, {from: accounts[3]});

		assert.equal(boolfcv2ftP, true)
		await expect(MARVELCOINgmotx1.burnFrom.call(addressCd1dE5T, uintqVhMOT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintjeHWPRX = BigInt("660")
		const stringPflqNlS = "kzDSzIeEyQRiHP5Mxe11TwFEIfODuQHjJBCPfNZ4V9VCsVaZkNTKQzKpD7q5AL1lT6QIOBAtEB8cRIh3UY35QEBvJ1OeJWocd2"
		const stringqjYIR4H = "neTLDpsvqaBjtoVFyrFAC8ullG13u9uhP7EKmtHSGawsbP"
		const MARVELCOINmdnGc8H = await MARVELCOIN.new(uintjeHWPRX, stringPflqNlS, stringqjYIR4H, {from: accounts[5]});
		const uintHZlgZh1 = BigInt("318")
		const address2ZHB6Q = accounts[4]
		const addresspI6qelj = accounts[2]
		const uintyuNfJAf = BigInt("1142")
		const addressZFUO97K = accounts[5]
		const addresshu1X5Ht = accounts[0]
		const uintKAdi4x = BigInt("619")
		const addressEkjRhCJ = accounts[1]
		const byteeFg5FQ6 = "0x1313"
		const uintAKkK8ZJ = BigInt("921")
		const addresslmw6gyN = accounts[0]
		const uintevT0dH2 = BigInt("2019")
		const addressxL1lTT = accounts[4]
		const addresswXfd7Fm = accounts[2]
		const uintO3v2mYr = BigInt("1785")
		const addresslnOnDP = accounts[2]
//		const boolKLdCHs6 = await MARVELCOINmdnGc8H.transferFrom.call(addresspI6qelj, address2ZHB6Q, uintHZlgZh1, {from: accounts[1]});
//		const boolGEMAmXC = await MARVELCOINmdnGc8H.transferFrom.call(addresshu1X5Ht, addressZFUO97K, uintyuNfJAf, {from: accounts[3]});
//		const boolsGJRsBj = await MARVELCOINmdnGc8H.approve.call(addressEkjRhCJ, uintKAdi4x, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEInrck1 = await MARVELCOINmdnGc8H.approveAndCall.call(addresslmw6gyN, uintAKkK8ZJ, byteeFg5FQ6, {from: accounts[3]});
//		const boolM1JeAhb = await MARVELCOINmdnGc8H.transferFrom.call(addresswXfd7Fm, addressxL1lTT, uintevT0dH2, {from: accounts[0]});
//		const boolVaNz5Lw = await MARVELCOINmdnGc8H.approve.call(addresslnOnDP, uintO3v2mYr, {from: accounts[2]});

		await expect(MARVELCOINmdnGc8H.transferFrom.call(addresspI6qelj, address2ZHB6Q, uintHZlgZh1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintJ2hTSC0 = BigInt("294")
		const stringdJK4PFw = "2gRQUXlLWgz7barUjEf59CWvxUxdtIfxGdfhkNCKD4F88Eqmxf7k8U"
		const stringNYLsX7Y = "g2hdWBlQKEvhYcmfi7HxZRGlkdsCX3VUcyyC8oClOdCdYRyFoE05OkJD2VDXpP5zQURMbGOhh6TsWu2Wb"
		const MARVELCOINF50I5V3 = await MARVELCOIN.new(uintJ2hTSC0, stringdJK4PFw, stringNYLsX7Y, {from: accounts[4]});
		const uintmRXSYZY = BigInt("1101")
		const addressWqYnvw = accounts[5]
		const uintD08Mm3c = BigInt("2025")
		const uintz5sy4cT = BigInt("1157")
		const addressD4XTzuP = accounts[4]
		const boolaGBH0Ck = await MARVELCOINF50I5V3.transfer.call(addressWqYnvw, uintmRXSYZY, {from: accounts[4]});
//		const booltTSWrHJ = await MARVELCOINF50I5V3.burn.call(uintD08Mm3c, {from: accounts[0]});
//		const boolTAHME32 = await MARVELCOINF50I5V3.transfer.call(addressD4XTzuP, uintz5sy4cT, {from: accounts[2]});

		assert.equal(boolaGBH0Ck, true)
		await expect(MARVELCOINF50I5V3.burn.call(uintD08Mm3c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintoBpaQqY = BigInt("397")
		const stringkEadI4B = "cTQveSgT6oA7v7PQXo6"
		const stringcF6g1z9 = "HLx1k2Rj36iRqSW6y5P1R6b"
		const MARVELCOINcXfDu9q = await MARVELCOIN.new(uintoBpaQqY, stringkEadI4B, stringcF6g1z9, {from: "0x0000000000000000000000000000000000000001"});
		const uintDjxULmC = BigInt("172")
		const uintTJLlsO = BigInt("514")
		const uintoSBDMwR = BigInt("1992")
		const addressSvMzd2z = accounts[0]
		const uintjWmpSxl = BigInt("1060")
		const addressi22qdpg = accounts[5]
		const addressXBRN6nY = "0x0000000000000000000000000000000000000001"
		const uintgpFae05 = BigInt("770")
		const addressmSharQ7 = accounts[1]
		const addressPhhYVo7 = accounts[0]
		const booltF4XDP8 = await MARVELCOINcXfDu9q.burn.call(uintDjxULmC, {from: accounts[1]});
		const booljLG1u0Y = await MARVELCOINcXfDu9q.burn.call(uintTJLlsO, {from: accounts[0]});
		const boolafGNQF = await MARVELCOINcXfDu9q.burnFrom.call(addressSvMzd2z, uintoSBDMwR, {from: accounts[4]});
		const boolDSOn9n6 = await MARVELCOINcXfDu9q.transferFrom.call(addressXBRN6nY, addressi22qdpg, uintjWmpSxl, {from: accounts[4]});
		const boolJr8fNHo = await MARVELCOINcXfDu9q.transferFrom.call(addressPhhYVo7, addressmSharQ7, uintgpFae05, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MARVELCOIN', async () => {
		const uintbxqhEva = BigInt("988")
		const stringinDIR1 = "81STBlAoT5ajI28oB7bX7Umje6PfpLE1NYWbbT08JN861WoNCx5SZ4DGUGQjALGwjIyVGccJ1E6zPmSBitiz"
		const stringGSENxFA = "HYEcekTtLdO65WJLEk714xSaJpZPhVSxrkpeeNB1qAOUy"
		const MARVELCOINWg6Cflf = await MARVELCOIN.new(uintbxqhEva, stringinDIR1, stringGSENxFA, {from: accounts[3]});
		const byteLk0BKw1 = "0x1d0e0308"
		const uintMu55kYF = BigInt("378")
		const addressiryHndC = accounts[0]
		const uintBzmWUB2 = BigInt("763")
		const addressrWI4LQa = accounts[0]
		const addressXQhIhI0 = accounts[1]
		const uintWvjvBTK = BigInt("323")
		const addressw4qjMdD = accounts[3]
		const uintYU095WK = BigInt("492")
		const addressjl9K8i = accounts[3]
		const addressGEVwlL = accounts[1]
//		const boolBmcWy6z = await MARVELCOINWg6Cflf.approveAndCall.call(addressiryHndC, uintMu55kYF, byteLk0BKw1, {from: accounts[2]});
//		const boolsSaOEYv = await MARVELCOINWg6Cflf.transferFrom.call(addressXQhIhI0, addressrWI4LQa, uintBzmWUB2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbaBlzwm = await MARVELCOINWg6Cflf.burnFrom.call(addressw4qjMdD, uintWvjvBTK, {from: accounts[2]});
//		const boolVQrv7QU = await MARVELCOINWg6Cflf.transferFrom.call(addressGEVwlL, addressjl9K8i, uintYU095WK, {from: accounts[0]});

		await expect(MARVELCOINWg6Cflf.approveAndCall.call(addressiryHndC, uintMu55kYF, byteLk0BKw1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})