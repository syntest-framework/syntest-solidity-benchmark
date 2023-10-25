const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokentO35HyR = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgmT1hQ = BigInt("1904")
		const uintbtzHXz = BigInt("1805")
		const uintWFE2ly = BigInt("647")
		const uintH5ILZ7G = BigInt("1458")
		const uintrWKMqLv = BigInt("1108")
		const addressh2lTpJw = accounts[3]
		const addressv8BF8DO = accounts[3]
		const addressQ9fxX0 = accounts[0]
		const addressyDBJ4U = accounts[4]
		const addressazxqWoL = accounts[1]
		const addresshi3JuTm = accounts[1]
		const addressJZl6sh0 = accounts[1]
		const addressxq5FleA = accounts[3]
		const stringmixiQk = "ohVvcblv7Z3stPp4m"
		const stringFobI08M = "zeLS5VE1i3nK6xnl7dsLR5qeTy0GCR8mOS"
		const uintbx6d607 = BigInt("936")
		const uint256FlPG97i = await POWTokentO35HyR.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		const stringDOsv52G = await POWTokentO35HyR.initialize.call(stringFobI08M, stringmixiQk, addressxq5FleA, addressJZl6sh0, addresshi3JuTm, addressazxqWoL, addressyDBJ4U, addressQ9fxX0, addressv8BF8DO, addressh2lTpJw, uintrWKMqLv, uintH5ILZ7G, uintWFE2ly, uintbtzHXz, uintgmT1hQ, {from: accounts[3]});
		const uint256R8paEhL = await POWTokentO35HyR.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256bqx6oBe = await POWTokentO35HyR.setWorkingHashRate.call(uintbx6d607, {from: accounts[1]});
		await POWTokentO35HyR.updateIncomeRate.call({from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokenMUX68qb = await POWToken.new({from: accounts[3]});
		const uintNVvrxEz = BigInt("98")
		const uintYSl4tHr = BigInt("1669")
		const addressiWGWn4C = accounts[3]
		const uintRjY56C = BigInt("1131")
		const addressNaymbEt = accounts[1]
		const bytetbrLv5V = "0x031b1d190c1c031a070304191b0e070614030e0910121f06140d170d0b071514"
		const byteUJJtnLE = "0x1715110c1401100417150711170b14050b13090917131c0d1a1c1718070e0a0e"
		const uintAxRbLmK = BigInt("230")
		const uintAOuaN7m = BigInt("305")
		const uintI07JByz = BigInt("303")
		const addressB3NnBdW = accounts[3]
		const addressuCtlvza = accounts[5]
		const uint256eGo0ZJU = await POWTokenMUX68qb.setStakingRewardRatio.call(uintNVvrxEz, {from: accounts[1]});
		const addresswDdIOt6 = await POWTokenMUX68qb.inCaseTokensGetStuck.call(addressiWGWn4C, uintYSl4tHr, {from: accounts[1]});
		const addressmUJwH6t = await POWTokenMUX68qb.claimReward.call(addressNaymbEt, uintRjY56C, {from: accounts[2]});
		const uint256ORfSeZk = await POWTokenMUX68qb.stakingRewardRate.call({from: accounts[3]});
		const addressOPlV46U = await POWTokenMUX68qb.permit.call(addressuCtlvza, addressB3NnBdW, uintI07JByz, uintAOuaN7m, uintAxRbLmK, byteUJJtnLE, bytetbrLv5V, {from: accounts[0]});

		await expect(POWTokenMUX68qb.setStakingRewardRatio.call(uintNVvrxEz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenq04ueVh = await POWToken.new({from: accounts[4]});
		const uintCFUsHE5 = BigInt("1111")
		const uint256JvZkrc = await POWTokenq04ueVh.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		await POWTokenq04ueVh.pause.call({from: accounts[1]});
		const uint256RVLYLX3 = await POWTokenq04ueVh.getCurWorkingRate.call({from: accounts[1]});
		const uint256NotIpfh = await POWTokenq04ueVh.setElectricCharge.call(uintCFUsHE5, {from: accounts[3]});

		await expect(POWTokenq04ueVh.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQy136Fd = await POWToken.new({from: accounts[4]});
		const uint9e2ePC = BigInt("314")
		const uintzlKnYF = BigInt("833")
		const addressounu8kf = accounts[1]
		const addresscmG0t6d = accounts[4]
		const uintHeYfWSx = BigInt("511")
		const uint256NVZUMaG = await POWTokenQy136Fd.setElectricCharge.call(uint9e2ePC, {from: accounts[4]});
		const uint256DwCsXGJ = await POWTokenQy136Fd.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
		const booluxRxdbd = await POWTokenQy136Fd.transferFrom.call(addresscmG0t6d, addressounu8kf, uintzlKnYF, {from: accounts[2]});
		const uint256IWj6Irp = await POWTokenQy136Fd.notifyRewardAmount.call(uintHeYfWSx, {from: accounts[0]});

		await expect(POWTokenQy136Fd.setElectricCharge.call(uint9e2ePC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uints63DlKO = BigInt("298")
		const addresssAvZssN = accounts[2]
		const uinttpCdfUg = BigInt("1652")
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addresssAvZssN, uints63DlKO, {from: accounts[1]});
		const uint256LhZQsV9 = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[4]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uinttpCdfUg, {from: accounts[0]});

		assert.equal(uint2565XGirN, BigInt("0"))
		await expect(POWTokenMg7vTjU.inCaseTokensGetStuck.call(addresssAvZssN, uints63DlKO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAPUgHdj = await POWToken.new({from: accounts[3]});
		const uintkhKT0iz = BigInt("696")
		const uintjvWbum3 = BigInt("1406")
		const uintGO37dhn = BigInt("1651")
		const uintVmZPwKX = BigInt("223")
		const uintTu1OJHj = BigInt("258")
		const addressNLHG6m7 = accounts[5]
		const addressY4o1CSZ = accounts[2]
		const addresscur2U6g = accounts[2]
		const addresshaWoLc = accounts[2]
		const addresswOKstX = accounts[4]
		const addresso9tkOGA = accounts[0]
		const addressfq9FCsB = accounts[2]
		const addresslWYZ07f = accounts[1]
		const stringO8AxEYi = "hutmNluG2eBrKDJAaWC1FCD7q69jJgN4d2Nv6c"
		const stringLRaTMBD = "5575w2rPbarGsUCEJliHO40llOINo5ethqlIWFqhF9"
		const uintj0Hs7S7 = BigInt("982")
		const uintyuo33tv = BigInt("700")
		const stringQL1nisb = await POWTokenAPUgHdj.initialize.call(stringLRaTMBD, stringO8AxEYi, addresslWYZ07f, addressfq9FCsB, addresso9tkOGA, addresswOKstX, addresshaWoLc, addresscur2U6g, addressY4o1CSZ, addressNLHG6m7, uintTu1OJHj, uintVmZPwKX, uintGO37dhn, uintjvWbum3, uintkhKT0iz, {from: accounts[2]});
		const uint256ap0kgRS = await POWTokenAPUgHdj.lpStakingRewardRate.call({from: accounts[4]});
		await POWTokenAPUgHdj.pause.call({from: accounts[3]});
		const uint256bHRYdN5 = await POWTokenAPUgHdj.addHashRate.call(uintj0Hs7S7, {from: accounts[4]});
		const uint256UrLNHT = await POWTokenAPUgHdj.setWorkingHashRate.call(uintyuo33tv, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenAPUgHdj.onlyOwner.call({from: accounts[4]});

		await expect(POWTokenAPUgHdj.initialize.call(stringLRaTMBD, stringO8AxEYi, addresslWYZ07f, addressfq9FCsB, addresso9tkOGA, addresswOKstX, addresshaWoLc, addresscur2U6g, addressY4o1CSZ, addressNLHG6m7, uintTu1OJHj, uintVmZPwKX, uintGO37dhn, uintjvWbum3, uintkhKT0iz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensKZ6hPx = await POWToken.new({from: accounts[4]});
		const uintYuwLyuK = BigInt("1424")
		const addressKYEXxBG = accounts[1]
		const uint256RJykfF = await POWTokensKZ6hPx.getCurWorkingRate.call({from: accounts[3]});
		const addressUmI7dMC = await POWTokensKZ6hPx.claimIncome.call(addressKYEXxBG, uintYuwLyuK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokensKZ6hPx.getCurWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlYIbFIK = await POWToken.new({from: accounts[3]});
		const addresshBMIC16 = accounts[0]
		const uintQciLEGA = BigInt("1366")
		const uintOtDHxfP = BigInt("511")
		const uinttDEnz81 = BigInt("71")
		const uintFvNU4rC = BigInt("376")
		const uintzIL3nR = BigInt("740")
		const uintgxpIUiO = BigInt("620")
		const addressmwzgYq = accounts[3]
		const addressQrvxVpB = accounts[4]
		const addressv44fQc8 = accounts[3]
		const addresstulRGri = accounts[5]
		const addressOx72Y8L = accounts[2]
		const addressuKqxEMK = accounts[5]
		const addressvJ54ng9 = accounts[2]
		const addressYIVySGm = accounts[2]
		const stringUcAfcDA = "1q4nQD2tFKM26Lzm3Tln5tO"
		const stringcT1yLuK = "zRy8P5JmvKwZk9ltULnH32sVCvpsqVASMN7KLXIFB7RldJ3wP24VDOyds4vL"
		const uint256Hy1hBKY = await POWTokenlYIbFIK.remainingAmount.call({from: accounts[4]});
		const addressRMmQrH9 = await POWTokenlYIbFIK.transferOwnership.call(addresshBMIC16, {from: accounts[0]});
		const uint256n7d813j = await POWTokenlYIbFIK.setMinerPoolFeeNumerator.call(uintQciLEGA, {from: accounts[0]});
		await POWTokenlYIbFIK.unpause.call({from: accounts[3]});
		const stringx32mQnZ = await POWTokenlYIbFIK.initialize.call(stringcT1yLuK, stringUcAfcDA, addressYIVySGm, addressvJ54ng9, addressuKqxEMK, addressOx72Y8L, addresstulRGri, addressv44fQc8, addressQrvxVpB, addressmwzgYq, uintgxpIUiO, uintzIL3nR, uintFvNU4rC, uinttDEnz81, uintOtDHxfP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Hy1hBKY, BigInt("0"))
		await expect(POWTokenlYIbFIK.transferOwnership.call(addresshBMIC16, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uinteV9blpD = BigInt("1561")
		const address3bhmz9 = accounts[3]
		const uintGkgFgJw = BigInt("1350")
		const uintYTYXQ3q = BigInt("313")
		const addressMhrAAAz = accounts[2]
		const uintynSa8QQ = BigInt("1652")
		const addresssupiYJo = await POWTokenMg7vTjU.mint.call(address3bhmz9, uinteV9blpD, {from: accounts[2]});
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		await POWTokenMg7vTjU.pause.call({from: accounts[0]});
		const uint256Ikmkha = await POWTokenMg7vTjU.setElectricCharge.call(uintGkgFgJw, {from: accounts[3]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressMhrAAAz, uintYTYXQ3q, {from: accounts[1]});
		const uint256EpJaVEZ = await POWTokenMg7vTjU.getCurWorkingRate.call({from: accounts[1]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintynSa8QQ, {from: accounts[0]});

		await expect(POWTokenMg7vTjU.mint.call(address3bhmz9, uinteV9blpD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPkeSW47 = await POWToken.new({from: accounts[0]});
		const uintZYLnh8V = BigInt("32")
		const addressEyU0yHC = accounts[3]
		const addressJNf66zt = "0x0000000000000000000000000000000000000001"
		await POWTokenPkeSW47.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolDynFqqF = await POWTokenPkeSW47.approve.call(addressEyU0yHC, uintZYLnh8V, {from: "0x0000000000000000000000000000000000000001"});
		const addressDnJiNb4 = await POWTokenPkeSW47.setParamSetter.call(addressJNf66zt, {from: accounts[4]});

		await expect(POWTokenPkeSW47.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uintqN5E7SZ = BigInt("519")
		const addressYwzZ8I8 = accounts[3]
		const uintV1ewKxX = BigInt("298")
		const addressgfuku6C = accounts[2]
		const addressycWDlxF = accounts[1]
		const uintySPILan = BigInt("1652")
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const addressbE3XgD9 = await POWTokenMg7vTjU.claimIncome.call(addressYwzZ8I8, uintqN5E7SZ, {from: accounts[4]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressgfuku6C, uintV1ewKxX, {from: accounts[1]});
		const uint256LhZQsV9 = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[4]});
		const addressSQhjIa1 = await POWTokenMg7vTjU.transferOwnership.call(addressycWDlxF, {from: accounts[3]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintySPILan, {from: accounts[0]});

		assert.equal(uint2565XGirN, BigInt("0"))
		await expect(POWTokenMg7vTjU.claimIncome.call(addressYwzZ8I8, uintqN5E7SZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensKZ6hPx = await POWToken.new({from: accounts[4]});
		const uintiFoR806 = BigInt("1515")
		const addressheEatgJ = accounts[0]
		const addressmZRBgo = accounts[1]
		const uintfy3qXU = BigInt("1862")
		const addressUraaDB = accounts[1]
		const boolMIvYY1 = await POWTokensKZ6hPx.transferFrom.call(addressmZRBgo, addressheEatgJ, uintiFoR806, {from: accounts[2]});
		const uint256RJykfF = await POWTokensKZ6hPx.getCurWorkingRate.call({from: accounts[3]});
		const uint256mP2LpL = await POWTokensKZ6hPx.lpStakingRewardRate.call({from: accounts[2]});
		const addressUmI7dMC = await POWTokensKZ6hPx.claimIncome.call(addressUraaDB, uintfy3qXU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokensKZ6hPx.transferFrom.call(addressmZRBgo, addressheEatgJ, uintiFoR806, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uintIJmkf3h = BigInt("1291")
		const addressH9TxyU5 = accounts[0]
		const uintWdknoCu = BigInt("298")
		const addressZLpe3t0 = accounts[2]
		const uintGVJgLYq = BigInt("333")
		const uintAyC8eLf = BigInt("463")
		const boollrhLMv0 = await POWTokenMg7vTjU.transfer.call(addressH9TxyU5, uintIJmkf3h, {from: "0x0000000000000000000000000000000000000001"});
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressZLpe3t0, uintWdknoCu, {from: accounts[1]});
		const uint256x3Gs6Gt = await POWTokenMg7vTjU.setStartMiningTime.call(uintGVJgLYq, {from: accounts[4]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintAyC8eLf, {from: accounts[0]});

		await expect(POWTokenMg7vTjU.transfer.call(addressH9TxyU5, uintIJmkf3h, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uintQR0xB0g = BigInt("1355")
		const uintFIqELFZ = BigInt("313")
		const addressGrvlmkh = accounts[2]
		const addresspeTPlsF = accounts[3]
		const uintVlxLOxn = BigInt("720")
		const uintdIcUhoB = BigInt("1652")
		const uint256zgO3HMd = await POWTokenMg7vTjU.getHistoryWorkingRate.call({from: accounts[1]});
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const uint256Ikmkha = await POWTokenMg7vTjU.setElectricCharge.call(uintQR0xB0g, {from: accounts[3]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressGrvlmkh, uintFIqELFZ, {from: accounts[1]});
		const uint256LhZQsV9 = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[4]});
		const addressP2orDxr = await POWTokenMg7vTjU.transferOwnership.call(addresspeTPlsF, {from: accounts[1]});
		const uint256LQPAjrM = await POWTokenMg7vTjU.addHashRate.call(uintVlxLOxn, {from: accounts[1]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintdIcUhoB, {from: accounts[0]});

		await expect(POWTokenMg7vTjU.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uintYZuv9b = BigInt("298")
		const addressjIR6GP = accounts[2]
		const uintEj7eRN = BigInt("1652")
		const uint256KpMGGjA = await POWTokenMg7vTjU.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressjIR6GP, uintYZuv9b, {from: accounts[1]});
		const uint256LhZQsV9 = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[4]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintEj7eRN, {from: accounts[0]});
		const uint256eiPhtAb = await POWTokenMg7vTjU.lpStakingRewardRate.call({from: accounts[1]});

		assert.equal(uint2565XGirN, BigInt("0"))
		assert.equal(uint256KpMGGjA, BigInt("0"))
		await expect(POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressjIR6GP, uintYZuv9b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uintdaKtGAZ = BigInt("298")
		const addressiCldXYx = accounts[2]
		const uintHmMFAl = BigInt("1652")
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const boolgPtwwOr = await POWTokenMg7vTjU.paused.call({from: accounts[3]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressiCldXYx, uintdaKtGAZ, {from: accounts[1]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintHmMFAl, {from: accounts[0]});
		await POWTokenMg7vTjU.updateIncomeRate.call({from: accounts[0]});

		assert.equal(boolgPtwwOr, false)
		assert.equal(uint2565XGirN, BigInt("0"))
		await expect(POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressiCldXYx, uintdaKtGAZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMg7vTjU = await POWToken.new({from: accounts[1]});
		const uintUO9LQzG = BigInt("1197")
		const addressVy2CYVp = "0x0000000000000000000000000000000000000000"
		const uintICRTe92 = BigInt("275")
		const uintz9qXkEr = BigInt("298")
		const addressWOnAnjJ = accounts[2]
		const uintkmXewKa = BigInt("1652")
		const uint2565XGirN = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[2]});
		const addresscsQtYhn = await POWTokenMg7vTjU.claimIncome.call(addressVy2CYVp, uintUO9LQzG, {from: accounts[3]});
		const uint256ihYNmz8 = await POWTokenMg7vTjU.setDepreciationNumerator.call(uintICRTe92, {from: accounts[3]});
		const addressLlAUtBr = await POWTokenMg7vTjU.inCaseTokensGetStuck.call(addressWOnAnjJ, uintz9qXkEr, {from: accounts[1]});
		const uint256LhZQsV9 = await POWTokenMg7vTjU.stakingRewardRate.call({from: accounts[4]});
		const uint256FIOS8XJ = await POWTokenMg7vTjU.addHashRate.call(uintkmXewKa, {from: accounts[0]});

		assert.equal(uint2565XGirN, BigInt("0"))
		await expect(POWTokenMg7vTjU.claimIncome.call(addressVy2CYVp, uintUO9LQzG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenzlx31j5 = await POWToken.new({from: accounts[2]});
		const uintVzO0Wo = BigInt("1180")
		const addressXX80xUc = "0x0000000000000000000000000000000000000001"
		const uintxYq81oq = BigInt("672")
		await POWTokenzlx31j5.updateIncomeRate.call({from: accounts[0]});
		const addressuGTDiB2 = await POWTokenzlx31j5.claimReward.call(addressXX80xUc, uintVzO0Wo, {from: accounts[1]});
		const uint256mwEAWbG = await POWTokenzlx31j5.setMinerPoolFeeNumerator.call(uintxYq81oq, {from: accounts[0]});

		await expect(POWTokenzlx31j5.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmKdqkzh = await POWToken.new({from: accounts[3]});
		const byteszmdsdb = "0x120e03170d070f1c0c201c0a18161d171f1c19171d0a0c0c1f14091b1a130d1e"
		const byteFTr54Fv = "0x17180c1407020e1e0f1e05091e1b0a0718070619140b0a1f11171f100c18040b"
		const uintwz2AzOB = BigInt("176")
		const uintlvSoukg = BigInt("1926")
		const uintDIEslTf = BigInt("918")
		const addressiabccOx = accounts[2]
		const addressvsaYXPI = accounts[2]
		const uintOyH3IFm = BigInt("789")
		const addressmpslWBv = accounts[3]
		const addressIsS6J2H = await POWTokenmKdqkzh.permit.call(addressvsaYXPI, addressiabccOx, uintDIEslTf, uintlvSoukg, uintwz2AzOB, byteFTr54Fv, byteszmdsdb, {from: accounts[0]});
		const addressFYzE1RU = await POWTokenmKdqkzh.claimIncome.call(addressmpslWBv, uintOyH3IFm, {from: accounts[4]});

		await expect(POWTokenmKdqkzh.permit.call(addressvsaYXPI, addressiabccOx, uintDIEslTf, uintlvSoukg, uintwz2AzOB, byteFTr54Fv, byteszmdsdb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenzlx31j5 = await POWToken.new({from: accounts[2]});
		const uintfz7vIoK = BigInt("1180")
		const addressUPRdCsf = "0x0000000000000000000000000000000000000001"
		const uintQXMRP2e = BigInt("672")
		const addressuGTDiB2 = await POWTokenzlx31j5.claimReward.call(addressUPRdCsf, uintfz7vIoK, {from: accounts[1]});
		const uint256mwEAWbG = await POWTokenzlx31j5.setMinerPoolFeeNumerator.call(uintQXMRP2e, {from: accounts[0]});

		await expect(POWTokenzlx31j5.claimReward.call(addressUPRdCsf, uintfz7vIoK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})