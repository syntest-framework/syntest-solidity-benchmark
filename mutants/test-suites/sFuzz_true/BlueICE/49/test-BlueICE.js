const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICELH5wODQ = await BlueICE.new({from: accounts[3]});
		const addressT6IM6Kj = accounts[0]
		const uint256iL5pDTG = await BlueICELH5wODQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jJWxyhj = await BlueICELH5wODQ.earned.call(addressT6IM6Kj, {from: accounts[0]});
		const uint256TN9xg3U = await BlueICELH5wODQ.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayyJ9P6dU = await BlueICELH5wODQ.getCommunity.call({from: accounts[0]});

		assert.equal(addressarrayyJ9P6dU, )
		assert.equal(uint256TN9xg3U, BigInt("500000000000000000000"))
		assert.equal(uint256iL5pDTG, BigInt("0"))
		assert.equal(uint256jJWxyhj, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEztdY5E3 = await BlueICE.new({from: accounts[1]});
//		await BlueICEztdY5E3.exit.call({from: accounts[1]});
//		await BlueICEztdY5E3.renounceOwnership.call({from: accounts[3]});
//		await BlueICEztdY5E3.exit.call({from: accounts[0]});
//		await BlueICEztdY5E3.renounceOwnership.call({from: accounts[4]});

		await expect(BlueICEztdY5E3.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEW87BV1T = await BlueICE.new({from: accounts[4]});
		const addressWjIi5CE = accounts[0]
		const uintfV6LEgZ = BigInt("110")
		const uint256Dtyntbg = await BlueICEW87BV1T.lastTimeRewardApplicable.call({from: accounts[2]});
//		await BlueICEW87BV1T.onlyOwner.call({from: accounts[2]});
//		const addressOJNZmyU = await BlueICEW87BV1T.owner.call({from: accounts[0]});
//		const addressSYR5kVn = await BlueICEW87BV1T.updateReward.call(addressWjIi5CE, {from: accounts[3]});
//		await BlueICEW87BV1T.claimRewards.call({from: accounts[1]});
//		const uint256rbbPAMv = await BlueICEW87BV1T.unstake.call(uintfV6LEgZ, {from: accounts[0]});

		assert.equal(uint256Dtyntbg, BigInt("0"))
		await expect(BlueICEW87BV1T.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEaUYN1DU = await BlueICE.new({from: accounts[1]});
		const addressBaXpVM6 = accounts[0]
		const uintPc13Bu7 = BigInt("803")
		const addressoXEDBiB = accounts[4]
		const uintqEAGHPN = BigInt("1128")
		const addresseLmIQz = await BlueICEaUYN1DU.transferOwnership.call(addressBaXpVM6, {from: accounts[1]});
//		const uint256einaQEQ = await BlueICEaUYN1DU.unstake.call(uintPc13Bu7, {from: accounts[1]});
//		const uint256V7w0SSD = await BlueICEaUYN1DU.earned.call(addressoXEDBiB, {from: accounts[1]});
//		await BlueICEaUYN1DU.renounceOwnership.call({from: accounts[4]});
//		const uint256YzRllj = await BlueICEaUYN1DU.unstake.call(uintqEAGHPN, {from: accounts[3]});

		await expect(BlueICEaUYN1DU.unstake.call(uintPc13Bu7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEMesFpRU = await BlueICE.new({from: accounts[0]});
		const uintKO9IEvg = BigInt("1646")
		const uint256MXm4FE0 = await BlueICEMesFpRU.getCurrentRewardReserve.call({from: accounts[5]});
//		await BlueICEMesFpRU.claimRewards.call({from: accounts[4]});
//		const uint256UPGLCH = await BlueICEMesFpRU.unstake.call(uintKO9IEvg, {from: accounts[2]});

		assert.equal(uint256MXm4FE0, BigInt("500000000000000000000"))
		await expect(BlueICEMesFpRU.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEpyZorLN = await BlueICE.new({from: accounts[2]});
		const addressNPcHWX = "0x0000000000000000000000000000000000000001"
//		const addresso9VAgQb = await BlueICEpyZorLN.transferOwnership.call(addressNPcHWX, {from: accounts[3]});
//		await BlueICEpyZorLN.exit.call({from: accounts[0]});
//		const uint256tuMUE4y = await BlueICEpyZorLN.rewardPerToken.call({from: accounts[1]});

		await expect(BlueICEpyZorLN.transferOwnership.call(addressNPcHWX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd6DDNiS = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressZeJRqKX = accounts[1]
		const addressPnzMo1M = await BlueICEd6DDNiS.updateReward.call(addressZeJRqKX, {from: accounts[3]});
		await BlueICEd6DDNiS.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FB3hwL = await BlueICEd6DDNiS.getCurrentRewardReserve.call({from: accounts[3]});
		await BlueICEd6DDNiS.renounceOwnership.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEaUYN1DU = await BlueICE.new({from: accounts[1]});
		const uintsa2mRpm = BigInt("377")
		const addressuvo74mK = accounts[0]
		const addressZBqhdfs = accounts[2]
		const uintRKoXWP = BigInt("803")
		const addressXxUt7sP = accounts[4]
		const uintZeUoefw = BigInt("1128")
//		const uint256kScQvjp = await BlueICEaUYN1DU.stake.call(uintsa2mRpm, {from: accounts[4]});
//		const addresseLmIQz = await BlueICEaUYN1DU.transferOwnership.call(addressuvo74mK, {from: accounts[1]});
//		const addressYZzzsjT = await BlueICEaUYN1DU.transferOwnership.call(addressZBqhdfs, {from: accounts[4]});
//		const uint256einaQEQ = await BlueICEaUYN1DU.unstake.call(uintRKoXWP, {from: accounts[1]});
//		const uint256V7w0SSD = await BlueICEaUYN1DU.earned.call(addressXxUt7sP, {from: accounts[1]});
//		await BlueICEaUYN1DU.renounceOwnership.call({from: accounts[4]});
//		const uint256YzRllj = await BlueICEaUYN1DU.unstake.call(uintZeUoefw, {from: accounts[3]});

		await expect(BlueICEaUYN1DU.stake.call(uintsa2mRpm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEF8Wz6CN = await BlueICE.new({from: accounts[3]});
		const addressdSarv1X = accounts[0]
		const uintfvvWIne = BigInt("89")
		const uint256JQNiRJK = await BlueICEF8Wz6CN.rewardPerToken.call({from: accounts[5]});
		const addressEaSMGlt = await BlueICEF8Wz6CN.owner.call({from: accounts[4]});
		const uint256GjDE4m0 = await BlueICEF8Wz6CN.earned.call(addressdSarv1X, {from: accounts[4]});
//		const uint256NxlYJQZ = await BlueICEF8Wz6CN.notifyRewardAmount.call(uintfvvWIne, {from: accounts[4]});

		assert.equal(addressEaSMGlt, 0xa17E627Cfb72deEF737d2FA7D50a59733CC134eE)
		assert.equal(uint256GjDE4m0, BigInt("0"))
		assert.equal(uint256JQNiRJK, BigInt("0"))
		await expect(BlueICEF8Wz6CN.notifyRewardAmount.call(uintfvvWIne, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEaUYN1DU = await BlueICE.new({from: accounts[1]});
		const addressGqIsvve = accounts[3]
		const uintnwv14F = BigInt("787")
		const uintCvTzgf = BigInt("731")
		const uintj927OuG = BigInt("1324")
		const uintY7xGlr = BigInt("964")
		const uint256kpvzkS9 = await BlueICEaUYN1DU.earned.call(addressGqIsvve, {from: accounts[2]});
//		const uint256pcKXBFK = await BlueICEaUYN1DU.notifyRewardAmount.call(uintnwv14F, {from: accounts[1]});
//		const uint256einaQEQ = await BlueICEaUYN1DU.unstake.call(uintCvTzgf, {from: accounts[1]});
//		const uint256clIdRlE = await BlueICEaUYN1DU.unstake.call(uintj927OuG, {from: accounts[1]});
//		const uint256Y0qWDeL = await BlueICEaUYN1DU.notifyRewardAmount.call(uintY7xGlr, {from: accounts[0]});

		assert.equal(uint256kpvzkS9, BigInt("0"))
		await expect(BlueICEaUYN1DU.notifyRewardAmount.call(uintnwv14F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})