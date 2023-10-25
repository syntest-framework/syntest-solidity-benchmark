const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressTwR6Iwc = "0x0000000000000000000000000000000000000001"
		const addressOQwuBbT = accounts[3]
		const uintZgsKFC6 = BigInt("1054")
		const uintlmSsrRo = BigInt("146")
		const MisesLegacyPoolUsg3ieB = await MisesLegacyPool.new(addressTwR6Iwc, addressOQwuBbT, uintZgsKFC6, uintlmSsrRo, {from: accounts[1]});
//		await MisesLegacyPoolUsg3ieB.checkStart.call({from: accounts[1]});
//		await MisesLegacyPoolUsg3ieB.exit.call({from: accounts[5]});
//		const uint256ijpP9wy = await MisesLegacyPoolUsg3ieB.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256jH8MJ4U = await MisesLegacyPoolUsg3ieB.rewardPerToken.call({from: accounts[0]});

		await expect(MisesLegacyPoolUsg3ieB.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressJIuxTXh = accounts[1]
		const addressmlj1V85 = accounts[1]
		const uintRVUbL7 = BigInt("1786")
		const uintNU06B1a = BigInt("577")
		const MisesLegacyPoolyQlyMuS = await MisesLegacyPool.new(addressJIuxTXh, addressmlj1V85, uintRVUbL7, uintNU06B1a, {from: accounts[1]});
		const uinta1WDTcF = BigInt("1029")
		const addressPohAj4 = accounts[2]
		const addressbxsl9Jq = accounts[0]
		const uintY5Rl2Pt = BigInt("1112")
//		const uint256ydyBtNd = await MisesLegacyPoolyQlyMuS.notifyRewardAmount.call(uinta1WDTcF, {from: accounts[4]});
//		const uint256AFErAqq = await MisesLegacyPoolyQlyMuS.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KmxJ3rb = await MisesLegacyPoolyQlyMuS.earned.call(addressPohAj4, {from: accounts[1]});
//		const addressPGYGXj = await MisesLegacyPoolyQlyMuS.updateReward.call(addressbxsl9Jq, {from: accounts[3]});
//		const uint256aNSal8W = await MisesLegacyPoolyQlyMuS.withdraw.call(uintY5Rl2Pt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPoolyQlyMuS.notifyRewardAmount.call(uinta1WDTcF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address8Bb5vz = accounts[1]
		const addressFzaPqFn = accounts[2]
		const uintYEfLS06 = BigInt("580")
		const uintsvRVslW = BigInt("1983")
		const MisesLegacyPoolj2snvSi = await MisesLegacyPool.new(address8Bb5vz, addressFzaPqFn, uintYEfLS06, uintsvRVslW, {from: accounts[5]});
		const address8TEZUw = accounts[4]
//		await MisesLegacyPoolj2snvSi.getReward.call({from: accounts[0]});
//		await MisesLegacyPoolj2snvSi.getReward.call({from: accounts[2]});
//		const addressG0C11HW = await MisesLegacyPoolj2snvSi.updateReward.call(address8TEZUw, {from: accounts[5]});

		await expect(MisesLegacyPoolj2snvSi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressRXBAThy = accounts[1]
		const addressJNZslCu = accounts[1]
		const uintG10Rwue = BigInt("189")
		const uintcjSbZxg = BigInt("935")
		const MisesLegacyPoolPU6s0ZC = await MisesLegacyPool.new(addressRXBAThy, addressJNZslCu, uintG10Rwue, uintcjSbZxg, {from: accounts[0]});
		const uintUuOGSfp = BigInt("501")
		const addresskNYnyJg = "0x0000000000000000000000000000000000000001"
		const uintCF8FP9p = BigInt("715")
//		await MisesLegacyPoolPU6s0ZC.exit.call({from: accounts[3]});
//		await MisesLegacyPoolPU6s0ZC.getReward.call({from: accounts[0]});
//		const uint256sINjAc = await MisesLegacyPoolPU6s0ZC.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256mLs6rJ7 = await MisesLegacyPoolPU6s0ZC.withdraw.call(uintUuOGSfp, {from: accounts[2]});
//		const addressHeamFhO = await MisesLegacyPoolPU6s0ZC.updateReward.call(addresskNYnyJg, {from: accounts[3]});
//		const uint256lZdPhus = await MisesLegacyPoolPU6s0ZC.stake.call(uintCF8FP9p, {from: accounts[4]});

		await expect(MisesLegacyPoolPU6s0ZC.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUoBGTG5 = accounts[1]
		const addressbkUj3K = accounts[2]
		const uintRIPtzon = BigInt("580")
		const uintOFURwu8 = BigInt("1983")
		const MisesLegacyPoolj2snvSi = await MisesLegacyPool.new(addressUoBGTG5, addressbkUj3K, uintRIPtzon, uintOFURwu8, {from: accounts[5]});
		const uintUSY1LoE = BigInt("694")
		const addressGVlYU2I = accounts[4]
//		await MisesLegacyPoolj2snvSi.getReward.call({from: accounts[0]});
//		const uint256fJ997T = await MisesLegacyPoolj2snvSi.stake.call(uintUSY1LoE, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolj2snvSi.getReward.call({from: accounts[2]});
//		const addressG0C11HW = await MisesLegacyPoolj2snvSi.updateReward.call(addressGVlYU2I, {from: accounts[5]});

		await expect(MisesLegacyPoolj2snvSi.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressw4RMtHM = accounts[4]
		const addressOaNsqOT = accounts[2]
		const uintEeREaON = BigInt("2045")
		const uintDT4gubg = BigInt("1674")
		const MisesLegacyPoolTWa08O7 = await MisesLegacyPool.new(addressw4RMtHM, addressOaNsqOT, uintEeREaON, uintDT4gubg, {from: accounts[0]});
		const uintRsegIKH = BigInt("1357")
		const uint256XppQVg = await MisesLegacyPoolTWa08O7.rewardPerToken.call({from: accounts[0]});
//		await MisesLegacyPoolTWa08O7.getReward.call({from: accounts[0]});
//		const uint2566Dr4wO = await MisesLegacyPoolTWa08O7.withdraw.call(uintRsegIKH, {from: accounts[3]});

		assert.equal(uint256XppQVg, BigInt("0"))
		await expect(MisesLegacyPoolTWa08O7.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressDEK7lNT = accounts[2]
		const addressL5c5YE = accounts[0]
		const uintItVkXj7 = BigInt("1962")
		const uintRFbm4BD = BigInt("500")
		const MisesLegacyPoolBzxGSmF = await MisesLegacyPool.new(addressDEK7lNT, addressL5c5YE, uintItVkXj7, uintRFbm4BD, {from: "0x0000000000000000000000000000000000000001"});
		const uintsX9gkR = BigInt("1927")
		const uinttQXj12E = BigInt("279")
		const addresscWBmPp = accounts[1]
		await MisesLegacyPoolBzxGSmF.getReward.call({from: accounts[1]});
		const uint256L4B9vF9 = await MisesLegacyPoolBzxGSmF.stake.call(uintsX9gkR, {from: accounts[4]});
		const uint256L9Lc50n = await MisesLegacyPoolBzxGSmF.notifyRewardAmount.call(uinttQXj12E, {from: accounts[3]});
		const uint256QFB6DmT = await MisesLegacyPoolBzxGSmF.earned.call(addresscWBmPp, {from: accounts[2]});
	});
})