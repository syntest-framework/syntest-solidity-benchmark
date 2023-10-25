const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYKT2VXd8 = await KPLAY.new({from: accounts[1]});
		const uintvSyCgai = BigInt("150")
		const uintILAeOv = BigInt("1491")
		const addresss6VCXhv = accounts[5]
		const addressOdzhMx = accounts[5]
//		const boolELMUfgG = await KPLAYKT2VXd8.transferWithLockAfter.call(addresss6VCXhv, uintILAeOv, uintvSyCgai, {from: accounts[0]});
//		const addressAiyw4vW = await KPLAYKT2VXd8.transferOwnership.call(addressOdzhMx, {from: accounts[5]});
//		await KPLAYKT2VXd8.pause.call({from: accounts[2]});

		await expect(KPLAYKT2VXd8.transferWithLockAfter.call(addresss6VCXhv, uintILAeOv, uintvSyCgai, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintymP256h = BigInt("123")
		const addressk5ozeKu = accounts[5]
		const uintA1fBq9F = BigInt("1428")
		const addressNpBzfUN = accounts[2]
		const uintb3DCDr = BigInt("1186")
		const addressvRkLbBh = accounts[0]
//		const boolEUp4Ujn = await KPLAYallX3Kk.transfer.call(addressk5ozeKu, uintymP256h, {from: accounts[3]});
//		const boolTip6jtr = await KPLAYallX3Kk.approve.call(addressNpBzfUN, uintA1fBq9F, {from: accounts[0]});
//		const boolJFG7HrB = await KPLAYallX3Kk.increaseAllowance.call(addressvRkLbBh, uintb3DCDr, {from: accounts[3]});

		await expect(KPLAYallX3Kk.transfer.call(addressk5ozeKu, uintymP256h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhFrtl3 = await KPLAY.new({from: accounts[4]});
		const uintWOfQ9y5 = BigInt("2019")
		const uintu7NCfK = BigInt("556")
		const uintVj8qSLP = BigInt("1875")
		const addressSV7jYNv = accounts[1]
//		await KPLAYhFrtl3.renounceOwnership.call({from: accounts[4]});
//		const uint256bOoWwH = await KPLAYhFrtl3.totalSupply.call({from: accounts[0]});
//		const uint256mbkjZCo = await KPLAYhFrtl3.afterTime.call(uintWOfQ9y5, {from: accounts[3]});
//		const boolEWa7ctg = await KPLAYhFrtl3.transferWithLockAfter.call(addressSV7jYNv, uintVj8qSLP, uintu7NCfK, {from: accounts[2]});

		await expect(KPLAYhFrtl3.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhFd1pgi = await KPLAY.new({from: accounts[3]});
		const addressevZ7mK = accounts[2]
		const uintuooQhf = BigInt("652")
		const addressxLYg1RZ = accounts[2]
		const uintSJttbyn = BigInt("1934")
		const addressd9fFax = accounts[4]
		const addressrEUKwbu = accounts[3]
		const addressuYgTdvW = accounts[5]
		const uintg7rfiI = BigInt("1317")
		const uintT7UqWBk = BigInt("1750")
		const addresssQTCwbD = accounts[1]
		const boolkV9hPd1 = await KPLAYhFd1pgi.isFrozen.call(addressevZ7mK, {from: accounts[1]});
		const bool7tU8wH = await KPLAYhFd1pgi.increaseAllowance.call(addressxLYg1RZ, uintuooQhf, {from: accounts[4]});
//		const boola2qSDYY = await KPLAYhFd1pgi.transfer.call(addressd9fFax, uintSJttbyn, {from: accounts[5]});
//		const uint256yutUP6H = await KPLAYhFd1pgi.allowance.call(addressuYgTdvW, addressrEUKwbu, {from: accounts[1]});
//		await KPLAYhFd1pgi.whenNotPaused.call({from: accounts[4]});
//		const addressWtTO3xf = await KPLAYhFd1pgi.lock.call(addresssQTCwbD, uintT7UqWBk, uintg7rfiI, {from: accounts[2]});

		assert.equal(bool7tU8wH, true)
		assert.equal(boolkV9hPd1, false)
		await expect(KPLAYhFd1pgi.transfer.call(addressd9fFax, uintSJttbyn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYMGwfeJ = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLN8GymO = BigInt("1675")
		const uintlyFDXuR = BigInt("1602")
		const addressLp1gN8s = accounts[3]
		const uint1oHXkO = BigInt("1551")
		const addressXs6hob = "0x0000000000000000000000000000000000000001"
		const uintyTqOIwB = BigInt("1439")
		const address9OvDmQ = accounts[3]
		await KPLAYMGwfeJ.onlyOwner.call({from: accounts[0]});
		await KPLAYMGwfeJ.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolAAi3vpn = await KPLAYMGwfeJ.transferWithLockAfter.call(addressLp1gN8s, uintlyFDXuR, uintLN8GymO, {from: accounts[2]});
		const boolX4fD1Kz = await KPLAYMGwfeJ.transfer.call(addressXs6hob, uint1oHXkO, {from: accounts[5]});
		await KPLAYMGwfeJ.renounceOwnership.call({from: accounts[4]});
		const booluLYJgTV = await KPLAYMGwfeJ.transfer.call(address9OvDmQ, uintyTqOIwB, {from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYzMUr8c = await KPLAY.new({from: accounts[2]});
		const addressvDOl7DI = accounts[0]
		const uintViea0WZ = BigInt("187")
		const addressiGnVIVB = accounts[3]
		const addressz2bZRrX = accounts[0]
//		await KPLAYzMUr8c.onlyOwner.call({from: accounts[3]});
//		await KPLAYzMUr8c.onlyOwner.call({from: accounts[1]});
//		const uint256fIp5Yh = await KPLAYzMUr8c.balanceOf.call(addressvDOl7DI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxqX1xrc = await KPLAYzMUr8c.transferFrom.call(addressz2bZRrX, addressiGnVIVB, uintViea0WZ, {from: accounts[2]});
//		await KPLAYzMUr8c.whenPaused.call({from: accounts[0]});
//		const uint256lUAOvCA = await KPLAYzMUr8c.currentTime.call({from: accounts[2]});

		await expect(KPLAYzMUr8c.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintBzzKArG = BigInt("1428")
		const addressSgMuzpy = accounts[2]
		const uintmJSOwcl = BigInt("1186")
		const address5IHSYN = accounts[0]
		const boolTip6jtr = await KPLAYallX3Kk.approve.call(addressSgMuzpy, uintBzzKArG, {from: accounts[0]});
		const boolJFG7HrB = await KPLAYallX3Kk.increaseAllowance.call(address5IHSYN, uintmJSOwcl, {from: accounts[3]});

		assert.equal(boolJFG7HrB, true)
		assert.equal(boolTip6jtr, true)
	});

	it('test for KPLAY', async () => {
		const KPLAYL9CQeM7 = await KPLAY.new({from: accounts[0]});
		const uintaSTnbOn = BigInt("1968")
		const addresspltpGKX = accounts[3]
		const addressAZ8BJge = accounts[4]
		const addressecBEeoX = accounts[0]
		const uintmjZIDX = BigInt("287")
		const addresseaXLeLN = accounts[1]
		const addressoejWs36 = "0x0000000000000000000000000000000000000001"
		const uintYG4aQEM = BigInt("1514")
		const addressTVEKnK6 = accounts[4]
		const addressFCjYKXC = accounts[3]
//		const boolmapvYos = await KPLAYL9CQeM7.transferFrom.call(addressAZ8BJge, addresspltpGKX, uintaSTnbOn, {from: accounts[1]});
//		const addressHrhc7Vu = await KPLAYL9CQeM7.unfreeze.call(addressecBEeoX, {from: accounts[5]});
//		await KPLAYL9CQeM7.whenNotFrozen.call({from: accounts[1]});
//		const booltRNvZYo = await KPLAYL9CQeM7.transferFrom.call(addressoejWs36, addresseaXLeLN, uintmjZIDX, {from: accounts[4]});
//		const boolLCOmsBF = await KPLAYL9CQeM7.transferFrom.call(addressFCjYKXC, addressTVEKnK6, uintYG4aQEM, {from: accounts[0]});

		await expect(KPLAYL9CQeM7.transferFrom.call(addressAZ8BJge, addresspltpGKX, uintaSTnbOn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintQVOhM7r = BigInt("1536")
		const addressbsjx95D = accounts[5]
		const uintZKinfhN = BigInt("123")
		const addressaJP0xWQ = accounts[5]
		const uintb6trqBg = BigInt("1428")
		const addressaDWB8aF = accounts[2]
		const uintxzhwjJF = BigInt("1186")
		const addressZQHOQ9 = accounts[0]
//		const boolKPPhx4F = await KPLAYallX3Kk.decreaseAllowance.call(addressbsjx95D, uintQVOhM7r, {from: accounts[2]});
//		const boolEUp4Ujn = await KPLAYallX3Kk.transfer.call(addressaJP0xWQ, uintZKinfhN, {from: accounts[3]});
//		const boolTip6jtr = await KPLAYallX3Kk.approve.call(addressaDWB8aF, uintb6trqBg, {from: accounts[0]});
//		const boolJFG7HrB = await KPLAYallX3Kk.increaseAllowance.call(addressZQHOQ9, uintxzhwjJF, {from: accounts[3]});

		await expect(KPLAYallX3Kk.decreaseAllowance.call(addressbsjx95D, uintQVOhM7r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhFd1pgi = await KPLAY.new({from: accounts[3]});
		const addressqigZREH = accounts[2]
		const uint5QoE7T = BigInt("652")
		const addressnjN9K9W = accounts[2]
		const addressrPVTq7x = accounts[4]
		const addressY5e4NBN = accounts[5]
		const uintpPwk4te = BigInt("1317")
		const uintrZHckuC = BigInt("1750")
		const addresstsYphZ = accounts[1]
		const boolkV9hPd1 = await KPLAYhFd1pgi.isFrozen.call(addressqigZREH, {from: accounts[1]});
		const bool7tU8wH = await KPLAYhFd1pgi.increaseAllowance.call(addressnjN9K9W, uint5QoE7T, {from: accounts[4]});
		const uint256yutUP6H = await KPLAYhFd1pgi.allowance.call(addressY5e4NBN, addressrPVTq7x, {from: accounts[1]});
//		const addressWtTO3xf = await KPLAYhFd1pgi.lock.call(addresstsYphZ, uintrZHckuC, uintpPwk4te, {from: accounts[2]});

		assert.equal(bool7tU8wH, true)
		assert.equal(boolkV9hPd1, false)
		assert.equal(uint256yutUP6H, BigInt("0"))
		await expect(KPLAYhFd1pgi.lock.call(addresstsYphZ, uintrZHckuC, uintpPwk4te, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYf48Vn4 = await KPLAY.new({from: accounts[1]});
		const addressloXY9gc = "0x0000000000000000000000000000000000000001"
		const uintouAPxfb = BigInt("787")
		const addresssf4gUeM = accounts[4]
		const uintz7dCVY0 = BigInt("1192")
		const uintoOICZZn = BigInt("396")
		const addressH8ozgO = "0x0000000000000000000000000000000000000001"
		const uintEWndOE = BigInt("356")
		const addressF2Q0fz = accounts[1]
		const uintX18BxUw = BigInt("840")
		const addressfsSF6Cp = accounts[1]
		const uint256uOwVulw = await KPLAYf48Vn4.balanceOf.call(addressloXY9gc, {from: accounts[5]});
//		await KPLAYf48Vn4.lockState.call(addresssf4gUeM, uintouAPxfb, {from: accounts[4]});
//		const boolzrSJ6M = await KPLAYf48Vn4.transferWithLock.call(addressH8ozgO, uintoOICZZn, uintz7dCVY0, {from: accounts[2]});
//		const boolPNEEN1v = await KPLAYf48Vn4.mint.call(addressF2Q0fz, uintEWndOE, {from: accounts[0]});
//		await KPLAYf48Vn4.lockState.call(addressfsSF6Cp, uintX18BxUw, {from: accounts[2]});

		assert.equal(uint256uOwVulw, BigInt("0"))
		await expect(KPLAYf48Vn4.lockState.call(addresssf4gUeM, uintouAPxfb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGhON2Wd = await KPLAY.new({from: accounts[2]});
		const addressP9UQAYi = accounts[3]
		const uintKjJPlIa = BigInt("1309")
		const uintZRAaR8 = BigInt("1654")
		const addressQq4y0Gw = accounts[3]
		const uint256lfJTNtP = await KPLAYGhON2Wd.lockCount.call(addressP9UQAYi, {from: accounts[2]});
		const uint256ZLUa8CT = await KPLAYGhON2Wd.afterTime.call(uintKjJPlIa, {from: accounts[3]});
		const boolbVw5hm9 = await KPLAYGhON2Wd.increaseAllowance.call(addressQq4y0Gw, uintZRAaR8, {from: accounts[5]});

		assert.equal(boolbVw5hm9, true)
		assert.equal(uint256ZLUa8CT, BigInt("1630228862"))
		assert.equal(uint256lfJTNtP, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const addressu6IsSxP = accounts[5]
//		await KPLAYallX3Kk.unpause.call({from: accounts[4]});
//		const uint256meM1zrs = await KPLAYallX3Kk.totalSupply.call({from: accounts[5]});
//		const uint256GG1cME7 = await KPLAYallX3Kk.balanceOf.call(addressu6IsSxP, {from: accounts[3]});

		await expect(KPLAYallX3Kk.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const addressA5hY17Q = accounts[3]
		const uintHIMT2Je = BigInt("333")
		const addressV1TNT07 = accounts[5]
		const uint256FEZJhZQ = await KPLAYallX3Kk.lockCount.call(addressA5hY17Q, {from: accounts[0]});
		const uint256Po6P3NV = await KPLAYallX3Kk.currentTime.call({from: accounts[1]});
//		const boolKPPhx4F = await KPLAYallX3Kk.decreaseAllowance.call(addressV1TNT07, uintHIMT2Je, {from: accounts[2]});

		assert.equal(uint256FEZJhZQ, BigInt("0"))
		assert.equal(uint256Po6P3NV, BigInt("1630227539"))
		await expect(KPLAYallX3Kk.decreaseAllowance.call(addressV1TNT07, uintHIMT2Je, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintgjGPC1g = BigInt("1235")
		const uintfkveZ7Z = BigInt("1900")
		const addressV8s25AA = accounts[0]
		const uintSqpVlQb = BigInt("1860")
		const addressHatnXOM = accounts[2]
		const addressJAZWqwk = accounts[3]
		const uinti5WVezX = BigInt("635")
		const uintHcGKndn = BigInt("1165")
		const addressXS5oXQu = accounts[4]
		const uintwknfhv9 = BigInt("1486")
		const addressU8HALYm = accounts[4]
		const addressJCsODmw = accounts[6]
		const uintXmcJ48V = BigInt("333")
		const addressBHNgReJ = accounts[5]
		const uintagSEacA = BigInt("760")
		const addressq8BkJCW = accounts[1]
		const boolnXtEaG5 = await KPLAYallX3Kk.transferWithLockAfter.call(addressV8s25AA, uintfkveZ7Z, uintgjGPC1g, {from: accounts[4]});
//		const boolBas6Ptd = await KPLAYallX3Kk.transferFrom.call(addressJAZWqwk, addressHatnXOM, uintSqpVlQb, {from: accounts[0]});
//		const uint256iD0A00H = await KPLAYallX3Kk.afterTime.call(uinti5WVezX, {from: accounts[2]});
//		const boolRFzUEtY = await KPLAYallX3Kk.increaseAllowance.call(addressXS5oXQu, uintHcGKndn, {from: accounts[0]});
//		const boolSCFaNe = await KPLAYallX3Kk.increaseAllowance.call(addressU8HALYm, uintwknfhv9, {from: accounts[2]});
//		const uint256U3xxQ0B = await KPLAYallX3Kk.balanceOf.call(addressJCsODmw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKPPhx4F = await KPLAYallX3Kk.decreaseAllowance.call(addressBHNgReJ, uintXmcJ48V, {from: accounts[2]});
//		const boolYJt4qqJ = await KPLAYallX3Kk.approve.call(addressq8BkJCW, uintagSEacA, {from: accounts[4]});

		assert.equal(boolnXtEaG5, true)
		await expect(KPLAYallX3Kk.transferFrom.call(addressJAZWqwk, addressHatnXOM, uintSqpVlQb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintCXbi3H = BigInt("1381")
		const uintTlDg5DU = BigInt("2005")
		const addressRGyrHdT = accounts[3]
		const uintFGX7C0L = BigInt("667")
		const addressxml59yL = accounts[5]
		const uintDau0kc = BigInt("411")
		const addressOfGQk7o = accounts[1]
		const addressLlqdU7X = accounts[2]
		const uintIGsn8NU = BigInt("333")
		const addressw7akteT = accounts[5]
		const addressTxO9RAK = accounts[3]
		const addresstDgqPv = accounts[0]
//		const addressd2pij0O = await KPLAYallX3Kk.lockAfter.call(addressRGyrHdT, uintTlDg5DU, uintCXbi3H, {from: accounts[4]});
//		const uint256iD0A00H = await KPLAYallX3Kk.afterTime.call(uintFGX7C0L, {from: accounts[2]});
//		const uint256U3xxQ0B = await KPLAYallX3Kk.balanceOf.call(addressxml59yL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolx0UMXNb = await KPLAYallX3Kk.transferFrom.call(addressLlqdU7X, addressOfGQk7o, uintDau0kc, {from: accounts[1]});
//		const boolKPPhx4F = await KPLAYallX3Kk.decreaseAllowance.call(addressw7akteT, uintIGsn8NU, {from: accounts[2]});
//		const addressyucv90W = await KPLAYallX3Kk.transferOwnership.call(addressTxO9RAK, {from: accounts[2]});
//		const uint256Z2qHpZw = await KPLAYallX3Kk.lockCount.call(addresstDgqPv, {from: accounts[5]});

		await expect(KPLAYallX3Kk.lockAfter.call(addressRGyrHdT, uintTlDg5DU, uintCXbi3H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const addressU2rUMhw = accounts[4]
		const addressHSgiECe = accounts[2]
		const addresse98Q7ng = accounts[1]
		const uint256GG1cME7 = await KPLAYallX3Kk.balanceOf.call(addressU2rUMhw, {from: accounts[3]});
		const addresstaH1TKF = await KPLAYallX3Kk.freeze.call(addressHSgiECe, {from: accounts[4]});
//		const addressdf9XaQ = await KPLAYallX3Kk.transferOwnership.call(addresse98Q7ng, {from: accounts[3]});

		assert.equal(uint256GG1cME7, BigInt("10000000000000000"))
		await expect(KPLAYallX3Kk.transferOwnership.call(addresse98Q7ng, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintX18hoU5 = BigInt("1959")
		const uintemv5fjx = BigInt("1352")
		const addressQtKvG0x = accounts[5]
		const uintA3ZG8rA = BigInt("918")
		const uintHAJnTaN = BigInt("801")
		const addressTPMvomr = accounts[4]
		const uintuqeTiqL = BigInt("1076")
		const addressrtlZVG7 = accounts[1]
		const addressIs7p0Ra = accounts[5]
//		const addressiM36has = await KPLAYallX3Kk.lock.call(addressQtKvG0x, uintemv5fjx, uintX18hoU5, {from: accounts[4]});
//		await KPLAYallX3Kk.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresshFHRzu6 = await KPLAYallX3Kk.lockAfter.call(addressTPMvomr, uintHAJnTaN, uintA3ZG8rA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolleeFdvv = await KPLAYallX3Kk.approve.call(addressrtlZVG7, uintuqeTiqL, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GG1cME7 = await KPLAYallX3Kk.balanceOf.call(addressIs7p0Ra, {from: accounts[3]});

		await expect(KPLAYallX3Kk.lock.call(addressQtKvG0x, uintemv5fjx, uintX18hoU5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintp5i94A = BigInt("667")
		const addressKkamHCW = accounts[5]
		const addresssdV4mQw = accounts[2]
		const uintO330441 = BigInt("411")
		const addressY1zYKg = accounts[1]
		const addressJCVOKYE = accounts[2]
		const uinteRmdhSl = BigInt("333")
		const addressqPkaWaT = accounts[5]
		const addressGqxzxGs = accounts[2]
		const addressomZx1U4 = accounts[3]
		const addressdK9d8Zn = accounts[0]
		const uint256iD0A00H = await KPLAYallX3Kk.afterTime.call(uintp5i94A, {from: accounts[2]});
		const uint256U3xxQ0B = await KPLAYallX3Kk.balanceOf.call(addressKkamHCW, {from: "0x0000000000000000000000000000000000000001"});
		const addressZ7QwCpd = await KPLAYallX3Kk.transferOwnership.call(addresssdV4mQw, {from: accounts[4]});
//		const boolx0UMXNb = await KPLAYallX3Kk.transferFrom.call(addressJCVOKYE, addressY1zYKg, uintO330441, {from: accounts[1]});
//		const boolKPPhx4F = await KPLAYallX3Kk.decreaseAllowance.call(addressqPkaWaT, uinteRmdhSl, {from: accounts[2]});
//		const addressZPivFKF = await KPLAYallX3Kk.freeze.call(addressGqxzxGs, {from: accounts[4]});
//		const addressyucv90W = await KPLAYallX3Kk.transferOwnership.call(addressomZx1U4, {from: accounts[2]});
//		const uint256s6pu1q = await KPLAYallX3Kk.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Z2qHpZw = await KPLAYallX3Kk.lockCount.call(addressdK9d8Zn, {from: accounts[5]});

		assert.equal(uint256U3xxQ0B, BigInt("0"))
		assert.equal(uint256iD0A00H, BigInt("1630228218"))
		await expect(KPLAYallX3Kk.transferFrom.call(addressJCVOKYE, addressY1zYKg, uintO330441, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const addresslDKfVWh = accounts[5]
		const uintavYX2J8 = BigInt("1387")
		const addressDaFAX9p = accounts[0]
		const uint256GG1cME7 = await KPLAYallX3Kk.balanceOf.call(addresslDKfVWh, {from: accounts[3]});
		const boolxJoTPrF = await KPLAYallX3Kk.increaseAllowance.call(addressDaFAX9p, uintavYX2J8, {from: accounts[0]});
//		await KPLAYallX3Kk.pause.call({from: accounts[4]});

		assert.equal(boolxJoTPrF, true)
		assert.equal(uint256GG1cME7, BigInt("0"))
		await expect(KPLAYallX3Kk.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintctUzwfh = BigInt("667")
		const uintCltigB5 = BigInt("932")
		const addresscCZndc = accounts[5]
		const addresstNCSeAT = accounts[4]
		const uintu06gld = BigInt("411")
		const addresstkDa4g9 = accounts[2]
		const addressaXQ81tj = accounts[2]
		const addressTnRUKxY = accounts[0]
		const uint256iD0A00H = await KPLAYallX3Kk.afterTime.call(uintctUzwfh, {from: accounts[2]});
//		const addressBXf4v2 = await KPLAYallX3Kk.unlock.call(addresscCZndc, uintCltigB5, {from: accounts[4]});
//		const uint256U3xxQ0B = await KPLAYallX3Kk.balanceOf.call(addresstNCSeAT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolx0UMXNb = await KPLAYallX3Kk.transferFrom.call(addressaXQ81tj, addresstkDa4g9, uintu06gld, {from: accounts[1]});
//		const uint256Z2qHpZw = await KPLAYallX3Kk.lockCount.call(addressTnRUKxY, {from: accounts[5]});

		assert.equal(uint256iD0A00H, BigInt("1630228214"))
		await expect(KPLAYallX3Kk.unlock.call(addresscCZndc, uintCltigB5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const addressVum3hU = accounts[1]
		const addressYVKzCgE = accounts[4]
		const uintJcqTwXK = BigInt("411")
		const addressH97KHDu = accounts[3]
		const addressSAAcJrJ = accounts[2]
		const uint256O5qRlHw = await KPLAYallX3Kk.balanceOf.call(addressVum3hU, {from: accounts[3]});
		const addressnes8Q4 = await KPLAYallX3Kk.unfreeze.call(addressYVKzCgE, {from: accounts[4]});
//		const boolx0UMXNb = await KPLAYallX3Kk.transferFrom.call(addressSAAcJrJ, addressH97KHDu, uintJcqTwXK, {from: accounts[1]});

		assert.equal(uint256O5qRlHw, BigInt("0"))
		await expect(KPLAYallX3Kk.transferFrom.call(addressSAAcJrJ, addressH97KHDu, uintJcqTwXK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const addressvBj1tXY = accounts[0]
		const uintW10CDLL = BigInt("681")
		const uintJgucir = BigInt("1120")
		const addressznPfLZc = accounts[0]
		const uintG89udk = BigInt("411")
		const addresszjw0tzF = accounts[3]
		const addressw8vgJDV = accounts[2]
		const addressy4eqwiG = accounts[0]
		const uint256O5qRlHw = await KPLAYallX3Kk.balanceOf.call(addressvBj1tXY, {from: accounts[3]});
		const uint256iD0A00H = await KPLAYallX3Kk.afterTime.call(uintW10CDLL, {from: accounts[2]});
		const boolew42RdD = await KPLAYallX3Kk.mint.call(addressznPfLZc, uintJgucir, {from: accounts[4]});
//		const boolx0UMXNb = await KPLAYallX3Kk.transferFrom.call(addressw8vgJDV, addresszjw0tzF, uintG89udk, {from: accounts[1]});
//		const uint256Z2qHpZw = await KPLAYallX3Kk.lockCount.call(addressy4eqwiG, {from: accounts[5]});
//		await KPLAYallX3Kk.whenNotPaused.call({from: accounts[0]});

		assert.equal(boolew42RdD, true)
		assert.equal(uint256O5qRlHw, BigInt("0"))
		assert.equal(uint256iD0A00H, BigInt("1630228218"))
		await expect(KPLAYallX3Kk.transferFrom.call(addressw8vgJDV, addresszjw0tzF, uintG89udk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYallX3Kk = await KPLAY.new({from: accounts[4]});
		const uintqxD2Oao = BigInt("1038")
		const uintkI4STy1 = BigInt("1222")
		const addressSv2FxRn = accounts[0]
		const addressjUANvlN = accounts[0]
		const uintfw5PWvY = BigInt("667")
		const uintNFRaz87 = BigInt("932")
		const addressDKYfbTN = accounts[5]
		const uintxixUCZ = BigInt("236")
		const addressjcVIZ0h = accounts[3]
		const uintbCmyWMa = BigInt("411")
		const addressf3MJBy0 = accounts[3]
		const addressKVNmCKq = accounts[2]
		const addressUvwEBJU = accounts[1]
		const boold4YmFO = await KPLAYallX3Kk.transferWithLock.call(addressSv2FxRn, uintkI4STy1, uintqxD2Oao, {from: accounts[4]});
		const uint256O5qRlHw = await KPLAYallX3Kk.balanceOf.call(addressjUANvlN, {from: accounts[3]});
		const uint256iD0A00H = await KPLAYallX3Kk.afterTime.call(uintfw5PWvY, {from: accounts[2]});
//		const addressBXf4v2 = await KPLAYallX3Kk.unlock.call(addressDKYfbTN, uintNFRaz87, {from: accounts[4]});
//		const boolYu0tyhY = await KPLAYallX3Kk.increaseAllowance.call(addressjcVIZ0h, uintxixUCZ, {from: accounts[0]});
//		await KPLAYallX3Kk.unpause.call({from: accounts[3]});
//		const boolx0UMXNb = await KPLAYallX3Kk.transferFrom.call(addressKVNmCKq, addressf3MJBy0, uintbCmyWMa, {from: accounts[1]});
//		const uint256Z2qHpZw = await KPLAYallX3Kk.lockCount.call(addressUvwEBJU, {from: accounts[5]});

		assert.equal(boold4YmFO, true)
		assert.equal(uint256O5qRlHw, BigInt("0"))
		assert.equal(uint256iD0A00H, BigInt("1630228205"))
		await expect(KPLAYallX3Kk.unlock.call(addressDKYfbTN, uintNFRaz87, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})