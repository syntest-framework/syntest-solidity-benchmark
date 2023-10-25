const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractKbGkCea = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenss4amjeL = BigInt("789")
		const tos66qHv1 = accounts[0]
		const tokenOwnerCo2VuWE = accounts[4]
		const tokenOwnerqTlvA87 = accounts[0]
		const tokensFhkZq8G = BigInt("1317")
		const toKGHI8hG = accounts[3]
		const tokenOwnerQHltllp = accounts[0]
		const successaxIdqk2 = await contractKbGkCea.transfer.call(tos66qHv1, tokenss4amjeL, {from: accounts[0]});
		const balanceu4kBOEl = await contractKbGkCea.balanceOf.call(tokenOwnerCo2VuWE, {from: accounts[4]});
		const balance6KiF8n = await contractKbGkCea.balanceOf.call(tokenOwnerqTlvA87, {from: accounts[0]});
		const successo1ewzDg = await contractKbGkCea.transfer.call(toKGHI8hG, tokensFhkZq8G, {from: accounts[2]});
		const balanceVXz0lhG = await contractKbGkCea.balanceOf.call(tokenOwnerQHltllp, {from: accounts[2]});
	});

	it('test for DingoInu', async () => {
		const contractWKi21BF = await DingoInu.new({from: accounts[2]});
		const tokenOwnerExwBx1w = accounts[2]
		const spenderoyys2ns = accounts[4]
		const tokenOwnercTQuJow = accounts[1]
		const tokenswJrtuA5 = BigInt("1499")
		const toU9YC0p = accounts[4]
		const balancebTO0jo = await contractWKi21BF.balanceOf.call(tokenOwnerExwBx1w, {from: accounts[2]});
		const remainingOAuJaVg = await contractWKi21BF.allowance.call(tokenOwnercTQuJow, spenderoyys2ns, {from: accounts[4]});
		const successKbPBWk2 = await contractWKi21BF.transfer.call(toU9YC0p, tokenswJrtuA5, {from: accounts[5]});

		assert.equal(balancebTO0jo, 1000000000000000000000000000000)
		assert.equal(remainingOAuJaVg, 0)
		await expect(contractWKi21BF.transfer.call(toU9YC0p, tokenswJrtuA5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract2O5geR = await DingoInu.new({from: accounts[1]});
		const spenderifKysAF = accounts[1]
		const tokenOwnerju1Powz = accounts[4]
		const tokensGUuEVI3 = BigInt("2009")
		const spendervvh5FlL = accounts[1]
		const remainingPAo1y7H = await contract2O5geR.allowance.call(tokenOwnerju1Powz, spenderifKysAF, {from: accounts[5]});
		const successxaaeHbn = await contract2O5geR.approve.call(spendervvh5FlL, tokensGUuEVI3, {from: accounts[3]});
		const nulliRKwWM = await contract2O5geR.totalSupply.call({from: accounts[4]});

		assert.equal(nulliRKwWM, 1000000000000000000000000000000)
		assert.equal(remainingPAo1y7H, 0)
		assert.equal(successxaaeHbn, true)
	});

	it('test for DingoInu', async () => {
		const contractcmqAqzh = await DingoInu.new({from: accounts[1]});
		const tokenOwnerolyF3m = accounts[1]
		const tokensGndSsQ9 = BigInt("906")
		const toueOBScW = accounts[2]
		const fromAxiksnq = accounts[2]
		const tokensc4MDtbA = BigInt("535")
		const spenderAy8gOtI = accounts[1]
		const tokensFxRHain = BigInt("190")
		const toQOBX1a0 = accounts[1]
		const fromjnG7tbP = accounts[2]
		const balanceqBGZJDx = await contractcmqAqzh.balanceOf.call(tokenOwnerolyF3m, {from: accounts[5]});
		const successXZx10Dg = await contractcmqAqzh.transferFrom.call(fromAxiksnq, toueOBScW, tokensGndSsQ9, {from: accounts[0]});
		const successB9VKmNG = await contractcmqAqzh.approve.call(spenderAy8gOtI, tokensc4MDtbA, {from: accounts[0]});
		const successgWwk2Xg = await contractcmqAqzh.transferFrom.call(fromjnG7tbP, toQOBX1a0, tokensFxRHain, {from: accounts[4]});

		assert.equal(balanceqBGZJDx, 1000000000000000000000000000000)
		await expect(contractcmqAqzh.transferFrom.call(fromAxiksnq, toueOBScW, tokensGndSsQ9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractzNYqZop = await DingoInu.new({from: accounts[2]});
		const tokenOwnerJRQ73ZC = accounts[2]
		const spenderB8wAbvD = accounts[4]
		const tokenOwnerCZLkELq = accounts[1]
		const tokensYQyuwN6 = BigInt("936")
		const toaLNC76u = accounts[2]
		const tokenOwnerN20EkTP = "0x0000000000000000000000000000000000000001"
		const tokensRYd6ADx = BigInt("1512")
		const toPFr2Ecq = accounts[4]
		const balancevCAaxTX = await contractzNYqZop.balanceOf.call(tokenOwnerJRQ73ZC, {from: accounts[2]});
		const remainingiwDEd6H = await contractzNYqZop.allowance.call(tokenOwnerCZLkELq, spenderB8wAbvD, {from: accounts[4]});
		const successJZ9l7PN = await contractzNYqZop.transfer.call(toaLNC76u, tokensYQyuwN6, {from: accounts[2]});
		const balanceKoo4fSP = await contractzNYqZop.balanceOf.call(tokenOwnerN20EkTP, {from: accounts[3]});
		const successbdjgmU5 = await contractzNYqZop.transfer.call(toPFr2Ecq, tokensRYd6ADx, {from: accounts[5]});
		const nullfJxZ78 = await contractzNYqZop.totalSupply.call({from: accounts[1]});

		assert.equal(balanceKoo4fSP, 0)
		assert.equal(balancevCAaxTX, 1000000000000000000000000000000)
		assert.equal(remainingiwDEd6H, 0)
		assert.equal(successJZ9l7PN, true)
		await expect(contractzNYqZop.transfer.call(toPFr2Ecq, tokensRYd6ADx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})