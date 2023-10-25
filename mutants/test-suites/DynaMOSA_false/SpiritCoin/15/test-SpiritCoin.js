const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addresspVzYLHw = accounts[3]
		const addresszyFQwoG = accounts[3]
		const SpiritCoinywShOwp = await SpiritCoin.new(addresspVzYLHw, addresszyFQwoG, {from: accounts[1]});
		const uintI2le29t = BigInt("1617")
		const addresskdhujIN = accounts[3]
		const addressf5QOad = accounts[0]
		const uintJleQAyP = BigInt("167")
		const addressih3XcI0 = "0x0000000000000000000000000000000000000001"
		const uintkPbEUmP = BigInt("722")
		const addressFk2rNr6 = accounts[0]
		const addressNth1l4o = accounts[3]
//		const boolVF5wO0o = await SpiritCoinywShOwp.transferFrom.call(addressf5QOad, addresskdhujIN, uintI2le29t, {from: accounts[1]});
//		const boolBeQFrgk = await SpiritCoinywShOwp.approve.call(addressih3XcI0, uintJleQAyP, {from: accounts[5]});
//		const boolBeLDFO8 = await SpiritCoinywShOwp.transferFrom.call(addressNth1l4o, addressFk2rNr6, uintkPbEUmP, {from: accounts[3]});

		await expect(SpiritCoinywShOwp.transferFrom.call(addressf5QOad, addresskdhujIN, uintI2le29t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressETzn4W = accounts[5]
		const addressoSiXwBv = accounts[0]
		const SpiritCoinJZ0YA5l = await SpiritCoin.new(addressETzn4W, addressoSiXwBv, {from: accounts[2]});
		const uintYoWdtj2 = BigInt("212")
		const addresst2rQIo = accounts[0]
		const uintJFWLmnV = BigInt("226")
		const address0LAYCY = accounts[2]
		const uintpHRc1ro = BigInt("949")
		const addressPheqWP8 = accounts[3]
		const addressqU1go61 = accounts[1]
		const addressXmO8h9 = accounts[2]
		const uint05cbA3 = BigInt("519")
		const addresseVKJcI = accounts[1]
		const uintgbd2GcH = BigInt("1319")
		const addressatdM8R = "0x0000000000000000000000000000000000000001"
		const boolAV3TuxD = await SpiritCoinJZ0YA5l.approve.call(addresst2rQIo, uintYoWdtj2, {from: accounts[4]});
//		const boolY7kp3Nm = await SpiritCoinJZ0YA5l.transfer.call(address0LAYCY, uintJFWLmnV, {from: accounts[0]});
//		const addresst3PAIFT = await SpiritCoinJZ0YA5l.mint.call(addressPheqWP8, uintpHRc1ro, {from: accounts[3]});
//		const uintHqcVe5V = await SpiritCoinJZ0YA5l.allowance.call(addressXmO8h9, addressqU1go61, {from: accounts[1]});
//		const boolaIAhvuz = await SpiritCoinJZ0YA5l.transfer.call(addresseVKJcI, uint05cbA3, {from: accounts[4]});
//		const boolTF7by3c = await SpiritCoinJZ0YA5l.transfer.call(addressatdM8R, uintgbd2GcH, {from: accounts[2]});

		assert.equal(boolAV3TuxD, true)
		await expect(SpiritCoinJZ0YA5l.transfer.call(address0LAYCY, uintJFWLmnV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressREuRn3u = accounts[3]
		const addressI46kZQX = "0x0000000000000000000000000000000000000001"
		const SpiritCoinb2bKjcN = await SpiritCoin.new(addressREuRn3u, addressI46kZQX, {from: accounts[1]});
		const uintDk7w9io = BigInt("1491")
		const addressEcm9li0 = accounts[4]
		const addressL7WdjtC = accounts[3]
		const addresssT5VQmk = accounts[0]
		const addressVNGXk37 = accounts[2]
//		const addressnpzxsNA = await SpiritCoinb2bKjcN.mint.call(addressEcm9li0, uintDk7w9io, {from: accounts[3]});
//		const uintohLWfx8 = await SpiritCoinb2bKjcN.allowance.call(addresssT5VQmk, addressL7WdjtC, {from: accounts[5]});
//		const uintXhkFSU = await SpiritCoinb2bKjcN.balanceOf.call(addressVNGXk37, {from: accounts[2]});

		await expect(SpiritCoinb2bKjcN.mint.call(addressEcm9li0, uintDk7w9io, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressr7EAbDa = accounts[4]
		const addressKxZVqS5 = accounts[5]
		const SpiritCoinvLlAfG3 = await SpiritCoin.new(addressr7EAbDa, addressKxZVqS5, {from: accounts[3]});
		const addressXOiXosw = accounts[3]
		const addresstGyprE8 = accounts[2]
		const addresswvmNW8i = accounts[5]
		const addressg8Vrg0H = accounts[0]
		const uintP1k8wTw = await SpiritCoinvLlAfG3.allowance.call(addresstGyprE8, addressXOiXosw, {from: accounts[1]});
		const uintHDPQj2c = await SpiritCoinvLlAfG3.allowance.call(addressg8Vrg0H, addresswvmNW8i, {from: accounts[1]});

		assert.equal(uintHDPQj2c, BigInt("0"))
		assert.equal(uintP1k8wTw, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresszM3EG6e = accounts[4]
		const addressqKgiXPT = accounts[1]
		const SpiritCoinvOy9Lc = await SpiritCoin.new(addresszM3EG6e, addressqKgiXPT, {from: accounts[3]});
		const addressSeqwoHc = accounts[3]
		const uintFcLrFWH = BigInt("66")
		const addressdspPqK7 = accounts[2]
		const uintO8zSRPd = BigInt("1279")
		const addressuWfXDjr = accounts[3]
		const addresstfSpKdt = accounts[3]
		const addressn7FeHgb = accounts[4]
		const uintPLiRFiw = BigInt("1064")
		const addressYvcNpLp = accounts[0]
		const uintMGXpLrX = await SpiritCoinvOy9Lc.balanceOf.call(addressSeqwoHc, {from: accounts[3]});
//		const addressnNvUM10 = await SpiritCoinvOy9Lc.mint.call(addressdspPqK7, uintFcLrFWH, {from: accounts[0]});
//		const boolOrJFOvu = await SpiritCoinvOy9Lc.transfer.call(addressuWfXDjr, uintO8zSRPd, {from: accounts[2]});
//		const uintTFWNizl = await SpiritCoinvOy9Lc.allowance.call(addressn7FeHgb, addresstfSpKdt, {from: accounts[1]});
//		const boolk0PI19 = await SpiritCoinvOy9Lc.transfer.call(addressYvcNpLp, uintPLiRFiw, {from: accounts[3]});

		assert.equal(uintMGXpLrX, BigInt("0"))
		await expect(SpiritCoinvOy9Lc.mint.call(addressdspPqK7, uintFcLrFWH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresst6CcV0D = "0x0000000000000000000000000000000000000001"
		const addressxgFrotp = accounts[2]
		const SpiritCoinJZvGx3V = await SpiritCoin.new(addresst6CcV0D, addressxgFrotp, {from: accounts[3]});
		const addressx2x31k = accounts[2]
		const uintRT73wWr = BigInt("174")
		const addresssmduVXg = accounts[1]
		const uintdoX9Wok = BigInt("1826")
		const addressQF3RAxq = accounts[3]
		const uintgjMvCLK = BigInt("1087")
		const addresswnO4f7Z = accounts[4]
		const uintANN0mcE = BigInt("1434")
		const addressqnAcRhw = accounts[5]
		const addresss1OzjP = await SpiritCoinJZvGx3V.setMinter.call(addressx2x31k, {from: accounts[2]});
		const addressUzijPqq = await SpiritCoinJZvGx3V.mint.call(addresssmduVXg, uintRT73wWr, {from: accounts[2]});
//		const addresso8uKSYv = await SpiritCoinJZvGx3V.mint.call(addressQF3RAxq, uintdoX9Wok, {from: accounts[4]});
//		const boolHxcEkaw = await SpiritCoinJZvGx3V.approve.call(addresswnO4f7Z, uintgjMvCLK, {from: accounts[2]});
//		const boolgfTY7E = await SpiritCoinJZvGx3V.transfer.call(addressqnAcRhw, uintANN0mcE, {from: accounts[4]});

		await expect(SpiritCoinJZvGx3V.mint.call(addressQF3RAxq, uintdoX9Wok, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressN7OUeU = accounts[3]
		const address5zBvkR = accounts[1]
		const SpiritCoinb3CmeBm = await SpiritCoin.new(addressN7OUeU, address5zBvkR, {from: "0x0000000000000000000000000000000000000001"});
		const uintED1l7XS = BigInt("541")
		const addressM1wKZqi = accounts[2]
		const uintJqR2RD = BigInt("577")
		const addressGniGx9 = accounts[0]
		const addresse90EHgr = accounts[2]
		const addressdg6HQZf = accounts[1]
		const boolHeHEMrA = await SpiritCoinb3CmeBm.transfer.call(addressM1wKZqi, uintED1l7XS, {from: accounts[4]});
		const boolNW040nW = await SpiritCoinb3CmeBm.approve.call(addressGniGx9, uintJqR2RD, {from: accounts[4]});
		const uinteYKcKSd = await SpiritCoinb3CmeBm.balanceOf.call(addresse90EHgr, {from: accounts[4]});
		const addressr86eklT = await SpiritCoinb3CmeBm.setMinter.call(addressdg6HQZf, {from: accounts[3]});
	});

	it('test for SpiritCoin', async () => {
		const addressP0wGIHT = "0x0000000000000000000000000000000000000001"
		const addressjHwd5q = accounts[2]
		const SpiritCoinJZvGx3V = await SpiritCoin.new(addressP0wGIHT, addressjHwd5q, {from: accounts[3]});
		const addressPqq84cy = accounts[3]
		const uintV9Li8fC = BigInt("66")
		const addressJpaK2oG = accounts[3]
		const addressWTlBJA = accounts[1]
		const addressclLJRV1 = accounts[0]
		const addressCh7I53L = accounts[1]
		const addressC06oW5v = accounts[4]
		const uintm1ewNiR = BigInt("174")
		const addressietrkR5 = accounts[2]
		const uinthqDCTx7 = BigInt("1826")
		const addressP5HwXqz = accounts[3]
		const uintc3Z00b = BigInt("1434")
		const addressPSTYfsn = accounts[5]
		const addresss1OzjP = await SpiritCoinJZvGx3V.setMinter.call(addressPqq84cy, {from: accounts[2]});
		const boolxoy2HvV = await SpiritCoinJZvGx3V.approve.call(addressJpaK2oG, uintV9Li8fC, {from: accounts[2]});
//		const addressuNK2Ay9 = await SpiritCoinJZvGx3V.setMinter.call(addressWTlBJA, {from: accounts[1]});
//		const uintVyWONU = await SpiritCoinJZvGx3V.allowance.call(addressCh7I53L, addressclLJRV1, {from: accounts[2]});
//		const addressZq8BL8H = await SpiritCoinJZvGx3V.setMinter.call(addressC06oW5v, {from: accounts[2]});
//		const addressUzijPqq = await SpiritCoinJZvGx3V.mint.call(addressietrkR5, uintm1ewNiR, {from: accounts[2]});
//		const addresso8uKSYv = await SpiritCoinJZvGx3V.mint.call(addressP5HwXqz, uinthqDCTx7, {from: accounts[4]});
//		const boolgfTY7E = await SpiritCoinJZvGx3V.transfer.call(addressPSTYfsn, uintc3Z00b, {from: accounts[4]});

		assert.equal(boolxoy2HvV, true)
		await expect(SpiritCoinJZvGx3V.setMinter.call(addressWTlBJA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})