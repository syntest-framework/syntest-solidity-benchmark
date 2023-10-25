const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYRweoKBn = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGxDqUz6 = BigInt("28")
		const addressPl6nhWG = accounts[1]
		const addressobPT33u = accounts[0]
		const uintyjiagin = BigInt("2037")
		const addressXjHTXsh = accounts[0]
		const uintiMtEwEX = BigInt("362")
		const addressoG504I = accounts[3]
		const uintHEfSWEm = BigInt("1256")
		const addressYQjy9ar = "0x0000000000000000000000000000000000000001"
		const uintUaTmm8K = BigInt("1759")
		const uintAxnhflO = BigInt("1460")
		const addressbNY2MbF = accounts[1]
		const uintJNq5vO2 = BigInt("946")
		const addresszqyBLIP = accounts[0]
		const boolcPkwEql = await KPLAYRweoKBn.transferFrom.call(addressobPT33u, addressPl6nhWG, uintGxDqUz6, {from: accounts[0]});
		const boolQ3EyNDA = await KPLAYRweoKBn.approve.call(addressXjHTXsh, uintyjiagin, {from: accounts[5]});
		const boolb0qZbhF = await KPLAYRweoKBn.approve.call(addressoG504I, uintiMtEwEX, {from: accounts[4]});
		const booleSUqCcH = await KPLAYRweoKBn.decreaseAllowance.call(addressYQjy9ar, uintHEfSWEm, {from: accounts[1]});
		const boolZ0YxOII = await KPLAYRweoKBn.transferWithLock.call(addressbNY2MbF, uintAxnhflO, uintUaTmm8K, {from: accounts[0]});
		const boolhOuRYnW = await KPLAYRweoKBn.transfer.call(addresszqyBLIP, uintJNq5vO2, {from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAYoDjmU3w = await KPLAY.new({from: accounts[1]});
		const uinttIkhEwk = BigInt("1774")
		const uintk2ji7p = BigInt("1430")
		const addressQFe67Tw = accounts[4]
		const addressKNrc6Xi = await KPLAYoDjmU3w.lock.call(addressQFe67Tw, uintk2ji7p, uinttIkhEwk, {from: accounts[4]});
		const uint256nreRIsd = await KPLAYoDjmU3w.currentTime.call({from: accounts[3]});
		await KPLAYoDjmU3w.whenNotPaused.call({from: accounts[3]});

		await expect(KPLAYoDjmU3w.lock.call(addressQFe67Tw, uintk2ji7p, uinttIkhEwk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const addressdwW0yIB = accounts[3]
		await KPLAYKINg6XU.whenNotFrozen.call({from: accounts[4]});
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressdwW0yIB, {from: accounts[0]});

		await expect(KPLAYKINg6XU.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRZGcFI1 = await KPLAY.new({from: accounts[3]});
		const uintRrSgHk = BigInt("1565")
		const addresst2HAq1G = accounts[3]
		const uintrlQVhGO = BigInt("1844")
		const addressyTHp9XQ = accounts[1]
		const addressz5oK1ZE = accounts[3]
		const uintTDbKMkw = BigInt("1015")
		const uintzDGIwd = BigInt("496")
		const addressA9f1mvK = accounts[2]
		const uintCsCx7rh = BigInt("1413")
		const addressfav8uGw = "0x0000000000000000000000000000000000000001"
		const uintL4sBP5K = BigInt("877")
		const addressZNQkYTJ = accounts[2]
		const boolR4NyjH = await KPLAYRZGcFI1.decreaseAllowance.call(addresst2HAq1G, uintRrSgHk, {from: accounts[0]});
		const boolmqsRB2O = await KPLAYRZGcFI1.transferFrom.call(addressz5oK1ZE, addressyTHp9XQ, uintrlQVhGO, {from: "0x0000000000000000000000000000000000000001"});
		const boolz3BDeeh = await KPLAYRZGcFI1.transferWithLockAfter.call(addressA9f1mvK, uintzDGIwd, uintTDbKMkw, {from: accounts[1]});
		const boollMteru8 = await KPLAYRZGcFI1.transfer.call(addressfav8uGw, uintCsCx7rh, {from: accounts[0]});
		await KPLAYRZGcFI1.lockState.call(addressZNQkYTJ, uintL4sBP5K, {from: accounts[3]});

		await expect(KPLAYRZGcFI1.decreaseAllowance.call(addresst2HAq1G, uintRrSgHk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLW6NhVx = await KPLAY.new({from: accounts[5]});
		const addressb4BHouD = "0x0000000000000000000000000000000000000001"
		const uintjOYaHlD = BigInt("345")
		const uintm8khwjB = BigInt("1569")
		const addressNclAcj9 = accounts[4]
		const uint256mRgwDp = await KPLAYLW6NhVx.lockCount.call(addressb4BHouD, {from: accounts[4]});
		await KPLAYLW6NhVx.pause.call({from: accounts[1]});
		const boolJOyuSte = await KPLAYLW6NhVx.transferWithLock.call(addressNclAcj9, uintm8khwjB, uintjOYaHlD, {from: accounts[0]});

		assert.equal(uint256mRgwDp, BigInt("0"))
		await expect(KPLAYLW6NhVx.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwG9SyVE = await KPLAY.new({from: accounts[5]});
		const uintyI4sIw7 = BigInt("770")
		const addressEDqMNml = accounts[3]
		const addressM6n8mJL = accounts[2]
		const addressNUYAr5 = accounts[0]
		const addressGQQp1tM = accounts[0]
		const addresshJMKKqb = accounts[4]
		const boolXFOybqv = await KPLAYwG9SyVE.transferFrom.call(addressM6n8mJL, addressEDqMNml, uintyI4sIw7, {from: accounts[0]});
		const uint256hJ0GbmQ = await KPLAYwG9SyVE.allowance.call(addressGQQp1tM, addressNUYAr5, {from: accounts[3]});
		await KPLAYwG9SyVE.pause.call({from: accounts[3]});
		const boolNsfrUpi = await KPLAYwG9SyVE.isFrozen.call(addresshJMKKqb, {from: accounts[2]});

		await expect(KPLAYwG9SyVE.transferFrom.call(addressM6n8mJL, addressEDqMNml, uintyI4sIw7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYc00SAvQ = await KPLAY.new({from: accounts[2]});
		const uintY2jFJhp = BigInt("1526")
		const addressNcPONqd = accounts[0]
		const addressrqedAy8 = accounts[3]
		const uintGBQ1ZWH = BigInt("1203")
		const addressihYKf2 = accounts[3]
		const addresslemHW7e = accounts[3]
		const boolLWJg7m = await KPLAYc00SAvQ.transfer.call(addressNcPONqd, uintY2jFJhp, {from: accounts[2]});
		const uint256t94WhuY = await KPLAYc00SAvQ.lockCount.call(addressrqedAy8, {from: "0x0000000000000000000000000000000000000001"});
		const boolfD8dhh = await KPLAYc00SAvQ.transfer.call(addressihYKf2, uintGBQ1ZWH, {from: accounts[4]});
		const boolOGdfzu = await KPLAYc00SAvQ.isFrozen.call(addresslemHW7e, {from: accounts[4]});
		await KPLAYc00SAvQ.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolLWJg7m, true)
		assert.equal(uint256t94WhuY, BigInt("0"))
		await expect(KPLAYc00SAvQ.transfer.call(addressihYKf2, uintGBQ1ZWH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const addressKu5GUEE = accounts[4]
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressKu5GUEE, {from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const addressxWBgF9l = accounts[5]
		const addressLaU0oO2 = accounts[3]
		const addressK6waz28 = accounts[4]
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressxWBgF9l, {from: accounts[0]});
		const uint256ORNpEUu = await KPLAYKINg6XU.allowance.call(addressK6waz28, addressLaU0oO2, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYKINg6XU.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256ORNpEUu, BigInt("0"))
		await expect(KPLAYKINg6XU.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwG9SyVE = await KPLAY.new({from: accounts[5]});
		const uintigqznPh = BigInt("770")
		const addressexqWgh4 = accounts[3]
		const addressvIzZ2K = accounts[2]
		const addressBpFTtUG = accounts[4]
		const addressoRIcZdj = accounts[0]
		const addressCmXnKKO = accounts[0]
		const addresstOWESXN = accounts[4]
		await KPLAYwG9SyVE.unpause.call({from: accounts[5]});
		const boolXFOybqv = await KPLAYwG9SyVE.transferFrom.call(addressvIzZ2K, addressexqWgh4, uintigqznPh, {from: accounts[0]});
		const uint256xTic9Dj = await KPLAYwG9SyVE.balanceOf.call(addressBpFTtUG, {from: accounts[1]});
		const uint256hJ0GbmQ = await KPLAYwG9SyVE.allowance.call(addressCmXnKKO, addressoRIcZdj, {from: accounts[3]});
		await KPLAYwG9SyVE.pause.call({from: accounts[3]});
		const boolNsfrUpi = await KPLAYwG9SyVE.isFrozen.call(addresstOWESXN, {from: accounts[2]});

		await expect(KPLAYwG9SyVE.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwG9SyVE = await KPLAY.new({from: accounts[5]});
		const addresshnFnzIm = accounts[5]
		const uinttiSDX9x = BigInt("770")
		const addressajZaFTo = accounts[3]
		const addressGcYUGze = accounts[2]
		const addresshIS6Iky = accounts[4]
		const addressUb9rLT6 = accounts[0]
		const uint256n3bHTer = await KPLAYwG9SyVE.balanceOf.call(addresshnFnzIm, {from: accounts[3]});
		const boolXFOybqv = await KPLAYwG9SyVE.transferFrom.call(addressGcYUGze, addressajZaFTo, uinttiSDX9x, {from: accounts[0]});
		await KPLAYwG9SyVE.pause.call({from: accounts[3]});
		const boolNsfrUpi = await KPLAYwG9SyVE.isFrozen.call(addresshIS6Iky, {from: accounts[2]});
		const addressGSQT17m = await KPLAYwG9SyVE.unfreeze.call(addressUb9rLT6, {from: accounts[5]});

		assert.equal(uint256n3bHTer, BigInt("10000000000000000"))
		await expect(KPLAYwG9SyVE.transferFrom.call(addressGcYUGze, addressajZaFTo, uinttiSDX9x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYq7ZcUo = await KPLAY.new({from: accounts[3]});
		const uintIpCTyzd = BigInt("964")
		const addressT5M7gxW = accounts[4]
		const addressE01h2ov = "0x0000000000000000000000000000000000000001"
		const boolc2517XO = await KPLAYq7ZcUo.increaseAllowance.call(addressT5M7gxW, uintIpCTyzd, {from: accounts[1]});
		const addressdQZ3l3t = await KPLAYq7ZcUo.transferOwnership.call(addressE01h2ov, {from: accounts[3]});
		const uint256zU9iBad = await KPLAYq7ZcUo.currentTime.call({from: accounts[0]});

		assert.equal(boolc2517XO, true)
		assert.equal(uint256zU9iBad, BigInt("1630228012"))
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const uintBHPhFvd = BigInt("1073")
		const addressjEgYCY3 = accounts[4]
		const addressMAr9dyN = accounts[5]
		const boolTPYFgE = await KPLAYKINg6XU.approve.call(addressjEgYCY3, uintBHPhFvd, {from: accounts[3]});
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressMAr9dyN, {from: accounts[0]});

		assert.equal(boolTPYFgE, true)
	});

	it('test for KPLAY', async () => {
		const KPLAYbw3wVe6 = await KPLAY.new({from: accounts[2]});
		const uintbfM5413 = BigInt("842")
		const uintVC4UxNb = BigInt("1484")
		const addressz8rR9m = accounts[4]
		const uint256Qlwnmiq = await KPLAYbw3wVe6.afterTime.call(uintbfM5413, {from: accounts[4]});
		await KPLAYbw3wVe6.lockState.call(addressz8rR9m, uintVC4UxNb, {from: accounts[0]});
		await KPLAYbw3wVe6.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Qlwnmiq, BigInt("1630228851"))
		await expect(KPLAYbw3wVe6.lockState.call(addressz8rR9m, uintVC4UxNb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const addressQtD0POD = accounts[2]
		const addressWnMSGcE = accounts[4]
		const uint256aDz6sip = await KPLAYKINg6XU.totalSupply.call({from: accounts[3]});
		const uint256xz4IYgX = await KPLAYKINg6XU.lockCount.call(addressQtD0POD, {from: accounts[4]});
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressWnMSGcE, {from: accounts[0]});

		assert.equal(uint256aDz6sip, BigInt("10000000000000000"))
		assert.equal(uint256xz4IYgX, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYGGgkBlx = await KPLAY.new({from: accounts[5]});
		const addressAqeSo7v = accounts[4]
		const addressbJohCR1 = accounts[4]
		const addressIBjwtWX = accounts[3]
		const uint256u4AuFp = await KPLAYGGgkBlx.balanceOf.call(addressAqeSo7v, {from: accounts[3]});
		const uint256zy1xQm = await KPLAYGGgkBlx.balanceOf.call(addressbJohCR1, {from: accounts[5]});
		const boolXcnGXqq = await KPLAYGGgkBlx.isFrozen.call(addressIBjwtWX, {from: accounts[3]});
		await KPLAYGGgkBlx.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolXcnGXqq, false)
		assert.equal(uint256u4AuFp, BigInt("0"))
		assert.equal(uint256zy1xQm, BigInt("0"))
		await expect(KPLAYGGgkBlx.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const addressi9qjWm6 = accounts[5]
		const addressFrGSKh = "0x0000000000000000000000000000000000000001"
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressi9qjWm6, {from: accounts[0]});
		const addresstf6EPiK = await KPLAYKINg6XU.unfreeze.call(addressFrGSKh, {from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYdNCScT6 = await KPLAY.new({from: accounts[3]});
		const uintt6S05W = BigInt("13")
		const addresswJJYvP = accounts[0]
		const addressRAev1WT = accounts[2]
		const uintCz1h2RF = BigInt("396")
		const addressl6Zk1WO = accounts[3]
		const addressL1fuLGh = accounts[1]
		const booljQeByw = await KPLAYdNCScT6.increaseAllowance.call(addresswJJYvP, uintt6S05W, {from: accounts[0]});
		const addressUzs89J9 = await KPLAYdNCScT6.freeze.call(addressRAev1WT, {from: accounts[3]});
		await KPLAYdNCScT6.onlyOwner.call({from: accounts[5]});
		const boolnNl2uM7 = await KPLAYdNCScT6.transferFrom.call(addressL1fuLGh, addressl6Zk1WO, uintCz1h2RF, {from: accounts[4]});

		assert.equal(booljQeByw, true)
		await expect(KPLAYdNCScT6.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwG9SyVE = await KPLAY.new({from: accounts[5]});
		const addressuIDnvyv = accounts[5]
		const uintOSFPvtF = BigInt("770")
		const addressQ2WrRZh = accounts[5]
		const address6tTBV5 = accounts[2]
		const uintwxsv6rG = BigInt("66")
		const addressBiiEkLv = accounts[2]
		await KPLAYwG9SyVE.pause.call({from: accounts[5]});
		const uint256quB4KBX = await KPLAYwG9SyVE.balanceOf.call(addressuIDnvyv, {from: accounts[4]});
		const boolXFOybqv = await KPLAYwG9SyVE.transferFrom.call(address6tTBV5, addressQ2WrRZh, uintOSFPvtF, {from: accounts[0]});
		const boolZuFpiN = await KPLAYwG9SyVE.transfer.call(addressBiiEkLv, uintwxsv6rG, {from: accounts[5]});

		await expect(KPLAYwG9SyVE.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const addressceNT68R = accounts[4]
		const uintDyM1Lu8 = BigInt("239")
		const uintOjGhKy = BigInt("1519")
		const addressUlM7Tr = accounts[3]
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressceNT68R, {from: accounts[0]});
		const addressU0IZHJ = await KPLAYKINg6XU.lockAfter.call(addressUlM7Tr, uintOjGhKy, uintDyM1Lu8, {from: accounts[0]});

		await expect(KPLAYKINg6XU.lockAfter.call(addressUlM7Tr, uintOjGhKy, uintDyM1Lu8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const uintYxjVzkt = BigInt("460")
		const addressPIq3Dhs = accounts[4]
		const addressr2eWaix = accounts[4]
		const addressHjrGfxV = await KPLAYKINg6XU.burn.call(addressPIq3Dhs, uintYxjVzkt, {from: accounts[0]});
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressr2eWaix, {from: accounts[0]});

		await expect(KPLAYKINg6XU.burn.call(addressPIq3Dhs, uintYxjVzkt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const uintjLvvEbp = BigInt("690")
		const addressMHDkeyX = accounts[0]
		const addressuwO9b9o = accounts[5]
		const addresswoiBbXn = accounts[4]
		const addresshJfjnF = accounts[4]
		const boolHwfE0hp = await KPLAYKINg6XU.mint.call(addressMHDkeyX, uintjLvvEbp, {from: accounts[0]});
		const addressJIaR4N = await KPLAYKINg6XU.transferOwnership.call(addressuwO9b9o, {from: "0x0000000000000000000000000000000000000001"});
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addresswoiBbXn, {from: accounts[0]});
		const addressvn4XGE9 = await KPLAYKINg6XU.unfreeze.call(addresshJfjnF, {from: accounts[3]});

		assert.equal(boolHwfE0hp, true)
		await expect(KPLAYKINg6XU.transferOwnership.call(addressuwO9b9o, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwG9SyVE = await KPLAY.new({from: accounts[5]});
		const uintKRBsp1 = BigInt("1870")
		const uintnwZxFTr = BigInt("1086")
		const addresskofvIKW = accounts[3]
		const uintQ7JTcw3 = BigInt("770")
		const addressBvBqEH3 = accounts[5]
		const addresss2mhwgW = accounts[2]
		const boolBU3Es7X = await KPLAYwG9SyVE.transferWithLock.call(addresskofvIKW, uintnwZxFTr, uintKRBsp1, {from: accounts[5]});
		const boolXFOybqv = await KPLAYwG9SyVE.transferFrom.call(addresss2mhwgW, addressBvBqEH3, uintQ7JTcw3, {from: accounts[0]});

		assert.equal(boolBU3Es7X, true)
		await expect(KPLAYwG9SyVE.transferFrom.call(addresss2mhwgW, addressBvBqEH3, uintQ7JTcw3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYA0ChbO = await KPLAY.new({from: accounts[1]});
		const uintjcvZZW6 = BigInt("1182")
		const uintXgRdT2a = BigInt("1007")
		const addressV9fzOf = accounts[0]
		const uintrudrWJx = BigInt("1907")
		const addressnfQ8fcE = accounts[4]
		const addresspBdR4m3 = accounts[3]
		const uintifI3Vgi = BigInt("1641")
		const addressz41ZCKZ = accounts[4]
		const booliA6YCz = await KPLAYA0ChbO.transferWithLockAfter.call(addressV9fzOf, uintXgRdT2a, uintjcvZZW6, {from: accounts[1]});
		await KPLAYA0ChbO.whenNotFrozen.call({from: accounts[0]});
		const boolJi0Q4b = await KPLAYA0ChbO.transferFrom.call(addresspBdR4m3, addressnfQ8fcE, uintrudrWJx, {from: accounts[4]});
		const uint256AwWAz1h = await KPLAYA0ChbO.currentTime.call({from: accounts[2]});
		const boolg7oyXi1 = await KPLAYA0ChbO.transfer.call(addressz41ZCKZ, uintifI3Vgi, {from: accounts[4]});

		assert.equal(booliA6YCz, true)
		await expect(KPLAYA0ChbO.whenNotFrozen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKINg6XU = await KPLAY.new({from: accounts[0]});
		const uintDxSGXOZ = BigInt("957")
		const addressinzG5Wh = accounts[2]
		const addressvfPF99Y = accounts[4]
		const addressog1oGyn = accounts[5]
		const uintlFZFebv = BigInt("1629")
		const addressIbCULLO = accounts[1]
		const addressuVXnbwi = await KPLAYKINg6XU.unlock.call(addressinzG5Wh, uintDxSGXOZ, {from: accounts[0]});
		const uint256eR87mOc = await KPLAYKINg6XU.balanceOf.call(addressvfPF99Y, {from: accounts[1]});
		const addressMo4lqKA = await KPLAYKINg6XU.transferOwnership.call(addressog1oGyn, {from: accounts[0]});
		const boolHUzyeou = await KPLAYKINg6XU.decreaseAllowance.call(addressIbCULLO, uintlFZFebv, {from: accounts[2]});

		await expect(KPLAYKINg6XU.unlock.call(addressinzG5Wh, uintDxSGXOZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOPHLvSu = await KPLAY.new({from: accounts[1]});
		const addressP1ls4dg = accounts[3]
		const uintuwL8L2I = BigInt("222")
		const uintMqrGMmK = BigInt("133")
		const addressZAYe9TV = accounts[4]
		const uint256C9ebD3D = await KPLAYOPHLvSu.balanceOf.call(addressP1ls4dg, {from: "0x0000000000000000000000000000000000000001"});
		const addressweVl30B = await KPLAYOPHLvSu.lock.call(addressZAYe9TV, uintMqrGMmK, uintuwL8L2I, {from: accounts[1]});

		assert.equal(uint256C9ebD3D, BigInt("0"))
		await expect(KPLAYOPHLvSu.lock.call(addressZAYe9TV, uintMqrGMmK, uintuwL8L2I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})