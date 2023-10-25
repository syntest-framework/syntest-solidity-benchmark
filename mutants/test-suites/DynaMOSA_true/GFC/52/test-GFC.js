const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintlJqp26 = BigInt("1766")
		const stringUIQHSFv = "ipjcxj"
		const stringPCnWoEv = "GyNoQvzM4oCaj6ojE3d9t7xuAorta"
		const GFChAKc7ap = await GFC.new(uintlJqp26, stringUIQHSFv, stringPCnWoEv, {from: accounts[1]});
		const uintkU0of15 = BigInt("1216")
		const addressMgpia8 = accounts[1]
		const uintxCVh1Hc = BigInt("445")
		const addressEaErSTn = accounts[5]
		const addressRVCAc9W = accounts[5]
		const uintliqQNUw = BigInt("1628")
		const uintCIjp6Ki = BigInt("1668")
		const addressGVWnJsT = accounts[0]
		const uintBaCnSvP = BigInt("1950")
		const byteu8tONC3 = "0x111a121b0f161508140c1a1700150d0a07"
		const uintAYDYNhT = BigInt("1445")
		const addressRJhXNrh = accounts[3]
		const bool9B5JeB = await GFChAKc7ap.approve.call(addressMgpia8, uintkU0of15, {from: "0x0000000000000000000000000000000000000001"});
//		const boolszXCeo9 = await GFChAKc7ap.transferFrom.call(addressRVCAc9W, addressEaErSTn, uintxCVh1Hc, {from: accounts[5]});
//		const boolbvELbUv = await GFChAKc7ap.burn.call(uintliqQNUw, {from: "0x0000000000000000000000000000000000000001"});
//		const booln3SnAxA = await GFChAKc7ap.burnFrom.call(addressGVWnJsT, uintCIjp6Ki, {from: accounts[4]});
//		const boolR3ZyUKT = await GFChAKc7ap.burn.call(uintBaCnSvP, {from: accounts[1]});
//		const boolvkOBuH9 = await GFChAKc7ap.approveAndCall.call(addressRJhXNrh, uintAYDYNhT, byteu8tONC3, {from: accounts[1]});

		assert.equal(bool9B5JeB, true)
		await expect(GFChAKc7ap.transferFrom.call(addressRVCAc9W, addressEaErSTn, uintxCVh1Hc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintHMqGh24 = BigInt("573")
		const stringTC6pPM = "KWvowcv83xigXfw0bdokwuuAzGeoyS2n5KXGbQCLKu7nQdrLcMvB0gQa9bRiJNz4IqEsUXriRNgM0wJ7aN12QEh"
		const stringWvGnwNu = "iiGxbOFb2HHH45XvWPlKONggzHtwh"
		const GFCVDSEK6 = await GFC.new(uintHMqGh24, stringTC6pPM, stringWvGnwNu, {from: accounts[3]});
		const uintF4QS6vA = BigInt("236")
		const uintDbGgs3f = BigInt("1722")
		const uintiYczu2x = BigInt("1546")
		const addressfZcWn8j = accounts[1]
		const uintFN1CzCs = BigInt("1405")
		const addressjDFjqTg = accounts[0]
		const uintOPTpdeo = BigInt("1926")
		const addressU3byQ5k = accounts[5]
		const uintelo3BNK = BigInt("125")
		const addressapV6EZP = accounts[0]
		const addressISFS397 = accounts[5]
//		const booldW2QRbQ = await GFCVDSEK6.burn.call(uintF4QS6vA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqlnuCNf = await GFCVDSEK6.burn.call(uintDbGgs3f, {from: accounts[0]});
//		const boolKAtLbmQ = await GFCVDSEK6.approve.call(addressfZcWn8j, uintiYczu2x, {from: accounts[3]});
//		const boollSpVCLb = await GFCVDSEK6.transfer.call(addressjDFjqTg, uintFN1CzCs, {from: accounts[5]});
//		const boolage4UT = await GFCVDSEK6.approve.call(addressU3byQ5k, uintOPTpdeo, {from: accounts[0]});
//		const boolvikkc16 = await GFCVDSEK6.transferFrom.call(addressISFS397, addressapV6EZP, uintelo3BNK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCVDSEK6.burn.call(uintF4QS6vA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintDHy6EuN = BigInt("1512")
		const stringz9puNj = "cT5LkL1fPFOk1Wo4a1zW6awQoEei6vDReWBfwAvEExTB2ryXme3qqKxIysoihWUCtTs6OsYRboYAtkazz4dPVJVwlRDZL"
		const stringfVDVVb = "AYtDfcXTVGfNLJP5Imbgb7ht"
		const GFCBDN45jy = await GFC.new(uintDHy6EuN, stringz9puNj, stringfVDVVb, {from: "0x0000000000000000000000000000000000000001"});
		const uintWntGH6O = BigInt("1009")
		const addressWQkgLqR = accounts[4]
		const uintKVW3AXu = BigInt("1319")
		const bytexZXvdSl = "0x151b0d1d131a140f13131c051e1215"
		const uintSjiF0j = BigInt("531")
		const addressHGhdXJZ = accounts[0]
		const uintWpGgVOU = BigInt("555")
		const address9wFD2m = accounts[2]
		const boolvCUqqb = await GFCBDN45jy.approve.call(addressWQkgLqR, uintWntGH6O, {from: accounts[5]});
		const boolJbxGTVy = await GFCBDN45jy.burn.call(uintKVW3AXu, {from: accounts[5]});
		const boolZlMCudk = await GFCBDN45jy.approveAndCall.call(addressHGhdXJZ, uintSjiF0j, bytexZXvdSl, {from: accounts[1]});
		const booljKwxP0b = await GFCBDN45jy.approve.call(address9wFD2m, uintWpGgVOU, {from: accounts[1]});
	});

	it('test for GFC', async () => {
		const uintbvpIGqy = BigInt("817")
		const stringg9YrryB = "xejL4VujqSkxSbuTuB7DD"
		const stringEhCyaJm = "fY6DdfpkmXx"
		const GFChzTK7O3 = await GFC.new(uintbvpIGqy, stringg9YrryB, stringEhCyaJm, {from: accounts[4]});
		const byteHOKKdYe = "0x1d0f0d030e0c0203021104141f"
		const uintkFQCwWJ = BigInt("257")
		const addressEJpOnaL = accounts[2]
		const byteLKFdawm = "0x11190f1a0b1e0d020f0f0b"
		const uintm1tqt6h = BigInt("1811")
		const addressUbHjMa7 = accounts[3]
		const uinti6XwDZ1 = BigInt("1282")
		const addressljxwmWh = "0x0000000000000000000000000000000000000001"
		const addresswEO3KH = accounts[3]
		const uintb5ehmN = BigInt("626")
		const addressPpxjpyy = accounts[0]
		const uinttjfxDyb = BigInt("1931")
		const addressm5GvQmP = accounts[4]
		const uintHoBnbXC = BigInt("487")
		const addressCzqLrFZ = accounts[0]
//		const boolpYgYKL4 = await GFChzTK7O3.approveAndCall.call(addressEJpOnaL, uintkFQCwWJ, byteHOKKdYe, {from: accounts[2]});
//		const boolkmLTFUv = await GFChzTK7O3.approveAndCall.call(addressUbHjMa7, uintm1tqt6h, byteLKFdawm, {from: accounts[4]});
//		const boolpjqImYE = await GFChzTK7O3.transferFrom.call(addresswEO3KH, addressljxwmWh, uinti6XwDZ1, {from: accounts[0]});
//		const boolAnnBwNp = await GFChzTK7O3.approve.call(addressPpxjpyy, uintb5ehmN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmyDwj8x = await GFChzTK7O3.approve.call(addressm5GvQmP, uinttjfxDyb, {from: accounts[1]});
//		const boolKkIykzI = await GFChzTK7O3.approve.call(addressCzqLrFZ, uintHoBnbXC, {from: accounts[2]});

		await expect(GFChzTK7O3.approveAndCall.call(addressEJpOnaL, uintkFQCwWJ, byteHOKKdYe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintFnuE7a = BigInt("1027")
		const stringBs44ILb = "OncPmepDLERy"
		const stringtPmMHj1 = "ZqYC8UuV0i"
		const GFCmeHbBc = await GFC.new(uintFnuE7a, stringBs44ILb, stringtPmMHj1, {from: accounts[0]});
		const uintAh3Lofq = BigInt("316")
		const address5A7H45 = accounts[4]
		const uintn2LUOG = BigInt("289")
		const addressPAQjBWo = accounts[3]
		const addressC08BYpo = accounts[0]
//		const boolwv51u57 = await GFCmeHbBc.burnFrom.call(address5A7H45, uintAh3Lofq, {from: accounts[1]});
//		const boolsoPOst0 = await GFCmeHbBc.transferFrom.call(addressC08BYpo, addressPAQjBWo, uintn2LUOG, {from: accounts[2]});

		await expect(GFCmeHbBc.burnFrom.call(address5A7H45, uintAh3Lofq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintd1tiWx0 = BigInt("1831")
		const stringYgZrK5b = "KUbNWVRL374eHotExqQLnyacX6oXkhE8I67EtMmpswx7Ob5HtW3VqkLe74uOnyTRCo4TYCniW4bogqQbIcphKjng9ZKBNtsW"
		const stringvT2YyWh = "qrzEYTBqfoXOYh6wKGEZt"
		const GFCkGh1q9L = await GFC.new(uintd1tiWx0, stringYgZrK5b, stringvT2YyWh, {from: accounts[1]});
		const uintV7g14kC = BigInt("101")
		const addressC0ktIqB = accounts[3]
		const uintPhkgeUc = BigInt("23")
		const addressc7jRNo2 = accounts[1]
		const uintXiLxbFZ = BigInt("1286")
		const boolsG7vbon = await GFCkGh1q9L.approve.call(addressC0ktIqB, uintV7g14kC, {from: accounts[4]});
//		const boolT2VPgrM = await GFCkGh1q9L.transfer.call(addressc7jRNo2, uintPhkgeUc, {from: accounts[3]});
//		const boolpocJ1OZ = await GFCkGh1q9L.burn.call(uintXiLxbFZ, {from: accounts[1]});

		assert.equal(boolsG7vbon, true)
		await expect(GFCkGh1q9L.transfer.call(addressc7jRNo2, uintPhkgeUc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintGcJLiGp = BigInt("1027")
		const stringBs44ILb = "OncPmepDLERy"
		const stringtPmMHj1 = "ZqYC8UuV0i"
		const GFCmeHbBc = await GFC.new(uintGcJLiGp, stringBs44ILb, stringtPmMHj1, {from: accounts[0]});
		const uintSGSvnzl = BigInt("785")
		const uintr5J1ysG = BigInt("1627")
		const addressxSVUSwT = accounts[1]
		const addressHlpcIUw = accounts[3]
		const uintwUt12JH = BigInt("917")
		const addressf6zXazI = accounts[4]
		const boolJ3lBiuw = await GFCmeHbBc.burn.call(uintSGSvnzl, {from: accounts[0]});
//		const boolNa8jN3c = await GFCmeHbBc.transferFrom.call(addressHlpcIUw, addressxSVUSwT, uintr5J1ysG, {from: accounts[3]});
//		const boolwv51u57 = await GFCmeHbBc.burnFrom.call(addressf6zXazI, uintwUt12JH, {from: accounts[1]});

		assert.equal(boolJ3lBiuw, true)
		await expect(GFCmeHbBc.transferFrom.call(addressHlpcIUw, addressxSVUSwT, uintr5J1ysG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintN1HHhx = BigInt("1831")
		const stringYgZrK5b = "KUbNWVRL374eHotExqQLnyacX6oXkhE8I67EtMmpswx7Ob5HtW3VqkLe74uOnyTRCo4TYCniW4bogqQbIcphKjng9ZKBNtsW"
		const stringvT2YyWh = "qrzEYTBqfoXOYh6wKGEZt"
		const GFCkGh1q9L = await GFC.new(uintN1HHhx, stringYgZrK5b, stringvT2YyWh, {from: accounts[1]});
		const uintyS6uTn8 = BigInt("101")
		const addressBce9WSP = accounts[3]
		const uintzJ5PGwj = BigInt("243")
		const addressIofJxdH = accounts[1]
		const uintBKsEXUP = BigInt("23")
		const addressJ81XcHl = accounts[1]
		const uintwhI0W64 = BigInt("1948")
		const addressA2EkHZT = accounts[3]
		const uintnnfrT1e = BigInt("1286")
		const bytejTCNfS = "0x071d19151a1317"
		const uintTcLLWqB = BigInt("47")
		const addressN67OB14 = accounts[1]
		const boolsG7vbon = await GFCkGh1q9L.approve.call(addressBce9WSP, uintyS6uTn8, {from: accounts[4]});
//		const booltr8K6tT = await GFCkGh1q9L.burnFrom.call(addressIofJxdH, uintzJ5PGwj, {from: accounts[1]});
//		const boolT2VPgrM = await GFCkGh1q9L.transfer.call(addressJ81XcHl, uintBKsEXUP, {from: accounts[3]});
//		const boolk5C9CcQ = await GFCkGh1q9L.burnFrom.call(addressA2EkHZT, uintwhI0W64, {from: accounts[3]});
//		const boolpocJ1OZ = await GFCkGh1q9L.burn.call(uintnnfrT1e, {from: accounts[1]});
//		const bool1LTaU7 = await GFCkGh1q9L.approveAndCall.call(addressN67OB14, uintTcLLWqB, bytejTCNfS, {from: accounts[0]});

		assert.equal(boolsG7vbon, true)
		await expect(GFCkGh1q9L.burnFrom.call(addressIofJxdH, uintzJ5PGwj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKZwpYE0 = BigInt("1161")
		const stringwaOeSFn = "smvWefcHlKxxub1NHMsdut3WAGoz5A9lQqhFtBsf85LOqgtCmahBK26HgOf1Y9tW1EUoYAukhk8Qkhlv5xjnWT9tsVojMQ4kJ"
		const stringSWcKBSl = "jfbkq62Eh4YfpASzVsiuKnh0oRHndGV43RhEKDQLvIgpY3skHc2jIfeXJNL7yHy4z7srEfKtCg8g2YpXv5RHDZN6xq7oFvU"
		const GFCSZjmPaC = await GFC.new(uintKZwpYE0, stringwaOeSFn, stringSWcKBSl, {from: accounts[4]});
		const uintNDJDxeV = BigInt("232")
		const addresst13D7P4 = accounts[0]
		const uintTE3hNr7 = BigInt("1178")
		const addressrLVyoSQ = accounts[1]
		const addresshQJQbG5 = accounts[0]
		const uintUmaiPEA = BigInt("553")
		const addressCT3tQ5E = accounts[0]
		const uintJYeOr4h = BigInt("509")
		const address8wchSL = accounts[4]
		const address8JgvKA = accounts[0]
		const byteIVclGEC = "0x151b18111b071c0818121c030c110a040f191701191a110e06"
		const uinthqpZzFI = BigInt("572")
		const addressKEY3iWg = "0x0000000000000000000000000000000000000001"
		const boolhAq0Vh6 = await GFCSZjmPaC.transfer.call(addresst13D7P4, uintNDJDxeV, {from: accounts[4]});
//		const boolFUf7yGU = await GFCSZjmPaC.transferFrom.call(addresshQJQbG5, addressrLVyoSQ, uintTE3hNr7, {from: accounts[4]});
//		const boolOobwKVe = await GFCSZjmPaC.approve.call(addressCT3tQ5E, uintUmaiPEA, {from: accounts[0]});
//		const boolpG92UBc = await GFCSZjmPaC.transferFrom.call(address8JgvKA, address8wchSL, uintJYeOr4h, {from: accounts[0]});
//		const boolmCKKVL8 = await GFCSZjmPaC.approveAndCall.call(addressKEY3iWg, uinthqpZzFI, byteIVclGEC, {from: accounts[3]});

		assert.equal(boolhAq0Vh6, true)
		await expect(GFCSZjmPaC.transferFrom.call(addresshQJQbG5, addressrLVyoSQ, uintTE3hNr7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})