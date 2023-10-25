const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVU4ibw = accounts[3]
		const FrogDAOGovernanceRewardseoDMku = await FrogDAOGovernanceRewards.new(addressVU4ibw, {from: accounts[2]});
		const uintozDkNtU = BigInt("332")
//		await FrogDAOGovernanceRewardseoDMku.checkStart.call({from: accounts[3]});
//		const uint256DfAGFDG = await FrogDAOGovernanceRewardseoDMku.devFundAvailable.call({from: accounts[5]});
//		const uint256GjnkiEC = await FrogDAOGovernanceRewardseoDMku.withdraw.call(uintozDkNtU, {from: accounts[1]});
//		await FrogDAOGovernanceRewardseoDMku.checkhalve.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardseoDMku.exit.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardseoDMku.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressw0dFT2t = accounts[0]
		const FrogDAOGovernanceRewards8gENtN = await FrogDAOGovernanceRewards.new(addressw0dFT2t, {from: accounts[0]});
//		await FrogDAOGovernanceRewards8gENtN.getReward.call({from: accounts[3]});
//		const uint256pmogEXH = await FrogDAOGovernanceRewards8gENtN.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewards8gENtN.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWvmoDyy = accounts[0]
		const FrogDAOGovernanceRewardsxaeiljk = await FrogDAOGovernanceRewards.new(addressWvmoDyy, {from: accounts[4]});
		const uintIE31zdJ = BigInt("1794")
		const uint256t4oCCBO = await FrogDAOGovernanceRewardsxaeiljk.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256dVGduf = await FrogDAOGovernanceRewardsxaeiljk.stake.call(uintIE31zdJ, {from: accounts[1]});
//		const uint256yq5nx8B = await FrogDAOGovernanceRewardsxaeiljk.devFundAvailable.call({from: accounts[4]});

		assert.equal(uint256t4oCCBO, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsxaeiljk.stake.call(uintIE31zdJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressLxzP0p7 = accounts[3]
		const FrogDAOGovernanceRewardso68Q9t6 = await FrogDAOGovernanceRewards.new(addressLxzP0p7, {from: accounts[4]});
		const uintYTqILiO = BigInt("1641")
		const uintxkkWmoo = BigInt("1752")
		const uintkwALDUE = BigInt("1311")
//		const uint256H2mKYk6 = await FrogDAOGovernanceRewardso68Q9t6.withdraw.call(uintYTqILiO, {from: accounts[4]});
//		const uint2569E0aiK = await FrogDAOGovernanceRewardso68Q9t6.withdraw.call(uintxkkWmoo, {from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardso68Q9t6.checkStart.call({from: accounts[2]});
//		const uint256DOnXEqI = await FrogDAOGovernanceRewardso68Q9t6.stake.call(uintkwALDUE, {from: accounts[0]});
//		await FrogDAOGovernanceRewardso68Q9t6.checkStart.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardso68Q9t6.withdraw.call(uintYTqILiO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressb2le1gR = accounts[0]
		const FrogDAOGovernanceRewardsTgy6eQ = await FrogDAOGovernanceRewards.new(addressb2le1gR, {from: accounts[1]});
		const addressYaf2mfi = accounts[3]
		const uintqFQqjDE = BigInt("1769")
//		await FrogDAOGovernanceRewardsTgy6eQ.exit.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsTgy6eQ.checkhalve.call({from: accounts[1]});
//		const uint2568mtwxu = await FrogDAOGovernanceRewardsTgy6eQ.earned.call(addressYaf2mfi, {from: accounts[2]});
//		const uint256lktUL71 = await FrogDAOGovernanceRewardsTgy6eQ.notifyRewardAmount.call(uintqFQqjDE, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsTgy6eQ.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNJIHMVO = accounts[0]
		const FrogDAOGovernanceRewards8gENtN = await FrogDAOGovernanceRewards.new(addressNJIHMVO, {from: accounts[0]});
		const addressB2voP5 = accounts[2]
//		await FrogDAOGovernanceRewards8gENtN.renounceDevAddr.call({from: accounts[4]});
//		await FrogDAOGovernanceRewards8gENtN.getReward.call({from: accounts[3]});
//		const uint256pmogEXH = await FrogDAOGovernanceRewards8gENtN.rewardPerToken.call({from: accounts[3]});
//		const addressnMdTeab = await FrogDAOGovernanceRewards8gENtN.transferDevAddr.call(addressB2voP5, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewards8gENtN.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJ08yVf1 = accounts[3]
		const FrogDAOGovernanceRewardskzsWf3D = await FrogDAOGovernanceRewards.new(addressJ08yVf1, {from: accounts[0]});
		const uintx6iA8JG = BigInt("1826")
		const uintZY9CK4x = BigInt("624")
//		const uint256WSP7iV = await FrogDAOGovernanceRewardskzsWf3D.withdrawDevFund.call(uintx6iA8JG, {from: accounts[0]});
//		const uint256bTbWvE = await FrogDAOGovernanceRewardskzsWf3D.stake.call(uintZY9CK4x, {from: accounts[4]});
//		const uint256i270gKh = await FrogDAOGovernanceRewardskzsWf3D.devFundAvailable.call({from: accounts[0]});
//		const uint256DxKuQo0 = await FrogDAOGovernanceRewardskzsWf3D.devFundAvailable.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardskzsWf3D.renounceDevAddr.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardskzsWf3D.withdrawDevFund.call(uintx6iA8JG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresse2v2fE8 = accounts[0]
		const FrogDAOGovernanceRewards8gENtN = await FrogDAOGovernanceRewards.new(addresse2v2fE8, {from: accounts[0]});
		const addresso9Ohjm2 = accounts[4]
		const uint256pmogEXH = await FrogDAOGovernanceRewards8gENtN.rewardPerToken.call({from: accounts[3]});
		const uint256WGcFCI = await FrogDAOGovernanceRewards8gENtN.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addresszLgAJ6Z = await FrogDAOGovernanceRewards8gENtN.transferDevAddr.call(addresso9Ohjm2, {from: accounts[4]});

		assert.equal(uint256WGcFCI, BigInt("0"))
		assert.equal(uint256pmogEXH, BigInt("0"))
		await expect(FrogDAOGovernanceRewards8gENtN.transferDevAddr.call(addresso9Ohjm2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressbY0oVpR = accounts[0]
		const FrogDAOGovernanceRewards8gENtN = await FrogDAOGovernanceRewards.new(addressbY0oVpR, {from: accounts[0]});
		const uinteFE3Mu = BigInt("1109")
		const uintRioxCTN = BigInt("601")
//		const uint256qanYpy0 = await FrogDAOGovernanceRewards8gENtN.notifyRewardAmount.call(uinteFE3Mu, {from: accounts[1]});
//		await FrogDAOGovernanceRewards8gENtN.checkStart.call({from: accounts[0]});
//		await FrogDAOGovernanceRewards8gENtN.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256YTxAjSD = await FrogDAOGovernanceRewards8gENtN.stake.call(uintRioxCTN, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewards8gENtN.notifyRewardAmount.call(uinteFE3Mu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressyeX0rgR = accounts[0]
		const FrogDAOGovernanceRewards8gENtN = await FrogDAOGovernanceRewards.new(addressyeX0rgR, {from: accounts[0]});
		const uintANooPNq = BigInt("98")
		const uint256pmogEXH = await FrogDAOGovernanceRewards8gENtN.rewardPerToken.call({from: accounts[3]});
//		const uint256OfZmlaz = await FrogDAOGovernanceRewards8gENtN.notifyRewardAmount.call(uintANooPNq, {from: accounts[0]});

		assert.equal(uint256pmogEXH, BigInt("0"))
		await expect(FrogDAOGovernanceRewards8gENtN.notifyRewardAmount.call(uintANooPNq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressSOQG05r = accounts[0]
		const FrogDAOGovernanceRewards8gENtN = await FrogDAOGovernanceRewards.new(addressSOQG05r, {from: accounts[0]});
		const uintA2Cb78u = BigInt("48")
//		const uint256oZhKDgi = await FrogDAOGovernanceRewards8gENtN.withdrawDevFund.call(uintA2Cb78u, {from: accounts[0]});
//		await FrogDAOGovernanceRewards8gENtN.checkStart.call({from: accounts[0]});
//		const uint256pmogEXH = await FrogDAOGovernanceRewards8gENtN.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewards8gENtN.withdrawDevFund.call(uintA2Cb78u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEHJfEqs = accounts[2]
		const FrogDAOGovernanceRewardse1EsUs1 = await FrogDAOGovernanceRewards.new(addressEHJfEqs, {from: "0x0000000000000000000000000000000000000001"});
		const addressJP7CIeW = accounts[3]
		const uintys4UWwq = BigInt("1021")
		const addressNa6URU3 = await FrogDAOGovernanceRewardse1EsUs1.updateReward.call(addressJP7CIeW, {from: accounts[3]});
		await FrogDAOGovernanceRewardse1EsUs1.renounceDevAddr.call({from: accounts[2]});
		const uint256lcoQrBZ = await FrogDAOGovernanceRewardse1EsUs1.withdraw.call(uintys4UWwq, {from: accounts[1]});
		await FrogDAOGovernanceRewardse1EsUs1.renounceDevAddr.call({from: accounts[0]});
	});
})