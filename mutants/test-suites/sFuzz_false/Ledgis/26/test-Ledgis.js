const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisQrF22M = await Ledgis.new({from: accounts[0]});
		const uintyOnJv1 = BigInt("283")
		const addressatHsXiA = accounts[2]
		const addressQsurNnD = accounts[4]
		const addresshimmSQ = accounts[3]
		const addresslfg3MtP = accounts[3]
		const addressH4MGket = accounts[0]
		const uintZnoaD6 = BigInt("557")
		const uintynQAV6o = BigInt("1772")
		const addressxEhomX0 = accounts[0]
		const boolnIZk4w7 = await LedgisQrF22M.increaseAllowance.call(addressatHsXiA, uintyOnJv1, {from: accounts[0]});
//		const addresscKZPAK1 = await LedgisQrF22M.transferOwnership.call(addressQsurNnD, {from: accounts[3]});
//		const uint256QNhV0Wj = await LedgisQrF22M.balanceOf.call(addresshimmSQ, {from: accounts[5]});
//		const uint256mnTWict = await LedgisQrF22M.allowance.call(addressH4MGket, addresslfg3MtP, {from: accounts[1]});
//		const addressQVfDsYx = await LedgisQrF22M.lockAfter.call(addressxEhomX0, uintynQAV6o, uintZnoaD6, {from: accounts[2]});

		assert.equal(boolnIZk4w7, true)
		await expect(LedgisQrF22M.transferOwnership.call(addressQsurNnD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistqDFGFM = await Ledgis.new({from: accounts[4]});
		const uintOa5XpAI = BigInt("2")
		const addressaiqlfaf = accounts[1]
		const uintr4O7n1C = BigInt("1035")
		const address6n5f84 = accounts[3]
		const boolNuqhwNM = await LedgistqDFGFM.mint.call(addressaiqlfaf, uintOa5XpAI, {from: accounts[4]});
//		const addressHbykie = await LedgistqDFGFM.unlock.call(address6n5f84, uintr4O7n1C, {from: accounts[2]});

		assert.equal(boolNuqhwNM, true)
		await expect(LedgistqDFGFM.unlock.call(address6n5f84, uintr4O7n1C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscQy7yj2 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uinti9dtREj = BigInt("1860")
		const addresspmYPcQR = accounts[0]
		const addressFzJlBU1 = accounts[3]
		const uintojCLOKa = BigInt("683")
		const addresshrT9vUj = accounts[0]
		const uintNuFlIK = BigInt("483")
		const addressw0Nxsyx = "0x0000000000000000000000000000000000000001"
		const boolC1ZZsXO = await LedgiscQy7yj2.mint.call(addresspmYPcQR, uinti9dtREj, {from: accounts[1]});
		const uint256jG46p47 = await LedgiscQy7yj2.balanceOf.call(addressFzJlBU1, {from: accounts[3]});
		const booliYgflTk = await LedgiscQy7yj2.transfer.call(addresshrT9vUj, uintojCLOKa, {from: accounts[1]});
		const boolwaVomuj = await LedgiscQy7yj2.transfer.call(addressw0Nxsyx, uintNuFlIK, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisSe5tKNl = await Ledgis.new({from: accounts[1]});
		const addressoAzGe6i = accounts[4]
		const addressLG0ZUR8 = accounts[3]
		const addressIRqn6qK = accounts[1]
		const uintqiHdMQ = BigInt("265")
		const addressgHH346R = accounts[1]
		const addresszGWwwE1 = accounts[3]
		const addressbwlRww2 = accounts[1]
		const uintsLPOIfO = BigInt("237")
		const addressyaBXlWp = accounts[1]
		const boolgckzbTG = await LedgisSe5tKNl.isFrozen.call(addressoAzGe6i, {from: accounts[4]});
		const uint256CQ7A6U = await LedgisSe5tKNl.allowance.call(addressIRqn6qK, addressLG0ZUR8, {from: accounts[0]});
//		const boolBqFDrqT = await LedgisSe5tKNl.transferFrom.call(addresszGWwwE1, addressgHH346R, uintqiHdMQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTDmchkC = await LedgisSe5tKNl.isFrozen.call(addressbwlRww2, {from: accounts[4]});
//		const boollzO5IL = await LedgisSe5tKNl.decreaseAllowance.call(addressyaBXlWp, uintsLPOIfO, {from: accounts[1]});

		assert.equal(boolgckzbTG, false)
		assert.equal(uint256CQ7A6U, BigInt("0"))
		await expect(LedgisSe5tKNl.transferFrom.call(addresszGWwwE1, addressgHH346R, uintqiHdMQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQHVsVwz = await Ledgis.new({from: accounts[3]});
		const addressJfLjrBm = accounts[0]
		const addressgOMlS1V = accounts[3]
		const uintNTbhhez = BigInt("1449")
		const addresseNixHa8 = accounts[4]
		const uint256jimEdB4 = await LedgisQHVsVwz.balanceOf.call(addressJfLjrBm, {from: accounts[1]});
//		const address1UAYFN = await LedgisQHVsVwz.unfreeze.call(addressgOMlS1V, {from: accounts[0]});
//		const boolWWEKRZl = await LedgisQHVsVwz.transfer.call(addresseNixHa8, uintNTbhhez, {from: accounts[0]});

		assert.equal(uint256jimEdB4, BigInt("0"))
		await expect(LedgisQHVsVwz.unfreeze.call(addressgOMlS1V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistZS8IiI = await Ledgis.new({from: accounts[5]});
		const uintsyM0yw = BigInt("93")
		const addressSSvVMqT = accounts[4]
		const uintnDXBRZu = BigInt("1834")
		const addressCss4qKF = accounts[0]
		const booloondAnj = await LedgistZS8IiI.approve.call(addressSSvVMqT, uintsyM0yw, {from: accounts[5]});
//		const addressOM78ZMu = await LedgistZS8IiI.unlock.call(addressCss4qKF, uintnDXBRZu, {from: accounts[5]});

		assert.equal(booloondAnj, true)
		await expect(LedgistZS8IiI.unlock.call(addressCss4qKF, uintnDXBRZu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistqDFGFM = await Ledgis.new({from: accounts[4]});
		const addressEVkFTME = accounts[1]
		const uintD4QXQ5q = BigInt("1902")
		const addressOPrLJy5 = accounts[2]
		const uintnt8khq = BigInt("1035")
		const addressNOgizeJ = accounts[4]
		const addressOmUWBlj = await LedgistqDFGFM.unfreeze.call(addressEVkFTME, {from: accounts[4]});
//		const boolspAtfja = await LedgistqDFGFM.transfer.call(addressOPrLJy5, uintD4QXQ5q, {from: accounts[3]});
//		await LedgistqDFGFM.whenNotFrozen.call({from: accounts[4]});
//		const addressHbykie = await LedgistqDFGFM.unlock.call(addressNOgizeJ, uintnt8khq, {from: accounts[2]});

		await expect(LedgistqDFGFM.transfer.call(addressOPrLJy5, uintD4QXQ5q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistZS8IiI = await Ledgis.new({from: accounts[5]});
		const uintbmkMyJb = BigInt("93")
		const addressHppe4d = accounts[5]
		const uintbvQs53b = BigInt("1834")
		const addresssy5GKV2 = accounts[0]
		const booloondAnj = await LedgistZS8IiI.approve.call(addressHppe4d, uintbmkMyJb, {from: accounts[5]});
		const uint256FJIZzZd = await LedgistZS8IiI.totalSupply.call({from: accounts[0]});
//		const addressOM78ZMu = await LedgistZS8IiI.unlock.call(addresssy5GKV2, uintbvQs53b, {from: accounts[5]});

		assert.equal(booloondAnj, true)
		assert.equal(uint256FJIZzZd, BigInt("10000000000000"))
		await expect(LedgistZS8IiI.unlock.call(addresssy5GKV2, uintbvQs53b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisMk2o8dm = await Ledgis.new({from: accounts[2]});
		const addressyS6oMHJ = accounts[2]
		const address7l4UKe = accounts[4]
		const addressHn2acJ = accounts[3]
		const uintZHXYDuL = BigInt("1203")
		const addressOnGg269 = accounts[4]
		const uintphpdkbg = BigInt("1347")
		const uint69Nt8H = BigInt("10")
		const addresso2kDfGL = accounts[1]
		const uint256JRgZkRH = await LedgisMk2o8dm.balanceOf.call(addressyS6oMHJ, {from: accounts[5]});
//		await LedgisMk2o8dm.whenNotPaused.call({from: accounts[3]});
//		const booloTVkw6o = await LedgisMk2o8dm.isFrozen.call(address7l4UKe, {from: accounts[0]});
//		const uint256LVHYtp1 = await LedgisMk2o8dm.lockCount.call(addressHn2acJ, {from: accounts[2]});
//		const boolZlPRsm6 = await LedgisMk2o8dm.transfer.call(addressOnGg269, uintZHXYDuL, {from: accounts[5]});
//		const boolKxd25eo = await LedgisMk2o8dm.transferWithLockAfter.call(addresso2kDfGL, uint69Nt8H, uintphpdkbg, {from: accounts[1]});

		assert.equal(uint256JRgZkRH, BigInt("10000000000000"))
		await expect(LedgisMk2o8dm.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisSQ95etD = await Ledgis.new({from: accounts[1]});
		const uintXeLXacN = BigInt("811")
		const addressCXAL7tU = accounts[2]
		const uintWKgm9Qf = BigInt("1675")
		const addressfrBKrEg = accounts[3]
		const addressILeSfS5 = accounts[4]
//		const boolA4qKTq3 = await LedgisSQ95etD.decreaseAllowance.call(addressCXAL7tU, uintXeLXacN, {from: accounts[1]});
//		const boolzSTSwTQ = await LedgisSQ95etD.mint.call(addressfrBKrEg, uintWKgm9Qf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ml1u8R = await LedgisSQ95etD.totalSupply.call({from: accounts[2]});
//		await LedgisSQ95etD.pause.call({from: accounts[3]});
//		const uint256W5xOnYb = await LedgisSQ95etD.lockCount.call(addressILeSfS5, {from: accounts[1]});

		await expect(LedgisSQ95etD.decreaseAllowance.call(addressCXAL7tU, uintXeLXacN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQHVsVwz = await Ledgis.new({from: accounts[3]});
		const uintpssB17 = BigInt("1095")
		const uintB4WAXiQ = BigInt("1954")
		const addressq2xSv83 = accounts[4]
		const uintzcIDAan = BigInt("1990")
		const addresszNX2HU2 = accounts[2]
		const addressOmo3AB8 = accounts[0]
		const uint256YojVxZL = await LedgisQHVsVwz.afterTime.call(uintpssB17, {from: accounts[4]});
		const boolNA1UNKr = await LedgisQHVsVwz.mint.call(addressq2xSv83, uintB4WAXiQ, {from: accounts[3]});
		const boolPdIColR = await LedgisQHVsVwz.approve.call(addresszNX2HU2, uintzcIDAan, {from: accounts[3]});
		const uint256jimEdB4 = await LedgisQHVsVwz.balanceOf.call(addressOmo3AB8, {from: accounts[1]});

		assert.equal(boolNA1UNKr, true)
		assert.equal(boolPdIColR, true)
		assert.equal(uint256YojVxZL, BigInt("1630233027"))
		assert.equal(uint256jimEdB4, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const uintaxTpYja = BigInt("1016")
		const addressDEhNfyF = accounts[0]
		const uintUu3YXzR = BigInt("414")
		const uintS3IwQZP = BigInt("1806")
		const addressGqFC3U = accounts[2]
		const uintDb35f9z = BigInt("316")
		const addresswzWTQCz = accounts[4]
		const addressE61cdRF = accounts[0]
//		await Ledgisomjcot.lockState.call(addressDEhNfyF, uintaxTpYja, {from: accounts[1]});
//		const addressnrDESLy = await Ledgisomjcot.lock.call(addressGqFC3U, uintS3IwQZP, uintUu3YXzR, {from: accounts[0]});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressE61cdRF, addresswzWTQCz, uintDb35f9z, {from: accounts[3]});

		await expect(Ledgisomjcot.lockState.call(addressDEhNfyF, uintaxTpYja, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQHVsVwz = await Ledgis.new({from: accounts[3]});
		const addressM99JVtB = accounts[0]
		const addressGJ2nD6B = accounts[1]
		const uintmHloHTT = BigInt("614")
		const uintVpRrX8r = BigInt("746")
		const addressu88i5Za = "0x0000000000000000000000000000000000000001"
		const uint256PCxZjA = await LedgisQHVsVwz.lockCount.call(addressM99JVtB, {from: accounts[5]});
		const uint256jimEdB4 = await LedgisQHVsVwz.balanceOf.call(addressGJ2nD6B, {from: accounts[1]});
//		const addressdNgGqBR = await LedgisQHVsVwz.lockAfter.call(addressu88i5Za, uintVpRrX8r, uintmHloHTT, {from: accounts[4]});

		assert.equal(uint256PCxZjA, BigInt("0"))
		assert.equal(uint256jimEdB4, BigInt("0"))
		await expect(LedgisQHVsVwz.lockAfter.call(addressu88i5Za, uintVpRrX8r, uintmHloHTT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistZS8IiI = await Ledgis.new({from: accounts[5]});
		const uintwdjUj9I = BigInt("1823")
		const addressUNGJ2Pq = accounts[1]
		const uintFcdRTiE = BigInt("962")
		const addressiTqS3mZ = accounts[4]
		const uint256P3GxNbA = await LedgistZS8IiI.currentTime.call({from: accounts[4]});
//		await LedgistZS8IiI.pause.call({from: accounts[1]});
//		const addressOM78ZMu = await LedgistZS8IiI.unlock.call(addressUNGJ2Pq, uintwdjUj9I, {from: accounts[5]});
//		const boolYR28Ip = await LedgistZS8IiI.approve.call(addressiTqS3mZ, uintFcdRTiE, {from: accounts[4]});

		assert.equal(uint256P3GxNbA, BigInt("1630231935"))
		await expect(LedgistZS8IiI.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const uintCbszsBg = BigInt("515")
		const uintztqodWr = BigInt("1077")
		const addressFc8JGye = accounts[2]
		const uintoUeYMGg = BigInt("950")
		const addressm0rafaO = accounts[2]
		const uintCqyGhaD = BigInt("304")
		const addressOnZhD2C = accounts[4]
		const addressThHlke = accounts[1]
		const uintM0osFvM = BigInt("1699")
		const addressHuUiUNu = accounts[2]
//		const addressgO2tjvC = await Ledgisomjcot.lockAfter.call(addressFc8JGye, uintztqodWr, uintCbszsBg, {from: accounts[1]});
//		const booliiLz3Yd = await Ledgisomjcot.decreaseAllowance.call(addressm0rafaO, uintoUeYMGg, {from: accounts[4]});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressThHlke, addressOnZhD2C, uintCqyGhaD, {from: accounts[3]});
//		const boolfd10xqE = await Ledgisomjcot.transfer.call(addressHuUiUNu, uintM0osFvM, {from: accounts[5]});

		await expect(Ledgisomjcot.lockAfter.call(addressFc8JGye, uintztqodWr, uintCbszsBg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQHVsVwz = await Ledgis.new({from: accounts[3]});
		const uintjVF2mB9 = BigInt("487")
		const uintHyDVai = BigInt("1900")
		const addressGWReGKD = accounts[0]
		const uintlqR7HzC = BigInt("755")
		const boolhsnCbk1 = await LedgisQHVsVwz.transferWithLockAfter.call(addressGWReGKD, uintHyDVai, uintjVF2mB9, {from: accounts[3]});
		const uint256AgKSZ2l = await LedgisQHVsVwz.afterTime.call(uintlqR7HzC, {from: accounts[1]});

		assert.equal(boolhsnCbk1, true)
		assert.equal(uint256AgKSZ2l, BigInt("1630232685"))
	});

	it('test for Ledgis', async () => {
		const LedgisQHVsVwz = await Ledgis.new({from: accounts[3]});
		const addressVt4nZL8 = accounts[1]
		const uintVXogRxi = BigInt("148")
		const uintWBb4Qun = BigInt("1030")
		const addressPPaa3Yj = accounts[5]
		const uintkelOazA = BigInt("37")
		const addressrtGVGOG = accounts[1]
		const uint256jimEdB4 = await LedgisQHVsVwz.balanceOf.call(addressVt4nZL8, {from: accounts[1]});
//		const addressxlM4PT3 = await LedgisQHVsVwz.lock.call(addressPPaa3Yj, uintWBb4Qun, uintVXogRxi, {from: accounts[3]});
//		const boolSVwLxw = await LedgisQHVsVwz.increaseAllowance.call(addressrtGVGOG, uintkelOazA, {from: accounts[1]});

		assert.equal(uint256jimEdB4, BigInt("0"))
		await expect(LedgisQHVsVwz.lock.call(addressPPaa3Yj, uintWBb4Qun, uintVXogRxi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const uintsE3FAWe = BigInt("304")
		const addressx7qgdo7 = accounts[5]
		const addressajtQbS9 = accounts[0]
//		await Ledgisomjcot.renounceOwnership.call({from: accounts[1]});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressajtQbS9, addressx7qgdo7, uintsE3FAWe, {from: accounts[3]});

		await expect(Ledgisomjcot.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQHVsVwz = await Ledgis.new({from: accounts[3]});
		const uintc3ZrVG7 = BigInt("1916")
		const uintHPHws6w = BigInt("1667")
		const addressUAvZdns = "0x0000000000000000000000000000000000000001"
		const addressa11rsws = accounts[1]
//		await LedgisQHVsVwz.unpause.call({from: accounts[3]});
//		await LedgisQHVsVwz.whenPaused.call({from: accounts[4]});
//		const addressvnnA9R = await LedgisQHVsVwz.lockAfter.call(addressUAvZdns, uintHPHws6w, uintc3ZrVG7, {from: accounts[2]});
//		const uint256jimEdB4 = await LedgisQHVsVwz.balanceOf.call(addressa11rsws, {from: accounts[1]});

		await expect(LedgisQHVsVwz.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const uintaPiFRkn = BigInt("1007")
		const uintHniY6kj = BigInt("1789")
		const address42D91M = accounts[1]
		const uintgcb0Qd0 = BigInt("304")
		const addressxfqRlR4 = accounts[4]
		const addressHRUVXCX = accounts[0]
		const boolasUjuel = await Ledgisomjcot.transferWithLock.call(address42D91M, uintHniY6kj, uintaPiFRkn, {from: accounts[1]});
//		await Ledgisomjcot.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressHRUVXCX, addressxfqRlR4, uintgcb0Qd0, {from: accounts[3]});

		assert.equal(boolasUjuel, true)
		await expect(Ledgisomjcot.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const addressHGT2pzG = accounts[2]
		const uintNPugpNj = BigInt("304")
		const addressUXAjZai = accounts[4]
		const addressIo3UmYs = accounts[0]
		const addressVeE27vu = await Ledgisomjcot.freeze.call(addressHGT2pzG, {from: accounts[1]});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressIo3UmYs, addressUXAjZai, uintNPugpNj, {from: accounts[3]});

		await expect(Ledgisomjcot.transferFrom.call(addressIo3UmYs, addressUXAjZai, uintNPugpNj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLHxXAG = await Ledgis.new({from: accounts[0]});
		const uintjzBNwiL = BigInt("1570")
		const addressRDUiYxT = accounts[2]
//		const addressQtvqQyP = await LedgisLHxXAG.burn.call(addressRDUiYxT, uintjzBNwiL, {from: accounts[0]});
//		await LedgisLHxXAG.pause.call({from: accounts[4]});

		await expect(LedgisLHxXAG.burn.call(addressRDUiYxT, uintjzBNwiL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const uintobWzvnO = BigInt("304")
		const addressSKJPH6 = accounts[4]
		const addressBI0GvP3 = accounts[0]
//		await Ledgisomjcot.pause.call({from: accounts[1]});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressBI0GvP3, addressSKJPH6, uintobWzvnO, {from: accounts[3]});
//		await Ledgisomjcot.renounceOwnership.call({from: accounts[4]});

		await expect(Ledgisomjcot.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisomjcot = await Ledgis.new({from: accounts[1]});
		const addressWreTyLo = "0x0000000000000000000000000000000000000001"
		const uintwqcnq7x = BigInt("304")
		const addressV6jklPe = accounts[4]
		const addressNG3gT8Z = accounts[1]
		const addressVcHWBE = await Ledgisomjcot.transferOwnership.call(addressWreTyLo, {from: accounts[1]});
//		const boolRuAEbrY = await Ledgisomjcot.transferFrom.call(addressNG3gT8Z, addressV6jklPe, uintwqcnq7x, {from: accounts[3]});

		await expect(Ledgisomjcot.transferFrom.call(addressNG3gT8Z, addressV6jklPe, uintwqcnq7x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})