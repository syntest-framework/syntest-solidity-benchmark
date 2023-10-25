const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintDLD9qza = BigInt("350")
		const stringH2O54w = "3glCdhkLG8hXF8Xl7VBCNUe6cYBHlmh7F2f1R8sL8nRqyeDA76uVseJgg47fWOP9E9ZM4i8imILwaJRti3ijZQwnK"
		const stringUEaMRPX = "OSkByYC8isgzbYMckYQ0G9GoGVoJIRDdvbciDYTNB1WVQ1O9y2n"
		const GFCkTlHeyn = await GFC.new(uintDLD9qza, stringH2O54w, stringUEaMRPX, {from: "0x0000000000000000000000000000000000000001"});
		const uintX1g4K1A = BigInt("1460")
		const uintQ8Ixpv = BigInt("1210")
		const byte7rzVXn = "0x0213171d031f0d141f1d1f141b1515"
		const uintsZLy1NR = BigInt("668")
		const addressxIm5Ee = accounts[2]
		const boolRROZr6B = await GFCkTlHeyn.burn.call(uintX1g4K1A, {from: accounts[4]});
		const boolt6XrqWa = await GFCkTlHeyn.burn.call(uintQ8Ixpv, {from: accounts[1]});
		const boolfJNwrDi = await GFCkTlHeyn.approveAndCall.call(addressxIm5Ee, uintsZLy1NR, byte7rzVXn, {from: accounts[4]});
	});

	it('test for GFC', async () => {
		const uintEQNezB4 = BigInt("1701")
		const stringRoBKz02 = "kWJofx221"
		const stringHRR0yOD = "4b6TnLXSlP9AW3BTKovfIjO3b2XJNSopuBTFquge4hTtVf"
		const GFCVv1MIFN = await GFC.new(uintEQNezB4, stringRoBKz02, stringHRR0yOD, {from: accounts[0]});
		const uintYocd3n7 = BigInt("1049")
		const addressYbeAkJS = accounts[0]
		const byteUbyRHZs = "0x061a1406060a07120d1d091a01131c060b09011e0d1f011f0f0907080f0a1d"
		const uintVscrbLu = BigInt("1423")
		const addressLb4HO1 = accounts[4]
		const uintlKXmu7 = BigInt("1327")
		const addressAmo04zt = accounts[0]
//		const bool9pzos0 = await GFCVv1MIFN.burnFrom.call(addressYbeAkJS, uintYocd3n7, {from: accounts[2]});
//		const booltcg1SeE = await GFCVv1MIFN.approveAndCall.call(addressLb4HO1, uintVscrbLu, byteUbyRHZs, {from: accounts[3]});
//		const booljiGSB7L = await GFCVv1MIFN.approve.call(addressAmo04zt, uintlKXmu7, {from: accounts[3]});

		await expect(GFCVv1MIFN.burnFrom.call(addressYbeAkJS, uintYocd3n7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintWnkOylQ = BigInt("965")
		const stringW4HWbEW = "0"
		const stringUT4JroK = "g2TKXEDGlvaUCEhd25mK7UFqQGgaJ6D7r9I7EamTrPdJTl1Yo8Dk2yJaKMNLfEL"
		const GFCtWVzp8f = await GFC.new(uintWnkOylQ, stringW4HWbEW, stringUT4JroK, {from: accounts[2]});
		const uintoRFtTnb = BigInt("1175")
		const addressvTsmNkl = accounts[5]
		const addressayHc9hA = accounts[0]
		const byteZIS4l1c = "0x0d06121a1a0a1e0308021d08101611130b181a13001d04011b001d"
		const uintnMkZYUE = BigInt("1869")
		const addressbbzCvGS = accounts[4]
		const byteH1vUcKn = "0x0e000b0307020d0c18091b09070d110b06071a030e16"
		const uintcSyBn7t = BigInt("382")
		const addressMJZUIXd = accounts[4]
		const uintyFAbyEj = BigInt("1480")
		const uintzSNXKY = BigInt("1111")
		const addressaU5CTo2 = accounts[1]
//		const boolvsK40ie = await GFCtWVzp8f.transferFrom.call(addressayHc9hA, addressvTsmNkl, uintoRFtTnb, {from: accounts[0]});
//		const boolCPWKYHl = await GFCtWVzp8f.approveAndCall.call(addressbbzCvGS, uintnMkZYUE, byteZIS4l1c, {from: accounts[4]});
//		const boolotskxK6 = await GFCtWVzp8f.approveAndCall.call(addressMJZUIXd, uintcSyBn7t, byteH1vUcKn, {from: accounts[4]});
//		const booluZcy6eR = await GFCtWVzp8f.burn.call(uintyFAbyEj, {from: accounts[3]});
//		const boolELZdHmc = await GFCtWVzp8f.transfer.call(addressaU5CTo2, uintzSNXKY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCtWVzp8f.transferFrom.call(addressayHc9hA, addressvTsmNkl, uintoRFtTnb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintqkPN6Uj = BigInt("540")
		const stringPCFtkZ6 = "cevNhKPrZu4Y5yOmPyO8DlsWM9sTu7MLgXXf2ue6tRRNuNeAINcPz7oFHLB5wNSXL0NsUVGt92sY6Y1F0wLJb5TRqknbZ"
		const stringaStSOmf = "mvPIfAgWiUcCEK"
		const GFCV1h0YHs = await GFC.new(uintqkPN6Uj, stringPCFtkZ6, stringaStSOmf, {from: accounts[0]});
		const uintFjqLKzd = BigInt("1636")
		const uintQZkA7hb = BigInt("1731")
		const addressrkzbhRR = accounts[2]
		const uintRq8NRcb = BigInt("1805")
		const addressK4IKoF9 = accounts[5]
		const uintoeimaR = BigInt("393")
		const addressjim4xf = accounts[3]
//		const boolHB6foz2 = await GFCV1h0YHs.burn.call(uintFjqLKzd, {from: accounts[3]});
//		const boolfVgp64 = await GFCV1h0YHs.burnFrom.call(addressrkzbhRR, uintQZkA7hb, {from: accounts[3]});
//		const boolDLEOnm1 = await GFCV1h0YHs.approve.call(addressK4IKoF9, uintRq8NRcb, {from: accounts[4]});
//		const boolhreupDf = await GFCV1h0YHs.transfer.call(addressjim4xf, uintoeimaR, {from: accounts[4]});

		await expect(GFCV1h0YHs.burn.call(uintFjqLKzd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintft9uVT = BigInt("566")
		const stringXUxNoh = "NfCeME7mR9krMR60dsBwyeAm2Cp5PvUhBxS3sjXwVhB8FkK4s9bL26HgzrYycTRXRLx64JI9yTxSCTvYakiE7L9mPUCxh3r"
		const string4Cpy5m = "IOcqWw7irMPof6LFzvexjjaVijgeDpCq0pTg"
		const GFCqQwbz4m = await GFC.new(uintft9uVT, stringXUxNoh, string4Cpy5m, {from: accounts[5]});
		const bytevOYTTrk = "0x141317091c0c1012081d041c0e1202180f1a0f1d0a1b0b1c0b"
		const uintRJLLzJl = BigInt("778")
		const addressvhqZKTv = accounts[4]
		const uintxlQz6pV = BigInt("867")
		const addressLVOrk2p = accounts[1]
		const uinthxP1AoR = BigInt("71")
//		const boolcW97d7o = await GFCqQwbz4m.approveAndCall.call(addressvhqZKTv, uintRJLLzJl, bytevOYTTrk, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwDyxZZe = await GFCqQwbz4m.approve.call(addressLVOrk2p, uintxlQz6pV, {from: accounts[4]});
//		const booljjv88l = await GFCqQwbz4m.burn.call(uinthxP1AoR, {from: accounts[5]});

		await expect(GFCqQwbz4m.approveAndCall.call(addressvhqZKTv, uintRJLLzJl, bytevOYTTrk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintYU95pEm = BigInt("1734")
		const stringvryvhHE = "L"
		const stringHdbbaGA = "ynzKnsgSMdyB4ZHyQndvQgrD9yfEy4WRjpc1vTiK6sRJDgMg39ECIwX"
		const GFCCWPtMk = await GFC.new(uintYU95pEm, stringvryvhHE, stringHdbbaGA, {from: accounts[2]});
		const uinti35ycWI = BigInt("997")
		const addressjx9sDQW = accounts[4]
		const uintZ2DO8x8 = BigInt("1534")
		const addressIfjeBlA = accounts[0]
		const boolhgDkrG = await GFCCWPtMk.transfer.call(addressjx9sDQW, uinti35ycWI, {from: accounts[2]});
//		const boolygwcAu9 = await GFCCWPtMk.transfer.call(addressIfjeBlA, uintZ2DO8x8, {from: accounts[3]});

		assert.equal(boolhgDkrG, true)
		await expect(GFCCWPtMk.transfer.call(addressIfjeBlA, uintZ2DO8x8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})