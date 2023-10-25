const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringbnHsdd = "sPoz4ERaGHcLw8aS9ZCo1tPjMgfAymtLbfce7Hd18VIy8b26EGh220gQvvYCOmCXEPYNdtaIubqy58h"
		const stringNEz2ggZ = "8Nj1TtV9v7mspFCL063BGTFMj6JENTl5sMVMKD38zFIgHMWcRy6Nr8jrepwczPyiv3tYEsKtNtaUUy"
		const uintAHc9kKe = BigInt("158")
		const WeedburnTUwf4PP = await Weedburn.new(stringbnHsdd, stringNEz2ggZ, uintAHc9kKe, {from: accounts[3]});
		const uintLG4FrOg = BigInt("1300")
		const addressN6fKzva = accounts[3]
		const addressenmUTlk = accounts[5]
		const uintBUqX4SY = BigInt("1440")
		const uintLDf2epV = BigInt("1978")
		const addressEFiLlP3 = accounts[4]
		const stringHP8Ag4W = await WeedburnTUwf4PP.symbol.call({from: accounts[2]});
		const uint8xNSDf5u = await WeedburnTUwf4PP.decimals.call({from: accounts[3]});
		const boolExK1Twx = await WeedburnTUwf4PP.transferFrom.call(addressenmUTlk, addressN6fKzva, uintLG4FrOg, {from: accounts[2]});
		const uint256hyHsRJ5 = await WeedburnTUwf4PP.burn.call(uintBUqX4SY, {from: "0x0000000000000000000000000000000000000001"});
		const addresstc4BBfu = await WeedburnTUwf4PP.burnFrom.call(addressEFiLlP3, uintLDf2epV, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnVoA43TY = await Weedburn.new({from: accounts[0]});
		const uintnN1FPCj = BigInt("937")
		const addressVqkQOHa = accounts[2]
		const uintm94Aoin = BigInt("1364")
		const addressCxa89KE = accounts[4]
		const uintE97IjL2 = BigInt("1388")
		const uint3zNom4 = BigInt("1049")
		const addresszTr3zmR = "0x0000000000000000000000000000000000000001"
		const stringNfSNtEd = await WeedburnVoA43TY.name.call({from: accounts[3]});
		const boolXIUsuyx = await WeedburnVoA43TY.decreaseAllowance.call(addressVqkQOHa, uintnN1FPCj, {from: accounts[2]});
		const boolJuPDO56 = await WeedburnVoA43TY.decreaseAllowance.call(addressCxa89KE, uintm94Aoin, {from: accounts[2]});
		const uint8hIRX1B = await WeedburnVoA43TY.decimals.call({from: accounts[4]});
		const uint256tTQZoJ = await WeedburnVoA43TY.burn.call(uintE97IjL2, {from: accounts[0]});
		const boolvBRMnA0 = await WeedburnVoA43TY.increaseAllowance.call(addresszTr3zmR, uint3zNom4, {from: accounts[2]});

		assert.equal(stringNfSNtEd, "t.me/burnweed1")
		await expect(WeedburnVoA43TY.decreaseAllowance.call(addressVqkQOHa, uintnN1FPCj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburn5wJh2L = await Weedburn.new({from: accounts[5]});
		const uintqw7p5R = BigInt("1709")
		const addressQReKmZA = accounts[2]
		const addressLFy2hCW = accounts[3]
		const uintn9PonX = BigInt("1844")
		const addresslqlGXz2 = accounts[0]
		const uinti7vhPx = BigInt("417")
		const addressQb3iN89 = accounts[2]
		const addressYKvoSMj = accounts[2]
		const uintM1IbPAy = BigInt("965")
		const addressBm7lcpM = accounts[2]
		const boolF6R2K9X = await Weedburn5wJh2L.transferFrom.call(addressLFy2hCW, addressQReKmZA, uintqw7p5R, {from: accounts[3]});
		const boolYschl5Z = await Weedburn5wJh2L.increaseAllowance.call(addresslqlGXz2, uintn9PonX, {from: accounts[2]});
		const uint256L7TA9m = await Weedburn5wJh2L.totalSupply.call({from: accounts[3]});
		const booln5Ib8wQ = await Weedburn5wJh2L.transferFrom.call(addressYKvoSMj, addressQb3iN89, uinti7vhPx, {from: accounts[3]});
		const boolzekGGoe = await Weedburn5wJh2L.increaseAllowance.call(addressBm7lcpM, uintM1IbPAy, {from: accounts[4]});

		await expect(Weedburn5wJh2L.transferFrom.call(addressLFy2hCW, addressQReKmZA, uintqw7p5R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const addressygD2eTd = accounts[4]
		const uinttJHYFfY = BigInt("219")
		const addressraDXDYA = accounts[1]
		const uintpXbiZi4 = BigInt("636")
		const addressmDPjVn = accounts[4]
		const uintKtwA96H = BigInt("1218")
		const addressja4JZF = accounts[4]
		const uint256OgsgBnt = await WeedburnARmOjiP.balanceOf.call(addressygD2eTd, {from: accounts[5]});
		const addressX6EMtl6 = await WeedburnARmOjiP.burnFrom.call(addressraDXDYA, uinttJHYFfY, {from: "0x0000000000000000000000000000000000000001"});
		const boolKTq8Tyk = await WeedburnARmOjiP.increaseAllowance.call(addressmDPjVn, uintpXbiZi4, {from: accounts[0]});
		const addressUx1byw8 = await WeedburnARmOjiP.burnFrom.call(addressja4JZF, uintKtwA96H, {from: accounts[4]});

		assert.equal(uint256OgsgBnt, BigInt("100000000000000000000000"))
		await expect(WeedburnARmOjiP.burnFrom.call(addressraDXDYA, uinttJHYFfY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnFD8VVhb = await Weedburn.new({from: accounts[4]});
		const addressCDZpIz9 = accounts[3]
		const addressW9iZYXH = accounts[4]
		const uintpelAcqz = BigInt("1314")
		const addressI15ijze = accounts[3]
		const uintVv5Lrdc = BigInt("344")
		const addressTiCUR1R = accounts[0]
		const addressrv07x4Y = accounts[3]
		const addressHo90ycW = accounts[0]
		const uint256iSaql6Z = await WeedburnFD8VVhb.balanceOf.call(addressCDZpIz9, {from: accounts[2]});
		const uint256ILbCQAs = await WeedburnFD8VVhb.balanceOf.call(addressW9iZYXH, {from: accounts[4]});
		const boolQhoQyso = await WeedburnFD8VVhb.increaseAllowance.call(addressI15ijze, uintpelAcqz, {from: accounts[3]});
		const boolXFPjoPg = await WeedburnFD8VVhb.increaseAllowance.call(addressTiCUR1R, uintVv5Lrdc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fFyaNgV = await WeedburnFD8VVhb.allowance.call(addressHo90ycW, addressrv07x4Y, {from: accounts[3]});

		assert.equal(boolQhoQyso, true)
		assert.equal(boolXFPjoPg, true)
		assert.equal(uint256ILbCQAs, BigInt("100000000000000000000000"))
		assert.equal(uint256fFyaNgV, BigInt("0"))
		assert.equal(uint256iSaql6Z, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const Weedburn5wJh2L = await Weedburn.new({from: accounts[5]});
		const uintPkMxddO = BigInt("1844")
		const addressjwn40A6 = accounts[0]
		const uintzv8Qn4S = BigInt("417")
		const addressVx3jXU = accounts[2]
		const addressQItifY = accounts[2]
		const uintMzJR4d = BigInt("965")
		const addressM0o39Ll = accounts[2]
		const boolYschl5Z = await Weedburn5wJh2L.increaseAllowance.call(addressjwn40A6, uintPkMxddO, {from: accounts[2]});
		const uint256L7TA9m = await Weedburn5wJh2L.totalSupply.call({from: accounts[3]});
		const booln5Ib8wQ = await Weedburn5wJh2L.transferFrom.call(addressQItifY, addressVx3jXU, uintzv8Qn4S, {from: accounts[3]});
		const boolzekGGoe = await Weedburn5wJh2L.increaseAllowance.call(addressM0o39Ll, uintMzJR4d, {from: accounts[4]});
		const uint8mw8T1EX = await Weedburn5wJh2L.decimals.call({from: accounts[4]});

		assert.equal(boolYschl5Z, true)
		assert.equal(uint256L7TA9m, BigInt("100000000000000000000000"))
		await expect(Weedburn5wJh2L.transferFrom.call(addressQItifY, addressVx3jXU, uintzv8Qn4S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnpli2MrP = await Weedburn.new({from: accounts[1]});
		const uinthk5uq5 = BigInt("484")
		const addressTcNgo9j = accounts[2]
		const addressGuSSQ4R = accounts[0]
		const uintdFke2ib = BigInt("977")
		const addressTmfJYtX = "0x0000000000000000000000000000000000000001"
		const uintM7H4zO4 = BigInt("1585")
		const address7OP5H8 = accounts[4]
		const uint256KZQ9mKE = await Weedburnpli2MrP.burn.call(uinthk5uq5, {from: accounts[0]});
		const uint256w9XBGPE = await Weedburnpli2MrP.allowance.call(addressGuSSQ4R, addressTcNgo9j, {from: accounts[3]});
		const boolFyijixP = await Weedburnpli2MrP.approve.call(addressTmfJYtX, uintdFke2ib, {from: accounts[1]});
		const boolmqSn6yS = await Weedburnpli2MrP.approve.call(address7OP5H8, uintM7H4zO4, {from: accounts[1]});

		await expect(Weedburnpli2MrP.burn.call(uinthk5uq5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnSY3yUiG = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJ2sqPz1 = BigInt("1778")
		const addressSbYS1q0 = accounts[3]
		const addressxE9sDSv = accounts[1]
		const addressZHnw9gP = accounts[5]
		const stringbcTTmpH = await WeedburnSY3yUiG.symbol.call({from: accounts[2]});
		const boolstk7MWF = await WeedburnSY3yUiG.increaseAllowance.call(addressSbYS1q0, uintJ2sqPz1, {from: accounts[3]});
		const uint256GyD7TO = await WeedburnSY3yUiG.allowance.call(addressZHnw9gP, addressxE9sDSv, {from: accounts[2]});
		await WeedburnSY3yUiG.disableDevMode.call({from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const addressZwVRg2h = accounts[4]
		const uintPAsNzvh = BigInt("219")
		const addressZKiRLa = accounts[1]
		const uinthz1tIw0 = BigInt("636")
		const addressxkmevS6 = accounts[4]
		const uintZNvcfK5 = BigInt("1218")
		const addressA0hBjPL = accounts[4]
		await WeedburnARmOjiP.enableLimitMode.call({from: accounts[0]});
		const uint256OgsgBnt = await WeedburnARmOjiP.balanceOf.call(addressZwVRg2h, {from: accounts[5]});
		const addressX6EMtl6 = await WeedburnARmOjiP.burnFrom.call(addressZKiRLa, uintPAsNzvh, {from: "0x0000000000000000000000000000000000000001"});
		const boolKTq8Tyk = await WeedburnARmOjiP.increaseAllowance.call(addressxkmevS6, uinthz1tIw0, {from: accounts[0]});
		const addressUx1byw8 = await WeedburnARmOjiP.burnFrom.call(addressA0hBjPL, uintZNvcfK5, {from: accounts[4]});

		await expect(WeedburnARmOjiP.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnpli2MrP = await Weedburn.new({from: accounts[1]});
		const uintUw5F2Hu = BigInt("496")
		const addressqEJn2Sk = accounts[2]
		const addressEed99G = accounts[0]
		const uinthvMCP2 = BigInt("977")
		const addressjPkz2Wp = "0x0000000000000000000000000000000000000001"
		const uintIORJQN6 = BigInt("1585")
		const addressyG9uP6 = accounts[4]
		const uint8xTeu6di = await Weedburnpli2MrP.decimals.call({from: accounts[2]});
		const uint256KZQ9mKE = await Weedburnpli2MrP.burn.call(uintUw5F2Hu, {from: accounts[0]});
		const uint256QIx0Jix = await Weedburnpli2MrP.totalSupply.call({from: accounts[3]});
		const uint256w9XBGPE = await Weedburnpli2MrP.allowance.call(addressEed99G, addressqEJn2Sk, {from: accounts[3]});
		const boolFyijixP = await Weedburnpli2MrP.approve.call(addressjPkz2Wp, uinthvMCP2, {from: accounts[1]});
		const boolmqSn6yS = await Weedburnpli2MrP.approve.call(addressyG9uP6, uintIORJQN6, {from: accounts[1]});

		assert.equal(uint8xTeu6di, BigInt("18"))
		await expect(Weedburnpli2MrP.burn.call(uintUw5F2Hu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnOxu6gK = await Weedburn.new({from: accounts[1]});
		await WeedburnnOxu6gK.disableLimitMode.call({from: accounts[4]});
		const uint256omjsOBk = await WeedburnnOxu6gK.totalSupply.call({from: accounts[1]});
		const uint256m8c7zBe = await WeedburnnOxu6gK.totalSupply.call({from: accounts[2]});

		await expect(WeedburnnOxu6gK.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTTziaEj = await Weedburn.new({from: accounts[1]});
		const addressiLJh900 = accounts[5]
		const uintYE05MZS = BigInt("49")
		const addressyPjdO3f = accounts[4]
		const uintIurGjeA = BigInt("1039")
		const addressRgzAlZ = accounts[2]
		const uint256AlBkiU5 = await WeedburnTTziaEj.balanceOf.call(addressiLJh900, {from: accounts[1]});
		const boolKn3L05F = await WeedburnTTziaEj.transfer.call(addressyPjdO3f, uintYE05MZS, {from: accounts[0]});
		await WeedburnTTziaEj.enableDevMode.call({from: accounts[2]});
		const boolFrmFkni = await WeedburnTTziaEj.decreaseAllowance.call(addressRgzAlZ, uintIurGjeA, {from: accounts[2]});

		assert.equal(uint256AlBkiU5, BigInt("0"))
		await expect(WeedburnTTziaEj.transfer.call(addressyPjdO3f, uintYE05MZS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const addressaQDI368 = accounts[5]
		const uintVRo9Lk9 = BigInt("1562")
		const addressY75hbHZ = "0x0000000000000000000000000000000000000001"
		const uintfadatBl = BigInt("1709")
		const addresscrJ0pXw = "0x0000000000000000000000000000000000000001"
		const uintHL1Bh6v = BigInt("219")
		const addressbzZ4QKs = accounts[1]
		const uint256OgsgBnt = await WeedburnARmOjiP.balanceOf.call(addressaQDI368, {from: accounts[5]});
		const booltgx4QfR = await WeedburnARmOjiP.transfer.call(addressY75hbHZ, uintVRo9Lk9, {from: accounts[4]});
		const boolepxyIqU = await WeedburnARmOjiP.transfer.call(addresscrJ0pXw, uintfadatBl, {from: accounts[4]});
		const addressX6EMtl6 = await WeedburnARmOjiP.burnFrom.call(addressbzZ4QKs, uintHL1Bh6v, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolepxyIqU, true)
		assert.equal(booltgx4QfR, true)
		assert.equal(uint256OgsgBnt, BigInt("0"))
		await expect(WeedburnARmOjiP.burnFrom.call(addressbzZ4QKs, uintHL1Bh6v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const uintKof7bS = BigInt("1462")
		const addressFh9UHmC = accounts[5]
		const addressnl3jD5a = accounts[3]
		const uintpsHYUW4 = BigInt("293")
		const uintRMddBru = BigInt("219")
		const addresswB7siHU = accounts[2]
		const uintI92kIno = BigInt("230")
		await WeedburnARmOjiP.enableDevMode.call({from: accounts[4]});
		const boolBHee1l4 = await WeedburnARmOjiP.transferFrom.call(addressnl3jD5a, addressFh9UHmC, uintKof7bS, {from: accounts[4]});
		const uint256lEtXfdj = await WeedburnARmOjiP.burn.call(uintpsHYUW4, {from: "0x0000000000000000000000000000000000000001"});
		const addressX6EMtl6 = await WeedburnARmOjiP.burnFrom.call(addresswB7siHU, uintRMddBru, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U3p95yl = await WeedburnARmOjiP.burn.call(uintI92kIno, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnARmOjiP.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const addressgZ4CNCV = accounts[5]
		const uint8sKJmM = BigInt("122")
		const addressZidapR = accounts[1]
		const uintYHkMGH1 = BigInt("219")
		const addressK7dhQOd = accounts[2]
		await WeedburnARmOjiP.disableDevMode.call({from: accounts[1]});
		const uint256OgsgBnt = await WeedburnARmOjiP.balanceOf.call(addressgZ4CNCV, {from: accounts[5]});
		const boolekluvtG = await WeedburnARmOjiP.increaseAllowance.call(addressZidapR, uint8sKJmM, {from: accounts[0]});
		const addressX6EMtl6 = await WeedburnARmOjiP.burnFrom.call(addressK7dhQOd, uintYHkMGH1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnARmOjiP.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const addressqaEDFXA = accounts[5]
		const uintT59M8hP = BigInt("1384")
		const addressnBFgUz = accounts[3]
		const addressisrk2YH = accounts[4]
		const uintz54qEg = BigInt("303")
		const uinteDljCqt = BigInt("219")
		const addressyHwfZb4 = accounts[2]
		const uint256OgsgBnt = await WeedburnARmOjiP.balanceOf.call(addressqaEDFXA, {from: accounts[5]});
		const boolwdEvUnF = await WeedburnARmOjiP.transferFrom.call(addressisrk2YH, addressnBFgUz, uintT59M8hP, {from: accounts[2]});
		const uint256lEtXfdj = await WeedburnARmOjiP.burn.call(uintz54qEg, {from: "0x0000000000000000000000000000000000000001"});
		const addressX6EMtl6 = await WeedburnARmOjiP.burnFrom.call(addressyHwfZb4, uinteDljCqt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OgsgBnt, BigInt("0"))
		await expect(WeedburnARmOjiP.transferFrom.call(addressisrk2YH, addressnBFgUz, uintT59M8hP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburn5wJh2L = await Weedburn.new({from: accounts[5]});
		const uint7baKtF = BigInt("1606")
		const addressUged1cP = accounts[2]
		const uintv6KrJPb = BigInt("1709")
		const addressxYSiCR = accounts[5]
		const addresswafvAb4 = accounts[3]
		const booleffQ5Pl = await Weedburn5wJh2L.approve.call(addressUged1cP, uint7baKtF, {from: accounts[2]});
		const boolF6R2K9X = await Weedburn5wJh2L.transferFrom.call(addresswafvAb4, addressxYSiCR, uintv6KrJPb, {from: accounts[3]});

		assert.equal(booleffQ5Pl, true)
		await expect(Weedburn5wJh2L.transferFrom.call(addresswafvAb4, addressxYSiCR, uintv6KrJPb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const addressRESDSPM = accounts[5]
		const uintFbIMvKM = BigInt("1541")
		const addressWDSDO26 = "0x0000000000000000000000000000000000000001"
		const uint256OgsgBnt = await WeedburnARmOjiP.balanceOf.call(addressRESDSPM, {from: accounts[5]});
		const booltgx4QfR = await WeedburnARmOjiP.transfer.call(addressWDSDO26, uintFbIMvKM, {from: accounts[4]});
		const stringHIVel1Y = await WeedburnARmOjiP.symbol.call({from: accounts[4]});

		assert.equal(booltgx4QfR, true)
		assert.equal(stringHIVel1Y, "Weedburn")
		assert.equal(uint256OgsgBnt, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnARmOjiP = await Weedburn.new({from: accounts[4]});
		const uintqSyBIsM = BigInt("1562")
		const addressUn3lvLu = "0x0000000000000000000000000000000000000001"
		const uintp2LKHde = BigInt("497")
		const booltgx4QfR = await WeedburnARmOjiP.transfer.call(addressUn3lvLu, uintqSyBIsM, {from: accounts[4]});
		const uint256WkbW7CP = await WeedburnARmOjiP.burn.call(uintp2LKHde, {from: accounts[4]});
		await WeedburnARmOjiP.enableLimitMode.call({from: accounts[0]});
		const uint256JMQPNlv = await WeedburnARmOjiP.totalSupply.call({from: accounts[1]});

		assert.equal(booltgx4QfR, true)
		await expect(WeedburnARmOjiP.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})