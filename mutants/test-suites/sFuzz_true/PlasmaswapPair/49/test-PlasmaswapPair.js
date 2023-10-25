const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairLvRS1F8 = await PlasmaswapPair.new({from: accounts[2]});
		const addressFbrvPd = accounts[2]
		const addresskCjRA14 = accounts[3]
		const addressAYkyH1J = accounts[0]
		const addressExrgOpX = accounts[4]
//		const addressTLSanBG = await PlasmaswapPairLvRS1F8.skim.call(addressFbrvPd, {from: accounts[1]});
//		const addressnUJjAML = await PlasmaswapPairLvRS1F8.initialize.call(addressAYkyH1J, addresskCjRA14, {from: "0x0000000000000000000000000000000000000001"});
//		const uint112z1nXux = await PlasmaswapPairLvRS1F8.getReserves.call({from: accounts[5]});
//		const uintGZtq7ut = await PlasmaswapPairLvRS1F8.mint.call(addressExrgOpX, {from: accounts[3]});

		await expect(PlasmaswapPairLvRS1F8.skim.call(addressFbrvPd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairKzjjHgb = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssx9jlE0 = "0x0000000000000000000000000000000000000001"
		const addressQPosB1X = "0x0000000000000000000000000000000000000001"
		const byte1SMaPd = "0x10081a0c091914011b19"
		const addressskISMAt = accounts[4]
		const uintMpG3dKd = BigInt("739")
		const uintvtvhPe = BigInt("348")
		const addresszYWaF2w = accounts[1]
		const uintZRH0A1A = await PlasmaswapPairKzjjHgb.mint.call(addresssx9jlE0, {from: accounts[3]});
		const uint112CUUAAv4 = await PlasmaswapPairKzjjHgb.getReserves.call({from: accounts[0]});
		const uinttzbHd8e = await PlasmaswapPairKzjjHgb.mint.call(addressQPosB1X, {from: accounts[3]});
		const uintkpdIadU = await PlasmaswapPairKzjjHgb.swap.call(uintvtvhPe, uintMpG3dKd, addressskISMAt, byte1SMaPd, {from: accounts[2]});
		const addressonKgjzV = await PlasmaswapPairKzjjHgb.skim.call(addresszYWaF2w, {from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHbr8aOI = await PlasmaswapPair.new({from: accounts[2]});
		const addressHJGPYx6 = accounts[1]
		const addressWVEhzts = accounts[0]
		const address597PnA = accounts[0]
		const addressvgsj45s = accounts[5]
		const addressuI3Hbt = accounts[1]
		const addressTU779X9 = accounts[1]
		const addressSBtikxb = accounts[3]
		const addresszGJ1iL = accounts[4]
//		const uintjRvZMqe = await PlasmaswapPairHbr8aOI.burn.call(addressHJGPYx6, {from: accounts[3]});
//		const addressmOJ08Hx = await PlasmaswapPairHbr8aOI.skim.call(addressWVEhzts, {from: accounts[2]});
//		const addressdQbLZBw = await PlasmaswapPairHbr8aOI.initialize.call(addressvgsj45s, address597PnA, {from: accounts[3]});
//		const uintDn2gwRT = await PlasmaswapPairHbr8aOI.burn.call(addressuI3Hbt, {from: accounts[1]});
//		const addressEta65Zy = await PlasmaswapPairHbr8aOI.initialize.call(addressSBtikxb, addressTU779X9, {from: accounts[4]});
//		const addressLkySpdm = await PlasmaswapPairHbr8aOI.skim.call(addresszGJ1iL, {from: accounts[5]});

		await expect(PlasmaswapPairHbr8aOI.burn.call(addressHJGPYx6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairBSp5Zib = await PlasmaswapPair.new({from: accounts[3]});
		const byteSlz3o1K = "0x1a0b1d1e0c0a0b1c1d"
		const addresssZnwbdg = "0x0000000000000000000000000000000000000001"
		const uinthb2ypSW = BigInt("1152")
		const uints7NJVrs = BigInt("934")
		const addressNSmBn0q = accounts[1]
		const addressHvvL2hy = accounts[3]
		const addressHy7qMM = accounts[4]
//		const uinteGdaPUD = await PlasmaswapPairBSp5Zib.swap.call(uints7NJVrs, uinthb2ypSW, addresssZnwbdg, byteSlz3o1K, {from: accounts[3]});
//		const addresskM3nROZ = await PlasmaswapPairBSp5Zib.initialize.call(addressHvvL2hy, addressNSmBn0q, {from: accounts[2]});
//		const uint112pwK8r6Z = await PlasmaswapPairBSp5Zib.getReserves.call({from: accounts[3]});
//		const uintcQ7tGBD = await PlasmaswapPairBSp5Zib.mint.call(addressHy7qMM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairBSp5Zib.swap.call(uints7NJVrs, uinthb2ypSW, addresssZnwbdg, byteSlz3o1K, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairBlfsMlx = await PlasmaswapPair.new({from: accounts[1]});
		const addressqDUo3yc = accounts[4]
		const addresskmfG9Qo = accounts[0]
		const addressNtYigum = accounts[4]
		const uint112EHDLWPD = await PlasmaswapPairBlfsMlx.getReserves.call({from: accounts[0]});
//		const uintpTnvQDZ = await PlasmaswapPairBlfsMlx.mint.call(addressqDUo3yc, {from: accounts[2]});
//		const uintsIsaj58 = await PlasmaswapPairBlfsMlx.mint.call(addresskmfG9Qo, {from: "0x0000000000000000000000000000000000000001"});
//		await PlasmaswapPairBlfsMlx.lock.call({from: accounts[3]});
//		const uintuwFYcEx = await PlasmaswapPairBlfsMlx.mint.call(addressNtYigum, {from: accounts[2]});

		await expect(PlasmaswapPairBlfsMlx.mint.call(addressqDUo3yc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaire49tDU = await PlasmaswapPair.new({from: accounts[1]});
		const addressdjr6vNI = accounts[0]
		const address17Fkpp = accounts[4]
		const addressytu5qs6 = accounts[2]
		const addressASmLJif = accounts[1]
		const addressNJRezUc = accounts[1]
//		const addressr4pbLVi = await PlasmaswapPaire49tDU.initialize.call(address17Fkpp, addressdjr6vNI, {from: accounts[2]});
//		const uinty38BeaP = await PlasmaswapPaire49tDU.mint.call(addressytu5qs6, {from: accounts[0]});
//		const addressY6bbSP5 = await PlasmaswapPaire49tDU.skim.call(addressASmLJif, {from: accounts[0]});
//		const uintVwVbIPH = await PlasmaswapPaire49tDU.mint.call(addressNJRezUc, {from: accounts[0]});

		await expect(PlasmaswapPaire49tDU.initialize.call(address17Fkpp, addressdjr6vNI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairaMv8tF9 = await PlasmaswapPair.new({from: accounts[0]});
		const address9ryhHi = accounts[5]
		const addressYvuXwb = accounts[0]
		const addressvM6vZ4n = accounts[5]
//		await PlasmaswapPairaMv8tF9.sync.call({from: accounts[0]});
//		const addressI2Nc5gP = await PlasmaswapPairaMv8tF9.initialize.call(addressYvuXwb, address9ryhHi, {from: accounts[4]});
//		await PlasmaswapPairaMv8tF9.sync.call({from: accounts[2]});
//		await PlasmaswapPairaMv8tF9.sync.call({from: accounts[1]});
//		const addresshuIFhqB = await PlasmaswapPairaMv8tF9.skim.call(addressvM6vZ4n, {from: accounts[3]});

		await expect(PlasmaswapPairaMv8tF9.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFGnvShz = await PlasmaswapPair.new({from: accounts[4]});
		const addressVeufYWh = accounts[4]
		const addressEqLdE3R = accounts[5]
		const addressyYFyQKz = accounts[1]
		const addressDOhI301 = accounts[4]
//		await PlasmaswapPairFGnvShz.lock.call({from: accounts[2]});
//		const uintZ1hbq8b = await PlasmaswapPairFGnvShz.mint.call(addressVeufYWh, {from: accounts[2]});
//		const address4nLWo3 = await PlasmaswapPairFGnvShz.initialize.call(addressyYFyQKz, addressEqLdE3R, {from: accounts[5]});
//		const uintU6yXXEB = await PlasmaswapPairFGnvShz.mint.call(addressDOhI301, {from: accounts[0]});
//		const uint112mJWynLn = await PlasmaswapPairFGnvShz.getReserves.call({from: accounts[3]});

		await expect(PlasmaswapPairFGnvShz.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairBSp5Zib = await PlasmaswapPair.new({from: accounts[3]});
		const addressHSdQG4J = "0x0000000000000000000000000000000000000001"
		const addresszJOD1fP = accounts[1]
		const byteK58Enen = "0x1a0b1d1e0c0a0b1c1d"
		const addressS4hQ7cl = "0x0000000000000000000000000000000000000001"
		const uintekms80U = BigInt("1162")
		const uintHjuxTgL = BigInt("934")
		const addresssck8O7N = await PlasmaswapPairBSp5Zib.initialize.call(addresszJOD1fP, addressHSdQG4J, {from: accounts[3]});
//		await PlasmaswapPairBSp5Zib.sync.call({from: accounts[1]});
//		const uinteGdaPUD = await PlasmaswapPairBSp5Zib.swap.call(uintHjuxTgL, uintekms80U, addressS4hQ7cl, byteK58Enen, {from: accounts[3]});

		await expect(PlasmaswapPairBSp5Zib.sync.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})