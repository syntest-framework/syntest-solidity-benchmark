const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnBxB7Dm9 = await Weedburn.new({from: accounts[5]});
		const uintIVTQoW2 = BigInt("1261")
		const addressdeTZyh = accounts[4]
		const uint256zUOc0Cs = await WeedburnBxB7Dm9.totalSupply.call({from: accounts[1]});
		const boolONxaqZv = await WeedburnBxB7Dm9.transfer.call(addressdeTZyh, uintIVTQoW2, {from: accounts[1]});

		assert.equal(uint256zUOc0Cs, BigInt("100000000000000000000000"))
		await expect(WeedburnBxB7Dm9.transfer.call(addressdeTZyh, uintIVTQoW2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringUnaEte = "5cnUeKnTHpRBsC4kmIGD4cyuFAYGOQVsmj1Ub"
		const stringOeB80m = "bp816"
		const uintqjpGIz6 = BigInt("21")
		const WeedburnJMYoeo4 = await Weedburn.new(stringUnaEte, stringOeB80m, uintqjpGIz6, {from: "0x0000000000000000000000000000000000000001"});
		const uintIgk4iwO = BigInt("768")
		const addressrB9APew = accounts[1]
		const uintQnZiDGV = BigInt("1896")
		const addressOkyufXi = accounts[2]
		const uintBxtCdtJ = BigInt("1464")
		const addressUXe9qJ = accounts[4]
		const boolLJQznzN = await WeedburnJMYoeo4.approve.call(addressrB9APew, uintIgk4iwO, {from: accounts[4]});
		const addressc6x04G = await WeedburnJMYoeo4.burnFrom.call(addressOkyufXi, uintQnZiDGV, {from: accounts[0]});
		const addresssaoD0g = await WeedburnJMYoeo4.burnFrom.call(addressUXe9qJ, uintBxtCdtJ, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnZEOFJVh = await Weedburn.new({from: accounts[1]});
		const uintwFeNY0F = BigInt("1113")
		const addressTzePQL = accounts[5]
		const uintSPXpdG4 = BigInt("205")
		const addressAxpsQiq = accounts[3]
		const addressRhhZYjL = accounts[1]
		const addressBv96HNw = await WeedburnZEOFJVh.burnFrom.call(addressTzePQL, uintwFeNY0F, {from: accounts[1]});
		const booljxu4Is1 = await WeedburnZEOFJVh.increaseAllowance.call(addressAxpsQiq, uintSPXpdG4, {from: accounts[5]});
		const uint256STDuqMp = await WeedburnZEOFJVh.balanceOf.call(addressRhhZYjL, {from: accounts[1]});

		await expect(WeedburnZEOFJVh.burnFrom.call(addressTzePQL, uintwFeNY0F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnFU8s4Id = await Weedburn.new({from: accounts[4]});
		const addressXsibVoS = "0x0000000000000000000000000000000000000001"
		await WeedburnFU8s4Id.disableLimitMode.call({from: accounts[4]});
		const uint256GORfXK3 = await WeedburnFU8s4Id.balanceOf.call(addressXsibVoS, {from: accounts[1]});

		await expect(WeedburnFU8s4Id.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnEIegepm = await Weedburn.new({from: accounts[1]});
		const uintvB01jPj = BigInt("519")
		const addressJCOAvS = accounts[2]
		const boolJbrfTLT = await WeedburnEIegepm.approve.call(addressJCOAvS, uintvB01jPj, {from: accounts[4]});
		await WeedburnEIegepm.enableLimitMode.call({from: accounts[5]});
		const uint8WpLY84i = await WeedburnEIegepm.decimals.call({from: accounts[2]});
		const stringudbTNxP = await WeedburnEIegepm.symbol.call({from: accounts[0]});

		assert.equal(boolJbrfTLT, true)
		await expect(WeedburnEIegepm.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqnLiYZo = await Weedburn.new({from: accounts[4]});
		const addressZea4XdL = accounts[0]
		const uintNxigy6c = BigInt("1040")
		const uintTbrnumC = BigInt("465")
		const addressmZhEVFx = accounts[3]
		const uint256mMSIZDb = await WeedburnqnLiYZo.balanceOf.call(addressZea4XdL, {from: accounts[4]});
		const uint256iXxE6Q8 = await WeedburnqnLiYZo.burn.call(uintNxigy6c, {from: accounts[3]});
		const boolLwKZ4z = await WeedburnqnLiYZo.transfer.call(addressmZhEVFx, uintTbrnumC, {from: accounts[1]});
		const uint256xdR0zZU = await WeedburnqnLiYZo.totalSupply.call({from: accounts[4]});

		assert.equal(uint256mMSIZDb, BigInt("0"))
		await expect(WeedburnqnLiYZo.burn.call(uintNxigy6c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTF6nXSe = await Weedburn.new({from: accounts[4]});
		const uintPuax7IG = BigInt("353")
		const addressPymyV3C = accounts[5]
		const uintVxvISOe = BigInt("937")
		const addressIicuuZW = accounts[0]
		const stringydEO3cB = await WeedburnTF6nXSe.symbol.call({from: accounts[0]});
		const boolvcrvhZK = await WeedburnTF6nXSe.transfer.call(addressPymyV3C, uintPuax7IG, {from: accounts[0]});
		await WeedburnTF6nXSe.enableDevMode.call({from: accounts[0]});
		await WeedburnTF6nXSe.enableLimitMode.call({from: accounts[4]});
		const boolTXj0CwK = await WeedburnTF6nXSe.approve.call(addressIicuuZW, uintVxvISOe, {from: accounts[4]});

		assert.equal(stringydEO3cB, "Weedburn")
		await expect(WeedburnTF6nXSe.transfer.call(addressPymyV3C, uintPuax7IG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBxB7Dm9 = await Weedburn.new({from: accounts[5]});
		const uintaMUCdVC = BigInt("1925")
		const addressTrCTlqb = accounts[3]
		const uintpbdynTP = BigInt("1261")
		const addresskgJDS4p = accounts[4]
		const uint256zUOc0Cs = await WeedburnBxB7Dm9.totalSupply.call({from: accounts[1]});
		const boolYd1YIp3 = await WeedburnBxB7Dm9.increaseAllowance.call(addressTrCTlqb, uintaMUCdVC, {from: accounts[0]});
		const boolONxaqZv = await WeedburnBxB7Dm9.transfer.call(addresskgJDS4p, uintpbdynTP, {from: accounts[1]});

		assert.equal(boolYd1YIp3, true)
		assert.equal(uint256zUOc0Cs, BigInt("100000000000000000000000"))
		await expect(WeedburnBxB7Dm9.transfer.call(addresskgJDS4p, uintpbdynTP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTF6nXSe = await Weedburn.new({from: accounts[4]});
		const uintdbZiiZ = BigInt("102")
		const addressvSCUWQ = accounts[4]
		const uintUpH8nVH = BigInt("353")
		const addressJwAG22l = accounts[6]
		const uintOajLSYg = BigInt("937")
		const addressVQ6waUa = accounts[0]
		const stringydEO3cB = await WeedburnTF6nXSe.symbol.call({from: accounts[0]});
		const uint8Y3n8EhZ = await WeedburnTF6nXSe.decimals.call({from: accounts[2]});
		const boolZSSyvV2 = await WeedburnTF6nXSe.transfer.call(addressvSCUWQ, uintdbZiiZ, {from: accounts[3]});
		const boolvcrvhZK = await WeedburnTF6nXSe.transfer.call(addressJwAG22l, uintUpH8nVH, {from: accounts[0]});
		await WeedburnTF6nXSe.enableDevMode.call({from: accounts[0]});
		await WeedburnTF6nXSe.enableLimitMode.call({from: accounts[4]});
		const boolTXj0CwK = await WeedburnTF6nXSe.approve.call(addressVQ6waUa, uintOajLSYg, {from: accounts[4]});

		assert.equal(stringydEO3cB, "Weedburn")
		assert.equal(uint8Y3n8EhZ, BigInt("18"))
		await expect(WeedburnTF6nXSe.transfer.call(addressvSCUWQ, uintdbZiiZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBxB7Dm9 = await Weedburn.new({from: accounts[5]});
		const uint0G7nr9 = BigInt("185")
		const addressLMR7CzP = accounts[5]
		const addressURjFtQn = accounts[2]
		await WeedburnBxB7Dm9.enableDevMode.call({from: accounts[2]});
		const boolVKchf6E = await WeedburnBxB7Dm9.transferFrom.call(addressURjFtQn, addressLMR7CzP, uint0G7nr9, {from: accounts[4]});
		const stringGZtKMei = await WeedburnBxB7Dm9.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnBxB7Dm9.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXQFShSM = await Weedburn.new({from: accounts[5]});
		const uintAGWCwPB = BigInt("494")
		const address6o0dhM = accounts[1]
		const addressOGPzEzf = accounts[3]
		const boolSeFihIE = await WeedburnXQFShSM.transferFrom.call(addressOGPzEzf, address6o0dhM, uintAGWCwPB, {from: accounts[4]});
		await WeedburnXQFShSM.disableDevMode.call({from: accounts[4]});

		await expect(WeedburnXQFShSM.transferFrom.call(addressOGPzEzf, address6o0dhM, uintAGWCwPB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZEOFJVh = await Weedburn.new({from: accounts[1]});
		const addressuszGW8 = accounts[1]
		const addressgioWh4z = accounts[3]
		const uintapu3QJ = BigInt("1113")
		const addressosxk28k = accounts[5]
		const uint256oIQBi7B = await WeedburnZEOFJVh.allowance.call(addressgioWh4z, addressuszGW8, {from: accounts[2]});
		const addressBv96HNw = await WeedburnZEOFJVh.burnFrom.call(addressosxk28k, uintapu3QJ, {from: accounts[1]});

		assert.equal(uint256oIQBi7B, BigInt("0"))
		await expect(WeedburnZEOFJVh.burnFrom.call(addressosxk28k, uintapu3QJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnuPBc06 = await Weedburn.new({from: accounts[5]});
		const uintYfmtVAw = BigInt("1340")
		const addressMGmhsqO = accounts[2]
		const uintW431usS = BigInt("652")
		const addressrg01xdW = accounts[1]
		const uintbwgUmFB = BigInt("1931")
		const uintzyQeHR = BigInt("625")
		const boolfMPJfRS = await WeedburnuPBc06.decreaseAllowance.call(addressMGmhsqO, uintYfmtVAw, {from: accounts[4]});
		const uint256plV9Gr3 = await WeedburnuPBc06.burn.call(uintW431usS, {from: accounts[0]});
		const uint256hwEYa1C = await WeedburnuPBc06.balanceOf.call(addressrg01xdW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QT7aG3e = await WeedburnuPBc06.burn.call(uintbwgUmFB, {from: accounts[3]});
		const uint256XcDvmCr = await WeedburnuPBc06.burn.call(uintzyQeHR, {from: accounts[0]});
		await WeedburnuPBc06.enableDevMode.call({from: accounts[1]});

		await expect(WeedburnuPBc06.decreaseAllowance.call(addressMGmhsqO, uintYfmtVAw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBxB7Dm9 = await Weedburn.new({from: accounts[5]});
		const uintbNjkXg = BigInt("211")
		const addressdkmhk1E = accounts[2]
		const addressgF1lMH = accounts[5]
		const uintpHpUcd = BigInt("104")
		const addressH5mfpcV = "0x0000000000000000000000000000000000000001"
		const uintjx78h7z = BigInt("1261")
		const addressYmcKD5d = accounts[5]
		const boolJkPPGQu = await WeedburnBxB7Dm9.transferFrom.call(addressgF1lMH, addressdkmhk1E, uintbNjkXg, {from: accounts[2]});
		const stringZNgbh4p = await WeedburnBxB7Dm9.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQdLW9H8 = await WeedburnBxB7Dm9.approve.call(addressH5mfpcV, uintpHpUcd, {from: accounts[3]});
		const boolONxaqZv = await WeedburnBxB7Dm9.transfer.call(addressYmcKD5d, uintjx78h7z, {from: accounts[1]});

		await expect(WeedburnBxB7Dm9.transferFrom.call(addressgF1lMH, addressdkmhk1E, uintbNjkXg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBxB7Dm9 = await Weedburn.new({from: accounts[5]});
		const uintP5bDGKq = BigInt("1234")
		const addressMJMGFGJ = accounts[4]
		const uintOaEB3fb = BigInt("1608")
		const addressOKoN9T0 = "0x0000000000000000000000000000000000000001"
		await WeedburnBxB7Dm9.disableDevMode.call({from: accounts[1]});
		const boolONxaqZv = await WeedburnBxB7Dm9.transfer.call(addressMJMGFGJ, uintP5bDGKq, {from: accounts[1]});
		const boolcewwgbj = await WeedburnBxB7Dm9.approve.call(addressOKoN9T0, uintOaEB3fb, {from: accounts[4]});

		await expect(WeedburnBxB7Dm9.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnXQFShSM = await Weedburn.new({from: accounts[5]});
		const uintVzBL2GO = BigInt("494")
		const addressUns53mo = accounts[2]
		const addressXyJXYH = accounts[4]
		const uintz2CPhGV = BigInt("959")
		const addressZspDsrP = accounts[4]
		const stringUKf5SWV = await WeedburnXQFShSM.name.call({from: accounts[2]});
		const boolSeFihIE = await WeedburnXQFShSM.transferFrom.call(addressXyJXYH, addressUns53mo, uintVzBL2GO, {from: accounts[4]});
		const boolDOBI3Ps = await WeedburnXQFShSM.increaseAllowance.call(addressZspDsrP, uintz2CPhGV, {from: "0x0000000000000000000000000000000000000001"});
		const uint8AkLuBLk = await WeedburnXQFShSM.decimals.call({from: accounts[4]});
		const uint8ISgwUwG = await WeedburnXQFShSM.decimals.call({from: accounts[5]});

		assert.equal(stringUKf5SWV, "t.me/burnweed1")
		await expect(WeedburnXQFShSM.transferFrom.call(addressXyJXYH, addressUns53mo, uintVzBL2GO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnAblnWnl = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKTrB2Xo = BigInt("1019")
		const addressvIzOns = "0x0000000000000000000000000000000000000001"
		const uintZiMGGpg = BigInt("927")
		const addressFjndpPS = accounts[5]
		const uintnPmxKx8 = BigInt("891")
		const addresspRZJOY5 = accounts[0]
		const boolPMbEb8r = await WeedburnAblnWnl.transfer.call(addressvIzOns, uintKTrB2Xo, {from: accounts[1]});
		const stringj9JH9zn = await WeedburnAblnWnl.symbol.call({from: accounts[2]});
		const boolGzpl3Go = await WeedburnAblnWnl.approve.call(addressFjndpPS, uintZiMGGpg, {from: "0x0000000000000000000000000000000000000001"});
		const boolMhz6jZy = await WeedburnAblnWnl.increaseAllowance.call(addresspRZJOY5, uintnPmxKx8, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnZEOFJVh = await Weedburn.new({from: accounts[1]});
		const addressRvNy1YY = accounts[4]
		const uintLu5QoLu = BigInt("1298")
		const uintWNjcL6O = BigInt("1105")
		const addressEvWo4LY = accounts[5]
		const uint256Ykcui4G = await WeedburnZEOFJVh.balanceOf.call(addressRvNy1YY, {from: accounts[3]});
		const uint256WkJ0awL = await WeedburnZEOFJVh.burn.call(uintLu5QoLu, {from: accounts[1]});
		const addressBv96HNw = await WeedburnZEOFJVh.burnFrom.call(addressEvWo4LY, uintWNjcL6O, {from: accounts[1]});

		assert.equal(uint256Ykcui4G, BigInt("0"))
		await expect(WeedburnZEOFJVh.burnFrom.call(addressEvWo4LY, uintWNjcL6O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZEOFJVh = await Weedburn.new({from: accounts[1]});
		const uintoPXooCq = BigInt("201")
		const addressXpAN8KX = accounts[0]
		const uintcnSbGG2 = BigInt("1113")
		const addressZCV5PyS = accounts[5]
		const boolkHqh8Tg = await WeedburnZEOFJVh.transfer.call(addressXpAN8KX, uintoPXooCq, {from: accounts[1]});
		const addressBv96HNw = await WeedburnZEOFJVh.burnFrom.call(addressZCV5PyS, uintcnSbGG2, {from: accounts[1]});

		assert.equal(boolkHqh8Tg, true)
		await expect(WeedburnZEOFJVh.burnFrom.call(addressZCV5PyS, uintcnSbGG2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})