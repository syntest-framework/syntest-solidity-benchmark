const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamictO35HyR = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxWUX68q = BigInt("905")
		const stringxAY4XcL = "jjwXBdzNp7"
		const uintPdaEuhu = BigInt("1624")
		const uintDOsv52G = BigInt("1213")
		const stringWmT1hQ5 = "GU5Bu1ljpAVHxQnHyTaKjCnAPMGmDcQ5O32aUka6gYvMnPJUX16Y3eGHRBjE9MRmbdGcKxiU8bpX7H4m54SBNj7rJP7nPS7"
		const uintmixiQk = BigInt("1534")
		const uintebI08MK = BigInt("821")
		const stringc1HWy3P = "XFq4xbpTS3gft8dlzeLS5VE1i3nK6xnl7dsLR5qeTy0G"
		const uintFWmP2aD = BigInt("1335")
		const boolitlPbjy = await DynamictO35HyR.yolo.call(uintPdaEuhu, stringxAY4XcL, uintxWUX68q, {from: accounts[5]});
		const boolaDvRmpv = await DynamictO35HyR.yolo.call(uintmixiQk, stringWmT1hQ5, uintDOsv52G, {from: accounts[3]});
		const boolH5fLLVf = await DynamictO35HyR.yolo.call(uintFWmP2aD, stringc1HWy3P, uintebI08MK, {from: accounts[0]});
		const boolbx6d607 = await DynamictO35HyR.echidna_test.call({from: accounts[2]});
		const boolYqSFlDI = await DynamictO35HyR.echidna_test.call({from: accounts[1]});
	});

	it('test for Dynamic', async () => {
		const DynamicEuaN7mJ = await Dynamic.new({from: accounts[0]});
		const uintKJwH6ti = BigInt("1339")
		const stringZY56Ciw = "nS5Nd68LQqecC5rhvyXbCoHomdFCSrHbLVlofBlTVkaGxgIji2NoivjuqADSwMj2BtUonrNCr4J1h"
		const uinttnLEF1 = BigInt("1826")
		const boolTMih6NO = await DynamicEuaN7mJ.echidna_test.call({from: accounts[1]});
		const boolIl4tHry = await DynamicEuaN7mJ.echidna_test.call({from: accounts[5]});
		const boolL6PAR6 = await DynamicEuaN7mJ.yolo.call(uinttnLEF1, stringZY56Ciw, uintKJwH6ti, {from: accounts[3]});
		const boolHRtk2Zx = await DynamicEuaN7mJ.echidna_test.call({from: accounts[4]});
		const boolXWnBeHs = await DynamicEuaN7mJ.echidna_test.call({from: accounts[3]});

		assert.equal(boolHRtk2Zx, true)
		assert.equal(boolIl4tHry, true)
		assert.equal(boolL6PAR6, true)
		assert.equal(boolTMih6NO, true)
		assert.equal(boolXWnBeHs, true)
	});
})