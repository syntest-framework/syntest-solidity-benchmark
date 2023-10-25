const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressLThIcg3 = accounts[0]
		const BAEPapPUFv = await BAE.new(addressLThIcg3, {from: accounts[2]});
		const uintk8Sb0iy = BigInt("1205")
		const uintQvfV13 = BigInt("710")
		const uintQNofbLf = BigInt("1647")
		const uintAXoNp5z = BigInt("558")
		const uintpO0zVQ = BigInt("355")
		const uintzylB35k = BigInt("1553")
		const uintYuN7Kjz = BigInt("44")
		const uintzwpNKTi = BigInt("1818")
		const uintv0YKaZr = BigInt("788")
		const uintHwrR5U5 = BigInt("2003")
		const uintBBiht7J = BigInt("1538")
//		const uint256dDuF7rq = await BAEPapPUFv.createAuction.call(uintAXoNp5z, uintQNofbLf, uintQvfV13, uintk8Sb0iy, {from: accounts[5]});
//		const uint256xzy34Qe = await BAEPapPUFv.createAuction.call(uintzwpNKTi, uintYuN7Kjz, uintzylB35k, uintpO0zVQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZI43pa7 = await BAEPapPUFv.resetAuction.call(uintBBiht7J, uintHwrR5U5, uintv0YKaZr, {from: accounts[3]});

		await expect(BAEPapPUFv.createAuction.call(uintAXoNp5z, uintQNofbLf, uintQvfV13, uintk8Sb0iy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressVAFubmH = accounts[1]
		const BAEBqJikFp = await BAE.new(addressVAFubmH, {from: accounts[1]});
		const uinttG2dS4d = BigInt("1191")
		const uintcTc3yYn = BigInt("89")
		const uintLsxZRCo = BigInt("1270")
		const uinttZQllNH = BigInt("869")
		const uintOPW7l8 = BigInt("837")
//		const uint2562BGGyO = await BAEBqJikFp.concludeAuction.call(uinttG2dS4d, {from: accounts[0]});
//		const uint256KN6gny = await BAEBqJikFp.changePrintFee.call(uintcTc3yYn, {from: accounts[3]});
//		const uint256SZQ3M4p = await BAEBqJikFp.concludeAuction.call(uintLsxZRCo, {from: accounts[1]});
//		const uint256tGtie4 = await BAEBqJikFp.setAuctionFee.call(uinttZQllNH, {from: accounts[5]});
//		const uint256spqm1cA = await BAEBqJikFp.concludeAuction.call(uintOPW7l8, {from: accounts[2]});

		await expect(BAEBqJikFp.concludeAuction.call(uinttG2dS4d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressce46jLw = accounts[3]
		const BAETvvlPb4 = await BAE.new(addressce46jLw, {from: accounts[0]});
		const uinta3Ajgmo = BigInt("245")
		const uintO3kbLjU = BigInt("442")
		const uintcjPrmMe = BigInt("1580")
		const uintTcJMmFb = BigInt("116")
		const uintirYOq5o = BigInt("1043")
		const uintx7Lf1oz = BigInt("1292")
		const uintYfKvwIj = BigInt("665")
		const uintN7oBerI = BigInt("1775")
		const uintql8CtFn = BigInt("1321")
		const uintgvbUcEu = BigInt("514")
		const uintZW9qU3a = BigInt("1359")
		const uintgYZL9Kd = BigInt("758")
		const uintDGZP3Oq = BigInt("504")
		const uintlHaoZnf = BigInt("1727")
//		const uint256RGYqxiy = await BAETvvlPb4.setAuctionFee.call(uinta3Ajgmo, {from: accounts[3]});
//		const uint256z5dlH2 = await BAETvvlPb4.resetAuction.call(uintTcJMmFb, uintcjPrmMe, uintO3kbLjU, {from: accounts[0]});
//		const uint256y6RqU8a = await BAETvvlPb4.resetAuction.call(uintYfKvwIj, uintx7Lf1oz, uintirYOq5o, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mPaaITg = await BAETvvlPb4.createAuction.call(uintZW9qU3a, uintgvbUcEu, uintql8CtFn, uintN7oBerI, {from: accounts[3]});
//		const uint256cL1B8M = await BAETvvlPb4.resetAuction.call(uintlHaoZnf, uintDGZP3Oq, uintgYZL9Kd, {from: accounts[3]});

		await expect(BAETvvlPb4.setAuctionFee.call(uinta3Ajgmo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspZMZ2hc = accounts[0]
		const BAEF0AZuzn = await BAE.new(addresspZMZ2hc, {from: accounts[3]});
		const uintD0IL5Ye = BigInt("277")
		const uintSPFYBz8 = BigInt("1497")
		const uintIMQ0W1T = BigInt("1727")
		const uintEsE7SC4 = BigInt("1564")
		const uintjRLhXhu = BigInt("862")
		const uintozvaQ45 = BigInt("1466")
//		const uint256OsETd2B = await BAEF0AZuzn.bid.call(uintD0IL5Ye, {from: accounts[1]});
//		const uint256Z3duIQA = await BAEF0AZuzn.createAuction.call(uintjRLhXhu, uintEsE7SC4, uintIMQ0W1T, uintSPFYBz8, {from: accounts[0]});
//		const uint256XWn89vO = await BAEF0AZuzn.buy.call(uintozvaQ45, {from: accounts[0]});

		await expect(BAEF0AZuzn.bid.call(uintD0IL5Ye, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressbbjvPHq = accounts[4]
		const BAEarYOp8i = await BAE.new(addressbbjvPHq, {from: accounts[2]});
		const uintIxt74ef = BigInt("1270")
		const uintYGPLt0f = BigInt("839")
		const uintgvjrzC = BigInt("1950")
		const uintBSHO3E4 = BigInt("1830")
		const uinttfqqtgW = BigInt("1452")
//		const uint256ojK5sy1 = await BAEarYOp8i.buy.call(uintIxt74ef, {from: accounts[4]});
//		const uint256es2mFw = await BAEarYOp8i.concludeAuction.call(uintYGPLt0f, {from: accounts[3]});
//		const uint256TEy0ClZ = await BAEarYOp8i.setAuctionFee.call(uintgvjrzC, {from: accounts[5]});
//		const uint256iHwPNyz = await BAEarYOp8i.bid.call(uintBSHO3E4, {from: accounts[1]});
//		const uint256mr9vDY7 = await BAEarYOp8i.setAuctionFee.call(uinttfqqtgW, {from: accounts[2]});

		await expect(BAEarYOp8i.buy.call(uintIxt74ef, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressjSEqCuL = accounts[2]
		const BAEoFlRexH = await BAE.new(addressjSEqCuL, {from: accounts[1]});
		const uintogk5M60 = BigInt("1373")
		const uintkXuNX5J = BigInt("287")
		const uintg5XwD4r = BigInt("1673")
		const uintUBQDD9p = BigInt("26")
//		const uint256ZZKmzYN = await BAEoFlRexH.resetAuction.call(uintg5XwD4r, uintkXuNX5J, uintogk5M60, {from: accounts[3]});
//		const uint256tZqIPZ = await BAEoFlRexH.buy.call(uintUBQDD9p, {from: accounts[0]});

		await expect(BAEoFlRexH.resetAuction.call(uintg5XwD4r, uintkXuNX5J, uintogk5M60, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressIT1hiPJ = accounts[1]
		const BAEQDTmj2Y = await BAE.new(addressIT1hiPJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintK6wDJ1 = BigInt("278")
		const uintsBcsfz5 = BigInt("844")
		const uintEEyJl56 = BigInt("325")
		const uint256kQHADE2 = await BAEQDTmj2Y.concludeAuction.call(uintK6wDJ1, {from: accounts[0]});
		const uint256qD8g7d6 = await BAEQDTmj2Y.buy.call(uintsBcsfz5, {from: accounts[0]});
		const uint256ZAOY17 = await BAEQDTmj2Y.buy.call(uintEEyJl56, {from: accounts[3]});
	});
})