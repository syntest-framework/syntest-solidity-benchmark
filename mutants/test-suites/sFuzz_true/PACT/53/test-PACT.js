const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTwRyaE1 = await PACT.new({from: accounts[0]});
		const uintjPtpcrb = BigInt("977")
		const addressA3Ym5JG = accounts[2]
		const uintjmUZqMT = await PACTwRyaE1.totalSupply.call({from: accounts[1]});
//		const booldGitoCS = await PACTwRyaE1.burn.call(addressA3Ym5JG, uintjPtpcrb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintjmUZqMT, BigInt("1000000000000000000000000000"))
		await expect(PACTwRyaE1.burn.call(addressA3Ym5JG, uintjPtpcrb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvMUExmK = await PACT.new({from: accounts[1]});
		const addresstyQns68 = accounts[4]
		const uintERSvO1 = BigInt("1985")
		const addresspnNf8Cl = "0x0000000000000000000000000000000000000001"
		const addressabh4SMk = accounts[2]
		const address13xh0q = accounts[4]
		const addressBTZsdC = accounts[1]
		const uint8mHlc6X = await PACTvMUExmK.decimals.call({from: accounts[0]});
//		const boolh6jHFq = await PACTvMUExmK.setupBasePool.call(addresstyQns68, {from: accounts[1]});
//		const uintKtiZAL5 = await PACTvMUExmK.totalSupply.call({from: accounts[4]});
//		const boolavwAPGw = await PACTvMUExmK.approve.call(addresspnNf8Cl, uintERSvO1, {from: accounts[4]});
//		const boolgUzFKb = await PACTvMUExmK.setupReserve.call(addressabh4SMk, {from: accounts[2]});
//		const uintjjSLS4Y = await PACTvMUExmK.allowance.call(addressBTZsdC, address13xh0q, {from: accounts[3]});

		assert.equal(uint8mHlc6X, BigInt("18"))
		await expect(PACTvMUExmK.setupBasePool.call(addresstyQns68, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTjav4Iss = await PACT.new({from: accounts[4]});
		const addressBlRVgK1 = accounts[1]
//		const boolbfvM48W = await PACTjav4Iss.setupFarming.call(addressBlRVgK1, {from: accounts[4]});
//		const stringrWpIQbh = await PACTjav4Iss.symbol.call({from: accounts[3]});
//		const stringZwp5Bfv = await PACTjav4Iss.symbol.call({from: accounts[5]});

		await expect(PACTjav4Iss.setupFarming.call(addressBlRVgK1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTYm2BwvD = await PACT.new({from: accounts[2]});
		const addressn1swiWI = accounts[5]
		const addressWSkKfXC = accounts[2]
		const uintLEFMh7R = BigInt("1342")
		const addressZPKnJE = accounts[0]
		const addresseORKZ52 = accounts[0]
		const stringsPUdk3U = await PACTYm2BwvD.name.call({from: accounts[1]});
//		const booln1dbKhm = await PACTYm2BwvD.setupReserve.call(addressn1swiWI, {from: accounts[3]});
//		const boolcgTNK15 = await PACTYm2BwvD.setupFarming.call(addressWSkKfXC, {from: accounts[2]});
//		const boolXIvlz0i = await PACTYm2BwvD.transferFrom.call(addresseORKZ52, addressZPKnJE, uintLEFMh7R, {from: accounts[2]});
//		const uintsuXgbkk = await PACTYm2BwvD.totalSupply.call({from: accounts[1]});

		assert.equal(stringsPUdk3U, "P2PB2B community token")
		await expect(PACTYm2BwvD.setupReserve.call(addressn1swiWI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTpiEdAfL = await PACT.new({from: accounts[0]});
		const uintRwRecPB = BigInt("352")
		const addressAs2YdRu = accounts[5]
		const addressmpG4qgT = accounts[0]
		const addressBGfmX02 = accounts[2]
		const addressYrnLAB5 = accounts[2]
//		const booldNpYZs = await PACTpiEdAfL.transferFrom.call(addressmpG4qgT, addressAs2YdRu, uintRwRecPB, {from: accounts[5]});
//		const booltZvLgFq = await PACTpiEdAfL.setupReserve.call(addressBGfmX02, {from: accounts[5]});
//		const boolFB0oI4Y = await PACTpiEdAfL.setupTeam.call(addressYrnLAB5, {from: accounts[0]});

		await expect(PACTpiEdAfL.transferFrom.call(addressmpG4qgT, addressAs2YdRu, uintRwRecPB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT7UVkFV = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwvDLW2q = BigInt("291")
		const addressjgq9AdP = accounts[2]
		const boolZSHIy0o = await PACT7UVkFV.transfer.call(addressjgq9AdP, uintwvDLW2q, {from: accounts[4]});
		const stringWPFTNXM = await PACT7UVkFV.symbol.call({from: accounts[2]});
		const uintZtnfMQ3 = await PACT7UVkFV.totalSupply.call({from: accounts[4]});
	});

	it('test for PACT', async () => {
		const PACTk3VxWXC = await PACT.new({from: accounts[5]});
		const addressxdDDn3Z = accounts[5]
		const addressgb9AmkM = "0x0000000000000000000000000000000000000001"
		const addresswbSB4f = accounts[1]
//		const boolLfvkcTk = await PACTk3VxWXC.setupRewards.call(addressxdDDn3Z, {from: accounts[2]});
//		const boolBMfVbvg = await PACTk3VxWXC.setupRewards.call(addressgb9AmkM, {from: accounts[1]});
//		const booly9BxYjN = await PACTk3VxWXC.setupTeam.call(addresswbSB4f, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTk3VxWXC.setupRewards.call(addressxdDDn3Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTcQaQbEM = await PACT.new({from: accounts[0]});
		const addressKvgRnOy = accounts[2]
		const addressLTAECY5 = accounts[0]
		const uintu85gBT = BigInt("547")
		const addressHYYdXmX = accounts[4]
		const addressQgwDIJe = accounts[1]
		const addressoPijUe5 = accounts[3]
		const addressJtYggNH = accounts[4]
		const stringkhhhceK = await PACTcQaQbEM.name.call({from: accounts[2]});
//		const boolFOsgAiM = await PACTcQaQbEM.setupTeam.call(addressKvgRnOy, {from: accounts[1]});
//		const boolbdMNMFi = await PACTcQaQbEM.setupBasePool.call(addressLTAECY5, {from: accounts[4]});
//		const boolXSbnvXs = await PACTcQaQbEM.burn.call(addressHYYdXmX, uintu85gBT, {from: accounts[0]});
//		const boolVBIqBTl = await PACTcQaQbEM.setupRewards.call(addressQgwDIJe, {from: accounts[0]});
//		const boolYKYOYOS = await PACTcQaQbEM.setupRewards.call(addressoPijUe5, {from: accounts[0]});
//		const boolMdtenKg = await PACTcQaQbEM.setupTeam.call(addressJtYggNH, {from: accounts[1]});

		assert.equal(stringkhhhceK, "P2PB2B community token")
		await expect(PACTcQaQbEM.setupTeam.call(addressKvgRnOy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTitt1IUx = await PACT.new({from: accounts[4]});
		const uintasAT9rL = BigInt("1388")
		const addressHClVAEi = accounts[1]
		const uintAVUk1z8 = BigInt("633")
		const addressBJLbXJK = accounts[0]
		const booljYtO8d = await PACTitt1IUx.approve.call(addressHClVAEi, uintasAT9rL, {from: accounts[2]});
		const stringiikYbZm = await PACTitt1IUx.symbol.call({from: accounts[1]});
//		const boolzWILAWJ = await PACTitt1IUx.transfer.call(addressBJLbXJK, uintAVUk1z8, {from: accounts[2]});

		assert.equal(booljYtO8d, true)
		assert.equal(stringiikYbZm, "PACT")
		await expect(PACTitt1IUx.transfer.call(addressBJLbXJK, uintAVUk1z8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTogeQdtz = await PACT.new({from: accounts[1]});
		const addressLZt7AmT = accounts[1]
		const uint6NdNF7 = BigInt("1937")
		const addressqz5Ue98 = accounts[5]
		const addressJrg70sM = accounts[1]
		const addressalX58cd = accounts[4]
		const addressqZpXjAT = "0x0000000000000000000000000000000000000001"
		const uinthi9lYT2 = await PACTogeQdtz.balanceOf.call(addressLZt7AmT, {from: accounts[0]});
//		const booly5R41tA = await PACTogeQdtz.transferFrom.call(addressJrg70sM, addressqz5Ue98, uint6NdNF7, {from: accounts[0]});
//		const uint8Tm1OxYG = await PACTogeQdtz.decimals.call({from: accounts[1]});
//		const boolRctzoeE = await PACTogeQdtz.setupBasePool.call(addressalX58cd, {from: accounts[2]});
//		const boolNfk5xh1 = await PACTogeQdtz.setupReserve.call(addressqZpXjAT, {from: accounts[0]});

		assert.equal(uinthi9lYT2, BigInt("0"))
		await expect(PACTogeQdtz.transferFrom.call(addressJrg70sM, addressqz5Ue98, uint6NdNF7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTwRyaE1 = await PACT.new({from: accounts[0]});
		const addressApi9Fwz = accounts[4]
		const addressEP4JpXi = accounts[2]
		const uintn8kcSh = BigInt("977")
		const addresswxf0koI = accounts[2]
		const uintjmUZqMT = await PACTwRyaE1.totalSupply.call({from: accounts[1]});
		const uintLmLijzQ = await PACTwRyaE1.allowance.call(addressEP4JpXi, addressApi9Fwz, {from: "0x0000000000000000000000000000000000000001"});
//		const booldGitoCS = await PACTwRyaE1.burn.call(addresswxf0koI, uintn8kcSh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintLmLijzQ, BigInt("0"))
		assert.equal(uintjmUZqMT, BigInt("1000000000000000000000000000"))
		await expect(PACTwRyaE1.burn.call(addresswxf0koI, uintn8kcSh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})