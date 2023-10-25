const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintSoHC35e = BigInt("1567")
		const Cover_ZapIn_General_V1BTZgldS = await Cover_ZapIn_General_V1.new(uintSoHC35e, {from: accounts[2]});
		const addresshywtgff = accounts[3]
		const addressKRFYGvl = await Cover_ZapIn_General_V1BTZgldS.inCaseTokengetsStuck.call(addresshywtgff, {from: accounts[1]});
		const addressbgCQnoF = await Cover_ZapIn_General_V1BTZgldS.owner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1BTZgldS.stopInEmergency.call({from: accounts[3]});
		const boolAN5ZwzW = await Cover_ZapIn_General_V1BTZgldS.isOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1BTZgldS.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintUGt8fN = BigInt("1313")
		const Cover_ZapIn_General_V1TnJ83Uh = await Cover_ZapIn_General_V1.new(uintUGt8fN, {from: "0x0000000000000000000000000000000000000001"});
		const addressRTb7qho = accounts[3]
		const byteA9V0V1G = "0x090514170313181d"
		const addressBTzoBeF = accounts[5]
		const addresskk153ge = accounts[1]
		const uinthoOZEjs = BigInt("170")
		const addressBqbKLgu = accounts[0]
		const addressAXiJNpw = accounts[5]
		const addresskCzB7cE = accounts[4]
		const addressZn0U1z6 = accounts[0]
		const uintu7soK2 = BigInt("1104")
		const addresslZmXgwp = accounts[1]
		const addresstY0doc = await Cover_ZapIn_General_V1TnJ83Uh.inCaseTokengetsStuck.call(addressRTb7qho, {from: accounts[1]});
		await Cover_ZapIn_General_V1TnJ83Uh.toggleContractActive.call({from: accounts[2]});
		const 
jYeqcks = await Cover_ZapIn_General_V1TnJ83Uh.ZapIn.call(addressZn0U1z6, addresskCzB7cE, addressAXiJNpw, addressBqbKLgu, uinthoOZEjs, addresskk153ge, addressBTzoBeF, byteA9V0V1G, {from: accounts[3]});
		const addressxbqFf4L = await Cover_ZapIn_General_V1TnJ83Uh.owner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1TnJ83Uh._enterCover.call(addresslZmXgwp, uintu7soK2, {from: accounts[2]});
		const boolvBkpQXS = await Cover_ZapIn_General_V1TnJ83Uh.isOwner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQtHtghU = BigInt("1733")
		const Cover_ZapIn_General_V1y2rYrmD = await Cover_ZapIn_General_V1.new(uintQtHtghU, {from: accounts[2]});
		const byteblIAHp = "0x0e13040a050b0202181614"
		const addressuTJQJNN = "0x0000000000000000000000000000000000000001"
		const addresspv0TpKF = accounts[3]
		const uintslGY43X = BigInt("1716")
		const addressMIicuUt = accounts[3]
		const address37g6aq = accounts[3]
		const addresseMRC1P6 = accounts[1]
		const addressd1CJRnm = accounts[2]
		const addressXF0toR = accounts[1]
		const addressnMOD5bi = await Cover_ZapIn_General_V1y2rYrmD.owner.call({from: accounts[1]});
		const 
Gd9BBw = await Cover_ZapIn_General_V1y2rYrmD.ZapIn.call(addressd1CJRnm, addresseMRC1P6, address37g6aq, addressMIicuUt, uintslGY43X, addresspv0TpKF, addressuTJQJNN, byteblIAHp, {from: accounts[4]});
		const 
jVvj6XA = await Cover_ZapIn_General_V1y2rYrmD._getCoverDetails.call(addressXF0toR, {from: accounts[1]});
		await Cover_ZapIn_General_V1y2rYrmD.stopInEmergency.call({from: accounts[3]});
		const boolpyTH8bf = await Cover_ZapIn_General_V1y2rYrmD.isOwner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1y2rYrmD.withdraw.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintHQwPQQg = BigInt("1595")
		const Cover_ZapIn_General_V1RD034wz = await Cover_ZapIn_General_V1.new(uintHQwPQQg, {from: accounts[4]});
		const uintecsBX8m = BigInt("710")
		const addressPMH1uk = accounts[1]
		await Cover_ZapIn_General_V1RD034wz._enterCover.call(addressPMH1uk, uintecsBX8m, {from: accounts[1]});
		await Cover_ZapIn_General_V1RD034wz.toggleContractActive.call({from: accounts[2]});
		await Cover_ZapIn_General_V1RD034wz.toggleContractActive.call({from: accounts[3]});
		await Cover_ZapIn_General_V1RD034wz.toggleContractActive.call({from: accounts[3]});
		const address64WqEt = await Cover_ZapIn_General_V1RD034wz.owner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintdKABkW = BigInt("517")
		const Cover_ZapIn_General_V1Fi5O9Eh = await Cover_ZapIn_General_V1.new(uintdKABkW, {from: accounts[0]});
		const addressGJ13nD = accounts[5]
		const addressPfcJVQp = accounts[4]
		const addressk2XXql4 = await Cover_ZapIn_General_V1Fi5O9Eh.transferOwnership.call(addressGJ13nD, {from: accounts[0]});
		await Cover_ZapIn_General_V1Fi5O9Eh.withdraw.call({from: accounts[3]});
		const boolTGUSGCl = await Cover_ZapIn_General_V1Fi5O9Eh.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressCQniSF = await Cover_ZapIn_General_V1Fi5O9Eh.inCaseTokengetsStuck.call(addressPfcJVQp, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1Fi5O9Eh.nonReentrant.call({from: accounts[1]});
		const addressYgGSQpx = await Cover_ZapIn_General_V1Fi5O9Eh.owner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPgHM3Us = BigInt("1733")
		const Cover_ZapIn_General_V1y2rYrmD = await Cover_ZapIn_General_V1.new(uintPgHM3Us, {from: accounts[2]});
		const byteU5QNqSD = "0x0e13040a050b0202181614"
		const address1nECMu = "0x0000000000000000000000000000000000000001"
		const addresspsATtpe = accounts[3]
		const uint3FUaYR = BigInt("1716")
		const addressdQzRBkM = accounts[3]
		const addressVWEmzM2 = accounts[3]
		const addressnSK3uf = accounts[1]
		const addresslEljkg5 = accounts[2]
		const addressKErPkhk = accounts[1]
		const addressjAV4HOX = accounts[1]
		await Cover_ZapIn_General_V1y2rYrmD.withdraw.call({from: accounts[2]});
		const addressnMOD5bi = await Cover_ZapIn_General_V1y2rYrmD.owner.call({from: accounts[1]});
		const 
Gd9BBw = await Cover_ZapIn_General_V1y2rYrmD.ZapIn.call(addresslEljkg5, addressnSK3uf, addressVWEmzM2, addressdQzRBkM, uint3FUaYR, addresspsATtpe, address1nECMu, byteU5QNqSD, {from: accounts[4]});
		const 
jVvj6XA = await Cover_ZapIn_General_V1y2rYrmD._getCoverDetails.call(addressKErPkhk, {from: accounts[1]});
		await Cover_ZapIn_General_V1y2rYrmD.stopInEmergency.call({from: accounts[3]});
		const boolpyTH8bf = await Cover_ZapIn_General_V1y2rYrmD.isOwner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1y2rYrmD.withdraw.call({from: accounts[0]});
		const 
XMgrDjt = await Cover_ZapIn_General_V1y2rYrmD._getCoverDetails.call(addressjAV4HOX, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintZpwAaV = BigInt("1733")
		const Cover_ZapIn_General_V1y2rYrmD = await Cover_ZapIn_General_V1.new(uintZpwAaV, {from: accounts[2]});
		const byteKsQHp3L = "0x1e0b091713070509020a1e0b12081f0f1c"
		const addressPXft0KD = accounts[3]
		const addressr1wjcAU = accounts[0]
		const uintsqWCFVX = BigInt("759")
		const addressTeSYyMm = accounts[5]
		const addressxOT655R = accounts[2]
		const addressd90ZAov = accounts[3]
		const addressOFWP2yB = "0x0000000000000000000000000000000000000000"
		const uintrLn0loB = BigInt("1374")
		const addressh6K4b5c = accounts[5]
		const 
di1XSx = await Cover_ZapIn_General_V1y2rYrmD.ZapIn.call(addressOFWP2yB, addressd90ZAov, addressxOT655R, addressTeSYyMm, uintsqWCFVX, addressr1wjcAU, addressPXft0KD, byteKsQHp3L, {from: accounts[4]});
		await Cover_ZapIn_General_V1y2rYrmD.onlyOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1y2rYrmD.stopInEmergency.call({from: accounts[0]});
		await Cover_ZapIn_General_V1y2rYrmD.withdraw.call({from: accounts[0]});
		await Cover_ZapIn_General_V1y2rYrmD._enterCover.call(addressh6K4b5c, uintrLn0loB, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintcHbzjI9 = BigInt("863")
		const Cover_ZapIn_General_V1qGBU3Bv = await Cover_ZapIn_General_V1.new(uintcHbzjI9, {from: accounts[0]});
		const addresshxZtHk0 = accounts[0]
		const uintbHM8T5E = BigInt("1229")
		const addressT6PVmkT = "0x0000000000000000000000000000000000000001"
		const uintooKAof = BigInt("1847")
		const addressuxmhnYC = await Cover_ZapIn_General_V1qGBU3Bv.inCaseTokengetsStuck.call(addresshxZtHk0, {from: accounts[0]});
		await Cover_ZapIn_General_V1qGBU3Bv._enterCover.call(addressT6PVmkT, uintbHM8T5E, {from: accounts[0]});
		const uint16JOTsYhG = await Cover_ZapIn_General_V1qGBU3Bv.set_new_goodwill.call(uintooKAof, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint8n3wzQ = BigInt("1081")
		const Cover_ZapIn_General_V1EoTXJET = await Cover_ZapIn_General_V1.new(uint8n3wzQ, {from: accounts[4]});
		const uintZ5OFJye = BigInt("265")
		const byteAcQCM2D = "0x1e03020d061c0a140415121314060c130e1101080e1c"
		const addressefdv4im = accounts[3]
		const address7pJpQc = accounts[0]
		const uintoqYeQaC = BigInt("324")
		const addressbtBod9F = accounts[0]
		const addressPuA63kx = accounts[2]
		const addressnJ7m3zZ = accounts[3]
		const addressH3vGZOp = accounts[0]
		const uintg4nY3zJ = BigInt("1203")
		const addresszZtryX = accounts[0]
		const uint16RzmSBVx = await Cover_ZapIn_General_V1EoTXJET.set_new_goodwill.call(uintZ5OFJye, {from: accounts[4]});
		const 
BNunI4U = await Cover_ZapIn_General_V1EoTXJET.ZapIn.call(addressH3vGZOp, addressnJ7m3zZ, addressPuA63kx, addressbtBod9F, uintoqYeQaC, address7pJpQc, addressefdv4im, byteAcQCM2D, {from: accounts[5]});
		await Cover_ZapIn_General_V1EoTXJET.toggleContractActive.call({from: accounts[3]});
		const uint16RU9w532 = await Cover_ZapIn_General_V1EoTXJET.set_new_goodwill.call(uintg4nY3zJ, {from: accounts[3]});
		const addressfKTcIwl = await Cover_ZapIn_General_V1EoTXJET.toPayable.call(addresszZtryX, {from: accounts[4]});
		await Cover_ZapIn_General_V1EoTXJET.nonReentrant.call({from: accounts[4]});
	});
})