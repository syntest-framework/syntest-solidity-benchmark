const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicswwU8Nd = await Dynamic.new({from: accounts[4]});
		const uintxXMWzuH = BigInt("578")
		const stringbhxj7sX = "VDRSsBe8eUMRXclRxvOrKaQ6jmQDO9VZs271t2XLJYCVuop9XF2WHFBc31dWSdomj"
		const uintmeaSeBi = BigInt("1991")
		const booluQiCaWY = await DynamicswwU8Nd.echidna_test.call({from: accounts[0]});
		const boolHHXNm4n = await DynamicswwU8Nd.yolo.call(uintmeaSeBi, stringbhxj7sX, uintxXMWzuH, {from: accounts[4]});
		const boolP9gA6gR = await DynamicswwU8Nd.echidna_test.call({from: accounts[0]});
		const boolzn2HKkN = await DynamicswwU8Nd.echidna_test.call({from: accounts[1]});
		const boolneQyjEb = await DynamicswwU8Nd.echidna_test.call({from: accounts[1]});

		assert.equal(boolHHXNm4n, true)
		assert.equal(boolP9gA6gR, true)
		assert.equal(boolneQyjEb, true)
		assert.equal(booluQiCaWY, true)
		assert.equal(boolzn2HKkN, true)
	});

	it('test for Dynamic', async () => {
		const DynamicwpSFHT5 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdD8uhGY = BigInt("2043")
		const stringAQ7sgXt = "rWpHjncdQrDfw6TN3Fl6jDRO4V6XrGMdHgI3zUIpflzgDjIkaY9wpVVayNqUJtyIhzzklnzQ2WAsx3aEPPuh2z"
		const uintsc1bq3F = BigInt("1256")
		const boolN11ldhV = await DynamicwpSFHT5.echidna_test.call({from: accounts[2]});
		const boolc23hTDd = await DynamicwpSFHT5.yolo.call(uintsc1bq3F, stringAQ7sgXt, uintdD8uhGY, {from: accounts[4]});
		const booldCIhO89 = await DynamicwpSFHT5.echidna_test.call({from: accounts[0]});
	});
})