const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisDN9m0DP = await Ledgis.new({from: accounts[2]});
		const uintQb2tL3t = BigInt("1371")
		const uintwWkimR = BigInt("1622")
		const addressEbIBMnh = accounts[3]
		await LedgisDN9m0DP.whenNotPaused.call({from: accounts[1]});
		const uint256QGPLa0M = await LedgisDN9m0DP.totalSupply.call({from: accounts[1]});
		const addresssDyixwf = await LedgisDN9m0DP.lock.call(addressEbIBMnh, uintwWkimR, uintQb2tL3t, {from: accounts[4]});
		const uint256WxqgZmq = await LedgisDN9m0DP.currentTime.call({from: accounts[0]});

		await expect(LedgisDN9m0DP.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const addressnH46BeE = accounts[4]
		const uintd0FVVPN = BigInt("1194")
		const addressdpG9aYZ = accounts[4]
		const addressbvKWKjv = accounts[4]
		const uintDuXKaXV = BigInt("787")
		const addressCravqUM = accounts[2]
		const addressKMnYgUO = await LedgiswlyaQ0i.unfreeze.call(addressnH46BeE, {from: accounts[0]});
		const boolUwYTsna = await LedgiswlyaQ0i.transferFrom.call(addressbvKWKjv, addressdpG9aYZ, uintd0FVVPN, {from: accounts[5]});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressCravqUM, uintDuXKaXV, {from: accounts[0]});

		await expect(LedgiswlyaQ0i.transferFrom.call(addressbvKWKjv, addressdpG9aYZ, uintd0FVVPN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyubYt9v = await Ledgis.new({from: accounts[0]});
		const uintDudYHc = BigInt("847")
		const uintX1KrehF = BigInt("1399")
		const addressvueX2OA = accounts[3]
		const uinti632MDa = BigInt("188")
		const boolvm3uOB1 = await LedgisyubYt9v.transferWithLockAfter.call(addressvueX2OA, uintX1KrehF, uintDudYHc, {from: accounts[1]});
		const uint256uMpixsn = await LedgisyubYt9v.afterTime.call(uinti632MDa, {from: accounts[3]});

		await expect(LedgisyubYt9v.transferWithLockAfter.call(addressvueX2OA, uintX1KrehF, uintDudYHc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismXCx6CS = await Ledgis.new({from: accounts[1]});
		const address0e1mKC = accounts[1]
		const addressqv6OK5P = accounts[4]
		const uint256DbSTMym = await LedgismXCx6CS.allowance.call(addressqv6OK5P, address0e1mKC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oKYsWpI = await LedgismXCx6CS.totalSupply.call({from: accounts[4]});

		assert.equal(uint256DbSTMym, BigInt("0"))
		assert.equal(uint256oKYsWpI, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisDdOoDH9 = await Ledgis.new({from: accounts[2]});
		const uintKyQ02KP = BigInt("1016")
		const addressHvLzqKl = accounts[0]
		const uintHMMtoLn = BigInt("1972")
		const uintK60V4x8 = BigInt("1534")
		const addressyuP1Yjw = "0x0000000000000000000000000000000000000001"
		const uintuUpeIr = BigInt("1630")
		const addressfb9tMV4 = accounts[1]
		const addressVqkU7hs = accounts[3]
		const boolNvolMgd = await LedgisDdOoDH9.mint.call(addressHvLzqKl, uintKyQ02KP, {from: accounts[2]});
		const boolcUrHasY = await LedgisDdOoDH9.transferWithLockAfter.call(addressyuP1Yjw, uintK60V4x8, uintHMMtoLn, {from: accounts[3]});
		const boolFAijNnZ = await LedgisDdOoDH9.decreaseAllowance.call(addressfb9tMV4, uintuUpeIr, {from: accounts[3]});
		const uint256cGD6y92 = await LedgisDdOoDH9.balanceOf.call(addressVqkU7hs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNvolMgd, true)
		await expect(LedgisDdOoDH9.transferWithLockAfter.call(addressyuP1Yjw, uintK60V4x8, uintHMMtoLn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyubYt9v = await Ledgis.new({from: accounts[0]});
		const uintOXMfjSM = BigInt("188")
		const uint256uMpixsn = await LedgisyubYt9v.afterTime.call(uintOXMfjSM, {from: accounts[3]});
		await LedgisyubYt9v.unpause.call({from: accounts[0]});

		assert.equal(uint256uMpixsn, BigInt("1630231955"))
		await expect(LedgisyubYt9v.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const addressEtygUJA = accounts[4]
		const uintlxTH1pT = BigInt("787")
		const addressh99arxW = accounts[3]
		const addressKMnYgUO = await LedgiswlyaQ0i.unfreeze.call(addressEtygUJA, {from: accounts[0]});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressh99arxW, uintlxTH1pT, {from: accounts[0]});

		assert.equal(boolZpOzcDh, true)
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const addressqkG1cN4 = accounts[5]
		const uintqyt2HEA = BigInt("787")
		const addressbrHSFOV = accounts[2]
		const addressrbeU5GP = "0x0000000000000000000000000000000000000001"
		const addressKMnYgUO = await LedgiswlyaQ0i.unfreeze.call(addressqkG1cN4, {from: accounts[0]});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressbrHSFOV, uintqyt2HEA, {from: accounts[0]});
		const boolrZZ3vMa = await LedgiswlyaQ0i.isFrozen.call(addressrbeU5GP, {from: accounts[1]});

		assert.equal(boolZpOzcDh, true)
		assert.equal(boolrZZ3vMa, false)
	});

	it('test for Ledgis', async () => {
		const LedgisjgqBng5 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnagU5vK = BigInt("1470")
		const uint4po8g0 = BigInt("1408")
		const addressJ8oKzcC = accounts[4]
		const uintFCmq7yb = BigInt("18")
		const addressWmtQvgQ = accounts[1]
		const boolXr9LMAg = await LedgisjgqBng5.transferWithLockAfter.call(addressJ8oKzcC, uint4po8g0, uintnagU5vK, {from: accounts[3]});
		await LedgisjgqBng5.onlyOwner.call({from: accounts[1]});
		const addresscxZSqaN = await LedgisjgqBng5.burn.call(addressWmtQvgQ, uintFCmq7yb, {from: accounts[1]});
		await LedgisjgqBng5.whenNotPaused.call({from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uintFADxI6M = BigInt("425")
		const addressgS6RnjU = accounts[0]
		const uintUtgtKuy = BigInt("787")
		const addresseVvNPzi = accounts[3]
		await LedgiswlyaQ0i.lockState.call(addressgS6RnjU, uintFADxI6M, {from: accounts[5]});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addresseVvNPzi, uintUtgtKuy, {from: accounts[0]});

		await expect(LedgiswlyaQ0i.lockState.call(addressgS6RnjU, uintFADxI6M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistvB8GFU = await Ledgis.new({from: accounts[1]});
		const addressa74fdPi = accounts[1]
		const uintCVQzOqT = BigInt("761")
		const uintUOD5M2j = BigInt("1481")
		const addressWFFw23e = accounts[4]
		const addressYnhASSL = accounts[0]
		const addressqHxIRly = accounts[5]
		const uint256nlcO4R8 = await LedgistvB8GFU.balanceOf.call(addressa74fdPi, {from: accounts[0]});
		await LedgistvB8GFU.whenPaused.call({from: accounts[5]});
		const uint256G85QhNs = await LedgistvB8GFU.currentTime.call({from: accounts[1]});
		const addressITXA0Fy = await LedgistvB8GFU.lock.call(addressWFFw23e, uintUOD5M2j, uintCVQzOqT, {from: "0x0000000000000000000000000000000000000001"});
		await LedgistvB8GFU.unpause.call({from: accounts[2]});
		const uint256E2H2bUU = await LedgistvB8GFU.allowance.call(addressqHxIRly, addressYnhASSL, {from: accounts[4]});

		assert.equal(uint256nlcO4R8, BigInt("10000000000000"))
		await expect(LedgistvB8GFU.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const addressj6co386 = accounts[1]
		const uintMeVxJ3e = BigInt("810")
		const addressK1i6JjT = accounts[4]
		const uint256hnMYGx8 = await LedgiswlyaQ0i.lockCount.call(addressj6co386, {from: "0x0000000000000000000000000000000000000001"});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressK1i6JjT, uintMeVxJ3e, {from: accounts[0]});

		assert.equal(boolZpOzcDh, true)
		assert.equal(uint256hnMYGx8, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uintG60iQPw = BigInt("793")
		const addressPcc2BPK = accounts[3]
		const uinto8o3bbQ = BigInt("1498")
		const addressPPgYhCp = accounts[4]
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressPcc2BPK, uintG60iQPw, {from: accounts[0]});
		const addressCPrF3cE = await LedgiswlyaQ0i.burn.call(addressPPgYhCp, uinto8o3bbQ, {from: accounts[0]});

		assert.equal(boolZpOzcDh, true)
		await expect(LedgiswlyaQ0i.burn.call(addressPPgYhCp, uinto8o3bbQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyubYt9v = await Ledgis.new({from: accounts[0]});
		const uintQ0rAq7Q = BigInt("1211")
		const addressyI6uYYM = accounts[3]
		const uintR5mMTQk = BigInt("847")
		const uintrjPQWuj = BigInt("1715")
		const addresszlRKiPC = accounts[3]
		const boolny4Jxw = await LedgisyubYt9v.increaseAllowance.call(addressyI6uYYM, uintQ0rAq7Q, {from: accounts[3]});
		const boolvm3uOB1 = await LedgisyubYt9v.transferWithLockAfter.call(addresszlRKiPC, uintrjPQWuj, uintR5mMTQk, {from: accounts[1]});

		assert.equal(boolny4Jxw, true)
		await expect(LedgisyubYt9v.transferWithLockAfter.call(addresszlRKiPC, uintrjPQWuj, uintR5mMTQk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYmDzrN = await Ledgis.new({from: accounts[5]});
		const uint256LhcRM5w = await LedgisYmDzrN.currentTime.call({from: accounts[4]});
		await LedgisYmDzrN.whenPaused.call({from: accounts[0]});
		await LedgisYmDzrN.pause.call({from: accounts[1]});

		assert.equal(uint256LhcRM5w, BigInt("1630231776"))
		await expect(LedgisYmDzrN.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uintGM5taNE = BigInt("810")
		const addressXRo5892 = accounts[3]
		await LedgiswlyaQ0i.renounceOwnership.call({from: accounts[0]});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressXRo5892, uintGM5taNE, {from: accounts[0]});

		await expect(LedgiswlyaQ0i.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyubYt9v = await Ledgis.new({from: accounts[0]});
		const uintbORm9Z = BigInt("1983")
		const addressPPxbC3v = accounts[2]
		const uintx14909I = BigInt("218")
		const uintPnuKSiD = BigInt("847")
		const uintU7ncrpl = BigInt("1698")
		const addressqWkDKPd = accounts[3]
		const boolcOWMFU7 = await LedgisyubYt9v.approve.call(addressPPxbC3v, uintbORm9Z, {from: accounts[0]});
		const uint256bI0Zy7 = await LedgisyubYt9v.afterTime.call(uintx14909I, {from: accounts[2]});
		const boolvm3uOB1 = await LedgisyubYt9v.transferWithLockAfter.call(addressqWkDKPd, uintU7ncrpl, uintPnuKSiD, {from: accounts[1]});

		assert.equal(boolcOWMFU7, true)
		assert.equal(uint256bI0Zy7, BigInt("1630231991"))
		await expect(LedgisyubYt9v.transferWithLockAfter.call(addressqWkDKPd, uintU7ncrpl, uintPnuKSiD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uintudqtmvo = BigInt("80")
		const addressszgLshX = accounts[3]
		await LedgiswlyaQ0i.pause.call({from: accounts[0]});
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressszgLshX, uintudqtmvo, {from: accounts[0]});

		await expect(LedgiswlyaQ0i.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uintkCbVyJ = BigInt("810")
		const addresseBnNRrZ = accounts[3]
		const uintv9R5LVX = BigInt("1171")
		const uintrTbV3Oq = BigInt("2011")
		const addressQlyJKZ = accounts[3]
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addresseBnNRrZ, uintkCbVyJ, {from: accounts[0]});
		await LedgiswlyaQ0i.renounceOwnership.call({from: accounts[0]});
		const addressc0qPmOu = await LedgiswlyaQ0i.lockAfter.call(addressQlyJKZ, uintrTbV3Oq, uintv9R5LVX, {from: accounts[0]});

		assert.equal(boolZpOzcDh, true)
		await expect(LedgiswlyaQ0i.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uinttNLIPjN = BigInt("836")
		const addressPBUz6jI = accounts[3]
		const uintej6ol9 = BigInt("645")
		const addressUjWEVt7 = accounts[3]
		const uinth1cqAGS = BigInt("575")
		const addressCESV8Uh = accounts[1]
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressPBUz6jI, uinttNLIPjN, {from: accounts[0]});
		const boolQjaSahY = await LedgiswlyaQ0i.approve.call(addressUjWEVt7, uintej6ol9, {from: accounts[4]});
		const boold7JG1B1 = await LedgiswlyaQ0i.decreaseAllowance.call(addressCESV8Uh, uinth1cqAGS, {from: accounts[1]});

		assert.equal(boolQjaSahY, true)
		assert.equal(boolZpOzcDh, true)
		await expect(LedgiswlyaQ0i.decreaseAllowance.call(addressCESV8Uh, uinth1cqAGS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyubYt9v = await Ledgis.new({from: accounts[0]});
		const uintHLjvAW = BigInt("1529")
		const addresslGBScCg = "0x0000000000000000000000000000000000000001"
		const uintBWqVmtv = BigInt("847")
		const uint8XxiHA = BigInt("1693")
		const addressfzi3ULK = accounts[3]
		const addressMAhVfMS = await LedgisyubYt9v.unlock.call(addresslGBScCg, uintHLjvAW, {from: accounts[0]});
		await LedgisyubYt9v.renounceOwnership.call({from: accounts[4]});
		const boolvm3uOB1 = await LedgisyubYt9v.transferWithLockAfter.call(addressfzi3ULK, uint8XxiHA, uintBWqVmtv, {from: accounts[1]});

		await expect(LedgisyubYt9v.unlock.call(addresslGBScCg, uintHLjvAW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const uintt9KGEO = BigInt("810")
		const addressi5dBNUw = accounts[3]
		const uintHV4wQzY = BigInt("413")
		const uintlp5jXJI = BigInt("359")
		const addressZBGs5E7 = accounts[0]
		const boolZpOzcDh = await LedgiswlyaQ0i.transfer.call(addressi5dBNUw, uintt9KGEO, {from: accounts[0]});
		const boolP8gTx44 = await LedgiswlyaQ0i.transferWithLockAfter.call(addressZBGs5E7, uintlp5jXJI, uintHV4wQzY, {from: accounts[0]});

		assert.equal(boolP8gTx44, true)
		assert.equal(boolZpOzcDh, true)
	});

	it('test for Ledgis', async () => {
		const LedgiszCchrkZ = await Ledgis.new({from: accounts[4]});
		const addressqyMEWbc = accounts[1]
		const uinttlY3mSS = BigInt("1332")
		const addressawnozF1 = accounts[5]
		const addressW3tvzNw = accounts[1]
		const addresshxInqMs = await LedgiszCchrkZ.transferOwnership.call(addressqyMEWbc, {from: accounts[4]});
		const boolNO1fb1l = await LedgiszCchrkZ.mint.call(addressawnozF1, uinttlY3mSS, {from: accounts[1]});
		await LedgiszCchrkZ.pause.call({from: accounts[5]});
		await LedgiszCchrkZ.pause.call({from: accounts[1]});
		const addressJM1QkB = await LedgiszCchrkZ.transferOwnership.call(addressW3tvzNw, {from: accounts[1]});
		const uint256WSSMNar = await LedgiszCchrkZ.totalSupply.call({from: accounts[0]});

		await expect(LedgiszCchrkZ.mint.call(addressawnozF1, uinttlY3mSS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEmoiOy8 = await Ledgis.new({from: accounts[4]});
		const addressKLK6ZTF = accounts[4]
		const addressacSgFx5 = accounts[1]
		const addressrEFVqi = await LedgisEmoiOy8.freeze.call(addressKLK6ZTF, {from: accounts[4]});
		const uint256xy5QC21 = await LedgisEmoiOy8.lockCount.call(addressacSgFx5, {from: accounts[0]});

		assert.equal(uint256xy5QC21, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisyubYt9v = await Ledgis.new({from: accounts[0]});
		const addressL5bvrfp = accounts[1]
		const uintsNPyyEn = BigInt("1472")
		const uintT3m1mMk = BigInt("1882")
		const addressSTO7V39 = accounts[1]
		const uintcewDYo1 = BigInt("847")
		const uintJhNBkL = BigInt("1698")
		const addressb1tQfwP = accounts[3]
		const uintPSXSCx8 = BigInt("1095")
		const addressUpRUOFk = "0x0000000000000000000000000000000000000001"
		const uint2561mpbMm = await LedgisyubYt9v.balanceOf.call(addressL5bvrfp, {from: accounts[4]});
		const boolVnHSPE = await LedgisyubYt9v.transferWithLock.call(addressSTO7V39, uintT3m1mMk, uintsNPyyEn, {from: accounts[0]});
		const boolvm3uOB1 = await LedgisyubYt9v.transferWithLockAfter.call(addressb1tQfwP, uintJhNBkL, uintcewDYo1, {from: accounts[1]});
		const boolCA05zRv = await LedgisyubYt9v.transfer.call(addressUpRUOFk, uintPSXSCx8, {from: accounts[2]});

		assert.equal(boolVnHSPE, true)
		assert.equal(uint2561mpbMm, BigInt("0"))
		await expect(LedgisyubYt9v.transferWithLockAfter.call(addressb1tQfwP, uintJhNBkL, uintcewDYo1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswlyaQ0i = await Ledgis.new({from: accounts[0]});
		const addressxgfrlYn = accounts[6]
		const uintz6nTxKm = BigInt("827")
		const uintJEjsJPA = BigInt("469")
		const addressf43aB8a = accounts[0]
		const uint256rc9hJtA = await LedgiswlyaQ0i.balanceOf.call(addressxgfrlYn, {from: accounts[2]});
		const addressZIBVb52 = await LedgiswlyaQ0i.lock.call(addressf43aB8a, uintJEjsJPA, uintz6nTxKm, {from: accounts[0]});

		assert.equal(uint256rc9hJtA, BigInt("0"))
	});
})