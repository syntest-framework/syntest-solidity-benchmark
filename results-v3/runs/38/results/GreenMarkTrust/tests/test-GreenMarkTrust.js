const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintr9ffLc = BigInt("377")
		const stringzDoZg4 = "beKJnLeaYdA6wP8X6NvHHSHem0fobFuOohiD7hLJyM66LbGrOEucyBDN1xG"
		const stringMXkEv7H = "7pxfqDKGG7CbbQXoRaSAEL0FaAi8K4Qd29zOvcrkyO52Zuz7GWX8hZ7UofzsmAOHuwunUAj7vNxYczRl6n9qwOi"
		const GreenMarkTrustmP36DMA = await GreenMarkTrust.new(uintr9ffLc, stringzDoZg4, stringMXkEv7H, {from: accounts[1]});
		const bytef6waJmx = "0x1b071c0b03200d02101f18100211"
		const uintGXDqAi = BigInt("1635")
		const addressiMlBZ6b = "0x0000000000000000000000000000000000000001"
		const uintwEFEAfX = BigInt("1548")
		const addressjGsp9Uy = accounts[0]
		const addresswzH0Dbh = accounts[0]
		const uintQFokRWK = BigInt("967")
		const addresslVw3QV0 = accounts[4]
		const uintNUyRrU = BigInt("973")
		const addressPPyjgBe = accounts[5]
		const uintbrJ0mZw = BigInt("1661")
		const addressN6T4LJ9 = accounts[1]
		const boolMjMBqAg = await GreenMarkTrustmP36DMA.approveAndCall.call(addressiMlBZ6b, uintGXDqAi, bytef6waJmx, {from: accounts[3]});
		const boolWcqLxrP = await GreenMarkTrustmP36DMA.transferFrom.call(addresswzH0Dbh, addressjGsp9Uy, uintwEFEAfX, {from: accounts[4]});
		const boolQvTIBeD = await GreenMarkTrustmP36DMA.approve.call(addresslVw3QV0, uintQFokRWK, {from: accounts[5]});
		const boolcAkvx4k = await GreenMarkTrustmP36DMA.transfer.call(addressPPyjgBe, uintNUyRrU, {from: accounts[1]});
		const boolNHDxwJJ = await GreenMarkTrustmP36DMA.transfer.call(addressN6T4LJ9, uintbrJ0mZw, {from: accounts[2]});

		await expect(GreenMarkTrustmP36DMA.approveAndCall.call(addressiMlBZ6b, uintGXDqAi, bytef6waJmx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintVkNSmxl = BigInt("1015")
		const stringxJMkF7 = "OADBMRQBF1pmWFaE2kKoR46CaWcRoAdwBrNUJl"
		const stringLxR3ypv = "VqtlUy2KGumDJHskuTM23Y6qG6FLVMcnFzQt6Ym76tCxOb"
		const GreenMarkTrustvDnKcNl = await GreenMarkTrust.new(uintVkNSmxl, stringxJMkF7, stringLxR3ypv, {from: accounts[2]});
		const uintg5fxPN2 = BigInt("615")
		const addressOSevi6J = "0x0000000000000000000000000000000000000001"
		const addressJbssms = accounts[3]
		const uintFM0pFvZ = BigInt("1060")
		const uintaXr1jA6 = BigInt("1992")
		const addressF5sXlgS = accounts[0]
		const uintNVRGkND = BigInt("1814")
		const addressusTMn1C = "0x0000000000000000000000000000000000000001"
		const boolaFGVm0 = await GreenMarkTrustvDnKcNl.transferFrom.call(addressJbssms, addressOSevi6J, uintg5fxPN2, {from: "0x0000000000000000000000000000000000000001"});
		const boold7oqWty = await GreenMarkTrustvDnKcNl.burn.call(uintFM0pFvZ, {from: accounts[3]});
		const booltxTLmut = await GreenMarkTrustvDnKcNl.approve.call(addressF5sXlgS, uintaXr1jA6, {from: accounts[1]});
		const bools1UV3O3 = await GreenMarkTrustvDnKcNl.burnFrom.call(addressusTMn1C, uintNVRGkND, {from: accounts[4]});

		await expect(GreenMarkTrustvDnKcNl.transferFrom.call(addressJbssms, addressOSevi6J, uintg5fxPN2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintiP7riEA = BigInt("1588")
		const stringCAZqSW = "5FQg7MeAuP3XiXUiH2zjKaU4l7gpCfLISaJbfs3VA1UR6YrWgKbDwNmNV7IUCS2WLFg98JSgKsxKB"
		const stringrtlO1Yn = "0QVFqk91DuPu1xy"
		const GreenMarkTrustDtOyfcr = await GreenMarkTrust.new(uintiP7riEA, stringCAZqSW, stringrtlO1Yn, {from: "0x0000000000000000000000000000000000000001"});
		const byte32nu04 = "0x03140e06130d0b09"
		const uintFZ6hw9E = BigInt("1746")
		const addressUBHv9sN = accounts[0]
		const bytePDMjCxj = "0x001c16080a"
		const uintinoupU3 = BigInt("1408")
		const addressq6ZPDUw = accounts[3]
		const uintFUIxls = BigInt("244")
		const addressWS5KF4D = accounts[3]
		const uintafwx9q = BigInt("186")
		const address5qD93M = accounts[4]
		const uintoiMZSAZ = BigInt("1306")
		const addresskYBcub = accounts[3]
		const boolw8pOSNN = await GreenMarkTrustDtOyfcr.approveAndCall.call(addressUBHv9sN, uintFZ6hw9E, byte32nu04, {from: "0x0000000000000000000000000000000000000001"});
		const boolBOfrVAr = await GreenMarkTrustDtOyfcr.approveAndCall.call(addressq6ZPDUw, uintinoupU3, bytePDMjCxj, {from: accounts[1]});
		const boolQKG9nDL = await GreenMarkTrustDtOyfcr.approve.call(addressWS5KF4D, uintFUIxls, {from: accounts[2]});
		const boolMeZZebI = await GreenMarkTrustDtOyfcr.approve.call(address5qD93M, uintafwx9q, {from: "0x0000000000000000000000000000000000000001"});
		const booljGSPZuG = await GreenMarkTrustDtOyfcr.transfer.call(addresskYBcub, uintoiMZSAZ, {from: accounts[4]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintSdpEZsu = BigInt("594")
		const stringB9FRW0Y = "fCeF5meLqsW2tS9Ao7bRm"
		const stringBw01F3Q = "rKfv4oEkVqhvgjYDoTs5I3xCXXsVRccmUg2CPjfd2FTYXG4pakH3M8lKTq7ggym29NKyDJhrY9z7QxLop0UI3"
		const GreenMarkTrusteOO64Wx = await GreenMarkTrust.new(uintSdpEZsu, stringB9FRW0Y, stringBw01F3Q, {from: accounts[0]});
		const uintzzMSFla = BigInt("1447")
		const addressHaNNi71 = accounts[4]
		const bytejwWMAt = "0x13190c1f0e02081f0a1f1a170819101a160e"
		const uintiTmjap6 = BigInt("1423")
		const addressSAVk5m = accounts[2]
		const uintD1GPkec = BigInt("1248")
		const addressZr3ci32 = accounts[4]
		const uint9UMs6C = BigInt("1743")
		const addressV6cfHt3 = accounts[0]
		const uintGuo9njS = BigInt("503")
		const addressERxTOsU = accounts[3]
		const addressOnYrci3 = accounts[1]
		const booln3US28g = await GreenMarkTrusteOO64Wx.burnFrom.call(addressHaNNi71, uintzzMSFla, {from: accounts[2]});
		const boolRlM02S4 = await GreenMarkTrusteOO64Wx.approveAndCall.call(addressSAVk5m, uintiTmjap6, bytejwWMAt, {from: accounts[1]});
		const boolxFm4Uf4 = await GreenMarkTrusteOO64Wx.approve.call(addressZr3ci32, uintD1GPkec, {from: accounts[4]});
		const boolVae3JBl = await GreenMarkTrusteOO64Wx.transfer.call(addressV6cfHt3, uint9UMs6C, {from: accounts[4]});
		const boolwZ0Rt4j = await GreenMarkTrusteOO64Wx.transferFrom.call(addressOnYrci3, addressERxTOsU, uintGuo9njS, {from: accounts[2]});

		await expect(GreenMarkTrusteOO64Wx.burnFrom.call(addressHaNNi71, uintzzMSFla, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintXYccJr = BigInt("1101")
		const stringqQbMDQa = "rbut6azfBo2cQLTCcPoOVUtUoh7zjmbWr7HEmqQNpGU1yTzjbjvsRWJgCWYQy3zb7gkTtHgkZCJr1PN4In26TtMe8"
		const stringcQrXYv = "GrqmCQ3vzVXvDFCbOW6Ql0sepvOkoR3os889nnf847vkaghnyAT5f2At"
		const GreenMarkTrustb1yqfZS = await GreenMarkTrust.new(uintXYccJr, stringqQbMDQa, stringcQrXYv, {from: accounts[3]});
		const uintiaGMXQz = BigInt("632")
		const addresshKSQTRH = accounts[4]
		const uintLf4phT7 = BigInt("1125")
		const addressqtt5pdF = accounts[2]
		const addressjJuRsd = accounts[3]
		const uinthyzoui = BigInt("1337")
		const boolRWx1vOQ = await GreenMarkTrustb1yqfZS.transfer.call(addresshKSQTRH, uintiaGMXQz, {from: accounts[1]});
		const boolUPhMZ28 = await GreenMarkTrustb1yqfZS.transferFrom.call(addressjJuRsd, addressqtt5pdF, uintLf4phT7, {from: accounts[2]});
		const boolBHsMXCc = await GreenMarkTrustb1yqfZS.burn.call(uinthyzoui, {from: accounts[3]});

		await expect(GreenMarkTrustb1yqfZS.transfer.call(addresshKSQTRH, uintiaGMXQz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintsexxykh = BigInt("1895")
		const stringg3iSHPE = "CHxxxKHmkFNocs8zvS94DIUnfWk4CUSLltNc8wd3OlhTFBUFS2khnNUMvs5pjrTfG1k2h5EJIdW2DmqP54RMLzdzFh"
		const stringmN4h92L = "jBnBLdj4gHeTWL4qiz7L1aLwqXuNl5OkXLnPiqPrMuI0Sc9FiGdUnEGreuUkUvRhRIFJFOsvadi"
		const GreenMarkTrustdGtPxJs = await GreenMarkTrust.new(uintsexxykh, stringg3iSHPE, stringmN4h92L, {from: accounts[1]});
		const uintE0QGXsQ = BigInt("1550")
		const addressXPD1wrS = accounts[5]
		const uintarpKxNN = BigInt("1463")
		const boolZwRxLa2 = await GreenMarkTrustdGtPxJs.approve.call(addressXPD1wrS, uintE0QGXsQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolVVvvOc8 = await GreenMarkTrustdGtPxJs.burn.call(uintarpKxNN, {from: accounts[1]});

		assert.equal(boolVVvvOc8, true)
		assert.equal(boolZwRxLa2, true)
	});
})