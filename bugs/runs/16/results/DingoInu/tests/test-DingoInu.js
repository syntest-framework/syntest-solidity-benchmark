const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractzqlLVXO = await DingoInu.new({from: accounts[1]});
		const tokenOwnercIhxKHn = accounts[2]
		const tokenOwnersjDMdv5 = accounts[4]
		const tokensbKfQ8nK = BigInt("34")
		const tosxjRZZu = "0x0000000000000000000000000000000000000001"
		const tokensjnq22ob = BigInt("830")
		const toKQeykvO = "0x0000000000000000000000000000000000000001"
		const tokenswSAMrFw = BigInt("1534")
		const spenderkga048h = accounts[2]
		const balanceMUXUxsA = await contractzqlLVXO.balanceOf.call(tokenOwnercIhxKHn, {from: accounts[4]});
		const balanceoMf0CDY = await contractzqlLVXO.balanceOf.call(tokenOwnersjDMdv5, {from: accounts[5]});
		const successn2uWLb = await contractzqlLVXO.transfer.call(tosxjRZZu, tokensbKfQ8nK, {from: accounts[2]});
		const successlCMc57Q = await contractzqlLVXO.transfer.call(toKQeykvO, tokensjnq22ob, {from: accounts[2]});
		const successVDu6JB = await contractzqlLVXO.approve.call(spenderkga048h, tokenswSAMrFw, {from: accounts[1]});

		assert.equal(balanceMUXUxsA, 0)
		assert.equal(balanceoMf0CDY, 0)
		await expect(contractzqlLVXO.transfer.call(tosxjRZZu, tokensbKfQ8nK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractmGCn3S3 = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnerVva4f2K = accounts[0]
		const spenderFdFxAZF = accounts[2]
		const tokenOwnerbbQp9Z2 = accounts[3]
		const tokensIAd8neR = BigInt("1595")
		const tocQKuSc = accounts[5]
		const tokensFwN6u6Z = BigInt("1784")
		const spenderyBs3JOm = accounts[4]
		const tokensmBryO9S = BigInt("981")
		const toRNJzyn = accounts[3]
		const balancepczU4Dy = await contractmGCn3S3.balanceOf.call(tokenOwnerVva4f2K, {from: "0x0000000000000000000000000000000000000001"});
		const remainingTazdS27 = await contractmGCn3S3.allowance.call(tokenOwnerbbQp9Z2, spenderFdFxAZF, {from: accounts[3]});
		const successTVQan5o = await contractmGCn3S3.transfer.call(tocQKuSc, tokensIAd8neR, {from: accounts[0]});
		const successRR4rkAC = await contractmGCn3S3.approve.call(spenderyBs3JOm, tokensFwN6u6Z, {from: accounts[1]});
		const successMnUMXy = await contractmGCn3S3.transfer.call(toRNJzyn, tokensmBryO9S, {from: accounts[3]});
	});

	it('test for DingoInu', async () => {
		const contractkDcWdIp = await DingoInu.new({from: accounts[0]});
		const tokenOwnerIuQuVTh = accounts[4]
		const spenderpR8Ozeg = accounts[1]
		const tokenOwneruHO9F1s = accounts[3]
		const tokenOwnerKC6LzBT = accounts[5]
		const nullT3XfFv = await contractkDcWdIp.totalSupply.call({from: accounts[4]});
		const balanceagmbAsc = await contractkDcWdIp.balanceOf.call(tokenOwnerIuQuVTh, {from: accounts[2]});
		const null4JzLK5 = await contractkDcWdIp.totalSupply.call({from: accounts[0]});
		const remainingwMmstjy = await contractkDcWdIp.allowance.call(tokenOwneruHO9F1s, spenderpR8Ozeg, {from: accounts[1]});
		const balanceqALd6g3 = await contractkDcWdIp.balanceOf.call(tokenOwnerKC6LzBT, {from: accounts[1]});

		assert.equal(balanceagmbAsc, 0)
		assert.equal(balanceqALd6g3, 0)
		assert.equal(null4JzLK5, 1000000000000000000000000000000)
		assert.equal(nullT3XfFv, 1000000000000000000000000000000)
		assert.equal(remainingwMmstjy, 0)
	});

	it('test for DingoInu', async () => {
		const contractmFkNvxX = await DingoInu.new({from: accounts[4]});
		const tokensk21W6lq = BigInt("1334")
		const spenderNV2WiJ5 = accounts[4]
		const tokensHYMliyu = BigInt("1715")
		const spenderzNIgyCR = accounts[0]
		const tokensYYNRp3O = BigInt("1614")
		const toRnKiBbm = accounts[3]
		const tokensVLlXeCN = BigInt("1993")
		const spenderkTrVXeh = accounts[5]
		const tokenOwnerixc4PA = accounts[3]
		const successLBSoZ9D = await contractmFkNvxX.approve.call(spenderNV2WiJ5, tokensk21W6lq, {from: accounts[2]});
		const successHYdWvn8 = await contractmFkNvxX.approve.call(spenderzNIgyCR, tokensHYMliyu, {from: "0x0000000000000000000000000000000000000001"});
		const successxEsX9Tx = await contractmFkNvxX.transfer.call(toRnKiBbm, tokensYYNRp3O, {from: accounts[2]});
		const successi1La2T0 = await contractmFkNvxX.approve.call(spenderkTrVXeh, tokensVLlXeCN, {from: accounts[4]});
		const balanceqReoHEn = await contractmFkNvxX.balanceOf.call(tokenOwnerixc4PA, {from: accounts[3]});

		assert.equal(successHYdWvn8, true)
		assert.equal(successLBSoZ9D, true)
		await expect(contractmFkNvxX.transfer.call(toRnKiBbm, tokensYYNRp3O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractxmSW7yw = await DingoInu.new({from: accounts[1]});
		const tokensB4Xdgy2 = BigInt("1601")
		const toMhUGY2o = accounts[5]
		const fromfHcP0wu = accounts[3]
		const tokenOwnerGzkTeAO = accounts[2]
		const tokensbz4Wpwb = BigInt("34")
		const tonUCmBpk = "0x0000000000000000000000000000000000000001"
		const tokensRVd1nqA = BigInt("815")
		const tokVZzOl5 = "0x0000000000000000000000000000000000000001"
		const tokensP8QTJ5i = BigInt("1534")
		const spendergW6yblN = accounts[2]
		const successGhdKtzM = await contractxmSW7yw.transferFrom.call(fromfHcP0wu, toMhUGY2o, tokensB4Xdgy2, {from: accounts[0]});
		const balanceM5oahcv = await contractxmSW7yw.balanceOf.call(tokenOwnerGzkTeAO, {from: accounts[4]});
		const successl54mrLQ = await contractxmSW7yw.transfer.call(tonUCmBpk, tokensbz4Wpwb, {from: accounts[2]});
		const successg5LFu5a = await contractxmSW7yw.transfer.call(tokVZzOl5, tokensRVd1nqA, {from: accounts[2]});
		const successuaqCew2 = await contractxmSW7yw.approve.call(spendergW6yblN, tokensP8QTJ5i, {from: accounts[1]});

		await expect(contractxmSW7yw.transferFrom.call(fromfHcP0wu, toMhUGY2o, tokensB4Xdgy2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractIq9wqgI = await DingoInu.new({from: accounts[4]});
		const tokensoOxLVv = BigInt("548")
		const spenderGUL7ONq = accounts[4]
		const tokensQOsEvAi = BigInt("1667")
		const spenderZbNwsCI = accounts[5]
		const tokensHLZEb4W = BigInt("838")
		const toBIpK5Vx = accounts[4]
		const tokensl8Ci5WE = BigInt("1368")
		const spenderLbr38RM = accounts[0]
		const successuPLpGVa = await contractIq9wqgI.approve.call(spenderGUL7ONq, tokensoOxLVv, {from: accounts[4]});
		const successbvpuk31 = await contractIq9wqgI.approve.call(spenderZbNwsCI, tokensQOsEvAi, {from: accounts[2]});
		const successroGQAl3 = await contractIq9wqgI.transfer.call(toBIpK5Vx, tokensHLZEb4W, {from: accounts[4]});
		const successT9vnT3E = await contractIq9wqgI.approve.call(spenderLbr38RM, tokensl8Ci5WE, {from: accounts[4]});

		assert.equal(successT9vnT3E, true)
		assert.equal(successbvpuk31, true)
		assert.equal(successroGQAl3, true)
		assert.equal(successuPLpGVa, true)
	});
})