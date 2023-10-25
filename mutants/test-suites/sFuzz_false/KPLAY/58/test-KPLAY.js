const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYW2FM2uF = await KPLAY.new({from: accounts[4]});
		const uintxkWX1a = BigInt("786")
		const uintuJNOPcu = BigInt("1881")
		const addressesg3mBp = accounts[4]
		const addressUztdiIy = accounts[1]
		const uintqylkOD = BigInt("230")
		const addressW7n0t4 = accounts[2]
		const uinto8mD83Z = BigInt("1004")
		const addressMFsVJKH = accounts[1]
		const addressTKZxer = "0x0000000000000000000000000000000000000001"
//		await KPLAYW2FM2uF.whenNotFrozen.call({from: accounts[4]});
//		const uint256OEdLf88 = await KPLAYW2FM2uF.afterTime.call(uintxkWX1a, {from: accounts[0]});
//		const boolJBFMUlV = await KPLAYW2FM2uF.transferFrom.call(addressUztdiIy, addressesg3mBp, uintuJNOPcu, {from: accounts[2]});
//		const boolTOZqiLV = await KPLAYW2FM2uF.transfer.call(addressW7n0t4, uintqylkOD, {from: accounts[0]});
//		const boolhckLCHF = await KPLAYW2FM2uF.transferFrom.call(addressTKZxer, addressMFsVJKH, uinto8mD83Z, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYW2FM2uF.renounceOwnership.call({from: accounts[4]});

		await expect(KPLAYW2FM2uF.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintPiPRns = BigInt("509")
		const addressuHiXgNi = accounts[5]
		const addresszk1eIPg = accounts[3]
		const boolvT6Len1 = await KPLAYg4ln2kk.increaseAllowance.call(addressuHiXgNi, uintPiPRns, {from: accounts[3]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addresszk1eIPg, {from: accounts[1]});

		assert.equal(boolvT6Len1, true)
		await expect(KPLAYg4ln2kk.unfreeze.call(addresszk1eIPg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgFLjYvG = await KPLAY.new({from: accounts[2]});
		const addressqyaD9Hj = accounts[0]
		const uintondTax = BigInt("1093")
		const addressOvI9t4b = accounts[3]
		const uintQAEtvPP = BigInt("1862")
		const addressOvVOdYl = accounts[4]
		const addressxJP1X3j = accounts[3]
		const uint256g5uyGcM = await KPLAYgFLjYvG.lockCount.call(addressqyaD9Hj, {from: accounts[0]});
//		await KPLAYgFLjYvG.lockState.call(addressOvI9t4b, uintondTax, {from: accounts[2]});
//		const boolCFdq9ZK = await KPLAYgFLjYvG.transferFrom.call(addressxJP1X3j, addressOvVOdYl, uintQAEtvPP, {from: accounts[1]});

		assert.equal(uint256g5uyGcM, BigInt("0"))
		await expect(KPLAYgFLjYvG.lockState.call(addressOvI9t4b, uintondTax, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYZc3lQys = await KPLAY.new({from: accounts[3]});
		const uintCwvpKXK = BigInt("1727")
		const addresslCU1D1 = accounts[4]
		const addressenIYtlb = accounts[4]
		const uintvcRxv3B = BigInt("556")
		const uintoz02evZ = BigInt("887")
		const addressuy84Vif = accounts[1]
		const uintl1fz1jO = BigInt("2003")
		const addressTYeIGuN = accounts[4]
		const addressIcFJ8Ty = accounts[0]
//		const addressXaZ0MO2 = await KPLAYZc3lQys.unlock.call(addresslCU1D1, uintCwvpKXK, {from: accounts[3]});
//		const boolfEdgOP9 = await KPLAYZc3lQys.isFrozen.call(addressenIYtlb, {from: accounts[0]});
//		const boolNnyz7wP = await KPLAYZc3lQys.transferWithLockAfter.call(addressuy84Vif, uintoz02evZ, uintvcRxv3B, {from: accounts[1]});
//		await KPLAYZc3lQys.whenNotFrozen.call({from: accounts[4]});
//		const boolKVKzWtv = await KPLAYZc3lQys.transferFrom.call(addressIcFJ8Ty, addressTYeIGuN, uintl1fz1jO, {from: accounts[5]});

		await expect(KPLAYZc3lQys.unlock.call(addresslCU1D1, uintCwvpKXK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYMZxbe3 = await KPLAY.new({from: accounts[0]});
		const uintU1ZMl5o = BigInt("474")
		const addressKrOlWJA = accounts[0]
		const addressi5xnSjB = accounts[3]
		const uintvddAozD = BigInt("1938")
		const addressJAMFPYq = "0x0000000000000000000000000000000000000001"
		const uintNf8jXE5 = BigInt("1224")
		const uintp2BABhm = BigInt("1869")
		const addressBGKuVDp = accounts[3]
//		const boolgMJPEbV = await KPLAYMZxbe3.transferFrom.call(addressi5xnSjB, addressKrOlWJA, uintU1ZMl5o, {from: accounts[0]});
//		const boolNu1n2O = await KPLAYMZxbe3.increaseAllowance.call(addressJAMFPYq, uintvddAozD, {from: accounts[0]});
//		const address34DqmQ = await KPLAYMZxbe3.lock.call(addressBGKuVDp, uintp2BABhm, uintNf8jXE5, {from: accounts[3]});
//		await KPLAYMZxbe3.whenPaused.call({from: accounts[5]});
//		await KPLAYMZxbe3.renounceOwnership.call({from: accounts[1]});
//		const uint256PTYuzio = await KPLAYMZxbe3.currentTime.call({from: accounts[0]});

		await expect(KPLAYMZxbe3.transferFrom.call(addressi5xnSjB, addressKrOlWJA, uintU1ZMl5o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintf8BxbXC = BigInt("1377")
		const addressBi98ScP = accounts[1]
		const addressg8RjbGW = accounts[5]
//		const boolceu3jJG = await KPLAYg4ln2kk.decreaseAllowance.call(addressBi98ScP, uintf8BxbXC, {from: accounts[1]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addressg8RjbGW, {from: accounts[1]});

		await expect(KPLAYg4ln2kk.decreaseAllowance.call(addressBi98ScP, uintf8BxbXC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uinthLM7FWb = BigInt("1595")
		const addressRb0doHQ = accounts[1]
		const addressxjCHMAL = accounts[4]
		const addressCzT0r57 = accounts[4]
		const uint256MDppcNi = await KPLAYg4ln2kk.currentTime.call({from: accounts[1]});
//		const boolmLfvVK = await KPLAYg4ln2kk.transferFrom.call(addressxjCHMAL, addressRb0doHQ, uinthLM7FWb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addressCzT0r57, {from: accounts[1]});

		assert.equal(uint256MDppcNi, BigInt("1630228164"))
		await expect(KPLAYg4ln2kk.transferFrom.call(addressxjCHMAL, addressRb0doHQ, uinthLM7FWb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressL6S6Z42 = accounts[4]
		const addresswdnxldr = accounts[4]
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressL6S6Z42, {from: accounts[1]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addresswdnxldr, {from: accounts[1]});

		assert.equal(uint256zn6AvFZ, BigInt("0"))
		await expect(KPLAYg4ln2kk.unfreeze.call(addresswdnxldr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressqT8phmk = accounts[2]
		const uintPS9bOHU = BigInt("1595")
		const addressLkfh1SO = accounts[1]
		const addressgC9RZPH = accounts[5]
		const uint256MDppcNi = await KPLAYg4ln2kk.currentTime.call({from: accounts[1]});
		const boolVaknG8p = await KPLAYg4ln2kk.isFrozen.call(addressqT8phmk, {from: accounts[1]});
//		const boolmLfvVK = await KPLAYg4ln2kk.transferFrom.call(addressgC9RZPH, addressLkfh1SO, uintPS9bOHU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVaknG8p, false)
		assert.equal(uint256MDppcNi, BigInt("1630228159"))
		await expect(KPLAYg4ln2kk.transferFrom.call(addressgC9RZPH, addressLkfh1SO, uintPS9bOHU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addresspjxtmmM = accounts[2]
		const addresseaNEww = accounts[2]
		const addresshVd1TiM = accounts[4]
		const uintzGhlmnO = BigInt("916")
		const addressBCTpGqn = accounts[1]
		const uint256xAeg2gW = await KPLAYg4ln2kk.allowance.call(addresseaNEww, addresspjxtmmM, {from: accounts[3]});
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addresshVd1TiM, {from: accounts[1]});
		const boolUTUZB6 = await KPLAYg4ln2kk.increaseAllowance.call(addressBCTpGqn, uintzGhlmnO, {from: accounts[4]});

		assert.equal(boolUTUZB6, true)
		assert.equal(uint256xAeg2gW, BigInt("0"))
		assert.equal(uint256zn6AvFZ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressYGBCA7d = accounts[5]
		const uintOAYk5GB = BigInt("176")
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressYGBCA7d, {from: accounts[1]});
		const uint256ANmuQsP = await KPLAYg4ln2kk.afterTime.call(uintOAYk5GB, {from: accounts[3]});

		assert.equal(uint256ANmuQsP, BigInt("1630228330"))
		assert.equal(uint256zn6AvFZ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintfY03r9L = BigInt("1318")
		const addressVYBFgEp = accounts[4]
		const addressWFIV35P = accounts[4]
		const addressr4LGqBh = accounts[5]
//		const boolwHdWrZ1 = await KPLAYg4ln2kk.transfer.call(addressVYBFgEp, uintfY03r9L, {from: accounts[2]});
//		const uint256QdSyh3 = await KPLAYg4ln2kk.balanceOf.call(addressWFIV35P, {from: accounts[2]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addressr4LGqBh, {from: accounts[1]});
//		await KPLAYg4ln2kk.pause.call({from: accounts[4]});

		await expect(KPLAYg4ln2kk.transfer.call(addressVYBFgEp, uintfY03r9L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1QYBn7 = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVwEe6rE = BigInt("1329")
		const uintJkLkkPy = BigInt("57")
		const addressqWrtuvE = accounts[1]
		const addresswWAdCa = accounts[1]
		const uintqLYmd2n = BigInt("436")
		const addressPl1rEJ = accounts[3]
		const addressX20RSD8 = accounts[1]
		const addressibcqtT = accounts[0]
		const uintrdAreLV = BigInt("1398")
		const addressyvEp4Mm = "0x0000000000000000000000000000000000000001"
		const addressx8vBhW = await KPLAY1QYBn7.lockAfter.call(addressqWrtuvE, uintJkLkkPy, uintVwEe6rE, {from: accounts[3]});
		const addressjhq8Ly9 = await KPLAY1QYBn7.freeze.call(addresswWAdCa, {from: accounts[4]});
		const boolp0lmSg3 = await KPLAY1QYBn7.transfer.call(addressPl1rEJ, uintqLYmd2n, {from: accounts[1]});
		const uint256mTC6Y0o = await KPLAY1QYBn7.allowance.call(addressibcqtT, addressX20RSD8, {from: accounts[2]});
		const boolyfeabm = await KPLAY1QYBn7.approve.call(addressyvEp4Mm, uintrdAreLV, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressSNNZeA2 = accounts[5]
		const uintzVf44XY = BigInt("258")
		const addressHapziE = accounts[1]
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressSNNZeA2, {from: accounts[1]});
//		await KPLAYg4ln2kk.renounceOwnership.call({from: accounts[3]});
//		await KPLAYg4ln2kk.lockState.call(addressHapziE, uintzVf44XY, {from: accounts[5]});

		assert.equal(uint256zn6AvFZ, BigInt("0"))
		await expect(KPLAYg4ln2kk.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintInt7V8t = BigInt("351")
		const uintFgSOQ96 = BigInt("1117")
		const addresslW8FLwJ = accounts[3]
		const addresssIxzVmG = accounts[5]
		const addressmqRXSl1 = accounts[3]
		const addresseBYM5o9 = await KPLAYg4ln2kk.lockAfter.call(addresslW8FLwJ, uintFgSOQ96, uintInt7V8t, {from: accounts[3]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addresssIxzVmG, {from: accounts[1]});
//		const addressUoBRHCO = await KPLAYg4ln2kk.transferOwnership.call(addressmqRXSl1, {from: accounts[1]});

		await expect(KPLAYg4ln2kk.unfreeze.call(addresssIxzVmG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressSUucosJ = accounts[5]
		const uint256pcPoVeF = await KPLAYg4ln2kk.totalSupply.call({from: accounts[4]});
//		await KPLAYg4ln2kk.whenNotFrozen.call({from: accounts[2]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addressSUucosJ, {from: accounts[1]});

		assert.equal(uint256pcPoVeF, BigInt("10000000000000000"))
		await expect(KPLAYg4ln2kk.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintfHOjN3u = BigInt("1522")
		const addressgd3sPey = accounts[1]
		const uintJYLaDhK = BigInt("1595")
		const addressqSzRFZe = accounts[2]
		const addressPb0s3Qd = accounts[5]
//		const addressEaLNQY = await KPLAYg4ln2kk.burn.call(addressgd3sPey, uintfHOjN3u, {from: accounts[3]});
//		const boolmLfvVK = await KPLAYg4ln2kk.transferFrom.call(addressPb0s3Qd, addressqSzRFZe, uintJYLaDhK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYg4ln2kk.burn.call(addressgd3sPey, uintfHOjN3u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressS1sUP71 = accounts[5]
		const addressUS11ZIk = accounts[0]
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressS1sUP71, {from: accounts[1]});
		const addressIAYjGVR = await KPLAYg4ln2kk.unfreeze.call(addressUS11ZIk, {from: accounts[3]});

		assert.equal(uint256zn6AvFZ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintvJU40A = BigInt("427")
		const addressQPV0iIE = "0x0000000000000000000000000000000000000001"
		const addressbq9Pc7l = accounts[5]
		const boolj4nSjCx = await KPLAYg4ln2kk.approve.call(addressQPV0iIE, uintvJU40A, {from: accounts[2]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addressbq9Pc7l, {from: accounts[1]});

		assert.equal(boolj4nSjCx, true)
		await expect(KPLAYg4ln2kk.unfreeze.call(addressbq9Pc7l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintbLdbzc7 = BigInt("2047")
		const uintYlCiY9h = BigInt("1813")
		const addressrGFwIzN = accounts[3]
		const addressPdOSchz = accounts[5]
		const addressNcyOCjT = await KPLAYg4ln2kk.lock.call(addressrGFwIzN, uintYlCiY9h, uintbLdbzc7, {from: accounts[3]});
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressPdOSchz, {from: accounts[1]});

		assert.equal(uint256zn6AvFZ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYG5cCh12 = await KPLAY.new({from: accounts[2]});
		const addressSFIa2mG = accounts[1]
		const uintXJY7KrA = BigInt("1624")
		const addresswaIHgMB = accounts[4]
		const uintdraHf4 = BigInt("1984")
		const addressJEBY4z = accounts[3]
		const addresseQXCC8u = accounts[2]
		const addresslLldjq = await KPLAYG5cCh12.transferOwnership.call(addressSFIa2mG, {from: accounts[2]});
//		await KPLAYG5cCh12.lockState.call(addresswaIHgMB, uintXJY7KrA, {from: accounts[1]});
//		const boolNvHCxlJ = await KPLAYG5cCh12.transferFrom.call(addresseQXCC8u, addressJEBY4z, uintdraHf4, {from: accounts[2]});
//		await KPLAYG5cCh12.whenNotFrozen.call({from: accounts[2]});

		await expect(KPLAYG5cCh12.lockState.call(addresswaIHgMB, uintXJY7KrA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintosTofv8 = BigInt("584")
		const uintdJmFrVd = BigInt("714")
		const addressSWu7U8 = accounts[1]
		const addressQkiAOAa = accounts[4]
		const boolmvHpALt = await KPLAYg4ln2kk.transferWithLock.call(addressSWu7U8, uintdJmFrVd, uintosTofv8, {from: accounts[3]});
//		await KPLAYg4ln2kk.renounceOwnership.call({from: accounts[2]});
//		const addressClZOLNB = await KPLAYg4ln2kk.unfreeze.call(addressQkiAOAa, {from: accounts[1]});

		assert.equal(boolmvHpALt, true)
		await expect(KPLAYg4ln2kk.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressE8LnG6j = accounts[4]
		const uintkT7y0SF = BigInt("1997")
		const addressISMdsab = accounts[4]
		const addressgcB60HG = accounts[5]
		const addressXanQGL = await KPLAYg4ln2kk.freeze.call(addressE8LnG6j, {from: accounts[3]});
//		const boolGmUEUNC = await KPLAYg4ln2kk.decreaseAllowance.call(addressISMdsab, uintkT7y0SF, {from: accounts[4]});
//		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressgcB60HG, {from: accounts[1]});

		await expect(KPLAYg4ln2kk.decreaseAllowance.call(addressISMdsab, uintkT7y0SF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const uintt1b0eaB = BigInt("228")
		const uinteWirTO1 = BigInt("1578")
		const addresscqxGVdv = "0x0000000000000000000000000000000000000001"
		const uintb9YlLlx = BigInt("1595")
		const addresstOqdXsp = accounts[2]
		const address9JNo7f = accounts[5]
		const boolGEsgqDI = await KPLAYg4ln2kk.transferWithLockAfter.call(addresscqxGVdv, uinteWirTO1, uintt1b0eaB, {from: accounts[3]});
//		const boolmLfvVK = await KPLAYg4ln2kk.transferFrom.call(address9JNo7f, addresstOqdXsp, uintb9YlLlx, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYg4ln2kk.unpause.call({from: accounts[2]});

		assert.equal(boolGEsgqDI, true)
		await expect(KPLAYg4ln2kk.transferFrom.call(address9JNo7f, addresstOqdXsp, uintb9YlLlx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressxUiDFJw = accounts[5]
		const uintVHOLgzn = BigInt("788")
		const addressYlsefgh = accounts[4]
//		await KPLAYg4ln2kk.unpause.call({from: accounts[3]});
//		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressxUiDFJw, {from: accounts[1]});
//		const boolwWqQrNi = await KPLAYg4ln2kk.transfer.call(addressYlsefgh, uintVHOLgzn, {from: accounts[4]});

		await expect(KPLAYg4ln2kk.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addresshpgHY2N = accounts[5]
		const uintCye9bGc = BigInt("931")
		const addressB7cmuFH = accounts[3]
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addresshpgHY2N, {from: accounts[1]});
		const boolM3rzWk6 = await KPLAYg4ln2kk.mint.call(addressB7cmuFH, uintCye9bGc, {from: accounts[3]});
//		await KPLAYg4ln2kk.onlyOwner.call({from: accounts[4]});

		assert.equal(boolM3rzWk6, true)
		assert.equal(uint256zn6AvFZ, BigInt("0"))
		await expect(KPLAYg4ln2kk.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYg4ln2kk = await KPLAY.new({from: accounts[3]});
		const addressd1boO0O = accounts[5]
		const uinthzsYHjy = BigInt("746")
		const uintGJqnGAH = BigInt("3")
		const addressUwHPzPY = accounts[4]
		const uint256zn6AvFZ = await KPLAYg4ln2kk.balanceOf.call(addressd1boO0O, {from: accounts[1]});
		const uint256jVSZ5Oj = await KPLAYg4ln2kk.afterTime.call(uinthzsYHjy, {from: accounts[3]});
//		await KPLAYg4ln2kk.pause.call({from: accounts[3]});
//		await KPLAYg4ln2kk.whenNotFrozen.call({from: accounts[4]});
//		const boolhUnkKQ4 = await KPLAYg4ln2kk.approve.call(addressUwHPzPY, uintGJqnGAH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256jVSZ5Oj, BigInt("1630228902"))
		assert.equal(uint256zn6AvFZ, BigInt("0"))
		await expect(KPLAYg4ln2kk.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})