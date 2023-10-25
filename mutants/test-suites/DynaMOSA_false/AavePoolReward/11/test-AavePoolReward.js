const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardVoCVm4g = await AavePoolReward.new({from: accounts[2]});
		const addressIVdW5uY = accounts[5]
		const uintzzj1a4Q = BigInt("61")
		const uintxhEMTEU = BigInt("611")
//		const addressZhGb5SC = await AavePoolRewardVoCVm4g.dev.call(addressIVdW5uY, {from: accounts[4]});
//		const uint256XMeYMh7 = await AavePoolRewardVoCVm4g.notifyRewardAmount.call(uintzzj1a4Q, {from: accounts[0]});
//		const uint256TMMFZHo = await AavePoolRewardVoCVm4g.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256FJlzoqs = await AavePoolRewardVoCVm4g.notifyRewardAmount.call(uintxhEMTEU, {from: accounts[1]});
//		const uint256H58gkey = await AavePoolRewardVoCVm4g.rewardPerToken.call({from: accounts[2]});

		await expect(AavePoolRewardVoCVm4g.dev.call(addressIVdW5uY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardWkciCsm = await AavePoolReward.new({from: accounts[5]});
		const addresslaF3YT = accounts[2]
		const uinta7m0FV2 = BigInt("1726")
		const uintTZ68WlH = BigInt("1111")
		const uint256IlAmon7 = await AavePoolRewardWkciCsm.earned.call(addresslaF3YT, {from: accounts[1]});
//		const uint256ZiJ3VT1 = await AavePoolRewardWkciCsm.notifyRewardAmount.call(uinta7m0FV2, {from: accounts[4]});
//		const uint256BmmOrqw = await AavePoolRewardWkciCsm.notifyRewardAmount.call(uintTZ68WlH, {from: accounts[1]});

		assert.equal(uint256IlAmon7, BigInt("0"))
		await expect(AavePoolRewardWkciCsm.notifyRewardAmount.call(uinta7m0FV2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardZRyuJ5E = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsdZyavM = BigInt("1380")
		const uintQ6KVEF5 = BigInt("1042")
		const addressyTSWZ93 = accounts[5]
		const uintOFHhoQ3 = BigInt("1796")
		const uint256cpbr7Z = await AavePoolRewardZRyuJ5E.withdraw.call(uintsdZyavM, {from: accounts[2]});
		const uint256WZUS3hz = await AavePoolRewardZRyuJ5E.stake.call(uintQ6KVEF5, {from: accounts[2]});
		const addressNaOH25m = await AavePoolRewardZRyuJ5E.dev.call(addressyTSWZ93, {from: accounts[3]});
		const uint256gB5t7Sr = await AavePoolRewardZRyuJ5E.stake.call(uintOFHhoQ3, {from: accounts[3]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardstvWC89 = await AavePoolReward.new({from: accounts[3]});
		const uintPura2pM = BigInt("677")
		const uint85NgkK = BigInt("1071")
		const uint256hBtBk4v = await AavePoolRewardstvWC89.lastTimeRewardApplicable.call({from: accounts[5]});
//		await AavePoolRewardstvWC89.exit.call({from: accounts[1]});
//		const uint256Yq6hzzo = await AavePoolRewardstvWC89.notifyRewardAmount.call(uintPura2pM, {from: accounts[3]});
//		const uint256glfbMbW = await AavePoolRewardstvWC89.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256KzUFeHU = await AavePoolRewardstvWC89.stake.call(uint85NgkK, {from: accounts[1]});

		assert.equal(uint256hBtBk4v, BigInt("0"))
		await expect(AavePoolRewardstvWC89.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardV9R1v0P = await AavePoolReward.new({from: accounts[2]});
		const addressfMoz6Xy = accounts[2]
		const addressBHpG0HA = accounts[2]
		const uintCbKvqnU = BigInt("333")
		const uint256nzmkOD = await AavePoolRewardV9R1v0P.earned.call(addressfMoz6Xy, {from: accounts[4]});
//		const addressHgEEWz3 = await AavePoolRewardV9R1v0P.updateReward.call(addressBHpG0HA, {from: accounts[4]});
//		const uint256NeLxEx8 = await AavePoolRewardV9R1v0P.rewardPerToken.call({from: accounts[0]});
//		const uint256HfHFnK = await AavePoolRewardV9R1v0P.withdraw.call(uintCbKvqnU, {from: accounts[3]});

		assert.equal(uint256nzmkOD, BigInt("0"))
		await expect(AavePoolRewardV9R1v0P.updateReward.call(addressBHpG0HA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhDIgYLL = await AavePoolReward.new({from: accounts[5]});
		const addressXDhFMWg = accounts[4]
//		await AavePoolRewardhDIgYLL.getReward.call({from: accounts[4]});
//		const addressdtGBwOB = await AavePoolRewardhDIgYLL.updateReward.call(addressXDhFMWg, {from: accounts[3]});
//		await AavePoolRewardhDIgYLL.getReward.call({from: accounts[1]});
//		await AavePoolRewardhDIgYLL.exit.call({from: accounts[3]});

		await expect(AavePoolRewardhDIgYLL.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardSs7DXeu = await AavePoolReward.new({from: accounts[0]});
		const uintTo0q3x8 = BigInt("1552")
		const addressVlTOa9t = accounts[2]
		const uint256Pwv2RJU = await AavePoolRewardSs7DXeu.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256nc0qGSg = await AavePoolRewardSs7DXeu.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256qGhNlTs = await AavePoolRewardSs7DXeu.withdraw.call(uintTo0q3x8, {from: accounts[2]});
//		const uint256UI3uBnY = await AavePoolRewardSs7DXeu.earned.call(addressVlTOa9t, {from: accounts[3]});

		assert.equal(uint256Pwv2RJU, BigInt("0"))
		assert.equal(uint256nc0qGSg, BigInt("0"))
		await expect(AavePoolRewardSs7DXeu.withdraw.call(uintTo0q3x8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward525jAq = await AavePoolReward.new({from: accounts[1]});
		const uintU05rTK = BigInt("966")
		const addressHIJ24I9 = accounts[2]
//		const uint256zaGBTL0 = await AavePoolReward525jAq.stake.call(uintU05rTK, {from: accounts[3]});
//		const uint256Rapp3ac = await AavePoolReward525jAq.earned.call(addressHIJ24I9, {from: accounts[3]});
//		const uint256EXBJcr5 = await AavePoolReward525jAq.rewardPerToken.call({from: accounts[4]});
//		const uint256CdqaUAD = await AavePoolReward525jAq.lastTimeRewardApplicable.call({from: accounts[1]});
//		await AavePoolReward525jAq.getReward.call({from: accounts[2]});
//		await AavePoolReward525jAq.getReward.call({from: accounts[1]});

		await expect(AavePoolReward525jAq.stake.call(uintU05rTK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward525jAq = await AavePoolReward.new({from: accounts[1]});
		const uintQq1KTBI = BigInt("1535")
		const addresshqoJg3O = accounts[2]
		const uint256MeMQqHn = await AavePoolReward525jAq.notifyRewardAmount.call(uintQq1KTBI, {from: accounts[1]});
		const uint256Rapp3ac = await AavePoolReward525jAq.earned.call(addresshqoJg3O, {from: accounts[3]});
//		await AavePoolReward525jAq.getReward.call({from: accounts[1]});
//		await AavePoolReward525jAq.getReward.call({from: accounts[2]});
		await AavePoolReward525jAq.getReward.call({from: accounts[1]});

		assert.equal(uint256Rapp3ac, BigInt("0"))
		await expect(AavePoolReward525jAq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})