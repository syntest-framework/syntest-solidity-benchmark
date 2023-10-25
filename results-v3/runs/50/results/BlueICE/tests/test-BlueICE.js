const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEJq2aqvs = await BlueICE.new({from: accounts[4]});
		const uintzRuWsfJ = BigInt("1975")
		const uintRVXME0 = BigInt("203")
		const uintiXxh6zq = BigInt("1079")
		const uint256MvDoq3B = await BlueICEJq2aqvs.notifyRewardAmount.call(uintzRuWsfJ, {from: accounts[1]});
		const uint256tQm03pd = await BlueICEJq2aqvs.unstake.call(uintRVXME0, {from: accounts[0]});
		const uint256XlFx0Zh = await BlueICEJq2aqvs.unstake.call(uintiXxh6zq, {from: accounts[1]});
		await BlueICEJq2aqvs.exit.call({from: accounts[3]});
		await BlueICEJq2aqvs.exit.call({from: accounts[0]});

		await expect(BlueICEJq2aqvs.notifyRewardAmount.call(uintzRuWsfJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEI2jy7qt = await BlueICE.new({from: accounts[2]});
		const uintNbPRzoX = BigInt("1978")
		const uint256wQjnlO = await BlueICEI2jy7qt.getCurrentRewardReserve.call({from: accounts[2]});
		await BlueICEI2jy7qt.renounceOwnership.call({from: accounts[2]});
		const uint256G3uPOAA = await BlueICEI2jy7qt.notifyRewardAmount.call(uintNbPRzoX, {from: accounts[0]});
		const uint256MURFeGc = await BlueICEI2jy7qt.getCurrentRewardReserve.call({from: accounts[2]});
		await BlueICEI2jy7qt.claimRewards.call({from: accounts[5]});

		assert.equal(uint256wQjnlO, BigInt("500000000000000000000"))
		await expect(BlueICEI2jy7qt.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEz5OgqHl = await BlueICE.new({from: accounts[0]});
		const addressKNypfLI = accounts[4]
		await BlueICEz5OgqHl.claimRewards.call({from: accounts[3]});
		const addresseSG1ujM = await BlueICEz5OgqHl.transferOwnership.call(addressKNypfLI, {from: accounts[4]});
		await BlueICEz5OgqHl.claimRewards.call({from: accounts[0]});
		const addressarrayIToNG37 = await BlueICEz5OgqHl.getCommunity.call({from: accounts[4]});

		await expect(BlueICEz5OgqHl.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEUsL9da3 = await BlueICE.new({from: accounts[4]});
		const uintMCdWHbm = BigInt("1310")
		const uintrEjMbpl = BigInt("966")
		const uint256PxOwiYy = await BlueICEUsL9da3.unstake.call(uintMCdWHbm, {from: accounts[0]});
		const boolhe4FxJy = await BlueICEUsL9da3.isOwner.call({from: accounts[3]});
		const uint256mpCgSWC = await BlueICEUsL9da3.notifyRewardAmount.call(uintrEjMbpl, {from: accounts[3]});

		await expect(BlueICEUsL9da3.unstake.call(uintMCdWHbm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICECN9dPPz = await BlueICE.new({from: accounts[1]});
		const addresslPaMktQ = accounts[2]
		const uintvYuK9xx = BigInt("1259")
		const addressUVVnYrI = await BlueICECN9dPPz.updateReward.call(addresslPaMktQ, {from: accounts[3]});
		await BlueICECN9dPPz.exit.call({from: accounts[0]});
		const uint256oN4juuC = await BlueICECN9dPPz.getCurrentRewardReserve.call({from: accounts[5]});
		const boolmcS0CnC = await BlueICECN9dPPz.isOwner.call({from: accounts[1]});
		const boolnn4Eg2h = await BlueICECN9dPPz.isOwner.call({from: accounts[4]});
		const uint256TSUaCeC = await BlueICECN9dPPz.stake.call(uintvYuK9xx, {from: accounts[2]});

		await expect(BlueICECN9dPPz.updateReward.call(addresslPaMktQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd628Mqd = await BlueICE.new({from: accounts[4]});
		const uintX2gpFfE = BigInt("384")
		const uintXKXDgpH = BigInt("1497")
		const uint256uQGdTJn = await BlueICEd628Mqd.stake.call(uintX2gpFfE, {from: accounts[1]});
		await BlueICEd628Mqd.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nV8Mt4s = await BlueICEd628Mqd.unstake.call(uintXKXDgpH, {from: accounts[4]});

		await expect(BlueICEd628Mqd.stake.call(uintX2gpFfE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd628Mqd = await BlueICE.new({from: accounts[4]});
		const uintuNsUUls = BigInt("385")
		await BlueICEd628Mqd.exit.call({from: accounts[1]});
		const uint256uQGdTJn = await BlueICEd628Mqd.stake.call(uintuNsUUls, {from: accounts[1]});

		await expect(BlueICEd628Mqd.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd628Mqd = await BlueICE.new({from: accounts[4]});
		const uintW2SXSea = BigInt("1330")
		const addressarrayFZg3ZVN = await BlueICEd628Mqd.getCommunity.call({from: accounts[2]});
		const uint256uQGdTJn = await BlueICEd628Mqd.stake.call(uintW2SXSea, {from: accounts[1]});

		assert.equal(addressarrayFZg3ZVN, )
		await expect(BlueICEd628Mqd.stake.call(uintW2SXSea, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd628Mqd = await BlueICE.new({from: accounts[4]});
		const addressbLyF5IG = accounts[5]
		const uintYrdzWiC = BigInt("390")
		const addressTi6eFZS = accounts[3]
		const addressJegVOe0 = await BlueICEd628Mqd.transferOwnership.call(addressbLyF5IG, {from: accounts[4]});
		const uint256uQGdTJn = await BlueICEd628Mqd.stake.call(uintYrdzWiC, {from: accounts[1]});
		const uint256CXE0Dq = await BlueICEd628Mqd.earned.call(addressTi6eFZS, {from: accounts[0]});

		await expect(BlueICEd628Mqd.stake.call(uintYrdzWiC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd628Mqd = await BlueICE.new({from: accounts[4]});
		const uintl85foUD = BigInt("715")
		const uintsSodvQV = BigInt("384")
		const uintpp5tIkT = BigInt("1575")
		const uint256CIGmNo9 = await BlueICEd628Mqd.rewardPerToken.call({from: accounts[2]});
		const uint256vf8gYbh = await BlueICEd628Mqd.notifyRewardAmount.call(uintl85foUD, {from: accounts[4]});
		const uint256uQGdTJn = await BlueICEd628Mqd.stake.call(uintsSodvQV, {from: accounts[1]});
		await BlueICEd628Mqd.renounceOwnership.call({from: accounts[3]});
		const uint256d7wKQYf = await BlueICEd628Mqd.stake.call(uintpp5tIkT, {from: accounts[2]});

		assert.equal(uint256CIGmNo9, BigInt("0"))
		await expect(BlueICEd628Mqd.notifyRewardAmount.call(uintl85foUD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEd628Mqd = await BlueICE.new({from: accounts[4]});
		const uintZSW7MQl = BigInt("382")
		const boolqSZuGG7 = await BlueICEd628Mqd.isOwner.call({from: accounts[2]});
		const addresstjjlVOA = await BlueICEd628Mqd.owner.call({from: accounts[0]});
		const uint256uQGdTJn = await BlueICEd628Mqd.stake.call(uintZSW7MQl, {from: accounts[1]});

		assert.equal(addresstjjlVOA, 0xfc8d1163C31940De1CEe7aE177b44ee9C0540FA8)
		assert.equal(boolqSZuGG7, false)
		await expect(BlueICEd628Mqd.stake.call(uintZSW7MQl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEYY7xZv9 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDPHNoo6 = accounts[0]
		const addresshOcZvim = await BlueICEYY7xZv9.transferOwnership.call(addressDPHNoo6, {from: accounts[3]});
		await BlueICEYY7xZv9.renounceOwnership.call({from: accounts[5]});
	});
})