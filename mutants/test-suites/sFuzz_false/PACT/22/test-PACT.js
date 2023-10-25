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
		const addressZ2whuGF = "0x0000000000000000000000000000000000000002"
		const addressiFjTzKW = "0x0000000000000000000000000000000000000001"
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressZ2whuGF, {from: accounts[5]});
//		const boolBhTsRlt = await PACTh8ycgsU.setupFarming.call(addressiFjTzKW, {from: accounts[0]});

		assert.equal(uintb2Q8rn8, BigInt("0"))
		await expect(PACTh8ycgsU.setupFarming.call(addressiFjTzKW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addresse8pdU0j = "0x0000000000000000000000000000000000000000"
		const addressoA3IJVk = accounts[4]
		const addressM72pzr8 = accounts[1]
		const stringPN6sk5W = await PACTh8ycgsU.name.call({from: accounts[2]});
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addresse8pdU0j, {from: accounts[5]});
		const uinte0HY31 = await PACTh8ycgsU.allowance.call(addressM72pzr8, addressoA3IJVk, {from: accounts[0]});

		assert.equal(stringPN6sk5W, "P2PB2B community token")
		assert.equal(uintb2Q8rn8, BigInt("1000000000000000000000000000"))
		assert.equal(uinte0HY31, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addressEx9vJUd = "0x0000000000000000000000000000000000000000"
		const addressuAZNMNO = accounts[1]
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressEx9vJUd, {from: accounts[5]});
//		const boolj0rERX = await PACTh8ycgsU.setupReserve.call(addressuAZNMNO, {from: accounts[4]});

		assert.equal(uintb2Q8rn8, BigInt("1000000000000000000000000000"))
		await expect(PACTh8ycgsU.setupReserve.call(addressuAZNMNO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addresso3EdDlJ = "0x0000000000000000000000000000000000000002"
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addresso3EdDlJ, {from: accounts[5]});
		const stringViCohrS = await PACTh8ycgsU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringOuRTJjL = await PACTh8ycgsU.name.call({from: accounts[0]});

		assert.equal(stringOuRTJjL, "P2PB2B community token")
		assert.equal(stringViCohrS, "PACT")
		assert.equal(uintb2Q8rn8, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const uintbKVmgLx = BigInt("1939")
		const addressoit7XZM = accounts[4]
		const addressOOybtRL = "0x0000000000000000000000000000000000000000"
//		const booln3bSlGE = await PACTh8ycgsU.burn.call(addressoit7XZM, uintbKVmgLx, {from: accounts[2]});
//		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressOOybtRL, {from: accounts[5]});
//		const stringo6ESXXk = await PACTh8ycgsU.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTh8ycgsU.burn.call(addressoit7XZM, uintbKVmgLx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addressDbq1XoY = "0x0000000000000000000000000000000000000001"
		const uintwnMl35l = await PACTh8ycgsU.totalSupply.call({from: accounts[1]});
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressDbq1XoY, {from: accounts[5]});

		assert.equal(uintb2Q8rn8, BigInt("0"))
		assert.equal(uintwnMl35l, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const addressi4vMc2m = "0x0000000000000000000000000000000000000001"
		const addresspWglKiD = accounts[4]
		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressi4vMc2m, {from: accounts[5]});
//		const boolM0fMTaX = await PACTh8ycgsU.setupRewards.call(addresspWglKiD, {from: accounts[5]});

		assert.equal(uintb2Q8rn8, BigInt("0"))
		await expect(PACTh8ycgsU.setupRewards.call(addresspWglKiD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTh8ycgsU = await PACT.new({from: accounts[3]});
		const uintsGkmeBc = BigInt("74")
		const addresszeRI8hO = accounts[1]
		const addressLBGl0oc = "0x0000000000000000000000000000000000000001"
		const addressoqXoSCV = "0x0000000000000000000000000000000000000001"
//		const boolN0I6a7Z = await PACTh8ycgsU.transferFrom.call(addressLBGl0oc, addresszeRI8hO, uintsGkmeBc, {from: accounts[3]});
//		const stringxW2QgvX = await PACTh8ycgsU.name.call({from: accounts[2]});
//		const uintb2Q8rn8 = await PACTh8ycgsU.balanceOf.call(addressoqXoSCV, {from: accounts[5]});

		await expect(PACTh8ycgsU.transferFrom.call(addressLBGl0oc, addresszeRI8hO, uintsGkmeBc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT6pKzsP = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspx3G4i = accounts[2]
		const uintSu6clYU = BigInt("591")
		const addressbnIuIDO = accounts[2]
		const addresslUNoZ1r = accounts[1]
		const boolU1eEcIz = await PACT6pKzsP.setupBasePool.call(addresspx3G4i, {from: accounts[2]});
		const boolJ1qBsC5 = await PACT6pKzsP.transferFrom.call(addresslUNoZ1r, addressbnIuIDO, uintSu6clYU, {from: accounts[3]});
	});
})