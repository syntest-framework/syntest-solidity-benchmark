const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAowjNsXf = await TPA.new({from: accounts[5]});
		const address9OazSz = accounts[2]
		const addressyhfE3LT = accounts[1]
		const addressWblQMX2 = accounts[2]
		const addressgnIQF3 = accounts[2]
		const addressbsDW8pG = accounts[0]
		const boologR5jK4 = await TPAowjNsXf.isOwner.call(address9OazSz, {from: accounts[1]});
		const addressDASa0WT = await TPAowjNsXf.notFrozen.call(addressyhfE3LT, {from: accounts[5]});
		const address7l7Jlm = await TPAowjNsXf.notFrozen.call(addressWblQMX2, {from: accounts[5]});
		const boolJlsduoP = await TPAowjNsXf.isOwner.call(addressgnIQF3, {from: accounts[0]});
		const addressFdaZ35i = await TPAowjNsXf.upgradeTo.call(addressbsDW8pG, {from: accounts[1]});

		assert.equal(boologR5jK4, false)
		await expect(TPAowjNsXf.notFrozen.call(addressyhfE3LT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringlqMxf5p = "uG"
		const stringGIF7A74 = "9wqzyuu2U8"
		const uintN3PAIcd = BigInt("131")
		const TPAKiUe5nD = await TPA.new(stringlqMxf5p, stringGIF7A74, uintN3PAIcd, {from: accounts[3]});
		const uintNWa2Mo = BigInt("339")
		const addressPeajHrG = accounts[3]
		const addressabtNUA = accounts[1]
		const addressMQ2n9wX = await TPAKiUe5nD.burnFrom.call(addressPeajHrG, uintNWa2Mo, {from: accounts[4]});
		const boolYw2HEu9 = await TPAKiUe5nD.isOwner.call(addressabtNUA, {from: accounts[1]});
		await TPAKiUe5nD.whenPaused.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const uintXLDoXtl = BigInt("460")
		const addressPc1YRja = accounts[4]
		const addressJUTOGLY = await TPAbVBJRw7.burnFrom.call(addressPc1YRja, uintXLDoXtl, {from: accounts[2]});
		const boolyF31VIK = await TPAbVBJRw7.paused.call({from: accounts[2]});

		await expect(TPAbVBJRw7.burnFrom.call(addressPc1YRja, uintXLDoXtl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAvTYGRn6 = await TPA.new({from: accounts[3]});
		const uintLeruDRh = BigInt("1315")
		const uintRVfPrhN = BigInt("1250")
		const addressoBeVZdS = accounts[1]
		const addressb6fgDWv = accounts[3]
		const addresswst0woR = accounts[0]
		const uintrZt9q8U = BigInt("346")
		const addressTmn9OnP = "0x0000000000000000000000000000000000000001"
		const bool6j8aHw = await TPAvTYGRn6.transferWithLock.call(addressoBeVZdS, uintRVfPrhN, uintLeruDRh, {from: accounts[5]});
		const addressPUFI0CD = await TPAvTYGRn6.addAdmin.call(addressb6fgDWv, {from: accounts[4]});
		const uint256LzTJ2lW = await TPAvTYGRn6.balanceOf.call(addresswst0woR, {from: accounts[0]});
		const boolgRy3TKN = await TPAvTYGRn6.decreaseAllowance.call(addressTmn9OnP, uintrZt9q8U, {from: accounts[3]});

		await expect(TPAvTYGRn6.transferWithLock.call(addressoBeVZdS, uintRVfPrhN, uintLeruDRh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const addressVV7aMfi = accounts[1]
		const addressGepTaRR = accounts[3]
		const addressq6VJiJv = accounts[2]
		const uint256Te1oi7L = await TPAbNCdL2l.allowance.call(addressGepTaRR, addressVV7aMfi, {from: accounts[2]});
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addressq6VJiJv, {from: accounts[5]});
		await TPAbNCdL2l.whenNotPaused.call({from: accounts[5]});

		assert.equal(uint256Te1oi7L, BigInt("0"))
		assert.equal(uint256jjpun5s, BigInt("0"))
		await expect(TPAbNCdL2l.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const uintuVREf8Q = BigInt("2")
		const addressudKxUmB = accounts[4]
		await TPAbVBJRw7.renounceAdmin.call({from: accounts[0]});
		const addressJUTOGLY = await TPAbVBJRw7.burnFrom.call(addressudKxUmB, uintuVREf8Q, {from: accounts[2]});

		await expect(TPAbVBJRw7.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const addressXw7DiBT = accounts[3]
		const uintR59uggI = BigInt("460")
		const addressI5ODhh = accounts[4]
		const boolIRe30OZ = await TPAbVBJRw7.isOwner.call(addressXw7DiBT, {from: accounts[2]});
		const addressJUTOGLY = await TPAbVBJRw7.burnFrom.call(addressI5ODhh, uintR59uggI, {from: accounts[2]});

		assert.equal(boolIRe30OZ, true)
		await expect(TPAbVBJRw7.burnFrom.call(addressI5ODhh, uintR59uggI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const boolyF31VIK = await TPAbVBJRw7.paused.call({from: accounts[2]});

		assert.equal(boolyF31VIK, false)
	});

	it('test for TPA', async () => {
		const TPAvTYGRn6 = await TPA.new({from: accounts[3]});
		const uintH3NHkwD = BigInt("1162")
		const addressASp4rOr = accounts[0]
		const uintiasjBmS = BigInt("1315")
		const uintNnDkzfF = BigInt("1250")
		const addressRSyecz = accounts[2]
		const addressVwDmuoy = accounts[3]
		const addressBsbdaMk = accounts[1]
		const addressgdKFUtH = accounts[0]
		const uinteUgJtN = BigInt("346")
		const addressKkONACq = "0x0000000000000000000000000000000000000001"
		const boolHYeenok = await TPAvTYGRn6.decreaseAllowance.call(addressASp4rOr, uintH3NHkwD, {from: accounts[2]});
		const bool6j8aHw = await TPAvTYGRn6.transferWithLock.call(addressRSyecz, uintNnDkzfF, uintiasjBmS, {from: accounts[5]});
		const addressPUFI0CD = await TPAvTYGRn6.addAdmin.call(addressVwDmuoy, {from: accounts[4]});
		const addresswKYFZg = await TPAvTYGRn6.transferOwnership.call(addressBsbdaMk, {from: accounts[2]});
		const uint256LzTJ2lW = await TPAvTYGRn6.balanceOf.call(addressgdKFUtH, {from: accounts[0]});
		const boolgRy3TKN = await TPAvTYGRn6.decreaseAllowance.call(addressKkONACq, uinteUgJtN, {from: accounts[3]});
		await TPAvTYGRn6.onlyAdmin.call({from: accounts[3]});
		const stringm6JoLIm = await TPAvTYGRn6.symbol.call({from: accounts[0]});

		await expect(TPAvTYGRn6.decreaseAllowance.call(addressASp4rOr, uintH3NHkwD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const uintnmpH5Ie = BigInt("110")
		const addressHmCBFVt = accounts[2]
		const addressSQiYeiZ = accounts[2]
		const uintAeisWY6 = BigInt("460")
		const addressm0WdGEY = accounts[5]
		const boolVAayg27 = await TPAbVBJRw7.transferFrom.call(addressSQiYeiZ, addressHmCBFVt, uintnmpH5Ie, {from: "0x0000000000000000000000000000000000000001"});
		const addressJUTOGLY = await TPAbVBJRw7.burnFrom.call(addressm0WdGEY, uintAeisWY6, {from: accounts[2]});
		const boolyF31VIK = await TPAbVBJRw7.paused.call({from: accounts[2]});

		await expect(TPAbVBJRw7.transferFrom.call(addressSQiYeiZ, addressHmCBFVt, uintnmpH5Ie, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const addressC4gnbHx = accounts[2]
		const uintOfZHnR = BigInt("814")
		const addressGJ29MdF = accounts[5]
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addressC4gnbHx, {from: accounts[5]});
		const boolFXNGuvz = await TPAbNCdL2l.approve.call(addressGJ29MdF, uintOfZHnR, {from: accounts[1]});
		await TPAbNCdL2l.pause.call({from: accounts[2]});
		await TPAbNCdL2l.whenNotPaused.call({from: accounts[5]});

		assert.equal(boolFXNGuvz, true)
		assert.equal(uint256jjpun5s, BigInt("0"))
		await expect(TPAbNCdL2l.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const uintU52PWbP = BigInt("413")
		const addressuSQWqdJ = accounts[4]
		const addressTyyUcJN = accounts[1]
		const uintTxY1VV1 = BigInt("460")
		const addressN4kuZgv = accounts[5]
		const boolK880dsm = await TPAbVBJRw7.transfer.call(addressuSQWqdJ, uintU52PWbP, {from: accounts[5]});
		const boolAlrmpy = await TPAbVBJRw7.isOwner.call(addressTyyUcJN, {from: accounts[3]});
		const addressJUTOGLY = await TPAbVBJRw7.burnFrom.call(addressN4kuZgv, uintTxY1VV1, {from: accounts[2]});

		await expect(TPAbVBJRw7.transfer.call(addressuSQWqdJ, uintU52PWbP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const addresstzQtGoB = accounts[1]
		const addressncMK3Om = accounts[3]
		const addresskg0nGcW = accounts[2]
		const uintn9G4s43 = BigInt("1338")
		const addressBrrNrgG = accounts[3]
		const uint256Te1oi7L = await TPAbNCdL2l.allowance.call(addressncMK3Om, addresstzQtGoB, {from: accounts[2]});
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addresskg0nGcW, {from: accounts[5]});
		const boolfzPBDKx = await TPAbNCdL2l.increaseAllowance.call(addressBrrNrgG, uintn9G4s43, {from: accounts[0]});
		await TPAbNCdL2l.whenNotPaused.call({from: accounts[5]});

		assert.equal(boolfzPBDKx, true)
		assert.equal(uint256Te1oi7L, BigInt("0"))
		assert.equal(uint256jjpun5s, BigInt("0"))
		await expect(TPAbNCdL2l.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const addressJrT1jn = accounts[2]
		const stringRKaj9cF = await TPAbNCdL2l.name.call({from: accounts[3]});
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addressJrT1jn, {from: accounts[5]});
		await TPAbNCdL2l.whenNotPaused.call({from: accounts[5]});

		assert.equal(stringRKaj9cF, "TPA")
		assert.equal(uint256jjpun5s, BigInt("0"))
		await expect(TPAbNCdL2l.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const uintn9qFNVO = BigInt("1125")
		const addressTpWO57n = accounts[2]
		const uintUNd0K6w = BigInt("736")
		const addressBMVF9Su = accounts[3]
		const uintc1834CE = BigInt("1592")
		const uint256iMg87wO = await TPAbNCdL2l.burn.call(uintn9qFNVO, {from: accounts[3]});
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addressTpWO57n, {from: accounts[5]});
		const boolqqR1Haz = await TPAbNCdL2l.increaseAllowance.call(addressBMVF9Su, uintUNd0K6w, {from: accounts[5]});
		const uint256zU1SLr = await TPAbNCdL2l.burn.call(uintc1834CE, {from: accounts[3]});

		await expect(TPAbNCdL2l.burn.call(uintn9qFNVO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const addressKHQ03B = accounts[0]
		const addresslXCFzHF = accounts[3]
		const boolzZz0GvA = await TPAbNCdL2l.unfreezeAccount.call(addressKHQ03B, {from: accounts[4]});
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addresslXCFzHF, {from: accounts[5]});

		await expect(TPAbNCdL2l.unfreezeAccount.call(addressKHQ03B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const uint8B2Uls5H = await TPAbVBJRw7.decimals.call({from: accounts[3]});
		await TPAbVBJRw7.renounceAdmin.call({from: accounts[0]});

		assert.equal(uint8B2Uls5H, BigInt("18"))
		await expect(TPAbVBJRw7.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const addressO6QoloJ = accounts[2]
		const addressYfkbqZP = accounts[1]
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addressO6QoloJ, {from: accounts[5]});
		const boolNuvMNcC = await TPAbNCdL2l.isOwner.call(addressYfkbqZP, {from: accounts[1]});
		const uint256rdDEqH8 = await TPAbNCdL2l.totalSupply.call({from: accounts[0]});

		assert.equal(boolNuvMNcC, false)
		assert.equal(uint256jjpun5s, BigInt("0"))
		assert.equal(uint256rdDEqH8, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAbNCdL2l = await TPA.new({from: accounts[4]});
		const address39Hf3y = "0x0000000000000000000000000000000000000001"
		const addresscDTzLgS = accounts[2]
		const addressW49TCUj = accounts[3]
		const addressNiLGXre = "0x0000000000000000000000000000000000000001"
		const uintMTnngtR = BigInt("361")
		const addressxoZHGbm = accounts[4]
		const addresstmboGos = await TPAbNCdL2l.addAdmin.call(address39Hf3y, {from: accounts[4]});
		const uint8DUQFMsA = await TPAbNCdL2l.decimals.call({from: accounts[1]});
		const boolzZz0GvA = await TPAbNCdL2l.unfreezeAccount.call(addresscDTzLgS, {from: accounts[4]});
		const uint256jjpun5s = await TPAbNCdL2l.balanceOf.call(addressW49TCUj, {from: accounts[5]});
		const boolGLACF1V = await TPAbNCdL2l.unfreezeAccount.call(addressNiLGXre, {from: accounts[2]});
		const bool6hOfFQ = await TPAbNCdL2l.approve.call(addressxoZHGbm, uintMTnngtR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8DUQFMsA, BigInt("18"))
		await expect(TPAbNCdL2l.unfreezeAccount.call(addresscDTzLgS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const address3IdANz = accounts[2]
		const uintpMjPm8Z = BigInt("554")
		const uintQxiTqqS = BigInt("1851")
		const addressEgftKtu = accounts[4]
		const addressrL58gVp = accounts[3]
		const uintnwlHsxn = BigInt("413")
		const addressBsUbpMl = accounts[6]
		const boolZbDnTeW = await TPAbVBJRw7.freezeAccount.call(address3IdANz, {from: accounts[3]});
		const boolYDvEhxb = await TPAbVBJRw7.lock.call(addressEgftKtu, uintQxiTqqS, uintpMjPm8Z, {from: accounts[2]});
		const boolGHFoWJI = await TPAbVBJRw7.unfreezeAccount.call(addressrL58gVp, {from: accounts[3]});
		const boolK880dsm = await TPAbVBJRw7.transfer.call(addressBsUbpMl, uintnwlHsxn, {from: accounts[5]});

		assert.equal(boolZbDnTeW, true)
		await expect(TPAbVBJRw7.lock.call(addressEgftKtu, uintQxiTqqS, uintpMjPm8Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAL80jAQX = await TPA.new({from: accounts[1]});
		const uintcLVRBW8 = BigInt("24")
		const addressvzsm1r = accounts[0]
		const addressgNvc2Ul = accounts[4]
		const addressI3THrxn = accounts[1]
		await TPAL80jAQX.pause.call({from: accounts[1]});
		await TPAL80jAQX.whenPaused.call({from: accounts[3]});
		const boolVWreZdR = await TPAL80jAQX.transfer.call(addressvzsm1r, uintcLVRBW8, {from: accounts[4]});
		const boolYnLa8L = await TPAL80jAQX.unfreezeAccount.call(addressgNvc2Ul, {from: accounts[2]});
		const booll7l7v42 = await TPAL80jAQX.freezeAccount.call(addressI3THrxn, {from: accounts[3]});

		await expect(TPAL80jAQX.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbVBJRw7 = await TPA.new({from: accounts[3]});
		const addressutuDTs = accounts[4]
		const stringclSuo79 = await TPAbVBJRw7.symbol.call({from: accounts[5]});
		const addressuKqRaAa = await TPAbVBJRw7.transferOwnership.call(addressutuDTs, {from: accounts[3]});
		await TPAbVBJRw7.renounceAdmin.call({from: accounts[0]});

		assert.equal(stringclSuo79, "TPA")
		await expect(TPAbVBJRw7.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxMCcObp = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQboTdZI = BigInt("386")
		const addressEu1Xg4p = accounts[4]
		const addressneMBqn9 = accounts[5]
		const uintrEDGfqP = BigInt("349")
		const addressKDAqhVp = "0x0000000000000000000000000000000000000001"
		const addressrDaf72Q = accounts[4]
		const boolyiw5hx2 = await TPAxMCcObp.paused.call({from: accounts[5]});
		const addressgrUHr2n = await TPAxMCcObp.burnFrom.call(addressEu1Xg4p, uintQboTdZI, {from: accounts[1]});
		const boolmWjXQN = await TPAxMCcObp.freezeAccount.call(addressneMBqn9, {from: accounts[5]});
		const addressTE4AJ6g = await TPAxMCcObp.burnFrom.call(addressKDAqhVp, uintrEDGfqP, {from: accounts[1]});
		const boolmw7dWZG = await TPAxMCcObp.isOwner.call(addressrDaf72Q, {from: accounts[2]});
	});
})