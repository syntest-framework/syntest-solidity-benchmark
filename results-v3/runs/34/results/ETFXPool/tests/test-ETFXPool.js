const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringPikcEE9 = "x5Pa7d3buo89VrgXcYujuf3SOx88PgDCxMv3yFLQpRFvRpL5sFKhKdW6WsyjM2mLxC8u9acgrXtntJniMh3oFVmoukov"
		const stringup37A7G = "iAoGV80GluMOFqs4o1U7IzUN6yZiHd54X8neYrRQuhM"
		const uintDTDCWnN = BigInt("90")
		const ETFXPools4DLKDe = await ETFXPool.new(stringPikcEE9, stringup37A7G, uintDTDCWnN, {from: accounts[0]});
		const uinttdIw1Nv = BigInt("1719")
		const addressYlZXLgy = accounts[1]
		const addressEIf5rHZ = accounts[0]
		const addressUXVWOO8 = accounts[0]
		const uintFsXoCbE = BigInt("1099")
		const address0aznxQ = accounts[1]
		await ETFXPools4DLKDe.onlyOwner.call({from: accounts[4]});
		const boolMsmS0Ev = await ETFXPools4DLKDe.transferFrom.call(addressEIf5rHZ, addressYlZXLgy, uinttdIw1Nv, {from: accounts[5]});
		const uint256QaOenI3 = await ETFXPools4DLKDe.balanceOf.call(addressUXVWOO8, {from: accounts[4]});
		const boolNDR0FoZ = await ETFXPools4DLKDe.decreaseAllowance.call(address0aznxQ, uintFsXoCbE, {from: accounts[4]});
		await ETFXPools4DLKDe.renounceOwnership.call({from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYNNSYHU = await ETFXPool.new({from: accounts[1]});
		const uintmbJcPQq = BigInt("33")
		const uinturcdpNj = BigInt("1577")
		const addressKNDVcXs = accounts[4]
		const addressHoeyVWA = accounts[5]
		const uinthTWO41W = BigInt("2026")
		const addressVnz1qq2 = accounts[1]
		const uint256NrDW08k = await ETFXPoolYNNSYHU.withdraw.call(uintmbJcPQq, {from: accounts[3]});
		const boolDpGUE1 = await ETFXPoolYNNSYHU.transferFrom.call(addressHoeyVWA, addressKNDVcXs, uinturcdpNj, {from: accounts[2]});
		const boolTJsdgcg = await ETFXPoolYNNSYHU.increaseAllowance.call(addressVnz1qq2, uinthTWO41W, {from: accounts[5]});

		await expect(ETFXPoolYNNSYHU.withdraw.call(uintmbJcPQq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolShfo20k = await ETFXPool.new({from: accounts[2]});
		const uintfOsDJR2 = BigInt("91")
		const addressgtDz1VR = accounts[0]
		const uintsFgOp1x = BigInt("468")
		const addressHqY4IIq = accounts[2]
		await ETFXPoolShfo20k.onlyOwner.call({from: accounts[0]});
		const stringTAJ5OMz = await ETFXPoolShfo20k.symbol.call({from: accounts[4]});
		const boolVJf299F = await ETFXPoolShfo20k.transfer.call(addressgtDz1VR, uintfOsDJR2, {from: accounts[1]});
		const boolhDTbR6d = await ETFXPoolShfo20k.approve.call(addressHqY4IIq, uintsFgOp1x, {from: accounts[1]});

		await expect(ETFXPoolShfo20k.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addressraHawqE = accounts[2]
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressraHawqE, {from: accounts[3]});
		await ETFXPooloHD8PAs.exit.call({from: accounts[3]});

		assert.equal(uint256r86rui6, BigInt("0"))
		await expect(ETFXPooloHD8PAs.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolS4zZoYC = await ETFXPool.new({from: accounts[2]});
		const uintjS91xDA = BigInt("62")
		const addressJzC9NvG = accounts[2]
		const addressz4moBvo = accounts[3]
		const addressZF1ahIa = accounts[3]
		const uint256a9T0viE = await ETFXPoolS4zZoYC.totalSupply.call({from: accounts[1]});
		const boolOafp3rK = await ETFXPoolS4zZoYC.transfer.call(addressJzC9NvG, uintjS91xDA, {from: accounts[3]});
		const uint256SpA3bcJ = await ETFXPoolS4zZoYC.allowance.call(addressZF1ahIa, addressz4moBvo, {from: accounts[4]});

		assert.equal(uint256a9T0viE, BigInt("0"))
		await expect(ETFXPoolS4zZoYC.transfer.call(addressJzC9NvG, uintjS91xDA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolW4PFRHM = await ETFXPool.new({from: accounts[0]});
		const uintPC0X63h = BigInt("1709")
		const addressZN1NN67 = accounts[1]
		const addressb9dddf = accounts[5]
		const addressOj5UmmA = accounts[2]
		const uint256P4G77sV = await ETFXPoolW4PFRHM.totalSupply.call({from: accounts[2]});
		const uint8FGOUONZ = await ETFXPoolW4PFRHM.decimals.call({from: accounts[0]});
		const boolri6T6WD = await ETFXPoolW4PFRHM.transferFrom.call(addressb9dddf, addressZN1NN67, uintPC0X63h, {from: accounts[1]});
		const addressh5SazDW = await ETFXPoolW4PFRHM.owner.call({from: accounts[2]});
		const uint256JlLPbIU = await ETFXPoolW4PFRHM.balanceOf.call(addressOj5UmmA, {from: accounts[1]});

		assert.equal(uint256P4G77sV, BigInt("0"))
		assert.equal(uint8FGOUONZ, BigInt("8"))
		await expect(ETFXPoolW4PFRHM.transferFrom.call(addressb9dddf, addressZN1NN67, uintPC0X63h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolS4zZoYC = await ETFXPool.new({from: accounts[2]});
		const addressjbLxzf2 = accounts[3]
		const addressEFn5FJJ = accounts[3]
		const uint256a9T0viE = await ETFXPoolS4zZoYC.totalSupply.call({from: accounts[1]});
		const uint256SpA3bcJ = await ETFXPoolS4zZoYC.allowance.call(addressEFn5FJJ, addressjbLxzf2, {from: accounts[4]});

		assert.equal(uint256SpA3bcJ, BigInt("0"))
		assert.equal(uint256a9T0viE, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addressyFQDlux = accounts[3]
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressyFQDlux, {from: accounts[3]});
		const stringRXfho1 = await ETFXPooloHD8PAs.symbol.call({from: accounts[2]});
		await ETFXPooloHD8PAs.exit.call({from: accounts[3]});

		assert.equal(stringRXfho1, "FETFX")
		assert.equal(uint256r86rui6, BigInt("0"))
		await expect(ETFXPooloHD8PAs.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolptuvGnc = await ETFXPool.new({from: accounts[0]});
		const uintjC65wU = BigInt("1224")
		const stringrChR99S = await ETFXPoolptuvGnc.symbol.call({from: accounts[5]});
		const stringvOT9am1 = await ETFXPoolptuvGnc.name.call({from: accounts[2]});
		await ETFXPoolptuvGnc.nonReentrant.call({from: accounts[1]});
		const uint256f0VF7aV = await ETFXPoolptuvGnc.stake.call(uintjC65wU, {from: accounts[1]});

		assert.equal(stringrChR99S, "FETFX")
		assert.equal(stringvOT9am1, "ETFX-FARM")
		await expect(ETFXPoolptuvGnc.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addressZz6p2qC = accounts[2]
		const uintFWig00l = BigInt("727")
		const uint8DeEsz3 = await ETFXPooloHD8PAs.decimals.call({from: accounts[1]});
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressZz6p2qC, {from: accounts[3]});
		const uint256W6O3Pja = await ETFXPooloHD8PAs.stake.call(uintFWig00l, {from: accounts[1]});

		assert.equal(uint256r86rui6, BigInt("0"))
		assert.equal(uint8DeEsz3, BigInt("8"))
		await expect(ETFXPooloHD8PAs.stake.call(uintFWig00l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addresskByWQBv = accounts[0]
		const addressyMZ8JRQ = accounts[3]
		const addresssv83vlk = await ETFXPooloHD8PAs.transferOwnership.call(addresskByWQBv, {from: accounts[1]});
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressyMZ8JRQ, {from: accounts[3]});

		assert.equal(uint256r86rui6, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addressEHE0clv = accounts[3]
		const uintvXE3Pxu = BigInt("1171")
		const addressuKWr2np = accounts[0]
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressEHE0clv, {from: accounts[3]});
		const boolBOWKmwG = await ETFXPooloHD8PAs.approve.call(addressuKWr2np, uintvXE3Pxu, {from: accounts[2]});

		assert.equal(boolBOWKmwG, true)
		assert.equal(uint256r86rui6, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYl4v9v2 = await ETFXPool.new({from: accounts[3]});
		const uintTg0jZc7 = BigInt("1806")
		const addressL9dUo4w = "0x0000000000000000000000000000000000000001"
		await ETFXPoolYl4v9v2.getReward.call({from: accounts[4]});
		const addressHmpkyrn = await ETFXPoolYl4v9v2.owner.call({from: accounts[0]});
		const stringdOUU223 = await ETFXPoolYl4v9v2.symbol.call({from: accounts[5]});
		const booloh738eC = await ETFXPoolYl4v9v2.approve.call(addressL9dUo4w, uintTg0jZc7, {from: accounts[3]});

		await expect(ETFXPoolYl4v9v2.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addressb39uXBc = accounts[3]
		const uintkPlBg0E = BigInt("165")
		const addressS5Q0rfs = accounts[0]
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressb39uXBc, {from: accounts[3]});
		const boolknZDZhm = await ETFXPooloHD8PAs.decreaseAllowance.call(addressS5Q0rfs, uintkPlBg0E, {from: accounts[0]});

		assert.equal(uint256r86rui6, BigInt("0"))
		await expect(ETFXPooloHD8PAs.decreaseAllowance.call(addressS5Q0rfs, uintkPlBg0E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYl4v9v2 = await ETFXPool.new({from: accounts[3]});
		const uintjbxaUYB = BigInt("1806")
		const addressaIbAfBq = "0x0000000000000000000000000000000000000001"
		const addressHmpkyrn = await ETFXPoolYl4v9v2.owner.call({from: accounts[0]});
		const stringdOUU223 = await ETFXPoolYl4v9v2.symbol.call({from: accounts[5]});
		const booloh738eC = await ETFXPoolYl4v9v2.approve.call(addressaIbAfBq, uintjbxaUYB, {from: accounts[3]});

		assert.equal(addressHmpkyrn, 0xcd91987Db88e0D7B9aDE4b2Ea9634C89E4CB9A9b)
		assert.equal(booloh738eC, true)
		assert.equal(stringdOUU223, "FETFX")
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const uintmlnquIR = BigInt("1621")
		const addressmBk0rT0 = accounts[5]
		const addresshXO9XnI = accounts[3]
		const boolof0Nozt = await ETFXPooloHD8PAs.increaseAllowance.call(addressmBk0rT0, uintmlnquIR, {from: accounts[2]});
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addresshXO9XnI, {from: accounts[3]});

		assert.equal(boolof0Nozt, true)
		assert.equal(uint256r86rui6, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addressEWS4YOl = accounts[0]
		const addressSctUnu = accounts[3]
		const addressIHyawn1 = await ETFXPooloHD8PAs.transferOwnership.call(addressEWS4YOl, {from: accounts[0]});
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressSctUnu, {from: accounts[3]});

		await expect(ETFXPooloHD8PAs.transferOwnership.call(addressEWS4YOl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolX54SX0I = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressd2z4ku = accounts[0]
		const addressksKHqM4 = accounts[1]
		const uintArIAfTk = BigInt("2")
		const addresstsVyMk3 = accounts[1]
		const uintT2FmYUe = BigInt("1569")
		const addresscFoy5Ox = accounts[1]
		await ETFXPoolX54SX0I.nonReentrant.call({from: accounts[0]});
		const uint256VkbheI4 = await ETFXPoolX54SX0I.allowance.call(addressksKHqM4, addressd2z4ku, {from: accounts[1]});
		const boolGkLTsFa = await ETFXPoolX54SX0I.decreaseAllowance.call(addresstsVyMk3, uintArIAfTk, {from: accounts[3]});
		const boolN7lzsQj = await ETFXPoolX54SX0I.decreaseAllowance.call(addresscFoy5Ox, uintT2FmYUe, {from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const uintZSzK3DI = BigInt("1085")
		const addressPsoG5Ua = accounts[4]
		const addressbXJoVsw = accounts[3]
		await ETFXPooloHD8PAs.renounceOwnership.call({from: accounts[1]});
		const uint256IotUBqs = await ETFXPooloHD8PAs.stake.call(uintZSzK3DI, {from: accounts[3]});
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addressPsoG5Ua, {from: accounts[3]});
		const stringYfFPms0 = await ETFXPooloHD8PAs.symbol.call({from: accounts[2]});
		const addressRUUV8Qq = await ETFXPooloHD8PAs.transferOwnership.call(addressbXJoVsw, {from: accounts[3]});

		await expect(ETFXPooloHD8PAs.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloHD8PAs = await ETFXPool.new({from: accounts[1]});
		const addresszTSx16 = accounts[2]
		const uint256qgjpsAs = await ETFXPooloHD8PAs.rewardPerToken.call({from: accounts[2]});
		await ETFXPooloHD8PAs.exit.call({from: accounts[2]});
		const uint256r86rui6 = await ETFXPooloHD8PAs.balanceOf.call(addresszTSx16, {from: accounts[3]});

		assert.equal(uint256qgjpsAs, BigInt("0"))
		await expect(ETFXPooloHD8PAs.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})