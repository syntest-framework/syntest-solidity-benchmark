const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractUkpIZXY = await DingoInu.new({from: accounts[3]});
		const spenderdaflLAx = accounts[3]
		const tokenOwnerleMRnn = accounts[0]
		const tokensJaXRFA8 = BigInt("75")
		const spenderlmfCjjC = accounts[0]
		const tokensNeFku4 = BigInt("741")
		const spenderQ2diodN = accounts[4]
		const tokensdBNy6S9 = BigInt("310")
		const spenderBnBxZWf = accounts[0]
		const tokenOwnerRz3yPMG = accounts[1]
		const remainingNec03W5 = await contractUkpIZXY.allowance.call(tokenOwnerleMRnn, spenderdaflLAx, {from: accounts[0]});
		const successYIns4qU = await contractUkpIZXY.approve.call(spenderlmfCjjC, tokensJaXRFA8, {from: accounts[3]});
		const successafTKIy8 = await contractUkpIZXY.approve.call(spenderQ2diodN, tokensNeFku4, {from: accounts[5]});
		const successYZQexpD = await contractUkpIZXY.approve.call(spenderBnBxZWf, tokensdBNy6S9, {from: accounts[5]});
		const balanceNfdgMrQ = await contractUkpIZXY.balanceOf.call(tokenOwnerRz3yPMG, {from: accounts[1]});

		assert.equal(balanceNfdgMrQ, 0)
		assert.equal(remainingNec03W5, 0)
		assert.equal(successYIns4qU, true)
		assert.equal(successYZQexpD, true)
		assert.equal(successafTKIy8, true)
	});

	it('test for DingoInu', async () => {
		const contractRrzvuRU = await DingoInu.new({from: accounts[0]});
		const tokensqGgbiz = BigInt("1701")
		const tonERIHVu = "0x0000000000000000000000000000000000000001"
		const spenderMsjEq9h = accounts[0]
		const tokenOwnertNruxr = "0x0000000000000000000000000000000000000001"
		const spenderNHUT66 = accounts[5]
		const tokenOwnerBpay2OE = accounts[3]
		const successZjsaBkL = await contractRrzvuRU.transfer.call(tonERIHVu, tokensqGgbiz, {from: accounts[3]});
		const remainingE8IV5A = await contractRrzvuRU.allowance.call(tokenOwnertNruxr, spenderMsjEq9h, {from: accounts[4]});
		const remainingjoLdEAa = await contractRrzvuRU.allowance.call(tokenOwnerBpay2OE, spenderNHUT66, {from: accounts[0]});

		await expect(contractRrzvuRU.transfer.call(tonERIHVu, tokensqGgbiz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractvZqIWsm = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensTkZ4n5d = BigInt("1707")
		const tofVxaAeZ = accounts[3]
		const fromF75QrtR = "0x0000000000000000000000000000000000000001"
		const tokenOwnerx5gkeRy = accounts[1]
		const spenderV5BCY7Z = accounts[0]
		const tokenOwnerZNHa1Xl = accounts[2]
		const tokenOwnersN7vwQ5 = accounts[3]
		const spenderD8woNc = accounts[4]
		const tokenOwnerOn4RAq3 = accounts[5]
		const successsGBiryz = await contractvZqIWsm.transferFrom.call(fromF75QrtR, tofVxaAeZ, tokensTkZ4n5d, {from: accounts[4]});
		const balanceD9soNRQ = await contractvZqIWsm.balanceOf.call(tokenOwnerx5gkeRy, {from: accounts[2]});
		const remaininggIelXCq = await contractvZqIWsm.allowance.call(tokenOwnerZNHa1Xl, spenderV5BCY7Z, {from: accounts[2]});
		const balanceFdd3rtZ = await contractvZqIWsm.balanceOf.call(tokenOwnersN7vwQ5, {from: accounts[5]});
		const remainingvEmXLNg = await contractvZqIWsm.allowance.call(tokenOwnerOn4RAq3, spenderD8woNc, {from: accounts[3]});
	});

	it('test for DingoInu', async () => {
		const contractu8R9bo = await DingoInu.new({from: accounts[0]});
		const tokens1tAkpg = BigInt("1791")
		const toKQajWBA = accounts[4]
		const froms2WK6HR = accounts[3]
		const tokensB9G68tx = BigInt("865")
		const toH4DGEew = accounts[4]
		const tokenOwnerE5kaaDf = "0x0000000000000000000000000000000000000001"
		const tokensHS2Pnf9 = BigInt("1770")
		const toOLQAn6i = accounts[0]
		const tokensqNtKMF = BigInt("1458")
		const toGXREp3 = accounts[5]
		const successQtW84ow = await contractu8R9bo.transferFrom.call(froms2WK6HR, toKQajWBA, tokens1tAkpg, {from: "0x0000000000000000000000000000000000000001"});
		const successHPE3BZ7 = await contractu8R9bo.transfer.call(toH4DGEew, tokensB9G68tx, {from: accounts[3]});
		const balanceUwxKnO6 = await contractu8R9bo.balanceOf.call(tokenOwnerE5kaaDf, {from: accounts[3]});
		const successdHtUos0 = await contractu8R9bo.transfer.call(toOLQAn6i, tokensHS2Pnf9, {from: accounts[0]});
		const successmhdq2L3 = await contractu8R9bo.transfer.call(toGXREp3, tokensqNtKMF, {from: accounts[1]});

		await expect(contractu8R9bo.transferFrom.call(froms2WK6HR, toKQajWBA, tokens1tAkpg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractokCCwEj = await DingoInu.new({from: accounts[4]});
		const tokensWOJC3Ah = BigInt("685")
		const toIp9ts7X = "0x0000000000000000000000000000000000000001"
		const spender2LlG56 = accounts[2]
		const tokenOwnernysnli9 = accounts[1]
		const spenderAYrmyJE = accounts[4]
		const tokenOwnerJBgRogb = accounts[3]
		const tokensRsWTtDn = BigInt("677")
		const spenderljiepAr = accounts[2]
		const successNbkef1n = await contractokCCwEj.transfer.call(toIp9ts7X, tokensWOJC3Ah, {from: accounts[4]});
		const remainingple0yWF = await contractokCCwEj.allowance.call(tokenOwnernysnli9, spender2LlG56, {from: accounts[3]});
		const remainingWj7pQ83 = await contractokCCwEj.allowance.call(tokenOwnerJBgRogb, spenderAYrmyJE, {from: accounts[3]});
		const successEXBw9yK = await contractokCCwEj.approve.call(spenderljiepAr, tokensRsWTtDn, {from: accounts[1]});

		assert.equal(remainingWj7pQ83, 0)
		assert.equal(remainingple0yWF, 0)
		assert.equal(successEXBw9yK, true)
		assert.equal(successNbkef1n, true)
	});

	it('test for DingoInu', async () => {
		const contractSUAHFiO = await DingoInu.new({from: accounts[0]});
		const tokensOSCtVwT = BigInt("1611")
		const spendery1oJvUM = accounts[2]
		const spendervgAtLkD = accounts[2]
		const tokenOwnerzvFSKta = accounts[1]
		const tokensEx3l0rE = BigInt("1109")
		const spenderxhXfmu = accounts[0]
		const successDM0Mdx = await contractSUAHFiO.approve.call(spendery1oJvUM, tokensOSCtVwT, {from: accounts[4]});
		const remainingiC7W22g = await contractSUAHFiO.allowance.call(tokenOwnerzvFSKta, spendervgAtLkD, {from: accounts[1]});
		const nullMfeJQru = await contractSUAHFiO.totalSupply.call({from: accounts[0]});
		const successv4AjU3l = await contractSUAHFiO.approve.call(spenderxhXfmu, tokensEx3l0rE, {from: accounts[2]});

		assert.equal(nullMfeJQru, 1000000000000000000000000000000)
		assert.equal(remainingiC7W22g, 0)
		assert.equal(successDM0Mdx, true)
		assert.equal(successv4AjU3l, true)
	});
})