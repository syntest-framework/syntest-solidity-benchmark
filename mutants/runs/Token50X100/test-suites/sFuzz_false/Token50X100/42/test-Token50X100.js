const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100l8T7jPd = await Token50X100.new({from: accounts[5]});
		const addressxktadym = accounts[4]
		const addressZghcyc7 = accounts[0]
		const uintFebLN0g = BigInt("1699")
		const addressCxHA1fR = accounts[2]
		const addressO8psIOv = accounts[2]
		const uintgXuaA0j = BigInt("1452")
		const uintwdKpn6R = BigInt("615")
		const addressmDg9MF = accounts[0]
		const addressHzmHBmS = accounts[1]
		const uintwaJVNUz = BigInt("1540")
		const addressVPdRc8a = accounts[5]
		const uint256qFAJ0tX = await Token50X100l8T7jPd.allowance.call(addressZghcyc7, addressxktadym, {from: accounts[2]});
		const uint256eipN7Z = await Token50X100l8T7jPd.totalSupply.call({from: accounts[1]});
		const boolBe4ozrq = await Token50X100l8T7jPd.issueTokens.call(addressO8psIOv, addressCxHA1fR, uintFebLN0g, {from: accounts[1]});
		const boolNZV0AKu = await Token50X100l8T7jPd._transfer.call(addressHzmHBmS, addressmDg9MF, uintwdKpn6R, uintgXuaA0j, {from: accounts[1]});
		const boolFPnK8iq = await Token50X100l8T7jPd.approve.call(addressVPdRc8a, uintwaJVNUz, {from: accounts[1]});

		assert.equal(uint256eipN7Z, BigInt("4714285714285710"))
		assert.equal(uint256qFAJ0tX, BigInt("0"))
		await expect(Token50X100l8T7jPd.issueTokens.call(addressO8psIOv, addressCxHA1fR, uintFebLN0g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iGyicei = await Token50X100.new({from: accounts[2]});
		const uintNBzUGC = BigInt("42")
		const addressTSK410b = "0x0000000000000000000000000000000000000001"
		const uintYoLBJPR = BigInt("736")
		const addressssQJeHW = accounts[3]
		const uintKLIFQq = BigInt("555")
		const uintGzu949Y = BigInt("1861")
		const addressQfvLsBC = accounts[2]
		const uintmivScUg = BigInt("724")
		const uintw1yFpw5 = BigInt("1231")
		const addressjXybZzK = accounts[4]
		const addressJiSLtca = accounts[2]
		await Token50X100iGyicei.release.call({from: accounts[0]});
		const boolTi7yObG = await Token50X100iGyicei.increaseApproval.call(addressTSK410b, uintNBzUGC, {from: accounts[1]});
		const boolOPqzME2 = await Token50X100iGyicei.approve.call(addressssQJeHW, uintYoLBJPR, {from: accounts[1]});
		const boolFla4lrx = await Token50X100iGyicei.setVesting.call(addressQfvLsBC, uintGzu949Y, uintKLIFQq, {from: accounts[2]});
		const booldav5Ac = await Token50X100iGyicei._transfer.call(addressJiSLtca, addressjXybZzK, uintw1yFpw5, uintmivScUg, {from: accounts[5]});

		await expect(Token50X100iGyicei.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100mSL6TTW = await Token50X100.new({from: accounts[3]});
		const uintyjkuZRn = BigInt("209")
		const addressZ0mCeh = accounts[0]
		const uintWj78alb = BigInt("1034")
		const uintsMMfco = BigInt("1412")
		const addressIYZYQTs = accounts[5]
		const uintWO0s0mG = BigInt("688")
		const addressj0XKey7 = accounts[2]
		const addressskopmYi = accounts[3]
		const boolHlSjFI0 = await Token50X100mSL6TTW.approve.call(addressZ0mCeh, uintyjkuZRn, {from: "0x0000000000000000000000000000000000000001"});
		const bool7ppXXz = await Token50X100mSL6TTW.setVesting.call(addressIYZYQTs, uintsMMfco, uintWj78alb, {from: accounts[0]});
		const booljLyqO1f = await Token50X100mSL6TTW.transfer.call(addressj0XKey7, uintWO0s0mG, {from: accounts[4]});
		const addressjImWB7N = await Token50X100mSL6TTW.transferOwnership.call(addressskopmYi, {from: accounts[0]});

		assert.equal(boolHlSjFI0, true)
		await expect(Token50X100mSL6TTW.setVesting.call(addressIYZYQTs, uintsMMfco, uintWj78alb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100v2eLg5 = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintj3j9H8U = BigInt("542")
		const addressRtinfN3 = accounts[4]
		const uintB1zRznx = BigInt("71")
		const addressU0eCwmZ = accounts[5]
		const addresstgu6fi0 = accounts[1]
		const boolLgTLQ8A = await Token50X100v2eLg5.transfer.call(addressRtinfN3, uintj3j9H8U, {from: accounts[2]});
		const booldsWG9Gy = await Token50X100v2eLg5.transferFrom.call(addresstgu6fi0, addressU0eCwmZ, uintB1zRznx, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintBiov9PV = BigInt("1517")
		const addresss1YK4LP = "0x0000000000000000000000000000000000000001"
		const boolOeOVIEi = true
		const addressG4Qhxo4 = accounts[1]
		const uintdlqAiX = BigInt("221")
		const stringQBCQMPX = "ZH8om7zIMEbuo8zSOvuNB5ZHQzBMRQOQ3MftF9AAKSNaTgCjbO2lBjxgMl2QJf7vUopTbayKfnkgJIPUIWJxuFIsBmvYBiotxt"
		const stringyOngHA9 = "YrdJbtA6ePCiphWLlioQ3RvKGYHcP3PxaTCHD5npf7lRIiwuL8dbDgc9clyDTzNg4buk9GCi7b2hqhg19idKGHNcWluFU8f"
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addresss1YK4LP, uintBiov9PV, {from: accounts[1]});
		await Token50X100HVf9KMn.setWhiteListReceivers.call(addressG4Qhxo4, boolOeOVIEi, {from: accounts[4]});
		const boola1UrIyT = await Token50X100HVf9KMn.setSymbolNameDecimals.call(stringyOngHA9, stringQBCQMPX, uintdlqAiX, {from: accounts[0]});
		const uint256Dk1QMr1 = await Token50X100HVf9KMn.totalSupply.call({from: accounts[4]});
		await Token50X100HVf9KMn.lock.call({from: accounts[1]});

		await expect(Token50X100HVf9KMn.transfer.call(addresss1YK4LP, uintBiov9PV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const boolOeOVIEi = true
		const addressa8csQ5z = accounts[1]
		await Token50X100HVf9KMn.setWhiteListReceivers.call(addressa8csQ5z, boolOeOVIEi, {from: accounts[4]});
		const uint256Dk1QMr1 = await Token50X100HVf9KMn.totalSupply.call({from: accounts[4]});
		await Token50X100HVf9KMn.lock.call({from: accounts[1]});

		await expect(Token50X100HVf9KMn.setWhiteListReceivers.call(addressa8csQ5z, boolOeOVIEi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100i805sdQ = await Token50X100.new({from: accounts[3]});
		const uintEDP3BEN = BigInt("1876")
		const uintZESorqq = BigInt("1252")
		const uintE71cBYX = BigInt("1839")
		const addressNbSYXML = accounts[1]
		const addresscmL3kVg = accounts[0]
		const boolAbYhdMJ = await Token50X100i805sdQ.setMaxLockPeriod.call(uintEDP3BEN, {from: accounts[0]});
		const boolaA7qDXq = await Token50X100i805sdQ._transfer.call(addresscmL3kVg, addressNbSYXML, uintE71cBYX, uintZESorqq, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100i805sdQ.lock.call({from: accounts[4]});

		assert.equal(boolAbYhdMJ, false)
		await expect(Token50X100i805sdQ._transfer.call(addresscmL3kVg, addressNbSYXML, uintE71cBYX, uintZESorqq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintn799V3W = BigInt("1688")
		const addressyW28ss6 = accounts[5]
		const addressjjKUS25 = "0x0000000000000000000000000000000000000001"
		const uintKex9XuH = BigInt("1425")
		const addressFrIIhIW = accounts[1]
		const addressjgv3NGE = accounts[4]
		const boolPYQWci = false
		const addressvd6ABKU = accounts[2]
		const boolrS8bdw7 = await Token50X100HVf9KMn.transferFrom.call(addressjjKUS25, addressyW28ss6, uintn799V3W, {from: accounts[0]});
		const boolZ8zN3dN = await Token50X100HVf9KMn.transferFrom.call(addressjgv3NGE, addressFrIIhIW, uintKex9XuH, {from: accounts[4]});
		const uint256Dk1QMr1 = await Token50X100HVf9KMn.totalSupply.call({from: accounts[4]});
		await Token50X100HVf9KMn.lock.call({from: accounts[1]});
		await Token50X100HVf9KMn.setWhiteList.call(addressvd6ABKU, boolPYQWci, {from: accounts[3]});

		await expect(Token50X100HVf9KMn.transferFrom.call(addressjjKUS25, addressyW28ss6, uintn799V3W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100jScKIsC = await Token50X100.new({from: accounts[0]});
		const uintha2FyaZ = BigInt("1420")
		const addressg1ryu6Z = accounts[5]
		const uinthPYTxWz = BigInt("308")
		const addressNx4Qall = accounts[0]
		const addresscwtMP8i = accounts[0]
		const addresszuUFxcY = accounts[5]
		const boolnGLxyKR = await Token50X100jScKIsC.increaseApproval.call(addressg1ryu6Z, uintha2FyaZ, {from: accounts[2]});
		const booloKwsJF = await Token50X100jScKIsC.increaseApproval.call(addressNx4Qall, uinthPYTxWz, {from: accounts[4]});
		await Token50X100jScKIsC.setLinkingAddresses.call(addresszuUFxcY, addresscwtMP8i, {from: accounts[5]});

		assert.equal(boolnGLxyKR, true)
		assert.equal(booloKwsJF, true)
		await expect(Token50X100jScKIsC.setLinkingAddresses.call(addresszuUFxcY, addresscwtMP8i, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintfoqxDKo = BigInt("1517")
		const addresszU4PfTT = "0x0000000000000000000000000000000000000000"
		const uintOvNwcPz = BigInt("1868")
		const addressiNUptwx = accounts[3]
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addresszU4PfTT, uintfoqxDKo, {from: accounts[1]});
		const booldXfhz3y = await Token50X100HVf9KMn.decreaseApproval.call(addressiNUptwx, uintOvNwcPz, {from: accounts[4]});
		const uint256Dk1QMr1 = await Token50X100HVf9KMn.totalSupply.call({from: accounts[4]});

		await expect(Token50X100HVf9KMn.transfer.call(addresszU4PfTT, uintfoqxDKo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KODPC5a = await Token50X100.new({from: accounts[0]});
		const addresstrIvVhc = accounts[0]
		const uintSVcrzE = BigInt("251")
		const stringrlzriuJ = "jL0R3JovBfXH9eUmQxoePEp4VJEF17lI8JWvdf3jgVgSp7aLbiYM64Pb442C8KEBrPBTSm82ZSf2MnxlHO2u"
		const stringXKLSRzf = "hCoqSnSwsxWQzE66DZCIjN6AF6B8OOmJq3esDeeIXlC6oRVt552cq8k7aIHNTYJU3TsYDujhfKqY1804p1U"
		const uintmb35EJG = BigInt("137")
		const addressS23yTaM = accounts[4]
		const uintCO5UGKX = BigInt("174")
		const stringx3WXf6F = "MgCk5ws"
		const stringPiywiDi = "h1Wl74dgukaiH0oulLEJKQnLuHLBE09EzOqNm3uD7kNGBwwTDPGEdVF"
		const address6kpch9 = accounts[3]
		const uint256VjVpaay = await Token50X100KODPC5a.balanceOf.call(addresstrIvVhc, {from: accounts[0]});
		await Token50X100KODPC5a.setSymbolNameDecimals.call(stringXKLSRzf, stringrlzriuJ, uintSVcrzE, {from: accounts[4]});
		const boolHex6hbG = await Token50X100KODPC5a.transfer.call(addressS23yTaM, uintmb35EJG, {from: accounts[1]});
		await Token50X100KODPC5a.setSymbolNameDecimals.call(stringPiywiDi, stringx3WXf6F, uintCO5UGKX, {from: accounts[5]});
		await Token50X100KODPC5a.setTokenContract.call(address6kpch9, {from: accounts[1]});

		assert.equal(uint256VjVpaay, BigInt("0"))
		await expect(Token50X100KODPC5a.setSymbolNameDecimals.call(stringXKLSRzf, stringrlzriuJ, uintSVcrzE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100OX12WMh = await Token50X100.new({from: accounts[4]});
		const uintnT4Kvq4 = BigInt("1515")
		const uintham3AbQ = BigInt("1521")
		const uintjNL4OD = BigInt("194")
		const stringhuhs0Vl = "yO3NVC"
		const stringsyl2KPz = "SgO8J5mYGmLLwbkLK0B2lwia2Fo38bfVesWOoJedX00l13P7GsjH5oaIztKN6jV"
		await Token50X100OX12WMh.lock.call({from: accounts[4]});
		const boolRo8gGA = await Token50X100OX12WMh.safeLock.call(uintham3AbQ, uintnT4Kvq4, {from: accounts[2]});
		await Token50X100OX12WMh.setSymbolNameDecimals.call(stringsyl2KPz, stringhuhs0Vl, uintjNL4OD, {from: accounts[4]});

		await expect(Token50X100OX12WMh.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintCPSNpwJ = BigInt("61")
		const stringkYYYUDa = "wu7lJ7bZLKGkCggHDk7PHiTS7WK2S1"
		const stringCFv4TcO = "buC0bf0DjOv56K4Cwa1IcmJno0tYK4HKKKe79AwtZD9tTM6bbtRta3c2tvqZr2mFm8SLMEXWHgx7N2oLlk3a2C7pkfLOHr"
		const uintFSCa6sN = BigInt("1517")
		const addresspdwyFmI = "0x0000000000000000000000000000000000000002"
		const uintCFBvXjB = BigInt("324")
		const uintvnIYZVB = BigInt("400")
		const addressRNcFWRq = accounts[0]
		const addressFrBrkzI = accounts[1]
		await Token50X100HVf9KMn.setSymbolNameDecimals.call(stringCFv4TcO, stringkYYYUDa, uintCPSNpwJ, {from: accounts[4]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addresspdwyFmI, uintFSCa6sN, {from: accounts[1]});
		const boolY1joGDr = await Token50X100HVf9KMn._transfer.call(addressFrBrkzI, addressRNcFWRq, uintvnIYZVB, uintCFBvXjB, {from: accounts[2]});

		await expect(Token50X100HVf9KMn.setSymbolNameDecimals.call(stringCFv4TcO, stringkYYYUDa, uintCPSNpwJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintOOmgYF5 = BigInt("422")
		const addresshHySYu8 = accounts[0]
		const uintWkExY63 = BigInt("1")
		const uintSsKuNuD = BigInt("1533")
		const uintNpdey6l = BigInt("1517")
		const addressXUPKtO3 = "0x0000000000000000000000000000000000000000"
		const boolvPGc3A = await Token50X100HVf9KMn.decreaseApproval.call(addresshHySYu8, uintOOmgYF5, {from: accounts[0]});
		const boolHx2khcM = await Token50X100HVf9KMn.safeLock.call(uintSsKuNuD, uintWkExY63, {from: accounts[3]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addressXUPKtO3, uintNpdey6l, {from: accounts[1]});

		assert.equal(boolvPGc3A, true)
		await expect(Token50X100HVf9KMn.safeLock.call(uintSsKuNuD, uintWkExY63, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const addressaRob7Qy = accounts[0]
		const addressxaIIoZp = accounts[2]
		const uintKvdutvR = BigInt("1517")
		const addressRVqEKsn = "0x0000000000000000000000000000000000000001"
		await Token50X100HVf9KMn.setLinkingAddresses.call(addressxaIIoZp, addressaRob7Qy, {from: accounts[4]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addressRVqEKsn, uintKvdutvR, {from: accounts[1]});

		await expect(Token50X100HVf9KMn.setLinkingAddresses.call(addressxaIIoZp, addressaRob7Qy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintl7k4jDT = BigInt("1517")
		const addresskxTMLLg = "0x0000000000000000000000000000000000000001"
		await Token50X100HVf9KMn.release.call({from: accounts[4]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addresskxTMLLg, uintl7k4jDT, {from: accounts[1]});

		await expect(Token50X100HVf9KMn.release.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const addressmMc4Y0Y = accounts[4]
		const uintuFRkkoE = BigInt("1517")
		const addressbblu3BN = "0x0000000000000000000000000000000000000001"
		await Token50X100HVf9KMn.setTokenContract.call(addressmMc4Y0Y, {from: accounts[4]});
		await Token50X100HVf9KMn.release.call({from: accounts[4]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addressbblu3BN, uintuFRkkoE, {from: accounts[1]});

		await expect(Token50X100HVf9KMn.setTokenContract.call(addressmMc4Y0Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const addressE5uie3s = accounts[1]
		const uintBYJ7BUQ = BigInt("79")
		const addressKqZJuZ = "0x0000000000000000000000000000000000000001"
		const addressAKBEUq6 = accounts[4]
		const uintCW6QOpa = BigInt("355")
		const uintqomTSv = BigInt("760")
		const uintVzZc0I4 = BigInt("914")
		const addressp1IXcwO = "0x0000000000000000000000000000000000000001"
		const addressM1CIL60 = await Token50X100HVf9KMn.transferOwnership.call(addressE5uie3s, {from: accounts[4]});
		const boolCVTGzzj = await Token50X100HVf9KMn.transferFrom.call(addressAKBEUq6, addressKqZJuZ, uintBYJ7BUQ, {from: accounts[1]});
		const boolIqYoPnj = await Token50X100HVf9KMn.safeLock.call(uintqomTSv, uintCW6QOpa, {from: accounts[3]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addressp1IXcwO, uintVzZc0I4, {from: accounts[1]});

		await expect(Token50X100HVf9KMn.transferFrom.call(addressAKBEUq6, addressKqZJuZ, uintBYJ7BUQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintIbKCxVC = BigInt("1236")
		const uintGwrdKYV = BigInt("768")
		const addressBtFL07 = accounts[3]
		const uintmO3kwMB = BigInt("1517")
		const addressylQV7Zc = "0x0000000000000000000000000000000000000001"
		const boolWMQAQmx = await Token50X100HVf9KMn.setVesting.call(addressBtFL07, uintGwrdKYV, uintIbKCxVC, {from: accounts[4]});
		await Token50X100HVf9KMn.release.call({from: accounts[0]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addressylQV7Zc, uintmO3kwMB, {from: accounts[1]});

		assert.equal(boolWMQAQmx, true)
		await expect(Token50X100HVf9KMn.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HVf9KMn = await Token50X100.new({from: accounts[4]});
		const uintg4ssUJB = BigInt("73")
		const uintGHi09p5 = BigInt("1783")
		const addressprShDH = accounts[1]
		const addressjvh79B0 = accounts[3]
		const uintcNlRUW = BigInt("110")
		const addresseVfCoQi = "0x0000000000000000000000000000000000000001"
		const uintEEwFNGT = BigInt("2008")
		const addressre67Wv6 = "0x0000000000000000000000000000000000000001"
		const boolWfXVYI3 = await Token50X100HVf9KMn._transfer.call(addressjvh79B0, addressprShDH, uintGHi09p5, uintg4ssUJB, {from: accounts[4]});
		const boolI7WDfRy = await Token50X100HVf9KMn.transfer.call(addresseVfCoQi, uintcNlRUW, {from: accounts[2]});
		const booliSEjtG = await Token50X100HVf9KMn.transfer.call(addressre67Wv6, uintEEwFNGT, {from: accounts[1]});

		await expect(Token50X100HVf9KMn._transfer.call(addressjvh79B0, addressprShDH, uintGHi09p5, uintg4ssUJB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})