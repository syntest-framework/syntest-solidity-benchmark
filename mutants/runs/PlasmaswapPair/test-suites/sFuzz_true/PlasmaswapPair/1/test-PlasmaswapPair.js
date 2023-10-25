const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEnjX7al = await PlasmaswapPair.new({from: accounts[0]});
		const addressrox2Qnv = accounts[1]
		await PlasmaswapPairEnjX7al.sync.call({from: accounts[4]});
		const uintG6xf3I = await PlasmaswapPairEnjX7al.burn.call(addressrox2Qnv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairEnjX7al.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYjVnEqx = await PlasmaswapPair.new({from: accounts[4]});
		const addresskaLfXue = accounts[3]
		const byte9IuYS3 = "0x170903061d1d1d041e10060f130b1a0915"
		const addressIWHf35M = accounts[2]
		const uintIICtNhg = BigInt("154")
		const uintXNllgF1 = BigInt("1573")
		const addressJbGlT7b = accounts[1]
		const addressqQDR1b6 = accounts[0]
		const addressjONvM8f = accounts[2]
		const uintOeB12N = await PlasmaswapPairYjVnEqx.mint.call(addresskaLfXue, {from: accounts[3]});
		const uintTNN6VFK = await PlasmaswapPairYjVnEqx.swap.call(uintXNllgF1, uintIICtNhg, addressIWHf35M, byte9IuYS3, {from: accounts[2]});
		const addressWYEsDK5 = await PlasmaswapPairYjVnEqx.initialize.call(addressqQDR1b6, addressJbGlT7b, {from: accounts[0]});
		const uintnpJeA2I = await PlasmaswapPairYjVnEqx.mint.call(addressjONvM8f, {from: accounts[1]});

		await expect(PlasmaswapPairYjVnEqx.mint.call(addresskaLfXue, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairf8zEgpg = await PlasmaswapPair.new({from: accounts[3]});
		const addressOXzdWUL = accounts[3]
		const addressgtJ8jSk = accounts[1]
		const bytezAfJt5N = "0x1611120f1f200604080c0d050a111b03150d19171114190613171020"
		const addressUErzjN0 = accounts[1]
		const uintlZi3A9f = BigInt("1640")
		const uintXFiPY3Z = BigInt("1407")
		const addressbN71fEZ = accounts[3]
		const uint112hmx9BnD = await PlasmaswapPairf8zEgpg.getReserves.call({from: accounts[0]});
		const addressHRFiiz3 = await PlasmaswapPairf8zEgpg.initialize.call(addressgtJ8jSk, addressOXzdWUL, {from: accounts[4]});
		const uintDr9ywI8 = await PlasmaswapPairf8zEgpg.swap.call(uintXFiPY3Z, uintlZi3A9f, addressUErzjN0, bytezAfJt5N, {from: accounts[5]});
		const addressG4AD8so = await PlasmaswapPairf8zEgpg.skim.call(addressbN71fEZ, {from: accounts[4]});

		await expect(PlasmaswapPairf8zEgpg.initialize.call(addressgtJ8jSk, addressOXzdWUL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairs4rROt = await PlasmaswapPair.new({from: accounts[3]});
		const addresscaSyn5 = accounts[3]
		const addressGtuUre = accounts[4]
		const addressEMOV67 = accounts[1]
		const addressqcAsmHg = accounts[1]
		const addresslR1giE3 = "0x0000000000000000000000000000000000000001"
		const uint112oM5yUXG = await PlasmaswapPairs4rROt.getReserves.call({from: accounts[0]});
		const uintAk1Wesu = await PlasmaswapPairs4rROt.burn.call(addresscaSyn5, {from: accounts[4]});
		const uintC2RzbV1 = await PlasmaswapPairs4rROt.burn.call(addressGtuUre, {from: accounts[1]});
		const addressuuPqkaS = await PlasmaswapPairs4rROt.initialize.call(addressqcAsmHg, addressEMOV67, {from: accounts[3]});
		const addressWPDxyKY = await PlasmaswapPairs4rROt.skim.call(addresslR1giE3, {from: accounts[2]});

		await expect(PlasmaswapPairs4rROt.burn.call(addresscaSyn5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdFEcWZk = await PlasmaswapPair.new({from: accounts[2]});
		const addressvC7XnVW = accounts[1]
		const byteu0EZux1 = "0x0c180a08200d050020"
		const addresswv9MwnO = accounts[0]
		const uint5B1hBh = BigInt("1406")
		const uint6ODNvb = BigInt("1668")
		const addressTnP5zLT = accounts[3]
		const byteEcZM9Bk = "0x121c091819081e0b0b0009111a191b20"
		const addressbOrLvx = "0x0000000000000000000000000000000000000001"
		const uintupULS6f = BigInt("221")
		const uintHWuk3B = BigInt("999")
		const addressOpWeKe7 = await PlasmaswapPairdFEcWZk.skim.call(addressvC7XnVW, {from: accounts[3]});
		const uintWsXYFfS = await PlasmaswapPairdFEcWZk.swap.call(uint6ODNvb, uint5B1hBh, addresswv9MwnO, byteu0EZux1, {from: accounts[2]});
		const uintZuiaEQv = await PlasmaswapPairdFEcWZk.burn.call(addressTnP5zLT, {from: accounts[3]});
		const uintQP61s95 = await PlasmaswapPairdFEcWZk.swap.call(uintHWuk3B, uintupULS6f, addressbOrLvx, byteEcZM9Bk, {from: accounts[0]});

		await expect(PlasmaswapPairdFEcWZk.skim.call(addressvC7XnVW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhoQZ2p2 = await PlasmaswapPair.new({from: accounts[1]});
		const bytez1eIxg = "0x0f020e041d130916"
		const addressc8oXJ66 = accounts[4]
		const uintAdp5EUs = BigInt("1789")
		const uintzHOkQPH = BigInt("1851")
		const addressv6eMd7E = accounts[1]
		const uintTin8E9 = await PlasmaswapPairhoQZ2p2.swap.call(uintzHOkQPH, uintAdp5EUs, addressc8oXJ66, bytez1eIxg, {from: accounts[1]});
		const uint112OIct7oe = await PlasmaswapPairhoQZ2p2.getReserves.call({from: accounts[3]});
		const addressxx6CEW8 = await PlasmaswapPairhoQZ2p2.skim.call(addressv6eMd7E, {from: accounts[1]});
		await PlasmaswapPairhoQZ2p2.lock.call({from: accounts[1]});
		const uint112BqeNWcD = await PlasmaswapPairhoQZ2p2.getReserves.call({from: accounts[0]});

		await expect(PlasmaswapPairhoQZ2p2.swap.call(uintzHOkQPH, uintAdp5EUs, addressc8oXJ66, bytez1eIxg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHNS9yMS = await PlasmaswapPair.new({from: accounts[5]});
		const addresskdgIPx = accounts[1]
		const byteQd1TTiH = "0x041d1c0a170a1c03151c06061e101509190c011c060100111a0d02081f0311"
		const addressKAgvXX9 = accounts[0]
		const uinthpVJAbV = BigInt("40")
		const uinttAWv3q = BigInt("722")
		await PlasmaswapPairHNS9yMS.lock.call({from: accounts[1]});
		const uintBPxhvBp = await PlasmaswapPairHNS9yMS.burn.call(addresskdgIPx, {from: accounts[2]});
		const uintrV4t2fJ = await PlasmaswapPairHNS9yMS.swap.call(uinttAWv3q, uinthpVJAbV, addressKAgvXX9, byteQd1TTiH, {from: accounts[2]});
		await PlasmaswapPairHNS9yMS.sync.call({from: accounts[5]});

		await expect(PlasmaswapPairHNS9yMS.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairf8zEgpg = await PlasmaswapPair.new({from: accounts[3]});
		const addressrE2M0Ai = accounts[5]
		const addressa8F8tF9 = accounts[1]
		const addressy0T1Y69 = accounts[3]
		const addressPpB20zA = accounts[2]
		const addressVaedIwu = accounts[4]
		const address0dLeNs = await PlasmaswapPairf8zEgpg.initialize.call(addressa8F8tF9, addressrE2M0Ai, {from: accounts[3]});
		const addressHRFiiz3 = await PlasmaswapPairf8zEgpg.initialize.call(addressPpB20zA, addressy0T1Y69, {from: accounts[4]});
		const uintEJ0ko93 = await PlasmaswapPairf8zEgpg.mint.call(addressVaedIwu, {from: accounts[5]});

		await expect(PlasmaswapPairf8zEgpg.initialize.call(addressPpB20zA, addressy0T1Y69, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdv9MWM6 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPETosRq = "0x0000000000000000000000000000000000000001"
		const addresszr9koeg = accounts[1]
		const addressNQzDLk = accounts[3]
		const uint112MfRPDQY = await PlasmaswapPairdv9MWM6.getReserves.call({from: accounts[2]});
		const uintj5mBOvY = await PlasmaswapPairdv9MWM6.burn.call(addressPETosRq, {from: accounts[1]});
		const uint112s1DVMN = await PlasmaswapPairdv9MWM6.getReserves.call({from: accounts[1]});
		const uintUm9v0Xz = await PlasmaswapPairdv9MWM6.mint.call(addresszr9koeg, {from: accounts[3]});
		const addressVGhSB8Z = await PlasmaswapPairdv9MWM6.skim.call(addressNQzDLk, {from: accounts[0]});
	});
})