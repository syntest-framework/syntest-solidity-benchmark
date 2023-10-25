const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressFiS82af = accounts[2]
		const addressz4Gac3d = accounts[2]
		const uintJidRY7z = BigInt("944")
		const uintdWG93TI = BigInt("256")
		const MisesLegacyPoolSllEV3H = await MisesLegacyPool.new(addressFiS82af, addressz4Gac3d, uintJidRY7z, uintdWG93TI, {from: accounts[1]});
		const addressCz83v7S = accounts[0]
		const uint256CFplDws = await MisesLegacyPoolSllEV3H.earned.call(addressCz83v7S, {from: accounts[2]});
//		await MisesLegacyPoolSllEV3H.checkStart.call({from: accounts[5]});

		assert.equal(uint256CFplDws, BigInt("0"))
		await expect(MisesLegacyPoolSllEV3H.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressLAPPzm0 = accounts[3]
		const addressJbiCxcN = accounts[5]
		const uintSQHBOMw = BigInt("1153")
		const uintn7pAD6 = BigInt("437")
		const MisesLegacyPoolZ0tdZLb = await MisesLegacyPool.new(addressLAPPzm0, addressJbiCxcN, uintSQHBOMw, uintn7pAD6, {from: accounts[3]});
		const uintVzJKnod = BigInt("357")
//		const uint256YBYKu3Q = await MisesLegacyPoolZ0tdZLb.stake.call(uintVzJKnod, {from: accounts[1]});
//		const uint256djGxBH9 = await MisesLegacyPoolZ0tdZLb.lastTimeRewardApplicable.call({from: accounts[5]});
//		await MisesLegacyPoolZ0tdZLb.getReward.call({from: accounts[0]});

		await expect(MisesLegacyPoolZ0tdZLb.stake.call(uintVzJKnod, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressh9GDfR8 = accounts[2]
		const addressRa4paLf = accounts[3]
		const uintEhNbQwc = BigInt("658")
		const uintougOe9j = BigInt("1840")
		const MisesLegacyPooluUlXifc = await MisesLegacyPool.new(addressh9GDfR8, addressRa4paLf, uintEhNbQwc, uintougOe9j, {from: accounts[0]});
		const uintpRvuuZM = BigInt("1898")
//		await MisesLegacyPooluUlXifc.getReward.call({from: accounts[0]});
//		const uint256uv4Iufa = await MisesLegacyPooluUlXifc.rewardPerToken.call({from: accounts[5]});
//		await MisesLegacyPooluUlXifc.checkStart.call({from: accounts[5]});
//		const uint256MammDu9 = await MisesLegacyPooluUlXifc.withdraw.call(uintpRvuuZM, {from: accounts[0]});

		await expect(MisesLegacyPooluUlXifc.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresslA7b3JS = accounts[1]
		const addressPI9miop = accounts[3]
		const uintMhXomxd = BigInt("1751")
		const uints8XtBUO = BigInt("1247")
		const MisesLegacyPoolVAwZUd6 = await MisesLegacyPool.new(addresslA7b3JS, addressPI9miop, uintMhXomxd, uints8XtBUO, {from: accounts[0]});
		const uintdAXrW0C = BigInt("728")
		const addressCWUog5 = accounts[0]
		const uint256oqfcEkL = await MisesLegacyPoolVAwZUd6.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256Edh7mDe = await MisesLegacyPoolVAwZUd6.withdraw.call(uintdAXrW0C, {from: accounts[4]});
//		const address8PcZWh = await MisesLegacyPoolVAwZUd6.updateReward.call(addressCWUog5, {from: accounts[5]});

		assert.equal(uint256oqfcEkL, BigInt("0"))
		await expect(MisesLegacyPoolVAwZUd6.withdraw.call(uintdAXrW0C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressBdhzlDK = accounts[0]
		const addressqNgILeg = accounts[3]
		const uintXQVgbqM = BigInt("1100")
		const uintLSzTGH = BigInt("1564")
		const MisesLegacyPoolKaZwIA = await MisesLegacyPool.new(addressBdhzlDK, addressqNgILeg, uintXQVgbqM, uintLSzTGH, {from: accounts[4]});
		const uinti31tAXR = BigInt("1186")
//		await MisesLegacyPoolKaZwIA.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zlqfBWW = await MisesLegacyPoolKaZwIA.rewardPerToken.call({from: accounts[5]});
//		await MisesLegacyPoolKaZwIA.checkStart.call({from: accounts[0]});
//		const uint256saKRx6Q = await MisesLegacyPoolKaZwIA.stake.call(uinti31tAXR, {from: accounts[4]});

		await expect(MisesLegacyPoolKaZwIA.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresspVKp6Fj = accounts[2]
		const addressJVya49o = accounts[2]
		const uintZ54nG8D = BigInt("944")
		const uintoiNbPWP = BigInt("256")
		const MisesLegacyPoolSllEV3H = await MisesLegacyPool.new(addresspVKp6Fj, addressJVya49o, uintZ54nG8D, uintoiNbPWP, {from: accounts[1]});
		const uintPCtKTfJ = BigInt("1108")
		const addressmxVQJr = accounts[0]
//		const uint256YGK3Gp0 = await MisesLegacyPoolSllEV3H.notifyRewardAmount.call(uintPCtKTfJ, {from: accounts[4]});
//		const uint256CFplDws = await MisesLegacyPoolSllEV3H.earned.call(addressmxVQJr, {from: accounts[2]});
//		await MisesLegacyPoolSllEV3H.checkStart.call({from: accounts[5]});

		await expect(MisesLegacyPoolSllEV3H.notifyRewardAmount.call(uintPCtKTfJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresslEoDuPx = accounts[2]
		const addressHWDlK9I = accounts[0]
		const uintNbhyUBU = BigInt("1950")
		const uintz0K8kjs = BigInt("45")
		const MisesLegacyPoolh2IMUQL = await MisesLegacyPool.new(addresslEoDuPx, addressHWDlK9I, uintNbhyUBU, uintz0K8kjs, {from: "0x0000000000000000000000000000000000000001"});
		const uintdlaQKqQ = BigInt("603")
		const uintXw0olG = BigInt("1311")
		const uint256WlSSqo = await MisesLegacyPoolh2IMUQL.rewardPerToken.call({from: accounts[1]});
		await MisesLegacyPoolh2IMUQL.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QbaaiNa = await MisesLegacyPoolh2IMUQL.stake.call(uintdlaQKqQ, {from: accounts[2]});
		const uint256LbBffsb = await MisesLegacyPoolh2IMUQL.notifyRewardAmount.call(uintXw0olG, {from: accounts[4]});
	});
})