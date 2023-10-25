const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractPExQAzr = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderOIkEFh5 = accounts[2]
		const tokenOwnerwvXGUiE = accounts[5]
		const tokenOwnerd0AxcFJ = accounts[1]
		const tokenOwnera3EDWHC = accounts[1]
		const remainingU1KFRar = await contractPExQAzr.allowance.call(tokenOwnerwvXGUiE, spenderOIkEFh5, {from: accounts[1]});
		const balancerkp9u9x = await contractPExQAzr.balanceOf.call(tokenOwnerd0AxcFJ, {from: accounts[4]});
		const balancerXwvXoT = await contractPExQAzr.balanceOf.call(tokenOwnera3EDWHC, {from: accounts[2]});
	});

	it('test for DingoInu', async () => {
		const contractadV1I1q = await DingoInu.new({from: accounts[3]});
		const tokensWF3Idz4 = BigInt("1533")
		const tozEa96KE = accounts[0]
		const fromiFeh8Ol = accounts[4]
		const tokensK5vTHPE = BigInt("126")
		const toaTHvNrH = "0x0000000000000000000000000000000000000001"
		const tokenssTBTle = BigInt("179")
		const spenderecptdBJ = accounts[3]
		const successJaikCcf = await contractadV1I1q.transferFrom.call(fromiFeh8Ol, tozEa96KE, tokensWF3Idz4, {from: "0x0000000000000000000000000000000000000001"});
		const success7ih1C0 = await contractadV1I1q.transfer.call(toaTHvNrH, tokensK5vTHPE, {from: accounts[1]});
		const successcTIrgVp = await contractadV1I1q.approve.call(spenderecptdBJ, tokenssTBTle, {from: accounts[3]});

		await expect(contractadV1I1q.transferFrom.call(fromiFeh8Ol, tozEa96KE, tokensWF3Idz4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractvKthPlS = await DingoInu.new({from: accounts[0]});
		const tokenszAfiv1a = BigInt("1182")
		const spenderDxTbhFl = accounts[3]
		const tokensdkWFfDf = BigInt("454")
		const toCN6EgtQ = accounts[1]
		const tokensqSDmmmG = BigInt("1223")
		const toz7pY7jp = accounts[5]
		const fromaJ4szI6 = accounts[4]
		const successhylJ52 = await contractvKthPlS.approve.call(spenderDxTbhFl, tokenszAfiv1a, {from: accounts[0]});
		const nullC8PFzsy = await contractvKthPlS.totalSupply.call({from: accounts[2]});
		const successNh3jB1L = await contractvKthPlS.transfer.call(toCN6EgtQ, tokensdkWFfDf, {from: accounts[0]});
		const successCZljOFO = await contractvKthPlS.transferFrom.call(fromaJ4szI6, toz7pY7jp, tokensqSDmmmG, {from: accounts[3]});

		assert.equal(nullC8PFzsy, 1000000000000000000000000000000)
		assert.equal(successNh3jB1L, true)
		assert.equal(successhylJ52, true)
		await expect(contractvKthPlS.transferFrom.call(fromaJ4szI6, toz7pY7jp, tokensqSDmmmG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractgwydKX = await DingoInu.new({from: accounts[0]});
		const spenderiQdZZez = accounts[3]
		const tokenOwnerHOUv92L = accounts[4]
		const tokensBL6Yce = BigInt("916")
		const toPWIkcn = accounts[1]
		const tokenOwnerazXKnpZ = accounts[3]
		const tokens0EVESV = BigInt("488")
		const toe3eWFRp = accounts[3]
		const tokenOwneryD9IPk = accounts[3]
		const spenderJt8oxqf = accounts[2]
		const tokenOwnerhfZrDtM = "0x0000000000000000000000000000000000000001"
		const remainingEbkuC4 = await contractgwydKX.allowance.call(tokenOwnerHOUv92L, spenderiQdZZez, {from: accounts[1]});
		const successyyTXYh0 = await contractgwydKX.transfer.call(toPWIkcn, tokensBL6Yce, {from: accounts[2]});
		const balanceSRvqAnO = await contractgwydKX.balanceOf.call(tokenOwnerazXKnpZ, {from: accounts[3]});
		const successRqfisq5 = await contractgwydKX.transfer.call(toe3eWFRp, tokens0EVESV, {from: accounts[3]});
		const balanceIUOX9Ob = await contractgwydKX.balanceOf.call(tokenOwneryD9IPk, {from: "0x0000000000000000000000000000000000000001"});
		const remainingwneq60K = await contractgwydKX.allowance.call(tokenOwnerhfZrDtM, spenderJt8oxqf, {from: accounts[1]});

		assert.equal(remainingEbkuC4, 0)
		await expect(contractgwydKX.transfer.call(toPWIkcn, tokensBL6Yce, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractI7q3mNe = await DingoInu.new({from: accounts[1]});
		const tokenOwnerwNejkD8 = accounts[0]
		const spenderEHYGDRi = "0x0000000000000000000000000000000000000001"
		const tokenOwners3mYQr = accounts[0]
		const balanceOq2wzvw = await contractI7q3mNe.balanceOf.call(tokenOwnerwNejkD8, {from: accounts[0]});
		const remainingOGLNeA2 = await contractI7q3mNe.allowance.call(tokenOwners3mYQr, spenderEHYGDRi, {from: accounts[2]});

		assert.equal(balanceOq2wzvw, 0)
		assert.equal(remainingOGLNeA2, 0)
	});
})