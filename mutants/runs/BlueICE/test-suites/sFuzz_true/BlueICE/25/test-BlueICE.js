const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEytZHGEu = await BlueICE.new({from: accounts[4]});
		const address7SByVi = accounts[3]
		const addressA7PJuiO = await BlueICEytZHGEu.transferOwnership.call(address7SByVi, {from: accounts[0]});
		const uint256pIht1Bo = await BlueICEytZHGEu.getCurrentRewardReserve.call({from: accounts[0]});

		await expect(BlueICEytZHGEu.transferOwnership.call(address7SByVi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOUSogv5 = await BlueICE.new({from: accounts[2]});
		const addressCgQEW6T = accounts[1]
		const uintmDNUqns = BigInt("826")
		const uint2566NSqkB = await BlueICEOUSogv5.earned.call(addressCgQEW6T, {from: accounts[0]});
		const uint256MwQZfvL = await BlueICEOUSogv5.notifyRewardAmount.call(uintmDNUqns, {from: accounts[2]});
		await BlueICEOUSogv5.onlyOwner.call({from: accounts[0]});
		const addressarrayOkhSTtr = await BlueICEOUSogv5.getCommunity.call({from: accounts[4]});

		assert.equal(uint2566NSqkB, BigInt("0"))
		await expect(BlueICEOUSogv5.notifyRewardAmount.call(uintmDNUqns, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEGlJCnry = await BlueICE.new({from: accounts[1]});
		const uintjLGrwp5 = BigInt("294")
		const addressM8Hurvp = accounts[2]
		const uint256q6WVjNI = await BlueICEGlJCnry.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256kH2YioF = await BlueICEGlJCnry.unstake.call(uintjLGrwp5, {from: "0x0000000000000000000000000000000000000001"});
		const addressbTeWzFL = await BlueICEGlJCnry.transferOwnership.call(addressM8Hurvp, {from: accounts[4]});
		const boolUFTxPtI = await BlueICEGlJCnry.isOwner.call({from: accounts[4]});

		assert.equal(uint256q6WVjNI, BigInt("500000000000000000000"))
		await expect(BlueICEGlJCnry.unstake.call(uintjLGrwp5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICExV9B36 = await BlueICE.new({from: accounts[1]});
		const uintFqkRMpf = BigInt("1505")
		const uintGbj35Kv = BigInt("2031")
		const addressuJqMaTX = accounts[0]
		const uint256HCtG42d = await BlueICExV9B36.stake.call(uintFqkRMpf, {from: accounts[4]});
		const uint256CEkzKHW = await BlueICExV9B36.unstake.call(uintGbj35Kv, {from: accounts[4]});
		const boolItCmSj8 = await BlueICExV9B36.isOwner.call({from: accounts[1]});
		await BlueICExV9B36.exit.call({from: accounts[4]});
		const uint256dW4qNt = await BlueICExV9B36.earned.call(addressuJqMaTX, {from: accounts[0]});

		await expect(BlueICExV9B36.stake.call(uintFqkRMpf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnrGdvyp = await BlueICE.new({from: accounts[0]});
		const addressdpvOI5S = accounts[4]
		const boolhsb9XjL = await BlueICEnrGdvyp.isOwner.call({from: accounts[5]});
		const uint256cYmA6vM = await BlueICEnrGdvyp.earned.call(addressdpvOI5S, {from: accounts[3]});
		const uint256yusbzbk = await BlueICEnrGdvyp.rewardPerToken.call({from: accounts[2]});
		await BlueICEnrGdvyp.exit.call({from: accounts[3]});

		assert.equal(boolhsb9XjL, false)
		assert.equal(uint256cYmA6vM, BigInt("0"))
		assert.equal(uint256yusbzbk, BigInt("0"))
		await expect(BlueICEnrGdvyp.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEUyyCCDD = await BlueICE.new({from: accounts[0]});
		const uintMhhGIKH = BigInt("803")
		const addressarrayJMVP4vr = await BlueICEUyyCCDD.getCommunity.call({from: accounts[1]});
		await BlueICEUyyCCDD.onlyOwner.call({from: accounts[0]});
		const uint256gh5D6UX = await BlueICEUyyCCDD.notifyRewardAmount.call(uintMhhGIKH, {from: accounts[3]});

		assert.equal(addressarrayJMVP4vr, )
		await expect(BlueICEUyyCCDD.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEDeQwMAt = await BlueICE.new({from: accounts[4]});
		await BlueICEDeQwMAt.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEDeQwMAt.onlyOwner.call({from: accounts[4]});
		await BlueICEDeQwMAt.claimRewards.call({from: accounts[0]});

		await expect(BlueICEDeQwMAt.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEujE9ZHn = await BlueICE.new({from: accounts[1]});
		const addressnyTpqRE = accounts[5]
		const uintz3XJUQ0 = BigInt("1340")
		const addressN0UjwOj = await BlueICEujE9ZHn.owner.call({from: accounts[0]});
		const uint256fZzLPdr = await BlueICEujE9ZHn.earned.call(addressnyTpqRE, {from: accounts[2]});
		const addressarrayObw1jqe = await BlueICEujE9ZHn.getCommunity.call({from: accounts[4]});
		const uint256SfUf23e = await BlueICEujE9ZHn.stake.call(uintz3XJUQ0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressN0UjwOj, 0x206984ebdCaf691b85bE065b9239EF2ef8B046B1)
		assert.equal(addressarrayObw1jqe, )
		assert.equal(uint256fZzLPdr, BigInt("0"))
		await expect(BlueICEujE9ZHn.stake.call(uintz3XJUQ0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEujE9ZHn = await BlueICE.new({from: accounts[1]});
		const uintLOCrQmB = BigInt("1323")
		await BlueICEujE9ZHn.renounceOwnership.call({from: accounts[1]});
		const uint2562B4Ahs = await BlueICEujE9ZHn.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256SfUf23e = await BlueICEujE9ZHn.stake.call(uintLOCrQmB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEujE9ZHn.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEBHXRE7H = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGr2imyD = accounts[0]
		const uintFM5iNWR = BigInt("1519")
		const uint256WWvXxb = await BlueICEBHXRE7H.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressiWo6lI8 = await BlueICEBHXRE7H.transferOwnership.call(addressGr2imyD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ee9FNY = await BlueICEBHXRE7H.rewardPerToken.call({from: accounts[3]});
		const uint256er3CjGN = await BlueICEBHXRE7H.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256rauRbEb = await BlueICEBHXRE7H.stake.call(uintFM5iNWR, {from: accounts[3]});
	});

	it('test for BlueICE', async () => {
		const BlueICEytZHGEu = await BlueICE.new({from: accounts[4]});
		const addressh7DW6qW = accounts[4]
		const uintIvZ0e91 = BigInt("1523")
		const uintxWMLyl = BigInt("1607")
		const uintnNhSiAi = BigInt("1943")
		const addresstxBLZ5A = await BlueICEytZHGEu.transferOwnership.call(addressh7DW6qW, {from: accounts[4]});
		const uint256VQJTl9y = await BlueICEytZHGEu.stake.call(uintIvZ0e91, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LHEpujx = await BlueICEytZHGEu.unstake.call(uintxWMLyl, {from: accounts[0]});
		const uint256s5ZZ50J = await BlueICEytZHGEu.unstake.call(uintnNhSiAi, {from: accounts[4]});

		await expect(BlueICEytZHGEu.stake.call(uintIvZ0e91, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})