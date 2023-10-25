const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringGYgbvyN = "ahGHNF5VkA3l8ZL26zirzpJvMLIvzLybRk9P6NACMc2aRlNseOFLHi7fzurispAqSMwcakBpRdXM"
		const stringFLCl2iu = "H172Gs5uHxaXzV17NDG4VPyyOkBB8"
		const uintejCMItW = BigInt("221")
		const WeedburnD7Fuy7R = await Weedburn.new(stringGYgbvyN, stringFLCl2iu, uintejCMItW, {from: accounts[0]});
		const uintQPnIDx4 = BigInt("1794")
		const addressiUYXjV7 = accounts[1]
		const uintYeYUCUa = BigInt("2023")
		const addressZlj0Ymv = accounts[2]
		const uintbF9leYb = BigInt("1697")
		const addressFXgcBsK = accounts[3]
		const uintgjaQVHX = BigInt("1473")
		const addressz3dVPdA = accounts[3]
		const uintqAzP1uj = BigInt("695")
		const addressIqwbEsc = accounts[3]
		const uintnkq55I0 = BigInt("200")
		const boolUbByNL8 = await WeedburnD7Fuy7R.decreaseAllowance.call(addressiUYXjV7, uintQPnIDx4, {from: accounts[0]});
		const addressBuTlP5 = await WeedburnD7Fuy7R.burnFrom.call(addressZlj0Ymv, uintYeYUCUa, {from: accounts[1]});
		const boolEIxdTf = await WeedburnD7Fuy7R.approve.call(addressFXgcBsK, uintbF9leYb, {from: accounts[4]});
		const addressdoEazC = await WeedburnD7Fuy7R.burnFrom.call(addressz3dVPdA, uintgjaQVHX, {from: accounts[0]});
		const boolbq7sRp5 = await WeedburnD7Fuy7R.decreaseAllowance.call(addressIqwbEsc, uintqAzP1uj, {from: accounts[1]});
		const uint256xQSR6kv = await WeedburnD7Fuy7R.burn.call(uintnkq55I0, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnnjtQu1v = await Weedburn.new({from: accounts[0]});
		const uintCLvekBK = BigInt("523")
		const addressZqvTsJT = accounts[2]
		const addresssH3baS = accounts[0]
		const boolzsaNngc = await WeedburnnjtQu1v.increaseAllowance.call(addressZqvTsJT, uintCLvekBK, {from: accounts[2]});
		const uint256dl2luYX = await WeedburnnjtQu1v.balanceOf.call(addresssH3baS, {from: accounts[2]});
		await WeedburnnjtQu1v.enableLimitMode.call({from: accounts[4]});
		const uint256f2O4XjK = await WeedburnnjtQu1v.totalSupply.call({from: accounts[1]});

		assert.equal(boolzsaNngc, true)
		assert.equal(uint256dl2luYX, BigInt("100000000000000000000000"))
		await expect(WeedburnnjtQu1v.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnI5o2DuT = await Weedburn.new({from: accounts[0]});
		const uintywxjXkl = BigInt("760")
		const uintTlmKeH7 = BigInt("102")
		const addressxq9J1QQ = accounts[2]
		const addressT2rB8eW = accounts[0]
		const addressWjWmpKm = accounts[2]
		const addressShBmbAC = accounts[2]
		const uint256AbrHJdR = await WeedburnI5o2DuT.burn.call(uintywxjXkl, {from: accounts[3]});
		const boolsoCWsWm = await WeedburnI5o2DuT.transferFrom.call(addressT2rB8eW, addressxq9J1QQ, uintTlmKeH7, {from: accounts[2]});
		const uint256rdtCfXM = await WeedburnI5o2DuT.allowance.call(addressShBmbAC, addressWjWmpKm, {from: accounts[2]});

		await expect(WeedburnI5o2DuT.burn.call(uintywxjXkl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnm1V61HB = await Weedburn.new({from: accounts[2]});
		const uintJDHSoYx = BigInt("1707")
		const addresstm93fTG = accounts[0]
		await Weedburnm1V61HB.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		await Weedburnm1V61HB.enableLimitMode.call({from: accounts[0]});
		const boolbVgdZTs = await Weedburnm1V61HB.approve.call(addresstm93fTG, uintJDHSoYx, {from: accounts[0]});

		await expect(Weedburnm1V61HB.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj6JGvX9 = await Weedburn.new({from: accounts[1]});
		const uintTRVg1BQ = BigInt("969")
		const addressplkS2Q = accounts[4]
		const stringoDpHV6 = await Weedburnj6JGvX9.symbol.call({from: accounts[2]});
		const boolvL6UjAS = await Weedburnj6JGvX9.transfer.call(addressplkS2Q, uintTRVg1BQ, {from: accounts[2]});
		const uint8qGp4995 = await Weedburnj6JGvX9.decimals.call({from: accounts[1]});

		assert.equal(stringoDpHV6, "Weedburn")
		await expect(Weedburnj6JGvX9.transfer.call(addressplkS2Q, uintTRVg1BQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburntu8OvEO = await Weedburn.new({from: accounts[4]});
		const addressuPsceyO = accounts[3]
		const addressp5Kmkhh = accounts[2]
		const uintfFGKXNF = BigInt("736")
		const addresshNsLkX = accounts[2]
		const uint8jXXB3P7 = await Weedburntu8OvEO.decimals.call({from: accounts[3]});
		const uint256q6ozt4v = await Weedburntu8OvEO.allowance.call(addressp5Kmkhh, addressuPsceyO, {from: accounts[2]});
		const boolmQ2taI = await Weedburntu8OvEO.approve.call(addresshNsLkX, uintfFGKXNF, {from: accounts[0]});

		assert.equal(boolmQ2taI, true)
		assert.equal(uint256q6ozt4v, BigInt("0"))
		assert.equal(uint8jXXB3P7, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnRHn2I8 = await Weedburn.new({from: accounts[4]});
		const uintPjBuvZ = BigInt("42")
		const addressjNaw5Cd = accounts[1]
		const uintqaSE3Cv = BigInt("1941")
		const addresstMRGVoK = accounts[2]
		const uintn2K7vJB = BigInt("810")
		const addressd0ALaEf = accounts[1]
		const address2SbOft = accounts[1]
		const addressKsvBgdN = accounts[4]
		const boolIUXzJxW = await WeedburnRHn2I8.approve.call(addressjNaw5Cd, uintPjBuvZ, {from: accounts[2]});
		const addressawN8yUA = await WeedburnRHn2I8.burnFrom.call(addresstMRGVoK, uintqaSE3Cv, {from: accounts[2]});
		const bool5zDSWG = await WeedburnRHn2I8.transfer.call(addressd0ALaEf, uintn2K7vJB, {from: accounts[4]});
		const uint256YVIXXpW = await WeedburnRHn2I8.allowance.call(addressKsvBgdN, address2SbOft, {from: accounts[0]});

		assert.equal(boolIUXzJxW, true)
		await expect(WeedburnRHn2I8.burnFrom.call(addresstMRGVoK, uintqaSE3Cv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnO80yTY = await Weedburn.new({from: accounts[0]});
		await WeedburnO80yTY.disableDevMode.call({from: accounts[4]});

		await expect(WeedburnO80yTY.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnREtX2tU = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCKdwty9 = accounts[4]
		const uintXCMABWn = BigInt("649")
		const addressQkA8Hy4 = accounts[5]
		const addresshZVqHfF = accounts[4]
		const addressG3RC6c2 = accounts[0]
		const uint256Y7OCfks = await WeedburnREtX2tU.balanceOf.call(addressCKdwty9, {from: accounts[3]});
		const uint256L4EsMTw = await WeedburnREtX2tU.totalSupply.call({from: accounts[5]});
		await WeedburnREtX2tU.disableLimitMode.call({from: accounts[1]});
		const uint256rF2aaa = await WeedburnREtX2tU.totalSupply.call({from: accounts[3]});
		const boolFI13ggz = await WeedburnREtX2tU.decreaseAllowance.call(addressQkA8Hy4, uintXCMABWn, {from: accounts[2]});
		const uint256NdRVglu = await WeedburnREtX2tU.allowance.call(addressG3RC6c2, addresshZVqHfF, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const Weedburnj6JGvX9 = await Weedburn.new({from: accounts[1]});
		const uintvAHrrvh = BigInt("969")
		const addressXJzVyQR = accounts[4]
		const stringoDpHV6 = await Weedburnj6JGvX9.symbol.call({from: accounts[2]});
		const stringeycRpj6 = await Weedburnj6JGvX9.name.call({from: accounts[5]});
		const boolvL6UjAS = await Weedburnj6JGvX9.transfer.call(addressXJzVyQR, uintvAHrrvh, {from: accounts[2]});

		assert.equal(stringeycRpj6, "t.me/burnweed1")
		assert.equal(stringoDpHV6, "Weedburn")
		await expect(Weedburnj6JGvX9.transfer.call(addressXJzVyQR, uintvAHrrvh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnO80yTY = await Weedburn.new({from: accounts[0]});
		const uintU7BQzwW = BigInt("919")
		const addressJumazOY = accounts[2]
		const addresserqjte9 = accounts[3]
		const uintorBLFE4 = BigInt("109")
		const uinthNP0cGb = BigInt("1134")
		const addressbOfkVBz = accounts[5]
		const addressRZpY3Ks = accounts[4]
		const boolRRrPs46 = await WeedburnO80yTY.transferFrom.call(addresserqjte9, addressJumazOY, uintU7BQzwW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FBwwhsz = await WeedburnO80yTY.burn.call(uintorBLFE4, {from: "0x0000000000000000000000000000000000000001"});
		const stringnfVz0UH = await WeedburnO80yTY.name.call({from: accounts[1]});
		await WeedburnO80yTY.disableDevMode.call({from: accounts[4]});
		const boolTg2Tohk = await WeedburnO80yTY.transferFrom.call(addressRZpY3Ks, addressbOfkVBz, uinthNP0cGb, {from: accounts[2]});

		await expect(WeedburnO80yTY.transferFrom.call(addresserqjte9, addressJumazOY, uintU7BQzwW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj6JGvX9 = await Weedburn.new({from: accounts[1]});
		const uintTYsIxFR = BigInt("969")
		const addresshTVOgLL = accounts[4]
		const stringoDpHV6 = await Weedburnj6JGvX9.symbol.call({from: accounts[2]});
		const uint256PTUl6lF = await Weedburnj6JGvX9.totalSupply.call({from: accounts[3]});
		const boolvL6UjAS = await Weedburnj6JGvX9.transfer.call(addresshTVOgLL, uintTYsIxFR, {from: accounts[2]});

		assert.equal(stringoDpHV6, "Weedburn")
		assert.equal(uint256PTUl6lF, BigInt("100000000000000000000000"))
		await expect(Weedburnj6JGvX9.transfer.call(addresshTVOgLL, uintTYsIxFR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRHn2I8 = await Weedburn.new({from: accounts[4]});
		const uintVU9YB5M = BigInt("568")
		const addressd3V92Ld = accounts[5]
		const uintbGdbuas = BigInt("1917")
		const addressi18jR5L = accounts[3]
		const addressQpsns4c = accounts[1]
		const addresssqGGHo6 = accounts[4]
		const boolz4BFKp = await WeedburnRHn2I8.decreaseAllowance.call(addressd3V92Ld, uintVU9YB5M, {from: accounts[3]});
		const addressawN8yUA = await WeedburnRHn2I8.burnFrom.call(addressi18jR5L, uintbGdbuas, {from: accounts[2]});
		const uint256YVIXXpW = await WeedburnRHn2I8.allowance.call(addresssqGGHo6, addressQpsns4c, {from: accounts[0]});

		await expect(WeedburnRHn2I8.decreaseAllowance.call(addressd3V92Ld, uintVU9YB5M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnO80yTY = await Weedburn.new({from: accounts[0]});
		const uintla5Ell = BigInt("1887")
		const addressIs87iy = accounts[0]
		const addressedXDGSL = accounts[0]
		const uintUYPeeiF = BigInt("222")
		const boolY3WKTQU = await WeedburnO80yTY.transferFrom.call(addressedXDGSL, addressIs87iy, uintla5Ell, {from: accounts[1]});
		const uint256iGl6jv8 = await WeedburnO80yTY.burn.call(uintUYPeeiF, {from: accounts[1]});
		await WeedburnO80yTY.disableDevMode.call({from: accounts[4]});

		await expect(WeedburnO80yTY.transferFrom.call(addressedXDGSL, addressIs87iy, uintla5Ell, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj6JGvX9 = await Weedburn.new({from: accounts[1]});
		const uintE8qJeZO = BigInt("971")
		const addressbupxLw6 = accounts[5]
		await Weedburnj6JGvX9.disableLimitMode.call({from: accounts[1]});
		await Weedburnj6JGvX9.enableDevMode.call({from: accounts[0]});
		const boolvL6UjAS = await Weedburnj6JGvX9.transfer.call(addressbupxLw6, uintE8qJeZO, {from: accounts[2]});

		await expect(Weedburnj6JGvX9.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRHn2I8 = await Weedburn.new({from: accounts[4]});
		const uintTR6dTL4 = BigInt("0")
		const addressBo9ilsE = accounts[5]
		const uintmzvptX2 = BigInt("1476")
		const addressGhpDFs = accounts[4]
		const addressZvq2JsR = await WeedburnRHn2I8.burnFrom.call(addressBo9ilsE, uintTR6dTL4, {from: accounts[0]});
		const addressawN8yUA = await WeedburnRHn2I8.burnFrom.call(addressGhpDFs, uintmzvptX2, {from: accounts[2]});

		await expect(WeedburnRHn2I8.burnFrom.call(addressBo9ilsE, uintTR6dTL4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj6JGvX9 = await Weedburn.new({from: accounts[1]});
		const uintbbaRQa = BigInt("1635")
		const addressgi9BMTG = accounts[1]
		const uintmjqYlMs = BigInt("971")
		const addressoG1eaOq = accounts[4]
		const boolILFXlcc = await Weedburnj6JGvX9.transfer.call(addressgi9BMTG, uintbbaRQa, {from: accounts[1]});
		const boolvL6UjAS = await Weedburnj6JGvX9.transfer.call(addressoG1eaOq, uintmjqYlMs, {from: accounts[2]});

		assert.equal(boolILFXlcc, true)
		await expect(Weedburnj6JGvX9.transfer.call(addressoG1eaOq, uintmjqYlMs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnug6vlmi = await Weedburn.new({from: accounts[2]});
		const uintazYxNU4 = BigInt("73")
		const uintkaiqef = BigInt("1705")
		const addressuQI2gmt = accounts[2]
		const uintdw7PUhX = BigInt("1068")
		const addressKZATvc = accounts[1]
		const addressVu9Jvb6 = "0x0000000000000000000000000000000000000001"
		const uint256mAbAXKi = await Weedburnug6vlmi.burn.call(uintazYxNU4, {from: accounts[2]});
		await Weedburnug6vlmi.disableDevMode.call({from: accounts[1]});
		const addressYPy938A = await Weedburnug6vlmi.burnFrom.call(addressuQI2gmt, uintkaiqef, {from: "0x0000000000000000000000000000000000000001"});
		const boold2dL0FF = await Weedburnug6vlmi.transferFrom.call(addressVu9Jvb6, addressKZATvc, uintdw7PUhX, {from: accounts[4]});
		await Weedburnug6vlmi.disableDevMode.call({from: accounts[0]});

		await expect(Weedburnug6vlmi.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})