const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicLUrGmfa = await Dynamic.new({from: accounts[0]});
		const uintnKsRZqP = BigInt("680")
		const stringFNvQjam = "1I9ioD"
		const uintXYwvEJ = BigInt("1167")
		const uintPxZgH3D = BigInt("1024")
		const stringqNR2XUh = "JfXA8g10kicj5SOv5EWw52F1UcevzU5pHiH3PvvyBSvLszDjpNQOFKe9v765mOPN"
		const uintIICQXyF = BigInt("548")
		const boolO1V4ga = await DynamicLUrGmfa.echidna_test.call({from: accounts[4]});
		const bool5peBpE = await DynamicLUrGmfa.yolo.call(uintXYwvEJ, stringFNvQjam, uintnKsRZqP, {from: accounts[2]});
		const boolmHDt2b = await DynamicLUrGmfa.yolo.call(uintIICQXyF, stringqNR2XUh, uintPxZgH3D, {from: accounts[4]});

		assert.equal(bool5peBpE, true)
		assert.equal(boolO1V4ga, true)
		assert.equal(boolmHDt2b, true)
	});

	it('test for Dynamic', async () => {
		const DynamicQQp9F1t = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnjOfVQX = BigInt("552")
		const stringQMLYOFS = "eCBspRhzZIL6XBdleARrhh37XAfrXSqkjJI1NNdEzqjYL7ZTZoDAYlCJcXFqJrpKMHElqKcvHC7DHNoIBme7LeRlzWvfv"
		const uintpqoQd0x = BigInt("1263")
		const boolZ6fTmeo = await DynamicQQp9F1t.echidna_test.call({from: accounts[0]});
		const bool1vlTpp = await DynamicQQp9F1t.yolo.call(uintpqoQd0x, stringQMLYOFS, uintnjOfVQX, {from: accounts[1]});
		const bool3mzXsT = await DynamicQQp9F1t.echidna_test.call({from: accounts[3]});
	});
})