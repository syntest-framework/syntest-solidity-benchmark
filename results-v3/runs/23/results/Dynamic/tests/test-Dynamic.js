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
		const DynamicHvsyrML = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintitKHe1r = BigInt("1312")
		const stringCcdv1o8 = "oi7j9UC12viqrLTtsE2EY"
		const uintApwcqhV = BigInt("1531")
		const uintd7jwoP = BigInt("392")
		const stringLERJvRC = "kmWDYikaR5"
		const uintLAzmXj8 = BigInt("1638")
		const uintIOCpqCo = BigInt("1950")
		const stringSQYFQIS = "niXtb2iAMjwm8wgl9dDOXYNIiRlsXZRNWbm2uPuE87ZivbOVpMvto"
		const uintq11f1mm = BigInt("1084")
		const boolBwUj2w0 = await DynamicHvsyrML.yolo.call(uintApwcqhV, stringCcdv1o8, uintitKHe1r, {from: accounts[1]});
		const boolm9bsSSZ = await DynamicHvsyrML.yolo.call(uintLAzmXj8, stringLERJvRC, uintd7jwoP, {from: accounts[3]});
		const boolcNu5yUg = await DynamicHvsyrML.yolo.call(uintq11f1mm, stringSQYFQIS, uintIOCpqCo, {from: accounts[1]});
	});
})