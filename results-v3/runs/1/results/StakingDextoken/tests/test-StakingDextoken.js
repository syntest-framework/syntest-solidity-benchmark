const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressiJ5Pk8A = accounts[4]
		const addressZLMUljJ = accounts[4]
		const StakingDextokensbFyDj3 = await StakingDextoken.new(addressiJ5Pk8A, addressZLMUljJ, {from: accounts[1]});
		const uintk20HJtk = BigInt("1217")
		const addressNrOqoYr = accounts[4]
		const addressJOKZlGI = accounts[1]
		await StakingDextokensbFyDj3.claim.call({from: accounts[2]});
		const uintJKM3pD = await StakingDextokensbFyDj3.deposit.call(uintk20HJtk, {from: accounts[0]});
		const uintdEEkX2t = await StakingDextokensbFyDj3.getClaimOf.call(addressNrOqoYr, {from: accounts[5]});
		const addressXm8HUjJ = await StakingDextokensbFyDj3.setBeneficial.call(addressJOKZlGI, {from: accounts[4]});

		await expect(StakingDextokensbFyDj3.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVaHdsZ = "0x0000000000000000000000000000000000000001"
		const address2iuztF = accounts[4]
		const StakingDextokenQ3okPTN = await StakingDextoken.new(addressVaHdsZ, address2iuztF, {from: accounts[3]});
		const addressJm96JHP = accounts[2]
		const addressGMhReJ = accounts[4]
		const uintwjcm353 = await StakingDextokenQ3okPTN.earned.call(addressJm96JHP, {from: accounts[2]});
		const uintS6ErAhL = await StakingDextokenQ3okPTN.totalRewards.call({from: accounts[0]});
		const addressIBPmii5 = await StakingDextokenQ3okPTN.updateReward.call(addressGMhReJ, {from: accounts[0]});

		assert.equal(uintS6ErAhL, BigInt("0"))
		assert.equal(uintwjcm353, BigInt("0"))
		await expect(StakingDextokenQ3okPTN.updateReward.call(addressGMhReJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressapAQMol = "0x0000000000000000000000000000000000000001"
		const addressS2LZGx5 = accounts[2]
		const StakingDextokentq1RtY2 = await StakingDextoken.new(addressapAQMol, addressS2LZGx5, {from: accounts[5]});
		const uintenUnaD5 = BigInt("1107")
		const addressfPKF2st = accounts[2]
		const uintlaxmSMI = BigInt("1149")
		const addressRnU4X2r = accounts[3]
		const addressT5nMAac = accounts[3]
		const addresszcmjJd8 = accounts[3]
		const addressi3oKZwY = await StakingDextokentq1RtY2.capture.call(addressfPKF2st, uintenUnaD5, {from: accounts[5]});
		const addresshWLyvO = await StakingDextokentq1RtY2.capture.call(addressRnU4X2r, uintlaxmSMI, {from: accounts[2]});
		const boolGxVTrnl = await StakingDextokentq1RtY2.unfreezeAccount.call(addressT5nMAac, {from: accounts[0]});
		const uintPXYWQOL = await StakingDextokentq1RtY2.earned.call(addresszcmjJd8, {from: accounts[3]});

		await expect(StakingDextokentq1RtY2.capture.call(addressfPKF2st, uintenUnaD5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresscPOKhzR = accounts[5]
		const addressTsyXAHG = accounts[1]
		const StakingDextokenFJDNWtw = await StakingDextoken.new(addresscPOKhzR, addressTsyXAHG, {from: accounts[0]});
		const addressBp5016Z = accounts[5]
		const addressYYaS2mE = accounts[3]
		const uintrZJUD9v = await StakingDextokenFJDNWtw.remainingRewards.call({from: accounts[4]});
		await StakingDextokenFJDNWtw.claim.call({from: accounts[4]});
		const boolU2dJzU = await StakingDextokenFJDNWtw.unfreezeAccount.call(addressBp5016Z, {from: accounts[4]});
		const uinta76dvyy = await StakingDextokenFJDNWtw.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const booluDpR4i = await StakingDextokenFJDNWtw.unfreezeAccount.call(addressYYaS2mE, {from: accounts[0]});

		assert.equal(uintrZJUD9v, BigInt("0"))
		await expect(StakingDextokenFJDNWtw.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbaAgweq = "0x0000000000000000000000000000000000000001"
		const addressNOW9Pbs = accounts[4]
		const StakingDextokenfCCFxCn = await StakingDextoken.new(addressbaAgweq, addressNOW9Pbs, {from: accounts[2]});
		const addressShtfAhH = accounts[2]
		const addressIXxtx4i = accounts[5]
		const addressICZt3do = "0x0000000000000000000000000000000000000002"
		const addressGR8zzhJ = accounts[1]
		const uintrxtp8vL = await StakingDextokenfCCFxCn.balanceOf.call(addressShtfAhH, {from: accounts[3]});
		const uintyfBo9GE = await StakingDextokenfCCFxCn.getClaimOf.call(addressIXxtx4i, {from: accounts[4]});
		const bool3n8fH3 = await StakingDextokenfCCFxCn.unfreezeAccount.call(addressICZt3do, {from: accounts[4]});
		const boolBFyzkkz = await StakingDextokenfCCFxCn.unfreezeAccount.call(addressGR8zzhJ, {from: accounts[2]});

		assert.equal(uintrxtp8vL, BigInt("0"))
		assert.equal(uintyfBo9GE, BigInt("0"))
		await expect(StakingDextokenfCCFxCn.unfreezeAccount.call(addressICZt3do, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressl7BDfJ = accounts[3]
		const addressULf3TSU = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressl7BDfJ, addressULf3TSU, {from: accounts[4]});
		const uintMVK61Dn = await StakingDextokenq3zQTa.getStartTimestamp.call({from: accounts[4]});
		await StakingDextokenq3zQTa.claim.call({from: accounts[3]});

		assert.equal(uintMVK61Dn, BigInt("0"))
		await expect(StakingDextokenq3zQTa.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTkjnrgd = accounts[0]
		const addressfNxSnM = accounts[1]
		const StakingDextokenXCazMMa = await StakingDextoken.new(addressTkjnrgd, addressfNxSnM, {from: accounts[5]});
		const addresspjZgQsF = accounts[0]
		const addressOMScTj = accounts[0]
		const uintYDHRNrx = BigInt("2001")
		const uintaSbqN0d = await StakingDextokenXCazMMa.getWithdrawalOf.call(addresspjZgQsF, {from: accounts[4]});
		const uintGmNOPqk = await StakingDextokenXCazMMa.earned.call(addressOMScTj, {from: accounts[2]});
		const uintutvYuWA = await StakingDextokenXCazMMa.deposit.call(uintYDHRNrx, {from: accounts[0]});
		const uintCON3cVD = await StakingDextokenXCazMMa.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintCp7yew = await StakingDextokenXCazMMa.getEndTimestamp.call({from: accounts[1]});

		assert.equal(uintGmNOPqk, BigInt("0"))
		assert.equal(uintaSbqN0d, BigInt("0"))
		await expect(StakingDextokenXCazMMa.deposit.call(uintYDHRNrx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfLhzyob = accounts[3]
		const addressvFsk9Y6 = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressfLhzyob, addressvFsk9Y6, {from: accounts[4]});
		await StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]});

		await expect(StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVNaYArX = accounts[2]
		const addressjMuRhdy = accounts[2]
		const StakingDextokenydoH1L = await StakingDextoken.new(addressVNaYArX, addressjMuRhdy, {from: "0x0000000000000000000000000000000000000001"});
		const addressPDfNUiI = accounts[1]
		const address8aNXPh = accounts[4]
		const uintQb1K43v = BigInt("1462")
		const addresstEDvKVF = accounts[3]
		const boolJq3Wnp = await StakingDextokenydoH1L.unfreezeAccount.call(addressPDfNUiI, {from: accounts[3]});
		const uintL5F27YI = await StakingDextokenydoH1L.balanceOf.call(address8aNXPh, {from: accounts[5]});
		const uintbEQLFt = await StakingDextokenydoH1L.withdraw.call(uintQb1K43v, {from: accounts[1]});
		const addressSWddSAZ = await StakingDextokenydoH1L.updateReward.call(addresstEDvKVF, {from: accounts[1]});
		const uintJMsibF = await StakingDextokenydoH1L.totalRewards.call({from: accounts[0]});
		const uintdbtXLe2 = await StakingDextokenydoH1L.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for StakingDextoken', async () => {
		const addresseATSLef = accounts[3]
		const addressx90oZtY = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addresseATSLef, addressx90oZtY, {from: accounts[4]});
		const addressHVyUoey = accounts[0]
		const boolWehrsIV = await StakingDextokenq3zQTa.unfreezeAccount.call(addressHVyUoey, {from: accounts[4]});
		await StakingDextokenq3zQTa.claim.call({from: accounts[3]});

		await expect(StakingDextokenq3zQTa.unfreezeAccount.call(addressHVyUoey, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskm2Z4G8 = accounts[3]
		const addressuXChqXv = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addresskm2Z4G8, addressuXChqXv, {from: accounts[4]});
		const uintNhO22DK = BigInt("611")
		const uintV6d3eNr = await StakingDextokenq3zQTa.withdraw.call(uintNhO22DK, {from: accounts[1]});
		await StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]});

		await expect(StakingDextokenq3zQTa.withdraw.call(uintNhO22DK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuhuRfva = accounts[3]
		const addressz0cLXJ5 = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressuhuRfva, addressz0cLXJ5, {from: accounts[4]});
		const uintvcN1kNm = BigInt("354")
		const addressmfgXBW = "0x0000000000000000000000000000000000000001"
		const uintnHgJJdI = BigInt("760")
		const addressqGIRbfU = await StakingDextokenq3zQTa.capture.call(addressmfgXBW, uintvcN1kNm, {from: accounts[4]});
		await StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]});
		const uintXF5gPhu = await StakingDextokenq3zQTa.withdraw.call(uintnHgJJdI, {from: accounts[0]});

		await expect(StakingDextokenq3zQTa.capture.call(addressmfgXBW, uintvcN1kNm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmoAF55x = accounts[2]
		const addressS0IWeH5 = accounts[2]
		const StakingDextokenZ6pvM4M = await StakingDextoken.new(addressmoAF55x, addressS0IWeH5, {from: accounts[2]});
		const addressmm237dC = accounts[0]
		const uintbfmjCcB = BigInt("1322")
		const uintZcZbgNf = BigInt("1314")
		const uintEslLsgz = BigInt("1941")
		const uintjDk8Mbm = BigInt("1314")
		const uintCvECcG = BigInt("1318")
		const uintz55KUas = BigInt("267")
		const uintARYIys0 = BigInt("1380")
		const uintEzcuYJQ = BigInt("896")
		const uintjrbNhCH = await StakingDextokenZ6pvM4M.rewardOf.call(addressmm237dC, {from: accounts[2]});
		const uintHidNl8I = await StakingDextokenZ6pvM4M.setRewardRound.call(uintjDk8Mbm, uintEslLsgz, uintZcZbgNf, uintbfmjCcB, {from: accounts[0]});
		const uintevtqoES = await StakingDextokenZ6pvM4M.setRewardRound.call(uintEzcuYJQ, uintARYIys0, uintz55KUas, uintCvECcG, {from: accounts[4]});

		assert.equal(uintjrbNhCH, BigInt("0"))
		await expect(StakingDextokenZ6pvM4M.setRewardRound.call(uintjDk8Mbm, uintEslLsgz, uintZcZbgNf, uintbfmjCcB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEqrBxkN = accounts[3]
		const addressSBLhQff = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressEqrBxkN, addressSBLhQff, {from: accounts[4]});
		const addressrtxLLJA = accounts[0]
		const addressWq4NgD = accounts[5]
		const uintFuSr7c = BigInt("586")
		const uint0YmuS8 = await StakingDextokenq3zQTa.stakeOf.call(addressrtxLLJA, {from: "0x0000000000000000000000000000000000000001"});
		const boolJOkSuNs = await StakingDextokenq3zQTa.freezeAccount.call(addressWq4NgD, {from: "0x0000000000000000000000000000000000000001"});
		const uintV6d3eNr = await StakingDextokenq3zQTa.withdraw.call(uintFuSr7c, {from: accounts[1]});

		assert.equal(uint0YmuS8, BigInt("0"))
		await expect(StakingDextokenq3zQTa.freezeAccount.call(addressWq4NgD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTrMeoU0 = accounts[3]
		const addressjvlzCFf = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressTrMeoU0, addressjvlzCFf, {from: accounts[4]});
		const addressoLP4j1 = accounts[1]
		const uintX3I6lMh = await StakingDextokenq3zQTa.getStartTimestamp.call({from: accounts[0]});
		const boolqtuw7tB = await StakingDextokenq3zQTa.freezeAccount.call(addressoLP4j1, {from: accounts[4]});
		await StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]});

		assert.equal(boolqtuw7tB, true)
		assert.equal(uintX3I6lMh, BigInt("0"))
		await expect(StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIGpbdG3 = accounts[3]
		const addressWIeAPew = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressIGpbdG3, addressWIeAPew, {from: accounts[4]});
		const uintHeVmZ1m = BigInt("1801")
		const uintAgtTdsV = BigInt("1788")
		const uintGRO1MoP = BigInt("1207")
		const uintMcZTrGL = BigInt("1630")
		await StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]});
		const uintvV3oXWd = await StakingDextokenq3zQTa.setRewardRound.call(uintMcZTrGL, uintGRO1MoP, uintAgtTdsV, uintHeVmZ1m, {from: accounts[4]});

		await expect(StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIYbEFMc = accounts[5]
		const addressoTI2mke = accounts[2]
		const StakingDextokenLOt7RBA = await StakingDextoken.new(addressIYbEFMc, addressoTI2mke, {from: accounts[0]});
		const addressIH2Tko2 = accounts[1]
		const addressBGFZ7uD = accounts[4]
		const addressfhuXu45 = accounts[0]
		const addressiVP5LiU = await StakingDextokenLOt7RBA.setBeneficial.call(addressIH2Tko2, {from: accounts[0]});
		const addressivA3GI6 = await StakingDextokenLOt7RBA.updateReward.call(addressBGFZ7uD, {from: accounts[5]});
		await StakingDextokenLOt7RBA.notifyRewards.call({from: accounts[4]});
		const addressQAZVNT = await StakingDextokenLOt7RBA.notFrozen.call(addressfhuXu45, {from: accounts[2]});

		await expect(StakingDextokenLOt7RBA.updateReward.call(addressBGFZ7uD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressaqfgr3w = accounts[3]
		const addresskjU99jj = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressaqfgr3w, addresskjU99jj, {from: accounts[4]});
		const uintUijJbvT = BigInt("828")
		const addressMtF3tv = accounts[3]
		const uintfHU1Df = BigInt("1721")
		const addressQ4wepRB = accounts[3]
		const addressP55I7hk = await StakingDextokenq3zQTa.capture.call(addressMtF3tv, uintUijJbvT, {from: accounts[4]});
		const uintEsbRhpa = await StakingDextokenq3zQTa.withdraw.call(uintfHU1Df, {from: "0x0000000000000000000000000000000000000001"});
		const addressk9ydjOr = await StakingDextokenq3zQTa.updateReward.call(addressQ4wepRB, {from: accounts[0]});

		await expect(StakingDextokenq3zQTa.capture.call(addressMtF3tv, uintUijJbvT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWzDxAat = accounts[3]
		const addressW0NNKfW = accounts[4]
		const StakingDextokenq3zQTa = await StakingDextoken.new(addressWzDxAat, addressW0NNKfW, {from: accounts[4]});
		const uinthPtVl5j = BigInt("921")
		const uintQd3NW9 = BigInt("1502")
		const uintWOaCg0g = BigInt("1670")
		const uintTbl5iLe = BigInt("110")
		const uintq6MtYtf = await StakingDextokenq3zQTa.setRewardRound.call(uintTbl5iLe, uintWOaCg0g, uintQd3NW9, uinthPtVl5j, {from: accounts[4]});
		await StakingDextokenq3zQTa.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenq3zQTa.notifyRewards.call({from: accounts[4]});

		await expect(StakingDextokenq3zQTa.setRewardRound.call(uintTbl5iLe, uintWOaCg0g, uintQd3NW9, uinthPtVl5j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})