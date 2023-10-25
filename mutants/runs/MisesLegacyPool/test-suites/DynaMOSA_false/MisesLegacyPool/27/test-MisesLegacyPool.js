const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresslMXbyQv = accounts[0]
		const addresse6Gm8e = accounts[0]
		const uintgNe2OI0 = BigInt("1569")
		const uintZjztoHS = BigInt("1253")
		const MisesLegacyPoolcB33pH9 = await MisesLegacyPool.new(addresslMXbyQv, addresse6Gm8e, uintgNe2OI0, uintZjztoHS, {from: accounts[4]});
		const uintrXD5As = BigInt("966")
		const uintRiCoe6W = BigInt("1373")
		const addressmrgGUo = accounts[3]
		const uint256cMvaZoI = await MisesLegacyPoolcB33pH9.stake.call(uintrXD5As, {from: accounts[4]});
		await MisesLegacyPoolcB33pH9.getReward.call({from: accounts[3]});
		const uint256iU0ZkX8 = await MisesLegacyPoolcB33pH9.withdraw.call(uintRiCoe6W, {from: accounts[2]});
		const uint256J78bMwz = await MisesLegacyPoolcB33pH9.earned.call(addressmrgGUo, {from: accounts[1]});

		await expect(MisesLegacyPoolcB33pH9.stake.call(uintrXD5As, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressFuL6zQ9 = accounts[4]
		const addressUr7PPDD = accounts[3]
		const uintUw2Vum = BigInt("1445")
		const uintVmlc2fp = BigInt("1395")
		const MisesLegacyPooli5ZUGX4 = await MisesLegacyPool.new(addressFuL6zQ9, addressUr7PPDD, uintUw2Vum, uintVmlc2fp, {from: accounts[3]});
		const uintgrKzNkI = BigInt("883")
		await MisesLegacyPooli5ZUGX4.checkStart.call({from: accounts[2]});
		await MisesLegacyPooli5ZUGX4.getReward.call({from: accounts[0]});
		await MisesLegacyPooli5ZUGX4.checkStart.call({from: accounts[4]});
		const uint256Ua4d38Y = await MisesLegacyPooli5ZUGX4.stake.call(uintgrKzNkI, {from: accounts[3]});
		await MisesLegacyPooli5ZUGX4.getReward.call({from: accounts[4]});

		await expect(MisesLegacyPooli5ZUGX4.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressY4rvKFD = accounts[1]
		const addressdiElcfz = accounts[3]
		const uinteq5Nrsv = BigInt("1866")
		const uintMgTBOMm = BigInt("1096")
		const MisesLegacyPoolZY2dnQF = await MisesLegacyPool.new(addressY4rvKFD, addressdiElcfz, uinteq5Nrsv, uintMgTBOMm, {from: accounts[2]});
		const uintpeDbsHr = BigInt("761")
		const uint256PXShRb = await MisesLegacyPoolZY2dnQF.withdraw.call(uintpeDbsHr, {from: accounts[0]});
		await MisesLegacyPoolZY2dnQF.getReward.call({from: accounts[3]});

		await expect(MisesLegacyPoolZY2dnQF.withdraw.call(uintpeDbsHr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresstNsiZTQ = accounts[4]
		const addresso5wdb8A = accounts[1]
		const uintSG2VU0X = BigInt("1292")
		const uintUkDvNEb = BigInt("710")
		const MisesLegacyPoolO4mGA9l = await MisesLegacyPool.new(addresstNsiZTQ, addresso5wdb8A, uintSG2VU0X, uintUkDvNEb, {from: accounts[3]});
		const uint0lGDOr = BigInt("1045")
		const uintereRyXW = BigInt("536")
		await MisesLegacyPoolO4mGA9l.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DfbGL4S = await MisesLegacyPoolO4mGA9l.stake.call(uint0lGDOr, {from: accounts[3]});
		const uint256SJ99uBy = await MisesLegacyPoolO4mGA9l.withdraw.call(uintereRyXW, {from: accounts[3]});

		await expect(MisesLegacyPoolO4mGA9l.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressF7JJP8l = "0x0000000000000000000000000000000000000001"
		const addressbRWaWe6 = accounts[0]
		const uintgCzW17P = BigInt("773")
		const uintBeSNdE = BigInt("2024")
		const MisesLegacyPoolrmPkx4C = await MisesLegacyPool.new(addressF7JJP8l, addressbRWaWe6, uintgCzW17P, uintBeSNdE, {from: accounts[2]});
		await MisesLegacyPoolrmPkx4C.getReward.call({from: accounts[0]});
		await MisesLegacyPoolrmPkx4C.getReward.call({from: accounts[5]});
		const uint256UlnpSkW = await MisesLegacyPoolrmPkx4C.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(MisesLegacyPoolrmPkx4C.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresstIqbdTf = accounts[2]
		const addressZP3AmfB = accounts[2]
		const uintFbF2SPm = BigInt("936")
		const uintn41Tzzf = BigInt("1501")
		const MisesLegacyPoollemtdJy = await MisesLegacyPool.new(addresstIqbdTf, addressZP3AmfB, uintFbF2SPm, uintn41Tzzf, {from: "0x0000000000000000000000000000000000000001"});
		const addressdRkKjPu = accounts[5]
		const addressBBdDIjk = await MisesLegacyPoollemtdJy.updateReward.call(addressdRkKjPu, {from: accounts[1]});
		await MisesLegacyPoollemtdJy.checkStart.call({from: accounts[1]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressDS5Jbj = "0x0000000000000000000000000000000000000001"
		const addressmqlseaM = accounts[0]
		const uintihaObH = BigInt("773")
		const uintW85zN6h = BigInt("2024")
		const MisesLegacyPoolrmPkx4C = await MisesLegacyPool.new(addressDS5Jbj, addressmqlseaM, uintihaObH, uintW85zN6h, {from: accounts[2]});
		const uintaCq7VZp = BigInt("1278")
		await MisesLegacyPoolrmPkx4C.getReward.call({from: accounts[0]});
		const uint256ovstAnQ = await MisesLegacyPoolrmPkx4C.notifyRewardAmount.call(uintaCq7VZp, {from: accounts[4]});
		await MisesLegacyPoolrmPkx4C.getReward.call({from: accounts[5]});
		const uint256UlnpSkW = await MisesLegacyPoolrmPkx4C.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(MisesLegacyPoolrmPkx4C.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})