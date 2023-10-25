const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICE61bbqF = await BlueICE.new({from: accounts[1]});
		const addressfn9ggyn = accounts[5]
		const uintXlPdQPJ = BigInt("1389")
//		await BlueICE61bbqF.claimRewards.call({from: accounts[1]});
//		const addressxQ3tRft = await BlueICE61bbqF.transferOwnership.call(addressfn9ggyn, {from: accounts[3]});
//		const uint2564vTBXU = await BlueICE61bbqF.unstake.call(uintXlPdQPJ, {from: accounts[4]});
//		const uint256jjNvdD9 = await BlueICE61bbqF.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256S7zt24z = await BlueICE61bbqF.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(BlueICE61bbqF.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEy3ghcPG = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDKLwVO = accounts[1]
		await BlueICEy3ghcPG.claimRewards.call({from: accounts[5]});
		await BlueICEy3ghcPG.onlyOwner.call({from: accounts[1]});
		const addressHRf7Lg = await BlueICEy3ghcPG.updateReward.call(addressDKLwVO, {from: accounts[1]});
		const addressnoYooIQ = await BlueICEy3ghcPG.owner.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEhQrQHZM = await BlueICE.new({from: accounts[3]});
		const uintW7e6qlg = BigInt("1031")
//		const uint256PQqgKgd = await BlueICEhQrQHZM.stake.call(uintW7e6qlg, {from: accounts[0]});
//		const addressVQ8DGKQ = await BlueICEhQrQHZM.owner.call({from: accounts[0]});
//		await BlueICEhQrQHZM.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Cij0qjD = await BlueICEhQrQHZM.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEhQrQHZM.exit.call({from: accounts[2]});

		await expect(BlueICEhQrQHZM.stake.call(uintW7e6qlg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEVCf7EQZ = await BlueICE.new({from: accounts[0]});
		const addressgKiOsPt = accounts[2]
//		await BlueICEVCf7EQZ.onlyOwner.call({from: accounts[4]});
//		await BlueICEVCf7EQZ.onlyOwner.call({from: accounts[0]});
//		const addressarrayDjKKSq6 = await BlueICEVCf7EQZ.getCommunity.call({from: accounts[2]});
//		const addressbANcoZ7 = await BlueICEVCf7EQZ.updateReward.call(addressgKiOsPt, {from: accounts[4]});
//		const addressarrayYzrbpC7 = await BlueICEVCf7EQZ.getCommunity.call({from: accounts[1]});

		await expect(BlueICEVCf7EQZ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEHoPixUi = await BlueICE.new({from: accounts[0]});
		const uintKgJX5AT = BigInt("1319")
		const uintHeXwqw6 = BigInt("400")
		const uintCgY3Cnx = BigInt("238")
		const uint256yuw8ghn = await BlueICEHoPixUi.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256oPignWO = await BlueICEHoPixUi.unstake.call(uintKgJX5AT, {from: accounts[1]});
//		const uint256ROHJ2q5 = await BlueICEHoPixUi.stake.call(uintHeXwqw6, {from: accounts[2]});
//		const uint256LjyQJ80 = await BlueICEHoPixUi.stake.call(uintCgY3Cnx, {from: accounts[3]});

		assert.equal(uint256yuw8ghn, BigInt("0"))
		await expect(BlueICEHoPixUi.unstake.call(uintKgJX5AT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEr3jBUnX = await BlueICE.new({from: accounts[2]});
		const uintbuLa1QL = BigInt("590")
		const addressarrayVEECj1q = await BlueICEr3jBUnX.getCommunity.call({from: accounts[2]});
		const uint256QK1MrHQ = await BlueICEr3jBUnX.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256VNkIsva = await BlueICEr3jBUnX.notifyRewardAmount.call(uintbuLa1QL, {from: accounts[0]});

		assert.equal(addressarrayVEECj1q, )
		assert.equal(uint256QK1MrHQ, BigInt("0"))
		await expect(BlueICEr3jBUnX.notifyRewardAmount.call(uintbuLa1QL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfF8HPZy = await BlueICE.new({from: accounts[0]});
		const uintjiGoqVg = BigInt("1232")
		const addressV6Sf4gZ = accounts[3]
//		await BlueICEfF8HPZy.exit.call({from: accounts[0]});
//		await BlueICEfF8HPZy.exit.call({from: accounts[1]});
//		const uint256lKXh2C1 = await BlueICEfF8HPZy.unstake.call(uintjiGoqVg, {from: accounts[1]});
//		const uint256X7AQcmA = await BlueICEfF8HPZy.earned.call(addressV6Sf4gZ, {from: accounts[2]});
//		const boolmISy7Ct = await BlueICEfF8HPZy.isOwner.call({from: accounts[3]});

		await expect(BlueICEfF8HPZy.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICESsYZEjx = await BlueICE.new({from: accounts[3]});
		const addressAcxWDxd = accounts[5]
		const uintqZE7n8d = BigInt("2035")
		const address7brFIG = accounts[3]
		const uint256vIGwtMM = await BlueICESsYZEjx.earned.call(addressAcxWDxd, {from: accounts[3]});
		const uint256mWGRSPn = await BlueICESsYZEjx.getCurrentRewardReserve.call({from: accounts[1]});
//		await BlueICESsYZEjx.renounceOwnership.call({from: accounts[0]});
//		const addressarrayq3TqNxZ = await BlueICESsYZEjx.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICESsYZEjx.renounceOwnership.call({from: accounts[5]});
//		await BlueICESsYZEjx.renounceOwnership.call({from: accounts[1]});
//		const uint256Qbz77Lt = await BlueICESsYZEjx.notifyRewardAmount.call(uintqZE7n8d, {from: accounts[3]});
//		const addressAEu2isp = await BlueICESsYZEjx.transferOwnership.call(address7brFIG, {from: accounts[1]});

		assert.equal(uint256mWGRSPn, BigInt("500000000000000000000"))
		assert.equal(uint256vIGwtMM, BigInt("0"))
		await expect(BlueICESsYZEjx.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE5cO8yI = await BlueICE.new({from: accounts[2]});
		const addresslLucUgA = await BlueICE5cO8yI.owner.call({from: accounts[1]});
//		await BlueICE5cO8yI.onlyOwner.call({from: accounts[3]});
//		await BlueICE5cO8yI.checkhalv.call({from: accounts[2]});
//		const boolrQDhj41 = await BlueICE5cO8yI.isOwner.call({from: accounts[0]});

		assert.equal(addresslLucUgA, 0x7e9163BC9A1506EfDcD305046980e2989d5eE06c)
		await expect(BlueICE5cO8yI.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEfF8HPZy = await BlueICE.new({from: accounts[0]});
//		await BlueICEfF8HPZy.renounceOwnership.call({from: accounts[0]});
//		const uint256O9m2VJ7 = await BlueICEfF8HPZy.rewardPerToken.call({from: accounts[1]});

		await expect(BlueICEfF8HPZy.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEw4l6Nu = await BlueICE.new({from: accounts[3]});
		const addressFYaqGt = accounts[4]
		const addresslVFXzDc = await BlueICEw4l6Nu.transferOwnership.call(addressFYaqGt, {from: accounts[3]});
//		await BlueICEw4l6Nu.exit.call({from: accounts[2]});

		await expect(BlueICEw4l6Nu.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOlrEZQz = await BlueICE.new({from: accounts[0]});
		const uintbBLMyFc = BigInt("1082")
		const addresspEVfPB = accounts[3]
//		const uint256bwmTUgc = await BlueICEOlrEZQz.notifyRewardAmount.call(uintbBLMyFc, {from: accounts[0]});
//		const addressqqtd9X1 = await BlueICEOlrEZQz.transferOwnership.call(addresspEVfPB, {from: accounts[4]});
//		const addressarrayZ8AVwJX = await BlueICEOlrEZQz.getCommunity.call({from: accounts[2]});
//		const uint256j4Llqk8 = await BlueICEOlrEZQz.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEOlrEZQz.notifyRewardAmount.call(uintbBLMyFc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})