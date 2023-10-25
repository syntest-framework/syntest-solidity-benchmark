const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEtvT980Z = await BlueICE.new({from: accounts[3]});
		const uintF7m8Fz8 = BigInt("1479")
		const addressLs7D2sU = accounts[4]
		const uintPVTq53t = BigInt("25")
//		await BlueICEtvT980Z.renounceOwnership.call({from: accounts[5]});
//		const uint256cg64rN = await BlueICEtvT980Z.notifyRewardAmount.call(uintF7m8Fz8, {from: accounts[1]});
//		const addressarrayXEKxcpg = await BlueICEtvT980Z.getCommunity.call({from: accounts[5]});
//		const addressTSGWj3P = await BlueICEtvT980Z.transferOwnership.call(addressLs7D2sU, {from: accounts[4]});
//		const uint256uZhBqD1 = await BlueICEtvT980Z.unstake.call(uintPVTq53t, {from: accounts[2]});

		await expect(BlueICEtvT980Z.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIeSBDmY = await BlueICE.new({from: accounts[0]});
//		await BlueICEIeSBDmY.claimRewards.call({from: accounts[2]});
//		const addressarrayRnwBq8E = await BlueICEIeSBDmY.getCommunity.call({from: accounts[2]});

		await expect(BlueICEIeSBDmY.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEF4A6Nvg = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOOv1QRp = accounts[0]
		const addressLb6EWZx = accounts[1]
		const uintEOaDVGr = BigInt("1783")
		const addressarray4d0788 = await BlueICEF4A6Nvg.getCommunity.call({from: accounts[1]});
		const addressD5wLqab = await BlueICEF4A6Nvg.transferOwnership.call(addressOOv1QRp, {from: accounts[4]});
		const addressIVUjAqO = await BlueICEF4A6Nvg.updateReward.call(addressLb6EWZx, {from: accounts[5]});
		const uint256Ylg2o3l = await BlueICEF4A6Nvg.unstake.call(uintEOaDVGr, {from: accounts[3]});
		const uint256Kxwats = await BlueICEF4A6Nvg.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BlueICE', async () => {
		const BlueICEj6Co6Q9 = await BlueICE.new({from: accounts[4]});
		const uintqKHYBlN = BigInt("1089")
		const uintbVfJfs = BigInt("1215")
		const uintrEDIMol = BigInt("2046")
//		const uint256VNFnvG = await BlueICEj6Co6Q9.unstake.call(uintqKHYBlN, {from: accounts[1]});
//		const uint256YQlPGd = await BlueICEj6Co6Q9.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256hgTiqCY = await BlueICEj6Co6Q9.notifyRewardAmount.call(uintbVfJfs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zgZ22YT = await BlueICEj6Co6Q9.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256kRGSPM = await BlueICEj6Co6Q9.stake.call(uintrEDIMol, {from: accounts[4]});

		await expect(BlueICEj6Co6Q9.unstake.call(uintqKHYBlN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEK3LNcd = await BlueICE.new({from: accounts[4]});
		const uintgzNA9DX = BigInt("1794")
//		const uint256NSZzUqe = await BlueICEK3LNcd.stake.call(uintgzNA9DX, {from: accounts[4]});
//		const uint256HPMnnhM = await BlueICEK3LNcd.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BlueICEK3LNcd.stake.call(uintgzNA9DX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEyzD71AR = await BlueICE.new({from: accounts[5]});
		const boolOfduPpS = await BlueICEyzD71AR.isOwner.call({from: accounts[0]});
//		await BlueICEyzD71AR.exit.call({from: accounts[0]});
//		const booloNb2p1G = await BlueICEyzD71AR.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ATJP1DJ = await BlueICEyzD71AR.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256q4j4hk = await BlueICEyzD71AR.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolOfduPpS, false)
		await expect(BlueICEyzD71AR.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE5dpeXK = await BlueICE.new({from: accounts[0]});
		const uintVPc9Gft = BigInt("741")
		const addressWgb7Lqb = accounts[0]
		const addressYX7fSw5 = accounts[1]
		const addressdZPZFsq = accounts[2]
//		const uint256RppoWg5 = await BlueICE5dpeXK.notifyRewardAmount.call(uintVPc9Gft, {from: accounts[0]});
//		const uint256t0WkLSl = await BlueICE5dpeXK.earned.call(addressWgb7Lqb, {from: accounts[1]});
//		const address9bcaGL = await BlueICE5dpeXK.updateReward.call(addressYX7fSw5, {from: accounts[4]});
//		const addressW9tQ0KE = await BlueICE5dpeXK.updateReward.call(addressdZPZFsq, {from: accounts[1]});

		await expect(BlueICE5dpeXK.notifyRewardAmount.call(uintVPc9Gft, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEK3LNcd = await BlueICE.new({from: accounts[4]});
		const uintPJjDmro = BigInt("1805")
//		await BlueICEK3LNcd.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEK3LNcd.renounceOwnership.call({from: accounts[3]});
//		const uint256NSZzUqe = await BlueICEK3LNcd.stake.call(uintPJjDmro, {from: accounts[4]});
//		const uint256HPMnnhM = await BlueICEK3LNcd.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BlueICEK3LNcd.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIeSBDmY = await BlueICE.new({from: accounts[0]});
		const uint256BtKrl9m = await BlueICEIeSBDmY.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayJNJsup4 = await BlueICEIeSBDmY.getCommunity.call({from: accounts[4]});
		const boolFU32bK8 = await BlueICEIeSBDmY.isOwner.call({from: accounts[4]});
//		await BlueICEIeSBDmY.claimRewards.call({from: accounts[2]});
//		await BlueICEIeSBDmY.exit.call({from: accounts[0]});

		assert.equal(addressarrayJNJsup4, )
		assert.equal(boolFU32bK8, false)
		assert.equal(uint256BtKrl9m, BigInt("0"))
		await expect(BlueICEIeSBDmY.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEj6Co6Q9 = await BlueICE.new({from: accounts[4]});
		const uintP9SYGXj = BigInt("1210")
		const uintm1plJkG = BigInt("2046")
		const uint256YQlPGd = await BlueICEj6Co6Q9.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256hgTiqCY = await BlueICEj6Co6Q9.notifyRewardAmount.call(uintP9SYGXj, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zgZ22YT = await BlueICEj6Co6Q9.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256kRGSPM = await BlueICEj6Co6Q9.stake.call(uintm1plJkG, {from: accounts[4]});

		assert.equal(uint256YQlPGd, BigInt("500000000000000000000"))
		await expect(BlueICEj6Co6Q9.notifyRewardAmount.call(uintP9SYGXj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIeSBDmY = await BlueICE.new({from: accounts[0]});
		const uintZ0e8FCi = BigInt("1646")
		const addressNAHceYi = accounts[1]
		const addressYD6cgdO = await BlueICEIeSBDmY.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256kOluJYp = await BlueICEIeSBDmY.notifyRewardAmount.call(uintZ0e8FCi, {from: accounts[0]});
//		const addressE0aSe2 = await BlueICEIeSBDmY.transferOwnership.call(addressNAHceYi, {from: accounts[1]});
//		await BlueICEIeSBDmY.checkhalv.call({from: accounts[0]});

		assert.equal(addressYD6cgdO, 0x3DFfFF05f41F8aba5403078541477Bc9a3789E47)
		await expect(BlueICEIeSBDmY.notifyRewardAmount.call(uintZ0e8FCi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEACV65AZ = await BlueICE.new({from: accounts[1]});
		const addressxTeX9T = accounts[0]
		const addressOmxBRIZ = await BlueICEACV65AZ.transferOwnership.call(addressxTeX9T, {from: accounts[1]});
//		await BlueICEACV65AZ.renounceOwnership.call({from: accounts[2]});
//		await BlueICEACV65AZ.checkhalv.call({from: accounts[1]});

		await expect(BlueICEACV65AZ.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEClRnWhI = await BlueICE.new({from: accounts[0]});
		const addressMbfzuo5 = accounts[0]
//		await BlueICEClRnWhI.renounceOwnership.call({from: accounts[0]});
//		await BlueICEClRnWhI.checkhalv.call({from: accounts[4]});
//		const addressmyVND6 = await BlueICEClRnWhI.transferOwnership.call(addressMbfzuo5, {from: accounts[4]});

		await expect(BlueICEClRnWhI.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})