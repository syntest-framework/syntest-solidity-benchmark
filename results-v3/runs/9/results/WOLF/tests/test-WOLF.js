const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const string8HVGww = "zLk4OT1OWnCRt0tA6ApDF52r4xqgImToBRm708SITOwepeL5as2PM5vidGmlvyH3SnIaruUYz8J"
		const stringL7lBtzp = "WGEgKWCuHwlULB9guQo7UHdIMam37md8"
		const uintQzrWEY5 = BigInt("1281")
		const WOLFKoHxmQ1 = await WOLF.new(string8HVGww, stringL7lBtzp, uintQzrWEY5, {from: accounts[1]});
		const uintryigs2V = BigInt("325")
		const addressTOtxXvo = accounts[1]
		const uint3KsSBp = BigInt("109")
		const addressspG9NC = accounts[1]
		const uintEGUEdiJ = BigInt("994")
		const addresszFHZRW = accounts[1]
		const uintT3HWPfg = BigInt("1674")
		const addressqLcGYfY = accounts[5]
		const uintQUu0uyc = BigInt("680")
		const addressh8e1L1v = accounts[3]
		const uintnC1Bziq = BigInt("1171")
		const addressQ0xQ9Lh = "0x0000000000000000000000000000000000000001"
		const addressLTPPpA = accounts[3]
		const boolznUL8LE = await WOLFKoHxmQ1.approveAndCall.call(addressTOtxXvo, uintryigs2V, {from: accounts[5]});
		const bool0PaHUN = await WOLFKoHxmQ1.approveAndCall.call(addressspG9NC, uint3KsSBp, {from: accounts[1]});
		const booleO5yod9 = await WOLFKoHxmQ1.transfer.call(addresszFHZRW, uintEGUEdiJ, {from: accounts[2]});
		const boolvvayRVg = await WOLFKoHxmQ1.approveAndCall.call(addressqLcGYfY, uintT3HWPfg, {from: accounts[1]});
		const boolwhKLniB = await WOLFKoHxmQ1.transfer.call(addressh8e1L1v, uintQUu0uyc, {from: accounts[1]});
		const boolrtdfNzy = await WOLFKoHxmQ1.transferFrom.call(addressLTPPpA, addressQ0xQ9Lh, uintnC1Bziq, {from: accounts[0]});

		await expect(WOLFKoHxmQ1.approveAndCall.call(addressTOtxXvo, uintryigs2V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFDPtLdv = "SWJOze2VLy9Bn6IvIcT0ikfLB2CjMtwIRDhxmdg1HSS0xDH8zx5192YXmlQcgnNpC1Ud"
		const stringht1ZCAN = "LA1CFdPoSRz4B2TnDkiSW"
		const uintyo7RsFd = BigInt("1021")
		const WOLFdqGw4IK = await WOLF.new(stringFDPtLdv, stringht1ZCAN, uintyo7RsFd, {from: accounts[0]});
		const uintJ80lehJ = BigInt("777")
		const addressu3iLnp = accounts[1]
		const addressWyzIViW = accounts[1]
		const uintNsWt8Er = BigInt("635")
		const addressGKlnwJp = accounts[1]
		const addressbkMmTd9 = accounts[2]
		const boolvt2onBL = await WOLFdqGw4IK.transferFrom.call(addressWyzIViW, addressu3iLnp, uintJ80lehJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolAxHGB9Q = await WOLFdqGw4IK.transferFrom.call(addressbkMmTd9, addressGKlnwJp, uintNsWt8Er, {from: accounts[3]});

		await expect(WOLFdqGw4IK.transferFrom.call(addressWyzIViW, addressu3iLnp, uintJ80lehJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringOyRjDhS = "KduPj2gVcVVfhMle7QO6Ljn6oB6Dw8tr"
		const stringw8K0hlO = "4j8Gt"
		const uintNSkg8Zw = BigInt("1250")
		const WOLFextaOJr = await WOLF.new(stringOyRjDhS, stringw8K0hlO, uintNSkg8Zw, {from: accounts[1]});
		const uintYv5XQwz = BigInt("281")
		const addressTxFySSA = accounts[1]
		const uinthToo3bq = BigInt("60")
		const addressOwo7Vhy = accounts[4]
		const uintZIBgoXa = BigInt("759")
		const addressfwX6GqU = accounts[3]
		const uintgxn8hHv = BigInt("25")
		const addressUq0aI1C = accounts[4]
		const addresscirlQGM = accounts[0]
		const boolj3eKwXb = await WOLFextaOJr.approve.call(addressTxFySSA, uintYv5XQwz, {from: accounts[4]});
		const boolQ4kfIW1 = await WOLFextaOJr.approve.call(addressOwo7Vhy, uinthToo3bq, {from: accounts[3]});
		const boolD93qgwH = await WOLFextaOJr.approve.call(addressfwX6GqU, uintZIBgoXa, {from: accounts[1]});
		const boolVIaC3eT = await WOLFextaOJr.approveAndCall.call(addressUq0aI1C, uintgxn8hHv, {from: accounts[3]});
		const boolWQazzPk = await WOLFextaOJr.transferownership.call(addresscirlQGM, {from: accounts[0]});

		assert.equal(boolD93qgwH, true)
		assert.equal(boolQ4kfIW1, true)
		assert.equal(boolj3eKwXb, true)
		await expect(WOLFextaOJr.approveAndCall.call(addressUq0aI1C, uintgxn8hHv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringfykhjIQ = "hyXDMdMpzlX1LelqOF1SQw8ghRNW4H8bVo4uQD79bYppFUyXL9JxeEqoA1mx8FmJMnq2xNI"
		const stringjXyHexA = "4pbBniEIXfCn9jGy7x"
		const uintXL4yHEi = BigInt("782")
		const WOLFtpm2nDq = await WOLF.new(stringfykhjIQ, stringjXyHexA, uintXL4yHEi, {from: accounts[1]});
		const addressB9lLc5z = accounts[4]
		const uinthrC8fIP = BigInt("2017")
		const addressbOiBhWk = accounts[0]
		const addresshH9ryI7 = accounts[1]
		const uintGmn5uDi = BigInt("215")
		const addressxB2XEg = accounts[5]
		const uintRLAbhX7 = BigInt("1101")
		const addressWA4SW5X = accounts[2]
		const uintFImZunj = BigInt("1306")
		const addressSzu40Cq = accounts[4]
		const boolUkBfxYY = await WOLFtpm2nDq.transferownership.call(addressB9lLc5z, {from: accounts[4]});
		const boolcJNcNr4 = await WOLFtpm2nDq.approveAndCall.call(addressbOiBhWk, uinthrC8fIP, {from: accounts[4]});
		const boolwXZM0Rm = await WOLFtpm2nDq.transferownership.call(addresshH9ryI7, {from: accounts[0]});
		const booleREeOW = await WOLFtpm2nDq.approve.call(addressxB2XEg, uintGmn5uDi, {from: accounts[4]});
		const boolAiwN84Z = await WOLFtpm2nDq.approve.call(addressWA4SW5X, uintRLAbhX7, {from: accounts[3]});
		const booleJ4th0Y = await WOLFtpm2nDq.approve.call(addressSzu40Cq, uintFImZunj, {from: accounts[4]});

		await expect(WOLFtpm2nDq.transferownership.call(addressB9lLc5z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVXW1v18 = "gPggd9wMlQtbY9nT8NAYRkwx6b77VX2JHN6NXDs7DrU9E85TUOsB0KRusUh2xTmOABTzjr9mP2qoc"
		const stringZYylOvV = "MvLlNx9BULfptvQOUq1nwB"
		const uintPD4lysz = BigInt("1749")
		const WOLFVw0qTjz = await WOLF.new(stringVXW1v18, stringZYylOvV, uintPD4lysz, {from: accounts[1]});
		const uintkDMxleZ = BigInt("936")
		const addressyl84Clo = accounts[0]
		const uintNMGgG9r = BigInt("1040")
		const addressvQpIUOn = accounts[0]
		const uintz83UIRr = BigInt("975")
		const addresstxudtF = accounts[4]
		const uintgjZ1nEF = BigInt("151")
		const addresswJ32ctu = accounts[3]
		const boolKjUC3N = await WOLFVw0qTjz.transfer.call(addressyl84Clo, uintkDMxleZ, {from: accounts[3]});
		const boolVSK4pJ9 = await WOLFVw0qTjz.transfer.call(addressvQpIUOn, uintNMGgG9r, {from: accounts[2]});
		const boolmyWschw = await WOLFVw0qTjz.approve.call(addresstxudtF, uintz83UIRr, {from: accounts[2]});
		const boolb4fx5Lg = await WOLFVw0qTjz.approveAndCall.call(addresswJ32ctu, uintgjZ1nEF, {from: accounts[2]});

		await expect(WOLFVw0qTjz.transfer.call(addressyl84Clo, uintkDMxleZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringTg5KdWw = "wzewc5ucf2VhBTXz8blbCuDExzDuMEn27RMPxkABbPG2HdGsCWfUvh0Lnn5aYef6Ft405mxj5fn1tjO6h6pySkRVRGP"
		const stringF4zbUqK = "eXtTAEqnH3IRoTXtrAe57L97BswgOT5boRZEwB2yLAC2OiVUV59uJ15TYWd6FkdEFqCCMPgaoMfxQQRVKE0vxv"
		const uintr9kt7Sm = BigInt("191")
		const WOLFKWf1lQx = await WOLF.new(stringTg5KdWw, stringF4zbUqK, uintr9kt7Sm, {from: "0x0000000000000000000000000000000000000001"});
		const uinta3D2vXF = BigInt("730")
		const addressI3KKGxE = accounts[3]
		const addressPR1tvFy = accounts[0]
		const addressYFn1hLx = accounts[2]
		const uinthm3Qiyp = BigInt("1250")
		const addressjNag2Sh = accounts[1]
		const uintFabtE96 = BigInt("1245")
		const addressli2SNul = accounts[1]
		const uintUGjXR9p = BigInt("1379")
		const addressTtxjKVz = accounts[3]
		const addresszxjGXN4 = accounts[4]
		const uintPajNyZU = BigInt("735")
		const addressQxnNHVn = accounts[2]
		const boolYmoVEFQ = await WOLFKWf1lQx.transferFrom.call(addressPR1tvFy, addressI3KKGxE, uinta3D2vXF, {from: "0x0000000000000000000000000000000000000001"});
		const boolCgYAxB4 = await WOLFKWf1lQx.transferownership.call(addressYFn1hLx, {from: "0x0000000000000000000000000000000000000001"});
		const boollUqpLKr = await WOLFKWf1lQx.transfer.call(addressjNag2Sh, uinthm3Qiyp, {from: accounts[0]});
		const boolXlqaZXC = await WOLFKWf1lQx.approveAndCall.call(addressli2SNul, uintFabtE96, {from: accounts[3]});
		const boollCkRcwJ = await WOLFKWf1lQx.transferFrom.call(addresszxjGXN4, addressTtxjKVz, uintUGjXR9p, {from: accounts[0]});
		const boolpu9Icky = await WOLFKWf1lQx.approve.call(addressQxnNHVn, uintPajNyZU, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringVXW1v18 = "gPggd9wMlQtbY9nT8NAYRkwx6b77VX2JHN6NXDs7DrU9E85TUOsB0KRusUh2xTmOABTzjr9mP2qoc"
		const stringZYylOvV = "MvLlNx9BULfptvQOUq1nwB"
		const uintq4r08Zx = BigInt("1749")
		const WOLFVw0qTjz = await WOLF.new(stringVXW1v18, stringZYylOvV, uintq4r08Zx, {from: accounts[1]});
		const uintwY9kVQw = BigInt("936")
		const addressjnF7VZo = accounts[1]
		const uintebDtea = BigInt("1040")
		const addressEaSozr = accounts[0]
		const uintfegSzIp = BigInt("975")
		const addressQWBwgwc = accounts[4]
		const uintwrzYTWS = BigInt("113")
		const addressNSpz8yb = accounts[2]
		const uintLSqfxOH = BigInt("151")
		const addressNCRuDEI = accounts[3]
		const boolKjUC3N = await WOLFVw0qTjz.transfer.call(addressjnF7VZo, uintwY9kVQw, {from: accounts[3]});
		const boolVSK4pJ9 = await WOLFVw0qTjz.transfer.call(addressEaSozr, uintebDtea, {from: accounts[2]});
		const boolmyWschw = await WOLFVw0qTjz.approve.call(addressQWBwgwc, uintfegSzIp, {from: accounts[2]});
		const boolNEshEiz = await WOLFVw0qTjz.approveAndCall.call(addressNSpz8yb, uintwrzYTWS, {from: accounts[2]});
		const boolb4fx5Lg = await WOLFVw0qTjz.approveAndCall.call(addressNCRuDEI, uintLSqfxOH, {from: accounts[2]});

		await expect(WOLFVw0qTjz.transfer.call(addressjnF7VZo, uintwY9kVQw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringSiCxFrX = "2G6HC41BylTntJga6FWl8odX9UG3kTksYqQBLG"
		const stringDCijTKV = "HVZycAOxgWEwaaR5WskABajvBGO9fVemDIgFk6quxAyLUiviaqj6F9Gd41xXNWr6N"
		const uintGQG4u3o = BigInt("854")
		const WOLFMPX0IDr = await WOLF.new(stringSiCxFrX, stringDCijTKV, uintGQG4u3o, {from: accounts[4]});
		const addressJrQVCIB = "0x0000000000000000000000000000000000000001"
		const addressOJ1oCyb = accounts[0]
		const uinttuzxTGQ = BigInt("1100")
		const addresszA0nQOC = accounts[1]
		const uinto1F6VTP = BigInt("598")
		const addressQpPtcbu = accounts[4]
		const boolgRldn4n = await WOLFMPX0IDr.transferownership.call(addressJrQVCIB, {from: accounts[4]});
		const boolWV6XppI = await WOLFMPX0IDr.transferownership.call(addressOJ1oCyb, {from: "0x0000000000000000000000000000000000000001"});
		const boolYUuQgKO = await WOLFMPX0IDr.approveAndCall.call(addresszA0nQOC, uinttuzxTGQ, {from: accounts[2]});
		const boolAgOsKKp = await WOLFMPX0IDr.approveAndCall.call(addressQpPtcbu, uinto1F6VTP, {from: accounts[2]});

		assert.equal(boolgRldn4n, true)
		await expect(WOLFMPX0IDr.transferownership.call(addressOJ1oCyb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFDPtLdv = "SWJOze2VLy9Bn6IvIcT0ikfLB2CjMtwIRDhxmdg1HSS0xDH8zx5192YXmlQcgnNpC1Ud"
		const stringht1ZCAN = "LA1CFdPoSRz4B2TnDkiSW"
		const uintVvYVVCB = BigInt("1021")
		const WOLFdqGw4IK = await WOLF.new(stringFDPtLdv, stringht1ZCAN, uintVvYVVCB, {from: accounts[0]});
		const uintMj5fhYM = BigInt("1104")
		const addresslhm2bfo = accounts[2]
		const uintHf8kX8A = BigInt("1209")
		const addressWkg1gv = accounts[0]
		const addressCGmzXfH = accounts[3]
		const uintOgfze6O = BigInt("329")
		const addressGuUnlTO = accounts[2]
		const addressdesRLey = accounts[1]
		const boollM43j5u = await WOLFdqGw4IK.approveAndCall.call(addresslhm2bfo, uintMj5fhYM, {from: accounts[0]});
		const boolfg5G0ix = await WOLFdqGw4IK.transferFrom.call(addressCGmzXfH, addressWkg1gv, uintHf8kX8A, {from: accounts[0]});
		const boolXFl6qY7 = await WOLFdqGw4IK.transferFrom.call(addressdesRLey, addressGuUnlTO, uintOgfze6O, {from: accounts[2]});

		assert.equal(boollM43j5u, true)
		await expect(WOLFdqGw4IK.transferFrom.call(addressCGmzXfH, addressWkg1gv, uintHf8kX8A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFDPtLdv = "SWJOze2VLy9Bn6IvIcT0ikfLB2CjMtwIRDhxmdg1HSS0xDH8zx5192YXmlQcgnNpC1Ud"
		const stringht1ZCAN = "LA1CFdPoSRz4B2TnDkiSW"
		const uintfSQXDOH = BigInt("1021")
		const WOLFdqGw4IK = await WOLF.new(stringFDPtLdv, stringht1ZCAN, uintfSQXDOH, {from: accounts[0]});
		const uintYn7FfMZ = BigInt("0")
		const addresss6N0LAf = accounts[5]
		const addresslUSvIbo = accounts[1]
		const uintj6UWkDH = BigInt("1531")
		const addressDG94JOa = accounts[0]
		const boolq3zxXT = await WOLFdqGw4IK.transferFrom.call(addresslUSvIbo, addresss6N0LAf, uintYn7FfMZ, {from: accounts[4]});
		const bool4eQfvB = await WOLFdqGw4IK.transfer.call(addressDG94JOa, uintj6UWkDH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolq3zxXT, true)
		await expect(WOLFdqGw4IK.transfer.call(addressDG94JOa, uintj6UWkDH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringOdOCvfB = "1Gcz4PUdWg9BeCe7BQiIL6eK3heHhEygKtD0nmnwu2mJRjqFkgTswuwTLQW8LO1MV3XQuXK5"
		const stringkAyN5MS = "6rrzcffxP9IPiX4IQT7jSJEp5c7XAL0V539Kyjx37mxjp8jlypF0N6r5L2VYA7"
		const uintyw9bNDK = BigInt("647")
		const WOLFx7IS2v4 = await WOLF.new(stringOdOCvfB, stringkAyN5MS, uintyw9bNDK, {from: accounts[2]});
		const uintNojeGGj = BigInt("0")
		const addresssPvaCWt = accounts[8]
		const uintQqShgnP = BigInt("1167")
		const addressyuzJ5rw = "0x0000000000000000000000000000000000000001"
		const boolOMyMx28 = await WOLFx7IS2v4.approveAndCall.call(addresssPvaCWt, uintNojeGGj, {from: accounts[2]});
		const boolwxIUpB2 = await WOLFx7IS2v4.approveAndCall.call(addressyuzJ5rw, uintQqShgnP, {from: accounts[4]});

		assert.equal(boolOMyMx28, true)
		await expect(WOLFx7IS2v4.approveAndCall.call(addressyuzJ5rw, uintQqShgnP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})