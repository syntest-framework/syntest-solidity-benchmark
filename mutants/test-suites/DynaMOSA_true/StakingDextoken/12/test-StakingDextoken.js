const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressaypQulW = accounts[5]
		const addressvvdVyRD = accounts[2]
		const StakingDextokenRoznoCi = await StakingDextoken.new(addressaypQulW, addressvvdVyRD, {from: accounts[3]});
		const addresstdzkjjE = accounts[3]
		const addressd9iZgO4 = accounts[3]
		const uint8HtAal = BigInt("51")
		const uintZZLWFEb = BigInt("1310")
		const uintQQVvUBo = BigInt("1891")
		const uintO4ElmOO = BigInt("1494")
		const uintPaCTiVS = await StakingDextokenRoznoCi.rewardOf.call(addresstdzkjjE, {from: accounts[3]});
//		const boolLrhpl2g = await StakingDextokenRoznoCi.freezeAccount.call(addressd9iZgO4, {from: "0x0000000000000000000000000000000000000001"});
//		const uintTVjbKjA = await StakingDextokenRoznoCi.setRewardRound.call(uintO4ElmOO, uintQQVvUBo, uintZZLWFEb, uint8HtAal, {from: accounts[4]});
//		await StakingDextokenRoznoCi.notifyRewards.call({from: accounts[0]});

		assert.equal(uintPaCTiVS, BigInt("0"))
		await expect(StakingDextokenRoznoCi.freezeAccount.call(addressd9iZgO4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRpHIdJO = "0x0000000000000000000000000000000000000001"
		const addressGtwmuz9 = accounts[3]
		const StakingDextokenAeoMWOI = await StakingDextoken.new(addressRpHIdJO, addressGtwmuz9, {from: accounts[0]});
		const addressBWSd6f = accounts[1]
		const uint4lWxPx = await StakingDextokenAeoMWOI.earned.call(addressBWSd6f, {from: accounts[5]});
//		await StakingDextokenAeoMWOI.notifyRewards.call({from: accounts[0]});
//		const uints0v9aJj = await StakingDextokenAeoMWOI.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint4lWxPx, BigInt("0"))
		await expect(StakingDextokenAeoMWOI.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresszdQ3ufs = accounts[1]
		const addressgIOclcc = accounts[3]
		const StakingDextokenzgowizx = await StakingDextoken.new(addresszdQ3ufs, addressgIOclcc, {from: accounts[1]});
		const addressVVdZR1K = accounts[4]
		const uintVznI1Ty = await StakingDextokenzgowizx.getTotalStakes.call({from: accounts[1]});
		const uinthZZRRD = await StakingDextokenzgowizx.getEndTimestamp.call({from: accounts[4]});
//		const addresswaY5sLQ = await StakingDextokenzgowizx.setBeneficial.call(addressVVdZR1K, {from: accounts[4]});

		assert.equal(uintVznI1Ty, BigInt("0"))
		assert.equal(uinthZZRRD, BigInt("0"))
		await expect(StakingDextokenzgowizx.setBeneficial.call(addressVVdZR1K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslQhd7i7 = accounts[4]
		const addressOP0okOg = accounts[3]
		const StakingDextokenxb2JTyB = await StakingDextoken.new(addresslQhd7i7, addressOP0okOg, {from: accounts[4]});
		const uinto2fea5X = await StakingDextokenxb2JTyB.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNt6i03l = await StakingDextokenxb2JTyB.getEndTimestamp.call({from: accounts[1]});
		const uintvjc8qGo = await StakingDextokenxb2JTyB.totalRewards.call({from: accounts[5]});

		assert.equal(uintNt6i03l, BigInt("0"))
		assert.equal(uinto2fea5X, BigInt("0"))
		assert.equal(uintvjc8qGo, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresstlFn0du = accounts[4]
		const addressTw6Gyn7 = accounts[2]
		const StakingDextokenL0H2zrc = await StakingDextoken.new(addresstlFn0du, addressTw6Gyn7, {from: accounts[1]});
		const addressnmJTup1 = accounts[0]
		const addressQChz5J4 = accounts[3]
		const addressuDOKrQd = accounts[2]
		const uintq3KmFq = await StakingDextokenL0H2zrc.earned.call(addressnmJTup1, {from: accounts[5]});
//		const addressiKZBt6P = await StakingDextokenL0H2zrc.updateReward.call(addressQChz5J4, {from: accounts[4]});
//		const uintRl1OeS6 = await StakingDextokenL0H2zrc.getTotalStakes.call({from: accounts[1]});
//		const boolS0tTegp = await StakingDextokenL0H2zrc.freezeAccount.call(addressuDOKrQd, {from: accounts[5]});

		assert.equal(uintq3KmFq, BigInt("0"))
		await expect(StakingDextokenL0H2zrc.updateReward.call(addressQChz5J4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvZIsfSb = accounts[1]
		const addressambxNM = accounts[5]
		const StakingDextokencjqkzoM = await StakingDextoken.new(addressvZIsfSb, addressambxNM, {from: "0x0000000000000000000000000000000000000001"});
		const addressgotQHiY = accounts[2]
		const uintMmRmnLs = BigInt("364")
		const uintMT2OxQx = BigInt("1433")
		const uintUoleaq = await StakingDextokencjqkzoM.stakeOf.call(addressgotQHiY, {from: accounts[2]});
		const uintK9FM1XW = await StakingDextokencjqkzoM.lastTimeRewardApplicable.call({from: accounts[0]});
		const uintehVUgMa = await StakingDextokencjqkzoM.withdraw.call(uintMmRmnLs, {from: accounts[1]});
		const uint50tNxD = await StakingDextokencjqkzoM.withdraw.call(uintMT2OxQx, {from: accounts[3]});
		await StakingDextokencjqkzoM.notifyRewards.call({from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressG04iVY9 = accounts[5]
		const addressjaw4Tvb = accounts[4]
		const StakingDextokenJ00vQb8 = await StakingDextoken.new(addressG04iVY9, addressjaw4Tvb, {from: accounts[5]});
		const addressXi1qryp = accounts[5]
		const uintHhqJGWW = BigInt("321")
		const addressdkEsTl = accounts[4]
		const addresse6R3yzh = accounts[4]
		const uintHUdRjNC = await StakingDextokenJ00vQb8.stakeOf.call(addressXi1qryp, {from: accounts[2]});
//		const uintVMMq70M = await StakingDextokenJ00vQb8.withdraw.call(uintHhqJGWW, {from: accounts[1]});
//		const boolnI62HLa = await StakingDextokenJ00vQb8.freezeAccount.call(addressdkEsTl, {from: accounts[0]});
//		const uint68wzqz = await StakingDextokenJ00vQb8.lastTimeRewardApplicable.call({from: accounts[0]});
//		const boolts2xiV = await StakingDextokenJ00vQb8.freezeAccount.call(addresse6R3yzh, {from: accounts[4]});

		assert.equal(uintHUdRjNC, BigInt("0"))
		await expect(StakingDextokenJ00vQb8.withdraw.call(uintHhqJGWW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRHdB6Ko = accounts[4]
		const addressd2BzqNF = accounts[2]
		const StakingDextokenqrDFxvZ = await StakingDextoken.new(addressRHdB6Ko, addressd2BzqNF, {from: accounts[3]});
		const addressHoH1S3m = accounts[2]
		const uintjP4aHiA = BigInt("906")
		const addressNxElt5H = accounts[3]
		const addressHtDEeSy = accounts[1]
		const uinthx5RDGy = await StakingDextokenqrDFxvZ.stakeOf.call(addressHoH1S3m, {from: accounts[3]});
//		const addresskDiOCHJ = await StakingDextokenqrDFxvZ.capture.call(addressNxElt5H, uintjP4aHiA, {from: accounts[3]});
//		const addresszopz6Ur = await StakingDextokenqrDFxvZ.updateReward.call(addressHtDEeSy, {from: accounts[3]});
//		const uintpLWHoKY = await StakingDextokenqrDFxvZ.getEndTimestamp.call({from: accounts[5]});

		assert.equal(uinthx5RDGy, BigInt("0"))
		await expect(StakingDextokenqrDFxvZ.capture.call(addressNxElt5H, uintjP4aHiA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfbvZZuj = accounts[4]
		const addressO1fyaY0 = accounts[2]
		const StakingDextokenqrDFxvZ = await StakingDextoken.new(addressfbvZZuj, addressO1fyaY0, {from: accounts[3]});
		const addressmZeBkS = accounts[2]
		const uintYzCk8oJ = BigInt("906")
		const addressUnWl0F2 = accounts[4]
		const addressZkssb24 = accounts[1]
		const uinthx5RDGy = await StakingDextokenqrDFxvZ.stakeOf.call(addressmZeBkS, {from: accounts[3]});
//		const addresskDiOCHJ = await StakingDextokenqrDFxvZ.capture.call(addressUnWl0F2, uintYzCk8oJ, {from: accounts[3]});
//		const addresszopz6Ur = await StakingDextokenqrDFxvZ.updateReward.call(addressZkssb24, {from: accounts[3]});
//		const uintpLWHoKY = await StakingDextokenqrDFxvZ.getEndTimestamp.call({from: accounts[5]});

		assert.equal(uinthx5RDGy, BigInt("0"))
		await expect(StakingDextokenqrDFxvZ.capture.call(addressUnWl0F2, uintYzCk8oJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUWivDHQ = "0x0000000000000000000000000000000000000001"
		const addressj9Hcs04 = accounts[3]
		const StakingDextokenAeoMWOI = await StakingDextoken.new(addressUWivDHQ, addressj9Hcs04, {from: accounts[0]});
		const addressvEWmieQ = accounts[4]
		const addressK1ff4Kp = accounts[1]
		const addressGqKWLxb = accounts[2]
		const uintx9U8heV = await StakingDextokenAeoMWOI.getWithdrawalOf.call(addressvEWmieQ, {from: accounts[4]});
		const uint4lWxPx = await StakingDextokenAeoMWOI.earned.call(addressK1ff4Kp, {from: accounts[5]});
//		await StakingDextokenAeoMWOI.notifyRewards.call({from: accounts[0]});
//		const address2aDEtB = await StakingDextokenAeoMWOI.notFrozen.call(addressGqKWLxb, {from: accounts[0]});
//		const uints0v9aJj = await StakingDextokenAeoMWOI.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint4lWxPx, BigInt("0"))
		assert.equal(uintx9U8heV, BigInt("0"))
		await expect(StakingDextokenAeoMWOI.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAcDeKk1 = accounts[4]
		const addressPesw7sK = accounts[2]
		const StakingDextokenqrDFxvZ = await StakingDextoken.new(addressAcDeKk1, addressPesw7sK, {from: accounts[3]});
		const addressF3BS6K = accounts[1]
		const addressXJcyKtn = accounts[2]
		const uintcPyI2GG = BigInt("906")
		const addressu42uMb7 = accounts[2]
		const addressyYXSa1C = accounts[1]
		const addressxtbmWVr = accounts[3]
		const uintzGAhadc = await StakingDextokenqrDFxvZ.rewardOf.call(addressF3BS6K, {from: accounts[1]});
		const uinthx5RDGy = await StakingDextokenqrDFxvZ.stakeOf.call(addressXJcyKtn, {from: accounts[3]});
//		const addresskDiOCHJ = await StakingDextokenqrDFxvZ.capture.call(addressu42uMb7, uintcPyI2GG, {from: accounts[3]});
//		const addresszopz6Ur = await StakingDextokenqrDFxvZ.updateReward.call(addressyYXSa1C, {from: accounts[3]});
//		const uintldd57w6 = await StakingDextokenqrDFxvZ.balanceOf.call(addressxtbmWVr, {from: accounts[0]});
//		const uintpLWHoKY = await StakingDextokenqrDFxvZ.getEndTimestamp.call({from: accounts[5]});

		assert.equal(uinthx5RDGy, BigInt("0"))
		assert.equal(uintzGAhadc, BigInt("0"))
		await expect(StakingDextokenqrDFxvZ.capture.call(addressu42uMb7, uintcPyI2GG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskX9q7ms = "0x0000000000000000000000000000000000000001"
		const addressKTSR13C = accounts[4]
		const StakingDextokenmeHcSP6 = await StakingDextoken.new(addresskX9q7ms, addressKTSR13C, {from: accounts[4]});
//		await StakingDextokenmeHcSP6.claim.call({from: accounts[4]});
//		const uintFnXk72F = await StakingDextokenmeHcSP6.totalRewards.call({from: accounts[0]});

		await expect(StakingDextokenmeHcSP6.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresssK5tyX5 = accounts[2]
		const addressirv4j1W = "0x0000000000000000000000000000000000000001"
		const StakingDextokenBRelKMO = await StakingDextoken.new(addresssK5tyX5, addressirv4j1W, {from: accounts[1]});
		const addressJmgK049 = accounts[1]
		const addresstbgXEP = accounts[3]
		const uintL2xMWwv = BigInt("804")
		const uintQoT7W9S = BigInt("1163")
		const uintz6jRwly = BigInt("1450")
		const uintqowpcb3 = BigInt("1100")
		const uintOpfLfIC = await StakingDextokenBRelKMO.getStartTimestamp.call({from: accounts[5]});
		const uintnz0BP0 = await StakingDextokenBRelKMO.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintbH3raqV = await StakingDextokenBRelKMO.stakeOf.call(addressJmgK049, {from: accounts[3]});
		const uintlU28TPp = await StakingDextokenBRelKMO.getClaimOf.call(addresstbgXEP, {from: accounts[1]});
//		const uintgUea9v6 = await StakingDextokenBRelKMO.setRewardRound.call(uintqowpcb3, uintz6jRwly, uintQoT7W9S, uintL2xMWwv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintOpfLfIC, BigInt("0"))
		assert.equal(uintbH3raqV, BigInt("0"))
		assert.equal(uintlU28TPp, BigInt("0"))
		assert.equal(uintnz0BP0, BigInt("0"))
		await expect(StakingDextokenBRelKMO.setRewardRound.call(uintqowpcb3, uintz6jRwly, uintQoT7W9S, uintL2xMWwv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressnqSiBv2 = accounts[1]
		const addressKjUwbUP = accounts[3]
		const StakingDextokenwz3QPNC = await StakingDextoken.new(addressnqSiBv2, addressKjUwbUP, {from: accounts[4]});
		const addressWk2SjP5 = accounts[0]
		const uintpwVvohb = BigInt("1651")
		const addressbN8sccm = accounts[4]
//		const boolDgg7ayq = await StakingDextokenwz3QPNC.unfreezeAccount.call(addressWk2SjP5, {from: accounts[4]});
//		const uintyHXysBr = await StakingDextokenwz3QPNC.withdraw.call(uintpwVvohb, {from: accounts[1]});
//		const addressbUAamgL = await StakingDextokenwz3QPNC.notFrozen.call(addressbN8sccm, {from: "0x0000000000000000000000000000000000000001"});
//		const uintbRcuVsG = await StakingDextokenwz3QPNC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenwz3QPNC.unfreezeAccount.call(addressWk2SjP5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBfeAZm4 = accounts[2]
		const addressWxfikht = accounts[4]
		const StakingDextokenxAaOAq = await StakingDextoken.new(addressBfeAZm4, addressWxfikht, {from: accounts[3]});
		const uintQDqoCxM = BigInt("1670")
		const uintCXcAg1J = BigInt("1517")
		const uintogou9CK = BigInt("5")
		const uintnbeuLS = BigInt("529")
		const addressUk3RUm3 = accounts[0]
		const uint9QtFJD = BigInt("306")
		const uintfwXC9Vv = await StakingDextokenxAaOAq.remainingRewards.call({from: accounts[2]});
		const uintPLszIOe = await StakingDextokenxAaOAq.setRewardRound.call(uintnbeuLS, uintogou9CK, uintCXcAg1J, uintQDqoCxM, {from: accounts[3]});
//		const addressWZIBPo = await StakingDextokenxAaOAq.notFrozen.call(addressUk3RUm3, {from: accounts[4]});
//		const uintiYQxsZ4 = await StakingDextokenxAaOAq.withdraw.call(uint9QtFJD, {from: accounts[0]});

		assert.equal(uintfwXC9Vv, BigInt("0"))
		await expect(StakingDextokenxAaOAq.notFrozen.call(addressUk3RUm3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgiroUu = accounts[4]
		const addressxiSHCNx = accounts[2]
		const StakingDextokenqrDFxvZ = await StakingDextoken.new(addressgiroUu, addressxiSHCNx, {from: accounts[3]});
		const addresspBslhS4 = "0x0000000000000000000000000000000000000001"
		const addresselDc9qI = "0x0000000000000000000000000000000000000001"
		const addressUZtMQb1 = accounts[3]
		const addressNXSfvy = accounts[4]
		const uintcmOYYVy = BigInt("905")
		const addressjZKL0Ww = "0x0000000000000000000000000000000000000001"
		const uintq0mF6fJ = await StakingDextokenqrDFxvZ.rewardOf.call(addresspBslhS4, {from: accounts[3]});
		const addresszC4sMTP = await StakingDextokenqrDFxvZ.setBeneficial.call(addresselDc9qI, {from: accounts[3]});
		const uinthx5RDGy = await StakingDextokenqrDFxvZ.stakeOf.call(addressUZtMQb1, {from: accounts[3]});
//		const boolTU48T8 = await StakingDextokenqrDFxvZ.freezeAccount.call(addressNXSfvy, {from: accounts[4]});
//		const addresskDiOCHJ = await StakingDextokenqrDFxvZ.capture.call(addressjZKL0Ww, uintcmOYYVy, {from: accounts[3]});

		assert.equal(uinthx5RDGy, BigInt("0"))
		assert.equal(uintq0mF6fJ, BigInt("0"))
		await expect(StakingDextokenqrDFxvZ.freezeAccount.call(addressNXSfvy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstDJ9GgB = accounts[4]
		const addresszpMaGEy = accounts[2]
		const StakingDextokenqrDFxvZ = await StakingDextoken.new(addresstDJ9GgB, addresszpMaGEy, {from: accounts[3]});
		const addressy8IuUI = accounts[3]
		const addressVyjKxa = accounts[3]
		const uintQyoq26k = BigInt("1468")
		const addressplJLvdj = accounts[4]
		const addresswQ7BNbx = accounts[0]
		const uintQJTV3k = BigInt("906")
		const addressmdMW2F2 = "0x0000000000000000000000000000000000000001"
		const uinthx5RDGy = await StakingDextokenqrDFxvZ.stakeOf.call(addressy8IuUI, {from: accounts[3]});
		const uintXOV7WVd = await StakingDextokenqrDFxvZ.earned.call(addressVyjKxa, {from: accounts[2]});
//		const uinth3NpGM6 = await StakingDextokenqrDFxvZ.deposit.call(uintQyoq26k, {from: accounts[2]});
//		const uint8ApQ2L = await StakingDextokenqrDFxvZ.stakeOf.call(addressplJLvdj, {from: accounts[2]});
//		await StakingDextokenqrDFxvZ.claim.call({from: accounts[2]});
//		const uintolTvMDi = await StakingDextokenqrDFxvZ.getWithdrawalOf.call(addresswQ7BNbx, {from: accounts[2]});
//		const addresskDiOCHJ = await StakingDextokenqrDFxvZ.capture.call(addressmdMW2F2, uintQJTV3k, {from: accounts[3]});

		assert.equal(uintXOV7WVd, BigInt("0"))
		assert.equal(uinthx5RDGy, BigInt("0"))
		await expect(StakingDextokenqrDFxvZ.deposit.call(uintQyoq26k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address3FoBL4 = accounts[4]
		const addressvYkoPuu = accounts[1]
		const StakingDextokenFQLgUp = await StakingDextoken.new(address3FoBL4, addressvYkoPuu, {from: accounts[0]});
		const addressYDXdj3Z = accounts[4]
		const addressroImKPV = accounts[0]
		const addressQa2GbnD = accounts[2]
		const booltp0DvCp = await StakingDextokenFQLgUp.freezeAccount.call(addressYDXdj3Z, {from: accounts[0]});
		const uintD8240QP = await StakingDextokenFQLgUp.getTotalStakes.call({from: accounts[4]});
		const uintxdd8TfU = await StakingDextokenFQLgUp.stakeOf.call(addressroImKPV, {from: accounts[1]});
		const uintpuEkGWt = await StakingDextokenFQLgUp.totalRewards.call({from: accounts[2]});
		const uintXgNBDqg = await StakingDextokenFQLgUp.rewardOf.call(addressQa2GbnD, {from: accounts[0]});

		assert.equal(booltp0DvCp, true)
		assert.equal(uintD8240QP, BigInt("0"))
		assert.equal(uintXgNBDqg, BigInt("0"))
		assert.equal(uintpuEkGWt, BigInt("0"))
		assert.equal(uintxdd8TfU, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressJDSRjJZ = accounts[0]
		const addressHl53dki = accounts[2]
		const StakingDextokenky4A9ME = await StakingDextoken.new(addressJDSRjJZ, addressHl53dki, {from: accounts[0]});
		const addressPRYBlBl = accounts[5]
		const uintL7zQI9k = BigInt("1258")
		const uintJzcj4hw = BigInt("1678")
		const uintwEPycpm = BigInt("1490")
		const uintJyXEipw = BigInt("942")
		const uintmbNmvFd = BigInt("374")
		const uintBTNOyi = await StakingDextokenky4A9ME.balanceOf.call(addressPRYBlBl, {from: "0x0000000000000000000000000000000000000001"});
		const uintY1JeqRq = await StakingDextokenky4A9ME.getStartTimestamp.call({from: accounts[1]});
		const uintBCx3r3e = await StakingDextokenky4A9ME.getEndTimestamp.call({from: accounts[3]});
//		const uintmhfjXh = await StakingDextokenky4A9ME.setRewardRound.call(uintJyXEipw, uintwEPycpm, uintJzcj4hw, uintL7zQI9k, {from: accounts[0]});
//		const uintsEamnrV = await StakingDextokenky4A9ME.deposit.call(uintmbNmvFd, {from: accounts[0]});

		assert.equal(uintBCx3r3e, BigInt("0"))
		assert.equal(uintBTNOyi, BigInt("0"))
		assert.equal(uintY1JeqRq, BigInt("0"))
		await expect(StakingDextokenky4A9ME.setRewardRound.call(uintJyXEipw, uintwEPycpm, uintJzcj4hw, uintL7zQI9k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})