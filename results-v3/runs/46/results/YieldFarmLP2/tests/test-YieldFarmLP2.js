const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2YGpcWC4 = await YieldFarmLP2.new({from: accounts[1]});
		const uint7LbvdR = BigInt("1867")
		const uintLZkILjf = await YieldFarmLP2YGpcWC4.getPoolSize.call(uint7LbvdR, {from: accounts[4]});
		const uintUyYN5tm = await YieldFarmLP2YGpcWC4.massHarvest.call({from: accounts[5]});
		const uint6xCtBD = await YieldFarmLP2YGpcWC4.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2YGpcWC4.getPoolSize.call(uint7LbvdR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2O4FodsR = await YieldFarmLP2.new({from: accounts[1]});
		const uintdJUvUPU = BigInt("147")
		const uintTl32vvW = BigInt("2031")
		const addressw8eCqqQ = accounts[5]
		const uintIGYBoQC = BigInt("1610")
		const uintOhJm3ne = BigInt("816")
		const uintocg2pPT = await YieldFarmLP2O4FodsR.harvest.call(uintdJUvUPU, {from: accounts[2]});
		const uintvOxmlZ = await YieldFarmLP2O4FodsR.getEpochStake.call(addressw8eCqqQ, uintTl32vvW, {from: accounts[0]});
		const uintfina0er = await YieldFarmLP2O4FodsR.harvest.call(uintIGYBoQC, {from: accounts[1]});
		const uintVJryGFm = await YieldFarmLP2O4FodsR.harvest.call(uintOhJm3ne, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2O4FodsR.harvest.call(uintdJUvUPU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UyUp2r7 = await YieldFarmLP2.new({from: accounts[4]});
		const addresssXlgheV = accounts[2]
		const addressikRuO0T = accounts[5]
		const uintLxTvrVU = BigInt("1873")
		const addressvpKubfT = accounts[2]
		const uintNTDk93p = await YieldFarmLP2UyUp2r7.claimable.call(addresssXlgheV, {from: accounts[0]});
		const uintrwE1n3 = await YieldFarmLP2UyUp2r7.claimable.call(addressikRuO0T, {from: "0x0000000000000000000000000000000000000001"});
		const uintkmWWbJ = await YieldFarmLP2UyUp2r7.getPoolSize.call(uintLxTvrVU, {from: accounts[4]});
		const uintJ3TkF4a = await YieldFarmLP2UyUp2r7.claimable.call(addressvpKubfT, {from: accounts[5]});

		await expect(YieldFarmLP2UyUp2r7.claimable.call(addresssXlgheV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2IqNGzF4 = await YieldFarmLP2.new({from: accounts[5]});
		const uintFo2Nh1u = BigInt("374")
		const uintEjSGThF = await YieldFarmLP2IqNGzF4.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintNUl35jE = await YieldFarmLP2IqNGzF4.userLastEpochIdHarvested.call({from: accounts[3]});
		const uintPfqanmn = await YieldFarmLP2IqNGzF4.getPoolSize.call(uintFo2Nh1u, {from: accounts[2]});
		const uintCD5xLT4 = await YieldFarmLP2IqNGzF4.getCurrentEpoch.call({from: accounts[0]});

		assert.equal(uintEjSGThF, BigInt("0"))
		assert.equal(uintNUl35jE, BigInt("0"))
		await expect(YieldFarmLP2IqNGzF4.getPoolSize.call(uintFo2Nh1u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2IqNGzF4 = await YieldFarmLP2.new({from: accounts[5]});
		const addressk07i5Uq = accounts[0]
		const uintI267p5U = BigInt("103")
		const uintCD5xLT4 = await YieldFarmLP2IqNGzF4.getCurrentEpoch.call({from: accounts[0]});
		const uintXuXmrWD = await YieldFarmLP2IqNGzF4.getCurrentEpoch.call({from: accounts[1]});
		const uintDKfom9S = await YieldFarmLP2IqNGzF4.massHarvest.call({from: accounts[3]});
		const uint1x9aFX = await YieldFarmLP2IqNGzF4.claimable.call(addressk07i5Uq, {from: accounts[2]});
		const uintxkdBv15 = await YieldFarmLP2IqNGzF4.harvest.call(uintI267p5U, {from: accounts[1]});

		await expect(YieldFarmLP2IqNGzF4.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2IqNGzF4 = await YieldFarmLP2.new({from: accounts[5]});
		const uintIZ0Llai = BigInt("673")
		const uinti7mACsK = await YieldFarmLP2IqNGzF4.massHarvest.call({from: accounts[1]});
		const uintShkK5XK = await YieldFarmLP2IqNGzF4.harvest.call(uintIZ0Llai, {from: accounts[4]});
		const uintCD5xLT4 = await YieldFarmLP2IqNGzF4.getCurrentEpoch.call({from: accounts[0]});

		await expect(YieldFarmLP2IqNGzF4.massHarvest.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZvhOaOj = await YieldFarmLP2.new({from: accounts[1]});
		const addresszbtBS6w = accounts[5]
		const addressG9LN3d = accounts[0]
		const addressxtLMGhG = accounts[3]
		const addressmcnBHv = accounts[3]
		const uintYIhdDT7 = BigInt("989")
		const addressKhLYRnN = accounts[4]
		const uintws9Q0yr = BigInt("474")
		const addressxUuj94L = accounts[4]
		const addressCI791r9 = "0x0000000000000000000000000000000000000001"
		const addressr2SpOl = accounts[3]
		const addressSAVqec1 = accounts[5]
		const addressNCkHXXy = accounts[2]
		const addressQ8kFsx = accounts[4]
		const addressZDSBNNG = await YieldFarmLP2ZvhOaOj.initialize.call(addressmcnBHv, addressxtLMGhG, addressG9LN3d, addresszbtBS6w, {from: "0x0000000000000000000000000000000000000001"});
		const uintHQtoAAp = await YieldFarmLP2ZvhOaOj.getEpochStake.call(addressKhLYRnN, uintYIhdDT7, {from: accounts[1]});
		const uintB0k7Nw3 = await YieldFarmLP2ZvhOaOj.getEpochStake.call(addressxUuj94L, uintws9Q0yr, {from: accounts[5]});
		const uint1O9sun = await YieldFarmLP2ZvhOaOj.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintmyc1eER = await YieldFarmLP2ZvhOaOj.claimable.call(addressCI791r9, {from: accounts[1]});
		const addressPeq5DML = await YieldFarmLP2ZvhOaOj.initialize.call(addressQ8kFsx, addressNCkHXXy, addressSAVqec1, addressr2SpOl, {from: accounts[4]});

		await expect(YieldFarmLP2ZvhOaOj.initialize.call(addressmcnBHv, addressxtLMGhG, addressG9LN3d, addresszbtBS6w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2IqNGzF4 = await YieldFarmLP2.new({from: accounts[5]});
		const uintpFUt0KZ = BigInt("538")
		const addressRPuw8KV = accounts[1]
		const addressEFMlcsk = accounts[2]
		const addressGf08UBY = accounts[3]
		const uintuIGrpug = BigInt("1232")
		const uintrw5abZ = await YieldFarmLP2IqNGzF4.getEpochStake.call(addressRPuw8KV, uintpFUt0KZ, {from: accounts[5]});
		const uintzE3huG = await YieldFarmLP2IqNGzF4.claimable.call(addressEFMlcsk, {from: accounts[3]});
		const uintXAuu1PJ = await YieldFarmLP2IqNGzF4.claimable.call(addressGf08UBY, {from: accounts[0]});
		const uintPfqanmn = await YieldFarmLP2IqNGzF4.getPoolSize.call(uintuIGrpug, {from: accounts[2]});

		await expect(YieldFarmLP2IqNGzF4.getEpochStake.call(addressRPuw8KV, uintpFUt0KZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2dIYAfjA = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaU2Wr6F = accounts[4]
		const uintXd7xZXs = BigInt("1498")
		const addressnFcafZg = accounts[4]
		const uintswQtQ28 = BigInt("1322")
		const uintd31Cly = await YieldFarmLP2dIYAfjA.claimable.call(addressaU2Wr6F, {from: accounts[2]});
		const uintUpV9nHe = await YieldFarmLP2dIYAfjA.getEpochStake.call(addressnFcafZg, uintXd7xZXs, {from: accounts[1]});
		const uintybHoTUg = await YieldFarmLP2dIYAfjA.getPoolSize.call(uintswQtQ28, {from: accounts[2]});
	});
})