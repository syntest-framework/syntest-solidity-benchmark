const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressw8H6kMt = accounts[2]
		const addresslaWmtUS = accounts[1]
		const SpiritCoinF2yScqi = await SpiritCoin.new(addressw8H6kMt, addresslaWmtUS, {from: accounts[3]});
		const addressGHxjBct = accounts[3]
		const addressTI3hrVO = "0x0000000000000000000000000000000000000001"
		const uinte2Njjte = BigInt("1564")
		const addressllUP5X = accounts[2]
		const addresssdePUs1 = accounts[0]
		const uintgqA3SJk = BigInt("1767")
		const addressFYbVszd = accounts[4]
		const uintzDSkZpE = await SpiritCoinF2yScqi.allowance.call(addressTI3hrVO, addressGHxjBct, {from: accounts[3]});
		const booliDhvbZ = await SpiritCoinF2yScqi.approve.call(addressllUP5X, uinte2Njjte, {from: accounts[4]});
		const addressaHRc3Il = await SpiritCoinF2yScqi.setMinter.call(addresssdePUs1, {from: accounts[1]});
//		const addressJwM1PvL = await SpiritCoinF2yScqi.mint.call(addressFYbVszd, uintgqA3SJk, {from: accounts[2]});

		assert.equal(booliDhvbZ, true)
		assert.equal(uintzDSkZpE, BigInt("0"))
		await expect(SpiritCoinF2yScqi.mint.call(addressFYbVszd, uintgqA3SJk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const address8VMHzz = accounts[5]
		const addressZ51MBd = accounts[5]
		const SpiritCoinyQZeEn = await SpiritCoin.new(address8VMHzz, addressZ51MBd, {from: accounts[5]});
		const addressiIj8scH = accounts[2]
		const addressPETUjA5 = accounts[2]
		const addressE9XdvL0 = accounts[0]
		const addressIZzYOSw = accounts[2]
		const addressdtHAjAH = accounts[1]
		const uintG9kadxr = BigInt("755")
		const addressm7aRdvR = accounts[1]
		const addressB6J4iOi = accounts[3]
		const uintfGevipK = await SpiritCoinyQZeEn.balanceOf.call(addressiIj8scH, {from: accounts[2]});
//		const addresszm7NPrW = await SpiritCoinyQZeEn.setMinter.call(addressPETUjA5, {from: accounts[2]});
//		const addressT9zULqr = await SpiritCoinyQZeEn.setMinter.call(addressE9XdvL0, {from: accounts[4]});
//		const uintsCTHcIa = await SpiritCoinyQZeEn.allowance.call(addressdtHAjAH, addressIZzYOSw, {from: accounts[0]});
//		const boolr6QMhjg = await SpiritCoinyQZeEn.transferFrom.call(addressB6J4iOi, addressm7aRdvR, uintG9kadxr, {from: accounts[3]});

		assert.equal(uintfGevipK, BigInt("0"))
		await expect(SpiritCoinyQZeEn.setMinter.call(addressPETUjA5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressLiVQAM = accounts[3]
		const addressp41yCfl = accounts[5]
		const SpiritCoinDIzGB1o = await SpiritCoin.new(addressLiVQAM, addressp41yCfl, {from: accounts[1]});
		const addressem4ZgpI = accounts[3]
		const addressayd49dg = accounts[3]
		const addressGkvQabc = accounts[1]
		const uintbe9xdw9 = BigInt("807")
		const addressQtPwG8U = accounts[2]
		const addressxVQ6VrC = accounts[3]
		const uintwdM3Ld = BigInt("1783")
		const addressabDOTqW = accounts[1]
		const uintLkMbTb1 = await SpiritCoinDIzGB1o.allowance.call(addressayd49dg, addressem4ZgpI, {from: accounts[3]});
		const uintG9xtPs1 = await SpiritCoinDIzGB1o.balanceOf.call(addressGkvQabc, {from: accounts[1]});
//		const boolIuJVS5E = await SpiritCoinDIzGB1o.transferFrom.call(addressxVQ6VrC, addressQtPwG8U, uintbe9xdw9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK2xUGid = await SpiritCoinDIzGB1o.transfer.call(addressabDOTqW, uintwdM3Ld, {from: accounts[0]});

		assert.equal(uintG9xtPs1, BigInt("0"))
		assert.equal(uintLkMbTb1, BigInt("0"))
		await expect(SpiritCoinDIzGB1o.transferFrom.call(addressxVQ6VrC, addressQtPwG8U, uintbe9xdw9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressJXHkvBf = accounts[4]
		const addressxoPkUTF = accounts[4]
		const SpiritCoinaYrFHfD = await SpiritCoin.new(addressJXHkvBf, addressxoPkUTF, {from: accounts[2]});
		const uintRmTtRFh = BigInt("331")
		const addresszvJsqgl = accounts[1]
		const uintj7BYJkZ = BigInt("1628")
		const addressmuY8pUT = "0x0000000000000000000000000000000000000001"
		const uintx25Ss59 = BigInt("930")
		const addressQgdfdLo = accounts[2]
		const addressq1zsBYc = accounts[0]
		const addressjR1MmBD = "0x0000000000000000000000000000000000000001"
//		const boolEeXvFqv = await SpiritCoinaYrFHfD.transfer.call(addresszvJsqgl, uintRmTtRFh, {from: accounts[0]});
//		const booldSYSLFV = await SpiritCoinaYrFHfD.approve.call(addressmuY8pUT, uintj7BYJkZ, {from: accounts[1]});
//		const addressyYeV9xd = await SpiritCoinaYrFHfD.mint.call(addressQgdfdLo, uintx25Ss59, {from: accounts[1]});
//		const uintgWXZt4L = await SpiritCoinaYrFHfD.allowance.call(addressjR1MmBD, addressq1zsBYc, {from: accounts[5]});

		await expect(SpiritCoinaYrFHfD.transfer.call(addresszvJsqgl, uintRmTtRFh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const address7V2cRc = accounts[2]
		const addressBrwbQmi = accounts[0]
		const SpiritCoinSTmHRes = await SpiritCoin.new(address7V2cRc, addressBrwbQmi, {from: accounts[2]});
		const uintYxzrtTU = BigInt("1819")
		const addresshmp7lLb = accounts[4]
		const addresswX3TOon = accounts[0]
		const addressUTLgx7W = accounts[5]
		const uintN3l0D1r = BigInt("1941")
		const addressJlCj2c3 = accounts[0]
		const addressDXgMPNM = "0x0000000000000000000000000000000000000001"
		const addressDDx6qO = await SpiritCoinSTmHRes.mint.call(addresshmp7lLb, uintYxzrtTU, {from: accounts[0]});
		const uintHq1MdMD = await SpiritCoinSTmHRes.allowance.call(addressUTLgx7W, addresswX3TOon, {from: accounts[3]});
//		const boolG0YPA6 = await SpiritCoinSTmHRes.transferFrom.call(addressDXgMPNM, addressJlCj2c3, uintN3l0D1r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHq1MdMD, BigInt("0"))
		await expect(SpiritCoinSTmHRes.transferFrom.call(addressDXgMPNM, addressJlCj2c3, uintN3l0D1r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressu2o1ct = accounts[1]
		const addressCvk7hll = accounts[0]
		const SpiritCoink0eE92 = await SpiritCoin.new(addressu2o1ct, addressCvk7hll, {from: "0x0000000000000000000000000000000000000001"});
		const addressYCUVIRW = "0x0000000000000000000000000000000000000001"
		const uintTsCn0hD = BigInt("1828")
		const addressRAT6zrh = accounts[1]
		const addressSDU2qXn = accounts[0]
		const uintGqChMmC = BigInt("590")
		const addressdOTbraF = accounts[2]
		const uinto1r3wOv = BigInt("28")
		const addressrzqNGqF = accounts[4]
		const uintZU9EBCT = BigInt("216")
		const addressBE89Ai8 = accounts[0]
		const addresshrKbpDD = accounts[3]
		const uintv9iCcsj = await SpiritCoink0eE92.balanceOf.call(addressYCUVIRW, {from: accounts[4]});
		const boolfSa4EoS = await SpiritCoink0eE92.approve.call(addressRAT6zrh, uintTsCn0hD, {from: accounts[1]});
		const uintb7Bos27 = await SpiritCoink0eE92.balanceOf.call(addressSDU2qXn, {from: accounts[1]});
		const boolO5fsNwu = await SpiritCoink0eE92.approve.call(addressdOTbraF, uintGqChMmC, {from: accounts[0]});
		const addressjY3WRw4 = await SpiritCoink0eE92.mint.call(addressrzqNGqF, uinto1r3wOv, {from: accounts[3]});
		const boolgwQPFpX = await SpiritCoink0eE92.transferFrom.call(addresshrKbpDD, addressBE89Ai8, uintZU9EBCT, {from: accounts[0]});
	});
})