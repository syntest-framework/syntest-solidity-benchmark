const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractdkqyB51 = await SafeMath.new({from: accounts[1]});
		const bPyAys0L = BigInt("1638")
		const aN6cn5Ns = BigInt("438")
		const bvzev7vw = BigInt("1345")
		const aC785suT = BigInt("80")
		const bDH5409u = BigInt("733")
		const afZYEB3w = BigInt("1580")
		const baWAP2W4 = BigInt("2011")
		const aozYGV0g = BigInt("1451")
		const bkO9geEI = BigInt("1338")
		const aQGqC8Tl = BigInt("945")
		const ccfbxAHo = await contractdkqyB51.safeSub.call(aN6cn5Ns, bPyAys0L, {from: accounts[3]});
		const cDevpbpt = await contractdkqyB51.safeDiv.call(aC785suT, bvzev7vw, {from: accounts[2]});
		const cjjM3QO = await contractdkqyB51.safeSub.call(afZYEB3w, bDH5409u, {from: accounts[2]});
		const cFvIAe3z = await contractdkqyB51.safeDiv.call(aozYGV0g, baWAP2W4, {from: accounts[1]});
		const cfdxF1C = await contractdkqyB51.safeSub.call(aQGqC8Tl, bkO9geEI, {from: accounts[4]});

		await expect(contractdkqyB51.safeSub.call(aN6cn5Ns, bPyAys0L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractSkXnyY = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bvBj0aZ1 = BigInt("280")
		const aHYPgdeC = BigInt("1425")
		const bdrCTYD = BigInt("1424")
		const acAU84wz = BigInt("125")
		const bQOl9Yk = BigInt("1734")
		const agLcsmzq = BigInt("1070")
		const bSj9CJxp = BigInt("2001")
		const abUlBxnd = BigInt("1451")
		const cQ3Bhol = await contractSkXnyY.safeAdd.call(aHYPgdeC, bvBj0aZ1, {from: accounts[1]});
		const cJeTj31G = await contractSkXnyY.safeDiv.call(acAU84wz, bdrCTYD, {from: accounts[0]});
		const cPcVAEic = await contractSkXnyY.safeSub.call(agLcsmzq, bQOl9Yk, {from: accounts[1]});
		const cFueQYe3 = await contractSkXnyY.safeMul.call(abUlBxnd, bSj9CJxp, {from: accounts[0]});
	});
})