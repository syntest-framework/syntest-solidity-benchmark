const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintToMqyEJ = BigInt("405")
		const address83ffUp = accounts[4]
		const addressVXSfMGv = accounts[2]
		const uintrjifmTo = BigInt("1408")
		const addressGSlI8S6 = accounts[3]
		const uintK8sN3s = BigInt("71")
		const addressmEbDRP0 = accounts[2]
//		const boolv6JVsuB = await WeedburnG1CR981.transferFrom.call(addressVXSfMGv, address83ffUp, uintToMqyEJ, {from: accounts[0]});
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addressGSlI8S6, uintrjifmTo, {from: accounts[1]});
//		const boolNILOh7d = await WeedburnG1CR981.approve.call(addressmEbDRP0, uintK8sN3s, {from: accounts[3]});

		await expect(WeedburnG1CR981.transferFrom.call(addressVXSfMGv, address83ffUp, uintToMqyEJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburn9p8yon = await Weedburn.new({from: accounts[4]});
		const uintAMi6vYv = BigInt("1491")
		const addressDtrdKv = accounts[5]
		const uintm4urMiW = BigInt("1456")
		const address47LZA2 = accounts[5]
//		await Weedburn9p8yon.enableLimitMode.call({from: accounts[1]});
//		const boolw3cz26Q = await Weedburn9p8yon.transfer.call(addressDtrdKv, uintAMi6vYv, {from: accounts[2]});
//		const addressx5apJ7l = await Weedburn9p8yon.burnFrom.call(address47LZA2, uintm4urMiW, {from: accounts[3]});
//		const stringsp4XMM5 = await Weedburn9p8yon.symbol.call({from: accounts[2]});

		await expect(Weedburn9p8yon.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringu2fIOET = "HvajEdGoQMBkY"
		const stringEXH8DJ5 = "SRdooCsmIgW4Xg3v9a1TpSXRRfOVU1aM2oKRNYgSztqav"
		const uintKdC0e4m = BigInt("182")
		const WeedburnZnFFxsm = await Weedburn.new(stringu2fIOET, stringEXH8DJ5, uintKdC0e4m, {from: accounts[0]});
		const uintjk4NSMu = BigInt("157")
		const addressJ2cDSjx = accounts[4]
		const uintB9lUFgH = BigInt("90")
		const addresseF1C9vT = accounts[5]
		const uint256m244Oqu = await WeedburnZnFFxsm.totalSupply.call({from: accounts[0]});
		const boolm9MejOD = await WeedburnZnFFxsm.decreaseAllowance.call(addressJ2cDSjx, uintjk4NSMu, {from: accounts[4]});
		const boolx6WFcDr = await WeedburnZnFFxsm.transfer.call(addresseF1C9vT, uintB9lUFgH, {from: accounts[3]});
		const uint256wgRAuNS = await WeedburnZnFFxsm.totalSupply.call({from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnSyAsY6P = await Weedburn.new({from: accounts[1]});
		const uintIPezd8S = BigInt("1965")
		const addressn4f1Tjk = accounts[1]
		const addresszSOP7x = accounts[4]
		const uintX5MiS6i = BigInt("1172")
		const address9fK49D = accounts[3]
//		await WeedburnSyAsY6P.enableDevMode.call({from: accounts[0]});
//		const boolTCW0WGc = await WeedburnSyAsY6P.decreaseAllowance.call(addressn4f1Tjk, uintIPezd8S, {from: accounts[3]});
//		const uint256CcXGQlO = await WeedburnSyAsY6P.balanceOf.call(addresszSOP7x, {from: accounts[0]});
//		const boolIqjaOIS = await WeedburnSyAsY6P.approve.call(address9fK49D, uintX5MiS6i, {from: accounts[2]});

		await expect(WeedburnSyAsY6P.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnP2vFfWw = await Weedburn.new({from: accounts[1]});
		const uinteZM7Mxs = BigInt("1911")
		const addressPsbUMxo = accounts[2]
		const uintJQ8S3pN = BigInt("1080")
		const addressaNd7ARI = "0x0000000000000000000000000000000000000001"
//		const addressZCf02sU = await WeedburnP2vFfWw.burnFrom.call(addressPsbUMxo, uinteZM7Mxs, {from: accounts[4]});
//		const boolZrKQZpw = await WeedburnP2vFfWw.transfer.call(addressaNd7ARI, uintJQ8S3pN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnP2vFfWw.burnFrom.call(addressPsbUMxo, uinteZM7Mxs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZXgf1H4 = await Weedburn.new({from: accounts[4]});
		const uintbCbssw3 = BigInt("1077")
		const addressgsulvvk = accounts[4]
		const stringHY8rYa = await WeedburnZXgf1H4.name.call({from: accounts[2]});
//		const boolIoow7SP = await WeedburnZXgf1H4.decreaseAllowance.call(addressgsulvvk, uintbCbssw3, {from: accounts[2]});
//		await WeedburnZXgf1H4.enableDevMode.call({from: accounts[5]});
//		await WeedburnZXgf1H4.enableDevMode.call({from: accounts[0]});

		assert.equal(stringHY8rYa, "t.me/burnweed1")
		await expect(WeedburnZXgf1H4.decreaseAllowance.call(addressgsulvvk, uintbCbssw3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburn9p8yon = await Weedburn.new({from: accounts[4]});
		const addresslgspTd = accounts[1]
		const addresshKlMwey = accounts[5]
		const uintJx86cMg = BigInt("1491")
		const addressbNmbXKg = accounts[5]
		const uintd9YubKs = BigInt("1456")
		const addressZOEJFs = accounts[6]
		const uint256oaF2wXF = await Weedburn9p8yon.allowance.call(addresshKlMwey, addresslgspTd, {from: accounts[3]});
//		await Weedburn9p8yon.enableLimitMode.call({from: accounts[1]});
//		const boolw3cz26Q = await Weedburn9p8yon.transfer.call(addressbNmbXKg, uintJx86cMg, {from: accounts[2]});
//		const addressx5apJ7l = await Weedburn9p8yon.burnFrom.call(addressZOEJFs, uintd9YubKs, {from: accounts[3]});
//		const stringsp4XMM5 = await Weedburn9p8yon.symbol.call({from: accounts[2]});

		assert.equal(uint256oaF2wXF, BigInt("0"))
		await expect(Weedburn9p8yon.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uint1RMV97 = BigInt("1173")
		const addressAM3ehT = accounts[2]
		const addressj2HplT = accounts[0]
		const uintFXPJ1Kw = BigInt("1128")
		const addressAA5sPGe = accounts[3]
		const uintJEHfMct = BigInt("405")
		const addressLGA2Q0i = accounts[4]
		const addressN6mrcuX = accounts[2]
		const uintHKiHXMK = BigInt("1408")
		const addressYqsqya = accounts[3]
		const uintAGUndGU = BigInt("71")
		const addressF1gYiMx = accounts[2]
		const boolgVuBHX = await WeedburnG1CR981.increaseAllowance.call(addressAM3ehT, uint1RMV97, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sMwic1D = await WeedburnG1CR981.balanceOf.call(addressj2HplT, {from: accounts[3]});
//		const addressyQaRYx = await WeedburnG1CR981.burnFrom.call(addressAA5sPGe, uintFXPJ1Kw, {from: accounts[0]});
//		const boolv6JVsuB = await WeedburnG1CR981.transferFrom.call(addressN6mrcuX, addressLGA2Q0i, uintJEHfMct, {from: accounts[0]});
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addressYqsqya, uintHKiHXMK, {from: accounts[1]});
//		const boolNILOh7d = await WeedburnG1CR981.approve.call(addressF1gYiMx, uintAGUndGU, {from: accounts[3]});

		assert.equal(boolgVuBHX, true)
		assert.equal(uint256sMwic1D, BigInt("0"))
		await expect(WeedburnG1CR981.burnFrom.call(addressAA5sPGe, uintFXPJ1Kw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uint2r5AzQ = BigInt("1408")
		const addressP6IRCFt = accounts[3]
		const uintn2Suv3 = BigInt("71")
		const addresslZNwkSJ = accounts[2]
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addressP6IRCFt, uint2r5AzQ, {from: accounts[1]});
//		const boolNILOh7d = await WeedburnG1CR981.approve.call(addresslZNwkSJ, uintn2Suv3, {from: accounts[3]});

		await expect(WeedburnG1CR981.transfer.call(addressP6IRCFt, uint2r5AzQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintH4NhTwK = BigInt("546")
		const uintImvE7IH = BigInt("1408")
		const addresswpw2mZr = accounts[3]
		const uinttDjrrcE = BigInt("71")
		const addresso9cbcX9 = accounts[3]
//		const uint256syBmfPK = await WeedburnG1CR981.burn.call(uintH4NhTwK, {from: accounts[0]});
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addresswpw2mZr, uintImvE7IH, {from: accounts[1]});
//		await WeedburnG1CR981.disableLimitMode.call({from: accounts[3]});
//		const boolNILOh7d = await WeedburnG1CR981.approve.call(addresso9cbcX9, uinttDjrrcE, {from: accounts[3]});
//		const uint256tcvUD4M = await WeedburnG1CR981.totalSupply.call({from: accounts[5]});

		await expect(WeedburnG1CR981.burn.call(uintH4NhTwK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnm463klH = await Weedburn.new({from: accounts[2]});
		const uintlYn71c1 = BigInt("1326")
		const addressfTMcvAr = accounts[2]
		const addressZWJhgqv = accounts[0]
		const uintOxIWgLD = BigInt("927")
		const addressxlxgrhd = accounts[4]
		const uintvUMPsM = BigInt("1474")
		const addressn1yQ4Op = accounts[0]
		const uint256dTtghTT = await Weedburnm463klH.totalSupply.call({from: accounts[4]});
//		const boolUTX18H = await Weedburnm463klH.transferFrom.call(addressZWJhgqv, addressfTMcvAr, uintlYn71c1, {from: accounts[2]});
//		const boolzUhV0wD = await Weedburnm463klH.transfer.call(addressxlxgrhd, uintOxIWgLD, {from: accounts[3]});
//		const addressqnReFve = await Weedburnm463klH.burnFrom.call(addressn1yQ4Op, uintvUMPsM, {from: accounts[4]});

		assert.equal(uint256dTtghTT, BigInt("100000000000000000000000"))
		await expect(Weedburnm463klH.transferFrom.call(addressZWJhgqv, addressfTMcvAr, uintlYn71c1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintJbtHzYU = BigInt("71")
		const addressphsz6cr = accounts[2]
		const boolNILOh7d = await WeedburnG1CR981.approve.call(addressphsz6cr, uintJbtHzYU, {from: accounts[3]});

		assert.equal(boolNILOh7d, true)
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintQ90iOUi = BigInt("405")
		const addressxMuBM4 = accounts[2]
		const addressdiUMtr = accounts[3]
		const uintFJQXHse = BigInt("592")
		const uint8pwwwX9o = await WeedburnG1CR981.decimals.call({from: accounts[3]});
//		const boolv6JVsuB = await WeedburnG1CR981.transferFrom.call(addressdiUMtr, addressxMuBM4, uintQ90iOUi, {from: accounts[0]});
//		const uint256F0DfJ2D = await WeedburnG1CR981.burn.call(uintFJQXHse, {from: accounts[0]});

		assert.equal(uint8pwwwX9o, BigInt("18"))
		await expect(WeedburnG1CR981.transferFrom.call(addressdiUMtr, addressxMuBM4, uintQ90iOUi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnok6ACBs = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uint8ehnglgi = await Weedburnok6ACBs.decimals.call({from: accounts[2]});
		const uint8xf9Q6UH = await Weedburnok6ACBs.decimals.call({from: accounts[4]});
		await Weedburnok6ACBs.disableDevMode.call({from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintSq9OqgO = BigInt("442")
		const addresslRwC48L = "0x0000000000000000000000000000000000000001"
		const address0vKNBS = accounts[4]
		const uintYgZFDfU = BigInt("546")
		const uintH3mqdIO = BigInt("1408")
		const addressqqU9IeM = accounts[3]
//		const boolLz84iac = await WeedburnG1CR981.transferFrom.call(address0vKNBS, addresslRwC48L, uintSq9OqgO, {from: accounts[5]});
//		const uint256syBmfPK = await WeedburnG1CR981.burn.call(uintYgZFDfU, {from: accounts[0]});
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addressqqU9IeM, uintH3mqdIO, {from: accounts[1]});
//		await WeedburnG1CR981.disableLimitMode.call({from: accounts[3]});
//		await WeedburnG1CR981.enableLimitMode.call({from: accounts[0]});

		await expect(WeedburnG1CR981.transferFrom.call(address0vKNBS, addresslRwC48L, uintSq9OqgO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnP2vFfWw = await Weedburn.new({from: accounts[1]});
		const uintfKwOHhl = BigInt("2003")
		const addressUD8QLSZ = accounts[2]
		const uintCrLkqJz = BigInt("827")
		const addressBXOApt = accounts[2]
		const boolT7EH4en = await WeedburnP2vFfWw.transfer.call(addressUD8QLSZ, uintfKwOHhl, {from: accounts[1]});
//		const addressZCf02sU = await WeedburnP2vFfWw.burnFrom.call(addressBXOApt, uintCrLkqJz, {from: accounts[4]});
//		const stringvzANKs = await WeedburnP2vFfWw.symbol.call({from: accounts[1]});

		assert.equal(boolT7EH4en, true)
		await expect(WeedburnP2vFfWw.burnFrom.call(addressBXOApt, uintCrLkqJz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const addresszn0KJ61 = accounts[0]
		const addressHA2T1z2 = accounts[5]
		const uintCHW9Bv5 = BigInt("428")
		const addressGkySHUl = accounts[2]
		const addresswzzfRIe = accounts[2]
		const uint256mvmv6uH = await WeedburnG1CR981.totalSupply.call({from: accounts[4]});
		const uint256ONPFHxv = await WeedburnG1CR981.allowance.call(addressHA2T1z2, addresszn0KJ61, {from: accounts[0]});
//		await WeedburnG1CR981.disableLimitMode.call({from: accounts[0]});
//		const boolv6JVsuB = await WeedburnG1CR981.transferFrom.call(addresswzzfRIe, addressGkySHUl, uintCHW9Bv5, {from: accounts[0]});

		assert.equal(uint256ONPFHxv, BigInt("0"))
		assert.equal(uint256mvmv6uH, BigInt("100000000000000000000000"))
		await expect(WeedburnG1CR981.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintmvJpeok = BigInt("1408")
		const addressoFGJqO5 = accounts[4]
		const stringmRAHBZp = await WeedburnG1CR981.symbol.call({from: accounts[3]});
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addressoFGJqO5, uintmvJpeok, {from: accounts[1]});
//		const uint2561a99Fv = await WeedburnG1CR981.totalSupply.call({from: accounts[0]});

		assert.equal(stringmRAHBZp, "Weedburn")
		await expect(WeedburnG1CR981.transfer.call(addressoFGJqO5, uintmvJpeok, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintY5AWWTU = BigInt("442")
		const addressHgGsOL6 = "0x0000000000000000000000000000000000000001"
		const addressslIUCW = accounts[4]
		const uintICMdE1 = BigInt("546")
		const uintjo4aRaF = BigInt("1408")
		const addressumRbTTu = accounts[3]
		const stringipDyJQD = await WeedburnG1CR981.symbol.call({from: accounts[4]});
//		await WeedburnG1CR981.disableDevMode.call({from: accounts[0]});
//		const boolLz84iac = await WeedburnG1CR981.transferFrom.call(addressslIUCW, addressHgGsOL6, uintY5AWWTU, {from: accounts[5]});
//		const uint256syBmfPK = await WeedburnG1CR981.burn.call(uintICMdE1, {from: accounts[0]});
//		const booloPw6umR = await WeedburnG1CR981.transfer.call(addressumRbTTu, uintjo4aRaF, {from: accounts[1]});
//		await WeedburnG1CR981.disableLimitMode.call({from: accounts[3]});
//		await WeedburnG1CR981.enableLimitMode.call({from: accounts[0]});

		assert.equal(stringipDyJQD, "Weedburn")
		await expect(WeedburnG1CR981.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnP2vFfWw = await Weedburn.new({from: accounts[1]});
		const uinto9SYrAU = BigInt("669")
		const uintXxmAKz = BigInt("663")
		const addressRwPV3T7 = accounts[1]
		const addressJ0JIWaS = accounts[0]
		const uintGxtmsFj = BigInt("1855")
		const addressMCPA7hq = accounts[2]
		const uint256S3OyeC5 = await WeedburnP2vFfWw.burn.call(uinto9SYrAU, {from: accounts[1]});
//		const boolHMetxWq = await WeedburnP2vFfWw.transferFrom.call(addressJ0JIWaS, addressRwPV3T7, uintXxmAKz, {from: accounts[1]});
//		const addressZCf02sU = await WeedburnP2vFfWw.burnFrom.call(addressMCPA7hq, uintGxtmsFj, {from: accounts[4]});

		await expect(WeedburnP2vFfWw.transferFrom.call(addressJ0JIWaS, addressRwPV3T7, uintXxmAKz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG1CR981 = await Weedburn.new({from: accounts[4]});
		const uintraZPeUX = BigInt("471")
		const addressEyx3CqV = "0x00000000000000000000000000000000000000-1"
		const addressPPRF8t7 = accounts[4]
//		const boolLz84iac = await WeedburnG1CR981.transferFrom.call(addressPPRF8t7, addressEyx3CqV, uintraZPeUX, {from: accounts[5]});
//		const uint256EDRDEGg = await WeedburnG1CR981.totalSupply.call({from: accounts[4]});
//		await WeedburnG1CR981.enableDevMode.call({from: accounts[3]});

		await expect(WeedburnG1CR981.transferFrom.call(addressPPRF8t7, addressEyx3CqV, uintraZPeUX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})