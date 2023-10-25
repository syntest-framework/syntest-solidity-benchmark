const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicrNqveOZ = await Dynamic.new({from: accounts[1]});
		const uintYLQnwOh = BigInt("565")
		const stringASBbbEn = "0"
		const uintHju4jCx = BigInt("698")
		const boolMbu3j5Q = await DynamicrNqveOZ.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQrnKETS = await DynamicrNqveOZ.echidna_test.call({from: accounts[0]});
		const booladPJcKj = await DynamicrNqveOZ.echidna_test.call({from: accounts[0]});
		const boolGREBPK = await DynamicrNqveOZ.yolo.call(uintHju4jCx, stringASBbbEn, uintYLQnwOh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGREBPK, true)
		assert.equal(boolMbu3j5Q, true)
		assert.equal(boolQrnKETS, true)
		assert.equal(booladPJcKj, true)
	});

	it('test for Dynamic', async () => {
		const DynamicjxsiK38 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDJbnfP = BigInt("1675")
		const stringSsmjs5a = "C"
		const uintGIt8HY8 = BigInt("1533")
		const boolKzyyZnM = await DynamicjxsiK38.echidna_test.call({from: accounts[2]});
		const boolfr68UVh = await DynamicjxsiK38.echidna_test.call({from: accounts[2]});
		const boolSbwcsUN = await DynamicjxsiK38.echidna_test.call({from: accounts[0]});
		const boolMDw6YwW = await DynamicjxsiK38.echidna_test.call({from: accounts[2]});
		const boolsz7Nt66 = await DynamicjxsiK38.yolo.call(uintGIt8HY8, stringSsmjs5a, uintDJbnfP, {from: accounts[0]});
	});
})