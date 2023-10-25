const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazbQ8KvN = await Baz.new({from: accounts[1]});
		const intGNbWWB = BigInt("-282")
		const intk1jyGYp = BigInt("-561")
		const intEnamdR0 = BigInt("-1475")
		const intFTd5iZo = BigInt("1250")
		const intmFEXykO = BigInt("-1429")
		const intvrx858G = BigInt("161")
		const intIdrOh7m = BigInt("676")
		const intw21zwk = BigInt("-718")
		const intHYfD1gY = BigInt("781")
		const boolM6kAXi8 = await BazbQ8KvN.echidna_all_states.call({from: accounts[4]});
		const boolDfE6Iw9 = await BazbQ8KvN.echidna_all_states.call({from: accounts[3]});
		const boolhsRqKk = await BazbQ8KvN.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256ONezb2H = await BazbQ8KvN.baz.call(intEnamdR0, intk1jyGYp, intGNbWWB, {from: accounts[3]});
		const int256BJqN81x = await BazbQ8KvN.baz.call(intvrx858G, intmFEXykO, intFTd5iZo, {from: accounts[4]});
		const int256CxNm3EW = await BazbQ8KvN.baz.call(intHYfD1gY, intw21zwk, intIdrOh7m, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDfE6Iw9, true)
		assert.equal(boolM6kAXi8, true)
		assert.equal(boolhsRqKk, true)
		assert.equal(int256BJqN81x, BigInt("1"))
		assert.equal(int256CxNm3EW, BigInt("1"))
		assert.equal(int256ONezb2H, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Baz7gzYi7 = await Baz.new({from: accounts[1]});
		const intLrGmcdJ = BigInt("1409")
		const intGK1S6ti = BigInt("-447")
		const intpnrBmKb = BigInt("-1458")
		const intRzpZ0z0 = BigInt("1152")
		const intzGAv4N = BigInt("-1313")
		const intj3c7fCF = BigInt("-890")
		const boolivgMMeb = await Baz7gzYi7.echidna_all_states.call({from: accounts[5]});
		const int256m4JGMJM = await Baz7gzYi7.baz.call(intpnrBmKb, intGK1S6ti, intLrGmcdJ, {from: accounts[0]});
		const int256LuYsciu = await Baz7gzYi7.baz.call(intj3c7fCF, intzGAv4N, intRzpZ0z0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolivgMMeb, true)
		assert.equal(int256LuYsciu, BigInt("1"))
		assert.equal(int256m4JGMJM, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazZYcrdao = await Baz.new({from: accounts[0]});
		const intUTcF2w = BigInt("-1094")
		const intrM9MHp = BigInt("1282")
		const intSWCaYle = BigInt("1174")
		const intv3HADS = BigInt("1117")
		const inteV09lbb = BigInt("766")
		const intiyNks6e = BigInt("-978")
		const intntQvraU = BigInt("-1483")
		const intrBnOiZJ = BigInt("-1422")
		const ints3ekrBR = BigInt("1099")
		const int256qtXIYFW = await BazZYcrdao.baz.call(intSWCaYle, intrM9MHp, intUTcF2w, {from: accounts[1]});
		const int256aUaIFw1 = await BazZYcrdao.baz.call(intiyNks6e, inteV09lbb, intv3HADS, {from: accounts[2]});
		const boolttTFj0C = await BazZYcrdao.echidna_all_states.call({from: accounts[2]});
		const boolzOMgM0P = await BazZYcrdao.echidna_all_states.call({from: accounts[3]});
		const int256dLsOD93 = await BazZYcrdao.baz.call(ints3ekrBR, intrBnOiZJ, intntQvraU, {from: accounts[4]});

		assert.equal(boolttTFj0C, true)
		assert.equal(boolzOMgM0P, true)
		assert.equal(int256aUaIFw1, BigInt("5"))
		assert.equal(int256dLsOD93, BigInt("1"))
		assert.equal(int256qtXIYFW, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazvIGtmNs = await Baz.new({from: accounts[1]});
		const intAHp9Xnj = BigInt("-1068")
		const intOT9aznW = BigInt("-689")
		const intecVwZA8 = BigInt("-2013")
		const intXciINzD = BigInt("179")
		const intlcYmqQy = BigInt("-1664")
		const int8gAs4Q = BigInt("-138")
		const intSplQrD = BigInt("-727")
		const intCyDHoE5 = BigInt("579")
		const intwiKEUPI = BigInt("-67")
		const boolkUsQiNp = await BazvIGtmNs.echidna_all_states.call({from: accounts[2]});
		const boolUSEYyDH = await BazvIGtmNs.echidna_all_states.call({from: accounts[2]});
		const int256iVLONNP = await BazvIGtmNs.baz.call(intecVwZA8, intOT9aznW, intAHp9Xnj, {from: accounts[3]});
		const int256a9gTekG = await BazvIGtmNs.baz.call(int8gAs4Q, intlcYmqQy, intXciINzD, {from: accounts[4]});
		const int256fUSHcl6 = await BazvIGtmNs.baz.call(intwiKEUPI, intCyDHoE5, intSplQrD, {from: accounts[2]});

		assert.equal(boolUSEYyDH, true)
		assert.equal(boolkUsQiNp, true)
		assert.equal(int256a9gTekG, BigInt("1"))
		assert.equal(int256fUSHcl6, BigInt("3"))
		assert.equal(int256iVLONNP, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazbLwjRW5 = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intaZjBRt = BigInt("-995")
		const intnhHRcjn = BigInt("-402")
		const intdkF5wex = BigInt("365")
		const intB736syv = BigInt("-255")
		const intVQViIvI = BigInt("89")
		const intqKP2ijH = BigInt("-284")
		const intlGjAYG0 = BigInt("-259")
		const intMazNfWS = BigInt("-1805")
		const intemn7Qfa = BigInt("196")
		const int256taSpOAq = await BazbLwjRW5.baz.call(intdkF5wex, intnhHRcjn, intaZjBRt, {from: accounts[4]});
		const boolsXrnNR = await BazbLwjRW5.echidna_all_states.call({from: accounts[2]});
		const int256aSu7TGL = await BazbLwjRW5.baz.call(intqKP2ijH, intVQViIvI, intB736syv, {from: accounts[1]});
		const int256H1idZAb = await BazbLwjRW5.baz.call(intemn7Qfa, intMazNfWS, intlGjAYG0, {from: accounts[4]});
		const boolaUoTb7j = await BazbLwjRW5.echidna_all_states.call({from: accounts[4]});
	});

	it('test for Baz', async () => {
		const BazvIGtmNs = await Baz.new({from: accounts[1]});
		const intTCHMKGV = BigInt("1472")
		const intcCDvIy9 = BigInt("-32")
		const intOBt2aVA = BigInt("-1245")
		const intCZBu4qe = BigInt("-2006")
		const intUTDHDex = BigInt("1358")
		const intl20wNQk = BigInt("42")
		const int256LLhuQFX = await BazvIGtmNs.baz.call(intOBt2aVA, intcCDvIy9, intTCHMKGV, {from: accounts[0]});
		const int256ZELKtZC = await BazvIGtmNs.baz.call(intl20wNQk, intUTDHDex, intCZBu4qe, {from: accounts[2]});
		const boolzA2wS2 = await BazvIGtmNs.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolzA2wS2, true)
		assert.equal(int256LLhuQFX, BigInt("5"))
		assert.equal(int256ZELKtZC, BigInt("2"))
	});
})