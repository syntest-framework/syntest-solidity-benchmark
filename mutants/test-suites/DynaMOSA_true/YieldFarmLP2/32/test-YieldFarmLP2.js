const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ygvJEk4 = await YieldFarmLP2.new({from: accounts[4]});
		const addressMMKMI9 = "0x0000000000000000000000000000000000000001"
		const addressU0y0KWm = accounts[0]
		const addressX9B9oYd = accounts[2]
		const addressGsOHNOS = accounts[2]
		const addressJIsQ0JH = accounts[4]
//		const uintYpuAoI = await YieldFarmLP2ygvJEk4.claimable.call(addressMMKMI9, {from: accounts[4]});
//		const uintSEErvTo = await YieldFarmLP2ygvJEk4.userLastEpochIdHarvested.call({from: accounts[0]});
//		const addresssoqGj3 = await YieldFarmLP2ygvJEk4.initialize.call(addressJIsQ0JH, addressGsOHNOS, addressX9B9oYd, addressU0y0KWm, {from: accounts[5]});
//		const uintP0p5yUS = await YieldFarmLP2ygvJEk4.massHarvest.call({from: accounts[1]});

		await expect(YieldFarmLP2ygvJEk4.claimable.call(addressMMKMI9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2XCcWUu = await YieldFarmLP2.new({from: accounts[4]});
		const uintW1chtFo = BigInt("687")
		const addressUrHjX4 = accounts[2]
//		const uintfSxtVZD = await YieldFarmLP2XCcWUu.getCurrentEpoch.call({from: accounts[2]});
//		const uintp2TSNk9 = await YieldFarmLP2XCcWUu.getEpochStake.call(addressUrHjX4, uintW1chtFo, {from: "0x0000000000000000000000000000000000000001"});
//		const uintvA7FTQ = await YieldFarmLP2XCcWUu.getCurrentEpoch.call({from: accounts[0]});

		await expect(YieldFarmLP2XCcWUu.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2e91CT96 = await YieldFarmLP2.new({from: accounts[4]});
		const uintypD1UFE = BigInt("1785")
		const addressyKMjTDp = accounts[1]
		const uintQaetg3y = BigInt("1572")
		const addressZnnoTwU = accounts[1]
//		const uintngQQH5a = await YieldFarmLP2e91CT96.massHarvest.call({from: accounts[2]});
//		const uintTn9zIcV = await YieldFarmLP2e91CT96.getEpochStake.call(addressyKMjTDp, uintypD1UFE, {from: accounts[4]});
//		const uintdxMYxO9 = await YieldFarmLP2e91CT96.getEpochStake.call(addressZnnoTwU, uintQaetg3y, {from: accounts[1]});
//		const uintnotC4e6 = await YieldFarmLP2e91CT96.getCurrentEpoch.call({from: accounts[4]});
//		const uintu89saik = await YieldFarmLP2e91CT96.getCurrentEpoch.call({from: accounts[3]});

		await expect(YieldFarmLP2e91CT96.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2reh4ORF = await YieldFarmLP2.new({from: accounts[5]});
		const uintujINXmf = BigInt("515")
		const addressZAmqB74 = accounts[0]
		const uintRNtZGO = BigInt("1626")
		const uintmpr5cnI = BigInt("535")
//		const uintnCWlKg3 = await YieldFarmLP2reh4ORF.getEpochStake.call(addressZAmqB74, uintujINXmf, {from: accounts[1]});
//		const uintvpmrz0a = await YieldFarmLP2reh4ORF.massHarvest.call({from: accounts[0]});
//		const uintKRO2su8 = await YieldFarmLP2reh4ORF.getPoolSize.call(uintRNtZGO, {from: "0x0000000000000000000000000000000000000001"});
//		const uintVScnokE = await YieldFarmLP2reh4ORF.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uintBVYO7fq = await YieldFarmLP2reh4ORF.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uintfJbiXk7 = await YieldFarmLP2reh4ORF.getPoolSize.call(uintmpr5cnI, {from: accounts[3]});

		await expect(YieldFarmLP2reh4ORF.getEpochStake.call(addressZAmqB74, uintujINXmf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2zyxmLKt = await YieldFarmLP2.new({from: accounts[5]});
		const uintUQyP3SF = BigInt("505")
		const uintUvj9oM1 = BigInt("921")
		const uintvR2Jbs7 = BigInt("1645")
//		const uintLimegn9 = await YieldFarmLP2zyxmLKt.harvest.call(uintUQyP3SF, {from: accounts[0]});
//		const uintF2wVkU = await YieldFarmLP2zyxmLKt.harvest.call(uintUvj9oM1, {from: accounts[3]});
//		const uintZHGeGKB = await YieldFarmLP2zyxmLKt.getCurrentEpoch.call({from: accounts[3]});
//		const uintIsYjmu = await YieldFarmLP2zyxmLKt.harvest.call(uintvR2Jbs7, {from: accounts[1]});

		await expect(YieldFarmLP2zyxmLKt.harvest.call(uintUQyP3SF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Ina3gdH = await YieldFarmLP2.new({from: accounts[4]});
		const uintFxVkG4M = BigInt("363")
		const uinteTIbvYv = BigInt("915")
		const addressaPI6Yna = accounts[1]
//		const uinty8H8U4R = await YieldFarmLP2Ina3gdH.getPoolSize.call(uintFxVkG4M, {from: accounts[1]});
//		const uintcYakKG = await YieldFarmLP2Ina3gdH.getEpochStake.call(addressaPI6Yna, uinteTIbvYv, {from: accounts[3]});
//		const uinty1ksFPa = await YieldFarmLP2Ina3gdH.userLastEpochIdHarvested.call({from: accounts[0]});
//		const uintZEGCqCO = await YieldFarmLP2Ina3gdH.massHarvest.call({from: accounts[3]});
//		const uintytGjVM = await YieldFarmLP2Ina3gdH.userLastEpochIdHarvested.call({from: accounts[4]});

		await expect(YieldFarmLP2Ina3gdH.getPoolSize.call(uintFxVkG4M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GFVGqsf = await YieldFarmLP2.new({from: accounts[1]});
		const addressQEOcSxa = accounts[5]
		const addressne8YwIy = accounts[0]
		const addressCq70QMQ = accounts[0]
		const addresstZ5Fky = accounts[3]
		const addressaKChpNn = accounts[3]
		const addressh8928g = accounts[0]
		const addressuuZ5YGD = accounts[1]
//		const addressdl1FQQL = await YieldFarmLP2GFVGqsf.initialize.call(addresstZ5Fky, addressCq70QMQ, addressne8YwIy, addressQEOcSxa, {from: accounts[0]});
//		const uintTI2B2b = await YieldFarmLP2GFVGqsf.claimable.call(addressaKChpNn, {from: accounts[4]});
//		const uintyH2Ijvx = await YieldFarmLP2GFVGqsf.getCurrentEpoch.call({from: accounts[3]});
//		const uintouJlMh5 = await YieldFarmLP2GFVGqsf.claimable.call(addressh8928g, {from: accounts[0]});
//		const uintqaefJLj = await YieldFarmLP2GFVGqsf.claimable.call(addressuuZ5YGD, {from: accounts[3]});

		await expect(YieldFarmLP2GFVGqsf.initialize.call(addresstZ5Fky, addressCq70QMQ, addressne8YwIy, addressQEOcSxa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2zyxmLKt = await YieldFarmLP2.new({from: accounts[5]});
		const uintW2cf5X = BigInt("931")
		const uintU9d0o50 = BigInt("1645")
		const uintRUHy76v = await YieldFarmLP2zyxmLKt.userLastEpochIdHarvested.call({from: accounts[0]});
//		const uintF2wVkU = await YieldFarmLP2zyxmLKt.harvest.call(uintW2cf5X, {from: accounts[3]});
//		const uintcNX3D0 = await YieldFarmLP2zyxmLKt.massHarvest.call({from: accounts[2]});
//		const uintZHGeGKB = await YieldFarmLP2zyxmLKt.getCurrentEpoch.call({from: accounts[3]});
//		const uintIsYjmu = await YieldFarmLP2zyxmLKt.harvest.call(uintU9d0o50, {from: accounts[1]});

		assert.equal(uintRUHy76v, BigInt("0"))
		await expect(YieldFarmLP2zyxmLKt.harvest.call(uintW2cf5X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jRLYEQn = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpeSdhNp = BigInt("1281")
		const uintoVY6uMw = BigInt("301")
		const uintiVJ4c1N = BigInt("296")
		const uintB034R0Y = BigInt("834")
		const addressLGvhA6 = accounts[1]
		const uintOEtaQRM = await YieldFarmLP2jRLYEQn.harvest.call(uintpeSdhNp, {from: accounts[2]});
		const uintyv3DE2N = await YieldFarmLP2jRLYEQn.getPoolSize.call(uintoVY6uMw, {from: accounts[3]});
		const uintQma4UQb = await YieldFarmLP2jRLYEQn.massHarvest.call({from: accounts[1]});
		const uintwQsp8y = await YieldFarmLP2jRLYEQn.harvest.call(uintiVJ4c1N, {from: "0x0000000000000000000000000000000000000001"});
		const uintODdOg8q = await YieldFarmLP2jRLYEQn.getEpochStake.call(addressLGvhA6, uintB034R0Y, {from: accounts[1]});
		const uint0bU1OG = await YieldFarmLP2jRLYEQn.getCurrentEpoch.call({from: accounts[1]});
	});
})