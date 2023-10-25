const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressP5TkGe = "0x0000000000000000000000000000000000000001"
		const BAEuIpgFBC = await BAE.new(addressP5TkGe, {from: accounts[2]});
		const uintN3EdQG0 = BigInt("892")
		const uintaiLvNUA = BigInt("1178")
		const uintyGlgcy = BigInt("180")
		const uintEAvD5nV = BigInt("520")
		const uintHRjF7qX = BigInt("901")
		const uintKgxdd96 = BigInt("87")
		const uintvaISPV = BigInt("2045")
		const uintzacByR = BigInt("2024")
		const uintAHizW7B = BigInt("742")
		const uintse5GtXk = BigInt("1561")
		const uinte8Nq25 = BigInt("840")
		const uintYuIjkS = BigInt("409")
		const uint25616Ky83 = await BAEuIpgFBC.bid.call(uintN3EdQG0, {from: accounts[4]});
		const uint256GxuY79B = await BAEuIpgFBC.resetAuction.call(uintEAvD5nV, uintyGlgcy, uintaiLvNUA, {from: accounts[1]});
		const uint256hjaE9YW = await BAEuIpgFBC.buy.call(uintHRjF7qX, {from: accounts[0]});
		const uint256bDKLZpE = await BAEuIpgFBC.createAuction.call(uintAHizW7B, uintzacByR, uintvaISPV, uintKgxdd96, {from: accounts[0]});
		const uint256P1364JD = await BAEuIpgFBC.resetAuction.call(uintYuIjkS, uinte8Nq25, uintse5GtXk, {from: accounts[4]});

		await expect(BAEuIpgFBC.bid.call(uintN3EdQG0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresstKa0Qf = accounts[1]
		const BAEtSwSN8X = await BAE.new(addresstKa0Qf, {from: accounts[3]});
		const uintgV2vMZG = BigInt("432")
		const uintaiFXfwh = BigInt("1879")
		const uintBPMG7s1 = BigInt("1776")
		const uintY3oohko = BigInt("1101")
		const uintEkGFdOU = BigInt("1686")
		const uintX6FVmf3 = BigInt("1066")
		const uintB7HGmpQ = BigInt("181")
		const uint256FS3ieAL = await BAEtSwSN8X.changePrintFee.call(uintgV2vMZG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UnXWzOO = await BAEtSwSN8X.setAuctionFee.call(uintaiFXfwh, {from: accounts[2]});
		const uint256lVGB9vl = await BAEtSwSN8X.createAuction.call(uintX6FVmf3, uintEkGFdOU, uintY3oohko, uintBPMG7s1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CU5jgIP = await BAEtSwSN8X.bid.call(uintB7HGmpQ, {from: accounts[2]});

		await expect(BAEtSwSN8X.changePrintFee.call(uintgV2vMZG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressho8Atq8 = accounts[3]
		const BAEdw3MPQc = await BAE.new(addressho8Atq8, {from: accounts[3]});
		const uintIwDRnNe = BigInt("1587")
		const uintGw6Md71 = BigInt("1920")
		const uintfDuwOe0 = BigInt("1221")
		const uintsOy4Txb = BigInt("283")
		const uint256GL8kil9 = await BAEdw3MPQc.concludeAuction.call(uintIwDRnNe, {from: accounts[2]});
		const uint256DeGg5hn = await BAEdw3MPQc.changePrintFee.call(uintGw6Md71, {from: accounts[3]});
		const uint256dyil5ye = await BAEdw3MPQc.bid.call(uintfDuwOe0, {from: accounts[0]});
		const uint256SyRFMb0 = await BAEdw3MPQc.bid.call(uintsOy4Txb, {from: accounts[0]});

		await expect(BAEdw3MPQc.concludeAuction.call(uintIwDRnNe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressyq4K2li = "0x0000000000000000000000000000000000000001"
		const BAEsa6V3R = await BAE.new(addressyq4K2li, {from: accounts[2]});
		const uintmMkP3I = BigInt("764")
		const uintQf2yhhW = BigInt("63")
		const uintJxMshwr = BigInt("698")
		const uintsBplowA = BigInt("518")
		const uintk1BDy8M = BigInt("481")
		const uintT1wPer7 = BigInt("747")
		const uintcq7FzlJ = BigInt("848")
		const uint256KW3cbUA = await BAEsa6V3R.resetAuction.call(uintJxMshwr, uintQf2yhhW, uintmMkP3I, {from: accounts[1]});
		const uint256P9Q1cW = await BAEsa6V3R.buy.call(uintsBplowA, {from: accounts[4]});
		const uint256obSEq7 = await BAEsa6V3R.buy.call(uintk1BDy8M, {from: accounts[4]});
		const uint256rKoKtN = await BAEsa6V3R.concludeAuction.call(uintT1wPer7, {from: accounts[0]});
		const uint256WC0kUIr = await BAEsa6V3R.buy.call(uintcq7FzlJ, {from: accounts[1]});

		await expect(BAEsa6V3R.resetAuction.call(uintJxMshwr, uintQf2yhhW, uintmMkP3I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresstD4NALt = accounts[2]
		const BAEXEc9h5c = await BAE.new(addresstD4NALt, {from: "0x0000000000000000000000000000000000000001"});
		const uintSum2Q6 = BigInt("254")
		const uintLxdlmuY = BigInt("229")
		const uintOQpjbi7 = BigInt("433")
		const uint45Ah8o = BigInt("717")
		const uintQI2KhGB = BigInt("318")
		const uintYrfemgx = BigInt("1362")
		const uintvoEAl5a = BigInt("40")
		const uintoXhcRoa = BigInt("222")
		const uintYwMcnuX = BigInt("1662")
		const uintCA66a6 = BigInt("1614")
		const uintd5FAig3 = BigInt("487")
		const uint256M4oaSmC = await BAEXEc9h5c.changePrintFee.call(uintSum2Q6, {from: accounts[2]});
		const uint256v4FYWMg = await BAEXEc9h5c.createAuction.call(uintQI2KhGB, uint45Ah8o, uintOQpjbi7, uintLxdlmuY, {from: accounts[1]});
		const uint256noIQXYI = await BAEXEc9h5c.resetAuction.call(uintoXhcRoa, uintvoEAl5a, uintYrfemgx, {from: accounts[4]});
		const uint256RGiW544 = await BAEXEc9h5c.setAuctionFee.call(uintYwMcnuX, {from: accounts[2]});
		const uint256ThR9glU = await BAEXEc9h5c.changePrintFee.call(uintCA66a6, {from: accounts[2]});
		const uint256lglLNr3 = await BAEXEc9h5c.buy.call(uintd5FAig3, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addressZkb9avv = accounts[3]
		const BAEdw3MPQc = await BAE.new(addressZkb9avv, {from: accounts[3]});
		const uintI48dITN = BigInt("1259")
		const uintt1j9q4 = BigInt("1981")
		const uintIjFvsUE = BigInt("495")
		const uintcdhsHJv = BigInt("1174")
		const uintTE04H1Q = BigInt("1579")
		const uintTLnCiah = BigInt("1920")
		const uintVcTrUwK = BigInt("1221")
		const uint256y1ckkFi = await BAEdw3MPQc.createAuction.call(uintcdhsHJv, uintIjFvsUE, uintt1j9q4, uintI48dITN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GL8kil9 = await BAEdw3MPQc.concludeAuction.call(uintTE04H1Q, {from: accounts[2]});
		const uint256DeGg5hn = await BAEdw3MPQc.changePrintFee.call(uintTLnCiah, {from: accounts[3]});
		const uint256dyil5ye = await BAEdw3MPQc.bid.call(uintVcTrUwK, {from: accounts[0]});

		await expect(BAEdw3MPQc.createAuction.call(uintcdhsHJv, uintIjFvsUE, uintt1j9q4, uintI48dITN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressxj7LSV = "0x0000000000000000000000000000000000000001"
		const BAESn1QVzI = await BAE.new(addressxj7LSV, {from: accounts[3]});
		const uintf2nH5LN = BigInt("1393")
		const uintrECvOZv = BigInt("13")
		const uintX5eSver = BigInt("420")
		const uintsrfR0g = BigInt("1261")
		const uint256Bwe8WFV = await BAESn1QVzI.buy.call(uintf2nH5LN, {from: accounts[0]});
		const uint256unf8tfA = await BAESn1QVzI.bid.call(uintrECvOZv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BXfs1XV = await BAESn1QVzI.changePrintFee.call(uintX5eSver, {from: accounts[0]});
		const uint256KGhSzPs = await BAESn1QVzI.setAuctionFee.call(uintsrfR0g, {from: accounts[4]});

		await expect(BAESn1QVzI.buy.call(uintf2nH5LN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})