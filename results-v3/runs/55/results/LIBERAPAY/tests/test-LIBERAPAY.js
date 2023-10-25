const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJNK9fk5 = await LIBERAPAY.new({from: accounts[0]});
		const address1x2WbU = accounts[0]
		const address4EfJBL = await LIBERAPAYJNK9fk5.transferOwnership.call(address1x2WbU, {from: accounts[3]});
		await LIBERAPAYJNK9fk5.onlyNewOwner.call({from: accounts[5]});
		await LIBERAPAYJNK9fk5.pause.call({from: accounts[3]});

		await expect(LIBERAPAYJNK9fk5.transferOwnership.call(address1x2WbU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYo6G24SL = await LIBERAPAY.new({from: accounts[3]});
		const uintSMsw15s = BigInt("1565")
		const addressxRHtDNB = accounts[0]
		const addressVP9mmtm = "0x0000000000000000000000000000000000000001"
		const boolYc78DU2 = await LIBERAPAYo6G24SL.transfer.call(addressxRHtDNB, uintSMsw15s, {from: accounts[1]});
		const uint256FGgp3BY = await LIBERAPAYo6G24SL.balanceOf.call(addressVP9mmtm, {from: accounts[2]});
		await LIBERAPAYo6G24SL.pause.call({from: accounts[2]});

		await expect(LIBERAPAYo6G24SL.transfer.call(addressxRHtDNB, uintSMsw15s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhkgX9D2 = await LIBERAPAY.new({from: accounts[1]});
		const uintg6Eo9Z = BigInt("237")
		const addressEU7Ofg8 = accounts[1]
		const addressmvIDUuH = accounts[2]
		const uintrDpRN8Y = BigInt("1608")
		const uintJGnvlSv = BigInt("783")
		const addresszMMjAX = accounts[0]
		const boolinwTFy5 = await LIBERAPAYhkgX9D2.unlock.call(addressEU7Ofg8, uintg6Eo9Z, {from: accounts[1]});
		await LIBERAPAYhkgX9D2.f.call({from: accounts[2]});
		const address9OlupV = await LIBERAPAYhkgX9D2.notFrozen.call(addressmvIDUuH, {from: accounts[1]});
		const boolnpyVyjr = await LIBERAPAYhkgX9D2.burn.call(uintrDpRN8Y, {from: accounts[1]});
		const boolTFNw58N = await LIBERAPAYhkgX9D2.transfer.call(addresszMMjAX, uintJGnvlSv, {from: accounts[0]});

		await expect(LIBERAPAYhkgX9D2.unlock.call(addressEU7Ofg8, uintg6Eo9Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkDU5smh = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintO6Lnkj = BigInt("595")
		const addressTRToHty = accounts[0]
		const addressmscXl3r = accounts[1]
		const uintFWDaadH = BigInt("1473")
		const addressotbVgEB = accounts[5]
		await LIBERAPAYkDU5smh.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolV6BgjCK = await LIBERAPAYkDU5smh.unlock.call(addressTRToHty, uintO6Lnkj, {from: accounts[1]});
		const addressCfjIsVE = await LIBERAPAYkDU5smh.notFrozen.call(addressmscXl3r, {from: accounts[0]});
		const boolOSpZti4 = await LIBERAPAYkDU5smh.burnFrom.call(addressotbVgEB, uintFWDaadH, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdKU3srl = await LIBERAPAY.new({from: accounts[3]});
		const uintdsS834x = BigInt("639")
		const addressonCxpFG = accounts[3]
		await LIBERAPAYdKU3srl.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYdKU3srl.showLockState.call(addressonCxpFG, uintdsS834x, {from: accounts[3]});

		await expect(LIBERAPAYdKU3srl.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQzHyJ8x = await LIBERAPAY.new({from: accounts[0]});
		const addressv9DCOmw = accounts[4]
		const uintj7s0py7 = BigInt("1051")
		const addressicfzgBh = "0x0000000000000000000000000000000000000001"
		const addressZbG0vbw = await LIBERAPAYQzHyJ8x.transferOwnership.call(addressv9DCOmw, {from: accounts[0]});
		await LIBERAPAYQzHyJ8x.unpause.call({from: accounts[3]});
		const booleSw0TtE = await LIBERAPAYQzHyJ8x.approve.call(addressicfzgBh, uintj7s0py7, {from: accounts[3]});

		await expect(LIBERAPAYQzHyJ8x.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYo6G24SL = await LIBERAPAY.new({from: accounts[3]});
		const uint2kuTuH = BigInt("1287")
		const addressxQZvsdV = "0x0000000000000000000000000000000000000001"
		const addressbu3fC8K = "0x0000000000000000000000000000000000000001"
		const uint256re7Hyf = await LIBERAPAYo6G24SL.totalSupply.call({from: accounts[3]});
		await LIBERAPAYo6G24SL.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCwZZAU9 = await LIBERAPAYo6G24SL.distribute.call(addressxQZvsdV, uint2kuTuH, {from: accounts[2]});
		const uint256FGgp3BY = await LIBERAPAYo6G24SL.balanceOf.call(addressbu3fC8K, {from: accounts[2]});
		await LIBERAPAYo6G24SL.pause.call({from: accounts[2]});

		assert.equal(uint256re7Hyf, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYo6G24SL.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBm1fkbf = await LIBERAPAY.new({from: accounts[5]});
		const uintwXjHqY9 = BigInt("1425")
		const addressWSnpDTG = accounts[3]
		const addresslJB2rf9 = accounts[4]
		const uintt2jb3Vv = BigInt("72")
		const addressIQN8tRD = accounts[5]
		const uintXeanI4d = BigInt("1256")
		const addressCdoS3bs = accounts[1]
		const uintxomPfXX = BigInt("700")
		const booluN5FWDW = await LIBERAPAYBm1fkbf.transferFrom.call(addresslJB2rf9, addressWSnpDTG, uintwXjHqY9, {from: accounts[3]});
		const boolwjV79Vu = await LIBERAPAYBm1fkbf.unlock.call(addressIQN8tRD, uintt2jb3Vv, {from: accounts[3]});
		const boolHqDQAZf = await LIBERAPAYBm1fkbf.increaseAllowance.call(addressCdoS3bs, uintXeanI4d, {from: accounts[0]});
		const boolknhR1Il = await LIBERAPAYBm1fkbf.burn.call(uintxomPfXX, {from: accounts[1]});

		await expect(LIBERAPAYBm1fkbf.transferFrom.call(addresslJB2rf9, addressWSnpDTG, uintwXjHqY9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQzHyJ8x = await LIBERAPAY.new({from: accounts[0]});
		const uintY5cCRsb = BigInt("1034")
		const addressD7l2we1 = "0x0000000000000000000000000000000000000001"
		const booleSw0TtE = await LIBERAPAYQzHyJ8x.approve.call(addressD7l2we1, uintY5cCRsb, {from: accounts[3]});

		assert.equal(booleSw0TtE, true)
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBm1fkbf = await LIBERAPAY.new({from: accounts[5]});
		const uintJ7djm8h = BigInt("1425")
		const addressssxHYiv = accounts[3]
		const addresspCNEAui = accounts[4]
		const uintmxMCgtv = BigInt("72")
		const addressC0Z49y = accounts[5]
		const uinttzqo5l = BigInt("1291")
		const addressNybn3xc = accounts[1]
		const uintpVVx0Ye = BigInt("700")
		const uint256SSVrTEP = await LIBERAPAYBm1fkbf.getNowTime.call({from: accounts[2]});
		const booluN5FWDW = await LIBERAPAYBm1fkbf.transferFrom.call(addresspCNEAui, addressssxHYiv, uintJ7djm8h, {from: accounts[3]});
		const boolwjV79Vu = await LIBERAPAYBm1fkbf.unlock.call(addressC0Z49y, uintmxMCgtv, {from: accounts[3]});
		const boolHqDQAZf = await LIBERAPAYBm1fkbf.increaseAllowance.call(addressNybn3xc, uinttzqo5l, {from: accounts[0]});
		const boolknhR1Il = await LIBERAPAYBm1fkbf.burn.call(uintpVVx0Ye, {from: accounts[1]});

		assert.equal(uint256SSVrTEP, BigInt("1630230000"))
		await expect(LIBERAPAYBm1fkbf.transferFrom.call(addresspCNEAui, addressssxHYiv, uintJ7djm8h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQzHyJ8x = await LIBERAPAY.new({from: accounts[0]});
		const uintffosTcr = BigInt("775")
		const addressT7Pk5ks = accounts[1]
		const uintIyOtOHT = BigInt("983")
		const addressfRmfjNy = accounts[0]
		const uintqy2k734 = BigInt("1034")
		const addressEgBRosG = "0x0000000000000000000000000000000000000000"
		const boolICqtePO = await LIBERAPAYQzHyJ8x.increaseAllowance.call(addressT7Pk5ks, uintffosTcr, {from: accounts[3]});
		const boolSmw2Ttr = await LIBERAPAYQzHyJ8x.distribute.call(addressfRmfjNy, uintIyOtOHT, {from: "0x0000000000000000000000000000000000000001"});
		const booleSw0TtE = await LIBERAPAYQzHyJ8x.approve.call(addressEgBRosG, uintqy2k734, {from: accounts[3]});

		assert.equal(boolICqtePO, true)
		await expect(LIBERAPAYQzHyJ8x.distribute.call(addressfRmfjNy, uintIyOtOHT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVtLYzAQ = await LIBERAPAY.new({from: accounts[1]});
		const addressdmU6Sqr = accounts[1]
		const uintDVqHooR = BigInt("747")
		const addressrzkZyyG = accounts[0]
		const address630QEU = accounts[4]
		const uint256gcjlIWr = await LIBERAPAYVtLYzAQ.currentBalanceOf.call(addressdmU6Sqr, {from: accounts[1]});
		await LIBERAPAYVtLYzAQ.pause.call({from: accounts[0]});
		const boolQkunaxj = await LIBERAPAYVtLYzAQ.increaseAllowance.call(addressrzkZyyG, uintDVqHooR, {from: "0x0000000000000000000000000000000000000001"});
		const addressDkzMP6 = await LIBERAPAYVtLYzAQ.transferOwnership.call(address630QEU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256gcjlIWr, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYVtLYzAQ.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhkgX9D2 = await LIBERAPAY.new({from: accounts[1]});
		const uintjuAuGsp = BigInt("1316")
		const addressmYG3znR = accounts[4]
		const addresstPyj0w1 = accounts[2]
		const uintD5Btrrp = BigInt("1608")
		const uintINdhGDw = BigInt("783")
		const addresshLYtCjC = accounts[0]
		await LIBERAPAYhkgX9D2.f.call({from: accounts[2]});
		const boolkR0E5m = await LIBERAPAYhkgX9D2.burnFrom.call(addressmYG3znR, uintjuAuGsp, {from: accounts[2]});
		const address9OlupV = await LIBERAPAYhkgX9D2.notFrozen.call(addresstPyj0w1, {from: accounts[1]});
		const boolnpyVyjr = await LIBERAPAYhkgX9D2.burn.call(uintD5Btrrp, {from: accounts[1]});
		const boolTFNw58N = await LIBERAPAYhkgX9D2.transfer.call(addresshLYtCjC, uintINdhGDw, {from: accounts[0]});

		await expect(LIBERAPAYhkgX9D2.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVtLYzAQ = await LIBERAPAY.new({from: accounts[1]});
		const addressqnjoumj = accounts[1]
		const uintr7TH6WZ = BigInt("1428")
		const addressu2JkQZ = accounts[0]
		const uintppIyp4u = BigInt("1435")
		const uinticpfJgn = BigInt("747")
		const addressiUNBvvh = accounts[1]
		const addressnmYvQEe = accounts[5]
		const uint256gcjlIWr = await LIBERAPAYVtLYzAQ.currentBalanceOf.call(addressqnjoumj, {from: accounts[1]});
		const boolMMN4c75 = await LIBERAPAYVtLYzAQ.burnFrom.call(addressu2JkQZ, uintr7TH6WZ, {from: accounts[0]});
		const boolzyKNZ7k = await LIBERAPAYVtLYzAQ.burn.call(uintppIyp4u, {from: accounts[0]});
		const uint256g4DqpPa = await LIBERAPAYVtLYzAQ.totalSupply.call({from: accounts[0]});
		const boolQkunaxj = await LIBERAPAYVtLYzAQ.increaseAllowance.call(addressiUNBvvh, uinticpfJgn, {from: "0x0000000000000000000000000000000000000001"});
		const addressDkzMP6 = await LIBERAPAYVtLYzAQ.transferOwnership.call(addressnmYvQEe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256gcjlIWr, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYVtLYzAQ.burnFrom.call(addressu2JkQZ, uintr7TH6WZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQzHyJ8x = await LIBERAPAY.new({from: accounts[0]});
		const uinte3u2UTN = BigInt("1036")
		const addressunD5bJ = "0x0000000000000000000000000000000000000001"
		const uintswBRhRL = BigInt("1838")
		const addressiLo9GI5 = accounts[0]
		const addresscujEE3 = accounts[5]
		const booleSw0TtE = await LIBERAPAYQzHyJ8x.approve.call(addressunD5bJ, uinte3u2UTN, {from: accounts[3]});
		const boolWSG2fI5 = await LIBERAPAYQzHyJ8x.approve.call(addressiLo9GI5, uintswBRhRL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LqK5Hnr = await LIBERAPAYQzHyJ8x.balanceOf.call(addresscujEE3, {from: accounts[2]});

		assert.equal(boolWSG2fI5, true)
		assert.equal(booleSw0TtE, true)
		assert.equal(uint256LqK5Hnr, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQzHyJ8x = await LIBERAPAY.new({from: accounts[0]});
		const uintuL5LRyA = BigInt("1036")
		const addressMfxqcYn = "0x0000000000000000000000000000000000000001"
		const uintl4aULIk = BigInt("1838")
		const addressWa7tZP6 = accounts[0]
		const uintFLAWYBk = BigInt("417")
		const addressmPqKcrD = accounts[5]
		const uinttFhKjv3 = BigInt("169")
		const addresslsfWQmb = accounts[3]
		const addressFgLhvz = accounts[6]
		const booleSw0TtE = await LIBERAPAYQzHyJ8x.approve.call(addressMfxqcYn, uintuL5LRyA, {from: accounts[3]});
		const boolWSG2fI5 = await LIBERAPAYQzHyJ8x.approve.call(addressWa7tZP6, uintl4aULIk, {from: "0x0000000000000000000000000000000000000001"});
		const boollASi8D5 = await LIBERAPAYQzHyJ8x.decreaseAllowance.call(addressmPqKcrD, uintFLAWYBk, {from: accounts[4]});
		const boolo98CUv5 = await LIBERAPAYQzHyJ8x.mint.call(addresslsfWQmb, uinttFhKjv3, {from: accounts[4]});
		const uint256LqK5Hnr = await LIBERAPAYQzHyJ8x.balanceOf.call(addressFgLhvz, {from: accounts[2]});

		assert.equal(boolWSG2fI5, true)
		assert.equal(booleSw0TtE, true)
		await expect(LIBERAPAYQzHyJ8x.decreaseAllowance.call(addressmPqKcrD, uintFLAWYBk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVtLYzAQ = await LIBERAPAY.new({from: accounts[1]});
		const addressZQu4Fk7 = accounts[1]
		const addressUHqwr44 = accounts[4]
		const uintfLD5Ff = BigInt("725")
		const addressDDbS8ct = accounts[0]
		const addresssrbmPQ = accounts[5]
		const uint256gcjlIWr = await LIBERAPAYVtLYzAQ.currentBalanceOf.call(addressZQu4Fk7, {from: accounts[1]});
		const boolApkQzin = await LIBERAPAYVtLYzAQ.freezeAccount.call(addressUHqwr44, {from: accounts[1]});
		const boolQkunaxj = await LIBERAPAYVtLYzAQ.increaseAllowance.call(addressDDbS8ct, uintfLD5Ff, {from: "0x0000000000000000000000000000000000000001"});
		const addressDkzMP6 = await LIBERAPAYVtLYzAQ.transferOwnership.call(addresssrbmPQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolApkQzin, true)
		assert.equal(boolQkunaxj, true)
		assert.equal(uint256gcjlIWr, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYVtLYzAQ.transferOwnership.call(addresssrbmPQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhkgX9D2 = await LIBERAPAY.new({from: accounts[1]});
		const uintI0x2P3s = BigInt("1369")
		const addressxu1ML2C = accounts[0]
		const uintmrejzDu = BigInt("224")
		const addressgMbKdci = accounts[1]
		await LIBERAPAYhkgX9D2.showLockState.call(addressxu1ML2C, uintI0x2P3s, {from: accounts[0]});
		const boolinwTFy5 = await LIBERAPAYhkgX9D2.unlock.call(addressgMbKdci, uintmrejzDu, {from: accounts[1]});

		await expect(LIBERAPAYhkgX9D2.showLockState.call(addressxu1ML2C, uintI0x2P3s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYo6G24SL = await LIBERAPAY.new({from: accounts[3]});
		const addressChoGgZN = accounts[3]
		const addressAo4QuLX = "0x0000000000000000000000000000000000000001"
		const addressZTsoRn = await LIBERAPAYo6G24SL.upgradeTo.call(addressChoGgZN, {from: accounts[3]});
		const uint256FGgp3BY = await LIBERAPAYo6G24SL.balanceOf.call(addressAo4QuLX, {from: accounts[2]});

		assert.equal(uint256FGgp3BY, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVtLYzAQ = await LIBERAPAY.new({from: accounts[1]});
		const addressvM5PXdS = accounts[1]
		const addressxpuIFQu = accounts[4]
		const uintccBGKqT = BigInt("1694")
		const addressnhvjQe1 = accounts[0]
		const uintUnUt5ri = BigInt("65")
		const addressA1H1IcV = accounts[5]
		const uint256gcjlIWr = await LIBERAPAYVtLYzAQ.currentBalanceOf.call(addressvM5PXdS, {from: accounts[1]});
		const boolfmTokXx = await LIBERAPAYVtLYzAQ.unfreezeAccount.call(addressxpuIFQu, {from: accounts[1]});
		const boolQkunaxj = await LIBERAPAYVtLYzAQ.increaseAllowance.call(addressnhvjQe1, uintccBGKqT, {from: "0x0000000000000000000000000000000000000001"});
		const boolq89SndF = await LIBERAPAYVtLYzAQ.burn.call(uintUnUt5ri, {from: accounts[0]});
		const addressDkzMP6 = await LIBERAPAYVtLYzAQ.transferOwnership.call(addressA1H1IcV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256gcjlIWr, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYVtLYzAQ.unfreezeAccount.call(addressxpuIFQu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvkxz0EA = await LIBERAPAY.new({from: accounts[3]});
		const uints1Myz4S = BigInt("2030")
		const addressfsqkrh = accounts[3]
		const addressrBaMcU = accounts[4]
		const addressSGaKrDa = "0x0000000000000000000000000000000000000001"
		const boolN6dZE1W = await LIBERAPAYvkxz0EA.distribute.call(addressfsqkrh, uints1Myz4S, {from: accounts[3]});
		const addresssbzCT05 = await LIBERAPAYvkxz0EA.transferOwnership.call(addressrBaMcU, {from: accounts[5]});
		await LIBERAPAYvkxz0EA.unpause.call({from: accounts[1]});
		const addressQJ8Hc5s = await LIBERAPAYvkxz0EA.notFrozen.call(addressSGaKrDa, {from: accounts[4]});

		assert.equal(boolN6dZE1W, true)
		await expect(LIBERAPAYvkxz0EA.transferOwnership.call(addressrBaMcU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVtLYzAQ = await LIBERAPAY.new({from: accounts[1]});
		const addressUlAf6dX = accounts[2]
		const uintsamImEe = BigInt("1261")
		const addressBjU7uAO = accounts[4]
		const uintg2vUTAT = BigInt("364")
		const uintY08ARco = BigInt("130")
		const addressfUnQ41z = accounts[3]
		const uint256gcjlIWr = await LIBERAPAYVtLYzAQ.currentBalanceOf.call(addressUlAf6dX, {from: accounts[1]});
		const boolDaeNhEI = await LIBERAPAYVtLYzAQ.increaseAllowance.call(addressBjU7uAO, uintsamImEe, {from: accounts[4]});
		const boollsGoJvQ = await LIBERAPAYVtLYzAQ.lock.call(addressfUnQ41z, uintY08ARco, uintg2vUTAT, {from: accounts[1]});

		assert.equal(boolDaeNhEI, true)
		assert.equal(uint256gcjlIWr, BigInt("0"))
		await expect(LIBERAPAYVtLYzAQ.lock.call(addressfUnQ41z, uintY08ARco, uintg2vUTAT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYo6G24SL = await LIBERAPAY.new({from: accounts[3]});
		const addressQrTLqe = "0x0000000000000000000000000000000000000002"
		const addresseNjxAp = "0x0000000000000000000000000000000000000001"
		const uinttaAGD4d = BigInt("1687")
		const addressAfvdKEe = accounts[1]
		const uint7CPP8O = BigInt("1403")
		const addressvHBfc3D = accounts[3]
		const addressef0too8 = "0x0000000000000000000000000000000000000001"
		const addressaaXM6r = accounts[3]
		const uint256FGgp3BY = await LIBERAPAYo6G24SL.balanceOf.call(addressQrTLqe, {from: accounts[2]});
		const uint256q45RCaF = await LIBERAPAYo6G24SL.currentBalanceOf.call(addresseNjxAp, {from: accounts[5]});
		const boolJDrwdjY = await LIBERAPAYo6G24SL.burn.call(uinttaAGD4d, {from: accounts[3]});
		const uint256LYuWpqi = await LIBERAPAYo6G24SL.balanceOf.call(addressAfvdKEe, {from: accounts[3]});
		const booltX4fT0Q = await LIBERAPAYo6G24SL.transferFrom.call(addressef0too8, addressvHBfc3D, uint7CPP8O, {from: accounts[2]});
		const uint256cHvfkIj = await LIBERAPAYo6G24SL.balanceOf.call(addressaaXM6r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJDrwdjY, true)
		assert.equal(uint256FGgp3BY, BigInt("0"))
		assert.equal(uint256LYuWpqi, BigInt("0"))
		assert.equal(uint256q45RCaF, BigInt("0"))
		await expect(LIBERAPAYo6G24SL.transferFrom.call(addressef0too8, addressvHBfc3D, uint7CPP8O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhkgX9D2 = await LIBERAPAY.new({from: accounts[1]});
		const uinthvPe80V = BigInt("1369")
		const addressly4XLRj = accounts[1]
		await LIBERAPAYhkgX9D2.showLockState.call(addressly4XLRj, uinthvPe80V, {from: accounts[0]});
		await LIBERAPAYhkgX9D2.pause.call({from: accounts[1]});

		await expect(LIBERAPAYhkgX9D2.showLockState.call(addressly4XLRj, uinthvPe80V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJEoM8Ew = await LIBERAPAY.new({from: accounts[5]});
		const uintxfImVpj = BigInt("1409")
		const addressRTUS0cI = accounts[4]
		const addressZtWW0VI = accounts[0]
		const addressH812K1E = accounts[5]
		const addressiuq6pzZ = accounts[1]
		const uintJD3JHTX = BigInt("1902")
		const uintC5CNfv = BigInt("1420")
		const addressoMpT5OM = "0x0000000000000000000000000000000000000001"
		const boolVafCmV = await LIBERAPAYJEoM8Ew.mint.call(addressRTUS0cI, uintxfImVpj, {from: accounts[5]});
		const uint256Vf8lqgZ = await LIBERAPAYJEoM8Ew.balanceOf.call(addressZtWW0VI, {from: accounts[4]});
		const boold3NPg0a = await LIBERAPAYJEoM8Ew.freezeAccount.call(addressH812K1E, {from: accounts[2]});
		const uint256PMjN0xQ = await LIBERAPAYJEoM8Ew.balanceOf.call(addressiuq6pzZ, {from: accounts[4]});
		const boolHdkcuXa = await LIBERAPAYJEoM8Ew.lock.call(addressoMpT5OM, uintC5CNfv, uintJD3JHTX, {from: accounts[0]});

		await expect(LIBERAPAYJEoM8Ew.mint.call(addressRTUS0cI, uintxfImVpj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})