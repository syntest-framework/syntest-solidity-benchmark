const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20PNrbr2f = await GAZ_ERC20.new({from: accounts[0]});
		const uintJ25qURy = BigInt("1057")
		const addressjL87aXa = accounts[5]
		const addressi6Rsmps = accounts[1]
		const uintSTm0lVv = BigInt("1218")
		const addressvd01nx = accounts[1]
		const addressPVv6TMX = accounts[3]
		const uintsF0PlrY = BigInt("1964")
		const addressrLosFTy = accounts[4]
		const addressCnS1uKg = accounts[0]
		const booleNvbUGK = await GAZ_ERC20PNrbr2f.approve.call(addressjL87aXa, uintJ25qURy, {from: accounts[2]});
		const boolvFAT4tx = await GAZ_ERC20PNrbr2f.approve.call(addressi6Rsmps, {from: accounts[2]});
		const boolnnTcGOB = await GAZ_ERC20PNrbr2f.transfer.call(addressvd01nx, uintSTm0lVv, {from: accounts[2]});
		const boolZVRHkt4 = await GAZ_ERC20PNrbr2f.approve.call(addressPVv6TMX, {from: accounts[0]});
		const boolMWexfdQ = await GAZ_ERC20PNrbr2f.approve.call(addressrLosFTy, uintsF0PlrY, {from: accounts[4]});
		const boolKeo6Y20 = await GAZ_ERC20PNrbr2f.approve.call(addressCnS1uKg, {from: accounts[4]});

		assert.equal(booleNvbUGK, true)
		await expect(GAZ_ERC20PNrbr2f.approve.call(addressi6Rsmps, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20iJmM8U = await GAZ_ERC20.new({from: accounts[3]});
		const uintjlOfpeL = BigInt("1742")
		const addressAmATF8x = accounts[1]
		const addressEjfhHUG = accounts[2]
		const uintvOJhazI = BigInt("693")
		const addressp2ldBQS = accounts[5]
		const uinthv6iFkQ = BigInt("1633")
		const addressnQvNmsO = accounts[4]
		const uintrAKh0rO = BigInt("1925")
		const addressksyB6Fo = accounts[2]
		const boolclO6Uzp = await GAZ_ERC20iJmM8U.transferFrom.call(addressEjfhHUG, addressAmATF8x, uintjlOfpeL, {from: accounts[1]});
		const boolsk76vh9 = await GAZ_ERC20iJmM8U.transfer.call(addressp2ldBQS, uintvOJhazI, {from: accounts[3]});
		const boolFELgAXE = await GAZ_ERC20iJmM8U.approve.call(addressnQvNmsO, uinthv6iFkQ, {from: accounts[3]});
		const boolWP5H4r = await GAZ_ERC20iJmM8U.approve.call(addressksyB6Fo, uintrAKh0rO, {from: accounts[4]});

		await expect(GAZ_ERC20iJmM8U.transferFrom.call(addressEjfhHUG, addressAmATF8x, uintjlOfpeL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20CSzmSE8 = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintccGavl8 = BigInt("982")
		const addresskZ3BNpU = accounts[1]
		const uintlU0YsV9 = BigInt("1103")
		const addressKcwS9dI = accounts[3]
		const uintaGa0cq = BigInt("1776")
		const addressZuBHLOC = accounts[2]
		const addressWtnMnet = accounts[2]
		const boolCNZqIc = await GAZ_ERC20CSzmSE8.transfer.call(addresskZ3BNpU, uintccGavl8, {from: accounts[1]});
		const boolvFCSrA3 = await GAZ_ERC20CSzmSE8.transfer.call(addressKcwS9dI, uintlU0YsV9, {from: accounts[4]});
		const boolvujTPAK = await GAZ_ERC20CSzmSE8.transfer.call(addressZuBHLOC, uintaGa0cq, {from: accounts[4]});
		const boolcRHyrMQ = await GAZ_ERC20CSzmSE8.approve.call(addressWtnMnet, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC205axgho = await GAZ_ERC20.new({from: accounts[1]});
		const uintW1J1L53 = BigInt("971")
		const addressV6aZBt7 = accounts[5]
		const uintTEu1rlM = BigInt("41")
		const addressajL7OdF = accounts[0]
		const uintKCaEcht = BigInt("228")
		const addressO55FEnt = accounts[2]
		const uintft30Paf = BigInt("694")
		const addresswg05r7I = accounts[3]
		const boolhYg8YNQ = await GAZ_ERC205axgho.approve.call(addressV6aZBt7, uintW1J1L53, {from: accounts[2]});
		const boolJJdvEox = await GAZ_ERC205axgho.approve.call(addressajL7OdF, uintTEu1rlM, {from: accounts[0]});
		const boolM2Ntavr = await GAZ_ERC205axgho.transfer.call(addressO55FEnt, uintKCaEcht, {from: accounts[5]});
		const boolTfJKOlR = await GAZ_ERC205axgho.transfer.call(addresswg05r7I, uintft30Paf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJJdvEox, true)
		assert.equal(boolhYg8YNQ, true)
		await expect(GAZ_ERC205axgho.transfer.call(addressO55FEnt, uintKCaEcht, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20cGNWBcW = await GAZ_ERC20.new({from: accounts[2]});
		const uintHbTZVpb = BigInt("1380")
		const addressO2j9Zf8 = accounts[1]
		const uintscoSbOV = BigInt("1514")
		const addressSmzRq6j = accounts[3]
		const uintY1UtaN2 = BigInt("272")
		const addressmas3Cc7 = "0x0000000000000000000000000000000000000001"
		const addressV3p5dE1 = accounts[2]
		const uintfjTrxJo = BigInt("1890")
		const addresstIySgfo = "0x0000000000000000000000000000000000000001"
		const uintu90EGYb = BigInt("1118")
		const addressTR5EY3F = accounts[1]
		const booleoJn8jf = await GAZ_ERC20cGNWBcW.approve.call(addressO2j9Zf8, uintHbTZVpb, {from: "0x0000000000000000000000000000000000000001"});
		const boolHS5VrHz = await GAZ_ERC20cGNWBcW.approve.call(addressSmzRq6j, uintscoSbOV, {from: accounts[1]});
		const booliC8nP2k = await GAZ_ERC20cGNWBcW.transferFrom.call(addressV3p5dE1, addressmas3Cc7, uintY1UtaN2, {from: accounts[2]});
		const boolaE8uFd = await GAZ_ERC20cGNWBcW.transfer.call(addresstIySgfo, uintfjTrxJo, {from: accounts[3]});
		const boolQKipIwy = await GAZ_ERC20cGNWBcW.transfer.call(addressTR5EY3F, uintu90EGYb, {from: accounts[3]});

		assert.equal(boolHS5VrHz, true)
		assert.equal(booleoJn8jf, true)
		assert.equal(booliC8nP2k, true)
		await expect(GAZ_ERC20cGNWBcW.transfer.call(addresstIySgfo, uintfjTrxJo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20OZGedBB = await GAZ_ERC20.new({from: accounts[5]});
		const uintywW395Q = BigInt("121")
		const addressG7hqxg7 = accounts[4]
		const addressPbY9Frz = accounts[4]
		const uintcKu3Y6 = BigInt("561")
		const addresss9dNTGx = accounts[4]
		const addresssrsPjLZ = accounts[3]
		const uintqJzgUkZ = BigInt("1678")
		const addressLs1XCZW = accounts[5]
		const boolBTQsOkZ = await GAZ_ERC20OZGedBB.approve.call(addressG7hqxg7, uintywW395Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolCssbO14 = await GAZ_ERC20OZGedBB.approve.call(addressPbY9Frz, {from: "0x0000000000000000000000000000000000000001"});
		const boolBYA8Pf = await GAZ_ERC20OZGedBB.approve.call(addresss9dNTGx, uintcKu3Y6, {from: accounts[5]});
		const boolxTWQVpO = await GAZ_ERC20OZGedBB.approve.call(addresssrsPjLZ, {from: accounts[5]});
		const boolJ51BSEy = await GAZ_ERC20OZGedBB.approve.call(addressLs1XCZW, uintqJzgUkZ, {from: accounts[3]});

		assert.equal(boolBTQsOkZ, true)
		await expect(GAZ_ERC20OZGedBB.approve.call(addressPbY9Frz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oaGU7q8 = await GAZ_ERC20.new({from: accounts[0]});
		const addresspT7o4oo = accounts[2]
		const uintA34QJ6y = BigInt("185")
		const address6HapaZ = accounts[3]
		const uintZWsQrZf = BigInt("1202")
		const addressSVeL9HR = "0x0000000000000000000000000000000000000001"
		const boolHiHgxS = await GAZ_ERC20oaGU7q8.approve.call(addresspT7o4oo, {from: accounts[1]});
		const boolZmVgwQg = await GAZ_ERC20oaGU7q8.transfer.call(address6HapaZ, uintA34QJ6y, {from: accounts[4]});
		const boolNFEac5h = await GAZ_ERC20oaGU7q8.approve.call(addressSVeL9HR, uintZWsQrZf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20oaGU7q8.approve.call(addresspT7o4oo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oaGU7q8 = await GAZ_ERC20.new({from: accounts[0]});
		const addressc371jV = accounts[4]
		const uintlPp5pK = BigInt("1200")
		const address2mpRjP = "0x0000000000000000000000000000000000000001"
		const boolL2w9ECl = await GAZ_ERC20oaGU7q8.approve.call(addressc371jV, {from: accounts[0]});
		const boolNFEac5h = await GAZ_ERC20oaGU7q8.approve.call(address2mpRjP, uintlPp5pK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20oaGU7q8.approve.call(addressc371jV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oaGU7q8 = await GAZ_ERC20.new({from: accounts[0]});
		const addressci1phC = accounts[1]
		const uintT7xjeXs = BigInt("1200")
		const addressAfmaq3o = "0x0000000000000000000000000000000000000000"
		const boolzOjaGO = await GAZ_ERC20oaGU7q8.approve.call(addressci1phC, {from: accounts[4]});
		const boolNFEac5h = await GAZ_ERC20oaGU7q8.approve.call(addressAfmaq3o, uintT7xjeXs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20oaGU7q8.approve.call(addressci1phC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oaGU7q8 = await GAZ_ERC20.new({from: accounts[0]});
		const addressHUAkX2U = accounts[2]
		const uintaUTHkfD = BigInt("1200")
		const addressbIns6l5 = "0x0000000000000000000000000000000000000000"
		const uintQavRTHy = BigInt("1751")
		const addressOsxZg5A = accounts[4]
		const addressQYOTtd9 = accounts[0]
		const uintwwIhKDa = BigInt("813")
		const addressmCohStl = accounts[0]
		const addressO2PNiCj = "0x0000000000000000000000000000000000000001"
		const boolZd7ss4D = await GAZ_ERC20oaGU7q8.approve.call(addressHUAkX2U, {from: accounts[5]});
		const boolNFEac5h = await GAZ_ERC20oaGU7q8.approve.call(addressbIns6l5, uintaUTHkfD, {from: "0x0000000000000000000000000000000000000001"});
		const bool2RazUv = await GAZ_ERC20oaGU7q8.transferFrom.call(addressQYOTtd9, addressOsxZg5A, uintQavRTHy, {from: accounts[3]});
		const booliRN6Bq8 = await GAZ_ERC20oaGU7q8.transferFrom.call(addressO2PNiCj, addressmCohStl, uintwwIhKDa, {from: accounts[4]});

		await expect(GAZ_ERC20oaGU7q8.approve.call(addressHUAkX2U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oaGU7q8 = await GAZ_ERC20.new({from: accounts[0]});
		const uintYZ8rfyn = BigInt("1250")
		const addressxVnPfK0 = "0x0000000000000000000000000000000000000001"
		const addressg13TAQw = accounts[3]
		const boolNFEac5h = await GAZ_ERC20oaGU7q8.approve.call(addressxVnPfK0, uintYZ8rfyn, {from: "0x0000000000000000000000000000000000000001"});
		const boolbo3RSKg = await GAZ_ERC20oaGU7q8.approve.call(addressg13TAQw, {from: accounts[3]});

		assert.equal(boolNFEac5h, true)
		await expect(GAZ_ERC20oaGU7q8.approve.call(addressg13TAQw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})