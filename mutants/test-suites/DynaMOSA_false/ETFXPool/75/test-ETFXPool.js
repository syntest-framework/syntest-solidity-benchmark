const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringjE6HJI = "U1QOszHKtg75zvfXrtG89aiVcbsslgNSntNt5mYuBUI0Q8PJ8Am8Dyv0r15Q7Cn90U7sNxwC0xisXXHdfgbItkF91oJTJ"
		const stringzhT9GCl = "5VuyWIkHtWkTvx8taXsrBV"
		const uintv0iKjf1 = BigInt("146")
		const ETFXPoolAAEFM2Q = await ETFXPool.new(stringjE6HJI, stringzhT9GCl, uintv0iKjf1, {from: accounts[3]});
		const uintP5EpuYh = BigInt("726")
		await ETFXPoolAAEFM2Q.getReward.call({from: accounts[4]});
		await ETFXPoolAAEFM2Q.onlyOwner.call({from: accounts[4]});
		const uint8qJaAAH = await ETFXPoolAAEFM2Q.decimals.call({from: accounts[2]});
		const uint256LGdZgva = await ETFXPoolAAEFM2Q.withdraw.call(uintP5EpuYh, {from: accounts[1]});
		await ETFXPoolAAEFM2Q.exit.call({from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolnObKTNJ = await ETFXPool.new({from: accounts[4]});
		const uintsfDrzAj = BigInt("1370")
		const addressxuif0lK = accounts[1]
		const addressGjhkRh = accounts[0]
		const uintIrv0DQk = BigInt("1884")
		const stringM76IRUk = await ETFXPoolnObKTNJ.symbol.call({from: accounts[1]});
		const boolmIZbaT2 = await ETFXPoolnObKTNJ.approve.call(addressxuif0lK, uintsfDrzAj, {from: accounts[1]});
		const uint256xYBeo2w = await ETFXPoolnObKTNJ.balanceOf.call(addressGjhkRh, {from: accounts[0]});
		const uint8MaRPrNp = await ETFXPoolnObKTNJ.decimals.call({from: accounts[0]});
//		await ETFXPoolnObKTNJ.onlyOwner.call({from: accounts[1]});
//		const uint256NB37sr = await ETFXPoolnObKTNJ.withdraw.call(uintIrv0DQk, {from: accounts[3]});

		assert.equal(boolmIZbaT2, true)
		assert.equal(stringM76IRUk, "FETFX")
		assert.equal(uint256xYBeo2w, BigInt("0"))
		assert.equal(uint8MaRPrNp, BigInt("8"))
		await expect(ETFXPoolnObKTNJ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGk0bJ9V = await ETFXPool.new({from: accounts[4]});
		const uint0hN5a7 = BigInt("1373")
		const addresselJzQq = accounts[2]
		const addressqdZ1ceB = accounts[5]
//		const boolumZazsx = await ETFXPoolGk0bJ9V.decreaseAllowance.call(addresselJzQq, uint0hN5a7, {from: accounts[2]});
//		const uint8si8oU0d = await ETFXPoolGk0bJ9V.decimals.call({from: accounts[4]});
//		const uint256KjthbEs = await ETFXPoolGk0bJ9V.earned.call(addressqdZ1ceB, {from: accounts[5]});

		await expect(ETFXPoolGk0bJ9V.decreaseAllowance.call(addresselJzQq, uint0hN5a7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwsvX0sa = await ETFXPool.new({from: accounts[3]});
		const uintywzouwY = BigInt("269")
		const addressc6CSVOp = accounts[2]
		const addresslAcJUXi = await ETFXPoolwsvX0sa.owner.call({from: accounts[0]});
//		await ETFXPoolwsvX0sa.nonReentrant.call({from: accounts[3]});
//		const boolTb68Rtm = await ETFXPoolwsvX0sa.decreaseAllowance.call(addressc6CSVOp, uintywzouwY, {from: accounts[1]});
//		await ETFXPoolwsvX0sa.getReward.call({from: accounts[1]});

		assert.equal(addresslAcJUXi, 0x5C7151FAF1D992d186EB59909bca1a169F7C9850)
		await expect(ETFXPoolwsvX0sa.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrK4u7jC = await ETFXPool.new({from: accounts[1]});
		const uintrp3bhT = BigInt("499")
		const addressNMJCIKM = accounts[2]
		const addressHUUGLZI = accounts[2]
		const uinty01pI7w = BigInt("986")
		const addressWN8dqA = accounts[0]
		const addressxc036rD = accounts[1]
		const uinty1CezoI = BigInt("2023")
		const uintdOtR4y = BigInt("457")
		const addressKJT6DAo = accounts[3]
		const addressPBlGgGh = accounts[3]
//		const boolekbHAIC = await ETFXPoolrK4u7jC.transferFrom.call(addressHUUGLZI, addressNMJCIKM, uintrp3bhT, {from: accounts[0]});
//		const boolZisnBbo = await ETFXPoolrK4u7jC.increaseAllowance.call(addressWN8dqA, uinty01pI7w, {from: accounts[0]});
//		const uint256MaTGfFB = await ETFXPoolrK4u7jC.balanceOf.call(addressxc036rD, {from: accounts[4]});
//		const uint256JmThA0J = await ETFXPoolrK4u7jC.withdraw.call(uinty1CezoI, {from: accounts[1]});
//		await ETFXPoolrK4u7jC.renounceOwnership.call({from: accounts[3]});
//		const boolebDZtS = await ETFXPoolrK4u7jC.transferFrom.call(addressPBlGgGh, addressKJT6DAo, uintdOtR4y, {from: accounts[2]});

		await expect(ETFXPoolrK4u7jC.transferFrom.call(addressHUUGLZI, addressNMJCIKM, uintrp3bhT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgixV6iN = await ETFXPool.new({from: accounts[3]});
		const uintG95R7F2 = BigInt("402")
		const uint256Gomm0N = await ETFXPoolgixV6iN.totalSupply.call({from: accounts[3]});
//		const uint256TdnKAGZ = await ETFXPoolgixV6iN.withdraw.call(uintG95R7F2, {from: accounts[0]});
//		const stringJ3kp7Xk = await ETFXPoolgixV6iN.name.call({from: accounts[5]});
//		const uint8HVR1V6w = await ETFXPoolgixV6iN.decimals.call({from: accounts[0]});
//		const stringgAydAD6 = await ETFXPoolgixV6iN.name.call({from: accounts[5]});

		assert.equal(uint256Gomm0N, BigInt("0"))
		await expect(ETFXPoolgixV6iN.withdraw.call(uintG95R7F2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPN8mInl = await ETFXPool.new({from: accounts[2]});
		const addressqP3C3E = accounts[2]
		const addresszxVAN4C = accounts[2]
		const addresspelHVpz = accounts[0]
		const uinttcZvXi1 = BigInt("1956")
		const uint256BtI0jT = await ETFXPoolPN8mInl.balanceOf.call(addressqP3C3E, {from: accounts[1]});
		const uint256UjqsEAb = await ETFXPoolPN8mInl.allowance.call(addresspelHVpz, addresszxVAN4C, {from: accounts[4]});
//		const uint256ApYgB8f = await ETFXPoolPN8mInl.stake.call(uinttcZvXi1, {from: accounts[2]});

		assert.equal(uint256BtI0jT, BigInt("0"))
		assert.equal(uint256UjqsEAb, BigInt("0"))
		await expect(ETFXPoolPN8mInl.stake.call(uinttcZvXi1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolXT06t4s = await ETFXPool.new({from: accounts[1]});
		const addressvZh5wF3 = accounts[2]
		const addressN2IX2x2 = "0x0000000000000000000000000000000000000001"
		const addressXpF88K = accounts[2]
		const addressn7Lc0R = await ETFXPoolXT06t4s.owner.call({from: accounts[0]});
//		const addressfVsN6si = await ETFXPoolXT06t4s.transferOwnership.call(addressvZh5wF3, {from: accounts[0]});
//		const uint256P4gF5jW = await ETFXPoolXT06t4s.balanceOf.call(addressN2IX2x2, {from: accounts[3]});
//		const addressiYVHKE = await ETFXPoolXT06t4s.transferOwnership.call(addressXpF88K, {from: accounts[3]});

		assert.equal(addressn7Lc0R, 0xc51571d70eEd2ccDfE410ED6d59c61e4dD5Da91b)
		await expect(ETFXPoolXT06t4s.transferOwnership.call(addressvZh5wF3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgixV6iN = await ETFXPool.new({from: accounts[3]});
		const uintapUtPqf = BigInt("1888")
		const uint256Gomm0N = await ETFXPoolgixV6iN.totalSupply.call({from: accounts[3]});
		const stringJ3kp7Xk = await ETFXPoolgixV6iN.name.call({from: accounts[5]});
		const uint8HVR1V6w = await ETFXPoolgixV6iN.decimals.call({from: accounts[0]});
//		const uint256CqOWAvo = await ETFXPoolgixV6iN.withdraw.call(uintapUtPqf, {from: accounts[3]});
//		const stringgAydAD6 = await ETFXPoolgixV6iN.name.call({from: accounts[5]});

		assert.equal(stringJ3kp7Xk, "ETFX-FARM")
		assert.equal(uint256Gomm0N, BigInt("0"))
		assert.equal(uint8HVR1V6w, BigInt("8"))
		await expect(ETFXPoolgixV6iN.withdraw.call(uintapUtPqf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGGtrK9W = await ETFXPool.new({from: accounts[1]});
		const uintImF9HKx = BigInt("407")
		const addressbtnvhsh = accounts[1]
		const addressBzIDlEh = accounts[3]
		const uintavA2ySr = BigInt("1549")
		const addressjUztw0t = accounts[3]
		const uint256n1QyfyI = await ETFXPoolGGtrK9W.rewardPerToken.call({from: accounts[3]});
//		await ETFXPoolGGtrK9W.getReward.call({from: accounts[0]});
//		const boolvCr0q5 = await ETFXPoolGGtrK9W.transferFrom.call(addressBzIDlEh, addressbtnvhsh, uintImF9HKx, {from: accounts[4]});
//		const boolEzc7tnt = await ETFXPoolGGtrK9W.approve.call(addressjUztw0t, uintavA2ySr, {from: accounts[4]});

		assert.equal(uint256n1QyfyI, BigInt("0"))
		await expect(ETFXPoolGGtrK9W.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolRR0Tlkg = await ETFXPool.new({from: accounts[1]});
		const uintgXMstsb = BigInt("673")
		const addressN72dbKL = accounts[0]
		const uinteT66dpc = BigInt("345")
		const addressFdinHb1 = accounts[3]
		const addressglz8LU = "0x0000000000000000000000000000000000000001"
		const uintDAbaOXJ = BigInt("1414")
		const addressXjbA7sj = accounts[2]
		const addressG1pfEJ1 = accounts[4]
//		const boolXILbgQ = await ETFXPoolRR0Tlkg.transfer.call(addressN72dbKL, uintgXMstsb, {from: accounts[3]});
//		const boolVyd3Uqg = await ETFXPoolRR0Tlkg.transferFrom.call(addressglz8LU, addressFdinHb1, uinteT66dpc, {from: accounts[5]});
//		const boolI8qIY5D = await ETFXPoolRR0Tlkg.approve.call(addressXjbA7sj, uintDAbaOXJ, {from: accounts[5]});
//		const uint256gdt79NL = await ETFXPoolRR0Tlkg.earned.call(addressG1pfEJ1, {from: accounts[5]});

		await expect(ETFXPoolRR0Tlkg.transfer.call(addressN72dbKL, uintgXMstsb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolmepwd5d = await ETFXPool.new({from: accounts[5]});
		const uint8lcYdIZ = await ETFXPoolmepwd5d.decimals.call({from: accounts[5]});
//		await ETFXPoolmepwd5d.exit.call({from: accounts[3]});

		assert.equal(uint8lcYdIZ, BigInt("8"))
		await expect(ETFXPoolmepwd5d.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgixV6iN = await ETFXPool.new({from: accounts[3]});
		const uintZC8Ms3C = BigInt("990")
		const addressZS3gFTK = accounts[0]
		const uintYlVGJ8 = BigInt("1022")
		const boolznt8zCa = await ETFXPoolgixV6iN.increaseAllowance.call(addressZS3gFTK, uintZC8Ms3C, {from: accounts[1]});
//		const uint256TdnKAGZ = await ETFXPoolgixV6iN.withdraw.call(uintYlVGJ8, {from: accounts[0]});

		assert.equal(boolznt8zCa, true)
		await expect(ETFXPoolgixV6iN.withdraw.call(uintYlVGJ8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGGtrK9W = await ETFXPool.new({from: accounts[1]});
//		await ETFXPoolGGtrK9W.renounceOwnership.call({from: accounts[1]});
//		const uint256n1QyfyI = await ETFXPoolGGtrK9W.rewardPerToken.call({from: accounts[3]});

		await expect(ETFXPoolGGtrK9W.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGGtrK9W = await ETFXPool.new({from: accounts[1]});
		const uintESgzXOi = BigInt("80")
		const addressatnXzoI = accounts[3]
		const addresslIwxp4J = accounts[0]
		const uint256n1QyfyI = await ETFXPoolGGtrK9W.rewardPerToken.call({from: accounts[3]});
		const boolOWY32du = await ETFXPoolGGtrK9W.increaseAllowance.call(addressatnXzoI, uintESgzXOi, {from: accounts[1]});
		const addressiey74Mi = await ETFXPoolGGtrK9W.transferOwnership.call(addresslIwxp4J, {from: accounts[1]});

		assert.equal(boolOWY32du, true)
		assert.equal(uint256n1QyfyI, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFFyQI5W = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteBPpfOP = BigInt("1218")
		const addressGoVJRXS = accounts[0]
		const uintrOP1csT = BigInt("53")
		const addressjXRMcwI = await ETFXPoolFFyQI5W.owner.call({from: accounts[4]});
		const boolqjnSrKQ = await ETFXPoolFFyQI5W.approve.call(addressGoVJRXS, uinteBPpfOP, {from: accounts[0]});
		const uint8CVn8QZO = await ETFXPoolFFyQI5W.decimals.call({from: accounts[0]});
		const uint256IZL8gfE = await ETFXPoolFFyQI5W.withdraw.call(uintrOP1csT, {from: accounts[2]});
	});
})