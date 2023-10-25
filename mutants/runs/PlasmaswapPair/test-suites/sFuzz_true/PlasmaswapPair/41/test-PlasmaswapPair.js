const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairWb2MFjI = await PlasmaswapPair.new({from: accounts[5]});
		const byteMkBU0O5 = "0x14201a0f020a03021e1706051d100e1b1e1604081e0819151a161b060c20"
		const addressws0kfNV = accounts[4]
		const uintauMfae8 = BigInt("1001")
		const uintFdUwts6 = BigInt("649")
		const addressgLIKgmG = accounts[4]
		const uintfhMnan3 = await PlasmaswapPairWb2MFjI.swap.call(uintFdUwts6, uintauMfae8, addressws0kfNV, byteMkBU0O5, {from: accounts[3]});
		await PlasmaswapPairWb2MFjI.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const addressZUY1SnV = await PlasmaswapPairWb2MFjI.skim.call(addressgLIKgmG, {from: accounts[1]});

		await expect(PlasmaswapPairWb2MFjI.swap.call(uintFdUwts6, uintauMfae8, addressws0kfNV, byteMkBU0O5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairRD0guu = await PlasmaswapPair.new({from: accounts[2]});
		const addressi9AG51D = accounts[4]
		const addressmPjdXXR = accounts[2]
		const addresssqM5qHM = accounts[3]
		const uint112LY7sufR = await PlasmaswapPairRD0guu.getReserves.call({from: accounts[2]});
		const addressc3VpnLS = await PlasmaswapPairRD0guu.initialize.call(addressmPjdXXR, addressi9AG51D, {from: accounts[1]});
		const uinte9cX3Gs = await PlasmaswapPairRD0guu.mint.call(addresssqM5qHM, {from: accounts[0]});
		await PlasmaswapPairRD0guu.sync.call({from: accounts[0]});

		await expect(PlasmaswapPairRD0guu.initialize.call(addressmPjdXXR, addressi9AG51D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairiZXAMif = await PlasmaswapPair.new({from: accounts[3]});
		const addressj3Rgutq = accounts[2]
		const addressJEzXTyl = accounts[1]
		const addressa3J8XDC = accounts[0]
		await PlasmaswapPairiZXAMif.lock.call({from: accounts[2]});
		const uint112B7irsyh = await PlasmaswapPairiZXAMif.getReserves.call({from: accounts[3]});
		const addressCeKBkwH = await PlasmaswapPairiZXAMif.skim.call(addressj3Rgutq, {from: accounts[1]});
		const uintIzJ6zpS = await PlasmaswapPairiZXAMif.burn.call(addressJEzXTyl, {from: accounts[0]});
		const addressarnIHVS = await PlasmaswapPairiZXAMif.skim.call(addressa3J8XDC, {from: accounts[0]});

		await expect(PlasmaswapPairiZXAMif.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairU3dPe2L = await PlasmaswapPair.new({from: accounts[4]});
		const addressDNupIao = accounts[0]
		const addressJ6Wv4Jd = accounts[1]
		const addressv1Lq4uO = accounts[2]
		const bytehWzm2eQ = "0x0e1e151b1e0a1707021d"
		const addressSWleSCH = accounts[4]
		const uintezbQl0 = BigInt("1538")
		const uintK9LJfa = BigInt("1043")
		const addressBxVFm16 = accounts[0]
		const uintnMdFqo = await PlasmaswapPairU3dPe2L.mint.call(addressDNupIao, {from: accounts[2]});
		const uintWc1Eyxc = await PlasmaswapPairU3dPe2L.burn.call(addressJ6Wv4Jd, {from: accounts[4]});
		const uintG7kdyNI = await PlasmaswapPairU3dPe2L.mint.call(addressv1Lq4uO, {from: accounts[4]});
		const uintnl7o9Gt = await PlasmaswapPairU3dPe2L.swap.call(uintK9LJfa, uintezbQl0, addressSWleSCH, bytehWzm2eQ, {from: accounts[1]});
		const addressky9cCh = await PlasmaswapPairU3dPe2L.skim.call(addressBxVFm16, {from: accounts[1]});

		await expect(PlasmaswapPairU3dPe2L.mint.call(addressDNupIao, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwY3KZFB = await PlasmaswapPair.new({from: accounts[1]});
		const addressta4aaSg = accounts[4]
		const byteP1whWjU = "0x16010f0d19091a04"
		const addressWUh5Mkn = accounts[1]
		const uintR1uldpq = BigInt("397")
		const uintAHBTsa0 = BigInt("637")
		const addressblXKBY5 = accounts[4]
		const addressVQN8ecs = accounts[1]
		const addressI5lJc6T = await PlasmaswapPairwY3KZFB.skim.call(addressta4aaSg, {from: accounts[0]});
		await PlasmaswapPairwY3KZFB.lock.call({from: accounts[3]});
		const uint112ACVOha3 = await PlasmaswapPairwY3KZFB.getReserves.call({from: accounts[1]});
		const uintbh7tqLa = await PlasmaswapPairwY3KZFB.swap.call(uintAHBTsa0, uintR1uldpq, addressWUh5Mkn, byteP1whWjU, {from: accounts[0]});
		const addressa0E8qFG = await PlasmaswapPairwY3KZFB.initialize.call(addressVQN8ecs, addressblXKBY5, {from: accounts[1]});

		await expect(PlasmaswapPairwY3KZFB.skim.call(addressta4aaSg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairk2LwL0Z = await PlasmaswapPair.new({from: accounts[0]});
		const addressbQP6H0z = accounts[3]
		const address22BbOW = accounts[4]
		const addressLYP23zf = accounts[4]
		const addressksurloP = accounts[5]
		const uintJASgplL = await PlasmaswapPairk2LwL0Z.burn.call(addressbQP6H0z, {from: accounts[2]});
		const addressb8vQ5QJ = await PlasmaswapPairk2LwL0Z.initialize.call(addressLYP23zf, address22BbOW, {from: "0x0000000000000000000000000000000000000001"});
		const addressGYP1HOx = await PlasmaswapPairk2LwL0Z.skim.call(addressksurloP, {from: accounts[0]});

		await expect(PlasmaswapPairk2LwL0Z.burn.call(addressbQP6H0z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairk2LwL0Z = await PlasmaswapPair.new({from: accounts[0]});
		const addresshbuQs1Q = accounts[4]
		const addressakoVVbl = accounts[4]
		const addressUXEZGlU = accounts[4]
		const addresssDXl6z6 = accounts[0]
		const addressH3YNVTa = accounts[4]
		const addressyoT9SJO = await PlasmaswapPairk2LwL0Z.initialize.call(addressakoVVbl, addresshbuQs1Q, {from: accounts[0]});
		const addressb8vQ5QJ = await PlasmaswapPairk2LwL0Z.initialize.call(addresssDXl6z6, addressUXEZGlU, {from: "0x0000000000000000000000000000000000000001"});
		const addressGYP1HOx = await PlasmaswapPairk2LwL0Z.skim.call(addressH3YNVTa, {from: accounts[0]});

		await expect(PlasmaswapPairk2LwL0Z.initialize.call(addresssDXl6z6, addressUXEZGlU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairLCDJRBy = await PlasmaswapPair.new({from: accounts[0]});
		const addressB9YvPg = accounts[2]
		const addressuLtgGKc = accounts[4]
		const addressk9csYA = accounts[0]
		await PlasmaswapPairLCDJRBy.sync.call({from: accounts[1]});
		await PlasmaswapPairLCDJRBy.lock.call({from: accounts[1]});
		const uint112m7wlbYk = await PlasmaswapPairLCDJRBy.getReserves.call({from: accounts[2]});
		const addressGGkEkH1 = await PlasmaswapPairLCDJRBy.initialize.call(addressuLtgGKc, addressB9YvPg, {from: accounts[3]});
		const uintL3411T3 = await PlasmaswapPairLCDJRBy.mint.call(addressk9csYA, {from: accounts[3]});

		await expect(PlasmaswapPairLCDJRBy.sync.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhgesG7B = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscGYlUXR = accounts[4]
		const byten4Zz0g = "0x02010c1405101b0910101e"
		const addressZrUwVmM = accounts[2]
		const uintWY2aqcV = BigInt("543")
		const uintIN9qSO7 = BigInt("300")
		const addressWFuuhpU = await PlasmaswapPairhgesG7B.skim.call(addresscGYlUXR, {from: accounts[4]});
		await PlasmaswapPairhgesG7B.lock.call({from: accounts[5]});
		const uintADfloDa = await PlasmaswapPairhgesG7B.swap.call(uintIN9qSO7, uintWY2aqcV, addressZrUwVmM, byten4Zz0g, {from: accounts[5]});
		await PlasmaswapPairhgesG7B.lock.call({from: accounts[4]});
	});
})