const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringSQ1gNmp = "XxW"
		const stringip1TyCm = "zrq4EnagyNrD1Y793y"
		const uintDvXfQR = BigInt("71")
		const NALPA3HALJ = await NAL.new(stringSQ1gNmp, stringip1TyCm, uintDvXfQR, {from: "0x0000000000000000000000000000000000000001"});
		const uintlmZgBay = BigInt("157")
		const addressJDw3JGQ = accounts[3]
		const uintYQNfWWG = BigInt("1905")
		const addresss8w6WwS = accounts[1]
		const uinttRgLL23 = BigInt("1726")
		const addressSHGAhaD = accounts[4]
		const addressGVYXAQZ = accounts[0]
		const uintk7yuLVg = BigInt("1023")
		const addressNWbwyzP = accounts[3]
		const boolF5UfzuL = await NALPA3HALJ.approve.call(addressJDw3JGQ, uintlmZgBay, {from: accounts[4]});
		const stringAO9ZxZ2 = await NALPA3HALJ.name.call({from: accounts[2]});
		const addressqDewqlc = await NALPA3HALJ.burnFrom.call(addresss8w6WwS, uintYQNfWWG, {from: accounts[0]});
		const boolDcJiPBz = await NALPA3HALJ.transferFrom.call(addressGVYXAQZ, addressSHGAhaD, uinttRgLL23, {from: accounts[2]});
		const boollllnyT = await NALPA3HALJ.increaseAllowance.call(addressNWbwyzP, uintk7yuLVg, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALqFOxWQQ = await NAL.new({from: accounts[3]});
		const uintDuQUstj = BigInt("1439")
		const addresspPXcLO = accounts[4]
		const uintJRgrvQr = BigInt("1299")
		const uintO7bukuR = BigInt("1291")
		const addresssc1NFI8 = accounts[0]
		const addressTmZxAt9 = accounts[0]
//		const boolVO4mG4M = await NALqFOxWQQ.transfer.call(addresspPXcLO, uintDuQUstj, {from: accounts[0]});
//		const boolvKvAV45 = await NALqFOxWQQ.lock.call(addresssc1NFI8, uintO7bukuR, uintJRgrvQr, {from: accounts[3]});
//		const boolxhgse7w = await NALqFOxWQQ.isAdmin.call(addressTmZxAt9, {from: accounts[4]});

		await expect(NALqFOxWQQ.transfer.call(addresspPXcLO, uintDuQUstj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressN7psRVA = accounts[2]
		const uintzgXjo9T = BigInt("981")
		const addressl0r2K6 = accounts[2]
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressN7psRVA, {from: accounts[5]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressl0r2K6, uintzgXjo9T, {from: accounts[4]});

		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.transfer.call(addressl0r2K6, uintzgXjo9T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALPLN7c4X = await NAL.new({from: accounts[0]});
		const addressKxL0XgM = accounts[3]
//		const addressSrj5Oza = await NALPLN7c4X.notFrozen.call(addressKxL0XgM, {from: accounts[2]});
//		const boolGQ8GWr = await NALPLN7c4X.paused.call({from: accounts[0]});

		await expect(NALPLN7c4X.notFrozen.call(addressKxL0XgM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH23jcdZ = await NAL.new({from: accounts[2]});
		const uintBY6GVHe = BigInt("939")
		const uinttgIL7bQ = BigInt("183")
		const addressxT0mKdk = accounts[3]
		const addresszjLMHtx = accounts[5]
		const addressFktNUbA = "0x0000000000000000000000000000000000000001"
//		const boolesfvVLL = await NALH23jcdZ.transferWithLock.call(addressxT0mKdk, uinttgIL7bQ, uintBY6GVHe, {from: accounts[1]});
//		const uint256725eKT = await NALH23jcdZ.allowance.call(addressFktNUbA, addresszjLMHtx, {from: accounts[5]});
//		const uint8XfMPI9q = await NALH23jcdZ.decimals.call({from: accounts[3]});

		await expect(NALH23jcdZ.transferWithLock.call(addressxT0mKdk, uinttgIL7bQ, uintBY6GVHe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const uintY5DeReu = BigInt("981")
		const addressHoEG2TP = accounts[3]
		const uintBySPVdL = BigInt("19")
		const addressMJSqYm9 = accounts[0]
		const uint256Dk6se11 = await NALZmAWAQz.totalSupply.call({from: accounts[4]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressHoEG2TP, uintY5DeReu, {from: accounts[4]});
//		const boolJCWJVE0 = await NALZmAWAQz.unlock.call(addressMJSqYm9, uintBySPVdL, {from: accounts[1]});

		assert.equal(uint256Dk6se11, BigInt("2000000000000000000000000000"))
		await expect(NALZmAWAQz.transfer.call(addressHoEG2TP, uintY5DeReu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressfxCVCxS = accounts[2]
		const uintphaUQja = BigInt("1928")
		const addressl3i7sPL = accounts[2]
		const uintPe2w9Pa = BigInt("981")
		const addressFLdvM2Q = accounts[2]
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressfxCVCxS, {from: accounts[5]});
//		const addressASqeQ8O = await NALZmAWAQz.burnFrom.call(addressl3i7sPL, uintphaUQja, {from: accounts[0]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressFLdvM2Q, uintPe2w9Pa, {from: accounts[4]});

		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.burnFrom.call(addressl3i7sPL, uintphaUQja, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH23jcdZ = await NAL.new({from: accounts[2]});
		const addressRnqYIqg = accounts[5]
		const addressNVBDuLV = "0x0000000000000000000000000000000000000001"
		const uint256725eKT = await NALH23jcdZ.allowance.call(addressNVBDuLV, addressRnqYIqg, {from: accounts[5]});
		const uint8XfMPI9q = await NALH23jcdZ.decimals.call({from: accounts[3]});

		assert.equal(uint256725eKT, BigInt("0"))
		assert.equal(uint8XfMPI9q, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALKj1c71a = await NAL.new({from: accounts[4]});
		const uintya1Km6Z = BigInt("935")
		const addressL8Z9TaC = accounts[2]
//		const uint2566uVTKg = await NALKj1c71a.burn.call(uintya1Km6Z, {from: accounts[0]});
//		const uint256ibhxA3u = await NALKj1c71a.balanceOf.call(addressL8Z9TaC, {from: accounts[3]});

		await expect(NALKj1c71a.burn.call(uintya1Km6Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressMt1Ce0O = accounts[2]
		const uintzMi12ve = BigInt("731")
		const addresseQMvsX8 = accounts[3]
		const uintg7KVYLt = BigInt("981")
		const addressRP4fhGA = accounts[3]
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressMt1Ce0O, {from: accounts[5]});
		const booljLniUlg = await NALZmAWAQz.approve.call(addresseQMvsX8, uintzMi12ve, {from: accounts[4]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressRP4fhGA, uintg7KVYLt, {from: accounts[4]});

		assert.equal(booljLniUlg, true)
		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.transfer.call(addressRP4fhGA, uintg7KVYLt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressERVHAMg = accounts[2]
		const uintw1Hc5q = BigInt("1662")
		const addressuIS5Ouy = accounts[2]
		const addressivRKGZ2 = accounts[1]
		const uintwy1lLmg = BigInt("956")
		const addressjw9NDsf = accounts[2]
		const addressJZrEBVa = accounts[4]
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressERVHAMg, {from: accounts[5]});
//		const boolAB3MAN7 = await NALZmAWAQz.transferFrom.call(addressivRKGZ2, addressuIS5Ouy, uintw1Hc5q, {from: accounts[0]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressjw9NDsf, uintwy1lLmg, {from: accounts[4]});
//		const addressctAqHp7 = await NALZmAWAQz.upgradeTo.call(addressJZrEBVa, {from: accounts[1]});

		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.transferFrom.call(addressivRKGZ2, addressuIS5Ouy, uintw1Hc5q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressPQbZN9w = accounts[0]
		const addresst99OZz = accounts[3]
		const uintA3aO4HL = BigInt("981")
		const addressdb966ao = accounts[2]
//		const addressVAKr5zh = await NALZmAWAQz.removeAdmin.call(addressPQbZN9w, {from: accounts[1]});
//		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addresst99OZz, {from: accounts[5]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressdb966ao, uintA3aO4HL, {from: accounts[4]});

		await expect(NALZmAWAQz.removeAdmin.call(addressPQbZN9w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressQCOu39Z = accounts[1]
		const address050Us3 = accounts[3]
		const addressVAKr5zh = await NALZmAWAQz.removeAdmin.call(addressQCOu39Z, {from: accounts[1]});
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(address050Us3, {from: accounts[5]});

		assert.equal(uint256Q6kgRSc, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const uintE5ElEf1 = BigInt("392")
		const addressiKatpcQ = accounts[2]
		const addressVMz62yA = accounts[1]
		const uinte8v6hOn = BigInt("594")
		const addresscdU2LBN = "0x0000000000000000000000000000000000000001"
		const addressD1Q2j0Y = accounts[0]
		const uintBkDIakH = BigInt("981")
		const addresskcm42kT = accounts[3]
//		const boolaWbXMpF = await NALZmAWAQz.decreaseAllowance.call(addressiKatpcQ, uintE5ElEf1, {from: accounts[4]});
//		const addressoQWDJyh = await NALZmAWAQz.transferOwnership.call(addressVMz62yA, {from: accounts[4]});
//		const boolvV0ZZlP = await NALZmAWAQz.transferFrom.call(addressD1Q2j0Y, addresscdU2LBN, uinte8v6hOn, {from: accounts[2]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addresskcm42kT, uintBkDIakH, {from: accounts[4]});

		await expect(NALZmAWAQz.decreaseAllowance.call(addressiKatpcQ, uintE5ElEf1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressFeh4NF = accounts[3]
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressFeh4NF, {from: accounts[5]});
		const stringhif4iB4 = await NALZmAWAQz.name.call({from: accounts[0]});

		assert.equal(stringhif4iB4, "Personal Token")
		assert.equal(uint256Q6kgRSc, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const uintCMcvneT = BigInt("1841")
		const addressvyJW2TS = accounts[3]
		const addresso0HfGAz = accounts[3]
		const uintxCjEMyc = BigInt("902")
		const address5WyBZl = accounts[0]
		const addresslrkFKK = accounts[1]
		const uintQd2PFJp = BigInt("956")
		const addressEOyfyLr = accounts[2]
		const boolmNGf8CP = await NALZmAWAQz.increaseAllowance.call(addressvyJW2TS, uintCMcvneT, {from: accounts[0]});
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addresso0HfGAz, {from: accounts[5]});
//		const boolLwNfkQ = await NALZmAWAQz.transferFrom.call(addresslrkFKK, address5WyBZl, uintxCjEMyc, {from: accounts[3]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressEOyfyLr, uintQd2PFJp, {from: accounts[4]});

		assert.equal(boolmNGf8CP, true)
		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.transferFrom.call(addresslrkFKK, address5WyBZl, uintxCjEMyc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressNZtCyIk = accounts[3]
		const uintsNArOHO = BigInt("1719")
		const addressTAm2LCo = accounts[2]
		const booliQ2an7 = await NALZmAWAQz.paused.call({from: accounts[2]});
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressNZtCyIk, {from: accounts[5]});
//		const addressaL0ZDos = await NALZmAWAQz.burnFrom.call(addressTAm2LCo, uintsNArOHO, {from: accounts[0]});

		assert.equal(booliQ2an7, false)
		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.burnFrom.call(addressTAm2LCo, uintsNArOHO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const uint3um80H = BigInt("981")
		const addressuNk5UEE = accounts[2]
//		await NALZmAWAQz.renounceAdmin.call({from: accounts[0]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressuNk5UEE, uint3um80H, {from: accounts[4]});

		await expect(NALZmAWAQz.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressoIPKVVF = accounts[1]
		const addresst0RHKah = accounts[3]
		const addressbpuJ2h = await NALZmAWAQz.transferOwnership.call(addressoIPKVVF, {from: accounts[1]});
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addresst0RHKah, {from: accounts[5]});

		assert.equal(uint256Q6kgRSc, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALVbr4Ucu = await NAL.new({from: accounts[5]});
		const addressDnTNQC2 = accounts[1]
		const addressVcrpJXM = await NALVbr4Ucu.addAdmin.call(addressDnTNQC2, {from: accounts[5]});
		const uint8uBVsFkz = await NALVbr4Ucu.decimals.call({from: accounts[1]});

		assert.equal(uint8uBVsFkz, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addresswn6U27Z = accounts[3]
		const uintADZMWAn = BigInt("138")
		const uintvcHFQKe = BigInt("922")
		const addressNm9bTy9 = accounts[4]
//		await NALZmAWAQz.pause.call({from: accounts[1]});
//		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addresswn6U27Z, {from: accounts[5]});
//		const boolWaT1jTt = await NALZmAWAQz.transferWithLock.call(addressNm9bTy9, uintvcHFQKe, uintADZMWAn, {from: accounts[1]});

		await expect(NALZmAWAQz.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressmdRnKlD = accounts[2]
		const addresswSAHgxp = accounts[2]
		const addressGcttyRD = accounts[3]
		const uintA0QPZf9 = BigInt("1915")
		const addressTQfkDrV = accounts[4]
		const addressrwl4vxN = accounts[3]
		const addressttk4KoH = accounts[5]
		const booly0Gim60 = await NALZmAWAQz.freezeAccount.call(addressmdRnKlD, {from: accounts[1]});
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addresswSAHgxp, {from: accounts[5]});
//		const addressO53uEKf = await NALZmAWAQz.upgradeTo.call(addressGcttyRD, {from: accounts[0]});
//		const boolqEwBVis = await NALZmAWAQz.transferFrom.call(addressrwl4vxN, addressTQfkDrV, uintA0QPZf9, {from: accounts[0]});
//		const addressKMruVGr = await NALZmAWAQz.upgradeTo.call(addressttk4KoH, {from: accounts[5]});

		assert.equal(booly0Gim60, true)
		assert.equal(uint256Q6kgRSc, BigInt("0"))
		await expect(NALZmAWAQz.upgradeTo.call(addressGcttyRD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const uintk5e40Xw = BigInt("1369")
		const addressihqYrot = accounts[0]
		const uintdoExYc6 = BigInt("1145")
		const addressdEznpz6 = accounts[0]
		const uintUBFgAZV = BigInt("965")
		const addressyvL17vq = accounts[2]
//		const booltgOVnWL = await NALZmAWAQz.unlock.call(addressihqYrot, uintk5e40Xw, {from: accounts[1]});
//		const addressB6xldWd = await NALZmAWAQz.burnFrom.call(addressdEznpz6, uintdoExYc6, {from: accounts[5]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressyvL17vq, uintUBFgAZV, {from: accounts[4]});

		await expect(NALZmAWAQz.unlock.call(addressihqYrot, uintk5e40Xw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressHQoDTC7 = accounts[2]
		const addressARLAL0z = accounts[3]
		const uintWHjkhUs = BigInt("981")
		const addressLxybsjk = accounts[3]
		const stringGfoshxS = await NALZmAWAQz.symbol.call({from: accounts[2]});
		const uint256KVrIcBx = await NALZmAWAQz.allowance.call(addressARLAL0z, addressHQoDTC7, {from: accounts[4]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressLxybsjk, uintWHjkhUs, {from: accounts[4]});

		assert.equal(stringGfoshxS, "NAL")
		assert.equal(uint256KVrIcBx, BigInt("0"))
		await expect(NALZmAWAQz.transfer.call(addressLxybsjk, uintWHjkhUs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressinhAVfy = accounts[3]
		const addressvBmgT9 = accounts[1]
		const uint256Q6kgRSc = await NALZmAWAQz.balanceOf.call(addressinhAVfy, {from: accounts[5]});
		const boolkCIgXJY = await NALZmAWAQz.isOwner.call(addressvBmgT9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkCIgXJY, true)
		assert.equal(uint256Q6kgRSc, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALSX81GN = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbz4nsy = BigInt("2032")
		const addressjNRX2Ky = accounts[4]
		const addressvGEcaK5 = accounts[4]
		const bool5ofhnl = await NALSX81GN.transfer.call(addressjNRX2Ky, uintbz4nsy, {from: accounts[0]});
		const addressRFk6cHh = await NALSX81GN.notFrozen.call(addressvGEcaK5, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const uintEAspfA4 = BigInt("231")
		const uintXDLYbrJ = BigInt("1612")
		const addressL89l9ti = accounts[1]
		const addressi7C15cX = accounts[4]
		const uintEQBrIfc = BigInt("1128")
		const addressDxDC86 = accounts[0]
		const addressO8scnpo = accounts[2]
		const addressaX1EWoo = accounts[2]
		const boolMDGQXBv = await NALZmAWAQz.lock.call(addressL89l9ti, uintXDLYbrJ, uintEAspfA4, {from: accounts[1]});
//		const boolkMae4cZ = await NALZmAWAQz.unfreezeAccount.call(addressi7C15cX, {from: accounts[2]});
//		const boolstC5Swz = await NALZmAWAQz.transferFrom.call(addressO8scnpo, addressDxDC86, uintEQBrIfc, {from: accounts[4]});
//		const boolnAziQUC = await NALZmAWAQz.unfreezeAccount.call(addressaX1EWoo, {from: accounts[4]});

		assert.equal(boolMDGQXBv, true)
		await expect(NALZmAWAQz.unfreezeAccount.call(addressi7C15cX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressDqam1UV = accounts[1]
		const addressQvr7wro = accounts[4]
		const uintqzxnUb6 = BigInt("1114")
		const addressscSnCAL = accounts[3]
		const addressCx5PuR5 = accounts[2]
		const uintKCKU0LH = BigInt("964")
		const addressoPaoZsE = accounts[2]
		const boolYGRy4M8 = await NALZmAWAQz.isOwner.call(addressDqam1UV, {from: accounts[2]});
		const addressyFJp22A = await NALZmAWAQz.upgradeTo.call(addressQvr7wro, {from: accounts[1]});
//		const boolmxVWDTs = await NALZmAWAQz.transferFrom.call(addressCx5PuR5, addressscSnCAL, uintqzxnUb6, {from: "0x0000000000000000000000000000000000000001"});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addressoPaoZsE, uintKCKU0LH, {from: accounts[4]});

		assert.equal(boolYGRy4M8, true)
		await expect(NALZmAWAQz.transferFrom.call(addressCx5PuR5, addressscSnCAL, uintqzxnUb6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZmAWAQz = await NAL.new({from: accounts[1]});
		const addressJkCu4Y4 = accounts[0]
		const uintbiWIJz9 = BigInt("981")
		const addresswvmRg51 = accounts[3]
//		const boolnEJTmXu = await NALZmAWAQz.unfreezeAccount.call(addressJkCu4Y4, {from: accounts[1]});
//		const stringzlQnUlI = await NALZmAWAQz.name.call({from: accounts[4]});
//		const booltmku1Rn = await NALZmAWAQz.transfer.call(addresswvmRg51, uintbiWIJz9, {from: accounts[4]});

		await expect(NALZmAWAQz.unfreezeAccount.call(addressJkCu4Y4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})