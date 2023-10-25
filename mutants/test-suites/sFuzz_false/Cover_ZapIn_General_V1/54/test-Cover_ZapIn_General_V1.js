const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintFVQI2DW = BigInt("945")
		const Cover_ZapIn_General_V1mbOReO = await Cover_ZapIn_General_V1.new(uintFVQI2DW, {from: accounts[3]});
		const addressJmtTGyi = accounts[3]
		const uintCPy7zLW = BigInt("186")
		const addressvjlHHe = accounts[2]
		const addressQbIj18Z = accounts[4]
		await Cover_ZapIn_General_V1mbOReO.toggleContractActive.call({from: accounts[3]});
		const 
CfLwbJU = await Cover_ZapIn_General_V1mbOReO._getCoverDetails.call(addressJmtTGyi, {from: accounts[0]});
		const uint16dKMsqv4 = await Cover_ZapIn_General_V1mbOReO.set_new_goodwill.call(uintCPy7zLW, {from: "0x0000000000000000000000000000000000000001"});
		const addressGRFZL2L = await Cover_ZapIn_General_V1mbOReO.inCaseTokengetsStuck.call(addressvjlHHe, {from: accounts[1]});
		const 
YQUaCCE = await Cover_ZapIn_General_V1mbOReO._getCoverDetails.call(addressQbIj18Z, {from: accounts[2]});
		await Cover_ZapIn_General_V1mbOReO.toggleContractActive.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCcqpp64 = BigInt("1903")
		const Cover_ZapIn_General_V1z5V5NOd = await Cover_ZapIn_General_V1.new(uintCcqpp64, {from: accounts[3]});
		const bytejXHiK3T = "0x120e082017161c081210020a06030917050f090c1d0a091d1c1918020a"
		const addressisWQUoA = accounts[1]
		const addressX6XxyfS = accounts[3]
		const uintIi5a10y = BigInt("565")
		const addressSGvABZ = accounts[4]
		const addressWTvkxKj = accounts[0]
		const addressGw1XxZc = accounts[4]
		const addressnPyvj8 = accounts[5]
		const 
YGfOJk6 = await Cover_ZapIn_General_V1z5V5NOd.ZapIn.call(addressnPyvj8, addressGw1XxZc, addressWTvkxKj, addressSGvABZ, uintIi5a10y, addressX6XxyfS, addressisWQUoA, bytejXHiK3T, {from: "0x0000000000000000000000000000000000000001"});
		const boolBIwilt3 = await Cover_ZapIn_General_V1z5V5NOd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint0EAsHE = BigInt("654")
		const Cover_ZapIn_General_V1wH0vQQR = await Cover_ZapIn_General_V1.new(uint0EAsHE, {from: accounts[3]});
		const addressdQwHMP8 = accounts[3]
		const addressJC4twtY = accounts[1]
		await Cover_ZapIn_General_V1wH0vQQR.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addresspRkIUEa = await Cover_ZapIn_General_V1wH0vQQR.toPayable.call(addressdQwHMP8, {from: "0x0000000000000000000000000000000000000001"});
		const addressu3jnudX = await Cover_ZapIn_General_V1wH0vQQR.transferOwnership.call(addressJC4twtY, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintobxd12W = BigInt("244")
		const Cover_ZapIn_General_V1wclqbLN = await Cover_ZapIn_General_V1.new(uintobxd12W, {from: "0x0000000000000000000000000000000000000001"});
		const addresscmBRLsx = accounts[5]
		const uintlNazcVw = BigInt("1302")
		const byteWuSdQ3V = "0x14081c031911181e08141c140906"
		const addressgDcYPkq = accounts[4]
		const addressM0y26XX = accounts[4]
		const uintcUPuIZQ = BigInt("1432")
		const addresszfPUPXT = accounts[1]
		const addressnFMznZj = accounts[4]
		const addressxpkDPSN = accounts[4]
		const addressgoTw3Mx = accounts[3]
		const addressGVjRHka = accounts[0]
		const addressKsJ4EqS = accounts[0]
		const uintXCxwMaZ = BigInt("1658")
		const addressnQ2sa0E = accounts[2]
		const 
io1joLs = await Cover_ZapIn_General_V1wclqbLN._getCoverDetails.call(addresscmBRLsx, {from: accounts[3]});
		const uint16tsBegXP = await Cover_ZapIn_General_V1wclqbLN.set_new_goodwill.call(uintlNazcVw, {from: accounts[4]});
		const 
SCpXfnL = await Cover_ZapIn_General_V1wclqbLN.ZapIn.call(addressgoTw3Mx, addressxpkDPSN, addressnFMznZj, addresszfPUPXT, uintcUPuIZQ, addressM0y26XX, addressgDcYPkq, byteWuSdQ3V, {from: accounts[3]});
		const 
dMlTOhd = await Cover_ZapIn_General_V1wclqbLN._enterPosition.call(addressnQ2sa0E, uintXCxwMaZ, addressKsJ4EqS, addressGVjRHka, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQ42E603 = BigInt("1903")
		const Cover_ZapIn_General_V1z5V5NOd = await Cover_ZapIn_General_V1.new(uintQ42E603, {from: accounts[3]});
		const boolBIwilt3 = await Cover_ZapIn_General_V1z5V5NOd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresscTWn5n = await Cover_ZapIn_General_V1z5V5NOd.owner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaYWw5ec = BigInt("1793")
		const Cover_ZapIn_General_V1D2kWHb = await Cover_ZapIn_General_V1.new(uintaYWw5ec, {from: accounts[0]});
		const byte5pdvCE = "0x0719201c031a1015071d18"
		const addresszFHKtQt = accounts[1]
		const addresswrzNld6 = accounts[1]
		const uintZHU5qBY = BigInt("1339")
		const addresswIB9kHH = accounts[5]
		const addressyl6YRI = accounts[2]
		const addresshJIQu1H = accounts[1]
		const addressJVIZ1jB = "0x0000000000000000000000000000000000000000"
		const 
bN69Zy5 = await Cover_ZapIn_General_V1D2kWHb.ZapIn.call(addressJVIZ1jB, addresshJIQu1H, addressyl6YRI, addresswIB9kHH, uintZHU5qBY, addresswrzNld6, addresszFHKtQt, byte5pdvCE, {from: accounts[0]});
		await Cover_ZapIn_General_V1D2kWHb.nonReentrant.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintM876Bio = BigInt("1903")
		const Cover_ZapIn_General_V1z5V5NOd = await Cover_ZapIn_General_V1.new(uintM876Bio, {from: accounts[3]});
		await Cover_ZapIn_General_V1z5V5NOd.renounceOwnership.call({from: accounts[3]});
		const boolBIwilt3 = await Cover_ZapIn_General_V1z5V5NOd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintbJIIJa7 = BigInt("1903")
		const Cover_ZapIn_General_V1z5V5NOd = await Cover_ZapIn_General_V1.new(uintbJIIJa7, {from: accounts[3]});
		const boolBIwilt3 = await Cover_ZapIn_General_V1z5V5NOd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1z5V5NOd.withdraw.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjtJV7IR = BigInt("1117")
		const Cover_ZapIn_General_V1mZsw0gl = await Cover_ZapIn_General_V1.new(uintjtJV7IR, {from: accounts[2]});
		const uintsTNJ8dn = BigInt("248")
		await Cover_ZapIn_General_V1mZsw0gl.withdraw.call({from: accounts[2]});
		const uint16VSwlP9A = await Cover_ZapIn_General_V1mZsw0gl.set_new_goodwill.call(uintsTNJ8dn, {from: accounts[2]});
		await Cover_ZapIn_General_V1mZsw0gl.nonReentrant.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintW9j44Fs = BigInt("1903")
		const Cover_ZapIn_General_V1z5V5NOd = await Cover_ZapIn_General_V1.new(uintW9j44Fs, {from: accounts[3]});
		const addresss1MnE5F = accounts[0]
		const byter744hwn = "0x18050c070200040c0108"
		const addresscTwZGRh = accounts[2]
		const addressp2TVdHT = accounts[1]
		const uintN4uXuv0 = BigInt("922")
		const address9CtK05 = accounts[4]
		const addressF3KdN7K = accounts[1]
		const addressBA4SHFj = accounts[3]
		const address6pMCjv = accounts[5]
		const addresstvqaoFX = await Cover_ZapIn_General_V1z5V5NOd.transferOwnership.call(addresss1MnE5F, {from: accounts[3]});
		const 
ksxSLp = await Cover_ZapIn_General_V1z5V5NOd.ZapIn.call(address6pMCjv, addressBA4SHFj, addressF3KdN7K, address9CtK05, uintN4uXuv0, addressp2TVdHT, addresscTwZGRh, byter744hwn, {from: accounts[4]});
		const boolBIwilt3 = await Cover_ZapIn_General_V1z5V5NOd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});
})