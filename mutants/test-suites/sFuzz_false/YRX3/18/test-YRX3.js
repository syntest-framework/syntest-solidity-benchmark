const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3Gt4CiNG = await YRX3.new({from: accounts[4]});
		const uint256IwhBDO = await YRX3Gt4CiNG.lastTimeRewardApplicable.call({from: accounts[0]});
//		await YRX3Gt4CiNG.onlyOwner.call({from: accounts[1]});
//		await YRX3Gt4CiNG.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256IwhBDO, BigInt("0"))
		await expect(YRX3Gt4CiNG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3c24t0gg = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXMs9Lkm = BigInt("99")
		const uintdokWdgd = BigInt("1878")
		const addresserGwxKd = accounts[0]
		const uint256uxBm41R = await YRX3c24t0gg.stake.call(uintXMs9Lkm, {from: accounts[0]});
		await YRX3c24t0gg.onlyRewardDistribution.call({from: accounts[0]});
		await YRX3c24t0gg.checkNextEpoch.call({from: accounts[0]});
		await YRX3c24t0gg.checkStart.call({from: accounts[3]});
		const uint256jR4g7CD = await YRX3c24t0gg.stake.call(uintdokWdgd, {from: accounts[5]});
		const addressneL64Q = await YRX3c24t0gg.updateReward.call(addresserGwxKd, {from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3m0Oy0dt = await YRX3.new({from: accounts[0]});
		const uintJwdubNs = BigInt("367")
		const addressqldIBoB = accounts[1]
//		await YRX3m0Oy0dt.notifyRewardAmount.call({from: accounts[0]});
//		await YRX3m0Oy0dt.checkNextEpoch.call({from: accounts[0]});
//		const uint2560Jp8bQ = await YRX3m0Oy0dt.stake.call(uintJwdubNs, {from: accounts[1]});
//		const addressXvUfBN1 = await YRX3m0Oy0dt.updateReward.call(addressqldIBoB, {from: accounts[3]});

		await expect(YRX3m0Oy0dt.notifyRewardAmount.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3g1c7JyW = await YRX3.new({from: accounts[4]});
		const uintno4B8cp = BigInt("1721")
		const uintlrP3Jgz = BigInt("1115")
		const uintFH9FZjt = BigInt("1069")
		const addresszWhnAhW = accounts[3]
//		const uint256zwnj7Wp = await YRX3g1c7JyW.stake.call(uintno4B8cp, {from: accounts[2]});
//		const uint256CkaSooW = await YRX3g1c7JyW.withdraw.call(uintlrP3Jgz, {from: accounts[1]});
//		const uint256pyPj6J = await YRX3g1c7JyW.withdraw.call(uintFH9FZjt, {from: accounts[3]});
//		const addressRZVDZyE = await YRX3g1c7JyW.transferOwnership.call(addresszWhnAhW, {from: accounts[2]});

		await expect(YRX3g1c7JyW.stake.call(uintno4B8cp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3HchHIYG = await YRX3.new({from: accounts[3]});
		const uintLELYrHn = BigInt("1716")
		const addressJNtCtV7 = accounts[5]
		const uintyQBY3kk = BigInt("1301")
//		const uint256yKzmga8 = await YRX3HchHIYG.withdraw.call(uintLELYrHn, {from: accounts[4]});
//		const addressIZtUHuB = await YRX3HchHIYG.setRewardDistribution.call(addressJNtCtV7, {from: accounts[1]});
//		const uint256Rx9V37d = await YRX3HchHIYG.withdraw.call(uintyQBY3kk, {from: accounts[0]});
//		const addressH5UXfjt = await YRX3HchHIYG.owner.call({from: accounts[4]});
//		const uint256EKBeYdb = await YRX3HchHIYG.rewardPerToken.call({from: accounts[0]});

		await expect(YRX3HchHIYG.withdraw.call(uintLELYrHn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OxM0yaF = await YRX3.new({from: accounts[4]});
		const addressWc4Q584 = accounts[3]
//		const addressEl0Tvjj = await YRX3OxM0yaF.setRewardDistribution.call(addressWc4Q584, {from: accounts[0]});

		await expect(YRX3OxM0yaF.setRewardDistribution.call(addressWc4Q584, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3g1c7JyW = await YRX3.new({from: accounts[4]});
		const addressFoV6PH8 = accounts[1]
		const uintY8J8JoC = BigInt("1397")
		const uint256Qdj8Kpz = await YRX3g1c7JyW.earned.call(addressFoV6PH8, {from: accounts[4]});
		const addressEFcvFj6 = await YRX3g1c7JyW.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zwnj7Wp = await YRX3g1c7JyW.stake.call(uintY8J8JoC, {from: accounts[2]});

		assert.equal(addressEFcvFj6, 0x607AFAF6A72cfDa55F7b4e2A6ff9d6b41B7C9218)
		assert.equal(uint256Qdj8Kpz, BigInt("0"))
		await expect(YRX3g1c7JyW.stake.call(uintY8J8JoC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3g1c7JyW = await YRX3.new({from: accounts[4]});
		const addressnOhhRvH = accounts[1]
		const uintdzCjlB9 = BigInt("1413")
//		await YRX3g1c7JyW.getReward.call({from: accounts[3]});
//		const addressgM83q7y = await YRX3g1c7JyW.setRewardDistribution.call(addressnOhhRvH, {from: accounts[1]});
//		const uint256zwnj7Wp = await YRX3g1c7JyW.stake.call(uintdzCjlB9, {from: accounts[2]});

		await expect(YRX3g1c7JyW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3iHEpIW2 = await YRX3.new({from: accounts[4]});
		const addressM4EZqAN = accounts[0]
//		await YRX3iHEpIW2.exit.call({from: accounts[4]});
//		const addressbCtkrj = await YRX3iHEpIW2.toPayable.call(addressM4EZqAN, {from: accounts[0]});
//		await YRX3iHEpIW2.checkNextEpoch.call({from: accounts[1]});

		await expect(YRX3iHEpIW2.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3g1c7JyW = await YRX3.new({from: accounts[4]});
		const addressgd4yMk = accounts[5]
		const addressAnNu57D = accounts[1]
		const uintuSu5Rpf = BigInt("1419")
		const addressLywDJF = await YRX3g1c7JyW.setRewardDistribution.call(addressgd4yMk, {from: accounts[4]});
//		await YRX3g1c7JyW.getReward.call({from: accounts[3]});
//		const uint256f4Okm1o = await YRX3g1c7JyW.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressPuD7ju3 = await YRX3g1c7JyW.toPayable.call(addressAnNu57D, {from: accounts[0]});
//		const uint256zwnj7Wp = await YRX3g1c7JyW.stake.call(uintuSu5Rpf, {from: accounts[2]});

		await expect(YRX3g1c7JyW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OxM0yaF = await YRX3.new({from: accounts[4]});
		const addressONE01nt = accounts[0]
		const addressQWhON8q = accounts[0]
		const addressWHiDrTR = accounts[4]
		const addresszupNaqf = await YRX3OxM0yaF.transferOwnership.call(addressONE01nt, {from: accounts[4]});
//		const addressp3No43E = await YRX3OxM0yaF.updateReward.call(addressQWhON8q, {from: accounts[1]});
//		const addressEl0Tvjj = await YRX3OxM0yaF.setRewardDistribution.call(addressWHiDrTR, {from: accounts[0]});
//		await YRX3OxM0yaF.getReward.call({from: accounts[2]});

		await expect(YRX3OxM0yaF.updateReward.call(addressQWhON8q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3eZUZkMn = await YRX3.new({from: accounts[3]});
		const uintIvVIxvU = BigInt("1398")
		const uintVkHEwN = BigInt("393")
//		await YRX3eZUZkMn.renounceOwnership.call({from: accounts[3]});
//		const boolm4O2s4p = await YRX3eZUZkMn.isOwner.call({from: accounts[4]});
//		const uint256TFvrxj9 = await YRX3eZUZkMn.withdraw.call(uintIvVIxvU, {from: accounts[0]});
//		await YRX3eZUZkMn.onlyOwner.call({from: accounts[1]});
//		const uint256mbqkYe = await YRX3eZUZkMn.stake.call(uintVkHEwN, {from: accounts[4]});
//		await YRX3eZUZkMn.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3eZUZkMn.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})