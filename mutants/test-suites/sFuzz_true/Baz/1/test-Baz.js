const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazlWKThXy = await Baz.new({from: accounts[2]});
		const intnqhm0nW = BigInt("338")
		const intPxFTmMu = BigInt("-1098")
		const intU9bwvym = BigInt("-1261")
		const intOFxJxI = BigInt("1427")
		const intIKyr5u9 = BigInt("1230")
		const intwyrvEKZ = BigInt("93")
		const intNYfE8l4 = BigInt("1663")
		const intkFL2fAJ = BigInt("-1932")
		const intIlwbp5 = BigInt("-1787")
		const boolkuHdsfk = await BazlWKThXy.echidna_all_states.call({from: accounts[5]});
		const int256mefF3iJ = await BazlWKThXy.baz.call(intU9bwvym, intPxFTmMu, intnqhm0nW, {from: accounts[0]});
		const int256Y46saD3 = await BazlWKThXy.baz.call(intwyrvEKZ, intIKyr5u9, intOFxJxI, {from: accounts[0]});
		const int256wCMydNg = await BazlWKThXy.baz.call(intIlwbp5, intkFL2fAJ, intNYfE8l4, {from: accounts[3]});

		assert.equal(boolkuHdsfk, true)
		assert.equal(int256Y46saD3, BigInt("5"))
		assert.equal(int256mefF3iJ, BigInt("1"))
		assert.equal(int256wCMydNg, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazHgExdGb = await Baz.new({from: accounts[5]});
		const intUIN2wr = BigInt("2040")
		const intE89uYAM = BigInt("-1867")
		const intcJ7EHpV = BigInt("1700")
		const intYut8q6 = BigInt("402")
		const intOUF26FO = BigInt("-1129")
		const intc77EPW = BigInt("-1554")
		const intWrjyLHm = BigInt("-885")
		const intCIuduBe = BigInt("1469")
		const intK6bH5gg = BigInt("-866")
		const int256VX6MkuG = await BazHgExdGb.baz.call(intcJ7EHpV, intE89uYAM, intUIN2wr, {from: accounts[1]});
		const int256cFp2iFK = await BazHgExdGb.baz.call(intc77EPW, intOUF26FO, intYut8q6, {from: accounts[0]});
		const int256nP1rAlD = await BazHgExdGb.baz.call(intK6bH5gg, intCIuduBe, intWrjyLHm, {from: accounts[5]});
		const booli3V3K0n = await BazHgExdGb.echidna_all_states.call({from: accounts[2]});
		const boolDjNxPEC = await BazHgExdGb.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolDjNxPEC, true)
		assert.equal(booli3V3K0n, true)
		assert.equal(int256VX6MkuG, BigInt("5"))
		assert.equal(int256cFp2iFK, BigInt("1"))
		assert.equal(int256nP1rAlD, BigInt("4"))
	});

	it('test for Baz', async () => {
		const Baz9z2HVP = await Baz.new({from: accounts[5]});
		const intUI6IkXa = BigInt("2045")
		const intKTD02w4 = BigInt("1959")
		const intkc4vjjL = BigInt("757")
		const intyimlftc = BigInt("1340")
		const intK1Kd3z0 = BigInt("764")
		const intal99R0V = BigInt("-1388")
		const intx6twQv5 = BigInt("-940")
		const ints0zBwH9 = BigInt("549")
		const intH9VnUQp = BigInt("-1510")
		const int256Vx5FhxK = await Baz9z2HVP.baz.call(intkc4vjjL, intKTD02w4, intUI6IkXa, {from: accounts[0]});
		const int256lgLT5l0 = await Baz9z2HVP.baz.call(intal99R0V, intK1Kd3z0, intyimlftc, {from: accounts[5]});
		const boolXgO78N2 = await Baz9z2HVP.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256QXChtZ0 = await Baz9z2HVP.baz.call(intH9VnUQp, ints0zBwH9, intx6twQv5, {from: accounts[4]});

		assert.equal(boolXgO78N2, true)
		assert.equal(int256QXChtZ0, BigInt("3"))
		assert.equal(int256Vx5FhxK, BigInt("5"))
		assert.equal(int256lgLT5l0, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazUB2vfUh = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intlv6l5qI = BigInt("-1715")
		const intAovOGcs = BigInt("-1445")
		const intVSzPf2I = BigInt("375")
		const intZT70Mna = BigInt("1432")
		const intafbMVtk = BigInt("-910")
		const intEqt4MUd = BigInt("1085")
		const intpdJOy8 = BigInt("-1271")
		const intYUDKo9D = BigInt("1929")
		const intYh1FBcH = BigInt("-721")
		const int256SkkVXLr = await BazUB2vfUh.baz.call(intVSzPf2I, intAovOGcs, intlv6l5qI, {from: accounts[1]});
		const boolpylmZO1 = await BazUB2vfUh.echidna_all_states.call({from: accounts[4]});
		const boolkCIf0m = await BazUB2vfUh.echidna_all_states.call({from: accounts[3]});
		const int256KBnV4TY = await BazUB2vfUh.baz.call(intEqt4MUd, intafbMVtk, intZT70Mna, {from: "0x0000000000000000000000000000000000000001"});
		const boolALQECyV = await BazUB2vfUh.echidna_all_states.call({from: accounts[4]});
		const int2568ebBHV = await BazUB2vfUh.baz.call(intYh1FBcH, intYUDKo9D, intpdJOy8, {from: accounts[2]});
	});

	it('test for Baz', async () => {
		const BazLDiydI = await Baz.new({from: accounts[4]});
		const intKg601e = BigInt("-1661")
		const intnrgAbnP = BigInt("1352")
		const intfpZNGYO = BigInt("42")
		const intpZgfVbL = BigInt("-1416")
		const intuo7mizX = BigInt("731")
		const intLmZTTb = BigInt("1988")
		const int256LXp5F0z = await BazLDiydI.baz.call(intfpZNGYO, intnrgAbnP, intKg601e, {from: accounts[3]});
		const boolr4Qn6Vc = await BazLDiydI.echidna_all_states.call({from: accounts[3]});
		const int256fOfHZcR = await BazLDiydI.baz.call(intLmZTTb, intuo7mizX, intpZgfVbL, {from: accounts[1]});

		assert.equal(boolr4Qn6Vc, true)
		assert.equal(int256LXp5F0z, BigInt("2"))
		assert.equal(int256fOfHZcR, BigInt("3"))
	});
})