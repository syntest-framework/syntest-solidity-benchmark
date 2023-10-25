const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiX95Xqz = await REXUNIFINANCE.new({from: accounts[2]});
		const uintUSCgHjE = BigInt("1039")
		const addressnmBaSDE = accounts[3]
		const addressWUMUWd = accounts[0]
		const addressbnV1qN6 = accounts[3]
		const uintHem163c = BigInt("1679")
		const addressZSFCDPI = accounts[0]
		const booljhvxeZU = await REXUNIFINANCEiX95Xqz.increaseApproval.call(addressnmBaSDE, uintUSCgHjE, {from: accounts[4]});
//		const addressh0GXHoR = await REXUNIFINANCEiX95Xqz.transferOwnership.call(addressWUMUWd, {from: accounts[5]});
//		const uint256aQHs4QS = await REXUNIFINANCEiX95Xqz.balanceOf.call(addressbnV1qN6, {from: accounts[2]});
//		const boolu7lsxL = await REXUNIFINANCEiX95Xqz.decreaseApproval.call(addressZSFCDPI, uintHem163c, {from: accounts[0]});

		assert.equal(booljhvxeZU, true)
		await expect(REXUNIFINANCEiX95Xqz.transferOwnership.call(addressWUMUWd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiN4qOd3 = await REXUNIFINANCE.new({from: accounts[3]});
		const uintk4laOo0 = BigInt("178")
		const addresshNeY2Sy = accounts[3]
		const uintaEVxsT5 = BigInt("1402")
		const addressk9e1sB = accounts[0]
		const addressHB1ZR4 = accounts[0]
		const uints8pCV9g = BigInt("1518")
		const addressbxOfQ71 = accounts[4]
		const uintxRnB7H = BigInt("891")
		const addresshtCHgPB = accounts[5]
		const boolhglP0zY = await REXUNIFINANCEiN4qOd3.decreaseApproval.call(addresshNeY2Sy, uintk4laOo0, {from: accounts[4]});
//		const boolUymuNCx = await REXUNIFINANCEiN4qOd3.transferFrom.call(addressHB1ZR4, addressk9e1sB, uintaEVxsT5, {from: accounts[0]});
//		const boolG2SOocd = await REXUNIFINANCEiN4qOd3.transfer.call(addressbxOfQ71, uints8pCV9g, {from: accounts[5]});
//		const boolWJ5BoDq = await REXUNIFINANCEiN4qOd3.transfer.call(addresshtCHgPB, uintxRnB7H, {from: accounts[5]});

		assert.equal(boolhglP0zY, true)
		await expect(REXUNIFINANCEiN4qOd3.transferFrom.call(addressHB1ZR4, addressk9e1sB, uintaEVxsT5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEwqh9j2W = await REXUNIFINANCE.new({from: accounts[0]});
		const uintZqoJgVO = BigInt("47")
		const addressx754Wok = accounts[0]
		const addresskL5srUV = accounts[1]
		const addressWF6UDED = accounts[2]
		const uintOTTkuxF = BigInt("962")
		const addressxHgdgBH = accounts[1]
		const addressgDDYXiT = accounts[4]
//		const boolhiaYnT0 = await REXUNIFINANCEwqh9j2W.transfer.call(addressx754Wok, uintZqoJgVO, {from: accounts[5]});
//		const uint256Tqsvg4W = await REXUNIFINANCEwqh9j2W.allowance.call(addressWF6UDED, addresskL5srUV, {from: accounts[0]});
//		const booldAxS1mD = await REXUNIFINANCEwqh9j2W.approve.call(addressxHgdgBH, uintOTTkuxF, {from: accounts[4]});
//		const uint256du8Ubn7 = await REXUNIFINANCEwqh9j2W.balanceOf.call(addressgDDYXiT, {from: accounts[2]});

		await expect(REXUNIFINANCEwqh9j2W.transfer.call(addressx754Wok, uintZqoJgVO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEODReX6m = await REXUNIFINANCE.new({from: accounts[5]});
		const uintcECRXe = BigInt("1387")
		const addressJ9pYU6 = accounts[0]
		const uintsBnd0At = BigInt("836")
		const address4zqP0E = accounts[2]
		const uintPGRdSOC = BigInt("0")
		const addressualUy1U = accounts[0]
		const uintpC21zkp = BigInt("627")
		const addresss7i2gsf = accounts[2]
		const boolhLbYCFE = await REXUNIFINANCEODReX6m.approve.call(addressJ9pYU6, uintcECRXe, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqisiAiQ = await REXUNIFINANCEODReX6m.approve.call(address4zqP0E, uintsBnd0At, {from: accounts[2]});
//		const boolLTWvcEZ = await REXUNIFINANCEODReX6m.decreaseApproval.call(addressualUy1U, uintPGRdSOC, {from: accounts[4]});
//		const boolNuIN1XK = await REXUNIFINANCEODReX6m.approve.call(addresss7i2gsf, uintpC21zkp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhLbYCFE, true)
		await expect(REXUNIFINANCEODReX6m.approve.call(address4zqP0E, uintsBnd0At, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEHhceUqP = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintA1Blkhd = BigInt("52")
		const addressjFduVk9 = accounts[0]
		const uintDM7Zc4d = BigInt("978")
		const addressN330ZcH = accounts[0]
		const addressHrvjka2 = accounts[4]
		const boolNU96hID = await REXUNIFINANCEHhceUqP.decreaseApproval.call(addressjFduVk9, uintA1Blkhd, {from: accounts[2]});
		const boolCRijwal = await REXUNIFINANCEHhceUqP.approve.call(addressN330ZcH, uintDM7Zc4d, {from: accounts[3]});
		const uint256cjC91dC = await REXUNIFINANCEHhceUqP.balanceOf.call(addressHrvjka2, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEkGDDgN = await REXUNIFINANCE.new({from: accounts[4]});
		const uintka24sAj = BigInt("783")
		const addressbJpsksY = accounts[3]
		const uintI7uVtyf = BigInt("122")
		const addressc5vEZvU = accounts[0]
		const addressBAus9rP = accounts[2]
		const uintzhQzV4P = BigInt("1288")
		const addressAUBeoOG = accounts[1]
		const uintWMzQnrr = BigInt("1589")
		const addressTc0U7av = "0x0000000000000000000000000000000000000001"
		const uintzmX4iXa = BigInt("1496")
		const addressYaU0J4W = "0x0000000000000000000000000000000000000001"
		const boolGghDvs = await REXUNIFINANCEkGDDgN.increaseApproval.call(addressbJpsksY, uintka24sAj, {from: accounts[1]});
//		const booliMH1D6i = await REXUNIFINANCEkGDDgN.transferFrom.call(addressBAus9rP, addressc5vEZvU, uintI7uVtyf, {from: accounts[5]});
//		const boolIvO1EM = await REXUNIFINANCEkGDDgN.increaseApproval.call(addressAUBeoOG, uintzhQzV4P, {from: accounts[1]});
//		const bool0KNepJ = await REXUNIFINANCEkGDDgN.decreaseApproval.call(addressTc0U7av, uintWMzQnrr, {from: accounts[4]});
//		const boolinCcrPs = await REXUNIFINANCEkGDDgN.approve.call(addressYaU0J4W, uintzmX4iXa, {from: accounts[1]});

		assert.equal(boolGghDvs, true)
		await expect(REXUNIFINANCEkGDDgN.transferFrom.call(addressBAus9rP, addressc5vEZvU, uintI7uVtyf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiX95Xqz = await REXUNIFINANCE.new({from: accounts[2]});
		const uintDWuO0Ed = BigInt("1039")
		const addressoP7D8bA = accounts[3]
		const addressQBmf5lu = accounts[3]
		const addressufVGmnA = accounts[0]
		const addressiwYevDL = accounts[0]
		const addressEsj7sTs = accounts[4]
		const uintdBCOadg = BigInt("1679")
		const address74MWrG = accounts[0]
		const addressXCF3zc = accounts[0]
		const booljhvxeZU = await REXUNIFINANCEiX95Xqz.increaseApproval.call(addressoP7D8bA, uintDWuO0Ed, {from: accounts[4]});
		const uint256RRH1SPb = await REXUNIFINANCEiX95Xqz.allowance.call(addressufVGmnA, addressQBmf5lu, {from: accounts[0]});
//		const addressh0GXHoR = await REXUNIFINANCEiX95Xqz.transferOwnership.call(addressiwYevDL, {from: accounts[5]});
//		const uint256aQHs4QS = await REXUNIFINANCEiX95Xqz.balanceOf.call(addressEsj7sTs, {from: accounts[2]});
//		const boolu7lsxL = await REXUNIFINANCEiX95Xqz.decreaseApproval.call(address74MWrG, uintdBCOadg, {from: accounts[0]});
//		const uint256cbOsZUJ = await REXUNIFINANCEiX95Xqz.balanceOf.call(addressXCF3zc, {from: accounts[1]});

		assert.equal(booljhvxeZU, true)
		assert.equal(uint256RRH1SPb, BigInt("0"))
		await expect(REXUNIFINANCEiX95Xqz.transferOwnership.call(addressiwYevDL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiX95Xqz = await REXUNIFINANCE.new({from: accounts[2]});
		const addressebSwn94 = accounts[4]
		const uintEOHUOtw = BigInt("1039")
		const addressK7OM42f = accounts[3]
		const addressFcMDBra = accounts[0]
		const uintIAHPzJN = BigInt("1679")
		const addressq3m9jG = accounts[0]
		const addressPRiPnCZ = await REXUNIFINANCEiX95Xqz.transferOwnership.call(addressebSwn94, {from: accounts[2]});
		const booljhvxeZU = await REXUNIFINANCEiX95Xqz.increaseApproval.call(addressK7OM42f, uintEOHUOtw, {from: accounts[4]});
//		const addressh0GXHoR = await REXUNIFINANCEiX95Xqz.transferOwnership.call(addressFcMDBra, {from: accounts[5]});
//		const boolu7lsxL = await REXUNIFINANCEiX95Xqz.decreaseApproval.call(addressq3m9jG, uintIAHPzJN, {from: accounts[0]});

		assert.equal(booljhvxeZU, true)
		await expect(REXUNIFINANCEiX95Xqz.transferOwnership.call(addressFcMDBra, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})