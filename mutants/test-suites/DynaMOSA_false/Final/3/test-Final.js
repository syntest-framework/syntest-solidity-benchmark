const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringNBxNOZQ = "2aHphPmR44C28ZpTMZzI1DoKDLgSq4Gkhr8Xjr25LgbjsPuQFrspkmcp9F6gOH5xfZcmdHOOgALAG376TNX4LKLp5kCa"
		const stringxOPfF8f = "9r7NEssbFu9y4ZDH8RvhF9SPsvhmIwOM2PNwn5rVERHJICVodawmQ2F7AvSgFBYccQ3oBbnrlSDsauLPgB0T0oKf4e4"
		const uintYEnNGda = BigInt("74")
		const FinalvxzJWAZ = await Final.new(stringNBxNOZQ, stringxOPfF8f, uintYEnNGda, {from: accounts[3]});
		const addressPPBdjC = accounts[5]
		const addressQ6ELi7 = accounts[3]
		const uintbFNtKh2 = await FinalvxzJWAZ.allowance.call(addressQ6ELi7, addressPPBdjC, {from: accounts[1]});
		const stringvk1LHOK = await FinalvxzJWAZ.symbol.call({from: accounts[2]});

		assert.equal(stringvk1LHOK, "9r7NEssbFu9y4ZDH8RvhF9SPsvhmIwOM2PNwn5rVERHJICVodawmQ2F7AvSgFBYccQ3oBbnrlSDsauLPgB0T0oKf4e4")
		assert.equal(uintbFNtKh2, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringtJGjGGT = "4a4JStsO58dHknmhJvkm3xY2gKRcwLczDm5xCJDi3dWPZ61CEXno"
		const stringQhyoG29 = "j"
		const uintEV1fiUb = BigInt("82")
		const Finalc21fnaG = await Final.new(stringtJGjGGT, stringQhyoG29, uintEV1fiUb, {from: accounts[4]});
		const addressDon9pd = accounts[3]
		const uintVempeUY = BigInt("1763")
		const addressmUHOyER = "0x0000000000000000000000000000000000000001"
		const uintQ6nNgxB = BigInt("2009")
		const addressSvWeFw1 = accounts[3]
		const uintpGaXmHo = BigInt("1220")
		const addressojvtxtb = accounts[1]
		const uintZcAHrKE = await Finalc21fnaG.balanceOf.call(addressDon9pd, {from: accounts[5]});
//		const boolIqxRWoz = await Finalc21fnaG.decreaseAllowance.call(addressmUHOyER, uintVempeUY, {from: accounts[3]});
//		const boolWjzmW17 = await Finalc21fnaG.transfer.call(addressSvWeFw1, uintQ6nNgxB, {from: accounts[2]});
//		const boolRDYTqTQ = await Finalc21fnaG.transfer.call(addressojvtxtb, uintpGaXmHo, {from: accounts[2]});
//		const uintQgbcqra = await Finalc21fnaG.totalSupply.call({from: accounts[2]});

		assert.equal(uintZcAHrKE, BigInt("0"))
		await expect(Finalc21fnaG.decreaseAllowance.call(addressmUHOyER, uintVempeUY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringvqGE2aX = "FuOgb5WJcvUfiMooWpVg65xfwgxB2yTBO7Mt0hlp0YOEwoI5fT0JPq9QWIvE81MnqcLPtLaLMD3N31VKbgxeVoXNQ"
		const stringPf4mGGy = "3RuZ9JzSOwso"
		const uintF9z6Poi = BigInt("234")
		const Finalw3kH6wT = await Final.new(stringvqGE2aX, stringPf4mGGy, uintF9z6Poi, {from: accounts[3]});
		const uintZXvLT8 = BigInt("1544")
		const addressVRa6esM = accounts[3]
		const addressbcGYaFj = accounts[4]
		const addressquM3d77 = accounts[2]
		const addressclhsV4r = accounts[2]
		const addressBWMm7px = accounts[3]
		const stringQO1BYqZ = await Finalw3kH6wT.symbol.call({from: accounts[3]});
//		const boolesnuWJY = await Finalw3kH6wT.transferFrom.call(addressbcGYaFj, addressVRa6esM, uintZXvLT8, {from: "0x0000000000000000000000000000000000000001"});
//		const uintDSLtvkx = await Finalw3kH6wT.balanceOf.call(addressquM3d77, {from: accounts[2]});
//		const uintLy9OGjW = await Finalw3kH6wT.allowance.call(addressBWMm7px, addressclhsV4r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringQO1BYqZ, "3RuZ9JzSOwso")
		await expect(Finalw3kH6wT.transferFrom.call(addressbcGYaFj, addressVRa6esM, uintZXvLT8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringUJ963p = "ArfURDewN8BKemAgCRjmINIbtDieyGgFrXQSJplIMkmbp2UCkuuQP8B8OtAjL60v"
		const stringF0mny50 = "GNP1UcbuodEJqgfXzFdDAdueRiBEJaaleJSWLl9x6oKLjXLTcXhVi6bAoB"
		const uintt0nlHJP = BigInt("77")
		const FinalJdaLE3 = await Final.new(stringUJ963p, stringF0mny50, uintt0nlHJP, {from: accounts[5]});
		const uintumMxsGT = BigInt("865")
		const addressnalxie = accounts[0]
		const uintqo48o04 = BigInt("1398")
		const addressXj62Ubf = accounts[1]
		const stringxhttLqD = await FinalJdaLE3.name.call({from: accounts[0]});
//		const boolwHcnuwG = await FinalJdaLE3.transfer.call(addressnalxie, uintumMxsGT, {from: accounts[0]});
//		const boolmCRaIZl = await FinalJdaLE3.approve.call(addressXj62Ubf, uintqo48o04, {from: accounts[2]});

		assert.equal(stringxhttLqD, "ArfURDewN8BKemAgCRjmINIbtDieyGgFrXQSJplIMkmbp2UCkuuQP8B8OtAjL60v")
		await expect(FinalJdaLE3.transfer.call(addressnalxie, uintumMxsGT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbqlwEFM = "62kFxoHnYwkxSjpDnpCFt4NiJK2EOmaO9RPQyfs57qYrWtzK7VT0p"
		const stringjv3HB7q = "Lr1nuQT2stiJH3ANVz4iRAJsCb6Ynx04OOh1O"
		const uintcElh0Q = BigInt("671")
		const FinalNDv3Z0f = await Final.new(stringbqlwEFM, stringjv3HB7q, uintcElh0Q, {from: accounts[3]});
		const uintzAVTWFH = BigInt("853")
		const addressurtz3N2 = accounts[1]
		const uintJscVze7 = BigInt("671")
		const addressulKMC0I = accounts[3]
		const addressVM1MOx1 = accounts[1]
		const uintu2z6qiB = BigInt("346")
		const addressh5Xuk3B = accounts[0]
		const addressw6KrQPS = accounts[2]
		const stringooJpBNl = await FinalNDv3Z0f.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolCX0f0Hj = await FinalNDv3Z0f.approveAndCall.call(addressurtz3N2, uintzAVTWFH, {from: accounts[1]});
//		const boolEBzuuix = await FinalNDv3Z0f.transferFrom.call(addressVM1MOx1, addressulKMC0I, uintJscVze7, {from: accounts[0]});
//		const boolZurnX1U = await FinalNDv3Z0f.increaseAllowance.call(addressh5Xuk3B, uintu2z6qiB, {from: accounts[0]});
//		const stringR0CKkMY = await FinalNDv3Z0f.name.call({from: accounts[1]});
//		const boolafwxEus = await FinalNDv3Z0f.transferownership.call(addressw6KrQPS, {from: accounts[4]});

		assert.equal(stringooJpBNl, "Lr1nuQT2stiJH3ANVz4iRAJsCb6Ynx04OOh1O")
		await expect(FinalNDv3Z0f.approveAndCall.call(addressurtz3N2, uintzAVTWFH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string6WQ76K = "7jlPSdGN"
		const stringsEbkmlg = "qPfNAWxAHGjbtf2kPJ9u6TKq12yoY0U4ICqcqa"
		const uintcZSeaRA = BigInt("1709")
		const FinalR6iR0CM = await Final.new(string6WQ76K, stringsEbkmlg, uintcZSeaRA, {from: accounts[1]});
		const uintfBcoTC = BigInt("1145")
		const addresskrobUwp = accounts[0]
		const uintP9lvXmp = BigInt("1127")
		const addressdjJgdTj = accounts[0]
		const addresszL6OZMT = accounts[2]
		const uintewG2c0o = BigInt("432")
		const addressS87NIzj = accounts[4]
		const addresseJVOLBE = "0x0000000000000000000000000000000000000001"
		const boolJEajUpk = await FinalR6iR0CM.approve.call(addresskrobUwp, uintfBcoTC, {from: accounts[3]});
//		const boolhjdBFE8 = await FinalR6iR0CM.transferFrom.call(addresszL6OZMT, addressdjJgdTj, uintP9lvXmp, {from: accounts[2]});
//		const boolDfxvHDR = await FinalR6iR0CM.approveAndCall.call(addressS87NIzj, uintewG2c0o, {from: accounts[5]});
//		const uinta8iBEnE = await FinalR6iR0CM.balanceOf.call(addresseJVOLBE, {from: accounts[3]});
//		const stringIhqCVPm = await FinalR6iR0CM.name.call({from: accounts[1]});
//		const stringn0mRaSD = await FinalR6iR0CM.name.call({from: accounts[2]});

		assert.equal(boolJEajUpk, true)
		await expect(FinalR6iR0CM.transferFrom.call(addresszL6OZMT, addressdjJgdTj, uintP9lvXmp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringYGaZRz = "yTt9xhLWyOucqofhpNKtznX2L1TX"
		const stringSz6nVJZ = "nwFCSvTFBzFePByen8X79g1z5HXFLPgkL94eJkx2Y5KdOhWGrtOGPvJFDcYcjzgF8TpvWPL"
		const uintJuvR9x7 = BigInt("781")
		const FinalRWZB6oC = await Final.new(stringYGaZRz, stringSz6nVJZ, uintJuvR9x7, {from: accounts[3]});
		const addressqU2Yrg = accounts[4]
		const addressj1IAi85 = accounts[2]
		const addresssmXUO6I = accounts[4]
		const addressENBH4H = accounts[5]
		const uintSKwm5Xq = BigInt("482")
		const addressoEg8yzD = accounts[1]
		const uintZCxqAdm = BigInt("1428")
		const address64Awan = accounts[3]
		const uintIYEGrhg = await FinalRWZB6oC.balanceOf.call(addressqU2Yrg, {from: accounts[0]});
		const uintTMBOIiL = await FinalRWZB6oC.allowance.call(addresssmXUO6I, addressj1IAi85, {from: accounts[4]});
//		const boolDEXghCj = await FinalRWZB6oC.transferownership.call(addressENBH4H, {from: accounts[0]});
//		const boolzKekx58 = await FinalRWZB6oC.transfer.call(addressoEg8yzD, uintSKwm5Xq, {from: accounts[2]});
//		const boolvtsyeav = await FinalRWZB6oC.approve.call(address64Awan, uintZCxqAdm, {from: accounts[4]});

		assert.equal(uintIYEGrhg, BigInt("0"))
		assert.equal(uintTMBOIiL, BigInt("0"))
		await expect(FinalRWZB6oC.transferownership.call(addressENBH4H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringkpxCHWk = "siU43Z9mNn0Jy8FpcNRvaUTSyRi9AuPwstIacLfIP9FqQWk9Jg2"
		const stringvTaqote = "aXr2BaiIjjMJgwkccMzRnFf"
		const uintSH5obmN = BigInt("254")
		const FinalkD2XUOF = await Final.new(stringkpxCHWk, stringvTaqote, uintSH5obmN, {from: accounts[4]});
		const uinthvx1Kgh = BigInt("370")
		const addressMIQEphO = accounts[4]
		const uintj4pIXkU = BigInt("1628")
		const addresshqHrK1W = accounts[2]
		const uint8VMFG51 = await FinalkD2XUOF.decimals.call({from: accounts[5]});
//		const boolwk5kjSR = await FinalkD2XUOF.transfer.call(addressMIQEphO, uinthvx1Kgh, {from: accounts[3]});
//		const uintErir7LJ = await FinalkD2XUOF.totalSupply.call({from: accounts[1]});
//		const boolpP5XKVd = await FinalkD2XUOF.approveAndCall.call(addresshqHrK1W, uintj4pIXkU, {from: accounts[3]});

		assert.equal(uint8VMFG51, BigInt("18"))
		await expect(FinalkD2XUOF.transfer.call(addressMIQEphO, uinthvx1Kgh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringlk1u4cw = "KviPTRLUTcCjJ0mv48rYlLZXMA"
		const stringYHRDfv = "r2nNY"
		const uintJuJkBr8 = BigInt("884")
		const Final26nG2k = await Final.new(stringlk1u4cw, stringYHRDfv, uintJuJkBr8, {from: "0x0000000000000000000000000000000000000001"});
		const addressHVvjKwS = accounts[4]
		const stringEK0ZTtm = await Final26nG2k.name.call({from: accounts[1]});
		const uintIYiO1Jh = await Final26nG2k.balanceOf.call(addressHVvjKwS, {from: accounts[0]});
	});

	it('test for Final', async () => {
		const stringUJ963p = "ArfURDewN8BKemAgCRjmINIbtDieyGgFrXQSJplIMkmbp2UCkuuQP8B8OtAjL60v"
		const stringF0mny50 = "GNP1UcbuodEJqgfXzFdDAdueRiBEJaaleJSWLl9x6oKLjXLTcXhVi6bAoB"
		const uintgWe4HM = BigInt("77")
		const FinalJdaLE3 = await Final.new(stringUJ963p, stringF0mny50, uintgWe4HM, {from: accounts[5]});
		const uint6EhaMP = BigInt("223")
		const addressVtqyD6 = accounts[3]
		const uintKF2sHF = BigInt("1816")
		const addressU2uljus = accounts[0]
		const addressPTfMpIn = accounts[0]
		const uintay589DV = BigInt("758")
		const address3KnjiJ = accounts[1]
		const uintffwbo8c = BigInt("90")
		const addressaX195z = accounts[1]
		const boolC50EOiM = await FinalJdaLE3.approveAndCall.call(addressVtqyD6, uint6EhaMP, {from: accounts[5]});
		const boolKgKMzdr = await FinalJdaLE3.approve.call(addressU2uljus, uintKF2sHF, {from: "0x0000000000000000000000000000000000000001"});
		const uintTmQX9ps = await FinalJdaLE3.balanceOf.call(addressPTfMpIn, {from: accounts[0]});
//		const boolmEUa0hp = await FinalJdaLE3.approveAndCall.call(address3KnjiJ, uintay589DV, {from: accounts[0]});
//		const boolwHcnuwG = await FinalJdaLE3.transfer.call(addressaX195z, uintffwbo8c, {from: accounts[0]});

		assert.equal(boolC50EOiM, true)
		assert.equal(boolKgKMzdr, true)
		assert.equal(uintTmQX9ps, BigInt("0"))
		await expect(FinalJdaLE3.approveAndCall.call(address3KnjiJ, uintay589DV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})