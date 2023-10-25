const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100I58Mcil = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressClwdbaJ = accounts[0]
		const uintsl71JBU = BigInt("757")
		const uintbiTBkCz = BigInt("969")
		const uintouhGDJ2 = BigInt("1822")
		const addressVIHoQKq = accounts[3]
		const addressMTuFPbm = accounts[1]
		await Token50X100I58Mcil.lock.call({from: accounts[4]});
		const addressOQClD6V = await Token50X100I58Mcil.transferOwnership.call(addressClwdbaJ, {from: accounts[0]});
		const booldH5KMH = await Token50X100I58Mcil.setMaxLockPeriod.call(uintsl71JBU, {from: accounts[4]});
		const booltvr3CDo = await Token50X100I58Mcil._transfer.call(addressMTuFPbm, addressVIHoQKq, uintouhGDJ2, uintbiTBkCz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Token50X100', async () => {
		const Token50X100v0M7Rcj = await Token50X100.new({from: accounts[1]});
		const uintkPz9O4i = BigInt("87")
		const stringiOzNTvT = "2XYoNXNQFsC8JYol"
		const stringVaKZDyR = "rQZTdvpKcW7ug5y2nc7G6xwKEQbP0TajQsBpq6338zcP9uuckqbs4YMXENQYEKmFsBKad40qVKCmW3B75kI1"
		const addressxhiWEMe = accounts[0]
		const addressLefKse5 = accounts[4]
		const boolTMDRsN5 = await Token50X100v0M7Rcj.setSymbolNameDecimals.call(stringVaKZDyR, stringiOzNTvT, uintkPz9O4i, {from: accounts[0]});
		await Token50X100v0M7Rcj.lock.call({from: accounts[2]});
		const uint256E2lrZwf = await Token50X100v0M7Rcj.allowance.call(addressLefKse5, addressxhiWEMe, {from: accounts[0]});

		await expect(Token50X100v0M7Rcj.setSymbolNameDecimals.call(stringVaKZDyR, stringiOzNTvT, uintkPz9O4i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dvd5C5T = await Token50X100.new({from: accounts[0]});
		const addresse0YbGns = accounts[4]
		const addressDoleUZ1 = accounts[4]
		const addresspVrgQa = accounts[4]
		const uintcd7YPZ8 = BigInt("623")
		const uintqMqb4Sg = BigInt("572")
		const addressbuV9WfQ = accounts[1]
		const uint256U7qgvqy = await Token50X100dvd5C5T.balanceOf.call(addresse0YbGns, {from: accounts[1]});
		const uint256d86AyPL = await Token50X100dvd5C5T.allowance.call(addresspVrgQa, addressDoleUZ1, {from: accounts[5]});
		const boolPOM702s = await Token50X100dvd5C5T.safeLock.call(uintqMqb4Sg, uintcd7YPZ8, {from: accounts[3]});
		const addresstNi6YJr = await Token50X100dvd5C5T.setOriginalContract.call(addressbuV9WfQ, {from: accounts[5]});

		assert.equal(uint256U7qgvqy, BigInt("0"))
		assert.equal(uint256d86AyPL, BigInt("0"))
		await expect(Token50X100dvd5C5T.safeLock.call(uintqMqb4Sg, uintcd7YPZ8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HaSZxGt = await Token50X100.new({from: accounts[4]});
		const uintBbs4QvZ = BigInt("1571")
		const uinthYPMLie = BigInt("1401")
		const addressSDSDzt3 = accounts[0]
		const addressUD9qu6h = accounts[0]
		const boolundeIAj = false
		const addressWJ0dlSH = accounts[2]
		const boolWuR8WW = await Token50X100HaSZxGt._transfer.call(addressUD9qu6h, addressSDSDzt3, uinthYPMLie, uintBbs4QvZ, {from: accounts[4]});
		await Token50X100HaSZxGt.setWhiteListReceivers.call(addressWJ0dlSH, boolundeIAj, {from: accounts[4]});

		await expect(Token50X100HaSZxGt._transfer.call(addressUD9qu6h, addressSDSDzt3, uinthYPMLie, uintBbs4QvZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FWgTrZ = await Token50X100.new({from: accounts[4]});
		const addressRPJaGl2 = accounts[2]
		const address3YKi7w = accounts[5]
		const booljn4PfR = false
		const addressPodVto = accounts[4]
		const uintTdgdudg = BigInt("1377")
		const uintK1Hd1SA = BigInt("2000")
		const uintCOKXVWe = BigInt("1620")
		await Token50X100FWgTrZ.lock.call({from: accounts[4]});
		const uint256re6xZzk = await Token50X100FWgTrZ.allowance.call(address3YKi7w, addressRPJaGl2, {from: accounts[1]});
		await Token50X100FWgTrZ.onlyOwner.call({from: accounts[4]});
		await Token50X100FWgTrZ.setWhiteListReceivers.call(addressPodVto, booljn4PfR, {from: accounts[4]});
		const booloU9ngXS = await Token50X100FWgTrZ.safeLock.call(uintK1Hd1SA, uintTdgdudg, {from: accounts[2]});
		const boolUCVmAL = await Token50X100FWgTrZ.setMaxLockPeriod.call(uintCOKXVWe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100FWgTrZ.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vS12xow = await Token50X100.new({from: accounts[0]});
		const uintTcBMJoH = BigInt("1248")
		const addressrhNMNUz = accounts[0]
		const uintAhM4LD9 = BigInt("1543")
		const addressihfzKKp = accounts[0]
		const uintJf8j3uE = BigInt("335")
		const uintAwWgKfZ = BigInt("555")
		const addresszaSUZ8C = accounts[2]
		const boolGyYpziW = await Token50X100vS12xow.transfer.call(addressrhNMNUz, uintTcBMJoH, {from: accounts[4]});
		const boolP92N2R0 = await Token50X100vS12xow.decreaseApproval.call(addressihfzKKp, uintAhM4LD9, {from: accounts[3]});
		const boolkkos3ur = await Token50X100vS12xow.setMaxLockPeriod.call(uintJf8j3uE, {from: accounts[1]});
		const boolG5sQbN = await Token50X100vS12xow.increaseApproval.call(addresszaSUZ8C, uintAwWgKfZ, {from: accounts[4]});

		await expect(Token50X100vS12xow.transfer.call(addressrhNMNUz, uintTcBMJoH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HaSZxGt = await Token50X100.new({from: accounts[4]});
		const boolundeIAj = false
		const addressKgl5mLT = accounts[2]
		await Token50X100HaSZxGt.setWhiteListReceivers.call(addressKgl5mLT, boolundeIAj, {from: accounts[4]});

		await expect(Token50X100HaSZxGt.setWhiteListReceivers.call(addressKgl5mLT, boolundeIAj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dvd5C5T = await Token50X100.new({from: accounts[0]});
		const uintELxBxdn = BigInt("1648")
		const addresskcqwpua = accounts[0]
		const addressVamaNK8 = accounts[2]
		const addressEaLeVvc = accounts[4]
		const addressxQV5dSF = accounts[4]
		const addressbDg1dZ9 = accounts[4]
		const addressZRLelz = accounts[5]
		const uintUFexoSS = BigInt("623")
		const uintR4UuiiE = BigInt("561")
		const addressbG0d6Qy = accounts[1]
		const boolnlMsSB8 = await Token50X100dvd5C5T.transferFrom.call(addressVamaNK8, addresskcqwpua, uintELxBxdn, {from: accounts[4]});
		const uint256XHTRxW = await Token50X100dvd5C5T.balanceOf.call(addressEaLeVvc, {from: accounts[2]});
		const uint256U7qgvqy = await Token50X100dvd5C5T.balanceOf.call(addressxQV5dSF, {from: accounts[1]});
		const uint256d86AyPL = await Token50X100dvd5C5T.allowance.call(addressZRLelz, addressbDg1dZ9, {from: accounts[5]});
		const boolPOM702s = await Token50X100dvd5C5T.safeLock.call(uintR4UuiiE, uintUFexoSS, {from: accounts[3]});
		const addresstNi6YJr = await Token50X100dvd5C5T.setOriginalContract.call(addressbG0d6Qy, {from: accounts[5]});

		await expect(Token50X100dvd5C5T.transferFrom.call(addressVamaNK8, addresskcqwpua, uintELxBxdn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vS12xow = await Token50X100.new({from: accounts[0]});
		const uinthOZr9Hi = BigInt("1248")
		const addressUFD1Ks5 = accounts[0]
		const uintkiwO6oi = BigInt("1572")
		const addressNRHGf8M = accounts[0]
		const uintORGz0z = BigInt("555")
		const addressDnzNCMx = accounts[2]
		const uint256xNp7GD = await Token50X100vS12xow.totalSupply.call({from: accounts[4]});
		const boolGyYpziW = await Token50X100vS12xow.transfer.call(addressUFD1Ks5, uinthOZr9Hi, {from: accounts[4]});
		const boolP92N2R0 = await Token50X100vS12xow.decreaseApproval.call(addressNRHGf8M, uintkiwO6oi, {from: accounts[3]});
		const boolG5sQbN = await Token50X100vS12xow.increaseApproval.call(addressDnzNCMx, uintORGz0z, {from: accounts[4]});

		assert.equal(uint256xNp7GD, BigInt("4714285714285710"))
		await expect(Token50X100vS12xow.transfer.call(addressUFD1Ks5, uinthOZr9Hi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HaSZxGt = await Token50X100.new({from: accounts[4]});
		const uintGyvPrkP = BigInt("1692")
		const addressUZJKWvF = accounts[2]
		const uintM3QBOOL = BigInt("1571")
		const uintROpoKcC = BigInt("1401")
		const addressFhwclxJ = accounts[0]
		const addressy2GIy1t = accounts[0]
		const boolundeIAj = true
		const addresslfy0j5u = accounts[2]
		const boolMX4CDr4 = await Token50X100HaSZxGt.increaseApproval.call(addressUZJKWvF, uintGyvPrkP, {from: accounts[4]});
		const boolWuR8WW = await Token50X100HaSZxGt._transfer.call(addressy2GIy1t, addressFhwclxJ, uintROpoKcC, uintM3QBOOL, {from: accounts[4]});
		await Token50X100HaSZxGt.setWhiteListReceivers.call(addresslfy0j5u, boolundeIAj, {from: accounts[4]});

		assert.equal(boolMX4CDr4, true)
		await expect(Token50X100HaSZxGt._transfer.call(addressy2GIy1t, addressFhwclxJ, uintROpoKcC, uintM3QBOOL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vO6D2MP = await Token50X100.new({from: accounts[5]});
		const uintHnRlRxZ = BigInt("1620")
		const uintiNcQOcH = BigInt("126")
		const uintjzYrWl0 = BigInt("700")
		const addressmVSmQH = accounts[2]
		const boolOCCI5u8 = await Token50X100vO6D2MP.setMaxLockPeriod.call(uintHnRlRxZ, {from: accounts[3]});
		const boolRKjzygR = await Token50X100vO6D2MP.setMaxLockPeriod.call(uintiNcQOcH, {from: accounts[2]});
		const boolJ6LoMXV = await Token50X100vO6D2MP.approve.call(addressmVSmQH, uintjzYrWl0, {from: accounts[1]});
		await Token50X100vO6D2MP.lock.call({from: accounts[1]});

		assert.equal(boolJ6LoMXV, true)
		assert.equal(boolOCCI5u8, false)
		assert.equal(boolRKjzygR, false)
		await expect(Token50X100vO6D2MP.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dvd5C5T = await Token50X100.new({from: accounts[0]});
		const uinttnVA2Q7 = BigInt("1841")
		const uintls6PuQv = BigInt("496")
		const addressgHLXozu = accounts[3]
		const boolykE4Z2R = await Token50X100dvd5C5T.setMaxLockPeriod.call(uinttnVA2Q7, {from: "0x0000000000000000000000000000000000000001"});
		const boolM2QmON = await Token50X100dvd5C5T.decreaseApproval.call(addressgHLXozu, uintls6PuQv, {from: accounts[0]});

		assert.equal(boolM2QmON, true)
		assert.equal(boolykE4Z2R, false)
	});

	it('test for Token50X100', async () => {
		const Token50X100vO6D2MP = await Token50X100.new({from: accounts[5]});
		const uintwmGeYeR = BigInt("1990")
		const addressLYkQaIt = "0x0000000000000000000000000000000000000002"
		const uintTPtoNCB = BigInt("1852")
		const uinthgsMQU = BigInt("1721")
		const uintmWx6Awu = BigInt("1499")
		const addressp3fIQUg = accounts[3]
		const addressau0aA0u = accounts[3]
		const addressRRz5Vp5 = accounts[1]
		const uintD6oXPIN = BigInt("1997")
		const addressE8gDRZW = accounts[2]
		await Token50X100vO6D2MP.release.call({from: accounts[5]});
		const boolwazxTHZ = await Token50X100vO6D2MP.transfer.call(addressLYkQaIt, uintwmGeYeR, {from: accounts[0]});
		const boolLf5VNWd = await Token50X100vO6D2MP.safeLock.call(uinthgsMQU, uintTPtoNCB, {from: accounts[3]});
		const boolYqaM3aQ = await Token50X100vO6D2MP.issueTokens.call(addressau0aA0u, addressp3fIQUg, uintmWx6Awu, {from: accounts[5]});
		const addressIqW9dWE = await Token50X100vO6D2MP.setOriginalContract.call(addressRRz5Vp5, {from: accounts[1]});
		const boolOFI0jYh = await Token50X100vO6D2MP.transfer.call(addressE8gDRZW, uintD6oXPIN, {from: accounts[4]});

		await expect(Token50X100vO6D2MP.release.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HaSZxGt = await Token50X100.new({from: accounts[4]});
		const uintmXKApHM = BigInt("2036")
		const uintKu9VlWX = BigInt("1779")
		const addressnUy33ZW = "0x0000000000000000000000000000000000000001"
		const uintiuFh0Wr = BigInt("1400")
		const addressu1wJKlh = "0x0000000000000000000000000000000000000001"
		const addresseq6Ovpb = "0x0000000000000000000000000000000000000001"
		const addressX26vbiA = accounts[1]
		const boolBuiKRmP = await Token50X100HaSZxGt.setVesting.call(addressnUy33ZW, uintKu9VlWX, uintmXKApHM, {from: accounts[4]});
		const boolQVCIQv0 = await Token50X100HaSZxGt.transferFrom.call(addresseq6Ovpb, addressu1wJKlh, uintiuFh0Wr, {from: accounts[0]});
		const uint256P24FRHs = await Token50X100HaSZxGt.balanceOf.call(addressX26vbiA, {from: accounts[2]});

		assert.equal(boolBuiKRmP, true)
		await expect(Token50X100HaSZxGt.transferFrom.call(addresseq6Ovpb, addressu1wJKlh, uintiuFh0Wr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100QxXMTMD = await Token50X100.new({from: accounts[0]});
		const uint1Nz34i = BigInt("538")
		const addressGTR3TuR = accounts[4]
		const uinteDRtYDZ = BigInt("1085")
		const uintKIjJeuG = BigInt("606")
		const addressmqRiE8g = accounts[5]
		const addressbbOHgwS = accounts[1]
		const addresshTB8G5o = accounts[2]
		const boolVTN90Dn = await Token50X100QxXMTMD.decreaseApproval.call(addressGTR3TuR, uint1Nz34i, {from: accounts[5]});
		const boolFmxh0YE = await Token50X100QxXMTMD.setVesting.call(addressmqRiE8g, uintKIjJeuG, uinteDRtYDZ, {from: accounts[0]});
		await Token50X100QxXMTMD.setLinkingAddresses.call(addresshTB8G5o, addressbbOHgwS, {from: accounts[0]});
		await Token50X100QxXMTMD.release.call({from: accounts[3]});
		await Token50X100QxXMTMD.onlyOwner.call({from: accounts[0]});

		assert.equal(boolFmxh0YE, true)
		assert.equal(boolVTN90Dn, true)
		await expect(Token50X100QxXMTMD.setLinkingAddresses.call(addresshTB8G5o, addressbbOHgwS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vO6D2MP = await Token50X100.new({from: accounts[5]});
		const uintPQAiBe = BigInt("1990")
		const addresso7oY4k = "0x0000000000000000000000000000000000000000"
		const uintewbMnGp = BigInt("1996")
		const addressYQ2Ev6m = accounts[3]
		const boolwazxTHZ = await Token50X100vO6D2MP.transfer.call(addresso7oY4k, uintPQAiBe, {from: accounts[0]});
		const boolOFI0jYh = await Token50X100vO6D2MP.transfer.call(addressYQ2Ev6m, uintewbMnGp, {from: accounts[4]});

		await expect(Token50X100vO6D2MP.transfer.call(addresso7oY4k, uintPQAiBe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dvd5C5T = await Token50X100.new({from: accounts[0]});
		const uintmmVDYm = BigInt("224")
		const stringEZmnCtZ = "3HtIUVeTwbvoFnnyRASXH6tHxxbqW"
		const string0eTVID = "KTwH9aGizqiEBfXVyc83Z9GW7tfYVgEoFnEfROUfcCCcYfRnvP13rAUohbnm9h2lNQcZTaJhyN46w7r"
		const uintswV0wJr = BigInt("623")
		const uintWXhWvtr = BigInt("523")
		const uinttfJUvPm = BigInt("100")
		const stringdJTiDG0 = "wavxVaoxmx9G8cGfE6xIu7iAQt5y4cToDlfdm3bNM6BbE36qicgl4gglmEGoCXuFNNeefQwXF8VjLdm6MOTqkeqhaEMwu"
		const stringOZCvMtn = "Q5vQQO9v7CIfhkANL7vLSe5mwNziLUtdbCEwcayXn58oqhmrDh7UYrzzPadpRjpnigvKXldZu3Wr"
		const boolflKAiSA = await Token50X100dvd5C5T.setSymbolNameDecimals.call(string0eTVID, stringEZmnCtZ, uintmmVDYm, {from: accounts[0]});
		const boolPOM702s = await Token50X100dvd5C5T.safeLock.call(uintWXhWvtr, uintswV0wJr, {from: accounts[3]});
		await Token50X100dvd5C5T.setSymbolNameDecimals.call(stringOZCvMtn, stringdJTiDG0, uinttfJUvPm, {from: accounts[2]});

		await expect(Token50X100dvd5C5T.safeLock.call(uintWXhWvtr, uintswV0wJr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vO6D2MP = await Token50X100.new({from: accounts[5]});
		const uintw0mRIvP = BigInt("1982")
		const addressQGtEMYk = "0x00000000000000000000000000000000000000-1"
		const boolwazxTHZ = await Token50X100vO6D2MP.transfer.call(addressQGtEMYk, uintw0mRIvP, {from: accounts[0]});
		await Token50X100vO6D2MP.lock.call({from: "0x0000000000000000000000000000000000000001"});
		await Token50X100vO6D2MP.onlyOwner.call({from: accounts[0]});

		await expect(Token50X100vO6D2MP.transfer.call(addressQGtEMYk, uintw0mRIvP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JnogNI = await Token50X100.new({from: accounts[4]});
		const uintjTmAfO = BigInt("0")
		const addressLbhxiML = accounts[0]
		const boolnm15l8 = await Token50X100JnogNI.decreaseApproval.call(addressLbhxiML, uintjTmAfO, {from: accounts[1]});

		assert.equal(boolnm15l8, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100vO6D2MP = await Token50X100.new({from: accounts[5]});
		const booleTlTNNp = true
		const address3rptXX = accounts[1]
		const uintL3zjvFE = BigInt("844")
		const addressK4FLivn = accounts[5]
		const uintOLwnVP5 = BigInt("1990")
		const addressZ71Ow0 = "0x0000000000000000000000000000000000000000"
		await Token50X100vO6D2MP.setWhiteList.call(address3rptXX, booleTlTNNp, {from: accounts[5]});
		const boolMyEYHWF = await Token50X100vO6D2MP.decreaseApproval.call(addressK4FLivn, uintL3zjvFE, {from: accounts[2]});
		const boolwazxTHZ = await Token50X100vO6D2MP.transfer.call(addressZ71Ow0, uintOLwnVP5, {from: accounts[0]});

		await expect(Token50X100vO6D2MP.setWhiteList.call(address3rptXX, booleTlTNNp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})