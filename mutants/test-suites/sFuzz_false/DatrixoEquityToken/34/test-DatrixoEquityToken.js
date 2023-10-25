const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressUwRcJfb = accounts[4]
		const uintphfz1S7 = BigInt("434")
		const DatrixoEquityTokenzXoFkte = await DatrixoEquityToken.new(addressUwRcJfb, uintphfz1S7, {from: accounts[0]});
		const uintNLlVDK7 = BigInt("484")
		const addressuDRPFrG = accounts[2]
		const addressVyqFgu5 = accounts[2]
		const addressarrayTXMDjrk = await DatrixoEquityTokenzXoFkte.getShareholdersArray.call({from: accounts[4]});
//		const boolnar5VyL = await DatrixoEquityTokenzXoFkte.transferFrom.call(addressVyqFgu5, addressuDRPFrG, uintNLlVDK7, {from: accounts[4]});

		assert.equal(addressarrayTXMDjrk, )
		await expect(DatrixoEquityTokenzXoFkte.transferFrom.call(addressVyqFgu5, addressuDRPFrG, uintNLlVDK7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxELixhk = accounts[4]
		const uintMYNMIGw = BigInt("965")
		const DatrixoEquityTokenqSDqqyZ = await DatrixoEquityToken.new(addressxELixhk, uintMYNMIGw, {from: accounts[5]});
		const uintk3B9W5 = BigInt("510")
		const addressX909Ok7 = accounts[1]
		const addressarrayg2QSjCA = await DatrixoEquityTokenqSDqqyZ.getShareholdersArray.call({from: accounts[3]});
		const addressarrayrMKclQP = await DatrixoEquityTokenqSDqqyZ.getShareholdersArray.call({from: accounts[4]});
//		const uintd9RuF6z = await DatrixoEquityTokenqSDqqyZ.setStart.call(uintk3B9W5, {from: accounts[2]});
//		const boolwZh8Gv = await DatrixoEquityTokenqSDqqyZ.removeShareholder.call(addressX909Ok7, {from: accounts[3]});

		assert.equal(addressarrayg2QSjCA, )
		assert.equal(addressarrayrMKclQP, )
		await expect(DatrixoEquityTokenqSDqqyZ.setStart.call(uintk3B9W5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressi4qYdT9 = accounts[0]
		const uintzDk5Ya3 = BigInt("719")
		const DatrixoEquityTokenNvqEbYW = await DatrixoEquityToken.new(addressi4qYdT9, uintzDk5Ya3, {from: accounts[4]});
		const addresscOZQKTp = accounts[0]
		const addressarrayQv5IBa = await DatrixoEquityTokenNvqEbYW.getShareholdersArray.call({from: accounts[4]});
//		await DatrixoEquityTokenNvqEbYW.onlyOwner.call({from: accounts[4]});
//		const booln4mNTGr = await DatrixoEquityTokenNvqEbYW.removeShareholder.call(addresscOZQKTp, {from: accounts[4]});

		assert.equal(addressarrayQv5IBa, )
		await expect(DatrixoEquityTokenNvqEbYW.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaQoJtAb = accounts[4]
		const uintKkvQp33 = BigInt("434")
		const DatrixoEquityTokenzXoFkte = await DatrixoEquityToken.new(addressaQoJtAb, uintKkvQp33, {from: accounts[0]});
		const uint88iV7d = BigInt("484")
		const addressTTsYCks = accounts[2]
		const addressSMl3Af = accounts[4]
		const boolnar5VyL = await DatrixoEquityTokenzXoFkte.transferFrom.call(addressSMl3Af, addressTTsYCks, uint88iV7d, {from: accounts[4]});

		assert.equal(boolnar5VyL, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressAuo2bgp = accounts[4]
		const uintYs5Zd7S = BigInt("434")
		const DatrixoEquityTokenzXoFkte = await DatrixoEquityToken.new(addressAuo2bgp, uintYs5Zd7S, {from: accounts[0]});
		const uintKZIU0Rx = BigInt("484")
		const addressO3jDR9f = accounts[2]
		const addressQYPck1t = accounts[4]
		const uintlSxcBfF = BigInt("668")
		const boolnar5VyL = await DatrixoEquityTokenzXoFkte.transferFrom.call(addressQYPck1t, addressO3jDR9f, uintKZIU0Rx, {from: accounts[4]});
//		const uintXLSKNzD = await DatrixoEquityTokenzXoFkte.setStart.call(uintlSxcBfF, {from: accounts[4]});

		assert.equal(boolnar5VyL, true)
		await expect(DatrixoEquityTokenzXoFkte.setStart.call(uintlSxcBfF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresskx2y4Vr = accounts[4]
		const uintPdhsEv2 = BigInt("434")
		const DatrixoEquityTokenzXoFkte = await DatrixoEquityToken.new(addresskx2y4Vr, uintPdhsEv2, {from: accounts[0]});
		const addressYNMHcF = accounts[5]
		const uintJEsfh2I = BigInt("484")
		const addressgkLu0yB = accounts[2]
		const addressxI01XW4 = accounts[4]
		const uintFhIjcIs = BigInt("815")
		const addressm8lNhP2 = accounts[3]
//		const boolISfD9dI = await DatrixoEquityTokenzXoFkte.removeShareholder.call(addressYNMHcF, {from: accounts[4]});
//		const boolnar5VyL = await DatrixoEquityTokenzXoFkte.transferFrom.call(addressxI01XW4, addressgkLu0yB, uintJEsfh2I, {from: accounts[4]});
//		const boolaVDpnUs = await DatrixoEquityTokenzXoFkte.transfer.call(addressm8lNhP2, uintFhIjcIs, {from: accounts[5]});

		await expect(DatrixoEquityTokenzXoFkte.removeShareholder.call(addressYNMHcF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressfqTWS8U = accounts[4]
		const uintLOzqWYO = BigInt("434")
		const DatrixoEquityTokenzXoFkte = await DatrixoEquityToken.new(addressfqTWS8U, uintLOzqWYO, {from: accounts[0]});
		const uintXZXFNB = BigInt("717")
		const addressJHD6RQ = "0x0000000000000000000000000000000000000001"
		const uintCmg0PNE = BigInt("484")
		const address3Svpen = accounts[2]
		const addresspoMVLGe = accounts[4]
		const boolmXnLwEA = await DatrixoEquityTokenzXoFkte.transfer.call(addressJHD6RQ, uintXZXFNB, {from: accounts[4]});
		const boolnar5VyL = await DatrixoEquityTokenzXoFkte.transferFrom.call(addresspoMVLGe, address3Svpen, uintCmg0PNE, {from: accounts[4]});

		assert.equal(boolmXnLwEA, true)
		assert.equal(boolnar5VyL, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressk65XJZ0 = accounts[4]
		const uintJSJ9aPA = BigInt("434")
		const DatrixoEquityTokenzXoFkte = await DatrixoEquityToken.new(addressk65XJZ0, uintJSJ9aPA, {from: accounts[0]});
		const uint9zmQyX = BigInt("668")
		const addressgHfDnBC = accounts[4]
		const uints8Zarj = BigInt("484")
		const addressSwuXpe1 = accounts[3]
		const addressn8PIByq = accounts[4]
//		const boolOtiQi9S = await DatrixoEquityTokenzXoFkte.transfer.call(addressgHfDnBC, uint9zmQyX, {from: accounts[4]});
//		const addressarrayUvWMr5Z = await DatrixoEquityTokenzXoFkte.getShareholdersArray.call({from: accounts[5]});
//		const boolnar5VyL = await DatrixoEquityTokenzXoFkte.transferFrom.call(addressn8PIByq, addressSwuXpe1, uints8Zarj, {from: accounts[4]});

		await expect(DatrixoEquityTokenzXoFkte.transfer.call(addressgHfDnBC, uint9zmQyX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressM8rat7d = accounts[4]
		const uintbhzsZ7h = BigInt("1209")
		const DatrixoEquityTokenyTUTNeJ = await DatrixoEquityToken.new(addressM8rat7d, uintbhzsZ7h, {from: "0x0000000000000000000000000000000000000001"});
		const uintZA2X1Bf = BigInt("1531")
		const uintEPpOjjI = BigInt("1902")
		const addressS4bEMv6 = accounts[2]
		const uintVgAwZdf = BigInt("1975")
		const addressfd6p3vE = accounts[3]
		const addressQ0aZWl = accounts[4]
		const addressuJ79Ii = accounts[2]
		const uintbEEo9N9 = await DatrixoEquityTokenyTUTNeJ.setStart.call(uintZA2X1Bf, {from: accounts[5]});
		const boolCuJMK8k = await DatrixoEquityTokenyTUTNeJ.transfer.call(addressS4bEMv6, uintEPpOjjI, {from: accounts[0]});
		const boolvaetgVI = await DatrixoEquityTokenyTUTNeJ.transferFrom.call(addressQ0aZWl, addressfd6p3vE, uintVgAwZdf, {from: accounts[0]});
		const booldADHLt2 = await DatrixoEquityTokenyTUTNeJ.removeShareholder.call(addressuJ79Ii, {from: accounts[2]});
	});
})