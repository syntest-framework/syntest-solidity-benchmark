const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZhVECWA = await PRDZstakingV2.new({from: accounts[0]});
		const addresst9qesBu = accounts[2]
		const uintzZAaC8G = await PRDZstakingV2ZhVECWA.getStakingScore.call(addresst9qesBu, {from: accounts[1]});
		const uintqAGWXz = await PRDZstakingV2ZhVECWA.getTotalClaimed.call({from: accounts[3]});

		assert.equal(uintqAGWXz, BigInt("0"))
		assert.equal(uintzZAaC8G, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OISNBuv = await PRDZstakingV2.new({from: accounts[4]});
		const uintMI8dzTu = BigInt("1994")
		const uintsDr0KuR = BigInt("720")
//		const uintocMJDL4 = await PRDZstakingV2OISNBuv.updateScoreEth.call(uintMI8dzTu, {from: accounts[1]});
//		const uintSOz0RhO = await PRDZstakingV2OISNBuv.stake.call(uintsDr0KuR, {from: accounts[5]});
//		await PRDZstakingV2OISNBuv.onlyOwner.call({from: accounts[0]});

		await expect(PRDZstakingV2OISNBuv.updateScoreEth.call(uintMI8dzTu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2nkSaoIY = await PRDZstakingV2.new({from: accounts[4]});
		const uintMQFlPZ4 = BigInt("1588")
		const uinteARydK5 = await PRDZstakingV2nkSaoIY.getTotalClaimed.call({from: accounts[4]});
//		const uintneAeW2p = await PRDZstakingV2nkSaoIY.stake.call(uintMQFlPZ4, {from: accounts[4]});
//		await PRDZstakingV2nkSaoIY.claimReward.call({from: accounts[1]});
//		const uintC3sBOEv = await PRDZstakingV2nkSaoIY.getTotalUnStaked.call({from: accounts[1]});
//		const uintgbNTF92 = await PRDZstakingV2nkSaoIY.getTotalStaked.call({from: accounts[4]});
//		await PRDZstakingV2nkSaoIY.claimScoreEth.call({from: accounts[0]});

		assert.equal(uinteARydK5, BigInt("0"))
		await expect(PRDZstakingV2nkSaoIY.stake.call(uintMQFlPZ4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2xKbBAJ = await PRDZstakingV2.new({from: accounts[3]});
		const addressjlelfZx = accounts[2]
//		await PRDZstakingV2xKbBAJ.deposit.call({from: accounts[3]});
//		const uintgIXxVCF = await PRDZstakingV2xKbBAJ.getTotalStaked.call({from: accounts[0]});
//		await PRDZstakingV2xKbBAJ.deposit.call({from: accounts[0]});
//		const uintLpb2caT = await PRDZstakingV2xKbBAJ.getPendingReward.call(addressjlelfZx, {from: accounts[1]});

		await expect(PRDZstakingV2xKbBAJ.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QF854Rz = await PRDZstakingV2.new({from: accounts[2]});
		const uintpJ8fSoB = BigInt("791")
		const uintVi0RWg4 = await PRDZstakingV2QF854Rz.updateScoreEth.call(uintpJ8fSoB, {from: accounts[2]});
		const uintxFN9DQT = await PRDZstakingV2QF854Rz.getTotalStaked.call({from: accounts[0]});

		assert.equal(uintxFN9DQT, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hhzNs2j = await PRDZstakingV2.new({from: accounts[0]});
		const uintaRpKJTX = BigInt("6")
//		const uintZHnZCmV = await PRDZstakingV2hhzNs2j.unstake.call(uintaRpKJTX, {from: "0x0000000000000000000000000000000000000001"});
//		const uintGB3qaMZ = await PRDZstakingV2hhzNs2j.getTotalStaked.call({from: accounts[3]});

		await expect(PRDZstakingV2hhzNs2j.unstake.call(uintaRpKJTX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jaUB8qE = await PRDZstakingV2.new({from: accounts[0]});
		const uintPAhCV0f = BigInt("1547")
		const uintYSa4FBd = BigInt("1766")
		const uinta9FEVQI = BigInt("1767")
		const addressE1AQNLG = accounts[2]
		const uintZMSJnQ = BigInt("960")
		const uintKFMsrSL = await PRDZstakingV2jaUB8qE.getTotalFeeCollected.call({from: accounts[1]});
//		const uintiWzOTx = await PRDZstakingV2jaUB8qE.updateOffer.call(uintYSa4FBd, uintPAhCV0f, {from: accounts[1]});
//		const uintCfM3Oq0 = await PRDZstakingV2jaUB8qE.stake.call(uinta9FEVQI, {from: accounts[1]});
//		const uintJnSIMqv = await PRDZstakingV2jaUB8qE.getStakingScore.call(addressE1AQNLG, {from: accounts[0]});
//		const uintKkcTjmH = await PRDZstakingV2jaUB8qE.getNumberOfHolders.call({from: accounts[2]});
//		const uintca9oskQ = await PRDZstakingV2jaUB8qE.stake.call(uintZMSJnQ, {from: accounts[3]});

		assert.equal(uintKFMsrSL, BigInt("0"))
		await expect(PRDZstakingV2jaUB8qE.updateOffer.call(uintYSa4FBd, uintPAhCV0f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QJOTW7S = await PRDZstakingV2.new({from: accounts[4]});
		const addressLCeqXX = "0x0000000000000000000000000000000000000001"
		const uintrQ9Rybe = await PRDZstakingV2QJOTW7S.getStakingScore.call(addressLCeqXX, {from: "0x0000000000000000000000000000000000000001"});
		const uint9A01J7 = await PRDZstakingV2QJOTW7S.getTotalUnStaked.call({from: accounts[3]});
//		await PRDZstakingV2QJOTW7S.claimReward.call({from: accounts[2]});

		assert.equal(uint9A01J7, BigInt("0"))
		assert.equal(uintrQ9Rybe, BigInt("0"))
		await expect(PRDZstakingV2QJOTW7S.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZhVECWA = await PRDZstakingV2.new({from: accounts[0]});
		const addressz38Jzp4 = accounts[2]
		const addressFnQH4kz = accounts[0]
		const addressHvCCQfO = accounts[0]
		const uintzZAaC8G = await PRDZstakingV2ZhVECWA.getStakingScore.call(addressz38Jzp4, {from: accounts[1]});
		const uintWkiDQ91 = await PRDZstakingV2ZhVECWA.getStakingScore.call(addressFnQH4kz, {from: accounts[1]});
		const uintQ0sJK6E = await PRDZstakingV2ZhVECWA.getScoreEth.call(addressHvCCQfO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintQ0sJK6E, BigInt("0"))
		assert.equal(uintWkiDQ91, BigInt("0"))
		assert.equal(uintzZAaC8G, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZhVECWA = await PRDZstakingV2.new({from: accounts[0]});
		const addressh7Bjxp = accounts[2]
		const uintzZAaC8G = await PRDZstakingV2ZhVECWA.getStakingScore.call(addressh7Bjxp, {from: accounts[1]});
		const uintXr4l5Zv = await PRDZstakingV2ZhVECWA.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uintXr4l5Zv, BigInt("0"))
		assert.equal(uintzZAaC8G, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2so4ES12 = await PRDZstakingV2.new({from: accounts[0]});
		const addressAhl8Kmk = accounts[0]
		const uintS224I55 = BigInt("579")
		const uintiOexhL8 = BigInt("1937")
		const uintpPmNlte = BigInt("606")
		const uintDOIoOL4 = await PRDZstakingV2so4ES12.getNumberOfHolders.call({from: accounts[3]});
		const addressHZ1T3U6 = await PRDZstakingV2so4ES12.transferOwnership.call(addressAhl8Kmk, {from: accounts[0]});
		const uintvfZfjwl = await PRDZstakingV2so4ES12.getTotalFeeCollected.call({from: accounts[4]});
//		const uintLt0ppIA = await PRDZstakingV2so4ES12.stake.call(uintS224I55, {from: "0x0000000000000000000000000000000000000001"});
//		const uintR4C3lif = await PRDZstakingV2so4ES12.stake.call(uintiOexhL8, {from: accounts[3]});
//		const uintjBthy6r = await PRDZstakingV2so4ES12.updateScoreEth.call(uintpPmNlte, {from: accounts[0]});
//		await PRDZstakingV2so4ES12.claimReward.call({from: accounts[1]});
//		const uintgUD5pii = await PRDZstakingV2so4ES12.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintDOIoOL4, BigInt("0"))
		assert.equal(uintvfZfjwl, BigInt("0"))
		await expect(PRDZstakingV2so4ES12.stake.call(uintS224I55, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hhzNs2j = await PRDZstakingV2.new({from: accounts[0]});
		const uintbellYNR = BigInt("0")
//		const uintZHnZCmV = await PRDZstakingV2hhzNs2j.unstake.call(uintbellYNR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2hhzNs2j.unstake.call(uintbellYNR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2so4ES12 = await PRDZstakingV2.new({from: accounts[0]});
		const addressIeam1u4 = accounts[0]
		const addresswPOkvv3 = accounts[0]
		const uintrIvlfFp = BigInt("579")
		const uinte3OhFQ7 = BigInt("1937")
		const uintN7YznEr = BigInt("606")
		const uintDOIoOL4 = await PRDZstakingV2so4ES12.getNumberOfHolders.call({from: accounts[3]});
		const uintTSZyUkM = await PRDZstakingV2so4ES12.getScoreEth.call(addressIeam1u4, {from: accounts[0]});
		const addressHZ1T3U6 = await PRDZstakingV2so4ES12.transferOwnership.call(addresswPOkvv3, {from: accounts[0]});
		const uintvfZfjwl = await PRDZstakingV2so4ES12.getTotalFeeCollected.call({from: accounts[4]});
//		await PRDZstakingV2so4ES12.onlyOwner.call({from: accounts[0]});
//		const uintLt0ppIA = await PRDZstakingV2so4ES12.stake.call(uintrIvlfFp, {from: "0x0000000000000000000000000000000000000001"});
//		const uintR4C3lif = await PRDZstakingV2so4ES12.stake.call(uinte3OhFQ7, {from: accounts[3]});
//		const uintjBthy6r = await PRDZstakingV2so4ES12.updateScoreEth.call(uintN7YznEr, {from: accounts[0]});
//		await PRDZstakingV2so4ES12.claimReward.call({from: accounts[1]});
//		const uintgUD5pii = await PRDZstakingV2so4ES12.getTotalUnStaked.call({from: accounts[3]});

		assert.equal(uintDOIoOL4, BigInt("0"))
		assert.equal(uintTSZyUkM, BigInt("0"))
		assert.equal(uintvfZfjwl, BigInt("0"))
		await expect(PRDZstakingV2so4ES12.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZhVECWA = await PRDZstakingV2.new({from: accounts[0]});
		const addresstRqOoo = accounts[3]
		const uintzZAaC8G = await PRDZstakingV2ZhVECWA.getStakingScore.call(addresstRqOoo, {from: accounts[1]});
//		await PRDZstakingV2ZhVECWA.claimScoreEth.call({from: accounts[3]});

		assert.equal(uintzZAaC8G, BigInt("0"))
		await expect(PRDZstakingV2ZhVECWA.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZhVECWA = await PRDZstakingV2.new({from: accounts[0]});
		const addressGvlva2B = accounts[2]
		const uintOlkEBHA = BigInt("323")
		const uintgKDAlSa = BigInt("1797")
		const addressx2hWIgA = accounts[0]
		const uintBB42fqS = BigInt("1283")
		const uintgAyz64R = BigInt("302")
		const addressySvVVWW = accounts[2]
		const uintQriKi0s = await PRDZstakingV2ZhVECWA.getPendingReward.call(addressGvlva2B, {from: accounts[2]});
		const uintONSnLd = await PRDZstakingV2ZhVECWA.updateOffer.call(uintgKDAlSa, uintOlkEBHA, {from: accounts[0]});
		const uintWkiDQ91 = await PRDZstakingV2ZhVECWA.getStakingScore.call(addressx2hWIgA, {from: accounts[1]});
//		const uintmeVWrrx = await PRDZstakingV2ZhVECWA.unstake.call(uintBB42fqS, {from: accounts[3]});
//		const uintywxULo2 = await PRDZstakingV2ZhVECWA.stake.call(uintgAyz64R, {from: accounts[1]});
//		const uintQ0sJK6E = await PRDZstakingV2ZhVECWA.getScoreEth.call(addressySvVVWW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintQriKi0s, BigInt("0"))
		assert.equal(uintWkiDQ91, BigInt("0"))
		await expect(PRDZstakingV2ZhVECWA.unstake.call(uintBB42fqS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DZVD6kZ = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPcoC5M = BigInt("972")
		const uintWPuYbQo = BigInt("218")
		const uintnk1WXsJ = await PRDZstakingV2DZVD6kZ.getTotalUnStaked.call({from: accounts[2]});
		const uintsLUcxrQ = await PRDZstakingV2DZVD6kZ.getTotalUnStaked.call({from: accounts[1]});
		const uintjuCBLU = await PRDZstakingV2DZVD6kZ.unstake.call(uintPcoC5M, {from: accounts[2]});
		const uintNxGV05n = await PRDZstakingV2DZVD6kZ.updateScoreEth.call(uintWPuYbQo, {from: accounts[4]});
		const uintaIyMsRo = await PRDZstakingV2DZVD6kZ.getTotalUnStaked.call({from: accounts[3]});
		await PRDZstakingV2DZVD6kZ.deposit.call({from: accounts[4]});
	});
})