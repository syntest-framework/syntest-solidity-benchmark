const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintqgP40pg = BigInt("10")
		const Cover_ZapIn_General_V1Qgjediy = await Cover_ZapIn_General_V1.new(uintqgP40pg, {from: accounts[5]});
		const uintPxYUZHh = BigInt("460")
		const addressydsZNIg = accounts[2]
		const uint16ohFx8D = await Cover_ZapIn_General_V1Qgjediy.set_new_goodwill.call(uintPxYUZHh, {from: accounts[5]});
		await Cover_ZapIn_General_V1Qgjediy.toggleContractActive.call({from: accounts[2]});
		const boolsPBxXq7 = await Cover_ZapIn_General_V1Qgjediy.isOwner.call({from: accounts[2]});
		const addressLNh3Tcd = await Cover_ZapIn_General_V1Qgjediy.inCaseTokengetsStuck.call(addressydsZNIg, {from: accounts[0]});
		await Cover_ZapIn_General_V1Qgjediy.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintuSayS7e = BigInt("1666")
		const Cover_ZapIn_General_V1IZjPh6A = await Cover_ZapIn_General_V1.new(uintuSayS7e, {from: accounts[0]});
		const addressv1OCeV = accounts[2]
		await Cover_ZapIn_General_V1IZjPh6A.stopInEmergency.call({from: accounts[5]});
		await Cover_ZapIn_General_V1IZjPh6A.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1IZjPh6A.onlyOwner.call({from: accounts[4]});
		const addressKsWnMqE = await Cover_ZapIn_General_V1IZjPh6A.inCaseTokengetsStuck.call(addressv1OCeV, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintb3Of5jC = BigInt("962")
		const Cover_ZapIn_General_V1XWLf8C7 = await Cover_ZapIn_General_V1.new(uintb3Of5jC, {from: accounts[3]});
		const byteKV1R4OR = "0x1213020e"
		const addressSuS5wVD = accounts[0]
		const addresspThGfyo = accounts[1]
		const uintose6hIj = BigInt("836")
		const addressngF0SDP = accounts[5]
		const addressD3Y9P8 = accounts[2]
		const addressFKzTzi = accounts[0]
		const addresseXNRK1B = accounts[5]
		const byteuBAxnzk = "0x131d051c10151f13100a0c140417151d"
		const addressXHwTgk = accounts[0]
		const addresssPWMv1V = accounts[4]
		const uintumymvRL = BigInt("82")
		const addressHx2WLKo = accounts[0]
		const addressTut5DXi = accounts[2]
		const addressEsWeWNo = accounts[4]
		const addressGpjHZ5E = accounts[4]
		const addressoCQcVpa = accounts[0]
		const addressE94rY9i = accounts[2]
		const uintmv2mD0o = BigInt("60")
		const addressqPJgCr = accounts[4]
		const 
ae4LdcP = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addresseXNRK1B, addressFKzTzi, addressD3Y9P8, addressngF0SDP, uintose6hIj, addresspThGfyo, addressSuS5wVD, byteKV1R4OR, {from: accounts[3]});
		const 
VIqJnda = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addressGpjHZ5E, addressEsWeWNo, addressTut5DXi, addressHx2WLKo, uintumymvRL, addresssPWMv1V, addressXHwTgk, byteuBAxnzk, {from: accounts[3]});
		const 
EEu1QZ = await Cover_ZapIn_General_V1XWLf8C7._enterPosition.call(addressqPJgCr, uintmv2mD0o, addressE94rY9i, addressoCQcVpa, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintfojH8kI = BigInt("889")
		const Cover_ZapIn_General_V1iW1REz6 = await Cover_ZapIn_General_V1.new(uintfojH8kI, {from: accounts[3]});
		const uintFndyeYk = BigInt("594")
		const addressbTVH4xh = accounts[1]
		const addressOK2jQxw = await Cover_ZapIn_General_V1iW1REz6.owner.call({from: accounts[4]});
		const uint16oLfRgib = await Cover_ZapIn_General_V1iW1REz6.set_new_goodwill.call(uintFndyeYk, {from: accounts[0]});
		await Cover_ZapIn_General_V1iW1REz6.stopInEmergency.call({from: accounts[3]});
		await Cover_ZapIn_General_V1iW1REz6.toggleContractActive.call({from: accounts[2]});
		const boolDn8vBX5 = await Cover_ZapIn_General_V1iW1REz6.isOwner.call({from: accounts[1]});
		const 
VtN6rR = await Cover_ZapIn_General_V1iW1REz6._getCoverDetails.call(addressbTVH4xh, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTeW3E2v = BigInt("1202")
		const Cover_ZapIn_General_V1HqmDG1d = await Cover_ZapIn_General_V1.new(uintTeW3E2v, {from: accounts[3]});
		const addresstPXEmSs = accounts[3]
		const addressZdYkWmr = accounts[3]
		const addressO9PZsZ = accounts[5]
		const addressjCb6A9Y = await Cover_ZapIn_General_V1HqmDG1d.inCaseTokengetsStuck.call(addresstPXEmSs, {from: accounts[3]});
		const 
qmX0PL = await Cover_ZapIn_General_V1HqmDG1d._getCoverDetails.call(addressZdYkWmr, {from: accounts[3]});
		const addressSqDUXj9 = await Cover_ZapIn_General_V1HqmDG1d.toPayable.call(addressO9PZsZ, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGDzOXiA = BigInt("194")
		const Cover_ZapIn_General_V1HBJNSn7 = await Cover_ZapIn_General_V1.new(uintGDzOXiA, {from: "0x0000000000000000000000000000000000000001"});
		const addressRYVpRyj = accounts[3]
		const addressYOIGXP5 = accounts[2]
		const addressngkLSt = accounts[4]
		const addressLCh9C5r = accounts[1]
		const 
ayQPmD = await Cover_ZapIn_General_V1HBJNSn7._getCoverDetails.call(addressRYVpRyj, {from: accounts[0]});
		const addresshGAQpC = await Cover_ZapIn_General_V1HBJNSn7.transferOwnership.call(addressYOIGXP5, {from: accounts[4]});
		const addressIBB01f6 = await Cover_ZapIn_General_V1HBJNSn7.inCaseTokengetsStuck.call(addressngkLSt, {from: accounts[3]});
		await Cover_ZapIn_General_V1HBJNSn7.renounceOwnership.call({from: accounts[4]});
		const 
Ttm9xP7 = await Cover_ZapIn_General_V1HBJNSn7._getCoverDetails.call(addressLCh9C5r, {from: accounts[2]});
		const booleDwf4L = await Cover_ZapIn_General_V1HBJNSn7.isOwner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintw37mymB = BigInt("962")
		const Cover_ZapIn_General_V1XWLf8C7 = await Cover_ZapIn_General_V1.new(uintw37mymB, {from: accounts[3]});
		const addressO1vwR4A = accounts[4]
		const byteLJvEeG7 = "0x1213020e"
		const addressrVbjQqW = accounts[0]
		const addressgcFf4i9 = accounts[1]
		const uintb0v7R7k = BigInt("836")
		const addressYok1lMW = accounts[5]
		const addressHl3QlEH = accounts[2]
		const addresscFaIto = accounts[0]
		const addressrZV0krA = accounts[5]
		const bytesgvk1v = "0x131d051c10151f13100a0c140417151d"
		const addressH4q9Hnu = accounts[0]
		const addressqThNQJ1 = accounts[4]
		const uintRiEpAIh = BigInt("82")
		const addressVzCQNZs = accounts[0]
		const addressbUPK58K = accounts[2]
		const address8xmZUf = accounts[4]
		const addresswcRake = accounts[4]
		const addressVdPl5Nx = accounts[0]
		const addressKySNElZ = accounts[2]
		const uintzepQuCJ = BigInt("29")
		const addressPKOrnp = accounts[4]
		const addressDiKkEKc = await Cover_ZapIn_General_V1XWLf8C7.transferOwnership.call(addressO1vwR4A, {from: accounts[3]});
		const 
ae4LdcP = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addressrZV0krA, addresscFaIto, addressHl3QlEH, addressYok1lMW, uintb0v7R7k, addressgcFf4i9, addressrVbjQqW, byteLJvEeG7, {from: accounts[3]});
		const 
VIqJnda = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addresswcRake, address8xmZUf, addressbUPK58K, addressVzCQNZs, uintRiEpAIh, addressqThNQJ1, addressH4q9Hnu, bytesgvk1v, {from: accounts[3]});
		await Cover_ZapIn_General_V1XWLf8C7.nonReentrant.call({from: accounts[3]});
		await Cover_ZapIn_General_V1XWLf8C7.stopInEmergency.call({from: accounts[1]});
		const 
EEu1QZ = await Cover_ZapIn_General_V1XWLf8C7._enterPosition.call(addressPKOrnp, uintzepQuCJ, addressKySNElZ, addressVdPl5Nx, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintl77DsK9 = BigInt("962")
		const Cover_ZapIn_General_V1XWLf8C7 = await Cover_ZapIn_General_V1.new(uintl77DsK9, {from: accounts[3]});
		const byteRw13Wv4 = "0x1213020e"
		const addressbdEJJjJ = accounts[0]
		const addressbbVyWu = accounts[1]
		const uintFdM1vFW = BigInt("836")
		const addresshbw3HbW = accounts[5]
		const addresst28frEY = accounts[2]
		const addressKsX29r = accounts[1]
		const addressDWzdV7Y = accounts[5]
		const uintJXGvhO = BigInt("554")
		const addressnrUU0Zm = accounts[2]
		const addresstzvMUE0 = accounts[0]
		const addressk9ycUPu = accounts[2]
		const uintRmLWUBB = BigInt("60")
		const addressgp6Tj2F = accounts[4]
		await Cover_ZapIn_General_V1XWLf8C7.toggleContractActive.call({from: accounts[3]});
		const 
ae4LdcP = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addressDWzdV7Y, addressKsX29r, addresst28frEY, addresshbw3HbW, uintFdM1vFW, addressbbVyWu, addressbdEJJjJ, byteRw13Wv4, {from: accounts[3]});
		await Cover_ZapIn_General_V1XWLf8C7._enterCover.call(addressnrUU0Zm, uintJXGvhO, {from: accounts[5]});
		await Cover_ZapIn_General_V1XWLf8C7.onlyOwner.call({from: accounts[3]});
		const 
EEu1QZ = await Cover_ZapIn_General_V1XWLf8C7._enterPosition.call(addressgp6Tj2F, uintRmLWUBB, addressk9ycUPu, addresstzvMUE0, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTdACiJ1 = BigInt("962")
		const Cover_ZapIn_General_V1XWLf8C7 = await Cover_ZapIn_General_V1.new(uintTdACiJ1, {from: accounts[3]});
		const byteYpkmlOX = "0x111f1911170819130e071f120b031805121a01"
		const addressN2r2fvu = accounts[4]
		const addressSif1koq = accounts[1]
		const uintC4KSTkW = BigInt("155")
		const addresswUrQXjG = accounts[1]
		const addressXeBzhF6 = "0x0000000000000000000000000000000000000001"
		const addressTJArwoX = accounts[3]
		const addressUAiCkG4 = "0x0000000000000000000000000000000000000001"
		const addressI2unjeO = accounts[2]
		const addresszbwhjH2 = accounts[4]
		const uintiHbumHM = BigInt("2025")
		const addressfGqYED = accounts[1]
		const bytehAKj27n = "0x1213020e"
		const addressavTtbCH = accounts[0]
		const addressrBwXJOn = accounts[1]
		const uintcQg07kn = BigInt("836")
		const addressjsBYXI2 = accounts[5]
		const addressq2W4Dah = accounts[3]
		const addressR9twbIT = accounts[0]
		const address7lKE3m = accounts[5]
		await Cover_ZapIn_General_V1XWLf8C7.renounceOwnership.call({from: accounts[3]});
		const 
gUmxNO9 = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addressUAiCkG4, addressTJArwoX, addressXeBzhF6, addresswUrQXjG, uintC4KSTkW, addressSif1koq, addressN2r2fvu, byteYpkmlOX, {from: accounts[3]});
		const addressFcJNV3 = await Cover_ZapIn_General_V1XWLf8C7.owner.call({from: accounts[1]});
		const 
YGtXiwc = await Cover_ZapIn_General_V1XWLf8C7._enterPosition.call(addressfGqYED, uintiHbumHM, addresszbwhjH2, addressI2unjeO, {from: accounts[3]});
		const 
ae4LdcP = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(address7lKE3m, addressR9twbIT, addressq2W4Dah, addressjsBYXI2, uintcQg07kn, addressrBwXJOn, addressavTtbCH, bytehAKj27n, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPi4yWH4 = BigInt("962")
		const Cover_ZapIn_General_V1XWLf8C7 = await Cover_ZapIn_General_V1.new(uintPi4yWH4, {from: accounts[3]});
		const byteVuhzM1I = "0x111f1911170819130e071f120b031805121a01"
		const addressXNjN06v = accounts[4]
		const addresskRlGtsZ = accounts[1]
		const uintXl2rPy6 = BigInt("155")
		const addressKx2n1nK = accounts[1]
		const addressLxbOUR = "0x0000000000000000000000000000000000000001"
		const addressGGm3IJ6 = accounts[3]
		const addresstg4Yr2R = "0x0000000000000000000000000000000000000000"
		const addressdLYRD7H = accounts[2]
		const addresse9Ixiir = accounts[4]
		const uintYDi8Dix = BigInt("2025")
		const addressCZDcBgi = accounts[1]
		const bytelYDWP6 = "0x1213020e"
		const addressAde9lT = accounts[0]
		const addresshCiWOIy = accounts[1]
		const uintOF2C6e = BigInt("836")
		const addressQGdmpwv = accounts[5]
		const addressIPZnpj4 = accounts[3]
		const addresstIsiac = accounts[0]
		const addressjGXEiNb = accounts[5]
		const 
gUmxNO9 = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addresstg4Yr2R, addressGGm3IJ6, addressLxbOUR, addressKx2n1nK, uintXl2rPy6, addresskRlGtsZ, addressXNjN06v, byteVuhzM1I, {from: accounts[3]});
		const addressFcJNV3 = await Cover_ZapIn_General_V1XWLf8C7.owner.call({from: accounts[1]});
		const 
YGtXiwc = await Cover_ZapIn_General_V1XWLf8C7._enterPosition.call(addressCZDcBgi, uintYDi8Dix, addresse9Ixiir, addressdLYRD7H, {from: accounts[3]});
		await Cover_ZapIn_General_V1XWLf8C7.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1XWLf8C7.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const 
ae4LdcP = await Cover_ZapIn_General_V1XWLf8C7.ZapIn.call(addressjGXEiNb, addresstIsiac, addressIPZnpj4, addressQGdmpwv, uintOF2C6e, addresshCiWOIy, addressAde9lT, bytelYDWP6, {from: accounts[3]});
	});
})