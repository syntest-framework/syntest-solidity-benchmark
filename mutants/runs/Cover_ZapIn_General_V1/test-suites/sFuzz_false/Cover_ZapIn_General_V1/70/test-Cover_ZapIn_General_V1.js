const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintr42MoWO = BigInt("1206")
		const Cover_ZapIn_General_V1DKcPWZn = await Cover_ZapIn_General_V1.new(uintr42MoWO, {from: accounts[5]});
		const addressDIWuNoR = accounts[4]
		const boolJpXWRU1 = await Cover_ZapIn_General_V1DKcPWZn.isOwner.call({from: accounts[4]});
		const 
AfswTm2 = await Cover_ZapIn_General_V1DKcPWZn._getCoverDetails.call(addressDIWuNoR, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintnXcan58 = BigInt("295")
		const Cover_ZapIn_General_V1VcTVrmU = await Cover_ZapIn_General_V1.new(uintnXcan58, {from: accounts[0]});
		const uintUDezHk = BigInt("1055")
		const uintA0k6eip = BigInt("783")
		const addressjss7cHh = accounts[1]
		const uint16OlBmGSY = await Cover_ZapIn_General_V1VcTVrmU.set_new_goodwill.call(uintUDezHk, {from: accounts[2]});
		await Cover_ZapIn_General_V1VcTVrmU._enterCover.call(addressjss7cHh, uintA0k6eip, {from: accounts[4]});
		await Cover_ZapIn_General_V1VcTVrmU.nonReentrant.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintDdSUi0 = BigInt("693")
		const Cover_ZapIn_General_V1GALpomP = await Cover_ZapIn_General_V1.new(uintDdSUi0, {from: accounts[4]});
		const addressXAh030F = accounts[4]
		const addressLLn5am = accounts[0]
		const addressNIFSYB8 = accounts[1]
		const uintv6v8euh = BigInt("1125")
		const addressXUXMNr6 = accounts[2]
		const booljGHuDMS = await Cover_ZapIn_General_V1GALpomP.isOwner.call({from: accounts[3]});
		const addressbShjJj = await Cover_ZapIn_General_V1GALpomP.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresscFWynbw = await Cover_ZapIn_General_V1GALpomP.toPayable.call(addressXAh030F, {from: "0x0000000000000000000000000000000000000001"});
		const 
oy1q0B = await Cover_ZapIn_General_V1GALpomP._enterPosition.call(addressXUXMNr6, uintv6v8euh, addressNIFSYB8, addressLLn5am, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintWsmMTRf = BigInt("1206")
		const Cover_ZapIn_General_V1DKcPWZn = await Cover_ZapIn_General_V1.new(uintWsmMTRf, {from: accounts[5]});
		const byteYNiaxaO = "0x1119081d09140f0e0405"
		const addressempoaj5 = accounts[0]
		const addressu3dVoyv = accounts[4]
		const uintm1cwVxt = BigInt("939")
		const addressBg0OfnE = accounts[5]
		const addressif8UQID = accounts[5]
		const address1DJbo5 = accounts[3]
		const addressis3vXsg = accounts[4]
		const addressUZL36ko = accounts[5]
		const boolJpXWRU1 = await Cover_ZapIn_General_V1DKcPWZn.isOwner.call({from: accounts[4]});
		const 
gLsQS2I = await Cover_ZapIn_General_V1DKcPWZn.ZapIn.call(addressis3vXsg, address1DJbo5, addressif8UQID, addressBg0OfnE, uintm1cwVxt, addressu3dVoyv, addressempoaj5, byteYNiaxaO, {from: accounts[2]});
		const 
AfswTm2 = await Cover_ZapIn_General_V1DKcPWZn._getCoverDetails.call(addressUZL36ko, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint9IKxi3 = BigInt("1324")
		const Cover_ZapIn_General_V1MtNTmZE = await Cover_ZapIn_General_V1.new(uint9IKxi3, {from: "0x0000000000000000000000000000000000000001"});
		const addressEvSFw4K = accounts[3]
		const addressiUEeYs = accounts[3]
		const uintzXpnDyE = BigInt("1767")
		const addresstTKlTXY = accounts[3]
		const uintVmlf9v = BigInt("1310")
		const addresszzEYRlb = accounts[4]
		const addressELOkBat = accounts[2]
		const 
tPmuyt0 = await Cover_ZapIn_General_V1MtNTmZE._enterPosition.call(addresstTKlTXY, uintzXpnDyE, addressiUEeYs, addressEvSFw4K, {from: accounts[3]});
		await Cover_ZapIn_General_V1MtNTmZE.onlyOwner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1MtNTmZE._enterCover.call(addresszzEYRlb, uintVmlf9v, {from: accounts[1]});
		const 
CA0zhPJ = await Cover_ZapIn_General_V1MtNTmZE._getCoverDetails.call(addressELOkBat, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintxs8bqVW = BigInt("1140")
		const Cover_ZapIn_General_V1ZIyKwhS = await Cover_ZapIn_General_V1.new(uintxs8bqVW, {from: accounts[2]});
		const uint29y9zO = BigInt("1930")
		const addressPaUU65 = accounts[1]
		const addressHpdXTi5 = accounts[5]
		const uintGeqV8l = BigInt("902")
		const addressImxKpiC = accounts[0]
		const addressetwk7xY = accounts[1]
		await Cover_ZapIn_General_V1ZIyKwhS.withdraw.call({from: accounts[2]});
		await Cover_ZapIn_General_V1ZIyKwhS._enterCover.call(addressPaUU65, uint29y9zO, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1ZIyKwhS.stopInEmergency.call({from: accounts[4]});
		const addressMLp4W2Q = await Cover_ZapIn_General_V1ZIyKwhS.toPayable.call(addressHpdXTi5, {from: accounts[4]});
		await Cover_ZapIn_General_V1ZIyKwhS._enterCover.call(addressImxKpiC, uintGeqV8l, {from: accounts[0]});
		const 
ZJrH17n = await Cover_ZapIn_General_V1ZIyKwhS._getCoverDetails.call(addressetwk7xY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintUNBwGhk = BigInt("1206")
		const Cover_ZapIn_General_V1DKcPWZn = await Cover_ZapIn_General_V1.new(uintUNBwGhk, {from: accounts[5]});
		const addressDFCUVhQ = accounts[5]
		const addressoH9wUL4 = accounts[4]
		await Cover_ZapIn_General_V1DKcPWZn.toggleContractActive.call({from: accounts[5]});
		await Cover_ZapIn_General_V1DKcPWZn.withdraw.call({from: accounts[4]});
		const boolDx3ZxbO = await Cover_ZapIn_General_V1DKcPWZn.isOwner.call({from: accounts[0]});
		const 
AfswTm2 = await Cover_ZapIn_General_V1DKcPWZn._getCoverDetails.call(addressDFCUVhQ, {from: accounts[3]});
		const 
blxQ4Qj = await Cover_ZapIn_General_V1DKcPWZn._getCoverDetails.call(addressoH9wUL4, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintyckpg0x = BigInt("1206")
		const Cover_ZapIn_General_V1DKcPWZn = await Cover_ZapIn_General_V1.new(uintyckpg0x, {from: accounts[5]});
		const uintOldcUbD = BigInt("978")
		const addressxuNKlMG = accounts[5]
		const boolLKjaO5K = await Cover_ZapIn_General_V1DKcPWZn.isOwner.call({from: accounts[1]});
		const uint16GfxCbUb = await Cover_ZapIn_General_V1DKcPWZn.set_new_goodwill.call(uintOldcUbD, {from: accounts[5]});
		const 
AfswTm2 = await Cover_ZapIn_General_V1DKcPWZn._getCoverDetails.call(addressxuNKlMG, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintR5GS6mk = BigInt("1206")
		const Cover_ZapIn_General_V1DKcPWZn = await Cover_ZapIn_General_V1.new(uintR5GS6mk, {from: accounts[5]});
		const addressiLSmkPZ = accounts[5]
		const addressH2IKfkU = accounts[4]
		const addresszpoPlRE = await Cover_ZapIn_General_V1DKcPWZn.inCaseTokengetsStuck.call(addressiLSmkPZ, {from: accounts[5]});
		const 
AfswTm2 = await Cover_ZapIn_General_V1DKcPWZn._getCoverDetails.call(addressH2IKfkU, {from: accounts[3]});
	});
})