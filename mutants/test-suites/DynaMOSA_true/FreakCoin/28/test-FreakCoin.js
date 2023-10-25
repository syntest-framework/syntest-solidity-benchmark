const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinblRXQy = await FreakCoin.new({from: accounts[4]});
		const uintJtNhmY8 = BigInt("981")
		const addressYxynJW = accounts[0]
		const addressusoUl6O = accounts[4]
		const uinth69ypRC = BigInt("783")
		const addressCY2jdS1 = accounts[4]
		const addressDd5jRnW = "0x0000000000000000000000000000000000000001"
		const addressTEFFlf9 = accounts[2]
		const boolPUyfvhq = await FreakCoinblRXQy.approve.call(addressYxynJW, uintJtNhmY8, {from: accounts[1]});
		const uint256NqRpLaS = await FreakCoinblRXQy.balanceOf.call(addressusoUl6O, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFRlLfL = await FreakCoinblRXQy.transferFrom.call(addressDd5jRnW, addressCY2jdS1, uinth69ypRC, {from: "0x0000000000000000000000000000000000000001"});
//		const addressJBJd0v3 = await FreakCoinblRXQy.setUniswapAddress.call(addressTEFFlf9, {from: accounts[3]});

		assert.equal(boolPUyfvhq, true)
		assert.equal(uint256NqRpLaS, BigInt("1000000"))
		await expect(FreakCoinblRXQy.transferFrom.call(addressDd5jRnW, addressCY2jdS1, uinth69ypRC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinqThxg3m = await FreakCoin.new({from: accounts[0]});
		const addressaBAIBr6 = accounts[3]
		const uintGXdcxg8 = BigInt("714")
		const addressrerUFhi = accounts[3]
		const addressFlTZiiz = accounts[5]
		const uintVXmeHMS = BigInt("1919")
		const addressan0D879 = accounts[2]
		const addressXGVHpJ = accounts[0]
		const addresspJHVN2 = accounts[3]
		const addressXM479F = accounts[4]
//		const uint256dKQLIKh = await FreakCoinqThxg3m.allUserBalances.call(addressaBAIBr6, {from: accounts[4]});
//		const boolFYs0I5e = await FreakCoinqThxg3m.transferFrom.call(addressFlTZiiz, addressrerUFhi, uintGXdcxg8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyT8TgvG = await FreakCoinqThxg3m.approve.call(addressan0D879, uintVXmeHMS, {from: accounts[3]});
//		const uint256uX9XMO9 = await FreakCoinqThxg3m.allowance.call(addresspJHVN2, addressXGVHpJ, {from: accounts[3]});
//		const uint256rjaD89A = await FreakCoinqThxg3m.balanceOf.call(addressXM479F, {from: accounts[2]});

		await expect(FreakCoinqThxg3m.allUserBalances.call(addressaBAIBr6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinDs7h2gJ = await FreakCoin.new({from: accounts[3]});
		const uintgpmg2m = BigInt("1865")
		const addressqMcyPJf = accounts[2]
		const addressq0kFBgu = accounts[2]
		const addressdzH410y = accounts[5]
		const uint256DsXOEwD = await FreakCoinDs7h2gJ.totalSupply.call({from: accounts[3]});
		const addresszZgDx5N = await FreakCoinDs7h2gJ.uniswapAddress.call({from: accounts[3]});
		const boolErDx1VJ = await FreakCoinDs7h2gJ.approve.call(addressqMcyPJf, uintgpmg2m, {from: accounts[4]});
		const uint256tiKh4Hr = await FreakCoinDs7h2gJ.allowance.call(addressdzH410y, addressq0kFBgu, {from: accounts[2]});

		assert.equal(addresszZgDx5N, 0x0000000000000000000000000000000000000000)
		assert.equal(boolErDx1VJ, true)
		assert.equal(uint256DsXOEwD, BigInt("1000000"))
		assert.equal(uint256tiKh4Hr, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinc8BWKSr = await FreakCoin.new({from: accounts[4]});
		const uintRqaSv1m = BigInt("1046")
		const addressjnZkzcp = accounts[2]
		const uintI8yyeK = BigInt("1260")
		const addresseqTjhv = accounts[1]
		const uint256ngWvl5n = await FreakCoinc8BWKSr.totalSupply.call({from: accounts[4]});
		const boolxu3zT4o = await FreakCoinc8BWKSr.transfer.call(addressjnZkzcp, uintRqaSv1m, {from: accounts[4]});
		const addressJsxtz9B = await FreakCoinc8BWKSr.uniswapAddress.call({from: accounts[1]});
		const addressZmiyM9y = await FreakCoinc8BWKSr.uniswapAddress.call({from: accounts[3]});
//		const boolqlBRCOd = await FreakCoinc8BWKSr.transfer.call(addresseqTjhv, uintI8yyeK, {from: accounts[3]});

		assert.equal(addressJsxtz9B, 0x0000000000000000000000000000000000000000)
		assert.equal(addressZmiyM9y, 0x0000000000000000000000000000000000000000)
		assert.equal(boolxu3zT4o, true)
		assert.equal(uint256ngWvl5n, BigInt("1000000"))
		await expect(FreakCoinc8BWKSr.transfer.call(addresseqTjhv, uintI8yyeK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinhDaJVAK = await FreakCoin.new({from: accounts[4]});
		const addressolBFjlZ = accounts[2]
		const addressVPgPX2n = accounts[1]
//		const addressEeqOrND = await FreakCoinhDaJVAK.setUniswapAddress.call(addressolBFjlZ, {from: accounts[2]});
//		const addressxSRgJhS = await FreakCoinhDaJVAK.uniswapAddress.call({from: accounts[4]});
//		const uint256Q3WoD4S = await FreakCoinhDaJVAK.allUserBalances.call(addressVPgPX2n, {from: accounts[3]});

		await expect(FreakCoinhDaJVAK.setUniswapAddress.call(addressolBFjlZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinc8BWKSr = await FreakCoin.new({from: accounts[4]});
		const uintP5LNogT = BigInt("1046")
		const addressx8kykNY = accounts[4]
		const uintiwayUa = BigInt("420")
		const addressl8TmMTL = accounts[5]
		const uintQa3eJlv = BigInt("138")
		const addressuD5K6if = accounts[4]
		const uintIk4KZ0I = BigInt("1790")
		const addressIZN7uWE = accounts[0]
		const addressGFFe4YD = accounts[1]
		const uintZXtgCnA = BigInt("1260")
		const addressuhGM0AN = accounts[1]
		const uint256ngWvl5n = await FreakCoinc8BWKSr.totalSupply.call({from: accounts[4]});
		const boolxu3zT4o = await FreakCoinc8BWKSr.transfer.call(addressx8kykNY, uintP5LNogT, {from: accounts[4]});
//		const boolfKZrGFk = await FreakCoinc8BWKSr.transfer.call(addressl8TmMTL, uintiwayUa, {from: accounts[2]});
//		const boolbkRD2IF = await FreakCoinc8BWKSr.transfer.call(addressuD5K6if, uintQa3eJlv, {from: accounts[1]});
//		const boolOWD8Oy = await FreakCoinc8BWKSr.transferFrom.call(addressGFFe4YD, addressIZN7uWE, uintIk4KZ0I, {from: accounts[1]});
//		const addressZmiyM9y = await FreakCoinc8BWKSr.uniswapAddress.call({from: accounts[3]});
//		const boolqlBRCOd = await FreakCoinc8BWKSr.transfer.call(addressuhGM0AN, uintZXtgCnA, {from: accounts[3]});

		assert.equal(boolxu3zT4o, true)
		assert.equal(uint256ngWvl5n, BigInt("1000000"))
		await expect(FreakCoinc8BWKSr.transfer.call(addressl8TmMTL, uintiwayUa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinMzdpxaH = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintufJROfO = BigInt("460")
		const addressaaOuFfC = accounts[2]
		const uintsfKc3Sv = BigInt("1233")
		const addressievyqs2 = accounts[2]
		const addressCRPPYQa = accounts[5]
		const uintmuKud7 = BigInt("1295")
		const addressCsw8REC = accounts[1]
		const addressVl8AUBL = accounts[4]
		const uintcKBb6jC = BigInt("1403")
		const addresskg0dqiV = "0x0000000000000000000000000000000000000001"
		const addresszYk73Pu = accounts[4]
		const addresstjktoV7 = accounts[5]
		const boolcWH4n9M = await FreakCoinMzdpxaH.transfer.call(addressaaOuFfC, uintufJROfO, {from: accounts[0]});
		const boolazJbE0Y = await FreakCoinMzdpxaH.transferFrom.call(addressCRPPYQa, addressievyqs2, uintsfKc3Sv, {from: accounts[0]});
		const boolbOpy64 = await FreakCoinMzdpxaH.approve.call(addressCsw8REC, uintmuKud7, {from: accounts[1]});
		const uint256vImeehB = await FreakCoinMzdpxaH.allUserBalances.call(addressVl8AUBL, {from: accounts[2]});
		const boolwGWtkPz = await FreakCoinMzdpxaH.approve.call(addresskg0dqiV, uintcKBb6jC, {from: accounts[0]});
		const uint256Bv4QiqI = await FreakCoinMzdpxaH.allowance.call(addresstjktoV7, addresszYk73Pu, {from: accounts[3]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinYdqA466 = await FreakCoin.new({from: accounts[0]});
		const addressHWlEe6 = accounts[0]
		const addresstt3hHCz = accounts[2]
		const uint256V5XEJUr = await FreakCoinYdqA466.allUserBalances.call(addressHWlEe6, {from: accounts[1]});
		const addressLVuZLPe = await FreakCoinYdqA466.setUniswapAddress.call(addresstt3hHCz, {from: accounts[0]});
	});
})