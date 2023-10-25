const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3AsHtBHy = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressR3gh7vb = accounts[1]
		const addressTzpQtq4 = accounts[5]
		const uintJp7xhSW = BigInt("555")
		const addressVuvSzWg = accounts[5]
		const uintRr6vuvk = BigInt("1590")
		const addressnPh4QJJ = accounts[2]
		const addressOp4EtbE = accounts[5]
		const addressVy8g6os = accounts[4]
		const addressxMKUxh9 = "0x0000000000000000000000000000000000000001"
		const addressICO8eEk = accounts[5]
		const addressX5fJlEX = accounts[4]
		const uintWRii1HP = await Core_Fi_V3AsHtBHy.allowance.call(addressTzpQtq4, addressR3gh7vb, {from: accounts[5]});
		const boolSTVXaLT = await Core_Fi_V3AsHtBHy.transfer.call(addressVuvSzWg, uintJp7xhSW, {from: accounts[0]});
		const boolM83WJ4M = await Core_Fi_V3AsHtBHy.transferFrom.call(addressOp4EtbE, addressnPh4QJJ, uintRr6vuvk, {from: accounts[2]});
		const uintQdXUlP6 = await Core_Fi_V3AsHtBHy.allowance.call(addressxMKUxh9, addressVy8g6os, {from: accounts[4]});
		const uintqgKDjOI = await Core_Fi_V3AsHtBHy.allowance.call(addressX5fJlEX, addressICO8eEk, {from: accounts[1]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3FwyMRQV = await Core_Fi_V3.new({from: accounts[2]});
		const uintLNurVlA = BigInt("1089")
		const addressBawpv0G = accounts[1]
		const addressMdCWuk = accounts[4]
		const uintKo4hrbm = BigInt("1615")
		const addressw2L6Nxc = accounts[4]
		const addressiyUstK8 = accounts[3]
		const uintaqimDlJ = BigInt("1356")
		const addressGRoXbNA = accounts[4]
		const addresss0GbIo4 = accounts[2]
		const boolQH1iY7l = await Core_Fi_V3FwyMRQV.approve.call(addressBawpv0G, uintLNurVlA, {from: accounts[4]});
		const uint256NaJEPmr = await Core_Fi_V3FwyMRQV.balanceOf.call(addressMdCWuk, {from: accounts[3]});
		const uint256isSEyba = await Core_Fi_V3FwyMRQV.totalSupply.call({from: accounts[1]});
		const boolyY34npy = await Core_Fi_V3FwyMRQV.transfer.call(addressw2L6Nxc, uintKo4hrbm, {from: accounts[2]});
		const uint256rNC9PP = await Core_Fi_V3FwyMRQV.balanceOf.call(addressiyUstK8, {from: accounts[4]});
		const boolIHnYCdg = await Core_Fi_V3FwyMRQV.transferFrom.call(addresss0GbIo4, addressGRoXbNA, uintaqimDlJ, {from: accounts[1]});

		assert.equal(boolIHnYCdg, false)
		assert.equal(boolQH1iY7l, true)
		assert.equal(boolyY34npy, true)
		assert.equal(uint256NaJEPmr, BigInt("0"))
		assert.equal(uint256isSEyba, BigInt("84000000000000000000000"))
		assert.equal(uint256rNC9PP, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3QwinKrG = await Core_Fi_V3.new({from: accounts[5]});
		const uinte62Sepe = BigInt("422")
		const addressIsahoN = accounts[1]
		const uintpUypDl = BigInt("392")
		const addressq14cKAu = accounts[4]
		const addressYQeY60a = accounts[3]
		const addressZYpc3BW = accounts[3]
		const addressrZckt8I = accounts[0]
		const uintdn2Oq38 = BigInt("1777")
		const addressHAg9yr6 = accounts[4]
		const uintg8r34Ys = BigInt("446")
		const addressZegQzv = accounts[3]
		const uintqUvbZRm = BigInt("794")
		const addresswkyjZm = accounts[3]
		const addressYAgmIFM = accounts[0]
		const boolnP9JdN = await Core_Fi_V3QwinKrG.approve.call(addressIsahoN, uinte62Sepe, {from: accounts[1]});
		const boolsevak37 = await Core_Fi_V3QwinKrG.transferFrom.call(addressYQeY60a, addressq14cKAu, uintpUypDl, {from: accounts[3]});
		const uintt0oDdNH = await Core_Fi_V3QwinKrG.allowance.call(addressrZckt8I, addressZYpc3BW, {from: accounts[4]});
		const boolNlwnLUy = await Core_Fi_V3QwinKrG.approve.call(addressHAg9yr6, uintdn2Oq38, {from: accounts[2]});
		const boolenGQXyT = await Core_Fi_V3QwinKrG.transfer.call(addressZegQzv, uintg8r34Ys, {from: accounts[5]});
		const booln0juGjQ = await Core_Fi_V3QwinKrG.transferFrom.call(addressYAgmIFM, addresswkyjZm, uintqUvbZRm, {from: accounts[3]});

		assert.equal(boolNlwnLUy, true)
		assert.equal(boolenGQXyT, true)
		assert.equal(booln0juGjQ, false)
		assert.equal(boolnP9JdN, true)
		assert.equal(boolsevak37, false)
		assert.equal(uintt0oDdNH, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3V4JNgPJ = await Core_Fi_V3.new({from: accounts[5]});
		const uintljwWi5w = BigInt("529")
		const addressKtAuZXa = accounts[3]
		const addressAYLOWiy = accounts[3]
		const uintiVGOpEQ = BigInt("214")
		const addressuk2weRa = accounts[1]
		const addressin1uOLw = accounts[1]
		const addresskohDbCn = accounts[1]
		const addressbIh08qS = accounts[0]
		const addressiUTpcuJ = accounts[1]
		const boolFi2Q4Gi = await Core_Fi_V3V4JNgPJ.transferFrom.call(addressAYLOWiy, addressKtAuZXa, uintljwWi5w, {from: accounts[5]});
		const booludhqSLI = await Core_Fi_V3V4JNgPJ.transfer.call(addressuk2weRa, uintiVGOpEQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintEqlmNcx = await Core_Fi_V3V4JNgPJ.allowance.call(addresskohDbCn, addressin1uOLw, {from: "0x0000000000000000000000000000000000000001"});
		const uintbIojZRC = await Core_Fi_V3V4JNgPJ.allowance.call(addressiUTpcuJ, addressbIh08qS, {from: accounts[2]});

		assert.equal(boolFi2Q4Gi, false)
		assert.equal(booludhqSLI, false)
		assert.equal(uintEqlmNcx, BigInt("0"))
		assert.equal(uintbIojZRC, BigInt("0"))
	});
})