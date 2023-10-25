const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinX5cero6 = await FreakCoin.new({from: accounts[1]});
		const uintJpcGwGZ = BigInt("1279")
		const addressLWPAcOI = accounts[2]
		const addressrGobsoD = accounts[5]
		const boolfG6WXtS = await FreakCoinX5cero6.approve.call(addressLWPAcOI, uintJpcGwGZ, {from: accounts[0]});
		const addressmHcpfAj = await FreakCoinX5cero6.uniswapAddress.call({from: accounts[1]});
		const uint256AciVBzg = await FreakCoinX5cero6.balanceOf.call(addressrGobsoD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressmHcpfAj, 0x0000000000000000000000000000000000000000)
		assert.equal(boolfG6WXtS, true)
		assert.equal(uint256AciVBzg, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinMqmOrYI = await FreakCoin.new({from: accounts[3]});
		const addressuq0tV5v = accounts[1]
		const addressme9Xle9 = "0x0000000000000000000000000000000000000001"
		const addressQs9Z94s = accounts[1]
		const addressCq44Yiu = "0x0000000000000000000000000000000000000001"
		const addresslM7S7F2 = accounts[4]
		const uintKAfdvh0 = BigInt("390")
		const addressbyo5esr = accounts[3]
		const addresseBbruqd = accounts[0]
		const uint256z4hQ3hJ = await FreakCoinMqmOrYI.allowance.call(addressme9Xle9, addressuq0tV5v, {from: accounts[0]});
		const uint256ihizAEL = await FreakCoinMqmOrYI.allowance.call(addressCq44Yiu, addressQs9Z94s, {from: accounts[0]});
		const addressTaWTLUZ = await FreakCoinMqmOrYI.setUniswapAddress.call(addresslM7S7F2, {from: accounts[3]});
//		const boolDz52Pw9 = await FreakCoinMqmOrYI.transferFrom.call(addresseBbruqd, addressbyo5esr, uintKAfdvh0, {from: accounts[0]});

		assert.equal(uint256ihizAEL, BigInt("0"))
		assert.equal(uint256z4hQ3hJ, BigInt("0"))
		await expect(FreakCoinMqmOrYI.transferFrom.call(addresseBbruqd, addressbyo5esr, uintKAfdvh0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzct5dKu = await FreakCoin.new({from: accounts[5]});
		const uintFPnA690 = BigInt("1934")
		const addressuPoORMq = accounts[0]
		const uintDxogBT = BigInt("184")
		const addressQ5d1kAV = accounts[3]
//		const boolauRk13v = await FreakCoinzct5dKu.transfer.call(addressuPoORMq, uintFPnA690, {from: accounts[1]});
//		const boolENBk38H = await FreakCoinzct5dKu.transfer.call(addressQ5d1kAV, uintDxogBT, {from: accounts[2]});

		await expect(FreakCoinzct5dKu.transfer.call(addressuPoORMq, uintFPnA690, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnoRbtK = await FreakCoin.new({from: accounts[5]});
		const addressoiUeHik = accounts[2]
		const uintBE5ZdiT = BigInt("554")
		const addressnbYH9GY = accounts[3]
		const addressl0bvJyo = accounts[4]
		const uintfcIVK4 = BigInt("84")
		const addressnmRChr4 = accounts[5]
		const addressmmJLGit = "0x0000000000000000000000000000000000000001"
		const uint256m2HhWm = await FreakCoinnoRbtK.totalSupply.call({from: accounts[2]});
		const uint256AC8IAnz = await FreakCoinnoRbtK.balanceOf.call(addressoiUeHik, {from: accounts[4]});
//		const boolx9G0WxP = await FreakCoinnoRbtK.transferFrom.call(addressl0bvJyo, addressnbYH9GY, uintBE5ZdiT, {from: accounts[0]});
//		const boolwLFbgf = await FreakCoinnoRbtK.transferFrom.call(addressmmJLGit, addressnmRChr4, uintfcIVK4, {from: accounts[1]});
//		const addressGwRN2sU = await FreakCoinnoRbtK.uniswapAddress.call({from: accounts[4]});

		assert.equal(uint256AC8IAnz, BigInt("0"))
		assert.equal(uint256m2HhWm, BigInt("1000000"))
		await expect(FreakCoinnoRbtK.transferFrom.call(addressl0bvJyo, addressnbYH9GY, uintBE5ZdiT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinem9iUol = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKBbMkgY = accounts[4]
		const addressnnZNLZw = accounts[4]
		const addressPTJhG3A = accounts[0]
		const addresscusce2T = accounts[4]
		const addressYrBdMqe = "0x0000000000000000000000000000000000000001"
		const addresslNd8vk = await FreakCoinem9iUol.setUniswapAddress.call(addressKBbMkgY, {from: accounts[0]});
		const uint256A6S0e1l = await FreakCoinem9iUol.allowance.call(addressPTJhG3A, addressnnZNLZw, {from: accounts[1]});
		const uint256YpeadaQ = await FreakCoinem9iUol.allowance.call(addressYrBdMqe, addresscusce2T, {from: accounts[1]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinRZrkxz1 = await FreakCoin.new({from: accounts[4]});
		const uintmBuq6YD = BigInt("121")
		const addressgqvIhwv = accounts[4]
		const uintmVFnDFs = BigInt("1146")
		const addressO23MiQT = accounts[0]
		const addressJQEXedf = accounts[0]
		const boolohqcYLk = await FreakCoinRZrkxz1.approve.call(addressgqvIhwv, uintmBuq6YD, {from: accounts[0]});
		const boolVsBcHDp = await FreakCoinRZrkxz1.approve.call(addressO23MiQT, uintmVFnDFs, {from: accounts[0]});
//		const uint256nrUAKT = await FreakCoinRZrkxz1.allUserBalances.call(addressJQEXedf, {from: accounts[3]});

		assert.equal(boolVsBcHDp, true)
		assert.equal(boolohqcYLk, true)
		await expect(FreakCoinRZrkxz1.allUserBalances.call(addressJQEXedf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinP5nDZgl = await FreakCoin.new({from: accounts[3]});
		const uintSK8v5Dg = BigInt("1028")
		const addressBUM7gH7 = "0x0000000000000000000000000000000000000001"
		const addressZiQ19Lh = accounts[4]
		const addressEDuE32p = accounts[3]
		const addressfKIkwvl = accounts[3]
		const addressuhiCrqY = accounts[5]
		const boolPp3Ur8F = await FreakCoinP5nDZgl.transfer.call(addressBUM7gH7, uintSK8v5Dg, {from: accounts[3]});
		const uint256IC3iJMz = await FreakCoinP5nDZgl.allowance.call(addressEDuE32p, addressZiQ19Lh, {from: accounts[3]});
		const uint256X4QF2vA = await FreakCoinP5nDZgl.allowance.call(addressuhiCrqY, addressfKIkwvl, {from: accounts[3]});

		assert.equal(boolPp3Ur8F, true)
		assert.equal(uint256IC3iJMz, BigInt("0"))
		assert.equal(uint256X4QF2vA, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinP5nDZgl = await FreakCoin.new({from: accounts[3]});
		const addressFtrHzR = accounts[2]
		const uintXqrtE6E = BigInt("1036")
		const addressNoQMfFF = "0x0000000000000000000000000000000000000000"
		const uintHfp9H9q = BigInt("801")
		const address8kEogp = accounts[3]
		const uintdo0T5M = BigInt("1517")
		const addressltUNB6x = accounts[1]
		const addressCXR5k2 = accounts[1]
		const uintR6jXMW = BigInt("796")
		const addressbN8BTTm = "0x0000000000000000000000000000000000000001"
		const addressEzFyjRS = accounts[4]
		const addressvXqbj3N = accounts[4]
		const addresskj35Vpj = accounts[3]
		const addressYIi0Y92 = accounts[1]
		const addressthh0YVX = accounts[4]
		const addressq5hmMhi = accounts[5]
		const uint256Kh2CBC8 = await FreakCoinP5nDZgl.balanceOf.call(addressFtrHzR, {from: accounts[4]});
		const boolPp3Ur8F = await FreakCoinP5nDZgl.transfer.call(addressNoQMfFF, uintXqrtE6E, {from: accounts[3]});
		const boolvrwcAj9 = await FreakCoinP5nDZgl.transfer.call(address8kEogp, uintHfp9H9q, {from: accounts[3]});
//		const boolMAKfed = await FreakCoinP5nDZgl.transferFrom.call(addressCXR5k2, addressltUNB6x, uintdo0T5M, {from: accounts[3]});
//		const boolrjtHhi = await FreakCoinP5nDZgl.approve.call(addressbN8BTTm, uintR6jXMW, {from: accounts[4]});
//		const uint256IC3iJMz = await FreakCoinP5nDZgl.allowance.call(addressvXqbj3N, addressEzFyjRS, {from: accounts[3]});
//		const uint256ir3fv9E = await FreakCoinP5nDZgl.allUserBalances.call(addresskj35Vpj, {from: accounts[1]});
//		const addressgLLZWFY = await FreakCoinP5nDZgl.setUniswapAddress.call(addressYIi0Y92, {from: accounts[2]});
//		const uint256X4QF2vA = await FreakCoinP5nDZgl.allowance.call(addressq5hmMhi, addressthh0YVX, {from: accounts[3]});

		assert.equal(boolPp3Ur8F, true)
		assert.equal(boolvrwcAj9, true)
		assert.equal(uint256Kh2CBC8, BigInt("0"))
		await expect(FreakCoinP5nDZgl.transferFrom.call(addressCXR5k2, addressltUNB6x, uintdo0T5M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinP5nDZgl = await FreakCoin.new({from: accounts[3]});
		const addresst02lGbd = accounts[2]
		const uintKuhs8yB = BigInt("1028")
		const addressketmqwH = "0x00000000000000000000000000000000000000-1"
		const addressv8PFRp9 = accounts[5]
		const addressUrwJg7R = accounts[3]
		const uintGlKzIWq = BigInt("1517")
		const addressK9A7yvv = accounts[0]
		const addressGoDycR = accounts[1]
		const addressUUUX04v = accounts[4]
		const addressXLHPt8f = accounts[4]
		const addressAXRBniP = accounts[4]
		const addressAZgW0cs = accounts[5]
		const uint256Kh2CBC8 = await FreakCoinP5nDZgl.balanceOf.call(addresst02lGbd, {from: accounts[4]});
//		const boolPp3Ur8F = await FreakCoinP5nDZgl.transfer.call(addressketmqwH, uintKuhs8yB, {from: accounts[3]});
//		const uint256qpMdAHf = await FreakCoinP5nDZgl.allowance.call(addressUrwJg7R, addressv8PFRp9, {from: accounts[1]});
//		const boolMAKfed = await FreakCoinP5nDZgl.transferFrom.call(addressGoDycR, addressK9A7yvv, uintGlKzIWq, {from: accounts[3]});
//		const uint256IC3iJMz = await FreakCoinP5nDZgl.allowance.call(addressXLHPt8f, addressUUUX04v, {from: accounts[3]});
//		const uint256X4QF2vA = await FreakCoinP5nDZgl.allowance.call(addressAZgW0cs, addressAXRBniP, {from: accounts[3]});

		assert.equal(uint256Kh2CBC8, BigInt("0"))
		await expect(FreakCoinP5nDZgl.transfer.call(addressketmqwH, uintKuhs8yB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})