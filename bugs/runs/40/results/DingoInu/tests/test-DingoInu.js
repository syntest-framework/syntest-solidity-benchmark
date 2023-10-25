const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractc2j62lO = await DingoInu.new({from: accounts[0]});
		const tokensyXB6OpP = BigInt("1494")
		const touP14LrT = "0x0000000000000000000000000000000000000001"
		const spenderhzLVV41 = accounts[1]
		const tokenOwneraDyY0g5 = accounts[1]
		const spenderW6cEoby = accounts[2]
		const tokenOwner4FIAgw = accounts[5]
		const tokenOwnerOgFLR1B = accounts[1]
		const successsj4hUFs = await contractc2j62lO.transfer.call(touP14LrT, tokensyXB6OpP, {from: accounts[1]});
		const remaining3IdB74 = await contractc2j62lO.allowance.call(tokenOwneraDyY0g5, spenderhzLVV41, {from: "0x0000000000000000000000000000000000000001"});
		const remainingVxJRus2 = await contractc2j62lO.allowance.call(tokenOwner4FIAgw, spenderW6cEoby, {from: accounts[3]});
		const balanceaGXhZAH = await contractc2j62lO.balanceOf.call(tokenOwnerOgFLR1B, {from: accounts[3]});

		await expect(contractc2j62lO.transfer.call(touP14LrT, tokensyXB6OpP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract6aKCBM = await DingoInu.new({from: accounts[2]});
		const spenderdBWkXaw = accounts[3]
		const tokenOwnerOGyXvwH = accounts[4]
		const spenderweCiQ1 = accounts[1]
		const tokenOwnerGxbWASr = accounts[2]
		const tokenOwnerXUTsfP8 = accounts[1]
		const remainingcTi3jB = await contract6aKCBM.allowance.call(tokenOwnerOGyXvwH, spenderdBWkXaw, {from: accounts[3]});
		const remainingflIuPKv = await contract6aKCBM.allowance.call(tokenOwnerGxbWASr, spenderweCiQ1, {from: accounts[5]});
		const balanceSxikTyQ = await contract6aKCBM.balanceOf.call(tokenOwnerXUTsfP8, {from: accounts[2]});

		assert.equal(balanceSxikTyQ, 0)
		assert.equal(remainingcTi3jB, 0)
		assert.equal(remainingflIuPKv, 0)
	});

	it('test for DingoInu', async () => {
		const contractMNHxIGb = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensmZMy0E3 = BigInt("1681")
		const spenderxNFOJ2 = accounts[5]
		const tokensamOzA8v = BigInt("1093")
		const toEJC3ugG = accounts[1]
		const froman7Z4o7 = accounts[2]
		const tokenshMsGLc = BigInt("229")
		const toO78tds0 = "0x0000000000000000000000000000000000000001"
		const tokensYIJuaZ = BigInt("515")
		const spenderpVuDqif = "0x0000000000000000000000000000000000000001"
		const successkQeFdNF = await contractMNHxIGb.approve.call(spenderxNFOJ2, tokensmZMy0E3, {from: accounts[4]});
		const successbiQGvQ1 = await contractMNHxIGb.transferFrom.call(froman7Z4o7, toEJC3ugG, tokensamOzA8v, {from: accounts[1]});
		const successpQRqqzv = await contractMNHxIGb.transfer.call(toO78tds0, tokenshMsGLc, {from: accounts[3]});
		const successQweyJpn = await contractMNHxIGb.approve.call(spenderpVuDqif, tokensYIJuaZ, {from: accounts[0]});
	});

	it('test for DingoInu', async () => {
		const contractqwjdHMD = await DingoInu.new({from: accounts[3]});
		const tokenOwnerEEd5H8c = accounts[2]
		const tokensCRzZoVO = BigInt("140")
		const toeNraEju = "0x0000000000000000000000000000000000000001"
		const balanceeE5LZbm = await contractqwjdHMD.balanceOf.call(tokenOwnerEEd5H8c, {from: accounts[0]});
		const nullXmnrT6Y = await contractqwjdHMD.totalSupply.call({from: accounts[3]});
		const successeYIRz3U = await contractqwjdHMD.transfer.call(toeNraEju, tokensCRzZoVO, {from: accounts[3]});

		assert.equal(balanceeE5LZbm, 0)
		assert.equal(nullXmnrT6Y, 1000000000000000000000000000000)
		assert.equal(successeYIRz3U, true)
	});

	it('test for DingoInu', async () => {
		const contractI4jkDUC = await DingoInu.new({from: accounts[4]});
		const spenderV8tgBR5 = accounts[0]
		const tokenOwnerIzgw6hL = accounts[3]
		const spenderPj0CGED = accounts[0]
		const tokenOwneriHcXph0 = "0x0000000000000000000000000000000000000001"
		const tokenOwnerPL8U63h = accounts[1]
		const tokensiIK9fcS = BigInt("1928")
		const spenderG2z816Z = "0x0000000000000000000000000000000000000001"
		const remainingPPySCGS = await contractI4jkDUC.allowance.call(tokenOwnerIzgw6hL, spenderV8tgBR5, {from: "0x0000000000000000000000000000000000000001"});
		const remainingdtJfSwn = await contractI4jkDUC.allowance.call(tokenOwneriHcXph0, spenderPj0CGED, {from: accounts[3]});
		const balanceHr73IAV = await contractI4jkDUC.balanceOf.call(tokenOwnerPL8U63h, {from: accounts[0]});
		const successsB4qKpA = await contractI4jkDUC.approve.call(spenderG2z816Z, tokensiIK9fcS, {from: accounts[5]});

		assert.equal(balanceHr73IAV, 0)
		assert.equal(remainingPPySCGS, 0)
		assert.equal(remainingdtJfSwn, 0)
		assert.equal(successsB4qKpA, true)
	});

	it('test for DingoInu', async () => {
		const contractzgw9yVS = await DingoInu.new({from: accounts[1]});
		const tokenOwnerP6wF3g = accounts[0]
		const tokensWPuCYuk = BigInt("848")
		const toNiQMy6j = accounts[4]
		const fromDyHWKWb = accounts[3]
		const spenderPlPslsz = accounts[4]
		const tokenOwnerDfsjUDJ = accounts[3]
		const tokenOwnersyEhB3n = accounts[4]
		const tokenscPWXHia = BigInt("1053")
		const spenderwcAYAUq = accounts[5]
		const balanceOxrIQEz = await contractzgw9yVS.balanceOf.call(tokenOwnerP6wF3g, {from: accounts[4]});
		const successgNBYJFJ = await contractzgw9yVS.transferFrom.call(fromDyHWKWb, toNiQMy6j, tokensWPuCYuk, {from: accounts[1]});
		const remainingfpdrh7A = await contractzgw9yVS.allowance.call(tokenOwnerDfsjUDJ, spenderPlPslsz, {from: accounts[5]});
		const balanceS9zCgup = await contractzgw9yVS.balanceOf.call(tokenOwnersyEhB3n, {from: accounts[4]});
		const successDrZO8Aj = await contractzgw9yVS.approve.call(spenderwcAYAUq, tokenscPWXHia, {from: accounts[0]});

		assert.equal(balanceOxrIQEz, 0)
		await expect(contractzgw9yVS.transferFrom.call(fromDyHWKWb, toNiQMy6j, tokensWPuCYuk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})