const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicE2Gem5u = await Dynamic.new({from: accounts[4]});
		const uintNh5sG05 = BigInt("1916")
		const stringk8qQW9Z = "tUxeOW4quPdvzOBcjUhB8fJp3oWBLG"
		const uintdq6npr8 = BigInt("1625")
		const boolD4bI3PZ = await DynamicE2Gem5u.echidna_test.call({from: accounts[5]});
		const boolOGblcie = await DynamicE2Gem5u.yolo.call(uintdq6npr8, stringk8qQW9Z, uintNh5sG05, {from: accounts[0]});

		assert.equal(boolD4bI3PZ, true)
		assert.equal(boolOGblcie, true)
	});

	it('test for Dynamic', async () => {
		const Dynamicz1i7VTj = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAth1Bbz = BigInt("1414")
		const stringPFg7ysD = "TT1sOye8ACkiJp5B51ztA"
		const uintxmLPhEk = BigInt("1051")
		const uinth2tiV06 = BigInt("703")
		const stringcUnUHLO = "7glIP"
		const uintLBdMvH3 = BigInt("958")
		const boolu65A8un = await Dynamicz1i7VTj.yolo.call(uintxmLPhEk, stringPFg7ysD, uintAth1Bbz, {from: "0x0000000000000000000000000000000000000001"});
		const boolClpAqss = await Dynamicz1i7VTj.yolo.call(uintLBdMvH3, stringcUnUHLO, uinth2tiV06, {from: accounts[4]});
		const booluHgfRrU = await Dynamicz1i7VTj.echidna_test.call({from: accounts[3]});
	});
})