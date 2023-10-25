const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicjT9ek0f = await Dynamic.new({from: accounts[0]});
		const uintoHxJT4 = BigInt("1826")
		const string3kpsXx = "WqcQqIpih8mzXQYS4klzRNhxSf5xhccvSgVPhCWnFusO3qbFqkhEWtQOWBMjhqq4tV5"
		const uintYiYgGcu = BigInt("1505")
		const uintilJ6RXo = BigInt("1859")
		const stringN5iJtnD = "uNPP5oxNJkhDr"
		const uintWRaqwgy = BigInt("1654")
		const boolKNiuXht = await DynamicjT9ek0f.echidna_test.call({from: accounts[1]});
		const boolyQrVAk = await DynamicjT9ek0f.echidna_test.call({from: accounts[2]});
		const boolexTSb39 = await DynamicjT9ek0f.yolo.call(uintYiYgGcu, string3kpsXx, uintoHxJT4, {from: accounts[0]});
		const bool3xyHxO = await DynamicjT9ek0f.yolo.call(uintWRaqwgy, stringN5iJtnD, uintilJ6RXo, {from: accounts[2]});

		assert.equal(bool3xyHxO, true)
		assert.equal(boolKNiuXht, true)
		assert.equal(boolexTSb39, true)
		assert.equal(boolyQrVAk, true)
	});

	it('test for Dynamic', async () => {
		const DynamicCHHgnG5 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkGOW6j = BigInt("860")
		const stringgn19fkm = "9jG2ykffBkKVphIJAhJ0qRmGxFYoGKDbsrs5xNaUekM6HR4"
		const uintalTQomF = BigInt("1967")
		const boolJp2JRl2 = await DynamicCHHgnG5.echidna_test.call({from: accounts[5]});
		const boolnUYlk7A = await DynamicCHHgnG5.yolo.call(uintalTQomF, stringgn19fkm, uintkGOW6j, {from: accounts[0]});
	});
})