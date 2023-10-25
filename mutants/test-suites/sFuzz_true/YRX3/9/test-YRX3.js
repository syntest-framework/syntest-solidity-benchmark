const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3JvKRqrx = await YRX3.new({from: accounts[3]});
		const uint60iizU = BigInt("1241")
		const addresslyNSrAH = accounts[2]
//		const uint256bHPLCl2 = await YRX3JvKRqrx.stake.call(uint60iizU, {from: accounts[2]});
//		const addressqcEerh = await YRX3JvKRqrx.updateReward.call(addresslyNSrAH, {from: accounts[0]});
//		const uint256Q3wgLKU = await YRX3JvKRqrx.lastTimeRewardApplicable.call({from: accounts[3]});
//		await YRX3JvKRqrx.getReward.call({from: accounts[0]});
//		const uint256B1UIzGy = await YRX3JvKRqrx.lastTimeRewardApplicable.call({from: accounts[3]});
//		await YRX3JvKRqrx.exit.call({from: accounts[3]});

		await expect(YRX3JvKRqrx.stake.call(uint60iizU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3aq55I0G = await YRX3.new({from: accounts[5]});
		const uintMU8mnZm = BigInt("517")
		const uintxsRp5TZ = BigInt("1091")
		const addressRxTPmsS = accounts[2]
		const boolxdTf41 = await YRX3aq55I0G.isOwner.call({from: accounts[0]});
//		const uint256NgcBsKl = await YRX3aq55I0G.stake.call(uintMU8mnZm, {from: accounts[0]});
//		const uint256QQVHXsA = await YRX3aq55I0G.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256ckrDntr = await YRX3aq55I0G.stake.call(uintxsRp5TZ, {from: accounts[5]});
//		const addressgwbEsc0 = await YRX3aq55I0G.setRewardDistribution.call(addressRxTPmsS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxdTf41, false)
		await expect(YRX3aq55I0G.stake.call(uintMU8mnZm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3F5SQSd0 = await YRX3.new({from: accounts[1]});
		const addressE4XjKUn = accounts[4]
		const uintWB4Impx = BigInt("1178")
		const addressF3ngKJz = accounts[5]
		const uint256mOCEAn1 = await YRX3F5SQSd0.earned.call(addressE4XjKUn, {from: accounts[3]});
//		const uint256jQu1vJ7 = await YRX3F5SQSd0.withdraw.call(uintWB4Impx, {from: accounts[1]});
//		const addressyHFSftO = await YRX3F5SQSd0.transferOwnership.call(addressF3ngKJz, {from: accounts[3]});
//		const uint256L7aPnID = await YRX3F5SQSd0.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256mOCEAn1, BigInt("0"))
		await expect(YRX3F5SQSd0.withdraw.call(uintWB4Impx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3kYXiD0e = await YRX3.new({from: accounts[0]});
		const addressTMLvek = accounts[3]
//		await YRX3kYXiD0e.onlyOwner.call({from: accounts[3]});
//		await YRX3kYXiD0e.getReward.call({from: accounts[1]});
//		await YRX3kYXiD0e.onlyRewardDistribution.call({from: accounts[1]});
//		await YRX3kYXiD0e.checkStart.call({from: accounts[4]});
//		const addressKP9saN = await YRX3kYXiD0e.setRewardDistribution.call(addressTMLvek, {from: accounts[3]});

		await expect(YRX3kYXiD0e.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3VR00w1 = await YRX3.new({from: accounts[1]});
		const addressPTsKoey = accounts[2]
		const uintNBrLZH3 = BigInt("1266")
//		await YRX3VR00w1.renounceOwnership.call({from: accounts[1]});
//		const addresshccJ05K = await YRX3VR00w1.updateReward.call(addressPTsKoey, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256z3fTGTD = await YRX3VR00w1.withdraw.call(uintNBrLZH3, {from: accounts[0]});

		await expect(YRX3VR00w1.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX37ccQ6t = await YRX3.new({from: accounts[5]});
		const addressrFJCU0D = accounts[2]
		const uint256flkS2Qd = await YRX37ccQ6t.balanceOf.call(addressrFJCU0D, {from: accounts[1]});
//		await YRX37ccQ6t.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256flkS2Qd, BigInt("0"))
		await expect(YRX37ccQ6t.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3L6bWm4Q = await YRX3.new({from: accounts[3]});
		const uintk5hk6DS = BigInt("910")
		const addressrFbO5QS = accounts[3]
//		await YRX3L6bWm4Q.getReward.call({from: accounts[1]});
//		const uint256hNsLkX = await YRX3L6bWm4Q.withdraw.call(uintk5hk6DS, {from: accounts[3]});
//		const addressUHnyo03 = await YRX3L6bWm4Q.setRewardDistribution.call(addressrFbO5QS, {from: accounts[4]});

		await expect(YRX3L6bWm4Q.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zJ1QQdl = await YRX3.new({from: accounts[3]});
		const addresskcBPxF = "0x0000000000000000000000000000000000000001"
//		const addressOkrzuX = await YRX3zJ1QQdl.emergencyDrain.call(addresskcBPxF, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3zJ1QQdl.getReward.call({from: accounts[3]});
//		const uint256iWmgY4m = await YRX3zJ1QQdl.totalSupply.call({from: accounts[1]});

		await expect(YRX3zJ1QQdl.emergencyDrain.call(addresskcBPxF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zJ1QQdl = await YRX3.new({from: accounts[3]});
		const addressnVFclEz = accounts[0]
		const uint256rZkPnGv = await YRX3zJ1QQdl.earned.call(addressnVFclEz, {from: accounts[0]});
//		await YRX3zJ1QQdl.exit.call({from: accounts[1]});
//		const uint256iWmgY4m = await YRX3zJ1QQdl.totalSupply.call({from: accounts[1]});

		assert.equal(uint256rZkPnGv, BigInt("0"))
		await expect(YRX3zJ1QQdl.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Il6XmT6 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uinto2aLYSy = BigInt("1726")
		const uintDRA4ZRm = BigInt("1928")
		const addressyTTNWgq = accounts[5]
		const uint256KAqn3Cp = await YRX3Il6XmT6.stake.call(uinto2aLYSy, {from: accounts[5]});
		const uint256Yy0YUV7 = await YRX3Il6XmT6.stake.call(uintDRA4ZRm, {from: accounts[1]});
		const boolisnhUFE = await YRX3Il6XmT6.isOwner.call({from: accounts[0]});
		const addressbuM7OdR = await YRX3Il6XmT6.emergencyDrain.call(addressyTTNWgq, {from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3zJ1QQdl = await YRX3.new({from: accounts[3]});
		const addressqiCp0Z = accounts[2]
		const addresss0Sx79p = accounts[5]
		const uint256iWmgY4m = await YRX3zJ1QQdl.totalSupply.call({from: accounts[1]});
		const addressSHZZ32m = await YRX3zJ1QQdl.transferOwnership.call(addressqiCp0Z, {from: accounts[3]});
//		const addressP3Y41wg = await YRX3zJ1QQdl.setRewardDistribution.call(addresss0Sx79p, {from: accounts[1]});

		assert.equal(uint256iWmgY4m, BigInt("0"))
		await expect(YRX3zJ1QQdl.setRewardDistribution.call(addresss0Sx79p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3EDRnJCU = await YRX3.new({from: accounts[5]});
		const addressHXAWel8 = accounts[0]
		const uintSqM7k5m = BigInt("1947")
		const addressNJuh8Np = await YRX3EDRnJCU.owner.call({from: accounts[2]});
//		const addressdGiyiRl = await YRX3EDRnJCU.setRewardDistribution.call(addressHXAWel8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256hzL3bm5 = await YRX3EDRnJCU.stake.call(uintSqM7k5m, {from: accounts[0]});
//		const uint256eoAx2G = await YRX3EDRnJCU.totalSupply.call({from: accounts[2]});

		assert.equal(addressNJuh8Np, 0x579955833Bf0af2934AE8aF3c0b2589E5a76C61c)
		await expect(YRX3EDRnJCU.setRewardDistribution.call(addressHXAWel8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3HYsSat0 = await YRX3.new({from: accounts[0]});
		const addressoiuYKBh = accounts[2]
		const uint256udLk7oD = await YRX3HYsSat0.rewardPerToken.call({from: accounts[0]});
		const uint256xfvrObY = await YRX3HYsSat0.totalSupply.call({from: accounts[4]});
		const addressZxe9eek = await YRX3HYsSat0.setRewardDistribution.call(addressoiuYKBh, {from: accounts[0]});

		assert.equal(uint256udLk7oD, BigInt("0"))
		assert.equal(uint256xfvrObY, BigInt("0"))
	});
})