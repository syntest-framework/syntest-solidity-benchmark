const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressanWdTq = accounts[2]
		const FompLBB6BPF = await Fomp.new(addressanWdTq, {from: accounts[3]});
		const addressA0ZN4yl = accounts[5]
		const addressZVVdLD = accounts[5]
		const addresshf1mEIE = "0x0000000000000000000000000000000000000001"
		const uintxxeSP1o = BigInt("747")
		const addressEfbncQ5 = accounts[1]
		const addressk5msh4 = accounts[3]
		const byterKTxgKD = "0x0111160a0b1d0e0819200b011a0d1319112017011e090b0c1a101b17130d1706"
		const bytexAubq6p = "0x05111211100b18130e150d160618061e0213051c190c12050914051a0b100008"
		const uint0U0EX1 = BigInt("190")
		const uintwYoD5Si = BigInt("1337")
		const uintPqGWaFC = BigInt("142")
		const addressRoFcEEf = accounts[4]
		const uintY31wijA = BigInt("1538")
		const addressMyKlh4L = accounts[4]
		const uintn8fG0zI = await FompLBB6BPF.balanceOf.call(addressA0ZN4yl, {from: "0x0000000000000000000000000000000000000001"});
		const uint96pWBH97r = await FompLBB6BPF.getCurrentVotes.call(addressZVVdLD, {from: accounts[0]});
		const uint96ijAIUXz = await FompLBB6BPF.getCurrentVotes.call(addresshf1mEIE, {from: accounts[0]});
//		const booleZN97ef = await FompLBB6BPF.transferFrom.call(addressk5msh4, addressEfbncQ5, uintxxeSP1o, {from: accounts[2]});
//		const addressDWPVfkk = await FompLBB6BPF.delegateBySig.call(addressRoFcEEf, uintPqGWaFC, uintwYoD5Si, uint0U0EX1, bytexAubq6p, byterKTxgKD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyjB85eh = await FompLBB6BPF.approve.call(addressMyKlh4L, uintY31wijA, {from: accounts[5]});

		assert.equal(uint96ijAIUXz, BigInt("0"))
		assert.equal(uint96pWBH97r, BigInt("0"))
		assert.equal(uintn8fG0zI, BigInt("0"))
		await expect(FompLBB6BPF.transferFrom.call(addressk5msh4, addressEfbncQ5, uintxxeSP1o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressFHEyX2L = accounts[0]
		const Fompp4TPDZk = await Fomp.new(addressFHEyX2L, {from: accounts[4]});
		const bytey3L011 = "0x101c1411001c1e030102170207170e0818040a150c0e20140f1b020513091e12"
		const bytenxN7izF = "0x120e020c09101b1c0f0d1d18130a1e01010e0c010f1d0e201410101a180f1e03"
		const uintOKzbaed = BigInt("65")
		const uintv0qylHr = BigInt("130")
		const uintTYK1z2C = BigInt("828")
		const addressBDi8APl = accounts[3]
		const addressNR6R1E = accounts[2]
		const addressfExF3iG = accounts[0]
//		const addressEZj9Bu = await Fompp4TPDZk.delegateBySig.call(addressBDi8APl, uintTYK1z2C, uintv0qylHr, uintOKzbaed, bytenxN7izF, bytey3L011, {from: "0x0000000000000000000000000000000000000001"});
//		const uinthGqcbZa = await Fompp4TPDZk.balanceOf.call(addressNR6R1E, {from: accounts[0]});
//		const addressSKXHt26 = await Fompp4TPDZk.delegate.call(addressfExF3iG, {from: accounts[3]});

		await expect(Fompp4TPDZk.delegateBySig.call(addressBDi8APl, uintTYK1z2C, uintv0qylHr, uintOKzbaed, bytenxN7izF, bytey3L011, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressefs1z89 = accounts[2]
		const FompBKMB9wQ = await Fomp.new(addressefs1z89, {from: accounts[5]});
		const uintlQgC7Ve = BigInt("1732")
		const addressvLzma8m = accounts[0]
		const uintGzfumix = BigInt("1168")
		const addressTxjzYce = accounts[2]
		const addressBSFTFip = "0x0000000000000000000000000000000000000001"
		const addressfsHCx5z = accounts[2]
		const byteXWgqRsO = "0x0016131b09191b011f1a0317141a1607111e091c120b07190302060501190616"
		const bytebPksKmL = "0x05081c181b011a181a160b121d1a05040c17161f0f0e0a1b0220080b07041717"
		const uintOZZXzTb = BigInt("196")
		const uinta5mZl4 = BigInt("1375")
		const uintsBBxeAb = BigInt("1012")
		const addresscAkGzd6 = "0x0000000000000000000000000000000000000001"
		const boolRj7Aem = await FompBKMB9wQ.approve.call(addressvLzma8m, uintlQgC7Ve, {from: accounts[0]});
		const boolU0o29G9 = await FompBKMB9wQ.transfer.call(addressTxjzYce, uintGzfumix, {from: accounts[2]});
		const uintd78O1Tc = await FompBKMB9wQ.allowance.call(addressfsHCx5z, addressBSFTFip, {from: accounts[4]});
//		const addressr4A4Vk9 = await FompBKMB9wQ.delegateBySig.call(addresscAkGzd6, uintsBBxeAb, uinta5mZl4, uintOZZXzTb, bytebPksKmL, byteXWgqRsO, {from: accounts[1]});

		assert.equal(boolRj7Aem, true)
		assert.equal(boolU0o29G9, true)
		assert.equal(uintd78O1Tc, BigInt("0"))
		await expect(FompBKMB9wQ.delegateBySig.call(addresscAkGzd6, uintsBBxeAb, uinta5mZl4, uintOZZXzTb, bytebPksKmL, byteXWgqRsO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresscxHlLoC = accounts[3]
		const FompRTf7joH = await Fomp.new(addresscxHlLoC, {from: accounts[1]});
		const uintLzIB189 = BigInt("107")
		const address5g5iPN = accounts[2]
		const addressuF1WaTz = accounts[5]
		const addressh8GCkTz = accounts[4]
		const boolNA4pOep = await FompRTf7joH.approve.call(address5g5iPN, uintLzIB189, {from: accounts[0]});
		const uintQgi8IUb = await FompRTf7joH.balanceOf.call(addressuF1WaTz, {from: accounts[4]});
		const addressVjdCNiA = await FompRTf7joH.delegate.call(addressh8GCkTz, {from: accounts[0]});

		assert.equal(boolNA4pOep, true)
		assert.equal(uintQgi8IUb, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressa96rQHV = accounts[3]
		const FompfpnfyAu = await Fomp.new(addressa96rQHV, {from: accounts[2]});
		const uintPjVIJ9g = BigInt("1426")
		const addressWe7iOZV = accounts[0]
		const addressV854R5V = accounts[2]
		const uintagPdBb = BigInt("1274")
		const addressXdygfta = accounts[3]
		const addresscUwjIlR = accounts[2]
//		const boolsAgbwnj = await FompfpnfyAu.transfer.call(addressWe7iOZV, uintPjVIJ9g, {from: accounts[5]});
//		const addressivgtSx4 = await FompfpnfyAu.delegate.call(addressV854R5V, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfoDiHdV = await FompfpnfyAu.approve.call(addressXdygfta, uintagPdBb, {from: accounts[1]});
//		const addressVy92jyS = await FompfpnfyAu.delegate.call(addresscUwjIlR, {from: accounts[4]});

		await expect(FompfpnfyAu.transfer.call(addressWe7iOZV, uintPjVIJ9g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWi9y1hv = accounts[3]
		const FompRTf7joH = await Fomp.new(addressWi9y1hv, {from: accounts[1]});
		const uinthDi9js = BigInt("880")
		const addresssT5n6g = accounts[2]
		const addressLFSKLGi = accounts[5]
		const uintYX5qzRM = BigInt("1915")
		const addressGvFxu9i = accounts[0]
		const addressviDqT7N = accounts[4]
		const boolNA4pOep = await FompRTf7joH.approve.call(addresssT5n6g, uinthDi9js, {from: accounts[0]});
		const uintQgi8IUb = await FompRTf7joH.balanceOf.call(addressLFSKLGi, {from: accounts[4]});
		const uint96Sb4r9sJ = await FompRTf7joH.getPriorVotes.call(addressGvFxu9i, uintYX5qzRM, {from: accounts[3]});
		const addressVjdCNiA = await FompRTf7joH.delegate.call(addressviDqT7N, {from: accounts[0]});

		assert.equal(boolNA4pOep, true)
		assert.equal(uint96Sb4r9sJ, BigInt("0"))
		assert.equal(uintQgi8IUb, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressWQXepw = accounts[2]
		const Fompq8qHF5R = await Fomp.new(addressWQXepw, {from: "0x0000000000000000000000000000000000000001"});
		const uintbAWUhgm = BigInt("1101")
		const addressHgMEXAn = accounts[2]
		const addressey6IIe = accounts[4]
		const addresstwawwEf = accounts[4]
		const addressqbxduTK = accounts[4]
		const addressNY0kr5x = accounts[4]
		const addressmRwzbuF = accounts[4]
		const uint96IAHMgo = await Fompq8qHF5R.getPriorVotes.call(addressHgMEXAn, uintbAWUhgm, {from: accounts[5]});
		const uint96gd12H6u = await Fompq8qHF5R.getCurrentVotes.call(addressey6IIe, {from: accounts[2]});
		const uintvPpJ0dT = await Fompq8qHF5R.balanceOf.call(addresstwawwEf, {from: accounts[1]});
		const uinta4phPiV = await Fompq8qHF5R.allowance.call(addressNY0kr5x, addressqbxduTK, {from: accounts[4]});
		const uint96L6Xdws = await Fompq8qHF5R.getCurrentVotes.call(addressmRwzbuF, {from: accounts[3]});
	});

	it('test for Fomp', async () => {
		const addressL5TYW4e = accounts[3]
		const FompAPAwZFB = await Fomp.new(addressL5TYW4e, {from: accounts[3]});
		const addressVHOJ59E = "0x0000000000000000000000000000000000000001"
		const addressiEfEhO6 = accounts[1]
		const addresslT8dVGD = accounts[0]
		const uintX9g8r07 = BigInt("495")
		const addressNdZcGWR = accounts[3]
		const addressL0fHa8 = await FompAPAwZFB.delegate.call(addressVHOJ59E, {from: accounts[3]});
		const uintJtZgL5M = await FompAPAwZFB.allowance.call(addresslT8dVGD, addressiEfEhO6, {from: accounts[1]});
		const boolzL3YQ5f = await FompAPAwZFB.approve.call(addressNdZcGWR, uintX9g8r07, {from: accounts[4]});

		assert.equal(boolzL3YQ5f, true)
		assert.equal(uintJtZgL5M, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresswjGYUp4 = accounts[3]
		const FompRTf7joH = await Fomp.new(addresswjGYUp4, {from: accounts[1]});
		const uintbX1ZPMz = BigInt("6")
		const addressPT5jotw = accounts[1]
		const addresskpWghII = accounts[4]
		const uintjoRPD9W = BigInt("1150")
		const addresshdXPSXN = accounts[2]
		const addresssUednaZ = accounts[2]
		const uint96gyquADR = await FompRTf7joH.getPriorVotes.call(addressPT5jotw, uintbX1ZPMz, {from: accounts[1]});
		const addressVjdCNiA = await FompRTf7joH.delegate.call(addresskpWghII, {from: accounts[0]});
//		const boolVK3za2R = await FompRTf7joH.transferFrom.call(addresssUednaZ, addresshdXPSXN, uintjoRPD9W, {from: accounts[4]});

		assert.equal(uint96gyquADR, BigInt("0"))
		await expect(FompRTf7joH.transferFrom.call(addresssUednaZ, addresshdXPSXN, uintjoRPD9W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZuGSvZZ = accounts[3]
		const FompRTf7joH = await Fomp.new(addressZuGSvZZ, {from: accounts[1]});
		const byteC0sQvHQ = "0x14041d0a071c0c1b17121212001d0a141a1f180414180804031f180c05061001"
		const byteeG6NESE = "0x16030212060a1e1701041a001604150212170500091817041f0a0a041b150116"
		const uintUqsmjG9 = BigInt("28")
		const uint2FEfEI = BigInt("1855")
		const uinttvr2LY = BigInt("704")
		const address6pkF0a = accounts[4]
		const addresshDCSOR = accounts[3]
		const uintw2ihNKw = BigInt("6")
		const addressQdSfT34 = accounts[3]
//		const addressYzmCdbN = await FompRTf7joH.delegateBySig.call(address6pkF0a, uinttvr2LY, uint2FEfEI, uintUqsmjG9, byteeG6NESE, byteC0sQvHQ, {from: accounts[2]});
//		const uint96cOvEiiF = await FompRTf7joH.getCurrentVotes.call(addresshDCSOR, {from: accounts[0]});
//		const uint96gyquADR = await FompRTf7joH.getPriorVotes.call(addressQdSfT34, uintw2ihNKw, {from: accounts[1]});

		await expect(FompRTf7joH.delegateBySig.call(address6pkF0a, uinttvr2LY, uint2FEfEI, uintUqsmjG9, byteeG6NESE, byteC0sQvHQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})