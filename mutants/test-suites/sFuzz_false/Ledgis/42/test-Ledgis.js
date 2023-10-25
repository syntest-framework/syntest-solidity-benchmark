const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgislYehM8 = await Ledgis.new({from: accounts[2]});
		const addressVabxR4R = "0x0000000000000000000000000000000000000001"
		const addressXBRxQFE = accounts[5]
//		await LedgislYehM8.unpause.call({from: accounts[1]});
//		const uint256V9NbAlV = await LedgislYehM8.balanceOf.call(addressVabxR4R, {from: accounts[0]});
//		const address1qiX1p = await LedgislYehM8.freeze.call(addressXBRxQFE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgislYehM8.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiszHCszqA = await Ledgis.new({from: accounts[1]});
		const uintLrFjaMy = BigInt("2044")
		const addressKTQG000 = accounts[4]
		const uintZvHeWae = BigInt("1374")
		const uintrQEdgUe = BigInt("1107")
		const addressRoqRUgS = accounts[0]
		const uintqm8vucg = BigInt("1772")
		const addressi6VwKmw = accounts[4]
		const boolTtM9nZM = await LedgiszHCszqA.mint.call(addressKTQG000, uintLrFjaMy, {from: accounts[1]});
//		const boolHjYlKa = await LedgiszHCszqA.transferWithLock.call(addressRoqRUgS, uintrQEdgUe, uintZvHeWae, {from: accounts[0]});
//		const boolOcUwzl8 = await LedgiszHCszqA.transfer.call(addressi6VwKmw, uintqm8vucg, {from: accounts[2]});

		assert.equal(boolTtM9nZM, true)
		await expect(LedgiszHCszqA.transferWithLock.call(addressRoqRUgS, uintrQEdgUe, uintZvHeWae, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOotLVDD = await Ledgis.new({from: accounts[1]});
		const addressNtod1A3 = accounts[5]
		const uintqyt47JX = BigInt("375")
		const addressOHvWqLB = accounts[2]
//		await LedgisOotLVDD.onlyOwner.call({from: accounts[2]});
//		const uint256Dxqrbql = await LedgisOotLVDD.balanceOf.call(addressNtod1A3, {from: accounts[3]});
//		await LedgisOotLVDD.whenPaused.call({from: accounts[4]});
//		const booldTyS4ZK = await LedgisOotLVDD.mint.call(addressOHvWqLB, uintqyt47JX, {from: accounts[2]});

		await expect(LedgisOotLVDD.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintq6ZaY7D = BigInt("531")
		const addressNkVSYGb = "0x0000000000000000000000000000000000000001"
		const addresscndYSDw = accounts[2]
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addresscndYSDw, addressNkVSYGb, uintq6ZaY7D, {from: accounts[0]});
//		const uint256qLlPNM = await LedgisPDp35V.currentTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisPDp35V.transferFrom.call(addresscndYSDw, addressNkVSYGb, uintq6ZaY7D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissWtFmXK = await Ledgis.new({from: accounts[3]});
		const uintWX3BTGN = BigInt("1877")
		const uintPf6WIJ = BigInt("1212")
		const addressFbBPlym = accounts[0]
		const addressNPyykIW = accounts[2]
		const uintAJ3G5X2 = BigInt("59")
		const addressLpgNcT = accounts[1]
		const addressD4Xc4RE = accounts[3]
		const addressXInTxrC = accounts[3]
		const addressil0BCwK = accounts[3]
		const uintts1YEWN = BigInt("1604")
		const addresscD0UD6k = accounts[1]
		const boolz0TOGip = await LedgissWtFmXK.transferWithLock.call(addressFbBPlym, uintPf6WIJ, uintWX3BTGN, {from: accounts[3]});
		const boolZptMIGG = await LedgissWtFmXK.isFrozen.call(addressNPyykIW, {from: accounts[4]});
//		await LedgissWtFmXK.lockState.call(addressLpgNcT, uintAJ3G5X2, {from: accounts[2]});
//		const uint256B4FeBo = await LedgissWtFmXK.allowance.call(addressXInTxrC, addressD4Xc4RE, {from: accounts[5]});
//		const boolEF2gxXK = await LedgissWtFmXK.isFrozen.call(addressil0BCwK, {from: accounts[0]});
//		const boole0WYdtS = await LedgissWtFmXK.mint.call(addresscD0UD6k, uintts1YEWN, {from: accounts[3]});

		assert.equal(boolZptMIGG, false)
		assert.equal(boolz0TOGip, true)
		await expect(LedgissWtFmXK.lockState.call(addressLpgNcT, uintAJ3G5X2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB18xeR = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJHNMHa4 = BigInt("1925")
		const addressDXfKshk = accounts[0]
		const uintikeJCSC = BigInt("222")
		const addressV8DiKlq = accounts[3]
		await LedgisB18xeR.whenNotFrozen.call({from: accounts[1]});
		const boolmpRn4C = await LedgisB18xeR.transfer.call(addressDXfKshk, uintJHNMHa4, {from: accounts[1]});
		const boolxW9890d = await LedgisB18xeR.approve.call(addressV8DiKlq, uintikeJCSC, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uint256qLlPNM = await LedgisPDp35V.currentTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qLlPNM, BigInt("1630231800"))
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintoyvOaEt = BigInt("366")
		const addressBFWu3X4 = accounts[4]
		const uintSTjSDpV = BigInt("470")
		const addressncJMfhY = accounts[5]
//		const boolVG9YAtL = await LedgisPDp35V.transfer.call(addressBFWu3X4, uintoyvOaEt, {from: accounts[0]});
//		await LedgisPDp35V.lockState.call(addressncJMfhY, uintSTjSDpV, {from: accounts[2]});
//		const uint256qLlPNM = await LedgisPDp35V.currentTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisPDp35V.transfer.call(addressBFWu3X4, uintoyvOaEt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintMoqQJI4 = BigInt("281")
		const addressebwSV3X = accounts[1]
		const uintL97iTTU = BigInt("543")
		const addressqOUKHZz = "0x0000000000000000000000000000000000000001"
		const addresszoE3VzI = accounts[2]
		const boolav9blR = await LedgisPDp35V.approve.call(addressebwSV3X, uintMoqQJI4, {from: accounts[2]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addresszoE3VzI, addressqOUKHZz, uintL97iTTU, {from: accounts[0]});

		assert.equal(boolav9blR, true)
		await expect(LedgisPDp35V.transferFrom.call(addresszoE3VzI, addressqOUKHZz, uintL97iTTU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintSPrUKVt = BigInt("963")
		const uintImZuFEN = BigInt("283")
		const addresscx3ZaT0 = accounts[3]
		const uint256yoTXkqC = await LedgisPDp35V.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qLlPNM = await LedgisPDp35V.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzlt4FM = await LedgisPDp35V.transferWithLockAfter.call(addresscx3ZaT0, uintImZuFEN, uintSPrUKVt, {from: accounts[0]});

		assert.equal(uint256qLlPNM, BigInt("1630231793"))
		assert.equal(uint256yoTXkqC, BigInt("10000000000000"))
		await expect(LedgisPDp35V.transferWithLockAfter.call(addresscx3ZaT0, uintImZuFEN, uintSPrUKVt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addressBdLYGZE = accounts[4]
		const uintetwnYur = BigInt("531")
		const addressYXabkVI = "0x0000000000000000000000000000000000000000"
		const addressEIvZoa = accounts[2]
		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(addressBdLYGZE, {from: accounts[0]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addressEIvZoa, addressYXabkVI, uintetwnYur, {from: accounts[0]});

		assert.equal(uint256ZEGQRzN, BigInt("0"))
		await expect(LedgisPDp35V.transferFrom.call(addressEIvZoa, addressYXabkVI, uintetwnYur, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addresseWyLXw0 = accounts[0]
		const uintKJK0Pzt = BigInt("983")
		const uintrhltlty = BigInt("307")
		const addressZ4oGHpv = accounts[2]
		const addresse7askJ = await LedgisPDp35V.unfreeze.call(addresseWyLXw0, {from: accounts[2]});
//		const booli0Thltv = await LedgisPDp35V.transferWithLockAfter.call(addressZ4oGHpv, uintrhltlty, uintKJK0Pzt, {from: accounts[3]});
//		const uint256qLlPNM = await LedgisPDp35V.currentTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisPDp35V.transferWithLockAfter.call(addressZ4oGHpv, uintrhltlty, uintKJK0Pzt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintZ61h2j = BigInt("1159")
		const addressypDlBKJ = accounts[4]
		const uinthZUpeA = BigInt("531")
		const addressvxyFaXI = "0x0000000000000000000000000000000000000001"
		const addressWSoPPq = accounts[3]
//		const boolamKVLT = await LedgisPDp35V.decreaseAllowance.call(addressypDlBKJ, uintZ61h2j, {from: accounts[1]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addressWSoPPq, addressvxyFaXI, uinthZUpeA, {from: accounts[0]});

		await expect(LedgisPDp35V.decreaseAllowance.call(addressypDlBKJ, uintZ61h2j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintrphHiLV = BigInt("495")
		const addressXS4CI7 = accounts[0]
		const addressIqK9pa = accounts[5]
		const boolzqG1aqp = await LedgisPDp35V.increaseAllowance.call(addressXS4CI7, uintrphHiLV, {from: accounts[3]});
		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(addressIqK9pa, {from: accounts[0]});

		assert.equal(boolzqG1aqp, true)
		assert.equal(uint256ZEGQRzN, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addressG89lCmu = accounts[6]
		const addressKF8Dm3P = accounts[3]
		const addressKJCU4i4 = accounts[4]
		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(addressG89lCmu, {from: accounts[0]});
		const uint256VB21vFM = await LedgisPDp35V.allowance.call(addressKJCU4i4, addressKF8Dm3P, {from: accounts[5]});

		assert.equal(uint256VB21vFM, BigInt("0"))
		assert.equal(uint256ZEGQRzN, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addressF2uZeoB = accounts[1]
		const uintuk06CR = BigInt("531")
		const addressVncvLV = "0x0000000000000000000000000000000000000002"
		const addressEt5fqBY = accounts[2]
		const uint256GnWPPG = await LedgisPDp35V.lockCount.call(addressF2uZeoB, {from: accounts[5]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addressEt5fqBY, addressVncvLV, uintuk06CR, {from: accounts[0]});

		assert.equal(uint256GnWPPG, BigInt("0"))
		await expect(LedgisPDp35V.transferFrom.call(addressEt5fqBY, addressVncvLV, uintuk06CR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addressYwaBhbR = accounts[1]
		const addressJ1TdQGl = accounts[6]
		const uintoEfvB2k = BigInt("1298")
		const addressdlDSfx5 = accounts[5]
		const uint256NAzmq8R = await LedgisPDp35V.lockCount.call(addressYwaBhbR, {from: accounts[0]});
		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(addressJ1TdQGl, {from: accounts[0]});
//		const addresstRLE25S = await LedgisPDp35V.burn.call(addressdlDSfx5, uintoEfvB2k, {from: accounts[2]});

		assert.equal(uint256NAzmq8R, BigInt("0"))
		assert.equal(uint256ZEGQRzN, BigInt("0"))
		await expect(LedgisPDp35V.burn.call(addressdlDSfx5, uintoEfvB2k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const address6qPMF1 = accounts[6]
		const uintfA3WRI2 = BigInt("1951")
		const uintttRWlac = BigInt("948")
		const addressCHrZhB = accounts[3]
//		await LedgisPDp35V.renounceOwnership.call({from: accounts[2]});
//		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(address6qPMF1, {from: accounts[0]});
//		const addresstXytaK = await LedgisPDp35V.lock.call(addressCHrZhB, uintttRWlac, uintfA3WRI2, {from: accounts[0]});

		await expect(LedgisPDp35V.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintYOi4T5U = BigInt("546")
		const addressmXX9oLN = accounts[0]
		const uintxYR5AlX = BigInt("531")
		const addressVhJdVea = "0x0000000000000000000000000000000000000001"
		const addresssJAlkJ = accounts[2]
//		const addressulpbqAM = await LedgisPDp35V.unlock.call(addressmXX9oLN, uintYOi4T5U, {from: accounts[2]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addresssJAlkJ, addressVhJdVea, uintxYR5AlX, {from: accounts[0]});

		await expect(LedgisPDp35V.unlock.call(addressmXX9oLN, uintYOi4T5U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addresszrEn1UB = accounts[6]
		const uintz1xhdvo = BigInt("1052")
		const uintglG35xy = BigInt("615")
		const addresslcDuREp = accounts[5]
		const uintx8B5WcA = BigInt("346")
		const addressfQ3ILsA = accounts[2]
		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(addresszrEn1UB, {from: accounts[0]});
		const uint256JqXcY0 = await LedgisPDp35V.afterTime.call(uintz1xhdvo, {from: accounts[4]});
//		const boolKg7XsEJ = await LedgisPDp35V.transfer.call(addresslcDuREp, uintglG35xy, {from: accounts[5]});
//		const boolBdWO7k5 = await LedgisPDp35V.mint.call(addressfQ3ILsA, uintx8B5WcA, {from: accounts[3]});

		assert.equal(uint256JqXcY0, BigInt("1630232837"))
		assert.equal(uint256ZEGQRzN, BigInt("0"))
		await expect(LedgisPDp35V.transfer.call(addresslcDuREp, uintglG35xy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addressdy38clI = accounts[6]
		const addressN944zN3 = accounts[2]
		const addressJY3W8I = accounts[2]
		const uintKwU17Vs = BigInt("554")
		const uintBcJe8MR = BigInt("1533")
		const addressYDnNpo9 = accounts[2]
		const uintKhbWv1y = BigInt("1365")
		const uintlzY9Hc0 = BigInt("786")
		const address8EAkdt = accounts[3]
		const uint256ZEGQRzN = await LedgisPDp35V.balanceOf.call(addressdy38clI, {from: accounts[0]});
		const uint256DzXgYXL = await LedgisPDp35V.allowance.call(addressJY3W8I, addressN944zN3, {from: "0x0000000000000000000000000000000000000001"});
		const boolgPR1IGC = await LedgisPDp35V.transferWithLock.call(addressYDnNpo9, uintBcJe8MR, uintKwU17Vs, {from: accounts[2]});
//		const addresshjpHbxt = await LedgisPDp35V.lock.call(address8EAkdt, uintlzY9Hc0, uintKhbWv1y, {from: accounts[2]});

		assert.equal(boolgPR1IGC, true)
		assert.equal(uint256DzXgYXL, BigInt("0"))
		assert.equal(uint256ZEGQRzN, BigInt("0"))
		await expect(LedgisPDp35V.lock.call(address8EAkdt, uintlzY9Hc0, uintKhbWv1y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintdvwoLlq = BigInt("1427")
		const uintcyi1UQR = BigInt("945")
		const addressu4wG9fQ = accounts[4]
		const uintCQl3bbp = BigInt("1855")
		const addressB6DC9X = accounts[5]
		const addressllaTtUY = accounts[0]
		const uint256qLlPNM = await LedgisPDp35V.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressLhDAkuH = await LedgisPDp35V.lockAfter.call(addressu4wG9fQ, uintcyi1UQR, uintdvwoLlq, {from: accounts[2]});
//		const bools3iHG0u = await LedgisPDp35V.transferFrom.call(addressllaTtUY, addressB6DC9X, uintCQl3bbp, {from: accounts[3]});

		assert.equal(uint256qLlPNM, BigInt("1630231788"))
		await expect(LedgisPDp35V.lockAfter.call(addressu4wG9fQ, uintcyi1UQR, uintdvwoLlq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintpWu8mtF = BigInt("1132")
		const uintzWLrNIe = BigInt("1864")
		const addressfvBjES3 = accounts[1]
		const address74qkvL = accounts[0]
		const uintOnQX9WV = BigInt("522")
		const addressXz4IImY = "0x0000000000000000000000000000000000000001"
		const addressm7RoPSX = accounts[2]
		const uintDRVoJJh = BigInt("375")
		const uintC6QhATz = BigInt("1186")
		const addressbM2KWRc = accounts[2]
		const boold9194g1 = await LedgisPDp35V.transferWithLockAfter.call(addressfvBjES3, uintzWLrNIe, uintpWu8mtF, {from: accounts[2]});
		const uint256J60qiW = await LedgisPDp35V.lockCount.call(address74qkvL, {from: accounts[0]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addressm7RoPSX, addressXz4IImY, uintOnQX9WV, {from: accounts[0]});
//		const boolnAOCTJT = await LedgisPDp35V.transferWithLock.call(addressbM2KWRc, uintC6QhATz, uintDRVoJJh, {from: accounts[4]});

		assert.equal(boold9194g1, true)
		assert.equal(uint256J60qiW, BigInt("0"))
		await expect(LedgisPDp35V.transferFrom.call(addressm7RoPSX, addressXz4IImY, uintOnQX9WV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscZ5jzbo = await Ledgis.new({from: accounts[3]});
		const addressDF9qTWO = "0x0000000000000000000000000000000000000001"
		const uintrfyfow6 = BigInt("1680")
		const uintMt3AAeL = BigInt("572")
		const addressLmb2829 = accounts[1]
		const addressJcpteVm = accounts[5]
		const addressUwrOBrd = await LedgiscZ5jzbo.freeze.call(addressDF9qTWO, {from: accounts[3]});
//		await LedgiscZ5jzbo.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSXmuaWY = await LedgiscZ5jzbo.lock.call(addressLmb2829, uintMt3AAeL, uintrfyfow6, {from: accounts[1]});
//		await LedgiscZ5jzbo.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressNyVHZNG = await LedgiscZ5jzbo.transferOwnership.call(addressJcpteVm, {from: accounts[3]});

		await expect(LedgiscZ5jzbo.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addressi0rny5P = accounts[1]
		const uintg5zzmWH = BigInt("1374")
		const addressC2EDpd4 = accounts[0]
		const uintpFQ9s4 = BigInt("522")
		const addressesWXpk = "0x0000000000000000000000000000000000000001"
		const addresseDLYFzQ = accounts[3]
		const addresswoVzHW = await LedgisPDp35V.transferOwnership.call(addressi0rny5P, {from: accounts[2]});
//		const booldrEuGNx = await LedgisPDp35V.decreaseAllowance.call(addressC2EDpd4, uintg5zzmWH, {from: accounts[4]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addresseDLYFzQ, addressesWXpk, uintpFQ9s4, {from: accounts[0]});

		await expect(LedgisPDp35V.decreaseAllowance.call(addressC2EDpd4, uintg5zzmWH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintVho7Iuh = BigInt("534")
		const addressG19L21 = "0x0000000000000000000000000000000000000001"
		const addressWE0BKh4 = accounts[2]
//		await LedgisPDp35V.pause.call({from: accounts[2]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addressWE0BKh4, addressG19L21, uintVho7Iuh, {from: accounts[0]});

		await expect(LedgisPDp35V.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const uintiwqHbc7 = BigInt("1667")
		const addressfgEh0bX = accounts[2]
		const addressHCu50JN = accounts[2]
		const uintCOGrlpz = BigInt("522")
		const addressEQMU4jc = "0x0000000000000000000000000000000000000001"
		const addressS7p7T3u = accounts[2]
		const addressxQFwO3d = await LedgisPDp35V.burn.call(addressfgEh0bX, uintiwqHbc7, {from: accounts[2]});
//		const addressrXUcFJy = await LedgisPDp35V.unfreeze.call(addressHCu50JN, {from: accounts[1]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addressS7p7T3u, addressEQMU4jc, uintCOGrlpz, {from: accounts[0]});

		await expect(LedgisPDp35V.unfreeze.call(addressHCu50JN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPDp35V = await Ledgis.new({from: accounts[2]});
		const addresslSz5gTc = accounts[0]
		const addressp9RWmE2 = accounts[5]
		const uinthUYxm1V = BigInt("531")
		const addressABL4Fl2 = "0x0000000000000000000000000000000000000000"
		const addresstiC4TgZ = accounts[2]
		const uintjR1JtQ2 = BigInt("1281")
		const addressoeVhgPm = accounts[2]
		const uint256Qap7R9u = await LedgisPDp35V.lockCount.call(addresslSz5gTc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256go7gzeF = await LedgisPDp35V.lockCount.call(addressp9RWmE2, {from: accounts[4]});
//		await LedgisPDp35V.unpause.call({from: accounts[2]});
//		const boolteKs9d = await LedgisPDp35V.transferFrom.call(addresstiC4TgZ, addressABL4Fl2, uinthUYxm1V, {from: accounts[0]});
//		const booloRPsl1P = await LedgisPDp35V.decreaseAllowance.call(addressoeVhgPm, uintjR1JtQ2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Qap7R9u, BigInt("0"))
		assert.equal(uint256go7gzeF, BigInt("0"))
		await expect(LedgisPDp35V.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})