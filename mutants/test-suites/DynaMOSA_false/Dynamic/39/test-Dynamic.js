const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamiciWJTPxf = await Dynamic.new({from: accounts[4]});
		const uintKAiGnkG = BigInt("1729")
		const stringDxHhYsw = "ATmIp7yjMQtN7GVrLQt56PTXe9Nfz3vuX"
		const uintF3U2tNb = BigInt("558")
		const boolu3wqza = await DynamiciWJTPxf.yolo.call(uintF3U2tNb, stringDxHhYsw, uintKAiGnkG, {from: accounts[1]});
		const boolFPXeaSf = await DynamiciWJTPxf.echidna_test.call({from: accounts[4]});
		const boolmxHeF9U = await DynamiciWJTPxf.echidna_test.call({from: accounts[4]});

		assert.equal(boolFPXeaSf, true)
		assert.equal(boolmxHeF9U, true)
		assert.equal(boolu3wqza, true)
	});

	it('test for Dynamic', async () => {
		const DynamicENsb4Ba = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJSqvaqS = BigInt("1745")
		const stringPPp3TIe = "RWo7vbXI"
		const uintWkg4LV = BigInt("97")
		const uintYAOo29C = BigInt("1315")
		const stringmQvkiTl = "eycoqxRKyNqkMVWHc22Yi2RHjmaMThfjKvHtBn"
		const uintePvpGh = BigInt("929")
		const uintnrXedSS = BigInt("1708")
		const stringOe2BtjF = "KJLWc2aKndx62q"
		const uintAPEbX9v = BigInt("1339")
		const boolr3uFKnA = await DynamicENsb4Ba.echidna_test.call({from: accounts[3]});
		const boolqNn8QqN = await DynamicENsb4Ba.echidna_test.call({from: accounts[5]});
		const boolWVqrmZ = await DynamicENsb4Ba.echidna_test.call({from: accounts[4]});
		const boolrtLCI7 = await DynamicENsb4Ba.yolo.call(uintWkg4LV, stringPPp3TIe, uintJSqvaqS, {from: accounts[1]});
		const bool9c2gdC = await DynamicENsb4Ba.yolo.call(uintePvpGh, stringmQvkiTl, uintYAOo29C, {from: accounts[4]});
		const booloGXli97 = await DynamicENsb4Ba.yolo.call(uintAPEbX9v, stringOe2BtjF, uintnrXedSS, {from: accounts[2]});
	});
})