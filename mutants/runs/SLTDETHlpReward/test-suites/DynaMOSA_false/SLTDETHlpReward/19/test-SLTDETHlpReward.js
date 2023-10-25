const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardccQzn6f = await SLTDETHlpReward.new({from: accounts[1]});
		const addressX2Aeavq = accounts[0]
		const uintHZH2Hd = BigInt("1284")
		const uintVLsrobo = BigInt("749")
		const uint256O0xFERo = await SLTDETHlpRewardccQzn6f.totalSupply.call({from: accounts[3]});
		const addressyIIiUbn = await SLTDETHlpRewardccQzn6f.updateReward.call(addressX2Aeavq, {from: accounts[2]});
		await SLTDETHlpRewardccQzn6f.checkStart.call({from: accounts[3]});
		const uint256MFpd9ot = await SLTDETHlpRewardccQzn6f.withdraw.call(uintHZH2Hd, {from: accounts[4]});
		const uint256opo27X = await SLTDETHlpRewardccQzn6f.notifyRewardAmount.call(uintVLsrobo, {from: accounts[3]});

		assert.equal(uint256O0xFERo, BigInt("0"))
		await expect(SLTDETHlpRewardccQzn6f.updateReward.call(addressX2Aeavq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLrCp8Uj = await SLTDETHlpReward.new({from: accounts[1]});
		const addresskIrSfwi = accounts[0]
		const addressU0ZCzI = accounts[2]
		await SLTDETHlpRewardLrCp8Uj.renounceOwnership.call({from: accounts[0]});
		const addressxOOs6WA = await SLTDETHlpRewardLrCp8Uj.setStakeAddress.call(addresskIrSfwi, {from: accounts[4]});
		const uint256J8BXioG = await SLTDETHlpRewardLrCp8Uj.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressl2X2i9m = await SLTDETHlpRewardLrCp8Uj.transferOwnership.call(addressU0ZCzI, {from: accounts[3]});

		await expect(SLTDETHlpRewardLrCp8Uj.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const addressfU4fWUd = await SLTDETHlpRewardl9M7dn.owner.call({from: accounts[2]});
		await SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]});
		await SLTDETHlpRewardl9M7dn.getReward.call({from: accounts[2]});

		assert.equal(addressfU4fWUd, 0x2aD3f9bEd3AAae36a3297f2fA2E7Ca229Ebca584)
		await expect(SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardOcHc58m = await SLTDETHlpReward.new({from: accounts[4]});
		const uintvdBFNoB = BigInt("99")
		const addresssnPygmO = accounts[5]
		const uint256uXSBPgg = await SLTDETHlpRewardOcHc58m.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256rbIXkx1 = await SLTDETHlpRewardOcHc58m.stake.call(uintvdBFNoB, {from: accounts[0]});
		const addressDM37VLF = await SLTDETHlpRewardOcHc58m.transferOwnership.call(addresssnPygmO, {from: accounts[4]});
		await SLTDETHlpRewardOcHc58m.exit.call({from: accounts[0]});
		await SLTDETHlpRewardOcHc58m.onlyRewardDistribution.call({from: accounts[2]});

		assert.equal(uint256uXSBPgg, BigInt("0"))
		await expect(SLTDETHlpRewardOcHc58m.stake.call(uintvdBFNoB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtSUV1e = await SLTDETHlpReward.new({from: accounts[1]});
		const addressxgjSOm0 = accounts[2]
		const addressI3vC0uC = accounts[1]
		const uint256xT3GKKD = await SLTDETHlpRewardtSUV1e.remainingReward.call({from: accounts[1]});
		const addressRNk96wu = await SLTDETHlpRewardtSUV1e.setStakeAddress.call(addressxgjSOm0, {from: accounts[2]});
		const uint256qCfe0k = await SLTDETHlpRewardtSUV1e.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256wV54PK = await SLTDETHlpRewardtSUV1e.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256w9Bui3Y = await SLTDETHlpRewardtSUV1e.balanceOf.call(addressI3vC0uC, {from: accounts[4]});
		await SLTDETHlpRewardtSUV1e.exit.call({from: accounts[1]});

		await expect(SLTDETHlpRewardtSUV1e.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardu8j1d71 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQOdJNgj = BigInt("12")
		const uint256ZuJxoL3 = await SLTDETHlpRewardu8j1d71.withdraw.call(uintQOdJNgj, {from: accounts[3]});
		await SLTDETHlpRewardu8j1d71.checkStart.call({from: accounts[1]});
		const addressx5M0ms5 = await SLTDETHlpRewardu8j1d71.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVUGTRu3 = await SLTDETHlpRewardu8j1d71.owner.call({from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const uintExpGwp = BigInt("1235")
		const addressfU4fWUd = await SLTDETHlpRewardl9M7dn.owner.call({from: accounts[2]});
		const uint256kqJs4cy = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintExpGwp, {from: accounts[0]});
		await SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]});

		assert.equal(addressfU4fWUd, 0x2aD3f9bEd3AAae36a3297f2fA2E7Ca229Ebca584)
		await expect(SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintExpGwp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWT4BzO3 = await SLTDETHlpReward.new({from: accounts[3]});
		const addresspaqi2hC = accounts[5]
		const uintheV00mi = BigInt("1314")
		const uint256YDnQFD = await SLTDETHlpRewardWT4BzO3.balanceOf.call(addresspaqi2hC, {from: accounts[0]});
		const uint256NB1IDJs = await SLTDETHlpRewardWT4BzO3.withdraw.call(uintheV00mi, {from: accounts[4]});
		await SLTDETHlpRewardWT4BzO3.onlyRewardDistribution.call({from: accounts[1]});
		await SLTDETHlpRewardWT4BzO3.getReward.call({from: accounts[3]});

		assert.equal(uint256YDnQFD, BigInt("0"))
		await expect(SLTDETHlpRewardWT4BzO3.withdraw.call(uintheV00mi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const addressRTCwLpo = accounts[4]
		const uintXd11hCw = BigInt("1500")
		const addressfU4fWUd = await SLTDETHlpRewardl9M7dn.owner.call({from: accounts[2]});
		const uint256KbHiC9N = await SLTDETHlpRewardl9M7dn.balanceOf.call(addressRTCwLpo, {from: accounts[2]});
		const uint256vNWt89O = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintXd11hCw, {from: accounts[1]});
		await SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]});

		assert.equal(addressfU4fWUd, 0x2aD3f9bEd3AAae36a3297f2fA2E7Ca229Ebca584)
		assert.equal(uint256KbHiC9N, BigInt("0"))
		await expect(SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddlltvB = await SLTDETHlpReward.new({from: accounts[2]});
		const addressgpUxlCD = accounts[1]
		const uintcCafybl = BigInt("1682")
		const uinttCSD1JW = BigInt("1355")
		const uint256MdETelC = await SLTDETHlpRewarddlltvB.balanceOf.call(addressgpUxlCD, {from: accounts[3]});
		const uint256LGahkCT = await SLTDETHlpRewarddlltvB.lastTimeRewardApplicable.call({from: accounts[4]});
		await SLTDETHlpRewarddlltvB.getReward.call({from: accounts[0]});
		const uint256SNEd1cD = await SLTDETHlpRewarddlltvB.stake.call(uintcCafybl, {from: accounts[2]});
		const uint256UEJ3adE = await SLTDETHlpRewarddlltvB.notifyRewardAmount.call(uinttCSD1JW, {from: accounts[0]});

		assert.equal(uint256LGahkCT, BigInt("0"))
		assert.equal(uint256MdETelC, BigInt("0"))
		await expect(SLTDETHlpRewarddlltvB.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const addressvjrlBIQ = accounts[5]
		const uinta0d8sF4 = BigInt("1500")
		const addressxpyiUs = accounts[4]
		const addressfU4fWUd = await SLTDETHlpRewardl9M7dn.owner.call({from: accounts[2]});
		await SLTDETHlpRewardl9M7dn.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KbHiC9N = await SLTDETHlpRewardl9M7dn.balanceOf.call(addressvjrlBIQ, {from: accounts[2]});
		const uint256vNWt89O = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uinta0d8sF4, {from: accounts[1]});
		await SLTDETHlpRewardl9M7dn.onlyOwner.call({from: accounts[2]});
		await SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]});
		const addressw9tnz62 = await SLTDETHlpRewardl9M7dn.setStakeAddress.call(addressxpyiUs, {from: accounts[2]});

		assert.equal(addressfU4fWUd, 0x2aD3f9bEd3AAae36a3297f2fA2E7Ca229Ebca584)
		await expect(SLTDETHlpRewardl9M7dn.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const uintQgepcna = BigInt("1927")
		const addressP1to2Qv = "0x0000000000000000000000000000000000000001"
		const uint256CnZBTyz = await SLTDETHlpRewardl9M7dn.totalSupply.call({from: accounts[1]});
		const addressfU4fWUd = await SLTDETHlpRewardl9M7dn.owner.call({from: accounts[2]});
		const uint256vNWt89O = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintQgepcna, {from: accounts[1]});
		const addressILBU3Rx = await SLTDETHlpRewardl9M7dn.transferOwnership.call(addressP1to2Qv, {from: accounts[1]});
		await SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]});

		assert.equal(addressfU4fWUd, 0x2aD3f9bEd3AAae36a3297f2fA2E7Ca229Ebca584)
		assert.equal(uint256CnZBTyz, BigInt("0"))
		await expect(SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const uintWQCpM5T = BigInt("195")
		const addressN8NIYC9 = "0x0000000000000000000000000000000000000001"
		const uint256vNWt89O = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintWQCpM5T, {from: accounts[1]});
		const addressusA4XFE = await SLTDETHlpRewardl9M7dn.setStakeAddress.call(addressN8NIYC9, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const uintFXM3KLj = BigInt("932")
		const addressr4YelNc = accounts[4]
		const uint256vNWt89O = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintFXM3KLj, {from: accounts[1]});
		const addresskDlI9Sz = await SLTDETHlpRewardl9M7dn.setRewardDistribution.call(addressr4YelNc, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardeYSSV6R = await SLTDETHlpReward.new({from: accounts[1]});
		const uintzYAi2nJ = BigInt("487")
		const uintg9MTss = BigInt("437")
		await SLTDETHlpRewardeYSSV6R.renounceOwnership.call({from: accounts[1]});
		const uint256OARfXp2 = await SLTDETHlpRewardeYSSV6R.stake.call(uintzYAi2nJ, {from: accounts[3]});
		const uint256zyxanl9 = await SLTDETHlpRewardeYSSV6R.stake.call(uintg9MTss, {from: accounts[2]});

		await expect(SLTDETHlpRewardeYSSV6R.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl9M7dn = await SLTDETHlpReward.new({from: accounts[1]});
		const addressU1h8yf = accounts[4]
		const uintnVEXBZ3 = BigInt("1498")
		const uintEFrkvR9 = BigInt("0")
		const uintGxKlFtC = BigInt("1663")
		const addressbG6bsz4 = accounts[1]
		const addressZCL2f3v = accounts[3]
		const uintbTXYuUJ = BigInt("1699")
		await SLTDETHlpRewardl9M7dn.getReward.call({from: accounts[4]});
		const uint256F5d566j = await SLTDETHlpRewardl9M7dn.earned.call(addressU1h8yf, {from: accounts[1]});
		const uint256jYy3kQf = await SLTDETHlpRewardl9M7dn.rewardPerToken.call({from: accounts[4]});
		const uint256QobJDq8 = await SLTDETHlpRewardl9M7dn.totalSupply.call({from: accounts[2]});
		const uint256vNWt89O = await SLTDETHlpRewardl9M7dn.notifyRewardAmount.call(uintnVEXBZ3, {from: accounts[1]});
		const uint256eZLMyH = await SLTDETHlpRewardl9M7dn.stake.call(uintEFrkvR9, {from: accounts[0]});
		const uint256kEcqpv = await SLTDETHlpRewardl9M7dn.withdraw.call(uintGxKlFtC, {from: accounts[1]});
		const uint256cHoBQgC = await SLTDETHlpRewardl9M7dn.earned.call(addressbG6bsz4, {from: accounts[4]});
		const addressSScj0pw = await SLTDETHlpRewardl9M7dn.transferOwnership.call(addressZCL2f3v, {from: accounts[0]});
		const uint256GN0rgw = await SLTDETHlpRewardl9M7dn.setStartTime.call(uintbTXYuUJ, {from: accounts[4]});
		await SLTDETHlpRewardl9M7dn.onlyRewardDistribution.call({from: accounts[2]});
		const boolkwUgwH = await SLTDETHlpRewardl9M7dn.isOwner.call({from: accounts[0]});

		await expect(SLTDETHlpRewardl9M7dn.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})