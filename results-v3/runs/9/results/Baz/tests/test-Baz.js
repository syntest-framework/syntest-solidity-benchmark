const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazhNLD9qz = await Baz.new({from: accounts[2]});
		const intM8mrVW = BigInt("-930")
		const intLH6lmy5 = BigInt("-1133")
		const intlqHQ7pI = BigInt("1906")
		const booloJ9wER = await BazhNLD9qz.echidna_all_states.call({from: accounts[0]});
		const boolaHFe6cN = await BazhNLD9qz.echidna_all_states.call({from: accounts[3]});
		const int256pCPA1H = await BazhNLD9qz.baz.call(intlqHQ7pI, intLH6lmy5, intM8mrVW, {from: accounts[2]});

		assert.equal(boolaHFe6cN, true)
		assert.equal(booloJ9wER, true)
		assert.equal(int256pCPA1H, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazsTli9mH = await Baz.new({from: accounts[1]});
		const intKbEks3F = BigInt("1958")
		const intU2ZLy1N = BigInt("-868")
		const intYkCxIm5 = BigInt("-1749")
		const intMeEaMRP = BigInt("-514")
		const intw60BzJi = BigInt("-1929")
		const intBSn93yl = BigInt("-1948")
		const int256Om837mz = await BazsTli9mH.baz.call(intYkCxIm5, intU2ZLy1N, intKbEks3F, {from: accounts[3]});
		const int256kTlHeyn = await BazsTli9mH.baz.call(intBSn93yl, intw60BzJi, intMeEaMRP, {from: "0x0000000000000000000000000000000000000001"});
		const boolqArIqYq = await BazsTli9mH.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolqArIqYq, true)
		assert.equal(int256Om837mz, BigInt("5"))
		assert.equal(int256kTlHeyn, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazOfPsTyC = await Baz.new({from: accounts[0]});
		const intCMTOjZ4 = BigInt("-916")
		const intRLur7Ly = BigInt("497")
		const intuHO1fsc = BigInt("803")
		const intcu7otiG = BigInt("-828")
		const intq4ztFlK = BigInt("-501")
		const intYbWaLKm = BigInt("612")
		const int256pBl2MVS = await BazOfPsTyC.baz.call(intuHO1fsc, intRLur7Ly, intCMTOjZ4, {from: "0x0000000000000000000000000000000000000001"});
		const int2567Lrw1o = await BazOfPsTyC.baz.call(intYbWaLKm, intq4ztFlK, intcu7otiG, {from: accounts[2]});
		const booloODfv1M = await BazOfPsTyC.echidna_all_states.call({from: accounts[0]});
		const boolupaePNE = await BazOfPsTyC.echidna_all_states.call({from: accounts[1]});

		assert.equal(booloODfv1M, true)
		assert.equal(boolupaePNE, true)
		assert.equal(int2567Lrw1o, BigInt("1"))
		assert.equal(int256pBl2MVS, BigInt("3"))
	});

	it('test for Baz', async () => {
		const Baz4pa0qQ = await Baz.new({from: accounts[0]});
		const intA3WVzp8 = BigInt("6")
		const inteweT4Jr = BigInt("634")
		const intYtKuwxv = BigInt("-1048")
		const int256TsOE25Y = await Baz4pa0qQ.baz.call(intYtKuwxv, inteweT4Jr, intA3WVzp8, {from: accounts[2]});
		const boolAW3azNt = await Baz4pa0qQ.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolAW3azNt, true)
		assert.equal(int256TsOE25Y, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazVvTCbO7 = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intEmOGUCd = BigInt("759")
		const intL2JMCnQ = BigInt("-952")
		const intYWX7eG6 = BigInt("-378")
		const intHrx1OA = BigInt("-532")
		const intktcuvsk = BigInt("633")
		const intR1bTfEa = BigInt("341")
		const intM3F6bxb = BigInt("-834")
		const intqKxkXXA = BigInt("-1171")
		const intzGXINF6 = BigInt("-189")
		const intSUHsKAL = BigInt("312")
		const intmSl18Ff = BigInt("-1854")
		const intIz1hxe = BigInt("1486")
		const int256SnPf7y8 = await BazVvTCbO7.baz.call(intYWX7eG6, intL2JMCnQ, intEmOGUCd, {from: accounts[4]});
		const boolSlWo4H9 = await BazVvTCbO7.echidna_all_states.call({from: accounts[0]});
		const int256rI0burq = await BazVvTCbO7.baz.call(intR1bTfEa, intktcuvsk, intHrx1OA, {from: accounts[1]});
		const int256SWT8yms = await BazVvTCbO7.baz.call(intzGXINF6, intqKxkXXA, intM3F6bxb, {from: "0x0000000000000000000000000000000000000001"});
		const boolLT2UqQx = await BazVvTCbO7.echidna_all_states.call({from: accounts[0]});
		const int256eKGex99 = await BazVvTCbO7.baz.call(intIz1hxe, intmSl18Ff, intSUHsKAL, {from: accounts[3]});
	});

	it('test for Baz', async () => {
		const BazWCihpa = await Baz.new({from: accounts[5]});
		const intAZKv2Xd = BigInt("-1516")
		const intoVHGE7P = BigInt("1129")
		const intExlRNHr = BigInt("42")
		const intV7vAtxi = BigInt("1578")
		const intHOKFhAd = BigInt("662")
		const inth4FpmJN = BigInt("1511")
		const intCtms2rr = BigInt("-499")
		const int8cXItq = BigInt("-521")
		const intu5u4R7 = BigInt("-1850")
		const int256NA6hj2 = await BazWCihpa.baz.call(intExlRNHr, intoVHGE7P, intAZKv2Xd, {from: accounts[0]});
		const int256ssEonC7 = await BazWCihpa.baz.call(inth4FpmJN, intHOKFhAd, intV7vAtxi, {from: accounts[5]});
		const int256evyTIqi = await BazWCihpa.baz.call(intu5u4R7, int8cXItq, intCtms2rr, {from: accounts[1]});

		assert.equal(int256NA6hj2, BigInt("2"))
		assert.equal(int256evyTIqi, BigInt("1"))
		assert.equal(int256ssEonC7, BigInt("5"))
	});
})