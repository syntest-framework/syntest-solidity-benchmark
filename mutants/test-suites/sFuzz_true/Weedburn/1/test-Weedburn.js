const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnZimErca = await Weedburn.new({from: accounts[5]});
		const uintaBdeN81 = BigInt("1125")
		const addressPi3O4NP = accounts[5]
		const uintJOdeG7O = BigInt("1092")
		const addresskPCLhYw = accounts[5]
		const boolMIWZnEY = await WeedburnZimErca.approve.call(addressPi3O4NP, uintaBdeN81, {from: accounts[3]});
//		const addressVLir5GL = await WeedburnZimErca.burnFrom.call(addresskPCLhYw, uintJOdeG7O, {from: accounts[5]});
//		await WeedburnZimErca.disableLimitMode.call({from: accounts[2]});
//		await WeedburnZimErca.enableLimitMode.call({from: accounts[5]});
//		const uint8DNSuCb9 = await WeedburnZimErca.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMIWZnEY, true)
		await expect(WeedburnZimErca.burnFrom.call(addresskPCLhYw, uintJOdeG7O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringVUBCLid = "6pCA1ZPLtMKREuK"
		const stringAs4zx1m = "R3LRb7QsrxMOTClVuJLgmtmqEgQAwYJYB1LsWxbpBBqkLdrVF3NrtrA1q2GjD3ye0sCJqXyxhtGwDwAw7ch74RELCo6dVCHUO"
		const uintvJBgQSB = BigInt("239")
		const WeedburnkO8CobF = await Weedburn.new(stringVUBCLid, stringAs4zx1m, uintvJBgQSB, {from: accounts[3]});
		const uintm9ndsHh = BigInt("814")
		const addressYIcEn1B = accounts[4]
		const addressj8ObEoc = accounts[1]
		const uintSPEY4s9 = BigInt("359")
		const addressh4youa = accounts[3]
		const uint256J8glopf = await WeedburnkO8CobF.totalSupply.call({from: accounts[4]});
		await WeedburnkO8CobF.enableLimitMode.call({from: accounts[1]});
		const booloyillJG = await WeedburnkO8CobF.transferFrom.call(addressj8ObEoc, addressYIcEn1B, uintm9ndsHh, {from: accounts[3]});
		const booloP69bDz = await WeedburnkO8CobF.increaseAllowance.call(addressh4youa, uintSPEY4s9, {from: accounts[0]});
		await WeedburnkO8CobF.disableLimitMode.call({from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburneOc9Igk = await Weedburn.new({from: accounts[0]});
		const uintvF476p = BigInt("2015")
		const addressa5u731U = accounts[1]
		const uintMmspWVx = BigInt("607")
		const addressu8mAVPs = accounts[3]
		const uint256LXdMExc = await WeedburneOc9Igk.totalSupply.call({from: accounts[2]});
//		await WeedburneOc9Igk.enableDevMode.call({from: accounts[3]});
//		const addressAKe3kSu = await WeedburneOc9Igk.burnFrom.call(addressa5u731U, uintvF476p, {from: accounts[4]});
//		const uint87Pvt8h = await WeedburneOc9Igk.decimals.call({from: accounts[0]});
//		const addressgIZnqAu = await WeedburneOc9Igk.burnFrom.call(addressu8mAVPs, uintMmspWVx, {from: accounts[4]});

		assert.equal(uint256LXdMExc, BigInt("100000000000000000000000"))
		await expect(WeedburneOc9Igk.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburna7aq258 = await Weedburn.new({from: accounts[0]});
		const uintSDxycNw = BigInt("61")
		const addresszLNijQ0 = accounts[4]
		const uintVMfRM7h = BigInt("134")
		const addresslSJliN8 = accounts[3]
		const addresspzzvaei = accounts[2]
		const uintHShnlZG = BigInt("2038")
		const addressQ6Nf3zi = accounts[4]
		const addressh4MrtyS = accounts[3]
		const addressSgcsoHS = accounts[3]
		const uintHbkvrm0 = BigInt("1983")
		const addressnARpomK = accounts[2]
//		const boolsBUkgIJ = await Weedburna7aq258.transfer.call(addresszLNijQ0, uintSDxycNw, {from: accounts[4]});
//		const boolueH6R5c = await Weedburna7aq258.transferFrom.call(addresspzzvaei, addresslSJliN8, uintVMfRM7h, {from: accounts[3]});
//		const uint256yKHrtFn = await Weedburna7aq258.burn.call(uintHShnlZG, {from: accounts[5]});
//		const uint256bQ3KKp = await Weedburna7aq258.balanceOf.call(addressQ6Nf3zi, {from: accounts[0]});
//		const uint256JCHOo6f = await Weedburna7aq258.allowance.call(addressSgcsoHS, addressh4MrtyS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDpbWTlr = await Weedburna7aq258.decreaseAllowance.call(addressnARpomK, uintHbkvrm0, {from: accounts[4]});

		await expect(Weedburna7aq258.transfer.call(addresszLNijQ0, uintSDxycNw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnkx4OMSP = await Weedburn.new({from: accounts[2]});
		const uintBuuUi3Y = BigInt("1281")
		const addresst40t4nd = accounts[4]
//		const boolfgzstcf = await Weedburnkx4OMSP.decreaseAllowance.call(addresst40t4nd, uintBuuUi3Y, {from: accounts[3]});
//		const stringNsB0mKl = await Weedburnkx4OMSP.symbol.call({from: accounts[0]});
//		await Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]});

		await expect(Weedburnkx4OMSP.decreaseAllowance.call(addresst40t4nd, uintBuuUi3Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYDTbFW3 = await Weedburn.new({from: accounts[4]});
		const addressMQfOhF7 = accounts[5]
		const uintVoQy1y = BigInt("789")
		const addressF7miTDz = accounts[3]
		const uintaiY2Rk9 = BigInt("2005")
		const addresshXKWVa = accounts[5]
		const uint256P8BJ1Co = await WeedburnYDTbFW3.balanceOf.call(addressMQfOhF7, {from: "0x0000000000000000000000000000000000000001"});
//		await WeedburnYDTbFW3.enableDevMode.call({from: accounts[0]});
//		const boolvz4XkeF = await WeedburnYDTbFW3.transfer.call(addressF7miTDz, uintVoQy1y, {from: accounts[0]});
//		const boolzllQeV = await WeedburnYDTbFW3.decreaseAllowance.call(addresshXKWVa, uintaiY2Rk9, {from: accounts[3]});

		assert.equal(uint256P8BJ1Co, BigInt("0"))
		await expect(WeedburnYDTbFW3.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZimErca = await Weedburn.new({from: accounts[5]});
		const uintXokYjj = BigInt("175")
		const addressG3dMq19 = accounts[1]
		const addresswfiJqop = accounts[0]
		const uintKKUZ21e = BigInt("1125")
		const addressVMY4N3 = accounts[5]
//		const booldNNl5CU = await WeedburnZimErca.transferFrom.call(addresswfiJqop, addressG3dMq19, uintXokYjj, {from: accounts[2]});
//		const boolMIWZnEY = await WeedburnZimErca.approve.call(addressVMY4N3, uintKKUZ21e, {from: accounts[3]});
//		await WeedburnZimErca.disableLimitMode.call({from: accounts[2]});
//		const stringZIkzNUk = await WeedburnZimErca.symbol.call({from: accounts[3]});
//		await WeedburnZimErca.enableLimitMode.call({from: accounts[5]});
//		const uint8DNSuCb9 = await WeedburnZimErca.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnZimErca.transferFrom.call(addresswfiJqop, addressG3dMq19, uintXokYjj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnkx4OMSP = await Weedburn.new({from: accounts[2]});
		const uinthVaof1Y = BigInt("1281")
		const addressKFARvyw = accounts[4]
//		await Weedburnkx4OMSP.enableLimitMode.call({from: accounts[3]});
//		const boolfgzstcf = await Weedburnkx4OMSP.decreaseAllowance.call(addressKFARvyw, uinthVaof1Y, {from: accounts[3]});
//		const stringNsB0mKl = await Weedburnkx4OMSP.symbol.call({from: accounts[0]});
//		await Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]});

		await expect(Weedburnkx4OMSP.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburna7aq258 = await Weedburn.new({from: accounts[0]});
		const uintki4kstC = BigInt("184")
		const uintaA4KFrx = BigInt("134")
		const addressRf5jZtX = accounts[3]
		const addressCSdJwuu = accounts[2]
		const uintDnOnsmR = BigInt("2038")
		const addressBYrjPHd = accounts[5]
		const uintlZL5pEd = BigInt("1983")
		const addressLf7uHYd = accounts[2]
//		const uint256kx8pntr = await Weedburna7aq258.burn.call(uintki4kstC, {from: accounts[2]});
//		const boolueH6R5c = await Weedburna7aq258.transferFrom.call(addressCSdJwuu, addressRf5jZtX, uintaA4KFrx, {from: accounts[3]});
//		const uint256yKHrtFn = await Weedburna7aq258.burn.call(uintDnOnsmR, {from: accounts[5]});
//		const uint256bQ3KKp = await Weedburna7aq258.balanceOf.call(addressBYrjPHd, {from: accounts[0]});
//		const boolDpbWTlr = await Weedburna7aq258.decreaseAllowance.call(addressLf7uHYd, uintlZL5pEd, {from: accounts[4]});

		await expect(Weedburna7aq258.burn.call(uintki4kstC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJyv5YlA = await Weedburn.new({from: accounts[5]});
		const uintLOgMw1 = BigInt("1718")
		const addressN8epLlC = accounts[4]
		const uintlrlil46 = BigInt("1117")
		const addressKal3Iw = accounts[1]
		const uintkViTHdN = BigInt("214")
		const uintmtR8XY = BigInt("156")
		const addressdY1vAZX = accounts[0]
		const boolPjKPU4i = await WeedburnJyv5YlA.increaseAllowance.call(addressN8epLlC, uintLOgMw1, {from: accounts[3]});
//		await WeedburnJyv5YlA.disableLimitMode.call({from: accounts[2]});
//		const boolxiHubAZ = await WeedburnJyv5YlA.decreaseAllowance.call(addressKal3Iw, uintlrlil46, {from: accounts[4]});
//		const uint256PALdQ4v = await WeedburnJyv5YlA.burn.call(uintkViTHdN, {from: accounts[2]});
//		const boolfNhItbd = await WeedburnJyv5YlA.decreaseAllowance.call(addressdY1vAZX, uintmtR8XY, {from: accounts[1]});
//		const stringBm98Rht = await WeedburnJyv5YlA.symbol.call({from: accounts[0]});

		assert.equal(boolPjKPU4i, true)
		await expect(WeedburnJyv5YlA.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnkx4OMSP = await Weedburn.new({from: accounts[2]});
		const uintrv2P9Qx = BigInt("31")
		const addressCwmyo6U = accounts[0]
		const addressMZTjozH = accounts[2]
//		const boolXXscMRH = await Weedburnkx4OMSP.transferFrom.call(addressMZTjozH, addressCwmyo6U, uintrv2P9Qx, {from: accounts[0]});
//		await Weedburnkx4OMSP.disableLimitMode.call({from: accounts[2]});
//		await Weedburnkx4OMSP.disableLimitMode.call({from: accounts[1]});
//		await Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]});

		await expect(Weedburnkx4OMSP.transferFrom.call(addressMZTjozH, addressCwmyo6U, uintrv2P9Qx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZimErca = await Weedburn.new({from: accounts[5]});
		const addressqEHtpRk = accounts[1]
		const addressBaxllsG = accounts[3]
		const uintwYtHXFE = BigInt("1107")
		const addressWzxJJ44 = accounts[5]
		const uint256wa9VHtW = await WeedburnZimErca.allowance.call(addressBaxllsG, addressqEHtpRk, {from: accounts[4]});
//		const addressVLir5GL = await WeedburnZimErca.burnFrom.call(addressWzxJJ44, uintwYtHXFE, {from: accounts[5]});

		assert.equal(uint256wa9VHtW, BigInt("0"))
		await expect(WeedburnZimErca.burnFrom.call(addressWzxJJ44, uintwYtHXFE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnkx4OMSP = await Weedburn.new({from: accounts[2]});
		const uintgQGkmFQ = BigInt("804")
		const addressBq60js5 = accounts[0]
//		await Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]});
//		const uint8nrpQXFn = await Weedburnkx4OMSP.decimals.call({from: accounts[0]});
//		const boolk5moAhf = await Weedburnkx4OMSP.decreaseAllowance.call(addressBq60js5, uintgQGkmFQ, {from: accounts[0]});

		await expect(Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburna7aq258 = await Weedburn.new({from: accounts[0]});
		const uintdgs3hZ = BigInt("184")
		const uinthnOhZlq = BigInt("838")
		const addressH8rM1eu = accounts[3]
		const addresso61r35v = accounts[2]
//		await Weedburna7aq258.disableDevMode.call({from: accounts[3]});
//		await Weedburna7aq258.disableDevMode.call({from: accounts[0]});
//		const uint256kx8pntr = await Weedburna7aq258.burn.call(uintdgs3hZ, {from: accounts[2]});
//		const uint8MYCegJl = await Weedburna7aq258.decimals.call({from: accounts[0]});
//		const boolueH6R5c = await Weedburna7aq258.transferFrom.call(addresso61r35v, addressH8rM1eu, uinthnOhZlq, {from: accounts[3]});
//		const stringnf05Qsn = await Weedburna7aq258.name.call({from: accounts[1]});

		await expect(Weedburna7aq258.disableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnkx4OMSP = await Weedburn.new({from: accounts[2]});
		const stringFWHDiE = await Weedburnkx4OMSP.symbol.call({from: accounts[1]});
//		await Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]});

		assert.equal(stringFWHDiE, "Weedburn")
		await expect(Weedburnkx4OMSP.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburna7aq258 = await Weedburn.new({from: accounts[0]});
		const uinthkPq0l = BigInt("1659")
		const addressl8JA7vi = accounts[0]
		const uintVOrZl0c = BigInt("50")
		const addressiNvlXNT = accounts[4]
		const uintV26W1hv = BigInt("1983")
		const addressftvFS8t = accounts[2]
		const boolS67GWOy = await Weedburna7aq258.transfer.call(addressl8JA7vi, uinthkPq0l, {from: accounts[0]});
//		await Weedburna7aq258.enableDevMode.call({from: accounts[1]});
//		const boolsBUkgIJ = await Weedburna7aq258.transfer.call(addressiNvlXNT, uintVOrZl0c, {from: accounts[4]});
//		await Weedburna7aq258.disableLimitMode.call({from: accounts[4]});
//		const boolDpbWTlr = await Weedburna7aq258.decreaseAllowance.call(addressftvFS8t, uintV26W1hv, {from: accounts[4]});

		assert.equal(boolS67GWOy, true)
		await expect(Weedburna7aq258.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburna7aq258 = await Weedburn.new({from: accounts[0]});
		const uintIk5NIED = BigInt("1795")
		const uintLYra2Mr = BigInt("202")
		const uintBS6KQaX = BigInt("1745")
		const uint256lfor1MQ = await Weedburna7aq258.burn.call(uintIk5NIED, {from: accounts[0]});
//		const uint256kx8pntr = await Weedburna7aq258.burn.call(uintLYra2Mr, {from: accounts[2]});
//		const uint256KfXshhp = await Weedburna7aq258.burn.call(uintBS6KQaX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Weedburna7aq258.burn.call(uintLYra2Mr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRrEzlaW = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQ375K9S = BigInt("871")
		const addresswr7i8A = accounts[2]
		const addresse6Ex4No = "0x0000000000000000000000000000000000000001"
		await WeedburnRrEzlaW.disableLimitMode.call({from: accounts[0]});
		await WeedburnRrEzlaW.enableDevMode.call({from: accounts[2]});
		const stringOxeClyE = await WeedburnRrEzlaW.symbol.call({from: accounts[4]});
		const booldH1L0Lh = await WeedburnRrEzlaW.transferFrom.call(addresse6Ex4No, addresswr7i8A, uintQ375K9S, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnZimErca = await Weedburn.new({from: accounts[5]});
		const uintayIkvvN = BigInt("1092")
		const addressHNO8KCY = accounts[6]
		const stringH9O6Sjr = await WeedburnZimErca.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressVLir5GL = await WeedburnZimErca.burnFrom.call(addressHNO8KCY, uintayIkvvN, {from: accounts[5]});

		assert.equal(stringH9O6Sjr, "t.me/burnweed1")
		await expect(WeedburnZimErca.burnFrom.call(addressHNO8KCY, uintayIkvvN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})