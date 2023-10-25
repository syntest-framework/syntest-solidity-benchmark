const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintRl2gY41 = BigInt("1375")
		const stringkayuSQr = "UFuElNcwuJr2u"
		const stringZoVEtIq = "40nJUopcbOLn4mUcOyfLPvJVXnEGhKhuTAlvInQ"
		const uintBRvdslP = BigInt("1657")
		const TetherTokenBHwR8GS = await TetherToken.new(uintRl2gY41, stringkayuSQr, stringZoVEtIq, uintBRvdslP, {from: accounts[2]});
		const uintyumi1PK = BigInt("400")
		const addressdhdz8rF = accounts[4]
		const uintPjv1ve = BigInt("204")
		const addressNeqIZkx = accounts[5]
		const addresstCwKdn = accounts[2]
		const addressJcaYM5Q = accounts[0]
		const addressVBFvp50 = await TetherTokenBHwR8GS.approve.call(addressdhdz8rF, uintyumi1PK, {from: accounts[4]});
//		const addressojkftz = await TetherTokenBHwR8GS.transferFrom.call(addresstCwKdn, addressNeqIZkx, uintPjv1ve, {from: accounts[4]});
//		const addressT5kSe4V = await TetherTokenBHwR8GS.deprecate.call(addressJcaYM5Q, {from: accounts[1]});

		await expect(TetherTokenBHwR8GS.transferFrom.call(addresstCwKdn, addressNeqIZkx, uintPjv1ve, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintALsSJuL = BigInt("2029")
		const stringdQxtfS6 = "PTvPdn3pB6m7ZI9nKKFF1USiItl"
		const stringzFHURQ5 = "WAM98NbewFjMZm8mYt5O7lNzsEyNKp8NS93zcrBhANtERnGxP9rBJSdde8WnmUShf9x7eMaOBvYERaEwdqo7fbDUB"
		const uintQkkiL0 = BigInt("1930")
		const TetherTokenBsS7SPF = await TetherToken.new(uintALsSJuL, stringdQxtfS6, stringzFHURQ5, uintQkkiL0, {from: accounts[2]});
		const uintLZhWLbt = BigInt("392")
		const uintMV99vW = BigInt("904")
		const addressImvm6Q4 = accounts[3]
		const uintszphO1m = BigInt("980")
		const uintNzK6ZXV = BigInt("944")
		const addresshya88xO = accounts[3]
//		const uint3MXSNn = await TetherTokenBsS7SPF.redeem.call(uintLZhWLbt, {from: accounts[0]});
//		const addressaZllo2u = await TetherTokenBsS7SPF.approve.call(addressImvm6Q4, uintMV99vW, {from: accounts[2]});
//		const uintrH5N2xx = await TetherTokenBsS7SPF.redeem.call(uintszphO1m, {from: accounts[1]});
//		const uintpnw1NB6 = await TetherTokenBsS7SPF.issue.call(uintNzK6ZXV, {from: accounts[0]});
//		const addressXUKjVYo = await TetherTokenBsS7SPF.deprecate.call(addresshya88xO, {from: accounts[2]});

		await expect(TetherTokenBsS7SPF.redeem.call(uintLZhWLbt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintSZTS9d2 = BigInt("815")
		const stringwFyNKuY = "6mPpGJh4G4cMnHWmYhqdX6nngTaC4CN1jXRSUukBPAKvqSoNiozYbJKOLwLU50WvoKeTXLPMN2mxeJ7IQY54kuhzM6XIt"
		const stringVr07xLD = "KxCdaRrQQ4GLuNw7Rp2Dh5HW3"
		const uintxmrw0Cu = BigInt("815")
		const TetherTokenqgv80fk = await TetherToken.new(uintSZTS9d2, stringwFyNKuY, stringVr07xLD, uintxmrw0Cu, {from: "0x0000000000000000000000000000000000000001"});
		const addressIWPqOKF = "0x0000000000000000000000000000000000000001"
		const addressHLniedX = accounts[0]
		const uintOwgVMMx = BigInt("1006")
		const uintyeNFSWu = BigInt("760")
		const addressMz4bhNw = await TetherTokenqgv80fk.deprecate.call(addressIWPqOKF, {from: accounts[3]});
		const uintYmrm1V = await TetherTokenqgv80fk.balanceOf.call(addressHLniedX, {from: accounts[3]});
		const uintdc52Rdh = await TetherTokenqgv80fk.issue.call(uintOwgVMMx, {from: accounts[0]});
		const uinthtCoN5x = await TetherTokenqgv80fk.redeem.call(uintyeNFSWu, {from: accounts[2]});
	});

	it('test for TetherToken', async () => {
		const uintcAYgRy = BigInt("1948")
		const stringJJdiE5Q = "whQzlgOaWUcEwGr2RaayldHmqUpPkW"
		const stringHSN4Ysm = "23GKetltpEEyZuoSDfIti2J7l46BV7COi2DpR6FzqkXYfDgdVWKWBgKdxbBKe7HdXph7Z9xl47g10dAMx7V2sRyVjQKV9"
		const uintO2QlUvK = BigInt("1104")
		const TetherTokenfkbJ6L7 = await TetherToken.new(uintcAYgRy, stringJJdiE5Q, stringHSN4Ysm, uintO2QlUvK, {from: accounts[1]});
		const uintu8BmjjU = BigInt("225")
		const uintMsdCugA = BigInt("158")
		const addressf7mSvWc = accounts[5]
		const addresswrM7v2z = accounts[1]
		const addresseFB5Nl8 = accounts[1]
//		const uintQ0gMpJ = await TetherTokenfkbJ6L7.issue.call(uintu8BmjjU, {from: accounts[3]});
//		const addressHrzm2xf = await TetherTokenfkbJ6L7.approve.call(addressf7mSvWc, uintMsdCugA, {from: accounts[1]});
//		const addressVfnU02a = await TetherTokenfkbJ6L7.deprecate.call(addresswrM7v2z, {from: accounts[5]});
//		const uintNLXule6 = await TetherTokenfkbJ6L7.balanceOf.call(addresseFB5Nl8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenfkbJ6L7.issue.call(uintu8BmjjU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintUa4kKSt = BigInt("169")
		const stringo9sBKso = "RqTvrk3mPGVgkucDe9nxjIcXkzrryNQlXlPMGsltIvQA87HJmGH19"
		const stringSerO2VQ = "Vm9W9CD7V8DfFhDKexXBEVJ3mTvoV8FeUEtjYy"
		const uintOl0Z6Sq = BigInt("1170")
		const TetherTokenppVqlwW = await TetherToken.new(uintUa4kKSt, stringo9sBKso, stringSerO2VQ, uintOl0Z6Sq, {from: accounts[2]});
		const uintK0s6bQU = BigInt("694")
		const addressqlt1sll = accounts[2]
		const uintc3BzDun = BigInt("243")
		const uintsVy85wr = BigInt("932")
		const uintTrEp8xA = BigInt("1862")
		const uintWMrFDdw = BigInt("1982")
		const addresse8nNiRd = await TetherTokenppVqlwW.approve.call(addressqlt1sll, uintK0s6bQU, {from: accounts[0]});
//		const uintywl0EZT = await TetherTokenppVqlwW.setParams.call(uintsVy85wr, uintc3BzDun, {from: accounts[0]});
//		const uintyNhDDB = await TetherTokenppVqlwW.issue.call(uintTrEp8xA, {from: accounts[4]});
//		const uintKcL2eyL = await TetherTokenppVqlwW.redeem.call(uintWMrFDdw, {from: accounts[3]});

		await expect(TetherTokenppVqlwW.setParams.call(uintsVy85wr, uintc3BzDun, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLII1SQ4 = BigInt("589")
		const stringdY3G0KP = "qWkPN5FUaXiIzAvELQonmZC3Ej9whENf5tqvLyyYiD1j2e1nbcumuSeQYhrce"
		const stringzAe1s7 = "Hxw2"
		const uintk386WSS = BigInt("1504")
		const TetherTokenPQf7TW = await TetherToken.new(uintLII1SQ4, stringdY3G0KP, stringzAe1s7, uintk386WSS, {from: accounts[5]});
		const addressievXWSM = accounts[0]
		const uintWOR50pi = BigInt("1353")
		const addressKDSnbNG = accounts[1]
		const uintdPbjjmN = BigInt("704")
		const addressiOYJelG = "0x0000000000000000000000000000000000000001"
//		const addressPAsKxg = await TetherTokenPQf7TW.deprecate.call(addressievXWSM, {from: accounts[4]});
//		const addressQwfrU1G = await TetherTokenPQf7TW.approve.call(addressKDSnbNG, uintWOR50pi, {from: accounts[3]});
//		const addressNfq2Qan = await TetherTokenPQf7TW.approve.call(addressiOYJelG, uintdPbjjmN, {from: accounts[4]});

		await expect(TetherTokenPQf7TW.deprecate.call(addressievXWSM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjVIEDFX = BigInt("1399")
		const stringUoWGOvo = "t1T6b2wVlLJJuOA"
		const stringKcqaOnp = "7HYzvloh2"
		const uintIPn948x = BigInt("466")
		const TetherTokenwe2EIxU = await TetherToken.new(uintjVIEDFX, stringUoWGOvo, stringKcqaOnp, uintIPn948x, {from: accounts[2]});
		const uintPfVsCEd = BigInt("301")
		const uintsyjb98f = BigInt("1836")
		const uintsQiYKSZ = BigInt("1933")
		const addresss1nvobG = accounts[0]
		const uints5ZGHVt = BigInt("1177")
		const uintg15y9FU = BigInt("1701")
		const addressikBBalu = accounts[1]
		const addressS0yP1vQ = "0x0000000000000000000000000000000000000001"
		const uintv6bNXnm = await TetherTokenwe2EIxU.issue.call(uintPfVsCEd, {from: accounts[2]});
		const uintJFgXO7A = await TetherTokenwe2EIxU.totalSupply.call({from: accounts[3]});
//		const uint24Us8y = await TetherTokenwe2EIxU.redeem.call(uintsyjb98f, {from: accounts[1]});
//		const addressiLZf8vN = await TetherTokenwe2EIxU.approve.call(addresss1nvobG, uintsQiYKSZ, {from: accounts[0]});
//		const uintMOvCqmA = await TetherTokenwe2EIxU.issue.call(uints5ZGHVt, {from: accounts[4]});
//		const addressPbis8V = await TetherTokenwe2EIxU.transferFrom.call(addressS0yP1vQ, addressikBBalu, uintg15y9FU, {from: accounts[0]});

		assert.equal(uintJFgXO7A, BigInt("1399"))
		await expect(TetherTokenwe2EIxU.redeem.call(uintsyjb98f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintdRcKg0I = BigInt("1375")
		const stringkayuSQr = "UFuElNcwuJr2u"
		const stringZoVEtIq = "40nJUopcbOLn4mUcOyfLPvJVXnEGhKhuTAlvInQ"
		const uintpcUlDE = BigInt("1657")
		const TetherTokenBHwR8GS = await TetherToken.new(uintdRcKg0I, stringkayuSQr, stringZoVEtIq, uintpcUlDE, {from: accounts[2]});
		const addressPUVjI9P = accounts[5]
		const addressSfvIrP = accounts[1]
		const uintngSoTRO = BigInt("204")
		const addressMrFYOF0 = accounts[5]
		const addressVelPF4B = accounts[2]
		const addressLzU8iuI = accounts[0]
		const uintsC7L2I6 = await TetherTokenBHwR8GS.allowance.call(addressSfvIrP, addressPUVjI9P, {from: accounts[2]});
//		const addressojkftz = await TetherTokenBHwR8GS.transferFrom.call(addressVelPF4B, addressMrFYOF0, uintngSoTRO, {from: accounts[4]});
//		const addressT5kSe4V = await TetherTokenBHwR8GS.deprecate.call(addressLzU8iuI, {from: accounts[1]});

		assert.equal(uintsC7L2I6, BigInt("0"))
		await expect(TetherTokenBHwR8GS.transferFrom.call(addressVelPF4B, addressMrFYOF0, uintngSoTRO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintr2A8ReQ = BigInt("620")
		const stringP5A8wb = "SjX9TXcPTqZgneA4L34L8jw0JqvyggDzjncWDdqhPLbbJKb8g8n0E5bhlWhjQZXjWrwZB1OyMsR21YVB"
		const stringpdu8Qka = "dzriFRx8zDeMflobHLzL77TrqpBJuKzWwHQSHftnrwX7AaMC"
		const uintJ49biVy = BigInt("73")
		const TetherTokenSVSzywb = await TetherToken.new(uintr2A8ReQ, stringP5A8wb, stringpdu8Qka, uintJ49biVy, {from: accounts[3]});
		const uintvB5VdCB = BigInt("1841")
		const uintD3I351U = BigInt("2039")
		const uintRgYWdHI = BigInt("338")
//		const uintw81AGa = await TetherTokenSVSzywb.setParams.call(uintD3I351U, uintvB5VdCB, {from: accounts[3]});
//		const uintLCo6cue = await TetherTokenSVSzywb.totalSupply.call({from: accounts[4]});
//		const uintLIGLr5p = await TetherTokenSVSzywb.issue.call(uintRgYWdHI, {from: accounts[2]});

		await expect(TetherTokenSVSzywb.setParams.call(uintD3I351U, uintvB5VdCB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintUuX2cX4 = BigInt("589")
		const stringdY3G0KP = "qWkPN5FUaXiIzAvELQonmZC3Ej9whENf5tqvLyyYiD1j2e1nbcumuSeQYhrce"
		const stringzAe1s7 = "Hxw2"
		const uintzuneywl = BigInt("1504")
		const TetherTokenPQf7TW = await TetherToken.new(uintUuX2cX4, stringdY3G0KP, stringzAe1s7, uintzuneywl, {from: accounts[5]});
		const addressaAE0tFv = accounts[5]
		const uintA8AUffa = BigInt("710")
		const addressOITj7XG = "0x0000000000000000000000000000000000000001"
		const uintui0QRI4 = await TetherTokenPQf7TW.balanceOf.call(addressaAE0tFv, {from: accounts[1]});
		const addressNfq2Qan = await TetherTokenPQf7TW.approve.call(addressOITj7XG, uintA8AUffa, {from: accounts[4]});

		assert.equal(uintui0QRI4, BigInt("589"))
	});

	it('test for TetherToken', async () => {
		const uintrioCFC = BigInt("921")
		const stringC4OXCzz = "3S4uP9jMxwzG68SnhuLAaB8mOrGFW73SvNzUoYOonLZDc2M2UIB4AWVdu"
		const stringjUK3z7c = "YshuZXjqnW19aUeHM"
		const uintnB9FA5e = BigInt("1550")
		const TetherTokenrRKOGx1 = await TetherToken.new(uintrioCFC, stringC4OXCzz, stringjUK3z7c, uintnB9FA5e, {from: accounts[1]});
		const uintFIkfLm = BigInt("1533")
		const addressOmzK9lJ = accounts[1]
		const uintAt6bkyE = BigInt("1375")
		const uintiihkxB3 = BigInt("40")
		const addressJhUxgtv = accounts[5]
		const addressKCxZryL = "0x0000000000000000000000000000000000000001"
		const uint6bB5Zk = BigInt("1864")
		const addressHVyNj6X = accounts[3]
		const uintO5aGm3P = BigInt("117")
		const addresscDJ9Iv2 = await TetherTokenrRKOGx1.approve.call(addressOmzK9lJ, uintFIkfLm, {from: accounts[1]});
//		const uintjBxnx7O = await TetherTokenrRKOGx1.redeem.call(uintAt6bkyE, {from: accounts[1]});
//		const addressWDzHJyb = await TetherTokenrRKOGx1.transferFrom.call(addressKCxZryL, addressJhUxgtv, uintiihkxB3, {from: "0x0000000000000000000000000000000000000001"});
//		const uintlNTCiV7 = await TetherTokenrRKOGx1.redeem.call(uint6bB5Zk, {from: accounts[4]});
//		const uintiQPgxw6 = await TetherTokenrRKOGx1.balanceOf.call(addressHVyNj6X, {from: accounts[5]});
//		const uintac2u6cP = await TetherTokenrRKOGx1.issue.call(uintO5aGm3P, {from: accounts[3]});

		await expect(TetherTokenrRKOGx1.redeem.call(uintAt6bkyE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintv1fW6HB = BigInt("1375")
		const stringkayuSQr = "UFuElNcwuJr2u"
		const stringZoVEtIq = "40nJUopcbOLn4mUcOyfLPvJVXnEGhKhuTAlvInQ"
		const uintd5D0rTS = BigInt("1657")
		const TetherTokenBHwR8GS = await TetherToken.new(uintv1fW6HB, stringkayuSQr, stringZoVEtIq, uintd5D0rTS, {from: accounts[2]});
		const addressYgvQR8d = accounts[5]
		const addressG1Owkl4 = accounts[1]
		const uintz5Gce9Y = BigInt("976")
		const addressD7KvWuU = accounts[1]
		const uintebEVmIP = BigInt("483")
		const uintnC47Cho = BigInt("204")
		const addressOd0J6mV = accounts[5]
		const address2bX2jY = accounts[2]
		const addressReBiZSx = accounts[0]
		const uintsC7L2I6 = await TetherTokenBHwR8GS.allowance.call(addressG1Owkl4, addressYgvQR8d, {from: accounts[2]});
//		const addressdm6z1te = await TetherTokenBHwR8GS.transfer.call(addressD7KvWuU, uintz5Gce9Y, {from: accounts[4]});
//		const uintOVylx6M = await TetherTokenBHwR8GS.issue.call(uintebEVmIP, {from: accounts[3]});
//		const addressojkftz = await TetherTokenBHwR8GS.transferFrom.call(address2bX2jY, addressOd0J6mV, uintnC47Cho, {from: accounts[4]});
//		const addressT5kSe4V = await TetherTokenBHwR8GS.deprecate.call(addressReBiZSx, {from: accounts[1]});

		assert.equal(uintsC7L2I6, BigInt("0"))
		await expect(TetherTokenBHwR8GS.transfer.call(addressD7KvWuU, uintz5Gce9Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinteBKZYH2 = BigInt("1365")
		const stringDVDSclK = "dDroUZM9Yu9yn1JtgdTOnOxBffjAb4boqCN3E5jnzBQS7mot5POnRKqjuXyfK4GyofhlWyUyXVjijeMtKoBu"
		const stringELctfJ = "hHWOJSApXUL6wNWy9DKQB8NOR9xsz2CAY1q5"
		const uintjzZHw7N = BigInt("1005")
		const TetherTokennqmGp5y = await TetherToken.new(uinteBKZYH2, stringDVDSclK, stringELctfJ, uintjzZHw7N, {from: accounts[0]});
		const addresstyQlrpy = accounts[2]
		const addressQ4tqDiq = accounts[2]
		const addressQ8iq88 = accounts[2]
		const uintO8xKsGT = BigInt("1589")
		const uintF987h53 = BigInt("1185")
		const addresstUsSv6S = accounts[4]
		const uintm1u62kW = await TetherTokennqmGp5y.allowance.call(addressQ4tqDiq, addresstyQlrpy, {from: accounts[2]});
		const addressHAZxWZd = await TetherTokennqmGp5y.deprecate.call(addressQ8iq88, {from: accounts[0]});
		const uintEXuGcOM = await TetherTokennqmGp5y.totalSupply.call({from: accounts[1]});
//		const uintCnjG2hn = await TetherTokennqmGp5y.redeem.call(uintO8xKsGT, {from: accounts[1]});
//		const addressHLDTlpO = await TetherTokennqmGp5y.approve.call(addresstUsSv6S, uintF987h53, {from: accounts[1]});

		assert.equal(uintEXuGcOM, BigInt("1365"))
		assert.equal(uintm1u62kW, BigInt("0"))
		await expect(TetherTokennqmGp5y.redeem.call(uintO8xKsGT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintSH6TaXU = BigInt("921")
		const stringC4OXCzz = "3S4uP9jMxwzG68SnhuLAaB8mOrGFW73SvNzUoYOonLZDc2M2UIB4AWVdu"
		const stringjUK3z7c = "YshuZXjqnW19aUeHM"
		const uintVYz6id1 = BigInt("1550")
		const TetherTokenrRKOGx1 = await TetherToken.new(uintSH6TaXU, stringC4OXCzz, stringjUK3z7c, uintVYz6id1, {from: accounts[1]});
		const uintu5NfEQO = BigInt("856")
		const uintjBxnx7O = await TetherTokenrRKOGx1.redeem.call(uintu5NfEQO, {from: accounts[1]});
	});
})