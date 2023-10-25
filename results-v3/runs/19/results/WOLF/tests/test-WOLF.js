const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringET6UKgj = "eETaXipPE"
		const stringnRPzNpl = "ySe7AaCpiPmfVd59s6Usvx2iKEhDHHjEOGfqfU"
		const uintha6cUfR = BigInt("243")
		const WOLFUHUFuCB = await WOLF.new(stringET6UKgj, stringnRPzNpl, uintha6cUfR, {from: accounts[4]});
		const addressujQzgkD = accounts[0]
		const uintawmSj5 = BigInt("438")
		const addressa0jSla = accounts[1]
		const addresspf1h4gW = accounts[0]
		const uintyvCR7sH = BigInt("850")
		const addresslGC2zZF = accounts[2]
		const uintpwb5Lk = BigInt("184")
		const addressuAdaabH = accounts[2]
		const uintp8n5soE = BigInt("243")
		const addressOuQScK = accounts[1]
		const boolvowKJD = await WOLFUHUFuCB.transferownership.call(addressujQzgkD, {from: accounts[4]});
		const boolmYQIIvG = await WOLFUHUFuCB.transferFrom.call(addresspf1h4gW, addressa0jSla, uintawmSj5, {from: accounts[4]});
		const boolcAkCDqe = await WOLFUHUFuCB.approve.call(addresslGC2zZF, uintyvCR7sH, {from: accounts[4]});
		const boolvSlC5Z5 = await WOLFUHUFuCB.approve.call(addressuAdaabH, uintpwb5Lk, {from: "0x0000000000000000000000000000000000000001"});
		const boolK4HL7Tl = await WOLFUHUFuCB.approve.call(addressOuQScK, uintp8n5soE, {from: accounts[1]});

		assert.equal(boolvowKJD, true)
		await expect(WOLFUHUFuCB.transferFrom.call(addresspf1h4gW, addressa0jSla, uintawmSj5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringTz3qha = "s2S1TzosQMHynV"
		const stringjljRJfn = "s2YlhkfL2anNeqs9i86GqarfMX49KdTt4ntlF3e1GEfcF"
		const uintk1pu3gX = BigInt("833")
		const WOLFpCTqeWH = await WOLF.new(stringTz3qha, stringjljRJfn, uintk1pu3gX, {from: accounts[0]});
		const uintQoSSZzz = BigInt("1982")
		const addressNZb4xFW = accounts[0]
		const uintDR5QpX8 = BigInt("1108")
		const addressHZkrtTW = accounts[4]
		const uinthftToix = BigInt("1745")
		const addressK3HOTBR = accounts[1]
		const uinteHWoZR = BigInt("1705")
		const addressmgXhLwX = accounts[1]
		const uintAmP5WCx = BigInt("733")
		const addressVs3XM06 = "0x0000000000000000000000000000000000000001"
		const addressApLspqT = "0x0000000000000000000000000000000000000001"
		const boolLt4A0xI = await WOLFpCTqeWH.transfer.call(addressNZb4xFW, uintQoSSZzz, {from: accounts[4]});
		const bools0ZgfT = await WOLFpCTqeWH.approveAndCall.call(addressHZkrtTW, uintDR5QpX8, {from: accounts[1]});
		const boolf61vvS = await WOLFpCTqeWH.approve.call(addressK3HOTBR, uinthftToix, {from: accounts[5]});
		const boollKSX8Hl = await WOLFpCTqeWH.approve.call(addressmgXhLwX, uinteHWoZR, {from: accounts[5]});
		const boole3jussC = await WOLFpCTqeWH.transferFrom.call(addressApLspqT, addressVs3XM06, uintAmP5WCx, {from: accounts[0]});

		await expect(WOLFpCTqeWH.transfer.call(addressNZb4xFW, uintQoSSZzz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringrjrcEmx = "keLn50JQhtbUvy3OVl5ri7g1q7NwbPKzhsRaSn3Xh2kgbrNLfEmNCSGwDr5K7RD8RoBuKOiiApdsjQWlF9ziXMh86"
		const stringhOab9nk = "gA13ntI8S"
		const uintkTtIqfq = BigInt("1056")
		const WOLFHK8ZE4v = await WOLF.new(stringrjrcEmx, stringhOab9nk, uintkTtIqfq, {from: accounts[5]});
		const uintD5byn8I = BigInt("1661")
		const addressFNlZBKl = accounts[0]
		const uintdYXyO1n = BigInt("1380")
		const address14fVvd = accounts[2]
		const uintp1Ht3ER = BigInt("526")
		const addressIl7yZ6 = accounts[3]
		const addressDOg91tr = accounts[1]
		const addresskFOWOmB = accounts[3]
		const uint3Z8dN7 = BigInt("1681")
		const addressY94doG6 = accounts[1]
		const addressTsf6iwY = accounts[4]
		const uintoIExxJS = BigInt("1401")
		const addressxrGDktw = accounts[4]
		const addressVZWhNvx = accounts[4]
		const boolc5BIkyr = await WOLFHK8ZE4v.approve.call(addressFNlZBKl, uintD5byn8I, {from: accounts[5]});
		const boolIx2GnTn = await WOLFHK8ZE4v.transfer.call(address14fVvd, uintdYXyO1n, {from: accounts[0]});
		const boolIutQ60b = await WOLFHK8ZE4v.transferFrom.call(addressDOg91tr, addressIl7yZ6, uintp1Ht3ER, {from: accounts[2]});
		const bool1MClKo = await WOLFHK8ZE4v.transferownership.call(addresskFOWOmB, {from: accounts[0]});
		const booly9FKCfW = await WOLFHK8ZE4v.transferFrom.call(addressTsf6iwY, addressY94doG6, uint3Z8dN7, {from: accounts[2]});
		const boolWrgo9Os = await WOLFHK8ZE4v.transferFrom.call(addressVZWhNvx, addressxrGDktw, uintoIExxJS, {from: accounts[2]});

		assert.equal(boolc5BIkyr, true)
		await expect(WOLFHK8ZE4v.transfer.call(address14fVvd, uintdYXyO1n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringE1aTbv3 = "5Lo0ONJCFh8XzO8Cfwi"
		const stringVEgQhay = "QGNJrMV63jNf"
		const uintRGpGnWx = BigInt("158")
		const WOLFURgYi5f = await WOLF.new(stringE1aTbv3, stringVEgQhay, uintRGpGnWx, {from: accounts[3]});
		const uintTD21CIE = BigInt("1399")
		const addressGlJaF1D = accounts[3]
		const addressmt73AYh = accounts[4]
		const uintFzkYkau = BigInt("1166")
		const addressCo2YopC = accounts[2]
		const boolT0zCibI = await WOLFURgYi5f.approveAndCall.call(addressGlJaF1D, uintTD21CIE, {from: accounts[0]});
		const boolIIi0qGh = await WOLFURgYi5f.transferownership.call(addressmt73AYh, {from: accounts[4]});
		const boolIfuG2UY = await WOLFURgYi5f.transfer.call(addressCo2YopC, uintFzkYkau, {from: accounts[1]});

		await expect(WOLFURgYi5f.approveAndCall.call(addressGlJaF1D, uintTD21CIE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringkIAMypT = "IkxgRPWd4IyDGsB6tynPPRxJ3dhHk"
		const stringgO5BEu = "3tSiZ0Rt"
		const uintAliLX4k = BigInt("396")
		const WOLFp6Ba5bz = await WOLF.new(stringkIAMypT, stringgO5BEu, uintAliLX4k, {from: "0x0000000000000000000000000000000000000001"});
		const uinthSIxNAS = BigInt("350")
		const addresstAwlfAX = accounts[4]
		const uintVA09Mb2 = BigInt("71")
		const addressJ5wbTnl = accounts[3]
		const uintXDjDelX = BigInt("546")
		const addressc1Qpw5V = accounts[3]
		const boolkOFSXoW = await WOLFp6Ba5bz.approveAndCall.call(addresstAwlfAX, uinthSIxNAS, {from: accounts[1]});
		const booljIsdixA = await WOLFp6Ba5bz.transfer.call(addressJ5wbTnl, uintVA09Mb2, {from: accounts[3]});
		const boolzJsInpP = await WOLFp6Ba5bz.approve.call(addressc1Qpw5V, uintXDjDelX, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringi9izOwx = "Tjph0nN8a9bDVuEetWqy2EPxIPFm6kVUXyrBQXWDTfmHrNyVCNYCC9g5"
		const stringPaGBQsf = "bR1hsXdsoKanuLtLYC2Wcz3Y5ye777kGkKUBr8zkIRVyR8pXCBkY7lXNIfsMg1tYr80N0GRxPbpyXxo1e"
		const uintE8lW6T5 = BigInt("359")
		const WOLFTXdjLqy = await WOLF.new(stringi9izOwx, stringPaGBQsf, uintE8lW6T5, {from: accounts[1]});
		const uintZXF8WLP = BigInt("1868")
		const addressMRAcmV4 = accounts[1]
		const uintRMmpVy = BigInt("1803")
		const addressd9z86Mf = "0x0000000000000000000000000000000000000001"
		const uintz5rkg9F = BigInt("38")
		const addressnnu0oA = accounts[7]
		const addressKM7unNk = "0x0000000000000000000000000000000000000000"
		const boolMgpy08o = await WOLFTXdjLqy.approveAndCall.call(addressMRAcmV4, uintZXF8WLP, {from: accounts[1]});
		const boolEYG8CxH = await WOLFTXdjLqy.transfer.call(addressd9z86Mf, uintRMmpVy, {from: accounts[2]});
		const boolYoXY1Ij = await WOLFTXdjLqy.transferFrom.call(addressKM7unNk, addressnnu0oA, uintz5rkg9F, {from: accounts[5]});

		assert.equal(boolMgpy08o, true)
		await expect(WOLFTXdjLqy.transfer.call(addressd9z86Mf, uintRMmpVy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringi9izOwx = "Tjph0nN8a9bDVuEetWqy2EPxIPFm6kVUXyrBQXWDTfmHrNyVCNYCC9g5"
		const stringPaGBQsf = "bR1hsXdsoKanuLtLYC2Wcz3Y5ye777kGkKUBr8zkIRVyR8pXCBkY7lXNIfsMg1tYr80N0GRxPbpyXxo1e"
		const uintez6qPu6 = BigInt("359")
		const WOLFTXdjLqy = await WOLF.new(stringi9izOwx, stringPaGBQsf, uintez6qPu6, {from: accounts[1]});
		const uintdkfAkmo = BigInt("38")
		const addressTbRN2Cp = accounts[10]
		const addressd0rlOop = "0x0000000000000000000000000000000000000001"
		const addressyYxqtR2 = accounts[3]
		const boolYoXY1Ij = await WOLFTXdjLqy.transferFrom.call(addressd0rlOop, addressTbRN2Cp, uintdkfAkmo, {from: accounts[5]});
		const boolowdDOV5 = await WOLFTXdjLqy.transferownership.call(addressyYxqtR2, {from: accounts[2]});

		await expect(WOLFTXdjLqy.transferFrom.call(addressd0rlOop, addressTbRN2Cp, uintdkfAkmo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringoaBLjJ = "zrq8kbkb5iNNsaLpdIMveiPIkJxswk3DdhEsk6kHax6umpFROcj9IydCkC8aLx08kj"
		const stringmrD0i64 = "iGvV8mreW"
		const uintjC9iSZ1 = BigInt("1586")
		const WOLFVl7ie49 = await WOLF.new(stringoaBLjJ, stringmrD0i64, uintjC9iSZ1, {from: accounts[3]});
		const uintMttxme7 = BigInt("0")
		const addressY2hSYsr = accounts[5]
		const bool9vjRlt = await WOLFVl7ie49.transfer.call(addressY2hSYsr, uintMttxme7, {from: accounts[4]});

		assert.equal(bool9vjRlt, true)
	});

	it('test for WOLF', async () => {
		const stringi9izOwx = "Tjph0nN8a9bDVuEetWqy2EPxIPFm6kVUXyrBQXWDTfmHrNyVCNYCC9g5"
		const stringPaGBQsf = "bR1hsXdsoKanuLtLYC2Wcz3Y5ye777kGkKUBr8zkIRVyR8pXCBkY7lXNIfsMg1tYr80N0GRxPbpyXxo1e"
		const uintLp0R142 = BigInt("359")
		const WOLFTXdjLqy = await WOLF.new(stringi9izOwx, stringPaGBQsf, uintLp0R142, {from: accounts[1]});
		const uintDNDkcj1 = BigInt("46")
		const addressYP9vuow = accounts[3]
		const uintkMlYRMv = BigInt("1984")
		const addressuhHHaDf = "0x00000000000000000000000000000000000000-1"
		const uintvuDp6OH = BigInt("983")
		const addressfsc0caR = accounts[5]
		const uintNTF3Zvb = BigInt("281")
		const addresslp4qQH = accounts[0]
		const uintEMdMxWC = BigInt("1574")
		const addressjiP5Y6E = accounts[1]
		const addresspZLtMxO = accounts[1]
		const boolMgpy08o = await WOLFTXdjLqy.approveAndCall.call(addressYP9vuow, uintDNDkcj1, {from: accounts[1]});
		const boolyqKnYTO = await WOLFTXdjLqy.transfer.call(addressuhHHaDf, uintkMlYRMv, {from: accounts[4]});
		const bool9QRJWM = await WOLFTXdjLqy.transfer.call(addressfsc0caR, uintvuDp6OH, {from: accounts[2]});
		const boolxGRHdBw = await WOLFTXdjLqy.approve.call(addresslp4qQH, uintNTF3Zvb, {from: accounts[4]});
		const boolj8tercj = await WOLFTXdjLqy.transfer.call(addressjiP5Y6E, uintEMdMxWC, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ9jessD = await WOLFTXdjLqy.transferownership.call(addresspZLtMxO, {from: accounts[5]});

		assert.equal(boolMgpy08o, true)
		await expect(WOLFTXdjLqy.transfer.call(addressuhHHaDf, uintkMlYRMv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringi9izOwx = "Tjph0nN8a9bDVuEetWqy2EPxIPFm6kVUXyrBQXWDTfmHrNyVCNYCC9g5"
		const stringPaGBQsf = "bR1hsXdsoKanuLtLYC2Wcz3Y5ye777kGkKUBr8zkIRVyR8pXCBkY7lXNIfsMg1tYr80N0GRxPbpyXxo1e"
		const uintNAHby3R = BigInt("359")
		const WOLFTXdjLqy = await WOLF.new(stringi9izOwx, stringPaGBQsf, uintNAHby3R, {from: accounts[1]});
		const uintIapmw1c = BigInt("0")
		const addressn9YQ12R = accounts[4]
		const uinteg6T7qJ = BigInt("295")
		const addresssGhYXd0 = "0x0000000000000000000000000000000000000001"
		const uintLDu43hm = BigInt("83")
		const addressBD4WtE = accounts[5]
		const addresszMwVWtc = accounts[3]
		const uintuWPHDIq = BigInt("1811")
		const addressZ3HSD31 = accounts[2]
		const uintlT3t3yq = BigInt("1386")
		const addressJU8n36h = accounts[1]
		const boolMgpy08o = await WOLFTXdjLqy.approveAndCall.call(addressn9YQ12R, uintIapmw1c, {from: accounts[1]});
		const boolajLaNr7 = await WOLFTXdjLqy.transfer.call(addresssGhYXd0, uinteg6T7qJ, {from: accounts[0]});
		const boolYuJHoX9 = await WOLFTXdjLqy.transferFrom.call(addresszMwVWtc, addressBD4WtE, uintLDu43hm, {from: accounts[2]});
		const bool4997rR = await WOLFTXdjLqy.approve.call(addressZ3HSD31, uintuWPHDIq, {from: accounts[3]});
		const boolj8tercj = await WOLFTXdjLqy.transfer.call(addressJU8n36h, uintlT3t3yq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMgpy08o, true)
		await expect(WOLFTXdjLqy.transfer.call(addresssGhYXd0, uinteg6T7qJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})