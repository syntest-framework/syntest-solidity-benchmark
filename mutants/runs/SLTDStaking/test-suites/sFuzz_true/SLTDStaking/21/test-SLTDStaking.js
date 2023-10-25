const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingnH4khl = await SLTDStaking.new({from: accounts[1]});
		const addressJvn7Ddg = accounts[5]
		const uintHgw1nEp = BigInt("594")
		const uint2564NP7Oa = await SLTDStakingnH4khl.earned.call(addressJvn7Ddg, {from: accounts[2]});
		const uint256gN1YvIT = await SLTDStakingnH4khl.withdraw.call(uintHgw1nEp, {from: accounts[4]});

		assert.equal(uint2564NP7Oa, BigInt("0"))
		await expect(SLTDStakingnH4khl.withdraw.call(uintHgw1nEp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj5rwg6 = await SLTDStaking.new({from: accounts[4]});
		const addressbYuAnZ4 = accounts[5]
		const uintcMJ9zHa = BigInt("940")
		const uint2564pzhw9 = await SLTDStakingj5rwg6.lastTimeRewardApplicable.call({from: accounts[1]});
		await SLTDStakingj5rwg6.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrmsYNZR = await SLTDStakingj5rwg6.setRewardDistribution.call(addressbYuAnZ4, {from: accounts[0]});
		await SLTDStakingj5rwg6.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256X7f5ooJ = await SLTDStakingj5rwg6.stake.call(uintcMJ9zHa, {from: accounts[2]});
		const uint256XF7mgWJ = await SLTDStakingj5rwg6.totalSupply.call({from: accounts[0]});

		assert.equal(uint2564pzhw9, BigInt("0"))
		await expect(SLTDStakingj5rwg6.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWFO4ilX = await SLTDStaking.new({from: accounts[5]});
		const addressoZprLIT = accounts[2]
		await SLTDStakingWFO4ilX.getReward.call({from: accounts[0]});
		await SLTDStakingWFO4ilX.onlyRewardDistribution.call({from: accounts[3]});
		const uint256iqHL2M0 = await SLTDStakingWFO4ilX.earned.call(addressoZprLIT, {from: accounts[0]});

		await expect(SLTDStakingWFO4ilX.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingItwMZqU = await SLTDStaking.new({from: accounts[4]});
		const uintrv6zXc5 = BigInt("947")
		const uintKonJvZ = BigInt("1496")
		const uintdV3kYiO = BigInt("1579")
		const uint256VyJL5KT = await SLTDStakingItwMZqU.stake.call(uintrv6zXc5, {from: accounts[3]});
		const uint256jho0Ids = await SLTDStakingItwMZqU.withdraw.call(uintKonJvZ, {from: accounts[1]});
		await SLTDStakingItwMZqU.onlyOwner.call({from: accounts[2]});
		const uint256au28SJe = await SLTDStakingItwMZqU.stake.call(uintdV3kYiO, {from: accounts[5]});

		await expect(SLTDStakingItwMZqU.stake.call(uintrv6zXc5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSQdXGjI = await SLTDStaking.new({from: accounts[0]});
		const addressb1bP9wB = accounts[3]
		const uint256c5huogr = await SLTDStakingSQdXGjI.rewardPerToken.call({from: accounts[2]});
		await SLTDStakingSQdXGjI.exit.call({from: accounts[1]});
		const addressECZpxdH = await SLTDStakingSQdXGjI.setRewardDistribution.call(addressb1bP9wB, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingSQdXGjI.exit.call({from: accounts[4]});

		assert.equal(uint256c5huogr, BigInt("0"))
		await expect(SLTDStakingSQdXGjI.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxj7VZt3 = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIzyXdyK = BigInt("738")
		const uint256H1QSQNx = await SLTDStakingxj7VZt3.lastTimeRewardApplicable.call({from: accounts[1]});
		await SLTDStakingxj7VZt3.onlyOwner.call({from: accounts[5]});
		const uint256jcB0BvZ = await SLTDStakingxj7VZt3.withdraw.call(uintIzyXdyK, {from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnH4khl = await SLTDStaking.new({from: accounts[1]});
		const uints06QGI = BigInt("1108")
		const uintpVXteuw = BigInt("585")
		const address0mx976 = accounts[4]
		const uint256gCuBkDS = await SLTDStakingnH4khl.notifyRewardAmount.call(uints06QGI, {from: accounts[0]});
		await SLTDStakingnH4khl.onlyOwner.call({from: accounts[1]});
		const uint256gN1YvIT = await SLTDStakingnH4khl.withdraw.call(uintpVXteuw, {from: accounts[4]});
		const addressMw2ep7 = await SLTDStakingnH4khl.setRewardDistribution.call(address0mx976, {from: accounts[3]});

		await expect(SLTDStakingnH4khl.notifyRewardAmount.call(uints06QGI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWFO4ilX = await SLTDStaking.new({from: accounts[5]});
		const uintYsjTO6v = BigInt("72")
		const uintiAo1ND3 = BigInt("452")
		const addressqDg565A = await SLTDStakingWFO4ilX.owner.call({from: accounts[4]});
		await SLTDStakingWFO4ilX.getReward.call({from: accounts[0]});
		const uint256yGiMVAa = await SLTDStakingWFO4ilX.withdraw.call(uintYsjTO6v, {from: accounts[2]});
		const uint256Ck4mAnQ = await SLTDStakingWFO4ilX.notifyRewardAmount.call(uintiAo1ND3, {from: accounts[1]});

		assert.equal(addressqDg565A, 0x2D8AAf4BeCf22D59DD56734efD11f90C9Df48931)
		await expect(SLTDStakingWFO4ilX.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinglIvY8vM = await SLTDStaking.new({from: accounts[2]});
		const address3ubNIV = accounts[3]
		const addressTRdzUEV = accounts[1]
		const addressD7HMbrZ = accounts[1]
		const addressB22EsBe = accounts[2]
		const addressefx3K8g = await SLTDStakinglIvY8vM.transferOwnership.call(address3ubNIV, {from: accounts[2]});
		await SLTDStakinglIvY8vM.renounceOwnership.call({from: accounts[4]});
		const addresssFOIU9E = await SLTDStakinglIvY8vM.setRewardDistribution.call(addressTRdzUEV, {from: accounts[1]});
		const addressOlMFo2D = await SLTDStakinglIvY8vM.setSLTD.call(addressB22EsBe, addressD7HMbrZ, {from: accounts[3]});

		await expect(SLTDStakinglIvY8vM.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaKOAkOs = await SLTDStaking.new({from: accounts[4]});
		const addressfQTY11 = accounts[4]
		const addresshHwGqpD = accounts[3]
		const uinthQIqv7 = BigInt("1834")
		const addressceJFoce = await SLTDStakingaKOAkOs.setRewardDistribution.call(addressfQTY11, {from: accounts[4]});
		await SLTDStakingaKOAkOs.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDStakingaKOAkOs.getReward.call({from: accounts[5]});
		const boolXbIqZV5 = await SLTDStakingaKOAkOs.isOwner.call({from: accounts[2]});
		const uint256HFz4UkL = await SLTDStakingaKOAkOs.earned.call(addresshHwGqpD, {from: accounts[4]});
		const uint256ojHWxFZ = await SLTDStakingaKOAkOs.stake.call(uinthQIqv7, {from: accounts[1]});

		await expect(SLTDStakingaKOAkOs.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingoOKzC8t = await SLTDStaking.new({from: accounts[4]});
		const uintigBBx0Q = BigInt("1875")
		await SLTDStakingoOKzC8t.renounceOwnership.call({from: accounts[4]});
		await SLTDStakingoOKzC8t.onlyRewardDistribution.call({from: accounts[2]});
		const uint256Jm7YJTa = await SLTDStakingoOKzC8t.stake.call(uintigBBx0Q, {from: accounts[2]});
		await SLTDStakingoOKzC8t.onlyRewardDistribution.call({from: accounts[2]});
		const uint256Jw34R0d = await SLTDStakingoOKzC8t.totalSupply.call({from: accounts[0]});

		await expect(SLTDStakingoOKzC8t.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})