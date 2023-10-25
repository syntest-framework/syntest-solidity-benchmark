const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Bazm7OLzq = await Baz.new({from: accounts[3]});
		const intdSMnfeN = BigInt("1568")
		const intBmMPz4v = BigInt("1347")
		const intd7xqQy = BigInt("-453")
		const intIXpXN2o = BigInt("-1444")
		const intbL1a4ig = BigInt("1404")
		const intaZFXCE3 = BigInt("1260")
		const int256aECEMP = await Bazm7OLzq.baz.call(intd7xqQy, intBmMPz4v, intdSMnfeN, {from: accounts[2]});
		const int256axnY83Y = await Bazm7OLzq.baz.call(intaZFXCE3, intbL1a4ig, intIXpXN2o, {from: accounts[3]});
		const boolrlaWMY = await Bazm7OLzq.echidna_all_states.call({from: accounts[1]});
		const boolBh1ncKk = await Bazm7OLzq.echidna_all_states.call({from: accounts[4]});
		const boolfHfKbjD = await Bazm7OLzq.echidna_all_states.call({from: accounts[2]});
		const booll8FJ4pv = await Bazm7OLzq.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolBh1ncKk, true)
		assert.equal(boolfHfKbjD, true)
		assert.equal(booll8FJ4pv, true)
		assert.equal(boolrlaWMY, true)
		assert.equal(int256aECEMP, BigInt("5"))
		assert.equal(int256axnY83Y, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazP3dXpf = await Baz.new({from: accounts[4]});
		const intAP6E143 = BigInt("-1907")
		const intm5i0Dbx = BigInt("-1849")
		const intBXCFEZX = BigInt("-701")
		const intNLEEERh = BigInt("1793")
		const intPCLQ03 = BigInt("-1545")
		const intWBWPi61 = BigInt("713")
		const intrjZkXeV = BigInt("671")
		const intf01D4C0 = BigInt("1366")
		const int7VByTN = BigInt("396")
		const boolG2PseN = await BazP3dXpf.echidna_all_states.call({from: accounts[2]});
		const int256D5JjHTe = await BazP3dXpf.baz.call(intBXCFEZX, intm5i0Dbx, intAP6E143, {from: accounts[4]});
		const int256hmfIyH = await BazP3dXpf.baz.call(intWBWPi61, intPCLQ03, intNLEEERh, {from: accounts[0]});
		const boolVlWp55B = await BazP3dXpf.echidna_all_states.call({from: accounts[3]});
		const int256ejLQjR3 = await BazP3dXpf.baz.call(int7VByTN, intf01D4C0, intrjZkXeV, {from: "0x0000000000000000000000000000000000000001"});
		const booloO2dqEz = await BazP3dXpf.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolG2PseN, true)
		assert.equal(boolVlWp55B, true)
		assert.equal(booloO2dqEz, true)
		assert.equal(int256D5JjHTe, BigInt("1"))
		assert.equal(int256ejLQjR3, BigInt("5"))
		assert.equal(int256hmfIyH, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazMMeNvld = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intWqV4jGZ = BigInt("50")
		const intkaERwAa = BigInt("-1042")
		const intd4HrLVp = BigInt("1070")
		const intp2geC25 = BigInt("-220")
		const intCI80awP = BigInt("-957")
		const intQhyjniW = BigInt("-166")
		const intwtOUXL7 = BigInt("997")
		const intxloSPE7 = BigInt("379")
		const intSl9ZdrO = BigInt("-654")
		const int256eOq3dp3 = await BazMMeNvld.baz.call(intd4HrLVp, intkaERwAa, intWqV4jGZ, {from: accounts[0]});
		const boolPplOyvh = await BazMMeNvld.echidna_all_states.call({from: accounts[1]});
		const int2564aQAYI = await BazMMeNvld.baz.call(intQhyjniW, intCI80awP, intp2geC25, {from: accounts[2]});
		const int256BF5WWUs = await BazMMeNvld.baz.call(intSl9ZdrO, intxloSPE7, intwtOUXL7, {from: accounts[1]});
		const boolctJdL5d = await BazMMeNvld.echidna_all_states.call({from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazVCXyyvD = await Baz.new({from: accounts[0]});
		const intKBwml2 = BigInt("-1140")
		const intvCnHXkS = BigInt("819")
		const inthuS3Zx2 = BigInt("-738")
		const intAWhcWda = BigInt("-1228")
		const intElZfYsi = BigInt("-1265")
		const inta1Y714u = BigInt("-776")
		const intqOv3Qz = BigInt("427")
		const intE2chs00 = BigInt("-1864")
		const intVFeb1C5 = BigInt("895")
		const intCYvocaT = BigInt("-295")
		const intVJoxTCW = BigInt("1773")
		const intaf5sq8D = BigInt("1359")
		const int256tU6VaZ0 = await BazVCXyyvD.baz.call(inthuS3Zx2, intvCnHXkS, intKBwml2, {from: accounts[0]});
		const int256zV6A2jH = await BazVCXyyvD.baz.call(inta1Y714u, intElZfYsi, intAWhcWda, {from: accounts[3]});
		const int256rQ7Yykf = await BazVCXyyvD.baz.call(intVFeb1C5, intE2chs00, intqOv3Qz, {from: "0x0000000000000000000000000000000000000001"});
		const int256DsiclK5 = await BazVCXyyvD.baz.call(intaf5sq8D, intVJoxTCW, intCYvocaT, {from: accounts[3]});

		assert.equal(int256DsiclK5, BigInt("4"))
		assert.equal(int256rQ7Yykf, BigInt("1"))
		assert.equal(int256tU6VaZ0, BigInt("3"))
		assert.equal(int256zV6A2jH, BigInt("1"))
	});
})