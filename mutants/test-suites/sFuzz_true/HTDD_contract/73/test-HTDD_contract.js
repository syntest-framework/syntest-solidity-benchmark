const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractegTAMX = await HTDD_contract.new({from: accounts[1]});
		const uintPJWVGsq = BigInt("586")
		const addressRaGBI6 = accounts[4]
		const addressP78QFI = accounts[5]
		const uintSVS7QUr = BigInt("975")
		const addressblb2NW = accounts[0]
		const addressbKILNEJ = accounts[4]
		const addressUO06Qh0 = accounts[2]
//		const boolb6reTco = await HTDD_contractegTAMX.transferFrom.call(addressP78QFI, addressRaGBI6, uintPJWVGsq, {from: accounts[0]});
//		const boolyuS7BbB = await HTDD_contractegTAMX.approve.call(addressblb2NW, uintSVS7QUr, {from: accounts[2]});
//		const uint256vxmatz = await HTDD_contractegTAMX.allowance.call(addressUO06Qh0, addressbKILNEJ, {from: accounts[3]});

		await expect(HTDD_contractegTAMX.transferFrom.call(addressP78QFI, addressRaGBI6, uintPJWVGsq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractMqR13y1 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqYA4r1M = BigInt("1026")
		const addressCDvgWBQ = accounts[0]
		const addressMn34KLI = accounts[0]
		const uintMxTMhW4 = BigInt("417")
		const addressmDfT4AF = accounts[5]
		const uintm0Xzx7p = BigInt("1372")
		const addressfRG7t6W = accounts[1]
		const uintsvpJSVT = BigInt("656")
		const addressI08aoiR = "0x0000000000000000000000000000000000000001"
		const boolnO249gy = await HTDD_contractMqR13y1.transferFrom.call(addressMn34KLI, addressCDvgWBQ, uintqYA4r1M, {from: accounts[2]});
		const boolEaHvfQE = await HTDD_contractMqR13y1.approve.call(addressmDfT4AF, uintMxTMhW4, {from: accounts[4]});
		const boolXUzbLdP = await HTDD_contractMqR13y1.transfer.call(addressfRG7t6W, uintm0Xzx7p, {from: accounts[4]});
		const booluFiidtC = await HTDD_contractMqR13y1.approve.call(addressI08aoiR, uintsvpJSVT, {from: accounts[1]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractdmZaqAM = await HTDD_contract.new({from: accounts[3]});
		const uintMfaLB88 = BigInt("1790")
		const addressTqp2w74 = accounts[2]
		const uintn03u6eH = BigInt("301")
		const addresswjMwfa = accounts[1]
		const addressfAyMFrS = "0x0000000000000000000000000000000000000001"
		const uintXzbl4Kw = BigInt("1794")
		const addressND8qNmU = accounts[4]
		const addressrRIUry = accounts[5]
		const uintoC2SUMA = BigInt("186")
		const addressYdw9BiW = accounts[0]
		const uintqloGMfL = BigInt("132")
		const addressspE6bNo = accounts[4]
		const addressVqGhJj9 = accounts[3]
		const boolDWSD3Ii = await HTDD_contractdmZaqAM.approve.call(addressTqp2w74, uintMfaLB88, {from: accounts[0]});
//		const boolQga68qV = await HTDD_contractdmZaqAM.transferFrom.call(addressfAyMFrS, addresswjMwfa, uintn03u6eH, {from: accounts[3]});
//		const bool4f4wzS = await HTDD_contractdmZaqAM.transferFrom.call(addressrRIUry, addressND8qNmU, uintXzbl4Kw, {from: accounts[0]});
//		const boolzVoLvR3 = await HTDD_contractdmZaqAM.approve.call(addressYdw9BiW, uintoC2SUMA, {from: accounts[0]});
//		const boolYd6Za6j = await HTDD_contractdmZaqAM.transferFrom.call(addressVqGhJj9, addressspE6bNo, uintqloGMfL, {from: accounts[0]});

		assert.equal(boolDWSD3Ii, true)
		await expect(HTDD_contractdmZaqAM.transferFrom.call(addressfAyMFrS, addresswjMwfa, uintn03u6eH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRCZrXVb = await HTDD_contract.new({from: accounts[4]});
		const uintHIyTCFg = BigInt("1362")
		const addresssPoQ7WW = accounts[3]
		const uintuZkaJeY = BigInt("610")
		const addressvDCxo0q = accounts[2]
		const uint7fW5Ge = BigInt("1891")
		const addressGuOulZK = accounts[0]
		const boolzgvK5n = await HTDD_contractRCZrXVb.transfer.call(addresssPoQ7WW, uintHIyTCFg, {from: accounts[4]});
		const boolvaSwHE2 = await HTDD_contractRCZrXVb.approve.call(addressvDCxo0q, uintuZkaJeY, {from: accounts[5]});
		const boolDRDYvGk = await HTDD_contractRCZrXVb.approve.call(addressGuOulZK, uint7fW5Ge, {from: accounts[3]});

		assert.equal(boolDRDYvGk, true)
		assert.equal(boolvaSwHE2, true)
		assert.equal(boolzgvK5n, true)
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractAVjyheC = await HTDD_contract.new({from: accounts[5]});
		const addressdDtMcoS = accounts[0]
		const addresst3Gmjn = accounts[0]
		const uintbjIILHR = BigInt("785")
		const addressPzbfcNZ = accounts[5]
		const uinttUaJoT8 = BigInt("640")
		const addressMN9ebi = accounts[3]
		const uintUU2kXrE = BigInt("1352")
		const addressW12IBnP = "0x0000000000000000000000000000000000000001"
		const addressuX2yf7o = accounts[3]
		const uint4Dfgys = BigInt("1789")
		const addressclpKnxr = accounts[1]
		const address14LmIj = accounts[5]
		const uintDV5odZ = BigInt("288")
		const addressuES2CS = accounts[4]
		const uint256DptJqJz = await HTDD_contractAVjyheC.allowance.call(addresst3Gmjn, addressdDtMcoS, {from: accounts[2]});
		const boolvPS59Sa = await HTDD_contractAVjyheC.approve.call(addressPzbfcNZ, uintbjIILHR, {from: accounts[0]});
		const boolxMGhxUx = await HTDD_contractAVjyheC.approve.call(addressMN9ebi, uinttUaJoT8, {from: accounts[1]});
//		const boolMKPc4KT = await HTDD_contractAVjyheC.transferFrom.call(addressuX2yf7o, addressW12IBnP, uintUU2kXrE, {from: accounts[0]});
//		const boolNVkLdv = await HTDD_contractAVjyheC.transferFrom.call(address14LmIj, addressclpKnxr, uint4Dfgys, {from: accounts[0]});
//		const boolziffs4J = await HTDD_contractAVjyheC.approve.call(addressuES2CS, uintDV5odZ, {from: accounts[4]});

		assert.equal(boolvPS59Sa, true)
		assert.equal(boolxMGhxUx, true)
		assert.equal(uint256DptJqJz, BigInt("0"))
		await expect(HTDD_contractAVjyheC.transferFrom.call(addressuX2yf7o, addressW12IBnP, uintUU2kXrE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractAVjyheC = await HTDD_contract.new({from: accounts[5]});
		const addressAFyumDI = accounts[0]
		const addresslfNYWLU = accounts[0]
		const uintijXYkt = BigInt("785")
		const addresszZd5r7P = accounts[5]
		const uintPzm2bwn = BigInt("640")
		const addressU4N9aWY = accounts[3]
		const uintRBG3xhy = BigInt("1789")
		const addressFZJolkH = accounts[1]
		const addressJQEU3CL = accounts[5]
		const uintiT7qfaN = BigInt("288")
		const addressYop4pns = accounts[4]
		const uint256DptJqJz = await HTDD_contractAVjyheC.allowance.call(addresslfNYWLU, addressAFyumDI, {from: accounts[2]});
		const boolvPS59Sa = await HTDD_contractAVjyheC.approve.call(addresszZd5r7P, uintijXYkt, {from: accounts[0]});
		const boolxMGhxUx = await HTDD_contractAVjyheC.approve.call(addressU4N9aWY, uintPzm2bwn, {from: accounts[1]});
//		const boolNVkLdv = await HTDD_contractAVjyheC.transferFrom.call(addressJQEU3CL, addressFZJolkH, uintRBG3xhy, {from: accounts[0]});
//		const boolziffs4J = await HTDD_contractAVjyheC.approve.call(addressYop4pns, uintiT7qfaN, {from: accounts[4]});

		assert.equal(boolvPS59Sa, true)
		assert.equal(boolxMGhxUx, true)
		assert.equal(uint256DptJqJz, BigInt("0"))
		await expect(HTDD_contractAVjyheC.transferFrom.call(addressJQEU3CL, addressFZJolkH, uintRBG3xhy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})