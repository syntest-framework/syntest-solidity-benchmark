const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const string3q5VLS = "xuLcGEfgTXge5IUxZsF59Ci5cL6NdR8ttDHkyPMgkz1HiSNSXyKqnswAp9x5nzBw9Euyv"
		const stringRxocp7h = "DAl6rxCgrrV0CaeapzGkW4UsPBURgvhem1U"
		const uint3vE2EA = BigInt("94")
		const NALjvADmo = await NAL.new(string3q5VLS, stringRxocp7h, uint3vE2EA, {from: accounts[5]});
		const uintp121oMp = BigInt("481")
		const addressnzBUwwa = accounts[2]
		const addressfllk6Fk = accounts[2]
		const uint0kVUqA = BigInt("1706")
		const addresstHkajKV = "0x0000000000000000000000000000000000000001"
		const uintFU2BfnP = BigInt("1281")
		const addressVwDl4Q4 = accounts[0]
		const boolgrAVbI5 = await NALjvADmo.approve.call(addressnzBUwwa, uintp121oMp, {from: accounts[1]});
		const booliBpD6GG = await NALjvADmo.unfreezeAccount.call(addressfllk6Fk, {from: accounts[0]});
		const boolCabbkpb = await NALjvADmo.decreaseAllowance.call(addresstHkajKV, uint0kVUqA, {from: accounts[0]});
		const boolGI55JIq = await NALjvADmo.transfer.call(addressVwDl4Q4, uintFU2BfnP, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALRErAph = await NAL.new({from: accounts[1]});
		const uintP4LLuYl = BigInt("494")
		const addressKF75xNK = accounts[1]
		const uintSJQhJtC = BigInt("409")
		const addressWAqmGP3 = accounts[3]
		const uint256V7WHiQj = await NALRErAph.totalSupply.call({from: accounts[2]});
		const boolf8vwjAg = await NALRErAph.decreaseAllowance.call(addressKF75xNK, uintP4LLuYl, {from: accounts[2]});
		const boolbUXXck2 = await NALRErAph.paused.call({from: accounts[3]});
		const boolMmmQ32n = await NALRErAph.decreaseAllowance.call(addressWAqmGP3, uintSJQhJtC, {from: accounts[5]});

		assert.equal(uint256V7WHiQj, BigInt("2000000000000000000000000000"))
		await expect(NALRErAph.decreaseAllowance.call(addressKF75xNK, uintP4LLuYl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintjEZhEqb = BigInt("1161")
		const uintHC2rSOa = BigInt("782")
		const addresskNSnXFK = accounts[4]
		const addressNSUfe6m = accounts[4]
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addresskNSnXFK, uintHC2rSOa, uintjEZhEqb, {from: accounts[3]});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressNSUfe6m, {from: accounts[3]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		assert.equal(boolJUXmcth, true)
		assert.equal(boolL3v2GxI, false)
		assert.equal(stringvAMkdQp, "Personal Token")
	});

	it('test for NAL', async () => {
		const NALOTnM2dK = await NAL.new({from: accounts[1]});
		const uintW8DdgRh = BigInt("1742")
		const addressITZ8Az2 = accounts[1]
		const uintv9F42ho = BigInt("1826")
		const addressu6U3JGq = accounts[0]
		const uint9UlPMC = BigInt("1356")
		const addressIbTsxU8 = accounts[1]
		const uintiWHuPqT = BigInt("697")
		const addressE9XyFVw = accounts[4]
		const bool78ECUn = await NALOTnM2dK.approve.call(addressITZ8Az2, uintW8DdgRh, {from: "0x0000000000000000000000000000000000000001"});
		const boolwxgjvqs = await NALOTnM2dK.decreaseAllowance.call(addressu6U3JGq, uintv9F42ho, {from: accounts[1]});
		const boolZEgKOWm = await NALOTnM2dK.transfer.call(addressIbTsxU8, uint9UlPMC, {from: accounts[4]});
		await NALOTnM2dK.onlyAdmin.call({from: accounts[1]});
		const boolC7pxvgz = await NALOTnM2dK.decreaseAllowance.call(addressE9XyFVw, uintiWHuPqT, {from: accounts[2]});

		assert.equal(bool78ECUn, true)
		await expect(NALOTnM2dK.decreaseAllowance.call(addressu6U3JGq, uintv9F42ho, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALvq5sJ7 = await NAL.new({from: accounts[0]});
		const uinto3cnyL7 = BigInt("120")
		const addressPomPyIz = accounts[4]
		const uintoXLreht = BigInt("63")
		const addresskgGaPav = accounts[0]
		const addressQa5uYJ = accounts[4]
		const boolIjAd5D3 = await NALvq5sJ7.increaseAllowance.call(addressPomPyIz, uinto3cnyL7, {from: accounts[4]});
		const boolEyY6yGd = await NALvq5sJ7.increaseAllowance.call(addresskgGaPav, uintoXLreht, {from: "0x0000000000000000000000000000000000000001"});
		const addressNFNX7v7 = await NALvq5sJ7.transferOwnership.call(addressQa5uYJ, {from: accounts[3]});
		const stringG63GcUa = await NALvq5sJ7.name.call({from: accounts[1]});

		assert.equal(boolEyY6yGd, true)
		assert.equal(boolIjAd5D3, true)
		await expect(NALvq5sJ7.transferOwnership.call(addressQa5uYJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintjCVkWn = BigInt("1161")
		const uintnly52sM = BigInt("782")
		const addressxecHBvr = accounts[4]
		const uintJ2Wkj8V = BigInt("1216")
		const addressMvOm5OW = accounts[3]
		const addressLtE3e8 = accounts[4]
		const addressc3JxJnT = accounts[5]
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addressxecHBvr, uintnly52sM, uintjCVkWn, {from: accounts[3]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addressLtE3e8, addressMvOm5OW, uintJ2Wkj8V, {from: "0x0000000000000000000000000000000000000001"});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressc3JxJnT, {from: accounts[3]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		assert.equal(boolJUXmcth, true)
		await expect(NALl9c1B9.transferFrom.call(addressLtE3e8, addressMvOm5OW, uintJ2Wkj8V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUQN5BvE = await NAL.new({from: accounts[1]});
		const uint256OJUCQb = await NALUQN5BvE.totalSupply.call({from: accounts[4]});
		await NALUQN5BvE.renounceAdmin.call({from: accounts[5]});

		assert.equal(uint256OJUCQb, BigInt("2000000000000000000000000000"))
		await expect(NALUQN5BvE.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintRt83zv0 = BigInt("912")
		const addressfFW4bTx = accounts[2]
		const uintrLZqJRY = BigInt("1161")
		const uintGPbXdxB = BigInt("782")
		const addressvrtRDNY = accounts[4]
		const uintjZJTMQz = BigInt("1297")
		const addressg2pGr9h = "0x0000000000000000000000000000000000000001"
		const uintR0jGUxE = BigInt("1216")
		const addressayOWIpu = accounts[4]
		const addresszoHyEfW = accounts[4]
		const addresscz7nBJm = accounts[5]
		const addressx386y4e = await NALl9c1B9.burnFrom.call(addressfFW4bTx, uintRt83zv0, {from: accounts[2]});
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addressvrtRDNY, uintGPbXdxB, uintrLZqJRY, {from: accounts[3]});
		const boolQMH8EIF = await NALl9c1B9.decreaseAllowance.call(addressg2pGr9h, uintjZJTMQz, {from: accounts[4]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addresszoHyEfW, addressayOWIpu, uintR0jGUxE, {from: "0x0000000000000000000000000000000000000001"});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addresscz7nBJm, {from: accounts[3]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		await expect(NALl9c1B9.burnFrom.call(addressfFW4bTx, uintRt83zv0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintXVZkVce = BigInt("1161")
		const uintkiGJLWn = BigInt("779")
		const addressA3Wxim = accounts[4]
		const uintzWgnQJD = BigInt("1216")
		const addresscqBidXS = accounts[3]
		const addressR9OxfSl = accounts[4]
		const addresseFKRCYS = accounts[5]
		await NALl9c1B9.onlyAdmin.call({from: accounts[0]});
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addressA3Wxim, uintkiGJLWn, uintXVZkVce, {from: accounts[3]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addressR9OxfSl, addresscqBidXS, uintzWgnQJD, {from: "0x0000000000000000000000000000000000000001"});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addresseFKRCYS, {from: accounts[3]});
		await NALl9c1B9.whenNotPaused.call({from: accounts[1]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		await expect(NALl9c1B9.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintJApyDhE = BigInt("1161")
		const uintuAvLcMq = BigInt("782")
		const addressPWcR4F = accounts[4]
		const addressgfGWFL6 = accounts[4]
		const uintpxJazI = BigInt("1216")
		const addresspRVO8Rl = accounts[4]
		const addressECPMmHx = accounts[4]
		const addressH2ac1Ly = accounts[5]
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addressPWcR4F, uintuAvLcMq, uintJApyDhE, {from: accounts[3]});
		const booll0wOto0 = await NALl9c1B9.paused.call({from: accounts[2]});
		const addressVtUZNkZ = await NALl9c1B9.transferOwnership.call(addressgfGWFL6, {from: accounts[4]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addressECPMmHx, addresspRVO8Rl, uintpxJazI, {from: "0x0000000000000000000000000000000000000001"});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressH2ac1Ly, {from: accounts[3]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		assert.equal(boolJUXmcth, true)
		assert.equal(booll0wOto0, false)
		await expect(NALl9c1B9.transferOwnership.call(addressgfGWFL6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintiY7nLLH = BigInt("1161")
		const uintHAYqTBY = BigInt("782")
		const addressaRh7mc6 = accounts[4]
		const uintWiFRX2s = BigInt("1216")
		const addressMGrmmbK = accounts[3]
		const addresslnlCpKM = accounts[5]
		const addresspfNQ8uZ = accounts[5]
		const addressL8Xvh6d = accounts[0]
		await NALl9c1B9.pause.call({from: accounts[3]});
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addressaRh7mc6, uintHAYqTBY, uintiY7nLLH, {from: accounts[3]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addresslnlCpKM, addressMGrmmbK, uintWiFRX2s, {from: "0x0000000000000000000000000000000000000001"});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addresspfNQ8uZ, {from: accounts[3]});
		const uint256Xxu9u2 = await NALl9c1B9.balanceOf.call(addressL8Xvh6d, {from: accounts[1]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		await expect(NALl9c1B9.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4flWk0 = await NAL.new({from: accounts[2]});
		const uintR42TPEF = BigInt("290")
		const uintPa8qTDO = BigInt("1033")
		const addressm9Y7Kzm = accounts[4]
		const addressC9ak0Cl = accounts[2]
		const uintvxsaXb = BigInt("1297")
		const uintwYbch3F = BigInt("1070")
		const addressEjdM81g = accounts[4]
		const uint256Fx24AC2 = await NALm4flWk0.burn.call(uintR42TPEF, {from: accounts[4]});
		const boolVZF7K3q = await NALm4flWk0.transferFrom.call(addressC9ak0Cl, addressm9Y7Kzm, uintPa8qTDO, {from: accounts[2]});
		await NALm4flWk0.whenNotPaused.call({from: accounts[3]});
		const boolVGWwzX2 = await NALm4flWk0.lock.call(addressEjdM81g, uintwYbch3F, uintvxsaXb, {from: accounts[3]});

		await expect(NALm4flWk0.burn.call(uintR42TPEF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const addressWXcK9FN = accounts[5]
		const uintSV76Lg = BigInt("1161")
		const uintr3ehWkC = BigInt("782")
		const addressNDSLyzY = accounts[4]
		const uintpXEk3Cd = BigInt("1564")
		const addressOiohGQ = accounts[2]
		const uintPsYla9P = BigInt("1216")
		const addressSHpR9JL = accounts[3]
		const addressCNavtlY = accounts[4]
		const addressAj9urGr = accounts[5]
		const uint256DThlC8p = await NALl9c1B9.balanceOf.call(addressWXcK9FN, {from: accounts[2]});
		const boolJUXmcth = await NALl9c1B9.transferWithLock.call(addressNDSLyzY, uintr3ehWkC, uintSV76Lg, {from: accounts[3]});
		const boolZ4uB9c = await NALl9c1B9.transfer.call(addressOiohGQ, uintpXEk3Cd, {from: accounts[0]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addressCNavtlY, addressSHpR9JL, uintPsYla9P, {from: "0x0000000000000000000000000000000000000001"});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressAj9urGr, {from: accounts[3]});
		const stringvAMkdQp = await NALl9c1B9.name.call({from: accounts[1]});

		assert.equal(boolJUXmcth, true)
		assert.equal(uint256DThlC8p, BigInt("0"))
		await expect(NALl9c1B9.transfer.call(addressOiohGQ, uintpXEk3Cd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALhLtYMLx = await NAL.new({from: accounts[2]});
		const addressZup8Wcw = accounts[2]
		const uintWElKKHZ = BigInt("1032")
		const addressHQhzGut = accounts[0]
		const uintAPHey3i = BigInt("793")
		const addressQm1DgI6 = accounts[5]
		const addressp9hivSe = accounts[0]
		const bool0TA4cQ = await NALhLtYMLx.unfreezeAccount.call(addressZup8Wcw, {from: accounts[2]});
		await NALhLtYMLx.onlyAdmin.call({from: accounts[1]});
		const bool4Sbes7 = await NALhLtYMLx.paused.call({from: accounts[3]});
		const booljLoMbkY = await NALhLtYMLx.transfer.call(addressHQhzGut, uintWElKKHZ, {from: accounts[3]});
		const boolklny9xN = await NALhLtYMLx.transferFrom.call(addressp9hivSe, addressQm1DgI6, uintAPHey3i, {from: accounts[5]});

		await expect(NALhLtYMLx.unfreezeAccount.call(addressZup8Wcw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const addressw6raJA = accounts[5]
		const addresst6Xgq9T = accounts[4]
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressw6raJA, {from: accounts[3]});
		const uint8RFI1R0h = await NALl9c1B9.decimals.call({from: accounts[4]});
		const uint256xZtXzar = await NALl9c1B9.balanceOf.call(addresst6Xgq9T, {from: accounts[4]});

		assert.equal(boolL3v2GxI, false)
		assert.equal(uint256xZtXzar, BigInt("0"))
		assert.equal(uint8RFI1R0h, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALRSb3zl = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqSp0GdK = BigInt("1476")
		const addressS06HfjC = accounts[2]
		const boolXzRqQAy = await NALRSb3zl.approve.call(addressS06HfjC, uintqSp0GdK, {from: accounts[1]});
		await NALRSb3zl.pause.call({from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const addressUnsaTkL = accounts[6]
		const addressH9wx6tp = accounts[2]
		const uintpz8Z5YW = BigInt("58")
		const addresscSzZHpA = accounts[3]
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressUnsaTkL, {from: accounts[3]});
		const addressslC9B2T = await NALl9c1B9.transferOwnership.call(addressH9wx6tp, {from: accounts[3]});
		const boolTNGpe2L = await NALl9c1B9.approve.call(addresscSzZHpA, uintpz8Z5YW, {from: accounts[2]});

		assert.equal(boolL3v2GxI, false)
		assert.equal(boolTNGpe2L, true)
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const addressqmTeySw = accounts[5]
		const addressQiaKpe = accounts[2]
		const uintBPfJMqZ = BigInt("1258")
		const addressuQfSsQT = accounts[3]
		const addressfW3gSTB = accounts[4]
		const addressDFMEn7O = accounts[4]
		const addressTNzcH9Y = accounts[1]
		const addressBXZ2n16 = accounts[5]
		const uint256RkE5GEp = await NALl9c1B9.allowance.call(addressQiaKpe, addressqmTeySw, {from: accounts[2]});
		const boolhL9GBMN = await NALl9c1B9.transferFrom.call(addressfW3gSTB, addressuQfSsQT, uintBPfJMqZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolKuamVJj = await NALl9c1B9.freezeAccount.call(addressDFMEn7O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256a7WsAM4 = await NALl9c1B9.balanceOf.call(addressTNzcH9Y, {from: accounts[5]});
		const boolL3v2GxI = await NALl9c1B9.isOwner.call(addressBXZ2n16, {from: accounts[3]});

		assert.equal(uint256RkE5GEp, BigInt("0"))
		await expect(NALl9c1B9.transferFrom.call(addressfW3gSTB, addressuQfSsQT, uintBPfJMqZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintTGNSEIL = BigInt("630")
		const addressdyH4vJ6 = accounts[3]
		const addressDJHIMRv = accounts[2]
		const addressDO2d2jW = accounts[4]
		const uintKmuYMKb = BigInt("708")
		const addressbgfaXNl = accounts[1]
		const addressgrvjx4R = "0x0000000000000000000000000000000000000001"
		const address7gAih4 = accounts[3]
		const stringHuibL1 = await NALl9c1B9.symbol.call({from: accounts[1]});
		const booljgpGhcE = await NALl9c1B9.transferFrom.call(addressDJHIMRv, addressdyH4vJ6, uintTGNSEIL, {from: accounts[0]});
		const boolHvtgvg = await NALl9c1B9.isAdmin.call(addressDO2d2jW, {from: accounts[2]});
		const boolAO9kVx3 = await NALl9c1B9.transferFrom.call(addressgrvjx4R, addressbgfaXNl, uintKmuYMKb, {from: accounts[3]});
		const uint256xZtXzar = await NALl9c1B9.balanceOf.call(address7gAih4, {from: accounts[4]});

		assert.equal(stringHuibL1, "NAL")
		await expect(NALl9c1B9.transferFrom.call(addressDJHIMRv, addressdyH4vJ6, uintTGNSEIL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const addressNl9ZiAV = accounts[1]
		const uintT1E6T5v = BigInt("1268")
		const addressiWiqE5Y = accounts[0]
		const addressbCGyEhc = "0x0000000000000000000000000000000000000001"
		const addressGTiFaee = await NALl9c1B9.addAdmin.call(addressNl9ZiAV, {from: accounts[3]});
		const boolAaYgoe4 = await NALl9c1B9.transfer.call(addressiWiqE5Y, uintT1E6T5v, {from: accounts[2]});
		const boolb0O85pS = await NALl9c1B9.isOwner.call(addressbCGyEhc, {from: accounts[0]});

		await expect(NALl9c1B9.transfer.call(addressiWiqE5Y, uintT1E6T5v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const addressDTgUG2l = accounts[4]
		const addressMeMSpE1 = accounts[3]
		const boolevV8dK9 = await NALl9c1B9.freezeAccount.call(addressDTgUG2l, {from: accounts[3]});
		const stringw7U3oz = await NALl9c1B9.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xZtXzar = await NALl9c1B9.balanceOf.call(addressMeMSpE1, {from: accounts[4]});

		assert.equal(boolevV8dK9, true)
		assert.equal(stringw7U3oz, "Personal Token")
		assert.equal(uint256xZtXzar, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALl9c1B9 = await NAL.new({from: accounts[3]});
		const uintHI9kbW5 = BigInt("920")
		const addressJAgXklR = accounts[2]
		const uintWLw27pZ = BigInt("1293")
		const addressp9jqIJz = accounts[0]
		await NALl9c1B9.renounceAdmin.call({from: accounts[3]});
		const boolEYvihIN = await NALl9c1B9.transfer.call(addressJAgXklR, uintHI9kbW5, {from: accounts[3]});
		const boolAaYgoe4 = await NALl9c1B9.transfer.call(addressp9jqIJz, uintWLw27pZ, {from: accounts[2]});

		await expect(NALl9c1B9.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})