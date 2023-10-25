const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsSzylvTr = await UFragments.new({from: accounts[1]});
		const addressWUYvkP5 = accounts[3]
		const addressDqYowmc = accounts[3]
		const uintmwlRvMP = BigInt("1456")
		const addressVrB4lW6 = accounts[1]
		const intNeGRx5c = BigInt("81")
		const intOh6vOb = BigInt("1592")
		const addresshZ71LKE = await UFragmentsSzylvTr.initialize.call(addressWUYvkP5, {from: accounts[4]});
		const addressWpNe2hg = await UFragmentsSzylvTr.initialize.call(addressDqYowmc, {from: accounts[2]});
		const boolkJj8Xl = await UFragmentsSzylvTr.approve.call(addressVrB4lW6, uintmwlRvMP, {from: accounts[0]});
		const addressaOqoTA = await UFragmentsSzylvTr.owner.call({from: accounts[3]});
		const int256QcAl5az = await UFragmentsSzylvTr.mul.call(intOh6vOb, intNeGRx5c, {from: accounts[0]});
		const uint256fz2Yh7 = await UFragmentsSzylvTr.calRebase.call({from: accounts[0]});

		await expect(UFragmentsSzylvTr.initialize.call(addressWUYvkP5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaG9TUNq = await UFragments.new({from: accounts[4]});
		const intW2xIJWh = BigInt("-1372")
		const intQ2afkhS = BigInt("1475")
		const intGxwMV3s = BigInt("-1387")
		const int4KOI7h = BigInt("1119")
		const int256gh53CK3 = await UFragmentsaG9TUNq.mul.call(intQ2afkhS, intW2xIJWh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V2Ixp6b = await UFragmentsaG9TUNq.totalSupply.call({from: accounts[1]});
		const int256zeNtQm = await UFragmentsaG9TUNq.div.call(int4KOI7h, intGxwMV3s, {from: accounts[2]});

		await expect(UFragmentsaG9TUNq.mul.call(intQ2afkhS, intW2xIJWh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsLvDPCED = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intQTOyxi = BigInt("-21")
		const addressYJPkaf8 = accounts[3]
		const uintENqZCLJ = BigInt("612")
		const addressORqcUmV = accounts[4]
		const uint256scOyvzu = await UFragmentsLvDPCED.totalSupply.call({from: accounts[1]});
		const uint256zHNuHmq = await UFragmentsLvDPCED.totalSupply.call({from: accounts[2]});
		const int256eHkFoxw = await UFragmentsLvDPCED.abs.call(intQTOyxi, {from: accounts[4]});
		const addressWwV0Jj9 = await UFragmentsLvDPCED.initialize.call(addressYJPkaf8, {from: accounts[2]});
		const addresshpIdVvg = await UFragmentsLvDPCED.initRebase.call(addressORqcUmV, uintENqZCLJ, {from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentscZOZc7p = await UFragments.new({from: accounts[1]});
		const uintFu5QWjN = BigInt("1351")
		const addresse5jVAnT = accounts[0]
		const addressOSgOguX = accounts[1]
		const uintsmY9bYI = BigInt("104")
		const stringF2PniF2 = "nSVp"
		const stringZ60gqT9 = "if4Taa4mQa3eI8shPaJtSVmXX5105PNbgp"
		const boolpoCJJaV = await UFragmentscZOZc7p.transferFrom.call(addressOSgOguX, addresse5jVAnT, uintFu5QWjN, {from: accounts[1]});
		const stringrTMcxw = await UFragmentscZOZc7p.initialize.call(stringZ60gqT9, stringF2PniF2, uintsmY9bYI, {from: accounts[5]});
		const stringEbMb1HO = await UFragmentscZOZc7p.symbol.call({from: accounts[4]});

		await expect(UFragmentscZOZc7p.transferFrom.call(addressOSgOguX, addresse5jVAnT, uintFu5QWjN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsBeLvdl4 = await UFragments.new({from: accounts[2]});
		const addressnkuP9Ob = accounts[4]
		const uintFDpPp2n = BigInt("1586")
		const addressIM0XuUg = accounts[1]
		const uint256FVIo5ls = await UFragmentsBeLvdl4.balanceOf.call(addressnkuP9Ob, {from: accounts[0]});
		const uint256vZQrczb = await UFragmentsBeLvdl4.totalSupply.call({from: accounts[5]});
		const boolHTaJcn = await UFragmentsBeLvdl4.transfer.call(addressIM0XuUg, uintFDpPp2n, {from: accounts[3]});

		assert.equal(uint256FVIo5ls, BigInt("0"))
		assert.equal(uint256vZQrczb, BigInt("0"))
		await expect(UFragmentsBeLvdl4.transfer.call(addressIM0XuUg, uintFDpPp2n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentscpuHfMc = await UFragments.new({from: accounts[2]});
		const uintQADZ0Ev = BigInt("341")
		const addressb7gcUSX = accounts[0]
		const intlCKp0jA = BigInt("1923")
		const intUMgN9O = BigInt("-1123")
		const addressbLX0LCJ = accounts[2]
		const addressLBOU6IB = accounts[4]
		const intwJl5PpJ = BigInt("1785")
		const addressrLLIXYX = accounts[1]
		const boolUPqhMxD = await UFragmentscpuHfMc.approve.call(addressb7gcUSX, uintQADZ0Ev, {from: accounts[0]});
		const int256B3iCO6S = await UFragmentscpuHfMc.div.call(intUMgN9O, intlCKp0jA, {from: accounts[1]});
		const uint256vk1AMLx = await UFragmentscpuHfMc.allowance.call(addressLBOU6IB, addressbLX0LCJ, {from: accounts[3]});
		const int256QR86toJ = await UFragmentscpuHfMc.abs.call(intwJl5PpJ, {from: accounts[5]});
		const addressu5jCKBj = await UFragmentscpuHfMc.initialize.call(addressrLLIXYX, {from: accounts[0]});

		assert.equal(boolUPqhMxD, true)
		await expect(UFragmentscpuHfMc.div.call(intUMgN9O, intlCKp0jA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsiNK7EdP = await UFragments.new({from: accounts[5]});
		const intfGXIB8o = BigInt("-1070")
		const intp99fV9C = BigInt("1077")
		const uintE8Jdmrn = BigInt("1556")
		const addressvpmciMQ = accounts[1]
		const addressaLmSvCh = accounts[2]
		const stringWoN9Hcz = await UFragmentsiNK7EdP.name.call({from: accounts[2]});
		const int256gw4TlR1 = await UFragmentsiNK7EdP.add.call(intp99fV9C, intfGXIB8o, {from: accounts[4]});
		const uint8xqX7y1l = await UFragmentsiNK7EdP.decimals.call({from: accounts[3]});
		const addressplVZqRz = await UFragmentsiNK7EdP.initRebase.call(addressvpmciMQ, uintE8Jdmrn, {from: accounts[1]});
		const addresshgiRI0k = await UFragmentsiNK7EdP.initialize.call(addressaLmSvCh, {from: accounts[3]});

		assert.equal(stringWoN9Hcz, "")
		await expect(UFragmentsiNK7EdP.add.call(intp99fV9C, intfGXIB8o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxBDDyOk = await UFragments.new({from: accounts[4]});
		const uintX0dmRbG = BigInt("172")
		const addresscj4Gluq = accounts[1]
		const addressmSRtLWA = accounts[0]
		const addressKcfzRSj = accounts[4]
		const stringV7mLsSS = await UFragmentsxBDDyOk.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LZSvcbw = await UFragmentsxBDDyOk.totalSupply.call({from: accounts[0]});
		const boolUsnOmXK = await UFragmentsxBDDyOk.transferFrom.call(addressmSRtLWA, addresscj4Gluq, uintX0dmRbG, {from: accounts[4]});
		const addressSSS5MD = await UFragmentsxBDDyOk.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressPCPXZT4 = await UFragmentsxBDDyOk.initialize.call(addressKcfzRSj, {from: accounts[4]});

		assert.equal(stringV7mLsSS, "")
		assert.equal(uint256LZSvcbw, BigInt("0"))
		await expect(UFragmentsxBDDyOk.transferFrom.call(addressmSRtLWA, addresscj4Gluq, uintX0dmRbG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsBeLvdl4 = await UFragments.new({from: accounts[2]});
		const addresscSYGeVS = accounts[4]
		const addressDkMkst7 = accounts[3]
		const uintNo1e6GK = BigInt("1586")
		const addressLsj51vY = accounts[1]
		const uint256FVIo5ls = await UFragmentsBeLvdl4.balanceOf.call(addresscSYGeVS, {from: accounts[0]});
		const uint256TEsLXT = await UFragmentsBeLvdl4.balanceOf.call(addressDkMkst7, {from: accounts[0]});
		const uint256vZQrczb = await UFragmentsBeLvdl4.totalSupply.call({from: accounts[5]});
		const booluW1wd8C = await UFragmentsBeLvdl4.isOwner.call({from: accounts[2]});
		const uint256oOmsAr0 = await UFragmentsBeLvdl4.calRebase.call({from: accounts[1]});
		const boolHTaJcn = await UFragmentsBeLvdl4.transfer.call(addressLsj51vY, uintNo1e6GK, {from: accounts[3]});

		assert.equal(booluW1wd8C, false)
		assert.equal(uint256FVIo5ls, BigInt("0"))
		assert.equal(uint256TEsLXT, BigInt("0"))
		assert.equal(uint256vZQrczb, BigInt("0"))
		await expect(UFragmentsBeLvdl4.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTbtviZQ = await UFragments.new({from: accounts[2]});
		const uint8YVXs7rh = await UFragmentsTbtviZQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8hYhoXCo = await UFragmentsTbtviZQ.decimals.call({from: accounts[3]});
		const uint8nqiwhFj = await UFragmentsTbtviZQ.decimals.call({from: accounts[1]});

		assert.equal(uint8YVXs7rh, BigInt("0"))
		assert.equal(uint8hYhoXCo, BigInt("0"))
		assert.equal(uint8nqiwhFj, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsBeLvdl4 = await UFragments.new({from: accounts[2]});
		const uinttmk071t = BigInt("162")
		const stringYrcs7J = "txl"
		const stringPLgNW4z = "20P325TS2kU8djSe2p266pfuOX3CFvJeQpPDfBmMeAwK0KiEpx5AThmKdV0GUsUtk1KTaInW5eO7ngVfOne"
		const addressBxTr2t0 = accounts[5]
		const stringQ5Dqn0 = await UFragmentsBeLvdl4.initialize.call(stringPLgNW4z, stringYrcs7J, uinttmk071t, {from: accounts[3]});
		const uint256FVIo5ls = await UFragmentsBeLvdl4.balanceOf.call(addressBxTr2t0, {from: accounts[0]});
		const uint256vZQrczb = await UFragmentsBeLvdl4.totalSupply.call({from: accounts[5]});

		assert.equal(uint256FVIo5ls, BigInt("0"))
		assert.equal(uint256vZQrczb, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentscZOZc7p = await UFragments.new({from: accounts[1]});
		const uintIsAmbJ2 = BigInt("1393")
		const addressGO4YI3 = accounts[5]
		const uintiRlv3Gi = BigInt("1351")
		const addressxFDBYva = accounts[0]
		const addressSndCq4 = accounts[2]
		const uint9en9cg = BigInt("104")
		const stringF2PniF2 = "nSVp"
		const stringZ60gqT9 = "if4Taa4mQa3eI8shPaJtSVmXX5105PNbgp"
		const addressfViiMwM = await UFragmentscZOZc7p.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const booluZ4n7b = await UFragmentscZOZc7p.approve.call(addressGO4YI3, uintIsAmbJ2, {from: accounts[1]});
		const boolpoCJJaV = await UFragmentscZOZc7p.transferFrom.call(addressSndCq4, addressxFDBYva, uintiRlv3Gi, {from: accounts[1]});
		const stringrTMcxw = await UFragmentscZOZc7p.initialize.call(stringZ60gqT9, stringF2PniF2, uint9en9cg, {from: accounts[5]});
		const stringEbMb1HO = await UFragmentscZOZc7p.symbol.call({from: accounts[4]});

		assert.equal(addressfViiMwM, 0x0000000000000000000000000000000000000000)
		assert.equal(booluZ4n7b, true)
		await expect(UFragmentscZOZc7p.transferFrom.call(addressSndCq4, addressxFDBYva, uintiRlv3Gi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragments2GBhr7 = await UFragments.new({from: accounts[2]});
		const addressL7OxdhO = accounts[0]
		const uintBFNTYR = BigInt("209")
		const stringSvGHvUg = "EEUBydtQF97kmgoVyO5GbsDZUFdagSh2Wqsp4d03Mjp5jQqUV7W7mcJn2LBwFwt2"
		const stringCViIWF9 = "giO6bEn320pimDYgWh27GLHDnmJ5gFjSSyJ3466x8U83JOlHKg7AMOyPJ4cl6l4mESoaa3Ptr42IGPGM9yHDjrSq9hvpdZSse"
		const addressBL9METb = "0x0000000000000000000000000000000000000001"
		const addresszva0mvJ = accounts[3]
		const uint256vNl8V40 = await UFragments2GBhr7.balanceOf.call(addressL7OxdhO, {from: accounts[2]});
		const stringekk1j0 = await UFragments2GBhr7.initialize.call(stringCViIWF9, stringSvGHvUg, uintBFNTYR, {from: accounts[3]});
		const uint8upaAdpO = await UFragments2GBhr7.decimals.call({from: accounts[1]});
		const uint2562wBBzI = await UFragments2GBhr7.allowance.call(addresszva0mvJ, addressBL9METb, {from: accounts[1]});

		assert.equal(uint2562wBBzI, BigInt("0"))
		assert.equal(uint256vNl8V40, BigInt("0"))
		assert.equal(uint8upaAdpO, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentscZOZc7p = await UFragments.new({from: accounts[1]});
		const uintlbCw5sc = BigInt("1342")
		const addressmyh5oUn = accounts[0]
		const addresseZX6GcO = accounts[1]
		const addressDRKTp8 = "0x0000000000000000000000000000000000000001"
		const boolL8P2nWU = await UFragmentscZOZc7p.rebaseTimeInfo.call({from: accounts[3]});
		const stringJDVP9Ov = await UFragmentscZOZc7p.name.call({from: accounts[2]});
		const boolpoCJJaV = await UFragmentscZOZc7p.transferFrom.call(addresseZX6GcO, addressmyh5oUn, uintlbCw5sc, {from: accounts[1]});
		const addressnsUmF9U = await UFragmentscZOZc7p.initialize.call(addressDRKTp8, {from: accounts[2]});

		assert.equal(stringJDVP9Ov, "")
		await expect(UFragmentscZOZc7p.transferFrom.call(addresseZX6GcO, addressmyh5oUn, uintlbCw5sc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})