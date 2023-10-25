const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintPK8Aija = BigInt("1145")
		const stringoVJr5wz = "VakHToVHLEN"
		const stringZiyqHNE = "Ti7avpVXT6HG5ZvJtjUzJsSLgp"
		const uintRiav8w1 = BigInt("396")
		const TetherTokenxDejzHk = await TetherToken.new(uintPK8Aija, stringoVJr5wz, stringZiyqHNE, uintRiav8w1, {from: accounts[0]});
		const uintnLiL2YT = BigInt("1944")
		const addressEDVLcw9 = accounts[0]
		const uintW2y4Yus = await TetherTokenxDejzHk.redeem.call(uintnLiL2YT, {from: accounts[1]});
		const addressS1RtB7X = await TetherTokenxDejzHk.deprecate.call(addressEDVLcw9, {from: "0x0000000000000000000000000000000000000001"});
		const uintNJnOjOo = await TetherTokenxDejzHk.totalSupply.call({from: accounts[4]});

		await expect(TetherTokenxDejzHk.redeem.call(uintnLiL2YT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKW7Zf3U = BigInt("684")
		const stringjnVwS1u = "7uSd9Gwahc3H9X1u7JVrOYW5zXL8Q3kK9ZK8c9UloUkbrQtl5295OqiAyr49kuwXO5BE87ubMAaxmOvH"
		const stringbTKxCuV = "aAUq0815OqdtVyBX8mrzSNx2FOKoDbmI6Fm6DA8Lyt7q6OpuJilY"
		const uintQvJUzdV = BigInt("1270")
		const TetherTokenz0j1fHH = await TetherToken.new(uintKW7Zf3U, stringjnVwS1u, stringbTKxCuV, uintQvJUzdV, {from: accounts[5]});
		const uintwgL0Us2 = BigInt("326")
		const addresstYkJrIk = accounts[5]
		const addressb3TEeQt = accounts[4]
		const uintpD7MfMP = BigInt("1122")
		const uintwk2ny9w = BigInt("1664")
		const uintgOiZrqK = BigInt("977")
		const addressBkqb6ur = accounts[0]
		const uintZZApF8N = await TetherTokenz0j1fHH.issue.call(uintwgL0Us2, {from: accounts[1]});
		const uints0QMFj6 = await TetherTokenz0j1fHH.balanceOf.call(addresstYkJrIk, {from: accounts[4]});
		const uintQGnWy7b = await TetherTokenz0j1fHH.balanceOf.call(addressb3TEeQt, {from: accounts[1]});
		const uintn0iCGRP = await TetherTokenz0j1fHH.setParams.call(uintwk2ny9w, uintpD7MfMP, {from: accounts[5]});
		const uintE4jAT3 = await TetherTokenz0j1fHH.issue.call(uintgOiZrqK, {from: accounts[5]});
		const uintAmAexTQ = await TetherTokenz0j1fHH.balanceOf.call(addressBkqb6ur, {from: accounts[4]});

		await expect(TetherTokenz0j1fHH.issue.call(uintwgL0Us2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintfZ4EmWD = BigInt("2009")
		const stringRA5s9QY = "NSTjTgdnYPABOKySsdQdqkSJi"
		const stringuVEWmSN = "kYEqVXvi6KqSXxtGIGo96cbD9aYovF1WG2qdShRRd3HLHMTxMkXxY6UqAid6lvthpqkJRfsEB"
		const uintNJClNPm = BigInt("345")
		const TetherTokenc56ko22 = await TetherToken.new(uintfZ4EmWD, stringRA5s9QY, stringuVEWmSN, uintNJClNPm, {from: accounts[0]});
		const uintjkiX8xS = BigInt("1593")
		const uintRGIEGu = BigInt("1246")
		const addressopBbDQF = accounts[5]
		const addressc5IesCO = accounts[4]
		const uintmLse57b = await TetherTokenc56ko22.redeem.call(uintjkiX8xS, {from: accounts[0]});
		const addresshFnUGY = await TetherTokenc56ko22.transferFrom.call(addressc5IesCO, addressopBbDQF, uintRGIEGu, {from: accounts[0]});

		await expect(TetherTokenc56ko22.transferFrom.call(addressc5IesCO, addressopBbDQF, uintRGIEGu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintPDHuLY = BigInt("640")
		const stringik1djDc = "PW6eKW2193lpiBqjsKzvcU96VsreVngYIf99dqjiGb4M7wxNwyX7SQBcydVe6P7rs58lUyo39iokoY0hSjhTJOqjpmD"
		const stringA8U6dL3 = "9AA1OAuGuJJbgWp"
		const uintJlDQ0Vu = BigInt("1719")
		const TetherTokenrFpjEJM = await TetherToken.new(uintPDHuLY, stringik1djDc, stringA8U6dL3, uintJlDQ0Vu, {from: accounts[1]});
		const uintNKOtmdh = BigInt("845")
		const addresssyusHNr = accounts[2]
		const uintp9YuZDL = BigInt("1639")
		const addressgwVnBR = accounts[4]
		const addressd3STmlu = accounts[1]
		const addressWsBcCwc = accounts[2]
		const addressCWZYUVw = accounts[3]
		const addresst5KMRdH = accounts[4]
		const addressDaN4Rg = accounts[3]
		const address4e5tua = accounts[0]
		const addressrzZ9Wya = await TetherTokenrFpjEJM.approve.call(addresssyusHNr, uintNKOtmdh, {from: "0x0000000000000000000000000000000000000001"});
		const addressUGGCuie = await TetherTokenrFpjEJM.transferFrom.call(addressd3STmlu, addressgwVnBR, uintp9YuZDL, {from: accounts[5]});
		const uintE0ffgr = await TetherTokenrFpjEJM.totalSupply.call({from: accounts[0]});
		const uintL394JNp = await TetherTokenrFpjEJM.allowance.call(addressCWZYUVw, addressWsBcCwc, {from: accounts[3]});
		const uintzclVpAU = await TetherTokenrFpjEJM.balanceOf.call(addresst5KMRdH, {from: accounts[0]});
		const uintpbaWLB = await TetherTokenrFpjEJM.allowance.call(address4e5tua, addressDaN4Rg, {from: accounts[3]});

		await expect(TetherTokenrFpjEJM.transferFrom.call(addressd3STmlu, addressgwVnBR, uintp9YuZDL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintxymS5TE = BigInt("995")
		const stringA5vDzk5 = "Y1RmrEOKYEAbtnnvjASFqitYKR"
		const stringN9q1V9a = "YcZBVqkJTRqmHY5fW1sKHTkBcKIAdguR726BHNuacCAUUE5BfF1btixmT2dSiJVSpt3vnvk5k"
		const uintldOQxhR = BigInt("533")
		const TetherToken0l2YYF = await TetherToken.new(uintxymS5TE, stringA5vDzk5, stringN9q1V9a, uintldOQxhR, {from: "0x0000000000000000000000000000000000000001"});
		const addressBVW42pq = accounts[2]
		const uintATXk7QN = BigInt("1403")
		const addresscjy4wdQ = accounts[1]
		const addressYZb3eQ = accounts[2]
		const addressxMXI3mr = accounts[1]
		const addressOM46Bbd = accounts[5]
		const addressLiukP3A = accounts[5]
		const addresshVUTeGe = accounts[3]
		const uintaucTkKM = await TetherToken0l2YYF.balanceOf.call(addressBVW42pq, {from: accounts[1]});
		const addresslBRcoOQ = await TetherToken0l2YYF.transferFrom.call(addressYZb3eQ, addresscjy4wdQ, uintATXk7QN, {from: accounts[0]});
		const uintHrwdvcy = await TetherToken0l2YYF.allowance.call(addressOM46Bbd, addressxMXI3mr, {from: accounts[4]});
		const uintFHIEqZr = await TetherToken0l2YYF.allowance.call(addresshVUTeGe, addressLiukP3A, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uintrTXhRBw = BigInt("1859")
		const string25QQCn = "xHoR57kBpEXMEwrFFilJ1dLND1WRFCMGy9PonNPsn8X3tHOO6NMbucrxPHhe7JnjalQ9w3FYCsUQsuY9XgLJtRyQTI5"
		const stringRUd1nLY = "tY7EJdixm2xkaxfWzH3cGDaeQSzCp"
		const uintIbYZfFj = BigInt("2025")
		const TetherTokenABbC6b7 = await TetherToken.new(uintrTXhRBw, string25QQCn, stringRUd1nLY, uintIbYZfFj, {from: accounts[4]});
		const addressKz5jHWa = accounts[3]
		const addressfKll2co = accounts[4]
		const uintTLDQiAp = BigInt("801")
		const address2bL5N4 = accounts[0]
		const uintd6Wa70X = await TetherTokenABbC6b7.allowance.call(addressfKll2co, addressKz5jHWa, {from: "0x0000000000000000000000000000000000000001"});
		const addressI0oJtu = await TetherTokenABbC6b7.transfer.call(address2bL5N4, uintTLDQiAp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintd6Wa70X, BigInt("0"))
		await expect(TetherTokenABbC6b7.transfer.call(address2bL5N4, uintTLDQiAp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjHDxEdV = BigInt("566")
		const stringU0nPZw0 = "ehifhOfRYhLUfeajkOhcWAhOhqVXDtSla9YJTfDbUk6As90QxXa559FUVLaXnj0WlP4g5TjXER4c6OsrUjU"
		const stringy9k6qXq = "vgTBOpFS6F0xKlQcoAdVLNXJGB3mPqeEaP2HbvoFnne6NpGA1Km112M94l8pfX"
		const uintCRVE0tP = BigInt("1743")
		const TetherTokenW5ZpNYQ = await TetherToken.new(uintjHDxEdV, stringU0nPZw0, stringy9k6qXq, uintCRVE0tP, {from: accounts[1]});
		const addressGqUSyEH = accounts[0]
		const addressZBpKRX7 = accounts[2]
		const uintCuGWhZg = BigInt("590")
		const addressu19K8pb = "0x0000000000000000000000000000000000000001"
		const uintIu1lkTN = BigInt("1625")
		const addressXiwmEfg = await TetherTokenW5ZpNYQ.deprecate.call(addressGqUSyEH, {from: accounts[0]});
		const addressj1tBq3J = await TetherTokenW5ZpNYQ.deprecate.call(addressZBpKRX7, {from: accounts[1]});
		const addressx7CBqCf = await TetherTokenW5ZpNYQ.transfer.call(addressu19K8pb, uintCuGWhZg, {from: accounts[0]});
		const uintvXK8dYm = await TetherTokenW5ZpNYQ.issue.call(uintIu1lkTN, {from: accounts[2]});
		const uintqC9zVSi = await TetherTokenW5ZpNYQ.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenW5ZpNYQ.deprecate.call(addressGqUSyEH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintVEC2mDr = BigInt("1279")
		const stringOXBMVGB = "Gpi0Q2zh0v3bE6D1iRfy7po3C2HuIvp78cD2RC"
		const stringt2knqlZ = "exvbfYDXC8IUU9MpZF7XVpKXdcyebNabGLk"
		const uintqQ7VDTd = BigInt("1152")
		const TetherTokensNjEKcQ = await TetherToken.new(uintVEC2mDr, stringOXBMVGB, stringt2knqlZ, uintqQ7VDTd, {from: accounts[2]});
		const uintTDseOKt = BigInt("1240")
		const uintp3mWCKd = BigInt("1561")
		const addressCBmnl5 = accounts[4]
		const addressX83H0O5 = "0x0000000000000000000000000000000000000001"
		const uintTAEwi3o = BigInt("251")
		const uintNU3ANRe = await TetherTokensNjEKcQ.redeem.call(uintTDseOKt, {from: accounts[2]});
		const addressqIKnf71 = await TetherTokensNjEKcQ.approve.call(addressCBmnl5, uintp3mWCKd, {from: accounts[0]});
		const uintcKzDt64 = await TetherTokensNjEKcQ.balanceOf.call(addressX83H0O5, {from: accounts[2]});
		const uintAHmrCuF = await TetherTokensNjEKcQ.redeem.call(uintTAEwi3o, {from: accounts[2]});

		assert.equal(uintcKzDt64, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintnley07h = BigInt("1859")
		const string25QQCn = "xHoR57kBpEXMEwrFFilJ1dLND1WRFCMGy9PonNPsn8X3tHOO6NMbucrxPHhe7JnjalQ9w3FYCsUQsuY9XgLJtRyQTI5"
		const stringRUd1nLY = "tY7EJdixm2xkaxfWzH3cGDaeQSzCp"
		const uintKbeu5C8 = BigInt("2025")
		const TetherTokenABbC6b7 = await TetherToken.new(uintnley07h, string25QQCn, stringRUd1nLY, uintKbeu5C8, {from: accounts[4]});
		const addresszi53SHw = accounts[3]
		const addresshj6AAgn = accounts[4]
		const uintSgjtho = BigInt("801")
		const addressq5uGA7 = accounts[1]
		const addressyXhYvF = accounts[1]
		const addressQ0GCaFZ = accounts[4]
		const uintd6Wa70X = await TetherTokenABbC6b7.allowance.call(addresshj6AAgn, addresszi53SHw, {from: "0x0000000000000000000000000000000000000001"});
		const uintqicQJY8 = await TetherTokenABbC6b7.totalSupply.call({from: accounts[1]});
		const addressI0oJtu = await TetherTokenABbC6b7.transfer.call(addressq5uGA7, uintSgjtho, {from: "0x0000000000000000000000000000000000000001"});
		const uintPfswN2k = await TetherTokenABbC6b7.allowance.call(addressQ0GCaFZ, addressyXhYvF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintd6Wa70X, BigInt("0"))
		assert.equal(uintqicQJY8, BigInt("1859"))
		await expect(TetherTokenABbC6b7.transfer.call(addressq5uGA7, uintSgjtho, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintEnTEpnn = BigInt("1859")
		const string25QQCn = "xHoR57kBpEXMEwrFFilJ1dLND1WRFCMGy9PonNPsn8X3tHOO6NMbucrxPHhe7JnjalQ9w3FYCsUQsuY9XgLJtRyQTI5"
		const stringRUd1nLY = "tY7EJdixm2xkaxfWzH3cGDaeQSzCp"
		const uintfOfKikZ = BigInt("2025")
		const TetherTokenABbC6b7 = await TetherToken.new(uintEnTEpnn, string25QQCn, stringRUd1nLY, uintfOfKikZ, {from: accounts[4]});
		const addressBd9IAdO = accounts[4]
		const addresshlm3ow2 = accounts[1]
		const addressvQVHhGV = accounts[3]
		const addressr1cCxG = accounts[4]
		const uintXAVio8c = BigInt("167")
		const uintMWFzHFd = BigInt("2017")
		const uintaqMMsP = BigInt("801")
		const addressNXORGgJ = accounts[1]
		const uintvmAQZo = await TetherTokenABbC6b7.allowance.call(addresshlm3ow2, addressBd9IAdO, {from: accounts[1]});
		const uintd6Wa70X = await TetherTokenABbC6b7.allowance.call(addressr1cCxG, addressvQVHhGV, {from: "0x0000000000000000000000000000000000000001"});
		const uintFMVG43 = await TetherTokenABbC6b7.setParams.call(uintMWFzHFd, uintXAVio8c, {from: accounts[0]});
		const addressI0oJtu = await TetherTokenABbC6b7.transfer.call(addressNXORGgJ, uintaqMMsP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintd6Wa70X, BigInt("0"))
		assert.equal(uintvmAQZo, BigInt("0"))
		await expect(TetherTokenABbC6b7.setParams.call(uintMWFzHFd, uintXAVio8c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintR9BquKo = BigInt("1279")
		const stringOXBMVGB = "Gpi0Q2zh0v3bE6D1iRfy7po3C2HuIvp78cD2RC"
		const stringt2knqlZ = "exvbfYDXC8IUU9MpZF7XVpKXdcyebNabGLk"
		const uintSIgcwI = BigInt("1152")
		const TetherTokensNjEKcQ = await TetherToken.new(uintR9BquKo, stringOXBMVGB, stringt2knqlZ, uintSIgcwI, {from: accounts[2]});
		const uintyMtimc1 = BigInt("1561")
		const addressltU0ftY = accounts[4]
		const addressw3e045 = accounts[0]
		const uintL8Y7tZe = BigInt("1888")
		const addressM3iXTST = accounts[1]
		const addresspOYuO6b = accounts[1]
		const uintPwJWhrV = BigInt("251")
		const addressqIKnf71 = await TetherTokensNjEKcQ.approve.call(addressltU0ftY, uintyMtimc1, {from: accounts[0]});
		const addressxZTLJ6K = await TetherTokensNjEKcQ.deprecate.call(addressw3e045, {from: accounts[2]});
		const addressnKNw657 = await TetherTokensNjEKcQ.transferFrom.call(addresspOYuO6b, addressM3iXTST, uintL8Y7tZe, {from: "0x0000000000000000000000000000000000000001"});
		const uintAHmrCuF = await TetherTokensNjEKcQ.redeem.call(uintPwJWhrV, {from: accounts[2]});

		await expect(TetherTokensNjEKcQ.transferFrom.call(addresspOYuO6b, addressM3iXTST, uintL8Y7tZe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintEcLEFxN = BigInt("1859")
		const string25QQCn = "xHoR57kBpEXMEwrFFilJ1dLND1WRFCMGy9PonNPsn8X3tHOO6NMbucrxPHhe7JnjalQ9w3FYCsUQsuY9XgLJtRyQTI5"
		const stringRUd1nLY = "tY7EJdixm2xkaxfWzH3cGDaeQSzCp"
		const uintDmaQzn = BigInt("2025")
		const TetherTokenABbC6b7 = await TetherToken.new(uintEcLEFxN, string25QQCn, stringRUd1nLY, uintDmaQzn, {from: accounts[4]});
		const addressp7mVtW = accounts[1]
		const uintn0ZAJQ = BigInt("25")
		const uintM2Go185 = BigInt("1409")
		const uintF0aAsKQ = await TetherTokenABbC6b7.balanceOf.call(addressp7mVtW, {from: accounts[0]});
		const uintQhpCWFQ = await TetherTokenABbC6b7.setParams.call(uintM2Go185, uintn0ZAJQ, {from: accounts[4]});

		assert.equal(uintF0aAsKQ, BigInt("0"))
		await expect(TetherTokenABbC6b7.setParams.call(uintM2Go185, uintn0ZAJQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintZ2TsqiS = BigInt("1170")
		const stringstDmEFY = "48mw2d2ARwclkFItdephi6LhD5SWna0xPODSYWPyLfVwfGIitR7l3776j74QDbjAqwoYdPzTTmIahTRE5xJXM9un2uHK"
		const stringRQ6EBdm = "Pfk38t7SC3THF1Ppw2qSZiCwls1fZmymGrTS7a1l"
		const uintlWkzVK9 = BigInt("248")
		const TetherTokenCbZoU5n = await TetherToken.new(uintZ2TsqiS, stringstDmEFY, stringRQ6EBdm, uintlWkzVK9, {from: accounts[2]});
		const addressm6LY5bn = accounts[0]
		const addressRkqD3hE = accounts[5]
		const uinto0Yp4Ko = BigInt("454")
		const uintvmDpYpi = BigInt("1082")
		const addressU81aO3 = accounts[2]
		const uintsClcIyL = await TetherTokenCbZoU5n.balanceOf.call(addressm6LY5bn, {from: accounts[2]});
		const uintBmBTmUI = await TetherTokenCbZoU5n.balanceOf.call(addressRkqD3hE, {from: accounts[0]});
		const uintey8ONB = await TetherTokenCbZoU5n.issue.call(uinto0Yp4Ko, {from: accounts[2]});
		const addressLg0qCVs = await TetherTokenCbZoU5n.transfer.call(addressU81aO3, uintvmDpYpi, {from: accounts[3]});

		assert.equal(uintBmBTmUI, BigInt("0"))
		assert.equal(uintsClcIyL, BigInt("0"))
		await expect(TetherTokenCbZoU5n.transfer.call(addressU81aO3, uintvmDpYpi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})