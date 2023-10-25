const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressem5uy4 = accounts[4]
		const addressdoByHD = "0x0000000000000000000000000000000000000001"
		const StakingDextokendq6npr8 = await StakingDextoken.new(addressem5uy4, addressdoByHD, {from: accounts[4]});
		const uintUzMfjyl = BigInt("397")
		const uintgQW9ZXh = await StakingDextokendq6npr8.getTotalStakes.call({from: accounts[5]});
//		const uintJ4QlIPu = await StakingDextokendq6npr8.withdraw.call(uintUzMfjyl, {from: accounts[1]});

		assert.equal(uintgQW9ZXh, BigInt("0"))
		await expect(StakingDextokendq6npr8.withdraw.call(uintUzMfjyl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresseOyKGXM = accounts[5]
		const addressQYiMszN = accounts[2]
		const StakingDextokenxECxxp = await StakingDextoken.new(addresseOyKGXM, addressQYiMszN, {from: accounts[2]});
		const addressaMF3zjy = accounts[1]
		const addressrFTiDgW = accounts[4]
		const uintwokuBST = await StakingDextokenxECxxp.getEndTimestamp.call({from: accounts[0]});
//		await StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]});
//		const uintABV4Gyw = await StakingDextokenxECxxp.earned.call(addressaMF3zjy, {from: accounts[0]});
//		const uintNG94A1 = await StakingDextokenxECxxp.totalRewards.call({from: accounts[3]});
//		const uinthjNI2aO = await StakingDextokenxECxxp.balanceOf.call(addressrFTiDgW, {from: accounts[2]});

		assert.equal(uintwokuBST, BigInt("0"))
		await expect(StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressr4wJuuD = accounts[0]
		const addresstkXzgxw = accounts[1]
		const StakingDextokentspMIBu = await StakingDextoken.new(addressr4wJuuD, addresstkXzgxw, {from: "0x0000000000000000000000000000000000000001"});
		const uintnilVjk5 = BigInt("212")
		const addressNmXpzan = accounts[3]
		const uintAQC5Khi = await StakingDextokentspMIBu.remainingRewards.call({from: accounts[4]});
		const uintJQ3Lfhx = await StakingDextokentspMIBu.getStartTimestamp.call({from: accounts[4]});
		const uintYovJytN = await StakingDextokentspMIBu.withdraw.call(uintnilVjk5, {from: accounts[1]});
		await StakingDextokentspMIBu.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const addresserCyfx = await StakingDextokentspMIBu.updateReward.call(addressNmXpzan, {from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressFP04HcR = accounts[2]
		const addressZjuAw9 = accounts[4]
		const StakingDextokenDotRZly = await StakingDextoken.new(addressFP04HcR, addressZjuAw9, {from: accounts[2]});
		const addressynwpChj = "0x0000000000000000000000000000000000000001"
		const addressrfMBfiD = accounts[5]
		const addressCKwKcqn = "0x0000000000000000000000000000000000000001"
		const uintVXhm2Cl = BigInt("167")
		const uintS4w6Rzh = await StakingDextokenDotRZly.stakeOf.call(addressynwpChj, {from: accounts[1]});
//		const addressObB4zf7 = await StakingDextokenDotRZly.updateReward.call(addressrfMBfiD, {from: accounts[1]});
//		const uintEjQiSDY = await StakingDextokenDotRZly.getEndTimestamp.call({from: accounts[0]});
//		const uintIrU8wa = await StakingDextokenDotRZly.stakeOf.call(addressCKwKcqn, {from: "0x0000000000000000000000000000000000000001"});
//		const uintkPJBJkZ = await StakingDextokenDotRZly.deposit.call(uintVXhm2Cl, {from: accounts[4]});
//		await StakingDextokenDotRZly.claim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintS4w6Rzh, BigInt("0"))
		await expect(StakingDextokenDotRZly.updateReward.call(addressrfMBfiD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstU9ovCO = accounts[2]
		const addressUUXQAI6 = accounts[3]
		const StakingDextokenJ1JSC9F = await StakingDextoken.new(addresstU9ovCO, addressUUXQAI6, {from: accounts[1]});
		const addressgHX1QgK = accounts[0]
		const addressEAuCmNf = accounts[1]
		const uintObc4ZB = BigInt("977")
		const uintKguMF0 = BigInt("516")
		const uintmNEd83O = BigInt("149")
		const uintPJesAEk = BigInt("71")
		const uintsCNpaT = await StakingDextokenJ1JSC9F.getEndTimestamp.call({from: accounts[1]});
		const uintStGU2Ju = await StakingDextokenJ1JSC9F.rewardOf.call(addressgHX1QgK, {from: accounts[3]});
		const boolXCyo4oG = await StakingDextokenJ1JSC9F.freezeAccount.call(addressEAuCmNf, {from: accounts[1]});
//		const uintnQ7O6L8 = await StakingDextokenJ1JSC9F.setRewardRound.call(uintPJesAEk, uintmNEd83O, uintKguMF0, uintObc4ZB, {from: accounts[2]});
//		const uintwK8Vfff = await StakingDextokenJ1JSC9F.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(boolXCyo4oG, true)
		assert.equal(uintStGU2Ju, BigInt("0"))
		assert.equal(uintsCNpaT, BigInt("0"))
		await expect(StakingDextokenJ1JSC9F.setRewardRound.call(uintPJesAEk, uintmNEd83O, uintKguMF0, uintObc4ZB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressODis8Rp = accounts[4]
		const addresswyueyZS = "0x0000000000000000000000000000000000000001"
		const StakingDextokendq6npr8 = await StakingDextoken.new(addressODis8Rp, addresswyueyZS, {from: accounts[4]});
		const uintsTU9Lhd = BigInt("397")
		const uintLGmxDn6 = await StakingDextokendq6npr8.getStartTimestamp.call({from: accounts[5]});
		const uintgQW9ZXh = await StakingDextokendq6npr8.getTotalStakes.call({from: accounts[5]});
//		const uintJ4QlIPu = await StakingDextokendq6npr8.withdraw.call(uintsTU9Lhd, {from: accounts[1]});

		assert.equal(uintLGmxDn6, BigInt("0"))
		assert.equal(uintgQW9ZXh, BigInt("0"))
		await expect(StakingDextokendq6npr8.withdraw.call(uintsTU9Lhd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresscxkoDeJ = accounts[3]
		const addressXzriOVd = accounts[3]
		const StakingDextokenJu6oW0o = await StakingDextoken.new(addresscxkoDeJ, addressXzriOVd, {from: accounts[5]});
		const addresszf5D7Lh = accounts[0]
		const addresszD7g2D2 = accounts[0]
		const uintfuG2hkM = await StakingDextokenJu6oW0o.getTotalStakes.call({from: accounts[2]});
		const uintHPw1IdV = await StakingDextokenJu6oW0o.stakeOf.call(addresszf5D7Lh, {from: accounts[3]});
		const uintzxMM9U = await StakingDextokenJu6oW0o.remainingRewards.call({from: accounts[2]});
//		const addressW1ODtxL = await StakingDextokenJu6oW0o.updateReward.call(addresszD7g2D2, {from: accounts[0]});
//		await StakingDextokenJu6oW0o.claim.call({from: accounts[4]});

		assert.equal(uintHPw1IdV, BigInt("0"))
		assert.equal(uintfuG2hkM, BigInt("0"))
		assert.equal(uintzxMM9U, BigInt("0"))
		await expect(StakingDextokenJu6oW0o.updateReward.call(addresszD7g2D2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRNoym1R = accounts[5]
		const addressEGAqni = accounts[2]
		const StakingDextokenxECxxp = await StakingDextoken.new(addressRNoym1R, addressEGAqni, {from: accounts[2]});
		const addresseHNMFlx = accounts[2]
		const addressAFIbiRJ = "0x0000000000000000000000000000000000000001"
		const addressMhdDNHl = "0x0000000000000000000000000000000000000001"
		const uint9ZzaLM = BigInt("307")
		const addressy0CuqHb = accounts[4]
		const address4S0GWA = await StakingDextokenxECxxp.setBeneficial.call(addresseHNMFlx, {from: accounts[2]});
		const uintwokuBST = await StakingDextokenxECxxp.getEndTimestamp.call({from: accounts[0]});
//		const addressLdRRUfa = await StakingDextokenxECxxp.updateReward.call(addressAFIbiRJ, {from: "0x0000000000000000000000000000000000000001"});
//		await StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]});
//		const uintABV4Gyw = await StakingDextokenxECxxp.earned.call(addressMhdDNHl, {from: accounts[0]});
//		const addressQWZ1FSA = await StakingDextokenxECxxp.capture.call(addressy0CuqHb, uint9ZzaLM, {from: accounts[5]});
//		const uintNG94A1 = await StakingDextokenxECxxp.totalRewards.call({from: accounts[3]});

		assert.equal(uintwokuBST, BigInt("0"))
		await expect(StakingDextokenxECxxp.updateReward.call(addressAFIbiRJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAwhoKIP = accounts[4]
		const addressK8agZBw = "0x0000000000000000000000000000000000000001"
		const StakingDextokendq6npr8 = await StakingDextoken.new(addressAwhoKIP, addressK8agZBw, {from: accounts[4]});
		const addressWYL2p0J = accounts[4]
		const uintYQ6oWdB = BigInt("405")
		const uintPiDKFGF = await StakingDextokendq6npr8.getClaimOf.call(addressWYL2p0J, {from: accounts[2]});
//		const uintJ4QlIPu = await StakingDextokendq6npr8.withdraw.call(uintYQ6oWdB, {from: accounts[1]});

		assert.equal(uintPiDKFGF, BigInt("0"))
		await expect(StakingDextokendq6npr8.withdraw.call(uintYQ6oWdB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYPLCEYW = accounts[5]
		const addressoga5lPP = accounts[2]
		const StakingDextokenxECxxp = await StakingDextoken.new(addressYPLCEYW, addressoga5lPP, {from: accounts[2]});
		const uinttuw66Er = BigInt("904")
		const addressevHiM6i = "0x0000000000000000000000000000000000000002"
//		const uintxMGuWYg = await StakingDextokenxECxxp.deposit.call(uinttuw66Er, {from: accounts[4]});
//		const uintwokuBST = await StakingDextokenxECxxp.getEndTimestamp.call({from: accounts[0]});
//		await StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]});
//		const uintABV4Gyw = await StakingDextokenxECxxp.earned.call(addressevHiM6i, {from: accounts[0]});
//		const uintNG94A1 = await StakingDextokenxECxxp.totalRewards.call({from: accounts[3]});

		await expect(StakingDextokenxECxxp.deposit.call(uinttuw66Er, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskNFjtMg = accounts[4]
		const addressahbla2z = "0x0000000000000000000000000000000000000001"
		const StakingDextokendq6npr8 = await StakingDextoken.new(addresskNFjtMg, addressahbla2z, {from: accounts[4]});
		const addressZSZ8a7u = accounts[3]
		const addressGGTY6z0 = accounts[2]
		const addressIt9DaN3 = accounts[4]
		const uintpTS6SAR = BigInt("397")
		const uintud6v1tn = await StakingDextokendq6npr8.getWithdrawalOf.call(addressZSZ8a7u, {from: accounts[4]});
		const uintPXSBcC0 = await StakingDextokendq6npr8.getClaimOf.call(addressGGTY6z0, {from: accounts[3]});
//		const booljL5sqbp = await StakingDextokendq6npr8.unfreezeAccount.call(addressIt9DaN3, {from: accounts[4]});
//		const uintHf496J3 = await StakingDextokendq6npr8.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uintJ4QlIPu = await StakingDextokendq6npr8.withdraw.call(uintpTS6SAR, {from: accounts[1]});

		assert.equal(uintPXSBcC0, BigInt("0"))
		assert.equal(uintud6v1tn, BigInt("0"))
		await expect(StakingDextokendq6npr8.unfreezeAccount.call(addressIt9DaN3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresscFzMusL = accounts[5]
		const addressbRUWOFm = accounts[2]
		const StakingDextokenxECxxp = await StakingDextoken.new(addresscFzMusL, addressbRUWOFm, {from: accounts[2]});
		const addressPqUA9SU = "0x0000000000000000000000000000000000000001"
		const uintwokuBST = await StakingDextokenxECxxp.getEndTimestamp.call({from: accounts[0]});
//		await StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]});
//		await StakingDextokenxECxxp.claim.call({from: accounts[1]});
//		const uintABV4Gyw = await StakingDextokenxECxxp.earned.call(addressPqUA9SU, {from: accounts[0]});
//		const uintNG94A1 = await StakingDextokenxECxxp.totalRewards.call({from: accounts[3]});

		assert.equal(uintwokuBST, BigInt("0"))
		await expect(StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfmLBUqe = accounts[4]
		const addressnspSRw3 = "0x0000000000000000000000000000000000000001"
		const StakingDextokendq6npr8 = await StakingDextoken.new(addressfmLBUqe, addressnspSRw3, {from: accounts[4]});
		const uintypHKcdW = BigInt("1453")
		const uintXJ9cf1K = BigInt("961")
		const uintxyKU6YP = BigInt("1642")
		const uintFihs7I9 = BigInt("1979")
		const uintA3GjFFQ = BigInt("405")
		const uintIiXv9YA = await StakingDextokendq6npr8.getEndTimestamp.call({from: accounts[1]});
		const uintfosDzgU = await StakingDextokendq6npr8.setRewardRound.call(uintFihs7I9, uintxyKU6YP, uintXJ9cf1K, uintypHKcdW, {from: accounts[4]});
//		const uintJ4QlIPu = await StakingDextokendq6npr8.withdraw.call(uintA3GjFFQ, {from: accounts[1]});

		assert.equal(uintIiXv9YA, BigInt("0"))
		await expect(StakingDextokendq6npr8.withdraw.call(uintA3GjFFQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWiufD4i = accounts[5]
		const addresseTl9tf0 = accounts[2]
		const StakingDextokenxECxxp = await StakingDextoken.new(addressWiufD4i, addresseTl9tf0, {from: accounts[2]});
		const uintLZcrpZZ = BigInt("1035")
		const addressuwSFPAz = accounts[0]
		const addressLRePrXO = accounts[3]
//		const addressCmQPgQT = await StakingDextokenxECxxp.capture.call(addressuwSFPAz, uintLZcrpZZ, {from: accounts[2]});
//		const uintwokuBST = await StakingDextokenxECxxp.getEndTimestamp.call({from: accounts[0]});
//		const uintL9hNvpB = await StakingDextokenxECxxp.earned.call(addressLRePrXO, {from: accounts[2]});
//		await StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]});

		await expect(StakingDextokenxECxxp.capture.call(addressuwSFPAz, uintLZcrpZZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvPEQCxs = accounts[5]
		const address07ITR0 = accounts[2]
		const StakingDextokenxECxxp = await StakingDextoken.new(addressvPEQCxs, address07ITR0, {from: accounts[2]});
		const uintFP2GZl3 = BigInt("835")
		const uintyQup5SO = BigInt("1348")
		const uintmbzc5Ky = BigInt("1798")
		const uintDBoUMWh = BigInt("1420")
		const addressdZpBccN = accounts[1]
//		await StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]});
//		const uintfFHRySy = await StakingDextokenxECxxp.setRewardRound.call(uintDBoUMWh, uintmbzc5Ky, uintyQup5SO, uintFP2GZl3, {from: accounts[2]});
//		const addressczmLbCy = await StakingDextokenxECxxp.updateReward.call(addressdZpBccN, {from: accounts[0]});

		await expect(StakingDextokenxECxxp.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmdesT36 = accounts[4]
		const addressSyEvo7n = accounts[0]
		const StakingDextokenJSrSkGA = await StakingDextoken.new(addressmdesT36, addressSyEvo7n, {from: accounts[4]});
		const addressWMQbX9Y = accounts[3]
		const addressaYZ6Fy = accounts[3]
		const uintM96dSkY = BigInt("1832")
		const addressl9EyMI = accounts[0]
		const uintskzOt9f = await StakingDextokenJSrSkGA.earned.call(addressWMQbX9Y, {from: accounts[3]});
		const uintiXdBYyU = await StakingDextokenJSrSkGA.earned.call(addressaYZ6Fy, {from: accounts[4]});
//		const addressVk0OHmp = await StakingDextokenJSrSkGA.capture.call(addressl9EyMI, uintM96dSkY, {from: accounts[4]});
//		const uintOJkR5Sg = await StakingDextokenJSrSkGA.getTotalStakes.call({from: accounts[2]});

		assert.equal(uintiXdBYyU, BigInt("0"))
		assert.equal(uintskzOt9f, BigInt("0"))
		await expect(StakingDextokenJSrSkGA.capture.call(addressl9EyMI, uintM96dSkY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})