const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintj3E0C62 = BigInt("1932")
		const WOLFv6IU9Us = await WOLF.new(stringORNsUR1, stringJLirNdd, uintj3E0C62, {from: accounts[0]});
		const uintf9IPcIO = BigInt("1221")
		const address7BCroO = accounts[3]
		const uintiP2BU0U = BigInt("500")
		const addressV1LJGTB = accounts[2]
		const uintEbmzhRT = BigInt("1180")
		const addressA5Dwii = accounts[2]
		const uintiV6MVwX = BigInt("267")
		const addresslObnAVe = accounts[2]
		const boolq6o4mjk = await WOLFv6IU9Us.approveAndCall.call(address7BCroO, uintf9IPcIO, {from: accounts[0]});
//		const boolKg1nQPG = await WOLFv6IU9Us.approveAndCall.call(addressV1LJGTB, uintiP2BU0U, {from: accounts[5]});
//		const boolFrjxDC7 = await WOLFv6IU9Us.transfer.call(addressA5Dwii, uintEbmzhRT, {from: accounts[4]});
//		const boolWwMzmrQ = await WOLFv6IU9Us.transfer.call(addresslObnAVe, uintiV6MVwX, {from: accounts[4]});

		assert.equal(boolq6o4mjk, true)
		await expect(WOLFv6IU9Us.approveAndCall.call(addressV1LJGTB, uintiP2BU0U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringgpRa5oh = "BbXFgGaFcsWOCp9NXYII4Vn5LECnJoeFy9znaqBkpQYWhl4dtL34NN5ECJzTdcyQCMUtf3hb8I3Ha4CLtcDTtcD"
		const stringRzTWsBP = "ZW"
		const uintetuCFPx = BigInt("62")
		const WOLFujx2cby = await WOLF.new(stringgpRa5oh, stringRzTWsBP, uintetuCFPx, {from: accounts[0]});
		const uintH31czpZ = BigInt("1589")
		const addressgxni95I = accounts[1]
		const uintY9fXCD = BigInt("1822")
		const addressphKMmk5 = accounts[0]
		const uintuCzojbw = BigInt("1730")
		const addressmxcExWw = accounts[0]
//		const boolrw46xHx = await WOLFujx2cby.transfer.call(addressgxni95I, uintH31czpZ, {from: accounts[2]});
//		const booleF2i2N6 = await WOLFujx2cby.approveAndCall.call(addressphKMmk5, uintY9fXCD, {from: accounts[1]});
//		const boolZrrCENm = await WOLFujx2cby.transfer.call(addressmxcExWw, uintuCzojbw, {from: accounts[1]});

		await expect(WOLFujx2cby.transfer.call(addressgxni95I, uintH31czpZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const string1vzJmm = "2LpMq42DCyzpMddknjIF1PtLRBeqWHfj0TOmzmKYTjGpHB9RuRX01"
		const stringdL6aPbw = "va7OV2dBKsuKGFXigjqQ7m7KLxVuBwDrW2gpf"
		const uintjTKgb3T = BigInt("1817")
		const WOLFhfPYu91 = await WOLF.new(string1vzJmm, stringdL6aPbw, uintjTKgb3T, {from: accounts[2]});
		const uintZq01cZ = BigInt("2044")
		const addressKGrLdc = "0x0000000000000000000000000000000000000001"
		const addressOdq438 = accounts[3]
		const uintgjwJLB = BigInt("1245")
		const addressICRqcnd = accounts[3]
		const uintS9qOQbK = BigInt("513")
		const addressRbw7Bwf = accounts[5]
		const boolvZxh0Si = await WOLFhfPYu91.approve.call(addressKGrLdc, uintZq01cZ, {from: accounts[2]});
//		const boolMXL6CLq = await WOLFhfPYu91.transferownership.call(addressOdq438, {from: accounts[0]});
//		const boolNkm2Hy = await WOLFhfPYu91.approveAndCall.call(addressICRqcnd, uintgjwJLB, {from: accounts[3]});
//		const boolqqiDAqV = await WOLFhfPYu91.approveAndCall.call(addressRbw7Bwf, uintS9qOQbK, {from: accounts[2]});

		assert.equal(boolvZxh0Si, true)
		await expect(WOLFhfPYu91.transferownership.call(addressOdq438, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintsgpjb1y = BigInt("1932")
		const WOLFv6IU9Us = await WOLF.new(stringORNsUR1, stringJLirNdd, uintsgpjb1y, {from: accounts[0]});
		const uintdcjIIB5 = BigInt("1127")
		const addressQ4knBiz = accounts[0]
		const uinthJp9ZK = BigInt("1221")
		const addressW6iGg4S = accounts[3]
		const uintW8iXJLC = BigInt("1847")
		const addressKR3nXX1 = accounts[2]
		const uintRf6Ov4K = BigInt("1180")
		const addressGVUM5zK = accounts[2]
//		const boolgXhfpE = await WOLFv6IU9Us.transfer.call(addressQ4knBiz, uintdcjIIB5, {from: accounts[1]});
//		const boolq6o4mjk = await WOLFv6IU9Us.approveAndCall.call(addressW6iGg4S, uinthJp9ZK, {from: accounts[0]});
//		const boolTKrS87n = await WOLFv6IU9Us.transfer.call(addressKR3nXX1, uintW8iXJLC, {from: accounts[4]});
//		const boolFrjxDC7 = await WOLFv6IU9Us.transfer.call(addressGVUM5zK, uintRf6Ov4K, {from: accounts[4]});

		await expect(WOLFv6IU9Us.transfer.call(addressQ4knBiz, uintdcjIIB5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjDqTdt = "04qKq"
		const stringOuTFq7r = "TOfa95lV"
		const uintHiZeSmW = BigInt("1502")
		const WOLFk6Qq338 = await WOLF.new(stringjDqTdt, stringOuTFq7r, uintHiZeSmW, {from: "0x0000000000000000000000000000000000000001"});
		const uintKgn6VCU = BigInt("1898")
		const addressgSUd54G = accounts[0]
		const uintuhy0dTp = BigInt("1182")
		const addressufJqbM8 = "0x0000000000000000000000000000000000000001"
		const uintVCyVoS4 = BigInt("1269")
		const addressQBB65KP = accounts[1]
		const uintgphfrcw = BigInt("1926")
		const addressuhvKej = accounts[0]
		const addressmyW6RjW = accounts[3]
		const booloNwZxpN = await WOLFk6Qq338.approveAndCall.call(addressgSUd54G, uintKgn6VCU, {from: accounts[5]});
		const boolYuRsSv = await WOLFk6Qq338.approve.call(addressufJqbM8, uintuhy0dTp, {from: accounts[5]});
		const booltQgzPmk = await WOLFk6Qq338.approveAndCall.call(addressQBB65KP, uintVCyVoS4, {from: accounts[4]});
		const boolLiAhxKX = await WOLFk6Qq338.transfer.call(addressuhvKej, uintgphfrcw, {from: accounts[2]});
		const boolpmuNTRA = await WOLFk6Qq338.transferownership.call(addressmyW6RjW, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintFAt1G8P = BigInt("1932")
		const WOLFv6IU9Us = await WOLF.new(stringORNsUR1, stringJLirNdd, uintFAt1G8P, {from: accounts[0]});
		const uintBDnIdT2 = BigInt("0")
		const addresskTeNJJN = accounts[2]
		const boolfhKdv6i = await WOLFv6IU9Us.transfer.call(addresskTeNJJN, uintBDnIdT2, {from: accounts[2]});

		assert.equal(boolfhKdv6i, true)
	});

	it('test for WOLF', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintXd3Oz4z = BigInt("1932")
		const WOLFv6IU9Us = await WOLF.new(stringORNsUR1, stringJLirNdd, uintXd3Oz4z, {from: accounts[0]});
		const uintalKANVk = BigInt("7")
		const addressS1WZUbQ = "0x00000000000000000000000000000000000000-1"
		const uintP8sPrs2 = BigInt("618")
		const addressrh7ceSo = accounts[1]
//		const boolOunf5y = await WOLFv6IU9Us.approveAndCall.call(addressS1WZUbQ, uintalKANVk, {from: accounts[0]});
//		const boolhNk3jc = await WOLFv6IU9Us.approve.call(addressrh7ceSo, uintP8sPrs2, {from: accounts[5]});

		await expect(WOLFv6IU9Us.approveAndCall.call(addressS1WZUbQ, uintalKANVk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintXCjDQMN = BigInt("1932")
		const WOLFv6IU9Us = await WOLF.new(stringORNsUR1, stringJLirNdd, uintXCjDQMN, {from: accounts[0]});
		const uintYVp2UmR = BigInt("0")
		const addresspSYlc33 = "0x0000000000000000000000000000000000000000"
		const uintxEHLUzI = BigInt("1087")
		const addressYucWrg8 = accounts[0]
		const addressHCXmHVy = "0x0000000000000000000000000000000000000001"
		const uintKGaLPq5 = BigInt("365")
		const addressXWpl0kA = accounts[0]
		const boolOunf5y = await WOLFv6IU9Us.approveAndCall.call(addresspSYlc33, uintYVp2UmR, {from: accounts[0]});
//		const boolif4SOIo = await WOLFv6IU9Us.transferFrom.call(addressHCXmHVy, addressYucWrg8, uintxEHLUzI, {from: accounts[1]});
//		const boolEMGWqYG = await WOLFv6IU9Us.transfer.call(addressXWpl0kA, uintKGaLPq5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOunf5y, true)
		await expect(WOLFv6IU9Us.transferFrom.call(addressHCXmHVy, addressYucWrg8, uintxEHLUzI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})