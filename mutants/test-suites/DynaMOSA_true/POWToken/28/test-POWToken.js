const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenMn6Pdqh = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr0OW27o = BigInt("1061")
		const addressTWU3SfQ = accounts[1]
		const addressYj9R5Cc = accounts[1]
		const boolRLAWajm = await POWTokenMn6Pdqh.approve.call(addressTWU3SfQ, uintr0OW27o, {from: accounts[1]});
		const addressm9nYhvp = await POWTokenMn6Pdqh.transferOwnership.call(addressYj9R5Cc, {from: accounts[0]});
	});

	it('test for POWToken', async () => {
		const POWTokenLrUKQaf = await POWToken.new({from: accounts[0]});
		const uintj3EWWjb = BigInt("1994")
		const addressHaZKGYI = accounts[1]
//		const uint256WTqpPcm = await POWTokenLrUKQaf.addHashRate.call(uintj3EWWjb, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenLrUKQaf.pause.call({from: accounts[4]});
//		await POWTokenLrUKQaf.onlyOwner.call({from: accounts[5]});
//		await POWTokenLrUKQaf.whenNotPaused.call({from: accounts[0]});
//		const addressmvA6PE = await POWTokenLrUKQaf.setBtcParam.call(addressHaZKGYI, {from: accounts[3]});

		await expect(POWTokenLrUKQaf.addHashRate.call(uintj3EWWjb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenq7orKRV = await POWToken.new({from: accounts[1]});
		const uintnwzP9M3 = BigInt("1377")
//		await POWTokenq7orKRV.whenPaused.call({from: accounts[3]});
//		await POWTokenq7orKRV.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenq7orKRV.whenPaused.call({from: accounts[5]});
//		const uint256YBSr61 = await POWTokenq7orKRV.notifyRewardAmount.call(uintnwzP9M3, {from: accounts[3]});

		await expect(POWTokenq7orKRV.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvRTnRsJ = await POWToken.new({from: accounts[3]});
		const uintjp3GKoU = BigInt("15")
//		const uint256Pdz7mt4 = await POWTokenvRTnRsJ.getHistoryWorkingRate.call({from: accounts[0]});
//		await POWTokenvRTnRsJ.whenPaused.call({from: accounts[0]});
//		const uint256MRTToqO = await POWTokenvRTnRsJ.remainingAmount.call({from: accounts[1]});
//		const uint256fm5ZOMp = await POWTokenvRTnRsJ.setStakingRewardRatio.call(uintjp3GKoU, {from: accounts[3]});

		await expect(POWTokenvRTnRsJ.getHistoryWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFXlFcxB = await POWToken.new({from: accounts[3]});
		const uintOMreqQx = BigInt("167")
		const addressjBDdPCl = accounts[2]
		const uintvDTY9Ub = BigInt("2044")
//		const addressDYBdjQM = await POWTokenFXlFcxB.mint.call(addressjBDdPCl, uintOMreqQx, {from: accounts[2]});
//		const uint256PlaAkQM = await POWTokenFXlFcxB.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
//		const uint256UAwLtiu = await POWTokenFXlFcxB.setStartMiningTime.call(uintvDTY9Ub, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenFXlFcxB.mint.call(addressjBDdPCl, uintOMreqQx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniKY3lK5 = await POWToken.new({from: accounts[1]});
		const uintzoM532V = BigInt("268")
		const addressfcVnYYq = accounts[2]
		const uint2566WOPWB = await POWTokeniKY3lK5.remainingAmount.call({from: accounts[0]});
//		const addressO4lVNT = await POWTokeniKY3lK5.claimIncome.call(addressfcVnYYq, uintzoM532V, {from: accounts[2]});

		assert.equal(uint2566WOPWB, BigInt("0"))
		await expect(POWTokeniKY3lK5.claimIncome.call(addressfcVnYYq, uintzoM532V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenizSbGhi = await POWToken.new({from: accounts[2]});
		const addressKqD4GIR = accounts[1]
		const uint256pFRwmBo = await POWTokenizSbGhi.lpStakingRewardRate.call({from: accounts[0]});
//		const addressEGxkyKT = await POWTokenizSbGhi.transferOwnership.call(addressKqD4GIR, {from: accounts[1]});
//		await POWTokenizSbGhi.pause.call({from: accounts[4]});
//		const uint256WuF3660 = await POWTokenizSbGhi.stakingRewardRate.call({from: accounts[0]});

		assert.equal(uint256pFRwmBo, BigInt("0"))
		await expect(POWTokenizSbGhi.transferOwnership.call(addressKqD4GIR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenq7orKRV = await POWToken.new({from: accounts[1]});
		const uintYZ9UXy = BigInt("1004")
		const uintbyrPecc = BigInt("1377")
		const boolkt1Bz1G = await POWTokenq7orKRV.paused.call({from: accounts[3]});
//		await POWTokenq7orKRV.whenPaused.call({from: accounts[3]});
//		await POWTokenq7orKRV.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256bdgihwd = await POWTokenq7orKRV.getCurWorkingRate.call({from: accounts[5]});
//		const uint256OuDY2h = await POWTokenq7orKRV.setStartMiningTime.call(uintYZ9UXy, {from: accounts[2]});
//		await POWTokenq7orKRV.whenPaused.call({from: accounts[5]});
//		const uint256YBSr61 = await POWTokenq7orKRV.notifyRewardAmount.call(uintbyrPecc, {from: accounts[3]});

		assert.equal(boolkt1Bz1G, false)
		await expect(POWTokenq7orKRV.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHWB3fC9 = await POWToken.new({from: accounts[4]});
		const uintaPhXuw1 = BigInt("709")
		const addressarwEzzu = accounts[0]
//		const uint256hjOuIz4 = await POWTokenHWB3fC9.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[5]});
//		const uint256FuVMq5E = await POWTokenHWB3fC9.remainingAmount.call({from: accounts[1]});
//		const addressN3NqKYT = await POWTokenHWB3fC9.inCaseTokensGetStuck.call(addressarwEzzu, uintaPhXuw1, {from: accounts[5]});
//		await POWTokenHWB3fC9.onlyOwner.call({from: accounts[0]});
//		await POWTokenHWB3fC9.onlyOwner.call({from: accounts[0]});

		await expect(POWTokenHWB3fC9.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlBfznLl = await POWToken.new({from: accounts[1]});
		const uintsxNbbIT = BigInt("1405")
		const uintmhiPhZv = BigInt("1948")
		const uint0Swgvf = BigInt("510")
		const uintVQugsOQ = BigInt("710")
		const uintwVUa1Pa = BigInt("1605")
		const addresssIeeXy = accounts[0]
		const addresstETkSXN = accounts[0]
		const addresshqFoT28 = accounts[0]
		const addressx8i2scP = accounts[4]
		const addresssFwWvB1 = accounts[4]
		const addressK11fg3W = accounts[4]
		const addressQs6yNv = "0x0000000000000000000000000000000000000001"
		const addressVPGnRU = accounts[0]
		const stringhBeKOue = "KgzHM9XwCEU8elmns2h3sjWC5goGKCjlmGm8E5uoB53"
		const stringhLIEYlH = "nlX3NMyx4DaNrNVx6R27ZOuygOP5prEpD8eYaa9SGvZySAeGsdF8zJftcrYnkyuh2DXomVYyOs"
		const uintShsXD4x = BigInt("1979")
		const addressrLWur12 = "0x0000000000000000000000000000000000000001"
//		const stringL5PqH6q = await POWTokenlBfznLl.initialize.call(stringhLIEYlH, stringhBeKOue, addressVPGnRU, addressQs6yNv, addressK11fg3W, addresssFwWvB1, addressx8i2scP, addresshqFoT28, addresstETkSXN, addresssIeeXy, uintwVUa1Pa, uintVQugsOQ, uint0Swgvf, uintmhiPhZv, uintsxNbbIT, {from: accounts[4]});
//		const uint256USB8zV = await POWTokenlBfznLl.setDepreciationNumerator.call(uintShsXD4x, {from: "0x0000000000000000000000000000000000000001"});
//		const addresst2LPrqa = await POWTokenlBfznLl.setBtcParam.call(addressrLWur12, {from: accounts[3]});
//		await POWTokenlBfznLl.updateIncomeRate.call({from: accounts[3]});

		await expect(POWTokenlBfznLl.initialize.call(stringhLIEYlH, stringhBeKOue, addressVPGnRU, addressQs6yNv, addressK11fg3W, addresssFwWvB1, addressx8i2scP, addresshqFoT28, addresstETkSXN, addresssIeeXy, uintwVUa1Pa, uintVQugsOQ, uint0Swgvf, uintmhiPhZv, uintsxNbbIT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHWB3fC9 = await POWToken.new({from: accounts[4]});
		const uintP3mEoFe = BigInt("110")
		const addressX3y9fN = accounts[2]
		const uintoEhAFrM = BigInt("704")
		const addressTLU8eNX = accounts[0]
		const boolmKJE7Wi = await POWTokenHWB3fC9.approve.call(addressX3y9fN, uintP3mEoFe, {from: accounts[0]});
//		const uint256orythsn = await POWTokenHWB3fC9.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
//		const uint256hjOuIz4 = await POWTokenHWB3fC9.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[5]});
//		const uint256FuVMq5E = await POWTokenHWB3fC9.remainingAmount.call({from: accounts[1]});
//		const addressN3NqKYT = await POWTokenHWB3fC9.inCaseTokensGetStuck.call(addressTLU8eNX, uintoEhAFrM, {from: accounts[5]});
//		const uint256dgb7KuO = await POWTokenHWB3fC9.getHistoryWorkingRate.call({from: accounts[3]});
//		await POWTokenHWB3fC9.onlyOwner.call({from: accounts[0]});
//		await POWTokenHWB3fC9.onlyOwner.call({from: accounts[0]});

		assert.equal(boolmKJE7Wi, true)
		await expect(POWTokenHWB3fC9.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniKY3lK5 = await POWToken.new({from: accounts[1]});
		const byteB3YQ2mo = "0x0e1c05061e1614080d1c0c1b150e1d070a2003140c0a091c121c0f0d11201f14"
		const byteHLyV53 = "0x0a0d1c09011e12140a1f1a140b13071f061415121e1c0b070b010c0704061a07"
		const uintgu1aCy = BigInt("225")
		const uintACjDrdS = BigInt("1423")
		const uintEIkjv1v = BigInt("116")
		const addressH2C4Tn5 = accounts[3]
		const addressFx0fvbo = accounts[4]
		const uintFBuUeB = BigInt("1621")
		const addressg6Bhi4i = accounts[3]
		const uintRq1F4AN = BigInt("268")
		const addressyZIQq3c = accounts[2]
		const uint2566WOPWB = await POWTokeniKY3lK5.remainingAmount.call({from: accounts[0]});
//		const addresseM9Hplg = await POWTokeniKY3lK5.permit.call(addressFx0fvbo, addressH2C4Tn5, uintEIkjv1v, uintACjDrdS, uintgu1aCy, byteHLyV53, byteB3YQ2mo, {from: accounts[4]});
//		const boolTPdFgHl = await POWTokeniKY3lK5.transfer.call(addressg6Bhi4i, uintFBuUeB, {from: accounts[3]});
//		const addressO4lVNT = await POWTokeniKY3lK5.claimIncome.call(addressyZIQq3c, uintRq1F4AN, {from: accounts[2]});

		assert.equal(uint2566WOPWB, BigInt("0"))
		await expect(POWTokeniKY3lK5.permit.call(addressFx0fvbo, addressH2C4Tn5, uintEIkjv1v, uintACjDrdS, uintgu1aCy, byteHLyV53, byteB3YQ2mo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniKY3lK5 = await POWToken.new({from: accounts[1]});
		const uintUSTH1nn = BigInt("73")
		const addresslCSOcsi = accounts[5]
//		const addressoYwPrKG = await POWTokeniKY3lK5.claimReward.call(addresslCSOcsi, uintUSTH1nn, {from: accounts[5]});
//		await POWTokeniKY3lK5.whenNotPaused.call({from: accounts[2]});
//		const uint2566WOPWB = await POWTokeniKY3lK5.remainingAmount.call({from: accounts[0]});

		await expect(POWTokeniKY3lK5.claimReward.call(addresslCSOcsi, uintUSTH1nn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniKY3lK5 = await POWToken.new({from: accounts[1]});
		const uintFWiBX8k = BigInt("210")
		const addressfSyp6gS = accounts[1]
		const uintOoTX30g = BigInt("1345")
//		const bool2pfD5p = await POWTokeniKY3lK5.transfer.call(addressfSyp6gS, uintFWiBX8k, {from: accounts[2]});
//		const uint256RFdgzy = await POWTokeniKY3lK5.addHashRate.call(uintOoTX30g, {from: accounts[1]});
//		await POWTokeniKY3lK5.whenNotPaused.call({from: accounts[2]});
//		const uint2566WOPWB = await POWTokeniKY3lK5.remainingAmount.call({from: accounts[0]});

		await expect(POWTokeniKY3lK5.transfer.call(addressfSyp6gS, uintFWiBX8k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniKY3lK5 = await POWToken.new({from: accounts[1]});
		const uintFyes1LX = BigInt("49")
		const addressZhukCZ = "0x0000000000000000000000000000000000000001"
		const addressT3iVHMG = accounts[3]
		const uintyucMDU = BigInt("667")
		const uintUPZXFkl = BigInt("229")
		const addressdgvwCap = accounts[2]
//		const boolXtK49pN = await POWTokeniKY3lK5.transferFrom.call(addressT3iVHMG, addressZhukCZ, uintFyes1LX, {from: accounts[0]});
//		const uint256g3BuMrZ = await POWTokeniKY3lK5.setMinerPoolFeeNumerator.call(uintyucMDU, {from: accounts[4]});
//		const addressO4lVNT = await POWTokeniKY3lK5.claimIncome.call(addressdgvwCap, uintUPZXFkl, {from: accounts[2]});

		await expect(POWTokeniKY3lK5.transferFrom.call(addressT3iVHMG, addressZhukCZ, uintFyes1LX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniKY3lK5 = await POWToken.new({from: accounts[1]});
		const uintw3UEr1u = BigInt("268")
		const addressAZwbzvc = accounts[3]
//		await POWTokeniKY3lK5.updateIncomeRate.call({from: accounts[0]});
//		const addressO4lVNT = await POWTokeniKY3lK5.claimIncome.call(addressAZwbzvc, uintw3UEr1u, {from: accounts[2]});

		await expect(POWTokeniKY3lK5.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})