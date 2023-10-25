const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKhI0P9eS = await RainbowRAK.new({from: accounts[4]});
		const addresskSXV2h3 = accounts[2]
		const uintpXVaNh0 = BigInt("1933")
		const addressMGlbpzd = accounts[1]
//		const addressR9JAnaK = await RainbowRAKhI0P9eS.updateReward.call(addresskSXV2h3, {from: accounts[4]});
//		const uint256RvieTXi = await RainbowRAKhI0P9eS.stake.call(uintpXVaNh0, {from: accounts[4]});
//		const addressarrayJi8t7IB = await RainbowRAKhI0P9eS.getCommunity.call({from: accounts[2]});
//		const addresszdYVo65 = await RainbowRAKhI0P9eS.updateReward.call(addressMGlbpzd, {from: accounts[4]});
//		const uint256hJImMkk = await RainbowRAKhI0P9eS.rewardPerToken.call({from: accounts[0]});

		await expect(RainbowRAKhI0P9eS.updateReward.call(addresskSXV2h3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKvx4HiOG = await RainbowRAK.new({from: accounts[4]});
		const uintXz94rLq = BigInt("39")
		const addressRoTthuC = accounts[1]
		const addressDDLnfUB = accounts[2]
		const uint256sHRJOGa = await RainbowRAKvx4HiOG.getCurrentRewardReserve.call({from: accounts[0]});
//		const uint256ocjhdOk = await RainbowRAKvx4HiOG.unstake.call(uintXz94rLq, {from: accounts[0]});
//		const addressYfWmf7y = await RainbowRAKvx4HiOG.updateReward.call(addressRoTthuC, {from: accounts[1]});
//		const addressmUTTMPA = await RainbowRAKvx4HiOG.updateReward.call(addressDDLnfUB, {from: accounts[5]});

		assert.equal(uint256sHRJOGa, BigInt("0"))
		await expect(RainbowRAKvx4HiOG.unstake.call(uintXz94rLq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKsAGPlFs = await RainbowRAK.new({from: accounts[5]});
//		await RainbowRAKsAGPlFs.claimRewards.call({from: accounts[2]});
//		const addressFMyrrUw = await RainbowRAKsAGPlFs.owner.call({from: accounts[4]});
//		await RainbowRAKsAGPlFs.renounceOwnership.call({from: accounts[0]});

		await expect(RainbowRAKsAGPlFs.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKzkEOxN = await RainbowRAK.new({from: accounts[3]});
		const uint256HV2ZWyb = await RainbowRAKzkEOxN.rewardPerToken.call({from: accounts[2]});
		const boolZjA6UTL = await RainbowRAKzkEOxN.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256v4cgPTF = await RainbowRAKzkEOxN.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256KPnx2JV = await RainbowRAKzkEOxN.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolZjA6UTL, false)
		assert.equal(uint256HV2ZWyb, BigInt("0"))
		assert.equal(uint256KPnx2JV, BigInt("0"))
		assert.equal(uint256v4cgPTF, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK28pOeK = await RainbowRAK.new({from: accounts[1]});
		const uintncMPast = BigInt("328")
		const uintiaqwOp = BigInt("522")
		const uintAXPvxdR = BigInt("12")
		const uint256z4qL16h = await RainbowRAK28pOeK.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressarrayilCbGF7 = await RainbowRAK28pOeK.getCommunity.call({from: accounts[4]});
//		const uint256Rcd1ylH = await RainbowRAK28pOeK.stake.call(uintncMPast, {from: accounts[1]});
//		await RainbowRAK28pOeK.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256UvscMh = await RainbowRAK28pOeK.notifyRewardAmount.call(uintiaqwOp, {from: accounts[0]});
//		const uint256nS0yBYW = await RainbowRAK28pOeK.notifyRewardAmount.call(uintAXPvxdR, {from: accounts[1]});

		assert.equal(addressarrayilCbGF7, )
		assert.equal(uint256z4qL16h, BigInt("0"))
		await expect(RainbowRAK28pOeK.stake.call(uintncMPast, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKA5uWIXt = await RainbowRAK.new({from: accounts[2]});
		const uintnKeGoFz = BigInt("1138")
		const addressXAAE1oL = accounts[4]
//		await RainbowRAKA5uWIXt.exit.call({from: accounts[3]});
//		const uint256O8yH8wQ = await RainbowRAKA5uWIXt.stake.call(uintnKeGoFz, {from: accounts[4]});
//		const uint256PdBKOTM = await RainbowRAKA5uWIXt.getCurrentRewardReserve.call({from: accounts[5]});
//		const boolCpy0ST4 = await RainbowRAKA5uWIXt.isOwner.call({from: accounts[4]});
//		const uint256Myb7hQB = await RainbowRAKA5uWIXt.earned.call(addressXAAE1oL, {from: accounts[1]});

		await expect(RainbowRAKA5uWIXt.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYVAIiQJ = await RainbowRAK.new({from: accounts[5]});
		const addresstW2urx8 = accounts[3]
		const addressbzWaa3J = accounts[3]
		const addressWts33p = await RainbowRAKYVAIiQJ.transferOwnership.call(addresstW2urx8, {from: accounts[5]});
		const uint256OFZglTi = await RainbowRAKYVAIiQJ.earned.call(addressbzWaa3J, {from: accounts[4]});
		const uint256y6eev90 = await RainbowRAKYVAIiQJ.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256OFZglTi, BigInt("0"))
		assert.equal(uint256y6eev90, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK28pOeK = await RainbowRAK.new({from: accounts[1]});
		const uintpofB4J = BigInt("466")
		const uintwI6FWoQ = BigInt("12")
		const uint256z4qL16h = await RainbowRAK28pOeK.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressarrayilCbGF7 = await RainbowRAK28pOeK.getCommunity.call({from: accounts[4]});
//		await RainbowRAK28pOeK.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256z3Z39S2 = await RainbowRAK28pOeK.getCurrentRewardReserve.call({from: accounts[3]});
//		const uint256UvscMh = await RainbowRAK28pOeK.notifyRewardAmount.call(uintpofB4J, {from: accounts[0]});
//		const uint256nS0yBYW = await RainbowRAK28pOeK.notifyRewardAmount.call(uintwI6FWoQ, {from: accounts[1]});

		assert.equal(addressarrayilCbGF7, )
		assert.equal(uint256z4qL16h, BigInt("0"))
		await expect(RainbowRAK28pOeK.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKqkuTzG = await RainbowRAK.new({from: accounts[4]});
		const addressexQ5rkU = accounts[3]
		const addressuVpEI3a = await RainbowRAKqkuTzG.owner.call({from: accounts[0]});
		const uint256A1FyOfs = await RainbowRAKqkuTzG.earned.call(addressexQ5rkU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressuVpEI3a, 0x796c27d8506D83163A729709f390fF859Bb2656E)
		assert.equal(uint256A1FyOfs, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK28pOeK = await RainbowRAK.new({from: accounts[1]});
		const addresso4wtoJh = accounts[3]
		const uintp3aain7 = BigInt("433")
		const addressjYAm2OY = accounts[5]
		const uintRKLSgsQ = BigInt("328")
		const uintnJfU0A6 = BigInt("466")
		const uintWcpZIVQ = BigInt("12")
		const uint256z4qL16h = await RainbowRAK28pOeK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Y2qdPG6 = await RainbowRAK28pOeK.earned.call(addresso4wtoJh, {from: accounts[4]});
		const addressarrayilCbGF7 = await RainbowRAK28pOeK.getCommunity.call({from: accounts[4]});
//		const uint256Wgzvml7 = await RainbowRAK28pOeK.notifyRewardAmount.call(uintp3aain7, {from: accounts[1]});
//		const uint256brfTFQD = await RainbowRAK28pOeK.earned.call(addressjYAm2OY, {from: accounts[0]});
//		const uint256Rcd1ylH = await RainbowRAK28pOeK.stake.call(uintRKLSgsQ, {from: accounts[1]});
//		await RainbowRAK28pOeK.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256UvscMh = await RainbowRAK28pOeK.notifyRewardAmount.call(uintnJfU0A6, {from: accounts[0]});
//		const uint256nS0yBYW = await RainbowRAK28pOeK.notifyRewardAmount.call(uintWcpZIVQ, {from: accounts[1]});

		assert.equal(addressarrayilCbGF7, )
		assert.equal(uint256Y2qdPG6, BigInt("0"))
		assert.equal(uint256z4qL16h, BigInt("0"))
		await expect(RainbowRAK28pOeK.notifyRewardAmount.call(uintp3aain7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKca3Psx = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKca3Psx.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKca3Psx.renounceOwnership.call({from: accounts[2]});
		const uint256RidN45a = await RainbowRAKca3Psx.rewardPerToken.call({from: accounts[1]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKEXN3BCJ = await RainbowRAK.new({from: accounts[0]});
//		await RainbowRAKEXN3BCJ.renounceOwnership.call({from: accounts[0]});
//		await RainbowRAKEXN3BCJ.renounceOwnership.call({from: accounts[2]});
//		const uint256Ck4ZrGw = await RainbowRAKEXN3BCJ.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256aywTsY0 = await RainbowRAKEXN3BCJ.rewardPerToken.call({from: accounts[5]});

		await expect(RainbowRAKEXN3BCJ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})