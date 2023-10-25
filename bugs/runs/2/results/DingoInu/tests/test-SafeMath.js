const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractGUOkNC = await SafeMath.new({from: accounts[2]});
		const bvDEAkkr = BigInt("1748")
		const aylMurTR = BigInt("1537")
		const bphh2FFL = BigInt("175")
		const aYqaKce = BigInt("1880")
		const bSJ2Rl1d = BigInt("789")
		const aCYOKX2N = BigInt("1467")
		const ciQNvdus = await contractGUOkNC.safeSub.call(aylMurTR, bvDEAkkr, {from: accounts[1]});
		const cxMYuRrr = await contractGUOkNC.safeDiv.call(aYqaKce, bphh2FFL, {from: accounts[2]});
		const cYWQzQ53 = await contractGUOkNC.safeMul.call(aCYOKX2N, bSJ2Rl1d, {from: accounts[0]});

		await expect(contractGUOkNC.safeSub.call(aylMurTR, bvDEAkkr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractPaFbjnU = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bZMOBSZR = BigInt("338")
		const acktat5w = BigInt("473")
		const be7hE7lk = BigInt("474")
		const acyXkcty = BigInt("1372")
		const bGzhSAoc = BigInt("1854")
		const aYhqr6ap = BigInt("1514")
		const bzLw4Rnw = BigInt("935")
		const au4tlOl = BigInt("1640")
		const bT8yurJ = BigInt("681")
		const aDcH54tT = BigInt("1968")
		const cl3O2mwS = await contractPaFbjnU.safeSub.call(acktat5w, bZMOBSZR, {from: accounts[2]});
		const cbHgaVe1 = await contractPaFbjnU.safeAdd.call(acyXkcty, be7hE7lk, {from: accounts[4]});
		const chEJ5NXe = await contractPaFbjnU.safeAdd.call(aYhqr6ap, bGzhSAoc, {from: accounts[3]});
		const cAjmsZ0 = await contractPaFbjnU.safeMul.call(au4tlOl, bzLw4Rnw, {from: accounts[2]});
		const cV0VipKO = await contractPaFbjnU.safeDiv.call(aDcH54tT, bT8yurJ, {from: accounts[1]});
	});
})