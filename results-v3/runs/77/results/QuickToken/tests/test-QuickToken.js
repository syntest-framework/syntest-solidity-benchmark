const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresszlyxVpK = accounts[1]
		const addressnbliKt = accounts[0]
		const QuickTokengZj7Xxo = await QuickToken.new(addresszlyxVpK, addressnbliKt, {from: accounts[3]});
		const addressMNcCKxo = accounts[1]
		const uintH0NmKQl = BigInt("440")
		const addressFeF25zK = accounts[5]
		const addressZGYHgI1 = accounts[3]
		const uintzykJmtg = BigInt("875")
		const addressG9Bacyb = accounts[3]
		const addressRbRXDSH = accounts[2]
		const uintfpLjBn0 = BigInt("1038")
		const addressjD5j1WY = accounts[0]
		const addressA2Q4zHP = "0x0000000000000000000000000000000000000001"
		const addressZeUIVvm = accounts[0]
		const addressZh2PyYm = accounts[3]
		const uintpthYgKi = await QuickTokengZj7Xxo.balanceOf.call(addressMNcCKxo, {from: accounts[4]});
		const boolmwx6vMh = await QuickTokengZj7Xxo.transferFrom.call(addressZGYHgI1, addressFeF25zK, uintH0NmKQl, {from: accounts[1]});
		const boolK9rl1SS = await QuickTokengZj7Xxo.transferFrom.call(addressRbRXDSH, addressG9Bacyb, uintzykJmtg, {from: accounts[4]});
		const booltlkzgET = await QuickTokengZj7Xxo.transferFrom.call(addressA2Q4zHP, addressjD5j1WY, uintfpLjBn0, {from: accounts[3]});
		const uintQb7naV = await QuickTokengZj7Xxo.balanceOf.call(addressZeUIVvm, {from: "0x0000000000000000000000000000000000000001"});
		const uintVX9O6nC = await QuickTokengZj7Xxo.balanceOf.call(addressZh2PyYm, {from: accounts[1]});

		assert.equal(uintpthYgKi, BigInt("2000000000000"))
		await expect(QuickTokengZj7Xxo.transferFrom.call(addressZGYHgI1, addressFeF25zK, uintH0NmKQl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressSriYdgF = accounts[3]
		const addressaAwMvC = accounts[3]
		const QuickTokenyf6Y0x2 = await QuickToken.new(addressSriYdgF, addressaAwMvC, {from: accounts[4]});
		const uintJSUc7lq = BigInt("937")
		const addressp4yO4Mn = accounts[4]
		const addressee0cmPS = accounts[2]
		const uintQf5lNxj = BigInt("898")
		const addressmFLNXeI = accounts[5]
		const addressAoZPx7z = accounts[0]
		const boolkx6FrcQ = await QuickTokenyf6Y0x2.approve.call(addressp4yO4Mn, uintJSUc7lq, {from: "0x0000000000000000000000000000000000000001"});
		const uintBhUeEnx = await QuickTokenyf6Y0x2.balanceOf.call(addressee0cmPS, {from: accounts[3]});
		const booll6wIaUF = await QuickTokenyf6Y0x2.approve.call(addressmFLNXeI, uintQf5lNxj, {from: accounts[4]});
		const uintbIdcOW4 = await QuickTokenyf6Y0x2.balanceOf.call(addressAoZPx7z, {from: accounts[2]});

		assert.equal(boolkx6FrcQ, true)
		assert.equal(booll6wIaUF, true)
		assert.equal(uintBhUeEnx, BigInt("0"))
		assert.equal(uintbIdcOW4, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const address7UMqkm = accounts[3]
		const addressFJa48HY = "0x0000000000000000000000000000000000000001"
		const QuickTokendf9aCXO = await QuickToken.new(address7UMqkm, addressFJa48HY, {from: accounts[0]});
		const uint4K8tQl = BigInt("1644")
		const addressJxsv63o = accounts[2]
		const uintnyKxlhw = BigInt("1712")
		const addressrtBhDH = accounts[2]
		const uintbIITmog = BigInt("1562")
		const address9sVgds = accounts[2]
		const addressDDuQxBw = await QuickTokendf9aCXO.mint.call(addressJxsv63o, uint4K8tQl, {from: accounts[3]});
		const boolYymJPbm = await QuickTokendf9aCXO.transfer.call(addressrtBhDH, uintnyKxlhw, {from: accounts[1]});
		const addressSeB5hYv = await QuickTokendf9aCXO.mint.call(address9sVgds, uintbIITmog, {from: accounts[0]});

		await expect(QuickTokendf9aCXO.mint.call(addressJxsv63o, uint4K8tQl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressYhlHjQb = accounts[5]
		const addressR1jfDtn = accounts[4]
		const QuickTokenblelkj = await QuickToken.new(addressYhlHjQb, addressR1jfDtn, {from: accounts[0]});
		const addresshrjGb2B = accounts[1]
		const addressQRUvOZi = accounts[4]
		const uintpDRKryp = BigInt("989")
		const addressK3bYQT5 = accounts[3]
		const addressACfoLSx = accounts[3]
		const uintXxPIRq5 = BigInt("1201")
		const address4k9Y24 = accounts[2]
		const uintx2KiMM7 = BigInt("1237")
		const addressMOee3a5 = "0x0000000000000000000000000000000000000001"
		const uintp1Wc6V = await QuickTokenblelkj.balanceOf.call(addresshrjGb2B, {from: accounts[4]});
		const uintltkj9ZS = await QuickTokenblelkj.balanceOf.call(addressQRUvOZi, {from: accounts[0]});
		const booln6n7HZS = await QuickTokenblelkj.transferFrom.call(addressACfoLSx, addressK3bYQT5, uintpDRKryp, {from: accounts[3]});
		const boolo9cSZ2H = await QuickTokenblelkj.transfer.call(address4k9Y24, uintXxPIRq5, {from: accounts[3]});
		const addressprT3DPg = await QuickTokenblelkj.mint.call(addressMOee3a5, uintx2KiMM7, {from: accounts[1]});

		assert.equal(uintltkj9ZS, BigInt("0"))
		assert.equal(uintp1Wc6V, BigInt("0"))
		await expect(QuickTokenblelkj.transferFrom.call(addressACfoLSx, addressK3bYQT5, uintpDRKryp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressgTo94oC = accounts[0]
		const addressquUwFyN = accounts[4]
		const QuickTokenANsYwwx = await QuickToken.new(addressgTo94oC, addressquUwFyN, {from: "0x0000000000000000000000000000000000000001"});
		const uintgFVX7Tv = BigInt("1781")
		const addresspIC04fA = accounts[4]
		const address9RSMTJ = "0x0000000000000000000000000000000000000001"
		const boolUotPmyd = await QuickTokenANsYwwx.transfer.call(addresspIC04fA, uintgFVX7Tv, {from: accounts[0]});
		const addressCQE4hzI = await QuickTokenANsYwwx.setMinter.call(address9RSMTJ, {from: accounts[4]});
	});

	it('test for QuickToken', async () => {
		const addressO2ElLz5 = accounts[0]
		const addressADqKTNW = "0x0000000000000000000000000000000000000001"
		const QuickToken77is9E = await QuickToken.new(addressO2ElLz5, addressADqKTNW, {from: accounts[1]});
		const addressUnA2zx9 = accounts[1]
		const addresst4nhfS3 = accounts[0]
		const addressXKYqDjr = accounts[2]
		const uintkAKXEkm = BigInt("1236")
		const addressu63Slr = accounts[2]
		const uintK0JXlNE = BigInt("1002")
		const addressrWMdu2B = accounts[3]
		const uinthuCSFOT = await QuickToken77is9E.balanceOf.call(addressUnA2zx9, {from: accounts[1]});
		const uintNuVbu5i = await QuickToken77is9E.balanceOf.call(addresst4nhfS3, {from: accounts[5]});
		const addressu9mIAhe = await QuickToken77is9E.setMinter.call(addressXKYqDjr, {from: accounts[2]});
		const addressUhISOf5 = await QuickToken77is9E.mint.call(addressu63Slr, uintkAKXEkm, {from: accounts[3]});
		const bool2VTCe8 = await QuickToken77is9E.transfer.call(addressrWMdu2B, uintK0JXlNE, {from: accounts[0]});

		assert.equal(uintNuVbu5i, BigInt("2000000000000"))
		assert.equal(uinthuCSFOT, BigInt("0"))
		await expect(QuickToken77is9E.setMinter.call(addressXKYqDjr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressj9y3FOj = accounts[2]
		const addresskdfB8Tf = accounts[2]
		const QuickTokengmItpuP = await QuickToken.new(addressj9y3FOj, addresskdfB8Tf, {from: accounts[1]});
		const uintLlCxBlT = BigInt("1590")
		const addressuLTc6E = accounts[3]
		const addressslHLUIp = accounts[4]
		const addressQjLw0a = accounts[1]
		const addressAfYcSNE = accounts[2]
		const addressL8TLrtL = accounts[0]
		const addressIwPblYj = "0x0000000000000000000000000000000000000001"
		const addressnhrqnDE = accounts[5]
		const boolSEAXAkF = await QuickTokengmItpuP.approve.call(addressuLTc6E, uintLlCxBlT, {from: accounts[0]});
		const uintV3NbVdX = await QuickTokengmItpuP.allowance.call(addressQjLw0a, addressslHLUIp, {from: "0x0000000000000000000000000000000000000001"});
		const uintNq6qcSi = await QuickTokengmItpuP.balanceOf.call(addressAfYcSNE, {from: accounts[4]});
		const uintoLYeFcF = await QuickTokengmItpuP.balanceOf.call(addressL8TLrtL, {from: accounts[1]});
		const addressalemnKD = await QuickTokengmItpuP.setMinter.call(addressIwPblYj, {from: accounts[4]});
		const uintZYXkMfG = await QuickTokengmItpuP.balanceOf.call(addressnhrqnDE, {from: accounts[1]});

		assert.equal(boolSEAXAkF, true)
		assert.equal(uintNq6qcSi, BigInt("2000000000000"))
		assert.equal(uintV3NbVdX, BigInt("0"))
		assert.equal(uintoLYeFcF, BigInt("0"))
		await expect(QuickTokengmItpuP.setMinter.call(addressIwPblYj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressGCCd76l = accounts[1]
		const addressRxuiW19 = accounts[0]
		const QuickTokengZj7Xxo = await QuickToken.new(addressGCCd76l, addressRxuiW19, {from: accounts[3]});
		const addressjivqS8e = accounts[1]
		const uintyJhuSRo = BigInt("841")
		const addresst7a5Xx = accounts[3]
		const uintioGvXpI = BigInt("440")
		const addressoD1TDOw = accounts[5]
		const addressOjYY82t = accounts[3]
		const uintlDqMKh9 = BigInt("875")
		const addressktQmz2u = accounts[3]
		const addressQm0OgiL = accounts[2]
		const uintiH3nZUw = BigInt("792")
		const addressDggfHTT = accounts[0]
		const addressoFNByAF = "0x0000000000000000000000000000000000000001"
		const addressUkCiyLO = accounts[0]
		const addressv4bJVrP = accounts[3]
		const uintpthYgKi = await QuickTokengZj7Xxo.balanceOf.call(addressjivqS8e, {from: accounts[4]});
		const boolil4vDOi = await QuickTokengZj7Xxo.transfer.call(addresst7a5Xx, uintyJhuSRo, {from: accounts[0]});
		const boolmwx6vMh = await QuickTokengZj7Xxo.transferFrom.call(addressOjYY82t, addressoD1TDOw, uintioGvXpI, {from: accounts[1]});
		const boolK9rl1SS = await QuickTokengZj7Xxo.transferFrom.call(addressQm0OgiL, addressktQmz2u, uintlDqMKh9, {from: accounts[4]});
		const booltlkzgET = await QuickTokengZj7Xxo.transferFrom.call(addressoFNByAF, addressDggfHTT, uintiH3nZUw, {from: accounts[3]});
		const uintQb7naV = await QuickTokengZj7Xxo.balanceOf.call(addressUkCiyLO, {from: "0x0000000000000000000000000000000000000001"});
		const uintVX9O6nC = await QuickTokengZj7Xxo.balanceOf.call(addressv4bJVrP, {from: accounts[1]});

		assert.equal(uintpthYgKi, BigInt("2000000000000"))
		await expect(QuickTokengZj7Xxo.transfer.call(addresst7a5Xx, uintyJhuSRo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxw0Knz = accounts[1]
		const address4Gp3nZ = accounts[0]
		const QuickTokengZj7Xxo = await QuickToken.new(addressxw0Knz, address4Gp3nZ, {from: accounts[3]});
		const addressGu7x4df = accounts[1]
		const uintoZSIoJk = BigInt("1731")
		const addressNThylrJ = accounts[1]
		const uintO6zu50U = BigInt("440")
		const addresscySw7TM = accounts[1]
		const addressPGravVq = accounts[3]
		const uintZJAt8nf = BigInt("1038")
		const addressTirXGYX = accounts[0]
		const addressax3CtCA = "0x0000000000000000000000000000000000000001"
		const addressQN2dXxb = accounts[0]
		const addressnYAp480 = accounts[3]
		const uintpthYgKi = await QuickTokengZj7Xxo.balanceOf.call(addressGu7x4df, {from: accounts[4]});
		const boolVoQ06Ut = await QuickTokengZj7Xxo.transfer.call(addressNThylrJ, uintoZSIoJk, {from: accounts[1]});
		const boolmwx6vMh = await QuickTokengZj7Xxo.transferFrom.call(addressPGravVq, addresscySw7TM, uintO6zu50U, {from: accounts[1]});
		const booltlkzgET = await QuickTokengZj7Xxo.transferFrom.call(addressax3CtCA, addressTirXGYX, uintZJAt8nf, {from: accounts[3]});
		const uintQb7naV = await QuickTokengZj7Xxo.balanceOf.call(addressQN2dXxb, {from: "0x0000000000000000000000000000000000000001"});
		const uintVX9O6nC = await QuickTokengZj7Xxo.balanceOf.call(addressnYAp480, {from: accounts[1]});

		assert.equal(boolVoQ06Ut, true)
		assert.equal(uintpthYgKi, BigInt("2000000000000"))
		await expect(QuickTokengZj7Xxo.transferFrom.call(addressPGravVq, addresscySw7TM, uintO6zu50U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresshjedsHh = accounts[4]
		const addressR8AEB9n = accounts[1]
		const QuickTokenYXsUeRO = await QuickToken.new(addresshjedsHh, addressR8AEB9n, {from: accounts[1]});
		const uintZiQBvLW = BigInt("1745")
		const addressm55bCCa = accounts[2]
		const uintXWOSKT6 = BigInt("118")
		const addresstgbx45I = accounts[2]
		const uintwDVOBhU = BigInt("85")
		const addressGZGAPn0 = accounts[4]
		const addresskSzk90s = await QuickTokenYXsUeRO.mint.call(addressm55bCCa, uintZiQBvLW, {from: accounts[1]});
		const boolVDyy7A = await QuickTokenYXsUeRO.approve.call(addresstgbx45I, uintXWOSKT6, {from: accounts[0]});
		const boolubE5vVh = await QuickTokenYXsUeRO.approve.call(addressGZGAPn0, uintwDVOBhU, {from: accounts[5]});

		assert.equal(boolVDyy7A, true)
		assert.equal(boolubE5vVh, true)
	});
})