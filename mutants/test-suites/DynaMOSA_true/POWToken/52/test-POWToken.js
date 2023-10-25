const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenQ6KnmJu = await POWToken.new({from: accounts[2]});
		const uintwwcMRVL = BigInt("1762")
		const addressTm4fuQC = accounts[3]
		const uintO5wBjHd = BigInt("1498")
		const uintnlwGZAN = BigInt("372")
		const uintkpSM0q = BigInt("353")
		const uintBRUKlcx = BigInt("1471")
		const uintJRIpV8E = BigInt("228")
		const addressfXX4CRs = accounts[0]
		const addressAFwB11 = accounts[1]
		const addressqVRRdJp = accounts[2]
		const addressO2nHNVp = accounts[0]
		const addressBKp1Vi = accounts[0]
		const addressJQGlQUL = accounts[3]
		const addressAUWrCYb = accounts[3]
		const addressQWf8iF = accounts[2]
		const stringYmJHxZF = "E32q0"
		const stringa7KuWwH = "l8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5"
//		const uint256DhqQP84 = await POWTokenQ6KnmJu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
//		await POWTokenQ6KnmJu.pause.call({from: accounts[2]});
//		const addressXhZqVeO = await POWTokenQ6KnmJu.claimIncome.call(addressTm4fuQC, uintwwcMRVL, {from: accounts[2]});
//		const stringvTMElWV = await POWTokenQ6KnmJu.initialize.call(stringa7KuWwH, stringYmJHxZF, addressQWf8iF, addressAUWrCYb, addressJQGlQUL, addressBKp1Vi, addressO2nHNVp, addressqVRRdJp, addressAFwB11, addressfXX4CRs, uintJRIpV8E, uintBRUKlcx, uintkpSM0q, uintnlwGZAN, uintO5wBjHd, {from: accounts[3]});

		await expect(POWTokenQ6KnmJu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenuxEku28 = await POWToken.new({from: accounts[0]});
		const uintfQqEOQA = BigInt("1228")
//		await POWTokenuxEku28.updateIncomeRate.call({from: accounts[5]});
//		const uint256hOEjfp4 = await POWTokenuxEku28.addHashRate.call(uintfQqEOQA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qFo97Jq = await POWTokenuxEku28.lpStakingRewardRate.call({from: accounts[3]});
//		await POWTokenuxEku28.pause.call({from: accounts[5]});
//		const uint256Rcwoepw = await POWTokenuxEku28.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});

		await expect(POWTokenuxEku28.updateIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenkzxOHWm = await POWToken.new({from: accounts[1]});
		const uinttkYr6tO = BigInt("1290")
		const addressLLjIzeB = accounts[0]
		const addressYpnCBQO = accounts[1]
		const uintQGSBYY7 = BigInt("339")
		const addressun0oLZG = accounts[3]
		const uintTIA9ZQl = BigInt("1227")
		const addressJV6q3sx = accounts[1]
		const addresspd1o5Tq = accounts[1]
//		await POWTokenkzxOHWm.whenPaused.call({from: accounts[3]});
//		const boolGnaHGhZ = await POWTokenkzxOHWm.transferFrom.call(addressYpnCBQO, addressLLjIzeB, uinttkYr6tO, {from: accounts[1]});
//		const boolsmCNzh = await POWTokenkzxOHWm.transfer.call(addressun0oLZG, uintQGSBYY7, {from: accounts[5]});
//		await POWTokenkzxOHWm.whenNotPaused.call({from: accounts[4]});
//		const boolCpG6gzs = await POWTokenkzxOHWm.transferFrom.call(addresspd1o5Tq, addressJV6q3sx, uintTIA9ZQl, {from: accounts[3]});
//		const uint256W7LMw4e = await POWTokenkzxOHWm.lpStakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenkzxOHWm.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDGTP51N = await POWToken.new({from: accounts[1]});
		const uintJGPlEe1 = BigInt("1402")
		const byteYs81p2f = "0x1f12160405000e03071204121b1b1913051b061e05110a05110f1a17030f0e12"
		const bytegTZqPVM = "0x17121d0510141c0107020a040f130b1316171a1a0919140f130a07092017181d"
		const uintvVG7bX = BigInt("144")
		const uintBiUHCDn = BigInt("432")
		const uintAs8I0yq = BigInt("1409")
		const addressDgoSkT = accounts[5]
		const addressn4hnoNy = accounts[0]
		const uintSupDfP7 = BigInt("3")
		const addressn5o9Zi = accounts[3]
		const uint256WNCttxX = await POWTokenDGTP51N.remainingAmount.call({from: accounts[1]});
//		const uint256r6boDpb = await POWTokenDGTP51N.setDepreciationNumerator.call(uintJGPlEe1, {from: accounts[5]});
//		const addressIdABM1e = await POWTokenDGTP51N.permit.call(addressn4hnoNy, addressDgoSkT, uintAs8I0yq, uintBiUHCDn, uintvVG7bX, bytegTZqPVM, byteYs81p2f, {from: accounts[4]});
//		const addressiGlmzrC = await POWTokenDGTP51N.mint.call(addressn5o9Zi, uintSupDfP7, {from: accounts[2]});

		assert.equal(uint256WNCttxX, BigInt("0"))
		await expect(POWTokenDGTP51N.setDepreciationNumerator.call(uintJGPlEe1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenbnYpcEQ = await POWToken.new({from: accounts[2]});
		const uintf5YMXgq = BigInt("1068")
		const uintGC07RmM = BigInt("1960")
		const uintRQWYwsc = BigInt("972")
		const uintwKD44W = BigInt("1404")
//		const uint256YeIKgfL = await POWTokenbnYpcEQ.notifyRewardAmount.call(uintf5YMXgq, {from: accounts[3]});
//		const uint256r2sP05j = await POWTokenbnYpcEQ.setWorkingHashRate.call(uintGC07RmM, {from: accounts[0]});
//		const uint256koiLJf6 = await POWTokenbnYpcEQ.notifyRewardAmount.call(uintRQWYwsc, {from: accounts[3]});
//		const uint256lEFXI6 = await POWTokenbnYpcEQ.notifyRewardAmount.call(uintwKD44W, {from: accounts[4]});
//		const uint256HRlXbL = await POWTokenbnYpcEQ.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		await expect(POWTokenbnYpcEQ.notifyRewardAmount.call(uintf5YMXgq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenL4BOi8o = await POWToken.new({from: accounts[4]});
		const uintYI2LvMr = BigInt("1079")
		const addressq7sTbD9 = accounts[2]
		const uintSViQoFI = BigInt("275")
		const addressTVG65P = "0x0000000000000000000000000000000000000001"
		const addressRIsQA6 = accounts[3]
		const addresshpH03Hb = "0x0000000000000000000000000000000000000001"
		const uintqAe8yRL = BigInt("1112")
		const uinttNybCT4 = BigInt("1018")
		const uintXIg3K3S = BigInt("1300")
		const uintzjzMnPt = BigInt("1293")
		const uintA9A6Un1 = BigInt("1762")
		const addresswWwhWET = accounts[5]
		const addressfjCxOJ = accounts[2]
		const addressQZVSifl = accounts[0]
		const addressyUnpUTs = accounts[4]
		const addressDkbW6QJ = accounts[4]
		const addressMXBbc6A = accounts[1]
		const addressQsFTWbH = accounts[4]
		const addressOVmuMTF = accounts[2]
		const stringRXVEIMW = "pR9nRDxl"
		const string0nxSjB = "DpwElMdqvfUDM4nv3sc7bTMpFs"
		const uint2561Fm7pV = await POWTokenL4BOi8o.stakingRewardRate.call({from: accounts[4]});
//		const addressyQz16a = await POWTokenL4BOi8o.mint.call(addressq7sTbD9, uintYI2LvMr, {from: accounts[3]});
//		const addressJ4jF23u = await POWTokenL4BOi8o.claimReward.call(addressTVG65P, uintSViQoFI, {from: accounts[0]});
//		const addressP3G1E0h = await POWTokenL4BOi8o.setBtcParam.call(addressRIsQA6, {from: accounts[0]});
//		const addressPNhm2gz = await POWTokenL4BOi8o.setBtcParam.call(addresshpH03Hb, {from: accounts[3]});
//		const stringZ0Go0eU = await POWTokenL4BOi8o.initialize.call(string0nxSjB, stringRXVEIMW, addressOVmuMTF, addressQsFTWbH, addressMXBbc6A, addressDkbW6QJ, addressyUnpUTs, addressQZVSifl, addressfjCxOJ, addresswWwhWET, uintA9A6Un1, uintzjzMnPt, uintXIg3K3S, uinttNybCT4, uintqAe8yRL, {from: accounts[2]});

		assert.equal(uint2561Fm7pV, BigInt("0"))
		await expect(POWTokenL4BOi8o.mint.call(addressq7sTbD9, uintYI2LvMr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentrtUrh = await POWToken.new({from: accounts[1]});
		const uintESfTr2v = BigInt("713")
		const uintQ6EOTur = BigInt("395")
		const byter7S32uc = "0x171515091f1d00101808070c03120a190c1a160a0c200c04181f060f14031518"
		const byteCrqcVj6 = "0x1e09121c1213040e0f071b07190d1f061b15051919091e08110c0f19081c0818"
		const uintPptWMLJ = BigInt("43")
		const uintSEmVkg = BigInt("114")
		const uintFC72mSJ = BigInt("991")
		const addressCrTzMHA = accounts[4]
		const addressRUWI9Bh = accounts[3]
		const addressmXLdoy0 = accounts[1]
//		const uint256tgbmvjD = await POWTokentrtUrh.getCurWorkingRate.call({from: accounts[2]});
//		const uint256XHhlmIX = await POWTokentrtUrh.notifyRewardAmount.call(uintESfTr2v, {from: accounts[1]});
//		const uint256yWbBEQr = await POWTokentrtUrh.setWorkingHashRate.call(uintQ6EOTur, {from: accounts[4]});
//		const addressr2h9Zn = await POWTokentrtUrh.permit.call(addressRUWI9Bh, addressCrTzMHA, uintFC72mSJ, uintSEmVkg, uintPptWMLJ, byteCrqcVj6, byter7S32uc, {from: accounts[0]});
//		const addresspK2b6M = await POWTokentrtUrh.setBtcParam.call(addressmXLdoy0, {from: accounts[3]});

		await expect(POWTokentrtUrh.getCurWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrfGKdhL = await POWToken.new({from: accounts[5]});
		const uintO38vvV = BigInt("1551")
		const uint256REUTWn = await POWTokenrfGKdhL.lpStakingRewardRate.call({from: accounts[2]});
//		await POWTokenrfGKdhL.onlyOwner.call({from: accounts[1]});
//		const uint256EbKTLLA = await POWTokenrfGKdhL.setStartMiningTime.call(uintO38vvV, {from: accounts[0]});
//		const uint256hvem7ZL = await POWTokenrfGKdhL.getHistoryWorkingRate.call({from: accounts[2]});

		assert.equal(uint256REUTWn, BigInt("0"))
		await expect(POWTokenrfGKdhL.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqUocvrz = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256wwWOpw = await POWTokenqUocvrz.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
		const uint256JdHTg0R = await POWTokenqUocvrz.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		await POWTokenqUocvrz.updateIncomeRate.call({from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokenQ6KnmJu = await POWToken.new({from: accounts[2]});
		const uintZUaVDrG = BigInt("1498")
		const uintKtoBguS = BigInt("372")
		const uintUcbLjtX = BigInt("353")
		const uintFlv7I5m = BigInt("1471")
		const uintmlBbFR1 = BigInt("228")
		const addressJ0wsqMy = accounts[0]
		const addressRQ8oX6J = accounts[1]
		const addressa8qlUr6 = accounts[2]
		const addressFBekEm = accounts[0]
		const addresshQNlR2a = accounts[0]
		const addresstQMXDU = accounts[3]
		const addressA4RodYG = accounts[3]
		const addressVDKuvZt = accounts[2]
		const stringYmJHxZF = "E32q0"
		const stringa7KuWwH = "l8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5"
//		const stringvTMElWV = await POWTokenQ6KnmJu.initialize.call(stringa7KuWwH, stringYmJHxZF, addressVDKuvZt, addressA4RodYG, addresstQMXDU, addresshQNlR2a, addressFBekEm, addressa8qlUr6, addressRQ8oX6J, addressJ0wsqMy, uintmlBbFR1, uintFlv7I5m, uintUcbLjtX, uintKtoBguS, uintZUaVDrG, {from: accounts[3]});

		await expect(POWTokenQ6KnmJu.initialize.call(stringa7KuWwH, stringYmJHxZF, addressVDKuvZt, addressA4RodYG, addresstQMXDU, addresshQNlR2a, addressFBekEm, addressa8qlUr6, addressRQ8oX6J, addressJ0wsqMy, uintmlBbFR1, uintFlv7I5m, uintUcbLjtX, uintKtoBguS, uintZUaVDrG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDGTP51N = await POWToken.new({from: accounts[1]});
		const uintssya7eM = BigInt("1623")
		const addressjUthA5 = accounts[0]
		const uinta5Uatco = BigInt("1350")
		const uintJwsZkMc = BigInt("3")
		const addressaoox1Z3 = accounts[3]
		const boolPlBW4kL = await POWTokenDGTP51N.approve.call(addressjUthA5, uintssya7eM, {from: accounts[4]});
		const uint256WNCttxX = await POWTokenDGTP51N.remainingAmount.call({from: accounts[1]});
		const uint256zej971N = await POWTokenDGTP51N.lpStakingRewardRate.call({from: accounts[4]});
//		const uint256r6boDpb = await POWTokenDGTP51N.setDepreciationNumerator.call(uinta5Uatco, {from: accounts[5]});
//		const addressiGlmzrC = await POWTokenDGTP51N.mint.call(addressaoox1Z3, uintJwsZkMc, {from: accounts[2]});

		assert.equal(boolPlBW4kL, true)
		assert.equal(uint256WNCttxX, BigInt("0"))
		assert.equal(uint256zej971N, BigInt("0"))
		await expect(POWTokenDGTP51N.setDepreciationNumerator.call(uinta5Uatco, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQ6KnmJu = await POWToken.new({from: accounts[2]});
//		const uint256ZDBXVvJ = await POWTokenQ6KnmJu.getHistoryWorkingRate.call({from: accounts[1]});
//		const uint256IMfMaBS = await POWTokenQ6KnmJu.stakingRewardRate.call({from: accounts[3]});
//		const uint256DhqQP84 = await POWTokenQ6KnmJu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});

		await expect(POWTokenQ6KnmJu.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDGTP51N = await POWToken.new({from: accounts[1]});
		const uintpSZTryf = BigInt("617")
		const addresskQ1UjQ = accounts[3]
		const uintuMcL6e5 = BigInt("780")
		const addressTAuuR0A = accounts[1]
		const uintTc4btG = BigInt("1331")
		const uint256WNCttxX = await POWTokenDGTP51N.remainingAmount.call({from: accounts[1]});
//		const boolC6G3C0G = await POWTokenDGTP51N.transfer.call(addresskQ1UjQ, uintpSZTryf, {from: accounts[0]});
//		const booln0UmqRi = await POWTokenDGTP51N.approve.call(addressTAuuR0A, uintuMcL6e5, {from: accounts[1]});
//		const uint256r6boDpb = await POWTokenDGTP51N.setDepreciationNumerator.call(uintTc4btG, {from: accounts[5]});

		assert.equal(uint256WNCttxX, BigInt("0"))
		await expect(POWTokenDGTP51N.transfer.call(addresskQ1UjQ, uintpSZTryf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQ6KnmJu = await POWToken.new({from: accounts[2]});
		const uintdRNggqN = BigInt("637")
		const addressRGfgsQ9 = accounts[2]
		const uintKmTuxmJ = BigInt("1498")
		const uintj67Qw9K = BigInt("372")
		const uintokHzWAU = BigInt("353")
		const uintvC04MKB = BigInt("1471")
		const uintRoGueR = BigInt("228")
		const addressQzX3dj6 = accounts[0]
		const addressHVdlaZ8 = accounts[1]
		const addressHPo0HHw = accounts[2]
		const addressJON9mLI = accounts[0]
		const addressQ69Cwt = accounts[1]
		const addressSeXbYxA = accounts[3]
		const addressCRvGRFi = accounts[3]
		const addressVb4ghLF = accounts[2]
		const stringYmJHxZF = "E32yq0"
		const stringa7KuWwH = "l8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5"
//		const addressCa12Mcn = await POWTokenQ6KnmJu.claimReward.call(addressRGfgsQ9, uintdRNggqN, {from: accounts[0]});
//		const stringvTMElWV = await POWTokenQ6KnmJu.initialize.call(stringa7KuWwH, stringYmJHxZF, addressVb4ghLF, addressCRvGRFi, addressSeXbYxA, addressQ69Cwt, addressJON9mLI, addressHPo0HHw, addressHVdlaZ8, addressQzX3dj6, uintRoGueR, uintvC04MKB, uintokHzWAU, uintj67Qw9K, uintKmTuxmJ, {from: accounts[3]});

		await expect(POWTokenQ6KnmJu.claimReward.call(addressRGfgsQ9, uintdRNggqN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenuxEku28 = await POWToken.new({from: accounts[0]});
		const uinteiVXuD = BigInt("1228")
		const uintTa1LwS = BigInt("734")
//		const uint256i4eyPC = await POWTokenuxEku28.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
//		await POWTokenuxEku28.updateIncomeRate.call({from: accounts[5]});
//		const uint256hOEjfp4 = await POWTokenuxEku28.addHashRate.call(uinteiVXuD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qFo97Jq = await POWTokenuxEku28.lpStakingRewardRate.call({from: accounts[3]});
//		const uint256FGXoaw3 = await POWTokenuxEku28.addHashRate.call(uintTa1LwS, {from: accounts[1]});
//		await POWTokenuxEku28.pause.call({from: accounts[5]});
//		const uint256Rcwoepw = await POWTokenuxEku28.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});

		await expect(POWTokenuxEku28.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfKU00QS = await POWToken.new({from: accounts[3]});
		const byterReCiBf = "0x131004071511041f030d00121d011e0503121305140a1703140b01080712151b"
		const byte3nDegK = "0x1b031612010914171717021a1402070219190e111b16120c19151c010b0d1607"
		const uintZKtp566 = BigInt("187")
		const uintgWzXf5r = BigInt("1230")
		const uintwm6EwWb = BigInt("1006")
		const addressy1oVY1x = accounts[0]
		const addressNSa0UJw = "0x0000000000000000000000000000000000000001"
		const uintjsQKkSk = BigInt("812")
		const addressrvI1rVB = accounts[2]
		const uintPQPvpge = BigInt("1493")
		const addressZicBqw = accounts[4]
		const uint256TFodpXF = await POWTokenfKU00QS.remainingAmount.call({from: accounts[5]});
//		const addressvZdWjn5 = await POWTokenfKU00QS.permit.call(addressNSa0UJw, addressy1oVY1x, uintwm6EwWb, uintgWzXf5r, uintZKtp566, byte3nDegK, byterReCiBf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256gVHN7Tc = await POWTokenfKU00QS.setMinerPoolFeeNumerator.call(uintjsQKkSk, {from: accounts[2]});
//		const addressFn1SdaT = await POWTokenfKU00QS.transferOwnership.call(addressrvI1rVB, {from: accounts[0]});
//		const boolpad7lch = await POWTokenfKU00QS.transfer.call(addressZicBqw, uintPQPvpge, {from: accounts[5]});

		assert.equal(uint256TFodpXF, BigInt("0"))
		await expect(POWTokenfKU00QS.permit.call(addressNSa0UJw, addressy1oVY1x, uintwm6EwWb, uintgWzXf5r, uintZKtp566, byte3nDegK, byterReCiBf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQ6KnmJu = await POWToken.new({from: accounts[2]});
		const uintIcXykWC = BigInt("1823")
		const addressebPdWJ = accounts[2]
		const addressPjorGwI = accounts[0]
		const uintJy6SQH1 = BigInt("612")
		const addressC5lKgEV = accounts[2]
		const uintz7xHmXv = BigInt("1498")
		const uintwTCoO9y = BigInt("372")
		const uintffnkbX8 = BigInt("353")
		const uintu5M3QwI = BigInt("1471")
		const uintgYfJGfc = BigInt("228")
		const addresseXwzWyW = accounts[0]
		const addressdnrX3v = accounts[1]
		const addressCfcVQ1y = accounts[2]
		const addressHTT4TLU = accounts[0]
		const addresskwWa2o6 = accounts[1]
		const addressAwSyNPN = accounts[3]
		const addressQnk9E5 = accounts[3]
		const addressHUedG1w = accounts[2]
		const stringYmJHxZF = "E32yq0"
		const stringa7KuWwH = "l8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5"
//		const boolqhNNd9j = await POWTokenQ6KnmJu.transferFrom.call(addressPjorGwI, addressebPdWJ, uintIcXykWC, {from: accounts[0]});
//		const addressCa12Mcn = await POWTokenQ6KnmJu.claimReward.call(addressC5lKgEV, uintJy6SQH1, {from: accounts[0]});
//		const stringvTMElWV = await POWTokenQ6KnmJu.initialize.call(stringa7KuWwH, stringYmJHxZF, addressHUedG1w, addressQnk9E5, addressAwSyNPN, addresskwWa2o6, addressHTT4TLU, addressCfcVQ1y, addressdnrX3v, addresseXwzWyW, uintgYfJGfc, uintu5M3QwI, uintffnkbX8, uintwTCoO9y, uintz7xHmXv, {from: accounts[3]});

		await expect(POWTokenQ6KnmJu.transferFrom.call(addressPjorGwI, addressebPdWJ, uintIcXykWC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQ6KnmJu = await POWToken.new({from: accounts[2]});
		const boolIEpoIMW = await POWTokenQ6KnmJu.paused.call({from: accounts[1]});
//		const uint256ZDBXVvJ = await POWTokenQ6KnmJu.getHistoryWorkingRate.call({from: accounts[1]});
//		const uint256DhqQP84 = await POWTokenQ6KnmJu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});

		assert.equal(boolIEpoIMW, false)
		await expect(POWTokenQ6KnmJu.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfKU00QS = await POWToken.new({from: accounts[3]});
		const uintnSJ6bYK = BigInt("1733")
		const addressS68hmjB = accounts[1]
		const byteAioL3xY = "0x131004071511041f030d00121d011e0503121305140a1703140b01080712151b"
		const byteVdPpbWz = "0x1b031612010914171717011a1402070219190e111b16120c19151c010b0d1607"
		const uintE8hjnhX = BigInt("187")
		const uintktb5Ono = BigInt("1230")
		const uintBaunKOw = BigInt("1006")
		const addressdZx8pKZ = accounts[0]
		const addressddAqWUN = "0x0000000000000000000000000000000000000001"
		const addresscN0XZX1 = accounts[4]
		const uint0bbBbi = BigInt("1493")
		const addressuIWWPz7 = accounts[4]
		const uint256TFodpXF = await POWTokenfKU00QS.remainingAmount.call({from: accounts[5]});
//		const addressyWgJ6t = await POWTokenfKU00QS.claimIncome.call(addressS68hmjB, uintnSJ6bYK, {from: accounts[2]});
//		const addressvZdWjn5 = await POWTokenfKU00QS.permit.call(addressddAqWUN, addressdZx8pKZ, uintBaunKOw, uintktb5Ono, uintE8hjnhX, byteVdPpbWz, byteAioL3xY, {from: "0x0000000000000000000000000000000000000001"});
//		const addressDhTKHvx = await POWTokenfKU00QS.setParamSetter.call(addresscN0XZX1, {from: accounts[3]});
//		const boolpad7lch = await POWTokenfKU00QS.transfer.call(addressuIWWPz7, uint0bbBbi, {from: accounts[5]});

		assert.equal(uint256TFodpXF, BigInt("0"))
		await expect(POWTokenfKU00QS.claimIncome.call(addressS68hmjB, uintnSJ6bYK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})