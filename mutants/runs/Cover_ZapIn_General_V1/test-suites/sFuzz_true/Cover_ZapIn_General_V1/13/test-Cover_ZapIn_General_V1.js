const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintimcS1Qo = BigInt("1733")
		const Cover_ZapIn_General_V1oaFUvCJ = await Cover_ZapIn_General_V1.new(uintimcS1Qo, {from: accounts[0]});
		const addressaACrg5w = accounts[5]
		const addressiz3JCZr = accounts[1]
		const addressmZXNdav = await Cover_ZapIn_General_V1oaFUvCJ.inCaseTokengetsStuck.call(addressaACrg5w, {from: accounts[2]});
		await Cover_ZapIn_General_V1oaFUvCJ.onlyOwner.call({from: accounts[1]});
		const addressnAsNwMy = await Cover_ZapIn_General_V1oaFUvCJ.transferOwnership.call(addressiz3JCZr, {from: accounts[4]});
		await Cover_ZapIn_General_V1oaFUvCJ.nonReentrant.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintnnnym3b = BigInt("1739")
		const Cover_ZapIn_General_V1Plm8sSE = await Cover_ZapIn_General_V1.new(uintnnnym3b, {from: accounts[2]});
		const addressuP0OjWj = accounts[1]
		const addresslsXTGgU = accounts[2]
		const addresseo9AQP8 = accounts[0]
		await Cover_ZapIn_General_V1Plm8sSE.stopInEmergency.call({from: accounts[2]});
		const addressrHAq6JG = await Cover_ZapIn_General_V1Plm8sSE.transferOwnership.call(addressuP0OjWj, {from: accounts[3]});
		const 
NmPjK0q = await Cover_ZapIn_General_V1Plm8sSE._getCoverDetails.call(addresslsXTGgU, {from: accounts[4]});
		await Cover_ZapIn_General_V1Plm8sSE.onlyOwner.call({from: accounts[2]});
		const addressrza8Qg = await Cover_ZapIn_General_V1Plm8sSE.transferOwnership.call(addresseo9AQP8, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvR7BlUp = BigInt("353")
		const Cover_ZapIn_General_V1FDQZId3 = await Cover_ZapIn_General_V1.new(uintvR7BlUp, {from: "0x0000000000000000000000000000000000000001"});
		const addressCWwxFwa = accounts[4]
		const uintzWmniIR = BigInt("851")
		const boolQ8fTzmd = await Cover_ZapIn_General_V1FDQZId3.isOwner.call({from: accounts[3]});
		const 
clNzhMJ = await Cover_ZapIn_General_V1FDQZId3._getCoverDetails.call(addressCWwxFwa, {from: accounts[1]});
		const addresswzSneBC = await Cover_ZapIn_General_V1FDQZId3.owner.call({from: accounts[3]});
		const uint16WVw5p2p = await Cover_ZapIn_General_V1FDQZId3.set_new_goodwill.call(uintzWmniIR, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjpgJ3wO = BigInt("479")
		const Cover_ZapIn_General_V1hwsFqiz = await Cover_ZapIn_General_V1.new(uintjpgJ3wO, {from: accounts[4]});
		const byteqI063pv = "0x191b19101c1b1c15021f1f011c040b0b1e1103030b18041713"
		const addressH6gBt7n = accounts[1]
		const addressZ8gHzx = accounts[0]
		const uintYjGVgbL = BigInt("1802")
		const addressisCLQAW = accounts[1]
		const addressE7NW25G = accounts[1]
		const addressyODrWV = accounts[3]
		const addressewauLOZ = accounts[3]
		const bytez938Kuz = "0x01111c1907180911091c1b180b021e030e1720170a10051d0304"
		const addressh7jU9Uv = accounts[2]
		const addressug55Br = accounts[3]
		const uintergWOz0 = BigInt("333")
		const addressegqeUZL = "0x0000000000000000000000000000000000000001"
		const addresstVIjRDq = "0x0000000000000000000000000000000000000001"
		const addressoxCJ3Hc = accounts[2]
		const addressGzoDus9 = accounts[1]
		const 
pGOGyY = await Cover_ZapIn_General_V1hwsFqiz.ZapIn.call(addressewauLOZ, addressyODrWV, addressE7NW25G, addressisCLQAW, uintYjGVgbL, addressZ8gHzx, addressH6gBt7n, byteqI063pv, {from: accounts[3]});
		await Cover_ZapIn_General_V1hwsFqiz.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1hwsFqiz.toggleContractActive.call({from: accounts[3]});
		const 
bdqNKXs = await Cover_ZapIn_General_V1hwsFqiz.ZapIn.call(addressGzoDus9, addressoxCJ3Hc, addresstVIjRDq, addressegqeUZL, uintergWOz0, addressug55Br, addressh7jU9Uv, bytez938Kuz, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttoeH9f = BigInt("286")
		const Cover_ZapIn_General_V1pzQOfRt = await Cover_ZapIn_General_V1.new(uinttoeH9f, {from: accounts[0]});
		const uinttgNPpKg = BigInt("598")
		const addresshQUsrGN = accounts[3]
		const uint16adOD7tO = await Cover_ZapIn_General_V1pzQOfRt.set_new_goodwill.call(uinttgNPpKg, {from: accounts[0]});
		await Cover_ZapIn_General_V1pzQOfRt.stopInEmergency.call({from: accounts[1]});
		const addresspKj9GYf = await Cover_ZapIn_General_V1pzQOfRt.transferOwnership.call(addresshQUsrGN, {from: accounts[4]});
		await Cover_ZapIn_General_V1pzQOfRt.toggleContractActive.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintIE6f5fD = BigInt("286")
		const Cover_ZapIn_General_V1pzQOfRt = await Cover_ZapIn_General_V1.new(uintIE6f5fD, {from: accounts[0]});
		const addressxxXDeX4 = accounts[5]
		const uintLMWOY9W = BigInt("1787")
		const addressFydUSx9 = await Cover_ZapIn_General_V1pzQOfRt.owner.call({from: accounts[0]});
		const addresspKj9GYf = await Cover_ZapIn_General_V1pzQOfRt.transferOwnership.call(addressxxXDeX4, {from: accounts[4]});
		const uint16UOWbGjJ = await Cover_ZapIn_General_V1pzQOfRt.set_new_goodwill.call(uintLMWOY9W, {from: accounts[0]});
		await Cover_ZapIn_General_V1pzQOfRt.toggleContractActive.call({from: accounts[1]});
		await Cover_ZapIn_General_V1pzQOfRt.toggleContractActive.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPSRVN6L = BigInt("286")
		const Cover_ZapIn_General_V1pzQOfRt = await Cover_ZapIn_General_V1.new(uintPSRVN6L, {from: accounts[0]});
		const addresswMIeJbv = accounts[5]
		await Cover_ZapIn_General_V1pzQOfRt.toggleContractActive.call({from: accounts[0]});
		const addresspKj9GYf = await Cover_ZapIn_General_V1pzQOfRt.transferOwnership.call(addresswMIeJbv, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTS9ckN2 = BigInt("479")
		const Cover_ZapIn_General_V1hwsFqiz = await Cover_ZapIn_General_V1.new(uintTS9ckN2, {from: accounts[4]});
		const addressMudw5IO = accounts[1]
		const bytegRlMCnU = "0x191b19101c1b1c15021f1f011c040b0b1e1103030b18041713"
		const addressNi4K3OD = accounts[2]
		const addressPKiElFj = accounts[1]
		const uintJMQUnre = BigInt("1802")
		const addressgvDYT2 = accounts[1]
		const addressMC8Wfo9 = accounts[1]
		const addresspe5a2gn = accounts[3]
		const addressjOpVNMe = accounts[3]
		const uintQiYukux = BigInt("860")
		const addressi25gf5K = accounts[2]
		const addressRFzEJGw = await Cover_ZapIn_General_V1hwsFqiz.transferOwnership.call(addressMudw5IO, {from: accounts[4]});
		const 
pGOGyY = await Cover_ZapIn_General_V1hwsFqiz.ZapIn.call(addressjOpVNMe, addresspe5a2gn, addressMC8Wfo9, addressgvDYT2, uintJMQUnre, addressPKiElFj, addressNi4K3OD, bytegRlMCnU, {from: accounts[3]});
		await Cover_ZapIn_General_V1hwsFqiz._enterCover.call(addressi25gf5K, uintQiYukux, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTPnMudF = BigInt("479")
		const Cover_ZapIn_General_V1hwsFqiz = await Cover_ZapIn_General_V1.new(uintTPnMudF, {from: accounts[4]});
		const byteJL4QSzS = "0x191b19101c1b1c15021f1f011c040b0b1e1103030b18041713"
		const addressYJwdR1U = accounts[1]
		const addresstc1sOz6 = accounts[1]
		const uintwTaXvbE = BigInt("1802")
		const addressyG7JysZ = accounts[1]
		const addressFWdVXb0 = accounts[2]
		const addressFKCy5m8 = accounts[3]
		const addressrsp7ryb = accounts[3]
		const uintQNc0EAa = BigInt("329")
		const addressrMaN5Fb = accounts[1]
		await Cover_ZapIn_General_V1hwsFqiz.renounceOwnership.call({from: accounts[4]});
		const 
pGOGyY = await Cover_ZapIn_General_V1hwsFqiz.ZapIn.call(addressrsp7ryb, addressFKCy5m8, addressFWdVXb0, addressyG7JysZ, uintwTaXvbE, addresstc1sOz6, addressYJwdR1U, byteJL4QSzS, {from: accounts[3]});
		await Cover_ZapIn_General_V1hwsFqiz._enterCover.call(addressrMaN5Fb, uintQNc0EAa, {from: accounts[5]});
		await Cover_ZapIn_General_V1hwsFqiz.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintVFo6Sno = BigInt("1983")
		const Cover_ZapIn_General_V1Z6UOyvE = await Cover_ZapIn_General_V1.new(uintVFo6Sno, {from: accounts[3]});
		const bytehuhleq5 = "0x0707100e20020106030c020802070c1f0b0d0f08011e0d1f0f"
		const addressNUFZmXo = accounts[1]
		const addressOTCM0OW = "0x0000000000000000000000000000000000000001"
		const uinttuGGlyG = BigInt("1450")
		const addressWFjHTk = accounts[2]
		const addresso6zwcx = accounts[0]
		const addresscwpivUy = "0x0000000000000000000000000000000000000001"
		const addressw9B93Gy = accounts[3]
		await Cover_ZapIn_General_V1Z6UOyvE.withdraw.call({from: accounts[3]});
		const 
xMgEjg = await Cover_ZapIn_General_V1Z6UOyvE.ZapIn.call(addressw9B93Gy, addresscwpivUy, addresso6zwcx, addressWFjHTk, uinttuGGlyG, addressOTCM0OW, addressNUFZmXo, bytehuhleq5, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjcWc2i1 = BigInt("286")
		const Cover_ZapIn_General_V1pzQOfRt = await Cover_ZapIn_General_V1.new(uintjcWc2i1, {from: accounts[0]});
		const bytePI4qZmC = "0x01021812050f06080c1c111a0b16"
		const addresssip4Yg = accounts[5]
		const addressYdVb992 = accounts[2]
		const uintuMrPM9V = BigInt("445")
		const addressQiiaeyY = accounts[0]
		const addressDZ3TLjR = accounts[5]
		const addressioagyvO = accounts[2]
		const addresseDzrf4q = "0x0000000000000000000000000000000000000000"
		const 
uQ8SLqs = await Cover_ZapIn_General_V1pzQOfRt.ZapIn.call(addresseDzrf4q, addressioagyvO, addressDZ3TLjR, addressQiiaeyY, uintuMrPM9V, addressYdVb992, addresssip4Yg, bytePI4qZmC, {from: accounts[0]});
		await Cover_ZapIn_General_V1pzQOfRt.nonReentrant.call({from: accounts[0]});
		const boolPRaIXB7 = await Cover_ZapIn_General_V1pzQOfRt.isOwner.call({from: accounts[4]});
	});
})