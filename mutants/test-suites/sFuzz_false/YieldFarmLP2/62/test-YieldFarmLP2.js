const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2YgDF4J4 = await YieldFarmLP2.new({from: accounts[2]});
		const uintrJHiuYd = BigInt("121")
		const addresssY6pPGh = accounts[4]
//		const uint1gmUGR = await YieldFarmLP2YgDF4J4.getEpochStake.call(addresssY6pPGh, uintrJHiuYd, {from: accounts[4]});
//		const uintUkJaoM = await YieldFarmLP2YgDF4J4.getCurrentEpoch.call({from: accounts[5]});
//		const uintHlgvR2t = await YieldFarmLP2YgDF4J4.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2YgDF4J4.getEpochStake.call(addresssY6pPGh, uintrJHiuYd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2J5m2Ged = await YieldFarmLP2.new({from: accounts[2]});
		const uintriAPNGE = BigInt("1284")
		const addresswOZRvd9 = accounts[2]
//		const uintGCVhTJ = await YieldFarmLP2J5m2Ged.harvest.call(uintriAPNGE, {from: accounts[2]});
//		const uintveCLEDJ = await YieldFarmLP2J5m2Ged.claimable.call(addresswOZRvd9, {from: accounts[0]});

		await expect(YieldFarmLP2J5m2Ged.harvest.call(uintriAPNGE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2fGw9F8V = await YieldFarmLP2.new({from: accounts[3]});
		const uintAqDINQA = BigInt("736")
		const addresstW4uA5D = accounts[1]
		const addressHjPwfSL = accounts[1]
		const addressWdcfBJC = accounts[1]
		const addressXUKzRNy = accounts[1]
		const addressaa84Eju = "0x0000000000000000000000000000000000000001"
//		const uintIUr3iJ8 = await YieldFarmLP2fGw9F8V.massHarvest.call({from: accounts[5]});
//		const uintRP7aggP = await YieldFarmLP2fGw9F8V.harvest.call(uintAqDINQA, {from: accounts[4]});
//		const addresskz6whCR = await YieldFarmLP2fGw9F8V.initialize.call(addressXUKzRNy, addressWdcfBJC, addressHjPwfSL, addresstW4uA5D, {from: accounts[4]});
//		const uintJ8XhDKC = await YieldFarmLP2fGw9F8V.claimable.call(addressaa84Eju, {from: accounts[0]});

		await expect(YieldFarmLP2fGw9F8V.massHarvest.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2VbxIuRg = await YieldFarmLP2.new({from: accounts[0]});
		const addressAj2ohb1 = accounts[4]
		const uintSsdKZQV = BigInt("1187")
		const addressOq7NVNq = accounts[4]
//		const uintpxw3KaH = await YieldFarmLP2VbxIuRg.claimable.call(addressAj2ohb1, {from: accounts[3]});
//		const uintfAlthuE = await YieldFarmLP2VbxIuRg.getEpochStake.call(addressOq7NVNq, uintSsdKZQV, {from: accounts[2]});
//		const uintcf3h5Kd = await YieldFarmLP2VbxIuRg.massHarvest.call({from: accounts[4]});

		await expect(YieldFarmLP2VbxIuRg.claimable.call(addressAj2ohb1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Bvg232 = await YieldFarmLP2.new({from: accounts[2]});
		const uintm3omkNa = BigInt("1681")
		const uintlMeoWK = BigInt("732")
		const uints8q6RYY = await YieldFarmLP2Bvg232.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uintAjgVhEl = await YieldFarmLP2Bvg232.getCurrentEpoch.call({from: accounts[2]});
//		const uintI2DBNpg = await YieldFarmLP2Bvg232.harvest.call(uintm3omkNa, {from: accounts[3]});
//		const uintMr48XOJ = await YieldFarmLP2Bvg232.harvest.call(uintlMeoWK, {from: accounts[0]});

		assert.equal(uints8q6RYY, BigInt("0"))
		await expect(YieldFarmLP2Bvg232.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2J5m2Ged = await YieldFarmLP2.new({from: accounts[2]});
		const addressvn80KpK = "0x0000000000000000000000000000000000000001"
		const addressnqmpVlH = accounts[3]
		const addressxYvwg2X = accounts[1]
		const addresstlcQiu = accounts[1]
		const addressfXGUrLT = accounts[3]
//		const addressg50g3v7 = await YieldFarmLP2J5m2Ged.initialize.call(addresstlcQiu, addressxYvwg2X, addressnqmpVlH, addressvn80KpK, {from: accounts[1]});
//		const uintveCLEDJ = await YieldFarmLP2J5m2Ged.claimable.call(addressfXGUrLT, {from: accounts[0]});

		await expect(YieldFarmLP2J5m2Ged.initialize.call(addresstlcQiu, addressxYvwg2X, addressnqmpVlH, addressvn80KpK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2VbxIuRg = await YieldFarmLP2.new({from: accounts[0]});
		const uintlexMmnu = BigInt("1617")
//		const uintxQGtRuW = await YieldFarmLP2VbxIuRg.getPoolSize.call(uintlexMmnu, {from: accounts[1]});
//		const uintcf3h5Kd = await YieldFarmLP2VbxIuRg.massHarvest.call({from: accounts[4]});

		await expect(YieldFarmLP2VbxIuRg.getPoolSize.call(uintlexMmnu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2bRhjLhy = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZKtD0QB = BigInt("844")
		const addressBv7mlLQ = accounts[4]
		const uintoa9u57R = BigInt("1556")
		const uintyfaCFEs = await YieldFarmLP2bRhjLhy.getPoolSize.call(uintZKtD0QB, {from: accounts[1]});
		const uintloYP4ON = await YieldFarmLP2bRhjLhy.claimable.call(addressBv7mlLQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintqGn7JkU = await YieldFarmLP2bRhjLhy.getCurrentEpoch.call({from: accounts[2]});
		const uintM4HIJi0 = await YieldFarmLP2bRhjLhy.getPoolSize.call(uintoa9u57R, {from: accounts[2]});
		const uintZMenL7U = await YieldFarmLP2bRhjLhy.getCurrentEpoch.call({from: accounts[4]});
	});
})