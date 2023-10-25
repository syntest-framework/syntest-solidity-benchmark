const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicON8Q4zV = await Dynamic.new({from: accounts[2]});
		const uintt9wO8B1 = BigInt("1412")
		const stringEOJewA8 = "ZZ1bqDOvVJO6FqN3Vx"
		const uinthXftJ9Z = BigInt("623")
		const boolr3dkxcw = await DynamicON8Q4zV.echidna_test.call({from: accounts[2]});
		const boolGFeu6TR = await DynamicON8Q4zV.echidna_test.call({from: accounts[3]});
		const boolaOVgP7k = await DynamicON8Q4zV.echidna_test.call({from: accounts[2]});
		const boolgWyTTW4 = await DynamicON8Q4zV.yolo.call(uinthXftJ9Z, stringEOJewA8, uintt9wO8B1, {from: accounts[0]});
		const boolwChppZP = await DynamicON8Q4zV.echidna_test.call({from: accounts[5]});

		assert.equal(boolGFeu6TR, true)
		assert.equal(boolaOVgP7k, true)
		assert.equal(boolgWyTTW4, true)
		assert.equal(boolr3dkxcw, true)
		assert.equal(boolwChppZP, true)
	});

	it('test for Dynamic', async () => {
		const DynamicLcuGRUQ = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvN3P06I = BigInt("807")
		const stringz9Y1Qq4 = "e2uTOvfgk2RTzlH85u8rbTxgqkOPRMbuhd7gEbKfjYnU3sfzruLg15P"
		const uintmdjmemN = BigInt("721")
		const uintpEdc0WB = BigInt("658")
		const stringcINGw81 = "iG9xG1VPvesxN9tX5gqx9N4dhiODhIoik08VDxT"
		const uint3pGXj4 = BigInt("1229")
		const uintxaavbW0 = BigInt("983")
		const stringRe9njTh = "fTjf6gYlgjavIhhLja13bOIaJTONsMYE2kThud7UG6feNcQP2T76XRbUypN698LumsCoNEnWlsvN7xNNY2eObxgbM5"
		const uintMYpGkKq = BigInt("1438")
		const boolfaRPwS = await DynamicLcuGRUQ.yolo.call(uintmdjmemN, stringz9Y1Qq4, uintvN3P06I, {from: accounts[4]});
		const booloxMkGbt = await DynamicLcuGRUQ.yolo.call(uint3pGXj4, stringcINGw81, uintpEdc0WB, {from: accounts[4]});
		const boolWfcJrN = await DynamicLcuGRUQ.yolo.call(uintMYpGkKq, stringRe9njTh, uintxaavbW0, {from: accounts[0]});
	});
})