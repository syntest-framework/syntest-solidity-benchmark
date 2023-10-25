const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenpFr9ffL = await POWToken.new({from: accounts[2]});
		const uintVMbUiyF = BigInt("71")
		const address0NBJjy = accounts[4]
		const uintQnvqqHm = BigInt("371")
		const uintoYQSnGR = BigInt("1588")
		const uint8NkGgz = BigInt("252")
		const boolzejHq68 = await POWTokenpFr9ffL.transfer.call(address0NBJjy, uintVMbUiyF, {from: accounts[0]});
		const uint256A17Y2K2 = await POWTokenpFr9ffL.setStakingRewardRatio.call(uintQnvqqHm, {from: accounts[2]});
		const uint256nAhqHzD = await POWTokenpFr9ffL.getHistoryWorkingRate.call({from: accounts[3]});
		const uint256jiwFFvL = await POWTokenpFr9ffL.setStartMiningTime.call(uintoYQSnGR, {from: accounts[3]});
		const uint256xFyfrr2 = await POWTokenpFr9ffL.setStakingRewardRatio.call(uint8NkGgz, {from: accounts[3]});

		await expect(POWTokenpFr9ffL.transfer.call(address0NBJjy, uintVMbUiyF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenLFXIagz = await POWToken.new({from: accounts[1]});
		const uintg5SoeIP = BigInt("369")
		const addressJIBeD9l = accounts[4]
		const uintDUyRrUd = BigInt("1266")
		const addressFyjgBeJ = accounts[1]
		const uinthJ0mZwy = BigInt("780")
		const addresswDMAZ6D = accounts[4]
		const addresswzH0Dbh = await POWTokenLFXIagz.mint.call(addressJIBeD9l, uintg5SoeIP, {from: accounts[0]});
		const uint256lVw3QV0 = await POWTokenLFXIagz.lpStakingRewardRate.call({from: accounts[2]});
		const addresskvx4kP = await POWTokenLFXIagz.inCaseTokensGetStuck.call(addressFyjgBeJ, uintDUyRrUd, {from: accounts[2]});
		const uint256DxwJJi = await POWTokenLFXIagz.setDepreciationNumerator.call(uinthJ0mZwy, {from: accounts[4]});
		const addressGeRItB = await POWTokenLFXIagz.transferOwnership.call(addresswDMAZ6D, {from: accounts[1]});

		await expect(POWTokenLFXIagz.mint.call(addressJIBeD9l, uintg5SoeIP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const uinthp6waJ = BigInt("1273")
		const uint256nWjMBqA = await POWTokenJGTpEsM.setStartMiningTime.call(uinthp6waJ, {from: accounts[2]});
		const uint256ixZ0O3 = await POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]});

		await expect(POWTokenJGTpEsM.setStartMiningTime.call(uinthp6waJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken0fkNSm = await POWToken.new({from: accounts[4]});
		const uintgFpv5wM = BigInt("757")
		const uintCglbx4t = BigInt("698")
		const uintrlpBZW6 = BigInt("1364")
		const uint256H3ypv5D = await POWToken0fkNSm.stakingRewardRate.call({from: accounts[3]});
		const uint256gj0dF9W = await POWToken0fkNSm.addHashRate.call(uintgFpv5wM, {from: accounts[0]});
		await POWToken0fkNSm.updateIncomeRate.call({from: accounts[1]});
		const uint256xJMkF7 = await POWToken0fkNSm.setDepreciationNumerator.call(uintCglbx4t, {from: accounts[2]});
		const uint256AoCUvY2 = await POWToken0fkNSm.notifyRewardAmount.call(uintrlpBZW6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256H3ypv5D, BigInt("0"))
		await expect(POWToken0fkNSm.addHashRate.call(uintgFpv5wM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDD221UV = await POWToken.new({from: accounts[4]});
		const uint256otGESml = await POWTokenDD221UV.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		await POWTokenDD221UV.onlyOwner.call({from: accounts[4]});
		const boolw83xTLm = await POWTokenDD221UV.paused.call({from: accounts[3]});
		await POWTokenDD221UV.unpause.call({from: accounts[3]});

		await expect(POWTokenDD221UV.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQFGVm0E = await POWToken.new({from: accounts[4]});
		const uintSC6kB51 = BigInt("196")
		const uinty4SsCjT = BigInt("1548")
		const addressEkezD7S = accounts[4]
		const uintOlnZWFO = BigInt("439")
		const address290SH8 = accounts[2]
		const uint256zb7QuLo = await POWTokenQFGVm0E.setStakingRewardRatio.call(uintSC6kB51, {from: accounts[2]});
		const bool5EVHPZ = await POWTokenQFGVm0E.transfer.call(addressEkezD7S, uinty4SsCjT, {from: accounts[3]});
		const addresszsP7ri = await POWTokenQFGVm0E.claimIncome.call(address290SH8, uintOlnZWFO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenQFGVm0E.setStakingRewardRatio.call(uintSC6kB51, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenA2rQTZ = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressI4bMasQ = accounts[5]
		const uintINNBPS0 = BigInt("1624")
		const uintm9E0OEm = BigInt("864")
		const addresszsNPZ6h = accounts[4]
		const addressSdpEZsu = await POWTokenA2rQTZ.setParamSetter.call(addressI4bMasQ, {from: accounts[1]});
		const uint256SDqbnBh = await POWTokenA2rQTZ.setStakingRewardRatio.call(uintINNBPS0, {from: accounts[4]});
		const boolBjZVRA3 = await POWTokenA2rQTZ.transfer.call(addresszsNPZ6h, uintm9E0OEm, {from: accounts[4]});
		const uint256LArSRkg = await POWTokenA2rQTZ.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenPqSWJA1 = await POWToken.new({from: accounts[5]});
		const byteocXBbMB = "0x12171a160b100f15091c071a0e0717130c000f0a1c04001d0409171e14051919"
		const byte3WkuNz = "0x1610141c0b08111919081c1917100f190f140d151f061f0a10171818120e0519"
		const uintjof6ip = BigInt("28")
		const uintDLFcPLw = BigInt("1530")
		const uinteqlF9Jj = BigInt("2003")
		const addresslH5NS5p = accounts[1]
		const addressAsU4fOm = accounts[0]
		const uintAVCKuZO = BigInt("1566")
		const uintFBY8aO1 = BigInt("104")
		const addressHLF6gwd = accounts[4]
		const uinthHoJjBK = BigInt("55")
		const uintSZvdEt = BigInt("1767")
		const uint256bsHaKG9 = await POWTokenPqSWJA1.stakingRewardRate.call({from: accounts[3]});
		const addressy30bR0f = await POWTokenPqSWJA1.permit.call(addressAsU4fOm, addresslH5NS5p, uinteqlF9Jj, uintDLFcPLw, uintjof6ip, byte3WkuNz, byteocXBbMB, {from: accounts[4]});
		const uint256AValgS5 = await POWTokenPqSWJA1.setStartMiningTime.call(uintAVCKuZO, {from: accounts[0]});
		const addressz3MBafw = await POWTokenPqSWJA1.mint.call(addressHLF6gwd, uintFBY8aO1, {from: accounts[4]});
		const uint256SubyiMZ = await POWTokenPqSWJA1.notifyRewardAmount.call(uinthHoJjBK, {from: accounts[1]});
		const uint256OnNtOyf = await POWTokenPqSWJA1.setStartMiningTime.call(uintSZvdEt, {from: accounts[2]});

		assert.equal(uint256bsHaKG9, BigInt("0"))
		await expect(POWTokenPqSWJA1.permit.call(addressAsU4fOm, addresslH5NS5p, uinteqlF9Jj, uintDLFcPLw, uintjof6ip, byte3WkuNz, byteocXBbMB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken0fkNSm = await POWToken.new({from: accounts[4]});
		const uintUMzxnF1 = BigInt("698")
		const uintDTZxUi7 = BigInt("1364")
		const uint256H3ypv5D = await POWToken0fkNSm.stakingRewardRate.call({from: accounts[3]});
		await POWToken0fkNSm.updateIncomeRate.call({from: accounts[1]});
		const uint25635vjKK = await POWToken0fkNSm.getCurWorkingRate.call({from: accounts[2]});
		const uint256xJMkF7 = await POWToken0fkNSm.setDepreciationNumerator.call(uintUMzxnF1, {from: accounts[2]});
		const uint256AoCUvY2 = await POWToken0fkNSm.notifyRewardAmount.call(uintDTZxUi7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256H3ypv5D, BigInt("0"))
		await expect(POWToken0fkNSm.updateIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const uinto7id6p1 = BigInt("1273")
		const uint256bYuryXe = await POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]});
		const uint256nWjMBqA = await POWTokenJGTpEsM.setStartMiningTime.call(uinto7id6p1, {from: accounts[2]});
		const uint256ixZ0O3 = await POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]});

		await expect(POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPqSWJA1 = await POWToken.new({from: accounts[5]});
		const uintOJVO4hQ = BigInt("1841")
		const addressrQu6eKE = accounts[0]
		const byteSHU9aA = "0x0706190503140909080e0d04110b140d010f021b02201c041b09180e0f0b150e"
		const byteJ6AtomH = "0x1610141c0b08111919081c1917100f190f140d151f061f0a10171818120e0519"
		const uintuU0JbAM = BigInt("28")
		const uintwAlwDk = BigInt("1530")
		const uintxOdNqJG = BigInt("2003")
		const addressS0Fk31 = accounts[1]
		const addressJcYEDFV = accounts[0]
		const uintIMkIdk0 = BigInt("190")
		const addressMf7lyqP = accounts[1]
		const uintXf8wwWF = BigInt("1566")
		const uintXNDMaK1 = BigInt("104")
		const addresshFjUht = accounts[4]
		const uintWi6MUkG = BigInt("55")
		const uintnNQu4ul = BigInt("1767")
		const uint256bsHaKG9 = await POWTokenPqSWJA1.stakingRewardRate.call({from: accounts[3]});
		const addressTDxqgdr = await POWTokenPqSWJA1.claimReward.call(addressrQu6eKE, uintOJVO4hQ, {from: accounts[2]});
		const addressy30bR0f = await POWTokenPqSWJA1.permit.call(addressJcYEDFV, addressS0Fk31, uintxOdNqJG, uintwAlwDk, uintuU0JbAM, byteJ6AtomH, byteSHU9aA, {from: accounts[4]});
		const addressLkhxdrJ = await POWTokenPqSWJA1.claimIncome.call(addressMf7lyqP, uintIMkIdk0, {from: accounts[2]});
		await POWTokenPqSWJA1.whenNotPaused.call({from: accounts[4]});
		const uint256AValgS5 = await POWTokenPqSWJA1.setStartMiningTime.call(uintXf8wwWF, {from: accounts[0]});
		const addressz3MBafw = await POWTokenPqSWJA1.mint.call(addresshFjUht, uintXNDMaK1, {from: accounts[4]});
		const uint256SubyiMZ = await POWTokenPqSWJA1.notifyRewardAmount.call(uintWi6MUkG, {from: accounts[1]});
		const uint256OnNtOyf = await POWTokenPqSWJA1.setStartMiningTime.call(uintnNQu4ul, {from: accounts[2]});

		assert.equal(uint256bsHaKG9, BigInt("0"))
		await expect(POWTokenPqSWJA1.claimReward.call(addressrQu6eKE, uintOJVO4hQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const uintnw9XA8W = BigInt("1273")
		const uint256PJbpG8O = await POWTokenJGTpEsM.stakingRewardRate.call({from: accounts[4]});
		await POWTokenJGTpEsM.whenPaused.call({from: accounts[4]});
		const uint256nWjMBqA = await POWTokenJGTpEsM.setStartMiningTime.call(uintnw9XA8W, {from: accounts[2]});
		await POWTokenJGTpEsM.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256PJbpG8O, BigInt("0"))
		await expect(POWTokenJGTpEsM.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const uintGFIoCtE = BigInt("918")
		const addressEqlywBS = accounts[0]
		const addressNokW3bf = accounts[2]
		const boolKKVSTB7 = await POWTokenJGTpEsM.transferFrom.call(addressNokW3bf, addressEqlywBS, uintGFIoCtE, {from: accounts[0]});
		const uint256xhLEN0m = await POWTokenJGTpEsM.stakingRewardRate.call({from: accounts[1]});
		const uint256TFvLGtl = await POWTokenJGTpEsM.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const uint256ixZ0O3 = await POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]});

		await expect(POWTokenJGTpEsM.transferFrom.call(addressNokW3bf, addressEqlywBS, uintGFIoCtE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const addressq5Z6EHs = accounts[1]
		const uint256xhLEN0m = await POWTokenJGTpEsM.stakingRewardRate.call({from: accounts[1]});
		const uint256P20HDSw = await POWTokenJGTpEsM.remainingAmount.call({from: accounts[4]});
		const uint256TFvLGtl = await POWTokenJGTpEsM.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const uint256ixZ0O3 = await POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]});
		const addressWh6XcK7 = await POWTokenJGTpEsM.setParamSetter.call(addressq5Z6EHs, {from: accounts[4]});

		assert.equal(uint256P20HDSw, BigInt("0"))
		assert.equal(uint256xhLEN0m, BigInt("0"))
		await expect(POWTokenJGTpEsM.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenthAWQwS = await POWToken.new({from: accounts[2]});
		const uintgK1j3fM = BigInt("338")
		const uintu2Hu6eF = BigInt("1559")
		const uint256caB22r5 = await POWTokenthAWQwS.stakingRewardRate.call({from: accounts[4]});
		const uint256JYSzFbA = await POWTokenthAWQwS.getHistoryWorkingRate.call({from: accounts[4]});
		const uint256c4Fz6lZ = await POWTokenthAWQwS.setDepreciationNumerator.call(uintgK1j3fM, {from: accounts[2]});
		const uint256tpr9qS7 = await POWTokenthAWQwS.setMinerPoolFeeNumerator.call(uintu2Hu6eF, {from: accounts[0]});

		assert.equal(uint256caB22r5, BigInt("0"))
		await expect(POWTokenthAWQwS.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const uintfebHyHx = BigInt("1599")
		const addressHykd6N = accounts[1]
		const uintuDg2fCd = BigInt("1303")
		const addressIZnpIs = await POWTokenJGTpEsM.claimIncome.call(addressHykd6N, uintfebHyHx, {from: accounts[2]});
		const uint256xhLEN0m = await POWTokenJGTpEsM.stakingRewardRate.call({from: accounts[1]});
		const uint256ixZ0O3 = await POWTokenJGTpEsM.getCurWorkingRate.call({from: accounts[1]});
		const uint256Z6ikEGM = await POWTokenJGTpEsM.setStakingRewardRatio.call(uintuDg2fCd, {from: accounts[4]});
		await POWTokenJGTpEsM.whenNotPaused.call({from: accounts[5]});

		await expect(POWTokenJGTpEsM.claimIncome.call(addressHykd6N, uintfebHyHx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken0fkNSm = await POWToken.new({from: accounts[4]});
		const uintmUejm1 = BigInt("1801")
		const uintaO4PCB7 = BigInt("1372")
		const uintCYdqCTo = BigInt("1732")
		const uintv1zJCZf = BigInt("787")
		const uintgCUSfx3 = BigInt("1580")
		const addresseoSeizE = accounts[5]
		const addressK60dKRG = accounts[0]
		const addressMKQjLiR = accounts[0]
		const addressPm9PEgE = "0x0000000000000000000000000000000000000001"
		const addressrP8ixtE = "0x0000000000000000000000000000000000000001"
		const addressAjbe7t = accounts[5]
		const addressIrKbIdH = accounts[1]
		const addressEEjcgK = accounts[0]
		const stringWFNagWA = "rMn"
		const strings05JB0F = "W5fEHqPVsaNGuMwnxhupJYPMEhOU7rQfrmO"
		const uintNjcJsLY = BigInt("698")
		const uintzxvn1ei = BigInt("1364")
		const stringpxMEFYO = await POWToken0fkNSm.initialize.call(strings05JB0F, stringWFNagWA, addressEEjcgK, addressIrKbIdH, addressAjbe7t, addressrP8ixtE, addressPm9PEgE, addressMKQjLiR, addressK60dKRG, addresseoSeizE, uintgCUSfx3, uintv1zJCZf, uintCYdqCTo, uintaO4PCB7, uintmUejm1, {from: accounts[0]});
		const uint256H3ypv5D = await POWToken0fkNSm.stakingRewardRate.call({from: accounts[3]});
		await POWToken0fkNSm.whenNotPaused.call({from: accounts[2]});
		await POWToken0fkNSm.updateIncomeRate.call({from: accounts[1]});
		const uint25635vjKK = await POWToken0fkNSm.getCurWorkingRate.call({from: accounts[2]});
		const uint256xJMkF7 = await POWToken0fkNSm.setDepreciationNumerator.call(uintNjcJsLY, {from: accounts[2]});
		const uint256AoCUvY2 = await POWToken0fkNSm.notifyRewardAmount.call(uintzxvn1ei, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWToken0fkNSm.initialize.call(strings05JB0F, stringWFNagWA, addressEEjcgK, addressIrKbIdH, addressAjbe7t, addressrP8ixtE, addressPm9PEgE, addressMKQjLiR, addressK60dKRG, addresseoSeizE, uintgCUSfx3, uintv1zJCZf, uintCYdqCTo, uintaO4PCB7, uintmUejm1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenthAWQwS = await POWToken.new({from: accounts[2]});
		const uintdzdcPFp = BigInt("320")
		const uintHcBU0RM = BigInt("1559")
		const uintMLP5kTG = BigInt("767")
		const addressb1urqQ5 = accounts[5]
		const uint256caB22r5 = await POWTokenthAWQwS.stakingRewardRate.call({from: accounts[4]});
		const uint256xkX7ODv = await POWTokenthAWQwS.lpStakingRewardRate.call({from: accounts[2]});
		const uint256c4Fz6lZ = await POWTokenthAWQwS.setDepreciationNumerator.call(uintdzdcPFp, {from: accounts[2]});
		const uint256tpr9qS7 = await POWTokenthAWQwS.setMinerPoolFeeNumerator.call(uintHcBU0RM, {from: accounts[0]});
		const addressXvLMNnW = await POWTokenthAWQwS.claimIncome.call(addressb1urqQ5, uintMLP5kTG, {from: accounts[4]});

		assert.equal(uint256caB22r5, BigInt("0"))
		assert.equal(uint256xkX7ODv, BigInt("0"))
		await expect(POWTokenthAWQwS.setDepreciationNumerator.call(uintdzdcPFp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenJGTpEsM = await POWToken.new({from: accounts[3]});
		const uintKn4exx9 = BigInt("533")
		const addressROJBTYz = "0x0000000000000000000000000000000000000001"
		const boolzBQLFJ5 = await POWTokenJGTpEsM.approve.call(addressROJBTYz, uintKn4exx9, {from: accounts[1]});
		await POWTokenJGTpEsM.whenPaused.call({from: accounts[4]});
		const uint256Aaxc4s = await POWTokenJGTpEsM.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});

		assert.equal(boolzBQLFJ5, true)
		await expect(POWTokenJGTpEsM.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})