const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICET1O3sBC = await BlueICE.new({from: accounts[5]});
		const addressyHy5XeH = accounts[5]
		const addressW3a8vlY = accounts[1]
		const addressv0eqhOr = accounts[3]
//		await BlueICET1O3sBC.onlyOwner.call({from: accounts[0]});
//		const uint256B2o4cc9 = await BlueICET1O3sBC.earned.call(addressyHy5XeH, {from: accounts[0]});
//		const addressHuJOZih = await BlueICET1O3sBC.transferOwnership.call(addressW3a8vlY, {from: accounts[4]});
//		const addressN7NLhHs = await BlueICET1O3sBC.transferOwnership.call(addressv0eqhOr, {from: accounts[0]});

		await expect(BlueICET1O3sBC.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEq3jh33R = await BlueICE.new({from: accounts[2]});
		const addressYHKMaO2 = accounts[1]
//		await BlueICEq3jh33R.claimRewards.call({from: accounts[2]});
//		const addressarrayUsPLnCY = await BlueICEq3jh33R.getCommunity.call({from: accounts[2]});
//		await BlueICEq3jh33R.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const booliB7aHAK = await BlueICEq3jh33R.isOwner.call({from: accounts[1]});
//		const addressGVqVK9S = await BlueICEq3jh33R.transferOwnership.call(addressYHKMaO2, {from: accounts[4]});

		await expect(BlueICEq3jh33R.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEF794da = await BlueICE.new({from: accounts[2]});
//		await BlueICEF794da.exit.call({from: accounts[5]});
//		const uint256uw9lPF = await BlueICEF794da.rewardPerToken.call({from: accounts[0]});
		await BlueICEF794da.exit.call({from: accounts[5]});

		await expect(BlueICEF794da.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEUeTjEaa = await BlueICE.new({from: accounts[1]});
		const uinteKLqMgm = BigInt("240")
		const addressJSuXQIK = accounts[3]
		const addressarrayvlOUuvd = await BlueICEUeTjEaa.getCommunity.call({from: accounts[1]});
//		await BlueICEUeTjEaa.renounceOwnership.call({from: accounts[0]});
//		const uint256b5wSAgg = await BlueICEUeTjEaa.stake.call(uinteKLqMgm, {from: accounts[4]});
//		const addressarrayxn3NPU4 = await BlueICEUeTjEaa.getCommunity.call({from: accounts[0]});
//		const addressvdHmtMY = await BlueICEUeTjEaa.transferOwnership.call(addressJSuXQIK, {from: accounts[3]});

		assert.equal(addressarrayvlOUuvd, )
		await expect(BlueICEUeTjEaa.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKQu0Msy = await BlueICE.new({from: accounts[1]});
		const uintOjierq = BigInt("1626")
//		const uint256ISmd4VO = await BlueICEKQu0Msy.stake.call(uintOjierq, {from: accounts[0]});
//		await BlueICEKQu0Msy.claimRewards.call({from: accounts[1]});
//		const uint256JgDU156 = await BlueICEKQu0Msy.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256Tvp7dMw = await BlueICEKQu0Msy.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEKQu0Msy.stake.call(uintOjierq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKR0zXKF = await BlueICE.new({from: accounts[1]});
		const uintJsEKsPB = BigInt("1512")
		const uintxdSOAp = BigInt("1396")
//		const uint256FTaR4Az = await BlueICEKR0zXKF.unstake.call(uintJsEKsPB, {from: accounts[1]});
//		const boolgMHrdT9 = await BlueICEKR0zXKF.isOwner.call({from: accounts[2]});
//		const uint256fqLviv = await BlueICEKR0zXKF.notifyRewardAmount.call(uintxdSOAp, {from: accounts[1]});

		await expect(BlueICEKR0zXKF.unstake.call(uintJsEKsPB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEF794da = await BlueICE.new({from: accounts[2]});
		const uint256XKGT9CJ = await BlueICEF794da.getCurrentRewardReserve.call({from: accounts[3]});
//		await BlueICEF794da.exit.call({from: accounts[5]});

		assert.equal(uint256XKGT9CJ, BigInt("500000000000000000000"))
		await expect(BlueICEF794da.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZnQTgP4 = await BlueICE.new({from: accounts[2]});
		const uintBtyfF5t = BigInt("1201")
//		await BlueICEZnQTgP4.renounceOwnership.call({from: accounts[2]});
//		const uint256agYkTME = await BlueICEZnQTgP4.stake.call(uintBtyfF5t, {from: accounts[5]});

		await expect(BlueICEZnQTgP4.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEF794da = await BlueICE.new({from: accounts[2]});
		const addressarraysIOSfxd = await BlueICEF794da.getCommunity.call({from: accounts[5]});
		const addressWQFVxCD = await BlueICEF794da.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEF794da.exit.call({from: accounts[5]});

		assert.equal(addressWQFVxCD, 0x093Eb1B7b2138B6d6892cD0eD9cb804AAAf90C15)
		assert.equal(addressarraysIOSfxd, )
		await expect(BlueICEF794da.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEKMypmaS = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCojk0M = accounts[3]
		const uintemYg4M9 = BigInt("1743")
		const addressxTYygnM = await BlueICEKMypmaS.updateReward.call(addressCojk0M, {from: accounts[3]});
		const addressarraygEp0Sr = await BlueICEKMypmaS.getCommunity.call({from: accounts[3]});
		const uint256zlGqoCz = await BlueICEKMypmaS.rewardPerToken.call({from: accounts[0]});
		const uint256XFJQjjP = await BlueICEKMypmaS.notifyRewardAmount.call(uintemYg4M9, {from: accounts[0]});
		const uint256fvXTLKc = await BlueICEKMypmaS.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICEKQu0Msy = await BlueICE.new({from: accounts[1]});
		const addressRyi8A1e = accounts[4]
		const uintMQ0bMn = BigInt("1788")
		const uintehG2GsJ = BigInt("250")
		const uint256Iu5cNW = await BlueICEKQu0Msy.earned.call(addressRyi8A1e, {from: accounts[2]});
//		const uint256usdxdk = await BlueICEKQu0Msy.notifyRewardAmount.call(uintMQ0bMn, {from: accounts[1]});
//		const uint256ISmd4VO = await BlueICEKQu0Msy.stake.call(uintehG2GsJ, {from: accounts[0]});
//		const uint256rvc381z = await BlueICEKQu0Msy.lastTimeRewardApplicable.call({from: accounts[4]});
//		const boolJisMKfl = await BlueICEKQu0Msy.isOwner.call({from: accounts[4]});
//		const uint256FHK31Mr = await BlueICEKQu0Msy.getCurrentRewardReserve.call({from: accounts[1]});
//		await BlueICEKQu0Msy.claimRewards.call({from: accounts[1]});
//		const boolanSECRy = await BlueICEKQu0Msy.isOwner.call({from: accounts[3]});
//		await BlueICEKQu0Msy.exit.call({from: accounts[4]});
//		await BlueICEKQu0Msy.checkhalv.call({from: accounts[2]});
//		const boolKkdSTfm = await BlueICEKQu0Msy.isOwner.call({from: accounts[4]});
//		const uint256JgDU156 = await BlueICEKQu0Msy.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256Tvp7dMw = await BlueICEKQu0Msy.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Iu5cNW, BigInt("0"))
		await expect(BlueICEKQu0Msy.notifyRewardAmount.call(uintMQ0bMn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})