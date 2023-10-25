const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contracttjvYrxJ = await DingoInu.new({from: accounts[3]});
		const tokenOwnerr19jQve = accounts[2]
		const tokenOwnerN957iDM = accounts[2]
		const tokenOwnerLPBx2H6 = accounts[0]
		const spendergZYbIA2 = accounts[3]
		const tokenOwnerebgNlX1 = accounts[0]
		const tokenOwnerhh3RfId = accounts[1]
		const nullvdyTa2J = await contracttjvYrxJ.totalSupply.call({from: accounts[3]});
		const balanceEuttsP9 = await contracttjvYrxJ.balanceOf.call(tokenOwnerr19jQve, {from: accounts[5]});
		const balanceo37fNyC = await contracttjvYrxJ.balanceOf.call(tokenOwnerN957iDM, {from: accounts[0]});
		const balanceqHPXlBJ = await contracttjvYrxJ.balanceOf.call(tokenOwnerLPBx2H6, {from: "0x0000000000000000000000000000000000000001"});
		const remaining08LX4o = await contracttjvYrxJ.allowance.call(tokenOwnerebgNlX1, spendergZYbIA2, {from: accounts[4]});
		const balancebj2HuOR = await contracttjvYrxJ.balanceOf.call(tokenOwnerhh3RfId, {from: accounts[1]});

		assert.equal(balanceEuttsP9, 0)
		assert.equal(balancebj2HuOR, 0)
		assert.equal(balanceo37fNyC, 0)
		assert.equal(balanceqHPXlBJ, 0)
		assert.equal(nullvdyTa2J, 1000000000000000000000000000000)
		assert.equal(remaining08LX4o, 0)
	});

	it('test for DingoInu', async () => {
		const contractn28uVjd = await DingoInu.new({from: accounts[3]});
		const tokensyLaMGgA = BigInt("259")
		const spenderchnhAXM = accounts[3]
		const nullteBhhq6 = await contractn28uVjd.totalSupply.call({from: accounts[0]});
		const successdQ5QBzT = await contractn28uVjd.approve.call(spenderchnhAXM, tokensyLaMGgA, {from: accounts[4]});

		assert.equal(nullteBhhq6, 1000000000000000000000000000000)
		assert.equal(successdQ5QBzT, true)
	});

	it('test for DingoInu', async () => {
		const contractDESAlND = await DingoInu.new({from: accounts[4]});
		const tokensp4Qtnuh = BigInt("1803")
		const spender4ooLdK = accounts[0]
		const tokensbQxpvdG = BigInt("930")
		const toRM7RAc = accounts[2]
		const fromLQ4PWaz = accounts[2]
		const tokensW7vCVG = BigInt("1917")
		const tozvgbhHR = accounts[4]
		const successDIfj0DP = await contractDESAlND.approve.call(spender4ooLdK, tokensp4Qtnuh, {from: accounts[3]});
		const successD6kfI2l = await contractDESAlND.transferFrom.call(fromLQ4PWaz, toRM7RAc, tokensbQxpvdG, {from: accounts[4]});
		const successDIBkVqE = await contractDESAlND.transfer.call(tozvgbhHR, tokensW7vCVG, {from: accounts[2]});

		assert.equal(successDIfj0DP, true)
		await expect(contractDESAlND.transferFrom.call(fromLQ4PWaz, toRM7RAc, tokensbQxpvdG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractImAbhV5 = await DingoInu.new({from: accounts[4]});
		const tokenOwnerWWrr2k = accounts[5]
		const tokensOnIFDni = BigInt("580")
		const toLbTcidD = accounts[3]
		const balanceO5878y9 = await contractImAbhV5.balanceOf.call(tokenOwnerWWrr2k, {from: accounts[4]});
		const nullgD8AIRj = await contractImAbhV5.totalSupply.call({from: accounts[0]});
		const successHUA8eyW = await contractImAbhV5.transfer.call(toLbTcidD, tokensOnIFDni, {from: accounts[0]});

		assert.equal(balanceO5878y9, 0)
		assert.equal(nullgD8AIRj, 1000000000000000000000000000000)
		await expect(contractImAbhV5.transfer.call(toLbTcidD, tokensOnIFDni, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractQpOYqi5 = await DingoInu.new({from: accounts[3]});
		const tokens4tG4D7 = BigInt("259")
		const spendergXeYbYr = accounts[4]
		const tokensMYG03pU = BigInt("90")
		const tosCcnBhY = accounts[1]
		const nullRdfCMeQ = await contractQpOYqi5.totalSupply.call({from: accounts[0]});
		const successwAa1hKS = await contractQpOYqi5.approve.call(spendergXeYbYr, tokens4tG4D7, {from: accounts[4]});
		const successfWoQqAi = await contractQpOYqi5.transfer.call(tosCcnBhY, tokensMYG03pU, {from: accounts[3]});
		const nullQ7J4FA1 = await contractQpOYqi5.totalSupply.call({from: accounts[2]});

		assert.equal(nullQ7J4FA1, 1000000000000000000000000000000)
		assert.equal(nullRdfCMeQ, 1000000000000000000000000000000)
		assert.equal(successfWoQqAi, true)
		assert.equal(successwAa1hKS, true)
	});

	it('test for DingoInu', async () => {
		const contractVW7Z2NP = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensjyDRP0v = BigInt("360")
		const toCAr3F0p = accounts[5]
		const tokensFfLDFO = BigInt("376")
		const spenderAP18Fr = accounts[4]
		const tokenOwnerdSjy2gW = accounts[0]
		const spenderFes7lOt = "0x0000000000000000000000000000000000000001"
		const tokenOwnerm5bFGdG = accounts[3]
		const tokenOwnerjfTA3S = accounts[5]
		const successUpykwjU = await contractVW7Z2NP.transfer.call(toCAr3F0p, tokensjyDRP0v, {from: accounts[0]});
		const successlRcrp3Q = await contractVW7Z2NP.approve.call(spenderAP18Fr, tokensFfLDFO, {from: accounts[0]});
		const balanceU2dOoUk = await contractVW7Z2NP.balanceOf.call(tokenOwnerdSjy2gW, {from: accounts[5]});
		const remainingWrHmwDl = await contractVW7Z2NP.allowance.call(tokenOwnerm5bFGdG, spenderFes7lOt, {from: accounts[5]});
		const balancejpfV8i8 = await contractVW7Z2NP.balanceOf.call(tokenOwnerjfTA3S, {from: accounts[3]});
	});
})