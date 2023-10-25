const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractUZyfAj = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensJdOXcf = BigInt("817")
		const spendermd1xnT = accounts[5]
		const tokenOwnerlrcXBE = accounts[3]
		const tokensZipUOa = BigInt("1291")
		const towyK3NBZ = accounts[3]
		const fromQ7zVbGx = accounts[1]
		const tokenshnOR4jL = BigInt("1770")
		const spender6i1fcF = "0x0000000000000000000000000000000000000001"
		const successGOCsHTd = await contractUZyfAj.approve.call(spendermd1xnT, tokensJdOXcf, {from: accounts[0]});
		const balanceZUvl80I = await contractUZyfAj.balanceOf.call(tokenOwnerlrcXBE, {from: accounts[3]});
		const successlHoQQWF = await contractUZyfAj.transferFrom.call(fromQ7zVbGx, towyK3NBZ, tokensZipUOa, {from: accounts[2]});
		const successWZwEAC0 = await contractUZyfAj.approve.call(spender6i1fcF, tokenshnOR4jL, {from: accounts[2]});
	});

	it('test for DingoInu', async () => {
		const contractOr8Wm6p = await DingoInu.new({from: accounts[1]});
		const spenderJCnSoBM = accounts[2]
		const tokenOwnerbbkx1KN = accounts[3]
		const spenderzWx8r4L = accounts[4]
		const tokenOwnerOjtduo9 = accounts[5]
		const tokensFovwIP = BigInt("1464")
		const toWQpNaH = accounts[2]
		const remainingyCQzhj1 = await contractOr8Wm6p.allowance.call(tokenOwnerbbkx1KN, spenderJCnSoBM, {from: accounts[1]});
		const remainingVJbYuCQ = await contractOr8Wm6p.allowance.call(tokenOwnerOjtduo9, spenderzWx8r4L, {from: accounts[2]});
		const successz2aqAda = await contractOr8Wm6p.transfer.call(toWQpNaH, tokensFovwIP, {from: accounts[4]});

		assert.equal(remainingVJbYuCQ, 0)
		assert.equal(remainingyCQzhj1, 0)
		await expect(contractOr8Wm6p.transfer.call(toWQpNaH, tokensFovwIP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractJ8iDfS3 = await DingoInu.new({from: accounts[2]});
		const spenderyjZbfUg = accounts[0]
		const tokenOwnermzMsgfM = accounts[0]
		const tokensUPeD8ku = BigInt("760")
		const toehFYqnf = accounts[1]
		const tokensRMeiB7 = BigInt("1802")
		const spenderdK46Pox = accounts[0]
		const remainingXP080BW = await contractJ8iDfS3.allowance.call(tokenOwnermzMsgfM, spenderyjZbfUg, {from: accounts[3]});
		const nullbx5D86v = await contractJ8iDfS3.totalSupply.call({from: accounts[2]});
		const successnTVtXaJ = await contractJ8iDfS3.transfer.call(toehFYqnf, tokensUPeD8ku, {from: accounts[4]});
		const successjkyDqdQ = await contractJ8iDfS3.approve.call(spenderdK46Pox, tokensRMeiB7, {from: accounts[2]});

		assert.equal(nullbx5D86v, 1000000000000000000000000000000)
		assert.equal(remainingXP080BW, 0)
		await expect(contractJ8iDfS3.transfer.call(toehFYqnf, tokensUPeD8ku, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contracthfWB904 = await DingoInu.new({from: accounts[3]});
		const tokenOwnerIjnPR8r = accounts[3]
		const tokensOjR01w = BigInt("1455")
		const spendergFZsuEO = accounts[2]
		const tokenOwnerKBPx65S = "0x0000000000000000000000000000000000000001"
		const balance9RJUy2 = await contracthfWB904.balanceOf.call(tokenOwnerIjnPR8r, {from: accounts[3]});
		const successSZbfpA = await contracthfWB904.approve.call(spendergFZsuEO, tokensOjR01w, {from: accounts[3]});
		const balancehhXGFab = await contracthfWB904.balanceOf.call(tokenOwnerKBPx65S, {from: accounts[5]});

		assert.equal(balance9RJUy2, 1000000000000000000000000000000)
		assert.equal(balancehhXGFab, 0)
		assert.equal(successSZbfpA, true)
	});

	it('test for DingoInu', async () => {
		const contractrFpofKt = await DingoInu.new({from: accounts[2]});
		const tokensY9RbcEW = BigInt("1695")
		const spenderL2L9sv7 = accounts[4]
		const tokensriw2MBf = BigInt("267")
		const spenderaYShYQ = accounts[1]
		const tokensoGSkwbH = BigInt("4")
		const toqy0sP0M = accounts[3]
		const successCjBFAtG = await contractrFpofKt.approve.call(spenderL2L9sv7, tokensY9RbcEW, {from: accounts[3]});
		const successv3dGCIO = await contractrFpofKt.approve.call(spenderaYShYQ, tokensriw2MBf, {from: accounts[1]});
		const successAwuiO1L = await contractrFpofKt.transfer.call(toqy0sP0M, tokensoGSkwbH, {from: accounts[2]});

		assert.equal(successAwuiO1L, true)
		assert.equal(successCjBFAtG, true)
		assert.equal(successv3dGCIO, true)
	});

	it('test for DingoInu', async () => {
		const contractRNDJixR = await DingoInu.new({from: accounts[2]});
		const tokenOwnerkWqgeD8 = accounts[0]
		const spenderYcGQ751 = "0x0000000000000000000000000000000000000001"
		const tokenOwnero2mwQ8X = accounts[2]
		const tokenspAz5Tfj = BigInt("543")
		const toG9tBBu = accounts[4]
		const fromfv1F6Mb = accounts[3]
		const balanceWeVwei6 = await contractRNDJixR.balanceOf.call(tokenOwnerkWqgeD8, {from: accounts[3]});
		const remainingqKFHptv = await contractRNDJixR.allowance.call(tokenOwnero2mwQ8X, spenderYcGQ751, {from: accounts[4]});
		const successlBh4K7 = await contractRNDJixR.transferFrom.call(fromfv1F6Mb, toG9tBBu, tokenspAz5Tfj, {from: accounts[3]});

		assert.equal(balanceWeVwei6, 0)
		assert.equal(remainingqKFHptv, 0)
		await expect(contractRNDJixR.transferFrom.call(fromfv1F6Mb, toG9tBBu, tokenspAz5Tfj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})