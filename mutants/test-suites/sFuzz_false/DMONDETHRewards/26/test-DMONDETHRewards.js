const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfPHKqBP = await DMONDETHRewards.new({from: accounts[5]});
		const uintQiuDLTn = BigInt("471")
		const addressGPA00w = accounts[0]
//		await DMONDETHRewardsfPHKqBP.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256NFu1uYZ = await DMONDETHRewardsfPHKqBP.stake.call(uintQiuDLTn, {from: accounts[5]});
//		const addressrpAJyth = await DMONDETHRewardsfPHKqBP.updateReward.call(addressGPA00w, {from: accounts[4]});

		await expect(DMONDETHRewardsfPHKqBP.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsGgJguYv = await DMONDETHRewards.new({from: accounts[2]});
		const addressqCKNgAk = accounts[5]
		const addressQbWLW3q = "0x0000000000000000000000000000000000000001"
		const uint256tJVWig7 = await DMONDETHRewardsGgJguYv.balanceOf.call(addressqCKNgAk, {from: accounts[4]});
//		const addressRjYfnuo = await DMONDETHRewardsGgJguYv.transferOwnership.call(addressQbWLW3q, {from: accounts[4]});
//		const uint256Vylmd4K = await DMONDETHRewardsGgJguYv.remainingReward.call({from: accounts[5]});
//		await DMONDETHRewardsGgJguYv.renounceOwnership.call({from: accounts[0]});
//		await DMONDETHRewardsGgJguYv.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256tJVWig7, BigInt("0"))
		await expect(DMONDETHRewardsGgJguYv.transferOwnership.call(addressQbWLW3q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMRVrAp0 = await DMONDETHRewards.new({from: accounts[4]});
//		await DMONDETHRewardsMRVrAp0.getReward.call({from: accounts[0]});
//		const uint256CJxzXzx = await DMONDETHRewardsMRVrAp0.totalSupply.call({from: accounts[3]});
//		const uint256EVBVwCO = await DMONDETHRewardsMRVrAp0.totalSupply.call({from: accounts[0]});
//		const uint256FZWfxF = await DMONDETHRewardsMRVrAp0.lastTimeRewardApplicable.call({from: accounts[3]});
//		await DMONDETHRewardsMRVrAp0.onlyOwner.call({from: accounts[4]});

		await expect(DMONDETHRewardsMRVrAp0.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQYT7KD = await DMONDETHRewards.new({from: accounts[4]});
		const uintJ3waHCb = BigInt("244")
//		const uint256SmN0hRl = await DMONDETHRewardsQYT7KD.stake.call(uintJ3waHCb, {from: accounts[2]});
//		await DMONDETHRewardsQYT7KD.exit.call({from: accounts[4]});
//		const uint256YaNZHNz = await DMONDETHRewardsQYT7KD.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsQYT7KD.onlyRewardDistribution.call({from: accounts[2]});
//		const boolI9Sh7Dt = await DMONDETHRewardsQYT7KD.isOwner.call({from: accounts[3]});

		await expect(DMONDETHRewardsQYT7KD.stake.call(uintJ3waHCb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDWYWRL = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNFsFarU = accounts[3]
		const addressHTSmpVQ = accounts[2]
		const addressyrIBpTj = accounts[4]
		const addressQi0vOGd = await DMONDETHRewardsDWYWRL.setRewardDistribution.call(addressNFsFarU, {from: accounts[0]});
		const uint256jXXfTuz = await DMONDETHRewardsDWYWRL.earned.call(addressHTSmpVQ, {from: accounts[2]});
		const uint256KqYb6R = await DMONDETHRewardsDWYWRL.balanceOf.call(addressyrIBpTj, {from: accounts[3]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsHHah3Nf = await DMONDETHRewards.new({from: accounts[4]});
		const addresslQbKcq7 = "0x0000000000000000000000000000000000000001"
		const uintwn3oOvW = BigInt("1463")
		const addresseg1CXQ = accounts[2]
//		await DMONDETHRewardsHHah3Nf.exit.call({from: accounts[0]});
//		await DMONDETHRewardsHHah3Nf.onlyOwner.call({from: accounts[4]});
//		const addressbpFCoGn = await DMONDETHRewardsHHah3Nf.setStakeAddress.call(addresslQbKcq7, {from: accounts[3]});
//		const uint256UeeO9HW = await DMONDETHRewardsHHah3Nf.stake.call(uintwn3oOvW, {from: accounts[3]});
//		const addressNbvlEgE = await DMONDETHRewardsHHah3Nf.setRewardDistribution.call(addresseg1CXQ, {from: accounts[1]});

		await expect(DMONDETHRewardsHHah3Nf.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCjLzia = await DMONDETHRewards.new({from: accounts[4]});
		const uintHXxCS5f = BigInt("1533")
//		const uint256qIjx8eT = await DMONDETHRewardsCjLzia.remainingReward.call({from: accounts[1]});
//		await DMONDETHRewardsCjLzia.checkStart.call({from: accounts[5]});
//		await DMONDETHRewardsCjLzia.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256bSWMgZa = await DMONDETHRewardsCjLzia.stake.call(uintHXxCS5f, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsCjLzia.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTna2x9J = await DMONDETHRewards.new({from: accounts[4]});
		const uintiM5gRl = BigInt("1923")
//		const uint256kXElSKG = await DMONDETHRewardsTna2x9J.withdraw.call(uintiM5gRl, {from: accounts[3]});
//		await DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]});
//		await DMONDETHRewardsTna2x9J.onlyOwner.call({from: accounts[5]});

		await expect(DMONDETHRewardsTna2x9J.withdraw.call(uintiM5gRl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTna2x9J = await DMONDETHRewards.new({from: accounts[4]});
		const uinthOnBtv5 = BigInt("1939")
		const addressfziqnpw = accounts[1]
		const addressClI3qNX = await DMONDETHRewardsTna2x9J.owner.call({from: accounts[4]});
//		const uint256kXElSKG = await DMONDETHRewardsTna2x9J.withdraw.call(uinthOnBtv5, {from: accounts[3]});
//		await DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]});
//		const addressNYai0FN = await DMONDETHRewardsTna2x9J.transferOwnership.call(addressfziqnpw, {from: accounts[4]});

		assert.equal(addressClI3qNX, 0x6bDf3adC9e0B085Fb4Da54ACe3AF349a4Dd7911F)
		await expect(DMONDETHRewardsTna2x9J.withdraw.call(uinthOnBtv5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfPHKqBP = await DMONDETHRewards.new({from: accounts[5]});
		const uintbvKPqFJ = BigInt("1346")
//		const uint256V5LnQUo = await DMONDETHRewardsfPHKqBP.notifyRewardAmount.call(uintbvKPqFJ, {from: accounts[4]});
//		await DMONDETHRewardsfPHKqBP.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsfPHKqBP.notifyRewardAmount.call(uintbvKPqFJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfPHKqBP = await DMONDETHRewards.new({from: accounts[5]});
		const uintvkXdKTr = BigInt("1089")
//		await DMONDETHRewardsfPHKqBP.renounceOwnership.call({from: accounts[5]});
//		await DMONDETHRewardsfPHKqBP.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256hD97Ffj = await DMONDETHRewardsfPHKqBP.withdraw.call(uintvkXdKTr, {from: accounts[5]});

		await expect(DMONDETHRewardsfPHKqBP.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTna2x9J = await DMONDETHRewards.new({from: accounts[4]});
		const addressVizHEql = accounts[0]
		const uintC2rI9Xu = BigInt("1017")
		const uint256VKehk8d = await DMONDETHRewardsTna2x9J.balanceOf.call(addressVizHEql, {from: accounts[1]});
//		await DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]});
//		const uint256n1JB6em = await DMONDETHRewardsTna2x9J.notifyRewardAmount.call(uintC2rI9Xu, {from: accounts[4]});

		assert.equal(uint256VKehk8d, BigInt("0"))
		await expect(DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTna2x9J = await DMONDETHRewards.new({from: accounts[4]});
		const addressCtbzTOJ = accounts[0]
		const addressufco5T3 = accounts[2]
		const uint256WCs0afi = await DMONDETHRewardsTna2x9J.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressh1nkvnK = await DMONDETHRewardsTna2x9J.setStakeAddress.call(addressCtbzTOJ, {from: accounts[4]});
//		const addressJt4SdU2 = await DMONDETHRewardsTna2x9J.setStakeAddress.call(addressufco5T3, {from: accounts[2]});
//		await DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]});

		assert.equal(uint256WCs0afi, BigInt("0"))
		await expect(DMONDETHRewardsTna2x9J.setStakeAddress.call(addressufco5T3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsdh3Eq6a = await DMONDETHRewards.new({from: accounts[3]});
		const uintk2O9xsF = BigInt("267")
		const uintVqpvck5 = BigInt("382")
		const uint256rjGUFBQ = await DMONDETHRewardsdh3Eq6a.setStartTime.call(uintk2O9xsF, {from: accounts[3]});
//		await DMONDETHRewardsdh3Eq6a.exit.call({from: accounts[0]});
//		const uint256eyLWuQS = await DMONDETHRewardsdh3Eq6a.stake.call(uintVqpvck5, {from: accounts[3]});

		await expect(DMONDETHRewardsdh3Eq6a.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTna2x9J = await DMONDETHRewards.new({from: accounts[4]});
		const addressliXXiqO = accounts[3]
		const addresso5Avwuv = accounts[3]
//		await DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]});
//		const addressL6TIMOW = await DMONDETHRewardsTna2x9J.transferOwnership.call(addressliXXiqO, {from: accounts[4]});
//		const addressbSvUBkx = await DMONDETHRewardsTna2x9J.updateReward.call(addresso5Avwuv, {from: accounts[2]});

		await expect(DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTna2x9J = await DMONDETHRewards.new({from: accounts[4]});
		const addressABqBwzl = accounts[3]
		const addressM3Q2luj = await DMONDETHRewardsTna2x9J.setRewardDistribution.call(addressABqBwzl, {from: accounts[4]});
//		await DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]});
//		const uint256iqWqxjq = await DMONDETHRewardsTna2x9J.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsTna2x9J.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})