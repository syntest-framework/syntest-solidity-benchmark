const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractbEDbhC = await DingoInu.new({from: accounts[0]});
		const spenderXvoYPEc = accounts[3]
		const tokenOwnerUtieeuV = accounts[3]
		const tokensWdFDiEZ = BigInt("1160")
		const towBCEyL = accounts[5]
		const fromQDoBCWs = accounts[5]
		const tokenOwnerxRaRxem = accounts[4]
		const remainingSO4rK8R = await contractbEDbhC.allowance.call(tokenOwnerUtieeuV, spenderXvoYPEc, {from: "0x0000000000000000000000000000000000000001"});
		const successYofbVss = await contractbEDbhC.transferFrom.call(fromQDoBCWs, towBCEyL, tokensWdFDiEZ, {from: accounts[5]});
		const balanceRNjkHe = await contractbEDbhC.balanceOf.call(tokenOwnerxRaRxem, {from: accounts[0]});

		assert.equal(remainingSO4rK8R, 0)
		await expect(contractbEDbhC.transferFrom.call(fromQDoBCWs, towBCEyL, tokensWdFDiEZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractFWHfYWe = await DingoInu.new({from: accounts[3]});
		const tokenOwnerYoVNSPN = "0x0000000000000000000000000000000000000001"
		const tokensWuSbhpE = BigInt("1240")
		const tooibwcG0 = accounts[2]
		const tokenOwnerU2os7ku = accounts[2]
		const tokensSVFtYKf = BigInt("622")
		const tocR9LiBi = accounts[0]
		const fromwGtgJFM = accounts[1]
		const balancefKudcoY = await contractFWHfYWe.balanceOf.call(tokenOwnerYoVNSPN, {from: accounts[3]});
		const successajFZqQj = await contractFWHfYWe.transfer.call(tooibwcG0, tokensWuSbhpE, {from: "0x0000000000000000000000000000000000000001"});
		const balanceItmhieJ = await contractFWHfYWe.balanceOf.call(tokenOwnerU2os7ku, {from: accounts[1]});
		const successuUo4H85 = await contractFWHfYWe.transferFrom.call(fromwGtgJFM, tocR9LiBi, tokensSVFtYKf, {from: accounts[0]});
		const nullUcQWT9f = await contractFWHfYWe.totalSupply.call({from: accounts[3]});

		assert.equal(balancefKudcoY, 0)
		await expect(contractFWHfYWe.transfer.call(tooibwcG0, tokensWuSbhpE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractN31FIG6 = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensKzpXxr3 = BigInt("500")
		const toE9fIcPN = "0x0000000000000000000000000000000000000001"
		const tokenslrJSLYY = BigInt("1734")
		const toyo7rQA6 = accounts[3]
		const spendernW0w013 = accounts[1]
		const tokenOwnerwI6dozM = accounts[4]
		const successleJZOTn = await contractN31FIG6.transfer.call(toE9fIcPN, tokensKzpXxr3, {from: "0x0000000000000000000000000000000000000001"});
		const successg3eybD = await contractN31FIG6.transfer.call(toyo7rQA6, tokenslrJSLYY, {from: accounts[1]});
		const remainingTTWrKtx = await contractN31FIG6.allowance.call(tokenOwnerwI6dozM, spendernW0w013, {from: accounts[4]});
	});

	it('test for DingoInu', async () => {
		const contractkytf4kE = await DingoInu.new({from: accounts[3]});
		const spenderSDmxxTX = accounts[1]
		const tokenOwnerzwJr3al = accounts[1]
		const tokensTcydDsb = BigInt("1486")
		const spenderdrWjFMR = "0x0000000000000000000000000000000000000001"
		const remainingcVwc3Ai = await contractkytf4kE.allowance.call(tokenOwnerzwJr3al, spenderSDmxxTX, {from: accounts[2]});
		const successs364bEl = await contractkytf4kE.approve.call(spenderdrWjFMR, tokensTcydDsb, {from: accounts[2]});

		assert.equal(remainingcVwc3Ai, 0)
		assert.equal(successs364bEl, true)
	});

	it('test for DingoInu', async () => {
		const contractnwkSnNr = await DingoInu.new({from: accounts[2]});
		const tokenOwnerUVkfhPX = accounts[3]
		const tokenshPMjTTC = BigInt("176")
		const toiD5MaZ8 = accounts[0]
		const spender8diCUG = accounts[1]
		const tokenOwneron6R8Q1 = "0x0000000000000000000000000000000000000001"
		const spendera059Fir = accounts[1]
		const tokenOwneroN3Exlz = accounts[2]
		const tokensIIjHuRa = BigInt("555")
		const tottd63CI = accounts[1]
		const fromlpGO7Ko = accounts[0]
		const balancePZ8xHYA = await contractnwkSnNr.balanceOf.call(tokenOwnerUVkfhPX, {from: accounts[2]});
		const successWHjQgl = await contractnwkSnNr.transfer.call(toiD5MaZ8, tokenshPMjTTC, {from: accounts[2]});
		const remainingWn30goV = await contractnwkSnNr.allowance.call(tokenOwneron6R8Q1, spender8diCUG, {from: accounts[2]});
		const remainingvJucuV = await contractnwkSnNr.allowance.call(tokenOwneroN3Exlz, spendera059Fir, {from: accounts[2]});
		const successo6xriRY = await contractnwkSnNr.transferFrom.call(fromlpGO7Ko, tottd63CI, tokensIIjHuRa, {from: accounts[1]});

		assert.equal(balancePZ8xHYA, 0)
		assert.equal(remainingWn30goV, 0)
		assert.equal(remainingvJucuV, 0)
		assert.equal(successWHjQgl, true)
		await expect(contractnwkSnNr.transferFrom.call(fromlpGO7Ko, tottd63CI, tokensIIjHuRa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractmtQ1rSS = await DingoInu.new({from: accounts[0]});
		const tokenOwnerJftApP7 = accounts[2]
		const tokenOwnerzpZJZjE = accounts[3]
		const nullc0NyVlH = await contractmtQ1rSS.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const balancePHbXkNf = await contractmtQ1rSS.balanceOf.call(tokenOwnerJftApP7, {from: accounts[3]});
		const nullyYYWTAv = await contractmtQ1rSS.totalSupply.call({from: accounts[3]});
		const balancevcV662g = await contractmtQ1rSS.balanceOf.call(tokenOwnerzpZJZjE, {from: "0x0000000000000000000000000000000000000001"});
		const nullkgpfn3E = await contractmtQ1rSS.totalSupply.call({from: accounts[5]});

		assert.equal(balancePHbXkNf, 0)
		assert.equal(balancevcV662g, 0)
		assert.equal(nullc0NyVlH, 1000000000000000000000000000000)
		assert.equal(nullkgpfn3E, 1000000000000000000000000000000)
		assert.equal(nullyYYWTAv, 1000000000000000000000000000000)
	});
})