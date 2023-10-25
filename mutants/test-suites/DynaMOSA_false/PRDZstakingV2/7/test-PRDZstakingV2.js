const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2GEdCDc5 = await PRDZstakingV2.new({from: accounts[1]});
		const uintamt7RqY = BigInt("629")
		const addresszvlUV3M = accounts[1]
		const uintTxQEwP5 = BigInt("1289")
		const uintJ2yX4Ew = BigInt("1655")
//		const uintoyY57c = await PRDZstakingV2GEdCDc5.updateScoreEth.call(uintamt7RqY, {from: accounts[3]});
//		const addressQ7op50 = await PRDZstakingV2GEdCDc5.transferOwnership.call(addresszvlUV3M, {from: accounts[2]});
//		const uintfcbhYil = await PRDZstakingV2GEdCDc5.getTotalFeeCollected.call({from: accounts[2]});
//		const uintIGuEy09 = await PRDZstakingV2GEdCDc5.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintVHTir3n = await PRDZstakingV2GEdCDc5.updateOffer.call(uintJ2yX4Ew, uintTxQEwP5, {from: accounts[4]});

		await expect(PRDZstakingV2GEdCDc5.updateScoreEth.call(uintamt7RqY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VW3RCPm = await PRDZstakingV2.new({from: accounts[2]});
		const uintLgEb6rk = BigInt("237")
		const uintCB9JQIF = BigInt("1053")
		const uintep0bRP0 = BigInt("1914")
		const addressbWuujio = accounts[2]
//		await PRDZstakingV2VW3RCPm.claimScoreEth.call({from: accounts[4]});
//		const uintilCmAl9 = await PRDZstakingV2VW3RCPm.updateScoreEth.call(uintLgEb6rk, {from: accounts[0]});
//		const uintcK8rDzY = await PRDZstakingV2VW3RCPm.updateOffer.call(uintep0bRP0, uintCB9JQIF, {from: accounts[0]});
//		const uintdqlCaV = await PRDZstakingV2VW3RCPm.getPendingReward.call(addressbWuujio, {from: accounts[1]});
//		const uintGKzbvHg = await PRDZstakingV2VW3RCPm.getTotalFeeCollected.call({from: accounts[2]});
//		const uintQ052jfx = await PRDZstakingV2VW3RCPm.getTotalStaked.call({from: accounts[1]});

		await expect(PRDZstakingV2VW3RCPm.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OAHYPXA = await PRDZstakingV2.new({from: accounts[2]});
		const addressaHvfdU = accounts[5]
//		await PRDZstakingV2OAHYPXA.claimScoreEth.call({from: accounts[1]});
//		const uintRDJPFV = await PRDZstakingV2OAHYPXA.getScoreEth.call(addressaHvfdU, {from: accounts[0]});
//		await PRDZstakingV2OAHYPXA.claimReward.call({from: accounts[4]});

		await expect(PRDZstakingV2OAHYPXA.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hdzkYWU = await PRDZstakingV2.new({from: accounts[3]});
		const uintaAdPtl4 = BigInt("763")
		const uintjRh13DU = BigInt("1644")
		const uintIDVdjmF = await PRDZstakingV2hdzkYWU.getTotalClaimed.call({from: accounts[2]});
//		const uintKIH3zrZ = await PRDZstakingV2hdzkYWU.stake.call(uintaAdPtl4, {from: accounts[3]});
//		const uintYRsvB2Q = await PRDZstakingV2hdzkYWU.getTotalFeeCollected.call({from: accounts[5]});
//		const uintfu99XYD = await PRDZstakingV2hdzkYWU.getTotalUnStaked.call({from: accounts[4]});
//		const uintohC5uTp = await PRDZstakingV2hdzkYWU.stake.call(uintjRh13DU, {from: accounts[1]});

		assert.equal(uintIDVdjmF, BigInt("0"))
		await expect(PRDZstakingV2hdzkYWU.stake.call(uintaAdPtl4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2cYB18Eb = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uinti99Zj6x = BigInt("1792")
		const addresscCzNDh = accounts[1]
		const addressik5qy2F = accounts[1]
		const uintl5fKR5U = BigInt("1732")
		const uintXbtE6JF = await PRDZstakingV2cYB18Eb.stake.call(uinti99Zj6x, {from: "0x0000000000000000000000000000000000000001"});
		const uintsvy4SkC = await PRDZstakingV2cYB18Eb.getTotalClaimed.call({from: accounts[3]});
		const uintZkOx8zL = await PRDZstakingV2cYB18Eb.getScoreEth.call(addresscCzNDh, {from: accounts[4]});
		const uintU0NN6zS = await PRDZstakingV2cYB18Eb.getPendingReward.call(addressik5qy2F, {from: accounts[4]});
		const uintFGVfwK = await PRDZstakingV2cYB18Eb.unstake.call(uintl5fKR5U, {from: accounts[2]});
		const uintctTVzbc = await PRDZstakingV2cYB18Eb.getTotalStaked.call({from: accounts[2]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NcNbuY = await PRDZstakingV2.new({from: accounts[5]});
		const addressXikusZd = accounts[0]
		const uintTn3S6W2 = BigInt("1418")
//		await PRDZstakingV2NcNbuY.deposit.call({from: accounts[3]});
//		const uintAN9cYts = await PRDZstakingV2NcNbuY.getPendingReward.call(addressXikusZd, {from: accounts[1]});
//		const uintKvn9WbD = await PRDZstakingV2NcNbuY.getTotalClaimed.call({from: accounts[1]});
//		const uintNs3jYiO = await PRDZstakingV2NcNbuY.unstake.call(uintTn3S6W2, {from: accounts[1]});
//		const uintjaCCcV = await PRDZstakingV2NcNbuY.getTotalUnStaked.call({from: accounts[1]});

		await expect(PRDZstakingV2NcNbuY.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Yjz3tQ = await PRDZstakingV2.new({from: accounts[4]});
		const addressnhGwdmp = accounts[1]
		const uintt1Vm4HL = await PRDZstakingV2Yjz3tQ.getTotalUnStaked.call({from: accounts[3]});
//		const addressKPPZEV3 = await PRDZstakingV2Yjz3tQ.transferOwnership.call(addressnhGwdmp, {from: accounts[3]});

		assert.equal(uintt1Vm4HL, BigInt("0"))
		await expect(PRDZstakingV2Yjz3tQ.transferOwnership.call(addressnhGwdmp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rbzy4So = await PRDZstakingV2.new({from: accounts[0]});
		const uintayL3BXj = BigInt("1569")
		const addressRUkO55O = accounts[4]
		const uintESGrK2V = await PRDZstakingV2rbzy4So.getNumberOfHolders.call({from: accounts[4]});
		const uintku8sQI5 = await PRDZstakingV2rbzy4So.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintLOd5Xcd = await PRDZstakingV2rbzy4So.stake.call(uintayL3BXj, {from: accounts[4]});
//		const uintJZsRqcO = await PRDZstakingV2rbzy4So.getStakingScore.call(addressRUkO55O, {from: accounts[3]});

		assert.equal(uintESGrK2V, BigInt("0"))
		assert.equal(uintku8sQI5, BigInt("0"))
		await expect(PRDZstakingV2rbzy4So.stake.call(uintayL3BXj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tA60Wx = await PRDZstakingV2.new({from: accounts[1]});
		const addressmZqGG53 = accounts[4]
		const addressM1Gbi9q = accounts[4]
		const uintVl78Eim = await PRDZstakingV2tA60Wx.getNumberOfHolders.call({from: accounts[0]});
		const uintdE0ywdg = await PRDZstakingV2tA60Wx.getTotalFeeCollected.call({from: accounts[3]});
//		const addressPnKCZZv = await PRDZstakingV2tA60Wx.transferOwnership.call(addressmZqGG53, {from: accounts[2]});
//		const uintT66Y1DV = await PRDZstakingV2tA60Wx.getPendingReward.call(addressM1Gbi9q, {from: accounts[0]});
//		await PRDZstakingV2tA60Wx.claimScoreEth.call({from: accounts[5]});

		assert.equal(uintVl78Eim, BigInt("0"))
		assert.equal(uintdE0ywdg, BigInt("0"))
		await expect(PRDZstakingV2tA60Wx.transferOwnership.call(addressmZqGG53, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rbzy4So = await PRDZstakingV2.new({from: accounts[0]});
		const addressNJCCv5Q = accounts[5]
		const addressv8FJHDL = accounts[1]
		const uintESGrK2V = await PRDZstakingV2rbzy4So.getNumberOfHolders.call({from: accounts[4]});
		const uintku8sQI5 = await PRDZstakingV2rbzy4So.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		const uintJZsRqcO = await PRDZstakingV2rbzy4So.getStakingScore.call(addressNJCCv5Q, {from: accounts[3]});
		const uintMff75i = await PRDZstakingV2rbzy4So.getStakingScore.call(addressv8FJHDL, {from: accounts[4]});
//		await PRDZstakingV2rbzy4So.deposit.call({from: accounts[4]});

		assert.equal(uintESGrK2V, BigInt("0"))
		assert.equal(uintJZsRqcO, BigInt("0"))
		assert.equal(uintMff75i, BigInt("0"))
		assert.equal(uintku8sQI5, BigInt("0"))
		await expect(PRDZstakingV2rbzy4So.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rbzy4So = await PRDZstakingV2.new({from: accounts[0]});
		const addresshiMA1OV = accounts[2]
		const addressSY5boqP = accounts[4]
		const uintOWIvq5B = BigInt("431")
		const addressUXCQbYR = accounts[1]
		const uintESGrK2V = await PRDZstakingV2rbzy4So.getNumberOfHolders.call({from: accounts[4]});
		const uintku8sQI5 = await PRDZstakingV2rbzy4So.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		const addressPFcfdb = await PRDZstakingV2rbzy4So.transferOwnership.call(addresshiMA1OV, {from: accounts[0]});
		const uintJZsRqcO = await PRDZstakingV2rbzy4So.getStakingScore.call(addressSY5boqP, {from: accounts[3]});
//		const uintcJR34Rc = await PRDZstakingV2rbzy4So.stake.call(uintOWIvq5B, {from: accounts[2]});
//		const uintMff75i = await PRDZstakingV2rbzy4So.getStakingScore.call(addressUXCQbYR, {from: accounts[4]});
//		await PRDZstakingV2rbzy4So.deposit.call({from: accounts[4]});

		assert.equal(uintESGrK2V, BigInt("0"))
		assert.equal(uintJZsRqcO, BigInt("0"))
		assert.equal(uintku8sQI5, BigInt("0"))
		await expect(PRDZstakingV2rbzy4So.stake.call(uintOWIvq5B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OAHYPXA = await PRDZstakingV2.new({from: accounts[2]});
		const addressPMnT44X = accounts[5]
		const uintiriXLiT = BigInt("887")
		const addressSjpAU7 = accounts[1]
		const uintPIGLRQv = await PRDZstakingV2OAHYPXA.getTotalStaked.call({from: accounts[5]});
//		await PRDZstakingV2OAHYPXA.claimScoreEth.call({from: accounts[1]});
//		const uintRDJPFV = await PRDZstakingV2OAHYPXA.getScoreEth.call(addressPMnT44X, {from: accounts[0]});
//		await PRDZstakingV2OAHYPXA.claimReward.call({from: accounts[4]});
//		const uintjgP4yNK = await PRDZstakingV2OAHYPXA.stake.call(uintiriXLiT, {from: accounts[2]});
//		const uintqDoAqNs = await PRDZstakingV2OAHYPXA.getPendingReward.call(addressSjpAU7, {from: accounts[0]});

		assert.equal(uintPIGLRQv, BigInt("0"))
		await expect(PRDZstakingV2OAHYPXA.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2wohN0Y2 = await PRDZstakingV2.new({from: accounts[1]});
		const uintDq4NDS = BigInt("697")
		const addressFfZwGHJ = accounts[2]
		const uintlBzrDfm = BigInt("297")
		const uintJ8gsfDk = await PRDZstakingV2wohN0Y2.getTotalUnStaked.call({from: accounts[3]});
		const uintzh91Vkh = await PRDZstakingV2wohN0Y2.updateScoreEth.call(uintDq4NDS, {from: accounts[1]});
		const uintM5Swcqe = await PRDZstakingV2wohN0Y2.getStakingScore.call(addressFfZwGHJ, {from: accounts[1]});
		const uintRLN7Ujt = await PRDZstakingV2wohN0Y2.getTotalClaimed.call({from: accounts[2]});
//		const uintZbrsaTq = await PRDZstakingV2wohN0Y2.unstake.call(uintlBzrDfm, {from: accounts[1]});
//		const uintfex1lzQ = await PRDZstakingV2wohN0Y2.getTotalStaked.call({from: accounts[0]});
//		const uintSCJswZE = await PRDZstakingV2wohN0Y2.getTotalUnStaked.call({from: accounts[5]});

		assert.equal(uintJ8gsfDk, BigInt("0"))
		assert.equal(uintM5Swcqe, BigInt("0"))
		assert.equal(uintRLN7Ujt, BigInt("0"))
		await expect(PRDZstakingV2wohN0Y2.unstake.call(uintlBzrDfm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2EHPqL6u = await PRDZstakingV2.new({from: accounts[0]});
		const uintlutpiaU = BigInt("359")
		const uintzJ2uZ6o = BigInt("1292")
		const uintjI3EUp7 = BigInt("1871")
		const uintsRYiQxk = BigInt("1112")
//		await PRDZstakingV2EHPqL6u.onlyOwner.call({from: accounts[2]});
//		await PRDZstakingV2EHPqL6u.deposit.call({from: accounts[0]});
//		await PRDZstakingV2EHPqL6u.claimReward.call({from: accounts[4]});
//		const uintw4cbnwU = await PRDZstakingV2EHPqL6u.stake.call(uintlutpiaU, {from: accounts[5]});
//		const uintD7QvUe4 = await PRDZstakingV2EHPqL6u.updateOffer.call(uintjI3EUp7, uintzJ2uZ6o, {from: "0x0000000000000000000000000000000000000001"});
//		const uintsKdbhDI = await PRDZstakingV2EHPqL6u.updateScoreEth.call(uintsRYiQxk, {from: accounts[2]});

		await expect(PRDZstakingV2EHPqL6u.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OAHYPXA = await PRDZstakingV2.new({from: accounts[2]});
		const uintVQQJkhy = BigInt("2036")
		const uintE2SrGA = BigInt("1319")
//		await PRDZstakingV2OAHYPXA.deposit.call({from: accounts[0]});
//		await PRDZstakingV2OAHYPXA.claimReward.call({from: accounts[4]});
//		const uint7gh2jr = await PRDZstakingV2OAHYPXA.updateOffer.call(uintE2SrGA, uintVQQJkhy, {from: accounts[2]});

		await expect(PRDZstakingV2OAHYPXA.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2rbzy4So = await PRDZstakingV2.new({from: accounts[0]});
		const uintwV1MbH = BigInt("0")
		const addressmFz4ds3 = accounts[0]
		const uintixU3FVS = BigInt("336")
//		const uintHgmIMkD = await PRDZstakingV2rbzy4So.stake.call(uintwV1MbH, {from: accounts[5]});
//		const addressI12djqK = await PRDZstakingV2rbzy4So.transferOwnership.call(addressmFz4ds3, {from: accounts[4]});
//		const uintTNxrQrI = await PRDZstakingV2rbzy4So.updateScoreEth.call(uintixU3FVS, {from: accounts[0]});

		await expect(PRDZstakingV2rbzy4So.stake.call(uintwV1MbH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})