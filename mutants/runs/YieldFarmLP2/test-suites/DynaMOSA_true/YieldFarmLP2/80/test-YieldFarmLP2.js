const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2tKPjn97 = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMJgMIij = accounts[2]
		const addressWADhjB0 = accounts[3]
		const uintQX7nqGT = await YieldFarmLP2tKPjn97.claimable.call(addressMJgMIij, {from: accounts[1]});
		const uinttX9zXlH = await YieldFarmLP2tKPjn97.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintfp4wuM6 = await YieldFarmLP2tKPjn97.massHarvest.call({from: accounts[2]});
		const uintrwukBjz = await YieldFarmLP2tKPjn97.claimable.call(addressWADhjB0, {from: accounts[1]});
		const uintkGCdV2O = await YieldFarmLP2tKPjn97.getCurrentEpoch.call({from: accounts[4]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2NyArago = await YieldFarmLP2.new({from: accounts[2]});
		const uintOzKb6gr = BigInt("1601")
		const addresstAOwSgf = accounts[0]
		const uintIjQ9K5L = BigInt("822")
		const addressuFWHu4S = accounts[0]
		const addressCwPXwIc = accounts[1]
		const uinteHgqmn = await YieldFarmLP2NyArago.getEpochStake.call(addresstAOwSgf, uintOzKb6gr, {from: accounts[4]});
		const uintjnxGNVy = await YieldFarmLP2NyArago.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintYSr8q75 = await YieldFarmLP2NyArago.getEpochStake.call(addressuFWHu4S, uintIjQ9K5L, {from: accounts[3]});
		const uintyx69AM = await YieldFarmLP2NyArago.claimable.call(addressCwPXwIc, {from: accounts[0]});

		await expect(YieldFarmLP2NyArago.getEpochStake.call(addresstAOwSgf, uintOzKb6gr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2P2R35uI = await YieldFarmLP2.new({from: accounts[3]});
		const addressyXUBNFg = accounts[5]
		const uintkqJRxH9 = BigInt("522")
		const uintKEsXk3r = await YieldFarmLP2P2R35uI.claimable.call(addressyXUBNFg, {from: accounts[5]});
		const uintnJKVx6 = await YieldFarmLP2P2R35uI.getCurrentEpoch.call({from: accounts[0]});
		const uintEyPXXnD = await YieldFarmLP2P2R35uI.harvest.call(uintkqJRxH9, {from: accounts[0]});
		const uintOlb7AE = await YieldFarmLP2P2R35uI.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2P2R35uI.claimable.call(addressyXUBNFg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Ho6qUIs = await YieldFarmLP2.new({from: accounts[1]});
		const addresschBzgyd = accounts[3]
		const uinttg4G5l4 = await YieldFarmLP2Ho6qUIs.getCurrentEpoch.call({from: accounts[2]});
		const uintvqxH5Ua = await YieldFarmLP2Ho6qUIs.getCurrentEpoch.call({from: accounts[4]});
		const uintvSu8rp7 = await YieldFarmLP2Ho6qUIs.claimable.call(addresschBzgyd, {from: accounts[2]});
		const uintTYCrVLT = await YieldFarmLP2Ho6qUIs.userLastEpochIdHarvested.call({from: accounts[5]});
		const uintjzVYhzu = await YieldFarmLP2Ho6qUIs.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2Ho6qUIs.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2rT5VxF9 = await YieldFarmLP2.new({from: accounts[3]});
		const addressB5BNjBi = "0x0000000000000000000000000000000000000001"
		const addressDqpiTbm = accounts[1]
		const addressfqZAwpR = accounts[4]
		const addresseNtIGy3 = accounts[4]
		const uintCqYlIeG = BigInt("1579")
		const uintyEQDD7M = BigInt("1524")
		const addressrm45yPk = accounts[4]
		const addressPUNRUJg = await YieldFarmLP2rT5VxF9.initialize.call(addresseNtIGy3, addressfqZAwpR, addressDqpiTbm, addressB5BNjBi, {from: accounts[3]});
		const uintVuM1vYM = await YieldFarmLP2rT5VxF9.getPoolSize.call(uintCqYlIeG, {from: accounts[2]});
		const uintRCcURpx = await YieldFarmLP2rT5VxF9.getEpochStake.call(addressrm45yPk, uintyEQDD7M, {from: accounts[0]});
		const uintkJLSIgc = await YieldFarmLP2rT5VxF9.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2rT5VxF9.initialize.call(addresseNtIGy3, addressfqZAwpR, addressDqpiTbm, addressB5BNjBi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2NyArago = await YieldFarmLP2.new({from: accounts[2]});
		const uintf45DTOY = BigInt("1601")
		const addressYasJfqq = accounts[0]
		const uintWOCLD17 = BigInt("820")
		const uintBjSoGXf = BigInt("822")
		const addressH9tHzyU = accounts[1]
		const addressPGI4hn = accounts[1]
		const uintON7UEyO = await YieldFarmLP2NyArago.massHarvest.call({from: accounts[3]});
		const uinteHgqmn = await YieldFarmLP2NyArago.getEpochStake.call(addressYasJfqq, uintf45DTOY, {from: accounts[4]});
		const uintjnxGNVy = await YieldFarmLP2NyArago.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintlChbz4w = await YieldFarmLP2NyArago.harvest.call(uintWOCLD17, {from: accounts[1]});
		const uintYSr8q75 = await YieldFarmLP2NyArago.getEpochStake.call(addressH9tHzyU, uintBjSoGXf, {from: accounts[3]});
		const uintyx69AM = await YieldFarmLP2NyArago.claimable.call(addressPGI4hn, {from: accounts[0]});

		await expect(YieldFarmLP2NyArago.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2CqnvDkO = await YieldFarmLP2.new({from: accounts[0]});
		const uintRubaRHd = BigInt("394")
		const addresszAQHGS = accounts[4]
		const uintWgxpK0v = await YieldFarmLP2CqnvDkO.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintBBerFSz = await YieldFarmLP2CqnvDkO.harvest.call(uintRubaRHd, {from: accounts[2]});
		const uintL0IBT3Y = await YieldFarmLP2CqnvDkO.getCurrentEpoch.call({from: accounts[3]});
		const uintgO75M9 = await YieldFarmLP2CqnvDkO.claimable.call(addresszAQHGS, {from: accounts[4]});

		assert.equal(uintWgxpK0v, BigInt("0"))
		await expect(YieldFarmLP2CqnvDkO.harvest.call(uintRubaRHd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2dHTU0Pk = await YieldFarmLP2.new({from: accounts[2]});
		const uintocmsW3k = BigInt("1222")
		const uintdJ91eY1 = BigInt("1976")
		const uintwCzKrm = await YieldFarmLP2dHTU0Pk.getPoolSize.call(uintocmsW3k, {from: accounts[4]});
		const uintX7k6XX = await YieldFarmLP2dHTU0Pk.harvest.call(uintdJ91eY1, {from: accounts[4]});

		await expect(YieldFarmLP2dHTU0Pk.getPoolSize.call(uintocmsW3k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})