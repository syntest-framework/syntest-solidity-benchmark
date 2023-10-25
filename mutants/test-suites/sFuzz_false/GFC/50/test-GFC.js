const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintZimErca = BigInt("1975")
		const stringuNPkBde = "VWvxHDP6ddjK3rZ5RP95MBVSSwJJT7PXF1J9v7COeUmUOqJvpZWPXjgJYKf2bxoMjetu6WexvbyHU6bVGJAoNmosXqySe"
		const stringwYpR9y8 = "YQym8mpD5oFMyFj2cAic8z"
		const GFCYLjnEZ0 = await GFC.new(uintZimErca, stringuNPkBde, stringwYpR9y8, {from: accounts[3]});
		const uintPoQ0kg9 = BigInt("1520")
		const addressUtvQWdW = accounts[5]
		const uintkfUBCLi = BigInt("962")
		const addressmdwu1oe = accounts[4]
		const boolylAvc6i = await GFCYLjnEZ0.approve.call(addressUtvQWdW, uintPoQ0kg9, {from: accounts[0]});
//		const booly1Cw1KG = await GFCYLjnEZ0.burnFrom.call(addressmdwu1oe, uintkfUBCLi, {from: accounts[4]});

		assert.equal(boolylAvc6i, true)
		await expect(GFCYLjnEZ0.burnFrom.call(addressmdwu1oe, uintkfUBCLi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintypxO8W6 = BigInt("1256")
		const stringjySTCHO = "M1hFDCahrzKHCQXeFrmjBHNp5spDbklEswsIE8iCHUcG"
		const stringUiuvSJl = "Wv1Xkg4DC4hQqVevSOy1rgTaaFbHyy5CjREhixDBp7ZXa8HI5DZymcXm66vqPPOLq"
		const GFCYN8fMfR = await GFC.new(uintypxO8W6, stringjySTCHO, stringUiuvSJl, {from: accounts[0]});
		const uintPGSI8hh = BigInt("1996")
		const uintZuXZ2l6 = BigInt("1382")
		const addressP2OzGWV = accounts[5]
		const addressstxG9w0 = accounts[0]
		const uintEU19LNi = BigInt("1159")
		const addressdg23BIP = accounts[2]
//		const boolcqim3nF = await GFCYN8fMfR.burn.call(uintPGSI8hh, {from: accounts[1]});
//		const boolzJkq2DD = await GFCYN8fMfR.transferFrom.call(addressstxG9w0, addressP2OzGWV, uintZuXZ2l6, {from: accounts[1]});
//		const boolG0cDxyc = await GFCYN8fMfR.burnFrom.call(addressdg23BIP, uintEU19LNi, {from: accounts[0]});

		await expect(GFCYN8fMfR.burn.call(uintPGSI8hh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintfdvdNzW = BigInt("1213")
		const stringJKzbPIt = "H8"
		const stringmpObOgi = "LkXZ4oVTryJYxhmi6xGYz1eNvd4eZjjtVMVgADxMaPFouLnXONSKjGRpKcU8lj8x51WMvxp"
		const GFCYaVAqIE = await GFC.new(uintfdvdNzW, stringJKzbPIt, stringmpObOgi, {from: accounts[0]});
		const byteEFJV3JY = "0x151f18"
		const uintYls2tkJ = BigInt("1468")
		const addressxwCJwx8 = accounts[0]
		const uinttTMH0lD = BigInt("1180")
		const addresstMKUVJU = accounts[0]
		const byteV7X83rR = "0x07020a16142001061a12"
		const uintKSKIfFt = BigInt("1996")
		const addressnYQCbe = accounts[0]
//		const boolS1I9A2 = await GFCYaVAqIE.approveAndCall.call(addressxwCJwx8, uintYls2tkJ, byteEFJV3JY, {from: accounts[1]});
//		const booloZSIUH = await GFCYaVAqIE.burnFrom.call(addresstMKUVJU, uinttTMH0lD, {from: accounts[0]});
//		const boolvSztJoF = await GFCYaVAqIE.approveAndCall.call(addressnYQCbe, uintKSKIfFt, byteV7X83rR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCYaVAqIE.approveAndCall.call(addressxwCJwx8, uintYls2tkJ, byteEFJV3JY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintt93KkkG = BigInt("784")
		const stringYAj69kT = "OWLWgeCEQnU4kJo3ARuT3xvQjMAdzjSIsmCemab5XP3Ep"
		const stringa98Czll = "dgaaVhQqjzWyxXp4z5gIfizwiYIy3jr6mTLloD3pe5wDX6xnbmlqzxoSh"
		const GFCGeVoFtX = await GFC.new(uintt93KkkG, stringYAj69kT, stringa98Czll, {from: accounts[4]});
		const uintLLaJvO4 = BigInt("975")
		const addressnKRwSBs = "0x0000000000000000000000000000000000000001"
		const addressW09OrLx = accounts[4]
		const uintCqQqHJw = BigInt("1572")
		const addressSDfqdCz = accounts[3]
		const addressgKqDZVW = accounts[2]
		const uintoCUGeu = BigInt("669")
		const byteL15oTG = "0x03061b06021c0001041e120a0d05061c"
		const uintryX5z4X = BigInt("1211")
		const addresszCVoQy = accounts[1]
//		const bool7MYqLs = await GFCGeVoFtX.transferFrom.call(addressW09OrLx, addressnKRwSBs, uintLLaJvO4, {from: accounts[3]});
//		const boolngJOogy = await GFCGeVoFtX.transferFrom.call(addressgKqDZVW, addressSDfqdCz, uintCqQqHJw, {from: accounts[0]});
//		const boolCABqsms = await GFCGeVoFtX.burn.call(uintoCUGeu, {from: accounts[4]});
//		const boolJR9WQf = await GFCGeVoFtX.approveAndCall.call(addresszCVoQy, uintryX5z4X, byteL15oTG, {from: accounts[0]});

		await expect(GFCGeVoFtX.transferFrom.call(addressW09OrLx, addressnKRwSBs, uintLLaJvO4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintImr7n4O = BigInt("1975")
		const stringuNPkBde = "VWvxHDP6ddjK3rZ5RP95MBVSSwJJT7PXF1J9v7COeUmUOqJvpZWPXjgJYKf2bxoMjetu6WexvbyHU6bVGJAoNmosXqySe"
		const stringwYpR9y8 = "YQym8mpD5oFMyFj2cAic8z"
		const GFCYLjnEZ0 = await GFC.new(uintImr7n4O, stringuNPkBde, stringwYpR9y8, {from: accounts[3]});
		const uintOPMhTbg = BigInt("1517")
		const addressRmoeZQY = accounts[4]
		const uintIq0TenS = BigInt("1520")
		const addresswsvGfZN = accounts[6]
		const uintTTpDnrV = BigInt("764")
		const addresswnPSHgj = accounts[1]
		const addressQf5n6D = accounts[4]
		const uintj9RVfL5 = BigInt("962")
		const addressvvxuqtR = accounts[4]
//		const boolXRQxair = await GFCYLjnEZ0.transfer.call(addressRmoeZQY, uintOPMhTbg, {from: accounts[5]});
//		const boolylAvc6i = await GFCYLjnEZ0.approve.call(addresswsvGfZN, uintIq0TenS, {from: accounts[0]});
//		const boolbAzcqdW = await GFCYLjnEZ0.transferFrom.call(addressQf5n6D, addresswnPSHgj, uintTTpDnrV, {from: accounts[3]});
//		const booly1Cw1KG = await GFCYLjnEZ0.burnFrom.call(addressvvxuqtR, uintj9RVfL5, {from: accounts[4]});

		await expect(GFCYLjnEZ0.transfer.call(addressRmoeZQY, uintOPMhTbg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintMkKURv7 = BigInt("1527")
		const stringm2mOniF = "stI79SbZbHgyI9YkwbRf"
		const stringy5PDDg2 = "8SCNdryvAYDPEXPb31UtX8JCalrvQLgIH5GFdc4WRC1aoESXn5zd66iEpAwKxmxCnjUBpamtaTa3E"
		const GFCL4UoD9O = await GFC.new(uintMkKURv7, stringm2mOniF, stringy5PDDg2, {from: "0x0000000000000000000000000000000000000001"});
		const uintXstEe67 = BigInt("16")
		const uintwc1Tmbf = BigInt("602")
		const addressV9AUP6 = accounts[1]
		const uintdTArq65 = BigInt("365")
		const addressIJ8XkMC = accounts[0]
		const uintm8rRY44 = BigInt("877")
		const uintw09BcwG = BigInt("216")
		const uintEu9vxlE = BigInt("1652")
		const addressJWzQ6E = accounts[2]
		const boolra55ZrH = await GFCL4UoD9O.burn.call(uintXstEe67, {from: accounts[2]});
		const boolVjoqb5d = await GFCL4UoD9O.approve.call(addressV9AUP6, uintwc1Tmbf, {from: accounts[3]});
		const boolsLqATD5 = await GFCL4UoD9O.transfer.call(addressIJ8XkMC, uintdTArq65, {from: accounts[0]});
		const boolFbG2hNb = await GFCL4UoD9O.burn.call(uintm8rRY44, {from: accounts[1]});
		const boolcyzOu3S = await GFCL4UoD9O.burn.call(uintw09BcwG, {from: accounts[4]});
		const boolPh8RKSV = await GFCL4UoD9O.transfer.call(addressJWzQ6E, uintEu9vxlE, {from: accounts[4]});
	});
})