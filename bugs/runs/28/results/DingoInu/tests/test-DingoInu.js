const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contracttnWZotY = await DingoInu.new({from: accounts[2]});
		const tokensi9h7LIj = BigInt("787")
		const toYSgbOf = accounts[0]
		const tokenOwneryg6MjRl = accounts[5]
		const tokensjZyRe5h = BigInt("1022")
		const spendereOIGlDn = accounts[0]
		const tokenspsyQ4LV = BigInt("91")
		const spenderMleoPF4 = accounts[3]
		const tokensWVEMT8j = BigInt("2004")
		const toBeW6BwX = accounts[1]
		const fromZXur7zh = accounts[4]
		const spenderFSAGS3i = accounts[2]
		const tokenOwnereUltyh = accounts[4]
		const successINPd89Y = await contracttnWZotY.transfer.call(toYSgbOf, tokensi9h7LIj, {from: accounts[3]});
		const balanceNpFpGZA = await contracttnWZotY.balanceOf.call(tokenOwneryg6MjRl, {from: "0x0000000000000000000000000000000000000001"});
		const successaEpSRQ9 = await contracttnWZotY.approve.call(spendereOIGlDn, tokensjZyRe5h, {from: accounts[2]});
		const successS3u6a2h = await contracttnWZotY.approve.call(spenderMleoPF4, tokenspsyQ4LV, {from: accounts[3]});
		const successEuJnja = await contracttnWZotY.transferFrom.call(fromZXur7zh, toBeW6BwX, tokensWVEMT8j, {from: accounts[5]});
		const remainingWq6PjW = await contracttnWZotY.allowance.call(tokenOwnereUltyh, spenderFSAGS3i, {from: accounts[4]});

		await expect(contracttnWZotY.transfer.call(toYSgbOf, tokensi9h7LIj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractGzVvkrl = await DingoInu.new({from: accounts[3]});
		const tokensYroJ7xP = BigInt("815")
		const tolK6mBAG = accounts[1]
		const fromd6B5PGa = accounts[1]
		const tokensnBSLZwp = BigInt("840")
		const toUzDIb9E = accounts[2]
		const spenderdI06g9M = accounts[3]
		const tokenOwnerhAGyYP7 = accounts[4]
		const successfreNrPu = await contractGzVvkrl.transferFrom.call(fromd6B5PGa, tolK6mBAG, tokensYroJ7xP, {from: accounts[4]});
		const successvOAMo3C = await contractGzVvkrl.transfer.call(toUzDIb9E, tokensnBSLZwp, {from: accounts[2]});
		const remainingPpBL7xe = await contractGzVvkrl.allowance.call(tokenOwnerhAGyYP7, spenderdI06g9M, {from: accounts[4]});

		await expect(contractGzVvkrl.transferFrom.call(fromd6B5PGa, tolK6mBAG, tokensYroJ7xP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractWikltUS = await DingoInu.new({from: accounts[5]});
		const tokenOwneri41Q983 = accounts[3]
		const tokenst60V3rH = BigInt("581")
		const toCUvAzbP = "0x0000000000000000000000000000000000000001"
		const tokensO4TGde5 = BigInt("1640")
		const spenderBvm7q3b = accounts[1]
		const balanceN4CWHg = await contractWikltUS.balanceOf.call(tokenOwneri41Q983, {from: accounts[3]});
		const successSTuO605 = await contractWikltUS.transfer.call(toCUvAzbP, tokenst60V3rH, {from: accounts[4]});
		const successNSyDAI7 = await contractWikltUS.approve.call(spenderBvm7q3b, tokensO4TGde5, {from: accounts[0]});

		assert.equal(balanceN4CWHg, 0)
		await expect(contractWikltUS.transfer.call(toCUvAzbP, tokenst60V3rH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractFL6XJe = await DingoInu.new({from: accounts[4]});
		const spendervl1sotf = accounts[5]
		const tokenOwnerg6IDwMq = accounts[1]
		const tokensnpTdbI = BigInt("1764")
		const top96cKLg = accounts[3]
		const tokenOwner5nQe8M = accounts[5]
		const spenderUOgWZE4 = "0x0000000000000000000000000000000000000001"
		const tokenOwnerpVCPjyb = accounts[2]
		const tokenszxZa7dI = BigInt("331")
		const spendera4Mr5Mh = accounts[4]
		const nullTA0nRhE = await contractFL6XJe.totalSupply.call({from: accounts[2]});
		const remaininguLrwlKb = await contractFL6XJe.allowance.call(tokenOwnerg6IDwMq, spendervl1sotf, {from: "0x0000000000000000000000000000000000000001"});
		const successGYy4YGv = await contractFL6XJe.transfer.call(top96cKLg, tokensnpTdbI, {from: accounts[1]});
		const balancelFH1Ati = await contractFL6XJe.balanceOf.call(tokenOwner5nQe8M, {from: accounts[1]});
		const remainingcBbgr2k = await contractFL6XJe.allowance.call(tokenOwnerpVCPjyb, spenderUOgWZE4, {from: accounts[4]});
		const successzTe4a3j = await contractFL6XJe.approve.call(spendera4Mr5Mh, tokenszxZa7dI, {from: accounts[3]});

		assert.equal(nullTA0nRhE, 1000000000000000000000000000000)
		assert.equal(remaininguLrwlKb, 0)
		await expect(contractFL6XJe.transfer.call(top96cKLg, tokensnpTdbI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract12bFSo = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensGtCqbM = BigInt("375")
		const tovJNGAlh = accounts[2]
		const tokensCCbgSWt = BigInt("253")
		const spenderoWS8fQO = accounts[3]
		const tokensUoXSp6R = BigInt("1837")
		const toVVyl3ln = accounts[5]
		const tokenOwnerfGqEo4X = accounts[2]
		const spenderzaR9Y4 = accounts[3]
		const tokenOwnertZRvdu1 = accounts[4]
		const tokenOwnerGpCeUp = accounts[1]
		const successSdJzVAe = await contract12bFSo.transfer.call(tovJNGAlh, tokensGtCqbM, {from: accounts[1]});
		const successjbhfNwd = await contract12bFSo.approve.call(spenderoWS8fQO, tokensCCbgSWt, {from: accounts[3]});
		const successenZJUS = await contract12bFSo.transfer.call(toVVyl3ln, tokensUoXSp6R, {from: accounts[4]});
		const balanceNXcJqBo = await contract12bFSo.balanceOf.call(tokenOwnerfGqEo4X, {from: accounts[4]});
		const remainingoNreG5P = await contract12bFSo.allowance.call(tokenOwnertZRvdu1, spenderzaR9Y4, {from: accounts[3]});
		const balanceXTOKaTX = await contract12bFSo.balanceOf.call(tokenOwnerGpCeUp, {from: accounts[4]});
	});

	it('test for DingoInu', async () => {
		const contractURDlV23 = await DingoInu.new({from: accounts[3]});
		const tokensbHuJ4rK = BigInt("1634")
		const spenderDWmzZgh = accounts[0]
		const tokensLzBHMVW = BigInt("815")
		const toV9QnRmq = accounts[1]
		const fromx7lg0Qk = accounts[1]
		const tokensBhxB9FY = BigInt("1625")
		const toVYUj7mV = accounts[2]
		const tokensdq0hUWn = BigInt("59")
		const totTb8yP1 = accounts[3]
		const spendertU0XTr = accounts[3]
		const tokenOwnerI3BSRmM = accounts[4]
		const successrXtqqqZ = await contractURDlV23.approve.call(spenderDWmzZgh, tokensbHuJ4rK, {from: accounts[3]});
		const successucXXPj = await contractURDlV23.transferFrom.call(fromx7lg0Qk, toV9QnRmq, tokensLzBHMVW, {from: accounts[4]});
		const successSJhGyP5 = await contractURDlV23.transfer.call(toVYUj7mV, tokensBhxB9FY, {from: accounts[2]});
		const successnt949OG = await contractURDlV23.transfer.call(totTb8yP1, tokensdq0hUWn, {from: accounts[4]});
		const remainingenmkhSn = await contractURDlV23.allowance.call(tokenOwnerI3BSRmM, spendertU0XTr, {from: accounts[4]});

		assert.equal(successrXtqqqZ, true)
		await expect(contractURDlV23.transferFrom.call(fromx7lg0Qk, toV9QnRmq, tokensLzBHMVW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract9nTptI = await DingoInu.new({from: accounts[5]});
		const tokenOwnerTnAdtdX = accounts[3]
		const tokensD1ekD5W = BigInt("1629")
		const to3uRXgz = "0x0000000000000000000000000000000000000001"
		const tokensB6fvJ2l = BigInt("581")
		const toAi6zpt8 = "0x0000000000000000000000000000000000000001"
		const tokensnCysuqm = BigInt("1640")
		const spenderIR38fq3 = accounts[1]
		const balancezZpdRJl = await contract9nTptI.balanceOf.call(tokenOwnerTnAdtdX, {from: accounts[3]});
		const successSH9KlXD = await contract9nTptI.transfer.call(to3uRXgz, tokensD1ekD5W, {from: accounts[5]});
		const successQYFAAJT = await contract9nTptI.transfer.call(toAi6zpt8, tokensB6fvJ2l, {from: accounts[4]});
		const successOHzMUas = await contract9nTptI.approve.call(spenderIR38fq3, tokensnCysuqm, {from: accounts[0]});

		assert.equal(balancezZpdRJl, 0)
		assert.equal(successSH9KlXD, true)
		await expect(contract9nTptI.transfer.call(toAi6zpt8, tokensB6fvJ2l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})