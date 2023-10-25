const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressIxxsIPo = accounts[2]
		const addressSMrxMvb = accounts[3]
		const StakingDextokenzqgluPk = await StakingDextoken.new(addressIxxsIPo, addressSMrxMvb, {from: accounts[2]});
		const addressBiyFisL = accounts[3]
		const addressyRjlVYq = accounts[0]
		const addressJGRBs7e = await StakingDextokenzqgluPk.setBeneficial.call(addressBiyFisL, {from: accounts[2]});
		const uintDWBsd6v = await StakingDextokenzqgluPk.getTotalStakes.call({from: accounts[0]});
		const uintqsgncC = await StakingDextokenzqgluPk.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolbFXkYFM = await StakingDextokenzqgluPk.unfreezeAccount.call(addressyRjlVYq, {from: accounts[0]});
//		const uintQ4txCh1 = await StakingDextokenzqgluPk.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDWBsd6v, BigInt("0"))
		assert.equal(uintqsgncC, BigInt("0"))
		await expect(StakingDextokenzqgluPk.unfreezeAccount.call(addressyRjlVYq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address1dlC89 = accounts[1]
		const addressV0sChe = accounts[3]
		const StakingDextokenxN3JVat = await StakingDextoken.new(address1dlC89, addressV0sChe, {from: accounts[1]});
		const uintDUQ9owT = BigInt("1130")
		const addressPV00Rc = accounts[4]
		const addressVNIAylx = accounts[3]
		const addressnHSTwzI = "0x0000000000000000000000000000000000000001"
//		const uintzFH6bpr = await StakingDextokenxN3JVat.withdraw.call(uintDUQ9owT, {from: accounts[0]});
//		const addressbD7nZH6 = await StakingDextokenxN3JVat.updateReward.call(addressPV00Rc, {from: accounts[1]});
//		const uintFSLOmBh = await StakingDextokenxN3JVat.rewardOf.call(addressVNIAylx, {from: accounts[1]});
//		const boolzREHW9X = await StakingDextokenxN3JVat.unfreezeAccount.call(addressnHSTwzI, {from: accounts[1]});

		await expect(StakingDextokenxN3JVat.withdraw.call(uintDUQ9owT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressG7hxEe = accounts[2]
		const address8TKBtx = accounts[2]
		const StakingDextoken8Ncpcm = await StakingDextoken.new(addressG7hxEe, address8TKBtx, {from: accounts[2]});
		const addressMOt1S50 = accounts[1]
		const addressbmXro4V = accounts[4]
		const addressjLwpq6Q = "0x0000000000000000000000000000000000000001"
		const uintTPjHasc = BigInt("709")
		const uint47KqGZ = BigInt("755")
		const uintxP4qDOG = BigInt("567")
		const uintASAz3H = BigInt("1780")
		const uintllmNEja = await StakingDextoken8Ncpcm.getWithdrawalOf.call(addressMOt1S50, {from: accounts[0]});
		const uintzPJVpbB = await StakingDextoken8Ncpcm.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintymSFFxt = await StakingDextoken8Ncpcm.stakeOf.call(addressbmXro4V, {from: accounts[3]});
//		const addressurEjB6 = await StakingDextoken8Ncpcm.updateReward.call(addressjLwpq6Q, {from: accounts[5]});
//		const uintvZmwlHb = await StakingDextoken8Ncpcm.setRewardRound.call(uintASAz3H, uintxP4qDOG, uint47KqGZ, uintTPjHasc, {from: accounts[3]});

		assert.equal(uintllmNEja, BigInt("0"))
		assert.equal(uintymSFFxt, BigInt("0"))
		assert.equal(uintzPJVpbB, BigInt("0"))
		await expect(StakingDextoken8Ncpcm.updateReward.call(addressjLwpq6Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEQ3OBrn = accounts[3]
		const addressVcHt40 = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressEQ3OBrn, addressVcHt40, {from: accounts[2]});
		const addressrgs71EL = accounts[0]
		const uintJ8h92A3 = BigInt("1289")
		const uintwr0aNAy = await StakingDextokenlzNWPit.earned.call(addressrgs71EL, {from: accounts[5]});
//		const uintwmIxaJw = await StakingDextokenlzNWPit.deposit.call(uintJ8h92A3, {from: accounts[3]});

		assert.equal(uintwr0aNAy, BigInt("0"))
		await expect(StakingDextokenlzNWPit.deposit.call(uintJ8h92A3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressl08ti7f = accounts[3]
		const addressGC1xs6t = accounts[1]
		const StakingDextokenjxzdMbs = await StakingDextoken.new(addressl08ti7f, addressGC1xs6t, {from: accounts[2]});
		const address9imNvF = "0x0000000000000000000000000000000000000001"
		const addresswcnOxfe = accounts[3]
		const uinthODaDEi = await StakingDextokenjxzdMbs.getTotalStakes.call({from: accounts[3]});
		const uintbMyNMG9 = await StakingDextokenjxzdMbs.getWithdrawalOf.call(address9imNvF, {from: accounts[4]});
//		const boolyUd2KRt = await StakingDextokenjxzdMbs.unfreezeAccount.call(addresswcnOxfe, {from: accounts[2]});

		assert.equal(uintbMyNMG9, BigInt("0"))
		assert.equal(uinthODaDEi, BigInt("0"))
		await expect(StakingDextokenjxzdMbs.unfreezeAccount.call(addresswcnOxfe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressg5UNkUd = accounts[4]
		const addressDrC5dcL = accounts[2]
		const StakingDextokeniIAfY1A = await StakingDextoken.new(addressg5UNkUd, addressDrC5dcL, {from: accounts[2]});
		const addressSQPCNrZ = accounts[0]
		const addressCs4Zisg = accounts[5]
		const addresshWVIYFi = "0x0000000000000000000000000000000000000001"
		const uintXnlXYhV = await StakingDextokeniIAfY1A.rewardOf.call(addressSQPCNrZ, {from: accounts[2]});
//		const boolIkct7DI = await StakingDextokeniIAfY1A.freezeAccount.call(addressCs4Zisg, {from: accounts[1]});
//		const uintOrgFyqK = await StakingDextokeniIAfY1A.rewardOf.call(addresshWVIYFi, {from: accounts[4]});
//		await StakingDextokeniIAfY1A.notifyRewards.call({from: accounts[5]});

		assert.equal(uintXnlXYhV, BigInt("0"))
		await expect(StakingDextokeniIAfY1A.freezeAccount.call(addressCs4Zisg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEbK0EUv = accounts[3]
		const addressW3Qj6ee = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressEbK0EUv, addressW3Qj6ee, {from: accounts[2]});
		const addressPRuDwC1 = accounts[3]
		const addressXoklcwa = accounts[2]
		const uintlUFltPj = BigInt("1289")
		const uintwr0aNAy = await StakingDextokenlzNWPit.earned.call(addressPRuDwC1, {from: accounts[5]});
		const uintSPIrni4 = await StakingDextokenlzNWPit.getClaimOf.call(addressXoklcwa, {from: accounts[2]});
		const uintkFz08HF = await StakingDextokenlzNWPit.remainingRewards.call({from: accounts[0]});
//		const uintwmIxaJw = await StakingDextokenlzNWPit.deposit.call(uintlUFltPj, {from: accounts[3]});

		assert.equal(uintSPIrni4, BigInt("0"))
		assert.equal(uintkFz08HF, BigInt("0"))
		assert.equal(uintwr0aNAy, BigInt("0"))
		await expect(StakingDextokenlzNWPit.deposit.call(uintlUFltPj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCCacPdY = accounts[3]
		const addressFb80g1n = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressCCacPdY, addressFb80g1n, {from: accounts[2]});
		const uintRrx8KKJ = BigInt("1289")
//		await StakingDextokenlzNWPit.claim.call({from: accounts[1]});
//		const uintwmIxaJw = await StakingDextokenlzNWPit.deposit.call(uintRrx8KKJ, {from: accounts[3]});

		await expect(StakingDextokenlzNWPit.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressso71y7 = accounts[3]
		const addressSwKeWyF = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressso71y7, addressSwKeWyF, {from: accounts[2]});
		const addressCWcbD4e = accounts[4]
		const uintwr0aNAy = await StakingDextokenlzNWPit.earned.call(addressCWcbD4e, {from: accounts[5]});
//		await StakingDextokenlzNWPit.notifyRewards.call({from: accounts[2]});
//		const uintkx84BDj = await StakingDextokenlzNWPit.rewardPerToken.call({from: accounts[2]});
		await StakingDextokenlzNWPit.notifyRewards.call({from: accounts[2]});

		assert.equal(uintwr0aNAy, BigInt("0"))
		await expect(StakingDextokenlzNWPit.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressH1BU0Zf = accounts[4]
		const addressNjTh1LJ = accounts[4]
		const StakingDextokenPrGvC38 = await StakingDextoken.new(addressH1BU0Zf, addressNjTh1LJ, {from: accounts[0]});
		const addressAnuMK1z = accounts[2]
		const uintZQd9f8c = BigInt("12")
		const addresssXMAFBs = accounts[1]
		const addressO03KTAe = accounts[1]
		const uintasHlUu4 = await StakingDextokenPrGvC38.getStartTimestamp.call({from: accounts[5]});
		const uintfCTKwNr = await StakingDextokenPrGvC38.earned.call(addressAnuMK1z, {from: accounts[5]});
//		const addressSGPHnoR = await StakingDextokenPrGvC38.capture.call(addresssXMAFBs, uintZQd9f8c, {from: accounts[4]});
//		const uintkd9brC3 = await StakingDextokenPrGvC38.rewardPerToken.call({from: accounts[1]});
//		const uinteKTn9Es = await StakingDextokenPrGvC38.balanceOf.call(addressO03KTAe, {from: accounts[2]});

		assert.equal(uintasHlUu4, BigInt("0"))
		assert.equal(uintfCTKwNr, BigInt("0"))
		await expect(StakingDextokenPrGvC38.capture.call(addresssXMAFBs, uintZQd9f8c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshjSUfN = accounts[3]
		const addresssPUsRpJ = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addresshjSUfN, addresssPUsRpJ, {from: accounts[2]});
		const addressYbtr4H9 = accounts[1]
		const addressSW7Ak9 = accounts[4]
		const uintwr0aNAy = await StakingDextokenlzNWPit.earned.call(addressYbtr4H9, {from: accounts[5]});
		const boolhD46g2R = await StakingDextokenlzNWPit.freezeAccount.call(addressSW7Ak9, {from: accounts[2]});

		assert.equal(boolhD46g2R, true)
		assert.equal(uintwr0aNAy, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressDAM6x06 = accounts[3]
		const addressqVPdOoc = accounts[0]
		const StakingDextokeneyU2fp7 = await StakingDextoken.new(addressDAM6x06, addressqVPdOoc, {from: "0x0000000000000000000000000000000000000001"});
		const addresscAIQpTl = accounts[4]
		await StakingDextokeneyU2fp7.claim.call({from: accounts[0]});
		const addressi6YJi0M = await StakingDextokeneyU2fp7.setBeneficial.call(addresscAIQpTl, {from: accounts[0]});
	});

	it('test for StakingDextoken', async () => {
		const addressxP6gcu = accounts[3]
		const addresshzvoxU3 = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressxP6gcu, addresshzvoxU3, {from: accounts[2]});
		const addressT8YVIcy = accounts[5]
		const uintJxK5Wjw = BigInt("1755")
		const addressMxGC209 = "0x0000000000000000000000000000000000000001"
		const uintek4YU78 = BigInt("1299")
		const addressJAaHAP = accounts[4]
		const uintwr0aNAy = await StakingDextokenlzNWPit.earned.call(addressT8YVIcy, {from: accounts[5]});
//		const addressWgrJxK = await StakingDextokenlzNWPit.capture.call(addressMxGC209, uintJxK5Wjw, {from: accounts[2]});
//		const addressq02lq0I = await StakingDextokenlzNWPit.capture.call(addressJAaHAP, uintek4YU78, {from: accounts[2]});

		assert.equal(uintwr0aNAy, BigInt("0"))
		await expect(StakingDextokenlzNWPit.capture.call(addressMxGC209, uintJxK5Wjw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLDMTizU = accounts[3]
		const address4zl8cF = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressLDMTizU, address4zl8cF, {from: accounts[2]});
		const uintbN2zFrh = BigInt("1947")
		const uintmzSvxd0 = BigInt("1105")
		const uint14ipFw = BigInt("590")
		const uintl1FPfEr = BigInt("1303")
		const addressjMtgqwr = accounts[5]
		const uintZ5nBcn = BigInt("667")
		const uintL1ucHy = await StakingDextokenlzNWPit.setRewardRound.call(uintl1FPfEr, uint14ipFw, uintmzSvxd0, uintbN2zFrh, {from: accounts[2]});
		const uintoxZ2kad = await StakingDextokenlzNWPit.rewardOf.call(addressjMtgqwr, {from: accounts[0]});
		const uintOS5UeW8 = await StakingDextokenlzNWPit.getEndTimestamp.call({from: accounts[4]});
//		const uintRHMdpQc = await StakingDextokenlzNWPit.withdraw.call(uintZ5nBcn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintOS5UeW8, BigInt("0"))
		assert.equal(uintoxZ2kad, BigInt("0"))
		await expect(StakingDextokenlzNWPit.withdraw.call(uintZ5nBcn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressW7NFJX4 = accounts[3]
		const addressl4Uv5IA = accounts[4]
		const StakingDextokenlzNWPit = await StakingDextoken.new(addressW7NFJX4, addressl4Uv5IA, {from: accounts[2]});
		const addressInQS6UZ = accounts[1]
		const uinteKHGvmm = BigInt("707")
		const addressWYvSlrZ = accounts[4]
		const uintwr0aNAy = await StakingDextokenlzNWPit.earned.call(addressInQS6UZ, {from: accounts[5]});
//		const addressaKJG0iM = await StakingDextokenlzNWPit.capture.call(addressWYvSlrZ, uinteKHGvmm, {from: accounts[2]});
//		const uintvpMA61m = await StakingDextokenlzNWPit.getStartTimestamp.call({from: accounts[4]});

		assert.equal(uintwr0aNAy, BigInt("0"))
		await expect(StakingDextokenlzNWPit.capture.call(addressWYvSlrZ, uinteKHGvmm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})