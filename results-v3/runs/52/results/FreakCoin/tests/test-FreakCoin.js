const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinxS697g = await FreakCoin.new({from: accounts[1]});
		const addressTvUdcwU = accounts[2]
		const uintA5f8amm = BigInt("309")
		const addressj67Xmrq = accounts[0]
		const addresssPGOQ2 = accounts[2]
		const uintIL9XLuQ = BigInt("238")
		const addressNmcCgdy = accounts[0]
		const addressisoaHAY = accounts[5]
		const uint256jmDvWdO = await FreakCoinxS697g.allUserBalances.call(addressTvUdcwU, {from: accounts[0]});
		const boolTKHYoAg = await FreakCoinxS697g.transferFrom.call(addresssPGOQ2, addressj67Xmrq, uintA5f8amm, {from: accounts[1]});
		const boolwvZAnnc = await FreakCoinxS697g.transferFrom.call(addressisoaHAY, addressNmcCgdy, uintIL9XLuQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinxS697g.allUserBalances.call(addressTvUdcwU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinrDCbLQG = await FreakCoin.new({from: accounts[1]});
		const addressTAiUSb = accounts[0]
		const uintpL6DYuT = BigInt("493")
		const addressdckYB1i = accounts[2]
		const addressHkLBUWJ = accounts[2]
		const addressLTzrAHQ = accounts[1]
		const addressMhnF9lk = accounts[0]
		const uint256LenzPEt = await FreakCoinrDCbLQG.balanceOf.call(addressTAiUSb, {from: accounts[4]});
		const boolFIqCYif = await FreakCoinrDCbLQG.transferFrom.call(addressHkLBUWJ, addressdckYB1i, uintpL6DYuT, {from: accounts[4]});
		const uint256SHNqcCb = await FreakCoinrDCbLQG.balanceOf.call(addressLTzrAHQ, {from: accounts[2]});
		const addresslorrTJ6 = await FreakCoinrDCbLQG.setUniswapAddress.call(addressMhnF9lk, {from: accounts[3]});

		assert.equal(uint256LenzPEt, BigInt("0"))
		await expect(FreakCoinrDCbLQG.transferFrom.call(addressHkLBUWJ, addressdckYB1i, uintpL6DYuT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinGFUR1Ke = await FreakCoin.new({from: accounts[3]});
		const addressieGiyP = accounts[5]
		const addresso2eAcV = accounts[1]
		const uintlFUR3u = BigInt("544")
		const addressBgvCcuP = accounts[0]
		const addressvGrCutW = accounts[3]
		const addressUwDsnBE = accounts[0]
		const uintzYPJoxt = BigInt("1838")
		const addressEFtek8Y = accounts[0]
		const addressja44NQA = accounts[1]
		const uint256VyRpgc6 = await FreakCoinGFUR1Ke.allowance.call(addresso2eAcV, addressieGiyP, {from: accounts[0]});
		const boolW5QV0t = await FreakCoinGFUR1Ke.transferFrom.call(addressvGrCutW, addressBgvCcuP, uintlFUR3u, {from: "0x0000000000000000000000000000000000000001"});
		const uint256M1CxJ8W = await FreakCoinGFUR1Ke.allUserBalances.call(addressUwDsnBE, {from: accounts[0]});
		const boolocXNFeg = await FreakCoinGFUR1Ke.transferFrom.call(addressja44NQA, addressEFtek8Y, uintzYPJoxt, {from: accounts[0]});

		assert.equal(uint256VyRpgc6, BigInt("0"))
		await expect(FreakCoinGFUR1Ke.transferFrom.call(addressvGrCutW, addressBgvCcuP, uintlFUR3u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoing4po86K = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLaKBlmC = BigInt("1115")
		const addressCwrIq3Q = accounts[5]
		const addressKml6oxO = accounts[0]
		const address2tMbrV = accounts[4]
		const uintaZRJaC = BigInt("1382")
		const addressWcD4ZIN = accounts[5]
		const boolFeN5PWS = await FreakCoing4po86K.transferFrom.call(addressKml6oxO, addressCwrIq3Q, uintLaKBlmC, {from: accounts[1]});
		const addressyByJNw = await FreakCoing4po86K.setUniswapAddress.call(address2tMbrV, {from: accounts[3]});
		const boolCgAcY5N = await FreakCoing4po86K.transfer.call(addressWcD4ZIN, uintaZRJaC, {from: accounts[5]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJSKhR4G = await FreakCoin.new({from: accounts[2]});
		const uintHsgilj = BigInt("1322")
		const addressv9BOgZT = accounts[4]
		const uintuYpwJwB = BigInt("1985")
		const addressFnG0ANC = accounts[0]
		const boolDvcRG0R = await FreakCoinJSKhR4G.approve.call(addressv9BOgZT, uintHsgilj, {from: accounts[5]});
		const boolnRpGdP = await FreakCoinJSKhR4G.approve.call(addressFnG0ANC, uintuYpwJwB, {from: accounts[3]});

		assert.equal(boolDvcRG0R, true)
		assert.equal(boolnRpGdP, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinBJx0HKN = await FreakCoin.new({from: accounts[2]});
		const uintBDiDe4d = BigInt("686")
		const addressjzI9h2n = accounts[3]
		const uint2561TqbKf = await FreakCoinBJx0HKN.totalSupply.call({from: accounts[2]});
		const boolEuXwFo = await FreakCoinBJx0HKN.approve.call(addressjzI9h2n, uintBDiDe4d, {from: accounts[2]});
		const addressNQ9XaYW = await FreakCoinBJx0HKN.uniswapAddress.call({from: accounts[4]});

		assert.equal(addressNQ9XaYW, 0x0000000000000000000000000000000000000000)
		assert.equal(boolEuXwFo, true)
		assert.equal(uint2561TqbKf, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKEAVM5 = await FreakCoin.new({from: accounts[4]});
		const uinto25p8Ah = BigInt("599")
		const addresstM76voJ = accounts[3]
		const uintTSQiZuE = BigInt("845")
		const addressaZry0VU = accounts[1]
		const addressuh5DWFk = accounts[3]
		const uintJ4X2Nm = BigInt("605")
		const addressOTOAyeE = accounts[2]
		const boolHRXL1V = await FreakCoinKEAVM5.transfer.call(addresstM76voJ, uinto25p8Ah, {from: accounts[0]});
		const boolPkBdLkz = await FreakCoinKEAVM5.transferFrom.call(addressuh5DWFk, addressaZry0VU, uintTSQiZuE, {from: accounts[0]});
		const uint256nXF6UWo = await FreakCoinKEAVM5.totalSupply.call({from: accounts[4]});
		const boolGrBcUze = await FreakCoinKEAVM5.approve.call(addressOTOAyeE, uintJ4X2Nm, {from: accounts[3]});

		await expect(FreakCoinKEAVM5.transfer.call(addresstM76voJ, uinto25p8Ah, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJSKhR4G = await FreakCoin.new({from: accounts[2]});
		const uintCCFFiQZ = BigInt("1247")
		const addressTuZIqzk = accounts[0]
		const addressJ1YArJ = accounts[5]
		const uintjUwoqzR = BigInt("1322")
		const addressFD7Al6 = accounts[4]
		const boolbpxOWc6 = await FreakCoinJSKhR4G.approve.call(addressTuZIqzk, uintCCFFiQZ, {from: accounts[0]});
		const addressXT9jPUT = await FreakCoinJSKhR4G.setUniswapAddress.call(addressJ1YArJ, {from: accounts[3]});
		const boolDvcRG0R = await FreakCoinJSKhR4G.approve.call(addressFD7Al6, uintjUwoqzR, {from: accounts[5]});

		assert.equal(boolbpxOWc6, true)
		await expect(FreakCoinJSKhR4G.setUniswapAddress.call(addressJ1YArJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKEAVM5 = await FreakCoin.new({from: accounts[4]});
		const uintboGLx8C = BigInt("1315")
		const addressdu3uWN4 = accounts[4]
		const uintVZekJBd = BigInt("605")
		const addressdBz75iU = accounts[3]
		const boolIErSg6H = await FreakCoinKEAVM5.transfer.call(addressdu3uWN4, uintboGLx8C, {from: accounts[4]});
		const boolGrBcUze = await FreakCoinKEAVM5.approve.call(addressdBz75iU, uintVZekJBd, {from: accounts[3]});

		assert.equal(boolGrBcUze, true)
		assert.equal(boolIErSg6H, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKEAVM5 = await FreakCoin.new({from: accounts[4]});
		const uintOmWmy4 = BigInt("1315")
		const addressQIJfCiK = accounts[5]
		const addressibfH5De = accounts[3]
		const addressCpUBwSf = accounts[4]
		const uintuCQKCNC = BigInt("605")
		const addressFhF19G9 = accounts[3]
		const boolIErSg6H = await FreakCoinKEAVM5.transfer.call(addressQIJfCiK, uintOmWmy4, {from: accounts[4]});
		const uint256StLw47G = await FreakCoinKEAVM5.balanceOf.call(addressibfH5De, {from: accounts[4]});
		const uint256SQrgLRW = await FreakCoinKEAVM5.allUserBalances.call(addressCpUBwSf, {from: accounts[0]});
		const boolGrBcUze = await FreakCoinKEAVM5.approve.call(addressFhF19G9, uintuCQKCNC, {from: accounts[3]});

		assert.equal(boolGrBcUze, true)
		assert.equal(boolIErSg6H, true)
		assert.equal(uint256StLw47G, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinW2HFmjK = await FreakCoin.new({from: accounts[3]});
		const addressfZ0G4cR = "0x0000000000000000000000000000000000000001"
		const addressX1ZrMKJ = accounts[2]
		const addressgSZLmoP = accounts[4]
		const uint256qvnOQNv = await FreakCoinW2HFmjK.balanceOf.call(addressfZ0G4cR, {from: accounts[0]});
		const addressb9xZuSV = await FreakCoinW2HFmjK.setUniswapAddress.call(addressX1ZrMKJ, {from: accounts[3]});
		const addressRCKdVGG = await FreakCoinW2HFmjK.setUniswapAddress.call(addressgSZLmoP, {from: accounts[2]});

		assert.equal(uint256qvnOQNv, BigInt("0"))
		await expect(FreakCoinW2HFmjK.setUniswapAddress.call(addressgSZLmoP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})