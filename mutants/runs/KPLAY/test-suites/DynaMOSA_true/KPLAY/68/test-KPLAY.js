const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYwp7KTYe = await KPLAY.new({from: accounts[4]});
		const uintbgh0ySS = BigInt("1563")
		const addressEWFuTtk = accounts[4]
		const addressfiW9axj = accounts[4]
		const uintvAjkV0S = BigInt("970")
		const uintfaZLTIH = BigInt("970")
		const addressJs9cLQX = "0x0000000000000000000000000000000000000001"
		const addressU1468bp = accounts[0]
		const booloY69DF = await KPLAYwp7KTYe.transferFrom.call(addressfiW9axj, addressEWFuTtk, uintbgh0ySS, {from: accounts[4]});
		const uint256mWorm3K = await KPLAYwp7KTYe.currentTime.call({from: accounts[4]});
		const addressROYsSyL = await KPLAYwp7KTYe.lockAfter.call(addressJs9cLQX, uintfaZLTIH, uintvAjkV0S, {from: accounts[4]});
		const addressSUEo22t = await KPLAYwp7KTYe.unfreeze.call(addressU1468bp, {from: accounts[3]});

		await expect(KPLAYwp7KTYe.transferFrom.call(addressfiW9axj, addressEWFuTtk, uintbgh0ySS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUtV1nm = await KPLAY.new({from: accounts[1]});
		const uintOCqRmOJ = BigInt("1628")
		const addressIUCOht = accounts[5]
		const uintV2TKaMd = BigInt("1920")
		const address3dFWXg = accounts[3]
		const addressXh3Gf25 = accounts[2]
		const uintc9CO326 = BigInt("1892")
		const address1rOtmE = accounts[0]
		const addressiTI4e9U = accounts[0]
		await KPLAYUtV1nm.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolMbvJMMc = await KPLAYUtV1nm.decreaseAllowance.call(addressIUCOht, uintOCqRmOJ, {from: accounts[1]});
		await KPLAYUtV1nm.pause.call({from: accounts[2]});
		const boolBS9pNgm = await KPLAYUtV1nm.transferFrom.call(addressXh3Gf25, address3dFWXg, uintV2TKaMd, {from: accounts[1]});
		const boolQaTe66b = await KPLAYUtV1nm.increaseAllowance.call(address1rOtmE, uintc9CO326, {from: accounts[2]});
		const boolHZDSRC5 = await KPLAYUtV1nm.isFrozen.call(addressiTI4e9U, {from: accounts[4]});

		await expect(KPLAYUtV1nm.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEJTrOCh = await KPLAY.new({from: accounts[4]});
		const uintkHUttQC = BigInt("1714")
		const addressPlWJ6l = accounts[5]
		const uintwewInIT = BigInt("846")
		const addressGb6Jpm = accounts[2]
		const uintLgp75f5 = BigInt("869")
		const addressZbMmHQr = accounts[2]
		const boolGB6cXyu = await KPLAYEJTrOCh.transfer.call(addressPlWJ6l, uintkHUttQC, {from: accounts[0]});
		const booltncRctE = await KPLAYEJTrOCh.approve.call(addressGb6Jpm, uintwewInIT, {from: accounts[0]});
		await KPLAYEJTrOCh.whenPaused.call({from: accounts[2]});
		const boolfgaIRC1 = await KPLAYEJTrOCh.transfer.call(addressZbMmHQr, uintLgp75f5, {from: accounts[1]});

		await expect(KPLAYEJTrOCh.transfer.call(addressPlWJ6l, uintkHUttQC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlEti8Es = await KPLAY.new({from: accounts[3]});
		const uint60KxyF = BigInt("1675")
		const addressi6llRiF = "0x0000000000000000000000000000000000000001"
		const addressjozPpAD = accounts[4]
		const addressGQ7ewh7 = accounts[1]
		const boolYLb4lA = await KPLAYlEti8Es.approve.call(addressi6llRiF, uint60KxyF, {from: accounts[1]});
		const addressjuNw037 = await KPLAYlEti8Es.unfreeze.call(addressjozPpAD, {from: accounts[4]});
		const uint25630Y6w6 = await KPLAYlEti8Es.lockCount.call(addressGQ7ewh7, {from: accounts[3]});

		assert.equal(boolYLb4lA, true)
		await expect(KPLAYlEti8Es.unfreeze.call(addressjozPpAD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYnkVLmHm = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVAUE8uD = accounts[3]
		const addressz2mlfqH = accounts[4]
		const uintMWO1W2m = BigInt("676")
		const addressOj08Uvg = accounts[0]
		const uint256eR41Hwz = await KPLAYnkVLmHm.allowance.call(addressz2mlfqH, addressVAUE8uD, {from: accounts[4]});
		await KPLAYnkVLmHm.unpause.call({from: accounts[1]});
		const boolOCiYcme = await KPLAYnkVLmHm.transfer.call(addressOj08Uvg, uintMWO1W2m, {from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressySqRml7 = accounts[4]
		const addresstC2AiT = "0x0000000000000000000000000000000000000001"
		const uintUbc5JgA = BigInt("1167")
		const addressRkEjavp = accounts[3]
		const uintzhyYPF = BigInt("1509")
		const addressZBHo4Ee = accounts[2]
		const addressk3Ak7ut = accounts[3]
		const uintVM3svH = BigInt("1564")
		const addressHm5UfWc = "0x0000000000000000000000000000000000000001"
		const addressLzJ5qvy = "0x0000000000000000000000000000000000000001"
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addresstC2AiT, addressySqRml7, {from: accounts[0]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressRkEjavp, uintUbc5JgA, {from: "0x0000000000000000000000000000000000000001"});
		const bool7iDWlr = await KPLAYEkAO2l.transferFrom.call(addressk3Ak7ut, addressZBHo4Ee, uintzhyYPF, {from: accounts[2]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressLzJ5qvy, addressHm5UfWc, uintVM3svH, {from: accounts[1]});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		await expect(KPLAYEkAO2l.transfer.call(addressRkEjavp, uintUbc5JgA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYZ28eL3C = await KPLAY.new({from: accounts[2]});
		const addressQcktyKM = accounts[1]
		const uintwdAPWAp = BigInt("1823")
		const uintilLKUw = BigInt("216")
		const addressdVfX4Ux = accounts[1]
		await KPLAYZ28eL3C.whenNotFrozen.call({from: accounts[3]});
		const addressutATKw8 = await KPLAYZ28eL3C.unfreeze.call(addressQcktyKM, {from: accounts[4]});
		const addressDtNIOGI = await KPLAYZ28eL3C.lock.call(addressdVfX4Ux, uintilLKUw, uintwdAPWAp, {from: accounts[0]});

		await expect(KPLAYZ28eL3C.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY297h2h = await KPLAY.new({from: accounts[1]});
		const uintCjTsEj2 = BigInt("2030")
		const addressTPOQjxU = accounts[2]
		const address2WftMw = accounts[0]
		const uinttyYyYH4 = BigInt("740")
		const addressSlXKzKH = accounts[4]
		const addressTo6Okbd = accounts[1]
		const boolY3g3ZSq = await KPLAY297h2h.decreaseAllowance.call(addressTPOQjxU, uintCjTsEj2, {from: accounts[0]});
		const addressPfq9E6b = await KPLAY297h2h.transferOwnership.call(address2WftMw, {from: accounts[2]});
		const boolhkdLGr = await KPLAY297h2h.transferFrom.call(addressTo6Okbd, addressSlXKzKH, uinttyYyYH4, {from: accounts[4]});
		await KPLAY297h2h.renounceOwnership.call({from: accounts[2]});

		await expect(KPLAY297h2h.decreaseAllowance.call(addressTPOQjxU, uintCjTsEj2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressU9Z0nbH = accounts[4]
		const addressOSyPCIm = "0x0000000000000000000000000000000000000001"
		const uinttjwrnEr = BigInt("1368")
		const addresstRzqfS = accounts[4]
		const addressVPOyEHG = accounts[0]
		const uintyQvoSyy = BigInt("1167")
		const addresspQEX0J = accounts[3]
		const uintaACqMx = BigInt("1509")
		const addressT5U6ghz = accounts[2]
		const addressq6AGmrF = accounts[3]
		const uintbt09xF4 = BigInt("1564")
		const addressZMgHYt = "0x0000000000000000000000000000000000000001"
		const addressJLdVTxK = "0x0000000000000000000000000000000000000001"
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addressOSyPCIm, addressU9Z0nbH, {from: accounts[0]});
		const boolQD3lVB8 = await KPLAYEkAO2l.approve.call(addresstRzqfS, uinttjwrnEr, {from: accounts[4]});
		const boolrcG38Ey = await KPLAYEkAO2l.isFrozen.call(addressVPOyEHG, {from: accounts[2]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addresspQEX0J, uintyQvoSyy, {from: "0x0000000000000000000000000000000000000001"});
		const bool7iDWlr = await KPLAYEkAO2l.transferFrom.call(addressq6AGmrF, addressT5U6ghz, uintaACqMx, {from: accounts[2]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressJLdVTxK, addressZMgHYt, uintbt09xF4, {from: accounts[1]});

		assert.equal(boolQD3lVB8, true)
		assert.equal(boolrcG38Ey, false)
		assert.equal(uint256GqAyvDX, BigInt("0"))
		await expect(KPLAYEkAO2l.transfer.call(addresspQEX0J, uintyQvoSyy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressbkWIntd = accounts[4]
		const addresssOkMBeP = "0x0000000000000000000000000000000000000001"
		const addressV3rZRE5 = accounts[2]
		const uinto9YYBUw = BigInt("1167")
		const addressG25cqyo = accounts[3]
		const uintjMNA18 = BigInt("1509")
		const addressDzz6yXJ = accounts[3]
		const addresszsAg0Vr = accounts[3]
		const uintBb1rYCE = BigInt("1564")
		const addressWcQQLd6 = "0x0000000000000000000000000000000000000001"
		const addressaa2oXBO = "0x0000000000000000000000000000000000000001"
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addresssOkMBeP, addressbkWIntd, {from: accounts[0]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(addressV3rZRE5, {from: accounts[3]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressG25cqyo, uinto9YYBUw, {from: "0x0000000000000000000000000000000000000001"});
		const bool7iDWlr = await KPLAYEkAO2l.transferFrom.call(addresszsAg0Vr, addressDzz6yXJ, uintjMNA18, {from: accounts[2]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressaa2oXBO, addressWcQQLd6, uintBb1rYCE, {from: accounts[1]});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		assert.equal(uint256HO0cYH6, BigInt("10000000000000000"))
		await expect(KPLAYEkAO2l.transfer.call(addressG25cqyo, uinto9YYBUw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressIZEWj6 = accounts[4]
		const addressyXEmFLi = "0x0000000000000000000000000000000000000001"
		const address8CUzAp = accounts[2]
		const uintee4P30y = BigInt("1980")
		const addressT76A0H2 = accounts[2]
		const addressNuW4Fig = accounts[2]
		const addressBbZWieP = accounts[4]
		const uintCWBu73 = BigInt("1167")
		const addressFf1Gqa3 = accounts[4]
		const uintv14XQdW = BigInt("1751")
		const addressV1i457S = accounts[0]
		const uintZpT997f = BigInt("1564")
		const addressvMdvMWt = "0x0000000000000000000000000000000000000001"
		const addressU4RqrXe = "0x0000000000000000000000000000000000000001"
		const uintdrFHb7B = BigInt("563")
		const addressEiZyk3l = accounts[5]
		const addresscyhqHst = accounts[1]
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addressyXEmFLi, addressIZEWj6, {from: accounts[0]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(address8CUzAp, {from: accounts[3]});
		await KPLAYEkAO2l.lockState.call(addressT76A0H2, uintee4P30y, {from: accounts[2]});
		const uint256JpPzcM = await KPLAYEkAO2l.allowance.call(addressBbZWieP, addressNuW4Fig, {from: accounts[3]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressFf1Gqa3, uintCWBu73, {from: "0x0000000000000000000000000000000000000001"});
		const boolqNjwif8 = await KPLAYEkAO2l.mint.call(addressV1i457S, uintv14XQdW, {from: accounts[3]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressU4RqrXe, addressvMdvMWt, uintZpT997f, {from: accounts[1]});
		const boolqHJuNwC = await KPLAYEkAO2l.transferFrom.call(addresscyhqHst, addressEiZyk3l, uintdrFHb7B, {from: accounts[0]});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		assert.equal(uint256HO0cYH6, BigInt("10000000000000000"))
		await expect(KPLAYEkAO2l.lockState.call(addressT76A0H2, uintee4P30y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRuJqBJ = await KPLAY.new({from: accounts[1]});
		const uintyaL10M0 = BigInt("966")
		const uint256Ntz54Ow = await KPLAYRuJqBJ.afterTime.call(uintyaL10M0, {from: accounts[1]});
		await KPLAYRuJqBJ.pause.call({from: accounts[2]});

		assert.equal(uint256Ntz54Ow, BigInt("1630230759"))
		await expect(KPLAYRuJqBJ.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRuJqBJ = await KPLAY.new({from: accounts[1]});
		const uint256Grj2mZ = await KPLAYRuJqBJ.currentTime.call({from: accounts[0]});

		assert.equal(uint256Grj2mZ, BigInt("1630229771"))
	});

	it('test for KPLAY', async () => {
		const KPLAYRuJqBJ = await KPLAY.new({from: accounts[1]});
		await KPLAYRuJqBJ.pause.call({from: accounts[1]});
		const uint256Grj2mZ = await KPLAYRuJqBJ.currentTime.call({from: accounts[0]});

		await expect(KPLAYRuJqBJ.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintwYMuhkh = BigInt("1456")
		const addressHmWiEya = accounts[4]
		const addressRRIwHfa = accounts[4]
		const addressuqV1Ikl = "0x0000000000000000000000000000000000000001"
		const uintUbGdcp8 = BigInt("1167")
		const addresssUiojIr = accounts[3]
		const booliP0Z3B = await KPLAYEkAO2l.increaseAllowance.call(addressHmWiEya, uintwYMuhkh, {from: accounts[4]});
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addressuqV1Ikl, addressRRIwHfa, {from: accounts[0]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addresssUiojIr, uintUbGdcp8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliP0Z3B, true)
		assert.equal(uint256GqAyvDX, BigInt("0"))
		await expect(KPLAYEkAO2l.transfer.call(addresssUiojIr, uintUbGdcp8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTlY0jn = await KPLAY.new({from: accounts[2]});
		const addressQQAVkU6 = accounts[3]
		const uint0IyMOG = BigInt("868")
		const addressZsNlMhv = accounts[4]
		const uintdFFsAxj = BigInt("1270")
		const addressUr6qWoT = accounts[5]
		const addressOJWepN8 = accounts[3]
		const uint256n5UEq4B = await KPLAYTlY0jn.lockCount.call(addressQQAVkU6, {from: accounts[3]});
		await KPLAYTlY0jn.whenNotFrozen.call({from: accounts[2]});
		const uint256JUnDbYL = await KPLAYTlY0jn.totalSupply.call({from: accounts[5]});
		const boolTAr3nn4 = await KPLAYTlY0jn.increaseAllowance.call(addressZsNlMhv, uint0IyMOG, {from: accounts[3]});
		const boolVRt554E = await KPLAYTlY0jn.transferFrom.call(addressOJWepN8, addressUr6qWoT, uintdFFsAxj, {from: accounts[0]});

		assert.equal(uint256n5UEq4B, BigInt("0"))
		await expect(KPLAYTlY0jn.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintZSYHqk = BigInt("1564")
		const addressJrqjOC = "0x0000000000000000000000000000000000000000"
		const addressl26r6gr = "0x0000000000000000000000000000000000000002"
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressl26r6gr, addressJrqjOC, uintZSYHqk, {from: accounts[1]});

		await expect(KPLAYEkAO2l.transferFrom.call(addressl26r6gr, addressJrqjOC, uintZSYHqk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressKqFQrv = accounts[4]
		const addressvestiDx = "0x0000000000000000000000000000000000000001"
		const uintNKh6Vr0 = BigInt("1488")
		const uintn5Ozzt = BigInt("1222")
		const addressSFYsJrN = accounts[1]
		const addresshLZCJca = accounts[2]
		const uinttcPtWW1 = BigInt("1167")
		const addressCbYK2RW = accounts[3]
		const addressEdAfICB = accounts[1]
		const addresseNruZs4 = accounts[3]
		const uintWpjA1Xg = BigInt("1751")
		const addressMPQZhop = accounts[0]
		const uintYtfGr9N = BigInt("1564")
		const addressShciwj = "0x0000000000000000000000000000000000000002"
		const addressxtr2UM = "0x0000000000000000000000000000000000000001"
		const uintaaOlq8f = BigInt("563")
		const addressS7KNwMj = accounts[5]
		const addressdL5Cki = accounts[1]
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addressvestiDx, addressKqFQrv, {from: accounts[0]});
		const addressRbCzGG = await KPLAYEkAO2l.lockAfter.call(addressSFYsJrN, uintn5Ozzt, uintNKh6Vr0, {from: accounts[2]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(addresshLZCJca, {from: accounts[3]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressCbYK2RW, uinttcPtWW1, {from: "0x0000000000000000000000000000000000000001"});
		const address0dnBHZ = await KPLAYEkAO2l.unfreeze.call(addressEdAfICB, {from: accounts[0]});
		const uint256p4s2QEd = await KPLAYEkAO2l.lockCount.call(addresseNruZs4, {from: "0x0000000000000000000000000000000000000001"});
		const boolqNjwif8 = await KPLAYEkAO2l.mint.call(addressMPQZhop, uintWpjA1Xg, {from: accounts[3]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressxtr2UM, addressShciwj, uintYtfGr9N, {from: accounts[1]});
		const boolqHJuNwC = await KPLAYEkAO2l.transferFrom.call(addressdL5Cki, addressS7KNwMj, uintaaOlq8f, {from: accounts[0]});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		await expect(KPLAYEkAO2l.lockAfter.call(addressSFYsJrN, uintn5Ozzt, uintNKh6Vr0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintESUAFy = BigInt("1010")
		const addressdw279h0 = accounts[3]
		const uintulcC5V2 = BigInt("1564")
		const addressRo6ZDuS = "0x0000000000000000000000000000000000000000"
		const addresshO7D8WF = "0x0000000000000000000000000000000000000002"
		const addressKI0dXlB = await KPLAYEkAO2l.unlock.call(addressdw279h0, uintESUAFy, {from: accounts[2]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addresshO7D8WF, addressRo6ZDuS, uintulcC5V2, {from: accounts[1]});

		await expect(KPLAYEkAO2l.unlock.call(addressdw279h0, uintESUAFy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintBaUZVHb = BigInt("832")
		const addressnH3qQdI = accounts[5]
		const uintyOa9gl = BigInt("1010")
		const addressvlZSNKX = accounts[3]
		const uintBdsIFSf = BigInt("1736")
		const uintMYe8FUG = BigInt("966")
		const addressEJ4skb4 = accounts[3]
		const uintexN7QPL = BigInt("1564")
		const addressoTUIeOD = "0x00000000000000000000000000000000000000-1"
		const addresspXcy1AZ = "0x0000000000000000000000000000000000000002"
		await KPLAYEkAO2l.unpause.call({from: accounts[2]});
		const addressMWd4pEx = await KPLAYEkAO2l.burn.call(addressnH3qQdI, uintBaUZVHb, {from: accounts[0]});
		const addressKI0dXlB = await KPLAYEkAO2l.unlock.call(addressvlZSNKX, uintyOa9gl, {from: accounts[2]});
		const boolZr72Dzy = await KPLAYEkAO2l.transferWithLockAfter.call(addressEJ4skb4, uintMYe8FUG, uintBdsIFSf, {from: accounts[5]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addresspXcy1AZ, addressoTUIeOD, uintexN7QPL, {from: accounts[1]});

		await expect(KPLAYEkAO2l.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressBt98WI = accounts[3]
		const uintmjMJq3C = BigInt("1564")
		const addressfrwcadF = "0x0000000000000000000000000000000000000001"
		const addressXMc4bJh = "0x0000000000000000000000000000000000000003"
		const addresslpCeyTn = await KPLAYEkAO2l.freeze.call(addressBt98WI, {from: accounts[2]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressXMc4bJh, addressfrwcadF, uintmjMJq3C, {from: accounts[1]});

		await expect(KPLAYEkAO2l.transferFrom.call(addressXMc4bJh, addressfrwcadF, uintmjMJq3C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintWHRmpE7 = BigInt("838")
		const uintcxwsbdH = BigInt("35")
		const addressVRs2hOn = "0x0000000000000000000000000000000000000001"
		const addressogm5S56 = accounts[3]
		const uintRvLp1Kh = BigInt("1564")
		const addressETXghWy = "0x0000000000000000000000000000000000000001"
		const addressppowj9A = "0x0000000000000000000000000000000000000003"
		await KPLAYEkAO2l.renounceOwnership.call({from: accounts[2]});
		const boolUr6jP3f = await KPLAYEkAO2l.transferWithLock.call(addressVRs2hOn, uintcxwsbdH, uintWHRmpE7, {from: accounts[1]});
		const addresslpCeyTn = await KPLAYEkAO2l.freeze.call(addressogm5S56, {from: accounts[2]});
		const boolP3vrLET = await KPLAYEkAO2l.transferFrom.call(addressppowj9A, addressETXghWy, uintRvLp1Kh, {from: accounts[1]});

		await expect(KPLAYEkAO2l.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYx1ECSxg = await KPLAY.new({from: accounts[2]});
		const uintMlWLYAk = BigInt("233")
		const uintprxO47S = BigInt("50")
		const addressL9sVeKV = accounts[5]
		const uintpATZfGP = BigInt("715")
		const uintYRw2nON = BigInt("1404")
		const addressgc81cCF = accounts[4]
		const uintpquyHsi = BigInt("1207")
		const addressaXNUhTt = accounts[1]
		const boolu9Xan6y = await KPLAYx1ECSxg.transferWithLockAfter.call(addressL9sVeKV, uintprxO47S, uintMlWLYAk, {from: accounts[2]});
		await KPLAYx1ECSxg.unpause.call({from: accounts[3]});
		await KPLAYx1ECSxg.renounceOwnership.call({from: accounts[0]});
		await KPLAYx1ECSxg.whenPaused.call({from: accounts[4]});
		const addressAqpdOSI = await KPLAYx1ECSxg.lockAfter.call(addressgc81cCF, uintYRw2nON, uintpATZfGP, {from: accounts[1]});
		const boolqF7qklV = await KPLAYx1ECSxg.approve.call(addressaXNUhTt, uintpquyHsi, {from: accounts[3]});

		assert.equal(boolu9Xan6y, true)
		await expect(KPLAYx1ECSxg.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressa9cNH9T = accounts[4]
		const addresse5RAkD = "0x0000000000000000000000000000000000000001"
		const addressq5U0H1t = accounts[3]
		const addressS0oBw7 = accounts[2]
		const addresso1ZsFVM = "0x0000000000000000000000000000000000000001"
		const uintCnKW2r = BigInt("18")
		const uintLvDhkkC = BigInt("1629")
		const address78Owb7 = accounts[4]
		const uintP8TSngQ = BigInt("1167")
		const addressCjMeAEk = accounts[3]
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addresse5RAkD, addressa9cNH9T, {from: accounts[0]});
		const uint256R8CWZaA = await KPLAYEkAO2l.currentTime.call({from: accounts[5]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(addressq5U0H1t, {from: accounts[3]});
		const uint256ySCb1Ct = await KPLAYEkAO2l.allowance.call(addresso1ZsFVM, addressS0oBw7, {from: accounts[0]});
		const addressQkw7KHt = await KPLAYEkAO2l.lock.call(address78Owb7, uintLvDhkkC, uintCnKW2r, {from: accounts[2]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressCjMeAEk, uintP8TSngQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		assert.equal(uint256HO0cYH6, BigInt("0"))
		assert.equal(uint256R8CWZaA, BigInt("1630229785"))
		assert.equal(uint256ySCb1Ct, BigInt("0"))
		await expect(KPLAYEkAO2l.lock.call(address78Owb7, uintLvDhkkC, uintCnKW2r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressl5jSLi = accounts[4]
		const addresslGVbPA3 = "0x0000000000000000000000000000000000000001"
		const uintNwwvDHq = BigInt("1602")
		const addressDo0GRdg = accounts[1]
		const uintgGoh3nR = BigInt("1263")
		const addressEHgEEZD = accounts[1]
		const addressZDct0zd = accounts[5]
		const addressr57DRA = "0x0000000000000000000000000000000000000001"
		const uintqXAip1T = BigInt("1167")
		const addressv1kQu69 = accounts[3]
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addresslGVbPA3, addressl5jSLi, {from: accounts[0]});
		const addressJkNyGzD = await KPLAYEkAO2l.burn.call(addressDo0GRdg, uintNwwvDHq, {from: accounts[2]});
		const boolAGqoSQh = await KPLAYEkAO2l.increaseAllowance.call(addressEHgEEZD, uintgGoh3nR, {from: accounts[1]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(addressZDct0zd, {from: accounts[3]});
		const boolydnaSE = await KPLAYEkAO2l.isFrozen.call(addressr57DRA, {from: accounts[4]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressv1kQu69, uintqXAip1T, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		await expect(KPLAYEkAO2l.burn.call(addressDo0GRdg, uintNwwvDHq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEqpp1Bg = await KPLAY.new({from: accounts[0]});
		const addressQEm1hEv = accounts[1]
		const uint256f3pMQaF = await KPLAYEqpp1Bg.totalSupply.call({from: accounts[4]});
		await KPLAYEqpp1Bg.pause.call({from: accounts[5]});
		await KPLAYEqpp1Bg.unpause.call({from: accounts[4]});
		const uint256u1j1Lt = await KPLAYEqpp1Bg.lockCount.call(addressQEm1hEv, {from: accounts[0]});

		assert.equal(uint256f3pMQaF, BigInt("10000000000000000"))
		await expect(KPLAYEqpp1Bg.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintoAlNecr = BigInt("740")
		const addressi1HN8G = accounts[2]
		const uint3lJaw1 = BigInt("1252")
		const addressGiMUxgB = accounts[3]
		const boolBFg6Ntj = await KPLAYEkAO2l.mint.call(addressi1HN8G, uintoAlNecr, {from: accounts[2]});
		const addressKI0dXlB = await KPLAYEkAO2l.unlock.call(addressGiMUxgB, uint3lJaw1, {from: accounts[2]});

		assert.equal(boolBFg6Ntj, true)
		await expect(KPLAYEkAO2l.unlock.call(addressGiMUxgB, uint3lJaw1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addressmw2z9tw = accounts[5]
		const addressTbVkJu6 = accounts[4]
		const addressTkKhpXy = await KPLAYEkAO2l.unfreeze.call(addressmw2z9tw, {from: accounts[2]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(addressTbVkJu6, {from: accounts[3]});

		assert.equal(uint256HO0cYH6, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const addresstJGm0wQ = accounts[4]
		const addressHBfSPNj = "0x0000000000000000000000000000000000000001"
		const addressd7ifsKm = accounts[4]
		const addressUlxmWY = accounts[1]
		const uintTt5HPaT = BigInt("1170")
		const addressXiZsrvY = accounts[3]
		const uint256GqAyvDX = await KPLAYEkAO2l.allowance.call(addressHBfSPNj, addresstJGm0wQ, {from: accounts[0]});
		const addresslLPxyVp = await KPLAYEkAO2l.transferOwnership.call(addressd7ifsKm, {from: accounts[2]});
		const uint256rr2uZGd = await KPLAYEkAO2l.balanceOf.call(addressUlxmWY, {from: accounts[2]});
		const booliGyUNcE = await KPLAYEkAO2l.transfer.call(addressXiZsrvY, uintTt5HPaT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GqAyvDX, BigInt("0"))
		assert.equal(uint256rr2uZGd, BigInt("0"))
		await expect(KPLAYEkAO2l.transfer.call(addressXiZsrvY, uintTt5HPaT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEkAO2l = await KPLAY.new({from: accounts[2]});
		const uintKjFSK6y = BigInt("617")
		const uintNhLDba9 = BigInt("520")
		const addressulEh0Vj = accounts[1]
		const addressZSvvuh = accounts[4]
		const boolrjwtwLx = await KPLAYEkAO2l.transferWithLock.call(addressulEh0Vj, uintNhLDba9, uintKjFSK6y, {from: accounts[2]});
		const uint256HO0cYH6 = await KPLAYEkAO2l.balanceOf.call(addressZSvvuh, {from: accounts[3]});

		assert.equal(boolrjwtwLx, true)
		assert.equal(uint256HO0cYH6, BigInt("0"))
	});
})