const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintSFftL55 = BigInt("1523")
		const Cover_ZapIn_General_V1Fe7uSci = await Cover_ZapIn_General_V1.new(uintSFftL55, {from: "0x0000000000000000000000000000000000000001"});
		const addressfTSp3R = accounts[0]
		const addressxqTbhFJ = accounts[4]
		const uintmHcFImP = BigInt("2026")
		const addressPQSADty = accounts[2]
		await Cover_ZapIn_General_V1Fe7uSci.onlyOwner.call({from: accounts[5]});
		const 
bddAxOJ = await Cover_ZapIn_General_V1Fe7uSci._enterPosition.call(addressPQSADty, uintmHcFImP, addressxqTbhFJ, addressfTSp3R, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTBofKc5 = BigInt("1371")
		const Cover_ZapIn_General_V1cJkOyW = await Cover_ZapIn_General_V1.new(uintTBofKc5, {from: accounts[0]});
		const uintuVYSe0l = BigInt("663")
		const address2T4JAR = accounts[3]
		const addressTxDC9v1 = accounts[3]
		const uintwCRzAko = BigInt("1526")
		const addressCyTSVFU = accounts[1]
		const uint16SKEXlUa = await Cover_ZapIn_General_V1cJkOyW.set_new_goodwill.call(uintuVYSe0l, {from: accounts[0]});
		await Cover_ZapIn_General_V1cJkOyW.withdraw.call({from: accounts[5]});
		const 
CQ4cMVS = await Cover_ZapIn_General_V1cJkOyW._enterPosition.call(addressCyTSVFU, uintwCRzAko, addressTxDC9v1, address2T4JAR, {from: accounts[2]});
		await Cover_ZapIn_General_V1cJkOyW.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintJ5sz0Uj = BigInt("649")
		const Cover_ZapIn_General_V1pNaH6t9 = await Cover_ZapIn_General_V1.new(uintJ5sz0Uj, {from: accounts[2]});
		const uintY8zrpSV = BigInt("985")
		const addressRe6qWsn = accounts[3]
		const addressntKnc3T = accounts[4]
		await Cover_ZapIn_General_V1pNaH6t9._enterCover.call(addressRe6qWsn, uintY8zrpSV, {from: accounts[2]});
		await Cover_ZapIn_General_V1pNaH6t9.onlyOwner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1pNaH6t9.stopInEmergency.call({from: accounts[1]});
		const 
R2HbxVo = await Cover_ZapIn_General_V1pNaH6t9._getCoverDetails.call(addressntKnc3T, {from: accounts[0]});
		await Cover_ZapIn_General_V1pNaH6t9.stopInEmergency.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcoXZOS1 = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintcoXZOS1, {from: accounts[4]});
		const bytehCscBk = "0x10181a0e1f091601"
		const addressjwHuct = accounts[1]
		const addressCKrLFUl = accounts[4]
		const uinttxFxe31 = BigInt("325")
		const addressdkDYCCz = accounts[2]
		const addressfRqlIXe = accounts[4]
		const addresso5yHKcn = accounts[4]
		const addresst15flzb = accounts[4]
		const addresszfKzSzJ = "0x0000000000000000000000000000000000000001"
		const addressesJ3oO1 = accounts[2]
		const uintL4hntrw = BigInt("1472")
		const addressdEshpcj = accounts[2]
		const 
Nk4Cbzs = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(addresst15flzb, addresso5yHKcn, addressfRqlIXe, addressdkDYCCz, uinttxFxe31, addressCKrLFUl, addressjwHuct, bytehCscBk, {from: accounts[1]});
		const 
Gs24J8Y = await Cover_ZapIn_General_V1chvPCLz._enterPosition.call(addressdEshpcj, uintL4hntrw, addressesJ3oO1, addresszfKzSzJ, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintskVfSym = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintskVfSym, {from: accounts[4]});
		const bytebG9CiVj = "0x10181a0e1f091601"
		const addressqZiDRTv = accounts[1]
		const addressn8Og1S1 = accounts[4]
		const uintenStMKc = BigInt("325")
		const addressu68wPhX = accounts[2]
		const addressWGaBine = accounts[4]
		const addressOs0sp4Z = accounts[4]
		const addressJiB54ii = accounts[4]
		await Cover_ZapIn_General_V1chvPCLz.toggleContractActive.call({from: accounts[4]});
		const 
Nk4Cbzs = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(addressJiB54ii, addressOs0sp4Z, addressWGaBine, addressu68wPhX, uintenStMKc, addressn8Og1S1, addressqZiDRTv, bytebG9CiVj, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintKPKbN11 = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintKPKbN11, {from: accounts[4]});
		const addressrkbsp8c = accounts[1]
		const bytelKb9A10 = "0x10181a0e1f091601"
		const addressjVmCPK0 = accounts[1]
		const addressUVJMm8 = accounts[5]
		const uintkqgZ0Az = BigInt("325")
		const addressUZUPaMv = accounts[2]
		const addressQIZA2C = accounts[4]
		const addressqNt88h9 = accounts[4]
		const addressX6o8zxn = accounts[4]
		const addressJXHwrJH = await Cover_ZapIn_General_V1chvPCLz.transferOwnership.call(addressrkbsp8c, {from: accounts[4]});
		const 
Nk4Cbzs = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(addressX6o8zxn, addressqNt88h9, addressQIZA2C, addressUZUPaMv, uintkqgZ0Az, addressUVJMm8, addressjVmCPK0, bytelKb9A10, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintKEQrVUq = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintKEQrVUq, {from: accounts[4]});
		const addressHKQi2nM = accounts[2]
		const bytex804GF = "0x10181a0e1f091601"
		const addressUHRdiK = accounts[2]
		const addressamOI0b = accounts[4]
		const uintJM8AglF = BigInt("325")
		const addressmICuYUQ = accounts[2]
		const addressdvhSnCb = accounts[4]
		const addresstWdYly = accounts[4]
		const addressRrUoV23 = accounts[4]
		const addressuOdMzXG = accounts[4]
		const addressVLizaX = await Cover_ZapIn_General_V1chvPCLz.inCaseTokengetsStuck.call(addressHKQi2nM, {from: accounts[4]});
		const 
Nk4Cbzs = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(addressRrUoV23, addresstWdYly, addressdvhSnCb, addressmICuYUQ, uintJM8AglF, addressamOI0b, addressUHRdiK, bytex804GF, {from: accounts[1]});
		const 
WibrNjF = await Cover_ZapIn_General_V1chvPCLz._getCoverDetails.call(addressuOdMzXG, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintVy3r9l2 = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintVy3r9l2, {from: accounts[4]});
		const bytep7qO9HK = "0x10181a0e1f091601"
		const addressq1OeXq4 = accounts[1]
		const addressZNbAI69 = accounts[4]
		const uintTF8OHf = BigInt("325")
		const addressB77vasa = accounts[2]
		const addressfvezQMT = accounts[4]
		const addressJcmB5jC = accounts[4]
		const address0VO8pp = accounts[4]
		const addressEm8aRUA = await Cover_ZapIn_General_V1chvPCLz.owner.call({from: accounts[2]});
		const 
Nk4Cbzs = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(address0VO8pp, addressJcmB5jC, addressfvezQMT, addressB77vasa, uintTF8OHf, addressZNbAI69, addressq1OeXq4, bytep7qO9HK, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGJ2vFC = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintGJ2vFC, {from: accounts[4]});
		const byteIvsX5Xf = "0x0111091b1b160f03"
		const addressr4UuU7D = accounts[0]
		const addressE82t8bn = accounts[2]
		const uintnsna95Q = BigInt("1572")
		const addressklwINhy = accounts[1]
		const addressYpwBeix = accounts[3]
		const addressJCBn3XH = accounts[0]
		const addressXgxbQs = "0x0000000000000000000000000000000000000000"
		const 
yxXinU = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(addressXgxbQs, addressJCBn3XH, addressYpwBeix, addressklwINhy, uintnsna95Q, addressE82t8bn, addressr4UuU7D, byteIvsX5Xf, {from: accounts[0]});
		await Cover_ZapIn_General_V1chvPCLz.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintltpdNbO = BigInt("67")
		const Cover_ZapIn_General_V1chvPCLz = await Cover_ZapIn_General_V1.new(uintltpdNbO, {from: accounts[4]});
		const byteAYDX8s = "0x10181a0e1f091601"
		const addressxZTpl8 = accounts[1]
		const addressCSuvPz = accounts[4]
		const uintr9OSxMh = BigInt("325")
		const addressHjlrmb = accounts[2]
		const addressPU0ckIi = accounts[4]
		const addressd1ieEw4 = accounts[5]
		const addressJennzg = accounts[4]
		await Cover_ZapIn_General_V1chvPCLz.renounceOwnership.call({from: accounts[4]});
		const 
Nk4Cbzs = await Cover_ZapIn_General_V1chvPCLz.ZapIn.call(addressJennzg, addressd1ieEw4, addressPU0ckIi, addressHjlrmb, uintr9OSxMh, addressCSuvPz, addressxZTpl8, byteAYDX8s, {from: accounts[1]});
	});
})