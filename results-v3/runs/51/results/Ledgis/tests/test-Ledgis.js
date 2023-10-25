const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisjVL4741 = await Ledgis.new({from: accounts[0]});
		const uintGNNAX1Z = BigInt("1973")
		const uinttfQk0QW = BigInt("1774")
		const addressgYGA5YV = accounts[0]
		const uintPLrPrS = BigInt("1785")
		const addressZuPQu8Y = accounts[1]
		const uintcUlYhP6 = BigInt("516")
		const addressxUyCGiR = accounts[4]
		await LedgisjVL4741.unpause.call({from: accounts[2]});
		const addressEeuEoaA = await LedgisjVL4741.lock.call(addressgYGA5YV, uinttfQk0QW, uintGNNAX1Z, {from: accounts[4]});
		const boolhqfrbcX = await LedgisjVL4741.approve.call(addressZuPQu8Y, uintPLrPrS, {from: accounts[1]});
		const boolxqN5AWc = await LedgisjVL4741.transfer.call(addressxUyCGiR, uintcUlYhP6, {from: accounts[3]});

		await expect(LedgisjVL4741.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissaGuPMu = await Ledgis.new({from: accounts[4]});
		const addressxLuEnwS = accounts[2]
		const uintPvhFSt = BigInt("216")
		const uintTuU5bq9 = BigInt("317")
		const addressRp0ki3g = accounts[4]
		const uintxIL5QXp = BigInt("2013")
		const addressrTrGDd9 = accounts[1]
		const uintQkAG08u = BigInt("1793")
		const uintRw1E6j = BigInt("1339")
		const addressClICYsZ = accounts[3]
		const uintdXfirI1 = BigInt("255")
		const uintEPvTIEA = BigInt("1549")
		const addressWJ4NijP = accounts[0]
		const bool5UZ4eZ = await LedgissaGuPMu.isFrozen.call(addressxLuEnwS, {from: accounts[3]});
		const booleofZyr = await LedgissaGuPMu.transferWithLockAfter.call(addressRp0ki3g, uintTuU5bq9, uintPvhFSt, {from: accounts[2]});
		const addresst88f2kp = await LedgissaGuPMu.burn.call(addressrTrGDd9, uintxIL5QXp, {from: accounts[4]});
		const addressiOou0LY = await LedgissaGuPMu.lock.call(addressClICYsZ, uintRw1E6j, uintQkAG08u, {from: accounts[2]});
		const addressmferuZC = await LedgissaGuPMu.lock.call(addressWJ4NijP, uintEPvTIEA, uintdXfirI1, {from: accounts[1]});

		assert.equal(bool5UZ4eZ, false)
		await expect(LedgissaGuPMu.transferWithLockAfter.call(addressRp0ki3g, uintTuU5bq9, uintPvhFSt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisias6K4Q = await Ledgis.new({from: accounts[3]});
		const addressHHktKOS = accounts[2]
		const uintmstN5Os = BigInt("637")
		const addressNiWxaJ8 = accounts[5]
		await Ledgisias6K4Q.pause.call({from: accounts[3]});
		const addressIYPKbwx = await Ledgisias6K4Q.transferOwnership.call(addressHHktKOS, {from: accounts[3]});
		await Ledgisias6K4Q.lockState.call(addressNiWxaJ8, uintmstN5Os, {from: accounts[2]});
		await Ledgisias6K4Q.whenPaused.call({from: accounts[5]});

		await expect(Ledgisias6K4Q.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisgkahZOU = await Ledgis.new({from: accounts[1]});
		const uintmMKVcyj = BigInt("1457")
		const addressi91SkCf = accounts[3]
		const addressnoYGdQs = accounts[3]
		const uintLWPPod = BigInt("1040")
		const uintlsPcdWZ = BigInt("739")
		const addressuFzpCu = accounts[1]
		const uintvZae7xO = BigInt("1297")
		const addressUtsYUG8 = accounts[3]
		const uintIbHipKd = BigInt("917")
		const addressuje0aQQ = accounts[5]
		const boolV49wZVw = await LedgisgkahZOU.approve.call(addressi91SkCf, uintmMKVcyj, {from: accounts[3]});
		const addressHwveZ6H = await LedgisgkahZOU.transferOwnership.call(addressnoYGdQs, {from: accounts[0]});
		const addressDKmz1QO = await LedgisgkahZOU.lock.call(addressuFzpCu, uintlsPcdWZ, uintLWPPod, {from: accounts[3]});
		await LedgisgkahZOU.whenPaused.call({from: accounts[2]});
		const booliJ3ziQG = await LedgisgkahZOU.increaseAllowance.call(addressUtsYUG8, uintvZae7xO, {from: accounts[3]});
		const addresshrLnoQ9 = await LedgisgkahZOU.burn.call(addressuje0aQQ, uintIbHipKd, {from: accounts[1]});

		assert.equal(boolV49wZVw, true)
		await expect(LedgisgkahZOU.transferOwnership.call(addressnoYGdQs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMZmWGv7 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzVykium = BigInt("757")
		const addressZgFw5Kb = accounts[0]
		const uintLTsrmO = BigInt("614")
		const uintXtCwmhf = BigInt("1148")
		const addressx2xaR4x = accounts[1]
		const uintypu913I = BigInt("949")
		const addressLm48K6g = accounts[3]
		const uintRygEao2 = BigInt("303")
		const addressGvCVOW8 = accounts[3]
		const addressNUyI0c = accounts[4]
		const addressBeOJwW = accounts[3]
		const boolh2tnR5 = await LedgisMZmWGv7.transfer.call(addressZgFw5Kb, uintzVykium, {from: accounts[4]});
		const addressESutS0m = await LedgisMZmWGv7.lock.call(addressx2xaR4x, uintXtCwmhf, uintLTsrmO, {from: accounts[2]});
		const addressVz4Zmu = await LedgisMZmWGv7.burn.call(addressLm48K6g, uintypu913I, {from: accounts[0]});
		const boolmjdyewt = await LedgisMZmWGv7.transferFrom.call(addressNUyI0c, addressGvCVOW8, uintRygEao2, {from: accounts[4]});
		const uint256SfiVDTY = await LedgisMZmWGv7.currentTime.call({from: accounts[5]});
		const uint256pjY4k6R = await LedgisMZmWGv7.balanceOf.call(addressBeOJwW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Ledgis', async () => {
		const LedgisCzyQDrH = await Ledgis.new({from: accounts[0]});
		const addressBGM3J3S = accounts[4]
		const uintAu8Bd5i = BigInt("1448")
		const addressvzt6MyY = accounts[2]
		await LedgisCzyQDrH.whenNotPaused.call({from: accounts[1]});
		const boolslvGUsD = await LedgisCzyQDrH.isFrozen.call(addressBGM3J3S, {from: accounts[3]});
		await LedgisCzyQDrH.unpause.call({from: accounts[0]});
		const boolf0ysBLj = await LedgisCzyQDrH.decreaseAllowance.call(addressvzt6MyY, uintAu8Bd5i, {from: accounts[1]});

		await expect(LedgisCzyQDrH.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGx5NiR4 = await Ledgis.new({from: accounts[1]});
		const uintNycJcjx = BigInt("694")
		const addressq4kdSBh = accounts[4]
		const addressdueVLlx = accounts[0]
		const boolgmZtqB = await LedgisGx5NiR4.decreaseAllowance.call(addressq4kdSBh, uintNycJcjx, {from: accounts[2]});
		await LedgisGx5NiR4.renounceOwnership.call({from: accounts[1]});
		await LedgisGx5NiR4.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qNh1rOS = await LedgisGx5NiR4.lockCount.call(addressdueVLlx, {from: accounts[0]});

		await expect(LedgisGx5NiR4.decreaseAllowance.call(addressq4kdSBh, uintNycJcjx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisdeHGbSi = await Ledgis.new({from: accounts[5]});
		const addressevaPU94 = accounts[2]
		const addressY9heSo = accounts[0]
		const uintDszQUX0 = BigInt("343")
		const addressXpl5xSC = accounts[2]
		const uint256Ke4HfWt = await LedgisdeHGbSi.allowance.call(addressY9heSo, addressevaPU94, {from: accounts[1]});
		const boolyP2a0u0 = await LedgisdeHGbSi.transfer.call(addressXpl5xSC, uintDszQUX0, {from: accounts[2]});
		const uint256XMJSqCt = await LedgisdeHGbSi.currentTime.call({from: accounts[1]});

		assert.equal(uint256Ke4HfWt, BigInt("0"))
		await expect(LedgisdeHGbSi.transfer.call(addressXpl5xSC, uintDszQUX0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisdeHGbSi = await Ledgis.new({from: accounts[5]});
		const addressXYQ7pGE = accounts[2]
		const addressHzmh8x = accounts[0]
		const uintIVCtQNK = BigInt("1727")
		const addressYrB9QEv = accounts[3]
		const uintkAvguz3 = BigInt("343")
		const addressEUcxIe = accounts[3]
		const uint256Ke4HfWt = await LedgisdeHGbSi.allowance.call(addressHzmh8x, addressXYQ7pGE, {from: accounts[1]});
		const uint2569JsUvC = await LedgisdeHGbSi.currentTime.call({from: accounts[2]});
		const boolviQE9eg = await LedgisdeHGbSi.increaseAllowance.call(addressYrB9QEv, uintIVCtQNK, {from: accounts[2]});
		await LedgisdeHGbSi.whenPaused.call({from: accounts[0]});
		const boolyP2a0u0 = await LedgisdeHGbSi.transfer.call(addressEUcxIe, uintkAvguz3, {from: accounts[2]});
		const uint256XMJSqCt = await LedgisdeHGbSi.currentTime.call({from: accounts[1]});

		assert.equal(boolviQE9eg, true)
		assert.equal(uint2569JsUvC, BigInt("1630229785"))
		assert.equal(uint256Ke4HfWt, BigInt("0"))
		await expect(LedgisdeHGbSi.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissaGuPMu = await Ledgis.new({from: accounts[4]});
		const addressU6gtn3 = accounts[2]
		const addressRgKc41 = accounts[5]
		const uinteqZcJ6X = BigInt("1242")
		const addressCO3Ds79 = accounts[3]
		const uintZPqDzlT = BigInt("216")
		const uintndQb5VX = BigInt("317")
		const addressBGDawZj = accounts[4]
		const uintYVe5Ugy = BigInt("2013")
		const addressG2M6nkg = accounts[1]
		const uintEoDE2a = BigInt("1793")
		const uintBINnPat = BigInt("1339")
		const addressvtM5L0W = accounts[3]
		const uintwbvzgFb = BigInt("255")
		const uintyUgthW = BigInt("1549")
		const addresshxO93cT = accounts[0]
		const bool5UZ4eZ = await LedgissaGuPMu.isFrozen.call(addressU6gtn3, {from: accounts[3]});
		const uint256TWZCSOV = await LedgissaGuPMu.balanceOf.call(addressRgKc41, {from: accounts[2]});
		const boolLm3XLL1 = await LedgissaGuPMu.approve.call(addressCO3Ds79, uinteqZcJ6X, {from: accounts[1]});
		const booleofZyr = await LedgissaGuPMu.transferWithLockAfter.call(addressBGDawZj, uintndQb5VX, uintZPqDzlT, {from: accounts[2]});
		const addresst88f2kp = await LedgissaGuPMu.burn.call(addressG2M6nkg, uintYVe5Ugy, {from: accounts[4]});
		const addressiOou0LY = await LedgissaGuPMu.lock.call(addressvtM5L0W, uintBINnPat, uintEoDE2a, {from: accounts[2]});
		const addressmferuZC = await LedgissaGuPMu.lock.call(addresshxO93cT, uintyUgthW, uintwbvzgFb, {from: accounts[1]});

		assert.equal(bool5UZ4eZ, false)
		assert.equal(boolLm3XLL1, true)
		assert.equal(uint256TWZCSOV, BigInt("0"))
		await expect(LedgissaGuPMu.transferWithLockAfter.call(addressBGDawZj, uintndQb5VX, uintZPqDzlT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissaGuPMu = await Ledgis.new({from: accounts[4]});
		const addressMe57yYb = accounts[2]
		const addresseyrydCr = accounts[5]
		const uintkUgpUTJ = BigInt("1242")
		const addressyo16NQ = accounts[3]
		const uintKpjSgXP = BigInt("2013")
		const addressnlF9DTE = accounts[1]
		const uintR4racId = BigInt("1793")
		const uintsyPbwK = BigInt("1339")
		const addressPqgbvJq = accounts[3]
		const uintWW1v4hL = BigInt("255")
		const uintNPk4sQi = BigInt("1549")
		const addressQTsJI6H = accounts[0]
		const bool5UZ4eZ = await LedgissaGuPMu.isFrozen.call(addressMe57yYb, {from: accounts[3]});
		const uint256TWZCSOV = await LedgissaGuPMu.balanceOf.call(addresseyrydCr, {from: accounts[2]});
		const boolLm3XLL1 = await LedgissaGuPMu.approve.call(addressyo16NQ, uintkUgpUTJ, {from: accounts[1]});
		const addresst88f2kp = await LedgissaGuPMu.burn.call(addressnlF9DTE, uintKpjSgXP, {from: accounts[4]});
		const addressiOou0LY = await LedgissaGuPMu.lock.call(addressPqgbvJq, uintsyPbwK, uintR4racId, {from: accounts[2]});
		const addressmferuZC = await LedgissaGuPMu.lock.call(addressQTsJI6H, uintNPk4sQi, uintWW1v4hL, {from: accounts[1]});

		assert.equal(bool5UZ4eZ, false)
		assert.equal(boolLm3XLL1, true)
		assert.equal(uint256TWZCSOV, BigInt("0"))
		await expect(LedgissaGuPMu.burn.call(addressnlF9DTE, uintKpjSgXP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisdeHGbSi = await Ledgis.new({from: accounts[5]});
		const addressizLXiO = accounts[2]
		const addressPxkiqvv = accounts[1]
		const addressprIikNg = "0x0000000000000000000000000000000000000001"
		const uintwIJP3l = BigInt("343")
		const addressE6HWct1 = accounts[2]
		const uint256Ke4HfWt = await LedgisdeHGbSi.allowance.call(addressPxkiqvv, addressizLXiO, {from: accounts[1]});
		const uint256gKyKDCU = await LedgisdeHGbSi.lockCount.call(addressprIikNg, {from: accounts[2]});
		await LedgisdeHGbSi.unpause.call({from: accounts[0]});
		const boolyP2a0u0 = await LedgisdeHGbSi.transfer.call(addressE6HWct1, uintwIJP3l, {from: accounts[2]});

		assert.equal(uint256Ke4HfWt, BigInt("0"))
		assert.equal(uint256gKyKDCU, BigInt("0"))
		await expect(LedgisdeHGbSi.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const uintC4QOb22 = BigInt("610")
		const uintn0UJhrl = BigInt("1519")
		const addressQXefgVw = accounts[4]
		const uintfmCQmhu = BigInt("1054")
		const addressIzdiEtH = accounts[5]
		const uintUWzvQQG = BigInt("226")
		const addressfie4vnZ = accounts[2]
		const boolKPlXlL0 = await LedgisecLLVbL.transferWithLockAfter.call(addressQXefgVw, uintn0UJhrl, uintC4QOb22, {from: accounts[0]});
		const uint256GOHG26E = await LedgisecLLVbL.afterTime.call(uintfmCQmhu, {from: accounts[4]});
		const uint256M6zNR6t = await LedgisecLLVbL.balanceOf.call(addressIzdiEtH, {from: accounts[3]});
		await LedgisecLLVbL.whenNotFrozen.call({from: accounts[4]});
		const boolcgQKfRr = await LedgisecLLVbL.transfer.call(addressfie4vnZ, uintUWzvQQG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKPlXlL0, true)
		assert.equal(uint256GOHG26E, BigInt("1630230841"))
		assert.equal(uint256M6zNR6t, BigInt("0"))
		await expect(LedgisecLLVbL.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLGIzA6i = await Ledgis.new({from: accounts[0]});
		const uintYLWcSWe = BigInt("1196")
		const addressJaGGZvy = accounts[0]
		const addressgwZ4fVJ = accounts[2]
		const uintLtJ90Ia = BigInt("582")
		const addressfTQ1INH = accounts[2]
		const boolahpDx3y = await LedgisLGIzA6i.transferFrom.call(addressgwZ4fVJ, addressJaGGZvy, uintYLWcSWe, {from: accounts[2]});
		await LedgisLGIzA6i.whenPaused.call({from: accounts[0]});
		await LedgisLGIzA6i.lockState.call(addressfTQ1INH, uintLtJ90Ia, {from: accounts[3]});

		await expect(LedgisLGIzA6i.transferFrom.call(addressgwZ4fVJ, addressJaGGZvy, uintYLWcSWe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ604zwh = await Ledgis.new({from: accounts[5]});
		const addressSF4zbiu = accounts[2]
		const uintnYkfm1U = BigInt("535")
		const addressE0IpqKd = accounts[5]
		const uint256B6IcLNh = await LedgisJ604zwh.totalSupply.call({from: accounts[1]});
		const uint256ZECiaGk = await LedgisJ604zwh.balanceOf.call(addressSF4zbiu, {from: accounts[0]});
		const addressS9CP1Nm = await LedgisJ604zwh.burn.call(addressE0IpqKd, uintnYkfm1U, {from: accounts[0]});

		assert.equal(uint256B6IcLNh, BigInt("10000000000000"))
		assert.equal(uint256ZECiaGk, BigInt("0"))
		await expect(LedgisJ604zwh.burn.call(addressE0IpqKd, uintnYkfm1U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const addressHGGRPb = accounts[3]
		const uintjZsd8e9 = BigInt("949")
		const uintiJZvnvF = BigInt("149")
		const addressBKdN2yS = accounts[4]
		const uintrwIulW = BigInt("719")
		const addressfFeqiZA = accounts[3]
		const uint256IkZLf89 = await LedgisecLLVbL.balanceOf.call(addressHGGRPb, {from: accounts[3]});
		const addresskb1a1Sp = await LedgisecLLVbL.lockAfter.call(addressBKdN2yS, uintiJZvnvF, uintjZsd8e9, {from: accounts[0]});
		await LedgisecLLVbL.unpause.call({from: accounts[4]});
		const boolpyjjOSy = await LedgisecLLVbL.decreaseAllowance.call(addressfFeqiZA, uintrwIulW, {from: accounts[3]});
		await LedgisecLLVbL.unpause.call({from: accounts[3]});
		const uint256YU7Edv = await LedgisecLLVbL.currentTime.call({from: accounts[3]});

		assert.equal(uint256IkZLf89, BigInt("0"))
		await expect(LedgisecLLVbL.lockAfter.call(addressBKdN2yS, uintiJZvnvF, uintjZsd8e9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const addresstcQGrRv = accounts[3]
		const uintJFpGK8 = BigInt("2026")
		const addressg0memUl = accounts[1]
		const uintkuRcOx = BigInt("226")
		const addressOzFbNWh = accounts[2]
		const uintBVyf9L4 = BigInt("1912")
		const addressazymzlS = accounts[0]
		const uint256IkZLf89 = await LedgisecLLVbL.balanceOf.call(addresstcQGrRv, {from: accounts[3]});
		const addressS1pJTNJ = await LedgisecLLVbL.unlock.call(addressg0memUl, uintJFpGK8, {from: accounts[0]});
		const boolcgQKfRr = await LedgisecLLVbL.transfer.call(addressOzFbNWh, uintkuRcOx, {from: "0x0000000000000000000000000000000000000001"});
		const boolokjMN21 = await LedgisecLLVbL.transfer.call(addressazymzlS, uintBVyf9L4, {from: accounts[2]});
		await LedgisecLLVbL.unpause.call({from: accounts[4]});
		await LedgisecLLVbL.pause.call({from: accounts[1]});

		assert.equal(uint256IkZLf89, BigInt("0"))
		await expect(LedgisecLLVbL.unlock.call(addressg0memUl, uintJFpGK8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const addressFgqC7U = accounts[2]
		const uintK4MUwd0 = BigInt("1082")
		const uintLXFwaaC = BigInt("315")
		const addressSuAbIhE = accounts[4]
		const uintmxpWRCw = BigInt("226")
		const addressiengkY = accounts[2]
		const uintoABE17k = BigInt("518")
		const uintzuUVEx6 = BigInt("1164")
		const addressFFii5Z4 = accounts[5]
		const uintLrx7MhJ = BigInt("1730")
		const uint256IkZLf89 = await LedgisecLLVbL.balanceOf.call(addressFgqC7U, {from: accounts[3]});
		const addressC6TuFJd = await LedgisecLLVbL.lock.call(addressSuAbIhE, uintLXFwaaC, uintK4MUwd0, {from: accounts[0]});
		const boolcgQKfRr = await LedgisecLLVbL.transfer.call(addressiengkY, uintmxpWRCw, {from: "0x0000000000000000000000000000000000000001"});
		const boolnetulRC = await LedgisecLLVbL.transferWithLock.call(addressFFii5Z4, uintzuUVEx6, uintoABE17k, {from: "0x0000000000000000000000000000000000000001"});
		const uint256c64h6nR = await LedgisecLLVbL.afterTime.call(uintLrx7MhJ, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisecLLVbL.unpause.call({from: accounts[4]});

		assert.equal(uint256IkZLf89, BigInt("0"))
		await expect(LedgisecLLVbL.lock.call(addressSuAbIhE, uintLXFwaaC, uintK4MUwd0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const addressbZ4aQjX = accounts[3]
		const uintr8wM5at = BigInt("923")
		const addressBW7e6b = accounts[0]
		const uinthhgwSeP = BigInt("1912")
		const addressgSfYHG = accounts[0]
		const uint256IkZLf89 = await LedgisecLLVbL.balanceOf.call(addressbZ4aQjX, {from: accounts[3]});
		const boolCTBlMVz = await LedgisecLLVbL.mint.call(addressBW7e6b, uintr8wM5at, {from: accounts[0]});
		const boolokjMN21 = await LedgisecLLVbL.transfer.call(addressgSfYHG, uinthhgwSeP, {from: accounts[2]});
		await LedgisecLLVbL.pause.call({from: accounts[1]});

		assert.equal(boolCTBlMVz, true)
		assert.equal(uint256IkZLf89, BigInt("0"))
		await expect(LedgisecLLVbL.transfer.call(addressgSfYHG, uinthhgwSeP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const address4XPl0g = accounts[5]
		const uintUDXy9Ot = BigInt("642")
		const addressYLmhI6w = accounts[3]
		const uint256c7QTaaN = await LedgisecLLVbL.balanceOf.call(address4XPl0g, {from: accounts[2]});
		await LedgisecLLVbL.unpause.call({from: accounts[0]});
		const uint256Z3KoPD4 = await LedgisecLLVbL.afterTime.call(uintUDXy9Ot, {from: accounts[4]});
		const uint256IkZLf89 = await LedgisecLLVbL.balanceOf.call(addressYLmhI6w, {from: accounts[3]});

		assert.equal(uint256c7QTaaN, BigInt("0"))
		await expect(LedgisecLLVbL.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const addressiarrHMr = accounts[4]
		const uintTQaO32f = BigInt("1377")
		const uintE39FOmR = BigInt("387")
		const addressTS5UBwT = accounts[4]
		const uintnTO68e3 = BigInt("2038")
		const addressuMo40Vz = accounts[1]
		const addressgJ0rbE = await LedgisecLLVbL.freeze.call(addressiarrHMr, {from: accounts[0]});
		const boolYlqLPUc = await LedgisecLLVbL.transferWithLock.call(addressTS5UBwT, uintE39FOmR, uintTQaO32f, {from: "0x0000000000000000000000000000000000000001"});
		const boolcgQKfRr = await LedgisecLLVbL.transfer.call(addressuMo40Vz, uintnTO68e3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisecLLVbL.transferWithLock.call(addressTS5UBwT, uintE39FOmR, uintTQaO32f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ3VBfLd = await Ledgis.new({from: accounts[1]});
		const uintctfFJtf = BigInt("177")
		const addressmikKJl = accounts[4]
		const uintgujtl4w = BigInt("167")
		const uintjhVzJ4E = BigInt("1284")
		const addressmg1rBO2 = accounts[1]
		const uintIKTU1Ml = BigInt("222")
		const addressOUQoj9F = accounts[5]
		const boolYNGNWA = await LedgisJ3VBfLd.transfer.call(addressmikKJl, uintctfFJtf, {from: accounts[1]});
		const boolBnYE1oF = await LedgisJ3VBfLd.transferWithLock.call(addressmg1rBO2, uintjhVzJ4E, uintgujtl4w, {from: accounts[1]});
		await LedgisJ3VBfLd.renounceOwnership.call({from: accounts[2]});
		await LedgisJ3VBfLd.whenPaused.call({from: accounts[1]});
		const addressiTtFwCN = await LedgisJ3VBfLd.burn.call(addressOUQoj9F, uintIKTU1Ml, {from: accounts[1]});

		assert.equal(boolBnYE1oF, true)
		assert.equal(boolYNGNWA, true)
		await expect(LedgisJ3VBfLd.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisecLLVbL = await Ledgis.new({from: accounts[0]});
		const addressCNWLfu3 = accounts[3]
		const addressru8kK48 = accounts[5]
		const uintEtbADhh = BigInt("2026")
		const addressqEAgQX3 = accounts[2]
		const uintcjsdvGd = BigInt("226")
		const addressQRRbZLa = accounts[2]
		const uintEkFPSGa = BigInt("1912")
		const addressSrXbPu = accounts[0]
		const uint256IkZLf89 = await LedgisecLLVbL.balanceOf.call(addressCNWLfu3, {from: accounts[3]});
		const addressOMJAvPi = await LedgisecLLVbL.unfreeze.call(addressru8kK48, {from: accounts[0]});
		const addressS1pJTNJ = await LedgisecLLVbL.unlock.call(addressqEAgQX3, uintEtbADhh, {from: accounts[0]});
		const boolcgQKfRr = await LedgisecLLVbL.transfer.call(addressQRRbZLa, uintcjsdvGd, {from: "0x0000000000000000000000000000000000000001"});
		const boolokjMN21 = await LedgisecLLVbL.transfer.call(addressSrXbPu, uintEkFPSGa, {from: accounts[2]});
		await LedgisecLLVbL.whenPaused.call({from: accounts[3]});
		await LedgisecLLVbL.pause.call({from: accounts[1]});

		assert.equal(uint256IkZLf89, BigInt("0"))
		await expect(LedgisecLLVbL.unlock.call(addressqEAgQX3, uintEtbADhh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgispj6IUJ = await Ledgis.new({from: accounts[0]});
		const addressP0m8bIF = accounts[1]
		const addressYnR1UyV = accounts[0]
		const addressSCKHXGn = accounts[5]
		const addressThzeQyk = accounts[5]
		const uintY601JuL = BigInt("238")
		const addressfDkhxd1 = accounts[3]
		const uint256DFEVp6h = await Ledgispj6IUJ.balanceOf.call(addressP0m8bIF, {from: accounts[5]});
		await Ledgispj6IUJ.renounceOwnership.call({from: accounts[0]});
		const addressFfdIacI = await Ledgispj6IUJ.transferOwnership.call(addressYnR1UyV, {from: accounts[2]});
		const uint256c7vfFHO = await Ledgispj6IUJ.balanceOf.call(addressSCKHXGn, {from: accounts[1]});
		const boolIrkUu2Q = await Ledgispj6IUJ.isFrozen.call(addressThzeQyk, {from: accounts[2]});
		const addressEMCvmQ = await Ledgispj6IUJ.unlock.call(addressfDkhxd1, uintY601JuL, {from: accounts[4]});

		assert.equal(uint256DFEVp6h, BigInt("0"))
		await expect(Ledgispj6IUJ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})