const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokengyT1Z3R = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPS9nke = BigInt("1491")
		const uintx9CheC3 = BigInt("1959")
		const uintPx0BXf = BigInt("298")
		const uint6GLvlX = BigInt("691")
		const uintpgIByOc = BigInt("2031")
		const addresstNup4SO = accounts[0]
		const addressfPZKIMF = accounts[0]
		const addressV4pfuOu = "0x0000000000000000000000000000000000000001"
		const addressvm0hI1 = accounts[1]
		const addressjX8jBp = accounts[2]
		const addressy8ciaqO = accounts[4]
		const addressMV2BtSW = "0x0000000000000000000000000000000000000001"
		const addressk9jeVJK = accounts[1]
		const stringZWhztED = "rF1gwdU4Q3Jty1YHfJZHLj3wjJqWjU33YYyvHo9q5C2ew4gg1yvHJ72w8vplruW8Ddau"
		const stringHkiKHQk = "oI2XVc3EqGN2AvZCdDtBCipq2Igkm8ihMfKw"
		const stringaeVMQJT = await POWTokengyT1Z3R.initialize.call(stringHkiKHQk, stringZWhztED, addressk9jeVJK, addressMV2BtSW, addressy8ciaqO, addressjX8jBp, addressvm0hI1, addressV4pfuOu, addressfPZKIMF, addresstNup4SO, uintpgIByOc, uint6GLvlX, uintPx0BXf, uintx9CheC3, uintPS9nke, {from: accounts[4]});
		await POWTokengyT1Z3R.whenNotPaused.call({from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokenRlnhsrr = await POWToken.new({from: accounts[0]});
		await POWTokenRlnhsrr.onlyOwner.call({from: accounts[1]});
		await POWTokenRlnhsrr.onlyOwner.call({from: accounts[1]});
		const uint256lpBlS10 = await POWTokenRlnhsrr.getCurWorkingRate.call({from: accounts[1]});

		await expect(POWTokenRlnhsrr.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeniAKC3lt = await POWToken.new({from: accounts[3]});
		const uintvNiy2Z = BigInt("926")
		const uintGeZucJ6 = BigInt("506")
		const addressNTBMgwu = accounts[3]
		const uintPrTMOWe = BigInt("588")
		const uint256Xna08TP = await POWTokeniAKC3lt.setElectricCharge.call(uintvNiy2Z, {from: accounts[0]});
		await POWTokeniAKC3lt.onlyParamSetter.call({from: accounts[1]});
		const addressop7snPo = await POWTokeniAKC3lt.claimIncome.call(addressNTBMgwu, uintGeZucJ6, {from: accounts[1]});
		const uint256vle17VZ = await POWTokeniAKC3lt.remainingAmount.call({from: accounts[3]});
		const uint256YR8DlWN = await POWTokeniAKC3lt.setMinerPoolFeeNumerator.call(uintPrTMOWe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokeniAKC3lt.setElectricCharge.call(uintvNiy2Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTynMgbX = await POWToken.new({from: accounts[1]});
		const addressOrc5GCf = accounts[2]
		const uintVIM3LE8 = BigInt("554")
		const uintLpWPSFv = BigInt("1910")
		const addressg9taCbN = accounts[4]
		const addresszCsP0sc = await POWTokenTynMgbX.setParamSetter.call(addressOrc5GCf, {from: accounts[0]});
		const uint256Ps5R4SK = await POWTokenTynMgbX.notifyRewardAmount.call(uintVIM3LE8, {from: accounts[0]});
		const boolAXaqSyh = await POWTokenTynMgbX.approve.call(addressg9taCbN, uintLpWPSFv, {from: accounts[0]});

		await expect(POWTokenTynMgbX.setParamSetter.call(addressOrc5GCf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintp7Jr6YC = BigInt("1617")
		const addressYxY5J2e = "0x0000000000000000000000000000000000000001"
		const uint256qzki0cL = await POWTokenqGJxnBh.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const addressbmlRVky = await POWTokenqGJxnBh.mint.call(addressYxY5J2e, uintp7Jr6YC, {from: accounts[4]});
		await POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]});
		await POWTokenqGJxnBh.whenPaused.call({from: accounts[1]});

		await expect(POWTokenqGJxnBh.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenE7aojiD = await POWToken.new({from: accounts[0]});
		const uintyu8tolV = BigInt("1062")
		const addressjoLd0XP = accounts[3]
		const uintwflAbd4 = BigInt("133")
		const addressiv0nfhl = accounts[4]
		const uintGnop7C = BigInt("1612")
		const addressW5cjx63 = await POWTokenE7aojiD.mint.call(addressjoLd0XP, uintyu8tolV, {from: accounts[4]});
		const addressLElQVB0 = await POWTokenE7aojiD.mint.call(addressiv0nfhl, uintwflAbd4, {from: accounts[4]});
		const uint256UWgEeT0 = await POWTokenE7aojiD.getCurWorkingRate.call({from: accounts[0]});
		const uint256aCnNT26 = await POWTokenE7aojiD.setMinerPoolFeeNumerator.call(uintGnop7C, {from: accounts[1]});
		await POWTokenE7aojiD.unpause.call({from: accounts[0]});
		const uint256xV8VOcj = await POWTokenE7aojiD.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenE7aojiD.mint.call(addressjoLd0XP, uintyu8tolV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		await POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]});
		await POWTokenqGJxnBh.whenPaused.call({from: accounts[1]});

		await expect(POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEHYrUkG = await POWToken.new({from: accounts[2]});
		const uintmjWdS0y = BigInt("1617")
		const addressEWUN77a = "0x0000000000000000000000000000000000000001"
		const uintxihBeVx = BigInt("1556")
		const addressz04XcT0 = accounts[2]
		const uintlyauk3r = BigInt("1384")
		const addresspN2kCi7 = accounts[1]
		const addresswO5AJYN = await POWTokenEHYrUkG.claimReward.call(addressEWUN77a, uintmjWdS0y, {from: accounts[4]});
		const addressGymGIvx = await POWTokenEHYrUkG.mint.call(addressz04XcT0, uintxihBeVx, {from: accounts[2]});
		const addressGse1S6w = await POWTokenEHYrUkG.claimIncome.call(addresspN2kCi7, uintlyauk3r, {from: accounts[0]});

		await expect(POWTokenEHYrUkG.claimReward.call(addressEWUN77a, uintmjWdS0y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPo3gJDe = await POWToken.new({from: accounts[4]});
		const uint256KVxRAop = await POWTokenPo3gJDe.getCurWorkingRate.call({from: accounts[1]});
		const uint256PwXFW4w = await POWTokenPo3gJDe.getCurWorkingRate.call({from: accounts[4]});
		const uint256MPUsqR = await POWTokenPo3gJDe.lpStakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenPo3gJDe.getCurWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEHYrUkG = await POWToken.new({from: accounts[2]});
		const uintyAKbykW = BigInt("1617")
		const addressviSfNJb = "0x0000000000000000000000000000000000000000"
		const uintcJic0AS = BigInt("1384")
		const addressBh87g63 = accounts[1]
		const addresswO5AJYN = await POWTokenEHYrUkG.claimReward.call(addressviSfNJb, uintyAKbykW, {from: accounts[4]});
		await POWTokenEHYrUkG.onlyOwner.call({from: accounts[3]});
		const addressGse1S6w = await POWTokenEHYrUkG.claimIncome.call(addressBh87g63, uintcJic0AS, {from: accounts[0]});

		await expect(POWTokenEHYrUkG.claimReward.call(addressviSfNJb, uintyAKbykW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIDtiWkE = await POWToken.new({from: accounts[4]});
		const uintabCJTrx = BigInt("282")
		const uintzNgicGx = BigInt("386")
		const uinthuPhGA = BigInt("848")
		const uintmOtyO3A = BigInt("1263")
		const uintoxfS90V = BigInt("336")
		const addressKgO37oa = accounts[2]
		const addressrISlq8N = accounts[4]
		const addressQnKQLs = accounts[0]
		const addressmnT4R6 = accounts[4]
		const addressI0hRc5c = accounts[4]
		const addressFU7gr3U = "0x0000000000000000000000000000000000000001"
		const addressAtrT228 = accounts[3]
		const addressQEXeg8l = accounts[4]
		const stringUauJylN = "JDsDAwW3Ojqi6SfVN68MC57Ux701Xayu9P6vdv54D8WXUw2fZ7f14"
		const stringcZtyoyC = "CNwDn8pk2dHqiIMPUdjfujTdNwVGmwmOEdB18wcupxhoIVhgi6gJiRzQVzn7Wh9mudXpjYSAOlc7"
		const uint256gELdiOw = await POWTokenIDtiWkE.getHistoryWorkingRate.call({from: accounts[0]});
		const stringsGw7YAe = await POWTokenIDtiWkE.initialize.call(stringcZtyoyC, stringUauJylN, addressQEXeg8l, addressAtrT228, addressFU7gr3U, addressI0hRc5c, addressmnT4R6, addressQnKQLs, addressrISlq8N, addressKgO37oa, uintoxfS90V, uintmOtyO3A, uinthuPhGA, uintzNgicGx, uintabCJTrx, {from: accounts[0]});
		await POWTokenIDtiWkE.whenNotPaused.call({from: accounts[0]});
		await POWTokenIDtiWkE.whenPaused.call({from: accounts[3]});

		await expect(POWTokenIDtiWkE.getHistoryWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintdY2090I = BigInt("1617")
		const addressV8nwhZ0 = "0x00000000000000000000000000000000000000-1"
		const uintiiXrhOb = BigInt("498")
		const addressTbr8hwz = accounts[5]
		const uintXME6Rde = BigInt("1823")
		const addressPRAGcJ = accounts[4]
		const uint256Qq5hzkk = await POWTokenqGJxnBh.lpStakingRewardRate.call({from: accounts[3]});
		const addressbmlRVky = await POWTokenqGJxnBh.mint.call(addressV8nwhZ0, uintdY2090I, {from: accounts[4]});
		const addressavmXhdZ = await POWTokenqGJxnBh.inCaseTokensGetStuck.call(addressTbr8hwz, uintiiXrhOb, {from: accounts[4]});
		const boolSsoGo3j = await POWTokenqGJxnBh.approve.call(addressPRAGcJ, uintXME6Rde, {from: accounts[1]});

		assert.equal(uint256Qq5hzkk, BigInt("0"))
		await expect(POWTokenqGJxnBh.mint.call(addressV8nwhZ0, uintdY2090I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintmIa8uXx = BigInt("1059")
		const addressT2tvgt = accounts[1]
		const uintl3Vwyg4 = BigInt("1053")
		const addressvYbSoyn = accounts[0]
		const uintewJwM2N = BigInt("464")
		const boolladwDus = await POWTokenqGJxnBh.approve.call(addressT2tvgt, uintmIa8uXx, {from: accounts[2]});
		await POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]});
		await POWTokenqGJxnBh.onlyOwner.call({from: accounts[4]});
		const addressyHWs1FV = await POWTokenqGJxnBh.mint.call(addressvYbSoyn, uintl3Vwyg4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FpL7ir5 = await POWTokenqGJxnBh.notifyRewardAmount.call(uintewJwM2N, {from: accounts[1]});

		assert.equal(boolladwDus, true)
		await expect(POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uinteenTARS = BigInt("1960")
		const address7MlEid = accounts[2]
		const boolSgwJQEi = await POWTokenqGJxnBh.transfer.call(address7MlEid, uinteenTARS, {from: accounts[0]});
		await POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]});
		await POWTokenqGJxnBh.whenPaused.call({from: accounts[1]});

		await expect(POWTokenqGJxnBh.transfer.call(address7MlEid, uinteenTARS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintosNEKA = BigInt("631")
		const addressCvTGTQt = accounts[2]
		const addressN2Sx5ix = "0x0000000000000000000000000000000000000001"
		const boolmJQc9K7 = await POWTokenqGJxnBh.transferFrom.call(addressN2Sx5ix, addressCvTGTQt, uintosNEKA, {from: accounts[1]});
		await POWTokenqGJxnBh.whenPaused.call({from: accounts[1]});

		await expect(POWTokenqGJxnBh.transferFrom.call(addressN2Sx5ix, addressCvTGTQt, uintosNEKA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintNHz9L4d = BigInt("1368")
		const addressyj80gu = accounts[1]
		const uintTCLEasq = BigInt("618")
		const uint256WITLdn = await POWTokenqGJxnBh.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const addressXW6Aps1 = await POWTokenqGJxnBh.mint.call(addressyj80gu, uintNHz9L4d, {from: accounts[1]});
		await POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]});
		const uint256w2hrzRI = await POWTokenqGJxnBh.setStartMiningTime.call(uintTCLEasq, {from: accounts[3]});

		assert.equal(uint256WITLdn, BigInt("0"))
		await expect(POWTokenqGJxnBh.mint.call(addressyj80gu, uintNHz9L4d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintEhPLrSB = BigInt("1797")
		const uintxqSo6tA = BigInt("556")
		const uintHlmPURK = BigInt("1041")
		const uint5QiMFe = BigInt("1328")
		const uintr1lLODl = BigInt("429")
		const address1FJW4c = accounts[2]
		const addressvzopEnG = accounts[2]
		const addressuAFEFwe = "0x0000000000000000000000000000000000000001"
		const addresswJmhRVr = "0x0000000000000000000000000000000000000001"
		const addressZCzHLyv = accounts[4]
		const addressGUyekN7 = accounts[4]
		const addresstUkJGt2 = accounts[4]
		const addressbjuAUt = accounts[0]
		const stringNk3RP3M = "B2rkKJvrUWXKpMhnE2Gy598OH9RzWOBo2vYjkipX68iFjzmDGp6BbuV3fhA"
		const stringc6w4NcF = "K"
		const bytenoo2Qyv = "0x0d011b10030715141a191e0a1620160a03101a19041507001f1b160f1603191f"
		const byteRPyckZC = "0x08120d09111c0a1b031a19151a1c1f1a091315091a090707161813071a121210"
		const uintPdwQYSA = BigInt("146")
		const uintrzdtrok = BigInt("1348")
		const uintVOC1mPr = BigInt("1004")
		const addressTNaWY83 = accounts[3]
		const addressFOdnaJg = accounts[4]
		const stringObbd8OM = await POWTokenqGJxnBh.initialize.call(stringc6w4NcF, stringNk3RP3M, addressbjuAUt, addresstUkJGt2, addressGUyekN7, addressZCzHLyv, addresswJmhRVr, addressuAFEFwe, addressvzopEnG, address1FJW4c, uintr1lLODl, uint5QiMFe, uintHlmPURK, uintxqSo6tA, uintEhPLrSB, {from: accounts[5]});
		const addressjqWpVef = await POWTokenqGJxnBh.permit.call(addressFOdnaJg, addressTNaWY83, uintVOC1mPr, uintrzdtrok, uintPdwQYSA, byteRPyckZC, bytenoo2Qyv, {from: accounts[5]});
		const uint256OY98dgc = await POWTokenqGJxnBh.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenqGJxnBh.initialize.call(stringc6w4NcF, stringNk3RP3M, addressbjuAUt, addresstUkJGt2, addressGUyekN7, addressZCzHLyv, addresswJmhRVr, addressuAFEFwe, addressvzopEnG, address1FJW4c, uintr1lLODl, uint5QiMFe, uintHlmPURK, uintxqSo6tA, uintEhPLrSB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const byteMmbLNV = "0x1e1c181e070d171c080e1a12070102090e100e151f201e0b081a0f0f0e1a0901"
		const bytelaWs1Yo = "0x1d0d050a08191c0a18121815111f0c0a0d110f1605050507101c100e03171a08"
		const uintEkP1uqi = BigInt("127")
		const uintmyhLRmw = BigInt("1823")
		const uintaZP0pKv = BigInt("850")
		const addressa9V55t = accounts[2]
		const addressgQDwdbl = accounts[3]
		const uintS7bpeQg = BigInt("73")
		const addressMptosGq = "0x0000000000000000000000000000000000000001"
		const uintrHWcyJM = BigInt("1368")
		const addressnlhv6qQ = accounts[1]
		const uintT76b4Hz = BigInt("653")
		const addresszFGIdit = await POWTokenqGJxnBh.permit.call(addressgQDwdbl, addressa9V55t, uintaZP0pKv, uintmyhLRmw, uintEkP1uqi, bytelaWs1Yo, byteMmbLNV, {from: accounts[2]});
		const uint256WITLdn = await POWTokenqGJxnBh.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const addressMCe2sOf = await POWTokenqGJxnBh.claimReward.call(addressMptosGq, uintS7bpeQg, {from: "0x0000000000000000000000000000000000000001"});
		const addressXW6Aps1 = await POWTokenqGJxnBh.mint.call(addressnlhv6qQ, uintrHWcyJM, {from: accounts[1]});
		await POWTokenqGJxnBh.updateIncomeRate.call({from: accounts[3]});
		const uint256w2hrzRI = await POWTokenqGJxnBh.setStartMiningTime.call(uintT76b4Hz, {from: accounts[3]});
		await POWTokenqGJxnBh.onlyOwner.call({from: accounts[0]});

		await expect(POWTokenqGJxnBh.permit.call(addressgQDwdbl, addressa9V55t, uintaZP0pKv, uintmyhLRmw, uintEkP1uqi, bytelaWs1Yo, byteMmbLNV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqGJxnBh = await POWToken.new({from: accounts[1]});
		const uintckezefZ = BigInt("57")
		const addressb2G5rG9 = accounts[3]
		const uintdxsk2JU = BigInt("73")
		const addressoHfHaoE = "0x0000000000000000000000000000000000000001"
		const uintG9a54tt = BigInt("653")
		const addressHmlAHig = await POWTokenqGJxnBh.claimIncome.call(addressb2G5rG9, uintckezefZ, {from: accounts[2]});
		const uint256WITLdn = await POWTokenqGJxnBh.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const addressMCe2sOf = await POWTokenqGJxnBh.claimReward.call(addressoHfHaoE, uintdxsk2JU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256d47zrTC = await POWTokenqGJxnBh.stakingRewardRate.call({from: accounts[0]});
		const uint256w2hrzRI = await POWTokenqGJxnBh.setStartMiningTime.call(uintG9a54tt, {from: accounts[3]});

		await expect(POWTokenqGJxnBh.claimIncome.call(addressb2G5rG9, uintckezefZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})