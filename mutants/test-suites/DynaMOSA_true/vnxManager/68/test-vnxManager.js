const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerWTNMpTh = await vnxManager.new({from: accounts[1]});
		const addressBmMqaAF = await vnxManagerWTNMpTh.owner.call({from: accounts[2]});
		const boolUqVxc1 = await vnxManagerWTNMpTh.isOwner.call({from: accounts[0]});
		const addresssRpx8U7 = await vnxManagerWTNMpTh.owner.call({from: accounts[2]});
//		await vnxManagerWTNMpTh.onlyAdmin.call({from: accounts[3]});

		assert.equal(addressBmMqaAF, 0x39dfead0B3e0eA524F39D5235AA7F6d00341bbb6)
		assert.equal(addresssRpx8U7, 0x39dfead0B3e0eA524F39D5235AA7F6d00341bbb6)
		assert.equal(boolUqVxc1, false)
		await expect(vnxManagerWTNMpTh.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerBfKg4gN = await vnxManager.new({from: accounts[3]});
		const addresszIdDU8o = accounts[3]
		const uintu5kNlqw = BigInt("1212")
		const addressx8ybD3I = accounts[3]
//		const addressUMviCdq = await vnxManagerBfKg4gN.transferOwnership.call(addresszIdDU8o, {from: accounts[1]});
//		await vnxManagerBfKg4gN.renounceOwnership.call({from: accounts[1]});
//		const boolwpVpdhw = await vnxManagerBfKg4gN.hasRole.call(addressx8ybD3I, uintu5kNlqw, {from: accounts[4]});

		await expect(vnxManagerBfKg4gN.transferOwnership.call(addresszIdDU8o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWUp0tyJ = await vnxManager.new({from: accounts[0]});
		const uintfraSKwW = BigInt("229")
		const addresspcHuaXc = accounts[1]
		const stringVWEuy69 = "9o5Jk9RBP7gezKQbA3Qrvx67PN7sAdnGN3nTgGIhY1lalx4LjhcxjkXsqQlE1PrrcWyFnq"
		const uintOjLaTwo = BigInt("478")
		const addresspwlMqXo = accounts[3]
//		const addressF4If77w = await vnxManagerWUp0tyJ.addBearer.call(addresspcHuaXc, uintfraSKwW, {from: accounts[0]});
//		const uint256tgqyhQg = await vnxManagerWUp0tyJ.addRootRole.call(stringVWEuy69, {from: accounts[0]});
//		const boolvAWKUcr = await vnxManagerWUp0tyJ.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const booldFaOQNE = await vnxManagerWUp0tyJ.hasRole.call(addresspwlMqXo, uintOjLaTwo, {from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerWUp0tyJ.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerWUp0tyJ.addBearer.call(addresspcHuaXc, uintfraSKwW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUfgNbt8 = await vnxManager.new({from: accounts[0]});
		const stringZyhmjdL = "yISOTYb89b0dwEDuUwj36Jakgy27E5nzC"
		const addresspaJEKB = accounts[3]
		const addressyCpPeiT = accounts[1]
		const addressRXkMlIq = accounts[1]
		const addresss8gk6AR = accounts[1]
		const uint256AxkEZwu = await vnxManagerUfgNbt8.addRootRole.call(stringZyhmjdL, {from: accounts[1]});
		const boolGegN0xj = await vnxManagerUfgNbt8.isAdmin.call({from: accounts[3]});
//		const boolIP5BlNo = await vnxManagerUfgNbt8.transferContractOwnership.call(addressyCpPeiT, addresspaJEKB, {from: accounts[3]});
//		const boolD6zqvr8 = await vnxManagerUfgNbt8.transferContractOwnership.call(addresss8gk6AR, addressRXkMlIq, {from: accounts[4]});
//		const boollEbkCr = await vnxManagerUfgNbt8.isOwner.call({from: accounts[4]});
//		const booliXQGzEU = await vnxManagerUfgNbt8.isAdmin.call({from: accounts[0]});

		assert.equal(boolGegN0xj, false)
		assert.equal(uint256AxkEZwu, BigInt("0"))
		await expect(vnxManagerUfgNbt8.transferContractOwnership.call(addressyCpPeiT, addresspaJEKB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerB7NKxxe = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSJZyiFv = BigInt("93")
		const stringKQGN17A = "xJsgTcHuweldQGaDVIr99wHBvyhTtDRS4NECNowi"
		const addressugSExHo = accounts[4]
		const addressE9VsD5L = accounts[4]
		const uint256Zo12ujM = await vnxManagerB7NKxxe.addRole.call(stringKQGN17A, uintSJZyiFv, {from: accounts[4]});
		await vnxManagerB7NKxxe.onlyAdmin.call({from: accounts[4]});
		const boolvdEHWsZ = await vnxManagerB7NKxxe.transferContractOwnership.call(addressE9VsD5L, addressugSExHo, {from: accounts[4]});
		const uint256oczTq1k = await vnxManagerB7NKxxe.totalRoles.call({from: accounts[1]});
		const addressz0e2hYb = await vnxManagerB7NKxxe.owner.call({from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerlKUkGDu = await vnxManager.new({from: accounts[1]});
		const uintxuKH5i = BigInt("1578")
		const stringjQxYHI5 = "VG6mTrj1kgWnSnsjSfCdVVK1wjcYdki3o1NBmJY5rKqhDJjHVg"
		const boolTUhuhca = await vnxManagerlKUkGDu.isOwner.call({from: accounts[4]});
//		const uint256Zpfhjr9 = await vnxManagerlKUkGDu.addRole.call(stringjQxYHI5, uintxuKH5i, {from: accounts[2]});

		assert.equal(boolTUhuhca, false)
		await expect(vnxManagerlKUkGDu.addRole.call(stringjQxYHI5, uintxuKH5i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWUp0tyJ = await vnxManager.new({from: accounts[0]});
		const uintxCfxL7m = BigInt("229")
		const addresshYBMsmN = accounts[3]
		const stringVWEuy69 = "9o5Jk9RBP7gezKQbA3Qrvx67PN7sAdnGN3nTgGIhY1lalx4LjhcxjkXsqQlE1PrrcWyFnq"
		const uint256I8CSVEJ = await vnxManagerWUp0tyJ.totalRoles.call({from: accounts[3]});
		const booleVGpeit = await vnxManagerWUp0tyJ.isAdmin.call({from: accounts[0]});
//		const addressF4If77w = await vnxManagerWUp0tyJ.addBearer.call(addresshYBMsmN, uintxCfxL7m, {from: accounts[0]});
//		const uint256tgqyhQg = await vnxManagerWUp0tyJ.addRootRole.call(stringVWEuy69, {from: accounts[0]});

		assert.equal(booleVGpeit, true)
		assert.equal(uint256I8CSVEJ, BigInt("1"))
		await expect(vnxManagerWUp0tyJ.addBearer.call(addresshYBMsmN, uintxCfxL7m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerEaolipw = await vnxManager.new({from: accounts[3]});
		const addressNLxhNIa = accounts[4]
		const addresspVRntVQ = accounts[0]
		const addressLVyYhH1 = accounts[3]
		const uint256gNcfCWI = await vnxManagerEaolipw.totalRoles.call({from: accounts[3]});
		const addressqUtY7Ez = await vnxManagerEaolipw.transferOwnership.call(addressNLxhNIa, {from: accounts[3]});
//		const boolE02GvZK = await vnxManagerEaolipw.transferContractOwnership.call(addressLVyYhH1, addresspVRntVQ, {from: accounts[4]});
//		const boolIoVVhHP = await vnxManagerEaolipw.isAdmin.call({from: accounts[2]});

		assert.equal(uint256gNcfCWI, BigInt("1"))
		await expect(vnxManagerEaolipw.transferContractOwnership.call(addressLVyYhH1, addresspVRntVQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerRRrzIV = await vnxManager.new({from: accounts[3]});
		const uintzHkPh75 = BigInt("1916")
		const addressbiJtk7z = accounts[3]
//		const addressX8PPhuT = await vnxManagerRRrzIV.removeBearer.call(addressbiJtk7z, uintzHkPh75, {from: accounts[5]});

		await expect(vnxManagerRRrzIV.removeBearer.call(addressbiJtk7z, uintzHkPh75, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerz0AsBuR = await vnxManager.new({from: accounts[0]});
		const addressz9A663o = accounts[4]
		const addressO2XDzKy = accounts[1]
		const uint256Og10kML = await vnxManagerz0AsBuR.totalRoles.call({from: accounts[5]});
//		await vnxManagerz0AsBuR.renounceOwnership.call({from: accounts[0]});
//		const boolQqBmCTn = await vnxManagerz0AsBuR.transferContractOwnership.call(addressO2XDzKy, addressz9A663o, {from: accounts[2]});
//		await vnxManagerz0AsBuR.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256Og10kML, BigInt("1"))
		await expect(vnxManagerz0AsBuR.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerRRrzIV = await vnxManager.new({from: accounts[3]});
		const addressTe02oE = accounts[1]
		const addressXeCEVQf = accounts[1]
		const uintYcv19HQ = BigInt("1916")
		const addressCtoCyZ = accounts[4]
		const uintPesvzqw = BigInt("1059")
		const addressGpQxYGk = accounts[4]
//		const boolq0aNyLH = await vnxManagerRRrzIV.transferContractOwnership.call(addressXeCEVQf, addressTe02oE, {from: accounts[3]});
//		const addressX8PPhuT = await vnxManagerRRrzIV.removeBearer.call(addressCtoCyZ, uintYcv19HQ, {from: accounts[5]});
//		const addresslGRZuu0 = await vnxManagerRRrzIV.removeBearer.call(addressGpQxYGk, uintPesvzqw, {from: accounts[2]});

		await expect(vnxManagerRRrzIV.transferContractOwnership.call(addressXeCEVQf, addressTe02oE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerRRrzIV = await vnxManager.new({from: accounts[3]});
		const uinthHj6c2H = BigInt("0")
		const addressJiw7882 = accounts[4]
		const addressxA0Boyf = accounts[1]
		const addressnE1HDZ8 = accounts[2]
//		const addressPlyPyfM = await vnxManagerRRrzIV.removeBearer.call(addressJiw7882, uinthHj6c2H, {from: accounts[2]});
//		const booliJ17BKF = await vnxManagerRRrzIV.isOwner.call({from: accounts[3]});
//		const boolq0aNyLH = await vnxManagerRRrzIV.transferContractOwnership.call(addressnE1HDZ8, addressxA0Boyf, {from: accounts[3]});

		await expect(vnxManagerRRrzIV.removeBearer.call(addressJiw7882, uinthHj6c2H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerWUp0tyJ = await vnxManager.new({from: accounts[0]});
		const addresshidXTQA = "0x0000000000000000000000000000000000000000"
		const addressSo6e42d = accounts[3]
		const uintuXMZMvx = BigInt("639")
		const addressPt1RPt = accounts[1]
//		const boolDMTg1Z9 = await vnxManagerWUp0tyJ.transferContractOwnership.call(addressSo6e42d, addresshidXTQA, {from: accounts[0]});
//		const addressv10Kah = await vnxManagerWUp0tyJ.addBearer.call(addressPt1RPt, uintuXMZMvx, {from: accounts[2]});

		await expect(vnxManagerWUp0tyJ.transferContractOwnership.call(addressSo6e42d, addresshidXTQA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})