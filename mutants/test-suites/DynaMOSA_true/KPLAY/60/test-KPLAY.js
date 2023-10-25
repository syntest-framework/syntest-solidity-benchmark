const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const addressuHgVHnE = accounts[4]
		const addresspocTKU = accounts[0]
		const uintb3rKBh5 = BigInt("1169")
		const uintkcyeh7T = BigInt("999")
		const addressZkGolS = accounts[2]
		const uintKWrW4a9 = BigInt("648")
		const addresssiYiWbu = accounts[1]
		const uint256jP6zdC1 = await KPLAYhj1iW80.lockCount.call(addressuHgVHnE, {from: accounts[0]});
		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addresspocTKU, {from: accounts[1]});
//		const addresseSaDd0Y = await KPLAYhj1iW80.lock.call(addressZkGolS, uintkcyeh7T, uintb3rKBh5, {from: accounts[3]});
//		const addressgPO8ADk = await KPLAYhj1iW80.burn.call(addresssiYiWbu, uintKWrW4a9, {from: accounts[1]});

		assert.equal(uint256jP6zdC1, BigInt("0"))
		assert.equal(uint256wuPGzss, BigInt("0"))
		await expect(KPLAYhj1iW80.lock.call(addressZkGolS, uintkcyeh7T, uintb3rKBh5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYE75EFZ = await KPLAY.new({from: accounts[1]});
		const uintCTODs4 = BigInt("960")
		const addressropvfR1 = accounts[1]
		const addressTqph9NS = accounts[3]
		const uintHMdhvmE = BigInt("1061")
		const uintE5fvq0M = BigInt("1147")
		const addressTAAJER = accounts[1]
//		await KPLAYE75EFZ.whenNotFrozen.call({from: accounts[4]});
//		const addressktYRRFI = await KPLAYE75EFZ.burn.call(addressropvfR1, uintCTODs4, {from: accounts[4]});
//		const uint256WOGYthg = await KPLAYE75EFZ.balanceOf.call(addressTqph9NS, {from: accounts[0]});
//		const boolUjnhFzY = await KPLAYE75EFZ.transferWithLockAfter.call(addressTAAJER, uintE5fvq0M, uintHMdhvmE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYE75EFZ.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRPQs6i = await KPLAY.new({from: accounts[4]});
		const uintw0WSell = BigInt("299")
		const addresstqWq04f = accounts[0]
		const addressrmzh6E8 = accounts[5]
		const uintGNKeKGr = BigInt("554")
		const addresszw8JnTh = "0x0000000000000000000000000000000000000001"
		const uintcmIMSvp = BigInt("1057")
		const addressWY4AHzj = "0x0000000000000000000000000000000000000001"
		const addressi9aMjYm = "0x0000000000000000000000000000000000000001"
		const bool60R5iy = await KPLAYRPQs6i.increaseAllowance.call(addresstqWq04f, uintw0WSell, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xE61CNs = await KPLAYRPQs6i.lockCount.call(addressrmzh6E8, {from: accounts[3]});
		const boolRZI3F58 = await KPLAYRPQs6i.approve.call(addresszw8JnTh, uintGNKeKGr, {from: accounts[3]});
//		const addressVJxSx9J = await KPLAYRPQs6i.burn.call(addressWY4AHzj, uintcmIMSvp, {from: accounts[0]});
//		const uint256OFTYoQ = await KPLAYRPQs6i.balanceOf.call(addressi9aMjYm, {from: accounts[5]});

		assert.equal(bool60R5iy, true)
		assert.equal(boolRZI3F58, true)
		assert.equal(uint256xE61CNs, BigInt("0"))
		await expect(KPLAYRPQs6i.burn.call(addressWY4AHzj, uintcmIMSvp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmmigk8w = await KPLAY.new({from: accounts[4]});
		const uintM5rgZec = BigInt("1365")
		const addresso4NopVX = accounts[5]
		const uintoTcHmN = BigInt("1869")
		const addressQ5Rv7eZ = accounts[1]
		const uinthcTVNyV = BigInt("1011")
		const uintKFHtaDG = BigInt("1530")
		const addressERpdGaZ = accounts[4]
		const addresssF9zhmN = accounts[1]
//		const addressJ0dtOk1 = await KPLAYmmigk8w.burn.call(addresso4NopVX, uintM5rgZec, {from: accounts[4]});
//		await KPLAYmmigk8w.whenPaused.call({from: accounts[3]});
//		const addresswk5NL22 = await KPLAYmmigk8w.burn.call(addressQ5Rv7eZ, uintoTcHmN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolo0d7fRy = await KPLAYmmigk8w.transferWithLock.call(addressERpdGaZ, uintKFHtaDG, uinthcTVNyV, {from: accounts[2]});
//		const addressvpIs2X = await KPLAYmmigk8w.transferOwnership.call(addresssF9zhmN, {from: accounts[4]});

		await expect(KPLAYmmigk8w.burn.call(addresso4NopVX, uintM5rgZec, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYnwUD594 = await KPLAY.new({from: accounts[1]});
		const uintG8ajAD2 = BigInt("964")
		const addressFZ9aHEh = accounts[5]
		const uintTdTyCb5 = BigInt("1190")
		const uintKm7e0bk = BigInt("1913")
		const address9hiA5p = accounts[5]
		const uintxNCj5Zz = BigInt("893")
		const addresshIsbRvM = accounts[3]
		const uintY7z3xIh = BigInt("2046")
		const addressEDycie4 = "0x0000000000000000000000000000000000000001"
//		const boolO2sjYAl = await KPLAYnwUD594.decreaseAllowance.call(addressFZ9aHEh, uintG8ajAD2, {from: accounts[4]});
//		const boolgRCySyx = await KPLAYnwUD594.transferWithLockAfter.call(address9hiA5p, uintKm7e0bk, uintTdTyCb5, {from: accounts[1]});
//		const boolpYDiLhq = await KPLAYnwUD594.decreaseAllowance.call(addresshIsbRvM, uintxNCj5Zz, {from: accounts[1]});
//		await KPLAYnwUD594.whenPaused.call({from: accounts[1]});
//		await KPLAYnwUD594.renounceOwnership.call({from: accounts[1]});
//		const addressLI4sijo = await KPLAYnwUD594.unlock.call(addressEDycie4, uintY7z3xIh, {from: accounts[5]});

		await expect(KPLAYnwUD594.decreaseAllowance.call(addressFZ9aHEh, uintG8ajAD2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWrn1Kfs = await KPLAY.new({from: accounts[4]});
		const uint33P7ua = BigInt("1557")
		const addressaSYAJ0J = "0x0000000000000000000000000000000000000001"
		const addressNJWPFCT = accounts[1]
		const uintoBodBLO = BigInt("1925")
		const addressygC063m = accounts[0]
		const addressfe4E1Qu = accounts[0]
		const addressRwRCvfB = accounts[0]
//		const boolWGABidF = await KPLAYWrn1Kfs.transfer.call(addressaSYAJ0J, uint33P7ua, {from: accounts[3]});
//		await KPLAYWrn1Kfs.whenPaused.call({from: accounts[4]});
//		const addressuCaoAq = await KPLAYWrn1Kfs.unfreeze.call(addressNJWPFCT, {from: accounts[0]});
//		const booldyfx4Ps = await KPLAYWrn1Kfs.mint.call(addressygC063m, uintoBodBLO, {from: accounts[1]});
//		const uint256WXCse0I = await KPLAYWrn1Kfs.allowance.call(addressRwRCvfB, addressfe4E1Qu, {from: accounts[3]});
//		await KPLAYWrn1Kfs.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYWrn1Kfs.transfer.call(addressaSYAJ0J, uint33P7ua, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKjW8qSR = await KPLAY.new({from: accounts[2]});
		const uintHL0QlSb = BigInt("996")
		const addressXedAA4m = accounts[3]
		const addresswOwDm3U = accounts[0]
		const addressyyO4vKq = accounts[3]
		const uintmBrvGGQ = BigInt("868")
		const addressS7lz5B = accounts[2]
		const addressYBb3Jh4 = accounts[2]
//		const boolsJpSiIK = await KPLAYKjW8qSR.transferFrom.call(addresswOwDm3U, addressXedAA4m, uintHL0QlSb, {from: accounts[3]});
//		const addressMYXJ2Eo = await KPLAYKjW8qSR.freeze.call(addressyyO4vKq, {from: accounts[0]});
//		const boolpGnuURL = await KPLAYKjW8qSR.transferFrom.call(addressYBb3Jh4, addressS7lz5B, uintmBrvGGQ, {from: accounts[4]});

		await expect(KPLAYKjW8qSR.transferFrom.call(addresswOwDm3U, addressXedAA4m, uintHL0QlSb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRTPu6gv = await KPLAY.new({from: accounts[4]});
		const addressZEiRPyC = accounts[0]
		const addressNc7dzmq = accounts[4]
		const uintcKf1vdR = BigInt("1453")
		const addressby1m6E7 = accounts[2]
		const uint2569oN1lS = await KPLAYRTPu6gv.lockCount.call(addressZEiRPyC, {from: accounts[3]});
		const uint256PvDOUV6 = await KPLAYRTPu6gv.totalSupply.call({from: accounts[0]});
//		await KPLAYRTPu6gv.whenNotFrozen.call({from: accounts[1]});
//		const address2OE570 = await KPLAYRTPu6gv.freeze.call(addressNc7dzmq, {from: accounts[1]});
//		const boolhXNtEYj = await KPLAYRTPu6gv.decreaseAllowance.call(addressby1m6E7, uintcKf1vdR, {from: accounts[5]});

		assert.equal(uint2569oN1lS, BigInt("0"))
		assert.equal(uint256PvDOUV6, BigInt("10000000000000000"))
		await expect(KPLAYRTPu6gv.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWrn1Kfs = await KPLAY.new({from: accounts[4]});
		const addressXPe1P7g = accounts[5]
		const uintYJzKKK = BigInt("1557")
		const address24lNZX = "0x0000000000000000000000000000000000000001"
		const addresssEqdfG8 = accounts[1]
		const uintP6KkjtT = BigInt("1476")
		const addresskQzxFZu = accounts[0]
		const addressJypOoJ4 = accounts[1]
		const uintRh08u1q = BigInt("1925")
		const addressd3A91b0 = accounts[0]
		const addressAyZfsuV = accounts[0]
		const addressPmXH4Rp = accounts[1]
//		await KPLAYWrn1Kfs.renounceOwnership.call({from: accounts[4]});
//		const addressCjzB7OP = await KPLAYWrn1Kfs.unfreeze.call(addressXPe1P7g, {from: accounts[2]});
//		const boolWGABidF = await KPLAYWrn1Kfs.transfer.call(address24lNZX, uintYJzKKK, {from: accounts[3]});
//		const addresshHq9otp = await KPLAYWrn1Kfs.freeze.call(addresssEqdfG8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqXHUalc = await KPLAYWrn1Kfs.unlock.call(addresskQzxFZu, uintP6KkjtT, {from: accounts[4]});
//		await KPLAYWrn1Kfs.whenPaused.call({from: accounts[4]});
//		const addressuCaoAq = await KPLAYWrn1Kfs.unfreeze.call(addressJypOoJ4, {from: accounts[0]});
//		const booldyfx4Ps = await KPLAYWrn1Kfs.mint.call(addressd3A91b0, uintRh08u1q, {from: accounts[1]});
//		const uint256WXCse0I = await KPLAYWrn1Kfs.allowance.call(addressPmXH4Rp, addressAyZfsuV, {from: accounts[3]});
//		await KPLAYWrn1Kfs.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYWrn1Kfs.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWrn1Kfs = await KPLAY.new({from: accounts[4]});
		const uint0dXmqE = BigInt("1769")
		const uintZ6XoQPc = BigInt("1557")
		const addressTfQFe4U = "0x0000000000000000000000000000000000000001"
		const addressMzYS8n2 = accounts[2]
		const addressXL32noK = accounts[1]
		const uintbLlnNeO = BigInt("1925")
		const addressgDwi9nu = accounts[0]
		const addressjxtK4Q8 = accounts[1]
		const addressC7eatjp = accounts[0]
		const uint256c5dCUuI = await KPLAYWrn1Kfs.afterTime.call(uint0dXmqE, {from: accounts[1]});
//		const boolWGABidF = await KPLAYWrn1Kfs.transfer.call(addressTfQFe4U, uintZ6XoQPc, {from: accounts[3]});
//		await KPLAYWrn1Kfs.whenPaused.call({from: accounts[4]});
//		const addressFfNbD7 = await KPLAYWrn1Kfs.freeze.call(addressMzYS8n2, {from: accounts[5]});
//		const addressuCaoAq = await KPLAYWrn1Kfs.unfreeze.call(addressXL32noK, {from: accounts[0]});
//		const booldyfx4Ps = await KPLAYWrn1Kfs.mint.call(addressgDwi9nu, uintbLlnNeO, {from: accounts[1]});
//		const uint256WXCse0I = await KPLAYWrn1Kfs.allowance.call(addressC7eatjp, addressjxtK4Q8, {from: accounts[3]});
//		await KPLAYWrn1Kfs.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256c5dCUuI, BigInt("1630230708"))
		await expect(KPLAYWrn1Kfs.transfer.call(addressTfQFe4U, uintZ6XoQPc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYR914zTG = await KPLAY.new({from: accounts[0]});
		const addressvIrHXKS = accounts[0]
		const uintqCR9uQ = BigInt("1387")
		const addressAIhFDIj = accounts[2]
		const addressT9Bxom6 = accounts[3]
		const uintoo5pU6d = BigInt("607")
		const addressi6JADRK = accounts[2]
		const uintrnNi05j = BigInt("1175")
		const addressfQvNjRw = accounts[1]
		const addressvyeJEFR = accounts[4]
		const addressVXin5OR = "0x0000000000000000000000000000000000000001"
		const uint256YA8aFoL = await KPLAYR914zTG.balanceOf.call(addressvIrHXKS, {from: accounts[0]});
//		await KPLAYR914zTG.lockState.call(addressAIhFDIj, uintqCR9uQ, {from: accounts[2]});
//		const uint256UZizQs9 = await KPLAYR914zTG.lockCount.call(addressT9Bxom6, {from: accounts[4]});
//		const boolwVjIS1W = await KPLAYR914zTG.decreaseAllowance.call(addressi6JADRK, uintoo5pU6d, {from: accounts[1]});
//		const boolwU5KtD = await KPLAYR914zTG.transferFrom.call(addressvyeJEFR, addressfQvNjRw, uintrnNi05j, {from: accounts[2]});
//		const addressxmKHyx0 = await KPLAYR914zTG.transferOwnership.call(addressVXin5OR, {from: accounts[3]});

		assert.equal(uint256YA8aFoL, BigInt("10000000000000000"))
		await expect(KPLAYR914zTG.lockState.call(addressAIhFDIj, uintqCR9uQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrrDVo7p = await KPLAY.new({from: accounts[3]});
		const addressE770Z1 = accounts[2]
		const addressoJRbzvS = accounts[3]
		const uintAnubTay = BigInt("1316")
		const uint256tWdUBbN = await KPLAYrrDVo7p.allowance.call(addressoJRbzvS, addressE770Z1, {from: accounts[0]});
		const uint256SiQ77Ip = await KPLAYrrDVo7p.afterTime.call(uintAnubTay, {from: accounts[2]});

		assert.equal(uint256SiQ77Ip, BigInt("1630230265"))
		assert.equal(uint256tWdUBbN, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYl7oKAIW = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssvFSvOl = accounts[1]
		const addresseKf9uPp = accounts[3]
		const addressu5v9YRm = accounts[1]
		const uint256kT4M7Y9 = await KPLAYl7oKAIW.balanceOf.call(addresssvFSvOl, {from: accounts[3]});
		const boolOWkkkEA = await KPLAYl7oKAIW.isFrozen.call(addresseKf9uPp, {from: accounts[2]});
		await KPLAYl7oKAIW.renounceOwnership.call({from: accounts[0]});
		const boolCsILqOm = await KPLAYl7oKAIW.isFrozen.call(addressu5v9YRm, {from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYYi5TxO = await KPLAY.new({from: accounts[0]});
		const uintWNuuIwI = BigInt("758")
		const addresszBnXZFK = accounts[4]
		const addressGi1U9MR = accounts[0]
//		const boolezaWL62 = await KPLAYYi5TxO.transferFrom.call(addressGi1U9MR, addresszBnXZFK, uintWNuuIwI, {from: accounts[2]});
//		await KPLAYYi5TxO.pause.call({from: accounts[1]});

		await expect(KPLAYYi5TxO.transferFrom.call(addressGi1U9MR, addresszBnXZFK, uintWNuuIwI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRNaaFjx = await KPLAY.new({from: accounts[4]});
		const addressO9SDcSR = "0x0000000000000000000000000000000000000001"
		const address933DYT = accounts[2]
		const uint256rTTDm1R = await KPLAYRNaaFjx.lockCount.call(addressO9SDcSR, {from: accounts[4]});
		const uint256vN0EoYV = await KPLAYRNaaFjx.currentTime.call({from: accounts[4]});
//		const addressJiDLGPo = await KPLAYRNaaFjx.transferOwnership.call(address933DYT, {from: accounts[2]});
//		await KPLAYRNaaFjx.whenNotFrozen.call({from: accounts[3]});
//		await KPLAYRNaaFjx.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256rTTDm1R, BigInt("0"))
		assert.equal(uint256vN0EoYV, BigInt("1630228945"))
		await expect(KPLAYRNaaFjx.transferOwnership.call(address933DYT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const uintmLnximg = BigInt("10")
		const uintibdcHdG = BigInt("1090")
		const addressotKJzhq = accounts[1]
		const addresskxvNJCD = accounts[4]
		const addressTlH25K9 = accounts[1]
		const uintq4u4aP = BigInt("619")
		const addressW8QNU6 = accounts[1]
		const boolIV9pL3t = await KPLAYhj1iW80.transferWithLockAfter.call(addressotKJzhq, uintibdcHdG, uintmLnximg, {from: accounts[2]});
		const uint256jP6zdC1 = await KPLAYhj1iW80.lockCount.call(addresskxvNJCD, {from: accounts[0]});
		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressTlH25K9, {from: accounts[1]});
//		const addressgPO8ADk = await KPLAYhj1iW80.burn.call(addressW8QNU6, uintq4u4aP, {from: accounts[1]});

		assert.equal(boolIV9pL3t, true)
		assert.equal(uint256jP6zdC1, BigInt("0"))
		assert.equal(uint256wuPGzss, BigInt("0"))
		await expect(KPLAYhj1iW80.burn.call(addressW8QNU6, uintq4u4aP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYiAYxchW = await KPLAY.new({from: accounts[1]});
		const addressJE6ZvuY = accounts[0]
		const uintYWnDMzK = BigInt("551")
		const addressWT3FYYR = accounts[4]
		const uintjnxf24B = BigInt("954")
		const addressY97Y6Zz = accounts[5]
		const addressQ1YmJG4 = accounts[0]
		const addressZPAsbUI = accounts[4]
		const uintFjkz5sL = BigInt("56")
		const addressAPbMpQM = accounts[4]
		const uint256hVkRSYB = await KPLAYiAYxchW.balanceOf.call(addressJE6ZvuY, {from: accounts[4]});
		const boolUcMDj8Y = await KPLAYiAYxchW.mint.call(addressWT3FYYR, uintYWnDMzK, {from: accounts[1]});
//		const addressVQydKDp = await KPLAYiAYxchW.burn.call(addressY97Y6Zz, uintjnxf24B, {from: accounts[1]});
//		const uint256XrNYiQq = await KPLAYiAYxchW.lockCount.call(addressQ1YmJG4, {from: accounts[4]});
//		const addressfvOtSzt = await KPLAYiAYxchW.freeze.call(addressZPAsbUI, {from: accounts[2]});
//		const boolNcythdz = await KPLAYiAYxchW.increaseAllowance.call(addressAPbMpQM, uintFjkz5sL, {from: accounts[1]});

		assert.equal(boolUcMDj8Y, true)
		assert.equal(uint256hVkRSYB, BigInt("0"))
		await expect(KPLAYiAYxchW.burn.call(addressY97Y6Zz, uintjnxf24B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYYi5TxO = await KPLAY.new({from: accounts[0]});
//		await KPLAYYi5TxO.pause.call({from: accounts[0]});
//		await KPLAYYi5TxO.whenPaused.call({from: accounts[4]});
//		await KPLAYYi5TxO.pause.call({from: accounts[1]});
//		await KPLAYYi5TxO.whenNotPaused.call({from: accounts[5]});

		await expect(KPLAYYi5TxO.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVyrUO2q = await KPLAY.new({from: accounts[3]});
		const addressouuE6SI = accounts[2]
		const uintRZgv9AK = BigInt("1907")
		const addressZCxTK0F = accounts[3]
		const address7W1BEH = "0x0000000000000000000000000000000000000001"
		const uintXDB6cbp = BigInt("656")
		const addressdWfGBZL = accounts[4]
		const boolFSOUvek = await KPLAYVyrUO2q.isFrozen.call(addressouuE6SI, {from: "0x0000000000000000000000000000000000000001"});
//		const boollTJ0W8t = await KPLAYVyrUO2q.transferFrom.call(address7W1BEH, addressZCxTK0F, uintRZgv9AK, {from: accounts[2]});
//		await KPLAYVyrUO2q.onlyOwner.call({from: accounts[2]});
//		await KPLAYVyrUO2q.lockState.call(addressdWfGBZL, uintXDB6cbp, {from: accounts[0]});
//		await KPLAYVyrUO2q.pause.call({from: accounts[1]});

		assert.equal(boolFSOUvek, false)
		await expect(KPLAYVyrUO2q.transferFrom.call(address7W1BEH, addressZCxTK0F, uintRZgv9AK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const addressCFykwFV = accounts[2]
		const addressCBLZczy = accounts[2]
		const uintZiBUgBi = BigInt("1170")
		const addressVH7xzlV = accounts[3]
		const addressLAu7BLH = accounts[6]
		const uintqTs9wd9 = BigInt("1030")
		const uintjTwh7Qs = BigInt("1966")
		const addressxfnv4Hk = accounts[1]
		const uintRNYcch0 = BigInt("648")
		const addressSKUxoXn = accounts[1]
		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressCFykwFV, {from: accounts[1]});
		const addressZZprHl9 = await KPLAYhj1iW80.transferOwnership.call(addressCBLZczy, {from: accounts[2]});
//		const boolmYrPfb = await KPLAYhj1iW80.transferFrom.call(addressLAu7BLH, addressVH7xzlV, uintZiBUgBi, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYhj1iW80.unpause.call({from: accounts[0]});
//		const addressEuzyZDq = await KPLAYhj1iW80.lock.call(addressxfnv4Hk, uintjTwh7Qs, uintqTs9wd9, {from: accounts[4]});
//		const addressgPO8ADk = await KPLAYhj1iW80.burn.call(addressSKUxoXn, uintRNYcch0, {from: accounts[1]});

		assert.equal(uint256wuPGzss, BigInt("10000000000000000"))
		await expect(KPLAYhj1iW80.transferFrom.call(addressLAu7BLH, addressVH7xzlV, uintZiBUgBi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const addressdCvFRDa = accounts[2]
		const uintb7EQym8 = BigInt("840")
		const uinttbs2qJ = BigInt("1256")
		const addressiDetnt = accounts[2]
		const uintB4XWF6s = BigInt("1170")
		const addressHC7LIUX = accounts[3]
		const addressAewYX5H = accounts[5]
		const uintM32eEIu = BigInt("1901")
		const uintAfQNvOm = BigInt("1603")
		const addresspeL7Rwo = accounts[5]
		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressdCvFRDa, {from: accounts[1]});
		const boolvSL6awo = await KPLAYhj1iW80.transferWithLock.call(addressiDetnt, uinttbs2qJ, uintb7EQym8, {from: accounts[2]});
//		const boolmYrPfb = await KPLAYhj1iW80.transferFrom.call(addressAewYX5H, addressHC7LIUX, uintB4XWF6s, {from: "0x0000000000000000000000000000000000000001"});
//		const addresssNcQBBU = await KPLAYhj1iW80.lock.call(addresspeL7Rwo, uintAfQNvOm, uintM32eEIu, {from: accounts[0]});
//		await KPLAYhj1iW80.unpause.call({from: accounts[0]});

		assert.equal(boolvSL6awo, true)
		assert.equal(uint256wuPGzss, BigInt("10000000000000000"))
		await expect(KPLAYhj1iW80.transferFrom.call(addressAewYX5H, addressHC7LIUX, uintB4XWF6s, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const uintEwPxECx = BigInt("770")
		const addressRRgg59 = accounts[2]
		const uinteQC9T5 = BigInt("1024")
		const uintGZw4xoI = BigInt("491")
		const addressXBLIPql = accounts[4]
		const addressXGTvv7W = accounts[2]
//		const addressDurD5y7 = await KPLAYhj1iW80.unlock.call(addressRRgg59, uintEwPxECx, {from: accounts[2]});
//		const addressv5vZCOY = await KPLAYhj1iW80.lock.call(addressXBLIPql, uintGZw4xoI, uinteQC9T5, {from: accounts[5]});
//		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressXGTvv7W, {from: accounts[1]});

		await expect(KPLAYhj1iW80.unlock.call(addressRRgg59, uintEwPxECx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const addressQBm6TNu = accounts[4]
		const addressL4DUaEe = accounts[2]
		const addressBQkSFE1 = accounts[5]
		const uint256cSRfVP4 = await KPLAYhj1iW80.lockCount.call(addressQBm6TNu, {from: accounts[4]});
		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressL4DUaEe, {from: accounts[1]});
		const addressLU5BUO3 = await KPLAYhj1iW80.unfreeze.call(addressBQkSFE1, {from: accounts[2]});

		assert.equal(uint256cSRfVP4, BigInt("0"))
		assert.equal(uint256wuPGzss, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const addresst5v0iMA = accounts[2]
//		await KPLAYhj1iW80.unpause.call({from: accounts[2]});
//		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addresst5v0iMA, {from: accounts[1]});
//		const uint256QPtcZJ9 = await KPLAYhj1iW80.currentTime.call({from: accounts[4]});
//		await KPLAYhj1iW80.unpause.call({from: accounts[1]});

		await expect(KPLAYhj1iW80.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYYi5TxO = await KPLAY.new({from: accounts[0]});
		const uintFYmdHK8 = BigInt("461")
		const uintSyUx7Bb = BigInt("1889")
		const addressd1XYUTy = accounts[1]
		const uintqYXmS7 = BigInt("584")
		const addressFAKYU8s = accounts[4]
		const addressds9yVMP = accounts[6]
		const addressVY3fdF = accounts[2]
//		const addressE57kKDE = await KPLAYYi5TxO.lock.call(addressd1XYUTy, uintSyUx7Bb, uintFYmdHK8, {from: accounts[0]});
//		const boolRzw3VpO = await KPLAYYi5TxO.transferFrom.call(addressds9yVMP, addressFAKYU8s, uintqYXmS7, {from: accounts[2]});
//		const uint256ld6rH07 = await KPLAYYi5TxO.lockCount.call(addressVY3fdF, {from: accounts[2]});

		await expect(KPLAYYi5TxO.lock.call(addressd1XYUTy, uintSyUx7Bb, uintFYmdHK8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const uintfgNRybT = BigInt("772")
		const uintl1QY9LT = BigInt("1049")
		const addressO4vancq = accounts[3]
		const addressA4pJzrL = accounts[3]
		const uintBDoYTSS = BigInt("83")
		const addressktLksg9 = accounts[4]
		const uintLMHv0tG = BigInt("1555")
		const addressQlvubRQ = accounts[5]
		const uintXDCRHeI = BigInt("871")
		const addresskIPKOnS = "0x0000000000000000000000000000000000000001"
//		const addressZ5oJHn = await KPLAYhj1iW80.lockAfter.call(addressO4vancq, uintl1QY9LT, uintfgNRybT, {from: accounts[2]});
//		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressA4pJzrL, {from: accounts[1]});
//		const boolrCT2xgN = await KPLAYhj1iW80.transfer.call(addressktLksg9, uintBDoYTSS, {from: accounts[4]});
//		await KPLAYhj1iW80.lockState.call(addressQlvubRQ, uintLMHv0tG, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYhj1iW80.lockState.call(addresskIPKOnS, uintXDCRHeI, {from: accounts[1]});

		await expect(KPLAYhj1iW80.lockAfter.call(addressO4vancq, uintl1QY9LT, uintfgNRybT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhj1iW80 = await KPLAY.new({from: accounts[2]});
		const addressMhHA5Gw = accounts[3]
		const uintQ7hU4cD = BigInt("1034")
		const addressBJteKTH = "0x0000000000000000000000000000000000000000"
		const uintTeH82mK = BigInt("1347")
		const addresscvmWHlU = accounts[2]
		const address2AxKIg = accounts[2]
		const addresssw2jCNU = accounts[3]
		const addressggnkaE = accounts[0]
		const uintbAZukYj = BigInt("1805")
		const addresssY7EHbU = accounts[4]
		const addressoZjdjSQ = accounts[2]
		const uint256wuPGzss = await KPLAYhj1iW80.balanceOf.call(addressMhHA5Gw, {from: accounts[1]});
//		const boolubVYJR = await KPLAYhj1iW80.transfer.call(addressBJteKTH, uintQ7hU4cD, {from: accounts[1]});
//		const boolnXr4nEn = await KPLAYhj1iW80.approve.call(addresscvmWHlU, uintTeH82mK, {from: accounts[1]});
//		const uint256M7JShqB = await KPLAYhj1iW80.lockCount.call(address2AxKIg, {from: accounts[1]});
//		const boolrwAeANF = await KPLAYhj1iW80.isFrozen.call(addresssw2jCNU, {from: accounts[5]});
//		await KPLAYhj1iW80.whenNotPaused.call({from: accounts[4]});
//		const addressvs0V8U9 = await KPLAYhj1iW80.unfreeze.call(addressggnkaE, {from: accounts[2]});
//		const boolkkUJiSM = await KPLAYhj1iW80.transferFrom.call(addressoZjdjSQ, addresssY7EHbU, uintbAZukYj, {from: accounts[3]});
//		await KPLAYhj1iW80.whenPaused.call({from: accounts[2]});

		assert.equal(uint256wuPGzss, BigInt("0"))
		await expect(KPLAYhj1iW80.transfer.call(addressBJteKTH, uintQ7hU4cD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYYi5TxO = await KPLAY.new({from: accounts[0]});
		const addressljurypi = accounts[2]
		const uintHkzKM8a = BigInt("584")
		const addressyoZ6XMi = accounts[4]
		const addressu8lPm1L = accounts[5]
		const addressaoyQg53 = await KPLAYYi5TxO.freeze.call(addressljurypi, {from: accounts[0]});
//		const boolRzw3VpO = await KPLAYYi5TxO.transferFrom.call(addressu8lPm1L, addressyoZ6XMi, uintHkzKM8a, {from: accounts[2]});

		await expect(KPLAYYi5TxO.transferFrom.call(addressu8lPm1L, addressyoZ6XMi, uintHkzKM8a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})