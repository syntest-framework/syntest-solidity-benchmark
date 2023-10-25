const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardjGnvHOb = await AavePoolReward.new({from: accounts[4]});
		const uintZ9fa7Le = BigInt("104")
		const uintOe4OFa5 = BigInt("886")
//		const uint256EUoA7k = await AavePoolRewardjGnvHOb.withdraw.call(uintZ9fa7Le, {from: accounts[3]});
//		const uint256Rv6eGA5 = await AavePoolRewardjGnvHOb.withdraw.call(uintOe4OFa5, {from: accounts[2]});
//		const uint256MgdyzEm = await AavePoolRewardjGnvHOb.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256QcjPlKa = await AavePoolRewardjGnvHOb.rewardPerToken.call({from: accounts[3]});

		await expect(AavePoolRewardjGnvHOb.withdraw.call(uintZ9fa7Le, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardSMqe4kk = await AavePoolReward.new({from: accounts[4]});
		const uintPOwlpQY = BigInt("1231")
		const uint1aU6ld = BigInt("1148")
		const addressWutJiGO = accounts[4]
		const uint256aYOgGnW = await AavePoolRewardSMqe4kk.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256JeVqAWl = await AavePoolRewardSMqe4kk.stake.call(uintPOwlpQY, {from: accounts[2]});
//		const uint256mn9WgWD = await AavePoolRewardSMqe4kk.stake.call(uint1aU6ld, {from: accounts[2]});
//		const uint2568c6Sfu = await AavePoolRewardSMqe4kk.earned.call(addressWutJiGO, {from: accounts[2]});

		assert.equal(uint256aYOgGnW, BigInt("0"))
		await expect(AavePoolRewardSMqe4kk.stake.call(uintPOwlpQY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhOhheDx = await AavePoolReward.new({from: accounts[1]});
		const addressYggeNH4 = accounts[4]
		const uintdHN5OQb = BigInt("562")
		const uintSynkyW = BigInt("356")
		const uint256pM8NSSy = await AavePoolRewardhOhheDx.earned.call(addressYggeNH4, {from: accounts[5]});
//		const uint256AeuE2Ig = await AavePoolRewardhOhheDx.notifyRewardAmount.call(uintdHN5OQb, {from: accounts[2]});
//		const uint256yMTtRwh = await AavePoolRewardhOhheDx.notifyRewardAmount.call(uintSynkyW, {from: accounts[1]});

		assert.equal(uint256pM8NSSy, BigInt("0"))
		await expect(AavePoolRewardhOhheDx.notifyRewardAmount.call(uintdHN5OQb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUXEk33l = await AavePoolReward.new({from: accounts[2]});
		const addressHS2nrNe = accounts[0]
		const addressZfG5hB9 = accounts[2]
//		const addressI4X7p9 = await AavePoolRewardUXEk33l.updateReward.call(addressHS2nrNe, {from: accounts[4]});
//		await AavePoolRewardUXEk33l.exit.call({from: accounts[4]});
//		const addressobENJpg = await AavePoolRewardUXEk33l.dev.call(addressZfG5hB9, {from: accounts[4]});

		await expect(AavePoolRewardUXEk33l.updateReward.call(addressHS2nrNe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardY9n1lzC = await AavePoolReward.new({from: accounts[3]});
		const uintgl0usDc = BigInt("418")
//		await AavePoolRewardY9n1lzC.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardY9n1lzC.getReward.call({from: accounts[3]});
//		const uint256AjZYuQm = await AavePoolRewardY9n1lzC.stake.call(uintgl0usDc, {from: accounts[3]});
//		const uint256mW1PRoK = await AavePoolRewardY9n1lzC.rewardPerToken.call({from: accounts[5]});

		await expect(AavePoolRewardY9n1lzC.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnwF72jS = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRRoNhdJ = "0x0000000000000000000000000000000000000001"
		const uintAfSWzfI = BigInt("1257")
		const uint256qdhojl = await AavePoolRewardnwF72jS.earned.call(addressRRoNhdJ, {from: accounts[2]});
		await AavePoolRewardnwF72jS.exit.call({from: accounts[1]});
		const uint256Q0gn10r = await AavePoolRewardnwF72jS.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YCxsKUQ = await AavePoolRewardnwF72jS.withdraw.call(uintAfSWzfI, {from: accounts[4]});
		await AavePoolRewardnwF72jS.getReward.call({from: accounts[0]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardazKJ7cW = await AavePoolReward.new({from: accounts[3]});
		const uint0iy77W = BigInt("20")
		const uintnFCOLV6 = BigInt("695")
		const uint256Gpb5FoY = await AavePoolRewardazKJ7cW.notifyRewardAmount.call(uint0iy77W, {from: accounts[3]});
//		const uint256qAvx4j = await AavePoolRewardazKJ7cW.stake.call(uintnFCOLV6, {from: accounts[1]});
//		const uint2568x0exa = await AavePoolRewardazKJ7cW.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(AavePoolRewardazKJ7cW.stake.call(uintnFCOLV6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardazKJ7cW = await AavePoolReward.new({from: accounts[3]});
		const addresszFUHB5L = accounts[4]
		const addressWwsBLdT = "0x0000000000000000000000000000000000000001"
		const uinthSnQ0i4 = BigInt("700")
//		await AavePoolRewardazKJ7cW.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardazKJ7cW.getReward.call({from: accounts[4]});
//		const addressTmWM865 = await AavePoolRewardazKJ7cW.dev.call(addresszFUHB5L, {from: accounts[0]});
//		const uint256r4XuETq = await AavePoolRewardazKJ7cW.earned.call(addressWwsBLdT, {from: accounts[0]});
//		const uint256qAvx4j = await AavePoolRewardazKJ7cW.stake.call(uinthSnQ0i4, {from: accounts[1]});

		await expect(AavePoolRewardazKJ7cW.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardazKJ7cW = await AavePoolReward.new({from: accounts[3]});
		const uintJ2U5gun = BigInt("0")
		const uintqkf4P9Q = BigInt("242")
//		const uint256qAvx4j = await AavePoolRewardazKJ7cW.stake.call(uintJ2U5gun, {from: accounts[1]});
//		const uint256CjLVoMq = await AavePoolRewardazKJ7cW.notifyRewardAmount.call(uintqkf4P9Q, {from: accounts[0]});
//		const uint256fl0L05p = await AavePoolRewardazKJ7cW.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardazKJ7cW.stake.call(uintJ2U5gun, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})