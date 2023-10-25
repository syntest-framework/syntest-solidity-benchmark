const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinWvJEk44 = await MetaCoin.new({from: accounts[3]});
		const uintkxiU1BQ = BigInt("43")
		const addressrvToH0 = "0x0000000000000000000000000000000000000001"
		const uintU0y0KWm = BigInt("45")
		const addresszB9oYdI = accounts[2]
		const uintsmOh8qB = BigInt("1549")
		const addressf5yUSWZ = accounts[4]
		const boolMMKMI9 = await MetaCoinWvJEk44.sendCoin.call(addressrvToH0, uintkxiU1BQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolioqGj35 = await MetaCoinWvJEk44.sendCoin.call(addresszB9oYdI, uintU0y0KWm, {from: accounts[0]});
		const boolJIsQ0JH = await MetaCoinWvJEk44.sendCoin.call(addressf5yUSWZ, uintsmOh8qB, {from: accounts[2]});

		assert.equal(boolJIsQ0JH, false)
		assert.equal(boolMMKMI9, false)
		assert.equal(boolioqGj35, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinhIdqydE = await MetaCoin.new({from: accounts[1]});
		const uintn2Q8KMj = BigInt("637")
		const addressNMX8vML = accounts[5]
		const uintM3Ujnno = BigInt("639")
		const addressulJXId4 = accounts[5]
		const uinths489sa = BigInt("1143")
		const addressjFHgEkK = accounts[4]
		const uintZHbkt6s = BigInt("572")
		const addressChcUdoe = accounts[2]
		const uintJSNk9Co = BigInt("156")
		const addressXtFoUz2 = accounts[2]
		const uint7FTQOe = BigInt("1982")
		const addressVAONoFv = accounts[3]
		const boolp8pD1U = await MetaCoinhIdqydE.sendCoin.call(addressNMX8vML, uintn2Q8KMj, {from: accounts[0]});
		const boolmUaaetg = await MetaCoinhIdqydE.sendCoin.call(addressulJXId4, uintM3Ujnno, {from: accounts[4]});
		const boolan6Z300 = await MetaCoinhIdqydE.sendCoin.call(addressjFHgEkK, uinths489sa, {from: accounts[2]});
		const boolGaWjaZw = await MetaCoinhIdqydE.sendCoin.call(addressChcUdoe, uintZHbkt6s, {from: accounts[4]});
		const boolAxBy1op = await MetaCoinhIdqydE.sendCoin.call(addressXtFoUz2, uintJSNk9Co, {from: accounts[1]});
		const booltlfs3c = await MetaCoinhIdqydE.sendCoin.call(addressVAONoFv, uint7FTQOe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAxBy1op, true)
		assert.equal(boolGaWjaZw, false)
		assert.equal(boolan6Z300, false)
		assert.equal(boolmUaaetg, false)
		assert.equal(boolp8pD1U, false)
		assert.equal(booltlfs3c, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinibylsiO = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHsPUJlO = BigInt("52")
		const addressIw6H01J = accounts[1]
		const uintFuV4KFK = BigInt("1435")
		const address0YTGuH = accounts[1]
		const uints6h4Jk = BigInt("471")
		const addressaQj0bw = accounts[1]
		const boolWYWigKR = await MetaCoinibylsiO.sendCoin.call(addressIw6H01J, uintHsPUJlO, {from: accounts[4]});
		const bool8JkNZx = await MetaCoinibylsiO.sendCoin.call(address0YTGuH, uintFuV4KFK, {from: accounts[5]});
		const boolMPpC3zf = await MetaCoinibylsiO.sendCoin.call(addressaQj0bw, uints6h4Jk, {from: accounts[1]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinPQiBYRH = await MetaCoin.new({from: accounts[4]});
		const uintpaik0T7 = BigInt("2011")
		const addressTROMOvQ = accounts[0]
		const uintFCtyPG = BigInt("1539")
		const addressWCAbWM = accounts[3]
		const uintPYbT6l6 = BigInt("0")
		const addresszmaRb7H = accounts[3]
		const uinteHNQgq9 = BigInt("281")
		const addressEdb5Gtn = accounts[1]
		const uintSNeFpD = BigInt("819")
		const addressqbmsBQu = accounts[5]
		const boolhoQtngr = await MetaCoinPQiBYRH.sendCoin.call(addressTROMOvQ, uintpaik0T7, {from: accounts[4]});
		const boolkcds9j = await MetaCoinPQiBYRH.sendCoin.call(addressWCAbWM, uintFCtyPG, {from: accounts[4]});
		const boolwbCtiJW = await MetaCoinPQiBYRH.sendCoin.call(addresszmaRb7H, uintPYbT6l6, {from: accounts[4]});
		const boolks6Ik57 = await MetaCoinPQiBYRH.sendCoin.call(addressEdb5Gtn, uinteHNQgq9, {from: accounts[1]});
		const booltWtumXd = await MetaCoinPQiBYRH.sendCoin.call(addressqbmsBQu, uintSNeFpD, {from: accounts[3]});

		assert.equal(boolhoQtngr, true)
		assert.equal(boolkcds9j, true)
		assert.equal(boolks6Ik57, false)
		assert.equal(booltWtumXd, false)
		assert.equal(boolwbCtiJW, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinPQiBYRH = await MetaCoin.new({from: accounts[4]});
		const uintuQH1Eie = BigInt("3243")
		const addressxHURISp = accounts[10]
		const uinteBKWOlK = BigInt("331")
		const addressYN1xr4S = accounts[3]
		const boola93MMrw = await MetaCoinPQiBYRH.sendCoin.call(addressxHURISp, uintuQH1Eie, {from: accounts[4]});
		const booltBlRCR1 = await MetaCoinPQiBYRH.sendCoin.call(addressYN1xr4S, uinteBKWOlK, {from: accounts[1]});

		await expect(MetaCoinPQiBYRH.sendCoin.call(addressxHURISp, uintuQH1Eie, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})