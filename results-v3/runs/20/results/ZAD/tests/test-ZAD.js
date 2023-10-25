const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADsGem5uy = await ZAD.new({from: accounts[4]});
		const addressO6lvqu8 = "0x0000000000000000000000000000000000000001"
		const uintT4hOy6E = BigInt("857")
		const addresswnpr8xS = accounts[3]
		const uint256gQW9ZXh = await ZADsGem5uy.balanceOf.call(addressO6lvqu8, {from: accounts[5]});
		const boolUzMfjyl = await ZADsGem5uy.approve.call(addresswnpr8xS, uintT4hOy6E, {from: accounts[0]});

		assert.equal(boolUzMfjyl, true)
		assert.equal(uint256gQW9ZXh, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADzoOyKGX = await ZAD.new({from: accounts[0]});
		const uintrDRnwTn = BigInt("558")
		const addressDG94A1k = "0x0000000000000000000000000000000000000001"
		const uints1FTiDg = BigInt("727")
		const boolGkMF3zj = await ZADzoOyKGX.increaseAllowance.call(addressDG94A1k, uintrDRnwTn, {from: accounts[4]});
		const uint256hjNI2aO = await ZADzoOyKGX._burn.call(uints1FTiDg, {from: accounts[2]});
		const stringnECxxph = await ZADzoOyKGX.name.call({from: accounts[5]});

		assert.equal(boolGkMF3zj, true)
		await expect(ZADzoOyKGX._burn.call(uints1FTiDg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADNX146ok = await ZAD.new({from: accounts[4]});
		const uintpgxw3sp = BigInt("410")
		const addresskuDR3kX = accounts[0]
		const addressvrKZkkm = "0x0000000000000000000000000000000000000001"
		const uintydZ4HwD = BigInt("650")
		const addressILbLw9a = accounts[2]
		const uinteNBJIT3 = BigInt("1579")
		const addressDKNxRmM = accounts[1]
		const uintWjk1elQ = BigInt("260")
		const addressWMzlMpM = accounts[4]
		const addressqToaDFQ = accounts[0]
		const boolBuDiJc = await ZADNX146ok.increaseAllowance.call(addresskuDR3kX, uintpgxw3sp, {from: accounts[1]});
		const uint256JDnyNkb = await ZADNX146ok.balanceOf.call(addressvrKZkkm, {from: accounts[2]});
		const boolUwn5Gep = await ZADNX146ok.decreaseAllowance.call(addressILbLw9a, uintydZ4HwD, {from: accounts[0]});
		const booljb5XQXg = await ZADNX146ok.transfer.call(addressDKNxRmM, uinteNBJIT3, {from: accounts[4]});
		const stringy89VY6r = await ZADNX146ok.symbol.call({from: accounts[5]});
		const boolEhPr8JW = await ZADNX146ok.transferFrom.call(addressqToaDFQ, addressWMzlMpM, uintWjk1elQ, {from: accounts[0]});

		assert.equal(boolBuDiJc, true)
		assert.equal(uint256JDnyNkb, BigInt("0"))
		await expect(ZADNX146ok.decreaseAllowance.call(addressILbLw9a, uintydZ4HwD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADT2L85dV = await ZAD.new({from: accounts[4]});
		const uintkAw9Not = BigInt("577")
		const addresscR0IZj = accounts[4]
		const uintAQC5Khi = BigInt("1842")
		const addressDH0xClq = accounts[2]
		const uintYovJytN = BigInt("665")
		const addressYlVjk5G = accounts[4]
		const uint8SSSXDSP = await ZADT2L85dV.decimals.call({from: accounts[5]});
		const boolPlya17I = await ZADT2L85dV.increaseAllowance.call(addresscR0IZj, uintkAw9Not, {from: accounts[0]});
		const stringEw3GoIV = await ZADT2L85dV.symbol.call({from: accounts[2]});
		const boolzVv1pdM = await ZADT2L85dV.decreaseAllowance.call(addressDH0xClq, uintAQC5Khi, {from: "0x0000000000000000000000000000000000000001"});
		const boolEOWwyVO = await ZADT2L85dV.transfer.call(addressYlVjk5G, uintYovJytN, {from: accounts[4]});

		assert.equal(boolPlya17I, true)
		assert.equal(stringEw3GoIV, "ZAD")
		assert.equal(uint8SSSXDSP, BigInt("18"))
		await expect(ZADT2L85dV.decreaseAllowance.call(addressDH0xClq, uintAQC5Khi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADiEMKwKc = await ZAD.new({from: accounts[3]});
		const uinttmFPBDR = BigInt("155")
		const addressuw6RzhS = accounts[2]
		const addressynwpChj = "0x0000000000000000000000000000000000000001"
		const boolbucfG3 = await ZADiEMKwKc.transferFrom.call(addressynwpChj, addressuw6RzhS, uinttmFPBDR, {from: accounts[1]});
		const stringObB4zf7 = await ZADiEMKwKc.symbol.call({from: accounts[1]});
		const uint8oaH3iWT = await ZADiEMKwKc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringINFpBWJ = await ZADiEMKwKc.name.call({from: accounts[4]});

		await expect(ZADiEMKwKc.transferFrom.call(addressynwpChj, addressuw6RzhS, uinttmFPBDR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZt6cUrs = await ZAD.new({from: accounts[0]});
		const uintQwCuGpC = BigInt("748")
		const addressV35aZr3 = accounts[3]
		const addressnLfU0wP = accounts[1]
		const addresshZOaNag = accounts[5]
		const uintKSGfdjS = BigInt("1986")
		const addressNbW0VVO = accounts[2]
		const boollWnZ7NE = await ZADZt6cUrs.transfer.call(addressV35aZr3, uintQwCuGpC, {from: accounts[1]});
		const uint256hwh6IQ = await ZADZt6cUrs.allowance.call(addresshZOaNag, addressnLfU0wP, {from: accounts[4]});
		const boolIzyQ8DH = await ZADZt6cUrs.decreaseAllowance.call(addressNbW0VVO, uintKSGfdjS, {from: accounts[3]});

		await expect(ZADZt6cUrs.transfer.call(addressV35aZr3, uintQwCuGpC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADQjUvnyt = await ZAD.new({from: accounts[1]});
		const addressYkEhPYV = accounts[0]
		const uint256rfP9BZd = await ZADQjUvnyt.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Fltwd1k = await ZADQjUvnyt.balanceOf.call(addressYkEhPYV, {from: accounts[3]});
		const uint8pMSUA9g = await ZADQjUvnyt.decimals.call({from: accounts[2]});

		assert.equal(uint256Fltwd1k, BigInt("0"))
		assert.equal(uint256rfP9BZd, BigInt("100000000000000000000000000"))
		assert.equal(uint8pMSUA9g, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADL06VMlp = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgc7mLPh = accounts[2]
		const stringAth1Bbz = await ZADL06VMlp.symbol.call({from: accounts[3]});
		const uint256jZElEBj = await ZADL06VMlp.totalSupply.call({from: accounts[2]});
		const uint256kfM33B = await ZADL06VMlp.balanceOf.call(addressgc7mLPh, {from: accounts[2]});
	});

	it('test for ZAD', async () => {
		const ZADzoOyKGX = await ZAD.new({from: accounts[0]});
		const uintsATNwQ = BigInt("558")
		const addressgLLsogC = "0x0000000000000000000000000000000000000000"
		const uintzcQTRuC = BigInt("727")
		const boolGkMF3zj = await ZADzoOyKGX.increaseAllowance.call(addressgLLsogC, uintsATNwQ, {from: accounts[4]});
		const uint256hjNI2aO = await ZADzoOyKGX._burn.call(uintzcQTRuC, {from: accounts[2]});
		const stringnECxxph = await ZADzoOyKGX.name.call({from: accounts[5]});

		await expect(ZADzoOyKGX.increaseAllowance.call(addressgLLsogC, uintsATNwQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADT2L85dV = await ZAD.new({from: accounts[4]});
		const addressfE9IrNA = accounts[2]
		const addressxZG7VMJ = accounts[3]
		const uintzxJJT6k = BigInt("577")
		const addressGZulxq7 = accounts[5]
		const uintTHuQiGE = BigInt("1842")
		const addresscNzBe5O = accounts[2]
		const uintvLSWWj0 = BigInt("665")
		const addressZ8XMRF0 = accounts[4]
		const stringa1st28M = await ZADT2L85dV.symbol.call({from: accounts[4]});
		const uint8SSSXDSP = await ZADT2L85dV.decimals.call({from: accounts[5]});
		const uint256o2jBYTV = await ZADT2L85dV.allowance.call(addressxZG7VMJ, addressfE9IrNA, {from: accounts[0]});
		const boolPlya17I = await ZADT2L85dV.increaseAllowance.call(addressGZulxq7, uintzxJJT6k, {from: accounts[0]});
		const stringEw3GoIV = await ZADT2L85dV.symbol.call({from: accounts[2]});
		const uint8FpW0eWv = await ZADT2L85dV.decimals.call({from: accounts[0]});
		const boolzVv1pdM = await ZADT2L85dV.decreaseAllowance.call(addresscNzBe5O, uintTHuQiGE, {from: "0x0000000000000000000000000000000000000001"});
		const boolEOWwyVO = await ZADT2L85dV.transfer.call(addressZ8XMRF0, uintvLSWWj0, {from: accounts[4]});

		assert.equal(boolPlya17I, true)
		assert.equal(stringEw3GoIV, "ZAD")
		assert.equal(stringa1st28M, "ZAD")
		assert.equal(uint256o2jBYTV, BigInt("0"))
		assert.equal(uint8FpW0eWv, BigInt("18"))
		assert.equal(uint8SSSXDSP, BigInt("18"))
		await expect(ZADT2L85dV.decreaseAllowance.call(addresscNzBe5O, uintTHuQiGE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlRRoBmW = await ZAD.new({from: accounts[3]});
		const addressE6DSrQl = accounts[0]
		const addressv8FxZuD = accounts[2]
		const uint256aLGyqS = await ZADlRRoBmW.allowance.call(addressv8FxZuD, addressE6DSrQl, {from: accounts[0]});
		const stringQW5qwn6 = await ZADlRRoBmW.name.call({from: accounts[3]});
		const uint8J3ngbAU = await ZADlRRoBmW.decimals.call({from: accounts[2]});

		assert.equal(stringQW5qwn6, "Zadkiel")
		assert.equal(uint256aLGyqS, BigInt("0"))
		assert.equal(uint8J3ngbAU, BigInt("18"))
	});
})