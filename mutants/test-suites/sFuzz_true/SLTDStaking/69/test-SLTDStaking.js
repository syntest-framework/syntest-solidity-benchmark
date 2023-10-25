const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingaq4qBgJ = await SLTDStaking.new({from: accounts[1]});
		const addressNdK1I7I = accounts[2]
		const addressSJ3Fye1 = accounts[4]
		const uintocbNJLV = BigInt("1330")
		const uintYixo65U = BigInt("252")
		const uint256oAezJAm = await SLTDStakingaq4qBgJ.balanceOf.call(addressNdK1I7I, {from: accounts[0]});
		const boolAlNagDd = await SLTDStakingaq4qBgJ.isOwner.call({from: accounts[5]});
		const uint256xAbqzoi = await SLTDStakingaq4qBgJ.balanceOf.call(addressSJ3Fye1, {from: accounts[3]});
//		const uint256gKkf7hQ = await SLTDStakingaq4qBgJ.stake.call(uintocbNJLV, {from: accounts[0]});
//		const uint256zEqVK1m = await SLTDStakingaq4qBgJ.withdraw.call(uintYixo65U, {from: accounts[2]});

		assert.equal(boolAlNagDd, false)
		assert.equal(uint256oAezJAm, BigInt("0"))
		assert.equal(uint256xAbqzoi, BigInt("0"))
		await expect(SLTDStakingaq4qBgJ.stake.call(uintocbNJLV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAS2dNl0 = await SLTDStaking.new({from: accounts[0]});
		const address8oGO0S = accounts[4]
		const uintPR8NNWs = BigInt("1540")
		const uintGbVoqsY = BigInt("1803")
		const addressX5rOhw3 = accounts[2]
		const addressnyBXR4u = accounts[0]
		const uintu8o2zzk = BigInt("96")
//		const addressT7UgWXo = await SLTDStakingAS2dNl0.setRewardDistribution.call(address8oGO0S, {from: accounts[2]});
//		const uint256pALoLfH = await SLTDStakingAS2dNl0.withdraw.call(uintPR8NNWs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256P1VgjGd = await SLTDStakingAS2dNl0.stake.call(uintGbVoqsY, {from: accounts[0]});
//		const addresspV5A4VD = await SLTDStakingAS2dNl0.setSLTD.call(addressnyBXR4u, addressX5rOhw3, {from: accounts[1]});
//		const uint256X69I6Mp = await SLTDStakingAS2dNl0.withdraw.call(uintu8o2zzk, {from: accounts[1]});

		await expect(SLTDStakingAS2dNl0.setRewardDistribution.call(address8oGO0S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqo3khbc = await SLTDStaking.new({from: accounts[4]});
		const addressqItyOL7 = accounts[2]
//		await SLTDStakingqo3khbc.onlyOwner.call({from: accounts[4]});
//		const addresselqTPTq = await SLTDStakingqo3khbc.setRewardDistribution.call(addressqItyOL7, {from: accounts[0]});
//		await SLTDStakingqo3khbc.onlyRewardDistribution.call({from: accounts[1]});

		await expect(SLTDStakingqo3khbc.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQb0hzxi = await SLTDStaking.new({from: accounts[3]});
		const addressZfwjHc9 = "0x0000000000000000000000000000000000000001"
//		await SLTDStakingQb0hzxi.exit.call({from: accounts[3]});
//		await SLTDStakingQb0hzxi.onlyOwner.call({from: accounts[4]});
//		await SLTDStakingQb0hzxi.getReward.call({from: accounts[1]});
//		const uint256xBCqM15 = await SLTDStakingQb0hzxi.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256MXXYSyd = await SLTDStakingQb0hzxi.balanceOf.call(addressZfwjHc9, {from: accounts[4]});

		await expect(SLTDStakingQb0hzxi.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingEh2qYDJ = await SLTDStaking.new({from: accounts[0]});
		const addressSGC5zIB = accounts[5]
		const uintRxvTltU = BigInt("1337")
		const uintvs7mdb = BigInt("1782")
		const addresswtyZwU3 = await SLTDStakingEh2qYDJ.setRewardDistribution.call(addressSGC5zIB, {from: accounts[0]});
//		const uint256sbMvPN = await SLTDStakingEh2qYDJ.withdraw.call(uintRxvTltU, {from: accounts[1]});
//		await SLTDStakingEh2qYDJ.exit.call({from: accounts[4]});
//		await SLTDStakingEh2qYDJ.getReward.call({from: accounts[4]});
//		const uint256mNBjeBU = await SLTDStakingEh2qYDJ.notifyRewardAmount.call(uintvs7mdb, {from: accounts[1]});

		await expect(SLTDStakingEh2qYDJ.withdraw.call(uintRxvTltU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingENBltHK = await SLTDStaking.new({from: accounts[2]});
		const uintQB4496 = BigInt("1611")
		const addressM2OyQzY = accounts[2]
//		const uint256b6ofGNl = await SLTDStakingENBltHK.notifyRewardAmount.call(uintQB4496, {from: accounts[2]});
//		const addressoLsfmw = await SLTDStakingENBltHK.setRewardDistribution.call(addressM2OyQzY, {from: accounts[4]});
//		await SLTDStakingENBltHK.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDStakingENBltHK.notifyRewardAmount.call(uintQB4496, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTm78YHT = await SLTDStaking.new({from: accounts[3]});
		const addressJFe73a8 = accounts[4]
		const addressctFWz9T = accounts[1]
//		await SLTDStakingTm78YHT.getReward.call({from: accounts[3]});
//		const addressueK3Q4Z = await SLTDStakingTm78YHT.setSLTD.call(addressctFWz9T, addressJFe73a8, {from: accounts[0]});

		await expect(SLTDStakingTm78YHT.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTm78YHT = await SLTDStaking.new({from: accounts[3]});
		const addressGHdJQEe = accounts[0]
		const addressb0cZKoz = await SLTDStakingTm78YHT.owner.call({from: accounts[2]});
//		await SLTDStakingTm78YHT.getReward.call({from: accounts[3]});
//		const addressvXxWDLl = await SLTDStakingTm78YHT.setRewardDistribution.call(addressGHdJQEe, {from: accounts[1]});

		assert.equal(addressb0cZKoz, 0x88c4f876bAC45EcCF25c54C7e711237E752D06ff)
		await expect(SLTDStakingTm78YHT.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingEdX5v5i = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZCL51We = BigInt("501")
		const addressMkGu9L0 = "0x0000000000000000000000000000000000000001"
		const addressphVGerf = accounts[3]
		const uint256TVKxlq = await SLTDStakingEdX5v5i.stake.call(uintZCL51We, {from: accounts[5]});
		const uint256FNKkrae = await SLTDStakingEdX5v5i.rewardPerToken.call({from: accounts[1]});
		const uint256Of9m9mo = await SLTDStakingEdX5v5i.balanceOf.call(addressMkGu9L0, {from: accounts[2]});
		const addressurviFjI = await SLTDStakingEdX5v5i.transferOwnership.call(addressphVGerf, {from: accounts[5]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTm78YHT = await SLTDStaking.new({from: accounts[3]});
		const addressa7lWJZv = "0x0000000000000000000000000000000000000001"
//		await SLTDStakingTm78YHT.getReward.call({from: accounts[3]});
//		const addressgYAeCoK = await SLTDStakingTm78YHT.transferOwnership.call(addressa7lWJZv, {from: accounts[3]});

		await expect(SLTDStakingTm78YHT.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTm78YHT = await SLTDStaking.new({from: accounts[3]});
//		await SLTDStakingTm78YHT.getReward.call({from: accounts[3]});
//		await SLTDStakingTm78YHT.renounceOwnership.call({from: accounts[3]});
//		await SLTDStakingTm78YHT.onlyRewardDistribution.call({from: accounts[2]});
//		await SLTDStakingTm78YHT.exit.call({from: accounts[3]});

		await expect(SLTDStakingTm78YHT.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})