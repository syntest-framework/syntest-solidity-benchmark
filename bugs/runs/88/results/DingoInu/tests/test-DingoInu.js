const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractjCMawCe = await DingoInu.new({from: accounts[0]});
		const tokensCdjnaJx = BigInt("1335")
		const spenderdh5JRB7 = accounts[2]
		const spenderU04j4Yy = accounts[2]
		const tokenOwnerML1ZbFb = accounts[1]
		const tokensTlv6KFv = BigInt("1108")
		const totcXKSZ3 = accounts[3]
		const fromMcXOWoT = accounts[0]
		const successKRBKvY = await contractjCMawCe.approve.call(spenderdh5JRB7, tokensCdjnaJx, {from: accounts[5]});
		const remainingqXncPhw = await contractjCMawCe.allowance.call(tokenOwnerML1ZbFb, spenderU04j4Yy, {from: accounts[1]});
		const successsJGjqka = await contractjCMawCe.transferFrom.call(fromMcXOWoT, totcXKSZ3, tokensTlv6KFv, {from: accounts[2]});

		assert.equal(remainingqXncPhw, 0)
		assert.equal(successKRBKvY, true)
		await expect(contractjCMawCe.transferFrom.call(fromMcXOWoT, totcXKSZ3, tokensTlv6KFv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractrfbIvQ7 = await DingoInu.new({from: accounts[1]});
		const tokensKO4GR29 = BigInt("1291")
		const towbbDhSv = accounts[4]
		const tokensTl6jX6M = BigInt("2027")
		const spenderAmMilC = accounts[0]
		const tokenso1pxVkv = BigInt("1969")
		const tolm8FgKi = accounts[1]
		const fromNqvOxiC = accounts[4]
		const tokensNimgVh9 = BigInt("1243")
		const toaZCByBe = accounts[3]
		const successAEjl6HO = await contractrfbIvQ7.transfer.call(towbbDhSv, tokensKO4GR29, {from: accounts[3]});
		const successcriXzaw = await contractrfbIvQ7.approve.call(spenderAmMilC, tokensTl6jX6M, {from: accounts[3]});
		const successKQkpdRk = await contractrfbIvQ7.transferFrom.call(fromNqvOxiC, tolm8FgKi, tokenso1pxVkv, {from: accounts[3]});
		const nullW8xaF1o = await contractrfbIvQ7.totalSupply.call({from: accounts[0]});
		const successz93DdWE = await contractrfbIvQ7.transfer.call(toaZCByBe, tokensNimgVh9, {from: accounts[1]});

		await expect(contractrfbIvQ7.transfer.call(towbbDhSv, tokensKO4GR29, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractRHD2AhY = await DingoInu.new({from: accounts[4]});
		const tokenOwnerFRjU1aJ = accounts[0]
		const tokenOwnerwbNV0gE = accounts[0]
		const spenderFFQKwEK = accounts[0]
		const tokenOwnerUIHkbX9 = accounts[1]
		const tokenshhS3Wq2 = BigInt("405")
		const tokLteGwd = accounts[4]
		const fromEvwbTCc = accounts[1]
		const spenderfuPaLyM = "0x0000000000000000000000000000000000000001"
		const tokenOwnerxYpOn3a = accounts[4]
		const balancermQy9tT = await contractRHD2AhY.balanceOf.call(tokenOwnerFRjU1aJ, {from: accounts[4]});
		const balanceKeN5xc6 = await contractRHD2AhY.balanceOf.call(tokenOwnerwbNV0gE, {from: accounts[1]});
		const remainingRB12Uv6 = await contractRHD2AhY.allowance.call(tokenOwnerUIHkbX9, spenderFFQKwEK, {from: accounts[3]});
		const successQ7FagUN = await contractRHD2AhY.transferFrom.call(fromEvwbTCc, tokLteGwd, tokenshhS3Wq2, {from: accounts[4]});
		const remaininga2XEMe = await contractRHD2AhY.allowance.call(tokenOwnerxYpOn3a, spenderfuPaLyM, {from: accounts[3]});

		assert.equal(balanceKeN5xc6, 0)
		assert.equal(balancermQy9tT, 0)
		assert.equal(remainingRB12Uv6, 0)
		await expect(contractRHD2AhY.transferFrom.call(fromEvwbTCc, tokLteGwd, tokenshhS3Wq2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractzuA2wbH = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensmPVr7BT = BigInt("1469")
		const top3vl0uA = accounts[4]
		const tokensZ82YGnG = BigInt("678")
		const tolmJK4w = accounts[4]
		const tokensG5tXGl = BigInt("1875")
		const spenderrzeuMVx = accounts[0]
		const tokenOwnerzFjW9Vy = accounts[5]
		const successRBgb7qr = await contractzuA2wbH.transfer.call(top3vl0uA, tokensmPVr7BT, {from: accounts[3]});
		const successTHnwyyp = await contractzuA2wbH.transfer.call(tolmJK4w, tokensZ82YGnG, {from: accounts[1]});
		const successgzjjp3g = await contractzuA2wbH.approve.call(spenderrzeuMVx, tokensG5tXGl, {from: accounts[1]});
		const balanceJA90WVY = await contractzuA2wbH.balanceOf.call(tokenOwnerzFjW9Vy, {from: accounts[2]});
	});

	it('test for DingoInu', async () => {
		const contractuQq9Ac = await DingoInu.new({from: accounts[3]});
		const tokenslvy6lIV = BigInt("970")
		const tokeGHm1F = accounts[3]
		const successaKm8Wx2 = await contractuQq9Ac.transfer.call(tokeGHm1F, tokenslvy6lIV, {from: accounts[3]});
		const nulldjEH6EB = await contractuQq9Ac.totalSupply.call({from: accounts[0]});

		assert.equal(nulldjEH6EB, 1000000000000000000000000000000)
		assert.equal(successaKm8Wx2, true)
	});
})