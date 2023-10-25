const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHYw6XMv = await PlasmaswapPair.new({from: accounts[1]});
		const addresszjYiu38 = accounts[4]
		const addressGITP7ds = accounts[3]
		const addressKHyOqLS = accounts[1]
		const addressEvlvZ2q = accounts[2]
//		const addressm4JoEbT = await PlasmaswapPairHYw6XMv.skim.call(addresszjYiu38, {from: "0x0000000000000000000000000000000000000001"});
//		const addressFYgiVWj = await PlasmaswapPairHYw6XMv.skim.call(addressGITP7ds, {from: accounts[0]});
//		await PlasmaswapPairHYw6XMv.lock.call({from: accounts[3]});
//		const uint112N5lFTkW = await PlasmaswapPairHYw6XMv.getReserves.call({from: accounts[2]});
//		const addressVxEQ8Bp = await PlasmaswapPairHYw6XMv.initialize.call(addressEvlvZ2q, addressKHyOqLS, {from: accounts[2]});

		await expect(PlasmaswapPairHYw6XMv.skim.call(addresszjYiu38, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHVFWr95 = await PlasmaswapPair.new({from: accounts[5]});
		const byteYOkz4P = "0x060609200b200d02081900041d0c"
		const addressT1N2IZ7 = accounts[5]
		const uintSEGIIrQ = BigInt("163")
		const uintacT7SUN = BigInt("122")
		const byteuiipY7J = "0x001a18150c05091505031d08020e12151002010e1b181a000720100015"
		const addressSl7JM80 = accounts[3]
		const uintagNkouU = BigInt("1103")
		const uintuIhJdmP = BigInt("517")
		const addresscgLFj02 = accounts[0]
		const addressq6EtE1X = accounts[2]
		const addressyKcMFP9 = accounts[3]
		const addressmdqLFbw = accounts[3]
//		const uintmEsrcEX = await PlasmaswapPairHVFWr95.swap.call(uintacT7SUN, uintSEGIIrQ, addressT1N2IZ7, byteYOkz4P, {from: accounts[0]});
//		const uintGFo07a9 = await PlasmaswapPairHVFWr95.swap.call(uintuIhJdmP, uintagNkouU, addressSl7JM80, byteuiipY7J, {from: accounts[3]});
//		const addressvd9vvFc = await PlasmaswapPairHVFWr95.initialize.call(addressq6EtE1X, addresscgLFj02, {from: accounts[0]});
//		const addresslEX1672 = await PlasmaswapPairHVFWr95.skim.call(addressyKcMFP9, {from: accounts[0]});
//		const uintzPJ00mu = await PlasmaswapPairHVFWr95.mint.call(addressmdqLFbw, {from: accounts[2]});

		await expect(PlasmaswapPairHVFWr95.swap.call(uintacT7SUN, uintSEGIIrQ, addressT1N2IZ7, byteYOkz4P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEzlb3oR = await PlasmaswapPair.new({from: accounts[3]});
		const addressNdZBvD6 = accounts[1]
		const addressotdfP4 = accounts[3]
		const addressBfn1VPm = accounts[5]
//		await PlasmaswapPairEzlb3oR.sync.call({from: accounts[2]});
//		const addressHsfSutV = await PlasmaswapPairEzlb3oR.initialize.call(addressotdfP4, addressNdZBvD6, {from: accounts[2]});
//		const addressFyK27y3 = await PlasmaswapPairEzlb3oR.skim.call(addressBfn1VPm, {from: accounts[0]});

		await expect(PlasmaswapPairEzlb3oR.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairUKFLxTg = await PlasmaswapPair.new({from: accounts[1]});
		const addressHYFXLPY = accounts[3]
		const addressq1JBUyQ = accounts[1]
		const addressB8OSSiy = accounts[0]
		const addressez5Gyqd = accounts[5]
//		const uintz11att6 = await PlasmaswapPairUKFLxTg.burn.call(addressHYFXLPY, {from: accounts[4]});
//		const addressI8Ix5Zf = await PlasmaswapPairUKFLxTg.skim.call(addressq1JBUyQ, {from: accounts[3]});
//		const uintyziOq6C = await PlasmaswapPairUKFLxTg.mint.call(addressB8OSSiy, {from: accounts[2]});
//		await PlasmaswapPairUKFLxTg.lock.call({from: accounts[4]});
//		const uint112LG6w860 = await PlasmaswapPairUKFLxTg.getReserves.call({from: accounts[1]});
//		const uintU2Sl15c = await PlasmaswapPairUKFLxTg.mint.call(addressez5Gyqd, {from: accounts[1]});

		await expect(PlasmaswapPairUKFLxTg.burn.call(addressHYFXLPY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairE38IaXk = await PlasmaswapPair.new({from: accounts[3]});
		const addressuELsiQG = accounts[2]
		const bytesAVMVXh = "0x110f14151a07030613010f160b1b00140f0816"
		const addressXG5lWW5 = "0x0000000000000000000000000000000000000001"
		const uintfJVk9gz = BigInt("443")
		const uintWPyW9zd = BigInt("1380")
		const addressQJAm4KT = accounts[4]
		const addressDWUgGg = accounts[2]
//		const uintAsQl9FF = await PlasmaswapPairE38IaXk.mint.call(addressuELsiQG, {from: accounts[0]});
//		const uintxZfKwKg = await PlasmaswapPairE38IaXk.swap.call(uintWPyW9zd, uintfJVk9gz, addressXG5lWW5, bytesAVMVXh, {from: accounts[3]});
//		const uintPID1EOj = await PlasmaswapPairE38IaXk.burn.call(addressQJAm4KT, {from: accounts[3]});
//		const addressFNDhBBQ = await PlasmaswapPairE38IaXk.skim.call(addressDWUgGg, {from: accounts[3]});

		await expect(PlasmaswapPairE38IaXk.mint.call(addressuELsiQG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairU9kBjuq = await PlasmaswapPair.new({from: accounts[3]});
		const addressqUtSusA = accounts[3]
		const addresswwu0gJl = accounts[0]
		const addressuQZc0X8 = accounts[1]
		const byteA4p0rii = "0x0c09070a1a051e1f060d0f0b081b06"
		const addressx5ZIlZS = accounts[2]
		const uintXTuWLVI = BigInt("1459")
		const uintPu1x8Gg = BigInt("1232")
		const addressyvSiK9j = accounts[1]
		const addressGNoDZ6K = await PlasmaswapPairU9kBjuq.initialize.call(addresswwu0gJl, addressqUtSusA, {from: accounts[3]});
//		const uintU3WCSR8 = await PlasmaswapPairU9kBjuq.mint.call(addressuQZc0X8, {from: accounts[2]});
//		const uintDUexuZr = await PlasmaswapPairU9kBjuq.swap.call(uintPu1x8Gg, uintXTuWLVI, addressx5ZIlZS, byteA4p0rii, {from: accounts[0]});
//		const uintbPwSOgX = await PlasmaswapPairU9kBjuq.mint.call(addressyvSiK9j, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairU9kBjuq.mint.call(addressuQZc0X8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMfY170Q = await PlasmaswapPair.new({from: accounts[0]});
		const byteH8umaRF = "0x150114161b1c1a080c16071a1904071f1301"
		const addressYim9bOY = accounts[4]
		const uintqeszz29 = BigInt("954")
		const uintpCX2IAZ = BigInt("1141")
//		await PlasmaswapPairMfY170Q.lock.call({from: accounts[2]});
//		const uintKWUzCKf = await PlasmaswapPairMfY170Q.swap.call(uintpCX2IAZ, uintqeszz29, addressYim9bOY, byteH8umaRF, {from: accounts[1]});

		await expect(PlasmaswapPairMfY170Q.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYV64XJ5 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressItQFzm4 = "0x0000000000000000000000000000000000000001"
		const addresshKdb0zM = accounts[0]
		const addressPnABYD6 = accounts[4]
		const addressxiM7r4M = accounts[0]
		const addressqhjKEK2 = accounts[2]
		const addressYkOwwHi = await PlasmaswapPairYV64XJ5.skim.call(addressItQFzm4, {from: accounts[4]});
		const uintcZAKg9v = await PlasmaswapPairYV64XJ5.burn.call(addresshKdb0zM, {from: accounts[2]});
		const uintYbdoDM1 = await PlasmaswapPairYV64XJ5.burn.call(addressPnABYD6, {from: accounts[2]});
		await PlasmaswapPairYV64XJ5.sync.call({from: accounts[3]});
		const addressiKQrlkm = await PlasmaswapPairYV64XJ5.initialize.call(addressqhjKEK2, addressxiM7r4M, {from: accounts[0]});
		const uint112xMcKgKH = await PlasmaswapPairYV64XJ5.getReserves.call({from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairE38IaXk = await PlasmaswapPair.new({from: accounts[3]});
		const addressze6wvO5 = accounts[3]
		const addressgesIn0M = accounts[5]
		const addressadGiXZt = accounts[2]
		const byteCm1DXUv = "0x110f14151a07030613010f160b1b00140f0816"
		const addressHklv5OY = "0x0000000000000000000000000000000000000001"
		const uintgU0El9e = BigInt("443")
		const uintAheTbsZ = BigInt("1380")
		const addresszJhCOF5 = accounts[5]
		const addressv9aiLV = accounts[2]
//		const addressaIyGmIu = await PlasmaswapPairE38IaXk.initialize.call(addressgesIn0M, addressze6wvO5, {from: accounts[2]});
//		const uintAsQl9FF = await PlasmaswapPairE38IaXk.mint.call(addressadGiXZt, {from: accounts[0]});
//		const uintxZfKwKg = await PlasmaswapPairE38IaXk.swap.call(uintAheTbsZ, uintgU0El9e, addressHklv5OY, byteCm1DXUv, {from: accounts[3]});
//		const uintPID1EOj = await PlasmaswapPairE38IaXk.burn.call(addresszJhCOF5, {from: accounts[3]});
//		const addressFNDhBBQ = await PlasmaswapPairE38IaXk.skim.call(addressv9aiLV, {from: accounts[3]});

		await expect(PlasmaswapPairE38IaXk.initialize.call(addressgesIn0M, addressze6wvO5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})