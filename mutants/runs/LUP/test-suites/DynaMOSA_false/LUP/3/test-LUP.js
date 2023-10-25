const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringMehlFyi = "eEE1ZTy6BAIwd2t5E4czqVMR1W4Lyvcf4FtSdiG75kUdSab88qTBsCNomlweev8EmS82NaTUH3j3oJY4mCdMPVIidhB2oh"
		const stringeFmJPXx = "3anADf7wIC4ndq5v5xLWJn9V6X2Ai4eWzh3EhrWODcVnvvaoQL"
		const uinthetPA0i = BigInt("203")
		const LUPjXKgU86 = await LUP.new(stringMehlFyi, stringeFmJPXx, uinthetPA0i, {from: accounts[0]});
		const uintdgQK4I = BigInt("1797")
		const uintH8AYMzP = BigInt("367")
		const addressdBSNb1O = accounts[4]
		const boolOhvixrj = true
		const addressM2goB7s = accounts[1]
		const addressQEZselQ = accounts[5]
		const uintWlPwnja = BigInt("916")
		const uintMaQRWwJ = BigInt("798")
		const addressebeFoD8 = accounts[3]
		const uintJqbQw9 = BigInt("167")
		const uintzis8ins = BigInt("1301")
		const addressK9HJy1w = accounts[4]
		const boolbdDOM1 = await LUPjXKgU86.lock.call(addressdBSNb1O, uintH8AYMzP, uintdgQK4I, {from: accounts[1]});
		const uint8qfxeYKE = await LUPjXKgU86.decimals.call({from: accounts[4]});
		const booldwhTWGo = await LUPjXKgU86.freezeAccount.call(addressM2goB7s, boolOhvixrj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jmGoWge = await LUPjXKgU86.balanceOf.call(addressQEZselQ, {from: accounts[5]});
		const boolPZTupxl = await LUPjXKgU86.transferWithLock.call(addressebeFoD8, uintMaQRWwJ, uintWlPwnja, {from: accounts[3]});
		const boolq5Zp8Kz = await LUPjXKgU86.transferWithLock.call(addressK9HJy1w, uintzis8ins, uintJqbQw9, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPGCwaEZ8 = await LUP.new({from: accounts[3]});
		const uintIU1Jaul = BigInt("1190")
		const uintNYvmAqU = BigInt("1871")
		const addressIZ6i2GG = accounts[3]
		const uint8MA9dZkr = await LUPGCwaEZ8.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBfWACJZ = await LUPGCwaEZ8.transferWithLock.call(addressIZ6i2GG, uintNYvmAqU, uintIU1Jaul, {from: accounts[0]});
		const stringVdYxkDb = await LUPGCwaEZ8.symbol.call({from: accounts[3]});

		assert.equal(uint8MA9dZkr, BigInt("18"))
		await expect(LUPGCwaEZ8.transferWithLock.call(addressIZ6i2GG, uintNYvmAqU, uintIU1Jaul, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPit76fNl = await LUP.new({from: accounts[1]});
		const addressdVlU1ak = "0x0000000000000000000000000000000000000001"
		const uintbLe74hA = BigInt("218")
		const uintKospVJY = BigInt("1163")
		const addressXnfEBq2 = accounts[2]
		const uintsqtVEiU = BigInt("1873")
		const uintp85FQ9I = BigInt("676")
		const addressWu7cBPT = accounts[0]
		const addressVJjfrc = await LUPit76fNl.upgradeTo.call(addressdVlU1ak, {from: "0x0000000000000000000000000000000000000001"});
		const boolbgRPJCH = await LUPit76fNl.lock.call(addressXnfEBq2, uintKospVJY, uintbLe74hA, {from: accounts[1]});
		const boolZj0zlFS = await LUPit76fNl.transferWithLock.call(addressWu7cBPT, uintp85FQ9I, uintsqtVEiU, {from: accounts[5]});

		await expect(LUPit76fNl.upgradeTo.call(addressdVlU1ak, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPefNQimn = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const booll2z7Hha = false
		const addressRNZOAER = "0x0000000000000000000000000000000000000001"
		const uintlX4ZiIJ = BigInt("744")
		const uintpM5nul = BigInt("642")
		const addressA6Zb21o = accounts[3]
		const uint8sVm42ZB = await LUPefNQimn.decimals.call({from: accounts[1]});
		const boolzGQrN1L = await LUPefNQimn.freezeAccount.call(addressRNZOAER, booll2z7Hha, {from: accounts[1]});
		const boolYXU24u7 = await LUPefNQimn.lock.call(addressA6Zb21o, uintpM5nul, uintlX4ZiIJ, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPAZ7NVij = await LUP.new({from: accounts[4]});
		const boolKUDss3D = true
		const addressLHq7dv = accounts[2]
		const uintl3Pep1z = BigInt("750")
		const uintnH4usdv = BigInt("519")
		const addressQi2ELNm = accounts[1]
		const stringxGbhalw = await LUPAZ7NVij.symbol.call({from: accounts[3]});
		const stringI8JLE4Y = await LUPAZ7NVij.symbol.call({from: accounts[3]});
		const boolzCDrx9L = await LUPAZ7NVij.freezeAccount.call(addressLHq7dv, boolKUDss3D, {from: "0x0000000000000000000000000000000000000001"});
		const boolToUSo6e = await LUPAZ7NVij.lock.call(addressQi2ELNm, uintnH4usdv, uintl3Pep1z, {from: accounts[3]});
		const stringDF8pxw = await LUPAZ7NVij.name.call({from: accounts[4]});

		assert.equal(stringI8JLE4Y, "LUP")
		assert.equal(stringxGbhalw, "LUP")
		await expect(LUPAZ7NVij.freezeAccount.call(addressLHq7dv, boolKUDss3D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqCZ29bO = await LUP.new({from: accounts[3]});
		const uintoh5gVgw = BigInt("396")
		const address1mW1y5 = accounts[4]
		const stringWKXrgo = await LUPqCZ29bO.name.call({from: accounts[4]});
		const boolF1LJTfY = await LUPqCZ29bO.transfer.call(address1mW1y5, uintoh5gVgw, {from: accounts[1]});
		const stringkTYxxIF = await LUPqCZ29bO.symbol.call({from: accounts[4]});

		assert.equal(stringWKXrgo, "LINKUP Token")
		await expect(LUPqCZ29bO.transfer.call(address1mW1y5, uintoh5gVgw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqCZ29bO = await LUP.new({from: accounts[3]});
		const uintLNxW4IA = BigInt("388")
		const uintD3N0a6h = BigInt("760")
		const addressciyuboa = accounts[0]
		const uinthRHnKiF = BigInt("396")
		const addresscL7IEDX = accounts[4]
		const stringWKXrgo = await LUPqCZ29bO.name.call({from: accounts[4]});
		const boolt3qZEE = await LUPqCZ29bO.lock.call(addressciyuboa, uintD3N0a6h, uintLNxW4IA, {from: accounts[3]});
		const boolF1LJTfY = await LUPqCZ29bO.transfer.call(addresscL7IEDX, uinthRHnKiF, {from: accounts[1]});

		assert.equal(stringWKXrgo, "LINKUP Token")
		await expect(LUPqCZ29bO.lock.call(addressciyuboa, uintD3N0a6h, uintLNxW4IA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPwbsDIjN = await LUP.new({from: accounts[1]});
		const uintmf4qk3I = BigInt("1929")
		const uintq5hpzxZ = BigInt("2015")
		const addressH6FeslA = "0x0000000000000000000000000000000000000001"
		const boolcT6eAFb = await LUPwbsDIjN.transferWithLock.call(addressH6FeslA, uintq5hpzxZ, uintmf4qk3I, {from: accounts[1]});

		assert.equal(boolcT6eAFb, true)
	});

	it('test for LUP', async () => {
		const LUPK9dplvz = await LUP.new({from: accounts[1]});
		const addressUxhbBWq = accounts[1]
		const addressfd3he4K = accounts[1]
		const addressCjwgNgm = accounts[0]
		const uintyZKemAM = BigInt("1524")
		const addresswlNR80A = accounts[1]
		const uint256PNewpqR = await LUPK9dplvz.balanceOf.call(addressUxhbBWq, {from: accounts[3]});
		const addressarsppQU = await LUPK9dplvz.upgradeTo.call(addressfd3he4K, {from: accounts[5]});
		const addressREZBK0U = await LUPK9dplvz.upgradeTo.call(addressCjwgNgm, {from: "0x0000000000000000000000000000000000000001"});
		const stringD2WH2nL = await LUPK9dplvz.name.call({from: accounts[3]});
		const boole9XBpXX = await LUPK9dplvz.unlock.call(addresswlNR80A, uintyZKemAM, {from: accounts[2]});

		assert.equal(uint256PNewpqR, BigInt("50000000000000000000000000"))
		await expect(LUPK9dplvz.upgradeTo.call(addressfd3he4K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPwbsDIjN = await LUP.new({from: accounts[1]});
		const uintXOKAkZU = BigInt("1929")
		const uintD3bh4Sb = BigInt("1989")
		const addressuCkXMmW = "0x0000000000000000000000000000000000000001"
		const boolmasaPBS = false
		const addressE8o9KpF = accounts[1]
		const boolcT6eAFb = await LUPwbsDIjN.transferWithLock.call(addressuCkXMmW, uintD3bh4Sb, uintXOKAkZU, {from: accounts[1]});
		const boole1Myksz = await LUPwbsDIjN.freezeAccount.call(addressE8o9KpF, boolmasaPBS, {from: accounts[1]});

		assert.equal(boolcT6eAFb, true)
		assert.equal(boole1Myksz, true)
	});

	it('test for LUP', async () => {
		const LUPmRWXcKl = await LUP.new({from: accounts[4]});
		const boolwGaybRN = true
		const addresse52hiu = accounts[4]
		const addresscMjmI3F = accounts[0]
		const boolHq74XdZ = true
		const addressrvaZNlm = accounts[0]
		const boolhteyxtW = await LUPmRWXcKl.freezeAccount.call(addresse52hiu, boolwGaybRN, {from: accounts[4]});
		const addressi2ObKf = await LUPmRWXcKl.notFrozen.call(addresscMjmI3F, {from: accounts[3]});
		const boolB7Rxe7m = await LUPmRWXcKl.freezeAccount.call(addressrvaZNlm, boolHq74XdZ, {from: accounts[4]});

		assert.equal(boolhteyxtW, true)
		await expect(LUPmRWXcKl.notFrozen.call(addresscMjmI3F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqCZ29bO = await LUP.new({from: accounts[3]});
		const uintlCpk9Ha = BigInt("1413")
		const addressvOMGLvy = accounts[2]
		const addressplpslgG = accounts[2]
		const addressQ6iqsD8 = accounts[4]
		const uint8FVcJgm6 = await LUPqCZ29bO.decimals.call({from: accounts[3]});
		const boolzuvx0Fx = await LUPqCZ29bO.unlock.call(addressvOMGLvy, uintlCpk9Ha, {from: accounts[3]});
		const uint256Bjwn3Gd = await LUPqCZ29bO.balanceOf.call(addressplpslgG, {from: accounts[1]});
		const addressgkeoWq2 = await LUPqCZ29bO.upgradeTo.call(addressQ6iqsD8, {from: accounts[3]});

		assert.equal(uint8FVcJgm6, BigInt("18"))
		await expect(LUPqCZ29bO.unlock.call(addressvOMGLvy, uintlCpk9Ha, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqCZ29bO = await LUP.new({from: accounts[3]});
		const address55c9b1 = accounts[5]
		const addresskHqZSK2 = accounts[5]
		const addressz9HvlD5 = accounts[1]
		const addressLo82K9f = accounts[4]
		const uintwwqVpO8 = BigInt("396")
		const addressYAv5N5M = accounts[4]
		const stringWKXrgo = await LUPqCZ29bO.name.call({from: accounts[4]});
		const uint256XgUmId2 = await LUPqCZ29bO.balanceOf.call(address55c9b1, {from: accounts[3]});
		const addressiy5VEls = await LUPqCZ29bO.upgradeTo.call(addresskHqZSK2, {from: accounts[3]});
		const uint256Q6bhCdL = await LUPqCZ29bO.balanceOf.call(addressz9HvlD5, {from: accounts[3]});
		const addressSE3nvKV = await LUPqCZ29bO.upgradeTo.call(addressLo82K9f, {from: accounts[3]});
		const boolF1LJTfY = await LUPqCZ29bO.transfer.call(addressYAv5N5M, uintwwqVpO8, {from: accounts[1]});

		assert.equal(stringWKXrgo, "LINKUP Token")
		assert.equal(uint256Q6bhCdL, BigInt("0"))
		assert.equal(uint256XgUmId2, BigInt("0"))
		await expect(LUPqCZ29bO.transfer.call(addressYAv5N5M, uintwwqVpO8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})