const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressoKpJDG0 = accounts[0]
		const addressPxgQ38l = accounts[0]
		const SpiritCoinWJSPmM = await SpiritCoin.new(addressoKpJDG0, addressPxgQ38l, {from: accounts[0]});
		const uintphkwdg = BigInt("149")
		const addressID4qvEB = accounts[3]
		const uintivE3ToO = BigInt("316")
		const addressRI6G6Nh = accounts[3]
		const addressXmPpPcL = accounts[0]
		const uintTqtdfhm = BigInt("1041")
		const addressSe5c0Aj = accounts[3]
		const uintUh0XJ0a = BigInt("1294")
		const addressNKWvull = accounts[0]
		const uintMKSrRxd = BigInt("225")
		const addressq7F7mt = accounts[0]
//		const addresshhFgqBt = await SpiritCoinWJSPmM.mint.call(addressID4qvEB, uintphkwdg, {from: accounts[4]});
//		const boolvM6ox6E = await SpiritCoinWJSPmM.transferFrom.call(addressXmPpPcL, addressRI6G6Nh, uintivE3ToO, {from: accounts[4]});
//		const boolm3VrMpr = await SpiritCoinWJSPmM.transfer.call(addressSe5c0Aj, uintTqtdfhm, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbujOYb9 = await SpiritCoinWJSPmM.transfer.call(addressNKWvull, uintUh0XJ0a, {from: accounts[3]});
//		const addressTHRCHXI = await SpiritCoinWJSPmM.mint.call(addressq7F7mt, uintMKSrRxd, {from: accounts[4]});

		await expect(SpiritCoinWJSPmM.mint.call(addressID4qvEB, uintphkwdg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresshDZLmjI = "0x0000000000000000000000000000000000000001"
		const addressk91oVnn = accounts[4]
		const SpiritCoindAX2u0M = await SpiritCoin.new(addresshDZLmjI, addressk91oVnn, {from: accounts[3]});
		const uintG7PfbwS = BigInt("244")
		const addressCCOCsm = accounts[2]
		const addressrx1LTTO = accounts[4]
		const addressydOManA = accounts[1]
		const uintF3ypA5R = BigInt("1811")
		const addresstw6pMIy = accounts[5]
		const uintYLzkk0i = BigInt("191")
		const addressWTOioxm = accounts[4]
		const boolA5g7Wvp = await SpiritCoindAX2u0M.approve.call(addressCCOCsm, uintG7PfbwS, {from: accounts[1]});
		const uintR7Fm0Ge = await SpiritCoindAX2u0M.balanceOf.call(addressrx1LTTO, {from: accounts[2]});
		const uintt2SEVdZ = await SpiritCoindAX2u0M.balanceOf.call(addressydOManA, {from: accounts[0]});
//		const addresszGmIEma = await SpiritCoindAX2u0M.mint.call(addresstw6pMIy, uintF3ypA5R, {from: accounts[1]});
//		const boolCtGGKxd = await SpiritCoindAX2u0M.transfer.call(addressWTOioxm, uintYLzkk0i, {from: accounts[2]});

		assert.equal(boolA5g7Wvp, true)
		assert.equal(uintR7Fm0Ge, BigInt("0"))
		assert.equal(uintt2SEVdZ, BigInt("0"))
		await expect(SpiritCoindAX2u0M.mint.call(addresstw6pMIy, uintF3ypA5R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressvxivTJu = accounts[4]
		const addressQ2qGGgG = accounts[3]
		const SpiritCoinOQDScwo = await SpiritCoin.new(addressvxivTJu, addressQ2qGGgG, {from: "0x0000000000000000000000000000000000000001"});
		const uinthYFgAzg = BigInt("1331")
		const addressDJcikIl = accounts[3]
		const uintpwXzAiP = BigInt("1851")
		const addressx4qwN3 = accounts[2]
		const addressBIfUVdH = accounts[5]
		const uintqQu4Voy = BigInt("848")
		const addressCUnlxwu = accounts[0]
		const addressSeSWNsT = await SpiritCoinOQDScwo.mint.call(addressDJcikIl, uinthYFgAzg, {from: accounts[1]});
		const addressnH2eYdy = await SpiritCoinOQDScwo.mint.call(addressx4qwN3, uintpwXzAiP, {from: accounts[2]});
		const uintAul6nfF = await SpiritCoinOQDScwo.balanceOf.call(addressBIfUVdH, {from: accounts[2]});
		const boolXXjLLO = await SpiritCoinOQDScwo.approve.call(addressCUnlxwu, uintqQu4Voy, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressoToGwco = accounts[0]
		const addressT0PV1XW = accounts[5]
		const SpiritCoinmoxQonO = await SpiritCoin.new(addressoToGwco, addressT0PV1XW, {from: accounts[0]});
		const addressMi6iry0 = accounts[1]
		const uintSlkUrP1 = BigInt("1653")
		const addressbLL2tv6 = accounts[3]
//		const addressGLajlV = await SpiritCoinmoxQonO.setMinter.call(addressMi6iry0, {from: accounts[2]});
//		const addressEZEBtjs = await SpiritCoinmoxQonO.mint.call(addressbLL2tv6, uintSlkUrP1, {from: accounts[3]});

		await expect(SpiritCoinmoxQonO.setMinter.call(addressMi6iry0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressXnPUAyl = accounts[2]
		const addressfigfULy = accounts[3]
		const SpiritCoinhfk5b9T = await SpiritCoin.new(addressXnPUAyl, addressfigfULy, {from: accounts[0]});
		const uintM4KkDRG = BigInt("1207")
		const addressuwnwaP5 = accounts[5]
		const addressB3mZTuz = accounts[2]
		const addressp36CkCX = accounts[3]
		const addressGN57J8x = accounts[2]
		const uintGRaYEgT = BigInt("340")
		const addressncq8T3Y = accounts[0]
		const addressQIbNici = accounts[3]
		const boolDrXARO2 = await SpiritCoinhfk5b9T.approve.call(addressuwnwaP5, uintM4KkDRG, {from: accounts[5]});
		const uintwJms6nG = await SpiritCoinhfk5b9T.balanceOf.call(addressB3mZTuz, {from: "0x0000000000000000000000000000000000000001"});
		const uintVDXccPC = await SpiritCoinhfk5b9T.balanceOf.call(addressp36CkCX, {from: accounts[3]});
		const uintmzp4OvV = await SpiritCoinhfk5b9T.balanceOf.call(addressGN57J8x, {from: accounts[2]});
//		const boolYqHtHd = await SpiritCoinhfk5b9T.transfer.call(addressncq8T3Y, uintGRaYEgT, {from: accounts[1]});
//		const addressICH2lUX = await SpiritCoinhfk5b9T.setMinter.call(addressQIbNici, {from: accounts[1]});

		assert.equal(boolDrXARO2, true)
		assert.equal(uintVDXccPC, BigInt("0"))
		assert.equal(uintmzp4OvV, BigInt("10000000000000000000000000"))
		assert.equal(uintwJms6nG, BigInt("10000000000000000000000000"))
		await expect(SpiritCoinhfk5b9T.transfer.call(addressncq8T3Y, uintGRaYEgT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressjXiYuhM = accounts[1]
		const addressQhxhwz = accounts[3]
		const SpiritCoinVB4jaV8 = await SpiritCoin.new(addressjXiYuhM, addressQhxhwz, {from: accounts[0]});
		const uintuj8KzyH = BigInt("1241")
		const addresseDYtDkD = accounts[4]
		const addresspOHig8O = accounts[3]
		const addressSLQ0K5N = accounts[4]
		const uint5boqUr = BigInt("2017")
		const addressaN4aiOh = accounts[4]
		const addressVNcV6LN = await SpiritCoinVB4jaV8.mint.call(addresseDYtDkD, uintuj8KzyH, {from: accounts[3]});
		const uintGYGZLWJ = await SpiritCoinVB4jaV8.allowance.call(addressSLQ0K5N, addresspOHig8O, {from: accounts[3]});
		const boolAxTiQi = await SpiritCoinVB4jaV8.approve.call(addressaN4aiOh, uint5boqUr, {from: accounts[0]});

		assert.equal(boolAxTiQi, true)
		assert.equal(uintGYGZLWJ, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressaS1bdTW = accounts[4]
		const addressdrObHkN = accounts[3]
		const SpiritCoinFgDztwG = await SpiritCoin.new(addressaS1bdTW, addressdrObHkN, {from: accounts[4]});
		const uintDhSpfTK = BigInt("1718")
		const addressq66limr = accounts[0]
		const addressI0u4jNt = accounts[3]
		const uintqbssH9f = BigInt("523")
		const addresspg48Lhh = accounts[5]
		const uintx8OMs3E = BigInt("1118")
		const addressjrWrHY2 = accounts[4]
		const uintHAFIzGp = BigInt("239")
		const addressOU3mf3a = accounts[2]
//		const bools7FUnn = await SpiritCoinFgDztwG.transferFrom.call(addressI0u4jNt, addressq66limr, uintDhSpfTK, {from: accounts[4]});
//		const addressoHB3Sl = await SpiritCoinFgDztwG.mint.call(addresspg48Lhh, uintqbssH9f, {from: accounts[1]});
//		const bool4iio8v = await SpiritCoinFgDztwG.transfer.call(addressjrWrHY2, uintx8OMs3E, {from: accounts[3]});
//		const boolWCeghD4 = await SpiritCoinFgDztwG.transfer.call(addressOU3mf3a, uintHAFIzGp, {from: accounts[1]});

		await expect(SpiritCoinFgDztwG.transferFrom.call(addressI0u4jNt, addressq66limr, uintDhSpfTK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})