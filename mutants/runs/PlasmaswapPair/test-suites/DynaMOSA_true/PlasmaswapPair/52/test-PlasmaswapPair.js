const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwKnmJua = await PlasmaswapPair.new({from: accounts[4]});
		const byteeN6dlFk = "0x161b080c10"
		const addressq7tj34m = "0x0000000000000000000000000000000000000001"
		const uintN446dnS = BigInt("1705")
		const uintImqFo2J = BigInt("748")
		const addresshwyQhW = accounts[1]
		const uint112nZFbFQW = await PlasmaswapPairwKnmJua.getReserves.call({from: accounts[2]});
		const uintxKuWwHD = await PlasmaswapPairwKnmJua.swap.call(uintImqFo2J, uintN446dnS, addressq7tj34m, byteeN6dlFk, {from: accounts[3]});
		const uintVcmpAuQ = await PlasmaswapPairwKnmJua.burn.call(addresshwyQhW, {from: accounts[1]});

		await expect(PlasmaswapPairwKnmJua.swap.call(uintImqFo2J, uintN446dnS, addressq7tj34m, byteeN6dlFk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairO2nHNVp = await PlasmaswapPair.new({from: accounts[2]});
		const addressjHdt5T = accounts[4]
		const addressAlcxsJk = accounts[1]
		const addressfV8EGLR = accounts[0]
		const addressCElWVkV = await PlasmaswapPairO2nHNVp.skim.call(addressjHdt5T, {from: accounts[2]});
		const addressfSM0qKx = await PlasmaswapPairO2nHNVp.initialize.call(addressfV8EGLR, addressAlcxsJk, {from: accounts[3]});
		const uint112FwB11K = await PlasmaswapPairO2nHNVp.getReserves.call({from: accounts[3]});

		await expect(PlasmaswapPairO2nHNVp.skim.call(addressjHdt5T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEca0Qgj = await PlasmaswapPair.new({from: accounts[2]});
		const addresst6wsbcw = accounts[5]
		const addressBifO0M7 = accounts[2]
		const uinteepwInc = await PlasmaswapPairEca0Qgj.burn.call(addresst6wsbcw, {from: accounts[2]});
		const uint112e1hv4xE = await PlasmaswapPairEca0Qgj.getReserves.call({from: accounts[3]});
		const addresseRaV7Uw = await PlasmaswapPairEca0Qgj.skim.call(addressBifO0M7, {from: accounts[4]});
		await PlasmaswapPairEca0Qgj.sync.call({from: accounts[0]});

		await expect(PlasmaswapPairEca0Qgj.burn.call(addresst6wsbcw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaira0RrtI5 = await PlasmaswapPair.new({from: accounts[1]});
		const addressEEjfp4C = accounts[3]
		await PlasmaswapPaira0RrtI5.sync.call({from: accounts[2]});
		const uintI1F91T1 = await PlasmaswapPaira0RrtI5.burn.call(addressEEjfp4C, {from: accounts[4]});

		await expect(PlasmaswapPaira0RrtI5.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJoyA2e6 = await PlasmaswapPair.new({from: accounts[4]});
		const addressDu5Ed1d = accounts[4]
		const address9ZQllM = accounts[0]
		const addressh3iqyJZ = accounts[3]
		const uintfNYFRWH = await PlasmaswapPairJoyA2e6.mint.call(addressDu5Ed1d, {from: accounts[3]});
		const uintfG6gzss = await PlasmaswapPairJoyA2e6.mint.call(address9ZQllM, {from: accounts[3]});
		const uintpd1o5Tq = await PlasmaswapPairJoyA2e6.mint.call(addressh3iqyJZ, {from: accounts[1]});

		await expect(PlasmaswapPairJoyA2e6.mint.call(addressDu5Ed1d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairunIWipn = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressitj8ch = "0x0000000000000000000000000000000000000001"
		const address3kYr6t = accounts[2]
		await PlasmaswapPairunIWipn.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintJpUhDDt = await PlasmaswapPairunIWipn.mint.call(addressitj8ch, {from: accounts[3]});
		const addressEnQnaHG = await PlasmaswapPairunIWipn.skim.call(address3kYr6t, {from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhuDHRlX = await PlasmaswapPair.new({from: accounts[2]});
		const addresskoiLJf6 = accounts[2]
		const addressRQWYwsc = accounts[4]
		const addresswKD44W = accounts[4]
		const uint112rp5YMXg = await PlasmaswapPairhuDHRlX.getReserves.call({from: accounts[3]});
		const uint112x12sP05 = await PlasmaswapPairhuDHRlX.getReserves.call({from: accounts[2]});
		const addressadIazME = await PlasmaswapPairhuDHRlX.initialize.call(addressRQWYwsc, addresskoiLJf6, {from: accounts[4]});
		const addressgHlEFXI = await PlasmaswapPairhuDHRlX.skim.call(addresswKD44W, {from: accounts[5]});

		await expect(PlasmaswapPairhuDHRlX.initialize.call(addressRQWYwsc, addresskoiLJf6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwKnmJua = await PlasmaswapPair.new({from: accounts[4]});
		const addressAJPOQrK = accounts[1]
		const addressf0dRIe1 = accounts[0]
		const addressQqR9Jz = accounts[0]
		const addressxXwKZiE = accounts[1]
		const uint112nZFbFQW = await PlasmaswapPairwKnmJua.getReserves.call({from: accounts[2]});
		const addressFKAnnYO = await PlasmaswapPairwKnmJua.initialize.call(addressf0dRIe1, addressAJPOQrK, {from: accounts[4]});
		const addressZKO0YkT = await PlasmaswapPairwKnmJua.initialize.call(addressxXwKZiE, addressQqR9Jz, {from: accounts[3]});
		await PlasmaswapPairwKnmJua.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairwKnmJua.initialize.call(addressxXwKZiE, addressQqR9Jz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwKnmJua = await PlasmaswapPair.new({from: accounts[4]});
		const addressFik2lWB = accounts[2]
		const addressfm0RdWr = accounts[0]
		const byteOg21Sz8 = "0x16111d19001e0c"
		const addressrNRvAir = accounts[3]
		const uintbEEHOt = BigInt("1471")
		const uintqMeIeB2 = BigInt("584")
		const addresso8b1SMa = accounts[2]
		await PlasmaswapPairwKnmJua.lock.call({from: accounts[2]});
		const uint112nZFbFQW = await PlasmaswapPairwKnmJua.getReserves.call({from: accounts[2]});
		const uint112XwTKN4L = await PlasmaswapPairwKnmJua.getReserves.call({from: accounts[2]});
		const addressgRMvCcS = await PlasmaswapPairwKnmJua.initialize.call(addressfm0RdWr, addressFik2lWB, {from: accounts[4]});
		const uintCSAjXkv = await PlasmaswapPairwKnmJua.swap.call(uintqMeIeB2, uintbEEHOt, addressrNRvAir, byteOg21Sz8, {from: "0x0000000000000000000000000000000000000001"});
		const uintVcmpAuQ = await PlasmaswapPairwKnmJua.burn.call(addresso8b1SMa, {from: accounts[1]});

		await expect(PlasmaswapPairwKnmJua.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})