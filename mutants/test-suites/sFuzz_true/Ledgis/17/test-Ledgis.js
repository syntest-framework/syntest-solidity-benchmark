const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisjTDm1JC = await Ledgis.new({from: accounts[1]});
		const uintfsYeY6O = BigInt("486")
		const uintJKINHid = BigInt("1453")
		const addressrNwj0GH = accounts[4]
		const uintZXE8cfq = BigInt("1607")
		const addressFD2QcbJ = accounts[3]
//		const addressY4zHrSS = await LedgisjTDm1JC.lockAfter.call(addressrNwj0GH, uintJKINHid, uintfsYeY6O, {from: accounts[3]});
//		await LedgisjTDm1JC.onlyOwner.call({from: accounts[1]});
//		const boolC752P9g = await LedgisjTDm1JC.mint.call(addressFD2QcbJ, uintZXE8cfq, {from: accounts[4]});

		await expect(LedgisjTDm1JC.lockAfter.call(addressrNwj0GH, uintJKINHid, uintfsYeY6O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB6z5yz = await Ledgis.new({from: accounts[4]});
		const uinteAuXRvO = BigInt("560")
		const addressd1HfWN = accounts[3]
		const addressyvsOieC = accounts[3]
//		const bools9AD1yY = await LedgisB6z5yz.transfer.call(addressd1HfWN, uinteAuXRvO, {from: accounts[1]});
//		await LedgisB6z5yz.whenNotFrozen.call({from: accounts[3]});
//		const addressO1l9USq = await LedgisB6z5yz.freeze.call(addressyvsOieC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisB6z5yz.transfer.call(addressd1HfWN, uinteAuXRvO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis0CC4p8 = await Ledgis.new({from: accounts[0]});
		const uintbZsjyQv = BigInt("1718")
		const addressereQEam = accounts[1]
		const uintzXfN8u6 = BigInt("1321")
		const addressP3frIhF = accounts[3]
		const addressMgy5CX0 = accounts[5]
		const boolMnXK9sY = await Ledgis0CC4p8.approve.call(addressereQEam, uintbZsjyQv, {from: accounts[1]});
//		await Ledgis0CC4p8.whenNotPaused.call({from: accounts[2]});
//		const boollvoaUG = await Ledgis0CC4p8.transferFrom.call(addressMgy5CX0, addressP3frIhF, uintzXfN8u6, {from: accounts[1]});

		assert.equal(boolMnXK9sY, true)
		await expect(Ledgis0CC4p8.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLSt1tzd = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQ4mUJIo = BigInt("445")
		const uintAYM7Kv = BigInt("2004")
		const addressbHXG0BS = accounts[4]
		const uintkBI43hK = BigInt("1891")
		const addressOKR2oMz = accounts[0]
		const addresshsLxCA = accounts[1]
		const uintztt5Z7x = BigInt("1098")
		const uintf94aG9j = BigInt("1600")
		const addressuIwyUsl = accounts[3]
		const boolu7PBTjm = await LedgisLSt1tzd.transferWithLockAfter.call(addressbHXG0BS, uintAYM7Kv, uintQ4mUJIo, {from: accounts[4]});
		const boolm9W3K8 = await LedgisLSt1tzd.transfer.call(addressOKR2oMz, uintkBI43hK, {from: accounts[2]});
		await LedgisLSt1tzd.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256seVg0qM = await LedgisLSt1tzd.lockCount.call(addresshsLxCA, {from: accounts[3]});
		const boolloo4W7L = await LedgisLSt1tzd.transferWithLock.call(addressuIwyUsl, uintf94aG9j, uintztt5Z7x, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintuIMUYvU = BigInt("553")
		const addressyxRUFqV = accounts[0]
		const addressV5c5DMZ = accounts[1]
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressV5c5DMZ, addressyxRUFqV, uintuIMUYvU, {from: accounts[4]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		await expect(LedgisXC1Hqg.transferFrom.call(addressV5c5DMZ, addressyxRUFqV, uintuIMUYvU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintY7lfXrm = BigInt("946")
		const addresstHJ35X2 = accounts[4]
		const uintbmyY1t0 = BigInt("553")
		const addressMqJfwKa = accounts[0]
		const addressNiz2LRn = accounts[1]
		const addresseScyol6 = accounts[1]
//		await LedgisXC1Hqg.lockState.call(addresstHJ35X2, uintY7lfXrm, {from: accounts[4]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressNiz2LRn, addressMqJfwKa, uintbmyY1t0, {from: accounts[4]});
//		const addressnv6iEAt = await LedgisXC1Hqg.freeze.call(addresseScyol6, {from: accounts[4]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		await expect(LedgisXC1Hqg.lockState.call(addresstHJ35X2, uintY7lfXrm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintliTBKyu = BigInt("863")
		const addressjCsHgCQ = accounts[0]
		const addressGrnWYyo = accounts[0]
		const uinto7USNsE = BigInt("553")
		const addresseH9EyPZ = accounts[0]
		const addressA0apAo8 = accounts[2]
		const boolmAyNheP = await LedgisXC1Hqg.approve.call(addressjCsHgCQ, uintliTBKyu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Qp5XJ2y = await LedgisXC1Hqg.balanceOf.call(addressGrnWYyo, {from: accounts[0]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressA0apAo8, addresseH9EyPZ, uinto7USNsE, {from: accounts[4]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolmAyNheP, true)
		assert.equal(uint256Qp5XJ2y, BigInt("0"))
		await expect(LedgisXC1Hqg.transferFrom.call(addressA0apAo8, addresseH9EyPZ, uinto7USNsE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisvo5OGRJ = await Ledgis.new({from: accounts[1]});
		const uintGvE8OGK = BigInt("1573")
		const uintpsig0td = BigInt("2011")
		const addressRxE3xVd = accounts[1]
		const uintIwSEWuC = BigInt("1502")
		const addressCv8PZjG = accounts[1]
		const addressz2ClZdK = await Ledgisvo5OGRJ.lockAfter.call(addressRxE3xVd, uintpsig0td, uintGvE8OGK, {from: accounts[1]});
//		const boolLXBQt7w = await Ledgisvo5OGRJ.transfer.call(addressCv8PZjG, uintIwSEWuC, {from: accounts[4]});

		await expect(Ledgisvo5OGRJ.transfer.call(addressCv8PZjG, uintIwSEWuC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintCIyxvMP = BigInt("1039")
		const addressoNOq1q1 = accounts[3]
		const uintUewxOg = BigInt("1107")
		const uintnK13RLd = BigInt("1923")
		const address4CD7cf = accounts[5]
		const uintZBlDi56 = BigInt("553")
		const addresskE29W64 = accounts[0]
		const addressaANiMH = accounts[1]
		const boolwzrgfLH = await LedgisXC1Hqg.transfer.call(addressoNOq1q1, uintCIyxvMP, {from: accounts[4]});
//		const addressnky3NIV = await LedgisXC1Hqg.lock.call(address4CD7cf, uintnK13RLd, uintUewxOg, {from: accounts[4]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressaANiMH, addresskE29W64, uintZBlDi56, {from: accounts[4]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolwzrgfLH, true)
		await expect(LedgisXC1Hqg.lock.call(address4CD7cf, uintnK13RLd, uintUewxOg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintLGVd4su = BigInt("173")
		const addresszXXpm6 = accounts[2]
//		const boolk0ABNeR = await LedgisXC1Hqg.decreaseAllowance.call(addresszXXpm6, uintLGVd4su, {from: accounts[2]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		await expect(LedgisXC1Hqg.decreaseAllowance.call(addresszXXpm6, uintLGVd4su, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressxcRWoAM = accounts[1]
		const uintDOttERH = BigInt("543")
		const addressgb3NmmS = accounts[1]
		const addressfSprOPO = accounts[1]
		const boolRyd2i7Z = await LedgisXC1Hqg.isFrozen.call(addressxcRWoAM, {from: accounts[4]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressfSprOPO, addressgb3NmmS, uintDOttERH, {from: accounts[4]});

		assert.equal(boolRyd2i7Z, false)
		await expect(LedgisXC1Hqg.transferFrom.call(addressfSprOPO, addressgb3NmmS, uintDOttERH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressTFV5ftO = accounts[3]
		const uintTxTVSHQ = BigInt("37")
		const addresswbxlCbQ = accounts[1]
		const uintUagUEBI = BigInt("553")
		const addressUcuiwhV = accounts[1]
		const addressTSWYNIF = accounts[1]
		const uint256lx7meVt = await LedgisXC1Hqg.lockCount.call(addressTFV5ftO, {from: accounts[2]});
		const boolBhIMEO0 = await LedgisXC1Hqg.approve.call(addresswbxlCbQ, uintTxTVSHQ, {from: accounts[2]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressTSWYNIF, addressUcuiwhV, uintUagUEBI, {from: accounts[4]});

		assert.equal(boolBhIMEO0, true)
		assert.equal(uint256lx7meVt, BigInt("0"))
		await expect(LedgisXC1Hqg.transferFrom.call(addressTSWYNIF, addressUcuiwhV, uintUagUEBI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressmvU2J1P = accounts[1]
		const addressUQN5Mo = accounts[2]
		const uintz7Gmyog = BigInt("1455")
		const uintUb51uxi = BigInt("69")
		const addressDgUQbQr = accounts[4]
		const uintyInoxlI = BigInt("527")
		const addressCQGrNh4 = accounts[3]
		const addressOSxyShd = accounts[0]
		const uintbz7UGmG = BigInt("553")
		const addressi1YC7Zw = accounts[0]
		const addressqVlMlk = accounts[2]
		const uintib6vEos = BigInt("223")
		const uintqPHeq6o = BigInt("1590")
		const addressWFZclHt = accounts[0]
		const uint256Qp5XJ2y = await LedgisXC1Hqg.balanceOf.call(addressmvU2J1P, {from: accounts[0]});
		const uint256BDf0WnR = await LedgisXC1Hqg.balanceOf.call(addressUQN5Mo, {from: accounts[3]});
		const boolVm4r9eM = await LedgisXC1Hqg.transferWithLock.call(addressDgUQbQr, uintUb51uxi, uintz7Gmyog, {from: accounts[4]});
//		const booleJaeTro = await LedgisXC1Hqg.transferFrom.call(addressOSxyShd, addressCQGrNh4, uintyInoxlI, {from: accounts[3]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressqVlMlk, addressi1YC7Zw, uintbz7UGmG, {from: accounts[4]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});
//		const addressM0aYM7b = await LedgisXC1Hqg.lock.call(addressWFZclHt, uintqPHeq6o, uintib6vEos, {from: accounts[3]});

		assert.equal(boolVm4r9eM, true)
		assert.equal(uint256BDf0WnR, BigInt("0"))
		assert.equal(uint256Qp5XJ2y, BigInt("0"))
		await expect(LedgisXC1Hqg.transferFrom.call(addressOSxyShd, addressCQGrNh4, uintyInoxlI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintzs33HV7 = BigInt("993")
		const addressHvJdOGJ = accounts[4]
		const addressW7SkLi = accounts[3]
		const uint256bediEV1 = await LedgisXC1Hqg.totalSupply.call({from: accounts[0]});
//		const boolphqhOEY = await LedgisXC1Hqg.transferFrom.call(addressW7SkLi, addressHvJdOGJ, uintzs33HV7, {from: accounts[3]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256bediEV1, BigInt("10000000000000"))
		await expect(LedgisXC1Hqg.transferFrom.call(addressW7SkLi, addressHvJdOGJ, uintzs33HV7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintAYWAQK3 = BigInt("553")
		const addressOpsZ9Ov = accounts[2]
		const addressZyZ3zeb = accounts[1]
		const uintmpaAP5 = BigInt("1401")
		const addressJYLWrLz = accounts[4]
		const uint256HkIiEHq = await LedgisXC1Hqg.currentTime.call({from: accounts[4]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressZyZ3zeb, addressOpsZ9Ov, uintAYWAQK3, {from: accounts[4]});
//		const boolbIBXpoX = await LedgisXC1Hqg.increaseAllowance.call(addressJYLWrLz, uintmpaAP5, {from: accounts[4]});

		assert.equal(uint256HkIiEHq, BigInt("1630232228"))
		await expect(LedgisXC1Hqg.transferFrom.call(addressZyZ3zeb, addressOpsZ9Ov, uintAYWAQK3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintb3et5kE = BigInt("634")
		const addressq28OCTh = accounts[2]
		const uintNN3tjv7 = BigInt("553")
		const addressJLWBpwW = accounts[1]
		const addressfmCViX7 = accounts[1]
		const uintzAvPFqg = BigInt("1603")
		const uintoaxUy7 = BigInt("403")
		const addressKNmfjOK = "0x0000000000000000000000000000000000000001"
//		const addressSqQaxBK = await LedgisXC1Hqg.burn.call(addressq28OCTh, uintb3et5kE, {from: accounts[4]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressfmCViX7, addressJLWBpwW, uintNN3tjv7, {from: accounts[4]});
//		const boolKEalZw8 = await LedgisXC1Hqg.transferWithLock.call(addressKNmfjOK, uintoaxUy7, uintzAvPFqg, {from: accounts[2]});

		await expect(LedgisXC1Hqg.burn.call(addressq28OCTh, uintb3et5kE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressiMrjAFC = accounts[5]
		const addressQAmHeMF = accounts[1]
		const uintluIkETx = BigInt("1671")
		const addressfAmBWIt = accounts[3]
		const addressw2QsOem = await LedgisXC1Hqg.unfreeze.call(addressiMrjAFC, {from: accounts[4]});
		const uint256Qp5XJ2y = await LedgisXC1Hqg.balanceOf.call(addressQAmHeMF, {from: accounts[0]});
		const boolvkqZjq3 = await LedgisXC1Hqg.increaseAllowance.call(addressfAmBWIt, uintluIkETx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvkqZjq3, true)
		assert.equal(uint256Qp5XJ2y, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressLUy0ibZ = accounts[2]
		const uintOjVEHIA = BigInt("1291")
		const uintgphYmF6 = BigInt("886")
		const address4WVMYw = accounts[4]
		const uintoLb7Yre = BigInt("1305")
		const uintbse1UED = BigInt("416")
		const addressXEtApuJ = accounts[3]
		const uintX9d3ciV = BigInt("553")
		const addressvZdUo94 = accounts[1]
		const addressqLZQR6V = accounts[1]
		const boolV2BvCWk = await LedgisXC1Hqg.isFrozen.call(addressLUy0ibZ, {from: accounts[4]});
		const boolI94PawO = await LedgisXC1Hqg.transferWithLockAfter.call(address4WVMYw, uintgphYmF6, uintOjVEHIA, {from: accounts[4]});
//		const boolSYadG0Q = await LedgisXC1Hqg.transferWithLockAfter.call(addressXEtApuJ, uintbse1UED, uintoLb7Yre, {from: accounts[3]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressqLZQR6V, addressvZdUo94, uintX9d3ciV, {from: accounts[4]});

		assert.equal(boolI94PawO, true)
		assert.equal(boolV2BvCWk, false)
		await expect(LedgisXC1Hqg.transferWithLockAfter.call(addressXEtApuJ, uintbse1UED, uintoLb7Yre, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintg8aK5L3 = BigInt("1524")
		const addressLpcr8b3 = accounts[0]
		const addressPArzTRS = accounts[1]
		const addressze3Ktmv = accounts[3]
		const boolRQNsg5t = await LedgisXC1Hqg.increaseAllowance.call(addressLpcr8b3, uintg8aK5L3, {from: accounts[2]});
		const uint256UM9mXpU = await LedgisXC1Hqg.allowance.call(addressze3Ktmv, addressPArzTRS, {from: accounts[0]});
		const uint256t7md1fj = await LedgisXC1Hqg.currentTime.call({from: accounts[4]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolRQNsg5t, true)
		assert.equal(uint256UM9mXpU, BigInt("0"))
		assert.equal(uint256t7md1fj, BigInt("1630232229"))
		await expect(LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintju6pk3 = BigInt("958")
		const uintBmFJAtU = BigInt("1802")
		const addresskSVJ8za = accounts[4]
		const uint256GUkLfDQ = await LedgisXC1Hqg.afterTime.call(uintju6pk3, {from: accounts[3]});
//		const booludj2xn = await LedgisXC1Hqg.transfer.call(addresskSVJ8za, uintBmFJAtU, {from: accounts[2]});
//		await LedgisXC1Hqg.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256GUkLfDQ, BigInt("1630233180"))
		await expect(LedgisXC1Hqg.transfer.call(addresskSVJ8za, uintBmFJAtU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGyBzniL = await Ledgis.new({from: accounts[0]});
		const addressNfJ8zB2 = accounts[0]
		const addressO9dUKfB = accounts[2]
		const addressZ5sJxQO = accounts[2]
		const uintsMcNqTx = BigInt("1554")
		const address4iluif = accounts[4]
		const addresspbUCG7Y = await LedgisGyBzniL.freeze.call(addressNfJ8zB2, {from: accounts[0]});
		const uint256x0GaDvp = await LedgisGyBzniL.balanceOf.call(addressO9dUKfB, {from: accounts[0]});
		const uint256mjXwAk7 = await LedgisGyBzniL.currentTime.call({from: accounts[2]});
//		const addressSjSKXoL = await LedgisGyBzniL.transferOwnership.call(addressZ5sJxQO, {from: accounts[3]});
//		const addressfobZpGe = await LedgisGyBzniL.unlock.call(address4iluif, uintsMcNqTx, {from: accounts[2]});

		assert.equal(uint256mjXwAk7, BigInt("1630232218"))
		assert.equal(uint256x0GaDvp, BigInt("0"))
		await expect(LedgisGyBzniL.transferOwnership.call(addressZ5sJxQO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const address8ICuHc = accounts[2]
		const uintXTdCUF5 = BigInt("191")
		const addressDuqAlC = accounts[0]
		const addressiH5el8I = accounts[0]
//		await LedgisXC1Hqg.renounceOwnership.call({from: accounts[4]});
//		const uint256Qp5XJ2y = await LedgisXC1Hqg.balanceOf.call(address8ICuHc, {from: accounts[0]});
//		const boolkdxR6i5 = await LedgisXC1Hqg.transferFrom.call(addressiH5el8I, addressDuqAlC, uintXTdCUF5, {from: accounts[2]});

		await expect(LedgisXC1Hqg.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressR2TGSoG = accounts[2]
//		await LedgisXC1Hqg.pause.call({from: accounts[4]});
//		await LedgisXC1Hqg.renounceOwnership.call({from: accounts[3]});
//		const uint256Qp5XJ2y = await LedgisXC1Hqg.balanceOf.call(addressR2TGSoG, {from: accounts[0]});

		await expect(LedgisXC1Hqg.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const uintpsFA2hc = BigInt("167")
		const addresswFpM6Xl = accounts[3]
		const uintfDr9tFz = BigInt("553")
		const addressgUPxBRd = accounts[1]
		const addressPC1TDBG = accounts[2]
//		const addresssSjOWyK = await LedgisXC1Hqg.unlock.call(addresswFpM6Xl, uintpsFA2hc, {from: accounts[4]});
//		const boolDUnMQj2 = await LedgisXC1Hqg.transferFrom.call(addressPC1TDBG, addressgUPxBRd, uintfDr9tFz, {from: accounts[4]});

		await expect(LedgisXC1Hqg.unlock.call(addresswFpM6Xl, uintpsFA2hc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXC1Hqg = await Ledgis.new({from: accounts[4]});
		const addressKo6Atig = accounts[2]
		const addressMW5B3vb = accounts[3]
		const uint256Qp5XJ2y = await LedgisXC1Hqg.balanceOf.call(addressKo6Atig, {from: accounts[0]});
		const addressRvaoZ3e = await LedgisXC1Hqg.transferOwnership.call(addressMW5B3vb, {from: accounts[4]});

		assert.equal(uint256Qp5XJ2y, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgisd6UmlMP = await Ledgis.new({from: accounts[4]});
		const uintRtH9QX5 = BigInt("1047")
		const addressvMpgrRf = accounts[3]
		const uintau9bKcN = BigInt("1226")
		const addressKQZ3IqU = accounts[1]
		const boolbe8J67x = await Ledgisd6UmlMP.mint.call(addressvMpgrRf, uintRtH9QX5, {from: accounts[4]});
//		await Ledgisd6UmlMP.unpause.call({from: accounts[5]});
//		const uint256fsKFurv = await Ledgisd6UmlMP.totalSupply.call({from: accounts[2]});
//		await Ledgisd6UmlMP.whenNotFrozen.call({from: accounts[0]});
//		const addressZodgUJ7 = await Ledgisd6UmlMP.unlock.call(addressKQZ3IqU, uintau9bKcN, {from: accounts[4]});

		assert.equal(boolbe8J67x, true)
		await expect(Ledgisd6UmlMP.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})