const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEFktlvR = await BlueICE.new({from: accounts[3]});
		const uinteNpCBWs = BigInt("756")
		const uintA5uQPft = BigInt("1653")
		const addressWwayXmY = accounts[2]
		const uintTzqGo3R = BigInt("1623")
		const uint256ve7z3ul = await BlueICEFktlvR.stake.call(uinteNpCBWs, {from: accounts[2]});
		const uint256mMOSP0o = await BlueICEFktlvR.stake.call(uintA5uQPft, {from: accounts[1]});
		const addressarrayu0khwpp = await BlueICEFktlvR.getCommunity.call({from: accounts[1]});
		const addressdJpgzUw = await BlueICEFktlvR.updateReward.call(addressWwayXmY, {from: accounts[3]});
		const addressarrayZV3wOM = await BlueICEFktlvR.getCommunity.call({from: accounts[0]});
		const uint256Y65dH9E = await BlueICEFktlvR.stake.call(uintTzqGo3R, {from: accounts[1]});

		await expect(BlueICEFktlvR.stake.call(uinteNpCBWs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgfaqLdh = await BlueICE.new({from: accounts[4]});
		const addressVbjfjCE = accounts[3]
		const uint256y1FIM9i = await BlueICEgfaqLdh.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256XmmOUIV = await BlueICEgfaqLdh.getCurrentRewardReserve.call({from: accounts[5]});
		const boolo32rxrX = await BlueICEgfaqLdh.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressHXjhED = await BlueICEgfaqLdh.updateReward.call(addressVbjfjCE, {from: accounts[3]});

		assert.equal(boolo32rxrX, false)
		assert.equal(uint256XmmOUIV, BigInt("500000000000000000000"))
		assert.equal(uint256y1FIM9i, BigInt("0"))
		await expect(BlueICEgfaqLdh.updateReward.call(addressVbjfjCE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEyPcTFYg = await BlueICE.new({from: accounts[2]});
		const addressX72a7j = accounts[3]
		const uintXBu0GE4 = BigInt("1872")
		const addressLmUOVBc = await BlueICEyPcTFYg.transferOwnership.call(addressX72a7j, {from: accounts[1]});
		const uint256lR1dmcm = await BlueICEyPcTFYg.getCurrentRewardReserve.call({from: accounts[5]});
		await BlueICEyPcTFYg.claimRewards.call({from: accounts[5]});
		const uint256vIaxSJF = await BlueICEyPcTFYg.notifyRewardAmount.call(uintXBu0GE4, {from: accounts[0]});

		await expect(BlueICEyPcTFYg.transferOwnership.call(addressX72a7j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEFxKmNjK = await BlueICE.new({from: accounts[0]});
		await BlueICEFxKmNjK.exit.call({from: accounts[2]});
		const addressHEp1cHr = await BlueICEFxKmNjK.owner.call({from: accounts[4]});

		await expect(BlueICEFxKmNjK.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgo5Ana9 = await BlueICE.new({from: accounts[1]});
		const uintqgI4BKd = BigInt("1398")
		const boolhkHs0rd = await BlueICEgo5Ana9.isOwner.call({from: accounts[4]});
		const addressCy9vDyo = await BlueICEgo5Ana9.owner.call({from: accounts[4]});
		const uint256kMk2bsv = await BlueICEgo5Ana9.stake.call(uintqgI4BKd, {from: accounts[2]});

		assert.equal(addressCy9vDyo, 0x4f83499dFBcc304995000AAE9FA8DEC611EC63A5)
		assert.equal(boolhkHs0rd, false)
		await expect(BlueICEgo5Ana9.stake.call(uintqgI4BKd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZAK7UA = await BlueICE.new({from: accounts[5]});
		await BlueICEZAK7UA.claimRewards.call({from: accounts[4]});
		const uint256ejOROpp = await BlueICEZAK7UA.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(BlueICEZAK7UA.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEFxKmNjK = await BlueICE.new({from: accounts[0]});
		const addressarrayWanF8RZ = await BlueICEFxKmNjK.getCommunity.call({from: accounts[1]});
		const addressHEp1cHr = await BlueICEFxKmNjK.owner.call({from: accounts[4]});
		await BlueICEFxKmNjK.onlyOwner.call({from: accounts[5]});

		assert.equal(addressHEp1cHr, 0x22A3aE4238053ea34cc64c9019ff4E45CC6f4ADe)
		assert.equal(addressarrayWanF8RZ, )
		await expect(BlueICEFxKmNjK.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEFxKmNjK = await BlueICE.new({from: accounts[0]});
		const uint5nHN1m = BigInt("2004")
		const uint256LIVE99V = await BlueICEFxKmNjK.unstake.call(uint5nHN1m, {from: accounts[4]});
		await BlueICEFxKmNjK.checkhalv.call({from: accounts[0]});
		const addressHEp1cHr = await BlueICEFxKmNjK.owner.call({from: accounts[4]});

		await expect(BlueICEFxKmNjK.unstake.call(uint5nHN1m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEFxKmNjK = await BlueICE.new({from: accounts[0]});
		const uintlpVoWjI = BigInt("1643")
		const uint256Ux9ed5f = await BlueICEFxKmNjK.notifyRewardAmount.call(uintlpVoWjI, {from: accounts[0]});
		const addressHEp1cHr = await BlueICEFxKmNjK.owner.call({from: accounts[4]});

		await expect(BlueICEFxKmNjK.notifyRewardAmount.call(uintlpVoWjI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEFxKmNjK = await BlueICE.new({from: accounts[0]});
		await BlueICEFxKmNjK.renounceOwnership.call({from: accounts[0]});
		await BlueICEFxKmNjK.exit.call({from: accounts[2]});

		await expect(BlueICEFxKmNjK.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEeZbALFG = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const address7Ssv5t = accounts[4]
		const addressVkdXm9v = await BlueICEeZbALFG.updateReward.call(address7Ssv5t, {from: accounts[0]});
		await BlueICEeZbALFG.claimRewards.call({from: accounts[2]});
		const uint256NB8i0nu = await BlueICEeZbALFG.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEFxKmNjK = await BlueICE.new({from: accounts[0]});
		const addressJniu1MZ = accounts[1]
		const addressuoFdhF4 = await BlueICEFxKmNjK.transferOwnership.call(addressJniu1MZ, {from: accounts[0]});
		const addressarrayZy8n4Zb = await BlueICEFxKmNjK.getCommunity.call({from: accounts[2]});
		await BlueICEFxKmNjK.exit.call({from: accounts[2]});

		assert.equal(addressarrayZy8n4Zb, )
		await expect(BlueICEFxKmNjK.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})