const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokeni5HaPc = await ThriftToken.new({from: accounts[1]});
		const uintESPgvUX = BigInt("1021")
		const addressIH1yw7b = "0x0000000000000000000000000000000000000001"
		const uintNKWcDJy = BigInt("1042")
		const addressAy9e4SU = accounts[3]
		const addressIysk3uk = accounts[2]
		const addressTrTejQT = accounts[3]
		const uintx0QHIp = BigInt("1194")
		const address14zqSh = accounts[0]
//		const boolQBoDyo4 = await ThriftTokeni5HaPc.transfer.call(addressIH1yw7b, uintESPgvUX, {from: accounts[3]});
//		const boolwxQbt5U = await ThriftTokeni5HaPc.transferFrom.call(addressIysk3uk, addressAy9e4SU, uintNKWcDJy, {from: accounts[0]});
//		const uint256cY1jkL = await ThriftTokeni5HaPc.transferableTokens.call(addressTrTejQT, {from: accounts[4]});
//		const boolJL8o3R = await ThriftTokeni5HaPc.approve.call(address14zqSh, uintx0QHIp, {from: accounts[5]});

		await expect(ThriftTokeni5HaPc.transfer.call(addressIH1yw7b, uintESPgvUX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenQZ5MoWP = await ThriftToken.new({from: accounts[0]});
		const uintK0ISzn8 = BigInt("617")
		const addressWwzQV4 = accounts[2]
		const addressSS8ZBJ = accounts[1]
		const uintsaKaIoz = BigInt("1677")
		const addressDhrlkV = accounts[4]
		const addressCjNYKXn = accounts[5]
		const uintrUFDgpy = BigInt("648")
		const addresszOlz7Nn = accounts[1]
//		const boolB5rqShK = await ThriftTokenQZ5MoWP.transferFrom.call(addressSS8ZBJ, addressWwzQV4, uintK0ISzn8, {from: accounts[4]});
//		const boolz1sMMcD = await ThriftTokenQZ5MoWP.decreaseApproval.call(addressDhrlkV, uintsaKaIoz, {from: accounts[3]});
//		const addressGPFMja7 = await ThriftTokenQZ5MoWP.transferOwnership.call(addressCjNYKXn, {from: accounts[1]});
//		const boolLC2HKmp = await ThriftTokenQZ5MoWP.approve.call(addresszOlz7Nn, uintrUFDgpy, {from: accounts[3]});

		await expect(ThriftTokenQZ5MoWP.transferFrom.call(addressSS8ZBJ, addressWwzQV4, uintK0ISzn8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJbm9MOA = await ThriftToken.new({from: accounts[4]});
		const uintGickALE = BigInt("1084")
		const addressM8bXoQC = accounts[0]
		const addressAaphLBf = accounts[1]
		const uintdkPkHGv = BigInt("1642")
		const addressxDSGxrp = accounts[0]
		const addressUnXCJ3d = accounts[4]
		const boolPshnE6m = await ThriftTokenJbm9MOA.decreaseApproval.call(addressM8bXoQC, uintGickALE, {from: accounts[3]});
		const uint256qWBG0U = await ThriftTokenJbm9MOA.balanceOf.call(addressAaphLBf, {from: accounts[0]});
//		const boolBXR9c2p = await ThriftTokenJbm9MOA.increaseApproval.call(addressxDSGxrp, uintdkPkHGv, {from: accounts[0]});
//		const uint256qD7LxCO = await ThriftTokenJbm9MOA.transferableTokens.call(addressUnXCJ3d, {from: accounts[1]});

		assert.equal(boolPshnE6m, true)
		assert.equal(uint256qWBG0U, BigInt("0"))
		await expect(ThriftTokenJbm9MOA.increaseApproval.call(addressxDSGxrp, uintdkPkHGv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenP9W45Za = await ThriftToken.new({from: accounts[1]});
		const uintEnpS9xb = BigInt("1415")
		const addresscAKOKKy = accounts[0]
		const addressRYJCEEs = accounts[4]
		const addressIJJW7Fl = accounts[3]
		const uintYsByJ8g = BigInt("1977")
		const addressVO3XmfA = accounts[4]
		const uint8xdkKb = BigInt("176")
		const addressTCAZw3f = accounts[2]
		const boolxuCpwRe = await ThriftTokenP9W45Za.approve.call(addresscAKOKKy, uintEnpS9xb, {from: accounts[5]});
		const uint256j3ST2v9 = await ThriftTokenP9W45Za.allowance.call(addressIJJW7Fl, addressRYJCEEs, {from: "0x0000000000000000000000000000000000000001"});
		const boolxnC4Uep = await ThriftTokenP9W45Za.increaseApproval.call(addressVO3XmfA, uintYsByJ8g, {from: accounts[1]});
		const boolJFBpVka = await ThriftTokenP9W45Za.increaseApproval.call(addressTCAZw3f, uint8xdkKb, {from: accounts[3]});

		assert.equal(boolJFBpVka, true)
		assert.equal(boolxnC4Uep, true)
		assert.equal(boolxuCpwRe, true)
		assert.equal(uint256j3ST2v9, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenWsVVknh = await ThriftToken.new({from: accounts[1]});
		const addressaoYoFrp = accounts[3]
		const addressZnKsItj = accounts[4]
		const uintuNhVz6 = BigInt("318")
		const addressMFw12do = accounts[5]
		const addressnuiisV0 = accounts[2]
		const addressjzVNgQ4 = accounts[0]
		const uint256Aq1sKrv = await ThriftTokenWsVVknh.allowance.call(addressZnKsItj, addressaoYoFrp, {from: accounts[1]});
		const boolFuPKD8 = await ThriftTokenWsVVknh.approve.call(addressMFw12do, uintuNhVz6, {from: accounts[0]});
		const uint256PvZRODd = await ThriftTokenWsVVknh.balanceOf.call(addressnuiisV0, {from: accounts[4]});
//		const addressrveu9Dp = await ThriftTokenWsVVknh.transferOwnership.call(addressjzVNgQ4, {from: accounts[0]});

		assert.equal(boolFuPKD8, true)
		assert.equal(uint256Aq1sKrv, BigInt("0"))
		assert.equal(uint256PvZRODd, BigInt("0"))
		await expect(ThriftTokenWsVVknh.transferOwnership.call(addressjzVNgQ4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeni5HaPc = await ThriftToken.new({from: accounts[1]});
		const addressf5IAHpR = accounts[0]
		const uintfYB646D = BigInt("156")
		const addressn6cb58F = accounts[1]
		const uintzCMFZpP = BigInt("1043")
		const addressP7eDOib = "0x0000000000000000000000000000000000000001"
		const addressUR7JPW = await ThriftTokeni5HaPc.transferOwnership.call(addressf5IAHpR, {from: accounts[1]});
		const boolXacDmE = await ThriftTokeni5HaPc.increaseApproval.call(addressn6cb58F, uintfYB646D, {from: accounts[5]});
//		const boolQBoDyo4 = await ThriftTokeni5HaPc.transfer.call(addressP7eDOib, uintzCMFZpP, {from: accounts[3]});

		assert.equal(boolXacDmE, true)
		await expect(ThriftTokeni5HaPc.transfer.call(addressP7eDOib, uintzCMFZpP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenuLs6hD3 = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxasbno3 = BigInt("1104")
		const addresspobo80d = accounts[4]
		const uintsRZNTE = BigInt("44")
		const addressApoWz27 = "0x0000000000000000000000000000000000000001"
		const uintFQe3IwK = BigInt("2043")
		const addressXIWkUvD = accounts[0]
		const boolJgOVMhu = await ThriftTokenuLs6hD3.decreaseApproval.call(addresspobo80d, uintxasbno3, {from: accounts[4]});
		const booljGxN9rs = await ThriftTokenuLs6hD3.approve.call(addressApoWz27, uintsRZNTE, {from: accounts[4]});
		const boolmZJVkQA = await ThriftTokenuLs6hD3.transfer.call(addressXIWkUvD, uintFQe3IwK, {from: accounts[4]});
	});
})