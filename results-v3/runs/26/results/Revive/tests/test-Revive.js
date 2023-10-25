const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const addressQlTTRjN = await RevivefYZxrZT.owner.call({from: accounts[1]});
		const addresscoskZ3 = await RevivefYZxrZT.owner.call({from: accounts[4]});

		assert.equal(addressQlTTRjN, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
		assert.equal(addresscoskZ3, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressmi8qGK2 = accounts[4]
		const uintqEbAHrj = BigInt("1016")
		const uintUwF9c7Z = BigInt("541")
		const bytefzbqH0Y = "0x181e0f091d14080d0205090307111b061a17170a0311071115161705000d1b03"
		const uint256bqKqYy = await ReviveOUvOJdt.unlock.call(addressmi8qGK2, {from: accounts[1]});
		const uint256Mzr8KIj = await ReviveOUvOJdt.recoverERC20.call(uintqEbAHrj, {from: accounts[0]});
		const boolhMbHT2 = await ReviveOUvOJdt.extendLock.call(bytefzbqH0Y, uintUwF9c7Z, {from: accounts[4]});
		const addresssspCxg = await ReviveOUvOJdt.owner.call({from: accounts[4]});

		assert.equal(uint256bqKqYy, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintqEbAHrj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXVOJnXG = await Revive.new({from: accounts[1]});
		const uintpxyOLvK = BigInt("614")
		const bytepUUv3ba = "0x070a111404070f1815140f100c0404121e120c0c0a171c180c1808161c050e0e"
		const uintT8DeLQ = BigInt("1521")
		const uintoc4Qw5z = BigInt("599")
		const byteo3JUwYP = "0x191c1b0c0c11030c1006170e1a171406071f0b200513070a1f06110f1f111b0d"
		const addressd3m6OJs = accounts[1]
		const boolfkIerDD = await ReviveXVOJnXG.increaseLockAmount.call(bytepUUv3ba, uintpxyOLvK, {from: accounts[4]});
		const boolHLrRyGQ = await ReviveXVOJnXG.transferWithLock.call(addressd3m6OJs, byteo3JUwYP, uintoc4Qw5z, uintT8DeLQ, {from: accounts[2]});
		const booluzcNOfC = await ReviveXVOJnXG.isOwner.call({from: accounts[0]});
		await ReviveXVOJnXG.renounceOwnership.call({from: accounts[4]});

		await expect(ReviveXVOJnXG.increaseLockAmount.call(bytepUUv3ba, uintpxyOLvK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNd8Tt2I = await Revive.new({from: accounts[1]});
		const byteQ52UcRO = "0x191b040806100c02141008190e1c1f0c010709170305042013081f04191c1507"
		const addressWs7Tkft = accounts[3]
		const uintK5eOnhL = BigInt("1337")
		const addressPuhKtxX = accounts[1]
		const uintpMZgbvH = BigInt("120")
		const byteZMZMyGK = "0x020e0f100a131a0d1d041315051b080f1f0505120716010d200a0f0a1c160c1f"
		const bytewbcsyDK = "0x15151a02150a1818041c2013040a1d1f0b0b1d1c01020b0d1a201d1410181c1e"
		const addresspxRQFyO = accounts[1]
		const uint256QPVE8RA = await ReviveNd8Tt2I.tokensLocked.call(addressWs7Tkft, byteQ52UcRO, {from: accounts[0]});
		const boolWHh0qKk = await ReviveNd8Tt2I.decreaseAllowance.call(addressPuhKtxX, uintK5eOnhL, {from: accounts[4]});
		const boolBhKQpiX = await ReviveNd8Tt2I.extendLock.call(byteZMZMyGK, uintpMZgbvH, {from: accounts[0]});
		const uint256RL2pEfu = await ReviveNd8Tt2I.tokensLocked.call(addresspxRQFyO, bytewbcsyDK, {from: accounts[3]});

		assert.equal(uint256QPVE8RA, BigInt("0"))
		await expect(ReviveNd8Tt2I.decreaseAllowance.call(addressPuhKtxX, uintK5eOnhL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveSFZqY4 = await Revive.new({from: accounts[4]});
		const uintx0X2g7b = BigInt("864")
		const addressu5FihFQ = accounts[1]
		const addresshosOBVS = accounts[4]
		const boolB7kIcbt = await ReviveSFZqY4.isOwner.call({from: accounts[1]});
		const addressCk3GNze = await ReviveSFZqY4.owner.call({from: accounts[3]});
		const addresspmZtaV7 = await ReviveSFZqY4.owner.call({from: accounts[2]});
		const bool6TxPBv = await ReviveSFZqY4.transferFrom.call(addresshosOBVS, addressu5FihFQ, uintx0X2g7b, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressCk3GNze, 0x4c16996B4a764f989C65b8c6Ad93B6Eab77EB3FE)
		assert.equal(addresspmZtaV7, 0x4c16996B4a764f989C65b8c6Ad93B6Eab77EB3FE)
		assert.equal(boolB7kIcbt, false)
		await expect(ReviveSFZqY4.transferFrom.call(addresshosOBVS, addressu5FihFQ, uintx0X2g7b, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivefuxm3NO = await Revive.new({from: accounts[4]});
		const uintj3XF7ms = BigInt("1004")
		const uintD4n7aCT = BigInt("467")
		const byteb8O5Mgk = "0x1617171d0c180c110b15100b11200f0d1c000b100106010808020a0f09041008"
		const addressabGYH8q = accounts[3]
		const uintWAz2kas = BigInt("1090")
		const addressHjSqnBP = accounts[1]
		const uintUp4Fwdh = BigInt("187")
		const addressMWpGzvR = accounts[0]
		const boolbKnmqh = await Revivefuxm3NO.transferWithLock.call(addressabGYH8q, byteb8O5Mgk, uintD4n7aCT, uintj3XF7ms, {from: accounts[1]});
		const boolK1o7DPw = await Revivefuxm3NO.decreaseAllowance.call(addressHjSqnBP, uintWAz2kas, {from: accounts[0]});
		const boolcFxnFKK = await Revivefuxm3NO.decreaseAllowance.call(addressMWpGzvR, uintUp4Fwdh, {from: accounts[2]});
		await Revivefuxm3NO.onlyOwner.call({from: accounts[2]});

		await expect(Revivefuxm3NO.transferWithLock.call(addressabGYH8q, byteb8O5Mgk, uintD4n7aCT, uintj3XF7ms, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHmhp65 = await Revive.new({from: accounts[0]});
		const uintsvfCdWh = BigInt("1009")
		const addressgdtLYgb = accounts[2]
		const uintTmaYBx4 = BigInt("1111")
		const bytecFCxlC2 = "0x11091a040d1d0502201305110f070d0b09030118110f09040207190706031016"
		const addresscR0jPbz = accounts[4]
		const addressxbaQFtU = accounts[4]
		const addressKRkRttE = accounts[4]
		const uintn50VDZ7 = BigInt("493")
		const addressz9LWpNE = accounts[2]
		const boolqneO5JD = await ReviveHmhp65.approve.call(addressgdtLYgb, uintsvfCdWh, {from: accounts[3]});
		const uint256SbCjvjW = await ReviveHmhp65.tokensLockedAtTime.call(addresscR0jPbz, bytecFCxlC2, uintTmaYBx4, {from: accounts[1]});
		const uint256j80UgFB = await ReviveHmhp65.unlock.call(addressxbaQFtU, {from: accounts[2]});
		const addresskSA9ek = await ReviveHmhp65.transferOwnership.call(addressKRkRttE, {from: accounts[4]});
		const boolS4adYJ5 = await ReviveHmhp65.transfer.call(addressz9LWpNE, uintn50VDZ7, {from: accounts[2]});

		assert.equal(boolqneO5JD, true)
		assert.equal(uint256SbCjvjW, BigInt("0"))
		assert.equal(uint256j80UgFB, BigInt("0"))
		await expect(ReviveHmhp65.transferOwnership.call(addressKRkRttE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebPJMx0I = await Revive.new({from: accounts[4]});
		await RevivebPJMx0I.onlyOwner.call({from: accounts[1]});
		await RevivebPJMx0I.renounceOwnership.call({from: accounts[2]});

		await expect(RevivebPJMx0I.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver07bA6P = await Revive.new({from: accounts[3]});
		const uintLWW5VQh = BigInt("759")
		const bytegItxoVC = "0x1f100e1d0c1f110f1820111613050e1a1f1c18020b03181106011916081d1a0e"
		const uintknXqzYY = BigInt("1177")
		const addressFgTry7W = accounts[2]
		const addressI8ny56L = accounts[0]
		const boolUs9ZS3V = await Reviver07bA6P.extendLock.call(bytegItxoVC, uintLWW5VQh, {from: "0x0000000000000000000000000000000000000001"});
		const addressusYWkH6 = await Reviver07bA6P.recoverERC20.call(addressFgTry7W, uintknXqzYY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256frSqHyl = await Reviver07bA6P.totalBalanceOf.call(addressI8ny56L, {from: accounts[0]});

		await expect(Reviver07bA6P.extendLock.call(bytegItxoVC, uintLWW5VQh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const uintz4XXBwR = BigInt("624")
		const addressQMbo9h = accounts[5]
		const addressQlTTRjN = await RevivefYZxrZT.owner.call({from: accounts[1]});
		const uint256Kld26b7 = await RevivefYZxrZT.totalSupply.call({from: accounts[2]});
		const addresscoskZ3 = await RevivefYZxrZT.owner.call({from: accounts[4]});
		const addressl6I2hWw = await RevivefYZxrZT.recoverERC20.call(addressQMbo9h, uintz4XXBwR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressQlTTRjN, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
		assert.equal(addresscoskZ3, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
		assert.equal(uint256Kld26b7, BigInt("3000000000000000000000000000"))
		await expect(RevivefYZxrZT.recoverERC20.call(addressQMbo9h, uintz4XXBwR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressiaHwSww = accounts[1]
		const addressoZ9aV2m = accounts[4]
		const uintHjYglw = BigInt("1008")
		const uintmvTjcXx = BigInt("541")
		const byteOjrZ0Ps = "0x181e0f091d14080d0205090307111b061a17170a0311071115161705000d1b03"
		const addressg91NV0X = await ReviveOUvOJdt.transferOwnership.call(addressiaHwSww, {from: accounts[3]});
		const uint256bqKqYy = await ReviveOUvOJdt.unlock.call(addressoZ9aV2m, {from: accounts[1]});
		const uint256Mzr8KIj = await ReviveOUvOJdt.recoverERC20.call(uintHjYglw, {from: accounts[0]});
		const boolhMbHT2 = await ReviveOUvOJdt.extendLock.call(byteOjrZ0Ps, uintmvTjcXx, {from: accounts[4]});
		const addresssspCxg = await ReviveOUvOJdt.owner.call({from: accounts[4]});

		assert.equal(uint256bqKqYy, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintHjYglw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivefuxm3NO = await Revive.new({from: accounts[4]});
		const addressTKqttw = accounts[2]
		const uintr06uYd = BigInt("1090")
		const addressgRGIuBA = accounts[1]
		const uintRPOaXny = BigInt("187")
		const addressO5n0Ubm = accounts[0]
		const uint256PCFeXFj = await Revivefuxm3NO.totalBalanceOf.call(addressTKqttw, {from: accounts[0]});
		const boolK1o7DPw = await Revivefuxm3NO.decreaseAllowance.call(addressgRGIuBA, uintr06uYd, {from: accounts[0]});
		const boolcFxnFKK = await Revivefuxm3NO.decreaseAllowance.call(addressO5n0Ubm, uintRPOaXny, {from: accounts[2]});
		await Revivefuxm3NO.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256PCFeXFj, BigInt("0"))
		await expect(Revivefuxm3NO.decreaseAllowance.call(addressgRGIuBA, uintr06uYd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressAIBk0to = accounts[4]
		const uintlSS8bGa = BigInt("1021")
		const uint256bqKqYy = await ReviveOUvOJdt.unlock.call(addressAIBk0to, {from: accounts[1]});
		const uint256Mzr8KIj = await ReviveOUvOJdt.recoverERC20.call(uintlSS8bGa, {from: accounts[0]});
		const addresssspCxg = await ReviveOUvOJdt.owner.call({from: accounts[4]});

		assert.equal(uint256bqKqYy, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintlSS8bGa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const uintQlpydH = BigInt("30")
		const addressdVDnOqo = accounts[1]
		const addressQlTTRjN = await RevivefYZxrZT.owner.call({from: accounts[1]});
		const addresscoskZ3 = await RevivefYZxrZT.owner.call({from: accounts[4]});
		const boolDXAq4LG = await RevivefYZxrZT.approve.call(addressdVDnOqo, uintQlpydH, {from: accounts[5]});
		await RevivefYZxrZT.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressQlTTRjN, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
		assert.equal(addresscoskZ3, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
		assert.equal(boolDXAq4LG, true)
		await expect(RevivefYZxrZT.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const addressEO38yf2 = accounts[3]
		const uintxGaLBrO = BigInt("203")
		const uintSSFgae = BigInt("59")
		const byteo2qhC2n = "0x130a100b0a0300050c0c1b020814070c05151d120c021918031d0b0f1e161e02"
		const addressj0DXXEC = "0x0000000000000000000000000000000000000001"
		const addresscoskZ3 = await RevivefYZxrZT.owner.call({from: accounts[4]});
		const uint256vBkrMKg = await RevivefYZxrZT.getUnlockableTokens.call(addressEO38yf2, {from: accounts[1]});
		const boolsU46GX1 = await RevivefYZxrZT.transferWithLock.call(addressj0DXXEC, byteo2qhC2n, uintSSFgae, uintxGaLBrO, {from: accounts[4]});

		assert.equal(addresscoskZ3, 0x223cf515e98AB85fda62788Eb9571a37070e6e1f)
		assert.equal(uint256vBkrMKg, BigInt("0"))
		await expect(RevivefYZxrZT.transferWithLock.call(addressj0DXXEC, byteo2qhC2n, uintSSFgae, uintxGaLBrO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY1RZ3EU = await Revive.new({from: accounts[4]});
		const uintXT7qPL2 = BigInt("909")
		const addresszfgFftW = accounts[4]
		const addressMmbfAMO = accounts[0]
		const addressAGcEunr = accounts[1]
		const boolrBoMNsq = await ReviveY1RZ3EU.approve.call(addresszfgFftW, uintXT7qPL2, {from: accounts[1]});
		const uint256qwGysy5 = await ReviveY1RZ3EU.allowance.call(addressAGcEunr, addressMmbfAMO, {from: accounts[4]});

		assert.equal(boolrBoMNsq, true)
		assert.equal(uint256qwGysy5, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveHmhp65 = await Revive.new({from: accounts[0]});
		const uinttqOVBG7 = BigInt("389")
		const uintUueURMc = BigInt("822")
		const byte3pj8Ft = "0x10031801080a020b131c141402100b05051e1b0f011d0f1610150403051c0e11"
		const uinttGowaej = BigInt("1009")
		const addressrOonHT7 = accounts[2]
		const addressjvySbmX = accounts[4]
		const uintPUxk9s = BigInt("25")
		const addressktpRuxz = accounts[2]
		const addressG6YuMBT = accounts[4]
		const uinta0ocD1T = BigInt("493")
		const addresswEyu3wu = accounts[2]
		const boolAJayCPV = await ReviveHmhp65.lock.call(byte3pj8Ft, uintUueURMc, uinttqOVBG7, {from: "0x0000000000000000000000000000000000000001"});
		const boolqneO5JD = await ReviveHmhp65.approve.call(addressrOonHT7, uinttGowaej, {from: accounts[3]});
		const uint256j80UgFB = await ReviveHmhp65.unlock.call(addressjvySbmX, {from: accounts[2]});
		await ReviveHmhp65.renounceOwnership.call({from: accounts[0]});
		const boolTJJG4Ly = await ReviveHmhp65.approve.call(addressktpRuxz, uintPUxk9s, {from: "0x0000000000000000000000000000000000000001"});
		const addresskSA9ek = await ReviveHmhp65.transferOwnership.call(addressG6YuMBT, {from: accounts[4]});
		const boolS4adYJ5 = await ReviveHmhp65.transfer.call(addresswEyu3wu, uinta0ocD1T, {from: accounts[2]});

		await expect(ReviveHmhp65.lock.call(byte3pj8Ft, uintUueURMc, uinttqOVBG7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressw7ddwzm = accounts[5]
		const addresspdsECVy = accounts[3]
		const addressYwkV1k = accounts[4]
		const uintdlwS1xv = BigInt("182")
		const addressAj5K4vE = accounts[1]
		const uint256bqKqYy = await ReviveOUvOJdt.unlock.call(addressw7ddwzm, {from: accounts[1]});
		const uint256flGMhY0 = await ReviveOUvOJdt.totalBalanceOf.call(addresspdsECVy, {from: accounts[2]});
		const uint256wEQ2dVH = await ReviveOUvOJdt.getUnlockableTokens.call(addressYwkV1k, {from: accounts[2]});
		const boolBsnl9Rg = await ReviveOUvOJdt.increaseAllowance.call(addressAj5K4vE, uintdlwS1xv, {from: accounts[0]});

		assert.equal(boolBsnl9Rg, true)
		assert.equal(uint256bqKqYy, BigInt("0"))
		assert.equal(uint256flGMhY0, BigInt("3000000000000000000000000000"))
		assert.equal(uint256wEQ2dVH, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addresshl909SL = accounts[5]
		const byteScSInNF = "0x04080804011c1a011e201c161f0713080a03030c0017040c1b17041117001414"
		const addresse3f3zy = accounts[1]
		const uintDrxotJh = BigInt("996")
		const byteeFRzQyZ = "0x141f0d1c0e1a0d190a1e181702100b151a0908100b071414040f1e1602020a1d"
		const addressUuRyoAQ = accounts[0]
		const addresshvgjm92 = accounts[3]
		const bytewrJCJYk = "0x19120f0514161a0409121c0f0f1f0f07151702090b08051d16041f111b070208"
		const addressY7B7TQm = accounts[1]
		const uintjwCR2vs = BigInt("1607")
		const uint256flGMhY0 = await ReviveOUvOJdt.totalBalanceOf.call(addresshl909SL, {from: accounts[2]});
		const uint256dCExh3f = await ReviveOUvOJdt.tokensLocked.call(addresse3f3zy, byteScSInNF, {from: accounts[0]});
		const uint256J5Pngo = await ReviveOUvOJdt.tokensLockedAtTime.call(addressUuRyoAQ, byteeFRzQyZ, uintDrxotJh, {from: accounts[2]});
		const uint256AjO8QtG = await ReviveOUvOJdt.totalSupply.call({from: accounts[0]});
		const uint256Y1BhFkn = await ReviveOUvOJdt.totalBalanceOf.call(addresshvgjm92, {from: accounts[4]});
		const uint256fVP8Ynn = await ReviveOUvOJdt.tokensLocked.call(addressY7B7TQm, bytewrJCJYk, {from: accounts[1]});
		const uint256PLovZNx = await ReviveOUvOJdt.recoverERC20.call(uintjwCR2vs, {from: accounts[2]});

		assert.equal(uint256AjO8QtG, BigInt("3000000000000000000000000000"))
		assert.equal(uint256J5Pngo, BigInt("0"))
		assert.equal(uint256Y1BhFkn, BigInt("3000000000000000000000000000"))
		assert.equal(uint256dCExh3f, BigInt("0"))
		assert.equal(uint256fVP8Ynn, BigInt("0"))
		assert.equal(uint256flGMhY0, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintjwCR2vs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivefuxm3NO = await Revive.new({from: accounts[4]});
		const byteOcb1ghE = "0x0914111e0d1b171f190f190f17101e070e050c08200b1c1b0d20071605171507"
		const addressLg6a3AH = accounts[3]
		const uintetLKzlT = BigInt("1022")
		const uintcKIVQ10 = BigInt("467")
		const byteAlaHdfj = "0x1617171d0c180c110b15100b11200f0d1c000b100106010808020a0f09041008"
		const addressMHPrAw = accounts[3]
		const uint256Ja0QmfQ = await Revivefuxm3NO.tokensUnlockable.call(addressLg6a3AH, byteOcb1ghE, {from: accounts[1]});
		const boolXM2Y4Ar = await Revivefuxm3NO.isOwner.call({from: accounts[1]});
		const boolbKnmqh = await Revivefuxm3NO.transferWithLock.call(addressMHPrAw, byteAlaHdfj, uintcKIVQ10, uintetLKzlT, {from: accounts[1]});

		assert.equal(boolXM2Y4Ar, false)
		assert.equal(uint256Ja0QmfQ, BigInt("0"))
		await expect(Revivefuxm3NO.transferWithLock.call(addressMHPrAw, byteAlaHdfj, uintcKIVQ10, uintetLKzlT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedBiwFb7 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttogsH4m = BigInt("1316")
		const addressDVY6mFd = accounts[5]
		const uintcZm7JDW = BigInt("1775")
		const bytexKEx4NO = "0x110e0c1419150f02141709071504051417070f000f1a0c011304110c11140514"
		const boolI07Fqq5 = await RevivedBiwFb7.decreaseAllowance.call(addressDVY6mFd, uinttogsH4m, {from: accounts[4]});
		const boolAIbLvP4 = await RevivedBiwFb7.increaseLockAmount.call(bytexKEx4NO, uintcZm7JDW, {from: accounts[4]});
	});

	it('test for Revive', async () => {
		const ReviveJaJSRji = await Revive.new({from: accounts[2]});
		const addressjPEwybX = accounts[0]
		const addressuBN0U3p = accounts[4]
		const uintfCdliIh = BigInt("305")
		const addressjhqaxqv = accounts[2]
		const addressOCQH44G = accounts[4]
		const addressrJd7uX = accounts[2]
		const uinte7bVPKY = BigInt("1613")
		const addressyBJHlbb = "0x0000000000000000000000000000000000000001"
		const addressGP9xfjJ = accounts[1]
		const uint256PEbEHHq = await ReviveJaJSRji.unlock.call(addressjPEwybX, {from: accounts[0]});
		const uint256wakiGbE = await ReviveJaJSRji.unlock.call(addressuBN0U3p, {from: accounts[3]});
		const uint256ps4a6FC = await ReviveJaJSRji.recoverERC20.call(uintfCdliIh, {from: accounts[3]});
		const uint256iDFvgQ6 = await ReviveJaJSRji.allowance.call(addressOCQH44G, addressjhqaxqv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tJcdT0R = await ReviveJaJSRji.getUnlockableTokens.call(addressrJd7uX, {from: accounts[2]});
		const boolwr77AD = await ReviveJaJSRji.transferFrom.call(addressGP9xfjJ, addressyBJHlbb, uinte7bVPKY, {from: accounts[4]});

		assert.equal(uint256PEbEHHq, BigInt("0"))
		assert.equal(uint256wakiGbE, BigInt("0"))
		await expect(ReviveJaJSRji.recoverERC20.call(uintfCdliIh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const uintBNr7xUn = BigInt("1126")
		const addressuG4oc4n = accounts[5]
		const uintsy7Kh52 = BigInt("1302")
		const addressE9ZGAFB = accounts[4]
		const uint256tf3E6Vz = await ReviveOUvOJdt.recoverERC20.call(uintBNr7xUn, {from: accounts[0]});
		const uint256flGMhY0 = await ReviveOUvOJdt.totalBalanceOf.call(addressuG4oc4n, {from: accounts[2]});
		const boolzQZH7N2 = await ReviveOUvOJdt.approve.call(addressE9ZGAFB, uintsy7Kh52, {from: accounts[2]});

		await expect(ReviveOUvOJdt.recoverERC20.call(uintBNr7xUn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressayZz4w = accounts[5]
		const addresshllcNMl = accounts[2]
		const uintjETAY3c = BigInt("982")
		const uint256flGMhY0 = await ReviveOUvOJdt.totalBalanceOf.call(addressayZz4w, {from: accounts[2]});
		const uint256wo0pTQz = await ReviveOUvOJdt.unlock.call(addresshllcNMl, {from: accounts[5]});
		const uint256P23Ys2J = await ReviveOUvOJdt.recoverERC20.call(uintjETAY3c, {from: accounts[2]});

		assert.equal(uint256flGMhY0, BigInt("0"))
		assert.equal(uint256wo0pTQz, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintjETAY3c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const uintLgwbMQm = BigInt("1187")
		const uintOxNYTGw = BigInt("642")
		const uintKGz1LTd = BigInt("1424")
		const byteWV7290p = "0x0a1e0a0f07020e08151f15161719090f0b1a0e180a17090904050110161f1506"
		const uint256XIxne2X = await RevivefYZxrZT.recoverERC20.call(uintLgwbMQm, {from: accounts[5]});
		const boolTxupYcM = await RevivefYZxrZT.lock.call(byteWV7290p, uintKGz1LTd, uintOxNYTGw, {from: accounts[4]});
		const addresscoskZ3 = await RevivefYZxrZT.owner.call({from: accounts[4]});

		await expect(RevivefYZxrZT.recoverERC20.call(uintLgwbMQm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const addressNfu0Mj3 = accounts[5]
		const uintXtGicfH = BigInt("1905")
		const addressEUsYEKC = accounts[3]
		const addressXZShlXq = accounts[3]
		const uintYfsfTZr = BigInt("324")
		const byteuqQg7m = "0x191c03100a0c161113130815120d0a0719081c1102040107151c1b1e1e0f020d"
		const addressAgyiBL = accounts[3]
		const uint256O76UYPV = await RevivefYZxrZT.balanceOf.call(addressNfu0Mj3, {from: accounts[4]});
		const uint256TGld0G = await RevivefYZxrZT.recoverERC20.call(uintXtGicfH, {from: accounts[3]});
		const addresscoskZ3 = await RevivefYZxrZT.owner.call({from: accounts[4]});
		const uint25618ycoe = await RevivefYZxrZT.totalBalanceOf.call(addressEUsYEKC, {from: accounts[2]});
		const uint256rbYiQWT = await RevivefYZxrZT.unlock.call(addressXZShlXq, {from: accounts[0]});
		const uint256RDuBAko = await RevivefYZxrZT.tokensLockedAtTime.call(addressAgyiBL, byteuqQg7m, uintYfsfTZr, {from: accounts[2]});

		assert.equal(uint256O76UYPV, BigInt("0"))
		await expect(RevivefYZxrZT.recoverERC20.call(uintXtGicfH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJLNbn0C = await Revive.new({from: accounts[1]});
		const addressIb16N6b = accounts[5]
		const addressdXinHA = accounts[3]
		const uintEZ1g2R3 = BigInt("109")
		const uintZKmaHM8 = BigInt("766")
		const byteMscClpW = "0x031e0c150e0c0f10050520021f101a1518130f061504010f1a0a1c180e081408"
		const uintjFs0GUz = BigInt("323")
		const addressroCxXkM = accounts[0]
		const addressBTezgB = accounts[1]
		const uint256GPMXnn = await ReviveJLNbn0C.allowance.call(addressdXinHA, addressIb16N6b, {from: accounts[1]});
		const uint256Z10gbZo = await ReviveJLNbn0C.recoverERC20.call(uintEZ1g2R3, {from: accounts[1]});
		const boolKWOTM2P = await ReviveJLNbn0C.increaseLockAmount.call(byteMscClpW, uintZKmaHM8, {from: "0x0000000000000000000000000000000000000001"});
		const addressyqY7kX = await ReviveJLNbn0C.owner.call({from: accounts[3]});
		const boolgvMNOlY = await ReviveJLNbn0C.transferFrom.call(addressBTezgB, addressroCxXkM, uintjFs0GUz, {from: accounts[3]});

		assert.equal(uint256GPMXnn, BigInt("0"))
		await expect(ReviveJLNbn0C.recoverERC20.call(uintEZ1g2R3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivefuxm3NO = await Revive.new({from: accounts[4]});
		const uintWELU22 = BigInt("1004")
		const uintzp3u9fy = BigInt("467")
		const byteTsNZXWK = "0x1617171d0c180c110b15100b11200f0d1c000b100106010808fffffffe0a0f09041008"
		const addresscKfdhwK = accounts[3]
		const boolbKnmqh = await Revivefuxm3NO.transferWithLock.call(addresscKfdhwK, byteTsNZXWK, uintzp3u9fy, uintWELU22, {from: accounts[1]});

		await expect(Revivefuxm3NO.transferWithLock.call(addresscKfdhwK, byteTsNZXWK, uintzp3u9fy, uintWELU22, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIAlMULn = await Revive.new({from: accounts[3]});
		const byteRsdioi = "0x15180b1c16160b14070c071a15170c1f1904101c201602141a1a1a0a10081710"
		const addressKn6HIZu = accounts[3]
		const addressHId7oIo = accounts[4]
		const addressvAXV3eU = accounts[5]
		const uintrrAP6FY = BigInt("1034")
		const addressr7vibHq = accounts[0]
		const uint256YiybfGq = await ReviveIAlMULn.tokensLocked.call(addressKn6HIZu, byteRsdioi, {from: accounts[4]});
		const uint256FNnwHcG = await ReviveIAlMULn.getUnlockableTokens.call(addressHId7oIo, {from: accounts[3]});
		const uint256nVhd1Lr = await ReviveIAlMULn.getUnlockableTokens.call(addressvAXV3eU, {from: accounts[2]});
		const uint2568cltfV = await ReviveIAlMULn.recoverERC20.call(uintrrAP6FY, {from: accounts[5]});
		const uint256A6MA2uC = await ReviveIAlMULn.getUnlockableTokens.call(addressr7vibHq, {from: accounts[3]});

		assert.equal(uint256FNnwHcG, BigInt("0"))
		assert.equal(uint256YiybfGq, BigInt("0"))
		assert.equal(uint256nVhd1Lr, BigInt("0"))
		await expect(ReviveIAlMULn.recoverERC20.call(uintrrAP6FY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const uintLFbzoo4 = BigInt("309")
		const byteYeykZYU = "0x191c03100a0c161113130815120d0a0719081c1102040107151c1b1e1e0f020d"
		const addressRYzXi2p = accounts[3]
		const uintYkbcDlF = BigInt("194")
		const byteoWe3X4h = "0x03091404001109101b0513121e01130204121512000e111c04090c1212140619"
		const addressO6TzgNS = accounts[0]
		const uintimPyBz7 = BigInt("414")
		const uint256RDuBAko = await RevivefYZxrZT.tokensLockedAtTime.call(addressRYzXi2p, byteYeykZYU, uintLFbzoo4, {from: accounts[2]});
		const uint256lOke2Vw = await RevivefYZxrZT.tokensLockedAtTime.call(addressO6TzgNS, byteoWe3X4h, uintYkbcDlF, {from: accounts[2]});
		const uint256LNcnWe = await RevivefYZxrZT.recoverERC20.call(uintimPyBz7, {from: accounts[0]});

		assert.equal(uint256RDuBAko, BigInt("0"))
		assert.equal(uint256lOke2Vw, BigInt("0"))
		await expect(RevivefYZxrZT.recoverERC20.call(uintimPyBz7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const uint6yoWN6 = BigInt("895")
		const addressMvbBFFU = accounts[5]
		const uint256G0kga6A = await ReviveOUvOJdt.recoverERC20.call(uint6yoWN6, {from: accounts[2]});
		const uint256bqKqYy = await ReviveOUvOJdt.unlock.call(addressMvbBFFU, {from: accounts[1]});

		await expect(ReviveOUvOJdt.recoverERC20.call(uint6yoWN6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivefuxm3NO = await Revive.new({from: accounts[4]});
		const uintgHR1mF3 = BigInt("279")
		const uintWSt1kTE = BigInt("1004")
		const uintPpdUrlH = BigInt("467")
		const byte9X5YYC = "0x1617171d0c180c110b15100b11200f0d1c000b100106010808020a0f09041008"
		const addressuIfZbRS = accounts[3]
		const uint256kAtxJq9 = await Revivefuxm3NO.recoverERC20.call(uintgHR1mF3, {from: accounts[4]});
		const boolbKnmqh = await Revivefuxm3NO.transferWithLock.call(addressuIfZbRS, byte9X5YYC, uintPpdUrlH, uintWSt1kTE, {from: accounts[1]});

		await expect(Revivefuxm3NO.recoverERC20.call(uintgHR1mF3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const uintlxdF6Ae = BigInt("1464")
		const addressKJ5regi = accounts[4]
		const addresshIP4Wj = accounts[5]
		const addressWsrR1Cr = accounts[1]
		const addresss3MkR3g = await ReviveOUvOJdt.recoverERC20.call(addressKJ5regi, uintlxdF6Ae, {from: accounts[3]});
		const uint256bqKqYy = await ReviveOUvOJdt.unlock.call(addresshIP4Wj, {from: accounts[1]});
		const uint256HJ9o2fs = await ReviveOUvOJdt.getUnlockableTokens.call(addressWsrR1Cr, {from: accounts[2]});

		await expect(ReviveOUvOJdt.recoverERC20.call(addressKJ5regi, uintlxdF6Ae, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressSHkfgj = accounts[3]
		const uintLYkqjGH = BigInt("1139")
		const uint256I7vIxCq = await ReviveOUvOJdt.getUnlockableTokens.call(addressSHkfgj, {from: accounts[2]});
		const uint256sNrsEmB = await ReviveOUvOJdt.recoverERC20.call(uintLYkqjGH, {from: accounts[3]});

		assert.equal(uint256I7vIxCq, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintLYkqjGH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressdIPXcdd = accounts[5]
		const uintNU2RNFc = BigInt("153")
		const uint256flGMhY0 = await ReviveOUvOJdt.totalBalanceOf.call(addressdIPXcdd, {from: accounts[2]});
		const uint256YrXcwdC = await ReviveOUvOJdt.recoverERC20.call(uintNU2RNFc, {from: accounts[3]});

		assert.equal(uint256flGMhY0, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintNU2RNFc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveciCQMz6 = await Revive.new({from: accounts[4]});
		const uintn7EViMc = BigInt("1842")
		const addressnMxlpcZ = accounts[5]
		const addressOthXrsI = accounts[0]
		const addressRGTBkbM = accounts[1]
		const uintGLyJUGu = BigInt("2042")
		const boolzn4Hwfe = await ReviveciCQMz6.approve.call(addressnMxlpcZ, uintn7EViMc, {from: accounts[4]});
		const uint256y6W5jZ = await ReviveciCQMz6.allowance.call(addressRGTBkbM, addressOthXrsI, {from: accounts[0]});
		const uint256HBerb6 = await ReviveciCQMz6.recoverERC20.call(uintGLyJUGu, {from: accounts[2]});

		assert.equal(boolzn4Hwfe, true)
		assert.equal(uint256y6W5jZ, BigInt("0"))
		await expect(ReviveciCQMz6.recoverERC20.call(uintGLyJUGu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const uintGEz22oS = BigInt("975")
		const addressiDmrk1 = accounts[3]
		const addressZ4v0Mrh = await ReviveOUvOJdt.owner.call({from: accounts[2]});
		const uint256xFcAMUr = await ReviveOUvOJdt.recoverERC20.call(uintGEz22oS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256I7vIxCq = await ReviveOUvOJdt.getUnlockableTokens.call(addressiDmrk1, {from: accounts[2]});

		assert.equal(addressZ4v0Mrh, 0xd8275E563EC6b16171c5F7ecd802C77778d6C22d)
		await expect(ReviveOUvOJdt.recoverERC20.call(uintGEz22oS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const uints7roYqG = BigInt("716")
		const addressPkcBcqw = accounts[3]
		const uintPMEAiqi = BigInt("1318")
		const bytepflnPtH = "0x120b14061f171b1e060e08201f1d0a010801181b1517061a1c1209061215051f"
		const uint256FUdoH85 = await ReviveOUvOJdt.recoverERC20.call(uints7roYqG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256I7vIxCq = await ReviveOUvOJdt.getUnlockableTokens.call(addressPkcBcqw, {from: accounts[2]});
		const boolnabWOAz = await ReviveOUvOJdt.extendLock.call(bytepflnPtH, uintPMEAiqi, {from: accounts[1]});
		await ReviveOUvOJdt.renounceOwnership.call({from: accounts[0]});

		await expect(ReviveOUvOJdt.recoverERC20.call(uints7roYqG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const uintBxMhX3D = BigInt("2034")
		const uintO0eMooj = BigInt("642")
		const uintm4Xi0kd = BigInt("1443")
		const bytegjkWPeX = "0x0a1e0a0f07040e08151f15161719090f0b1a0e180a17090904050110161f1506"
		const uint256FDaylVy = await RevivefYZxrZT.totalSupply.call({from: accounts[4]});
		const uint256sxSYFzs = await RevivefYZxrZT.recoverERC20.call(uintBxMhX3D, {from: accounts[1]});
		const boolTxupYcM = await RevivefYZxrZT.lock.call(bytegjkWPeX, uintm4Xi0kd, uintO0eMooj, {from: accounts[4]});

		assert.equal(uint256FDaylVy, BigInt("3000000000000000000000000000"))
		await expect(RevivefYZxrZT.recoverERC20.call(uintBxMhX3D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefYZxrZT = await Revive.new({from: accounts[0]});
		const uintqPa5LBd = BigInt("61")
		const byteljamdrv = "0x03091404001109101b0513121e01130204121512000e111c04090c1212140619"
		const addresstXN435o = accounts[0]
		const uinteL1b0Wn = BigInt("1498")
		const byteCwTGAvC = "0x1e031e1d0c101a040b1a1d1a1e16170d0e1f07171e130c1d12140a010716141c"
		const addressOWBJUbO = accounts[1]
		const uintoF4slX7 = BigInt("19")
		const addressyFFXmnb = accounts[1]
		const boolH2uNaTh = await RevivefYZxrZT.isOwner.call({from: accounts[3]});
		const uint256lOke2Vw = await RevivefYZxrZT.tokensLockedAtTime.call(addresstXN435o, byteljamdrv, uintqPa5LBd, {from: accounts[2]});
		const uint256RMOnL2 = await RevivefYZxrZT.recoverERC20.call(uinteL1b0Wn, {from: accounts[4]});
		const uint256rLDqcOi = await RevivefYZxrZT.tokensUnlockable.call(addressOWBJUbO, byteCwTGAvC, {from: accounts[1]});
		const boolayJUWqh = await RevivefYZxrZT.increaseAllowance.call(addressyFFXmnb, uintoF4slX7, {from: accounts[2]});

		assert.equal(boolH2uNaTh, false)
		assert.equal(uint256lOke2Vw, BigInt("0"))
		await expect(RevivefYZxrZT.recoverERC20.call(uinteL1b0Wn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const addressPxZ4Fy = accounts[3]
		const uintgjb0lDn = BigInt("1138")
		const uint256I7vIxCq = await ReviveOUvOJdt.getUnlockableTokens.call(addressPxZ4Fy, {from: accounts[2]});
		const uint256dDqpvzM = await ReviveOUvOJdt.recoverERC20.call(uintgjb0lDn, {from: accounts[0]});

		assert.equal(uint256I7vIxCq, BigInt("0"))
		await expect(ReviveOUvOJdt.recoverERC20.call(uintgjb0lDn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOUvOJdt = await Revive.new({from: accounts[3]});
		const uintovafwdX = BigInt("1774")
		const addressEmA04ru = accounts[2]
		const uint256tRYI00 = await ReviveOUvOJdt.recoverERC20.call(uintovafwdX, {from: accounts[1]});
		const uint256I7vIxCq = await ReviveOUvOJdt.getUnlockableTokens.call(addressEmA04ru, {from: accounts[2]});

		await expect(ReviveOUvOJdt.recoverERC20.call(uintovafwdX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})