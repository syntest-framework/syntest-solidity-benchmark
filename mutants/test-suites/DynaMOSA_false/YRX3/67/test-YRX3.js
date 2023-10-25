const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3KlIN1xS = await YRX3.new({from: accounts[2]});
		const addressxkBzjnq = accounts[3]
//		await YRX3KlIN1xS.renounceOwnership.call({from: accounts[1]});
//		const uint256gwjWyIW = await YRX3KlIN1xS.rewardPerToken.call({from: accounts[4]});
//		const addressHYXFGI4 = await YRX3KlIN1xS.updateReward.call(addressxkBzjnq, {from: accounts[0]});

		await expect(YRX3KlIN1xS.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3XuXtlVU = await YRX3.new({from: accounts[2]});
		const uintqrPnkgS = BigInt("1483")
		const uintRscx7F3 = BigInt("2038")
		const addressuyk9wWt = accounts[0]
//		const uint256nEZ7Zkp = await YRX3XuXtlVU.stake.call(uintqrPnkgS, {from: accounts[4]});
//		const uint256q2s0eoe = await YRX3XuXtlVU.withdraw.call(uintRscx7F3, {from: accounts[5]});
//		const uint256xN6NQ0v = await YRX3XuXtlVU.earned.call(addressuyk9wWt, {from: accounts[0]});
//		const uint256IhJXOc = await YRX3XuXtlVU.totalSupply.call({from: accounts[5]});
//		await YRX3XuXtlVU.checkStart.call({from: accounts[2]});

		await expect(YRX3XuXtlVU.stake.call(uintqrPnkgS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3fJd4haV = await YRX3.new({from: accounts[1]});
//		await YRX3fJd4haV.checkNextEpoch.call({from: accounts[0]});
//		const addressc1GY5KP = await YRX3fJd4haV.owner.call({from: accounts[5]});
//		await YRX3fJd4haV.exit.call({from: accounts[3]});

		await expect(YRX3fJd4haV.checkNextEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3mVRFVAA = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressv1IpVwQ = accounts[4]
		const addressHGdoAPP = "0x0000000000000000000000000000000000000001"
		await YRX3mVRFVAA.onlyOwner.call({from: accounts[1]});
		const addressqYz20g8 = await YRX3mVRFVAA.transferOwnership.call(addressv1IpVwQ, {from: accounts[3]});
		const addressqf47OA = await YRX3mVRFVAA.setRewardDistribution.call(addressHGdoAPP, {from: accounts[3]});
		await YRX3mVRFVAA.checkStart.call({from: accounts[2]});
		const uint256PYFZF96 = await YRX3mVRFVAA.rewardPerToken.call({from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3vOB7YJv = await YRX3.new({from: accounts[3]});
//		await YRX3vOB7YJv.exit.call({from: accounts[5]});
//		await YRX3vOB7YJv.onlyRewardDistribution.call({from: accounts[3]});

		await expect(YRX3vOB7YJv.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uu38dPb = await YRX3.new({from: accounts[2]});
		const uint256K1rdEWh = await YRX3uu38dPb.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256sB1FGZU = await YRX3uu38dPb.totalSupply.call({from: accounts[0]});
//		await YRX3uu38dPb.getReward.call({from: accounts[3]});

		assert.equal(uint256K1rdEWh, BigInt("0"))
		assert.equal(uint256sB1FGZU, BigInt("0"))
		await expect(YRX3uu38dPb.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3PdldEbW = await YRX3.new({from: accounts[4]});
		const addressdZPRAK3 = accounts[4]
		const uintNKEf8vk = BigInt("618")
		const addresskMD4ns = accounts[4]
		const uint256yyDxulN = await YRX3PdldEbW.totalSupply.call({from: accounts[2]});
		const addressQGht4GD = await YRX3PdldEbW.setRewardDistribution.call(addressdZPRAK3, {from: accounts[4]});
//		const uint256kJXfqCh = await YRX3PdldEbW.stake.call(uintNKEf8vk, {from: accounts[2]});
//		const uint256Cghb19t = await YRX3PdldEbW.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256vZCLik = await YRX3PdldEbW.balanceOf.call(addresskMD4ns, {from: accounts[0]});

		assert.equal(uint256yyDxulN, BigInt("0"))
		await expect(YRX3PdldEbW.stake.call(uintNKEf8vk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3PdldEbW = await YRX3.new({from: accounts[4]});
		const uint256yyDxulN = await YRX3PdldEbW.totalSupply.call({from: accounts[2]});
		const uint256Cghb19t = await YRX3PdldEbW.lastTimeRewardApplicable.call({from: accounts[1]});
//		await YRX3PdldEbW.notifyRewardAmount.call({from: accounts[0]});
//		await YRX3PdldEbW.checkStart.call({from: accounts[0]});

		assert.equal(uint256Cghb19t, BigInt("0"))
		assert.equal(uint256yyDxulN, BigInt("0"))
		await expect(YRX3PdldEbW.notifyRewardAmount.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3VUJr1Ok = await YRX3.new({from: accounts[4]});
		const uintYOTWnNp = BigInt("918")
//		const uint256rqD3QC = await YRX3VUJr1Ok.withdraw.call(uintYOTWnNp, {from: accounts[5]});
//		await YRX3VUJr1Ok.getReward.call({from: accounts[0]});

		await expect(YRX3VUJr1Ok.withdraw.call(uintYOTWnNp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3PdldEbW = await YRX3.new({from: accounts[4]});
		const uintbcrsGI = BigInt("1232")
		const uint256yyDxulN = await YRX3PdldEbW.totalSupply.call({from: accounts[2]});
		const addressA3i0viK = await YRX3PdldEbW.owner.call({from: accounts[3]});
//		const uint256wcqkPL2 = await YRX3PdldEbW.stake.call(uintbcrsGI, {from: accounts[1]});
//		const uint256Cghb19t = await YRX3PdldEbW.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(addressA3i0viK, 0x86ea3F8D3b2FFB07aE8033508032326BBF65Edef)
		assert.equal(uint256yyDxulN, BigInt("0"))
		await expect(YRX3PdldEbW.stake.call(uintbcrsGI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3mvrD0ep = await YRX3.new({from: accounts[2]});
		const addressg1n4RT = accounts[0]
		const uintCqujAmS = BigInt("295")
		const addressreOGbyt = accounts[2]
		const uintwUjg0Rn = BigInt("1406")
		const addressyf27AN4 = await YRX3mvrD0ep.transferOwnership.call(addressg1n4RT, {from: accounts[2]});
//		await YRX3mvrD0ep.checkNextEpoch.call({from: accounts[1]});
//		const uint256PvagcEL = await YRX3mvrD0ep.stake.call(uintCqujAmS, {from: accounts[1]});
//		const addressF67aoQ0 = await YRX3mvrD0ep.setRewardDistribution.call(addressreOGbyt, {from: accounts[1]});
//		const uint256BZQ60oT = await YRX3mvrD0ep.withdraw.call(uintwUjg0Rn, {from: accounts[4]});

		await expect(YRX3mvrD0ep.checkNextEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uu38dPb = await YRX3.new({from: accounts[2]});
		const uintGKbx9ro = BigInt("797")
		const uintn2i9u22 = BigInt("1575")
//		await YRX3uu38dPb.renounceOwnership.call({from: accounts[2]});
//		const uint256F46kBif = await YRX3uu38dPb.withdraw.call(uintGKbx9ro, {from: accounts[4]});
//		const uint256AvKveeO = await YRX3uu38dPb.stake.call(uintn2i9u22, {from: accounts[0]});

		await expect(YRX3uu38dPb.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})