const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingRVwuw1F = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscLCfxFj = accounts[1]
		const addressbQbAugE = "0x0000000000000000000000000000000000000001"
		const addressqot7wif = accounts[2]
		const addressZqARZv = accounts[4]
		await LpStakingRVwuw1F.nonEmergencyStop.call({from: accounts[5]});
		const uint256FXwLTVx = await LpStakingRVwuw1F.incomePerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256I9jgFcT = await LpStakingRVwuw1F.rewardPerToken.call({from: accounts[2]});
		const addressaIxW0Uz = await LpStakingRVwuw1F.initialize.call(addressZqARZv, addressqot7wif, addressbQbAugE, addresscLCfxFj, {from: accounts[4]});
	});

	it('test for LpStaking', async () => {
		const LpStakingmstccDx = await LpStaking.new({from: accounts[3]});
		const addressVFkatY = "0x0000000000000000000000000000000000000001"
		const addressOBwFxy7 = accounts[1]
		const boolHOTgXys = true
//		const addresshQepWpw = await LpStakingmstccDx.updateReward.call(addressVFkatY, {from: accounts[2]});
//		const uint256kSRyXrJ = await LpStakingmstccDx.getUserAccumulatedWithdrawIncome.call(addressOBwFxy7, {from: accounts[5]});
//		await LpStakingmstccDx.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingmstccDx.onlyOwner.call({from: accounts[1]});
//		await LpStakingmstccDx.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolEo1UGCr = await LpStakingmstccDx.setEmergencyStop.call(boolHOTgXys, {from: accounts[3]});

		await expect(LpStakingmstccDx.updateReward.call(addressVFkatY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingdBGegLZ = await LpStaking.new({from: accounts[1]});
		const uintQGBrfbQ = BigInt("1880")
//		const uint256guqLuHj = await LpStakingdBGegLZ.stake.call(uintQGBrfbQ, {from: accounts[0]});
//		const uint256mItSXE = await LpStakingdBGegLZ.lastTimeRewardApplicable.call({from: accounts[3]});
//		await LpStakingdBGegLZ.nonEmergencyStop.call({from: accounts[0]});
//		const uint256EV46Hxz = await LpStakingdBGegLZ.rewardPerToken.call({from: accounts[1]});

		await expect(LpStakingdBGegLZ.stake.call(uintQGBrfbQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingXnJkTKY = await LpStaking.new({from: accounts[3]});
		const boolewfgslX = true
//		const boollUZMdoJ = await LpStakingXnJkTKY.setEmergencyStop.call(boolewfgslX, {from: accounts[3]});
//		await LpStakingXnJkTKY.nonReentrant.call({from: accounts[3]});
//		await LpStakingXnJkTKY.nonEmergencyStop.call({from: accounts[4]});

		await expect(LpStakingXnJkTKY.setEmergencyStop.call(boolewfgslX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingV0PVLq = await LpStaking.new({from: accounts[0]});
		const uintjtfawel = BigInt("1104")
		const uinteX4SLDv = BigInt("1890")
		const address920bxK = accounts[2]
//		await LpStakingV0PVLq.lpIncomeRateChanged.call({from: accounts[3]});
//		const uint256AIDJII5 = await LpStakingV0PVLq.weiToSatoshi.call(uintjtfawel, {from: "0x0000000000000000000000000000000000000001"});
//		const addressfad8sQV = await LpStakingV0PVLq.inCaseTokensGetStuck.call(address920bxK, uinteX4SLDv, {from: accounts[2]});

		await expect(LpStakingV0PVLq.lpIncomeRateChanged.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingBvEpXTr = await LpStaking.new({from: accounts[1]});
		const uintks8V5mS = BigInt("1582")
//		const uint256DiwlvGJ = await LpStakingBvEpXTr.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256qXfHc3 = await LpStakingBvEpXTr.getCurIncomeRate.call({from: accounts[4]});
//		const uint256wAoWjMY = await LpStakingBvEpXTr.weiToSatoshi.call(uintks8V5mS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingBvEpXTr.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingV0PVLq = await LpStaking.new({from: accounts[0]});
		const addressh9gsS1p = accounts[3]
		const uintpbF535M = BigInt("1109")
		const uintpUT6cq9 = BigInt("1890")
		const addressfsacJE6 = accounts[2]
//		const uint256tnPI7k8 = await LpStakingV0PVLq.incomeEarned.call(addressh9gsS1p, {from: accounts[0]});
//		await LpStakingV0PVLq.lpIncomeRateChanged.call({from: accounts[3]});
//		const uint256AIDJII5 = await LpStakingV0PVLq.weiToSatoshi.call(uintpbF535M, {from: "0x0000000000000000000000000000000000000001"});
//		const addressfad8sQV = await LpStakingV0PVLq.inCaseTokensGetStuck.call(addressfsacJE6, uintpUT6cq9, {from: accounts[2]});

		await expect(LpStakingV0PVLq.incomeEarned.call(addressh9gsS1p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking9kxzzt = await LpStaking.new({from: accounts[0]});
		const addressq2qIucB = "0x0000000000000000000000000000000000000001"
		const addressGewsdwZ = accounts[0]
		const addressUs9O2yF = accounts[2]
		const addressQOLuDBc = accounts[2]
		const uinteNe3QSN = BigInt("495")
		const addressl3A4ehs = await LpStaking9kxzzt.initialize.call(addressQOLuDBc, addressUs9O2yF, addressGewsdwZ, addressq2qIucB, {from: accounts[5]});
		const uint256kAE0i9h = await LpStaking9kxzzt.weiToSatoshi.call(uinteNe3QSN, {from: accounts[0]});
//		await LpStaking9kxzzt.exit.call({from: accounts[1]});

		assert.equal(uint256kAE0i9h, BigInt("0"))
		await expect(LpStaking9kxzzt.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingznqSPD3 = await LpStaking.new({from: accounts[0]});
//		await LpStakingznqSPD3.lpRewardRateChanged.call({from: accounts[3]});
//		const uint25682b9Bf = await LpStakingznqSPD3.rewardPerToken.call({from: accounts[2]});
//		await LpStakingznqSPD3.lpIncomeRateChanged.call({from: accounts[4]});

		await expect(LpStakingznqSPD3.lpRewardRateChanged.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingV0PVLq = await LpStaking.new({from: accounts[0]});
		const addressTM6WsPC = accounts[3]
		const addressmoMkine = accounts[3]
		const uintdpZP5ae = BigInt("1109")
		const uintkcdRnoc = BigInt("1890")
		const addressS30Qdl = accounts[2]
		const uint256AjF4ptu = await LpStakingV0PVLq.rewardEarned.call(addressTM6WsPC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tnPI7k8 = await LpStakingV0PVLq.incomeEarned.call(addressmoMkine, {from: accounts[0]});
//		await LpStakingV0PVLq.lpIncomeRateChanged.call({from: accounts[3]});
//		const uint256AIDJII5 = await LpStakingV0PVLq.weiToSatoshi.call(uintdpZP5ae, {from: "0x0000000000000000000000000000000000000001"});
//		const addressfad8sQV = await LpStakingV0PVLq.inCaseTokensGetStuck.call(addressS30Qdl, uintkcdRnoc, {from: accounts[2]});

		assert.equal(uint256AjF4ptu, BigInt("0"))
		await expect(LpStakingV0PVLq.incomeEarned.call(addressmoMkine, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingznqSPD3 = await LpStaking.new({from: accounts[0]});
//		const uint256i59qWsv = await LpStakingznqSPD3.getCurIncomeRate.call({from: accounts[4]});
//		const uint256tCJxWK = await LpStakingznqSPD3.incomePerToken.call({from: accounts[2]});
//		const uint25682b9Bf = await LpStakingznqSPD3.rewardPerToken.call({from: accounts[2]});
//		await LpStakingznqSPD3.lpIncomeRateChanged.call({from: accounts[4]});

		await expect(LpStakingznqSPD3.getCurIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingznqSPD3 = await LpStaking.new({from: accounts[0]});
		const addressD3bntC8 = accounts[4]
		const uint256O1QeLTw = await LpStakingznqSPD3.getUserAccumulatedWithdrawIncome.call(addressD3bntC8, {from: accounts[0]});
//		await LpStakingznqSPD3.lpIncomeRateChanged.call({from: accounts[4]});

		assert.equal(uint256O1QeLTw, BigInt("0"))
		await expect(LpStakingznqSPD3.lpIncomeRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})