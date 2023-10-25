const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressmdYCjmd = accounts[0]
		const addressrQD9LXA = accounts[0]
		const uintVOrBLTB = BigInt("835")
		const uintsxGWCXm = BigInt("753")
		const NasiLiquidityPoolFactoryPKgL3Iu = await NasiLiquidityPoolFactory.new(addressmdYCjmd, addressrQD9LXA, uintVOrBLTB, uintsxGWCXm, {from: accounts[1]});
		const uintDolQU7W = BigInt("680")
		const uintsnCGOED = BigInt("589")
		await NasiLiquidityPoolFactoryPKgL3Iu.onlyPauser.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryPKgL3Iu.unpause.call({from: accounts[3]});
		const stringgIx9aVn = await NasiLiquidityPoolFactoryPKgL3Iu.name.call({from: accounts[2]});
		const uint2560qsO1f = await NasiLiquidityPoolFactoryPKgL3Iu.deposit.call(uintsnCGOED, uintDolQU7W, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryPKgL3Iu.onlyPauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string5wtDb6 = "Du5ne8Yjafl3hlwzjk"
		const stringd8nZxBg = "ISLW9o62ULAQeYubCBUgz1jTqR9zCHwUNaT3Wy72zqgEISv2"
		const uintKiCz3Kr = BigInt("213")
		const NasiLiquidityPoolFactorys8oawx4 = await NasiLiquidityPoolFactory.new(string5wtDb6, stringd8nZxBg, uintKiCz3Kr, {from: accounts[5]});
		const boolfGpZ9A7 = false
		const addressOJtuk09 = accounts[4]
		const uintYs33Otu = BigInt("184")
		const uintySGZBfW = BigInt("1948")
		const addressqSiFHeU = accounts[2]
		const addressgtcnPtI = accounts[5]
		const addressIDMaknF = accounts[1]
		const uintMggcirS = BigInt("187")
		const uint256FRQtRxh = await NasiLiquidityPoolFactorys8oawx4.addLpToken.call(uintYs33Otu, addressOJtuk09, boolfGpZ9A7, {from: accounts[4]});
		const boolQPtTC20 = await NasiLiquidityPoolFactorys8oawx4.transferFrom.call(addressgtcnPtI, addressqSiFHeU, uintySGZBfW, {from: accounts[2]});
		const uint256evV6T8u = await NasiLiquidityPoolFactorys8oawx4.getCurrentVotes.call(addressIDMaknF, {from: accounts[3]});
		const uint256FqhglMI = await NasiLiquidityPoolFactorys8oawx4.migrate.call(uintMggcirS, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRx1zzTx = "rD7WJODwpEbEOHlNMPX4ox7eIj"
		const stringAZMmXgx = "ND"
		const uintCCrWV93 = BigInt("198")
		const NasiLiquidityPoolFactoryR6XbCQa = await NasiLiquidityPoolFactory.new(stringRx1zzTx, stringAZMmXgx, uintCCrWV93, {from: accounts[1]});
		await NasiLiquidityPoolFactoryR6XbCQa.whenPaused.call({from: accounts[2]});
		const stringOT6JPb5 = await NasiLiquidityPoolFactoryR6XbCQa.symbol.call({from: accounts[1]});
		const uint256kPpX1DA = await NasiLiquidityPoolFactoryR6XbCQa.totalSupply.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringzVfCAN = "XY8x5lUjk4ep5nAqlOvw8YThLRa7"
		const stringH2a1vDz = "qnfcQG79G2WLFHjyf1A2M0szjb1isKiN5eFNmLN72cYFCErSC6O1ij7H7id2IO8oROzCpyGL7hqZ"
		const uintTljZUhi = BigInt("218")
		const NasiLiquidityPoolFactoryVextatr = await NasiLiquidityPoolFactory.new(stringzVfCAN, stringH2a1vDz, uintTljZUhi, {from: accounts[4]});
		const uintastsqIm = BigInt("955")
		const addressWg6fQL = accounts[2]
		const addresssVHoyo = accounts[3]
		const bool0Dwhl7 = await NasiLiquidityPoolFactoryVextatr.approve.call(addressWg6fQL, uintastsqIm, {from: accounts[2]});
		const addressrmjYeii = await NasiLiquidityPoolFactoryVextatr.setMigrator.call(addresssVHoyo, {from: accounts[0]});
		await NasiLiquidityPoolFactoryVextatr.whenPaused.call({from: accounts[2]});
		const boolaQOXmJp = await NasiLiquidityPoolFactoryVextatr.isOwner.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressn21qx2a = accounts[3]
		const addressrZFLJnL = accounts[0]
		const uintm4NSJGk = BigInt("1352")
		const uintYQd6Gs = BigInt("824")
		const NasiLiquidityPoolFactorypzyYb5A = await NasiLiquidityPoolFactory.new(addressn21qx2a, addressrZFLJnL, uintm4NSJGk, uintYQd6Gs, {from: accounts[3]});
		const addressJytwMs6 = "0x0000000000000000000000000000000000000001"
		const boolpUlXTqN = false
		const address1hQsgM = accounts[3]
		const uinti0f9rWU = BigInt("1489")
		const addressCYFQi5D = await NasiLiquidityPoolFactorypzyYb5A.transferOwnership.call(addressJytwMs6, {from: accounts[3]});
		const uint256JU08yD = await NasiLiquidityPoolFactorypzyYb5A.addLpToken.call(uinti0f9rWU, address1hQsgM, boolpUlXTqN, {from: accounts[4]});
		await NasiLiquidityPoolFactorypzyYb5A.onlyPauser.call({from: accounts[2]});
		const stringS8QYP1w = await NasiLiquidityPoolFactorypzyYb5A.name.call({from: accounts[3]});

		await expect(NasiLiquidityPoolFactorypzyYb5A.addLpToken.call(uinti0f9rWU, address1hQsgM, boolpUlXTqN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressUjy9frr = accounts[5]
		const addressMfuyloQ = accounts[3]
		const uintT6RaXZr = BigInt("1475")
		const uintVWlskpw = BigInt("1607")
		const NasiLiquidityPoolFactoryEgHjiB2 = await NasiLiquidityPoolFactory.new(addressUjy9frr, addressMfuyloQ, uintT6RaXZr, uintVWlskpw, {from: accounts[1]});
		const uintlizCPC7 = BigInt("923")
		const addressiALC9X5 = accounts[4]
		const addressm1aie3 = accounts[3]
		const uint256gseXGni = await NasiLiquidityPoolFactoryEgHjiB2.enterStaking.call(uintlizCPC7, {from: accounts[1]});
		const uint256iaMA9zt = await NasiLiquidityPoolFactoryEgHjiB2.balanceOf.call(addressiALC9X5, {from: accounts[1]});
		const addresswd15rCO = await NasiLiquidityPoolFactoryEgHjiB2.transferOwnership.call(addressm1aie3, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryEgHjiB2.enterStaking.call(uintlizCPC7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressP2BQemY = accounts[5]
		const addressuIZSCPV = accounts[3]
		const uintfUWb3b9 = BigInt("1475")
		const uintG7XWvPk = BigInt("1607")
		const NasiLiquidityPoolFactoryEgHjiB2 = await NasiLiquidityPoolFactory.new(addressP2BQemY, addressuIZSCPV, uintfUWb3b9, uintG7XWvPk, {from: accounts[1]});
		const uints5bMuY7 = BigInt("938")
		const uintdbqS5Hw = BigInt("923")
		const addressFRre6wp = accounts[5]
		const addressTnuCkaJ = accounts[3]
		const uint256sNDjCYv = await NasiLiquidityPoolFactoryEgHjiB2.emergencyWithdraw.call(uints5bMuY7, {from: accounts[3]});
		await NasiLiquidityPoolFactoryEgHjiB2.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gseXGni = await NasiLiquidityPoolFactoryEgHjiB2.enterStaking.call(uintdbqS5Hw, {from: accounts[1]});
		const uint256iaMA9zt = await NasiLiquidityPoolFactoryEgHjiB2.balanceOf.call(addressFRre6wp, {from: accounts[1]});
		const addresswd15rCO = await NasiLiquidityPoolFactoryEgHjiB2.transferOwnership.call(addressTnuCkaJ, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryEgHjiB2.emergencyWithdraw.call(uints5bMuY7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringq7czn7a = "u4PXeMhyjwHVzn7SPSSyEMzm6YlA6jerHUN2ByDTjn6kldzeQsbBW1PP3YgroZvfjl75S82IviKDRuthED5bC4Et1rVK"
		const stringEAU1fUD = "sjwqUwnzpJc4gliAT"
		const uintQBMJzSf = BigInt("176")
		const NasiLiquidityPoolFactory7rhwF5 = await NasiLiquidityPoolFactory.new(stringq7czn7a, stringEAU1fUD, uintQBMJzSf, {from: accounts[3]});
		const uintKJhOGVU = BigInt("1542")
		const uintbAWu1VO = BigInt("1758")
		const addressnJEydY6 = "0x0000000000000000000000000000000000000001"
		const uintq33O5cA = BigInt("414")
		const addresszp4UMNi = "0x0000000000000000000000000000000000000001"
		const boolwcf3OiZ = false
		const addressi5x4lH = accounts[1]
		const uintnWgbQ4M = BigInt("8")
		const uint256NJurCCZ = await NasiLiquidityPoolFactory7rhwF5.enterStaking.call(uintKJhOGVU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SuJH511 = await NasiLiquidityPoolFactory7rhwF5.getPriorVotes.call(addressnJEydY6, uintbAWu1VO, {from: accounts[3]});
		const boolxF6JCsH = await NasiLiquidityPoolFactory7rhwF5.mint.call(addresszp4UMNi, uintq33O5cA, {from: accounts[3]});
		const uint256AYGUfj9 = await NasiLiquidityPoolFactory7rhwF5.addLpToken.call(uintnWgbQ4M, addressi5x4lH, boolwcf3OiZ, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressh1KtNoD = accounts[5]
		const addressCmgXVee = accounts[1]
		const uintwjxUBd8 = BigInt("657")
		const uinttx64QBv = BigInt("32")
		const NasiLiquidityPoolFactorycmskIu1 = await NasiLiquidityPoolFactory.new(addressh1KtNoD, addressCmgXVee, uintwjxUBd8, uinttx64QBv, {from: accounts[3]});
		const address90e9AB = accounts[3]
		const uintZzu1BV2 = BigInt("511")
		const addressHp7nsHK = accounts[5]
		const uintgcfSa4f = BigInt("880")
		const addressddQsQGS = accounts[2]
		const uint256qDBmejY = await NasiLiquidityPoolFactorycmskIu1.pendingNasi.call(uintZzu1BV2, address90e9AB, {from: accounts[2]});
		const addressrLCenUe = await NasiLiquidityPoolFactorycmskIu1.delegates.call(addressHp7nsHK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DtNJrA = await NasiLiquidityPoolFactorycmskIu1.getPriorVotes.call(addressddQsQGS, uintgcfSa4f, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactorycmskIu1.pendingNasi.call(uintZzu1BV2, address90e9AB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressIXuVwyh = accounts[5]
		const addressQmTgONQ = accounts[1]
		const uintCbaBb0h = BigInt("657")
		const uintqLhuCLf = BigInt("32")
		const NasiLiquidityPoolFactorycmskIu1 = await NasiLiquidityPoolFactory.new(addressIXuVwyh, addressQmTgONQ, uintCbaBb0h, uintqLhuCLf, {from: accounts[3]});
		const addressYe2qZcR = accounts[3]
		const uintjENj4RK = BigInt("511")
		const addressodWaXYA = accounts[5]
		const uint4cNwtj = BigInt("880")
		const addresst2KX4GM = accounts[2]
		await NasiLiquidityPoolFactorycmskIu1.renounceOwnership.call({from: accounts[3]});
		const uint256qDBmejY = await NasiLiquidityPoolFactorycmskIu1.pendingNasi.call(uintjENj4RK, addressYe2qZcR, {from: accounts[2]});
		const addressrLCenUe = await NasiLiquidityPoolFactorycmskIu1.delegates.call(addressodWaXYA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DtNJrA = await NasiLiquidityPoolFactorycmskIu1.getPriorVotes.call(addresst2KX4GM, uint4cNwtj, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactorycmskIu1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringzFkHzP5 = "HBm7BU5vswqxSNuJQ8U4rQ47MrSM"
		const stringvMl7gKY = "QRbwUpi"
		const uintKu7RubU = BigInt("55")
		const NasiLiquidityPoolFactoryNDZDLjD = await NasiLiquidityPoolFactory.new(stringzFkHzP5, stringvMl7gKY, uintKu7RubU, {from: accounts[0]});
		const uintMtlESfP = BigInt("1359")
		const addressFkguwsj = accounts[1]
		const addressf4fEu2j = accounts[2]
		const addressXwQ2M7H = accounts[5]
		await NasiLiquidityPoolFactoryNDZDLjD.renounceMinter.call({from: accounts[4]});
		const boollL76UTh = await NasiLiquidityPoolFactoryNDZDLjD.transfer.call(addressFkguwsj, uintMtlESfP, {from: accounts[3]});
		await NasiLiquidityPoolFactoryNDZDLjD.whenPaused.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryNDZDLjD.whenPaused.call({from: accounts[0]});
		const boolLGgyDO1 = await NasiLiquidityPoolFactoryNDZDLjD.isPauser.call(addressf4fEu2j, {from: accounts[2]});
		const addresskeXfooR = await NasiLiquidityPoolFactoryNDZDLjD.setMigrator.call(addressXwQ2M7H, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaicNZq2 = "xngFfUw6U"
		const stringFesGrYo = "bXnDqBgpj2Eb0du6kvHw6hsqSNoatmY32tnhurtW5hJqwW9HE2z3JofLbOEBqxpjM8"
		const uintsf9t2Lv = BigInt("182")
		const NasiLiquidityPoolFactoryj0cmUgD = await NasiLiquidityPoolFactory.new(stringaicNZq2, stringFesGrYo, uintsf9t2Lv, {from: "0x0000000000000000000000000000000000000001"});
		const addressc4aBGWz = accounts[2]
		const addresso3G28vs = accounts[3]
		const addressahmKaju = accounts[1]
		const uintv0RoZ2 = BigInt("1946")
		const uintrrsXTxb = BigInt("1958")
		const addressTFcWLZN = accounts[0]
		const uintBOOWTKZ = BigInt("1497")
		const uintBfalRYg = BigInt("1453")
		const addressETb6JLx = await NasiLiquidityPoolFactoryj0cmUgD.setMigrator.call(addressc4aBGWz, {from: accounts[3]});
		const addressrcS77BY = await NasiLiquidityPoolFactoryj0cmUgD.addPauser.call(addresso3G28vs, {from: accounts[3]});
		const uint256lsEemyG = await NasiLiquidityPoolFactoryj0cmUgD.pendingNasi.call(uintv0RoZ2, addressahmKaju, {from: accounts[3]});
		const boolYXfpK3C = await NasiLiquidityPoolFactoryj0cmUgD.transfer.call(addressTFcWLZN, uintrrsXTxb, {from: accounts[4]});
		const uint256mvKbNZF = await NasiLiquidityPoolFactoryj0cmUgD.deposit.call(uintBfalRYg, uintBOOWTKZ, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpoAgKM7 = "ct6EzzTmWN1eJN0vWnIgEu2KkuvM8mWBgToQm4KhebrKAQABFOvJXXj4q6PQQ"
		const stringsWgKZON = "B6njmgRpb1vCy5I9mV6m3ADBcl2dTc9fAM4lcaKPAD7g8p5ISqB8ivBfYXEBDMyovGElip3wcm9DJbtIWDrVN"
		const uintiB5PDG = BigInt("123")
		const NasiLiquidityPoolFactoryW9Tjzzw = await NasiLiquidityPoolFactory.new(stringpoAgKM7, stringsWgKZON, uintiB5PDG, {from: accounts[1]});
		const addressE0uqV5 = accounts[0]
		const addressVSVN1ZA = accounts[4]
		const uintQLkCCMK = BigInt("1704")
		const addressv0YVHP = accounts[3]
		const addressp8HRUTr = await NasiLiquidityPoolFactoryW9Tjzzw.delegates.call(addressE0uqV5, {from: accounts[4]});
		const boolCrbyPrj = await NasiLiquidityPoolFactoryW9Tjzzw.isMinter.call(addressVSVN1ZA, {from: accounts[4]});
		await NasiLiquidityPoolFactoryW9Tjzzw.onlyPauser.call({from: accounts[3]});
		const boolXisAVh3 = await NasiLiquidityPoolFactoryW9Tjzzw.transfer.call(addressv0YVHP, uintQLkCCMK, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqQA4msb = "hkN"
		const stringSRFwVic = "MZ1"
		const uintW6stKyS = BigInt("172")
		const NasiLiquidityPoolFactoryMTPP8uk = await NasiLiquidityPoolFactory.new(stringqQA4msb, stringSRFwVic, uintW6stKyS, {from: accounts[2]});
		const stringsLVsGFK = await NasiLiquidityPoolFactoryMTPP8uk.symbol.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryMTPP8uk.whenNotPaused.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryMTPP8uk.unpause.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressaFKyeYU = "0x0000000000000000000000000000000000000001"
		const addressS7SpOMH = accounts[1]
		const uintRrzAIZl = BigInt("407")
		const uinteuZn1Zi = BigInt("839")
		const NasiLiquidityPoolFactoryHJIZbmM = await NasiLiquidityPoolFactory.new(addressaFKyeYU, addressS7SpOMH, uintRrzAIZl, uinteuZn1Zi, {from: "0x0000000000000000000000000000000000000001"});
		const uintyVeUBxq = BigInt("1422")
		const uintt3Q945d = BigInt("0")
		const uintfXO8Fvj = BigInt("1354")
		const addresst3VBE6t = accounts[2]
		const addressEI5jtju = accounts[1]
		const addressMjmtVia = accounts[4]
		const uintnwWTuf2 = BigInt("869")
		const addressmsMxBJL = accounts[4]
		const uintIxNU0Lw = BigInt("1294")
		const uint256UGfjqcZ = await NasiLiquidityPoolFactoryHJIZbmM.withdraw.call(uintt3Q945d, uintyVeUBxq, {from: accounts[5]});
		await NasiLiquidityPoolFactoryHJIZbmM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolqxfjurl = await NasiLiquidityPoolFactoryHJIZbmM.transferFrom.call(addressEI5jtju, addresst3VBE6t, uintfXO8Fvj, {from: accounts[1]});
		const addressxPOFFtO = await NasiLiquidityPoolFactoryHJIZbmM.transferOwnership.call(addressMjmtVia, {from: accounts[1]});
		const boolKtNA9Vi = await NasiLiquidityPoolFactoryHJIZbmM.increaseAllowance.call(addressmsMxBJL, uintnwWTuf2, {from: accounts[0]});
		const uint256Kba8lQW = await NasiLiquidityPoolFactoryHJIZbmM.emergencyWithdraw.call(uintIxNU0Lw, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpZhweEl = "6iEdvw3GTU7PeNJZQaKU2k4qh9G1NWjzgly9tRPhqJUze6BJ338dnmxi6GrjJ3jRvHtkAxdfqxLBU3nzHXGpL0JNszcRocc0KSE"
		const stringsJlQiiu = "MApFsl8dn9hVr7UyKL"
		const uintjET8xqC = BigInt("248")
		const NasiLiquidityPoolFactoryAhkyeM = await NasiLiquidityPoolFactory.new(stringpZhweEl, stringsJlQiiu, uintjET8xqC, {from: accounts[4]});
		const uintsGePzr = BigInt("184")
		const addresssaEQPi8 = accounts[3]
		const uintopY8fx1 = BigInt("102")
		const addressWnCce37 = accounts[3]
		await NasiLiquidityPoolFactoryAhkyeM.unpause.call({from: accounts[1]});
		const boolGErg0KP = await NasiLiquidityPoolFactoryAhkyeM.transfer.call(addresssaEQPi8, uintsGePzr, {from: accounts[1]});
		const boolrfmdGz = await NasiLiquidityPoolFactoryAhkyeM.mint.call(addressWnCce37, uintopY8fx1, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDnDmImq = "vltik4AriuW3qf2iinqI26yv7kma7g4GIYSgcKW83YySNcXLb4iqoBeXwpBafX3igLEGcXPQBj5dbGBm3"
		const stringRWJ8Ni = "gFnFKaPOQwdMVSemOgc92Q1B8NJCg8Gm2H7F9ASZgg7wTHu"
		const uintaPiDuN0 = BigInt("149")
		const NasiLiquidityPoolFactoryvg7VCmw = await NasiLiquidityPoolFactory.new(stringDnDmImq, stringRWJ8Ni, uintaPiDuN0, {from: accounts[1]});
		const addressAUxhYdt = accounts[2]
		const uintORwpt1 = BigInt("11")
		const addressC2Ui8v1 = accounts[1]
		const uintAFQyQKE = BigInt("1198")
		const addressBwUiT2E = accounts[0]
		const uintcNmcV9X = BigInt("1988")
		const addresslNOBJoO = accounts[1]
		const addressq3TjXAw = "0x0000000000000000000000000000000000000001"
		const uint2567Uo29F = await NasiLiquidityPoolFactoryvg7VCmw.balanceOf.call(addressAUxhYdt, {from: accounts[3]});
		const boolVlKcAeN = await NasiLiquidityPoolFactoryvg7VCmw.increaseAllowance.call(addressC2Ui8v1, uintORwpt1, {from: accounts[2]});
		const uint8cbDc3se = await NasiLiquidityPoolFactoryvg7VCmw.decimals.call({from: accounts[0]});
		const uint256mriiQC5 = await NasiLiquidityPoolFactoryvg7VCmw.getPriorVotes.call(addressBwUiT2E, uintAFQyQKE, {from: accounts[1]});
		const booloE3cBtu = await NasiLiquidityPoolFactoryvg7VCmw.transferFrom.call(addressq3TjXAw, addresslNOBJoO, uintcNmcV9X, {from: accounts[4]});
		await NasiLiquidityPoolFactoryvg7VCmw.onlyPauser.call({from: accounts[0]});
	});
})