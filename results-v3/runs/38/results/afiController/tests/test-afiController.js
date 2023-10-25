const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressdug4NnF = accounts[3]
		const afiControllerTAqsop = await afiController.new(addressdug4NnF, {from: accounts[1]});
		const addressUsPaW2 = accounts[3]
		const uintyS7b4Zb = BigInt("1636")
		const addressHbg6PF = accounts[5]
		const addressQ6vo8UZ = accounts[4]
		const uinti2E6tT2 = BigInt("980")
		const addressuPdZVgW = accounts[5]
		const uintrTEhm9 = BigInt("1621")
		const addressUp75gTi = accounts[4]
		const uintDNurhVa = BigInt("552")
		const addressqZIU0qJ = accounts[3]
		const addressmUGmOo = await afiControllerTAqsop.setOneSplit.call(addressUsPaW2, {from: accounts[1]});
		const addressxJM2rSF = await afiControllerTAqsop.yearn.call(addressQ6vo8UZ, addressHbg6PF, uintyS7b4Zb, {from: accounts[1]});
		const addresss72Qbyf = await afiControllerTAqsop.withdraw.call(addressuPdZVgW, uinti2E6tT2, {from: accounts[0]});
		const addressRNdZKKU = await afiControllerTAqsop.earn.call(addressUp75gTi, uintrTEhm9, {from: accounts[3]});
		const addressZC9DZrW = await afiControllerTAqsop.withdraw.call(addressqZIU0qJ, uintDNurhVa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerTAqsop.yearn.call(addressQ6vo8UZ, addressHbg6PF, uintyS7b4Zb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNETQ1AJ = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressNETQ1AJ, {from: accounts[0]});
		const uintgThpX6c = BigInt("1465")
		const addressEkkHZr = accounts[0]
		const address8M0VPc = accounts[1]
		const uintYH3hR7L = await afiControllerwE1kI9k.setSplit.call(uintgThpX6c, {from: accounts[4]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(address8M0VPc, addressEkkHZr, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.setSplit.call(uintgThpX6c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKXIxPgF = accounts[0]
		const afiControllerJ1bsRGF = await afiController.new(addressKXIxPgF, {from: accounts[0]});
		const uintc2Z6IAY = BigInt("694")
		const addressU9owk9o = accounts[1]
		const addressIMPU4YW = accounts[3]
		const addressbKbewYE = accounts[0]
		const addressERVFXby = accounts[0]
		const addressfGqvoN = accounts[5]
		const uintYy29jn = await afiControllerJ1bsRGF.getExpectedReturn.call(addressIMPU4YW, addressU9owk9o, uintc2Z6IAY, {from: accounts[4]});
		const addressb9cRt1 = await afiControllerJ1bsRGF.setVault.call(addressERVFXby, addressbKbewYE, {from: accounts[0]});
		const addressiNDSXKN = await afiControllerJ1bsRGF.setStrategist.call(addressfGqvoN, {from: accounts[1]});

		await expect(afiControllerJ1bsRGF.getExpectedReturn.call(addressIMPU4YW, addressU9owk9o, uintc2Z6IAY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGiHOoMs = accounts[2]
		const afiControllerU6sPjxt = await afiController.new(addressGiHOoMs, {from: accounts[1]});
		const addresspOXqneQ = accounts[5]
		const uintRkUk3my = BigInt("1644")
		const addressmVMY9P = accounts[5]
		const addressrUF2TQl = accounts[4]
		const addressRhms0h = accounts[3]
		const addressZmIAsmI = accounts[0]
		const addressEckHJQh = await afiControllerU6sPjxt.setGovernance.call(addresspOXqneQ, {from: accounts[2]});
		const addressRs4C3wi = await afiControllerU6sPjxt.earn.call(addressmVMY9P, uintRkUk3my, {from: accounts[1]});
		const addressU9VqWHx = await afiControllerU6sPjxt.setConverter.call(addressZmIAsmI, addressRhms0h, addressrUF2TQl, {from: accounts[1]});

		await expect(afiControllerU6sPjxt.setGovernance.call(addresspOXqneQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNIhxER = accounts[2]
		const afiControllerLDPskWC = await afiController.new(addressNIhxER, {from: accounts[4]});
		const addressHvQAYs1 = accounts[4]
		const addressaPf2gxx = "0x0000000000000000000000000000000000000001"
		const uintorG5CYF = BigInt("483")
		const addressq7PvtvT = accounts[1]
		const address0SHVES = accounts[0]
		const addressFOHDsdO = accounts[3]
		const uintzK6O2Lw = BigInt("1011")
		const addressTwfoywk = "0x0000000000000000000000000000000000000001"
		const addressJQab8VR = "0x0000000000000000000000000000000000000001"
		const addressbpcgl4M = await afiControllerLDPskWC.approveStrategy.call(addressaPf2gxx, addressHvQAYs1, {from: "0x0000000000000000000000000000000000000001"});
		const uintXK83Sxn = await afiControllerLDPskWC.getExpectedReturn.call(address0SHVES, addressq7PvtvT, uintorG5CYF, {from: accounts[5]});
		const addressxzrGCiS = await afiControllerLDPskWC.withdrawAll.call(addressFOHDsdO, {from: accounts[3]});
		const addressMmcfa0Q = await afiControllerLDPskWC.earn.call(addressTwfoywk, uintzK6O2Lw, {from: accounts[0]});
		const addressxHf1Lc8 = await afiControllerLDPskWC.setRewards.call(addressJQab8VR, {from: accounts[1]});

		await expect(afiControllerLDPskWC.approveStrategy.call(addressaPf2gxx, addressHvQAYs1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTe2vWhR = accounts[0]
		const afiControllerXaR643t = await afiController.new(addressTe2vWhR, {from: accounts[2]});
		const addressrhTFBhJ = accounts[4]
		const addressbR1IgiH = accounts[4]
		const addressNwXBBD = accounts[5]
		const addressBKRvVrP = "0x0000000000000000000000000000000000000001"
		const uintTU6paS8 = BigInt("348")
		const addressacHw0iw = "0x0000000000000000000000000000000000000001"
		const addressRUUJk5 = accounts[2]
		const addressP0Jugqf = accounts[1]
		const addressSDKaGtH = await afiControllerXaR643t.inCaseStrategyTokenGetStuck.call(addressbR1IgiH, addressrhTFBhJ, {from: accounts[0]});
		const addressw7RRxJ3 = await afiControllerXaR643t.approveStrategy.call(addressBKRvVrP, addressNwXBBD, {from: accounts[4]});
		const addressyGiNa3H = await afiControllerXaR643t.earn.call(addressacHw0iw, uintTU6paS8, {from: accounts[0]});
		const addresssTr3vy = await afiControllerXaR643t.approveStrategy.call(addressP0Jugqf, addressRUUJk5, {from: accounts[3]});

		await expect(afiControllerXaR643t.inCaseStrategyTokenGetStuck.call(addressbR1IgiH, addressrhTFBhJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnvX26CG = accounts[1]
		const afiControllerqbq4Qc = await afiController.new(addressnvX26CG, {from: accounts[4]});
		const addressoq81qM = accounts[2]
		const uinteneQseE = BigInt("1917")
		const addressR2tpgZt = accounts[5]
		const addressdKgVren = accounts[2]
		const addressDAyoGpJ = accounts[2]
		const addressAwMePJF = accounts[2]
		const addressoXzAiua = await afiControllerqbq4Qc.withdrawAll.call(addressoq81qM, {from: accounts[1]});
		const addresspuFguId = await afiControllerqbq4Qc.yearn.call(addressdKgVren, addressR2tpgZt, uinteneQseE, {from: accounts[1]});
		const addressILivKQ6 = await afiControllerqbq4Qc.approveStrategy.call(addressAwMePJF, addressDAyoGpJ, {from: accounts[4]});

		await expect(afiControllerqbq4Qc.withdrawAll.call(addressoq81qM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAiuwPnl = accounts[0]
		const afiControllerMSWJNhr = await afiController.new(addressAiuwPnl, {from: accounts[1]});
		const uintxELIpyJ = BigInt("1367")
		const addresshBGsA7R = accounts[4]
		const uintP7N5BJX = BigInt("1805")
		const addressTLe3LcR = accounts[3]
		const addressJK1ofFr = accounts[5]
		const addressAQKuHa6 = accounts[1]
		const addresstxXYy2T = await afiControllerMSWJNhr.withdraw.call(addresshBGsA7R, uintxELIpyJ, {from: accounts[3]});
		const addressxjBK4GD = await afiControllerMSWJNhr.yearn.call(addressJK1ofFr, addressTLe3LcR, uintP7N5BJX, {from: "0x0000000000000000000000000000000000000001"});
		const addressk5U0D4c = await afiControllerMSWJNhr.setGovernance.call(addressAQKuHa6, {from: accounts[0]});

		await expect(afiControllerMSWJNhr.withdraw.call(addresshBGsA7R, uintxELIpyJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSdHZa2K = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressSdHZa2K, {from: accounts[0]});
		const addressIEkqNZZ = accounts[3]
		const addressTrt2WSJ = accounts[2]
		const uintg3BskR2 = BigInt("1465")
		const addressQUMpD8a = await afiControllerwE1kI9k.revokeStrategy.call(addressTrt2WSJ, addressIEkqNZZ, {from: accounts[1]});
		const uintYH3hR7L = await afiControllerwE1kI9k.setSplit.call(uintg3BskR2, {from: accounts[4]});

		await expect(afiControllerwE1kI9k.revokeStrategy.call(addressTrt2WSJ, addressIEkqNZZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswm75fV = accounts[1]
		const afiControllermFUJEjk = await afiController.new(addresswm75fV, {from: accounts[5]});
		const addressCbdeBmE = accounts[5]
		const addressLAgWsEQ = accounts[1]
		const addressomwduaL = accounts[3]
		const addressJFBFFWu = accounts[1]
		const uintkUPoLJJ = BigInt("1841")
		const addresswC31B8 = accounts[3]
		const addressACTdJIA = accounts[0]
		const addresscXNhJfB = "0x0000000000000000000000000000000000000001"
		const addressN1CHTEU = await afiControllermFUJEjk.setStrategist.call(addressCbdeBmE, {from: accounts[2]});
		const addressdcLbHQ0 = await afiControllermFUJEjk.setStrategy.call(addressomwduaL, addressLAgWsEQ, {from: accounts[4]});
		const addresstnaOMGB = await afiControllermFUJEjk.setOneSplit.call(addressJFBFFWu, {from: accounts[1]});
		const addressczOwxi = await afiControllermFUJEjk.yearn.call(addressACTdJIA, addresswC31B8, uintkUPoLJJ, {from: accounts[0]});
		const addressGnuiCLU = await afiControllermFUJEjk.setRewards.call(addresscXNhJfB, {from: accounts[4]});

		await expect(afiControllermFUJEjk.setStrategist.call(addressCbdeBmE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuJ00Jp8 = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressuJ00Jp8, {from: accounts[0]});
		const uintpqHNWyK = BigInt("997")
		const addressn5XksGz = accounts[3]
		const uintjlETH4s = BigInt("1465")
		const addresszGnnvU1 = accounts[1]
		const addressAYNd0bu = accounts[1]
		const addressAG6LFmh = await afiControllerwE1kI9k.earn.call(addressn5XksGz, uintpqHNWyK, {from: accounts[1]});
		const uintYH3hR7L = await afiControllerwE1kI9k.setSplit.call(uintjlETH4s, {from: accounts[4]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressAYNd0bu, addresszGnnvU1, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.earn.call(addressn5XksGz, uintpqHNWyK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressv9mUuWf = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressv9mUuWf, {from: accounts[0]});
		const address735LPv = "0x0000000000000000000000000000000000000001"
		const addressJNjJzh = accounts[1]
		const uintJjiI4Ps = BigInt("1473")
		const addressD9JtO3 = accounts[4]
		const addressXxacs3d = accounts[4]
		const addresszdEhBi4 = accounts[0]
		const addressSof74o = accounts[1]
		const addressSB7zTBD = await afiControllerwE1kI9k.setVault.call(addressJNjJzh, address735LPv, {from: "0x0000000000000000000000000000000000000001"});
		const uintYH3hR7L = await afiControllerwE1kI9k.setSplit.call(uintJjiI4Ps, {from: accounts[4]});
		const addressQeWHaDx = await afiControllerwE1kI9k.revokeStrategy.call(addressXxacs3d, addressD9JtO3, {from: accounts[3]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressSof74o, addresszdEhBi4, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.setVault.call(addressJNjJzh, address735LPv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxPD1dX7 = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressxPD1dX7, {from: accounts[0]});
		const addressIUCG4r7 = accounts[2]
		const addressOFEivY1 = accounts[1]
		const uintot0epON = BigInt("1465")
		const addressyWHRAvG = accounts[0]
		const addressUobY5OE = accounts[2]
		const uintvqAUi5Y = BigInt("206")
		const addressfSogYLv = accounts[5]
		const addressYHonQWG = await afiControllerwE1kI9k.setStrategy.call(addressOFEivY1, addressIUCG4r7, {from: accounts[1]});
		const uintYH3hR7L = await afiControllerwE1kI9k.setSplit.call(uintot0epON, {from: accounts[4]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressUobY5OE, addressyWHRAvG, {from: accounts[2]});
		const addresspLICCUi = await afiControllerwE1kI9k.inCaseTokensGetStuck.call(addressfSogYLv, uintvqAUi5Y, {from: accounts[3]});

		await expect(afiControllerwE1kI9k.setStrategy.call(addressOFEivY1, addressIUCG4r7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssLoA0q4 = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addresssLoA0q4, {from: accounts[0]});
		const addressDUCxrs = accounts[1]
		const addressFqjrb91 = accounts[3]
		const addressWCd453W = accounts[0]
		const addressnAmvAlN = accounts[0]
		const addressbuSI3M = accounts[2]
		const uintk1sngsI = await afiControllerwE1kI9k.balanceOf.call(addressDUCxrs, {from: accounts[1]});
		const addressapxKnTs = await afiControllerwE1kI9k.inCaseStrategyTokenGetStuck.call(addressWCd453W, addressFqjrb91, {from: accounts[2]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressbuSI3M, addressnAmvAlN, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.balanceOf.call(addressDUCxrs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbskInx0 = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressbskInx0, {from: accounts[0]});
		const uintGuiBASy = BigInt("1917")
		const addressvA6BeX3 = accounts[2]
		const addressRzDlr09 = accounts[1]
		const addressNfm0xBe = accounts[0]
		const addressdKn0KOZ = accounts[4]
		const addressEUHgTdM = accounts[4]
		const addressdr2f5Vt = await afiControllerwE1kI9k.inCaseTokensGetStuck.call(addressvA6BeX3, uintGuiBASy, {from: accounts[5]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressNfm0xBe, addressRzDlr09, {from: accounts[2]});
		const addressI9sPmS = await afiControllerwE1kI9k.revokeStrategy.call(addressEUHgTdM, addressdKn0KOZ, {from: accounts[4]});

		await expect(afiControllerwE1kI9k.inCaseTokensGetStuck.call(addressvA6BeX3, uintGuiBASy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressotiIa8 = accounts[0]
		const afiControllerVWyIXD = await afiController.new(addressotiIa8, {from: accounts[2]});
		const addressZsB7cg = accounts[0]
		const addressaBu1Es1 = accounts[2]
		const uintd1dzUGJ = BigInt("1550")
		const address3qScAl = accounts[3]
		const addressqLkcoO = await afiControllerVWyIXD.setRewards.call(addressZsB7cg, {from: accounts[4]});
		const addressQJoGnbO = await afiControllerVWyIXD.setOneSplit.call(addressaBu1Es1, {from: accounts[4]});
		const addresstbcr7OY = await afiControllerVWyIXD.inCaseTokensGetStuck.call(address3qScAl, uintd1dzUGJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerVWyIXD.setRewards.call(addressZsB7cg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address3AZyad = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(address3AZyad, {from: accounts[0]});
		const addressNDojNyH = accounts[5]
		const addressGuC1Aup = accounts[1]
		const addressLeMnszu = accounts[4]
		const uintqC0IPEX = BigInt("1583")
		const addressIPKG63z = accounts[0]
		const addressN4ZVHZE = accounts[3]
		const addressbYDEEaf = accounts[1]
		const addressnVpdYbF = accounts[1]
		const addressTG5Sob = await afiControllerwE1kI9k.setConverter.call(addressLeMnszu, addressGuC1Aup, addressNDojNyH, {from: accounts[5]});
		const uintalApFxd = await afiControllerwE1kI9k.getExpectedReturn.call(addressN4ZVHZE, addressIPKG63z, uintqC0IPEX, {from: accounts[0]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressnVpdYbF, addressbYDEEaf, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.setConverter.call(addressLeMnszu, addressGuC1Aup, addressNDojNyH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDH6QQDV = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressDH6QQDV, {from: accounts[0]});
		const uintKiHdQBK = BigInt("1240")
		const addressM97XwR7 = "0x0000000000000000000000000000000000000001"
		const addressrvFwFIA = accounts[3]
		const addressxfb9Hor = accounts[2]
		const addressxzNtJb0 = accounts[0]
		const addressyYeoNej = accounts[1]
		const addressf5resJ = await afiControllerwE1kI9k.inCaseTokensGetStuck.call(addressM97XwR7, uintKiHdQBK, {from: accounts[0]});
		const address0Q6eLh = await afiControllerwE1kI9k.revokeStrategy.call(addressxfb9Hor, addressrvFwFIA, {from: accounts[4]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressyYeoNej, addressxzNtJb0, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.inCaseTokensGetStuck.call(addressM97XwR7, uintKiHdQBK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIqyLdK2 = accounts[0]
		const afiControllerUMApwxc = await afiController.new(addressIqyLdK2, {from: "0x0000000000000000000000000000000000000001"});
		const uinteBuEfq0 = BigInt("254")
		const addressGagDzA1 = accounts[1]
		const addressHDvknBc = accounts[3]
		const uintQVm9BaY = BigInt("323")
		const addressR8PEF8o = accounts[0]
		const addressOcbwPHq = accounts[1]
		const addressNxvZAJs = accounts[2]
		const addressuXyBYeS = accounts[2]
		const addressuzVeVZg = accounts[5]
		const addressf5dTx9O = accounts[2]
		const addressGE4vA3Z = accounts[3]
		const uintbKj6R0u = BigInt("1385")
		const addressH14nSgh = accounts[4]
		const address7COmMz = await afiControllerUMApwxc.withdraw.call(addressGagDzA1, uinteBuEfq0, {from: accounts[2]});
		const addressT5B6YcF = await afiControllerUMApwxc.withdrawAll.call(addressHDvknBc, {from: accounts[0]});
		const address7X6JEA = await afiControllerUMApwxc.yearn.call(addressOcbwPHq, addressR8PEF8o, uintQVm9BaY, {from: accounts[3]});
		const addressdj8Lvm2 = await afiControllerUMApwxc.setConverter.call(addressuzVeVZg, addressuXyBYeS, addressNxvZAJs, {from: accounts[3]});
		const addressMlDd1cK = await afiControllerUMApwxc.inCaseStrategyTokenGetStuck.call(addressGE4vA3Z, addressf5dTx9O, {from: accounts[3]});
		const addressAp1RA5v = await afiControllerUMApwxc.inCaseTokensGetStuck.call(addressH14nSgh, uintbKj6R0u, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressnQM7vbo = accounts[0]
		const afiControllerwE1kI9k = await afiController.new(addressnQM7vbo, {from: accounts[0]});
		const addressiLnwZ0d = accounts[2]
		const addressDPXGpZ = accounts[1]
		const addressDwkyPRZ = accounts[1]
		const addressuSbBzpG = accounts[1]
		const addressbtmb1nS = await afiControllerwE1kI9k.setStrategy.call(addressDPXGpZ, addressiLnwZ0d, {from: accounts[0]});
		const addresscl73g3Z = await afiControllerwE1kI9k.revokeStrategy.call(addressuSbBzpG, addressDwkyPRZ, {from: accounts[2]});

		await expect(afiControllerwE1kI9k.setStrategy.call(addressDPXGpZ, addressiLnwZ0d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})