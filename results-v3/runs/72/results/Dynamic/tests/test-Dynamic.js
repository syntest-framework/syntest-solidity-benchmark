const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicDVg36X9 = await Dynamic.new({from: accounts[2]});
		const uintzmckaX = BigInt("123")
		const stringmve4EKT = "inGyFDrdmw6ozuJsnujAq"
		const uinthP80xXG = BigInt("1600")
		const boolSQbyqDO = await DynamicDVg36X9.yolo.call(uinthP80xXG, stringmve4EKT, uintzmckaX, {from: accounts[4]});
		const boolLiuOCis = await DynamicDVg36X9.echidna_test.call({from: accounts[3]});
		const boolTcrKxw4 = await DynamicDVg36X9.echidna_test.call({from: accounts[3]});
		const booldz1uKxR = await DynamicDVg36X9.echidna_test.call({from: accounts[1]});
		const boolZoGGc6m = await DynamicDVg36X9.echidna_test.call({from: accounts[4]});

		assert.equal(boolLiuOCis, true)
		assert.equal(boolSQbyqDO, true)
		assert.equal(boolTcrKxw4, true)
		assert.equal(boolZoGGc6m, true)
		assert.equal(booldz1uKxR, true)
	});

	it('test for Dynamic', async () => {
		const DynamicG7RXqko = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const boolYOfjeJ = await DynamicG7RXqko.echidna_test.call({from: accounts[4]});
		const bool95Dyfs = await DynamicG7RXqko.echidna_test.call({from: accounts[3]});
		const bool01aiDW = await DynamicG7RXqko.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIaod2Y8 = await DynamicG7RXqko.echidna_test.call({from: accounts[0]});
		const boolKME7BrU = await DynamicG7RXqko.echidna_test.call({from: accounts[3]});
		const boolW0YFcn5 = await DynamicG7RXqko.echidna_test.call({from: accounts[4]});
	});
})