const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEDqKcO61 = await BlueICE.new({from: accounts[4]});
		const uintO49vudo = BigInt("2032")
		const uintKJObq7j = BigInt("867")
		const uintlCk5mTY = BigInt("1004")
		const addressKVdJEH7 = accounts[0]
//		await BlueICEDqKcO61.onlyOwner.call({from: accounts[3]});
//		const uint256pKjmMlV = await BlueICEDqKcO61.unstake.call(uintO49vudo, {from: accounts[2]});
//		const uint256oI9jvc1 = await BlueICEDqKcO61.stake.call(uintKJObq7j, {from: accounts[0]});
//		const uint256LLd6nGB = await BlueICEDqKcO61.unstake.call(uintlCk5mTY, {from: accounts[1]});
//		const addressCwLPA54 = await BlueICEDqKcO61.transferOwnership.call(addressKVdJEH7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEDqKcO61.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIlMS4cz = await BlueICE.new({from: accounts[4]});
		const addressJB5NST9 = accounts[0]
		const uint256XwDUqos = await BlueICEIlMS4cz.getCurrentRewardReserve.call({from: accounts[1]});
//		const addresstsxcBPC = await BlueICEIlMS4cz.updateReward.call(addressJB5NST9, {from: accounts[2]});

		assert.equal(uint256XwDUqos, BigInt("500000000000000000000"))
		await expect(BlueICEIlMS4cz.updateReward.call(addressJB5NST9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEGKcmGQk = await BlueICE.new({from: accounts[0]});
		const uintMMDyn9C = BigInt("1931")
		const addressVtKKd1b = accounts[2]
		const uintJPkDlTx = BigInt("424")
		const uintfV8qBkZ = BigInt("231")
		const uint256wiF2KV = await BlueICEGKcmGQk.rewardPerToken.call({from: accounts[1]});
//		const uint256TjuHI6U = await BlueICEGKcmGQk.notifyRewardAmount.call(uintMMDyn9C, {from: accounts[4]});
//		await BlueICEGKcmGQk.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressAdBKs9W = await BlueICEGKcmGQk.transferOwnership.call(addressVtKKd1b, {from: accounts[4]});
//		const uint256uAMy8lo = await BlueICEGKcmGQk.unstake.call(uintJPkDlTx, {from: accounts[1]});
//		const uint256DxZuxhO = await BlueICEGKcmGQk.notifyRewardAmount.call(uintfV8qBkZ, {from: accounts[2]});

		assert.equal(uint256wiF2KV, BigInt("0"))
		await expect(BlueICEGKcmGQk.notifyRewardAmount.call(uintMMDyn9C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIAj8GGe = await BlueICE.new({from: accounts[3]});
		const uintCpNP2Ob = BigInt("1618")
		const uintHaY3glD = BigInt("494")
//		await BlueICEIAj8GGe.renounceOwnership.call({from: accounts[3]});
//		const uint256FMkJfRF = await BlueICEIAj8GGe.stake.call(uintCpNP2Ob, {from: accounts[4]});
//		const uint256XNxwS5 = await BlueICEIAj8GGe.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256jlNsOzA = await BlueICEIAj8GGe.unstake.call(uintHaY3glD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEIAj8GGe.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEvuiERLs = await BlueICE.new({from: accounts[2]});
		const addressg3xNoKw = accounts[4]
//		await BlueICEvuiERLs.exit.call({from: accounts[1]});
//		const addresshADLrki = await BlueICEvuiERLs.transferOwnership.call(addressg3xNoKw, {from: accounts[1]});
//		const addressarrayYE77nZU = await BlueICEvuiERLs.getCommunity.call({from: accounts[5]});
//		const uint256dnriB4e = await BlueICEvuiERLs.rewardPerToken.call({from: accounts[2]});

		await expect(BlueICEvuiERLs.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEyoZYZwJ = await BlueICE.new({from: accounts[3]});
		const uintB3zcFZE = BigInt("796")
		const uintBSaUWHX = BigInt("387")
//		const uint256jbgzuM5 = await BlueICEyoZYZwJ.unstake.call(uintB3zcFZE, {from: accounts[0]});
//		await BlueICEyoZYZwJ.claimRewards.call({from: accounts[0]});
//		const uint256Z1L9Ch5 = await BlueICEyoZYZwJ.unstake.call(uintBSaUWHX, {from: accounts[0]});
//		const uint256h4wTRM7 = await BlueICEyoZYZwJ.rewardPerToken.call({from: accounts[4]});

		await expect(BlueICEyoZYZwJ.unstake.call(uintB3zcFZE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEiRmGRKa = await BlueICE.new({from: accounts[2]});
		const uintMWLE0Kk = BigInt("1945")
//		await BlueICEiRmGRKa.claimRewards.call({from: accounts[4]});
//		const uint256zuCOx2s = await BlueICEiRmGRKa.notifyRewardAmount.call(uintMWLE0Kk, {from: accounts[2]});
//		const uint256qltmpVo = await BlueICEiRmGRKa.getCurrentRewardReserve.call({from: accounts[0]});
//		const addressarrayKIlE4i5 = await BlueICEiRmGRKa.getCommunity.call({from: accounts[4]});
//		await BlueICEiRmGRKa.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qA2W0lY = await BlueICEiRmGRKa.getCurrentRewardReserve.call({from: accounts[0]});

		await expect(BlueICEiRmGRKa.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEDPf0M0Y = await BlueICE.new({from: accounts[4]});
		const uintWUFoprb = BigInt("562")
		const addressVcZKQ8Q = accounts[3]
		const uintSHUCfUJ = BigInt("693")
		const addressarrayyksjwJy = await BlueICEDPf0M0Y.getCommunity.call({from: accounts[4]});
//		const uint256JgwLG99 = await BlueICEDPf0M0Y.unstake.call(uintWUFoprb, {from: accounts[4]});
//		const boolaDe65X = await BlueICEDPf0M0Y.isOwner.call({from: accounts[2]});
//		const addressIDx398 = await BlueICEDPf0M0Y.updateReward.call(addressVcZKQ8Q, {from: accounts[4]});
//		const addresss6dgni0 = await BlueICEDPf0M0Y.owner.call({from: accounts[4]});
//		const uint256cKJ4Zml = await BlueICEDPf0M0Y.unstake.call(uintSHUCfUJ, {from: accounts[4]});

		assert.equal(addressarrayyksjwJy, )
		await expect(BlueICEDPf0M0Y.unstake.call(uintWUFoprb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEPt9WWP = await BlueICE.new({from: accounts[2]});
		const addressTYoCs6W = accounts[5]
		const addresswWNReME = accounts[4]
		const addressarrayCIjEmiU = await BlueICEPt9WWP.getCommunity.call({from: accounts[5]});
		const uint256iHe3fEU = await BlueICEPt9WWP.rewardPerToken.call({from: accounts[4]});
		const addresspFQDfsS = await BlueICEPt9WWP.owner.call({from: accounts[4]});
//		const addressQkKauYH = await BlueICEPt9WWP.transferOwnership.call(addressTYoCs6W, {from: accounts[0]});
//		const addresskfapyDw = await BlueICEPt9WWP.updateReward.call(addresswWNReME, {from: accounts[3]});

		assert.equal(addressarrayCIjEmiU, )
		assert.equal(addresspFQDfsS, 0x82d90a79100c92f074018022F6776b976D238d74)
		assert.equal(uint256iHe3fEU, BigInt("0"))
		await expect(BlueICEPt9WWP.transferOwnership.call(addressTYoCs6W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEuvf7hY3 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintckz4dEh = BigInt("30")
		const uint256gTQma5X = await BlueICEuvf7hY3.notifyRewardAmount.call(uintckz4dEh, {from: accounts[2]});
		const uint256KlSosJ8 = await BlueICEuvf7hY3.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256kRjChV2 = await BlueICEuvf7hY3.rewardPerToken.call({from: accounts[2]});
		await BlueICEuvf7hY3.onlyOwner.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEsnhkaeB = await BlueICE.new({from: accounts[0]});
		const uintHaNBwf = BigInt("519")
		const addressarrayaIdWRyH = await BlueICEsnhkaeB.getCommunity.call({from: accounts[1]});
//		const uint256GgawfSb = await BlueICEsnhkaeB.notifyRewardAmount.call(uintHaNBwf, {from: accounts[0]});

		assert.equal(addressarrayaIdWRyH, )
		await expect(BlueICEsnhkaeB.notifyRewardAmount.call(uintHaNBwf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIlMS4cz = await BlueICE.new({from: accounts[4]});
		const addressfWsnakF = accounts[3]
		const addressiYlSfoe = await BlueICEIlMS4cz.transferOwnership.call(addressfWsnakF, {from: accounts[4]});
//		await BlueICEIlMS4cz.claimRewards.call({from: accounts[4]});
//		await BlueICEIlMS4cz.exit.call({from: accounts[3]});

		await expect(BlueICEIlMS4cz.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})