const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenxU8yHK0 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressKNQWwVz = accounts[1]
		const addressELfiXH = accounts[0]
		const addressMgn0cfZ = await CryptoSecureBankTokenxU8yHK0.addBlackList.call(addressKNQWwVz, {from: accounts[3]});
		const uintmt56Bqz = await CryptoSecureBankTokenxU8yHK0.balanceOf.call(addressELfiXH, {from: accounts[1]});

		await expect(CryptoSecureBankTokenxU8yHK0.addBlackList.call(addressKNQWwVz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKGHZAli = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressakYV4I = accounts[1]
		const addresseZ16OpW = accounts[3]
		const uintBTqk7SS = BigInt("1475")
		const addressJGwO1Oa = accounts[3]
		const addresslw4gDlK = accounts[5]
		const addressPj2kEBx = accounts[3]
		const addressBvs0MVV = accounts[2]
		const uintmQ394Ye = BigInt("928")
		const addressgRCXxbp = accounts[4]
		const addresstotrF1s = accounts[0]
		const uintroz8J7n = BigInt("1437")
		const uintejSsVvH = await CryptoSecureBankTokenKGHZAli.allowance.call(addresseZ16OpW, addressakYV4I, {from: accounts[1]});
		const boolQu15eU = await CryptoSecureBankTokenKGHZAli.transferFrom.call(addresslw4gDlK, addressJGwO1Oa, uintBTqk7SS, {from: accounts[5]});
		const uintiUuAuDd = await CryptoSecureBankTokenKGHZAli.allowance.call(addressBvs0MVV, addressPj2kEBx, {from: accounts[5]});
		const boolFgL2Db3 = await CryptoSecureBankTokenKGHZAli.transferFrom.call(addresstotrF1s, addressgRCXxbp, uintmQ394Ye, {from: accounts[1]});
		const uintovggQJa = await CryptoSecureBankTokenKGHZAli.onlyPayloadSize.call(uintroz8J7n, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVheujc = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressIf4Aduh = accounts[5]
		const addresshaJSGgu = await CryptoSecureBankTokenVheujc.getOwner.call({from: accounts[1]});
		await CryptoSecureBankTokenVheujc.pause.call({from: accounts[0]});
		await CryptoSecureBankTokenVheujc.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolcBlh5U2 = await CryptoSecureBankTokenVheujc.getBlackListStatus.call(addressIf4Aduh, {from: accounts[0]});

		assert.equal(addresshaJSGgu, 0x6f09d17086AaE8B91EE4b93D7f31c714014Bc831)
		await expect(CryptoSecureBankTokenVheujc.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenV6ZsEY8 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresscOqRhcd = accounts[5]
		const uintiegSVuv = BigInt("108")
		const addressFzdBjEK = accounts[4]
		const addresslC8cCif = await CryptoSecureBankTokenV6ZsEY8.setOwner2.call(addresscOqRhcd, {from: accounts[3]});
		const addressNpKayxF = await CryptoSecureBankTokenV6ZsEY8.getOwner.call({from: accounts[4]});
		const boolzb4D0Cc = await CryptoSecureBankTokenV6ZsEY8.transfer.call(addressFzdBjEK, uintiegSVuv, {from: accounts[0]});
		await CryptoSecureBankTokenV6ZsEY8.onlyOwner.call({from: accounts[5]});

		assert.equal(addressNpKayxF, 0xcB4dC8446f9CfC0E75376F290741112482a14bef)
		await expect(CryptoSecureBankTokenV6ZsEY8.transfer.call(addressFzdBjEK, uintiegSVuv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenqE1AUkd = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressPFURFt = accounts[1]
		await CryptoSecureBankTokenqE1AUkd.whenNotPaused.call({from: accounts[5]});
		const boolqy0Byz = await CryptoSecureBankTokenqE1AUkd.getBlackListStatus.call(addressPFURFt, {from: accounts[2]});

		await expect(CryptoSecureBankTokenqE1AUkd.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenokM00Yh = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinterCZbU = BigInt("1278")
		const addressQxvG5Q = accounts[3]
		const addressaciRzIQ = accounts[4]
		const addresscFZCWd = accounts[1]
		const uintrw1NO2Q = BigInt("962")
		const addressPoxE4H = accounts[4]
		const addressxFKHGJm = accounts[4]
		const addressPaQ3h5d = accounts[5]
		const boolryXrgbL = await CryptoSecureBankTokenokM00Yh.transferFrom.call(addressaciRzIQ, addressQxvG5Q, uinterCZbU, {from: accounts[0]});
		const addressvKU5YG7 = await CryptoSecureBankTokenokM00Yh.transferOwnership.call(addresscFZCWd, {from: accounts[4]});
		const booljRiVpjE = await CryptoSecureBankTokenokM00Yh.transfer.call(addressPoxE4H, uintrw1NO2Q, {from: accounts[0]});
		const addressME4dp8q = await CryptoSecureBankTokenokM00Yh.removeBlackList.call(addressxFKHGJm, {from: accounts[3]});
		const booloVFhNIG = await CryptoSecureBankTokenokM00Yh.getBlackListStatus.call(addressPaQ3h5d, {from: accounts[4]});

		await expect(CryptoSecureBankTokenokM00Yh.transferFrom.call(addressaciRzIQ, addressQxvG5Q, uinterCZbU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenue6eKtJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressWTVN447 = accounts[3]
		const addressz3v5cJj = accounts[3]
		const uintlc8dKn7 = BigInt("284")
		const addressrKyl7iz = accounts[3]
		const uintxNu3Mp = await CryptoSecureBankTokenue6eKtJ.balanceOf.call(addressWTVN447, {from: accounts[4]});
		const boolLzNi8sv = await CryptoSecureBankTokenue6eKtJ.deprecate.call(addressz3v5cJj, {from: accounts[3]});
		const booljOOopT6 = await CryptoSecureBankTokenue6eKtJ.transfer.call(addressrKyl7iz, uintlc8dKn7, {from: accounts[3]});

		assert.equal(boolLzNi8sv, true)
		assert.equal(booljOOopT6, true)
		assert.equal(uintxNu3Mp, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAaHRDB7 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresshc3vnE = accounts[3]
		const addressmTJaZwL = accounts[0]
		const uintqIHWe21 = await CryptoSecureBankTokenAaHRDB7.allowance.call(addressmTJaZwL, addresshc3vnE, {from: accounts[2]});

		assert.equal(uintqIHWe21, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenV6ZsEY8 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressQusGVxE = accounts[5]
		const uintBZd7IVY = BigInt("931")
		const addressr7D6I75 = "0x0000000000000000000000000000000000000001"
		const uintVQ8CrrG = BigInt("1551")
		const addressTR1hhE = accounts[4]
		const addressD6p0rNH = accounts[2]
		const addresslC8cCif = await CryptoSecureBankTokenV6ZsEY8.setOwner2.call(addressQusGVxE, {from: accounts[3]});
		const bool6Uhj1u = await CryptoSecureBankTokenV6ZsEY8.approve.call(addressr7D6I75, uintBZd7IVY, {from: accounts[0]});
		const addressNpKayxF = await CryptoSecureBankTokenV6ZsEY8.getOwner.call({from: accounts[4]});
		const booldIIyQe = await CryptoSecureBankTokenV6ZsEY8.transferFrom.call(addressD6p0rNH, addressTR1hhE, uintVQ8CrrG, {from: accounts[4]});
		await CryptoSecureBankTokenV6ZsEY8.onlyOwner.call({from: accounts[5]});

		assert.equal(addressNpKayxF, 0xcB4dC8446f9CfC0E75376F290741112482a14bef)
		assert.equal(bool6Uhj1u, true)
		await expect(CryptoSecureBankTokenV6ZsEY8.transferFrom.call(addressD6p0rNH, addressTR1hhE, uintVQ8CrrG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKroQtV0 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressl49udlv = accounts[5]
		const addresszDLpKd6 = accounts[3]
		const addressQT6exx8 = accounts[2]
		const addresswQn10OG = await CryptoSecureBankTokenKroQtV0.destroyBlackFunds.call(addressl49udlv, {from: accounts[4]});
		const uinteCsnqbH = await CryptoSecureBankTokenKroQtV0.balanceOf.call(addresszDLpKd6, {from: accounts[2]});
		const uinttOH3dnN = await CryptoSecureBankTokenKroQtV0.balanceOf.call(addressQT6exx8, {from: accounts[4]});
		await CryptoSecureBankTokenKroQtV0.onlyOwner.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenKroQtV0.destroyBlackFunds.call(addressl49udlv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenue6eKtJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressuMetb2 = accounts[3]
		const addressA1vgXgJ = accounts[4]
		const addresslwkUuh6 = accounts[4]
		const uintsVGrXjQ = BigInt("284")
		const addressiYn6Wj8 = accounts[3]
		const uintxNu3Mp = await CryptoSecureBankTokenue6eKtJ.balanceOf.call(addressuMetb2, {from: accounts[4]});
		const addresssEcjXox = await CryptoSecureBankTokenue6eKtJ.transferOwnership.call(addressA1vgXgJ, {from: accounts[1]});
		const uintOXWTY9 = await CryptoSecureBankTokenue6eKtJ.totalSupply.call({from: accounts[4]});
		const boolLzNi8sv = await CryptoSecureBankTokenue6eKtJ.deprecate.call(addresslwkUuh6, {from: accounts[3]});
		const booljOOopT6 = await CryptoSecureBankTokenue6eKtJ.transfer.call(addressiYn6Wj8, uintsVGrXjQ, {from: accounts[3]});

		assert.equal(uintxNu3Mp, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenue6eKtJ.transferOwnership.call(addressA1vgXgJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpe9FDFB = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressJrkvgJt = accounts[0]
		const uinteSlsKeh = await CryptoSecureBankTokenpe9FDFB.totalSupply.call({from: accounts[4]});
		await CryptoSecureBankTokenpe9FDFB.whenPaused.call({from: accounts[4]});
		const addressNff5MMg = await CryptoSecureBankTokenpe9FDFB.addBlackList.call(addressJrkvgJt, {from: accounts[0]});

		assert.equal(uinteSlsKeh, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenpe9FDFB.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenV6ZsEY8 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressS5F9kB2 = accounts[5]
		const addressU2hGd9B = accounts[4]
		const uintOAbppyJ = BigInt("108")
		const addressW7xHkOS = accounts[5]
		const uintujtZmG = BigInt("1502")
		const addresseiceodp = accounts[3]
		const addressuyxjtoF = accounts[1]
		const addresslC8cCif = await CryptoSecureBankTokenV6ZsEY8.setOwner2.call(addressS5F9kB2, {from: accounts[3]});
		const boolGITJR6g = await CryptoSecureBankTokenV6ZsEY8.getBlackListStatus.call(addressU2hGd9B, {from: accounts[5]});
		const boolzb4D0Cc = await CryptoSecureBankTokenV6ZsEY8.transfer.call(addressW7xHkOS, uintOAbppyJ, {from: accounts[0]});
		await CryptoSecureBankTokenV6ZsEY8.onlyOwner.call({from: accounts[5]});
		const boolChOhAp4 = await CryptoSecureBankTokenV6ZsEY8.transferFrom.call(addressuyxjtoF, addresseiceodp, uintujtZmG, {from: accounts[3]});

		assert.equal(boolGITJR6g, false)
		await expect(CryptoSecureBankTokenV6ZsEY8.transfer.call(addressW7xHkOS, uintOAbppyJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenV6ZsEY8 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressGDjRV1K = accounts[5]
		const uintIrUBJS = BigInt("1513")
		const addressqQx7ylC = accounts[1]
		const uintbTz9I59 = BigInt("602")
		const uintcwlnXqh = BigInt("564")
		const uintX6D7WV = BigInt("108")
		const addresssRoQ5uX = accounts[5]
		const addresslC8cCif = await CryptoSecureBankTokenV6ZsEY8.setOwner2.call(addressGDjRV1K, {from: accounts[3]});
		const uintkYNvSfr = await CryptoSecureBankTokenV6ZsEY8.totalSupply.call({from: accounts[2]});
		const boolT7qENus = await CryptoSecureBankTokenV6ZsEY8.transfer.call(addressqQx7ylC, uintIrUBJS, {from: accounts[3]});
		const uintTIba2v = await CryptoSecureBankTokenV6ZsEY8.setParams.call(uintcwlnXqh, uintbTz9I59, {from: accounts[3]});
		const boolzb4D0Cc = await CryptoSecureBankTokenV6ZsEY8.transfer.call(addresssRoQ5uX, uintX6D7WV, {from: accounts[0]});

		assert.equal(boolT7qENus, true)
		assert.equal(uintkYNvSfr, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenV6ZsEY8.setParams.call(uintcwlnXqh, uintbTz9I59, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenV6ZsEY8 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressIewD2K = "0x0000000000000000000000000000000000000001"
		const uintGY0RmwR = BigInt("180")
		const addressLzSMHFV = accounts[5]
		const addressToC0bWN = await CryptoSecureBankTokenV6ZsEY8.transferOwnership.call(addressIewD2K, {from: accounts[3]});
		const boolzb4D0Cc = await CryptoSecureBankTokenV6ZsEY8.transfer.call(addressLzSMHFV, uintGY0RmwR, {from: accounts[0]});
		await CryptoSecureBankTokenV6ZsEY8.unpause.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenV6ZsEY8.transfer.call(addressLzSMHFV, uintGY0RmwR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenue6eKtJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintvuOsEIF = BigInt("284")
		const addressysheiOm = accounts[4]
		const addressnwwAShj = accounts[1]
		const uintPgB7Adi = BigInt("647")
		const uintdI8gPv = BigInt("417")
		const booljOOopT6 = await CryptoSecureBankTokenue6eKtJ.transfer.call(addressysheiOm, uintvuOsEIF, {from: accounts[3]});
		const addressOqCzUcY = await CryptoSecureBankTokenue6eKtJ.removeBlackList.call(addressnwwAShj, {from: accounts[3]});
		const boolKWlMaC6 = await CryptoSecureBankTokenue6eKtJ.redeem.call(uintPgB7Adi, {from: accounts[0]});
		const uintHnUj6Fr = await CryptoSecureBankTokenue6eKtJ.onlyPayloadSize.call(uintdI8gPv, {from: accounts[2]});

		assert.equal(booljOOopT6, true)
		await expect(CryptoSecureBankTokenue6eKtJ.redeem.call(uintPgB7Adi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenue6eKtJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintoeGJ4nX = BigInt("284")
		const addresszBO85jG = accounts[3]
		const addresstFq9fO5 = accounts[3]
		const uintSWCUTpD = BigInt("1493")
		const addressJNfZHIJ = accounts[0]
		const addressOENkYe4 = accounts[1]
		const booljOOopT6 = await CryptoSecureBankTokenue6eKtJ.transfer.call(addresszBO85jG, uintoeGJ4nX, {from: accounts[3]});
		const addressXt3ANrN = await CryptoSecureBankTokenue6eKtJ.addBlackList.call(addresstFq9fO5, {from: accounts[3]});
		const boolKwyXjTo = await CryptoSecureBankTokenue6eKtJ.transferFrom.call(addressOENkYe4, addressJNfZHIJ, uintSWCUTpD, {from: accounts[1]});

		assert.equal(booljOOopT6, true)
		await expect(CryptoSecureBankTokenue6eKtJ.transferFrom.call(addressOENkYe4, addressJNfZHIJ, uintSWCUTpD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenue6eKtJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinttJrcP9I = BigInt("0")
		const addressHOhm1ji = "0x0000000000000000000000000000000000000001"
		const addressDDJbai = accounts[0]
		const addresslygf5kF = accounts[1]
		const boolDVbR20n = await CryptoSecureBankTokenue6eKtJ.transfer.call(addressHOhm1ji, uinttJrcP9I, {from: accounts[1]});
		const addressP9IhiSE = await CryptoSecureBankTokenue6eKtJ.getOwner.call({from: accounts[3]});
		const uintHdJcJc = await CryptoSecureBankTokenue6eKtJ.allowance.call(addresslygf5kF, addressDDJbai, {from: accounts[0]});

		assert.equal(addressP9IhiSE, 0xcB4dC8446f9CfC0E75376F290741112482a14bef)
		assert.equal(boolDVbR20n, true)
		assert.equal(uintHdJcJc, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenue6eKtJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintZ4hfdU = BigInt("284")
		const addresseTocHhm = accounts[4]
		const uintDnMlm64 = BigInt("1561")
		const booljOOopT6 = await CryptoSecureBankTokenue6eKtJ.transfer.call(addresseTocHhm, uintZ4hfdU, {from: accounts[3]});
		const boolCXTdzgy = await CryptoSecureBankTokenue6eKtJ.redeem.call(uintDnMlm64, {from: accounts[3]});

		assert.equal(boolCXTdzgy, true)
		assert.equal(booljOOopT6, true)
	});
})