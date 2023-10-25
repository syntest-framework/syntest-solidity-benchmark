const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhIcntH = await PlasmaswapPair.new({from: accounts[2]});
		const addressVxB2dl = accounts[3]
		const addressGvyIs6x = accounts[0]
		const addresswlMB2iV = accounts[1]
		const byteZVaVFUX = "0x20191f101b15050f160b1e021e"
		const addressP4yO8I8 = accounts[3]
		const uintr4R33W = BigInt("1514")
		const uintSmjlHeY = BigInt("1994")
		const addressvMhT2i = await PlasmaswapPairhIcntH.initialize.call(addressGvyIs6x, addressVxB2dl, {from: accounts[3]});
		const uint112WYEFqmx = await PlasmaswapPairhIcntH.getReserves.call({from: accounts[2]});
		await PlasmaswapPairhIcntH.sync.call({from: accounts[4]});
		const uintt2jIC3 = await PlasmaswapPairhIcntH.burn.call(addresswlMB2iV, {from: accounts[2]});
		await PlasmaswapPairhIcntH.sync.call({from: accounts[4]});
		const uintrkB041H = await PlasmaswapPairhIcntH.swap.call(uintSmjlHeY, uintr4R33W, addressP4yO8I8, byteZVaVFUX, {from: accounts[4]});

		await expect(PlasmaswapPairhIcntH.initialize.call(addressGvyIs6x, addressVxB2dl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairXb2lZkM = await PlasmaswapPair.new({from: accounts[3]});
		const addressltOzL2G = "0x0000000000000000000000000000000000000001"
		const addressnV79V6K = accounts[0]
		const addresshHZhKa8 = accounts[3]
		const addressi8AOGI4 = accounts[1]
		const uintSPNeO94 = await PlasmaswapPairXb2lZkM.mint.call(addressltOzL2G, {from: accounts[0]});
		await PlasmaswapPairXb2lZkM.sync.call({from: accounts[4]});
		const uintxlfdnGi = await PlasmaswapPairXb2lZkM.burn.call(addressnV79V6K, {from: accounts[3]});
		const addressox2xgD = await PlasmaswapPairXb2lZkM.initialize.call(addressi8AOGI4, addresshHZhKa8, {from: accounts[2]});

		await expect(PlasmaswapPairXb2lZkM.mint.call(addressltOzL2G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdbWrVa = await PlasmaswapPair.new({from: accounts[5]});
		const addressbjclyA2 = accounts[2]
		const addresssnwpiK = "0x0000000000000000000000000000000000000001"
		const addresssFM4wLJ = accounts[0]
		await PlasmaswapPairdbWrVa.sync.call({from: accounts[4]});
		const uintajZ2p3s = await PlasmaswapPairdbWrVa.mint.call(addressbjclyA2, {from: accounts[0]});
		const uintxYoq599 = await PlasmaswapPairdbWrVa.mint.call(addresssnwpiK, {from: accounts[2]});
		const addressKizzAlO = await PlasmaswapPairdbWrVa.skim.call(addresssFM4wLJ, {from: accounts[1]});

		await expect(PlasmaswapPairdbWrVa.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairWvTWxby = await PlasmaswapPair.new({from: accounts[2]});
		const addressv5tapHM = "0x0000000000000000000000000000000000000001"
		const addressdnt46Og = accounts[1]
		const addresszQOjUqd = await PlasmaswapPairWvTWxby.skim.call(addressv5tapHM, {from: accounts[2]});
		const uintekz9xg = await PlasmaswapPairWvTWxby.mint.call(addressdnt46Og, {from: accounts[1]});
		await PlasmaswapPairWvTWxby.sync.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairWvTWxby.skim.call(addressv5tapHM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairvgSAyeP = await PlasmaswapPair.new({from: accounts[4]});
		const addressFRzQTe1 = accounts[0]
		const addressbP54k6w = accounts[2]
		const addressZBEAWM = accounts[3]
		const uint112caW6bUQ = await PlasmaswapPairvgSAyeP.getReserves.call({from: accounts[0]});
		const uintE7YiJH = await PlasmaswapPairvgSAyeP.burn.call(addressFRzQTe1, {from: "0x0000000000000000000000000000000000000001"});
		const uint112pvrClE6 = await PlasmaswapPairvgSAyeP.getReserves.call({from: accounts[2]});
		const addressmp6Ta43 = await PlasmaswapPairvgSAyeP.initialize.call(addressZBEAWM, addressbP54k6w, {from: accounts[5]});

		await expect(PlasmaswapPairvgSAyeP.burn.call(addressFRzQTe1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHri2HOl = await PlasmaswapPair.new({from: accounts[4]});
		const byteZ6Ch9dt = "0x1d060906200c0c0f1f170a1f141d13100d201802"
		const addressEgdx9gZ = accounts[0]
		const uintV8mxbF = BigInt("1358")
		const uintoPYIf16 = BigInt("1285")
		const addressCrWuzV = accounts[2]
		const uints1NQpAq = await PlasmaswapPairHri2HOl.swap.call(uintoPYIf16, uintV8mxbF, addressEgdx9gZ, byteZ6Ch9dt, {from: accounts[2]});
		await PlasmaswapPairHri2HOl.lock.call({from: accounts[4]});
		const uintQCqdjON = await PlasmaswapPairHri2HOl.mint.call(addressCrWuzV, {from: accounts[3]});

		await expect(PlasmaswapPairHri2HOl.swap.call(uintoPYIf16, uintV8mxbF, addressEgdx9gZ, byteZ6Ch9dt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairUykPuKg = await PlasmaswapPair.new({from: accounts[4]});
		const addressuijGqhv = accounts[5]
		const addressxTy71xX = accounts[2]
		const byteB5LFrQp = "0x0315121819080503060f0807110f1407"
		const addressnCewxML = accounts[1]
		const uintuia76e = BigInt("205")
		const uintwVJsaLz = BigInt("1930")
		await PlasmaswapPairUykPuKg.lock.call({from: accounts[1]});
		const addresssEUR7fP = await PlasmaswapPairUykPuKg.initialize.call(addressxTy71xX, addressuijGqhv, {from: accounts[3]});
		const uintHtOMvst = await PlasmaswapPairUykPuKg.swap.call(uintwVJsaLz, uintuia76e, addressnCewxML, byteB5LFrQp, {from: accounts[0]});

		await expect(PlasmaswapPairUykPuKg.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairiCdec5l = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressW5zbVwd = "0x0000000000000000000000000000000000000001"
		const byteaIRNvnj = "0x1d030a0b02100801"
		const addressATNIrBp = accounts[3]
		const uintlMz8eAr = BigInt("83")
		const uintfPHbbCN = BigInt("1646")
		const bytemYmWDMj = "0x1011111c171f090d03150c1e140519"
		const addresstF8Vdjk = accounts[4]
		const uintZeMR7I = BigInt("1483")
		const uintKnQ1TuU = BigInt("415")
		await PlasmaswapPairiCdec5l.sync.call({from: accounts[1]});
		const uintN8MPyD = await PlasmaswapPairiCdec5l.burn.call(addressW5zbVwd, {from: accounts[0]});
		const uintcOvbOdt = await PlasmaswapPairiCdec5l.swap.call(uintfPHbbCN, uintlMz8eAr, addressATNIrBp, byteaIRNvnj, {from: accounts[3]});
		const uintwqWSwSn = await PlasmaswapPairiCdec5l.swap.call(uintKnQ1TuU, uintZeMR7I, addresstF8Vdjk, bytemYmWDMj, {from: accounts[1]});
		await PlasmaswapPairiCdec5l.lock.call({from: accounts[0]});
	});
})