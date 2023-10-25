const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTl8T7jPd = await PACT.new({from: accounts[5]});
		const addressFnK8iqU = accounts[0]
		const uintGL6D3Y9 = await PACTl8T7jPd.totalSupply.call({from: accounts[2]});
		const uintgXuaA0j = await PACTl8T7jPd.totalSupply.call({from: accounts[3]});
		const uintEHmDg9M = await PACTl8T7jPd.totalSupply.call({from: accounts[0]});
		const boolvUL0Pm = await PACTl8T7jPd.setupReserve.call(addressFnK8iqU, {from: accounts[5]});
		const stringwfPdRc8 = await PACTl8T7jPd.symbol.call({from: accounts[2]});

		assert.equal(uintEHmDg9M, BigInt("1000000000000000000000000000"))
		assert.equal(uintGL6D3Y9, BigInt("1000000000000000000000000000"))
		assert.equal(uintgXuaA0j, BigInt("1000000000000000000000000000"))
		await expect(PACTl8T7jPd.setupReserve.call(addressFnK8iqU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTprqTK5k = await PACT.new({from: accounts[4]});
		const addressryFpw5l = accounts[5]
		const addressjXybZzK = accounts[4]
		const addressoiceihz = accounts[0]
		const uintTym0FAJ = BigInt("1739")
		const addressS737kta = accounts[4]
		const uintmivScUg = await PACTprqTK5k.allowance.call(addressjXybZzK, addressryFpw5l, {from: accounts[1]});
		const boolTRKiGit = await PACTprqTK5k.setupBasePool.call(addressoiceihz, {from: accounts[2]});
		const stringgPMqHdV = await PACTprqTK5k.symbol.call({from: accounts[1]});
		const booljXgpFPw = await PACTprqTK5k.approve.call(addressS737kta, uintTym0FAJ, {from: accounts[2]});
		const uint8xZYkMTZ = await PACTprqTK5k.decimals.call({from: accounts[4]});

		assert.equal(uintmivScUg, BigInt("0"))
		await expect(PACTprqTK5k.setupBasePool.call(addressoiceihz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTu9Y4BKL = await PACT.new({from: accounts[0]});
		const uintaiCyRIj = BigInt("2022")
		const addressZGnOW1m = accounts[1]
		const addressp8DyO9y = accounts[3]
		const addressm8e0VU1 = accounts[1]
		const addressRFFYtcB = "0x0000000000000000000000000000000000000001"
		const addressBdi7yO = accounts[0]
		const uintUHWioLB = BigInt("327")
		const addressfHk2sQJ = accounts[3]
		const addressnkwfchy = accounts[3]
		const boolDrn8HBH = await PACTu9Y4BKL.transferFrom.call(addressp8DyO9y, addressZGnOW1m, uintaiCyRIj, {from: "0x0000000000000000000000000000000000000001"});
		const booliwhq7yg = await PACTu9Y4BKL.setupTeam.call(addressm8e0VU1, {from: "0x0000000000000000000000000000000000000001"});
		const boolLBmxebB = await PACTu9Y4BKL.setupBasePool.call(addressRFFYtcB, {from: accounts[4]});
		const uintRGW2IRs = await PACTu9Y4BKL.balanceOf.call(addressBdi7yO, {from: accounts[3]});
		const stringpuLBdSK = await PACTu9Y4BKL.symbol.call({from: accounts[4]});
		const boolFRWYPqz = await PACTu9Y4BKL.transferFrom.call(addressnkwfchy, addressfHk2sQJ, uintUHWioLB, {from: accounts[0]});

		await expect(PACTu9Y4BKL.transferFrom.call(addressp8DyO9y, addressZGnOW1m, uintaiCyRIj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHBy6g0V = await PACT.new({from: accounts[0]});
		const addressfaLIlLU = accounts[4]
		const strings05dKcL = await PACTHBy6g0V.name.call({from: accounts[4]});
		const boolzC5GXoT = await PACTHBy6g0V.setupReserve.call(addressfaLIlLU, {from: accounts[0]});
		const stringvIz2N51 = await PACTHBy6g0V.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(strings05dKcL, "P2PB2B community token")
		await expect(PACTHBy6g0V.setupReserve.call(addressfaLIlLU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTByqO1fy = await PACT.new({from: accounts[2]});
		const addressoZlp3VJ = accounts[0]
		const uintVi06e0e = BigInt("99")
		const addressFT3gu6 = accounts[3]
		const addressx1SKtQZ = accounts[5]
		const uintIjFI0B7 = BigInt("1621")
		const addresskZRnGRl = accounts[3]
		const uintfpXXzLA = BigInt("1554")
		const addressyalbfC7 = accounts[5]
		const boolBdy0bti = await PACTByqO1fy.setupFarming.call(addressoZlp3VJ, {from: accounts[3]});
		const boolmmZL1zR = await PACTByqO1fy.burn.call(addressFT3gu6, uintVi06e0e, {from: accounts[4]});
		const uintVbBv2eL = await PACTByqO1fy.balanceOf.call(addressx1SKtQZ, {from: accounts[2]});
		const boolqO4vClU = await PACTByqO1fy.transfer.call(addresskZRnGRl, uintIjFI0B7, {from: accounts[0]});
		const boolTXTheIK = await PACTByqO1fy.transfer.call(addressyalbfC7, uintfpXXzLA, {from: "0x0000000000000000000000000000000000000001"});
		const uintOZYQTsA = await PACTByqO1fy.totalSupply.call({from: accounts[3]});

		await expect(PACTByqO1fy.setupFarming.call(addressoZlp3VJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThbOjhy6 = await PACT.new({from: accounts[1]});
		const addressWRVf9KM = accounts[3]
		const uint8h1wnWK4 = await PACThbOjhy6.decimals.call({from: accounts[4]});
		const stringlYYbGTH = await PACThbOjhy6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const booldylpBC3 = await PACThbOjhy6.setupRewards.call(addressWRVf9KM, {from: accounts[0]});

		assert.equal(stringlYYbGTH, "PACT")
		assert.equal(uint8h1wnWK4, BigInt("18"))
		await expect(PACThbOjhy6.setupRewards.call(addressWRVf9KM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTo1DxOdp = await PACT.new({from: accounts[0]});
		const uintJI0xY75 = BigInt("1137")
		const addressrk1UrIy = accounts[1]
		const addressbWf9lSY = accounts[2]
		const uintV5XZ4LK = BigInt("1140")
		const addressmVB1tPH = accounts[1]
		const addressAzBVlTh = accounts[1]
		const boolmqSQ4Qh = await PACTo1DxOdp.transfer.call(addressrk1UrIy, uintJI0xY75, {from: accounts[4]});
		const boolThdaBCQ = await PACTo1DxOdp.setupBasePool.call(addressbWf9lSY, {from: accounts[0]});
		const boolkPWUPts = await PACTo1DxOdp.transferFrom.call(addressAzBVlTh, addressmVB1tPH, uintV5XZ4LK, {from: accounts[4]});

		await expect(PACTo1DxOdp.transfer.call(addressrk1UrIy, uintJI0xY75, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHBy6g0V = await PACT.new({from: accounts[0]});
		const uintExSsBid = BigInt("1396")
		const addressOr0QuXp = accounts[1]
		const addressR6QiBwQ = accounts[4]
		const strings05dKcL = await PACTHBy6g0V.name.call({from: accounts[4]});
		const boolSFXHfAQ = await PACTHBy6g0V.burn.call(addressOr0QuXp, uintExSsBid, {from: accounts[2]});
		const boolzC5GXoT = await PACTHBy6g0V.setupReserve.call(addressR6QiBwQ, {from: accounts[0]});
		const stringvIz2N51 = await PACTHBy6g0V.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(strings05dKcL, "P2PB2B community token")
		await expect(PACTHBy6g0V.burn.call(addressOr0QuXp, uintExSsBid, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT6ibhdq = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVoGJfd2 = accounts[1]
		const addressb1XQfFG = accounts[4]
		const addressLlGwn5a = accounts[0]
		const boolIjImd0p = await PACT6ibhdq.setupReserve.call(addressVoGJfd2, {from: accounts[2]});
		const uintLdDRHxS = await PACT6ibhdq.allowance.call(addressLlGwn5a, addressb1XQfFG, {from: accounts[0]});
	});

	it('test for PACT', async () => {
		const PACTHBy6g0V = await PACT.new({from: accounts[0]});
		const addresstfx6t3h = "0x0000000000000000000000000000000000000001"
		const addressNnDyMks = accounts[3]
		const uinthjGx4oK = BigInt("905")
		const addressDMWqvYK = accounts[2]
		const addresst6kQlzq = accounts[5]
		const strings05dKcL = await PACTHBy6g0V.name.call({from: accounts[4]});
		const uintBC1e43 = await PACTHBy6g0V.balanceOf.call(addresstfx6t3h, {from: accounts[0]});
		const uintiZdtpPQ = await PACTHBy6g0V.balanceOf.call(addressNnDyMks, {from: accounts[1]});
		const boolhfFzCnp = await PACTHBy6g0V.approve.call(addressDMWqvYK, uinthjGx4oK, {from: accounts[1]});
		const boolzC5GXoT = await PACTHBy6g0V.setupReserve.call(addresst6kQlzq, {from: accounts[0]});

		assert.equal(boolhfFzCnp, true)
		assert.equal(strings05dKcL, "P2PB2B community token")
		assert.equal(uintBC1e43, BigInt("0"))
		assert.equal(uintiZdtpPQ, BigInt("0"))
		await expect(PACTHBy6g0V.setupReserve.call(addresst6kQlzq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHBy6g0V = await PACT.new({from: accounts[0]});
		const addresswMCOnk = accounts[1]
		const addressUW2MkLi = accounts[5]
		const boolMC1nRKk = await PACTHBy6g0V.setupTeam.call(addresswMCOnk, {from: accounts[5]});
		const strings05dKcL = await PACTHBy6g0V.name.call({from: accounts[4]});
		const boolzC5GXoT = await PACTHBy6g0V.setupReserve.call(addressUW2MkLi, {from: accounts[0]});

		await expect(PACTHBy6g0V.setupTeam.call(addresswMCOnk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})