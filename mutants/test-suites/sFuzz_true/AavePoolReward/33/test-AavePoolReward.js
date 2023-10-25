const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardRTr0eij = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressG58Snz4 = accounts[3]
		await AavePoolRewardRTr0eij.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardRTr0eij.getReward.call({from: accounts[3]});
		const uint256FkdGxPc = await AavePoolRewardRTr0eij.rewardPerToken.call({from: accounts[3]});
		await AavePoolRewardRTr0eij.exit.call({from: accounts[4]});
		const uint2560nTYLV = await AavePoolRewardRTr0eij.earned.call(addressG58Snz4, {from: accounts[1]});
		const uint256HjAfVUd = await AavePoolRewardRTr0eij.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnOU65tk = await AavePoolReward.new({from: accounts[2]});
		const uintpmiWuqD = BigInt("1719")
		const addressMqOITUM = accounts[0]
		const addressLHlWtfv = "0x0000000000000000000000000000000000000001"
		const uinttbeAcB7 = BigInt("1632")
		const uint256uX91To8 = await AavePoolRewardnOU65tk.rewardPerToken.call({from: accounts[0]});
//		const uint25699h8Bj = await AavePoolRewardnOU65tk.withdraw.call(uintpmiWuqD, {from: accounts[0]});
//		const addressISpbc4V = await AavePoolRewardnOU65tk.dev.call(addressMqOITUM, {from: accounts[2]});
//		const addressJo0NTZV = await AavePoolRewardnOU65tk.dev.call(addressLHlWtfv, {from: accounts[2]});
//		const uint256svZt3Ig = await AavePoolRewardnOU65tk.stake.call(uinttbeAcB7, {from: accounts[0]});

		assert.equal(uint256uX91To8, BigInt("0"))
		await expect(AavePoolRewardnOU65tk.withdraw.call(uintpmiWuqD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardL0RQMKr = await AavePoolReward.new({from: accounts[5]});
		const uintC1GenXo = BigInt("367")
		const addressJA8VGIK = accounts[2]
		const uintTV5aOBY = BigInt("931")
//		const uint256grBbPtf = await AavePoolRewardL0RQMKr.notifyRewardAmount.call(uintC1GenXo, {from: accounts[3]});
//		const addressfgGfxPZ = await AavePoolRewardL0RQMKr.dev.call(addressJA8VGIK, {from: accounts[1]});
//		await AavePoolRewardL0RQMKr.getReward.call({from: accounts[1]});
//		const uint256SIgqNT4 = await AavePoolRewardL0RQMKr.withdraw.call(uintTV5aOBY, {from: accounts[1]});

		await expect(AavePoolRewardL0RQMKr.notifyRewardAmount.call(uintC1GenXo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardq6FkIa2 = await AavePoolReward.new({from: accounts[1]});
		const uintcgHmkRv = BigInt("1002")
		const uintIQAmz7Z = BigInt("813")
		const addressdGV24qK = accounts[1]
//		const uint256Klvn0OU = await AavePoolRewardq6FkIa2.stake.call(uintcgHmkRv, {from: accounts[1]});
//		const uint256VCA1XVw = await AavePoolRewardq6FkIa2.stake.call(uintIQAmz7Z, {from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardq6FkIa2.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressVRsSPaG = await AavePoolRewardq6FkIa2.dev.call(addressdGV24qK, {from: accounts[5]});

		await expect(AavePoolRewardq6FkIa2.stake.call(uintcgHmkRv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardIIWdubF = await AavePoolReward.new({from: accounts[3]});
		const addressa57036 = "0x0000000000000000000000000000000000000001"
//		await AavePoolRewardIIWdubF.exit.call({from: accounts[2]});
//		const uint256yyr8agk = await AavePoolRewardIIWdubF.earned.call(addressa57036, {from: accounts[2]});
//		const uint256BNgWlyg = await AavePoolRewardIIWdubF.lastTimeRewardApplicable.call({from: accounts[1]});
//		await AavePoolRewardIIWdubF.getReward.call({from: accounts[3]});

		await expect(AavePoolRewardIIWdubF.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardo17dsHj = await AavePoolReward.new({from: accounts[3]});
		const addressmr4fbEo = accounts[1]
		const addressZnLm7BT = accounts[3]
		const addressuRYAAdG = accounts[2]
		const addressGSjE5Dp = accounts[2]
		const uint256v05Ile0 = await AavePoolRewardo17dsHj.earned.call(addressmr4fbEo, {from: accounts[0]});
		const uint256TaFlvT2 = await AavePoolRewardo17dsHj.earned.call(addressZnLm7BT, {from: accounts[2]});
//		const addressvay0QkJ = await AavePoolRewardo17dsHj.updateReward.call(addressuRYAAdG, {from: accounts[3]});
//		const addressJzxzbOL = await AavePoolRewardo17dsHj.updateReward.call(addressGSjE5Dp, {from: accounts[0]});

		assert.equal(uint256TaFlvT2, BigInt("0"))
		assert.equal(uint256v05Ile0, BigInt("0"))
		await expect(AavePoolRewardo17dsHj.updateReward.call(addressuRYAAdG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardKlZu41F = await AavePoolReward.new({from: accounts[2]});
		const addressJ2U0pUj = accounts[3]
		const addressXuhun4O = accounts[1]
//		const addresspPjS8bW = await AavePoolRewardKlZu41F.dev.call(addressJ2U0pUj, {from: accounts[3]});
//		const uint256jGW7sKw = await AavePoolRewardKlZu41F.earned.call(addressXuhun4O, {from: accounts[1]});
//		const uint256bWGCukc = await AavePoolRewardKlZu41F.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(AavePoolRewardKlZu41F.dev.call(addressJ2U0pUj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardq6FkIa2 = await AavePoolReward.new({from: accounts[1]});
		const uintj61tpxH = BigInt("1544")
		const uintt47hfpQ = BigInt("1845")
		const uintF4YovYi = BigInt("802")
		const addressvXjM2J = accounts[1]
		const addressxX0R9z = accounts[1]
		const uint256hBMA71b = await AavePoolRewardq6FkIa2.notifyRewardAmount.call(uintj61tpxH, {from: accounts[1]});
//		const uint256IYupEk = await AavePoolRewardq6FkIa2.withdraw.call(uintt47hfpQ, {from: accounts[2]});
//		const uint256VCA1XVw = await AavePoolRewardq6FkIa2.stake.call(uintF4YovYi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2567Gt2vR = await AavePoolRewardq6FkIa2.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addresspyTGzkC = await AavePoolRewardq6FkIa2.dev.call(addressvXjM2J, {from: "0x0000000000000000000000000000000000000001"});
//		const addressVRsSPaG = await AavePoolRewardq6FkIa2.dev.call(addressxX0R9z, {from: accounts[5]});

		await expect(AavePoolRewardq6FkIa2.withdraw.call(uintt47hfpQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardKlZu41F = await AavePoolReward.new({from: accounts[2]});
		const addressAzhbmU = accounts[3]
		const uinti6Ld5PF = BigInt("159")
		const addressQwoVw54 = await AavePoolRewardKlZu41F.dev.call(addressAzhbmU, {from: accounts[2]});
//		const uint256L4uHMi5 = await AavePoolRewardKlZu41F.withdraw.call(uinti6Ld5PF, {from: accounts[3]});
//		const uint256bWGCukc = await AavePoolRewardKlZu41F.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(AavePoolRewardKlZu41F.withdraw.call(uinti6Ld5PF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})