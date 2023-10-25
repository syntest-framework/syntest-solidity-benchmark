const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenrHqVg4O = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintls8s7iq = BigInt("1577")
		const addressIljnFVJ = accounts[1]
		const uintexkm00y = BigInt("1408")
		const uintcOhafq2 = BigInt("1721")
		const uintBpBQh8q = BigInt("1134")
		const uintsHl6DBo = BigInt("560")
		const uinta1tgsEM = BigInt("1184")
		const uintqFQlmTq = BigInt("844")
		const addressUjZ8saI = "0x0000000000000000000000000000000000000001"
		const addresskXa2hJl = accounts[3]
		const addressmF6uAL2 = accounts[3]
		const addressILvsG6o = accounts[1]
		const addressL2fOXNN = accounts[0]
		const addresstnvSOz = accounts[1]
		const addressxsk06cd = accounts[1]
		const addressz7T2hLr = accounts[0]
		const stringqRI3keV = "O6xlBQnyAckYE4jsNXdazrtsVFLltQYQbTeHsRZSwCzcJ8TX9ne8vx7zE4SFY4YLvudIQ5"
		const stringkQ6huTY = "oFQXJ0RUxKcAM4xUhgWIYo"
		await POWTokenrHqVg4O.whenNotPaused.call({from: accounts[3]});
		await POWTokenrHqVg4O.onlyOwner.call({from: accounts[3]});
		const addressLVIxSqv = await POWTokenrHqVg4O.inCaseTokensGetStuck.call(addressIljnFVJ, uintls8s7iq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gZPEj9P = await POWTokenrHqVg4O.setElectricCharge.call(uintexkm00y, {from: accounts[2]});
		const stringiOwr9oM = await POWTokenrHqVg4O.initialize.call(stringkQ6huTY, stringqRI3keV, addressz7T2hLr, addressxsk06cd, addresstnvSOz, addressL2fOXNN, addressILvsG6o, addressmF6uAL2, addresskXa2hJl, addressUjZ8saI, uintqFQlmTq, uinta1tgsEM, uintsHl6DBo, uintBpBQh8q, uintcOhafq2, {from: accounts[0]});
		await POWTokenrHqVg4O.unpause.call({from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uintuvdXl6B = BigInt("133")
		const addressbINIetV = accounts[4]
//		await POWTokenknj9U1Q.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(addressbINIetV, uintuvdXl6B, {from: accounts[2]});

		await expect(POWTokenknj9U1Q.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAiyESje = await POWToken.new({from: accounts[2]});
		const uinti7AQk5Q = BigInt("545")
		const addressKAvxYqW = accounts[0]
		const uintciuoBD = BigInt("1777")
		const addressa47N1MH = accounts[5]
		const uintYsHrNZO = BigInt("1309")
		const addressvImlukt = accounts[3]
//		const addressoBwP8b0 = await POWTokenAiyESje.claimReward.call(addressKAvxYqW, uinti7AQk5Q, {from: accounts[1]});
//		const boolwhCP9Y4 = await POWTokenAiyESje.transfer.call(addressa47N1MH, uintciuoBD, {from: accounts[3]});
//		await POWTokenAiyESje.unpause.call({from: accounts[0]});
//		const uint256d5zMpaf = await POWTokenAiyESje.setStartMiningTime.call(uintYsHrNZO, {from: accounts[1]});
//		const addressX4BvBTq = await POWTokenAiyESje.transferOwnership.call(addressvImlukt, {from: accounts[5]});
//		const uint256Y1D5jK = await POWTokenAiyESje.remainingAmount.call({from: accounts[1]});

		await expect(POWTokenAiyESje.claimReward.call(addressKAvxYqW, uinti7AQk5Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenNbMPZBA = await POWToken.new({from: accounts[4]});
		const uintBirGUMb = BigInt("1002")
		const addressaY5fs8w = accounts[0]
		const uintLhFNU45 = BigInt("1797")
		const addressI7zawvB = accounts[2]
		const boolfZRP0wW = await POWTokenNbMPZBA.approve.call(addressaY5fs8w, uintBirGUMb, {from: accounts[5]});
		const boolrd46UZW = await POWTokenNbMPZBA.paused.call({from: accounts[4]});
//		const uint256wq0gA3F = await POWTokenNbMPZBA.addHashRate.call(uintLhFNU45, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOtFazHo = await POWTokenNbMPZBA.setBtcParam.call(addressI7zawvB, {from: accounts[0]});

		assert.equal(boolfZRP0wW, true)
		assert.equal(boolrd46UZW, false)
		await expect(POWTokenNbMPZBA.addHashRate.call(uintLhFNU45, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeni2y3zdu = await POWToken.new({from: accounts[3]});
		const addressSTBB3zy = accounts[2]
		const uintrqnL4Cs = BigInt("1571")
		const uintIEqcgM = BigInt("401")
		const addressymXIwwI = accounts[4]
//		const uint256s7egh0 = await POWTokeni2y3zdu.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
//		await POWTokeni2y3zdu.updateIncomeRate.call({from: accounts[5]});
//		const addressXrBkgIX = await POWTokeni2y3zdu.transferOwnership.call(addressSTBB3zy, {from: accounts[2]});
//		const uint256iKOWrX = await POWTokeni2y3zdu.setMinerPoolFeeNumerator.call(uintrqnL4Cs, {from: accounts[2]});
//		const bool8gER4r = await POWTokeni2y3zdu.transfer.call(addressymXIwwI, uintIEqcgM, {from: accounts[1]});

		await expect(POWTokeni2y3zdu.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmQHgnG = await POWToken.new({from: accounts[1]});
		const uintuoCAHTh = BigInt("178")
		const addressudMo2vE = "0x0000000000000000000000000000000000000001"
//		await POWTokenmQHgnG.unpause.call({from: accounts[3]});
//		const addresspZDyPf = await POWTokenmQHgnG.mint.call(addressudMo2vE, uintuoCAHTh, {from: accounts[0]});
//		await POWTokenmQHgnG.whenNotPaused.call({from: accounts[0]});

		await expect(POWTokenmQHgnG.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokene5z2Eu = await POWToken.new({from: accounts[0]});
		const uintLM4iPdx = BigInt("1069")
		const uintzHVIWLn = BigInt("1493")
		const uintA6a1N9m = BigInt("692")
		const addressnTEg6Er = accounts[3]
		const uint256bjzYCDu = await POWTokene5z2Eu.stakingRewardRate.call({from: accounts[3]});
//		const uint256I4Ye9OL = await POWTokene5z2Eu.setDepreciationNumerator.call(uintLM4iPdx, {from: accounts[4]});
//		const uint2567LIuso = await POWTokene5z2Eu.setStartMiningTime.call(uintzHVIWLn, {from: accounts[4]});
//		const boolptFyzXu = await POWTokene5z2Eu.approve.call(addressnTEg6Er, uintA6a1N9m, {from: accounts[2]});

		assert.equal(uint256bjzYCDu, BigInt("0"))
		await expect(POWTokene5z2Eu.setDepreciationNumerator.call(uintLM4iPdx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uintHOYF0P5 = BigInt("133")
		const addressdrK6wwW = accounts[4]
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(addressdrK6wwW, uintHOYF0P5, {from: accounts[2]});

		await expect(POWTokenknj9U1Q.claimIncome.call(addressdrK6wwW, uintHOYF0P5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOhracz = await POWToken.new({from: accounts[1]});
		const uintiCgoqtv = BigInt("1580")
		const addressMXzPiwO = accounts[1]
		const uintWzUKfo = BigInt("1708")
		const uinthDwO971 = BigInt("1610")
		const addressXHl1S9 = accounts[2]
//		const boolRAOt7VS = await POWTokenOhracz.transfer.call(addressMXzPiwO, uintiCgoqtv, {from: accounts[3]});
//		await POWTokenOhracz.onlyOwner.call({from: accounts[4]});
//		const uint256ws5N3b = await POWTokenOhracz.setWorkingHashRate.call(uintWzUKfo, {from: accounts[4]});
//		await POWTokenOhracz.pause.call({from: accounts[5]});
//		const addressBfEODhv = await POWTokenOhracz.claimReward.call(addressXHl1S9, uinthDwO971, {from: accounts[4]});
//		const uint256rlKD9bP = await POWTokenOhracz.stakingRewardRate.call({from: accounts[2]});

		await expect(POWTokenOhracz.transfer.call(addressMXzPiwO, uintiCgoqtv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uintTT3U8ex = BigInt("21")
		const addressszbypOa = accounts[4]
		const uintC8PJq8q = BigInt("984")
		const addressOHVfWL3 = accounts[4]
		const uintmDQwBj3 = BigInt("1973")
		const addressSxaAOk3 = accounts[2]
//		const addresseyzdCoz = await POWTokenknj9U1Q.mint.call(addressszbypOa, uintTT3U8ex, {from: accounts[1]});
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(addressOHVfWL3, uintC8PJq8q, {from: accounts[2]});
//		const addresssvxZcmu = await POWTokenknj9U1Q.inCaseTokensGetStuck.call(addressSxaAOk3, uintmDQwBj3, {from: accounts[4]});

		await expect(POWTokenknj9U1Q.mint.call(addressszbypOa, uintTT3U8ex, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uint5P98Gg = BigInt("133")
		const addressNuovDbM = accounts[4]
		const uint256e6ZeE3V = await POWTokenknj9U1Q.remainingAmount.call({from: accounts[4]});
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(addressNuovDbM, uint5P98Gg, {from: accounts[2]});

		assert.equal(uint256e6ZeE3V, BigInt("0"))
		await expect(POWTokenknj9U1Q.claimIncome.call(addressNuovDbM, uint5P98Gg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokene5z2Eu = await POWToken.new({from: accounts[0]});
		const uintIOrpOK = BigInt("692")
		const addressmfX8f8M = accounts[3]
		const uint256QP691FH = await POWTokene5z2Eu.lpStakingRewardRate.call({from: accounts[4]});
		const uint256bjzYCDu = await POWTokene5z2Eu.stakingRewardRate.call({from: accounts[3]});
		const boolptFyzXu = await POWTokene5z2Eu.approve.call(addressmfX8f8M, uintIOrpOK, {from: accounts[2]});

		assert.equal(boolptFyzXu, true)
		assert.equal(uint256QP691FH, BigInt("0"))
		assert.equal(uint256bjzYCDu, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uintpVqqcrp = BigInt("1206")
		const uintAL4hhu = BigInt("230")
		const uintdBTQNCD = BigInt("837")
		const uintSGoBZhd = BigInt("964")
		const uintFNnDJAb = BigInt("388")
		const addressx40HfPF = accounts[0]
		const addresssXKienO = accounts[2]
		const addressAJrtQGW = accounts[4]
		const address3QkPWq = accounts[5]
		const addresskCz40Tl = accounts[3]
		const addressvgV8gII = accounts[3]
		const addressd3775is = accounts[4]
		const addressYtiMOJg = accounts[4]
		const stringn4H06Vj = "qKgnBnVQGNxM1VmXL"
		const stringRmfSZH = "YhuVXS3PP55hpj7kWJScXtsgxyPJ5KDCvK"
		const uintARil9fR = BigInt("133")
		const address5fDcig = accounts[5]
		const bytemDvlhye = "0x120e04180a1217201c170d00171a17021f1310070e1e0d0a0d14061c18131c12"
		const byteq43R9Vf = "0x041c1614191b1700140113031c0a1200081c181e02141c060d1f091406090901"
		const uintTsyJtVl = BigInt("245")
		const uintYn1TOoE = BigInt("2038")
		const uintYzQ3b7Y = BigInt("1175")
		const addressKzOfYD = accounts[5]
		const addressZSZSyyS = accounts[2]
//		const stringA8tF6Li = await POWTokenknj9U1Q.initialize.call(stringRmfSZH, stringn4H06Vj, addressYtiMOJg, addressd3775is, addressvgV8gII, addresskCz40Tl, address3QkPWq, addressAJrtQGW, addresssXKienO, addressx40HfPF, uintFNnDJAb, uintSGoBZhd, uintdBTQNCD, uintAL4hhu, uintpVqqcrp, {from: accounts[0]});
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(address5fDcig, uintARil9fR, {from: accounts[2]});
//		const addressT7kJKzE = await POWTokenknj9U1Q.permit.call(addressZSZSyyS, addressKzOfYD, uintYzQ3b7Y, uintYn1TOoE, uintTsyJtVl, byteq43R9Vf, bytemDvlhye, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenknj9U1Q.initialize.call(stringRmfSZH, stringn4H06Vj, addressYtiMOJg, addressd3775is, addressvgV8gII, addresskCz40Tl, address3QkPWq, addressAJrtQGW, addresssXKienO, addressx40HfPF, uintFNnDJAb, uintSGoBZhd, uintdBTQNCD, uintAL4hhu, uintpVqqcrp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokene5z2Eu = await POWToken.new({from: accounts[0]});
		const uint256bjzYCDu = await POWTokene5z2Eu.stakingRewardRate.call({from: accounts[3]});
//		const uint256dn4vups = await POWTokene5z2Eu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});

		assert.equal(uint256bjzYCDu, BigInt("0"))
		await expect(POWTokene5z2Eu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uintHeCyQ3e = BigInt("133")
		const addressmD5cvXP = accounts[5]
//		await POWTokenknj9U1Q.updateIncomeRate.call({from: accounts[2]});
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(addressmD5cvXP, uintHeCyQ3e, {from: accounts[2]});

		await expect(POWTokenknj9U1Q.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokene5z2Eu = await POWToken.new({from: accounts[0]});
		const byteZE4W5jQ = "0x1b061d1e13130e1611021d0a1f191b17050e1d01041a1a0b08050a2003121d05"
		const byter4XOcR = "0x0d1c160b1d0a080813040f0119081811081f021d1515080717041b1f0f06001a"
		const uintk0Ta6j = BigInt("50")
		const uintV0ArVZp = BigInt("1604")
		const uintvKIPIKj = BigInt("969")
		const addressxGfUX7U = accounts[4]
		const addressN4d2SdH = accounts[0]
		const bytetyeI5s4 = "0x0007180614060c0b12171f00021311141a1b0917020512191f0109201d010d02"
		const byteySDTe44 = "0x1d171c0207021914170603130b1a1d1e0b131b090e0e02130a140a20121b1e04"
		const uintXdyj5Bp = BigInt("216")
		const uintdat4mi5 = BigInt("2017")
		const uintHvCsKwE = BigInt("384")
		const addresswpLjLGU = accounts[1]
		const addressuzlrHHZ = accounts[2]
		const uinthxTZyGp = BigInt("248")
		const uint256bjzYCDu = await POWTokene5z2Eu.stakingRewardRate.call({from: accounts[3]});
//		const addressmGLED9p = await POWTokene5z2Eu.permit.call(addressN4d2SdH, addressxGfUX7U, uintvKIPIKj, uintV0ArVZp, uintk0Ta6j, byter4XOcR, byteZE4W5jQ, {from: accounts[5]});
//		const addresslITYv3H = await POWTokene5z2Eu.permit.call(addressuzlrHHZ, addresswpLjLGU, uintHvCsKwE, uintdat4mi5, uintXdyj5Bp, byteySDTe44, bytetyeI5s4, {from: accounts[5]});
//		const uint256HNOZ27l = await POWTokene5z2Eu.setStakingRewardRatio.call(uinthxTZyGp, {from: accounts[0]});

		assert.equal(uint256bjzYCDu, BigInt("0"))
		await expect(POWTokene5z2Eu.permit.call(addressN4d2SdH, addressxGfUX7U, uintvKIPIKj, uintV0ArVZp, uintk0Ta6j, byter4XOcR, byteZE4W5jQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenknj9U1Q = await POWToken.new({from: accounts[3]});
		const uintslAVNEq = BigInt("133")
		const addressuSBUCpw = accounts[5]
//		const uint256aY471oA = await POWTokenknj9U1Q.getCurWorkingRate.call({from: accounts[0]});
//		const addressXQiMiAI = await POWTokenknj9U1Q.claimIncome.call(addressuSBUCpw, uintslAVNEq, {from: accounts[2]});

		await expect(POWTokenknj9U1Q.getCurWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokene5z2Eu = await POWToken.new({from: accounts[0]});
		const uintpIytJ2 = BigInt("1738")
		const address7LtEvr = accounts[1]
		const addressd94iGq = accounts[3]
//		const boolHBvLp7K = await POWTokene5z2Eu.transferFrom.call(addressd94iGq, address7LtEvr, uintpIytJ2, {from: accounts[0]});
//		const uint256bjzYCDu = await POWTokene5z2Eu.stakingRewardRate.call({from: accounts[3]});

		await expect(POWTokene5z2Eu.transferFrom.call(addressd94iGq, address7LtEvr, uintpIytJ2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokene5z2Eu = await POWToken.new({from: accounts[0]});
//		const uint256wB7ONum = await POWTokene5z2Eu.getHistoryWorkingRate.call({from: accounts[4]});
//		const uint256bjzYCDu = await POWTokene5z2Eu.stakingRewardRate.call({from: accounts[3]});

		await expect(POWTokene5z2Eu.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})