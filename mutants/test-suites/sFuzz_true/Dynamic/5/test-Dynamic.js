const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicAIMvf6x = await Dynamic.new({from: accounts[3]});
		const uintm9CX09I = BigInt("1630")
		const stringomRyPiB = "ua99BJt1X2XM064Tbw0cDMxDOKiix1SlBuQD"
		const uintf7vHJgh = BigInt("653")
		const uintQKUaEq = BigInt("1822")
		const stringUJshM8W = "vyAHKwhdf"
		const uintaLRS7uP = BigInt("1089")
		const boolAD0FLyI = await DynamicAIMvf6x.echidna_test.call({from: accounts[0]});
		const booluGveFU5 = await DynamicAIMvf6x.yolo.call(uintf7vHJgh, stringomRyPiB, uintm9CX09I, {from: accounts[5]});
		const boolI8jdYz = await DynamicAIMvf6x.yolo.call(uintaLRS7uP, stringUJshM8W, uintQKUaEq, {from: accounts[3]});
		const boolKMWoVF9 = await DynamicAIMvf6x.echidna_test.call({from: accounts[1]});

		assert.equal(boolAD0FLyI, true)
		assert.equal(boolI8jdYz, true)
		assert.equal(boolKMWoVF9, true)
		assert.equal(booluGveFU5, true)
	});

	it('test for Dynamic', async () => {
		const DynamicGNKxvcR = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwqJysjC = BigInt("779")
		const stringP5lJ2G = "hKJIZzEIykIpgQsgNQH"
		const uintsdMoFux = BigInt("1112")
		const uintr7zzGU5 = BigInt("831")
		const stringYP9VPIk = "h1MB3CMjCUBO5PvY6jRSvLUKQRz57HqAK5lhYZ"
		const uintSc5Z87l = BigInt("1977")
		const uintn8CRWn = BigInt("1327")
		const stringWPoO0Ir = "IJatfuXNy6rHb9WFfIgmsdapAa2JWyhvHPnQNJ7xiD4ChpmAb7Q2PLn6bnqRTbmxBnZid1"
		const uintdWR4M9I = BigInt("206")
		const boolEcVTQip = await DynamicGNKxvcR.yolo.call(uintsdMoFux, stringP5lJ2G, uintwqJysjC, {from: "0x0000000000000000000000000000000000000001"});
		const boolgm9P5hk = await DynamicGNKxvcR.echidna_test.call({from: accounts[4]});
		const boolybSLJHV = await DynamicGNKxvcR.yolo.call(uintSc5Z87l, stringYP9VPIk, uintr7zzGU5, {from: accounts[1]});
		const boolh5f4ldi = await DynamicGNKxvcR.yolo.call(uintdWR4M9I, stringWPoO0Ir, uintn8CRWn, {from: accounts[4]});
		const boolLVcbFG6 = await DynamicGNKxvcR.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
	});
})