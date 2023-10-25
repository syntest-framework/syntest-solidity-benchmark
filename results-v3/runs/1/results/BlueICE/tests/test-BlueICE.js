const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEeCfiVue = await BlueICE.new({from: accounts[4]});
		const uintWIdbhJQ = BigInt("1808")
		const uint256qg2cxha = await BlueICEeCfiVue.unstake.call(uintWIdbhJQ, {from: accounts[3]});
		await BlueICEeCfiVue.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256k7hvT9o = await BlueICEeCfiVue.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BlueICEeCfiVue.unstake.call(uintWIdbhJQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEXC8jgnS = await BlueICE.new({from: accounts[1]});
		const addressWGrNCsY = accounts[1]
		const addressIGKWu4n = accounts[1]
		const addressqTTAAhv = await BlueICEXC8jgnS.transferOwnership.call(addressWGrNCsY, {from: accounts[2]});
		await BlueICEXC8jgnS.onlyOwner.call({from: accounts[4]});
		await BlueICEXC8jgnS.checkhalv.call({from: accounts[2]});
		const addresssruLOf = await BlueICEXC8jgnS.owner.call({from: accounts[1]});
		const uint256wYAb8gC = await BlueICEXC8jgnS.earned.call(addressIGKWu4n, {from: accounts[3]});

		await expect(BlueICEXC8jgnS.transferOwnership.call(addressWGrNCsY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEuqUw3M = await BlueICE.new({from: accounts[4]});
		const uintRh62nge = BigInt("394")
		const uintNOvbXk = BigInt("494")
		const addressGc1e8jJ = accounts[0]
		const uint256APqRE54 = await BlueICEuqUw3M.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256FF7fxG = await BlueICEuqUw3M.stake.call(uintRh62nge, {from: accounts[0]});
		const uint256Wx8gGY = await BlueICEuqUw3M.notifyRewardAmount.call(uintNOvbXk, {from: accounts[1]});
		const addressvB47R4Q = await BlueICEuqUw3M.updateReward.call(addressGc1e8jJ, {from: accounts[5]});

		assert.equal(uint256APqRE54, BigInt("0"))
		await expect(BlueICEuqUw3M.stake.call(uintRh62nge, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEQVme40x = await BlueICE.new({from: accounts[1]});
		const addressMKPEScP = "0x0000000000000000000000000000000000000001"
		const uint256H7FA3I = await BlueICEQVme40x.getCurrentRewardReserve.call({from: accounts[3]});
		const booltJmHH6s = await BlueICEQVme40x.isOwner.call({from: accounts[0]});
		const uint256ZIDukzJ = await BlueICEQVme40x.earned.call(addressMKPEScP, {from: accounts[1]});
		await BlueICEQVme40x.exit.call({from: accounts[3]});

		assert.equal(booltJmHH6s, false)
		assert.equal(uint256H7FA3I, BigInt("500000000000000000000"))
		assert.equal(uint256ZIDukzJ, BigInt("0"))
		await expect(BlueICEQVme40x.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEszksjVy = await BlueICE.new({from: accounts[2]});
		const addressN25XKRD = accounts[0]
		const uint256SKatgRo = await BlueICEszksjVy.earned.call(addressN25XKRD, {from: accounts[1]});
		await BlueICEszksjVy.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEszksjVy.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256SKatgRo, BigInt("0"))
		await expect(BlueICEszksjVy.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEFVRLl4S = await BlueICE.new({from: accounts[0]});
		const addresswkuvzr = accounts[0]
		const uintHKE3lew = BigInt("280")
		const addressbnXspkH = await BlueICEFVRLl4S.updateReward.call(addresswkuvzr, {from: accounts[0]});
		const uint256WdNaWSu = await BlueICEFVRLl4S.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256wsVxyw5 = await BlueICEFVRLl4S.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256xbLbHEP = await BlueICEFVRLl4S.stake.call(uintHKE3lew, {from: accounts[4]});
		await BlueICEFVRLl4S.renounceOwnership.call({from: accounts[3]});
		await BlueICEFVRLl4S.exit.call({from: accounts[3]});

		await expect(BlueICEFVRLl4S.updateReward.call(addresswkuvzr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICErStkwC = await BlueICE.new({from: accounts[3]});
		const addressaB7cAp6 = accounts[4]
		const addressarraytaavpLE = await BlueICErStkwC.getCommunity.call({from: accounts[0]});
		await BlueICErStkwC.exit.call({from: accounts[2]});
		const addressJI0NAx = await BlueICErStkwC.transferOwnership.call(addressaB7cAp6, {from: accounts[0]});
		await BlueICErStkwC.exit.call({from: accounts[0]});
		const addressarrayAPjXTCE = await BlueICErStkwC.getCommunity.call({from: accounts[2]});
		await BlueICErStkwC.exit.call({from: accounts[2]});

		assert.equal(addressarraytaavpLE, )
		await expect(BlueICErStkwC.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOuw1QRe = await BlueICE.new({from: accounts[2]});
		const uintqautko5 = BigInt("727")
		const uint256rF6lX9 = await BlueICEOuw1QRe.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256QkZBmHA = await BlueICEOuw1QRe.notifyRewardAmount.call(uintqautko5, {from: accounts[2]});
		const boolHt8hSf = await BlueICEOuw1QRe.isOwner.call({from: accounts[0]});
		const uint256aA5hJVv = await BlueICEOuw1QRe.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256rF6lX9, BigInt("500000000000000000000"))
		await expect(BlueICEOuw1QRe.notifyRewardAmount.call(uintqautko5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOuw1QRe = await BlueICE.new({from: accounts[2]});
		const uintJlZkkQH = BigInt("1166")
		const addressImhboxN = "0x0000000000000000000000000000000000000001"
		await BlueICEOuw1QRe.renounceOwnership.call({from: accounts[2]});
		const uint256aA5hJVv = await BlueICEOuw1QRe.rewardPerToken.call({from: accounts[1]});
		const uint256q43leF = await BlueICEOuw1QRe.unstake.call(uintJlZkkQH, {from: accounts[1]});
		await BlueICEOuw1QRe.exit.call({from: accounts[0]});
		const addressf4nkicU = await BlueICEOuw1QRe.updateReward.call(addressImhboxN, {from: accounts[5]});

		await expect(BlueICEOuw1QRe.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEOuw1QRe = await BlueICE.new({from: accounts[2]});
		const boolker5zzR = await BlueICEOuw1QRe.isOwner.call({from: accounts[1]});
		const addressMJPikKS = await BlueICEOuw1QRe.owner.call({from: accounts[5]});
		const uint256aA5hJVv = await BlueICEOuw1QRe.rewardPerToken.call({from: accounts[1]});

		assert.equal(addressMJPikKS, 0xD0fd644d8eaf603D79C19302BaC79bF20dAC3679)
		assert.equal(boolker5zzR, false)
		assert.equal(uint256aA5hJVv, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEOuw1QRe = await BlueICE.new({from: accounts[2]});
		const addressICvvAla = accounts[4]
		const uintCNh8CY = BigInt("1158")
		const addresswiB7Kq9 = "0x0000000000000000000000000000000000000001"
		await BlueICEOuw1QRe.renounceOwnership.call({from: accounts[2]});
		const addressi8wmfQg = await BlueICEOuw1QRe.transferOwnership.call(addressICvvAla, {from: accounts[2]});
		const addressarrayQhHOtP = await BlueICEOuw1QRe.getCommunity.call({from: accounts[4]});
		const uint256q43leF = await BlueICEOuw1QRe.unstake.call(uintCNh8CY, {from: accounts[1]});
		const addressf4nkicU = await BlueICEOuw1QRe.updateReward.call(addresswiB7Kq9, {from: accounts[5]});

		await expect(BlueICEOuw1QRe.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEEsYzxj9 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNghB5CI = BigInt("571")
		const uintOMSx3is = BigInt("1002")
		const uint256AfnaLC5 = await BlueICEEsYzxj9.unstake.call(uintNghB5CI, {from: accounts[5]});
		const uint256zW8ekFd = await BlueICEEsYzxj9.stake.call(uintOMSx3is, {from: accounts[4]});
		await BlueICEEsYzxj9.exit.call({from: accounts[2]});
		await BlueICEEsYzxj9.onlyOwner.call({from: accounts[2]});
	});
})