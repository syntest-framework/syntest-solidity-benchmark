const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressbYehM8c = "0x0000000000000000000000000000000000000001"
		const addresszRHiXNP = accounts[3]
		const addresswhBRxQF = accounts[2]
		const MarsStakingRewardsB1qiX1 = await MarsStakingRewards.new(addressbYehM8c, addresszRHiXNP, addresswhBRxQF, {from: accounts[3]});
		const uintfabxR4 = BigInt("571")
//		await MarsStakingRewardsB1qiX1.exit.call({from: accounts[5]});
//		const uint25669K9HC = await MarsStakingRewardsB1qiX1.getRewardForDuration.call({from: accounts[3]});
//		await MarsStakingRewardsB1qiX1.onlyOwner.call({from: accounts[4]});
//		const uint256Xv3kFQ = await MarsStakingRewardsB1qiX1.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256V9NbAlV = await MarsStakingRewardsB1qiX1.withdraw.call(uintfabxR4, {from: accounts[0]});

		await expect(MarsStakingRewardsB1qiX1.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressedlSh7w = accounts[5]
		const addressBFazeE = accounts[2]
		const addressCsTcjoO = accounts[2]
		const MarsStakingRewardsa1C4DYm = await MarsStakingRewards.new(addressedlSh7w, addressBFazeE, addressCsTcjoO, {from: accounts[4]});
		const uint256E6E2B3 = await MarsStakingRewardsa1C4DYm.getRewardForDuration.call({from: accounts[3]});
		const uint256jLuhUX = await MarsStakingRewardsa1C4DYm.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressZQpJQFo = await MarsStakingRewardsa1C4DYm.owner.call({from: accounts[0]});

		assert.equal(addressZQpJQFo, 0xCFF4ca4C02A6848d461b93a55f93BFCc49e98C14)
		assert.equal(uint256E6E2B3, BigInt("0"))
		assert.equal(uint256jLuhUX, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressLf0Z3c = accounts[0]
		const addressnnnwj8O = accounts[4]
		const addressWT6N5s1 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsSCWvmP8 = await MarsStakingRewards.new(addressLf0Z3c, addressnnnwj8O, addressWT6N5s1, {from: accounts[4]});
		const uint6k3s1Y = BigInt("142")
		const uint3pSmD0 = BigInt("683")
		const addressS9r2R3g = accounts[2]
		const uint256HVilsl0 = await MarsStakingRewardsSCWvmP8.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256MNwo0WY = await MarsStakingRewardsSCWvmP8.notifyRewardAmount.call(uint3pSmD0, uint6k3s1Y, {from: accounts[2]});
//		await MarsStakingRewardsSCWvmP8.renounceOwnership.call({from: accounts[1]});
//		const uint256OzqJtOl = await MarsStakingRewardsSCWvmP8.earned.call(addressS9r2R3g, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256deZitR8 = await MarsStakingRewardsSCWvmP8.rewardPerToken.call({from: accounts[5]});
//		await MarsStakingRewardsSCWvmP8.getReward.call({from: accounts[0]});

		assert.equal(uint256HVilsl0, BigInt("0"))
		await expect(MarsStakingRewardsSCWvmP8.notifyRewardAmount.call(uint3pSmD0, uint6k3s1Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressuXc4REF = accounts[0]
		const addressuFeBo97 = "0x0000000000000000000000000000000000000001"
		const addressWSmoCwR = accounts[1]
		const MarsStakingRewardsLpgNcT = await MarsStakingRewards.new(addressuXc4REF, addressuFeBo97, addressWSmoCwR, {from: accounts[0]});
		const bytecznBB18 = "0x1b0a0703121614121f1d111a081b080b101b100616091706180b1d100f1e1707"
		const bytetBTGN49 = "0x17070503041d1b1f121c0900161d07080e0108131a140108101e0c040513110c"
		const uintFyykIWj = BigInt("170")
		const uinth0Lv8je = BigInt("770")
		const uintbbsfcg1 = BigInt("1402")
//		await MarsStakingRewardsLpgNcT.onlyRewardsDistribution.call({from: accounts[5]});
//		await MarsStakingRewardsLpgNcT.onlyRewardsDistribution.call({from: accounts[2]});
//		const uint256neRA1Mx = await MarsStakingRewardsLpgNcT.stakeWithPermit.call(uintbbsfcg1, uinth0Lv8je, uintFyykIWj, bytetBTGN49, bytecznBB18, {from: accounts[4]});

		await expect(MarsStakingRewardsLpgNcT.onlyRewardsDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address1MlmzZ = accounts[1]
		const addresssiDzwzn = accounts[2]
		const addressFCRljMz = accounts[1]
		const MarsStakingRewardsXkQo6fe = await MarsStakingRewards.new(address1MlmzZ, addresssiDzwzn, addressFCRljMz, {from: accounts[4]});
		const uintsD1iySE = BigInt("1072")
		const addressoHm7Nyl = accounts[2]
		const uint256t9fYD2X = await MarsStakingRewardsXkQo6fe.getRewardForDuration.call({from: accounts[4]});
//		const address5o08d1 = await MarsStakingRewardsXkQo6fe.inCaseTokensGetStuck.call(addressoHm7Nyl, uintsD1iySE, {from: accounts[3]});

		assert.equal(uint256t9fYD2X, BigInt("0"))
		await expect(MarsStakingRewardsXkQo6fe.inCaseTokensGetStuck.call(addressoHm7Nyl, uintsD1iySE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressz0BVAKS = accounts[4]
		const addressl3q5VQj = accounts[1]
		const addressJpbzBr9 = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addressz0BVAKS, addressl3q5VQj, addressJpbzBr9, {from: accounts[1]});
		const uint256DGziE5G = await MarsStakingRewardsJs6dt5m.lastTimeRewardApplicable.call({from: accounts[1]});
		const boolDAG3Y9V = await MarsStakingRewardsJs6dt5m.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpDPspt9 = await MarsStakingRewardsJs6dt5m.isOwner.call({from: accounts[3]});
		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolDAG3Y9V, false)
		assert.equal(boolpDPspt9, false)
		assert.equal(uint256DGziE5G, BigInt("0"))
		assert.equal(uint256s6ALjXC, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressgINdTMS = accounts[4]
		const addressjNYNbO = accounts[1]
		const addresshI9fTA6 = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addressgINdTMS, addressjNYNbO, addresshI9fTA6, {from: accounts[1]});
		const addressa8w4kk = accounts[1]
		const uint256DGziE5G = await MarsStakingRewardsJs6dt5m.lastTimeRewardApplicable.call({from: accounts[1]});
		const boolDAG3Y9V = await MarsStakingRewardsJs6dt5m.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpDPspt9 = await MarsStakingRewardsJs6dt5m.isOwner.call({from: accounts[3]});
		const uint256V8gutQh = await MarsStakingRewardsJs6dt5m.earned.call(addressa8w4kk, {from: accounts[2]});
		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolDAG3Y9V, false)
		assert.equal(boolpDPspt9, false)
		assert.equal(uint256DGziE5G, BigInt("0"))
		assert.equal(uint256V8gutQh, BigInt("0"))
		assert.equal(uint256s6ALjXC, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressDx9VgbH = accounts[4]
		const addressWrENytX = accounts[1]
		const addressnQNnWmQ = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addressDx9VgbH, addressWrENytX, addressnQNnWmQ, {from: accounts[1]});
		const addressY2xVRxg = "0x0000000000000000000000000000000000000001"
		const uint256DGziE5G = await MarsStakingRewardsJs6dt5m.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256U8zfc10 = await MarsStakingRewardsJs6dt5m.balanceOf.call(addressY2xVRxg, {from: accounts[5]});
		const boolDAG3Y9V = await MarsStakingRewardsJs6dt5m.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpDPspt9 = await MarsStakingRewardsJs6dt5m.isOwner.call({from: accounts[3]});
		const booljcvafx = await MarsStakingRewardsJs6dt5m.isOwner.call({from: accounts[0]});
		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolDAG3Y9V, false)
		assert.equal(booljcvafx, false)
		assert.equal(boolpDPspt9, false)
		assert.equal(uint256DGziE5G, BigInt("0"))
		assert.equal(uint256U8zfc10, BigInt("0"))
		assert.equal(uint256s6ALjXC, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresstgRJArs = accounts[4]
		const addressAx3njI = accounts[1]
		const addressa5hJYE = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addresstgRJArs, addressAx3njI, addressa5hJYE, {from: accounts[1]});
		const bytekgmHc6W = "0x1d1d171100181c131913071b0e1c05121e0a07140a1918002019001b1c170f18"
		const bytezTaU7PV = "0x1c040b161a1b1801060a0e121f110a0f1f1420171d111f18200a1910070b1208"
		const uintbBTk32d = BigInt("82")
		const uintA8YWWQS = BigInt("686")
		const uintB6lL2bh = BigInt("402")
		const uint256DGziE5G = await MarsStakingRewardsJs6dt5m.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256SzfdkR8 = await MarsStakingRewardsJs6dt5m.totalSupply.call({from: accounts[5]});
		const boolDAG3Y9V = await MarsStakingRewardsJs6dt5m.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsJs6dt5m.nonReentrant.call({from: accounts[1]});
//		const uint256WZUULVC = await MarsStakingRewardsJs6dt5m.stakeWithPermit.call(uintB6lL2bh, uintA8YWWQS, uintbBTk32d, bytezTaU7PV, bytekgmHc6W, {from: accounts[1]});
//		const boolpDPspt9 = await MarsStakingRewardsJs6dt5m.isOwner.call({from: accounts[3]});
//		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolDAG3Y9V, false)
		assert.equal(uint256DGziE5G, BigInt("0"))
		assert.equal(uint256SzfdkR8, BigInt("0"))
		await expect(MarsStakingRewardsJs6dt5m.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstWUSbRn = accounts[4]
		const addressfM5tyFK = accounts[1]
		const addressLiBkTBI = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addresstWUSbRn, addressfM5tyFK, addressLiBkTBI, {from: accounts[1]});
		const uintV4CBSBl = BigInt("1552")
		const uintbb5nFWJ = BigInt("1919")
		const uint256jTUPZ45 = await MarsStakingRewardsJs6dt5m.totalSupply.call({from: accounts[5]});
		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});
//		const uint256DqYglv8 = await MarsStakingRewardsJs6dt5m.notifyRewardAmount.call(uintbb5nFWJ, uintV4CBSBl, {from: accounts[4]});

		assert.equal(uint256jTUPZ45, BigInt("0"))
		assert.equal(uint256s6ALjXC, BigInt("0"))
		await expect(MarsStakingRewardsJs6dt5m.notifyRewardAmount.call(uintbb5nFWJ, uintV4CBSBl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscl7We4O = accounts[4]
		const addressK0A77jA = accounts[1]
		const addresspgNCiWZ = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addresscl7We4O, addressK0A77jA, addresspgNCiWZ, {from: accounts[1]});
		const uintYl9uaKm = BigInt("1813")
		const addressiPXuxt = accounts[4]
//		const addresscmD3dPF = await MarsStakingRewardsJs6dt5m.inCaseTokensGetStuck.call(addressiPXuxt, uintYl9uaKm, {from: accounts[1]});
//		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});

		await expect(MarsStakingRewardsJs6dt5m.inCaseTokensGetStuck.call(addressiPXuxt, uintYl9uaKm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswuDrUS8 = accounts[1]
		const addressdniRyVm = accounts[2]
		const addressgLqrEv7 = accounts[2]
		const MarsStakingRewardsb1rzv4M = await MarsStakingRewards.new(addresswuDrUS8, addressdniRyVm, addressgLqrEv7, {from: "0x0000000000000000000000000000000000000001"});
		const addressSRw2NqS = accounts[3]
		const addressACKss0G = accounts[0]
		const addressuEganQI = await MarsStakingRewardsb1rzv4M.transferOwnership.call(addressSRw2NqS, {from: accounts[1]});
		await MarsStakingRewardsb1rzv4M.renounceOwnership.call({from: accounts[3]});
		const addressxliNRiA = await MarsStakingRewardsb1rzv4M.updateReward.call(addressACKss0G, {from: accounts[2]});
		await MarsStakingRewardsb1rzv4M.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressAeIPzPV = accounts[0]
		const addressbfhCwWn = accounts[3]
		const addressU2XjHk = accounts[5]
		const MarsStakingRewardsIO8BfW4 = await MarsStakingRewards.new(addressAeIPzPV, addressbfhCwWn, addressU2XjHk, {from: accounts[5]});
		const uint256qejtDnY = await MarsStakingRewardsIO8BfW4.totalSupply.call({from: accounts[0]});
//		await MarsStakingRewardsIO8BfW4.renounceOwnership.call({from: accounts[5]});
//		await MarsStakingRewardsIO8BfW4.renounceOwnership.call({from: accounts[4]});
//		const uint256XKN4eAC = await MarsStakingRewardsIO8BfW4.totalSupply.call({from: accounts[3]});

		assert.equal(uint256qejtDnY, BigInt("0"))
		await expect(MarsStakingRewardsIO8BfW4.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressHnR6qRd = accounts[4]
		const addressGy4KFcD = accounts[1]
		const addressEQZb8aR = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addressHnR6qRd, addressGy4KFcD, addressEQZb8aR, {from: accounts[1]});
		const addressNTvjYni = accounts[1]
		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});
		const uint256gKPM4BC = await MarsStakingRewardsJs6dt5m.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressRlbpBLH = await MarsStakingRewardsJs6dt5m.transferOwnership.call(addressNTvjYni, {from: accounts[1]});

		assert.equal(uint256gKPM4BC, BigInt("0"))
		assert.equal(uint256s6ALjXC, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresslhZgGS4 = accounts[4]
		const addressFzTFgyD = accounts[1]
		const addressLpW5lHu = accounts[4]
		const MarsStakingRewardsJs6dt5m = await MarsStakingRewards.new(addresslhZgGS4, addressFzTFgyD, addressLpW5lHu, {from: accounts[1]});
		const addressacBL1A = accounts[0]
		const uint256s6ALjXC = await MarsStakingRewardsJs6dt5m.rewardPerToken.call({from: accounts[0]});
		const addressn9XNzVg = await MarsStakingRewardsJs6dt5m.setRewardsDistribution.call(addressacBL1A, {from: accounts[1]});
		const uint256hbRom2X = await MarsStakingRewardsJs6dt5m.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256hbRom2X, BigInt("0"))
		assert.equal(uint256s6ALjXC, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresstLwohmL = accounts[1]
		const addressua2l9rB = accounts[2]
		const addressUUgDpAI = accounts[1]
		const MarsStakingRewardsXkQo6fe = await MarsStakingRewards.new(addresstLwohmL, addressua2l9rB, addressUUgDpAI, {from: accounts[4]});
		const uint1fqRTF = BigInt("714")
		const addressn55UIsV = accounts[4]
		const addressYgF46bj = accounts[2]
//		const addressf9lHPtw = await MarsStakingRewardsXkQo6fe.inCaseTokensGetStuck.call(addressn55UIsV, uint1fqRTF, {from: accounts[4]});
//		const addresstZeJn5T = await MarsStakingRewardsXkQo6fe.updateReward.call(addressYgF46bj, {from: accounts[3]});
//		const uint256t9fYD2X = await MarsStakingRewardsXkQo6fe.getRewardForDuration.call({from: accounts[4]});

		await expect(MarsStakingRewardsXkQo6fe.inCaseTokensGetStuck.call(addressn55UIsV, uint1fqRTF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})