const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamickQHHiH = await Dynamic.new({from: accounts[3]});
		const boolB5KoPy7 = await DynamickQHHiH.echidna_test.call({from: accounts[4]});
		const boolVBn6TX = await DynamickQHHiH.echidna_test.call({from: accounts[2]});

		assert.equal(boolB5KoPy7, true)
		assert.equal(boolVBn6TX, true)
	});

	it('test for Dynamic', async () => {
		const DynamicHnh7dG = await Dynamic.new({from: accounts[4]});
		const uintqGNiB69 = BigInt("1821")
		const stringT8DmQnU = "GcH1D6NkiIVc8WGevI6Lbupah"
		const uintelETh44 = BigInt("461")
		const uintSW2pTIH = BigInt("770")
		const stringuoXoKfD = "sgsuiLYUvTTQ7Q7YudpUg56KWy7awSzfGIncNRxcn5p5KlQ2mvEFwYLcbQlBCSfIoeYno4TriUYTjkCtSSqjJDwVkE5Ib1VS"
		const uintyd5BbBU = BigInt("827")
		const uintz7hk3Zw = BigInt("1465")
		const stringUvQI16a = "xbMfjPFrw0rKWhtGf4W1MqHLc79AzqvhimhOTcJErCZoCqv9Ummh"
		const uintHtBoOTP = BigInt("384")
		const boolTA7nvyr = await DynamicHnh7dG.yolo.call(uintelETh44, stringT8DmQnU, uintqGNiB69, {from: accounts[3]});
		const boolFWhpmz = await DynamicHnh7dG.echidna_test.call({from: accounts[0]});
		const boola3VUeLe = await DynamicHnh7dG.yolo.call(uintyd5BbBU, stringuoXoKfD, uintSW2pTIH, {from: "0x0000000000000000000000000000000000000001"});
		const boolk2LwdXP = await DynamicHnh7dG.yolo.call(uintHtBoOTP, stringUvQI16a, uintz7hk3Zw, {from: accounts[4]});
		const booltTQLrT2 = await DynamicHnh7dG.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFWhpmz, true)
		assert.equal(boolTA7nvyr, true)
		assert.equal(boola3VUeLe, true)
		assert.equal(boolk2LwdXP, true)
		assert.equal(booltTQLrT2, true)
	});

	it('test for Dynamic', async () => {
		const DynamicioIQLl5 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLOSe3lt = BigInt("1377")
		const stringJavhyTf = "RofGXDYO3NPfHFJbUUbZBHnd6etCSdjycHGKTSWv8zQ1gwN4fU7PuvmImtsUmAeTKUHwh30t"
		const uintOmJCCRo = BigInt("1369")
		const uintBNoIELc = BigInt("320")
		const stringI8aCtK2 = "jWOI7xvTXp5lSPPs4CDz2CmAsf7yH84eFEyIoCG6mMOlq0vijyUrB5oNepXXHA48wNEqrLhGTqO9gK3aOPXDCQh"
		const uint3eWymc = BigInt("1642")
		const boolAdlC60N = await DynamicioIQLl5.yolo.call(uintOmJCCRo, stringJavhyTf, uintLOSe3lt, {from: accounts[4]});
		const boolHymo5W = await DynamicioIQLl5.echidna_test.call({from: accounts[0]});
		const boolCxaalZ0 = await DynamicioIQLl5.yolo.call(uint3eWymc, stringI8aCtK2, uintBNoIELc, {from: accounts[0]});
	});
})