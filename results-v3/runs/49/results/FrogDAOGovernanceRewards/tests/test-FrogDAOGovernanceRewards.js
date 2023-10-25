const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressFCOt9Uo = accounts[2]
		const FrogDAOGovernanceRewardsKQhPne = await FrogDAOGovernanceRewards.new(addressFCOt9Uo, {from: accounts[4]});
		const addressiYiSV6Q = accounts[2]
		await FrogDAOGovernanceRewardsKQhPne.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsKQhPne.getReward.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsKQhPne.getReward.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsKQhPne.renounceDevAddr.call({from: accounts[3]});
		const addressU1XXIKx = await FrogDAOGovernanceRewardsKQhPne.updateReward.call(addressiYiSV6Q, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsKQhPne.checkhalve.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscRx4UX = accounts[3]
		const FrogDAOGovernanceRewardshlObdys = await FrogDAOGovernanceRewards.new(addresscRx4UX, {from: accounts[5]});
		const addressrvkoAeJ = accounts[5]
		await FrogDAOGovernanceRewardshlObdys.renounceDevAddr.call({from: accounts[1]});
		const addressuHKtx2Y = await FrogDAOGovernanceRewardshlObdys.updateReward.call(addressrvkoAeJ, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardshlObdys.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressiXNDKgV = accounts[4]
		const FrogDAOGovernanceRewardsuyakc1V = await FrogDAOGovernanceRewards.new(addressiXNDKgV, {from: "0x0000000000000000000000000000000000000001"});
		const uintVnyvVxM = BigInt("1994")
		const uint256Bzce52W = await FrogDAOGovernanceRewardsuyakc1V.notifyRewardAmount.call(uintVnyvVxM, {from: accounts[4]});
		await FrogDAOGovernanceRewardsuyakc1V.checkStart.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsuyakc1V.getReward.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsuyakc1V.exit.call({from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressa7gIDit = accounts[2]
		const FrogDAOGovernanceRewardsDVizXP = await FrogDAOGovernanceRewards.new(addressa7gIDit, {from: accounts[1]});
		const addressP2Prtc5 = accounts[2]
		const uint256abHDlyt = await FrogDAOGovernanceRewardsDVizXP.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressOGyDVRc = await FrogDAOGovernanceRewardsDVizXP.transferDevAddr.call(addressP2Prtc5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AB7Rsti = await FrogDAOGovernanceRewardsDVizXP.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256abHDlyt, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsDVizXP.transferDevAddr.call(addressP2Prtc5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresszMqBiKd = accounts[1]
		const FrogDAOGovernanceRewardsBTfsMZ = await FrogDAOGovernanceRewards.new(addresszMqBiKd, {from: accounts[4]});
		const uintGqSKx5h = BigInt("1545")
		const addressJhzpDfg = accounts[1]
		const uint256hZJDv0 = await FrogDAOGovernanceRewardsBTfsMZ.notifyRewardAmount.call(uintGqSKx5h, {from: accounts[3]});
		await FrogDAOGovernanceRewardsBTfsMZ.getReward.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsBTfsMZ.exit.call({from: accounts[4]});
		const uint256cfknWzh = await FrogDAOGovernanceRewardsBTfsMZ.earned.call(addressJhzpDfg, {from: accounts[2]});
		await FrogDAOGovernanceRewardsBTfsMZ.renounceDevAddr.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsBTfsMZ.notifyRewardAmount.call(uintGqSKx5h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnx4xgD4 = accounts[3]
		const FrogDAOGovernanceRewardswBCybXE = await FrogDAOGovernanceRewards.new(addressnx4xgD4, {from: accounts[5]});
		const addressNGSthe = accounts[2]
		const addresscCBGXdo = accounts[2]
		const uint256tKqfyg9 = await FrogDAOGovernanceRewardswBCybXE.earned.call(addressNGSthe, {from: accounts[3]});
		await FrogDAOGovernanceRewardswBCybXE.exit.call({from: accounts[2]});
		const addresslDF5vmL = await FrogDAOGovernanceRewardswBCybXE.updateReward.call(addresscCBGXdo, {from: accounts[2]});

		assert.equal(uint256tKqfyg9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardswBCybXE.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressl3tYO69 = accounts[2]
		const FrogDAOGovernanceRewardsQCTUWv = await FrogDAOGovernanceRewards.new(addressl3tYO69, {from: accounts[2]});
		const uintyTXbgOE = BigInt("793")
		await FrogDAOGovernanceRewardsQCTUWv.getReward.call({from: accounts[1]});
		const uint256iDdXVDH = await FrogDAOGovernanceRewardsQCTUWv.stake.call(uintyTXbgOE, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsQCTUWv.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressu349Fb = accounts[3]
		const FrogDAOGovernanceRewards3nNXsy = await FrogDAOGovernanceRewards.new(addressu349Fb, {from: accounts[3]});
		const addressL5zcbEX = accounts[0]
		const uint256XsQFEi = await FrogDAOGovernanceRewards3nNXsy.devFundAvailable.call({from: accounts[1]});
		await FrogDAOGovernanceRewards3nNXsy.renounceDevAddr.call({from: accounts[1]});
		const uint256lNNFuk = await FrogDAOGovernanceRewards3nNXsy.earned.call(addressL5zcbEX, {from: accounts[5]});
		await FrogDAOGovernanceRewards3nNXsy.renounceDevAddr.call({from: accounts[0]});

		assert.equal(uint256XsQFEi, BigInt("0"))
		await expect(FrogDAOGovernanceRewards3nNXsy.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressFiSEHe6 = accounts[3]
		const FrogDAOGovernanceRewardswBCybXE = await FrogDAOGovernanceRewards.new(addressFiSEHe6, {from: accounts[5]});
		const uintS6K2U0g = BigInt("117")
		const addressCZTjIV4 = accounts[2]
		const addressc1uerfZ = accounts[4]
		const addressyrS6eSa = accounts[2]
		const uint256PPtaAz5 = await FrogDAOGovernanceRewardswBCybXE.withdraw.call(uintS6K2U0g, {from: accounts[2]});
		await FrogDAOGovernanceRewardswBCybXE.checkStart.call({from: accounts[0]});
		const uint256tKqfyg9 = await FrogDAOGovernanceRewardswBCybXE.earned.call(addressCZTjIV4, {from: accounts[3]});
		const uint256EDXCbQV = await FrogDAOGovernanceRewardswBCybXE.earned.call(addressc1uerfZ, {from: accounts[5]});
		await FrogDAOGovernanceRewardswBCybXE.exit.call({from: accounts[2]});
		const addresslDF5vmL = await FrogDAOGovernanceRewardswBCybXE.updateReward.call(addressyrS6eSa, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardswBCybXE.withdraw.call(uintS6K2U0g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressCbozlV1 = accounts[2]
		const FrogDAOGovernanceRewardsQCTUWv = await FrogDAOGovernanceRewards.new(addressCbozlV1, {from: accounts[2]});
		const uintcPZHhGo = BigInt("1245")
		const uintOG6ENNK = BigInt("770")
		const uint256xDg9NoL = await FrogDAOGovernanceRewardsQCTUWv.notifyRewardAmount.call(uintcPZHhGo, {from: accounts[2]});
		const uint256iDdXVDH = await FrogDAOGovernanceRewardsQCTUWv.stake.call(uintOG6ENNK, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsQCTUWv.notifyRewardAmount.call(uintcPZHhGo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgNkTd7W = accounts[2]
		const FrogDAOGovernanceRewardsQCTUWv = await FrogDAOGovernanceRewards.new(addressgNkTd7W, {from: accounts[2]});
		const uintn8hIV3t = BigInt("1624")
		const uintGclD5Ah = BigInt("753")
		const uint256FfRtDXH = await FrogDAOGovernanceRewardsQCTUWv.devFundAvailable.call({from: accounts[4]});
		const uint256o2pKlG = await FrogDAOGovernanceRewardsQCTUWv.withdrawDevFund.call(uintn8hIV3t, {from: accounts[1]});
		const uint256iDdXVDH = await FrogDAOGovernanceRewardsQCTUWv.stake.call(uintGclD5Ah, {from: accounts[4]});

		assert.equal(uint256FfRtDXH, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsQCTUWv.withdrawDevFund.call(uintn8hIV3t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHiKrhUa = accounts[2]
		const FrogDAOGovernanceRewardsDVizXP = await FrogDAOGovernanceRewards.new(addressHiKrhUa, {from: accounts[1]});
		const addressHh7kDFf = accounts[3]
		const addressEBkovv4 = accounts[3]
		const uint256nXTUfLi = await FrogDAOGovernanceRewardsDVizXP.lastTimeRewardApplicable.call({from: accounts[2]});
		const addresswRPZywe = await FrogDAOGovernanceRewardsDVizXP.transferDevAddr.call(addressHh7kDFf, {from: accounts[2]});
		const addressOGyDVRc = await FrogDAOGovernanceRewardsDVizXP.transferDevAddr.call(addressEBkovv4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256nXTUfLi, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsDVizXP.transferDevAddr.call(addressEBkovv4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdooD8DX = accounts[3]
		const FrogDAOGovernanceRewardsdtIJmk = await FrogDAOGovernanceRewards.new(addressdooD8DX, {from: accounts[1]});
		const uintmoB1JBS = BigInt("1908")
		const uintBFn52FG = BigInt("439")
		const uintrCZWAgA = BigInt("1640")
		const uintaVK4sTn = BigInt("758")
		const uint256Aoh9qs = await FrogDAOGovernanceRewardsdtIJmk.withdrawDevFund.call(uintmoB1JBS, {from: accounts[3]});
		await FrogDAOGovernanceRewardsdtIJmk.exit.call({from: accounts[4]});
		const uint256vM16hSi = await FrogDAOGovernanceRewardsdtIJmk.withdrawDevFund.call(uintBFn52FG, {from: accounts[3]});
		const uint256pi7WQKi = await FrogDAOGovernanceRewardsdtIJmk.stake.call(uintrCZWAgA, {from: accounts[1]});
		const uint256PPLKN0D = await FrogDAOGovernanceRewardsdtIJmk.rewardPerToken.call({from: accounts[3]});
		const uint256hwvQQx = await FrogDAOGovernanceRewardsdtIJmk.notifyRewardAmount.call(uintaVK4sTn, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsdtIJmk.withdrawDevFund.call(uintmoB1JBS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})