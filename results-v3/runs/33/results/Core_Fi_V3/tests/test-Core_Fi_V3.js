const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3JoBUJ1R = await Core_Fi_V3.new({from: accounts[2]});
		const addressjkqLvRO = accounts[0]
		const uintfhLkP5L = BigInt("1257")
		const addressMQ6RWT = accounts[5]
		const uintFTlElJp = BigInt("1890")
		const addressnmGcuhf = accounts[3]
		const addresseg0Cs9O = accounts[4]
		const uint256AQLd83h = await Core_Fi_V3JoBUJ1R.balanceOf.call(addressjkqLvRO, {from: accounts[2]});
		const boolAjGVHVE = await Core_Fi_V3JoBUJ1R.transfer.call(addressMQ6RWT, uintfhLkP5L, {from: accounts[3]});
		const boold9kA1cp = await Core_Fi_V3JoBUJ1R.transferFrom.call(addresseg0Cs9O, addressnmGcuhf, uintFTlElJp, {from: accounts[1]});

		assert.equal(boolAjGVHVE, false)
		assert.equal(boold9kA1cp, false)
		assert.equal(uint256AQLd83h, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3bDh6X4V = await Core_Fi_V3.new({from: accounts[1]});
		const addressTWgIyeL = "0x0000000000000000000000000000000000000001"
		const addressLIHLvSM = accounts[1]
		const addressFQ3mI1i = "0x0000000000000000000000000000000000000001"
		const uintBz0ADOT = BigInt("454")
		const addressInN6Wba = accounts[4]
		const uintBUNLNB = BigInt("986")
		const addresslAIq1OO = accounts[2]
		const uint256WmGEfHe = await Core_Fi_V3bDh6X4V.balanceOf.call(addressTWgIyeL, {from: "0x0000000000000000000000000000000000000001"});
		const uint35e6Bd = await Core_Fi_V3bDh6X4V.allowance.call(addressFQ3mI1i, addressLIHLvSM, {from: accounts[1]});
		const uint256GxP2Irb = await Core_Fi_V3bDh6X4V.totalSupply.call({from: accounts[3]});
		const boolXsmLlhN = await Core_Fi_V3bDh6X4V.transfer.call(addressInN6Wba, uintBz0ADOT, {from: accounts[5]});
		const boolvMis5xt = await Core_Fi_V3bDh6X4V.approve.call(addresslAIq1OO, uintBUNLNB, {from: accounts[2]});

		assert.equal(boolXsmLlhN, false)
		assert.equal(boolvMis5xt, true)
		assert.equal(uint256GxP2Irb, BigInt("84000000000000000000000"))
		assert.equal(uint256WmGEfHe, BigInt("0"))
		assert.equal(uint35e6Bd, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Cmmta8C = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRYZFjpn = accounts[4]
		const uintcRYbnEx = BigInt("93")
		const addressH1aAZVP = accounts[4]
		const uintsGTOL7q = BigInt("22")
		const addressEWaRbn = accounts[1]
		const uintol6dwOQ = BigInt("742")
		const addressL9sBpSV = accounts[2]
		const uint88KoJN = BigInt("869")
		const addresslKNNMXw = accounts[3]
		const addressp8s2ErD = accounts[2]
		const addressiOD7vA9 = accounts[1]
		const uint256pWcfhYo = await Core_Fi_V3Cmmta8C.balanceOf.call(addressRYZFjpn, {from: accounts[3]});
		const booleyjmYyX = await Core_Fi_V3Cmmta8C.transfer.call(addressH1aAZVP, uintcRYbnEx, {from: accounts[0]});
		const boolUMGD08O = await Core_Fi_V3Cmmta8C.transfer.call(addressEWaRbn, uintsGTOL7q, {from: accounts[0]});
		const boolVoJZATQ = await Core_Fi_V3Cmmta8C.approve.call(addressL9sBpSV, uintol6dwOQ, {from: accounts[2]});
		const boolrCCwIBC = await Core_Fi_V3Cmmta8C.transfer.call(addresslKNNMXw, uint88KoJN, {from: accounts[0]});
		const uinthhG3rPC = await Core_Fi_V3Cmmta8C.allowance.call(addressiOD7vA9, addressp8s2ErD, {from: accounts[0]});
	});
})