const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractWxYrdjs = await DingoInu.new({from: accounts[3]});
		const tokensFaXItGz = BigInt("215")
		const spenderPg9x2YL = accounts[4]
		const spenderBvjh2qr = accounts[2]
		const tokenOwnerNoHikse = accounts[3]
		const tokensNzElgcC = BigInt("1542")
		const tosi6BQfD = accounts[2]
		const tokenOwner2ve2L0 = "0x0000000000000000000000000000000000000001"
		const successaHKXQ2R = await contractWxYrdjs.approve.call(spenderPg9x2YL, tokensFaXItGz, {from: accounts[3]});
		const remaininghUUTCtg = await contractWxYrdjs.allowance.call(tokenOwnerNoHikse, spenderBvjh2qr, {from: accounts[4]});
		const successhIlvXL = await contractWxYrdjs.transfer.call(tosi6BQfD, tokensNzElgcC, {from: accounts[4]});
		const balanceBpyG8yA = await contractWxYrdjs.balanceOf.call(tokenOwner2ve2L0, {from: accounts[4]});

		assert.equal(remaininghUUTCtg, 0)
		assert.equal(successaHKXQ2R, true)
		await expect(contractWxYrdjs.transfer.call(tosi6BQfD, tokensNzElgcC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractd0h7j7C = await DingoInu.new({from: accounts[3]});
		const tokensvFnZMnC = BigInt("306")
		const todiSGjjc = accounts[4]
		const fromoPNJzIs = accounts[1]
		const tokenspmw47E3 = BigInt("650")
		const toAYVYseJ = accounts[4]
		const fromGkL5zFr = accounts[0]
		const tokensomYY9ke = BigInt("1977")
		const spenderdrT3q9 = accounts[1]
		const tokensiUaNmEV = BigInt("1173")
		const tolFFRO5Z = accounts[0]
		const successdYJyNYJ = await contractd0h7j7C.transferFrom.call(fromoPNJzIs, todiSGjjc, tokensvFnZMnC, {from: accounts[5]});
		const successX7d9IlD = await contractd0h7j7C.transferFrom.call(fromGkL5zFr, toAYVYseJ, tokenspmw47E3, {from: accounts[0]});
		const successe2wCpyJ = await contractd0h7j7C.approve.call(spenderdrT3q9, tokensomYY9ke, {from: accounts[1]});
		const successX2e4BsA = await contractd0h7j7C.transfer.call(tolFFRO5Z, tokensiUaNmEV, {from: accounts[2]});

		await expect(contractd0h7j7C.transferFrom.call(fromoPNJzIs, todiSGjjc, tokensvFnZMnC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractKy1oYsX = await DingoInu.new({from: accounts[0]});
		const spenderKKFPqhk = accounts[3]
		const tokenOwnerxWoMGK = accounts[5]
		const tokenOwnerFlyixy = accounts[2]
		const remaininglOTP0nw = await contractKy1oYsX.allowance.call(tokenOwnerxWoMGK, spenderKKFPqhk, {from: accounts[3]});
		const balancerWyiVO0 = await contractKy1oYsX.balanceOf.call(tokenOwnerFlyixy, {from: accounts[3]});

		assert.equal(balancerWyiVO0, 0)
		assert.equal(remaininglOTP0nw, 0)
	});

	it('test for DingoInu', async () => {
		const contractJuqrTRq = await DingoInu.new({from: accounts[3]});
		const tokensDnCrKcf = BigInt("640")
		const toOqYu7Wv = accounts[3]
		const tokenOwnerKE00h3o = accounts[0]
		const tokensVQlZcS = BigInt("1029")
		const toX1OO8mC = accounts[5]
		const successASnaDG = await contractJuqrTRq.transfer.call(toOqYu7Wv, tokensDnCrKcf, {from: accounts[3]});
		const balanceSTSnbJ = await contractJuqrTRq.balanceOf.call(tokenOwnerKE00h3o, {from: accounts[1]});
		const successvQcHq5j = await contractJuqrTRq.transfer.call(toX1OO8mC, tokensVQlZcS, {from: accounts[4]});

		assert.equal(balanceSTSnbJ, 0)
		assert.equal(successASnaDG, true)
		await expect(contractJuqrTRq.transfer.call(toX1OO8mC, tokensVQlZcS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract9ysywj = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensXrEp6vg = BigInt("30")
		const spenderHQ7oi0j = accounts[4]
		const successmZYEiA3 = await contract9ysywj.approve.call(spenderHQ7oi0j, tokensXrEp6vg, {from: accounts[4]});
		const nullej0uBi9 = await contract9ysywj.totalSupply.call({from: accounts[3]});
		const nullZB1ZRFX = await contract9ysywj.totalSupply.call({from: accounts[2]});
	});

	it('test for DingoInu', async () => {
		const contractzeVkiti = await DingoInu.new({from: accounts[1]});
		const tokenOwneracZHk6 = accounts[0]
		const tokensewRd7Wp = BigInt("578")
		const spenderfC0gmMs = accounts[4]
		const tokensUxKuXX8 = BigInt("35")
		const toCY8mgxr = accounts[4]
		const spenderGO47lhA = accounts[1]
		const tokenOwnerho3RJo9 = accounts[1]
		const balanceAHFd70n = await contractzeVkiti.balanceOf.call(tokenOwneracZHk6, {from: "0x0000000000000000000000000000000000000001"});
		const successOyKozT = await contractzeVkiti.approve.call(spenderfC0gmMs, tokensewRd7Wp, {from: accounts[0]});
		const nullwM5xgKk = await contractzeVkiti.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const successVv2tM67 = await contractzeVkiti.transfer.call(toCY8mgxr, tokensUxKuXX8, {from: accounts[1]});
		const remainingzGxqWyy = await contractzeVkiti.allowance.call(tokenOwnerho3RJo9, spenderGO47lhA, {from: accounts[1]});

		assert.equal(balanceAHFd70n, 0)
		assert.equal(nullwM5xgKk, 1000000000000000000000000000000)
		assert.equal(remainingzGxqWyy, 0)
		assert.equal(successOyKozT, true)
		assert.equal(successVv2tM67, true)
	});
})