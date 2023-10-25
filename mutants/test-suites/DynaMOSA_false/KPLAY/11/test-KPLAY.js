const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYK1oBfS4 = await KPLAY.new({from: accounts[3]});
		const uintLOQccSA = BigInt("888")
		const uintCAL2S1C = BigInt("534")
		const addressIIzrHJ = accounts[3]
		const uintgeXpIbc = BigInt("942")
		const uintxVlekiM = BigInt("933")
		const addressSMKGHgq = accounts[1]
//		const addressWVr8Cal = await KPLAYK1oBfS4.lock.call(addressIIzrHJ, uintCAL2S1C, uintLOQccSA, {from: accounts[4]});
//		const addressvURjIFY = await KPLAYK1oBfS4.lockAfter.call(addressSMKGHgq, uintxVlekiM, uintgeXpIbc, {from: accounts[1]});
//		await KPLAYK1oBfS4.unpause.call({from: accounts[4]});

		await expect(KPLAYK1oBfS4.lock.call(addressIIzrHJ, uintCAL2S1C, uintLOQccSA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNYm0RM5 = await KPLAY.new({from: accounts[0]});
		const uintieq45Q8 = BigInt("1783")
		const addressNau41E6 = accounts[0]
//		await KPLAYNYm0RM5.onlyOwner.call({from: accounts[2]});
//		const uint256ySALkuH = await KPLAYNYm0RM5.currentTime.call({from: accounts[1]});
//		const boolPwp6A4l = await KPLAYNYm0RM5.approve.call(addressNau41E6, uintieq45Q8, {from: accounts[5]});

		await expect(KPLAYNYm0RM5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOb0afpD = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSdwRmdM = BigInt("1361")
		const addresshla6yPc = accounts[3]
		const addressJO8AYYo = accounts[2]
		const addressRN0ITod = accounts[0]
		const boolwlDYAfY = await KPLAYOb0afpD.transfer.call(addresshla6yPc, uintSdwRmdM, {from: accounts[2]});
		const uint256qrqukSk = await KPLAYOb0afpD.balanceOf.call(addressJO8AYYo, {from: accounts[2]});
		const boolFMNU9eF = await KPLAYOb0afpD.isFrozen.call(addressRN0ITod, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYBSPBgx2 = await KPLAY.new({from: accounts[4]});
		const addressAESvGM3 = accounts[3]
		const uintP1s4ku7 = BigInt("1652")
		const uintJtpSuQ7 = BigInt("777")
		const addressvXKBRTt = accounts[0]
		const uintjaso9wC = BigInt("479")
		const uintDe4jubM = BigInt("1427")
		const addressFh3uxqQ = "0x0000000000000000000000000000000000000001"
		const boolydsIYsF = await KPLAYBSPBgx2.isFrozen.call(addressAESvGM3, {from: accounts[2]});
//		await KPLAYBSPBgx2.whenNotPaused.call({from: accounts[3]});
//		await KPLAYBSPBgx2.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressAH5nxeR = await KPLAYBSPBgx2.lock.call(addressvXKBRTt, uintJtpSuQ7, uintP1s4ku7, {from: accounts[2]});
//		const boolL9VoOVt = await KPLAYBSPBgx2.transferWithLockAfter.call(addressFh3uxqQ, uintDe4jubM, uintjaso9wC, {from: accounts[5]});

		assert.equal(boolydsIYsF, false)
		await expect(KPLAYBSPBgx2.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJlLFW5M = await KPLAY.new({from: accounts[5]});
		const uintfE2eEwv = BigInt("1706")
		const addressXiKwWs1 = accounts[0]
		const uintK8hIloy = BigInt("602")
		const addressDQoWbsg = "0x0000000000000000000000000000000000000001"
		const addressJrFFx5e = accounts[2]
//		await KPLAYJlLFW5M.lockState.call(addressXiKwWs1, uintfE2eEwv, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYJlLFW5M.lockState.call(addressDQoWbsg, uintK8hIloy, {from: accounts[3]});
//		const addressMMKK7tp = await KPLAYJlLFW5M.freeze.call(addressJrFFx5e, {from: accounts[2]});

		await expect(KPLAYJlLFW5M.lockState.call(addressXiKwWs1, uintfE2eEwv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUDqwGXT = await KPLAY.new({from: accounts[3]});
		const uintYIYMSv = BigInt("492")
		const addresso8KIH9E = accounts[5]
		const uintoCbtqPe = BigInt("1528")
		const addressB79fDtE = accounts[3]
		const boolhVpyCBR = await KPLAYUDqwGXT.approve.call(addresso8KIH9E, uintYIYMSv, {from: accounts[2]});
//		const boolLqdBZzu = await KPLAYUDqwGXT.transfer.call(addressB79fDtE, uintoCbtqPe, {from: accounts[0]});

		assert.equal(boolhVpyCBR, true)
		await expect(KPLAYUDqwGXT.transfer.call(addressB79fDtE, uintoCbtqPe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUDqwGXT = await KPLAY.new({from: accounts[3]});
		const uintoGTwg8 = BigInt("819")
		const addressoBffUGf = accounts[1]
		const uintlBxzJQZ = BigInt("1518")
		const address7IyiWw = accounts[4]
//		const boolzpOLyNV = await KPLAYUDqwGXT.decreaseAllowance.call(addressoBffUGf, uintoGTwg8, {from: accounts[1]});
//		const boolLqdBZzu = await KPLAYUDqwGXT.transfer.call(address7IyiWw, uintlBxzJQZ, {from: accounts[0]});

		await expect(KPLAYUDqwGXT.decreaseAllowance.call(addressoBffUGf, uintoGTwg8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNYm0RM5 = await KPLAY.new({from: accounts[0]});
		const uintNOULACG = BigInt("1783")
		const addresszlyeItn = accounts[1]
		const uint256evX8AYE = await KPLAYNYm0RM5.currentTime.call({from: accounts[4]});
//		await KPLAYNYm0RM5.onlyOwner.call({from: accounts[2]});
//		const uint256ySALkuH = await KPLAYNYm0RM5.currentTime.call({from: accounts[1]});
//		const boolPwp6A4l = await KPLAYNYm0RM5.approve.call(addresszlyeItn, uintNOULACG, {from: accounts[5]});

		assert.equal(uint256evX8AYE, BigInt("1630227927"))
		await expect(KPLAYNYm0RM5.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYA1GmSYf = await KPLAY.new({from: accounts[3]});
		const addresso084u8w = accounts[0]
		const addressCdCx3R = accounts[2]
		const uintzmkyG7z = BigInt("1059")
		const uintoPommLS = BigInt("1389")
		const addressWUjWp7c = accounts[0]
		const uint256VWpV7dk = await KPLAYA1GmSYf.balanceOf.call(addresso084u8w, {from: accounts[0]});
//		await KPLAYA1GmSYf.unpause.call({from: accounts[4]});
//		const booldV8eHEp = await KPLAYA1GmSYf.isFrozen.call(addressCdCx3R, {from: accounts[3]});
//		const boolkRZgckt = await KPLAYA1GmSYf.transferWithLock.call(addressWUjWp7c, uintoPommLS, uintzmkyG7z, {from: accounts[3]});

		assert.equal(uint256VWpV7dk, BigInt("0"))
		await expect(KPLAYA1GmSYf.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressCRXbxaC = accounts[1]
		const uintOaNOE0V = BigInt("764")
		const addressxNSVwNM = accounts[4]
		const uintLF3KVnT = BigInt("1587")
		const addressXi4KeQs = accounts[5]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressCRXbxaC, {from: accounts[3]});
		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressxNSVwNM, uintOaNOE0V, {from: accounts[2]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressXi4KeQs, uintLF3KVnT, {from: accounts[3]});

		assert.equal(boolzkjIz6G, true)
		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.decreaseAllowance.call(addressXi4KeQs, uintLF3KVnT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressPTmUgsc = accounts[1]
		const uint44lUDn = BigInt("1939")
		const addressMkhWGJh = accounts[1]
		const uintYF6w0d7 = BigInt("764")
		const addressrNvoaFU = accounts[5]
		const addressP7nu4Pp = accounts[1]
		const addressm279cRQ = accounts[2]
		const addressl5fcjkk = accounts[1]
		const uintu3VYUte = BigInt("1587")
		const addressckBspXl = accounts[6]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressPTmUgsc, {from: accounts[3]});
		const boolWiO9Kt = await KPLAYixaxXUv.increaseAllowance.call(addressMkhWGJh, uint44lUDn, {from: accounts[4]});
		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressrNvoaFU, uintYF6w0d7, {from: accounts[2]});
		const uint256tUYgVI = await KPLAYixaxXUv.balanceOf.call(addressP7nu4Pp, {from: accounts[1]});
		const uint256A473CFn = await KPLAYixaxXUv.allowance.call(addressl5fcjkk, addressm279cRQ, {from: accounts[2]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressckBspXl, uintu3VYUte, {from: accounts[3]});

		assert.equal(boolWiO9Kt, true)
		assert.equal(boolzkjIz6G, true)
		assert.equal(uint256A473CFn, BigInt("0"))
		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		assert.equal(uint256tUYgVI, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.decreaseAllowance.call(addressckBspXl, uintu3VYUte, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressDWFlqFw = accounts[1]
		const uintVWf3aSY = BigInt("1002")
		const uintASD5ixV = BigInt("790")
		const addressMNk8XvW = accounts[4]
		const uintkaVoYeg = BigInt("764")
		const addressHU3jlqT = accounts[4]
		const uintgQfkzV2 = BigInt("1587")
		const addressJBUsW5g = accounts[5]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressDWFlqFw, {from: accounts[3]});
//		const addressUNc6V45 = await KPLAYixaxXUv.lockAfter.call(addressMNk8XvW, uintASD5ixV, uintVWf3aSY, {from: accounts[1]});
//		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressHU3jlqT, uintkaVoYeg, {from: accounts[2]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressJBUsW5g, uintgQfkzV2, {from: accounts[3]});

		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.lockAfter.call(addressMNk8XvW, uintASD5ixV, uintVWf3aSY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressZZGQEfD = accounts[3]
		const addressfiq0nvM = accounts[2]
		const uintpAYMkSE = BigInt("182")
		const addressEKCnE5K = accounts[0]
		const uintKRuWsRe = BigInt("507")
		const uintmfz1rl4 = BigInt("764")
		const addressG232gts = accounts[5]
		const uinty4Ktpj6 = BigInt("1587")
		const addresskHwjSvf = accounts[4]
		const addressJve3h5t = accounts[2]
		const uint256KuY63F = await KPLAYixaxXUv.lockCount.call(addressZZGQEfD, {from: accounts[3]});
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressfiq0nvM, {from: accounts[3]});
//		const booltFZev1F = await KPLAYixaxXUv.transfer.call(addressEKCnE5K, uintpAYMkSE, {from: accounts[2]});
//		await KPLAYixaxXUv.renounceOwnership.call({from: accounts[5]});
//		const uint256kSy7rO5 = await KPLAYixaxXUv.afterTime.call(uintKRuWsRe, {from: accounts[0]});
//		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressG232gts, uintmfz1rl4, {from: accounts[2]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addresskHwjSvf, uinty4Ktpj6, {from: accounts[3]});
//		const uint256CpMecGf = await KPLAYixaxXUv.balanceOf.call(addressJve3h5t, {from: accounts[3]});

		assert.equal(uint256KuY63F, BigInt("0"))
		assert.equal(uint256PgM6ayw, BigInt("0"))
		await expect(KPLAYixaxXUv.transfer.call(addressEKCnE5K, uintpAYMkSE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const uintrUtyrZC = BigInt("1677")
		const addresst3DbRN = accounts[0]
		const addressIvMd8qZ = accounts[0]
		const addressnJI7k9P = accounts[1]
		const uinta26knWq = BigInt("182")
		const addressmaYcbyx = accounts[0]
		const uintI3lY6oU = BigInt("780")
		const addressIAXes6S = accounts[4]
		const uintSjIFALu = BigInt("1560")
		const addressuvb5OL = accounts[4]
//		const boolnIzbnwc = await KPLAYixaxXUv.transferFrom.call(addressIvMd8qZ, addresst3DbRN, uintrUtyrZC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressnJI7k9P, {from: accounts[3]});
//		const booltFZev1F = await KPLAYixaxXUv.transfer.call(addressmaYcbyx, uinta26knWq, {from: accounts[2]});
//		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressIAXes6S, uintI3lY6oU, {from: accounts[2]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressuvb5OL, uintSjIFALu, {from: accounts[3]});

		await expect(KPLAYixaxXUv.transferFrom.call(addressIvMd8qZ, addresst3DbRN, uintrUtyrZC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYZxeqpq = await KPLAY.new({from: accounts[4]});
		const addressECe6gU = accounts[0]
		const uintD4defI6 = BigInt("44")
		const addresscVUoMqs = accounts[4]
		const addressMjQTfdQ = accounts[1]
		const uintJYw6T0n = BigInt("1217")
		const addressHyVdQVy = "0x0000000000000000000000000000000000000001"
		const addressxgsqjqw = accounts[5]
		const uintmJ5hcmm = BigInt("1299")
		const addressHNaKkD2 = accounts[5]
		const addressQoFHkfS = await KPLAYZxeqpq.transferOwnership.call(addressECe6gU, {from: accounts[4]});
//		const boolTrUVsJX = await KPLAYZxeqpq.transferFrom.call(addressMjQTfdQ, addresscVUoMqs, uintD4defI6, {from: accounts[1]});
//		const boolz56PMkp = await KPLAYZxeqpq.approve.call(addressHyVdQVy, uintJYw6T0n, {from: "0x0000000000000000000000000000000000000001"});
//		const addresszztyCk5 = await KPLAYZxeqpq.transferOwnership.call(addressxgsqjqw, {from: accounts[0]});
//		await KPLAYZxeqpq.lockState.call(addressHNaKkD2, uintmJ5hcmm, {from: accounts[4]});

		await expect(KPLAYZxeqpq.transferFrom.call(addressMjQTfdQ, addresscVUoMqs, uintD4defI6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const uintT3tg0Ym = BigInt("177")
		const addresssyieGSL = accounts[1]
		const addressJZr3r4Q = accounts[3]
		const uintqrWNQRT = BigInt("1587")
		const addresstMRWWEx = accounts[4]
//		await KPLAYixaxXUv.pause.call({from: accounts[1]});
//		const booltFZev1F = await KPLAYixaxXUv.transfer.call(addresssyieGSL, uintT3tg0Ym, {from: accounts[2]});
//		const uint256jDfn6CU = await KPLAYixaxXUv.balanceOf.call(addressJZr3r4Q, {from: accounts[3]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addresstMRWWEx, uintqrWNQRT, {from: accounts[3]});

		await expect(KPLAYixaxXUv.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcCmLAc = await KPLAY.new({from: accounts[4]});
		const addressvAbjFsi = accounts[5]
		const addressg2OVv7D = accounts[1]
		const addressFeWJIec = accounts[1]
		const uintSpnTas5 = BigInt("1612")
		const uintWQn6OMo = BigInt("459")
		const addressPQ1au22 = accounts[1]
		const uintZdNRH7N = BigInt("1548")
		const addresscRgSE13 = accounts[1]
		const uint256v8Iade1 = await KPLAYcCmLAc.balanceOf.call(addressvAbjFsi, {from: accounts[4]});
		const uint256qWl6X0A = await KPLAYcCmLAc.allowance.call(addressFeWJIec, addressg2OVv7D, {from: accounts[2]});
//		const addressnPO7A3Q = await KPLAYcCmLAc.lock.call(addressPQ1au22, uintWQn6OMo, uintSpnTas5, {from: accounts[4]});
//		const boolkcqxQE5 = await KPLAYcCmLAc.increaseAllowance.call(addresscRgSE13, uintZdNRH7N, {from: accounts[3]});
//		await KPLAYcCmLAc.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYcCmLAc.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256qWl6X0A, BigInt("0"))
		assert.equal(uint256v8Iade1, BigInt("0"))
		await expect(KPLAYcCmLAc.lock.call(addressPQ1au22, uintWQn6OMo, uintSpnTas5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressQcrkvU2 = accounts[2]
		const uinttqbTqf7 = BigInt("715")
		const addressf7xElJb = accounts[2]
		const uintxuTX39N = BigInt("237")
		const uintt08gcXm = BigInt("182")
		const addressUoxSvOP = accounts[0]
		const uintjW5024Q = BigInt("507")
		const uintefdetFs = BigInt("764")
		const addressDmePl3R = accounts[5]
		const uintXdz7Q6 = BigInt("394")
		const addressNEnwKRW = accounts[3]
		const uintcHRfoSy = BigInt("1794")
		const addressz6YxLJo = accounts[3]
		const addresspnfYXDm = accounts[2]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressQcrkvU2, {from: accounts[3]});
		const boolCSsjkQH = await KPLAYixaxXUv.approve.call(addressf7xElJb, uinttqbTqf7, {from: accounts[4]});
		const uint256YDO28l3 = await KPLAYixaxXUv.afterTime.call(uintxuTX39N, {from: accounts[0]});
//		const booltFZev1F = await KPLAYixaxXUv.transfer.call(addressUoxSvOP, uintt08gcXm, {from: accounts[2]});
//		await KPLAYixaxXUv.renounceOwnership.call({from: accounts[5]});
//		await KPLAYixaxXUv.whenNotFrozen.call({from: accounts[2]});
//		const uint256kSy7rO5 = await KPLAYixaxXUv.afterTime.call(uintjW5024Q, {from: accounts[0]});
//		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressDmePl3R, uintefdetFs, {from: accounts[2]});
//		const boolDgohH86 = await KPLAYixaxXUv.decreaseAllowance.call(addressNEnwKRW, uintXdz7Q6, {from: accounts[4]});
//		const booluYkvkyv = await KPLAYixaxXUv.approve.call(addressz6YxLJo, uintcHRfoSy, {from: accounts[2]});
//		const uint256CpMecGf = await KPLAYixaxXUv.balanceOf.call(addresspnfYXDm, {from: accounts[3]});

		assert.equal(boolCSsjkQH, true)
		assert.equal(uint256PgM6ayw, BigInt("0"))
		assert.equal(uint256YDO28l3, BigInt("1630228166"))
		await expect(KPLAYixaxXUv.transfer.call(addressUoxSvOP, uintt08gcXm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressObZ5HYi = accounts[2]
		const uintwbz1KJA = BigInt("431")
		const addresslQK2KGE = accounts[2]
		const addressMYCud5 = accounts[2]
//		await KPLAYixaxXUv.unpause.call({from: accounts[1]});
//		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressObZ5HYi, {from: accounts[3]});
//		const boolUk2PQez = await KPLAYixaxXUv.transferFrom.call(addressMYCud5, addresslQK2KGE, uintwbz1KJA, {from: accounts[0]});

		await expect(KPLAYixaxXUv.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressCcZXjri = accounts[1]
		const addressX50YtK = accounts[0]
		const uintxKsEapp = BigInt("164")
		const address4jL3t7 = accounts[0]
		const addressbW6Lfg = accounts[4]
		const uintRy4EeM8 = BigInt("1587")
		const addressw0Zi2q = accounts[4]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressCcZXjri, {from: accounts[3]});
		const addressqUo9YJ1 = await KPLAYixaxXUv.unfreeze.call(addressX50YtK, {from: accounts[1]});
//		const booltFZev1F = await KPLAYixaxXUv.transfer.call(address4jL3t7, uintxKsEapp, {from: accounts[2]});
//		const uint256rYCyDsY = await KPLAYixaxXUv.balanceOf.call(addressbW6Lfg, {from: accounts[5]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressw0Zi2q, uintRy4EeM8, {from: accounts[3]});

		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.transfer.call(address4jL3t7, uintxKsEapp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addresshmwWhwR = accounts[0]
		const addressFkXbMz = accounts[1]
		const uintiLLSg84 = BigInt("182")
		const addressxO27HuA = accounts[0]
		const uintNbYeFnL = BigInt("780")
		const addressjWid6h0 = accounts[4]
		const uintj8I0ILm = BigInt("1587")
		const addressHtINc3r = accounts[4]
		const uint256HBWXa8 = await KPLAYixaxXUv.lockCount.call(addresshmwWhwR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iimJZ9Q = await KPLAYixaxXUv.totalSupply.call({from: accounts[4]});
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressFkXbMz, {from: accounts[3]});
//		const booltFZev1F = await KPLAYixaxXUv.transfer.call(addressxO27HuA, uintiLLSg84, {from: accounts[2]});
//		const boolzkjIz6G = await KPLAYixaxXUv.increaseAllowance.call(addressjWid6h0, uintNbYeFnL, {from: accounts[2]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressHtINc3r, uintj8I0ILm, {from: accounts[3]});

		assert.equal(uint256HBWXa8, BigInt("0"))
		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		assert.equal(uint256iimJZ9Q, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.transfer.call(addressxO27HuA, uintiLLSg84, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const uintf5LCCFD = BigInt("1781")
		const uintC8PCiGo = BigInt("195")
		const addressOUdUvca = accounts[1]
		const uintWG7vhM7 = BigInt("169")
		const addressVo07hI7 = accounts[4]
		const addressAm7sXHK = accounts[0]
		const addressQzlW00H = accounts[2]
		const boolvBq3AM5 = await KPLAYixaxXUv.transferWithLock.call(addressOUdUvca, uintC8PCiGo, uintf5LCCFD, {from: accounts[1]});
//		const boolKn0ML5Z = await KPLAYixaxXUv.transferFrom.call(addressAm7sXHK, addressVo07hI7, uintWG7vhM7, {from: accounts[2]});
//		await KPLAYixaxXUv.whenNotPaused.call({from: accounts[3]});
//		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressQzlW00H, {from: accounts[3]});

		assert.equal(boolvBq3AM5, true)
		await expect(KPLAYixaxXUv.transferFrom.call(addressAm7sXHK, addressVo07hI7, uintWG7vhM7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressJmB1xXZ = accounts[2]
		const uinthIdTHFc = BigInt("453")
		const address7rxJLI = accounts[2]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressJmB1xXZ, {from: accounts[3]});
		const boolRnvbgkb = await KPLAYixaxXUv.mint.call(address7rxJLI, uinthIdTHFc, {from: accounts[1]});

		assert.equal(boolRnvbgkb, true)
		assert.equal(uint256PgM6ayw, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYA1GmSYf = await KPLAY.new({from: accounts[3]});
		const addressjEQHqoz = accounts[1]
		const uintAOOmEuw = BigInt("1882")
		const addressKqjIcz3 = accounts[3]
		const addressn2KyAo = accounts[2]
		const uintRMolCEY = BigInt("1755")
		const uintiv8TWRA = BigInt("1389")
		const addressnYWERsC = accounts[0]
		const uinteXPoCdR = BigInt("1151")
		const addressXglYjQq = accounts[3]
		const uint256VWpV7dk = await KPLAYA1GmSYf.balanceOf.call(addressjEQHqoz, {from: accounts[0]});
//		await KPLAYA1GmSYf.renounceOwnership.call({from: accounts[3]});
//		const boolXtB3Zzy = await KPLAYA1GmSYf.transfer.call(addressKqjIcz3, uintAOOmEuw, {from: accounts[0]});
//		await KPLAYA1GmSYf.unpause.call({from: accounts[4]});
//		const booldV8eHEp = await KPLAYA1GmSYf.isFrozen.call(addressn2KyAo, {from: accounts[3]});
//		const boolkRZgckt = await KPLAYA1GmSYf.transferWithLock.call(addressnYWERsC, uintiv8TWRA, uintRMolCEY, {from: accounts[3]});
//		await KPLAYA1GmSYf.lockState.call(addressXglYjQq, uinteXPoCdR, {from: accounts[4]});

		assert.equal(uint256VWpV7dk, BigInt("0"))
		await expect(KPLAYA1GmSYf.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYA1GmSYf = await KPLAY.new({from: accounts[3]});
		const addressnEztJZ = accounts[1]
		const uintbcg54r = BigInt("363")
		const addressNgOTZrW = "0x0000000000000000000000000000000000000001"
		const addressddLMvN5 = accounts[1]
		const uintUxWd8EK = BigInt("1882")
		const addressdCaViJz = accounts[4]
		const addressKSOoVGx = accounts[2]
		const uintBIvK99v = BigInt("1169")
		const addressbJn393H = accounts[3]
		const uintp7xqTjF = BigInt("1059")
		const uintmDcgo76 = BigInt("1389")
		const addresspVhar8P = accounts[0]
		const uintp9NNx8z = BigInt("1151")
		const addressk8uuDDM = accounts[3]
		const uint256VWpV7dk = await KPLAYA1GmSYf.balanceOf.call(addressnEztJZ, {from: accounts[0]});
//		const addressepJlnlv = await KPLAYA1GmSYf.burn.call(addressNgOTZrW, uintbcg54r, {from: accounts[3]});
//		const boolCjBYHZ = await KPLAYA1GmSYf.isFrozen.call(addressddLMvN5, {from: accounts[0]});
//		const boolXtB3Zzy = await KPLAYA1GmSYf.transfer.call(addressdCaViJz, uintUxWd8EK, {from: accounts[0]});
//		await KPLAYA1GmSYf.unpause.call({from: accounts[4]});
//		const booldV8eHEp = await KPLAYA1GmSYf.isFrozen.call(addressKSOoVGx, {from: accounts[3]});
//		const booltuB06UU = await KPLAYA1GmSYf.approve.call(addressbJn393H, uintBIvK99v, {from: accounts[1]});
//		const boolkRZgckt = await KPLAYA1GmSYf.transferWithLock.call(addresspVhar8P, uintmDcgo76, uintp7xqTjF, {from: accounts[3]});
//		await KPLAYA1GmSYf.lockState.call(addressk8uuDDM, uintp9NNx8z, {from: accounts[4]});

		assert.equal(uint256VWpV7dk, BigInt("0"))
		await expect(KPLAYA1GmSYf.burn.call(addressNgOTZrW, uintbcg54r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressW5WTe7k = accounts[1]
		const uintk5NQxJs = BigInt("1398")
		const addresspc3T8pi = "0x0000000000000000000000000000000000000001"
		const uintZIlnsv = BigInt("1587")
		const addressbPfyxza = accounts[4]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressW5WTe7k, {from: accounts[3]});
//		const addressyXpwxvW = await KPLAYixaxXUv.unlock.call(addresspc3T8pi, uintk5NQxJs, {from: accounts[1]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressbPfyxza, uintZIlnsv, {from: accounts[3]});

		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.unlock.call(addresspc3T8pi, uintk5NQxJs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYixaxXUv = await KPLAY.new({from: accounts[1]});
		const addressH5fYCCk = accounts[1]
		const addressgDxSM7T = accounts[1]
		const uintMgTPVt = BigInt("1398")
		const addressAcONvRM = "0x0000000000000000000000000000000000000001"
		const uintlWce3MA = BigInt("1587")
		const addressyP9HogP = accounts[4]
		const uint256PgM6ayw = await KPLAYixaxXUv.balanceOf.call(addressH5fYCCk, {from: accounts[3]});
		const addresstjk0wd = await KPLAYixaxXUv.freeze.call(addressgDxSM7T, {from: accounts[1]});
//		const addressyXpwxvW = await KPLAYixaxXUv.unlock.call(addressAcONvRM, uintMgTPVt, {from: accounts[1]});
//		const boolB2GQJk = await KPLAYixaxXUv.decreaseAllowance.call(addressyP9HogP, uintlWce3MA, {from: accounts[3]});
//		await KPLAYixaxXUv.whenNotFrozen.call({from: accounts[5]});

		assert.equal(uint256PgM6ayw, BigInt("10000000000000000"))
		await expect(KPLAYixaxXUv.unlock.call(addressAcONvRM, uintMgTPVt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUDqwGXT = await KPLAY.new({from: accounts[3]});
		const addressHJalocR = accounts[4]
		const addressaSjyBUp = "0x0000000000000000000000000000000000000001"
		const uintwFTeks = BigInt("1893")
		const uintIxHGCq = BigInt("1163")
		const addressUBU1cd = accounts[1]
		const uintm0tr4xv = BigInt("1522")
		const addressLDJb03t = accounts[3]
		const uint256ph4fo9u = await KPLAYUDqwGXT.allowance.call(addressaSjyBUp, addressHJalocR, {from: accounts[4]});
		const booljykFrsE = await KPLAYUDqwGXT.transferWithLockAfter.call(addressUBU1cd, uintIxHGCq, uintwFTeks, {from: accounts[3]});
//		const boolLqdBZzu = await KPLAYUDqwGXT.transfer.call(addressLDJb03t, uintm0tr4xv, {from: accounts[0]});

		assert.equal(booljykFrsE, true)
		assert.equal(uint256ph4fo9u, BigInt("0"))
		await expect(KPLAYUDqwGXT.transfer.call(addressLDJb03t, uintm0tr4xv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})