const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPTAGJLYP = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHg6rwoO = accounts[1]
		const addressMXozZyj = accounts[4]
		const boolaHZTvNQ = true
		const addressvA156RM = accounts[3]
		const uintasM12nE = BigInt("485")
		const uintfP1WSF9 = BigInt("17")
		const addressrU1tCsY = accounts[5]
		const addressKk8Wqb = accounts[4]
		const stringvoulNgT = await LUPTAGJLYP.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YftQyh = await LUPTAGJLYP.balanceOf.call(addressHg6rwoO, {from: accounts[4]});
		const addressfyyuD2V = await LUPTAGJLYP.upgradeTo.call(addressMXozZyj, {from: accounts[4]});
		const boolcpupxu = await LUPTAGJLYP.freezeAccount.call(addressvA156RM, boolaHZTvNQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolBSGi4l = await LUPTAGJLYP.lock.call(addressrU1tCsY, uintfP1WSF9, uintasM12nE, {from: accounts[5]});
		const addressgfBfdJo = await LUPTAGJLYP.notFrozen.call(addressKk8Wqb, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPWwexwVD = await LUP.new({from: accounts[1]});
		const uintDoG1nV9 = BigInt("633")
		const uintqwkdWaO = BigInt("396")
		const addressM0kY1vI = accounts[3]
		const addressn1Bo0t = accounts[4]
		const uintLO6JnR1 = BigInt("47")
		const uintF23VCo = BigInt("497")
		const addressHsvSJRK = accounts[2]
		const boolZAGYrhc = await LUPWwexwVD.transferWithLock.call(addressM0kY1vI, uintqwkdWaO, uintDoG1nV9, {from: accounts[3]});
		const addressmPmFYr7 = await LUPWwexwVD.notFrozen.call(addressn1Bo0t, {from: accounts[1]});
		const boolLTg69UW = await LUPWwexwVD.lock.call(addressHsvSJRK, uintF23VCo, uintLO6JnR1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPWwexwVD.transferWithLock.call(addressM0kY1vI, uintqwkdWaO, uintDoG1nV9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringlLtetKv = "dHdJUg9Q7pgx3aWHuvGcH"
		const stringa3Et1FW = "bctXxJqesNfqD2Mb9nlUUdG"
		const uintZS2y8n7 = BigInt("57")
		const LUPQ3wbtPb = await LUP.new(stringlLtetKv, stringa3Et1FW, uintZS2y8n7, {from: accounts[4]});
		const boolECMVLyn = true
		const addresstpQFdZ5 = accounts[5]
		const addressWm595ls = accounts[3]
		const stringqebTTJM = await LUPQ3wbtPb.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringUywvjid = await LUPQ3wbtPb.name.call({from: accounts[0]});
		const stringI5Dpwew = await LUPQ3wbtPb.symbol.call({from: accounts[2]});
		const uint8VwggyJH = await LUPQ3wbtPb.decimals.call({from: accounts[3]});
		const boolYfNuQlK = await LUPQ3wbtPb.freezeAccount.call(addresstpQFdZ5, boolECMVLyn, {from: "0x0000000000000000000000000000000000000001"});
		const addressufrrLBM = await LUPQ3wbtPb.notFrozen.call(addressWm595ls, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const boolaHgKxKC = false
		const addressCXTPux = accounts[1]
		const stringYgfGooC = await LUPsm13of.symbol.call({from: accounts[3]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressCXTPux, boolaHgKxKC, {from: accounts[4]});

		assert.equal(stringYgfGooC, "LUP")
		await expect(LUPsm13of.freezeAccount.call(addressCXTPux, boolaHgKxKC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const addressFSkLceg = accounts[1]
		const boolaHgKxKC = false
		const addressomP0sO = accounts[2]
		const stringYgfGooC = await LUPsm13of.symbol.call({from: accounts[3]});
		const addressKHvLcg1 = await LUPsm13of.notFrozen.call(addressFSkLceg, {from: accounts[2]});
		const uint89hRxC6 = await LUPsm13of.decimals.call({from: accounts[3]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressomP0sO, boolaHgKxKC, {from: accounts[4]});

		assert.equal(stringYgfGooC, "LUP")
		await expect(LUPsm13of.notFrozen.call(addressFSkLceg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const addressFs3L30U = accounts[1]
		const uintB1qAmW = BigInt("1117")
		const uint1BOZNN = BigInt("1333")
		const addressgI5GNpd = accounts[1]
		const boolaHgKxKC = false
		const addressJHokjn0 = accounts[1]
		const uint256vXqh5J = await LUPsm13of.balanceOf.call(addressFs3L30U, {from: accounts[2]});
		const stringYgfGooC = await LUPsm13of.symbol.call({from: accounts[3]});
		const boolCPsB77m = await LUPsm13of.lock.call(addressgI5GNpd, uint1BOZNN, uintB1qAmW, {from: accounts[1]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressJHokjn0, boolaHgKxKC, {from: accounts[4]});

		assert.equal(stringYgfGooC, "LUP")
		assert.equal(uint256vXqh5J, BigInt("0"))
		await expect(LUPsm13of.lock.call(addressgI5GNpd, uint1BOZNN, uintB1qAmW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const addressG8D4fXd = accounts[1]
		const boolaHgKxKC = false
		const addressGjJB49v = accounts[1]
		const uint256vXqh5J = await LUPsm13of.balanceOf.call(addressG8D4fXd, {from: accounts[2]});
		const stringYgfGooC = await LUPsm13of.symbol.call({from: accounts[3]});
		const stringb2mqAoB = await LUPsm13of.name.call({from: accounts[4]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressGjJB49v, boolaHgKxKC, {from: accounts[4]});

		assert.equal(stringYgfGooC, "LUP")
		assert.equal(stringb2mqAoB, "LINKUP Token")
		assert.equal(uint256vXqh5J, BigInt("0"))
		await expect(LUPsm13of.freezeAccount.call(addressGjJB49v, boolaHgKxKC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const uintjaHBmt9 = BigInt("1979")
		const addresseRcGGiL = "0x0000000000000000000000000000000000000001"
		const boolaHgKxKC = false
		const addresswtefJug = accounts[1]
		const boolf0zXj8 = await LUPsm13of.transfer.call(addresseRcGGiL, uintjaHBmt9, {from: accounts[2]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addresswtefJug, boolaHgKxKC, {from: accounts[4]});

		await expect(LUPsm13of.transfer.call(addresseRcGGiL, uintjaHBmt9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const uintk5aPW0v = BigInt("949")
		const addressKCvwexi = accounts[1]
		const boolaHgKxKC = false
		const addressJOPNBA3 = accounts[1]
		const boolSmdZAL = await LUPsm13of.unlock.call(addressKCvwexi, uintk5aPW0v, {from: accounts[0]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressJOPNBA3, boolaHgKxKC, {from: accounts[4]});

		await expect(LUPsm13of.unlock.call(addressKCvwexi, uintk5aPW0v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const boolaHgKxKC = false
		const addresseBroN7r = accounts[1]
		const uint8kpcLcv = await LUPsm13of.decimals.call({from: accounts[0]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addresseBroN7r, boolaHgKxKC, {from: accounts[4]});

		assert.equal(uint8kpcLcv, BigInt("18"))
		await expect(LUPsm13of.freezeAccount.call(addresseBroN7r, boolaHgKxKC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const boolcFgdeRg = false
		const addressgI0BLHz = accounts[2]
		const addressQJCOzsl = accounts[2]
		const stringhxMdWoS = await LUPsm13of.name.call({from: accounts[4]});
		const boolyXTPafL = await LUPsm13of.freezeAccount.call(addressgI0BLHz, boolcFgdeRg, {from: accounts[0]});
		const uint256vXqh5J = await LUPsm13of.balanceOf.call(addressQJCOzsl, {from: accounts[2]});

		assert.equal(boolyXTPafL, true)
		assert.equal(stringhxMdWoS, "LINKUP Token")
		assert.equal(uint256vXqh5J, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const uintLK4fQHw = BigInt("1979")
		const addressGxxB8AJ = "0x0000000000000000000000000000000000000000"
		const uintKfO98u = BigInt("1483")
		const uintvvg55AO = BigInt("1861")
		const addressnX40Ju5 = "0x0000000000000000000000000000000000000001"
		const boolaHgKxKC = false
		const addressqUYEIv8 = accounts[1]
		const boolf0zXj8 = await LUPsm13of.transfer.call(addressGxxB8AJ, uintLK4fQHw, {from: accounts[2]});
		const boolpfKPkGo = await LUPsm13of.lock.call(addressnX40Ju5, uintvvg55AO, uintKfO98u, {from: accounts[4]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressqUYEIv8, boolaHgKxKC, {from: accounts[4]});

		await expect(LUPsm13of.transfer.call(addressGxxB8AJ, uintLK4fQHw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const uintYkCPRzc = BigInt("775")
		const uintqr2mL1 = BigInt("1391")
		const addressfovXew = accounts[5]
		const uintODgQHjb = BigInt("1979")
		const addressgohUzc = "0x0000000000000000000000000000000000000001"
		const boolaHgKxKC = true
		const addressBqigQKC = accounts[1]
		const boolcYw4BPc = await LUPsm13of.lock.call(addressfovXew, uintqr2mL1, uintYkCPRzc, {from: accounts[0]});
		const boolf0zXj8 = await LUPsm13of.transfer.call(addressgohUzc, uintODgQHjb, {from: accounts[2]});
		const boolkESAECJ = await LUPsm13of.freezeAccount.call(addressBqigQKC, boolaHgKxKC, {from: accounts[4]});
		const stringQ9EtuhY = await LUPsm13of.symbol.call({from: accounts[3]});

		await expect(LUPsm13of.lock.call(addressfovXew, uintqr2mL1, uintYkCPRzc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const uintNfP7R3J = BigInt("838")
		const uintSlpiPEm = BigInt("425")
		const addressyLpeMCK = accounts[0]
		const addressvpKSQzx = accounts[2]
		const boolWXGSgGb = await LUPsm13of.transferWithLock.call(addressyLpeMCK, uintSlpiPEm, uintNfP7R3J, {from: accounts[0]});
		const uint256vXqh5J = await LUPsm13of.balanceOf.call(addressvpKSQzx, {from: accounts[2]});

		assert.equal(boolWXGSgGb, true)
		assert.equal(uint256vXqh5J, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const addressJPLJN30 = accounts[1]
		const uintQeVJTjD = BigInt("1979")
		const addressHJbuQdK = "0x0000000000000000000000000000000000000002"
		const uintGtviyP5 = BigInt("886")
		const addressAXYwK6A = accounts[1]
		const addressvpSr1oa = await LUPsm13of.upgradeTo.call(addressJPLJN30, {from: accounts[4]});
		const boolf0zXj8 = await LUPsm13of.transfer.call(addressHJbuQdK, uintQeVJTjD, {from: accounts[2]});
		const boolxa7kuBK = await LUPsm13of.unlock.call(addressAXYwK6A, uintGtviyP5, {from: accounts[4]});

		await expect(LUPsm13of.upgradeTo.call(addressJPLJN30, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsm13of = await LUP.new({from: accounts[0]});
		const addressAcLlo6f = accounts[1]
		const addresshkI1VjP = accounts[0]
		const uint8jB3zq1U = await LUPsm13of.decimals.call({from: accounts[2]});
		const uint256vXqh5J = await LUPsm13of.balanceOf.call(addressAcLlo6f, {from: accounts[2]});
		const addressHJM8Y64 = await LUPsm13of.upgradeTo.call(addresshkI1VjP, {from: accounts[0]});

		assert.equal(uint256vXqh5J, BigInt("0"))
		assert.equal(uint8jB3zq1U, BigInt("18"))
	});
})