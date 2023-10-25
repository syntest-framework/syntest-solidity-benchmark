const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEXN9W8dr = await BlueICE.new({from: accounts[5]});
		const uintkIdbe3J = BigInt("407")
		const addressMji4PPW = accounts[1]
		const addressarrayH6E9uk = await BlueICEXN9W8dr.getCommunity.call({from: accounts[3]});
		await BlueICEXN9W8dr.renounceOwnership.call({from: accounts[3]});
		const uint256X5BRfcA = await BlueICEXN9W8dr.stake.call(uintkIdbe3J, {from: accounts[3]});
		const uint256M7GXH7 = await BlueICEXN9W8dr.earned.call(addressMji4PPW, {from: accounts[1]});
		await BlueICEXN9W8dr.exit.call({from: accounts[1]});
		const addressbcfVuVI = await BlueICEXN9W8dr.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayH6E9uk, )
		await expect(BlueICEXN9W8dr.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEDe4cuus = await BlueICE.new({from: accounts[4]});
		const addressc3ylqIu = accounts[2]
		const uint256PK4q4Zj = await BlueICEDe4cuus.earned.call(addressc3ylqIu, {from: "0x0000000000000000000000000000000000000001"});
		const addressLir8VJ7 = await BlueICEDe4cuus.owner.call({from: accounts[1]});

		assert.equal(addressLir8VJ7, 0x1BE7e6056C35B590756634D6411A199cFf443Abb)
		assert.equal(uint256PK4q4Zj, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEymZaNTc = await BlueICE.new({from: accounts[1]});
		const uintRIHjI6a = BigInt("710")
		const uintiBftNRq = BigInt("1529")
		const uintvNXcfFy = BigInt("1733")
		await BlueICEymZaNTc.claimRewards.call({from: accounts[3]});
		const uint256xJa5w6O = await BlueICEymZaNTc.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256kxkBqze = await BlueICEymZaNTc.stake.call(uintRIHjI6a, {from: accounts[1]});
		const uint256E1Dpi9k = await BlueICEymZaNTc.unstake.call(uintiBftNRq, {from: accounts[1]});
		const uint256RRRue1m = await BlueICEymZaNTc.stake.call(uintvNXcfFy, {from: accounts[2]});

		await expect(BlueICEymZaNTc.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEQ50ttax = await BlueICE.new({from: accounts[0]});
		const addressOHZEIAV = accounts[4]
		const addressfjBb0n = accounts[5]
		const uint256Cnw2cze = await BlueICEQ50ttax.getCurrentRewardReserve.call({from: accounts[4]});
		const addressZR1VH7x = await BlueICEQ50ttax.transferOwnership.call(addressOHZEIAV, {from: accounts[3]});
		const addressSGDyw1y = await BlueICEQ50ttax.transferOwnership.call(addressfjBb0n, {from: accounts[2]});

		assert.equal(uint256Cnw2cze, BigInt("500000000000000000000"))
		await expect(BlueICEQ50ttax.transferOwnership.call(addressOHZEIAV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEsH1LAKi = await BlueICE.new({from: accounts[1]});
		await BlueICEsH1LAKi.exit.call({from: accounts[3]});
		const addressarrayP712Efc = await BlueICEsH1LAKi.getCommunity.call({from: accounts[1]});
		await BlueICEsH1LAKi.claimRewards.call({from: accounts[0]});
		await BlueICEsH1LAKi.exit.call({from: accounts[4]});
		await BlueICEsH1LAKi.claimRewards.call({from: accounts[0]});
		const uint256dRlJBZm = await BlueICEsH1LAKi.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEsH1LAKi.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEqeoK3A = await BlueICE.new({from: accounts[1]});
		const addressqwFCM2u = accounts[2]
		const addressCMdWT7Q = await BlueICEqeoK3A.updateReward.call(addressqwFCM2u, {from: accounts[3]});
		await BlueICEqeoK3A.checkhalv.call({from: accounts[2]});
		await BlueICEqeoK3A.renounceOwnership.call({from: accounts[5]});

		await expect(BlueICEqeoK3A.updateReward.call(addressqwFCM2u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfzvzGvo = await BlueICE.new({from: accounts[3]});
		const uintUe0d7x7 = BigInt("606")
		const uintY0wEGej = BigInt("1394")
		const uint256I6s2lPP = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256M2UApB3 = await BlueICEfzvzGvo.notifyRewardAmount.call(uintUe0d7x7, {from: accounts[3]});
		await BlueICEfzvzGvo.exit.call({from: accounts[3]});
		const uint2561dyql3 = await BlueICEfzvzGvo.rewardPerToken.call({from: accounts[1]});
		const boolhwjYBqU = await BlueICEfzvzGvo.isOwner.call({from: accounts[4]});
		const uint256zOVAITc = await BlueICEfzvzGvo.stake.call(uintY0wEGej, {from: accounts[4]});
		await BlueICEfzvzGvo.exit.call({from: accounts[4]});
		const uint256BXk1ywa = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[1]});
		await BlueICEfzvzGvo.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256I6s2lPP, BigInt("500000000000000000000"))
		await expect(BlueICEfzvzGvo.notifyRewardAmount.call(uintUe0d7x7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfzvzGvo = await BlueICE.new({from: accounts[3]});
		const uintsn2C5mh = BigInt("1394")
		const uint256I6s2lPP = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[4]});
		const addressCK2Kpp7 = await BlueICEfzvzGvo.owner.call({from: accounts[2]});
		const uint2561dyql3 = await BlueICEfzvzGvo.rewardPerToken.call({from: accounts[1]});
		const boolhwjYBqU = await BlueICEfzvzGvo.isOwner.call({from: accounts[4]});
		const uint256zOVAITc = await BlueICEfzvzGvo.stake.call(uintsn2C5mh, {from: accounts[4]});
		const uint256BXk1ywa = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(addressCK2Kpp7, 0x38Aa11C9eed3dCFb94f05546b6eDe3c0b125D900)
		assert.equal(boolhwjYBqU, false)
		assert.equal(uint2561dyql3, BigInt("0"))
		assert.equal(uint256I6s2lPP, BigInt("500000000000000000000"))
		await expect(BlueICEfzvzGvo.stake.call(uintsn2C5mh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICELfFgoRt = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYbcLyV7 = BigInt("1412")
		const uintvkZcN6h = BigInt("1959")
		const addresss7qoU8F = "0x0000000000000000000000000000000000000001"
		const uint256FBReYkQ = await BlueICELfFgoRt.notifyRewardAmount.call(uintYbcLyV7, {from: accounts[1]});
		const uint256k481lHq = await BlueICELfFgoRt.stake.call(uintvkZcN6h, {from: accounts[0]});
		await BlueICELfFgoRt.renounceOwnership.call({from: accounts[3]});
		const uint256lXFH4sn = await BlueICELfFgoRt.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256R9nEGrH = await BlueICELfFgoRt.earned.call(addresss7qoU8F, {from: accounts[5]});
	});

	it('test for BlueICE', async () => {
		const BlueICEDe4cuus = await BlueICE.new({from: accounts[4]});
		const addresszVmxUWh = "0x0000000000000000000000000000000000000001"
		const addressMTyFAM5 = accounts[3]
		const uint256ZIhApSy = await BlueICEDe4cuus.getCurrentRewardReserve.call({from: accounts[4]});
		const addressv8XBWTt = await BlueICEDe4cuus.transferOwnership.call(addresszVmxUWh, {from: accounts[4]});
		const uint256PK4q4Zj = await BlueICEDe4cuus.earned.call(addressMTyFAM5, {from: "0x0000000000000000000000000000000000000001"});
		const boolmorRSz = await BlueICEDe4cuus.isOwner.call({from: accounts[0]});

		assert.equal(boolmorRSz, false)
		assert.equal(uint256PK4q4Zj, BigInt("0"))
		assert.equal(uint256ZIhApSy, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEfzvzGvo = await BlueICE.new({from: accounts[3]});
		const uintSOzYKFf = BigInt("1394")
		const uint256I6s2lPP = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[4]});
		await BlueICEfzvzGvo.renounceOwnership.call({from: accounts[3]});
		const addressCK2Kpp7 = await BlueICEfzvzGvo.owner.call({from: accounts[2]});
		const boolhwjYBqU = await BlueICEfzvzGvo.isOwner.call({from: accounts[4]});
		const uint256zOVAITc = await BlueICEfzvzGvo.stake.call(uintSOzYKFf, {from: accounts[4]});
		const uint256BXk1ywa = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(uint256I6s2lPP, BigInt("500000000000000000000"))
		await expect(BlueICEfzvzGvo.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfzvzGvo = await BlueICE.new({from: accounts[3]});
		const uinthALxAYw = BigInt("83")
		const uint256I6s2lPP = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[4]});
		await BlueICEfzvzGvo.renounceOwnership.call({from: accounts[3]});
		const addressCK2Kpp7 = await BlueICEfzvzGvo.owner.call({from: accounts[2]});
		const boolhwjYBqU = await BlueICEfzvzGvo.isOwner.call({from: accounts[4]});
		const uint256bYNbfkS = await BlueICEfzvzGvo.unstake.call(uinthALxAYw, {from: accounts[2]});
		const uint256BXk1ywa = await BlueICEfzvzGvo.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(uint256I6s2lPP, BigInt("500000000000000000000"))
		await expect(BlueICEfzvzGvo.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})