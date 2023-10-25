const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWvJEk44 = BigInt("1400")
		const BancorV2_ZapIn_General_V1_1e92GTkd = await BancorV2_ZapIn_General_V1_1.new(uintWvJEk44, {from: accounts[0]});
		const addresseqGj35M = accounts[3]
		const addressiOHNOSd = accounts[1]
//		const addresst5ntiv9 = await BancorV2_ZapIn_General_V1_1e92GTkd.toPayable.call(addresseqGj35M, {from: accounts[2]});
//		const addressX9B9oYd = await BancorV2_ZapIn_General_V1_1e92GTkd.transferOwnership.call(addressiOHNOSd, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1e92GTkd.renounceOwnership.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1e92GTkd.toPayable.call(addresseqGj35M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinteIzeG1O = BigInt("563")
		const BancorV2_ZapIn_General_V1_1qV8zlP9 = await BancorV2_ZapIn_General_V1_1.new(uinteIzeG1O, {from: accounts[3]});
		const byteropSxtV = "0x09071320011502051a011a"
		const addressXtFoUz2 = accounts[2]
		const addresshHjX4g1 = accounts[1]
		const uinttlfs3c = BigInt("71")
		const uint7FTQOe = BigInt("1982")
		const addressVAONoFv = accounts[3]
		const addressMUu2N6n = accounts[2]
		const addressTqydEXC = accounts[0]
//		await BancorV2_ZapIn_General_V1_1qV8zlP9.toggleContractActive.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1qV8zlP9.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1qV8zlP9.renounceOwnership.call({from: accounts[1]});
//		const uint256PDinjcM = await BancorV2_ZapIn_General_V1_1qV8zlP9.ZapInSingleSided.call(addressTqydEXC, addressMUu2N6n, addressVAONoFv, uint7FTQOe, uinttlfs3c, addresshHjX4g1, addressXtFoUz2, byteropSxtV, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1qV8zlP9.toggleContractActive.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJwUaaet = BigInt("1071")
		const BancorV2_ZapIn_General_V1_1tyvnxMY = await BancorV2_ZapIn_General_V1_1.new(uintJwUaaet, {from: accounts[4]});
		const addressBxgQQH5 = accounts[3]
//		const addressQagTmWE = await BancorV2_ZapIn_General_V1_1tyvnxMY.inCaseTokengetsStuck.call(addressBxgQQH5, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1tyvnxMY.nonReentrant.call({from: accounts[2]});
//		const addressn2Q8KMj = await BancorV2_ZapIn_General_V1_1tyvnxMY.owner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1tyvnxMY.inCaseTokengetsStuck.call(addressBxgQQH5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZmuV2O5 = BigInt("1024")
		const BancorV2_ZapIn_General_V1_1ZFvjHG = await BancorV2_ZapIn_General_V1_1.new(uintZmuV2O5, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1ZFvjHG.toggleContractActive.call({from: accounts[2]});
//		const boolaUq3I3J = await BancorV2_ZapIn_General_V1_1ZFvjHG.isOwner.call({from: accounts[5]});
//		const addressHBaevj9 = await BancorV2_ZapIn_General_V1_1ZFvjHG.owner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1ZFvjHG.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintw87spPe = BigInt("153")
		const BancorV2_ZapIn_General_V1_1EENma4j = await BancorV2_ZapIn_General_V1_1.new(uintw87spPe, {from: accounts[3]});
		const bytepY8wjnu = "0x1b12091508050b001d0a"
		const addressgYWigK = accounts[0]
		const addressRsPUJl = accounts[4]
		const uintHYPSw6H = BigInt("1722")
		const uintn6FcnP4 = BigInt("554")
		const addresshH8JkNZ = accounts[0]
		const addressPuV4KF = accounts[4]
		const addressVC0YTG = accounts[0]
		const bytemGs6h4J = "0x08010a1f0d100d0a1d07020b040e09121b0e"
		const addresslZsbyls = accounts[1]
		const addressuBSOKa2 = accounts[1]
		const uintkS1onyk = BigInt("1462")
		const uinth5X7LDf = BigInt("1510")
		const addressfjeaCJG = accounts[3]
		const addressEktxFIf = accounts[2]
		const addressAD6y2vU = accounts[2]
		const addressgoWDRH = accounts[0]
		const bytebJTI2B2 = "0x1f041c0412191a160806031d0a1c1209131f1613141218"
		const addressnWfj4ua = accounts[1]
		const addressBwN2kLp = accounts[0]
		const uintC24TW5I = BigInt("516")
		const uintUyuJlMh = BigInt("1909")
		const addressBvlftQ2 = accounts[1]
		const addressUW4Ywl9 = accounts[3]
		const addressqaefJLj = accounts[4]
		const uintGFVGqsf = BigInt("590")
//		const uint256Z5Sj4z = await BancorV2_ZapIn_General_V1_1EENma4j.ZapInSingleSided.call(addressVC0YTG, addressPuV4KF, addresshH8JkNZ, uintn6FcnP4, uintHYPSw6H, addressRsPUJl, addressgYWigK, bytepY8wjnu, {from: accounts[5]});
//		const uint256aOWPpC3 = await BancorV2_ZapIn_General_V1_1EENma4j.ZapInSingleSided.call(addressAD6y2vU, addressEktxFIf, addressfjeaCJG, uinth5X7LDf, uintkS1onyk, addressuBSOKa2, addresslZsbyls, bytemGs6h4J, {from: accounts[4]});
//		const addressFPDE0e8 = await BancorV2_ZapIn_General_V1_1EENma4j.toPayable.call(addressgoWDRH, {from: accounts[1]});
//		const uint256RwkJwn3 = await BancorV2_ZapIn_General_V1_1EENma4j.ZapInSingleSided.call(addressqaefJLj, addressUW4Ywl9, addressBvlftQ2, uintUyuJlMh, uintC24TW5I, addressBwN2kLp, addressnWfj4ua, bytebJTI2B2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint16uzmOLJl = await BancorV2_ZapIn_General_V1_1EENma4j.set_new_goodwill.call(uintGFVGqsf, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1EENma4j.ZapInSingleSided.call(addressVC0YTG, addressPuV4KF, addresshH8JkNZ, uintn6FcnP4, uintHYPSw6H, addressRsPUJl, addressgYWigK, bytepY8wjnu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintBa8rV5T = BigInt("240")
		const BancorV2_ZapIn_General_V1_1xds0vg8 = await BancorV2_ZapIn_General_V1_1.new(uintBa8rV5T, {from: "0x0000000000000000000000000000000000000001"});
		const addressJqMHLw9 = accounts[5]
		const addresscSPTPEZ = accounts[2]
		const addressP6AjWn2 = await BancorV2_ZapIn_General_V1_1xds0vg8.transferOwnership.call(addressJqMHLw9, {from: accounts[1]});
		const addressGiBYRHw = await BancorV2_ZapIn_General_V1_1xds0vg8.toPayable.call(addresscSPTPEZ, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1xds0vg8.onlyOwner.call({from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinta8OPvuP = BigInt("1742")
		const BancorV2_ZapIn_General_V1_1rEvlITH = await BancorV2_ZapIn_General_V1_1.new(uinta8OPvuP, {from: accounts[1]});
		const addressmJyvq3l = "0x0000000000000000000000000000000000000001"
		const addressCZlffdV = accounts[5]
		const addressaTFJhvh = await BancorV2_ZapIn_General_V1_1rEvlITH.transferOwnership.call(addressmJyvq3l, {from: accounts[1]});
//		const addressCPs4qjZ = await BancorV2_ZapIn_General_V1_1rEvlITH.inCaseTokengetsStuck.call(addressCZlffdV, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1rEvlITH.onlyOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1rEvlITH.renounceOwnership.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1rEvlITH.inCaseTokengetsStuck.call(addressCZlffdV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintV0EO4Y = BigInt("973")
		const BancorV2_ZapIn_General_V1_1nVgcN9E = await BancorV2_ZapIn_General_V1_1.new(uintV0EO4Y, {from: accounts[1]});
		const addressb0JYt6z = accounts[3]
		const byteYp5BOPn = "0x09011f11031f0c"
		const address4oPOwl = "0x0000000000000000000000000000000000000001"
		const addressqlqgdKY = accounts[0]
		const uintOezswF = BigInt("1407")
		const uintEaedh0l = BigInt("1509")
		const addressMZCR4Kf = accounts[2]
		const addressDswiYj7 = accounts[0]
		const addressZM2S3FQ = accounts[2]
		const addressXUA7nF = accounts[2]
		const addressV1ACrM4 = await BancorV2_ZapIn_General_V1_1nVgcN9E.owner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1nVgcN9E.renounceOwnership.call({from: accounts[1]});
//		const addressaB9XT8v = await BancorV2_ZapIn_General_V1_1nVgcN9E.inCaseTokengetsStuck.call(addressb0JYt6z, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256E1TP2vy = await BancorV2_ZapIn_General_V1_1nVgcN9E.ZapInSingleSided.call(addressZM2S3FQ, addressDswiYj7, addressMZCR4Kf, uintEaedh0l, uintOezswF, addressqlqgdKY, address4oPOwl, byteYp5BOPn, {from: accounts[1]});
//		const addressGWTIWup = await BancorV2_ZapIn_General_V1_1nVgcN9E.transferOwnership.call(addressXUA7nF, {from: accounts[2]});

		assert.equal(addressV1ACrM4, 0x2D6b9cDb5130ddF8c4Ee6B28b32F1413D6C679eb)
		await expect(BancorV2_ZapIn_General_V1_1nVgcN9E.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})