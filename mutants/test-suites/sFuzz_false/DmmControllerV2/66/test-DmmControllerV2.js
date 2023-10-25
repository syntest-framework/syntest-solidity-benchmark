const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2RQ8KvNR = await DmmControllerV2.new({from: accounts[3]});
		const addressn858Ghw = accounts[3]
		const addresshOh7mpM = accounts[2]
		await DmmControllerV2RQ8KvNR.initializer.call({from: accounts[1]});
		const addressEXykOJ = await DmmControllerV2RQ8KvNR.getDmmTokenForUnderlying.call(addressn858Ghw, {from: accounts[0]});
		const 
nNm3EWB = await DmmControllerV2RQ8KvNR.transferGuardian.call(addresshOh7mpM, {from: accounts[0]});
		await DmmControllerV2RQ8KvNR.renounceOwnership.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswXsbRv = accounts[3]
		const addressznrBmK = accounts[2]
		const addressQK1S6t = accounts[2]
		const addressOVrGmcd = accounts[2]
		const addressqw4JGMJ = accounts[0]
		const addressDPGGyAV = accounts[0]
		const addressmsvgMMe = accounts[4]
		const addressyGPZr4J = accounts[2]
		const addressXOx4ipH = accounts[4]
		const uintzBayf1c = BigInt("1985")
		const uintRyhh5je = BigInt("1701")
		const addressxxXWQGg = accounts[0]
		const DmmControllerV2VZpY8yr = await DmmControllerV2.new(addresswXsbRv, addressznrBmK, addressQK1S6t, addressOVrGmcd, addressqw4JGMJ, addressDPGGyAV, addressmsvgMMe, addressyGPZr4J, addressXOx4ipH, uintzBayf1c, uintRyhh5je, addressxxXWQGg, {from: accounts[1]});
		const uinthGXfSAR = BigInt("34")
		const uintzfPyN1 = await DmmControllerV2VZpY8yr.requireIsSecondaryMarketNft.call(uinthGXfSAR, {from: accounts[5]});
		await DmmControllerV2VZpY8yr.onlyPauser.call({from: accounts[1]});
		await DmmControllerV2VZpY8yr.whenNotPaused.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const address3vTpF2 = accounts[5]
		const addressaGCUIDp = accounts[3]
		const addressUjgfcdN = accounts[4]
		const addressetdQS4q = accounts[1]
		const addresssQJBcrd = accounts[2]
		const addressJVZ5B7P = accounts[0]
		const addressiqIt7QX = accounts[3]
		const addressMhPmn0u = accounts[3]
		const addressz4fDlLi = accounts[5]
		const uintwxrZuxO = BigInt("1562")
		const uintjZ4pXkn = BigInt("972")
		const addressvVNa2Wn = accounts[1]
		const DmmControllerV2tx2QVpv = await DmmControllerV2.new(address3vTpF2, addressaGCUIDp, addressUjgfcdN, addressetdQS4q, addresssQJBcrd, addressJVZ5B7P, addressiqIt7QX, addressMhPmn0u, addressz4fDlLi, uintwxrZuxO, uintjZ4pXkn, addressvVNa2Wn, {from: accounts[4]});
		const addressaIyCx9j = accounts[0]
		const uintyXxsuaM = BigInt("847")
		const uintFgP6goV = BigInt("1044")
		const uintDV0Lmm6 = BigInt("1734")
		const boolntQvraU = await DmmControllerV2tx2QVpv.isOwner.call({from: accounts[0]});
		await DmmControllerV2tx2QVpv.renounceOwnership.call({from: accounts[4]});
		const uintOcrdaoM = await DmmControllerV2tx2QVpv.getInterestRateByDmmTokenAddress.call(addressaIyCx9j, {from: accounts[3]});
		const uintc8BDPVA = await DmmControllerV2tx2QVpv.disableMarket.call(uintyXxsuaM, {from: "0x0000000000000000000000000000000000000001"});
		const 
KROzhPW = await DmmControllerV2tx2QVpv.adminWithdrawFunds.call(uintDV0Lmm6, uintFgP6goV, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspD33tTF = accounts[2]
		const addressqCiJsq2 = accounts[2]
		const addressEJRsyNk = accounts[2]
		const addressweQoV09 = accounts[3]
		const addressRbqAv3H = accounts[3]
		const addressSvkUaI = "0x0000000000000000000000000000000000000001"
		const addressm1gcAgK = accounts[0]
		const addressqqDcWCa = accounts[0]
		const addressbewDrM9 = accounts[1]
		const uintCHpyHUT = BigInt("940")
		const uint2wO0tX = BigInt("293")
		const addressWYcC5H = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addresspD33tTF, addressqCiJsq2, addressEJRsyNk, addressweQoV09, addressRbqAv3H, addressSvkUaI, addressm1gcAgK, addressqqDcWCa, addressbewDrM9, uintCHpyHUT, uint2wO0tX, addressWYcC5H, {from: accounts[0]});
		const addressHxliVuB = "0x0000000000000000000000000000000000000001"
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const uinttmQrXu0 = await DmmControllerV2JdsVPLG.getExchangeRate.call(addressHxliVuB, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressjlyMAgz = accounts[3]
		const addressWg2peEi = accounts[0]
		const addressknR4bxd = accounts[4]
		const addressKbv9nXV = accounts[2]
		const addressbfNxpZk = accounts[5]
		const addressGSQatv = accounts[2]
		const addressvCDhMI6 = accounts[3]
		const addressQHgPov6 = accounts[0]
		const addressCOGelFF = accounts[1]
		const uintY59X3k4 = BigInt("161")
		const uintfSXM5IG = BigInt("1496")
		const addressDsQZtZo = accounts[3]
		const DmmControllerV2ydDsI6i = await DmmControllerV2.new(addressjlyMAgz, addressWg2peEi, addressknR4bxd, addressKbv9nXV, addressbfNxpZk, addressGSQatv, addressvCDhMI6, addressQHgPov6, addressCOGelFF, uintY59X3k4, uintfSXM5IG, addressDsQZtZo, {from: accounts[0]});
		await DmmControllerV2ydDsI6i.unpause.call({from: accounts[0]});
		await DmmControllerV2ydDsI6i.unpause.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressq5cgI87 = accounts[2]
		const addressd5Txebg = accounts[2]
		const addressHn9lRk = accounts[2]
		const addressd7LlMVs = accounts[3]
		const addressf8DNMCZ = accounts[3]
		const addressKVp0pP9 = "0x0000000000000000000000000000000000000001"
		const addressYbngjvB = accounts[0]
		const addressbdzVuYT = accounts[0]
		const addressugQM3iu = accounts[1]
		const uintDWwu0jK = BigInt("940")
		const uintDCpkDQQ = BigInt("293")
		const addressQTvNgrz = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressq5cgI87, addressd5Txebg, addressHn9lRk, addressd7LlMVs, addressf8DNMCZ, addressKVp0pP9, addressYbngjvB, addressbdzVuYT, addressugQM3iu, uintDWwu0jK, uintDCpkDQQ, addressQTvNgrz, {from: accounts[0]});
		const uintZdCnQ8V = BigInt("451")
		const addressHkw338 = accounts[1]
		const uint6OTHbW = await DmmControllerV2JdsVPLG.setMinReserveRatio.call(uintZdCnQ8V, {from: accounts[0]});
		await DmmControllerV2JdsVPLG.onlyOwnerOrGuardian.call({from: "0x0000000000000000000000000000000000000001"});
		const uinttmQrXu0 = await DmmControllerV2JdsVPLG.getExchangeRate.call(addressHkw338, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresslgOMfm = accounts[2]
		const addressEAPger = accounts[2]
		const addressm2iSBGh = accounts[2]
		const addressB3bJJtu = accounts[3]
		const addressyVStuxa = accounts[3]
		const addressydY0cLQ = "0x0000000000000000000000000000000000000001"
		const addressw7ozHJx = accounts[0]
		const addressCzcA0TC = accounts[0]
		const addressbjOMNR1 = accounts[1]
		const uintbiKd5Yw = BigInt("940")
		const uintEKNPcjk = BigInt("293")
		const addresskxrpJWT = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addresslgOMfm, addressEAPger, addressm2iSBGh, addressB3bJJtu, addressyVStuxa, addressydY0cLQ, addressw7ozHJx, addressCzcA0TC, addressbjOMNR1, uintbiKd5Yw, uintEKNPcjk, addresskxrpJWT, {from: accounts[0]});
		const addressi1U2AM9 = accounts[2]
		const addressNPgdk3C = "0x0000000000000000000000000000000000000001"
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const 
AeLschx = await DmmControllerV2JdsVPLG.transferOwnership.call(addressi1U2AM9, {from: accounts[3]});
		const uinttmQrXu0 = await DmmControllerV2JdsVPLG.getExchangeRate.call(addressNPgdk3C, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressa7VYsMF = accounts[2]
		const addressn3HKP6K = accounts[2]
		const addressNkd3XyN = accounts[2]
		const addressDNhC4vN = accounts[3]
		const addressO7tFewF = accounts[3]
		const addressCzqo105 = "0x0000000000000000000000000000000000000001"
		const addressM7ep6w = accounts[0]
		const addresssjVH6On = accounts[0]
		const addressUi49LJp = accounts[1]
		const uintHju85cH = BigInt("940")
		const uintMv9oxHy = BigInt("293")
		const addressMIhsZRL = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressa7VYsMF, addressn3HKP6K, addressNkd3XyN, addressDNhC4vN, addressO7tFewF, addressCzqo105, addressM7ep6w, addresssjVH6On, addressUi49LJp, uintHju85cH, uintMv9oxHy, addressMIhsZRL, {from: accounts[0]});
		const addressgkhWd6x = accounts[0]
		const uintepTBZFS = BigInt("1924")
		const uintJOr4Ey = BigInt("499")
		const uintXMgTC57 = BigInt("254")
		const addressd0mHPDv = "0x0000000000000000000000000000000000000000"
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const boolA20G5V2 = await DmmControllerV2JdsVPLG.isMarketEnabledByDmmTokenAddress.call(addressgkhWd6x, {from: accounts[3]});
		const 
pGYXWcE = await DmmControllerV2JdsVPLG.increaseTotalSupply.call(uintJOr4Ey, uintepTBZFS, {from: accounts[4]});
		const uinta6SNDYb = await DmmControllerV2JdsVPLG.enableMarket.call(uintXMgTC57, {from: accounts[2]});
		const uinttmQrXu0 = await DmmControllerV2JdsVPLG.getExchangeRate.call(addressd0mHPDv, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressK8SxCve = accounts[2]
		const addressu52z4S4 = accounts[2]
		const addresspfJsfso = accounts[2]
		const addressLRvqYNr = accounts[3]
		const addressEIl2xVc = accounts[3]
		const addressA4fqLcJ = "0x0000000000000000000000000000000000000001"
		const addressNYuLQBr = accounts[0]
		const addressMcXAOyH = accounts[0]
		const addressxqZ1YUF = accounts[1]
		const uintjD7TLg5 = BigInt("940")
		const uintQBNqgHI = BigInt("293")
		const addresseAmMdC = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressK8SxCve, addressu52z4S4, addresspfJsfso, addressLRvqYNr, addressEIl2xVc, addressA4fqLcJ, addressNYuLQBr, addressMcXAOyH, addressxqZ1YUF, uintjD7TLg5, uintQBNqgHI, addresseAmMdC, {from: accounts[0]});
		const addressFAh6I3p = "0x0000000000000000000000000000000000000001"
		const uintarraymCgSL8i = await DmmControllerV2JdsVPLG.getDmmTokenIds.call({from: accounts[2]});
		const addresssxMNgkN = await DmmControllerV2JdsVPLG.guardian.call({from: "0x0000000000000000000000000000000000000001"});
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const uinttmQrXu0 = await DmmControllerV2JdsVPLG.getExchangeRate.call(addressFAh6I3p, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressLNAfHOE = accounts[2]
		const addressTa4EZIu = accounts[2]
		const addressapipVJj = accounts[2]
		const addressJ9lptvL = accounts[3]
		const addressGYIll6w = accounts[3]
		const addresseB2e2A1 = "0x0000000000000000000000000000000000000001"
		const addressdhNYtcN = accounts[0]
		const addressdauyDta = accounts[0]
		const addressNQ7cS5Q = accounts[1]
		const uintNmqSyPU = BigInt("940")
		const uintw6Q6VKb = BigInt("293")
		const addressbeLQtYT = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressLNAfHOE, addressTa4EZIu, addressapipVJj, addressJ9lptvL, addressGYIll6w, addresseB2e2A1, addressdhNYtcN, addressdauyDta, addressNQ7cS5Q, uintNmqSyPU, uintw6Q6VKb, addressbeLQtYT, {from: accounts[0]});
		const addressIVtSJRH = accounts[2]
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const addressi6naMd = await DmmControllerV2JdsVPLG.getUnderlyingTokenForDmm.call(addressIVtSJRH, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressF34bAQp = accounts[2]
		const addressYtRyDQI = accounts[2]
		const addresszkrZoh3 = accounts[2]
		const addressMCFXKpX = accounts[3]
		const addressGqUbeFV = accounts[3]
		const addresswryovTK = "0x0000000000000000000000000000000000000001"
		const addressXbJpxYT = accounts[0]
		const addressKn9YOWC = accounts[0]
		const addressEj4KUKs = accounts[1]
		const uintxAnlRXn = BigInt("940")
		const uint1DkuzZ = BigInt("293")
		const addresstOTUvN2 = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressF34bAQp, addressYtRyDQI, addresszkrZoh3, addressMCFXKpX, addressGqUbeFV, addresswryovTK, addressXbJpxYT, addressKn9YOWC, addressEj4KUKs, uintxAnlRXn, uint1DkuzZ, addresstOTUvN2, {from: accounts[0]});
		const addressNvWFOD = accounts[3]
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const 
ANfKTT7 = await DmmControllerV2JdsVPLG.transferOwnership.call(addressNvWFOD, {from: accounts[0]});
		await DmmControllerV2JdsVPLG.onlyOwner.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressRgxXH4R = accounts[2]
		const addressF0TNSd6 = accounts[2]
		const addressgnHUIUq = accounts[2]
		const addresshpkMbKy = accounts[3]
		const addressKFoLWaH = accounts[3]
		const addressYMRRB4F = "0x0000000000000000000000000000000000000001"
		const addressFPj4FVQ = accounts[0]
		const address646uhz = accounts[0]
		const addressKYrKOOt = accounts[1]
		const uintBdpe8w9 = BigInt("940")
		const uintl9Xin5W = BigInt("293")
		const addressAs12fdk = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressRgxXH4R, addressF0TNSd6, addressgnHUIUq, addresshpkMbKy, addressKFoLWaH, addressYMRRB4F, addressFPj4FVQ, address646uhz, addressKYrKOOt, uintBdpe8w9, uintl9Xin5W, addressAs12fdk, {from: accounts[0]});
		await DmmControllerV2JdsVPLG.unpause.call({from: accounts[3]});
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressLPhVuE6 = accounts[2]
		const addressh8gOiKe = accounts[2]
		const addressMoTug6 = accounts[2]
		const addressxmbnVS0 = accounts[3]
		const addresssV0Uw0k = accounts[3]
		const addressHyBiOH = "0x0000000000000000000000000000000000000001"
		const addressiIbzsCP = accounts[0]
		const addressovhtqk = accounts[0]
		const addressnPWPXqW = accounts[1]
		const uintod1Jrxt = BigInt("940")
		const uintMsEZRzk = BigInt("293")
		const addressvikuTAw = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressLPhVuE6, addressh8gOiKe, addressMoTug6, addressxmbnVS0, addresssV0Uw0k, addressHyBiOH, addressiIbzsCP, addressovhtqk, addressnPWPXqW, uintod1Jrxt, uintMsEZRzk, addressvikuTAw, {from: accounts[0]});
		const addressmYvzPDR = accounts[4]
		const addressDn5mAbG = accounts[5]
		const addressoKN25dP = accounts[0]
		const uintrvxun2Q = await DmmControllerV2JdsVPLG.getInterestRateByUnderlyingTokenAddress.call(addressmYvzPDR, {from: accounts[2]});
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const 
sfeBhEg = await DmmControllerV2JdsVPLG.initialize.call(addressoKN25dP, addressDn5mAbG, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addresszKIgNx0 = accounts[5]
		const addressH7NMmCX = accounts[1]
		const addressKASv3Dr = accounts[4]
		const addressYW5Zr5i = accounts[2]
		const addressg5eYB3U = accounts[2]
		const addressw6uqHT = accounts[2]
		const addresst7iAOut = accounts[0]
		const addressLtmwN8z = accounts[2]
		const addressCwV3EF8 = accounts[4]
		const uintH2PnJM = BigInt("1409")
		const uintCDvdAMW = BigInt("429")
		const addressh2mbqwf = accounts[1]
		const DmmControllerV2lykwhld = await DmmControllerV2.new(addresszKIgNx0, addressH7NMmCX, addressKASv3Dr, addressYW5Zr5i, addressg5eYB3U, addressw6uqHT, addresst7iAOut, addressLtmwN8z, addressCwV3EF8, uintH2PnJM, uintCDvdAMW, addressh2mbqwf, {from: "0x0000000000000000000000000000000000000001"});
		const uintGPDmTak = BigInt("317")
		const uintGvdzBNp = BigInt("1310")
		const uintLrMxC65 = BigInt("1274")
		const addressLdlLEw = accounts[3]
		const 
PhzB1nU = await DmmControllerV2lykwhld.increaseTotalSupply.call(uintGvdzBNp, uintGPDmTak, {from: accounts[5]});
		const uintorqwnI = await DmmControllerV2lykwhld.requireTokenExists.call(uintLrMxC65, {from: accounts[1]});
		const addresstB9TUqM = await DmmControllerV2lykwhld.setUnderlyingTokenValuator.call(addressLdlLEw, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressJE6TVEM = accounts[2]
		const addressgT7Cqub = accounts[2]
		const addressN3pAW3y = accounts[2]
		const addressT7XkjZZ = accounts[3]
		const addresswU44I5E = accounts[3]
		const addressLMC074 = "0x0000000000000000000000000000000000000001"
		const addresslKArrnY = accounts[0]
		const address3VOMcj = accounts[0]
		const addressvjzQfyW = accounts[1]
		const uintIRiL1Uj = BigInt("940")
		const uintp6Bm5Gg = BigInt("293")
		const addressfoTBksQ = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressJE6TVEM, addressgT7Cqub, addressN3pAW3y, addressT7XkjZZ, addresswU44I5E, addressLMC074, addresslKArrnY, address3VOMcj, addressvjzQfyW, uintIRiL1Uj, uintp6Bm5Gg, addressfoTBksQ, {from: accounts[0]});
		const uintWJU6EAe = BigInt("68")
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const addressQSXq1n = await DmmControllerV2JdsVPLG.getDmmTokenAddressByDmmTokenId.call(uintWJU6EAe, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspEAew5L = accounts[2]
		const addresstTMSbM = accounts[2]
		const addresstwji6u = accounts[2]
		const addresssJ3uCGs = accounts[3]
		const addressJ7Zh3u7 = accounts[3]
		const addresshLx2Z6u = "0x0000000000000000000000000000000000000001"
		const addressXILr1z3 = accounts[0]
		const addressku0ltkn = accounts[0]
		const addressVZCqsFK = accounts[1]
		const uintU8Ob52z = BigInt("940")
		const uintk9aLXTD = BigInt("293")
		const addressLN5sMzg = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addresspEAew5L, addresstTMSbM, addresstwji6u, addresssJ3uCGs, addressJ7Zh3u7, addresshLx2Z6u, addressXILr1z3, addressku0ltkn, addressVZCqsFK, uintU8Ob52z, uintk9aLXTD, addressLN5sMzg, {from: accounts[0]});
		const addressMOEsMnI = accounts[5]
		const addressRx6UIRc = accounts[2]
		const addressAytAizi = accounts[5]
		const addressFvF8F1W = await DmmControllerV2JdsVPLG.setDmmEtherFactory.call(addressMOEsMnI, {from: accounts[0]});
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const addressdrpoDMI = await DmmControllerV2JdsVPLG.setInterestRateInterface.call(addressRx6UIRc, {from: accounts[3]});
		const addressPjF7rHW = await DmmControllerV2JdsVPLG.notBlacklisted.call(addressAytAizi, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressFSfDmms = accounts[2]
		const addressLcEnuaU = accounts[2]
		const addressOHWpn1v = accounts[2]
		const addressZEWk2Zl = accounts[3]
		const addressrZAi6h = accounts[3]
		const addressWozP48r = "0x0000000000000000000000000000000000000001"
		const addressCbz0v3Q = accounts[0]
		const addressuMIMyue = accounts[0]
		const addressjpOKeeW = accounts[1]
		const uintcRNVkS5 = BigInt("940")
		const uinteOrji3 = BigInt("293")
		const addressaG4i4Rm = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressFSfDmms, addressLcEnuaU, addressOHWpn1v, addressZEWk2Zl, addressrZAi6h, addressWozP48r, addressCbz0v3Q, addressuMIMyue, addressjpOKeeW, uintcRNVkS5, uinteOrji3, addressaG4i4Rm, {from: accounts[0]});
		const addressMyh65CU = accounts[0]
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const addressfrEpHFU = await DmmControllerV2JdsVPLG.getDmmTokenForUnderlying.call(addressMyh65CU, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressl0XFVVu = accounts[2]
		const addressVahHGzI = accounts[2]
		const addressT1g5Jxv = accounts[2]
		const addresssbmmDRs = accounts[3]
		const addresss8DTPhl = accounts[3]
		const addressUCSEk1 = "0x0000000000000000000000000000000000000001"
		const address4P5rEZ = accounts[0]
		const addressBpIOc7 = accounts[0]
		const addressnU7iSN = accounts[1]
		const uintFIWJQrJ = BigInt("940")
		const uintsxkSvfs = BigInt("293")
		const addressEERkeo9 = accounts[1]
		const DmmControllerV2JdsVPLG = await DmmControllerV2.new(addressl0XFVVu, addressVahHGzI, addressT1g5Jxv, addresssbmmDRs, addresss8DTPhl, addressUCSEk1, address4P5rEZ, addressBpIOc7, addressnU7iSN, uintFIWJQrJ, uintsxkSvfs, addressEERkeo9, {from: accounts[0]});
		const uintdQnM2uA = BigInt("441")
		const boolVKV1mJE = await DmmControllerV2JdsVPLG.paused.call({from: accounts[5]});
		const uintYH0rR2b = await DmmControllerV2JdsVPLG.getActiveCollateralization.call({from: accounts[4]});
		const uintmwRanZz = await DmmControllerV2JdsVPLG.requireTokenExists.call(uintdQnM2uA, {from: "0x0000000000000000000000000000000000000001"});
	});
})