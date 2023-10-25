const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYzwiyMv = await LIBERAPAY.new({from: accounts[2]});
		const addressyUCLxZQ = accounts[0]
		const addressHayZO5R = accounts[3]
		const addressbdnKHv4 = accounts[3]
//		const boolCkwmMgQ = await LIBERAPAYzwiyMv.freezeAccount.call(addressyUCLxZQ, {from: accounts[5]});
//		const boolMhUyLTZ = await LIBERAPAYzwiyMv.freezeAccount.call(addressHayZO5R, {from: accounts[5]});
//		await LIBERAPAYzwiyMv.onlyNewOwner.call({from: accounts[3]});
//		const uint256JHYEzOU = await LIBERAPAYzwiyMv.currentBalanceOf.call(addressbdnKHv4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYzwiyMv.freezeAccount.call(addressyUCLxZQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const uintSSKckVx = BigInt("2020")
		const address7v62xH = accounts[5]
		const uintAjvI7Jw = BigInt("24")
		const addresssbI9Xrj = accounts[2]
		const uintossh3jO = BigInt("1603")
		const addressanTNu2t = accounts[2]
//		const boolI3MiqyU = await LIBERAPAYUGtuBsq.transfer.call(address7v62xH, uintSSKckVx, {from: accounts[3]});
//		await LIBERAPAYUGtuBsq.onlyNewOwner.call({from: accounts[0]});
//		const boolxxnKGc = await LIBERAPAYUGtuBsq.unlock.call(addresssbI9Xrj, uintAjvI7Jw, {from: accounts[1]});
//		const boolnzM5uDw = await LIBERAPAYUGtuBsq.decreaseAllowance.call(addressanTNu2t, uintossh3jO, {from: accounts[4]});

		await expect(LIBERAPAYUGtuBsq.transfer.call(address7v62xH, uintSSKckVx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYR7Hwkjn = await LIBERAPAY.new({from: accounts[3]});
		const uintoOH2MYt = BigInt("1855")
		const addressqkirhr2 = accounts[1]
		const uintZ68QvP4 = BigInt("1681")
		const addressCeCFjfC = accounts[4]
		const addresszvrBCfv = accounts[3]
		const boolxdkp0rY = await LIBERAPAYR7Hwkjn.approve.call(addressqkirhr2, uintoOH2MYt, {from: accounts[2]});
//		await LIBERAPAYR7Hwkjn.whenPaused.call({from: accounts[4]});
//		await LIBERAPAYR7Hwkjn.showLockState.call(addressCeCFjfC, uintZ68QvP4, {from: accounts[3]});
//		const address96IG2a = await LIBERAPAYR7Hwkjn.transferOwnership.call(addresszvrBCfv, {from: accounts[0]});

		assert.equal(boolxdkp0rY, true)
		await expect(LIBERAPAYR7Hwkjn.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZaH9i5x = await LIBERAPAY.new({from: accounts[4]});
		const uintrhBonSS = BigInt("1735")
		const addressl15b9Ps = accounts[0]
		const addressmyNG2XD = accounts[1]
		const addressHnPZwvf = accounts[2]
		const uintZme94NQ = BigInt("161")
		const uintB366zvI = BigInt("517")
		const addressM0RWShc = accounts[3]
//		const boollJLrAUd = await LIBERAPAYZaH9i5x.transferFrom.call(addressmyNG2XD, addressl15b9Ps, uintrhBonSS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256AhP9NKw = await LIBERAPAYZaH9i5x.balanceOf.call(addressHnPZwvf, {from: accounts[2]});
//		const boolFa5rVw = await LIBERAPAYZaH9i5x.burn.call(uintZme94NQ, {from: accounts[2]});
//		await LIBERAPAYZaH9i5x.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolkZU0eXF = await LIBERAPAYZaH9i5x.decreaseAllowance.call(addressM0RWShc, uintB366zvI, {from: accounts[0]});

		await expect(LIBERAPAYZaH9i5x.transferFrom.call(addressmyNG2XD, addressl15b9Ps, uintrhBonSS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOCzDE2p = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintu2ds1u9 = BigInt("1216")
		const addressG2CHx2v = accounts[4]
		const addresshAIuKn = accounts[0]
		const uintVhl2qwS = BigInt("1056")
		const addressNzD413b = accounts[0]
		const boolhJyafb7 = await LIBERAPAYOCzDE2p.decreaseAllowance.call(addressG2CHx2v, uintu2ds1u9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nHUpgaY = await LIBERAPAYOCzDE2p.getNowTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cg5yiDz = await LIBERAPAYOCzDE2p.currentBalanceOf.call(addresshAIuKn, {from: accounts[4]});
		const uint2563b60yE = await LIBERAPAYOCzDE2p.getNowTime.call({from: accounts[0]});
		const boolAgfI2QB = await LIBERAPAYOCzDE2p.unlock.call(addressNzD413b, uintVhl2qwS, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFog6hAR = await LIBERAPAY.new({from: accounts[1]});
		const uinthDYRQpf = BigInt("539")
		const addressv0X7Fm2 = accounts[0]
		const uintbCFqxF = BigInt("1927")
		const addressX3iSAVH = accounts[5]
		const uint256Vim2J3 = await LIBERAPAYFog6hAR.totalSupply.call({from: accounts[1]});
//		const boolQfnBYzd = await LIBERAPAYFog6hAR.burn.call(uinthDYRQpf, {from: accounts[2]});
//		const addressgB9y7b9 = await LIBERAPAYFog6hAR.upgradeTo.call(addressv0X7Fm2, {from: accounts[4]});
//		const boolKp8Fzid = await LIBERAPAYFog6hAR.mint.call(addressX3iSAVH, uintbCFqxF, {from: accounts[0]});
//		const uint256ka8hA6I = await LIBERAPAYFog6hAR.getNowTime.call({from: accounts[0]});

		assert.equal(uint256Vim2J3, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYFog6hAR.burn.call(uinthDYRQpf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrER4HwK = await LIBERAPAY.new({from: accounts[3]});
		const addressHLgM56d = accounts[4]
//		await LIBERAPAYrER4HwK.f.call({from: accounts[4]});
//		const uint256gWSjmaH = await LIBERAPAYrER4HwK.getNowTime.call({from: accounts[1]});
//		const addresshF07eFh = await LIBERAPAYrER4HwK.upgradeTo.call(addressHLgM56d, {from: accounts[2]});
//		await LIBERAPAYrER4HwK.f.call({from: accounts[2]});

		await expect(LIBERAPAYrER4HwK.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const uintlgxz49P = BigInt("1666")
		const addressWWGqmu = accounts[1]
		const uintgDSa5ma = BigInt("2020")
		const addressqJYAT7A = accounts[6]
		const addressz3Kiwc2 = accounts[3]
//		const booliHmA1n = await LIBERAPAYUGtuBsq.decreaseAllowance.call(addressWWGqmu, uintlgxz49P, {from: accounts[0]});
//		const boolI3MiqyU = await LIBERAPAYUGtuBsq.transfer.call(addressqJYAT7A, uintgDSa5ma, {from: accounts[3]});
//		const addressAnDTEce = await LIBERAPAYUGtuBsq.notFrozen.call(addressz3Kiwc2, {from: accounts[5]});

		await expect(LIBERAPAYUGtuBsq.decreaseAllowance.call(addressWWGqmu, uintlgxz49P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwGgi3fn = await LIBERAPAY.new({from: accounts[3]});
		const uinta92xlyU = BigInt("23")
		const addressZA4TPkI = accounts[2]
		const uintnRk8QqY = BigInt("643")
		const addresspSDsUiO = "0x0000000000000000000000000000000000000001"
		const addresslktbr2i = accounts[4]
//		const boolf6IlfXq = await LIBERAPAYwGgi3fn.burnFrom.call(addressZA4TPkI, uinta92xlyU, {from: accounts[4]});
//		const boolGaQSdKQ = await LIBERAPAYwGgi3fn.approve.call(addresspSDsUiO, uintnRk8QqY, {from: accounts[2]});
//		const addressEmyj36E = await LIBERAPAYwGgi3fn.upgradeTo.call(addresslktbr2i, {from: accounts[4]});
//		await LIBERAPAYwGgi3fn.whenPaused.call({from: accounts[3]});

		await expect(LIBERAPAYwGgi3fn.burnFrom.call(addressZA4TPkI, uinta92xlyU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const addressjFTiwQD = accounts[2]
		const uintFPgHoHT = BigInt("2020")
		const addressKg6LKZR = accounts[5]
		const uinttKkQb9E = BigInt("24")
		const addressWIDw3Q = accounts[3]
		const boolckbbKdb = await LIBERAPAYUGtuBsq.freezeAccount.call(addressjFTiwQD, {from: accounts[5]});
//		const boolI3MiqyU = await LIBERAPAYUGtuBsq.transfer.call(addressKg6LKZR, uintFPgHoHT, {from: accounts[3]});
//		const boolxxnKGc = await LIBERAPAYUGtuBsq.unlock.call(addressWIDw3Q, uinttKkQb9E, {from: accounts[1]});

		assert.equal(boolckbbKdb, true)
		await expect(LIBERAPAYUGtuBsq.transfer.call(addressKg6LKZR, uintFPgHoHT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const uintjlnL5iV = BigInt("358")
		const addressvIbjVr = accounts[5]
		const uintZPyQUfF = BigInt("2020")
		const addressu5RcMY1 = accounts[5]
		const uintn9l6bbz = BigInt("24")
		const addressQzYeQ5z = accounts[3]
		const boolPPYKhVA = await LIBERAPAYUGtuBsq.increaseAllowance.call(addressvIbjVr, uintjlnL5iV, {from: accounts[4]});
//		const boolI3MiqyU = await LIBERAPAYUGtuBsq.transfer.call(addressu5RcMY1, uintZPyQUfF, {from: accounts[3]});
//		const boolxxnKGc = await LIBERAPAYUGtuBsq.unlock.call(addressQzYeQ5z, uintn9l6bbz, {from: accounts[1]});

		assert.equal(boolPPYKhVA, true)
		await expect(LIBERAPAYUGtuBsq.transfer.call(addressu5RcMY1, uintZPyQUfF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZaH9i5x = await LIBERAPAY.new({from: accounts[4]});
		const uinttMYe8ga = BigInt("1216")
		const addressimBfvXI = accounts[2]
		const uint6SSg5L = BigInt("2038")
		const addressCAW8iQ = accounts[5]
		const uintCkbYF2Q = BigInt("1888")
		const addresspL5cwPg = accounts[2]
		const addressxMH9tZv = "0x0000000000000000000000000000000000000001"
		const uintXsYkgwK = BigInt("512")
		const addressZOqQg9o = accounts[3]
		const bool3fTLRy = await LIBERAPAYZaH9i5x.increaseAllowance.call(addressimBfvXI, uinttMYe8ga, {from: accounts[1]});
//		await LIBERAPAYZaH9i5x.showLockState.call(addressCAW8iQ, uint6SSg5L, {from: accounts[4]});
//		const boolwl3u38 = await LIBERAPAYZaH9i5x.transferFrom.call(addressxMH9tZv, addresspL5cwPg, uintCkbYF2Q, {from: accounts[2]});
//		await LIBERAPAYZaH9i5x.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolkZU0eXF = await LIBERAPAYZaH9i5x.decreaseAllowance.call(addressZOqQg9o, uintXsYkgwK, {from: accounts[0]});

		assert.equal(bool3fTLRy, true)
		await expect(LIBERAPAYZaH9i5x.showLockState.call(addressCAW8iQ, uint6SSg5L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const uintk9sYFQD = BigInt("24")
		const addressp0ZZnDW = accounts[2]
		const uint256Wlh9n0k = await LIBERAPAYUGtuBsq.getNowTime.call({from: accounts[4]});
//		const boolxxnKGc = await LIBERAPAYUGtuBsq.unlock.call(addressp0ZZnDW, uintk9sYFQD, {from: accounts[1]});

		assert.equal(uint256Wlh9n0k, BigInt("1630229931"))
		await expect(LIBERAPAYUGtuBsq.unlock.call(addressp0ZZnDW, uintk9sYFQD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZaH9i5x = await LIBERAPAY.new({from: accounts[4]});
		const addresseB24cNo = accounts[4]
		const uintG5qPqeI = BigInt("378")
		const addressSbt4Dgu = accounts[1]
		const uintBViEcr2 = BigInt("1735")
		const addressC5o1gOp = accounts[0]
		const addressmb4wcSY = accounts[1]
		const uint256TmlhRYU = await LIBERAPAYZaH9i5x.currentBalanceOf.call(addresseB24cNo, {from: accounts[1]});
//		const boolH9BuLDR = await LIBERAPAYZaH9i5x.acceptOwnership.call({from: accounts[3]});
//		const boolCMLYpRr = await LIBERAPAYZaH9i5x.decreaseAllowance.call(addressSbt4Dgu, uintG5qPqeI, {from: accounts[1]});
//		const boollJLrAUd = await LIBERAPAYZaH9i5x.transferFrom.call(addressmb4wcSY, addressC5o1gOp, uintBViEcr2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256TmlhRYU, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYZaH9i5x.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const uintU2gB0oC = BigInt("201")
		const addressFPz8iaG = accounts[4]
		const addressA7L9Ps = accounts[5]
		const uintBfeQ4YT = BigInt("23")
		const addresshYVPdt7 = accounts[2]
//		await LIBERAPAYUGtuBsq.showLockState.call(addressFPz8iaG, uintU2gB0oC, {from: accounts[0]});
//		const addressxdnZssa = await LIBERAPAYUGtuBsq.upgradeTo.call(addressA7L9Ps, {from: accounts[5]});
//		await LIBERAPAYUGtuBsq.whenNotPaused.call({from: accounts[1]});
//		const boolxxnKGc = await LIBERAPAYUGtuBsq.unlock.call(addresshYVPdt7, uintBfeQ4YT, {from: accounts[1]});

		await expect(LIBERAPAYUGtuBsq.showLockState.call(addressFPz8iaG, uintU2gB0oC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const addressYZKeXBZ = accounts[5]
		const addressaZtdOvx = accounts[0]
		const uintqMaeM9v = BigInt("201")
		const addressqPoKiTy = accounts[4]
		const uint256ta3M9Rp = await LIBERAPAYUGtuBsq.currentBalanceOf.call(addressYZKeXBZ, {from: accounts[3]});
		const uint256tzFfDWT = await LIBERAPAYUGtuBsq.balanceOf.call(addressaZtdOvx, {from: accounts[0]});
//		await LIBERAPAYUGtuBsq.showLockState.call(addressqPoKiTy, uintqMaeM9v, {from: accounts[0]});

		assert.equal(uint256ta3M9Rp, BigInt("3000000000000000000000000000"))
		assert.equal(uint256tzFfDWT, BigInt("0"))
		await expect(LIBERAPAYUGtuBsq.showLockState.call(addressqPoKiTy, uintqMaeM9v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const addressT01kKZr = accounts[6]
		const uintM1QZk7d = BigInt("122")
		const addresspmmtMV5 = accounts[4]
		const addresseiqL6Sn = accounts[0]
		const uint256ta3M9Rp = await LIBERAPAYUGtuBsq.currentBalanceOf.call(addressT01kKZr, {from: accounts[3]});
//		const boolDuMihvu = await LIBERAPAYUGtuBsq.unlock.call(addresspmmtMV5, uintM1QZk7d, {from: accounts[5]});
//		const uint256tzFfDWT = await LIBERAPAYUGtuBsq.balanceOf.call(addresseiqL6Sn, {from: accounts[0]});

		assert.equal(uint256ta3M9Rp, BigInt("0"))
		await expect(LIBERAPAYUGtuBsq.unlock.call(addresspmmtMV5, uintM1QZk7d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const addresshKacQZh = accounts[3]
		const addressCubNXnB = accounts[6]
//		const boolbgFIK0l = await LIBERAPAYUGtuBsq.unfreezeAccount.call(addresshKacQZh, {from: accounts[5]});
//		const uint256ta3M9Rp = await LIBERAPAYUGtuBsq.currentBalanceOf.call(addressCubNXnB, {from: accounts[3]});

		await expect(LIBERAPAYUGtuBsq.unfreezeAccount.call(addresshKacQZh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZaH9i5x = await LIBERAPAY.new({from: accounts[4]});
		const uinti7Xs05U = BigInt("1735")
		const addressIo8Ix7Q = accounts[1]
		const addressZ0LhUVV = accounts[1]
		const uintpJICYaY = BigInt("204")
//		await LIBERAPAYZaH9i5x.pause.call({from: accounts[4]});
//		const boollJLrAUd = await LIBERAPAYZaH9i5x.transferFrom.call(addressZ0LhUVV, addressIo8Ix7Q, uinti7Xs05U, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRRQA9J = await LIBERAPAYZaH9i5x.burn.call(uintpJICYaY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYZaH9i5x.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZaH9i5x = await LIBERAPAY.new({from: accounts[4]});
		const uintgcBQMiZ = BigInt("846")
		const uintY510j4j = BigInt("1953")
		const addressDcUxIDu = accounts[2]
		const uintlW3xOZF = BigInt("1735")
		const addressuOu64iC = accounts[0]
		const addressFeE3QHk = accounts[2]
		const uintbL27FY = BigInt("1905")
//		const boolDxPyIU = await LIBERAPAYZaH9i5x.lock.call(addressDcUxIDu, uintY510j4j, uintgcBQMiZ, {from: accounts[4]});
//		const boollJLrAUd = await LIBERAPAYZaH9i5x.transferFrom.call(addressFeE3QHk, addressuOu64iC, uintlW3xOZF, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYZaH9i5x.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolrIw6ROY = await LIBERAPAYZaH9i5x.burn.call(uintbL27FY, {from: accounts[0]});

		await expect(LIBERAPAYZaH9i5x.lock.call(addressDcUxIDu, uintY510j4j, uintgcBQMiZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYILFsj7 = await LIBERAPAY.new({from: accounts[4]});
		const uint3Ld1nI = BigInt("958")
		const addressgzyObt = accounts[4]
		const uintmnM0xX8 = BigInt("618")
		const addressAMg4gU = accounts[5]
		const boolvbScpPQ = await LIBERAPAYILFsj7.burn.call(uint3Ld1nI, {from: accounts[4]});
		const boolVWxIdkl = await LIBERAPAYILFsj7.freezeAccount.call(addressgzyObt, {from: accounts[4]});
		const uint256AX5MB1 = await LIBERAPAYILFsj7.getNowTime.call({from: accounts[1]});
//		const boolhemLqto = await LIBERAPAYILFsj7.distribute.call(addressAMg4gU, uintmnM0xX8, {from: accounts[5]});
//		const uint256OEgC9dM = await LIBERAPAYILFsj7.totalSupply.call({from: accounts[3]});
//		await LIBERAPAYILFsj7.unpause.call({from: accounts[4]});

		assert.equal(boolVWxIdkl, true)
		assert.equal(boolvbScpPQ, true)
		assert.equal(uint256AX5MB1, BigInt("1630229912"))
		await expect(LIBERAPAYILFsj7.distribute.call(addressAMg4gU, uintmnM0xX8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const uintpYx0k6C = BigInt("1416")
		const addressFn1lBTM = accounts[4]
		const uintYdaPAiG = BigInt("21")
		const addressca3T81Y = accounts[2]
		const boolyD6DGtC = await LIBERAPAYUGtuBsq.distribute.call(addressFn1lBTM, uintpYx0k6C, {from: accounts[5]});
//		const boolxxnKGc = await LIBERAPAYUGtuBsq.unlock.call(addressca3T81Y, uintYdaPAiG, {from: accounts[1]});

		assert.equal(boolyD6DGtC, true)
		await expect(LIBERAPAYUGtuBsq.unlock.call(addressca3T81Y, uintYdaPAiG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUGtuBsq = await LIBERAPAY.new({from: accounts[5]});
		const addresscNaOt4n = accounts[2]
		const addressiafXxBu = accounts[0]
		const addressa1rfoZ6 = await LIBERAPAYUGtuBsq.transferOwnership.call(addresscNaOt4n, {from: accounts[5]});
		const uint256tzFfDWT = await LIBERAPAYUGtuBsq.balanceOf.call(addressiafXxBu, {from: accounts[0]});

		assert.equal(uint256tzFfDWT, BigInt("0"))
	});
})