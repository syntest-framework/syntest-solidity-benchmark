const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinIBSWa7d = await DJCoin.new({from: accounts[1]});
		const uintsKzLLDV = BigInt("1973")
		const addressI8ruOEL = accounts[4]
		const addressgqcghQ0 = "0x0000000000000000000000000000000000000001"
		const uintqvjcKXM = BigInt("172")
		const uintUqFh7nF = BigInt("1407")
//		await DJCoinIBSWa7d.onlyOwner.call({from: accounts[3]});
//		const boolJCvRE2H = await DJCoinIBSWa7d.transferFrom.call(addressgqcghQ0, addressI8ruOEL, uintsKzLLDV, {from: accounts[3]});
//		const uint256ADdGED = await DJCoinIBSWa7d.burn.call(uintUqFh7nF, uintqvjcKXM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinIBSWa7d.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinsFi7MEP = await DJCoin.new({from: accounts[1]});
		const addressCnInAkE = accounts[4]
		const addressSNvVSwn = accounts[3]
		const uintMmdM0q5 = BigInt("1043")
		const addressENl1s8F = accounts[5]
		const addressguvNm3h = accounts[3]
//		const addresslVLeoDw = await DJCoinsFi7MEP.transferOwnership.call(addressCnInAkE, {from: accounts[3]});
//		const addressX4dUWW = await DJCoinsFi7MEP.transferOwnership.call(addressSNvVSwn, {from: accounts[0]});
//		await DJCoinsFi7MEP.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZO4jbfq = await DJCoinsFi7MEP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256QUWz0ek = await DJCoinsFi7MEP.totalSupply.call({from: accounts[1]});
//		const boolxdxxRV4 = await DJCoinsFi7MEP.transferFrom.call(addressguvNm3h, addressENl1s8F, uintMmdM0q5, {from: accounts[2]});

		await expect(DJCoinsFi7MEP.transferOwnership.call(addressCnInAkE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoindrCtIkD = await DJCoin.new({from: accounts[0]});
		const uintQR10g7a = BigInt("1874")
		const addressGd4JCCi = "0x0000000000000000000000000000000000000001"
		const addressF4S7Zbi = accounts[4]
		const addressS9A7VbP = accounts[0]
		const addressyjXq8BY = accounts[0]
//		const boolndrKgfA = await DJCoindrCtIkD.transfer.call(addressGd4JCCi, uintQR10g7a, {from: accounts[2]});
//		const addressydupebL = await DJCoindrCtIkD.transferOwnership.call(addressF4S7Zbi, {from: accounts[2]});
//		const uint256fAe2hbs = await DJCoindrCtIkD.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256UbpFdc = await DJCoindrCtIkD.allowance.call(addressyjXq8BY, addressS9A7VbP, {from: accounts[0]});
//		const uint256UQ7wHZn = await DJCoindrCtIkD.totalSupply.call({from: accounts[4]});

		await expect(DJCoindrCtIkD.transfer.call(addressGd4JCCi, uintQR10g7a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintlPKwzQK = BigInt("930")
		const addressY7ofiEi = accounts[2]
		const uintsrGP8iR = BigInt("577")
		const addressOZ4InTD = accounts[4]
		const uintNmvD1F4 = BigInt("1070")
		const addressBi6HNB = accounts[1]
		const boolwWSJ5xu = await DJCoinOjIPB6y.increaseAllowance.call(addressY7ofiEi, uintlPKwzQK, {from: accounts[3]});
		const boolt4Vrxl9 = await DJCoinOjIPB6y.transfer.call(addressOZ4InTD, uintsrGP8iR, {from: accounts[1]});
//		const boolKkHpo4o = await DJCoinOjIPB6y.transfer.call(addressBi6HNB, uintNmvD1F4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolt4Vrxl9, true)
		assert.equal(boolwWSJ5xu, true)
		await expect(DJCoinOjIPB6y.transfer.call(addressBi6HNB, uintNmvD1F4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinNgsqvW = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvifN5Oo = BigInt("527")
		const uintHTaekG9 = BigInt("1497")
		const addressCE3U1Lq = accounts[1]
		const addressuwAxxOQ = accounts[1]
		const uint256irexyC = await DJCoinNgsqvW.burn.call(uintHTaekG9, uintvifN5Oo, {from: accounts[1]});
		const addressk948pkA = await DJCoinNgsqvW.validRecipient.call(addressCE3U1Lq, {from: accounts[1]});
		const addressqYpqIvk = await DJCoinNgsqvW.transferOwnership.call(addressuwAxxOQ, {from: accounts[5]});
		await DJCoinNgsqvW.onlyOwner.call({from: accounts[4]});
		await DJCoinNgsqvW.renounceOwnership.call({from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoinafdTu5a = await DJCoin.new({from: accounts[2]});
		const addressWnSq8Kk = accounts[4]
		const addressxuk9m6H = accounts[2]
		const uintomFr6H = BigInt("543")
		const uintcuA3ZPN = BigInt("860")
		const uintMPLJPK = BigInt("1388")
		const addressRYeoh7F = accounts[2]
		const uintMXQPL9V = BigInt("679")
		const addressjOk0Um5 = accounts[4]
		const uintc4SOybp = BigInt("65")
		const address6vOMkJ = accounts[2]
		const uint256WxHaNXv = await DJCoinafdTu5a.balanceOf.call(addressWnSq8Kk, {from: accounts[2]});
//		const addressPGl5pIz = await DJCoinafdTu5a.transferOwnership.call(addressxuk9m6H, {from: accounts[0]});
//		const addressdaIW08E = await DJCoinafdTu5a.owner.call({from: accounts[0]});
//		const uint256BYJO8AS = await DJCoinafdTu5a.burn.call(uintcuA3ZPN, uintomFr6H, {from: accounts[3]});
//		const boolAxjZowI = await DJCoinafdTu5a.decreaseAllowance.call(addressRYeoh7F, uintMPLJPK, {from: accounts[4]});
//		const booli6vjcXw = await DJCoinafdTu5a.increaseAllowance.call(addressjOk0Um5, uintMXQPL9V, {from: accounts[1]});
//		const uint256YJ03qjZ = await DJCoinafdTu5a.totalSupply.call({from: accounts[0]});
//		const boolB0nrU5X = await DJCoinafdTu5a.increaseAllowance.call(address6vOMkJ, uintc4SOybp, {from: accounts[4]});

		assert.equal(uint256WxHaNXv, BigInt("0"))
		await expect(DJCoinafdTu5a.transferOwnership.call(addressxuk9m6H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintNuO4iVt = BigInt("930")
		const addressoBWcszl = accounts[2]
		const uinthT4M8Oy = BigInt("2042")
		const addressiJFecT = accounts[0]
		const addresstIe9sPp = accounts[1]
		const uintrZLX3Up = BigInt("577")
		const addressJops724 = accounts[4]
		const uinttzaLT9 = BigInt("496")
		const addresssDY7FqH = accounts[4]
		const uintsTC4Xvt = BigInt("1079")
		const addresscnEW82V = accounts[1]
		const boolwWSJ5xu = await DJCoinOjIPB6y.increaseAllowance.call(addressoBWcszl, uintNuO4iVt, {from: accounts[3]});
		const boolfe3ULPe = await DJCoinOjIPB6y.approve.call(addressiJFecT, uinthT4M8Oy, {from: accounts[0]});
//		const addresslPFCSJ = await DJCoinOjIPB6y.transferOwnership.call(addresstIe9sPp, {from: accounts[4]});
//		const boolt4Vrxl9 = await DJCoinOjIPB6y.transfer.call(addressJops724, uintrZLX3Up, {from: accounts[1]});
//		const booljd93hhl = await DJCoinOjIPB6y.approve.call(addresssDY7FqH, uinttzaLT9, {from: accounts[2]});
//		const boolKkHpo4o = await DJCoinOjIPB6y.transfer.call(addresscnEW82V, uintsTC4Xvt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfe3ULPe, true)
		assert.equal(boolwWSJ5xu, true)
		await expect(DJCoinOjIPB6y.transferOwnership.call(addresstIe9sPp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinvyyztpE = await DJCoin.new({from: accounts[4]});
		const uintrhwXIjG = BigInt("76")
		const addresswRP9fLV = accounts[2]
		const addressWiF7aPG = accounts[2]
		const uint256WNE65gQ = await DJCoinvyyztpE.totalSupply.call({from: accounts[3]});
		const uint256hBoaQ5i = await DJCoinvyyztpE.totalSupply.call({from: accounts[5]});
//		const boolUFe6HR3 = await DJCoinvyyztpE.transferFrom.call(addressWiF7aPG, addresswRP9fLV, uintrhwXIjG, {from: accounts[3]});

		assert.equal(uint256WNE65gQ, BigInt("2100000000000"))
		assert.equal(uint256hBoaQ5i, BigInt("2100000000000"))
		await expect(DJCoinvyyztpE.transferFrom.call(addressWiF7aPG, addresswRP9fLV, uintrhwXIjG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintnfWVVoD = BigInt("1515")
		const addresszaMISLw = accounts[4]
		const uintRKdHHyz = BigInt("930")
		const addressHj8AvDC = accounts[2]
		const uintIw8lx7 = BigInt("577")
		const addressk8s0lNL = accounts[5]
		const uintzknmZO8 = BigInt("1070")
		const addressvXAcoY8 = accounts[1]
		const boolUcBrN8T = await DJCoinOjIPB6y.approve.call(addresszaMISLw, uintnfWVVoD, {from: accounts[3]});
		const boolwWSJ5xu = await DJCoinOjIPB6y.increaseAllowance.call(addressHj8AvDC, uintRKdHHyz, {from: accounts[3]});
		const addressnelEyFV = await DJCoinOjIPB6y.owner.call({from: accounts[4]});
		const boolt4Vrxl9 = await DJCoinOjIPB6y.transfer.call(addressk8s0lNL, uintIw8lx7, {from: accounts[1]});
//		const boolKkHpo4o = await DJCoinOjIPB6y.transfer.call(addressvXAcoY8, uintzknmZO8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressnelEyFV, 0xf598279Df3f4f1A6bD2f7557aAA38a9782bD0A77)
		assert.equal(boolUcBrN8T, true)
		assert.equal(boolt4Vrxl9, true)
		assert.equal(boolwWSJ5xu, true)
		await expect(DJCoinOjIPB6y.transfer.call(addressvXAcoY8, uintzknmZO8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintk7VaRzz = BigInt("932")
		const addresslpN5pPN = accounts[2]
		const uintBWcIAz1 = BigInt("1172")
		const uint9mwAKW = BigInt("534")
		const addresscfVIKQL = accounts[4]
		const uintfyrdS4A = BigInt("283")
		const addressOiqtegm = accounts[2]
		const uinthaY1KV = BigInt("1070")
		const addressMXaZi5a = accounts[1]
		const uintbtpDJ8v = BigInt("1640")
		const addressiJrme7q = accounts[2]
		const addressEqI9AMd = "0x0000000000000000000000000000000000000001"
		const boolwWSJ5xu = await DJCoinOjIPB6y.increaseAllowance.call(addresslpN5pPN, uintk7VaRzz, {from: accounts[3]});
		const boolm2lqLWU = await DJCoinOjIPB6y.changetokensPerBlock.call(uintBWcIAz1, {from: "0x0000000000000000000000000000000000000001"});
		const bool41WQj5 = await DJCoinOjIPB6y.increaseAllowance.call(addresscfVIKQL, uint9mwAKW, {from: accounts[0]});
//		const boolIRuNHf5 = await DJCoinOjIPB6y.transfer.call(addressOiqtegm, uintfyrdS4A, {from: accounts[3]});
//		await DJCoinOjIPB6y.renounceOwnership.call({from: accounts[2]});
//		const boolKkHpo4o = await DJCoinOjIPB6y.transfer.call(addressMXaZi5a, uinthaY1KV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolplZMsy = await DJCoinOjIPB6y.transfer.call(addressiJrme7q, uintbtpDJ8v, {from: accounts[3]});
//		const addressD01FmI2 = await DJCoinOjIPB6y.transferOwnership.call(addressEqI9AMd, {from: accounts[4]});

		assert.equal(bool41WQj5, true)
		assert.equal(boolm2lqLWU, true)
		assert.equal(boolwWSJ5xu, true)
		await expect(DJCoinOjIPB6y.transfer.call(addressOiqtegm, uintfyrdS4A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCointPGqs7h = await DJCoin.new({from: accounts[4]});
		const uintDzaA3zj = BigInt("698")
		const address82eqWG = accounts[2]
		const addressNEs1dAh = accounts[0]
		const addressSCAIDvu = await DJCointPGqs7h.owner.call({from: accounts[5]});
		const boolY9Ajyy8 = await DJCointPGqs7h.approve.call(address82eqWG, uintDzaA3zj, {from: accounts[0]});
		const addressIg0oX8C = await DJCointPGqs7h.transferOwnership.call(addressNEs1dAh, {from: accounts[4]});

		assert.equal(addressSCAIDvu, 0x41ce9D6f9BfDb6B0b114bc38aDA5E5dDFE01b0EF)
		assert.equal(boolY9Ajyy8, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintQ5tWcvE = BigInt("930")
		const addressKBbRbPF = accounts[2]
		const addresslHdyro = accounts[3]
		const addresswI7oEcy = "0x0000000000000000000000000000000000000001"
		const uintvehtzfq = BigInt("264")
		const addressjCpT14n = accounts[4]
		const uintbO6Wwbr = BigInt("1080")
		const addresssz6cjB9 = accounts[1]
		const addressX8zxfvf = "0x0000000000000000000000000000000000000001"
		const boolwWSJ5xu = await DJCoinOjIPB6y.increaseAllowance.call(addressKBbRbPF, uintQ5tWcvE, {from: accounts[3]});
		const uint256dU3RF3M = await DJCoinOjIPB6y.allowance.call(addresswI7oEcy, addresslHdyro, {from: accounts[1]});
//		const boolIRuNHf5 = await DJCoinOjIPB6y.transfer.call(addressjCpT14n, uintvehtzfq, {from: accounts[3]});
//		await DJCoinOjIPB6y.renounceOwnership.call({from: accounts[2]});
//		const boolKkHpo4o = await DJCoinOjIPB6y.transfer.call(addresssz6cjB9, uintbO6Wwbr, {from: "0x0000000000000000000000000000000000000001"});
//		const addressD01FmI2 = await DJCoinOjIPB6y.transferOwnership.call(addressX8zxfvf, {from: accounts[4]});

		assert.equal(boolwWSJ5xu, true)
		assert.equal(uint256dU3RF3M, BigInt("0"))
		await expect(DJCoinOjIPB6y.transfer.call(addressjCpT14n, uintvehtzfq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintckGuh2t = BigInt("1384")
		const addresswQGoGrx = accounts[5]
		const uintKuZYXh1 = BigInt("144")
		const addressUEXnDfT = accounts[2]
		const uintuj4WQNc = BigInt("930")
		const addressn3lSWyd = accounts[2]
		const addressmDhuAaU = accounts[1]
		const addressynaED4z = accounts[1]
		const uintPCsCb2p = BigInt("264")
		const addressPCmW4iA = accounts[4]
		const uintsWH8okB = BigInt("1070")
		const addressj2bDvCf = accounts[1]
		const uintVsMGq5m = BigInt("1640")
		const addressmvg7BFd = accounts[3]
		const boolFgcEcRc = await DJCoinOjIPB6y.increaseAllowance.call(addresswQGoGrx, uintckGuh2t, {from: "0x0000000000000000000000000000000000000001"});
		const boolkZVofok = await DJCoinOjIPB6y.decreaseAllowance.call(addressUEXnDfT, uintKuZYXh1, {from: accounts[3]});
		const boolwWSJ5xu = await DJCoinOjIPB6y.increaseAllowance.call(addressn3lSWyd, uintuj4WQNc, {from: accounts[3]});
		const uint256xK8Kdm2 = await DJCoinOjIPB6y.allowance.call(addressynaED4z, addressmDhuAaU, {from: accounts[1]});
//		const boolIRuNHf5 = await DJCoinOjIPB6y.transfer.call(addressPCmW4iA, uintPCsCb2p, {from: accounts[3]});
//		await DJCoinOjIPB6y.renounceOwnership.call({from: accounts[2]});
//		const boolKkHpo4o = await DJCoinOjIPB6y.transfer.call(addressj2bDvCf, uintsWH8okB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolplZMsy = await DJCoinOjIPB6y.transfer.call(addressmvg7BFd, uintVsMGq5m, {from: accounts[3]});

		assert.equal(boolFgcEcRc, true)
		assert.equal(boolkZVofok, true)
		assert.equal(boolwWSJ5xu, true)
		assert.equal(uint256xK8Kdm2, BigInt("0"))
		await expect(DJCoinOjIPB6y.transfer.call(addressPCmW4iA, uintPCsCb2p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBcdSR0Q = await DJCoin.new({from: accounts[1]});
		const uintZ2O99Je = BigInt("1776")
		const uintfOiCNHK = BigInt("782")
		const uintpa9TPsh = BigInt("1240")
		const addressbvm7hl = accounts[2]
		const uintJw0zLo8 = BigInt("675")
		const addresss3g4QWl = accounts[0]
		const addressfr6mTQv = "0x0000000000000000000000000000000000000001"
		const uint256Tt5FSv3 = await DJCoinBcdSR0Q.burn.call(uintfOiCNHK, uintZ2O99Je, {from: accounts[1]});
		const boolW1KW5vN = await DJCoinBcdSR0Q.decreaseAllowance.call(addressbvm7hl, uintpa9TPsh, {from: accounts[3]});
		const boolWHDMBL2 = await DJCoinBcdSR0Q.increaseAllowance.call(addresss3g4QWl, uintJw0zLo8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressD6Dtr6J = await DJCoinBcdSR0Q.transferOwnership.call(addressfr6mTQv, {from: accounts[3]});

		assert.equal(boolW1KW5vN, true)
		assert.equal(boolWHDMBL2, true)
		assert.equal(uint256Tt5FSv3, BigInt("1727040000000"))
		await expect(DJCoinBcdSR0Q.transferOwnership.call(addressfr6mTQv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintMXdLrZX = BigInt("76")
		const addressOA0I01D = accounts[5]
		const uintOaOdTMC = BigInt("1490")
		const addressBf7mJL6 = accounts[4]
		const uinttShZHcc = BigInt("739")
		const addressPAOE9fb = accounts[0]
		const addresspHk21zf = await DJCoinOjIPB6y.owner.call({from: accounts[3]});
//		await DJCoinOjIPB6y.renounceOwnership.call({from: accounts[1]});
//		const bool7VGrVr = await DJCoinOjIPB6y.transfer.call(addressOA0I01D, uintMXdLrZX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrecOtGF = await DJCoinOjIPB6y.transfer.call(addressBf7mJL6, uintOaOdTMC, {from: accounts[5]});
//		const boolAByVyim = await DJCoinOjIPB6y.increaseAllowance.call(addressPAOE9fb, uinttShZHcc, {from: accounts[4]});

		assert.equal(addresspHk21zf, 0xf598279Df3f4f1A6bD2f7557aAA38a9782bD0A77)
		await expect(DJCoinOjIPB6y.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOjIPB6y = await DJCoin.new({from: accounts[1]});
		const uintHqmFYKV = BigInt("0")
		const addressxoYr2j5 = accounts[6]
		const uintInZzn6n = BigInt("1171")
		const addressdjTzd8u = accounts[4]
		const uintzVdJwtG = BigInt("1202")
		const addressYXBFKc = accounts[5]
		const bool7VGrVr = await DJCoinOjIPB6y.transfer.call(addressxoYr2j5, uintHqmFYKV, {from: "0x0000000000000000000000000000000000000001"});
		const boolLzj5T6z = await DJCoinOjIPB6y.decreaseAllowance.call(addressdjTzd8u, uintInZzn6n, {from: accounts[4]});
		const booluPhu4OK = await DJCoinOjIPB6y.approve.call(addressYXBFKc, uintzVdJwtG, {from: accounts[0]});

		assert.equal(bool7VGrVr, true)
		assert.equal(boolLzj5T6z, true)
		assert.equal(booluPhu4OK, true)
	});
})