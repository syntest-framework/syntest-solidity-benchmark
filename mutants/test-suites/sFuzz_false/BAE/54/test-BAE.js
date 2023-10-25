const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressW0YIm5N = "0x0000000000000000000000000000000000000001"
		const BAEXI0ZQgb = await BAE.new(addressW0YIm5N, {from: accounts[0]});
		const uint0317DM = BigInt("1140")
		const uintHOSUgR7 = BigInt("1563")
		const uintWq9eH1B = BigInt("448")
		const uintv2YAPWT = BigInt("1854")
		const uintU5DJaO5 = BigInt("609")
		const uintjmhRxP = BigInt("1991")
//		const uint256hDNxe9I = await BAEXI0ZQgb.resetAuction.call(uintWq9eH1B, uintHOSUgR7, uint0317DM, {from: accounts[1]});
//		const uint256UMuzDS = await BAEXI0ZQgb.resetAuction.call(uintjmhRxP, uintU5DJaO5, uintv2YAPWT, {from: accounts[0]});

		await expect(BAEXI0ZQgb.resetAuction.call(uintWq9eH1B, uintHOSUgR7, uint0317DM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressX91xrOV = accounts[4]
		const BAEpCocfqV = await BAE.new(addressX91xrOV, {from: accounts[0]});
		const uintgXgtIYj = BigInt("1704")
		const uintU16wHeG = BigInt("1519")
		const uintoYFG2dd = BigInt("1309")
		const uintTtzCRYr = BigInt("647")
		const uinti3vYVsx = BigInt("834")
		const uintwokOjF2 = BigInt("1464")
		const uintaJgCxlN = BigInt("6")
//		const uint256X5kG8XZ = await BAEpCocfqV.setAuctionFee.call(uintgXgtIYj, {from: accounts[2]});
//		const uint256P9w4luS = await BAEpCocfqV.createAuction.call(uinti3vYVsx, uintTtzCRYr, uintoYFG2dd, uintU16wHeG, {from: accounts[3]});
//		const uint256kSYAqTH = await BAEpCocfqV.buy.call(uintwokOjF2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EzAASnR = await BAEpCocfqV.setAuctionFee.call(uintaJgCxlN, {from: accounts[4]});

		await expect(BAEpCocfqV.setAuctionFee.call(uintgXgtIYj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const address2EReHy = accounts[3]
		const BAEaFl1WaP = await BAE.new(address2EReHy, {from: accounts[3]});
		const uintYimKRMi = BigInt("946")
		const uintZRidRNK = BigInt("1941")
		const uintVu0x9EM = BigInt("1776")
		const uintCYjH5VT = BigInt("1023")
		const uintAUzhsNG = BigInt("1683")
//		const uint256Ce1m4zL = await BAEaFl1WaP.concludeAuction.call(uintYimKRMi, {from: accounts[3]});
//		const uint256QZsuxNj = await BAEaFl1WaP.changePrintFee.call(uintZRidRNK, {from: accounts[1]});
//		const uint256bqfRhg = await BAEaFl1WaP.resetAuction.call(uintAUzhsNG, uintCYjH5VT, uintVu0x9EM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEaFl1WaP.concludeAuction.call(uintYimKRMi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressw6ssktY = accounts[1]
		const BAEJD0wOA = await BAE.new(addressw6ssktY, {from: accounts[4]});
		const uint6qen8U = BigInt("1697")
		const uintUny1w9q = BigInt("1082")
		const uintDmsuRpt = BigInt("1792")
		const uintNO6kdp8 = BigInt("1020")
		const uintRPpVX4B = BigInt("1110")
//		const uint256cWIPIwB = await BAEJD0wOA.buy.call(uint6qen8U, {from: accounts[4]});
//		const uint256zSrrv2R = await BAEJD0wOA.createAuction.call(uintRPpVX4B, uintNO6kdp8, uintDmsuRpt, uintUny1w9q, {from: accounts[5]});

		await expect(BAEJD0wOA.buy.call(uint6qen8U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshAhrDdR = accounts[0]
		const BAED1IuyFk = await BAE.new(addresshAhrDdR, {from: "0x0000000000000000000000000000000000000001"});
		const uintaHNHt3O = BigInt("454")
		const uintL0aEuU = BigInt("1182")
		const uintk8jlDaN = BigInt("461")
		const uintoXi7X7B = BigInt("918")
		const uintfx18uo6 = BigInt("1983")
		const uint256yiqZn0T = await BAED1IuyFk.createAuction.call(uintoXi7X7B, uintk8jlDaN, uintL0aEuU, uintaHNHt3O, {from: accounts[2]});
		const uint256YR1bhnv = await BAED1IuyFk.bid.call(uintfx18uo6, {from: accounts[2]});
	});

	it('test for BAE', async () => {
		const addressJxApzFX = accounts[1]
		const BAEJD0wOA = await BAE.new(addressJxApzFX, {from: accounts[4]});
		const uintijcKCcs = BigInt("1953")
		const uintWYXKQMY = BigInt("1554")
		const uintfUnYMGU = BigInt("458")
		const uintWc6QSPp = BigInt("1033")
		const uintvhsVWM = BigInt("807")
		const uintigIp6kY = BigInt("857")
		const uintleuoSFg = BigInt("1697")
//		const uint256jGNhKTZ = await BAEJD0wOA.createAuction.call(uintWc6QSPp, uintfUnYMGU, uintWYXKQMY, uintijcKCcs, {from: accounts[2]});
//		const uint256xMIsPLT = await BAEJD0wOA.setAuctionFee.call(uintvhsVWM, {from: accounts[2]});
//		const uint256gtHWmwR = await BAEJD0wOA.changePrintFee.call(uintigIp6kY, {from: accounts[1]});
//		const uint256cWIPIwB = await BAEJD0wOA.buy.call(uintleuoSFg, {from: accounts[4]});

		await expect(BAEJD0wOA.createAuction.call(uintWc6QSPp, uintfUnYMGU, uintWYXKQMY, uintijcKCcs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressC93J0D = accounts[1]
		const BAEJD0wOA = await BAE.new(addressC93J0D, {from: accounts[4]});
		const uintbxRhYoo = BigInt("1109")
		const uintQZYwHbl = BigInt("1671")
//		const uint256XznICtw = await BAEJD0wOA.bid.call(uintbxRhYoo, {from: accounts[1]});
//		const uint256cWIPIwB = await BAEJD0wOA.buy.call(uintQZYwHbl, {from: accounts[4]});

		await expect(BAEJD0wOA.bid.call(uintbxRhYoo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})