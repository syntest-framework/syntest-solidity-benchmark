const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviverckMVQb = await Revive.new({from: accounts[3]});
		const uint9IfSh6 = BigInt("676")
		const address4enwcH = accounts[2]
		const uintmpN7rk0 = BigInt("1240")
		const addressf3Q6Q9H = accounts[3]
		const addresscadaiiu = accounts[2]
		const bytevuhnUVZ = "0x190c1011041303081c18041e09171e010e161816070404040c0b14020c1e041b"
		const addresstnbPCrk = accounts[1]
		const uinto6WsLsX = BigInt("4")
		const addressnF6ySt6 = accounts[4]
		const addressXMBYUo8 = accounts[4]
		const addresstf6bGiH = accounts[5]
		const boolekiUndx = await ReviverckMVQb.approve.call(address4enwcH, uint9IfSh6, {from: accounts[1]});
		const boolz6ePtau = await ReviverckMVQb.approve.call(addressf3Q6Q9H, uintmpN7rk0, {from: accounts[3]});
		const uint256g8ziPJ = await ReviverckMVQb.getUnlockableTokens.call(addresscadaiiu, {from: accounts[3]});
		const uint256u4wK1CE = await ReviverckMVQb.tokensLocked.call(addresstnbPCrk, bytevuhnUVZ, {from: accounts[0]});
//		const boolTFAeJdS = await ReviverckMVQb.transfer.call(addressnF6ySt6, uinto6WsLsX, {from: accounts[0]});
//		const uint256FW6nKi6 = await ReviverckMVQb.allowance.call(addresstf6bGiH, addressXMBYUo8, {from: accounts[3]});

		assert.equal(boolekiUndx, true)
		assert.equal(boolz6ePtau, true)
		assert.equal(uint256g8ziPJ, BigInt("0"))
		assert.equal(uint256u4wK1CE, BigInt("0"))
		await expect(ReviverckMVQb.transfer.call(addressnF6ySt6, uinto6WsLsX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveon7ED8q = await Revive.new({from: accounts[2]});
		const uintqRKeCM1 = BigInt("1380")
		const uintS9PQ2AU = BigInt("1494")
		const byteEq60NDF = "0x07161e041317160f141603050d0c12161b041c000b010117201d060b1a101c1f"
		const addressfVet12E = accounts[0]
		const addressYrgBxm = accounts[4]
		const byteVxytxv1 = "0x19120f15141607041b0a0c0e1d1d20120c050204160b1e1c180515060c060e0a"
		const addressJzO0bwT = accounts[1]
		const addressu1tORcF = accounts[4]
//		const boolBun7LqQ = await Reviveon7ED8q.lock.call(byteEq60NDF, uintS9PQ2AU, uintqRKeCM1, {from: accounts[4]});
//		const uint256SzwhYrH = await Reviveon7ED8q.allowance.call(addressYrgBxm, addressfVet12E, {from: accounts[5]});
//		const uint256ntWjSd1 = await Reviveon7ED8q.tokensUnlockable.call(addressJzO0bwT, byteVxytxv1, {from: accounts[0]});
//		const uint256YTYZeIM = await Reviveon7ED8q.unlock.call(addressu1tORcF, {from: "0x0000000000000000000000000000000000000001"});
//		await Reviveon7ED8q.renounceOwnership.call({from: accounts[3]});

		await expect(Reviveon7ED8q.lock.call(byteEq60NDF, uintS9PQ2AU, uintqRKeCM1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYJo5M4B = await Revive.new({from: accounts[0]});
		const uintXFAehWr = BigInt("851")
		const uintcuSFdWX = BigInt("1543")
		const byteI6xITQ1 = "0x060e0a1d0b1e1d1d1202030c0b18100b02101f1b170d131919110e1f180b1b0f"
		const addressRyUO1kG = accounts[1]
		const uintSMA5KXe = BigInt("226")
		const addressWqTBvIC = accounts[4]
		const addresslUlrDO0 = "0x0000000000000000000000000000000000000001"
		const uintKHc8qPY = BigInt("1849")
		const bytecEcdpbk = "0x0015081a020b0120050f101b0a1e1e1c1d1d1f1a14100a0c111e180014090918"
		const addressopUPiBX = accounts[0]
//		const bool2bdbP7 = await ReviveYJo5M4B.transferWithLock.call(addressRyUO1kG, byteI6xITQ1, uintcuSFdWX, uintXFAehWr, {from: accounts[4]});
//		const boolS2nF6Gh = await ReviveYJo5M4B.transferFrom.call(addresslUlrDO0, addressWqTBvIC, uintSMA5KXe, {from: accounts[4]});
//		const uint256gpWoWi = await ReviveYJo5M4B.tokensLockedAtTime.call(addressopUPiBX, bytecEcdpbk, uintKHc8qPY, {from: accounts[4]});
//		await ReviveYJo5M4B.renounceOwnership.call({from: accounts[4]});

		await expect(ReviveYJo5M4B.transferWithLock.call(addressRyUO1kG, byteI6xITQ1, uintcuSFdWX, uintXFAehWr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLU6CNS7 = await Revive.new({from: accounts[4]});
		const uintBBHWO5J = BigInt("1709")
		const bytel1YOqz = "0x06150c161a041c05021f081e1c1e1c1c1a0a141c0606040f03101a190e0d1707"
		const byteAOV10gL = "0x13131c050219150e1f0d1103070a1e021e1a07121e011e08010b040608181120"
		const addressLBboL4C = accounts[0]
		const addressBRck4e = accounts[4]
		const addressC2U89NC = accounts[3]
		const uintDFSdaz9 = BigInt("675")
		const uintKiVr8D4 = BigInt("1433")
		const byteDlel7H0 = "0x10110b1a1d190e080502041519071d090d02040a030d1c0d191f011e08070519"
//		const bool8WTeqO = await ReviveLU6CNS7.increaseLockAmount.call(bytel1YOqz, uintBBHWO5J, {from: "0x0000000000000000000000000000000000000001"});
//		await ReviveLU6CNS7.onlyOwner.call({from: accounts[3]});
//		const uint256PLRefn = await ReviveLU6CNS7.tokensLocked.call(addressLBboL4C, byteAOV10gL, {from: accounts[4]});
//		const uint256UxrU9pj = await ReviveLU6CNS7.allowance.call(addressC2U89NC, addressBRck4e, {from: accounts[0]});
//		const boolxJm39DC = await ReviveLU6CNS7.lock.call(byteDlel7H0, uintKiVr8D4, uintDFSdaz9, {from: accounts[1]});

		await expect(ReviveLU6CNS7.increaseLockAmount.call(bytel1YOqz, uintBBHWO5J, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveyULQfN9 = await Revive.new({from: accounts[1]});
		const uintzicxS2q = BigInt("968")
		const byteRdE5lzM = "0x070b1018160b20041f1b0d111d1117081403200a101d15140d01130f1c0f0109"
		const addressH6Fc3l1 = accounts[1]
		const addressiutN2cR = accounts[1]
		const addressHOvKH1V = accounts[0]
		const addressb8Ikck6 = accounts[5]
		const uintawpUCXN = BigInt("564")
		const addressomxJrn = accounts[4]
		const addressMyEIfk = accounts[4]
		const uint256a7q4yTF = await ReviveyULQfN9.tokensLockedAtTime.call(addressH6Fc3l1, byteRdE5lzM, uintzicxS2q, {from: accounts[4]});
		const uint256XXVwcyt = await ReviveyULQfN9.allowance.call(addressHOvKH1V, addressiutN2cR, {from: accounts[2]});
		const uint256RKGDsNT = await ReviveyULQfN9.balanceOf.call(addressb8Ikck6, {from: accounts[0]});
		const boolkFlT1e0 = await ReviveyULQfN9.increaseAllowance.call(addressomxJrn, uintawpUCXN, {from: accounts[1]});
		const uint256ev2srj7 = await ReviveyULQfN9.balanceOf.call(addressMyEIfk, {from: accounts[0]});

		assert.equal(boolkFlT1e0, true)
		assert.equal(uint256RKGDsNT, BigInt("0"))
		assert.equal(uint256XXVwcyt, BigInt("0"))
		assert.equal(uint256a7q4yTF, BigInt("0"))
		assert.equal(uint256ev2srj7, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivecwh2kQ5 = await Revive.new({from: accounts[4]});
		const addressMsActk = accounts[2]
		const uintiSWRIez = BigInt("1931")
		const addressrtpFRFX = "0x0000000000000000000000000000000000000001"
		const boolwdVOyiy = await Revivecwh2kQ5.isOwner.call({from: accounts[3]});
		const uint256BNEiF7B = await Revivecwh2kQ5.unlock.call(addressMsActk, {from: accounts[0]});
//		const boolNE853UH = await Revivecwh2kQ5.decreaseAllowance.call(addressrtpFRFX, uintiSWRIez, {from: accounts[3]});
//		await Revivecwh2kQ5.onlyOwner.call({from: accounts[1]});

		assert.equal(boolwdVOyiy, false)
		assert.equal(uint256BNEiF7B, BigInt("0"))
		await expect(Revivecwh2kQ5.decreaseAllowance.call(addressrtpFRFX, uintiSWRIez, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGENLmoY = await Revive.new({from: accounts[1]});
		const uintF6GcOaI = BigInt("1875")
		const uintpokPefh = BigInt("892")
		const bytepOzZq6 = "0x1100061c13090b1f1b120b0e0d131a030f1e1c140b0302011f00060f03000608"
		const uintwZJqSUk = BigInt("1230")
		const addressoIG1Hl4 = accounts[4]
//		await ReviveGENLmoY.onlyOwner.call({from: accounts[4]});
//		const boolC8QLlEZ = await ReviveGENLmoY.lock.call(bytepOzZq6, uintpokPefh, uintF6GcOaI, {from: accounts[0]});
//		const uint256yzaeOfT = await ReviveGENLmoY.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolSV47K0D = await ReviveGENLmoY.approve.call(addressoIG1Hl4, uintwZJqSUk, {from: accounts[1]});

		await expect(ReviveGENLmoY.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveyULQfN9 = await Revive.new({from: accounts[1]});
		const uintjkvnkRU = BigInt("807")
		const addressfL6q0I = accounts[2]
		const addressMRYO1C = accounts[2]
		const uintVixq3J7 = BigInt("968")
		const bytelta5g8Y = "0x070b1018160b20041f1b0d111d1117081403200a101d15140d01130f1c0f0109"
		const addressH8G46R6 = accounts[1]
		const addresszVDLQ93 = accounts[1]
		const addressg7BSe1i = accounts[0]
		const addressaqySMP9 = accounts[6]
		const addressXhvFGyM = accounts[4]
//		const boolDZp4s2o = await ReviveyULQfN9.transferFrom.call(addressMRYO1C, addressfL6q0I, uintjkvnkRU, {from: accounts[5]});
//		const uint256a7q4yTF = await ReviveyULQfN9.tokensLockedAtTime.call(addressH8G46R6, bytelta5g8Y, uintVixq3J7, {from: accounts[4]});
//		const uint256XXVwcyt = await ReviveyULQfN9.allowance.call(addressg7BSe1i, addresszVDLQ93, {from: accounts[2]});
//		const uint256RKGDsNT = await ReviveyULQfN9.balanceOf.call(addressaqySMP9, {from: accounts[0]});
//		const uint256ev2srj7 = await ReviveyULQfN9.balanceOf.call(addressXhvFGyM, {from: accounts[0]});

		await expect(ReviveyULQfN9.transferFrom.call(addressMRYO1C, addressfL6q0I, uintjkvnkRU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivecwh2kQ5 = await Revive.new({from: accounts[4]});
		const addressVIp6Je = accounts[2]
		const addresszE6ElKz = accounts[0]
		const uintXHiCWO = BigInt("1931")
		const addressytggVVc = "0x0000000000000000000000000000000000000001"
		const uintjpmsav3 = BigInt("933")
		const addresshxeQ4p = accounts[4]
		const boolwdVOyiy = await Revivecwh2kQ5.isOwner.call({from: accounts[3]});
		const uint256BNEiF7B = await Revivecwh2kQ5.unlock.call(addressVIp6Je, {from: accounts[0]});
		const uint256drQGHoR = await Revivecwh2kQ5.totalBalanceOf.call(addresszE6ElKz, {from: accounts[0]});
//		const boolNE853UH = await Revivecwh2kQ5.decreaseAllowance.call(addressytggVVc, uintXHiCWO, {from: accounts[3]});
//		const booldSmmzQT = await Revivecwh2kQ5.decreaseAllowance.call(addresshxeQ4p, uintjpmsav3, {from: "0x0000000000000000000000000000000000000001"});
//		await Revivecwh2kQ5.onlyOwner.call({from: accounts[1]});

		assert.equal(boolwdVOyiy, false)
		assert.equal(uint256BNEiF7B, BigInt("0"))
		assert.equal(uint256drQGHoR, BigInt("0"))
		await expect(Revivecwh2kQ5.decreaseAllowance.call(addressytggVVc, uintXHiCWO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHvekR4F = await Revive.new({from: accounts[2]});
		const uintty5CqMW = BigInt("972")
		const bytemrDCLM = "0x1e1b0607020a11090a19200d090d1d17080807190d140c1211100a1e1000161f"
		const uintbu9J6KY = BigInt("837")
		const uintxAsJx9m = BigInt("1112")
		const byteBSeVig = "0x18071e080518040a100e201a160a120e0c0b1f03090212201f031e051e180619"
		const addressCL7WuNm = accounts[3]
//		const boolKyMbE4 = await ReviveHvekR4F.extendLock.call(bytemrDCLM, uintty5CqMW, {from: accounts[2]});
//		const boolKWZ0yqa = await ReviveHvekR4F.lock.call(byteBSeVig, uintxAsJx9m, uintbu9J6KY, {from: accounts[1]});
//		const uint256IB2ixb4 = await ReviveHvekR4F.balanceOf.call(addressCL7WuNm, {from: accounts[3]});

		await expect(ReviveHvekR4F.extendLock.call(bytemrDCLM, uintty5CqMW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const addressqhv4kzQ = accounts[0]
		const addressvW4QQXu = accounts[6]
		const addressfXkzSqM = accounts[1]
		const uint256gQB3obg = await ReviveM7hq3ov.getUnlockableTokens.call(addressqhv4kzQ, {from: accounts[0]});
		const boolJYs8IZm = await ReviveM7hq3ov.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ShVa5xx = await ReviveM7hq3ov.getUnlockableTokens.call(addressvW4QQXu, {from: accounts[2]});
		const addressRoEusk0 = await ReviveM7hq3ov.transferOwnership.call(addressfXkzSqM, {from: accounts[2]});
//		await ReviveM7hq3ov.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJYs8IZm, false)
		assert.equal(uint256ShVa5xx, BigInt("0"))
		assert.equal(uint256gQB3obg, BigInt("0"))
		await expect(ReviveM7hq3ov.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveyULQfN9 = await Revive.new({from: accounts[1]});
		const uintAeWlSbW = BigInt("968")
		const bytekKw51Bi = "0x070b1018160b20041f1b0d111d1117081403200a101d15140d01130f1c0f0109"
		const addressduoIdCo = accounts[1]
		const addressaHmZcy0 = accounts[1]
		const addressBM5jpUY = accounts[1]
		const uintWLYdhVm = BigInt("1778")
		const addressFqGLWbi = accounts[2]
		const bytePwY5rBd = "0x031a131c16080a17201d021d15121e1114080210190d0815091c08091c0e061d"
		const addressFHW1lQu = accounts[1]
		const addressdDGRUj5 = accounts[5]
		const addressOlNiunx = accounts[0]
		const uintTQholPW = BigInt("564")
		const addressFVTixl6 = accounts[4]
		const addresszdSjO4 = accounts[4]
		const uintp40eQAk = BigInt("1784")
		const uinthWmDz0t = BigInt("1348")
		const byteoSnkrks = "0x070f0c171e0e0d10140f092017020f0e00140b1f1b1203120909180d11120105"
		const addressLEMjy6r = accounts[4]
		const uint256a7q4yTF = await ReviveyULQfN9.tokensLockedAtTime.call(addressduoIdCo, bytekKw51Bi, uintAeWlSbW, {from: accounts[4]});
		const addressgHSMihk = await ReviveyULQfN9.owner.call({from: accounts[5]});
		const uint256XXVwcyt = await ReviveyULQfN9.allowance.call(addressBM5jpUY, addressaHmZcy0, {from: accounts[2]});
//		const addressHwxOeex = await ReviveyULQfN9.recoverERC20.call(addressFqGLWbi, uintWLYdhVm, {from: accounts[1]});
//		const uint256A1auqKQ = await ReviveyULQfN9.tokensLocked.call(addressFHW1lQu, bytePwY5rBd, {from: accounts[2]});
//		const uint256RKGDsNT = await ReviveyULQfN9.balanceOf.call(addressdDGRUj5, {from: accounts[0]});
//		const uint256xQK5ToB = await ReviveyULQfN9.unlock.call(addressOlNiunx, {from: accounts[3]});
//		const boolkFlT1e0 = await ReviveyULQfN9.increaseAllowance.call(addressFVTixl6, uintTQholPW, {from: accounts[1]});
//		const uint256FGr0Xyh = await ReviveyULQfN9.getUnlockableTokens.call(addresszdSjO4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKn7nVY = await ReviveyULQfN9.lock.call(byteoSnkrks, uinthWmDz0t, uintp40eQAk, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ev2srj7 = await ReviveyULQfN9.balanceOf.call(addressLEMjy6r, {from: accounts[0]});

		assert.equal(addressgHSMihk, 0x75dDaAceDb042B5Cb971EB48eF68A01Bb7F292e9)
		assert.equal(uint256XXVwcyt, BigInt("0"))
		assert.equal(uint256a7q4yTF, BigInt("0"))
		await expect(ReviveyULQfN9.recoverERC20.call(addressFqGLWbi, uintWLYdhVm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHvekR4F = await Revive.new({from: accounts[2]});
		const addressjBGzcmX = accounts[5]
		const bytelt7ZGX8 = "0x1b141a0802141e191c0a1a201f011219111e0610090e1912200806001f081319"
		const addresspxX7zB = accounts[1]
		const addresshS9Woc0 = accounts[2]
		const uint256dUxnFEA = await ReviveHvekR4F.unlock.call(addressjBGzcmX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gffIt3y = await ReviveHvekR4F.tokensUnlockable.call(addresspxX7zB, bytelt7ZGX8, {from: accounts[2]});
		const uint256ti6uk0V = await ReviveHvekR4F.getUnlockableTokens.call(addresshS9Woc0, {from: accounts[5]});

		assert.equal(uint256dUxnFEA, BigInt("0"))
		assert.equal(uint256gffIt3y, BigInt("0"))
		assert.equal(uint256ti6uk0V, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const addressvdOWe7G = accounts[6]
		const uintx0Oc6yn = BigInt("1796")
		const uint2568lgIg8 = await ReviveM7hq3ov.totalBalanceOf.call(addressvdOWe7G, {from: accounts[1]});
//		const uint256pXiHBG = await ReviveM7hq3ov.recoverERC20.call(uintx0Oc6yn, {from: accounts[2]});
//		const uint256PRcroan = await ReviveM7hq3ov.totalSupply.call({from: accounts[1]});

		assert.equal(uint2568lgIg8, BigInt("0"))
		await expect(ReviveM7hq3ov.recoverERC20.call(uintx0Oc6yn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const addressLGilmFC = accounts[7]
		const addressMw5LN92 = accounts[2]
		const addressvSsr25 = accounts[3]
		const bytesmel2p = "0x1b010f1b0016040a17181c00191d1d1a1b14031511030b0d1b150b14090b0302"
		const addressl0scVIC = accounts[2]
		const uintyoGnZt3 = BigInt("1267")
		const uintZh8DcmN = BigInt("1865")
		const byteokjmUKb = "0x111012041c15141911111a0916091d011a101e1f190215170601020618020e18"
		const uint2568lgIg8 = await ReviveM7hq3ov.totalBalanceOf.call(addressLGilmFC, {from: accounts[1]});
		const uint256ujfDW6q = await ReviveM7hq3ov.getUnlockableTokens.call(addressMw5LN92, {from: accounts[1]});
		const uint256m4t7Jnl = await ReviveM7hq3ov.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256T0Kwkgf = await ReviveM7hq3ov.balanceOf.call(addressvSsr25, {from: accounts[1]});
		const uint256wigWQEe = await ReviveM7hq3ov.tokensUnlockable.call(addressl0scVIC, bytesmel2p, {from: accounts[2]});
//		const boolOgxIBml = await ReviveM7hq3ov.lock.call(byteokjmUKb, uintZh8DcmN, uintyoGnZt3, {from: accounts[1]});

		assert.equal(uint2568lgIg8, BigInt("0"))
		assert.equal(uint256T0Kwkgf, BigInt("0"))
		assert.equal(uint256m4t7Jnl, BigInt("3000000000000000000000000000"))
		assert.equal(uint256ujfDW6q, BigInt("0"))
		assert.equal(uint256wigWQEe, BigInt("0"))
		await expect(ReviveM7hq3ov.lock.call(byteokjmUKb, uintZh8DcmN, uintyoGnZt3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHvekR4F = await Revive.new({from: accounts[2]});
		const addressVBWQAw6 = accounts[5]
		const uintTBOmX3t = BigInt("522")
		const uint256dUxnFEA = await ReviveHvekR4F.unlock.call(addressVBWQAw6, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dXkkNZ2 = await ReviveHvekR4F.recoverERC20.call(uintTBOmX3t, {from: accounts[2]});

		assert.equal(uint256dUxnFEA, BigInt("0"))
		await expect(ReviveHvekR4F.recoverERC20.call(uintTBOmX3t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive5RZINr = await Revive.new({from: accounts[4]});
		const addressFaUrky3 = accounts[0]
		const addressGSnPQmp = accounts[2]
		const uintC9nRl6s = BigInt("936")
		const uintSf840cf = BigInt("1011")
		const addressvJmsk1l = accounts[5]
		const uint256ZZVZdMQ = await Revive5RZINr.allowance.call(addressGSnPQmp, addressFaUrky3, {from: accounts[5]});
//		const uint256LQHGgh4 = await Revive5RZINr.recoverERC20.call(uintC9nRl6s, {from: accounts[0]});
//		const boolDSneQo = await Revive5RZINr.decreaseAllowance.call(addressvJmsk1l, uintSf840cf, {from: accounts[1]});
//		const addresszCvzWu = await Revive5RZINr.owner.call({from: accounts[5]});

		assert.equal(uint256ZZVZdMQ, BigInt("0"))
		await expect(Revive5RZINr.recoverERC20.call(uintC9nRl6s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUuzP27 = await Revive.new({from: accounts[0]});
		const uintVPfCIb0 = BigInt("1947")
		const uintegoJpT3 = BigInt("443")
		const byteQoQS6N = "0x1a15090a071e010c11060915081216191f0d1902120dffffffff0b0411080e021e160a"
//		const boolwbpXil8 = await ReviveUuzP27.lock.call(byteQoQS6N, uintegoJpT3, uintVPfCIb0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveUuzP27.lock.call(byteQoQS6N, uintegoJpT3, uintVPfCIb0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const addressmkQslcA = accounts[8]
		const uintRC0Qdh9 = BigInt("895")
		const uint256ShVa5xx = await ReviveM7hq3ov.getUnlockableTokens.call(addressmkQslcA, {from: accounts[2]});
//		const uint256kuHprwb = await ReviveM7hq3ov.recoverERC20.call(uintRC0Qdh9, {from: accounts[3]});

		assert.equal(uint256ShVa5xx, BigInt("0"))
		await expect(ReviveM7hq3ov.recoverERC20.call(uintRC0Qdh9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintbvbmYDz = BigInt("625")
		const addressnqmN4ig = accounts[7]
//		const uint256GjmsBl = await ReviveM7hq3ov.recoverERC20.call(uintbvbmYDz, {from: accounts[0]});
//		const uint2568lgIg8 = await ReviveM7hq3ov.totalBalanceOf.call(addressnqmN4ig, {from: accounts[1]});

		await expect(ReviveM7hq3ov.recoverERC20.call(uintbvbmYDz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintvapx9s = BigInt("525")
		const addressPR4LKgP = accounts[1]
		const uintsIOasJS = BigInt("1189")
		const address6MmfDb = accounts[1]
		const addressmdvkHZ2 = accounts[7]
		const addressNfn6Nxa = accounts[5]
		const addressztP5vuu = accounts[3]
//		const uint256uOxaAeV = await ReviveM7hq3ov.recoverERC20.call(uintvapx9s, {from: accounts[2]});
//		const addressh5Gn4ah = await ReviveM7hq3ov.transferOwnership.call(addressPR4LKgP, {from: accounts[4]});
//		const boolIDp2I5M = await ReviveM7hq3ov.decreaseAllowance.call(address6MmfDb, uintsIOasJS, {from: accounts[1]});
//		const uint256ShVa5xx = await ReviveM7hq3ov.getUnlockableTokens.call(addressmdvkHZ2, {from: accounts[2]});
//		const uint256go06A0X = await ReviveM7hq3ov.allowance.call(addressztP5vuu, addressNfn6Nxa, {from: accounts[3]});

		await expect(ReviveM7hq3ov.recoverERC20.call(uintvapx9s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintB0Tx3fU = BigInt("1006")
		const uintaIZy2f2 = BigInt("1333")
		const addressxilaiuI = accounts[2]
		const addressyJnKhlk = accounts[8]
//		const uint256vh586Rn = await ReviveM7hq3ov.recoverERC20.call(uintB0Tx3fU, {from: accounts[1]});
//		const boolSP8I7Iu = await ReviveM7hq3ov.approve.call(addressxilaiuI, uintaIZy2f2, {from: accounts[2]});
//		const uint256ShVa5xx = await ReviveM7hq3ov.getUnlockableTokens.call(addressyJnKhlk, {from: accounts[2]});
//		const addressfmXwbk3 = await ReviveM7hq3ov.owner.call({from: accounts[3]});

		await expect(ReviveM7hq3ov.recoverERC20.call(uintB0Tx3fU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUuzP27 = await Revive.new({from: accounts[0]});
		const uintOXZGbqR = BigInt("1947")
		const uintxNqupyZ = BigInt("443")
		const bytedElALF2 = "0x1a15090a071e010c11060915081216191f0d1902120d030b0411080efffffffd1e160a"
//		const boolwbpXil8 = await ReviveUuzP27.lock.call(bytedElALF2, uintxNqupyZ, uintOXZGbqR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveUuzP27.lock.call(bytedElALF2, uintxNqupyZ, uintOXZGbqR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHvekR4F = await Revive.new({from: accounts[2]});
		const addressHXXHxJO = accounts[4]
		const addresswHQiDss = accounts[5]
		const addressjDz9OqE = accounts[3]
		const addresse2rExan = accounts[4]
		const byteVLj8jp = "0x101b130e0a16141c0f1a0a15180b0a0b0503030d140e090b1811100f0c151115"
		const addressYqC0awv = accounts[0]
		const addressmviMb7 = accounts[4]
		const uints965Ope = BigInt("116")
		const byteIPDzwwB = "0x121708141c0612171b1f0b1d061418120d06041a0b0c160e1f09060811020118"
		const addressOyA4r9T = accounts[0]
		const uint256ItOviIz = await ReviveHvekR4F.allowance.call(addresswHQiDss, addressHXXHxJO, {from: accounts[4]});
		const uint256jhTDuL8 = await ReviveHvekR4F.totalSupply.call({from: accounts[1]});
//		await ReviveHvekR4F.renounceOwnership.call({from: accounts[2]});
//		const uint256TY8Sw7r = await ReviveHvekR4F.totalBalanceOf.call(addressjDz9OqE, {from: accounts[2]});
//		const uint256dUxnFEA = await ReviveHvekR4F.unlock.call(addresse2rExan, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256O8el9M = await ReviveHvekR4F.tokensUnlockable.call(addressYqC0awv, byteVLj8jp, {from: accounts[4]});
//		const addressf5BzU0M = await ReviveHvekR4F.transferOwnership.call(addressmviMb7, {from: accounts[2]});
//		const uint256mi3KaN4 = await ReviveHvekR4F.tokensLockedAtTime.call(addressOyA4r9T, byteIPDzwwB, uints965Ope, {from: accounts[5]});

		assert.equal(uint256ItOviIz, BigInt("0"))
		assert.equal(uint256jhTDuL8, BigInt("3000000000000000000000000000"))
		await expect(ReviveHvekR4F.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUuzP27 = await Revive.new({from: accounts[0]});
		const uints86C8t = BigInt("1105")
		const uintcZna5tV = BigInt("1947")
		const uintxYGY9pI = BigInt("443")
		const byteiTyFXZ0 = "0x1a15090a071e010c11060915081216191f0d1902120d030b0411080e021e160a"
//		const uint256hFi9C4L = await ReviveUuzP27.recoverERC20.call(uints86C8t, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwbpXil8 = await ReviveUuzP27.lock.call(byteiTyFXZ0, uintxYGY9pI, uintcZna5tV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveUuzP27.recoverERC20.call(uints86C8t, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintstq30FJ = BigInt("1373")
		const addressbJFSj0D = accounts[3]
		const addressStfCuBf = accounts[6]
//		const uint256x0FNiJS = await ReviveM7hq3ov.recoverERC20.call(uintstq30FJ, {from: accounts[1]});
//		const uint256wVn8iyB = await ReviveM7hq3ov.unlock.call(addressbJFSj0D, {from: accounts[5]});
//		const uint2568lgIg8 = await ReviveM7hq3ov.totalBalanceOf.call(addressStfCuBf, {from: accounts[1]});

		await expect(ReviveM7hq3ov.recoverERC20.call(uintstq30FJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexqkUBcI = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttKq4JNK = BigInt("828")
		const addressYHDregK = accounts[0]
		const addresshlnGhhe = accounts[2]
		const uintRXplqXS = BigInt("1077")
		const addressnbzQUeZ = accounts[0]
		const uint256YVJNgAx = await RevivexqkUBcI.recoverERC20.call(uinttKq4JNK, {from: accounts[5]});
		await RevivexqkUBcI.onlyOwner.call({from: accounts[2]});
		const uint2560CD7He = await RevivexqkUBcI.unlock.call(addressYHDregK, {from: accounts[2]});
		const addressWIeThSH = await RevivexqkUBcI.transferOwnership.call(addresshlnGhhe, {from: accounts[2]});
		const boolPJMWHeD = await RevivexqkUBcI.increaseAllowance.call(addressnbzQUeZ, uintRXplqXS, {from: accounts[4]});
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintCWjpNoJ = BigInt("1535")
		const byteUPRKa1D = "0x1019181a1613011d0f1b0b0019061d1b1103190f100406140d0b1e020c0f1403"
		const addressiSlmYua = accounts[2]
		const uintdSUzpRF = BigInt("1325")
		const addressglDsrbS = accounts[6]
		const uint256HWRp5lk = await ReviveM7hq3ov.tokensLockedAtTime.call(addressiSlmYua, byteUPRKa1D, uintCWjpNoJ, {from: accounts[1]});
//		const uint256KiFS1Wv = await ReviveM7hq3ov.recoverERC20.call(uintdSUzpRF, {from: accounts[3]});
//		const uint2568lgIg8 = await ReviveM7hq3ov.totalBalanceOf.call(addressglDsrbS, {from: accounts[1]});

		assert.equal(uint256HWRp5lk, BigInt("0"))
		await expect(ReviveM7hq3ov.recoverERC20.call(uintdSUzpRF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveyfyjyW5 = await Revive.new({from: accounts[2]});
		const uintp79PSS = BigInt("1565")
		const addressDkv9s35 = accounts[1]
		const uintD9HyCH6 = BigInt("195")
		const addressXCbUspr = accounts[0]
		const uinte2BUuK8 = BigInt("1015")
		const uintNnT0O9 = BigInt("1391")
		const byteAl4PRYg = "0x1511151c0c100b170a120217161d1e190d0a16051a04170c080e1b181615071a"
		const boolGemXEnF = await ReviveyfyjyW5.isOwner.call({from: accounts[0]});
//		const uint256LX8KYkA = await ReviveyfyjyW5.recoverERC20.call(uintp79PSS, {from: accounts[3]});
//		const addressgRvHhLu = await ReviveyfyjyW5.transferOwnership.call(addressDkv9s35, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPJB7DnX = await ReviveyfyjyW5.increaseAllowance.call(addressXCbUspr, uintD9HyCH6, {from: accounts[1]});
//		const boolQGvPN6W = await ReviveyfyjyW5.lock.call(byteAl4PRYg, uintNnT0O9, uinte2BUuK8, {from: accounts[0]});

		assert.equal(boolGemXEnF, false)
		await expect(ReviveyfyjyW5.recoverERC20.call(uintp79PSS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintszo0dKJ = BigInt("903")
		const uintldWvoPe = BigInt("421")
		const byteZ2PHZmX = "0x1c1b081a040108181a0f070308011101150b0718141f1b121815030a120b0206"
		const uintxqHnXw = BigInt("592")
		const uintfHATyQu = BigInt("12")
		const uintavrghHi = BigInt("1569")
		const byteqaz8Mz = "0x181f0d1b1c1e1c0b111705041c141d06040f1d001b04040401160f1a130a0f11"
		const addressoXz6yU = accounts[4]
		const uintsHhuRLC = BigInt("168")
		const addresspS7wyRx = accounts[5]
		const addressI3C9Xkr = accounts[3]
		const uintTXLoan = BigInt("19")
		const byteAooQFn7 = "0x031f20140e1b101705161918110e1c1e0f1c1f0d01140d1d1d060c0e1a011910"
		const addressPk6Qgy = accounts[2]
		const boolt4MjZG = await ReviveM7hq3ov.lock.call(byteZ2PHZmX, uintldWvoPe, uintszo0dKJ, {from: accounts[2]});
//		const uint256W1kUv3r = await ReviveM7hq3ov.recoverERC20.call(uintxqHnXw, {from: accounts[0]});
//		const boolPWqAWun = await ReviveM7hq3ov.transferWithLock.call(addressoXz6yU, byteqaz8Mz, uintavrghHi, uintfHATyQu, {from: accounts[2]});
//		const boolBoAICqD = await ReviveM7hq3ov.transferFrom.call(addressI3C9Xkr, addresspS7wyRx, uintsHhuRLC, {from: accounts[3]});
//		const uint256Nu4Cv5g = await ReviveM7hq3ov.tokensLockedAtTime.call(addressPk6Qgy, byteAooQFn7, uintTXLoan, {from: accounts[2]});

		assert.equal(boolt4MjZG, true)
		await expect(ReviveM7hq3ov.recoverERC20.call(uintxqHnXw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivex822lu = await Revive.new({from: accounts[3]});
		const uintt8GhH0t = BigInt("1746")
		const uintyZaWny6 = BigInt("257")
		const boolAn9d4q3 = await Revivex822lu.isOwner.call({from: accounts[4]});
//		const uint2564ZlTch = await Revivex822lu.recoverERC20.call(uintt8GhH0t, {from: accounts[2]});
//		const uint256oQwK4u = await Revivex822lu.recoverERC20.call(uintyZaWny6, {from: accounts[1]});

		assert.equal(boolAn9d4q3, false)
		await expect(Revivex822lu.recoverERC20.call(uintt8GhH0t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const uintXQ21blP = BigInt("224")
		const uintkwxn8Z = BigInt("1530")
		const byteJJWD7N = "0x16170b01130c021e1800170f0c1b151c150e0402080e1c050a0d1a111a050b09"
		const addressqLjVZJ0 = accounts[7]
//		const uint256PQ5b8iB = await ReviveM7hq3ov.recoverERC20.call(uintXQ21blP, {from: accounts[1]});
//		const boolmHdTvF6 = await ReviveM7hq3ov.increaseLockAmount.call(byteJJWD7N, uintkwxn8Z, {from: accounts[0]});
//		await ReviveM7hq3ov.renounceOwnership.call({from: accounts[0]});
//		const uint2568lgIg8 = await ReviveM7hq3ov.totalBalanceOf.call(addressqLjVZJ0, {from: accounts[1]});

		await expect(ReviveM7hq3ov.recoverERC20.call(uintXQ21blP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM7hq3ov = await Revive.new({from: accounts[2]});
		const addressNaNCNR8 = accounts[8]
		const uintx4iDZvY = BigInt("1069")
		const uint256ShVa5xx = await ReviveM7hq3ov.getUnlockableTokens.call(addressNaNCNR8, {from: accounts[2]});
//		const uint256n1cCdI9 = await ReviveM7hq3ov.recoverERC20.call(uintx4iDZvY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ShVa5xx, BigInt("0"))
		await expect(ReviveM7hq3ov.recoverERC20.call(uintx4iDZvY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})