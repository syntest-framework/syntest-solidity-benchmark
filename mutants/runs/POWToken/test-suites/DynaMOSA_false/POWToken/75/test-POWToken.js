const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokencuQCdtN = await POWToken.new({from: accounts[5]});
		const uintimm0Quw = BigInt("976")
		const uint256wGeGLEw = await POWTokencuQCdtN.stakingRewardRate.call({from: accounts[3]});
		const uint256WslBkMS = await POWTokencuQCdtN.setDepreciationNumerator.call(uintimm0Quw, {from: accounts[1]});
		const uint256QVk8doC = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const uint256vqkLw0o = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		assert.equal(uint256wGeGLEw, BigInt("0"))
		await expect(POWTokencuQCdtN.setDepreciationNumerator.call(uintimm0Quw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJtl0dQb = await POWToken.new({from: accounts[3]});
		const uint1Vvtz0 = BigInt("1419")
		const uinton0ExgK = BigInt("965")
		const addressGcGJDuc = accounts[4]
		const uintMdb2Yu9 = BigInt("1909")
		const uintQlghwSd = BigInt("833")
		const addressDzSyNCU = accounts[2]
		const uintnlLW5xS = BigInt("1956")
		const uint256ZoLdD2 = await POWTokenJtl0dQb.setStakingRewardRatio.call(uint1Vvtz0, {from: accounts[5]});
		const addresstZYnzIY = await POWTokenJtl0dQb.inCaseTokensGetStuck.call(addressGcGJDuc, uinton0ExgK, {from: accounts[0]});
		const uint256FUdMehg = await POWTokenJtl0dQb.notifyRewardAmount.call(uintMdb2Yu9, {from: accounts[4]});
		const addressc76anUH = await POWTokenJtl0dQb.inCaseTokensGetStuck.call(addressDzSyNCU, uintQlghwSd, {from: accounts[5]});
		await POWTokenJtl0dQb.unpause.call({from: accounts[3]});
		const uint256fYuZHVb = await POWTokenJtl0dQb.setDepreciationNumerator.call(uintnlLW5xS, {from: accounts[1]});

		await expect(POWTokenJtl0dQb.setStakingRewardRatio.call(uint1Vvtz0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenC3kE5r5 = await POWToken.new({from: accounts[2]});
		const uintYMuTN82 = BigInt("899")
		const addressmMAk0wP = accounts[0]
		const uintFlELl3J = BigInt("1596")
		const addressYYMmh1 = accounts[0]
		await POWTokenC3kE5r5.onlyParamSetter.call({from: accounts[5]});
		await POWTokenC3kE5r5.whenPaused.call({from: accounts[5]});
		const addresscsHPRqz = await POWTokenC3kE5r5.inCaseTokensGetStuck.call(addressmMAk0wP, uintYMuTN82, {from: accounts[1]});
		await POWTokenC3kE5r5.pause.call({from: accounts[4]});
		const addressV3be8H = await POWTokenC3kE5r5.claimIncome.call(addressYYMmh1, uintFlELl3J, {from: accounts[1]});

		await expect(POWTokenC3kE5r5.onlyParamSetter.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGlabqzC = await POWToken.new({from: accounts[3]});
		const uintZqVfQR = BigInt("261")
		const addressRB24MtR = accounts[3]
		const addresszq4l27F = accounts[3]
		const uintYt7Ed6i = BigInt("1270")
		const uint256zBOvxtW = await POWTokenGlabqzC.stakingRewardRate.call({from: accounts[0]});
		const uint256TVMV0p0 = await POWTokenGlabqzC.stakingRewardRate.call({from: accounts[4]});
		const uint256FzG4Cvj = await POWTokenGlabqzC.remainingAmount.call({from: accounts[1]});
		const uint256pAf8FFp = await POWTokenGlabqzC.getHistoryWorkingRate.call({from: accounts[5]});
		const boolJc1yh3I = await POWTokenGlabqzC.transferFrom.call(addresszq4l27F, addressRB24MtR, uintZqVfQR, {from: accounts[2]});
		const uint256jeKhcLD = await POWTokenGlabqzC.notifyRewardAmount.call(uintYt7Ed6i, {from: accounts[0]});

		assert.equal(uint256FzG4Cvj, BigInt("0"))
		assert.equal(uint256TVMV0p0, BigInt("0"))
		assert.equal(uint256zBOvxtW, BigInt("0"))
		await expect(POWTokenGlabqzC.getHistoryWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenySQmuj5 = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHqhWEtF = BigInt("679")
		const uintFzAzB5 = BigInt("1971")
		const uinthMF4iym = BigInt("1733")
		const uint1ZdTNt = BigInt("1538")
		const uintIbCIvlt = BigInt("1895")
		const uintyCeiEl9 = BigInt("340")
		const addressVAZ41j7 = accounts[3]
		const addressAZjasTm = accounts[2]
		const addressB8aVtsY = accounts[2]
		const addressmdEogDE = accounts[5]
		const addressg7ct01G = accounts[1]
		const addressKZM7m0j = accounts[5]
		const addressH4uvlSl = accounts[3]
		const addressIPnlMXy = accounts[1]
		const stringxtHzhb = "8nIjgy1"
		const stringBdRvNs5 = "G8IlKj9e6tHOjEqZxVtFFoeKpII1qs0zSCs9BucswXYV0qCphlUApEKNtzk4Va453X7FddGW6liokCU8bqLg1xqS"
		const uintCaqzFg = BigInt("1710")
		const uintVV2MdkN = BigInt("1409")
		const addressHYUICtt = accounts[2]
		const uintftgubPC = BigInt("1981")
		const addressPf5tjyj = accounts[1]
		await POWTokenySQmuj5.unpause.call({from: accounts[3]});
		const uint256xwQPB0N = await POWTokenySQmuj5.setStartMiningTime.call(uintHqhWEtF, {from: accounts[1]});
		const stringpGhUx1r = await POWTokenySQmuj5.initialize.call(stringBdRvNs5, stringxtHzhb, addressIPnlMXy, addressH4uvlSl, addressKZM7m0j, addressg7ct01G, addressmdEogDE, addressB8aVtsY, addressAZjasTm, addressVAZ41j7, uintyCeiEl9, uintIbCIvlt, uint1ZdTNt, uinthMF4iym, uintFzAzB5, {from: accounts[2]});
		const uint256U03u1F = await POWTokenySQmuj5.setDepreciationNumerator.call(uintCaqzFg, {from: accounts[4]});
		const boolwgz6JN6 = await POWTokenySQmuj5.transfer.call(addressHYUICtt, uintVV2MdkN, {from: accounts[2]});
		const addressN4I0k7 = await POWTokenySQmuj5.mint.call(addressPf5tjyj, uintftgubPC, {from: accounts[0]});
	});

	it('test for POWToken', async () => {
		const POWTokenq3ZThPy = await POWToken.new({from: accounts[1]});
		const uintDXdhEUW = BigInt("1766")
		const addressbdrHGi = accounts[4]
		const uintON9cv1A = BigInt("323")
		const addresszSq6qrx = "0x0000000000000000000000000000000000000001"
		const uintIst47eX = BigInt("1881")
		const addresshSOo369 = accounts[4]
		const uintMHeJqSq = BigInt("1679")
		const addressOQiPEgu = await POWTokenq3ZThPy.mint.call(addressbdrHGi, uintDXdhEUW, {from: accounts[4]});
		const uint256pTZNcU2 = await POWTokenq3ZThPy.setWorkingHashRate.call(uintON9cv1A, {from: accounts[3]});
		const addresspc4XMt4 = await POWTokenq3ZThPy.setParamSetter.call(addresszSq6qrx, {from: accounts[0]});
		const addressDr32TDu = await POWTokenq3ZThPy.inCaseTokensGetStuck.call(addresshSOo369, uintIst47eX, {from: accounts[1]});
		const uint256WIDh6d = await POWTokenq3ZThPy.setStartMiningTime.call(uintMHeJqSq, {from: accounts[3]});
		await POWTokenq3ZThPy.pause.call({from: accounts[2]});

		await expect(POWTokenq3ZThPy.mint.call(addressbdrHGi, uintDXdhEUW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencuQCdtN = await POWToken.new({from: accounts[5]});
		const uintXBApGl = BigInt("357")
		const addressPiSNVWg = "0x0000000000000000000000000000000000000001"
		const uintQlbcSws = BigInt("949")
		const uintr0k6oGA = BigInt("1766")
		const addressnIgTI4 = accounts[1]
		const uint256wGeGLEw = await POWTokencuQCdtN.stakingRewardRate.call({from: accounts[3]});
		const boolbQfCsCI = await POWTokencuQCdtN.approve.call(addressPiSNVWg, uintXBApGl, {from: accounts[3]});
		const uint256WslBkMS = await POWTokencuQCdtN.setDepreciationNumerator.call(uintQlbcSws, {from: accounts[1]});
		const uint256QVk8doC = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const boolrFgyaYs = await POWTokencuQCdtN.approve.call(addressnIgTI4, uintr0k6oGA, {from: accounts[3]});
		const uint256vqkLw0o = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		assert.equal(boolbQfCsCI, true)
		assert.equal(uint256wGeGLEw, BigInt("0"))
		await expect(POWTokencuQCdtN.setDepreciationNumerator.call(uintQlbcSws, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencuQCdtN = await POWToken.new({from: accounts[5]});
		const uintGLVA7hh = BigInt("1060")
		const addressYkbUrFW = accounts[3]
		const uintI7wwoQe = BigInt("121")
		const uintP4BQ9j = BigInt("998")
		const addressVv5py6R = await POWTokencuQCdtN.claimIncome.call(addressYkbUrFW, uintGLVA7hh, {from: accounts[4]});
		const uint256wGeGLEw = await POWTokencuQCdtN.stakingRewardRate.call({from: accounts[3]});
		const uint256T9pPpio = await POWTokencuQCdtN.notifyRewardAmount.call(uintI7wwoQe, {from: accounts[4]});
		const uint256WslBkMS = await POWTokencuQCdtN.setDepreciationNumerator.call(uintP4BQ9j, {from: accounts[1]});
		const uint256QVk8doC = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		await POWTokencuQCdtN.pause.call({from: accounts[1]});
		const uint256vqkLw0o = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		await expect(POWTokencuQCdtN.claimIncome.call(addressYkbUrFW, uintGLVA7hh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGlabqzC = await POWToken.new({from: accounts[3]});
		const uintb5Y87JK = BigInt("261")
		const addressfom9dR5 = accounts[3]
		const address4ku6dV = accounts[3]
		const uintOw2cbbv = BigInt("1270")
		const uint256zBOvxtW = await POWTokenGlabqzC.stakingRewardRate.call({from: accounts[0]});
		const uint256TVMV0p0 = await POWTokenGlabqzC.stakingRewardRate.call({from: accounts[4]});
		const uint256FzG4Cvj = await POWTokenGlabqzC.remainingAmount.call({from: accounts[1]});
		const boolJc1yh3I = await POWTokenGlabqzC.transferFrom.call(address4ku6dV, addressfom9dR5, uintb5Y87JK, {from: accounts[2]});
		const uint256jeKhcLD = await POWTokenGlabqzC.notifyRewardAmount.call(uintOw2cbbv, {from: accounts[0]});

		assert.equal(uint256FzG4Cvj, BigInt("0"))
		assert.equal(uint256TVMV0p0, BigInt("0"))
		assert.equal(uint256zBOvxtW, BigInt("0"))
		await expect(POWTokenGlabqzC.transferFrom.call(address4ku6dV, addressfom9dR5, uintb5Y87JK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencuQCdtN = await POWToken.new({from: accounts[5]});
		const uintnicvrCa = BigInt("1006")
		const uintzlOBrDm = BigInt("877")
		const uintsyi6hhc = BigInt("697")
		const uintBqVbDaK = BigInt("739")
		const uintaOlban5 = BigInt("1972")
		const addresszYdBDVH = accounts[2]
		const addressvdG7s8d = accounts[4]
		const addressDWo2ppX = accounts[2]
		const addressGFGzMjq = accounts[4]
		const addresscCZE5Wq = accounts[3]
		const addressIDMyzaJ = accounts[0]
		const addressMBU0ggQ = accounts[3]
		const addressMsftp1c = accounts[0]
		const stringvMk3RIf = "8ffsP5hUhGsZPW2J4U3YwRYekf7"
		const stringqu02Xcj = "M"
		const uint3rF27j = BigInt("976")
		const stringaDRQGXh = await POWTokencuQCdtN.initialize.call(stringqu02Xcj, stringvMk3RIf, addressMsftp1c, addressMBU0ggQ, addressIDMyzaJ, addresscCZE5Wq, addressGFGzMjq, addressDWo2ppX, addressvdG7s8d, addresszYdBDVH, uintaOlban5, uintBqVbDaK, uintsyi6hhc, uintzlOBrDm, uintnicvrCa, {from: accounts[0]});
		const uint256wGeGLEw = await POWTokencuQCdtN.stakingRewardRate.call({from: accounts[3]});
		const uint256WslBkMS = await POWTokencuQCdtN.setDepreciationNumerator.call(uint3rF27j, {from: accounts[1]});
		const uint256QVk8doC = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const uint256vqkLw0o = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		await expect(POWTokencuQCdtN.initialize.call(stringqu02Xcj, stringvMk3RIf, addressMsftp1c, addressMBU0ggQ, addressIDMyzaJ, addresscCZE5Wq, addressGFGzMjq, addressDWo2ppX, addressvdG7s8d, addresszYdBDVH, uintaOlban5, uintBqVbDaK, uintsyi6hhc, uintzlOBrDm, uintnicvrCa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennkN1SHi = await POWToken.new({from: accounts[0]});
		const uintrfIiMJ = BigInt("1624")
		await POWTokennkN1SHi.updateIncomeRate.call({from: accounts[2]});
		const uint256oZCtXhD = await POWTokennkN1SHi.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
		const uint256HNsj118 = await POWTokennkN1SHi.setDepreciationNumerator.call(uintrfIiMJ, {from: accounts[1]});

		await expect(POWTokennkN1SHi.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencuQCdtN = await POWToken.new({from: accounts[5]});
		const uint256wGeGLEw = await POWTokencuQCdtN.stakingRewardRate.call({from: accounts[3]});
		const uint256QVk8doC = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const uint256RggUQl = await POWTokencuQCdtN.lpStakingRewardRate.call({from: accounts[1]});
		const uint256vqkLw0o = await POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		assert.equal(uint256wGeGLEw, BigInt("0"))
		await expect(POWTokencuQCdtN.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOm4ass = await POWToken.new({from: accounts[2]});
		const uintr3hmrs = BigInt("758")
		const addressLovgPQV = accounts[0]
		const uintZRvVy4p = BigInt("747")
		const uintEzpSNNL = BigInt("1310")
		const addresscUKGvqr = accounts[1]
		const uintqZv0Ll9 = BigInt("1732")
		const addressZkIyuaE = accounts[4]
		const uint256swFJhQ = await POWTokenOm4ass.lpStakingRewardRate.call({from: accounts[3]});
		const boolBxcBTYs = await POWTokenOm4ass.transfer.call(addressLovgPQV, uintr3hmrs, {from: accounts[0]});
		const uint256UjSpNhx = await POWTokenOm4ass.notifyRewardAmount.call(uintZRvVy4p, {from: accounts[4]});
		const addressYsdAwDs = await POWTokenOm4ass.claimIncome.call(addresscUKGvqr, uintEzpSNNL, {from: accounts[4]});
		const addressYQifGtM = await POWTokenOm4ass.mint.call(addressZkIyuaE, uintqZv0Ll9, {from: accounts[0]});

		assert.equal(uint256swFJhQ, BigInt("0"))
		await expect(POWTokenOm4ass.transfer.call(addressLovgPQV, uintr3hmrs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenUbjufhk = await POWToken.new({from: accounts[3]});
		const bytehOPyEH5 = "0x120b15181f020b0f0b09040d08171e191606031600181a020e160f09130b080a"
		const bytePO6McNV = "0x10071d141619040406101d1c1119031118070f080e0f17160b07120f0e131d07"
		const uintHrNx2s = BigInt("22")
		const uintm4FlD1Q = BigInt("1996")
		const uintKYzdxqy = BigInt("293")
		const addressvyx86D0 = accounts[0]
		const addressBfM6PS1 = accounts[1]
		const uintNOCzYte = BigInt("577")
		const addressQZLR3xV = await POWTokenUbjufhk.permit.call(addressBfM6PS1, addressvyx86D0, uintKYzdxqy, uintm4FlD1Q, uintHrNx2s, bytePO6McNV, bytehOPyEH5, {from: accounts[5]});
		const uint256uT2aH7F = await POWTokenUbjufhk.setDepreciationNumerator.call(uintNOCzYte, {from: accounts[0]});

		await expect(POWTokenUbjufhk.permit.call(addressBfM6PS1, addressvyx86D0, uintKYzdxqy, uintm4FlD1Q, uintHrNx2s, bytePO6McNV, bytehOPyEH5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenuLMDOJ = await POWToken.new({from: accounts[3]});
		const uintlDwfhsw = BigInt("393")
		const addressL8oX2sC = accounts[5]
		const bytenuQfsEP = "0x0b1f061c020517170f06101517061d161203130d04060716201a0616101a1c20"
		const bytewWQWy4R = "0x1909061001181a20131418090306011d2008160505190a1e1d0e201918191f15"
		const uintMff3f1F = BigInt("51")
		const uintBRbnhyf = BigInt("373")
		const uint1w0X2n = BigInt("289")
		const addressNsRlWD = accounts[0]
		const addressLudXFYi = accounts[4]
		const uint256muBQtWK = await POWTokenuLMDOJ.remainingAmount.call({from: accounts[4]});
		const addressklEmKTX = await POWTokenuLMDOJ.claimReward.call(addressL8oX2sC, uintlDwfhsw, {from: accounts[1]});
		const addressAERh8Nq = await POWTokenuLMDOJ.permit.call(addressLudXFYi, addressNsRlWD, uint1w0X2n, uintBRbnhyf, uintMff3f1F, bytewWQWy4R, bytenuQfsEP, {from: accounts[2]});

		assert.equal(uint256muBQtWK, BigInt("0"))
		await expect(POWTokenuLMDOJ.claimReward.call(addressL8oX2sC, uintlDwfhsw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGlabqzC = await POWToken.new({from: accounts[3]});
		const uintZEWwBJ = BigInt("468")
		const uintVCU6ntD = BigInt("261")
		const addressbPwV7Pn = accounts[3]
		const addressO7crkGb = accounts[3]
		const uint52StiA = BigInt("1267")
		const uint256zBOvxtW = await POWTokenGlabqzC.stakingRewardRate.call({from: accounts[0]});
		const uint256TVMV0p0 = await POWTokenGlabqzC.stakingRewardRate.call({from: accounts[4]});
		const booldd3eqVc = await POWTokenGlabqzC.paused.call({from: accounts[2]});
		const uint256aIF8HN2 = await POWTokenGlabqzC.setStartMiningTime.call(uintZEWwBJ, {from: accounts[1]});
		const uint256IVzB8RG = await POWTokenGlabqzC.lpStakingRewardRate.call({from: accounts[4]});
		const uint256FzG4Cvj = await POWTokenGlabqzC.remainingAmount.call({from: accounts[1]});
		const uint256pAf8FFp = await POWTokenGlabqzC.getHistoryWorkingRate.call({from: accounts[5]});
		const boolJc1yh3I = await POWTokenGlabqzC.transferFrom.call(addressO7crkGb, addressbPwV7Pn, uintVCU6ntD, {from: accounts[2]});
		const uint256jeKhcLD = await POWTokenGlabqzC.notifyRewardAmount.call(uint52StiA, {from: accounts[0]});
		const uint256Fn5sVzt = await POWTokenGlabqzC.getCurWorkingRate.call({from: accounts[5]});

		assert.equal(booldd3eqVc, false)
		assert.equal(uint256TVMV0p0, BigInt("0"))
		assert.equal(uint256zBOvxtW, BigInt("0"))
		await expect(POWTokenGlabqzC.setStartMiningTime.call(uintZEWwBJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})