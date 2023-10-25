const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEMYKBWQi = await BlueICE.new({from: accounts[2]});
//		await BlueICEMYKBWQi.exit.call({from: accounts[3]});
//		const boolHp3ZoRH = await BlueICEMYKBWQi.isOwner.call({from: accounts[0]});
//		const addressarrayGR2cRIV = await BlueICEMYKBWQi.getCommunity.call({from: accounts[5]});

		await expect(BlueICEMYKBWQi.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICENJlrwQt = await BlueICE.new({from: accounts[4]});
		const addressCf2dNJ = accounts[0]
//		await BlueICENJlrwQt.renounceOwnership.call({from: accounts[0]});
//		const uint256gcCbuYh = await BlueICENJlrwQt.earned.call(addressCf2dNJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressarrayEn2GP51 = await BlueICENJlrwQt.getCommunity.call({from: accounts[3]});
//		const boolk1LicS9 = await BlueICENJlrwQt.isOwner.call({from: accounts[2]});
//		const uint256kaYPsk7 = await BlueICENJlrwQt.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(BlueICENJlrwQt.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEsiWNjTt = await BlueICE.new({from: accounts[3]});
//		await BlueICEsiWNjTt.claimRewards.call({from: accounts[0]});
//		await BlueICEsiWNjTt.exit.call({from: accounts[0]});
//		await BlueICEsiWNjTt.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEsiWNjTt.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEj0Juhxf = await BlueICE.new({from: accounts[2]});
		const addressRy86XZ4 = accounts[4]
		const uintjHGkJNR = BigInt("1857")
		const uint256hq51aC9 = await BlueICEj0Juhxf.earned.call(addressRy86XZ4, {from: accounts[4]});
//		const uint2561sNTKY = await BlueICEj0Juhxf.unstake.call(uintjHGkJNR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hq51aC9, BigInt("0"))
		await expect(BlueICEj0Juhxf.unstake.call(uintjHGkJNR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZmAl5H4 = await BlueICE.new({from: accounts[2]});
		const uintkYmKUeo = BigInt("616")
		const uintFUsZ53q = BigInt("692")
		const uint256K7PAzge = await BlueICEZmAl5H4.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256Z17xnBF = await BlueICEZmAl5H4.stake.call(uintkYmKUeo, {from: accounts[4]});
//		await BlueICEZmAl5H4.checkhalv.call({from: accounts[3]});
//		const uint256iC5yK5c = await BlueICEZmAl5H4.unstake.call(uintFUsZ53q, {from: accounts[3]});
//		await BlueICEZmAl5H4.claimRewards.call({from: accounts[0]});

		assert.equal(uint256K7PAzge, BigInt("0"))
		await expect(BlueICEZmAl5H4.stake.call(uintkYmKUeo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEvavtqGN = await BlueICE.new({from: accounts[2]});
		const uints1X62gk = BigInt("912")
		const addressts7Nz7L = accounts[1]
		const addressJuvPAB = accounts[1]
//		await BlueICEvavtqGN.checkhalv.call({from: accounts[2]});
//		const uint256sJxlnbC = await BlueICEvavtqGN.stake.call(uints1X62gk, {from: accounts[4]});
//		const uint256A937Poy = await BlueICEvavtqGN.earned.call(addressts7Nz7L, {from: accounts[0]});
//		const uint256nnbWQSd = await BlueICEvavtqGN.earned.call(addressJuvPAB, {from: accounts[4]});

		await expect(BlueICEvavtqGN.checkhalv.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZmAl5H4 = await BlueICE.new({from: accounts[2]});
		const uintwkDbjzm = BigInt("599")
		const uintpyFaoVX = BigInt("692")
		const addressaPxIihG = accounts[1]
		const uint256R1M1I3x = await BlueICEZmAl5H4.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256K7PAzge = await BlueICEZmAl5H4.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256Z17xnBF = await BlueICEZmAl5H4.stake.call(uintwkDbjzm, {from: accounts[4]});
//		await BlueICEZmAl5H4.checkhalv.call({from: accounts[3]});
//		const uint256iC5yK5c = await BlueICEZmAl5H4.unstake.call(uintpyFaoVX, {from: accounts[3]});
//		await BlueICEZmAl5H4.claimRewards.call({from: accounts[0]});
//		const uint256W9XPq7 = await BlueICEZmAl5H4.earned.call(addressaPxIihG, {from: accounts[1]});

		assert.equal(uint256K7PAzge, BigInt("0"))
		assert.equal(uint256R1M1I3x, BigInt("500000000000000000000"))
		await expect(BlueICEZmAl5H4.stake.call(uintwkDbjzm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEj0Juhxf = await BlueICE.new({from: accounts[2]});
		const addressdEhixX = accounts[4]
		const uint256hq51aC9 = await BlueICEj0Juhxf.earned.call(addressdEhixX, {from: accounts[4]});
		const addressAf36cI = await BlueICEj0Juhxf.owner.call({from: accounts[2]});

		assert.equal(addressAf36cI, 0x6cFd40368FfeB09f8A5E05624F459883d103A54c)
		assert.equal(uint256hq51aC9, BigInt("0"))
	});

	it('test for BlueICE', async () => {
		const BlueICEj0Juhxf = await BlueICE.new({from: accounts[2]});
		const addressqMT6qpM = "0x0000000000000000000000000000000000000001"
		const addressqliEqY6 = accounts[5]
		const uint256eEcvQkv = await BlueICEj0Juhxf.earned.call(addressqMT6qpM, {from: accounts[4]});
		const uint256hq51aC9 = await BlueICEj0Juhxf.earned.call(addressqliEqY6, {from: accounts[4]});
		const addressarrayQoF2tQC = await BlueICEj0Juhxf.getCommunity.call({from: accounts[0]});
//		await BlueICEj0Juhxf.claimRewards.call({from: accounts[1]});

		assert.equal(addressarrayQoF2tQC, )
		assert.equal(uint256eEcvQkv, BigInt("0"))
		assert.equal(uint256hq51aC9, BigInt("0"))
		await expect(BlueICEj0Juhxf.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEsiWNjTt = await BlueICE.new({from: accounts[3]});
		const addressdgUBliP = accounts[3]
		const addressx6uXHa6 = await BlueICEsiWNjTt.transferOwnership.call(addressdgUBliP, {from: accounts[3]});
//		await BlueICEsiWNjTt.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEsiWNjTt.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEZmAl5H4 = await BlueICE.new({from: accounts[2]});
		const uint0YSrpK = BigInt("584")
		const uintiMDHAUV = BigInt("692")
		const uintoBFTOuV = BigInt("1994")
		const uint256K7PAzge = await BlueICEZmAl5H4.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256PC9Z993 = await BlueICEZmAl5H4.lastTimeRewardApplicable.call({from: accounts[1]});
//		await BlueICEZmAl5H4.renounceOwnership.call({from: accounts[2]});
//		const uint256gOTzCqf = await BlueICEZmAl5H4.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint256Z17xnBF = await BlueICEZmAl5H4.stake.call(uint0YSrpK, {from: accounts[4]});
//		await BlueICEZmAl5H4.checkhalv.call({from: accounts[3]});
//		const addressr3TH3LM = await BlueICEZmAl5H4.owner.call({from: accounts[3]});
//		await BlueICEZmAl5H4.onlyOwner.call({from: accounts[3]});
//		const uint256iC5yK5c = await BlueICEZmAl5H4.unstake.call(uintiMDHAUV, {from: accounts[3]});
//		const addressarrayPZ3ouGg = await BlueICEZmAl5H4.getCommunity.call({from: accounts[3]});
//		const uint256Sz2kgBG = await BlueICEZmAl5H4.stake.call(uintoBFTOuV, {from: accounts[3]});
//		await BlueICEZmAl5H4.claimRewards.call({from: accounts[0]});

		assert.equal(uint256K7PAzge, BigInt("0"))
		assert.equal(uint256PC9Z993, BigInt("0"))
		await expect(BlueICEZmAl5H4.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICElKYu4Kf = await BlueICE.new({from: accounts[3]});
		const uintS5UmMd2 = BigInt("10")
		const uintEhPJ1zP = BigInt("712")
//		const uint256l9mP24J = await BlueICElKYu4Kf.notifyRewardAmount.call(uintS5UmMd2, {from: accounts[3]});
//		const uint256VT81hzo = await BlueICElKYu4Kf.unstake.call(uintEhPJ1zP, {from: accounts[1]});
//		const uint256DcxyjLN = await BlueICElKYu4Kf.rewardPerToken.call({from: accounts[0]});
//		await BlueICElKYu4Kf.renounceOwnership.call({from: accounts[2]});
//		await BlueICElKYu4Kf.exit.call({from: accounts[3]});

		await expect(BlueICElKYu4Kf.notifyRewardAmount.call(uintS5UmMd2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEXxJQvdo = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		await BlueICEXxJQvdo.exit.call({from: accounts[2]});
		const uint256b0XveXK = await BlueICEXxJQvdo.rewardPerToken.call({from: accounts[3]});
		const uint256DFCUB9d = await BlueICEXxJQvdo.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});
})