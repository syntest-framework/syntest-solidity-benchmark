const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringgzcpQCc = "WDzjxKFyPEfVOCTWMd8HNUu6zAILcuoPEzFng7lqBmkeTPYP8OPAQ791"
		const stringmF8MIh = "zoIjdeOhVXfd4czLF1AU621HK4jve8Fw5BFNzovb9L33EvDoXv2QQGnyTvwtdivBc"
		const uintU4QZ3F = BigInt("111")
		const LUPdxBjpSJ = await LUP.new(stringgzcpQCc, stringmF8MIh, uintU4QZ3F, {from: accounts[2]});
		const addressc22YmZq = accounts[5]
		const addressHW4mg7S = accounts[3]
		const addressImaxV6j = accounts[2]
		const uint256NGck9AM = await LUPdxBjpSJ.balanceOf.call(addressc22YmZq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NYa7RBs = await LUPdxBjpSJ.balanceOf.call(addressHW4mg7S, {from: accounts[0]});
		const addressAdKrDXv = await LUPdxBjpSJ.upgradeTo.call(addressImaxV6j, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const boolhZMqLPX = true
		const addressntEXaHR = accounts[3]
		const addressYJwhEr = accounts[2]
		const booliMNHaya = await LUPfsyqcf.freezeAccount.call(addressntEXaHR, boolhZMqLPX, {from: accounts[1]});
		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressYJwhEr, {from: accounts[4]});

		assert.equal(booliMNHaya, true)
		assert.equal(uint256u96KJ9N, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPGdF9Yf = await LUP.new({from: accounts[5]});
		const addressBeo1W0I = accounts[4]
		const uintsboU0xv = BigInt("253")
		const addressWX2WP8 = accounts[4]
		const addressYEtRzh4 = accounts[1]
		const uintOdnhz0 = BigInt("250")
		const uintYcjruS = BigInt("1644")
		const addressIu6ju8q = accounts[3]
//		const addressdIuA3NJ = await LUPGdF9Yf.notFrozen.call(addressBeo1W0I, {from: accounts[5]});
//		const boolpaoOa2t = await LUPGdF9Yf.unlock.call(addressWX2WP8, uintsboU0xv, {from: accounts[1]});
//		const uint256tQ5Zl19 = await LUPGdF9Yf.balanceOf.call(addressYEtRzh4, {from: accounts[1]});
//		const boolK7yhi2q = await LUPGdF9Yf.lock.call(addressIu6ju8q, uintYcjruS, uintOdnhz0, {from: accounts[0]});

		await expect(LUPGdF9Yf.notFrozen.call(addressBeo1W0I, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const boolhZMqLPX = true
		const addressFCqWJKE = accounts[3]
		const addressW7v0WAG = accounts[1]
		const addressuLFCE4 = accounts[2]
		const booliMNHaya = await LUPfsyqcf.freezeAccount.call(addressFCqWJKE, boolhZMqLPX, {from: accounts[1]});
//		const addressSYTIiWy = await LUPfsyqcf.upgradeTo.call(addressW7v0WAG, {from: accounts[3]});
//		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressuLFCE4, {from: accounts[4]});

		assert.equal(booliMNHaya, true)
		await expect(LUPfsyqcf.upgradeTo.call(addressW7v0WAG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPiHSTgjd = await LUP.new({from: accounts[0]});
		const uintr7s755t = BigInt("247")
		const addressb6K36l0 = accounts[1]
		const addressz3EIzG = accounts[4]
//		const boolL662fxz = await LUPiHSTgjd.transfer.call(addressb6K36l0, uintr7s755t, {from: accounts[3]});
//		const uint256J14NCK2 = await LUPiHSTgjd.balanceOf.call(addressz3EIzG, {from: accounts[5]});

		await expect(LUPiHSTgjd.transfer.call(addressb6K36l0, uintr7s755t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const boolhZMqLPX = true
		const addressCIGMCsS = accounts[3]
		const uintdFZBKbK = BigInt("163")
		const uintH6GPYW8 = BigInt("58")
		const addressSbzNJOU = accounts[5]
		const addressrqMmmDd = accounts[2]
		const addressCYenpZf = accounts[2]
		const booliMNHaya = await LUPfsyqcf.freezeAccount.call(addressCIGMCsS, boolhZMqLPX, {from: accounts[1]});
//		const boolwhPhSOp = await LUPfsyqcf.transferWithLock.call(addressSbzNJOU, uintH6GPYW8, uintdFZBKbK, {from: accounts[2]});
//		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressrqMmmDd, {from: accounts[4]});
//		const addressrPRExfz = await LUPfsyqcf.notFrozen.call(addressCYenpZf, {from: accounts[0]});

		assert.equal(booliMNHaya, true)
		await expect(LUPfsyqcf.transferWithLock.call(addressSbzNJOU, uintH6GPYW8, uintdFZBKbK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const addressPqdZAd = accounts[2]
		const addresskDkDOF = accounts[1]
		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressPqdZAd, {from: accounts[4]});
		const stringq8Rg5QS = await LUPfsyqcf.symbol.call({from: accounts[3]});
//		const addressrPRExfz = await LUPfsyqcf.notFrozen.call(addresskDkDOF, {from: accounts[0]});

		assert.equal(stringq8Rg5QS, "LUP")
		assert.equal(uint256u96KJ9N, BigInt("0"))
		await expect(LUPfsyqcf.notFrozen.call(addresskDkDOF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const addressdlxO9Cc = accounts[3]
		const addressKhpPZ1b = "0x0000000000000000000000000000000000000001"
		const addressM2LXBq9 = accounts[1]
		const addressb3INK8V = accounts[1]
		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressdlxO9Cc, {from: accounts[4]});
		const uint256ZdBUQI3 = await LUPfsyqcf.balanceOf.call(addressKhpPZ1b, {from: accounts[3]});
		const uint8DtCTweM = await LUPfsyqcf.decimals.call({from: accounts[1]});
//		const addressrPRExfz = await LUPfsyqcf.notFrozen.call(addressM2LXBq9, {from: accounts[0]});
//		const addressYVnyca = await LUPfsyqcf.notFrozen.call(addressb3INK8V, {from: accounts[0]});

		assert.equal(uint256ZdBUQI3, BigInt("0"))
		assert.equal(uint256u96KJ9N, BigInt("0"))
		assert.equal(uint8DtCTweM, BigInt("18"))
		await expect(LUPfsyqcf.notFrozen.call(addressM2LXBq9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const boolhZMqLPX = false
		const addresshcNIASA = accounts[3]
		const addressCqeEsC = accounts[3]
		const uintptpHqpC = BigInt("1247")
		const uintcCqO2Vd = BigInt("1643")
		const addressd18DWms = "0x0000000000000000000000000000000000000001"
		const addressvXdB133 = accounts[1]
		const booliMNHaya = await LUPfsyqcf.freezeAccount.call(addresshcNIASA, boolhZMqLPX, {from: accounts[1]});
		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressCqeEsC, {from: accounts[4]});
		const boolsawMV7d = await LUPfsyqcf.transferWithLock.call(addressd18DWms, uintcCqO2Vd, uintptpHqpC, {from: accounts[1]});
//		const addressrPRExfz = await LUPfsyqcf.notFrozen.call(addressvXdB133, {from: accounts[0]});
//		const stringFQNQpAS = await LUPfsyqcf.symbol.call({from: accounts[4]});

		assert.equal(booliMNHaya, true)
		assert.equal(boolsawMV7d, true)
		assert.equal(uint256u96KJ9N, BigInt("0"))
		await expect(LUPfsyqcf.notFrozen.call(addressvXdB133, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const boolhZMqLPX = true
		const addresshJXPBQp = accounts[3]
		const addressv2SmMuM = accounts[5]
		const addressN9y4G3q = accounts[1]
		const stringfiTuIXk = await LUPfsyqcf.name.call({from: accounts[0]});
		const uint8E3F0ue = await LUPfsyqcf.decimals.call({from: accounts[0]});
		const booliMNHaya = await LUPfsyqcf.freezeAccount.call(addresshJXPBQp, boolhZMqLPX, {from: accounts[1]});
		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressv2SmMuM, {from: accounts[4]});
//		const addressrPRExfz = await LUPfsyqcf.notFrozen.call(addressN9y4G3q, {from: accounts[0]});

		assert.equal(booliMNHaya, true)
		assert.equal(stringfiTuIXk, "LINKUP Token")
		assert.equal(uint256u96KJ9N, BigInt("0"))
		assert.equal(uint8E3F0ue, BigInt("18"))
		await expect(LUPfsyqcf.notFrozen.call(addressN9y4G3q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const addressvELPRCH = accounts[2]
		const uintiD8UYg = BigInt("1941")
		const address5hGEBb = accounts[1]
		const addressbzE6mxf = accounts[5]
		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressvELPRCH, {from: accounts[4]});
//		const boolvFTXVqP = await LUPfsyqcf.unlock.call(address5hGEBb, uintiD8UYg, {from: accounts[1]});
//		const addressZhzor76 = await LUPfsyqcf.notFrozen.call(addressbzE6mxf, {from: accounts[5]});

		assert.equal(uint256u96KJ9N, BigInt("0"))
		await expect(LUPfsyqcf.unlock.call(address5hGEBb, uintiD8UYg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfsyqcf = await LUP.new({from: accounts[1]});
		const addressU2vYsb = accounts[2]
		const addressBoM3lw = accounts[3]
		const addressCoiifMr = accounts[4]
		const addressF5hGQ5 = accounts[5]
		const uint256wCdCWm5 = await LUPfsyqcf.balanceOf.call(addressU2vYsb, {from: accounts[2]});
		const addressFTbZM8z = await LUPfsyqcf.upgradeTo.call(addressBoM3lw, {from: accounts[1]});
//		const addressXPZS8h = await LUPfsyqcf.notFrozen.call(addressCoiifMr, {from: accounts[3]});
//		const uint256u96KJ9N = await LUPfsyqcf.balanceOf.call(addressF5hGQ5, {from: accounts[4]});

		assert.equal(uint256wCdCWm5, BigInt("0"))
		await expect(LUPfsyqcf.notFrozen.call(addressCoiifMr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPiHSTgjd = await LUP.new({from: accounts[0]});
		const uinttNm4ZOw = BigInt("734")
		const uintKXojtWe = BigInt("1328")
		const addresspcggS35 = accounts[1]
		const uintZrnh67 = BigInt("833")
		const addresspuFWPuD = accounts[2]
		const uintCYDtmdo = BigInt("140")
		const addressqRU4DF6 = accounts[2]
//		const boolP5fPn8r = await LUPiHSTgjd.lock.call(addresspcggS35, uintKXojtWe, uinttNm4ZOw, {from: accounts[0]});
//		const boolMpZDVsj = await LUPiHSTgjd.transfer.call(addresspuFWPuD, uintZrnh67, {from: accounts[1]});
//		const boolL662fxz = await LUPiHSTgjd.transfer.call(addressqRU4DF6, uintCYDtmdo, {from: accounts[3]});

		await expect(LUPiHSTgjd.lock.call(addresspcggS35, uintKXojtWe, uinttNm4ZOw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg2yJXAP = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpEz8aZ = BigInt("1988")
		const uintWTVrM1A = BigInt("1668")
		const addressA2CqufA = accounts[1]
		const uintkIFwSoO = BigInt("536")
		const uintp05GYS1 = BigInt("946")
		const addressqHobjWn = "0x0000000000000000000000000000000000000001"
		const addresspaHfalX = accounts[3]
		const boolk88uOEN = await LUPg2yJXAP.lock.call(addressA2CqufA, uintWTVrM1A, uintpEz8aZ, {from: accounts[3]});
		const bool76tdlf = await LUPg2yJXAP.transferWithLock.call(addressqHobjWn, uintp05GYS1, uintkIFwSoO, {from: accounts[1]});
		const uint256hSf3eHF = await LUPg2yJXAP.balanceOf.call(addresspaHfalX, {from: accounts[4]});
	});
})