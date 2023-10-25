const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicqQmwz5m = await Dynamic.new({from: accounts[2]});
		const uintuZvb9OB = BigInt("1143")
		const stringz287YWn = "V5FvOqbYX3NdrrgXjgQ1zPeIxl9MSZRquS1N9xW74wmfOuCSQiRvILskezFHW6x6mH00"
		const uintTvPOMsy = BigInt("1086")
		const booltfHKcWB = await DynamicqQmwz5m.echidna_test.call({from: accounts[0]});
		const boolzoK0DEf = await DynamicqQmwz5m.yolo.call(uintTvPOMsy, stringz287YWn, uintuZvb9OB, {from: accounts[0]});
		const boolyG8DwDW = await DynamicqQmwz5m.echidna_test.call({from: accounts[0]});
		const boolfZRsnlX = await DynamicqQmwz5m.echidna_test.call({from: accounts[3]});

		assert.equal(boolfZRsnlX, true)
		assert.equal(booltfHKcWB, true)
		assert.equal(boolyG8DwDW, true)
		assert.equal(boolzoK0DEf, true)
	});

	it('test for Dynamic', async () => {
		const DynamickETO8WC = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvaNuIex = BigInt("1073")
		const stringWI9Gabn = "Mzdhl49bP8d35F62Fne4vkO4CubJHcwmbBlPvpnoDZ9mQvMHxYC"
		const uintEmvB2r = BigInt("912")
		const uintDFTjWad = BigInt("1552")
		const stringonZh9s6 = "yD8aaqLCkovatvnujfsFTWhvVwIXbnNk5bwNV5bHKWrc2JM1Gbna7Swye2w5b"
		const uintIuEKxiR = BigInt("1187")
		const booliv741Qj = await DynamickETO8WC.yolo.call(uintEmvB2r, stringWI9Gabn, uintvaNuIex, {from: accounts[4]});
		const boolESVkFF = await DynamickETO8WC.yolo.call(uintIuEKxiR, stringonZh9s6, uintDFTjWad, {from: accounts[0]});
	});
})