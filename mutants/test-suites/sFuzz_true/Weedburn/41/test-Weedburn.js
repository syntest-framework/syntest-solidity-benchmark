const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const Weedburnanug4Nn = await Weedburn.new({from: accounts[0]});
		const stringDqHUF1A = await Weedburnanug4Nn.symbol.call({from: accounts[3]});
		const uint8DNurhVa = await Weedburnanug4Nn.decimals.call({from: accounts[1]});
//		await Weedburnanug4Nn.enableDevMode.call({from: accounts[5]});

		assert.equal(stringDqHUF1A, "Weedburn")
		assert.equal(uint8DNurhVa, BigInt("18"))
		await expect(Weedburnanug4Nn.enableDevMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQcv954P = await Weedburn.new({from: accounts[2]});
		const uintYH3hR7L = BigInt("1850")
		const addressJhpX6cs = accounts[3]
		const addressEOktCG = accounts[0]
		const address8M0VPc = accounts[1]
		const addressfTwviAZ = accounts[5]
		const uintqiC8zWI = BigInt("940")
		const addresseQ4Kim8 = accounts[0]
		const uintIFQr9bl = BigInt("1002")
		const addressRx7JM2r = accounts[1]
		const addressFF8S7b4 = accounts[5]
		const uintofJufk4 = BigInt("475")
		const addresssd272Qb = accounts[1]
//		const boolhC0dhqw = await WeedburnQcv954P.transferFrom.call(addressEOktCG, addressJhpX6cs, uintYH3hR7L, {from: accounts[0]});
//		const uint256CDEkkHZ = await WeedburnQcv954P.allowance.call(addressfTwviAZ, address8M0VPc, {from: accounts[3]});
//		const uint8NETQ1AJ = await WeedburnQcv954P.decimals.call({from: accounts[5]});
//		const booloqUb9Ld = await WeedburnQcv954P.decreaseAllowance.call(addresseQ4Kim8, uintqiC8zWI, {from: accounts[5]});
//		const boolZLnCUs = await WeedburnQcv954P.transferFrom.call(addressFF8S7b4, addressRx7JM2r, uintIFQr9bl, {from: accounts[0]});
//		const address473a6v = await WeedburnQcv954P.burnFrom.call(addresssd272Qb, uintofJufk4, {from: accounts[3]});

		await expect(WeedburnQcv954P.transferFrom.call(addressEOktCG, addressJhpX6cs, uintYH3hR7L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringNLFiDNL = "RrIi75bNuGu451h2Y2v7GKEeId3inad"
		const stringb9cRt1 = "heehm6nrNeAaruMo5"
		const uintE1sEKAi = BigInt("226")
		const WeedburnutSMPU4 = await Weedburn.new(stringNLFiDNL, stringb9cRt1, uintE1sEKAi, {from: accounts[1]});
		const uint3wiXQx = BigInt("1796")
		const addresstmyxbs4 = accounts[3]
		const addresscs0hy1U = accounts[2]
		const addressntSguyE = accounts[2]
		const uintriq6ohw = BigInt("1731")
		const addressXOTkKI = accounts[2]
		const uintc2Z6IAY = BigInt("694")
		const boolCHBLP6z = await WeedburnutSMPU4.transfer.call(addresstmyxbs4, uint3wiXQx, {from: accounts[0]});
		await WeedburnutSMPU4.enableLimitMode.call({from: accounts[3]});
		const uint2562TQle9 = await WeedburnutSMPU4.balanceOf.call(addresscs0hy1U, {from: accounts[1]});
		const uint256Gp1LbPj = await WeedburnutSMPU4.balanceOf.call(addressntSguyE, {from: accounts[3]});
		const addressyh3obQi = await WeedburnutSMPU4.burnFrom.call(addressXOTkKI, uintriq6ohw, {from: accounts[0]});
		const uint256Yy29jn = await WeedburnutSMPU4.burn.call(uintc2Z6IAY, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnGPUKQKu = await Weedburn.new({from: accounts[0]});
		const uintpcb0cGp = BigInt("996")
		const addressHy0eX4V = accounts[0]
		const addressAIPtTY = accounts[3]
		const addressYBWTum = "0x0000000000000000000000000000000000000001"
		const addressxjBK4GD = accounts[4]
		const uintv6TK1of = BigInt("173")
		const addressLybkQaf = accounts[0]
//		const uint256VJprwjr = await WeedburnGPUKQKu.burn.call(uintpcb0cGp, {from: accounts[5]});
//		const uint256wSS9Scp = await WeedburnGPUKQKu.totalSupply.call({from: accounts[2]});
//		const uint256lKIp29N = await WeedburnGPUKQKu.allowance.call(addressAIPtTY, addressHy0eX4V, {from: accounts[0]});
//		const uint256f3xXYy2 = await WeedburnGPUKQKu.totalSupply.call({from: accounts[1]});
//		const uint256yvrBGsA = await WeedburnGPUKQKu.allowance.call(addressxjBK4GD, addressYBWTum, {from: accounts[5]});
//		const boolhrdLe3L = await WeedburnGPUKQKu.approve.call(addressLybkQaf, uintv6TK1of, {from: accounts[2]});

		await expect(WeedburnGPUKQKu.burn.call(uintpcb0cGp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnwm29ycS = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUncu5jv = accounts[2]
		const addressXPXWLHf = accounts[3]
		const uintgBxiVUd = BigInt("957")
		const addressq3bt6wE = accounts[4]
		const addressQjubsjh = "0x0000000000000000000000000000000000000001"
		const uint2563JCcib = await Weedburnwm29ycS.allowance.call(addressXPXWLHf, addressUncu5jv, {from: accounts[1]});
		const boolAGffwOF = await Weedburnwm29ycS.transferFrom.call(addressQjubsjh, addressq3bt6wE, uintgBxiVUd, {from: accounts[3]});
		const uint8VBM57PM = await Weedburnwm29ycS.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await Weedburnwm29ycS.enableDevMode.call({from: accounts[5]});
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uintgzyxdx1 = BigInt("715")
		const addressaTzO16F = accounts[2]
//		const boolvzQLGqm = await Weedburnu538vdC.transfer.call(addressaTzO16F, uintgzyxdx1, {from: accounts[5]});
//		const uint8a22pJaG = await Weedburnu538vdC.decimals.call({from: accounts[4]});

		await expect(Weedburnu538vdC.transfer.call(addressaTzO16F, uintgzyxdx1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uinttRdNM0 = BigInt("715")
		const addressuB4pXI = accounts[2]
		const uint256XDAhzdP = await Weedburnu538vdC.totalSupply.call({from: accounts[0]});
//		const boolvzQLGqm = await Weedburnu538vdC.transfer.call(addressuB4pXI, uinttRdNM0, {from: accounts[5]});
//		const stringJelsLyB = await Weedburnu538vdC.symbol.call({from: accounts[2]});
//		const uint8a22pJaG = await Weedburnu538vdC.decimals.call({from: accounts[4]});

		assert.equal(uint256XDAhzdP, BigInt("100000000000000000000000"))
		await expect(Weedburnu538vdC.transfer.call(addressuB4pXI, uinttRdNM0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnxfv6Llr = await Weedburn.new({from: accounts[4]});
		const uintUidaiU6 = BigInt("750")
		const addressylHhOQ7 = accounts[3]
		const uintkKpi60N = BigInt("962")
		const addressLWHo1Tl = accounts[0]
		const booleJ2uIAg = await Weedburnxfv6Llr.approve.call(addressylHhOQ7, uintUidaiU6, {from: accounts[2]});
		const stringvp22Hro = await Weedburnxfv6Llr.name.call({from: accounts[3]});
		const boolZKrQpC = await Weedburnxfv6Llr.approve.call(addressLWHo1Tl, uintkKpi60N, {from: accounts[0]});

		assert.equal(boolZKrQpC, true)
		assert.equal(booleJ2uIAg, true)
		assert.equal(stringvp22Hro, "t.me/burnweed1")
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const addressNcygaSD = accounts[2]
		const uint256OrFemLJ = await Weedburnu538vdC.balanceOf.call(addressNcygaSD, {from: accounts[2]});
		const uint8a22pJaG = await Weedburnu538vdC.decimals.call({from: accounts[4]});

		assert.equal(uint256OrFemLJ, BigInt("0"))
		assert.equal(uint8a22pJaG, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uintA3RRRJH = BigInt("1971")
		const addressGSpvrDT = accounts[2]
//		await Weedburnu538vdC.disableLimitMode.call({from: accounts[4]});
//		await Weedburnu538vdC.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolvzQLGqm = await Weedburnu538vdC.transfer.call(addressGSpvrDT, uintA3RRRJH, {from: accounts[5]});

		await expect(Weedburnu538vdC.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uintvUotpzt = BigInt("1477")
		const addresstM4eIKi = accounts[2]
//		const booljmW2Tfg = await Weedburnu538vdC.decreaseAllowance.call(addresstM4eIKi, uintvUotpzt, {from: accounts[3]});
//		const uint8a22pJaG = await Weedburnu538vdC.decimals.call({from: accounts[4]});

		await expect(Weedburnu538vdC.decreaseAllowance.call(addresstM4eIKi, uintvUotpzt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const addressMxa4K6E = accounts[3]
		const addressEPauLBK = accounts[2]
		const addressa0W16xC = accounts[5]
		const addresssMxmr73 = accounts[4]
		const uint256b1iWZTJ = await Weedburnu538vdC.allowance.call(addressEPauLBK, addressMxa4K6E, {from: accounts[0]});
		const uint8a22pJaG = await Weedburnu538vdC.decimals.call({from: accounts[4]});
		const uint256bY6BVLk = await Weedburnu538vdC.allowance.call(addresssMxmr73, addressa0W16xC, {from: accounts[5]});

		assert.equal(uint256b1iWZTJ, BigInt("0"))
		assert.equal(uint256bY6BVLk, BigInt("0"))
		assert.equal(uint8a22pJaG, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQcv954P = await Weedburn.new({from: accounts[2]});
		const uintVtHDsjU = BigInt("544")
		const addressgOnFdG6 = accounts[3]
		const uintKI1QQNx = BigInt("1850")
		const addressKJCxrEr = accounts[3]
		const addressIgm16Ey = accounts[0]
		const uintHr8wxyV = BigInt("1002")
		const addressDHzbWEl = accounts[1]
		const addressvSR7Wbo = accounts[5]
		const uintBc2mx2P = BigInt("618")
		const addressP1HQcc = accounts[4]
		const addressS0v971x = accounts[1]
//		const addresslSYftMY = await WeedburnQcv954P.burnFrom.call(addressgOnFdG6, uintVtHDsjU, {from: accounts[5]});
//		const boolhC0dhqw = await WeedburnQcv954P.transferFrom.call(addressIgm16Ey, addressKJCxrEr, uintKI1QQNx, {from: accounts[0]});
//		const boolZLnCUs = await WeedburnQcv954P.transferFrom.call(addressvSR7Wbo, addressDHzbWEl, uintHr8wxyV, {from: accounts[0]});
//		const boolZKwUIbP = await WeedburnQcv954P.transferFrom.call(addressS0v971x, addressP1HQcc, uintBc2mx2P, {from: accounts[0]});

		await expect(WeedburnQcv954P.burnFrom.call(addressgOnFdG6, uintVtHDsjU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnekUWVs = await Weedburn.new({from: accounts[3]});
		const addresswAUy8T = accounts[3]
		const uint3RxlkK = BigInt("1118")
		const addressXbhN6X = accounts[4]
		const uintnAGv7ii = BigInt("459")
		const addressAJx8OKU = accounts[5]
		const uintqiQtuvx = BigInt("1144")
		const addresst7j162y = accounts[3]
		const uintyWDfYCM = BigInt("670")
		const addressG8d05nL = accounts[5]
		const uintTSmBrdN = BigInt("850")
		const addressI4x5SNW = accounts[2]
		const uint256fGReoAn = await WeedburnekUWVs.balanceOf.call(addresswAUy8T, {from: accounts[1]});
		const boolcvKVk9Z = await WeedburnekUWVs.increaseAllowance.call(addressXbhN6X, uint3RxlkK, {from: accounts[5]});
//		const addressbTRLyiX = await WeedburnekUWVs.burnFrom.call(addressAJx8OKU, uintnAGv7ii, {from: accounts[4]});
//		const boolek2xpkD = await WeedburnekUWVs.decreaseAllowance.call(addresst7j162y, uintqiQtuvx, {from: accounts[5]});
//		const bools2au70Q = await WeedburnekUWVs.transfer.call(addressG8d05nL, uintyWDfYCM, {from: accounts[2]});
//		const boolyjhgYZ = await WeedburnekUWVs.decreaseAllowance.call(addressI4x5SNW, uintTSmBrdN, {from: accounts[0]});

		assert.equal(boolcvKVk9Z, true)
		assert.equal(uint256fGReoAn, BigInt("100000000000000000000000"))
		await expect(WeedburnekUWVs.burnFrom.call(addressAJx8OKU, uintnAGv7ii, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uintE9mhLxa = BigInt("1891")
		const uint8a22pJaG = await Weedburnu538vdC.decimals.call({from: accounts[4]});
		const uint256dLJYbKo = await Weedburnu538vdC.burn.call(uintE9mhLxa, {from: accounts[4]});

		assert.equal(uint8a22pJaG, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQcv954P = await Weedburn.new({from: accounts[2]});
		const uintSi8ZJVP = BigInt("356")
		const addresso1nC5Y = accounts[5]
		const addressTNKYIi2 = "0x0000000000000000000000000000000000000001"
		const uintPRYMb4N = BigInt("5")
		const addressKczIhoK = accounts[3]
		const uintPUELxzY = BigInt("1002")
		const addressDnHLTi = accounts[2]
		const addressKUpFGDF = accounts[5]
//		await WeedburnQcv954P.disableDevMode.call({from: accounts[0]});
//		const boolfL7Zq5n = await WeedburnQcv954P.transferFrom.call(addressTNKYIi2, addresso1nC5Y, uintSi8ZJVP, {from: accounts[3]});
//		const addresszJxQeI6 = await WeedburnQcv954P.burnFrom.call(addressKczIhoK, uintPRYMb4N, {from: accounts[1]});
//		const boolZLnCUs = await WeedburnQcv954P.transferFrom.call(addressKUpFGDF, addressDnHLTi, uintPUELxzY, {from: accounts[0]});

		await expect(WeedburnQcv954P.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uintnGTWEpK = BigInt("1846")
		const addressrbTVzg = accounts[2]
		const addressjp0d8cX = accounts[4]
		const uintDaFG1Qq = BigInt("1235")
		const addressDgxAdod = accounts[1]
		const uint8ywOT1X = await Weedburnu538vdC.decimals.call({from: accounts[0]});
//		const boolcwOlX7K = await Weedburnu538vdC.transferFrom.call(addressjp0d8cX, addressrbTVzg, uintnGTWEpK, {from: accounts[3]});
//		const addressIzX9xoZ = await Weedburnu538vdC.burnFrom.call(addressDgxAdod, uintDaFG1Qq, {from: accounts[1]});

		assert.equal(uint8ywOT1X, BigInt("18"))
		await expect(Weedburnu538vdC.transferFrom.call(addressjp0d8cX, addressrbTVzg, uintnGTWEpK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnu538vdC = await Weedburn.new({from: accounts[4]});
		const uinttK9y4QM = BigInt("985")
		const addresspCrD1KA = accounts[1]
		const uintcX2SMML = BigInt("1235")
		const addressFoG8dDK = accounts[1]
		const boolHlj6aUe = await Weedburnu538vdC.transfer.call(addresspCrD1KA, uinttK9y4QM, {from: accounts[4]});
//		const addressIzX9xoZ = await Weedburnu538vdC.burnFrom.call(addressFoG8dDK, uintcX2SMML, {from: accounts[1]});
//		await Weedburnu538vdC.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHlj6aUe, true)
		await expect(Weedburnu538vdC.burnFrom.call(addressFoG8dDK, uintcX2SMML, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})