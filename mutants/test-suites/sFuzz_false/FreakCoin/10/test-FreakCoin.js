const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinLrG7isZ = await FreakCoin.new({from: accounts[4]});
		const uintUdAaZGs = BigInt("560")
		const addressrV2Sgv = accounts[4]
		const uintm044SAE = BigInt("1335")
		const addressT3YsucG = accounts[4]
		const addressqLr063c = accounts[1]
		const uintpyZyzL0 = BigInt("796")
		const addressZBuFaW = accounts[4]
		const addresspfETjQ = accounts[3]
		const addressOYSudlD = accounts[1]
//		const boollfJZjSV = await FreakCoinLrG7isZ.transfer.call(addressrV2Sgv, uintUdAaZGs, {from: accounts[3]});
//		const boolhdsDs0C = await FreakCoinLrG7isZ.transferFrom.call(addressqLr063c, addressT3YsucG, uintm044SAE, {from: accounts[4]});
//		const boolTOnc4Ck = await FreakCoinLrG7isZ.approve.call(addressZBuFaW, uintpyZyzL0, {from: accounts[4]});
//		const uint256C99nK2 = await FreakCoinLrG7isZ.allowance.call(addressOYSudlD, addresspfETjQ, {from: accounts[3]});

		await expect(FreakCoinLrG7isZ.transfer.call(addressrV2Sgv, uintUdAaZGs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinLHfYx9 = await FreakCoin.new({from: accounts[2]});
		const addressRqjgntV = accounts[2]
		const addresscn8ODHf = accounts[2]
		const addressBr1Eedh = accounts[2]
		const uintcN674ag = BigInt("1976")
		const addresserO2EK1 = accounts[0]
		const addressLYjxNV2 = accounts[5]
		const addressy5rGrur = "0x0000000000000000000000000000000000000001"
		const uint256Zyiry9 = await FreakCoinLHfYx9.balanceOf.call(addressRqjgntV, {from: accounts[2]});
		const uint256dpa9ofu = await FreakCoinLHfYx9.allUserBalances.call(addresscn8ODHf, {from: accounts[2]});
		const uint256m0BMBNX = await FreakCoinLHfYx9.balanceOf.call(addressBr1Eedh, {from: accounts[3]});
//		const boolxPYhZYE = await FreakCoinLHfYx9.transferFrom.call(addressLYjxNV2, addresserO2EK1, uintcN674ag, {from: accounts[0]});
//		const addressuDZrQnQ = await FreakCoinLHfYx9.setUniswapAddress.call(addressy5rGrur, {from: accounts[2]});

		assert.equal(uint256Zyiry9, BigInt("1000000"))
		assert.equal(uint256m0BMBNX, BigInt("1000000"))
		await expect(FreakCoinLHfYx9.transferFrom.call(addressLYjxNV2, addresserO2EK1, uintcN674ag, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinYdZK7uf = await FreakCoin.new({from: accounts[0]});
		const uintSgYgONI = BigInt("568")
		const addresso0lMz28 = accounts[2]
		const addressy9JvT78 = "0x0000000000000000000000000000000000000001"
		const addressukRENbb = accounts[4]
		const uintYfA94aC = BigInt("240")
		const addressSHGnUrV = "0x0000000000000000000000000000000000000001"
		const boolDtmMpna = await FreakCoinYdZK7uf.transfer.call(addresso0lMz28, uintSgYgONI, {from: accounts[0]});
		const uint256YXprtiB = await FreakCoinYdZK7uf.allowance.call(addressukRENbb, addressy9JvT78, {from: accounts[2]});
		const addressgL8W0HF = await FreakCoinYdZK7uf.uniswapAddress.call({from: accounts[3]});
		const boolT1eSkV = await FreakCoinYdZK7uf.approve.call(addressSHGnUrV, uintYfA94aC, {from: accounts[4]});

		assert.equal(addressgL8W0HF, 0x0000000000000000000000000000000000000000)
		assert.equal(boolDtmMpna, true)
		assert.equal(boolT1eSkV, true)
		assert.equal(uint256YXprtiB, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinhN5OUQw = await FreakCoin.new({from: accounts[1]});
		const addressiNKGhFR = "0x0000000000000000000000000000000000000001"
		const uintr8HqJZ7 = BigInt("1021")
		const addressxCTnEZw = accounts[4]
		const addressB8czNF = accounts[3]
		const addressCGiUkwQ = "0x0000000000000000000000000000000000000001"
//		const addresswGP5Tyv = await FreakCoinhN5OUQw.setUniswapAddress.call(addressiNKGhFR, {from: accounts[2]});
//		const booluggrjzf = await FreakCoinhN5OUQw.transferFrom.call(addressB8czNF, addressxCTnEZw, uintr8HqJZ7, {from: accounts[0]});
//		const uint256kVWjYSf = await FreakCoinhN5OUQw.allUserBalances.call(addressCGiUkwQ, {from: accounts[3]});

		await expect(FreakCoinhN5OUQw.setUniswapAddress.call(addressiNKGhFR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinVPuFon = await FreakCoin.new({from: accounts[1]});
		const addresseqJQs9 = accounts[3]
		const uintFiNf50 = BigInt("1795")
		const addressdMvEi0W = accounts[1]
		const addresssJZVhso = accounts[2]
//		const uint256t3zEtNy = await FreakCoinVPuFon.allUserBalances.call(addresseqJQs9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGHNO7gq = await FreakCoinVPuFon.approve.call(addressdMvEi0W, uintFiNf50, {from: accounts[2]});
//		const uint256sEzRinA = await FreakCoinVPuFon.balanceOf.call(addresssJZVhso, {from: accounts[1]});

		await expect(FreakCoinVPuFon.allUserBalances.call(addresseqJQs9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinhhjD8OL = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMP35h0Z = accounts[2]
		const uintPA8g4N = BigInt("636")
		const addresskzjpTfK = accounts[4]
		const addressuozFOY = accounts[0]
		const addressgfOcSNc = "0x0000000000000000000000000000000000000001"
		const addresshFEdQ6a = accounts[1]
		const addressKZx9Siv = accounts[4]
		const uint256MiYbPP2 = await FreakCoinhhjD8OL.allUserBalances.call(addressMP35h0Z, {from: accounts[4]});
		const boolOlR5I1V = await FreakCoinhhjD8OL.transferFrom.call(addressuozFOY, addresskzjpTfK, uintPA8g4N, {from: accounts[5]});
		const uint256hDhZamN = await FreakCoinhhjD8OL.totalSupply.call({from: accounts[5]});
		const addressb2laMb = await FreakCoinhhjD8OL.setUniswapAddress.call(addressgfOcSNc, {from: accounts[3]});
		const uint256mYks8nq = await FreakCoinhhjD8OL.allUserBalances.call(addresshFEdQ6a, {from: accounts[3]});
		const uint256BEgZuju = await FreakCoinhhjD8OL.allUserBalances.call(addressKZx9Siv, {from: accounts[1]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinpCdjURG = await FreakCoin.new({from: accounts[2]});
		const uinty52UBkE = BigInt("1422")
		const addressLO3eNyF = accounts[2]
		const addressi1s2hbZ = accounts[0]
		const addressOb7IcBL = accounts[4]
		const boolb1aDkVu = await FreakCoinpCdjURG.transfer.call(addressLO3eNyF, uinty52UBkE, {from: accounts[2]});
//		const addressSVNYb0Q = await FreakCoinpCdjURG.setUniswapAddress.call(addressi1s2hbZ, {from: accounts[0]});
//		const uint256VelDAu = await FreakCoinpCdjURG.allUserBalances.call(addressOb7IcBL, {from: accounts[2]});

		assert.equal(boolb1aDkVu, true)
		await expect(FreakCoinpCdjURG.setUniswapAddress.call(addressi1s2hbZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})