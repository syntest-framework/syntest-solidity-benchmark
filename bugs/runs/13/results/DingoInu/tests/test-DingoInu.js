const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractsaz1lsK = await DingoInu.new({from: accounts[1]});
		const spenderAwHBIUI = accounts[2]
		const tokenOwnerxyAoUal = accounts[4]
		const spenderiPxeTBb = accounts[4]
		const tokenOwnersJqucXl = accounts[5]
		const tokenOwnerDbNrjOM = accounts[1]
		const remainingacHKac3 = await contractsaz1lsK.allowance.call(tokenOwnerxyAoUal, spenderAwHBIUI, {from: accounts[0]});
		const remainingQJjqcWK = await contractsaz1lsK.allowance.call(tokenOwnersJqucXl, spenderiPxeTBb, {from: accounts[2]});
		const nullJd24j5F = await contractsaz1lsK.totalSupply.call({from: accounts[4]});
		const balancePqndKux = await contractsaz1lsK.balanceOf.call(tokenOwnerDbNrjOM, {from: accounts[1]});

		assert.equal(balancePqndKux, 1000000000000000000000000000000)
		assert.equal(nullJd24j5F, 1000000000000000000000000000000)
		assert.equal(remainingQJjqcWK, 0)
		assert.equal(remainingacHKac3, 0)
	});

	it('test for DingoInu', async () => {
		const contract3dslu1 = await DingoInu.new({from: accounts[4]});
		const tokenOwneruJt1pxL = "0x0000000000000000000000000000000000000001"
		const tokenOwnerVtTPKsw = accounts[4]
		const spenderXB1htEo = accounts[5]
		const tokenOwnerFkcF0nT = accounts[4]
		const tokensdADSEt9 = BigInt("495")
		const toqoxCBEp = "0x0000000000000000000000000000000000000001"
		const tokenOwnertacmeEf = accounts[1]
		const balancew88DKXy = await contract3dslu1.balanceOf.call(tokenOwneruJt1pxL, {from: accounts[3]});
		const balancey9F4wOz = await contract3dslu1.balanceOf.call(tokenOwnerVtTPKsw, {from: accounts[3]});
		const remaininglLimEz = await contract3dslu1.allowance.call(tokenOwnerFkcF0nT, spenderXB1htEo, {from: accounts[1]});
		const successmSDoqbq = await contract3dslu1.transfer.call(toqoxCBEp, tokensdADSEt9, {from: accounts[3]});
		const balanceBlumglU = await contract3dslu1.balanceOf.call(tokenOwnertacmeEf, {from: accounts[4]});

		assert.equal(balancew88DKXy, 0)
		assert.equal(balancey9F4wOz, 1000000000000000000000000000000)
		assert.equal(remaininglLimEz, 0)
		await expect(contract3dslu1.transfer.call(toqoxCBEp, tokensdADSEt9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractM7vlhM = await DingoInu.new({from: accounts[3]});
		const tokenskcE6Oho = BigInt("1232")
		const toYX0ZNdP = accounts[3]
		const fromgw9M4XG = accounts[5]
		const tokenOwnerZH0GESd = accounts[0]
		const tokensCChzyTY = BigInt("1982")
		const spenderaoBG2nk = accounts[4]
		const successyhov7As = await contractM7vlhM.transferFrom.call(fromgw9M4XG, toYX0ZNdP, tokenskcE6Oho, {from: accounts[3]});
		const balancelk7uvPW = await contractM7vlhM.balanceOf.call(tokenOwnerZH0GESd, {from: accounts[3]});
		const successjG6p3h = await contractM7vlhM.approve.call(spenderaoBG2nk, tokensCChzyTY, {from: accounts[3]});
		const nullDha3os4 = await contractM7vlhM.totalSupply.call({from: accounts[3]});

		await expect(contractM7vlhM.transferFrom.call(fromgw9M4XG, toYX0ZNdP, tokenskcE6Oho, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractSVB0dRk = await DingoInu.new({from: accounts[4]});
		const spenderEF1dqiG = accounts[3]
		const tokenOwnersxTU3cp = "0x0000000000000000000000000000000000000001"
		const tokenslM7MjKI = BigInt("1452")
		const spenderO1I3Li = accounts[3]
		const tokenOwnerRbJm47q = "0x0000000000000000000000000000000000000001"
		const tokenOwnerK0xFUgg = accounts[1]
		const tokenOwnerNx8ev58 = accounts[4]
		const remaininguTQFfR = await contractSVB0dRk.allowance.call(tokenOwnersxTU3cp, spenderEF1dqiG, {from: accounts[1]});
		const successwRWo2JH = await contractSVB0dRk.approve.call(spenderO1I3Li, tokenslM7MjKI, {from: accounts[3]});
		const balanceIkAoVM9 = await contractSVB0dRk.balanceOf.call(tokenOwnerRbJm47q, {from: accounts[3]});
		const balancel8ehJT = await contractSVB0dRk.balanceOf.call(tokenOwnerK0xFUgg, {from: accounts[4]});
		const balancecAiDnb0 = await contractSVB0dRk.balanceOf.call(tokenOwnerNx8ev58, {from: accounts[1]});

		assert.equal(balanceIkAoVM9, 0)
		assert.equal(balancecAiDnb0, 1000000000000000000000000000000)
		assert.equal(balancel8ehJT, 0)
		assert.equal(remaininguTQFfR, 0)
		assert.equal(successwRWo2JH, true)
	});

	it('test for DingoInu', async () => {
		const contractNKHRUXB = await DingoInu.new({from: accounts[0]});
		const spenderZEDXeEV = accounts[4]
		const tokenOwneraMcFftn = "0x0000000000000000000000000000000000000001"
		const tokensAJYj7uR = BigInt("976")
		const spender8iyhUm = accounts[5]
		const tokenswCC9wc = BigInt("628")
		const tomhn4gTl = accounts[3]
		const remainingayNa9uV = await contractNKHRUXB.allowance.call(tokenOwneraMcFftn, spenderZEDXeEV, {from: accounts[4]});
		const successCT1QXxD = await contractNKHRUXB.approve.call(spender8iyhUm, tokensAJYj7uR, {from: accounts[3]});
		const successfNeJFIS = await contractNKHRUXB.transfer.call(tomhn4gTl, tokenswCC9wc, {from: accounts[0]});
		const nullTHF5mOT = await contractNKHRUXB.totalSupply.call({from: accounts[5]});

		assert.equal(nullTHF5mOT, 1000000000000000000000000000000)
		assert.equal(remainingayNa9uV, 0)
		assert.equal(successCT1QXxD, true)
		assert.equal(successfNeJFIS, true)
	});

	it('test for DingoInu', async () => {
		const contractiVZEAg = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensS4Zz2Ie = BigInt("297")
		const spenderw2st84R = accounts[4]
		const tokensAhlCz7W = BigInt("1753")
		const spenderZdPDqw = accounts[3]
		const spenderwsWcjl = accounts[1]
		const tokenOwnerhfunhlP = accounts[2]
		const successsb13pK = await contractiVZEAg.approve.call(spenderw2st84R, tokensS4Zz2Ie, {from: accounts[1]});
		const successZQYJBXO = await contractiVZEAg.approve.call(spenderZdPDqw, tokensAhlCz7W, {from: accounts[2]});
		const remainingukSC7VB = await contractiVZEAg.allowance.call(tokenOwnerhfunhlP, spenderwsWcjl, {from: "0x0000000000000000000000000000000000000001"});
	});
})