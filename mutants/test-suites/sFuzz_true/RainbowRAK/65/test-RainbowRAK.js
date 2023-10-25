const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKZBEyfRo = await RainbowRAK.new({from: accounts[4]});
		const uintnFb2H58 = BigInt("271")
		const addressqsL07N9 = accounts[3]
//		const uint256twm12qW = await RainbowRAKZBEyfRo.notifyRewardAmount.call(uintnFb2H58, {from: accounts[3]});
//		const uint256N1WyNHW = await RainbowRAKZBEyfRo.rewardPerToken.call({from: accounts[0]});
//		const addresspnMAlAa = await RainbowRAKZBEyfRo.updateReward.call(addressqsL07N9, {from: accounts[5]});

		await expect(RainbowRAKZBEyfRo.notifyRewardAmount.call(uintnFb2H58, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtQiPR7 = await RainbowRAK.new({from: accounts[3]});
		const addressxiMTUt4 = "0x0000000000000000000000000000000000000001"
		const uintqeMMhNn = BigInt("499")
//		await RainbowRAKtQiPR7.onlyOwner.call({from: accounts[2]});
//		const uint256tFYESbw = await RainbowRAKtQiPR7.earned.call(addressxiMTUt4, {from: accounts[0]});
//		const uint256rooZmVn = await RainbowRAKtQiPR7.notifyRewardAmount.call(uintqeMMhNn, {from: accounts[4]});
//		const uint256KFIWNUL = await RainbowRAKtQiPR7.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(RainbowRAKtQiPR7.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKmLkcO5e = await RainbowRAK.new({from: accounts[1]});
		const uintak0aJJT = BigInt("1133")
		const uintLGJHFxx = BigInt("1052")
		const uint256aCiLJa = await RainbowRAKmLkcO5e.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256XDnmMLK = await RainbowRAKmLkcO5e.notifyRewardAmount.call(uintak0aJJT, {from: accounts[3]});
//		await RainbowRAKmLkcO5e.renounceOwnership.call({from: accounts[2]});
//		const uint256jhAU86F = await RainbowRAKmLkcO5e.unstake.call(uintLGJHFxx, {from: accounts[2]});

		assert.equal(uint256aCiLJa, BigInt("0"))
		await expect(RainbowRAKmLkcO5e.notifyRewardAmount.call(uintak0aJJT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKyGBr8yc = await RainbowRAK.new({from: accounts[2]});
		const uinteuZ4gY8 = BigInt("32")
		const uintsDVAyFo = BigInt("704")
		const uint256aJFchAQ = await RainbowRAKyGBr8yc.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256cSsJmU6 = await RainbowRAKyGBr8yc.rewardPerToken.call({from: accounts[4]});
//		const uint256anXJB3 = await RainbowRAKyGBr8yc.stake.call(uinteuZ4gY8, {from: accounts[1]});
//		const addressFjCdl4 = await RainbowRAKyGBr8yc.owner.call({from: accounts[2]});
//		const uint256YFpl2Q8 = await RainbowRAKyGBr8yc.unstake.call(uintsDVAyFo, {from: accounts[3]});

		assert.equal(uint256aJFchAQ, BigInt("0"))
		assert.equal(uint256cSsJmU6, BigInt("0"))
		await expect(RainbowRAKyGBr8yc.stake.call(uinteuZ4gY8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKbJtHyN = await RainbowRAK.new({from: accounts[4]});
		const uintUbPrsfM = BigInt("597")
		const uintTD9fENw = BigInt("1702")
//		const uint256kxn88fS = await RainbowRAKbJtHyN.unstake.call(uintUbPrsfM, {from: accounts[1]});
//		await RainbowRAKbJtHyN.claimRewards.call({from: accounts[0]});
//		await RainbowRAKbJtHyN.claimRewards.call({from: accounts[0]});
//		await RainbowRAKbJtHyN.renounceOwnership.call({from: accounts[4]});
//		const uint2562s1YcI = await RainbowRAKbJtHyN.unstake.call(uintTD9fENw, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QIged6c = await RainbowRAKbJtHyN.getCurrentRewardReserve.call({from: accounts[1]});

		await expect(RainbowRAKbJtHyN.unstake.call(uintUbPrsfM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtzWPPQI = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWABHWHt = accounts[3]
		await RainbowRAKtzWPPQI.onlyOwner.call({from: accounts[4]});
		const addressjElzg5A = await RainbowRAKtzWPPQI.updateReward.call(addressWABHWHt, {from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKeryds7t = await RainbowRAK.new({from: accounts[2]});
		const addressA6GNyTK = accounts[3]
		const uint256KzKf8g3 = await RainbowRAKeryds7t.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UeXYBFL = await RainbowRAKeryds7t.earned.call(addressA6GNyTK, {from: accounts[3]});
		const addressMSTIGlT = await RainbowRAKeryds7t.owner.call({from: accounts[4]});
		const uint256hgzT93R = await RainbowRAKeryds7t.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(addressMSTIGlT, 0x8597e8B30B41bE371e8021EBa5c3F18cad25A588)
		assert.equal(uint256KzKf8g3, BigInt("0"))
		assert.equal(uint256UeXYBFL, BigInt("0"))
		assert.equal(uint256hgzT93R, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKyGBr8yc = await RainbowRAK.new({from: accounts[2]});
		const uintJsRltF5 = BigInt("32")
		const addressDPtCyV9 = accounts[0]
		const uintqpsdMPQ = BigInt("704")
//		await RainbowRAKyGBr8yc.renounceOwnership.call({from: accounts[2]});
//		const uint256aJFchAQ = await RainbowRAKyGBr8yc.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256cSsJmU6 = await RainbowRAKyGBr8yc.rewardPerToken.call({from: accounts[4]});
//		const uint256anXJB3 = await RainbowRAKyGBr8yc.stake.call(uintJsRltF5, {from: accounts[1]});
//		const addressFjCdl4 = await RainbowRAKyGBr8yc.owner.call({from: accounts[2]});
//		const addressoOnfYLM = await RainbowRAKyGBr8yc.updateReward.call(addressDPtCyV9, {from: accounts[1]});
//		const uint256YFpl2Q8 = await RainbowRAKyGBr8yc.unstake.call(uintqpsdMPQ, {from: accounts[3]});

		await expect(RainbowRAKyGBr8yc.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKlYZwH = await RainbowRAK.new({from: accounts[0]});
		const uint256HaJtdJO = await RainbowRAKKlYZwH.rewardPerToken.call({from: accounts[2]});
//		await RainbowRAKKlYZwH.claimRewards.call({from: accounts[0]});
//		const uint256F0zGdmm = await RainbowRAKKlYZwH.getCurrentRewardReserve.call({from: accounts[2]});

		assert.equal(uint256HaJtdJO, BigInt("0"))
		await expect(RainbowRAKKlYZwH.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFdxn7aa = await RainbowRAK.new({from: accounts[3]});
		const addressl2PEG39 = accounts[1]
		const addressuCXoaBB = accounts[4]
		const uint256DghsAJ = await RainbowRAKFdxn7aa.earned.call(addressl2PEG39, {from: accounts[4]});
		const addressarrayjuujbrU = await RainbowRAKFdxn7aa.getCommunity.call({from: accounts[0]});
		const addresskJSNpFF = await RainbowRAKFdxn7aa.transferOwnership.call(addressuCXoaBB, {from: accounts[3]});

		assert.equal(addressarrayjuujbrU, )
		assert.equal(uint256DghsAJ, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKlYZwH = await RainbowRAK.new({from: accounts[0]});
		const addressY4J1dyO = accounts[0]
		const uint256HaJtdJO = await RainbowRAKKlYZwH.rewardPerToken.call({from: accounts[2]});
		const uint256exVQa0G = await RainbowRAKKlYZwH.getCurrentRewardReserve.call({from: accounts[2]});
//		const addressvZNWSFI = await RainbowRAKKlYZwH.updateReward.call(addressY4J1dyO, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKKlYZwH.claimRewards.call({from: accounts[0]});

		assert.equal(uint256HaJtdJO, BigInt("0"))
		assert.equal(uint256exVQa0G, BigInt("0"))
		await expect(RainbowRAKKlYZwH.updateReward.call(addressY4J1dyO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKlYZwH = await RainbowRAK.new({from: accounts[0]});
//		await RainbowRAKKlYZwH.exit.call({from: accounts[0]});
//		const uint256HaJtdJO = await RainbowRAKKlYZwH.rewardPerToken.call({from: accounts[2]});

		await expect(RainbowRAKKlYZwH.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKyGBr8yc = await RainbowRAK.new({from: accounts[2]});
		const uintCAkCpWg = BigInt("185")
		const uintHWI4LcD = BigInt("37")
//		const uint256V9OWF4d = await RainbowRAKyGBr8yc.notifyRewardAmount.call(uintCAkCpWg, {from: accounts[2]});
//		const uint256anXJB3 = await RainbowRAKyGBr8yc.stake.call(uintHWI4LcD, {from: accounts[1]});

		await expect(RainbowRAKyGBr8yc.notifyRewardAmount.call(uintCAkCpWg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})