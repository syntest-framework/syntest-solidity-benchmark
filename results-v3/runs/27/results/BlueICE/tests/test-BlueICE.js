const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEdwR6Iw = await BlueICE.new({from: accounts[2]});
		const addressiKFC6fv = accounts[2]
		const boolheRFT9k = await BlueICEdwR6Iw.isOwner.call({from: accounts[1]});
		const uint256dh6EFJk = await BlueICEdwR6Iw.rewardPerToken.call({from: accounts[1]});
		const uint256cSsrRoE = await BlueICEdwR6Iw.earned.call(addressiKFC6fv, {from: accounts[2]});

		assert.equal(boolheRFT9k, false)
		assert.equal(uint256cSsrRoE, BigInt("0"))
		assert.equal(uint256dh6EFJk, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEspUBBuH = await BlueICE.new({from: accounts[2]});
		const uint256K06B1aR = await BlueICEspUBBuH.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256mlj1V85 = await BlueICEspUBBuH.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256mFEuXHa = await BlueICEspUBBuH.getCurrentRewardReserve.call({from: accounts[1]});
		const addressarrayHSHmmU2 = await BlueICEspUBBuH.getCommunity.call({from: accounts[0]});

		assert.equal(addressarrayHSHmmU2, )
		assert.equal(uint256K06B1aR, BigInt("0"))
		assert.equal(uint256mFEuXHa, BigInt("500000000000000000000"))
		assert.equal(uint256mlj1V85, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEb8WDL8m = await BlueICE.new({from: accounts[1]});
		const addressf8dyBt = accounts[2]
		const addressDdxJEMx = await BlueICEb8WDL8m.updateReward.call(addressf8dyBt, {from: accounts[2]});
		const addressgqCuDTP = await BlueICEb8WDL8m.owner.call({from: accounts[3]});
		await BlueICEb8WDL8m.exit.call({from: accounts[3]});
		const boolVSbiAPo = await BlueICEb8WDL8m.isOwner.call({from: accounts[2]});
		const addressarrayzJqCPGY = await BlueICEb8WDL8m.getCommunity.call({from: accounts[0]});

		await expect(BlueICEb8WDL8m.updateReward.call(addressf8dyBt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEhFxWEGd = await BlueICE.new({from: accounts[5]});
		const addressBVhZgYZ = accounts[4]
		const addressQWSoRLO = accounts[4]
		const addressZrAsb4b = await BlueICEhFxWEGd.transferOwnership.call(addressBVhZgYZ, {from: accounts[3]});
		const addressoctGQfF = await BlueICEhFxWEGd.transferOwnership.call(addressQWSoRLO, {from: accounts[0]});

		await expect(BlueICEhFxWEGd.transferOwnership.call(addressBVhZgYZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEGw3pF0f = await BlueICE.new({from: accounts[2]});
		const addressDdhIjSm = accounts[0]
		const addressytsThwC = accounts[2]
		const uintniEfLS = BigInt("1718")
		const uintNC4FWVq = BigInt("1905")
		const uint256bt0EOiY = await BlueICEGw3pF0f.earned.call(addressDdhIjSm, {from: accounts[1]});
		await BlueICEGw3pF0f.exit.call({from: accounts[1]});
		const addressBSJwC8T = await BlueICEGw3pF0f.updateReward.call(addressytsThwC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wR2vRVs = await BlueICEGw3pF0f.stake.call(uintniEfLS, {from: accounts[3]});
		const uint256yVA8Bb = await BlueICEGw3pF0f.stake.call(uintNC4FWVq, {from: accounts[5]});
		const addressarrayUdErIHz = await BlueICEGw3pF0f.getCommunity.call({from: accounts[0]});

		assert.equal(uint256bt0EOiY, BigInt("0"))
		await expect(BlueICEGw3pF0f.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEPCB7EDF = await BlueICE.new({from: accounts[1]});
		const addressarrayuQ10Rw = await BlueICEPCB7EDF.getCommunity.call({from: accounts[3]});
		await BlueICEPCB7EDF.renounceOwnership.call({from: accounts[1]});
		const addressarrayZ6zF6fP = await BlueICEPCB7EDF.getCommunity.call({from: accounts[1]});

		assert.equal(addressarrayuQ10Rw, )
		await expect(BlueICEPCB7EDF.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE8FP9pV = await BlueICE.new({from: accounts[4]});
		const uintNjAc0C = BigInt("624")
		const uintEGSfpPw = BigInt("375")
		const uint25632wN1j = await BlueICE8FP9pV.unstake.call(uintNjAc0C, {from: accounts[0]});
		const uint256i6rJ7dz = await BlueICE8FP9pV.unstake.call(uintEGSfpPw, {from: accounts[2]});
		const uint256QmFhOmf = await BlueICE8FP9pV.rewardPerToken.call({from: accounts[2]});
		await BlueICE8FP9pV.onlyOwner.call({from: accounts[3]});

		await expect(BlueICE8FP9pV.unstake.call(uintNjAc0C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEAx5JuDr = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyBl75t = BigInt("1357")
		await BlueICEAx5JuDr.exit.call({from: accounts[0]});
		await BlueICEAx5JuDr.exit.call({from: accounts[1]});
		await BlueICEAx5JuDr.renounceOwnership.call({from: accounts[2]});
		const uint256lAHJwlk = await BlueICEAx5JuDr.unstake.call(uintyBl75t, {from: accounts[3]});
	});

	it('test for BlueICE', async () => {
		const BlueICEspUBBuH = await BlueICE.new({from: accounts[2]});
		const addressKow0WRk = accounts[5]
		const addressQd8Lb3E = accounts[1]
		const uint256K06B1aR = await BlueICEspUBBuH.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256mlj1V85 = await BlueICEspUBBuH.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256mFEuXHa = await BlueICEspUBBuH.getCurrentRewardReserve.call({from: accounts[1]});
		await BlueICEspUBBuH.claimRewards.call({from: accounts[2]});
		const uint256V8PefDb = await BlueICEspUBBuH.rewardPerToken.call({from: accounts[1]});
		const addressMHPMy8B = await BlueICEspUBBuH.updateReward.call(addressKow0WRk, {from: accounts[4]});
		const addressarrayHSHmmU2 = await BlueICEspUBBuH.getCommunity.call({from: accounts[0]});
		const uint256GVniyqu = await BlueICEspUBBuH.earned.call(addressQd8Lb3E, {from: accounts[3]});

		assert.equal(uint256K06B1aR, BigInt("0"))
		assert.equal(uint256mFEuXHa, BigInt("500000000000000000000"))
		assert.equal(uint256mlj1V85, BigInt("0"))
		await expect(BlueICEspUBBuH.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdwR6Iw = await BlueICE.new({from: accounts[2]});
		const uintyi0dxN = BigInt("120")
		const addressLHorWrK = accounts[2]
		const boolheRFT9k = await BlueICEdwR6Iw.isOwner.call({from: accounts[1]});
		const uint256dh6EFJk = await BlueICEdwR6Iw.rewardPerToken.call({from: accounts[1]});
		const uint256xs0tDAW = await BlueICEdwR6Iw.stake.call(uintyi0dxN, {from: accounts[4]});
		const uint256cSsrRoE = await BlueICEdwR6Iw.earned.call(addressLHorWrK, {from: accounts[2]});

		assert.equal(boolheRFT9k, false)
		assert.equal(uint256dh6EFJk, BigInt("0"))
		await expect(BlueICEdwR6Iw.stake.call(uintyi0dxN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEGw3pF0f = await BlueICE.new({from: accounts[2]});
		const addressbuj3bDK = accounts[0]
		const uintcmSPaNB = BigInt("322")
		const addressuLXNadY = accounts[2]
		const uintlHwjVij = BigInt("1703")
		const uintprwIVzk = BigInt("1905")
		const uint256bt0EOiY = await BlueICEGw3pF0f.earned.call(addressbuj3bDK, {from: accounts[1]});
		const uint256UznfHrw = await BlueICEGw3pF0f.notifyRewardAmount.call(uintcmSPaNB, {from: accounts[2]});
		await BlueICEGw3pF0f.exit.call({from: accounts[1]});
		const addressBSJwC8T = await BlueICEGw3pF0f.updateReward.call(addressuLXNadY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wR2vRVs = await BlueICEGw3pF0f.stake.call(uintlHwjVij, {from: accounts[3]});
		const uint256yVA8Bb = await BlueICEGw3pF0f.stake.call(uintprwIVzk, {from: accounts[5]});
		const addressarrayUdErIHz = await BlueICEGw3pF0f.getCommunity.call({from: accounts[0]});
		const addressarrayIwVP2Nh = await BlueICEGw3pF0f.getCommunity.call({from: accounts[2]});

		assert.equal(uint256bt0EOiY, BigInt("0"))
		await expect(BlueICEGw3pF0f.notifyRewardAmount.call(uintcmSPaNB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdwR6Iw = await BlueICE.new({from: accounts[2]});
		const uintebSzH1r = BigInt("106")
		const addresseG7OSwG = accounts[3]
		const addresso9nKsfG = await BlueICEdwR6Iw.owner.call({from: accounts[3]});
		const addressarrayun8ce3p = await BlueICEdwR6Iw.getCommunity.call({from: accounts[4]});
		const boolheRFT9k = await BlueICEdwR6Iw.isOwner.call({from: accounts[1]});
		const uint256xs0tDAW = await BlueICEdwR6Iw.stake.call(uintebSzH1r, {from: accounts[4]});
		const addressarrayf2JGq8I = await BlueICEdwR6Iw.getCommunity.call({from: accounts[0]});
		await BlueICEdwR6Iw.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUn7eWTk = await BlueICEdwR6Iw.isOwner.call({from: accounts[0]});
		const uint256cSsrRoE = await BlueICEdwR6Iw.earned.call(addresseG7OSwG, {from: accounts[2]});

		assert.equal(addressarrayun8ce3p, )
		assert.equal(addresso9nKsfG, 0x28E2Bf275DD65F04E90e3790b8897A4D0923beCe)
		assert.equal(boolheRFT9k, false)
		await expect(BlueICEdwR6Iw.stake.call(uintebSzH1r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEGw3pF0f = await BlueICE.new({from: accounts[2]});
		const addressUswI9lJ = accounts[3]
		const uintuKVzrau = BigInt("1768")
		const uintS6ynJx8 = BigInt("566")
		const addressTShetly = await BlueICEGw3pF0f.transferOwnership.call(addressUswI9lJ, {from: accounts[2]});
		const uint256UznfHrw = await BlueICEGw3pF0f.notifyRewardAmount.call(uintuKVzrau, {from: accounts[2]});
		const uint256wR2vRVs = await BlueICEGw3pF0f.stake.call(uintS6ynJx8, {from: accounts[3]});
		const uint256qY76gi = await BlueICEGw3pF0f.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(BlueICEGw3pF0f.notifyRewardAmount.call(uintuKVzrau, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})