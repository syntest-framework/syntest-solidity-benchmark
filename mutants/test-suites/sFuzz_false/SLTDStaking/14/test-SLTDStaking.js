const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingRLkqDiK = await SLTDStaking.new({from: accounts[5]});
		const addressStmJkt = accounts[3]
		const uint256nVgWvzU = await SLTDStakingRLkqDiK.lastTimeRewardApplicable.call({from: accounts[0]});
//		await SLTDStakingRLkqDiK.getReward.call({from: accounts[0]});
//		const addressyOM3Oax = await SLTDStakingRLkqDiK.updateReward.call(addressStmJkt, {from: accounts[4]});

		assert.equal(uint256nVgWvzU, BigInt("0"))
		await expect(SLTDStakingRLkqDiK.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaXupAnL = await SLTDStaking.new({from: accounts[1]});
		const uintBhO9AjD = BigInt("102")
//		const uint256KzxigT0 = await SLTDStakingaXupAnL.stake.call(uintBhO9AjD, {from: accounts[4]});
//		const boolCrPRya = await SLTDStakingaXupAnL.isOwner.call({from: accounts[3]});
//		const uint256M9wFQyT = await SLTDStakingaXupAnL.totalSupply.call({from: accounts[2]});
//		await SLTDStakingaXupAnL.onlyOwner.call({from: accounts[3]});
//		await SLTDStakingaXupAnL.exit.call({from: accounts[3]});

		await expect(SLTDStakingaXupAnL.stake.call(uintBhO9AjD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxDVQkG6 = await SLTDStaking.new({from: accounts[3]});
		const uintpRxR7ud = BigInt("1428")
		const uintIkKUS9g = BigInt("1609")
		const uint256Ix6ArFr = await SLTDStakingxDVQkG6.rewardPerToken.call({from: accounts[3]});
//		const uint256dvlZpKF = await SLTDStakingxDVQkG6.notifyRewardAmount.call(uintpRxR7ud, {from: accounts[1]});
//		const uint256kiJ0qWy = await SLTDStakingxDVQkG6.notifyRewardAmount.call(uintIkKUS9g, {from: accounts[3]});

		assert.equal(uint256Ix6ArFr, BigInt("0"))
		await expect(SLTDStakingxDVQkG6.notifyRewardAmount.call(uintpRxR7ud, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking0X7DK0 = await SLTDStaking.new({from: accounts[0]});
		const uintEf8a9dj = BigInt("299")
		const uintQJsd612 = BigInt("491")
		const addressa4WCC9L = accounts[1]
//		const uint256t5ij4uf = await SLTDStaking0X7DK0.withdraw.call(uintEf8a9dj, {from: accounts[3]});
//		const uint256de2nBvW = await SLTDStaking0X7DK0.stake.call(uintQJsd612, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDStaking0X7DK0.onlyRewardDistribution.call({from: accounts[3]});
//		const addressN2uOzi7 = await SLTDStaking0X7DK0.transferOwnership.call(addressa4WCC9L, {from: accounts[3]});
//		const uint256Hw6jnGg = await SLTDStaking0X7DK0.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(SLTDStaking0X7DK0.withdraw.call(uintEf8a9dj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyHLGqXO = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthe5g0jo = BigInt("1941")
		const addresssSipkZ = accounts[1]
		const uint256bd0WjWP = await SLTDStakingyHLGqXO.lastTimeRewardApplicable.call({from: accounts[1]});
		await SLTDStakingyHLGqXO.renounceOwnership.call({from: accounts[2]});
		const uint256JmP3H7b = await SLTDStakingyHLGqXO.withdraw.call(uinthe5g0jo, {from: accounts[0]});
		const uint256lAW3PzK = await SLTDStakingyHLGqXO.earned.call(addresssSipkZ, {from: accounts[5]});
		const booluk86TKh = await SLTDStakingyHLGqXO.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking6WUwiQ = await SLTDStaking.new({from: accounts[4]});
		const uintgnEAqih = BigInt("1792")
		const uint256gwpet4s = await SLTDStaking6WUwiQ.totalSupply.call({from: accounts[4]});
//		await SLTDStaking6WUwiQ.exit.call({from: accounts[3]});
//		const uint256vEAqrio = await SLTDStaking6WUwiQ.withdraw.call(uintgnEAqih, {from: accounts[0]});
//		const uint256ahMPfSM = await SLTDStaking6WUwiQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256gwpet4s, BigInt("0"))
		await expect(SLTDStaking6WUwiQ.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking6WUwiQ = await SLTDStaking.new({from: accounts[4]});
		const addressJwNYgd = accounts[0]
		const uint256ahMPfSM = await SLTDStaking6WUwiQ.rewardPerToken.call({from: accounts[3]});
//		const address4Uul89 = await SLTDStaking6WUwiQ.setRewardDistribution.call(addressJwNYgd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ahMPfSM, BigInt("0"))
		await expect(SLTDStaking6WUwiQ.setRewardDistribution.call(addressJwNYgd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking6WUwiQ = await SLTDStaking.new({from: accounts[4]});
		const addressndHLCZF = await SLTDStaking6WUwiQ.owner.call({from: accounts[0]});
//		await SLTDStaking6WUwiQ.getReward.call({from: accounts[1]});

		assert.equal(addressndHLCZF, 0xf023183E6bF8E9c2eB47dB30aA777f2D4784f457)
		await expect(SLTDStaking6WUwiQ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking6WUwiQ = await SLTDStaking.new({from: accounts[4]});
		const uintuCPzGe5 = BigInt("1634")
//		await SLTDStaking6WUwiQ.renounceOwnership.call({from: accounts[4]});
//		const uint256q5HtaMR = await SLTDStaking6WUwiQ.notifyRewardAmount.call(uintuCPzGe5, {from: accounts[2]});
//		const uint256gwpet4s = await SLTDStaking6WUwiQ.totalSupply.call({from: accounts[4]});

		await expect(SLTDStaking6WUwiQ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking6WUwiQ = await SLTDStaking.new({from: accounts[4]});
		const addressE4UDfUJ = accounts[3]
		const uintb5QLqYJ = BigInt("917")
//		await SLTDStaking6WUwiQ.getReward.call({from: accounts[1]});
//		const addressoeaI0gA = await SLTDStaking6WUwiQ.setRewardDistribution.call(addressE4UDfUJ, {from: accounts[4]});
//		const uint256IhWsjJ = await SLTDStaking6WUwiQ.notifyRewardAmount.call(uintb5QLqYJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStaking6WUwiQ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking6WUwiQ = await SLTDStaking.new({from: accounts[4]});
		const addresscWXBFLS = accounts[0]
		const addressJVT79Xa = await SLTDStaking6WUwiQ.transferOwnership.call(addresscWXBFLS, {from: accounts[4]});
//		await SLTDStaking6WUwiQ.getReward.call({from: accounts[1]});

		await expect(SLTDStaking6WUwiQ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})