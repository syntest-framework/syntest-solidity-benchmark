const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addresse3JprW5 = "0x0000000000000000000000000000000000000001"
		const LayerxYUuDx9m = await Layerx.new(addresse3JprW5, {from: accounts[4]});
		const uintxdTvLX9 = BigInt("690")
		const addressSYwxhTy = accounts[2]
		const boolxBt4hi9 = false
		const boolLHgREPf = await LayerxYUuDx9m.transfer.call(addressSYwxhTy, uintxdTvLX9, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxYUuDx9m.unlock.call({from: accounts[1]});
//		const boolhxs2mb = await LayerxYUuDx9m.setIsPaused.call(boolxBt4hi9, {from: accounts[2]});

		assert.equal(boolLHgREPf, true)
		await expect(LayerxYUuDx9m.unlock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnfhe3sQ = accounts[0]
		const LayerxP0t6Be0 = await Layerx.new(addressnfhe3sQ, {from: accounts[1]});
		const uintOuj2K3F = BigInt("861")
		const addressOFKdybo = accounts[3]
		const addressu59ngY = accounts[4]
//		const uintCNxd6vA = await LayerxP0t6Be0.lock.call(uintOuj2K3F, {from: accounts[2]});
//		const addressOjOiwxL = await LayerxP0t6Be0.setNewStakeCreator.call(addressOFKdybo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKzrmYas = await LayerxP0t6Be0.setNewStakeCreator.call(addressu59ngY, {from: accounts[2]});

		await expect(LayerxP0t6Be0.lock.call(uintOuj2K3F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrf8nIQM = accounts[0]
		const LayerxaA3LSLr = await Layerx.new(addressrf8nIQM, {from: accounts[5]});
		const bytemjJgB19 = "0x16171810031d120e1b1420111416171a061a160b1a07171d060a1d18"
		const uintOhQALcU = BigInt("2010")
		const addressOsKiemr = accounts[1]
		const uintzEbixnA = BigInt("399")
		const addresse8fQX9G = accounts[5]
//		await LayerxaA3LSLr.paused.call({from: accounts[3]});
//		const booleG45NIZ = await LayerxaA3LSLr.approveAndCall.call(addressOsKiemr, uintOhQALcU, bytemjJgB19, {from: accounts[2]});
//		const boolrduTe3x = await LayerxaA3LSLr.approve.call(addresse8fQX9G, uintzEbixnA, {from: accounts[3]});
//		const uintnWVccD = await LayerxaA3LSLr.totalSupply.call({from: accounts[3]});

		await expect(LayerxaA3LSLr.paused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskPVN2Os = accounts[4]
		const LayerxxroVzza = await Layerx.new(addresskPVN2Os, {from: accounts[1]});
		const uintuB6g6D1 = BigInt("792")
		const addressVrnhUWl = "0x0000000000000000000000000000000000000001"
		const uintLJS3c2C = BigInt("1529")
		const uintbCdWHG = await LayerxxroVzza.getStakesNum.call({from: accounts[0]});
		const booldnMDGRm = await LayerxxroVzza.approve.call(addressVrnhUWl, uintuB6g6D1, {from: accounts[3]});
//		await LayerxxroVzza.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintcGf4yxS = await LayerxxroVzza.exist.call(uintLJS3c2C, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxxroVzza.f.call({from: accounts[1]});

		assert.equal(booldnMDGRm, true)
		assert.equal(uintbCdWHG, BigInt("1"))
		await expect(LayerxxroVzza.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressiew2cf = accounts[3]
		const LayerxYiPwldT = await Layerx.new(addressiew2cf, {from: accounts[4]});
		const uintr32T2Dm = BigInt("928")
		const addressX9sgl7O = accounts[2]
		const addressFS6nPLf = accounts[0]
		const addressuozZFyL = "0x0000000000000000000000000000000000000001"
		const uint5MatHi = BigInt("125")
		const uintpn1ieSi = BigInt("493")
//		const boolLykkZXK = await LayerxYiPwldT.transferFrom.call(addressFS6nPLf, addressX9sgl7O, uintr32T2Dm, {from: accounts[1]});
//		const addressOEWS7tj = await LayerxYiPwldT.transferOwnership.call(addressuozZFyL, {from: accounts[1]});
//		const uintIwHdyW = await LayerxYiPwldT.withdraw.call(uint5MatHi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256h7CWYc3 = await LayerxYiPwldT.burn.call(uintpn1ieSi, {from: accounts[2]});

		await expect(LayerxYiPwldT.transferFrom.call(addressFS6nPLf, addressX9sgl7O, uintr32T2Dm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressk80cwIx = accounts[4]
		const Layerxu7w3gWe = await Layerx.new(addressk80cwIx, {from: accounts[3]});
		const boolzcPQblp = false
		const boolOYk9SC = await Layerxu7w3gWe.setIsPaused.call(boolzcPQblp, {from: accounts[4]});
//		await Layerxu7w3gWe.onlyOwner.call({from: accounts[2]});
//		await Layerxu7w3gWe.unlock.call({from: accounts[4]});

		await expect(Layerxu7w3gWe.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressiuAckRx = accounts[0]
		const LayerxlJnvaaV = await Layerx.new(addressiuAckRx, {from: accounts[4]});
		const uintsQtdGVJ = BigInt("737")
		const addressHa7FUZ1 = accounts[1]
		const uint6SZPhH = BigInt("690")
		const addressydHvrI = accounts[2]
//		await LayerxlJnvaaV.addStakePayment.call({from: accounts[2]});
//		const boolcJlRiKs = await LayerxlJnvaaV.approve.call(addressHa7FUZ1, uintsQtdGVJ, {from: accounts[1]});
//		const uintuiNORwA = await LayerxlJnvaaV.exist.call(uint6SZPhH, {from: accounts[2]});
//		const addressws9k9II = await LayerxlJnvaaV.setNewStakeCreator.call(addressydHvrI, {from: accounts[2]});

		await expect(LayerxlJnvaaV.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshACXGfQ = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addresshACXGfQ, {from: accounts[0]});
		const addressfZcIUc4 = accounts[4]
		const addressWFoHYVL = "0x0000000000000000000000000000000000000001"
		const uintYSCUrj0 = BigInt("398")
		const addressuStPkp6 = accounts[0]
		const addressl9IOh18 = accounts[1]
		const addressjEcMcZX = accounts[4]
		const uintAxneFcH = BigInt("1134")
		const addressA8drBI = accounts[0]
		const uintnOtPX8e = await LayerxRPyu15p.allowance.call(addressWFoHYVL, addressfZcIUc4, {from: accounts[2]});
//		const boolXk8Zbwr = await LayerxRPyu15p.transfer.call(addressuStPkp6, uintYSCUrj0, {from: accounts[1]});
//		const uintUxHTSoU = await LayerxRPyu15p.allowance.call(addressjEcMcZX, addressl9IOh18, {from: accounts[0]});
//		const boolGzG6Ome = await LayerxRPyu15p.approve.call(addressA8drBI, uintAxneFcH, {from: accounts[2]});
//		await LayerxRPyu15p.paused.call({from: accounts[0]});

		assert.equal(uintnOtPX8e, BigInt("0"))
		await expect(LayerxRPyu15p.transfer.call(addressuStPkp6, uintYSCUrj0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGFoYXoy = accounts[0]
		const LayerxP0t6Be0 = await Layerx.new(addressGFoYXoy, {from: accounts[1]});
		const addressncGcmfa = accounts[2]
		const uintI04IRg4 = BigInt("861")
		const uintd67KMGN = BigInt("851")
		const addressOuTUNEq = accounts[0]
		const addressZs56o4k = "0x0000000000000000000000000000000000000001"
		const addresscahlrq = accounts[5]
		const uintMwZIm1w = await LayerxP0t6Be0.balanceOf.call(addressncGcmfa, {from: accounts[4]});
//		const uintCNxd6vA = await LayerxP0t6Be0.lock.call(uintI04IRg4, {from: accounts[2]});
//		const boolerY74eL = await LayerxP0t6Be0.transfer.call(addressOuTUNEq, uintd67KMGN, {from: accounts[4]});
//		const addressOjOiwxL = await LayerxP0t6Be0.setNewStakeCreator.call(addressZs56o4k, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKzrmYas = await LayerxP0t6Be0.setNewStakeCreator.call(addresscahlrq, {from: accounts[2]});

		assert.equal(uintMwZIm1w, BigInt("0"))
		await expect(LayerxP0t6Be0.lock.call(uintI04IRg4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressOTKkjHW = "0x0000000000000000000000000000000000000001"
		const LayerxYUuDx9m = await Layerx.new(addressOTKkjHW, {from: accounts[4]});
		const uintn0geMni = BigInt("690")
		const addressMwnjpxf = accounts[0]
		const boolxBt4hi9 = false
		const boolLHgREPf = await LayerxYUuDx9m.transfer.call(addressMwnjpxf, uintn0geMni, {from: "0x0000000000000000000000000000000000000001"});
		const uintxDhzrmY = await LayerxYUuDx9m.totalSupply.call({from: accounts[3]});
//		const boolhxs2mb = await LayerxYUuDx9m.setIsPaused.call(boolxBt4hi9, {from: accounts[2]});

		assert.equal(boolLHgREPf, true)
		assert.equal(uintxDhzrmY, BigInt("40000000000000000000000"))
		await expect(LayerxYUuDx9m.setIsPaused.call(boolxBt4hi9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDz9mPRB = accounts[0]
		const Layerxg7RqTP0 = await Layerx.new(addressDz9mPRB, {from: accounts[2]});
		const addressVeYZDlv = accounts[0]
		const uintpGWlte1 = BigInt("325")
		const uintGRyLuHg = BigInt("141")
		const bytefc4CAvg = "0x10150314070417031e101905150a01020e1a1b1502"
		const uintPSOrVYB = BigInt("1629")
		const addressO7KJvlb = accounts[0]
		const addresshBDL1tG = await Layerxg7RqTP0.transferOwnership.call(addressVeYZDlv, {from: accounts[0]});
//		const uintqlz2JP = await Layerxg7RqTP0.exist.call(uintpGWlte1, {from: accounts[5]});
//		const uintPweb3v1 = await Layerxg7RqTP0.withdraw.call(uintGRyLuHg, {from: accounts[2]});
//		const booljHYIPwl = await Layerxg7RqTP0.approveAndCall.call(addressO7KJvlb, uintPSOrVYB, bytefc4CAvg, {from: accounts[2]});

		await expect(Layerxg7RqTP0.exist.call(uintpGWlte1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressO24VDS4 = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addressO24VDS4, {from: accounts[0]});
		const byteIMJK8lC = "0x171200170a13021c19190509030b"
		const uintHdJSQXM = BigInt("459")
		const addresstUGeGpx = accounts[0]
//		const boolNf9hR8 = await LayerxRPyu15p.approveAndCall.call(addresstUGeGpx, uintHdJSQXM, byteIMJK8lC, {from: accounts[5]});
//		await LayerxRPyu15p.paused.call({from: accounts[0]});

		await expect(LayerxRPyu15p.approveAndCall.call(addresstUGeGpx, uintHdJSQXM, byteIMJK8lC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssj67Sva = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addresssj67Sva, {from: accounts[0]});
		const uintcK98EQ5 = BigInt("1637")
//		const uintufyvHsr = await LayerxRPyu15p.withdraw.call(uintcK98EQ5, {from: accounts[0]});
//		await LayerxRPyu15p.paused.call({from: accounts[0]});

		await expect(LayerxRPyu15p.withdraw.call(uintcK98EQ5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshjqsucO = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addresshjqsucO, {from: accounts[0]});
//		await LayerxRPyu15p.f.call({from: accounts[5]});
//		await LayerxRPyu15p.paused.call({from: accounts[0]});

		await expect(LayerxRPyu15p.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrjm49ho = accounts[3]
		const LayerxZzeXstH = await Layerx.new(addressrjm49ho, {from: "0x0000000000000000000000000000000000000001"});
		const uintEZIUNyP = BigInt("1969")
		const byteivdwLIa = "0x17041d1d0213021c0303011d010f100603130116171901"
		const uinta9seQTk = BigInt("272")
		const addressUxWDIDS = accounts[4]
		const boollAUK9lW = true
		const addressofEGAVZ = accounts[3]
		const addressyAvgDxy = accounts[4]
		const uintFUAykYF = BigInt("1999")
		const addressjpxyIlf = accounts[2]
		const uint256nsEyQBj = await LayerxZzeXstH.burn.call(uintEZIUNyP, {from: accounts[1]});
		const boolpI89L16 = await LayerxZzeXstH.approveAndCall.call(addressUxWDIDS, uinta9seQTk, byteivdwLIa, {from: accounts[0]});
		const boolV5OK1Rc = await LayerxZzeXstH.setIsPaused.call(boollAUK9lW, {from: accounts[1]});
		const addressyvUynF = await LayerxZzeXstH.setNewStakeCreator.call(addressofEGAVZ, {from: accounts[2]});
		const addressSBCZbDA = await LayerxZzeXstH.transferOwnership.call(addressyAvgDxy, {from: accounts[2]});
		const booluUxpTd2 = await LayerxZzeXstH.approve.call(addressjpxyIlf, uintFUAykYF, {from: accounts[1]});
	});

	it('test for Layerx', async () => {
		const addressmv9NEOy = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addressmv9NEOy, {from: accounts[0]});
		const uintrC1kA0 = await LayerxRPyu15p.getStakesNum.call({from: accounts[1]});
//		await LayerxRPyu15p.addStakePayment.call({from: accounts[4]});
//		await LayerxRPyu15p.paused.call({from: accounts[0]});

		assert.equal(uintrC1kA0, BigInt("1"))
		await expect(LayerxRPyu15p.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssuMa3sN = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addresssuMa3sN, {from: accounts[0]});
		const addressL8nP6op = accounts[4]
		const uintbWU9Vk = BigInt("789")
		const uintG0FaLHj = BigInt("1117")
		const addressJ0pQaEH = await LayerxRPyu15p.setNewStakeCreator.call(addressL8nP6op, {from: accounts[4]});
//		const uintpf2YRt = await LayerxRPyu15p.lock.call(uintbWU9Vk, {from: accounts[2]});
//		const uintrC1kA0 = await LayerxRPyu15p.getStakesNum.call({from: accounts[1]});
//		await LayerxRPyu15p.addStakePayment.call({from: accounts[4]});
//		await LayerxRPyu15p.paused.call({from: accounts[0]});
//		const uintGPnQb4r = await LayerxRPyu15p.exist.call(uintG0FaLHj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxRPyu15p.lock.call(uintbWU9Vk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqQuDTjF = accounts[4]
		const LayerxRPyu15p = await Layerx.new(addressqQuDTjF, {from: accounts[0]});
		const uintX3vrelK = BigInt("1050")
		const addressx91wsfQ = accounts[2]
		const uint256sTkl7vF = await LayerxRPyu15p.burn.call(uintX3vrelK, {from: accounts[4]});
//		const addressJ0jp1ji = await LayerxRPyu15p.transferOwnership.call(addressx91wsfQ, {from: accounts[1]});
//		await LayerxRPyu15p.addStakePayment.call({from: accounts[4]});

		await expect(LayerxRPyu15p.transferOwnership.call(addressx91wsfQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})