const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressOQV1iOy = accounts[3]
		const addressycL1dDg = accounts[0]
		const SpiritCoinP7RLzoF = await SpiritCoin.new(addressOQV1iOy, addressycL1dDg, {from: accounts[3]});
		const uintrJeBRAt = BigInt("897")
		const addresstFc0pwb = accounts[4]
		const addressJtZzJ8g = accounts[0]
		const addressevltzWd = accounts[4]
		const uintzzv3JLJ = BigInt("1310")
		const addresshJdqNKS = accounts[0]
		const boolNTmU6WG = await SpiritCoinP7RLzoF.approve.call(addresstFc0pwb, uintrJeBRAt, {from: accounts[2]});
		const uintzzwvVqX = await SpiritCoinP7RLzoF.allowance.call(addressevltzWd, addressJtZzJ8g, {from: accounts[1]});
//		const addressLsSsdZS = await SpiritCoinP7RLzoF.mint.call(addresshJdqNKS, uintzzv3JLJ, {from: accounts[5]});

		assert.equal(boolNTmU6WG, true)
		assert.equal(uintzzwvVqX, BigInt("0"))
		await expect(SpiritCoinP7RLzoF.mint.call(addresshJdqNKS, uintzzv3JLJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressMQ3KePm = accounts[4]
		const addressc44fOh = accounts[3]
		const SpiritCoinp2LpsAJ = await SpiritCoin.new(addressMQ3KePm, addressc44fOh, {from: accounts[2]});
		const uintxHYOKk = BigInt("1119")
		const address7N2iPe = accounts[0]
		const addressWCL6X5h = accounts[2]
		const uintotxR5Re = BigInt("416")
		const addressEKfNEw = accounts[3]
//		const bool84OhJA = await SpiritCoinp2LpsAJ.transferFrom.call(addressWCL6X5h, address7N2iPe, uintxHYOKk, {from: accounts[0]});
//		const addresswzGbxnA = await SpiritCoinp2LpsAJ.mint.call(addressEKfNEw, uintotxR5Re, {from: accounts[5]});

		await expect(SpiritCoinp2LpsAJ.transferFrom.call(addressWCL6X5h, address7N2iPe, uintxHYOKk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresswJEIH4g = accounts[1]
		const addressSyWfvtb = accounts[2]
		const SpiritCoinPwYUV2 = await SpiritCoin.new(addresswJEIH4g, addressSyWfvtb, {from: accounts[4]});
		const uintdiPl8dU = BigInt("1052")
		const addressM8fqT4x = accounts[2]
		const addressgIk0xjp = accounts[2]
		const uintiPoQmC = BigInt("183")
		const addressTz80gQG = accounts[1]
		const addressM1t2hW = accounts[4]
		const addressUpeabO0 = accounts[0]
		const addresswwqovzP = accounts[1]
		const addresssbH1fD4 = accounts[2]
		const addressaYUQwet = accounts[0]
		const boolYdq3XU = await SpiritCoinPwYUV2.approve.call(addressM8fqT4x, uintdiPl8dU, {from: accounts[1]});
		const uintBzKQ7YB = await SpiritCoinPwYUV2.balanceOf.call(addressgIk0xjp, {from: accounts[5]});
//		const boolztDRv1W = await SpiritCoinPwYUV2.transferFrom.call(addressM1t2hW, addressTz80gQG, uintiPoQmC, {from: accounts[4]});
//		const uintCyshHoR = await SpiritCoinPwYUV2.allowance.call(addresswwqovzP, addressUpeabO0, {from: accounts[4]});
//		const uintSWvwL3 = await SpiritCoinPwYUV2.allowance.call(addressaYUQwet, addresssbH1fD4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYdq3XU, true)
		assert.equal(uintBzKQ7YB, BigInt("0"))
		await expect(SpiritCoinPwYUV2.transferFrom.call(addressM1t2hW, addressTz80gQG, uintiPoQmC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFdkAHB1 = "0x0000000000000000000000000000000000000001"
		const addressyeA36hX = accounts[4]
		const SpiritCoine99zKkH = await SpiritCoin.new(addressFdkAHB1, addressyeA36hX, {from: accounts[0]});
		const uintVZ1hZO4 = BigInt("1361")
		const addressrr3HjvQ = accounts[5]
		const addressopX5SYy = accounts[3]
		const uintKy4v9c6 = BigInt("208")
		const addressYDIXVf = accounts[1]
		const uintVmgNMi = BigInt("1478")
		const addressbaj7ZpR = accounts[3]
		const addressc7HLXqx = accounts[4]
		const uintUJwtoY3 = BigInt("1120")
		const addressdktEl0 = accounts[1]
		const boolpP3ZqJ0 = await SpiritCoine99zKkH.transfer.call(addressrr3HjvQ, uintVZ1hZO4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjq84RCO = await SpiritCoine99zKkH.setMinter.call(addressopX5SYy, {from: accounts[0]});
//		const addressd6DGynz = await SpiritCoine99zKkH.mint.call(addressYDIXVf, uintKy4v9c6, {from: accounts[5]});
//		const boolKb2v9DQ = await SpiritCoine99zKkH.transferFrom.call(addressc7HLXqx, addressbaj7ZpR, uintVmgNMi, {from: accounts[2]});
//		const addresssoJKAeo = await SpiritCoine99zKkH.mint.call(addressdktEl0, uintUJwtoY3, {from: accounts[4]});

		assert.equal(boolpP3ZqJ0, true)
		await expect(SpiritCoine99zKkH.setMinter.call(addressopX5SYy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressxCVI6k4 = accounts[3]
		const addressfYdlfl7 = accounts[0]
		const SpiritCoinP7RLzoF = await SpiritCoin.new(addressxCVI6k4, addressfYdlfl7, {from: accounts[3]});
		const uinti0pNRPE = BigInt("430")
		const addresstZoOUIZ = accounts[2]
		const uinte5ihMoG = BigInt("0")
		const addressW7Xkh84 = accounts[4]
		const addressTaCBDp = await SpiritCoinP7RLzoF.mint.call(addresstZoOUIZ, uinti0pNRPE, {from: accounts[0]});
		const boolX6UliJr = await SpiritCoinP7RLzoF.approve.call(addressW7Xkh84, uinte5ihMoG, {from: accounts[2]});

		assert.equal(boolX6UliJr, true)
	});

	it('test for SpiritCoin', async () => {
		const addressbm0hSh9 = "0x0000000000000000000000000000000000000001"
		const addresslj5rs9T = accounts[0]
		const SpiritCoinZ6So5VE = await SpiritCoin.new(addressbm0hSh9, addresslj5rs9T, {from: "0x0000000000000000000000000000000000000001"});
		const addressbyZ5tPC = accounts[3]
		const addressPnj3j66 = accounts[1]
		const addressN8Pao5W = accounts[3]
		const uintjmqa8xi = BigInt("1084")
		const addressF6jJqz5 = accounts[0]
		const uintY4Eql4X = BigInt("848")
		const addressJdoHNs = accounts[4]
		const addressxG926UC = accounts[5]
		const addressovFzQ4I = accounts[2]
		const addressLswG92 = await SpiritCoinZ6So5VE.setMinter.call(addressbyZ5tPC, {from: accounts[5]});
		const uintieGCgTN = await SpiritCoinZ6So5VE.allowance.call(addressN8Pao5W, addressPnj3j66, {from: accounts[4]});
		const boolKXbDvtQ = await SpiritCoinZ6So5VE.transfer.call(addressF6jJqz5, uintjmqa8xi, {from: accounts[1]});
		const boolAR1LD21 = await SpiritCoinZ6So5VE.transferFrom.call(addressxG926UC, addressJdoHNs, uintY4Eql4X, {from: accounts[1]});
		const addresshKZpO6Y = await SpiritCoinZ6So5VE.setMinter.call(addressovFzQ4I, {from: accounts[2]});
	});
})