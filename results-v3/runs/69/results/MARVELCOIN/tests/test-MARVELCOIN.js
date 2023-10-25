const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintN592Zqp = BigInt("1239")
		const stringrniLjUv = "BbdEIeXjoZHSDYOXCFplBbeIlhimShCle0tcwvznzJ1TpfIOVi1LdsmNPDR5ZkGnC2jiHOnfrv2dUU2ix1OA33Fl48EPIr"
		const stringUKCVu9L = "l3XwfY2wBhEC62HSydPS0NKVfvmQRPt2q9O"
		const MARVELCOINLXmATVB = await MARVELCOIN.new(uintN592Zqp, stringrniLjUv, stringUKCVu9L, {from: accounts[0]});
		const uintl3MUzPT = BigInt("1147")
		const uinthwzEuF = BigInt("72")
		const addresszT8ltcr = "0x0000000000000000000000000000000000000001"
		const addressIzcf31H = accounts[2]
		const uintRNl8Nxt = BigInt("1967")
		const uintddtSNWz = BigInt("462")
		const addressDtQE37N = accounts[3]
		const boolBSip7Yr = await MARVELCOINLXmATVB.burn.call(uintl3MUzPT, {from: accounts[4]});
		const boolEXFUSAP = await MARVELCOINLXmATVB.transferFrom.call(addressIzcf31H, addresszT8ltcr, uinthwzEuF, {from: accounts[2]});
		const boolzEVvydJ = await MARVELCOINLXmATVB.burn.call(uintRNl8Nxt, {from: accounts[0]});
		const boolFm3yYvR = await MARVELCOINLXmATVB.approve.call(addressDtQE37N, uintddtSNWz, {from: accounts[3]});

		await expect(MARVELCOINLXmATVB.burn.call(uintl3MUzPT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintyYIzYRJ = BigInt("1196")
		const stringhuHbZuC = "aRPBLyKIFeB5TQkxyjhBhbBllOX2XwDR"
		const stringOSE5vTL = "Gf59CKrXP6AlBHyFNxSkGaSVuJqynoovwrdpDYfSKJQbm7r5RxAGenFn"
		const MARVELCOINL3pJuk = await MARVELCOIN.new(uintyYIzYRJ, stringhuHbZuC, stringOSE5vTL, {from: accounts[4]});
		const uintPWQjZMn = BigInt("1701")
		const addressBGpSCeT = accounts[4]
		const addressRU53FE = accounts[1]
		const uintdFafouG = BigInt("1355")
		const byteNh1ztf = "0x090d18200c180b181017161b080f14051c12161b061f040b1e"
		const uintG6LCYYn = BigInt("681")
		const addresschqTC0 = accounts[2]
		const byteWDMgJBn = "0x020a0a1f1702090420181d031d121e18140a14"
		const uinteDbhI9Y = BigInt("1125")
		const addressAy2GqBB = "0x0000000000000000000000000000000000000001"
		const booldoQNtot = await MARVELCOINL3pJuk.transferFrom.call(addressRU53FE, addressBGpSCeT, uintPWQjZMn, {from: accounts[4]});
		const boolPo24HC = await MARVELCOINL3pJuk.burn.call(uintdFafouG, {from: accounts[0]});
		const boolS3tTTOJ = await MARVELCOINL3pJuk.approveAndCall.call(addresschqTC0, uintG6LCYYn, byteNh1ztf, {from: accounts[0]});
		const boolFDdh3q0 = await MARVELCOINL3pJuk.approveAndCall.call(addressAy2GqBB, uinteDbhI9Y, byteWDMgJBn, {from: accounts[2]});

		await expect(MARVELCOINL3pJuk.transferFrom.call(addressRU53FE, addressBGpSCeT, uintPWQjZMn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintLBoAyMR = BigInt("1922")
		const stringQznDgRo = "1gEP5bJIAwBbCdCPkEGWypnVvoeMqm0KEdSTTcRn85uHpS9iccATD6b3Y6IaOMzBWYxf0nPA"
		const stringjMfweHs = "RLDDmLndaeC9eggg82czxqDNNQUmXdR"
		const MARVELCOINvkOep3p = await MARVELCOIN.new(uintLBoAyMR, stringQznDgRo, stringjMfweHs, {from: accounts[2]});
		const uintZ0DMx7 = BigInt("1128")
		const addressdqJSTKX = accounts[1]
		const bytelGo0klk = "0x15080f00061209061c110c1f1e01150602130503"
		const uintCwkU8kG = BigInt("257")
		const addressyxuhky1 = accounts[2]
		const boole8QfWI = await MARVELCOINvkOep3p.approve.call(addressdqJSTKX, uintZ0DMx7, {from: accounts[3]});
		const bool2btdep = await MARVELCOINvkOep3p.approveAndCall.call(addressyxuhky1, uintCwkU8kG, bytelGo0klk, {from: accounts[0]});

		assert.equal(boole8QfWI, true)
		await expect(MARVELCOINvkOep3p.approveAndCall.call(addressyxuhky1, uintCwkU8kG, bytelGo0klk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintbKNtubQ = BigInt("986")
		const stringRyosvGO = "CM7xl5w76Kmbu7"
		const stringDxDctR3 = "NpNfhmeGr912BAlJCW4JBqR6NowsEJgtzuZa5H9WRWIKe8MAEl2n42GTFgW2Xz2sW"
		const MARVELCOINzRgwkXv = await MARVELCOIN.new(uintbKNtubQ, stringRyosvGO, stringDxDctR3, {from: accounts[4]});
		const uintdJ4f1Mx = BigInt("554")
		const addressqAMNHZc = accounts[2]
		const uintvs9wIYo = BigInt("2000")
		const addressbQUDvAy = "0x0000000000000000000000000000000000000001"
		const uintV6SSYKA = BigInt("972")
		const addressQfHE4dW = accounts[4]
		const uintwnK8bYJ = BigInt("1384")
		const addresszTXHSn4 = accounts[2]
		const uintcqADYI = BigInt("1599")
		const addresszi9riu1 = accounts[2]
		const byteetiiPoP = "0x1c"
		const uintzDxz0Mo = BigInt("790")
		const addressYsifT1K = accounts[4]
		const boolF5PDDXx = await MARVELCOINzRgwkXv.transfer.call(addressqAMNHZc, uintdJ4f1Mx, {from: accounts[2]});
		const boolA8R6WLR = await MARVELCOINzRgwkXv.approve.call(addressbQUDvAy, uintvs9wIYo, {from: accounts[1]});
		const boolH6kLmC9 = await MARVELCOINzRgwkXv.burnFrom.call(addressQfHE4dW, uintV6SSYKA, {from: accounts[4]});
		const booltKXDNKP = await MARVELCOINzRgwkXv.approve.call(addresszTXHSn4, uintwnK8bYJ, {from: accounts[1]});
		const boolMUYk5RT = await MARVELCOINzRgwkXv.burnFrom.call(addresszi9riu1, uintcqADYI, {from: accounts[3]});
		const boolOv9znKQ = await MARVELCOINzRgwkXv.approveAndCall.call(addressYsifT1K, uintzDxz0Mo, byteetiiPoP, {from: accounts[0]});

		await expect(MARVELCOINzRgwkXv.transfer.call(addressqAMNHZc, uintdJ4f1Mx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintZSHklvN = BigInt("1062")
		const stringOlN91WH = "SSh1wQlnPiiJnNy7R5fdGd4HdvtDk5l"
		const stringm7WnJLP = "OGpGXNYhImxYhm6UeFPOrit6wiohywmMFG"
		const MARVELCOINYpYKe9q = await MARVELCOIN.new(uintZSHklvN, stringOlN91WH, stringm7WnJLP, {from: accounts[4]});
		const uintbEC7pK = BigInt("560")
		const addressHTMirTP = accounts[5]
		const uintNsLz5TV = BigInt("1273")
		const addressIasRxY = accounts[3]
		const boolPRAq1zi = await MARVELCOINYpYKe9q.burnFrom.call(addressHTMirTP, uintbEC7pK, {from: accounts[3]});
		const boolTac4zAu = await MARVELCOINYpYKe9q.approve.call(addressIasRxY, uintNsLz5TV, {from: accounts[3]});

		await expect(MARVELCOINYpYKe9q.burnFrom.call(addressHTMirTP, uintbEC7pK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintbBUFP26 = BigInt("1062")
		const stringOlN91WH = "SSh1wQlnPiiJnNy7R5fdGd4HdvtDk5l"
		const stringm7WnJLP = "OGpGXNYhImxYhm6UeFPOrit6wiohywmMFG"
		const MARVELCOINYpYKe9q = await MARVELCOIN.new(uintbBUFP26, stringOlN91WH, stringm7WnJLP, {from: accounts[4]});
		const uintlDF8Mk = BigInt("91")
		const uintVytOASU = BigInt("220")
		const addressSmVpIir = accounts[4]
		const addressW1PA45 = accounts[5]
		const byteM2axgMM = "0x0110121a111e100f030a1517190f0a"
		const uinteg0IRL = BigInt("190")
		const addressSVky42L = "0x0000000000000000000000000000000000000001"
		const booln7o1gSL = await MARVELCOINYpYKe9q.burn.call(uintlDF8Mk, {from: accounts[4]});
		const boolpQEldx = await MARVELCOINYpYKe9q.transferFrom.call(addressW1PA45, addressSmVpIir, uintVytOASU, {from: accounts[2]});
		const boolgHe53zh = await MARVELCOINYpYKe9q.approveAndCall.call(addressSVky42L, uinteg0IRL, byteM2axgMM, {from: accounts[2]});

		assert.equal(booln7o1gSL, true)
		await expect(MARVELCOINYpYKe9q.transferFrom.call(addressW1PA45, addressSmVpIir, uintVytOASU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintTBdIKB3 = BigInt("616")
		const stringbk0s2gD = "Q8swXGAwlnU4kcpOWB1NojbqcAT23mxtAlBLY2p8M3IaJrfbo4Db7bnZv21lN0cXj"
		const stringxM4o7N = "zi8Rnje7"
		const MARVELCOINTt5PAcw = await MARVELCOIN.new(uintTBdIKB3, stringbk0s2gD, stringxM4o7N, {from: accounts[3]});
		const uintl7HS7Q3 = BigInt("710")
		const addresscvuqelV = accounts[5]
		const uintrOlGeCV = BigInt("1288")
		const uintxLQRki5 = BigInt("782")
		const uintM38b21B = BigInt("1535")
		const uintD4yMLJi = BigInt("285")
		const addressL1laKVB = accounts[0]
		const boolsow9Kdm = await MARVELCOINTt5PAcw.transfer.call(addresscvuqelV, uintl7HS7Q3, {from: accounts[3]});
		const boolyW7vLq = await MARVELCOINTt5PAcw.burn.call(uintrOlGeCV, {from: "0x0000000000000000000000000000000000000001"});
		const boolkPtgxC7 = await MARVELCOINTt5PAcw.burn.call(uintxLQRki5, {from: accounts[0]});
		const boolk84Qbca = await MARVELCOINTt5PAcw.burn.call(uintM38b21B, {from: accounts[2]});
		const boolLvaLJU0 = await MARVELCOINTt5PAcw.approve.call(addressL1laKVB, uintD4yMLJi, {from: accounts[3]});

		assert.equal(boolsow9Kdm, true)
		await expect(MARVELCOINTt5PAcw.burn.call(uintrOlGeCV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintwarHkQB = BigInt("567")
		const stringajc09OV = "IJvlVDKE"
		const stringb6s9lT = "uHfbEyhpSfU2h1C7ewarrwyFhKXgGyFUQTFt2eIfM8CI8zqFTAxRC9lmGOUXiQBk"
		const MARVELCOINnawmLn = await MARVELCOIN.new(uintwarHkQB, stringajc09OV, stringb6s9lT, {from: "0x0000000000000000000000000000000000000001"});
		const uintmnvwTjc = BigInt("1862")
		const addressb5RNqR = accounts[0]
		const addressoq2UTWb = accounts[0]
		const uintAKFpcGz = BigInt("1319")
		const uintlfXLIH = BigInt("11")
		const addressH79kVdV = accounts[2]
		const addressbKGxk6S = accounts[3]
		const uintTl3a9iP = BigInt("676")
		const boolnmjqHWv = await MARVELCOINnawmLn.transferFrom.call(addressoq2UTWb, addressb5RNqR, uintmnvwTjc, {from: accounts[2]});
		const booltUOpFKB = await MARVELCOINnawmLn.burn.call(uintAKFpcGz, {from: accounts[4]});
		const boolSPAnFSb = await MARVELCOINnawmLn.transferFrom.call(addressbKGxk6S, addressH79kVdV, uintlfXLIH, {from: "0x0000000000000000000000000000000000000001"});
		const boolisqTnqN = await MARVELCOINnawmLn.burn.call(uintTl3a9iP, {from: accounts[5]});
	});

	it('test for MARVELCOIN', async () => {
		const uintheTAYTD = BigInt("1062")
		const stringOlN91WH = "SSh1wQlnPiiJnNy7R5fdGd4HdvtDk5l"
		const stringm7WnJLP = "OGpGXNYhImxYhm6UeFPOrit6wiohywmMFG"
		const MARVELCOINYpYKe9q = await MARVELCOIN.new(uintheTAYTD, stringOlN91WH, stringm7WnJLP, {from: accounts[4]});
		const uintBqjEebG = BigInt("1788")
		const addressXLCQOL4 = accounts[0]
		const uintX7VRW6N = BigInt("673")
		const addresszDOdo2f = accounts[4]
		const uintkUQwrmS = BigInt("1655")
		const addressD5lUMIc = accounts[4]
		const uintIh9XTX4 = BigInt("220")
		const addressE5UGFn = accounts[5]
		const addressYOraR7D = accounts[6]
		const booluTq2X9a = await MARVELCOINYpYKe9q.approve.call(addressXLCQOL4, uintBqjEebG, {from: "0x0000000000000000000000000000000000000001"});
		const bool6J9EYq = await MARVELCOINYpYKe9q.approve.call(addresszDOdo2f, uintX7VRW6N, {from: accounts[2]});
		const boolxO1h63q = await MARVELCOINYpYKe9q.burnFrom.call(addressD5lUMIc, uintkUQwrmS, {from: accounts[2]});
		const boolpQEldx = await MARVELCOINYpYKe9q.transferFrom.call(addressYOraR7D, addressE5UGFn, uintIh9XTX4, {from: accounts[2]});

		assert.equal(bool6J9EYq, true)
		assert.equal(booluTq2X9a, true)
		await expect(MARVELCOINYpYKe9q.burnFrom.call(addressD5lUMIc, uintkUQwrmS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})