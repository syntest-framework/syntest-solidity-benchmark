const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressqXAevuQ = "0x0000000000000000000000000000000000000001"
		const BAEbLgykX = await BAE.new(addressqXAevuQ, {from: accounts[1]});
		const uintIbZgwLt = BigInt("1110")
		const uintPD6GMAS = BigInt("861")
		const uintBBaaj37 = BigInt("651")
		const uintkqmRJLY = BigInt("791")
		const uintA6FQsg8 = BigInt("800")
		const uintsrkh3Ha = BigInt("145")
		const uintxr3JvAq = BigInt("670")
		const uintreaY4PS = BigInt("1946")
		const uintx27d5Yf = BigInt("1160")
		const uintyobrpmj = BigInt("382")
		const uintxd4xyMA = BigInt("1662")
		const uintPDWr5cz = BigInt("209")
		const uinttLbW8DA = BigInt("330")
//		const uint256S6qBPGe = await BAEbLgykX.buy.call(uintIbZgwLt, {from: accounts[1]});
//		const uint2562MJw7n = await BAEbLgykX.changePrintFee.call(uintPD6GMAS, {from: accounts[4]});
//		const uint256r60Ktr = await BAEbLgykX.resetAuction.call(uintA6FQsg8, uintkqmRJLY, uintBBaaj37, {from: accounts[1]});
//		const uint256l2IvZWC = await BAEbLgykX.resetAuction.call(uintreaY4PS, uintxr3JvAq, uintsrkh3Ha, {from: accounts[1]});
//		const uint256yQnyQ0L = await BAEbLgykX.createAuction.call(uintPDWr5cz, uintxd4xyMA, uintyobrpmj, uintx27d5Yf, {from: accounts[1]});
//		const uint256YO6rVNS = await BAEbLgykX.concludeAuction.call(uinttLbW8DA, {from: accounts[2]});

		await expect(BAEbLgykX.buy.call(uintIbZgwLt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOL7VkhN = accounts[4]
		const BAEmMSPI0L = await BAE.new(addressOL7VkhN, {from: accounts[1]});
		const uintXucO1zI = BigInt("459")
		const uintUlng5lY = BigInt("1197")
//		const uint256Rjo00cS = await BAEmMSPI0L.bid.call(uintXucO1zI, {from: accounts[0]});
//		const uint256OpeAa6 = await BAEmMSPI0L.changePrintFee.call(uintUlng5lY, {from: accounts[0]});

		await expect(BAEmMSPI0L.bid.call(uintXucO1zI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressJd67jpn = accounts[4]
		const BAEpBUFDxc = await BAE.new(addressJd67jpn, {from: accounts[1]});
		const uintamsFHLP = BigInt("856")
		const uintN7aGy4R = BigInt("1667")
		const uintejULzqd = BigInt("1498")
		const uint9k6UeV = BigInt("524")
		const uintPlykb59 = BigInt("1528")
		const uintfdY5Ngr = BigInt("1715")
		const uintdg6jdaM = BigInt("1397")
		const uintHR9BnD6 = BigInt("258")
//		const uint256UiRK9ix = await BAEpBUFDxc.setAuctionFee.call(uintamsFHLP, {from: accounts[3]});
//		const uint256Gdl6MkV = await BAEpBUFDxc.bid.call(uintN7aGy4R, {from: accounts[2]});
//		const uint256CdiN8K6 = await BAEpBUFDxc.bid.call(uintejULzqd, {from: accounts[3]});
//		const uint2567f1J6g = await BAEpBUFDxc.createAuction.call(uintdg6jdaM, uintfdY5Ngr, uintPlykb59, uint9k6UeV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yFjgbJZ = await BAEpBUFDxc.bid.call(uintHR9BnD6, {from: accounts[0]});

		await expect(BAEpBUFDxc.setAuctionFee.call(uintamsFHLP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressdD1BOnY = "0x0000000000000000000000000000000000000001"
		const BAEBaKdMZz = await BAE.new(addressdD1BOnY, {from: accounts[5]});
		const uintbp0jM6K = BigInt("1515")
		const uintVhTNm4 = BigInt("1038")
		const uintKrp6fVL = BigInt("1405")
		const uintJjUVTiU = BigInt("1817")
		const uint869HDV = BigInt("2044")
		const uintJplIpUj = BigInt("1271")
		const uintIHj7D3R = BigInt("635")
		const uintUBPQvr = BigInt("414")
		const uintW2xJEYz = BigInt("1823")
		const uintItvV4Ia = BigInt("414")
		const uintBG086Kd = BigInt("205")
		const uintL7Ue3Cq = BigInt("1079")
		const uintjFWG98L = BigInt("851")
		const uintbUsIN24 = BigInt("318")
		const uintO5A8Ra8 = BigInt("520")
		const uintJ85l3mx = BigInt("1754")
		const uintkrpsHJ6 = BigInt("1235")
		const uintrMgqpbW = BigInt("1569")
		const uintoALPpgM = BigInt("106")
		const uintLBL1F2N = BigInt("1770")
		const uintCzhnkTm = BigInt("1470")
//		const uint256Q9YjZiW = await BAEBaKdMZz.createAuction.call(uintJjUVTiU, uintKrp6fVL, uintVhTNm4, uintbp0jM6K, {from: accounts[2]});
//		const uint256jUOZgJ = await BAEBaKdMZz.setAuctionFee.call(uint869HDV, {from: accounts[4]});
//		const uint256y6kK966 = await BAEBaKdMZz.createAuction.call(uintW2xJEYz, uintUBPQvr, uintIHj7D3R, uintJplIpUj, {from: accounts[4]});
//		const uint2564XFqTD = await BAEBaKdMZz.createAuction.call(uintjFWG98L, uintL7Ue3Cq, uintBG086Kd, uintItvV4Ia, {from: accounts[5]});
//		const uint256o8TWHSB = await BAEBaKdMZz.createAuction.call(uintkrpsHJ6, uintJ85l3mx, uintO5A8Ra8, uintbUsIN24, {from: accounts[2]});
//		const uint256fHefcK = await BAEBaKdMZz.createAuction.call(uintCzhnkTm, uintLBL1F2N, uintoALPpgM, uintrMgqpbW, {from: accounts[3]});

		await expect(BAEBaKdMZz.createAuction.call(uintJjUVTiU, uintKrp6fVL, uintVhTNm4, uintbp0jM6K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresszT4x9SD = accounts[4]
		const BAEmMSPI0L = await BAE.new(addresszT4x9SD, {from: accounts[1]});
		const uintykZp7Ys = BigInt("1251")
		const uintcBsgZtE = BigInt("1020")
		const uintdzfUIPX = BigInt("871")
		const uintp4oeGLZ = BigInt("459")
		const uintMURsKN4 = BigInt("1197")
//		const uint256JpHZDKJ = await BAEmMSPI0L.resetAuction.call(uintdzfUIPX, uintcBsgZtE, uintykZp7Ys, {from: accounts[2]});
//		const uint256Rjo00cS = await BAEmMSPI0L.bid.call(uintp4oeGLZ, {from: accounts[0]});
//		const uint256OpeAa6 = await BAEmMSPI0L.changePrintFee.call(uintMURsKN4, {from: accounts[0]});

		await expect(BAEmMSPI0L.resetAuction.call(uintdzfUIPX, uintcBsgZtE, uintykZp7Ys, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressLzUBmpb = accounts[4]
		const BAEmMSPI0L = await BAE.new(addressLzUBmpb, {from: accounts[1]});
		const uintEnWrxbZ = BigInt("273")
		const uintTbwVyPw = BigInt("1200")
//		const uint256vLpDe9j = await BAEmMSPI0L.concludeAuction.call(uintEnWrxbZ, {from: accounts[5]});
//		const uint256OpeAa6 = await BAEmMSPI0L.changePrintFee.call(uintTbwVyPw, {from: accounts[0]});

		await expect(BAEmMSPI0L.concludeAuction.call(uintEnWrxbZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressvLdG7AL = accounts[3]
		const BAEfsZHH7d = await BAE.new(addressvLdG7AL, {from: "0x0000000000000000000000000000000000000001"});
		const uintiHOvOUS = BigInt("32")
		const uintZC07C1 = BigInt("1514")
		const uintTSjBi0M = BigInt("212")
		const uintZ8ovBON = BigInt("483")
		const uintTvMfK5m = BigInt("1792")
		const uintnH3zWby = BigInt("1631")
		const uinttbIk0wB = BigInt("1205")
		const uintU6idpoV = BigInt("1354")
		const uintb4KdoW = BigInt("742")
		const uintGpILOGb = BigInt("1114")
		const uint256dLQerxw = await BAEfsZHH7d.createAuction.call(uintZ8ovBON, uintTSjBi0M, uintZC07C1, uintiHOvOUS, {from: accounts[4]});
		const uint256c02G46l = await BAEfsZHH7d.concludeAuction.call(uintTvMfK5m, {from: accounts[0]});
		const uint256Zz1SDZb = await BAEfsZHH7d.setAuctionFee.call(uintnH3zWby, {from: accounts[1]});
		const uint256NfFtoCS = await BAEfsZHH7d.resetAuction.call(uintb4KdoW, uintU6idpoV, uinttbIk0wB, {from: accounts[4]});
		const uint256Yy2KSOR = await BAEfsZHH7d.bid.call(uintGpILOGb, {from: accounts[2]});
	});
})