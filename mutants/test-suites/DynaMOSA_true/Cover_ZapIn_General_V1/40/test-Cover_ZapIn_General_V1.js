const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEMnG8oX = BigInt("129")
		const Cover_ZapIn_General_V1l6JDWCK = await Cover_ZapIn_General_V1.new(uintEMnG8oX, {from: accounts[0]});
		const uintEyaQIQH = BigInt("869")
		const addressrOR7Yk9 = accounts[3]
		const addressqHIc7x4 = accounts[2]
		await Cover_ZapIn_General_V1l6JDWCK._enterCover.call(addressrOR7Yk9, uintEyaQIQH, {from: accounts[5]});
		await Cover_ZapIn_General_V1l6JDWCK.stopInEmergency.call({from: accounts[4]});
		await Cover_ZapIn_General_V1l6JDWCK.renounceOwnership.call({from: accounts[2]});
		const 
s44weRt = await Cover_ZapIn_General_V1l6JDWCK._getCoverDetails.call(addressqHIc7x4, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintR492lNg = BigInt("1344")
		const Cover_ZapIn_General_V1t9XzA59 = await Cover_ZapIn_General_V1.new(uintR492lNg, {from: accounts[1]});
		const uintz9we8BJ = BigInt("262")
		const addressfPrVWf = accounts[3]
		const uintt6SLye5 = BigInt("1947")
		const addressGyjl0Aj = accounts[3]
		const addressD6LVyhQ = "0x0000000000000000000000000000000000000001"
		const uinta0dUlp = BigInt("944")
		const addressr9pRJpM = accounts[1]
		await Cover_ZapIn_General_V1t9XzA59.toggleContractActive.call({from: accounts[1]});
		await Cover_ZapIn_General_V1t9XzA59.nonReentrant.call({from: accounts[4]});
		await Cover_ZapIn_General_V1t9XzA59.stopInEmergency.call({from: accounts[2]});
		await Cover_ZapIn_General_V1t9XzA59._enterCover.call(addressfPrVWf, uintz9we8BJ, {from: accounts[5]});
		const uint16FC8LNTO = await Cover_ZapIn_General_V1t9XzA59.set_new_goodwill.call(uintt6SLye5, {from: accounts[5]});
		const 
tjWLgs8 = await Cover_ZapIn_General_V1t9XzA59._enterPosition.call(addressr9pRJpM, uinta0dUlp, addressD6LVyhQ, addressGyjl0Aj, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaXe1igy = BigInt("1584")
		const Cover_ZapIn_General_V1zjCXk1H = await Cover_ZapIn_General_V1.new(uintaXe1igy, {from: accounts[0]});
		const byteY0GxbV5 = "0x17110f0717191d1205151004170a0e0715091305"
		const addressELuPV9 = accounts[1]
		const addressKBAKGur = accounts[5]
		const uint3HmDmD = BigInt("962")
		const addressC9FMqGP = accounts[1]
		const addressksu5vhK = accounts[5]
		const addressiO6v2r = accounts[4]
		const addresspbb4PkL = accounts[3]
		const uintC9rYWxQ = BigInt("1659")
		const 
hABWQbf = await Cover_ZapIn_General_V1zjCXk1H.ZapIn.call(addresspbb4PkL, addressiO6v2r, addressksu5vhK, addressC9FMqGP, uint3HmDmD, addressKBAKGur, addressELuPV9, byteY0GxbV5, {from: accounts[1]});
		const uint16CApFNP = await Cover_ZapIn_General_V1zjCXk1H.set_new_goodwill.call(uintC9rYWxQ, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintryKuBP9 = BigInt("1997")
		const Cover_ZapIn_General_V1KuFbdkY = await Cover_ZapIn_General_V1.new(uintryKuBP9, {from: accounts[1]});
		const addresskaCN2uY = accounts[0]
		const uintse89AiW = BigInt("100")
		const addressCx1t9Xn = await Cover_ZapIn_General_V1KuFbdkY.inCaseTokengetsStuck.call(addresskaCN2uY, {from: accounts[3]});
		await Cover_ZapIn_General_V1KuFbdkY.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1KuFbdkY.toggleContractActive.call({from: accounts[1]});
		const booluT0tQ2y = await Cover_ZapIn_General_V1KuFbdkY.isOwner.call({from: accounts[2]});
		const uint16fdZIuMj = await Cover_ZapIn_General_V1KuFbdkY.set_new_goodwill.call(uintse89AiW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintbB6oUYo = BigInt("391")
		const Cover_ZapIn_General_V1TKYuxe = await Cover_ZapIn_General_V1.new(uintbB6oUYo, {from: accounts[0]});
		const addressXwipyR5 = accounts[3]
		const addressds97liH = accounts[4]
		const addressqPBdm8n = await Cover_ZapIn_General_V1TKYuxe.inCaseTokengetsStuck.call(addressXwipyR5, {from: accounts[0]});
		await Cover_ZapIn_General_V1TKYuxe.withdraw.call({from: accounts[2]});
		const boolGMR9jUp = await Cover_ZapIn_General_V1TKYuxe.isOwner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1TKYuxe.stopInEmergency.call({from: accounts[4]});
		const addresstA3T4K5 = await Cover_ZapIn_General_V1TKYuxe.transferOwnership.call(addressds97liH, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintu23vsTX = BigInt("1072")
		const Cover_ZapIn_General_V1CSbocvp = await Cover_ZapIn_General_V1.new(uintu23vsTX, {from: accounts[5]});
		const addressLrh7Jnm = accounts[1]
		const addressRPZROu = accounts[0]
		const uintQ47tFbT = BigInt("300")
		const addressxpkN7Lw = accounts[0]
		const addressFUDGijn = accounts[5]
		const addressxHiVs9k = accounts[5]
		const addressxs2sZR8 = accounts[3]
		const uintM8TfWKf = BigInt("220")
		const addressDfJFFZ = accounts[4]
		const addressfhUsxkK = accounts[4]
		const addressY4YmTpi = await Cover_ZapIn_General_V1CSbocvp.owner.call({from: accounts[3]});
		const 
Vn7agmu = await Cover_ZapIn_General_V1CSbocvp._enterPosition.call(addressxpkN7Lw, uintQ47tFbT, addressRPZROu, addressLrh7Jnm, {from: accounts[4]});
		const 
aIDJ6wJ = await Cover_ZapIn_General_V1CSbocvp._getCoverDetails.call(addressFUDGijn, {from: accounts[4]});
		const 
ft6b94 = await Cover_ZapIn_General_V1CSbocvp._enterPosition.call(addressDfJFFZ, uintM8TfWKf, addressxs2sZR8, addressxHiVs9k, {from: accounts[2]});
		const addresshFGBQlR = await Cover_ZapIn_General_V1CSbocvp.inCaseTokengetsStuck.call(addressfhUsxkK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintdc6P9qo = BigInt("1584")
		const Cover_ZapIn_General_V1zjCXk1H = await Cover_ZapIn_General_V1.new(uintdc6P9qo, {from: accounts[0]});
		const uintQO8U9UH = BigInt("402")
		const uintcFGAnZk = BigInt("1640")
		const uint16cepLPq4 = await Cover_ZapIn_General_V1zjCXk1H.set_new_goodwill.call(uintQO8U9UH, {from: accounts[0]});
		const uint16CApFNP = await Cover_ZapIn_General_V1zjCXk1H.set_new_goodwill.call(uintcFGAnZk, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPKz610h = BigInt("865")
		const Cover_ZapIn_General_V1T8wnfd4 = await Cover_ZapIn_General_V1.new(uintPKz610h, {from: "0x0000000000000000000000000000000000000001"});
		const addresskgUyRfd = accounts[1]
		const addressaHDWfVT = accounts[4]
		await Cover_ZapIn_General_V1T8wnfd4.toggleContractActive.call({from: accounts[4]});
		const 
FB3bUF8 = await Cover_ZapIn_General_V1T8wnfd4._getCoverDetails.call(addresskgUyRfd, {from: accounts[0]});
		await Cover_ZapIn_General_V1T8wnfd4.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
		const 
yFlEiDm = await Cover_ZapIn_General_V1T8wnfd4._getCoverDetails.call(addressaHDWfVT, {from: accounts[5]});
		await Cover_ZapIn_General_V1T8wnfd4.nonReentrant.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintu9YmG5W = BigInt("49")
		const Cover_ZapIn_General_V1F6UwhQI = await Cover_ZapIn_General_V1.new(uintu9YmG5W, {from: accounts[1]});
		const addressQ2zII8Z = accounts[1]
		const uintMSdqM7e = BigInt("1714")
		const addressijkdxnj = accounts[2]
		await Cover_ZapIn_General_V1F6UwhQI.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V1F6UwhQI.nonReentrant.call({from: accounts[5]});
		const addressucZY45l = await Cover_ZapIn_General_V1F6UwhQI.inCaseTokengetsStuck.call(addressQ2zII8Z, {from: accounts[4]});
		await Cover_ZapIn_General_V1F6UwhQI._enterCover.call(addressijkdxnj, uintMSdqM7e, {from: accounts[4]});
		await Cover_ZapIn_General_V1F6UwhQI.toggleContractActive.call({from: accounts[1]});
		await Cover_ZapIn_General_V1F6UwhQI.toggleContractActive.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintton3j7f = BigInt("1584")
		const Cover_ZapIn_General_V1zjCXk1H = await Cover_ZapIn_General_V1.new(uintton3j7f, {from: accounts[0]});
		const addresshltWpjk = accounts[5]
		const bytejPDuFrq = "0x0b121d1a200e111b101d011f20141c0805"
		const addresslaFFWgW = "0x0000000000000000000000000000000000000001"
		const addressYMTTMUs = accounts[3]
		const uintbbguS2u = BigInt("659")
		const addressswM4t8V = accounts[3]
		const addressznN1Hak = accounts[1]
		const addressPL8y0rw = accounts[3]
		const addressWjWd4uQ = accounts[4]
		const byteNLJDgp = "0x17110f0717191d1205151004170a0e0715091305"
		const addressBA37VjK = accounts[1]
		const addressiCPifBq = accounts[5]
		const uintgQVxi2i = BigInt("960")
		const addressbK1jzUt = accounts[1]
		const addressBGFic7K = accounts[5]
		const addressPsTZIYx = accounts[4]
		const addressSSeDLV0 = accounts[3]
		const uintVjCocRW = BigInt("1665")
		const addressqJMkwXt = await Cover_ZapIn_General_V1zjCXk1H.transferOwnership.call(addresshltWpjk, {from: accounts[0]});
		const 
UwIHVpE = await Cover_ZapIn_General_V1zjCXk1H.ZapIn.call(addressWjWd4uQ, addressPL8y0rw, addressznN1Hak, addressswM4t8V, uintbbguS2u, addressYMTTMUs, addresslaFFWgW, bytejPDuFrq, {from: "0x0000000000000000000000000000000000000001"});
		const 
hABWQbf = await Cover_ZapIn_General_V1zjCXk1H.ZapIn.call(addressSSeDLV0, addressPsTZIYx, addressBGFic7K, addressbK1jzUt, uintgQVxi2i, addressiCPifBq, addressBA37VjK, byteNLJDgp, {from: accounts[1]});
		const uint16CApFNP = await Cover_ZapIn_General_V1zjCXk1H.set_new_goodwill.call(uintVjCocRW, {from: accounts[1]});
	});
})