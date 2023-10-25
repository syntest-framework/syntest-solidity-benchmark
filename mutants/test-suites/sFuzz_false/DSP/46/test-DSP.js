const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPTT5r9KP = await DSP.new({from: accounts[0]});
		const uintgP84Xe5 = BigInt("659")
		const addressRr4mA0V = accounts[3]
		const uintIEvSeV = BigInt("1335")
		const addressGonNQTa = accounts[3]
		const addressDdr7JKB = "0x0000000000000000000000000000000000000001"
		const uintMcNVGq = BigInt("366")
		const addresshqEcHo9 = accounts[4]
		const addresswVlfDkG = "0x0000000000000000000000000000000000000001"
//		const boolTR0EFf8 = await DSPTT5r9KP.unlock.call(addressRr4mA0V, uintgP84Xe5, {from: accounts[0]});
//		const boolXV0xABz = await DSPTT5r9KP.paused.call({from: accounts[1]});
//		const boolXuyHwCB = await DSPTT5r9KP.increaseAllowance.call(addressGonNQTa, uintIEvSeV, {from: accounts[2]});
//		const boolkqhskDj = await DSPTT5r9KP.freezeAccount.call(addressDdr7JKB, {from: accounts[3]});
//		const booloyCHnHS = await DSPTT5r9KP.transferFrom.call(addresswVlfDkG, addresshqEcHo9, uintMcNVGq, {from: accounts[1]});

		await expect(DSPTT5r9KP.unlock.call(addressRr4mA0V, uintgP84Xe5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringoq73irJ = "g2dpgsPS97MqsM"
		const stringxVd0S2t = "3wJXXkju"
		const uintt0rCICK = BigInt("44")
		const DSPuYMnjvU = await DSP.new(stringoq73irJ, stringxVd0S2t, uintt0rCICK, {from: accounts[4]});
		const addressWkboOi6 = accounts[1]
		const uintNkhsNfZ = BigInt("287")
		const addresskhyCRM2 = accounts[0]
		const addressSuedOxM = accounts[0]
		const stringNwvXcZq = await DSPuYMnjvU.symbol.call({from: accounts[3]});
		const addressJ46xR8D = await DSPuYMnjvU.removePauser.call(addressWkboOi6, {from: accounts[1]});
		const boolePNjzNb = await DSPuYMnjvU.transferFrom.call(addressSuedOxM, addresskhyCRM2, uintNkhsNfZ, {from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPwuzPwJt = await DSP.new({from: accounts[4]});
		const uintoDBM3v = BigInt("1469")
		const addressPudPoc = accounts[2]
//		await DSPwuzPwJt.onlyPauser.call({from: accounts[5]});
//		const boolVl0kqrL = await DSPwuzPwJt.acceptOwnership.call({from: accounts[3]});
//		const boolxvF42U4 = await DSPwuzPwJt.transfer.call(addressPudPoc, uintoDBM3v, {from: accounts[5]});

		await expect(DSPwuzPwJt.onlyPauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJuJE08O = await DSP.new({from: accounts[1]});
		const uintQyi8UE = BigInt("685")
		const addressQi0Nb0S = accounts[1]
		const uintiEziUIQ = BigInt("86")
		const uinthJyc2h1 = BigInt("114")
		const addresskAiUzN9 = accounts[1]
		const uintH7lrnb = BigInt("1042")
		const addressRasseix = accounts[4]
		const boolFXOYoIr = await DSPJuJE08O.paused.call({from: accounts[1]});
//		const boolxTiQ13G = await DSPJuJE08O.mint.call(addressQi0Nb0S, uintQyi8UE, {from: accounts[3]});
//		const boolHkqqXGG = await DSPJuJE08O.transferWithLock.call(addresskAiUzN9, uinthJyc2h1, uintiEziUIQ, {from: accounts[1]});
//		const boolEPL3hK1 = await DSPJuJE08O.transfer.call(addressRasseix, uintH7lrnb, {from: accounts[4]});
//		const boolXVJeW4z = await DSPJuJE08O.paused.call({from: accounts[2]});

		assert.equal(boolFXOYoIr, false)
		await expect(DSPJuJE08O.mint.call(addressQi0Nb0S, uintQyi8UE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPMxeRQVW = await DSP.new({from: accounts[2]});
		const uintxzj2sZ8 = BigInt("1760")
		const uintLjeYeXP = BigInt("1434")
		const addressDJm7zj = accounts[1]
		const addressHvSLN1 = accounts[1]
		const uintF2ghnj2 = BigInt("1800")
		const addressPWlAcOZ = accounts[4]
		const addressOYTA51 = accounts[0]
//		const boolSHfh1q = await DSPMxeRQVW.lock.call(addressDJm7zj, uintLjeYeXP, uintxzj2sZ8, {from: accounts[2]});
//		const addressm88l8bb = await DSPMxeRQVW.notFrozen.call(addressHvSLN1, {from: accounts[5]});
//		const booliysjFGM = await DSPMxeRQVW.transferFrom.call(addressOYTA51, addressPWlAcOZ, uintF2ghnj2, {from: accounts[5]});
//		await DSPMxeRQVW.whenNotPaused.call({from: accounts[2]});

		await expect(DSPMxeRQVW.lock.call(addressDJm7zj, uintLjeYeXP, uintxzj2sZ8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressC18jxtL = accounts[4]
		const addresszngrvVG = accounts[1]
		const addressTaNEZc2 = accounts[1]
		const addressRcCgfY = accounts[4]
		const uintRLnKpIp = BigInt("465")
		const addressocAIwav = accounts[4]
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressC18jxtL, {from: accounts[4]});
//		const addressap3pNPy = await DSPyTChYfV.transferOwnership.call(addresszngrvVG, {from: accounts[0]});
//		const uint81BQcVk = await DSPyTChYfV.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressRcCgfY, addressTaNEZc2, {from: accounts[5]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressocAIwav, uintRLnKpIp, {from: accounts[4]});

		assert.equal(uint256GsqGDaG, BigInt("0"))
		await expect(DSPyTChYfV.transferOwnership.call(addresszngrvVG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintb1DbIO = BigInt("858")
		const addressyfQIGFY = accounts[1]
		const addressIZxNMik = accounts[4]
		const addressZrjbeK0 = accounts[4]
		const addressYQ9eBF = accounts[0]
		const addressLLinUUW = accounts[1]
		const addressHkvq4Q9 = accounts[2]
		const addressfRnm0mQ = accounts[4]
		const uintTCSupn = BigInt("465")
		const addressLm8zYjT = accounts[4]
//		const boolwrPXlaa = await DSPyTChYfV.transferFrom.call(addressIZxNMik, addressyfQIGFY, uintb1DbIO, {from: accounts[2]});
//		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressZrjbeK0, {from: accounts[4]});
//		const boolhJ4pHEG = await DSPyTChYfV.isPauser.call(addressYQ9eBF, {from: accounts[1]});
//		const addressap3pNPy = await DSPyTChYfV.transferOwnership.call(addressLLinUUW, {from: accounts[0]});
//		const uint81BQcVk = await DSPyTChYfV.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressfRnm0mQ, addressHkvq4Q9, {from: accounts[5]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressLm8zYjT, uintTCSupn, {from: accounts[4]});

		await expect(DSPyTChYfV.transferFrom.call(addressIZxNMik, addressyfQIGFY, uintb1DbIO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressg45PpF7 = accounts[4]
		const address4jOuSS = accounts[2]
		const addressyo7KuSV = accounts[4]
		const uintjJ3JABc = BigInt("465")
		const addressm6zTaJe = accounts[4]
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressg45PpF7, {from: accounts[4]});
		const uint81BQcVk = await DSPyTChYfV.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressyo7KuSV, address4jOuSS, {from: accounts[5]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressm6zTaJe, uintjJ3JABc, {from: accounts[4]});

		assert.equal(uint256GsqGDaG, BigInt("0"))
		assert.equal(uint256KOYds7k, BigInt("0"))
		assert.equal(uint81BQcVk, BigInt("18"))
		await expect(DSPyTChYfV.transfer.call(addressm6zTaJe, uintjJ3JABc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintmBM10eZ = BigInt("783")
		const uintaLrQPoY = BigInt("282")
		const addressREGWhJ = "0x0000000000000000000000000000000000000001"
		const addressKdPWGh = accounts[4]
		const addressbDkpAj5 = accounts[0]
		const addressQBeGb0B = accounts[3]
		const addressA8GV6p6 = accounts[4]
		const uintM5j6XIU = BigInt("465")
		const addressFtvccna = accounts[4]
//		const boolGN7rNE = await DSPyTChYfV.lock.call(addressREGWhJ, uintaLrQPoY, uintmBM10eZ, {from: accounts[5]});
//		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressKdPWGh, {from: accounts[4]});
//		const addressl2vINR8 = await DSPyTChYfV.addPauser.call(addressbDkpAj5, {from: accounts[4]});
//		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressA8GV6p6, addressQBeGb0B, {from: accounts[5]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressFtvccna, uintM5j6XIU, {from: accounts[4]});

		await expect(DSPyTChYfV.lock.call(addressREGWhJ, uintaLrQPoY, uintmBM10eZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintfFgPBa = BigInt("179")
		const addresswAboAdP = accounts[1]
		const addresscefG3LX = accounts[4]
		const addressVJJAok = accounts[2]
		const addressT015HO = accounts[5]
		const addressm3MGpbj = accounts[0]
		const uint6MsCkz = BigInt("465")
		const addressoEkphaM = accounts[4]
		const boolel4dv7I = await DSPyTChYfV.approve.call(addresswAboAdP, uintfFgPBa, {from: accounts[4]});
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addresscefG3LX, {from: accounts[4]});
		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressT015HO, addressVJJAok, {from: accounts[5]});
//		const addresskB9Y4r6 = await DSPyTChYfV.upgradeTo.call(addressm3MGpbj, {from: accounts[3]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressoEkphaM, uint6MsCkz, {from: accounts[4]});

		assert.equal(boolel4dv7I, true)
		assert.equal(uint256GsqGDaG, BigInt("0"))
		assert.equal(uint256KOYds7k, BigInt("0"))
		await expect(DSPyTChYfV.upgradeTo.call(addressm3MGpbj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressn20mCit = accounts[0]
		const addressMt0ao6p = accounts[1]
		const addressLIk2AKA = accounts[4]
		const addressoDol6W = accounts[3]
		const addressKG1lsns = accounts[4]
		const uintM52lEu = BigInt("465")
		const addressZwCft5n = accounts[4]
		const uint256YUYToa = await DSPyTChYfV.allowance.call(addressMt0ao6p, addressn20mCit, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressLIk2AKA, {from: accounts[4]});
		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressKG1lsns, addressoDol6W, {from: accounts[5]});
		const uint256XPDkDpq = await DSPyTChYfV.totalSupply.call({from: accounts[5]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressZwCft5n, uintM52lEu, {from: accounts[4]});
//		await DSPyTChYfV.unpause.call({from: accounts[3]});

		assert.equal(uint256GsqGDaG, BigInt("0"))
		assert.equal(uint256KOYds7k, BigInt("0"))
		assert.equal(uint256XPDkDpq, BigInt("100000000000000000000000000000"))
		assert.equal(uint256YUYToa, BigInt("0"))
		await expect(DSPyTChYfV.transfer.call(addressZwCft5n, uintM52lEu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressmD3banb = accounts[5]
		const uintCRsCuPz = BigInt("367")
		const addressGitkWtd = accounts[5]
		const uintQA0RbKW = BigInt("1384")
		const addressoTtUz93 = accounts[1]
		const addresszyTfnM0 = accounts[5]
		const addressKKlhmwK = accounts[2]
		const addressQLTfwvi = accounts[4]
		const uintw2cvLGh = BigInt("465")
		const addressIksXwr = accounts[4]
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressmD3banb, {from: accounts[4]});
		const boolvgjTMM2 = await DSPyTChYfV.increaseAllowance.call(addressGitkWtd, uintCRsCuPz, {from: accounts[1]});
//		const booleoLAEN = await DSPyTChYfV.transferFrom.call(addresszyTfnM0, addressoTtUz93, uintQA0RbKW, {from: accounts[0]});
//		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressQLTfwvi, addressKKlhmwK, {from: accounts[5]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addressIksXwr, uintw2cvLGh, {from: accounts[4]});

		assert.equal(boolvgjTMM2, true)
		assert.equal(uint256GsqGDaG, BigInt("0"))
		await expect(DSPyTChYfV.transferFrom.call(addresszyTfnM0, addressoTtUz93, uintQA0RbKW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressPTYfYCF = accounts[1]
		const addresso3SQqp9 = accounts[4]
		const addressziRmzxs = accounts[2]
		const addressKQoLUbj = accounts[4]
		const uintx28vrzk = BigInt("63")
		const uinto77Thnb = BigInt("1562")
		const addressXsxLy1b = "0x0000000000000000000000000000000000000001"
		const addressDOlem1K = await DSPyTChYfV.upgradeTo.call(addressPTYfYCF, {from: accounts[1]});
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addresso3SQqp9, {from: accounts[4]});
		const uint256KOYds7k = await DSPyTChYfV.allowance.call(addressKQoLUbj, addressziRmzxs, {from: accounts[5]});
//		const boolljdCAfw = await DSPyTChYfV.transferWithLock.call(addressXsxLy1b, uinto77Thnb, uintx28vrzk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GsqGDaG, BigInt("0"))
		assert.equal(uint256KOYds7k, BigInt("0"))
		await expect(DSPyTChYfV.transferWithLock.call(addressXsxLy1b, uinto77Thnb, uintx28vrzk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressrPRCodx = accounts[5]
//		await DSPyTChYfV.renouncePauser.call({from: accounts[2]});
//		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressrPRCodx, {from: accounts[4]});

		await expect(DSPyTChYfV.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintPjyBCbY = BigInt("975")
		const addresstoCdPkP = accounts[1]
		const uintmXsvpFD = BigInt("1384")
		const addressxIcxy66 = accounts[1]
		const addressXO0vfGO = accounts[6]
//		const boolyOF0ZEw = await DSPyTChYfV.decreaseAllowance.call(addresstoCdPkP, uintPjyBCbY, {from: accounts[1]});
//		const booleoLAEN = await DSPyTChYfV.transferFrom.call(addressXO0vfGO, addressxIcxy66, uintmXsvpFD, {from: accounts[0]});

		await expect(DSPyTChYfV.decreaseAllowance.call(addresstoCdPkP, uintPjyBCbY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPqLQQUV1 = await DSP.new({from: accounts[4]});
		const addressYNJaPD4 = accounts[3]
		const addressTfV74AO = accounts[2]
		const addressOlkdsMB = "0x0000000000000000000000000000000000000001"
		const addressFNCRHb = accounts[3]
		const boolvIdy6xm = await DSPqLQQUV1.isOwner.call(addressYNJaPD4, {from: accounts[3]});
		const uint256GrYESXv = await DSPqLQQUV1.allowance.call(addressOlkdsMB, addressTfV74AO, {from: accounts[0]});
		const uint256si6rgU = await DSPqLQQUV1.balanceOf.call(addressFNCRHb, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPqLQQUV1.f.call({from: accounts[2]});
//		const boolnJEV66Z = await DSPqLQQUV1.paused.call({from: accounts[3]});

		assert.equal(boolvIdy6xm, false)
		assert.equal(uint256GrYESXv, BigInt("0"))
		assert.equal(uint256si6rgU, BigInt("0"))
		await expect(DSPqLQQUV1.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressS4k9UQJ = accounts[4]
		const addressppJWQqF = accounts[0]
		const addresssyceW6h = accounts[5]
//		const boolwa1Bn7 = await DSPyTChYfV.unfreezeAccount.call(addressS4k9UQJ, {from: accounts[1]});
//		const addressvBLyOeU = await DSPyTChYfV.upgradeTo.call(addressppJWQqF, {from: accounts[5]});
//		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addresssyceW6h, {from: accounts[4]});

		await expect(DSPyTChYfV.unfreezeAccount.call(addressS4k9UQJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPW1lU4u4 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmHPibCS = BigInt("744")
		const addressv2goUJj = accounts[0]
		const addresslCaRc5V = accounts[5]
		const stringFL6DsTG = await DSPW1lU4u4.symbol.call({from: accounts[5]});
		await DSPW1lU4u4.f.call({from: accounts[3]});
		const boolXFs8TE = await DSPW1lU4u4.transfer.call(addressv2goUJj, uintmHPibCS, {from: accounts[0]});
		const boolyoAx73K = await DSPW1lU4u4.unfreezeAccount.call(addresslCaRc5V, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressxjftto = accounts[0]
		const addressxuQ10tJ = accounts[5]
		const boolomYKoLQ = await DSPyTChYfV.freezeAccount.call(addressxjftto, {from: accounts[1]});
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressxuQ10tJ, {from: accounts[4]});

		assert.equal(boolomYKoLQ, true)
		assert.equal(uint256GsqGDaG, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintVZW71Vh = BigInt("684")
		const addresscqE63J8 = accounts[2]
		const addressNQiXN9Q = accounts[5]
//		await DSPyTChYfV.pause.call({from: accounts[1]});
//		const boolkzuNQOO = await DSPyTChYfV.unlock.call(addresscqE63J8, uintVZW71Vh, {from: accounts[3]});
//		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressNQiXN9Q, {from: accounts[4]});

		await expect(DSPyTChYfV.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintzrU75MB = BigInt("1384")
		const addressoC3ca9 = accounts[2]
		const addressU8h0HP = accounts[5]
		const stringo78yIcl = await DSPyTChYfV.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const booleoLAEN = await DSPyTChYfV.transferFrom.call(addressU8h0HP, addressoC3ca9, uintzrU75MB, {from: accounts[0]});
//		const uint256b6qfxe = await DSPyTChYfV.totalSupply.call({from: accounts[2]});

		assert.equal(stringo78yIcl, "DSP")
		await expect(DSPyTChYfV.transferFrom.call(addressU8h0HP, addressoC3ca9, uintzrU75MB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const uintTGqlhgs = BigInt("340")
		const uintMCJ4efJ = BigInt("1834")
		const addressM1ORSvc = accounts[4]
		const addressniP9REY = accounts[1]
		const uintIoxNhp9 = BigInt("475")
		const addresszLd3qoR = accounts[4]
		const boolXcmllK4 = await DSPyTChYfV.transferWithLock.call(addressM1ORSvc, uintMCJ4efJ, uintTGqlhgs, {from: accounts[1]});
		const uint256vOLnjF8 = await DSPyTChYfV.balanceOf.call(addressniP9REY, {from: accounts[4]});
//		const booldobs1Od = await DSPyTChYfV.transfer.call(addresszLd3qoR, uintIoxNhp9, {from: accounts[4]});

		assert.equal(boolXcmllK4, true)
		assert.equal(uint256vOLnjF8, BigInt("100000000000000000000000000000"))
		await expect(DSPyTChYfV.transfer.call(addresszLd3qoR, uintIoxNhp9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyTChYfV = await DSP.new({from: accounts[1]});
		const addressIaTvUK2 = accounts[5]
		const addressV6IkaEy = accounts[4]
		const uint256GsqGDaG = await DSPyTChYfV.balanceOf.call(addressIaTvUK2, {from: accounts[4]});
//		const addressOGXMyCH = await DSPyTChYfV.removePauser.call(addressV6IkaEy, {from: accounts[1]});

		assert.equal(uint256GsqGDaG, BigInt("0"))
		await expect(DSPyTChYfV.removePauser.call(addressV6IkaEy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})