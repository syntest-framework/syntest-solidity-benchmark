const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringT4XBqqM = "dbZvAU8AJmpkKefdab23lNcBJfA9cir2"
		const stringFGgp3BY = "aGbFexG3c9RNSmrk9U4v91cEwg6DIgWytoimeNy7XvsGVI9d3ZA7OW6RTjbCNka825Mgck6GlfToqcudf5jGs2vgYCCJC"
		const uintVdDsY1N = BigInt("199")
		const FinalOO7RHtD = await Final.new(stringT4XBqqM, stringFGgp3BY, uintVdDsY1N, {from: accounts[0]});
		const uintbupVTI3 = BigInt("1115")
		const addressUuHB9O = accounts[0]
		const uintHN8Ywxp = BigInt("1660")
		const addressg3j61Dp = accounts[2]
		const address2Y3V2U = accounts[5]
		const addressYs6rkgX = accounts[2]
		const uintPsfQdbY = BigInt("184")
		const addressS78DU2P = accounts[2]
//		const boolUHLpSlO = await FinalOO7RHtD.transfer.call(addressUuHB9O, uintbupVTI3, {from: accounts[4]});
//		const boolLyjrXi9 = await FinalOO7RHtD.transfer.call(addressg3j61Dp, uintHN8Ywxp, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8llSvXdF = await FinalOO7RHtD.decimals.call({from: accounts[0]});
//		const uintFRX1YOE = await FinalOO7RHtD.allowance.call(addressYs6rkgX, address2Y3V2U, {from: accounts[4]});
//		const boolCRZuBbj = await FinalOO7RHtD.transfer.call(addressS78DU2P, uintPsfQdbY, {from: accounts[4]});

		await expect(FinalOO7RHtD.transfer.call(addressUuHB9O, uintbupVTI3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBxVWz9w = "ICMj6OUipsy"
		const stringeUaZ8g3 = "UoMkiUP"
		const uintSHIL35k = BigInt("79")
		const FinalFnatpc8 = await Final.new(stringBxVWz9w, stringeUaZ8g3, uintSHIL35k, {from: accounts[2]});
		const uintVUsUq8r = BigInt("1947")
		const addressw0mftfP = "0x0000000000000000000000000000000000000001"
		const uintssRe7Ju = BigInt("1462")
		const addressVp1CFY4 = accounts[0]
		const addressovDYZVo = accounts[3]
		const addressKBfyhAe = accounts[3]
		const addressOV5RQt = accounts[1]
		const stringzA0z3Xv = await FinalFnatpc8.symbol.call({from: accounts[4]});
//		const boolS1qWa3H = await FinalFnatpc8.transfer.call(addressw0mftfP, uintVUsUq8r, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHKp6k1K = await FinalFnatpc8.decreaseAllowance.call(addressVp1CFY4, uintssRe7Ju, {from: accounts[4]});
//		const uintIxkARzn = await FinalFnatpc8.allowance.call(addressKBfyhAe, addressovDYZVo, {from: accounts[0]});
//		const boollVRhIAJ = await FinalFnatpc8.transferownership.call(addressOV5RQt, {from: accounts[4]});

		assert.equal(stringzA0z3Xv, "UoMkiUP")
		await expect(FinalFnatpc8.transfer.call(addressw0mftfP, uintVUsUq8r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbDftT3B = "G5B3Cq2SJ6yijax0lScEWl31pWC3Yx74"
		const stringAc75dAA = "Ax3GEzU5sf8T6PrHvibWYFP53oEaPH1Yva3RY50QDo2Y2OCVmJ1K"
		const uintsjOBrrA = BigInt("16")
		const FinaliWPwZdh = await Final.new(stringbDftT3B, stringAc75dAA, uintsjOBrrA, {from: accounts[1]});
		const uintbpwVoRB = BigInt("808")
		const addressU5smhE = accounts[4]
		const uintnJeySnv = BigInt("638")
		const addressJMkftk4 = accounts[4]
		const addressmTLx91y = accounts[2]
		const uintzg6YWU6 = BigInt("1261")
		const addressmmcGn5 = "0x0000000000000000000000000000000000000001"
//		const booly5ytbVg = await FinaliWPwZdh.approveAndCall.call(addressU5smhE, uintbpwVoRB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolry7IyOh = await FinaliWPwZdh.transferFrom.call(addressmTLx91y, addressJMkftk4, uintnJeySnv, {from: accounts[2]});
//		const boolpiMLxmK = await FinaliWPwZdh.approve.call(addressmmcGn5, uintzg6YWU6, {from: accounts[4]});

		await expect(FinaliWPwZdh.approveAndCall.call(addressU5smhE, uintbpwVoRB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringi5dzAZA = "nBTGcvz8Il4cgXY0kPwIctijE8IO3fWcDAzivV1wz2bo9"
		const stringjUsGqcO = "nqwUbl4J1FavSCk1MXdrOhlZ2QHqJcUoPJ0mbhaAO71r"
		const uintu0j2gvh = BigInt("2044")
		const FinalUe55QSm = await Final.new(stringi5dzAZA, stringjUsGqcO, uintu0j2gvh, {from: accounts[3]});
		const uintLyCiCq = BigInt("1284")
		const addressyxMdHEd = accounts[0]
		const addresss4SazHy = accounts[3]
		const addressaURSDlX = accounts[3]
		const addressB0kbYuq = accounts[2]
		const addressUk0hZAP = accounts[2]
//		const boolF8Wt2v3 = await FinalUe55QSm.transferFrom.call(addresss4SazHy, addressyxMdHEd, uintLyCiCq, {from: accounts[5]});
//		const uintkpnkRs8 = await FinalUe55QSm.allowance.call(addressB0kbYuq, addressaURSDlX, {from: accounts[2]});
//		const uintFBnL5Hi = await FinalUe55QSm.balanceOf.call(addressUk0hZAP, {from: accounts[2]});

		await expect(FinalUe55QSm.transferFrom.call(addresss4SazHy, addressyxMdHEd, uintLyCiCq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringeEjA5Cx = "QjjaAKH5zFMKrQMtrhNNhMek31MAOWhZADxwBcbpcEOO7AifvxLrQ63"
		const stringGDSczAZ = "79AFHPOpZPohtQWgGH6VXeuzUpBgC5ZMOzpnu5WWhuCv4cnv2rClAjrXHhtZZePfLmtRkzUqc7O4xgjpxQH5uL1Ol"
		const uintM1RjJUO = BigInt("579")
		const FinalNp5QAI = await Final.new(stringeEjA5Cx, stringGDSczAZ, uintM1RjJUO, {from: accounts[4]});
		const uintbWLFQOS = BigInt("402")
		const addressheMhYcE = accounts[4]
		const addresswduu6bj = accounts[3]
		const uintbp351VM = BigInt("1906")
		const addressxknACZ = accounts[3]
		const uintuFY7gr6 = BigInt("605")
		const addressAfPMMqU = accounts[2]
		const addressAV2mtOO = accounts[1]
		const boolXKlr542 = await FinalNp5QAI.approve.call(addressheMhYcE, uintbWLFQOS, {from: accounts[0]});
		const uintwilMvpb = await FinalNp5QAI.balanceOf.call(addresswduu6bj, {from: accounts[2]});
		const uint8XqhK5eE = await FinalNp5QAI.decimals.call({from: accounts[0]});
//		const boolA6LFw2I = await FinalNp5QAI.transfer.call(addressxknACZ, uintbp351VM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEeBi9Uj = await FinalNp5QAI.transferFrom.call(addressAV2mtOO, addressAfPMMqU, uintuFY7gr6, {from: accounts[4]});

		assert.equal(boolXKlr542, true)
		assert.equal(uint8XqhK5eE, BigInt("18"))
		assert.equal(uintwilMvpb, BigInt("0"))
		await expect(FinalNp5QAI.transfer.call(addressxknACZ, uintbp351VM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQdDNwOA = "wzorl"
		const stringiTotR3 = "6Gv9x8lheYNfaguBdhzrXeQnHqljz8d6l7zM4lhtDDkNHO9GJrFxln1Ik9yf8Xfork3v5f"
		const uintH51l3gW = BigInt("231")
		const FinalUbmkZs = await Final.new(stringQdDNwOA, stringiTotR3, uintH51l3gW, {from: accounts[0]});
		const uintHjOF459 = BigInt("111")
		const addressgERRwGv = accounts[1]
		const uinti0py7yp = BigInt("1995")
		const addressVzgBht7 = accounts[2]
		const uintmDUuM30 = BigInt("1926")
		const addressGMzqwZ = accounts[1]
//		const boolOmwjbG = await FinalUbmkZs.increaseAllowance.call(addressgERRwGv, uintHjOF459, {from: accounts[4]});
//		const boolrO5YzbV = await FinalUbmkZs.transfer.call(addressVzgBht7, uinti0py7yp, {from: accounts[0]});
//		const uint8EdAGRX = await FinalUbmkZs.decimals.call({from: accounts[1]});
//		const boolr68eNF3 = await FinalUbmkZs.transfer.call(addressGMzqwZ, uintmDUuM30, {from: accounts[3]});

		await expect(FinalUbmkZs.increaseAllowance.call(addressgERRwGv, uintHjOF459, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringY1ZM527 = "OXENytklEW6dQz14EtO5pvRMydoE8t3dOHcdrFkLy6oU3Oaydjj94k4DQooy9hL9Nj0lzBqNOGSHXTgFw1XzH88n"
		const stringsEcIatw = "pOdQWGOlajyMo4tOzxVa24B7IdNPwmoqBO5GK43nMjOFMrj3kNZuQt45rGAxRH9FqI"
		const uintE2cEOwO = BigInt("1486")
		const FinalEBI4EA = await Final.new(stringY1ZM527, stringsEcIatw, uintE2cEOwO, {from: accounts[4]});
		const addressl78wIOW = accounts[4]
		const addressp43xx25 = accounts[1]
		const addressVUbpLh5 = accounts[4]
		const uintRgpb1zD = BigInt("309")
		const addresszUu0ZXS = accounts[5]
		const addressJhssNgB = accounts[0]
		const uintn2LTaZA = await FinalEBI4EA.allowance.call(addressp43xx25, addressl78wIOW, {from: accounts[4]});
		const stringV1hRfD = await FinalEBI4EA.symbol.call({from: accounts[4]});
//		const booloSGfqlD = await FinalEBI4EA.transferownership.call(addressVUbpLh5, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmwmM7Y0 = await FinalEBI4EA.transferFrom.call(addressJhssNgB, addresszUu0ZXS, uintRgpb1zD, {from: accounts[2]});

		assert.equal(stringV1hRfD, "pOdQWGOlajyMo4tOzxVa24B7IdNPwmoqBO5GK43nMjOFMrj3kNZuQt45rGAxRH9FqI")
		assert.equal(uintn2LTaZA, BigInt("0"))
		await expect(FinalEBI4EA.transferownership.call(addressVUbpLh5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringZo2dGHc = "ZWQk5tNrwhFjx6Gb9kovSDfbAmJRsJaMWxeUb4bzqRuy4cHxwFUZ96n3ho40dXSDDZzz7"
		const stringvWrKaYf = "1HpcFBE9nZLv9aTsqXEyYFRNMQvPq4tmS"
		const uintIOZf7U6 = BigInt("52")
		const FinalkkpAc4 = await Final.new(stringZo2dGHc, stringvWrKaYf, uintIOZf7U6, {from: "0x0000000000000000000000000000000000000001"});
		const uintPSl3qdU = BigInt("1660")
		const address8p9Ecl = accounts[1]
		const addressLAC7IMt = "0x0000000000000000000000000000000000000001"
		const addressNYMWad = accounts[3]
		const uintx3TQZ4R = BigInt("1688")
		const addressKPuEDbe = accounts[0]
		const boolpsnX1IA = await FinalkkpAc4.approve.call(address8p9Ecl, uintPSl3qdU, {from: accounts[1]});
		const stringtIgg5DY = await FinalkkpAc4.symbol.call({from: accounts[2]});
		const uintA7tWCdw = await FinalkkpAc4.allowance.call(addressNYMWad, addressLAC7IMt, {from: accounts[4]});
		const booliyQmTMo = await FinalkkpAc4.increaseAllowance.call(addressKPuEDbe, uintx3TQZ4R, {from: accounts[2]});
		const stringRhoMbCZ = await FinalkkpAc4.symbol.call({from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringBxVWz9w = "ICMj6OUipsy"
		const stringeUaZ8g3 = "UoMkiUP"
		const uintM2Dsgfe = BigInt("79")
		const FinalFnatpc8 = await Final.new(stringBxVWz9w, stringeUaZ8g3, uintM2Dsgfe, {from: accounts[2]});
		const uintdtw3r2D = BigInt("1520")
		const addressaJuul62 = accounts[2]
		const addressVuw130 = accounts[2]
		const addresswhFjQSq = accounts[5]
		const addressjNF6oHt = accounts[3]
		const uintE50Oisq = BigInt("694")
		const addressYZEeCRo = accounts[4]
		const addressaialCVk = accounts[4]
		const boolt3LXDc2 = await FinalFnatpc8.approveAndCall.call(addressaJuul62, uintdtw3r2D, {from: accounts[2]});
//		const boollVRhIAJ = await FinalFnatpc8.transferownership.call(addressVuw130, {from: accounts[4]});
//		const uintQcCqXhe = await FinalFnatpc8.allowance.call(addressjNF6oHt, addresswhFjQSq, {from: accounts[2]});
//		const boolDIor0Mi = await FinalFnatpc8.transferFrom.call(addressaialCVk, addressYZEeCRo, uintE50Oisq, {from: accounts[0]});

		assert.equal(boolt3LXDc2, true)
		await expect(FinalFnatpc8.transferownership.call(addressVuw130, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringKTaeh5 = "SfA3g98AaKh8WjI"
		const stringBeNvx9b = "Y8jD7l7rZH6CMBqJTGQrqMV3j9UP13z2euJhzebgNrUQOvizHpGb4F6ic6ppcU4Eu"
		const uinty3KJpqn = BigInt("942")
		const FinalGugzBL7 = await Final.new(stringKTaeh5, stringBeNvx9b, uinty3KJpqn, {from: accounts[2]});
		const uintfMoUpj = BigInt("2037")
		const addresso30bZCZ = "0x0000000000000000000000000000000000000001"
		const uintKaQll5X = BigInt("884")
		const addressTsb7nh6 = accounts[2]
		const uintTrHcS0e = BigInt("0")
		const addressVIDsnxL = accounts[1]
		const uintgUGlwmW = BigInt("1323")
		const addressFBXksA1 = "0x0000000000000000000000000000000000000001"
		const boolmrvA7PL = await FinalGugzBL7.transfer.call(addresso30bZCZ, uintfMoUpj, {from: accounts[2]});
		const boolMIjo2fG = await FinalGugzBL7.approve.call(addressTsb7nh6, uintKaQll5X, {from: accounts[5]});
		const booluB2ipu8 = await FinalGugzBL7.transfer.call(addressVIDsnxL, uintTrHcS0e, {from: accounts[1]});
//		const boolorbPvjG = await FinalGugzBL7.decreaseAllowance.call(addressFBXksA1, uintgUGlwmW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMIjo2fG, true)
		assert.equal(boolmrvA7PL, true)
		assert.equal(booluB2ipu8, true)
		await expect(FinalGugzBL7.decreaseAllowance.call(addressFBXksA1, uintgUGlwmW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})