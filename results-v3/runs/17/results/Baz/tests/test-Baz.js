const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazWSpVOCw = await Baz.new({from: accounts[2]});
		const inteBgEl2J = BigInt("-340")
		const intB7zrqii = BigInt("1367")
		const intkmaLaJW = BigInt("-574")
		const intnpVOJYY = BigInt("610")
		const intCtvcuTR = BigInt("-672")
		const intBDSUKNI = BigInt("654")
		const int256QHWNKAt = await BazWSpVOCw.baz.call(intkmaLaJW, intB7zrqii, inteBgEl2J, {from: accounts[4]});
		const int256RY5Hw6y = await BazWSpVOCw.baz.call(intBDSUKNI, intCtvcuTR, intnpVOJYY, {from: accounts[2]});
		const boolsyn4unn = await BazWSpVOCw.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolsyn4unn, true)
		assert.equal(int256QHWNKAt, BigInt("4"))
		assert.equal(int256RY5Hw6y, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Bazd5DZvu6 = await Baz.new({from: accounts[1]});
		const intorokwQ9 = BigInt("-560")
		const intzpIaKoe = BigInt("-1813")
		const intSooF3b9 = BigInt("-737")
		const intBjg04mx = BigInt("1870")
		const intLV1kpWA = BigInt("-1631")
		const intt84ZDy = BigInt("489")
		const int7uJYxJ = BigInt("-648")
		const intvyQTQGB = BigInt("-188")
		const intIA1INgO = BigInt("-1180")
		const boolCy34GTK = await Bazd5DZvu6.echidna_all_states.call({from: accounts[1]});
		const int256UxyqngO = await Bazd5DZvu6.baz.call(intSooF3b9, intzpIaKoe, intorokwQ9, {from: accounts[4]});
		const boolKmXSaQ = await Bazd5DZvu6.echidna_all_states.call({from: accounts[3]});
		const int256MibV2Oc = await Bazd5DZvu6.baz.call(intt84ZDy, intLV1kpWA, intBjg04mx, {from: accounts[4]});
		const int256GWgVdGY = await Bazd5DZvu6.baz.call(intIA1INgO, intvyQTQGB, int7uJYxJ, {from: accounts[0]});

		assert.equal(boolCy34GTK, true)
		assert.equal(boolKmXSaQ, true)
		assert.equal(int256GWgVdGY, BigInt("1"))
		assert.equal(int256MibV2Oc, BigInt("5"))
		assert.equal(int256UxyqngO, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazZ3cXolF = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intYD73vrJ = BigInt("-1679")
		const intSmSsAn = BigInt("1578")
		const intkJywuFh = BigInt("-707")
		const intjGkyx6t = BigInt("-680")
		const intIA81G08 = BigInt("-1831")
		const intNeZgULd = BigInt("1274")
		const int256adlRay = await BazZ3cXolF.baz.call(intkJywuFh, intSmSsAn, intYD73vrJ, {from: accounts[4]});
		const boolhgLSw1n = await BazZ3cXolF.echidna_all_states.call({from: accounts[5]});
		const int256UcaBlq = await BazZ3cXolF.baz.call(intNeZgULd, intIA81G08, intjGkyx6t, {from: accounts[0]});
		const boolmqF8anY = await BazZ3cXolF.echidna_all_states.call({from: accounts[2]});
	});

	it('test for Baz', async () => {
		const BazYEBMS1 = await Baz.new({from: accounts[2]});
		const intyXCU7VG = BigInt("-1765")
		const intTFVWA0e = BigInt("1636")
		const intNQmHC4h = BigInt("-614")
		const boolE3bqRx = await BazYEBMS1.echidna_all_states.call({from: accounts[0]});
		const int256JIpafF = await BazYEBMS1.baz.call(intNQmHC4h, intTFVWA0e, intyXCU7VG, {from: accounts[2]});
		const boolRHgFG5W = await BazYEBMS1.echidna_all_states.call({from: accounts[2]});

		assert.equal(boolE3bqRx, true)
		assert.equal(boolRHgFG5W, true)
		assert.equal(int256JIpafF, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazYEBMS1 = await Baz.new({from: accounts[2]});
		const intG71DbT2 = BigInt("-1922")
		const intAr3BZA = BigInt("1917")
		const intY4y1JoJ = BigInt("42")
		const int256KEDUHYL = await BazYEBMS1.baz.call(intY4y1JoJ, intAr3BZA, intG71DbT2, {from: accounts[0]});
		const boolTI3sKT9 = await BazYEBMS1.echidna_all_states.call({from: accounts[4]});
		const boolNK7ZL5p = await BazYEBMS1.echidna_all_states.call({from: accounts[0]});
		const boolaXXomWp = await BazYEBMS1.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolNK7ZL5p, true)
		assert.equal(boolTI3sKT9, true)
		assert.equal(boolaXXomWp, true)
		assert.equal(int256KEDUHYL, BigInt("2"))
	});
})