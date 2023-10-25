const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressnek9jaF = accounts[4]
		const addresswOFGSI = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB7iy6X8 = await StakingDextoken.new(addressnek9jaF, addresswOFGSI, {from: accounts[1]});
		const addressEBst4to = accounts[0]
		const uintLm2rwwO = await StakingDextokenB7iy6X8.getEndTimestamp.call({from: accounts[2]});
//		const addressRIa4Vpj = await StakingDextokenB7iy6X8.setBeneficial.call(addressEBst4to, {from: accounts[0]});
//		const uintr0aa1K = await StakingDextokenB7iy6X8.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintLm2rwwO, BigInt("0"))
		await expect(StakingDextokenB7iy6X8.setBeneficial.call(addressEBst4to, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmMDcPov = "0x0000000000000000000000000000000000000001"
		const addressTnlor1v = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressmMDcPov, addressTnlor1v, {from: accounts[3]});
		const addressojdYi2 = accounts[1]
		const addressv0lP7i = accounts[0]
		const addressF2vulK5 = accounts[3]
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressojdYi2, {from: accounts[5]});
		const uintCqyifiN = await StakingDextokenDLZgEaP.earned.call(addressv0lP7i, {from: accounts[3]});
//		const addressPKMUWAY = await StakingDextokenDLZgEaP.notFrozen.call(addressF2vulK5, {from: accounts[2]});

		assert.equal(uintCqyifiN, BigInt("0"))
		assert.equal(uintN5EPk0, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notFrozen.call(addressF2vulK5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAiyqqqa = accounts[1]
		const addressODDUXE1 = "0x0000000000000000000000000000000000000001"
		const StakingDextokenRoHbIzF = await StakingDextoken.new(addressAiyqqqa, addressODDUXE1, {from: accounts[0]});
		const addressLgYzjQl = accounts[1]
		const uintwmvurzR = await StakingDextokenRoHbIzF.getStartTimestamp.call({from: accounts[0]});
		const uintlGXPrCH = await StakingDextokenRoHbIzF.stakeOf.call(addressLgYzjQl, {from: accounts[5]});
		const uintOYSmg4O = await StakingDextokenRoHbIzF.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uintOYSmg4O, BigInt("0"))
		assert.equal(uintlGXPrCH, BigInt("0"))
		assert.equal(uintwmvurzR, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressigP3qxj = "0x0000000000000000000000000000000000000001"
		const addressVpgfToQ = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressigP3qxj, addressVpgfToQ, {from: accounts[3]});
		const addressFI89Cge = accounts[1]
		const addresshS0RURe = accounts[0]
		const addressW61oNpQ = accounts[3]
		const uintTrGPDq2 = await StakingDextokenDLZgEaP.remainingRewards.call({from: accounts[2]});
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressFI89Cge, {from: accounts[5]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[2]});
//		const uintCqyifiN = await StakingDextokenDLZgEaP.earned.call(addresshS0RURe, {from: accounts[3]});
//		const addressPKMUWAY = await StakingDextokenDLZgEaP.notFrozen.call(addressW61oNpQ, {from: accounts[2]});

		assert.equal(uintN5EPk0, BigInt("0"))
		assert.equal(uintTrGPDq2, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVvF5xyV = accounts[4]
		const addressgxcJVtF = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB7iy6X8 = await StakingDextoken.new(addressVvF5xyV, addressgxcJVtF, {from: accounts[1]});
		const addressrsld8RZ = accounts[3]
		const addressISQIP2s = accounts[1]
		const addressrMpROrh = accounts[0]
		const uintfGsfP7l = await StakingDextokenB7iy6X8.getWithdrawalOf.call(addressrsld8RZ, {from: accounts[2]});
		const uintLm2rwwO = await StakingDextokenB7iy6X8.getEndTimestamp.call({from: accounts[2]});
//		const addressRIa4Vpj = await StakingDextokenB7iy6X8.setBeneficial.call(addressISQIP2s, {from: accounts[0]});
//		const uintlpVZx00 = await StakingDextokenB7iy6X8.getWithdrawalOf.call(addressrMpROrh, {from: accounts[4]});
//		const uintr0aa1K = await StakingDextokenB7iy6X8.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintLm2rwwO, BigInt("0"))
		assert.equal(uintfGsfP7l, BigInt("0"))
		await expect(StakingDextokenB7iy6X8.setBeneficial.call(addressISQIP2s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressO46MxXq = accounts[4]
		const addressveteWrl = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB7iy6X8 = await StakingDextoken.new(addressO46MxXq, addressveteWrl, {from: accounts[1]});
		const uintvZzirdT = BigInt("1728")
		const addressLoc1Fuk = accounts[0]
		const addressj3jZY58 = accounts[5]
		const uintLm2rwwO = await StakingDextokenB7iy6X8.getEndTimestamp.call({from: accounts[2]});
//		const uintzDbtZzG = await StakingDextokenB7iy6X8.deposit.call(uintvZzirdT, {from: accounts[1]});
//		const addressRIa4Vpj = await StakingDextokenB7iy6X8.setBeneficial.call(addressLoc1Fuk, {from: accounts[0]});
//		const uintjYLjYa = await StakingDextokenB7iy6X8.balanceOf.call(addressj3jZY58, {from: accounts[1]});
//		const uintr0aa1K = await StakingDextokenB7iy6X8.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintLm2rwwO, BigInt("0"))
		await expect(StakingDextokenB7iy6X8.deposit.call(uintvZzirdT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGP86lpR = "0x0000000000000000000000000000000000000001"
		const addressCLQV9K = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressGP86lpR, addressCLQV9K, {from: accounts[3]});
		const addressz5MgYCj = "0x0000000000000000000000000000000000000000"
		const addressjBjG0zv = accounts[0]
		const addressiKTG8id = accounts[1]
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressz5MgYCj, {from: accounts[5]});
		const uintCqyifiN = await StakingDextokenDLZgEaP.earned.call(addressjBjG0zv, {from: accounts[3]});
		const uintYWJe0ez = await StakingDextokenDLZgEaP.totalRewards.call({from: accounts[3]});
//		const addressHMhm9JA = await StakingDextokenDLZgEaP.updateReward.call(addressiKTG8id, {from: accounts[2]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[2]});

		assert.equal(uintCqyifiN, BigInt("0"))
		assert.equal(uintN5EPk0, BigInt("0"))
		assert.equal(uintYWJe0ez, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.updateReward.call(addressiKTG8id, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTyyF7Yl = accounts[2]
		const addressYjgLQu1 = accounts[4]
		const StakingDextokenq91swpy = await StakingDextoken.new(addressTyyF7Yl, addressYjgLQu1, {from: "0x0000000000000000000000000000000000000001"});
		const addressHlnjkWt = accounts[4]
		const addressbbj31RT = accounts[1]
		const uintLyGJBFD = await StakingDextokenq91swpy.balanceOf.call(addressHlnjkWt, {from: accounts[0]});
		const uintQQd1r55 = await StakingDextokenq91swpy.getClaimOf.call(addressbbj31RT, {from: accounts[0]});
		await StakingDextokenq91swpy.claim.call({from: accounts[2]});
		const uintOeMTG48 = await StakingDextokenq91swpy.getStartTimestamp.call({from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressd8igHEY = "0x0000000000000000000000000000000000000001"
		const addressBaIUBbE = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressd8igHEY, addressBaIUBbE, {from: accounts[3]});
		const uint9yCTsg = BigInt("171")
		const addressNdkqiAW = accounts[3]
		const addressrSyND15 = "0x0000000000000000000000000000000000000000"
//		await StakingDextokenDLZgEaP.claim.call({from: accounts[5]});
//		const uintj1Dq3Vs = await StakingDextokenDLZgEaP.withdraw.call(uint9yCTsg, {from: accounts[0]});
//		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressNdkqiAW, {from: accounts[5]});
//		const uintCqyifiN = await StakingDextokenDLZgEaP.earned.call(addressrSyND15, {from: accounts[3]});

		await expect(StakingDextokenDLZgEaP.claim.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address3PwPtE = accounts[4]
		const addresszyc6l3 = accounts[2]
		const StakingDextokendgthV7P = await StakingDextoken.new(address3PwPtE, addresszyc6l3, {from: accounts[3]});
		const uintQwm4krs = BigInt("1114")
		const addressQlgEVWS = accounts[2]
//		const uintqLm6T3L = await StakingDextokendgthV7P.withdraw.call(uintQwm4krs, {from: accounts[0]});
//		const uintoeQ8bhZ = await StakingDextokendgthV7P.remainingRewards.call({from: accounts[0]});
//		const boolXEDhNjP = await StakingDextokendgthV7P.freezeAccount.call(addressQlgEVWS, {from: accounts[1]});

		await expect(StakingDextokendgthV7P.withdraw.call(uintQwm4krs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresst15BdsN = "0x0000000000000000000000000000000000000001"
		const addressHfnhqKd = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addresst15BdsN, addressHfnhqKd, {from: accounts[3]});
		const addresseSccIpq = accounts[1]
		const addressM9K6N9R = accounts[1]
		const addresshjw5hT = "0x0000000000000000000000000000000000000001"
		const uintDY1nknC = await StakingDextokenDLZgEaP.getWithdrawalOf.call(addresseSccIpq, {from: "0x0000000000000000000000000000000000000001"});
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressM9K6N9R, {from: accounts[5]});
		const uintMEzFzZ1 = await StakingDextokenDLZgEaP.rewardOf.call(addresshjw5hT, {from: accounts[0]});

		assert.equal(uintDY1nknC, BigInt("0"))
		assert.equal(uintMEzFzZ1, BigInt("0"))
		assert.equal(uintN5EPk0, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressC0ORNoB = "0x0000000000000000000000000000000000000001"
		const addressxPXsOe = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressC0ORNoB, addressxPXsOe, {from: accounts[3]});
		const addressykw2nxV = accounts[5]
		const uintmzkZiRk = BigInt("390")
		const addressX7wbXid = accounts[0]
		const addressjqBdLWx = "0x0000000000000000000000000000000000000002"
		const uintw5TjQ7d = await StakingDextokenDLZgEaP.getClaimOf.call(addressykw2nxV, {from: accounts[0]});
//		const addressPuhuwiD = await StakingDextokenDLZgEaP.capture.call(addressX7wbXid, uintmzkZiRk, {from: accounts[4]});
//		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressjqBdLWx, {from: accounts[5]});

		assert.equal(uintw5TjQ7d, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.capture.call(addressX7wbXid, uintmzkZiRk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressqf9HiXm = "0x0000000000000000000000000000000000000001"
		const addressw9k71rj = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressqf9HiXm, addressw9k71rj, {from: accounts[3]});
		const addressxtsakd = "0x0000000000000000000000000000000000000001"
		const uintgVD0sZF = BigInt("615")
		const uintONR3VY7 = BigInt("1941")
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressxtsakd, {from: accounts[5]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]});
//		const uintvOeH5zd = await StakingDextokenDLZgEaP.deposit.call(uintgVD0sZF, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMluyn1w = await StakingDextokenDLZgEaP.deposit.call(uintONR3VY7, {from: accounts[4]});

		assert.equal(uintN5EPk0, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshenU5f9 = "0x0000000000000000000000000000000000000001"
		const addressWBvwtHu = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addresshenU5f9, addressWBvwtHu, {from: accounts[3]});
		const addressdaPGDpI = "0x0000000000000000000000000000000000000001"
		const uintZOhKrsA = BigInt("869")
		const addressf9jyc3 = accounts[3]
		const uintQURFeVq = BigInt("615")
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressdaPGDpI, {from: accounts[5]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]});
//		const addressvpqT9Mq = await StakingDextokenDLZgEaP.capture.call(addressf9jyc3, uintZOhKrsA, {from: accounts[3]});
//		const uintvOeH5zd = await StakingDextokenDLZgEaP.deposit.call(uintQURFeVq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintN5EPk0, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskHptKO1 = accounts[2]
		const addressPvXKTFd = accounts[4]
		const StakingDextokendi7xQ1D = await StakingDextoken.new(addresskHptKO1, addressPvXKTFd, {from: accounts[3]});
		const uintbdW0QhX = BigInt("1050")
		const uintU7tphm = BigInt("1988")
		const uintGSvINaj = BigInt("434")
		const uintDZLNy8T = BigInt("287")
		const uintA9K2ltY = await StakingDextokendi7xQ1D.rewardPerToken.call({from: accounts[2]});
		const uintuadtgtn = await StakingDextokendi7xQ1D.getTotalStakes.call({from: accounts[2]});
//		const uintIRysBL = await StakingDextokendi7xQ1D.setRewardRound.call(uintDZLNy8T, uintGSvINaj, uintU7tphm, uintbdW0QhX, {from: accounts[3]});

		assert.equal(uintA9K2ltY, BigInt("0"))
		assert.equal(uintuadtgtn, BigInt("0"))
		await expect(StakingDextokendi7xQ1D.setRewardRound.call(uintDZLNy8T, uintGSvINaj, uintU7tphm, uintbdW0QhX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAdWYkU0 = "0x0000000000000000000000000000000000000001"
		const addressyoHiL8Q = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressAdWYkU0, addressyoHiL8Q, {from: accounts[3]});
		const addressj1lhyIZ = "0x0000000000000000000000000000000000000002"
		const addressuuS3dvU = accounts[0]
		const uinthhGPzLP = BigInt("809")
		const uint1DROaI = BigInt("1820")
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressj1lhyIZ, {from: accounts[5]});
//		const bool9lEFp8 = await StakingDextokenDLZgEaP.unfreezeAccount.call(addressuuS3dvU, {from: accounts[3]});
//		const uintCaE8uR1 = await StakingDextokenDLZgEaP.withdraw.call(uinthhGPzLP, {from: accounts[1]});
//		const uintc3greJP = await StakingDextokenDLZgEaP.deposit.call(uint1DROaI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintN5EPk0, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.unfreezeAccount.call(addressuuS3dvU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstTx4Z1 = "0x0000000000000000000000000000000000000001"
		const addressfR1Wvfo = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addresstTx4Z1, addressfR1Wvfo, {from: accounts[3]});
		const addressBdFut8m = "0x0000000000000000000000000000000000000001"
		const uintCJIspWo = BigInt("869")
		const addressD1ANFav = accounts[4]
		const uintu3lrVn1 = BigInt("615")
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressBdFut8m, {from: accounts[5]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]});
//		const uintYQbGRCo = await StakingDextokenDLZgEaP.remainingRewards.call({from: accounts[3]});
//		const addressvpqT9Mq = await StakingDextokenDLZgEaP.capture.call(addressD1ANFav, uintCJIspWo, {from: accounts[3]});
//		const uintvOeH5zd = await StakingDextokenDLZgEaP.deposit.call(uintu3lrVn1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintN5EPk0, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGnxtEO = "0x0000000000000000000000000000000000000001"
		const addressky0OJ5U = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressGnxtEO, addressky0OJ5U, {from: accounts[3]});
		const addressNDY0GXD = "0x0000000000000000000000000000000000000001"
		const uintfjZ6KVs = BigInt("869")
		const addresszzKuw5 = "0x0000000000000000000000000000000000000001"
		const uintNourNoN = BigInt("615")
		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressNDY0GXD, {from: accounts[5]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]});
//		const addressvpqT9Mq = await StakingDextokenDLZgEaP.capture.call(addresszzKuw5, uintfjZ6KVs, {from: accounts[3]});
//		const uintvOeH5zd = await StakingDextokenDLZgEaP.deposit.call(uintNourNoN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintN5EPk0, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAyKfmG = accounts[4]
		const addressSln75f = accounts[2]
		const StakingDextokenEb6FhLx = await StakingDextoken.new(addressAyKfmG, addressSln75f, {from: accounts[4]});
		const addressrew708p = accounts[1]
		const addressTdfmaz = accounts[4]
		const uintdUqyBIz = await StakingDextokenEb6FhLx.lastTimeRewardApplicable.call({from: accounts[1]});
		const boolHbVRWze = await StakingDextokenEb6FhLx.freezeAccount.call(addressrew708p, {from: accounts[4]});
		const uintqizpXS3 = await StakingDextokenEb6FhLx.getStartTimestamp.call({from: accounts[1]});
		const uintkBnPmA4 = await StakingDextokenEb6FhLx.getWithdrawalOf.call(addressTdfmaz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHbVRWze, true)
		assert.equal(uintdUqyBIz, BigInt("0"))
		assert.equal(uintkBnPmA4, BigInt("0"))
		assert.equal(uintqizpXS3, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressXjJwg9w = "0x0000000000000000000000000000000000000001"
		const addressQYErd8m = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressXjJwg9w, addressQYErd8m, {from: accounts[3]});
		const addressaqCsqJ = accounts[4]
		const addressklelWF = "0x00000000000000000000000000000000000000-1"
		const uintT7vAkX = BigInt("869")
		const addressqQJACPd = accounts[3]
		const addressDZxO5Ov = accounts[1]
		const uintxrXiRXB = await StakingDextokenDLZgEaP.getClaimOf.call(addressaqCsqJ, {from: accounts[3]});
//		const uintN5EPk0 = await StakingDextokenDLZgEaP.earned.call(addressklelWF, {from: accounts[5]});
//		const uintFxjWuz = await StakingDextokenDLZgEaP.getStartTimestamp.call({from: accounts[0]});
//		const uintSEqPP8H = await StakingDextokenDLZgEaP.getEndTimestamp.call({from: accounts[2]});
//		const addressvpqT9Mq = await StakingDextokenDLZgEaP.capture.call(addressqQJACPd, uintT7vAkX, {from: accounts[3]});
//		const uintRrkKdHE = await StakingDextokenDLZgEaP.rewardOf.call(addressDZxO5Ov, {from: accounts[0]});
//		const uintLW2euSp = await StakingDextokenDLZgEaP.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintxrXiRXB, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.earned.call(addressklelWF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuvdoE7M = "0x0000000000000000000000000000000000000001"
		const addressbYNBkCa = accounts[4]
		const StakingDextokenDLZgEaP = await StakingDextoken.new(addressuvdoE7M, addressbYNBkCa, {from: accounts[3]});
		const addressRM5OTj = accounts[2]
		const addressIhL4xtl = "0x0000000000000000000000000000000000000001"
		const addressgDqWCCr = await StakingDextokenDLZgEaP.setBeneficial.call(addressRM5OTj, {from: accounts[3]});
		const uinti8NDKnn = await StakingDextokenDLZgEaP.balanceOf.call(addressIhL4xtl, {from: accounts[2]});
//		await StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]});

		assert.equal(uinti8NDKnn, BigInt("0"))
		await expect(StakingDextokenDLZgEaP.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})