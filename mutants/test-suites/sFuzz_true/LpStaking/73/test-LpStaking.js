const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingETgO4qN = await LpStaking.new({from: accounts[1]});
		const addressm2CHiT8 = accounts[2]
		const addresskF11FSQ = accounts[2]
		const addressgytK3VS = "0x0000000000000000000000000000000000000001"
		const addressSOh3TRg = accounts[2]
		const byteEpUzz99 = "0x17170c0c0c1401120d0412061c051717200b0b19091c08200112141e150d1616"
		const bytemR7aSGk = "0x0a0f1c070d02040a1e191513081f07110b0e10060611130d16020e161c081b17"
		const uint5ZC7DR = BigInt("76")
		const uint4J1OHw = BigInt("1850")
		const uintGbNyfCI = BigInt("574")
		const addresseNsAT0q = await LpStakingETgO4qN.initialize.call(addressSOh3TRg, addressgytK3VS, addresskF11FSQ, addressm2CHiT8, {from: accounts[1]});
//		await LpStakingETgO4qN.lpIncomeRateChanged.call({from: accounts[2]});
//		await LpStakingETgO4qN.nonEmergencyStop.call({from: accounts[0]});
//		const uint256SDqOM1 = await LpStakingETgO4qN.stakeWithPermit.call(uintGbNyfCI, uint4J1OHw, uint5ZC7DR, bytemR7aSGk, byteEpUzz99, {from: accounts[0]});
//		await LpStakingETgO4qN.onlyOwner.call({from: accounts[5]});

		await expect(LpStakingETgO4qN.lpIncomeRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingoTipCn6 = await LpStaking.new({from: accounts[5]});
		const bytewkY8fxZ = "0x090c0a1e0b08170d1e1107141d01031d0217011807040308130f011514121118"
		const byteoNk8UwU = "0x081f151817191609170b1d09041805030e191e0a1609001105200e1204171318"
		const uintrHZQhU = BigInt("214")
		const uint4BuDCM = BigInt("1542")
		const uintgXoeCp = BigInt("440")
		const uintvkrDzkP = BigInt("1960")
		const addressS23fnTt = accounts[2]
//		const uint256oJLGR6 = await LpStakingoTipCn6.stakeWithPermit.call(uintgXoeCp, uint4BuDCM, uintrHZQhU, byteoNk8UwU, bytewkY8fxZ, {from: accounts[0]});
//		const uint256k9OGhUz = await LpStakingoTipCn6.rewardPerToken.call({from: accounts[4]});
//		const addresshpMPL8m = await LpStakingoTipCn6.inCaseTokensGetStuck.call(addressS23fnTt, uintvkrDzkP, {from: accounts[1]});

		await expect(LpStakingoTipCn6.stakeWithPermit.call(uintgXoeCp, uint4BuDCM, uintrHZQhU, byteoNk8UwU, bytewkY8fxZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingBXr6Ie = await LpStaking.new({from: accounts[3]});
		const addressfcyclqz = accounts[0]
		const uintUvoaF7Z = BigInt("1768")
		const addressxPyWchZ = accounts[1]
//		const uint256NRWRu7X = await LpStakingBXr6Ie.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addressqxNo9j = await LpStakingBXr6Ie.updateIncome.call(addressfcyclqz, {from: accounts[4]});
//		const addressTvQFmeN = await LpStakingBXr6Ie.inCaseTokensGetStuck.call(addressxPyWchZ, uintUvoaF7Z, {from: accounts[3]});

		await expect(LpStakingBXr6Ie.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVgvGSJO = await LpStaking.new({from: accounts[0]});
		const boolaV4rCE = true
//		const boolXEEOMB6 = await LpStakingVgvGSJO.setEmergencyStop.call(boolaV4rCE, {from: accounts[2]});
//		await LpStakingVgvGSJO.getReward.call({from: accounts[1]});
//		await LpStakingVgvGSJO.getIncome.call({from: accounts[4]});

		await expect(LpStakingVgvGSJO.setEmergencyStop.call(boolaV4rCE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDhHMhQt = await LpStaking.new({from: accounts[1]});
		const addressfUq8jtb = accounts[0]
//		await LpStakingDhHMhQt.nonEmergencyStop.call({from: accounts[3]});
//		const uint256jW7TveG = await LpStakingDhHMhQt.getCurIncomeRate.call({from: accounts[0]});
//		const uint256DPiV2vw = await LpStakingDhHMhQt.incomePerToken.call({from: accounts[2]});
//		await LpStakingDhHMhQt.nonEmergencyStop.call({from: accounts[2]});
//		const addressjtIRu1i = await LpStakingDhHMhQt.transferOwnership.call(addressfUq8jtb, {from: accounts[0]});

		await expect(LpStakingDhHMhQt.nonEmergencyStop.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvYr7FMm = await LpStaking.new({from: accounts[1]});
		const uintYEVGCMK = BigInt("1036")
//		const uint256qFojGw = await LpStakingvYr7FMm.incomePerToken.call({from: accounts[3]});
//		const uint256PmZPGF = await LpStakingvYr7FMm.weiToSatoshi.call(uintYEVGCMK, {from: accounts[1]});
//		await LpStakingvYr7FMm.lpIncomeRateChanged.call({from: accounts[3]});

		await expect(LpStakingvYr7FMm.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingit9hbG3 = await LpStaking.new({from: accounts[0]});
		const addressh8qt3lq = accounts[2]
//		const uint256OqF768S = await LpStakingit9hbG3.getCurIncomeRate.call({from: accounts[2]});
//		const addresseHhaCuC = await LpStakingit9hbG3.updateIncome.call(addressh8qt3lq, {from: accounts[2]});
//		const uint256x0BWToH = await LpStakingit9hbG3.incomePerToken.call({from: accounts[5]});

		await expect(LpStakingit9hbG3.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvYr7FMm = await LpStaking.new({from: accounts[1]});
		const uintdzsazK0 = BigInt("1028")
//		await LpStakingvYr7FMm.exit.call({from: accounts[2]});
//		const uint256qFojGw = await LpStakingvYr7FMm.incomePerToken.call({from: accounts[3]});
//		const uint256PmZPGF = await LpStakingvYr7FMm.weiToSatoshi.call(uintdzsazK0, {from: accounts[1]});
//		await LpStakingvYr7FMm.lpIncomeRateChanged.call({from: accounts[3]});

		await expect(LpStakingvYr7FMm.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvYr7FMm = await LpStaking.new({from: accounts[1]});
		const addressQY2bcAI = accounts[1]
		const addressHdzsuhD = accounts[4]
		const uintH62rtgC = BigInt("740")
		const addresscjEFLfi = accounts[5]
//		const uint256IPUKkCM = await LpStakingvYr7FMm.incomeEarned.call(addressQY2bcAI, {from: accounts[3]});
//		const addressgXmrsV = await LpStakingvYr7FMm.transferOwnership.call(addressHdzsuhD, {from: accounts[0]});
//		const addressx58xiJ = await LpStakingvYr7FMm.inCaseTokensGetStuck.call(addresscjEFLfi, uintH62rtgC, {from: accounts[3]});

		await expect(LpStakingvYr7FMm.incomeEarned.call(addressQY2bcAI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingit9hbG3 = await LpStaking.new({from: accounts[0]});
		const addressDQi4ERD = accounts[3]
		const addressHx0gQB5 = accounts[2]
		const addressEiCTtKU = accounts[3]
		const uintJqbpqWN = BigInt("0")
		const uint256GLyx92w = await LpStakingit9hbG3.getUserAccumulatedWithdrawIncome.call(addressDQi4ERD, {from: accounts[1]});
//		const addresseHhaCuC = await LpStakingit9hbG3.updateIncome.call(addressHx0gQB5, {from: accounts[2]});
//		const uint256x0BWToH = await LpStakingit9hbG3.incomePerToken.call({from: accounts[5]});
//		const uint256crkelaF = await LpStakingit9hbG3.getUserAccumulatedWithdrawIncome.call(addressEiCTtKU, {from: accounts[4]});
//		const uint256012WGe = await LpStakingit9hbG3.stake.call(uintJqbpqWN, {from: accounts[0]});

		assert.equal(uint256GLyx92w, BigInt("0"))
		await expect(LpStakingit9hbG3.updateIncome.call(addressHx0gQB5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvYr7FMm = await LpStaking.new({from: accounts[1]});
		const byteoU3aAhq = "0x17191b19071d0c180813110a12060a0712061b0b050818041c01171e1b131907"
		const byteBSKaIec = "0x1111180c1a02131c05091e000309031e181720100b18131b151f07100e1d1f12"
		const uintxQAtC6P = BigInt("199")
		const uintGayCKhe = BigInt("1181")
		const uintoMCYMMM = BigInt("676")
		const uintfmaqzwo = BigInt("731")
		const addressxX4Hqsi = accounts[5]
		const uint256uDb9Tay = await LpStakingvYr7FMm.rewardPerToken.call({from: accounts[4]});
//		const uint256cvk6muK = await LpStakingvYr7FMm.stakeWithPermit.call(uintoMCYMMM, uintGayCKhe, uintxQAtC6P, byteBSKaIec, byteoU3aAhq, {from: accounts[5]});
//		const addressx58xiJ = await LpStakingvYr7FMm.inCaseTokensGetStuck.call(addressxX4Hqsi, uintfmaqzwo, {from: accounts[3]});

		assert.equal(uint256uDb9Tay, BigInt("0"))
		await expect(LpStakingvYr7FMm.stakeWithPermit.call(uintoMCYMMM, uintGayCKhe, uintxQAtC6P, byteBSKaIec, byteoU3aAhq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLUap35e = await LpStaking.new({from: accounts[1]});
		const addressvE5HJUt = accounts[1]
		const addressVBn6EKn = accounts[5]
		const boolBj3KCKj = true
		const addressyPhjHBv = accounts[2]
		const addressLhy9HEH = accounts[4]
		const addressm5BQdVu = accounts[3]
		const addressMha8hJD = accounts[0]
		const uint256SsXLX5z = await LpStakingLUap35e.rewardEarned.call(addressvE5HJUt, {from: accounts[0]});
//		const addressS3g6dit = await LpStakingLUap35e.updateReward.call(addressVBn6EKn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUht1tt = await LpStakingLUap35e.setEmergencyStop.call(boolBj3KCKj, {from: accounts[1]});
//		const addressPgbYfAt = await LpStakingLUap35e.initialize.call(addressMha8hJD, addressm5BQdVu, addressLhy9HEH, addressyPhjHBv, {from: accounts[1]});

		assert.equal(uint256SsXLX5z, BigInt("0"))
		await expect(LpStakingLUap35e.updateReward.call(addressVBn6EKn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFyfG9ng = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const byteVMBCxfd = "0x0e151b03081e011d02000316020e090e1f051a171d080f150c0d0f0c0d170508"
		const byteCCzOyXL = "0x080a061f0f1c1c080c041d01072014040b0e1f0509020c16030a05111f081513"
		const uintM6cERwu = BigInt("63")
		const uintkGEXc9A = BigInt("1260")
		const uintadeWq4S = BigInt("302")
		const uint256A9UuXHf = await LpStakingFyfG9ng.getCurIncomeRate.call({from: accounts[3]});
		const uint256l3oYJAo = await LpStakingFyfG9ng.stakeWithPermit.call(uintadeWq4S, uintkGEXc9A, uintM6cERwu, byteCCzOyXL, byteVMBCxfd, {from: accounts[4]});
	});
})