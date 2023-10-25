const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazhO97N4e = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const boolcItGBo6 = await BazhO97N4e.echidna_all_states.call({from: accounts[4]});
		const boolqFQnza7 = await BazhO97N4e.echidna_all_states.call({from: accounts[2]});
		const boolneytKGn = await BazhO97N4e.echidna_all_states.call({from: accounts[2]});
	});

	it('test for Baz', async () => {
		const BazaLdWoCx = await Baz.new({from: accounts[3]});
		const intvtU5PlC = BigInt("12")
		const intZt2YWn = BigInt("-451")
		const intr4CbBXO = BigInt("1186")
		const intt1vXEy2 = BigInt("46")
		const intReXLPn = BigInt("-1883")
		const intuleZvQn = BigInt("138")
		const intqSvStNm = BigInt("-90")
		const intgAi1Yi = BigInt("-2041")
		const intFd0lam4 = BigInt("580")
		const intxL3Ajpl = BigInt("-1285")
		const intj2LsVEg = BigInt("-752")
		const intnOPtjVG = BigInt("-975")
		const int256qsffg5N = await BazaLdWoCx.baz.call(intr4CbBXO, intZt2YWn, intvtU5PlC, {from: accounts[1]});
		const boolIu1Az8Y = await BazaLdWoCx.echidna_all_states.call({from: accounts[4]});
		const int256lPwKatX = await BazaLdWoCx.baz.call(intuleZvQn, intReXLPn, intt1vXEy2, {from: accounts[0]});
		const int256lWXcqwo = await BazaLdWoCx.baz.call(intFd0lam4, intgAi1Yi, intqSvStNm, {from: accounts[4]});
		const int256onflUIA = await BazaLdWoCx.baz.call(intnOPtjVG, intj2LsVEg, intxL3Ajpl, {from: accounts[2]});
		const boolufUySan = await BazaLdWoCx.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolIu1Az8Y, true)
		assert.equal(boolufUySan, true)
		assert.equal(int256lPwKatX, BigInt("1"))
		assert.equal(int256lWXcqwo, BigInt("1"))
		assert.equal(int256onflUIA, BigInt("1"))
		assert.equal(int256qsffg5N, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazGVFSaCy = await Baz.new({from: accounts[0]});
		const intTTr8UXG = BigInt("916")
		const ints1Zagek = BigInt("-1102")
		const intBLWUpCj = BigInt("-437")
		const intjBPdKjo = BigInt("1535")
		const intfoyw7NS = BigInt("-1115")
		const intNwYJ7vF = BigInt("-319")
		const boolE4H03p = await BazGVFSaCy.echidna_all_states.call({from: accounts[5]});
		const boolAXhyC4P = await BazGVFSaCy.echidna_all_states.call({from: accounts[4]});
		const booljGL598Z = await BazGVFSaCy.echidna_all_states.call({from: accounts[4]});
		const int256UvSRSI = await BazGVFSaCy.baz.call(intBLWUpCj, ints1Zagek, intTTr8UXG, {from: accounts[2]});
		const boolLM0lkK = await BazGVFSaCy.echidna_all_states.call({from: accounts[2]});
		const int256bXvCDyL = await BazGVFSaCy.baz.call(intNwYJ7vF, intfoyw7NS, intjBPdKjo, {from: accounts[2]});

		assert.equal(boolAXhyC4P, true)
		assert.equal(boolE4H03p, true)
		assert.equal(boolLM0lkK, true)
		assert.equal(booljGL598Z, true)
		assert.equal(int256UvSRSI, BigInt("1"))
		assert.equal(int256bXvCDyL, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazxzTFGOz = await Baz.new({from: accounts[2]});
		const intqMfqvS7 = BigInt("-1469")
		const intr8XlVQ0 = BigInt("1130")
		const intJbdu6yM = BigInt("165")
		const intnVO3Zzj = BigInt("-45")
		const intnJS47wF = BigInt("950")
		const intJ39boO = BigInt("-176")
		const intwzXMEr9 = BigInt("-332")
		const intKUC8ta = BigInt("1672")
		const intAJfQcbH = BigInt("1768")
		const int256pgpO0QD = await BazxzTFGOz.baz.call(intJbdu6yM, intr8XlVQ0, intqMfqvS7, {from: accounts[4]});
		const int256IkGGx9D = await BazxzTFGOz.baz.call(intJ39boO, intnJS47wF, intnVO3Zzj, {from: accounts[0]});
		const boolcbu7N8e = await BazxzTFGOz.echidna_all_states.call({from: accounts[1]});
		const boolEWtnlF = await BazxzTFGOz.echidna_all_states.call({from: accounts[2]});
		const int256FreExoM = await BazxzTFGOz.baz.call(intAJfQcbH, intKUC8ta, intwzXMEr9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEWtnlF, true)
		assert.equal(boolcbu7N8e, true)
		assert.equal(int256FreExoM, BigInt("4"))
		assert.equal(int256IkGGx9D, BigInt("4"))
		assert.equal(int256pgpO0QD, BigInt("3"))
	});
})