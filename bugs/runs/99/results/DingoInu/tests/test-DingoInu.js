const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractm68HL6q = await DingoInu.new({from: accounts[4]});
		const tokensEBw1dw = BigInt("1400")
		const spenderLiLk4zs = accounts[2]
		const tokensfzkcPdW = BigInt("202")
		const toQRorkjD = accounts[1]
		const spenderpwhgg8 = "0x0000000000000000000000000000000000000001"
		const tokenOwnerZI91TU = accounts[2]
		const tokensHVdEfNP = BigInt("271")
		const spenderrbE6QGH = accounts[0]
		const successMtMtxws = await contractm68HL6q.approve.call(spenderLiLk4zs, tokensEBw1dw, {from: accounts[0]});
		const successk3be4Mu = await contractm68HL6q.transfer.call(toQRorkjD, tokensfzkcPdW, {from: accounts[3]});
		const remainingkkGHLms = await contractm68HL6q.allowance.call(tokenOwnerZI91TU, spenderpwhgg8, {from: accounts[1]});
		const successEg17LZm = await contractm68HL6q.approve.call(spenderrbE6QGH, tokensHVdEfNP, {from: accounts[1]});

		assert.equal(successMtMtxws, true)
		await expect(contractm68HL6q.transfer.call(toQRorkjD, tokensfzkcPdW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractTmCq1KU = await DingoInu.new({from: accounts[3]});
		const spenderoBjfVok = accounts[3]
		const tokenOwnerljEY3Tr = accounts[4]
		const tokensDgLmr90 = BigInt("1828")
		const toIctj3Q0 = accounts[4]
		const tokensRChtEeP = BigInt("2035")
		const to7dGZbx = accounts[5]
		const remaininganj211N = await contractTmCq1KU.allowance.call(tokenOwnerljEY3Tr, spenderoBjfVok, {from: accounts[4]});
		const successcHWCwO = await contractTmCq1KU.transfer.call(toIctj3Q0, tokensDgLmr90, {from: accounts[0]});
		const successDAyiS9s = await contractTmCq1KU.transfer.call(to7dGZbx, tokensRChtEeP, {from: accounts[3]});

		assert.equal(remaininganj211N, 0)
		await expect(contractTmCq1KU.transfer.call(toIctj3Q0, tokensDgLmr90, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractmT1syhE = await DingoInu.new({from: accounts[1]});
		const tokenOwneraGjgkca = accounts[0]
		const nullaczIiTq = await contractmT1syhE.totalSupply.call({from: accounts[1]});
		const nullysDNu8B = await contractmT1syhE.totalSupply.call({from: accounts[5]});
		const balancexFVNvGR = await contractmT1syhE.balanceOf.call(tokenOwneraGjgkca, {from: accounts[2]});

		assert.equal(balancexFVNvGR, 0)
		assert.equal(nullaczIiTq, 1000000000000000000000000000000)
		assert.equal(nullysDNu8B, 1000000000000000000000000000000)
	});

	it('test for DingoInu', async () => {
		const contractqnUFr4 = await DingoInu.new({from: accounts[0]});
		const tokensNuXhRcX = BigInt("1893")
		const togn1L9p = accounts[5]
		const fromzsU9KJt = accounts[4]
		const tokenOwner4J9jb7 = accounts[4]
		const tokensasHYkC = BigInt("1432")
		const spenderbO4oF7 = accounts[0]
		const spenderS45DCW = "0x0000000000000000000000000000000000000001"
		const tokenOwnerIkEuBVn = "0x0000000000000000000000000000000000000001"
		const successl8tg1eK = await contractqnUFr4.transferFrom.call(fromzsU9KJt, togn1L9p, tokensNuXhRcX, {from: accounts[3]});
		const balanceBqo02C1 = await contractqnUFr4.balanceOf.call(tokenOwner4J9jb7, {from: accounts[1]});
		const successB8txn9E = await contractqnUFr4.approve.call(spenderbO4oF7, tokensasHYkC, {from: accounts[5]});
		const remainingBeR0MyK = await contractqnUFr4.allowance.call(tokenOwnerIkEuBVn, spenderS45DCW, {from: accounts[1]});

		await expect(contractqnUFr4.transferFrom.call(fromzsU9KJt, togn1L9p, tokensNuXhRcX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractJx4Cz0H = await DingoInu.new({from: accounts[3]});
		const tokensP1XVM6E = BigInt("2025")
		const tomyhAbJK = accounts[5]
		const successGdYVwnb = await contractJx4Cz0H.transfer.call(tomyhAbJK, tokensP1XVM6E, {from: accounts[3]});

		assert.equal(successGdYVwnb, true)
	});

	it('test for DingoInu', async () => {
		const contractmFiwLF4 = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenscgLxCZK = BigInt("1701")
		const tog3OryIr = accounts[2]
		const fromIumaZ9F = accounts[4]
		const spenderv4cfDOB = accounts[3]
		const tokenOwnerO3qZLf2 = accounts[0]
		const tokenOwnerq9CfgEn = accounts[5]
		const successHFX5nN = await contractmFiwLF4.transferFrom.call(fromIumaZ9F, tog3OryIr, tokenscgLxCZK, {from: accounts[2]});
		const remainingCG2l2nr = await contractmFiwLF4.allowance.call(tokenOwnerO3qZLf2, spenderv4cfDOB, {from: accounts[0]});
		const balanceBSrGRI = await contractmFiwLF4.balanceOf.call(tokenOwnerq9CfgEn, {from: accounts[3]});
		const null9zAkwv = await contractmFiwLF4.totalSupply.call({from: accounts[3]});
	});
})