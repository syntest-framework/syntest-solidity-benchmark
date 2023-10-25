const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinJ1hat95 = await EdenCoin.new({from: accounts[0]});
		const addressYdvlNuf = accounts[1]
		const addressBdsMzea = accounts[4]
		const uintC61UCQ = BigInt("419")
		const addressaSEjzI = "0x0000000000000000000000000000000000000001"
		const addressJxPGnJD = accounts[1]
		const addresst4629Q = accounts[1]
		const addressawwKIkR = accounts[3]
		const uintEXbDDeL = BigInt("842")
		const addressKqvJVW0 = "0x0000000000000000000000000000000000000001"
		const uint256zpVdtDc = await EdenCoinJ1hat95.allowance.call(addressBdsMzea, addressYdvlNuf, {from: accounts[4]});
		const boolNgw5x1 = await EdenCoinJ1hat95.increaseApproval.call(addressaSEjzI, uintC61UCQ, {from: accounts[2]});
		const uint256DBgifxt = await EdenCoinJ1hat95.allowance.call(addresst4629Q, addressJxPGnJD, {from: accounts[0]});
		const uint256VsmPhXI = await EdenCoinJ1hat95.balanceOf.call(addressawwKIkR, {from: accounts[0]});
//		const boolQA87aqI = await EdenCoinJ1hat95.transfer.call(addressKqvJVW0, uintEXbDDeL, {from: accounts[2]});

		assert.equal(boolNgw5x1, true)
		assert.equal(uint256DBgifxt, BigInt("0"))
		assert.equal(uint256VsmPhXI, BigInt("0"))
		assert.equal(uint256zpVdtDc, BigInt("0"))
		await expect(EdenCoinJ1hat95.transfer.call(addressKqvJVW0, uintEXbDDeL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBc44qfv = await EdenCoin.new({from: accounts[2]});
		const uintMtWDdVV = BigInt("3")
		const addressx7WgNvb = accounts[2]
		const addressy4LbWlO = accounts[5]
		const address12mUy8 = accounts[2]
		const addressOudln0K = accounts[1]
//		const boolCD7txzj = await EdenCoinBc44qfv.transferFrom.call(addressy4LbWlO, addressx7WgNvb, uintMtWDdVV, {from: accounts[4]});
//		const uint256hyEn4HN = await EdenCoinBc44qfv.allowance.call(addressOudln0K, address12mUy8, {from: accounts[2]});

		await expect(EdenCoinBc44qfv.transferFrom.call(addressy4LbWlO, addressx7WgNvb, uintMtWDdVV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinUlZFkxE = await EdenCoin.new({from: accounts[1]});
		const uintmBEutwb = BigInt("575")
		const addressrmURBwz = accounts[2]
		const addressdWHbLHH = accounts[1]
		const addressHPod9pG = accounts[2]
		const addressTIqkHY = accounts[0]
		const addresshyORDIR = accounts[4]
		const uintr6AZcJQ = BigInt("1798")
		const addressoj6N0x = accounts[1]
		const uintT30HbvA = BigInt("1051")
		const addressPNlKokc = accounts[1]
		const boolWt61KHu = await EdenCoinUlZFkxE.increaseApproval.call(addressrmURBwz, uintmBEutwb, {from: accounts[2]});
		const uint256rvPFsmM = await EdenCoinUlZFkxE.allowance.call(addressHPod9pG, addressdWHbLHH, {from: accounts[0]});
		const uint256Q0fnID = await EdenCoinUlZFkxE.allowance.call(addresshyORDIR, addressTIqkHY, {from: accounts[2]});
		const boolrZ9WqP = await EdenCoinUlZFkxE.approve.call(addressoj6N0x, uintr6AZcJQ, {from: accounts[5]});
		const boolhj5KLPf = await EdenCoinUlZFkxE.increaseApproval.call(addressPNlKokc, uintT30HbvA, {from: accounts[2]});

		assert.equal(boolWt61KHu, true)
		assert.equal(boolhj5KLPf, true)
		assert.equal(boolrZ9WqP, true)
		assert.equal(uint256Q0fnID, BigInt("0"))
		assert.equal(uint256rvPFsmM, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTDz8Iiz = await EdenCoin.new({from: accounts[1]});
		const addressH8hs29e = accounts[0]
		const addressngM04EG = accounts[4]
		const uintZaUxlT = BigInt("2025")
		const addressQhLi7rX = accounts[3]
		const uintH1M8Cfl = BigInt("1153")
		const addresssMjD951 = accounts[4]
		const uintfMHE2P6 = BigInt("1469")
		const addressw1MIBnR = accounts[1]
		const uintT2m54Jr = BigInt("1308")
		const addresstMLnkj = accounts[2]
		const addressnG5aHTL = accounts[0]
		const uint256uILe6EK = await EdenCoinTDz8Iiz.allowance.call(addressngM04EG, addressH8hs29e, {from: "0x0000000000000000000000000000000000000001"});
		const boolMgFIO6h = await EdenCoinTDz8Iiz.increaseApproval.call(addressQhLi7rX, uintZaUxlT, {from: accounts[1]});
		const boolH22yC0g = await EdenCoinTDz8Iiz.approve.call(addresssMjD951, uintH1M8Cfl, {from: accounts[4]});
		const booluDb9fj8 = await EdenCoinTDz8Iiz.decreaseApproval.call(addressw1MIBnR, uintfMHE2P6, {from: accounts[2]});
//		const boolVUfPeWM = await EdenCoinTDz8Iiz.transfer.call(addresstMLnkj, uintT2m54Jr, {from: accounts[0]});
//		const uint256xPH3cR = await EdenCoinTDz8Iiz.balanceOf.call(addressnG5aHTL, {from: accounts[0]});

		assert.equal(boolH22yC0g, true)
		assert.equal(boolMgFIO6h, true)
		assert.equal(booluDb9fj8, true)
		assert.equal(uint256uILe6EK, BigInt("0"))
		await expect(EdenCoinTDz8Iiz.transfer.call(addresstMLnkj, uintT2m54Jr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinU6OAkQu = await EdenCoin.new({from: accounts[2]});
		const uintQEOjAhG = BigInt("1313")
		const addressLuctTBe = accounts[1]
		const uintxrEXJKj = BigInt("194")
		const addressrk8L6XA = accounts[2]
		const addresstDQrCCc = accounts[0]
		const addressL6O3pSy = accounts[1]
		const uintVV7mTAD = BigInt("12")
		const addressO2iDI2 = accounts[0]
		const uintTyjLzmg = BigInt("851")
		const addressFubyj4l = accounts[3]
		const addressnNmIqnG = accounts[4]
		const boolXr9Jl1N = await EdenCoinU6OAkQu.transfer.call(addressLuctTBe, uintQEOjAhG, {from: accounts[2]});
		const boolwjB1sNA = await EdenCoinU6OAkQu.decreaseApproval.call(addressrk8L6XA, uintxrEXJKj, {from: accounts[2]});
		const uint256BhqM3XH = await EdenCoinU6OAkQu.allowance.call(addressL6O3pSy, addresstDQrCCc, {from: "0x0000000000000000000000000000000000000001"});
		const boolANfkg5i = await EdenCoinU6OAkQu.increaseApproval.call(addressO2iDI2, uintVV7mTAD, {from: accounts[4]});
//		const boolp7i963G = await EdenCoinU6OAkQu.transferFrom.call(addressnNmIqnG, addressFubyj4l, uintTyjLzmg, {from: accounts[0]});

		assert.equal(boolANfkg5i, true)
		assert.equal(boolXr9Jl1N, true)
		assert.equal(boolwjB1sNA, true)
		assert.equal(uint256BhqM3XH, BigInt("0"))
		await expect(EdenCoinU6OAkQu.transferFrom.call(addressnNmIqnG, addressFubyj4l, uintTyjLzmg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinGLWWQkn = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPUfg22 = BigInt("1810")
		const addressEr0QTM0 = accounts[3]
		const uintSxWviU = BigInt("792")
		const addresskNweXAF = accounts[5]
		const uinttwmtHUT = BigInt("307")
		const addresssxhxLyy = accounts[4]
		const uintCqp3g0e = BigInt("1041")
		const addressLsRRDkt = accounts[3]
		const addressTgrnts = accounts[3]
		const addressXZ7bIBM = accounts[4]
		const booloGO1HO = await EdenCoinGLWWQkn.increaseApproval.call(addressEr0QTM0, uintPUfg22, {from: accounts[2]});
		const boolxKr0cj3 = await EdenCoinGLWWQkn.approve.call(addresskNweXAF, uintSxWviU, {from: accounts[3]});
		const boolvdAerxk = await EdenCoinGLWWQkn.transfer.call(addresssxhxLyy, uinttwmtHUT, {from: accounts[4]});
		const boolxJdJeES = await EdenCoinGLWWQkn.increaseApproval.call(addressLsRRDkt, uintCqp3g0e, {from: accounts[2]});
		const uint256JqX5u8h = await EdenCoinGLWWQkn.allowance.call(addressXZ7bIBM, addressTgrnts, {from: accounts[4]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinU6OAkQu = await EdenCoin.new({from: accounts[2]});
		const uintBJGP7Mb = BigInt("1064")
		const addressE9K7IKF = "0x0000000000000000000000000000000000000001"
		const addressLGFpciX = accounts[2]
		const uintL3SVpt0 = BigInt("5")
		const addressPNlFnzb = accounts[3]
		const uintcg8l6vO = BigInt("213")
		const addressz9iuJ2v = accounts[2]
		const uintiaa8soC = BigInt("165")
		const addressbbczXF = accounts[4]
		const uintf0ffP5m = BigInt("318")
		const addressvQdLOw = accounts[4]
		const addressK4caehC = accounts[3]
//		const boolChiMbkV = await EdenCoinU6OAkQu.transferFrom.call(addressLGFpciX, addressE9K7IKF, uintBJGP7Mb, {from: accounts[4]});
//		const boolHeSAH4r = await EdenCoinU6OAkQu.decreaseApproval.call(addressPNlFnzb, uintL3SVpt0, {from: accounts[3]});
//		const boolRNXZ0KJ = await EdenCoinU6OAkQu.transfer.call(addressz9iuJ2v, uintcg8l6vO, {from: accounts[1]});
//		const boolwjB1sNA = await EdenCoinU6OAkQu.decreaseApproval.call(addressbbczXF, uintiaa8soC, {from: accounts[2]});
//		const boolEcFJfXN = await EdenCoinU6OAkQu.transferFrom.call(addressK4caehC, addressvQdLOw, uintf0ffP5m, {from: accounts[4]});

		await expect(EdenCoinU6OAkQu.transferFrom.call(addressLGFpciX, addressE9K7IKF, uintBJGP7Mb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinU6OAkQu = await EdenCoin.new({from: accounts[2]});
		const uintvn8d9uT = BigInt("0")
		const addressk5NWdT2 = accounts[4]
		const uintXVY3M86 = BigInt("1436")
		const addresse0CjCaU = accounts[2]
		const uintmDuBBNO = BigInt("658")
		const addressZreD7le = accounts[4]
		const uintZlyxVOf = BigInt("290")
		const addressgNku1Kd = accounts[3]
		const uintDFQHZJT = BigInt("318")
		const addresstqrfXgm = accounts[4]
		const addressWK2xCT = accounts[3]
		const boolHeSAH4r = await EdenCoinU6OAkQu.decreaseApproval.call(addressk5NWdT2, uintvn8d9uT, {from: accounts[3]});
		const boolK17xDEF = await EdenCoinU6OAkQu.increaseApproval.call(addresse0CjCaU, uintXVY3M86, {from: accounts[4]});
//		const booli20qZ3l = await EdenCoinU6OAkQu.transfer.call(addressZreD7le, uintmDuBBNO, {from: accounts[1]});
//		const boolXTYlhkP = await EdenCoinU6OAkQu.increaseApproval.call(addressgNku1Kd, uintZlyxVOf, {from: accounts[3]});
//		const boolEcFJfXN = await EdenCoinU6OAkQu.transferFrom.call(addressWK2xCT, addresstqrfXgm, uintDFQHZJT, {from: accounts[4]});

		assert.equal(boolHeSAH4r, true)
		assert.equal(boolK17xDEF, true)
		await expect(EdenCoinU6OAkQu.transfer.call(addressZreD7le, uintmDuBBNO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})