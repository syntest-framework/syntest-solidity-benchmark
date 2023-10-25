const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair1HvkC5 = await PlasmaswapPair.new({from: accounts[2]});
		const addresseCc7tQw = accounts[2]
		const addressIoVwq6q = accounts[1]
		const addressCLXv0j6 = "0x0000000000000000000000000000000000000001"
		const addressuDnDoqf = await PlasmaswapPair1HvkC5.skim.call(addresseCc7tQw, {from: accounts[4]});
		const uintqAETq1e = await PlasmaswapPair1HvkC5.burn.call(addressIoVwq6q, {from: accounts[3]});
		const addresstKpKyJT = await PlasmaswapPair1HvkC5.skim.call(addressCLXv0j6, {from: accounts[2]});

		await expect(PlasmaswapPair1HvkC5.skim.call(addresseCc7tQw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairN2hU5NS = await PlasmaswapPair.new({from: accounts[1]});
		const addressyUCGRUU = accounts[0]
		const addressujXgJa = accounts[4]
		const addressQOQpSDX = accounts[4]
		const byteTnU8A1 = "0x1215091a06191718050f121b031719011a160f180f"
		const addressCfWIBoo = accounts[3]
		const uintLjzwUhn = BigInt("1209")
		const uintbK49LIc = BigInt("1944")
		const addressB8A9HiO = accounts[4]
		const addressvCByxxU = accounts[1]
		const bytedKbFtxK = "0x14201d171e0f12081705070e1c090b180812150a0d190f"
		const addressGYxSPDc = accounts[1]
		const uint3Y7Vn4 = BigInt("405")
		const uintuBTBP8 = BigInt("1319")
		const uinttpkoVZY = await PlasmaswapPairN2hU5NS.burn.call(addressyUCGRUU, {from: accounts[4]});
		const addresss4dUgBa = await PlasmaswapPairN2hU5NS.initialize.call(addressQOQpSDX, addressujXgJa, {from: accounts[0]});
		const uintr3jYHrA = await PlasmaswapPairN2hU5NS.swap.call(uintbK49LIc, uintLjzwUhn, addressCfWIBoo, byteTnU8A1, {from: accounts[3]});
		const addressUKCkZhO = await PlasmaswapPairN2hU5NS.initialize.call(addressvCByxxU, addressB8A9HiO, {from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairN2hU5NS.sync.call({from: accounts[2]});
		const uintv3Y5Ar = await PlasmaswapPairN2hU5NS.swap.call(uintuBTBP8, uint3Y7Vn4, addressGYxSPDc, bytedKbFtxK, {from: accounts[2]});

		await expect(PlasmaswapPairN2hU5NS.burn.call(addressyUCGRUU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairza9PiZG = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressltekqT8 = accounts[1]
		const addressWPxsX79 = accounts[4]
		const addressarDIoFU = accounts[2]
		await PlasmaswapPairza9PiZG.sync.call({from: accounts[2]});
		const addressrDFVd0E = await PlasmaswapPairza9PiZG.skim.call(addressltekqT8, {from: accounts[5]});
		const addressLzNPmuw = await PlasmaswapPairza9PiZG.initialize.call(addressarDIoFU, addressWPxsX79, {from: accounts[4]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwZrp9PS = await PlasmaswapPair.new({from: accounts[1]});
		const addressTfbnpt1 = accounts[1]
		const uint112RfVEkk = await PlasmaswapPairwZrp9PS.getReserves.call({from: accounts[0]});
		await PlasmaswapPairwZrp9PS.sync.call({from: accounts[0]});
		const uintkSqJFrW = await PlasmaswapPairwZrp9PS.mint.call(addressTfbnpt1, {from: accounts[0]});

		await expect(PlasmaswapPairwZrp9PS.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMBZJ3dY = await PlasmaswapPair.new({from: accounts[3]});
		const addressEWS8StA = "0x0000000000000000000000000000000000000001"
		const addressVEUQIi = accounts[4]
		const addressX1VzEWK = accounts[4]
		const addressvjdBT2M = accounts[4]
		const bytevFVqFmf = "0x1a1107081906120f0617111a1707"
		const addressRtdC4re = accounts[4]
		const uinttGVl5QH = BigInt("1097")
		const uintCM7Qpi2 = BigInt("1647")
		const uint112niema2u = await PlasmaswapPairMBZJ3dY.getReserves.call({from: accounts[0]});
		const uint112AJ7xyT = await PlasmaswapPairMBZJ3dY.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const addressm4Aayje = await PlasmaswapPairMBZJ3dY.initialize.call(addressVEUQIi, addressEWS8StA, {from: accounts[5]});
		const addressZ0ivlNF = await PlasmaswapPairMBZJ3dY.skim.call(addressX1VzEWK, {from: accounts[5]});
		const uintG4ZMKqW = await PlasmaswapPairMBZJ3dY.burn.call(addressvjdBT2M, {from: accounts[3]});
		const uintWudxZV6 = await PlasmaswapPairMBZJ3dY.swap.call(uintCM7Qpi2, uinttGVl5QH, addressRtdC4re, bytevFVqFmf, {from: accounts[4]});

		await expect(PlasmaswapPairMBZJ3dY.initialize.call(addressVEUQIi, addressEWS8StA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairrWwxIT = await PlasmaswapPair.new({from: accounts[3]});
		const byteDRZQwFb = "0x0a1f19140e1d08131311041c030604011b07"
		const address4e4cIc = accounts[2]
		const uintrqHp5Sj = BigInt("883")
		const uintfN1Drfr = BigInt("1132")
		const addressQQYlp1f = accounts[4]
		const addresstUVvEJl = accounts[5]
		const uintPPahDkw = await PlasmaswapPairrWwxIT.swap.call(uintfN1Drfr, uintrqHp5Sj, address4e4cIc, byteDRZQwFb, {from: accounts[5]});
		const uinthkBFpfZ = await PlasmaswapPairrWwxIT.mint.call(addressQQYlp1f, {from: "0x0000000000000000000000000000000000000001"});
		const uint112JsTnNpX = await PlasmaswapPairrWwxIT.getReserves.call({from: accounts[3]});
		const uintt3uBckP = await PlasmaswapPairrWwxIT.mint.call(addresstUVvEJl, {from: accounts[1]});

		await expect(PlasmaswapPairrWwxIT.swap.call(uintfN1Drfr, uintrqHp5Sj, address4e4cIc, byteDRZQwFb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMBZJ3dY = await PlasmaswapPair.new({from: accounts[3]});
		const addressVGiJDKW = accounts[2]
		const addressnRmzfTe = "0x0000000000000000000000000000000000000001"
		const addresshlroG8X = accounts[4]
		const address74FTLO = accounts[4]
		const addressZ129sTv = accounts[4]
		const byteXlLRkVf = "0x1a1107081906120f0617111a1707"
		const addressykjbLtT = accounts[4]
		const uintGER4KIc = BigInt("1097")
		const uintbPd41TR = BigInt("1647")
		const uint112niema2u = await PlasmaswapPairMBZJ3dY.getReserves.call({from: accounts[0]});
		const uint112AJ7xyT = await PlasmaswapPairMBZJ3dY.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uintrxCr96i = await PlasmaswapPairMBZJ3dY.mint.call(addressVGiJDKW, {from: "0x0000000000000000000000000000000000000001"});
		const addressm4Aayje = await PlasmaswapPairMBZJ3dY.initialize.call(addresshlroG8X, addressnRmzfTe, {from: accounts[5]});
		const addressZ0ivlNF = await PlasmaswapPairMBZJ3dY.skim.call(address74FTLO, {from: accounts[5]});
		const uintG4ZMKqW = await PlasmaswapPairMBZJ3dY.burn.call(addressZ129sTv, {from: accounts[3]});
		const uintWudxZV6 = await PlasmaswapPairMBZJ3dY.swap.call(uintbPd41TR, uintGER4KIc, addressykjbLtT, byteXlLRkVf, {from: accounts[4]});

		await expect(PlasmaswapPairMBZJ3dY.mint.call(addressVGiJDKW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairrWwxIT = await PlasmaswapPair.new({from: accounts[3]});
		const bytesshJxnB = "0x0a1f19140e1d08131311041c030604011b07"
		const addressvuVS8mi = accounts[2]
		const uintPBzrz0K = BigInt("883")
		const uintp62D9Fz = BigInt("1132")
		const address993w0B = accounts[4]
		const addressquK3e8d = accounts[5]
		await PlasmaswapPairrWwxIT.lock.call({from: accounts[1]});
		const uintPPahDkw = await PlasmaswapPairrWwxIT.swap.call(uintp62D9Fz, uintPBzrz0K, addressvuVS8mi, bytesshJxnB, {from: accounts[5]});
		const uinthkBFpfZ = await PlasmaswapPairrWwxIT.mint.call(address993w0B, {from: "0x0000000000000000000000000000000000000001"});
		const uint112JsTnNpX = await PlasmaswapPairrWwxIT.getReserves.call({from: accounts[3]});
		const uintt3uBckP = await PlasmaswapPairrWwxIT.mint.call(addressquK3e8d, {from: accounts[1]});
		const uint112rOhSns5 = await PlasmaswapPairrWwxIT.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairrWwxIT.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairRH9875t = await PlasmaswapPair.new({from: accounts[0]});
		const addressPBTGYrz = accounts[2]
		const addresshAwQM0 = accounts[5]
		const addressG4rhGqr = accounts[3]
		const addressd3YIIb3 = "0x0000000000000000000000000000000000000002"
		const byteNTzLD0E = "0x1b01151c0f0a080b0d121f1e150f001a0501001d0d10"
		const addressSsnvPil = accounts[0]
		const uintEYRPbr9 = BigInt("1480")
		const uintL55DUOq = BigInt("1602")
		const addressMsRhGpd = await PlasmaswapPairRH9875t.initialize.call(addresshAwQM0, addressPBTGYrz, {from: accounts[0]});
		const addresssZQkuyA = await PlasmaswapPairRH9875t.initialize.call(addressd3YIIb3, addressG4rhGqr, {from: accounts[2]});
		const uintdFn6tmA = await PlasmaswapPairRH9875t.swap.call(uintL55DUOq, uintEYRPbr9, addressSsnvPil, byteNTzLD0E, {from: accounts[2]});

		await expect(PlasmaswapPairRH9875t.initialize.call(addressd3YIIb3, addressG4rhGqr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})