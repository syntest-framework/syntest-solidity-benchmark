const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2K9DpDm = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbbW06v = await YieldFarmLP2K9DpDm.massHarvest.call({from: accounts[5]});
		const uintidRx07 = await YieldFarmLP2K9DpDm.massHarvest.call({from: accounts[0]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2KUyDrTE = await YieldFarmLP2.new({from: accounts[3]});
		const uintSSQpsRE = BigInt("918")
		const addressycetiFo = accounts[5]
		const uintJD3zloC = BigInt("1971")
//		const uintqkcFx5I = await YieldFarmLP2KUyDrTE.getEpochStake.call(addressycetiFo, uintSSQpsRE, {from: accounts[2]});
//		const uintp11nrl = await YieldFarmLP2KUyDrTE.massHarvest.call({from: accounts[3]});
//		const uintc81x19j = await YieldFarmLP2KUyDrTE.getPoolSize.call(uintJD3zloC, {from: accounts[0]});

		await expect(YieldFarmLP2KUyDrTE.getEpochStake.call(addressycetiFo, uintSSQpsRE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2fS3vpS = await YieldFarmLP2.new({from: accounts[1]});
		const uintw947DL = BigInt("1904")
		const uintT60z4gi = BigInt("48")
//		const uintzYCg9P = await YieldFarmLP2fS3vpS.getCurrentEpoch.call({from: accounts[1]});
//		const uintVU3DVuN = await YieldFarmLP2fS3vpS.harvest.call(uintw947DL, {from: accounts[0]});
//		const uint5tV9Bh = await YieldFarmLP2fS3vpS.getCurrentEpoch.call({from: accounts[2]});
//		const uintX5T8osR = await YieldFarmLP2fS3vpS.getPoolSize.call(uintT60z4gi, {from: accounts[3]});

		await expect(YieldFarmLP2fS3vpS.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2nwWAsOZ = await YieldFarmLP2.new({from: accounts[2]});
		const uintnkSoCjE = BigInt("1143")
		const addressz9TDYoi = accounts[0]
		const addresssXyWD9a = accounts[3]
//		const uint11VS1E = await YieldFarmLP2nwWAsOZ.getPoolSize.call(uintnkSoCjE, {from: accounts[0]});
//		const uintZgLnRel = await YieldFarmLP2nwWAsOZ.claimable.call(addressz9TDYoi, {from: accounts[2]});
//		const uintNHrFJk8 = await YieldFarmLP2nwWAsOZ.claimable.call(addresssXyWD9a, {from: accounts[2]});

		await expect(YieldFarmLP2nwWAsOZ.getPoolSize.call(uintnkSoCjE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2fS3vpS = await YieldFarmLP2.new({from: accounts[1]});
		const addressNEzyKio = accounts[3]
		const uintUudBtW6 = BigInt("977")
		const uintnki5cwZ = BigInt("48")
//		const uintZQcJcZm = await YieldFarmLP2fS3vpS.claimable.call(addressNEzyKio, {from: accounts[5]});
//		const uintpdPu2qq = await YieldFarmLP2fS3vpS.harvest.call(uintUudBtW6, {from: accounts[5]});
//		const uintzYCg9P = await YieldFarmLP2fS3vpS.getCurrentEpoch.call({from: accounts[1]});
//		const uintX5T8osR = await YieldFarmLP2fS3vpS.getPoolSize.call(uintnki5cwZ, {from: accounts[3]});

		await expect(YieldFarmLP2fS3vpS.claimable.call(addressNEzyKio, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2fS3vpS = await YieldFarmLP2.new({from: accounts[1]});
		const addressAY8alMq = accounts[5]
		const addressNffUdrj = accounts[4]
		const addresse1Hnwa4 = accounts[4]
		const addressZ8I5BcF = accounts[0]
		const uintk2k2zEV = BigInt("20")
		const uintUj71am4 = await YieldFarmLP2fS3vpS.userLastEpochIdHarvested.call({from: accounts[4]});
//		const uintzYCg9P = await YieldFarmLP2fS3vpS.getCurrentEpoch.call({from: accounts[1]});
//		const addressMakPLi = await YieldFarmLP2fS3vpS.initialize.call(addressZ8I5BcF, addresse1Hnwa4, addressNffUdrj, addressAY8alMq, {from: accounts[4]});
//		const uintyNA9WLX = await YieldFarmLP2fS3vpS.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uintX5T8osR = await YieldFarmLP2fS3vpS.getPoolSize.call(uintk2k2zEV, {from: accounts[3]});

		assert.equal(uintUj71am4, BigInt("0"))
		await expect(YieldFarmLP2fS3vpS.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2fS3vpS = await YieldFarmLP2.new({from: accounts[1]});
		const addressqVv5NVd = accounts[5]
		const addressl9PQOt = accounts[4]
		const addressBWSKZod = "0x0000000000000000000000000000000000000001"
		const addresstthGPyi = accounts[1]
		const uintYthKxZu = BigInt("940")
//		const addressdBATSfw = await YieldFarmLP2fS3vpS.initialize.call(addresstthGPyi, addressBWSKZod, addressl9PQOt, addressqVv5NVd, {from: accounts[0]});
//		const uintX5T8osR = await YieldFarmLP2fS3vpS.getPoolSize.call(uintYthKxZu, {from: accounts[3]});

		await expect(YieldFarmLP2fS3vpS.initialize.call(addresstthGPyi, addressBWSKZod, addressl9PQOt, addressqVv5NVd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2wM9QiMY = await YieldFarmLP2.new({from: accounts[0]});
		const uintboEaTEx = BigInt("1029")
		const uintLsuIGSP = await YieldFarmLP2wM9QiMY.userLastEpochIdHarvested.call({from: accounts[0]});
//		const uintk91irYF = await YieldFarmLP2wM9QiMY.harvest.call(uintboEaTEx, {from: accounts[3]});
//		const uintqcmIoa2 = await YieldFarmLP2wM9QiMY.getCurrentEpoch.call({from: accounts[4]});

		assert.equal(uintLsuIGSP, BigInt("0"))
		await expect(YieldFarmLP2wM9QiMY.harvest.call(uintboEaTEx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2fS3vpS = await YieldFarmLP2.new({from: accounts[1]});
		const uinteqibvKy = BigInt("38")
//		const uintWYjJJpU = await YieldFarmLP2fS3vpS.massHarvest.call({from: accounts[1]});
//		const uintX5T8osR = await YieldFarmLP2fS3vpS.getPoolSize.call(uinteqibvKy, {from: accounts[3]});

		await expect(YieldFarmLP2fS3vpS.massHarvest.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})