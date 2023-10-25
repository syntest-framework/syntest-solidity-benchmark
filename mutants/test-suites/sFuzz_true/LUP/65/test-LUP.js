const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringIyUTbDp = "JY8CB37AKA9TzSD5dcd1pRFWAcaxEoevSUaPv56hw9FRPbTc9FcmFSNur6tpiQXksa1LYimenExfSYiLSVxAyTss0over2"
		const stringVpixmQ = "LKKeSORYrM5VOU6tQV4aZVLzO9WdLPX4Pu5woMnl"
		const uintDSYIpQP = BigInt("112")
		const LUPcfE64nk = await LUP.new(stringIyUTbDp, stringVpixmQ, uintDSYIpQP, {from: accounts[0]});
		const addressT47wBfe = accounts[4]
		const addressNMAgbUy = accounts[3]
		const addressqt47Tp1 = accounts[1]
		const uintXmYno1c = BigInt("2043")
		const addressJufYuiY = accounts[4]
		const uint256INKprgB = await LUPcfE64nk.balanceOf.call(addressT47wBfe, {from: accounts[1]});
		const uint256qodpY4P = await LUPcfE64nk.balanceOf.call(addressNMAgbUy, {from: accounts[5]});
		const stringzDHHJ1 = await LUPcfE64nk.name.call({from: accounts[1]});
		const uint256W3EqlPK = await LUPcfE64nk.balanceOf.call(addressqt47Tp1, {from: accounts[4]});
		const boolBKhX6sI = await LUPcfE64nk.unlock.call(addressJufYuiY, uintXmYno1c, {from: accounts[5]});
	});

	it('test for LUP', async () => {
		const LUPKgVfYzk = await LUP.new({from: accounts[1]});
		const boolod9UNNP = false
		const addressSWRmIX2 = accounts[5]
		const addressXzpGRKH = accounts[4]
		const addressMgLFPwu = accounts[1]
		const stringv82u3Hu = await LUPKgVfYzk.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolqBHvZ17 = await LUPKgVfYzk.freezeAccount.call(addressSWRmIX2, boolod9UNNP, {from: accounts[0]});
//		const addressakh52We = await LUPKgVfYzk.upgradeTo.call(addressXzpGRKH, {from: accounts[4]});
//		const addressMiPhFxC = await LUPKgVfYzk.upgradeTo.call(addressMgLFPwu, {from: accounts[1]});

		assert.equal(stringv82u3Hu, "LUP")
		await expect(LUPKgVfYzk.freezeAccount.call(addressSWRmIX2, boolod9UNNP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP80gxqX = await LUP.new({from: accounts[5]});
		const booluoJombD = true
		const addressoFMqQBO = accounts[4]
		const addresspdvOuTN = accounts[0]
		const addresszbEgtxJ = accounts[0]
		const addressCgyaRw9 = accounts[4]
		const uint8pJaE4RG = await LUP80gxqX.decimals.call({from: accounts[0]});
//		const boolye5qoZk = await LUP80gxqX.freezeAccount.call(addressoFMqQBO, booluoJombD, {from: accounts[3]});
//		const uint256s44usAE = await LUP80gxqX.balanceOf.call(addresspdvOuTN, {from: accounts[0]});
//		const uint256SAA48TJ = await LUP80gxqX.balanceOf.call(addresszbEgtxJ, {from: accounts[0]});
//		const addressupxKVqE = await LUP80gxqX.notFrozen.call(addressCgyaRw9, {from: accounts[1]});
//		const stringUKP84Nh = await LUP80gxqX.symbol.call({from: accounts[3]});

		assert.equal(uint8pJaE4RG, BigInt("18"))
		await expect(LUP80gxqX.freezeAccount.call(addressoFMqQBO, booluoJombD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const bool9P3b8O = false
		const addressTCxeq77 = accounts[2]
		const addressuydi0lb = accounts[1]
		const boolfJlVbJU = await LUPVpHwJac.freezeAccount.call(addressTCxeq77, bool9P3b8O, {from: accounts[3]});
		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressuydi0lb, {from: accounts[3]});

		assert.equal(boolfJlVbJU, true)
		assert.equal(uint256OMFSVY1, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const addressqG5OHyJ = accounts[1]
		const stringtf2rAmG = await LUPVpHwJac.name.call({from: accounts[2]});
		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressqG5OHyJ, {from: accounts[3]});

		assert.equal(stringtf2rAmG, "LINKUP Token")
		assert.equal(uint256OMFSVY1, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const addressQJuLAz6 = accounts[2]
		const uintMZwnv7w = BigInt("1647")
		const addressvfgJpIW = accounts[5]
		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressQJuLAz6, {from: accounts[3]});
//		const boolruGlt38 = await LUPVpHwJac.transfer.call(addressvfgJpIW, uintMZwnv7w, {from: accounts[4]});

		assert.equal(uint256OMFSVY1, BigInt("0"))
		await expect(LUPVpHwJac.transfer.call(addressvfgJpIW, uintMZwnv7w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const addressDvqzLH = accounts[3]
		const addressP13BDOB = accounts[2]
		const addressmfMbwZQ = accounts[3]
//		const addressbRk6w1O = await LUPVpHwJac.notFrozen.call(addressDvqzLH, {from: accounts[0]});
//		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressP13BDOB, {from: accounts[3]});
//		const addressCvcPgXV = await LUPVpHwJac.notFrozen.call(addressmfMbwZQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPVpHwJac.notFrozen.call(addressDvqzLH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const addressd1G5nT = accounts[2]
		const addresscmF17L = accounts[0]
		const addressEzlSi3 = accounts[3]
		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressd1G5nT, {from: accounts[3]});
		const uint256MN5f5ce = await LUPVpHwJac.balanceOf.call(addresscmF17L, {from: accounts[2]});
		const addressowKDvo7 = await LUPVpHwJac.upgradeTo.call(addressEzlSi3, {from: accounts[3]});

		assert.equal(uint256MN5f5ce, BigInt("0"))
		assert.equal(uint256OMFSVY1, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const uintxZNaJ7v = BigInt("1606")
		const uintTJ5AYO2 = BigInt("663")
		const addressBx0dpvY = accounts[3]
		const uintOdCgyAF = BigInt("1647")
		const addressnsDDQsh = accounts[5]
		const addressyZ6PL1Z = accounts[3]
		const boolJqToPFi = await LUPVpHwJac.transferWithLock.call(addressBx0dpvY, uintTJ5AYO2, uintxZNaJ7v, {from: accounts[3]});
//		const boolruGlt38 = await LUPVpHwJac.transfer.call(addressnsDDQsh, uintOdCgyAF, {from: accounts[4]});
//		const uint8zxLmby3 = await LUPVpHwJac.decimals.call({from: accounts[3]});
//		const uint256DuM0JY = await LUPVpHwJac.balanceOf.call(addressyZ6PL1Z, {from: accounts[2]});

		assert.equal(boolJqToPFi, true)
		await expect(LUPVpHwJac.transfer.call(addressnsDDQsh, uintOdCgyAF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const uintRiAm8RY = BigInt("279")
		const addressKYyf0n2 = accounts[1]
		const addressDNz6wSp = accounts[2]
		const boolFLgyo1l = false
		const addressyAOi6DH = accounts[1]
//		const booliP270Lo = await LUPVpHwJac.unlock.call(addressKYyf0n2, uintRiAm8RY, {from: accounts[3]});
//		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressDNz6wSp, {from: accounts[3]});
//		const boole2AlnyF = await LUPVpHwJac.freezeAccount.call(addressyAOi6DH, boolFLgyo1l, {from: accounts[1]});

		await expect(LUPVpHwJac.unlock.call(addressKYyf0n2, uintRiAm8RY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const addressBr9UxN = accounts[5]
		const uintv0a9hi6 = BigInt("1654")
		const addressQtEn8qp = accounts[5]
//		const addressR6QYD8 = await LUPVpHwJac.upgradeTo.call(addressBr9UxN, {from: accounts[0]});
//		const boolruGlt38 = await LUPVpHwJac.transfer.call(addressQtEn8qp, uintv0a9hi6, {from: accounts[4]});

		await expect(LUPVpHwJac.upgradeTo.call(addressBr9UxN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPzf4zbeS = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAdHGERf = accounts[0]
		const boolPTqZ0i = true
		const addresshodeBl = accounts[1]
		const addressAlzl48 = await LUPzf4zbeS.upgradeTo.call(addressAdHGERf, {from: accounts[3]});
		const uint8CObRoyf = await LUPzf4zbeS.decimals.call({from: accounts[4]});
		const strings2cLgWF = await LUPzf4zbeS.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolYoEmeOr = await LUPzf4zbeS.freezeAccount.call(addresshodeBl, boolPTqZ0i, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const uintqcRfSm = BigInt("1613")
		const uintRLbpKka = BigInt("1144")
		const addressD5TuW3M = accounts[3]
		const boolmEyOzty = false
		const addressxUAZwEQ = accounts[1]
		const uintEaauCfn = BigInt("592")
		const addressV3ewyXP = accounts[5]
		const boolB55zK7 = await LUPVpHwJac.lock.call(addressD5TuW3M, uintRLbpKka, uintqcRfSm, {from: accounts[3]});
//		const boolBMwoEUW = await LUPVpHwJac.freezeAccount.call(addressxUAZwEQ, boolmEyOzty, {from: "0x0000000000000000000000000000000000000001"});
//		const boolruGlt38 = await LUPVpHwJac.transfer.call(addressV3ewyXP, uintEaauCfn, {from: accounts[4]});

		assert.equal(boolB55zK7, true)
		await expect(LUPVpHwJac.freezeAccount.call(addressxUAZwEQ, boolmEyOzty, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVpHwJac = await LUP.new({from: accounts[3]});
		const uintHhM8ds0 = BigInt("310")
		const uintek1xegM = BigInt("1948")
		const addressi4KcuzF = accounts[0]
		const boolB1G1nVM = true
		const addressEbozpap = accounts[4]
		const uintQpaRx7N = BigInt("1166")
		const uintUKvUq6G = BigInt("445")
		const addressDvdwXh = accounts[1]
		const addressVDi7kaZ = accounts[1]
//		const boolYKK6Y4q = await LUPVpHwJac.lock.call(addressi4KcuzF, uintek1xegM, uintHhM8ds0, {from: accounts[3]});
//		const boolhKL6prS = await LUPVpHwJac.freezeAccount.call(addressEbozpap, boolB1G1nVM, {from: accounts[5]});
//		const booll3FDe0 = await LUPVpHwJac.transferWithLock.call(addressDvdwXh, uintUKvUq6G, uintQpaRx7N, {from: accounts[0]});
//		const uint256OMFSVY1 = await LUPVpHwJac.balanceOf.call(addressVDi7kaZ, {from: accounts[3]});

		await expect(LUPVpHwJac.lock.call(addressi4KcuzF, uintek1xegM, uintHhM8ds0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})