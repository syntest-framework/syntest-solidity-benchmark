const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPuW2XLqf = await LUP.new({from: accounts[4]});
		const boolBOAmwmi = true
		const addressej9f5Q = accounts[2]
		const uintRqFZbcG = BigInt("1827")
		const uintx0tOXjq = BigInt("428")
		const addressUVSE90j = accounts[3]
		const stringaKATSro = await LUPuW2XLqf.name.call({from: accounts[4]});
		const boolKycZRC8 = await LUPuW2XLqf.freezeAccount.call(addressej9f5Q, boolBOAmwmi, {from: "0x0000000000000000000000000000000000000001"});
		const boolfLVnj0k = await LUPuW2XLqf.lock.call(addressUVSE90j, uintx0tOXjq, uintRqFZbcG, {from: accounts[1]});

		assert.equal(stringaKATSro, "LINKUP Token")
		await expect(LUPuW2XLqf.freezeAccount.call(addressej9f5Q, boolBOAmwmi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPQjilYvq = await LUP.new({from: accounts[0]});
		const uintl8N7AkM = BigInt("756")
		const addressFrsq9pz = accounts[2]
		const addressrBFByK1 = accounts[2]
		const uintJgYppLW = BigInt("214")
		const uinthxZWaBs = BigInt("1447")
		const addressFxUzELu = accounts[4]
		const uintfN3cO21 = BigInt("40")
		const addresslOKNj0Z = accounts[4]
		const uinta2pafTO = BigInt("1064")
		const addressK8fNxZn = accounts[0]
		const boolzl58Htg = await LUPQjilYvq.transfer.call(addressFrsq9pz, uintl8N7AkM, {from: accounts[3]});
		const stringXYlI5sE = await LUPQjilYvq.symbol.call({from: accounts[2]});
		const addressx8BB0gA = await LUPQjilYvq.upgradeTo.call(addressrBFByK1, {from: accounts[3]});
		const boolwSWiCYO = await LUPQjilYvq.lock.call(addressFxUzELu, uinthxZWaBs, uintJgYppLW, {from: accounts[3]});
		const boolu7MpF7L = await LUPQjilYvq.unlock.call(addresslOKNj0Z, uintfN3cO21, {from: accounts[3]});
		const boolKIaFpaD = await LUPQjilYvq.transfer.call(addressK8fNxZn, uinta2pafTO, {from: accounts[2]});

		await expect(LUPQjilYvq.transfer.call(addressFrsq9pz, uintl8N7AkM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringdpnthcR = "kRJvRYq4sQmTut5LeIEMEEU3rqgai4ls3dyup31aal3YX1Y2sNsmhVB0c"
		const stringbG79eoH = "0xn920YNNDYkniLG8m1gz"
		const uintKKVk7cx = BigInt("168")
		const LUPUEqRvoh = await LUP.new(stringdpnthcR, stringbG79eoH, uintKKVk7cx, {from: accounts[3]});
		const boolKtQIiXW = true
		const addressfugr9MV = accounts[0]
		const addressJI5QeFc = accounts[0]
		const addressKDIoyBM = accounts[4]
		const boolk9dqThF = await LUPUEqRvoh.freezeAccount.call(addressfugr9MV, boolKtQIiXW, {from: accounts[4]});
		const addresshiVQFDZ = await LUPUEqRvoh.notFrozen.call(addressJI5QeFc, {from: accounts[0]});
		const stringCJiQh1 = await LUPUEqRvoh.symbol.call({from: accounts[2]});
		const uint8msWzniz = await LUPUEqRvoh.decimals.call({from: accounts[0]});
		const addressRNRkEwZ = await LUPUEqRvoh.upgradeTo.call(addressKDIoyBM, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LUP', async () => {
		const LUPQjilYvq = await LUP.new({from: accounts[0]});
		const addressemGe7Qf = accounts[4]
		const uintxSVLj1P = BigInt("756")
		const addresstSNqqdA = accounts[2]
		const addressr3VbuhY = accounts[2]
		const uintoHFARJX = BigInt("40")
		const addressgmGFiPC = accounts[4]
		const uintt1E5Aiz = BigInt("1064")
		const addressoJsWuJ = accounts[0]
		const addressNOPIQD6 = await LUPQjilYvq.notFrozen.call(addressemGe7Qf, {from: accounts[1]});
		const boolzl58Htg = await LUPQjilYvq.transfer.call(addresstSNqqdA, uintxSVLj1P, {from: accounts[3]});
		const stringXYlI5sE = await LUPQjilYvq.symbol.call({from: accounts[2]});
		const addressx8BB0gA = await LUPQjilYvq.upgradeTo.call(addressr3VbuhY, {from: accounts[3]});
		const stringx87yaac = await LUPQjilYvq.symbol.call({from: accounts[0]});
		const boolu7MpF7L = await LUPQjilYvq.unlock.call(addressgmGFiPC, uintoHFARJX, {from: accounts[3]});
		const boolKIaFpaD = await LUPQjilYvq.transfer.call(addressoJsWuJ, uintt1E5Aiz, {from: accounts[2]});

		await expect(LUPQjilYvq.notFrozen.call(addressemGe7Qf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP9nrd4B = await LUP.new({from: accounts[0]});
		const addressQkG3A6l = accounts[0]
		const addressWNoS2k6 = accounts[0]
		const addresswsbTbvC = await LUP9nrd4B.upgradeTo.call(addressQkG3A6l, {from: accounts[2]});
		const addressB4J5Av = await LUP9nrd4B.notFrozen.call(addressWNoS2k6, {from: accounts[2]});

		await expect(LUP9nrd4B.upgradeTo.call(addressQkG3A6l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPScikjUB = await LUP.new({from: accounts[4]});
		const uintIUYd2ty = BigInt("1226")
		const address3xzraQ = accounts[1]
		const uintJmxoBgc = BigInt("1395")
		const addressyuhAd2C = accounts[5]
		const uint8Y4rRVMW = await LUPScikjUB.decimals.call({from: accounts[3]});
		const stringIRXDDO8 = await LUPScikjUB.symbol.call({from: accounts[0]});
		const boolX6fnyCc = await LUPScikjUB.transfer.call(address3xzraQ, uintIUYd2ty, {from: accounts[2]});
		const boolSbEUhOr = await LUPScikjUB.unlock.call(addressyuhAd2C, uintJmxoBgc, {from: accounts[2]});
		const uint8vMpOpmG = await LUPScikjUB.decimals.call({from: accounts[0]});

		assert.equal(stringIRXDDO8, "LUP")
		assert.equal(uint8Y4rRVMW, BigInt("18"))
		await expect(LUPScikjUB.transfer.call(address3xzraQ, uintIUYd2ty, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg1gL2OV = await LUP.new({from: accounts[5]});
		const addressH0UV8E6 = accounts[0]
		const addressW3bo4T = accounts[6]
		const uinteDYB3r6 = BigInt("1952")
		const uintWdF2hwe = BigInt("1010")
		const addressmLhgKnt = accounts[0]
		const addressIEkok3C = accounts[2]
		const uint256f5UIUmW = await LUPg1gL2OV.balanceOf.call(addressH0UV8E6, {from: "0x0000000000000000000000000000000000000001"});
		const addresskrBqya5 = await LUPg1gL2OV.notFrozen.call(addressW3bo4T, {from: accounts[0]});
		const boolEVdwk5 = await LUPg1gL2OV.transferWithLock.call(addressmLhgKnt, uintWdF2hwe, uinteDYB3r6, {from: accounts[0]});
		const address7hVPdF = await LUPg1gL2OV.notFrozen.call(addressIEkok3C, {from: accounts[2]});

		assert.equal(uint256f5UIUmW, BigInt("0"))
		await expect(LUPg1gL2OV.notFrozen.call(addressW3bo4T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPusX86Hk = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSNimoT = accounts[4]
		const uintR8Hz69u = BigInt("1882")
		const uintNAV8ilP = BigInt("1258")
		const addressvOqaqJa = accounts[0]
		const addressfMBTWK4 = accounts[1]
		const addressHsntdE = accounts[3]
		const addressyVNx0FH = await LUPusX86Hk.upgradeTo.call(addressSNimoT, {from: accounts[5]});
		const uint8VpLB2i5 = await LUPusX86Hk.decimals.call({from: accounts[2]});
		const boolI8dtZi = await LUPusX86Hk.transferWithLock.call(addressvOqaqJa, uintNAV8ilP, uintR8Hz69u, {from: accounts[0]});
		const uint256G0gSILR = await LUPusX86Hk.balanceOf.call(addressfMBTWK4, {from: accounts[1]});
		const uint256pGBxgXQ = await LUPusX86Hk.balanceOf.call(addressHsntdE, {from: accounts[2]});
		const stringLXNZUUy = await LUPusX86Hk.symbol.call({from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPg1gL2OV = await LUP.new({from: accounts[5]});
		const uintNVpeBBO = BigInt("1040")
		const addressfu1D02a = accounts[1]
		const addressFuDNhLz = accounts[6]
		const uinti0f69zF = BigInt("1952")
		const uintboHaCs5 = BigInt("1010")
		const addressdqjf8Wx = accounts[1]
		const addressO3FQSOl = accounts[2]
		const boolnsNg8qS = await LUPg1gL2OV.unlock.call(addressfu1D02a, uintNVpeBBO, {from: accounts[5]});
		const addresskrBqya5 = await LUPg1gL2OV.notFrozen.call(addressFuDNhLz, {from: accounts[0]});
		const boolEVdwk5 = await LUPg1gL2OV.transferWithLock.call(addressdqjf8Wx, uintboHaCs5, uinti0f69zF, {from: accounts[0]});
		const addressF9jkwym = await LUPg1gL2OV.notFrozen.call(addressO3FQSOl, {from: accounts[4]});

		await expect(LUPg1gL2OV.unlock.call(addressfu1D02a, uintNVpeBBO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPELpFv4A = await LUP.new({from: accounts[3]});
		const addressupy4UCi = "0x0000000000000000000000000000000000000001"
		const boolzM49z3t = false
		const addressKwSo88 = accounts[3]
		const uint256YiceHfo = await LUPELpFv4A.balanceOf.call(addressupy4UCi, {from: accounts[0]});
		const boolXIbNA7l = await LUPELpFv4A.freezeAccount.call(addressKwSo88, boolzM49z3t, {from: accounts[3]});
		const uint8kRFU6fO = await LUPELpFv4A.decimals.call({from: accounts[0]});
		const stringLKQKGo4 = await LUPELpFv4A.symbol.call({from: accounts[4]});

		assert.equal(boolXIbNA7l, true)
		assert.equal(stringLKQKGo4, "LUP")
		assert.equal(uint256YiceHfo, BigInt("0"))
		assert.equal(uint8kRFU6fO, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPUBHSUj = await LUP.new({from: accounts[4]});
		const address4FvWfv = "0x0000000000000000000000000000000000000001"
		const boolRSufUjo = false
		const addressoLWxuzN = accounts[0]
		const addressu4BD0I = accounts[0]
		const addressrHVOL6E = await LUPUBHSUj.upgradeTo.call(address4FvWfv, {from: accounts[4]});
		const boolQYE4DZR = await LUPUBHSUj.freezeAccount.call(addressoLWxuzN, boolRSufUjo, {from: accounts[1]});
		const addressT11yilh = await LUPUBHSUj.notFrozen.call(addressu4BD0I, {from: accounts[0]});
		const uint8puHa8wz = await LUPUBHSUj.decimals.call({from: accounts[2]});
		const uint8vDEeqW = await LUPUBHSUj.decimals.call({from: accounts[1]});

		await expect(LUPUBHSUj.freezeAccount.call(addressoLWxuzN, boolRSufUjo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg1gL2OV = await LUP.new({from: accounts[5]});
		const addresscKHeRe = accounts[0]
		const uintUFyfDQ = BigInt("1203")
		const uintttRwrVc = BigInt("271")
		const addressT42uoGE = accounts[0]
		const boolYTfG1Ak = true
		const addresso35d7u = accounts[0]
		const uintiXErN8T = BigInt("1206")
		const addresstkVS2Dk = accounts[5]
		const uinte5Yzga0 = BigInt("1489")
		const uintbXieXhG = BigInt("107")
		const addressl0Zz0ka = accounts[4]
		const addressRK0VzB9 = accounts[3]
		const addressWvsHqRt = accounts[6]
		const addressKUfH0D3 = accounts[3]
		const uint256f5UIUmW = await LUPg1gL2OV.balanceOf.call(addresscKHeRe, {from: "0x0000000000000000000000000000000000000001"});
		const boolZznzgRJ = await LUPg1gL2OV.transferWithLock.call(addressT42uoGE, uintttRwrVc, uintUFyfDQ, {from: accounts[5]});
		const bool5Pv5kf = await LUPg1gL2OV.freezeAccount.call(addresso35d7u, boolYTfG1Ak, {from: accounts[3]});
		const boolXggGdzM = await LUPg1gL2OV.unlock.call(addresstkVS2Dk, uintiXErN8T, {from: accounts[5]});
		const boolElj7Lha = await LUPg1gL2OV.lock.call(addressl0Zz0ka, uintbXieXhG, uinte5Yzga0, {from: accounts[3]});
		const uint256GBgwrxJ = await LUPg1gL2OV.balanceOf.call(addressRK0VzB9, {from: accounts[4]});
		const addresskrBqya5 = await LUPg1gL2OV.notFrozen.call(addressWvsHqRt, {from: accounts[0]});
		const address7hVPdF = await LUPg1gL2OV.notFrozen.call(addressKUfH0D3, {from: accounts[2]});

		assert.equal(boolZznzgRJ, true)
		assert.equal(uint256f5UIUmW, BigInt("0"))
		await expect(LUPg1gL2OV.freezeAccount.call(addresso35d7u, boolYTfG1Ak, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPg1gL2OV = await LUP.new({from: accounts[5]});
		const uintN0XdBRA = BigInt("1527")
		const uintpwi9mZi = BigInt("1651")
		const addresspAxB1Oa = accounts[1]
		const addressUSMoLOT = accounts[1]
		const stringdYCJ6Fj = await LUPg1gL2OV.name.call({from: accounts[4]});
		const boolH6qbvH = await LUPg1gL2OV.lock.call(addresspAxB1Oa, uintpwi9mZi, uintN0XdBRA, {from: accounts[5]});
		const uint256f5UIUmW = await LUPg1gL2OV.balanceOf.call(addressUSMoLOT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringdYCJ6Fj, "LINKUP Token")
		await expect(LUPg1gL2OV.lock.call(addresspAxB1Oa, uintpwi9mZi, uintN0XdBRA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPEy0i0tY = await LUP.new({from: accounts[2]});
		const uintX8yQ8PG = BigInt("1793")
		const uintasanyXj = BigInt("365")
		const addressQlrVSq = accounts[2]
		const uintKMT3sgl = BigInt("1263")
		const address5ZxuQp = accounts[0]
		const boolEjWk7Qr = await LUPEy0i0tY.lock.call(addressQlrVSq, uintasanyXj, uintX8yQ8PG, {from: accounts[2]});
		const boolR6IsMnB = await LUPEy0i0tY.transfer.call(address5ZxuQp, uintKMT3sgl, {from: "0x0000000000000000000000000000000000000001"});
		const stringGVqjnZc = await LUPEy0i0tY.symbol.call({from: accounts[0]});

		assert.equal(boolEjWk7Qr, true)
		await expect(LUPEy0i0tY.transfer.call(address5ZxuQp, uintKMT3sgl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})