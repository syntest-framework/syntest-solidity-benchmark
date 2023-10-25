const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazAKNKcW = await Baz.new({from: accounts[0]});
		const intnjZy21I = BigInt("759")
		const intKkGbzby = BigInt("-827")
		const intSyhSW0l = BigInt("-2023")
		const intBvRMsO6 = BigInt("1073")
		const intlM9wr70 = BigInt("-1628")
		const intxRE88Re = BigInt("-1029")
		const intY871lNf = BigInt("927")
		const intkBTfDdu = BigInt("-941")
		const intZk7R9E = BigInt("1760")
		const int256RBW1LXq = await BazAKNKcW.baz.call(intSyhSW0l, intKkGbzby, intnjZy21I, {from: "0x0000000000000000000000000000000000000001"});
		const int256FOTRm4A = await BazAKNKcW.baz.call(intxRE88Re, intlM9wr70, intBvRMsO6, {from: accounts[0]});
		const boolFmO6ZHh = await BazAKNKcW.echidna_all_states.call({from: accounts[1]});
		const booljLLtB0J = await BazAKNKcW.echidna_all_states.call({from: accounts[5]});
		const int256IAzvzas = await BazAKNKcW.baz.call(intZk7R9E, intkBTfDdu, intY871lNf, {from: accounts[3]});

		assert.equal(boolFmO6ZHh, true)
		assert.equal(booljLLtB0J, true)
		assert.equal(int256FOTRm4A, BigInt("1"))
		assert.equal(int256IAzvzas, BigInt("1"))
		assert.equal(int256RBW1LXq, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazJx7OYV = await Baz.new({from: accounts[4]});
		const intWAr1Y3q = BigInt("-979")
		const intwhDwx7t = BigInt("-579")
		const intN4NM0eF = BigInt("-1084")
		const intipanLp = BigInt("-1454")
		const intJrVHuRp = BigInt("-1131")
		const intBFsXOAA = BigInt("1064")
		const inthNVaO58 = BigInt("1101")
		const intElywTUE = BigInt("889")
		const intx6E3dDa = BigInt("-197")
		const boolNRmuRIo = await BazJx7OYV.echidna_all_states.call({from: accounts[4]});
		const int256Eofahva = await BazJx7OYV.baz.call(intN4NM0eF, intwhDwx7t, intWAr1Y3q, {from: accounts[4]});
		const int256F0QWNdC = await BazJx7OYV.baz.call(intBFsXOAA, intJrVHuRp, intipanLp, {from: "0x0000000000000000000000000000000000000001"});
		const int256Fps6Ik = await BazJx7OYV.baz.call(intx6E3dDa, intElywTUE, inthNVaO58, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNRmuRIo, true)
		assert.equal(int256Eofahva, BigInt("1"))
		assert.equal(int256F0QWNdC, BigInt("1"))
		assert.equal(int256Fps6Ik, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazdRRpMkp = await Baz.new({from: accounts[5]});
		const intil585XN = BigInt("-461")
		const intd1wizqc = BigInt("-1366")
		const intajwehCw = BigInt("-1035")
		const inttto0p4w = BigInt("956")
		const intv2q3Ay1 = BigInt("1328")
		const intYRLN89 = BigInt("504")
		const intM2brLkW = BigInt("-542")
		const intxaK1vWM = BigInt("1521")
		const intyJTa5kv = BigInt("800")
		const int256wG7xlMB = await BazdRRpMkp.baz.call(intajwehCw, intd1wizqc, intil585XN, {from: accounts[4]});
		const int256mXm33RQ = await BazdRRpMkp.baz.call(intYRLN89, intv2q3Ay1, inttto0p4w, {from: accounts[5]});
		const int256lg1RqFK = await BazdRRpMkp.baz.call(intyJTa5kv, intxaK1vWM, intM2brLkW, {from: accounts[1]});
		const boolwbUXMl = await BazdRRpMkp.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolwbUXMl, true)
		assert.equal(int256lg1RqFK, BigInt("4"))
		assert.equal(int256mXm33RQ, BigInt("5"))
		assert.equal(int256wG7xlMB, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Bazu6pCKbm = await Baz.new({from: accounts[2]});
		const intPNKRZPq = BigInt("-771")
		const intH1o3I7e = BigInt("952")
		const intdgeBG4R = BigInt("-1336")
		const intXVuPSun = BigInt("-872")
		const intRWrDvY9 = BigInt("743")
		const intY1mvH04 = BigInt("643")
		const intv60y4gV = BigInt("-989")
		const intsoij93 = BigInt("1179")
		const intI2iqhI = BigInt("-808")
		const intpVSqp2F = BigInt("-1888")
		const intJ5PyMvS = BigInt("404")
		const intkDFIcyJ = BigInt("-588")
		const int256rGmUFwp = await Bazu6pCKbm.baz.call(intdgeBG4R, intH1o3I7e, intPNKRZPq, {from: accounts[5]});
		const int256kaXQs1e = await Bazu6pCKbm.baz.call(intY1mvH04, intRWrDvY9, intXVuPSun, {from: accounts[0]});
		const int256EtogJUi = await Bazu6pCKbm.baz.call(intI2iqhI, intsoij93, intv60y4gV, {from: accounts[1]});
		const int256EvsU2QH = await Bazu6pCKbm.baz.call(intkDFIcyJ, intJ5PyMvS, intpVSqp2F, {from: accounts[1]});
		const boolsPZiVu4 = await Bazu6pCKbm.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolsPZiVu4, true)
		assert.equal(int256EtogJUi, BigInt("4"))
		assert.equal(int256EvsU2QH, BigInt("3"))
		assert.equal(int256kaXQs1e, BigInt("3"))
		assert.equal(int256rGmUFwp, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazG7cQJp = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intuKQWDV = BigInt("-552")
		const intWi3K65a = BigInt("-740")
		const intfk99dSV = BigInt("-1400")
		const int3xp2UW = BigInt("1584")
		const intEyuGVZ = BigInt("-1150")
		const intLRzrJNx = BigInt("477")
		const boolyZe5nr9 = await BazG7cQJp.echidna_all_states.call({from: accounts[4]});
		const int256lmM78DY = await BazG7cQJp.baz.call(intfk99dSV, intWi3K65a, intuKQWDV, {from: accounts[2]});
		const boolOXP26Q1 = await BazG7cQJp.echidna_all_states.call({from: accounts[4]});
		const int256cmf6ic3 = await BazG7cQJp.baz.call(intLRzrJNx, intEyuGVZ, int3xp2UW, {from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazBIZvcue = await Baz.new({from: accounts[2]});
		const intgk02yF9 = BigInt("-1254")
		const intlYjfEHy = BigInt("-97")
		const intk545Dlp = BigInt("264")
		const intj8oIXo3 = BigInt("-1380")
		const intz6vy14S = BigInt("1091")
		const intQwYuI1 = BigInt("42")
		const boolUOQyrle = await BazBIZvcue.echidna_all_states.call({from: accounts[5]});
		const int256MqysVxR = await BazBIZvcue.baz.call(intk545Dlp, intlYjfEHy, intgk02yF9, {from: accounts[3]});
		const int256WJAuP8h = await BazBIZvcue.baz.call(intQwYuI1, intz6vy14S, intj8oIXo3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUOQyrle, true)
		assert.equal(int256MqysVxR, BigInt("1"))
		assert.equal(int256WJAuP8h, BigInt("2"))
	});
})