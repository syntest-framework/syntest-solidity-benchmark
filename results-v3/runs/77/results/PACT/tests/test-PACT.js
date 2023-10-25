const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTlBiZkM2 = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLrWJ04E = accounts[0]
		const boolvwu15Du = await PACTlBiZkM2.setupTeam.call(addressLrWJ04E, {from: accounts[4]});
		const uint8eRJYws = await PACTlBiZkM2.decimals.call({from: accounts[4]});
		const stringUiXSI9w = await PACTlBiZkM2.symbol.call({from: accounts[0]});
		const stringhAM16D1 = await PACTlBiZkM2.name.call({from: accounts[3]});
	});

	it('test for PACT', async () => {
		const PACTtoakK0y = await PACT.new({from: accounts[0]});
		const addresswbiokLr = accounts[5]
		const addressa0EdwzY = accounts[0]
		const addressESDEpiB = "0x0000000000000000000000000000000000000001"
		const uintyYMfnl6 = BigInt("1346")
		const addressLAAyZut = accounts[3]
		const uintD1tYRgP = BigInt("559")
		const addressbusgZZE = accounts[0]
		const addressFYtxbXp = "0x0000000000000000000000000000000000000001"
		const boolHCAgE7T = await PACTtoakK0y.setupReserve.call(addresswbiokLr, {from: accounts[5]});
		const uintLEYby8R = await PACTtoakK0y.balanceOf.call(addressa0EdwzY, {from: "0x0000000000000000000000000000000000000001"});
		const boolPxMusBO = await PACTtoakK0y.setupRewards.call(addressESDEpiB, {from: accounts[1]});
		const boolyqcW455 = await PACTtoakK0y.approve.call(addressLAAyZut, uintyYMfnl6, {from: "0x0000000000000000000000000000000000000001"});
		const boolnZ0i8bW = await PACTtoakK0y.transferFrom.call(addressFYtxbXp, addressbusgZZE, uintD1tYRgP, {from: accounts[2]});

		await expect(PACTtoakK0y.setupReserve.call(addresswbiokLr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGxrl2CN = await PACT.new({from: accounts[0]});
		const addressZOEugiE = accounts[0]
		const addresscsHpYDl = "0x0000000000000000000000000000000000000001"
		const addressofexVai = accounts[0]
		const addressoKko99c = accounts[5]
		const addressAwfPTgL = accounts[0]
		const uintxCH16X5 = await PACTGxrl2CN.allowance.call(addresscsHpYDl, addressZOEugiE, {from: accounts[2]});
		const stringYI4KEgV = await PACTGxrl2CN.name.call({from: accounts[2]});
		const uintaKSpOmI = await PACTGxrl2CN.allowance.call(addressoKko99c, addressofexVai, {from: "0x0000000000000000000000000000000000000001"});
		const boolL1U2zbh = await PACTGxrl2CN.setupReserve.call(addressAwfPTgL, {from: accounts[2]});

		assert.equal(stringYI4KEgV, "P2PB2B community token")
		assert.equal(uintaKSpOmI, BigInt("0"))
		assert.equal(uintxCH16X5, BigInt("0"))
		await expect(PACTGxrl2CN.setupReserve.call(addressAwfPTgL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTAFLNcQk = await PACT.new({from: accounts[0]});
		const addressyjhOEWX = accounts[3]
		const addressKytoIW = accounts[3]
		const uintprfTgIo = BigInt("1136")
		const addressb3gelg5 = accounts[1]
		const boolGNSZmR = await PACTAFLNcQk.setupFarming.call(addressyjhOEWX, {from: accounts[2]});
		const boolcichtin = await PACTAFLNcQk.setupBasePool.call(addressKytoIW, {from: accounts[4]});
		const boolx4MBj1R = await PACTAFLNcQk.approve.call(addressb3gelg5, uintprfTgIo, {from: accounts[1]});

		await expect(PACTAFLNcQk.setupFarming.call(addressyjhOEWX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTQouW1N = await PACT.new({from: accounts[4]});
		const addressI6MFWPd = accounts[5]
		const uintyAyiEv3 = BigInt("10")
		const addressaxugqsq = accounts[4]
		const addressRNG0x69 = accounts[3]
		const addresscbUl2sf = accounts[2]
		const addressUVMACnp = "0x0000000000000000000000000000000000000001"
		const addressCKx949Q = accounts[0]
		const uintwFPfgyn = BigInt("706")
		const addressiZ5XLeS = accounts[5]
		const stringFHvyrKm = await PACTQouW1N.symbol.call({from: accounts[1]});
		const boolXPfdccm = await PACTQouW1N.setupFarming.call(addressI6MFWPd, {from: accounts[4]});
		const boolgy74Xss = await PACTQouW1N.transferFrom.call(addressRNG0x69, addressaxugqsq, uintyAyiEv3, {from: accounts[0]});
		const boolXjoBWek = await PACTQouW1N.setupRewards.call(addresscbUl2sf, {from: accounts[1]});
		const uintyCENKRJ = await PACTQouW1N.allowance.call(addressCKx949Q, addressUVMACnp, {from: accounts[1]});
		const boolH5cfHKY = await PACTQouW1N.transfer.call(addressiZ5XLeS, uintwFPfgyn, {from: accounts[5]});

		assert.equal(stringFHvyrKm, "PACT")
		await expect(PACTQouW1N.setupFarming.call(addressI6MFWPd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTAY4g6gy = await PACT.new({from: accounts[0]});
		const addressiYK4YRA = accounts[3]
		const uintIk2kWin = BigInt("1638")
		const addressU3RQnmJ = accounts[2]
		const uintJCUPKqm = BigInt("1967")
		const addressnUYDaxV = accounts[5]
		const uintQZrIlz8 = BigInt("998")
		const addressZa6eeqq = accounts[0]
		const addressN1d6W50 = accounts[2]
		const uintriUgYrP = BigInt("1090")
		const addressskmTozk = accounts[0]
		const stringYhn1Vck = await PACTAY4g6gy.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZfMWJ4g = await PACTAY4g6gy.setupRewards.call(addressiYK4YRA, {from: accounts[4]});
		const booleBJFhsF = await PACTAY4g6gy.approve.call(addressU3RQnmJ, uintIk2kWin, {from: accounts[0]});
		const boolJa7HLuy = await PACTAY4g6gy.approve.call(addressnUYDaxV, uintJCUPKqm, {from: accounts[1]});
		const boolXlMfWIs = await PACTAY4g6gy.transferFrom.call(addressN1d6W50, addressZa6eeqq, uintQZrIlz8, {from: accounts[2]});
		const boolvl9fVPT = await PACTAY4g6gy.transfer.call(addressskmTozk, uintriUgYrP, {from: accounts[0]});

		assert.equal(stringYhn1Vck, "PACT")
		await expect(PACTAY4g6gy.setupRewards.call(addressiYK4YRA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJZMwKhK = await PACT.new({from: accounts[1]});
		const addresshR0rd2A = accounts[1]
		const addressXsvbyth = accounts[4]
		const boolejS7yvc = await PACTJZMwKhK.setupTeam.call(addresshR0rd2A, {from: accounts[4]});
		const stringoixwOA9 = await PACTJZMwKhK.symbol.call({from: accounts[2]});
		const booleH50kPh = await PACTJZMwKhK.setupBasePool.call(addressXsvbyth, {from: accounts[3]});

		await expect(PACTJZMwKhK.setupTeam.call(addresshR0rd2A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGxrl2CN = await PACT.new({from: accounts[0]});
		const addressHfPOYho = "0x0000000000000000000000000000000000000001"
		const addressuNovKp6 = accounts[0]
		const addressMgmeVm0 = "0x0000000000000000000000000000000000000001"
		const addressnYuhrog = accounts[1]
		const addressV7oZpJ3 = accounts[5]
		const addressAKqLI8X = accounts[0]
		const uintPb7IefP = await PACTGxrl2CN.balanceOf.call(addressHfPOYho, {from: accounts[2]});
		const uintxCH16X5 = await PACTGxrl2CN.allowance.call(addressMgmeVm0, addressuNovKp6, {from: accounts[2]});
		const stringYI4KEgV = await PACTGxrl2CN.name.call({from: accounts[2]});
		const stringVDy4Q7s = await PACTGxrl2CN.symbol.call({from: accounts[0]});
		const uintaKSpOmI = await PACTGxrl2CN.allowance.call(addressV7oZpJ3, addressnYuhrog, {from: "0x0000000000000000000000000000000000000001"});
		const boolL1U2zbh = await PACTGxrl2CN.setupReserve.call(addressAKqLI8X, {from: accounts[2]});

		assert.equal(stringVDy4Q7s, "PACT")
		assert.equal(stringYI4KEgV, "P2PB2B community token")
		assert.equal(uintPb7IefP, BigInt("0"))
		assert.equal(uintaKSpOmI, BigInt("0"))
		assert.equal(uintxCH16X5, BigInt("0"))
		await expect(PACTGxrl2CN.setupReserve.call(addressAKqLI8X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTAFLNcQk = await PACT.new({from: accounts[0]});
		const addressPB3OhH = accounts[3]
		const uintRlY87Q = BigInt("1136")
		const addressVRJFC3t = accounts[2]
		const boolcichtin = await PACTAFLNcQk.setupBasePool.call(addressPB3OhH, {from: accounts[4]});
		const boolx4MBj1R = await PACTAFLNcQk.approve.call(addressVRJFC3t, uintRlY87Q, {from: accounts[1]});

		await expect(PACTAFLNcQk.setupBasePool.call(addressPB3OhH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnfSn0i5 = await PACT.new({from: accounts[4]});
		const uintPnZHgnH = await PACTnfSn0i5.totalSupply.call({from: accounts[0]});
		const uintjzujERj = await PACTnfSn0i5.totalSupply.call({from: accounts[5]});
		const stringyt97JK1 = await PACTnfSn0i5.symbol.call({from: accounts[2]});

		assert.equal(stringyt97JK1, "PACT")
		assert.equal(uintPnZHgnH, BigInt("1000000000000000000000000000"))
		assert.equal(uintjzujERj, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTAY4g6gy = await PACT.new({from: accounts[0]});
		const uintEO0cwqX = BigInt("896")
		const addresspM2ClVI = accounts[1]
		const addresst0vLuix = accounts[3]
		const uinthXNgpRq = BigInt("1638")
		const addressWeIpG3n = accounts[2]
		const uintuTq6hqA = BigInt("1967")
		const addressI4hmr0Q = accounts[5]
		const uintfc8FZQW = BigInt("1090")
		const addressweyDP33 = accounts[0]
		const stringYdxVSuG = await PACTAY4g6gy.name.call({from: accounts[2]});
		const boolrFL97o = await PACTAY4g6gy.approve.call(addresspM2ClVI, uintEO0cwqX, {from: accounts[3]});
		const stringYhn1Vck = await PACTAY4g6gy.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZfMWJ4g = await PACTAY4g6gy.setupRewards.call(addresst0vLuix, {from: accounts[4]});
		const booleBJFhsF = await PACTAY4g6gy.approve.call(addressWeIpG3n, uinthXNgpRq, {from: accounts[0]});
		const boolJa7HLuy = await PACTAY4g6gy.approve.call(addressI4hmr0Q, uintuTq6hqA, {from: accounts[1]});
		const boolvl9fVPT = await PACTAY4g6gy.transfer.call(addressweyDP33, uintfc8FZQW, {from: accounts[0]});

		assert.equal(boolrFL97o, true)
		assert.equal(stringYdxVSuG, "P2PB2B community token")
		assert.equal(stringYhn1Vck, "PACT")
		await expect(PACTAY4g6gy.setupRewards.call(addresst0vLuix, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT4zB0jo = await PACT.new({from: accounts[0]});
		const uintybXciMo = BigInt("1374")
		const addressDCwAAm = accounts[2]
		const addressYqfJgfd = accounts[5]
		const addressIz2HQrc = accounts[5]
		const uintqdM67LQ = BigInt("279")
		const addressdovcxTT = accounts[0]
		const stringasX8R3O = await PACT4zB0jo.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolRJl6e3X = await PACT4zB0jo.transfer.call(addressDCwAAm, uintybXciMo, {from: accounts[3]});
		const booleZ5ZxxY = await PACT4zB0jo.setupRewards.call(addressYqfJgfd, {from: accounts[4]});
		const boolp1f4w3m = await PACT4zB0jo.setupFarming.call(addressIz2HQrc, {from: accounts[3]});
		const boolHZRZAjq = await PACT4zB0jo.approve.call(addressdovcxTT, uintqdM67LQ, {from: accounts[2]});

		assert.equal(stringasX8R3O, "P2PB2B community token")
		await expect(PACT4zB0jo.transfer.call(addressDCwAAm, uintybXciMo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGxrl2CN = await PACT.new({from: accounts[0]});
		const addresspCaCeGY = accounts[0]
		const addressWxGJS4 = accounts[5]
		const addressVU9KD89 = accounts[0]
		const stringYI4KEgV = await PACTGxrl2CN.name.call({from: accounts[2]});
		const uint8bCp8T4b = await PACTGxrl2CN.decimals.call({from: accounts[1]});
		const uintaKSpOmI = await PACTGxrl2CN.allowance.call(addressWxGJS4, addresspCaCeGY, {from: "0x0000000000000000000000000000000000000001"});
		const boolL1U2zbh = await PACTGxrl2CN.setupReserve.call(addressVU9KD89, {from: accounts[2]});

		assert.equal(stringYI4KEgV, "P2PB2B community token")
		assert.equal(uint8bCp8T4b, BigInt("18"))
		assert.equal(uintaKSpOmI, BigInt("0"))
		await expect(PACTGxrl2CN.setupReserve.call(addressVU9KD89, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT4zB0jo = await PACT.new({from: accounts[0]});
		const uint6WCvXp = BigInt("859")
		const addressrKjVPwZ = accounts[0]
		const addressWov8Gx = accounts[4]
		const addressXxw0JW3 = accounts[3]
		const uintfEO0tr2 = BigInt("1374")
		const addressZReB6NK = accounts[2]
		const addresskXT3uoq = accounts[5]
		const addressWMdWlYe = accounts[5]
		const uintdtlY2AM = BigInt("279")
		const addressSo5HASr = accounts[0]
		const booljK08JG0 = await PACT4zB0jo.transferFrom.call(addressWov8Gx, addressrKjVPwZ, uint6WCvXp, {from: accounts[3]});
		const boolnGNhPa = await PACT4zB0jo.setupRewards.call(addressXxw0JW3, {from: accounts[3]});
		const boolRJl6e3X = await PACT4zB0jo.transfer.call(addressZReB6NK, uintfEO0tr2, {from: accounts[3]});
		const booleZ5ZxxY = await PACT4zB0jo.setupRewards.call(addresskXT3uoq, {from: accounts[4]});
		const boolp1f4w3m = await PACT4zB0jo.setupFarming.call(addressWMdWlYe, {from: accounts[3]});
		const boolHZRZAjq = await PACT4zB0jo.approve.call(addressSo5HASr, uintdtlY2AM, {from: accounts[2]});

		await expect(PACT4zB0jo.transferFrom.call(addressWov8Gx, addressrKjVPwZ, uint6WCvXp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTAY4g6gy = await PACT.new({from: accounts[0]});
		const uintVZPn6VM = BigInt("940")
		const addressC16q3hR = accounts[2]
		const addresswGQ9cGf = accounts[3]
		const uintmjl3FFh = BigInt("1967")
		const addressxOw9aE0 = accounts[5]
		const uintu7xVSox = BigInt("998")
		const addressaZwjVd = accounts[0]
		const addressb2L7clV = accounts[3]
		const stringYhn1Vck = await PACTAY4g6gy.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLfhQLwf = await PACTAY4g6gy.burn.call(addressC16q3hR, uintVZPn6VM, {from: "0x0000000000000000000000000000000000000001"});
		const boolZfMWJ4g = await PACTAY4g6gy.setupRewards.call(addresswGQ9cGf, {from: accounts[4]});
		const boolJa7HLuy = await PACTAY4g6gy.approve.call(addressxOw9aE0, uintmjl3FFh, {from: accounts[1]});
		const boolXlMfWIs = await PACTAY4g6gy.transferFrom.call(addressb2L7clV, addressaZwjVd, uintu7xVSox, {from: accounts[2]});

		assert.equal(stringYhn1Vck, "PACT")
		await expect(PACTAY4g6gy.burn.call(addressC16q3hR, uintVZPn6VM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})