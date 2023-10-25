const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazercWsCW = await Baz.new({from: accounts[1]});
		const intdEn6yRw = BigInt("1970")
		const intmG60KWc = BigInt("-1576")
		const int7W5SkN = BigInt("1669")
		const intivU6WlA = BigInt("-1058")
		const intUASn1g = BigInt("1346")
		const intQYXZYZq = BigInt("74")
		const intznZTozu = BigInt("-1963")
		const intdy8uS1W = BigInt("980")
		const intLLBnJ6M = BigInt("-959")
		const intqLS4vAQ = BigInt("1944")
		const intt2Azz4y = BigInt("-937")
		const intRKnAqt2 = BigInt("-47")
		const int256GRW8j7q = await BazercWsCW.baz.call(int7W5SkN, intmG60KWc, intdEn6yRw, {from: accounts[2]});
		const boolXEhjUTb = await BazercWsCW.echidna_all_states.call({from: accounts[4]});
		const int256oSG9J1c = await BazercWsCW.baz.call(intQYXZYZq, intUASn1g, intivU6WlA, {from: accounts[1]});
		const int256G7mcaCx = await BazercWsCW.baz.call(intLLBnJ6M, intdy8uS1W, intznZTozu, {from: "0x0000000000000000000000000000000000000001"});
		const booloSQsrts = await BazercWsCW.echidna_all_states.call({from: accounts[0]});
		const int256iTKQkGi = await BazercWsCW.baz.call(intRKnAqt2, intt2Azz4y, intqLS4vAQ, {from: accounts[0]});

		assert.equal(boolXEhjUTb, true)
		assert.equal(booloSQsrts, true)
		assert.equal(int256G7mcaCx, BigInt("3"))
		assert.equal(int256GRW8j7q, BigInt("5"))
		assert.equal(int256iTKQkGi, BigInt("5"))
		assert.equal(int256oSG9J1c, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazZo7BkIx = await Baz.new({from: accounts[5]});
		const intnVh3cDY = BigInt("1215")
		const intUDFj1CX = BigInt("-2000")
		const intkcM9O2Q = BigInt("-134")
		const intELW6M1q = BigInt("1730")
		const intlNoZqtZ = BigInt("-1547")
		const intdq1kOA2 = BigInt("1866")
		const int256aWGE8HZ = await BazZo7BkIx.baz.call(intkcM9O2Q, intUDFj1CX, intnVh3cDY, {from: accounts[4]});
		const boolCTi2fEe = await BazZo7BkIx.echidna_all_states.call({from: accounts[2]});
		const boolWqeLhe = await BazZo7BkIx.echidna_all_states.call({from: accounts[1]});
		const int256CBmj1vG = await BazZo7BkIx.baz.call(intdq1kOA2, intlNoZqtZ, intELW6M1q, {from: accounts[0]});

		assert.equal(boolCTi2fEe, true)
		assert.equal(boolWqeLhe, true)
		assert.equal(int256CBmj1vG, BigInt("5"))
		assert.equal(int256aWGE8HZ, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazLnHaZxt = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intuFhzZzn = BigInt("1735")
		const intux2Fivc = BigInt("1297")
		const inth65g6zc = BigInt("-1747")
		const boolp2G01W0 = await BazLnHaZxt.echidna_all_states.call({from: accounts[4]});
		const boolEBzV5JC = await BazLnHaZxt.echidna_all_states.call({from: accounts[0]});
		const int256jKDST9Y = await BazLnHaZxt.baz.call(inth65g6zc, intux2Fivc, intuFhzZzn, {from: accounts[0]});
		const boolZ2ldfu1 = await BazLnHaZxt.echidna_all_states.call({from: accounts[3]});
	});

	it('test for Baz', async () => {
		const BazGwFa6f7 = await Baz.new({from: accounts[4]});
		const intWAbbnaL = BigInt("-1401")
		const into632RI = BigInt("752")
		const intdxN2Ror = BigInt("42")
		const int256x5KZXsL = await BazGwFa6f7.baz.call(intdxN2Ror, into632RI, intWAbbnaL, {from: accounts[1]});

		assert.equal(int256x5KZXsL, BigInt("2"))
	});
})