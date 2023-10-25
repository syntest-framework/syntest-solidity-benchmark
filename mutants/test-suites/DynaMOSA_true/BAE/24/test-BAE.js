const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressMPU97fR = accounts[2]
		const BAEjldx6GC = await BAE.new(addressMPU97fR, {from: accounts[2]});
		const uintqp2gPKz = BigInt("259")
		const uintdSBynRu = BigInt("2046")
		const uintc7I28H5 = BigInt("1983")
		const uintt9rS7hH = BigInt("1418")
		const uintaDBjIpH = BigInt("2029")
		const uintWmf2dLo = BigInt("345")
//		const uint256NbInc3u = await BAEjldx6GC.setAuctionFee.call(uintqp2gPKz, {from: accounts[2]});
//		const uint256tR99hJY = await BAEjldx6GC.buy.call(uintdSBynRu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WIYF88 = await BAEjldx6GC.changePrintFee.call(uintc7I28H5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256phR70yI = await BAEjldx6GC.resetAuction.call(uintWmf2dLo, uintaDBjIpH, uintt9rS7hH, {from: accounts[0]});

		await expect(BAEjldx6GC.setAuctionFee.call(uintqp2gPKz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressEJXYvY = accounts[0]
		const BAEcfSE9OT = await BAE.new(addressEJXYvY, {from: accounts[2]});
		const uintO9FObw = BigInt("932")
		const uintP9DQ4Uc = BigInt("1333")
//		const uint2561FIec8 = await BAEcfSE9OT.buy.call(uintO9FObw, {from: accounts[3]});
//		const uint256x2iVCRz = await BAEcfSE9OT.changePrintFee.call(uintP9DQ4Uc, {from: accounts[4]});

		await expect(BAEcfSE9OT.buy.call(uintO9FObw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressMhy15NS = accounts[4]
		const BAEPWspJHP = await BAE.new(addressMhy15NS, {from: accounts[0]});
		const uintvxdZ4Ly = BigInt("148")
		const uintTRNHmfK = BigInt("1465")
		const uintjeDq2V8 = BigInt("1336")
//		const uint256wY9wejX = await BAEPWspJHP.bid.call(uintvxdZ4Ly, {from: accounts[2]});
//		const uint256VlYgiZ4 = await BAEPWspJHP.setAuctionFee.call(uintTRNHmfK, {from: accounts[3]});
//		const uint256nH0s6pC = await BAEPWspJHP.setAuctionFee.call(uintjeDq2V8, {from: accounts[3]});

		await expect(BAEPWspJHP.bid.call(uintvxdZ4Ly, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshma1yw9 = accounts[3]
		const BAEdIThYcO = await BAE.new(addresshma1yw9, {from: accounts[1]});
		const uintTFlAvtn = BigInt("804")
		const uintY1ltnzE = BigInt("1907")
		const uintemmivWf = BigInt("1911")
		const uintFkgmZS1 = BigInt("1007")
		const uintx2qAxFE = BigInt("587")
		const uintBTJqNM1 = BigInt("1395")
		const uintbqVgVrs = BigInt("636")
		const uintLOFrTvf = BigInt("1358")
//		const uint256m4NM09U = await BAEdIThYcO.createAuction.call(uintFkgmZS1, uintemmivWf, uintY1ltnzE, uintTFlAvtn, {from: accounts[1]});
//		const uint256zsMcQcG = await BAEdIThYcO.createAuction.call(uintLOFrTvf, uintbqVgVrs, uintBTJqNM1, uintx2qAxFE, {from: accounts[5]});

		await expect(BAEdIThYcO.createAuction.call(uintFkgmZS1, uintemmivWf, uintY1ltnzE, uintTFlAvtn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressYYUsu3I = accounts[2]
		const BAErYw6JDj = await BAE.new(addressYYUsu3I, {from: "0x0000000000000000000000000000000000000001"});
		const uintS0YBr7n = BigInt("1611")
		const uintel2xT37 = BigInt("1299")
		const uint9b0Cur = BigInt("460")
		const uintIcnffbr = BigInt("1288")
		const uintunYm97 = BigInt("288")
		const uintaqoTc3 = BigInt("1968")
		const uintwLV1Gf8 = BigInt("1249")
		const uintkZlb6e = BigInt("268")
		const uintf072cu = BigInt("1499")
		const uintELzwg7Z = BigInt("797")
		const uintvDfBCWB = BigInt("452")
		const uintFvV2NRF = BigInt("1006")
		const uintiabV8i = BigInt("1345")
		const uintMcn7KFm = BigInt("223")
		const uint256WYJkLgk = await BAErYw6JDj.createAuction.call(uintIcnffbr, uint9b0Cur, uintel2xT37, uintS0YBr7n, {from: accounts[5]});
		const uint256u1OaWB = await BAErYw6JDj.createAuction.call(uintkZlb6e, uintwLV1Gf8, uintaqoTc3, uintunYm97, {from: accounts[4]});
		const uint256jYWzP5i = await BAErYw6JDj.bid.call(uintf072cu, {from: accounts[0]});
		const uint256Ez9FETG = await BAErYw6JDj.buy.call(uintELzwg7Z, {from: accounts[1]});
		const uint256IkIVAIe = await BAErYw6JDj.createAuction.call(uintMcn7KFm, uintiabV8i, uintFvV2NRF, uintvDfBCWB, {from: accounts[0]});
	});

	it('test for BAE', async () => {
		const addressPVWsUu = accounts[0]
		const BAEcfSE9OT = await BAE.new(addressPVWsUu, {from: accounts[2]});
		const uintDtYmjZ = BigInt("877")
		const uintINavLf7 = BigInt("1973")
		const uintcImPsK = BigInt("1861")
		const uintnB7qmJP = BigInt("932")
//		const uint256taZws6h = await BAEcfSE9OT.resetAuction.call(uintcImPsK, uintINavLf7, uintDtYmjZ, {from: accounts[1]});
//		const uint2561FIec8 = await BAEcfSE9OT.buy.call(uintnB7qmJP, {from: accounts[3]});

		await expect(BAEcfSE9OT.resetAuction.call(uintcImPsK, uintINavLf7, uintDtYmjZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressGv15O3X = accounts[0]
		const BAEcfSE9OT = await BAE.new(addressGv15O3X, {from: accounts[2]});
		const uintpaQmSz8 = BigInt("2010")
		const uintuLdqNpv = BigInt("811")
		const uinthpZdCvy = BigInt("1926")
		const uintk1AVTeQ = BigInt("261")
		const uintR2v2P0L = BigInt("1965")
		const uintzapN6Ja = BigInt("966")
//		const uint256hrVK9aK = await BAEcfSE9OT.concludeAuction.call(uintpaQmSz8, {from: accounts[0]});
//		const uint256pBJVv0R = await BAEcfSE9OT.resetAuction.call(uintk1AVTeQ, uinthpZdCvy, uintuLdqNpv, {from: accounts[4]});
//		const uint256nXR5Puf = await BAEcfSE9OT.changePrintFee.call(uintR2v2P0L, {from: accounts[5]});
//		const uint2561FIec8 = await BAEcfSE9OT.buy.call(uintzapN6Ja, {from: accounts[3]});

		await expect(BAEcfSE9OT.concludeAuction.call(uintpaQmSz8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})