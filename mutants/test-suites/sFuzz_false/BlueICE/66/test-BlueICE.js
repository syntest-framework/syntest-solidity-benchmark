const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEz1yT1LT = await BlueICE.new({from: accounts[1]});
		const addressTGfKscC = accounts[3]
		const uintQWjkDkC = BigInt("1630")
//		const addresszVs06y = await BlueICEz1yT1LT.updateReward.call(addressTGfKscC, {from: accounts[3]});
//		const uint256ogQOS1R = await BlueICEz1yT1LT.notifyRewardAmount.call(uintQWjkDkC, {from: accounts[1]});
//		await BlueICEz1yT1LT.claimRewards.call({from: accounts[5]});
//		const uint256c0y8BG = await BlueICEz1yT1LT.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BlueICEz1yT1LT.updateReward.call(addressTGfKscC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEam8dsOJ = await BlueICE.new({from: accounts[5]});
//		await BlueICEam8dsOJ.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256QRrSp8y = await BlueICEam8dsOJ.lastTimeRewardApplicable.call({from: accounts[4]});
//		const boolBegVQS7 = await BlueICEam8dsOJ.isOwner.call({from: accounts[0]});

		await expect(BlueICEam8dsOJ.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECcCNJeN = await BlueICE.new({from: accounts[5]});
		const uintUxGawv8 = BigInt("897")
		const addressarrayrnZyqj6 = await BlueICECcCNJeN.getCommunity.call({from: accounts[3]});
		const boolc2PZvSS = await BlueICECcCNJeN.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICECcCNJeN.onlyOwner.call({from: accounts[2]});
//		const uint256xd8edyF = await BlueICECcCNJeN.stake.call(uintUxGawv8, {from: accounts[1]});

		assert.equal(addressarrayrnZyqj6, )
		assert.equal(boolc2PZvSS, false)
		await expect(BlueICECcCNJeN.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEvLhTIIx = await BlueICE.new({from: accounts[1]});
		const uintrC6CMSq = BigInt("873")
		const uint256n96CWVZ = await BlueICEvLhTIIx.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint256R2SsWy = await BlueICEvLhTIIx.unstake.call(uintrC6CMSq, {from: accounts[3]});
//		const uint256gAh40Lw = await BlueICEvLhTIIx.rewardPerToken.call({from: accounts[3]});
//		const uint256dpWY8ro = await BlueICEvLhTIIx.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256n96CWVZ, BigInt("500000000000000000000"))
		await expect(BlueICEvLhTIIx.unstake.call(uintrC6CMSq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERL2dEbj = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		await BlueICERL2dEbj.renounceOwnership.call({from: accounts[2]});
		const uint256itBDXiS = await BlueICERL2dEbj.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BlueICE', async () => {
		const BlueICE8Q4wDs = await BlueICE.new({from: accounts[1]});
		const uintqRME65n = BigInt("627")
		const boolr4jhAsK = await BlueICE8Q4wDs.isOwner.call({from: accounts[0]});
		const uint256vJ3mGCP = await BlueICE8Q4wDs.rewardPerToken.call({from: accounts[2]});
//		const uint256txjT5Mx = await BlueICE8Q4wDs.notifyRewardAmount.call(uintqRME65n, {from: accounts[1]});

		assert.equal(boolr4jhAsK, false)
		assert.equal(uint256vJ3mGCP, BigInt("0"))
		await expect(BlueICE8Q4wDs.notifyRewardAmount.call(uintqRME65n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEQ0INf0J = await BlueICE.new({from: accounts[1]});
//		await BlueICEQ0INf0J.renounceOwnership.call({from: accounts[3]});
//		const uint2560X4Sdd = await BlueICEQ0INf0J.rewardPerToken.call({from: accounts[2]});
//		const uint256gMyUz3e = await BlueICEQ0INf0J.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256JstUJP1 = await BlueICEQ0INf0J.rewardPerToken.call({from: accounts[1]});
//		const uint256XK8zv4 = await BlueICEQ0INf0J.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEQ0INf0J.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE8Q4wDs = await BlueICE.new({from: accounts[1]});
//		await BlueICE8Q4wDs.renounceOwnership.call({from: accounts[1]});
//		const boolr4jhAsK = await BlueICE8Q4wDs.isOwner.call({from: accounts[0]});

		await expect(BlueICE8Q4wDs.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE8Q4wDs = await BlueICE.new({from: accounts[1]});
		const uint256vJ3mGCP = await BlueICE8Q4wDs.rewardPerToken.call({from: accounts[2]});
//		await BlueICE8Q4wDs.exit.call({from: accounts[0]});

		assert.equal(uint256vJ3mGCP, BigInt("0"))
		await expect(BlueICE8Q4wDs.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEam8dsOJ = await BlueICE.new({from: accounts[5]});
		const uintLZ05ql = BigInt("232")
//		const uint256fWwivko = await BlueICEam8dsOJ.stake.call(uintLZ05ql, {from: accounts[3]});
//		await BlueICEam8dsOJ.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolBegVQS7 = await BlueICEam8dsOJ.isOwner.call({from: accounts[0]});

		await expect(BlueICEam8dsOJ.stake.call(uintLZ05ql, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE8Q4wDs = await BlueICE.new({from: accounts[1]});
		const uint256vJ3mGCP = await BlueICE8Q4wDs.rewardPerToken.call({from: accounts[2]});
//		await BlueICE8Q4wDs.renounceOwnership.call({from: accounts[1]});
//		const address5df5Ia = await BlueICE8Q4wDs.owner.call({from: accounts[4]});

		assert.equal(uint256vJ3mGCP, BigInt("0"))
		await expect(BlueICE8Q4wDs.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICESJd5Ss = await BlueICE.new({from: accounts[4]});
		const addresssWNUiyp = accounts[3]
		const addressaWaOrqj = await BlueICESJd5Ss.transferOwnership.call(addresssWNUiyp, {from: accounts[4]});
		const uint256PXgQ25m = await BlueICESJd5Ss.lastTimeRewardApplicable.call({from: accounts[4]});
//		await BlueICESJd5Ss.claimRewards.call({from: accounts[3]});
//		const addressarrayK59EAIz = await BlueICESJd5Ss.getCommunity.call({from: accounts[4]});
//		const booluUFZNNS = await BlueICESJd5Ss.isOwner.call({from: accounts[0]});

		assert.equal(uint256PXgQ25m, BigInt("0"))
		await expect(BlueICESJd5Ss.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})