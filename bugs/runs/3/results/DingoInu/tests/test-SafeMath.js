const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractWlauv5q = await SafeMath.new({from: accounts[5]});
		const bQEAjATF = BigInt("1641")
		const at0IYFOO = BigInt("1632")
		const bRJ8c96T = BigInt("1611")
		const aX8Fx4q = BigInt("276")
		const bPRB7xui = BigInt("336")
		const aI0P75FB = BigInt("1576")
		const bBXBhWTZ = BigInt("672")
		const aq4eFGUL = BigInt("673")
		const cYDdXl8R = await contractWlauv5q.safeSub.call(at0IYFOO, bQEAjATF, {from: "0x0000000000000000000000000000000000000001"});
		const cEiOUBSR = await contractWlauv5q.safeMul.call(aX8Fx4q, bRJ8c96T, {from: accounts[4]});
		const cxHTwH3J = await contractWlauv5q.safeAdd.call(aI0P75FB, bPRB7xui, {from: accounts[5]});
		const coLPyIfi = await contractWlauv5q.safeSub.call(aq4eFGUL, bBXBhWTZ, {from: accounts[2]});

		await expect(contractWlauv5q.safeSub.call(at0IYFOO, bQEAjATF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractNIgFv4s = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const boVdnK85 = BigInt("709")
		const aKpkZS0 = BigInt("835")
		const bvhekGjy = BigInt("1313")
		const aENK91jg = BigInt("212")
		const bClScixz = BigInt("901")
		const aWeUDWG6 = BigInt("1437")
		const bOHFUlaL = BigInt("1392")
		const aEvbk21 = BigInt("1506")
		const bgeBFCe4 = BigInt("1137")
		const aAjOJeRu = BigInt("1617")
		const cMfH4Skf = await contractNIgFv4s.safeSub.call(aKpkZS0, boVdnK85, {from: accounts[0]});
		const coP3iR5Y = await contractNIgFv4s.safeMul.call(aENK91jg, bvhekGjy, {from: accounts[0]});
		const cym7R9zJ = await contractNIgFv4s.safeMul.call(aWeUDWG6, bClScixz, {from: accounts[1]});
		const cat45K7f = await contractNIgFv4s.safeDiv.call(aEvbk21, bOHFUlaL, {from: accounts[4]});
		const caGFjF9C = await contractNIgFv4s.safeSub.call(aAjOJeRu, bgeBFCe4, {from: accounts[1]});
	});
})