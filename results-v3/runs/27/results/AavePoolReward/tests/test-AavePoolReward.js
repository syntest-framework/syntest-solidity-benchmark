const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardiPjf7zA = await AavePoolReward.new({from: accounts[3]});
		const addresstBZzxBr = accounts[3]
		const uintubfAj5 = BigInt("195")
		const uint256r4aA6M0 = await AavePoolRewardiPjf7zA.rewardPerToken.call({from: accounts[0]});
		const addressSsKFiFm = await AavePoolRewardiPjf7zA.updateReward.call(addresstBZzxBr, {from: accounts[0]});
		const uint256dy0MKKV = await AavePoolRewardiPjf7zA.notifyRewardAmount.call(uintubfAj5, {from: accounts[5]});

		assert.equal(uint256r4aA6M0, BigInt("0"))
		await expect(AavePoolRewardiPjf7zA.updateReward.call(addresstBZzxBr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardj6cbKym = await AavePoolReward.new({from: accounts[1]});
		const uint256wP4AVwZ = await AavePoolRewardj6cbKym.lastTimeRewardApplicable.call({from: accounts[1]});
		await AavePoolRewardj6cbKym.exit.call({from: accounts[2]});

		assert.equal(uint256wP4AVwZ, BigInt("0"))
		await expect(AavePoolRewardj6cbKym.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardRVDTtfg = await AavePoolReward.new({from: accounts[1]});
		const uintXgWA98S = BigInt("1714")
		const uintftnv0S2 = BigInt("1347")
		const uint256DxxWzjk = await AavePoolRewardRVDTtfg.stake.call(uintXgWA98S, {from: accounts[1]});
		const uint256xe0zDJM = await AavePoolRewardRVDTtfg.withdraw.call(uintftnv0S2, {from: accounts[3]});
		await AavePoolRewardRVDTtfg.exit.call({from: accounts[0]});

		await expect(AavePoolRewardRVDTtfg.stake.call(uintXgWA98S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardxzmiJC = await AavePoolReward.new({from: accounts[4]});
		const addressq4qjtES = accounts[4]
		const addressDIMpHsE = accounts[3]
		const addressjrKkf3 = await AavePoolRewardxzmiJC.dev.call(addressq4qjtES, {from: accounts[4]});
		const uint256dsUeNUf = await AavePoolRewardxzmiJC.earned.call(addressDIMpHsE, {from: accounts[5]});

		assert.equal(uint256dsUeNUf, BigInt("0"))
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardvC3sRjf = await AavePoolReward.new({from: accounts[5]});
		const addresshkqgfwd = accounts[2]
		const addressKHVH1op = accounts[2]
		const addressWvJjvt3 = await AavePoolRewardvC3sRjf.dev.call(addresshkqgfwd, {from: accounts[4]});
		await AavePoolRewardvC3sRjf.getReward.call({from: accounts[0]});
		const uint256jSaP6Qo = await AavePoolRewardvC3sRjf.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256x9bowvU = await AavePoolRewardvC3sRjf.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256iPX2Jr = await AavePoolRewardvC3sRjf.earned.call(addressKHVH1op, {from: accounts[5]});

		await expect(AavePoolRewardvC3sRjf.dev.call(addresshkqgfwd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardz9eSVe2 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuxT1n9f = BigInt("694")
		const addressOb7eImz = accounts[4]
		const uintCTHp4H = BigInt("719")
		const uintsaW37X4 = BigInt("848")
		const uint256h6bZ5yd = await AavePoolRewardz9eSVe2.withdraw.call(uintuxT1n9f, {from: accounts[2]});
		const uint256vHxopzR = await AavePoolRewardz9eSVe2.earned.call(addressOb7eImz, {from: accounts[5]});
		await AavePoolRewardz9eSVe2.exit.call({from: accounts[1]});
		const uint256v6fWis = await AavePoolRewardz9eSVe2.notifyRewardAmount.call(uintCTHp4H, {from: "0x0000000000000000000000000000000000000001"});
		const uint256p1wpwPS = await AavePoolRewardz9eSVe2.notifyRewardAmount.call(uintsaW37X4, {from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardj6cbKym = await AavePoolReward.new({from: accounts[1]});
		const uintOQ8tkvk = BigInt("545")
		const uintoyMfwXk = BigInt("694")
		const uintTSKvkgn = BigInt("1494")
		const uintz8YjviC = BigInt("1307")
		const uint256wP4AVwZ = await AavePoolRewardj6cbKym.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256FGI0Tok = await AavePoolRewardj6cbKym.notifyRewardAmount.call(uintOQ8tkvk, {from: accounts[2]});
		const uint256TNwtAIS = await AavePoolRewardj6cbKym.withdraw.call(uintoyMfwXk, {from: accounts[3]});
		const uint256BTSlK4a = await AavePoolRewardj6cbKym.stake.call(uintTSKvkgn, {from: accounts[5]});
		await AavePoolRewardj6cbKym.exit.call({from: accounts[2]});
		const uint256KEj1YEF = await AavePoolRewardj6cbKym.notifyRewardAmount.call(uintz8YjviC, {from: accounts[1]});

		assert.equal(uint256wP4AVwZ, BigInt("0"))
		await expect(AavePoolRewardj6cbKym.notifyRewardAmount.call(uintOQ8tkvk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardRVDTtfg = await AavePoolReward.new({from: accounts[1]});
		const uintCeHuVJj = BigInt("1347")
		const uint256xe0zDJM = await AavePoolRewardRVDTtfg.withdraw.call(uintCeHuVJj, {from: accounts[3]});
		await AavePoolRewardRVDTtfg.exit.call({from: accounts[0]});

		await expect(AavePoolRewardRVDTtfg.withdraw.call(uintCeHuVJj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardpDM28Sn = await AavePoolReward.new({from: accounts[0]});
		const uintseLzTt = BigInt("1783")
		const uintb4KVtCU = BigInt("116")
		const uint256hyeddqA = await AavePoolRewardpDM28Sn.notifyRewardAmount.call(uintseLzTt, {from: accounts[0]});
		await AavePoolRewardpDM28Sn.getReward.call({from: accounts[2]});
		await AavePoolRewardpDM28Sn.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ox6IqfI = await AavePoolRewardpDM28Sn.stake.call(uintb4KVtCU, {from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardpDM28Sn.exit.call({from: accounts[4]});

		await expect(AavePoolRewardpDM28Sn.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})