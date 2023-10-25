const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintLkFAz2c = BigInt("1860")
		const stringrBEsijt = "FSlLWMTpCR0QiIIj2Ox9PiSYxrz8bBzh8HFQLg1Taqp78YcM3fukf8NEb7bqGW5PfajOAxnMoxlGHOVDJ5Yt"
		const stringpVk4ymT = "fEbukYcunfKrJ6lRCgcVUff37h9ULihLJ3hLACTk9xAORfeNsNJIN4CAg"
		const GFCOwag3Ga = await GFC.new(uintLkFAz2c, stringrBEsijt, stringpVk4ymT, {from: accounts[2]});
		const uintFjG9912 = BigInt("188")
		const addressNGTqDWk = "0x0000000000000000000000000000000000000001"
		const byteCWNAoy0 = "0x0b0d01020f1b111f130e10021d0213040815040403150b0c13120e"
		const uintMzzIwWk = BigInt("1908")
		const addressDPxUwDp = "0x0000000000000000000000000000000000000001"
		const uinthqap7S = BigInt("47")
		const addressKfnMfuF = "0x0000000000000000000000000000000000000001"
		const uintURWdwV = BigInt("486")
		const addressLANnIWV = accounts[0]
		const addresshWAjT5q = accounts[3]
		const uintZruekOX = BigInt("1145")
		const addressIl1A0g = accounts[0]
		const byteytYWvXv = "0x0d0c0f180608120d13151e1e0d0a0c15071d14"
		const uintcImkVg7 = BigInt("1029")
		const addressl2Jrun8 = accounts[4]
		const boolHg3bzw9 = await GFCOwag3Ga.burnFrom.call(addressNGTqDWk, uintFjG9912, {from: accounts[1]});
		const boolghuwDaX = await GFCOwag3Ga.approveAndCall.call(addressDPxUwDp, uintMzzIwWk, byteCWNAoy0, {from: accounts[4]});
		const booltg356N = await GFCOwag3Ga.transfer.call(addressKfnMfuF, uinthqap7S, {from: accounts[2]});
		const boolpAER9bx = await GFCOwag3Ga.transferFrom.call(addresshWAjT5q, addressLANnIWV, uintURWdwV, {from: "0x0000000000000000000000000000000000000001"});
		const boolD8ipQkc = await GFCOwag3Ga.approve.call(addressIl1A0g, uintZruekOX, {from: accounts[0]});
		const boolOL8UXsf = await GFCOwag3Ga.approveAndCall.call(addressl2Jrun8, uintcImkVg7, byteytYWvXv, {from: accounts[0]});

		await expect(GFCOwag3Ga.burnFrom.call(addressNGTqDWk, uintFjG9912, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintH1UVsqv = BigInt("683")
		const stringElAlIaw = "UGK0yXTNlrBEDhZMJJNODjIcQBKy7BedF11Jf1y2rzGpwm1orVKrQaJasz5HRVcvjvb"
		const stringjWLn4Cz = "0UjDZv5IjA3WxlVLhUh7ehG3694Emc8XqfA2cEenLgFSR4NE1U3DkO8ofXweI75knw3tmsvzH9ANr5LENTLoZUdyxTQkGL"
		const GFCKvqLAj = await GFC.new(uintH1UVsqv, stringElAlIaw, stringjWLn4Cz, {from: accounts[3]});
		const uintAoImxW5 = BigInt("331")
		const addressr9ovRjz = accounts[3]
		const uintjVNEDRl = BigInt("66")
		const addressQNNLTn0 = accounts[1]
		const uintrv48Cd1 = BigInt("1275")
		const addressNlYh9Bv = accounts[1]
		const uintlLgHYoU = BigInt("1363")
		const addressGP6Fd03 = accounts[3]
		const boollE8cusc = await GFCKvqLAj.transfer.call(addressr9ovRjz, uintAoImxW5, {from: accounts[2]});
		const boolOVAMSNB = await GFCKvqLAj.burnFrom.call(addressQNNLTn0, uintjVNEDRl, {from: accounts[2]});
		const boolz5Yz9Y9 = await GFCKvqLAj.burnFrom.call(addressNlYh9Bv, uintrv48Cd1, {from: accounts[5]});
		const boolOJjDuhR = await GFCKvqLAj.burnFrom.call(addressGP6Fd03, uintlLgHYoU, {from: accounts[4]});

		await expect(GFCKvqLAj.transfer.call(addressr9ovRjz, uintAoImxW5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uint03N4Ln = BigInt("5")
		const stringrLBVGL = "wrvlPDTJUmuk5DNellEXzgGjuvKIaOX545q3lxDDf6uMX8ygpfncQ7"
		const stringCE1spYN = "ZCb5TA2MC9vlREQZ2bq1Aj2DrzcycgSNGFhkmh43i7Y8pM5Jgrjk"
		const GFCjY3FTOV = await GFC.new(uint03N4Ln, stringrLBVGL, stringCE1spYN, {from: accounts[2]});
		const uintAQf2RYV = BigInt("1400")
		const uintwboHady = BigInt("1871")
		const addressMmwHSe = accounts[5]
		const addressaYExh8 = accounts[5]
		const uintSXxpFiK = BigInt("1032")
		const addressWtAf0Pt = accounts[1]
		const uintjAByFsD = BigInt("1503")
		const boolaoWA0yT = await GFCjY3FTOV.burn.call(uintAQf2RYV, {from: accounts[1]});
		const boolECCJSgF = await GFCjY3FTOV.transferFrom.call(addressaYExh8, addressMmwHSe, uintwboHady, {from: "0x0000000000000000000000000000000000000001"});
		const boolHaFRnIM = await GFCjY3FTOV.burnFrom.call(addressWtAf0Pt, uintSXxpFiK, {from: accounts[5]});
		const boolBMvhvKj = await GFCjY3FTOV.burn.call(uintjAByFsD, {from: accounts[4]});

		await expect(GFCjY3FTOV.burn.call(uintAQf2RYV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintsRdm5ry = BigInt("1890")
		const stringcCrUb6i = "DDUKc3ByTGTqNWaOuVwA9yEySruzVYGYbt6rT74tJcTKz9FcwlI7mmvQcDutavGf93i5LwE88UoP3JSm"
		const stringvsQnCVH = "fWM0k2DYn7BIVcGQ84QP8eTy5Iuu4bfI"
		const GFCe1wgX8Y = await GFC.new(uintsRdm5ry, stringcCrUb6i, stringvsQnCVH, {from: accounts[5]});
		const uinttlJhDzh = BigInt("1395")
		const addressG7VIRvi = accounts[3]
		const uintDzIQDrx = BigInt("943")
		const addressTYFkvON = accounts[1]
		const uintDMYPWcT = BigInt("197")
		const addresseN9PftZ = accounts[2]
		const uintvQZ0CIl = BigInt("151")
		const addressDBRX17h = accounts[3]
		const addressXmx7Edg = accounts[0]
		const uintjqrLNEE = BigInt("681")
		const addressaZhHe1 = accounts[1]
		const uintHb9Q21F = BigInt("440")
		const addressv0F9Bw = accounts[2]
		const addressqAiCksL = accounts[3]
		const boola5X8OEQ = await GFCe1wgX8Y.approve.call(addressG7VIRvi, uinttlJhDzh, {from: accounts[3]});
		const boolIIPklh2 = await GFCe1wgX8Y.burnFrom.call(addressTYFkvON, uintDzIQDrx, {from: accounts[4]});
		const boollPHrU3m = await GFCe1wgX8Y.approve.call(addresseN9PftZ, uintDMYPWcT, {from: accounts[4]});
		const boolE6rTIiA = await GFCe1wgX8Y.transferFrom.call(addressXmx7Edg, addressDBRX17h, uintvQZ0CIl, {from: accounts[4]});
		const booltB1dhVi = await GFCe1wgX8Y.transfer.call(addressaZhHe1, uintjqrLNEE, {from: accounts[2]});
		const boolXqJrt0 = await GFCe1wgX8Y.transferFrom.call(addressqAiCksL, addressv0F9Bw, uintHb9Q21F, {from: accounts[3]});

		assert.equal(boola5X8OEQ, true)
		await expect(GFCe1wgX8Y.burnFrom.call(addressTYFkvON, uintDzIQDrx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uinto1liX8I = BigInt("1946")
		const stringZgWslGm = "WFtH4HpjgOnFLHhOta3Nk7H82ILLlcNTLUqxQB6"
		const stringi0CRife = "SGui0D3EOSufBf4su7ugmDpgv2cIlkrtxJ"
		const GFCARsGHTc = await GFC.new(uinto1liX8I, stringZgWslGm, stringi0CRife, {from: accounts[3]});
		const uintx4zRjY = BigInt("985")
		const addressH1xT6pU = accounts[2]
		const addressWzaiqY1 = accounts[3]
		const bytefmeJicP = "0x121916081c04070d020d150403"
		const uintsoik8L5 = BigInt("785")
		const addressZUDwEaQ = accounts[5]
		const uintIwBIybZ = BigInt("1722")
		const addressXZ4IT3f = accounts[0]
		const boolO57R9am = await GFCARsGHTc.transferFrom.call(addressWzaiqY1, addressH1xT6pU, uintx4zRjY, {from: accounts[3]});
		const boolNB7H5kO = await GFCARsGHTc.approveAndCall.call(addressZUDwEaQ, uintsoik8L5, bytefmeJicP, {from: accounts[3]});
		const boolqC6BodY = await GFCARsGHTc.burnFrom.call(addressXZ4IT3f, uintIwBIybZ, {from: accounts[0]});

		await expect(GFCARsGHTc.transferFrom.call(addressWzaiqY1, addressH1xT6pU, uintx4zRjY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintOD0YQiJ = BigInt("1209")
		const stringyIfFIaU = "VVDd1SrWRi3O"
		const stringvxA3bxo = "rKjuCnevqlveGW74M4lJ4MMc8YtHXVFNs12xqIO55PKBaENoq8bj6uj"
		const GFCTihSt0d = await GFC.new(uintOD0YQiJ, stringyIfFIaU, stringvxA3bxo, {from: accounts[3]});
		const byteF6jjpN = "0x1b1f051500130206061e1e130e1e161011"
		const uintCAeThHT = BigInt("1687")
		const addressFoa9VZ8 = accounts[0]
		const uintGHPBBRC = BigInt("421")
		const uinty3nnr3 = BigInt("280")
		const uintEOcoynk = BigInt("1572")
		const addressQgpPLxb = accounts[0]
		const addressonoAEg = accounts[0]
		const uintVP0RjR0 = BigInt("595")
		const addressKQVOZZ0 = accounts[1]
		const boolahPtt9t = await GFCTihSt0d.approveAndCall.call(addressFoa9VZ8, uintCAeThHT, byteF6jjpN, {from: accounts[1]});
		const booleDtjRgx = await GFCTihSt0d.burn.call(uintGHPBBRC, {from: accounts[4]});
		const boolkJCM1T3 = await GFCTihSt0d.burn.call(uinty3nnr3, {from: accounts[1]});
		const boolichrdPE = await GFCTihSt0d.transferFrom.call(addressonoAEg, addressQgpPLxb, uintEOcoynk, {from: accounts[1]});
		const boolpKSCx4C = await GFCTihSt0d.approve.call(addressKQVOZZ0, uintVP0RjR0, {from: accounts[3]});

		await expect(GFCTihSt0d.approveAndCall.call(addressFoa9VZ8, uintCAeThHT, byteF6jjpN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintI3DkkNS = BigInt("1202")
		const stringqb8Uqx = "CGBfYz8limhcXXByrveKHQjsV32AA5jUgHRQ8xfIibnh3qOyXDfXpJ7U2KxRhhea4hYsVca8kOI4m1sNOGcjG5pPSpfS1QycE"
		const stringd2D342P = "vE6W1C1t2pVNSasbz75aVlPfObwM15Re5HDe8aCxzxX8G7YWSA43Rwhk6h0LuGPrPx"
		const GFCKgZJARf = await GFC.new(uintI3DkkNS, stringqb8Uqx, stringd2D342P, {from: accounts[4]});
		const uintTkSpiOf = BigInt("133")
		const addresssC501us = accounts[3]
		const uintPitKlF = BigInt("677")
		const addressZbrXm2o = accounts[3]
		const uintc1QXwS = BigInt("209")
		const addressJUGuoBj = "0x0000000000000000000000000000000000000001"
		const uintyBEPt1Q = BigInt("200")
		const addressuz1vOVF = "0x0000000000000000000000000000000000000001"
		const uintOuyNo4w = BigInt("1847")
		const addresslsNgP3p = accounts[1]
		const addressj28WXWK = accounts[2]
		const uintV3xV5sR = BigInt("1699")
		const uintbcOBgD = BigInt("1344")
		const addresseLAn2Mc = accounts[0]
		const boolCsI6eBb = await GFCKgZJARf.approve.call(addresssC501us, uintTkSpiOf, {from: accounts[3]});
		const boolTzIihsh = await GFCKgZJARf.transfer.call(addressZbrXm2o, uintPitKlF, {from: accounts[4]});
		const boolkUxjYrh = await GFCKgZJARf.transfer.call(addressJUGuoBj, uintc1QXwS, {from: accounts[5]});
		const boolSLD0a0J = await GFCKgZJARf.transfer.call(addressuz1vOVF, uintyBEPt1Q, {from: accounts[1]});
		const boolaCxQ1Af = await GFCKgZJARf.transferFrom.call(addressj28WXWK, addresslsNgP3p, uintOuyNo4w, {from: accounts[2]});
		const boolf7dlfjU = await GFCKgZJARf.burn.call(uintV3xV5sR, {from: accounts[5]});
		const boolpIwoVUn = await GFCKgZJARf.approve.call(addresseLAn2Mc, uintbcOBgD, {from: accounts[0]});

		assert.equal(boolCsI6eBb, true)
		assert.equal(boolTzIihsh, true)
		await expect(GFCKgZJARf.transfer.call(addressJUGuoBj, uintc1QXwS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintf07jWGo = BigInt("998")
		const stringAEVPNS6 = "dkxiOmteY1AUft7Hm"
		const stringzx5eWoN = "8yPdmgjMYlvlUYGPI5T4cWD0zP6hKxZp8C9svl3vdan66xP36AKXqGsmf6VXGeVm9b3uKP391tYP7z"
		const GFCgt8IYnL = await GFC.new(uintf07jWGo, stringAEVPNS6, stringzx5eWoN, {from: accounts[3]});
		const uintyBHScc = BigInt("718")
		const uintVEmWye = BigInt("158")
		const addressG1W1i0e = accounts[5]
		const boolTu51E5Q = await GFCgt8IYnL.burn.call(uintyBHScc, {from: accounts[3]});
		const boolca0qhRt = await GFCgt8IYnL.approve.call(addressG1W1i0e, uintVEmWye, {from: accounts[3]});

		assert.equal(boolTu51E5Q, true)
		assert.equal(boolca0qhRt, true)
	});

	it('test for GFC', async () => {
		const uintzGUDrte = BigInt("998")
		const stringAEVPNS6 = "dkxiOmteY1AUft7Hm"
		const stringzx5eWoN = "8yPdmgjMYlvlUYGPI5T4cWD0zP6hKxZp8C9svl3vdan66xP36AKXqGsmf6VXGeVm9b3uKP391tYP7z"
		const GFCgt8IYnL = await GFC.new(uintzGUDrte, stringAEVPNS6, stringzx5eWoN, {from: accounts[3]});
		const uintyYsCnku = BigInt("1804")
		const addressziO6jU = accounts[3]
		const uintcmClc4K = BigInt("1381")
		const address50587m = accounts[5]
		const boolVGgFFMC = await GFCgt8IYnL.burnFrom.call(addressziO6jU, uintyYsCnku, {from: accounts[0]});
		const boolca0qhRt = await GFCgt8IYnL.approve.call(address50587m, uintcmClc4K, {from: accounts[3]});

		await expect(GFCgt8IYnL.burnFrom.call(addressziO6jU, uintyYsCnku, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintiqUX0l = BigInt("835")
		const stringwwTAjMX = "FT4g8JWzrUPsQIxyeFFK"
		const stringdKhqf3j = "Ma9lGnzSCYSFHCKdMcNgRFkhC5jVtBnWVCCP418LyqyL7JsJvmXAy8vb5Y"
		const GFCjqi2buD = await GFC.new(uintiqUX0l, stringwwTAjMX, stringdKhqf3j, {from: "0x0000000000000000000000000000000000000001"});
		const uinteVoXW2g = BigInt("786")
		const uintAwV3d0F = BigInt("521")
		const addresswCNxTLx = accounts[3]
		const addresscSAuOTG = "0x0000000000000000000000000000000000000001"
		const uintnuOBzSR = BigInt("1535")
		const boolVnWXj3 = await GFCjqi2buD.burn.call(uinteVoXW2g, {from: accounts[1]});
		const boolTmWNSIf = await GFCjqi2buD.transferFrom.call(addresscSAuOTG, addresswCNxTLx, uintAwV3d0F, {from: accounts[4]});
		const boolDa7g2a2 = await GFCjqi2buD.burn.call(uintnuOBzSR, {from: accounts[3]});
	});
})