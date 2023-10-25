const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintSsrLmoP = BigInt("1513")
		const stringXpjVXUx = "13HGX8OHjcwhPkAcSbC1dgnKlnYQnGlBpDdB9FkQUtAaCcAzJDDpeXjN"
		const stringWTGDhmw = "Mhpf7bWJilrgryIJFtWTifpheEjtchWUsmEgn1SjzHUQmvzlWkpYzaKfwT89SsQWYKwNcv6so"
		const GFCDs7tJU = await GFC.new(uintSsrLmoP, stringXpjVXUx, stringWTGDhmw, {from: accounts[4]});
		const uintUtdkUED = BigInt("1308")
		const addresskOn3Tua = accounts[2]
		const uintQk4IGEr = BigInt("169")
		const addressgji3ITi = accounts[1]
		const uintCtEGKFc = BigInt("1947")
		const addressV80qCeT = accounts[4]
		const uintrIEYGTN = BigInt("2013")
		const boolJRcEjqR = await GFCDs7tJU.approve.call(addresskOn3Tua, uintUtdkUED, {from: accounts[1]});
		const boolpxyeVtV = await GFCDs7tJU.approve.call(addressgji3ITi, uintQk4IGEr, {from: accounts[1]});
//		const boolEQMdW4t = await GFCDs7tJU.burnFrom.call(addressV80qCeT, uintCtEGKFc, {from: accounts[3]});
//		const boolDsucUKm = await GFCDs7tJU.burn.call(uintrIEYGTN, {from: accounts[3]});

		assert.equal(boolJRcEjqR, true)
		assert.equal(boolpxyeVtV, true)
		await expect(GFCDs7tJU.burnFrom.call(addressV80qCeT, uintCtEGKFc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPmpQcrS = BigInt("578")
		const stringKzwKUCZ = "qep6"
		const stringCl5B1G = "OOEf7cbcEXeYp1MGBpUU5l4B6xQ3syc1Bxd196Gs9kcCyPLxt1MRSXdS0LXdeXqVaezcvPzxIeG7oGmPVeJh"
		const GFCy71wzH = await GFC.new(uintPmpQcrS, stringKzwKUCZ, stringCl5B1G, {from: "0x0000000000000000000000000000000000000001"});
		const bytec3yTk3 = "0x0d101c0f0f1a141e16181417171f0917100f031f0813091e171f1c1504"
		const uintimm0cN0 = BigInt("854")
		const addressqEK06pd = accounts[0]
		const uintUrWaPUj = BigInt("414")
		const addressgmget1O = accounts[2]
		const addressay3R6oS = "0x0000000000000000000000000000000000000001"
		const uintyvja69A = BigInt("1983")
		const addressicLwxOA = accounts[2]
		const addressl3ioje = accounts[2]
		const boolcGFhDX3 = await GFCy71wzH.approveAndCall.call(addressqEK06pd, uintimm0cN0, bytec3yTk3, {from: accounts[1]});
		const boolMa9Svv3 = await GFCy71wzH.transferFrom.call(addressay3R6oS, addressgmget1O, uintUrWaPUj, {from: accounts[2]});
		const boolZZ8QLrp = await GFCy71wzH.transferFrom.call(addressl3ioje, addressicLwxOA, uintyvja69A, {from: accounts[4]});
	});

	it('test for GFC', async () => {
		const uints8bV3Mh = BigInt("1851")
		const stringXwvgWg7 = "B94Eb7kjy"
		const string8STvI2 = "4TrFfWGSvbxdSYBQNe9JE6MAVZ7J2nRW9uqjvgKk2n9wyEhvGyOStfUX08Th8kH7jT7g8dz"
		const GFCbT0ldEb = await GFC.new(uints8bV3Mh, stringXwvgWg7, string8STvI2, {from: accounts[5]});
		const uintQGMHHWk = BigInt("1410")
		const uintPGv6clk = BigInt("1555")
		const uintGqY8toa = BigInt("504")
		const address4RAQiN = accounts[5]
//		const boolG8MTYw6 = await GFCbT0ldEb.burn.call(uintQGMHHWk, {from: accounts[2]});
//		const boolU68Pt6n = await GFCbT0ldEb.burn.call(uintPGv6clk, {from: accounts[0]});
//		const boolDVsyW3L = await GFCbT0ldEb.approve.call(address4RAQiN, uintGqY8toa, {from: accounts[3]});

		await expect(GFCbT0ldEb.burn.call(uintQGMHHWk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintuwx6gl8 = BigInt("73")
		const stringLyHvPSI = "fmX08vA8XJvfvx5v9uOrJI"
		const stringU591NKB = "1OP6qSifqgxGbzqShQ2dTXnIdkTndLJ6ac3qmTbuKbGMOFRfEq7eSiJ82n4gOhxZBhCLEgiyVMA"
		const GFCFUeHVwb = await GFC.new(uintuwx6gl8, stringLyHvPSI, stringU591NKB, {from: accounts[5]});
		const uintaCL6mna = BigInt("339")
		const addressTPLek3f = accounts[2]
		const addressFfvzBag = accounts[4]
		const uintHr30xb = BigInt("949")
		const addressSMli7Zu = "0x0000000000000000000000000000000000000001"
		const uintBYbtf7I = BigInt("569")
		const address8D3fzw = accounts[3]
		const addressme1cBl = accounts[3]
		const uintTCP4uck = BigInt("60")
//		const boolSXAstjJ = await GFCFUeHVwb.transferFrom.call(addressFfvzBag, addressTPLek3f, uintaCL6mna, {from: accounts[0]});
//		const boolIBJ2CXm = await GFCFUeHVwb.burnFrom.call(addressSMli7Zu, uintHr30xb, {from: accounts[5]});
//		const boolpnyeOCo = await GFCFUeHVwb.transferFrom.call(addressme1cBl, address8D3fzw, uintBYbtf7I, {from: accounts[2]});
//		const boolqH7nAdb = await GFCFUeHVwb.burn.call(uintTCP4uck, {from: accounts[0]});

		await expect(GFCFUeHVwb.transferFrom.call(addressFfvzBag, addressTPLek3f, uintaCL6mna, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintN7bBkBD = BigInt("216")
		const stringDVqixrQ = "UvVONIReFhbQNNKXeeyIvdSj8DZka"
		const stringemZ0xkN = "u2"
		const GFCw1OmEID = await GFC.new(uintN7bBkBD, stringDVqixrQ, stringemZ0xkN, {from: accounts[2]});
		const uintfKFHa8N = BigInt("381")
		const addressfy6WBUk = accounts[0]
		const uintQYbPG1B = BigInt("1341")
		const addressCoCbmsC = accounts[3]
		const byteNCmwcY9 = "0x12011f19050e1d1619032004041312100b1f06"
		const uintBjVNAjl = BigInt("322")
		const addressdAXTQmh = accounts[1]
		const uintbdadwN3 = BigInt("585")
		const addressbN4GtLI = accounts[3]
		const uintG9Qs1vV = BigInt("574")
		const addressYjlUCj8 = accounts[2]
		const uintAJ1wrXg = BigInt("382")
		const addressvL1UrZ1 = accounts[4]
		const addressD75ynD2 = accounts[3]
//		const boolvYqksNW = await GFCw1OmEID.transfer.call(addressfy6WBUk, uintfKFHa8N, {from: accounts[4]});
//		const boolnGtIxJ = await GFCw1OmEID.burnFrom.call(addressCoCbmsC, uintQYbPG1B, {from: accounts[0]});
//		const boolSZaNnEF = await GFCw1OmEID.approveAndCall.call(addressdAXTQmh, uintBjVNAjl, byteNCmwcY9, {from: accounts[3]});
//		const boolGQgtuc4 = await GFCw1OmEID.approve.call(addressbN4GtLI, uintbdadwN3, {from: accounts[1]});
//		const boolF2xJyX9 = await GFCw1OmEID.burnFrom.call(addressYjlUCj8, uintG9Qs1vV, {from: accounts[1]});
//		const boolUMAUMNE = await GFCw1OmEID.transferFrom.call(addressD75ynD2, addressvL1UrZ1, uintAJ1wrXg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCw1OmEID.transfer.call(addressfy6WBUk, uintfKFHa8N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uinthvjI50J = BigInt("800")
		const stringrcTvrpe = "de"
		const stringD3bqXmG = "CIu4DjAW9No9KJxWzgwLEFie8KhUkwY23YOrWGw8DLtCIeLa6Ii1ssIueW6yqnf5TOtKYnez3MGlWNOoxG"
		const GFCUXwOG5o = await GFC.new(uinthvjI50J, stringrcTvrpe, stringD3bqXmG, {from: accounts[0]});
		const byteVTRTDHj = "0x0a0d192015022011150205050e1c08080b0515050d1504"
		const uintmLvE1in = BigInt("13")
		const addressqfPMsKJ = accounts[1]
		const uintvazmmZs = BigInt("876")
		const byteYQhFfT = "0x0a0302030417011f1a16071b"
		const uintjz55NvB = BigInt("567")
		const addressq8keKy = accounts[2]
		const uint5KWzBk = BigInt("1779")
		const addresseRQ6yT9 = accounts[0]
		const uintVrfL1uU = BigInt("1539")
		const uintfGWKYhS = BigInt("684")
		const addressm4GUaao = accounts[0]
//		const boolkhWoGz = await GFCUXwOG5o.approveAndCall.call(addressqfPMsKJ, uintmLvE1in, byteVTRTDHj, {from: accounts[1]});
//		const boolZBrf678 = await GFCUXwOG5o.burn.call(uintvazmmZs, {from: accounts[5]});
//		const boolAoiuaw3 = await GFCUXwOG5o.approveAndCall.call(addressq8keKy, uintjz55NvB, byteYQhFfT, {from: accounts[0]});
//		const boolf1Y8Qsg = await GFCUXwOG5o.burnFrom.call(addresseRQ6yT9, uint5KWzBk, {from: accounts[4]});
//		const boolQYcNzIl = await GFCUXwOG5o.burn.call(uintVrfL1uU, {from: accounts[1]});
//		const boolSbqqcSL = await GFCUXwOG5o.approve.call(addressm4GUaao, uintfGWKYhS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCUXwOG5o.approveAndCall.call(addressqfPMsKJ, uintmLvE1in, byteVTRTDHj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})