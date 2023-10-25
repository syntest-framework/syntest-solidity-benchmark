const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEPXxMKXV = await BlueICE.new({from: accounts[0]});
		const addressOnsU0CA = accounts[2]
		const uintSqOgT8A = BigInt("495")
//		const addressytfIlxM = await BlueICEPXxMKXV.transferOwnership.call(addressOnsU0CA, {from: accounts[3]});
//		const uint256pZzoOb7 = await BlueICEPXxMKXV.unstake.call(uintSqOgT8A, {from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEPXxMKXV.claimRewards.call({from: accounts[4]});
//		const uint256zgpKKfh = await BlueICEPXxMKXV.getCurrentRewardReserve.call({from: accounts[4]});

		await expect(BlueICEPXxMKXV.transferOwnership.call(addressOnsU0CA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIZvC46e = await BlueICE.new({from: accounts[0]});
		const addressxuTSVyQ = accounts[4]
		const uintav4zoZi = BigInt("1465")
//		const addressbvVZYmy = await BlueICEIZvC46e.updateReward.call(addressxuTSVyQ, {from: accounts[4]});
//		const uint256bDsalx = await BlueICEIZvC46e.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint256JxyorzH = await BlueICEIZvC46e.unstake.call(uintav4zoZi, {from: accounts[1]});
//		const uint256Y6bcYP = await BlueICEIZvC46e.rewardPerToken.call({from: accounts[2]});

		await expect(BlueICEIZvC46e.updateReward.call(addressxuTSVyQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEIyIiGTQ = await BlueICE.new({from: accounts[0]});
		const addressz5LneaN = accounts[4]
		const addresskx0TFoP = accounts[3]
		const uint256PdMhbmm = await BlueICEIyIiGTQ.rewardPerToken.call({from: accounts[0]});
//		const addressy8kUgUW = await BlueICEIyIiGTQ.updateReward.call(addressz5LneaN, {from: accounts[4]});
//		const addressZWzuXP = await BlueICEIyIiGTQ.updateReward.call(addresskx0TFoP, {from: accounts[2]});
//		const uint256pq5Fndx = await BlueICEIyIiGTQ.getCurrentRewardReserve.call({from: accounts[1]});

		assert.equal(uint256PdMhbmm, BigInt("0"))
		await expect(BlueICEIyIiGTQ.updateReward.call(addressz5LneaN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdFMXikq = await BlueICE.new({from: accounts[3]});
		const uintJYRR1Kf = BigInt("1781")
		const uintNZwdzIh = BigInt("1686")
		const address1IrAFt = accounts[1]
		const addressXPoNKUY = "0x0000000000000000000000000000000000000001"
		const uint256OfTCiTu = await BlueICEdFMXikq.getCurrentRewardReserve.call({from: accounts[2]});
//		await BlueICEdFMXikq.exit.call({from: accounts[2]});
//		const uint256SXBxlHV = await BlueICEdFMXikq.notifyRewardAmount.call(uintJYRR1Kf, {from: accounts[1]});
//		const uint256RM7wQXY = await BlueICEdFMXikq.notifyRewardAmount.call(uintNZwdzIh, {from: accounts[2]});
//		const addressxijjJuD = await BlueICEdFMXikq.transferOwnership.call(address1IrAFt, {from: accounts[4]});
//		const uint256tOv1EVm = await BlueICEdFMXikq.earned.call(addressXPoNKUY, {from: accounts[1]});

		assert.equal(uint256OfTCiTu, BigInt("500000000000000000000"))
		await expect(BlueICEdFMXikq.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEDZl8ETg = await BlueICE.new({from: accounts[5]});
		const uintztcRj8c = BigInt("668")
		const uintbYk7KvX = BigInt("806")
//		const uint256AkqHDWg = await BlueICEDZl8ETg.unstake.call(uintztcRj8c, {from: accounts[2]});
//		await BlueICEDZl8ETg.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256icPft2u = await BlueICEDZl8ETg.unstake.call(uintbYk7KvX, {from: accounts[3]});
//		await BlueICEDZl8ETg.exit.call({from: accounts[5]});

		await expect(BlueICEDZl8ETg.unstake.call(uintztcRj8c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE9eGUnL = await BlueICE.new({from: accounts[3]});
		const uintCMM1orn = BigInt("1438")
//		const uint256EfgFwJ7 = await BlueICE9eGUnL.notifyRewardAmount.call(uintCMM1orn, {from: accounts[3]});
//		await BlueICE9eGUnL.renounceOwnership.call({from: accounts[2]});
//		const uint256llNx6W = await BlueICE9eGUnL.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(BlueICE9eGUnL.notifyRewardAmount.call(uintCMM1orn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEr9zAmXj = await BlueICE.new({from: accounts[5]});
		const uintc4YnHos = BigInt("418")
//		await BlueICEr9zAmXj.claimRewards.call({from: accounts[4]});
//		const uint256MUisTZE = await BlueICEr9zAmXj.unstake.call(uintc4YnHos, {from: accounts[2]});
//		await BlueICEr9zAmXj.claimRewards.call({from: accounts[3]});

		await expect(BlueICEr9zAmXj.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEr9zAmXj = await BlueICE.new({from: accounts[5]});
		const uintI5ENrdB = BigInt("345")
		const addressGeJgP0B = accounts[3]
		const addressarrayvnXH3hQ = await BlueICEr9zAmXj.getCommunity.call({from: accounts[4]});
//		const uint256MUisTZE = await BlueICEr9zAmXj.unstake.call(uintI5ENrdB, {from: accounts[2]});
//		const uint256whaYUci = await BlueICEr9zAmXj.earned.call(addressGeJgP0B, {from: accounts[4]});
//		const boolVrqLcn = await BlueICEr9zAmXj.isOwner.call({from: accounts[5]});

		assert.equal(addressarrayvnXH3hQ, )
		await expect(BlueICEr9zAmXj.unstake.call(uintI5ENrdB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOuITOfX = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZrGsEzU = await BlueICEOuITOfX.getCurrentRewardReserve.call({from: accounts[1]});
		await BlueICEOuITOfX.renounceOwnership.call({from: accounts[3]});
		await BlueICEOuITOfX.onlyOwner.call({from: accounts[0]});
		const uint256JFSpYxn = await BlueICEOuITOfX.getCurrentRewardReserve.call({from: accounts[1]});
	});

	it('test for BlueICE', async () => {
		const BlueICE9eGUnL = await BlueICE.new({from: accounts[3]});
		const uintmpEZIPs = BigInt("645")
//		const uint2563sBIwp = await BlueICE9eGUnL.stake.call(uintmpEZIPs, {from: accounts[2]});
//		const uint256WK3YYlO = await BlueICE9eGUnL.getCurrentRewardReserve.call({from: accounts[0]});
//		await BlueICE9eGUnL.renounceOwnership.call({from: accounts[2]});

		await expect(BlueICE9eGUnL.stake.call(uintmpEZIPs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICE9eGUnL = await BlueICE.new({from: accounts[3]});
		const uintyA961sC = BigInt("1852")
		const addressyZkfUFI = accounts[2]
		const addressl5JvWKy = await BlueICE9eGUnL.owner.call({from: accounts[5]});
//		const uint2563sBIwp = await BlueICE9eGUnL.stake.call(uintyA961sC, {from: accounts[2]});
//		const uint256WK3YYlO = await BlueICE9eGUnL.getCurrentRewardReserve.call({from: accounts[0]});
//		const addressM8O8uo5 = await BlueICE9eGUnL.updateReward.call(addressyZkfUFI, {from: accounts[1]});
//		await BlueICE9eGUnL.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressl5JvWKy, 0x23b429239Ce34Fa87A38117bA5c0eD1ecC975A2a)
		await expect(BlueICE9eGUnL.stake.call(uintyA961sC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEdL1RRL3 = await BlueICE.new({from: accounts[4]});
		const addressrxNSuMA = accounts[0]
		const addressqCaXOe4 = accounts[2]
		const addresscK6zrG1 = await BlueICEdL1RRL3.transferOwnership.call(addressrxNSuMA, {from: accounts[4]});
//		const addressLtzukyb = await BlueICEdL1RRL3.transferOwnership.call(addressqCaXOe4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tm9H0Z = await BlueICEdL1RRL3.getCurrentRewardReserve.call({from: accounts[3]});

		await expect(BlueICEdL1RRL3.transferOwnership.call(addressqCaXOe4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEr9zAmXj = await BlueICE.new({from: accounts[5]});
		const uintvS5LoLW = BigInt("1074")
		const addressjWI4Go9 = accounts[2]
		const uintTbEgmQ5 = BigInt("1272")
//		await BlueICEr9zAmXj.renounceOwnership.call({from: accounts[5]});
//		const uint256MUisTZE = await BlueICEr9zAmXj.unstake.call(uintvS5LoLW, {from: accounts[2]});
//		const uint256PbWZuHx = await BlueICEr9zAmXj.earned.call(addressjWI4Go9, {from: accounts[1]});
//		const uint256K1yvL47 = await BlueICEr9zAmXj.notifyRewardAmount.call(uintTbEgmQ5, {from: accounts[4]});

		await expect(BlueICEr9zAmXj.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOdLaP0i = await BlueICE.new({from: accounts[1]});
		const addressY553Zaa = accounts[3]
		const addressTtmGtlE = "0x00000000000000000000000000000000000000-1"
		const uintdMkYocB = BigInt("1407")
		const uint256LszNK9B = await BlueICEOdLaP0i.earned.call(addressY553Zaa, {from: accounts[2]});
//		const uint256MJcNjns = await BlueICEOdLaP0i.earned.call(addressTtmGtlE, {from: accounts[0]});
//		const uint256Nn7xSk = await BlueICEOdLaP0i.unstake.call(uintdMkYocB, {from: accounts[4]});

		assert.equal(uint256LszNK9B, BigInt("0"))
		await expect(BlueICEOdLaP0i.earned.call(addressTtmGtlE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})