const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressolvTrU0 = accounts[4]
		const FrogDAOGovernanceRewardsSOplNR6 = await FrogDAOGovernanceRewards.new(addressolvTrU0, {from: accounts[5]});
		const addressSlkwHxT = accounts[3]
		const uintSAl5azI = BigInt("324")
		const uintMaZRpka = BigInt("86")
		const addressVrB4lW6 = await FrogDAOGovernanceRewardsSOplNR6.updateReward.call(addressSlkwHxT, {from: accounts[4]});
		const uint256K6XzC2F = await FrogDAOGovernanceRewardsSOplNR6.stake.call(uintSAl5azI, {from: accounts[0]});
		const uint256Eh6vOb3 = await FrogDAOGovernanceRewardsSOplNR6.stake.call(uintMaZRpka, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsSOplNR6.updateReward.call(addressSlkwHxT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressccgpNe2 = accounts[4]
		const FrogDAOGovernanceRewardsXggotHT = await FrogDAOGovernanceRewards.new(addressccgpNe2, {from: accounts[3]});
		const uintJUNqvtS = BigInt("1310")
		const uint6jzhZu = BigInt("1218")
		const uint256ZTp4Qrf = await FrogDAOGovernanceRewardsXggotHT.rewardPerToken.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsXggotHT.checkStart.call({from: accounts[4]});
		const uint2569YaSeF = await FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintJUNqvtS, {from: accounts[4]});
		const uint256sQ9TJsM = await FrogDAOGovernanceRewardsXggotHT.withdraw.call(uint6jzhZu, {from: accounts[3]});
		await FrogDAOGovernanceRewardsXggotHT.exit.call({from: accounts[0]});

		assert.equal(uint256ZTp4Qrf, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXggotHT.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAqh53CK = accounts[2]
		const FrogDAOGovernanceRewardstCqEsk0 = await FrogDAOGovernanceRewards.new(addressAqh53CK, {from: accounts[2]});
		const uintdH2g3Cu = BigInt("1748")
		const uint256WnZr4vY = await FrogDAOGovernanceRewardstCqEsk0.rewardPerToken.call({from: accounts[1]});
		const uint2566dhVvD = await FrogDAOGovernanceRewardstCqEsk0.stake.call(uintdH2g3Cu, {from: accounts[0]});

		assert.equal(uint256WnZr4vY, BigInt("0"))
		await expect(FrogDAOGovernanceRewardstCqEsk0.stake.call(uintdH2g3Cu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressaiJPkaf = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsygwV0Jj = await FrogDAOGovernanceRewards.new(addressaiJPkaf, {from: accounts[5]});
		const uintnUNPqf = BigInt("803")
		const uintmCaWywH = BigInt("1409")
		const uint256aGp4sRS = await FrogDAOGovernanceRewardsygwV0Jj.withdraw.call(uintnUNPqf, {from: accounts[1]});
		await FrogDAOGovernanceRewardsygwV0Jj.checkhalve.call({from: accounts[1]});
		const uint256zHNuHmq = await FrogDAOGovernanceRewardsygwV0Jj.notifyRewardAmount.call(uintmCaWywH, {from: accounts[2]});
		await FrogDAOGovernanceRewardsygwV0Jj.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsygwV0Jj.withdraw.call(uintnUNPqf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZXct6iR = accounts[0]
		const FrogDAOGovernanceRewardsLROE4KK = await FrogDAOGovernanceRewards.new(addressZXct6iR, {from: "0x0000000000000000000000000000000000000001"});
		const uintFniF22m = BigInt("816")
		await FrogDAOGovernanceRewardsLROE4KK.renounceDevAddr.call({from: accounts[1]});
		const uint256zbYIZEr = await FrogDAOGovernanceRewardsLROE4KK.notifyRewardAmount.call(uintFniF22m, {from: accounts[1]});
		const uint256GZj60gq = await FrogDAOGovernanceRewardsLROE4KK.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256pKtd25V = await FrogDAOGovernanceRewardsLROE4KK.rewardPerToken.call({from: accounts[5]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTboiz7q = accounts[1]
		const FrogDAOGovernanceRewardsrp613Jz = await FrogDAOGovernanceRewards.new(addressTboiz7q, {from: accounts[4]});
		const uint2568zSGOL = await FrogDAOGovernanceRewardsrp613Jz.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256i1rG1W8 = await FrogDAOGovernanceRewardsrp613Jz.devFundAvailable.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsrp613Jz.checkStart.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsrp613Jz.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2568zSGOL, BigInt("0"))
		assert.equal(uint256i1rG1W8, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrp613Jz.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressluqh0d = accounts[4]
		const FrogDAOGovernanceRewardsXggotHT = await FrogDAOGovernanceRewards.new(addressluqh0d, {from: accounts[3]});
		const uintU6GKR0F = BigInt("753")
		const uintiSSA4Nb = BigInt("1302")
		const uintVzRSjZC = BigInt("1218")
		const uintfqW4E2x = BigInt("1109")
		const uint256ZTp4Qrf = await FrogDAOGovernanceRewardsXggotHT.rewardPerToken.call({from: accounts[4]});
		const uint256K14SBTv = await FrogDAOGovernanceRewardsXggotHT.notifyRewardAmount.call(uintU6GKR0F, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsXggotHT.checkStart.call({from: accounts[4]});
		const uint2569YaSeF = await FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintiSSA4Nb, {from: accounts[4]});
		const uint256sQ9TJsM = await FrogDAOGovernanceRewardsXggotHT.withdraw.call(uintVzRSjZC, {from: accounts[3]});
		const uint256JkPE715 = await FrogDAOGovernanceRewardsXggotHT.withdraw.call(uintfqW4E2x, {from: accounts[3]});
		await FrogDAOGovernanceRewardsXggotHT.exit.call({from: accounts[0]});

		assert.equal(uint256ZTp4Qrf, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXggotHT.notifyRewardAmount.call(uintU6GKR0F, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshbtS6BP = accounts[4]
		const FrogDAOGovernanceRewardsXggotHT = await FrogDAOGovernanceRewards.new(addresshbtS6BP, {from: accounts[3]});
		const uintjwvYaxT = BigInt("208")
		const uintFYHIBwg = BigInt("1310")
		const uintBLaCYbf = BigInt("1218")
		const uint256ZTp4Qrf = await FrogDAOGovernanceRewardsXggotHT.rewardPerToken.call({from: accounts[4]});
		const uint256s5epimV = await FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintjwvYaxT, {from: accounts[0]});
		await FrogDAOGovernanceRewardsXggotHT.checkStart.call({from: accounts[4]});
		const uint2569YaSeF = await FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintFYHIBwg, {from: accounts[4]});
		const uint256sQ9TJsM = await FrogDAOGovernanceRewardsXggotHT.withdraw.call(uintBLaCYbf, {from: accounts[3]});
		await FrogDAOGovernanceRewardsXggotHT.exit.call({from: accounts[0]});

		assert.equal(uint256ZTp4Qrf, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintjwvYaxT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstPiHoSK = accounts[5]
		const FrogDAOGovernanceRewardsR8hOmi2 = await FrogDAOGovernanceRewards.new(addresstPiHoSK, {from: accounts[3]});
		const uint256v0X45p = await FrogDAOGovernanceRewardsR8hOmi2.devFundAvailable.call({from: accounts[5]});
		const uint256nYT5KMg = await FrogDAOGovernanceRewardsR8hOmi2.rewardPerToken.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsR8hOmi2.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256nYT5KMg, BigInt("0"))
		assert.equal(uint256v0X45p, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsR8hOmi2.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstw0fCXE = accounts[2]
		const FrogDAOGovernanceRewardstCqEsk0 = await FrogDAOGovernanceRewards.new(addresstw0fCXE, {from: accounts[2]});
		const uintOVsGthH = BigInt("1736")
		const uint256WnZr4vY = await FrogDAOGovernanceRewardstCqEsk0.rewardPerToken.call({from: accounts[1]});
		await FrogDAOGovernanceRewardstCqEsk0.exit.call({from: accounts[3]});
		const uint2566dhVvD = await FrogDAOGovernanceRewardstCqEsk0.stake.call(uintOVsGthH, {from: accounts[0]});

		assert.equal(uint256WnZr4vY, BigInt("0"))
		await expect(FrogDAOGovernanceRewardstCqEsk0.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHnVZTRT = accounts[4]
		const FrogDAOGovernanceRewards3FkR5X = await FrogDAOGovernanceRewards.new(addressHnVZTRT, {from: accounts[3]});
		const addressknj82o = accounts[0]
		const addressunlQPmm = accounts[5]
		const addressSsih8iW = await FrogDAOGovernanceRewards3FkR5X.transferDevAddr.call(addressknj82o, {from: accounts[3]});
		const addressMlzxF15 = await FrogDAOGovernanceRewards3FkR5X.updateReward.call(addressunlQPmm, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewards3FkR5X.transferDevAddr.call(addressknj82o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJu4KPQs = accounts[2]
		const FrogDAOGovernanceRewardstCqEsk0 = await FrogDAOGovernanceRewards.new(addressJu4KPQs, {from: accounts[2]});
		const uintRe23VR8 = BigInt("675")
		const uint256WnZr4vY = await FrogDAOGovernanceRewardstCqEsk0.rewardPerToken.call({from: accounts[1]});
		const uint256wlqWDX = await FrogDAOGovernanceRewardstCqEsk0.notifyRewardAmount.call(uintRe23VR8, {from: accounts[2]});

		assert.equal(uint256WnZr4vY, BigInt("0"))
		await expect(FrogDAOGovernanceRewardstCqEsk0.notifyRewardAmount.call(uintRe23VR8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressW1Rjjbd = accounts[4]
		const FrogDAOGovernanceRewardsXggotHT = await FrogDAOGovernanceRewards.new(addressW1Rjjbd, {from: accounts[3]});
		const uintTSPpn0 = BigInt("1310")
		const uintIOHVvAC = BigInt("1218")
		const uint256ZTp4Qrf = await FrogDAOGovernanceRewardsXggotHT.rewardPerToken.call({from: accounts[4]});
		const uint2569YaSeF = await FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintTSPpn0, {from: accounts[4]});
		const uint256sQ9TJsM = await FrogDAOGovernanceRewardsXggotHT.withdraw.call(uintIOHVvAC, {from: accounts[3]});
		await FrogDAOGovernanceRewardsXggotHT.exit.call({from: accounts[0]});

		assert.equal(uint256ZTp4Qrf, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXggotHT.withdrawDevFund.call(uintTSPpn0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})