const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Bazb6PMBnO = await Baz.new({from: accounts[0]});
		const intuol99am = BigInt("304")
		const intR9X4u7H = BigInt("1539")
		const intce2KGE = BigInt("1364")
		const boolLDYXgdA = await Bazb6PMBnO.echidna_all_states.call({from: accounts[0]});
		const boolzHrgra2 = await Bazb6PMBnO.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256xMikDSe = await Bazb6PMBnO.baz.call(intce2KGE, intR9X4u7H, intuol99am, {from: accounts[1]});
		const boolqhogeud = await Bazb6PMBnO.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolLDYXgdA, true)
		assert.equal(boolqhogeud, true)
		assert.equal(boolzHrgra2, true)
		assert.equal(int256xMikDSe, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazMczAuxF = await Baz.new({from: accounts[1]});
		const intIYYPPbG = BigInt("-1600")
		const intj7Fc6V = BigInt("-1957")
		const intHVow07 = BigInt("832")
		const intRnRQk6H = BigInt("-1140")
		const intQRd283X = BigInt("1989")
		const intzsLr8R6 = BigInt("-709")
		const intL6W2ZG5 = BigInt("-1117")
		const intwJgCaCM = BigInt("-1643")
		const intKQW9qe = BigInt("-138")
		const intfzZwGPg = BigInt("-877")
		const intwv0mA6 = BigInt("-564")
		const intsPreLZA = BigInt("-1624")
		const boolwtSBHWK = await BazMczAuxF.echidna_all_states.call({from: accounts[3]});
		const int256wLgAzo = await BazMczAuxF.baz.call(intHVow07, intj7Fc6V, intIYYPPbG, {from: accounts[2]});
		const int256zIBXlgO = await BazMczAuxF.baz.call(intzsLr8R6, intQRd283X, intRnRQk6H, {from: accounts[2]});
		const int256ydNwlAv = await BazMczAuxF.baz.call(intKQW9qe, intwJgCaCM, intL6W2ZG5, {from: accounts[4]});
		const int2566iEiqh = await BazMczAuxF.baz.call(intsPreLZA, intwv0mA6, intfzZwGPg, {from: accounts[1]});
		const boolzYllzRv = await BazMczAuxF.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwtSBHWK, true)
		assert.equal(boolzYllzRv, true)
		assert.equal(int2566iEiqh, BigInt("1"))
		assert.equal(int256wLgAzo, BigInt("1"))
		assert.equal(int256ydNwlAv, BigInt("1"))
		assert.equal(int256zIBXlgO, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazqWF2n0I = await Baz.new({from: accounts[4]});
		const intIJo31dF = BigInt("-1678")
		const intfEFAVi1 = BigInt("-1094")
		const intt0N03FJ = BigInt("299")
		const intg2D9IXx = BigInt("-1457")
		const intWXTQKh5 = BigInt("1064")
		const intbn8ohB8 = BigInt("854")
		const intUH4dWcW = BigInt("1044")
		const intN3aVsjc = BigInt("245")
		const intTGozRd = BigInt("871")
		const intGYJcksb = BigInt("627")
		const intTLBrme3 = BigInt("-1817")
		const intS6YmSOp = BigInt("1335")
		const boolUuv2Sku = await BazqWF2n0I.echidna_all_states.call({from: accounts[3]});
		const int2569Jr8KD = await BazqWF2n0I.baz.call(intt0N03FJ, intfEFAVi1, intIJo31dF, {from: accounts[1]});
		const booljAa1ZLm = await BazqWF2n0I.echidna_all_states.call({from: accounts[3]});
		const int256UWxnjzh = await BazqWF2n0I.baz.call(intbn8ohB8, intWXTQKh5, intg2D9IXx, {from: accounts[3]});
		const int256RNoPnE = await BazqWF2n0I.baz.call(intTGozRd, intN3aVsjc, intUH4dWcW, {from: accounts[3]});
		const int256vbyp8Rx = await BazqWF2n0I.baz.call(intS6YmSOp, intTLBrme3, intGYJcksb, {from: accounts[2]});

		assert.equal(boolUuv2Sku, true)
		assert.equal(booljAa1ZLm, true)
		assert.equal(int2569Jr8KD, BigInt("1"))
		assert.equal(int256RNoPnE, BigInt("5"))
		assert.equal(int256UWxnjzh, BigInt("3"))
		assert.equal(int256vbyp8Rx, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazFz1VeA = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intyWSzXI6 = BigInt("1826")
		const intlKSWl4R = BigInt("469")
		const intR2FKJzv = BigInt("-1923")
		const ints85s1pw = BigInt("-295")
		const intx97B4zJ = BigInt("-1794")
		const intYoXQzn = BigInt("-1083")
		const intaHBgTWM = BigInt("527")
		const intlTiNyw = BigInt("-1969")
		const intEkbOuG = BigInt("-1996")
		const intY26RfDj = BigInt("-1011")
		const intiJbWqil = BigInt("-1737")
		const intAaHnov = BigInt("-123")
		const int256mG8gsD = await BazFz1VeA.baz.call(intR2FKJzv, intlKSWl4R, intyWSzXI6, {from: accounts[0]});
		const int256TqK5D6a = await BazFz1VeA.baz.call(intYoXQzn, intx97B4zJ, ints85s1pw, {from: accounts[1]});
		const int256x04eIFI = await BazFz1VeA.baz.call(intEkbOuG, intlTiNyw, intaHBgTWM, {from: accounts[1]});
		const int256GGpwDH = await BazFz1VeA.baz.call(intAaHnov, intiJbWqil, intY26RfDj, {from: accounts[4]});
		const boolCDDQAd = await BazFz1VeA.echidna_all_states.call({from: accounts[0]});
	});
})