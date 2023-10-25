const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressrS5tfzI = accounts[3]
		const BAEWLTdVms = await BAE.new(addressrS5tfzI, {from: accounts[3]});
		const uintv9hKzr = BigInt("538")
		const uintgyXxQ1 = BigInt("174")
		const uintkOxaXbZ = BigInt("560")
		const uintzUgoHcB = BigInt("1005")
		const uintWYpFHrw = BigInt("1919")
		const uintIetjgQz = BigInt("1872")
		const uintjmaRUQX = BigInt("2036")
		const uintJMiOrCP = BigInt("1623")
		const uintvylKeyb = BigInt("1580")
		const uint256J7kappv = await BAEWLTdVms.createAuction.call(uintzUgoHcB, uintkOxaXbZ, uintgyXxQ1, uintv9hKzr, {from: accounts[1]});
		const uint256nsvWe6g = await BAEWLTdVms.buy.call(uintWYpFHrw, {from: accounts[0]});
		const uint256LMCwY4L = await BAEWLTdVms.buy.call(uintIetjgQz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LzOljtZ = await BAEWLTdVms.resetAuction.call(uintvylKeyb, uintJMiOrCP, uintjmaRUQX, {from: accounts[3]});

		await expect(BAEWLTdVms.createAuction.call(uintzUgoHcB, uintkOxaXbZ, uintgyXxQ1, uintv9hKzr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresslOHDT9f = accounts[4]
		const BAEbSInzc0 = await BAE.new(addresslOHDT9f, {from: accounts[4]});
		const uint5JNxLs = BigInt("849")
		const uintCmQ276G = BigInt("1156")
		const uintS2mAVeF = BigInt("1614")
		const uintEzCuzkt = BigInt("1462")
		const uintSOtm7OR = BigInt("2024")
		const uintMEZk0BN = BigInt("741")
		const uint256mKzjMGX = await BAEbSInzc0.resetAuction.call(uintS2mAVeF, uintCmQ276G, uint5JNxLs, {from: accounts[4]});
		const uint256JAjXq2R = await BAEbSInzc0.setAuctionFee.call(uintEzCuzkt, {from: accounts[5]});
		const uint256Hf687wX = await BAEbSInzc0.setAuctionFee.call(uintSOtm7OR, {from: accounts[3]});
		const uint256WHXn2I1 = await BAEbSInzc0.changePrintFee.call(uintMEZk0BN, {from: accounts[1]});

		await expect(BAEbSInzc0.resetAuction.call(uintS2mAVeF, uintCmQ276G, uint5JNxLs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressAKdHeP = accounts[3]
		const BAER8p0KRw = await BAE.new(addressAKdHeP, {from: accounts[0]});
		const uintqvSW9oB = BigInt("1494")
		const uintdCWERwt = BigInt("1410")
		const uintELohJ5w = BigInt("1931")
		const uintVyboli6 = BigInt("1262")
		const uintrO0SoQj = BigInt("380")
		const uintJ1HLE42 = BigInt("1170")
		const uintWY6rDqH = BigInt("1878")
		const uintPGAuaY2 = BigInt("844")
		const uintRrQbhV8 = BigInt("1561")
		const uintqz0HxgQ = BigInt("693")
		const uintwEkotqp = BigInt("1728")
		const uintAbHeIAQ = BigInt("2000")
		const uintgE0mdbV = BigInt("546")
		const uintLagEurO = BigInt("1767")
		const uint256kDWd9At = await BAER8p0KRw.concludeAuction.call(uintqvSW9oB, {from: accounts[0]});
		const uint256MCPvmdc = await BAER8p0KRw.changePrintFee.call(uintdCWERwt, {from: accounts[1]});
		const uint256QL0qdq8 = await BAER8p0KRw.createAuction.call(uintJ1HLE42, uintrO0SoQj, uintVyboli6, uintELohJ5w, {from: accounts[3]});
		const uint256PGf5X7h = await BAER8p0KRw.createAuction.call(uintqz0HxgQ, uintRrQbhV8, uintPGAuaY2, uintWY6rDqH, {from: accounts[4]});
		const uint256q8jiW11 = await BAER8p0KRw.createAuction.call(uintLagEurO, uintgE0mdbV, uintAbHeIAQ, uintwEkotqp, {from: accounts[0]});

		await expect(BAER8p0KRw.concludeAuction.call(uintqvSW9oB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressK0aHyBS = accounts[2]
		const BAElRCz2gV = await BAE.new(addressK0aHyBS, {from: accounts[3]});
		const uintfWl2lGh = BigInt("1856")
		const uintPkujb8 = BigInt("1168")
		const uintLNCcgDV = BigInt("1666")
		const uintjJMGlQZ = BigInt("1712")
		const uintTvYd1H = BigInt("1614")
		const uintog7JBA = BigInt("1974")
		const uintyMJaNo = BigInt("324")
		const uint256Jb42Wv = await BAElRCz2gV.bid.call(uintfWl2lGh, {from: accounts[3]});
		const uint256pMpTTuh = await BAElRCz2gV.setAuctionFee.call(uintPkujb8, {from: accounts[1]});
		const uint256YzQWhU5 = await BAElRCz2gV.buy.call(uintLNCcgDV, {from: accounts[3]});
		const uint256MpKIpow = await BAElRCz2gV.bid.call(uintjJMGlQZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256heTVlFc = await BAElRCz2gV.resetAuction.call(uintyMJaNo, uintog7JBA, uintTvYd1H, {from: accounts[5]});

		await expect(BAElRCz2gV.bid.call(uintfWl2lGh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressSb1F8Oc = accounts[3]
		const BAEtfnMBmO = await BAE.new(addressSb1F8Oc, {from: accounts[0]});
		const uintsSwGyec = BigInt("1723")
		const uintY8BnRZb = BigInt("1172")
		const uintkfJfhVW = BigInt("674")
		const uintFHnZ2HE = BigInt("1069")
		const uintIjfSBJB = BigInt("152")
		const uintgYqJ3I3 = BigInt("599")
		const uintKv88u2F = BigInt("1905")
		const uintRB0bXmj = BigInt("1390")
		const uintO1g9xMs = BigInt("752")
		const uintIvBU3Y9 = BigInt("177")
		const uintbbD7nD6 = BigInt("1001")
		const uintiRsZ6IR = BigInt("269")
		const uintqcyPPeH = BigInt("715")
		const uint256kkxYuz3 = await BAEtfnMBmO.buy.call(uintsSwGyec, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bRQlv8w = await BAEtfnMBmO.resetAuction.call(uintFHnZ2HE, uintkfJfhVW, uintY8BnRZb, {from: accounts[2]});
		const uint256pmRlpOz = await BAEtfnMBmO.setAuctionFee.call(uintIjfSBJB, {from: accounts[1]});
		const uint256Fh3puFt = await BAEtfnMBmO.resetAuction.call(uintRB0bXmj, uintKv88u2F, uintgYqJ3I3, {from: accounts[4]});
		const uint256QvAffko = await BAEtfnMBmO.createAuction.call(uintiRsZ6IR, uintbbD7nD6, uintIvBU3Y9, uintO1g9xMs, {from: accounts[4]});
		const uint256F6Hayxs = await BAEtfnMBmO.concludeAuction.call(uintqcyPPeH, {from: accounts[1]});

		await expect(BAEtfnMBmO.buy.call(uintsSwGyec, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspWJR3Q = accounts[0]
		const BAENDXruN = await BAE.new(addresspWJR3Q, {from: "0x0000000000000000000000000000000000000001"});
		const uintZvC6TCV = BigInt("310")
		const uintRcESru2 = BigInt("925")
		const uint0xegoZ = BigInt("1515")
		const uintpaEyWNG = BigInt("780")
		const uintTi2mQSV = BigInt("634")
		const uintSrwN3FD = BigInt("712")
		const uintsTuCiC = BigInt("354")
		const uintReT5c6L = BigInt("295")
		const uintLutQJR0 = BigInt("104")
		const uintlWODQJD = BigInt("843")
		const uintSSPLAbm = BigInt("1779")
		const uint256bA7JEQP = await BAENDXruN.setAuctionFee.call(uintZvC6TCV, {from: accounts[2]});
		const uint256mCXYhP = await BAENDXruN.setAuctionFee.call(uintRcESru2, {from: accounts[0]});
		const uint256YQn8iMj = await BAENDXruN.createAuction.call(uintSrwN3FD, uintTi2mQSV, uintpaEyWNG, uint0xegoZ, {from: accounts[0]});
		const uint256KA0Rc4B = await BAENDXruN.createAuction.call(uintlWODQJD, uintLutQJR0, uintReT5c6L, uintsTuCiC, {from: accounts[3]});
		const uint256csDWd2v = await BAENDXruN.buy.call(uintSSPLAbm, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addresssfqHr2a = accounts[3]
		const BAEK4KpGVU = await BAE.new(addresssfqHr2a, {from: accounts[1]});
		const uintL4C7Ie7 = BigInt("201")
		const uintHb6vYIC = BigInt("1188")
		const uintNUiOoGK = BigInt("499")
		const uintiixF7Gr = BigInt("661")
		const uintfc2I3aA = BigInt("803")
		const uintC8xgBoN = BigInt("2034")
		const uintwnkFlFf = BigInt("1206")
		const uintxh7e8hA = BigInt("892")
		const uint256jRvEd4u = await BAEK4KpGVU.setAuctionFee.call(uintL4C7Ie7, {from: accounts[0]});
		const uint256tJHY32 = await BAEK4KpGVU.createAuction.call(uintfc2I3aA, uintiixF7Gr, uintNUiOoGK, uintHb6vYIC, {from: accounts[2]});
		const uint256PCIuUeJ = await BAEK4KpGVU.bid.call(uintC8xgBoN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iQ0IGkM = await BAEK4KpGVU.bid.call(uintwnkFlFf, {from: accounts[3]});
		const uint256IFsCGJ9 = await BAEK4KpGVU.buy.call(uintxh7e8hA, {from: accounts[4]});

		await expect(BAEK4KpGVU.setAuctionFee.call(uintL4C7Ie7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})