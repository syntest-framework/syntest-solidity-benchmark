const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardVEaJcwV = await SLTDETHlpReward.new({from: accounts[3]});
		const addresslbWCxxF = accounts[2]
		const uintslCBgoM = BigInt("1927")
		const uintPYYXOeM = BigInt("500")
		const uint256JKk0po7 = await SLTDETHlpRewardVEaJcwV.totalSupply.call({from: accounts[4]});
//		const addressrpHLoVg = await SLTDETHlpRewardVEaJcwV.updateReward.call(addresslbWCxxF, {from: accounts[5]});
//		const uint256z4rqJT = await SLTDETHlpRewardVEaJcwV.setStartTime.call(uintslCBgoM, {from: accounts[0]});
//		const uint256NXWlTN0 = await SLTDETHlpRewardVEaJcwV.stake.call(uintPYYXOeM, {from: accounts[5]});
//		const uint256WUJHzTu = await SLTDETHlpRewardVEaJcwV.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256JKk0po7, BigInt("0"))
		await expect(SLTDETHlpRewardVEaJcwV.updateReward.call(addresslbWCxxF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbRAP6Jv = await SLTDETHlpReward.new({from: accounts[4]});
		const uintTWcbiNt = BigInt("1692")
//		const uint256zMsg6P = await SLTDETHlpRewardbRAP6Jv.remainingReward.call({from: accounts[2]});
//		const uint256fR3y4Nj = await SLTDETHlpRewardbRAP6Jv.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256y0HJad4 = await SLTDETHlpRewardbRAP6Jv.totalSupply.call({from: accounts[1]});
//		const boolI071MkO = await SLTDETHlpRewardbRAP6Jv.isOwner.call({from: accounts[4]});
//		await SLTDETHlpRewardbRAP6Jv.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256XSpFYJL = await SLTDETHlpRewardbRAP6Jv.stake.call(uintTWcbiNt, {from: accounts[3]});

		await expect(SLTDETHlpRewardbRAP6Jv.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardISbcUDo = await SLTDETHlpReward.new({from: accounts[2]});
		const addressFaJY1I3 = accounts[4]
		const uintM8E8ijx = BigInt("1113")
		const uintTyfpM7e = BigInt("1013")
		const addressplnVCEQ = accounts[1]
		const addressFrkjbMu = accounts[4]
		const uint256B04eZz = await SLTDETHlpRewardISbcUDo.balanceOf.call(addressFaJY1I3, {from: accounts[0]});
//		await SLTDETHlpRewardISbcUDo.checkStart.call({from: accounts[5]});
//		const uint256GbkEnO = await SLTDETHlpRewardISbcUDo.notifyRewardAmount.call(uintM8E8ijx, {from: accounts[1]});
//		const uint256L5O6W4g = await SLTDETHlpRewardISbcUDo.notifyRewardAmount.call(uintTyfpM7e, {from: accounts[1]});
//		const uint256Vtjfvsp = await SLTDETHlpRewardISbcUDo.balanceOf.call(addressplnVCEQ, {from: accounts[3]});
//		const addressLjjWEMq = await SLTDETHlpRewardISbcUDo.updateReward.call(addressFrkjbMu, {from: accounts[3]});

		assert.equal(uint256B04eZz, BigInt("0"))
		await expect(SLTDETHlpRewardISbcUDo.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardlcoEOkQ = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uint1UGDM0 = BigInt("822")
		const uint256PIz7LCa = await SLTDETHlpRewardlcoEOkQ.withdraw.call(uint1UGDM0, {from: accounts[5]});
		await SLTDETHlpRewardlcoEOkQ.onlyOwner.call({from: accounts[1]});
		const uint256zXhrXaL = await SLTDETHlpRewardlcoEOkQ.rewardPerToken.call({from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const addresslCLvWf = accounts[5]
		const uintT71jnDR = BigInt("1032")
//		await SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]});
//		const addressvPOWVl = await SLTDETHlpRewardWpGUeW5.transferOwnership.call(addresslCLvWf, {from: accounts[2]});
//		const uint256RluTCIX = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintT71jnDR, {from: accounts[0]});

		await expect(SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRPtaJiA = await SLTDETHlpReward.new({from: accounts[3]});
		const uintumD4OI1 = BigInt("1453")
		const addressoJGNm6x = accounts[3]
		const uint4lxtnl = BigInt("1426")
//		const uint256UPVgbsJ = await SLTDETHlpRewardRPtaJiA.notifyRewardAmount.call(uintumD4OI1, {from: accounts[2]});
//		const boolvFFXCrL = await SLTDETHlpRewardRPtaJiA.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressw4WVc5W = await SLTDETHlpRewardRPtaJiA.setRewardDistribution.call(addressoJGNm6x, {from: accounts[4]});
//		const uint256qt3oMl1 = await SLTDETHlpRewardRPtaJiA.stake.call(uint4lxtnl, {from: accounts[5]});
//		const uint256tMqh7jc = await SLTDETHlpRewardRPtaJiA.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(SLTDETHlpRewardRPtaJiA.notifyRewardAmount.call(uintumD4OI1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardBxhWvcP = await SLTDETHlpReward.new({from: accounts[3]});
		const addressDNP53fB = await SLTDETHlpRewardBxhWvcP.owner.call({from: accounts[4]});
		const booluwsFgpE = await SLTDETHlpRewardBxhWvcP.isOwner.call({from: accounts[1]});
//		await SLTDETHlpRewardBxhWvcP.onlyOwner.call({from: accounts[2]});

		assert.equal(addressDNP53fB, 0x88eB986E6A12AAc0744DBb0f56796F64Cc19cEE0)
		assert.equal(booluwsFgpE, false)
		await expect(SLTDETHlpRewardBxhWvcP.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintmXP98z3 = BigInt("753")
		const addressKsAVSBu = accounts[5]
		const uinthcZHCc = BigInt("354")
		const uintEsi5hwO = BigInt("1033")
//		await SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]});
//		const uint256uB6DEGQ = await SLTDETHlpRewardWpGUeW5.withdraw.call(uintmXP98z3, {from: accounts[3]});
//		const addressvPOWVl = await SLTDETHlpRewardWpGUeW5.transferOwnership.call(addressKsAVSBu, {from: accounts[2]});
//		const uint256PMAvZEj = await SLTDETHlpRewardWpGUeW5.stake.call(uinthcZHCc, {from: accounts[2]});
//		const uint256RluTCIX = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintEsi5hwO, {from: accounts[0]});

		await expect(SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintbKb7KxO = BigInt("365")
		const uintXL35VYP = BigInt("1032")
//		await SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]});
//		const uint256u4OwuNg = await SLTDETHlpRewardWpGUeW5.stake.call(uintbKb7KxO, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardWpGUeW5.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardWpGUeW5.exit.call({from: accounts[4]});
//		const uint256RluTCIX = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintXL35VYP, {from: accounts[0]});

		await expect(SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressvuQ8PxP = accounts[1]
//		await SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]});
//		const addressiUf2UCi = await SLTDETHlpRewardWpGUeW5.setRewardDistribution.call(addressvuQ8PxP, {from: accounts[3]});

		await expect(SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintPK0kOFu = BigInt("544")
		const uintgvH4Vbp = BigInt("1032")
		const uint256MtzNC4g = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintPK0kOFu, {from: accounts[3]});
//		const uint256RluTCIX = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintgvH4Vbp, {from: accounts[0]});

		await expect(SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintgvH4Vbp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjVjtdyD = await SLTDETHlpReward.new({from: accounts[0]});
		const addresslpvGLbt = accounts[2]
		const addressrRbkUJ9 = accounts[4]
//		await SLTDETHlpRewardjVjtdyD.renounceOwnership.call({from: accounts[0]});
//		await SLTDETHlpRewardjVjtdyD.renounceOwnership.call({from: accounts[5]});
//		await SLTDETHlpRewardjVjtdyD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressKJeglKf = await SLTDETHlpRewardjVjtdyD.transferOwnership.call(addresslpvGLbt, {from: accounts[2]});
//		const uint256MOBnQ3u = await SLTDETHlpRewardjVjtdyD.earned.call(addressrRbkUJ9, {from: accounts[0]});

		await expect(SLTDETHlpRewardjVjtdyD.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintUJeEKw = BigInt("527")
//		await SLTDETHlpRewardWpGUeW5.exit.call({from: accounts[0]});
//		await SLTDETHlpRewardWpGUeW5.renounceOwnership.call({from: accounts[4]});
//		const uint256MtzNC4g = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintUJeEKw, {from: accounts[3]});

		await expect(SLTDETHlpRewardWpGUeW5.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressbomubl = accounts[4]
		const addressUrO6RpK = accounts[0]
		const addressbEu8tkX = await SLTDETHlpRewardWpGUeW5.setStakeAddress.call(addressbomubl, {from: accounts[3]});
//		await SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]});
//		const uint256k6yHsYW = await SLTDETHlpRewardWpGUeW5.balanceOf.call(addressUrO6RpK, {from: accounts[3]});

		await expect(SLTDETHlpRewardWpGUeW5.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMiMc2He = await SLTDETHlpReward.new({from: accounts[0]});
		const addressYKKIi6B = accounts[5]
		const addressEugj41T = await SLTDETHlpRewardMiMc2He.transferOwnership.call(addressYKKIi6B, {from: accounts[0]});
		const boolO0y4JfL = await SLTDETHlpRewardMiMc2He.isOwner.call({from: accounts[4]});
//		await SLTDETHlpRewardMiMc2He.checkStart.call({from: accounts[5]});

		assert.equal(boolO0y4JfL, false)
		await expect(SLTDETHlpRewardMiMc2He.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWpGUeW5 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressiqTB2Ki = accounts[0]
		const addressZ0C0hgC = accounts[0]
		const uintDWLQnxE = BigInt("532")
		const uintjoyhmlD = BigInt("1848")
		const uint256O2tzk6h = await SLTDETHlpRewardWpGUeW5.earned.call(addressiqTB2Ki, {from: accounts[5]});
		const uint256Pn8ZByx = await SLTDETHlpRewardWpGUeW5.balanceOf.call(addressZ0C0hgC, {from: accounts[4]});
		const uint256MtzNC4g = await SLTDETHlpRewardWpGUeW5.notifyRewardAmount.call(uintDWLQnxE, {from: accounts[3]});
		const uint256BpS7HSZ = await SLTDETHlpRewardWpGUeW5.setStartTime.call(uintjoyhmlD, {from: accounts[3]});

		assert.equal(uint256O2tzk6h, BigInt("0"))
		assert.equal(uint256Pn8ZByx, BigInt("0"))
	});
})