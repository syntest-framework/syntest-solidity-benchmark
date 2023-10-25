const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const addressAdeS8kF = accounts[0]
		const boolLPCfx1 = true
		const addresszotjHER = "0x0000000000000000000000000000000000000001"
		const uintsz3kvMW = BigInt("974")
		const addressc2qT2U = accounts[1]
		const addressLoEVzfp = accounts[0]
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressAdeS8kF, {from: "0x0000000000000000000000000000000000000001"});
		const boolReJTjH = await LUPtYaixzP.freezeAccount.call(addresszotjHER, boolLPCfx1, {from: accounts[3]});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressc2qT2U, uintsz3kvMW, {from: accounts[2]});
		const addressObqaTDa = await LUPtYaixzP.notFrozen.call(addressLoEVzfp, {from: accounts[1]});

		assert.equal(uint256BcP5tHK, BigInt("0"))
		await expect(LUPtYaixzP.freezeAccount.call(addresszotjHER, boolLPCfx1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringqwpjgRg = "iNMVYZ3COfbjkLUefAoPKOrNSJTiqxrVYhG2ytRWKIcYO6HAKCQqbkRe2SlS6qRGSuyfCk9JfeBC95yzqdpWT"
		const stringw5P6ZIv = "PT0WnKwCA9RzIeJgteIuPr4LLQ70yH1JUbRXYeBEDKEOjCucwmuFA13JEDLoSYV8Vp8JqmSwkCVW1sD6qJ"
		const uintaaUsnwr = BigInt("190")
		const LUP9EQIKY = await LUP.new(stringqwpjgRg, stringw5P6ZIv, uintaaUsnwr, {from: accounts[3]});
		const addressz3K4G1p = accounts[1]
		const addressyGtUuu = accounts[0]
		const boolRsUBoyw = true
		const addresscyVtvaA = accounts[5]
		const uintsGsGoRU = BigInt("674")
		const addressea5j4vA = "0x0000000000000000000000000000000000000001"
		const addressT8DORtK = await LUP9EQIKY.upgradeTo.call(addressz3K4G1p, {from: accounts[1]});
		const uint256arkr07E = await LUP9EQIKY.balanceOf.call(addressyGtUuu, {from: accounts[2]});
		const boolfh9okj = await LUP9EQIKY.freezeAccount.call(addresscyVtvaA, boolRsUBoyw, {from: accounts[1]});
		const boolxPOGYaZ = await LUP9EQIKY.transfer.call(addressea5j4vA, uintsGsGoRU, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPkcllpqe = await LUP.new({from: accounts[3]});
		const uintvWIc9NJ = BigInt("1693")
		const uintAe6nnlW = BigInt("461")
		const addressQjZA36c = "0x0000000000000000000000000000000000000001"
		const uintVXa76Lh = BigInt("177")
		const uintkvOiq5 = BigInt("1112")
		const addressZhZUPka = accounts[1]
		const addressQ8etx3W = accounts[3]
		const uintuzLhgMa = BigInt("1293")
		const addressstVAWJx = "0x0000000000000000000000000000000000000001"
		const uint8vhKUqI = await LUPkcllpqe.decimals.call({from: accounts[4]});
		const booljMwc8KL = await LUPkcllpqe.lock.call(addressQjZA36c, uintAe6nnlW, uintvWIc9NJ, {from: accounts[4]});
		const uint8yXotw1 = await LUPkcllpqe.decimals.call({from: accounts[0]});
		const boolf4yBENJ = await LUPkcllpqe.transferWithLock.call(addressZhZUPka, uintkvOiq5, uintVXa76Lh, {from: accounts[2]});
		const uint256iSDChHO = await LUPkcllpqe.balanceOf.call(addressQ8etx3W, {from: accounts[0]});
		const boolXf6BcNF = await LUPkcllpqe.unlock.call(addressstVAWJx, uintuzLhgMa, {from: accounts[5]});

		assert.equal(uint8vhKUqI, BigInt("18"))
		await expect(LUPkcllpqe.lock.call(addressQjZA36c, uintAe6nnlW, uintvWIc9NJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPXlaYM0g = await LUP.new({from: accounts[5]});
		const addressdyunsb = accounts[3]
		const uintcdHfDup = BigInt("307")
		const addressh8eDSej = accounts[3]
		const uintlrWmTFN = BigInt("1526")
		const uintwgjpY5B = BigInt("546")
		const addressYhxDy8 = accounts[2]
		const uintPor0uPe = BigInt("119")
		const uinta42W41M = BigInt("1941")
		const addressc9a4W7 = accounts[4]
		const addressHx2Jszr = await LUPXlaYM0g.upgradeTo.call(addressdyunsb, {from: accounts[5]});
		const boolw8tMiNe = await LUPXlaYM0g.unlock.call(addressh8eDSej, uintcdHfDup, {from: accounts[3]});
		const boolzlOHYWo = await LUPXlaYM0g.transferWithLock.call(addressYhxDy8, uintwgjpY5B, uintlrWmTFN, {from: accounts[4]});
		const stringookGadJ = await LUPXlaYM0g.name.call({from: accounts[3]});
		const boolD2rauG8 = await LUPXlaYM0g.lock.call(addressc9a4W7, uinta42W41M, uintPor0uPe, {from: accounts[0]});

		await expect(LUPXlaYM0g.unlock.call(addressh8eDSej, uintcdHfDup, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTeRzBK0 = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQyfHGdz = accounts[3]
		const addressGCsNErZ = accounts[1]
		const uintTpjwzZY = BigInt("1105")
		const addressXa9ou7M = accounts[0]
		const addresszKoFWS = await LUPTeRzBK0.upgradeTo.call(addressQyfHGdz, {from: accounts[0]});
		const uint8PNBJUVt = await LUPTeRzBK0.decimals.call({from: accounts[2]});
		const uint256RUTnDly = await LUPTeRzBK0.balanceOf.call(addressGCsNErZ, {from: accounts[5]});
		const boolGlI12nY = await LUPTeRzBK0.unlock.call(addressXa9ou7M, uintTpjwzZY, {from: accounts[4]});
		const uint8zUmPFwY = await LUPTeRzBK0.decimals.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const addressXrFERgK = accounts[0]
		const uintqaKhWYY = BigInt("974")
		const addressuNkuYl4 = accounts[1]
		const uintltYBaqN = BigInt("1323")
		const addressIcoiI7F = accounts[3]
		const addressiKHL2V = accounts[0]
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressXrFERgK, {from: "0x0000000000000000000000000000000000000001"});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressuNkuYl4, uintqaKhWYY, {from: accounts[2]});
		const boolY6uC4sE = await LUPtYaixzP.unlock.call(addressIcoiI7F, uintltYBaqN, {from: accounts[2]});
		const addressObqaTDa = await LUPtYaixzP.notFrozen.call(addressiKHL2V, {from: accounts[1]});

		assert.equal(boolQXYFhJx, true)
		assert.equal(uint256BcP5tHK, BigInt("0"))
		await expect(LUPtYaixzP.unlock.call(addressIcoiI7F, uintltYBaqN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const addressqJuyFV = accounts[0]
		const uintzYIWT3B = BigInt("30")
		const addressBkTi0Tg = accounts[1]
		const boolLPCfx1 = true
		const addressM8LqNdE = "0x0000000000000000000000000000000000000001"
		const addresshCXBfBm = accounts[0]
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressqJuyFV, {from: "0x0000000000000000000000000000000000000001"});
		const boolHcJLMeN = await LUPtYaixzP.transfer.call(addressBkTi0Tg, uintzYIWT3B, {from: accounts[3]});
		const boolReJTjH = await LUPtYaixzP.freezeAccount.call(addressM8LqNdE, boolLPCfx1, {from: accounts[3]});
		const addressObqaTDa = await LUPtYaixzP.notFrozen.call(addresshCXBfBm, {from: accounts[1]});

		assert.equal(uint256BcP5tHK, BigInt("0"))
		await expect(LUPtYaixzP.transfer.call(addressBkTi0Tg, uintzYIWT3B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const addressaR485I9 = accounts[1]
		const uintNNA22yM = BigInt("974")
		const addressLJQcrV = accounts[1]
		const address9mNPwv = accounts[0]
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressaR485I9, {from: "0x0000000000000000000000000000000000000001"});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressLJQcrV, uintNNA22yM, {from: accounts[2]});
		const addressObqaTDa = await LUPtYaixzP.notFrozen.call(address9mNPwv, {from: accounts[1]});

		assert.equal(boolQXYFhJx, true)
		assert.equal(uint256BcP5tHK, BigInt("0"))
		await expect(LUPtYaixzP.notFrozen.call(address9mNPwv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const uintnkSquJx = BigInt("1586")
		const uintI3YgQuL = BigInt("1182")
		const addressDPdyqR6 = accounts[4]
		const addressEehixFj = accounts[0]
		const boolLPCfx1 = true
		const addresspR7tpFr = "0x0000000000000000000000000000000000000001"
		const uintxrhbnE = BigInt("1143")
		const uintkxcjHCR = BigInt("1145")
		const addressEKDaPzZ = accounts[1]
		const uintGr9pORF = BigInt("974")
		const addressGonLAnT = accounts[1]
		const addresseefhn48 = accounts[0]
		const boolkIPqXkJ = await LUPtYaixzP.transferWithLock.call(addressDPdyqR6, uintI3YgQuL, uintnkSquJx, {from: accounts[2]});
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressEehixFj, {from: "0x0000000000000000000000000000000000000001"});
		const boolReJTjH = await LUPtYaixzP.freezeAccount.call(addresspR7tpFr, boolLPCfx1, {from: accounts[3]});
		const boolvgtVVp6 = await LUPtYaixzP.lock.call(addressEKDaPzZ, uintkxcjHCR, uintxrhbnE, {from: accounts[4]});
		const stringIOQ2CF = await LUPtYaixzP.symbol.call({from: accounts[3]});
		const stringzE305KK = await LUPtYaixzP.symbol.call({from: accounts[0]});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressGonLAnT, uintGr9pORF, {from: accounts[2]});
		const addressObqaTDa = await LUPtYaixzP.notFrozen.call(addresseefhn48, {from: accounts[1]});

		assert.equal(boolkIPqXkJ, true)
		assert.equal(uint256BcP5tHK, BigInt("0"))
		await expect(LUPtYaixzP.freezeAccount.call(addresspR7tpFr, boolLPCfx1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const addressRhzIgXB = "0x0000000000000000000000000000000000000001"
		const uintmV3TyXX = BigInt("1258")
		const uintWs09bj3 = BigInt("1249")
		const addresshwk2DSS = accounts[1]
		const addressdtnOHE6 = accounts[1]
		const uintWByeBGM = BigInt("974")
		const addressbbFc4CN = accounts[1]
		const addressFbBW7ly = accounts[0]
		const stringudU4Gxs = await LUPtYaixzP.symbol.call({from: accounts[3]});
		const addressQUpzMw0 = await LUPtYaixzP.notFrozen.call(addressRhzIgXB, {from: accounts[5]});
		const boolMnWZRE = await LUPtYaixzP.transferWithLock.call(addresshwk2DSS, uintWs09bj3, uintmV3TyXX, {from: accounts[2]});
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressdtnOHE6, {from: "0x0000000000000000000000000000000000000001"});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressbbFc4CN, uintWByeBGM, {from: accounts[2]});
		const addressObqaTDa = await LUPtYaixzP.notFrozen.call(addressFbBW7ly, {from: accounts[1]});

		assert.equal(stringudU4Gxs, "LUP")
		await expect(LUPtYaixzP.notFrozen.call(addressRhzIgXB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const addressqZkDLxv = accounts[2]
		const boolWvEDFWn = true
		const addresspMZDrCw = accounts[0]
		const uintuBOXdrS = BigInt("974")
		const addressryHnkZ6 = accounts[1]
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressqZkDLxv, {from: "0x0000000000000000000000000000000000000001"});
		const booldNSMjGU = await LUPtYaixzP.freezeAccount.call(addresspMZDrCw, boolWvEDFWn, {from: accounts[2]});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressryHnkZ6, uintuBOXdrS, {from: accounts[2]});
		const stringMOXVORw = await LUPtYaixzP.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQXYFhJx, true)
		assert.equal(booldNSMjGU, true)
		assert.equal(stringMOXVORw, "LUP")
		assert.equal(uint256BcP5tHK, BigInt("50000000000000000000000000"))
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const address15jexV = accounts[1]
		const addressboiNzvV = accounts[1]
		const uintN2WmzaS = BigInt("200")
		const address6n38yp = accounts[2]
		const addresswcYoakU = await LUPtYaixzP.upgradeTo.call(address15jexV, {from: "0x0000000000000000000000000000000000000001"});
		const stringSDhjXtL = await LUPtYaixzP.symbol.call({from: accounts[2]});
		const uint256BcP5tHK = await LUPtYaixzP.balanceOf.call(addressboiNzvV, {from: "0x0000000000000000000000000000000000000001"});
		const boolfojDa0O = await LUPtYaixzP.unlock.call(address6n38yp, uintN2WmzaS, {from: accounts[2]});

		await expect(LUPtYaixzP.upgradeTo.call(address15jexV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const uintgfcKtg3 = BigInt("945")
		const addressV8XJMdG = accounts[1]
		const addresszVDX1I5 = accounts[1]
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressV8XJMdG, uintgfcKtg3, {from: accounts[2]});
		const stringFG5xRG7 = await LUPtYaixzP.name.call({from: accounts[1]});
		const uint256vhDZcY6 = await LUPtYaixzP.balanceOf.call(addresszVDX1I5, {from: accounts[1]});

		assert.equal(boolQXYFhJx, true)
		assert.equal(stringFG5xRG7, "LINKUP Token")
		assert.equal(uint256vhDZcY6, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPtYaixzP = await LUP.new({from: accounts[2]});
		const uintYXbOXga = BigInt("780")
		const uintSgQEK1 = BigInt("1113")
		const addressjDIkPS = accounts[4]
		const uintQaJ0qS = BigInt("974")
		const addressRRS86gf = accounts[1]
		const boolA219pd6 = await LUPtYaixzP.lock.call(addressjDIkPS, uintSgQEK1, uintYXbOXga, {from: accounts[2]});
		const stringIAudLlb = await LUPtYaixzP.name.call({from: accounts[0]});
		const boolQXYFhJx = await LUPtYaixzP.transfer.call(addressRRS86gf, uintQaJ0qS, {from: accounts[2]});

		await expect(LUPtYaixzP.lock.call(addressjDIkPS, uintSgQEK1, uintYXbOXga, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})