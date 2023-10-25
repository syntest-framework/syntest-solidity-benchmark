const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressX9ljiqP = accounts[3]
		const BAETqfcw8 = await BAE.new(addressX9ljiqP, {from: accounts[2]});
		const uintYmJjZkr = BigInt("1785")
		const uintoNCvpRV = BigInt("133")
		const uintH2GZTLa = BigInt("1250")
		const uintiqcjSD = BigInt("1695")
		const uintNqXZ56x = BigInt("750")
		const uintp6EuyRP = BigInt("1187")
		const uintoGqKqrF = BigInt("757")
		const uint256KOT0rCf = await BAETqfcw8.buy.call(uintYmJjZkr, {from: accounts[3]});
		const uint256izPIrNI = await BAETqfcw8.setAuctionFee.call(uintoNCvpRV, {from: accounts[2]});
		const uint256VghNDXX = await BAETqfcw8.buy.call(uintH2GZTLa, {from: accounts[0]});
		const uint256tpocazT = await BAETqfcw8.createAuction.call(uintoGqKqrF, uintp6EuyRP, uintNqXZ56x, uintiqcjSD, {from: accounts[2]});

		await expect(BAETqfcw8.buy.call(uintYmJjZkr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressxWeuLS1 = accounts[4]
		const BAEWkopAlI = await BAE.new(addressxWeuLS1, {from: accounts[0]});
		const uintB1xTDBE = BigInt("1876")
		const uintTz1txtU = BigInt("784")
		const uintFX2ZDv0 = BigInt("953")
		const uintnG3topU = BigInt("1082")
		const uintdUkXsrZ = BigInt("2012")
		const uintd6kjq0Z = BigInt("8")
		const uintnjPiKko = BigInt("1762")
		const uintpz2yaC9 = BigInt("1546")
		const uintBwa4dQ = BigInt("757")
		const uintYBZEmhZ = BigInt("344")
		const uintRRtc2WV = BigInt("1632")
		const uintQEBuZwE = BigInt("1914")
		const uintHNmZmyO = BigInt("157")
		const uintYi4LhkC = BigInt("412")
		const uintIoDSwW = BigInt("1706")
		const uintZi0Ueg2 = BigInt("1701")
		const uintjI02Em = BigInt("648")
		const uintqhs08Pg = BigInt("1704")
		const uint256NQr0su = await BAEWkopAlI.resetAuction.call(uintFX2ZDv0, uintTz1txtU, uintB1xTDBE, {from: accounts[2]});
		const uint256UxXWRw = await BAEWkopAlI.bid.call(uintnG3topU, {from: accounts[1]});
		const uint256jhLH5s = await BAEWkopAlI.resetAuction.call(uintnjPiKko, uintd6kjq0Z, uintdUkXsrZ, {from: accounts[4]});
		const uint256GCqgT9 = await BAEWkopAlI.createAuction.call(uintRRtc2WV, uintYBZEmhZ, uintBwa4dQ, uintpz2yaC9, {from: accounts[0]});
		const uint256EooiKzJ = await BAEWkopAlI.createAuction.call(uintIoDSwW, uintYi4LhkC, uintHNmZmyO, uintQEBuZwE, {from: accounts[4]});
		const uint256mNNzJdH = await BAEWkopAlI.resetAuction.call(uintqhs08Pg, uintjI02Em, uintZi0Ueg2, {from: accounts[2]});

		await expect(BAEWkopAlI.resetAuction.call(uintFX2ZDv0, uintTz1txtU, uintB1xTDBE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressS9Es2a = "0x0000000000000000000000000000000000000001"
		const BAEAXelqYY = await BAE.new(addressS9Es2a, {from: accounts[1]});
		const uintSeF9Xa9 = BigInt("1686")
		const uintJhvK8tH = BigInt("1988")
		const uintVQyPwCN = BigInt("825")
		const uintx80AUld = BigInt("803")
		const uintQDWdvbb = BigInt("194")
		const uintu9AUEW2 = BigInt("603")
		const uinteFb0YIf = BigInt("515")
		const uintvdNSAnP = BigInt("602")
		const uint256dSCJo7n = await BAEAXelqYY.setAuctionFee.call(uintSeF9Xa9, {from: accounts[2]});
		const uint256OydKdV4 = await BAEAXelqYY.setAuctionFee.call(uintJhvK8tH, {from: accounts[1]});
		const uint256PWnRGiX = await BAEAXelqYY.changePrintFee.call(uintVQyPwCN, {from: accounts[1]});
		const uint256TQx3UCP = await BAEAXelqYY.setAuctionFee.call(uintx80AUld, {from: accounts[0]});
		const uint256E17XBmE = await BAEAXelqYY.setAuctionFee.call(uintQDWdvbb, {from: accounts[3]});
		const uint256KboVMC = await BAEAXelqYY.resetAuction.call(uintvdNSAnP, uinteFb0YIf, uintu9AUEW2, {from: accounts[2]});

		await expect(BAEAXelqYY.setAuctionFee.call(uintSeF9Xa9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresswzBC7aN = accounts[0]
		const BAECHOiT30 = await BAE.new(addresswzBC7aN, {from: accounts[1]});
		const uintaKaTrJY = BigInt("1666")
		const uintioT77DD = BigInt("51")
		const uintUKKTSIL = BigInt("257")
		const uint256xtxW2rY = await BAECHOiT30.bid.call(uintaKaTrJY, {from: accounts[1]});
		const uint256xOklUo = await BAECHOiT30.setAuctionFee.call(uintioT77DD, {from: accounts[5]});
		const uint2564hm3M5 = await BAECHOiT30.setAuctionFee.call(uintUKKTSIL, {from: accounts[1]});

		await expect(BAECHOiT30.bid.call(uintaKaTrJY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressA60AZU = accounts[2]
		const BAEepncgN5 = await BAE.new(addressA60AZU, {from: "0x0000000000000000000000000000000000000001"});
		const uintETUZQ0Y = BigInt("952")
		const uintf41QPIW = BigInt("117")
		const uintlSIVDni = BigInt("1556")
		const uintYIUp8hC = BigInt("1960")
		const uintkHlHWKF = BigInt("1992")
		const uintvphhVwD = BigInt("1636")
		const uintozmJjzN = BigInt("18")
		const uintarPw9RX = BigInt("1964")
		const uintspkmrUJ = BigInt("1162")
		const uintcmLz0rb = BigInt("444")
		const uint256TGdqPRg = await BAEepncgN5.bid.call(uintETUZQ0Y, {from: accounts[1]});
		const uint256tTTsJUY = await BAEepncgN5.buy.call(uintf41QPIW, {from: accounts[4]});
		const uint256guDdmej = await BAEepncgN5.setAuctionFee.call(uintlSIVDni, {from: accounts[3]});
		const uint256VOQljZ = await BAEepncgN5.resetAuction.call(uintvphhVwD, uintkHlHWKF, uintYIUp8hC, {from: accounts[0]});
		const uint256AZPkJs3 = await BAEepncgN5.concludeAuction.call(uintozmJjzN, {from: accounts[4]});
		const uint256jm978v6 = await BAEepncgN5.resetAuction.call(uintcmLz0rb, uintspkmrUJ, uintarPw9RX, {from: accounts[3]});
	});

	it('test for BAE', async () => {
		const addressHgl9vxz = accounts[3]
		const BAEQ4lo2XK = await BAE.new(addressHgl9vxz, {from: accounts[2]});
		const uintkgYLIfe = BigInt("1685")
		const uintcqsBYjg = BigInt("1457")
		const uintv8aNEjf = BigInt("1741")
		const uintNl9qE1r = BigInt("230")
		const uintN6R6XYD = BigInt("683")
		const uinta1j9bvs = BigInt("333")
		const uintdMZl6I6 = BigInt("1993")
		const uintonIHDen = BigInt("1325")
		const uintwgtIpzo = BigInt("1032")
		const uintiS21dZn = BigInt("1500")
		const uint256wEMZhr = await BAEQ4lo2XK.createAuction.call(uintNl9qE1r, uintv8aNEjf, uintcqsBYjg, uintkgYLIfe, {from: accounts[4]});
		const uint256EmQLWY = await BAEQ4lo2XK.buy.call(uintN6R6XYD, {from: accounts[3]});
		const uint256w6KicNA = await BAEQ4lo2XK.createAuction.call(uintwgtIpzo, uintonIHDen, uintdMZl6I6, uinta1j9bvs, {from: accounts[5]});
		const uint256YVKRiJ7 = await BAEQ4lo2XK.concludeAuction.call(uintiS21dZn, {from: accounts[0]});

		await expect(BAEQ4lo2XK.createAuction.call(uintNl9qE1r, uintv8aNEjf, uintcqsBYjg, uintkgYLIfe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressYKbXDLF = accounts[3]
		const BAEDDdmIRs = await BAE.new(addressYKbXDLF, {from: accounts[3]});
		const uintWAfmX1 = BigInt("532")
		const uintTowsK1Q = BigInt("127")
		const uintbwGhR9E = BigInt("1613")
		const uintWGIF8aB = BigInt("1219")
		const uintzLBGFE = BigInt("1044")
		const uint256Kezlekj = await BAEDDdmIRs.concludeAuction.call(uintWAfmX1, {from: accounts[4]});
		const uint256CXN0bEa = await BAEDDdmIRs.buy.call(uintTowsK1Q, {from: accounts[0]});
		const uint256ORXRqDa = await BAEDDdmIRs.bid.call(uintbwGhR9E, {from: accounts[0]});
		const uint256Rh5ibU2 = await BAEDDdmIRs.setAuctionFee.call(uintWGIF8aB, {from: accounts[4]});
		const uint256MDNTsfH = await BAEDDdmIRs.buy.call(uintzLBGFE, {from: accounts[0]});

		await expect(BAEDDdmIRs.concludeAuction.call(uintWAfmX1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})