const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenfWPU97 = await POWToken.new({from: accounts[2]});
		const uintgzhR70y = BigInt("271")
		const addresst9rS7hH = accounts[5]
		const uintMGTtL9L = BigInt("874")
//		const boolApIlj0x = await POWTokenfWPU97.transfer.call(addresst9rS7hH, uintgzhR70y, {from: accounts[2]});
//		const uint256sgmf2dL = await POWTokenfWPU97.setElectricCharge.call(uintMGTtL9L, {from: accounts[3]});

		await expect(POWTokenfWPU97.transfer.call(addresst9rS7hH, uintgzhR70y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenynRu93 = await POWToken.new({from: accounts[1]});
		const uintTRNHmfK = BigInt("1465")
		const uintjeDq2V8 = BigInt("1336")
		const uintCZnpJdJ = BigInt("206")
		const uintMspJHPM = BigInt("879")
		const uintMhy15NS = BigInt("847")
		const uintIDr2bmS = BigInt("1726")
		const addresswixsOTQ = accounts[5]
		const addressxKpT4pL = accounts[3]
		const addressypxjDiw = accounts[2]
		const addressmcA1FIe = accounts[2]
		const addressorEO9FO = "0x0000000000000000000000000000000000000001"
		const addressp2cHACo = accounts[1]
		const addressSo72iVC = accounts[1]
		const addressDZ9DQ4 = accounts[4]
		const stringRRLcEbd = "TKqdZ2qSHhtenVkoGsEJbdMM3EirRBnf449noLpCvi4Yfj"
		const stringAzHXbIn = "3OobPFSwg"
//		const uint256VlYgiZ4 = await POWTokenynRu93.setStakingRewardRatio.call(uintTRNHmfK, {from: accounts[3]});
//		const stringnH0s6pC = await POWTokenynRu93.initialize.call(stringAzHXbIn, stringRRLcEbd, addressDZ9DQ4, addressSo72iVC, addressp2cHACo, addressorEO9FO, addressmcA1FIe, addressypxjDiw, addressxKpT4pL, addresswixsOTQ, uintIDr2bmS, uintMhy15NS, uintMspJHPM, uintCZnpJdJ, uintjeDq2V8, {from: accounts[3]});

		await expect(POWTokenynRu93.setStakingRewardRatio.call(uintTRNHmfK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpkC7pf1 = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		await POWTokenpkC7pf1.whenNotPaused.call({from: accounts[2]});
		await POWTokenpkC7pf1.onlyParamSetter.call({from: accounts[1]});
		await POWTokenpkC7pf1.whenNotPaused.call({from: accounts[3]});
	});

	it('test for POWToken', async () => {
		const POWTokenCcQcG6B = await POWToken.new({from: accounts[1]});
		const uint7rlB8F = BigInt("464")
		const uintjtYWzP5 = BigInt("1151")
		const uintXJf072c = BigInt("1543")
		const uintMJCpxEO = BigInt("682")
		const uintOOz9FET = BigInt("219")
		const addressELzwg7Z = accounts[3]
		const addressrAYyxL = accounts[0]
		const addressIkIVAIe = accounts[0]
		const addressvDfBCWB = accounts[2]
		const addressFvV2NRF = accounts[3]
		const addressiabV8i = accounts[0]
		const addressMcn7KFm = accounts[1]
		const addresse9Sdirv = accounts[0]
		const stringOw6JDjE = "fAyB4RNy4wV5PDdjBnywJu52HA1TFtiO4PaTHuT3MUcm6uqAraKQPw9qteEN75tF9vyokIKT8R"
		const stringVcfi6tR = "mJ1TEDTuL9Nrapd3KMSQM4iz6mD2u59IMBqbdTq60AQV6JkDVsGGPQymQRVC1yum5sXZ"
		const uintNIKkR5M = BigInt("101")
		const addressgCGDRR3 = accounts[1]
		const uintvtnYw4 = BigInt("446")
		const uintcZS1eom = BigInt("1267")
//		const stringLCkZlb6 = await POWTokenCcQcG6B.initialize.call(stringVcfi6tR, stringOw6JDjE, addresse9Sdirv, addressMcn7KFm, addressiabV8i, addressFvV2NRF, addressvDfBCWB, addressIkIVAIe, addressrAYyxL, addressELzwg7Z, uintOOz9FET, uintMJCpxEO, uintXJf072c, uintjtYWzP5, uint7rlB8F, {from: accounts[2]});
//		const addressNOLQFOq = await POWTokenCcQcG6B.mint.call(addressgCGDRR3, uintNIKkR5M, {from: accounts[2]});
//		const uint256C09UW8d = await POWTokenCcQcG6B.setDepreciationNumerator.call(uintvtnYw4, {from: accounts[0]});
//		const uint256YvWf5i1 = await POWTokenCcQcG6B.setElectricCharge.call(uintcZS1eom, {from: accounts[3]});

		await expect(POWTokenCcQcG6B.initialize.call(stringVcfi6tR, stringOw6JDjE, addresse9Sdirv, addressMcn7KFm, addressiabV8i, addressFvV2NRF, addressvDfBCWB, addressIkIVAIe, addressrAYyxL, addressELzwg7Z, uintOOz9FET, uintMJCpxEO, uintXJf072c, uintjtYWzP5, uint7rlB8F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrOaWBxG = await POWToken.new({from: accounts[1]});
		const uintNcbBIf = BigInt("391")
		const addressolkODVv = accounts[1]
		const addressJAQFVe7 = accounts[1]
		const uintr7nwgY = BigInt("326")
		const addressJ37nc0Y = accounts[4]
//		await POWTokenrOaWBxG.whenNotPaused.call({from: accounts[0]});
//		const boolxV3yJ3m = await POWTokenrOaWBxG.transferFrom.call(addressJAQFVe7, addressolkODVv, uintNcbBIf, {from: accounts[1]});
//		const addressaLgk63q = await POWTokenrOaWBxG.claimIncome.call(addressJ37nc0Y, uintr7nwgY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VfbrnH9 = await POWTokenrOaWBxG.getHistoryWorkingRate.call({from: accounts[2]});

		await expect(POWTokenrOaWBxG.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenelxcoss = await POWToken.new({from: accounts[4]});
		const uintT38uAAP = BigInt("1277")
		const uintCLVmSEs = BigInt("309")
		const addressMgGUV4X = "0x0000000000000000000000000000000000000001"
//		const uint256Wvo0rVL = await POWTokenelxcoss.setElectricCharge.call(uintT38uAAP, {from: accounts[0]});
//		const addressupOqp3m = await POWTokenelxcoss.claimIncome.call(addressMgGUV4X, uintCLVmSEs, {from: accounts[1]});

		await expect(POWTokenelxcoss.setElectricCharge.call(uintT38uAAP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpgW7GWy = await POWToken.new({from: accounts[5]});
		const uintaY0NObP = BigInt("228")
		const uints42bJzh = BigInt("956")
		const uintWfFM6G2 = BigInt("1831")
		const uintUSTYnsS = BigInt("555")
		const uintqm37Q1P = BigInt("44")
		const addressrCNyUJG = accounts[2]
		const addressBRM2M9t = accounts[2]
		const addressCnWsUMb = accounts[0]
		const addresshVXjByh = accounts[1]
		const addressDpp01Nb = accounts[5]
		const addresspndlyX = "0x0000000000000000000000000000000000000001"
		const addressQJTJQoG = accounts[1]
		const addressqYo0Fe7 = accounts[1]
		const stringGXwsjo5 = "pQwulRgMYxPyBfZ0uuilO5jOVWLS7R0hBlv8dIlJkuPWhl"
		const stringItb14be = "5HdIv2e6ysC"
		const uintdvOnus = BigInt("371")
//		const uint256k8yuk52 = await POWTokenpgW7GWy.getHistoryWorkingRate.call({from: accounts[2]});
//		const stringDbtcW7v = await POWTokenpgW7GWy.initialize.call(stringItb14be, stringGXwsjo5, addressqYo0Fe7, addressQJTJQoG, addresspndlyX, addressDpp01Nb, addresshVXjByh, addressCnWsUMb, addressBRM2M9t, addressrCNyUJG, uintqm37Q1P, uintUSTYnsS, uintWfFM6G2, uints42bJzh, uintaY0NObP, {from: accounts[4]});
//		const uint256oYzGqg3 = await POWTokenpgW7GWy.notifyRewardAmount.call(uintdvOnus, {from: accounts[1]});

		await expect(POWTokenpgW7GWy.getHistoryWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenuE4G4M9 = await POWToken.new({from: accounts[4]});
		const uintzogZjdv = BigInt("1559")
		const addressojcY9ol = accounts[0]
		const uintsJWLMV3 = BigInt("62")
		const uintGBjKhWo = BigInt("1094")
		const byteYIZTiS = "0x0e0409021a0d0c1b0e0e10200e0d06110a160f0e0f08091d06060d0d19090b05"
		const byteYalTQo8 = "0x150b011f0c180f1818050714180715150b0901061d121a051d1208090b111d16"
		const uintffEOIMT = BigInt("22")
		const uintrvx7IQS = BigInt("1672")
		const uintpu5bJ7p = BigInt("848")
		const addressPOw4iFk = "0x0000000000000000000000000000000000000001"
		const addressazQRQZv = accounts[2]
		const uintkcrDT62 = BigInt("577")
		const addressyy8Bfka = accounts[2]
		const addressuDqjXvE = accounts[5]
		const booll3Z20tC = await POWTokenuE4G4M9.approve.call(addressojcY9ol, uintzogZjdv, {from: accounts[0]});
//		const uint256REVrHED = await POWTokenuE4G4M9.setMinerPoolFeeNumerator.call(uintsJWLMV3, {from: accounts[1]});
//		const uint256G1K0kj8 = await POWTokenuE4G4M9.setStakingRewardRatio.call(uintGBjKhWo, {from: accounts[4]});
//		const addressmu2Jvb3 = await POWTokenuE4G4M9.permit.call(addressazQRQZv, addressPOw4iFk, uintpu5bJ7p, uintrvx7IQS, uintffEOIMT, byteYalTQo8, byteYIZTiS, {from: accounts[1]});
//		const boolMcp8na = await POWTokenuE4G4M9.transferFrom.call(addressuDqjXvE, addressyy8Bfka, uintkcrDT62, {from: accounts[3]});

		assert.equal(booll3Z20tC, true)
		await expect(POWTokenuE4G4M9.setMinerPoolFeeNumerator.call(uintsJWLMV3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenKUQzfyy = await POWToken.new({from: accounts[5]});
		const uintPiPxh9L = BigInt("164")
		const uintC3gX7V1 = BigInt("1992")
		const addressJANcBjW = accounts[3]
//		await POWTokenKUQzfyy.updateIncomeRate.call({from: accounts[3]});
//		await POWTokenKUQzfyy.pause.call({from: accounts[3]});
//		const uint256xnGh18C = await POWTokenKUQzfyy.remainingAmount.call({from: accounts[3]});
//		const uint256PD5O7B7 = await POWTokenKUQzfyy.setElectricCharge.call(uintPiPxh9L, {from: accounts[3]});
//		const boolNpMYA3p = await POWTokenKUQzfyy.approve.call(addressJANcBjW, uintC3gX7V1, {from: accounts[1]});

		await expect(POWTokenKUQzfyy.updateIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfWPU97 = await POWToken.new({from: accounts[2]});
		const uinthAnHzC4 = BigInt("1609")
		const addresseTQVBaY = accounts[2]
		const uintZZa3aZw = BigInt("1467")
		const uintKRpwVET = BigInt("874")
//		const addressTEuDKuW = await POWTokenfWPU97.claimReward.call(addresseTQVBaY, uinthAnHzC4, {from: accounts[4]});
//		const uint256whW6I1K = await POWTokenfWPU97.setWorkingHashRate.call(uintZZa3aZw, {from: accounts[3]});
//		const uint256sgmf2dL = await POWTokenfWPU97.setElectricCharge.call(uintKRpwVET, {from: accounts[3]});

		await expect(POWTokenfWPU97.claimReward.call(addresseTQVBaY, uinthAnHzC4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfWPU97 = await POWToken.new({from: accounts[2]});
		const uintgGTCw1F = BigInt("984")
		const uintFKQr75v = BigInt("223")
		const uintjEa3ZZE = BigInt("872")
		const uint2563Ph95T = await POWTokenfWPU97.stakingRewardRate.call({from: accounts[2]});
//		const uint256kRl0bLb = await POWTokenfWPU97.setWorkingHashRate.call(uintgGTCw1F, {from: accounts[2]});
//		const uint256PQYakTF = await POWTokenfWPU97.setElectricCharge.call(uintFKQr75v, {from: accounts[5]});
//		const uint256sgmf2dL = await POWTokenfWPU97.setElectricCharge.call(uintjEa3ZZE, {from: accounts[3]});

		assert.equal(uint2563Ph95T, BigInt("0"))
		await expect(POWTokenfWPU97.setWorkingHashRate.call(uintgGTCw1F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpgW7GWy = await POWToken.new({from: accounts[5]});
		const uintgakmeOn = BigInt("1995")
		const uintuQzuEs = BigInt("293")
		const uintDIppcex = BigInt("283")
		const uintDKLMyWA = BigInt("1405")
		const uintwBnOPuv = BigInt("1770")
		const addressxORSgZH = accounts[2]
		const addressaM51l2p = "0x0000000000000000000000000000000000000001"
		const addressbJFxmBX = accounts[2]
		const addresslrgJVBS = accounts[3]
		const addressYZ54FBG = accounts[2]
		const addressLrf49wk = accounts[3]
		const addressz2J0E3o = accounts[3]
		const addresskoJGAui = accounts[2]
		const stringLW617kX = "MALsU5iwE2MKfIY56eODhvaJrpPaLNvgwLi"
		const stringMBGcQs3 = "5GaeFB54EzhBIg4qVy2VpaWPqgCiPXYHGlbYqb7lP2zVumH3ibzVvn7OkmT6bThpu4mAtnmA660xuc"
		const uintC77skm3 = BigInt("177")
		const uintkFvCOWP = BigInt("381")
		const uint256NQXcV9q = await POWTokenpgW7GWy.remainingAmount.call({from: accounts[0]});
//		const uint256k8yuk52 = await POWTokenpgW7GWy.getHistoryWorkingRate.call({from: accounts[2]});
//		const stringuGpkhFG = await POWTokenpgW7GWy.initialize.call(stringMBGcQs3, stringLW617kX, addresskoJGAui, addressz2J0E3o, addressLrf49wk, addressYZ54FBG, addresslrgJVBS, addressbJFxmBX, addressaM51l2p, addressxORSgZH, uintwBnOPuv, uintDKLMyWA, uintDIppcex, uintuQzuEs, uintgakmeOn, {from: accounts[4]});
//		const uint256Ox3yoY1 = await POWTokenpgW7GWy.notifyRewardAmount.call(uintC77skm3, {from: accounts[5]});
//		const uint256oYzGqg3 = await POWTokenpgW7GWy.notifyRewardAmount.call(uintkFvCOWP, {from: accounts[1]});

		assert.equal(uint256NQXcV9q, BigInt("0"))
		await expect(POWTokenpgW7GWy.getHistoryWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenyucjTw9 = await POWToken.new({from: accounts[0]});
		const uintlXmuJ0 = BigInt("98")
		const addressuf0mRC8 = accounts[3]
		const addressGWlqeHR = accounts[5]
		const uint3rme2d = BigInt("944")
		const uintfcxDZLu = BigInt("35")
		const addressXCaZWnI = accounts[0]
		const addressl71xDt = accounts[5]
		const uintEO2E1L = BigInt("797")
		const address3dGlup = accounts[3]
//		const boolRXAby8B = await POWTokenyucjTw9.transferFrom.call(addressGWlqeHR, addressuf0mRC8, uintlXmuJ0, {from: accounts[0]});
//		const uint256X1tHAi = await POWTokenyucjTw9.setMinerPoolFeeNumerator.call(uint3rme2d, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTvZABWK = await POWTokenyucjTw9.transferFrom.call(addressl71xDt, addressXCaZWnI, uintfcxDZLu, {from: accounts[0]});
//		const addressF1gZybA = await POWTokenyucjTw9.mint.call(address3dGlup, uintEO2E1L, {from: accounts[0]});
//		const boolEtaRcGr = await POWTokenyucjTw9.paused.call({from: accounts[2]});

		await expect(POWTokenyucjTw9.transferFrom.call(addressGWlqeHR, addressuf0mRC8, uintlXmuJ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfWPU97 = await POWToken.new({from: accounts[2]});
		const uinteUyQxH3 = BigInt("857")
//		const uint256zAk8dru = await POWTokenfWPU97.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		const uint256sgmf2dL = await POWTokenfWPU97.setElectricCharge.call(uinteUyQxH3, {from: accounts[3]});

		await expect(POWTokenfWPU97.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfWPU97 = await POWToken.new({from: accounts[2]});
		const uintCFUwlq1 = BigInt("1666")
		const addresskBEewac = accounts[1]
		const uintpJer6PY = BigInt("1609")
		const addressN0JsPog = accounts[2]
		const uintV4ZuV31 = BigInt("33")
		const addressGiDjAZq = accounts[0]
		const addressgGPJuRD = accounts[1]
		const uintB7Iijb1 = BigInt("849")
//		const addressk1kKd4e = await POWTokenfWPU97.claimIncome.call(addresskBEewac, uintCFUwlq1, {from: accounts[2]});
//		const addressTEuDKuW = await POWTokenfWPU97.claimReward.call(addressN0JsPog, uintpJer6PY, {from: accounts[4]});
//		const bool8dB5JG = await POWTokenfWPU97.transferFrom.call(addressgGPJuRD, addressGiDjAZq, uintV4ZuV31, {from: accounts[4]});
//		const uint256sgmf2dL = await POWTokenfWPU97.setElectricCharge.call(uintB7Iijb1, {from: accounts[3]});

		await expect(POWTokenfWPU97.claimIncome.call(addresskBEewac, uintCFUwlq1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenCRYBajJ = await POWToken.new({from: accounts[0]});
		const byteffEyhQb = "0x09041a021617041f020b091d1611000e021f1b1d050a0b0605031d170c20131c"
		const byteFGVQtZL = "0x19181e1612041a191b1c081c04090d11040119030b18061f1d19121a1206160b"
		const uintpbPJX5S = BigInt("141")
		const uintnDlvxl2 = BigInt("578")
		const uintMVofIbM = BigInt("1277")
		const addressackt6EM = "0x0000000000000000000000000000000000000001"
		const addressy6FiwGV = accounts[1]
		const uintWOwUH9q = BigInt("2035")
		const uints2XxXq4 = BigInt("2006")
		const uintEhPW8L6 = BigInt("1061")
		const addressmjxMbCs = accounts[3]
//		const addressI5QaP1S = await POWTokenCRYBajJ.permit.call(addressy6FiwGV, addressackt6EM, uintMVofIbM, uintnDlvxl2, uintpbPJX5S, byteFGVQtZL, byteffEyhQb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lzyhMBu = await POWTokenCRYBajJ.addHashRate.call(uintWOwUH9q, {from: accounts[4]});
//		const uint256ALiAJQe = await POWTokenCRYBajJ.setStartMiningTime.call(uints2XxXq4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lKrBwd6 = await POWTokenCRYBajJ.getHistoryWorkingRate.call({from: accounts[1]});
//		const addressZHAvtg = await POWTokenCRYBajJ.inCaseTokensGetStuck.call(addressmjxMbCs, uintEhPW8L6, {from: accounts[5]});

		await expect(POWTokenCRYBajJ.permit.call(addressy6FiwGV, addressackt6EM, uintMVofIbM, uintnDlvxl2, uintpbPJX5S, byteFGVQtZL, byteffEyhQb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenKUQzfyy = await POWToken.new({from: accounts[5]});
		const uint256xnGh18C = await POWTokenKUQzfyy.remainingAmount.call({from: accounts[3]});
		const boolaUsreX = await POWTokenKUQzfyy.paused.call({from: accounts[1]});
//		const uint256cia75xd = await POWTokenKUQzfyy.getIncomeBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(boolaUsreX, false)
		assert.equal(uint256xnGh18C, BigInt("0"))
		await expect(POWTokenKUQzfyy.getIncomeBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxFQ5emC = await POWToken.new({from: accounts[1]});
		const uintKBSrzUU = BigInt("1483")
		const addressCjdBqeG = accounts[5]
		const addressyllES57 = "0x0000000000000000000000000000000000000001"
//		const addresswQEv6B0 = await POWTokenxFQ5emC.mint.call(addressCjdBqeG, uintKBSrzUU, {from: accounts[5]});
//		const uint256r8Y9lQl = await POWTokenxFQ5emC.getPowerConsumptionBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressKuixzrP = await POWTokenxFQ5emC.transferOwnership.call(addressyllES57, {from: accounts[2]});

		await expect(POWTokenxFQ5emC.mint.call(addressCjdBqeG, uintKBSrzUU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfO5IOKY = await POWToken.new({from: accounts[2]});
		const uintuB7t5bI = BigInt("628")
		const addressuXyDsec = accounts[1]
		const uintnlZa4f8 = BigInt("1190")
		const uintWxfwRRh = BigInt("424")
		const addressnkGlo1B = accounts[0]
		const uint256jzRAtp5 = await POWTokenfO5IOKY.lpStakingRewardRate.call({from: accounts[3]});
//		const address8BXABL = await POWTokenfO5IOKY.inCaseTokensGetStuck.call(addressuXyDsec, uintuB7t5bI, {from: accounts[0]});
//		const uint2561TPT2L = await POWTokenfO5IOKY.setDepreciationNumerator.call(uintnlZa4f8, {from: accounts[2]});
//		const addressCkJlcR5 = await POWTokenfO5IOKY.claimReward.call(addressnkGlo1B, uintWxfwRRh, {from: accounts[1]});

		assert.equal(uint256jzRAtp5, BigInt("0"))
		await expect(POWTokenfO5IOKY.inCaseTokensGetStuck.call(addressuXyDsec, uintuB7t5bI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})