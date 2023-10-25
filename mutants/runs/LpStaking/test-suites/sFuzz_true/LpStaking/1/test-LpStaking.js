const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingNOEqGl5 = await LpStaking.new({from: accounts[4]});
		const addresscloSbd = accounts[0]
		const addresslIqbLV4 = accounts[1]
		const addressdwsmgZl = accounts[2]
		const addressGR6Wk3u = accounts[0]
		const uint256Ps4ZBli = await LpStakingNOEqGl5.getCurIncomeRate.call({from: accounts[3]});
		const uint256F7upTLK = await LpStakingNOEqGl5.getCurIncomeRate.call({from: accounts[4]});
		const addressJgmrHCd = await LpStakingNOEqGl5.initialize.call(addressGR6Wk3u, addressdwsmgZl, addresslIqbLV4, addresscloSbd, {from: accounts[1]});

		await expect(LpStakingNOEqGl5.getCurIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingfa4kxpm = await LpStaking.new({from: accounts[4]});
		const uintT21YWQA = BigInt("77")
		const addressaVtMMGc = accounts[2]
		const addressMyd4A60 = accounts[0]
		const uint256oQH5ppY = await LpStakingfa4kxpm.withdraw.call(uintT21YWQA, {from: accounts[3]});
		await LpStakingfa4kxpm.getReward.call({from: accounts[0]});
		const uint256qepdBXh = await LpStakingfa4kxpm.incomeEarned.call(addressaVtMMGc, {from: accounts[2]});
		const uint256eQrOccm = await LpStakingfa4kxpm.getUserAccumulatedWithdrawIncome.call(addressMyd4A60, {from: accounts[1]});

		await expect(LpStakingfa4kxpm.withdraw.call(uintT21YWQA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinghdLUaqS = await LpStaking.new({from: accounts[4]});
		const uintWketeS = BigInt("1329")
		await LpStakinghdLUaqS.exit.call({from: accounts[0]});
		const uint256wJ0JZr = await LpStakinghdLUaqS.stake.call(uintWketeS, {from: accounts[0]});
		await LpStakinghdLUaqS.nonEmergencyStop.call({from: accounts[4]});
		await LpStakinghdLUaqS.getReward.call({from: accounts[2]});

		await expect(LpStakinghdLUaqS.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTWSAqhE = await LpStaking.new({from: accounts[3]});
		const addressCPJ1Sa = accounts[3]
		const addressbNa8ETz = accounts[2]
		const addressmyTBAk8 = accounts[2]
		const address5bwNbA = accounts[3]
		const addressDKf7XId = accounts[1]
		const addressV91kpp8 = accounts[1]
		const addresswsCnVz = await LpStakingTWSAqhE.initialize.call(address5bwNbA, addressmyTBAk8, addressbNa8ETz, addressCPJ1Sa, {from: accounts[4]});
		const addressiqgvwAD = await LpStakingTWSAqhE.transferOwnership.call(addressDKf7XId, {from: accounts[5]});
		const addressBQgVJq = await LpStakingTWSAqhE.updateIncome.call(addressV91kpp8, {from: accounts[3]});
		const uint256Hfm3NPl = await LpStakingTWSAqhE.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingTWSAqhE.transferOwnership.call(addressDKf7XId, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingIr2a5u9 = await LpStaking.new({from: accounts[2]});
		const uintBT6spfg = BigInt("639")
		const addressZlDtw5r = accounts[2]
		const uintc9llXpV = BigInt("333")
		const uint2560MwI3t = await LpStakingIr2a5u9.weiToSatoshi.call(uintBT6spfg, {from: accounts[3]});
		const addressYOvM0hz = await LpStakingIr2a5u9.updateIncome.call(addressZlDtw5r, {from: accounts[4]});
		await LpStakingIr2a5u9.lpRewardRateChanged.call({from: accounts[1]});
		await LpStakingIr2a5u9.lpRewardRateChanged.call({from: accounts[5]});
		const uint256CkmV19z = await LpStakingIr2a5u9.weiToSatoshi.call(uintc9llXpV, {from: accounts[0]});

		assert.equal(uint2560MwI3t, BigInt("0"))
		await expect(LpStakingIr2a5u9.updateIncome.call(addressZlDtw5r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking5sxBuL = await LpStaking.new({from: accounts[3]});
		const addressL91KB8 = accounts[0]
		const byteclqvmBO = "0x081a150a0c2001151804201a1a031f050a180a0d19100d1e1c070a0714030a08"
		const bytebL1MP6h = "0x01101b0b04180b130503191c09031a071707020b131c1f080f0b10081806041c"
		const uintsfmJ6g9 = BigInt("27")
		const uintqtsPJts = BigInt("988")
		const uintpyXA75S = BigInt("1631")
		const addresskMQJ7h4 = accounts[4]
		const uintFfy3eUA = BigInt("1549")
		const addressQROdTNw = accounts[5]
		const uint256hugvMWF = await LpStaking5sxBuL.rewardEarned.call(addressL91KB8, {from: accounts[1]});
		const uint256B8ILo9v = await LpStaking5sxBuL.stakeWithPermit.call(uintpyXA75S, uintqtsPJts, uintsfmJ6g9, bytebL1MP6h, byteclqvmBO, {from: accounts[2]});
		const uint256oqtwjkQ = await LpStaking5sxBuL.rewardEarned.call(addresskMQJ7h4, {from: accounts[0]});
		await LpStaking5sxBuL.exit.call({from: accounts[2]});
		const addressIWPhbTt = await LpStaking5sxBuL.inCaseTokensGetStuck.call(addressQROdTNw, uintFfy3eUA, {from: accounts[0]});

		assert.equal(uint256hugvMWF, BigInt("0"))
		await expect(LpStaking5sxBuL.stakeWithPermit.call(uintpyXA75S, uintqtsPJts, uintsfmJ6g9, bytebL1MP6h, byteclqvmBO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking5sxBuL = await LpStaking.new({from: accounts[3]});
		const addressv8YbZPS = accounts[1]
		const addressel80cjp = accounts[4]
		const addressxjSjbq = accounts[5]
		const uintdrcVoIN = BigInt("1549")
		const addressFxOrHW2 = accounts[5]
		const uint256hugvMWF = await LpStaking5sxBuL.rewardEarned.call(addressv8YbZPS, {from: accounts[1]});
		const uint256vcZaiwz = await LpStaking5sxBuL.getUserAccumulatedWithdrawIncome.call(addressel80cjp, {from: accounts[3]});
		const uint256oqtwjkQ = await LpStaking5sxBuL.rewardEarned.call(addressxjSjbq, {from: accounts[0]});
		await LpStaking5sxBuL.exit.call({from: accounts[2]});
		const addressIWPhbTt = await LpStaking5sxBuL.inCaseTokensGetStuck.call(addressFxOrHW2, uintdrcVoIN, {from: accounts[0]});

		assert.equal(uint256hugvMWF, BigInt("0"))
		assert.equal(uint256oqtwjkQ, BigInt("0"))
		assert.equal(uint256vcZaiwz, BigInt("0"))
		await expect(LpStaking5sxBuL.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingkq5JIld = await LpStaking.new({from: accounts[3]});
		const addressDDesPH = accounts[0]
		const uint256rnBYVi8 = await LpStakingkq5JIld.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressaBo6Qnw = await LpStakingkq5JIld.transferOwnership.call(addressDDesPH, {from: accounts[4]});
		await LpStakingkq5JIld.lpIncomeRateChanged.call({from: accounts[1]});
		await LpStakingkq5JIld.nonEmergencyStop.call({from: accounts[4]});
		await LpStakingkq5JIld.getIncome.call({from: accounts[2]});

		await expect(LpStakingkq5JIld.lastTimeRewardApplicable.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNOEqGl5 = await LpStaking.new({from: accounts[4]});
		const addressFDT25Tj = accounts[4]
		const uintNnUFj9m = BigInt("880")
		const addressVFHQQgi = accounts[0]
		const uint256edjcBjO = await LpStakingNOEqGl5.incomePerToken.call({from: accounts[0]});
		const uint256DZjbBKA = await LpStakingNOEqGl5.rewardEarned.call(addressFDT25Tj, {from: accounts[5]});
		const uint256xKTQc8h = await LpStakingNOEqGl5.weiToSatoshi.call(uintNnUFj9m, {from: accounts[1]});
		const addressP1InQRq = await LpStakingNOEqGl5.updateIncome.call(addressVFHQQgi, {from: accounts[1]});
		const uint256Ps4ZBli = await LpStakingNOEqGl5.getCurIncomeRate.call({from: accounts[3]});

		await expect(LpStakingNOEqGl5.incomePerToken.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNOEqGl5 = await LpStaking.new({from: accounts[4]});
		const addressXfbrUzp = accounts[4]
		const addressB8m9m9E = accounts[3]
		const uint256DZjbBKA = await LpStakingNOEqGl5.rewardEarned.call(addressXfbrUzp, {from: accounts[5]});
		const uint2569ixXGW = await LpStakingNOEqGl5.incomeEarned.call(addressB8m9m9E, {from: accounts[4]});
		await LpStakingNOEqGl5.nonEmergencyStop.call({from: accounts[4]});

		assert.equal(uint256DZjbBKA, BigInt("0"))
		await expect(LpStakingNOEqGl5.incomeEarned.call(addressB8m9m9E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNsvJR3a = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressizEgX4 = "0x0000000000000000000000000000000000000001"
		const addressbenPscF = accounts[0]
		const addressJupyhOh = accounts[0]
		const addressoCD8ef = accounts[3]
		const uinthBAcuf = BigInt("1368")
		const addressBuIa0kd = accounts[3]
		const addressdPu3iji = accounts[4]
		const addressGBji33v = await LpStakingNsvJR3a.initialize.call(addressoCD8ef, addressJupyhOh, addressbenPscF, addressizEgX4, {from: accounts[3]});
		const addressyPfT0LN = await LpStakingNsvJR3a.inCaseTokensGetStuck.call(addressBuIa0kd, uinthBAcuf, {from: accounts[0]});
		const uint256sN8rVgM = await LpStakingNsvJR3a.getUserAccumulatedWithdrawIncome.call(addressdPu3iji, {from: accounts[3]});
		await LpStakingNsvJR3a.onlyOwner.call({from: accounts[0]});
		const uint256UVHvNt = await LpStakingNsvJR3a.incomePerToken.call({from: accounts[4]});
		const uint256ehpLtDz = await LpStakingNsvJR3a.getCurIncomeRate.call({from: accounts[2]});
	});
})