const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addresstroUe5z = accounts[5]
		const addressmvfbRHg = accounts[0]
		const SpiritCoinCYVRcW = await SpiritCoin.new(addresstroUe5z, addressmvfbRHg, {from: accounts[5]});
		const uinttZxXQFS = BigInt("277")
		const addressN74BE2K = accounts[0]
		const addressHGrxfJ = accounts[3]
		const uintZHwxyMJ = BigInt("1767")
		const addressOqvikd = accounts[4]
		const addressMRtoGqX = accounts[2]
		const addressCNjwRgm = accounts[1]
//		const boolawSMYRN = await SpiritCoinCYVRcW.transferFrom.call(addressHGrxfJ, addressN74BE2K, uinttZxXQFS, {from: accounts[2]});
//		const addressbvlvL6 = await SpiritCoinCYVRcW.mint.call(addressOqvikd, uintZHwxyMJ, {from: accounts[2]});
//		const addresshlsqQmr = await SpiritCoinCYVRcW.setMinter.call(addressMRtoGqX, {from: accounts[3]});
//		const uintMizvajw = await SpiritCoinCYVRcW.balanceOf.call(addressCNjwRgm, {from: accounts[5]});

		await expect(SpiritCoinCYVRcW.transferFrom.call(addressHGrxfJ, addressN74BE2K, uinttZxXQFS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressIMOt7Ip = accounts[5]
		const addressPk4sq88 = accounts[4]
		const SpiritCoinHoaDLji = await SpiritCoin.new(addressIMOt7Ip, addressPk4sq88, {from: "0x0000000000000000000000000000000000000001"});
		const uinttIH4vj = BigInt("99")
		const addressap0XwSX = accounts[2]
		const addresswWTmiwV = accounts[0]
		const uintkZ88dKJ = BigInt("1684")
		const addressX0iknBg = "0x0000000000000000000000000000000000000001"
		const uintCBKK9ec = BigInt("756")
		const addressyHsx8vh = accounts[0]
		const addressnwHqrt = accounts[0]
		const boolC8oKSRk = await SpiritCoinHoaDLji.transfer.call(addressap0XwSX, uinttIH4vj, {from: accounts[4]});
		const addressuoMuCzU = await SpiritCoinHoaDLji.setMinter.call(addresswWTmiwV, {from: accounts[1]});
		const addressSgHR1k2 = await SpiritCoinHoaDLji.mint.call(addressX0iknBg, uintkZ88dKJ, {from: accounts[2]});
		const boolYW8jP0h = await SpiritCoinHoaDLji.transferFrom.call(addressnwHqrt, addressyHsx8vh, uintCBKK9ec, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addressrwwiFMY = accounts[5]
		const addressdfVENRt = accounts[2]
		const SpiritCoinvXNlppu = await SpiritCoin.new(addressrwwiFMY, addressdfVENRt, {from: accounts[0]});
		const uintQ4BJeAc = BigInt("1483")
		const addressjTpIlhI = accounts[3]
		const addresshA6KFX = accounts[5]
		const addressBBIYaLE = accounts[0]
		const addressS1ULs6f = accounts[4]
		const uintSzg2dTl = BigInt("2020")
		const addressc64OTVQ = accounts[2]
//		const boolW21ajye = await SpiritCoinvXNlppu.transfer.call(addressjTpIlhI, uintQ4BJeAc, {from: accounts[0]});
//		const uintElEpZ7w = await SpiritCoinvXNlppu.allowance.call(addressBBIYaLE, addresshA6KFX, {from: accounts[3]});
//		const uintg05pJO9 = await SpiritCoinvXNlppu.balanceOf.call(addressS1ULs6f, {from: accounts[5]});
//		const boolf9mjecc = await SpiritCoinvXNlppu.approve.call(addressc64OTVQ, uintSzg2dTl, {from: accounts[2]});

		await expect(SpiritCoinvXNlppu.transfer.call(addressjTpIlhI, uintQ4BJeAc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressTy10oHV = accounts[0]
		const addressBBa9Iz2 = accounts[2]
		const SpiritCoinjxEHQ0d = await SpiritCoin.new(addressTy10oHV, addressBBa9Iz2, {from: accounts[3]});
		const addressdNpfKCT = accounts[1]
		const addressbgVsDFq = accounts[2]
		const uintVffqmpJ = BigInt("287")
		const addressKy1CUt = accounts[3]
		const uintX4qBiz = BigInt("1198")
		const addressRnWx8Ds = accounts[2]
		const uintl0f8t3B = await SpiritCoinjxEHQ0d.balanceOf.call(addressdNpfKCT, {from: accounts[3]});
		const uintiYa7CwZ = await SpiritCoinjxEHQ0d.balanceOf.call(addressbgVsDFq, {from: accounts[4]});
//		const addressu7HJHSe = await SpiritCoinjxEHQ0d.mint.call(addressKy1CUt, uintVffqmpJ, {from: accounts[1]});
//		const boolZgQmbiF = await SpiritCoinjxEHQ0d.transfer.call(addressRnWx8Ds, uintX4qBiz, {from: accounts[3]});

		assert.equal(uintiYa7CwZ, BigInt("0"))
		assert.equal(uintl0f8t3B, BigInt("0"))
		await expect(SpiritCoinjxEHQ0d.mint.call(addressKy1CUt, uintVffqmpJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressH4atv00 = accounts[1]
		const addressUOju1KK = accounts[4]
		const SpiritCoinBQhrhY3 = await SpiritCoin.new(addressH4atv00, addressUOju1KK, {from: accounts[0]});
		const addressxJp1jj9 = accounts[2]
		const uintqQN2Kd = BigInt("613")
		const addressGx15QrV = "0x0000000000000000000000000000000000000001"
		const addressixeGRSS = accounts[3]
		const uintJhcAwkM = BigInt("1734")
		const addressPXU9nX1 = accounts[0]
		const addressYzGphuE = accounts[0]
		const addressx3VwkG7 = accounts[4]
		const uintXg3CDYs = BigInt("1342")
		const addresscsokt6Q = accounts[4]
//		const addressPYhHuew = await SpiritCoinBQhrhY3.setMinter.call(addressxJp1jj9, {from: accounts[1]});
//		const bool3RqKwU = await SpiritCoinBQhrhY3.transferFrom.call(addressixeGRSS, addressGx15QrV, uintqQN2Kd, {from: accounts[3]});
//		const addressgyH2zOM = await SpiritCoinBQhrhY3.mint.call(addressPXU9nX1, uintJhcAwkM, {from: accounts[2]});
//		const uintlnHwebr = await SpiritCoinBQhrhY3.allowance.call(addressx3VwkG7, addressYzGphuE, {from: accounts[1]});
//		const boola2wbYSt = await SpiritCoinBQhrhY3.transfer.call(addresscsokt6Q, uintXg3CDYs, {from: accounts[0]});

		await expect(SpiritCoinBQhrhY3.setMinter.call(addressxJp1jj9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressrKPNnqb = "0x0000000000000000000000000000000000000001"
		const addresseaoAIBP = accounts[4]
		const SpiritCoinrcFsN9K = await SpiritCoin.new(addressrKPNnqb, addresseaoAIBP, {from: accounts[0]});
		const uintZ2wwhIP = BigInt("327")
		const addressLBy35pM = "0x0000000000000000000000000000000000000001"
		const uintZlwxJ1c = BigInt("837")
		const addressZCUfD8E = accounts[4]
		const uintaInRJns = BigInt("194")
		const addressPW4JSiV = accounts[0]
		const addressr27fJm4 = accounts[5]
		const addressgFc8EvY = accounts[4]
		const addressuvYksk = accounts[1]
		const boolpvMapMC = await SpiritCoinrcFsN9K.approve.call(addressLBy35pM, uintZ2wwhIP, {from: accounts[0]});
//		const addressgzXCgWp = await SpiritCoinrcFsN9K.mint.call(addressZCUfD8E, uintZlwxJ1c, {from: accounts[5]});
//		const boolLwK0iVd = await SpiritCoinrcFsN9K.approve.call(addressPW4JSiV, uintaInRJns, {from: accounts[2]});
//		const uintmqFBF5r = await SpiritCoinrcFsN9K.allowance.call(addressgFc8EvY, addressr27fJm4, {from: accounts[4]});
//		const addresscioqTQ1 = await SpiritCoinrcFsN9K.setMinter.call(addressuvYksk, {from: accounts[3]});

		assert.equal(boolpvMapMC, true)
		await expect(SpiritCoinrcFsN9K.mint.call(addressZCUfD8E, uintZlwxJ1c, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressN5TpntE = "0x0000000000000000000000000000000000000001"
		const addresshwX5xOk = accounts[4]
		const SpiritCoinrcFsN9K = await SpiritCoin.new(addressN5TpntE, addresshwX5xOk, {from: accounts[0]});
		const uintzPnajKh = BigInt("327")
		const addresszPMa8rY = "0x0000000000000000000000000000000000000001"
		const uintAdIbUj8 = BigInt("210")
		const addressPUbdwY0 = accounts[0]
		const addressBoV1cLC = accounts[5]
		const addressRqfmos2 = accounts[4]
		const addresstQNNQeB = accounts[1]
		const boolpvMapMC = await SpiritCoinrcFsN9K.approve.call(addresszPMa8rY, uintzPnajKh, {from: accounts[0]});
		const boolLwK0iVd = await SpiritCoinrcFsN9K.approve.call(addressPUbdwY0, uintAdIbUj8, {from: accounts[2]});
		const uintmqFBF5r = await SpiritCoinrcFsN9K.allowance.call(addressRqfmos2, addressBoV1cLC, {from: accounts[4]});
//		const addresscioqTQ1 = await SpiritCoinrcFsN9K.setMinter.call(addresstQNNQeB, {from: accounts[3]});

		assert.equal(boolLwK0iVd, true)
		assert.equal(boolpvMapMC, true)
		assert.equal(uintmqFBF5r, BigInt("0"))
		await expect(SpiritCoinrcFsN9K.setMinter.call(addresstQNNQeB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressAFnEcf = "0x0000000000000000000000000000000000000001"
		const addressT6rzjsb = accounts[4]
		const SpiritCoinrcFsN9K = await SpiritCoin.new(addressAFnEcf, addressT6rzjsb, {from: accounts[0]});
		const uintis0gesr = BigInt("1995")
		const addressJLJQACj = accounts[0]
		const addressboxS67 = accounts[2]
		const uintOchoYX8 = BigInt("327")
		const addressm5mkvGk = "0x0000000000000000000000000000000000000001"
		const uintWcjzKqr = BigInt("210")
		const addressHkDdK3f = accounts[1]
		const uintxo9L6SX = BigInt("686")
		const addressP9VpyCU = accounts[1]
		const addressJh3DveV = accounts[1]
		const addresszoAKvZs = accounts[5]
		const addresshx8TKK4 = accounts[4]
		const addressv4F8tE = accounts[3]
		const uintaU576vD = BigInt("438")
		const addresszJUlJiu = accounts[4]
		const booleYlKb73 = await SpiritCoinrcFsN9K.transfer.call(addressJLJQACj, uintis0gesr, {from: "0x0000000000000000000000000000000000000001"});
		const addresspoJ4sUI = await SpiritCoinrcFsN9K.setMinter.call(addressboxS67, {from: accounts[4]});
		const boolpvMapMC = await SpiritCoinrcFsN9K.approve.call(addressm5mkvGk, uintOchoYX8, {from: accounts[0]});
		const boolLwK0iVd = await SpiritCoinrcFsN9K.approve.call(addressHkDdK3f, uintWcjzKqr, {from: accounts[2]});
//		const boolUgO2gnr = await SpiritCoinrcFsN9K.transferFrom.call(addressJh3DveV, addressP9VpyCU, uintxo9L6SX, {from: accounts[0]});
//		const uintmqFBF5r = await SpiritCoinrcFsN9K.allowance.call(addresshx8TKK4, addresszoAKvZs, {from: accounts[4]});
//		const addresscioqTQ1 = await SpiritCoinrcFsN9K.setMinter.call(addressv4F8tE, {from: accounts[3]});
//		const boolU2FtmFB = await SpiritCoinrcFsN9K.transfer.call(addresszJUlJiu, uintaU576vD, {from: accounts[0]});

		assert.equal(boolLwK0iVd, true)
		assert.equal(booleYlKb73, true)
		assert.equal(boolpvMapMC, true)
		await expect(SpiritCoinrcFsN9K.transferFrom.call(addressJh3DveV, addressP9VpyCU, uintxo9L6SX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressYg5Korm = accounts[0]
		const addresszPtNTqy = accounts[2]
		const SpiritCoinqnoY857 = await SpiritCoin.new(addressYg5Korm, addresszPtNTqy, {from: accounts[4]});
		const uintd4ytQpF = BigInt("354")
		const addressCg41H1t = accounts[2]
		const addressNDPX5ED = accounts[1]
		const addressbFuna9 = accounts[4]
		const addressF2fX4BO = await SpiritCoinqnoY857.mint.call(addressCg41H1t, uintd4ytQpF, {from: accounts[2]});
		const uintzGG0qox = await SpiritCoinqnoY857.allowance.call(addressbFuna9, addressNDPX5ED, {from: accounts[5]});

		assert.equal(uintzGG0qox, BigInt("0"))
	});
})