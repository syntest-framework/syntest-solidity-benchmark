const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpRfJhz0 = await SLTDETHlpReward.new({from: accounts[2]});
		const addressRosZy2 = accounts[4]
		const addresstTAC4eU = "0x0000000000000000000000000000000000000001"
		const addresspPRPoBE = await SLTDETHlpRewardpRfJhz0.updateReward.call(addressRosZy2, {from: accounts[3]});
		const addressbHTzJNC = await SLTDETHlpRewardpRfJhz0.setStakeAddress.call(addresstTAC4eU, {from: accounts[1]});
		await SLTDETHlpRewardpRfJhz0.renounceOwnership.call({from: accounts[4]});
		await SLTDETHlpRewardpRfJhz0.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDETHlpRewardpRfJhz0.updateReward.call(addressRosZy2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQ4EDcCR = await SLTDETHlpReward.new({from: accounts[2]});
		const addressoCrsUr = accounts[5]
		const addressEBw0Dh = accounts[3]
		const uint256JLeSddi = await SLTDETHlpRewardQ4EDcCR.earned.call(addressoCrsUr, {from: accounts[4]});
		const uint256swkRAgJ = await SLTDETHlpRewardQ4EDcCR.earned.call(addressEBw0Dh, {from: accounts[1]});

		assert.equal(uint256JLeSddi, BigInt("0"))
		assert.equal(uint256swkRAgJ, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQM6bOmv = await SLTDETHlpReward.new({from: accounts[0]});
		const uintrrzonMo = BigInt("464")
		const uintl7QhJJl = BigInt("121")
		const uint256wm8aVpD = await SLTDETHlpRewardQM6bOmv.withdraw.call(uintrrzonMo, {from: accounts[5]});
		const uint256SJ7MJWC = await SLTDETHlpRewardQM6bOmv.stake.call(uintl7QhJJl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardQM6bOmv.withdraw.call(uintrrzonMo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDZfVzA7 = await SLTDETHlpReward.new({from: accounts[5]});
		const addresskAT8IPB = "0x0000000000000000000000000000000000000001"
		const addressrtTbsTC = accounts[2]
		const uint256ucQGT65 = await SLTDETHlpRewardDZfVzA7.earned.call(addresskAT8IPB, {from: accounts[0]});
		await SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]});
		await SLTDETHlpRewardDZfVzA7.exit.call({from: accounts[2]});
		await SLTDETHlpRewardDZfVzA7.onlyOwner.call({from: accounts[5]});
		const addresscXXoVXd = await SLTDETHlpRewardDZfVzA7.transferOwnership.call(addressrtTbsTC, {from: accounts[2]});

		assert.equal(uint256ucQGT65, BigInt("0"))
		await expect(SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcrsIX30 = await SLTDETHlpReward.new({from: accounts[2]});
		const uint2560dyd26 = await SLTDETHlpRewardcrsIX30.remainingReward.call({from: accounts[5]});
		await SLTDETHlpRewardcrsIX30.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardcrsIX30.remainingReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardNRZP4IL = await SLTDETHlpReward.new({from: accounts[1]});
		const uint5WmUY3 = BigInt("1809")
		const uintcJyfWIm = BigInt("830")
		const addressaGCDUwS = accounts[2]
		const addressFHd0Xjn = accounts[5]
		const uintdyqPooH = BigInt("806")
		const uint256Pm4ebki = await SLTDETHlpRewardNRZP4IL.notifyRewardAmount.call(uint5WmUY3, {from: accounts[2]});
		const uint256xuXoTCy = await SLTDETHlpRewardNRZP4IL.withdraw.call(uintcJyfWIm, {from: accounts[2]});
		const uint256mTDAEP = await SLTDETHlpRewardNRZP4IL.rewardPerToken.call({from: accounts[3]});
		const boolwtL96w9 = await SLTDETHlpRewardNRZP4IL.isOwner.call({from: accounts[0]});
		await SLTDETHlpRewardNRZP4IL.getReward.call({from: accounts[0]});
		const uint256t023jGL = await SLTDETHlpRewardNRZP4IL.earned.call(addressaGCDUwS, {from: accounts[4]});
		const addressuFNKGFv = await SLTDETHlpRewardNRZP4IL.transferOwnership.call(addressFHd0Xjn, {from: accounts[4]});
		const uint256F6rkOiX = await SLTDETHlpRewardNRZP4IL.totalSupply.call({from: accounts[4]});
		const uint256wgBCSY3 = await SLTDETHlpRewardNRZP4IL.withdraw.call(uintdyqPooH, {from: accounts[3]});

		await expect(SLTDETHlpRewardNRZP4IL.notifyRewardAmount.call(uint5WmUY3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarduPaW3WP = await SLTDETHlpReward.new({from: accounts[3]});
		const boolZg8WDUi = await SLTDETHlpRewarduPaW3WP.isOwner.call({from: accounts[1]});
		await SLTDETHlpRewarduPaW3WP.renounceOwnership.call({from: accounts[2]});
		await SLTDETHlpRewarduPaW3WP.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZg8WDUi, false)
		await expect(SLTDETHlpRewarduPaW3WP.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDZfVzA7 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressVd74fEi = "0x0000000000000000000000000000000000000001"
		const addressc74QJUa = accounts[2]
		const addressDm1bEk8 = await SLTDETHlpRewardDZfVzA7.owner.call({from: accounts[2]});
		const uint256ucQGT65 = await SLTDETHlpRewardDZfVzA7.earned.call(addressVd74fEi, {from: accounts[0]});
		await SLTDETHlpRewardDZfVzA7.onlyRewardDistribution.call({from: accounts[5]});
		await SLTDETHlpRewardDZfVzA7.exit.call({from: accounts[3]});
		await SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]});
		await SLTDETHlpRewardDZfVzA7.exit.call({from: accounts[2]});
		const addresscXXoVXd = await SLTDETHlpRewardDZfVzA7.transferOwnership.call(addressc74QJUa, {from: accounts[2]});

		assert.equal(addressDm1bEk8, 0x1385Da42c574AB93475Dc5bcfD91556cf8bb6a1F)
		assert.equal(uint256ucQGT65, BigInt("0"))
		await expect(SLTDETHlpRewardDZfVzA7.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDZfVzA7 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressTvAdNux = "0x0000000000000000000000000000000000000001"
		const uintsIAXHaT = BigInt("783")
		const uintFIjUSEP = BigInt("1590")
		const uint256ucQGT65 = await SLTDETHlpRewardDZfVzA7.earned.call(addressTvAdNux, {from: accounts[0]});
		await SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]});
		const uint256GhbSFf = await SLTDETHlpRewardDZfVzA7.stake.call(uintsIAXHaT, {from: accounts[2]});
		const uint256qAj8jaM = await SLTDETHlpRewardDZfVzA7.stake.call(uintFIjUSEP, {from: accounts[3]});
		await SLTDETHlpRewardDZfVzA7.exit.call({from: accounts[2]});
		await SLTDETHlpRewardDZfVzA7.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256ucQGT65, BigInt("0"))
		await expect(SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardH4TRgt = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const boola7YnaoZ = await SLTDETHlpRewardH4TRgt.isOwner.call({from: accounts[1]});
		const uint256RIKsyrP = await SLTDETHlpRewardH4TRgt.totalSupply.call({from: accounts[2]});
		await SLTDETHlpRewardH4TRgt.onlyRewardDistribution.call({from: accounts[0]});
		await SLTDETHlpRewardH4TRgt.renounceOwnership.call({from: accounts[5]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDZfVzA7 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressdaURlnC = accounts[4]
		const uintKaE6dFn = BigInt("783")
		const uintpeGdWKI = BigInt("1590")
		await SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]});
		const addressvqVOusR = await SLTDETHlpRewardDZfVzA7.setRewardDistribution.call(addressdaURlnC, {from: accounts[5]});
		const uint256GhbSFf = await SLTDETHlpRewardDZfVzA7.stake.call(uintKaE6dFn, {from: accounts[2]});
		const boolLLQoIwU = await SLTDETHlpRewardDZfVzA7.isOwner.call({from: accounts[3]});
		const uint256qAj8jaM = await SLTDETHlpRewardDZfVzA7.stake.call(uintpeGdWKI, {from: accounts[3]});
		await SLTDETHlpRewardDZfVzA7.onlyOwner.call({from: accounts[5]});

		await expect(SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDZfVzA7 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressq78E6tb = accounts[0]
		const addresseOaNPgq = "0x0000000000000000000000000000000000000002"
		const addressq6Jt5Dt = await SLTDETHlpRewardDZfVzA7.setStakeAddress.call(addressq78E6tb, {from: accounts[5]});
		const uint256ucQGT65 = await SLTDETHlpRewardDZfVzA7.earned.call(addresseOaNPgq, {from: accounts[0]});
		await SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]});

		assert.equal(uint256ucQGT65, BigInt("0"))
		await expect(SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardDZfVzA7 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressCGVS5ps = "0x0000000000000000000000000000000000000001"
		const uintLYuVEgj = BigInt("1859")
		const uintfFwhX7 = BigInt("1554")
		const uint256ucQGT65 = await SLTDETHlpRewardDZfVzA7.earned.call(addressCGVS5ps, {from: accounts[0]});
		await SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]});
		const uint256kFwdrGp = await SLTDETHlpRewardDZfVzA7.setStartTime.call(uintLYuVEgj, {from: accounts[5]});
		const uint256qAj8jaM = await SLTDETHlpRewardDZfVzA7.stake.call(uintfFwhX7, {from: accounts[3]});
		await SLTDETHlpRewardDZfVzA7.exit.call({from: accounts[2]});
		await SLTDETHlpRewardDZfVzA7.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256ucQGT65, BigInt("0"))
		await expect(SLTDETHlpRewardDZfVzA7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJr1PbxW = await SLTDETHlpReward.new({from: accounts[4]});
		const uintJRGrMC = BigInt("1775")
		const address2EO1r5 = await SLTDETHlpRewardJr1PbxW.owner.call({from: accounts[1]});
		const uint256sdNYcQ3 = await SLTDETHlpRewardJr1PbxW.notifyRewardAmount.call(uintJRGrMC, {from: accounts[4]});
		await SLTDETHlpRewardJr1PbxW.getReward.call({from: accounts[0]});

		assert.equal(address2EO1r5, 0xddEFA90F4e0e3f720Ec76D423AC6E2DbB963B55f)
		await expect(SLTDETHlpRewardJr1PbxW.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJr1PbxW = await SLTDETHlpReward.new({from: accounts[4]});
		const addresspvf9sO = accounts[5]
		const uintc2upXHI = BigInt("1752")
		const addressIy75tgd = await SLTDETHlpRewardJr1PbxW.transferOwnership.call(addresspvf9sO, {from: accounts[4]});
		await SLTDETHlpRewardJr1PbxW.getReward.call({from: accounts[3]});
		const uint256FNDIUTB = await SLTDETHlpRewardJr1PbxW.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256sdNYcQ3 = await SLTDETHlpRewardJr1PbxW.notifyRewardAmount.call(uintc2upXHI, {from: accounts[4]});

		await expect(SLTDETHlpRewardJr1PbxW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcrsIX30 = await SLTDETHlpReward.new({from: accounts[2]});
		const uintqd03fK = BigInt("1999")
		await SLTDETHlpRewardcrsIX30.renounceOwnership.call({from: accounts[2]});
		const uint256zsmfHk2 = await SLTDETHlpRewardcrsIX30.stake.call(uintqd03fK, {from: accounts[4]});

		await expect(SLTDETHlpRewardcrsIX30.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})