const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPjsKD3bk = await LUP.new({from: accounts[1]});
		const uintI7A2LlH = BigInt("521")
		const addressELeBAiL = accounts[3]
		const uintqq42QJ4 = BigInt("758")
		const uintk6fnZJi = BigInt("1266")
		const addressC9Ukb7u = accounts[5]
		const uintXNLyW0p = BigInt("888")
		const addressPV0aqHQ = accounts[5]
		const uintkrQcirh = BigInt("733")
		const uintTpvdGkN = BigInt("605")
		const addressw4FtEo7 = accounts[3]
		const boolCcwAUG2 = await LUPjsKD3bk.unlock.call(addressELeBAiL, uintI7A2LlH, {from: accounts[2]});
		const boolN7AzfET = await LUPjsKD3bk.transferWithLock.call(addressC9Ukb7u, uintk6fnZJi, uintqq42QJ4, {from: accounts[0]});
		const boolBA6K5o = await LUPjsKD3bk.unlock.call(addressPV0aqHQ, uintXNLyW0p, {from: accounts[4]});
		const bool3g42t1 = await LUPjsKD3bk.lock.call(addressw4FtEo7, uintTpvdGkN, uintkrQcirh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPjsKD3bk.unlock.call(addressELeBAiL, uintI7A2LlH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringF3ypZdY = "qapQUSd3CA69gkPBTV4PguxOqDpYygxC3CClm7FJqNsg6egZXjEvStlvOfYI2AlHpN3PL81bLeB8uwu35bNG"
		const stringPdMGiN6 = "x7qQrMwhSc7RwEAUgTn9EZIa6gmjPOL4IgD5FnApBcYLXofmJ"
		const uintUFK0tZg = BigInt("8")
		const LUPZbuZ4Qt = await LUP.new(stringF3ypZdY, stringPdMGiN6, uintUFK0tZg, {from: accounts[4]});
		const uintGhZwEM = BigInt("1108")
		const addressGjscFoU = accounts[3]
		const addressMsMB2Ts = accounts[1]
		const uintukNgDwr = BigInt("818")
		const uintvv3CKVH = BigInt("1447")
		const addressdbCEeox = accounts[3]
		const uinttMdvEqv = BigInt("1359")
		const uintJ2iVX2I = BigInt("503")
		const addresstCghUO8 = accounts[4]
		const booljcBQwU = await LUPZbuZ4Qt.unlock.call(addressGjscFoU, uintGhZwEM, {from: accounts[5]});
		const addressBjFdJCG = await LUPZbuZ4Qt.upgradeTo.call(addressMsMB2Ts, {from: accounts[4]});
		const boolLzv2Nnp = await LUPZbuZ4Qt.transferWithLock.call(addressdbCEeox, uintvv3CKVH, uintukNgDwr, {from: accounts[1]});
		const uint8oA91Qnc = await LUPZbuZ4Qt.decimals.call({from: accounts[0]});
		const uint8PcCmUFi = await LUPZbuZ4Qt.decimals.call({from: accounts[4]});
		const boolZbpdL1p = await LUPZbuZ4Qt.lock.call(addresstCghUO8, uintJ2iVX2I, uinttMdvEqv, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPJPpMzmd = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrrzzERR = accounts[5]
		const uintXGmBsP = BigInt("1373")
		const addressHLE6CK = accounts[3]
		const uint256EChOahX = await LUPJPpMzmd.balanceOf.call(addressrrzzERR, {from: accounts[1]});
		const boolUJiJtIU = await LUPJPpMzmd.unlock.call(addressHLE6CK, uintXGmBsP, {from: accounts[0]});
		const uint8X2JAUQJ = await LUPJPpMzmd.decimals.call({from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPaFl88U = await LUP.new({from: accounts[4]});
		const uintO0E5ExE = BigInt("879")
		const uintsnD2jiS = BigInt("1712")
		const addressMoSvc49 = accounts[4]
		const uintllC9ykX = BigInt("1958")
		const addresspzjq8t6 = accounts[2]
		const uintdhp0Ld = BigInt("1767")
		const uintDifBxuN = BigInt("1428")
		const addressTiMynQw = accounts[0]
		const addressVoGPpz9 = accounts[4]
		const boolADMYRrm = await LUPaFl88U.transferWithLock.call(addressMoSvc49, uintsnD2jiS, uintO0E5ExE, {from: accounts[4]});
		const boolY03k84k = await LUPaFl88U.transfer.call(addresspzjq8t6, uintllC9ykX, {from: accounts[0]});
		const boolOS7e6hR = await LUPaFl88U.lock.call(addressTiMynQw, uintDifBxuN, uintdhp0Ld, {from: accounts[1]});
		const uint8OVd6NbG = await LUPaFl88U.decimals.call({from: accounts[0]});
		const uint256QmZdqfI = await LUPaFl88U.balanceOf.call(addressVoGPpz9, {from: accounts[1]});

		assert.equal(boolADMYRrm, true)
		await expect(LUPaFl88U.transfer.call(addresspzjq8t6, uintllC9ykX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgQ3dxY0 = await LUP.new({from: accounts[1]});
		const addressL1neXed = accounts[4]
		const boolWWLlQN = false
		const addresswQCH5KI = accounts[2]
		const addressou8Iekp = await LUPgQ3dxY0.notFrozen.call(addressL1neXed, {from: accounts[4]});
		const boolcWrpD4k = await LUPgQ3dxY0.freezeAccount.call(addresswQCH5KI, boolWWLlQN, {from: "0x0000000000000000000000000000000000000001"});
		const uint8COYoSif = await LUPgQ3dxY0.decimals.call({from: accounts[0]});
		const stringkYLWTcn = await LUPgQ3dxY0.name.call({from: accounts[5]});
		const stringVmkrho5 = await LUPgQ3dxY0.symbol.call({from: accounts[3]});

		await expect(LUPgQ3dxY0.notFrozen.call(addressL1neXed, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjURU149 = await LUP.new({from: accounts[2]});
		const uintANh8S93 = BigInt("165")
		const uint4SkYOe = BigInt("1783")
		const addressEy4AI0r = accounts[2]
		const uint8qGN2ejq = await LUPjURU149.decimals.call({from: accounts[2]});
		const stringUs7yfcO = await LUPjURU149.symbol.call({from: accounts[3]});
		const booltDBzAPU = await LUPjURU149.transferWithLock.call(addressEy4AI0r, uint4SkYOe, uintANh8S93, {from: accounts[5]});

		assert.equal(stringUs7yfcO, "LUP")
		assert.equal(uint8qGN2ejq, BigInt("18"))
		await expect(LUPjURU149.transferWithLock.call(addressEy4AI0r, uint4SkYOe, uintANh8S93, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhq9v9QC = await LUP.new({from: accounts[4]});
		const uintSJV4IHa = BigInt("350")
		const addressMNj0ThY = "0x0000000000000000000000000000000000000001"
		const address7m2Ecs = accounts[2]
		const uints68xdr8 = BigInt("643")
		const uintsRms1mT = BigInt("1271")
		const addressLaIDOHD = accounts[3]
		const booliX8OnZ = await LUPhq9v9QC.transfer.call(addressMNj0ThY, uintSJV4IHa, {from: accounts[4]});
		const stringFD4O70s = await LUPhq9v9QC.name.call({from: accounts[5]});
		const addressnJRBLLH = await LUPhq9v9QC.notFrozen.call(address7m2Ecs, {from: accounts[2]});
		const stringJmZtS4Q = await LUPhq9v9QC.name.call({from: accounts[3]});
		const boolRRaT9xp = await LUPhq9v9QC.transferWithLock.call(addressLaIDOHD, uintsRms1mT, uints68xdr8, {from: accounts[3]});

		assert.equal(booliX8OnZ, true)
		assert.equal(stringFD4O70s, "LINKUP Token")
		await expect(LUPhq9v9QC.notFrozen.call(address7m2Ecs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjURU149 = await LUP.new({from: accounts[2]});
		const addressxSzs4b = accounts[3]
		const uintYUaOH3Q = BigInt("1012")
		const uintfZ9nVBp = BigInt("913")
		const addressHo1ngeF = accounts[2]
		const uintIeQzFK6 = BigInt("165")
		const uintpkysfX = BigInt("1783")
		const addresspuQQ6V1 = accounts[2]
		const uint256STR0UT5 = await LUPjURU149.balanceOf.call(addressxSzs4b, {from: accounts[2]});
		const boolLqcgqxu = await LUPjURU149.lock.call(addressHo1ngeF, uintfZ9nVBp, uintYUaOH3Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint8qGN2ejq = await LUPjURU149.decimals.call({from: accounts[2]});
		const booltDBzAPU = await LUPjURU149.transferWithLock.call(addresspuQQ6V1, uintpkysfX, uintIeQzFK6, {from: accounts[5]});

		assert.equal(uint256STR0UT5, BigInt("0"))
		await expect(LUPjURU149.lock.call(addressHo1ngeF, uintfZ9nVBp, uintYUaOH3Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjURU149 = await LUP.new({from: accounts[2]});
		const addressid0gRxh = accounts[3]
		const bool0G00nR = true
		const addressXBxFOtr = accounts[3]
		const uinttXbTqkz = BigInt("1712")
		const addresstmJYwm0 = accounts[0]
		const uintySVmoRu = BigInt("1012")
		const uinteKlIn4E = BigInt("913")
		const address2OSk2E = accounts[2]
		const addressgxCC6o = accounts[1]
		const boolFB1x9hw = false
		const addressxJ0Qko = accounts[1]
		const uintN8xoFN5 = BigInt("1605")
		const addresskk6cOxL = accounts[5]
		const uint256STR0UT5 = await LUPjURU149.balanceOf.call(addressid0gRxh, {from: accounts[2]});
		const boolnbXk322 = await LUPjURU149.freezeAccount.call(addressXBxFOtr, bool0G00nR, {from: accounts[2]});
		const boolbmYml3s = await LUPjURU149.transfer.call(addresstmJYwm0, uinttXbTqkz, {from: accounts[3]});
		const boolLqcgqxu = await LUPjURU149.lock.call(address2OSk2E, uinteKlIn4E, uintySVmoRu, {from: "0x0000000000000000000000000000000000000001"});
		const uint8qGN2ejq = await LUPjURU149.decimals.call({from: accounts[2]});
		const addressdU4Hkxk = await LUPjURU149.upgradeTo.call(addressgxCC6o, {from: accounts[2]});
		const boolrhmNbRm = await LUPjURU149.freezeAccount.call(addressxJ0Qko, boolFB1x9hw, {from: accounts[1]});
		const boolfOkVrmj = await LUPjURU149.transfer.call(addresskk6cOxL, uintN8xoFN5, {from: accounts[2]});

		assert.equal(boolnbXk322, true)
		assert.equal(uint256STR0UT5, BigInt("0"))
		await expect(LUPjURU149.transfer.call(addresstmJYwm0, uinttXbTqkz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaFl88U = await LUP.new({from: accounts[4]});
		const uintn0OfEHS = BigInt("879")
		const uintKhBLGFH = BigInt("1712")
		const addressneGYdnW = accounts[4]
		const addressBHmNJfA = accounts[3]
		const uintb4ARs9 = BigInt("1958")
		const addressppOlEl9 = accounts[2]
		const addressWFZuWb9 = accounts[3]
		const uintmF5641 = BigInt("214")
		const addressaF1mSk = accounts[0]
		const addresstlNA7HW = accounts[4]
		const boolADMYRrm = await LUPaFl88U.transferWithLock.call(addressneGYdnW, uintKhBLGFH, uintn0OfEHS, {from: accounts[4]});
		const addressvK8U7IS = await LUPaFl88U.upgradeTo.call(addressBHmNJfA, {from: accounts[1]});
		const boolY03k84k = await LUPaFl88U.transfer.call(addressppOlEl9, uintb4ARs9, {from: accounts[0]});
		const addressJVPWmFQ = await LUPaFl88U.notFrozen.call(addressWFZuWb9, {from: accounts[0]});
		const boolokAtNcX = await LUPaFl88U.unlock.call(addressaF1mSk, uintmF5641, {from: accounts[0]});
		const uint256QmZdqfI = await LUPaFl88U.balanceOf.call(addresstlNA7HW, {from: accounts[1]});

		assert.equal(boolADMYRrm, true)
		await expect(LUPaFl88U.upgradeTo.call(addressBHmNJfA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaFl88U = await LUP.new({from: accounts[4]});
		const uint0MCYv5 = BigInt("879")
		const uintHb2ybDi = BigInt("1712")
		const address188fSX = accounts[4]
		const uintKY75HRe = BigInt("1063")
		const uintbMpF5od = BigInt("213")
		const addressPmLtJr6 = accounts[2]
		const addressYS64ku = accounts[0]
		const uintx94HTJV = BigInt("1958")
		const addressVe5qZzM = accounts[3]
		const uintZT9W7KC = BigInt("1767")
		const uintEZ9GM1X = BigInt("1428")
		const addressnDp7VVc = accounts[0]
		const addressuoIhoqN = accounts[4]
		const stringERgYdLx = await LUPaFl88U.name.call({from: accounts[3]});
		const boolADMYRrm = await LUPaFl88U.transferWithLock.call(address188fSX, uintHb2ybDi, uint0MCYv5, {from: accounts[4]});
		const boolODczyK5 = await LUPaFl88U.lock.call(addressPmLtJr6, uintbMpF5od, uintKY75HRe, {from: accounts[4]});
		const uint256j8KeG2E = await LUPaFl88U.balanceOf.call(addressYS64ku, {from: accounts[1]});
		const boolY03k84k = await LUPaFl88U.transfer.call(addressVe5qZzM, uintx94HTJV, {from: accounts[0]});
		const boolOS7e6hR = await LUPaFl88U.lock.call(addressnDp7VVc, uintEZ9GM1X, uintZT9W7KC, {from: accounts[1]});
		const uint8OVd6NbG = await LUPaFl88U.decimals.call({from: accounts[0]});
		const uint256QmZdqfI = await LUPaFl88U.balanceOf.call(addressuoIhoqN, {from: accounts[1]});

		assert.equal(boolADMYRrm, true)
		assert.equal(stringERgYdLx, "LINKUP Token")
		await expect(LUPaFl88U.lock.call(addressPmLtJr6, uintbMpF5od, uintKY75HRe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjURU149 = await LUP.new({from: accounts[2]});
		const addresseBX8qT7 = accounts[3]
		const addressa6WL5aP = accounts[1]
		const uintnAaFPX6 = BigInt("165")
		const uintKfSBOi = BigInt("1783")
		const addressxZfjPBN = accounts[2]
		const uint256STR0UT5 = await LUPjURU149.balanceOf.call(addresseBX8qT7, {from: accounts[2]});
		const uint8qGN2ejq = await LUPjURU149.decimals.call({from: accounts[2]});
		const addressdU4Hkxk = await LUPjURU149.upgradeTo.call(addressa6WL5aP, {from: accounts[2]});
		const booltDBzAPU = await LUPjURU149.transferWithLock.call(addressxZfjPBN, uintKfSBOi, uintnAaFPX6, {from: accounts[5]});

		assert.equal(uint256STR0UT5, BigInt("0"))
		assert.equal(uint8qGN2ejq, BigInt("18"))
		await expect(LUPjURU149.transferWithLock.call(addressxZfjPBN, uintKfSBOi, uintnAaFPX6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaFl88U = await LUP.new({from: accounts[4]});
		const uintUjBzA8 = BigInt("1602")
		const addressPvzVnAo = accounts[5]
		const uintf4AllZy = BigInt("1947")
		const addresskTMiF9g = accounts[3]
		const boolIg48CIN = await LUPaFl88U.unlock.call(addressPvzVnAo, uintUjBzA8, {from: accounts[4]});
		const boolY03k84k = await LUPaFl88U.transfer.call(addresskTMiF9g, uintf4AllZy, {from: accounts[0]});

		await expect(LUPaFl88U.unlock.call(addressPvzVnAo, uintUjBzA8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjURU149 = await LUP.new({from: accounts[2]});
		const addresskh2VDqE = accounts[6]
		const uintL6Wha3 = BigInt("1000")
		const uintDFuFVXw = BigInt("43")
		const addressq5OUwm8 = accounts[2]
		const addressZtUEpgF = accounts[0]
		const uint256STR0UT5 = await LUPjURU149.balanceOf.call(addresskh2VDqE, {from: accounts[2]});
		const boolMMoFisq = await LUPjURU149.lock.call(addressq5OUwm8, uintDFuFVXw, uintL6Wha3, {from: accounts[2]});
		const uint256RpHq9fA = await LUPjURU149.balanceOf.call(addressZtUEpgF, {from: accounts[3]});

		assert.equal(boolMMoFisq, true)
		assert.equal(uint256RpHq9fA, BigInt("0"))
		assert.equal(uint256STR0UT5, BigInt("0"))
	});
})