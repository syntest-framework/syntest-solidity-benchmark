const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicFBE5HF = await Dynamic.new({from: accounts[1]});
		const uintbdA3rFD = BigInt("238")
		const stringHMakfW4 = "fvcJQ5vKwjqwl8CaCyXp5lRt5tVGYcZHy8hppXQiS5ZTCKQIDPkCdQW7dSjupxDhBtuS4tuS"
		const uintbt46Vpg = BigInt("19")
		const uintHEazoNB = BigInt("178")
		const stringK1NUoeZ = "B99LSHzkufiWvgyYGT2hDieKa5WB8FI4FsxHaoEtqisJlAlejM7fRE28BdpVKMHVCnXtQrWL6JxMImiJK"
		const uintiblsHQY = BigInt("682")
		const boolkPDBKKi = await DynamicFBE5HF.echidna_test.call({from: accounts[2]});
		const bool8VIh8C = await DynamicFBE5HF.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolMg81CEq = await DynamicFBE5HF.yolo.call(uintbt46Vpg, stringHMakfW4, uintbdA3rFD, {from: accounts[5]});
		const boolO4rODZ4 = await DynamicFBE5HF.yolo.call(uintiblsHQY, stringK1NUoeZ, uintHEazoNB, {from: "0x0000000000000000000000000000000000000001"});
		const boolf0WmngC = await DynamicFBE5HF.echidna_test.call({from: accounts[0]});

		assert.equal(bool8VIh8C, true)
		assert.equal(boolMg81CEq, true)
		assert.equal(boolO4rODZ4, true)
		assert.equal(boolf0WmngC, true)
		assert.equal(boolkPDBKKi, true)
	});

	it('test for Dynamic', async () => {
		const DynamicoFuxucm = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB1l2POJ = BigInt("1097")
		const stringcFBHNfn = "6IsWNLhL05qIgOW3qfATie2Y"
		const uintXUsvLbE = BigInt("1601")
		const boolmXPd10Q = await DynamicoFuxucm.yolo.call(uintXUsvLbE, stringcFBHNfn, uintB1l2POJ, {from: accounts[4]});
		const boolQBtiuY2 = await DynamicoFuxucm.echidna_test.call({from: accounts[0]});
		const boolgjNk0H1 = await DynamicoFuxucm.echidna_test.call({from: accounts[0]});
	});
})