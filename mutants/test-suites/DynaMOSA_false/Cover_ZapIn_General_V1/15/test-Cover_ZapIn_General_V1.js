const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintNteqTY9 = BigInt("418")
		const Cover_ZapIn_General_V1pBlcMig = await Cover_ZapIn_General_V1.new(uintNteqTY9, {from: "0x0000000000000000000000000000000000000001"});
		const addressWFyHEmw = accounts[1]
		const addressJjFOqOM = accounts[0]
		const uinta7urauJ = BigInt("1189")
		const addressy0xFiY = accounts[3]
		const uintg51Uo99 = BigInt("1915")
		const addressY1OC7uJ = accounts[4]
		const 
k8PVChl = await Cover_ZapIn_General_V1pBlcMig._enterPosition.call(addressy0xFiY, uinta7urauJ, addressJjFOqOM, addressWFyHEmw, {from: accounts[2]});
		await Cover_ZapIn_General_V1pBlcMig.nonReentrant.call({from: accounts[0]});
		await Cover_ZapIn_General_V1pBlcMig._enterCover.call(addressY1OC7uJ, uintg51Uo99, {from: accounts[0]});
		const boolalDaF6V = await Cover_ZapIn_General_V1pBlcMig.isOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintidEWw2k = BigInt("665")
		const Cover_ZapIn_General_V1FPewx8 = await Cover_ZapIn_General_V1.new(uintidEWw2k, {from: accounts[3]});
		await Cover_ZapIn_General_V1FPewx8.stopInEmergency.call({from: accounts[1]});
		const boolKetvRdE = await Cover_ZapIn_General_V1FPewx8.isOwner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1FPewx8.toggleContractActive.call({from: accounts[0]});
		await Cover_ZapIn_General_V1FPewx8.nonReentrant.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintdtlZRhn = BigInt("1387")
		const Cover_ZapIn_General_V1PcAucUA = await Cover_ZapIn_General_V1.new(uintdtlZRhn, {from: accounts[1]});
		const uintM41kveh = BigInt("102")
		const addressAb3Xgim = accounts[3]
		const addressRVFVhY9 = accounts[4]
		const addressKv5bXrR = accounts[1]
		const uint16uOKl8V = await Cover_ZapIn_General_V1PcAucUA.set_new_goodwill.call(uintM41kveh, {from: accounts[0]});
		const addresstEwWnV2 = await Cover_ZapIn_General_V1PcAucUA.transferOwnership.call(addressAb3Xgim, {from: accounts[2]});
		await Cover_ZapIn_General_V1PcAucUA.stopInEmergency.call({from: accounts[5]});
		const addressgJZQWG0 = await Cover_ZapIn_General_V1PcAucUA.transferOwnership.call(addressRVFVhY9, {from: accounts[3]});
		const addressW07oSL6 = await Cover_ZapIn_General_V1PcAucUA.inCaseTokengetsStuck.call(addressKv5bXrR, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint458U9M = BigInt("17")
		const Cover_ZapIn_General_V1pGATAwU = await Cover_ZapIn_General_V1.new(uint458U9M, {from: accounts[1]});
		const bytegeqmI9 = "0x1f1d100b111110121d2016180f0c1b18"
		const addressb5giZZu = accounts[3]
		const addressDFJnr1E = accounts[0]
		const uintYD2s4DS = BigInt("954")
		const addressBO6pMXj = accounts[4]
		const addressGfzTV3u = accounts[0]
		const addresscoHNpOM = accounts[0]
		const addressUXCqGkM = accounts[3]
		const uintYlcwlD = BigInt("734")
		const 
iYynIt = await Cover_ZapIn_General_V1pGATAwU.ZapIn.call(addressUXCqGkM, addresscoHNpOM, addressGfzTV3u, addressBO6pMXj, uintYD2s4DS, addressDFJnr1E, addressb5giZZu, bytegeqmI9, {from: accounts[1]});
		const uint16Jwz9O9H = await Cover_ZapIn_General_V1pGATAwU.set_new_goodwill.call(uintYlcwlD, {from: accounts[4]});
		const addresszMnDVP1 = await Cover_ZapIn_General_V1pGATAwU.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1pGATAwU.onlyOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1pGATAwU.onlyOwner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPR5BStS = BigInt("1385")
		const Cover_ZapIn_General_V1zWrmrXl = await Cover_ZapIn_General_V1.new(uintPR5BStS, {from: accounts[0]});
		const uintVN96Qe = BigInt("512")
		const addressmnZy9KE = accounts[5]
		await Cover_ZapIn_General_V1zWrmrXl.toggleContractActive.call({from: accounts[0]});
		await Cover_ZapIn_General_V1zWrmrXl._enterCover.call(addressmnZy9KE, uintVN96Qe, {from: accounts[4]});
		await Cover_ZapIn_General_V1zWrmrXl.withdraw.call({from: accounts[1]});
		await Cover_ZapIn_General_V1zWrmrXl.stopInEmergency.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintixq2m1 = BigInt("213")
		const Cover_ZapIn_General_V1zNfkBVN = await Cover_ZapIn_General_V1.new(uintixq2m1, {from: accounts[2]});
		const bytemSYkT2D = "0x150e1a1613121701200f"
		const addressp4OpbIA = accounts[1]
		const addressV83Hoaq = "0x0000000000000000000000000000000000000001"
		const uintbHHYldA = BigInt("1804")
		const addressJUOoQb8 = accounts[0]
		const addressIlOAx4C = accounts[4]
		const addressMEhseoY = accounts[5]
		const addressuhSO5N = accounts[0]
		const addressWxwXKvt = await Cover_ZapIn_General_V1zNfkBVN.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const 
LdjDdn1 = await Cover_ZapIn_General_V1zNfkBVN.ZapIn.call(addressuhSO5N, addressMEhseoY, addressIlOAx4C, addressJUOoQb8, uintbHHYldA, addressV83Hoaq, addressp4OpbIA, bytemSYkT2D, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1zNfkBVN.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V1zNfkBVN.withdraw.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjCSCIUb = BigInt("17")
		const Cover_ZapIn_General_V1pGATAwU = await Cover_ZapIn_General_V1.new(uintjCSCIUb, {from: accounts[1]});
		const uintYK2UQ03 = BigInt("1159")
		const byteHkU1jYa = "0x1f1d100b111110121d2016180f0c1b18"
		const addressvMHbcsx = accounts[3]
		const addresse5kgr0i = accounts[0]
		const uintKX3Qz9B = BigInt("954")
		const addressVT9CvZZ = accounts[4]
		const addresssGyEZWm = accounts[0]
		const addressHuQ8wYz = accounts[0]
		const addressA90BUAx = accounts[3]
		const uintiHaEGE3 = BigInt("734")
		const uint16RmqWFgS = await Cover_ZapIn_General_V1pGATAwU.set_new_goodwill.call(uintYK2UQ03, {from: accounts[1]});
		const 
iYynIt = await Cover_ZapIn_General_V1pGATAwU.ZapIn.call(addressA90BUAx, addressHuQ8wYz, addresssGyEZWm, addressVT9CvZZ, uintKX3Qz9B, addresse5kgr0i, addressvMHbcsx, byteHkU1jYa, {from: accounts[1]});
		const uint16Jwz9O9H = await Cover_ZapIn_General_V1pGATAwU.set_new_goodwill.call(uintiHaEGE3, {from: accounts[4]});
		const addresszMnDVP1 = await Cover_ZapIn_General_V1pGATAwU.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1pGATAwU.onlyOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1pGATAwU.onlyOwner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinth4gPoSw = BigInt("1922")
		const Cover_ZapIn_General_V1dFcI2Sy = await Cover_ZapIn_General_V1.new(uinth4gPoSw, {from: accounts[1]});
		const addressyeCDtqL = accounts[0]
		const addressxIfkHbq = accounts[1]
		const addressmcUPuif = await Cover_ZapIn_General_V1dFcI2Sy.transferOwnership.call(addressyeCDtqL, {from: accounts[1]});
		const 
msaYU1x = await Cover_ZapIn_General_V1dFcI2Sy._getCoverDetails.call(addressxIfkHbq, {from: accounts[2]});
		await Cover_ZapIn_General_V1dFcI2Sy.withdraw.call({from: accounts[0]});
	});
})