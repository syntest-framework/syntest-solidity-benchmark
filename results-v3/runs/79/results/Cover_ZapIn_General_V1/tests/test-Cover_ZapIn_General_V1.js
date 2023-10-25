const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintLCLJobh = BigInt("1660")
		const Cover_ZapIn_General_V1y2cB8Z = await Cover_ZapIn_General_V1.new(uintLCLJobh, {from: accounts[1]});
		const addressNXrBLqR = accounts[4]
		const addressJBYl5O = accounts[1]
		const uintO7lvwCR = BigInt("31")
		const addressmamuKiU = accounts[0]
		const addressGhT6D5 = accounts[1]
		const addressAqanh08 = accounts[1]
		await Cover_ZapIn_General_V1y2cB8Z.nonReentrant.call({from: accounts[1]});
		const 
ikIyco = await Cover_ZapIn_General_V1y2cB8Z._enterPosition.call(addressmamuKiU, uintO7lvwCR, addressJBYl5O, addressNXrBLqR, {from: accounts[4]});
		const addresskrfozGB = await Cover_ZapIn_General_V1y2cB8Z.toPayable.call(addressGhT6D5, {from: accounts[1]});
		await Cover_ZapIn_General_V1y2cB8Z.toggleContractActive.call({from: accounts[3]});
		const 
BE3dCw = await Cover_ZapIn_General_V1y2cB8Z._getCoverDetails.call(addressAqanh08, {from: accounts[5]});
		const boolmEBSL9E = await Cover_ZapIn_General_V1y2cB8Z.isOwner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintFALG72i = BigInt("1359")
		const Cover_ZapIn_General_V1fb9Yw4 = await Cover_ZapIn_General_V1.new(uintFALG72i, {from: accounts[2]});
		const addressSDntcRq = accounts[3]
		await Cover_ZapIn_General_V1fb9Yw4.renounceOwnership.call({from: accounts[3]});
		const addressVF6lrM = await Cover_ZapIn_General_V1fb9Yw4.inCaseTokengetsStuck.call(addressSDntcRq, {from: accounts[4]});
		await Cover_ZapIn_General_V1fb9Yw4.toggleContractActive.call({from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintx2HEt6a = BigInt("54")
		const Cover_ZapIn_General_V1kF0cRkk = await Cover_ZapIn_General_V1.new(uintx2HEt6a, {from: accounts[4]});
		const byteY5Kff9S = "0x052006"
		const addresskCckLvG = accounts[2]
		const addressSkVu43k = accounts[0]
		const uintlYbSwsP = BigInt("59")
		const addressBvX4Fof = accounts[1]
		const addressMNV5u79 = accounts[2]
		const addressLcyZldu = accounts[4]
		const addressQNegFc = accounts[4]
		const addressdnwFjoZ = accounts[0]
		const uintsANIi3y = BigInt("1371")
		const 
OcRGTlK = await Cover_ZapIn_General_V1kF0cRkk.ZapIn.call(addressQNegFc, addressLcyZldu, addressMNV5u79, addressBvX4Fof, uintlYbSwsP, addressSkVu43k, addresskCckLvG, byteY5Kff9S, {from: accounts[3]});
		const addresseONerXT = await Cover_ZapIn_General_V1kF0cRkk.transferOwnership.call(addressdnwFjoZ, {from: accounts[0]});
		const addressMXhOTfn = await Cover_ZapIn_General_V1kF0cRkk.owner.call({from: accounts[4]});
		const uint16QyKfuC5 = await Cover_ZapIn_General_V1kF0cRkk.set_new_goodwill.call(uintsANIi3y, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintAw1y6b2 = BigInt("1920")
		const Cover_ZapIn_General_V1mGnF0wj = await Cover_ZapIn_General_V1.new(uintAw1y6b2, {from: accounts[0]});
		const addressJ1qFCHI = accounts[0]
		const addressnLB4OSW = accounts[0]
		const addressnPe0bts = await Cover_ZapIn_General_V1mGnF0wj.inCaseTokengetsStuck.call(addressJ1qFCHI, {from: accounts[0]});
		await Cover_ZapIn_General_V1mGnF0wj.renounceOwnership.call({from: accounts[2]});
		const addressMVKIkjZ = await Cover_ZapIn_General_V1mGnF0wj.transferOwnership.call(addressnLB4OSW, {from: accounts[4]});
		const addressOFGMh85 = await Cover_ZapIn_General_V1mGnF0wj.owner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvJ2XJM = BigInt("1919")
		const Cover_ZapIn_General_V1wVaAu6M = await Cover_ZapIn_General_V1.new(uintvJ2XJM, {from: accounts[4]});
		const bytewkPqVRL = "0x061e0a101f18021b02120c1d0f070e13090e101b1504"
		const addresshws0dTP = accounts[3]
		const addressUerko3e = accounts[1]
		const uinttY6IJrk = BigInt("618")
		const addresstyFZ2HO = accounts[3]
		const addressZe1fAZq = accounts[1]
		const addressNJf6skd = accounts[1]
		const addressrT13XMf = accounts[3]
		const addressGPJcfUh = accounts[3]
		await Cover_ZapIn_General_V1wVaAu6M.toggleContractActive.call({from: accounts[4]});
		const 
BmxOgl = await Cover_ZapIn_General_V1wVaAu6M.ZapIn.call(addressrT13XMf, addressNJf6skd, addressZe1fAZq, addresstyFZ2HO, uinttY6IJrk, addressUerko3e, addresshws0dTP, bytewkPqVRL, {from: accounts[3]});
		await Cover_ZapIn_General_V1wVaAu6M.renounceOwnership.call({from: accounts[2]});
		const boolXCxTsYa = await Cover_ZapIn_General_V1wVaAu6M.isOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1wVaAu6M.toggleContractActive.call({from: accounts[4]});
		const addressfc5Im0g = await Cover_ZapIn_General_V1wVaAu6M.transferOwnership.call(addressGPJcfUh, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintJpNlDlw = BigInt("1555")
		const Cover_ZapIn_General_V1CrqF7gF = await Cover_ZapIn_General_V1.new(uintJpNlDlw, {from: "0x0000000000000000000000000000000000000001"});
		const addressbmFEgS3 = accounts[1]
		const address5PjYva = accounts[2]
		const uintTqcnCl3 = BigInt("1459")
		const addressWM0z0BU = accounts[2]
		const addressTAMJY87 = accounts[1]
		const addresstmuJ79x = accounts[3]
		const uintY7yoJA = BigInt("1095")
		const addressIE6ZJp = accounts[1]
		const byte1NYW2D = "0x0c001e1607030f11121e111f041c020c181604191c18"
		const addressuurKPew = accounts[2]
		const addressV003cE9 = accounts[1]
		const uinttD7Bt8 = BigInt("1534")
		const addressJ5Y3EnX = accounts[0]
		const addressUWw4E1t = accounts[4]
		const addresssQ4WHfP = accounts[3]
		const addresspTFlqt2 = accounts[0]
		const addressHWE3G74 = accounts[0]
		const addressY0yzbem = accounts[3]
		const uinty7OFbc7 = BigInt("2025")
		const addresslsnEAv = accounts[0]
		const addressl39sXiX = accounts[4]
		const addressW5xAPU = accounts[4]
		const uintCGazF35 = BigInt("1428")
		const addressHwPBzM = "0x0000000000000000000000000000000000000001"
		const 
GUDigWR = await Cover_ZapIn_General_V1CrqF7gF._enterPosition.call(addressWM0z0BU, uintTqcnCl3, address5PjYva, addressbmFEgS3, {from: accounts[1]});
		await Cover_ZapIn_General_V1CrqF7gF.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const 
RXSOyVv = await Cover_ZapIn_General_V1CrqF7gF._enterPosition.call(addressIE6ZJp, uintY7yoJA, addresstmuJ79x, addressTAMJY87, {from: accounts[5]});
		const 
edTJhvG = await Cover_ZapIn_General_V1CrqF7gF.ZapIn.call(addresspTFlqt2, addresssQ4WHfP, addressUWw4E1t, addressJ5Y3EnX, uinttD7Bt8, addressV003cE9, addressuurKPew, byte1NYW2D, {from: accounts[0]});
		const 
imJkk56 = await Cover_ZapIn_General_V1CrqF7gF._enterPosition.call(addresslsnEAv, uinty7OFbc7, addressY0yzbem, addressHWE3G74, {from: accounts[1]});
		const 
XjcRkcu = await Cover_ZapIn_General_V1CrqF7gF._enterPosition.call(addressHwPBzM, uintCGazF35, addressW5xAPU, addressl39sXiX, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintU61qXM = BigInt("1179")
		const Cover_ZapIn_General_V1gJJsnpD = await Cover_ZapIn_General_V1.new(uintU61qXM, {from: accounts[3]});
		const bytecuJEbZH = "0x1e110a0d11191c0e17031d0c10"
		const addresshq6YcUK = accounts[4]
		const addressjJYvr3x = accounts[4]
		const uintxwo6NuR = BigInt("1267")
		const addressVgnRInp = accounts[5]
		const addressjtTx8lu = accounts[0]
		const addressjJES0Ii = accounts[3]
		const addressIjwM85U = accounts[0]
		const addressuEQ8Nqv = await Cover_ZapIn_General_V1gJJsnpD.owner.call({from: accounts[5]});
		await Cover_ZapIn_General_V1gJJsnpD.withdraw.call({from: accounts[5]});
		const 
wojBd0w = await Cover_ZapIn_General_V1gJJsnpD.ZapIn.call(addressIjwM85U, addressjJES0Ii, addressjtTx8lu, addressVgnRInp, uintxwo6NuR, addressjJYvr3x, addresshq6YcUK, bytecuJEbZH, {from: accounts[3]});
		const boolgws8LC = await Cover_ZapIn_General_V1gJJsnpD.isOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintog6p7f = BigInt("551")
		const Cover_ZapIn_General_V1g1bMhxI = await Cover_ZapIn_General_V1.new(uintog6p7f, {from: accounts[1]});
		const addressU34P16B = accounts[4]
		const addresshldd7S1 = accounts[5]
		const addressvdxAnwK = accounts[1]
		const uintdyCywi8 = BigInt("328")
		const addressNzUjhDh = accounts[3]
		const addressZmvXJ9t = await Cover_ZapIn_General_V1g1bMhxI.transferOwnership.call(addressU34P16B, {from: accounts[1]});
		const 
sHSS8my = await Cover_ZapIn_General_V1g1bMhxI._enterPosition.call(addressNzUjhDh, uintdyCywi8, addressvdxAnwK, addresshldd7S1, {from: accounts[4]});
	});
})