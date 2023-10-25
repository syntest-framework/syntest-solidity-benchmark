const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contracty37L2Pd = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensOR3BDmN = BigInt("1912")
		const tod1eCSnf = accounts[1]
		const tokenOwnerbQtqBjB = accounts[1]
		const spenderqWsDPl5 = accounts[1]
		const tokenOwnerJvirH1z = accounts[1]
		const tokenOwnerHqH7vbW = accounts[4]
		const spenderRl07g1H = accounts[4]
		const tokenOwnerTsTsNFr = accounts[2]
		const successanjNqlV = await contracty37L2Pd.transfer.call(tod1eCSnf, tokensOR3BDmN, {from: accounts[5]});
		const balanceyofZ4Id = await contracty37L2Pd.balanceOf.call(tokenOwnerbQtqBjB, {from: accounts[1]});
		const remainingdx27aIB = await contracty37L2Pd.allowance.call(tokenOwnerJvirH1z, spenderqWsDPl5, {from: accounts[2]});
		const balancey8dFKAT = await contracty37L2Pd.balanceOf.call(tokenOwnerHqH7vbW, {from: accounts[5]});
		const remainingkvCZili = await contracty37L2Pd.allowance.call(tokenOwnerTsTsNFr, spenderRl07g1H, {from: accounts[5]});
	});

	it('test for DingoInu', async () => {
		const contractZr0SK91 = await DingoInu.new({from: accounts[0]});
		const tokensoxlZMe = BigInt("302")
		const tog14u3x7 = accounts[5]
		const spenderiQ65EYM = "0x0000000000000000000000000000000000000001"
		const tokenOwnerZV5EcxB = accounts[5]
		const tokensNj3lN8w = BigInt("464")
		const tozAgxzpo = accounts[0]
		const successpdKkrfU = await contractZr0SK91.transfer.call(tog14u3x7, tokensoxlZMe, {from: accounts[2]});
		const remainingoD1hTqv = await contractZr0SK91.allowance.call(tokenOwnerZV5EcxB, spenderiQ65EYM, {from: "0x0000000000000000000000000000000000000001"});
		const successsyuTA79 = await contractZr0SK91.transfer.call(tozAgxzpo, tokensNj3lN8w, {from: accounts[1]});

		await expect(contractZr0SK91.transfer.call(tog14u3x7, tokensoxlZMe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractmWl02VQ = await DingoInu.new({from: accounts[4]});
		const tokenslHERCCq = BigInt("2005")
		const spenderaViVNfQ = accounts[4]
		const tokenOwnerXsxA7M9 = accounts[4]
		const tokensUqvY7Qk = BigInt("1799")
		const toxdrgP3J = accounts[2]
		const successpd4Sveb = await contractmWl02VQ.approve.call(spenderaViVNfQ, tokenslHERCCq, {from: accounts[0]});
		const balancejJRfQPw = await contractmWl02VQ.balanceOf.call(tokenOwnerXsxA7M9, {from: accounts[3]});
		const successhCzdhZf = await contractmWl02VQ.transfer.call(toxdrgP3J, tokensUqvY7Qk, {from: accounts[5]});

		assert.equal(balancejJRfQPw, 1000000000000000000000000000000)
		assert.equal(successpd4Sveb, true)
		await expect(contractmWl02VQ.transfer.call(toxdrgP3J, tokensUqvY7Qk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractGIU6ktR = await DingoInu.new({from: accounts[5]});
		const tokenOwnerlRHAN7F = "0x0000000000000000000000000000000000000001"
		const tokensjPvOZPY = BigInt("909")
		const spenderwsDM5t = accounts[2]
		const spender2oYD8t = "0x0000000000000000000000000000000000000001"
		const tokenOwnerQ6j7Ose = accounts[1]
		const tokenOwnerPdPPb8 = accounts[3]
		const nullNmbsWtT = await contractGIU6ktR.totalSupply.call({from: accounts[1]});
		const balanceqW4TLuC = await contractGIU6ktR.balanceOf.call(tokenOwnerlRHAN7F, {from: accounts[2]});
		const successhopTP5f = await contractGIU6ktR.approve.call(spenderwsDM5t, tokensjPvOZPY, {from: accounts[2]});
		const remainingoHrjZrF = await contractGIU6ktR.allowance.call(tokenOwnerQ6j7Ose, spender2oYD8t, {from: accounts[5]});
		const balanceLXentx = await contractGIU6ktR.balanceOf.call(tokenOwnerPdPPb8, {from: accounts[5]});

		assert.equal(balanceLXentx, 0)
		assert.equal(balanceqW4TLuC, 0)
		assert.equal(nullNmbsWtT, 1000000000000000000000000000000)
		assert.equal(remainingoHrjZrF, 0)
		assert.equal(successhopTP5f, true)
	});

	it('test for DingoInu', async () => {
		const contracteqg4KUe = await DingoInu.new({from: accounts[3]});
		const tokensluX35Lk = BigInt("1996")
		const toVIn092z = accounts[2]
		const fromaXz0S8q = accounts[0]
		const tokenOwneriVgsQOC = accounts[4]
		const successqCUw33I = await contracteqg4KUe.transferFrom.call(fromaXz0S8q, toVIn092z, tokensluX35Lk, {from: accounts[2]});
		const null8Bldwe = await contracteqg4KUe.totalSupply.call({from: accounts[0]});
		const balanceBW3U2T4 = await contracteqg4KUe.balanceOf.call(tokenOwneriVgsQOC, {from: accounts[0]});

		await expect(contracteqg4KUe.transferFrom.call(fromaXz0S8q, toVIn092z, tokensluX35Lk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractrU2zk1 = await DingoInu.new({from: accounts[3]});
		const tokensqhaevFV = BigInt("1696")
		const tok6LxtHl = accounts[4]
		const tokensWL5a8uP = BigInt("503")
		const toFKQRtP0 = accounts[2]
		const successxrugkVx = await contractrU2zk1.transfer.call(tok6LxtHl, tokensqhaevFV, {from: accounts[3]});
		const successO5Y958N = await contractrU2zk1.transfer.call(toFKQRtP0, tokensWL5a8uP, {from: accounts[1]});

		assert.equal(successxrugkVx, true)
		await expect(contractrU2zk1.transfer.call(toFKQRtP0, tokensWL5a8uP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})