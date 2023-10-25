const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringjduSaGj = "D"
		const stringAjhjqw9 = "ayKIL8NUPP1PdQVcvw8VtBJqLtlhlDgAj5u6w8DUnKehzu4xXHA0s"
		const uintT0bFsMd = BigInt("4")
		const DSPWBomuB = await DSP.new(stringjduSaGj, stringAjhjqw9, uintT0bFsMd, {from: accounts[2]});
		const addressXdwv1us = accounts[4]
		const addressAZ0xyzC = accounts[1]
		const addressTWdJ0rM = await DSPWBomuB.transferOwnership.call(addressXdwv1us, {from: accounts[5]});
		const boolg7X1fYd = await DSPWBomuB.isPauser.call(addressAZ0xyzC, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPNJDholu = await DSP.new({from: accounts[2]});
		const addressG2v6oNF = accounts[2]
		const addressJUwMcm1 = accounts[5]
//		const addressNGmk2V = await DSPNJDholu.removePauser.call(addressG2v6oNF, {from: accounts[1]});
//		await DSPNJDholu.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		await DSPNJDholu.pause.call({from: accounts[4]});
//		const addressvaMqgK7 = await DSPNJDholu.notFrozen.call(addressJUwMcm1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPNJDholu.removePauser.call(addressG2v6oNF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const addressFcqCvSx = accounts[5]
		const addressxG28Qj6 = accounts[4]
		const boolo5doSgi = await DSPCntvwD.isOwner.call(addressFcqCvSx, {from: "0x0000000000000000000000000000000000000001"});
//		const booliK9MAa2 = await DSPCntvwD.freezeAccount.call(addressxG28Qj6, {from: accounts[4]});

		assert.equal(boolo5doSgi, false)
		await expect(DSPCntvwD.freezeAccount.call(addressxG28Qj6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPUmQ0We5 = await DSP.new({from: accounts[4]});
		const addressjyu7agW = accounts[3]
		const addressOte3pJW = accounts[3]
		const addressB35gyd7 = accounts[4]
//		const addressqdc9dBb = await DSPUmQ0We5.removePauser.call(addressjyu7agW, {from: accounts[4]});
//		const addresslrXYrZw = await DSPUmQ0We5.removePauser.call(addressOte3pJW, {from: accounts[1]});
//		const addressAK7FgnG = await DSPUmQ0We5.transferOwnership.call(addressB35gyd7, {from: accounts[4]});

		await expect(DSPUmQ0We5.removePauser.call(addressjyu7agW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintLY60QPr = BigInt("1733")
		const addressuI4ctdv = "0x0000000000000000000000000000000000000001"
		const addressJGObEzp = accounts[5]
		const addressqTqPqem = accounts[4]
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addressuI4ctdv, uintLY60QPr, {from: accounts[0]});
//		const boolo5doSgi = await DSPCntvwD.isOwner.call(addressJGObEzp, {from: "0x0000000000000000000000000000000000000001"});
//		const booliK9MAa2 = await DSPCntvwD.freezeAccount.call(addressqTqPqem, {from: accounts[4]});

		await expect(DSPCntvwD.transfer.call(addressuI4ctdv, uintLY60QPr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPUmQ0We5 = await DSP.new({from: accounts[4]});
		const address2m5tdZ = accounts[4]
		const addressrD48H8C = accounts[4]
		const addressqdc9dBb = await DSPUmQ0We5.removePauser.call(address2m5tdZ, {from: accounts[4]});
		const addressAK7FgnG = await DSPUmQ0We5.transferOwnership.call(addressrD48H8C, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const addressdf7RxeJ = accounts[4]
		const uintC9Tp8xg = BigInt("639")
		const addressUII0swn = accounts[1]
		const addresspXNNROp = accounts[0]
		const addressonp750z = accounts[1]
		const stringq9KhuNE = await DSPVDQAmd2.name.call({from: accounts[1]});
		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addressdf7RxeJ, {from: accounts[3]});
//		await DSPVDQAmd2.renouncePauser.call({from: accounts[0]});
//		const boolTglij8s = await DSPVDQAmd2.transferFrom.call(addresspXNNROp, addressUII0swn, uintC9Tp8xg, {from: accounts[1]});
//		const uint256bgIjPnv = await DSPVDQAmd2.balanceOf.call(addressonp750z, {from: accounts[1]});

		assert.equal(stringq9KhuNE, "DSP")
		assert.equal(uint256BVfnqh8, BigInt("100000000000000000000000000000"))
		await expect(DSPVDQAmd2.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintjikUhYI = BigInt("1733")
		const addressUJnZQP = "0x0000000000000000000000000000000000000001"
		const addressQYFL1jc = accounts[5]
		const addresspWeNiY = accounts[4]
//		await DSPCntvwD.onlyPauser.call({from: accounts[5]});
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addressUJnZQP, uintjikUhYI, {from: accounts[0]});
//		const boolo5doSgi = await DSPCntvwD.isOwner.call(addressQYFL1jc, {from: "0x0000000000000000000000000000000000000001"});
//		const booliK9MAa2 = await DSPCntvwD.freezeAccount.call(addresspWeNiY, {from: accounts[4]});

		await expect(DSPCntvwD.onlyPauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const addresswoPJQ1m = accounts[4]
		const uintGXoIeWV = BigInt("1535")
		const addresssxXSf1i = accounts[3]
		const uintc8EPVz = BigInt("1979")
		const addressl884nPa = accounts[4]
		const addressTg1sQwB = accounts[0]
		const uintx1z94lC = BigInt("639")
		const addressZoABCT = accounts[1]
		const addressGoV4tfH = accounts[0]
		const addressfe2mTbW = accounts[1]
		const stringq9KhuNE = await DSPVDQAmd2.name.call({from: accounts[1]});
		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addresswoPJQ1m, {from: accounts[3]});
		const uint8SZcFCs2 = await DSPVDQAmd2.decimals.call({from: accounts[1]});
//		const boolK0wsgFS = await DSPVDQAmd2.transfer.call(addresssxXSf1i, uintGXoIeWV, {from: accounts[2]});
//		await DSPVDQAmd2.renouncePauser.call({from: accounts[0]});
//		const boolpptOg3b = await DSPVDQAmd2.transferFrom.call(addressTg1sQwB, addressl884nPa, uintc8EPVz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTglij8s = await DSPVDQAmd2.transferFrom.call(addressGoV4tfH, addressZoABCT, uintx1z94lC, {from: accounts[1]});
//		const uint256bgIjPnv = await DSPVDQAmd2.balanceOf.call(addressfe2mTbW, {from: accounts[1]});

		assert.equal(stringq9KhuNE, "DSP")
		assert.equal(uint256BVfnqh8, BigInt("100000000000000000000000000000"))
		assert.equal(uint8SZcFCs2, BigInt("18"))
		await expect(DSPVDQAmd2.transfer.call(addresssxXSf1i, uintGXoIeWV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uinta645kkV = BigInt("1477")
		const addressx52sHoT = accounts[0]
		const addressxko4zcP = accounts[1]
		const addressGNXPjP = accounts[5]
		const uintqLlnORu = BigInt("138")
		const addressoR1bgbX = accounts[1]
		const addressSmco2oo = accounts[3]
		const addressG73oiy = accounts[5]
//		const boolcciPI8 = await DSPCntvwD.transferFrom.call(addressxko4zcP, addressx52sHoT, uinta645kkV, {from: accounts[4]});
//		const boolo5doSgi = await DSPCntvwD.isOwner.call(addressGNXPjP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolH02uWW3 = await DSPCntvwD.transfer.call(addressoR1bgbX, uintqLlnORu, {from: accounts[4]});
//		const addressrQe9euk = await DSPCntvwD.transferOwnership.call(addressSmco2oo, {from: accounts[0]});
//		await DSPCntvwD.whenNotPaused.call({from: accounts[0]});
//		const booliK9MAa2 = await DSPCntvwD.freezeAccount.call(addressG73oiy, {from: accounts[4]});

		await expect(DSPCntvwD.transferFrom.call(addressxko4zcP, addressx52sHoT, uinta645kkV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const addressSGAjr0 = accounts[3]
		const addresssx36bS = accounts[4]
		const uintPXfODr = BigInt("639")
		const addressaaudUyi = accounts[1]
		const addressSN5MAiK = accounts[0]
		const addresswjRdlo1 = accounts[1]
		const uintBUis3sP = BigInt("1163")
		const addresscel4lab = accounts[0]
		const addressEyw1f3j = accounts[5]
		const stringq9KhuNE = await DSPVDQAmd2.name.call({from: accounts[1]});
		const addressglqxSWg = await DSPVDQAmd2.addPauser.call(addressSGAjr0, {from: accounts[4]});
		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addresssx36bS, {from: accounts[3]});
//		await DSPVDQAmd2.renouncePauser.call({from: accounts[0]});
//		const boolTglij8s = await DSPVDQAmd2.transferFrom.call(addressSN5MAiK, addressaaudUyi, uintPXfODr, {from: accounts[1]});
//		const uint256bgIjPnv = await DSPVDQAmd2.balanceOf.call(addresswjRdlo1, {from: accounts[1]});
//		const boolUyiL1xx = await DSPVDQAmd2.transferFrom.call(addressEyw1f3j, addresscel4lab, uintBUis3sP, {from: accounts[4]});

		assert.equal(stringq9KhuNE, "DSP")
		assert.equal(uint256BVfnqh8, BigInt("100000000000000000000000000000"))
		await expect(DSPVDQAmd2.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const addresscG003sV = accounts[1]
		const addresseNLUwvb = accounts[0]
		const addressYllf4ai = accounts[4]
		const uintWzSYJP2 = BigInt("639")
		const addressvD13R2t = accounts[1]
		const addressO2q0amc = accounts[0]
		const addressATsSmIw = accounts[1]
		const uint256dyyTDVs = await DSPVDQAmd2.allowance.call(addresseNLUwvb, addresscG003sV, {from: accounts[5]});
		const stringq9KhuNE = await DSPVDQAmd2.name.call({from: accounts[1]});
		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addressYllf4ai, {from: accounts[3]});
//		await DSPVDQAmd2.renouncePauser.call({from: accounts[0]});
//		const boolTglij8s = await DSPVDQAmd2.transferFrom.call(addressO2q0amc, addressvD13R2t, uintWzSYJP2, {from: accounts[1]});
//		const uint256bgIjPnv = await DSPVDQAmd2.balanceOf.call(addressATsSmIw, {from: accounts[1]});

		assert.equal(stringq9KhuNE, "DSP")
		assert.equal(uint256BVfnqh8, BigInt("100000000000000000000000000000"))
		assert.equal(uint256dyyTDVs, BigInt("0"))
		await expect(DSPVDQAmd2.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintPEn0dgq = BigInt("1978")
		const addressGTy41pg = accounts[4]
		const uintmx7kJAe = BigInt("1733")
		const addressHd1HNNK = "0x0000000000000000000000000000000000000001"
		const boolQLoNYp4 = await DSPCntvwD.increaseAllowance.call(addressGTy41pg, uintPEn0dgq, {from: accounts[2]});
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addressHd1HNNK, uintmx7kJAe, {from: accounts[0]});

		assert.equal(boolQLoNYp4, true)
		await expect(DSPCntvwD.transfer.call(addressHd1HNNK, uintmx7kJAe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintH5xZcpn = BigInt("1733")
		const addressTvb0uE7 = "0x0000000000000000000000000000000000000002"
		const boolvHKPxUA = await DSPCntvwD.paused.call({from: accounts[3]});
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addressTvb0uE7, uintH5xZcpn, {from: accounts[0]});

		assert.equal(boolvHKPxUA, false)
		await expect(DSPCntvwD.transfer.call(addressTvb0uE7, uintH5xZcpn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintIOWjm5b = BigInt("1733")
		const addressfM8FAdO = "0x0000000000000000000000000000000000000002"
		const uint256rVeJ5qn = await DSPCntvwD.totalSupply.call({from: accounts[3]});
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addressfM8FAdO, uintIOWjm5b, {from: accounts[0]});

		assert.equal(uint256rVeJ5qn, BigInt("100000000000000000000000000000"))
		await expect(DSPCntvwD.transfer.call(addressfM8FAdO, uintIOWjm5b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPecooBnz = await DSP.new({from: accounts[2]});
		const addressnlNmSz9 = accounts[3]
		const uinthxzZLqe = BigInt("1785")
		const addresskNa4bDQ = accounts[1]
		const uintPiAyUME = BigInt("1168")
		const addressfERIjMa = accounts[5]
		const addressFcGwUvN = accounts[4]
		const uintQDhrx6Y = BigInt("420")
		const addressdMsfZHi = accounts[3]
//		const boolwuhVJ5 = await DSPecooBnz.unfreezeAccount.call(addressnlNmSz9, {from: accounts[2]});
//		const boolYY3zGbf = await DSPecooBnz.transfer.call(addresskNa4bDQ, uinthxzZLqe, {from: "0x0000000000000000000000000000000000000001"});
//		const boollQmP2aJ = await DSPecooBnz.transferFrom.call(addressFcGwUvN, addressfERIjMa, uintPiAyUME, {from: accounts[3]});
//		await DSPecooBnz.whenNotPaused.call({from: accounts[0]});
//		const boolyzWrZe = await DSPecooBnz.mint.call(addressdMsfZHi, uintQDhrx6Y, {from: accounts[1]});

		await expect(DSPecooBnz.unfreezeAccount.call(addressnlNmSz9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const uintAWMWXXx = BigInt("878")
		const addressAgMGH3C = accounts[4]
		const addressDQXPrpo = accounts[4]
		const uintuesoWuw = BigInt("639")
		const addressrcWD8TD = accounts[1]
		const addressoMigbho = accounts[1]
		const stringq9KhuNE = await DSPVDQAmd2.name.call({from: accounts[1]});
//		const boolXWhKmHM = await DSPVDQAmd2.decreaseAllowance.call(addressAgMGH3C, uintAWMWXXx, {from: accounts[1]});
//		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addressDQXPrpo, {from: accounts[3]});
//		await DSPVDQAmd2.renouncePauser.call({from: accounts[0]});
//		const boolTglij8s = await DSPVDQAmd2.transferFrom.call(addressoMigbho, addressrcWD8TD, uintuesoWuw, {from: accounts[1]});

		assert.equal(stringq9KhuNE, "DSP")
		await expect(DSPVDQAmd2.decreaseAllowance.call(addressAgMGH3C, uintAWMWXXx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFWTDXJL = await DSP.new({from: accounts[1]});
		const uintZBAvqo8 = BigInt("1110")
		const addressCtDI5cE = accounts[0]
		const addressc9Ft2ds = accounts[1]
		const uintpLWFshn = BigInt("1009")
		const addresswKTEIyT = accounts[1]
		const addresstERMfab = accounts[3]
		const uintWvhB889 = BigInt("67")
		const addressXlbcCE = accounts[1]
		const boolFU4IhCN = await DSPFWTDXJL.transfer.call(addressCtDI5cE, uintZBAvqo8, {from: accounts[1]});
		const boolp60AI08 = await DSPFWTDXJL.isOwner.call(addressc9Ft2ds, {from: accounts[0]});
		const boolaW81D1F = await DSPFWTDXJL.paused.call({from: accounts[1]});
//		const boolzfRiCdU = await DSPFWTDXJL.transferFrom.call(addresstERMfab, addresswKTEIyT, uintpLWFshn, {from: accounts[5]});
//		const boolpCin77i = await DSPFWTDXJL.mint.call(addressXlbcCE, uintWvhB889, {from: accounts[1]});

		assert.equal(boolFU4IhCN, true)
		assert.equal(boolaW81D1F, false)
		assert.equal(boolp60AI08, true)
		await expect(DSPFWTDXJL.transferFrom.call(addresstERMfab, addresswKTEIyT, uintpLWFshn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uint4EcxHj = BigInt("1504")
		const addressgPte3VQ = accounts[0]
		const addressyDW4vEb = "0x0000000000000000000000000000000000000001"
		const uintWBmNfS3 = BigInt("643")
		const addressNTvybPu = accounts[1]
		const addressiA9vow9 = accounts[2]
		const uintOXaDQn3 = BigInt("403")
		const addressVzdlvM1 = accounts[1]
		const addressat4cGJ = accounts[1]
		const addresswf8jRF3 = accounts[4]
//		await DSPCntvwD.pause.call({from: accounts[2]});
//		const boolatDzjT = await DSPCntvwD.transferFrom.call(addressyDW4vEb, addressgPte3VQ, uint4EcxHj, {from: accounts[3]});
//		const boolvG6XfB0 = await DSPCntvwD.transferFrom.call(addressiA9vow9, addressNTvybPu, uintWBmNfS3, {from: accounts[2]});
//		const boolMGMuh5b = await DSPCntvwD.transfer.call(addressVzdlvM1, uintOXaDQn3, {from: accounts[1]});
//		const boolAHCUnEY = await DSPCntvwD.unfreezeAccount.call(addressat4cGJ, {from: accounts[3]});
//		const booliK9MAa2 = await DSPCntvwD.freezeAccount.call(addresswf8jRF3, {from: accounts[4]});

		await expect(DSPCntvwD.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPecooBnz = await DSP.new({from: accounts[2]});
		const uintCIR6HvY = BigInt("347")
		const addresscsFWF13 = accounts[1]
		const addressegoVDbE = accounts[3]
		const uintFXmwxVH = BigInt("1168")
		const addressB3dHcDB = accounts[5]
		const addressIE579ja = accounts[4]
		const uintK5NlrHN = BigInt("420")
		const addressgRSRbRP = accounts[4]
		const boolKzjyoX = await DSPecooBnz.mint.call(addresscsFWF13, uintCIR6HvY, {from: accounts[2]});
//		const boolwuhVJ5 = await DSPecooBnz.unfreezeAccount.call(addressegoVDbE, {from: accounts[2]});
//		const boollQmP2aJ = await DSPecooBnz.transferFrom.call(addressIE579ja, addressB3dHcDB, uintFXmwxVH, {from: accounts[3]});
//		const boolyzWrZe = await DSPecooBnz.mint.call(addressgRSRbRP, uintK5NlrHN, {from: accounts[1]});

		assert.equal(boolKzjyoX, true)
		await expect(DSPecooBnz.unfreezeAccount.call(addressegoVDbE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPo6aE2x = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOutu0w = accounts[1]
		const uintyLHQfJt = BigInt("1734")
		const addresseBkFLye = "0x0000000000000000000000000000000000000001"
		const addressCutrn3T = accounts[1]
		const addressm3YtjsY = accounts[4]
		const boolVftrE61 = await DSPo6aE2x.isOwner.call(addressOutu0w, {from: accounts[4]});
		const boolz95Q4sN = await DSPo6aE2x.paused.call({from: accounts[1]});
		const stringAQuAovj = await DSPo6aE2x.name.call({from: accounts[0]});
		const boolrMOHNDe = await DSPo6aE2x.transferFrom.call(addressCutrn3T, addresseBkFLye, uintyLHQfJt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RarCo0a = await DSPo6aE2x.balanceOf.call(addressm3YtjsY, {from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintqNmw7Xr = BigInt("884")
		const addressRBqRQ1N = accounts[0]
		const addressi5bfL6 = accounts[0]
		const uintRfS6ANW = BigInt("1733")
		const addresssYQPHSQ = "0x0000000000000000000000000000000000000002"
		const booltJ2En7 = await DSPCntvwD.approve.call(addressRBqRQ1N, uintqNmw7Xr, {from: accounts[0]});
		const uint256K6FEWmI = await DSPCntvwD.balanceOf.call(addressi5bfL6, {from: accounts[1]});
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addresssYQPHSQ, uintRfS6ANW, {from: accounts[0]});

		assert.equal(booltJ2En7, true)
		assert.equal(uint256K6FEWmI, BigInt("0"))
		await expect(DSPCntvwD.transfer.call(addresssYQPHSQ, uintRfS6ANW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const uintZsdSk3 = BigInt("1425")
		const uintxzVtPoJ = BigInt("765")
		const addressAz5OUlY = accounts[5]
		const addressgJcAvYL = accounts[5]
		const booltyHjzhk = await DSPVDQAmd2.transferWithLock.call(addressAz5OUlY, uintxzVtPoJ, uintZsdSk3, {from: accounts[4]});
		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addressgJcAvYL, {from: accounts[3]});

		assert.equal(booltyHjzhk, true)
		assert.equal(uint256BVfnqh8, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const uintPxN3p4A = BigInt("1737")
		const addressjfwgtdR = "0x0000000000000000000000000000000000000002"
//		await DSPCntvwD.f.call({from: accounts[3]});
//		const boolr1UJjUK = await DSPCntvwD.transfer.call(addressjfwgtdR, uintPxN3p4A, {from: accounts[0]});

		await expect(DSPCntvwD.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVDQAmd2 = await DSP.new({from: accounts[4]});
		const uintT4AezpA = BigInt("1406")
		const uintmyovxR = BigInt("1053")
		const addressPdTmij0 = accounts[0]
		const addressP7C0q98 = accounts[4]
		const addressYVMZYhr = accounts[4]
		const stringYJY538 = await DSPVDQAmd2.symbol.call({from: accounts[4]});
//		const boolFg4LEkZ = await DSPVDQAmd2.transferWithLock.call(addressPdTmij0, uintmyovxR, uintT4AezpA, {from: accounts[3]});
//		const booloXGXh4L = await DSPVDQAmd2.unfreezeAccount.call(addressP7C0q98, {from: accounts[0]});
//		const uint256BVfnqh8 = await DSPVDQAmd2.balanceOf.call(addressYVMZYhr, {from: accounts[3]});

		assert.equal(stringYJY538, "DSP")
		await expect(DSPVDQAmd2.transferWithLock.call(addressPdTmij0, uintmyovxR, uintT4AezpA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCntvwD = await DSP.new({from: accounts[2]});
		const addressCiIjz4o = accounts[0]
		const addressK9m7PPa = accounts[3]
		const uintbYHfHQ = BigInt("245")
		const addressVlNadsj = accounts[0]
		const addressyuRY69V = accounts[3]
		const uintmUM6fsC = BigInt("1504")
		const addresseurt2f3 = accounts[1]
		const addressftnSwFy = "0x0000000000000000000000000000000000000001"
		const boolKieHVR = await DSPCntvwD.freezeAccount.call(addressCiIjz4o, {from: accounts[2]});
		const uint256Duzo3gE = await DSPCntvwD.balanceOf.call(addressK9m7PPa, {from: accounts[3]});
//		const boolefxGtU = await DSPCntvwD.transferFrom.call(addressyuRY69V, addressVlNadsj, uintbYHfHQ, {from: accounts[0]});
//		const boolatDzjT = await DSPCntvwD.transferFrom.call(addressftnSwFy, addresseurt2f3, uintmUM6fsC, {from: accounts[3]});

		assert.equal(boolKieHVR, true)
		assert.equal(uint256Duzo3gE, BigInt("0"))
		await expect(DSPCntvwD.transferFrom.call(addressyuRY69V, addressVlNadsj, uintbYHfHQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})