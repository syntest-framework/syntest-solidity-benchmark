const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYTFRZ4 = await PlasmaswapPair.new({from: accounts[4]});
		const addressNloTodK = accounts[2]
//		const uintOQVfOHz = await PlasmaswapPairYTFRZ4.mint.call(addressNloTodK, {from: accounts[1]});
//		const uint112HYoBYPX = await PlasmaswapPairYTFRZ4.getReserves.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairYTFRZ4.mint.call(addressNloTodK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhKYPGcR = await PlasmaswapPair.new({from: accounts[4]});
		const addressYH0QYZT = accounts[2]
		const addresslXUVSD7 = accounts[3]
//		const uintPo2RJHw = await PlasmaswapPairhKYPGcR.burn.call(addressYH0QYZT, {from: accounts[4]});
//		const addressy96VsLC = await PlasmaswapPairhKYPGcR.skim.call(addresslXUVSD7, {from: accounts[4]});
//		const uint112ay9Com = await PlasmaswapPairhKYPGcR.getReserves.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairhKYPGcR.burn.call(addressYH0QYZT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJqN4LGO = await PlasmaswapPair.new({from: accounts[2]});
		const addressIO7DPE1 = accounts[0]
		const addresshMdxDD = "0x0000000000000000000000000000000000000001"
		const byteuyqCrkJ = "0x0e0f0c17071c01190c"
		const addressryc4Y0 = accounts[0]
		const uintufl1RIp = BigInt("392")
		const uinthZm40XR = BigInt("1253")
		const byteJQqCOC5 = "0x1f150a0f12120e03020011110816031c090b1a"
		const address1OWgB3 = accounts[3]
		const uintu4DzAZC = BigInt("1036")
		const uintNrkDLL6 = BigInt("65")
		const uint112hhvvWXo = await PlasmaswapPairJqN4LGO.getReserves.call({from: accounts[3]});
		const addressHGjbJ7E = await PlasmaswapPairJqN4LGO.initialize.call(addresshMdxDD, addressIO7DPE1, {from: accounts[2]});
//		const uintP9bfHre = await PlasmaswapPairJqN4LGO.swap.call(uinthZm40XR, uintufl1RIp, addressryc4Y0, byteuyqCrkJ, {from: accounts[0]});
//		const uint112BCJgMDr = await PlasmaswapPairJqN4LGO.getReserves.call({from: accounts[5]});
//		const uintRAAhB5N = await PlasmaswapPairJqN4LGO.swap.call(uintNrkDLL6, uintu4DzAZC, address1OWgB3, byteJQqCOC5, {from: accounts[2]});
//		const uint112Gp9P4Ue = await PlasmaswapPairJqN4LGO.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairJqN4LGO.swap.call(uinthZm40XR, uintufl1RIp, addressryc4Y0, byteuyqCrkJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZZfS6uf = await PlasmaswapPair.new({from: accounts[1]});
		const addressmrxZe7F = accounts[1]
		const addressnDZeDfl = accounts[2]
		const addressWFG00uf = accounts[4]
		const addressKfF4USj = accounts[1]
		const uint112HlTdAEF = await PlasmaswapPairZZfS6uf.getReserves.call({from: accounts[0]});
//		const addressbROztJR = await PlasmaswapPairZZfS6uf.initialize.call(addressnDZeDfl, addressmrxZe7F, {from: accounts[0]});
//		const uint112BLcXgmd = await PlasmaswapPairZZfS6uf.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintvKejX8f = await PlasmaswapPairZZfS6uf.burn.call(addressWFG00uf, {from: accounts[1]});
//		const uintpRWYWxd = await PlasmaswapPairZZfS6uf.burn.call(addressKfF4USj, {from: accounts[3]});

		await expect(PlasmaswapPairZZfS6uf.initialize.call(addressnDZeDfl, addressmrxZe7F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfHA41rK = await PlasmaswapPair.new({from: accounts[4]});
		const addressnJkHZOo = accounts[2]
		const addressiaYkvSY = accounts[1]
		const addressZt2iRoY = accounts[0]
		const byteXN9JIU4 = "0x09160907111518021d1c1f191408050c0a1216170d0a001e"
		const addressw5ej1sJ = accounts[4]
		const uintBvZBvXw = BigInt("1923")
		const uintzARrpH4 = BigInt("2037")
		const addressWmKZS8d = accounts[4]
//		const addressbSn9miw = await PlasmaswapPairfHA41rK.skim.call(addressnJkHZOo, {from: accounts[0]});
//		const addresslhkiCPM = await PlasmaswapPairfHA41rK.initialize.call(addressZt2iRoY, addressiaYkvSY, {from: accounts[4]});
//		const uintLtIfCaY = await PlasmaswapPairfHA41rK.swap.call(uintzARrpH4, uintBvZBvXw, addressw5ej1sJ, byteXN9JIU4, {from: accounts[2]});
//		const uintFsKdagp = await PlasmaswapPairfHA41rK.burn.call(addressWmKZS8d, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairfHA41rK.skim.call(addressnJkHZOo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairbX566af = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const bytenySuXlO = "0x0d05070c0e06021908191d0c1f171a0c1411030d14080e0119"
		const addressp1D7ngp = accounts[4]
		const uintMxYd2X9 = BigInt("984")
		const uintIfORxp2 = BigInt("890")
		const addressCnVhlsD = accounts[5]
		const addressrJpngdl = accounts[2]
		const addressJ9EJPlo = accounts[0]
		const uintrmLeqi = await PlasmaswapPairbX566af.swap.call(uintIfORxp2, uintMxYd2X9, addressp1D7ngp, bytenySuXlO, {from: accounts[4]});
		const addressFFAPWY = await PlasmaswapPairbX566af.initialize.call(addressrJpngdl, addressCnVhlsD, {from: accounts[4]});
		const addressD8nU2bY = await PlasmaswapPairbX566af.skim.call(addressJ9EJPlo, {from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhKYPGcR = await PlasmaswapPair.new({from: accounts[4]});
		const addressFCxU7q1 = accounts[2]
		const addressp4acqex = accounts[4]
		const addressxP9BPO0 = "0x0000000000000000000000000000000000000001"
		const addressPwjHGa = accounts[3]
//		await PlasmaswapPairhKYPGcR.lock.call({from: accounts[2]});
//		const uintPo2RJHw = await PlasmaswapPairhKYPGcR.burn.call(addressFCxU7q1, {from: accounts[4]});
//		await PlasmaswapPairhKYPGcR.lock.call({from: accounts[4]});
//		const addressy96VsLC = await PlasmaswapPairhKYPGcR.skim.call(addressp4acqex, {from: accounts[4]});
//		const addressrKylbPK = await PlasmaswapPairhKYPGcR.initialize.call(addressPwjHGa, addressxP9BPO0, {from: accounts[3]});
//		const uint112ay9Com = await PlasmaswapPairhKYPGcR.getReserves.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairhKYPGcR.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairDVpK6Ny = await PlasmaswapPair.new({from: accounts[1]});
//		await PlasmaswapPairDVpK6Ny.sync.call({from: accounts[2]});
//		await PlasmaswapPairDVpK6Ny.lock.call({from: accounts[4]});

		await expect(PlasmaswapPairDVpK6Ny.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})