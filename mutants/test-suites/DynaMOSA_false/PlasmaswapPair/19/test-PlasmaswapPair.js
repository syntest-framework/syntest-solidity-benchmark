const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEayJPkZ = await PlasmaswapPair.new({from: accounts[2]});
		const addresszCRwG2w = accounts[4]
		const addresscnNCGEx = "0x0000000000000000000000000000000000000001"
		const addressgWlK5OV = accounts[1]
		const uint11217yU75 = await PlasmaswapPairEayJPkZ.getReserves.call({from: accounts[1]});
//		const uintoluAJEe = await PlasmaswapPairEayJPkZ.burn.call(addresszCRwG2w, {from: accounts[0]});
//		const uint112U1tryyA = await PlasmaswapPairEayJPkZ.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinttDrcms = await PlasmaswapPairEayJPkZ.burn.call(addresscnNCGEx, {from: accounts[1]});
//		const uintYz6toF4 = await PlasmaswapPairEayJPkZ.burn.call(addressgWlK5OV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairEayJPkZ.burn.call(addresszCRwG2w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwcfS9No = await PlasmaswapPair.new({from: accounts[1]});
		const address89H9m0 = accounts[4]
		const byteWAvsSO9 = "0x071801001d161a1602010d0113170f180b20181f091a08"
		const addressK3Hgtu7 = accounts[5]
		const uinttNNUMYh = BigInt("1609")
		const uintY9icrYw = BigInt("366")
		const byteAY2UAk1 = "0x0119"
		const addressW9H7oHF = "0x0000000000000000000000000000000000000001"
		const uintobK7oNi = BigInt("1564")
		const uinti8mBlrK = BigInt("1949")
		const addressj85f2e7 = accounts[1]
//		const addressQjG21na = await PlasmaswapPairwcfS9No.skim.call(address89H9m0, {from: accounts[2]});
//		const uintA4knJ9k = await PlasmaswapPairwcfS9No.swap.call(uintY9icrYw, uinttNNUMYh, addressK3Hgtu7, byteWAvsSO9, {from: accounts[1]});
//		const uintLcBnuOn = await PlasmaswapPairwcfS9No.swap.call(uinti8mBlrK, uintobK7oNi, addressW9H7oHF, byteAY2UAk1, {from: accounts[2]});
//		const uintKkA31L = await PlasmaswapPairwcfS9No.mint.call(addressj85f2e7, {from: accounts[0]});

		await expect(PlasmaswapPairwcfS9No.skim.call(address89H9m0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairSQVIJY = await PlasmaswapPair.new({from: accounts[0]});
		const addresstr4HQto = accounts[4]
//		await PlasmaswapPairSQVIJY.sync.call({from: accounts[3]});
//		const uint112phAaaq6 = await PlasmaswapPairSQVIJY.getReserves.call({from: accounts[5]});
//		const uintwGeMtQV = await PlasmaswapPairSQVIJY.mint.call(addresstr4HQto, {from: accounts[2]});

		await expect(PlasmaswapPairSQVIJY.sync.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairvF8HKSk = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const byteYf6BxHK = "0x12110b17040f110a0f1b1515020e0c"
		const addressARTPU6I = accounts[0]
		const uintFws9M6 = BigInt("1543")
		const uintRIyyjn = BigInt("62")
		await PlasmaswapPairvF8HKSk.lock.call({from: accounts[2]});
		await PlasmaswapPairvF8HKSk.lock.call({from: accounts[0]});
		const uinteuEOzk0 = await PlasmaswapPairvF8HKSk.swap.call(uintRIyyjn, uintFws9M6, addressARTPU6I, byteYf6BxHK, {from: accounts[0]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairB5AXun2 = await PlasmaswapPair.new({from: accounts[2]});
		const addressRrGIrWt = accounts[1]
		const addressOXH39hG = accounts[0]
		const addresszFFdtQu = accounts[3]
//		const addressvGlI5TB = await PlasmaswapPairB5AXun2.initialize.call(addressOXH39hG, addressRrGIrWt, {from: accounts[3]});
//		await PlasmaswapPairB5AXun2.lock.call({from: accounts[0]});
//		const uintfuNFRbn = await PlasmaswapPairB5AXun2.mint.call(addresszFFdtQu, {from: accounts[1]});

		await expect(PlasmaswapPairB5AXun2.initialize.call(addressOXH39hG, addressRrGIrWt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairlNkMCQx = await PlasmaswapPair.new({from: accounts[1]});
		const addressRz3U9H2 = accounts[0]
		const addressaQAWolC = accounts[5]
//		await PlasmaswapPairlNkMCQx.lock.call({from: accounts[2]});
//		const uint112E1UI0W4 = await PlasmaswapPairlNkMCQx.getReserves.call({from: accounts[4]});
//		const addressr4womhL = await PlasmaswapPairlNkMCQx.initialize.call(addressaQAWolC, addressRz3U9H2, {from: accounts[0]});

		await expect(PlasmaswapPairlNkMCQx.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairvyRJMbD = await PlasmaswapPair.new({from: accounts[3]});
		const bytetrngIFx = "0x09031e051a2001040c18121b0e0e070804090c071c120a0d110d1f"
		const addressGOTA4pI = accounts[2]
		const uintU1gAP3L = BigInt("779")
		const uintREYRzXE = BigInt("739")
		const byteqZHaLBq = "0x160c120511060b1c19021d04101a130411030608"
		const addressi6nQblg = accounts[5]
		const uintBUWGBm3 = BigInt("699")
		const uintQJGNVqF = BigInt("1187")
//		const uintNiXNISl = await PlasmaswapPairvyRJMbD.swap.call(uintREYRzXE, uintU1gAP3L, addressGOTA4pI, bytetrngIFx, {from: accounts[3]});
//		const uinttJJzrS = await PlasmaswapPairvyRJMbD.swap.call(uintQJGNVqF, uintBUWGBm3, addressi6nQblg, byteqZHaLBq, {from: accounts[0]});

		await expect(PlasmaswapPairvyRJMbD.swap.call(uintREYRzXE, uintU1gAP3L, addressGOTA4pI, bytetrngIFx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPGzJGZn = await PlasmaswapPair.new({from: accounts[1]});
		const addressMDrpe9Y = accounts[0]
		const addressHfNdO2 = accounts[4]
		const addresswWDHEZ = accounts[4]
		const addressH6ygSPt = accounts[4]
		const addresssCYkOzk = accounts[0]
//		const uintL9IgNos = await PlasmaswapPairPGzJGZn.mint.call(addressMDrpe9Y, {from: accounts[2]});
//		const addressjeQNqzJ = await PlasmaswapPairPGzJGZn.initialize.call(addresswWDHEZ, addressHfNdO2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint112hHtgPYh = await PlasmaswapPairPGzJGZn.getReserves.call({from: accounts[1]});
//		await PlasmaswapPairPGzJGZn.lock.call({from: accounts[4]});
//		const uintGmLYeQf = await PlasmaswapPairPGzJGZn.burn.call(addressH6ygSPt, {from: accounts[4]});
//		const addressUKhqiZ9 = await PlasmaswapPairPGzJGZn.skim.call(addresssCYkOzk, {from: accounts[5]});

		await expect(PlasmaswapPairPGzJGZn.mint.call(addressMDrpe9Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})