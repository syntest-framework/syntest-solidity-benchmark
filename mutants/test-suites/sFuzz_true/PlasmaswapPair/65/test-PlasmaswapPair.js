const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEivSWq5 = await PlasmaswapPair.new({from: accounts[3]});
		const address6cL3j9 = accounts[5]
		const addressjUMH0mc = accounts[3]
		const byteYLdj2w = "0x070d041b0b0a"
		const addressTTRn5i6 = accounts[1]
		const uintjetgeu = BigInt("1496")
		const uintUXjU5wS = BigInt("13")
		const addressPltIWed = accounts[4]
//		const addressbItCBNo = await PlasmaswapPairEivSWq5.initialize.call(addressjUMH0mc, address6cL3j9, {from: "0x0000000000000000000000000000000000000001"});
//		const uintQyLWmz = await PlasmaswapPairEivSWq5.swap.call(uintUXjU5wS, uintjetgeu, addressTTRn5i6, byteYLdj2w, {from: accounts[3]});
//		const addressiFi4eNU = await PlasmaswapPairEivSWq5.skim.call(addressPltIWed, {from: accounts[4]});
//		const uint112e7papD0 = await PlasmaswapPairEivSWq5.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairEivSWq5.initialize.call(addressjUMH0mc, address6cL3j9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFUkafym = await PlasmaswapPair.new({from: accounts[4]});
		const addressGjJa4s = accounts[4]
		const address79cpRx = accounts[0]
		const bytehMF3Nco = "0x11101a0f1a130f1f"
		const addressO7wpsyi = accounts[5]
		const uintsu0nBSj = BigInt("911")
		const uintUMPZVnf = BigInt("1601")
		const addressotmZ6eF = accounts[2]
		const addressrjD3JTa = accounts[1]
//		const uintzhfSghr = await PlasmaswapPairFUkafym.burn.call(addressGjJa4s, {from: accounts[4]});
//		const uint112K74UK6d = await PlasmaswapPairFUkafym.getReserves.call({from: accounts[3]});
//		const uintcAox8XP = await PlasmaswapPairFUkafym.burn.call(address79cpRx, {from: accounts[1]});
//		const uinttJ5Aeta = await PlasmaswapPairFUkafym.swap.call(uintUMPZVnf, uintsu0nBSj, addressO7wpsyi, bytehMF3Nco, {from: "0x0000000000000000000000000000000000000001"});
//		const address70b8X0 = await PlasmaswapPairFUkafym.initialize.call(addressrjD3JTa, addressotmZ6eF, {from: accounts[4]});

		await expect(PlasmaswapPairFUkafym.burn.call(addressGjJa4s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairGHJgssJ = await PlasmaswapPair.new({from: accounts[1]});
		const byteWSAEiha = "0x1f190119201900"
		const addressvfncedA = accounts[4]
		const uinttJkVuYF = BigInt("1390")
		const uintUnjfn8I = BigInt("987")
//		const uinthdRNaM8 = await PlasmaswapPairGHJgssJ.swap.call(uintUnjfn8I, uinttJkVuYF, addressvfncedA, byteWSAEiha, {from: accounts[4]});
//		await PlasmaswapPairGHJgssJ.sync.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairGHJgssJ.swap.call(uintUnjfn8I, uinttJkVuYF, addressvfncedA, byteWSAEiha, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYrPsdor = await PlasmaswapPair.new({from: accounts[3]});
		const addresswrGAF8G = accounts[4]
		const addressZioHTei = accounts[3]
		const addresssBLGVmj = accounts[0]
		const addressgidgHAW = accounts[0]
//		const uintfg8jm2i = await PlasmaswapPairYrPsdor.mint.call(addresswrGAF8G, {from: accounts[2]});
//		await PlasmaswapPairYrPsdor.sync.call({from: accounts[0]});
//		const uintCblEOnS = await PlasmaswapPairYrPsdor.burn.call(addressZioHTei, {from: accounts[3]});
//		const uint8PRgfj = await PlasmaswapPairYrPsdor.burn.call(addresssBLGVmj, {from: accounts[1]});
//		const uintWxCGke = await PlasmaswapPairYrPsdor.burn.call(addressgidgHAW, {from: accounts[4]});

		await expect(PlasmaswapPairYrPsdor.mint.call(addresswrGAF8G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdtkfg3n = await PlasmaswapPair.new({from: accounts[4]});
		const addressJd7jmdV = "0x0000000000000000000000000000000000000001"
		const addressgFQSATi = "0x0000000000000000000000000000000000000001"
		const addressUd7OdiS = accounts[4]
		const addressb86XSTi = accounts[2]
//		const addressbqH9Xns = await PlasmaswapPairdtkfg3n.skim.call(addressJd7jmdV, {from: accounts[5]});
//		const uintr7OdApv = await PlasmaswapPairdtkfg3n.mint.call(addressgFQSATi, {from: accounts[0]});
//		const uint11276noUH = await PlasmaswapPairdtkfg3n.getReserves.call({from: accounts[1]});
//		const uintH5dfXCm = await PlasmaswapPairdtkfg3n.burn.call(addressUd7OdiS, {from: accounts[1]});
//		const uintxiOtti2 = await PlasmaswapPairdtkfg3n.burn.call(addressb86XSTi, {from: accounts[1]});

		await expect(PlasmaswapPairdtkfg3n.skim.call(addressJd7jmdV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairGHJgssJ = await PlasmaswapPair.new({from: accounts[1]});
		const addressjLqXwhn = accounts[4]
//		await PlasmaswapPairGHJgssJ.sync.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressYeceI8 = await PlasmaswapPairGHJgssJ.skim.call(addressjLqXwhn, {from: accounts[1]});
//		const uint112jiadYOz = await PlasmaswapPairGHJgssJ.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairGHJgssJ.sync.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairRGqr4Wy = await PlasmaswapPair.new({from: accounts[4]});
		const address7VuHmj = accounts[2]
		const addressfPfrOsM = accounts[2]
		const addressGFMfQDW = accounts[3]
		const addressPLRISc = accounts[0]
		const addresswjdue5D = "0x0000000000000000000000000000000000000001"
		const addresskEZcQk0 = accounts[1]
		const addressLIOgkZv = accounts[3]
		const addressHwOSS0R = await PlasmaswapPairRGqr4Wy.initialize.call(addressfPfrOsM, address7VuHmj, {from: accounts[4]});
//		const addressibqg3PB = await PlasmaswapPairRGqr4Wy.skim.call(addressGFMfQDW, {from: accounts[3]});
//		const uintymH1fM4 = await PlasmaswapPairRGqr4Wy.mint.call(addressPLRISc, {from: accounts[2]});
//		const addressgnnAOOq = await PlasmaswapPairRGqr4Wy.initialize.call(addresskEZcQk0, addresswjdue5D, {from: accounts[3]});
//		await PlasmaswapPairRGqr4Wy.lock.call({from: accounts[5]});
//		const addressbtWBj97 = await PlasmaswapPairRGqr4Wy.skim.call(addressLIOgkZv, {from: accounts[0]});

		await expect(PlasmaswapPairRGqr4Wy.skim.call(addressGFMfQDW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJ7waVNH = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const address75fwfk = accounts[4]
		const addressTfGTFdg = accounts[5]
		const addressZOZfEhp = accounts[4]
		const uintHpsyyxE = await PlasmaswapPairJ7waVNH.burn.call(address75fwfk, {from: accounts[4]});
		const addressem5SZve = await PlasmaswapPairJ7waVNH.initialize.call(addressZOZfEhp, addressTfGTFdg, {from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairGHJgssJ = await PlasmaswapPair.new({from: accounts[1]});
//		await PlasmaswapPairGHJgssJ.lock.call({from: accounts[3]});
		await PlasmaswapPairGHJgssJ.lock.call({from: accounts[3]});
//		await PlasmaswapPairGHJgssJ.sync.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairGHJgssJ.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})