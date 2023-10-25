const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinbCqQgDG = await FreakCoin.new({from: accounts[3]});
		const addressADmqdnD = accounts[2]
		const addressMoLQbe1 = accounts[2]
		const uintLQqYFQE = BigInt("95")
		const addressubpGZxQ = accounts[1]
//		const addressD1NSlQ9 = await FreakCoinbCqQgDG.setUniswapAddress.call(addressADmqdnD, {from: accounts[2]});
//		const uint256FXklBdR = await FreakCoinbCqQgDG.balanceOf.call(addressMoLQbe1, {from: accounts[1]});
//		const boolCxNjXSi = await FreakCoinbCqQgDG.approve.call(addressubpGZxQ, uintLQqYFQE, {from: accounts[0]});

		await expect(FreakCoinbCqQgDG.setUniswapAddress.call(addressADmqdnD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinmVZTtm6 = await FreakCoin.new({from: accounts[4]});
		const uintA67SoPX = BigInt("1717")
		const addressmdymleZ = accounts[0]
		const addresseyPZrU6 = accounts[3]
		const addressKhi8ZvT = accounts[2]
		const uintza2yYF = BigInt("1269")
		const addressKC8FtcA = accounts[4]
//		const boolovnp4Ov = await FreakCoinmVZTtm6.transferFrom.call(addresseyPZrU6, addressmdymleZ, uintA67SoPX, {from: accounts[1]});
//		const uint256rO9xkU3 = await FreakCoinmVZTtm6.balanceOf.call(addressKhi8ZvT, {from: accounts[2]});
//		const boolgE93YBM = await FreakCoinmVZTtm6.transfer.call(addressKC8FtcA, uintza2yYF, {from: accounts[4]});

		await expect(FreakCoinmVZTtm6.transferFrom.call(addresseyPZrU6, addressmdymleZ, uintA67SoPX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinb2B58B2 = await FreakCoin.new({from: accounts[0]});
		const uintL2Pqd0s = BigInt("1424")
		const addressIAyErK = accounts[2]
		const addressF08Mv6P = accounts[1]
		const addressBxyiV4a = accounts[5]
		const addressrZrSAJk = accounts[1]
		const addressPQu8gJN = accounts[4]
		const boolzSYiN1E = await FreakCoinb2B58B2.approve.call(addressIAyErK, uintL2Pqd0s, {from: accounts[3]});
		const uint256uSFzpt = await FreakCoinb2B58B2.totalSupply.call({from: accounts[3]});
		const uint256ECmvANk = await FreakCoinb2B58B2.balanceOf.call(addressF08Mv6P, {from: accounts[1]});
		const uint256zmYqwwJ = await FreakCoinb2B58B2.balanceOf.call(addressBxyiV4a, {from: accounts[5]});
		const uint256hhuKGrS = await FreakCoinb2B58B2.allowance.call(addressPQu8gJN, addressrZrSAJk, {from: accounts[4]});

		assert.equal(boolzSYiN1E, true)
		assert.equal(uint256ECmvANk, BigInt("0"))
		assert.equal(uint256hhuKGrS, BigInt("0"))
		assert.equal(uint256uSFzpt, BigInt("1000000"))
		assert.equal(uint256zmYqwwJ, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinuJ6ERas = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressb1bZrAS = accounts[3]
		const addressrXT7lGM = accounts[4]
		const addressVdHTbuM = await FreakCoinuJ6ERas.uniswapAddress.call({from: accounts[3]});
		const uint256v9fH4ts = await FreakCoinuJ6ERas.balanceOf.call(addressb1bZrAS, {from: accounts[0]});
		const uint256OKRIcb5 = await FreakCoinuJ6ERas.balanceOf.call(addressrXT7lGM, {from: accounts[2]});
		const addressu50ECB4 = await FreakCoinuJ6ERas.uniswapAddress.call({from: accounts[1]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoincLQqlex = await FreakCoin.new({from: accounts[3]});
		const uintP66r8BF = BigInt("1225")
		const addressfCZEXul = accounts[4]
		const addressY5KGPv = accounts[4]
		const uintcsqKTw = BigInt("773")
		const addressLUJsk2z = accounts[4]
		const addresskxBwNCu = accounts[1]
		const uintw5sgyIz = BigInt("1677")
		const addressxDIUFB2 = accounts[3]
		const uintkUG7VKt = BigInt("709")
		const addressfBC68a = accounts[1]
		const addressO05bov1 = accounts[4]
		const boolYI3v6g3 = await FreakCoincLQqlex.approve.call(addressfCZEXul, uintP66r8BF, {from: accounts[0]});
//		const uint256BpyM89j = await FreakCoincLQqlex.allUserBalances.call(addressY5KGPv, {from: accounts[1]});
//		const boolyvogJg3 = await FreakCoincLQqlex.approve.call(addressLUJsk2z, uintcsqKTw, {from: accounts[3]});
//		const uint256aVQc2W = await FreakCoincLQqlex.balanceOf.call(addresskxBwNCu, {from: accounts[1]});
//		const boolD8rA71Q = await FreakCoincLQqlex.transfer.call(addressxDIUFB2, uintw5sgyIz, {from: accounts[0]});
//		const boolBQ6a2Aq = await FreakCoincLQqlex.transferFrom.call(addressO05bov1, addressfBC68a, uintkUG7VKt, {from: accounts[4]});

		assert.equal(boolYI3v6g3, true)
		await expect(FreakCoincLQqlex.allUserBalances.call(addressY5KGPv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOcS5DIt = await FreakCoin.new({from: accounts[0]});
		const uintzX8HHxX = BigInt("1575")
		const addresssAdT6HM = accounts[3]
		const addresswa8dFcD = accounts[2]
		const addressnHdplUX = accounts[3]
		const uintfbfNkdC = BigInt("1984")
		const addressrUU1Ydb = "0x0000000000000000000000000000000000000001"
		const addresszpdgb6j = await FreakCoinOcS5DIt.uniswapAddress.call({from: accounts[1]});
//		const boolEM7pfrY = await FreakCoinOcS5DIt.transfer.call(addresssAdT6HM, uintzX8HHxX, {from: accounts[5]});
//		const uint256MwqSGZK = await FreakCoinOcS5DIt.allowance.call(addressnHdplUX, addresswa8dFcD, {from: accounts[4]});
//		const addressAHf35jQ = await FreakCoinOcS5DIt.uniswapAddress.call({from: accounts[2]});
//		const boolHoxztsy = await FreakCoinOcS5DIt.transfer.call(addressrUU1Ydb, uintfbfNkdC, {from: accounts[2]});

		assert.equal(addresszpdgb6j, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinOcS5DIt.transfer.call(addresssAdT6HM, uintzX8HHxX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPmv9ioc = await FreakCoin.new({from: accounts[0]});
		const addressBfeAur9 = accounts[2]
		const uintLwEZ7So = BigInt("1046")
		const addresskq28Z9b = accounts[3]
		const uint256Yo7mZI = await FreakCoinPmv9ioc.balanceOf.call(addressBfeAur9, {from: accounts[0]});
		const boolExgUZiu = await FreakCoinPmv9ioc.transfer.call(addresskq28Z9b, uintLwEZ7So, {from: accounts[0]});
		const uint256HXsD7Nz = await FreakCoinPmv9ioc.totalSupply.call({from: accounts[2]});

		assert.equal(boolExgUZiu, true)
		assert.equal(uint256HXsD7Nz, BigInt("1000000"))
		assert.equal(uint256Yo7mZI, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzgf38je = await FreakCoin.new({from: accounts[2]});
		const uintLXOtX6 = BigInt("860")
		const addressyjfzENd = accounts[3]
		const addressTgoNT35 = accounts[0]
		const uintvHV2u4S = BigInt("1247")
		const addressEqCYro = accounts[2]
		const uintC5Jk1xs = BigInt("500")
		const addressurNZ58V = accounts[4]
		const uintCgP4TCA = BigInt("1058")
		const addressrNckzXP = accounts[2]
		const boolxxbgINh = await FreakCoinzgf38je.transfer.call(addressyjfzENd, uintLXOtX6, {from: accounts[2]});
		const uint256qxMkhA = await FreakCoinzgf38je.balanceOf.call(addressTgoNT35, {from: accounts[4]});
		const booly83MLk = await FreakCoinzgf38je.transfer.call(addressEqCYro, uintvHV2u4S, {from: accounts[2]});
		const boolL11kvPm = await FreakCoinzgf38je.approve.call(addressurNZ58V, uintC5Jk1xs, {from: accounts[1]});
		const booluI4X5nJ = await FreakCoinzgf38je.approve.call(addressrNckzXP, uintCgP4TCA, {from: accounts[1]});

		assert.equal(boolL11kvPm, true)
		assert.equal(booluI4X5nJ, true)
		assert.equal(boolxxbgINh, true)
		assert.equal(booly83MLk, true)
		assert.equal(uint256qxMkhA, BigInt("0"))
	});
})