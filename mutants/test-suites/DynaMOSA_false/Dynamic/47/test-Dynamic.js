const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicUEP7aAd = await Dynamic.new({from: accounts[4]});
		const uintyLvxJvF = BigInt("669")
		const string52P4dN = "eTO4YQChS"
		const uintQE158E = BigInt("1025")
		const uinttzL1rmm = BigInt("1522")
		const stringrcjXHiM = "CkNkgf1UBCgA5LgmDMdfrqtgOcBERE57SHYDivfTV78GAiryxBbiyMTopugdkyyoQ"
		const uintC0PXwDD = BigInt("1375")
		const uintP2jmtW5 = BigInt("1601")
		const stringvPdKpy = "GReaH9PTo5yt955VgtVEiwHx9s7Ez63lKP0uY1O7L2Jw5"
		const uintwBnoneD = BigInt("1602")
		const boolXJbKTfD = await DynamicUEP7aAd.echidna_test.call({from: accounts[5]});
		const boolWTLaJ5W = await DynamicUEP7aAd.echidna_test.call({from: accounts[4]});
		const booliMnY1S = await DynamicUEP7aAd.yolo.call(uintQE158E, string52P4dN, uintyLvxJvF, {from: accounts[0]});
		const booll5Fb8mH = await DynamicUEP7aAd.yolo.call(uintC0PXwDD, stringrcjXHiM, uinttzL1rmm, {from: accounts[3]});
		const boolQJIjBfr = await DynamicUEP7aAd.yolo.call(uintwBnoneD, stringvPdKpy, uintP2jmtW5, {from: accounts[5]});

		assert.equal(boolQJIjBfr, true)
		assert.equal(boolWTLaJ5W, true)
		assert.equal(boolXJbKTfD, true)
		assert.equal(booliMnY1S, true)
		assert.equal(booll5Fb8mH, true)
	});

	it('test for Dynamic', async () => {
		const DynamicpcN8suQ = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS2uYvj = BigInt("1293")
		const stringcDipnzA = "WB4iPMfYGqWmCEO9nw4I6eydO4anhJyADvMK9GuULCafQFDuO0xu"
		const uintwlFIKy = BigInt("632")
		const boolKAimDxy = await DynamicpcN8suQ.echidna_test.call({from: accounts[0]});
		const boole0DJlOs = await DynamicpcN8suQ.echidna_test.call({from: accounts[3]});
		const boolROSBN0V = await DynamicpcN8suQ.yolo.call(uintwlFIKy, stringcDipnzA, uintS2uYvj, {from: accounts[2]});
		const boolPuIf5Mt = await DynamicpcN8suQ.echidna_test.call({from: accounts[0]});
	});
})