const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEKeuvEl = await BlueICE.new({from: accounts[0]});
		const uintuDhvnTP = BigInt("653")
		const addressgqWBppI = accounts[2]
		const uinthIMoSP = BigInt("1156")
		const boolbKEb6x2 = await BlueICEKeuvEl.isOwner.call({from: accounts[0]});
		const uint256kGn4EHY = await BlueICEKeuvEl.notifyRewardAmount.call(uintuDhvnTP, {from: accounts[2]});
		const uint256nmCvtnv = await BlueICEKeuvEl.rewardPerToken.call({from: accounts[0]});
		const addressBYsZODD = await BlueICEKeuvEl.updateReward.call(addressgqWBppI, {from: accounts[5]});
		const uint256OvMsOep = await BlueICEKeuvEl.unstake.call(uinthIMoSP, {from: accounts[4]});
		await BlueICEKeuvEl.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolbKEb6x2, true)
		await expect(BlueICEKeuvEl.notifyRewardAmount.call(uintuDhvnTP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEhsne5GO = await BlueICE.new({from: accounts[1]});
		const addressouV4lG = accounts[2]
		const uintSNP78mt = BigInt("1340")
		await BlueICEhsne5GO.exit.call({from: accounts[0]});
		const addressm74fzbq = await BlueICEhsne5GO.transferOwnership.call(addressouV4lG, {from: accounts[0]});
		const uint256QexXfUp = await BlueICEhsne5GO.stake.call(uintSNP78mt, {from: accounts[2]});
		await BlueICEhsne5GO.claimRewards.call({from: accounts[4]});
		const uint256ol5pd7f = await BlueICEhsne5GO.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(BlueICEhsne5GO.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOzhSZe = await BlueICE.new({from: accounts[4]});
		const uintlgLGQbL = BigInt("517")
		const uintT8abIz0 = BigInt("1256")
		const uintxxICZJU = BigInt("784")
		const uint256qrgonxn = await BlueICEOzhSZe.rewardPerToken.call({from: accounts[1]});
		const addressarraymv7IOX = await BlueICEOzhSZe.getCommunity.call({from: accounts[0]});
		const uint256GNvgq9i = await BlueICEOzhSZe.notifyRewardAmount.call(uintlgLGQbL, {from: accounts[0]});
		const uint256j4UFoT = await BlueICEOzhSZe.unstake.call(uintT8abIz0, {from: accounts[4]});
		const uint256r03AxmI = await BlueICEOzhSZe.stake.call(uintxxICZJU, {from: accounts[3]});

		assert.equal(addressarraymv7IOX, )
		assert.equal(uint256qrgonxn, BigInt("0"))
		await expect(BlueICEOzhSZe.notifyRewardAmount.call(uintlgLGQbL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEiGo7azV = await BlueICE.new({from: accounts[4]});
		const uintvwsycM6 = BigInt("1890")
		const uintpRVFM6h = BigInt("223")
		const uint256SMwnOr = await BlueICEiGo7azV.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256gDH6PpE = await BlueICEiGo7azV.notifyRewardAmount.call(uintvwsycM6, {from: accounts[0]});
		const uint256nUYttAj = await BlueICEiGo7azV.stake.call(uintpRVFM6h, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SMwnOr, BigInt("500000000000000000000"))
		await expect(BlueICEiGo7azV.notifyRewardAmount.call(uintvwsycM6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICExFNrkQ = await BlueICE.new({from: accounts[2]});
		await BlueICExFNrkQ.onlyOwner.call({from: accounts[1]});
		await BlueICExFNrkQ.renounceOwnership.call({from: accounts[1]});
		const boolv7Ag869 = await BlueICExFNrkQ.isOwner.call({from: accounts[1]});
		const boolT88BKTn = await BlueICExFNrkQ.isOwner.call({from: accounts[1]});
		await BlueICExFNrkQ.onlyOwner.call({from: accounts[4]});

		await expect(BlueICExFNrkQ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEvj6xWJu = await BlueICE.new({from: accounts[2]});
		const uintYJjnfMh = BigInt("409")
		const addressfV0SH97 = await BlueICEvj6xWJu.owner.call({from: accounts[3]});
		await BlueICEvj6xWJu.claimRewards.call({from: accounts[5]});
		const uint256DNbeWEG = await BlueICEvj6xWJu.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256JoN5l2F = await BlueICEvj6xWJu.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256ng1AnrX = await BlueICEvj6xWJu.rewardPerToken.call({from: accounts[3]});
		const uint256F93MfiD = await BlueICEvj6xWJu.notifyRewardAmount.call(uintYJjnfMh, {from: accounts[3]});

		assert.equal(addressfV0SH97, 0x363fa10C296A6C51F41c6eA26Bdc8b9e5BE79479)
		await expect(BlueICEvj6xWJu.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEcvtPIM = await BlueICE.new({from: accounts[4]});
		const uintCFU7BIE = BigInt("1592")
		const uintSvBxoNl = BigInt("905")
		const uint256c3yVZY5 = await BlueICEcvtPIM.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256j2QEdnh = await BlueICEcvtPIM.unstake.call(uintCFU7BIE, {from: accounts[5]});
		const uint256E8EXfDN = await BlueICEcvtPIM.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256Bhi7vaO = await BlueICEcvtPIM.lastTimeRewardApplicable.call({from: accounts[4]});
		const boolHjAchiv = await BlueICEcvtPIM.isOwner.call({from: accounts[3]});
		const uint256f6EyiW7 = await BlueICEcvtPIM.notifyRewardAmount.call(uintSvBxoNl, {from: accounts[2]});

		assert.equal(uint256c3yVZY5, BigInt("0"))
		await expect(BlueICEcvtPIM.unstake.call(uintCFU7BIE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnpRZ3Gg = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDx7IboC = accounts[3]
		const uint256Ym86Tjb = await BlueICEnpRZ3Gg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256MJ2kJ6i = await BlueICEnpRZ3Gg.earned.call(addressDx7IboC, {from: accounts[2]});
		const addresscBLUkuN = await BlueICEnpRZ3Gg.owner.call({from: accounts[5]});
	});

	it('test for BlueICE', async () => {
		const BlueICEyEQN8li = await BlueICE.new({from: accounts[4]});
		const uintFf3FFvf = BigInt("1852")
		const uintOJZd8qp = BigInt("1115")
		const uint256v7ZiMFA = await BlueICEyEQN8li.stake.call(uintFf3FFvf, {from: accounts[3]});
		const uint256k9fL1kS = await BlueICEyEQN8li.unstake.call(uintOJZd8qp, {from: accounts[0]});
		await BlueICEyEQN8li.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEyEQN8li.stake.call(uintFf3FFvf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICETjzDVBu = await BlueICE.new({from: accounts[1]});
		const addressF7ANYzJ = accounts[5]
		const addressO0qzmZ = await BlueICETjzDVBu.transferOwnership.call(addressF7ANYzJ, {from: accounts[1]});
		const uint256qncroLK = await BlueICETjzDVBu.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xFrk8Cd = await BlueICETjzDVBu.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256qncroLK, BigInt("500000000000000000000"))
		assert.equal(uint256xFrk8Cd, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICETjzDVBu = await BlueICE.new({from: accounts[1]});
		const uintBSqm8D = BigInt("836")
		const addressHl4AsdI = accounts[0]
		const uint256qncroLK = await BlueICETjzDVBu.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2567sLz3M = await BlueICETjzDVBu.notifyRewardAmount.call(uintBSqm8D, {from: accounts[1]});
		const addressCkLemf6 = await BlueICETjzDVBu.transferOwnership.call(addressHl4AsdI, {from: accounts[2]});

		assert.equal(uint256qncroLK, BigInt("500000000000000000000"))
		await expect(BlueICETjzDVBu.notifyRewardAmount.call(uintBSqm8D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECzHGEXw = await BlueICE.new({from: accounts[3]});
		const uintn9fgmTZ = BigInt("1020")
		await BlueICECzHGEXw.renounceOwnership.call({from: accounts[3]});
		const uint256gb0d3ne = await BlueICECzHGEXw.rewardPerToken.call({from: accounts[1]});
		const boolKhkcYHH = await BlueICECzHGEXw.isOwner.call({from: accounts[2]});
		const uint256WBBJICV = await BlueICECzHGEXw.stake.call(uintn9fgmTZ, {from: accounts[4]});

		await expect(BlueICECzHGEXw.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})