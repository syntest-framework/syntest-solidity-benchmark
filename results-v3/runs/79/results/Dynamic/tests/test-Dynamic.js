const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicRLOtnf8 = await Dynamic.new({from: accounts[5]});
		const uintrRUZJ3E = BigInt("1751")
		const stringQC9bv1 = "dKMJuPd1ZyF5YFNHtFQSAJgIWQ7iEgdnUoabfQwR4lT2labfuRbMoPdO4qpg5ILrhfVpGLujq008iBXNnvjf"
		const uintjHfAuqk = BigInt("433")
		const uintBqLR5mr = BigInt("89")
		const stringFOZq1Q5 = "Q5kw3TtQwRmbT6ndy7zxOLBFf3hkMvxQ4EFuhOfnmHPIUvXw30lzI1ZyLeo4w8QbMc2EeVtn6iHtgmlFTD6B1"
		const uintrgwycRn = BigInt("716")
		const uintCZ5mVuZ = BigInt("1173")
		const stringef3vo6 = "6qA8zods"
		const uintIqksfgH = BigInt("128")
		const uintqGzfwXY = BigInt("852")
		const string5DntFo = "k6S21sOKTY3CkIiIAt08CuT2iWeaQznm"
		const uintEjYBwBS = BigInt("1087")
		const boolelaS7j3 = await DynamicRLOtnf8.yolo.call(uintjHfAuqk, stringQC9bv1, uintrRUZJ3E, {from: "0x0000000000000000000000000000000000000001"});
		const booleNY56mT = await DynamicRLOtnf8.yolo.call(uintrgwycRn, stringFOZq1Q5, uintBqLR5mr, {from: accounts[2]});
		const boolrBkxfKK = await DynamicRLOtnf8.yolo.call(uintIqksfgH, stringef3vo6, uintCZ5mVuZ, {from: accounts[2]});
		const boolmdkKrFp = await DynamicRLOtnf8.yolo.call(uintEjYBwBS, string5DntFo, uintqGzfwXY, {from: accounts[0]});
		const boolXTTQXh7 = await DynamicRLOtnf8.echidna_test.call({from: accounts[0]});

		assert.equal(boolXTTQXh7, true)
		assert.equal(booleNY56mT, true)
		assert.equal(boolelaS7j3, true)
		assert.equal(boolmdkKrFp, true)
		assert.equal(boolrBkxfKK, true)
	});

	it('test for Dynamic', async () => {
		const DynamicMgP992 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzPm2Y6k = BigInt("1372")
		const stringFKnB1Xn = "f28t"
		const uintfoC5edZ = BigInt("1078")
		const uintms8GyPa = BigInt("531")
		const stringg8K69h6 = "TNMMZJgvsFKXKcTvosN2Ql3JsHMb69jECF9tAqffJPfHpFM26evPUgoUyR5PGGf6Ym3tNxR2gM3A2Gyqh"
		const uintuWX4rp8 = BigInt("790")
		const uint0SvTlw = BigInt("1618")
		const stringWl7gaM = "K5nTGRsEljOTHxPoIgXyLGXp"
		const uintJhYTwI = BigInt("1069")
		const boolRAWnUjQ = await DynamicMgP992.echidna_test.call({from: accounts[2]});
		const boolWBaN2AQ = await DynamicMgP992.yolo.call(uintfoC5edZ, stringFKnB1Xn, uintzPm2Y6k, {from: accounts[3]});
		const boolm3ocTJZ = await DynamicMgP992.yolo.call(uintuWX4rp8, stringg8K69h6, uintms8GyPa, {from: accounts[5]});
		const boolgYxMcsA = await DynamicMgP992.yolo.call(uintJhYTwI, stringWl7gaM, uint0SvTlw, {from: accounts[5]});
		const booleJB7qRS = await DynamicMgP992.echidna_test.call({from: accounts[4]});
	});
})