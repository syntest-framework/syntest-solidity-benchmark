const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicxSUymjC = await Dynamic.new({from: accounts[3]});
		const boolHcvugA8 = await DynamicxSUymjC.echidna_test.call({from: accounts[3]});
		const boolbNQqt3 = await DynamicxSUymjC.echidna_test.call({from: accounts[0]});
		const boollLIATTH = await DynamicxSUymjC.echidna_test.call({from: accounts[1]});
		const boolGH8A3rj = await DynamicxSUymjC.echidna_test.call({from: accounts[3]});

		assert.equal(boolGH8A3rj, true)
		assert.equal(boolHcvugA8, true)
		assert.equal(boolbNQqt3, true)
		assert.equal(boollLIATTH, true)
	});

	it('test for Dynamic', async () => {
		const Dynamicevq0PA = await Dynamic.new({from: accounts[2]});
		const uintmIad6h = BigInt("594")
		const stringHk0QnD0 = "a1KxIY2vGNc7wXoZL2rWYPPcby0ACakmfbqb21qRgFz5D7gJzCVeQcv7LXo"
		const uintGkEQkjg = BigInt("986")
		const uintM1d67WZ = BigInt("1261")
		const stringAv6oDnB = "kGY4L53czgiO3TTrsAL"
		const uintTxo2er9 = BigInt("687")
		const bool04ZlOY = await Dynamicevq0PA.yolo.call(uintGkEQkjg, stringHk0QnD0, uintmIad6h, {from: accounts[1]});
		const boolNVie3d0 = await Dynamicevq0PA.echidna_test.call({from: accounts[0]});
		const boolLWcPMFe = await Dynamicevq0PA.yolo.call(uintTxo2er9, stringAv6oDnB, uintM1d67WZ, {from: accounts[1]});

		assert.equal(bool04ZlOY, true)
		assert.equal(boolLWcPMFe, true)
		assert.equal(boolNVie3d0, true)
	});

	it('test for Dynamic', async () => {
		const DynamicvtFWjLP = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwlYvUYM = BigInt("364")
		const stringlYWDyhp = "4Th7alR8qYBvp3WAECWefXngukfwzvZH"
		const uintI5BEOp9 = BigInt("1454")
		const boolISxeAnk = await DynamicvtFWjLP.echidna_test.call({from: accounts[2]});
		const boolGFkPovt = await DynamicvtFWjLP.echidna_test.call({from: accounts[1]});
		const boolyM4yC66 = await DynamicvtFWjLP.yolo.call(uintI5BEOp9, stringlYWDyhp, uintwlYvUYM, {from: accounts[0]});
	});
})