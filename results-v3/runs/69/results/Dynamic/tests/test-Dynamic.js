const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicmWC0bIt = await Dynamic.new({from: accounts[0]});
		const uintIMRYUF9 = BigInt("362")
		const stringOmNKQLb = "f3FH"
		const uintk2XgZrA = BigInt("1890")
		const uintZVYudo = BigInt("1649")
		const stringhGP4Fg9 = "jGzWpJY2HMjod2rUiCszGlNRlex1x716mjo8lhSAVjy96zq7YFgzZMy3GbiuU7q8I"
		const uintNwVlrU = BigInt("404")
		const boolIVvcMhY = await DynamicmWC0bIt.yolo.call(uintk2XgZrA, stringOmNKQLb, uintIMRYUF9, {from: accounts[0]});
		const boolXLTYcDO = await DynamicmWC0bIt.yolo.call(uintNwVlrU, stringhGP4Fg9, uintZVYudo, {from: accounts[2]});
		const booloYrtftX = await DynamicmWC0bIt.echidna_test.call({from: accounts[2]});

		assert.equal(boolIVvcMhY, true)
		assert.equal(boolXLTYcDO, true)
		assert.equal(booloYrtftX, true)
	});

	it('test for Dynamic', async () => {
		const DynamicNqR9qmt = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintytiTC7C = BigInt("1515")
		const stringVBMwAdr = "MSXHmOCGm8VKYz0MY99LqpzXE0KdlfOaPGBgtNLOIAswbDWr5gjYGOJ9Q9iWJZayoFPiW6slCbYBVOrz"
		const uintomHTpxy = BigInt("2011")
		const uintfYHvxJl = BigInt("717")
		const stringkYtaqWA = "6DJFrjjiLJO"
		const uintuVt4YzH = BigInt("1136")
		const boola8iB1LL = await DynamicNqR9qmt.yolo.call(uintomHTpxy, stringVBMwAdr, uintytiTC7C, {from: accounts[4]});
		const boolzv6KFH2 = await DynamicNqR9qmt.yolo.call(uintuVt4YzH, stringkYtaqWA, uintfYHvxJl, {from: accounts[5]});
		const boolAKgxoL4 = await DynamicNqR9qmt.echidna_test.call({from: accounts[0]});
		const boolVgNulnc = await DynamicNqR9qmt.echidna_test.call({from: accounts[0]});
	});
})