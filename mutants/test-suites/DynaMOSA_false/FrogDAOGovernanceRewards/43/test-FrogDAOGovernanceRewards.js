const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscwz5mc3 = accounts[1]
		const FrogDAOGovernanceRewardsobQRWZ = await FrogDAOGovernanceRewards.new(addresscwz5mc3, {from: accounts[2]});
		const addressZps7FhF = accounts[0]
		const uintU2BxIh7 = BigInt("224")
		const uintlPOMsyg = BigInt("1413")
		const uintvgf4YDm = BigInt("2004")
		const uint256LrAA928 = await FrogDAOGovernanceRewardsobQRWZ.earned.call(addressZps7FhF, {from: accounts[5]});
//		const uint256gWPzem = await FrogDAOGovernanceRewardsobQRWZ.stake.call(uintU2BxIh7, {from: accounts[4]});
//		const uint256IQ1Bj0O = await FrogDAOGovernanceRewardsobQRWZ.devFundAvailable.call({from: accounts[3]});
//		const uint256vFpfyaK = await FrogDAOGovernanceRewardsobQRWZ.withdraw.call(uintlPOMsyg, {from: accounts[5]});
//		const uint2568DwDWM = await FrogDAOGovernanceRewardsobQRWZ.stake.call(uintvgf4YDm, {from: accounts[4]});

		assert.equal(uint256LrAA928, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsobQRWZ.stake.call(uintU2BxIh7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKcWBL7 = accounts[2]
		const FrogDAOGovernanceRewardsBHXhxL = await FrogDAOGovernanceRewards.new(addressKcWBL7, {from: accounts[2]});
		const addressB25Dct1 = accounts[5]
//		await FrogDAOGovernanceRewardsBHXhxL.checkhalve.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsBHXhxL.exit.call({from: accounts[4]});
//		const addressUFBAPSI = await FrogDAOGovernanceRewardsBHXhxL.transferDevAddr.call(addressB25Dct1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsBHXhxL.checkhalve.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWlkZO0J = accounts[0]
		const FrogDAOGovernanceRewardsF0HIxBo = await FrogDAOGovernanceRewards.new(addressWlkZO0J, {from: accounts[0]});
		const uintCBiDM8 = BigInt("942")
		const uintla1dRF = BigInt("1893")
		const uintxXzFYL9 = BigInt("1159")
//		const uint256etMrr9N = await FrogDAOGovernanceRewardsF0HIxBo.notifyRewardAmount.call(uintCBiDM8, {from: accounts[4]});
//		const uint256ydDVTeb = await FrogDAOGovernanceRewardsF0HIxBo.withdrawDevFund.call(uintla1dRF, {from: accounts[5]});
//		const uint256hNMrRQ = await FrogDAOGovernanceRewardsF0HIxBo.stake.call(uintxXzFYL9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsF0HIxBo.notifyRewardAmount.call(uintCBiDM8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressn8otG5 = accounts[4]
		const FrogDAOGovernanceRewardsoWR7EAy = await FrogDAOGovernanceRewards.new(addressn8otG5, {from: accounts[3]});
		const addressD0Y1bXk = "0x0000000000000000000000000000000000000001"
//		await FrogDAOGovernanceRewardsoWR7EAy.exit.call({from: accounts[2]});
//		const uint256R9pLimx = await FrogDAOGovernanceRewardsoWR7EAy.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256CgLtkwB = await FrogDAOGovernanceRewardsoWR7EAy.earned.call(addressD0Y1bXk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsoWR7EAy.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressudcXukk = accounts[1]
		const FrogDAOGovernanceRewardspxfx3GQ = await FrogDAOGovernanceRewards.new(addressudcXukk, {from: "0x0000000000000000000000000000000000000001"});
		const uintYXSjlC4 = BigInt("584")
		const uint256YsBV5n = await FrogDAOGovernanceRewardspxfx3GQ.devFundAvailable.call({from: accounts[1]});
		const uint2569mv61Z = await FrogDAOGovernanceRewardspxfx3GQ.withdraw.call(uintYXSjlC4, {from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVGsFyjH = accounts[4]
		const FrogDAOGovernanceRewardsVsDv0Rf = await FrogDAOGovernanceRewards.new(addressVGsFyjH, {from: accounts[0]});
		const addressotYXa2 = accounts[4]
//		const addressZBsMOz = await FrogDAOGovernanceRewardsVsDv0Rf.transferDevAddr.call(addressotYXa2, {from: accounts[2]});
//		const uint256ZqUq6EV = await FrogDAOGovernanceRewardsVsDv0Rf.lastTimeRewardApplicable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsVsDv0Rf.checkStart.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsVsDv0Rf.getReward.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsVsDv0Rf.transferDevAddr.call(addressotYXa2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDhcaQdk = accounts[4]
		const FrogDAOGovernanceRewardsVsDv0Rf = await FrogDAOGovernanceRewards.new(addressDhcaQdk, {from: accounts[0]});
		const uintCdzlSiY = BigInt("1969")
		const uintQ4KPePi = BigInt("1344")
		const addressZISzAiB = accounts[5]
//		const uint256a0cAHlF = await FrogDAOGovernanceRewardsVsDv0Rf.notifyRewardAmount.call(uintCdzlSiY, {from: accounts[0]});
//		const uint256SqrBhpC = await FrogDAOGovernanceRewardsVsDv0Rf.stake.call(uintQ4KPePi, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZBsMOz = await FrogDAOGovernanceRewardsVsDv0Rf.transferDevAddr.call(addressZISzAiB, {from: accounts[2]});
//		const uint256ZqUq6EV = await FrogDAOGovernanceRewardsVsDv0Rf.lastTimeRewardApplicable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsVsDv0Rf.checkStart.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsVsDv0Rf.getReward.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsVsDv0Rf.notifyRewardAmount.call(uintCdzlSiY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssABSMi1 = accounts[1]
		const FrogDAOGovernanceRewardsobQRWZ = await FrogDAOGovernanceRewards.new(addresssABSMi1, {from: accounts[2]});
		const addressBrqt0Jx = accounts[0]
		const uintz2vOnhg = BigInt("224")
		const uintzhJKrZs = BigInt("1425")
		const uintU3yhDGt = BigInt("2004")
		const uint256EUr91FY = await FrogDAOGovernanceRewardsobQRWZ.devFundAvailable.call({from: accounts[1]});
		const uint256LrAA928 = await FrogDAOGovernanceRewardsobQRWZ.earned.call(addressBrqt0Jx, {from: accounts[5]});
//		const uint256gWPzem = await FrogDAOGovernanceRewardsobQRWZ.stake.call(uintz2vOnhg, {from: accounts[4]});
//		const uint256IQ1Bj0O = await FrogDAOGovernanceRewardsobQRWZ.devFundAvailable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsobQRWZ.checkhalve.call({from: accounts[0]});
//		const uint256vFpfyaK = await FrogDAOGovernanceRewardsobQRWZ.withdraw.call(uintzhJKrZs, {from: accounts[5]});
//		const uint2568DwDWM = await FrogDAOGovernanceRewardsobQRWZ.stake.call(uintU3yhDGt, {from: accounts[4]});

		assert.equal(uint256EUr91FY, BigInt("0"))
		assert.equal(uint256LrAA928, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsobQRWZ.stake.call(uintz2vOnhg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTye8HCh = accounts[4]
		const FrogDAOGovernanceRewardsoWR7EAy = await FrogDAOGovernanceRewards.new(addressTye8HCh, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsoWR7EAy.renounceDevAddr.call({from: accounts[0]});
//		const uint256rBTJb2G = await FrogDAOGovernanceRewardsoWR7EAy.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsoWR7EAy.getReward.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsoWR7EAy.exit.call({from: accounts[2]});
//		const uint256R9pLimx = await FrogDAOGovernanceRewardsoWR7EAy.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsoWR7EAy.renounceDevAddr.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address0IuWDJ = accounts[3]
		const FrogDAOGovernanceRewardskK3N5jE = await FrogDAOGovernanceRewards.new(address0IuWDJ, {from: accounts[3]});
		const uintDAGR0ND = BigInt("1081")
		const uint256szu5k8k = await FrogDAOGovernanceRewardskK3N5jE.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256iBff8Xr = await FrogDAOGovernanceRewardskK3N5jE.withdraw.call(uintDAGR0ND, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256N6zgfD7 = await FrogDAOGovernanceRewardskK3N5jE.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256szu5k8k, BigInt("0"))
		await expect(FrogDAOGovernanceRewardskK3N5jE.withdraw.call(uintDAGR0ND, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTn74qpg = accounts[1]
		const FrogDAOGovernanceRewardsobQRWZ = await FrogDAOGovernanceRewards.new(addressTn74qpg, {from: accounts[2]});
		const addressUVJZJtz = accounts[5]
		const uintUZ5ijsp = BigInt("1860")
		const uintxVvWnSY = BigInt("224")
		const uintBSoT0Vj = BigInt("1276")
		const uint256LrAA928 = await FrogDAOGovernanceRewardsobQRWZ.earned.call(addressUVJZJtz, {from: accounts[5]});
		const uint256tNUjZ4b = await FrogDAOGovernanceRewardsobQRWZ.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256Bjvw4p = await FrogDAOGovernanceRewardsobQRWZ.withdrawDevFund.call(uintUZ5ijsp, {from: accounts[0]});
//		const uint256gWPzem = await FrogDAOGovernanceRewardsobQRWZ.stake.call(uintxVvWnSY, {from: accounts[4]});
//		const uint256IQ1Bj0O = await FrogDAOGovernanceRewardsobQRWZ.devFundAvailable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsobQRWZ.checkhalve.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsobQRWZ.exit.call({from: accounts[2]});
//		const uint2568DwDWM = await FrogDAOGovernanceRewardsobQRWZ.stake.call(uintBSoT0Vj, {from: accounts[4]});

		assert.equal(uint256LrAA928, BigInt("0"))
		assert.equal(uint256tNUjZ4b, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsobQRWZ.withdrawDevFund.call(uintUZ5ijsp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressso5hIuO = accounts[5]
		const FrogDAOGovernanceRewardsfVlnGyc = await FrogDAOGovernanceRewards.new(addressso5hIuO, {from: accounts[3]});
		const addressMREGg8N = accounts[2]
		const uintK9fjF0w = BigInt("730")
		const uint256e8zqh4D = await FrogDAOGovernanceRewardsfVlnGyc.earned.call(addressMREGg8N, {from: accounts[4]});
		const uint256ssO0xNr = await FrogDAOGovernanceRewardsfVlnGyc.rewardPerToken.call({from: accounts[2]});
//		const uint256gogNOkT = await FrogDAOGovernanceRewardsfVlnGyc.withdrawDevFund.call(uintK9fjF0w, {from: accounts[5]});

		assert.equal(uint256e8zqh4D, BigInt("0"))
		assert.equal(uint256ssO0xNr, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsfVlnGyc.withdrawDevFund.call(uintK9fjF0w, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})