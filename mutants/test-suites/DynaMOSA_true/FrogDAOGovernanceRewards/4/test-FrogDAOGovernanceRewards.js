const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKKsFFcq = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsxJ0qC8f = await FrogDAOGovernanceRewards.new(addressKKsFFcq, {from: accounts[3]});
		const addressOaoaHY1 = accounts[2]
		const uintofSXHgk = BigInt("1742")
		const uintiA36YB3 = BigInt("717")
		const uintcq3U4tQ = BigInt("932")
		const uint256NExKcDR = await FrogDAOGovernanceRewardsxJ0qC8f.earned.call(addressOaoaHY1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CEBxZIw = await FrogDAOGovernanceRewardsxJ0qC8f.withdrawDevFund.call(uintofSXHgk, {from: accounts[1]});
//		const uint256ZY4Tj7e = await FrogDAOGovernanceRewardsxJ0qC8f.withdraw.call(uintiA36YB3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2563L4mns = await FrogDAOGovernanceRewardsxJ0qC8f.notifyRewardAmount.call(uintcq3U4tQ, {from: accounts[1]});
//		const uint256IZEL9OM = await FrogDAOGovernanceRewardsxJ0qC8f.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256NExKcDR, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsxJ0qC8f.withdrawDevFund.call(uintofSXHgk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJSxThAc = accounts[3]
		const FrogDAOGovernanceRewardsKB5v3Az = await FrogDAOGovernanceRewards.new(addressJSxThAc, {from: accounts[3]});
		const uintCm5acgT = BigInt("662")
//		await FrogDAOGovernanceRewardsKB5v3Az.checkStart.call({from: accounts[4]});
//		const uint256ojD7VJu = await FrogDAOGovernanceRewardsKB5v3Az.withdraw.call(uintCm5acgT, {from: accounts[0]});
//		const uint256e7CEqUV = await FrogDAOGovernanceRewardsKB5v3Az.rewardPerToken.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsKB5v3Az.renounceDevAddr.call({from: accounts[4]});
//		const uint256Dj0HWaK = await FrogDAOGovernanceRewardsKB5v3Az.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsKB5v3Az.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressds9sod1 = accounts[3]
		const FrogDAOGovernanceRewardsqYgEVK4 = await FrogDAOGovernanceRewards.new(addressds9sod1, {from: accounts[1]});
		const uintuQrfzDk = BigInt("1506")
		const uintATClwYJ = BigInt("660")
		const uintPDvODVW = BigInt("1101")
		const uintHLJU1R = BigInt("575")
//		const uint256SVjK91w = await FrogDAOGovernanceRewardsqYgEVK4.notifyRewardAmount.call(uintuQrfzDk, {from: accounts[3]});
//		const uint256iLOAsyT = await FrogDAOGovernanceRewardsqYgEVK4.stake.call(uintATClwYJ, {from: accounts[3]});
//		const uint256nrGGxqm = await FrogDAOGovernanceRewardsqYgEVK4.withdrawDevFund.call(uintPDvODVW, {from: accounts[1]});
//		const uint256HadzLUS = await FrogDAOGovernanceRewardsqYgEVK4.stake.call(uintHLJU1R, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsqYgEVK4.notifyRewardAmount.call(uintuQrfzDk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTofsXlf = accounts[1]
		const FrogDAOGovernanceRewardsfgCvdDj = await FrogDAOGovernanceRewards.new(addressTofsXlf, {from: accounts[3]});
		const uintVOkwJVF = BigInt("1773")
		const addresszQfew4D = accounts[2]
//		const uint256Xx77MZ0 = await FrogDAOGovernanceRewardsfgCvdDj.withdrawDevFund.call(uintVOkwJVF, {from: accounts[1]});
//		const addressxRlGXym = await FrogDAOGovernanceRewardsfgCvdDj.updateReward.call(addresszQfew4D, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsfgCvdDj.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsfgCvdDj.renounceDevAddr.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsfgCvdDj.withdrawDevFund.call(uintVOkwJVF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVSDp6PF = accounts[2]
		const FrogDAOGovernanceRewardstLqKMTx = await FrogDAOGovernanceRewards.new(addressVSDp6PF, {from: accounts[0]});
		const uintpmJFSBN = BigInt("333")
		const addressADHAHud = accounts[4]
//		await FrogDAOGovernanceRewardstLqKMTx.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qZUbUWs = await FrogDAOGovernanceRewardstLqKMTx.notifyRewardAmount.call(uintpmJFSBN, {from: accounts[2]});
//		const uint256Jr5tPc7 = await FrogDAOGovernanceRewardstLqKMTx.earned.call(addressADHAHud, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardstLqKMTx.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressI8ufSYu = accounts[0]
		const FrogDAOGovernanceRewardsuz9hgQa = await FrogDAOGovernanceRewards.new(addressI8ufSYu, {from: accounts[2]});
		const uintsuPonAX = BigInt("768")
		const addressWSsBBcD = accounts[0]
		const uintgiyNrSN = BigInt("292")
//		const uint256B0cX0hk = await FrogDAOGovernanceRewardsuz9hgQa.stake.call(uintsuPonAX, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsuz9hgQa.checkStart.call({from: accounts[2]});
//		const uint256zPZMfkj = await FrogDAOGovernanceRewardsuz9hgQa.earned.call(addressWSsBBcD, {from: accounts[5]});
//		const uint256bl34X9 = await FrogDAOGovernanceRewardsuz9hgQa.withdrawDevFund.call(uintgiyNrSN, {from: accounts[3]});
//		const uint256DAaTDJj = await FrogDAOGovernanceRewardsuz9hgQa.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsuz9hgQa.stake.call(uintsuPonAX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRTEri8 = accounts[2]
		const FrogDAOGovernanceRewardsCk25gOy = await FrogDAOGovernanceRewards.new(addressRTEri8, {from: "0x0000000000000000000000000000000000000001"});
		const uintOMnnzHv = BigInt("1595")
		await FrogDAOGovernanceRewardsCk25gOy.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsCk25gOy.renounceDevAddr.call({from: accounts[3]});
		const uint256QhcLpw = await FrogDAOGovernanceRewardsCk25gOy.notifyRewardAmount.call(uintOMnnzHv, {from: accounts[0]});
		await FrogDAOGovernanceRewardsCk25gOy.renounceDevAddr.call({from: accounts[4]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresse6HOJ2o = accounts[4]
		const FrogDAOGovernanceRewardsO8ciSiH = await FrogDAOGovernanceRewards.new(addresse6HOJ2o, {from: accounts[1]});
		const uintqKiFFdX = BigInt("776")
		const addressGVjs9qq = accounts[0]
//		await FrogDAOGovernanceRewardsO8ciSiH.exit.call({from: accounts[4]});
//		const uint256tBcOnXd = await FrogDAOGovernanceRewardsO8ciSiH.stake.call(uintqKiFFdX, {from: accounts[1]});
//		const uint256hx5csS = await FrogDAOGovernanceRewardsO8ciSiH.lastTimeRewardApplicable.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsO8ciSiH.checkhalve.call({from: accounts[1]});
//		const addressvDNlrF4 = await FrogDAOGovernanceRewardsO8ciSiH.updateReward.call(addressGVjs9qq, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsO8ciSiH.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVzkuYTG = accounts[1]
		const FrogDAOGovernanceRewardsfgCvdDj = await FrogDAOGovernanceRewards.new(addressVzkuYTG, {from: accounts[3]});
		const addressewHpZN = accounts[2]
		const uinturU9plR = BigInt("1773")
		const addresshigZBmk = accounts[2]
//		const addressfayJ3R = await FrogDAOGovernanceRewardsfgCvdDj.transferDevAddr.call(addressewHpZN, {from: accounts[3]});
//		const uint256Xx77MZ0 = await FrogDAOGovernanceRewardsfgCvdDj.withdrawDevFund.call(uinturU9plR, {from: accounts[1]});
//		const addressxRlGXym = await FrogDAOGovernanceRewardsfgCvdDj.updateReward.call(addresshigZBmk, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsfgCvdDj.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsfgCvdDj.renounceDevAddr.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsfgCvdDj.transferDevAddr.call(addressewHpZN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressMHmBB22 = accounts[3]
		const FrogDAOGovernanceRewardsUEnK4Eu = await FrogDAOGovernanceRewards.new(addressMHmBB22, {from: accounts[3]});
		const uintwST41es = BigInt("1625")
		const uinteIXvXx0 = BigInt("1656")
		const uintbPPzSX = BigInt("1329")
//		const uint256Dha1OF7 = await FrogDAOGovernanceRewardsUEnK4Eu.withdraw.call(uintwST41es, {from: accounts[1]});
//		const uint256kWDumql = await FrogDAOGovernanceRewardsUEnK4Eu.withdraw.call(uinteIXvXx0, {from: accounts[0]});
//		const uint256JI4lZ2v = await FrogDAOGovernanceRewardsUEnK4Eu.notifyRewardAmount.call(uintbPPzSX, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsUEnK4Eu.withdraw.call(uintwST41es, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressn2SeeO5 = accounts[0]
		const FrogDAOGovernanceRewardsV4fCpfj = await FrogDAOGovernanceRewards.new(addressn2SeeO5, {from: accounts[0]});
		const addresswrnkKpx = accounts[0]
		const addressE0z1uI = accounts[2]
		const uint256jZ5i7l = await FrogDAOGovernanceRewardsV4fCpfj.devFundAvailable.call({from: accounts[3]});
		const addressQZTsvMz = await FrogDAOGovernanceRewardsV4fCpfj.transferDevAddr.call(addresswrnkKpx, {from: accounts[0]});
//		const addressdg0dik = await FrogDAOGovernanceRewardsV4fCpfj.updateReward.call(addressE0z1uI, {from: accounts[4]});

		assert.equal(uint256jZ5i7l, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsV4fCpfj.updateReward.call(addressE0z1uI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUoOEEFV = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsBPd13Ra = await FrogDAOGovernanceRewards.new(addressUoOEEFV, {from: accounts[0]});
		const uintPfvZr6f = BigInt("917")
		const addressWvYHhKe = accounts[1]
//		await FrogDAOGovernanceRewardsBPd13Ra.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256xCwno4E = await FrogDAOGovernanceRewardsBPd13Ra.devFundAvailable.call({from: accounts[2]});
//		const uint2562Xlzq4 = await FrogDAOGovernanceRewardsBPd13Ra.notifyRewardAmount.call(uintPfvZr6f, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsBPd13Ra.getReward.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsBPd13Ra.exit.call({from: accounts[0]});
//		const addressnFyXjs9 = await FrogDAOGovernanceRewardsBPd13Ra.updateReward.call(addressWvYHhKe, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsBPd13Ra.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})