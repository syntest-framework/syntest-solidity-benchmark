const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairmgHIsy = await PlasmaswapPair.new({from: accounts[0]});
		const addressXiLf2bI = accounts[1]
		const addressbnVvVyB = accounts[1]
		const uint112hU8Z3r7 = await PlasmaswapPairmgHIsy.getReserves.call({from: accounts[2]});
		const uintohnKblP = await PlasmaswapPairmgHIsy.mint.call(addressXiLf2bI, {from: accounts[1]});
		const uintVPXtmX = await PlasmaswapPairmgHIsy.mint.call(addressbnVvVyB, {from: accounts[3]});

		await expect(PlasmaswapPairmgHIsy.mint.call(addressXiLf2bI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairyYL0TU9 = await PlasmaswapPair.new({from: accounts[4]});
		const addressAxD4iX = accounts[3]
		const addressUCHZvta = accounts[2]
		const address6DnxQe = accounts[0]
		const addressLInPQL = accounts[3]
		const addressRpucjPh = accounts[5]
		const addressIhWVGcX = await PlasmaswapPairyYL0TU9.skim.call(addressAxD4iX, {from: accounts[4]});
		const uint112RcsjADk = await PlasmaswapPairyYL0TU9.getReserves.call({from: accounts[2]});
		const uintH1p22yF = await PlasmaswapPairyYL0TU9.burn.call(addressUCHZvta, {from: accounts[3]});
		const addresstsgxkwH = await PlasmaswapPairyYL0TU9.initialize.call(addressLInPQL, address6DnxQe, {from: "0x0000000000000000000000000000000000000001"});
		const uint112Hm4165O = await PlasmaswapPairyYL0TU9.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNy2L8UA = await PlasmaswapPairyYL0TU9.mint.call(addressRpucjPh, {from: accounts[0]});

		await expect(PlasmaswapPairyYL0TU9.skim.call(addressAxD4iX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaircGeIaXE = await PlasmaswapPair.new({from: accounts[1]});
		const addresse6Tkwp = accounts[3]
		const addressnCDHCrS = accounts[4]
		const addressSDAzxFp = accounts[1]
		const byteyyIJg0G = "0x0d0e0d072019031e1f081d1001010d1d0f1802171a110e"
		const addressYS0qzwR = accounts[5]
		const uintrGn0NB = BigInt("319")
		const uintGjZWune = BigInt("2029")
		const addressHLJGHgo = await PlasmaswapPaircGeIaXE.initialize.call(addressnCDHCrS, addresse6Tkwp, {from: accounts[5]});
		const addressdNpgKY9 = await PlasmaswapPaircGeIaXE.skim.call(addressSDAzxFp, {from: accounts[0]});
		const uintc9EWgQK = await PlasmaswapPaircGeIaXE.swap.call(uintGjZWune, uintrGn0NB, addressYS0qzwR, byteyyIJg0G, {from: accounts[4]});

		await expect(PlasmaswapPaircGeIaXE.initialize.call(addressnCDHCrS, addresse6Tkwp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairuwptYIe = await PlasmaswapPair.new({from: accounts[1]});
		const byteVDRofeS = "0x0d1f01100a1b191d160e0420"
		const addressDXkkrVu = accounts[5]
		const uintxcQptq = BigInt("656")
		const uintsHhJcUw = BigInt("1426")
		const addressEWSSucY = accounts[2]
		const addressRj2PHHJ = accounts[4]
		const addressprN4zi3 = accounts[1]
		const uintv0VkT2b = await PlasmaswapPairuwptYIe.swap.call(uintsHhJcUw, uintxcQptq, addressDXkkrVu, byteVDRofeS, {from: "0x0000000000000000000000000000000000000001"});
		const uintCevUvm = await PlasmaswapPairuwptYIe.burn.call(addressEWSSucY, {from: accounts[2]});
		const addressO8nptSe = await PlasmaswapPairuwptYIe.initialize.call(addressprN4zi3, addressRj2PHHJ, {from: accounts[0]});

		await expect(PlasmaswapPairuwptYIe.swap.call(uintsHhJcUw, uintxcQptq, addressDXkkrVu, byteVDRofeS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairo4ZC3v = await PlasmaswapPair.new({from: accounts[5]});
		const addresswwBmQUs = accounts[3]
		const addressWcQYTIE = accounts[0]
		const bytetguWykz = "0x08110219050009160d19180d"
		const addressazpbIbv = "0x0000000000000000000000000000000000000001"
		const uintPYNnPjJ = BigInt("356")
		const uintDtKQ14w = BigInt("829")
		const uint112ijrMEN9 = await PlasmaswapPairo4ZC3v.getReserves.call({from: accounts[2]});
		const addressiK20OKK = await PlasmaswapPairo4ZC3v.initialize.call(addressWcQYTIE, addresswwBmQUs, {from: accounts[5]});
		await PlasmaswapPairo4ZC3v.sync.call({from: accounts[4]});
		const uintNZfiIqJ = await PlasmaswapPairo4ZC3v.swap.call(uintDtKQ14w, uintPYNnPjJ, addressazpbIbv, bytetguWykz, {from: accounts[1]});
		await PlasmaswapPairo4ZC3v.lock.call({from: accounts[2]});

		await expect(PlasmaswapPairo4ZC3v.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairDbJ8CX = await PlasmaswapPair.new({from: accounts[0]});
		const addressNQ6yy5w = accounts[2]
		const addressQbhhPq2 = accounts[0]
		const addressVMCDCH = accounts[2]
		const uint112IcTWWjx = await PlasmaswapPairDbJ8CX.getReserves.call({from: accounts[5]});
		const uintiXSs9vz = await PlasmaswapPairDbJ8CX.burn.call(addressNQ6yy5w, {from: accounts[0]});
		const addressAlC7Qsu = await PlasmaswapPairDbJ8CX.initialize.call(addressVMCDCH, addressQbhhPq2, {from: accounts[5]});

		await expect(PlasmaswapPairDbJ8CX.burn.call(addressNQ6yy5w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairCOPwFG0 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswvjPYrn = accounts[3]
		const addressEETGG8y = accounts[3]
		const uint2TuzL0 = await PlasmaswapPairCOPwFG0.mint.call(addresswvjPYrn, {from: accounts[4]});
		const addressuGXyUUf = await PlasmaswapPairCOPwFG0.skim.call(addressEETGG8y, {from: accounts[1]});
		const uint112liC2LNy = await PlasmaswapPairCOPwFG0.getReserves.call({from: accounts[5]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairmgHIsy = await PlasmaswapPair.new({from: accounts[0]});
		await PlasmaswapPairmgHIsy.lock.call({from: accounts[5]});
		const uint112hU8Z3r7 = await PlasmaswapPairmgHIsy.getReserves.call({from: accounts[2]});

		await expect(PlasmaswapPairmgHIsy.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})