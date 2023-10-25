const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractB9gTygb = await DingoInu.new({from: accounts[4]});
		const tokensTE0DKL1 = BigInt("229")
		const toxJW7xxK = accounts[5]
		const spenderO84Wknd = accounts[0]
		const tokenOwnerImDgNOh = accounts[4]
		const tokenshrqK0a3 = BigInt("1016")
		const spenderUVhhYn7 = accounts[4]
		const tokensemw8Jy1 = BigInt("31")
		const toyksYKxd = accounts[0]
		const successBSio8Ra = await contractB9gTygb.transfer.call(toxJW7xxK, tokensTE0DKL1, {from: accounts[0]});
		const remainingrGrXmtP = await contractB9gTygb.allowance.call(tokenOwnerImDgNOh, spenderO84Wknd, {from: accounts[0]});
		const successxov3RIO = await contractB9gTygb.approve.call(spenderUVhhYn7, tokenshrqK0a3, {from: accounts[5]});
		const successSeARrQf = await contractB9gTygb.transfer.call(toyksYKxd, tokensemw8Jy1, {from: accounts[1]});
		const nulllAPq5bB = await contractB9gTygb.totalSupply.call({from: accounts[5]});

		await expect(contractB9gTygb.transfer.call(toxJW7xxK, tokensTE0DKL1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractOMRFBcz = await DingoInu.new({from: accounts[3]});
		const tokensMR2rsS = BigInt("463")
		const toONw2lwC = accounts[0]
		const fromvZ5U96g = "0x0000000000000000000000000000000000000001"
		const spender0ldIQH = accounts[3]
		const tokenOwnere2TMlpY = accounts[4]
		const tokenOwnerrNX85Bv = accounts[0]
		const null3Qyp3w = await contractOMRFBcz.totalSupply.call({from: accounts[2]});
		const successQAfvx1H = await contractOMRFBcz.transferFrom.call(fromvZ5U96g, toONw2lwC, tokensMR2rsS, {from: "0x0000000000000000000000000000000000000001"});
		const remaininga6gcH4 = await contractOMRFBcz.allowance.call(tokenOwnere2TMlpY, spender0ldIQH, {from: accounts[0]});
		const balanceD083ylT = await contractOMRFBcz.balanceOf.call(tokenOwnerrNX85Bv, {from: accounts[0]});

		assert.equal(null3Qyp3w, 1000000000000000000000000000000)
		await expect(contractOMRFBcz.transferFrom.call(fromvZ5U96g, toONw2lwC, tokensMR2rsS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractv7xukoJ = await DingoInu.new({from: accounts[1]});
		const tokenOwneryoi6ju = accounts[2]
		const spendero7P3uzm = accounts[4]
		const tokenOwneru3NlC1Z = accounts[1]
		const tokenOwnery9lNWRm = accounts[1]
		const balancecTajn6n = await contractv7xukoJ.balanceOf.call(tokenOwneryoi6ju, {from: accounts[4]});
		const remainingqXaKPh5 = await contractv7xukoJ.allowance.call(tokenOwneru3NlC1Z, spendero7P3uzm, {from: accounts[2]});
		const balancel4jgmaH = await contractv7xukoJ.balanceOf.call(tokenOwnery9lNWRm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balancecTajn6n, 0)
		assert.equal(balancel4jgmaH, 1000000000000000000000000000000)
		assert.equal(remainingqXaKPh5, 0)
	});

	it('test for DingoInu', async () => {
		const contractbCaUjNL = await DingoInu.new({from: accounts[2]});
		const tokensuIa7iHc = BigInt("463")
		const spenderUMPpEjB = accounts[0]
		const tokenOwnerNrOWjmq = accounts[2]
		const tokenstuKdnw = BigInt("710")
		const spenderxNIsCaJ = accounts[3]
		const successFk7akqT = await contractbCaUjNL.approve.call(spenderUMPpEjB, tokensuIa7iHc, {from: accounts[2]});
		const balanceSrsRuX = await contractbCaUjNL.balanceOf.call(tokenOwnerNrOWjmq, {from: accounts[1]});
		const successrCVLjiv = await contractbCaUjNL.approve.call(spenderxNIsCaJ, tokenstuKdnw, {from: accounts[0]});

		assert.equal(balanceSrsRuX, 1000000000000000000000000000000)
		assert.equal(successFk7akqT, true)
		assert.equal(successrCVLjiv, true)
	});

	it('test for DingoInu', async () => {
		const contractBMJYhoO = await DingoInu.new({from: accounts[2]});
		const tokenOwnerLLtxj1V = accounts[3]
		const tokenshK7QPP = BigInt("1667")
		const top9U7Tcm = accounts[5]
		const balanceHDvCwEU = await contractBMJYhoO.balanceOf.call(tokenOwnerLLtxj1V, {from: accounts[2]});
		const successiQnUPrz = await contractBMJYhoO.transfer.call(top9U7Tcm, tokenshK7QPP, {from: accounts[2]});
		const nullkL3thsU = await contractBMJYhoO.totalSupply.call({from: accounts[3]});

		assert.equal(balanceHDvCwEU, 0)
		assert.equal(nullkL3thsU, 1000000000000000000000000000000)
		assert.equal(successiQnUPrz, true)
	});

	it('test for DingoInu', async () => {
		const contractBlkpXJx = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensxju4hIl = BigInt("1505")
		const tokob2xLh = accounts[4]
		const nullJuK7lkm = await contractBlkpXJx.totalSupply.call({from: accounts[1]});
		const successRUuuNP1 = await contractBlkpXJx.transfer.call(tokob2xLh, tokensxju4hIl, {from: accounts[2]});
		const nullRySRsbW = await contractBlkpXJx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});
})