const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringA0wdiUb = "GPNayMjBsgXQoTlHu"
		const stringrOCgWuB = "FSmyh1mQas7KC30i2H7Js4jdiYuffjkQRDcW8FnpmrOlqcpWSlkSeDALHU"
		const uintvOFGX8Y = BigInt("121")
		const TPAUzJ0J8i = await TPA.new(stringA0wdiUb, stringrOCgWuB, uintvOFGX8Y, {from: accounts[1]});
		const addressBRe1bO3 = accounts[3]
		const uintD9TvFZ5 = BigInt("1781")
		const addresszsxJ93g = accounts[1]
		const uintlkQZFBY = BigInt("1833")
		const addressZcSUOgE = accounts[3]
		const addressU9xMHRe = accounts[2]
		const uint256m7csJG = await TPAUzJ0J8i.totalSupply.call({from: accounts[3]});
		const addressCF4AAR0 = await TPAUzJ0J8i.notFrozen.call(addressBRe1bO3, {from: accounts[1]});
		const boolSa51pqr = await TPAUzJ0J8i.transfer.call(addresszsxJ93g, uintD9TvFZ5, {from: accounts[4]});
		const boolJvLKRyO = await TPAUzJ0J8i.transferFrom.call(addressU9xMHRe, addressZcSUOgE, uintlkQZFBY, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAkMPGs2a = await TPA.new({from: accounts[0]});
		const uintjZkJd26 = BigInt("1035")
		const addressS4QD7jG = accounts[0]
		const addressfy87IMU = accounts[2]
		const uintwWrbLIb = BigInt("1899")
		const addresscQxhdid = "0x0000000000000000000000000000000000000001"
//		const boolfMucH6C = await TPAkMPGs2a.transferFrom.call(addressfy87IMU, addressS4QD7jG, uintjZkJd26, {from: accounts[4]});
//		await TPAkMPGs2a.onlyAdmin.call({from: accounts[4]});
//		const addressLLFOrM0 = await TPAkMPGs2a.burnFrom.call(addresscQxhdid, uintwWrbLIb, {from: accounts[4]});
//		await TPAkMPGs2a.onlyAdmin.call({from: accounts[0]});

		await expect(TPAkMPGs2a.transferFrom.call(addressfy87IMU, addressS4QD7jG, uintjZkJd26, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqveqqTk = await TPA.new({from: accounts[0]});
		const uintOifDZh = BigInt("1604")
		const addressONT0xdy = accounts[0]
		const address4Dy3Xc = accounts[3]
		const uintx96JQb5 = BigInt("1327")
		const addresswUir71E = "0x0000000000000000000000000000000000000001"
//		const boolM9bdQgY = await TPAqveqqTk.decreaseAllowance.call(addressONT0xdy, uintOifDZh, {from: accounts[3]});
//		const stringE1qqONo = await TPAqveqqTk.name.call({from: accounts[4]});
//		const addressqxTQLCc = await TPAqveqqTk.removeAdmin.call(address4Dy3Xc, {from: accounts[1]});
//		const addressvVjqToO = await TPAqveqqTk.burnFrom.call(addresswUir71E, uintx96JQb5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAqveqqTk.decreaseAllowance.call(addressONT0xdy, uintOifDZh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addressL0Wsuba = accounts[4]
		const uintBwDGhWO = BigInt("1196")
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressL0Wsuba, {from: accounts[3]});
//		const uint256tAorKwX = await TPAwx9hBvQ.burn.call(uintBwDGhWO, {from: accounts[0]});

		assert.equal(boolU5R2IKj, false)
		await expect(TPAwx9hBvQ.burn.call(uintBwDGhWO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPARJxWH6I = await TPA.new({from: accounts[3]});
		const uintXnwzaMT = BigInt("1538")
		const addressXYFYGEP = accounts[0]
//		await TPARJxWH6I.whenPaused.call({from: accounts[3]});
//		const booluz16MP = await TPARJxWH6I.decreaseAllowance.call(addressXYFYGEP, uintXnwzaMT, {from: accounts[3]});

		await expect(TPARJxWH6I.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintd0mRhm = BigInt("589")
		const addressdl7g1Us = accounts[2]
		const addresssOcOZl = accounts[5]
		const uintQLyTsq = BigInt("1196")
//		const booljPFQpTN = await TPAwx9hBvQ.transfer.call(addressdl7g1Us, uintd0mRhm, {from: "0x0000000000000000000000000000000000000001"});
//		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addresssOcOZl, {from: accounts[3]});
//		const uint256tAorKwX = await TPAwx9hBvQ.burn.call(uintQLyTsq, {from: accounts[0]});

		await expect(TPAwx9hBvQ.transfer.call(addressdl7g1Us, uintd0mRhm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addresstyxIArB = accounts[5]
		const uintTaFlrXB = BigInt("599")
		const addressywl88jX = "0x0000000000000000000000000000000000000000"
		const addressK7U1Keo = accounts[1]
		const uinty64CxfQ = BigInt("1196")
		const uint8wqnqu0D = await TPAwx9hBvQ.decimals.call({from: accounts[4]});
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addresstyxIArB, {from: accounts[3]});
//		const boollVcE7Vm = await TPAwx9hBvQ.transferFrom.call(addressK7U1Keo, addressywl88jX, uintTaFlrXB, {from: accounts[3]});
//		const uint256tAorKwX = await TPAwx9hBvQ.burn.call(uinty64CxfQ, {from: accounts[0]});

		assert.equal(boolU5R2IKj, false)
		assert.equal(uint8wqnqu0D, BigInt("18"))
		await expect(TPAwx9hBvQ.transferFrom.call(addressK7U1Keo, addressywl88jX, uintTaFlrXB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addressBmOboxE = accounts[5]
		const addressvaqUwxy = accounts[2]
		const uintd8kV9Bn = BigInt("822")
		const addressdV4DJwh = accounts[0]
		const uintNMUrCI4 = BigInt("594")
		const addresspuliWYz = "0x0000000000000000000000000000000000000001"
		const addressXBFYudT = accounts[1]
		const uintAW4MzLA = BigInt("1196")
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressBmOboxE, {from: accounts[3]});
//		const boolefxhAH = await TPAwx9hBvQ.unfreezeAccount.call(addressvaqUwxy, {from: accounts[3]});
//		const boolZBpu7fe = await TPAwx9hBvQ.unlock.call(addressdV4DJwh, uintd8kV9Bn, {from: accounts[2]});
//		const boollVcE7Vm = await TPAwx9hBvQ.transferFrom.call(addressXBFYudT, addresspuliWYz, uintNMUrCI4, {from: accounts[3]});
//		const uint256tAorKwX = await TPAwx9hBvQ.burn.call(uintAW4MzLA, {from: accounts[0]});

		assert.equal(boolU5R2IKj, false)
		await expect(TPAwx9hBvQ.unfreezeAccount.call(addressvaqUwxy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintpgNR8xQ = BigInt("728")
		const addressDrl8Y7u = "0x0000000000000000000000000000000000000001"
		const addressWOYhCpG = accounts[5]
		const uintdkxyHBj = BigInt("599")
		const addressrvwAr9 = "0x0000000000000000000000000000000000000001"
		const addressM1Qqi8k = accounts[2]
		const uintsZwiH8A = BigInt("1196")
		const boolgpctSlP = await TPAwx9hBvQ.approve.call(addressDrl8Y7u, uintpgNR8xQ, {from: accounts[3]});
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressWOYhCpG, {from: accounts[3]});
//		const boollVcE7Vm = await TPAwx9hBvQ.transferFrom.call(addressM1Qqi8k, addressrvwAr9, uintdkxyHBj, {from: accounts[3]});
//		const uint256tAorKwX = await TPAwx9hBvQ.burn.call(uintsZwiH8A, {from: accounts[0]});

		assert.equal(boolU5R2IKj, false)
		assert.equal(boolgpctSlP, true)
		await expect(TPAwx9hBvQ.transferFrom.call(addressM1Qqi8k, addressrvwAr9, uintdkxyHBj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIwgCqMm = await TPA.new({from: accounts[3]});
		const uintxLWF0Tg = BigInt("1660")
		const addresszrGgp1W = accounts[1]
		const addressJb216CM = accounts[0]
		const addresswvPZD2S = accounts[4]
		const stringqkxuPp2 = await TPAIwgCqMm.symbol.call({from: accounts[4]});
//		const boolDG7dJp = await TPAIwgCqMm.transferFrom.call(addressJb216CM, addresszrGgp1W, uintxLWF0Tg, {from: accounts[0]});
//		const uint256xfPoMCb = await TPAIwgCqMm.balanceOf.call(addresswvPZD2S, {from: accounts[4]});

		assert.equal(stringqkxuPp2, "TPA")
		await expect(TPAIwgCqMm.transferFrom.call(addressJb216CM, addresszrGgp1W, uintxLWF0Tg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addressbh1WNcM = accounts[5]
		const uintqyqQmZi = BigInt("1906")
		const addressQJPoLRW = accounts[4]
		const uintAV7zw5E = BigInt("372")
		const addressrBqJWhP = "0x0000000000000000000000000000000000000001"
		const uintTk7EJU1 = BigInt("599")
		const addressBEDqVJo = accounts[5]
		const addresspilvimG = accounts[1]
		const uintrSi7MrQ = BigInt("1196")
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressbh1WNcM, {from: accounts[3]});
		const boolzIvNeoc = await TPAwx9hBvQ.approve.call(addressQJPoLRW, uintqyqQmZi, {from: accounts[1]});
//		const boolWRmBhpA = await TPAwx9hBvQ.unlock.call(addressrBqJWhP, uintAV7zw5E, {from: accounts[3]});
//		const boollVcE7Vm = await TPAwx9hBvQ.transferFrom.call(addresspilvimG, addressBEDqVJo, uintTk7EJU1, {from: accounts[3]});
//		const uint256tAorKwX = await TPAwx9hBvQ.burn.call(uintrSi7MrQ, {from: accounts[0]});

		assert.equal(boolU5R2IKj, false)
		assert.equal(boolzIvNeoc, true)
		await expect(TPAwx9hBvQ.unlock.call(addressrBqJWhP, uintAV7zw5E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addressBJe8jiH = accounts[7]
		const addresshxAotdH = accounts[2]
		const addressHFph3Wx = accounts[2]
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressBJe8jiH, {from: accounts[3]});
		const uint256tai2z5 = await TPAwx9hBvQ.balanceOf.call(addresshxAotdH, {from: accounts[2]});
		const uint256hWxqAU6 = await TPAwx9hBvQ.balanceOf.call(addressHFph3Wx, {from: accounts[0]});

		assert.equal(boolU5R2IKj, false)
		assert.equal(uint256hWxqAU6, BigInt("0"))
		assert.equal(uint256tai2z5, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addresshmaTIrU = accounts[8]
		const uintWwzI9H5 = BigInt("1627")
		const addressKfb0eX = accounts[2]
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addresshmaTIrU, {from: accounts[3]});
		const boolAN56ua = await TPAwx9hBvQ.increaseAllowance.call(addressKfb0eX, uintWwzI9H5, {from: accounts[1]});

		assert.equal(boolAN56ua, true)
		assert.equal(boolU5R2IKj, false)
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addresshEQ5gQc = accounts[4]
		const addressvj7sEas = "0x0000000000000000000000000000000000000001"
		const addressAjFPQC2 = accounts[3]
		const uintV5weniG = BigInt("589")
		const addresss8k4NN7 = accounts[3]
		const boolDGKxUKZ = await TPAwx9hBvQ.isOwner.call(addresshEQ5gQc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WU3pEQH = await TPAwx9hBvQ.allowance.call(addressAjFPQC2, addressvj7sEas, {from: accounts[4]});
//		const booljPFQpTN = await TPAwx9hBvQ.transfer.call(addresss8k4NN7, uintV5weniG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDGKxUKZ, false)
		assert.equal(uint256WU3pEQH, BigInt("0"))
		await expect(TPAwx9hBvQ.transfer.call(addresss8k4NN7, uintV5weniG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uinttGmtIM = BigInt("586")
		const addressyopg7Si = accounts[3]
		const stringVwUxBEC = await TPAwx9hBvQ.name.call({from: accounts[1]});
//		const booljPFQpTN = await TPAwx9hBvQ.transfer.call(addressyopg7Si, uinttGmtIM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringVwUxBEC, "TPA")
		await expect(TPAwx9hBvQ.transfer.call(addressyopg7Si, uinttGmtIM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addressF5vamRL = accounts[8]
		const uintrR1ZGAH = BigInt("565")
		const addressEZK7liB = accounts[3]
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressF5vamRL, {from: accounts[3]});
		const boolmij1Wq6 = await TPAwx9hBvQ.paused.call({from: accounts[3]});
//		const boolJ3trKMR = await TPAwx9hBvQ.transfer.call(addressEZK7liB, uintrR1ZGAH, {from: accounts[2]});

		assert.equal(boolU5R2IKj, false)
		assert.equal(boolmij1Wq6, false)
		await expect(TPAwx9hBvQ.transfer.call(addressEZK7liB, uintrR1ZGAH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintFRyzIwK = BigInt("304")
		const addressHqhiaEz = "0x0000000000000000000000000000000000000001"
		const addressqi7BBoC = accounts[8]
//		const addressaUcpDKd = await TPAwx9hBvQ.burnFrom.call(addressHqhiaEz, uintFRyzIwK, {from: accounts[1]});
//		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressqi7BBoC, {from: accounts[3]});

		await expect(TPAwx9hBvQ.burnFrom.call(addressHqhiaEz, uintFRyzIwK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintr7qCl1t = BigInt("589")
		const addressSO43vdX = accounts[5]
//		await TPAwx9hBvQ.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		await TPAwx9hBvQ.onlyAdmin.call({from: accounts[1]});
//		const booljPFQpTN = await TPAwx9hBvQ.transfer.call(addressSO43vdX, uintr7qCl1t, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAwx9hBvQ.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintO1YwObP = BigInt("589")
		const addressFtzbnK = accounts[3]
		const uint256Txy7SEl = await TPAwx9hBvQ.totalSupply.call({from: accounts[3]});
//		const booljPFQpTN = await TPAwx9hBvQ.transfer.call(addressFtzbnK, uintO1YwObP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Txy7SEl, BigInt("10000000000000000000000000000"))
		await expect(TPAwx9hBvQ.transfer.call(addressFtzbnK, uintO1YwObP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAsFgd6dT = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSW7bHuk = "0x0000000000000000000000000000000000000001"
		const addressFqCz4rN = accounts[2]
		const addressCAGfGi6 = accounts[1]
		const uint256Hk0bh5 = await TPAsFgd6dT.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booloarIA3 = await TPAsFgd6dT.isAdmin.call(addressSW7bHuk, {from: accounts[4]});
		const uint256c7Dv7C = await TPAsFgd6dT.allowance.call(addressCAGfGi6, addressFqCz4rN, {from: accounts[2]});
		const uint256d8c4Ayt = await TPAsFgd6dT.totalSupply.call({from: accounts[3]});
		const uint256ySByPnE = await TPAsFgd6dT.totalSupply.call({from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const addressKcyFHL = accounts[8]
		const uintdR4tosV = BigInt("198")
		const addressVsdaYXg = accounts[5]
		const addressMtPltJC = "0x0000000000000000000000000000000000000001"
		const boolU5R2IKj = await TPAwx9hBvQ.isOwner.call(addressKcyFHL, {from: accounts[3]});
//		await TPAwx9hBvQ.renounceAdmin.call({from: accounts[3]});
//		const boolDKXsMR4 = await TPAwx9hBvQ.transferFrom.call(addressMtPltJC, addressVsdaYXg, uintdR4tosV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolU5R2IKj, false)
		await expect(TPAwx9hBvQ.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintUyGhuR4 = BigInt("1881")
		const uintWxatymZ = BigInt("883")
		const address6DHcUp = accounts[3]
		const addresszRPs97o = accounts[3]
		const uintU5REdZH = BigInt("585")
		const addresszhYrZcK = accounts[1]
		const addressAxDheVo = accounts[3]
		const boolKtt963 = await TPAwx9hBvQ.lock.call(address6DHcUp, uintWxatymZ, uintUyGhuR4, {from: accounts[3]});
		const uint256orIZUef = await TPAwx9hBvQ.balanceOf.call(addresszRPs97o, {from: accounts[3]});
//		const boolSBDmJD3 = await TPAwx9hBvQ.transferFrom.call(addressAxDheVo, addresszhYrZcK, uintU5REdZH, {from: accounts[0]});

		assert.equal(boolKtt963, true)
		assert.equal(uint256orIZUef, BigInt("10000000000000000000000000000"))
		await expect(TPAwx9hBvQ.transferFrom.call(addressAxDheVo, addresszhYrZcK, uintU5REdZH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAM7OvbW = await TPA.new({from: accounts[2]});
		const uintc7LXSPI = BigInt("2044")
		const uintnNLgG9B = BigInt("331")
		const addressEP7ojCv = accounts[1]
		const uintZNUMDXa = BigInt("1586")
		const addressoF4dieU = accounts[2]
		const uintBYjxAhy = BigInt("1307")
		const addressi4uHlsJ = accounts[4]
		const uintDj4bHEQ = BigInt("918")
		const addressSNvjBrR = accounts[2]
		const addresswPT9dFd = accounts[1]
		const uintMtPz54y = BigInt("1149")
		const addressXhxmVVn = accounts[1]
//		await TPAM7OvbW.pause.call({from: accounts[2]});
//		const boolC8RWMxI = await TPAM7OvbW.lock.call(addressEP7ojCv, uintnNLgG9B, uintc7LXSPI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolb8R7ZKI = await TPAM7OvbW.transfer.call(addressoF4dieU, uintZNUMDXa, {from: accounts[1]});
//		const boolfNH2Bqx = await TPAM7OvbW.decreaseAllowance.call(addressi4uHlsJ, uintBYjxAhy, {from: accounts[0]});
//		const booluisyLy1 = await TPAM7OvbW.transferFrom.call(addresswPT9dFd, addressSNvjBrR, uintDj4bHEQ, {from: accounts[4]});
//		const addressxTxGC8t = await TPAM7OvbW.burnFrom.call(addressXhxmVVn, uintMtPz54y, {from: accounts[1]});

		await expect(TPAM7OvbW.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwx9hBvQ = await TPA.new({from: accounts[3]});
		const uintyL4mTox = BigInt("1166")
		const uintrirfP79 = BigInt("474")
		const addressr2MnGG = accounts[0]
		const addressrUOsWeE = accounts[3]
		const uint8aD006Bb = await TPAwx9hBvQ.decimals.call({from: accounts[0]});
		const boolO3sWa5V = await TPAwx9hBvQ.transferWithLock.call(addressr2MnGG, uintrirfP79, uintyL4mTox, {from: accounts[3]});
		const uint256hWxqAU6 = await TPAwx9hBvQ.balanceOf.call(addressrUOsWeE, {from: accounts[0]});

		assert.equal(boolO3sWa5V, true)
		assert.equal(uint256hWxqAU6, BigInt("10000000000000000000000000000"))
		assert.equal(uint8aD006Bb, BigInt("18"))
	});
})