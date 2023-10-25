const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazSxuEZNA = await Baz.new({from: accounts[5]});
		const intNTKUF2B = BigInt("458")
		const intWqQs55z = BigInt("-1101")
		const intBVDvops = BigInt("794")
		const boolprtifuP = await BazSxuEZNA.echidna_all_states.call({from: accounts[0]});
		const int256hHbT5Fs = await BazSxuEZNA.baz.call(intBVDvops, intWqQs55z, intNTKUF2B, {from: accounts[0]});

		assert.equal(boolprtifuP, true)
		assert.equal(int256hHbT5Fs, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazuCtLcvF = await Baz.new({from: accounts[0]});
		const intVaNCCSN = BigInt("414")
		const intZIkbatm = BigInt("-542")
		const intunq4Ab = BigInt("728")
		const intU6ZNQSt = BigInt("-1762")
		const intMo9PSR = BigInt("-1549")
		const intV5gFaWo = BigInt("1589")
		const intYMkK3wX = BigInt("-646")
		const intuXbODZ3 = BigInt("332")
		const inteNDe5qb = BigInt("946")
		const int256aR5HMub = await BazuCtLcvF.baz.call(intunq4Ab, intZIkbatm, intVaNCCSN, {from: accounts[1]});
		const int256X00iqMC = await BazuCtLcvF.baz.call(intV5gFaWo, intMo9PSR, intU6ZNQSt, {from: accounts[2]});
		const int2562NpAgt = await BazuCtLcvF.baz.call(inteNDe5qb, intuXbODZ3, intYMkK3wX, {from: accounts[1]});
		const boollUQ5uoU = await BazuCtLcvF.echidna_all_states.call({from: accounts[1]});

		assert.equal(boollUQ5uoU, true)
		assert.equal(int2562NpAgt, BigInt("3"))
		assert.equal(int256X00iqMC, BigInt("1"))
		assert.equal(int256aR5HMub, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazbRQZsKh = await Baz.new({from: accounts[4]});
		const intWXsziIj = BigInt("-654")
		const inth89qpZX = BigInt("596")
		const intHIwwzjJ = BigInt("687")
		const intLnrvjXp = BigInt("625")
		const intiIwDyE9 = BigInt("-1271")
		const inti4eWXgb = BigInt("-520")
		const intq4IJyEO = BigInt("335")
		const intbVUroLb = BigInt("-1495")
		const intP2408r1 = BigInt("1985")
		const intuekIh11 = BigInt("333")
		const intgU1GwWV = BigInt("518")
		const intOT6Yz52 = BigInt("1788")
		const int256uTDKM9L = await BazbRQZsKh.baz.call(intHIwwzjJ, inth89qpZX, intWXsziIj, {from: accounts[3]});
		const int256el7k6Tu = await BazbRQZsKh.baz.call(inti4eWXgb, intiIwDyE9, intLnrvjXp, {from: accounts[4]});
		const int256Og5SqN = await BazbRQZsKh.baz.call(intP2408r1, intbVUroLb, intq4IJyEO, {from: accounts[2]});
		const int256ecHI90 = await BazbRQZsKh.baz.call(intOT6Yz52, intgU1GwWV, intuekIh11, {from: accounts[2]});

		assert.equal(int256Og5SqN, BigInt("1"))
		assert.equal(int256ecHI90, BigInt("5"))
		assert.equal(int256el7k6Tu, BigInt("1"))
		assert.equal(int256uTDKM9L, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazbRQZsKh = await Baz.new({from: accounts[4]});
		const intsdnU1Vh = BigInt("-654")
		const intVth3sK = BigInt("596")
		const intaH6Xlh = BigInt("687")
		const intP0B7PBa = BigInt("-654")
		const intA8GDPHa = BigInt("2007")
		const intwhbApUc = BigInt("232")
		const intgUill2o = BigInt("625")
		const intCR7nLBC = BigInt("-1271")
		const intc4KH5Hp = BigInt("-520")
		const intOmJeCl9 = BigInt("335")
		const intSatpkV9 = BigInt("-1495")
		const intHCcmmb = BigInt("1985")
		const intlZ5fiqp = BigInt("-1445")
		const inta3rtlX0 = BigInt("518")
		const intnOE5oRW = BigInt("1788")
		const int256uTDKM9L = await BazbRQZsKh.baz.call(intaH6Xlh, intVth3sK, intsdnU1Vh, {from: accounts[3]});
		const int256MTKlGLY = await BazbRQZsKh.baz.call(intwhbApUc, intA8GDPHa, intP0B7PBa, {from: "0x0000000000000000000000000000000000000001"});
		const int256el7k6Tu = await BazbRQZsKh.baz.call(intc4KH5Hp, intCR7nLBC, intgUill2o, {from: accounts[4]});
		const int256Og5SqN = await BazbRQZsKh.baz.call(intHCcmmb, intSatpkV9, intOmJeCl9, {from: accounts[2]});
		const int256ecHI90 = await BazbRQZsKh.baz.call(intnOE5oRW, inta3rtlX0, intlZ5fiqp, {from: accounts[2]});

		assert.equal(int256MTKlGLY, BigInt("4"))
		assert.equal(int256Og5SqN, BigInt("1"))
		assert.equal(int256ecHI90, BigInt("3"))
		assert.equal(int256el7k6Tu, BigInt("1"))
		assert.equal(int256uTDKM9L, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazrQso5HI = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intW29J6Og = BigInt("-726")
		const intqEKUO76 = BigInt("858")
		const intAOSSKgH = BigInt("307")
		const intBHvrx2v = BigInt("-572")
		const intxSC85i = BigInt("1105")
		const intFCKeNPp = BigInt("-418")
		const inteqwxsvU = BigInt("304")
		const inttbuoiTV = BigInt("851")
		const intSjIRgAt = BigInt("-1552")
		const int256UdzmOW5 = await BazrQso5HI.baz.call(intAOSSKgH, intqEKUO76, intW29J6Og, {from: accounts[5]});
		const int256NQxc6nc = await BazrQso5HI.baz.call(intFCKeNPp, intxSC85i, intBHvrx2v, {from: accounts[0]});
		const boolUABNfnm = await BazrQso5HI.echidna_all_states.call({from: accounts[0]});
		const int256WrMneB5 = await BazrQso5HI.baz.call(intSjIRgAt, inttbuoiTV, inteqwxsvU, {from: accounts[1]});
	});

	it('test for Baz', async () => {
		const Bazoe0eeRw = await Baz.new({from: accounts[5]});
		const intPFxgWhI = BigInt("-1436")
		const intqoJbtCP = BigInt("-1060")
		const intwYs10ZF = BigInt("956")
		const intchgjVQ0 = BigInt("2014")
		const intepB1AFO = BigInt("1392")
		const int89tCLW = BigInt("-774")
		const intMkOfTUl = BigInt("-1706")
		const into9NNq6y = BigInt("378")
		const intz9JHPbK = BigInt("42")
		const int256pXTXSRO = await Bazoe0eeRw.baz.call(intwYs10ZF, intqoJbtCP, intPFxgWhI, {from: accounts[4]});
		const booloRqx3Ee = await Bazoe0eeRw.echidna_all_states.call({from: accounts[4]});
		const int256rVuacP7 = await Bazoe0eeRw.baz.call(int89tCLW, intepB1AFO, intchgjVQ0, {from: accounts[3]});
		const booloSYGL9T = await Bazoe0eeRw.echidna_all_states.call({from: accounts[4]});
		const boolq4ONU48 = await Bazoe0eeRw.echidna_all_states.call({from: accounts[0]});
		const boolVbu6bc8 = await Bazoe0eeRw.echidna_all_states.call({from: accounts[3]});
		const int256l4nbYKj = await Bazoe0eeRw.baz.call(intz9JHPbK, into9NNq6y, intMkOfTUl, {from: accounts[0]});

		assert.equal(boolVbu6bc8, true)
		assert.equal(booloRqx3Ee, true)
		assert.equal(booloSYGL9T, true)
		assert.equal(boolq4ONU48, true)
		assert.equal(int256l4nbYKj, BigInt("2"))
		assert.equal(int256pXTXSRO, BigInt("1"))
		assert.equal(int256rVuacP7, BigInt("5"))
	});
})