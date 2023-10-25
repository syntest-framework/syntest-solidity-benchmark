const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazLrn6TpT = await Baz.new({from: accounts[5]});
		const intaQsoQw = BigInt("702")
		const intZN7iAlJ = BigInt("1889")
		const inthEfVN0S = BigInt("-1713")
		const int256vsLCtdZ = await BazLrn6TpT.baz.call(inthEfVN0S, intZN7iAlJ, intaQsoQw, {from: accounts[4]});
		const boolUJFcvlo = await BazLrn6TpT.echidna_all_states.call({from: accounts[2]});

		assert.equal(boolUJFcvlo, true)
		assert.equal(int256vsLCtdZ, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazWXZtoUJ = await Baz.new({from: accounts[2]});
		const intTbV42V = BigInt("228")
		const intQsR5HKj = BigInt("-2015")
		const intjfeeK0L = BigInt("-159")
		const intW0K9pCJ = BigInt("-1561")
		const intt8WyHwU = BigInt("1510")
		const intLvwIJGt = BigInt("-649")
		const intTpSFmrY = BigInt("510")
		const intcOuq2kM = BigInt("1890")
		const intF4PAatu = BigInt("-1603")
		const intWykWqJ = BigInt("848")
		const intInVonIi = BigInt("585")
		const int6dRMGD = BigInt("358")
		const intxZQ69Lk = BigInt("-945")
		const int7EtrrO = BigInt("-789")
		const intmdWx41a = BigInt("-1048")
		const int256AxGFE6s = await BazWXZtoUJ.baz.call(intjfeeK0L, intQsR5HKj, intTbV42V, {from: accounts[0]});
		const int256TQHkkDL = await BazWXZtoUJ.baz.call(intLvwIJGt, intt8WyHwU, intW0K9pCJ, {from: accounts[2]});
		const int256BQDo01k = await BazWXZtoUJ.baz.call(intF4PAatu, intcOuq2kM, intTpSFmrY, {from: accounts[3]});
		const int256GQ2Vu61 = await BazWXZtoUJ.baz.call(int6dRMGD, intInVonIi, intWykWqJ, {from: accounts[3]});
		const int256nzOidbE = await BazWXZtoUJ.baz.call(intmdWx41a, int7EtrrO, intxZQ69Lk, {from: accounts[0]});
		const boolBDjLXpK = await BazWXZtoUJ.echidna_all_states.call({from: accounts[2]});

		assert.equal(boolBDjLXpK, true)
		assert.equal(int256AxGFE6s, BigInt("1"))
		assert.equal(int256BQDo01k, BigInt("5"))
		assert.equal(int256GQ2Vu61, BigInt("5"))
		assert.equal(int256TQHkkDL, BigInt("3"))
		assert.equal(int256nzOidbE, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazUxsXWXz = await Baz.new({from: accounts[0]});
		const intX4AAvs = BigInt("-383")
		const intqD8pRwP = BigInt("574")
		const intR1D5SjZ = BigInt("1188")
		const intwq5soM = BigInt("-1395")
		const intyDHmsT = BigInt("-1386")
		const intG5v1uHb = BigInt("-2008")
		const int256xIVMcuI = await BazUxsXWXz.baz.call(intR1D5SjZ, intqD8pRwP, intX4AAvs, {from: accounts[2]});
		const boolDepEiJQ = await BazUxsXWXz.echidna_all_states.call({from: accounts[2]});
		const int256Tnzdrt5 = await BazUxsXWXz.baz.call(intG5v1uHb, intyDHmsT, intwq5soM, {from: accounts[3]});

		assert.equal(boolDepEiJQ, true)
		assert.equal(int256Tnzdrt5, BigInt("1"))
		assert.equal(int256xIVMcuI, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazyySeFqM = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intFMKM0YS = BigInt("1339")
		const intbKS3Mhf = BigInt("-1568")
		const inteP2qUIO = BigInt("-1051")
		const intL8LJeV = BigInt("-1414")
		const intgNbFCe = BigInt("796")
		const intOiCFPP = BigInt("-1056")
		const booly6T72Yj = await BazyySeFqM.echidna_all_states.call({from: accounts[3]});
		const boolwgK2WCw = await BazyySeFqM.echidna_all_states.call({from: accounts[4]});
		const int256OnsLDY = await BazyySeFqM.baz.call(inteP2qUIO, intbKS3Mhf, intFMKM0YS, {from: accounts[5]});
		const int256psOpgug = await BazyySeFqM.baz.call(intOiCFPP, intgNbFCe, intL8LJeV, {from: accounts[5]});
		const booljTibtxt = await BazyySeFqM.echidna_all_states.call({from: accounts[1]});
	});

	it('test for Baz', async () => {
		const Baz9zNKqK = await Baz.new({from: accounts[1]});
		const intpbQ8oA1 = BigInt("-600")
		const intuDGFgdx = BigInt("445")
		const intvY7rcoA = BigInt("42")
		const int256dwcJEEq = await Baz9zNKqK.baz.call(intvY7rcoA, intuDGFgdx, intpbQ8oA1, {from: accounts[3]});

		assert.equal(int256dwcJEEq, BigInt("2"))
	});
})