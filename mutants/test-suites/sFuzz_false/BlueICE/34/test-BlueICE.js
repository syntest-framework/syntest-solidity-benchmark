const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICERWkrV5 = await BlueICE.new({from: accounts[1]});
		const uint256uw6G4NF = await BlueICERWkrV5.getCurrentRewardReserve.call({from: accounts[0]});
//		await BlueICERWkrV5.renounceOwnership.call({from: accounts[4]});
//		const uint2569xZCO0 = await BlueICERWkrV5.lastTimeRewardApplicable.call({from: accounts[3]});
//		await BlueICERWkrV5.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256uw6G4NF, BigInt("500000000000000000000"))
		await expect(BlueICERWkrV5.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIZAokDk = await BlueICE.new({from: accounts[0]});
//		await BlueICEIZAokDk.onlyOwner.call({from: accounts[1]});
//		const uint256XlbCHpZ = await BlueICEIZAokDk.rewardPerToken.call({from: accounts[3]});

		await expect(BlueICEIZAokDk.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE4eE8Bn = await BlueICE.new({from: accounts[2]});
		const uint256FVbsqvd = await BlueICE4eE8Bn.getCurrentRewardReserve.call({from: accounts[4]});
//		await BlueICE4eE8Bn.claimRewards.call({from: accounts[1]});

		assert.equal(uint256FVbsqvd, BigInt("500000000000000000000"))
		await expect(BlueICE4eE8Bn.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHui6lmf = await BlueICE.new({from: accounts[2]});
		const uintMlzDovJ = BigInt("1350")
		const addressarraycslsSQr = await BlueICEHui6lmf.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ASWnUCJ = await BlueICEHui6lmf.notifyRewardAmount.call(uintMlzDovJ, {from: accounts[2]});
//		const boolz547jXT = await BlueICEHui6lmf.isOwner.call({from: accounts[5]});
//		await BlueICEHui6lmf.onlyOwner.call({from: accounts[2]});

		assert.equal(addressarraycslsSQr, )
		await expect(BlueICEHui6lmf.notifyRewardAmount.call(uintMlzDovJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERP363OY = await BlueICE.new({from: accounts[3]});
		const addressGhfEWf = "0x0000000000000000000000000000000000000001"
		const uint256uRix4zY = await BlueICERP363OY.earned.call(addressGhfEWf, {from: accounts[3]});
//		await BlueICERP363OY.renounceOwnership.call({from: accounts[3]});
//		await BlueICERP363OY.exit.call({from: accounts[2]});
//		const uint256qLkGs0J = await BlueICERP363OY.getCurrentRewardReserve.call({from: accounts[0]});

		assert.equal(uint256uRix4zY, BigInt("0"))
		await expect(BlueICERP363OY.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE4eE8Bn = await BlueICE.new({from: accounts[2]});
		const uintPdP5FoK = BigInt("40")
		const uint256FVbsqvd = await BlueICE4eE8Bn.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256DYUL9jz = await BlueICE4eE8Bn.stake.call(uintPdP5FoK, {from: accounts[5]});
//		await BlueICE4eE8Bn.claimRewards.call({from: accounts[1]});

		assert.equal(uint256FVbsqvd, BigInt("500000000000000000000"))
		await expect(BlueICE4eE8Bn.stake.call(uintPdP5FoK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE4eE8Bn = await BlueICE.new({from: accounts[2]});
		const uintKXRcvSV = BigInt("649")
//		const uint256k3zuVAq = await BlueICE4eE8Bn.unstake.call(uintKXRcvSV, {from: accounts[0]});
//		await BlueICE4eE8Bn.claimRewards.call({from: accounts[1]});

		await expect(BlueICE4eE8Bn.unstake.call(uintKXRcvSV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE4eE8Bn = await BlueICE.new({from: accounts[2]});
		const addressIqkpYor = accounts[1]
		const addressfrumFV = accounts[0]
		const addressBmlOlc = await BlueICE4eE8Bn.transferOwnership.call(addressIqkpYor, {from: accounts[2]});
		const uint256FVbsqvd = await BlueICE4eE8Bn.getCurrentRewardReserve.call({from: accounts[4]});
//		const addressUMlbBZh = await BlueICE4eE8Bn.updateReward.call(addressfrumFV, {from: accounts[4]});
//		await BlueICE4eE8Bn.checkhalv.call({from: accounts[3]});

		assert.equal(uint256FVbsqvd, BigInt("500000000000000000000"))
		await expect(BlueICE4eE8Bn.updateReward.call(addressfrumFV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE4eE8Bn = await BlueICE.new({from: accounts[2]});
		const addressoAj7a77 = await BlueICE4eE8Bn.owner.call({from: accounts[1]});
		const uint256FVbsqvd = await BlueICE4eE8Bn.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(addressoAj7a77, 0x27109C38de1b6D77F58C756B2Bc482cFc4AFc3BA)
		assert.equal(uint256FVbsqvd, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEu7hyVK9 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHBxyArt = accounts[3]
		const boolwJFSKV = await BlueICEu7hyVK9.isOwner.call({from: accounts[0]});
		const uint256QXVkIGL = await BlueICEu7hyVK9.rewardPerToken.call({from: accounts[1]});
		const uint256LWx4QlW = await BlueICEu7hyVK9.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressVKJtP2 = await BlueICEu7hyVK9.updateReward.call(addressHBxyArt, {from: accounts[1]});
	});
})