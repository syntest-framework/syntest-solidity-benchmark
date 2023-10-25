const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYzd67ojX = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXidbVFV = BigInt("1236")
		const uinthnpg55V = BigInt("738")
		const addressrnXQMy = accounts[0]
		const uintrawFMVH = BigInt("955")
		const addresssaHKlcC = accounts[0]
		const addresslWxmSZu = accounts[5]
		const uintV2pyjl2 = BigInt("160")
		const addressiL5LPox = accounts[4]
		const boolqTdyqTW = await LIBERAPAYzd67ojX.lock.call(addressrnXQMy, uinthnpg55V, uintXidbVFV, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYzd67ojX.whenPaused.call({from: accounts[1]});
		const boolzEdheee = await LIBERAPAYzd67ojX.transferFrom.call(addresslWxmSZu, addresssaHKlcC, uintrawFMVH, {from: "0x0000000000000000000000000000000000000001"});
		const boolylpDpJt = await LIBERAPAYzd67ojX.burnFrom.call(addressiL5LPox, uintV2pyjl2, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQUPEvbi = await LIBERAPAY.new({from: accounts[2]});
		const addressz9J06r = accounts[3]
		const addresseYBdfCd = await LIBERAPAYQUPEvbi.notFrozen.call(addressz9J06r, {from: accounts[4]});
		await LIBERAPAYQUPEvbi.f.call({from: accounts[0]});
		await LIBERAPAYQUPEvbi.unpause.call({from: accounts[1]});

		await expect(LIBERAPAYQUPEvbi.notFrozen.call(addressz9J06r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwr7Kdve = await LIBERAPAY.new({from: accounts[4]});
		const uintDAKAkL = BigInt("803")
		const addressMtbjjYq = accounts[1]
		const uintCaupVok = BigInt("137")
		const addressgihbH8K = accounts[2]
		const boollMqHVdW = await LIBERAPAYwr7Kdve.decreaseAllowance.call(addressMtbjjYq, uintDAKAkL, {from: accounts[0]});
		const boolJpKYe65 = await LIBERAPAYwr7Kdve.decreaseAllowance.call(addressgihbH8K, uintCaupVok, {from: accounts[1]});
		await LIBERAPAYwr7Kdve.pause.call({from: accounts[3]});

		await expect(LIBERAPAYwr7Kdve.decreaseAllowance.call(addressMtbjjYq, uintDAKAkL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpbWOM5q = await LIBERAPAY.new({from: accounts[1]});
		const addressRCBpUlF = accounts[0]
		const uintg3zbzn1 = BigInt("1292")
		const addresszcbqBwX = "0x0000000000000000000000000000000000000001"
		const uint256i4yOhV5 = await LIBERAPAYpbWOM5q.balanceOf.call(addressRCBpUlF, {from: accounts[3]});
		const uint256nM1vLX4 = await LIBERAPAYpbWOM5q.totalSupply.call({from: accounts[0]});
		const boolNUba0t7 = await LIBERAPAYpbWOM5q.transfer.call(addresszcbqBwX, uintg3zbzn1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256i4yOhV5, BigInt("0"))
		assert.equal(uint256nM1vLX4, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYpbWOM5q.transfer.call(addresszcbqBwX, uintg3zbzn1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYH7LFcDZ = await LIBERAPAY.new({from: accounts[4]});
		const uintjSZ5F0e = BigInt("1490")
		await LIBERAPAYH7LFcDZ.f.call({from: accounts[4]});
		await LIBERAPAYH7LFcDZ.whenPaused.call({from: accounts[0]});
		const uint256gnut3XM = await LIBERAPAYH7LFcDZ.getNowTime.call({from: accounts[1]});
		const boolB89csJy = await LIBERAPAYH7LFcDZ.burn.call(uintjSZ5F0e, {from: accounts[4]});

		await expect(LIBERAPAYH7LFcDZ.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhsn21hP = await LIBERAPAY.new({from: accounts[0]});
		const addressdQfr1Vh = accounts[4]
		const uintS9e6Jf = BigInt("168")
		const addressQUYkth3 = accounts[1]
		const addressNNhFzFp = accounts[1]
		const addressgI0sFws = await LIBERAPAYhsn21hP.upgradeTo.call(addressdQfr1Vh, {from: accounts[0]});
		const boolRmP1Ewo = await LIBERAPAYhsn21hP.distribute.call(addressQUYkth3, uintS9e6Jf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oaOejle = await LIBERAPAYhsn21hP.currentBalanceOf.call(addressNNhFzFp, {from: accounts[2]});

		await expect(LIBERAPAYhsn21hP.distribute.call(addressQUYkth3, uintS9e6Jf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwr7Kdve = await LIBERAPAY.new({from: accounts[4]});
		const addressQllKpeE = "0x0000000000000000000000000000000000000001"
		const uintYLtiV4l = BigInt("803")
		const addressySWEAwf = accounts[1]
		const uint256oOWzu53 = await LIBERAPAYwr7Kdve.currentBalanceOf.call(addressQllKpeE, {from: accounts[4]});
		const boollMqHVdW = await LIBERAPAYwr7Kdve.decreaseAllowance.call(addressySWEAwf, uintYLtiV4l, {from: accounts[0]});
		await LIBERAPAYwr7Kdve.pause.call({from: accounts[3]});

		assert.equal(uint256oOWzu53, BigInt("0"))
		await expect(LIBERAPAYwr7Kdve.decreaseAllowance.call(addressySWEAwf, uintYLtiV4l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwr7Kdve = await LIBERAPAY.new({from: accounts[4]});
		const addresso0HoDD = "0x0000000000000000000000000000000000000000"
		const uintgv9CqDs = BigInt("803")
		const addressN5HaETE = accounts[1]
		const uint256oOWzu53 = await LIBERAPAYwr7Kdve.currentBalanceOf.call(addresso0HoDD, {from: accounts[4]});
		const uint256H6c0d9Q = await LIBERAPAYwr7Kdve.getNowTime.call({from: accounts[2]});
		const boollMqHVdW = await LIBERAPAYwr7Kdve.decreaseAllowance.call(addressN5HaETE, uintgv9CqDs, {from: accounts[0]});
		await LIBERAPAYwr7Kdve.pause.call({from: accounts[3]});

		assert.equal(uint256H6c0d9Q, BigInt("1630229944"))
		assert.equal(uint256oOWzu53, BigInt("0"))
		await expect(LIBERAPAYwr7Kdve.decreaseAllowance.call(addressN5HaETE, uintgv9CqDs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpbWOM5q = await LIBERAPAY.new({from: accounts[1]});
		const addressM6oVO35 = accounts[0]
		const uintMcErI7i = BigInt("938")
		const addresscmsHbD8 = "0x0000000000000000000000000000000000000001"
		const uintdHGDIMY = BigInt("860")
		const uint256i4yOhV5 = await LIBERAPAYpbWOM5q.balanceOf.call(addressM6oVO35, {from: accounts[3]});
		await LIBERAPAYpbWOM5q.showLockState.call(addresscmsHbD8, uintMcErI7i, {from: accounts[0]});
		const boolkkVWo3w = await LIBERAPAYpbWOM5q.burn.call(uintdHGDIMY, {from: accounts[1]});
		await LIBERAPAYpbWOM5q.whenNotPaused.call({from: accounts[1]});

		assert.equal(uint256i4yOhV5, BigInt("0"))
		await expect(LIBERAPAYpbWOM5q.showLockState.call(addresscmsHbD8, uintMcErI7i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFhqsNvJ = await LIBERAPAY.new({from: accounts[1]});
		const uintqfiULOm = BigInt("772")
		const addressCpYVJ9x = accounts[1]
		const addresslvdUbmE = accounts[2]
		const uintCEZiBJx = BigInt("1224")
		const uintxGlW76 = BigInt("841")
		const addressMbapzj1 = accounts[0]
		const uintbTKLNph = BigInt("265")
		const addressAQ9FeoI = accounts[0]
		const uintutJpf1 = BigInt("563")
		const addressiSIPB3h = accounts[1]
		const boolZu9wTju = await LIBERAPAYFhqsNvJ.increaseAllowance.call(addressCpYVJ9x, uintqfiULOm, {from: accounts[4]});
		const addressSLU55F = await LIBERAPAYFhqsNvJ.upgradeTo.call(addresslvdUbmE, {from: accounts[5]});
		const boolJFvmSQB = await LIBERAPAYFhqsNvJ.lock.call(addressMbapzj1, uintxGlW76, uintCEZiBJx, {from: accounts[0]});
		await LIBERAPAYFhqsNvJ.showLockState.call(addressAQ9FeoI, uintbTKLNph, {from: accounts[0]});
		const boolWCN6B9w = await LIBERAPAYFhqsNvJ.decreaseAllowance.call(addressiSIPB3h, uintutJpf1, {from: accounts[0]});

		assert.equal(boolZu9wTju, true)
		await expect(LIBERAPAYFhqsNvJ.upgradeTo.call(addresslvdUbmE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpbWOM5q = await LIBERAPAY.new({from: accounts[1]});
		const addressuwKA3SO = accounts[0]
		const uintPYBLniy = BigInt("346")
		const addressa2b08AO = accounts[4]
		const addressVBSlrtT = accounts[5]
		const uintW2vP9xy = BigInt("1292")
		const addressjRopP3C = "0x0000000000000000000000000000000000000000"
		const uint256i4yOhV5 = await LIBERAPAYpbWOM5q.balanceOf.call(addressuwKA3SO, {from: accounts[3]});
		const boolSJZtuB1 = await LIBERAPAYpbWOM5q.transferFrom.call(addressVBSlrtT, addressa2b08AO, uintPYBLniy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nM1vLX4 = await LIBERAPAYpbWOM5q.totalSupply.call({from: accounts[0]});
		const boolNUba0t7 = await LIBERAPAYpbWOM5q.transfer.call(addressjRopP3C, uintW2vP9xy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256i4yOhV5, BigInt("0"))
		await expect(LIBERAPAYpbWOM5q.transferFrom.call(addressVBSlrtT, addressa2b08AO, uintPYBLniy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhsn21hP = await LIBERAPAY.new({from: accounts[0]});
		const addresslS1VvP9 = accounts[5]
		const uintLjKgex = BigInt("331")
		const addressuG2e170 = accounts[0]
		const addressGkuZpRy = "0x0000000000000000000000000000000000000001"
		const addressiM3p4f4 = accounts[1]
		const uintglpqPQC = BigInt("168")
		const addressREtthoM = accounts[1]
		const addressgI0sFws = await LIBERAPAYhsn21hP.upgradeTo.call(addresslS1VvP9, {from: accounts[0]});
		const boolPb2xYJz = await LIBERAPAYhsn21hP.increaseAllowance.call(addressuG2e170, uintLjKgex, {from: accounts[0]});
		const uint256GBaomMV = await LIBERAPAYhsn21hP.allowance.call(addressiM3p4f4, addressGkuZpRy, {from: accounts[5]});
		const boolRmP1Ewo = await LIBERAPAYhsn21hP.distribute.call(addressREtthoM, uintglpqPQC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPb2xYJz, true)
		assert.equal(uint256GBaomMV, BigInt("0"))
		await expect(LIBERAPAYhsn21hP.distribute.call(addressREtthoM, uintglpqPQC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpbWOM5q = await LIBERAPAY.new({from: accounts[1]});
		const addressORhvjk = accounts[0]
		const uintzLN1EJ0 = BigInt("1179")
		const addressrMl8KsU = accounts[3]
		const uintrIIshO = BigInt("1299")
		const addressTIpBL52 = "0x0000000000000000000000000000000000000001"
		const addressVGrC64G = accounts[2]
		const uintzIGV3Te = BigInt("1292")
		const addressWU5TXBt = "0x0000000000000000000000000000000000000001"
		const uint256i4yOhV5 = await LIBERAPAYpbWOM5q.balanceOf.call(addressORhvjk, {from: accounts[3]});
		const bool4BSf5J = await LIBERAPAYpbWOM5q.burnFrom.call(addressrMl8KsU, uintzLN1EJ0, {from: accounts[0]});
		const boolR4BFPh = await LIBERAPAYpbWOM5q.transferFrom.call(addressVGrC64G, addressTIpBL52, uintrIIshO, {from: accounts[4]});
		const boolNUba0t7 = await LIBERAPAYpbWOM5q.transfer.call(addressWU5TXBt, uintzIGV3Te, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256i4yOhV5, BigInt("0"))
		await expect(LIBERAPAYpbWOM5q.burnFrom.call(addressrMl8KsU, uintzLN1EJ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpbWOM5q = await LIBERAPAY.new({from: accounts[1]});
		const addressfiUPRqV = accounts[0]
		const uintLM2zSYO = BigInt("879")
		const uintNB9ZHmC = BigInt("1410")
		const addressY1sg2pa = accounts[3]
		const uintjdMbyia = BigInt("379")
		const addressIpJeZuq = "0x0000000000000000000000000000000000000001"
		const uintFxV7rQ = BigInt("938")
		const addressvvdWQRD = "0x0000000000000000000000000000000000000000"
		const uintbprXGz9 = BigInt("860")
		const uint256i4yOhV5 = await LIBERAPAYpbWOM5q.balanceOf.call(addressfiUPRqV, {from: accounts[3]});
		const boolJdACVwj = await LIBERAPAYpbWOM5q.lock.call(addressY1sg2pa, uintNB9ZHmC, uintLM2zSYO, {from: accounts[1]});
		const boolTSwaj3 = await LIBERAPAYpbWOM5q.transfer.call(addressIpJeZuq, uintjdMbyia, {from: accounts[2]});
		await LIBERAPAYpbWOM5q.showLockState.call(addressvvdWQRD, uintFxV7rQ, {from: accounts[0]});
		const boolkkVWo3w = await LIBERAPAYpbWOM5q.burn.call(uintbprXGz9, {from: accounts[1]});
		await LIBERAPAYpbWOM5q.whenNotPaused.call({from: accounts[1]});

		assert.equal(uint256i4yOhV5, BigInt("0"))
		await expect(LIBERAPAYpbWOM5q.lock.call(addressY1sg2pa, uintNB9ZHmC, uintLM2zSYO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb83kQh6 = await LIBERAPAY.new({from: accounts[3]});
		const addressffmIkDO = accounts[1]
		const addressMDcvz67 = "0x0000000000000000000000000000000000000001"
		const addressVp3ZOw = accounts[5]
		const uint256Ud5OP1X = await LIBERAPAYb83kQh6.currentBalanceOf.call(addressffmIkDO, {from: accounts[2]});
		const boolBSJa5N8 = await LIBERAPAYb83kQh6.unfreezeAccount.call(addressMDcvz67, {from: accounts[3]});
		const booloobhKVG = await LIBERAPAYb83kQh6.unfreezeAccount.call(addressVp3ZOw, {from: accounts[0]});

		assert.equal(uint256Ud5OP1X, BigInt("0"))
		await expect(LIBERAPAYb83kQh6.unfreezeAccount.call(addressMDcvz67, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb83kQh6 = await LIBERAPAY.new({from: accounts[3]});
		const uintRypVhv = BigInt("1273")
		const addressAjSQoeJ = accounts[5]
		const addressGBHAWiB = accounts[1]
		const boolXk6Ubbo = await LIBERAPAYb83kQh6.approve.call(addressAjSQoeJ, uintRypVhv, {from: accounts[5]});
		const uint256Ud5OP1X = await LIBERAPAYb83kQh6.currentBalanceOf.call(addressGBHAWiB, {from: accounts[2]});

		assert.equal(boolXk6Ubbo, true)
		assert.equal(uint256Ud5OP1X, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpbWOM5q = await LIBERAPAY.new({from: accounts[1]});
		const addressEbUUoOp = accounts[1]
		const uinttTGAG3s = BigInt("1704")
		const addressvMApjwx = "0x0000000000000000000000000000000000000001"
		const uintw6Pn7up = BigInt("1292")
		const addressVzKPWBd = "0x0000000000000000000000000000000000000001"
		const uint256i4yOhV5 = await LIBERAPAYpbWOM5q.balanceOf.call(addressEbUUoOp, {from: accounts[3]});
		const boolhGEHWoU = await LIBERAPAYpbWOM5q.unlock.call(addressvMApjwx, uinttTGAG3s, {from: accounts[1]});
		const boolNUba0t7 = await LIBERAPAYpbWOM5q.transfer.call(addressVzKPWBd, uintw6Pn7up, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256i4yOhV5, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYpbWOM5q.unlock.call(addressvMApjwx, uinttTGAG3s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuRk4JEz = await LIBERAPAY.new({from: accounts[4]});
		const uintrt04gtx = BigInt("1175")
		const addressTUiIKA2 = accounts[3]
		const addressA0ovuky = accounts[4]
		const addressTOw8FvR = accounts[2]
		const boolYNjzCVH = await LIBERAPAYuRk4JEz.mint.call(addressTUiIKA2, uintrt04gtx, {from: accounts[4]});
		await LIBERAPAYuRk4JEz.f.call({from: accounts[3]});
		await LIBERAPAYuRk4JEz.f.call({from: accounts[4]});
		const uint256Tl4j6ft = await LIBERAPAYuRk4JEz.allowance.call(addressTOw8FvR, addressA0ovuky, {from: accounts[0]});

		await expect(LIBERAPAYuRk4JEz.mint.call(addressTUiIKA2, uintrt04gtx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb83kQh6 = await LIBERAPAY.new({from: accounts[3]});
		const uintGXyHVBE = BigInt("634")
		const addressimN69Mu = accounts[2]
		const uintcEgUP7D = BigInt("392")
		const addressCu4EQeH = accounts[4]
		const addressnoAwBEt = accounts[5]
		const addressxor5iuN = accounts[1]
		const addressJP3kwdb = accounts[3]
		const boolh7Qz8JC = await LIBERAPAYb83kQh6.distribute.call(addressimN69Mu, uintGXyHVBE, {from: accounts[3]});
		const boolPyCpB8R = await LIBERAPAYb83kQh6.transferFrom.call(addressnoAwBEt, addressCu4EQeH, uintcEgUP7D, {from: accounts[3]});
		const uint256Ud5OP1X = await LIBERAPAYb83kQh6.currentBalanceOf.call(addressxor5iuN, {from: accounts[2]});
		const boolaE1kc4 = await LIBERAPAYb83kQh6.freezeAccount.call(addressJP3kwdb, {from: accounts[0]});

		assert.equal(boolh7Qz8JC, true)
		await expect(LIBERAPAYb83kQh6.transferFrom.call(addressnoAwBEt, addressCu4EQeH, uintcEgUP7D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb83kQh6 = await LIBERAPAY.new({from: accounts[3]});
		const addressg0UUy3D = accounts[3]
		const addressvLjdCWP = accounts[0]
		const addressdEe0MlN = await LIBERAPAYb83kQh6.transferOwnership.call(addressg0UUy3D, {from: accounts[3]});
		const uint256Ud5OP1X = await LIBERAPAYb83kQh6.currentBalanceOf.call(addressvLjdCWP, {from: accounts[2]});

		assert.equal(uint256Ud5OP1X, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkgb4c79 = await LIBERAPAY.new({from: accounts[1]});
		const addresszWmK922 = accounts[2]
		const uintbe79nIC = BigInt("1136")
		const addressBVmAZr = accounts[3]
		const uint256sOB3PHe = await LIBERAPAYkgb4c79.balanceOf.call(addresszWmK922, {from: accounts[0]});
		await LIBERAPAYkgb4c79.pause.call({from: accounts[1]});
		await LIBERAPAYkgb4c79.unpause.call({from: accounts[2]});
		const uint256OaqhVOt = await LIBERAPAYkgb4c79.getNowTime.call({from: accounts[0]});
		const boolGRZjk8s = await LIBERAPAYkgb4c79.burnFrom.call(addressBVmAZr, uintbe79nIC, {from: accounts[5]});

		assert.equal(uint256sOB3PHe, BigInt("0"))
		await expect(LIBERAPAYkgb4c79.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAvBFc72 = await LIBERAPAY.new({from: accounts[3]});
		const addresstmQAjAR = accounts[4]
		const addresslOZ0oVf = accounts[5]
		const uintUrV5UP0 = BigInt("1372")
		const addressiVPvqK = accounts[4]
		const addressuiaTbU1 = accounts[1]
		const addressDVmudqb = accounts[0]
		const uintkDS2zBJ = BigInt("877")
		const uintE3UNahE = BigInt("847")
		const addressR71Ygg = accounts[2]
		const boolUvfVVtJ = await LIBERAPAYAvBFc72.freezeAccount.call(addresstmQAjAR, {from: accounts[3]});
		const uint256dqo6QP4 = await LIBERAPAYAvBFc72.currentBalanceOf.call(addresslOZ0oVf, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYAvBFc72.pause.call({from: accounts[1]});
		const boolWdC2j4d = await LIBERAPAYAvBFc72.transferFrom.call(addressuiaTbU1, addressiVPvqK, uintUrV5UP0, {from: accounts[0]});
		const boolyQksBhg = await LIBERAPAYAvBFc72.freezeAccount.call(addressDVmudqb, {from: accounts[3]});
		const boolVRAYUyf = await LIBERAPAYAvBFc72.lock.call(addressR71Ygg, uintE3UNahE, uintkDS2zBJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUvfVVtJ, true)
		assert.equal(uint256dqo6QP4, BigInt("0"))
		await expect(LIBERAPAYAvBFc72.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})