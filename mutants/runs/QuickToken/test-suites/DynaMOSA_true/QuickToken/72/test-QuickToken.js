const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressbXZMRn7 = accounts[3]
		const addressSduVTr = accounts[5]
		const QuickTokenEQStJ9L = await QuickToken.new(addressbXZMRn7, addressSduVTr, {from: accounts[1]});
		const uintiFMS5mm = BigInt("1259")
		const addresswJ5m73h = accounts[2]
		const addressqwTGD5T = accounts[2]
		const addressfwsdDaE = accounts[3]
		const uintVhq9QO = BigInt("1280")
		const addressZLLlAMz = accounts[5]
		const addressPGk2TFh = accounts[2]
		const addressSsfnOkJ = accounts[1]
		const boolaflKklm = await QuickTokenEQStJ9L.transfer.call(addresswJ5m73h, uintiFMS5mm, {from: accounts[2]});
		const uintYf5Mfv = await QuickTokenEQStJ9L.allowance.call(addressfwsdDaE, addressqwTGD5T, {from: accounts[2]});
		const boolraGzj22 = await QuickTokenEQStJ9L.approve.call(addressZLLlAMz, uintVhq9QO, {from: accounts[3]});
		const uintjfvTr2U = await QuickTokenEQStJ9L.balanceOf.call(addressPGk2TFh, {from: accounts[0]});
		const addressXzBMcb = await QuickTokenEQStJ9L.setMinter.call(addressSsfnOkJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenEQStJ9L.transfer.call(addresswJ5m73h, uintiFMS5mm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresstwksQ1Y = accounts[5]
		const addressCYrSjrk = "0x0000000000000000000000000000000000000001"
		const QuickTokenW1CKNZD = await QuickToken.new(addresstwksQ1Y, addressCYrSjrk, {from: accounts[2]});
		const addressVnkrpVw = accounts[0]
		const addressRkpORp = accounts[3]
		const addressIVoQDBy = accounts[0]
		const addressXWpS58d = accounts[2]
		const addresscCEaQtg = accounts[1]
		const addresseZeTLec = accounts[1]
		const addressM3KYXJ7 = accounts[4]
		const addressK2cWRG0 = accounts[3]
		const uintuNzpEP = await QuickTokenW1CKNZD.balanceOf.call(addressVnkrpVw, {from: accounts[3]});
		const uintfSPWLLX = await QuickTokenW1CKNZD.allowance.call(addressIVoQDBy, addressRkpORp, {from: accounts[4]});
		const uintqlyQy7Z = await QuickTokenW1CKNZD.balanceOf.call(addressXWpS58d, {from: "0x0000000000000000000000000000000000000001"});
		const uintiuAgZ0Y = await QuickTokenW1CKNZD.allowance.call(addresseZeTLec, addresscCEaQtg, {from: accounts[4]});
		const uinteN9iNqE = await QuickTokenW1CKNZD.allowance.call(addressK2cWRG0, addressM3KYXJ7, {from: accounts[2]});

		assert.equal(uinteN9iNqE, BigInt("0"))
		assert.equal(uintfSPWLLX, BigInt("0"))
		assert.equal(uintiuAgZ0Y, BigInt("0"))
		assert.equal(uintqlyQy7Z, BigInt("0"))
		assert.equal(uintuNzpEP, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressh46iyuE = accounts[0]
		const addressAehpukv = accounts[4]
		const QuickTokenesOHxAW = await QuickToken.new(addressh46iyuE, addressAehpukv, {from: accounts[1]});
		const uinty6WInpH = BigInt("912")
		const addresseAJlZF9 = accounts[3]
		const uintlfs9HDU = BigInt("1248")
		const addresssuLF3tg = accounts[4]
		const addressjb5pFns = await QuickTokenesOHxAW.mint.call(addresseAJlZF9, uinty6WInpH, {from: "0x0000000000000000000000000000000000000001"});
		const booluM5DlQV = await QuickTokenesOHxAW.transfer.call(addresssuLF3tg, uintlfs9HDU, {from: accounts[2]});

		await expect(QuickTokenesOHxAW.mint.call(addresseAJlZF9, uinty6WInpH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressrfqtZE = accounts[2]
		const addressJ3SE6uM = accounts[5]
		const QuickTokenI80OtvI = await QuickToken.new(addressrfqtZE, addressJ3SE6uM, {from: accounts[3]});
		const uint9ahqEh = BigInt("1571")
		const addressZQOnD25 = accounts[4]
		const uint0B2lIf = BigInt("1414")
		const addressUdRzexD = accounts[1]
		const uintXGQiijJ = BigInt("101")
		const addressnb95YO = accounts[1]
		const addressCHLkcc0 = "0x0000000000000000000000000000000000000001"
		const addressaEOCCKu = accounts[2]
		const boolkIoWU5E = await QuickTokenI80OtvI.approve.call(addressZQOnD25, uint9ahqEh, {from: accounts[1]});
		const boolszze1oe = await QuickTokenI80OtvI.transfer.call(addressUdRzexD, uint0B2lIf, {from: accounts[2]});
		const boolP4mtre7 = await QuickTokenI80OtvI.approve.call(addressnb95YO, uintXGQiijJ, {from: accounts[3]});
		const uintXxetB6Y = await QuickTokenI80OtvI.balanceOf.call(addressCHLkcc0, {from: accounts[1]});
		const addressPRCoAeX = await QuickTokenI80OtvI.setMinter.call(addressaEOCCKu, {from: accounts[5]});

		assert.equal(boolP4mtre7, true)
		assert.equal(boolkIoWU5E, true)
		assert.equal(boolszze1oe, true)
		assert.equal(uintXxetB6Y, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresskwvMzK4 = "0x0000000000000000000000000000000000000001"
		const addressRMwcpJb = accounts[2]
		const QuickTokenOFEu3gh = await QuickToken.new(addresskwvMzK4, addressRMwcpJb, {from: "0x0000000000000000000000000000000000000001"});
		const uintpj8qYjs = BigInt("1544")
		const addressNQ8gqrh = "0x0000000000000000000000000000000000000001"
		const addressshANyl0 = accounts[5]
		const addresspspZqkZ = accounts[0]
		const addressloHFrX = accounts[0]
		const addressByoRY0f = accounts[1]
		const boolGs1YTfz = await QuickTokenOFEu3gh.transferFrom.call(addressshANyl0, addressNQ8gqrh, uintpj8qYjs, {from: accounts[0]});
		const uintVS0QOZV = await QuickTokenOFEu3gh.balanceOf.call(addresspspZqkZ, {from: accounts[1]});
		const uintZopmHwl = await QuickTokenOFEu3gh.balanceOf.call(addressloHFrX, {from: accounts[1]});
		const uintKmKOve2 = await QuickTokenOFEu3gh.balanceOf.call(addressByoRY0f, {from: accounts[4]});
	});

	it('test for QuickToken', async () => {
		const addressbFGl7iC = accounts[0]
		const addressqnSLBd9 = accounts[1]
		const QuickTokenXDdNaPP = await QuickToken.new(addressbFGl7iC, addressqnSLBd9, {from: accounts[5]});
		const addressouB6a5M = accounts[3]
		const addressYQ4eyiQ = accounts[3]
		const addressRZHuUCK = accounts[3]
		const addressVocIVaL = accounts[1]
		const addressQ2K4FVD = accounts[4]
		const uintaxQEsY4 = BigInt("1787")
		const addressR7I2foN = accounts[1]
		const addresswd8NlD3 = accounts[4]
		const uint2VwKkE = BigInt("1207")
		const addressrUhHgi = accounts[0]
		const uinte0kYiTz = await QuickTokenXDdNaPP.balanceOf.call(addressouB6a5M, {from: accounts[0]});
		const uintKL6EQVD = await QuickTokenXDdNaPP.allowance.call(addressRZHuUCK, addressYQ4eyiQ, {from: accounts[5]});
		const uintVKVqdCa = await QuickTokenXDdNaPP.allowance.call(addressQ2K4FVD, addressVocIVaL, {from: accounts[2]});
		const boolLbDbaSh = await QuickTokenXDdNaPP.transferFrom.call(addresswd8NlD3, addressR7I2foN, uintaxQEsY4, {from: accounts[0]});
		const addressRsUcPw = await QuickTokenXDdNaPP.mint.call(addressrUhHgi, uint2VwKkE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintKL6EQVD, BigInt("0"))
		assert.equal(uintVKVqdCa, BigInt("0"))
		assert.equal(uinte0kYiTz, BigInt("0"))
		await expect(QuickTokenXDdNaPP.transferFrom.call(addresswd8NlD3, addressR7I2foN, uintaxQEsY4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTPIc6D = accounts[2]
		const addresslVJQTj4 = accounts[5]
		const QuickTokenI80OtvI = await QuickToken.new(addressTPIc6D, addresslVJQTj4, {from: accounts[3]});
		const uintNPJI15F = BigInt("1571")
		const addressMa6m88y = accounts[5]
		const addresslrfjw7U = accounts[5]
		const addressb57OG4x = accounts[2]
		const addressZZFVoPS = accounts[5]
		const uintlHkmPBc = BigInt("1401")
		const addressSQ2BRLa = accounts[2]
		const uinto0juxtp = BigInt("112")
		const addressaZdXPvJ = accounts[1]
		const uintJkSQJ80 = BigInt("101")
		const addressTv0YeJM = accounts[1]
		const addressvksETC = accounts[0]
		const addressMpPIOs = accounts[1]
		const uintDJ5sOT = BigInt("1927")
		const addressm07HYGN = accounts[1]
		const addressq281yUl = accounts[1]
		const addressyYJpgJV = "0x0000000000000000000000000000000000000001"
		const boolkIoWU5E = await QuickTokenI80OtvI.approve.call(addressMa6m88y, uintNPJI15F, {from: accounts[1]});
		const uintNDstS5B = await QuickTokenI80OtvI.allowance.call(addressb57OG4x, addresslrfjw7U, {from: accounts[3]});
		const addressb14snHP = await QuickTokenI80OtvI.setMinter.call(addressZZFVoPS, {from: accounts[4]});
		const boolszze1oe = await QuickTokenI80OtvI.transfer.call(addressSQ2BRLa, uintlHkmPBc, {from: accounts[2]});
		const boolFI4rko2 = await QuickTokenI80OtvI.transfer.call(addressaZdXPvJ, uinto0juxtp, {from: accounts[1]});
		const boolP4mtre7 = await QuickTokenI80OtvI.approve.call(addressTv0YeJM, uintJkSQJ80, {from: accounts[3]});
		const uintpuCPGlO = await QuickTokenI80OtvI.allowance.call(addressMpPIOs, addressvksETC, {from: accounts[3]});
		const boolMaDY3my = await QuickTokenI80OtvI.approve.call(addressm07HYGN, uintDJ5sOT, {from: accounts[1]});
		const uintxhYNLHV = await QuickTokenI80OtvI.balanceOf.call(addressq281yUl, {from: "0x0000000000000000000000000000000000000001"});
		const uintXxetB6Y = await QuickTokenI80OtvI.balanceOf.call(addressyYJpgJV, {from: accounts[1]});

		assert.equal(boolkIoWU5E, true)
		assert.equal(uintNDstS5B, BigInt("0"))
		await expect(QuickTokenI80OtvI.setMinter.call(addressZZFVoPS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressiumdqLj = accounts[2]
		const addressU5em8hz = accounts[5]
		const QuickTokenI80OtvI = await QuickToken.new(addressiumdqLj, addressU5em8hz, {from: accounts[3]});
		const uintMhat2nT = BigInt("60")
		const addressRMyMQlZ = accounts[4]
		const addressN7oHcF = accounts[0]
		const uintB3uZdwA = BigInt("101")
		const addressOFtj0ch = accounts[1]
		const uintUh1kQcw = BigInt("2014")
		const addressEMrXUVr = accounts[3]
		const uintvJrlIbO = BigInt("160")
		const addressQbq9HRB = accounts[0]
		const addressJ2ycFK9 = accounts[2]
		const addressc4JpryX = "0x0000000000000000000000000000000000000000"
		const addressdhPk8ko = accounts[3]
		const addressyYorMYx = accounts[4]
		const boolkIoWU5E = await QuickTokenI80OtvI.approve.call(addressRMyMQlZ, uintMhat2nT, {from: accounts[1]});
		const uintURjwsbI = await QuickTokenI80OtvI.balanceOf.call(addressN7oHcF, {from: accounts[4]});
		const boolP4mtre7 = await QuickTokenI80OtvI.approve.call(addressOFtj0ch, uintB3uZdwA, {from: accounts[3]});
		const boolvJOOGus = await QuickTokenI80OtvI.approve.call(addressEMrXUVr, uintUh1kQcw, {from: accounts[4]});
		const addressHKTKSND = await QuickTokenI80OtvI.mint.call(addressQbq9HRB, uintvJrlIbO, {from: accounts[5]});
		const addressPRCoAeX = await QuickTokenI80OtvI.setMinter.call(addressJ2ycFK9, {from: accounts[5]});
		const uintHyF8Es = await QuickTokenI80OtvI.allowance.call(addressdhPk8ko, addressc4JpryX, {from: accounts[3]});
		const addressuUuAaW = await QuickTokenI80OtvI.setMinter.call(addressyYorMYx, {from: accounts[5]});

		assert.equal(boolP4mtre7, true)
		assert.equal(boolkIoWU5E, true)
		assert.equal(boolvJOOGus, true)
		assert.equal(uintHyF8Es, BigInt("0"))
		assert.equal(uintURjwsbI, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressNok4BTS = accounts[2]
		const addressSlC0ibj = accounts[5]
		const QuickTokenI80OtvI = await QuickToken.new(addressNok4BTS, addressSlC0ibj, {from: accounts[3]});
		const uintXpx6hGA = BigInt("60")
		const addressU2T04ZQ = accounts[4]
		const addressCGVa068 = accounts[0]
		const uintt81Gexm = BigInt("101")
		const addressMZDQFKF = accounts[1]
		const uinth581Tmc = BigInt("1811")
		const addressfZxjowO = accounts[0]
		const uintH0MhFt = BigInt("160")
		const addressox9tQ8m = accounts[0]
		const addressZ7Dtj08 = accounts[3]
		const addressakh931C = "0x00000000000000000000000000000000000000-1"
		const address9teBal = accounts[3]
		const addressLOAEuv = accounts[4]
		const boolkIoWU5E = await QuickTokenI80OtvI.approve.call(addressU2T04ZQ, uintXpx6hGA, {from: accounts[1]});
		const uintURjwsbI = await QuickTokenI80OtvI.balanceOf.call(addressCGVa068, {from: accounts[4]});
		const boolP4mtre7 = await QuickTokenI80OtvI.approve.call(addressMZDQFKF, uintt81Gexm, {from: accounts[3]});
		const boolF5gwbfh = await QuickTokenI80OtvI.transfer.call(addressfZxjowO, uinth581Tmc, {from: accounts[2]});
		const addressHKTKSND = await QuickTokenI80OtvI.mint.call(addressox9tQ8m, uintH0MhFt, {from: accounts[5]});
		const addressPRCoAeX = await QuickTokenI80OtvI.setMinter.call(addressZ7Dtj08, {from: accounts[5]});
		const uintHyF8Es = await QuickTokenI80OtvI.allowance.call(address9teBal, addressakh931C, {from: accounts[3]});
		const addressuUuAaW = await QuickTokenI80OtvI.setMinter.call(addressLOAEuv, {from: accounts[5]});

		assert.equal(boolF5gwbfh, true)
		assert.equal(boolP4mtre7, true)
		assert.equal(boolkIoWU5E, true)
		assert.equal(uintURjwsbI, BigInt("0"))
		await expect(QuickTokenI80OtvI.allowance.call(address9teBal, addressakh931C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})