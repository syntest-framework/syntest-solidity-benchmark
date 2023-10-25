const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALEnjX7al = await NAL.new({from: accounts[0]});
		const addressGIEeO8v = accounts[1]
		const uintG1ox2Qn = BigInt("1584")
//		const addressjJJ84ov = await NALEnjX7al.upgradeTo.call(addressGIEeO8v, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256G6xf3I = await NALEnjX7al.burn.call(uintG1ox2Qn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALEnjX7al.upgradeTo.call(addressGIEeO8v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressU3NOWzk = accounts[2]
		const addresshuaLfXu = accounts[2]
		const addresseH9IuYS = accounts[1]
		const uintXNllgF1 = BigInt("1573")
		const addressHIyVeEu = "0x0000000000000000000000000000000000000001"
		const addressOEsDK5M = accounts[2]
		const uintzPJ5G1 = BigInt("565")
		const addressfJeA2IR = accounts[4]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressU3NOWzk, {from: accounts[1]});
		const boolUCOeB12 = await NALxEVHcZa.isOwner.call(addresshuaLfXu, {from: accounts[0]});
		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addresseH9IuYS, {from: accounts[0]});
		const boolWsSGL44 = await NALxEVHcZa.paused.call({from: accounts[4]});
//		const boolIICtNhg = await NALxEVHcZa.transferFrom.call(addressOEsDK5M, addressHIyVeEu, uintXNllgF1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressfJeA2IR, uintzPJ5G1, {from: accounts[5]});

		assert.equal(boolUCOeB12, false)
		assert.equal(boolWsSGL44, false)
		assert.equal(uint256tRT4KlE, BigInt("0"))
		assert.equal(uint256tdNN6VF, BigInt("0"))
		await expect(NALxEVHcZa.transferFrom.call(addressOEsDK5M, addressHIyVeEu, uintXNllgF1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringevpQXtk = "pgU13XI"
		const stringBRRFiiz = "HEx6yfoTpGLpyT1YvNnu4GPzdQRGxztYZc7fmp9jxP5DoMHwDMbAJvZY1v9IVddHZOM8YV1MoEh2rkiGJ9YziABpoPtmk"
		const uinttwj26l6 = BigInt("28")
		const NALfErmx9B = await NAL.new(stringevpQXtk, stringBRRFiiz, uinttwj26l6, {from: accounts[3]});
		const uintH9fEfJy = BigInt("403")
		const addressMesu0hq = accounts[4]
		const addresspbV1Z5e = accounts[1]
		const uintFqkaSlq = BigInt("797")
		const addressCOV674u = "0x0000000000000000000000000000000000000001"
		const addresssmHgZH = accounts[2]
		const addressHOtkeZC = accounts[3]
		const uintzBOwVh = BigInt("1313")
		const boolvyUXGGj = await NALfErmx9B.transfer.call(addressMesu0hq, uintH9fEfJy, {from: accounts[2]});
		const boolpKMhsit = await NALfErmx9B.freezeAccount.call(addresspbV1Z5e, {from: "0x0000000000000000000000000000000000000001"});
		const boolZbH5Rmz = await NALfErmx9B.transferFrom.call(addresssmHgZH, addressCOV674u, uintFqkaSlq, {from: accounts[0]});
		await NALfErmx9B.whenPaused.call({from: accounts[3]});
		const boolOy5s0C = await NALfErmx9B.unfreezeAccount.call(addressHOtkeZC, {from: accounts[4]});
		const uint256PZanUov = await NALfErmx9B.burn.call(uintzBOwVh, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALcWZkb2 = await NAL.new({from: accounts[3]});
		const uintRhywz9 = BigInt("466")
		const addressGtvQ6VV = accounts[4]
		const addresskk3Be4p = accounts[1]
//		const addressSZM9Bka = await NALcWZkb2.burnFrom.call(addressGtvQ6VV, uintRhywz9, {from: accounts[1]});
//		const addressKLS6fGA = await NALcWZkb2.addAdmin.call(addresskk3Be4p, {from: accounts[0]});

		await expect(NALcWZkb2.burnFrom.call(addressGtvQ6VV, uintRhywz9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALiSiGih = await NAL.new({from: accounts[1]});
		const uintHCLkZE = BigInt("248")
		const addressigLWvC1 = accounts[0]
		const addressUoEu6aS = accounts[4]
		const uintyb3pKW = BigInt("167")
		const addressYMaSCv0 = accounts[3]
//		const boolE4EgLAk = await NALiSiGih.transfer.call(addressigLWvC1, uintHCLkZE, {from: accounts[0]});
//		const addressBAtPmB = await NALiSiGih.transferOwnership.call(addressUoEu6aS, {from: accounts[4]});
//		const boolGvdpYrN = await NALiSiGih.transfer.call(addressYMaSCv0, uintyb3pKW, {from: accounts[4]});
//		await NALiSiGih.whenPaused.call({from: accounts[3]});

		await expect(NALiSiGih.transfer.call(addressigLWvC1, uintHCLkZE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTtUwbE = await NAL.new({from: accounts[2]});
		const addressoQ8nAjP = accounts[5]
		const addresse9gEcCj = accounts[0]
		const address4o1d4B = accounts[0]
		const addressD2RG6DB = accounts[2]
		const addresswHKXeyj = accounts[5]
		const addressreAG6US = "0x0000000000000000000000000000000000000001"
		const stringPhsbC2 = await NALTtUwbE.name.call({from: accounts[1]});
		const uint256d1d3rA0 = await NALTtUwbE.allowance.call(addresse9gEcCj, addressoQ8nAjP, {from: accounts[2]});
		const boolfruHvfj = await NALTtUwbE.isAdmin.call(address4o1d4B, {from: accounts[0]});
		const boolT32x4iz = await NALTtUwbE.isOwner.call(addressD2RG6DB, {from: accounts[1]});
		const uint256awWwpBW = await NALTtUwbE.allowance.call(addressreAG6US, addresswHKXeyj, {from: accounts[4]});

		assert.equal(boolT32x4iz, true)
		assert.equal(boolfruHvfj, false)
		assert.equal(stringPhsbC2, "Personal Token")
		assert.equal(uint256awWwpBW, BigInt("0"))
		assert.equal(uint256d1d3rA0, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALaHE5rF8 = await NAL.new({from: accounts[3]});
		const uintNIHFueC = BigInt("706")
		const addressmoCGmA = accounts[1]
		const addressN3CMMWr = accounts[3]
		const addresskI1QOPX = accounts[2]
		const uintnKvE7cL = BigInt("1015")
		const uintmgfXq0n = BigInt("1242")
		const addressnHNJ3Ux = accounts[2]
//		await NALaHE5rF8.renounceAdmin.call({from: accounts[1]});
//		const boolm06D8Xq = await NALaHE5rF8.transferFrom.call(addressN3CMMWr, addressmoCGmA, uintNIHFueC, {from: accounts[3]});
//		const boolwaTanfd = await NALaHE5rF8.isOwner.call(addresskI1QOPX, {from: accounts[0]});
//		const boolyRenIcd = await NALaHE5rF8.transferWithLock.call(addressnHNJ3Ux, uintmgfXq0n, uintnKvE7cL, {from: accounts[3]});
//		await NALaHE5rF8.renounceAdmin.call({from: accounts[2]});
//		await NALaHE5rF8.whenNotPaused.call({from: accounts[2]});

		await expect(NALaHE5rF8.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHE5rF8 = await NAL.new({from: accounts[3]});
		const uintZs2f24K = BigInt("706")
		const addressqbq0bcL = accounts[1]
		const addressX9Ykf8r = accounts[3]
		const addressNhnEl7C = accounts[2]
		const uintpM0bvwP = BigInt("1015")
		const uintlb1Huaz = BigInt("1242")
		const addressu837jL = accounts[2]
//		await NALaHE5rF8.whenNotPaused.call({from: accounts[1]});
//		await NALaHE5rF8.renounceAdmin.call({from: accounts[1]});
//		const boolm06D8Xq = await NALaHE5rF8.transferFrom.call(addressX9Ykf8r, addressqbq0bcL, uintZs2f24K, {from: accounts[3]});
//		const boolwaTanfd = await NALaHE5rF8.isOwner.call(addressNhnEl7C, {from: accounts[0]});
//		const boolyRenIcd = await NALaHE5rF8.transferWithLock.call(addressu837jL, uintlb1Huaz, uintpM0bvwP, {from: accounts[3]});
//		await NALaHE5rF8.renounceAdmin.call({from: accounts[2]});
//		await NALaHE5rF8.whenNotPaused.call({from: accounts[2]});

		await expect(NALaHE5rF8.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressjHEjmMl = accounts[2]
		const addressLByKTzO = accounts[2]
		const addresshKNaByq = accounts[1]
		const uintaOA8Fz9 = BigInt("565")
		const addressao1hFET = accounts[4]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressjHEjmMl, {from: accounts[1]});
		const boolUCOeB12 = await NALxEVHcZa.isOwner.call(addressLByKTzO, {from: accounts[0]});
		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addresshKNaByq, {from: accounts[0]});
		const boolWsSGL44 = await NALxEVHcZa.paused.call({from: accounts[4]});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressao1hFET, uintaOA8Fz9, {from: accounts[5]});

		assert.equal(boolUCOeB12, false)
		assert.equal(boolWsSGL44, false)
		assert.equal(uint256tRT4KlE, BigInt("0"))
		assert.equal(uint256tdNN6VF, BigInt("0"))
		await expect(NALxEVHcZa.decreaseAllowance.call(addressao1hFET, uintaOA8Fz9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALI7xH2H4 = await NAL.new({from: accounts[2]});
		const uintqHWayXs = BigInt("1606")
		const addressPvzY1al = accounts[3]
		const uintwrbkkPL = BigInt("1320")
		const addressLP3ncG2 = accounts[1]
		const uint8YnU8ynh = await NALI7xH2H4.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolx5E3dRb = await NALI7xH2H4.transfer.call(addressPvzY1al, uintqHWayXs, {from: accounts[2]});
		const boolMgzn4qg = await NALI7xH2H4.transfer.call(addressLP3ncG2, uintwrbkkPL, {from: accounts[2]});
		const stringH9gPeNV = await NALI7xH2H4.symbol.call({from: accounts[1]});

		assert.equal(boolMgzn4qg, true)
		assert.equal(boolx5E3dRb, true)
		assert.equal(stringH9gPeNV, "NAL")
		assert.equal(uint8YnU8ynh, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addresswuKI76S = accounts[2]
		const addressVsMStLO = accounts[1]
		const uintecKqVSi = BigInt("1573")
		const addressRH62eaa = "0x00000000000000000000000000000000000000-1"
		const addressSnu0EgV = accounts[2]
		const uintbr1QdRu = BigInt("565")
		const addressFYDgZyk = accounts[4]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addresswuKI76S, {from: accounts[1]});
		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addressVsMStLO, {from: accounts[0]});
//		const boolIICtNhg = await NALxEVHcZa.transferFrom.call(addressSnu0EgV, addressRH62eaa, uintecKqVSi, {from: "0x0000000000000000000000000000000000000001"});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressFYDgZyk, uintbr1QdRu, {from: accounts[5]});

		assert.equal(uint256tRT4KlE, BigInt("0"))
		assert.equal(uint256tdNN6VF, BigInt("0"))
		await expect(NALxEVHcZa.transferFrom.call(addressSnu0EgV, addressRH62eaa, uintecKqVSi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressw9CYZpB = accounts[2]
		const uintBQ7Zty9 = BigInt("1201")
		const addressjI4f19b = accounts[0]
		const addressVpyGFqM = accounts[2]
		const addresspRijpm2 = accounts[1]
		const uintjeQ3eS7 = BigInt("333")
		const addressnbiMxpp = accounts[2]
		const uintUbOvQ8E = BigInt("565")
		const addressRVI9Uzw = accounts[4]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressw9CYZpB, {from: accounts[1]});
		const boolnjFfcRO = await NALxEVHcZa.approve.call(addressjI4f19b, uintBQ7Zty9, {from: accounts[1]});
		const boolUCOeB12 = await NALxEVHcZa.isOwner.call(addressVpyGFqM, {from: accounts[0]});
		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addresspRijpm2, {from: accounts[0]});
		const boolWsSGL44 = await NALxEVHcZa.paused.call({from: accounts[4]});
//		const booluL8y6pT = await NALxEVHcZa.decreaseAllowance.call(addressnbiMxpp, uintjeQ3eS7, {from: accounts[3]});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressRVI9Uzw, uintUbOvQ8E, {from: accounts[5]});

		assert.equal(boolUCOeB12, false)
		assert.equal(boolWsSGL44, false)
		assert.equal(boolnjFfcRO, true)
		assert.equal(uint256tRT4KlE, BigInt("0"))
		assert.equal(uint256tdNN6VF, BigInt("0"))
		await expect(NALxEVHcZa.decreaseAllowance.call(addressnbiMxpp, uintjeQ3eS7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const uintXJu1TA4 = BigInt("1013")
		const addressYZ9lVr = accounts[4]
		const addressGZNkrwL = accounts[2]
		const uintfmfq8vC = BigInt("1242")
		const addressEdgEyAk = accounts[1]
		const uintNLBxFGo = BigInt("1573")
		const addressIMgefCv = "0x00000000000000000000000000000000000000-2"
		const addresstBsQ3KZ = accounts[2]
		const uintcIHBS9N = BigInt("565")
		const addressBZf16lW = accounts[4]
		const boolPpztABt = await NALxEVHcZa.approve.call(addressYZ9lVr, uintXJu1TA4, {from: accounts[4]});
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressGZNkrwL, {from: accounts[1]});
//		const uint256Ubjn379 = await NALxEVHcZa.burn.call(uintfmfq8vC, {from: accounts[0]});
//		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addressEdgEyAk, {from: accounts[0]});
//		const boolIICtNhg = await NALxEVHcZa.transferFrom.call(addresstBsQ3KZ, addressIMgefCv, uintNLBxFGo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressBZf16lW, uintcIHBS9N, {from: accounts[5]});

		assert.equal(boolPpztABt, true)
		assert.equal(uint256tRT4KlE, BigInt("0"))
		await expect(NALxEVHcZa.burn.call(uintfmfq8vC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressbiRuUnh = accounts[2]
		const addressYmyI59G = accounts[2]
		const addressC8vOYO5 = accounts[2]
		const addressSXIFAUf = accounts[4]
		const addressSnFSFCb = accounts[2]
		const addresscz7lNXG = accounts[1]
		const uintghk6aL7 = BigInt("1573")
		const addressfR1rSFi = "0x0000000000000000000000000000000000000001"
		const addressgVbK7Kz = accounts[2]
		const uintGFcNzL2 = BigInt("1856")
		const addressZOTFd67 = accounts[1]
		const addressxz06a6 = accounts[4]
		const uintdZ6RcW = BigInt("328")
		const addressexLjKmV = accounts[1]
		const addressyp14hU3 = accounts[0]
		const uintACyVRZT = BigInt("1014")
		const addressvwzvDpR = accounts[2]
		const addressp8VsTLj = accounts[2]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressbiRuUnh, {from: accounts[1]});
		const addressCvp6HP7 = await NALxEVHcZa.transferOwnership.call(addressYmyI59G, {from: accounts[3]});
		const boolUCOeB12 = await NALxEVHcZa.isOwner.call(addressC8vOYO5, {from: accounts[0]});
		const uint256Ngb6hAj = await NALxEVHcZa.balanceOf.call(addressSXIFAUf, {from: accounts[5]});
//		await NALxEVHcZa.renounceAdmin.call({from: accounts[0]});
//		const boolUlLcqGl = await NALxEVHcZa.isOwner.call(addressSnFSFCb, {from: accounts[2]});
//		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addresscz7lNXG, {from: accounts[0]});
//		const boolWsSGL44 = await NALxEVHcZa.paused.call({from: accounts[4]});
//		const boolIICtNhg = await NALxEVHcZa.transferFrom.call(addressgVbK7Kz, addressfR1rSFi, uintghk6aL7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSz6N3xu = await NALxEVHcZa.transferFrom.call(addressxz06a6, addressZOTFd67, uintGFcNzL2, {from: accounts[4]});
//		const boolCBQ0yiO = await NALxEVHcZa.transferFrom.call(addressyp14hU3, addressexLjKmV, uintdZ6RcW, {from: accounts[1]});
//		const boolvvXonDm = await NALxEVHcZa.approve.call(addressvwzvDpR, uintACyVRZT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgQzXXxc = await NALxEVHcZa.isOwner.call(addressp8VsTLj, {from: accounts[4]});

		assert.equal(boolUCOeB12, false)
		assert.equal(uint256Ngb6hAj, BigInt("0"))
		assert.equal(uint256tRT4KlE, BigInt("0"))
		await expect(NALxEVHcZa.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressw7YfqFF = accounts[3]
		const uinta8I6bDr = BigInt("1573")
		const address0QoGFW = "0x00000000000000000000000000000000000000-2"
		const addresskw1gBXr = accounts[2]
		const uintOwMbI1P = BigInt("565")
		const addressCeoTIR = accounts[4]
		const uintCd9sm1q = BigInt("1047")
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressw7YfqFF, {from: accounts[1]});
//		const boolIICtNhg = await NALxEVHcZa.transferFrom.call(addresskw1gBXr, address0QoGFW, uinta8I6bDr, {from: "0x0000000000000000000000000000000000000001"});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressCeoTIR, uintOwMbI1P, {from: accounts[5]});
//		const uint256Ifp4GAp = await NALxEVHcZa.burn.call(uintCd9sm1q, {from: accounts[2]});

		assert.equal(uint256tRT4KlE, BigInt("2000000000000000000000000000"))
		await expect(NALxEVHcZa.transferFrom.call(addresskw1gBXr, address0QoGFW, uinta8I6bDr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressC7lUgGA = accounts[2]
		const uintLG5aOA7 = BigInt("1636")
		const addressJO2mpwu = accounts[1]
		const addressRdyeNJp = accounts[2]
		const addressUSJud1r = accounts[5]
		const addresstqkYxXj = accounts[1]
		const uintCEsV1t = BigInt("694")
		const addressH5yPVyJ = accounts[1]
		const addressBZklBKc = accounts[3]
		const addressnODNoXA = accounts[6]
		const uinttaxRWQ = BigInt("1856")
		const addressVHJ9ATh = accounts[1]
		const addressHaiKk9 = accounts[4]
		const uintsVyKS2 = BigInt("565")
		const addressfgMZUtZ = accounts[4]
		const uintELJmt23 = BigInt("328")
		const addressp9pxUW7 = accounts[1]
		const addressLdsFue = accounts[0]
		const uintbQID1Pr = BigInt("1009")
		const addressYWbnWlh = accounts[2]
		const address0eRkmD = accounts[2]
		const uintuK3lAJd = BigInt("1852")
		const addresseJumnk = accounts[0]
		const stringQty5YR5 = await NALxEVHcZa.symbol.call({from: accounts[4]});
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressC7lUgGA, {from: accounts[1]});
		const boolM6t0MCK = await NALxEVHcZa.increaseAllowance.call(addressJO2mpwu, uintLG5aOA7, {from: accounts[2]});
		const boolUCOeB12 = await NALxEVHcZa.isOwner.call(addressRdyeNJp, {from: accounts[0]});
		const uint256Ngb6hAj = await NALxEVHcZa.balanceOf.call(addressUSJud1r, {from: accounts[5]});
//		await NALxEVHcZa.renounceAdmin.call({from: accounts[0]});
//		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addresstqkYxXj, {from: accounts[0]});
//		const boolunomzMo = await NALxEVHcZa.transferFrom.call(addressBZklBKc, addressH5yPVyJ, uintCEsV1t, {from: accounts[5]});
//		const addressJGuSAq5 = await NALxEVHcZa.removeAdmin.call(addressnODNoXA, {from: accounts[1]});
//		const boolSz6N3xu = await NALxEVHcZa.transferFrom.call(addressHaiKk9, addressVHJ9ATh, uinttaxRWQ, {from: accounts[4]});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressfgMZUtZ, uintsVyKS2, {from: accounts[5]});
//		const boolCBQ0yiO = await NALxEVHcZa.transferFrom.call(addressLdsFue, addressp9pxUW7, uintELJmt23, {from: accounts[1]});
//		const boolvvXonDm = await NALxEVHcZa.approve.call(addressYWbnWlh, uintbQID1Pr, {from: "0x0000000000000000000000000000000000000001"});
//		await NALxEVHcZa.renounceAdmin.call({from: accounts[3]});
//		const boolgQzXXxc = await NALxEVHcZa.isOwner.call(address0eRkmD, {from: accounts[4]});
//		const boolLoNmSvb = await NALxEVHcZa.decreaseAllowance.call(addresseJumnk, uintuK3lAJd, {from: accounts[5]});
//		await NALxEVHcZa.pause.call({from: accounts[2]});

		assert.equal(boolM6t0MCK, true)
		assert.equal(boolUCOeB12, false)
		assert.equal(stringQty5YR5, "NAL")
		assert.equal(uint256Ngb6hAj, BigInt("0"))
		assert.equal(uint256tRT4KlE, BigInt("0"))
		await expect(NALxEVHcZa.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressFGryVK1 = accounts[3]
		const addressCEbazz2 = accounts[3]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressFGryVK1, {from: accounts[1]});
		const addresskljoMN6 = await NALxEVHcZa.removeAdmin.call(addressCEbazz2, {from: accounts[3]});

		assert.equal(uint256tRT4KlE, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALuJbYv0O = await NAL.new({from: accounts[3]});
		const addressR9JG16E = accounts[3]
		const uint256SKvduDw = await NALuJbYv0O.totalSupply.call({from: accounts[2]});
		const stringMLWUMNw = await NALuJbYv0O.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolAq2ZEKn = await NALuJbYv0O.isOwner.call(addressR9JG16E, {from: accounts[1]});

		assert.equal(boolAq2ZEKn, true)
		assert.equal(stringMLWUMNw, "Personal Token")
		assert.equal(uint256SKvduDw, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressVmWG8E3 = accounts[4]
		const addresspqclWZg = accounts[2]
		const addressxdXArTR = accounts[2]
		const uintOIIc0a = BigInt("9")
		const addressr9BCrBU = accounts[4]
		const uinty7PJNca = BigInt("826")
		const uintZQARHuj = BigInt("1392")
		const addressz0js53S = accounts[3]
		const uintPxOujx3 = BigInt("1573")
		const addressJleDq3w = "0x0000000000000000000000000000000000000000"
		const addressssBK7Xd = accounts[2]
		const uinthPkHdc6 = BigInt("741")
		const addresscGXbn0 = accounts[1]
		const uintAjDToWV = BigInt("565")
		const addressOuMG3eH = accounts[4]
		const addressKZa3LmZ = await NALxEVHcZa.addAdmin.call(addressVmWG8E3, {from: accounts[3]});
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addresspqclWZg, {from: accounts[1]});
		const uint256tdNN6VF = await NALxEVHcZa.balanceOf.call(addressxdXArTR, {from: accounts[0]});
//		const booldGXgmML = await NALxEVHcZa.transfer.call(addressr9BCrBU, uintOIIc0a, {from: accounts[5]});
//		const booldrLkkL = await NALxEVHcZa.transferWithLock.call(addressz0js53S, uintZQARHuj, uinty7PJNca, {from: accounts[4]});
//		const boolIICtNhg = await NALxEVHcZa.transferFrom.call(addressssBK7Xd, addressJleDq3w, uintPxOujx3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyNpBtMq = await NALxEVHcZa.unlock.call(addresscGXbn0, uinthPkHdc6, {from: accounts[4]});
//		const boolF0QDR1b = await NALxEVHcZa.decreaseAllowance.call(addressOuMG3eH, uintAjDToWV, {from: accounts[5]});

		assert.equal(uint256tRT4KlE, BigInt("0"))
		assert.equal(uint256tdNN6VF, BigInt("0"))
		await expect(NALxEVHcZa.transfer.call(addressr9BCrBU, uintOIIc0a, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const addressLBHtn2N = accounts[4]
		const uintpUjVNIe = BigInt("705")
		const addressIzUhfmA = accounts[0]
		const uint256tRT4KlE = await NALxEVHcZa.balanceOf.call(addressLBHtn2N, {from: accounts[1]});
//		const boolR2wy22h = await NALxEVHcZa.unlock.call(addressIzUhfmA, uintpUjVNIe, {from: accounts[3]});

		assert.equal(uint256tRT4KlE, BigInt("0"))
		await expect(NALxEVHcZa.unlock.call(addressIzUhfmA, uintpUjVNIe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtP6Obdt = await NAL.new({from: accounts[2]});
		const addressegSKEiB = accounts[2]
		const uintPywYSg4 = BigInt("1859")
		const addresswJ4iYLr = accounts[5]
		const addressAyNa1Yx = accounts[2]
//		const boolMfASszh = await NALtP6Obdt.unfreezeAccount.call(addressegSKEiB, {from: accounts[2]});
//		const boolaQwlIjt = await NALtP6Obdt.transferFrom.call(addressAyNa1Yx, addresswJ4iYLr, uintPywYSg4, {from: accounts[2]});

		await expect(NALtP6Obdt.unfreezeAccount.call(addressegSKEiB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWV2lK2S = await NAL.new({from: accounts[1]});
		const addressngLvLwE = accounts[1]
		const uintlpDslxA = BigInt("1715")
		const uintZOVbaat = BigInt("1177")
		const addressPCdRxpQ = accounts[5]
		const uint256R6Fvlot = await NALWV2lK2S.balanceOf.call(addressngLvLwE, {from: accounts[0]});
//		const boollJNurAK = await NALWV2lK2S.lock.call(addressPCdRxpQ, uintZOVbaat, uintlpDslxA, {from: accounts[1]});

		assert.equal(uint256R6Fvlot, BigInt("2000000000000000000000000000"))
		await expect(NALWV2lK2S.lock.call(addressPCdRxpQ, uintZOVbaat, uintlpDslxA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxEVHcZa = await NAL.new({from: accounts[3]});
		const uintVCqy4oT = BigInt("841")
		const uintfEu1T9A = BigInt("1854")
		const addressEDiwhM = accounts[4]
		const addressaoPtKUt = accounts[0]
		const addressDRVqZ8C = accounts[3]
		const uintfoH7YBc = BigInt("705")
		const addressalaikaV = accounts[0]
		const boolvz5fJf = await NALxEVHcZa.transferWithLock.call(addressEDiwhM, uintfEu1T9A, uintVCqy4oT, {from: accounts[3]});
//		const addresssg9zA0z = await NALxEVHcZa.notFrozen.call(addressaoPtKUt, {from: accounts[1]});
//		const boollSyYI2L = await NALxEVHcZa.isOwner.call(addressDRVqZ8C, {from: accounts[0]});
//		const boolR2wy22h = await NALxEVHcZa.unlock.call(addressalaikaV, uintfoH7YBc, {from: accounts[3]});

		assert.equal(boolvz5fJf, true)
		await expect(NALxEVHcZa.notFrozen.call(addressaoPtKUt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtP6Obdt = await NAL.new({from: accounts[2]});
		const addresslli0ik = accounts[3]
//		await NALtP6Obdt.pause.call({from: accounts[2]});
//		const boolMfASszh = await NALtP6Obdt.unfreezeAccount.call(addresslli0ik, {from: accounts[2]});

		await expect(NALtP6Obdt.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})