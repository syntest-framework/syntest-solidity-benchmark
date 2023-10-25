const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressMuVDzik = accounts[1]
		const LayerxpOVgLIh = await Layerx.new(addressMuVDzik, {from: accounts[1]});
		const bool1i0r5t = false
//		const boolY3bpLrN = await LayerxpOVgLIh.setIsPaused.call(bool1i0r5t, {from: accounts[4]});
//		const uintVNzg9Qw = await LayerxpOVgLIh.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await LayerxpOVgLIh.f.call({from: accounts[2]});

		await expect(LayerxpOVgLIh.setIsPaused.call(bool1i0r5t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresserOnh4c = accounts[5]
		const Layerxb7r11hW = await Layerx.new(addresserOnh4c, {from: accounts[0]});
		const addressjUdLQ06 = accounts[2]
		const addressuwYEL01 = accounts[1]
		const byteRsGQFEq = "0x1b011217080f1e07161f0e111d021b1a1e090a1d070f010c19"
		const uintymTtB78 = BigInt("196")
		const addressSbAa54n = accounts[2]
		const uintX3FZ3ak = await Layerxb7r11hW.getStakesNum.call({from: accounts[2]});
//		await Layerxb7r11hW.f.call({from: accounts[0]});
//		const uintVJkA14I = await Layerxb7r11hW.allowance.call(addressuwYEL01, addressjUdLQ06, {from: accounts[2]});
//		const boolgR2wxbN = await Layerxb7r11hW.approveAndCall.call(addressSbAa54n, uintymTtB78, byteRsGQFEq, {from: accounts[2]});

		assert.equal(uintX3FZ3ak, BigInt("1"))
		await expect(Layerxb7r11hW.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrZ2TO7H = accounts[2]
		const LayerxyWadKGv = await Layerx.new(addressrZ2TO7H, {from: accounts[3]});
		const uintifT685j = BigInt("12")
//		const uintjW3Psav = await LayerxyWadKGv.lock.call(uintifT685j, {from: accounts[3]});
//		const uintPfUA73i = await LayerxyWadKGv.totalSupply.call({from: accounts[1]});

		await expect(LayerxyWadKGv.lock.call(uintifT685j, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address13h4TS = accounts[2]
		const LayerxjqvcQ7X = await Layerx.new(address13h4TS, {from: accounts[1]});
		const uintTBNkqpQ = BigInt("554")
		const addressAnEqdnG = accounts[4]
		const addressEJebBzO = accounts[2]
		const addressQMiTmNS = accounts[5]
		const uintCw8qVRo = BigInt("209")
		const boolkAkq5v = await LayerxjqvcQ7X.approve.call(addressAnEqdnG, uintTBNkqpQ, {from: accounts[2]});
		const uintHSrzxUg = await LayerxjqvcQ7X.getStakesNum.call({from: accounts[4]});
		const uintqQ9Dlkq = await LayerxjqvcQ7X.allowance.call(addressQMiTmNS, addressEJebBzO, {from: accounts[1]});
//		const uintdNLj2V8 = await LayerxjqvcQ7X.exist.call(uintCw8qVRo, {from: accounts[1]});
//		await LayerxjqvcQ7X.f.call({from: accounts[3]});

		assert.equal(boolkAkq5v, true)
		assert.equal(uintHSrzxUg, BigInt("1"))
		assert.equal(uintqQ9Dlkq, BigInt("0"))
		await expect(LayerxjqvcQ7X.exist.call(uintCw8qVRo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEecJMmA = accounts[5]
		const LayerxR37ZPUs = await Layerx.new(addressEecJMmA, {from: accounts[3]});
		const addressKPLzhIc = accounts[0]
		const uintVemI1Ys = BigInt("1028")
		const boolFV4mS3i = true
		const uintzvUuD5m = await LayerxR37ZPUs.totalSupply.call({from: accounts[2]});
		const uintnoFAORt = await LayerxR37ZPUs.balanceOf.call(addressKPLzhIc, {from: accounts[2]});
//		const uinthtLlcU = await LayerxR37ZPUs.withdraw.call(uintVemI1Ys, {from: accounts[2]});
//		const boolnBrgSMk = await LayerxR37ZPUs.setIsPaused.call(boolFV4mS3i, {from: accounts[0]});
//		const uintQKUCOEs = await LayerxR37ZPUs.totalSupply.call({from: accounts[2]});

		assert.equal(uintnoFAORt, BigInt("0"))
		assert.equal(uintzvUuD5m, BigInt("40000000000000000000000"))
		await expect(LayerxR37ZPUs.withdraw.call(uintVemI1Ys, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressgb4CboG = accounts[5]
		const LayerxR37ZPUs = await Layerx.new(addressgb4CboG, {from: accounts[3]});
		const uintBiM5zvO = BigInt("1282")
		const addressVT1yxH4 = accounts[4]
		const uintsKXrPLt = BigInt("1084")
		const addressKlgbTkJ = accounts[1]
		const addressKzWepL = "0x0000000000000000000000000000000000000001"
		const uintM5lnmr = BigInt("1028")
		const uintzvUuD5m = await LayerxR37ZPUs.totalSupply.call({from: accounts[2]});
//		const boolaBcE77D = await LayerxR37ZPUs.transfer.call(addressVT1yxH4, uintBiM5zvO, {from: accounts[3]});
//		const boolyMrsWfU = await LayerxR37ZPUs.transferFrom.call(addressKzWepL, addressKlgbTkJ, uintsKXrPLt, {from: accounts[3]});
//		await LayerxR37ZPUs.addStakePayment.call({from: accounts[1]});
//		const uinthtLlcU = await LayerxR37ZPUs.withdraw.call(uintM5lnmr, {from: accounts[2]});
//		const uintQKUCOEs = await LayerxR37ZPUs.totalSupply.call({from: accounts[2]});

		assert.equal(uintzvUuD5m, BigInt("40000000000000000000000"))
		await expect(LayerxR37ZPUs.transfer.call(addressVT1yxH4, uintBiM5zvO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressaUjGrnR = accounts[2]
		const LayerxyWadKGv = await Layerx.new(addressaUjGrnR, {from: accounts[3]});
		const uintttYbUC4 = BigInt("0")
		const uinttfKxn8 = BigInt("1556")
		const addressLRqRks = "0x0000000000000000000000000000000000000001"
//		const uintjW3Psav = await LayerxyWadKGv.lock.call(uintttYbUC4, {from: accounts[3]});
//		const boolHIsBiY5 = await LayerxyWadKGv.approve.call(addressLRqRks, uinttfKxn8, {from: accounts[1]});

		await expect(LayerxyWadKGv.lock.call(uintttYbUC4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqmJi43i = accounts[3]
		const LayerxQBO7C2E = await Layerx.new(addressqmJi43i, {from: accounts[3]});
		const uintsiftGzB = BigInt("1482")
		const addressoOZzKen = accounts[0]
		const uintZCDdpqM = BigInt("316")
		const addresstQhnQO = accounts[4]
		const addressA94TbpD = accounts[0]
		const boolkaEYdd6 = await LayerxQBO7C2E.transfer.call(addressoOZzKen, uintsiftGzB, {from: accounts[3]});
//		await LayerxQBO7C2E.addStakePayment.call({from: accounts[5]});
//		const booljpyZy7E = await LayerxQBO7C2E.transferFrom.call(addressA94TbpD, addresstQhnQO, uintZCDdpqM, {from: accounts[0]});

		assert.equal(boolkaEYdd6, true)
		await expect(LayerxQBO7C2E.addStakePayment.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressbrnzDZI = accounts[3]
		const LayerxQBO7C2E = await Layerx.new(addressbrnzDZI, {from: accounts[3]});
		const uintdfwBDmj = BigInt("316")
		const addressfgF1jwu = accounts[5]
		const addressFE2ZnTC = accounts[3]
//		const booljpyZy7E = await LayerxQBO7C2E.transferFrom.call(addressFE2ZnTC, addressfgF1jwu, uintdfwBDmj, {from: accounts[0]});

		await expect(LayerxQBO7C2E.transferFrom.call(addressFE2ZnTC, addressfgF1jwu, uintdfwBDmj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdPPa9hz = accounts[4]
		const LayerxTKFOIUT = await Layerx.new(addressdPPa9hz, {from: "0x0000000000000000000000000000000000000001"});
		const addressC8YqTRI = accounts[1]
		const addresswCrseig = accounts[2]
		await LayerxTKFOIUT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uintostJrw = await LayerxTKFOIUT.getStakesNum.call({from: accounts[5]});
		const uintIetlsl8 = await LayerxTKFOIUT.allowance.call(addresswCrseig, addressC8YqTRI, {from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressWZhHZjC = accounts[3]
		const LayerxdO1SG79 = await Layerx.new(addressWZhHZjC, {from: accounts[1]});
		const addressxwGcNcj = accounts[2]
		const uintBdWLsJ3 = BigInt("1045")
		const addressnmvprD1 = accounts[5]
		const addressqMQ0pq = accounts[0]
		const uintirTuRKG = BigInt("1477")
		const addressFXZV4GN = accounts[2]
		const address61L2se = accounts[1]
		const addressgBJxQ2J = accounts[0]
		const addressFiP893y = await LayerxdO1SG79.setNewStakeCreator.call(addressxwGcNcj, {from: accounts[3]});
//		const boolTSIEyQF = await LayerxdO1SG79.transferFrom.call(addressqMQ0pq, addressnmvprD1, uintBdWLsJ3, {from: accounts[1]});
//		const boolX5JmWw1 = await LayerxdO1SG79.transferFrom.call(address61L2se, addressFXZV4GN, uintirTuRKG, {from: accounts[3]});
//		await LayerxdO1SG79.f.call({from: accounts[2]});
//		const uintZPVc1CY = await LayerxdO1SG79.balanceOf.call(addressgBJxQ2J, {from: accounts[1]});

		await expect(LayerxdO1SG79.transferFrom.call(addressqMQ0pq, addressnmvprD1, uintBdWLsJ3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressP7JivtN = accounts[2]
		const LayerxyWadKGv = await Layerx.new(addressP7JivtN, {from: accounts[3]});
		const uintKVQOHcc = BigInt("1750")
		const uint2yYCbu = BigInt("32")
		const uint256Az7huUb = await LayerxyWadKGv.burn.call(uintKVQOHcc, {from: accounts[2]});
//		const uintjW3Psav = await LayerxyWadKGv.lock.call(uint2yYCbu, {from: accounts[3]});

		await expect(LayerxyWadKGv.lock.call(uint2yYCbu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshNlzJni = accounts[2]
		const LayerxyWadKGv = await Layerx.new(addresshNlzJni, {from: accounts[3]});
		const uintO3tOWAF = BigInt("0")
//		await LayerxyWadKGv.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintjW3Psav = await LayerxyWadKGv.lock.call(uintO3tOWAF, {from: accounts[3]});

		await expect(LayerxyWadKGv.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjufLUKo = accounts[2]
		const LayerxyWadKGv = await Layerx.new(addressjufLUKo, {from: accounts[3]});
		const address5b50ML = accounts[1]
		const addresspNUHjBZ = accounts[0]
		const addressYVUMWn9 = accounts[0]
		const uintvZQjQir = BigInt("0")
		const addressN0jGmRy = await LayerxyWadKGv.transferOwnership.call(address5b50ML, {from: accounts[2]});
		const uintF3jvwQR = await LayerxyWadKGv.allowance.call(addressYVUMWn9, addresspNUHjBZ, {from: accounts[4]});
//		const uintjW3Psav = await LayerxyWadKGv.lock.call(uintvZQjQir, {from: accounts[3]});

		assert.equal(uintF3jvwQR, BigInt("0"))
		await expect(LayerxyWadKGv.lock.call(uintvZQjQir, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressB3TkCAB = accounts[3]
		const LayerxQBO7C2E = await Layerx.new(addressB3TkCAB, {from: accounts[3]});
		const uintwJXZ2ka = BigInt("1374")
		const addressOLM09u = accounts[3]
		const addressUlKHx7O = accounts[3]
		const addressKg3gYLh = accounts[0]
//		await LayerxQBO7C2E.addStakePayment.call({from: accounts[3]});
//		const boolWsY2Dud = await LayerxQBO7C2E.transferFrom.call(addressUlKHx7O, addressOLM09u, uintwJXZ2ka, {from: accounts[1]});
//		await LayerxQBO7C2E.addStakePayment.call({from: accounts[5]});
//		const addressTCvXlkY = await LayerxQBO7C2E.transferOwnership.call(addressKg3gYLh, {from: accounts[3]});

		await expect(LayerxQBO7C2E.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBdW7Rp1 = accounts[2]
		const LayerxyWadKGv = await Layerx.new(addressBdW7Rp1, {from: accounts[3]});
		const boolmzJYbb3 = true
		const uintonvigC5 = BigInt("450")
		const addressnxrQEud = accounts[2]
		const addressAu2OAAK = accounts[1]
		const uintmcU2fG = BigInt("0")
		const boolItVAhZv = await LayerxyWadKGv.setIsPaused.call(boolmzJYbb3, {from: accounts[2]});
//		const uint256nBo195Y = await LayerxyWadKGv.burn.call(uintonvigC5, {from: accounts[3]});
//		const uintXqCbzcI = await LayerxyWadKGv.allowance.call(addressAu2OAAK, addressnxrQEud, {from: accounts[2]});
//		const uintjW3Psav = await LayerxyWadKGv.lock.call(uintmcU2fG, {from: accounts[3]});

		await expect(LayerxyWadKGv.burn.call(uintonvigC5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})