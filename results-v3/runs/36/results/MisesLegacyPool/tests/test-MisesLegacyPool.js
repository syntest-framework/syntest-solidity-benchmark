const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressDe70JPJ = accounts[0]
		const addressvX3XRl3 = accounts[3]
		const uintJy1ygwz = BigInt("1625")
		const uintuCdcQVx = BigInt("594")
		const MisesLegacyPooljnTKMOD = await MisesLegacyPool.new(addressDe70JPJ, addressvX3XRl3, uintJy1ygwz, uintuCdcQVx, {from: accounts[2]});
		const addressMe7XRsR = accounts[4]
		const uintU0ohuF = BigInt("294")
		const uint256TZ4Bkxr = await MisesLegacyPooljnTKMOD.earned.call(addressMe7XRsR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KkvJxl2 = await MisesLegacyPooljnTKMOD.notifyRewardAmount.call(uintU0ohuF, {from: accounts[2]});
		const uint256vcYO0Vy = await MisesLegacyPooljnTKMOD.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256TZ4Bkxr, BigInt("0"))
		await expect(MisesLegacyPooljnTKMOD.notifyRewardAmount.call(uintU0ohuF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressNN7Vvpz = accounts[0]
		const addressBLHsssp = accounts[5]
		const uintojCAohB = BigInt("651")
		const uintsGprpCM = BigInt("588")
		const MisesLegacyPoolgYGKTei = await MisesLegacyPool.new(addressNN7Vvpz, addressBLHsssp, uintojCAohB, uintsGprpCM, {from: accounts[2]});
		const uintOjHdKMz = BigInt("285")
		const uint256hNIdlMd = await MisesLegacyPoolgYGKTei.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256lPhwKfb = await MisesLegacyPoolgYGKTei.notifyRewardAmount.call(uintOjHdKMz, {from: accounts[1]});

		assert.equal(uint256hNIdlMd, BigInt("0"))
		await expect(MisesLegacyPoolgYGKTei.notifyRewardAmount.call(uintOjHdKMz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressaYFWTC = accounts[1]
		const addressf8NqpXH = accounts[3]
		const uintdzSDcy = BigInt("2014")
		const uintYA208Fj = BigInt("1818")
		const MisesLegacyPoolkFiCqII = await MisesLegacyPool.new(addressaYFWTC, addressf8NqpXH, uintdzSDcy, uintYA208Fj, {from: accounts[4]});
		const addressZLGdlIC = accounts[0]
		const uintFgwwcFe = BigInt("1014")
		const addresshFwYzZC = "0x0000000000000000000000000000000000000001"
		const uint256GkJ7HGC = await MisesLegacyPoolkFiCqII.rewardPerToken.call({from: accounts[3]});
		const uint256rpPMAV4 = await MisesLegacyPoolkFiCqII.rewardPerToken.call({from: accounts[5]});
		const uint256rWlJMQy = await MisesLegacyPoolkFiCqII.earned.call(addressZLGdlIC, {from: accounts[0]});
		const uint256LsTAAH = await MisesLegacyPoolkFiCqII.withdraw.call(uintFgwwcFe, {from: accounts[5]});
		const addressgTZXJA8 = await MisesLegacyPoolkFiCqII.updateReward.call(addresshFwYzZC, {from: accounts[2]});

		assert.equal(uint256GkJ7HGC, BigInt("0"))
		assert.equal(uint256rWlJMQy, BigInt("0"))
		assert.equal(uint256rpPMAV4, BigInt("0"))
		await expect(MisesLegacyPoolkFiCqII.withdraw.call(uintFgwwcFe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressy8JYRYx = accounts[5]
		const addressgQxjUMf = "0x0000000000000000000000000000000000000001"
		const uintmgRlnVG = BigInt("1351")
		const uintg92MzRp = BigInt("813")
		const MisesLegacyPoolJV6RgkH = await MisesLegacyPool.new(addressy8JYRYx, addressgQxjUMf, uintmgRlnVG, uintg92MzRp, {from: accounts[2]});
		const uintMP6Ujzr = BigInt("1656")
		const addressmOla4N1 = accounts[2]
		const uintgXulhv6 = BigInt("970")
		const uint256DIaMXb = await MisesLegacyPoolJV6RgkH.stake.call(uintMP6Ujzr, {from: accounts[3]});
		const addressnOnbTrc = await MisesLegacyPoolJV6RgkH.updateReward.call(addressmOla4N1, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolJV6RgkH.getReward.call({from: accounts[0]});
		const uint256visY8JK = await MisesLegacyPoolJV6RgkH.rewardPerToken.call({from: accounts[1]});
		const uint256BmhvD9W = await MisesLegacyPoolJV6RgkH.notifyRewardAmount.call(uintgXulhv6, {from: accounts[5]});

		await expect(MisesLegacyPoolJV6RgkH.stake.call(uintMP6Ujzr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressIzi820F = "0x0000000000000000000000000000000000000001"
		const addressIthRUUe = accounts[4]
		const uintbEWO4yF = BigInt("374")
		const uintV3poDyv = BigInt("1242")
		const MisesLegacyPool4Ckh65 = await MisesLegacyPool.new(addressIzi820F, addressIthRUUe, uintbEWO4yF, uintV3poDyv, {from: accounts[3]});
		const addressLzLG3vX = accounts[2]
		await MisesLegacyPool4Ckh65.exit.call({from: accounts[1]});
		const uint256dZEwtde = await MisesLegacyPool4Ckh65.earned.call(addressLzLG3vX, {from: accounts[4]});
		const uint256xFVW1lp = await MisesLegacyPool4Ckh65.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPool4Ckh65.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresswqUOOIc = "0x0000000000000000000000000000000000000001"
		const addressX9RRWg0 = accounts[4]
		const uintS7Noh64 = BigInt("888")
		const uintGP53XUV = BigInt("1911")
		const MisesLegacyPool4Zi8GP = await MisesLegacyPool.new(addresswqUOOIc, addressX9RRWg0, uintS7Noh64, uintGP53XUV, {from: accounts[3]});
		const uintDhhipby = BigInt("1372")
		const addressn3PLSRa = accounts[5]
		const uint256OSaRmyu = await MisesLegacyPool4Zi8GP.rewardPerToken.call({from: accounts[4]});
		await MisesLegacyPool4Zi8GP.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256m0gjCYF = await MisesLegacyPool4Zi8GP.notifyRewardAmount.call(uintDhhipby, {from: accounts[4]});
		const addressxyzVQnp = await MisesLegacyPool4Zi8GP.updateReward.call(addressn3PLSRa, {from: accounts[1]});
		const uint256f5XKco = await MisesLegacyPool4Zi8GP.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256OSaRmyu, BigInt("0"))
		await expect(MisesLegacyPool4Zi8GP.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresscNyJdEE = accounts[2]
		const addressHNEnDuH = accounts[3]
		const uintVX3ZSJG = BigInt("295")
		const uintX5NReMK = BigInt("1622")
		const MisesLegacyPoolXdYd4o2 = await MisesLegacyPool.new(addresscNyJdEE, addressHNEnDuH, uintVX3ZSJG, uintX5NReMK, {from: accounts[2]});
		const addressVgRzqgQ = accounts[2]
		const uintQvPy4mc = BigInt("906")
		const uinteU0fvW0 = BigInt("1092")
		await MisesLegacyPoolXdYd4o2.getReward.call({from: accounts[1]});
		const uint256r4WZriT = await MisesLegacyPoolXdYd4o2.earned.call(addressVgRzqgQ, {from: accounts[4]});
		const uint256tXfUZxP = await MisesLegacyPoolXdYd4o2.rewardPerToken.call({from: accounts[2]});
		const uint256UStnaMa = await MisesLegacyPoolXdYd4o2.stake.call(uintQvPy4mc, {from: accounts[2]});
		const uint256Jhc5ws0 = await MisesLegacyPoolXdYd4o2.notifyRewardAmount.call(uinteU0fvW0, {from: accounts[0]});

		await expect(MisesLegacyPoolXdYd4o2.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressTPPRoXd = accounts[5]
		const addressduLj31r = accounts[0]
		const uintS0i7IaJ = BigInt("554")
		const uintLGidWi = BigInt("88")
		const MisesLegacyPoolYSfxBuv = await MisesLegacyPool.new(addressTPPRoXd, addressduLj31r, uintS0i7IaJ, uintLGidWi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256asc9eu0 = await MisesLegacyPoolYSfxBuv.lastTimeRewardApplicable.call({from: accounts[1]});
		await MisesLegacyPoolYSfxBuv.getReward.call({from: accounts[4]});
		const uint256I6dSBqH = await MisesLegacyPoolYSfxBuv.rewardPerToken.call({from: accounts[0]});
	});
})