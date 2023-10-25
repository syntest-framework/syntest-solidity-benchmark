const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressKoWXTxE = accounts[3]
		const addressviDpbt = accounts[0]
		const uintwznUCX1 = BigInt("1982")
		const uintzypXdzq = BigInt("664")
		const MisesLegacyPoolf1s1hch = await MisesLegacyPool.new(addressKoWXTxE, addressviDpbt, uintwznUCX1, uintzypXdzq, {from: "0x0000000000000000000000000000000000000001"});
		const uinteqvzkS = BigInt("2046")
		await MisesLegacyPoolf1s1hch.exit.call({from: accounts[3]});
		const uint256eY5j4hb = await MisesLegacyPoolf1s1hch.withdraw.call(uinteqvzkS, {from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressMlyMUs5 = accounts[2]
		const addressLF5bnxI = accounts[2]
		const uintEb0TLpl = BigInt("1247")
		const uintceFOgJf = BigInt("1032")
		const MisesLegacyPoolgY44VH4 = await MisesLegacyPool.new(addressMlyMUs5, addressLF5bnxI, uintEb0TLpl, uintceFOgJf, {from: accounts[2]});
		const uintfPSdmzI = BigInt("1675")
		const addressEQQYKL = accounts[4]
		const addressebe85r0 = accounts[3]
//		const uint256bEdleK = await MisesLegacyPoolgY44VH4.stake.call(uintfPSdmzI, {from: accounts[2]});
//		const uint256j7HahtS = await MisesLegacyPoolgY44VH4.earned.call(addressEQQYKL, {from: accounts[5]});
//		const uint256HAmDUWo = await MisesLegacyPoolgY44VH4.earned.call(addressebe85r0, {from: accounts[5]});
//		const uint256tx17eC3 = await MisesLegacyPoolgY44VH4.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(MisesLegacyPoolgY44VH4.stake.call(uintfPSdmzI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressJLxMaY0 = accounts[4]
		const addressAPRcEv3 = accounts[0]
		const uintOxo9aJQ = BigInt("1134")
		const uintS0ODN1g = BigInt("250")
		const MisesLegacyPooljvEBgA = await MisesLegacyPool.new(addressJLxMaY0, addressAPRcEv3, uintOxo9aJQ, uintS0ODN1g, {from: accounts[0]});
		const uintmgb6Mzu = BigInt("511")
		const addressIZyJFUw = accounts[5]
		const addressKoRgqmN = accounts[3]
//		const uint256QYj1WMx = await MisesLegacyPooljvEBgA.withdraw.call(uintmgb6Mzu, {from: accounts[3]});
//		const uint256nUcMP4V = await MisesLegacyPooljvEBgA.earned.call(addressIZyJFUw, {from: accounts[5]});
//		const uint256nriVrvX = await MisesLegacyPooljvEBgA.rewardPerToken.call({from: accounts[3]});
//		await MisesLegacyPooljvEBgA.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressYZbzF9e = await MisesLegacyPooljvEBgA.updateReward.call(addressKoRgqmN, {from: accounts[1]});

		await expect(MisesLegacyPooljvEBgA.withdraw.call(uintmgb6Mzu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressBQhLHX = accounts[3]
		const addressrSqCZ3i = accounts[2]
		const uintzdabutH = BigInt("560")
		const uintaiS1im6 = BigInt("1492")
		const MisesLegacyPoolcJsPjIf = await MisesLegacyPool.new(addressBQhLHX, addressrSqCZ3i, uintzdabutH, uintaiS1im6, {from: accounts[1]});
		const uintxlsIBDS = BigInt("1817")
		const addressqHce8Ol = accounts[2]
//		await MisesLegacyPoolcJsPjIf.checkStart.call({from: accounts[1]});
//		await MisesLegacyPoolcJsPjIf.exit.call({from: accounts[1]});
//		const uint256UjqoRjt = await MisesLegacyPoolcJsPjIf.stake.call(uintxlsIBDS, {from: accounts[0]});
//		const addressOZYXsGd = await MisesLegacyPoolcJsPjIf.updateReward.call(addressqHce8Ol, {from: accounts[4]});
//		const uint256LJZ8Y8q = await MisesLegacyPoolcJsPjIf.rewardPerToken.call({from: accounts[0]});

		await expect(MisesLegacyPoolcJsPjIf.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjoEVPny = accounts[0]
		const addressuCfSdZE = accounts[1]
		const uintS30kA3 = BigInt("771")
		const uintwtUDlW = BigInt("1951")
		const MisesLegacyPoolorSW1k = await MisesLegacyPool.new(addressjoEVPny, addressuCfSdZE, uintS30kA3, uintwtUDlW, {from: accounts[1]});
		const uintyQ1Jgui = BigInt("771")
		const addressZHR1tdi = accounts[2]
		const uint256k8kDTOw = await MisesLegacyPoolorSW1k.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256A6OJsrE = await MisesLegacyPoolorSW1k.notifyRewardAmount.call(uintyQ1Jgui, {from: accounts[2]});
//		await MisesLegacyPoolorSW1k.getReward.call({from: accounts[0]});
//		const addressHuEgNb9 = await MisesLegacyPoolorSW1k.updateReward.call(addressZHR1tdi, {from: accounts[2]});

		assert.equal(uint256k8kDTOw, BigInt("0"))
		await expect(MisesLegacyPoolorSW1k.notifyRewardAmount.call(uintyQ1Jgui, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressB78n2Ed = accounts[3]
		const addressx5id2dS = accounts[5]
		const uinttU9CsXh = BigInt("1745")
		const uintaY0GB2 = BigInt("1725")
		const MisesLegacyPoolYsF9lR3 = await MisesLegacyPool.new(addressB78n2Ed, addressx5id2dS, uinttU9CsXh, uintaY0GB2, {from: accounts[2]});
		const uint256oBVkOcn = await MisesLegacyPoolYsF9lR3.rewardPerToken.call({from: accounts[1]});
//		await MisesLegacyPoolYsF9lR3.getReward.call({from: accounts[3]});
//		await MisesLegacyPoolYsF9lR3.getReward.call({from: accounts[5]});

		assert.equal(uint256oBVkOcn, BigInt("0"))
		await expect(MisesLegacyPoolYsF9lR3.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressPpMVGfJ = accounts[3]
		const addressx8NTytE = accounts[5]
		const uintGoEKWGG = BigInt("1745")
		const uintkOtL1Dk = BigInt("1725")
		const MisesLegacyPoolYsF9lR3 = await MisesLegacyPool.new(addressPpMVGfJ, addressx8NTytE, uintGoEKWGG, uintkOtL1Dk, {from: accounts[2]});
		const addressMaqkvPo = accounts[5]
		const uint256oBVkOcn = await MisesLegacyPoolYsF9lR3.rewardPerToken.call({from: accounts[1]});
//		await MisesLegacyPoolYsF9lR3.getReward.call({from: accounts[3]});
//		await MisesLegacyPoolYsF9lR3.getReward.call({from: accounts[5]});
//		await MisesLegacyPoolYsF9lR3.exit.call({from: accounts[2]});
//		const addressEoJbYgP = await MisesLegacyPoolYsF9lR3.updateReward.call(addressMaqkvPo, {from: accounts[3]});

		assert.equal(uint256oBVkOcn, BigInt("0"))
		await expect(MisesLegacyPoolYsF9lR3.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})