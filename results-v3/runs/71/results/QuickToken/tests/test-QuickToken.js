const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressmXhr5sa = "0x0000000000000000000000000000000000000001"
		const addresslUAVeEq = accounts[1]
		const QuickTokenNFdrNQh = await QuickToken.new(addressmXhr5sa, addresslUAVeEq, {from: accounts[5]});
		const uintl3y6Yh = BigInt("512")
		const addressbPS4tmL = accounts[4]
		const uintBS2vUt = BigInt("295")
		const addressTQyKEGX = "0x0000000000000000000000000000000000000001"
		const addressz7lqU4J = accounts[0]
		const addresspor1Ls4 = accounts[5]
		const addressBKfPO8s = accounts[4]
		const uintXIGcmWh = BigInt("1420")
		const addressCC7NkmP = accounts[5]
		const addressKLHso2B = "0x0000000000000000000000000000000000000001"
		const boolhMIVCHN = await QuickTokenNFdrNQh.transfer.call(addressbPS4tmL, uintl3y6Yh, {from: accounts[3]});
		const boolvgPqAd5 = await QuickTokenNFdrNQh.transfer.call(addressTQyKEGX, uintBS2vUt, {from: accounts[5]});
		const uintiW3iDsS = await QuickTokenNFdrNQh.balanceOf.call(addressz7lqU4J, {from: accounts[0]});
		const addressw74INbN = await QuickTokenNFdrNQh.setMinter.call(addresspor1Ls4, {from: accounts[0]});
		const addressH33ER6k = await QuickTokenNFdrNQh.setMinter.call(addressBKfPO8s, {from: accounts[5]});
		const boolatxa1E5 = await QuickTokenNFdrNQh.transferFrom.call(addressKLHso2B, addressCC7NkmP, uintXIGcmWh, {from: accounts[0]});

		await expect(QuickTokenNFdrNQh.transfer.call(addressbPS4tmL, uintl3y6Yh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresshpFIwDB = accounts[0]
		const addressn2vWW5 = accounts[2]
		const QuickTokenb2JcuNT = await QuickToken.new(addresshpFIwDB, addressn2vWW5, {from: accounts[2]});
		const addressN3hV1s1 = accounts[5]
		const addressOwwFOeJ = accounts[2]
		const addressfmvyq6j = accounts[3]
		const addressT9kJvFm = "0x0000000000000000000000000000000000000001"
		const addresseag4UPC = "0x0000000000000000000000000000000000000001"
		const addressd553ZMr = accounts[1]
		const uintj6ldXR8 = BigInt("1845")
		const addressWhsbDQq = accounts[3]
		const addressqpn6Z1E = accounts[4]
		const addressfxuZVPX = accounts[5]
		const uintvoLBIW9 = await QuickTokenb2JcuNT.allowance.call(addressOwwFOeJ, addressN3hV1s1, {from: accounts[1]});
		const uintVV9JZw7 = await QuickTokenb2JcuNT.balanceOf.call(addressfmvyq6j, {from: accounts[1]});
		const uintwxnOnHE = await QuickTokenb2JcuNT.balanceOf.call(addressT9kJvFm, {from: accounts[3]});
		const uintxlw7Ug = await QuickTokenb2JcuNT.allowance.call(addressd553ZMr, addresseag4UPC, {from: accounts[4]});
		const boolJQ5ypw6 = await QuickTokenb2JcuNT.transferFrom.call(addressqpn6Z1E, addressWhsbDQq, uintj6ldXR8, {from: accounts[3]});
		const uintS7YdEOf = await QuickTokenb2JcuNT.balanceOf.call(addressfxuZVPX, {from: accounts[1]});

		assert.equal(uintVV9JZw7, BigInt("0"))
		assert.equal(uintvoLBIW9, BigInt("0"))
		assert.equal(uintwxnOnHE, BigInt("0"))
		assert.equal(uintxlw7Ug, BigInt("0"))
		await expect(QuickTokenb2JcuNT.transferFrom.call(addressqpn6Z1E, addressWhsbDQq, uintj6ldXR8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressnqRRK7D = accounts[1]
		const addresspGP36kr = accounts[3]
		const QuickTokenymUOtB2 = await QuickToken.new(addressnqRRK7D, addresspGP36kr, {from: accounts[4]});
		const addressh83m9JZ = accounts[4]
		const uintXRXWO3 = BigInt("466")
		const addressv0cCFGu = accounts[0]
		const uintC7DpCzb = BigInt("1984")
		const addressRuuENdm = accounts[0]
		const uint5gtSGJ = BigInt("221")
		const addressyumMc9j = accounts[5]
		const uintIEeRg4C = await QuickTokenymUOtB2.balanceOf.call(addressh83m9JZ, {from: accounts[4]});
		const booluggHP2i = await QuickTokenymUOtB2.approve.call(addressv0cCFGu, uintXRXWO3, {from: accounts[0]});
		const addressmYVdoQr = await QuickTokenymUOtB2.mint.call(addressRuuENdm, uintC7DpCzb, {from: "0x0000000000000000000000000000000000000001"});
		const boolBYzjUXR = await QuickTokenymUOtB2.transfer.call(addressyumMc9j, uint5gtSGJ, {from: accounts[4]});

		assert.equal(booluggHP2i, true)
		assert.equal(uintIEeRg4C, BigInt("0"))
		await expect(QuickTokenymUOtB2.mint.call(addressRuuENdm, uintC7DpCzb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressj0yGjfd = accounts[5]
		const addressKoPPjt4 = accounts[0]
		const QuickTokenl29RAgI = await QuickToken.new(addressj0yGjfd, addressKoPPjt4, {from: accounts[1]});
		const uinteVKTmop = BigInt("951")
		const addressHYcIDBj = accounts[1]
		const addressjOu8sQ = accounts[2]
		const addressqlmjVkh = accounts[2]
		const uintQcuvk9v = BigInt("1965")
		const addressdvL5Hk = accounts[0]
		const uintJLG96eS = BigInt("1227")
		const addresssjM0y0r = accounts[3]
		const uintT8wL5ta = BigInt("1800")
		const addressNPk9Ne = accounts[5]
		const addressAvvwrXB = await QuickTokenl29RAgI.mint.call(addressHYcIDBj, uinteVKTmop, {from: accounts[0]});
		const uintH4KBEcw = await QuickTokenl29RAgI.allowance.call(addressqlmjVkh, addressjOu8sQ, {from: accounts[2]});
		const boolQb5voBM = await QuickTokenl29RAgI.approve.call(addressdvL5Hk, uintQcuvk9v, {from: "0x0000000000000000000000000000000000000001"});
		const addressSRE1S10 = await QuickTokenl29RAgI.mint.call(addresssjM0y0r, uintJLG96eS, {from: accounts[0]});
		const boolBXkTnwW = await QuickTokenl29RAgI.transfer.call(addressNPk9Ne, uintT8wL5ta, {from: accounts[0]});

		assert.equal(boolQb5voBM, true)
		assert.equal(uintH4KBEcw, BigInt("0"))
		await expect(QuickTokenl29RAgI.transfer.call(addressNPk9Ne, uintT8wL5ta, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressiTsJKhN = accounts[4]
		const addressaDlYkQS = accounts[2]
		const QuickTokenVtW8Qkr = await QuickToken.new(addressiTsJKhN, addressaDlYkQS, {from: "0x0000000000000000000000000000000000000001"});
		const uintwnyQxXZ = BigInt("2035")
		const addressxpZvTec = accounts[3]
		const addressUxlfgS8 = accounts[0]
		const uintjkHGNQa = BigInt("1833")
		const addressvXVUviV = accounts[3]
		const uintkr0tauD = BigInt("787")
		const addressAOMcm32 = "0x0000000000000000000000000000000000000001"
		const boolFSlvfMT = await QuickTokenVtW8Qkr.approve.call(addressxpZvTec, uintwnyQxXZ, {from: accounts[4]});
		const uintfCBEEq = await QuickTokenVtW8Qkr.balanceOf.call(addressUxlfgS8, {from: accounts[2]});
		const boolYDx1YGb = await QuickTokenVtW8Qkr.transfer.call(addressvXVUviV, uintjkHGNQa, {from: accounts[4]});
		const addressKtb40Fu = await QuickTokenVtW8Qkr.mint.call(addressAOMcm32, uintkr0tauD, {from: accounts[2]});
	});

	it('test for QuickToken', async () => {
		const addressFlDTHT6 = accounts[1]
		const addressqmy4lW = accounts[1]
		const QuickTokenG98tnp = await QuickToken.new(addressFlDTHT6, addressqmy4lW, {from: accounts[1]});
		const addressYL6AeuL = accounts[0]
		const addressqab7p0 = accounts[3]
		const addressUSoLDa = accounts[2]
		const uintZFTvglJ = BigInt("1315")
		const addresssI2disD = accounts[5]
		const addressypHKWpc = accounts[5]
		const uint5ap7S5 = BigInt("449")
		const addressqd64RaC = accounts[4]
		const uintz3RW2ag = BigInt("1770")
		const addressGdfCU8f = accounts[2]
		const uintxCTT1g7 = await QuickTokenG98tnp.allowance.call(addressqab7p0, addressYL6AeuL, {from: accounts[2]});
		const addressXRzyUDR = await QuickTokenG98tnp.setMinter.call(addressUSoLDa, {from: accounts[1]});
		const boolq03g26N = await QuickTokenG98tnp.transfer.call(addresssI2disD, uintZFTvglJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressDVxHEku = await QuickTokenG98tnp.setMinter.call(addressypHKWpc, {from: "0x0000000000000000000000000000000000000001"});
		const addressf93LYSy = await QuickTokenG98tnp.mint.call(addressqd64RaC, uint5ap7S5, {from: accounts[3]});
		const boolsA4woO2 = await QuickTokenG98tnp.approve.call(addressGdfCU8f, uintz3RW2ag, {from: accounts[2]});

		assert.equal(uintxCTT1g7, BigInt("0"))
		await expect(QuickTokenG98tnp.transfer.call(addresssI2disD, uintZFTvglJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressgbORCDM = accounts[3]
		const addressB7uxpxQ = accounts[5]
		const QuickTokenhRd3D89 = await QuickToken.new(addressgbORCDM, addressB7uxpxQ, {from: accounts[4]});
		const uintfyx7xP = BigInt("10")
		const addressTKHAeU4 = "0x0000000000000000000000000000000000000001"
		const addressCluFgGc = accounts[1]
		const uint0yo7ge = BigInt("1102")
		const addresseVD8ZRz = accounts[3]
		const addresse7p6g4R = accounts[3]
		const uintZnoCJuP = BigInt("135")
		const addressyzMJGRe = accounts[0]
		const uintJatDrxE = BigInt("175")
		const addressHKka9sQ = accounts[1]
		const uintMn2e1Rf = BigInt("1124")
		const addressdhZXChZ = accounts[3]
		const addressHMXJM8 = accounts[2]
		const boolJXoryRH = await QuickTokenhRd3D89.approve.call(addressTKHAeU4, uintfyx7xP, {from: "0x0000000000000000000000000000000000000001"});
		const addressOVGAThC = await QuickTokenhRd3D89.setMinter.call(addressCluFgGc, {from: accounts[4]});
		const boolfZN5nRB = await QuickTokenhRd3D89.approve.call(addresseVD8ZRz, uint0yo7ge, {from: accounts[0]});
		const uintInr10z = await QuickTokenhRd3D89.balanceOf.call(addresse7p6g4R, {from: accounts[2]});
		const boolCGEPg6 = await QuickTokenhRd3D89.approve.call(addressyzMJGRe, uintZnoCJuP, {from: accounts[4]});
		const boolyFuvY3q = await QuickTokenhRd3D89.approve.call(addressHKka9sQ, uintJatDrxE, {from: accounts[2]});
		const booljBPutF = await QuickTokenhRd3D89.transferFrom.call(addressHMXJM8, addressdhZXChZ, uintMn2e1Rf, {from: accounts[1]});

		assert.equal(boolJXoryRH, true)
		await expect(QuickTokenhRd3D89.setMinter.call(addressCluFgGc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})