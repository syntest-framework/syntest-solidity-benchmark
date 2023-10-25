const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTZBEyfRo = await PACT.new({from: accounts[4]});
		const addressvK0ATiU = accounts[3]
		const uintJeB4FKF = BigInt("1981")
		const addressrWyNHWL = accounts[1]
		const addressqsL07N9 = accounts[3]
//		const boolvaNDLRN = await PACTZBEyfRo.setupBasePool.call(addressvK0ATiU, {from: accounts[1]});
//		const boolnFb2H58 = await PACTZBEyfRo.approve.call(addressrWyNHWL, uintJeB4FKF, {from: accounts[0]});
//		const uintpnMAlAa = await PACTZBEyfRo.balanceOf.call(addressqsL07N9, {from: accounts[5]});

		await expect(PACTZBEyfRo.setupBasePool.call(addressvK0ATiU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTUUFIWNU = await PACT.new({from: accounts[0]});
		const uintHCThXg = BigInt("1296")
		const address3aKxi2 = accounts[4]
		const uintWfmkxVG = BigInt("314")
		const addressveZWCwi = accounts[0]
		const addressQequIPX = accounts[1]
		const addressIK4erIL = accounts[5]
		const uinttFYESbw = BigInt("179")
		const addressxiMTUt4 = "0x0000000000000000000000000000000000000001"
		const addressUMMhNnP = accounts[4]
//		const boolaXyJ9kk = await PACTUUFIWNU.transfer.call(address3aKxi2, uintHCThXg, {from: accounts[4]});
//		const boolFxxfth = await PACTUUFIWNU.approve.call(addressveZWCwi, uintWfmkxVG, {from: "0x0000000000000000000000000000000000000001"});
//		const uintwzoHJB = await PACTUUFIWNU.allowance.call(addressIK4erIL, addressQequIPX, {from: accounts[2]});
//		const boolNBNJ1VL = await PACTUUFIWNU.transfer.call(addressxiMTUt4, uinttFYESbw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrooZmVn = await PACTUUFIWNU.setupFarming.call(addressUMMhNnP, {from: accounts[4]});

		await expect(PACTUUFIWNU.transfer.call(address3aKxi2, uintHCThXg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTQkJFchA = await PACT.new({from: accounts[1]});
		const addressPNcll2S = "0x0000000000000000000000000000000000000001"
		const addressLbSBW5g = accounts[4]
		const addressz3RyJr2 = accounts[1]
		const addressdiooryd = accounts[1]
		const uintbBfwlee = await PACTQkJFchA.allowance.call(addressLbSBW5g, addressPNcll2S, {from: accounts[1]});
//		const boolBTVxPlr = await PACTQkJFchA.setupTeam.call(addressz3RyJr2, {from: accounts[2]});
//		const booli7tfVto = await PACTQkJFchA.setupReserve.call(addressdiooryd, {from: accounts[1]});
//		const uint8ueQ7uCO = await PACTQkJFchA.decimals.call({from: accounts[0]});

		assert.equal(uintbBfwlee, BigInt("0"))
		await expect(PACTQkJFchA.setupTeam.call(addressz3RyJr2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzdx0b4h = await PACT.new({from: accounts[1]});
		const uintipT71Ia = BigInt("693")
		const addressWVdO5pN = accounts[3]
		const uintpfsfxdD = BigInt("2039")
		const addressT6cQ9rg = accounts[2]
		const uintFz6IEbJ = BigInt("1509")
		const addresswDSd0nP = accounts[4]
		const boolsPXv0OZ = await PACTzdx0b4h.approve.call(addressWVdO5pN, uintipT71Ia, {from: accounts[2]});
		const boolVENwzB2 = await PACTzdx0b4h.approve.call(addressT6cQ9rg, uintpfsfxdD, {from: accounts[3]});
		const boolyNzMbi = await PACTzdx0b4h.approve.call(addresswDSd0nP, uintFz6IEbJ, {from: accounts[1]});
		const uint8sag5Qw0 = await PACTzdx0b4h.decimals.call({from: accounts[4]});

		assert.equal(boolVENwzB2, true)
		assert.equal(boolsPXv0OZ, true)
		assert.equal(boolyNzMbi, true)
		assert.equal(uint8sag5Qw0, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addressAmiG6qn = "0x0000000000000000000000000000000000000001"
		const address7QuI1b = accounts[2]
		const addressUf8Zzgt = accounts[0]
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressAmiG6qn, {from: accounts[5]});
		const uintKmWR05y = await PACTh8ycgsU.allowance.call(addressUf8Zzgt, address7QuI1b, {from: accounts[0]});

		assert.equal(uintKmWR05y, BigInt("0"))
		assert.equal(uintb2Q8rn8, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTzdx0b4h = await PACT.new({from: accounts[1]});
		const addressKsCs1m0 = accounts[0]
		const uintlQeIphr = BigInt("2039")
		const addressijnasQi = accounts[2]
		const uintbSJaq2A = BigInt("1509")
		const addressnkkIwyy = accounts[5]
		const addressdewnlvj = accounts[3]
//		const boolt9wmWAF = await PACTzdx0b4h.setupFarming.call(addressKsCs1m0, {from: accounts[3]});
//		const boolVENwzB2 = await PACTzdx0b4h.approve.call(addressijnasQi, uintlQeIphr, {from: accounts[3]});
//		const boolyNzMbi = await PACTzdx0b4h.approve.call(addressnkkIwyy, uintbSJaq2A, {from: accounts[1]});
//		const booldgBqStw = await PACTzdx0b4h.setupTeam.call(addressdewnlvj, {from: accounts[1]});
//		const uint8sag5Qw0 = await PACTzdx0b4h.decimals.call({from: accounts[4]});

		await expect(PACTzdx0b4h.setupFarming.call(addressKsCs1m0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTpebPrsf = await PACT.new({from: accounts[0]});
		const uintGXAFUzE = BigInt("621")
		const address3GeTe0 = accounts[5]
		const addressYoIHeJK = accounts[1]
//		const boolJ7gHUlg = await PACTpebPrsf.transferFrom.call(addressYoIHeJK, address3GeTe0, uintGXAFUzE, {from: "0x0000000000000000000000000000000000000001"});
//		const uintttL451s = await PACTpebPrsf.totalSupply.call({from: accounts[1]});

		await expect(PACTpebPrsf.transferFrom.call(addressYoIHeJK, address3GeTe0, uintGXAFUzE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTYF8L2Mk = await PACT.new({from: accounts[1]});
		const addressDavW8Ec = accounts[2]
		const uintg6lj5BF = BigInt("1372")
		const addressexE7r5p = accounts[4]
		const addressTydgkT4 = accounts[1]
		const stringIL7d9NQ = await PACTYF8L2Mk.symbol.call({from: accounts[3]});
		const uintn85pui = await PACTYF8L2Mk.balanceOf.call(addressDavW8Ec, {from: accounts[3]});
		const uint8FgyUyWN = await PACTYF8L2Mk.decimals.call({from: accounts[1]});
//		const boolw9YH2Sh = await PACTYF8L2Mk.burn.call(addressexE7r5p, uintg6lj5BF, {from: accounts[0]});
//		const boolMMgIsj2 = await PACTYF8L2Mk.setupReserve.call(addressTydgkT4, {from: accounts[1]});

		assert.equal(stringIL7d9NQ, "PACT")
		assert.equal(uint8FgyUyWN, BigInt("18"))
		assert.equal(uintn85pui, BigInt("0"))
		await expect(PACTYF8L2Mk.burn.call(addressexE7r5p, uintg6lj5BF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTQkJFchA = await PACT.new({from: accounts[1]});
		const addressDH2VZFI = "0x0000000000000000000000000000000000000001"
		const addressFvK0CZ4 = accounts[4]
		const addressNjlbpa9 = accounts[1]
		const addresshwFYQGu = accounts[2]
		const addresss3I0CLr = accounts[1]
		const uintbBfwlee = await PACTQkJFchA.allowance.call(addressFvK0CZ4, addressDH2VZFI, {from: accounts[1]});
		const stringZHrG3Dt = await PACTQkJFchA.name.call({from: accounts[1]});
//		const boolBTVxPlr = await PACTQkJFchA.setupTeam.call(addressNjlbpa9, {from: accounts[2]});
//		const boolHedP1lz = await PACTQkJFchA.setupTeam.call(addresshwFYQGu, {from: accounts[4]});
//		const booli7tfVto = await PACTQkJFchA.setupReserve.call(addresss3I0CLr, {from: accounts[1]});
//		const uint8ueQ7uCO = await PACTQkJFchA.decimals.call({from: accounts[0]});

		assert.equal(stringZHrG3Dt, "P2PB2B community token")
		assert.equal(uintbBfwlee, BigInt("0"))
		await expect(PACTQkJFchA.setupTeam.call(addressNjlbpa9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTQkJFchA = await PACT.new({from: accounts[1]});
		const addresshP6phRT = "0x0000000000000000000000000000000000000001"
		const address1dmqVZ = accounts[4]
		const addresskQ6jmPq = accounts[1]
		const addressu6Knni = accounts[2]
		const addresszdcfcP = accounts[2]
		const uintbBfwlee = await PACTQkJFchA.allowance.call(address1dmqVZ, addresshP6phRT, {from: accounts[1]});
		const uintOkEVlV = await PACTQkJFchA.totalSupply.call({from: accounts[2]});
//		const boolBTVxPlr = await PACTQkJFchA.setupTeam.call(addresskQ6jmPq, {from: accounts[2]});
//		const booli7tfVto = await PACTQkJFchA.setupReserve.call(addressu6Knni, {from: accounts[1]});
//		const uint8ueQ7uCO = await PACTQkJFchA.decimals.call({from: accounts[0]});
//		const boolI8e3C2F = await PACTQkJFchA.setupTeam.call(addresszdcfcP, {from: accounts[1]});

		assert.equal(uintOkEVlV, BigInt("1000000000000000000000000000"))
		assert.equal(uintbBfwlee, BigInt("0"))
		await expect(PACTQkJFchA.setupTeam.call(addresskQ6jmPq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTeJoCb5g = await PACT.new({from: accounts[2]});
		const addressQRWuWyQ = accounts[2]
		const addressEgXl226 = accounts[1]
		const addressUhHCAKA = accounts[1]
		const stringU1oEfQ = await PACTeJoCb5g.symbol.call({from: accounts[0]});
		const uintKSrZaIL = await PACTeJoCb5g.balanceOf.call(addressQRWuWyQ, {from: accounts[3]});
//		const boolMtCjsMm = await PACTeJoCb5g.setupRewards.call(addressEgXl226, {from: accounts[3]});
//		const boollCDyaL3 = await PACTeJoCb5g.setupReserve.call(addressUhHCAKA, {from: accounts[4]});

		assert.equal(stringU1oEfQ, "PACT")
		assert.equal(uintKSrZaIL, BigInt("0"))
		await expect(PACTeJoCb5g.setupRewards.call(addressEgXl226, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTQkJFchA = await PACT.new({from: accounts[1]});
		const addressUNZeCh9 = "0x0000000000000000000000000000000000000001"
		const addressStYKHfM = accounts[4]
		const addresszsyUJjM = accounts[2]
		const addressuZmKkZj = accounts[3]
		const addressU9u2hE9 = accounts[1]
		const addressZjacbRM = accounts[1]
		const uintbBfwlee = await PACTQkJFchA.allowance.call(addressStYKHfM, addressUNZeCh9, {from: accounts[1]});
//		const boolUFPdIew = await PACTQkJFchA.setupReserve.call(addresszsyUJjM, {from: accounts[2]});
//		const boolnEBGwx1 = await PACTQkJFchA.setupTeam.call(addressuZmKkZj, {from: accounts[0]});
//		const boolBTVxPlr = await PACTQkJFchA.setupTeam.call(addressU9u2hE9, {from: accounts[2]});
//		const booli7tfVto = await PACTQkJFchA.setupReserve.call(addressZjacbRM, {from: accounts[1]});
//		const uint8ueQ7uCO = await PACTQkJFchA.decimals.call({from: accounts[0]});

		assert.equal(uintbBfwlee, BigInt("0"))
		await expect(PACTQkJFchA.setupReserve.call(addresszsyUJjM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addressq36V18v = "0x00000000000000000000000000000000000000-1"
//		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressq36V18v, {from: accounts[5]});
//		const uint8ZPTx626 = await PACTh8ycgsU.decimals.call({from: accounts[4]});

		await expect(PACTh8ycgsU.balanceOf.call(addressq36V18v, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvBy7MM8 = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMZk2rF8 = accounts[0]
		const addressh26ICbv = accounts[4]
		const uint8Vqu8rN4 = await PACTvBy7MM8.decimals.call({from: accounts[3]});
		const boolSt3Ld6L = await PACTvBy7MM8.setupTeam.call(addressMZk2rF8, {from: accounts[0]});
		const boolhsyhRGx = await PACTvBy7MM8.setupReserve.call(addressh26ICbv, {from: accounts[4]});
	});
})