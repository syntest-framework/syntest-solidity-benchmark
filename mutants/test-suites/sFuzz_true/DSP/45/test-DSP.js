const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringbFvD6B5 = "sCHypDilAMq1kDzT4RHjwtGCpPwxPQk3SkaD6W7"
		const stringrE9Srr = "7efL36ImRLiOWwQXmA4W22m63fIv8pj"
		const uintLTIgXTd = BigInt("33")
		const DSPPQrMEbT = await DSP.new(stringbFvD6B5, stringrE9Srr, uintLTIgXTd, {from: accounts[4]});
		const addressH2GmWH8 = accounts[2]
		const addressmpPPS3y = accounts[4]
		const address8XC9XI = accounts[1]
		const uintZjefh6H = BigInt("1941")
		const addressZq9LUqr = accounts[4]
		const uintHILzLmA = BigInt("1017")
		const addressPvfL1af = accounts[3]
		const stringoy02Be8 = await DSPPQrMEbT.name.call({from: accounts[4]});
		await DSPPQrMEbT.unpause.call({from: accounts[1]});
		const uint256AsQJrWD = await DSPPQrMEbT.balanceOf.call(addressH2GmWH8, {from: accounts[4]});
		const uint256GGWtWu6 = await DSPPQrMEbT.allowance.call(address8XC9XI, addressmpPPS3y, {from: accounts[1]});
		const boolS4J8BA = await DSPPQrMEbT.mint.call(addressZq9LUqr, uintZjefh6H, {from: accounts[0]});
		const boolTt42qD6 = await DSPPQrMEbT.increaseAllowance.call(addressPvfL1af, uintHILzLmA, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const uintsH37pI = BigInt("1547")
		const addressa9umrZS = accounts[1]
		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addressa9umrZS, uintsH37pI, {from: accounts[2]});
//		await DSPYlJNuwx.onlyNewOwner.call({from: accounts[3]});
//		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		assert.equal(boolSbna2Cf, true)
		await expect(DSPYlJNuwx.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const uint6cocMC = BigInt("1213")
		const addressqVxlEVC = accounts[1]
		const uintSUXp29 = BigInt("1499")
		const addressOqwANYl = accounts[0]
		const addressa7NcvxE = accounts[0]
		const uintSlm9CBA = BigInt("1710")
		const addressRNW82ya = accounts[1]
		const boole9lFZKu = await DSPuTgYg2A.approve.call(addressqVxlEVC, uint6cocMC, {from: accounts[1]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressa7NcvxE, addressOqwANYl, uintSUXp29, {from: accounts[0]});
//		await DSPuTgYg2A.unpause.call({from: accounts[2]});
//		const boollQB20QF = await DSPuTgYg2A.mint.call(addressRNW82ya, uintSlm9CBA, {from: accounts[0]});

		assert.equal(boole9lFZKu, true)
		await expect(DSPuTgYg2A.transferFrom.call(addressa7NcvxE, addressOqwANYl, uintSUXp29, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPBbYW0MY = await DSP.new({from: accounts[3]});
		const uintb8aB9lf = BigInt("148")
		const addressGUEUP2G = accounts[0]
		const uintZJM4vKB = BigInt("373")
		const addressGRK49NA = accounts[2]
		const uintc6RzUHb = BigInt("966")
		const addressN1JpZdg = "0x0000000000000000000000000000000000000001"
		const addressJgbUoUP = accounts[4]
		const uintjCd2OUX = BigInt("766")
		const addressRMkO8r0 = accounts[4]
		const addressrqZx392 = "0x0000000000000000000000000000000000000001"
		const uintGo293NA = BigInt("895")
		const uintUGTnSbG = BigInt("742")
		const addressdseGZZy = accounts[4]
		const boolkrwnseE = await DSPBbYW0MY.mint.call(addressGUEUP2G, uintb8aB9lf, {from: accounts[3]});
//		const boolK4TxlIa = await DSPBbYW0MY.decreaseAllowance.call(addressGRK49NA, uintZJM4vKB, {from: accounts[1]});
//		const booltla25K = await DSPBbYW0MY.transferFrom.call(addressJgbUoUP, addressN1JpZdg, uintc6RzUHb, {from: accounts[3]});
//		const boolmwoKmSN = await DSPBbYW0MY.transferFrom.call(addressrqZx392, addressRMkO8r0, uintjCd2OUX, {from: accounts[0]});
//		await DSPBbYW0MY.renouncePauser.call({from: accounts[3]});
//		const boolIru17p = await DSPBbYW0MY.lock.call(addressdseGZZy, uintUGTnSbG, uintGo293NA, {from: accounts[3]});

		assert.equal(boolkrwnseE, true)
		await expect(DSPBbYW0MY.decreaseAllowance.call(addressGRK49NA, uintZJM4vKB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const uintlgfANhK = BigInt("1547")
		const addressuMjisGX = accounts[1]
		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addressuMjisGX, uintlgfANhK, {from: accounts[2]});
		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		assert.equal(boolSbna2Cf, true)
		assert.equal(boolsSn5pOf, false)
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressPEJg6zp = accounts[5]
		const uintJIh5OuX = BigInt("1547")
		const addresss24MR31 = accounts[1]
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressPEJg6zp, {from: accounts[4]});
		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addresss24MR31, uintJIh5OuX, {from: accounts[2]});
//		const booljcI3OX = await DSPYlJNuwx.acceptOwnership.call({from: accounts[3]});
//		await DSPYlJNuwx.onlyNewOwner.call({from: accounts[3]});
//		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		assert.equal(boolSbna2Cf, true)
		assert.equal(uint256MQSmDBE, BigInt("0"))
		await expect(DSPYlJNuwx.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const uintOVI3Ln1 = BigInt("1740")
		const uintPHYGRu0 = BigInt("1355")
		const addresswqXstiG = accounts[0]
		const uintKp0Z1W = BigInt("1213")
		const addressHULOh5 = accounts[1]
		const uintp16lcjK = BigInt("1499")
		const addressIkbMK1R = accounts[0]
		const addressHBVp7Q = accounts[0]
		const uinthX0cwU6 = BigInt("1710")
		const addressmCL5fpW = accounts[1]
		const boolu9oCXiA = await DSPuTgYg2A.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolO0t4PUS = await DSPuTgYg2A.transferWithLock.call(addresswqXstiG, uintPHYGRu0, uintOVI3Ln1, {from: accounts[2]});
		const boole9lFZKu = await DSPuTgYg2A.approve.call(addressHULOh5, uintKp0Z1W, {from: accounts[1]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressHBVp7Q, addressIkbMK1R, uintp16lcjK, {from: accounts[0]});
//		await DSPuTgYg2A.unpause.call({from: accounts[2]});
//		const boollQB20QF = await DSPuTgYg2A.mint.call(addressmCL5fpW, uinthX0cwU6, {from: accounts[0]});

		assert.equal(boolO0t4PUS, true)
		assert.equal(boole9lFZKu, true)
		assert.equal(boolu9oCXiA, false)
		await expect(DSPuTgYg2A.transferFrom.call(addressHBVp7Q, addressIkbMK1R, uintp16lcjK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const uinto3FBtbn = BigInt("1213")
		const addressNr3sflp = accounts[1]
		const uinttuNWyMn = BigInt("1573")
		const addressIYowe63 = accounts[5]
		const uintn7IghEz = BigInt("1499")
		const addressSvf1zij = accounts[0]
		const addressj9XrSu = accounts[0]
		const uintTrWmL0w = BigInt("1710")
		const addressrENLhSS = accounts[1]
		const boole9lFZKu = await DSPuTgYg2A.approve.call(addressNr3sflp, uinto3FBtbn, {from: accounts[1]});
//		const boole9xncKe = await DSPuTgYg2A.transfer.call(addressIYowe63, uinttuNWyMn, {from: accounts[3]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressj9XrSu, addressSvf1zij, uintn7IghEz, {from: accounts[0]});
//		await DSPuTgYg2A.unpause.call({from: accounts[2]});
//		const boollQB20QF = await DSPuTgYg2A.mint.call(addressrENLhSS, uintTrWmL0w, {from: accounts[0]});

		assert.equal(boole9lFZKu, true)
		await expect(DSPuTgYg2A.transfer.call(addressIYowe63, uinttuNWyMn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressTgfd7Rn = accounts[5]
		const uintKocxNc7 = BigInt("1547")
		const addressm1WRQsU = accounts[2]
		const addressFYWkmlx = accounts[2]
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressTgfd7Rn, {from: accounts[4]});
		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addressm1WRQsU, uintKocxNc7, {from: accounts[2]});
		const uint8jKLsoGl = await DSPYlJNuwx.decimals.call({from: accounts[1]});
//		const addressjCdvCk = await DSPYlJNuwx.notFrozen.call(addressFYWkmlx, {from: accounts[2]});
//		const booljcI3OX = await DSPYlJNuwx.acceptOwnership.call({from: accounts[3]});
//		await DSPYlJNuwx.onlyNewOwner.call({from: accounts[3]});
//		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		assert.equal(boolSbna2Cf, true)
		assert.equal(uint256MQSmDBE, BigInt("0"))
		assert.equal(uint8jKLsoGl, BigInt("18"))
		await expect(DSPYlJNuwx.notFrozen.call(addressFYWkmlx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const addressBzPYQB = accounts[4]
		const uintT7GUjY5 = BigInt("1213")
		const addressfrBK2Rb = accounts[1]
		const uintmNYbJCt = BigInt("1499")
		const addressGgsnKi0 = accounts[0]
		const addressLm0NSf9 = accounts[0]
		const uintOvHSVU9 = BigInt("1710")
		const addressAvB2mUd = accounts[1]
		const addressO7Q9oi = await DSPuTgYg2A.addPauser.call(addressBzPYQB, {from: accounts[2]});
		const boole9lFZKu = await DSPuTgYg2A.approve.call(addressfrBK2Rb, uintT7GUjY5, {from: accounts[1]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressLm0NSf9, addressGgsnKi0, uintmNYbJCt, {from: accounts[0]});
//		await DSPuTgYg2A.unpause.call({from: accounts[2]});
//		const boollQB20QF = await DSPuTgYg2A.mint.call(addressAvB2mUd, uintOvHSVU9, {from: accounts[0]});

		assert.equal(boole9lFZKu, true)
		await expect(DSPuTgYg2A.transferFrom.call(addressLm0NSf9, addressGgsnKi0, uintmNYbJCt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjANKBV = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssFZobXG = accounts[0]
		const uintG3y5z0 = BigInt("1512")
		const addressTtl592 = accounts[4]
		const addressMqJ3caK = accounts[1]
		const uintWEO6IN5 = BigInt("490")
		const addressS8AlP9 = accounts[2]
		const uint256bKo7Qnr = await DSPjANKBV.balanceOf.call(addresssFZobXG, {from: accounts[0]});
		const boolWoPyRAU = await DSPjANKBV.unlock.call(addressTtl592, uintG3y5z0, {from: accounts[0]});
		const uint256KbC3h40 = await DSPjANKBV.balanceOf.call(addressMqJ3caK, {from: accounts[1]});
		const booloZQCfL8 = await DSPjANKBV.decreaseAllowance.call(addressS8AlP9, uintWEO6IN5, {from: accounts[1]});
		await DSPjANKBV.onlyNewOwner.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addresswR4zzna = accounts[0]
		const address4XevLJ = accounts[6]
		const uintCB8sKly = BigInt("1547")
		const addressgd9CRqa = accounts[1]
//		const booloLjaQpV = await DSPYlJNuwx.unfreezeAccount.call(addresswR4zzna, {from: accounts[1]});
//		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(address4XevLJ, {from: accounts[4]});
//		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addressgd9CRqa, uintCB8sKly, {from: accounts[2]});
//		const booljcI3OX = await DSPYlJNuwx.acceptOwnership.call({from: accounts[3]});
//		await DSPYlJNuwx.onlyNewOwner.call({from: accounts[3]});
//		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		await expect(DSPYlJNuwx.unfreezeAccount.call(addresswR4zzna, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addresshFFX32 = accounts[5]
		const uintBv25k1 = BigInt("1545")
		const addressx1Y2Rw = accounts[1]
		const uintJC2Z7g0 = BigInt("209")
		const addressTEWrS5 = accounts[4]
		const addressKqJ1pkB = "0x0000000000000000000000000000000000000001"
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addresshFFX32, {from: accounts[4]});
//		await DSPYlJNuwx.f.call({from: accounts[5]});
//		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addressx1Y2Rw, uintBv25k1, {from: accounts[2]});
//		const booljcI3OX = await DSPYlJNuwx.acceptOwnership.call({from: accounts[3]});
//		await DSPYlJNuwx.onlyNewOwner.call({from: accounts[3]});
//		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});
//		const boolDGLQMjS = await DSPYlJNuwx.transferFrom.call(addressKqJ1pkB, addressTEWrS5, uintJC2Z7g0, {from: accounts[4]});

		assert.equal(uint256MQSmDBE, BigInt("0"))
		await expect(DSPYlJNuwx.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const addresse0W6Ea = accounts[3]
		const addressMuFOMU = accounts[0]
		const uintcoJbNvw = BigInt("1213")
		const addressxQ7S0yG = accounts[1]
		const uintcHm1BO4 = BigInt("1600")
		const addressn47TDmg = accounts[6]
		const uintANrGSE2 = BigInt("1499")
		const addressvgLkws = accounts[0]
		const addressF28vr0L = accounts[0]
		const uintmaXkdmL = BigInt("1710")
		const addressUrwCqR = accounts[1]
		const uint256U9bPmbI = await DSPuTgYg2A.allowance.call(addressMuFOMU, addresse0W6Ea, {from: accounts[3]});
		const boole9lFZKu = await DSPuTgYg2A.approve.call(addressxQ7S0yG, uintcoJbNvw, {from: accounts[1]});
//		const boole9xncKe = await DSPuTgYg2A.transfer.call(addressn47TDmg, uintcHm1BO4, {from: accounts[3]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressF28vr0L, addressvgLkws, uintANrGSE2, {from: accounts[0]});
//		const boollQB20QF = await DSPuTgYg2A.mint.call(addressUrwCqR, uintmaXkdmL, {from: accounts[0]});

		assert.equal(boole9lFZKu, true)
		assert.equal(uint256U9bPmbI, BigInt("0"))
		await expect(DSPuTgYg2A.transfer.call(addressn47TDmg, uintcHm1BO4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const uinto2xeD9Z = BigInt("1213")
		const addressRwNpOQ = accounts[1]
		const uintJ4vGhHb = BigInt("1573")
		const addressRPUo5Wc = accounts[6]
		const uintaYPGjCS = BigInt("1499")
		const addressoh8kjnI = accounts[0]
		const addressZqGtDjA = accounts[0]
		const uintAqAvoAP = BigInt("1710")
		const addressKC9PExb = accounts[1]
		const addressGzaR02e = accounts[4]
		const boole9lFZKu = await DSPuTgYg2A.approve.call(addressRwNpOQ, uinto2xeD9Z, {from: accounts[1]});
		const stringjDV7t3G = await DSPuTgYg2A.name.call({from: accounts[1]});
//		const boole9xncKe = await DSPuTgYg2A.transfer.call(addressRPUo5Wc, uintJ4vGhHb, {from: accounts[3]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressZqGtDjA, addressoh8kjnI, uintaYPGjCS, {from: accounts[0]});
//		const boollQB20QF = await DSPuTgYg2A.mint.call(addressKC9PExb, uintAqAvoAP, {from: accounts[0]});
//		await DSPuTgYg2A.onlyNewOwner.call({from: accounts[5]});
//		const boolwdw3Mg1 = await DSPuTgYg2A.isOwner.call(addressGzaR02e, {from: accounts[2]});
//		await DSPuTgYg2A.whenNotPaused.call({from: accounts[0]});

		assert.equal(boole9lFZKu, true)
		assert.equal(stringjDV7t3G, "DSP")
		await expect(DSPuTgYg2A.transfer.call(addressRPUo5Wc, uintJ4vGhHb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addresssSo1L1m = accounts[4]
		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});
		const boolyelEYyb = await DSPYlJNuwx.freezeAccount.call(addresssSo1L1m, {from: accounts[3]});
//		await DSPYlJNuwx.onlyPauser.call({from: accounts[0]});

		assert.equal(boolsSn5pOf, false)
		assert.equal(boolyelEYyb, true)
		await expect(DSPYlJNuwx.onlyPauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const stringV98YKMs = await DSPYlJNuwx.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		assert.equal(boolsSn5pOf, false)
		assert.equal(stringV98YKMs, "DSP")
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressY8mAUs9 = accounts[5]
		const uintiLYRcy = BigInt("1547")
		const addressZ2JDWGT = accounts[1]
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressY8mAUs9, {from: accounts[4]});
		const boolSbna2Cf = await DSPYlJNuwx.approve.call(addressZ2JDWGT, uintiLYRcy, {from: accounts[2]});
		const uint256sAO7teN = await DSPYlJNuwx.totalSupply.call({from: accounts[0]});
		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});

		assert.equal(boolSbna2Cf, true)
		assert.equal(boolsSn5pOf, false)
		assert.equal(uint256MQSmDBE, BigInt("0"))
		assert.equal(uint256sAO7teN, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const addresswF1WnM = accounts[3]
		const uintO0o1IeQ = BigInt("1499")
		const addressExC9kdA = accounts[0]
		const addressGtccYps = accounts[1]
		const uint256BV4UAQH = await DSPuTgYg2A.balanceOf.call(addresswF1WnM, {from: accounts[4]});
//		await DSPuTgYg2A.renouncePauser.call({from: accounts[1]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addressGtccYps, addressExC9kdA, uintO0o1IeQ, {from: accounts[0]});

		assert.equal(uint256BV4UAQH, BigInt("0"))
		await expect(DSPuTgYg2A.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const uintHXahqzn = BigInt("802")
		const addresssAoXYPb = accounts[1]
		const uintSGDunk = BigInt("844")
		const addressZ5kmeKP = accounts[4]
		const addressV4I3zp2 = accounts[5]
		const boolfcjvTwF = await DSPYlJNuwx.approve.call(addresssAoXYPb, uintHXahqzn, {from: accounts[3]});
		const boolEYgu3h = await DSPYlJNuwx.increaseAllowance.call(addressZ5kmeKP, uintSGDunk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressV4I3zp2, {from: accounts[4]});

		assert.equal(boolEYgu3h, true)
		assert.equal(boolfcjvTwF, true)
		assert.equal(uint256MQSmDBE, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPgW45Aqo = await DSP.new({from: accounts[2]});
		const address20YLBZ = accounts[4]
//		const addresshC6YScY = await DSPgW45Aqo.removePauser.call(address20YLBZ, {from: accounts[2]});
//		const boolW4lyWI5 = await DSPgW45Aqo.paused.call({from: accounts[2]});

		await expect(DSPgW45Aqo.removePauser.call(address20YLBZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressGYFH6w9 = accounts[3]
		const addressm2lceH9 = accounts[6]
		const uintNXXT0Fn = BigInt("1569")
		const uintMr0Uthq = BigInt("1877")
		const addressYOFvRoe = accounts[4]
		const addresssGYOfbD = accounts[2]
		const boolOottbqj = await DSPYlJNuwx.isOwner.call(addressGYFH6w9, {from: accounts[2]});
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressm2lceH9, {from: accounts[4]});
//		const boolPhpLOEG = await DSPYlJNuwx.transferWithLock.call(addressYOFvRoe, uintMr0Uthq, uintNXXT0Fn, {from: accounts[0]});
//		const addressHbn1WDV = await DSPYlJNuwx.notFrozen.call(addresssGYOfbD, {from: accounts[3]});

		assert.equal(boolOottbqj, true)
		assert.equal(uint256MQSmDBE, BigInt("0"))
		await expect(DSPYlJNuwx.transferWithLock.call(addressYOFvRoe, uintMr0Uthq, uintNXXT0Fn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addresswaUGts0 = accounts[5]
		const uintYv9QYf8 = BigInt("580")
		const uinttDFDVW = BigInt("1042")
		const addressr4mHJkN = accounts[5]
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addresswaUGts0, {from: accounts[4]});
//		const boolsYmm3KP = await DSPYlJNuwx.lock.call(addressr4mHJkN, uinttDFDVW, uintYv9QYf8, {from: accounts[3]});

		assert.equal(uint256MQSmDBE, BigInt("0"))
		await expect(DSPYlJNuwx.lock.call(addressr4mHJkN, uinttDFDVW, uintYv9QYf8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressEFdrmIv = accounts[6]
		const uintCKFrpsD = BigInt("949")
		const addressBKS36sD = accounts[1]
		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressEFdrmIv, {from: accounts[4]});
//		const booleKPkBK = await DSPYlJNuwx.burnFrombyOwner.call(addressBKS36sD, uintCKFrpsD, {from: accounts[3]});

		assert.equal(uint256MQSmDBE, BigInt("0"))
		await expect(DSPYlJNuwx.burnFrombyOwner.call(addressBKS36sD, uintCKFrpsD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const addressicIxeJx = accounts[3]
		const uintqOLSYq1 = BigInt("1499")
		const addressUab2PAk = accounts[0]
		const address9ckR9I = accounts[1]
//		const boolyzHEle = await DSPuTgYg2A.unfreezeAccount.call(addressicIxeJx, {from: accounts[2]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(address9ckR9I, addressUab2PAk, uintqOLSYq1, {from: accounts[0]});

		await expect(DSPuTgYg2A.unfreezeAccount.call(addressicIxeJx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressF9BLUkg = accounts[0]
		const uintlZLT5x2 = BigInt("692")
		const addressks839Kp = accounts[0]
		const addressw1HUTGq = "0x0000000000000000000000000000000000000001"
		const addressf8gZMLx = await DSPYlJNuwx.transferOwnership.call(addressF9BLUkg, {from: accounts[3]});
		const boolsSn5pOf = await DSPYlJNuwx.paused.call({from: accounts[4]});
//		const boolIGizNg = await DSPYlJNuwx.transferFrom.call(addressw1HUTGq, addressks839Kp, uintlZLT5x2, {from: accounts[0]});

		assert.equal(boolsSn5pOf, false)
		await expect(DSPYlJNuwx.transferFrom.call(addressw1HUTGq, addressks839Kp, uintlZLT5x2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuTgYg2A = await DSP.new({from: accounts[2]});
		const addressCMzfCb4 = accounts[2]
		const uintKCb5sAB = BigInt("1499")
		const addresslNOrJX = accounts[1]
		const addresscKiIf9k = accounts[2]
		const addressDatgOfV = await DSPuTgYg2A.upgradeTo.call(addressCMzfCb4, {from: accounts[2]});
//		const booll1DvUY = await DSPuTgYg2A.transferFrom.call(addresscKiIf9k, addresslNOrJX, uintKCb5sAB, {from: accounts[0]});
//		await DSPuTgYg2A.onlyPauser.call({from: accounts[1]});

		await expect(DSPuTgYg2A.transferFrom.call(addresscKiIf9k, addresslNOrJX, uintKCb5sAB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPYlJNuwx = await DSP.new({from: accounts[3]});
		const addressdHXHaXz = accounts[6]
		const uintEN7hYuz = BigInt("704")
		const addressqJLJnU3 = "0x0000000000000000000000000000000000000001"
//		await DSPYlJNuwx.renouncePauser.call({from: accounts[3]});
//		const uint256MQSmDBE = await DSPYlJNuwx.balanceOf.call(addressdHXHaXz, {from: accounts[4]});
//		const boolKv9gzyY = await DSPYlJNuwx.transfer.call(addressqJLJnU3, uintEN7hYuz, {from: accounts[3]});

		await expect(DSPYlJNuwx.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})