const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Bazaq4qBgJ = await Baz.new({from: accounts[1]});
		const intZXdK1I7 = BigInt("-1487")
		const intMrmDZ9u = BigInt("-432")
		const intAlNagDd = BigInt("2032")
		const intgKkf7hQ = BigInt("-1529")
		const intocbNJLV = BigInt("613")
		const intoAm0maC = BigInt("-121")
		const boolyrFjAnS = await Bazaq4qBgJ.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256oAezJAm = await Bazaq4qBgJ.baz.call(intAlNagDd, intMrmDZ9u, intZXdK1I7, {from: accounts[0]});
		const boolxAbqzoi = await Bazaq4qBgJ.echidna_all_states.call({from: accounts[3]});
		const int256me7QILu = await Bazaq4qBgJ.baz.call(intoAm0maC, intocbNJLV, intgKkf7hQ, {from: accounts[1]});
		const boolYixo65U = await Bazaq4qBgJ.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolYixo65U, true)
		assert.equal(boolxAbqzoi, true)
		assert.equal(boolyrFjAnS, true)
		assert.equal(int256me7QILu, BigInt("3"))
		assert.equal(int256oAezJAm, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Bazr48o2zz = await Baz.new({from: accounts[3]});
		const intG878x33 = BigInt("-1282")
		const intDBWkZFX = BigInt("-842")
		const intTte3Ut = BigInt("819")
		const intT7UgWXo = BigInt("-313")
		const inttB8oGO0 = BigInt("-804")
		const intwxIjwVB = BigInt("-886")
		const intKIeYxAu = BigInt("1496")
		const intP1VgjGd = BigInt("-1149")
		const intGbVoqsY = BigInt("1560")
		const intZh5rOhw = BigInt("1642")
		const intCxyBXR4 = BigInt("1030")
		const intFze8rS = BigInt("429")
		const int256uU3N4eK = await Bazr48o2zz.baz.call(intTte3Ut, intDBWkZFX, intG878x33, {from: accounts[4]});
		const boolX7LaxPV = await Bazr48o2zz.echidna_all_states.call({from: accounts[2]});
		const int256IBSmcpO = await Bazr48o2zz.baz.call(intwxIjwVB, inttB8oGO0, intT7UgWXo, {from: accounts[1]});
		const int256PR8NNWs = await Bazr48o2zz.baz.call(intGbVoqsY, intP1VgjGd, intKIeYxAu, {from: accounts[4]});
		const int256pV5A4VD = await Bazr48o2zz.baz.call(intFze8rS, intCxyBXR4, intZh5rOhw, {from: accounts[1]});

		assert.equal(boolX7LaxPV, true)
		assert.equal(int256IBSmcpO, BigInt("1"))
		assert.equal(int256PR8NNWs, BigInt("5"))
		assert.equal(int256pV5A4VD, BigInt("5"))
		assert.equal(int256uU3N4eK, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazQ0jVp7B = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intca5FyeR = BigInt("-1716")
		const intZAGMqsS = BigInt("229")
		const intYG5lS7K = BigInt("-530")
		const intom5E9tP = BigInt("-1395")
		const intyRyUoJx = BigInt("752")
		const intHXA78tb = BigInt("-321")
		const int256wUGes2 = await BazQ0jVp7B.baz.call(intYG5lS7K, intZAGMqsS, intca5FyeR, {from: "0x0000000000000000000000000000000000000001"});
		const int256CqQz5Ap = await BazQ0jVp7B.baz.call(intHXA78tb, intyRyUoJx, intom5E9tP, {from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazRUW0lkN = await Baz.new({from: accounts[0]});
		const intklzwqFh = BigInt("-1147")
		const intNfkWikN = BigInt("1339")
		const intCzR5bY = BigInt("-1771")
		const boolopRZkb0 = await BazRUW0lkN.echidna_all_states.call({from: accounts[4]});
		const int256PlOa7OL = await BazRUW0lkN.baz.call(intCzR5bY, intNfkWikN, intklzwqFh, {from: accounts[0]});
		const boolc83Ur4I = await BazRUW0lkN.echidna_all_states.call({from: accounts[5]});
		const boolp1qZZlw = await BazRUW0lkN.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolc83Ur4I, true)
		assert.equal(boolopRZkb0, true)
		assert.equal(boolp1qZZlw, true)
		assert.equal(int256PlOa7OL, BigInt("4"))
	});

	it('test for Baz', async () => {
		const Bazaq4qBgJ = await Baz.new({from: accounts[1]});
		const intx2jDH13 = BigInt("-902")
		const intEkx8XN1 = BigInt("671")
		const intoS5u3h = BigInt("42")
		const int256PPSLUgB = await Bazaq4qBgJ.baz.call(intoS5u3h, intEkx8XN1, intx2jDH13, {from: accounts[3]});

		assert.equal(int256PPSLUgB, BigInt("2"))
	});
})