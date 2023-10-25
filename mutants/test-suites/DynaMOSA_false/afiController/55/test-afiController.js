const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressiHtBHyA = accounts[0]
		const afiControllerBOpuYA = await afiController.new(addressiHtBHyA, {from: accounts[4]});
		const uintQdXUlP6 = BigInt("1576")
		const addressVy8g6os = accounts[4]
		const addressWKDjOIW = accounts[4]
		const addressICO8eEk = accounts[5]
//		const address3hlWTH = await afiControllerBOpuYA.withdraw.call(addressVy8g6os, uintQdXUlP6, {from: accounts[4]});
//		const addresszbG7VG6 = await afiControllerBOpuYA.revokeStrategy.call(addressICO8eEk, addressWKDjOIW, {from: accounts[2]});

		await expect(afiControllerBOpuYA.withdraw.call(addressVy8g6os, uintQdXUlP6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRaPE2NM = accounts[4]
		const afiControllerN8jK3DM = await afiController.new(addressRaPE2NM, {from: accounts[2]});
		const addressbwoT0nL = accounts[5]
		const addressgaH1iY = accounts[3]
		const addresshog9nOZ = accounts[3]
		const addressJaVG9vt = await afiControllerN8jK3DM.approveStrategy.call(addressgaH1iY, addressbwoT0nL, {from: accounts[2]});
//		const addressdW8WLaw = await afiControllerN8jK3DM.setGovernance.call(addresshog9nOZ, {from: accounts[3]});

		await expect(afiControllerN8jK3DM.setGovernance.call(addresshog9nOZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAFBQspV = accounts[1]
		const afiControllersCnc8L1 = await afiController.new(addressAFBQspV, {from: accounts[0]});
		const uintjCNZlJ = BigInt("717")
		const addressbwnLUyg = accounts[1]
		const addressd2Oq381 = accounts[3]
		const uintenGQXyT = BigInt("1895")
		const addressyr34YsN = accounts[3]
		const uintn0juGjQ = BigInt("1412")
		const addressKvbZRmY = accounts[4]
		const uintBrSSP8 = BigInt("1648")
		const addressYnKrG4b = accounts[4]
		const addressN4zuHIa = accounts[0]
		const addressiGfUH2N = accounts[1]
		const addressZFkJWEL = accounts[2]
		const addressO72skok = accounts[1]
//		const addressD1Zckt8 = await afiControllersCnc8L1.yearn.call(addressd2Oq381, addressbwnLUyg, uintjCNZlJ, {from: accounts[0]});
//		const addressdMmXHe2 = await afiControllersCnc8L1.inCaseTokensGetStuck.call(addressyr34YsN, uintenGQXyT, {from: accounts[5]});
//		const addressg07Nu4P = await afiControllersCnc8L1.earn.call(addressKvbZRmY, uintn0juGjQ, {from: accounts[3]});
//		const addressiAgmIF = await afiControllersCnc8L1.yearn.call(addressN4zuHIa, addressYnKrG4b, uintBrSSP8, {from: accounts[0]});
//		const addressVBLhSM7 = await afiControllersCnc8L1.setConverter.call(addressO72skok, addressZFkJWEL, addressiGfUH2N, {from: accounts[0]});

		await expect(afiControllersCnc8L1.yearn.call(addressd2Oq381, addressbwnLUyg, uintjCNZlJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressw0a4014 = accounts[1]
		const afiControllerSKAuCpU = await afiController.new(addressw0a4014, {from: accounts[4]});
		const addressbIh08qS = accounts[0]
		const addressNgPJ8a = accounts[5]
		const addressm2sfjUf = accounts[4]
		const addressDTYEq4x = accounts[2]
		const uintsW8ZEIs = BigInt("867")
		const addressxm3IeGR = accounts[4]
//		const addressbIojZRC = await afiControllerSKAuCpU.setOneSplit.call(addressbIh08qS, {from: accounts[2]});
//		const addressUDcOQpi = await afiControllerSKAuCpU.revokeStrategy.call(addressm2sfjUf, addressNgPJ8a, {from: accounts[1]});
//		const addressnJxapOL = await afiControllerSKAuCpU.setOneSplit.call(addressDTYEq4x, {from: accounts[1]});
//		const addressXoNo62S = await afiControllerSKAuCpU.earn.call(addressxm3IeGR, uintsW8ZEIs, {from: accounts[2]});

		await expect(afiControllerSKAuCpU.setOneSplit.call(addressbIh08qS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSxF7GVq = accounts[0]
		const afiControllerypiqT4k = await afiController.new(addressSxF7GVq, {from: accounts[4]});
		const uintDZ4akB2 = BigInt("1786")
		const addressHQvbEM9 = accounts[4]
		const addressY8Rk77I = accounts[0]
		const addressYysUtAu = accounts[1]
		const addressGG4dhqS = "0x0000000000000000000000000000000000000001"
//		const uinteyTgUuW = await afiControllerypiqT4k.getExpectedReturn.call(addressY8Rk77I, addressHQvbEM9, uintDZ4akB2, {from: accounts[2]});
//		const addressPXavjwW = await afiControllerypiqT4k.setGovernance.call(addressYysUtAu, {from: accounts[2]});
//		const addressBID3KjF = await afiControllerypiqT4k.withdrawAll.call(addressGG4dhqS, {from: accounts[4]});

		await expect(afiControllerypiqT4k.getExpectedReturn.call(addressY8Rk77I, addressHQvbEM9, uintDZ4akB2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressE11irNy = accounts[4]
		const afiControllerDI3DJzj = await afiController.new(addressE11irNy, {from: accounts[2]});
		const uintIuV3q0x = BigInt("860")
		const addressjgS08Sq = "0x0000000000000000000000000000000000000001"
		const addressysOpFYO = accounts[4]
//		const uintTE3rtW8 = await afiControllerDI3DJzj.setSplit.call(uintIuV3q0x, {from: accounts[0]});
//		const addressKWIt6X6 = await afiControllerDI3DJzj.inCaseStrategyTokenGetStuck.call(addressysOpFYO, addressjgS08Sq, {from: accounts[1]});

		await expect(afiControllerDI3DJzj.setSplit.call(uintIuV3q0x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressg3cT5wu = accounts[2]
		const afiControllerAvaFc9M = await afiController.new(addressg3cT5wu, {from: accounts[2]});
		const addressTdzdYq4 = accounts[2]
		const addressz7tjQie = accounts[4]
		const addressPKiTCsV = accounts[3]
		const addressNvwkSuH = accounts[1]
		const addressHfLH14 = accounts[5]
		const uintrz7oe5C = BigInt("1133")
		const addressGKKD1fi = accounts[3]
		const addresstFuNYo0 = accounts[1]
//		const addressuudKSpl = await afiControllerAvaFc9M.setStrategy.call(addressz7tjQie, addressTdzdYq4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYZ35FUN = await afiControllerAvaFc9M.setConverter.call(addressHfLH14, addressNvwkSuH, addressPKiTCsV, {from: accounts[0]});
//		const uintpi1q5t = await afiControllerAvaFc9M.getExpectedReturn.call(addresstFuNYo0, addressGKKD1fi, uintrz7oe5C, {from: accounts[3]});

		await expect(afiControllerAvaFc9M.setStrategy.call(addressz7tjQie, addressTdzdYq4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressplzEq7V = accounts[0]
		const afiControllerKu6gSuI = await afiController.new(addressplzEq7V, {from: accounts[5]});
		const addressc1ynBHJ = accounts[0]
		const addressgeYGHXA = accounts[1]
		const addressHS61Zkb = accounts[0]
		const uintHuvYPL = BigInt("748")
		const addressDpBloUP = accounts[4]
		const addressC2nV0Wf = accounts[4]
		const addressvwT0Km3 = await afiControllerKu6gSuI.setStrategist.call(addressc1ynBHJ, {from: accounts[5]});
//		const addressa7bthZH = await afiControllerKu6gSuI.setStrategy.call(addressHS61Zkb, addressgeYGHXA, {from: accounts[2]});
//		const addressIjRKnOh = await afiControllerKu6gSuI.inCaseTokensGetStuck.call(addressDpBloUP, uintHuvYPL, {from: "0x0000000000000000000000000000000000000001"});
//		const addressA2KEmxI = await afiControllerKu6gSuI.setGovernance.call(addressC2nV0Wf, {from: accounts[2]});

		await expect(afiControllerKu6gSuI.setStrategy.call(addressHS61Zkb, addressgeYGHXA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressR5fBrCu = accounts[0]
		const afiControllerBOpuYA = await afiController.new(addressR5fBrCu, {from: accounts[4]});
		const addressJ009t9I = accounts[4]
		const addressd0D2jYv = accounts[5]
//		const addresszbG7VG6 = await afiControllerBOpuYA.revokeStrategy.call(addressd0D2jYv, addressJ009t9I, {from: accounts[2]});

		await expect(afiControllerBOpuYA.revokeStrategy.call(addressd0D2jYv, addressJ009t9I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXGl3qSd = accounts[4]
		const afiControlleryVUgvhq = await afiController.new(addressXGl3qSd, {from: accounts[3]});
		const addressXnzTnVU = accounts[2]
		const uintf6aTlXJ = BigInt("188")
		const uintdLWiHdw = BigInt("25")
		const addressHyyY2xx = accounts[0]
		const addressSxNOzhO = "0x0000000000000000000000000000000000000001"
		const addressksTeUG = accounts[3]
//		const uintE3KBcGn = await afiControlleryVUgvhq.balanceOf.call(addressXnzTnVU, {from: accounts[1]});
//		const uintjHiBfdM = await afiControlleryVUgvhq.setSplit.call(uintf6aTlXJ, {from: accounts[0]});
//		const uintmXRNGKe = await afiControlleryVUgvhq.setSplit.call(uintdLWiHdw, {from: accounts[0]});
//		const addressF7wkHSO = await afiControlleryVUgvhq.setConverter.call(addressksTeUG, addressSxNOzhO, addressHyyY2xx, {from: accounts[0]});

		await expect(afiControlleryVUgvhq.balanceOf.call(addressXnzTnVU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLcTn9Bg = accounts[1]
		const afiControllerSKAuCpU = await afiController.new(addressLcTn9Bg, {from: accounts[4]});
		const uintOE0esHz = BigInt("48")
		const addressP8vUI2S = accounts[4]
		const addressIxnxnI = accounts[1]
		const addressi4K3Zig = accounts[5]
		const addresst44jt77 = accounts[4]
		const uintwoz6Amv = BigInt("1986")
		const addressrBmPRq = accounts[5]
		const addresslGQ9N1F = accounts[2]
		const uintES3Awwj = BigInt("867")
		const addressGiwsXjX = accounts[4]
//		const addressB4tuNK7 = await afiControllerSKAuCpU.earn.call(addressP8vUI2S, uintOE0esHz, {from: accounts[1]});
//		const addressbIojZRC = await afiControllerSKAuCpU.setOneSplit.call(addressIxnxnI, {from: accounts[2]});
//		const addressUDcOQpi = await afiControllerSKAuCpU.revokeStrategy.call(addresst44jt77, addressi4K3Zig, {from: accounts[1]});
//		const addressUKqXhJT = await afiControllerSKAuCpU.inCaseTokensGetStuck.call(addressrBmPRq, uintwoz6Amv, {from: accounts[4]});
//		const addressnJxapOL = await afiControllerSKAuCpU.setOneSplit.call(addresslGQ9N1F, {from: accounts[1]});
//		const addressXoNo62S = await afiControllerSKAuCpU.earn.call(addressGiwsXjX, uintES3Awwj, {from: accounts[2]});

		await expect(afiControllerSKAuCpU.earn.call(addressP8vUI2S, uintOE0esHz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressh2N9Te2 = accounts[1]
		const afiControllersCnc8L1 = await afiController.new(addressh2N9Te2, {from: accounts[0]});
		const addressp8A3I2w = accounts[2]
		const uintDbJwTY5 = BigInt("1234")
		const addressZxmZwEO = accounts[1]
		const addressNaGdHrB = accounts[4]
		const uintZPiC9j7 = BigInt("1895")
		const addressAcmDZZ = accounts[3]
		const uintodgKWZ5 = BigInt("1412")
		const addressVSYkKzQ = accounts[4]
		const uintRplv7Qa = BigInt("1648")
		const addressf8C9Ixx = accounts[4]
		const addressjAwVw6l = accounts[0]
		const addressnGBDO4r = accounts[1]
		const addressW6R0Z5z = accounts[2]
		const addresspIGXL6Z = accounts[1]
//		const addressFBctr0N = await afiControllersCnc8L1.setRewards.call(addressp8A3I2w, {from: accounts[2]});
//		const addresszx26Bv = await afiControllersCnc8L1.yearn.call(addressNaGdHrB, addressZxmZwEO, uintDbJwTY5, {from: accounts[5]});
//		const addressdMmXHe2 = await afiControllersCnc8L1.inCaseTokensGetStuck.call(addressAcmDZZ, uintZPiC9j7, {from: accounts[5]});
//		const addressg07Nu4P = await afiControllersCnc8L1.earn.call(addressVSYkKzQ, uintodgKWZ5, {from: accounts[3]});
//		const addressiAgmIF = await afiControllersCnc8L1.yearn.call(addressjAwVw6l, addressf8C9Ixx, uintRplv7Qa, {from: accounts[0]});
//		const addressVBLhSM7 = await afiControllersCnc8L1.setConverter.call(addresspIGXL6Z, addressW6R0Z5z, addressnGBDO4r, {from: accounts[0]});

		await expect(afiControllersCnc8L1.setRewards.call(addressp8A3I2w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdsjxAaV = accounts[0]
		const afiControllerPzMAL7a = await afiController.new(addressdsjxAaV, {from: accounts[3]});
		const addressBMrvqpb = accounts[2]
		const addressuBwMrW1 = accounts[1]
		const addressbCiY7KF = accounts[0]
		const addressG5VDdgY = "0x0000000000000000000000000000000000000001"
		const addressQlRlwmi = accounts[3]
//		const addressw1Ltc6M = await afiControllerPzMAL7a.inCaseStrategyTokenGetStuck.call(addressuBwMrW1, addressBMrvqpb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressG0Yjut8 = await afiControllerPzMAL7a.inCaseStrategyTokenGetStuck.call(addressG5VDdgY, addressbCiY7KF, {from: "0x0000000000000000000000000000000000000001"});
//		const addressayyLPMI = await afiControllerPzMAL7a.setStrategist.call(addressQlRlwmi, {from: accounts[3]});

		await expect(afiControllerPzMAL7a.inCaseStrategyTokenGetStuck.call(addressuBwMrW1, addressBMrvqpb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxBcFAv = accounts[0]
		const afiControllerBOpuYA = await afiController.new(addressxBcFAv, {from: accounts[4]});
		const uintgKugLkF = BigInt("330")
		const addresskAGCXMp = accounts[3]
		const addressZniLXM = accounts[4]
		const addressVf2pFq = accounts[5]
//		const addressJ8U0hXE = await afiControllerBOpuYA.inCaseTokensGetStuck.call(addresskAGCXMp, uintgKugLkF, {from: accounts[5]});
//		const addresszbG7VG6 = await afiControllerBOpuYA.revokeStrategy.call(addressVf2pFq, addressZniLXM, {from: accounts[2]});

		await expect(afiControllerBOpuYA.inCaseTokensGetStuck.call(addresskAGCXMp, uintgKugLkF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressP0tO9R = accounts[3]
		const afiControllerR9Ro1GP = await afiController.new(addressP0tO9R, {from: "0x0000000000000000000000000000000000000001"});
		const addressFJEt6al = accounts[2]
		const addressc7wZtJ = accounts[4]
		const addresstyDnfMj = accounts[1]
		const addressO07QjiE = accounts[1]
		const addressMcQK6m = accounts[2]
		const addressQTrLo7f = await afiControllerR9Ro1GP.approveStrategy.call(addressc7wZtJ, addressFJEt6al, {from: accounts[2]});
		const addressEAUYdWI = await afiControllerR9Ro1GP.setVault.call(addressO07QjiE, addresstyDnfMj, {from: accounts[0]});
		const uintxo8Zi6 = await afiControllerR9Ro1GP.balanceOf.call(addressMcQK6m, {from: accounts[4]});
	});

	it('test for afiController', async () => {
		const addressuACZPTF = accounts[2]
		const afiControllerVVBePG = await afiController.new(addressuACZPTF, {from: accounts[2]});
		const addressxVDtrZG = accounts[2]
		const addressCqgtME1 = accounts[3]
		const addressNCcw43C = accounts[2]
		const addressmCTocZ = "0x0000000000000000000000000000000000000002"
//		const addressQxmzcdU = await afiControllerVVBePG.setVault.call(addressCqgtME1, addressxVDtrZG, {from: "0x0000000000000000000000000000000000000001"});
//		const uintTUtG7H = await afiControllerVVBePG.balanceOf.call(addressNCcw43C, {from: accounts[4]});
//		const addressiyElkb7 = await afiControllerVVBePG.withdrawAll.call(addressmCTocZ, {from: accounts[5]});

		await expect(afiControllerVVBePG.setVault.call(addressCqgtME1, addressxVDtrZG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressi8BdO8u = accounts[2]
		const afiController3rbf8z = await afiController.new(addressi8BdO8u, {from: accounts[4]});
		const addressVPNNz9T = accounts[4]
		const addressduXzDkj = accounts[2]
		const addressAa0eopo = accounts[4]
		const addressE8m6F8d = accounts[4]
		const addressDOkkpUM = accounts[1]
		const addressvD85YeT = accounts[4]
		const addressBsAmgdx = accounts[3]
		const addressZzHvuIA = accounts[0]
//		const addressL7XWt6G = await afiController3rbf8z.withdrawAll.call(addressVPNNz9T, {from: accounts[4]});
//		const addressckTk5bk = await afiController3rbf8z.setRewards.call(addressduXzDkj, {from: accounts[5]});
//		const addressAbCujvV = await afiController3rbf8z.setStrategy.call(addressE8m6F8d, addressAa0eopo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressn9ztqWA = await afiController3rbf8z.setRewards.call(addressDOkkpUM, {from: accounts[0]});
//		const addressuj10WQG = await afiController3rbf8z.revokeStrategy.call(addressBsAmgdx, addressvD85YeT, {from: accounts[4]});
//		const addressWYgOW44 = await afiController3rbf8z.withdrawAll.call(addressZzHvuIA, {from: accounts[0]});

		await expect(afiController3rbf8z.withdrawAll.call(addressVPNNz9T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressYoiK7DC = accounts[0]
		const afiControllerBOpuYA = await afiController.new(addressYoiK7DC, {from: accounts[4]});
		const addressNLd29h7 = "0x0000000000000000000000000000000000000001"
		const addressLRqmbW = accounts[2]
		const addressFFhLyaW = accounts[4]
		const addresshqX2F0P = accounts[4]
		const addressRR7hrzR = accounts[5]
//		const addressOkyevwc = await afiControllerBOpuYA.setConverter.call(addressFFhLyaW, addressLRqmbW, addressNLd29h7, {from: accounts[2]});
//		const addresszbG7VG6 = await afiControllerBOpuYA.revokeStrategy.call(addressRR7hrzR, addresshqX2F0P, {from: accounts[2]});

		await expect(afiControllerBOpuYA.setConverter.call(addressFFhLyaW, addressLRqmbW, addressNLd29h7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressW0wt2sV = accounts[1]
		const afiControllersCnc8L1 = await afiController.new(addressW0wt2sV, {from: accounts[0]});
		const uintpboDZd = BigInt("470")
		const addressah9yfsl = accounts[0]
		const uintKfLvCGN = BigInt("717")
		const addressHpQV1SE = accounts[1]
		const addressGOBBQUd = accounts[3]
		const uintYL4KEsJ = BigInt("210")
		const addressOLUNDPe = accounts[3]
		const uintCxzi2jH = BigInt("578")
		const addressHkiaMN = accounts[2]
		const addressPjFNqad = accounts[2]
		const addressLL6DUEp = accounts[2]
		const addressO5Yrdhj = accounts[4]
		const addressQyDyBWy = accounts[2]
		const addressSo1JTOM = accounts[1]
		const addressucas8OJ = accounts[2]
		const addressob4YDCE = accounts[1]
//		const addressy6ALPNI = await afiControllersCnc8L1.inCaseTokensGetStuck.call(addressah9yfsl, uintpboDZd, {from: accounts[0]});
//		const addressD1Zckt8 = await afiControllersCnc8L1.yearn.call(addressGOBBQUd, addressHpQV1SE, uintKfLvCGN, {from: accounts[0]});
//		const addressPXFggmu = await afiControllersCnc8L1.inCaseTokensGetStuck.call(addressOLUNDPe, uintYL4KEsJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressdMmXHe2 = await afiControllersCnc8L1.inCaseTokensGetStuck.call(addressHkiaMN, uintCxzi2jH, {from: accounts[5]});
//		const address6iw27a = await afiControllersCnc8L1.revokeStrategy.call(addressLL6DUEp, addressPjFNqad, {from: accounts[1]});
//		const addressfI5dgQa = await afiControllersCnc8L1.setVault.call(addressQyDyBWy, addressO5Yrdhj, {from: "0x0000000000000000000000000000000000000001"});
//		const addressVBLhSM7 = await afiControllersCnc8L1.setConverter.call(addressob4YDCE, addressucas8OJ, addressSo1JTOM, {from: accounts[0]});

		await expect(afiControllersCnc8L1.inCaseTokensGetStuck.call(addressah9yfsl, uintpboDZd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvzC5ord = accounts[1]
		const afiControllersCnc8L1 = await afiController.new(addressvzC5ord, {from: accounts[0]});
		const addressoqOwYtO = accounts[5]
		const addresst0poW31 = accounts[3]
		const addresse4f1M1s = accounts[3]
		const uintF0wDhZQ = BigInt("717")
		const addressOdoP7t = accounts[2]
		const addressFC2sNDM = accounts[3]
		const addressMdHwdUU = accounts[5]
		const addressGrPrzrq = accounts[0]
//		const addresss6qpiur = await afiControllersCnc8L1.setStrategy.call(addresst0poW31, addressoqOwYtO, {from: accounts[0]});
//		const addressIXpq4mc = await afiControllersCnc8L1.setOneSplit.call(addresse4f1M1s, {from: accounts[5]});
//		const addressD1Zckt8 = await afiControllersCnc8L1.yearn.call(addressFC2sNDM, addressOdoP7t, uintF0wDhZQ, {from: accounts[0]});
//		const addressUqZenC = await afiControllersCnc8L1.approveStrategy.call(addressGrPrzrq, addressMdHwdUU, {from: accounts[1]});

		await expect(afiControllersCnc8L1.setStrategy.call(addresst0poW31, addressoqOwYtO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})