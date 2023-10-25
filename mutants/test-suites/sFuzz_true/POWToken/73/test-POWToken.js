const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenD4o8McZ = await POWToken.new({from: accounts[5]});
		const uintTBvqY7z = BigInt("1523")
//		await POWTokenD4o8McZ.unpause.call({from: accounts[0]});
//		await POWTokenD4o8McZ.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KRf7c08 = await POWTokenD4o8McZ.setWorkingHashRate.call(uintTBvqY7z, {from: accounts[2]});

		await expect(POWTokenD4o8McZ.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHNTMSmX = await POWToken.new({from: accounts[1]});
		const uintMPVyePT = BigInt("1840")
		const addressyZN37Xg = accounts[5]
		const addressTOuSEJt = accounts[5]
		const uintjfA2DxK = BigInt("1310")
		const addressdZo9kQK = "0x0000000000000000000000000000000000000001"
		const addressZP8LxNz = "0x0000000000000000000000000000000000000001"
//		const uint256MhWFcd = await POWTokenHNTMSmX.getCurWorkingRate.call({from: accounts[5]});
//		const addressXAGTw0 = await POWTokenHNTMSmX.mint.call(addressyZN37Xg, uintMPVyePT, {from: accounts[2]});
//		const addressClgtf3r = await POWTokenHNTMSmX.setParamSetter.call(addressTOuSEJt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsHD9HEU = await POWTokenHNTMSmX.transferFrom.call(addressZP8LxNz, addressdZo9kQK, uintjfA2DxK, {from: accounts[4]});

		await expect(POWTokenHNTMSmX.getCurWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEzmyEFM = await POWToken.new({from: accounts[1]});
		const uintcLes1D2 = BigInt("1904")
		const uinteMr5mwp = BigInt("1124")
		const uinty0gaNto = BigInt("1716")
		const uintSMHre8I = BigInt("239")
		const uintIV9dYD = BigInt("1804")
		const addresssRc8lxg = accounts[0]
		const addresseIMzktr = accounts[4]
		const addressrfuhuN6 = accounts[2]
		const addressy7yA7WI = accounts[3]
		const addressGauooQ3 = accounts[1]
		const addressMIvHanq = accounts[0]
		const addressgoUBQB6 = accounts[1]
		const addresss4eoif4 = accounts[2]
		const stringZIox5n = "D7YbBcBN8OHPOjSmkVQHhsfhC3QXRaTYHOC8WmQPLDRXCW2d7vghl"
		const stringvnnxRr6 = "WHOFT7AWQsRG6IVCP4gfkNhAVHfYCMAz"
		const uintNtvMPLw = BigInt("257")
		const uintHLuNehB = BigInt("863")
		const uintchwZYai = BigInt("1394")
		const address0RqpuH = "0x0000000000000000000000000000000000000001"
//		const stringhIe0Qv9 = await POWTokenEzmyEFM.initialize.call(stringvnnxRr6, stringZIox5n, addresss4eoif4, addressgoUBQB6, addressMIvHanq, addressGauooQ3, addressy7yA7WI, addressrfuhuN6, addresseIMzktr, addresssRc8lxg, uintIV9dYD, uintSMHre8I, uinty0gaNto, uinteMr5mwp, uintcLes1D2, {from: accounts[4]});
//		const uint256Te2D7M3 = await POWTokenEzmyEFM.addHashRate.call(uintNtvMPLw, {from: accounts[2]});
//		const uint256uz7BjFz = await POWTokenEzmyEFM.notifyRewardAmount.call(uintHLuNehB, {from: accounts[3]});
//		await POWTokenEzmyEFM.whenPaused.call({from: accounts[3]});
//		const boolfHq5kT = await POWTokenEzmyEFM.approve.call(address0RqpuH, uintchwZYai, {from: accounts[3]});
//		const uint256rALJKq = await POWTokenEzmyEFM.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenEzmyEFM.initialize.call(stringvnnxRr6, stringZIox5n, addresss4eoif4, addressgoUBQB6, addressMIvHanq, addressGauooQ3, addressy7yA7WI, addressrfuhuN6, addresseIMzktr, addresssRc8lxg, uintIV9dYD, uintSMHre8I, uinty0gaNto, uinteMr5mwp, uintcLes1D2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenD0W6RP = await POWToken.new({from: accounts[1]});
//		await POWTokenD0W6RP.whenPaused.call({from: accounts[5]});
//		await POWTokenD0W6RP.onlyOwner.call({from: accounts[4]});

		await expect(POWTokenD0W6RP.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenG7Qy07 = await POWToken.new({from: accounts[0]});
		const uintULfCPbr = BigInt("718")
//		const uint256xSD8VTq = await POWTokenG7Qy07.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		const uint256QMXqj7T = await POWTokenG7Qy07.setStakingRewardRatio.call(uintULfCPbr, {from: accounts[3]});

		await expect(POWTokenG7Qy07.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpu7QsVS = await POWToken.new({from: accounts[4]});
		const uintrIA5u2O = BigInt("1801")
		const addressa8nuv6j = accounts[2]
		const addressXCbAyYs = accounts[1]
		const uintkRGaLWw = BigInt("1269")
		const addressylUVofW = accounts[4]
		const uintDniouuO = BigInt("1716")
		const uintBZDOjaa = BigInt("1224")
		const addressvUaFwL = accounts[0]
//		const boolSALctFj = await POWTokenpu7QsVS.transferFrom.call(addressXCbAyYs, addressa8nuv6j, uintrIA5u2O, {from: accounts[1]});
//		const addressBS9Kj1K = await POWTokenpu7QsVS.claimIncome.call(addressylUVofW, uintkRGaLWw, {from: accounts[1]});
//		const uint256t4X1yYH = await POWTokenpu7QsVS.setDepreciationNumerator.call(uintDniouuO, {from: accounts[4]});
//		const uint256AJFRRa = await POWTokenpu7QsVS.getCurWorkingRate.call({from: accounts[0]});
//		const addressG1lgNnW = await POWTokenpu7QsVS.inCaseTokensGetStuck.call(addressvUaFwL, uintBZDOjaa, {from: accounts[3]});

		await expect(POWTokenpu7QsVS.transferFrom.call(addressXCbAyYs, addressa8nuv6j, uintrIA5u2O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencFP5OcR = await POWToken.new({from: accounts[1]});
		const uintIUFLXaV = BigInt("1259")
		const uintHCZqA3 = BigInt("1506")
		const uintxzo4juI = BigInt("1198")
		const uintUvcauzg = BigInt("1678")
		const uintMs9vbZ1 = BigInt("1392")
		const uintyAd99bM = BigInt("1882")
		const addressWuhivJ = accounts[3]
		const addresstjCPKsh = accounts[0]
		const addressRPP0dJ3 = accounts[0]
		const addressbFow8DB = accounts[3]
		const addressAyeKXcl = accounts[0]
		const addressTRXTZtL = accounts[0]
		const addressSlDFIa9 = accounts[3]
		const addressrPyRdTv = accounts[2]
		const stringJ02qh17 = "KEanGriDWcd2EO7aGEW"
		const stringv32jPgB = "sKWIR7heBAnF9"
//		const uint256Rf36s6x = await POWTokencFP5OcR.getHistoryWorkingRate.call({from: accounts[3]});
//		const uint256vCeR0nR = await POWTokencFP5OcR.addHashRate.call(uintIUFLXaV, {from: accounts[4]});
//		const stringMPSlGev = await POWTokencFP5OcR.initialize.call(stringv32jPgB, stringJ02qh17, addressrPyRdTv, addressSlDFIa9, addressTRXTZtL, addressAyeKXcl, addressbFow8DB, addressRPP0dJ3, addresstjCPKsh, addressWuhivJ, uintyAd99bM, uintMs9vbZ1, uintUvcauzg, uintxzo4juI, uintHCZqA3, {from: accounts[3]});

		await expect(POWTokencFP5OcR.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenCYA6spL = await POWToken.new({from: accounts[0]});
		const uintJF45Lw = BigInt("994")
//		const uint256EgMka9p = await POWTokenCYA6spL.setMinerPoolFeeNumerator.call(uintJF45Lw, {from: accounts[4]});
//		const uint256TbQsUCh = await POWTokenCYA6spL.lpStakingRewardRate.call({from: accounts[4]});

		await expect(POWTokenCYA6spL.setMinerPoolFeeNumerator.call(uintJF45Lw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencFP5OcR = await POWToken.new({from: accounts[1]});
		const uinth14Ijks = BigInt("1238")
		const uintoVw5UoR = BigInt("1506")
		const uintjT44lrS = BigInt("1198")
		const uintT5e1hwX = BigInt("1678")
		const uintBKrYLPI = BigInt("1392")
		const uintE67uTDv = BigInt("1882")
		const addressrCl5rTi = accounts[3]
		const addressCFLyC1A = accounts[0]
		const addresswOdhBDg = accounts[0]
		const addressId67fo = accounts[3]
		const addressbUTgjLP = accounts[0]
		const addressSukDMbY = accounts[0]
		const addressuSUP4lF = accounts[3]
		const addresseNtVjrg = accounts[2]
		const stringJ02qh17 = "KEanGriDWcd2EO7aGEW"
		const stringv32jPgB = "sKWIR7heBAnF9"
//		const uint256U8Ypmsf = await POWTokencFP5OcR.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
//		const uint256vCeR0nR = await POWTokencFP5OcR.addHashRate.call(uinth14Ijks, {from: accounts[4]});
//		await POWTokencFP5OcR.whenNotPaused.call({from: accounts[1]});
//		const stringMPSlGev = await POWTokencFP5OcR.initialize.call(stringv32jPgB, stringJ02qh17, addresseNtVjrg, addressuSUP4lF, addressSukDMbY, addressbUTgjLP, addressId67fo, addresswOdhBDg, addressCFLyC1A, addressrCl5rTi, uintE67uTDv, uintBKrYLPI, uintT5e1hwX, uintjT44lrS, uintoVw5UoR, {from: accounts[3]});

		await expect(POWTokencFP5OcR.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenD0W6RP = await POWToken.new({from: accounts[1]});
		const uintBENrBg5 = BigInt("387")
		const addresspTcuvj1 = accounts[4]
		const uintoFAnyDV = BigInt("1795")
		const addressYQQkip8 = accounts[5]
//		const addressepMLttG = await POWTokenD0W6RP.mint.call(addresspTcuvj1, uintBENrBg5, {from: accounts[5]});
//		const boolzJxINg = await POWTokenD0W6RP.transfer.call(addressYQQkip8, uintoFAnyDV, {from: accounts[5]});
//		await POWTokenD0W6RP.onlyOwner.call({from: accounts[4]});

		await expect(POWTokenD0W6RP.mint.call(addresspTcuvj1, uintBENrBg5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenD0W6RP = await POWToken.new({from: accounts[1]});
		const byteuhmNCI = "0x0b071e1b0a1e04191e011a17191a1b0d1b1c0f0803001e14020b160b14161504"
		const byte6dpgB3 = "0x0b021503180615081d13101a081a181f12031207110f17041112120a01040f13"
		const uintYTBQfhr = BigInt("192")
		const uintD5PTB48 = BigInt("681")
		const uintCUVOfK6 = BigInt("1162")
		const addressZZnQJ81 = "0x0000000000000000000000000000000000000001"
		const addressJXjkc9J = accounts[0]
//		const addressiRXZ43C = await POWTokenD0W6RP.permit.call(addressJXjkc9J, addressZZnQJ81, uintCUVOfK6, uintD5PTB48, uintYTBQfhr, byte6dpgB3, byteuhmNCI, {from: accounts[1]});
//		await POWTokenD0W6RP.onlyOwner.call({from: accounts[4]});

		await expect(POWTokenD0W6RP.permit.call(addressJXjkc9J, addressZZnQJ81, uintCUVOfK6, uintD5PTB48, uintYTBQfhr, byte6dpgB3, byteuhmNCI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencFP5OcR = await POWToken.new({from: accounts[1]});
		const uintfRI5mM = BigInt("1654")
		const addressZibW57H = accounts[5]
		const uintrt9pXYq = BigInt("1280")
		const boolZTZHdv = await POWTokencFP5OcR.approve.call(addressZibW57H, uintfRI5mM, {from: accounts[5]});
//		const uint256Rf36s6x = await POWTokencFP5OcR.getHistoryWorkingRate.call({from: accounts[3]});
//		const uint256Ijgs36s = await POWTokencFP5OcR.lpStakingRewardRate.call({from: accounts[4]});
//		const uint256vCeR0nR = await POWTokencFP5OcR.addHashRate.call(uintrt9pXYq, {from: accounts[4]});

		assert.equal(boolZTZHdv, true)
		await expect(POWTokencFP5OcR.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencFP5OcR = await POWToken.new({from: accounts[1]});
		const uintLuiMhnb = BigInt("69")
		const addresshArbYEp = accounts[1]
		const uintsCnGKxz = BigInt("1290")
//		await POWTokencFP5OcR.updateIncomeRate.call({from: accounts[0]});
//		const boollwlvn9t = await POWTokencFP5OcR.transfer.call(addresshArbYEp, uintLuiMhnb, {from: accounts[2]});
//		const uint256vCeR0nR = await POWTokencFP5OcR.addHashRate.call(uintsCnGKxz, {from: accounts[4]});

		await expect(POWTokencFP5OcR.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenD0W6RP = await POWToken.new({from: accounts[1]});
		const addressOgU41A = accounts[3]
		const uint256UJ8WtWe = await POWTokenD0W6RP.remainingAmount.call({from: accounts[0]});
		const uint256Dw25Ck8 = await POWTokenD0W6RP.lpStakingRewardRate.call({from: accounts[4]});
//		const addressiL2kfls = await POWTokenD0W6RP.setParamSetter.call(addressOgU41A, {from: accounts[5]});
//		await POWTokenD0W6RP.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256Dw25Ck8, BigInt("0"))
		assert.equal(uint256UJ8WtWe, BigInt("0"))
		await expect(POWTokenD0W6RP.setParamSetter.call(addressOgU41A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokencFP5OcR = await POWToken.new({from: accounts[1]});
		const uintWQciCeh = BigInt("1726")
		const addressUtwyktZ = accounts[1]
		const uinti3DSwqs = BigInt("1290")
//		const boollwlvn9t = await POWTokencFP5OcR.transfer.call(addressUtwyktZ, uintWQciCeh, {from: accounts[2]});
//		const uint256vCeR0nR = await POWTokencFP5OcR.addHashRate.call(uinti3DSwqs, {from: accounts[4]});

		await expect(POWTokencFP5OcR.transfer.call(addressUtwyktZ, uintWQciCeh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenuQGsNp1 = await POWToken.new({from: accounts[4]});
		const uinttUvCdAM = BigInt("1417")
		const addressLK1KIe5 = accounts[0]
		const uintb4Yykr1 = BigInt("1687")
		const addressKAD2NDt = accounts[4]
//		const addressT01NSKH = await POWTokenuQGsNp1.claimReward.call(addressLK1KIe5, uinttUvCdAM, {from: accounts[3]});
//		const uint256MNGhns3 = await POWTokenuQGsNp1.stakingRewardRate.call({from: accounts[0]});
//		const addressAPTQFg0 = await POWTokenuQGsNp1.inCaseTokensGetStuck.call(addressKAD2NDt, uintb4Yykr1, {from: accounts[3]});
//		const uint256YaFJ8Ts = await POWTokenuQGsNp1.remainingAmount.call({from: accounts[4]});

		await expect(POWTokenuQGsNp1.claimReward.call(addressLK1KIe5, uinttUvCdAM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenD0W6RP = await POWToken.new({from: accounts[1]});
		const uintgVwFvuk = BigInt("115")
		const addressIBDLSAf = "0x0000000000000000000000000000000000000001"
		const byteWZeNEtm = "0x0b071e1b0a1e04191e011a17191a1b0d1b1c0f0803001e14020b160b14161504"
		const byteBNxuyue = "0x0b021503180615081d13101a081a181f12031207110f17041112120a01040f13"
		const uintLCPeSvh = BigInt("192")
		const uintj21rAOd = BigInt("681")
		const uintOk3UE8 = BigInt("1162")
		const addressJOduhlB = "0x0000000000000000000000000000000000000001"
		const addressnpKSrg4 = accounts[0]
		const uintceazZz4 = BigInt("1350")
		const uintXgM4Bjc = BigInt("1211")
//		const addressAwyPcJ = await POWTokenD0W6RP.claimIncome.call(addressIBDLSAf, uintgVwFvuk, {from: accounts[3]});
//		const addressiRXZ43C = await POWTokenD0W6RP.permit.call(addressnpKSrg4, addressJOduhlB, uintOk3UE8, uintj21rAOd, uintLCPeSvh, byteBNxuyue, byteWZeNEtm, {from: accounts[1]});
//		const uint2566yiz7j = await POWTokenD0W6RP.setWorkingHashRate.call(uintceazZz4, {from: accounts[5]});
//		const uint256LWgeIhk = await POWTokenD0W6RP.addHashRate.call(uintXgM4Bjc, {from: accounts[3]});
//		await POWTokenD0W6RP.onlyOwner.call({from: accounts[4]});

		await expect(POWTokenD0W6RP.claimIncome.call(addressIBDLSAf, uintgVwFvuk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken11Ns2S = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGc4xLj8 = accounts[2]
		const addresscUHdaeV = await POWToken11Ns2S.setBtcParam.call(addressGc4xLj8, {from: accounts[2]});
		const uint256Bi7VEMW = await POWToken11Ns2S.getCurWorkingRate.call({from: accounts[3]});
		const uint256AtV1IGx = await POWToken11Ns2S.getCurWorkingRate.call({from: accounts[0]});
	});

	it('test for POWToken', async () => {
		const POWTokenD0W6RP = await POWToken.new({from: accounts[1]});
		const uint2PxBOn = BigInt("387")
		const addresslXtND9g = accounts[4]
		const byteXDv3O4E = "0x060b07151d1906070e1713080c10090320070f151d1c091c110c0b0a01201019"
		const byteyuqC1Sc = "0x091f0b0d1315201c010c0405091e0a0b0f0d01111807160a0007090608091608"
		const uintII9pSIC = BigInt("212")
		const uintJeBflIB = BigInt("821")
		const uintOXbWVUO = BigInt("1931")
		const addressYdTFs8l = "0x0000000000000000000000000000000000000001"
		const addressxibtgt9 = accounts[1]
		const boolKOjNxhF = await POWTokenD0W6RP.paused.call({from: accounts[3]});
//		const addressepMLttG = await POWTokenD0W6RP.mint.call(addresslXtND9g, uint2PxBOn, {from: accounts[5]});
//		const addressJ6Icn4B = await POWTokenD0W6RP.permit.call(addressxibtgt9, addressYdTFs8l, uintOXbWVUO, uintJeBflIB, uintII9pSIC, byteyuqC1Sc, byteXDv3O4E, {from: accounts[3]});

		assert.equal(boolKOjNxhF, false)
		await expect(POWTokenD0W6RP.mint.call(addresslXtND9g, uint2PxBOn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})