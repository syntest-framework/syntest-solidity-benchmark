const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazuBwXhr5 = await Baz.new({from: accounts[3]});
		const boolyDULHso = await BazuBwXhr5.echidna_all_states.call({from: accounts[4]});
		const boolNFdrNQh = await BazuBwXhr5.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolNFdrNQh, true)
		assert.equal(boolyDULHso, true)
	});

	it('test for Baz', async () => {
		const Bazg6rseDv = await Baz.new({from: accounts[0]});
		const intZHN7HUo = BigInt("1828")
		const intvl2JcuN = BigInt("-744")
		const intdIn2vW = BigInt("-569")
		const intMGY0nbF = BigInt("-1560")
		const intsahkjPx = BigInt("-686")
		const intLCHNsaU = BigInt("-1734")
		const intQsv5vyl = BigInt("-1041")
		const intgAd58Fo = BigInt("1964")
		const intsvUtI5g = BigInt("-995")
		const intYDsSFlb = BigInt("912")
		const intbqU4JsW = BigInt("1590")
		const intSvtksI9 = BigInt("1901")
		const int256zs8pxuZ = await Bazg6rseDv.baz.call(intdIn2vW, intvl2JcuN, intZHN7HUo, {from: accounts[1]});
		const int256TbFVaE5 = await Bazg6rseDv.baz.call(intLCHNsaU, intsahkjPx, intMGY0nbF, {from: accounts[1]});
		const int256I4tmLFl = await Bazg6rseDv.baz.call(intsvUtI5g, intgAd58Fo, intQsv5vyl, {from: accounts[4]});
		const int256svxn0Ad = await Bazg6rseDv.baz.call(intSvtksI9, intbqU4JsW, intYDsSFlb, {from: accounts[1]});
		const boolh1Ls467 = await Bazg6rseDv.echidna_all_states.call({from: accounts[4]});
		const boolR6k9yZ = await Bazg6rseDv.echidna_all_states.call({from: accounts[3]});

		assert.equal(boolR6k9yZ, true)
		assert.equal(boolh1Ls467, true)
		assert.equal(int256I4tmLFl, BigInt("4"))
		assert.equal(int256TbFVaE5, BigInt("1"))
		assert.equal(int256svxn0Ad, BigInt("5"))
		assert.equal(int256zs8pxuZ, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazFpRdYww = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intnya4OFs = BigInt("2043")
		const intDRkk9rp = BigInt("531")
		const intEckWf7 = BigInt("-1529")
		const int256fRFuVwP = await BazFpRdYww.baz.call(intEckWf7, intDRkk9rp, intnya4OFs, {from: accounts[3]});
		const boolhd5q9Qr = await BazFpRdYww.echidna_all_states.call({from: accounts[3]});
		const booli15oLBI = await BazFpRdYww.echidna_all_states.call({from: accounts[1]});
	});

	it('test for Baz', async () => {
		const BazJ1fY1DU = await Baz.new({from: accounts[4]});
		const inthb76amc = BigInt("-481")
		const intTwHj0Oa = BigInt("-160")
		const intYNXUBdX = BigInt("1615")
		const intNdQCTe = BigInt("965")
		const intlARgfFH = BigInt("1603")
		const intgoboeA = BigInt("-906")
		const intYalj8K4 = BigInt("-1875")
		const intp2D0va = BigInt("418")
		const intlS1c2Tw = BigInt("898")
		const int256MO3O4gg = await BazJ1fY1DU.baz.call(intYNXUBdX, intTwHj0Oa, inthb76amc, {from: accounts[0]});
		const boolNdmM7D = await BazJ1fY1DU.echidna_all_states.call({from: accounts[3]});
		const boolZW4IlDO = await BazJ1fY1DU.echidna_all_states.call({from: accounts[4]});
		const boolCc9jJ5g = await BazJ1fY1DU.echidna_all_states.call({from: accounts[3]});
		const int2562w3Rg1 = await BazJ1fY1DU.baz.call(intgoboeA, intlARgfFH, intNdQCTe, {from: accounts[2]});
		const int256oCPezkw = await BazJ1fY1DU.baz.call(intlS1c2Tw, intp2D0va, intYalj8K4, {from: accounts[1]});
		const boolkrQMejS = await BazJ1fY1DU.echidna_all_states.call({from: accounts[3]});

		assert.equal(boolCc9jJ5g, true)
		assert.equal(boolNdmM7D, true)
		assert.equal(boolZW4IlDO, true)
		assert.equal(boolkrQMejS, true)
		assert.equal(int2562w3Rg1, BigInt("5"))
		assert.equal(int256MO3O4gg, BigInt("1"))
		assert.equal(int256oCPezkw, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazJ1fY1DU = await Baz.new({from: accounts[4]});
		const intokf30Yv = BigInt("-885")
		const intlajPOE7 = BigInt("14")
		const intK19rwec = BigInt("42")
		const int256VjAgh4D = await BazJ1fY1DU.baz.call(intK19rwec, intlajPOE7, intokf30Yv, {from: accounts[0]});

		assert.equal(int256VjAgh4D, BigInt("2"))
	});
})