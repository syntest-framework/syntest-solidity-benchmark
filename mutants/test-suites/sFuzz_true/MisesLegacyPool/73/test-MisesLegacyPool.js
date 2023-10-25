const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresscnH6sht = accounts[2]
		const addressrOOjaKQ = accounts[1]
		const uintmfo2PnP = BigInt("366")
		const uintgBhMMku = BigInt("437")
		const MisesLegacyPoolBNf4C9U = await MisesLegacyPool.new(addresscnH6sht, addressrOOjaKQ, uintmfo2PnP, uintgBhMMku, {from: accounts[1]});
		const uintFt6Ub0l = BigInt("1523")
		const addressdfuOnBC = accounts[3]
		const addressI0JO0W4 = accounts[1]
		const addressMENbLcQ = accounts[2]
		const uintSrAfIFw = BigInt("744")
//		const uint256XzfAQrQ = await MisesLegacyPoolBNf4C9U.withdraw.call(uintFt6Ub0l, {from: accounts[1]});
//		const addressuhAsMs = await MisesLegacyPoolBNf4C9U.updateReward.call(addressdfuOnBC, {from: accounts[2]});
//		const uint256xxTpuJB = await MisesLegacyPoolBNf4C9U.earned.call(addressI0JO0W4, {from: accounts[4]});
//		const uint256EOIRal5 = await MisesLegacyPoolBNf4C9U.earned.call(addressMENbLcQ, {from: accounts[3]});
//		const uint256Y96rTdX = await MisesLegacyPoolBNf4C9U.withdraw.call(uintSrAfIFw, {from: accounts[1]});

		await expect(MisesLegacyPoolBNf4C9U.withdraw.call(uintFt6Ub0l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressf5pKKC4 = accounts[1]
		const addressDsDKZ0p = accounts[0]
		const uintlZ5nEfv = BigInt("313")
		const uintLvo8a88 = BigInt("1458")
		const MisesLegacyPoolRAlWNTb = await MisesLegacyPool.new(addressf5pKKC4, addressDsDKZ0p, uintlZ5nEfv, uintLvo8a88, {from: accounts[5]});
		const addressfxP6EvD = accounts[4]
		const addresswTGI9j0 = accounts[5]
		const addressvg7o7qr = accounts[2]
		const uint256CZy6X37 = await MisesLegacyPoolRAlWNTb.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressm3hls1F = await MisesLegacyPoolRAlWNTb.updateReward.call(addressfxP6EvD, {from: accounts[4]});
//		const addressrDQNtOf = await MisesLegacyPoolRAlWNTb.updateReward.call(addresswTGI9j0, {from: accounts[2]});
//		const addressZJM1cp7 = await MisesLegacyPoolRAlWNTb.updateReward.call(addressvg7o7qr, {from: accounts[3]});
//		const uint256HMtarW = await MisesLegacyPoolRAlWNTb.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256CZy6X37, BigInt("0"))
		await expect(MisesLegacyPoolRAlWNTb.updateReward.call(addressfxP6EvD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressU47YH7V = accounts[1]
		const addressRrFQPoL = accounts[2]
		const uintr2WjZVs = BigInt("1676")
		const uintWJZKIQS = BigInt("452")
		const MisesLegacyPooly5bg5N0 = await MisesLegacyPool.new(addressU47YH7V, addressRrFQPoL, uintr2WjZVs, uintWJZKIQS, {from: accounts[4]});
		const uintV2WOKMf = BigInt("1597")
//		const uint256nVIQpy2 = await MisesLegacyPooly5bg5N0.stake.call(uintV2WOKMf, {from: accounts[3]});
//		const uint256k30Ymdu = await MisesLegacyPooly5bg5N0.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256nyogSTz = await MisesLegacyPooly5bg5N0.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(MisesLegacyPooly5bg5N0.stake.call(uintV2WOKMf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressDZl9xZ0 = accounts[3]
		const addressNlKc9D = accounts[4]
		const uintV0Wl7i5 = BigInt("258")
		const uintv3XBEWu = BigInt("1456")
		const MisesLegacyPoolKwvBplo = await MisesLegacyPool.new(addressDZl9xZ0, addressNlKc9D, uintV0Wl7i5, uintv3XBEWu, {from: accounts[4]});
		const address7jC11x = accounts[4]
		const addressG5Ae9VM = accounts[4]
		const uintalB7fs2 = BigInt("1095")
//		await MisesLegacyPoolKwvBplo.getReward.call({from: accounts[4]});
//		const addressMQAjFBR = await MisesLegacyPoolKwvBplo.updateReward.call(address7jC11x, {from: accounts[2]});
//		const uint256Jvu8w2M = await MisesLegacyPoolKwvBplo.earned.call(addressG5Ae9VM, {from: accounts[2]});
//		const uint256fQQRspl = await MisesLegacyPoolKwvBplo.stake.call(uintalB7fs2, {from: accounts[3]});
//		const uint256Tajo8pD = await MisesLegacyPoolKwvBplo.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPoolKwvBplo.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressH4LmDuT = accounts[2]
		const addressl9r9xQ = accounts[1]
		const uintQxN7wNW = BigInt("848")
		const uintvZwzAf = BigInt("728")
		const MisesLegacyPooleN59lCY = await MisesLegacyPool.new(addressH4LmDuT, addressl9r9xQ, uintQxN7wNW, uintvZwzAf, {from: "0x0000000000000000000000000000000000000001"});
		const addressc0Rln81 = accounts[0]
		const addressWzogwjz = accounts[1]
		const addressTmjQC0O = await MisesLegacyPooleN59lCY.updateReward.call(addressc0Rln81, {from: accounts[3]});
		const uint256HEPKJG0 = await MisesLegacyPooleN59lCY.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressSxqioIn = await MisesLegacyPooleN59lCY.updateReward.call(addressWzogwjz, {from: accounts[3]});
	});

	it('test for MisesLegacyPool', async () => {
		const addresspiYg0Al = accounts[4]
		const addressdlPAIVo = accounts[2]
		const uintjChDpWQ = BigInt("176")
		const uintvXIU0TT = BigInt("768")
		const MisesLegacyPoolJQH1NWa = await MisesLegacyPool.new(addresspiYg0Al, addressdlPAIVo, uintjChDpWQ, uintvXIU0TT, {from: accounts[4]});
		const addressKvpIqU6 = accounts[4]
//		await MisesLegacyPoolJQH1NWa.getReward.call({from: accounts[3]});
//		const uint256OlQtqY4 = await MisesLegacyPoolJQH1NWa.earned.call(addressKvpIqU6, {from: accounts[3]});
//		await MisesLegacyPoolJQH1NWa.exit.call({from: accounts[1]});
//		await MisesLegacyPoolJQH1NWa.exit.call({from: accounts[2]});

		await expect(MisesLegacyPoolJQH1NWa.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressLHTl2oy = accounts[1]
		const addressqeborOj = accounts[2]
		const uintI372tPo = BigInt("1676")
		const uintPAsQagA = BigInt("452")
		const MisesLegacyPooly5bg5N0 = await MisesLegacyPool.new(addressLHTl2oy, addressqeborOj, uintI372tPo, uintPAsQagA, {from: accounts[4]});
		const uinthwGO0Qw = BigInt("1489")
		const uintbn1oL6R = BigInt("1597")
//		const uint256ox4nGhL = await MisesLegacyPooly5bg5N0.notifyRewardAmount.call(uinthwGO0Qw, {from: accounts[5]});
//		await MisesLegacyPooly5bg5N0.getReward.call({from: accounts[3]});
//		const uint256nVIQpy2 = await MisesLegacyPooly5bg5N0.stake.call(uintbn1oL6R, {from: accounts[3]});

		await expect(MisesLegacyPooly5bg5N0.notifyRewardAmount.call(uinthwGO0Qw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})