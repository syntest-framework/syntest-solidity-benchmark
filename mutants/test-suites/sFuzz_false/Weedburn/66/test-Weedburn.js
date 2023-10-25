const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnYgHCQsd = await Weedburn.new({from: accounts[3]});
		const uintcTyv3Fd = BigInt("451")
		const addressog0R8Mn = "0x0000000000000000000000000000000000000001"
		const uintdJDyms1 = BigInt("677")
		const addressYyhvjf8 = accounts[0]
		const uintNiWJhqV = BigInt("588")
		const addressf2F4VP4 = accounts[3]
		const uintv2jKOkQ = BigInt("139")
		const addressPYfuGIu = accounts[2]
		const addresseRPYf8S = accounts[5]
		const uintaLC3uf = BigInt("1417")
		const addressHVVD67R = accounts[0]
//		const addressQfWZOzr = await WeedburnYgHCQsd.burnFrom.call(addressog0R8Mn, uintcTyv3Fd, {from: "0x0000000000000000000000000000000000000001"});
//		const boold43KeN5 = await WeedburnYgHCQsd.increaseAllowance.call(addressYyhvjf8, uintdJDyms1, {from: accounts[3]});
//		const addressKLeboe = await WeedburnYgHCQsd.burnFrom.call(addressf2F4VP4, uintNiWJhqV, {from: accounts[2]});
//		const boolP5W52RS = await WeedburnYgHCQsd.transferFrom.call(addresseRPYf8S, addressPYfuGIu, uintv2jKOkQ, {from: accounts[3]});
//		const boolbyBT6eK = await WeedburnYgHCQsd.transfer.call(addressHVVD67R, uintaLC3uf, {from: accounts[1]});

		await expect(WeedburnYgHCQsd.burnFrom.call(addressog0R8Mn, uintcTyv3Fd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsedRluv = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlaAXurv = BigInt("1680")
		const addressdvCerQJ = accounts[4]
		const addressdR8Ihh5 = accounts[0]
		const addressFuJP3Mq = accounts[4]
		const addressbMuoPgy = await WeedburnsedRluv.burnFrom.call(addressdvCerQJ, uintlaAXurv, {from: accounts[1]});
		const uint256aNVmZv0 = await WeedburnsedRluv.allowance.call(addressFuJP3Mq, addressdR8Ihh5, {from: accounts[3]});
		const stringg8QsZf3 = await WeedburnsedRluv.symbol.call({from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const stringFAS131C = "kCjJahEvn5Nt859TRz6o1ju5GTwk2NxRD18FpwlPhJssBHDTeIgbfVLKR5LSYToAV825RzGR7ovOKF"
		const stringaCP4ZfQ = "la0GXqfroqwEX9FvfsRoTg5R8A1qsgXuQLg12"
		const uintFSPBW3 = BigInt("233")
		const WeedburnQ2JUeTw = await Weedburn.new(stringFAS131C, stringaCP4ZfQ, uintFSPBW3, {from: accounts[1]});
		const uintXMk3zVf = BigInt("1364")
		const addressIACXXG = accounts[3]
		const uintIUKDnEw = BigInt("1911")
		const addressZszjWWE = accounts[3]
		await WeedburnQ2JUeTw.enableLimitMode.call({from: accounts[4]});
		const stringZXVy5l = await WeedburnQ2JUeTw.symbol.call({from: accounts[4]});
		const booleAG1UVK = await WeedburnQ2JUeTw.transfer.call(addressIACXXG, uintXMk3zVf, {from: accounts[5]});
		const uint8zLmMDLo = await WeedburnQ2JUeTw.decimals.call({from: accounts[3]});
		const bool2N4H5A = await WeedburnQ2JUeTw.decreaseAllowance.call(addressZszjWWE, uintIUKDnEw, {from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const uintOGP0Rdg = BigInt("1566")
		const addressqsTxkAQ = accounts[4]
		const addressa864Lba = accounts[3]
		const uintCXNk3Uf = BigInt("1831")
		const addressWHHzFwg = accounts[1]
		const uint8M089TCQ = await WeedburnK5hunh5.decimals.call({from: accounts[4]});
//		const booly5JXeSH = await WeedburnK5hunh5.transferFrom.call(addressa864Lba, addressqsTxkAQ, uintOGP0Rdg, {from: accounts[0]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressWHHzFwg, uintCXNk3Uf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8M089TCQ, BigInt("18"))
		await expect(WeedburnK5hunh5.transferFrom.call(addressa864Lba, addressqsTxkAQ, uintOGP0Rdg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnv9x2GL0 = await Weedburn.new({from: accounts[2]});
		const uintJFx2u3 = BigInt("1266")
		const addressv0VSZgn = "0x0000000000000000000000000000000000000001"
//		await Weedburnv9x2GL0.enableLimitMode.call({from: accounts[3]});
//		await Weedburnv9x2GL0.enableDevMode.call({from: accounts[2]});
//		const addressOBR8Ma = await Weedburnv9x2GL0.burnFrom.call(addressv0VSZgn, uintJFx2u3, {from: accounts[2]});

		await expect(Weedburnv9x2GL0.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburni5pBjP = await Weedburn.new({from: accounts[4]});
		const uintsSzNWmB = BigInt("1856")
		const addressXL40zWX = accounts[0]
		const uints0tG1C4 = BigInt("1280")
		const addresspKBhjK5 = accounts[2]
		const uinthFjMESp = BigInt("1508")
		const addressOFapI0H = accounts[0]
		const uintoIYZojG = BigInt("845")
		const addresslIHlhlp = accounts[3]
		const boolwSgEFqT = await Weedburni5pBjP.approve.call(addressXL40zWX, uintsSzNWmB, {from: accounts[5]});
//		const boolYlBiwvZ = await Weedburni5pBjP.transfer.call(addresspKBhjK5, uints0tG1C4, {from: accounts[0]});
//		const addressKZiTJD8 = await Weedburni5pBjP.burnFrom.call(addressOFapI0H, uinthFjMESp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJLCItRQ = await Weedburni5pBjP.decreaseAllowance.call(addresslIHlhlp, uintoIYZojG, {from: accounts[4]});
//		const stringWmI0o1O = await Weedburni5pBjP.name.call({from: accounts[4]});

		assert.equal(boolwSgEFqT, true)
		await expect(Weedburni5pBjP.transfer.call(addresspKBhjK5, uints0tG1C4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const uintEfMuM51 = BigInt("1023")
		const addresstupJrD = accounts[3]
		const uintIJAqpyk = BigInt("1831")
		const addressZQCFVCN = accounts[1]
		const uint8M089TCQ = await WeedburnK5hunh5.decimals.call({from: accounts[4]});
		const uint256JTdkBdG = await WeedburnK5hunh5.totalSupply.call({from: accounts[0]});
//		const boolcFqJJNA = await WeedburnK5hunh5.decreaseAllowance.call(addresstupJrD, uintEfMuM51, {from: accounts[5]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressZQCFVCN, uintIJAqpyk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JTdkBdG, BigInt("100000000000000000000000"))
		assert.equal(uint8M089TCQ, BigInt("18"))
		await expect(WeedburnK5hunh5.decreaseAllowance.call(addresstupJrD, uintEfMuM51, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const uintuR7VFBO = BigInt("1886")
		const addresszmZ9ISR = "0x0000000000000000000000000000000000000001"
		const uintSlLgzFD = BigInt("1550")
		const addressZFLw9sY = accounts[4]
		const boolsCH5tx = await WeedburnK5hunh5.increaseAllowance.call(addresszmZ9ISR, uintuR7VFBO, {from: accounts[1]});
		const stringHeTHaRa = await WeedburnK5hunh5.symbol.call({from: accounts[0]});
		const uint8M089TCQ = await WeedburnK5hunh5.decimals.call({from: accounts[4]});
		const boolGBpeUD = await WeedburnK5hunh5.approve.call(addressZFLw9sY, uintSlLgzFD, {from: accounts[3]});

		assert.equal(boolGBpeUD, true)
		assert.equal(boolsCH5tx, true)
		assert.equal(stringHeTHaRa, "Weedburn")
		assert.equal(uint8M089TCQ, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const addressQjri93m = accounts[2]
		const uinto8X1xwf = BigInt("1831")
		const addressDj1aich = accounts[1]
		const uint8M089TCQ = await WeedburnK5hunh5.decimals.call({from: accounts[4]});
		const uint256YTIwbz5 = await WeedburnK5hunh5.balanceOf.call(addressQjri93m, {from: accounts[3]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressDj1aich, uinto8X1xwf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rWisTCz = await WeedburnK5hunh5.totalSupply.call({from: accounts[5]});

		assert.equal(uint256YTIwbz5, BigInt("0"))
		assert.equal(uint8M089TCQ, BigInt("18"))
		await expect(WeedburnK5hunh5.transfer.call(addressDj1aich, uinto8X1xwf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnk8oA76D = await Weedburn.new({from: accounts[4]});
//		await Weedburnk8oA76D.enableDevMode.call({from: accounts[1]});
//		const uint256p4DDFf2 = await Weedburnk8oA76D.totalSupply.call({from: accounts[3]});
//		const uint8LeMNNzn = await Weedburnk8oA76D.decimals.call({from: accounts[0]});
//		await Weedburnk8oA76D.disableLimitMode.call({from: accounts[0]});

		await expect(Weedburnk8oA76D.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const addresszpoCymP = accounts[3]
		const addressqUhSbE5 = accounts[0]
		const uintiUZynCp = BigInt("1831")
		const addressTPI6e01 = accounts[2]
		const uint256NLtU6tr = await WeedburnK5hunh5.allowance.call(addressqUhSbE5, addresszpoCymP, {from: accounts[0]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressTPI6e01, uintiUZynCp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256NLtU6tr, BigInt("0"))
		await expect(WeedburnK5hunh5.transfer.call(addressTPI6e01, uintiUZynCp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const uintAe2JFU1 = BigInt("395")
		const addressj3zmDCU = accounts[1]
		const uintg1djrT0 = BigInt("871")
		const addressgFlzVUo = accounts[1]
		const boolQTunPBg = await WeedburnK5hunh5.increaseAllowance.call(addressj3zmDCU, uintAe2JFU1, {from: accounts[1]});
//		await WeedburnK5hunh5.disableLimitMode.call({from: accounts[4]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressgFlzVUo, uintg1djrT0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQTunPBg, true)
		await expect(WeedburnK5hunh5.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const uintMImFnWM = BigInt("1831")
		const addressrN0qtMD = accounts[2]
		const stringzMbOvq5 = await WeedburnK5hunh5.name.call({from: accounts[3]});
//		await WeedburnK5hunh5.enableLimitMode.call({from: accounts[4]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressrN0qtMD, uintMImFnWM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringzMbOvq5, "t.me/burnweed1")
		await expect(WeedburnK5hunh5.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnSNcivcs = await Weedburn.new({from: accounts[3]});
		const addressq7IoVDj = accounts[1]
		const addressa5mqcV = accounts[2]
		const uintPx7Zk8Q = BigInt("478")
		const addressJVVWnyb = "0x0000000000000000000000000000000000000001"
		const uint256VqUaw9b = await WeedburnSNcivcs.totalSupply.call({from: accounts[4]});
		const uint256Wpc0Q22 = await WeedburnSNcivcs.totalSupply.call({from: accounts[4]});
		const uint256vUc9Mdt = await WeedburnSNcivcs.allowance.call(addressa5mqcV, addressq7IoVDj, {from: accounts[2]});
		const stringJn41kW = await WeedburnSNcivcs.name.call({from: accounts[1]});
//		const uint256PBv54nE = await WeedburnSNcivcs.burn.call(uintPx7Zk8Q, {from: accounts[4]});
//		const uint256DmfJ8C4 = await WeedburnSNcivcs.balanceOf.call(addressJVVWnyb, {from: accounts[5]});

		assert.equal(stringJn41kW, "t.me/burnweed1")
		assert.equal(uint256VqUaw9b, BigInt("100000000000000000000000"))
		assert.equal(uint256Wpc0Q22, BigInt("100000000000000000000000"))
		assert.equal(uint256vUc9Mdt, BigInt("0"))
		await expect(WeedburnSNcivcs.burn.call(uintPx7Zk8Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const uintH5rMsI2 = BigInt("1831")
		const addressIrCA19 = accounts[1]
//		await WeedburnK5hunh5.disableDevMode.call({from: accounts[1]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addressIrCA19, uintH5rMsI2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnK5hunh5.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnK5hunh5 = await Weedburn.new({from: accounts[0]});
		const address469uq9 = accounts[0]
		const addressB2b8pDq = accounts[2]
		const uintn8PfbzM = BigInt("792")
		const addresswpKh78w = accounts[3]
		const uintYpvFaol = BigInt("1813")
		const addresstaiJCS7 = accounts[1]
		const uint256tIJcfW = await WeedburnK5hunh5.allowance.call(addressB2b8pDq, address469uq9, {from: accounts[5]});
		const booll6DtVKz = await WeedburnK5hunh5.transfer.call(addresswpKh78w, uintn8PfbzM, {from: accounts[0]});
//		const boolLmK7pC = await WeedburnK5hunh5.transfer.call(addresstaiJCS7, uintYpvFaol, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booll6DtVKz, true)
		assert.equal(uint256tIJcfW, BigInt("0"))
		await expect(WeedburnK5hunh5.transfer.call(addresstaiJCS7, uintYpvFaol, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})