const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisHkEaLpv = await Ledgis.new({from: accounts[1]});
		const uintkyrWkQg = BigInt("925")
		const addressv0MgfTG = "0x0000000000000000000000000000000000000001"
		const addressIDFo2fP = accounts[4]
		const addressDdXzyi = accounts[1]
		const booloZ74LI = await LedgisHkEaLpv.transfer.call(addressv0MgfTG, uintkyrWkQg, {from: accounts[4]});
		await LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]});
		const uint2567JCxx0 = await LedgisHkEaLpv.allowance.call(addressDdXzyi, addressIDFo2fP, {from: accounts[0]});

		await expect(LedgisHkEaLpv.transfer.call(addressv0MgfTG, uintkyrWkQg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisVPrzOAu = await Ledgis.new({from: accounts[2]});
		const addressG9GBgl4 = accounts[0]
		const addressFDwDfIj = accounts[3]
		const boolY8ch0l = await LedgisVPrzOAu.isFrozen.call(addressG9GBgl4, {from: accounts[4]});
		const addressTo51Qvq = await LedgisVPrzOAu.unfreeze.call(addressFDwDfIj, {from: accounts[4]});
		await LedgisVPrzOAu.whenNotFrozen.call({from: accounts[3]});

		assert.equal(boolY8ch0l, false)
		await expect(LedgisVPrzOAu.unfreeze.call(addressFDwDfIj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDCaxeRL = await Ledgis.new({from: accounts[3]});
		const addressQv7wxWf = accounts[0]
		const uintqhWkQlp = BigInt("2021")
		const addressxDSMfwE = accounts[4]
		const addressIbX9Yy3 = accounts[3]
		const uint256DcjDM2C = await LedgisDCaxeRL.balanceOf.call(addressQv7wxWf, {from: accounts[0]});
		await LedgisDCaxeRL.whenNotPaused.call({from: accounts[3]});
		const boolJvVrsAq = await LedgisDCaxeRL.transferFrom.call(addressIbX9Yy3, addressxDSMfwE, uintqhWkQlp, {from: accounts[4]});
		await LedgisDCaxeRL.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256DcjDM2C, BigInt("0"))
		await expect(LedgisDCaxeRL.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPMwzzar = await Ledgis.new({from: accounts[4]});
		const uintPrvqvUB = BigInt("587")
		const addressKRPBjFM = accounts[1]
		const addressFCRrEc = accounts[4]
		await LedgisPMwzzar.lockState.call(addressKRPBjFM, uintPrvqvUB, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisPMwzzar.renounceOwnership.call({from: accounts[2]});
		const boolFGfNRET = await LedgisPMwzzar.isFrozen.call(addressFCRrEc, {from: accounts[1]});

		await expect(LedgisPMwzzar.lockState.call(addressKRPBjFM, uintPrvqvUB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRZb7XWj = await Ledgis.new({from: accounts[2]});
		const uintlqnQ3b3 = BigInt("516")
		const addresshgIqpIo = accounts[4]
		const uintpSGppH = BigInt("427")
		const addressyEmN3R = accounts[1]
		const addressrfA9ZvM = accounts[0]
		const uintdvkE58k = BigInt("932")
		const addressO7IqEnn = accounts[2]
		const addressVfU3Pty = accounts[0]
		const boolmIwD2U = await LedgisRZb7XWj.approve.call(addresshgIqpIo, uintlqnQ3b3, {from: accounts[3]});
		const booldZ5RuKt = await LedgisRZb7XWj.transferFrom.call(addressrfA9ZvM, addressyEmN3R, uintpSGppH, {from: accounts[0]});
		const boolfQ23N8q = await LedgisRZb7XWj.transferFrom.call(addressVfU3Pty, addressO7IqEnn, uintdvkE58k, {from: accounts[5]});
		await LedgisRZb7XWj.pause.call({from: accounts[4]});

		assert.equal(boolmIwD2U, true)
		await expect(LedgisRZb7XWj.transferFrom.call(addressrfA9ZvM, addressyEmN3R, uintpSGppH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisrw4FVbI = await Ledgis.new({from: accounts[1]});
		const addressz0w8fVP = accounts[1]
		const addressDJ6Ic7t = accounts[3]
		const addressKUUWzWg = accounts[2]
		const uintdAFcRD = BigInt("480")
		const addresshxtLAHl = accounts[4]
		const addresshXfGyKI = accounts[1]
		const addressjsGnIJq = await Ledgisrw4FVbI.transferOwnership.call(addressz0w8fVP, {from: accounts[1]});
		const uint256TbX5joY = await Ledgisrw4FVbI.allowance.call(addressKUUWzWg, addressDJ6Ic7t, {from: accounts[5]});
		const boolnf3nLVp = await Ledgisrw4FVbI.transferFrom.call(addresshXfGyKI, addresshxtLAHl, uintdAFcRD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256TbX5joY, BigInt("0"))
		await expect(Ledgisrw4FVbI.transferFrom.call(addresshXfGyKI, addresshxtLAHl, uintdAFcRD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDCaxeRL = await Ledgis.new({from: accounts[3]});
		const addressiesPKDC = accounts[0]
		const uinttwDp3nh = BigInt("1160")
		const addressN2wh8ao = accounts[2]
		const uintU4qDVbM = BigInt("268")
		const addresszGTl6mO = "0x0000000000000000000000000000000000000001"
		const uintn38VuRA = BigInt("2021")
		const addressiu7LAOj = accounts[4]
		const addressW9XjCKe = accounts[3]
		const addressO0yL1JH = accounts[2]
		const uint256DcjDM2C = await LedgisDCaxeRL.balanceOf.call(addressiesPKDC, {from: accounts[0]});
		const boolYVMW2h = await LedgisDCaxeRL.decreaseAllowance.call(addressN2wh8ao, uinttwDp3nh, {from: accounts[2]});
		const boolVudm9K5 = await LedgisDCaxeRL.transfer.call(addresszGTl6mO, uintU4qDVbM, {from: accounts[1]});
		const boolJvVrsAq = await LedgisDCaxeRL.transferFrom.call(addressW9XjCKe, addressiu7LAOj, uintn38VuRA, {from: accounts[4]});
		const uint256GZefkf = await LedgisDCaxeRL.balanceOf.call(addressO0yL1JH, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisDCaxeRL.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256DcjDM2C, BigInt("0"))
		await expect(LedgisDCaxeRL.decreaseAllowance.call(addressN2wh8ao, uinttwDp3nh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGu58VU7 = await Ledgis.new({from: accounts[5]});
		const uintnQ8miRt = BigInt("500")
		const uintu2yU9m2 = BigInt("1019")
		const addresst93hUX9 = accounts[3]
		const uintVOLWtl5 = BigInt("528")
		const addressO1jlpou = accounts[4]
		const addressfzV3SL3 = accounts[3]
		const uintixsV3Zd = BigInt("473")
		const addressbDZHTli = accounts[4]
		const uint256ToulC2Y = await LedgisGu58VU7.currentTime.call({from: accounts[0]});
		const boolcdb3vLo = await LedgisGu58VU7.transferWithLockAfter.call(addresst93hUX9, uintu2yU9m2, uintnQ8miRt, {from: accounts[0]});
		const boolFKYGxxd = await LedgisGu58VU7.transferFrom.call(addressfzV3SL3, addressO1jlpou, uintVOLWtl5, {from: accounts[1]});
		await LedgisGu58VU7.lockState.call(addressbDZHTli, uintixsV3Zd, {from: accounts[0]});

		assert.equal(uint256ToulC2Y, BigInt("1630231546"))
		await expect(LedgisGu58VU7.transferWithLockAfter.call(addresst93hUX9, uintu2yU9m2, uintnQ8miRt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDCaxeRL = await Ledgis.new({from: accounts[3]});
		const address8CbAG8 = accounts[0]
		const addressAPmyetp = accounts[1]
		const uint256DcjDM2C = await LedgisDCaxeRL.balanceOf.call(address8CbAG8, {from: accounts[0]});
		const uint256TJq8kax = await LedgisDCaxeRL.lockCount.call(addressAPmyetp, {from: accounts[2]});
		await LedgisDCaxeRL.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256DcjDM2C, BigInt("0"))
		assert.equal(uint256TJq8kax, BigInt("0"))
		await expect(LedgisDCaxeRL.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisF4gg4j = await Ledgis.new({from: accounts[1]});
		const addressBGBOZBn = accounts[1]
		const uintdPlMmRk = BigInt("149")
		const uintqUnEybc = BigInt("1504")
		const addressAJmVgR = accounts[2]
		const uintmtTT4hG = BigInt("71")
		const addressGk7X454 = accounts[4]
		const uintUpBqykz = BigInt("45")
		const addressmNnecm = accounts[1]
		const uintZLJZElU = BigInt("1396")
		const addressrr3dHAc = accounts[3]
		const uint2560WTfVE = await LedgisF4gg4j.balanceOf.call(addressBGBOZBn, {from: accounts[0]});
		const addresskwU6aEE = await LedgisF4gg4j.lockAfter.call(addressAJmVgR, uintqUnEybc, uintdPlMmRk, {from: accounts[1]});
		const addressmEm3xtm = await LedgisF4gg4j.burn.call(addressGk7X454, uintmtTT4hG, {from: accounts[5]});
		const boolKaIFSC = await LedgisF4gg4j.transfer.call(addressmNnecm, uintUpBqykz, {from: accounts[4]});
		const booldepdojy = await LedgisF4gg4j.approve.call(addressrr3dHAc, uintZLJZElU, {from: accounts[5]});

		assert.equal(uint2560WTfVE, BigInt("10000000000000"))
		await expect(LedgisF4gg4j.lockAfter.call(addressAJmVgR, uintqUnEybc, uintdPlMmRk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHkEaLpv = await Ledgis.new({from: accounts[1]});
		const uintnZwHehU = BigInt("402")
		const addressZMOo6wR = accounts[1]
		const addressX2YLOHm = accounts[2]
		const boolp3Mv2rc = await LedgisHkEaLpv.increaseAllowance.call(addressZMOo6wR, uintnZwHehU, {from: accounts[1]});
		const uint256oQ5SYH8 = await LedgisHkEaLpv.lockCount.call(addressX2YLOHm, {from: accounts[4]});
		await LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]});

		assert.equal(boolp3Mv2rc, true)
		assert.equal(uint256oQ5SYH8, BigInt("0"))
		await expect(LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHkEaLpv = await Ledgis.new({from: accounts[1]});
		const addressNE92q1p = accounts[3]
		const uintfyMBGQ0 = BigInt("914")
		const addressr0IF6g = "0x0000000000000000000000000000000000000001"
		const uint9ShDNp = BigInt("1010")
		const uintaTWjEbj = BigInt("262")
		const addresseInN5tn = accounts[4]
		const addressNcx5Or = await LedgisHkEaLpv.freeze.call(addressNE92q1p, {from: accounts[1]});
		const booloZ74LI = await LedgisHkEaLpv.transfer.call(addressr0IF6g, uintfyMBGQ0, {from: accounts[4]});
		const boolkqEBVBc = await LedgisHkEaLpv.transferWithLock.call(addresseInN5tn, uintaTWjEbj, uint9ShDNp, {from: accounts[3]});

		await expect(LedgisHkEaLpv.transfer.call(addressr0IF6g, uintfyMBGQ0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisIwBDoy8 = await Ledgis.new({from: accounts[3]});
		const uintidDWTB = BigInt("430")
		const addresshRC203c = accounts[1]
		await LedgisIwBDoy8.unpause.call({from: accounts[3]});
		const booldbQuW0W = await LedgisIwBDoy8.transfer.call(addresshRC203c, uintidDWTB, {from: accounts[4]});

		await expect(LedgisIwBDoy8.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHkEaLpv = await Ledgis.new({from: accounts[1]});
		const uintcgadoC = BigInt("1498")
		const addresshLTRhRc = accounts[5]
		const addresssPkpyV9 = accounts[2]
		const uintCzmTfjf = BigInt("909")
		const addressY5mghSj = "0x0000000000000000000000000000000000000001"
		const uint256ShlfCnJ = await LedgisHkEaLpv.afterTime.call(uintcgadoC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hz72kun = await LedgisHkEaLpv.allowance.call(addresssPkpyV9, addresshLTRhRc, {from: accounts[2]});
		const booloZ74LI = await LedgisHkEaLpv.transfer.call(addressY5mghSj, uintCzmTfjf, {from: accounts[4]});

		assert.equal(uint256ShlfCnJ, BigInt("1630233060"))
		assert.equal(uint256hz72kun, BigInt("0"))
		await expect(LedgisHkEaLpv.transfer.call(addressY5mghSj, uintCzmTfjf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgislIGddPL = await Ledgis.new({from: accounts[1]});
		const uintCOVTcW9 = BigInt("747")
		const addressuNEjNRJ = accounts[3]
		const uintwqLNfCB = BigInt("198")
		const addressZdxBSld = accounts[0]
		const uints67G6HX = BigInt("1078")
		const addressayrl3Hq = accounts[3]
		const addressDBa5YP2 = await LedgislIGddPL.burn.call(addressuNEjNRJ, uintCOVTcW9, {from: accounts[1]});
		const boollJfBT15 = await LedgislIGddPL.approve.call(addressZdxBSld, uintwqLNfCB, {from: accounts[3]});
		const boolqQyBZJ0 = await LedgislIGddPL.transfer.call(addressayrl3Hq, uints67G6HX, {from: accounts[1]});
		await LedgislIGddPL.unpause.call({from: accounts[3]});

		await expect(LedgislIGddPL.burn.call(addressuNEjNRJ, uintCOVTcW9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWVFkgHt = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKaiP3NX = BigInt("95")
		const addresssMVHZrF = accounts[1]
		const uintUlk5u6T = BigInt("1161")
		const addressaQdpNvV = accounts[1]
		const uintfadga0d = BigInt("720")
		const uintQlvhKev = BigInt("868")
		const addressMDmvdL = accounts[4]
		const addressjPD9gqt = accounts[0]
		const addressJUwGN82 = await LedgisWVFkgHt.burn.call(addresssMVHZrF, uintKaiP3NX, {from: accounts[1]});
		const boolHQpX1hX = await LedgisWVFkgHt.transfer.call(addressaQdpNvV, uintUlk5u6T, {from: accounts[1]});
		const addresshieFWLt = await LedgisWVFkgHt.lock.call(addressMDmvdL, uintQlvhKev, uintfadga0d, {from: accounts[0]});
		const uint256GKFO79s = await LedgisWVFkgHt.currentTime.call({from: accounts[5]});
		const uint256lpS2NOT = await LedgisWVFkgHt.lockCount.call(addressjPD9gqt, {from: accounts[2]});
	});

	it('test for Ledgis', async () => {
		const LedgisHkEaLpv = await Ledgis.new({from: accounts[1]});
		const addresstsR8kua = accounts[0]
		const addressPILH9zd = await LedgisHkEaLpv.unfreeze.call(addresstsR8kua, {from: accounts[1]});
		await LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]});

		await expect(LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDCaxeRL = await Ledgis.new({from: accounts[3]});
		const addressfhdSKYE = accounts[1]
		const uint256nG5wfuS = await LedgisDCaxeRL.totalSupply.call({from: accounts[3]});
		const uint256DcjDM2C = await LedgisDCaxeRL.balanceOf.call(addressfhdSKYE, {from: accounts[0]});

		assert.equal(uint256DcjDM2C, BigInt("0"))
		assert.equal(uint256nG5wfuS, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisGheGNG6 = await Ledgis.new({from: accounts[1]});
		const uintjzYvUKB = BigInt("823")
		const addressfYdrpOB = accounts[0]
		const addressXaH6N0T = accounts[0]
		const uintzzi3nuq = BigInt("2009")
		const addresskJ2lLtm = accounts[4]
		await LedgisGheGNG6.renounceOwnership.call({from: accounts[1]});
		const uint256r0zifYG = await LedgisGheGNG6.afterTime.call(uintjzYvUKB, {from: accounts[0]});
		const uint256wqm9K1X = await LedgisGheGNG6.allowance.call(addressXaH6N0T, addressfYdrpOB, {from: accounts[4]});
		const boolmAoQIa7 = await LedgisGheGNG6.transfer.call(addresskJ2lLtm, uintzzi3nuq, {from: accounts[3]});
		await LedgisGheGNG6.pause.call({from: accounts[3]});

		await expect(LedgisGheGNG6.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDCaxeRL = await Ledgis.new({from: accounts[3]});
		const addressc6Ub9nz = accounts[2]
		const uintHySjxoq = BigInt("1022")
		const addresszIvs10H = accounts[4]
		const addressH1xIn7W = accounts[1]
		const uint256XiGFsd2 = await LedgisDCaxeRL.balanceOf.call(addressc6Ub9nz, {from: accounts[4]});
		const addressinWoftt = await LedgisDCaxeRL.unlock.call(addresszIvs10H, uintHySjxoq, {from: accounts[3]});
		const uint256DcjDM2C = await LedgisDCaxeRL.balanceOf.call(addressH1xIn7W, {from: accounts[0]});

		assert.equal(uint256XiGFsd2, BigInt("0"))
		await expect(LedgisDCaxeRL.unlock.call(addresszIvs10H, uintHySjxoq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHkEaLpv = await Ledgis.new({from: accounts[1]});
		const uintVhFP43o = BigInt("1751")
		const uinteIGyZyy = BigInt("765")
		const addressOXmTYlu = accounts[3]
		const addressU8MXyk2 = accounts[2]
		const boolq0WOID = await LedgisHkEaLpv.transferWithLockAfter.call(addressOXmTYlu, uinteIGyZyy, uintVhFP43o, {from: accounts[1]});
		const addressrmZuT67 = await LedgisHkEaLpv.freeze.call(addressU8MXyk2, {from: accounts[1]});
		await LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]});

		assert.equal(boolq0WOID, true)
		await expect(LedgisHkEaLpv.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDCaxeRL = await Ledgis.new({from: accounts[3]});
		const addressh83C22v = accounts[1]
		const uintddib8Cw = BigInt("1259")
		const addressCXHRBjn = accounts[1]
		const uint256DcjDM2C = await LedgisDCaxeRL.balanceOf.call(addressh83C22v, {from: accounts[0]});
		const boolGbDhtGK = await LedgisDCaxeRL.mint.call(addressCXHRBjn, uintddib8Cw, {from: accounts[3]});
		const uint256S3xWAt8 = await LedgisDCaxeRL.totalSupply.call({from: accounts[3]});

		assert.equal(boolGbDhtGK, true)
		assert.equal(uint256DcjDM2C, BigInt("0"))
		assert.equal(uint256S3xWAt8, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgishS6g3jN = await Ledgis.new({from: accounts[0]});
		const uintz5t4Hyn = BigInt("1963")
		const uintnTWHzuK = BigInt("1679")
		const addressqhfE388 = accounts[3]
		const uintVjxHxXH = BigInt("295")
		const addressTPJol7F = "0x0000000000000000000000000000000000000001"
		const addressybaInbN = await LedgishS6g3jN.lock.call(addressqhfE388, uintnTWHzuK, uintz5t4Hyn, {from: accounts[0]});
		const boolJMBCMnI = await LedgishS6g3jN.increaseAllowance.call(addressTPJol7F, uintVjxHxXH, {from: accounts[4]});
		await LedgishS6g3jN.whenNotFrozen.call({from: accounts[1]});

		await expect(LedgishS6g3jN.lock.call(addressqhfE388, uintnTWHzuK, uintz5t4Hyn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXN3b5NI = await Ledgis.new({from: accounts[1]});
		const uintOd9w1w6 = BigInt("1206")
		const uintdRXjnf = BigInt("1561")
		const addresscIursAF = accounts[3]
		const uintuMVxV0n = BigInt("1760")
		const addressPjWhWh = accounts[2]
		const boolqfehWW7 = await LedgisXN3b5NI.transferWithLock.call(addresscIursAF, uintdRXjnf, uintOd9w1w6, {from: accounts[1]});
		const addresscERKdXz = await LedgisXN3b5NI.burn.call(addressPjWhWh, uintuMVxV0n, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisXN3b5NI.whenPaused.call({from: accounts[1]});

		assert.equal(boolqfehWW7, true)
		await expect(LedgisXN3b5NI.burn.call(addressPjWhWh, uintuMVxV0n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})