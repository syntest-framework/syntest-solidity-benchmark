const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICETXeWkOn = await BlueICE.new({from: accounts[3]});
		const addressOV80jNC = accounts[0]
		const addressIe6a0mS = accounts[0]
		const addressFoGEom = accounts[4]
		await BlueICETXeWkOn.renounceOwnership.call({from: accounts[2]});
		const addressWt5zvF7 = await BlueICETXeWkOn.updateReward.call(addressOV80jNC, {from: accounts[1]});
		const addressAsk3DAk = await BlueICETXeWkOn.updateReward.call(addressIe6a0mS, {from: accounts[2]});
		const addressnOFOy9X = await BlueICETXeWkOn.updateReward.call(addressFoGEom, {from: accounts[5]});
		const addressUbdG0uk = await BlueICETXeWkOn.owner.call({from: accounts[3]});

		await expect(BlueICETXeWkOn.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICESgodHrC = await BlueICE.new({from: accounts[2]});
		const uint256XIvhf7a = await BlueICESgodHrC.lastTimeRewardApplicable.call({from: accounts[0]});
		await BlueICESgodHrC.checkhalv.call({from: accounts[1]});
		await BlueICESgodHrC.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256XIvhf7a, BigInt("0"))
		await expect(BlueICESgodHrC.checkhalv.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEsRND8Rv = await BlueICE.new({from: accounts[3]});
		const uintjeNbTPs = BigInt("196")
		const uintH0hjK8v = BigInt("1771")
		const uint256zuiZuVh = await BlueICEsRND8Rv.rewardPerToken.call({from: accounts[5]});
		const addressarrayuxcPSKp = await BlueICEsRND8Rv.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256N9dNQ8Y = await BlueICEsRND8Rv.notifyRewardAmount.call(uintjeNbTPs, {from: accounts[4]});
		const uint256cfTRTLI = await BlueICEsRND8Rv.unstake.call(uintH0hjK8v, {from: accounts[1]});

		assert.equal(addressarrayuxcPSKp, )
		assert.equal(uint256zuiZuVh, BigInt("0"))
		await expect(BlueICEsRND8Rv.notifyRewardAmount.call(uintjeNbTPs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECCbqicV = await BlueICE.new({from: accounts[0]});
		const addresswwh2lnr = accounts[3]
		const uintIq8mBg2 = BigInt("1969")
		await BlueICECCbqicV.claimRewards.call({from: accounts[2]});
		const uint256SA4QsQf = await BlueICECCbqicV.rewardPerToken.call({from: accounts[4]});
		const uint256PlZmHcU = await BlueICECCbqicV.earned.call(addresswwh2lnr, {from: accounts[3]});
		const uint256wx0Z7By = await BlueICECCbqicV.notifyRewardAmount.call(uintIq8mBg2, {from: accounts[1]});
		const addressarrayr4AjXP6 = await BlueICECCbqicV.getCommunity.call({from: accounts[4]});

		await expect(BlueICECCbqicV.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEinaTPWi = await BlueICE.new({from: accounts[0]});
		const uintZCUFYG = BigInt("1687")
		const uint256KKzF3Em = await BlueICEinaTPWi.stake.call(uintZCUFYG, {from: accounts[0]});
		await BlueICEinaTPWi.claimRewards.call({from: accounts[5]});

		await expect(BlueICEinaTPWi.stake.call(uintZCUFYG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEinaTPWi = await BlueICE.new({from: accounts[0]});
		const uinttMv6h74 = BigInt("794")
		const addresshP0GcR2 = "0x0000000000000000000000000000000000000001"
		const uint256PYdvNvC = await BlueICEinaTPWi.notifyRewardAmount.call(uinttMv6h74, {from: accounts[0]});
		const uint256rGOh5A = await BlueICEinaTPWi.earned.call(addresshP0GcR2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEinaTPWi.notifyRewardAmount.call(uinttMv6h74, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEinaTPWi = await BlueICE.new({from: accounts[0]});
		const uint1LHhpT = BigInt("692")
		await BlueICEinaTPWi.renounceOwnership.call({from: accounts[0]});
		await BlueICEinaTPWi.claimRewards.call({from: accounts[5]});
		const uint256yqo6PuA = await BlueICEinaTPWi.lastTimeRewardApplicable.call({from: accounts[5]});
		await BlueICEinaTPWi.checkhalv.call({from: accounts[0]});
		const uint256dfgJqao = await BlueICEinaTPWi.unstake.call(uint1LHhpT, {from: accounts[5]});

		await expect(BlueICEinaTPWi.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICExfPqfxS = await BlueICE.new({from: accounts[0]});
		const uintZ04cEkR = BigInt("116")
		const uint256OIp1Gtb = await BlueICExfPqfxS.unstake.call(uintZ04cEkR, {from: accounts[4]});
		await BlueICExfPqfxS.renounceOwnership.call({from: accounts[2]});
		const uint256FyI56W9 = await BlueICExfPqfxS.lastTimeRewardApplicable.call({from: accounts[4]});
		const boolY768Av = await BlueICExfPqfxS.isOwner.call({from: accounts[2]});
		await BlueICExfPqfxS.renounceOwnership.call({from: accounts[0]});
		const uint256Hrhyf22 = await BlueICExfPqfxS.rewardPerToken.call({from: accounts[1]});

		await expect(BlueICExfPqfxS.unstake.call(uintZ04cEkR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEjqR8aat = await BlueICE.new({from: accounts[2]});
		const addresslpDo14M = accounts[2]
		const addresslhSeMrW = await BlueICEjqR8aat.transferOwnership.call(addresslpDo14M, {from: accounts[2]});
		const uint256GD3c3Mx = await BlueICEjqR8aat.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256JMi2ob = await BlueICEjqR8aat.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256GD3c3Mx, BigInt("0"))
		assert.equal(uint256JMi2ob, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEinaTPWi = await BlueICE.new({from: accounts[0]});
		const uintq2fTuk = BigInt("1671")
		const uint256mMZCVSu = await BlueICEinaTPWi.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256xS2cJ0X = await BlueICEinaTPWi.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256KKzF3Em = await BlueICEinaTPWi.stake.call(uintq2fTuk, {from: accounts[0]});

		assert.equal(uint256mMZCVSu, BigInt("500000000000000000000"))
		assert.equal(uint256xS2cJ0X, BigInt("500000000000000000000"))
		await expect(BlueICEinaTPWi.stake.call(uintq2fTuk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEinaTPWi = await BlueICE.new({from: accounts[0]});
		const uintl70mWMV = BigInt("1671")
		const addressBJcdQ9S = await BlueICEinaTPWi.owner.call({from: accounts[5]});
		const uint256mMZCVSu = await BlueICEinaTPWi.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256NTeiXL9 = await BlueICEinaTPWi.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256xS2cJ0X = await BlueICEinaTPWi.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256KKzF3Em = await BlueICEinaTPWi.stake.call(uintl70mWMV, {from: accounts[0]});

		assert.equal(addressBJcdQ9S, 0x11A36E50D90481122C7743Cb522382721da2d90D)
		assert.equal(uint256NTeiXL9, BigInt("0"))
		assert.equal(uint256mMZCVSu, BigInt("500000000000000000000"))
		assert.equal(uint256xS2cJ0X, BigInt("500000000000000000000"))
		await expect(BlueICEinaTPWi.stake.call(uintl70mWMV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEinaTPWi = await BlueICE.new({from: accounts[0]});
		const uintVCLRlN = BigInt("576")
		await BlueICEinaTPWi.exit.call({from: accounts[3]});
		const uint256KKzF3Em = await BlueICEinaTPWi.stake.call(uintVCLRlN, {from: accounts[0]});
		const uint256MNVQg9b = await BlueICEinaTPWi.rewardPerToken.call({from: accounts[0]});

		await expect(BlueICEinaTPWi.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEL5jSMxJ = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYKxJc1S = BigInt("607")
		const addressagbFJCx = accounts[1]
		const addressi7FXkUW = accounts[3]
		const uint256StgAmXS = await BlueICEL5jSMxJ.stake.call(uintYKxJc1S, {from: accounts[3]});
		const uint256zOZxg1k = await BlueICEL5jSMxJ.earned.call(addressagbFJCx, {from: accounts[5]});
		const uint256GZZ5aQ = await BlueICEL5jSMxJ.getCurrentRewardReserve.call({from: accounts[4]});
		const addressarrayPxpyIYU = await BlueICEL5jSMxJ.getCommunity.call({from: accounts[1]});
		const uint256IprIiCt = await BlueICEL5jSMxJ.earned.call(addressi7FXkUW, {from: accounts[0]});
		await BlueICEL5jSMxJ.exit.call({from: accounts[2]});
	});
})