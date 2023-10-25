const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hR1JWeb = await PRDZstakingV2.new({from: accounts[5]});
		const uintsYgWqer = BigInt("392")
		const uintBfzixu5 = await PRDZstakingV2hR1JWeb.getTotalStaked.call({from: accounts[0]});
//		const uintlbSviY = await PRDZstakingV2hR1JWeb.updateScoreEth.call(uintsYgWqer, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBfzixu5, BigInt("0"))
		await expect(PRDZstakingV2hR1JWeb.updateScoreEth.call(uintsYgWqer, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gLeG7L = await PRDZstakingV2.new({from: accounts[1]});
		const uintcBwVYfT = BigInt("2011")
		const uintwINWHM = BigInt("259")
		const uintU9cVDT7 = await PRDZstakingV2gLeG7L.getTotalUnStaked.call({from: accounts[4]});
//		const uintMl1zJZY = await PRDZstakingV2gLeG7L.unstake.call(uintcBwVYfT, {from: accounts[0]});
//		const uintRdyrYIo = await PRDZstakingV2gLeG7L.stake.call(uintwINWHM, {from: accounts[4]});

		assert.equal(uintU9cVDT7, BigInt("0"))
		await expect(PRDZstakingV2gLeG7L.unstake.call(uintcBwVYfT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2BwIDEip = await PRDZstakingV2.new({from: accounts[2]});
		const uintc3GpV3V = BigInt("88")
		const uintNRh6GgN = BigInt("1842")
		const addressLWIoqMN = accounts[0]
		const uintglxNQoc = await PRDZstakingV2BwIDEip.getTotalFeeCollected.call({from: accounts[1]});
//		const uintU4hWVh5 = await PRDZstakingV2BwIDEip.updateScoreEth.call(uintc3GpV3V, {from: "0x0000000000000000000000000000000000000001"});
//		const uintY24YTv = await PRDZstakingV2BwIDEip.unstake.call(uintNRh6GgN, {from: accounts[0]});
//		const uintd0RsBg = await PRDZstakingV2BwIDEip.getStakingScore.call(addressLWIoqMN, {from: accounts[4]});

		assert.equal(uintglxNQoc, BigInt("0"))
		await expect(PRDZstakingV2BwIDEip.updateScoreEth.call(uintc3GpV3V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oWCO8Fy = await PRDZstakingV2.new({from: accounts[5]});
		const addressn47H6Bs = accounts[1]
		const addressRNEoEZf = "0x0000000000000000000000000000000000000001"
		const uintN0h84pE = await PRDZstakingV2oWCO8Fy.getStakingScore.call(addressn47H6Bs, {from: accounts[3]});
//		await PRDZstakingV2oWCO8Fy.claimScoreEth.call({from: accounts[2]});
//		const uinttNX0gQU = await PRDZstakingV2oWCO8Fy.getPendingReward.call(addressRNEoEZf, {from: accounts[3]});

		assert.equal(uintN0h84pE, BigInt("0"))
		await expect(PRDZstakingV2oWCO8Fy.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yN4pmUU = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressByVejP2 = accounts[3]
		const addressdquCqSB = accounts[0]
		const uintcYFIqg = await PRDZstakingV2yN4pmUU.getScoreEth.call(addressByVejP2, {from: accounts[4]});
		await PRDZstakingV2yN4pmUU.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uintrZ5n8YQ = await PRDZstakingV2yN4pmUU.getScoreEth.call(addressdquCqSB, {from: accounts[5]});
		await PRDZstakingV2yN4pmUU.deposit.call({from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2z0orraE = await PRDZstakingV2.new({from: accounts[2]});
		const uintmFYAaq = BigInt("657")
		const uintGeZSFmn = BigInt("1156")
		const uintfMYxhOc = await PRDZstakingV2z0orraE.getTotalClaimed.call({from: accounts[1]});
		const uintrPuN7LS = await PRDZstakingV2z0orraE.getTotalUnStaked.call({from: accounts[2]});
//		const uintzn5xABE = await PRDZstakingV2z0orraE.unstake.call(uintmFYAaq, {from: accounts[1]});
//		const uintBUShsyA = await PRDZstakingV2z0orraE.stake.call(uintGeZSFmn, {from: accounts[4]});
//		await PRDZstakingV2z0orraE.claimReward.call({from: accounts[4]});
//		const uintBmsp2dS = await PRDZstakingV2z0orraE.getTotalFeeCollected.call({from: accounts[5]});

		assert.equal(uintfMYxhOc, BigInt("0"))
		assert.equal(uintrPuN7LS, BigInt("0"))
		await expect(PRDZstakingV2z0orraE.unstake.call(uintmFYAaq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV20elaN2 = await PRDZstakingV2.new({from: accounts[2]});
		const addressPw89ihK = accounts[0]
		const addressmtSNSm0 = accounts[2]
		const addressEWqIFec = accounts[1]
		const addressiwdCycA = "0x0000000000000000000000000000000000000001"
		const uintNNtLEWY = await PRDZstakingV20elaN2.getScoreEth.call(addressPw89ihK, {from: accounts[0]});
//		const addressopFTK5 = await PRDZstakingV20elaN2.transferOwnership.call(addressmtSNSm0, {from: accounts[1]});
//		const uintBfnzk2 = await PRDZstakingV20elaN2.getStakingScore.call(addressEWqIFec, {from: accounts[1]});
//		await PRDZstakingV20elaN2.deposit.call({from: accounts[0]});
//		const uintLM6okO = await PRDZstakingV20elaN2.getTotalFeeCollected.call({from: accounts[2]});
//		const addresslhWQHh9 = await PRDZstakingV20elaN2.transferOwnership.call(addressiwdCycA, {from: accounts[3]});

		assert.equal(uintNNtLEWY, BigInt("0"))
		await expect(PRDZstakingV20elaN2.transferOwnership.call(addressmtSNSm0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2i7iJpic = await PRDZstakingV2.new({from: accounts[4]});
		const addressLP7NmQN = accounts[4]
		const address3TiULH = accounts[3]
		const uintirRMoXy = await PRDZstakingV2i7iJpic.getStakingScore.call(addressLP7NmQN, {from: accounts[3]});
		const uint4nN0aW = await PRDZstakingV2i7iJpic.getTotalFeeCollected.call({from: accounts[0]});
		const addressWK0qSSa = await PRDZstakingV2i7iJpic.transferOwnership.call(address3TiULH, {from: accounts[4]});
//		await PRDZstakingV2i7iJpic.claimScoreEth.call({from: accounts[3]});

		assert.equal(uint4nN0aW, BigInt("0"))
		assert.equal(uintirRMoXy, BigInt("0"))
		await expect(PRDZstakingV2i7iJpic.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oWCO8Fy = await PRDZstakingV2.new({from: accounts[5]});
		const addressdPZBU1Y = accounts[1]
		const uintS4e9G4 = BigInt("585")
		const uintxQ7nw2M = BigInt("1943")
		const addressDP4quF = "0x0000000000000000000000000000000000000000"
		const uintN0h84pE = await PRDZstakingV2oWCO8Fy.getStakingScore.call(addressdPZBU1Y, {from: accounts[3]});
//		const uintnuaFPUT = await PRDZstakingV2oWCO8Fy.stake.call(uintS4e9G4, {from: accounts[0]});
//		const uintA5D0DVR = await PRDZstakingV2oWCO8Fy.stake.call(uintxQ7nw2M, {from: accounts[1]});
//		const uinttNX0gQU = await PRDZstakingV2oWCO8Fy.getPendingReward.call(addressDP4quF, {from: accounts[3]});

		assert.equal(uintN0h84pE, BigInt("0"))
		await expect(PRDZstakingV2oWCO8Fy.stake.call(uintS4e9G4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gLeG7L = await PRDZstakingV2.new({from: accounts[1]});
		const uintdUiV5gG = BigInt("2011")
		const uintl6Rdo2X = BigInt("261")
//		await PRDZstakingV2gLeG7L.onlyOwner.call({from: accounts[4]});
//		const uintU9cVDT7 = await PRDZstakingV2gLeG7L.getTotalUnStaked.call({from: accounts[4]});
//		const uintMl1zJZY = await PRDZstakingV2gLeG7L.unstake.call(uintdUiV5gG, {from: accounts[0]});
//		const uintoZbrGSR = await PRDZstakingV2gLeG7L.getNumberOfHolders.call({from: accounts[3]});
//		const uintRdyrYIo = await PRDZstakingV2gLeG7L.stake.call(uintl6Rdo2X, {from: accounts[4]});

		await expect(PRDZstakingV2gLeG7L.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2f2xCnuh = await PRDZstakingV2.new({from: accounts[2]});
		const uintj0a4IGj = await PRDZstakingV2f2xCnuh.getNumberOfHolders.call({from: accounts[2]});
//		await PRDZstakingV2f2xCnuh.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2f2xCnuh.claimScoreEth.call({from: accounts[3]});

		assert.equal(uintj0a4IGj, BigInt("0"))
		await expect(PRDZstakingV2f2xCnuh.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hR1JWeb = await PRDZstakingV2.new({from: accounts[5]});
		const uintTk49OKQ = BigInt("358")
		const uintp26Mmjr = BigInt("1022")
		const uintox15dD = await PRDZstakingV2hR1JWeb.updateOffer.call(uintp26Mmjr, uintTk49OKQ, {from: accounts[5]});
		const uintBfzixu5 = await PRDZstakingV2hR1JWeb.getTotalStaked.call({from: accounts[0]});

		assert.equal(uintBfzixu5, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tteFf1y = await PRDZstakingV2.new({from: accounts[1]});
		const addresskvu2WQG = accounts[0]
		const uintuo2Uo70 = BigInt("587")
//		await PRDZstakingV2tteFf1y.deposit.call({from: accounts[3]});
//		const uintYkPUx7 = await PRDZstakingV2tteFf1y.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSS2vrF = await PRDZstakingV2tteFf1y.transferOwnership.call(addresskvu2WQG, {from: accounts[3]});
//		const uintSdE4xTF = await PRDZstakingV2tteFf1y.updateScoreEth.call(uintuo2Uo70, {from: accounts[2]});

		await expect(PRDZstakingV2tteFf1y.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oWCO8Fy = await PRDZstakingV2.new({from: accounts[5]});
		const addressdGr0auY = accounts[2]
		const uintN0h84pE = await PRDZstakingV2oWCO8Fy.getStakingScore.call(addressdGr0auY, {from: accounts[3]});
		const uinteft2xW9 = await PRDZstakingV2oWCO8Fy.getNumberOfHolders.call({from: accounts[0]});
		const uintOMK3WYV = await PRDZstakingV2oWCO8Fy.getTotalStaked.call({from: accounts[2]});
//		await PRDZstakingV2oWCO8Fy.claimScoreEth.call({from: accounts[2]});
//		const uint8C4Fyb = await PRDZstakingV2oWCO8Fy.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2oWCO8Fy.claimReward.call({from: accounts[1]});

		assert.equal(uintN0h84pE, BigInt("0"))
		assert.equal(uintOMK3WYV, BigInt("0"))
		assert.equal(uinteft2xW9, BigInt("0"))
		await expect(PRDZstakingV2oWCO8Fy.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oWCO8Fy = await PRDZstakingV2.new({from: accounts[5]});
		const addressxOTjTt = "0x00000000000000000000000000000000000000-1"
//		await PRDZstakingV2oWCO8Fy.claimReward.call({from: accounts[1]});
//		await PRDZstakingV2oWCO8Fy.deposit.call({from: accounts[4]});
//		const uinttNX0gQU = await PRDZstakingV2oWCO8Fy.getPendingReward.call(addressxOTjTt, {from: accounts[3]});

		await expect(PRDZstakingV2oWCO8Fy.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RykTERI = await PRDZstakingV2.new({from: accounts[0]});
		const uintBnn4RvI = BigInt("695")
		const uintj1TKnez = BigInt("14")
		const uintRbnuk76 = await PRDZstakingV2RykTERI.updateScoreEth.call(uintBnn4RvI, {from: accounts[0]});
		const uintvpVBR3z = await PRDZstakingV2RykTERI.getTotalStaked.call({from: accounts[1]});
//		const uintIXQE5DB = await PRDZstakingV2RykTERI.stake.call(uintj1TKnez, {from: accounts[0]});

		assert.equal(uintvpVBR3z, BigInt("0"))
		await expect(PRDZstakingV2RykTERI.stake.call(uintj1TKnez, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RykTERI = await PRDZstakingV2.new({from: accounts[0]});
		const addressIeufZXA = "0x0000000000000000000000000000000000000001"
		const uintvZya1q5 = BigInt("0")
		const uintNbjoQ19 = await PRDZstakingV2RykTERI.getTotalClaimed.call({from: accounts[1]});
		const uintz41q0cl = await PRDZstakingV2RykTERI.getStakingScore.call(addressIeufZXA, {from: accounts[3]});
//		const uintIXQE5DB = await PRDZstakingV2RykTERI.stake.call(uintvZya1q5, {from: accounts[0]});
//		await PRDZstakingV2RykTERI.deposit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintNbjoQ19, BigInt("0"))
		assert.equal(uintz41q0cl, BigInt("0"))
		await expect(PRDZstakingV2RykTERI.stake.call(uintvZya1q5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2oWCO8Fy = await PRDZstakingV2.new({from: accounts[5]});
		const addressrL2PFO = "0x00000000000000000000000000000000000000-2"
//		await PRDZstakingV2oWCO8Fy.deposit.call({from: accounts[4]});
//		const uinttNX0gQU = await PRDZstakingV2oWCO8Fy.getPendingReward.call(addressrL2PFO, {from: accounts[3]});

		await expect(PRDZstakingV2oWCO8Fy.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})