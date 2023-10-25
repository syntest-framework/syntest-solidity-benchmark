const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractUX0g4uu = await DingoInu.new({from: accounts[4]});
		const tokensn4wfZhM = BigInt("1280")
		const toa2dgf0s = accounts[0]
		const tokenOwnerFzwRIyo = accounts[0]
		const spendery2c7KMK = accounts[3]
		const tokenOwnerIEAZJHk = accounts[0]
		const successRG2rV4q = await contractUX0g4uu.transfer.call(toa2dgf0s, tokensn4wfZhM, {from: accounts[3]});
		const balanceJzbfjdM = await contractUX0g4uu.balanceOf.call(tokenOwnerFzwRIyo, {from: accounts[2]});
		const remainingf810XTS = await contractUX0g4uu.allowance.call(tokenOwnerIEAZJHk, spendery2c7KMK, {from: accounts[5]});

		await expect(contractUX0g4uu.transfer.call(toa2dgf0s, tokensn4wfZhM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractAF5P5qK = await DingoInu.new({from: accounts[5]});
		const tokenspVZ75uu = BigInt("1071")
		const spendervt16lKt = accounts[3]
		const tokensVLJyzzv = BigInt("830")
		const toytrVqr = accounts[4]
		const successo5GKOrU = await contractAF5P5qK.approve.call(spendervt16lKt, tokenspVZ75uu, {from: accounts[4]});
		const successD8hojeG = await contractAF5P5qK.transfer.call(toytrVqr, tokensVLJyzzv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(successo5GKOrU, true)
		await expect(contractAF5P5qK.transfer.call(toytrVqr, tokensVLJyzzv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractZvZAioE = await DingoInu.new({from: accounts[0]});
		const tokensOddUmGK = BigInt("1464")
		const spenderhHAee5w = "0x0000000000000000000000000000000000000001"
		const tokensvADkdip = BigInt("164")
		const spenderMaq3MR4 = accounts[4]
		const spenderL9TMll4 = accounts[1]
		const tokenOwnernEOuLpK = accounts[3]
		const successwjqjdN = await contractZvZAioE.approve.call(spenderhHAee5w, tokensOddUmGK, {from: accounts[3]});
		const successSYqUxDy = await contractZvZAioE.approve.call(spenderMaq3MR4, tokensvADkdip, {from: accounts[4]});
		const remainingPofkTIt = await contractZvZAioE.allowance.call(tokenOwnernEOuLpK, spenderL9TMll4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(remainingPofkTIt, 0)
		assert.equal(successSYqUxDy, true)
		assert.equal(successwjqjdN, true)
	});

	it('test for DingoInu', async () => {
		const contractAwsjOX = await DingoInu.new({from: accounts[3]});
		const tokensYKor49j = BigInt("1279")
		const spenderrTEtjUi = accounts[0]
		const tokenszbqVxD8 = BigInt("1776")
		const tohoXfx4j = "0x0000000000000000000000000000000000000001"
		const fromSP5jxtt = accounts[3]
		const successYpJX57T = await contractAwsjOX.approve.call(spenderrTEtjUi, tokensYKor49j, {from: accounts[2]});
		const successVoxkpb = await contractAwsjOX.transferFrom.call(fromSP5jxtt, tohoXfx4j, tokenszbqVxD8, {from: accounts[3]});

		assert.equal(successYpJX57T, true)
		await expect(contractAwsjOX.transferFrom.call(fromSP5jxtt, tohoXfx4j, tokenszbqVxD8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractOJLecVA = await DingoInu.new({from: accounts[0]});
		const tokensFammJVC = BigInt("1225")
		const spenderEBAO8K = accounts[0]
		const successnFF6L8 = await contractOJLecVA.approve.call(spenderEBAO8K, tokensFammJVC, {from: accounts[0]});
		const nulld0fRk6B = await contractOJLecVA.totalSupply.call({from: accounts[1]});
		const nullCdRytP0 = await contractOJLecVA.totalSupply.call({from: accounts[1]});

		assert.equal(nullCdRytP0, 1000000000000000000000000000000)
		assert.equal(nulld0fRk6B, 1000000000000000000000000000000)
		assert.equal(successnFF6L8, true)
	});

	it('test for DingoInu', async () => {
		const contractZJ1c8gU = await DingoInu.new({from: accounts[1]});
		const spenderSanJuF1 = accounts[0]
		const tokenOwnerMjpFjXt = accounts[1]
		const spenderQ9ItVEK = accounts[3]
		const tokenOwner3nNPNs = "0x0000000000000000000000000000000000000001"
		const spenderwPlCuZv = accounts[5]
		const tokenOwnero14gDuT = accounts[1]
		const tokensQrZDXJ2 = BigInt("1168")
		const spendersRh7Zu = accounts[4]
		const tokenOwnerZMpioR3 = accounts[0]
		const remainingYQI72n = await contractZJ1c8gU.allowance.call(tokenOwnerMjpFjXt, spenderSanJuF1, {from: "0x0000000000000000000000000000000000000001"});
		const remainingMN8tHBq = await contractZJ1c8gU.allowance.call(tokenOwner3nNPNs, spenderQ9ItVEK, {from: accounts[5]});
		const remainingxuiBcdO = await contractZJ1c8gU.allowance.call(tokenOwnero14gDuT, spenderwPlCuZv, {from: "0x0000000000000000000000000000000000000001"});
		const successgFKcApR = await contractZJ1c8gU.approve.call(spendersRh7Zu, tokensQrZDXJ2, {from: accounts[1]});
		const balanceXoVkVEv = await contractZJ1c8gU.balanceOf.call(tokenOwnerZMpioR3, {from: accounts[5]});

		assert.equal(balanceXoVkVEv, 0)
		assert.equal(remainingMN8tHBq, 0)
		assert.equal(remainingYQI72n, 0)
		assert.equal(remainingxuiBcdO, 0)
		assert.equal(successgFKcApR, true)
	});

	it('test for DingoInu', async () => {
		const contractldRlbeX = await DingoInu.new({from: accounts[1]});
		const tokensBf1OJH7 = BigInt("1998")
		const spendermSETv8I = accounts[4]
		const tokensD30AQY = BigInt("1421")
		const toLZ2YbxK = accounts[0]
		const spenderWkAwevu = accounts[0]
		const tokenOwnerKPPqKHt = accounts[4]
		const tokensLp7nops = BigInt("740")
		const toMLzxLL2 = accounts[1]
		const successV4tsena = await contractldRlbeX.approve.call(spendermSETv8I, tokensBf1OJH7, {from: "0x0000000000000000000000000000000000000001"});
		const successcCZWw4E = await contractldRlbeX.transfer.call(toLZ2YbxK, tokensD30AQY, {from: accounts[1]});
		const remainingzGW92Oj = await contractldRlbeX.allowance.call(tokenOwnerKPPqKHt, spenderWkAwevu, {from: accounts[2]});
		const successYhgZnF9 = await contractldRlbeX.transfer.call(toMLzxLL2, tokensLp7nops, {from: accounts[4]});

		assert.equal(remainingzGW92Oj, 0)
		assert.equal(successV4tsena, true)
		assert.equal(successcCZWw4E, true)
		await expect(contractldRlbeX.transfer.call(toMLzxLL2, tokensLp7nops, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractFDW4yHf = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensXs7yL3s = BigInt("475")
		const toDrvJdhS = "0x0000000000000000000000000000000000000001"
		const tokensQpWycYy = BigInt("1277")
		const spendervr2F5Bw = accounts[0]
		const tokenOwnerxHjRj1B = accounts[1]
		const tokensmxd00yX = BigInt("1329")
		const spenderJb8FVQ6 = accounts[3]
		const successK1QDSMF = await contractFDW4yHf.transfer.call(toDrvJdhS, tokensXs7yL3s, {from: accounts[1]});
		const successl3PrTk = await contractFDW4yHf.approve.call(spendervr2F5Bw, tokensQpWycYy, {from: accounts[3]});
		const balanceBKdTGsk = await contractFDW4yHf.balanceOf.call(tokenOwnerxHjRj1B, {from: accounts[3]});
		const successbE6Gg0 = await contractFDW4yHf.approve.call(spenderJb8FVQ6, tokensmxd00yX, {from: accounts[4]});
	});
})