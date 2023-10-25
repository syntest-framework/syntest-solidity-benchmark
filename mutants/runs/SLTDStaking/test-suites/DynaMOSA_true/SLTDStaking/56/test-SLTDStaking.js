const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingrP9XMJd = await SLTDStaking.new({from: accounts[3]});
		const addressPlnNLnS = accounts[4]
		const addressjOzagHz = accounts[4]
		const addresswZO8SWN = await SLTDStakingrP9XMJd.setSLTD.call(addressjOzagHz, addressPlnNLnS, {from: accounts[5]});
		const uint256Qom6sbv = await SLTDStakingrP9XMJd.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256Mb6i7ya = await SLTDStakingrP9XMJd.totalSupply.call({from: accounts[2]});

		await expect(SLTDStakingrP9XMJd.setSLTD.call(addressjOzagHz, addressPlnNLnS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingNcSuycA = await SLTDStaking.new({from: accounts[1]});
		const addressXHR13p8 = accounts[1]
		const addressSA7XUh6 = accounts[2]
		const addressxjJt9f = await SLTDStakingNcSuycA.transferOwnership.call(addressXHR13p8, {from: accounts[1]});
		await SLTDStakingNcSuycA.renounceOwnership.call({from: accounts[1]});
		const addressCJuO7CB = await SLTDStakingNcSuycA.setRewardDistribution.call(addressSA7XUh6, {from: accounts[1]});

		await expect(SLTDStakingNcSuycA.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingpSzHWwo = await SLTDStaking.new({from: accounts[3]});
		const uintcDwi9N = BigInt("512")
		const uint256jKfkur0 = await SLTDStakingpSzHWwo.withdraw.call(uintcDwi9N, {from: accounts[4]});
		await SLTDStakingpSzHWwo.onlyRewardDistribution.call({from: accounts[0]});

		await expect(SLTDStakingpSzHWwo.withdraw.call(uintcDwi9N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsRS4ETH = await SLTDStaking.new({from: accounts[2]});
		const addressTA8fpBH = accounts[2]
		const addresskqEXLlO = accounts[0]
		const addressquVQj0C = accounts[4]
		const addresspIEMwB = accounts[3]
		const addressyasJENP = await SLTDStakingsRS4ETH.owner.call({from: accounts[1]});
		const addressVou7Z2t = await SLTDStakingsRS4ETH.transferOwnership.call(addressTA8fpBH, {from: accounts[0]});
		const addressz5C0Au = await SLTDStakingsRS4ETH.setSLTD.call(addressquVQj0C, addresskqEXLlO, {from: accounts[0]});
		const addresspsMiuZS = await SLTDStakingsRS4ETH.updateReward.call(addresspIEMwB, {from: accounts[4]});

		assert.equal(addressyasJENP, 0xEfBb8A383caf2dE06FF4D4Be2d8839430e424015)
		await expect(SLTDStakingsRS4ETH.transferOwnership.call(addressTA8fpBH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking8yVSin = await SLTDStaking.new({from: accounts[0]});
		const uintV1fGxgq = BigInt("1078")
		await SLTDStaking8yVSin.getReward.call({from: accounts[2]});
		const uint256tpJbHhn = await SLTDStaking8yVSin.stake.call(uintV1fGxgq, {from: accounts[0]});
		await SLTDStaking8yVSin.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDStaking8yVSin.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingGlCymMr = await SLTDStaking.new({from: accounts[3]});
		const addressWbtgD1n = "0x0000000000000000000000000000000000000001"
		const boolnTJezNX = await SLTDStakingGlCymMr.isOwner.call({from: accounts[4]});
		const addressKJRowri = await SLTDStakingGlCymMr.updateReward.call(addressWbtgD1n, {from: accounts[2]});
		const boolqjvAMGe = await SLTDStakingGlCymMr.isOwner.call({from: accounts[3]});
		await SLTDStakingGlCymMr.onlyRewardDistribution.call({from: accounts[4]});

		assert.equal(boolnTJezNX, false)
		await expect(SLTDStakingGlCymMr.updateReward.call(addressWbtgD1n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingpSzHWwo = await SLTDStaking.new({from: accounts[3]});
		await SLTDStakingpSzHWwo.exit.call({from: accounts[0]});
		await SLTDStakingpSzHWwo.onlyRewardDistribution.call({from: accounts[0]});

		await expect(SLTDStakingpSzHWwo.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj9zQIq = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressj7JoPmc = accounts[2]
		const addressmfIRD6k = "0x0000000000000000000000000000000000000001"
		const addressEVbefwV = "0x0000000000000000000000000000000000000001"
		const addressgVAqvW1 = accounts[3]
		await SLTDStakingj9zQIq.renounceOwnership.call({from: accounts[4]});
		const addressa4Q8hLJ = await SLTDStakingj9zQIq.setRewardDistribution.call(addressj7JoPmc, {from: accounts[0]});
		const addressKk41RuY = await SLTDStakingj9zQIq.transferOwnership.call(addressmfIRD6k, {from: accounts[4]});
		const addressa614cSS = await SLTDStakingj9zQIq.setSLTD.call(addressgVAqvW1, addressEVbefwV, {from: accounts[3]});
	});
})