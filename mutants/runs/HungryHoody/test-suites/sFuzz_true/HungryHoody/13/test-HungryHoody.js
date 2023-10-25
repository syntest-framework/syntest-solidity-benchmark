const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyALfKf4Z = await HungryHoody.new({from: accounts[5]});
		const addressnJqxCwE = accounts[5]
		const addressjrFGwmz = accounts[1]
		const addresscWq2JdT = accounts[4]
		const addressh9iRHJm = accounts[2]
		const uintf4hL6RW = BigInt("537")
		const addressNlDwiw = accounts[2]
		const uintj0hyhw = BigInt("439")
		const uintbCHWg72 = BigInt("1774")
		const uintetSXq6l = await HungryHoodyALfKf4Z.allowance.call(addressjrFGwmz, addressnJqxCwE, {from: accounts[4]});
		const uintiHPpKc = await HungryHoodyALfKf4Z.allowance.call(addressh9iRHJm, addresscWq2JdT, {from: accounts[2]});
		const boolPbi2MLF = await HungryHoodyALfKf4Z.transfer.call(addressNlDwiw, uintf4hL6RW, {from: accounts[1]});
		const uintraMISRH = await HungryHoodyALfKf4Z.safeMul.call(uintbCHWg72, uintj0hyhw, {from: accounts[0]});

		assert.equal(uintetSXq6l, BigInt("0"))
		assert.equal(uintiHPpKc, BigInt("0"))
		await expect(HungryHoodyALfKf4Z.transfer.call(addressNlDwiw, uintf4hL6RW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoody5RCZCw = await HungryHoody.new({from: accounts[5]});
		const uintgbZTTvd = BigInt("119")
		const uintSzaWOPc = BigInt("462")
		const uintCAHFVtt = BigInt("201")
		const addressi5qCaSG = accounts[2]
		const address85f906 = accounts[5]
		const uintHt8xu6Z = BigInt("680")
		const uint9gloTi = BigInt("338")
		const uintys9TUqW = BigInt("32")
		const addressfmba28 = accounts[1]
		const uintnrj9nN = await HungryHoody5RCZCw.safeMul.call(uintSzaWOPc, uintgbZTTvd, {from: accounts[0]});
		const boolJUch2il = await HungryHoody5RCZCw.transferFrom.call(address85f906, addressi5qCaSG, uintCAHFVtt, {from: accounts[0]});
		const uintU6QUZd = await HungryHoody5RCZCw.safeSub.call(uint9gloTi, uintHt8xu6Z, {from: accounts[3]});
		const boolpWelKeL = await HungryHoody5RCZCw.transfer.call(addressfmba28, uintys9TUqW, {from: accounts[1]});
		const uintAX5pIja = await HungryHoody5RCZCw.totalSupply.call({from: accounts[5]});

		assert.equal(uintnrj9nN, BigInt("54978"))
		await expect(HungryHoody5RCZCw.transferFrom.call(address85f906, addressi5qCaSG, uintCAHFVtt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyK1C27LO = await HungryHoody.new({from: accounts[1]});
		const uintbddFo5 = BigInt("925")
		const uinti2G9d0M = BigInt("1359")
		const uintank11Hw = BigInt("381")
		const uintcJ0XKeS = BigInt("1442")
		const uint1hrprI = BigInt("1568")
		const addressx6plWvB = accounts[4]
		const addressgsIvPyP = accounts[1]
		const uintrUNHqYr = await HungryHoodyK1C27LO.safeDiv.call(uinti2G9d0M, uintbddFo5, {from: accounts[2]});
		const uint45u2Ab = await HungryHoodyK1C27LO.safeSub.call(uintcJ0XKeS, uintank11Hw, {from: accounts[0]});
		const boolOHDEAYo = await HungryHoodyK1C27LO.transferFrom.call(addressgsIvPyP, addressx6plWvB, uint1hrprI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint45u2Ab, BigInt("1061"))
		assert.equal(uintrUNHqYr, BigInt("1"))
		await expect(HungryHoodyK1C27LO.transferFrom.call(addressgsIvPyP, addressx6plWvB, uint1hrprI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyeUiecGk = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const addressv8HJnJo = "0x0000000000000000000000000000000000000001"
		const uintqd2s0qs = BigInt("181")
		const uintwnBFMO = BigInt("436")
		const uintBGpcrus = await HungryHoodyeUiecGk.totalSupply.call({from: accounts[5]});
		const uintNEkgM2R = await HungryHoodyeUiecGk.balanceOf.call(addressv8HJnJo, {from: accounts[4]});
		const uintU5RkNfi = await HungryHoodyeUiecGk.totalSupply.call({from: accounts[0]});
		const uintYDKy2AJ = await HungryHoodyeUiecGk.safeMul.call(uintwnBFMO, uintqd2s0qs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodySRgX6pp = await HungryHoody.new({from: accounts[4]});
		const uint8xvkNW = BigInt("1231")
		const addressIHg2Wrg = accounts[2]
		const uintktnkgaV = BigInt("403")
		const addressQsXIjTe = accounts[5]
		const uintNNPdCN = BigInt("1045")
		const uintjZnVPmU = BigInt("366")
		const uintJxsu9r = BigInt("71")
		const addressGttrNBM = accounts[4]
		const uintmWcK7ru = BigInt("643")
		const addressWezurPN = "0x0000000000000000000000000000000000000001"
		const boolhQVh8jS = await HungryHoodySRgX6pp.approve.call(addressIHg2Wrg, uint8xvkNW, {from: "0x0000000000000000000000000000000000000001"});
		const boolZbGZxw8 = await HungryHoodySRgX6pp.transfer.call(addressQsXIjTe, uintktnkgaV, {from: accounts[5]});
		const uintr3Tz76E = await HungryHoodySRgX6pp.safeMul.call(uintjZnVPmU, uintNNPdCN, {from: accounts[0]});
		const boolTFhGRbj = await HungryHoodySRgX6pp.transfer.call(addressGttrNBM, uintJxsu9r, {from: accounts[1]});
		const boolHUx3BYG = await HungryHoodySRgX6pp.approve.call(addressWezurPN, uintmWcK7ru, {from: accounts[1]});

		assert.equal(boolhQVh8jS, true)
		await expect(HungryHoodySRgX6pp.transfer.call(addressQsXIjTe, uintktnkgaV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodydHB3xf3 = await HungryHoody.new({from: accounts[2]});
		const addressMIeJSZ6 = accounts[3]
		const uintMWiNbz5 = BigInt("1313")
		const addresssGcAHFR = "0x0000000000000000000000000000000000000001"
		const uintaQxtKau = BigInt("505")
		const addressAHVVjfY = accounts[2]
		const addressXca6zNB = accounts[1]
		const uintvRkUUnM = BigInt("412")
		const uintKmgT0WF = BigInt("289")
		const uintVzwjxET = BigInt("820")
		const addressOCX1mm1 = accounts[3]
		const uintYD7MtRd = BigInt("1263")
		const uintglH39S = BigInt("563")
		const uintkaawB0Y = await HungryHoodydHB3xf3.balanceOf.call(addressMIeJSZ6, {from: accounts[2]});
		const boolWJGv6Fv = await HungryHoodydHB3xf3.transfer.call(addresssGcAHFR, uintMWiNbz5, {from: "0x0000000000000000000000000000000000000001"});
		const boolfkXpZx5 = await HungryHoodydHB3xf3.transferFrom.call(addressXca6zNB, addressAHVVjfY, uintaQxtKau, {from: accounts[0]});
		const uintdQUwbn = await HungryHoodydHB3xf3.safeAdd.call(uintKmgT0WF, uintvRkUUnM, {from: accounts[0]});
		const boolXVnaH4T = await HungryHoodydHB3xf3.transfer.call(addressOCX1mm1, uintVzwjxET, {from: accounts[1]});
		const uintq7JIvUe = await HungryHoodydHB3xf3.safeSub.call(uintglH39S, uintYD7MtRd, {from: accounts[3]});

		assert.equal(uintkaawB0Y, BigInt("0"))
		await expect(HungryHoodydHB3xf3.transfer.call(addresssGcAHFR, uintMWiNbz5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoody3Jjct9 = await HungryHoody.new({from: accounts[2]});
		const uintiIuFwo4 = BigInt("137")
		const uintdeGQ0pd = BigInt("698")
		const uintMROeNc = await HungryHoody3Jjct9.safeDiv.call(uintdeGQ0pd, uintiIuFwo4, {from: accounts[2]});
		const uintaQOn4N = await HungryHoody3Jjct9.totalSupply.call({from: accounts[3]});

		assert.equal(uintMROeNc, BigInt("5"))
		assert.equal(uintaQOn4N, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoody3Jjct9 = await HungryHoody.new({from: accounts[2]});
		const uint6R1bwP = BigInt("137")
		const uintGiX95ET = BigInt("711")
		const uintAuK61P1 = BigInt("611")
		const uintNjEyBxS = BigInt("1437")
		const uintMROeNc = await HungryHoody3Jjct9.safeDiv.call(uintGiX95ET, uint6R1bwP, {from: accounts[2]});
		const uintT2CXU6A = await HungryHoody3Jjct9.safeAdd.call(uintNjEyBxS, uintAuK61P1, {from: accounts[0]});

		assert.equal(uintMROeNc, BigInt("5"))
		assert.equal(uintT2CXU6A, BigInt("2048"))
	});
})