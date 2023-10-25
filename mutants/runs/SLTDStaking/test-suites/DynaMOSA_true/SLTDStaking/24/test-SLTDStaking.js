const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingQ6u9Imm = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uint6Mv07D = BigInt("1717")
		const addresskO2y19b = accounts[4]
		const addresst6hki3c = accounts[4]
		const uintUbGdYS0 = BigInt("1986")
		const addresst4K0fFG = accounts[2]
		const uint256UFgYwXV = await SLTDStakingQ6u9Imm.stake.call(uint6Mv07D, {from: accounts[0]});
		const uint256mF5y4Fd = await SLTDStakingQ6u9Imm.earned.call(addresskO2y19b, {from: accounts[4]});
		const addressSAYfOaB = await SLTDStakingQ6u9Imm.setRewardDistribution.call(addresst6hki3c, {from: accounts[1]});
		const uint256KcKAv9S = await SLTDStakingQ6u9Imm.stake.call(uintUbGdYS0, {from: accounts[1]});
		const addressHgIp10L = await SLTDStakingQ6u9Imm.transferOwnership.call(addresst4K0fFG, {from: accounts[4]});
		const uint256NMNAZ1 = await SLTDStakingQ6u9Imm.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWny3vTu = await SLTDStaking.new({from: accounts[2]});
		const uintfeSNKp = BigInt("1426")
		const addressKy0odpY = accounts[2]
		const addressuCEzDHH = accounts[1]
		const addressAyGJTvF = accounts[1]
		const uint256WBUN4le = await SLTDStakingWny3vTu.stake.call(uintfeSNKp, {from: "0x0000000000000000000000000000000000000001"});
		const addressuP5SJtl = await SLTDStakingWny3vTu.updateReward.call(addressKy0odpY, {from: "0x0000000000000000000000000000000000000001"});
		const address1W2aCy = await SLTDStakingWny3vTu.setSLTD.call(addressAyGJTvF, addressuCEzDHH, {from: accounts[3]});
		const uint256m4aW0t4 = await SLTDStakingWny3vTu.rewardPerToken.call({from: accounts[5]});
		const uint256rc9LKhX = await SLTDStakingWny3vTu.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(SLTDStakingWny3vTu.stake.call(uintfeSNKp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingtiTl1Wt = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]});
		await SLTDStakingtiTl1Wt.onlyOwner.call({from: accounts[4]});

		await expect(SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzWCwTXo = await SLTDStaking.new({from: accounts[3]});
		const uintcL6eHm = BigInt("394")
		const addressXkmxE2j = "0x0000000000000000000000000000000000000001"
		const addressKtPvFsh = accounts[3]
		const uint256YvyGNsP = await SLTDStakingzWCwTXo.withdraw.call(uintcL6eHm, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingzWCwTXo.renounceOwnership.call({from: accounts[0]});
		const addressWvhAqp9 = await SLTDStakingzWCwTXo.transferOwnership.call(addressXkmxE2j, {from: accounts[1]});
		const addressGdhSKZ5 = await SLTDStakingzWCwTXo.transferOwnership.call(addressKtPvFsh, {from: accounts[4]});

		await expect(SLTDStakingzWCwTXo.withdraw.call(uintcL6eHm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingJlUbBcu = await SLTDStaking.new({from: accounts[3]});
		const uintlyBm0mK = BigInt("780")
		const uintMYANNMn = BigInt("1856")
		const uintpfnO6XN = BigInt("1398")
		const uint256HG6y9t1 = await SLTDStakingJlUbBcu.notifyRewardAmount.call(uintlyBm0mK, {from: accounts[4]});
		const uint256ure93nY = await SLTDStakingJlUbBcu.rewardPerToken.call({from: accounts[2]});
		await SLTDStakingJlUbBcu.renounceOwnership.call({from: accounts[5]});
		const uint256Dmi0fUB = await SLTDStakingJlUbBcu.stake.call(uintMYANNMn, {from: accounts[1]});
		const uint256pUISefG = await SLTDStakingJlUbBcu.stake.call(uintpfnO6XN, {from: accounts[4]});
		const uint256daFOxCo = await SLTDStakingJlUbBcu.rewardPerToken.call({from: accounts[3]});

		await expect(SLTDStakingJlUbBcu.notifyRewardAmount.call(uintlyBm0mK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOzkSCeF = await SLTDStaking.new({from: accounts[2]});
		const addressWjgzd6U = accounts[1]
		const addressBQsiUg7 = accounts[0]
		const uint256U0OD582 = await SLTDStakingOzkSCeF.earned.call(addressWjgzd6U, {from: accounts[4]});
		await SLTDStakingOzkSCeF.getReward.call({from: accounts[5]});
		const uint256RKHkkh = await SLTDStakingOzkSCeF.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressxCRhL5 = await SLTDStakingOzkSCeF.transferOwnership.call(addressBQsiUg7, {from: accounts[3]});

		assert.equal(uint256U0OD582, BigInt("0"))
		await expect(SLTDStakingOzkSCeF.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOzkSCeF = await SLTDStaking.new({from: accounts[2]});
		const addressLiM70m = accounts[1]
		const uinttqGe4Ug = BigInt("563")
		const addressssevO3L = accounts[0]
		const uint256U0OD582 = await SLTDStakingOzkSCeF.earned.call(addressLiM70m, {from: accounts[4]});
		await SLTDStakingOzkSCeF.getReward.call({from: accounts[1]});
		const addresskkvIse5 = await SLTDStakingOzkSCeF.owner.call({from: accounts[3]});
		await SLTDStakingOzkSCeF.getReward.call({from: accounts[5]});
		const uint256cIX2yd9 = await SLTDStakingOzkSCeF.stake.call(uinttqGe4Ug, {from: accounts[1]});
		const uint256RKHkkh = await SLTDStakingOzkSCeF.lastTimeRewardApplicable.call({from: accounts[5]});
		await SLTDStakingOzkSCeF.renounceOwnership.call({from: accounts[0]});
		const addressxCRhL5 = await SLTDStakingOzkSCeF.transferOwnership.call(addressssevO3L, {from: accounts[3]});

		assert.equal(uint256U0OD582, BigInt("0"))
		await expect(SLTDStakingOzkSCeF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOzkSCeF = await SLTDStaking.new({from: accounts[2]});
		const addressi4fNFvo = accounts[1]
		const uintbb6F0xE = BigInt("563")
		const addressCQSehsg = accounts[0]
		const uint256U0OD582 = await SLTDStakingOzkSCeF.earned.call(addressi4fNFvo, {from: accounts[4]});
		await SLTDStakingOzkSCeF.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingOzkSCeF.getReward.call({from: accounts[5]});
		const uint256cIX2yd9 = await SLTDStakingOzkSCeF.stake.call(uintbb6F0xE, {from: accounts[1]});
		const uint256RKHkkh = await SLTDStakingOzkSCeF.lastTimeRewardApplicable.call({from: accounts[5]});
		await SLTDStakingOzkSCeF.onlyRewardDistribution.call({from: accounts[0]});
		const addressxCRhL5 = await SLTDStakingOzkSCeF.transferOwnership.call(addressCQSehsg, {from: accounts[3]});

		assert.equal(uint256U0OD582, BigInt("0"))
		await expect(SLTDStakingOzkSCeF.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingtiTl1Wt = await SLTDStaking.new({from: accounts[2]});
		const addressYVWxbnf = accounts[2]
		await SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]});
		const addressy5KbiTv = await SLTDStakingtiTl1Wt.transferOwnership.call(addressYVWxbnf, {from: accounts[2]});

		await expect(SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingtiTl1Wt = await SLTDStaking.new({from: accounts[2]});
		const addressYo84HFf = accounts[0]
		const addressBzzMiW = accounts[4]
		await SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]});
		await SLTDStakingtiTl1Wt.renounceOwnership.call({from: accounts[2]});
		const addressBnAsYjb = await SLTDStakingtiTl1Wt.setSLTD.call(addressBzzMiW, addressYo84HFf, {from: accounts[5]});
		await SLTDStakingtiTl1Wt.onlyOwner.call({from: accounts[4]});
		await SLTDStakingtiTl1Wt.renounceOwnership.call({from: accounts[5]});
		await SLTDStakingtiTl1Wt.exit.call({from: accounts[1]});

		await expect(SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingtiTl1Wt = await SLTDStaking.new({from: accounts[2]});
		const addressJ9nktuu = accounts[3]
		const addressPJHzuCM = "0x0000000000000000000000000000000000000001"
		await SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]});
		const uint256pUHUqCz = await SLTDStakingtiTl1Wt.earned.call(addressJ9nktuu, {from: accounts[3]});
		const addressWe58c31 = await SLTDStakingtiTl1Wt.setRewardDistribution.call(addressPJHzuCM, {from: accounts[2]});

		await expect(SLTDStakingtiTl1Wt.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})