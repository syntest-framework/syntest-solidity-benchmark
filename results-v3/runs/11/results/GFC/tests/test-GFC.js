const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintZsnACGN = BigInt("1092")
		const stringr0mHJRj = "4LXup54aSSFXXX7"
		const stringEzdTzkS = "Eg"
		const GFCIifzwwJ = await GFC.new(uintZsnACGN, stringr0mHJRj, stringEzdTzkS, {from: accounts[0]});
		const uintV9aghn = BigInt("772")
		const addressucIcqqZ = accounts[5]
		const addressOhWEuv2 = accounts[3]
		const bytebcyw9DI = "0x050b05071f1b0e"
		const uintH4wQfPn = BigInt("917")
		const addressSutvf57 = accounts[0]
		const uintavLjCX = BigInt("1693")
		const addressGC0QdUD = accounts[1]
		const boolYFkokpt = await GFCIifzwwJ.transferFrom.call(addressOhWEuv2, addressucIcqqZ, uintV9aghn, {from: accounts[3]});
		const boolu8EH4h5 = await GFCIifzwwJ.approveAndCall.call(addressSutvf57, uintH4wQfPn, bytebcyw9DI, {from: accounts[2]});
		const boolGB8n9v = await GFCIifzwwJ.transfer.call(addressGC0QdUD, uintavLjCX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCIifzwwJ.transferFrom.call(addressOhWEuv2, addressucIcqqZ, uintV9aghn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintfDIKIZv = BigInt("1872")
		const stringgnP5uox = "SpvxKYq4ndyI9EGXUhzQM"
		const stringPi0wQin = "dqDb6UUdIsoMNS09ztY96HsKbAxckfOB3SN"
		const GFCMXXv13 = await GFC.new(uintfDIKIZv, stringgnP5uox, stringPi0wQin, {from: accounts[2]});
		const uintjVtqrpG = BigInt("1541")
		const addresstG3Fg3d = accounts[3]
		const bytedVVDelt = "0x060b0b0b0e020a0b"
		const uintN4fGkoG = BigInt("1029")
		const addressGWYLtf = accounts[0]
		const boolqbcLkQu = await GFCMXXv13.burnFrom.call(addresstG3Fg3d, uintjVtqrpG, {from: accounts[3]});
		const boolZDDv3l4 = await GFCMXXv13.approveAndCall.call(addressGWYLtf, uintN4fGkoG, bytedVVDelt, {from: accounts[4]});

		await expect(GFCMXXv13.burnFrom.call(addresstG3Fg3d, uintjVtqrpG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintc04lQe2 = BigInt("1450")
		const stringb5s1A2R = "ZDAlnR9vUeTkEpYpNeftxjqCaUPtBCjP64WaBIy5wOATn7CP7ANfVBzUdrwrHnugcxVdA9Y2Xz1HWGRn"
		const stringvFyHGDE = "VdAFPwdOlKIuKNGordmTHWnG6z"
		const GFCXlZxKU7 = await GFC.new(uintc04lQe2, stringb5s1A2R, stringvFyHGDE, {from: "0x0000000000000000000000000000000000000001"});
		const uintRhABRDR = BigInt("1112")
		const bytemfzQ6Yy = "0x0015131a1410011d10180c1711081703031e090410"
		const uintMRlgjAX = BigInt("179")
		const addresstYq1PuE = accounts[0]
		const uintW5obu80 = BigInt("1405")
		const boolaYnE9Rh = await GFCXlZxKU7.burn.call(uintRhABRDR, {from: accounts[3]});
		const booldh3OD0F = await GFCXlZxKU7.approveAndCall.call(addresstYq1PuE, uintMRlgjAX, bytemfzQ6Yy, {from: accounts[0]});
		const bools6Z49OO = await GFCXlZxKU7.burn.call(uintW5obu80, {from: accounts[2]});
	});

	it('test for GFC', async () => {
		const uintAB1dccF = BigInt("1811")
		const stringW8vSX98 = "ARd66qC2knTrp3ycronAdgVjcbrGhKpOSY3CYEitMTE6OexMOvAggrrWUAmA1"
		const stringIXD9jUl = "3uFtQLROBV7wj7oYZvRWYDIV63uxI2KTfkQEVV3Y420kqN3ubf8f1eBMUKjBURHtbKjHsYllSyW2CKQY8bqIA6GuB"
		const GFCYg4E8b1 = await GFC.new(uintAB1dccF, stringW8vSX98, stringIXD9jUl, {from: accounts[4]});
		const byteGJgcggR = "0x0e1f0c07201b080f0d11131a010619040401160d1d0b010c"
		const uintlfiilcM = BigInt("262")
		const addressaIS5Kn = accounts[3]
		const uintt10sIoG = BigInt("231")
		const addressyuo4AEB = accounts[4]
		const byteKb19a51 = "0x0b071f101412191a1705161b0b111f060809"
		const uintVrueqle = BigInt("1374")
		const addressZHTCZEi = accounts[3]
		const uintyfBjHpL = BigInt("301")
		const boolgHYuyqC = await GFCYg4E8b1.approveAndCall.call(addressaIS5Kn, uintlfiilcM, byteGJgcggR, {from: accounts[3]});
		const boolxZ4GPxz = await GFCYg4E8b1.approve.call(addressyuo4AEB, uintt10sIoG, {from: accounts[1]});
		const booltg4Y972 = await GFCYg4E8b1.approveAndCall.call(addressZHTCZEi, uintVrueqle, byteKb19a51, {from: accounts[0]});
		const booldnjGIO = await GFCYg4E8b1.burn.call(uintyfBjHpL, {from: accounts[2]});

		await expect(GFCYg4E8b1.approveAndCall.call(addressaIS5Kn, uintlfiilcM, byteGJgcggR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintadov3Cn = BigInt("11")
		const stringn2m4ipX = "KRWsYXvseTw51EQpNtjJUr2hGKIHb3Om0Mu1GYGOaCDY9fNEQ9UyivTgINxRt26sHNb"
		const stringYAQsbTx = "ccVu3lsyxtQ5Y7qB4RK9"
		const GFCWj8OUo6 = await GFC.new(uintadov3Cn, stringn2m4ipX, stringYAQsbTx, {from: accounts[0]});
		const uintNsmHQ6m = BigInt("451")
		const addressw9hBOtU = accounts[0]
		const uintbzidm73 = BigInt("1390")
		const boolRNxfagi = await GFCWj8OUo6.approve.call(addressw9hBOtU, uintNsmHQ6m, {from: accounts[3]});
		const boolKNysgfO = await GFCWj8OUo6.burn.call(uintbzidm73, {from: accounts[0]});

		assert.equal(boolKNysgfO, true)
		assert.equal(boolRNxfagi, true)
	});

	it('test for GFC', async () => {
		const uinthgGpUHJ = BigInt("700")
		const stringBRmkar4 = "za8Tp3ntf7fKI5p3F63Xl7qu21pBdj4Uk08g39okmqCCwULV6lGF"
		const stringoEXHdob = "3dJq7Eef0znafEBPFxfe2XYULGi5x9FS3div3s7eOHfTJsUPf2Q621bEt1NdMeDetK2gDmuFJORJ0TJ"
		const GFCE8cUiT = await GFC.new(uinthgGpUHJ, stringBRmkar4, stringoEXHdob, {from: accounts[2]});
		const uintQdFVxF1 = BigInt("1642")
		const addressBxABp2J = accounts[0]
		const uintbAPkU21 = BigInt("1389")
		const addressH5eZerw = accounts[0]
		const addressTwVBuge = accounts[1]
		const uintnKZzaaK = BigInt("1462")
		const addressvi8mMRT = accounts[1]
		const bytes8TeIgJ = "0x0e0202160e101b0803101900"
		const uintNWZfy96 = BigInt("260")
		const addressgh4y2X7 = accounts[4]
		const boolNwAwz6Y = await GFCE8cUiT.transfer.call(addressBxABp2J, uintQdFVxF1, {from: accounts[4]});
		const boolgDcko1D = await GFCE8cUiT.transferFrom.call(addressTwVBuge, addressH5eZerw, uintbAPkU21, {from: accounts[3]});
		const boolXlHebNE = await GFCE8cUiT.approve.call(addressvi8mMRT, uintnKZzaaK, {from: accounts[2]});
		const booluA2ESD = await GFCE8cUiT.approveAndCall.call(addressgh4y2X7, uintNWZfy96, bytes8TeIgJ, {from: accounts[3]});

		await expect(GFCE8cUiT.transfer.call(addressBxABp2J, uintQdFVxF1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})