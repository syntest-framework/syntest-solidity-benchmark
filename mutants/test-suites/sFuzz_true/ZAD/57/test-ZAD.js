const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADtvT980Z = await ZAD.new({from: accounts[3]});
		const uintJOcwqw = BigInt("1886")
		const addressg8Eaymz = "0x0000000000000000000000000000000000000001"
		const uintPHrSeS = BigInt("42")
		const addressFrbF42R = accounts[4]
		const uintqKuUn8F = BigInt("1937")
		const addresska7HMyK = accounts[4]
		const addressSg64rNW = accounts[0]
		const uintXEKxcpg = BigInt("2005")
		const addressQIpzs7o = accounts[1]
		const uintMXNQFcY = BigInt("510")
		const addressPhBqD1d = accounts[4]
		const addressLTq53tA = accounts[1]
		const booloYPHiOn = await ZADtvT980Z.increaseAllowance.call(addressg8Eaymz, uintJOcwqw, {from: accounts[3]});
//		const boolmYI1T0 = await ZADtvT980Z.decreaseAllowance.call(addressFrbF42R, uintPHrSeS, {from: accounts[3]});
//		const boolTfikSD5 = await ZADtvT980Z.transferFrom.call(addressSg64rNW, addresska7HMyK, uintqKuUn8F, {from: "0x0000000000000000000000000000000000000001"});
//		const boolq3Dgy5N = await ZADtvT980Z.decreaseAllowance.call(addressQIpzs7o, uintXEKxcpg, {from: accounts[5]});
//		const boolpVs7D2s = await ZADtvT980Z.transferFrom.call(addressLTq53tA, addressPhBqD1d, uintMXNQFcY, {from: accounts[1]});

		assert.equal(booloYPHiOn, true)
		await expect(ZADtvT980Z.decreaseAllowance.call(addressFrbF42R, uintPHrSeS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADwNvgBwb = await ZAD.new({from: accounts[2]});
		const uintwEWZxSV = BigInt("682")
		const addressoAOTVVb = accounts[4]
		const uintmKetOO = BigInt("889")
		const addressQtsgNZF = accounts[4]
		const uint256l1QRpN5 = await ZADwNvgBwb.totalSupply.call({from: accounts[4]});
//		const boolZAqO6UB = await ZADwNvgBwb.transfer.call(addressoAOTVVb, uintwEWZxSV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVGr2il = await ZADwNvgBwb.increaseAllowance.call(addressQtsgNZF, uintmKetOO, {from: accounts[2]});

		assert.equal(uint256l1QRpN5, BigInt("100000000000000000000000000"))
		await expect(ZADwNvgBwb.transfer.call(addressoAOTVVb, uintwEWZxSV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADej2rZy = await ZAD.new({from: accounts[5]});
		const addressCA2KLs6 = "0x0000000000000000000000000000000000000001"
		const uintrpjN12c = BigInt("2038")
		const addressiwD1gTU = accounts[3]
		const uintm8DuXL4 = BigInt("321")
		const addressWQP7hzA = accounts[5]
		const uint256VeS8ZU = await ZADej2rZy.balanceOf.call(addressCA2KLs6, {from: accounts[1]});
//		const boolxKHiwhu = await ZADej2rZy.transfer.call(addressiwD1gTU, uintrpjN12c, {from: accounts[0]});
//		const boolr04hRZI = await ZADej2rZy.transfer.call(addressWQP7hzA, uintm8DuXL4, {from: accounts[3]});
//		const stringPc2Juze = await ZADej2rZy.symbol.call({from: accounts[4]});
//		const stringMC9ByFo = await ZADej2rZy.name.call({from: accounts[2]});

		assert.equal(uint256VeS8ZU, BigInt("0"))
		await expect(ZADej2rZy.transfer.call(addressiwD1gTU, uintrpjN12c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADFKMos4v = await ZAD.new({from: accounts[5]});
		const addressHM8uicX = accounts[1]
		const uintwwqk32 = BigInt("391")
		const addresslFsA4aR = accounts[0]
		const uinttFgSwYY = BigInt("214")
		const addressINgGK3D = accounts[3]
		const uint256h7DbVfJ = await ZADFKMos4v.balanceOf.call(addressHM8uicX, {from: accounts[2]});
		const uint256C3SW2J1 = await ZADFKMos4v.totalSupply.call({from: accounts[2]});
		const uint8eo1EDIM = await ZADFKMos4v.decimals.call({from: accounts[3]});
		const boolXt6Co6Q = await ZADFKMos4v.approve.call(addresslFsA4aR, uintwwqk32, {from: accounts[5]});
//		const boolUX9yMWo = await ZADFKMos4v.decreaseAllowance.call(addressINgGK3D, uinttFgSwYY, {from: accounts[1]});
//		const uint256sSh4SkT = await ZADFKMos4v.totalSupply.call({from: accounts[4]});

		assert.equal(boolXt6Co6Q, true)
		assert.equal(uint256C3SW2J1, BigInt("100000000000000000000000000"))
		assert.equal(uint256h7DbVfJ, BigInt("0"))
		assert.equal(uint8eo1EDIM, BigInt("18"))
		await expect(ZADFKMos4v.decreaseAllowance.call(addressINgGK3D, uinttFgSwYY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADDEwBAi = await ZAD.new({from: accounts[3]});
		const uintjLibrue = BigInt("288")
		const addressx1AR7iu = "0x0000000000000000000000000000000000000001"
		const addressfS7WCvW = accounts[5]
		const addressQeoH5qF = "0x0000000000000000000000000000000000000001"
		const uintDUy1aYn = BigInt("1166")
		const addressmQ39XK = accounts[2]
		const uintabNC8bi = BigInt("1625")
		const addressoKveUyH = accounts[4]
		const boolg4j4hkL = await ZADDEwBAi.increaseAllowance.call(addressx1AR7iu, uintjLibrue, {from: accounts[2]});
		const uint256QIt7ocH = await ZADDEwBAi.allowance.call(addressQeoH5qF, addressfS7WCvW, {from: accounts[2]});
		const boolF5tT6MI = await ZADDEwBAi.increaseAllowance.call(addressmQ39XK, uintDUy1aYn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEGkO6Ab = await ZADDEwBAi.transfer.call(addressoKveUyH, uintabNC8bi, {from: accounts[1]});

		assert.equal(boolF5tT6MI, true)
		assert.equal(boolg4j4hkL, true)
		assert.equal(uint256QIt7ocH, BigInt("0"))
		await expect(ZADDEwBAi.transfer.call(addressoKveUyH, uintabNC8bi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADGPV7GmF = await ZAD.new({from: accounts[4]});
		const uintjjBy6Uw = BigInt("752")
		const addressIlpC79J = accounts[1]
		const uint256YfhTed = await ZADGPV7GmF.totalSupply.call({from: accounts[3]});
		const stringbyLEtwZ = await ZADGPV7GmF.symbol.call({from: accounts[4]});
//		const boolrun8MVP = await ZADGPV7GmF.transfer.call(addressIlpC79J, uintjjBy6Uw, {from: accounts[0]});

		assert.equal(stringbyLEtwZ, "ZAD")
		assert.equal(uint256YfhTed, BigInt("100000000000000000000000000"))
		await expect(ZADGPV7GmF.transfer.call(addressIlpC79J, uintjjBy6Uw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADUMJ3nAW = await ZAD.new({from: accounts[5]});
		const uintaLUan27 = BigInt("1866")
		const addresshjxBXY1 = accounts[1]
		const addressJowbijV = accounts[5]
		const addressuJr2tmd = accounts[2]
		const addressbCjWR4 = accounts[1]
		const uintExW9IZM = BigInt("1378")
		const addressUigQ9D4 = "0x0000000000000000000000000000000000000001"
//		const boolswRV3jV = await ZADUMJ3nAW.transferFrom.call(addressJowbijV, addresshjxBXY1, uintaLUan27, {from: accounts[2]});
//		const stringlAb2PfM = await ZADUMJ3nAW.name.call({from: accounts[4]});
//		const uint8QJGMHlo = await ZADUMJ3nAW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hSxo85H = await ZADUMJ3nAW.allowance.call(addressbCjWR4, addressuJr2tmd, {from: accounts[3]});
//		const boolcAZ3WQ2 = await ZADUMJ3nAW.decreaseAllowance.call(addressUigQ9D4, uintExW9IZM, {from: accounts[3]});

		await expect(ZADUMJ3nAW.transferFrom.call(addressJowbijV, addresshjxBXY1, uintaLUan27, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADwNvgBwb = await ZAD.new({from: accounts[2]});
		const uintOQ1eoDT = BigInt("682")
		const addressED5yg84 = accounts[4]
		const uintweZlWi1 = BigInt("889")
		const addressnX5JvP0 = accounts[4]
		const addressP5znJiR = "0x0000000000000000000000000000000000000001"
		const addressMCYWYKv = accounts[0]
		const stringjwTd7Ak = await ZADwNvgBwb.name.call({from: accounts[1]});
		const uint256l1QRpN5 = await ZADwNvgBwb.totalSupply.call({from: accounts[4]});
//		const boolZAqO6UB = await ZADwNvgBwb.transfer.call(addressED5yg84, uintOQ1eoDT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVGr2il = await ZADwNvgBwb.increaseAllowance.call(addressnX5JvP0, uintweZlWi1, {from: accounts[2]});
//		const uint256ZsYZNQu = await ZADwNvgBwb.allowance.call(addressMCYWYKv, addressP5znJiR, {from: accounts[0]});

		assert.equal(stringjwTd7Ak, "Zadkiel")
		assert.equal(uint256l1QRpN5, BigInt("100000000000000000000000000"))
		await expect(ZADwNvgBwb.transfer.call(addressED5yg84, uintOQ1eoDT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADwVc2cD2 = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressM7KKPQn = accounts[3]
		const address6tYBC5 = accounts[2]
		const stringIN8Zh6S = await ZADwVc2cD2.symbol.call({from: accounts[0]});
		const uint256mxR9X1 = await ZADwVc2cD2.allowance.call(address6tYBC5, addressM7KKPQn, {from: accounts[5]});
		const stringNSOjPnK = await ZADwVc2cD2.symbol.call({from: accounts[4]});
	});

	it('test for ZAD', async () => {
		const ZADwNvgBwb = await ZAD.new({from: accounts[2]});
		const uintbcAdeS = BigInt("25")
		const uint256l1QRpN5 = await ZADwNvgBwb.totalSupply.call({from: accounts[4]});
//		const uint256IjEu6JB = await ZADwNvgBwb._burn.call(uintbcAdeS, {from: accounts[5]});
//		const stringhtUGLv = await ZADwNvgBwb.symbol.call({from: accounts[0]});

		assert.equal(uint256l1QRpN5, BigInt("100000000000000000000000000"))
		await expect(ZADwNvgBwb._burn.call(uintbcAdeS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})