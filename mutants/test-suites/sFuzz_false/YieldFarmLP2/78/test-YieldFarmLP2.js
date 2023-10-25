const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2aq4qBgJ = await YieldFarmLP2.new({from: accounts[1]});
		const uintZXdK1I7 = BigInt("280")
		const uintlcJ3Fye = BigInt("1756")
		const uintzEqVK1m = BigInt("875")
		const addressYxo65UH = accounts[2]
//		const uintoAezJAm = await YieldFarmLP2aq4qBgJ.harvest.call(uintZXdK1I7, {from: accounts[0]});
//		const uintAlNagDd = await YieldFarmLP2aq4qBgJ.massHarvest.call({from: accounts[5]});
//		const uintxAbqzoi = await YieldFarmLP2aq4qBgJ.harvest.call(uintlcJ3Fye, {from: accounts[3]});
//		const uintgKkf7hQ = await YieldFarmLP2aq4qBgJ.getCurrentEpoch.call({from: accounts[0]});
//		const uintoAm0maC = await YieldFarmLP2aq4qBgJ.getEpochStake.call(addressYxo65UH, uintzEqVK1m, {from: accounts[2]});

		await expect(YieldFarmLP2aq4qBgJ.harvest.call(uintZXdK1I7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2AS2dNl0 = await YieldFarmLP2.new({from: accounts[0]});
		const addressSmcpOR = accounts[1]
		const addressxUgWXoa = accounts[2]
		const address8oGO0S = accounts[4]
		const addressnIjwVBR = accounts[5]
		const addresseYxAu1 = accounts[1]
		const addressNAhkGpa = accounts[3]
		const uintX69I6Mp = BigInt("746")
		const addressyo2zzkC = accounts[5]
//		const addressyER8x90 = await YieldFarmLP2AS2dNl0.initialize.call(addressnIjwVBR, address8oGO0S, addressxUgWXoa, addressSmcpOR, {from: accounts[2]});
//		const uintPR8NNWs = await YieldFarmLP2AS2dNl0.claimable.call(addresseYxAu1, {from: accounts[4]});
//		const uintGbVoqsY = await YieldFarmLP2AS2dNl0.claimable.call(addressNAhkGpa, {from: accounts[4]});
//		const uintZh5rOhw = await YieldFarmLP2AS2dNl0.getCurrentEpoch.call({from: accounts[4]});
//		const uintFze8rS = await YieldFarmLP2AS2dNl0.getEpochStake.call(addressyo2zzkC, uintX69I6Mp, {from: accounts[3]});

		await expect(YieldFarmLP2AS2dNl0.initialize.call(addressnIjwVBR, address8oGO0S, addressxUgWXoa, addressSmcpOR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2aZFXSQ8 = await YieldFarmLP2.new({from: accounts[5]});
		const uintRc0Jk7m = BigInt("1859")
		const uintP20imD0 = BigInt("1624")
		const addressUK3Q4ZN = accounts[5]
//		const uintl0Ti0I = await YieldFarmLP2aZFXSQ8.massHarvest.call({from: accounts[3]});
//		const uintmQHOKAX = await YieldFarmLP2aZFXSQ8.getPoolSize.call(uintRc0Jk7m, {from: accounts[1]});
//		const uintI4KVckd = await YieldFarmLP2aZFXSQ8.massHarvest.call({from: accounts[5]});
//		const uintqiqor8 = await YieldFarmLP2aZFXSQ8.getCurrentEpoch.call({from: accounts[2]});
//		const uintqqC0CmY = await YieldFarmLP2aZFXSQ8.getPoolSize.call(uintP20imD0, {from: accounts[1]});
//		const uintAs9EBlr = await YieldFarmLP2aZFXSQ8.claimable.call(addressUK3Q4ZN, {from: accounts[5]});

		await expect(YieldFarmLP2aZFXSQ8.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mOQBIX8 = await YieldFarmLP2.new({from: accounts[5]});
		const addressmY3eycS = accounts[1]
		const uintyRyUoJx = BigInt("1400")
		const uintqjVp7BC = BigInt("1406")
		const uintt54ab0h = BigInt("1695")
		const addresslkVSkmO = accounts[4]
//		const uintYG5lS7K = await YieldFarmLP2mOQBIX8.claimable.call(addressmY3eycS, {from: accounts[1]});
//		const uintom5E9tP = await YieldFarmLP2mOQBIX8.harvest.call(uintyRyUoJx, {from: accounts[0]});
//		const uintC15Vt6D = await YieldFarmLP2mOQBIX8.harvest.call(uintqjVp7BC, {from: accounts[2]});
//		const uintZHc9WXX = await YieldFarmLP2mOQBIX8.getCurrentEpoch.call({from: accounts[1]});
//		const uintniqDuyp = await YieldFarmLP2mOQBIX8.getEpochStake.call(addresslkVSkmO, uintt54ab0h, {from: accounts[0]});

		await expect(YieldFarmLP2mOQBIX8.claimable.call(addressmY3eycS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2p6GVKOV = await YieldFarmLP2.new({from: accounts[3]});
		const uintxQnEsoq = BigInt("489")
		const addressyxm04Ml = accounts[0]
		const uintn644toh = BigInt("1566")
		const uintGBVzrCv = BigInt("1838")
		const addressnw6Fp1C = accounts[1]
//		const uintX2qYDJI = await YieldFarmLP2p6GVKOV.getEpochStake.call(addressyxm04Ml, uintxQnEsoq, {from: accounts[5]});
//		const uintJRjpFPa = await YieldFarmLP2p6GVKOV.userLastEpochIdHarvested.call({from: accounts[4]});
//		const uintPHNX60R = await YieldFarmLP2p6GVKOV.getCurrentEpoch.call({from: accounts[4]});
//		const uintnIPVrYp = await YieldFarmLP2p6GVKOV.harvest.call(uintn644toh, {from: accounts[3]});
//		const uintZ3gLRUf = await YieldFarmLP2p6GVKOV.userLastEpochIdHarvested.call({from: accounts[0]});
//		const uintggJiU7 = await YieldFarmLP2p6GVKOV.getEpochStake.call(addressnw6Fp1C, uintGBVzrCv, {from: accounts[0]});

		await expect(YieldFarmLP2p6GVKOV.getEpochStake.call(addressyxm04Ml, uintxQnEsoq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP28wS7nE = await YieldFarmLP2.new({from: accounts[2]});
		const addressM2OyQzY = accounts[2]
		const addressn4IWzaS = accounts[0]
		const addressPYqP1qo = accounts[0]
		const addressQ859NUO = accounts[2]
		const addressf6emUb = accounts[0]
		const addressgctX2G7 = accounts[2]
		const addressK3MqNcC = accounts[4]
		const addresspIB6tyZ = accounts[5]
		const addressjUoJsbM = accounts[3]
		const uintQY15Vtv = BigInt("1877")
		const uintQB4496 = await YieldFarmLP28wS7nE.userLastEpochIdHarvested.call({from: accounts[4]});
//		const addressoLsfmw = await YieldFarmLP28wS7nE.initialize.call(addressQ859NUO, addressPYqP1qo, addressn4IWzaS, addressM2OyQzY, {from: accounts[4]});
//		const addressFQqT6ll = await YieldFarmLP28wS7nE.initialize.call(addresspIB6tyZ, addressK3MqNcC, addressgctX2G7, addressf6emUb, {from: accounts[0]});
//		const uintlPNVt8I = await YieldFarmLP28wS7nE.claimable.call(addressjUoJsbM, {from: accounts[0]});
//		const uintB7X1jHe = await YieldFarmLP28wS7nE.getPoolSize.call(uintQY15Vtv, {from: accounts[1]});

		assert.equal(uintQB4496, BigInt("0"))
		await expect(YieldFarmLP28wS7nE.initialize.call(addressQ859NUO, addressPYqP1qo, addressn4IWzaS, addressM2OyQzY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MItR7RV = await YieldFarmLP2.new({from: accounts[4]});
		const uinttcS3NN = BigInt("531")
		const addressZzacwx5 = accounts[5]
		const addressE3NIxZp = accounts[4]
//		const uintecCOvIj = await YieldFarmLP2MItR7RV.getCurrentEpoch.call({from: accounts[1]});
//		const uinttMO8iue = await YieldFarmLP2MItR7RV.getEpochStake.call(addressZzacwx5, uinttcS3NN, {from: accounts[2]});
//		const uintPKuOKQ7 = await YieldFarmLP2MItR7RV.massHarvest.call({from: accounts[1]});
//		const uintzyLI2y = await YieldFarmLP2MItR7RV.claimable.call(addressE3NIxZp, {from: accounts[4]});

		await expect(YieldFarmLP2MItR7RV.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2N89d4A = await YieldFarmLP2.new({from: accounts[0]});
		const uintrJpEILp = BigInt("1403")
//		const uintCiqZWGx = await YieldFarmLP2N89d4A.getPoolSize.call(uintrJpEILp, {from: accounts[0]});
//		const uintHp6hHnU = await YieldFarmLP2N89d4A.getCurrentEpoch.call({from: accounts[0]});
//		const uintbbtwXVY = await YieldFarmLP2N89d4A.massHarvest.call({from: accounts[5]});

		await expect(YieldFarmLP2N89d4A.getPoolSize.call(uintrJpEILp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mcMbkH6 = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr8LAtr = BigInt("565")
		const addressskqQOss = accounts[4]
		const addressyHNfhjb = accounts[5]
		const addressL01EAR = accounts[3]
		const uintd2Bq4Nr = await YieldFarmLP2mcMbkH6.getCurrentEpoch.call({from: accounts[5]});
		const uintQ8egXUY = await YieldFarmLP2mcMbkH6.getEpochStake.call(addressskqQOss, uintr8LAtr, {from: accounts[0]});
		const uintxPSHTcq = await YieldFarmLP2mcMbkH6.claimable.call(addressyHNfhjb, {from: accounts[0]});
		const uintXWrqrAn = await YieldFarmLP2mcMbkH6.claimable.call(addressL01EAR, {from: "0x0000000000000000000000000000000000000001"});
		const uintfCK4Zka = await YieldFarmLP2mcMbkH6.userLastEpochIdHarvested.call({from: accounts[3]});
	});
})