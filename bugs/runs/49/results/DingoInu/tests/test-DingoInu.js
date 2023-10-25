const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractAgEh8Kh = await DingoInu.new({from: accounts[4]});
		const tokensNOnjBVN = BigInt("1142")
		const toheGay1V = accounts[1]
		const spenderKghZrQp = accounts[0]
		const tokenOwnerUohoGR = accounts[5]
		const tokenOwnersDjWud7 = accounts[3]
		const successLDdZZyD = await contractAgEh8Kh.transfer.call(toheGay1V, tokensNOnjBVN, {from: accounts[4]});
		const nullWy05rTA = await contractAgEh8Kh.totalSupply.call({from: accounts[2]});
		const remainingsKRS9UB = await contractAgEh8Kh.allowance.call(tokenOwnerUohoGR, spenderKghZrQp, {from: accounts[3]});
		const nullKUJHpve = await contractAgEh8Kh.totalSupply.call({from: accounts[1]});
		const balanceyIE1T48 = await contractAgEh8Kh.balanceOf.call(tokenOwnersDjWud7, {from: accounts[3]});

		assert.equal(balanceyIE1T48, 0)
		assert.equal(nullKUJHpve, 1000000000000000000000000000000)
		assert.equal(nullWy05rTA, 1000000000000000000000000000000)
		assert.equal(remainingsKRS9UB, 0)
		assert.equal(successLDdZZyD, true)
	});

	it('test for DingoInu', async () => {
		const contractkWfH98y = await DingoInu.new({from: accounts[2]});
		const tokenscTNENW = BigInt("1768")
		const toKZnPKc4 = "0x0000000000000000000000000000000000000001"
		const frompXupuc = accounts[5]
		const tokenswuUmwoa = BigInt("1197")
		const toOQ7hq9 = accounts[4]
		const tokensXkB8NH2 = BigInt("256")
		const spenderMgSHtPz = accounts[0]
		const successcGMEM7H = await contractkWfH98y.transferFrom.call(frompXupuc, toKZnPKc4, tokenscTNENW, {from: accounts[4]});
		const nullQcNtnX = await contractkWfH98y.totalSupply.call({from: accounts[1]});
		const successpxdNjgF = await contractkWfH98y.transfer.call(toOQ7hq9, tokenswuUmwoa, {from: accounts[4]});
		const successwg3KxJy = await contractkWfH98y.approve.call(spenderMgSHtPz, tokensXkB8NH2, {from: accounts[4]});
		const nullFS2WVE7 = await contractkWfH98y.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractkWfH98y.transferFrom.call(frompXupuc, toKZnPKc4, tokenscTNENW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractOd1MeRl = await DingoInu.new({from: accounts[0]});
		const tokenOwnersgQFuWh = accounts[0]
		const tokensTVIgtih = BigInt("192")
		const spenderYRX52j5 = accounts[5]
		const spenderZIL4Rq = "0x0000000000000000000000000000000000000001"
		const tokenOwnerCRvEGM9 = accounts[0]
		const spenderZxcVsu = accounts[4]
		const tokenOwnerfRMjIKq = accounts[2]
		const balancei2S0ok8 = await contractOd1MeRl.balanceOf.call(tokenOwnersgQFuWh, {from: "0x0000000000000000000000000000000000000001"});
		const successMmpPHdE = await contractOd1MeRl.approve.call(spenderYRX52j5, tokensTVIgtih, {from: accounts[0]});
		const remainingWTxZ5gf = await contractOd1MeRl.allowance.call(tokenOwnerCRvEGM9, spenderZIL4Rq, {from: accounts[0]});
		const remainingRjguFF6 = await contractOd1MeRl.allowance.call(tokenOwnerfRMjIKq, spenderZxcVsu, {from: accounts[4]});

		assert.equal(balancei2S0ok8, 1000000000000000000000000000000)
		assert.equal(remainingRjguFF6, 0)
		assert.equal(remainingWTxZ5gf, 0)
		assert.equal(successMmpPHdE, true)
	});

	it('test for DingoInu', async () => {
		const contractKd0ctfF = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensS3n8pFZ = BigInt("1504")
		const spendermWpVBRO = "0x0000000000000000000000000000000000000001"
		const tokensZX3vO0Q = BigInt("774")
		const toxJ7m36 = accounts[4]
		const tokensl3Ktc8k = BigInt("1763")
		const spenderT8x1lnT = accounts[3]
		const spenders8Kvzsq = accounts[2]
		const tokenOwnerHVe8c3c = accounts[5]
		const nullMmYK7z3 = await contractKd0ctfF.totalSupply.call({from: accounts[3]});
		const successjL21GM = await contractKd0ctfF.approve.call(spendermWpVBRO, tokensS3n8pFZ, {from: accounts[2]});
		const successGiF3lxD = await contractKd0ctfF.transfer.call(toxJ7m36, tokensZX3vO0Q, {from: accounts[1]});
		const successm2gAhMh = await contractKd0ctfF.approve.call(spenderT8x1lnT, tokensl3Ktc8k, {from: accounts[0]});
		const remainingGz2dPKz = await contractKd0ctfF.allowance.call(tokenOwnerHVe8c3c, spenders8Kvzsq, {from: "0x0000000000000000000000000000000000000001"});
	});
})