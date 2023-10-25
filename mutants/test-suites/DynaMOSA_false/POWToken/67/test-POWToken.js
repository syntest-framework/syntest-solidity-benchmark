const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenwet0sMp = await POWToken.new({from: accounts[5]});
		const uintefWJ1L4 = BigInt("1329")
		const addressKJahDT1 = accounts[0]
		const addressZRJleun = "0x0000000000000000000000000000000000000001"
//		const uint256WBK6joj = await POWTokenwet0sMp.getCurWorkingRate.call({from: accounts[1]});
//		const addressf0OqZOP = await POWTokenwet0sMp.claimIncome.call(addressKJahDT1, uintefWJ1L4, {from: accounts[3]});
//		const addressWPW5v5L = await POWTokenwet0sMp.setBtcParam.call(addressZRJleun, {from: accounts[4]});

		await expect(POWTokenwet0sMp.getCurWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWTA9ybc = await POWToken.new({from: accounts[0]});
		const uintCHSn48q = BigInt("777")
		const addressSf9nEWz = accounts[3]
		const addressyTWVxNT = accounts[4]
		const uintgpdA3eq = BigInt("303")
		const uintZ0h82Vt = BigInt("356")
//		const addresstui42CS = await POWTokenWTA9ybc.inCaseTokensGetStuck.call(addressSf9nEWz, uintCHSn48q, {from: accounts[4]});
//		const addressJeN1lE4 = await POWTokenWTA9ybc.setParamSetter.call(addressyTWVxNT, {from: accounts[4]});
//		await POWTokenWTA9ybc.updateIncomeRate.call({from: accounts[3]});
//		const uint256UF8eSB = await POWTokenWTA9ybc.setWorkingHashRate.call(uintgpdA3eq, {from: accounts[3]});
//		const uint256sdwAaRN = await POWTokenWTA9ybc.setMinerPoolFeeNumerator.call(uintZ0h82Vt, {from: accounts[5]});

		await expect(POWTokenWTA9ybc.inCaseTokensGetStuck.call(addressSf9nEWz, uintCHSn48q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken2rPE01 = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscAxtjx = accounts[5]
		const uintXJ6q2oB = BigInt("1929")
		const uintpWtMUle = BigInt("742")
		const uintqDdn9eL = BigInt("877")
		const uintovkdp27 = BigInt("730")
		const uintv5xff8W = BigInt("1217")
		const addressEtXpwTM = accounts[5]
		const addressKx0ya4H = accounts[4]
		const addressiOoVjfK = "0x0000000000000000000000000000000000000001"
		const addressV7dKGR9 = accounts[5]
		const addresswMPHPAM = "0x0000000000000000000000000000000000000001"
		const addressMft5ycK = accounts[1]
		const addressKKkhF7u = accounts[0]
		const addressBaCQ2zk = accounts[2]
		const stringGTao5AQ = "DBk3PAhvy5zGO"
		const stringOQeKaP8 = "vBDERp60BybL9tgyORmmT7b36e5eR5QSsa3S69PWkjEbYGtseqeIYyMIfGvz8jGNMyaMaQy4Cl"
		await POWToken2rPE01.onlyOwner.call({from: accounts[1]});
		const uint256Zg9tq2 = await POWToken2rPE01.getHistoryWorkingRate.call({from: accounts[3]});
		const address9hPGSf = await POWToken2rPE01.setParamSetter.call(addresscAxtjx, {from: accounts[1]});
		const stringnk0pjT6 = await POWToken2rPE01.initialize.call(stringOQeKaP8, stringGTao5AQ, addressBaCQ2zk, addressKKkhF7u, addressMft5ycK, addresswMPHPAM, addressV7dKGR9, addressiOoVjfK, addressKx0ya4H, addressEtXpwTM, uintv5xff8W, uintovkdp27, uintqDdn9eL, uintpWtMUle, uintXJ6q2oB, {from: accounts[2]});
		const uint256y7ts2e = await POWToken2rPE01.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for POWToken', async () => {
		const POWTokenCKH3ZhI = await POWToken.new({from: accounts[3]});
		const uintvHnQmpn = BigInt("574")
//		const uint256uIUHVRi = await POWTokenCKH3ZhI.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256M0EUJz9 = await POWTokenCKH3ZhI.setElectricCharge.call(uintvHnQmpn, {from: accounts[2]});

		await expect(POWTokenCKH3ZhI.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfBEVt5d = await POWToken.new({from: accounts[3]});
		const uintGVnqVc2 = BigInt("894")
		const uintDHBZvq6 = BigInt("2")
		const byteaELruKs = "0x120810101f15071e000c1c1a08121802100e1d031f0814060c131f070f0f0b1d"
		const byteQMCYSIy = "0x090601020c030d151e17171b0f0e1307170e1d0d180a1c1d0c02061611031f10"
		const uintttvrAMO = BigInt("64")
		const uintddXSpl8 = BigInt("1978")
		const uintyWcWMJb = BigInt("1732")
		const addresstkKTV2o = accounts[5]
		const addressCGsioUQ = accounts[3]
		const addressVVTaXx2 = accounts[3]
//		const uint256YHR3uao = await POWTokenfBEVt5d.setStartMiningTime.call(uintGVnqVc2, {from: accounts[2]});
//		const uint256K5k0prW = await POWTokenfBEVt5d.setMinerPoolFeeNumerator.call(uintDHBZvq6, {from: accounts[2]});
//		const uint256XFz2d55 = await POWTokenfBEVt5d.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenfBEVt5d.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressfXmJfqO = await POWTokenfBEVt5d.permit.call(addressCGsioUQ, addresstkKTV2o, uintyWcWMJb, uintddXSpl8, uintttvrAMO, byteQMCYSIy, byteaELruKs, {from: accounts[2]});
//		const addressvXhM0ii = await POWTokenfBEVt5d.setBtcParam.call(addressVVTaXx2, {from: accounts[2]});

		await expect(POWTokenfBEVt5d.setStartMiningTime.call(uintGVnqVc2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenA69rF4l = await POWToken.new({from: accounts[4]});
		const uintBrwBSNG = BigInt("1226")
//		await POWTokenA69rF4l.updateIncomeRate.call({from: accounts[3]});
//		const uint256dwOwWg = await POWTokenA69rF4l.notifyRewardAmount.call(uintBrwBSNG, {from: accounts[0]});
//		await POWTokenA69rF4l.updateIncomeRate.call({from: accounts[5]});

		await expect(POWTokenA69rF4l.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlGWIW9z = await POWToken.new({from: accounts[0]});
		const uintPGQBftj = BigInt("66")
		const uintHaqD4tI = BigInt("1609")
		const addressmdPcXfg = accounts[2]
//		const uint256e2RFH5F = await POWTokenlGWIW9z.getHistoryWorkingRate.call({from: accounts[5]});
//		const uint256KP2LKel = await POWTokenlGWIW9z.lpStakingRewardRate.call({from: accounts[0]});
//		const uint256VRc7ydr = await POWTokenlGWIW9z.addHashRate.call(uintPGQBftj, {from: accounts[4]});
//		const addressELHQshx = await POWTokenlGWIW9z.claimReward.call(addressmdPcXfg, uintHaqD4tI, {from: accounts[5]});
//		const uint256GYCZTK = await POWTokenlGWIW9z.stakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenlGWIW9z.getHistoryWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenA69rF4l = await POWToken.new({from: accounts[4]});
		const uintrineUlg = BigInt("1212")
		const addressAPqDFiQ = accounts[3]
//		await POWTokenA69rF4l.onlyOwner.call({from: accounts[3]});
//		const uint256dwOwWg = await POWTokenA69rF4l.notifyRewardAmount.call(uintrineUlg, {from: accounts[0]});
//		const uint256Vcirx23 = await POWTokenA69rF4l.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const addressUVeICvo = await POWTokenA69rF4l.setParamSetter.call(addressAPqDFiQ, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenA69rF4l.updateIncomeRate.call({from: accounts[5]});

		await expect(POWTokenA69rF4l.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenCKH3ZhI = await POWToken.new({from: accounts[3]});
		const uintaHmw7c = BigInt("365")
		const addressrNQkxrH = "0x0000000000000000000000000000000000000001"
		const uintZn8PcaQ = BigInt("574")
//		const address2tY1X9 = await POWTokenCKH3ZhI.claimReward.call(addressrNQkxrH, uintaHmw7c, {from: accounts[1]});
//		const uint256uIUHVRi = await POWTokenCKH3ZhI.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenCKH3ZhI.whenPaused.call({from: accounts[5]});
//		const uint256M0EUJz9 = await POWTokenCKH3ZhI.setElectricCharge.call(uintZn8PcaQ, {from: accounts[2]});

		await expect(POWTokenCKH3ZhI.claimReward.call(addressrNQkxrH, uintaHmw7c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenbfBNNLk = await POWToken.new({from: accounts[0]});
		const bytecSP04RX = "0x101f102017161204171c09030b02020b040a0c0a1b17201c1c07201d0b141618"
		const byteonfR4qk = "0x1d011a16061f1f161f1f0c151313020c0406121c0611030f190b170215021d14"
		const uintKEeZfZx = BigInt("69")
		const uintSexYI4 = BigInt("1551")
		const uintAQKVM83 = BigInt("1070")
		const addressxaBcV2y = accounts[4]
		const addressHV36r1E = accounts[0]
		const addressd4JZTdm = accounts[2]
		const uintKANXzk8 = BigInt("9")
		const addressInfzJAd = accounts[2]
//		const addressDzDVd77 = await POWTokenbfBNNLk.permit.call(addressHV36r1E, addressxaBcV2y, uintAQKVM83, uintSexYI4, uintKEeZfZx, byteonfR4qk, bytecSP04RX, {from: accounts[1]});
//		const addressquV9mx = await POWTokenbfBNNLk.setParamSetter.call(addressd4JZTdm, {from: accounts[2]});
//		await POWTokenbfBNNLk.onlyOwner.call({from: accounts[1]});
//		const addressvUFncIp = await POWTokenbfBNNLk.inCaseTokensGetStuck.call(addressInfzJAd, uintKANXzk8, {from: accounts[5]});
//		const uint256Aa0ekgo = await POWTokenbfBNNLk.stakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenbfBNNLk.permit.call(addressHV36r1E, addressxaBcV2y, uintAQKVM83, uintSexYI4, uintKEeZfZx, byteonfR4qk, bytecSP04RX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenCKH3ZhI = await POWToken.new({from: accounts[3]});
		const booljNEwXs = await POWTokenCKH3ZhI.paused.call({from: accounts[3]});
//		const uint256uIUHVRi = await POWTokenCKH3ZhI.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljNEwXs, false)
		await expect(POWTokenCKH3ZhI.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlGWIW9z = await POWToken.new({from: accounts[0]});
		const uintrDpJKwe = BigInt("1608")
		const uintrr7JOvk = BigInt("1716")
		const uintEZrOtD5 = BigInt("617")
		const uintjgxrUjq = BigInt("1608")
		const uintxKK1HCG = BigInt("1205")
		const addressTKud4zQ = accounts[2]
		const addressHjChZEp = accounts[0]
		const addressx5CL1YS = accounts[5]
		const addressYfWK8MD = accounts[3]
		const addressFF3qXC = accounts[4]
		const addressQzDfBkx = accounts[1]
		const addressGP33Fds = accounts[1]
		const addressMwJrEie = accounts[5]
		const stringNiBml8q = "Oc1TVQKc4U1Er5LglxVXdar3jnXDOsqOcW5vOi8RSzqx5Xa3v8ec5bB8geIKgrZ1CPXEMVUf"
		const stringFLXPnr1 = "rCNefipKvd7XPGOUFfUYLtLF1HOpcVW85p8RsoyYP3xXeySfFpahpQESmHqzF"
		const uintz4Gb3mP = BigInt("66")
		const uintO7PBCAd = BigInt("1609")
		const addressf1NQ7EI = accounts[2]
//		const stringd5oMpa = await POWTokenlGWIW9z.initialize.call(stringFLXPnr1, stringNiBml8q, addressMwJrEie, addressGP33Fds, addressQzDfBkx, addressFF3qXC, addressYfWK8MD, addressx5CL1YS, addressHjChZEp, addressTKud4zQ, uintxKK1HCG, uintjgxrUjq, uintEZrOtD5, uintrr7JOvk, uintrDpJKwe, {from: accounts[3]});
//		const uint256XoeTExv = await POWTokenlGWIW9z.getCurWorkingRate.call({from: accounts[1]});
//		const uint256e2RFH5F = await POWTokenlGWIW9z.getHistoryWorkingRate.call({from: accounts[5]});
//		const boolqK4YgyT = await POWTokenlGWIW9z.paused.call({from: accounts[1]});
//		const uint256KP2LKel = await POWTokenlGWIW9z.lpStakingRewardRate.call({from: accounts[0]});
//		const uint256VRc7ydr = await POWTokenlGWIW9z.addHashRate.call(uintz4Gb3mP, {from: accounts[4]});
//		const addressELHQshx = await POWTokenlGWIW9z.claimReward.call(addressf1NQ7EI, uintO7PBCAd, {from: accounts[5]});
//		const uint256GYCZTK = await POWTokenlGWIW9z.stakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenlGWIW9z.initialize.call(stringFLXPnr1, stringNiBml8q, addressMwJrEie, addressGP33Fds, addressQzDfBkx, addressFF3qXC, addressYfWK8MD, addressx5CL1YS, addressHjChZEp, addressTKud4zQ, uintxKK1HCG, uintjgxrUjq, uintEZrOtD5, uintrr7JOvk, uintrDpJKwe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYtjV05S = await POWToken.new({from: accounts[5]});
		const uintQKtUhq9 = BigInt("864")
		const addressrpcOeEA = accounts[4]
		const addressU97hZDh = "0x0000000000000000000000000000000000000001"
		const uint256zGWSGW = await POWTokenYtjV05S.stakingRewardRate.call({from: accounts[4]});
//		const addressoSwq4U0 = await POWTokenYtjV05S.mint.call(addressrpcOeEA, uintQKtUhq9, {from: accounts[1]});
//		const address3D6DIt = await POWTokenYtjV05S.setBtcParam.call(addressU97hZDh, {from: accounts[3]});
//		await POWTokenYtjV05S.pause.call({from: accounts[2]});

		assert.equal(uint256zGWSGW, BigInt("0"))
		await expect(POWTokenYtjV05S.mint.call(addressrpcOeEA, uintQKtUhq9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenA69rF4l = await POWToken.new({from: accounts[4]});
		const uintxj74fXF = BigInt("1226")
		const uint256CVqejIR = await POWTokenA69rF4l.remainingAmount.call({from: accounts[2]});
//		await POWTokenA69rF4l.updateIncomeRate.call({from: accounts[3]});
//		const uint256dwOwWg = await POWTokenA69rF4l.notifyRewardAmount.call(uintxj74fXF, {from: accounts[0]});
//		await POWTokenA69rF4l.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenA69rF4l.updateIncomeRate.call({from: accounts[5]});
//		const uint25616Z554 = await POWTokenA69rF4l.getHistoryWorkingRate.call({from: accounts[3]});

		assert.equal(uint256CVqejIR, BigInt("0"))
		await expect(POWTokenA69rF4l.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYtjV05S = await POWToken.new({from: accounts[5]});
		const uintJBfgHJ7 = BigInt("864")
		const addressaZcV8mF = accounts[4]
		const addressLwcxPuf = "0x0000000000000000000000000000000000000001"
		const uintr67AatG = BigInt("844")
		const uint256zGWSGW = await POWTokenYtjV05S.stakingRewardRate.call({from: accounts[4]});
//		const uint256ifc5mM = await POWTokenYtjV05S.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const addressoSwq4U0 = await POWTokenYtjV05S.mint.call(addressaZcV8mF, uintJBfgHJ7, {from: accounts[1]});
//		const address3D6DIt = await POWTokenYtjV05S.setBtcParam.call(addressLwcxPuf, {from: accounts[3]});
//		await POWTokenYtjV05S.pause.call({from: accounts[2]});
//		const uint256c7t4jMe = await POWTokenYtjV05S.notifyRewardAmount.call(uintr67AatG, {from: accounts[3]});

		assert.equal(uint256zGWSGW, BigInt("0"))
		await expect(POWTokenYtjV05S.getIncomeBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlGWIW9z = await POWToken.new({from: accounts[0]});
		const uint256KP2LKel = await POWTokenlGWIW9z.lpStakingRewardRate.call({from: accounts[0]});
		const uint256GYCZTK = await POWTokenlGWIW9z.stakingRewardRate.call({from: accounts[0]});

		assert.equal(uint256GYCZTK, BigInt("0"))
		assert.equal(uint256KP2LKel, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenm49icB = await POWToken.new({from: accounts[0]});
		const uintt5TOlyp = BigInt("1009")
		const addressuwIOtFV = accounts[1]
		const addressXOuLOVp = accounts[1]
		const uintGUp7x2 = BigInt("1894")
		const bool2ee1kz = await POWTokenm49icB.approve.call(addressuwIOtFV, uintt5TOlyp, {from: accounts[2]});
//		const addressOiDJ0eb = await POWTokenm49icB.setParamSetter.call(addressXOuLOVp, {from: accounts[2]});
//		await POWTokenm49icB.pause.call({from: accounts[4]});
//		const uint256ZN8Y2iV = await POWTokenm49icB.setMinerPoolFeeNumerator.call(uintGUp7x2, {from: accounts[4]});

		assert.equal(bool2ee1kz, true)
		await expect(POWTokenm49icB.setParamSetter.call(addressXOuLOVp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYgoazrT = await POWToken.new({from: accounts[1]});
		const uintEOWIi9z = BigInt("518")
		const addressd5yHuv = "0x0000000000000000000000000000000000000001"
		const uintxeHhi3z = BigInt("1805")
		const uintKmW9LRV = BigInt("232")
		const addresssvkIw98 = accounts[1]
//		const boolKq8gok7 = await POWTokenYgoazrT.transfer.call(addressd5yHuv, uintEOWIi9z, {from: accounts[0]});
//		const uint256nNhUsDd = await POWTokenYgoazrT.getHistoryWorkingRate.call({from: accounts[3]});
//		const uint256QaOCiWN = await POWTokenYgoazrT.setStartMiningTime.call(uintxeHhi3z, {from: "0x0000000000000000000000000000000000000001"});
//		const addresso3QgIP = await POWTokenYgoazrT.mint.call(addresssvkIw98, uintKmW9LRV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenYgoazrT.transfer.call(addressd5yHuv, uintEOWIi9z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSVOEw7Z = await POWToken.new({from: accounts[0]});
		const uintkiAhPCT = BigInt("43")
		const addressqH3ptzU = accounts[1]
		const addressVsfJFMS = accounts[0]
		const uintBMrj0Ko = BigInt("1555")
		const addressD8cyn1 = accounts[5]
		const uintXJDRmk7 = BigInt("153")
		const addressrQSZnl = accounts[5]
		const bytevZuyxUV = "0x0c1d1d170f05141714181a040511191b131b1c1a141e1a200a050510191b0318"
		const byteO09gsIy = "0x0e06031411201c0c032003040910001a1c0d0311160c160902111d020805160f"
		const uintNZmx0XF = BigInt("173")
		const uintHJBxERk = BigInt("585")
		const uintqCizEAW = BigInt("510")
		const addressebyWcXC = "0x0000000000000000000000000000000000000001"
		const address7POahL = accounts[0]
//		const boolTh1iWf = await POWTokenSVOEw7Z.transferFrom.call(addressVsfJFMS, addressqH3ptzU, uintkiAhPCT, {from: accounts[0]});
//		const addressQFI4ADN = await POWTokenSVOEw7Z.claimReward.call(addressD8cyn1, uintBMrj0Ko, {from: accounts[4]});
//		const addressHhkNDLy = await POWTokenSVOEw7Z.claimIncome.call(addressrQSZnl, uintXJDRmk7, {from: accounts[3]});
//		const uint256tw3MZM = await POWTokenSVOEw7Z.lpStakingRewardRate.call({from: accounts[3]});
//		const addressOVawhVz = await POWTokenSVOEw7Z.permit.call(address7POahL, addressebyWcXC, uintqCizEAW, uintHJBxERk, uintNZmx0XF, byteO09gsIy, bytevZuyxUV, {from: accounts[1]});

		await expect(POWTokenSVOEw7Z.transferFrom.call(addressVsfJFMS, addressqH3ptzU, uintkiAhPCT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenA69rF4l = await POWToken.new({from: accounts[4]});
		const uintdlPvl3r = BigInt("1002")
		const addresspPUTPIS = accounts[5]
		const uintLQqkXRu = BigInt("1226")
//		const addressEhkAmSD = await POWTokenA69rF4l.claimIncome.call(addresspPUTPIS, uintdlPvl3r, {from: accounts[2]});
//		await POWTokenA69rF4l.whenNotPaused.call({from: accounts[4]});
//		const uint256dwOwWg = await POWTokenA69rF4l.notifyRewardAmount.call(uintLQqkXRu, {from: accounts[0]});

		await expect(POWTokenA69rF4l.claimIncome.call(addresspPUTPIS, uintdlPvl3r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})