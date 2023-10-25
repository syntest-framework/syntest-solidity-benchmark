const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingBrDjkWq = await SLTDStaking.new({from: accounts[1]});
		const addressDpkWZ2q = accounts[2]
		const addresslXOp1a = accounts[5]
//		await SLTDStakingBrDjkWq.onlyOwner.call({from: accounts[3]});
//		const uint256mDpYCGS = await SLTDStakingBrDjkWq.earned.call(addressDpkWZ2q, {from: accounts[4]});
//		const addressUVZ5q8a = await SLTDStakingBrDjkWq.updateReward.call(addresslXOp1a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingBrDjkWq.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiHBCaK2 = await SLTDStaking.new({from: accounts[4]});
		const uintuzg8WC5 = BigInt("1103")
		const boolbrHqpmG = await SLTDStakingiHBCaK2.isOwner.call({from: accounts[1]});
//		const uint256OBpOL4H = await SLTDStakingiHBCaK2.withdraw.call(uintuzg8WC5, {from: accounts[0]});
//		const uint256JYYOsBZ = await SLTDStakingiHBCaK2.totalSupply.call({from: accounts[5]});
//		await SLTDStakingiHBCaK2.getReward.call({from: accounts[1]});

		assert.equal(boolbrHqpmG, false)
		await expect(SLTDStakingiHBCaK2.withdraw.call(uintuzg8WC5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingYGvXAbb = await SLTDStaking.new({from: accounts[0]});
		const addressWrXAwWx = accounts[0]
		const uint256ueA2yVq = await SLTDStakingYGvXAbb.totalSupply.call({from: accounts[0]});
//		const addresspunP7Ol = await SLTDStakingYGvXAbb.setRewardDistribution.call(addressWrXAwWx, {from: accounts[1]});
//		await SLTDStakingYGvXAbb.onlyRewardDistribution.call({from: accounts[4]});

		assert.equal(uint256ueA2yVq, BigInt("0"))
		await expect(SLTDStakingYGvXAbb.setRewardDistribution.call(addressWrXAwWx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingW8Wizjd = await SLTDStaking.new({from: accounts[0]});
		const uintyRHrNf = BigInt("1588")
//		const uint256UL5NJMe = await SLTDStakingW8Wizjd.stake.call(uintyRHrNf, {from: accounts[3]});
//		const uint256SBGkohu = await SLTDStakingW8Wizjd.totalSupply.call({from: accounts[0]});
//		await SLTDStakingW8Wizjd.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDStakingW8Wizjd.stake.call(uintyRHrNf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqxtrOw = await SLTDStaking.new({from: accounts[1]});
		const addressOdo5hP2 = accounts[3]
//		await SLTDStakingqxtrOw.exit.call({from: accounts[4]});
//		const addressAuOG7Jp = await SLTDStakingqxtrOw.transferOwnership.call(addressOdo5hP2, {from: accounts[4]});
//		await SLTDStakingqxtrOw.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingqxtrOw.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxUce0ql = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteBW94QJ = BigInt("746")
		const addressfLb0xKy = accounts[1]
		await SLTDStakingxUce0ql.getReward.call({from: accounts[1]});
		const uint256oh2WBSS = await SLTDStakingxUce0ql.withdraw.call(uinteBW94QJ, {from: accounts[1]});
		const addressT089ytl = await SLTDStakingxUce0ql.updateReward.call(addressfLb0xKy, {from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingW8Wizjd = await SLTDStaking.new({from: accounts[0]});
		const uintzNke2Ib = BigInt("1588")
//		await SLTDStakingW8Wizjd.getReward.call({from: accounts[4]});
//		const uint256UL5NJMe = await SLTDStakingW8Wizjd.stake.call(uintzNke2Ib, {from: accounts[3]});
//		const uint256SBGkohu = await SLTDStakingW8Wizjd.totalSupply.call({from: accounts[0]});
//		await SLTDStakingW8Wizjd.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDStakingW8Wizjd.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAecDESi = await SLTDStaking.new({from: accounts[4]});
		const addressrslzd4 = accounts[5]
		const addressKpQhoZo = accounts[4]
		const uintwHM75jr = BigInt("881")
//		await SLTDStakingAecDESi.getReward.call({from: accounts[0]});
//		const addressDtJ6AF1 = await SLTDStakingAecDESi.setSLTD.call(addressKpQhoZo, addressrslzd4, {from: accounts[5]});
//		const uint256cic3Elq = await SLTDStakingAecDESi.stake.call(uintwHM75jr, {from: accounts[0]});

		await expect(SLTDStakingAecDESi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAecDESi = await SLTDStaking.new({from: accounts[4]});
//		await SLTDStakingAecDESi.renounceOwnership.call({from: accounts[4]});
//		await SLTDStakingAecDESi.getReward.call({from: accounts[0]});

		await expect(SLTDStakingAecDESi.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAecDESi = await SLTDStaking.new({from: accounts[4]});
		const addressZN5f90y = "0x0000000000000000000000000000000000000001"
		const addressubRbPh8 = accounts[2]
//		await SLTDStakingAecDESi.getReward.call({from: accounts[0]});
//		const addressprf6TL = await SLTDStakingAecDESi.setRewardDistribution.call(addressZN5f90y, {from: accounts[4]});
//		const uint256toxkZAa = await SLTDStakingAecDESi.balanceOf.call(addressubRbPh8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingAecDESi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAecDESi = await SLTDStaking.new({from: accounts[4]});
		const addressqprc0Qc = accounts[3]
//		await SLTDStakingAecDESi.getReward.call({from: accounts[0]});
//		const addressvqS7cDx = await SLTDStakingAecDESi.owner.call({from: accounts[4]});
//		const uint256ClbiCYx = await SLTDStakingAecDESi.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256toxkZAa = await SLTDStakingAecDESi.balanceOf.call(addressqprc0Qc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingAecDESi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAecDESi = await SLTDStaking.new({from: accounts[4]});
		const addressw8wZpin = accounts[2]
		const addressbSKxV6A = accounts[0]
//		await SLTDStakingAecDESi.getReward.call({from: accounts[0]});
//		const uint256toxkZAa = await SLTDStakingAecDESi.balanceOf.call(addressw8wZpin, {from: "0x0000000000000000000000000000000000000001"});
//		const addresslDAYEiF = await SLTDStakingAecDESi.transferOwnership.call(addressbSKxV6A, {from: accounts[4]});

		await expect(SLTDStakingAecDESi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})