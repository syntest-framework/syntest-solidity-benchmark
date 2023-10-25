const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringFx0jxkq = "EDA2ctJzKQu1TRTF8Pi6HNda3jKXQIMJbMX"
		const stringCjetgug = "GJKvD5MJbMvTImlKyvKwxculMKNxJFtgfwS0H9rIRFtHEDyRwdHvqHwtXPVlkT7wYXMpNlzJY2g2mB9CAEE8Cq04ZHyUJn6"
		const uintKMuN3SR = BigInt("565")
		const WOLFOtIHAON = await WOLF.new(stringFx0jxkq, stringCjetgug, uintKMuN3SR, {from: accounts[3]});
		const uintadLC5Fg = BigInt("96")
		const addresseZFn3Nh = accounts[0]
		const uintDgjSLlc = BigInt("1025")
		const addressNSNWf5o = accounts[1]
		const uintHPPwyY = BigInt("1383")
		const addressPSd1WJm = accounts[3]
		const uintpV3rtzZ = BigInt("1112")
		const addressmrl2ZI = accounts[4]
		const addressLE4Kjst = accounts[3]
//		const boolJGyvBAd = await WOLFOtIHAON.approveAndCall.call(addresseZFn3Nh, uintadLC5Fg, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsgUAGgp = await WOLFOtIHAON.approveAndCall.call(addressNSNWf5o, uintDgjSLlc, {from: accounts[1]});
//		const boolGUPt43w = await WOLFOtIHAON.approveAndCall.call(addressPSd1WJm, uintHPPwyY, {from: accounts[0]});
//		const bool4I0e8W = await WOLFOtIHAON.transfer.call(addressmrl2ZI, uintpV3rtzZ, {from: accounts[2]});
//		const boolA7qAlgC = await WOLFOtIHAON.transferownership.call(addressLE4Kjst, {from: accounts[0]});

		await expect(WOLFOtIHAON.approveAndCall.call(addresseZFn3Nh, uintadLC5Fg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringm0X6zw6 = "GuHQI69rABcUosHWKCad5c46Zz2rvCEWeK3Er9ohzGcOhhl2k81bub2ekYTIPy3qmGIpgDTPHHynn"
		const stringevPT0I = "bHx2JpBDx6ugDs36cMJFyZXxzylIyS6uqzLIPH3i"
		const uintV7rYgwp = BigInt("1404")
		const WOLFztOqdWd = await WOLF.new(stringm0X6zw6, stringevPT0I, uintV7rYgwp, {from: accounts[2]});
		const uintSmUsDFo = BigInt("1525")
		const addresszuWsjdg = accounts[4]
		const uintD8ba03d = BigInt("741")
		const addressdMn3hSY = accounts[2]
		const addressc4r8SER = "0x0000000000000000000000000000000000000001"
		const uintCPDSmr = BigInt("1221")
		const addressjQPrsc6 = accounts[0]
		const uintlM1YfhL = BigInt("532")
		const addressUb6ApWk = accounts[2]
		const boolBjvwpda = await WOLFztOqdWd.approve.call(addresszuWsjdg, uintSmUsDFo, {from: accounts[5]});
//		const booloWxwH1R = await WOLFztOqdWd.transferFrom.call(addressc4r8SER, addressdMn3hSY, uintD8ba03d, {from: accounts[2]});
//		const boolG6VPntF = await WOLFztOqdWd.transfer.call(addressjQPrsc6, uintCPDSmr, {from: accounts[1]});
//		const boolY3Woyd7 = await WOLFztOqdWd.approve.call(addressUb6ApWk, uintlM1YfhL, {from: accounts[1]});

		assert.equal(boolBjvwpda, true)
		await expect(WOLFztOqdWd.transferFrom.call(addressc4r8SER, addressdMn3hSY, uintD8ba03d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringQRJibFx = "MiuBRYyL3hgHUrE7hE3SXx5G3uuypTXkPPyYuvSmm7pMPkFlvnuj3mnQS"
		const stringTiIFEZ5 = "J1GraM11dKy95125q6n3eS1L4l37zsI8VDFk48bymXL"
		const uintxz6ZiJ9 = BigInt("8")
		const WOLFsc6bIyZ = await WOLF.new(stringQRJibFx, stringTiIFEZ5, uintxz6ZiJ9, {from: accounts[0]});
		const uintaDdbrqS = BigInt("753")
		const address7E1x85 = accounts[0]
		const addressXWyfTHK = accounts[3]
		const uintaOcE7c2 = BigInt("1714")
		const addresseqqtVYM = accounts[0]
		const uintYbATBII = BigInt("1405")
		const addressYck4N69 = accounts[0]
//		const boolrgMh8p = await WOLFsc6bIyZ.transferFrom.call(addressXWyfTHK, address7E1x85, uintaDdbrqS, {from: accounts[3]});
//		const boolBWaldx2 = await WOLFsc6bIyZ.transfer.call(addresseqqtVYM, uintaOcE7c2, {from: accounts[4]});
//		const boolgDj0sar = await WOLFsc6bIyZ.transfer.call(addressYck4N69, uintYbATBII, {from: accounts[4]});

		await expect(WOLFsc6bIyZ.transferFrom.call(addressXWyfTHK, address7E1x85, uintaDdbrqS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringrPZF7Z7 = "ldKrgiLJIzCHWKDSGuy8cowk5bv2XmEqHxRQunp6B0n1MJFxl5PxD67n9uOoKzsIUWT1g2dNPau"
		const stringvCDfyFb = "tjRer"
		const uintZJGpSLl = BigInt("1005")
		const WOLFCIwpAQU = await WOLF.new(stringrPZF7Z7, stringvCDfyFb, uintZJGpSLl, {from: accounts[3]});
		const uintKkER9VV = BigInt("978")
		const addressAUkNLXi = accounts[4]
		const uintbXCTscA = BigInt("1629")
		const addressejgzt3 = accounts[3]
		const addressLQcFQAV = accounts[4]
		const bool0G0Z2B = await WOLFCIwpAQU.approve.call(addressAUkNLXi, uintKkER9VV, {from: accounts[2]});
		const boolDvLzvrX = await WOLFCIwpAQU.transfer.call(addressejgzt3, uintbXCTscA, {from: accounts[3]});
		const boolZa53tr8 = await WOLFCIwpAQU.transferownership.call(addressLQcFQAV, {from: accounts[3]});

		assert.equal(bool0G0Z2B, true)
		assert.equal(boolDvLzvrX, true)
		assert.equal(boolZa53tr8, true)
	});

	it('test for WOLF', async () => {
		const stringX4TPYa8 = "dAe3Khdk3e7avCRzeBVJAbpcBzQKoS9irbmnv"
		const stringGh6GdeJ = "7K6shBieHAsh2cJaIHMDctYyOTQI1fiOtmesBzzUpNPGajs4rbLiWyDeoB0ha9sNF0IBRHW"
		const uintaWtDbzD = BigInt("625")
		const WOLFoimY0n0 = await WOLF.new(stringX4TPYa8, stringGh6GdeJ, uintaWtDbzD, {from: accounts[3]});
		const uintZ8gI6Uu = BigInt("551")
		const addressFiuF6Od = accounts[5]
		const addressLP8lnR = accounts[0]
		const uintn9ymsmZ = BigInt("1302")
		const addressVxhpVQp = accounts[3]
//		const boolgPl9pEt = await WOLFoimY0n0.transferFrom.call(addressLP8lnR, addressFiuF6Od, uintZ8gI6Uu, {from: accounts[0]});
//		const boolEmZ4XBK = await WOLFoimY0n0.transfer.call(addressVxhpVQp, uintn9ymsmZ, {from: accounts[2]});

		await expect(WOLFoimY0n0.transferFrom.call(addressLP8lnR, addressFiuF6Od, uintZ8gI6Uu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringX4TPYa8 = "dAe3Khdk3e7avCRzeBVJAbpcBzQKoS9irbmnv"
		const stringGh6GdeJ = "7K6shBieHAsh2cJaIHMDctYyOTQI1fiOtmesBzzUpNPGajs4rbLiWyDeoB0ha9sNF0IBRHW"
		const uintDfTP0c = BigInt("625")
		const WOLFoimY0n0 = await WOLF.new(stringX4TPYa8, stringGh6GdeJ, uintDfTP0c, {from: accounts[3]});
		const uintCdLxOY2 = BigInt("72")
		const addressULA2tlo = accounts[1]
		const uinthWXtDCb = BigInt("551")
		const addressUs0zAku = accounts[6]
		const addressCcZ2Dj2 = accounts[0]
		const uintCyNFtei = BigInt("1302")
		const addresshJOcAdt = accounts[3]
		const addressJgeILgD = accounts[4]
		const boolqSsH13 = await WOLFoimY0n0.approveAndCall.call(addressULA2tlo, uintCdLxOY2, {from: accounts[3]});
//		const boolgPl9pEt = await WOLFoimY0n0.transferFrom.call(addressCcZ2Dj2, addressUs0zAku, uinthWXtDCb, {from: accounts[0]});
//		const boolEmZ4XBK = await WOLFoimY0n0.transfer.call(addresshJOcAdt, uintCyNFtei, {from: accounts[2]});
//		const booltVS4bX = await WOLFoimY0n0.transferownership.call(addressJgeILgD, {from: accounts[5]});

		assert.equal(boolqSsH13, true)
		await expect(WOLFoimY0n0.transferFrom.call(addressCcZ2Dj2, addressUs0zAku, uinthWXtDCb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringX4TPYa8 = "dAe3Khdk3e7avCRzeBVJAbpcBzQKoS9irbmnv"
		const stringGh6GdeJ = "7K6shBieHAsh2cJaIHMDctYyOTQI1fiOtmesBzzUpNPGajs4rbLiWyDeoB0ha9sNF0IBRHW"
		const uintuU3ULcn = BigInt("625")
		const WOLFoimY0n0 = await WOLF.new(stringX4TPYa8, stringGh6GdeJ, uintuU3ULcn, {from: accounts[3]});
		const uintgfc0irA = BigInt("0")
		const addresstLp5Saa = accounts[1]
		const uintjS0YPy7 = BigInt("1302")
		const address9IhamQ = accounts[3]
		const addresshK4SfzN = accounts[4]
		const uintZCxXn1R = BigInt("972")
		const addressgp7Pzuj = accounts[5]
		const uintgVOHpvK = BigInt("1820")
		const addressQVNNuwm = "0x0000000000000000000000000000000000000001"
		const addressd8QSlkn = accounts[4]
		const boolqSsH13 = await WOLFoimY0n0.approveAndCall.call(addresstLp5Saa, uintgfc0irA, {from: accounts[3]});
//		const boolEmZ4XBK = await WOLFoimY0n0.transfer.call(address9IhamQ, uintjS0YPy7, {from: accounts[2]});
//		const booltVS4bX = await WOLFoimY0n0.transferownership.call(addresshK4SfzN, {from: accounts[5]});
//		const boolX2H1Rgu = await WOLFoimY0n0.approveAndCall.call(addressgp7Pzuj, uintZCxXn1R, {from: accounts[4]});
//		const boolXJVOjwO = await WOLFoimY0n0.transferFrom.call(addressd8QSlkn, addressQVNNuwm, uintgVOHpvK, {from: accounts[1]});

		assert.equal(boolqSsH13, true)
		await expect(WOLFoimY0n0.transfer.call(address9IhamQ, uintjS0YPy7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringWErWKnN = "srVbPYeNH99jb4D6Nrjgv5eVUXUk"
		const stringToEcw5E = "gunQOmA3oBYEIAoh1moLiWlbNuqL3r2tjABdYOy6D87t6EK"
		const uinttRrvlcJ = BigInt("1522")
		const WOLFS2hqVgg = await WOLF.new(stringWErWKnN, stringToEcw5E, uinttRrvlcJ, {from: "0x0000000000000000000000000000000000000001"});
		const uinto499uwq = BigInt("181")
		const addressebIT3aL = "0x0000000000000000000000000000000000000001"
		const uintRJTT7q = BigInt("180")
		const addressFuqnAH = accounts[4]
		const addressRO56FgN = accounts[4]
		const uintWY0aBcf = BigInt("795")
		const addressIq14Gr = accounts[4]
		const addressdutBbQp = accounts[1]
		const addresslv8QvLZ = accounts[3]
		const boolNfmKhuI = await WOLFS2hqVgg.approve.call(addressebIT3aL, uinto499uwq, {from: accounts[2]});
		const boolyMJeBl7 = await WOLFS2hqVgg.transferFrom.call(addressRO56FgN, addressFuqnAH, uintRJTT7q, {from: "0x0000000000000000000000000000000000000001"});
		const boolhkp2PMl = await WOLFS2hqVgg.transferFrom.call(addressdutBbQp, addressIq14Gr, uintWY0aBcf, {from: accounts[0]});
		const boolhO98EVN = await WOLFS2hqVgg.transferownership.call(addresslv8QvLZ, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringauTcmYH = "gBjzzdx36ivWGMRRIeCQRf8WYqDTEssNLOYR4V2QryPtFwKtGqAVs3ol1Hk3N7sJkFrgHHifoVjZhhcu5n1c5c8vthe6oT7SN"
		const stringyTGMtE2 = "uvJwNYJro4xrumAHFSpdPJmsYzgAApB"
		const uintKjwFL1h = BigInt("1326")
		const WOLFIQDBBF = await WOLF.new(stringauTcmYH, stringyTGMtE2, uintKjwFL1h, {from: accounts[3]});
		const uintZG3uCSU = BigInt("0")
		const addresspAcpuj = accounts[4]
		const addressoX29uPy = accounts[2]
		const uintSDHTlfn = BigInt("691")
		const addressLFjkLKi = accounts[4]
		const boolXV0wXkt = await WOLFIQDBBF.transferFrom.call(addressoX29uPy, addresspAcpuj, uintZG3uCSU, {from: accounts[3]});
		const boolByRRYGZ = await WOLFIQDBBF.approve.call(addressLFjkLKi, uintSDHTlfn, {from: accounts[4]});

		assert.equal(boolByRRYGZ, true)
		assert.equal(boolXV0wXkt, true)
	});
})