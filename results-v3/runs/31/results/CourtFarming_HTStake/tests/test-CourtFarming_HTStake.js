const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeFREMLdp = await CourtFarming_HTStake.new({from: accounts[2]});
		const uint75i8vE = BigInt("737")
		const uintrFJk3ep = BigInt("1498")
		const uintNsXIfa3 = BigInt("646")
		const uint256wJV3sYf = await CourtFarming_HTStakeFREMLdp.incvRewardClaim.call({from: accounts[0]});
		const uint256ulVO2lN = await CourtFarming_HTStakeFREMLdp.stake.call(uint75i8vE, {from: accounts[0]});
		const uint256NokBsYv = await CourtFarming_HTStakeFREMLdp.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dQU88D = await CourtFarming_HTStakeFREMLdp.expectedRewardsToday.call(uintrFJk3ep, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qi9tffH = await CourtFarming_HTStakeFREMLdp.stake.call(uintNsXIfa3, {from: accounts[3]});

		assert.equal(uint256wJV3sYf, BigInt("0"))
		await expect(CourtFarming_HTStakeFREMLdp.stake.call(uint75i8vE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeT6gO2MW = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintxwVY4ml = BigInt("150")
		const addressLhj0EaC = accounts[3]
		const addressLscPt18 = accounts[1]
		const addresszDlRtlA = accounts[4]
		const uint256BIVvMuG = await CourtFarming_HTStakeT6gO2MW.expectedRewardsToday.call(uintxwVY4ml, {from: accounts[1]});
		const addressqgYSkaM = await CourtFarming_HTStakeT6gO2MW.updateReward.call(addressLhj0EaC, {from: accounts[5]});
		const uint256wHc9Hf4 = await CourtFarming_HTStakeT6gO2MW.incvRewardClaim.call({from: accounts[0]});
		const uint256ITQBRL = await CourtFarming_HTStakeT6gO2MW.rewards.call(addressLscPt18, {from: accounts[2]});
		const uint256DIXTWW = await CourtFarming_HTStakeT6gO2MW.rewards.call(addresszDlRtlA, {from: accounts[0]});

		assert.equal(uint256wHc9Hf4, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeib46xvm = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresseBjM2bQ = accounts[0]
		const addressHDS3f2 = accounts[3]
		const uint256UxocKWV = await CourtFarming_HTStakeib46xvm.totalStaked.call({from: accounts[2]});
		const addressWR2Mejk = await CourtFarming_HTStakeib46xvm.updateReward.call(addresseBjM2bQ, {from: accounts[1]});
		const addressRkXhfte = await CourtFarming_HTStakeib46xvm.getBeneficiaryInfo.call(addressHDS3f2, {from: accounts[4]});

		assert.equal(uint256UxocKWV, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakehoTNwq7 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolQBhoixM = true
		const uintP5fITM = BigInt("20")
		const uint38wEuN = BigInt("593")
		const uintzmQjBcU = BigInt("1278")
		const uintaEgYGSp = BigInt("537")
		const uintIfX8LQU = BigInt("1251")
		const addressDKHnEPr = accounts[5]
		const uint256PFUH2FK = await CourtFarming_HTStakehoTNwq7.unstake.call(uintP5fITM, boolQBhoixM, {from: accounts[0]});
		const uint256JSc8B6 = await CourtFarming_HTStakehoTNwq7.expectedRewardsToday.call(uint38wEuN, {from: accounts[3]});
		await CourtFarming_HTStakehoTNwq7.changeStakeParameters.call(uintIfX8LQU, uintaEgYGSp, uintzmQjBcU, {from: accounts[2]});
		const uint256R3oLnyV = await CourtFarming_HTStakehoTNwq7.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const addresszw3qS6g = await CourtFarming_HTStakehoTNwq7.updateReward.call(addressDKHnEPr, {from: accounts[1]});

		await expect(CourtFarming_HTStakehoTNwq7.unstake.call(uintP5fITM, boolQBhoixM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGPkaskF = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressUAk9LTd = accounts[0]
		const uintawjZiYx = BigInt("1689")
		const uint256wLJkdVA = await CourtFarming_HTStakeGPkaskF.balanceOf.call(addressUAk9LTd, {from: accounts[2]});
		const uint256mnviGjr = await CourtFarming_HTStakeGPkaskF.getCurrentTime.call({from: accounts[4]});
		const boolNb8Uvow = await CourtFarming_HTStakeGPkaskF.stakeIncvRewards.call(uintawjZiYx, {from: accounts[2]});

		assert.equal(boolNb8Uvow, false)
		assert.equal(uint256mnviGjr, BigInt("1630201541"))
		assert.equal(uint256wLJkdVA, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJYaUy80 = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressxlWyXHx = accounts[1]
		const addressWqvAwLj = accounts[1]
		const addressGKKYO64 = await CourtFarming_HTStakeJYaUy80.updateReward.call(addressxlWyXHx, {from: accounts[2]});
		const uint256ZLS6mnh = await CourtFarming_HTStakeJYaUy80.lastUpdateBlock.call({from: accounts[4]});
		const uint256YJ1fwyd = await CourtFarming_HTStakeJYaUy80.rewards.call(addressWqvAwLj, {from: accounts[0]});

		assert.equal(uint256ZLS6mnh, BigInt("1804"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeHtx4BnX = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoXg0618 = BigInt("1435")
		const booliRon1yo = true
		const uint9xjjVb = BigInt("1331")
		const addressL1Ar04m = accounts[3]
		const uint256P3FF9gk = await CourtFarming_HTStakeHtx4BnX.lastUpdateBlock.call({from: accounts[4]});
		const uint256mki99Ud = await CourtFarming_HTStakeHtx4BnX.stake.call(uintoXg0618, {from: accounts[1]});
		const uint256XFlFpY = await CourtFarming_HTStakeHtx4BnX.unstake.call(uint9xjjVb, booliRon1yo, {from: accounts[2]});
		const uint256jsRHaB6 = await CourtFarming_HTStakeHtx4BnX.getCurrentTime.call({from: accounts[2]});
		const addresshkgGOBA = await CourtFarming_HTStakeHtx4BnX.updateReward.call(addressL1Ar04m, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeK8J3i1m = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresszZiilDr = accounts[3]
		const addressupFkiXK = accounts[5]
		const addressrQMI3hh = accounts[1]
		const boolzrbb2hy = true
		const uintxwt8Yhr = BigInt("1885")
		const uintpm5YlZQ = BigInt("149")
		const boolJoRyino = false
		const uintaJderU = BigInt("1070")
		const addressfLvivLQ = await CourtFarming_HTStakeK8J3i1m.setCourtStake.call(addresszZiilDr, {from: accounts[3]});
		const addressmQVtd92 = await CourtFarming_HTStakeK8J3i1m.setCourtStake.call(addressupFkiXK, {from: accounts[2]});
		const uint256UIhjQxG = await CourtFarming_HTStakeK8J3i1m.balanceOf.call(addressrQMI3hh, {from: accounts[4]});
		const uint256PgMwoLa = await CourtFarming_HTStakeK8J3i1m.unstake.call(uintxwt8Yhr, boolzrbb2hy, {from: accounts[4]});
		const boolIvP09R8 = await CourtFarming_HTStakeK8J3i1m.stakeIncvRewards.call(uintpm5YlZQ, {from: accounts[3]});
		const uint256ZeY3OKz = await CourtFarming_HTStakeK8J3i1m.unstake.call(uintaJderU, boolJoRyino, {from: accounts[5]});

		await expect(CourtFarming_HTStakeK8J3i1m.setCourtStake.call(addresszZiilDr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeib46xvm = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressM4NoSTn = accounts[4]
		const addressQsY1Zce = accounts[2]
		const addressOTR1eb = accounts[0]
		const addressGaNrLfp = accounts[3]
		const uint256UxocKWV = await CourtFarming_HTStakeib46xvm.totalStaked.call({from: accounts[2]});
		const addressPUyz703 = await CourtFarming_HTStakeib46xvm.setCourtStake.call(addressM4NoSTn, {from: accounts[0]});
		const addressUoxthJN = await CourtFarming_HTStakeib46xvm.setCourtStake.call(addressQsY1Zce, {from: accounts[1]});
		const addressWR2Mejk = await CourtFarming_HTStakeib46xvm.updateReward.call(addressOTR1eb, {from: accounts[1]});
		const addressRkXhfte = await CourtFarming_HTStakeib46xvm.getBeneficiaryInfo.call(addressGaNrLfp, {from: accounts[4]});

		assert.equal(uint256UxocKWV, BigInt("0"))
		await expect(CourtFarming_HTStakeib46xvm.setCourtStake.call(addressM4NoSTn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakek1d0k1g = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressDb645zR = accounts[2]
		const uintx31nka = BigInt("1460")
		const uinthekvHH9 = BigInt("1620")
		const uintEYva27W = BigInt("1943")
		const boolP40ZeXE = true
		const uintmkxpMi = BigInt("1596")
		const addressjHXVe8q = await CourtFarming_HTStakek1d0k1g.getBeneficiaryInfo.call(addressDb645zR, {from: accounts[1]});
		await CourtFarming_HTStakek1d0k1g.changeStakeParameters.call(uintEYva27W, uinthekvHH9, uintx31nka, {from: accounts[1]});
		const uint256xkA4ieH = await CourtFarming_HTStakek1d0k1g.unstake.call(uintmkxpMi, boolP40ZeXE, {from: accounts[1]});

		await expect(CourtFarming_HTStakek1d0k1g.changeStakeParameters.call(uintEYva27W, uinthekvHH9, uintx31nka, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeib46xvm = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresscDLNo67 = accounts[3]
		const uint256UxocKWV = await CourtFarming_HTStakeib46xvm.totalStaked.call({from: accounts[2]});
		const addressRkXhfte = await CourtFarming_HTStakeib46xvm.getBeneficiaryInfo.call(addresscDLNo67, {from: accounts[4]});
		const uint256dt6UG42 = await CourtFarming_HTStakeib46xvm.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256UxocKWV, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeib46xvm = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressJBZcNMy = accounts[4]
		const uintlPEhayH = BigInt("664")
		const uintF8Zt7Z = BigInt("1165")
		const uintfbz8lz = BigInt("1342")
		const uintQR4ibm7 = BigInt("39")
		const addressC7Zdtq3 = accounts[1]
		const addressYRgoh3q = accounts[3]
		const uint256UxocKWV = await CourtFarming_HTStakeib46xvm.totalStaked.call({from: accounts[2]});
		const uint256omTacW4 = await CourtFarming_HTStakeib46xvm.balanceOf.call(addressJBZcNMy, {from: accounts[1]});
		const uint256a7HeHnM = await CourtFarming_HTStakeib46xvm._stakeParametrsCalculation.call(uintfbz8lz, uintF8Zt7Z, uintlPEhayH, {from: accounts[4]});
		const uint256l60Ah3Q = await CourtFarming_HTStakeib46xvm.stake.call(uintQR4ibm7, {from: accounts[2]});
		const addressWR2Mejk = await CourtFarming_HTStakeib46xvm.updateReward.call(addressC7Zdtq3, {from: accounts[1]});
		const addressRkXhfte = await CourtFarming_HTStakeib46xvm.getBeneficiaryInfo.call(addressYRgoh3q, {from: accounts[4]});

		assert.equal(uint256UxocKWV, BigInt("0"))
		assert.equal(uint256omTacW4, BigInt("0"))
		await expect(CourtFarming_HTStakeib46xvm._stakeParametrsCalculation.call(uintfbz8lz, uintF8Zt7Z, uintlPEhayH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakehoTNwq7 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolQBhoixM = true
		const uintJgvfK4r = BigInt("0")
		const uintVlmc4r9 = BigInt("593")
		const uint4fvKNa = BigInt("1278")
		const uintkk58PPu = BigInt("537")
		const uintnWXumXH = BigInt("1251")
		const addressRZsTZLO = accounts[1]
		const addressjYggmPr = accounts[5]
		const uint256s2CvoVR = await CourtFarming_HTStakehoTNwq7.lastUpdateBlock.call({from: accounts[3]});
		const uint256PFUH2FK = await CourtFarming_HTStakehoTNwq7.unstake.call(uintJgvfK4r, boolQBhoixM, {from: accounts[0]});
		const uint256JSc8B6 = await CourtFarming_HTStakehoTNwq7.expectedRewardsToday.call(uintVlmc4r9, {from: accounts[3]});
		await CourtFarming_HTStakehoTNwq7.changeStakeParameters.call(uintnWXumXH, uintkk58PPu, uint4fvKNa, {from: accounts[2]});
		const uint256qP51gic = await CourtFarming_HTStakehoTNwq7.rewards.call(addressRZsTZLO, {from: accounts[2]});
		const uint256X9xbwVn = await CourtFarming_HTStakehoTNwq7.totalStaked.call({from: accounts[0]});
		const addresszw3qS6g = await CourtFarming_HTStakehoTNwq7.updateReward.call(addressjYggmPr, {from: accounts[1]});

		assert.equal(uint256s2CvoVR, BigInt("1804"))
		await expect(CourtFarming_HTStakehoTNwq7.changeStakeParameters.call(uintnWXumXH, uintkk58PPu, uint4fvKNa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeib46xvm = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintGk1GJPF = BigInt("0")
		const addressLjVmJTt = "0x0000000000000000000000000000000000000000"
		const uint256PrQTSW = await CourtFarming_HTStakeib46xvm.stake.call(uintGk1GJPF, {from: accounts[1]});
		const uint256Z6GcKDF = await CourtFarming_HTStakeib46xvm.getCurrentTime.call({from: accounts[5]});
		const addressKonMfss = await CourtFarming_HTStakeib46xvm.setCourtStake.call(addressLjVmJTt, {from: accounts[4]});
		const uint256dt6UG42 = await CourtFarming_HTStakeib46xvm.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Z6GcKDF, BigInt("1630201538"))
		await expect(CourtFarming_HTStakeib46xvm.setCourtStake.call(addressLjVmJTt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeib46xvm = await CourtFarming_HTStake.new({from: accounts[0]});
		const uinte5WiqkW = BigInt("9")
		const addressiFfWxnj = "0x0000000000000000000000000000000000000001"
		const uintqszhn9J = BigInt("1547")
		const uintbtREcAX = BigInt("1529")
		const uintxrbuGIX = BigInt("1965")
		const uintk0K2uQ = BigInt("0")
		const addressiReMTF = accounts[3]
		const boolWkMzvTj = await CourtFarming_HTStakeib46xvm.stakeIncvRewards.call(uinte5WiqkW, {from: accounts[4]});
		const uint256BYT8PSz = await CourtFarming_HTStakeib46xvm.totalStaked.call({from: accounts[0]});
		const uint256d5yf315 = await CourtFarming_HTStakeib46xvm.totalStaked.call({from: accounts[3]});
		const uint256kKstyNi = await CourtFarming_HTStakeib46xvm.rewards.call(addressiFfWxnj, {from: accounts[0]});
		await CourtFarming_HTStakeib46xvm.changeStakeParameters.call(uintxrbuGIX, uintbtREcAX, uintqszhn9J, {from: accounts[0]});
		const boolods9umI = await CourtFarming_HTStakeib46xvm.stakeIncvRewards.call(uintk0K2uQ, {from: accounts[1]});
		const uint256m9Z2FXW = await CourtFarming_HTStakeib46xvm.lastUpdateBlock.call({from: accounts[0]});
		const uint256do48MV9 = await CourtFarming_HTStakeib46xvm.incvRewardClaim.call({from: accounts[4]});
		const addressc0WtVn = await CourtFarming_HTStakeib46xvm.setCourtStake.call(addressiReMTF, {from: accounts[0]});

		assert.equal(boolWkMzvTj, false)
		assert.equal(uint256BYT8PSz, BigInt("0"))
		assert.equal(uint256d5yf315, BigInt("0"))
		await expect(CourtFarming_HTStakeib46xvm.changeStakeParameters.call(uintxrbuGIX, uintbtREcAX, uintqszhn9J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})