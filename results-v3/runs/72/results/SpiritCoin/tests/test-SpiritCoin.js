const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const address1ve5Bw = accounts[2]
		const addresszUXc3ge = accounts[1]
		const SpiritCoin1TR4yp = await SpiritCoin.new(address1ve5Bw, addresszUXc3ge, {from: accounts[5]});
		const uintEYGeGiM = BigInt("857")
		const addresscwWpCpB = accounts[3]
		const uintwB62jV6 = BigInt("692")
		const addressnSBu095 = accounts[0]
		const booll981Xl0 = await SpiritCoin1TR4yp.transfer.call(addresscwWpCpB, uintEYGeGiM, {from: accounts[2]});
		const bool5vY7NI = await SpiritCoin1TR4yp.approve.call(addressnSBu095, uintwB62jV6, {from: accounts[2]});

		assert.equal(bool5vY7NI, true)
		assert.equal(booll981Xl0, true)
	});

	it('test for SpiritCoin', async () => {
		const addresszOg8Y2a = accounts[4]
		const addressqqz6zpe = accounts[1]
		const SpiritCoinXahrDd5 = await SpiritCoin.new(addresszOg8Y2a, addressqqz6zpe, {from: accounts[4]});
		const uintm7er7ba = BigInt("1093")
		const addressBALcThz = accounts[4]
		const addressuETJGc3 = accounts[1]
		const addresspzkRLGW = accounts[2]
		const addressOCk5WvA = accounts[4]
		const addressfxd9gPV = accounts[1]
		const boolDsYjoRJ = await SpiritCoinXahrDd5.transfer.call(addressBALcThz, uintm7er7ba, {from: accounts[1]});
		const uintSgu33mq = await SpiritCoinXahrDd5.allowance.call(addresspzkRLGW, addressuETJGc3, {from: accounts[3]});
		const uintOdb0DL = await SpiritCoinXahrDd5.allowance.call(addressfxd9gPV, addressOCk5WvA, {from: accounts[5]});

		await expect(SpiritCoinXahrDd5.transfer.call(addressBALcThz, uintm7er7ba, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressqX1pqV7 = accounts[0]
		const addressiZPMaPt = accounts[3]
		const SpiritCoinbrDfDaz = await SpiritCoin.new(addressqX1pqV7, addressiZPMaPt, {from: accounts[3]});
		const addresskY1iAox = accounts[5]
		const addresseGBCgQs = accounts[1]
		const uintDU6lRsz = BigInt("744")
		const addressHtsB9s = accounts[1]
		const addressPpmdv7u = "0x0000000000000000000000000000000000000001"
		const addressHvlO2Cg = accounts[3]
		const addressUOsCaA = accounts[4]
		const addresslYbQGUr = accounts[0]
		const uinttVh7GuZ = await SpiritCoinbrDfDaz.allowance.call(addresseGBCgQs, addresskY1iAox, {from: accounts[0]});
		const boolLDAdMUB = await SpiritCoinbrDfDaz.transfer.call(addressHtsB9s, uintDU6lRsz, {from: accounts[4]});
		const uintGIQsR9M = await SpiritCoinbrDfDaz.balanceOf.call(addressPpmdv7u, {from: "0x0000000000000000000000000000000000000001"});
		const uintNyzEluz = await SpiritCoinbrDfDaz.balanceOf.call(addressHvlO2Cg, {from: "0x0000000000000000000000000000000000000001"});
		const uintlVxK88d = await SpiritCoinbrDfDaz.allowance.call(addresslYbQGUr, addressUOsCaA, {from: accounts[0]});

		assert.equal(uinttVh7GuZ, BigInt("0"))
		await expect(SpiritCoinbrDfDaz.transfer.call(addressHtsB9s, uintDU6lRsz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressKy4ATmP = accounts[3]
		const addressiCRIqg = accounts[0]
		const SpiritCoinPjx4tJU = await SpiritCoin.new(addressKy4ATmP, addressiCRIqg, {from: "0x0000000000000000000000000000000000000001"});
		const uintinC1Z99 = BigInt("1480")
		const addressJHIj3Eq = accounts[4]
		const addressOyxbMJY = "0x0000000000000000000000000000000000000001"
		const addressBhOKc60 = await SpiritCoinPjx4tJU.mint.call(addressJHIj3Eq, uintinC1Z99, {from: accounts[0]});
		const addressrKLbrO = await SpiritCoinPjx4tJU.setMinter.call(addressOyxbMJY, {from: accounts[5]});
	});

	it('test for SpiritCoin', async () => {
		const addressDVEHrjQ = accounts[5]
		const addressS1bqTv = "0x0000000000000000000000000000000000000001"
		const SpiritCoinU8a7Unw = await SpiritCoin.new(addressDVEHrjQ, addressS1bqTv, {from: accounts[3]});
		const uintsOaWxya = BigInt("1650")
		const addressaehFnr5 = accounts[3]
		const uintw6evQvm = BigInt("1340")
		const addressbZqWHn = accounts[2]
		const addressRWnUP9w = accounts[0]
		const uintJbP94W3 = BigInt("350")
		const addresseO5WnRp = accounts[0]
		const addressnIZaeMR = accounts[3]
		const uintd8TZxUm = BigInt("1940")
		const addressBPsiz60 = accounts[1]
		const uintI1tSYq4 = BigInt("1577")
		const addressTWgyZCQ = accounts[2]
		const boolEOv2Jf0 = await SpiritCoinU8a7Unw.approve.call(addressaehFnr5, uintsOaWxya, {from: accounts[1]});
		const boolEDaoCbj = await SpiritCoinU8a7Unw.transferFrom.call(addressRWnUP9w, addressbZqWHn, uintw6evQvm, {from: accounts[2]});
		const boolTnry9sm = await SpiritCoinU8a7Unw.transferFrom.call(addressnIZaeMR, addresseO5WnRp, uintJbP94W3, {from: accounts[1]});
		const boolUi7aBpX = await SpiritCoinU8a7Unw.approve.call(addressBPsiz60, uintd8TZxUm, {from: accounts[4]});
		const boolCmAyJrp = await SpiritCoinU8a7Unw.transfer.call(addressTWgyZCQ, uintI1tSYq4, {from: accounts[2]});

		assert.equal(boolEOv2Jf0, true)
		await expect(SpiritCoinU8a7Unw.transferFrom.call(addressRWnUP9w, addressbZqWHn, uintw6evQvm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresscA0J3mP = accounts[0]
		const addressp69zFD1 = accounts[3]
		const SpiritCoinSo1kxnc = await SpiritCoin.new(addresscA0J3mP, addressp69zFD1, {from: accounts[3]});
		const uintMGSGdMr = BigInt("1064")
		const addressV6Jl2Jf = "0x0000000000000000000000000000000000000001"
		const uintEgEH0Ex = BigInt("1820")
		const addresswIL98Sh = accounts[4]
		const uintkdPJttz = BigInt("1415")
		const addressbYLOat0 = accounts[4]
		const addressaCbonnV = accounts[4]
		const addressJG2SX9S = accounts[3]
		const addressuMfjJV8 = accounts[0]
		const booljbFsb4w = await SpiritCoinSo1kxnc.approve.call(addressV6Jl2Jf, uintMGSGdMr, {from: accounts[0]});
		const addresszTSDYwv = await SpiritCoinSo1kxnc.mint.call(addresswIL98Sh, uintEgEH0Ex, {from: accounts[2]});
		const addressUKqTpKf = await SpiritCoinSo1kxnc.mint.call(addressbYLOat0, uintkdPJttz, {from: accounts[3]});
		const addressHEmSQB = await SpiritCoinSo1kxnc.setMinter.call(addressaCbonnV, {from: accounts[4]});
		const uintX11zq2T = await SpiritCoinSo1kxnc.balanceOf.call(addressJG2SX9S, {from: accounts[1]});
		const uintPRIezgv = await SpiritCoinSo1kxnc.balanceOf.call(addressuMfjJV8, {from: accounts[0]});

		assert.equal(booljbFsb4w, true)
		await expect(SpiritCoinSo1kxnc.mint.call(addresswIL98Sh, uintEgEH0Ex, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresssBc5HIo = accounts[3]
		const addressfQ229jJ = accounts[1]
		const SpiritCoinKdfnDIM = await SpiritCoin.new(addresssBc5HIo, addressfQ229jJ, {from: accounts[3]});
		const uintiQUqh3v = BigInt("1832")
		const addressFDLmux = accounts[4]
		const addressZwTu8YJ = accounts[4]
		const uintnPNVY7 = BigInt("803")
		const addressVq4jHr = accounts[2]
		const uintsw1qrn = BigInt("1246")
		const addressgufs4qF = "0x0000000000000000000000000000000000000001"
		const addressjb5PBQV = accounts[0]
		const addresst0sIjQt = accounts[1]
		const boolkTplalh = await SpiritCoinKdfnDIM.transfer.call(addressFDLmux, uintiQUqh3v, {from: accounts[3]});
		const uintMTkGdbB = await SpiritCoinKdfnDIM.balanceOf.call(addressZwTu8YJ, {from: accounts[3]});
		const boolCCUsBb = await SpiritCoinKdfnDIM.approve.call(addressVq4jHr, uintnPNVY7, {from: accounts[3]});
		const boolur10tY = await SpiritCoinKdfnDIM.approve.call(addressgufs4qF, uintsw1qrn, {from: accounts[1]});
		const uintTY7CClC = await SpiritCoinKdfnDIM.balanceOf.call(addressjb5PBQV, {from: accounts[3]});
		const addressACSiH4V = await SpiritCoinKdfnDIM.setMinter.call(addresst0sIjQt, {from: accounts[2]});

		assert.equal(boolCCUsBb, true)
		assert.equal(boolkTplalh, true)
		assert.equal(boolur10tY, true)
		assert.equal(uintMTkGdbB, BigInt("0"))
		assert.equal(uintTY7CClC, BigInt("0"))
		await expect(SpiritCoinKdfnDIM.setMinter.call(addresst0sIjQt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressdD981t6 = accounts[1]
		const addressOfCSNg = accounts[1]
		const SpiritCoin1C2WbE = await SpiritCoin.new(addressdD981t6, addressOfCSNg, {from: accounts[2]});
		const addressD6VeV4A = accounts[2]
		const address9J6SBN = accounts[3]
		const uintDaOU8OB = BigInt("1216")
		const addressWWc5b3P = accounts[2]
		const uinttqrNVc0 = await SpiritCoin1C2WbE.balanceOf.call(addressD6VeV4A, {from: accounts[0]});
		const addressEzkDyru = await SpiritCoin1C2WbE.setMinter.call(address9J6SBN, {from: accounts[1]});
		const boolo4FaZdv = await SpiritCoin1C2WbE.approve.call(addressWWc5b3P, uintDaOU8OB, {from: accounts[0]});

		assert.equal(boolo4FaZdv, true)
		assert.equal(uinttqrNVc0, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressLO0088q = accounts[0]
		const addressE8EXzRh = accounts[3]
		const SpiritCoinSo1kxnc = await SpiritCoin.new(addressLO0088q, addressE8EXzRh, {from: accounts[3]});
		const uintdYjtxEX = BigInt("1064")
		const addressxyHbdyf = "0x0000000000000000000000000000000000000001"
		const uintKO3yQyB = BigInt("1415")
		const addressk0dGyXh = accounts[4]
		const addresspPxAEYC = accounts[4]
		const addressimML71 = accounts[3]
		const addresszShVIBl = accounts[0]
		const booljbFsb4w = await SpiritCoinSo1kxnc.approve.call(addressxyHbdyf, uintdYjtxEX, {from: accounts[0]});
		const addressUKqTpKf = await SpiritCoinSo1kxnc.mint.call(addressk0dGyXh, uintKO3yQyB, {from: accounts[3]});
		const addressHEmSQB = await SpiritCoinSo1kxnc.setMinter.call(addresspPxAEYC, {from: accounts[4]});
		const uintX11zq2T = await SpiritCoinSo1kxnc.balanceOf.call(addressimML71, {from: accounts[1]});
		const uintPRIezgv = await SpiritCoinSo1kxnc.balanceOf.call(addresszShVIBl, {from: accounts[0]});

		assert.equal(booljbFsb4w, true)
		await expect(SpiritCoinSo1kxnc.setMinter.call(addresspPxAEYC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})