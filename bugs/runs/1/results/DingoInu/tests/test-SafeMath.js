const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractQLX8S8e = await SafeMath.new({from: accounts[3]});
		const btmlxASp = BigInt("404")
		const ajdc979a = BigInt("1897")
		const bLhkbeCK = BigInt("2016")
		const aPRrkXKR = BigInt("1172")
		const bTsWnERM = BigInt("1147")
		const aOtRaX5Y = BigInt("208")
		const cXBbGO5o = await contractQLX8S8e.safeMul.call(ajdc979a, btmlxASp, {from: "0x0000000000000000000000000000000000000001"});
		const cr1S8msk = await contractQLX8S8e.safeSub.call(aPRrkXKR, bLhkbeCK, {from: accounts[0]});
		const caspJP03 = await contractQLX8S8e.safeAdd.call(aOtRaX5Y, bTsWnERM, {from: accounts[2]});

		assert.equal(cXBbGO5o, 766388)
		await expect(contractQLX8S8e.safeSub.call(aPRrkXKR, bLhkbeCK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractEFZylJ = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bEnrbFDc = BigInt("161")
		const aYYgprp = BigInt("1460")
		const bU14OePd = BigInt("1113")
		const aSi8adwa = BigInt("1162")
		const bbI8Nnw0 = BigInt("1053")
		const asob0kFc = BigInt("983")
		const bdvG1jc8 = BigInt("729")
		const acjUa0Kv = BigInt("780")
		const bVvbP6V8 = BigInt("1165")
		const aDMr8b5k = BigInt("1887")
		const bv8e2NIJ = BigInt("493")
		const aZ8jEUGt = BigInt("1251")
		const ciFG0Z8L = await contractEFZylJ.safeMul.call(aYYgprp, bEnrbFDc, {from: accounts[1]});
		const cquFN1gW = await contractEFZylJ.safeMul.call(aSi8adwa, bU14OePd, {from: accounts[0]});
		const cht9OMIo = await contractEFZylJ.safeSub.call(asob0kFc, bbI8Nnw0, {from: accounts[4]});
		const czNVFrGo = await contractEFZylJ.safeDiv.call(acjUa0Kv, bdvG1jc8, {from: accounts[3]});
		const cMHR5O0r = await contractEFZylJ.safeDiv.call(aDMr8b5k, bVvbP6V8, {from: accounts[1]});
		const cRmZiP1 = await contractEFZylJ.safeAdd.call(aZ8jEUGt, bv8e2NIJ, {from: accounts[1]});
	});
})