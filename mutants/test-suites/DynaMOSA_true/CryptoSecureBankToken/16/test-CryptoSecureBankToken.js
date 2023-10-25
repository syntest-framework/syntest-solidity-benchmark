const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenssqySOA = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintkQHRFS = BigInt("192")
		const uintZUbLyMA = BigInt("544")
		const uintoj5Oy3A = BigInt("13")
		const uintd29hJ5M = BigInt("1540")
		const addressCs7yDVm = accounts[4]
		const addressHyycwaK = accounts[1]
		const uintNdSmh9o = BigInt("865")
		const uintxOmumIA = BigInt("860")
		const addressVM8cqLQ = accounts[5]
		const addressd88KMOK = accounts[5]
//		const uintuswOljT = await CryptoSecureBankTokenssqySOA.onlyPayloadSize.call(uintkQHRFS, {from: accounts[0]});
//		const uintJ0Puq6X = await CryptoSecureBankTokenssqySOA.setParams.call(uintoj5Oy3A, uintZUbLyMA, {from: accounts[0]});
//		const boolAx0igaE = await CryptoSecureBankTokenssqySOA.approve.call(addressCs7yDVm, uintd29hJ5M, {from: accounts[0]});
//		const addressn7YgHz8 = await CryptoSecureBankTokenssqySOA.removeBlackList.call(addressHyycwaK, {from: accounts[0]});
//		const boolv8GZXUt = await CryptoSecureBankTokenssqySOA.redeem.call(uintNdSmh9o, {from: accounts[2]});
//		const boolfHWxR62 = await CryptoSecureBankTokenssqySOA.transferFrom.call(addressd88KMOK, addressVM8cqLQ, uintxOmumIA, {from: accounts[4]});

		await expect(CryptoSecureBankTokenssqySOA.onlyPayloadSize.call(uintkQHRFS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXTT0Bse = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressBDjLtyx = accounts[3]
		const uintEIFLHh1 = BigInt("1771")
		const addresslAZpfSU = accounts[3]
		const uintpDvl2P = BigInt("1140")
		const addressm6NC9n = accounts[0]
		const addressfIU2l2w = await CryptoSecureBankTokenXTT0Bse.getOwner.call({from: accounts[0]});
//		const addressIuSTpJu = await CryptoSecureBankTokenXTT0Bse.addBlackList.call(addressBDjLtyx, {from: accounts[1]});
//		const boolWA7iC2T = await CryptoSecureBankTokenXTT0Bse.approve.call(addresslAZpfSU, uintEIFLHh1, {from: accounts[3]});
//		const boolr4yiwb = await CryptoSecureBankTokenXTT0Bse.approve.call(addressm6NC9n, uintpDvl2P, {from: accounts[1]});

		assert.equal(addressfIU2l2w, 0xBF6B0E03Edb8E02A521bb8fF24D89777ED725410)
		await expect(CryptoSecureBankTokenXTT0Bse.addBlackList.call(addressBDjLtyx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXybY37T = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressoRfgeZx = accounts[2]
		const addressJekjAZp = "0x0000000000000000000000000000000000000001"
		const addressGo9w5IN = accounts[1]
		const addressVW1O1Pv = accounts[4]
		const addresseVGlAEK = accounts[4]
		const uintJdYMb9Z = BigInt("1552")
		const addressqWhx2gJ = accounts[2]
		const addressW4Uox9Y = accounts[4]
		const boolRXS8Oty = await CryptoSecureBankTokenXybY37T.getBlackListStatus.call(addressoRfgeZx, {from: accounts[2]});
//		const addressR4mfMQl = await CryptoSecureBankTokenXybY37T.transferOwnership.call(addressJekjAZp, {from: accounts[4]});
//		const addressQicfaoA = await CryptoSecureBankTokenXybY37T.transferOwnership.call(addressGo9w5IN, {from: accounts[2]});
//		const uintkppabjW = await CryptoSecureBankTokenXybY37T.allowance.call(addresseVGlAEK, addressVW1O1Pv, {from: accounts[1]});
//		const booldOB0jYM = await CryptoSecureBankTokenXybY37T.approve.call(addressqWhx2gJ, uintJdYMb9Z, {from: accounts[1]});
//		const addresswpa8zlN = await CryptoSecureBankTokenXybY37T.addBlackList.call(addressW4Uox9Y, {from: accounts[1]});

		assert.equal(boolRXS8Oty, false)
		await expect(CryptoSecureBankTokenXybY37T.transferOwnership.call(addressJekjAZp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentWXRV0Q = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintepd8aLD = BigInt("50")
		const addressZSQlXKd = accounts[2]
		const address2hSDY0 = accounts[0]
		const addresswnqOhwX = accounts[3]
//		const boolAlQGIf6 = await CryptoSecureBankTokentWXRV0Q.transferFrom.call(address2hSDY0, addressZSQlXKd, uintepd8aLD, {from: accounts[3]});
//		const addressuf09ahf = await CryptoSecureBankTokentWXRV0Q.removeBlackList.call(addresswnqOhwX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokentWXRV0Q.transferFrom.call(address2hSDY0, addressZSQlXKd, uintepd8aLD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenv76nczC = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXEAsEir = accounts[5]
		const addressS7K83hA = accounts[2]
		const uintfUn60d = BigInt("781")
		const addressPXQAK5N = accounts[2]
		const addressNjm0KOn = accounts[1]
		const uintEQmAAo0 = BigInt("1108")
		const addressguE6Oj = accounts[4]
		const uintmF1g6Fo = await CryptoSecureBankTokenv76nczC.totalSupply.call({from: accounts[0]});
		const addresseQxe03 = await CryptoSecureBankTokenv76nczC.transferOwnership.call(addressXEAsEir, {from: accounts[0]});
		const uintGiZIzCK = await CryptoSecureBankTokenv76nczC.balanceOf.call(addressS7K83hA, {from: accounts[4]});
		const boolopGi2VT = await CryptoSecureBankTokenv76nczC.transferFrom.call(addressNjm0KOn, addressPXQAK5N, uintfUn60d, {from: accounts[2]});
		const boolThLJbm5 = await CryptoSecureBankTokenv76nczC.approve.call(addressguE6Oj, uintEQmAAo0, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXvzBxqf = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressh447HVb = accounts[3]
		const addressMI6MXLj = accounts[1]
		const uintQig6xZh = BigInt("1538")
		const addressjjbagJE = accounts[2]
		const addresszJAOhsY = accounts[4]
		const uintoc4sHpv = BigInt("1527")
		const addressACuJp2u = accounts[0]
		const addressQSYJI4A = accounts[4]
		const uintUHYmhrI = await CryptoSecureBankTokenXvzBxqf.allowance.call(addressMI6MXLj, addressh447HVb, {from: accounts[2]});
//		const boolrQyW0jd = await CryptoSecureBankTokenXvzBxqf.transferFrom.call(addresszJAOhsY, addressjjbagJE, uintQig6xZh, {from: accounts[1]});
//		const booltdAHuS = await CryptoSecureBankTokenXvzBxqf.transfer.call(addressACuJp2u, uintoc4sHpv, {from: accounts[1]});
//		const uintpYWLWuF = await CryptoSecureBankTokenXvzBxqf.balanceOf.call(addressQSYJI4A, {from: accounts[0]});

		assert.equal(uintUHYmhrI, BigInt("0"))
		await expect(CryptoSecureBankTokenXvzBxqf.transferFrom.call(addresszJAOhsY, addressjjbagJE, uintQig6xZh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokensjJmq73 = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintOsyBwZE = BigInt("240")
		const addresscIMEVow = accounts[3]
		const uintiM6HEeg = BigInt("1015")
		const uinthY0pd7 = BigInt("1051")
		const address1rh93Y = accounts[2]
		const booljSYUZwS = await CryptoSecureBankTokensjJmq73.transfer.call(addresscIMEVow, uintOsyBwZE, {from: accounts[0]});
//		const boolvJoLagv = await CryptoSecureBankTokensjJmq73.redeem.call(uintiM6HEeg, {from: accounts[2]});
//		const booljaFEIz3 = await CryptoSecureBankTokensjJmq73.approve.call(address1rh93Y, uinthY0pd7, {from: "0x0000000000000000000000000000000000000001"});
//		const addresskONGYYL = await CryptoSecureBankTokensjJmq73.getOwner.call({from: accounts[1]});

		assert.equal(booljSYUZwS, true)
		await expect(CryptoSecureBankTokensjJmq73.redeem.call(uintiM6HEeg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrttFc77 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressVlxDQVz = accounts[5]
		const uintT6ipfGj = BigInt("273")
		const uintU2WQvL8 = BigInt("1582")
		const addressfM0xM1 = await CryptoSecureBankTokenrttFc77.addBlackList.call(addressVlxDQVz, {from: accounts[4]});
//		const uintW3nIPkx = await CryptoSecureBankTokenrttFc77.onlyPayloadSize.call(uintT6ipfGj, {from: accounts[3]});
//		const uinttzUYL9m = await CryptoSecureBankTokenrttFc77.onlyPayloadSize.call(uintU2WQvL8, {from: accounts[4]});

		await expect(CryptoSecureBankTokenrttFc77.onlyPayloadSize.call(uintT6ipfGj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentWXRV0Q = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintIZnX0M = BigInt("707")
		const addressRIL0HPQ = accounts[2]
		const addressrX88cdI = accounts[3]
		const addressUIegi2c = accounts[0]
		const boolJOszwHU = await CryptoSecureBankTokentWXRV0Q.approve.call(addressRIL0HPQ, uintIZnX0M, {from: accounts[4]});
//		const addressuf09ahf = await CryptoSecureBankTokentWXRV0Q.removeBlackList.call(addressrX88cdI, {from: "0x0000000000000000000000000000000000000001"});
//		const uintROsUopy = await CryptoSecureBankTokentWXRV0Q.balanceOf.call(addressUIegi2c, {from: accounts[3]});

		assert.equal(boolJOszwHU, true)
		await expect(CryptoSecureBankTokentWXRV0Q.removeBlackList.call(addressrX88cdI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRO493Qn = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresshPtNJg6 = accounts[4]
		const addresszsyo1Ze = accounts[5]
		const addressLDqDMj = accounts[1]
		const addressPhlj1tF = accounts[2]
		const addressV7DC7eG = accounts[3]
		const uintjHFdBeD = await CryptoSecureBankTokenRO493Qn.balanceOf.call(addresshPtNJg6, {from: accounts[5]});
//		const addressgY6ZT9 = await CryptoSecureBankTokenRO493Qn.destroyBlackFunds.call(addresszsyo1Ze, {from: accounts[1]});
//		const addressHDSEbur = await CryptoSecureBankTokenRO493Qn.removeBlackList.call(addressLDqDMj, {from: accounts[0]});
//		const addressR0HOzAG = await CryptoSecureBankTokenRO493Qn.setOwner2.call(addressPhlj1tF, {from: accounts[4]});
//		const addressh2GsqoG = await CryptoSecureBankTokenRO493Qn.addBlackList.call(addressV7DC7eG, {from: accounts[3]});

		assert.equal(uintjHFdBeD, BigInt("0"))
		await expect(CryptoSecureBankTokenRO493Qn.destroyBlackFunds.call(addresszsyo1Ze, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRO493Qn = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressmSZB30s = accounts[4]
		const addressxZvtaH = accounts[1]
		const addressKRS26C6 = accounts[2]
		const addressLzf8Lmy = accounts[3]
		const uintjHFdBeD = await CryptoSecureBankTokenRO493Qn.balanceOf.call(addressmSZB30s, {from: accounts[5]});
		const addressHDSEbur = await CryptoSecureBankTokenRO493Qn.removeBlackList.call(addressxZvtaH, {from: accounts[0]});
//		const addressR0HOzAG = await CryptoSecureBankTokenRO493Qn.setOwner2.call(addressKRS26C6, {from: accounts[4]});
//		const addressh2GsqoG = await CryptoSecureBankTokenRO493Qn.addBlackList.call(addressLzf8Lmy, {from: accounts[3]});

		assert.equal(uintjHFdBeD, BigInt("0"))
		await expect(CryptoSecureBankTokenRO493Qn.setOwner2.call(addressKRS26C6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenmuSMq0p = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressgUKaocT = accounts[4]
		const uintU9kqNvp = await CryptoSecureBankTokenmuSMq0p.totalSupply.call({from: accounts[5]});
		const uintQeV8ZwS = await CryptoSecureBankTokenmuSMq0p.balanceOf.call(addressgUKaocT, {from: accounts[4]});
		const addressrVFRLdp = await CryptoSecureBankTokenmuSMq0p.getOwner.call({from: accounts[4]});
//		await CryptoSecureBankTokenmuSMq0p.whenPaused.call({from: accounts[0]});
//		await CryptoSecureBankTokenmuSMq0p.pause.call({from: accounts[4]});

		assert.equal(addressrVFRLdp, 0xA347960abb3A3ED47351E4aE83fCbA7491006BeB)
		assert.equal(uintQeV8ZwS, BigInt("0"))
		assert.equal(uintU9kqNvp, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenmuSMq0p.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentWXRV0Q = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintfd4c5W = BigInt("707")
		const address45kyxX = accounts[2]
		const uintny9fEc4 = BigInt("0")
		const addressBPPqo4f = accounts[0]
		const addressUlgOxug = accounts[0]
		const addressdMSHIq = accounts[3]
		const addressbpFHb5 = accounts[1]
		const boolJOszwHU = await CryptoSecureBankTokentWXRV0Q.approve.call(address45kyxX, uintfd4c5W, {from: accounts[4]});
		const boolkfYRsUZ = await CryptoSecureBankTokentWXRV0Q.transferFrom.call(addressUlgOxug, addressBPPqo4f, uintny9fEc4, {from: accounts[5]});
//		const addressuf09ahf = await CryptoSecureBankTokentWXRV0Q.removeBlackList.call(addressdMSHIq, {from: "0x0000000000000000000000000000000000000001"});
//		const uintROsUopy = await CryptoSecureBankTokentWXRV0Q.balanceOf.call(addressbpFHb5, {from: accounts[3]});

		assert.equal(boolJOszwHU, true)
		assert.equal(boolkfYRsUZ, true)
		await expect(CryptoSecureBankTokentWXRV0Q.removeBlackList.call(addressdMSHIq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenjCCoRgL = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintZ5rnpy0 = BigInt("1485")
		const addresszrTigTx = accounts[3]
		const boolriRdcQz = await CryptoSecureBankTokenjCCoRgL.redeem.call(uintZ5rnpy0, {from: accounts[1]});
//		const addresshNrl9Q2 = await CryptoSecureBankTokenjCCoRgL.destroyBlackFunds.call(addresszrTigTx, {from: accounts[3]});

		assert.equal(boolriRdcQz, true)
		await expect(CryptoSecureBankTokenjCCoRgL.destroyBlackFunds.call(addresszrTigTx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXvzBxqf = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressi05ZaR = accounts[0]
		const uintdHJrvTd = BigInt("1527")
		const addressJ8qCPyt = accounts[1]
		const addresshMpvDOr = await CryptoSecureBankTokenXvzBxqf.transferOwnership.call(addressi05ZaR, {from: accounts[1]});
		const booltdAHuS = await CryptoSecureBankTokenXvzBxqf.transfer.call(addressJ8qCPyt, uintdHJrvTd, {from: accounts[1]});

		assert.equal(booltdAHuS, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXvzBxqf = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressycYFiu = accounts[5]
		const addressrNt6mnT = accounts[5]
		const addressqFbYwwn = accounts[1]
		const boolgAsW8Bb = await CryptoSecureBankTokenXvzBxqf.deprecate.call(addressycYFiu, {from: accounts[1]});
		const uintUHYmhrI = await CryptoSecureBankTokenXvzBxqf.allowance.call(addressqFbYwwn, addressrNt6mnT, {from: accounts[2]});

		assert.equal(boolgAsW8Bb, true)
		assert.equal(uintUHYmhrI, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKvz1HW3 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressxCpHtCq = accounts[1]
		const addressOIknbyg = accounts[5]
		const addressYjLXxnM = accounts[0]
		const addresss8ylUvZ = accounts[3]
		const boolSujGzwX = await CryptoSecureBankTokenKvz1HW3.deprecate.call(addressxCpHtCq, {from: accounts[3]});
//		const addresssdS0TLy = await CryptoSecureBankTokenKvz1HW3.destroyBlackFunds.call(addressOIknbyg, {from: accounts[3]});
//		const addressiq1XKEJ = await CryptoSecureBankTokenKvz1HW3.transferOwnership.call(addressYjLXxnM, {from: accounts[0]});
//		const addressaGj16ya = await CryptoSecureBankTokenKvz1HW3.addBlackList.call(addresss8ylUvZ, {from: accounts[3]});

		assert.equal(boolSujGzwX, true)
		await expect(CryptoSecureBankTokenKvz1HW3.destroyBlackFunds.call(addressOIknbyg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXvzBxqf = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintXLIaOez = BigInt("1692")
		const uintOcD7P2 = BigInt("1135")
		const addressQlTJKZI = accounts[2]
		const addressMLNcjjw = accounts[6]
		const uintE0pxHS = BigInt("1542")
		const addresshtl2gwb = accounts[1]
//		const uintt2C6hdG = await CryptoSecureBankTokenXvzBxqf.setParams.call(uintOcD7P2, uintXLIaOez, {from: accounts[1]});
//		const addressXBHgkF = await CryptoSecureBankTokenXvzBxqf.destroyBlackFunds.call(addressQlTJKZI, {from: accounts[1]});
//		const uintjZuHu8g = await CryptoSecureBankTokenXvzBxqf.balanceOf.call(addressMLNcjjw, {from: accounts[0]});
//		const booltdAHuS = await CryptoSecureBankTokenXvzBxqf.transfer.call(addresshtl2gwb, uintE0pxHS, {from: accounts[1]});

		await expect(CryptoSecureBankTokenXvzBxqf.setParams.call(uintOcD7P2, uintXLIaOez, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXvzBxqf = await CryptoSecureBankToken.new({from: accounts[1]});
		const uinttq62QAC = BigInt("780")
		const addresswkmrGO2 = accounts[2]
		const address0rBt2d = accounts[3]
		const uints2pKQg = BigInt("1692")
		const uintMvUXvVT = BigInt("1135")
		const addresse6I1pI1 = accounts[2]
		const addressgWfWsS = accounts[6]
		const uintXcCYMgY = BigInt("1542")
		const addressKzOi1cl = accounts[2]
		const booleHIWnQs = await CryptoSecureBankTokenXvzBxqf.approve.call(addresswkmrGO2, uinttq62QAC, {from: accounts[3]});
		const addresse36EXav = await CryptoSecureBankTokenXvzBxqf.setOwner2.call(address0rBt2d, {from: accounts[1]});
//		const uintt2C6hdG = await CryptoSecureBankTokenXvzBxqf.setParams.call(uintMvUXvVT, uints2pKQg, {from: accounts[1]});
//		const addressXBHgkF = await CryptoSecureBankTokenXvzBxqf.destroyBlackFunds.call(addresse6I1pI1, {from: accounts[1]});
//		const uintjZuHu8g = await CryptoSecureBankTokenXvzBxqf.balanceOf.call(addressgWfWsS, {from: accounts[0]});
//		const booltdAHuS = await CryptoSecureBankTokenXvzBxqf.transfer.call(addressKzOi1cl, uintXcCYMgY, {from: accounts[1]});

		assert.equal(booleHIWnQs, true)
		await expect(CryptoSecureBankTokenXvzBxqf.setParams.call(uintMvUXvVT, uints2pKQg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentWXRV0Q = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintrAKFyvC = BigInt("53")
		const addressMck9g5C = accounts[2]
		const uintb1HKps = BigInt("0")
		const addressQvgVHXI = accounts[0]
		const addressnrHnFLw = accounts[0]
		const addressfnQYX4s = accounts[3]
//		await CryptoSecureBankTokentWXRV0Q.pause.call({from: accounts[1]});
//		const boolJOszwHU = await CryptoSecureBankTokentWXRV0Q.approve.call(addressMck9g5C, uintrAKFyvC, {from: accounts[4]});
//		const uinti3uAR1c = await CryptoSecureBankTokentWXRV0Q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolkfYRsUZ = await CryptoSecureBankTokentWXRV0Q.transferFrom.call(addressnrHnFLw, addressQvgVHXI, uintb1HKps, {from: accounts[5]});
//		const addressuf09ahf = await CryptoSecureBankTokentWXRV0Q.removeBlackList.call(addressfnQYX4s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokentWXRV0Q.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})