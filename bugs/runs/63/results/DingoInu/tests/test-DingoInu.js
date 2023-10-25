const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractI7RctMn = await DingoInu.new({from: accounts[1]});
		const tokensAP8jWB = BigInt("1455")
		const toh0zw5K9 = accounts[5]
		const tokensWW6Y6Dn = BigInt("1553")
		const toxNuBDYS = accounts[3]
		const fromsqJVDp3 = accounts[0]
		const tokenOwnerc19gE24 = accounts[2]
		const spenderwLnAd0W = accounts[1]
		const tokenOwnernkygq7F = accounts[1]
		const spenderHZVa9Js = accounts[0]
		const tokenOwnerqjRnY36 = accounts[1]
		const successS12SSa5 = await contractI7RctMn.transfer.call(toh0zw5K9, tokensAP8jWB, {from: accounts[1]});
		const successeoxzQ3q = await contractI7RctMn.transferFrom.call(fromsqJVDp3, toxNuBDYS, tokensWW6Y6Dn, {from: accounts[4]});
		const balanceOHhYSqH = await contractI7RctMn.balanceOf.call(tokenOwnerc19gE24, {from: accounts[0]});
		const remainingcXuOzNU = await contractI7RctMn.allowance.call(tokenOwnernkygq7F, spenderwLnAd0W, {from: accounts[2]});
		const remainingNbO22R = await contractI7RctMn.allowance.call(tokenOwnerqjRnY36, spenderHZVa9Js, {from: accounts[2]});

		assert.equal(successS12SSa5, true)
		await expect(contractI7RctMn.transferFrom.call(fromsqJVDp3, toxNuBDYS, tokensWW6Y6Dn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract4w6XI0 = await DingoInu.new({from: accounts[4]});
		const spenderK1Sf2oO = accounts[5]
		const tokenOwnerEeRErOB = accounts[4]
		const spenderTsmqIkN = accounts[4]
		const tokenOwnersUpdx0 = accounts[5]
		const tokensNHDWMyC = BigInt("1400")
		const toEYIbopI = accounts[1]
		const spenderKNEWweD = accounts[0]
		const tokenOwnerCTomyQS = accounts[0]
		const remainingVxV6zoP = await contract4w6XI0.allowance.call(tokenOwnerEeRErOB, spenderK1Sf2oO, {from: accounts[3]});
		const remainingkfFLubU = await contract4w6XI0.allowance.call(tokenOwnersUpdx0, spenderTsmqIkN, {from: accounts[4]});
		const successobP2Q1G = await contract4w6XI0.transfer.call(toEYIbopI, tokensNHDWMyC, {from: accounts[2]});
		const remainingZ50I85z = await contract4w6XI0.allowance.call(tokenOwnerCTomyQS, spenderKNEWweD, {from: accounts[0]});

		assert.equal(remainingVxV6zoP, 0)
		assert.equal(remainingkfFLubU, 0)
		await expect(contract4w6XI0.transfer.call(toEYIbopI, tokensNHDWMyC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractAFbX2Lw = await DingoInu.new({from: accounts[2]});
		const tokenOwnervnLUiQI = accounts[2]
		const tokensXdnKllM = BigInt("894")
		const totzeZ8jI = accounts[4]
		const tokensiYTRb5A = BigInt("1728")
		const to44qKLU = accounts[1]
		const tokenswcY4ftk = BigInt("803")
		const toFcIC6JK = accounts[4]
		const fromspoWe6v = accounts[4]
		const tokenOwnerBxTRv7 = accounts[0]
		const balancexinUHxI = await contractAFbX2Lw.balanceOf.call(tokenOwnervnLUiQI, {from: accounts[2]});
		const successQksd0cN = await contractAFbX2Lw.transfer.call(totzeZ8jI, tokensXdnKllM, {from: accounts[2]});
		const successmPFU2B1 = await contractAFbX2Lw.transfer.call(to44qKLU, tokensiYTRb5A, {from: accounts[4]});
		const successzq69ZV2 = await contractAFbX2Lw.transferFrom.call(fromspoWe6v, toFcIC6JK, tokenswcY4ftk, {from: "0x0000000000000000000000000000000000000001"});
		const nullRQVy3tK = await contractAFbX2Lw.totalSupply.call({from: accounts[0]});
		const balanceW0vqY1m = await contractAFbX2Lw.balanceOf.call(tokenOwnerBxTRv7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balancexinUHxI, 1000000000000000000000000000000)
		assert.equal(successQksd0cN, true)
		await expect(contractAFbX2Lw.transfer.call(to44qKLU, tokensiYTRb5A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractjLHvkoX = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenshT4t1t5 = BigInt("1241")
		const toxMwiqlc = accounts[5]
		const fromPAyQzJz = accounts[0]
		const tokenstALsv7v = BigInt("749")
		const tonWvGDot = accounts[2]
		const tokensgn3gFT8 = BigInt("960")
		const toVwWUEut = accounts[3]
		const successCZzc5xg = await contractjLHvkoX.transferFrom.call(fromPAyQzJz, toxMwiqlc, tokenshT4t1t5, {from: accounts[4]});
		const successU1aavXu = await contractjLHvkoX.transfer.call(tonWvGDot, tokenstALsv7v, {from: accounts[2]});
		const success58k26D = await contractjLHvkoX.transfer.call(toVwWUEut, tokensgn3gFT8, {from: accounts[1]});
	});

	it('test for DingoInu', async () => {
		const contractJWpvBkJ = await DingoInu.new({from: accounts[2]});
		const tokensluKpEAx = BigInt("1861")
		const spendergZ74QRU = accounts[5]
		const tokenskX9puI = BigInt("1753")
		const toEohALSg = accounts[3]
		const fromT9VGwL2 = accounts[2]
		const spendercTzqfw9 = accounts[0]
		const tokenOwneraJrtDKg = accounts[1]
		const tokenOwnerj1JuYUS = accounts[4]
		const successPZCrWY4 = await contractJWpvBkJ.approve.call(spendergZ74QRU, tokensluKpEAx, {from: accounts[1]});
		const successlkrYX5s = await contractJWpvBkJ.transferFrom.call(fromT9VGwL2, toEohALSg, tokenskX9puI, {from: accounts[5]});
		const remainingryDn9Bj = await contractJWpvBkJ.allowance.call(tokenOwneraJrtDKg, spendercTzqfw9, {from: accounts[3]});
		const balanceDXVFIwt = await contractJWpvBkJ.balanceOf.call(tokenOwnerj1JuYUS, {from: accounts[0]});

		assert.equal(successPZCrWY4, true)
		await expect(contractJWpvBkJ.transferFrom.call(fromT9VGwL2, toEohALSg, tokenskX9puI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractyesAfqb = await DingoInu.new({from: accounts[2]});
		const spender0MMIkV = accounts[3]
		const tokenOwnerotrkCkQ = accounts[4]
		const tokensRtvmdFp = BigInt("1347")
		const toBrxjOD = accounts[0]
		const tokenOwnerfZ3rBDy = accounts[3]
		const tokenszvsRUiV = BigInt("747")
		const spenderH1TPxSj = accounts[0]
		const nulla4oW5w = await contractyesAfqb.totalSupply.call({from: accounts[4]});
		const remainingnpTZX7e = await contractyesAfqb.allowance.call(tokenOwnerotrkCkQ, spender0MMIkV, {from: accounts[4]});
		const successZSA1Vu5 = await contractyesAfqb.transfer.call(toBrxjOD, tokensRtvmdFp, {from: accounts[3]});
		const balanceEPcGToC = await contractyesAfqb.balanceOf.call(tokenOwnerfZ3rBDy, {from: accounts[0]});
		const success5qWDtx = await contractyesAfqb.approve.call(spenderH1TPxSj, tokenszvsRUiV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulla4oW5w, 1000000000000000000000000000000)
		assert.equal(remainingnpTZX7e, 0)
		await expect(contractyesAfqb.transfer.call(toBrxjOD, tokensRtvmdFp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})