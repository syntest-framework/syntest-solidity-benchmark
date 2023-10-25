const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYFREMLdp = await KPLAY.new({from: accounts[2]});
		const uint1LNxSC = BigInt("172")
		const addressgqsfkHV = accounts[0]
		const uintOZJPXj = BigInt("1934")
		const addressbVO2lNO = accounts[4]
		const addressx5i8vEW = accounts[0]
		const addressSIpIr6x = accounts[3]
		const uintPMxd6QD = BigInt("1141")
		const addressY9tffHm = accounts[4]
		const addressiXIfa3T = accounts[1]
		await KPLAYFREMLdp.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		const boolqotRd6g = await KPLAYFREMLdp.transfer.call(addressgqsfkHV, uint1LNxSC, {from: accounts[0]});
		const boolwJV3sYf = await KPLAYFREMLdp.transferFrom.call(addressx5i8vEW, addressbVO2lNO, uintOZJPXj, {from: accounts[0]});
		const uint256NokBsYv = await KPLAYFREMLdp.balanceOf.call(addressSIpIr6x, {from: "0x0000000000000000000000000000000000000001"});
		const boolrFJk3ep = await KPLAYFREMLdp.transferFrom.call(addressiXIfa3T, addressY9tffHm, uintPMxd6QD, {from: accounts[3]});

		await expect(KPLAYFREMLdp.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyFITQBR = await KPLAY.new({from: accounts[0]});
		const uintnvmMVSS = BigInt("892")
		const addressHGusb46 = accounts[4]
		const uintEqqP9Vh = BigInt("2030")
		const addressVvMuGX = accounts[0]
		const addressWYSkaM5 = accounts[4]
		const addressLhj0EaC = accounts[3]
		const boolfGUU8qJ = await KPLAYyFITQBR.transfer.call(addressHGusb46, uintnvmMVSS, {from: accounts[0]});
		const booltYECO2W = await KPLAYyFITQBR.transfer.call(addressVvMuGX, uintEqqP9Vh, {from: accounts[4]});
		const uint256VILKju = await KPLAYyFITQBR.allowance.call(addressLhj0EaC, addressWYSkaM5, {from: accounts[2]});
		const uint256wHc9Hf4 = await KPLAYyFITQBR.currentTime.call({from: accounts[0]});

		assert.equal(boolfGUU8qJ, true)
		await expect(KPLAYyFITQBR.transfer.call(addressVvMuGX, uintEqqP9Vh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGgR2Mej = await KPLAY.new({from: accounts[3]});
		const uintgxcOroT = BigInt("430")
		const addressSvNrs2y = accounts[1]
		const addressnocKWVc = accounts[2]
		const boolmq7tSxy = await KPLAYGgR2Mej.mint.call(addressSvNrs2y, uintgxcOroT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MsGW5ph = await KPLAYGgR2Mej.lockCount.call(addressnocKWVc, {from: accounts[1]});

		await expect(KPLAYGgR2Mej.mint.call(addressSvNrs2y, uintgxcOroT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressFffvtlP = accounts[0]
		const addressu3rBvZi = accounts[0]
		const uintaEgYGSp = BigInt("537")
		const addressVX8LQUl = accounts[1]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressFffvtlP, {from: "0x0000000000000000000000000000000000000001"});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressu3rBvZi, {from: accounts[1]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressVX8LQUl, uintaEgYGSp, {from: accounts[3]});

		assert.equal(uint256P5fITM, BigInt("0"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.transfer.call(addressVX8LQUl, uintaEgYGSp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYXjQxGyN = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgtEgDa = BigInt("704")
		const addressVUDCvqH = accounts[4]
		const uintcfhoH2O = BigInt("464")
		const addressZxEbHOY = accounts[3]
		const addressASqA9eU = accounts[2]
		const uint256rNOogJi = await KPLAYXjQxGyN.currentTime.call({from: accounts[5]});
		const boolN9Kna4w = await KPLAYXjQxGyN.approve.call(addressVUDCvqH, uintgtEgDa, {from: accounts[1]});
		const boolDqYK3UZ = await KPLAYXjQxGyN.transfer.call(addressZxEbHOY, uintcfhoH2O, {from: accounts[3]});
		const uint256SxuMz0u = await KPLAYXjQxGyN.lockCount.call(addressASqA9eU, {from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYyFITQBR = await KPLAY.new({from: accounts[0]});
		const addresseS6Vxzs = accounts[4]
		const uintaEEBQZ9 = BigInt("11")
		const addressnZLcaf8 = accounts[2]
		const addresscdfJZpF = accounts[2]
		const uintgAg5Qa = BigInt("892")
		const addressdoGAOCq = accounts[4]
		const uintSJoxuff = BigInt("2055")
		const addressrkqO5Kc = accounts[0]
		const addressQWl1uPT = accounts[4]
		const addressEPRmIa6 = accounts[3]
		const addressIIZ8OK = accounts[2]
		const uintkKUnd1z = BigInt("342")
		const uint256d216o3k = await KPLAYyFITQBR.lockCount.call(addresseS6Vxzs, {from: accounts[2]});
		const boolNcasY1Z = await KPLAYyFITQBR.transferFrom.call(addresscdfJZpF, addressnZLcaf8, uintaEEBQZ9, {from: accounts[2]});
		const boolfGUU8qJ = await KPLAYyFITQBR.transfer.call(addressdoGAOCq, uintgAg5Qa, {from: accounts[0]});
		const booltYECO2W = await KPLAYyFITQBR.transfer.call(addressrkqO5Kc, uintSJoxuff, {from: accounts[4]});
		const uint256VILKju = await KPLAYyFITQBR.allowance.call(addressEPRmIa6, addressQWl1uPT, {from: accounts[2]});
		const uint256uPm8Y4X = await KPLAYyFITQBR.balanceOf.call(addressIIZ8OK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Wxs9Veo = await KPLAYyFITQBR.afterTime.call(uintkKUnd1z, {from: accounts[0]});

		assert.equal(uint256d216o3k, BigInt("0"))
		await expect(KPLAYyFITQBR.transferFrom.call(addresscdfJZpF, addressnZLcaf8, uintaEEBQZ9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressKEpgIw2 = accounts[0]
		const uints95OSLo = BigInt("66")
		const addressyWEO7DJ = accounts[1]
		const addressSt8Ya16 = accounts[3]
		const uintoEj68c1 = BigInt("537")
		const addresskDzPJma = accounts[1]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressKEpgIw2, {from: "0x0000000000000000000000000000000000000001"});
		const boolkU4BexL = await KPLAYvb3oLny.approve.call(addressyWEO7DJ, uints95OSLo, {from: accounts[1]});
		const uint2564FGIOT = await KPLAYvb3oLny.lockCount.call(addressSt8Ya16, {from: accounts[2]});
		await KPLAYvb3oLny.unpause.call({from: accounts[3]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addresskDzPJma, uintoEj68c1, {from: accounts[3]});

		assert.equal(boolkU4BexL, true)
		assert.equal(uint2564FGIOT, BigInt("0"))
		assert.equal(uint256P5fITM, BigInt("0"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressg3WsZap = accounts[0]
		const uintiZuVO4F = BigInt("1815")
		const uintb81sNHQ = BigInt("1763")
		const addressnYY4M1 = accounts[1]
		const uintlHsRUD5 = BigInt("1312")
		const addressHBG8zE = accounts[2]
		const uintxmlMRqL = BigInt("494")
		const addressWMHs14S = accounts[1]
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressg3WsZap, {from: "0x0000000000000000000000000000000000000001"});
		const addressmUMiBQu = await KPLAYvb3oLny.lockAfter.call(addressnYY4M1, uintb81sNHQ, uintiZuVO4F, {from: accounts[1]});
		const boolLcwGMS1 = await KPLAYvb3oLny.transfer.call(addressHBG8zE, uintlHsRUD5, {from: accounts[4]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressWMHs14S, uintxmlMRqL, {from: accounts[3]});

		assert.equal(uint256P5fITM, BigInt("0"))
		await expect(KPLAYvb3oLny.transfer.call(addressHBG8zE, uintlHsRUD5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressvAD1KoR = accounts[4]
		const addressoVXml4 = accounts[1]
		const uintPOHePGb = BigInt("537")
		const addresszpS4gY7 = accounts[1]
		const boolC4wSt0B = await KPLAYvb3oLny.isFrozen.call(addressvAD1KoR, {from: accounts[2]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressoVXml4, {from: "0x0000000000000000000000000000000000000001"});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addresszpS4gY7, uintPOHePGb, {from: accounts[3]});

		assert.equal(boolC4wSt0B, false)
		assert.equal(uint256P5fITM, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.transfer.call(addresszpS4gY7, uintPOHePGb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressKVjibux = accounts[1]
		const addressbMJMHJj = accounts[0]
		const addressGb5UBaC = accounts[0]
		const uintS4BbEJn = BigInt("488")
		const addressoz4A0mV = accounts[3]
		const uintiAsm6HN = BigInt("537")
		const addressaa0Dsv2 = accounts[1]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256mhWOXym = await KPLAYvb3oLny.balanceOf.call(addressKVjibux, {from: accounts[2]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressbMJMHJj, {from: "0x0000000000000000000000000000000000000001"});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressGb5UBaC, {from: accounts[1]});
		const boolKMWCmpR = await KPLAYvb3oLny.decreaseAllowance.call(addressoz4A0mV, uintS4BbEJn, {from: accounts[4]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressaa0Dsv2, uintiAsm6HN, {from: accounts[3]});

		assert.equal(uint256P5fITM, BigInt("0"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		assert.equal(uint256mhWOXym, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.decreaseAllowance.call(addressoz4A0mV, uintS4BbEJn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addresssIuV3jw = accounts[0]
		const uintvW9x2Wo = BigInt("537")
		const addressIdV7TOn = accounts[1]
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addresssIuV3jw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KvpdEcm = await KPLAYvb3oLny.currentTime.call({from: accounts[3]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressIdV7TOn, uintvW9x2Wo, {from: accounts[3]});

		assert.equal(uint256KvpdEcm, BigInt("1630228032"))
		assert.equal(uint256P5fITM, BigInt("0"))
		await expect(KPLAYvb3oLny.transfer.call(addressIdV7TOn, uintvW9x2Wo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOat8GNg = await KPLAY.new({from: accounts[2]});
		const uintZPvrayV = BigInt("276")
		const uintNSG7iN = BigInt("1210")
		const addressCiOXUcm = accounts[3]
		const uintuaDYDSj = BigInt("6")
		const addressNTjQiKd = accounts[2]
		const boolop7EOrQ = await KPLAYOat8GNg.transferWithLockAfter.call(addressCiOXUcm, uintNSG7iN, uintZPvrayV, {from: accounts[2]});
		await KPLAYOat8GNg.onlyOwner.call({from: accounts[3]});
		const addressEayn6Cb = await KPLAYOat8GNg.unlock.call(addressNTjQiKd, uintuaDYDSj, {from: accounts[1]});
		await KPLAYOat8GNg.pause.call({from: accounts[1]});

		assert.equal(boolop7EOrQ, true)
		await expect(KPLAYOat8GNg.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressitE7IYP = accounts[0]
		const addressqzuc1f4 = accounts[0]
		const uinta0ACG98 = BigInt("1806")
		const addresspdDUiGR = accounts[0]
		const uintIxsNrS = BigInt("537")
		const addressx8Gl6cB = accounts[1]
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressitE7IYP, {from: "0x0000000000000000000000000000000000000001"});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressqzuc1f4, {from: accounts[1]});
		const boolVFkEC79 = await KPLAYvb3oLny.mint.call(addresspdDUiGR, uinta0ACG98, {from: accounts[1]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressx8Gl6cB, uintIxsNrS, {from: accounts[3]});

		assert.equal(boolVFkEC79, true)
		assert.equal(uint256P5fITM, BigInt("0"))
		await expect(KPLAYvb3oLny.transfer.call(addressx8Gl6cB, uintIxsNrS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUydQGCO = await KPLAY.new({from: accounts[2]});
		const addresspD2zMH8 = accounts[5]
		const uintqdVomFB = BigInt("1803")
		const addressUN6shR = accounts[3]
		const addressRQwpXPM = accounts[2]
		const booldyrFJnI = await KPLAYUydQGCO.isFrozen.call(addresspD2zMH8, {from: accounts[2]});
		const boolfLthrxs = await KPLAYUydQGCO.increaseAllowance.call(addressUN6shR, uintqdVomFB, {from: accounts[1]});
		const uint256X2RAy6i = await KPLAYUydQGCO.balanceOf.call(addressRQwpXPM, {from: accounts[0]});
		await KPLAYUydQGCO.unpause.call({from: accounts[2]});

		assert.equal(booldyrFJnI, false)
		assert.equal(boolfLthrxs, true)
		assert.equal(uint256X2RAy6i, BigInt("10000000000000000"))
		await expect(KPLAYUydQGCO.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addresscygFeSx = accounts[0]
		const uintlodEO97 = BigInt("1002")
		const addressSvSvqm3 = accounts[0]
		const addressGRvDz4E = accounts[0]
		const uintrptRzRk = BigInt("537")
		const addressYrMl7W = accounts[2]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addresscygFeSx, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYvb3oLny.lockState.call(addressSvSvqm3, uintlodEO97, {from: "0x0000000000000000000000000000000000000001"});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressGRvDz4E, {from: accounts[1]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressYrMl7W, uintrptRzRk, {from: accounts[3]});

		assert.equal(uint256P5fITM, BigInt("0"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.lockState.call(addressSvSvqm3, uintlodEO97, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressDeyA2qg = accounts[3]
		const address5NDVHK = accounts[1]
		const addresswLMaTtf = accounts[3]
		const addressEikQ3Jw = accounts[0]
		const uintfbffKcw = BigInt("537")
		const addressqOeiSjy = accounts[1]
		const uint256toGafLo = await KPLAYvb3oLny.allowance.call(address5NDVHK, addressDeyA2qg, {from: accounts[0]});
		const uint256EuN6lqr = await KPLAYvb3oLny.balanceOf.call(addresswLMaTtf, {from: accounts[3]});
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressEikQ3Jw, {from: "0x0000000000000000000000000000000000000001"});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressqOeiSjy, uintfbffKcw, {from: accounts[3]});

		assert.equal(uint256EuN6lqr, BigInt("0"))
		assert.equal(uint256P5fITM, BigInt("0"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		assert.equal(uint256toGafLo, BigInt("0"))
		await expect(KPLAYvb3oLny.transfer.call(addressqOeiSjy, uintfbffKcw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressZM9DPy = accounts[1]
		const uintbVqMO7C = BigInt("922")
		const uintO9OK1IJ = BigInt("109")
		const addressMCc60Ca = accounts[0]
		const addressX8Gu9LV = accounts[1]
		const uintVd7Z9il = BigInt("1886")
		const addresseoYaDmt = accounts[4]
		const addresshE4ZeB0 = accounts[2]
		const addressgOyAn0O = accounts[0]
		const uintLwAtYc = BigInt("488")
		const addressVBnfrlk = accounts[3]
		const uintInyZJ5P = BigInt("537")
		const addressgreQwAc = accounts[1]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256mhWOXym = await KPLAYvb3oLny.balanceOf.call(addressZM9DPy, {from: accounts[2]});
		const boolwzjTDiL = await KPLAYvb3oLny.transferWithLock.call(addressMCc60Ca, uintO9OK1IJ, uintbVqMO7C, {from: accounts[1]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressX8Gu9LV, {from: "0x0000000000000000000000000000000000000001"});
		const boolLC47YHe = await KPLAYvb3oLny.transferFrom.call(addresshE4ZeB0, addresseoYaDmt, uintVd7Z9il, {from: accounts[2]});
		await KPLAYvb3oLny.whenPaused.call({from: accounts[3]});
		const uint256pKNaSYB = await KPLAYvb3oLny.currentTime.call({from: accounts[1]});
		await KPLAYvb3oLny.unpause.call({from: accounts[0]});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressgOyAn0O, {from: accounts[1]});
		const boolKMWCmpR = await KPLAYvb3oLny.decreaseAllowance.call(addressVBnfrlk, uintLwAtYc, {from: accounts[4]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressgreQwAc, uintInyZJ5P, {from: accounts[3]});

		assert.equal(boolwzjTDiL, true)
		assert.equal(uint256P5fITM, BigInt("10000000000000000"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		assert.equal(uint256mhWOXym, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.transferFrom.call(addresshE4ZeB0, addresseoYaDmt, uintVd7Z9il, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const uinthnAn4zB = BigInt("283")
		const uintOm9HLWN = BigInt("537")
		const addresso0R6lUN = accounts[1]
		const uint256mOrQryb = await KPLAYvb3oLny.afterTime.call(uinthnAn4zB, {from: "0x0000000000000000000000000000000000000001"});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addresso0R6lUN, uintOm9HLWN, {from: accounts[3]});
		await KPLAYvb3oLny.whenNotFrozen.call({from: accounts[5]});

		assert.equal(uint256mOrQryb, BigInt("1630228320"))
		await expect(KPLAYvb3oLny.transfer.call(addresso0R6lUN, uintOm9HLWN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addresscj6fnil = accounts[1]
		const addressM2Z1Wqn = "0x0000000000000000000000000000000000000001"
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addresscj6fnil, {from: "0x0000000000000000000000000000000000000001"});
		const addressEzMAr16 = await KPLAYvb3oLny.freeze.call(addressM2Z1Wqn, {from: accounts[1]});

		assert.equal(uint256P5fITM, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressfeo0MYV = accounts[0]
		const addressuSaYwVq = accounts[1]
		const uintPy3ONs = BigInt("434")
		const addressWdFT8G = accounts[3]
		const addressKBFFfA = accounts[1]
		const uinttX0o4Lx = BigInt("537")
		const addresszr82gcc = accounts[2]
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressfeo0MYV, {from: "0x0000000000000000000000000000000000000001"});
		const addresseePhQmH = await KPLAYvb3oLny.transferOwnership.call(addressuSaYwVq, {from: accounts[1]});
		const boolJHlh3MC = await KPLAYvb3oLny.transfer.call(addressWdFT8G, uintPy3ONs, {from: accounts[3]});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressKBFFfA, {from: accounts[1]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addresszr82gcc, uinttX0o4Lx, {from: accounts[3]});

		assert.equal(uint256P5fITM, BigInt("0"))
		await expect(KPLAYvb3oLny.transfer.call(addressWdFT8G, uintPy3ONs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const uintOirwm5Z = BigInt("215")
		const addressBx7cdZ = accounts[2]
		const addressayrSsaQ = accounts[0]
		const addresspONsL49 = accounts[0]
		const uinthMqpbDW = BigInt("608")
		const addressRZUljwc = accounts[1]
		const addressdGZsxtM = await KPLAYvb3oLny.burn.call(addressBx7cdZ, uintOirwm5Z, {from: accounts[1]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressayrSsaQ, {from: "0x0000000000000000000000000000000000000001"});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addresspONsL49, {from: accounts[1]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressRZUljwc, uinthMqpbDW, {from: accounts[3]});

		await expect(KPLAYvb3oLny.burn.call(addressBx7cdZ, uintOirwm5Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressSAeZhue = accounts[3]
		const addressJc77sik = accounts[0]
		const addressWdX0EFL = accounts[0]
		const uintStiUggU = BigInt("1008")
		const uintjiUQbuq = BigInt("899")
		const addressRFwJaD0 = accounts[5]
		const addressQn6tYNV = accounts[1]
		const uintr4cP37j = BigInt("21")
		const uintnpRgKYp = BigInt("699")
		const addressOcgGvzV = accounts[5]
		const uintHaejSur = BigInt("537")
		const addresszDunGuq = accounts[1]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		const uint256OrLLP3w = await KPLAYvb3oLny.allowance.call(addressJc77sik, addressSAeZhue, {from: accounts[1]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressWdX0EFL, {from: "0x0000000000000000000000000000000000000001"});
		const addressQAcUP3I = await KPLAYvb3oLny.lock.call(addressRFwJaD0, uintjiUQbuq, uintStiUggU, {from: accounts[1]});
		const address38wEuN = await KPLAYvb3oLny.unfreeze.call(addressQn6tYNV, {from: accounts[1]});
		const boolNdQ8JCC = await KPLAYvb3oLny.transferWithLockAfter.call(addressOcgGvzV, uintnpRgKYp, uintr4cP37j, {from: accounts[0]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addresszDunGuq, uintHaejSur, {from: accounts[3]});

		assert.equal(uint256OrLLP3w, BigInt("0"))
		assert.equal(uint256P5fITM, BigInt("0"))
		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.lock.call(addressRFwJaD0, uintjiUQbuq, uintStiUggU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addressaVboKXl = accounts[0]
		const uintPa9Aer2 = BigInt("523")
		const addressVRsNVLO = accounts[1]
		const uint256PFUH2FK = await KPLAYvb3oLny.totalSupply.call({from: accounts[0]});
		await KPLAYvb3oLny.renounceOwnership.call({from: accounts[1]});
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addressaVboKXl, {from: "0x0000000000000000000000000000000000000001"});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(addressVRsNVLO, uintPa9Aer2, {from: accounts[3]});

		assert.equal(uint256PFUH2FK, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgyfDRo = await KPLAY.new({from: accounts[0]});
		const addressUvkw1my = "0x0000000000000000000000000000000000000001"
		const addressIOzCWvx = accounts[1]
		const uint256zCrZfG = await KPLAYgyfDRo.lockCount.call(addressUvkw1my, {from: accounts[0]});
		const uint256ZY3qm3F = await KPLAYgyfDRo.currentTime.call({from: accounts[2]});
		await KPLAYgyfDRo.pause.call({from: accounts[0]});
		await KPLAYgyfDRo.onlyOwner.call({from: accounts[4]});
		await KPLAYgyfDRo.pause.call({from: accounts[2]});
		const boolNgUpcVf = await KPLAYgyfDRo.isFrozen.call(addressIOzCWvx, {from: accounts[2]});

		assert.equal(uint256ZY3qm3F, BigInt("1630228040"))
		assert.equal(uint256zCrZfG, BigInt("0"))
		await expect(KPLAYgyfDRo.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const uintkOHbs0 = BigInt("69")
		const addressrAwKyYi = accounts[1]
		const addressXLN2ZWn = accounts[3]
		const addressgxD4UTA = await KPLAYvb3oLny.burn.call(addressrAwKyYi, uintkOHbs0, {from: accounts[1]});
		const uint256Jo9gJhL = await KPLAYvb3oLny.balanceOf.call(addressXLN2ZWn, {from: accounts[2]});

		assert.equal(uint256Jo9gJhL, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYvb3oLny = await KPLAY.new({from: accounts[1]});
		const addresskPArBI = accounts[1]
		const uint6Kzkok = BigInt("1232")
		const addressGPkMk61 = accounts[1]
		const uintcp24Lub = BigInt("1742")
		const addressk4J0SZ = accounts[2]
		const uintv4N5YjX = BigInt("537")
		const address4dMb3f = accounts[1]
		const uint256P5fITM = await KPLAYvb3oLny.balanceOf.call(addresskPArBI, {from: "0x0000000000000000000000000000000000000001"});
		const booluxwdWzV = await KPLAYvb3oLny.approve.call(addressGPkMk61, uint6Kzkok, {from: accounts[1]});
		const addressOjtWbJl = await KPLAYvb3oLny.unlock.call(addressk4J0SZ, uintcp24Lub, {from: accounts[1]});
		const boolzmQjBcU = await KPLAYvb3oLny.transfer.call(address4dMb3f, uintv4N5YjX, {from: accounts[3]});
		await KPLAYvb3oLny.renounceOwnership.call({from: accounts[4]});

		assert.equal(booluxwdWzV, true)
		assert.equal(uint256P5fITM, BigInt("10000000000000000"))
		await expect(KPLAYvb3oLny.unlock.call(addressk4J0SZ, uintcp24Lub, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})