const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressTvtE4zj = accounts[1]
		const afiControllerHKCHJt3 = await afiController.new(addressTvtE4zj, {from: accounts[3]});
		const addressIWuCt8 = "0x0000000000000000000000000000000000000001"
		const addresswtuAmI3 = accounts[2]
		const uintXhpmJiw = BigInt("463")
		const addressKbhUTgQ = accounts[1]
		const addresszI9lAjc = accounts[4]
		const addresseKb6w7j = await afiControllerHKCHJt3.setStrategy.call(addresswtuAmI3, addressIWuCt8, {from: accounts[2]});
		const addressOJh6W27 = await afiControllerHKCHJt3.inCaseTokensGetStuck.call(addressKbhUTgQ, uintXhpmJiw, {from: accounts[3]});
		const addressaXreLUc = await afiControllerHKCHJt3.setRewards.call(addresszI9lAjc, {from: accounts[1]});

		await expect(afiControllerHKCHJt3.setStrategy.call(addresswtuAmI3, addressIWuCt8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmUF8vfD = "0x0000000000000000000000000000000000000001"
		const afiControllerA62bQPB = await afiController.new(addressmUF8vfD, {from: accounts[4]});
		const addressHXFpVGP = accounts[2]
		const uinttn0ZZBk = BigInt("124")
		const addressdXTPK2w = accounts[4]
		const uintxbbdpDp = BigInt("466")
		const addressQDzAG50 = accounts[4]
		const addresstF6CXpk = accounts[2]
		const addressoVZykFP = await afiControllerA62bQPB.setOneSplit.call(addressHXFpVGP, {from: accounts[0]});
		const addressqeQJFaL = await afiControllerA62bQPB.earn.call(addressdXTPK2w, uinttn0ZZBk, {from: accounts[4]});
		const addressoznN0Z = await afiControllerA62bQPB.inCaseTokensGetStuck.call(addressQDzAG50, uintxbbdpDp, {from: accounts[3]});
		const addresszqN9S36 = await afiControllerA62bQPB.setOneSplit.call(addresstF6CXpk, {from: accounts[0]});

		await expect(afiControllerA62bQPB.setOneSplit.call(addressHXFpVGP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOO94PpQ = accounts[2]
		const afiController1BTjPK = await afiController.new(addressOO94PpQ, {from: accounts[0]});
		const uintvdho5S = BigInt("1439")
		const addressi8TW1bI = accounts[0]
		const uintvR1OhRo = BigInt("1066")
		const addressCjKs5cn = accounts[1]
		const addressaYGgOZx = await afiController1BTjPK.withdraw.call(addressi8TW1bI, uintvdho5S, {from: accounts[1]});
		const addressirQ8n5f = await afiController1BTjPK.inCaseTokensGetStuck.call(addressCjKs5cn, uintvR1OhRo, {from: accounts[0]});

		await expect(afiController1BTjPK.withdraw.call(addressi8TW1bI, uintvdho5S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspXcTUF = "0x0000000000000000000000000000000000000001"
		const afiControllermOVd9VL = await afiController.new(addresspXcTUF, {from: accounts[4]});
		const addressVpBsWq = accounts[3]
		const addressxPhOr3 = accounts[3]
		const uintxL1bZko = BigInt("816")
		const uintV0C6Di7 = BigInt("304")
		const addresscQKl1za = await afiControllermOVd9VL.inCaseStrategyTokenGetStuck.call(addressxPhOr3, addressVpBsWq, {from: accounts[0]});
		const uintTFt15xH = await afiControllermOVd9VL.setSplit.call(uintxL1bZko, {from: accounts[4]});
		const uintalP3MHe = await afiControllermOVd9VL.setSplit.call(uintV0C6Di7, {from: accounts[3]});

		await expect(afiControllermOVd9VL.inCaseStrategyTokenGetStuck.call(addressxPhOr3, addressVpBsWq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXYb4mzC = accounts[0]
		const afiControllerhDJq5j0 = await afiController.new(addressXYb4mzC, {from: accounts[2]});
		const addressXw7mvs = accounts[1]
		const addressm3OU5rS = accounts[3]
		const addressMl3Os62 = accounts[4]
		const addresscuZd9P = accounts[5]
		const addressFrhD7c = "0x0000000000000000000000000000000000000001"
		const addressikJVmw = accounts[0]
		const addressxiWvJ3 = accounts[2]
		const addressnYSkndH = await afiControllerhDJq5j0.withdrawAll.call(addressXw7mvs, {from: accounts[5]});
		const addressLT6phWa = await afiControllerhDJq5j0.approveStrategy.call(addressMl3Os62, addressm3OU5rS, {from: accounts[4]});
		const addressA1dlikz = await afiControllerhDJq5j0.setVault.call(addressFrhD7c, addresscuZd9P, {from: accounts[2]});
		const addressXCl4p7K = await afiControllerhDJq5j0.approveStrategy.call(addressxiWvJ3, addressikJVmw, {from: accounts[0]});

		await expect(afiControllerhDJq5j0.withdrawAll.call(addressXw7mvs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressS4o8Ly = accounts[0]
		const afiControllerBkjvqz = await afiController.new(addressS4o8Ly, {from: accounts[3]});
		const uintsZ6Prkl = BigInt("527")
		const addressxpBYYzL = accounts[1]
		const addresshHKGDtZ = "0x0000000000000000000000000000000000000001"
		const uintuzmEMPH = BigInt("1594")
		const addressWxBl8QX = accounts[3]
		const addressJNRaK82 = accounts[4]
		const uintNbuU3yW = BigInt("282")
		const uintCcLjcSM = BigInt("734")
		const address6utAhD = accounts[1]
		const uintKt830G7 = await afiControllerBkjvqz.getExpectedReturn.call(addresshHKGDtZ, addressxpBYYzL, uintsZ6Prkl, {from: "0x0000000000000000000000000000000000000001"});
		const uinthc9fbv5 = await afiControllerBkjvqz.getExpectedReturn.call(addressJNRaK82, addressWxBl8QX, uintuzmEMPH, {from: accounts[1]});
		const uintJhFNRav = await afiControllerBkjvqz.setSplit.call(uintNbuU3yW, {from: "0x0000000000000000000000000000000000000001"});
		const uinttyZBki7 = await afiControllerBkjvqz.setSplit.call(uintCcLjcSM, {from: accounts[0]});
		const addressNAq6JiW = await afiControllerBkjvqz.withdrawAll.call(address6utAhD, {from: accounts[0]});

		await expect(afiControllerBkjvqz.getExpectedReturn.call(addresshHKGDtZ, addressxpBYYzL, uintsZ6Prkl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgiBOgx = accounts[3]
		const afiControllertMct4Y0 = await afiController.new(addressgiBOgx, {from: accounts[0]});
		const addressfSjRYzP = accounts[2]
		const uintFG0KTEw = BigInt("1965")
		const addresszn66h6s = accounts[3]
		const addressNfMYcSu = accounts[1]
		const addresseYtM4pt = accounts[4]
		const addressgJ5q2Uo = await afiControllertMct4Y0.setGovernance.call(addressfSjRYzP, {from: accounts[3]});
		const uintKDBahZu = await afiControllertMct4Y0.setSplit.call(uintFG0KTEw, {from: "0x0000000000000000000000000000000000000001"});
		const addressuzWzJyW = await afiControllertMct4Y0.setGovernance.call(addresszn66h6s, {from: accounts[4]});
		const addressxbnnpQp = await afiControllertMct4Y0.setStrategist.call(addressNfMYcSu, {from: accounts[3]});
		const addressaDYIqYE = await afiControllertMct4Y0.setStrategist.call(addresseYtM4pt, {from: accounts[4]});

		await expect(afiControllertMct4Y0.setGovernance.call(addressfSjRYzP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseWXYksz = accounts[1]
		const afiControllerL0acxZa = await afiController.new(addresseWXYksz, {from: accounts[2]});
		const uintzFqNIFX = BigInt("1321")
		const uintuOYfdJ = BigInt("978")
		const addressSWTteqN = accounts[1]
		const addressOohstdU = accounts[4]
		const uintrITLBYw = BigInt("216")
		const addressj8iJO1w = accounts[5]
		const addressu5ySSx5 = accounts[3]
		const uintASqRUt = BigInt("1082")
		const addresscHJ4Njs = accounts[4]
		const addresseg3tB6J = "0x0000000000000000000000000000000000000001"
		const uint30QiPs = BigInt("1085")
		const addressNLMgflg = accounts[2]
		const uintYHv1Aw = await afiControllerL0acxZa.setSplit.call(uintzFqNIFX, {from: accounts[1]});
		const uintJrc3xRw = await afiControllerL0acxZa.getExpectedReturn.call(addressOohstdU, addressSWTteqN, uintuOYfdJ, {from: accounts[0]});
		const addressCSHo5RM = await afiControllerL0acxZa.yearn.call(addressu5ySSx5, addressj8iJO1w, uintrITLBYw, {from: accounts[4]});
		const uintdfBghu2 = await afiControllerL0acxZa.getExpectedReturn.call(addresseg3tB6J, addresscHJ4Njs, uintASqRUt, {from: accounts[2]});
		const addressBFm84VC = await afiControllerL0acxZa.earn.call(addressNLMgflg, uint30QiPs, {from: accounts[5]});

		await expect(afiControllerL0acxZa.setSplit.call(uintzFqNIFX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnlvbmGe = accounts[1]
		const afiControllerHKCHJt3 = await afiController.new(addressnlvbmGe, {from: accounts[3]});
		const addressQAqwLwo = "0x0000000000000000000000000000000000000001"
		const addressC2ZPGjq = "0x0000000000000000000000000000000000000001"
		const addressv0WWDiD = accounts[1]
		const uintlcbALfr = BigInt("463")
		const addressgNfhNue = accounts[2]
		const addressCtzyFIj = accounts[4]
		const uintSlI4bZm = BigInt("1261")
		const addressJGa52Q = accounts[3]
		const uintVx1CYBd = await afiControllerHKCHJt3.balanceOf.call(addressQAqwLwo, {from: accounts[0]});
		const addresseKb6w7j = await afiControllerHKCHJt3.setStrategy.call(addressv0WWDiD, addressC2ZPGjq, {from: accounts[2]});
		const addressOJh6W27 = await afiControllerHKCHJt3.inCaseTokensGetStuck.call(addressgNfhNue, uintlcbALfr, {from: accounts[3]});
		const addressaXreLUc = await afiControllerHKCHJt3.setRewards.call(addressCtzyFIj, {from: accounts[1]});
		const addressE6FguCf = await afiControllerHKCHJt3.earn.call(addressJGa52Q, uintSlI4bZm, {from: accounts[4]});

		await expect(afiControllerHKCHJt3.balanceOf.call(addressQAqwLwo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgWuEyn = accounts[2]
		const afiController1BTjPK = await afiController.new(addressgWuEyn, {from: accounts[0]});
		const uintQKhVk0B = BigInt("1066")
		const addressshy4AuN = accounts[1]
		const addressirQ8n5f = await afiController1BTjPK.inCaseTokensGetStuck.call(addressshy4AuN, uintQKhVk0B, {from: accounts[0]});

		await expect(afiController1BTjPK.inCaseTokensGetStuck.call(addressshy4AuN, uintQKhVk0B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZDFBMm1 = accounts[1]
		const afiControllerSbAKpxO = await afiController.new(addressZDFBMm1, {from: accounts[4]});
		const addressPYMnCi = accounts[4]
		const addressO5g6i9X = accounts[3]
		const addressGhpzp4y = accounts[0]
		const addressAlfXPZK = accounts[2]
		const addressuPFhBFZ = accounts[5]
		const addressGOfVbOQ = accounts[0]
		const addressBsVeZC2 = accounts[1]
		const uintX8V8zo5 = BigInt("1099")
		const addressIODoiDV = accounts[0]
		const addressKalEkZp = accounts[3]
		const addressof2IKyC = await afiControllerSbAKpxO.revokeStrategy.call(addressO5g6i9X, addressPYMnCi, {from: accounts[1]});
		const addresseICvwNV = await afiControllerSbAKpxO.revokeStrategy.call(addressAlfXPZK, addressGhpzp4y, {from: accounts[0]});
		const addressZvVelt6 = await afiControllerSbAKpxO.setConverter.call(addressBsVeZC2, addressGOfVbOQ, addressuPFhBFZ, {from: accounts[3]});
		const uintfg06f7e = await afiControllerSbAKpxO.getExpectedReturn.call(addressKalEkZp, addressIODoiDV, uintX8V8zo5, {from: accounts[0]});

		await expect(afiControllerSbAKpxO.revokeStrategy.call(addressO5g6i9X, addressPYMnCi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQnxf2r = accounts[2]
		const afiController1BTjPK = await afiController.new(addressQnxf2r, {from: accounts[0]});
		const uintuu0ahVm = BigInt("1388")
		const addressMwK5jkw = accounts[0]
		const uintuAvDfou = BigInt("1439")
		const addresshOLZi7Q = accounts[0]
		const addressvEjdr8D = accounts[3]
		const uintbyDsQY8 = BigInt("1066")
		const addressehlKmY = accounts[2]
		const addressJAaQyKU = await afiController1BTjPK.earn.call(addressMwK5jkw, uintuu0ahVm, {from: accounts[1]});
		const addressaYGgOZx = await afiController1BTjPK.withdraw.call(addresshOLZi7Q, uintuAvDfou, {from: accounts[1]});
		const addressyMQ0SgO = await afiController1BTjPK.withdrawAll.call(addressvEjdr8D, {from: accounts[4]});
		const addressirQ8n5f = await afiController1BTjPK.inCaseTokensGetStuck.call(addressehlKmY, uintbyDsQY8, {from: accounts[0]});

		await expect(afiController1BTjPK.earn.call(addressMwK5jkw, uintuu0ahVm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPoM5Ygc = accounts[5]
		const afiControllerBSzc48v = await afiController.new(addressPoM5Ygc, {from: accounts[0]});
		const addressawlgrsJ = accounts[0]
		const addressbaHbA4U = accounts[4]
		const addressMKZTXZm = accounts[5]
		const uintcxSiNxS = BigInt("1602")
		const addressU0oa4M9 = accounts[1]
		const addresstDtw7Un = accounts[5]
		const addresstAxMfrB = accounts[2]
		const addressI98x5vr = accounts[0]
		const addressD3VJIhe = accounts[2]
		const addressN1HdzFJ = await afiControllerBSzc48v.approveStrategy.call(addressbaHbA4U, addressawlgrsJ, {from: accounts[0]});
		const addressR28BNz = await afiControllerBSzc48v.setOneSplit.call(addressMKZTXZm, {from: accounts[2]});
		const uintjOtLFqu = await afiControllerBSzc48v.getExpectedReturn.call(addresstDtw7Un, addressU0oa4M9, uintcxSiNxS, {from: "0x0000000000000000000000000000000000000001"});
		const addressUOcSVNj = await afiControllerBSzc48v.setConverter.call(addressD3VJIhe, addressI98x5vr, addresstAxMfrB, {from: accounts[2]});

		await expect(afiControllerBSzc48v.setOneSplit.call(addressMKZTXZm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressayUJaez = accounts[0]
		const afiControllerH2rgKFv = await afiController.new(addressayUJaez, {from: "0x0000000000000000000000000000000000000001"});
		const addressBsQe9D2 = accounts[2]
		const addressOhAe5bX = "0x0000000000000000000000000000000000000001"
		const uintUeGqZH8 = BigInt("833")
		const addressOBIZRCW = accounts[2]
		const addressYhwLvNo = accounts[4]
		const addressHuQ9oM9 = accounts[2]
		const uints54GE80 = BigInt("7")
		const addressi5L4Lyq = accounts[3]
		const addressE2UZ03N = "0x0000000000000000000000000000000000000001"
		const addressWvhTudD = await afiControllerH2rgKFv.revokeStrategy.call(addressOhAe5bX, addressBsQe9D2, {from: accounts[3]});
		const uintzBmMwUg = await afiControllerH2rgKFv.setSplit.call(uintUeGqZH8, {from: accounts[1]});
		const addresss7pkePY = await afiControllerH2rgKFv.setOneSplit.call(addressOBIZRCW, {from: "0x0000000000000000000000000000000000000001"});
		const addressvN7GClL = await afiControllerH2rgKFv.setStrategist.call(addressYhwLvNo, {from: accounts[0]});
		const addressxXhtlF4 = await afiControllerH2rgKFv.setRewards.call(addressHuQ9oM9, {from: accounts[1]});
		const uint6OdE9b = await afiControllerH2rgKFv.getExpectedReturn.call(addressE2UZ03N, addressi5L4Lyq, uints54GE80, {from: accounts[4]});
	});

	it('test for afiController', async () => {
		const addressMGvbjX9 = accounts[2]
		const afiController1BTjPK = await afiController.new(addressMGvbjX9, {from: accounts[0]});
		const uintXbY2D4I = BigInt("236")
		const addressGz0tY6J = accounts[2]
		const addressTHdFe23 = accounts[4]
		const uintXgIMZzk = BigInt("1388")
		const addressHDOGIea = accounts[0]
		const uintzetozfu = BigInt("1439")
		const addressnmuUR8d = accounts[0]
		const addressE67nokg = accounts[3]
		const addressNcTlHtR = accounts[0]
		const uintYDyQJjV = BigInt("1814")
		const addressOBDJwjU = accounts[0]
		const addressnNtouAX = accounts[3]
		const uintI1XtObg = BigInt("1357")
		const addressoe2eYry = accounts[3]
		const uintmXfbv6B = BigInt("544")
		const addressn43MoPy = accounts[1]
		const addressKGd7aoA = accounts[0]
		const addressc4bWdh4 = await afiController1BTjPK.yearn.call(addressTHdFe23, addressGz0tY6J, uintXbY2D4I, {from: accounts[2]});
		const addressJAaQyKU = await afiController1BTjPK.earn.call(addressHDOGIea, uintXgIMZzk, {from: accounts[1]});
		const addressaYGgOZx = await afiController1BTjPK.withdraw.call(addressnmuUR8d, uintzetozfu, {from: accounts[1]});
		const addressyMQ0SgO = await afiController1BTjPK.withdrawAll.call(addressE67nokg, {from: accounts[4]});
		const addressfwJiAuc = await afiController1BTjPK.setStrategist.call(addressNcTlHtR, {from: accounts[4]});
		const addressItakSGu = await afiController1BTjPK.yearn.call(addressnNtouAX, addressOBDJwjU, uintYDyQJjV, {from: accounts[4]});
		const addressqKwqOoc = await afiController1BTjPK.inCaseTokensGetStuck.call(addressoe2eYry, uintI1XtObg, {from: accounts[1]});
		const uintzuUVSys = await afiController1BTjPK.getExpectedReturn.call(addressKGd7aoA, addressn43MoPy, uintmXfbv6B, {from: accounts[4]});

		await expect(afiController1BTjPK.yearn.call(addressTHdFe23, addressGz0tY6J, uintXbY2D4I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHfxlbG = accounts[2]
		const afiController1BTjPK = await afiController.new(addressHfxlbG, {from: accounts[0]});
		const addressFx1LZ9y = accounts[2]
		const addressryFADu = accounts[4]
		const addressCga0vd9 = accounts[2]
		const addressQ9WLMNz = accounts[2]
		const uintTt45Gqt = BigInt("1066")
		const addressDizEekW = accounts[3]
		const addresszV58Cl5 = await afiController1BTjPK.setVault.call(addressryFADu, addressFx1LZ9y, {from: accounts[0]});
		const addressiF8hqmZ = await afiController1BTjPK.revokeStrategy.call(addressQ9WLMNz, addressCga0vd9, {from: "0x0000000000000000000000000000000000000001"});
		const addressirQ8n5f = await afiController1BTjPK.inCaseTokensGetStuck.call(addressDizEekW, uintTt45Gqt, {from: accounts[0]});

		await expect(afiController1BTjPK.revokeStrategy.call(addressQ9WLMNz, addressCga0vd9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdGcaxuD = accounts[2]
		const afiController1BTjPK = await afiController.new(addressdGcaxuD, {from: accounts[0]});
		const addressTapU6Bo = accounts[0]
		const uintuBslxi0 = BigInt("1369")
		const addresstEA4j3H = accounts[2]
		const uint3LjEzI = BigInt("1459")
		const address5cgO0m = accounts[0]
		const addressNtPwzXo = accounts[3]
		const addressiDG5TlZ = await afiController1BTjPK.setRewards.call(addressTapU6Bo, {from: accounts[1]});
		const addressJAaQyKU = await afiController1BTjPK.earn.call(addresstEA4j3H, uintuBslxi0, {from: accounts[1]});
		const addressaYGgOZx = await afiController1BTjPK.withdraw.call(address5cgO0m, uint3LjEzI, {from: accounts[1]});
		const addressyMQ0SgO = await afiController1BTjPK.withdrawAll.call(addressNtPwzXo, {from: accounts[4]});

		await expect(afiController1BTjPK.setRewards.call(addressTapU6Bo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressyYXpAJi = accounts[0]
		const afiControllerMFNY4xG = await afiController.new(addressyYXpAJi, {from: accounts[1]});
		const addressz8pEPkZ = accounts[1]
		const address9wWIKO = accounts[3]
		const uintcvW6oq9 = BigInt("217")
		const addressJBPYONn = accounts[0]
		const addressQbUJEou = accounts[3]
		const addressmjF79IM = accounts[4]
		const addressYtOrOt = accounts[3]
		const addressm5nfZhv = accounts[3]
		const addressDwn4VDK = accounts[3]
		const addresseO0sMsw = await afiControllerMFNY4xG.setStrategist.call(addressz8pEPkZ, {from: accounts[0]});
		const uintowL659Z = await afiControllerMFNY4xG.balanceOf.call(address9wWIKO, {from: accounts[3]});
		const uintnikHPZj = await afiControllerMFNY4xG.setSplit.call(uintcvW6oq9, {from: accounts[3]});
		const address3gd1lc = await afiControllerMFNY4xG.setStrategy.call(addressQbUJEou, addressJBPYONn, {from: accounts[1]});
		const addressvLWaAsB = await afiControllerMFNY4xG.revokeStrategy.call(addressYtOrOt, addressmjF79IM, {from: accounts[4]});
		const addressThzeQKl = await afiControllerMFNY4xG.setStrategy.call(addressDwn4VDK, addressm5nfZhv, {from: accounts[3]});

		await expect(afiControllerMFNY4xG.setStrategist.call(addressz8pEPkZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEerkAvK = accounts[2]
		const afiController1BTjPK = await afiController.new(addressEerkAvK, {from: accounts[0]});
		const addressPKuLicU = accounts[0]
		const addresseoRZXy2 = accounts[4]
		const addressHefvqLv = accounts[3]
		const uintPDgOjTQ = BigInt("1092")
		const addressZXt4YeQ = accounts[1]
		const addressqGAd4OS = await afiController1BTjPK.setConverter.call(addressHefvqLv, addresseoRZXy2, addressPKuLicU, {from: accounts[1]});
		const addressirQ8n5f = await afiController1BTjPK.inCaseTokensGetStuck.call(addressZXt4YeQ, uintPDgOjTQ, {from: accounts[0]});

		await expect(afiController1BTjPK.setConverter.call(addressHefvqLv, addresseoRZXy2, addressPKuLicU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLU9rE9w = accounts[2]
		const afiController1BTjPK = await afiController.new(addressLU9rE9w, {from: accounts[0]});
		const addressgMJPqFD = accounts[5]
		const addressjrHRoEj = accounts[3]
		const uintdSn0W7Y = BigInt("391")
		const addressGT3Z33W = accounts[2]
		const addresszXDoRFn = await afiController1BTjPK.setStrategy.call(addressjrHRoEj, addressgMJPqFD, {from: accounts[0]});
		const addressirQ8n5f = await afiController1BTjPK.inCaseTokensGetStuck.call(addressGT3Z33W, uintdSn0W7Y, {from: accounts[0]});

		await expect(afiController1BTjPK.setStrategy.call(addressjrHRoEj, addressgMJPqFD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})