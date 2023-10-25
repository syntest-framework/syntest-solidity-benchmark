const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingQ40GHQF = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintE8B58m = BigInt("811")
		await SLTDStakingQ40GHQF.onlyRewardDistribution.call({from: accounts[0]});
		const uint256k0eH94L = await SLTDStakingQ40GHQF.stake.call(uintE8B58m, {from: accounts[0]});
		await SLTDStakingQ40GHQF.getReward.call({from: accounts[0]});
		await SLTDStakingQ40GHQF.exit.call({from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingA4WlmfC = await SLTDStaking.new({from: accounts[2]});
		const addressBjgPLVw = accounts[1]
		const addressAvY5wme = accounts[3]
		const uint256dIYbamc = await SLTDStakingA4WlmfC.totalSupply.call({from: accounts[5]});
		const uint256cRx8iaV = await SLTDStakingA4WlmfC.earned.call(addressBjgPLVw, {from: accounts[4]});
		const addresseO5StXM = await SLTDStakingA4WlmfC.transferOwnership.call(addressAvY5wme, {from: accounts[4]});

		assert.equal(uint256cRx8iaV, BigInt("0"))
		assert.equal(uint256dIYbamc, BigInt("0"))
		await expect(SLTDStakingA4WlmfC.transferOwnership.call(addressAvY5wme, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingV6Sqsol = await SLTDStaking.new({from: accounts[2]});
		const uintkTRFcmG = BigInt("1045")
		const uintmiurXYY = BigInt("1061")
		await SLTDStakingV6Sqsol.exit.call({from: accounts[5]});
		const uint256WUgbiRi = await SLTDStakingV6Sqsol.stake.call(uintkTRFcmG, {from: accounts[2]});
		const uint256XVVw0kt = await SLTDStakingV6Sqsol.stake.call(uintmiurXYY, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingV6Sqsol.exit.call({from: accounts[4]});

		await expect(SLTDStakingV6Sqsol.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingR54CB4g = await SLTDStaking.new({from: accounts[3]});
		const addressZw0jVdb = accounts[3]
		const addressXOf1Dcg = "0x0000000000000000000000000000000000000001"
		const uintmC9wsL7 = BigInt("458")
		const addressWjx07Gv = await SLTDStakingR54CB4g.setSLTD.call(addressXOf1Dcg, addressZw0jVdb, {from: accounts[2]});
		const uint256hJXD53h = await SLTDStakingR54CB4g.stake.call(uintmC9wsL7, {from: accounts[3]});
		await SLTDStakingR54CB4g.onlyRewardDistribution.call({from: accounts[0]});

		await expect(SLTDStakingR54CB4g.setSLTD.call(addressXOf1Dcg, addressZw0jVdb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingoF0wNC = await SLTDStaking.new({from: accounts[2]});
		const uintWaxlqLd = BigInt("802")
		const addressQMrRp9Z = accounts[4]
		const uint256kENskfQ = await SLTDStakingoF0wNC.stake.call(uintWaxlqLd, {from: accounts[3]});
		await SLTDStakingoF0wNC.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUJ0qCP0 = await SLTDStakingoF0wNC.transferOwnership.call(addressQMrRp9Z, {from: accounts[1]});

		await expect(SLTDStakingoF0wNC.stake.call(uintWaxlqLd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAQaZARi = await SLTDStaking.new({from: accounts[3]});
		const addressK3uVtDr = accounts[4]
		const uinttQraAzi = BigInt("1702")
		await SLTDStakingAQaZARi.getReward.call({from: accounts[1]});
		const addressTBH0Awm = await SLTDStakingAQaZARi.updateReward.call(addressK3uVtDr, {from: accounts[4]});
		await SLTDStakingAQaZARi.renounceOwnership.call({from: accounts[1]});
		const uint256kV6wcoh = await SLTDStakingAQaZARi.stake.call(uinttQraAzi, {from: accounts[1]});

		await expect(SLTDStakingAQaZARi.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxfqc9za = await SLTDStaking.new({from: accounts[1]});
		const addressmqv4o0X = accounts[2]
		const addressfzKruNW = accounts[1]
		const uintPYePq9 = BigInt("254")
		const uint256FqdbbWI = await SLTDStakingxfqc9za.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256W72P9aI = await SLTDStakingxfqc9za.balanceOf.call(addressmqv4o0X, {from: accounts[2]});
		const addressIxhU7Uz = await SLTDStakingxfqc9za.transferOwnership.call(addressfzKruNW, {from: accounts[1]});
		const uint256lbk7Xpx = await SLTDStakingxfqc9za.stake.call(uintPYePq9, {from: accounts[4]});
		await SLTDStakingxfqc9za.onlyRewardDistribution.call({from: accounts[3]});
		await SLTDStakingxfqc9za.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256FqdbbWI, BigInt("0"))
		assert.equal(uint256W72P9aI, BigInt("0"))
		await expect(SLTDStakingxfqc9za.stake.call(uintPYePq9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAQaZARi = await SLTDStaking.new({from: accounts[3]});
		const uintG6zvi5s = BigInt("302")
		const uintG0ntwR = BigInt("1702")
		await SLTDStakingAQaZARi.getReward.call({from: accounts[1]});
		const uint256KM1Klq9 = await SLTDStakingAQaZARi.totalSupply.call({from: accounts[4]});
		const uint256XbdI2w = await SLTDStakingAQaZARi.withdraw.call(uintG6zvi5s, {from: accounts[4]});
		const uint256kV6wcoh = await SLTDStakingAQaZARi.stake.call(uintG0ntwR, {from: accounts[1]});

		await expect(SLTDStakingAQaZARi.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAQaZARi = await SLTDStaking.new({from: accounts[3]});
		const uintbpV1O2Z = BigInt("1813")
		const uint256ffCXYKm = await SLTDStakingAQaZARi.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressyuVeqUb = await SLTDStakingAQaZARi.owner.call({from: accounts[2]});
		const uint256DrTZGrU = await SLTDStakingAQaZARi.stake.call(uintbpV1O2Z, {from: accounts[4]});
		await SLTDStakingAQaZARi.getReward.call({from: accounts[1]});

		assert.equal(addressyuVeqUb, 0x52718a8892b5d5A931a8C224266da44E65556d8f)
		assert.equal(uint256ffCXYKm, BigInt("0"))
		await expect(SLTDStakingAQaZARi.stake.call(uintbpV1O2Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAQaZARi = await SLTDStaking.new({from: accounts[3]});
		await SLTDStakingAQaZARi.getReward.call({from: accounts[1]});
		await SLTDStakingAQaZARi.renounceOwnership.call({from: accounts[3]});

		await expect(SLTDStakingAQaZARi.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAQaZARi = await SLTDStaking.new({from: accounts[3]});
		const addressIarTpcZ = accounts[1]
		const addresstLpuIv = await SLTDStakingAQaZARi.setRewardDistribution.call(addressIarTpcZ, {from: accounts[3]});
		await SLTDStakingAQaZARi.renounceOwnership.call({from: accounts[0]});
		await SLTDStakingAQaZARi.getReward.call({from: accounts[1]});

		await expect(SLTDStakingAQaZARi.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})