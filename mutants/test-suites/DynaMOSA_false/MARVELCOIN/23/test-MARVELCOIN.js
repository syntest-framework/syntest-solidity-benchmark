const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintYhVLJyf = BigInt("1163")
		const stringOe4lXou = "QaUbeRj7xWfpe9DDpBkhHkOuhCXHHvv7yAUR"
		const stringK8jTl0f = "hiK7PHGeQE7QDjwTTdIc58bWx2ZcmXL6G3v8cP9U3A6OWx5vlrUFFSRNyHy9S"
		const MARVELCOINiHmQ4lp = await MARVELCOIN.new(uintYhVLJyf, stringOe4lXou, stringK8jTl0f, {from: accounts[3]});
		const uintqpbaTH = BigInt("576")
		const addressfiitjL8 = accounts[0]
		const uintItg5mEZ = BigInt("925")
		const addressuxpqZRa = accounts[1]
		const addressnC9SsA = accounts[1]
		const uintbm8NXfX = BigInt("1532")
		const addressTVq4ywO = accounts[4]
		const addressE7YdWAc = accounts[4]
		const uintmZs5ROd = BigInt("1471")
		const addressduayfhO = accounts[3]
//		const boolwKtVPz3 = await MARVELCOINiHmQ4lp.burnFrom.call(addressfiitjL8, uintqpbaTH, {from: accounts[4]});
//		const boolhmPfhjw = await MARVELCOINiHmQ4lp.transferFrom.call(addressnC9SsA, addressuxpqZRa, uintItg5mEZ, {from: accounts[2]});
//		const boolL7qWYw0 = await MARVELCOINiHmQ4lp.transferFrom.call(addressE7YdWAc, addressTVq4ywO, uintbm8NXfX, {from: accounts[4]});
//		const boolCp4tYGY = await MARVELCOINiHmQ4lp.approve.call(addressduayfhO, uintmZs5ROd, {from: accounts[0]});

		await expect(MARVELCOINiHmQ4lp.burnFrom.call(addressfiitjL8, uintqpbaTH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintgEKQ0Ph = BigInt("1048")
		const stringdGuuxs = "DnJC715kHx7zhqkXLodrcply3L2vEE18xOlnXWtDlki57HwwkOBi5Touag1bOB7Ot7lcKN7"
		const stringyKpEAO = "yBvr6bqCYxJPONP0edYnmPlgGujMLIxaX20"
		const MARVELCOINEH59PSS = await MARVELCOIN.new(uintgEKQ0Ph, stringdGuuxs, stringyKpEAO, {from: accounts[4]});
		const uintfsKfxOs = BigInt("1422")
		const uintTJigu7 = BigInt("2023")
		const addressXPW20Ap = "0x0000000000000000000000000000000000000001"
		const uintBq7dT2B = BigInt("1244")
		const addresshxnbd1S = accounts[5]
		const uintv1wOJII = BigInt("143")
		const addresskIVjIMW = "0x0000000000000000000000000000000000000001"
//		const boolB4U9RAl = await MARVELCOINEH59PSS.burn.call(uintfsKfxOs, {from: accounts[2]});
//		const boolwzOr1Y = await MARVELCOINEH59PSS.burnFrom.call(addressXPW20Ap, uintTJigu7, {from: accounts[2]});
//		const bool7xz3A3 = await MARVELCOINEH59PSS.transfer.call(addresshxnbd1S, uintBq7dT2B, {from: accounts[5]});
//		const boolURdmYm = await MARVELCOINEH59PSS.approve.call(addresskIVjIMW, uintv1wOJII, {from: accounts[3]});

		await expect(MARVELCOINEH59PSS.burn.call(uintfsKfxOs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintVQG43dJ = BigInt("1643")
		const stringZlfqwfY = "jMyD5kljEsfqloaxpsUgvwU1fBaSxWeKbAnz3zguvRiHLeKd5Xp3no89P9fBN8XuNdCunnHMRZs12MrJ3QuH1e2Gex"
		const stringmqnqUa0 = "meprB8cIlWLXuY3BPvX9ofWYcS"
		const MARVELCOINn8ujlGm = await MARVELCOIN.new(uintVQG43dJ, stringZlfqwfY, stringmqnqUa0, {from: accounts[4]});
		const uintkCtArEy = BigInt("1007")
		const addressdBaN3dg = accounts[4]
		const uintsj0HCSq = BigInt("1930")
		const addressmqegc6L = accounts[4]
		const byteUoHQ82 = "0x081518010d09"
		const uintP8Gtr1u = BigInt("960")
		const addressZWH3V7c = accounts[1]
		const uintbWLpLWM = BigInt("1454")
		const addressWGNtWcG = "0x0000000000000000000000000000000000000001"
		const uintN2sNoQV = BigInt("1075")
		const addressnmoOuDZ = accounts[0]
//		const booldBw24RY = await MARVELCOINn8ujlGm.transfer.call(addressdBaN3dg, uintkCtArEy, {from: accounts[5]});
//		const boolKOiUkuO = await MARVELCOINn8ujlGm.approve.call(addressmqegc6L, uintsj0HCSq, {from: accounts[2]});
//		const boolz0oiBpd = await MARVELCOINn8ujlGm.approveAndCall.call(addressZWH3V7c, uintP8Gtr1u, byteUoHQ82, {from: accounts[4]});
//		const boolQVHopU8 = await MARVELCOINn8ujlGm.burnFrom.call(addressWGNtWcG, uintbWLpLWM, {from: accounts[4]});
//		const boolElmKmN = await MARVELCOINn8ujlGm.transfer.call(addressnmoOuDZ, uintN2sNoQV, {from: accounts[2]});

		await expect(MARVELCOINn8ujlGm.transfer.call(addressdBaN3dg, uintkCtArEy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintV8zz8e8 = BigInt("330")
		const stringgdgX75g = "seDL3B5pEpK5UdHma7MtTJs"
		const stringA4f12So = "eIkSgw"
		const MARVELCOINw2HOvjA = await MARVELCOIN.new(uintV8zz8e8, stringgdgX75g, stringA4f12So, {from: accounts[2]});
		const uintuM55hIj = BigInt("1490")
		const addressRbT1G6e = "0x0000000000000000000000000000000000000001"
		const addresskjqoM43 = accounts[2]
		const uintqgBUYra = BigInt("1974")
		const uinttYKxFgX = BigInt("515")
		const addressAc54IWg = accounts[5]
		const addressSRKWyko = accounts[4]
		const uintHccneAu = BigInt("1527")
		const addressTRZ1PGR = accounts[3]
		const addressVqFfnH = accounts[4]
//		const boolnV5Ul7 = await MARVELCOINw2HOvjA.transferFrom.call(addresskjqoM43, addressRbT1G6e, uintuM55hIj, {from: accounts[1]});
//		const booluQOuySp = await MARVELCOINw2HOvjA.burn.call(uintqgBUYra, {from: "0x0000000000000000000000000000000000000001"});
//		const booliLoh8P3 = await MARVELCOINw2HOvjA.transferFrom.call(addressSRKWyko, addressAc54IWg, uinttYKxFgX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolw3BGLtb = await MARVELCOINw2HOvjA.transferFrom.call(addressVqFfnH, addressTRZ1PGR, uintHccneAu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINw2HOvjA.transferFrom.call(addresskjqoM43, addressRbT1G6e, uintuM55hIj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintmeQNz40 = BigInt("1219")
		const stringRYJ1nfS = "YacynUzQGmltCaet"
		const stringHsuXpiR = "hN3fBjouF3oCNVacA3gcrtwduVgDGGGoaFbutOTt"
		const MARVELCOINE2PozhN = await MARVELCOIN.new(uintmeQNz40, stringRYJ1nfS, stringHsuXpiR, {from: accounts[1]});
		const byteT7oJ36z = "0x140620110f1f150f1d010c0b080b0113020902050a0302112011"
		const uintRmWHUQx = BigInt("1007")
		const addressKMZtzYi = accounts[1]
		const uintG0Sm2OZ = BigInt("197")
		const address6NwxXN = accounts[1]
		const uintZNbZdB = BigInt("332")
		const addressxEes8ZM = accounts[3]
		const addresscgXwVGt = accounts[1]
		const uintN1ARoOy = BigInt("1181")
		const addressPvAH6Pq = accounts[4]
//		const boollBi94bg = await MARVELCOINE2PozhN.approveAndCall.call(addressKMZtzYi, uintRmWHUQx, byteT7oJ36z, {from: accounts[1]});
//		const bool13oIHH = await MARVELCOINE2PozhN.transfer.call(address6NwxXN, uintG0Sm2OZ, {from: accounts[4]});
//		const boolZ9ReV5o = await MARVELCOINE2PozhN.transferFrom.call(addresscgXwVGt, addressxEes8ZM, uintZNbZdB, {from: accounts[2]});
//		const boolp5yORgh = await MARVELCOINE2PozhN.approve.call(addressPvAH6Pq, uintN1ARoOy, {from: accounts[2]});

		await expect(MARVELCOINE2PozhN.approveAndCall.call(addressKMZtzYi, uintRmWHUQx, byteT7oJ36z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintODOEdf = BigInt("1930")
		const stringFLDrTMT = "zKcz6LEN8QBZIiviQGI8noKMOPjIkTLE8esbxh4sBWu72H70"
		const stringrf3tg4 = ""
		const MARVELCOINVxCd2Q0 = await MARVELCOIN.new(uintODOEdf, stringFLDrTMT, stringrf3tg4, {from: "0x0000000000000000000000000000000000000001"});
		const uintx9tdKt3 = BigInt("988")
		const byteHatBWb3 = "0x1c0e1a0e04170f122007151d180f1717100b081e1e05030618201101160305"
		const uintLiknyVA = BigInt("287")
		const addressbe511cL = accounts[1]
		const uintRxc8mXE = BigInt("636")
		const addressERWmLB = accounts[2]
		const addressaiNHtuA = accounts[4]
		const byteBNfYo4E = "0x1f090e060419121103141b0514"
		const uintaOIBW3R = BigInt("2029")
		const addresswdd95Uz = accounts[1]
		const boolwyas2fR = await MARVELCOINVxCd2Q0.burn.call(uintx9tdKt3, {from: accounts[1]});
		const boolkoOy6yL = await MARVELCOINVxCd2Q0.approveAndCall.call(addressbe511cL, uintLiknyVA, byteHatBWb3, {from: accounts[4]});
		const boolBxPFkRW = await MARVELCOINVxCd2Q0.transferFrom.call(addressaiNHtuA, addressERWmLB, uintRxc8mXE, {from: accounts[1]});
		const boolIUb5NK = await MARVELCOINVxCd2Q0.approveAndCall.call(addresswdd95Uz, uintaOIBW3R, byteBNfYo4E, {from: accounts[5]});
	});
})