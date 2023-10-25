const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringIUOBdXt = "jUg53N719eFPLBe71XvKUKfxAY6D"
		const stringvVyLdG = "4Lh4AFB3c6zj7Qmj6e3mh80WTcIVMmElhba1uW4pZtR1dZ7nXYWnrma29DUSpjcegBlwXcY6FjopwyxEtun"
		const uintKsOVa0e = BigInt("853")
		const WOLFYUCbkOx = await WOLF.new(stringIUOBdXt, stringvVyLdG, uintKsOVa0e, {from: accounts[1]});
		const uintsVsbEK8 = BigInt("940")
		const addressjz4MjXb = accounts[0]
		const addressRFHELK = accounts[4]
		const uintlbxZEEO = BigInt("263")
		const addressOCoWunU = accounts[0]
		const uintEPCV3j9 = BigInt("722")
		const addressuW1XTOe = accounts[2]
		const uintiKmFwon = BigInt("1695")
		const addressggvVctr = accounts[2]
		const boolOMCzyG5 = await WOLFYUCbkOx.transferFrom.call(addressRFHELK, addressjz4MjXb, uintsVsbEK8, {from: accounts[2]});
		const boolXfbMCZh = await WOLFYUCbkOx.approveAndCall.call(addressOCoWunU, uintlbxZEEO, {from: accounts[0]});
		const boolFBrq5rv = await WOLFYUCbkOx.transfer.call(addressuW1XTOe, uintEPCV3j9, {from: accounts[2]});
		const boolmPHrPFI = await WOLFYUCbkOx.approveAndCall.call(addressggvVctr, uintiKmFwon, {from: accounts[4]});

		await expect(WOLFYUCbkOx.transferFrom.call(addressRFHELK, addressjz4MjXb, uintsVsbEK8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringf716HM = "1i0OXh4FlGpsjheGqiCjEi2vwAU"
		const stringDtdYsjJ = "A3YJTswDNz4TtLjdsHNSR"
		const uintUD72Tje = BigInt("584")
		const WOLFjyiTgl = await WOLF.new(stringf716HM, stringDtdYsjJ, uintUD72Tje, {from: "0x0000000000000000000000000000000000000001"});
		const uintdYoYOhL = BigInt("710")
		const addressvITR03b = accounts[1]
		const uintDIl4blw = BigInt("1191")
		const addressD9rYtkG = accounts[3]
		const uintILlJK1 = BigInt("1664")
		const addressL6nA2Ib = accounts[3]
		const uintnWyDlH = BigInt("1930")
		const addressx4tCJUM = accounts[3]
		const uintTRBtAu8 = BigInt("1982")
		const addressTs1fWmm = accounts[2]
		const addressCUiqoZN = accounts[3]
		const uintt2Dbqr7 = BigInt("833")
		const addressNWYWrUb = accounts[4]
		const boolz4IgiZq = await WOLFjyiTgl.approve.call(addressvITR03b, uintdYoYOhL, {from: accounts[4]});
		const boolUDk1DH = await WOLFjyiTgl.transfer.call(addressD9rYtkG, uintDIl4blw, {from: accounts[2]});
		const boolLcJGf4F = await WOLFjyiTgl.approveAndCall.call(addressL6nA2Ib, uintILlJK1, {from: accounts[1]});
		const boolsmORfBC = await WOLFjyiTgl.approve.call(addressx4tCJUM, uintnWyDlH, {from: accounts[0]});
		const boolYizkc24 = await WOLFjyiTgl.transferFrom.call(addressCUiqoZN, addressTs1fWmm, uintTRBtAu8, {from: accounts[3]});
		const boolBVp2ZZ = await WOLFjyiTgl.transfer.call(addressNWYWrUb, uintt2Dbqr7, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringQ5LR8p9 = "0pnodcraMXs7"
		const stringAJcq95 = "givmlUmxT4oL2DgleUeg2y399JsvalAYIeRpSDYCK225KjMGEuNgESPFDfHIOFvQ3pdVSf"
		const uintfyZ9agi = BigInt("1992")
		const WOLFV8s11fz = await WOLF.new(stringQ5LR8p9, stringAJcq95, uintfyZ9agi, {from: accounts[4]});
		const uintgQkQPDM = BigInt("1821")
		const addressHyeuIc = accounts[0]
		const uintHdHbogQ = BigInt("1807")
		const addressDlce1GQ = "0x0000000000000000000000000000000000000001"
		const uintvTmSz2E = BigInt("1237")
		const addressKeVwk66 = accounts[2]
		const uintY213Qwt = BigInt("896")
		const addresssp804wM = accounts[4]
		const boolKl1mLhi = await WOLFV8s11fz.approveAndCall.call(addressHyeuIc, uintgQkQPDM, {from: accounts[3]});
		const booluGYviqD = await WOLFV8s11fz.approve.call(addressDlce1GQ, uintHdHbogQ, {from: accounts[2]});
		const booln0QXugM = await WOLFV8s11fz.transfer.call(addressKeVwk66, uintvTmSz2E, {from: accounts[4]});
		const boolf865ku = await WOLFV8s11fz.approve.call(addresssp804wM, uintY213Qwt, {from: accounts[1]});

		await expect(WOLFV8s11fz.approveAndCall.call(addressHyeuIc, uintgQkQPDM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringBiMe6GH = "DO84zaHFYlr7bThPzW1TIC"
		const stringayn794U = "tNpJ1PI8qhqRT7d7tBKX256bCAnk8kRrw6GmIGwtHpr"
		const uintF9fS4Mq = BigInt("1541")
		const WOLFkVjs0D = await WOLF.new(stringBiMe6GH, stringayn794U, uintF9fS4Mq, {from: accounts[1]});
		const addressLwL8ZyF = accounts[4]
		const uintaYqISRr = BigInt("282")
		const address5IXWAx = accounts[4]
		const addressXXHGY64 = accounts[2]
		const uintgVjS66Z = BigInt("460")
		const addressI8nljsO = accounts[1]
		const uintmRNc0i = BigInt("730")
		const addressKzeRSr = accounts[4]
		const uintd0fzHMX = BigInt("1688")
		const addressppfekU0 = accounts[0]
		const boolXCZssi = await WOLFkVjs0D.transferownership.call(addressLwL8ZyF, {from: accounts[4]});
		const booll9QxUMX = await WOLFkVjs0D.transferFrom.call(addressXXHGY64, address5IXWAx, uintaYqISRr, {from: accounts[5]});
		const boolaQ0ZKW4 = await WOLFkVjs0D.approve.call(addressI8nljsO, uintgVjS66Z, {from: accounts[2]});
		const boolSFPrCe = await WOLFkVjs0D.approve.call(addressKzeRSr, uintmRNc0i, {from: accounts[5]});
		const boolFI5wM5f = await WOLFkVjs0D.approve.call(addressppfekU0, uintd0fzHMX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFkVjs0D.transferownership.call(addressLwL8ZyF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringcyx2LVQ = "jNEPFplxc8wsq3BbLdf8wOqcLzzvNgeXe29O3sWOO"
		const stringIo5Gaaj = "QsYC3I4N9iG9tV2JwjHc"
		const uintqfq9JBe = BigInt("541")
		const WOLFu4G3zS0 = await WOLF.new(stringcyx2LVQ, stringIo5Gaaj, uintqfq9JBe, {from: accounts[4]});
		const uintxrYuU89 = BigInt("812")
		const addresskbIDe1z = accounts[0]
		const uintHXjknvp = BigInt("532")
		const addressgs7Uubs = accounts[4]
		const uint2BNLIX = BigInt("558")
		const addressL7dVL4b = accounts[3]
		const addressXdOdbWq = "0x0000000000000000000000000000000000000001"
		const uintXe6VmsA = BigInt("1812")
		const addresslbJ5VYr = accounts[4]
		const addressATqsSIz = accounts[2]
		const uintXGMyFm3 = BigInt("1911")
		const addressrvNKebI = accounts[0]
		const boolUaMnBa = await WOLFu4G3zS0.approve.call(addresskbIDe1z, uintxrYuU89, {from: accounts[5]});
		const boolkX891ZJ = await WOLFu4G3zS0.approve.call(addressgs7Uubs, uintHXjknvp, {from: accounts[0]});
		const boolNYhmmW5 = await WOLFu4G3zS0.transferFrom.call(addressXdOdbWq, addressL7dVL4b, uint2BNLIX, {from: accounts[0]});
		const boolvqVqyB7 = await WOLFu4G3zS0.transferFrom.call(addressATqsSIz, addresslbJ5VYr, uintXe6VmsA, {from: accounts[4]});
		const booljmiNBgY = await WOLFu4G3zS0.approve.call(addressrvNKebI, uintXGMyFm3, {from: accounts[2]});

		assert.equal(boolUaMnBa, true)
		assert.equal(boolkX891ZJ, true)
		await expect(WOLFu4G3zS0.transferFrom.call(addressXdOdbWq, addressL7dVL4b, uint2BNLIX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringAt9YBjZ = "d6pIgcLp1oJdw3ahDeEiMmcuy2uDgQLsynJTBdcHW8zv6rpUAaPlTRYChF1D5wcHW2v6"
		const stringSTeIKct = "mHHnJp8qNasbzqbTibKndonmESqoPdsn8i02j1WbLMHYdaPEubncMuN6Kz0KqkvdISes84Vuy8O5ERXKDFIJEWGGG5ipP4gj"
		const uintyTCa5XC = BigInt("656")
		const WOLFD5SUxH2 = await WOLF.new(stringAt9YBjZ, stringSTeIKct, uintyTCa5XC, {from: accounts[0]});
		const uintRRo9deT = BigInt("516")
		const addressAJD87Fo = accounts[0]
		const uintpGuRXK = BigInt("152")
		const address3xbiu6 = accounts[1]
		const addresspZ1d64H = accounts[2]
		const uintvQZiPqN = BigInt("244")
		const addressZkRSVGU = accounts[2]
		const uintCaiPdH = BigInt("28")
		const addresst1waEMh = accounts[2]
		const boolRhr4cFM = await WOLFD5SUxH2.approveAndCall.call(addressAJD87Fo, uintRRo9deT, {from: accounts[0]});
		const booljtJc6KG = await WOLFD5SUxH2.approve.call(address3xbiu6, uintpGuRXK, {from: accounts[5]});
		const boolnwTGqjv = await WOLFD5SUxH2.transferownership.call(addresspZ1d64H, {from: accounts[3]});
		const boolIUUeBqx = await WOLFD5SUxH2.approveAndCall.call(addressZkRSVGU, uintvQZiPqN, {from: accounts[1]});
		const boolAXJczAi = await WOLFD5SUxH2.approveAndCall.call(addresst1waEMh, uintCaiPdH, {from: accounts[3]});

		assert.equal(boolRhr4cFM, true)
		assert.equal(booljtJc6KG, true)
		await expect(WOLFD5SUxH2.transferownership.call(addresspZ1d64H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringQx6Vp82 = "Sm6l25Reg7HjD"
		const stringUZqk9KF = "YamLF7XsnZSzUD9ULYW77ml42uKxHxuGyB9VtUe4MpqOGXAaOmmlsfJk5gT1SPKWXSXL"
		const uintpCUU7Qm = BigInt("1654")
		const WOLFIM1a7hi = await WOLF.new(stringQx6Vp82, stringUZqk9KF, uintpCUU7Qm, {from: accounts[2]});
		const uinttB9HOWR = BigInt("2005")
		const addressrSAF1Y9 = accounts[4]
		const uintUrMh7cK = BigInt("1430")
		const addressnyXw5Oq = accounts[0]
		const uintODMvQn = BigInt("782")
		const addressB43sNwj = accounts[4]
		const uintUdLIAPQ = BigInt("509")
		const addressWz4CwoE = accounts[1]
		const uintiXyTvy = BigInt("920")
		const addressY6NWRyj = accounts[4]
		const addressadsheHe = accounts[1]
		const booldYVsVPH = await WOLFIM1a7hi.transfer.call(addressrSAF1Y9, uinttB9HOWR, {from: accounts[3]});
		const boolASc7UfL = await WOLFIM1a7hi.transfer.call(addressnyXw5Oq, uintUrMh7cK, {from: accounts[3]});
		const booled6TPyh = await WOLFIM1a7hi.approve.call(addressB43sNwj, uintODMvQn, {from: accounts[0]});
		const boolVUxuj9e = await WOLFIM1a7hi.transfer.call(addressWz4CwoE, uintUdLIAPQ, {from: accounts[0]});
		const boolUpWwB0G = await WOLFIM1a7hi.transferFrom.call(addressadsheHe, addressY6NWRyj, uintiXyTvy, {from: accounts[2]});

		await expect(WOLFIM1a7hi.transfer.call(addressrSAF1Y9, uinttB9HOWR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringB3PpNWd = "oMo2U"
		const stringBvtqie = "FyaYdUQe2LxbGodR0nVrGJHTlxFIUNIEMgP6PBr69XC7jBJtrCF7R71ILOQ3tTTpUr9VLyg6ISyy60MwRAJioXvKwnNmx7n4g"
		const uinthpKAO5H = BigInt("324")
		const WOLFFpuE4tH = await WOLF.new(stringB3PpNWd, stringBvtqie, uinthpKAO5H, {from: accounts[5]});
		const addressgtzmEJJ = accounts[4]
		const uinteCLJCbp = BigInt("761")
		const addresscveojN4 = accounts[4]
		const addressqnpRj9e = accounts[4]
		const uintCScp28a = BigInt("1194")
		const addressdsfYpt = accounts[2]
		const uintdr7rk0D = BigInt("1919")
		const addressu8Cy5T3 = accounts[2]
		const uintYe3mb9Y = BigInt("1399")
		const addressZRGFAIf = accounts[4]
		const uintqX3d9Df = BigInt("1121")
		const addressnsJAGKP = accounts[4]
		const addresspieJbS8 = accounts[1]
		const booldZgKDrJ = await WOLFFpuE4tH.transferownership.call(addressgtzmEJJ, {from: accounts[5]});
		const boolEp8fp5G = await WOLFFpuE4tH.transferFrom.call(addressqnpRj9e, addresscveojN4, uinteCLJCbp, {from: accounts[3]});
		const boolQ4uVek2 = await WOLFFpuE4tH.transfer.call(addressdsfYpt, uintCScp28a, {from: accounts[2]});
		const boolYb5aCf3 = await WOLFFpuE4tH.transfer.call(addressu8Cy5T3, uintdr7rk0D, {from: accounts[3]});
		const boolQ613lB6 = await WOLFFpuE4tH.approve.call(addressZRGFAIf, uintYe3mb9Y, {from: accounts[1]});
		const boolvX048H6 = await WOLFFpuE4tH.transferFrom.call(addresspieJbS8, addressnsJAGKP, uintqX3d9Df, {from: accounts[3]});

		assert.equal(booldZgKDrJ, true)
		await expect(WOLFFpuE4tH.transferFrom.call(addressqnpRj9e, addresscveojN4, uinteCLJCbp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringAt9YBjZ = "d6pIgcLp1oJdw3ahDeEiMmcuy2uDgQLsynJTBdcHW8zv6rpUAaPlTRYChF1D5wcHW2v6"
		const stringSTeIKct = "mHHnJp8qNasbzqbTibKndonmESqoPdsn8i02j1WbLMHYdaPEubncMuN6Kz0KqkvdISes84Vuy8O5ERXKDFIJEWGGG5ipP4gj"
		const uintt7m8FTT = BigInt("656")
		const WOLFD5SUxH2 = await WOLF.new(stringAt9YBjZ, stringSTeIKct, uintt7m8FTT, {from: accounts[0]});
		const uintUQcLQq = BigInt("1214")
		const addressXD0iKDn = accounts[0]
		const uintLq1SIeE = BigInt("516")
		const addressyD7vD6n = accounts[1]
		const addressILt9BvZ = accounts[2]
		const uintMcMScq = BigInt("28")
		const addressFnMKB0h = accounts[2]
		const uintrPcrnkB = BigInt("437")
		const addressygXEDqj = accounts[4]
		const boolPxeb3Uu = await WOLFD5SUxH2.transfer.call(addressXD0iKDn, uintUQcLQq, {from: accounts[0]});
		const boolRhr4cFM = await WOLFD5SUxH2.approveAndCall.call(addressyD7vD6n, uintLq1SIeE, {from: accounts[0]});
		const boolnwTGqjv = await WOLFD5SUxH2.transferownership.call(addressILt9BvZ, {from: accounts[3]});
		const boolAXJczAi = await WOLFD5SUxH2.approveAndCall.call(addressFnMKB0h, uintMcMScq, {from: accounts[3]});
		const boolA42fqdP = await WOLFD5SUxH2.approveAndCall.call(addressygXEDqj, uintrPcrnkB, {from: accounts[2]});

		assert.equal(boolPxeb3Uu, true)
		assert.equal(boolRhr4cFM, true)
		await expect(WOLFD5SUxH2.transferownership.call(addressILt9BvZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringAt9YBjZ = "d6pIgcLp1oJdw3ahDeEiMmcuy2uDgQLsynJTBdcHW8zv6rpUAaPlTRYChF1D5wcHW2v6"
		const stringSTeIKct = "mHHnJp8qNasbzqbTibKndonmESqoPdsn8i02j1WbLMHYdaPEubncMuN6Kz0KqkvdISes84Vuy8O5ERXKDFIJEWGGG5ipP4gj"
		const uintoMw1vO0 = BigInt("656")
		const WOLFD5SUxH2 = await WOLF.new(stringAt9YBjZ, stringSTeIKct, uintoMw1vO0, {from: accounts[0]});
		const uint9oTT8D = BigInt("0")
		const addressM2GOZR8 = accounts[3]
		const addresshBjO5xe = accounts[0]
		const boolJ7O6tRU = await WOLFD5SUxH2.transferFrom.call(addresshBjO5xe, addressM2GOZR8, uint9oTT8D, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJ7O6tRU, true)
	});

	it('test for WOLF', async () => {
		const stringS85YCyh = "5JJmyAUNpQVmt3owahSIoNZSB"
		const stringIRGylnJ = "zXKdN11ua0PINBAcj6YH1nn9u3LNXtlTnMv6HAdXI1h6zR5Hras3nJ1wwAtXl0xchMRbn3vkuYOrJEEB3TXj5Xk"
		const uintNxdIQNN = BigInt("139")
		const WOLFBHhmRjA = await WOLF.new(stringS85YCyh, stringIRGylnJ, uintNxdIQNN, {from: accounts[2]});
		const uintLh6kaGb = BigInt("0")
		const addressFemwgN = accounts[6]
		const uintQFt93Rh = BigInt("1030")
		const addressYnsmnsX = accounts[0]
		const uintRkY0lIx = BigInt("1640")
		const addressSTcBZVU = accounts[5]
		const uintzuCcAi = BigInt("1838")
		const addresswsImTZq = accounts[5]
		const addressc5nsef = accounts[3]
		const boolyd6lp87 = await WOLFBHhmRjA.approveAndCall.call(addressFemwgN, uintLh6kaGb, {from: accounts[2]});
		const boolAWG1hAT = await WOLFBHhmRjA.approve.call(addressYnsmnsX, uintQFt93Rh, {from: accounts[0]});
		const boolEQEQU9K = await WOLFBHhmRjA.transfer.call(addressSTcBZVU, uintRkY0lIx, {from: accounts[3]});
		const boolPES80dY = await WOLFBHhmRjA.transferFrom.call(addressc5nsef, addresswsImTZq, uintzuCcAi, {from: accounts[1]});

		assert.equal(boolAWG1hAT, true)
		assert.equal(boolyd6lp87, true)
		await expect(WOLFBHhmRjA.transfer.call(addressSTcBZVU, uintRkY0lIx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})