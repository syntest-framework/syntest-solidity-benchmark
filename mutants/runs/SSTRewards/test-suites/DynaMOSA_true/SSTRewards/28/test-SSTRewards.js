const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsQ6u9Imm = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKcKAv9S = BigInt("728")
		const addressWIp10L4 = accounts[1]
		const uintNMNAZ1 = BigInt("1393")
		await SSTRewardsQ6u9Imm.getReward.call({from: accounts[4]});
		await SSTRewardsQ6u9Imm.exit.call({from: accounts[2]});
		const uint256SAYfOaB = await SSTRewardsQ6u9Imm.rewardPerToken.call({from: accounts[1]});
		const uint256EXphO28 = await SSTRewardsQ6u9Imm.notifyRewardAmount.call(uintKcKAv9S, {from: accounts[1]});
		const uint256BJpLVp2 = await SSTRewardsQ6u9Imm.balanceOf.call(addressWIp10L4, {from: accounts[4]});
		const uint256wkMKhoY = await SSTRewardsQ6u9Imm.stake.call(uintNMNAZ1, {from: accounts[0]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsGPbmfE6 = await SSTRewards.new({from: accounts[4]});
		const addressKy0odpY = accounts[2]
		const addressuCEzDHH = accounts[1]
		const addresso3vTufY = accounts[3]
		await SSTRewardsGPbmfE6.exit.call({from: accounts[3]});
		const uint256uP5SJtl = await SSTRewardsGPbmfE6.earned.call(addressKy0odpY, {from: "0x0000000000000000000000000000000000000001"});
		const uint2561W2aCy = await SSTRewardsGPbmfE6.balanceOf.call(addressuCEzDHH, {from: accounts[3]});
		await SSTRewardsGPbmfE6.checkStart.call({from: accounts[3]});
		await SSTRewardsGPbmfE6.checkStart.call({from: accounts[3]});
		const uint256kiYhmYn = await SSTRewardsGPbmfE6.earned.call(addresso3vTufY, {from: accounts[3]});

		await expect(SSTRewardsGPbmfE6.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardstVtGlbZ = await SSTRewards.new({from: accounts[5]});
		const uinttc8zK8w = BigInt("28")
		const uintkUc8MEP = BigInt("1384")
		const uintlIkdQB = BigInt("90")
		const uint256D1oHShK = await SSTRewardstVtGlbZ.stake.call(uinttc8zK8w, {from: accounts[5]});
		await SSTRewardstVtGlbZ.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CkVPTpW = await SSTRewardstVtGlbZ.notifyRewardAmount.call(uintkUc8MEP, {from: accounts[0]});
		const uint256qCUNfP8 = await SSTRewardstVtGlbZ.stake.call(uintlIkdQB, {from: accounts[4]});

		await expect(SSTRewardstVtGlbZ.stake.call(uinttc8zK8w, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsYe3NWSK = await SSTRewards.new({from: accounts[3]});
		const uinth6u8a34 = BigInt("1798")
		const addresslaZ3jGb = accounts[2]
		const uintnCfnkhV = BigInt("460")
		const uint256cc1ixBC = await SSTRewardsYe3NWSK.withdraw.call(uinth6u8a34, {from: accounts[0]});
		const uint256QvxuJr6 = await SSTRewardsYe3NWSK.earned.call(addresslaZ3jGb, {from: accounts[1]});
		const uint256XFBMLaf = await SSTRewardsYe3NWSK.withdraw.call(uintnCfnkhV, {from: accounts[1]});

		await expect(SSTRewardsYe3NWSK.withdraw.call(uinth6u8a34, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsBFPwuWi = await SSTRewards.new({from: accounts[1]});
		const uintnHcwBX5 = BigInt("1064")
		const uintU0OD582 = BigInt("1549")
		const addressX2yd9U = accounts[3]
		await SSTRewardsBFPwuWi.getReward.call({from: accounts[1]});
		const uint256o0d9WCw = await SSTRewardsBFPwuWi.stake.call(uintnHcwBX5, {from: accounts[1]});
		const uint256tHuEWVe = await SSTRewardsBFPwuWi.withdraw.call(uintU0OD582, {from: accounts[3]});
		const addressDNP30BH = await SSTRewardsBFPwuWi.updateReward.call(addressX2yd9U, {from: accounts[4]});
		await SSTRewardsBFPwuWi.checkStart.call({from: accounts[2]});
		await SSTRewardsBFPwuWi.exit.call({from: accounts[3]});

		await expect(SSTRewardsBFPwuWi.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZ9WSaMR = await SSTRewards.new({from: accounts[2]});
		const addressVGzfFhl = accounts[2]
		const uintnConAAE = BigInt("138")
		const uintkqGDqoO = BigInt("1950")
		const addressBtWwHUo = "0x0000000000000000000000000000000000000001"
		await SSTRewardsZ9WSaMR.getReward.call({from: accounts[3]});
		const addressz0yWYA = await SSTRewardsZ9WSaMR.updateReward.call(addressVGzfFhl, {from: accounts[0]});
		const uint256kH4bzfn = await SSTRewardsZ9WSaMR.withdraw.call(uintnConAAE, {from: accounts[0]});
		const uint256Sup1HPq = await SSTRewardsZ9WSaMR.totalSupply.call({from: accounts[2]});
		const uint256b5g5Mzk = await SSTRewardsZ9WSaMR.stake.call(uintkqGDqoO, {from: accounts[0]});
		const addresseaOCLu0 = await SSTRewardsZ9WSaMR.updateReward.call(addressBtWwHUo, {from: accounts[3]});

		await expect(SSTRewardsZ9WSaMR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsBFPwuWi = await SSTRewards.new({from: accounts[1]});
		const uintqKumioW = BigInt("1974")
		const uintXOkSYG = BigInt("1064")
		const address9M8pXK = accounts[3]
		await SSTRewardsBFPwuWi.getReward.call({from: accounts[1]});
		const uint256ljZz2xi = await SSTRewardsBFPwuWi.notifyRewardAmount.call(uintqKumioW, {from: accounts[3]});
		const uint256o0d9WCw = await SSTRewardsBFPwuWi.stake.call(uintXOkSYG, {from: accounts[1]});
		const addressDNP30BH = await SSTRewardsBFPwuWi.updateReward.call(address9M8pXK, {from: accounts[4]});
		await SSTRewardsBFPwuWi.checkStart.call({from: accounts[2]});
		await SSTRewardsBFPwuWi.exit.call({from: accounts[3]});

		await expect(SSTRewardsBFPwuWi.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})