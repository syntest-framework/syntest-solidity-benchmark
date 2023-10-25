const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringjK7JN2l = "mzEdYuKcchPQlawUtA7QJyl3x4J36vAjxPbQ9TlZ4rJ6J36qWCbwwTAMsfLuHtreY8mVZsSu7AXGRKBR9KLPs2"
		const stringYdTgcs = "CTwW6rLx6KqrYEa3jX5YqRsSeiNbUneOSp147zQBTmkCWL5z"
		const uintEFXeWX8 = BigInt("167")
		const WeedburnRj27KoV = await Weedburn.new(stringjK7JN2l, stringYdTgcs, uintEFXeWX8, {from: accounts[0]});
		const addressJo6Z3Ar = accounts[3]
		const uintuf2iljD = BigInt("181")
		const addressL6igOLc = accounts[1]
		const addressNYezxoU = accounts[3]
		const uint256YJhV0gS = await WeedburnRj27KoV.balanceOf.call(addressJo6Z3Ar, {from: accounts[0]});
		const uint8X8Y7lM0 = await WeedburnRj27KoV.decimals.call({from: accounts[4]});
		const boolEwFjeS0 = await WeedburnRj27KoV.transferFrom.call(addressNYezxoU, addressL6igOLc, uintuf2iljD, {from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnkFNYlIQ = await Weedburn.new({from: accounts[1]});
		const uintigkvHWD = BigInt("995")
		const addressL8GYCnz = accounts[2]
		const boolkvBem9d = await WeedburnkFNYlIQ.decreaseAllowance.call(addressL8GYCnz, uintigkvHWD, {from: accounts[4]});
		const stringB2XAHc = await WeedburnkFNYlIQ.symbol.call({from: accounts[3]});
		const uint256aDjSUno = await WeedburnkFNYlIQ.totalSupply.call({from: accounts[0]});

		await expect(WeedburnkFNYlIQ.decreaseAllowance.call(addressL8GYCnz, uintigkvHWD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ6mpGD = await Weedburn.new({from: accounts[3]});
		const addressE2uT54L = accounts[4]
		const stringqpYcwR5 = await WeedburnZ6mpGD.symbol.call({from: accounts[4]});
		const uint256iw1hr51 = await WeedburnZ6mpGD.balanceOf.call(addressE2uT54L, {from: accounts[3]});
		await WeedburnZ6mpGD.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqpYcwR5, "Weedburn")
		assert.equal(uint256iw1hr51, BigInt("0"))
		await expect(WeedburnZ6mpGD.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWNIhzQB = await Weedburn.new({from: accounts[4]});
		const uintXlv7sco = BigInt("336")
		const addressQ9YZLTM = accounts[1]
		const uint256rgjLqoy = await WeedburnWNIhzQB.totalSupply.call({from: accounts[0]});
		const boolgZ8p50s = await WeedburnWNIhzQB.decreaseAllowance.call(addressQ9YZLTM, uintXlv7sco, {from: accounts[1]});
		await WeedburnWNIhzQB.disableDevMode.call({from: accounts[0]});
		await WeedburnWNIhzQB.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256rgjLqoy, BigInt("100000000000000000000000"))
		await expect(WeedburnWNIhzQB.decreaseAllowance.call(addressQ9YZLTM, uintXlv7sco, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXYiXtMU = await Weedburn.new({from: accounts[3]});
		const addressVif0wY = accounts[0]
		const uintBnrNclG = BigInt("2019")
		const uintIIPB4YF = BigInt("874")
		const addressuViaLBK = accounts[3]
		const uintUbUQEzX = BigInt("7")
		const addressGC0JCDb = accounts[2]
		const uint256BLXL6X = await WeedburnXYiXtMU.balanceOf.call(addressVif0wY, {from: accounts[1]});
		const stringjCHbTFz = await WeedburnXYiXtMU.symbol.call({from: accounts[1]});
		const uint256dfM8ScR = await WeedburnXYiXtMU.burn.call(uintBnrNclG, {from: accounts[3]});
		const boollfIBMuW = await WeedburnXYiXtMU.increaseAllowance.call(addressuViaLBK, uintIIPB4YF, {from: accounts[1]});
		const address1sGXO2 = await WeedburnXYiXtMU.burnFrom.call(addressGC0JCDb, uintUbUQEzX, {from: accounts[3]});

		assert.equal(boollfIBMuW, true)
		assert.equal(stringjCHbTFz, "Weedburn")
		assert.equal(uint256BLXL6X, BigInt("0"))
		await expect(WeedburnXYiXtMU.burnFrom.call(addressGC0JCDb, uintUbUQEzX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ6mpGD = await Weedburn.new({from: accounts[3]});
		const addressLrTxU1I = accounts[5]
		const uintkDzHeYd = BigInt("425")
		const addresscNCjpIH = accounts[1]
		const stringqpYcwR5 = await WeedburnZ6mpGD.symbol.call({from: accounts[4]});
		const stringhAoZOmT = await WeedburnZ6mpGD.symbol.call({from: accounts[3]});
		await WeedburnZ6mpGD.enableLimitMode.call({from: accounts[2]});
		const uint256iw1hr51 = await WeedburnZ6mpGD.balanceOf.call(addressLrTxU1I, {from: accounts[3]});
		const boolQVtifZu = await WeedburnZ6mpGD.approve.call(addresscNCjpIH, uintkDzHeYd, {from: accounts[1]});
		await WeedburnZ6mpGD.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringhAoZOmT, "Weedburn")
		assert.equal(stringqpYcwR5, "Weedburn")
		await expect(WeedburnZ6mpGD.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXYiXtMU = await Weedburn.new({from: accounts[3]});
		const addressBB9wIPu = accounts[0]
		const uintOxX1et4 = BigInt("1225")
		const addressJiMl7PP = accounts[1]
		const addressZBmFjxr = accounts[1]
		const uintPNl8qIy = BigInt("2019")
		const uintCuKJa8d = BigInt("874")
		const addressK5OPSCE = accounts[3]
		const uintH1koL6L = BigInt("7")
		const addressqQ523nD = accounts[2]
		const uint256BLXL6X = await WeedburnXYiXtMU.balanceOf.call(addressBB9wIPu, {from: accounts[1]});
		const boolgSDRdDj = await WeedburnXYiXtMU.transferFrom.call(addressZBmFjxr, addressJiMl7PP, uintOxX1et4, {from: accounts[5]});
		const stringjCHbTFz = await WeedburnXYiXtMU.symbol.call({from: accounts[1]});
		const uint256dfM8ScR = await WeedburnXYiXtMU.burn.call(uintPNl8qIy, {from: accounts[3]});
		const boollfIBMuW = await WeedburnXYiXtMU.increaseAllowance.call(addressK5OPSCE, uintCuKJa8d, {from: accounts[1]});
		const address1sGXO2 = await WeedburnXYiXtMU.burnFrom.call(addressqQ523nD, uintH1koL6L, {from: accounts[3]});

		assert.equal(uint256BLXL6X, BigInt("0"))
		await expect(WeedburnXYiXtMU.transferFrom.call(addressZBmFjxr, addressJiMl7PP, uintOxX1et4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWNIhzQB = await Weedburn.new({from: accounts[4]});
		const uintvPHpf8V = BigInt("1248")
		const address3z19tT = accounts[1]
		const uintwBzfK1e = BigInt("336")
		const addressEBD63uv = accounts[1]
		const uint256rgjLqoy = await WeedburnWNIhzQB.totalSupply.call({from: accounts[0]});
		const boolINLVkhi = await WeedburnWNIhzQB.transfer.call(address3z19tT, uintvPHpf8V, {from: accounts[4]});
		const boolgZ8p50s = await WeedburnWNIhzQB.decreaseAllowance.call(addressEBD63uv, uintwBzfK1e, {from: accounts[1]});
		await WeedburnWNIhzQB.disableDevMode.call({from: accounts[0]});
		await WeedburnWNIhzQB.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolINLVkhi, true)
		assert.equal(uint256rgjLqoy, BigInt("100000000000000000000000"))
		await expect(WeedburnWNIhzQB.decreaseAllowance.call(addressEBD63uv, uintwBzfK1e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWNIhzQB = await Weedburn.new({from: accounts[4]});
		const uintgmIIbC1 = BigInt("336")
		const addresszYYT05W = accounts[1]
		const uint256rgjLqoy = await WeedburnWNIhzQB.totalSupply.call({from: accounts[0]});
		const stringTZlpz9l = await WeedburnWNIhzQB.name.call({from: accounts[4]});
		const boolgZ8p50s = await WeedburnWNIhzQB.decreaseAllowance.call(addresszYYT05W, uintgmIIbC1, {from: accounts[1]});
		await WeedburnWNIhzQB.disableDevMode.call({from: accounts[0]});

		assert.equal(stringTZlpz9l, "t.me/burnweed1")
		assert.equal(uint256rgjLqoy, BigInt("100000000000000000000000"))
		await expect(WeedburnWNIhzQB.decreaseAllowance.call(addresszYYT05W, uintgmIIbC1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnykbpvdz = await Weedburn.new({from: accounts[2]});
		const uintJXsa6I9 = BigInt("1129")
		const uintQQunqtt = BigInt("1463")
		const addressfH9uey5 = accounts[5]
		const addressjfg7iUQ = accounts[2]
		const addressm4nla1X = "0x0000000000000000000000000000000000000001"
		await Weedburnykbpvdz.enableDevMode.call({from: accounts[2]});
		const uint256Nc4ioZV = await Weedburnykbpvdz.burn.call(uintJXsa6I9, {from: accounts[2]});
		const addressyTpOSs = await Weedburnykbpvdz.burnFrom.call(addressfH9uey5, uintQQunqtt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256g3C9bk8 = await Weedburnykbpvdz.allowance.call(addressm4nla1X, addressjfg7iUQ, {from: accounts[3]});

		await expect(Weedburnykbpvdz.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnP4F3aQ = await Weedburn.new({from: accounts[4]});
		const uint8Oq19pVe = await WeedburnP4F3aQ.decimals.call({from: accounts[5]});
		await WeedburnP4F3aQ.enableLimitMode.call({from: accounts[0]});
		await WeedburnP4F3aQ.disableLimitMode.call({from: accounts[2]});
		await WeedburnP4F3aQ.enableLimitMode.call({from: accounts[1]});
		await WeedburnP4F3aQ.enableDevMode.call({from: accounts[2]});

		assert.equal(uint8Oq19pVe, BigInt("18"))
		await expect(WeedburnP4F3aQ.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXYiXtMU = await Weedburn.new({from: accounts[3]});
		const uintMwHiY46 = BigInt("1333")
		const addressYk0M3j4 = accounts[0]
		const addressb3qvQl = accounts[4]
		const addressJMPyJ4c = accounts[2]
		const uintGGrPVnL = BigInt("2019")
		const uintnHOcUfE = BigInt("1912")
		const addressOWpbiiC = accounts[4]
		const uinteyexTGB = BigInt("874")
		const addresseGdRMii = accounts[3]
		const boolZKPuUxB = await WeedburnXYiXtMU.increaseAllowance.call(addressYk0M3j4, uintMwHiY46, {from: accounts[0]});
		const uint256jFPoS59 = await WeedburnXYiXtMU.allowance.call(addressJMPyJ4c, addressb3qvQl, {from: accounts[3]});
		const uint256dfM8ScR = await WeedburnXYiXtMU.burn.call(uintGGrPVnL, {from: accounts[3]});
		const boolKywAS2Y = await WeedburnXYiXtMU.transfer.call(addressOWpbiiC, uintnHOcUfE, {from: accounts[4]});
		const stringBkrR1jz = await WeedburnXYiXtMU.symbol.call({from: accounts[4]});
		const boollfIBMuW = await WeedburnXYiXtMU.increaseAllowance.call(addresseGdRMii, uinteyexTGB, {from: accounts[1]});

		assert.equal(boolZKPuUxB, true)
		assert.equal(uint256jFPoS59, BigInt("0"))
		await expect(WeedburnXYiXtMU.transfer.call(addressOWpbiiC, uintnHOcUfE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXYiXtMU = await Weedburn.new({from: accounts[3]});
		const uintuTiuoTw = BigInt("443")
		const addressHNcUi0T = accounts[4]
		const uintyTl6API = BigInt("1985")
		const addressxJPfht = accounts[1]
		const addressb7JND7y = accounts[1]
		const boolgcbWm7n = await WeedburnXYiXtMU.approve.call(addressHNcUi0T, uintuTiuoTw, {from: accounts[0]});
		const boolgSDRdDj = await WeedburnXYiXtMU.transferFrom.call(addressb7JND7y, addressxJPfht, uintyTl6API, {from: accounts[5]});

		assert.equal(boolgcbWm7n, true)
		await expect(WeedburnXYiXtMU.transferFrom.call(addressb7JND7y, addressxJPfht, uintyTl6API, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXYiXtMU = await Weedburn.new({from: accounts[3]});
		const uintg5bmS4b = BigInt("1225")
		const addressh5kGAbA = accounts[1]
		const address6U5PmV = accounts[2]
		await WeedburnXYiXtMU.disableDevMode.call({from: accounts[2]});
		const boolgSDRdDj = await WeedburnXYiXtMU.transferFrom.call(address6U5PmV, addressh5kGAbA, uintg5bmS4b, {from: accounts[5]});

		await expect(WeedburnXYiXtMU.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnvlK2AwY = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFTPo2i = BigInt("2028")
		const addressV81KXZO = accounts[5]
		const uintJo24sz9 = BigInt("1019")
		const addresseJGeDkY = accounts[4]
		const stringNWVBj1F = await WeedburnvlK2AwY.symbol.call({from: accounts[3]});
		const addressRkqu4KY = await WeedburnvlK2AwY.burnFrom.call(addressV81KXZO, uintFTPo2i, {from: accounts[0]});
		const stringoGDpd4K = await WeedburnvlK2AwY.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolG8v1Eiv = await WeedburnvlK2AwY.transfer.call(addresseJGeDkY, uintJo24sz9, {from: accounts[4]});
		await WeedburnvlK2AwY.disableLimitMode.call({from: accounts[2]});
	});
})