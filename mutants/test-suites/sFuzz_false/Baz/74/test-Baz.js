const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Baz65B1zc = await Baz.new({from: accounts[2]});
		const intsXdydFW = BigInt("1970")
		const intvMKccVQ = BigInt("1251")
		const intyadqIIK = BigInt("-825")
		const boolAYt3tF = await Baz65B1zc.echidna_all_states.call({from: accounts[2]});
		const boolcAhSc87 = await Baz65B1zc.echidna_all_states.call({from: accounts[3]});
		const boolbBF0Gn = await Baz65B1zc.echidna_all_states.call({from: accounts[1]});
		const int256Ul4sA0I = await Baz65B1zc.baz.call(intyadqIIK, intvMKccVQ, intsXdydFW, {from: accounts[4]});

		assert.equal(boolAYt3tF, true)
		assert.equal(boolbBF0Gn, true)
		assert.equal(boolcAhSc87, true)
		assert.equal(int256Ul4sA0I, BigInt("5"))
	});

	it('test for Baz', async () => {
		const Bazw9hT9GC = await Baz.new({from: accounts[3]});
		const intqJaAAH = BigInt("-112")
		const intOuBJljC = BigInt("-1581")
		const intLGdZgva = BigInt("-632")
		const intMl7Ph5 = BigInt("1909")
		const intKyzQEQo = BigInt("1710")
		const intEFM2Qu = BigInt("-374")
		const boolkYXyN5S = await Bazw9hT9GC.echidna_all_states.call({from: accounts[1]});
		const boolIFZmctN = await Bazw9hT9GC.echidna_all_states.call({from: accounts[5]});
		const int256hBb0y7F = await Bazw9hT9GC.baz.call(intLGdZgva, intOuBJljC, intqJaAAH, {from: accounts[3]});
		const int256hrzwBBM = await Bazw9hT9GC.baz.call(intEFM2Qu, intKyzQEQo, intMl7Ph5, {from: accounts[4]});

		assert.equal(boolIFZmctN, true)
		assert.equal(boolkYXyN5S, true)
		assert.equal(int256hBb0y7F, BigInt("1"))
		assert.equal(int256hrzwBBM, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazeIvZZw4 = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intJ4w8Wr8 = BigInt("-1273")
		const intRyYTg1Q = BigInt("-160")
		const intLbZ1Jc5 = BigInt("2039")
		const boolLHh83Bj = await BazeIvZZw4.echidna_all_states.call({from: accounts[0]});
		const boolZszYr0S = await BazeIvZZw4.echidna_all_states.call({from: accounts[1]});
		const boolvsJ8bC6 = await BazeIvZZw4.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpoG9Bw = await BazeIvZZw4.echidna_all_states.call({from: accounts[0]});
		const int256SyBtiyW = await BazeIvZZw4.baz.call(intLbZ1Jc5, intRyYTg1Q, intJ4w8Wr8, {from: accounts[2]});
		const boolQZA0uak = await BazeIvZZw4.echidna_all_states.call({from: accounts[2]});
	});

	it('test for Baz', async () => {
		const BazMVRzb8Y = await Baz.new({from: accounts[0]});
		const intvLEH59b = BigInt("-1489")
		const intOW85bem = BigInt("442")
		const intLsk5b6B = BigInt("-233")
		const boolSm6xSrv = await BazMVRzb8Y.echidna_all_states.call({from: accounts[4]});
		const boolLzkxObK = await BazMVRzb8Y.echidna_all_states.call({from: accounts[1]});
		const int256RcOfal = await BazMVRzb8Y.baz.call(intLsk5b6B, intOW85bem, intvLEH59b, {from: accounts[4]});

		assert.equal(boolLzkxObK, true)
		assert.equal(boolSm6xSrv, true)
		assert.equal(int256RcOfal, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazvxTHeHe = await Baz.new({from: accounts[1]});
		const intkHMPPV = BigInt("-32")
		const intIxrXyxj = BigInt("861")
		const intgPgOcL = BigInt("-1222")
		const intTTV0jR8 = BigInt("-469")
		const intrsCVta = BigInt("1057")
		const intcLnzaIb = BigInt("586")
		const int256Pduaepv = await BazvxTHeHe.baz.call(intgPgOcL, intIxrXyxj, intkHMPPV, {from: accounts[0]});
		const int256BEa2H6a = await BazvxTHeHe.baz.call(intcLnzaIb, intrsCVta, intTTV0jR8, {from: accounts[1]});
		const booldb3oxQa = await BazvxTHeHe.echidna_all_states.call({from: accounts[0]});

		assert.equal(booldb3oxQa, true)
		assert.equal(int256BEa2H6a, BigInt("4"))
		assert.equal(int256Pduaepv, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazkzWsEba = await Baz.new({from: accounts[3]});
		const intmaK5rx = BigInt("-1824")
		const intsweukhJ = BigInt("982")
		const intniGWKL6 = BigInt("42")
		const intg8DCLB = BigInt("-1435")
		const intePPn60F = BigInt("1745")
		const intjOPEQUA = BigInt("1407")
		const boolRdlm4kG = await BazkzWsEba.echidna_all_states.call({from: accounts[2]});
		const int256Ps4ACpD = await BazkzWsEba.baz.call(intniGWKL6, intsweukhJ, intmaK5rx, {from: "0x0000000000000000000000000000000000000001"});
		const int256DTY57mL = await BazkzWsEba.baz.call(intjOPEQUA, intePPn60F, intg8DCLB, {from: accounts[5]});

		assert.equal(boolRdlm4kG, true)
		assert.equal(int256DTY57mL, BigInt("4"))
		assert.equal(int256Ps4ACpD, BigInt("2"))
	});
})