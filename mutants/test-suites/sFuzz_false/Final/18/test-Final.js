const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringCyK9XJu = "3CJIdL7n2er4CreNMd7PuRpRmHn5DhRG9057k7yHDGNubc68CGybVdTxZToFboOJyOhd2PRzACfvFdPuHYmDeS0qgMgansM"
		const stringE42EKsp = "EvvSsnX5a48fMfbi9wZ8tc8KNEvGPFONcgCFcomgf8FaWLJ"
		const uintcDePRW = BigInt("62")
		const FinalqvEp6ZM = await Final.new(stringCyK9XJu, stringE42EKsp, uintcDePRW, {from: accounts[3]});
		const uintEfkmqk6 = BigInt("1748")
		const addressEud3oyy = accounts[2]
		const uintbpGDDoU = BigInt("1635")
		const addressrAHlbeV = accounts[4]
		const uintZ7Cxl6N = BigInt("149")
		const addressDzttaZi = accounts[3]
		const addressabEwU0K = accounts[0]
		const uintljofFaN = BigInt("495")
		const addressYjhVXHz = accounts[2]
		const uintquCzsLG = BigInt("1954")
		const addressCuRIRIc = accounts[4]
		const boolOOidxcB = await FinalqvEp6ZM.approveAndCall.call(addressEud3oyy, uintEfkmqk6, {from: accounts[3]});
		const boolEsLhyXC = await FinalqvEp6ZM.approve.call(addressrAHlbeV, uintbpGDDoU, {from: accounts[3]});
//		const boolJmk7VnH = await FinalqvEp6ZM.transferFrom.call(addressabEwU0K, addressDzttaZi, uintZ7Cxl6N, {from: accounts[1]});
//		const boolsl779qv = await FinalqvEp6ZM.approveAndCall.call(addressYjhVXHz, uintljofFaN, {from: accounts[4]});
//		const uintLyKqXlu = await FinalqvEp6ZM.totalSupply.call({from: accounts[1]});
//		const boolFv9ZccF = await FinalqvEp6ZM.transfer.call(addressCuRIRIc, uintquCzsLG, {from: accounts[5]});

		assert.equal(boolEsLhyXC, true)
		assert.equal(boolOOidxcB, true)
		await expect(FinalqvEp6ZM.transferFrom.call(addressabEwU0K, addressDzttaZi, uintZ7Cxl6N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSRbLBIN = "tNN5UrtMU7U52zRvGSQSzpVxGoocKRpQTwydlevfJkKDMgqKEdGf508c2q25pHXHbaJrboUBTMsO45bCUzsATkWdo17hxaPkaa"
		const stringvlrJuYh = "ToHWsBz3gazfaURQcWTOpZSPJWJE8Xkr2IbSwAct83MX1HP4EeyNamta5m0bEcPuoXRPqlw0FPmBqScMEJz9laPhaPg"
		const uintDz42tVw = BigInt("376")
		const FinalApCHNwd = await Final.new(stringSRbLBIN, stringvlrJuYh, uintDz42tVw, {from: accounts[4]});
		const uintpGyI9bf = BigInt("1510")
		const addressCD4GwT6 = accounts[2]
		const stringFyYd1f5 = await FinalApCHNwd.symbol.call({from: accounts[5]});
		const uintbfK43jc = await FinalApCHNwd.totalSupply.call({from: accounts[0]});
//		const boolpWoWoP = await FinalApCHNwd.decreaseAllowance.call(addressCD4GwT6, uintpGyI9bf, {from: accounts[1]});

		assert.equal(stringFyYd1f5, "ToHWsBz3gazfaURQcWTOpZSPJWJE8Xkr2IbSwAct83MX1HP4EeyNamta5m0bEcPuoXRPqlw0FPmBqScMEJz9laPhaPg")
		assert.equal(uintbfK43jc, BigInt("376000000000000000000"))
		await expect(FinalApCHNwd.decreaseAllowance.call(addressCD4GwT6, uintpGyI9bf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringknUE4tx = "9f4rgnfCm1J5uEUkc1G1RxsIbYLK0tig8ITLk7zkMCjlE"
		const stringkB6LMV = "85dt3ctQ8pvb9xYqMw6kUDzYB1roBbwi"
		const uintFdmO18 = BigInt("1168")
		const FinalhIY84N = await Final.new(stringknUE4tx, stringkB6LMV, uintFdmO18, {from: accounts[1]});
		const uintiFOz8PG = BigInt("1267")
		const addresskOb5b3V = accounts[3]
		const uintZcpLVHj = BigInt("1774")
		const addressWtcjnC9 = accounts[0]
		const uintLfQnVDl = BigInt("291")
		const addresstKOia6x = "0x0000000000000000000000000000000000000001"
		const addressNSrftZp = accounts[0]
		const uintQI6XSUw = BigInt("1333")
		const addressb0xwJVa = accounts[4]
		const boolJkM9VV4 = await FinalhIY84N.approve.call(addresskOb5b3V, uintiFOz8PG, {from: accounts[3]});
//		const boolHYK13Ge = await FinalhIY84N.transfer.call(addressWtcjnC9, uintZcpLVHj, {from: accounts[2]});
//		const boolOToHyzj = await FinalhIY84N.decreaseAllowance.call(addresstKOia6x, uintLfQnVDl, {from: accounts[0]});
//		const uintE0P2Zzu = await FinalhIY84N.totalSupply.call({from: accounts[3]});
//		const boolpkKdxue = await FinalhIY84N.transferownership.call(addressNSrftZp, {from: accounts[4]});
//		const boolvCCihb4 = await FinalhIY84N.decreaseAllowance.call(addressb0xwJVa, uintQI6XSUw, {from: accounts[4]});

		assert.equal(boolJkM9VV4, true)
		await expect(FinalhIY84N.transfer.call(addressWtcjnC9, uintZcpLVHj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringguVvEFh = "Zb3vn4mPRwenuf1XLwS3oQIfVPAf5mCQbRkLdSf"
		const stringeD6BaWL = "w3gyK5wu016pDFOX0pQNANxsV4YPGld1ehdQbWyK50LXF1RuAkF"
		const uintP29iFcM = BigInt("62")
		const FinalwIlshb4 = await Final.new(stringguVvEFh, stringeD6BaWL, uintP29iFcM, {from: accounts[3]});
		const addresspUgsfIV = accounts[5]
		const addressF4UzHH2 = accounts[1]
		const uintXvjnl7I = BigInt("184")
		const addressgE1TPjZ = accounts[3]
		const uint6LmDwO = BigInt("1312")
		const addressTpTHQiA = accounts[1]
		const uintHU5Xu0X = await FinalwIlshb4.allowance.call(addressF4UzHH2, addresspUgsfIV, {from: accounts[4]});
//		const boolBKZEkA = await FinalwIlshb4.transfer.call(addressgE1TPjZ, uintXvjnl7I, {from: accounts[0]});
//		const stringeDaQXAI = await FinalwIlshb4.symbol.call({from: accounts[5]});
//		const boolKmBuM2q = await FinalwIlshb4.approveAndCall.call(addressTpTHQiA, uint6LmDwO, {from: accounts[3]});

		assert.equal(uintHU5Xu0X, BigInt("0"))
		await expect(FinalwIlshb4.transfer.call(addressgE1TPjZ, uintXvjnl7I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringX8Oz30 = "DbsOI6rcl9EJ2IBEqkfD57znB"
		const stringyU1bdrn = "1Y8sL"
		const uintVhjDErf = BigInt("150")
		const FinalK13jVum = await Final.new(stringX8Oz30, stringyU1bdrn, uintVhjDErf, {from: "0x0000000000000000000000000000000000000001"});
		const addressfNSXOO = accounts[0]
		const addressJyid4kl = accounts[5]
		const uintrzQgsDo = BigInt("1089")
		const addressU57f8vM = "0x0000000000000000000000000000000000000001"
		const stringZBJs4Kg = await FinalK13jVum.symbol.call({from: accounts[3]});
		const uintvPr59S = await FinalK13jVum.allowance.call(addressJyid4kl, addressfNSXOO, {from: accounts[4]});
		const stringPcZkKnG = await FinalK13jVum.name.call({from: accounts[2]});
		const stringnLeoTo9 = await FinalK13jVum.name.call({from: accounts[2]});
		const booliTmJZjK = await FinalK13jVum.transfer.call(addressU57f8vM, uintrzQgsDo, {from: accounts[1]});
	});

	it('test for Final', async () => {
		const stringCyK9XJu = "3CJIdL7n2er4CreNMd7PuRpRmHn5DhRG9057k7yHDGNubc68CGybVdTxZToFboOJyOhd2PRzACfvFdPuHYmDeS0qgMgansM"
		const stringE42EKsp = "EvvSsnX5a48fMfbi9wZ8tc8KNEvGPFONcgCFcomgf8FaWLJ"
		const uintHSIIie = BigInt("62")
		const FinalqvEp6ZM = await Final.new(stringCyK9XJu, stringE42EKsp, uintHSIIie, {from: accounts[3]});
		const addressHqPht0 = accounts[4]
		const uintwz8ktO2 = BigInt("1748")
		const addressmwTlbOE = accounts[2]
		const uintnoDid1I = BigInt("1635")
		const address4YLIND = accounts[4]
		const uintfJlsUy8 = BigInt("60")
		const addressXKhzZDa = "0x0000000000000000000000000000000000000001"
		const uintJt47K9z = BigInt("1279")
		const addressnhIaisg = accounts[1]
		const uintF6HYG0x = BigInt("424")
		const addressBuDSc3p = "0x0000000000000000000000000000000000000001"
		const uintMTSeEQO = BigInt("149")
		const addressNHQqqYy = accounts[3]
		const addressSwVlJh6 = accounts[0]
		const uintUQeDapu = BigInt("495")
		const addressPhiFFhj = accounts[2]
//		const booluakb03T = await FinalqvEp6ZM.transferownership.call(addressHqPht0, {from: accounts[4]});
//		const boolOOidxcB = await FinalqvEp6ZM.approveAndCall.call(addressmwTlbOE, uintwz8ktO2, {from: accounts[3]});
//		const boolEsLhyXC = await FinalqvEp6ZM.approve.call(address4YLIND, uintnoDid1I, {from: accounts[3]});
//		const boolFv239gg = await FinalqvEp6ZM.transfer.call(addressXKhzZDa, uintfJlsUy8, {from: accounts[0]});
//		const boolljqQ46J = await FinalqvEp6ZM.approve.call(addressnhIaisg, uintJt47K9z, {from: accounts[3]});
//		const boolkFGHCvL = await FinalqvEp6ZM.transfer.call(addressBuDSc3p, uintF6HYG0x, {from: accounts[2]});
//		const boolJmk7VnH = await FinalqvEp6ZM.transferFrom.call(addressSwVlJh6, addressNHQqqYy, uintMTSeEQO, {from: accounts[1]});
//		const boolsl779qv = await FinalqvEp6ZM.approveAndCall.call(addressPhiFFhj, uintUQeDapu, {from: accounts[4]});
//		const uintLyKqXlu = await FinalqvEp6ZM.totalSupply.call({from: accounts[1]});

		await expect(FinalqvEp6ZM.transferownership.call(addressHqPht0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCyK9XJu = "3CJIdL7n2er4CreNMd7PuRpRmHn5DhRG9057k7yHDGNubc68CGybVdTxZToFboOJyOhd2PRzACfvFdPuHYmDeS0qgMgansM"
		const stringE42EKsp = "EvvSsnX5a48fMfbi9wZ8tc8KNEvGPFONcgCFcomgf8FaWLJ"
		const uintgZG9Tf1 = BigInt("62")
		const FinalqvEp6ZM = await Final.new(stringCyK9XJu, stringE42EKsp, uintgZG9Tf1, {from: accounts[3]});
		const uintAspx2Uf = BigInt("451")
		const addressP5FpyTg = accounts[1]
		const uintWU2dLAC = BigInt("0")
		const addresspBct1hR = "0x0000000000000000000000000000000000000001"
		const boolUmRLkVs = await FinalqvEp6ZM.approve.call(addressP5FpyTg, uintAspx2Uf, {from: accounts[1]});
		const uintaJCPbu7 = await FinalqvEp6ZM.totalSupply.call({from: accounts[1]});
		const boolFv239gg = await FinalqvEp6ZM.transfer.call(addresspBct1hR, uintWU2dLAC, {from: accounts[0]});

		assert.equal(boolFv239gg, true)
		assert.equal(boolUmRLkVs, true)
		assert.equal(uintaJCPbu7, BigInt("62000000000000000000"))
	});
})