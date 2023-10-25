const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVwqaMw = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewards1vdekI = await FrogDAOGovernanceRewards.new(addressVwqaMw, {from: accounts[5]});
		const uintOdjPh5A = BigInt("1565")
		const uint256IxHur21 = await FrogDAOGovernanceRewards1vdekI.rewardPerToken.call({from: accounts[0]});
//		const uint256GEyBOR4 = await FrogDAOGovernanceRewards1vdekI.notifyRewardAmount.call(uintOdjPh5A, {from: accounts[0]});

		assert.equal(uint256IxHur21, BigInt("0"))
		await expect(FrogDAOGovernanceRewards1vdekI.notifyRewardAmount.call(uintOdjPh5A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressqlxyOCo = accounts[0]
		const FrogDAOGovernanceRewardsOkhmVV = await FrogDAOGovernanceRewards.new(addressqlxyOCo, {from: accounts[1]});
		const uintWlgKqXp = BigInt("1832")
		const addresst1gm8Pc = accounts[2]
//		await FrogDAOGovernanceRewardsOkhmVV.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsOkhmVV.checkhalve.call({from: accounts[5]});
//		const uint256X9cUVI6 = await FrogDAOGovernanceRewardsOkhmVV.withdraw.call(uintWlgKqXp, {from: accounts[3]});
//		const addressPuZsjP = await FrogDAOGovernanceRewardsOkhmVV.transferDevAddr.call(addresst1gm8Pc, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsOkhmVV.checkhalve.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsOkhmVV.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshAKJDc6 = accounts[1]
		const FrogDAOGovernanceRewardseYliDA = await FrogDAOGovernanceRewards.new(addresshAKJDc6, {from: accounts[1]});
		const uintZFW8DSm = BigInt("186")
		const uintJP69sXP = BigInt("328")
//		const uint256IUG5PH6 = await FrogDAOGovernanceRewardseYliDA.withdrawDevFund.call(uintZFW8DSm, {from: accounts[0]});
//		const uint256GK6rKfo = await FrogDAOGovernanceRewardseYliDA.notifyRewardAmount.call(uintJP69sXP, {from: accounts[4]});
//		const uint256W2YOSc = await FrogDAOGovernanceRewardseYliDA.lastTimeRewardApplicable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardseYliDA.renounceDevAddr.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardseYliDA.withdrawDevFund.call(uintZFW8DSm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVgYrBmR = accounts[5]
		const FrogDAOGovernanceRewardsRW8Osmo = await FrogDAOGovernanceRewards.new(addressVgYrBmR, {from: accounts[3]});
		const address88oyKL = accounts[1]
		const addressmLX1VFv = "0x0000000000000000000000000000000000000001"
		const uint256sMb49g7 = await FrogDAOGovernanceRewardsRW8Osmo.earned.call(address88oyKL, {from: accounts[0]});
		const uint256w4d2gOV = await FrogDAOGovernanceRewardsRW8Osmo.earned.call(addressmLX1VFv, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsRW8Osmo.exit.call({from: accounts[2]});

		assert.equal(uint256sMb49g7, BigInt("0"))
		assert.equal(uint256w4d2gOV, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsRW8Osmo.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNbgw8Ir = accounts[1]
		const FrogDAOGovernanceRewardsE8tomqB = await FrogDAOGovernanceRewards.new(addressNbgw8Ir, {from: "0x0000000000000000000000000000000000000001"});
		const uintOEEk19C = BigInt("974")
		const uinticfOtc1 = BigInt("1240")
		await FrogDAOGovernanceRewardsE8tomqB.getReward.call({from: accounts[1]});
		const uint256rV0CPfv = await FrogDAOGovernanceRewardsE8tomqB.notifyRewardAmount.call(uintOEEk19C, {from: accounts[1]});
		const uint256VRPgqu7 = await FrogDAOGovernanceRewardsE8tomqB.notifyRewardAmount.call(uinticfOtc1, {from: accounts[4]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressj4dyaUZ = accounts[0]
		const FrogDAOGovernanceRewardsaz7crGr = await FrogDAOGovernanceRewards.new(addressj4dyaUZ, {from: accounts[1]});
		const addressKJJRgi = "0x0000000000000000000000000000000000000001"
		const addressb3jRpyF = accounts[3]
		const addressxCtJNiA = accounts[1]
//		const addresstXi4sfA = await FrogDAOGovernanceRewardsaz7crGr.transferDevAddr.call(addressKJJRgi, {from: accounts[5]});
//		const addressPfxFVYt = await FrogDAOGovernanceRewardsaz7crGr.transferDevAddr.call(addressb3jRpyF, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsaz7crGr.exit.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsaz7crGr.renounceDevAddr.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsaz7crGr.checkStart.call({from: accounts[2]});
//		const addressmkqz1SM = await FrogDAOGovernanceRewardsaz7crGr.updateReward.call(addressxCtJNiA, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsaz7crGr.transferDevAddr.call(addressKJJRgi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfSJnkJY = accounts[0]
		const FrogDAOGovernanceRewardsvVobLCq = await FrogDAOGovernanceRewards.new(addressfSJnkJY, {from: accounts[4]});
		const uintbJ62aJ = BigInt("1286")
		const addressjDrkDna = "0x0000000000000000000000000000000000000001"
		const uintyrQghlU = BigInt("1049")
//		const uint256ceYHkDZ = await FrogDAOGovernanceRewardsvVobLCq.stake.call(uintbJ62aJ, {from: accounts[0]});
//		const addressG0JTLPD = await FrogDAOGovernanceRewardsvVobLCq.updateReward.call(addressjDrkDna, {from: accounts[3]});
//		const uint256YqyW1n1 = await FrogDAOGovernanceRewardsvVobLCq.withdraw.call(uintyrQghlU, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsvVobLCq.stake.call(uintbJ62aJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscPZ1zD = accounts[4]
		const FrogDAOGovernanceRewardsr6oWSPV = await FrogDAOGovernanceRewards.new(addresscPZ1zD, {from: accounts[2]});
		const uint256dHuTg0v = await FrogDAOGovernanceRewardsr6oWSPV.devFundAvailable.call({from: accounts[1]});
		const uint2560V949p = await FrogDAOGovernanceRewardsr6oWSPV.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2560V949p, BigInt("0"))
		assert.equal(uint256dHuTg0v, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVr4RDhT = accounts[3]
		const FrogDAOGovernanceRewardskm55Lrh = await FrogDAOGovernanceRewards.new(addressVr4RDhT, {from: accounts[1]});
		const addressIuu1f6M = accounts[1]
//		await FrogDAOGovernanceRewardskm55Lrh.checkStart.call({from: accounts[0]});
//		const addressnXqPX2r = await FrogDAOGovernanceRewardskm55Lrh.transferDevAddr.call(addressIuu1f6M, {from: accounts[1]});
//		await FrogDAOGovernanceRewardskm55Lrh.exit.call({from: accounts[4]});
//		const uint256Qx1rSTc = await FrogDAOGovernanceRewardskm55Lrh.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardskm55Lrh.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressw2UFeF = accounts[5]
		const FrogDAOGovernanceRewardsRW8Osmo = await FrogDAOGovernanceRewards.new(addressw2UFeF, {from: accounts[3]});
		const uintWvx4pFl = BigInt("2044")
		const addressgNY3yV = accounts[1]
		const addresslGvrOAs = "0x0000000000000000000000000000000000000001"
//		const uint256wCFcGiP = await FrogDAOGovernanceRewardsRW8Osmo.notifyRewardAmount.call(uintWvx4pFl, {from: accounts[3]});
//		const uint256sMb49g7 = await FrogDAOGovernanceRewardsRW8Osmo.earned.call(addressgNY3yV, {from: accounts[0]});
//		const uint256w4d2gOV = await FrogDAOGovernanceRewardsRW8Osmo.earned.call(addresslGvrOAs, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsRW8Osmo.exit.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsRW8Osmo.checkStart.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsRW8Osmo.notifyRewardAmount.call(uintWvx4pFl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshE987DC = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewards1vdekI = await FrogDAOGovernanceRewards.new(addresshE987DC, {from: accounts[5]});
		const addressptmHDF = accounts[1]
		const uintPYMypOh = BigInt("1565")
		const uint256IxHur21 = await FrogDAOGovernanceRewards1vdekI.rewardPerToken.call({from: accounts[0]});
		const address1jPrvU = await FrogDAOGovernanceRewards1vdekI.transferDevAddr.call(addressptmHDF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GIkF59d = await FrogDAOGovernanceRewards1vdekI.rewardPerToken.call({from: accounts[4]});
//		const uint256GEyBOR4 = await FrogDAOGovernanceRewards1vdekI.notifyRewardAmount.call(uintPYMypOh, {from: accounts[0]});

		assert.equal(uint256GIkF59d, BigInt("0"))
		assert.equal(uint256IxHur21, BigInt("0"))
		await expect(FrogDAOGovernanceRewards1vdekI.notifyRewardAmount.call(uintPYMypOh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresseHrZ8br = accounts[5]
		const FrogDAOGovernanceRewardsRW8Osmo = await FrogDAOGovernanceRewards.new(addresseHrZ8br, {from: accounts[3]});
		const uintvcOgNyW = BigInt("1801")
		const addressCrTdGm = accounts[1]
		const addressfQ2iDgs = "0x0000000000000000000000000000000000000001"
		const addressoI881lX = accounts[3]
//		const uint256xruZg5e = await FrogDAOGovernanceRewardsRW8Osmo.withdraw.call(uintvcOgNyW, {from: accounts[2]});
//		const uint256sMb49g7 = await FrogDAOGovernanceRewardsRW8Osmo.earned.call(addressCrTdGm, {from: accounts[0]});
//		const uint256w4d2gOV = await FrogDAOGovernanceRewardsRW8Osmo.earned.call(addressfQ2iDgs, {from: accounts[3]});
//		const addressWbqETx = await FrogDAOGovernanceRewardsRW8Osmo.updateReward.call(addressoI881lX, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsRW8Osmo.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsRW8Osmo.withdraw.call(uintvcOgNyW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})