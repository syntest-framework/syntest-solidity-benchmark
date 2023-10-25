const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEqkFYXji = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmq8quzW = BigInt("377")
		const uint256yow0oX = await BlueICEqkFYXji.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256nHEw3Od = await BlueICEqkFYXji.rewardPerToken.call({from: accounts[4]});
		const boolgPJZOf8 = await BlueICEqkFYXji.isOwner.call({from: accounts[0]});
		const uint256zGES5q9 = await BlueICEqkFYXji.notifyRewardAmount.call(uintmq8quzW, {from: accounts[0]});
		const uint256PSGFyb4 = await BlueICEqkFYXji.getCurrentRewardReserve.call({from: accounts[4]});
	});

	it('test for BlueICE', async () => {
		const BlueICEgplu8rG = await BlueICE.new({from: accounts[1]});
		const uintsb5vXMs = BigInt("746")
		const addresstXd1g4h = accounts[0]
		const uint256WOxR6H8 = await BlueICEgplu8rG.notifyRewardAmount.call(uintsb5vXMs, {from: accounts[4]});
		const uint256Its7gpm = await BlueICEgplu8rG.earned.call(addresstXd1g4h, {from: accounts[4]});
		const uint256m0j2adW = await BlueICEgplu8rG.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint2569EaSlV = await BlueICEgplu8rG.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(BlueICEgplu8rG.notifyRewardAmount.call(uintsb5vXMs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEbDKpfKQ = await BlueICE.new({from: accounts[1]});
		await BlueICEbDKpfKQ.onlyOwner.call({from: accounts[2]});
		const boolCl0b5V = await BlueICEbDKpfKQ.isOwner.call({from: accounts[1]});
		const boolwQWPS1 = await BlueICEbDKpfKQ.isOwner.call({from: accounts[5]});

		await expect(BlueICEbDKpfKQ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEj3Vb40L = await BlueICE.new({from: accounts[5]});
		const addressAcnKuAF = accounts[4]
		const addressj1l8iU4 = accounts[2]
		const uint256JPWEUfS = await BlueICEj3Vb40L.earned.call(addressAcnKuAF, {from: accounts[1]});
		await BlueICEj3Vb40L.claimRewards.call({from: accounts[0]});
		await BlueICEj3Vb40L.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressX6tzixl = await BlueICEj3Vb40L.updateReward.call(addressj1l8iU4, {from: accounts[2]});
		await BlueICEj3Vb40L.exit.call({from: accounts[4]});

		assert.equal(uint256JPWEUfS, BigInt("0"))
		await expect(BlueICEj3Vb40L.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEe73MGGH = await BlueICE.new({from: accounts[3]});
		await BlueICEe73MGGH.renounceOwnership.call({from: accounts[3]});
		const addressEje7ct8 = await BlueICEe73MGGH.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEe73MGGH.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERwXyxl4 = await BlueICE.new({from: accounts[4]});
		const uintBik4ivX = BigInt("914")
		const uintdotJjjB = BigInt("1481")
		const uint256exnKkpc = await BlueICERwXyxl4.unstake.call(uintBik4ivX, {from: accounts[1]});
		const uint25640eg2c = await BlueICERwXyxl4.rewardPerToken.call({from: accounts[0]});
		await BlueICERwXyxl4.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iRQs9vN = await BlueICERwXyxl4.notifyRewardAmount.call(uintdotJjjB, {from: accounts[3]});

		await expect(BlueICERwXyxl4.unstake.call(uintBik4ivX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEupmAHHB = await BlueICE.new({from: accounts[3]});
		const uintBYim2Af = BigInt("1112")
		const uint256uqM35uf = await BlueICEupmAHHB.stake.call(uintBYim2Af, {from: accounts[2]});
		const addresshlYMe0m = await BlueICEupmAHHB.owner.call({from: accounts[2]});
		await BlueICEupmAHHB.renounceOwnership.call({from: accounts[4]});
		await BlueICEupmAHHB.onlyOwner.call({from: accounts[4]});

		await expect(BlueICEupmAHHB.stake.call(uintBYim2Af, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEipBh3Gk = await BlueICE.new({from: accounts[3]});
		const addresssvQzOis = accounts[5]
		const boolMMeAI0 = await BlueICEipBh3Gk.isOwner.call({from: accounts[4]});
		await BlueICEipBh3Gk.exit.call({from: accounts[3]});
		const addressZ9me8Z7 = await BlueICEipBh3Gk.owner.call({from: accounts[3]});
		const uint2567ZK5mW = await BlueICEipBh3Gk.earned.call(addresssvQzOis, {from: accounts[4]});
		const uint256ohn3PB = await BlueICEipBh3Gk.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(boolMMeAI0, false)
		await expect(BlueICEipBh3Gk.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEgplu8rG = await BlueICE.new({from: accounts[1]});
		const addresswoJvC56 = accounts[1]
		const uint256Its7gpm = await BlueICEgplu8rG.earned.call(addresswoJvC56, {from: accounts[4]});
		const uint256m0j2adW = await BlueICEgplu8rG.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint2569EaSlV = await BlueICEgplu8rG.getCurrentRewardReserve.call({from: accounts[2]});

		assert.equal(uint2569EaSlV, BigInt("500000000000000000000"))
		assert.equal(uint256Its7gpm, BigInt("0"))
		assert.equal(uint256m0j2adW, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEv1MKNJD = await BlueICE.new({from: accounts[2]});
		const addressarrayaXYnQA = await BlueICEv1MKNJD.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEv1MKNJD.onlyOwner.call({from: accounts[0]});
		const uint256YTz6sYJ = await BlueICEv1MKNJD.getCurrentRewardReserve.call({from: accounts[0]});
		await BlueICEv1MKNJD.checkhalv.call({from: accounts[4]});

		assert.equal(addressarrayaXYnQA, )
		await expect(BlueICEv1MKNJD.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEe73MGGH = await BlueICE.new({from: accounts[3]});
		const addressEOfDJ55 = accounts[2]
		const addresszcN9A0a = accounts[3]
		const uintRRLkdwk = BigInt("1001")
		const uintstMyRon = BigInt("132")
		const addressyYamNqy = accounts[5]
		const addressncDh7z = await BlueICEe73MGGH.transferOwnership.call(addressEOfDJ55, {from: accounts[3]});
		const uint256YrApEar = await BlueICEe73MGGH.earned.call(addresszcN9A0a, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZYPz1m5 = await BlueICEe73MGGH.unstake.call(uintRRLkdwk, {from: accounts[3]});
		const uint256xLCB2pH = await BlueICEe73MGGH.rewardPerToken.call({from: accounts[3]});
		const uint256ONqIgj = await BlueICEe73MGGH.stake.call(uintstMyRon, {from: accounts[3]});
		const addressEje7ct8 = await BlueICEe73MGGH.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256z4x9JU8 = await BlueICEe73MGGH.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressYPsH3jo = await BlueICEe73MGGH.owner.call({from: accounts[5]});
		const addressLhjw38R = await BlueICEe73MGGH.updateReward.call(addressyYamNqy, {from: accounts[1]});
		await BlueICEe73MGGH.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256YrApEar, BigInt("0"))
		await expect(BlueICEe73MGGH.unstake.call(uintRRLkdwk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEGNzhxaQ = await BlueICE.new({from: accounts[3]});
		const uintAAJk4TA = BigInt("140")
		const addressamB6HIJ = "0x0000000000000000000000000000000000000001"
		const uint256Bpr4Qd9 = await BlueICEGNzhxaQ.notifyRewardAmount.call(uintAAJk4TA, {from: accounts[3]});
		await BlueICEGNzhxaQ.claimRewards.call({from: accounts[4]});
		const addressDKGuoYk = await BlueICEGNzhxaQ.transferOwnership.call(addressamB6HIJ, {from: accounts[3]});
		await BlueICEGNzhxaQ.claimRewards.call({from: accounts[2]});

		await expect(BlueICEGNzhxaQ.notifyRewardAmount.call(uintAAJk4TA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})