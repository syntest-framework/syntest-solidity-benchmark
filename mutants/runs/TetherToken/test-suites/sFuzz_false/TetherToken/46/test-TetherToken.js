const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintUPWoxB = BigInt("554")
		const stringZEc3Sl8 = "7LzbnV82q"
		const stringki9PY6G = "MDBQ6w3rKC4shD2NxbjMzwXNwh19X8jl7Wk4HovGnX1rs9TAnOLscLx5u"
		const uintA3BdBI3 = BigInt("1298")
		const TetherTokenyyxWEBS = await TetherToken.new(uintUPWoxB, stringZEc3Sl8, stringki9PY6G, uintA3BdBI3, {from: accounts[3]});
		const uintGLh4aa = BigInt("1176")
		const addressYdO9eph = accounts[0]
		const uintdTv3oNC = BigInt("544")
		const addressANrStwe = accounts[0]
		const addressQQaR12 = await TetherTokenyyxWEBS.approve.call(addressYdO9eph, uintGLh4aa, {from: accounts[3]});
		const uintmadvBUg = await TetherTokenyyxWEBS.redeem.call(uintdTv3oNC, {from: accounts[1]});
		const uinthz3i3xj = await TetherTokenyyxWEBS.balanceOf.call(addressANrStwe, {from: accounts[3]});

		await expect(TetherTokenyyxWEBS.redeem.call(uintdTv3oNC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGuEjQeE = BigInt("1756")
		const stringWoTBwaI = "AGONmafD1jxDlGHASmPItAfPugaFr1jQq62p4bb0AwVHG2xdN45TODYbYfH6"
		const stringNxaEj7T = "bCiMnzVdWeRnSq8L5j30GiwDcvgX5aEhvW3I884cc9Olj9mIpv6fnaYZQYzmoDl7J"
		const uintZvr7yZw = BigInt("1933")
		const TetherTokensjhgyn2 = await TetherToken.new(uintGuEjQeE, stringWoTBwaI, stringNxaEj7T, uintZvr7yZw, {from: accounts[2]});
		const uintDqR2lw4 = BigInt("207")
		const addressIiCTIT7 = accounts[0]
		const uintrhlhrHT = BigInt("1269")
		const addressQDWYuDQ = accounts[3]
		const uintHyGeWT = BigInt("41")
		const addressKW1Xbc4 = accounts[0]
		const addressR09ANME = accounts[4]
		const addressQDqEHae = accounts[3]
		const addressARrDjpA = accounts[5]
		const uintsknv9v0 = BigInt("1188")
		const addressxCXfu7Y = accounts[3]
		const addressvcFCiFI = await TetherTokensjhgyn2.approve.call(addressIiCTIT7, uintDqR2lw4, {from: accounts[4]});
		const addressd4tGwBw = await TetherTokensjhgyn2.approve.call(addressQDWYuDQ, uintrhlhrHT, {from: "0x0000000000000000000000000000000000000001"});
		const addressej1X0u = await TetherTokensjhgyn2.transferFrom.call(addressR09ANME, addressKW1Xbc4, uintHyGeWT, {from: accounts[2]});
		const addresshj0xotj = await TetherTokensjhgyn2.deprecate.call(addressQDqEHae, {from: accounts[3]});
		const uintgPbMJ7k = await TetherTokensjhgyn2.balanceOf.call(addressARrDjpA, {from: accounts[1]});
		const addressXjQAx7G = await TetherTokensjhgyn2.approve.call(addressxCXfu7Y, uintsknv9v0, {from: accounts[0]});

		await expect(TetherTokensjhgyn2.transferFrom.call(addressR09ANME, addressKW1Xbc4, uintHyGeWT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqPllt1y = BigInt("1207")
		const stringO14W9Mm = "fHN8ngMp8zfURdw5uePlpsqoolqiGS8YbeJC"
		const stringI5Cjfi7 = "xCXnuKnta7cIaTMCQM6LlrifM26P3DLt11V4l5NRuGIvKEhEpQC9Xh0huadjq6CggZCwC9MAABsvB"
		const uint50uYj5 = BigInt("539")
		const TetherTokenIMVTVqg = await TetherToken.new(uintqPllt1y, stringO14W9Mm, stringI5Cjfi7, uint50uYj5, {from: accounts[3]});
		const uintEIIQuvb = BigInt("206")
		const addressun2MtVE = accounts[2]
		const uintr2F9jAB = BigInt("1597")
		const addressPQapaIc = accounts[1]
		const uintAcrIfDS = BigInt("1405")
		const addressacoLBaZ = accounts[1]
		const addressUVCXw8I = "0x0000000000000000000000000000000000000001"
		const uintqUU2w6C = await TetherTokenIMVTVqg.issue.call(uintEIIQuvb, {from: accounts[3]});
		const addressqK2yv68 = await TetherTokenIMVTVqg.deprecate.call(addressun2MtVE, {from: "0x0000000000000000000000000000000000000001"});
		const addresspF9LsKN = await TetherTokenIMVTVqg.approve.call(addressPQapaIc, uintr2F9jAB, {from: accounts[3]});
		const addressvFVTF1r = await TetherTokenIMVTVqg.transferFrom.call(addressUVCXw8I, addressacoLBaZ, uintAcrIfDS, {from: accounts[3]});

		await expect(TetherTokenIMVTVqg.deprecate.call(addressun2MtVE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintmwwKtkf = BigInt("1622")
		const stringqJE4dls = "Yg4545njIFUjSVNiBTO6nPrh1Q"
		const stringVdVkCGr = "Ie2r7YhxUg2"
		const uintEKOhiTK = BigInt("1436")
		const TetherTokenFIPCbjt = await TetherToken.new(uintmwwKtkf, stringqJE4dls, stringVdVkCGr, uintEKOhiTK, {from: accounts[5]});
		const addressBa7DvQ = accounts[0]
		const addressVIfVVh9 = accounts[0]
		const uintUFOOpTs = BigInt("773")
		const uintzHUe2x = BigInt("1997")
		const addresspOGcIzT = accounts[3]
		const uintSmjJkHc = await TetherTokenFIPCbjt.allowance.call(addressVIfVVh9, addressBa7DvQ, {from: accounts[5]});
		const uintuYgLYj = await TetherTokenFIPCbjt.setParams.call(uintzHUe2x, uintUFOOpTs, {from: accounts[5]});
		const addressHp2Dil3 = await TetherTokenFIPCbjt.deprecate.call(addresspOGcIzT, {from: accounts[1]});
		const uinteai0fUr = await TetherTokenFIPCbjt.totalSupply.call({from: accounts[0]});

		assert.equal(uintSmjJkHc, BigInt("0"))
		await expect(TetherTokenFIPCbjt.setParams.call(uintzHUe2x, uintUFOOpTs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintc1FaJZ3 = BigInt("1137")
		const stringkyuWi39 = "z9gPw7bRw3OzX6pefplfReVL89i8tvMrIFPHgG2qwzhw7LEHPesaWbmjIUH3Q0P3iFVV6MX7FgfJzqLYc1zKv7SVzIwmdT"
		const stringLGwhEXx = "PnFJwIKuwxW4lhX97u4BjR40zUjDXNew5iq5GEFHFQjDcufEQe4pUAmox"
		const uint6xavNU = BigInt("57")
		const TetherTokenLlJkFyq = await TetherToken.new(uintc1FaJZ3, stringkyuWi39, stringLGwhEXx, uint6xavNU, {from: accounts[0]});
		const uintgggrtE = BigInt("1624")
		const addressmcS5N1F = accounts[4]
		const addressAXM7DKV = accounts[4]
		const uintaBmhCkG = BigInt("1370")
		const uintdqQVUni = await TetherTokenLlJkFyq.totalSupply.call({from: accounts[1]});
		const uintEiQnH3S = await TetherTokenLlJkFyq.redeem.call(uintgggrtE, {from: accounts[4]});
		const uint5uaTNe = await TetherTokenLlJkFyq.allowance.call(addressAXM7DKV, addressmcS5N1F, {from: accounts[5]});
		const uintE0Y3Cdg = await TetherTokenLlJkFyq.redeem.call(uintaBmhCkG, {from: accounts[3]});
		const uintxjWZmUT = await TetherTokenLlJkFyq.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintdqQVUni, BigInt("1137"))
		await expect(TetherTokenLlJkFyq.redeem.call(uintgggrtE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlJUoIEh = BigInt("1489")
		const stringMARN9tE = "lOmmsV"
		const stringPh5YNvI = "f3dRSd90vU"
		const uintb5HdY9m = BigInt("1812")
		const TetherTokenRX01je9 = await TetherToken.new(uintlJUoIEh, stringMARN9tE, stringPh5YNvI, uintb5HdY9m, {from: accounts[3]});
		const addressHNarrDw = accounts[3]
		const uintKvwXnwh = BigInt("2046")
		const uintCO5T9wB = BigInt("280")
		const addresswT46XWA = accounts[3]
		const uintoNimtrH = await TetherTokenRX01je9.balanceOf.call(addressHNarrDw, {from: accounts[1]});
		const uintzEaVHuv = await TetherTokenRX01je9.issue.call(uintKvwXnwh, {from: accounts[1]});
		const addressrIoCkQi = await TetherTokenRX01je9.approve.call(addresswT46XWA, uintCO5T9wB, {from: accounts[4]});

		assert.equal(uintoNimtrH, BigInt("1489"))
		await expect(TetherTokenRX01je9.issue.call(uintKvwXnwh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintmxMlFQ1 = BigInt("191")
		const stringoKtRH19 = "FxTPU3yNQ6zIQrzzN48sAqNy94k46Y"
		const stringr7aSzz3 = "uOCJT2AsQr0xf4Aa7PVvzJyNEMzTROGGGW2AyA7l5z90cdzisWDykAx7xsS7udJt3cChY3yVR5oYKWoBduI89jRdWx"
		const uintRIB8wUX = BigInt("1992")
		const TetherTokenuwjlaxC = await TetherToken.new(uintmxMlFQ1, stringoKtRH19, stringr7aSzz3, uintRIB8wUX, {from: accounts[4]});
		const uintgcGLwZl = BigInt("668")
		const addressgtGiMzs = accounts[2]
		const uintLkT0Hir = BigInt("626")
		const addressdIChTJI = accounts[4]
		const addresssxv2QTQ = accounts[4]
		const addressLeb8uz = await TetherTokenuwjlaxC.transfer.call(addressgtGiMzs, uintgcGLwZl, {from: accounts[4]});
		const addressQLsBbQp = await TetherTokenuwjlaxC.transferFrom.call(addresssxv2QTQ, addressdIChTJI, uintLkT0Hir, {from: accounts[2]});

		await expect(TetherTokenuwjlaxC.transfer.call(addressgtGiMzs, uintgcGLwZl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbE4prjq = BigInt("1631")
		const stringpKKceQh = "hzV4Ute61jxp1CM2czWvSSK1"
		const stringRq7pSZQ = "75t8EmcR"
		const uintcoJmom = BigInt("1687")
		const TetherTokenpHXv3Cy = await TetherToken.new(uintbE4prjq, stringpKKceQh, stringRq7pSZQ, uintcoJmom, {from: "0x0000000000000000000000000000000000000001"});
		const addresseGa1aiQ = accounts[4]
		const uintqpa4U5Q = BigInt("437")
		const addressBdmNwQR = accounts[4]
		const uintX22MvEQ = BigInt("1811")
		const uintzFrXJVO = BigInt("2024")
		const uintb8iX3ri = BigInt("547")
		const addressAIfeAGs = accounts[3]
		const uintzCHOM2e = await TetherTokenpHXv3Cy.balanceOf.call(addresseGa1aiQ, {from: accounts[0]});
		const addressePZhK79 = await TetherTokenpHXv3Cy.transfer.call(addressBdmNwQR, uintqpa4U5Q, {from: accounts[4]});
		const uintUPpVGPa = await TetherTokenpHXv3Cy.setParams.call(uintzFrXJVO, uintX22MvEQ, {from: accounts[1]});
		const uintbMJRvBu = await TetherTokenpHXv3Cy.issue.call(uintb8iX3ri, {from: accounts[2]});
		const uintdmHgcWq = await TetherTokenpHXv3Cy.balanceOf.call(addressAIfeAGs, {from: accounts[1]});
	});
})