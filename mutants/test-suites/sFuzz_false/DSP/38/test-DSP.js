const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringVPTlElJ = "E1k9QisNuIQkpl8OKEwP2IZeHNC6sKx"
		const stringSNyyBtw = "UDYA1QsFgweGvckjBW2cgVhmjFxbAfVbBaz7l8m5KSUrOnVXcaJAGbLhebgbtYSxrzQ"
		const uintxUqox9J = BigInt("106")
		const DSPlnbMnp7 = await DSP.new(stringVPTlElJ, stringSNyyBtw, uintxUqox9J, {from: accounts[1]});
		const addressIMC35e6 = accounts[4]
		const uinthbm8Bmo = BigInt("1843")
		const addressMEQxP2I = accounts[4]
		const addressD5jHQMC = accounts[2]
		const uintwnfzSnN = BigInt("1930")
		const addressjbGvU1L = accounts[4]
		const uintZy8jvAI = BigInt("1411")
		const addressIsIShnH = accounts[1]
		const addressdTnub6 = await DSPlnbMnp7.addPauser.call(addressIMC35e6, {from: accounts[1]});
		const boolTdeCPQ3 = await DSPlnbMnp7.transferFrom.call(addressD5jHQMC, addressMEQxP2I, uinthbm8Bmo, {from: accounts[3]});
		const boolMbaLz0A = await DSPlnbMnp7.mint.call(addressjbGvU1L, uintwnfzSnN, {from: "0x0000000000000000000000000000000000000001"});
		const boolrOOCBUN = await DSPlnbMnp7.unlock.call(addressIsIShnH, uintZy8jvAI, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPh8uJHaN = await DSP.new({from: accounts[1]});
		const addressIRWa7pY = accounts[4]
		const uintSEnfcOz = BigInt("1439")
		const addressx6OEv5F = accounts[4]
		const addressPeJ0Yo = accounts[0]
		const addressVX08wKX = accounts[5]
//		const addressfnojI0V = await DSPh8uJHaN.addPauser.call(addressIRWa7pY, {from: accounts[5]});
//		const boolnVKaUWD = await DSPh8uJHaN.transfer.call(addressx6OEv5F, uintSEnfcOz, {from: accounts[1]});
//		await DSPh8uJHaN.f.call({from: accounts[4]});
//		const boolVaBEkAT = await DSPh8uJHaN.isPauser.call(addressPeJ0Yo, {from: accounts[0]});
//		const boolVPrW4vj = await DSPh8uJHaN.isPauser.call(addressVX08wKX, {from: accounts[1]});

		await expect(DSPh8uJHaN.addPauser.call(addressIRWa7pY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPHWqmRPW = await DSP.new({from: accounts[2]});
		const stringBfaLe9k = await DSPHWqmRPW.symbol.call({from: accounts[4]});
//		const boolw6dnbi = await DSPHWqmRPW.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await DSPHWqmRPW.onlyOwner.call({from: accounts[0]});

		assert.equal(stringBfaLe9k, "DSP")
		await expect(DSPHWqmRPW.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintdjW0uyL = BigInt("1744")
		const addressEa7Kn3f = accounts[3]
		const addressbCJHXKl = accounts[5]
		const addressRsuxhzr = accounts[0]
		const addressG288oE9 = "0x0000000000000000000000000000000000000001"
		const uintWAeAIFA = BigInt("1873")
		const addressXMMvyof = accounts[5]
		const addressEN4Fmej = accounts[4]
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressbCJHXKl, addressEa7Kn3f, uintdjW0uyL, {from: accounts[0]});
//		const uint256WDLyu2l = await DSPhP59Ckq.balanceOf.call(addressRsuxhzr, {from: accounts[2]});
//		const addressC8EGN5 = await DSPhP59Ckq.transferOwnership.call(addressG288oE9, {from: accounts[0]});
//		const boolKXmbwxi = await DSPhP59Ckq.transferFrom.call(addressEN4Fmej, addressXMMvyof, uintWAeAIFA, {from: accounts[4]});

		await expect(DSPhP59Ckq.transferFrom.call(addressbCJHXKl, addressEa7Kn3f, uintdjW0uyL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintUhIhHXp = BigInt("630")
		const addressElL79pE = accounts[1]
		const uintAeFsJWM = BigInt("1744")
		const addressbGOtltb = accounts[3]
		const addressd9AoL2k = accounts[5]
		const addressYtcJNa = accounts[0]
		const addressGQui93s = "0x0000000000000000000000000000000000000001"
		const uintNpxgndp = BigInt("1873")
		const addressNtRiEQZ = accounts[5]
		const addressfYcYatY = accounts[4]
//		const boolrBmEHQf = await DSPhP59Ckq.decreaseAllowance.call(addressElL79pE, uintUhIhHXp, {from: accounts[0]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressd9AoL2k, addressbGOtltb, uintAeFsJWM, {from: accounts[0]});
//		const uint256WDLyu2l = await DSPhP59Ckq.balanceOf.call(addressYtcJNa, {from: accounts[2]});
//		const addressC8EGN5 = await DSPhP59Ckq.transferOwnership.call(addressGQui93s, {from: accounts[0]});
//		const boolKXmbwxi = await DSPhP59Ckq.transferFrom.call(addressfYcYatY, addressNtRiEQZ, uintNpxgndp, {from: accounts[4]});

		await expect(DSPhP59Ckq.decreaseAllowance.call(addressElL79pE, uintUhIhHXp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintxLQ0Bwv = BigInt("1744")
		const addressKn89QxN = accounts[3]
		const addressCK7J5FQ = accounts[6]
		const addressDKB4HTc = accounts[0]
		const addressHc1oeU7 = "0x0000000000000000000000000000000000000001"
		const uintpIhohV8 = BigInt("1873")
		const addressJS356k2 = accounts[5]
		const addressb5LdbWj = accounts[4]
//		await DSPhP59Ckq.renouncePauser.call({from: accounts[1]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressCK7J5FQ, addressKn89QxN, uintxLQ0Bwv, {from: accounts[0]});
//		const uint256WDLyu2l = await DSPhP59Ckq.balanceOf.call(addressDKB4HTc, {from: accounts[2]});
//		const stringZt9WMUo = await DSPhP59Ckq.name.call({from: accounts[4]});
//		const addressC8EGN5 = await DSPhP59Ckq.transferOwnership.call(addressHc1oeU7, {from: accounts[0]});
//		const boolKXmbwxi = await DSPhP59Ckq.transferFrom.call(addressb5LdbWj, addressJS356k2, uintpIhohV8, {from: accounts[4]});

		await expect(DSPhP59Ckq.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIyTCVlK = await DSP.new({from: accounts[3]});
		const uintDyIc9CT = BigInt("62")
		const uintiT1hVj = BigInt("1407")
		const addressvj1c0RW = accounts[1]
		const uintRV7WCBr = BigInt("535")
		const addressGMlBAu4 = accounts[1]
//		await DSPIyTCVlK.onlyNewOwner.call({from: accounts[5]});
//		await DSPIyTCVlK.pause.call({from: accounts[2]});
//		const boolAD58cgM = await DSPIyTCVlK.lock.call(addressvj1c0RW, uintiT1hVj, uintDyIc9CT, {from: accounts[4]});
//		const boolOztLFB4 = await DSPIyTCVlK.transfer.call(addressGMlBAu4, uintRV7WCBr, {from: accounts[1]});
//		const stringXsaX5X9 = await DSPIyTCVlK.symbol.call({from: accounts[0]});

		await expect(DSPIyTCVlK.onlyNewOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintfkmM6Kt = BigInt("1744")
		const addressxlhKW1Z = accounts[3]
		const addressY4pazQ1 = accounts[5]
		const uintrL6L6iI = BigInt("1657")
		const addressm8g9Xxv = accounts[0]
		const addressvPktsQa = "0x0000000000000000000000000000000000000001"
		const uintYolsvQD = BigInt("1873")
		const addressEkgF5yb = accounts[5]
		const addressWPlGeEx = accounts[4]
		const boolRrhghYX = await DSPhP59Ckq.paused.call({from: accounts[3]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressY4pazQ1, addressxlhKW1Z, uintfkmM6Kt, {from: accounts[0]});
//		const boolg4HmJ6w = await DSPhP59Ckq.decreaseAllowance.call(addressm8g9Xxv, uintrL6L6iI, {from: accounts[4]});
//		const addressC8EGN5 = await DSPhP59Ckq.transferOwnership.call(addressvPktsQa, {from: accounts[0]});
//		const boolKXmbwxi = await DSPhP59Ckq.transferFrom.call(addressWPlGeEx, addressEkgF5yb, uintYolsvQD, {from: accounts[4]});

		assert.equal(boolRrhghYX, false)
		await expect(DSPhP59Ckq.transferFrom.call(addressY4pazQ1, addressxlhKW1Z, uintfkmM6Kt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintEp6rGL = BigInt("634")
		const addressCLKbTdI = accounts[1]
		const addressxNnXQKb = "0x0000000000000000000000000000000000000001"
		const uintkQBVznz = BigInt("911")
		const addresshyYBM30 = accounts[3]
		const uintDT1chsg = BigInt("1873")
		const addressHOytjSO = accounts[5]
		const addressQt4Izz8 = accounts[4]
		const booltJhSm8d = await DSPhP59Ckq.approve.call(addressCLKbTdI, uintEp6rGL, {from: accounts[3]});
//		const addressC8EGN5 = await DSPhP59Ckq.transferOwnership.call(addressxNnXQKb, {from: accounts[0]});
//		const boolNGwdC0H = await DSPhP59Ckq.burnFrombyOwner.call(addresshyYBM30, uintkQBVznz, {from: accounts[0]});
//		const boolj6En8pW = await DSPhP59Ckq.paused.call({from: accounts[0]});
//		await DSPhP59Ckq.onlyPauser.call({from: accounts[1]});
//		const boolKXmbwxi = await DSPhP59Ckq.transferFrom.call(addressQt4Izz8, addressHOytjSO, uintDT1chsg, {from: accounts[4]});

		assert.equal(booltJhSm8d, true)
		await expect(DSPhP59Ckq.transferOwnership.call(addressxNnXQKb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintBrerUpL = BigInt("1497")
		const addressjIkYJ0n = accounts[2]
		const uintQnEiRvr = BigInt("1744")
		const addressbjzSLg0 = accounts[4]
		const address2ZL7q2 = accounts[5]
		const uintoifLQU3 = BigInt("876")
		const addressH7cZMes = accounts[4]
		const addressVqFdxU5 = accounts[2]
//		const booljAka6NO = await DSPhP59Ckq.transfer.call(addressjIkYJ0n, uintBrerUpL, {from: accounts[4]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(address2ZL7q2, addressbjzSLg0, uintQnEiRvr, {from: accounts[0]});
//		const boolkxFpr8y = await DSPhP59Ckq.transferFrom.call(addressVqFdxU5, addressH7cZMes, uintoifLQU3, {from: accounts[0]});

		await expect(DSPhP59Ckq.transfer.call(addressjIkYJ0n, uintBrerUpL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const addresswHUUMjk = accounts[2]
		const uintQKvm0Gc = BigInt("1744")
		const address0lHZNY = accounts[4]
		const addressf3SsOkM = accounts[6]
//		const addressmFQDxN = await DSPhP59Ckq.removePauser.call(addresswHUUMjk, {from: accounts[3]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressf3SsOkM, address0lHZNY, uintQKvm0Gc, {from: accounts[0]});

		await expect(DSPhP59Ckq.removePauser.call(addresswHUUMjk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintxcEWGPn = BigInt("840")
		const uintEOph7N = BigInt("1256")
		const addresskXNoLpO = accounts[4]
		const uintY8dOOpO = BigInt("1754")
		const addressrHuCbCo = accounts[4]
		const addressKxPewec = accounts[5]
		const boolbRTGPKw = await DSPhP59Ckq.transferWithLock.call(addresskXNoLpO, uintEOph7N, uintxcEWGPn, {from: accounts[3]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressKxPewec, addressrHuCbCo, uintY8dOOpO, {from: accounts[0]});

		assert.equal(boolbRTGPKw, true)
		await expect(DSPhP59Ckq.transferFrom.call(addressKxPewec, addressrHuCbCo, uintY8dOOpO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressdYAZJB1 = accounts[1]
		const uintK8Ls6IR = BigInt("1063")
		const addressXyfSnaZ = accounts[2]
		const uintEbGE5Ta = BigInt("1682")
		const addresshpQxg3U = accounts[2]
		const addressKySWpTw = accounts[0]
		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressdYAZJB1, {from: accounts[1]});
		const boolhE7ohyI = await DSPj2XFZWm.approve.call(addressXyfSnaZ, uintK8Ls6IR, {from: accounts[3]});
//		const boolkNTcTqS = await DSPj2XFZWm.transferFrom.call(addressKySWpTw, addresshpQxg3U, uintEbGE5Ta, {from: accounts[3]});

		assert.equal(boolhE7ohyI, true)
		assert.equal(uint256GoQU9R9, BigInt("100000000000000000000000000000"))
		await expect(DSPj2XFZWm.transferFrom.call(addressKySWpTw, addresshpQxg3U, uintEbGE5Ta, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP09wtOi = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscrj1wc9 = accounts[1]
		await DSP09wtOi.pause.call({from: accounts[2]});
		await DSP09wtOi.pause.call({from: accounts[2]});
		const uint256JTeu0KQ = await DSP09wtOi.totalSupply.call({from: accounts[3]});
		const uint256ad3DXjS = await DSP09wtOi.balanceOf.call(addresscrj1wc9, {from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const addressUdYoaQz = accounts[3]
		const uintCRC3nrd = BigInt("1488")
		const addressFMfgfCk = accounts[3]
		const addresseDtPDIc = await DSPhP59Ckq.transferOwnership.call(addressUdYoaQz, {from: accounts[3]});
//		const booljAka6NO = await DSPhP59Ckq.transfer.call(addressFMfgfCk, uintCRC3nrd, {from: accounts[4]});
//		const stringpMKBj4 = await DSPhP59Ckq.name.call({from: accounts[3]});

		await expect(DSPhP59Ckq.transfer.call(addressFMfgfCk, uintCRC3nrd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPpWAhIIr = await DSP.new({from: accounts[2]});
		const addressCkiBTRa = accounts[4]
		const uintfn9MdYA = BigInt("971")
		const addressqGbLuQR = accounts[1]
		const addressM0ADxQ1 = accounts[1]
		const uint256xQkPFdc = await DSPpWAhIIr.totalSupply.call({from: accounts[4]});
//		const boolUvb5S2X = await DSPpWAhIIr.freezeAccount.call(addressCkiBTRa, {from: accounts[0]});
//		const boolsuDbt0V = await DSPpWAhIIr.increaseAllowance.call(addressqGbLuQR, uintfn9MdYA, {from: accounts[0]});
//		const boolRzLq3VD = await DSPpWAhIIr.isPauser.call(addressM0ADxQ1, {from: accounts[4]});

		assert.equal(uint256xQkPFdc, BigInt("100000000000000000000000000000"))
		await expect(DSPpWAhIIr.freezeAccount.call(addressCkiBTRa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressjnkSAnu = accounts[2]
//		await DSPj2XFZWm.pause.call({from: accounts[1]});
//		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressjnkSAnu, {from: accounts[1]});

		await expect(DSPj2XFZWm.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressLfVCvET = accounts[3]
		const addressRj79Ulr = accounts[3]
		const addressFrnsomr = accounts[0]
		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressLfVCvET, {from: accounts[1]});
		const uint256BhVVTWw = await DSPj2XFZWm.allowance.call(addressFrnsomr, addressRj79Ulr, {from: accounts[4]});

		assert.equal(uint256BhVVTWw, BigInt("0"))
		assert.equal(uint256GoQU9R9, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintfsupgTb = BigInt("1424")
		const addressPEqsbMs = accounts[4]
		const addressI8HioI2 = accounts[2]
		const uintAhcQ4dF = BigInt("1744")
		const addresstE5uGr = accounts[5]
		const addressuMFgV5l = accounts[5]
		const uint8zplE7X0 = await DSPhP59Ckq.decimals.call({from: accounts[3]});
//		const boolKdz6nCQ = await DSPhP59Ckq.transferFrom.call(addressI8HioI2, addressPEqsbMs, uintfsupgTb, {from: accounts[3]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressuMFgV5l, addresstE5uGr, uintAhcQ4dF, {from: accounts[0]});

		assert.equal(uint8zplE7X0, BigInt("18"))
		await expect(DSPhP59Ckq.transferFrom.call(addressI8HioI2, addressPEqsbMs, uintfsupgTb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressBauJlMm = accounts[2]
		const addressUaE6VgF = accounts[1]
		const uintXRufN0g = BigInt("305")
		const addressMw9ZwZw = accounts[5]
		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressBauJlMm, {from: accounts[1]});
//		const addresskbVzlvX = await DSPj2XFZWm.addPauser.call(addressUaE6VgF, {from: accounts[1]});
//		const boolHRjacW = await DSPj2XFZWm.increaseAllowance.call(addressMw9ZwZw, uintXRufN0g, {from: accounts[2]});

		assert.equal(uint256GoQU9R9, BigInt("0"))
		await expect(DSPj2XFZWm.addPauser.call(addressUaE6VgF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const uintC9OlsOA = BigInt("1172")
		const addressV0aB44u = accounts[3]
		const uintcGcFwJ0 = BigInt("1497")
		const addressQUgsay = accounts[4]
		const uintdVd95eo = BigInt("1662")
		const uintSKzpaVo = BigInt("1148")
		const addresseIdLzVT = accounts[3]
		const boolocnX017 = await DSPhP59Ckq.increaseAllowance.call(addressV0aB44u, uintC9OlsOA, {from: accounts[4]});
		const uint256j3f48x1 = await DSPhP59Ckq.totalSupply.call({from: accounts[3]});
//		const booljAka6NO = await DSPhP59Ckq.transfer.call(addressQUgsay, uintcGcFwJ0, {from: accounts[4]});
//		const boolqAXZHE = await DSPhP59Ckq.lock.call(addresseIdLzVT, uintSKzpaVo, uintdVd95eo, {from: accounts[0]});

		assert.equal(boolocnX017, true)
		assert.equal(uint256j3f48x1, BigInt("100000000000000000000000000000"))
		await expect(DSPhP59Ckq.transfer.call(addressQUgsay, uintcGcFwJ0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressrunVHi = accounts[4]
		const addressEzYwQb = accounts[3]
		const uinttaqiMf2 = BigInt("355")
		const addressoq41zcp = accounts[0]
		const addressA3mPZ4t = await DSPj2XFZWm.transferOwnership.call(addressrunVHi, {from: accounts[1]});
		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressEzYwQb, {from: accounts[1]});
		const booldEDBvRX = await DSPj2XFZWm.mint.call(addressoq41zcp, uinttaqiMf2, {from: accounts[1]});

		assert.equal(booldEDBvRX, true)
		assert.equal(uint256GoQU9R9, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const addressrFqsxvl = "0x0000000000000000000000000000000000000001"
		const addressv8L27d9 = accounts[3]
		const uinttQfkh1N = BigInt("1497")
		const addressVMA8it8 = accounts[4]
		const boolik2yLko = await DSPhP59Ckq.isPauser.call(addressrFqsxvl, {from: accounts[2]});
		const addressXZWBrk9 = await DSPhP59Ckq.upgradeTo.call(addressv8L27d9, {from: accounts[3]});
//		const booljAka6NO = await DSPhP59Ckq.transfer.call(addressVMA8it8, uinttQfkh1N, {from: accounts[4]});

		assert.equal(boolik2yLko, false)
		await expect(DSPhP59Ckq.transfer.call(addressVMA8it8, uinttQfkh1N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressufmEu0j = accounts[3]
		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressufmEu0j, {from: accounts[1]});
		const stringis9CLqc = await DSPj2XFZWm.name.call({from: accounts[3]});

		assert.equal(stringis9CLqc, "DSP")
		assert.equal(uint256GoQU9R9, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPj2XFZWm = await DSP.new({from: accounts[1]});
		const addressmA0dxn = accounts[2]
		const addressRQoR2lv = accounts[2]
//		await DSPj2XFZWm.f.call({from: accounts[0]});
//		const uint256GoQU9R9 = await DSPj2XFZWm.balanceOf.call(addressmA0dxn, {from: accounts[1]});
//		const uint256LBv4zAd = await DSPj2XFZWm.balanceOf.call(addressRQoR2lv, {from: accounts[4]});

		await expect(DSPj2XFZWm.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhP59Ckq = await DSP.new({from: accounts[3]});
		const addressnSqPiHo = accounts[3]
		const uintlLbo9Q = BigInt("1581")
		const uintKHFcHlH = BigInt("850")
		const addresssLXSGoV = accounts[2]
		const uintWbG56c = BigInt("1744")
		const addressjZeqf70 = accounts[4]
		const addressDRnZptJ = accounts[6]
		const boolz4OAMee = await DSPhP59Ckq.isOwner.call(addressnSqPiHo, {from: accounts[3]});
//		const boolKapMIh = await DSPhP59Ckq.transferWithLock.call(addresssLXSGoV, uintKHFcHlH, uintlLbo9Q, {from: accounts[0]});
//		const boolvs5ezri = await DSPhP59Ckq.transferFrom.call(addressDRnZptJ, addressjZeqf70, uintWbG56c, {from: accounts[0]});

		assert.equal(boolz4OAMee, true)
		await expect(DSPhP59Ckq.transferWithLock.call(addresssLXSGoV, uintKHFcHlH, uintlLbo9Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})