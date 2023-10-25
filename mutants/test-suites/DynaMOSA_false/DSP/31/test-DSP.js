const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringCZadTUP = "eY"
		const stringj9vsTAN = "DjbIrTuqRbzYUbugXe3hTFi7WmeBzaicy15D5A4LViBrp7CAGWNWuW"
		const uintXkifiY1 = BigInt("33")
		const DSPRb1lkV = await DSP.new(stringCZadTUP, stringj9vsTAN, uintXkifiY1, {from: accounts[3]});
		const addressntQrZAe = accounts[5]
		const uintpz9Z8UC = BigInt("35")
		const addressTMLfcag = accounts[0]
		const addressRubeX5 = accounts[3]
		const uintxIY5nAI = BigInt("142")
		const addressotNADTA = accounts[2]
		await DSPRb1lkV.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booldqHXltC = await DSPRb1lkV.freezeAccount.call(addressntQrZAe, {from: accounts[3]});
		const boolAVipbD5 = await DSPRb1lkV.transferFrom.call(addressRubeX5, addressTMLfcag, uintpz9Z8UC, {from: accounts[1]});
		const uint8WzN6ubA = await DSPRb1lkV.decimals.call({from: accounts[3]});
		const booltjQD8ba = await DSPRb1lkV.transfer.call(addressotNADTA, uintxIY5nAI, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPmmLpWmn = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfV5snJ = accounts[0]
		const addressIzIoRA0 = accounts[3]
		const uintGJGDIZc = BigInt("1481")
		const addressxcnsOQT = accounts[0]
		await DSPmmLpWmn.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrqTg1U5 = await DSPmmLpWmn.notFrozen.call(addressfV5snJ, {from: accounts[0]});
		const uint256niz7CeA = await DSPmmLpWmn.balanceOf.call(addressIzIoRA0, {from: accounts[1]});
		const bool6OTKne = await DSPmmLpWmn.mint.call(addressxcnsOQT, uintGJGDIZc, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const uintN7wCFBr = BigInt("461")
		const addressHyd1pZ = accounts[0]
		const uintQfBkyJC = BigInt("1318")
		const addressRnhQJZH = accounts[1]
		const uintSiMQGTF = BigInt("1350")
		const uintZf0PQ1z = BigInt("1688")
		const addressV9FGXJS = accounts[0]
		const boollopVr41 = await DSPZnDYFty.increaseAllowance.call(addressHyd1pZ, uintN7wCFBr, {from: accounts[1]});
//		const boolDJgtXR = await DSPZnDYFty.unlock.call(addressRnhQJZH, uintQfBkyJC, {from: accounts[2]});
//		const boolP4ZY5nz = await DSPZnDYFty.lock.call(addressV9FGXJS, uintZf0PQ1z, uintSiMQGTF, {from: accounts[2]});

		assert.equal(boollopVr41, true)
		await expect(DSPZnDYFty.unlock.call(addressRnhQJZH, uintQfBkyJC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressJ7QaYm4 = accounts[0]
		const addressKFNovxj = accounts[4]
		const uintoZ64Lk = BigInt("905")
		const addressFop0pha = accounts[4]
		const uintNNbjiMW = BigInt("372")
		const addressA7jAczA = accounts[2]
		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addressJ7QaYm4, {from: accounts[1]});
		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addressKFNovxj, {from: accounts[1]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressFop0pha, uintoZ64Lk, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addressA7jAczA, uintNNbjiMW, {from: accounts[4]});

		assert.equal(boolBwY8hUp, true)
		assert.equal(uint256HsZoKEh, BigInt("0"))
		await expect(DSPilDiFh0.burnFrombyOwner.call(addressFop0pha, uintoZ64Lk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressUmIkLkx = accounts[0]
		const addressITAZP42 = accounts[3]
		const uintxBMlwZG = BigInt("1185")
		const addressmI6wrz = accounts[1]
		const addressPsIu7v = accounts[2]
		const addressiBcug0R = accounts[5]
		const uintv9Druet = BigInt("905")
		const addressGZxwuHi = accounts[4]
		const uintiNAhpqC = BigInt("372")
		const addressImwqACv = accounts[2]
		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addressUmIkLkx, {from: accounts[1]});
		const addressRlB2A53 = await DSPilDiFh0.transferOwnership.call(addressITAZP42, {from: accounts[0]});
//		const boolCRib9Mc = await DSPilDiFh0.transferFrom.call(addressPsIu7v, addressmI6wrz, uintxBMlwZG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addressiBcug0R, {from: accounts[1]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressGZxwuHi, uintv9Druet, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addressImwqACv, uintiNAhpqC, {from: accounts[4]});

		assert.equal(boolBwY8hUp, true)
		await expect(DSPilDiFh0.transferFrom.call(addressPsIu7v, addressmI6wrz, uintxBMlwZG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressjVvxR7 = accounts[1]
		const address8G3a53 = accounts[4]
		const uintVKqG2CZ = BigInt("905")
		const addressQorROYi = accounts[4]
		const uintsoypogY = BigInt("372")
		const addressYAAjZYG = accounts[2]
		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addressjVvxR7, {from: accounts[1]});
		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(address8G3a53, {from: accounts[1]});
//		await DSPilDiFh0.onlyPauser.call({from: accounts[2]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressQorROYi, uintVKqG2CZ, {from: accounts[4]});
//		await DSPilDiFh0.onlyPauser.call({from: accounts[5]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addressYAAjZYG, uintsoypogY, {from: accounts[4]});

		assert.equal(boolBwY8hUp, false)
		assert.equal(uint256HsZoKEh, BigInt("0"))
		await expect(DSPilDiFh0.onlyPauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPedMPZu = await DSP.new({from: accounts[2]});
		const addresswlVJGr = accounts[2]
		const uintVcoSWrE = BigInt("825")
		const addressUTuJ35T = accounts[3]
		const addressu8SwhSN = accounts[2]
		const booligfJw3Z = await DSPedMPZu.paused.call({from: accounts[2]});
//		await DSPedMPZu.whenNotPaused.call({from: accounts[1]});
//		const uint256UtXBoLI = await DSPedMPZu.balanceOf.call(addresswlVJGr, {from: accounts[0]});
//		const boolDpze03n = await DSPedMPZu.increaseAllowance.call(addressUTuJ35T, uintVcoSWrE, {from: accounts[1]});
//		const addressnyOlay6 = await DSPedMPZu.upgradeTo.call(addressu8SwhSN, {from: accounts[4]});

		assert.equal(booligfJw3Z, false)
		await expect(DSPedMPZu.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressOU0uaf8 = accounts[3]
		const uintqYvK7Js = BigInt("1649")
		const addressR5rwXhr = accounts[4]
		const uintFUqJsDS = BigInt("1340")
		const addressiGm9oxv = accounts[0]
		const addressFGDZRtc = accounts[1]
		const addressbmWJU8Q = accounts[0]
		const addressfBgGgqt = accounts[4]
		const uinth4PjYar = BigInt("1185")
		const addressdSnx6sL = accounts[1]
		const addresswuyvLYh = accounts[2]
		const addressSymRJYT = accounts[5]
		const uintTTKhryU = BigInt("905")
		const addressG5UqCQg = accounts[4]
		const uintU5tBW9 = BigInt("372")
		const addresssxqP6P0 = accounts[2]
		const uint256HEDVj6U = await DSPilDiFh0.balanceOf.call(addressOU0uaf8, {from: accounts[1]});
//		await DSPilDiFh0.f.call({from: accounts[4]});
//		const booldpo47i8 = await DSPilDiFh0.increaseAllowance.call(addressR5rwXhr, uintqYvK7Js, {from: accounts[2]});
//		const boolaVwacDJ = await DSPilDiFh0.transferFrom.call(addressFGDZRtc, addressiGm9oxv, uintFUqJsDS, {from: accounts[3]});
//		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addressbmWJU8Q, {from: accounts[1]});
//		const addressRlB2A53 = await DSPilDiFh0.transferOwnership.call(addressfBgGgqt, {from: accounts[0]});
//		const boolCRib9Mc = await DSPilDiFh0.transferFrom.call(addresswuyvLYh, addressdSnx6sL, uinth4PjYar, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addressSymRJYT, {from: accounts[1]});
//		await DSPilDiFh0.whenNotPaused.call({from: accounts[3]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressG5UqCQg, uintTTKhryU, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addresssxqP6P0, uintU5tBW9, {from: accounts[4]});

		assert.equal(uint256HEDVj6U, BigInt("0"))
		await expect(DSPilDiFh0.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const uintd6psrdP = BigInt("196")
		const addressgQduADA = accounts[5]
		const uintoeAoiOZ = BigInt("461")
		const addressNhUm6HH = accounts[0]
		const uintbDCO20u = BigInt("1350")
		const uintLqR5hoK = BigInt("1688")
		const address3x7pdD = accounts[1]
//		const boolcf2EpFH = await DSPZnDYFty.transfer.call(addressgQduADA, uintd6psrdP, {from: accounts[0]});
//		const boollopVr41 = await DSPZnDYFty.increaseAllowance.call(addressNhUm6HH, uintoeAoiOZ, {from: accounts[1]});
//		const boolP4ZY5nz = await DSPZnDYFty.lock.call(address3x7pdD, uintLqR5hoK, uintbDCO20u, {from: accounts[2]});

		await expect(DSPZnDYFty.transfer.call(addressgQduADA, uintd6psrdP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPSSUwwdj = await DSP.new({from: accounts[4]});
		const addressjslo235 = accounts[4]
		const uintk0rOuGq = BigInt("1230")
		const addressLnmeW3Q = accounts[3]
		const addressswNqHhh = accounts[1]
		const boolFhvEFAX = await DSPSSUwwdj.isOwner.call(addressjslo235, {from: accounts[0]});
//		const boolSvE2Rop = await DSPSSUwwdj.burnFrombyOwner.call(addressLnmeW3Q, uintk0rOuGq, {from: accounts[0]});
//		const addressIPMFdpI = await DSPSSUwwdj.notFrozen.call(addressswNqHhh, {from: accounts[5]});
//		await DSPSSUwwdj.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolFhvEFAX, true)
		await expect(DSPSSUwwdj.burnFrombyOwner.call(addressLnmeW3Q, uintk0rOuGq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const uintLo1Yel = BigInt("1870")
		const addressaKI9Tq9 = "0x0000000000000000000000000000000000000001"
		const addressZk5WkM = accounts[3]
		const uintNPiIxRf = BigInt("1215")
		const uintuXau3Zo = BigInt("403")
		const addresshqtAPUu = accounts[3]
		const addresswTTjk8 = accounts[0]
		const addressAJZ91Nm = accounts[4]
		const uintorPD90 = BigInt("1185")
		const addressyeam8y = accounts[1]
		const addresskeaxbm8 = accounts[2]
		const addressiuEhFRG = accounts[5]
		const uintPbQhDUe = BigInt("905")
		const addressrY1upf = accounts[4]
		const uintCSF2Xfm = BigInt("372")
		const addresseU2zUh9 = accounts[2]
//		const boolDfYvKBo = await DSPilDiFh0.decreaseAllowance.call(addressaKI9Tq9, uintLo1Yel, {from: accounts[0]});
//		const uint256HEDVj6U = await DSPilDiFh0.balanceOf.call(addressZk5WkM, {from: accounts[1]});
//		const boolLBFTP9k = await DSPilDiFh0.lock.call(addresshqtAPUu, uintuXau3Zo, uintNPiIxRf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addresswTTjk8, {from: accounts[1]});
//		const addressRlB2A53 = await DSPilDiFh0.transferOwnership.call(addressAJZ91Nm, {from: accounts[0]});
//		const boolCRib9Mc = await DSPilDiFh0.transferFrom.call(addresskeaxbm8, addressyeam8y, uintorPD90, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addressiuEhFRG, {from: accounts[1]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressrY1upf, uintPbQhDUe, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addresseU2zUh9, uintCSF2Xfm, {from: accounts[4]});

		await expect(DSPilDiFh0.decreaseAllowance.call(addressaKI9Tq9, uintLo1Yel, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressYRgxXDj = accounts[3]
		const addressYO0shmf = accounts[2]
		const addressPyLDugQ = accounts[4]
		const uintl0YKCV = BigInt("1185")
		const addressRoauIrB = accounts[1]
		const addressRJ2OQVj = accounts[2]
		const addressOqyXUih = accounts[5]
		const uintAwAik7i = BigInt("905")
		const addressnWQWx0S = accounts[4]
		const uintSXq4lRI = BigInt("372")
		const addressNSVDeWG = accounts[2]
		const uintJq1ZncZ = BigInt("43")
		const addresshIwDgAC = "0x0000000000000000000000000000000000000001"
		const stringrHQ768 = await DSPilDiFh0.name.call({from: accounts[2]});
		const uint256HEDVj6U = await DSPilDiFh0.balanceOf.call(addressYRgxXDj, {from: accounts[1]});
		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addressYO0shmf, {from: accounts[1]});
		const addressRlB2A53 = await DSPilDiFh0.transferOwnership.call(addressPyLDugQ, {from: accounts[0]});
//		const boolCRib9Mc = await DSPilDiFh0.transferFrom.call(addressRJ2OQVj, addressRoauIrB, uintl0YKCV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addressOqyXUih, {from: accounts[1]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressnWQWx0S, uintAwAik7i, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addressNSVDeWG, uintSXq4lRI, {from: accounts[4]});
//		const boolXCnVO4 = await DSPilDiFh0.transfer.call(addresshIwDgAC, uintJq1ZncZ, {from: accounts[0]});

		assert.equal(boolBwY8hUp, false)
		assert.equal(stringrHQ768, "DSP")
		assert.equal(uint256HEDVj6U, BigInt("0"))
		await expect(DSPilDiFh0.transferFrom.call(addressRJ2OQVj, addressRoauIrB, uintl0YKCV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const uintRvrtGZI = BigInt("196")
		const addressMFzUKt = accounts[5]
		const uintERBLlOi = BigInt("469")
		const addresscTPPCme = accounts[0]
		const uintYazfcLF = BigInt("1350")
		const uintsdMPhQ = BigInt("1688")
		const addressGePSLWn = accounts[1]
//		await DSPZnDYFty.renouncePauser.call({from: accounts[0]});
//		const boolcf2EpFH = await DSPZnDYFty.transfer.call(addressMFzUKt, uintRvrtGZI, {from: accounts[0]});
//		const boollopVr41 = await DSPZnDYFty.increaseAllowance.call(addresscTPPCme, uintERBLlOi, {from: accounts[1]});
//		const boolP4ZY5nz = await DSPZnDYFty.lock.call(addressGePSLWn, uintsdMPhQ, uintYazfcLF, {from: accounts[2]});

		await expect(DSPZnDYFty.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressPrVKW2d = accounts[1]
		const addresskkfQzor = accounts[1]
		const addressLanSD5a = accounts[3]
		const addressu2ojccc = accounts[1]
		const addressMMigQIn = accounts[4]
		const uintCNdqAIx = BigInt("1185")
		const addressWAOvKvG = accounts[1]
		const addressnzGvWAB = accounts[2]
		const addressjkEzHK1 = accounts[5]
		const uintody0yRt = BigInt("905")
		const addressdBQM031 = accounts[4]
		const uintnHMIkCa = BigInt("372")
		const addressip7NlZh = accounts[2]
		const uint256LCT818g = await DSPilDiFh0.allowance.call(addresskkfQzor, addressPrVKW2d, {from: accounts[0]});
		const uint256HEDVj6U = await DSPilDiFh0.balanceOf.call(addressLanSD5a, {from: accounts[1]});
		const boolBwY8hUp = await DSPilDiFh0.isPauser.call(addressu2ojccc, {from: accounts[1]});
		const addressRlB2A53 = await DSPilDiFh0.transferOwnership.call(addressMMigQIn, {from: accounts[0]});
//		const boolCRib9Mc = await DSPilDiFh0.transferFrom.call(addressnzGvWAB, addressWAOvKvG, uintCNdqAIx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addressjkEzHK1, {from: accounts[1]});
//		await DSPilDiFh0.whenNotPaused.call({from: accounts[5]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressdBQM031, uintody0yRt, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addressip7NlZh, uintnHMIkCa, {from: accounts[4]});

		assert.equal(boolBwY8hUp, false)
		assert.equal(uint256HEDVj6U, BigInt("0"))
		assert.equal(uint256LCT818g, BigInt("0"))
		await expect(DSPilDiFh0.transferFrom.call(addressnzGvWAB, addressWAOvKvG, uintCNdqAIx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXFQ0Oz = await DSP.new({from: accounts[0]});
		const uintUjE2X5n = BigInt("1014")
		const addressyMDED2y = accounts[3]
		const uint8b1Hy8UF = await DSPXFQ0Oz.decimals.call({from: accounts[4]});
		const booln7yE2jj = await DSPXFQ0Oz.approve.call(addressyMDED2y, uintUjE2X5n, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booln7yE2jj, true)
		assert.equal(uint8b1Hy8UF, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const uintInHBsb = BigInt("83")
		const addressizyeKhb = "0x0000000000000000000000000000000000000001"
		const uintobmviwi = BigInt("1350")
		const uintXWEbk3 = BigInt("1723")
		const addressTighrx = accounts[0]
//		const boolzYqCEFG = await DSPZnDYFty.unlock.call(addressizyeKhb, uintInHBsb, {from: accounts[1]});
//		const boolP4ZY5nz = await DSPZnDYFty.lock.call(addressTighrx, uintXWEbk3, uintobmviwi, {from: accounts[2]});

		await expect(DSPZnDYFty.unlock.call(addressizyeKhb, uintInHBsb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPilDiFh0 = await DSP.new({from: accounts[0]});
		const addressPMNtPk = accounts[1]
		const addresszE8z9sp = accounts[3]
		const uintqcc8li = BigInt("1011")
		const addresstcM2wY7 = accounts[4]
		const addresshcJDAmq = accounts[4]
		const uintXGMtC5l = BigInt("1185")
		const addressddygrqq = accounts[1]
		const addressqUmhOHo = accounts[2]
		const addresscPSLrQ = accounts[6]
		const uintkE7FX5D = BigInt("905")
		const addressA5oPCrr = accounts[4]
		const uintgPvDYlp = BigInt("372")
		const addressD2jtGv5 = accounts[2]
		const boolkRkvx54 = await DSPilDiFh0.freezeAccount.call(addressPMNtPk, {from: accounts[0]});
		const uint256HEDVj6U = await DSPilDiFh0.balanceOf.call(addresszE8z9sp, {from: accounts[1]});
//		const boolaIm1JYl = await DSPilDiFh0.transfer.call(addresstcM2wY7, uintqcc8li, {from: accounts[2]});
//		const addressRlB2A53 = await DSPilDiFh0.transferOwnership.call(addresshcJDAmq, {from: accounts[0]});
//		const boolCRib9Mc = await DSPilDiFh0.transferFrom.call(addressqUmhOHo, addressddygrqq, uintXGMtC5l, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HsZoKEh = await DSPilDiFh0.balanceOf.call(addresscPSLrQ, {from: accounts[1]});
//		const boolnnAdinJ = await DSPilDiFh0.burnFrombyOwner.call(addressA5oPCrr, uintkE7FX5D, {from: accounts[4]});
//		const boolc4A3faO = await DSPilDiFh0.burnFrombyOwner.call(addressD2jtGv5, uintgPvDYlp, {from: accounts[4]});

		assert.equal(boolkRkvx54, true)
		assert.equal(uint256HEDVj6U, BigInt("0"))
		await expect(DSPilDiFh0.transfer.call(addresstcM2wY7, uintqcc8li, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const addressJZPyftT = accounts[2]
		const stringfOzmVa4 = await DSPZnDYFty.symbol.call({from: accounts[2]});
		const uint256qMNxQ1i = await DSPZnDYFty.balanceOf.call(addressJZPyftT, {from: accounts[3]});

		assert.equal(stringfOzmVa4, "DSP")
		assert.equal(uint256qMNxQ1i, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPowMUOFi = await DSP.new({from: accounts[3]});
		const uintTdPyR7P = BigInt("39")
		const addressItdoKyl = "0x0000000000000000000000000000000000000001"
//		const boolNQGk8nv = await DSPowMUOFi.burnFrombyOwner.call(addressItdoKyl, uintTdPyR7P, {from: accounts[3]});
//		await DSPowMUOFi.onlyPauser.call({from: accounts[5]});
//		await DSPowMUOFi.f.call({from: accounts[2]});
//		const stringUZiyTTf = await DSPowMUOFi.name.call({from: accounts[5]});

		await expect(DSPowMUOFi.burnFrombyOwner.call(addressItdoKyl, uintTdPyR7P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const addressWzWHTYQ = accounts[1]
		const uint256qMNxQ1i = await DSPZnDYFty.balanceOf.call(addressWzWHTYQ, {from: accounts[3]});
		const uint256S3TQhwr = await DSPZnDYFty.totalSupply.call({from: accounts[5]});

		assert.equal(uint256S3TQhwr, BigInt("100000000000000000000000000000"))
		assert.equal(uint256qMNxQ1i, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const uintj2NAZDj = BigInt("1438")
		const uintY72CY4d = BigInt("2043")
		const addressWr7M6mS = accounts[3]
		const addressbFBxNt = accounts[2]
//		const boolF3xqK5 = await DSPZnDYFty.lock.call(addressWr7M6mS, uintY72CY4d, uintj2NAZDj, {from: accounts[1]});
//		const uint256qMNxQ1i = await DSPZnDYFty.balanceOf.call(addressbFBxNt, {from: accounts[3]});

		await expect(DSPZnDYFty.lock.call(addressWr7M6mS, uintY72CY4d, uintj2NAZDj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const addressndz6pQw = accounts[2]
		const addresswEpJu2 = accounts[3]
		const uintpMd4Dfo = BigInt("1219")
		const uintEBSe1R = BigInt("1296")
		const addressIhlIRdz = accounts[1]
		const addressUeBQBkL = accounts[2]
		const uintDKCSVHm = BigInt("842")
		const uintqT5797e = BigInt("902")
		const addresstHMm6iB = accounts[5]
		const addressiZpd0wh = await DSPZnDYFty.addPauser.call(addressndz6pQw, {from: accounts[1]});
//		const addressq6oWE4i = await DSPZnDYFty.addPauser.call(addresswEpJu2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmy7kKGx = await DSPZnDYFty.transferWithLock.call(addressIhlIRdz, uintEBSe1R, uintpMd4Dfo, {from: accounts[3]});
//		const uint256qMNxQ1i = await DSPZnDYFty.balanceOf.call(addressUeBQBkL, {from: accounts[3]});
//		const boollQ7IWfq = await DSPZnDYFty.lock.call(addresstHMm6iB, uintqT5797e, uintDKCSVHm, {from: accounts[0]});

		await expect(DSPZnDYFty.addPauser.call(addresswEpJu2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const uinthiyfl2z = BigInt("863")
		const addressAleHo7i = accounts[1]
		const uintfutWOXV = BigInt("196")
		const addresskW3J5TV = accounts[5]
		const boolVeBxxtP = await DSPZnDYFty.increaseAllowance.call(addressAleHo7i, uinthiyfl2z, {from: accounts[0]});
//		await DSPZnDYFty.pause.call({from: accounts[1]});
//		const boolcf2EpFH = await DSPZnDYFty.transfer.call(addresskW3J5TV, uintfutWOXV, {from: accounts[0]});

		assert.equal(boolVeBxxtP, true)
		await expect(DSPZnDYFty.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZnDYFty = await DSP.new({from: accounts[1]});
		const addressAKsyd7t = accounts[2]
		const addressBUbe7kq = accounts[0]
		const uint256qMNxQ1i = await DSPZnDYFty.balanceOf.call(addressAKsyd7t, {from: accounts[3]});
//		const boolH7jxwU = await DSPZnDYFty.unfreezeAccount.call(addressBUbe7kq, {from: accounts[1]});

		assert.equal(uint256qMNxQ1i, BigInt("0"))
		await expect(DSPZnDYFty.unfreezeAccount.call(addressBUbe7kq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})