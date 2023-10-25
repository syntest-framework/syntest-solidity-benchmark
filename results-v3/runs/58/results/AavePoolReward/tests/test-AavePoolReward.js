const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardN8MZad = await AavePoolReward.new({from: accounts[1]});
		const uintaifiY1I = BigInt("32")
		const uintUa1Lj95 = BigInt("365")
		const uint256Hb1lkVl = await AavePoolRewardN8MZad.withdraw.call(uintaifiY1I, {from: accounts[5]});
		const uint256ckq7x6d = await AavePoolRewardN8MZad.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256IMiAEnE = await AavePoolRewardN8MZad.rewardPerToken.call({from: accounts[3]});
		const uint256UP8NCR4 = await AavePoolRewardN8MZad.notifyRewardAmount.call(uintUa1Lj95, {from: accounts[3]});

		await expect(AavePoolRewardN8MZad.withdraw.call(uintaifiY1I, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardybaObzw = await AavePoolReward.new({from: accounts[3]});
		const uintKbtOfkE = BigInt("1612")
		const uintjCrxVe9 = BigInt("2008")
		const uint5YPFTm = BigInt("449")
		const uintUX5GdML = BigInt("1034")
		const uint256cLpWmnA = await AavePoolRewardybaObzw.stake.call(uintKbtOfkE, {from: accounts[3]});
		const uint256jiXuE29 = await AavePoolRewardybaObzw.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ABsjGF = await AavePoolRewardybaObzw.withdraw.call(uintjCrxVe9, {from: accounts[1]});
		const uint256qjw9xtQ = await AavePoolRewardybaObzw.stake.call(uint5YPFTm, {from: accounts[3]});
		const uint256Sagzz9Z = await AavePoolRewardybaObzw.stake.call(uintUX5GdML, {from: accounts[5]});
		await AavePoolRewardybaObzw.getReward.call({from: accounts[4]});

		await expect(AavePoolRewardybaObzw.stake.call(uintKbtOfkE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardAneiTS3 = await AavePoolReward.new({from: accounts[0]});
		const uintK5FP7Z6 = BigInt("744")
		const uint256d3NViBi = await AavePoolRewardAneiTS3.notifyRewardAmount.call(uintK5FP7Z6, {from: accounts[0]});
		await AavePoolRewardAneiTS3.getReward.call({from: accounts[5]});
		await AavePoolRewardAneiTS3.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardAneiTS3.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardC0eEyRR = await AavePoolReward.new({from: accounts[1]});
		const uintmiAaE6m = BigInt("1117")
		const uintj7Wlg1z = BigInt("1746")
		const addressCGEo22y = accounts[0]
		const uint256RbwK2tg = await AavePoolRewardC0eEyRR.notifyRewardAmount.call(uintmiAaE6m, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WTepPrQ = await AavePoolRewardC0eEyRR.stake.call(uintj7Wlg1z, {from: accounts[2]});
		const uint256P1PbSPm = await AavePoolRewardC0eEyRR.earned.call(addressCGEo22y, {from: accounts[4]});

		await expect(AavePoolRewardC0eEyRR.notifyRewardAmount.call(uintmiAaE6m, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardSW8NU7 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressODvQjbO = accounts[4]
		const addressDpSs99J = accounts[2]
		const addressCnkB0D = await AavePoolRewardSW8NU7.updateReward.call(addressODvQjbO, {from: accounts[3]});
		const uint256vhztWLV = await AavePoolRewardSW8NU7.earned.call(addressDpSs99J, {from: accounts[0]});
		const uint256IDV4m9q = await AavePoolRewardSW8NU7.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardpzciMQG = await AavePoolReward.new({from: accounts[1]});
		const addressgOAaoEI = accounts[4]
		const uintIvNEdVm = BigInt("1587")
		const uintWHDHyd1 = BigInt("1360")
		const uintafBkyJ = BigInt("83")
		const addressuiDDLkF = await AavePoolRewardpzciMQG.updateReward.call(addressgOAaoEI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wBB1HAy = await AavePoolRewardpzciMQG.notifyRewardAmount.call(uintIvNEdVm, {from: accounts[5]});
		const uint256PX7wCFB = await AavePoolRewardpzciMQG.withdraw.call(uintWHDHyd1, {from: accounts[3]});
		const uint256dADJgtX = await AavePoolRewardpzciMQG.stake.call(uintafBkyJ, {from: accounts[1]});
		await AavePoolRewardpzciMQG.getReward.call({from: accounts[1]});

		await expect(AavePoolRewardpzciMQG.updateReward.call(addressgOAaoEI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardxHxXHDk = await AavePoolReward.new({from: accounts[2]});
		const addresss6tWVnH = accounts[2]
		const uintLXTPsOv = BigInt("1938")
		const uint256kIGP3KD = await AavePoolRewardxHxXHDk.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressd9H3gaH = await AavePoolRewardxHxXHDk.dev.call(addresss6tWVnH, {from: accounts[0]});
		await AavePoolRewardxHxXHDk.getReward.call({from: accounts[5]});
		const uint256CoSq57B = await AavePoolRewardxHxXHDk.withdraw.call(uintLXTPsOv, {from: accounts[4]});

		assert.equal(uint256kIGP3KD, BigInt("0"))
		await expect(AavePoolRewardxHxXHDk.dev.call(addresss6tWVnH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})