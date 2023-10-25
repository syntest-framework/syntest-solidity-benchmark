const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicvDd75qv = await Dynamic.new({from: accounts[2]});
		const boolfzwsp1h = await DynamicvDd75qv.echidna_test.call({from: accounts[2]});
		const boolVQUfW6U = await DynamicvDd75qv.echidna_test.call({from: accounts[0]});
		const boolZ7Xiy6G = await DynamicvDd75qv.echidna_test.call({from: accounts[4]});
		const boolSSWxRAL = await DynamicvDd75qv.echidna_test.call({from: accounts[2]});

		assert.equal(boolSSWxRAL, true)
		assert.equal(boolVQUfW6U, true)
		assert.equal(boolZ7Xiy6G, true)
		assert.equal(boolfzwsp1h, true)
	});

	it('test for Dynamic', async () => {
		const DynamicJb0S7j6 = await Dynamic.new({from: accounts[1]});
		const uintH6KIJQX = BigInt("1991")
		const stringplrnQdm = "zkZ7Veh9kvzgJLReNeJBWuCdl95cAeXAIELfEOEavFs1qo3u3ArCItBdk4XEqMXCudsz4rhTaTMFSvL"
		const uintiYeflmk = BigInt("18")
		const boolvUKzqzb = await DynamicJb0S7j6.yolo.call(uintiYeflmk, stringplrnQdm, uintH6KIJQX, {from: accounts[4]});
		const boolPR46kcs = await DynamicJb0S7j6.echidna_test.call({from: accounts[3]});
		const boolxAmtfYX = await DynamicJb0S7j6.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPR46kcs, true)
		assert.equal(boolvUKzqzb, true)
		assert.equal(boolxAmtfYX, true)
	});

	it('test for Dynamic', async () => {
		const DynamicUG2v0E2 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKyDUqBl = BigInt("1223")
		const stringd25ulFv = "ZMsarOvtmtNkKeTVNCjjJ331W8jiSyMoYmayASi1EytJokc7LKoSVrtO4oeTVXGYXVrnJ"
		const uintqvSSToj = BigInt("967")
		const boolhoN2HL = await DynamicUG2v0E2.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGnOfs5 = await DynamicUG2v0E2.yolo.call(uintqvSSToj, stringd25ulFv, uintKyDUqBl, {from: accounts[1]});
		const boolkoWlI6w = await DynamicUG2v0E2.echidna_test.call({from: accounts[4]});
		const bool3mj0ZV = await DynamicUG2v0E2.echidna_test.call({from: accounts[5]});
		const booloiVrBN0 = await DynamicUG2v0E2.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
	});
})