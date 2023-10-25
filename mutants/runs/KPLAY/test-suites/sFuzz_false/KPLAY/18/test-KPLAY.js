const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYpKrn077 = await KPLAY.new({from: accounts[2]});
		const uintQpqcnQr = BigInt("363")
		const uintsSACwkT = BigInt("585")
		const addressxyEpA7e = accounts[3]
		const addressYLKx1AU = accounts[5]
		const uintKokYFS = BigInt("80")
		const uintkSYLpPM = BigInt("1713")
		const addressfr7e51 = accounts[1]
		await KPLAYpKrn077.pause.call({from: accounts[1]});
		await KPLAYpKrn077.whenNotFrozen.call({from: accounts[0]});
		const bool4jCADq = await KPLAYpKrn077.transferWithLock.call(addressxyEpA7e, uintsSACwkT, uintQpqcnQr, {from: accounts[3]});
		const addresso0UcDAt = await KPLAYpKrn077.unfreeze.call(addressYLKx1AU, {from: accounts[0]});
		const bool4qO4d4 = await KPLAYpKrn077.transferWithLock.call(addressfr7e51, uintkSYLpPM, uintKokYFS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYpKrn077.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const uintOvXzSs7 = BigInt("1000")
		const addressFj1ut1J = accounts[0]
		const boolDNXdAho = await KPLAYCkLHGpt.mint.call(addressFj1ut1J, uintOvXzSs7, {from: accounts[5]});
		const uint256ujCab4G = await KPLAYCkLHGpt.currentTime.call({from: accounts[4]});

		assert.equal(boolDNXdAho, true)
		assert.equal(uint256ujCab4G, BigInt("1630227823"))
	});

	it('test for KPLAY', async () => {
		const KPLAYFwAGjjV = await KPLAY.new({from: accounts[0]});
		const addressEFO5UIY = accounts[1]
		const uintKnGsdq = BigInt("1631")
		const uintIK8nl3r = BigInt("1938")
		const addresstnzC5DC = accounts[1]
		const uint256gHmQJP = await KPLAYFwAGjjV.lockCount.call(addressEFO5UIY, {from: accounts[2]});
		await KPLAYFwAGjjV.whenPaused.call({from: accounts[4]});
		const addresse5JQMyo = await KPLAYFwAGjjV.lockAfter.call(addresstnzC5DC, uintIK8nl3r, uintKnGsdq, {from: accounts[3]});

		assert.equal(uint256gHmQJP, BigInt("0"))
		await expect(KPLAYFwAGjjV.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLuVafKf = await KPLAY.new({from: accounts[5]});
		const uintQTV7Q0s = BigInt("628")
		const addressbCVhfHs = accounts[1]
		const boolNczE4oG = await KPLAYLuVafKf.transfer.call(addressbCVhfHs, uintQTV7Q0s, {from: accounts[4]});
		const uint256NgnDFZ8 = await KPLAYLuVafKf.totalSupply.call({from: accounts[5]});
		await KPLAYLuVafKf.renounceOwnership.call({from: accounts[0]});

		await expect(KPLAYLuVafKf.transfer.call(addressbCVhfHs, uintQTV7Q0s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYba3Kij = await KPLAY.new({from: accounts[3]});
		const addressBhlpoRl = "0x0000000000000000000000000000000000000001"
		const addressAbmt2HZ = accounts[1]
		const uintmQNhES = BigInt("568")
		const addresscqRK4s = accounts[5]
		await KPLAYba3Kij.renounceOwnership.call({from: accounts[3]});
		const uint256Of5gVee = await KPLAYba3Kij.allowance.call(addressAbmt2HZ, addressBhlpoRl, {from: accounts[3]});
		const boolz7QiYq = await KPLAYba3Kij.transfer.call(addresscqRK4s, uintmQNhES, {from: accounts[3]});

		await expect(KPLAYba3Kij.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAWcnWPK = await KPLAY.new({from: accounts[4]});
		const addressIuxgfV0 = accounts[0]
		const uintFLziEiK = BigInt("202")
		const addressMQHFlOv = accounts[5]
		const addressKAjJ1J = "0x0000000000000000000000000000000000000001"
		const uintZp01rS = BigInt("398")
		const addressZHO4UCz = accounts[3]
		const boolPsRZy9e = await KPLAYAWcnWPK.isFrozen.call(addressIuxgfV0, {from: accounts[2]});
		const boolP17VCRS = await KPLAYAWcnWPK.transferFrom.call(addressKAjJ1J, addressMQHFlOv, uintFLziEiK, {from: "0x0000000000000000000000000000000000000001"});
		const boolKdLEsa = await KPLAYAWcnWPK.mint.call(addressZHO4UCz, uintZp01rS, {from: accounts[2]});

		assert.equal(boolPsRZy9e, false)
		await expect(KPLAYAWcnWPK.transferFrom.call(addressKAjJ1J, addressMQHFlOv, uintFLziEiK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYiyqNJRu = await KPLAY.new({from: accounts[3]});
		const uintYYEBwAj = BigInt("1360")
		const addressCNppYTJ = accounts[0]
		const addressMNA7qFQ = accounts[3]
		const uinttx7I6t9 = BigInt("549")
		const uintL6EXK4B = BigInt("394")
		const addressAjiZUgU = "0x0000000000000000000000000000000000000001"
		const uintI34U1X4 = BigInt("300")
		const addressbaiKy40 = accounts[1]
		const addresshU899KN = await KPLAYiyqNJRu.burn.call(addressCNppYTJ, uintYYEBwAj, {from: accounts[3]});
		const uint256Suv1QDS = await KPLAYiyqNJRu.lockCount.call(addressMNA7qFQ, {from: accounts[5]});
		const booljG7J9mZ = await KPLAYiyqNJRu.transferWithLock.call(addressAjiZUgU, uintL6EXK4B, uinttx7I6t9, {from: accounts[0]});
		await KPLAYiyqNJRu.whenNotPaused.call({from: accounts[2]});
		const boolzLwjpuS = await KPLAYiyqNJRu.decreaseAllowance.call(addressbaiKy40, uintI34U1X4, {from: accounts[5]});

		await expect(KPLAYiyqNJRu.burn.call(addressCNppYTJ, uintYYEBwAj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const uintzxa7Xe3 = BigInt("1000")
		const addressww9P5Zs = accounts[0]
		const uintUwC9MeG = BigInt("1513")
		const addressIYBleuY = accounts[3]
		const addressCvHuY6p = accounts[2]
		const uint4zdDHB = BigInt("723")
		const uintu5iMLC = BigInt("243")
		const addressyEGlPv6 = accounts[1]
		const boolDNXdAho = await KPLAYCkLHGpt.mint.call(addressww9P5Zs, uintzxa7Xe3, {from: accounts[5]});
		const boolSAROZTi = await KPLAYCkLHGpt.decreaseAllowance.call(addressIYBleuY, uintUwC9MeG, {from: accounts[4]});
		const uint256aUIqwpr = await KPLAYCkLHGpt.balanceOf.call(addressCvHuY6p, {from: accounts[2]});
		const uint256ujCab4G = await KPLAYCkLHGpt.currentTime.call({from: accounts[4]});
		const addressqcvjpd8 = await KPLAYCkLHGpt.lockAfter.call(addressyEGlPv6, uintu5iMLC, uint4zdDHB, {from: accounts[2]});

		assert.equal(boolDNXdAho, true)
		await expect(KPLAYCkLHGpt.decreaseAllowance.call(addressIYBleuY, uintUwC9MeG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY8BsZoa = await KPLAY.new({from: accounts[1]});
		const addresst2uSXcB = accounts[4]
		const addressSUPrptJ = accounts[3]
		const addressv2BfxvO = accounts[2]
		const addressCOieFBC = accounts[3]
		const uint256ZDQroeH = await KPLAY8BsZoa.balanceOf.call(addresst2uSXcB, {from: accounts[1]});
		const uint256fwUGklt = await KPLAY8BsZoa.currentTime.call({from: accounts[4]});
		const boolUYbXK0p = await KPLAY8BsZoa.isFrozen.call(addressSUPrptJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CYLYp63 = await KPLAY8BsZoa.allowance.call(addressCOieFBC, addressv2BfxvO, {from: accounts[0]});

		assert.equal(boolUYbXK0p, false)
		assert.equal(uint256CYLYp63, BigInt("0"))
		assert.equal(uint256ZDQroeH, BigInt("0"))
		assert.equal(uint256fwUGklt, BigInt("1630227835"))
	});

	it('test for KPLAY', async () => {
		const KPLAYJxfiGiI = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzs9axX1 = BigInt("356")
		const addressZcL3Zbr = accounts[4]
		const uintwZHEDU = BigInt("1608")
		const addressrDVRmAq = accounts[4]
		const booluo0riqm = await KPLAYJxfiGiI.transfer.call(addressZcL3Zbr, uintzs9axX1, {from: accounts[2]});
		await KPLAYJxfiGiI.unpause.call({from: accounts[1]});
		const boolrTOC0hl = await KPLAYJxfiGiI.transfer.call(addressrDVRmAq, uintwZHEDU, {from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const addressQcrSRvG = accounts[3]
		const uintOszKsrl = BigInt("988")
		const addressiTdutWw = accounts[0]
		const uint256Ld6iBNe = await KPLAYCkLHGpt.totalSupply.call({from: accounts[5]});
		const addresstIrCU6s = await KPLAYCkLHGpt.unfreeze.call(addressQcrSRvG, {from: accounts[0]});
		const boolDNXdAho = await KPLAYCkLHGpt.mint.call(addressiTdutWw, uintOszKsrl, {from: accounts[5]});
		await KPLAYCkLHGpt.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256Ld6iBNe, BigInt("10000000000000000"))
		await expect(KPLAYCkLHGpt.unfreeze.call(addressQcrSRvG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const uintbdDsS4s = BigInt("1005")
		const addressbkmo3an = accounts[0]
		const uintIArKuOk = BigInt("343")
		const addressgCMLh3U = accounts[0]
		const boolDNXdAho = await KPLAYCkLHGpt.mint.call(addressbkmo3an, uintbdDsS4s, {from: accounts[5]});
		await KPLAYCkLHGpt.lockState.call(addressgCMLh3U, uintIArKuOk, {from: accounts[2]});

		assert.equal(boolDNXdAho, true)
		await expect(KPLAYCkLHGpt.lockState.call(addressgCMLh3U, uintIArKuOk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDI84lmF = await KPLAY.new({from: accounts[0]});
		const uintu8Nm3n6 = BigInt("1008")
		const addressOUbGQmf = accounts[0]
		const uintxter6Jn = BigInt("1364")
		const addressoBt1itn = "0x0000000000000000000000000000000000000001"
		const addressMYAvjxy = accounts[1]
		await KPLAYDI84lmF.renounceOwnership.call({from: accounts[0]});
		const uint256e1wESkR = await KPLAYDI84lmF.afterTime.call(uintu8Nm3n6, {from: accounts[2]});
		const addressyMDDf53 = await KPLAYDI84lmF.freeze.call(addressOUbGQmf, {from: accounts[5]});
		const boolJucCBJN = await KPLAYDI84lmF.transferFrom.call(addressMYAvjxy, addressoBt1itn, uintxter6Jn, {from: accounts[5]});

		await expect(KPLAYDI84lmF.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLuVafKf = await KPLAY.new({from: accounts[5]});
		const uintxLukaoo = BigInt("947")
		const addressxBTD0hZ = accounts[3]
		const uintBNQeg9v = BigInt("1645")
		const addressxbrP2Mj = accounts[1]
		const boolkgVlscn = await KPLAYLuVafKf.increaseAllowance.call(addressxBTD0hZ, uintxLukaoo, {from: accounts[0]});
		const boolNczE4oG = await KPLAYLuVafKf.transfer.call(addressxbrP2Mj, uintBNQeg9v, {from: accounts[4]});
		const uint256NgnDFZ8 = await KPLAYLuVafKf.totalSupply.call({from: accounts[5]});

		assert.equal(boolkgVlscn, true)
		await expect(KPLAYLuVafKf.transfer.call(addressxbrP2Mj, uintBNQeg9v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLuVafKf = await KPLAY.new({from: accounts[5]});
		const uintK06drnj = BigInt("878")
		const address8ivCF7 = accounts[2]
		const uintrhv9FqX = BigInt("637")
		const addressVaneGVR = accounts[1]
		const addressV1jR48a = await KPLAYLuVafKf.unlock.call(address8ivCF7, uintK06drnj, {from: accounts[5]});
		const boolNczE4oG = await KPLAYLuVafKf.transfer.call(addressVaneGVR, uintrhv9FqX, {from: accounts[4]});

		await expect(KPLAYLuVafKf.unlock.call(address8ivCF7, uintK06drnj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const uintuw5yy8i = BigInt("997")
		const addressQ6UW9Vq = accounts[0]
		const uintO3pgLbB = BigInt("1288")
		const addressSXt36ai = accounts[0]
		const boolDNXdAho = await KPLAYCkLHGpt.mint.call(addressQ6UW9Vq, uintuw5yy8i, {from: accounts[5]});
		const boolII10fY = await KPLAYCkLHGpt.approve.call(addressSXt36ai, uintO3pgLbB, {from: accounts[5]});

		assert.equal(boolDNXdAho, true)
		assert.equal(boolII10fY, true)
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const uintTgdRJ0o = BigInt("755")
		const uintlAf8dop = BigInt("178")
		const addressPZgSDRG = accounts[3]
		const uintdPPb5w = BigInt("552")
		const uintkU3DyPs = BigInt("736")
		const addressgMvS1bU = accounts[5]
		const addressgCxGDh = accounts[4]
		const booljyRqg39 = await KPLAYCkLHGpt.transferWithLockAfter.call(addressPZgSDRG, uintlAf8dop, uintTgdRJ0o, {from: accounts[5]});
		const addressqMt3yef = await KPLAYCkLHGpt.lockAfter.call(addressgMvS1bU, uintkU3DyPs, uintdPPb5w, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fc0HmNk = await KPLAYCkLHGpt.balanceOf.call(addressgCxGDh, {from: accounts[1]});

		assert.equal(booljyRqg39, true)
		await expect(KPLAYCkLHGpt.lockAfter.call(addressgMvS1bU, uintkU3DyPs, uintdPPb5w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLuVafKf = await KPLAY.new({from: accounts[5]});
		const addressR80Cw3j = accounts[3]
		const uintY9OGIHZ = BigInt("597")
		const addresspFHOh6O = accounts[2]
		const addressQliABWD = await KPLAYLuVafKf.transferOwnership.call(addressR80Cw3j, {from: accounts[5]});
		const boolNczE4oG = await KPLAYLuVafKf.transfer.call(addresspFHOh6O, uintY9OGIHZ, {from: accounts[4]});

		await expect(KPLAYLuVafKf.transfer.call(addresspFHOh6O, uintY9OGIHZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const addressQkp24D9 = accounts[0]
		const addresssEeCKSv = accounts[4]
		const addressZEEchGC = await KPLAYCkLHGpt.unfreeze.call(addressQkp24D9, {from: accounts[5]});
		const uint256fc0HmNk = await KPLAYCkLHGpt.balanceOf.call(addresssEeCKSv, {from: accounts[1]});
		await KPLAYCkLHGpt.unpause.call({from: accounts[2]});

		assert.equal(uint256fc0HmNk, BigInt("0"))
		await expect(KPLAYCkLHGpt.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLuVafKf = await KPLAY.new({from: accounts[5]});
		const uinty34fBnb = BigInt("822")
		const uintaicqngX = BigInt("529")
		const addressINkYBoz = accounts[3]
		const uintqPQ9Uv = BigInt("597")
		const addresslPyKlxN = accounts[2]
		const addressTwrNjDD = await KPLAYLuVafKf.lock.call(addressINkYBoz, uintaicqngX, uinty34fBnb, {from: accounts[5]});
		const boolNczE4oG = await KPLAYLuVafKf.transfer.call(addresslPyKlxN, uintqPQ9Uv, {from: accounts[4]});

		await expect(KPLAYLuVafKf.lock.call(addressINkYBoz, uintaicqngX, uinty34fBnb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const addressG71DahY = accounts[3]
		const uintBDOaYn = BigInt("558")
		const uintB7lsDDg = BigInt("1117")
		const addressypIv7sW = accounts[4]
		const uint256fc0HmNk = await KPLAYCkLHGpt.balanceOf.call(addressG71DahY, {from: accounts[1]});
		const boolFO7PbWv = await KPLAYCkLHGpt.transferWithLock.call(addressypIv7sW, uintB7lsDDg, uintBDOaYn, {from: accounts[5]});

		assert.equal(boolFO7PbWv, true)
		assert.equal(uint256fc0HmNk, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const addressQn8VzHz = accounts[4]
		const uintU8oMcUU = BigInt("1849")
		const uintvAkSCs = BigInt("716")
		const addressKnaODuz = accounts[4]
		const uintgbDtPvu = BigInt("300")
		const addressnh7mAIf = accounts[5]
		const uintbSCs3vq = BigInt("679")
		const addressAGBzm5g = accounts[1]
		const uint256fc0HmNk = await KPLAYCkLHGpt.balanceOf.call(addressQn8VzHz, {from: accounts[1]});
		const addressRX144o = await KPLAYCkLHGpt.lockAfter.call(addressKnaODuz, uintvAkSCs, uintU8oMcUU, {from: accounts[5]});
		const uint256deimvo = await KPLAYCkLHGpt.afterTime.call(uintgbDtPvu, {from: accounts[3]});
		const uint256V19XdUG = await KPLAYCkLHGpt.balanceOf.call(addressnh7mAIf, {from: accounts[4]});
		const boolabOJA5r = await KPLAYCkLHGpt.mint.call(addressAGBzm5g, uintbSCs3vq, {from: accounts[1]});

		assert.equal(uint256fc0HmNk, BigInt("0"))
		await expect(KPLAYCkLHGpt.lockAfter.call(addressKnaODuz, uintvAkSCs, uintU8oMcUU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const addressxwZ5aav = accounts[1]
		const uintPEyC3n = BigInt("641")
		const address45Ql7Y = accounts[3]
		const addressvoV3XJs = accounts[3]
		const boolbmsiO5F = await KPLAYCkLHGpt.isFrozen.call(addressxwZ5aav, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYCkLHGpt.pause.call({from: accounts[5]});
		await KPLAYCkLHGpt.whenNotPaused.call({from: accounts[4]});
		await KPLAYCkLHGpt.lockState.call(address45Ql7Y, uintPEyC3n, {from: accounts[0]});
		const uint256fc0HmNk = await KPLAYCkLHGpt.balanceOf.call(addressvoV3XJs, {from: accounts[1]});

		assert.equal(boolbmsiO5F, false)
		await expect(KPLAYCkLHGpt.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCkLHGpt = await KPLAY.new({from: accounts[5]});
		const uintIuXnz9k = BigInt("1000")
		const addressdfTTMFD = accounts[1]
		const boolDNXdAho = await KPLAYCkLHGpt.mint.call(addressdfTTMFD, uintIuXnz9k, {from: accounts[5]});
		await KPLAYCkLHGpt.unpause.call({from: accounts[5]});

		assert.equal(boolDNXdAho, true)
		await expect(KPLAYCkLHGpt.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})