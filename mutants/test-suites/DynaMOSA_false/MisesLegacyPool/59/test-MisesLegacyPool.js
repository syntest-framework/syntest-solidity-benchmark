const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressQkndxQ7 = accounts[0]
		const addressbFZkJhG = accounts[2]
		const uintRBUX4Q = BigInt("1411")
		const uintjR5fM1P = BigInt("690")
		const MisesLegacyPoolw0RsWjc = await MisesLegacyPool.new(addressQkndxQ7, addressbFZkJhG, uintRBUX4Q, uintjR5fM1P, {from: "0x0000000000000000000000000000000000000001"});
		const addressIrusGx = accounts[2]
		await MisesLegacyPoolw0RsWjc.exit.call({from: accounts[4]});
		await MisesLegacyPoolw0RsWjc.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UvT9WRm = await MisesLegacyPoolw0RsWjc.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressyqu53Ew = await MisesLegacyPoolw0RsWjc.updateReward.call(addressIrusGx, {from: accounts[1]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressepItIWG = "0x0000000000000000000000000000000000000001"
		const addressN2XTCxF = accounts[4]
		const uintjBJiqxK = BigInt("1443")
		const uintE6VJoJ = BigInt("877")
		const MisesLegacyPoolrYDKyWy = await MisesLegacyPool.new(addressepItIWG, addressN2XTCxF, uintjBJiqxK, uintE6VJoJ, {from: accounts[3]});
		const addressLGbeUqC = accounts[1]
		const addresso3OpqIy = accounts[1]
//		await MisesLegacyPoolrYDKyWy.exit.call({from: accounts[5]});
//		const uint256C5j3R2r = await MisesLegacyPoolrYDKyWy.earned.call(addressLGbeUqC, {from: accounts[3]});
//		const uint256NskonxT = await MisesLegacyPoolrYDKyWy.earned.call(addresso3OpqIy, {from: accounts[1]});

		await expect(MisesLegacyPoolrYDKyWy.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressGjx184g = accounts[1]
		const addressS06m0ma = "0x0000000000000000000000000000000000000001"
		const uintfIdwgq7 = BigInt("1345")
		const uintE8hKAgT = BigInt("1915")
		const MisesLegacyPoolhwIrPL = await MisesLegacyPool.new(addressGjx184g, addressS06m0ma, uintfIdwgq7, uintE8hKAgT, {from: accounts[1]});
		const uintH4zX3X = BigInt("352")
		const addresssxfqvGL = accounts[2]
//		const uint256Ad42jri = await MisesLegacyPoolhwIrPL.withdraw.call(uintH4zX3X, {from: accounts[4]});
//		const addresssrTe4C = await MisesLegacyPoolhwIrPL.updateReward.call(addresssxfqvGL, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolhwIrPL.exit.call({from: accounts[1]});
//		await MisesLegacyPoolhwIrPL.exit.call({from: accounts[3]});

		await expect(MisesLegacyPoolhwIrPL.withdraw.call(uintH4zX3X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressA2Ua5DI = "0x0000000000000000000000000000000000000001"
		const addressXzARCvz = accounts[2]
		const uintl6I0OCX = BigInt("1872")
		const uintcNVwIrs = BigInt("1402")
		const MisesLegacyPoolUwoZSrL = await MisesLegacyPool.new(addressA2Ua5DI, addressXzARCvz, uintl6I0OCX, uintcNVwIrs, {from: accounts[0]});
		const addressgQfX79T = accounts[3]
		const uint256dgHqNe3 = await MisesLegacyPoolUwoZSrL.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressqr0csgN = await MisesLegacyPoolUwoZSrL.updateReward.call(addressgQfX79T, {from: accounts[4]});
//		const uint256NBQUYx = await MisesLegacyPoolUwoZSrL.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256dgHqNe3, BigInt("0"))
		await expect(MisesLegacyPoolUwoZSrL.updateReward.call(addressgQfX79T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressdPajVUl = accounts[3]
		const addressbAMIy7N = accounts[4]
		const uintgqgeaCJ = BigInt("457")
		const uintSRWesVL = BigInt("1043")
		const MisesLegacyPoolPVJcqll = await MisesLegacyPool.new(addressdPajVUl, addressbAMIy7N, uintgqgeaCJ, uintSRWesVL, {from: accounts[2]});
		const uintZoF6PGk = BigInt("582")
		const uintzW8KKBf = BigInt("995")
		const uintKgtAaSl = BigInt("606")
//		const uint256sr1ckD = await MisesLegacyPoolPVJcqll.stake.call(uintZoF6PGk, {from: accounts[2]});
//		const uint256WSK2ulQ = await MisesLegacyPoolPVJcqll.notifyRewardAmount.call(uintzW8KKBf, {from: accounts[5]});
//		const uint256OJiREN = await MisesLegacyPoolPVJcqll.rewardPerToken.call({from: accounts[5]});
//		const uint256gxScQxq = await MisesLegacyPoolPVJcqll.stake.call(uintKgtAaSl, {from: accounts[1]});

		await expect(MisesLegacyPoolPVJcqll.stake.call(uintZoF6PGk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressfvgfJkE = accounts[2]
		const addressBnttkLr = accounts[0]
		const uintOzzMZJj = BigInt("1126")
		const uintfA7Llpd = BigInt("413")
		const MisesLegacyPooloieUZV3 = await MisesLegacyPool.new(addressfvgfJkE, addressBnttkLr, uintOzzMZJj, uintfA7Llpd, {from: accounts[3]});
		const addressKXCAf9l = accounts[4]
		const uint256wNUPDMo = await MisesLegacyPooloieUZV3.earned.call(addressKXCAf9l, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPooloieUZV3.getReward.call({from: accounts[1]});
//		await MisesLegacyPooloieUZV3.exit.call({from: accounts[2]});
		await MisesLegacyPooloieUZV3.getReward.call({from: accounts[1]});
//		const uint256CoDXqJU = await MisesLegacyPooloieUZV3.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256wNUPDMo, BigInt("0"))
		await expect(MisesLegacyPooloieUZV3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUsL1xVz = accounts[1]
		const address5jEGC3 = accounts[0]
		const uintmyR2nPm = BigInt("278")
		const uint721K4U = BigInt("48")
		const MisesLegacyPoolHjgISD = await MisesLegacyPool.new(addressUsL1xVz, address5jEGC3, uintmyR2nPm, uint721K4U, {from: accounts[3]});
		const uintfYF9XSs = BigInt("1888")
//		await MisesLegacyPoolHjgISD.getReward.call({from: accounts[0]});
//		const uint256Y9qTopk = await MisesLegacyPoolHjgISD.notifyRewardAmount.call(uintfYF9XSs, {from: accounts[5]});

		await expect(MisesLegacyPoolHjgISD.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})