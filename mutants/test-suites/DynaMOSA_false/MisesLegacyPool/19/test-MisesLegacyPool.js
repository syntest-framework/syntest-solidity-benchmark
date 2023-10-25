const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresswCSffLX = accounts[3]
		const addressvFpEbuY = accounts[0]
		const uintPn0QJ3V = BigInt("78")
		const uintLHtzamy = BigInt("33")
		const MisesLegacyPoolyGQGMv = await MisesLegacyPool.new(addresswCSffLX, addressvFpEbuY, uintPn0QJ3V, uintLHtzamy, {from: accounts[3]});
		const addresswKVoFps = accounts[2]
		const addressbQTJEIe = accounts[0]
		const uint256AHkDTJ = await MisesLegacyPoolyGQGMv.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256FFeRK17 = await MisesLegacyPoolyGQGMv.earned.call(addresswKVoFps, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolyGQGMv.getReward.call({from: accounts[2]});
//		const addressiUrBPV = await MisesLegacyPoolyGQGMv.updateReward.call(addressbQTJEIe, {from: accounts[2]});

		assert.equal(uint256AHkDTJ, BigInt("0"))
		assert.equal(uint256FFeRK17, BigInt("0"))
		await expect(MisesLegacyPoolyGQGMv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressilIYQPP = accounts[0]
		const addressvszYoAb = accounts[3]
		const uintuuao15l = BigInt("81")
		const uintNf6DoSP = BigInt("883")
		const MisesLegacyPoolViMC9W = await MisesLegacyPool.new(addressilIYQPP, addressvszYoAb, uintuuao15l, uintNf6DoSP, {from: accounts[4]});
		const uintr09orde = BigInt("1691")
		const uint256z7s20LA = await MisesLegacyPoolViMC9W.lastTimeRewardApplicable.call({from: accounts[0]});
//		await MisesLegacyPoolViMC9W.exit.call({from: accounts[5]});
//		const uint256Kkvtg19 = await MisesLegacyPoolViMC9W.stake.call(uintr09orde, {from: accounts[3]});
//		await MisesLegacyPoolViMC9W.getReward.call({from: accounts[5]});

		assert.equal(uint256z7s20LA, BigInt("0"))
		await expect(MisesLegacyPoolViMC9W.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressQlx2MC = accounts[2]
		const addressF88hh41 = accounts[0]
		const uintqEnLBbl = BigInt("491")
		const uintCCbB2EJ = BigInt("629")
		const MisesLegacyPoolJv6YYvb = await MisesLegacyPool.new(addressQlx2MC, addressF88hh41, uintqEnLBbl, uintCCbB2EJ, {from: accounts[1]});
		const uintgmlS16S = BigInt("1356")
		const addressXJB1Yl = accounts[1]
		const address9z1WsT = accounts[2]
//		const uint256bch08l3 = await MisesLegacyPoolJv6YYvb.withdraw.call(uintgmlS16S, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshHWbBMm = await MisesLegacyPoolJv6YYvb.updateReward.call(addressXJB1Yl, {from: accounts[0]});
//		const addressNDAhxk = await MisesLegacyPoolJv6YYvb.updateReward.call(address9z1WsT, {from: accounts[4]});

		await expect(MisesLegacyPoolJv6YYvb.withdraw.call(uintgmlS16S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressrtt7BsC = accounts[0]
		const addressOaB12jz = accounts[2]
		const uintzu92hK0 = BigInt("732")
		const uintltBCLKN = BigInt("1196")
		const MisesLegacyPoolLdvdZ7z = await MisesLegacyPool.new(addressrtt7BsC, addressOaB12jz, uintzu92hK0, uintltBCLKN, {from: accounts[3]});
		const uintBKHm46H = BigInt("1018")
		const addressnTAGu4r = accounts[1]
		const uint256GazMv4w = await MisesLegacyPoolLdvdZ7z.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256YnhA64h = await MisesLegacyPoolLdvdZ7z.stake.call(uintBKHm46H, {from: accounts[1]});
//		const uint256qRWvSXZ = await MisesLegacyPoolLdvdZ7z.lastTimeRewardApplicable.call({from: accounts[0]});
//		await MisesLegacyPoolLdvdZ7z.exit.call({from: accounts[0]});
//		const addressb4YE9dr = await MisesLegacyPoolLdvdZ7z.updateReward.call(addressnTAGu4r, {from: accounts[4]});

		assert.equal(uint256GazMv4w, BigInt("0"))
		await expect(MisesLegacyPoolLdvdZ7z.stake.call(uintBKHm46H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjM1mWB9 = accounts[3]
		const addressuMbFW11 = accounts[4]
		const uintjYKNCPr = BigInt("596")
		const uintG1wPxeM = BigInt("1858")
		const MisesLegacyPoolrQ86NLa = await MisesLegacyPool.new(addressjM1mWB9, addressuMbFW11, uintjYKNCPr, uintG1wPxeM, {from: accounts[2]});
		const uintVyFc3ID = BigInt("1902")
		const uintEaqCKun = BigInt("981")
		const uint256OIul06T = await MisesLegacyPoolrQ86NLa.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256j1R7BAO = await MisesLegacyPoolrQ86NLa.notifyRewardAmount.call(uintVyFc3ID, {from: accounts[5]});
//		const uint256vz3njb = await MisesLegacyPoolrQ86NLa.rewardPerToken.call({from: accounts[1]});
//		const uint2564CNPDF = await MisesLegacyPoolrQ86NLa.withdraw.call(uintEaqCKun, {from: accounts[2]});

		assert.equal(uint256OIul06T, BigInt("0"))
		await expect(MisesLegacyPoolrQ86NLa.notifyRewardAmount.call(uintVyFc3ID, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressGIlRxXe = accounts[0]
		const addressPR6HgcN = accounts[4]
		const uintNxmWOJr = BigInt("1400")
		const uintBd8HqzN = BigInt("975")
		const MisesLegacyPoolFJoyykY = await MisesLegacyPool.new(addressGIlRxXe, addressPR6HgcN, uintNxmWOJr, uintBd8HqzN, {from: "0x0000000000000000000000000000000000000001"});
		const addressnAH7iqi = accounts[1]
		const uintoXU4zZ7 = BigInt("1864")
		const addressP4Sf7Xd = accounts[1]
		const uint256nJzAQjR = await MisesLegacyPoolFJoyykY.earned.call(addressnAH7iqi, {from: accounts[4]});
		const uint256KHH3Z4m = await MisesLegacyPoolFJoyykY.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256R81K2hf = await MisesLegacyPoolFJoyykY.withdraw.call(uintoXU4zZ7, {from: accounts[2]});
		const uint256oj8cNC2 = await MisesLegacyPoolFJoyykY.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressbBqCHpS = await MisesLegacyPoolFJoyykY.updateReward.call(addressP4Sf7Xd, {from: accounts[1]});
		const uint256tU8gJ6 = await MisesLegacyPoolFJoyykY.lastTimeRewardApplicable.call({from: accounts[2]});
	});
})