const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamiceGPzQoW = await Dynamic.new({from: accounts[1]});
		const uintQRJKKbO = BigInt("1843")
		const stringelHMiys = "8QDUxZnlJBPiV4RqKRPt3hcUB9yAVDGOVXYC6M3U9CN1LTc7IenXLSsHs"
		const uintJbOmPeY = BigInt("1107")
		const boola10l4e = await DynamiceGPzQoW.echidna_test.call({from: accounts[1]});
		const booluhf1YYd = await DynamiceGPzQoW.echidna_test.call({from: accounts[2]});
		const boolkvbitpb = await DynamiceGPzQoW.yolo.call(uintJbOmPeY, stringelHMiys, uintQRJKKbO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boola10l4e, true)
		assert.equal(boolkvbitpb, true)
		assert.equal(booluhf1YYd, true)
	});

	it('test for Dynamic', async () => {
		const DynamicEQj67zM = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZbm5N3 = BigInt("49")
		const stringjPyYSiq = "asXUJTJ85EYgD3e7ZL7YcDqaPoDxlQL5BIYhWtDRHmzIt8cZWqri1YJxGSb4rWWrpCQTmO8ywwHsLFY58aU7QqsEG6KPT3Ohqqf"
		const uintVvQQZTQ = BigInt("263")
		const uintfstZBF = BigInt("1449")
		const stringm7snOC2 = "41NdNt789DHQvgFdvABLx"
		const uinttgmebMl = BigInt("734")
		const uintU9YZ9cY = BigInt("1353")
		const stringzDoW4fs = ""
		const uintDvIf8Uv = BigInt("1780")
		const boolLY49jbv = await DynamicEQj67zM.echidna_test.call({from: accounts[4]});
		const boolquj4gnj = await DynamicEQj67zM.yolo.call(uintVvQQZTQ, stringjPyYSiq, uintZbm5N3, {from: accounts[1]});
		const boolIkTpxhU = await DynamicEQj67zM.yolo.call(uinttgmebMl, stringm7snOC2, uintfstZBF, {from: accounts[0]});
		const boolYlLINm = await DynamicEQj67zM.yolo.call(uintDvIf8Uv, stringzDoW4fs, uintU9YZ9cY, {from: accounts[0]});
		const boolbr9fnfN = await DynamicEQj67zM.echidna_test.call({from: accounts[1]});
	});
})