const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenjM4kP8 = await POWToken.new({from: accounts[5]});
		const uintDa9WA0 = BigInt("1444")
//		await POWTokenjM4kP8.unpause.call({from: accounts[0]});
//		const uint256KICM1tG = await POWTokenjM4kP8.setMinerPoolFeeNumerator.call(uintDa9WA0, {from: accounts[5]});
//		const uint256eQK4Ik3 = await POWTokenjM4kP8.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		await expect(POWTokenjM4kP8.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenbkmwcId = await POWToken.new({from: accounts[5]});
		const uintwAjNCxO = BigInt("1491")
		const addresscsom0hK = accounts[0]
		const uintCCiqwhG = BigInt("1808")
		const uintjkYxq9l = BigInt("818")
		const uintF5MxGH = BigInt("770")
//		const boolW9ePjYI = await POWTokenbkmwcId.transfer.call(addresscsom0hK, uintwAjNCxO, {from: accounts[0]});
//		const uint256ij7Sgei = await POWTokenbkmwcId.addHashRate.call(uintCCiqwhG, {from: accounts[1]});
//		const uint256HO3ukrQ = await POWTokenbkmwcId.setStakingRewardRatio.call(uintjkYxq9l, {from: accounts[1]});
//		await POWTokenbkmwcId.whenNotPaused.call({from: accounts[4]});
//		const uint256urwvkUb = await POWTokenbkmwcId.notifyRewardAmount.call(uintF5MxGH, {from: accounts[2]});

		await expect(POWTokenbkmwcId.transfer.call(addresscsom0hK, uintwAjNCxO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFnRyNoO = await POWToken.new({from: accounts[1]});
		const uintEffJnv0 = BigInt("406")
		const addressi9tFIDI = accounts[0]
		const uintYj8d3QN = BigInt("307")
		const uintA1I2Ilg = BigInt("1464")
		const uintaOiqxGJ = BigInt("237")
		const uintg8rHnbD = BigInt("1802")
		const uinteDlnMAJ = BigInt("734")
		const addresshKlB3GK = accounts[2]
		const addressClC9sGm = accounts[2]
		const addressVNlYvro = accounts[0]
		const addressTifTIJ6 = accounts[2]
		const addressddejDqt = accounts[3]
		const addressQCFSv6k = accounts[3]
		const addressoJHnii2 = accounts[2]
		const addressfSHnR6C = accounts[4]
		const stringviXNW2A = "FUBn8pmZNx"
		const stringiCc5CwP = "c3GTBVytXw8v9byMvEUFsIS41"
//		const uint256g9IDg1v = await POWTokenFnRyNoO.setDepreciationNumerator.call(uintEffJnv0, {from: accounts[1]});
//		const addresspbJiqid = await POWTokenFnRyNoO.setBtcParam.call(addressi9tFIDI, {from: accounts[3]});
//		await POWTokenFnRyNoO.onlyOwner.call({from: accounts[2]});
//		const stringTSaNJp = await POWTokenFnRyNoO.initialize.call(stringiCc5CwP, stringviXNW2A, addressfSHnR6C, addressoJHnii2, addressQCFSv6k, addressddejDqt, addressTifTIJ6, addressVNlYvro, addressClC9sGm, addresshKlB3GK, uinteDlnMAJ, uintg8rHnbD, uintaOiqxGJ, uintA1I2Ilg, uintYj8d3QN, {from: accounts[1]});

		await expect(POWTokenFnRyNoO.setDepreciationNumerator.call(uintEffJnv0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXo1KSDO = await POWToken.new({from: accounts[4]});
		const uintTjNqges = BigInt("27")
		const addressIICe8wd = accounts[2]
		const addressYmc2XcR = "0x0000000000000000000000000000000000000001"
		const uintKxVETjD = BigInt("1198")
		const addresstim2Fe6 = accounts[4]
		const uint256RDU5g37 = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[4]});
		const uint256oOk9BmY = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[1]});
//		const uint256fZITDMq = await POWTokenXo1KSDO.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
//		const addressCdB6RTS = await POWTokenXo1KSDO.inCaseTokensGetStuck.call(addressIICe8wd, uintTjNqges, {from: accounts[4]});
//		const addressEv7jUVb = await POWTokenXo1KSDO.setBtcParam.call(addressYmc2XcR, {from: accounts[0]});
//		const addressTpeGVXe = await POWTokenXo1KSDO.claimIncome.call(addresstim2Fe6, uintKxVETjD, {from: accounts[1]});

		assert.equal(uint256RDU5g37, BigInt("0"))
		assert.equal(uint256oOk9BmY, BigInt("0"))
		await expect(POWTokenXo1KSDO.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenskj9pHB = await POWToken.new({from: accounts[1]});
		const uintUOTT19L = BigInt("1165")
		const addressx2nl9FS = accounts[3]
		const uintU5q5JEo = BigInt("814")
		const addressvCP9q7C = accounts[0]
		const uintzPDVvN8 = BigInt("1079")
		const addressIfzXN2 = accounts[3]
		const addressGF2KhO6 = accounts[5]
		const uintJhbMztk = BigInt("962")
		const uintHTJH4cX = BigInt("746")
		const uintYuG9eb6 = BigInt("1907")
		const uintt3w26Ar = BigInt("986")
		const uintsTdiVan = BigInt("54")
		const addressFhcTjSY = accounts[2]
		const addressapxtCYi = accounts[2]
		const addressLiC76Zi = accounts[0]
		const addressxHvd6Bt = accounts[5]
		const addressVbUspgk = accounts[1]
		const addressxm808xS = accounts[0]
		const addressLUYT62B = accounts[4]
		const addressmjWZPL0 = accounts[1]
		const stringdyFWnzw = "DW7IKiFXw45zShxrO7f1qaMV0lJfG1t148ZNz5hYE9A8bXrCX8WTSO9pYE6vaWjP1YmR9H7hzC37mk2FIQBYODUJP6v"
		const stringhv5faT = "iYlRMnJzm8RJT0HEZSexja5X"
//		const addressH4TLvp = await POWTokenskj9pHB.mint.call(addressx2nl9FS, uintUOTT19L, {from: accounts[4]});
//		const boolyQex1uk = await POWTokenskj9pHB.approve.call(addressvCP9q7C, uintU5q5JEo, {from: accounts[2]});
//		await POWTokenskj9pHB.onlyOwner.call({from: accounts[5]});
//		const boolc795WBM = await POWTokenskj9pHB.transferFrom.call(addressGF2KhO6, addressIfzXN2, uintzPDVvN8, {from: accounts[3]});
//		const stringnLmvQND = await POWTokenskj9pHB.initialize.call(stringhv5faT, stringdyFWnzw, addressmjWZPL0, addressLUYT62B, addressxm808xS, addressVbUspgk, addressxHvd6Bt, addressLiC76Zi, addressapxtCYi, addressFhcTjSY, uintsTdiVan, uintt3w26Ar, uintYuG9eb6, uintHTJH4cX, uintJhbMztk, {from: accounts[1]});

		await expect(POWTokenskj9pHB.mint.call(addressx2nl9FS, uintUOTT19L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGhEjRj = await POWToken.new({from: accounts[2]});
		const uintyAqXZm = BigInt("1422")
		const addresst5lBMfR = accounts[1]
		const addressX29tpr7 = accounts[3]
		const uintnKLNja4 = BigInt("1176")
		const addressXg7DxZN = accounts[3]
//		const addressprdKjUt = await POWTokenGhEjRj.claimIncome.call(addresst5lBMfR, uintyAqXZm, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenGhEjRj.whenNotPaused.call({from: accounts[1]});
//		const addressv3TVcYJ = await POWTokenGhEjRj.transferOwnership.call(addressX29tpr7, {from: accounts[3]});
//		const uint256LYxK5RI = await POWTokenGhEjRj.notifyRewardAmount.call(uintnKLNja4, {from: accounts[3]});
//		const addressYem4sb6 = await POWTokenGhEjRj.setBtcParam.call(addressXg7DxZN, {from: accounts[2]});

		await expect(POWTokenGhEjRj.claimIncome.call(addresst5lBMfR, uintyAqXZm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpjtFd0Y = await POWToken.new({from: accounts[5]});
		const addressWpKF4cl = "0x0000000000000000000000000000000000000001"
//		await POWTokenpjtFd0Y.updateIncomeRate.call({from: accounts[1]});
//		const address21BpFA = await POWTokenpjtFd0Y.transferOwnership.call(addressWpKF4cl, {from: accounts[0]});

		await expect(POWTokenpjtFd0Y.updateIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenjgxDoW5 = await POWToken.new({from: accounts[3]});
		const uintT7oSedg = BigInt("1668")
		const addressraeYBR9 = accounts[4]
		const addresshlDbAHC = accounts[0]
		const uints6Jvds6 = BigInt("267")
		const addressZ29eTFL = accounts[3]
		const uintjMRULxu = BigInt("770")
//		const boolSFlgWR = await POWTokenjgxDoW5.transferFrom.call(addresshlDbAHC, addressraeYBR9, uintT7oSedg, {from: accounts[1]});
//		const uint2568MsJ89 = await POWTokenjgxDoW5.remainingAmount.call({from: accounts[3]});
//		const uint256pURtPay = await POWTokenjgxDoW5.addHashRate.call(uints6Jvds6, {from: accounts[4]});
//		await POWTokenjgxDoW5.whenPaused.call({from: accounts[2]});
//		const addressP2rtVDs = await POWTokenjgxDoW5.transferOwnership.call(addressZ29eTFL, {from: accounts[0]});
//		const uint256CgNessL = await POWTokenjgxDoW5.setDepreciationNumerator.call(uintjMRULxu, {from: accounts[3]});

		await expect(POWTokenjgxDoW5.transferFrom.call(addresshlDbAHC, addressraeYBR9, uintT7oSedg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXo1KSDO = await POWToken.new({from: accounts[4]});
		const uint5NkBJA = BigInt("27")
		const addressfT3n8JF = accounts[2]
//		await POWTokenXo1KSDO.whenPaused.call({from: accounts[2]});
//		const uint256RDU5g37 = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[4]});
//		const uint256fZITDMq = await POWTokenXo1KSDO.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
//		const addressCdB6RTS = await POWTokenXo1KSDO.inCaseTokensGetStuck.call(addressfT3n8JF, uint5NkBJA, {from: accounts[4]});

		await expect(POWTokenXo1KSDO.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGgljtb = await POWToken.new({from: accounts[4]});
		const uintCNgfmMy = BigInt("1191")
		const addressDloCwFp = accounts[4]
		const uintxANcUtA = BigInt("972")
		const addressJmWiQYD = accounts[1]
		const uintNi6YaX = BigInt("944")
		const addressDqNkbmQ = "0x0000000000000000000000000000000000000001"
//		const uint256gywpDu = await POWTokenGgljtb.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
//		await POWTokenGgljtb.pause.call({from: accounts[3]});
//		const uint256QNtaKVM = await POWTokenGgljtb.addHashRate.call(uintCNgfmMy, {from: accounts[1]});
//		const addresszzbh4f9 = await POWTokenGgljtb.setParamSetter.call(addressDloCwFp, {from: accounts[0]});
//		const addressrc5iKqS = await POWTokenGgljtb.claimReward.call(addressJmWiQYD, uintxANcUtA, {from: accounts[0]});
//		const addressSX76o91 = await POWTokenGgljtb.inCaseTokensGetStuck.call(addressDqNkbmQ, uintNi6YaX, {from: accounts[4]});

		await expect(POWTokenGgljtb.getIncomeBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXo1KSDO = await POWToken.new({from: accounts[4]});
		const bytemv06bES = "0x0a0704151e0e09190d090f120c11080c16140a0d07011d121e180b071e150618"
		const bytegZjN7AT = "0x1f180e1a190f0d14101a1d0f0b1c0f1208010903120c0615060a020a1110131f"
		const uintBsvLjZ7 = BigInt("168")
		const uintO2Adh6u = BigInt("1645")
		const uintVdDqj1C = BigInt("941")
		const address9mWszH = accounts[3]
		const addressB9gHNWd = accounts[0]
//		const addressYsoPTgp = await POWTokenXo1KSDO.permit.call(addressB9gHNWd, address9mWszH, uintVdDqj1C, uintO2Adh6u, uintBsvLjZ7, bytegZjN7AT, bytemv06bES, {from: accounts[0]});
//		const uint256RDU5g37 = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[4]});

		await expect(POWTokenXo1KSDO.permit.call(addressB9gHNWd, address9mWszH, uintVdDqj1C, uintO2Adh6u, uintBsvLjZ7, bytegZjN7AT, bytemv06bES, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXo1KSDO = await POWToken.new({from: accounts[4]});
		const uint256RDU5g37 = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[4]});
		const uint256dP4IL1d = await POWTokenXo1KSDO.lpStakingRewardRate.call({from: accounts[0]});

		assert.equal(uint256RDU5g37, BigInt("0"))
		assert.equal(uint256dP4IL1d, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenO1IZ5qP = await POWToken.new({from: accounts[3]});
		const uintsZtoww = BigInt("831")
		const addressP6xPi7X = accounts[2]
		const uintNlnljyk = BigInt("1197")
		const addressgwwQZtL = accounts[0]
		const booleGNaxwo = await POWTokenO1IZ5qP.approve.call(addressP6xPi7X, uintsZtoww, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenO1IZ5qP.unpause.call({from: accounts[2]});
//		const addressCuuPxTu = await POWTokenO1IZ5qP.mint.call(addressgwwQZtL, uintNlnljyk, {from: accounts[4]});

		assert.equal(booleGNaxwo, true)
		await expect(POWTokenO1IZ5qP.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXo1KSDO = await POWToken.new({from: accounts[4]});
		const uintlZCpUwc = BigInt("1869")
		const uintvQgE5Tx = BigInt("1274")
		const uintq2IjK9p = BigInt("497")
		const uintUv19mWA = BigInt("1146")
		const uintUQnVOe1 = BigInt("1321")
		const addressgQdQgu1 = accounts[4]
		const addresswLEUQkW = accounts[3]
		const addressxXJ4HrT = accounts[5]
		const addresslt8toP6 = accounts[2]
		const addressfvbTg1T = accounts[0]
		const addressfRxms4 = accounts[3]
		const addressP89cnzM = "0x0000000000000000000000000000000000000001"
		const addresskmOlStt = accounts[4]
		const stringcEGjp26 = "CdqalMLm3xDJzHaChV9EP3VVL6HO9GayUwEB3OMkj0NDv270MkaanEDTSv"
		const stringHI5Jadt = "5fPv5lcLNjRnlKwAjnozO3vlVujcX5xN4Qpl2oYYorjrfLlL5oRbtyub2TYHGtCDXiK3x2iP"
		const uintdCmp1YD = BigInt("1193")
		const uintWhXyGA6 = BigInt("201")
		const uintdtvSral = BigInt("1869")
		const uintqrMiW3M = BigInt("390")
		const uinteH5Masa = BigInt("1993")
		const addressrQuWT22 = accounts[4]
		const addressZ2rbbbI = accounts[0]
		const addressXu3yer6 = accounts[2]
		const addressnpt6Iq = accounts[3]
		const addressqDHebay = accounts[2]
		const addressr3Z3Z3 = accounts[3]
		const addressDJnhL30 = accounts[3]
		const addressGQxI895 = accounts[0]
		const stringTAn6KtY = "pS95jhaRoUawODLjanf1XQD3wAdMljoVIkDIYbTMU7Wme1V2BwWYrlzX9cR"
		const stringUT70OVJ = "nbKAJyuJ5nDePkbbmjovkmsoGtOfUVu3mkWlb6QNqNJDRllO3Luzs"
		const uint256RDU5g37 = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[4]});
//		const stringBUANrPH = await POWTokenXo1KSDO.initialize.call(stringHI5Jadt, stringcEGjp26, addresskmOlStt, addressP89cnzM, addressfRxms4, addressfvbTg1T, addresslt8toP6, addressxXJ4HrT, addresswLEUQkW, addressgQdQgu1, uintUQnVOe1, uintUv19mWA, uintq2IjK9p, uintvQgE5Tx, uintlZCpUwc, {from: accounts[4]});
//		const stringQXSzvF = await POWTokenXo1KSDO.initialize.call(stringUT70OVJ, stringTAn6KtY, addressGQxI895, addressDJnhL30, addressr3Z3Z3, addressqDHebay, addressnpt6Iq, addressXu3yer6, addressZ2rbbbI, addressrQuWT22, uinteH5Masa, uintqrMiW3M, uintdtvSral, uintWhXyGA6, uintdCmp1YD, {from: accounts[2]});

		assert.equal(uint256RDU5g37, BigInt("0"))
		await expect(POWTokenXo1KSDO.initialize.call(stringHI5Jadt, stringcEGjp26, addresskmOlStt, addressP89cnzM, addressfRxms4, addressfvbTg1T, addresslt8toP6, addressxXJ4HrT, addresswLEUQkW, addressgQdQgu1, uintUQnVOe1, uintUv19mWA, uintq2IjK9p, uintvQgE5Tx, uintlZCpUwc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpjtFd0Y = await POWToken.new({from: accounts[5]});
		const addresso5njprn = "0x0000000000000000000000000000000000000002"
//		const uint256fGq3eid = await POWTokenpjtFd0Y.getHistoryWorkingRate.call({from: accounts[0]});
//		const address21BpFA = await POWTokenpjtFd0Y.transferOwnership.call(addresso5njprn, {from: accounts[0]});
//		await POWTokenpjtFd0Y.whenPaused.call({from: accounts[4]});

		await expect(POWTokenpjtFd0Y.getHistoryWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXo1KSDO = await POWToken.new({from: accounts[4]});
		const uintuyp8b46 = BigInt("1239")
		const addressCDj9MnM = accounts[0]
		const addressZQ8Umr = accounts[3]
		const addresswclznXV = accounts[3]
		const uint256RDU5g37 = await POWTokenXo1KSDO.stakingRewardRate.call({from: accounts[4]});
//		const addressmHFhlqh = await POWTokenXo1KSDO.claimReward.call(addressCDj9MnM, uintuyp8b46, {from: accounts[2]});
//		const addressMTIeUuA = await POWTokenXo1KSDO.setParamSetter.call(addressZQ8Umr, {from: accounts[4]});
//		const boolfVqLkQr = await POWTokenXo1KSDO.paused.call({from: accounts[4]});
//		const addressHwPrjhF = await POWTokenXo1KSDO.transferOwnership.call(addresswclznXV, {from: accounts[3]});

		assert.equal(uint256RDU5g37, BigInt("0"))
		await expect(POWTokenXo1KSDO.claimReward.call(addressCDj9MnM, uintuyp8b46, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDX8PJED = await POWToken.new({from: accounts[1]});
		const uintsSFwMLZ = BigInt("560")
		const uintUbEpMAX = BigInt("899")
		const uint256HMeFYq = await POWTokenDX8PJED.remainingAmount.call({from: accounts[5]});
//		const uint256wpcJYd = await POWTokenDX8PJED.setWorkingHashRate.call(uintsSFwMLZ, {from: accounts[2]});
//		const uint256RIMbpMF = await POWTokenDX8PJED.setWorkingHashRate.call(uintUbEpMAX, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenDX8PJED.updateIncomeRate.call({from: accounts[0]});

		assert.equal(uint256HMeFYq, BigInt("0"))
		await expect(POWTokenDX8PJED.setWorkingHashRate.call(uintsSFwMLZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqAgJgX = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintd8tQbRy = BigInt("1575")
		const addressF51278o = accounts[5]
		const boolGxm4POd = await POWTokenqAgJgX.transfer.call(addressF51278o, uintd8tQbRy, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenqAgJgX.onlyParamSetter.call({from: accounts[1]});
		await POWTokenqAgJgX.pause.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokensmNDbQK = await POWToken.new({from: accounts[3]});
		const uintNyceE1w = BigInt("1798")
		const addressoYmJc7T = accounts[5]
		const boolOizRnn9 = await POWTokensmNDbQK.paused.call({from: accounts[1]});
//		const uint256gtnaIv4 = await POWTokensmNDbQK.setStartMiningTime.call(uintNyceE1w, {from: accounts[4]});
//		await POWTokensmNDbQK.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokensmNDbQK.unpause.call({from: accounts[0]});
//		const addressi3IOxL1 = await POWTokensmNDbQK.setParamSetter.call(addressoYmJc7T, {from: accounts[2]});
//		await POWTokensmNDbQK.whenNotPaused.call({from: accounts[0]});

		assert.equal(boolOizRnn9, false)
		await expect(POWTokensmNDbQK.setStartMiningTime.call(uintNyceE1w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})