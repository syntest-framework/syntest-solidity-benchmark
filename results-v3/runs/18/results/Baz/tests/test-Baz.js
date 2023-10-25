const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazlmrvQET = await Baz.new({from: accounts[1]});
		const intJRBAJkX = BigInt("1449")
		const intAEpAMb2 = BigInt("-1530")
		const intKKeyQlY = BigInt("1025")
		const intIZseZhP = BigInt("-514")
		const int32vM1v = BigInt("1294")
		const inthAnBPCw = BigInt("1229")
		const boolmLhrxpX = await BazlmrvQET.echidna_all_states.call({from: accounts[5]});
		const boolsHdBzbs = await BazlmrvQET.echidna_all_states.call({from: accounts[2]});
		const boolhJvpPfP = await BazlmrvQET.echidna_all_states.call({from: accounts[4]});
		const int256ME7Ak1c = await BazlmrvQET.baz.call(intKKeyQlY, intAEpAMb2, intJRBAJkX, {from: accounts[4]});
		const int256vnVFOz9 = await BazlmrvQET.baz.call(inthAnBPCw, int32vM1v, intIZseZhP, {from: accounts[2]});

		assert.equal(boolhJvpPfP, true)
		assert.equal(boolmLhrxpX, true)
		assert.equal(boolsHdBzbs, true)
		assert.equal(int256ME7Ak1c, BigInt("1"))
		assert.equal(int256vnVFOz9, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazQlSO4xL = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intrzz4J9c = BigInt("82")
		const intDgAolR = BigInt("1530")
		const intllZSsa2 = BigInt("-103")
		const boolJG2W6LW = await BazQlSO4xL.echidna_all_states.call({from: accounts[3]});
		const boolDbQzjdi = await BazQlSO4xL.echidna_all_states.call({from: accounts[0]});
		const boolupSI4Bc = await BazQlSO4xL.echidna_all_states.call({from: accounts[1]});
		const int256Uph5Jyt = await BazQlSO4xL.baz.call(intllZSsa2, intDgAolR, intrzz4J9c, {from: accounts[4]});
	});

	it('test for Baz', async () => {
		const BazWvcEAk7 = await Baz.new({from: accounts[0]});
		const intQADL0oT = BigInt("877")
		const intyaY11fN = BigInt("663")
		const int19BIaY = BigInt("580")
		const boolwISx5OH = await BazWvcEAk7.echidna_all_states.call({from: accounts[5]});
		const boolkgRzA2 = await BazWvcEAk7.echidna_all_states.call({from: accounts[0]});
		const booldlXEVQg = await BazWvcEAk7.echidna_all_states.call({from: accounts[4]});
		const boolZXyXqOp = await BazWvcEAk7.echidna_all_states.call({from: accounts[2]});
		const int256ldIPoCl = await BazWvcEAk7.baz.call(int19BIaY, intyaY11fN, intQADL0oT, {from: accounts[0]});

		assert.equal(boolZXyXqOp, true)
		assert.equal(booldlXEVQg, true)
		assert.equal(boolkgRzA2, true)
		assert.equal(boolwISx5OH, true)
		assert.equal(int256ldIPoCl, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazeedTqTI = await Baz.new({from: accounts[0]});
		const intuDDkvjL = BigInt("-635")
		const intj31OZp2 = BigInt("607")
		const intbOIE3RA = BigInt("184")
		const boolWl6iVZ3 = await BazeedTqTI.echidna_all_states.call({from: accounts[3]});
		const int256uFqtpgY = await BazeedTqTI.baz.call(intbOIE3RA, intj31OZp2, intuDDkvjL, {from: "0x0000000000000000000000000000000000000001"});
		const boolswI0dnw = await BazeedTqTI.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolWl6iVZ3, true)
		assert.equal(boolswI0dnw, true)
		assert.equal(int256uFqtpgY, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazeedTqTI = await Baz.new({from: accounts[0]});
		const intu8YIwpY = BigInt("-1563")
		const into3MpVLM = BigInt("1037")
		const intkmkQDfj = BigInt("42")
		const int256zrQkYXg = await BazeedTqTI.baz.call(intkmkQDfj, into3MpVLM, intu8YIwpY, {from: accounts[2]});

		assert.equal(int256zrQkYXg, BigInt("2"))
	});
})