const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZhbbEDa = await PlasmaswapPair.new({from: accounts[0]});
		const addressrMQkBvD = accounts[4]
		await PlasmaswapPairZhbbEDa.lock.call({from: accounts[5]});
		const uintdj9acGD = await PlasmaswapPairZhbbEDa.burn.call(addressrMQkBvD, {from: accounts[5]});
		await PlasmaswapPairZhbbEDa.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairZhbbEDa.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairOXtP8r = await PlasmaswapPair.new({from: accounts[4]});
		const byteYODmD4F = "0x0b0a0d05031f091c011d14090117090c0a0a191e0f171c1f090c130604"
		const addressP5Ikq02 = accounts[5]
		const uintLQdtXQw = BigInt("1687")
		const uinto383yyz = BigInt("602")
		const addresstVomaCF = accounts[4]
		const addressoUh6Iho = accounts[3]
		const uintoxj6vE8 = await PlasmaswapPairOXtP8r.swap.call(uinto383yyz, uintLQdtXQw, addressP5Ikq02, byteYODmD4F, {from: accounts[0]});
		const addresswSbuQkH = await PlasmaswapPairOXtP8r.initialize.call(addressoUh6Iho, addresstVomaCF, {from: accounts[1]});

		await expect(PlasmaswapPairOXtP8r.swap.call(uinto383yyz, uintLQdtXQw, addressP5Ikq02, byteYODmD4F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEMVIoKU = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUJYjP1K = accounts[0]
		const addressDRfZlRo = accounts[1]
		const addressCJpeZA4 = accounts[4]
		const uintAwe6G6G = await PlasmaswapPairEMVIoKU.mint.call(addressUJYjP1K, {from: accounts[1]});
		await PlasmaswapPairEMVIoKU.sync.call({from: accounts[1]});
		const addressM8QXweG = await PlasmaswapPairEMVIoKU.skim.call(addressDRfZlRo, {from: accounts[0]});
		const uintnlRpZdd = await PlasmaswapPairEMVIoKU.burn.call(addressCJpeZA4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEmmbufI = await PlasmaswapPair.new({from: accounts[0]});
		const addressloom6uA = accounts[2]
		const addressrV6zng = accounts[4]
		const addressJ7iUbHx = await PlasmaswapPairEmmbufI.skim.call(addressloom6uA, {from: accounts[4]});
		const uintNdouJR = await PlasmaswapPairEmmbufI.burn.call(addressrV6zng, {from: accounts[3]});
		const uint112w9rQGti = await PlasmaswapPairEmmbufI.getReserves.call({from: accounts[0]});

		await expect(PlasmaswapPairEmmbufI.skim.call(addressloom6uA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairTr5h8OR = await PlasmaswapPair.new({from: accounts[4]});
		const addressZrTV0Io = accounts[3]
		const addressp9OlZ5L = accounts[3]
		const addresswPHruwY = accounts[5]
		const addressajNDGmn = "0x0000000000000000000000000000000000000001"
		const addressoRZLwW5 = await PlasmaswapPairTr5h8OR.initialize.call(addressp9OlZ5L, addressZrTV0Io, {from: accounts[0]});
		const uintpDZFTl5 = await PlasmaswapPairTr5h8OR.burn.call(addresswPHruwY, {from: accounts[2]});
		const addressrDeui1 = await PlasmaswapPairTr5h8OR.skim.call(addressajNDGmn, {from: accounts[3]});

		await expect(PlasmaswapPairTr5h8OR.initialize.call(addressp9OlZ5L, addressZrTV0Io, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairi6KARaD = await PlasmaswapPair.new({from: accounts[2]});
		const addressKLInFOW = accounts[4]
		const addressrCwInYC = accounts[0]
		const uinttMq93Nh = await PlasmaswapPairi6KARaD.mint.call(addressKLInFOW, {from: accounts[2]});
		const uint112lQUBUWp = await PlasmaswapPairi6KARaD.getReserves.call({from: accounts[2]});
		await PlasmaswapPairi6KARaD.sync.call({from: accounts[5]});
		const uintRsSJxrY = await PlasmaswapPairi6KARaD.mint.call(addressrCwInYC, {from: accounts[4]});
		const uint112JNa7C8z = await PlasmaswapPairi6KARaD.getReserves.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairi6KARaD.mint.call(addressKLInFOW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZhbbEDa = await PlasmaswapPair.new({from: accounts[0]});
		const addressPaUSphY = accounts[5]
		const uintdj9acGD = await PlasmaswapPairZhbbEDa.burn.call(addressPaUSphY, {from: accounts[5]});
		await PlasmaswapPairZhbbEDa.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairZhbbEDa.burn.call(addressPaUSphY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdROKFo = await PlasmaswapPair.new({from: accounts[2]});
		const addresshX5zE5 = accounts[5]
		const addressdi6Vk28 = accounts[3]
		const addressH80uOG = accounts[4]
		const addressq7F9Q2p = accounts[1]
		const addressVByZW2k = accounts[4]
		const addresskFiSn92 = accounts[5]
		const addressUCHEMn = await PlasmaswapPairdROKFo.initialize.call(addressdi6Vk28, addresshX5zE5, {from: accounts[2]});
		const uintXtLEZrm = await PlasmaswapPairdROKFo.burn.call(addressH80uOG, {from: accounts[0]});
		const addressec2itJ7 = await PlasmaswapPairdROKFo.initialize.call(addressVByZW2k, addressq7F9Q2p, {from: accounts[1]});
		const uintunSEyg = await PlasmaswapPairdROKFo.mint.call(addresskFiSn92, {from: accounts[5]});

		await expect(PlasmaswapPairdROKFo.burn.call(addressH80uOG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairtzQeED = await PlasmaswapPair.new({from: accounts[2]});
		const addressyOFDDz = accounts[0]
		const addressId7VAbD = accounts[3]
		const bytePNilajh = "0x0a0b1e"
		const addressMrVn6Tq = accounts[5]
		const uintTKJGETx = BigInt("1375")
		const uintTudh3s = BigInt("177")
		const addressfcvX58B = accounts[2]
		const addressKfXFmpz = accounts[3]
		const addressUHhWXRT = accounts[4]
		const addresstLvRC8l = accounts[5]
		const byteBBlDoPM = "0x14141f02100e0c0807051f081d0f011103080605011905"
		const addressetCNJOC = accounts[3]
		const uintUyVG3Q7 = BigInt("1129")
		const uintaZTMw4u = BigInt("322")
		const addressDxEOx4T = accounts[2]
		await PlasmaswapPairtzQeED.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintJHNR636 = await PlasmaswapPairtzQeED.burn.call(addressyOFDDz, {from: accounts[3]});
		const uintKaRFqh = await PlasmaswapPairtzQeED.mint.call(addressId7VAbD, {from: accounts[2]});
		const uinth7QtVD = await PlasmaswapPairtzQeED.swap.call(uintTudh3s, uintTKJGETx, addressMrVn6Tq, bytePNilajh, {from: accounts[1]});
		const uintG4JjyvR = await PlasmaswapPairtzQeED.burn.call(addressfcvX58B, {from: accounts[2]});
		const addressPFYaPOO = await PlasmaswapPairtzQeED.skim.call(addressKfXFmpz, {from: "0x0000000000000000000000000000000000000001"});
		const uintkWrGOsC = await PlasmaswapPairtzQeED.mint.call(addressUHhWXRT, {from: accounts[1]});
		const addressvCrf8e = await PlasmaswapPairtzQeED.skim.call(addresstLvRC8l, {from: accounts[2]});
		const uintxFIf6ds = await PlasmaswapPairtzQeED.swap.call(uintaZTMw4u, uintUyVG3Q7, addressetCNJOC, byteBBlDoPM, {from: accounts[4]});
		const uintN1KFXY8 = await PlasmaswapPairtzQeED.mint.call(addressDxEOx4T, {from: accounts[1]});
		const uint1121ts5RA = await PlasmaswapPairtzQeED.getReserves.call({from: accounts[5]});

		await expect(PlasmaswapPairtzQeED.sync.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairaLku7H = await PlasmaswapPair.new({from: accounts[2]});
		const addressLAsgSwI = "0x00000000000000000000000000000000000000-1"
		const addresst1n3BqA = accounts[4]
		const uintmo1txJO = await PlasmaswapPairaLku7H.mint.call(addressLAsgSwI, {from: accounts[2]});
		const uinttCoXAvc = await PlasmaswapPairaLku7H.burn.call(addresst1n3BqA, {from: accounts[4]});

		await expect(PlasmaswapPairaLku7H.mint.call(addressLAsgSwI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})