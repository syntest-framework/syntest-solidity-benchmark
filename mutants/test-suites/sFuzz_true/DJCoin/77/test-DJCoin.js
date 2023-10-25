const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinmzAjut = await DJCoin.new({from: accounts[2]});
		const addressE7MgC8C = accounts[2]
		const uinthf8h59b = BigInt("1138")
		const addressCFSW6cy = accounts[0]
		const addressnhAyFEX = "0x0000000000000000000000000000000000000001"
		const uintk2qkUL = BigInt("1016")
		const addressG35LQx = accounts[2]
//		const addressV8xKldG = await DJCoinmzAjut.transferOwnership.call(addressE7MgC8C, {from: accounts[3]});
//		const booliGrb01m = await DJCoinmzAjut.transferFrom.call(addressnhAyFEX, addressCFSW6cy, uinthf8h59b, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfFihphV = await DJCoinmzAjut.approve.call(addressG35LQx, uintk2qkUL, {from: accounts[2]});

		await expect(DJCoinmzAjut.transferOwnership.call(addressE7MgC8C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinWCxBk20 = await DJCoin.new({from: accounts[5]});
		const uintthCVDzu = BigInt("43")
		const addresseWXbdsl = accounts[3]
		const uintl9SymKi = BigInt("1540")
		const addressyMCmbDt = accounts[0]
		const boolXmTd1Q = await DJCoinWCxBk20.changetokensPerBlock.call(uintthCVDzu, {from: accounts[3]});
		const uint256bMcZoG = await DJCoinWCxBk20.balanceOf.call(addresseWXbdsl, {from: accounts[1]});
		const uint256yWPKwkk = await DJCoinWCxBk20.totalSupply.call({from: accounts[3]});
		const uint256FtcrJE5 = await DJCoinWCxBk20.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTRxfaKW = await DJCoinWCxBk20.increaseAllowance.call(addressyMCmbDt, uintl9SymKi, {from: accounts[4]});

		assert.equal(boolTRxfaKW, true)
		assert.equal(boolXmTd1Q, true)
		assert.equal(uint256FtcrJE5, BigInt("2100000000000"))
		assert.equal(uint256bMcZoG, BigInt("0"))
		assert.equal(uint256yWPKwkk, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinIzMYYFO = await DJCoin.new({from: accounts[1]});
		const uintdZAZOa2 = BigInt("695")
		const addresskEr1WJ4 = accounts[1]
		const uintHzHsyZR = BigInt("573")
		const uintbUiVigu = BigInt("1003")
		const boolRCELfy4 = await DJCoinIzMYYFO.decreaseAllowance.call(addresskEr1WJ4, uintdZAZOa2, {from: accounts[3]});
//		await DJCoinIzMYYFO.renounceOwnership.call({from: accounts[1]});
//		const uint256Dm4aW1I = await DJCoinIzMYYFO.burn.call(uintbUiVigu, uintHzHsyZR, {from: accounts[5]});

		assert.equal(boolRCELfy4, true)
		await expect(DJCoinIzMYYFO.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinqsS6AY = await DJCoin.new({from: accounts[1]});
		const uintyRvPMc = BigInt("940")
		const addressr4mwHX8 = accounts[1]
		const addressme4pfcV = accounts[3]
		const uinticy3mYv = BigInt("352")
		const addressaB1nXL = accounts[2]
		const uintQYTK0rA = BigInt("1354")
		const addressDe0TtlV = accounts[3]
		const boolaFuHWah = await DJCoinqsS6AY.transfer.call(addressr4mwHX8, uintyRvPMc, {from: accounts[1]});
//		const addressEX7r44t = await DJCoinqsS6AY.transferOwnership.call(addressme4pfcV, {from: accounts[2]});
//		const boolRIhCwu = await DJCoinqsS6AY.decreaseAllowance.call(addressaB1nXL, uinticy3mYv, {from: accounts[1]});
//		const boolDz2yyMj = await DJCoinqsS6AY.transfer.call(addressDe0TtlV, uintQYTK0rA, {from: accounts[2]});

		assert.equal(boolaFuHWah, true)
		await expect(DJCoinqsS6AY.transferOwnership.call(addressme4pfcV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinfygL3uJ = await DJCoin.new({from: accounts[2]});
		const addressa0f6qi = accounts[1]
		const addressRQmgY6k = accounts[1]
		const uintmlxb0J = BigInt("1255")
		const addressF7FSjP7 = accounts[2]
		const uintVraHfWe = BigInt("1402")
		const addressiCjkqsu = accounts[3]
		const addressoI5nYZ6 = accounts[1]
		const uintljKCKWH = BigInt("267")
		const addressVnsRpot = accounts[2]
		const addressEqQjvSM = accounts[4]
		const uint256t2PqR8z = await DJCoinfygL3uJ.allowance.call(addressRQmgY6k, addressa0f6qi, {from: accounts[0]});
//		const boolDFWHAqm = await DJCoinfygL3uJ.transfer.call(addressF7FSjP7, uintmlxb0J, {from: accounts[0]});
//		const booljdVHpOE = await DJCoinfygL3uJ.transferFrom.call(addressoI5nYZ6, addressiCjkqsu, uintVraHfWe, {from: accounts[3]});
//		const booljWRaal = await DJCoinfygL3uJ.transfer.call(addressVnsRpot, uintljKCKWH, {from: accounts[1]});
//		const uint256iIMcJQw = await DJCoinfygL3uJ.balanceOf.call(addressEqQjvSM, {from: accounts[4]});
//		await DJCoinfygL3uJ.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256t2PqR8z, BigInt("0"))
		await expect(DJCoinfygL3uJ.transfer.call(addressF7FSjP7, uintmlxb0J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinm2aC02U = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintm38pnft = BigInt("1308")
		const addressJciviCX = accounts[0]
		const uintJVLRind = BigInt("1862")
		const addressO4nJrJN = accounts[2]
		const addressGQTRwwq = accounts[0]
		const addressDsTwXtY = accounts[3]
		const addressFqSxdK1 = accounts[2]
		const boolkSZPfK5 = await DJCoinm2aC02U.increaseAllowance.call(addressJciviCX, uintm38pnft, {from: accounts[5]});
		const boolTLgZ64Z = await DJCoinm2aC02U.transferFrom.call(addressGQTRwwq, addressO4nJrJN, uintJVLRind, {from: accounts[0]});
		const uint256uKJLtaj = await DJCoinm2aC02U.balanceOf.call(addressDsTwXtY, {from: accounts[1]});
		const uint256R0zhijH = await DJCoinm2aC02U.balanceOf.call(addressFqSxdK1, {from: accounts[2]});
	});

	it('test for DJCoin', async () => {
		const DJCoinflbto2k = await DJCoin.new({from: accounts[1]});
		const uint0yNORI = BigInt("1386")
		const addressgK2UNXd = accounts[0]
		const addressrT5BIuj = accounts[1]
		const uintFG91rJg = BigInt("434")
		const uintV1aDlaJ = BigInt("1464")
		const boolwlnGjJ1 = await DJCoinflbto2k.approve.call(addressgK2UNXd, uint0yNORI, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZ75Hq7x = await DJCoinflbto2k.validRecipient.call(addressrT5BIuj, {from: accounts[4]});
//		const uint256wzqDEam = await DJCoinflbto2k.burn.call(uintV1aDlaJ, uintFG91rJg, {from: accounts[1]});
//		await DJCoinflbto2k.renounceOwnership.call({from: accounts[0]});
//		const addressCaVna2I = await DJCoinflbto2k.owner.call({from: accounts[4]});

		assert.equal(boolwlnGjJ1, true)
		await expect(DJCoinflbto2k.validRecipient.call(addressrT5BIuj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinr1Br97r = await DJCoin.new({from: accounts[2]});
		const uintnTrCdyJ = BigInt("237")
		const addresslHgvuM7 = accounts[0]
		const addressgAvEG0d = accounts[5]
		const uintj8v5Ctz = BigInt("457")
		const addresstNfoCOS = accounts[1]
		const uintjPIMY4Y = BigInt("746")
		const addressSLOefq = accounts[3]
		const addressPGA8ynF = accounts[3]
//		const boolxcoL4ko = await DJCoinr1Br97r.transferFrom.call(addressgAvEG0d, addresslHgvuM7, uintnTrCdyJ, {from: accounts[2]});
//		const boolRvpdcUG = await DJCoinr1Br97r.approve.call(addresstNfoCOS, uintj8v5Ctz, {from: accounts[2]});
//		const boolmDj3GzC = await DJCoinr1Br97r.transferFrom.call(addressPGA8ynF, addressSLOefq, uintjPIMY4Y, {from: accounts[2]});

		await expect(DJCoinr1Br97r.transferFrom.call(addressgAvEG0d, addresslHgvuM7, uintnTrCdyJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin8IpPXq = await DJCoin.new({from: accounts[0]});
		const uintaKHNZ92 = BigInt("578")
		const addresszsJm9OK = accounts[4]
		const addressUFcSPvM = await DJCoin8IpPXq.owner.call({from: accounts[3]});
//		const boolJuoe4vJ = await DJCoin8IpPXq.transfer.call(addresszsJm9OK, uintaKHNZ92, {from: accounts[1]});

		assert.equal(addressUFcSPvM, 0xc34854e009CCf323E2728A4fB446CBD1abeC6272)
		await expect(DJCoin8IpPXq.transfer.call(addresszsJm9OK, uintaKHNZ92, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin8IpPXq = await DJCoin.new({from: accounts[0]});
		const uints3sA5a = BigInt("1790")
		const uintYPCXWK9 = BigInt("320")
		const uintCtavRo6 = BigInt("588")
		const addressyKAZD93 = accounts[4]
		const uint256rtAs7Qs = await DJCoin8IpPXq.burn.call(uintYPCXWK9, uints3sA5a, {from: accounts[0]});
//		await DJCoin8IpPXq.renounceOwnership.call({from: accounts[3]});
//		const boolJuoe4vJ = await DJCoin8IpPXq.transfer.call(addressyKAZD93, uintCtavRo6, {from: accounts[1]});

		assert.equal(uint256rtAs7Qs, BigInt("1724100000000"))
		await expect(DJCoin8IpPXq.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin8IpPXq = await DJCoin.new({from: accounts[0]});
		const addressQtOdXR = accounts[4]
		const uintHp6A7vl = BigInt("576")
		const addresseb5u7DX = accounts[4]
		const addressI4U70oG = await DJCoin8IpPXq.transferOwnership.call(addressQtOdXR, {from: accounts[0]});
//		const boolJuoe4vJ = await DJCoin8IpPXq.transfer.call(addresseb5u7DX, uintHp6A7vl, {from: accounts[1]});

		await expect(DJCoin8IpPXq.transfer.call(addresseb5u7DX, uintHp6A7vl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin8IpPXq = await DJCoin.new({from: accounts[0]});
		const uintntz993x = BigInt("0")
		const addressSVU7ibh = "0x0000000000000000000000000000000000000002"
		const boolUV9NDP = await DJCoin8IpPXq.transfer.call(addressSVU7ibh, uintntz993x, {from: accounts[2]});

		assert.equal(boolUV9NDP, true)
	});
})