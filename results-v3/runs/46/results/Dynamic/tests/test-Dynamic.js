const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicYB0rS2A = await Dynamic.new({from: accounts[0]});
		const uintoMpkPL = BigInt("1924")
		const stringAnvvVt = "nbY9VHkcDLEhe1RrRJU7APUa2Ng1RRIpUOyDoVa4tyE3Mip0rLdI4"
		const uintxf0JaQL = BigInt("433")
		const boolHKTXeC7 = await DynamicYB0rS2A.echidna_test.call({from: accounts[2]});
		const boolA3wsm9X = await DynamicYB0rS2A.echidna_test.call({from: accounts[3]});
		const boolQ4OiUFg = await DynamicYB0rS2A.yolo.call(uintxf0JaQL, stringAnvvVt, uintoMpkPL, {from: accounts[3]});
		const boolCk8Exfb = await DynamicYB0rS2A.echidna_test.call({from: accounts[0]});

		assert.equal(boolA3wsm9X, true)
		assert.equal(boolCk8Exfb, true)
		assert.equal(boolHKTXeC7, true)
		assert.equal(boolQ4OiUFg, true)
	});

	it('test for Dynamic', async () => {
		const DynamiclqiieSh = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmAKDUk = BigInt("1895")
		const stringz8q6xW9 = "s8"
		const uintsg8JAuO = BigInt("373")
		const uintgf01qIM = BigInt("561")
		const stringWcmuKtC = "weQiFy8VHBEBCLiNRxeVxBiRwuxWLR3poWvZ7CpuJyXVVl3bmkkNSEyAf"
		const uintyN7NqZL = BigInt("1972")
		const boolZ0KNB9I = await DynamiclqiieSh.yolo.call(uintsg8JAuO, stringz8q6xW9, uintmAKDUk, {from: accounts[1]});
		const boolhjeteaD = await DynamiclqiieSh.echidna_test.call({from: accounts[4]});
		const boolAi5QqLl = await DynamiclqiieSh.echidna_test.call({from: accounts[4]});
		const boolxI26fva = await DynamiclqiieSh.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolgy1u77y = await DynamiclqiieSh.yolo.call(uintyN7NqZL, stringWcmuKtC, uintgf01qIM, {from: accounts[2]});
	});
})