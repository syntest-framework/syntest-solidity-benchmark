const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringQwV7n4N = "Mr"
		const stringayUmJ7k = "ZqsAvV7hyEEVXJtMSw1qVykTKEMdglgnCv7G23DOtmPqpm8ETjCxRD4PBXQi"
		const uinteDLwirD = BigInt("6")
		const WeedburnHMuzBr0 = await Weedburn.new(stringQwV7n4N, stringayUmJ7k, uinteDLwirD, {from: "0x0000000000000000000000000000000000000001"});
		const uintOAIW3eW = BigInt("1474")
		const addressR12J9qi = accounts[1]
		const addressDrD9sXs = "0x0000000000000000000000000000000000000001"
		const uintwreJ0r8 = BigInt("1894")
		const addressFMI2BlB = accounts[3]
		const addressV8ffW3Y = accounts[1]
		const address9mwjox = accounts[2]
		const boolTY5mdzC = await WeedburnHMuzBr0.increaseAllowance.call(addressR12J9qi, uintOAIW3eW, {from: accounts[1]});
		const uint256pNJi0Uo = await WeedburnHMuzBr0.balanceOf.call(addressDrD9sXs, {from: accounts[2]});
		const boolIQrdyeA = await WeedburnHMuzBr0.transferFrom.call(addressV8ffW3Y, addressFMI2BlB, uintwreJ0r8, {from: accounts[2]});
		const stringkZF4ZAk = await WeedburnHMuzBr0.symbol.call({from: accounts[2]});
		const uint256lWCuAEh = await WeedburnHMuzBr0.balanceOf.call(address9mwjox, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnWoyUafk = await Weedburn.new({from: accounts[5]});
		const uintyUS8HWB = BigInt("128")
		const addressq0VK0v = accounts[4]
		const addressFCc3FYZ = accounts[1]
//		const addressnjClrjo = await WeedburnWoyUafk.burnFrom.call(addressq0VK0v, uintyUS8HWB, {from: accounts[5]});
//		const uint256uNq0YM9 = await WeedburnWoyUafk.balanceOf.call(addressFCc3FYZ, {from: accounts[1]});
//		const uint256E51ePdi = await WeedburnWoyUafk.totalSupply.call({from: accounts[1]});

		await expect(WeedburnWoyUafk.burnFrom.call(addressq0VK0v, uintyUS8HWB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnEIwoNr1 = await Weedburn.new({from: accounts[1]});
		const uintDwJ47Il = BigInt("1067")
		const addresskvYoiZA = accounts[1]
		const uintxwQxqpN = BigInt("1531")
		const uintE4KR22R = BigInt("1076")
		const addresskjGsokk = accounts[3]
		const addressdaozaC8 = accounts[0]
//		const boolyrANFz4 = await WeedburnEIwoNr1.transfer.call(addresskvYoiZA, uintDwJ47Il, {from: accounts[2]});
//		const uint8Q4WQAZ = await WeedburnEIwoNr1.decimals.call({from: accounts[2]});
//		const uint256tCU0s8F = await WeedburnEIwoNr1.burn.call(uintxwQxqpN, {from: accounts[0]});
//		const bool29CUOJ = await WeedburnEIwoNr1.transferFrom.call(addressdaozaC8, addresskjGsokk, uintE4KR22R, {from: accounts[1]});
//		const uint256xTajkcZ = await WeedburnEIwoNr1.totalSupply.call({from: accounts[2]});

		await expect(WeedburnEIwoNr1.transfer.call(addresskvYoiZA, uintDwJ47Il, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnOPTXGjU = await Weedburn.new({from: accounts[0]});
		const addresst3lKirx = accounts[2]
		const addressq6Npotp = accounts[4]
		const addressLCYOHj3 = accounts[4]
		const addressbPYbO22 = accounts[1]
		const uintwjOYn7V = BigInt("145")
		const addressJEjNV1E = accounts[1]
		const addressBDyxK16 = accounts[4]
		const uint256N81ddBk = await WeedburnOPTXGjU.allowance.call(addressq6Npotp, addresst3lKirx, {from: accounts[4]});
		const uint256lnPWzj = await WeedburnOPTXGjU.allowance.call(addressbPYbO22, addressLCYOHj3, {from: accounts[0]});
//		await WeedburnOPTXGjU.enableDevMode.call({from: accounts[0]});
//		const boolX2Okdx1 = await WeedburnOPTXGjU.transferFrom.call(addressBDyxK16, addressJEjNV1E, uintwjOYn7V, {from: accounts[1]});
//		await WeedburnOPTXGjU.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256N81ddBk, BigInt("0"))
		assert.equal(uint256lnPWzj, BigInt("0"))
		await expect(WeedburnOPTXGjU.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDKYcjak = await Weedburn.new({from: accounts[1]});
		const addressxJH9cEU = accounts[5]
		const addresse0LCiS7 = accounts[1]
		const uintvfe5KRQ = BigInt("1201")
		const addressAujDQb = accounts[0]
		const uint0uvqBq = BigInt("2036")
		const addressNHv9rGP = accounts[0]
		const uint256zYmOaZo = await WeedburnDKYcjak.allowance.call(addresse0LCiS7, addressxJH9cEU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wuAwuT = await WeedburnDKYcjak.totalSupply.call({from: accounts[3]});
//		const boolLS06s2Q = await WeedburnDKYcjak.decreaseAllowance.call(addressAujDQb, uintvfe5KRQ, {from: accounts[1]});
//		const boolZj34tn = await WeedburnDKYcjak.transfer.call(addressNHv9rGP, uint0uvqBq, {from: accounts[4]});

		assert.equal(uint256wuAwuT, BigInt("100000000000000000000000"))
		assert.equal(uint256zYmOaZo, BigInt("0"))
		await expect(WeedburnDKYcjak.decreaseAllowance.call(addressAujDQb, uintvfe5KRQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnOPTXGjU = await Weedburn.new({from: accounts[0]});
		const addressTgsO3m = accounts[2]
		const addresstTAZw0G = accounts[4]
		const addressY6CByPe = accounts[4]
		const addresstBuMqXv = accounts[1]
		const uintJoIn944 = BigInt("1370")
		const addressAFtYqlo = accounts[5]
		const uintlUMkZlY = BigInt("145")
		const addressgsxb0PK = accounts[1]
		const addresseJBLcly = accounts[4]
		const uint256N81ddBk = await WeedburnOPTXGjU.allowance.call(addresstTAZw0G, addressTgsO3m, {from: accounts[4]});
		const uint256lnPWzj = await WeedburnOPTXGjU.allowance.call(addresstBuMqXv, addressY6CByPe, {from: accounts[0]});
		const boolCPeJrVv = await WeedburnOPTXGjU.increaseAllowance.call(addressAFtYqlo, uintJoIn944, {from: accounts[2]});
//		await WeedburnOPTXGjU.enableDevMode.call({from: accounts[0]});
//		const boolX2Okdx1 = await WeedburnOPTXGjU.transferFrom.call(addresseJBLcly, addressgsxb0PK, uintlUMkZlY, {from: accounts[1]});
//		await WeedburnOPTXGjU.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCPeJrVv, true)
		assert.equal(uint256N81ddBk, BigInt("0"))
		assert.equal(uint256lnPWzj, BigInt("0"))
		await expect(WeedburnOPTXGjU.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWoyUafk = await Weedburn.new({from: accounts[5]});
		const uintcp3nHLO = BigInt("128")
		const address6Go8LH = accounts[4]
		const stringF11LpX0 = await WeedburnWoyUafk.symbol.call({from: accounts[3]});
//		const addressnjClrjo = await WeedburnWoyUafk.burnFrom.call(address6Go8LH, uintcp3nHLO, {from: accounts[5]});
//		const uint256E51ePdi = await WeedburnWoyUafk.totalSupply.call({from: accounts[1]});
//		await WeedburnWoyUafk.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringF11LpX0, "Weedburn")
		await expect(WeedburnWoyUafk.burnFrom.call(address6Go8LH, uintcp3nHLO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDKYcjak = await Weedburn.new({from: accounts[1]});
		const addressm3o8n19 = accounts[5]
		const addresso1GiLLw = accounts[1]
		const uintLkMurpq = BigInt("1769")
		const addressDn2zXrf = "0x0000000000000000000000000000000000000001"
		const uintYRIBL44 = BigInt("2036")
		const addressJt41kek = accounts[0]
//		await WeedburnDKYcjak.disableDevMode.call({from: accounts[0]});
//		const uint256zYmOaZo = await WeedburnDKYcjak.allowance.call(addresso1GiLLw, addressm3o8n19, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqHSOXLB = await WeedburnDKYcjak.increaseAllowance.call(addressDn2zXrf, uintLkMurpq, {from: accounts[3]});
//		const boolZj34tn = await WeedburnDKYcjak.transfer.call(addressJt41kek, uintYRIBL44, {from: accounts[4]});

		await expect(WeedburnDKYcjak.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDKYcjak = await Weedburn.new({from: accounts[1]});
		const uint975kLZ = BigInt("2036")
		const addressJf4yuup = accounts[0]
//		await WeedburnDKYcjak.disableLimitMode.call({from: accounts[1]});
//		const stringQ0AC8zm = await WeedburnDKYcjak.name.call({from: accounts[3]});
//		const boolZj34tn = await WeedburnDKYcjak.transfer.call(addressJf4yuup, uint975kLZ, {from: accounts[4]});

		await expect(WeedburnDKYcjak.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnreJ6KE3 = await Weedburn.new({from: accounts[1]});
		const uintAPoTjPI = BigInt("921")
		const addressOgu6eQY = accounts[5]
		const uinteNSUhut = BigInt("878")
		const addressoFpPDmx = accounts[3]
		const addressNHrfR8v = accounts[1]
		const addressek657NH = accounts[3]
		const uinteRuCnS5 = BigInt("1310")
		const addressSGxIC9C = accounts[0]
		const boolfjxkY3 = await WeedburnreJ6KE3.approve.call(addressOgu6eQY, uintAPoTjPI, {from: accounts[1]});
//		await WeedburnreJ6KE3.disableDevMode.call({from: accounts[0]});
//		const boolrz0phC3 = await WeedburnreJ6KE3.transferFrom.call(addressNHrfR8v, addressoFpPDmx, uinteNSUhut, {from: accounts[1]});
//		await WeedburnreJ6KE3.enableLimitMode.call({from: accounts[0]});
//		await WeedburnreJ6KE3.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint8E6BdQOJ = await WeedburnreJ6KE3.decimals.call({from: accounts[3]});
//		const uint256i735QtY = await WeedburnreJ6KE3.balanceOf.call(addressek657NH, {from: accounts[4]});
//		const boolje9pD5Z = await WeedburnreJ6KE3.increaseAllowance.call(addressSGxIC9C, uinteRuCnS5, {from: accounts[3]});
//		const uint8ol9F9R = await WeedburnreJ6KE3.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfjxkY3, true)
		await expect(WeedburnreJ6KE3.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWj8OpLk = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnTfXBO4 = accounts[1]
		const addresswbU1Xl = accounts[2]
		const uint9dn409 = BigInt("1633")
		const uintJ6tMSxa = BigInt("432")
		const addressXNNvidq = accounts[4]
		const uint256dorydGA = await WeedburnWj8OpLk.allowance.call(addresswbU1Xl, addressnTfXBO4, {from: accounts[1]});
		const uint8RaXND6u = await WeedburnWj8OpLk.decimals.call({from: accounts[3]});
		const uint256OzRMSOV = await WeedburnWj8OpLk.burn.call(uint9dn409, {from: accounts[1]});
		const addressz6L4WZi = await WeedburnWj8OpLk.burnFrom.call(addressXNNvidq, uintJ6tMSxa, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const WeedburnDKYcjak = await Weedburn.new({from: accounts[1]});
		const addresseX365XA = accounts[6]
		const addresszfo0xoJ = accounts[1]
		const uintlNMtb8 = BigInt("994")
		const uintKD1AMGX = BigInt("479")
		const addressaFEVC52 = accounts[4]
		const uint256zYmOaZo = await WeedburnDKYcjak.allowance.call(addresszfo0xoJ, addresseX365XA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WJzHCO = await WeedburnDKYcjak.burn.call(uintlNMtb8, {from: accounts[0]});
//		await WeedburnDKYcjak.disableLimitMode.call({from: accounts[3]});
//		const booljhQgSc = await WeedburnDKYcjak.approve.call(addressaFEVC52, uintKD1AMGX, {from: accounts[0]});

		assert.equal(uint256zYmOaZo, BigInt("0"))
		await expect(WeedburnDKYcjak.burn.call(uintlNMtb8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDKYcjak = await Weedburn.new({from: accounts[1]});
		const addressy2sULLu = accounts[4]
		const uint256MARJKaG = await WeedburnDKYcjak.balanceOf.call(addressy2sULLu, {from: accounts[5]});

		assert.equal(uint256MARJKaG, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnreJ6KE3 = await Weedburn.new({from: accounts[1]});
		const uintrQFNYDk = BigInt("878")
		const addressiC4eDlt = accounts[3]
		const addressWPp8wfn = accounts[1]
		const uintqlo2szW = BigInt("1701")
		const addressvGN9cQN = accounts[2]
		const uintdEuQqp = BigInt("1303")
		const addressFeXdEQY = accounts[0]
//		await WeedburnreJ6KE3.enableLimitMode.call({from: accounts[1]});
//		const boolrz0phC3 = await WeedburnreJ6KE3.transferFrom.call(addressWPp8wfn, addressiC4eDlt, uintrQFNYDk, {from: accounts[1]});
//		await WeedburnreJ6KE3.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qlruCCB = await WeedburnreJ6KE3.burn.call(uintqlo2szW, {from: accounts[4]});
//		const uint256i735QtY = await WeedburnreJ6KE3.balanceOf.call(addressvGN9cQN, {from: accounts[4]});
//		const boolje9pD5Z = await WeedburnreJ6KE3.increaseAllowance.call(addressFeXdEQY, uintdEuQqp, {from: accounts[3]});

		await expect(WeedburnreJ6KE3.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDKYcjak = await Weedburn.new({from: accounts[1]});
		const addressQH28boM = accounts[6]
		const addressS0Lv6Qr = accounts[1]
		const uintCRfPYfQ = BigInt("2036")
		const addressVsy7gDt = accounts[0]
		const uint8u4PwTPv = await WeedburnDKYcjak.decimals.call({from: accounts[5]});
		const uint256zYmOaZo = await WeedburnDKYcjak.allowance.call(addressS0Lv6Qr, addressQH28boM, {from: "0x0000000000000000000000000000000000000001"});
//		await WeedburnDKYcjak.enableDevMode.call({from: accounts[1]});
//		const boolZj34tn = await WeedburnDKYcjak.transfer.call(addressVsy7gDt, uintCRfPYfQ, {from: accounts[4]});

		assert.equal(uint256zYmOaZo, BigInt("0"))
		assert.equal(uint8u4PwTPv, BigInt("18"))
		await expect(WeedburnDKYcjak.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnreJ6KE3 = await Weedburn.new({from: accounts[1]});
		const uintDmTbzFi = BigInt("2033")
		const address7kmMMd = accounts[3]
		const uintyM4n8Lk = BigInt("878")
		const addressXraxI4H = accounts[3]
		const addressO9S0Lcc = accounts[1]
		const boolN62gm4C = await WeedburnreJ6KE3.transfer.call(address7kmMMd, uintDmTbzFi, {from: accounts[1]});
//		await WeedburnreJ6KE3.enableLimitMode.call({from: accounts[3]});
//		const boolrz0phC3 = await WeedburnreJ6KE3.transferFrom.call(addressO9S0Lcc, addressXraxI4H, uintyM4n8Lk, {from: accounts[1]});

		assert.equal(boolN62gm4C, true)
		await expect(WeedburnreJ6KE3.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})