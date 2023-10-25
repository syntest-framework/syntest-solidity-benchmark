const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringHUNdTE4 = "Xx"
		const stringkvfyijl = "RYQqXV4EBw5vf9MiS5kUxGIaBlPR6akC6pWwHbkl"
		const uintgK5zSYs = BigInt("121")
		const WeedburnVf4foIJ = await Weedburn.new(stringHUNdTE4, stringkvfyijl, uintgK5zSYs, {from: accounts[4]});
		const addressHUze89t = accounts[0]
		const uint256aXtT6D = await WeedburnVf4foIJ.balanceOf.call(addressHUze89t, {from: accounts[3]});
		await WeedburnVf4foIJ.enableLimitMode.call({from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnD9gfxk = await Weedburn.new({from: accounts[0]});
		const uint2e1Gg5 = BigInt("2039")
		const addresspc36Tpb = accounts[3]
		const addresseoWyNAA = accounts[5]
		const addressmN8EqwP = accounts[2]
		await WeedburnD9gfxk.disableLimitMode.call({from: accounts[4]});
		const addressIL4RrdM = await WeedburnD9gfxk.burnFrom.call(addresspc36Tpb, uint2e1Gg5, {from: accounts[5]});
		const uint256HnX7gZs = await WeedburnD9gfxk.totalSupply.call({from: accounts[1]});
		const uint256sjoO8S6 = await WeedburnD9gfxk.allowance.call(addressmN8EqwP, addresseoWyNAA, {from: accounts[2]});

		await expect(WeedburnD9gfxk.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQ8R18tY = await Weedburn.new({from: accounts[4]});
		const addressKbVtV1G = accounts[1]
		const uintBCxpAwY = BigInt("2004")
		const addressydXC33f = accounts[3]
		const uint256sDFtVpp = await WeedburnQ8R18tY.balanceOf.call(addressKbVtV1G, {from: accounts[4]});
		const stringgyjY5S = await WeedburnQ8R18tY.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolDlBSww = await WeedburnQ8R18tY.decreaseAllowance.call(addressydXC33f, uintBCxpAwY, {from: accounts[4]});
		await WeedburnQ8R18tY.enableLimitMode.call({from: accounts[3]});

		assert.equal(stringgyjY5S, "t.me/burnweed1")
		assert.equal(uint256sDFtVpp, BigInt("0"))
		await expect(WeedburnQ8R18tY.decreaseAllowance.call(addressydXC33f, uintBCxpAwY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwxDqc5P = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQvGLLZW = BigInt("594")
		const addressVuPJdwl = accounts[5]
		const uintIX0HZFH = BigInt("1730")
		const uintiYjByu = BigInt("215")
		const addresstjhRNNb = accounts[3]
		const uintH6dFCNF = BigInt("1769")
		const addressoBiOBBG = accounts[2]
		const addressbPZFuCw = await WeedburnwxDqc5P.burnFrom.call(addressVuPJdwl, uintQvGLLZW, {from: accounts[5]});
		const uint256GzUGaZ = await WeedburnwxDqc5P.burn.call(uintIX0HZFH, {from: accounts[4]});
		const boolgGFrQ8J = await WeedburnwxDqc5P.increaseAllowance.call(addresstjhRNNb, uintiYjByu, {from: accounts[3]});
		const uint8D0tkhOz = await WeedburnwxDqc5P.decimals.call({from: accounts[3]});
		const stringR6v1wMr = await WeedburnwxDqc5P.symbol.call({from: accounts[3]});
		const boolx2DSwa = await WeedburnwxDqc5P.transfer.call(addressoBiOBBG, uintH6dFCNF, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uintWgSgXW0 = BigInt("523")
		const addressAVah5w0 = "0x0000000000000000000000000000000000000001"
		const addressKgzkpSL = accounts[4]
		const uintXxQSJOf = BigInt("1507")
		const addressahvEAu = accounts[5]
		const uintf2Nh7Ft = BigInt("127")
		const addressTDuAMQc = accounts[2]
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		const uint8lOETfcF = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addressKgzkpSL, addressAVah5w0, uintWgSgXW0, {from: accounts[0]});
		const stringlCt2oq4 = await WeedburnwcnTEC.symbol.call({from: accounts[0]});
		const addressm2GGTNl = await WeedburnwcnTEC.burnFrom.call(addressahvEAu, uintXxQSJOf, {from: accounts[2]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addressTDuAMQc, uintf2Nh7Ft, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTaz1Fpq = await Weedburn.new({from: accounts[4]});
		const uintOWE1Ppl = BigInt("1097")
		const addressHnHl6KS = accounts[3]
		await WeedburnTaz1Fpq.enableLimitMode.call({from: accounts[3]});
		const boolF4dodxi = await WeedburnTaz1Fpq.decreaseAllowance.call(addressHnHl6KS, uintOWE1Ppl, {from: accounts[2]});

		await expect(WeedburnTaz1Fpq.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uintH1fOd2 = BigInt("245")
		const uintSXx5zK6 = BigInt("523")
		const addressG86GIH3 = "0x0000000000000000000000000000000000000001"
		const addressUu5wYmc = accounts[5]
		const uintW9LGxU = BigInt("1507")
		const addressaHTPbyB = accounts[5]
		const uintggkpD4a = BigInt("127")
		const addresso2ky6R = accounts[2]
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		const uint8lOETfcF = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		const uint256eVYWCRP = await WeedburnwcnTEC.burn.call(uintH1fOd2, {from: accounts[0]});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addressUu5wYmc, addressG86GIH3, uintSXx5zK6, {from: accounts[0]});
		const stringU8IKUmC = await WeedburnwcnTEC.name.call({from: accounts[4]});
		const stringlCt2oq4 = await WeedburnwcnTEC.symbol.call({from: accounts[0]});
		const addressm2GGTNl = await WeedburnwcnTEC.burnFrom.call(addressaHTPbyB, uintW9LGxU, {from: accounts[2]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addresso2ky6R, uintggkpD4a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uintcY2KA3 = BigInt("522")
		const addressSHxZXnf = accounts[0]
		const uintjV26Z4F = BigInt("523")
		const addressrLw7Uzh = "0x0000000000000000000000000000000000000001"
		const addressSD4u7j8 = accounts[4]
		const uint5pUiaC = BigInt("228")
		const addressejGS0nW = accounts[4]
		const uintB0GGiCm = BigInt("127")
		const addressP0z0sCM = accounts[2]
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		const uint8lOETfcF = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		const boolHGPaEhr = await WeedburnwcnTEC.transfer.call(addressSHxZXnf, uintcY2KA3, {from: "0x0000000000000000000000000000000000000001"});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addressSD4u7j8, addressrLw7Uzh, uintjV26Z4F, {from: accounts[0]});
		const stringlCt2oq4 = await WeedburnwcnTEC.symbol.call({from: accounts[0]});
		const boolywUFaIC = await WeedburnwcnTEC.decreaseAllowance.call(addressejGS0nW, uint5pUiaC, {from: accounts[3]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addressP0z0sCM, uintB0GGiCm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uinttDXYPb = BigInt("522")
		const addresskOw2AP1 = accounts[0]
		const uintnfXSQP = BigInt("523")
		const addressLsbma9f = "0x0000000000000000000000000000000000000001"
		const addresszyIMBRv = accounts[4]
		const uintQ6LAMT6 = BigInt("228")
		const addressAdHrORV = accounts[5]
		const uintmkxJqnK = BigInt("127")
		const addressszknot4 = accounts[2]
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		await WeedburnwcnTEC.disableDevMode.call({from: accounts[2]});
		const uint8lOETfcF = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		const boolHGPaEhr = await WeedburnwcnTEC.transfer.call(addresskOw2AP1, uinttDXYPb, {from: "0x0000000000000000000000000000000000000001"});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addresszyIMBRv, addressLsbma9f, uintnfXSQP, {from: accounts[0]});
		const stringlCt2oq4 = await WeedburnwcnTEC.symbol.call({from: accounts[0]});
		const boolywUFaIC = await WeedburnwcnTEC.decreaseAllowance.call(addressAdHrORV, uintQ6LAMT6, {from: accounts[3]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addressszknot4, uintmkxJqnK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnrMxVZje = await Weedburn.new({from: accounts[2]});
		const addressd0SC8ZV = accounts[4]
		const addressxPEUN0L = accounts[4]
		const addressdb1BTy4 = accounts[5]
		const addressqALfXm6 = accounts[1]
		const stringkwSrOS = await WeedburnrMxVZje.symbol.call({from: accounts[4]});
		const uint256WkUzUA9 = await WeedburnrMxVZje.balanceOf.call(addressd0SC8ZV, {from: accounts[2]});
		const uint256psG1stU = await WeedburnrMxVZje.balanceOf.call(addressxPEUN0L, {from: accounts[0]});
		const uint256MMh4hf = await WeedburnrMxVZje.allowance.call(addressqALfXm6, addressdb1BTy4, {from: accounts[1]});

		assert.equal(stringkwSrOS, "Weedburn")
		assert.equal(uint256MMh4hf, BigInt("0"))
		assert.equal(uint256WkUzUA9, BigInt("0"))
		assert.equal(uint256psG1stU, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uintv2HDXvv = BigInt("1777")
		const addressGmCb1Cg = accounts[3]
		const addressUuKWnUr = accounts[4]
		const uintcmi0SAZ = BigInt("523")
		const addressVDvS5Pz = "0x0000000000000000000000000000000000000001"
		const addressTadgCCa = accounts[4]
		const uintqSinZaG = BigInt("1332")
		const addressv3JsLJO = accounts[4]
		const uintx4hBmp6 = BigInt("1665")
		const addresss6RV3XY = accounts[4]
		const uintaSzsWzR = BigInt("1507")
		const addressUBXbHAF = accounts[5]
		const uintKqvMG7L = BigInt("127")
		const addresscjuFaa = accounts[2]
		const uint256FIkghjE = await WeedburnwcnTEC.totalSupply.call({from: accounts[3]});
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		const uint8lOETfcF = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		const boolx5Bv7Go = await WeedburnwcnTEC.transferFrom.call(addressUuKWnUr, addressGmCb1Cg, uintv2HDXvv, {from: "0x0000000000000000000000000000000000000001"});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addressTadgCCa, addressVDvS5Pz, uintcmi0SAZ, {from: accounts[0]});
		const boolPzeble3 = await WeedburnwcnTEC.increaseAllowance.call(addressv3JsLJO, uintqSinZaG, {from: accounts[2]});
		const uint86q95xP = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		const addresslAZ6IUn = await WeedburnwcnTEC.burnFrom.call(addresss6RV3XY, uintx4hBmp6, {from: accounts[3]});
		const stringlCt2oq4 = await WeedburnwcnTEC.symbol.call({from: accounts[0]});
		await WeedburnwcnTEC.enableLimitMode.call({from: accounts[3]});
		const uint8Ak5eXbU = await WeedburnwcnTEC.decimals.call({from: accounts[2]});
		const addressm2GGTNl = await WeedburnwcnTEC.burnFrom.call(addressUBXbHAF, uintaSzsWzR, {from: accounts[2]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addresscjuFaa, uintKqvMG7L, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FIkghjE, BigInt("100000000000000000000000"))
		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uintoLvAwzP = BigInt("701")
		const addressYQdBFs = accounts[4]
		const uintfjoIvqo = BigInt("522")
		const addressntHZZz1 = accounts[0]
		const uintTX227fj = BigInt("523")
		const addresseJN1MV = "0x0000000000000000000000000000000000000002"
		const addressx7AysWt = accounts[4]
		const uintn7PLQTS = BigInt("228")
		const addressVh0k6w = accounts[4]
		const uintvMTdK4P = BigInt("127")
		const addresss70tK7 = accounts[2]
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		const uint8lOETfcF = await WeedburnwcnTEC.decimals.call({from: accounts[4]});
		await WeedburnwcnTEC.disableDevMode.call({from: accounts[1]});
		const boolfkHQ09M = await WeedburnwcnTEC.increaseAllowance.call(addressYQdBFs, uintoLvAwzP, {from: accounts[5]});
		const boolHGPaEhr = await WeedburnwcnTEC.transfer.call(addressntHZZz1, uintfjoIvqo, {from: "0x0000000000000000000000000000000000000001"});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addressx7AysWt, addresseJN1MV, uintTX227fj, {from: accounts[0]});
		const boolywUFaIC = await WeedburnwcnTEC.decreaseAllowance.call(addressVh0k6w, uintn7PLQTS, {from: accounts[3]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addresss70tK7, uintvMTdK4P, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfevzXSj = await Weedburn.new({from: accounts[1]});
		const uintokWlF6i = BigInt("33")
		const addressSlbTWRh = accounts[3]
		const addressjSdMNns = accounts[5]
		const addressnFUJjGg = accounts[3]
		const addressCP8IzIv = accounts[1]
		const addressLCLAEhS = await WeedburnfevzXSj.burnFrom.call(addressSlbTWRh, uintokWlF6i, {from: accounts[2]});
		const uint256egTFmjF = await WeedburnfevzXSj.allowance.call(addressnFUJjGg, addressjSdMNns, {from: accounts[3]});
		const uint256tx3QKUB = await WeedburnfevzXSj.balanceOf.call(addressCP8IzIv, {from: accounts[5]});
		await WeedburnfevzXSj.enableDevMode.call({from: accounts[2]});

		await expect(WeedburnfevzXSj.burnFrom.call(addressSlbTWRh, uintokWlF6i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uinto5ROpX2 = BigInt("505")
		const addressXLDTYeu = accounts[3]
		const uintCbxC0ZJ = BigInt("523")
		const addressY4z19cH = "0x0000000000000000000000000000000000000001"
		const addresswNch5QP = accounts[5]
		const uintoQ5Sg3X = BigInt("127")
		const addresscmw5Ir = accounts[2]
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		const boolkhDF1ha = await WeedburnwcnTEC.transfer.call(addressXLDTYeu, uinto5ROpX2, {from: accounts[1]});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addresswNch5QP, addressY4z19cH, uintCbxC0ZJ, {from: accounts[0]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addresscmw5Ir, uintoQ5Sg3X, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnwcnTEC.disableLimitMode.call({from: accounts[1]});

		await expect(WeedburnwcnTEC.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uint00oqLD = BigInt("474")
		const addressQ7BdXWM = accounts[2]
		const uintNnRk6Xc = BigInt("1810")
		const uintrh9LnZG = BigInt("127")
		const addressyC3lIea = accounts[2]
		const boolL9cEsix = await WeedburnwcnTEC.approve.call(addressQ7BdXWM, uint00oqLD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rS0LZNb = await WeedburnwcnTEC.burn.call(uintNnRk6Xc, {from: accounts[5]});
		await WeedburnwcnTEC.enableDevMode.call({from: accounts[1]});
		await WeedburnwcnTEC.disableDevMode.call({from: accounts[5]});
		const boolHAXUgmm = await WeedburnwcnTEC.transfer.call(addressyC3lIea, uintrh9LnZG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolL9cEsix, true)
		await expect(WeedburnwcnTEC.burn.call(uintNnRk6Xc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfevzXSj = await Weedburn.new({from: accounts[1]});
		const uintc3snAo0 = BigInt("62")
		const uintCMHpOLI = BigInt("188")
		const addresszcKqvU = accounts[2]
		const addresskDIHaX = accounts[3]
		const uint8QmIko = BigInt("34")
		const addressS9DFscQ = accounts[3]
		const uint256xdAH0p = await WeedburnfevzXSj.burn.call(uintc3snAo0, {from: accounts[1]});
		const boolmz6MqZK = await WeedburnfevzXSj.transferFrom.call(addresskDIHaX, addresszcKqvU, uintCMHpOLI, {from: "0x0000000000000000000000000000000000000001"});
		const addressLCLAEhS = await WeedburnfevzXSj.burnFrom.call(addressS9DFscQ, uint8QmIko, {from: accounts[2]});

		await expect(WeedburnfevzXSj.transferFrom.call(addresskDIHaX, addresszcKqvU, uintCMHpOLI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwcnTEC = await Weedburn.new({from: accounts[1]});
		const uintne5JptU = BigInt("280")
		const addressD027dhq = accounts[3]
		const addressbiBdsmX = accounts[1]
		const uintYhbJRv = BigInt("523")
		const addresso72ApTw = "0x0000000000000000000000000000000000000002"
		const addressbdZOTii = accounts[5]
		const addressEDGHfU7 = accounts[1]
		const addressQrOS12D = accounts[1]
		const boolwEmjtfi = await WeedburnwcnTEC.transferFrom.call(addressbiBdsmX, addressD027dhq, uintne5JptU, {from: accounts[5]});
		const boolZtY4mzG = await WeedburnwcnTEC.transferFrom.call(addressbdZOTii, addresso72ApTw, uintYhbJRv, {from: accounts[0]});
		const uint256wZQgbwO = await WeedburnwcnTEC.allowance.call(addressQrOS12D, addressEDGHfU7, {from: accounts[0]});

		await expect(WeedburnwcnTEC.transferFrom.call(addressbiBdsmX, addressD027dhq, uintne5JptU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfevzXSj = await Weedburn.new({from: accounts[1]});
		const uintpY8FpB = BigInt("0")
		const addressK7MJmEK = accounts[3]
		await WeedburnfevzXSj.disableLimitMode.call({from: accounts[1]});
		const addressLCLAEhS = await WeedburnfevzXSj.burnFrom.call(addressK7MJmEK, uintpY8FpB, {from: accounts[2]});

		await expect(WeedburnfevzXSj.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})