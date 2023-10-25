const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressW7y2xev = accounts[1]
		const addressVal5HcN = accounts[1]
		const uintDcTMXKg = BigInt("1766")
		const uintkbSryXw = BigInt("202")
		const MisesLegacyPooly2Iopz1 = await MisesLegacyPool.new(addressW7y2xev, addressVal5HcN, uintDcTMXKg, uintkbSryXw, {from: accounts[1]});
		const addresszmchgE = accounts[3]
		const uintLTOCv0H = BigInt("1753")
		const uintfiNtCJd = BigInt("1770")
		const addressa5YwcLl = await MisesLegacyPooly2Iopz1.updateReward.call(addresszmchgE, {from: accounts[2]});
		const uint256lH0DLAW = await MisesLegacyPooly2Iopz1.notifyRewardAmount.call(uintLTOCv0H, {from: accounts[4]});
		const uint256SkObjOb = await MisesLegacyPooly2Iopz1.withdraw.call(uintfiNtCJd, {from: accounts[2]});
		await MisesLegacyPooly2Iopz1.exit.call({from: accounts[3]});

		await expect(MisesLegacyPooly2Iopz1.updateReward.call(addresszmchgE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressmlsm7jJ = accounts[5]
		const addressmmrR96d = accounts[4]
		const uintDucfBJE = BigInt("1262")
		const uintBbXs6Ze = BigInt("1237")
		const MisesLegacyPoolb2b29ee = await MisesLegacyPool.new(addressmlsm7jJ, addressmmrR96d, uintDucfBJE, uintBbXs6Ze, {from: accounts[3]});
		const uinthiXd35 = BigInt("606")
		const uint256LaBaxhw = await MisesLegacyPoolb2b29ee.withdraw.call(uinthiXd35, {from: accounts[1]});
		await MisesLegacyPoolb2b29ee.getReward.call({from: accounts[3]});
		const uint256nfGt2mG = await MisesLegacyPoolb2b29ee.rewardPerToken.call({from: accounts[1]});

		await expect(MisesLegacyPoolb2b29ee.withdraw.call(uinthiXd35, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressWlaqXy = accounts[5]
		const addressxLzLYHn = accounts[0]
		const uintowBrYUx = BigInt("1370")
		const uintDoGyvWS = BigInt("234")
		const MisesLegacyPoolWnonxZY = await MisesLegacyPool.new(addressWlaqXy, addressxLzLYHn, uintowBrYUx, uintDoGyvWS, {from: accounts[4]});
		const uintmrm02oS = BigInt("1488")
		const uint256xOIVCTV = await MisesLegacyPoolWnonxZY.stake.call(uintmrm02oS, {from: accounts[0]});
		const uint256JcJZcYD = await MisesLegacyPoolWnonxZY.rewardPerToken.call({from: accounts[4]});
		const uint256fo2nWcZ = await MisesLegacyPoolWnonxZY.lastTimeRewardApplicable.call({from: accounts[1]});
		await MisesLegacyPoolWnonxZY.exit.call({from: accounts[0]});

		await expect(MisesLegacyPoolWnonxZY.stake.call(uintmrm02oS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUnRxjmO = "0x0000000000000000000000000000000000000001"
		const addressJb16TFV = accounts[5]
		const uintOlcZeXs = BigInt("1208")
		const uintqjMmxpF = BigInt("640")
		const MisesLegacyPoolpg7vihQ = await MisesLegacyPool.new(addressUnRxjmO, addressJb16TFV, uintOlcZeXs, uintqjMmxpF, {from: accounts[2]});
		const uintNAGNAGz = BigInt("1070")
		const uintD8wVJfq = BigInt("74")
		const addressTDt6Mt0 = accounts[3]
		await MisesLegacyPoolpg7vihQ.exit.call({from: accounts[1]});
		const uint256JkeQQgD = await MisesLegacyPoolpg7vihQ.notifyRewardAmount.call(uintNAGNAGz, {from: accounts[2]});
		const uint256T2ihdUy = await MisesLegacyPoolpg7vihQ.rewardPerToken.call({from: accounts[3]});
		const uint256NwPj16P = await MisesLegacyPoolpg7vihQ.withdraw.call(uintD8wVJfq, {from: accounts[4]});
		const addressdCCd0HR = await MisesLegacyPoolpg7vihQ.updateReward.call(addressTDt6Mt0, {from: accounts[4]});

		await expect(MisesLegacyPoolpg7vihQ.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressRM2E6bL = accounts[0]
		const addresspzNIOpJ = accounts[5]
		const uintXu4Y97s = BigInt("1606")
		const uintCOa5ggw = BigInt("1024")
		const MisesLegacyPoolzJzdpTy = await MisesLegacyPool.new(addressRM2E6bL, addresspzNIOpJ, uintXu4Y97s, uintCOa5ggw, {from: accounts[4]});
		const uintKZOeLNk = BigInt("1678")
		const uint256WDO1urY = await MisesLegacyPoolzJzdpTy.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint25677NBm8 = await MisesLegacyPoolzJzdpTy.notifyRewardAmount.call(uintKZOeLNk, {from: accounts[4]});
		const uint256JzB8Ypl = await MisesLegacyPoolzJzdpTy.lastTimeRewardApplicable.call({from: accounts[3]});
		await MisesLegacyPoolzJzdpTy.checkStart.call({from: accounts[2]});
		const uint256oa2QYBQ = await MisesLegacyPoolzJzdpTy.rewardPerToken.call({from: accounts[3]});
		const uint256Rfxh7RG = await MisesLegacyPoolzJzdpTy.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256WDO1urY, BigInt("0"))
		await expect(MisesLegacyPoolzJzdpTy.notifyRewardAmount.call(uintKZOeLNk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressmxjy07S = accounts[1]
		const addressZSsDTv4 = accounts[2]
		const uintx06vbwO = BigInt("968")
		const uintT6D29wN = BigInt("1902")
		const MisesLegacyPoolRZBmNM7 = await MisesLegacyPool.new(addressmxjy07S, addressZSsDTv4, uintx06vbwO, uintT6D29wN, {from: "0x0000000000000000000000000000000000000001"});
		const uintiztREg = BigInt("2029")
		const uintVTmvdxd = BigInt("1643")
		const uint2568aio3H = await MisesLegacyPoolRZBmNM7.stake.call(uintiztREg, {from: accounts[5]});
		const uint256ba4u4Ch = await MisesLegacyPoolRZBmNM7.stake.call(uintVTmvdxd, {from: accounts[1]});
	});

	it('test for MisesLegacyPool', async () => {
		const addresszxeg6JD = "0x0000000000000000000000000000000000000001"
		const address2iilkC = "0x0000000000000000000000000000000000000001"
		const uintvOYFOD = BigInt("843")
		const uintFGtuscX = BigInt("214")
		const MisesLegacyPoolrsi332e = await MisesLegacyPool.new(addresszxeg6JD, address2iilkC, uintvOYFOD, uintFGtuscX, {from: accounts[3]});
		const addressbJz4hjU = accounts[4]
		const addressvgNeGQA = accounts[0]
		const uint256jmCOpa = await MisesLegacyPoolrsi332e.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256vOWN9QM = await MisesLegacyPoolrsi332e.lastTimeRewardApplicable.call({from: accounts[3]});
		await MisesLegacyPoolrsi332e.getReward.call({from: accounts[3]});
		const uint256SAspRe3 = await MisesLegacyPoolrsi332e.earned.call(addressbJz4hjU, {from: accounts[3]});
		await MisesLegacyPoolrsi332e.exit.call({from: accounts[0]});
		const addressIWqDKuk = await MisesLegacyPoolrsi332e.updateReward.call(addressvgNeGQA, {from: accounts[5]});

		assert.equal(uint256jmCOpa, BigInt("0"))
		assert.equal(uint256vOWN9QM, BigInt("0"))
		await expect(MisesLegacyPoolrsi332e.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})