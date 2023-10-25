const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvxKKANP = BigInt("294")
		const Cover_ZapIn_General_V1dh9VgJy = await Cover_ZapIn_General_V1.new(uintvxKKANP, {from: accounts[3]});
		const addressArz3ly5 = accounts[3]
		const addresshhrVkjP = accounts[1]
		const uintpWKp1ip = BigInt("1040")
		const addressZEPblAa = accounts[2]
		await Cover_ZapIn_General_V1dh9VgJy.withdraw.call({from: accounts[0]});
		await Cover_ZapIn_General_V1dh9VgJy.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1dh9VgJy.onlyOwner.call({from: accounts[5]});
		const 
nTWzDyD = await Cover_ZapIn_General_V1dh9VgJy._enterPosition.call(addressZEPblAa, uintpWKp1ip, addresshhrVkjP, addressArz3ly5, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEjgRgl7 = BigInt("102")
		const Cover_ZapIn_General_V1zrl6y6n = await Cover_ZapIn_General_V1.new(uintEjgRgl7, {from: accounts[5]});
		const addressWatJRH = accounts[1]
		const addresstjBjUik = accounts[2]
		const uintXf5z35 = BigInt("78")
		const addressdobCEk6 = accounts[4]
		const byteZk32v5q = "0x0d0a17101020030c1e1b1e140f1603090219090d061d1f130b0d05141320"
		const addressuUfDBgG = accounts[4]
		const addressRQX7i5d = accounts[3]
		const uintmVE1Zb = BigInt("1813")
		const addressHqEFbBb = accounts[3]
		const addresscJ1pMrj = accounts[3]
		const addressZVNbrD4 = accounts[2]
		const addressFDkGWQd = accounts[5]
		const addressgy8gGkJ = accounts[5]
		const 
PWlyrXT = await Cover_ZapIn_General_V1zrl6y6n._enterPosition.call(addressdobCEk6, uintXf5z35, addresstjBjUik, addressWatJRH, {from: accounts[3]});
		const 
t8u2zf = await Cover_ZapIn_General_V1zrl6y6n.ZapIn.call(addressFDkGWQd, addressZVNbrD4, addresscJ1pMrj, addressHqEFbBb, uintmVE1Zb, addressRQX7i5d, addressuUfDBgG, byteZk32v5q, {from: accounts[0]});
		await Cover_ZapIn_General_V1zrl6y6n.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1zrl6y6n.nonReentrant.call({from: accounts[3]});
		const addressi21E21p = await Cover_ZapIn_General_V1zrl6y6n.inCaseTokengetsStuck.call(addressgy8gGkJ, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintyencH4t = BigInt("1112")
		const Cover_ZapIn_General_V1rXFH6lR = await Cover_ZapIn_General_V1.new(uintyencH4t, {from: accounts[4]});
		const addressyJnNd7R = accounts[5]
		await Cover_ZapIn_General_V1rXFH6lR.toggleContractActive.call({from: accounts[4]});
		const addressMFfE6K = await Cover_ZapIn_General_V1rXFH6lR.inCaseTokengetsStuck.call(addressyJnNd7R, {from: accounts[2]});
		await Cover_ZapIn_General_V1rXFH6lR.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRJGoMV = await Cover_ZapIn_General_V1rXFH6lR.owner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintFT7zEwB = BigInt("1296")
		const Cover_ZapIn_General_V1L7MR6t = await Cover_ZapIn_General_V1.new(uintFT7zEwB, {from: accounts[1]});
		const bytemInB74h = "0x0611091813051208121c0a130920190b201b1a160d0d15030d1b18"
		const addresslYDfOKk = accounts[0]
		const addressNaBAT8G = accounts[4]
		const uintbYZJC7q = BigInt("305")
		const addressMro0j7O = accounts[1]
		const addressdG6dlAw = accounts[1]
		const addressLVesU8v = accounts[1]
		const addressZbPbifn = accounts[0]
		const addressb6wPwYt = accounts[4]
		const 
zf2YjVP = await Cover_ZapIn_General_V1L7MR6t.ZapIn.call(addressZbPbifn, addressLVesU8v, addressdG6dlAw, addressMro0j7O, uintbYZJC7q, addressNaBAT8G, addresslYDfOKk, bytemInB74h, {from: "0x0000000000000000000000000000000000000001"});
		const addressGa1ZoTx = await Cover_ZapIn_General_V1L7MR6t.transferOwnership.call(addressb6wPwYt, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttt8Tj3s = BigInt("1367")
		const Cover_ZapIn_General_V1esWBEM = await Cover_ZapIn_General_V1.new(uinttt8Tj3s, {from: "0x0000000000000000000000000000000000000001"});
		const addressDhBUDGk = accounts[3]
		const addressVuNDCpF = accounts[0]
		const addressR0g3EAg = await Cover_ZapIn_General_V1esWBEM.toPayable.call(addressDhBUDGk, {from: accounts[3]});
		await Cover_ZapIn_General_V1esWBEM.onlyOwner.call({from: accounts[0]});
		const addressfIkWAja = await Cover_ZapIn_General_V1esWBEM.inCaseTokengetsStuck.call(addressVuNDCpF, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintpcIOYHa = BigInt("1296")
		const Cover_ZapIn_General_V1L7MR6t = await Cover_ZapIn_General_V1.new(uintpcIOYHa, {from: accounts[1]});
		const addressSLOaIHY = accounts[4]
		const byteheyjsiG = "0x0611091813051208121c0a130920190b201b1a160d0d15030d1b18"
		const addresssjrRjnZ = accounts[0]
		const addressLNARp4 = accounts[4]
		const uintmhiCpOz = BigInt("305")
		const addressxNfGFH = accounts[2]
		const addressWVRIiq9 = accounts[1]
		const addressY8W83Or = accounts[2]
		const addressHvUyxdO = accounts[0]
		const addressCg2Su55 = await Cover_ZapIn_General_V1L7MR6t.inCaseTokengetsStuck.call(addressSLOaIHY, {from: accounts[1]});
		const 
zf2YjVP = await Cover_ZapIn_General_V1L7MR6t.ZapIn.call(addressHvUyxdO, addressY8W83Or, addressWVRIiq9, addressxNfGFH, uintmhiCpOz, addressLNARp4, addresssjrRjnZ, byteheyjsiG, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1L7MR6t.toggleContractActive.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintW6B7kkp = BigInt("694")
		const Cover_ZapIn_General_V1dDZVhMY = await Cover_ZapIn_General_V1.new(uintW6B7kkp, {from: accounts[2]});
		const addressjvWhmJ = accounts[2]
		const addressgGjelke = await Cover_ZapIn_General_V1dDZVhMY.transferOwnership.call(addressjvWhmJ, {from: accounts[2]});
		await Cover_ZapIn_General_V1dDZVhMY.onlyOwner.call({from: accounts[1]});
		const addressg2wQRRZ = await Cover_ZapIn_General_V1dDZVhMY.owner.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintiI1KqZr = BigInt("1296")
		const Cover_ZapIn_General_V1L7MR6t = await Cover_ZapIn_General_V1.new(uintiI1KqZr, {from: accounts[1]});
		const addressGumK0jK = "0x0000000000000000000000000000000000000000"
		const addresskq6hCg2 = accounts[4]
		const addressb9LcPJV = await Cover_ZapIn_General_V1L7MR6t.transferOwnership.call(addressGumK0jK, {from: accounts[1]});
		const addressGa1ZoTx = await Cover_ZapIn_General_V1L7MR6t.transferOwnership.call(addresskq6hCg2, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintpVoS1T = BigInt("1296")
		const Cover_ZapIn_General_V1L7MR6t = await Cover_ZapIn_General_V1.new(uintpVoS1T, {from: accounts[1]});
		const byteHKKl60S = "0x0611091813051208121c0a130920190b201b1a160d0d15030d1b18"
		const addresspQMznz5 = accounts[1]
		const addressetHKlT8 = accounts[4]
		const uintpxABcy8 = BigInt("305")
		const addressV1Q24iL = accounts[1]
		const addressFthd4oM = accounts[1]
		const addressbbv21Dh = accounts[2]
		const addressM3mQkF4 = accounts[0]
		const addressN1a3Piy = await Cover_ZapIn_General_V1L7MR6t.owner.call({from: accounts[4]});
		const 
zf2YjVP = await Cover_ZapIn_General_V1L7MR6t.ZapIn.call(addressM3mQkF4, addressbbv21Dh, addressFthd4oM, addressV1Q24iL, uintpxABcy8, addressetHKlT8, addresspQMznz5, byteHKKl60S, {from: "0x0000000000000000000000000000000000000001"});
	});
})