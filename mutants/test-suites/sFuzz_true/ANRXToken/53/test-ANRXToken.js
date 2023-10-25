const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintAVy7y6u = BigInt("606")
		const stringOWUp8oC = "kGi28wT4mNRULdDMGKynH5Z163XukJmpjENMHRp5k2jO4VHgTuGNennACqPBjYI5nFYU"
		const stringnZFw7or = "fwzatV0Chxkx4EWVMTNNA14TSnM8NYnFyP6qzj0lywBqUIIySzKFYz6CbskevJiBj2UYcEtj7283GR7GSjaD4dI"
		const uintFkC6zIa = BigInt("1987")
		const ANRXTokenjpOOVo = await ANRXToken.new(uintAVy7y6u, stringOWUp8oC, stringnZFw7or, uintFkC6zIa, {from: "0x0000000000000000000000000000000000000001"});
		const addressDYmxRG = accounts[0]
		const addressnqUusp = accounts[3]
		const addresseIwZeMT = accounts[2]
		const uint3Y0Qdx = BigInt("1041")
		const addressbL29uKc = "0x0000000000000000000000000000000000000001"
		const addressX2SROmJ = accounts[2]
		const uintCkC1qS9 = BigInt("435")
		const uintsGsY5g0 = BigInt("1630")
		const uintl7l2Gc8 = await ANRXTokenjpOOVo.allowance.call(addressnqUusp, addressDYmxRG, {from: accounts[0]});
		const uintty8XeMc = await ANRXTokenjpOOVo.balanceOf.call(addresseIwZeMT, {from: accounts[1]});
		const boolOmqrWDk = await ANRXTokenjpOOVo.approve.call(addressbL29uKc, uint3Y0Qdx, {from: accounts[1]});
		const addressmQH8kkS = await ANRXTokenjpOOVo.deprecate.call(addressX2SROmJ, {from: accounts[5]});
		const uintd0z1Ed = await ANRXTokenjpOOVo.setParams.call(uintsGsY5g0, uintCkC1qS9, {from: accounts[5]});
	});

	it('test for ANRXToken', async () => {
		const uintw67Xz3J = BigInt("467")
		const stringy4w4iNA = "1ySlp84ySCTMAnDO8K"
		const stringj3psOYy = "Jp4Ow3s5ECROOyF"
		const uintYnRyPj1 = BigInt("657")
		const ANRXTokenC09cFRp = await ANRXToken.new(uintw67Xz3J, stringy4w4iNA, stringj3psOYy, uintYnRyPj1, {from: accounts[5]});
		const uintzP60CH6 = BigInt("1237")
		const addressHGmCeoV = accounts[1]
		const addressnpFoHD = accounts[3]
		const uintUZFKeb = BigInt("776")
		const addressSouKxfA = accounts[2]
		const uintXrCZp3 = BigInt("467")
		const addressVr6ITj5 = accounts[5]
		const addressfYl3Ora = accounts[0]
//		const booliLoQNEl = await ANRXTokenC09cFRp.transferFrom.call(addressnpFoHD, addressHGmCeoV, uintzP60CH6, {from: accounts[4]});
//		const boolUgB1rgo = await ANRXTokenC09cFRp.transfer.call(addressSouKxfA, uintUZFKeb, {from: accounts[4]});
//		const boolUMwQqI0 = await ANRXTokenC09cFRp.transferFrom.call(addressfYl3Ora, addressVr6ITj5, uintXrCZp3, {from: accounts[0]});

		await expect(ANRXTokenC09cFRp.transferFrom.call(addressnpFoHD, addressHGmCeoV, uintzP60CH6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintq1W4nNR = BigInt("1872")
		const stringbxWAFMG = "RQRHhJGSFVeKL28B6nAMeWITKz3nozVZPyCivB2VsIykintGCYMge8sslngo2ildDJGYcqF1u1SdItdLBFBvx4clcCBmD"
		const stringeassr6U = "55AsLkMk6KgaBWk2Fx88tN5mOS6dssVyEVv6ugYthGi983IgUzcKa"
		const uint7JSITc = BigInt("519")
		const ANRXTokenhOoWge3 = await ANRXToken.new(uintq1W4nNR, stringbxWAFMG, stringeassr6U, uint7JSITc, {from: accounts[2]});
		const addresszpYTiR2 = accounts[2]
		const addressQgQHO7X = accounts[4]
		const uintVzNmuiU = await ANRXTokenhOoWge3.allowance.call(addressQgQHO7X, addresszpYTiR2, {from: accounts[3]});
		const uintGQyo3y5 = await ANRXTokenhOoWge3.totalSupply.call({from: accounts[3]});

		assert.equal(uintGQyo3y5, BigInt("1872"))
		assert.equal(uintVzNmuiU, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintsacbx0v = BigInt("1269")
		const stringdJARKZb = "pxVsnAPtt"
		const stringFxWVb0g = "P9yfq6rzu8X1nDvFSqNusNjcKxazQYTMEwAXoFwHVQueEcVzQRGiXf"
		const uintGSQhk56 = BigInt("1684")
		const ANRXToken7ZZ91i = await ANRXToken.new(uintsacbx0v, stringdJARKZb, stringFxWVb0g, uintGSQhk56, {from: accounts[4]});
		const addressCxJZjhZ = accounts[3]
		const addressnrh8PvA = accounts[5]
		const uintQPgytki = BigInt("1104")
		const addressB9uFy7 = accounts[1]
		const addresszrjvLpS = accounts[0]
		const uintUnQvj92 = await ANRXToken7ZZ91i.totalSupply.call({from: accounts[1]});
		const uintSjGNvyD = await ANRXToken7ZZ91i.allowance.call(addressnrh8PvA, addressCxJZjhZ, {from: accounts[0]});
//		const uintXYyYd2m = await ANRXToken7ZZ91i.issue.call(uintQPgytki, {from: accounts[2]});
//		const uintCf5SY6j = await ANRXToken7ZZ91i.allowance.call(addresszrjvLpS, addressB9uFy7, {from: accounts[3]});

		assert.equal(uintSjGNvyD, BigInt("0"))
		assert.equal(uintUnQvj92, BigInt("1269"))
		await expect(ANRXToken7ZZ91i.issue.call(uintQPgytki, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintVjstDwF = BigInt("467")
		const stringy4w4iNA = "1ySlp84ySCTMAnDO8K"
		const stringj3psOYy = "Jp4Ow3s5ECROOyF"
		const uintM7zQRKH = BigInt("657")
		const ANRXTokenC09cFRp = await ANRXToken.new(uintVjstDwF, stringy4w4iNA, stringj3psOYy, uintM7zQRKH, {from: accounts[5]});
		const addresseEPX1Pj = accounts[2]
		const addressNjyrKX = accounts[4]
		const uintlfkLuuZ = BigInt("2021")
		const addressqr5ZQYI = accounts[3]
		const uintM1JTAaX = BigInt("782")
		const addressoK48ER1 = accounts[3]
		const addressmQPus4 = accounts[4]
		const uintSVIAlMO = BigInt("1237")
		const addressDkn4o8 = accounts[1]
		const address0XPpl9 = accounts[3]
		const uintRy4S0e = BigInt("467")
		const addressF2zH1Iw = accounts[5]
		const addressU1GELYR = accounts[0]
		const uintujjnZFm = await ANRXTokenC09cFRp.allowance.call(addressNjyrKX, addresseEPX1Pj, {from: accounts[3]});
		const boolGfhPzFU = await ANRXTokenC09cFRp.approve.call(addressqr5ZQYI, uintlfkLuuZ, {from: accounts[0]});
//		const boolfzzLFD1 = await ANRXTokenC09cFRp.transferFrom.call(addressmQPus4, addressoK48ER1, uintM1JTAaX, {from: accounts[1]});
//		const booliLoQNEl = await ANRXTokenC09cFRp.transferFrom.call(address0XPpl9, addressDkn4o8, uintSVIAlMO, {from: accounts[4]});
//		const boolUMwQqI0 = await ANRXTokenC09cFRp.transferFrom.call(addressU1GELYR, addressF2zH1Iw, uintRy4S0e, {from: accounts[0]});

		assert.equal(boolGfhPzFU, true)
		assert.equal(uintujjnZFm, BigInt("0"))
		await expect(ANRXTokenC09cFRp.transferFrom.call(addressmQPus4, addressoK48ER1, uintM1JTAaX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintY2OX9Qg = BigInt("467")
		const stringy4w4iNA = "1ySlp84ySCTMAnDO8K"
		const stringj3psOYy = "Jp4Ow3s5ECROOyF"
		const uintKXzIvDt = BigInt("657")
		const ANRXTokenC09cFRp = await ANRXToken.new(uintY2OX9Qg, stringy4w4iNA, stringj3psOYy, uintKXzIvDt, {from: accounts[5]});
		const addressXMaVPLv = accounts[0]
		const addressLGIddlq = accounts[2]
		const addressG3WPvs = accounts[4]
		const uintn6Gmcc7 = BigInt("782")
		const addressJyr75NR = accounts[3]
		const addressWQQayIA = accounts[4]
		const addressRGD9tP0 = accounts[1]
		const addressEfvzj68 = accounts[1]
		const uintmIk9j64 = BigInt("1237")
		const addressP1pEoNK = accounts[1]
		const addressgdmxX35 = accounts[3]
		const uintM0Ft6M4 = BigInt("467")
		const address4wiYqL = accounts[5]
		const addressRJeIyFe = accounts[0]
		const uinteQGl3zx = await ANRXTokenC09cFRp.balanceOf.call(addressXMaVPLv, {from: accounts[1]});
		const uintujjnZFm = await ANRXTokenC09cFRp.allowance.call(addressG3WPvs, addressLGIddlq, {from: accounts[3]});
//		const boolfzzLFD1 = await ANRXTokenC09cFRp.transferFrom.call(addressWQQayIA, addressJyr75NR, uintn6Gmcc7, {from: accounts[1]});
//		const uinta3eyyX9 = await ANRXTokenC09cFRp.allowance.call(addressEfvzj68, addressRGD9tP0, {from: accounts[4]});
//		const booliLoQNEl = await ANRXTokenC09cFRp.transferFrom.call(addressgdmxX35, addressP1pEoNK, uintmIk9j64, {from: accounts[4]});
//		const boolUMwQqI0 = await ANRXTokenC09cFRp.transferFrom.call(addressRJeIyFe, address4wiYqL, uintM0Ft6M4, {from: accounts[0]});

		assert.equal(uinteQGl3zx, BigInt("0"))
		assert.equal(uintujjnZFm, BigInt("0"))
		await expect(ANRXTokenC09cFRp.transferFrom.call(addressWQQayIA, addressJyr75NR, uintn6Gmcc7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintjnGksu2 = BigInt("1872")
		const stringbxWAFMG = "RQRHhJGSFVeKL28B6nAMeWITKz3nozVZPyCivB2VsIykintGCYMge8sslngo2ildDJGYcqF1u1SdItdLBFBvx4clcCBmD"
		const stringeassr6U = "55AsLkMk6KgaBWk2Fx88tN5mOS6dssVyEVv6ugYthGi983IgUzcKa"
		const uintu1KKYtA = BigInt("519")
		const ANRXTokenhOoWge3 = await ANRXToken.new(uintjnGksu2, stringbxWAFMG, stringeassr6U, uintu1KKYtA, {from: accounts[2]});
		const uintrhlt0ua = BigInt("705")
		const uintIDO34cp = BigInt("1188")
		const uintyQcidn4 = await ANRXTokenhOoWge3.issue.call(uintrhlt0ua, {from: accounts[2]});
		const uintGQyo3y5 = await ANRXTokenhOoWge3.totalSupply.call({from: accounts[3]});
		const uintzualGBB = await ANRXTokenhOoWge3.issue.call(uintIDO34cp, {from: accounts[2]});

		assert.equal(uintGQyo3y5, BigInt("1872"))
	});

	it('test for ANRXToken', async () => {
		const uintqv7Zytq = BigInt("467")
		const stringy4w4iNA = "1ySlp84ySCTMAnDO8K"
		const stringj3psOYy = "Jp4Ow3s5ECROOyF"
		const uintnSYJUGx = BigInt("657")
		const ANRXTokenC09cFRp = await ANRXToken.new(uintqv7Zytq, stringy4w4iNA, stringj3psOYy, uintnSYJUGx, {from: accounts[5]});
		const uintcqcv8Ky = BigInt("190")
		const addressz5DoOy = accounts[4]
		const uintAibqPPB = BigInt("358")
		const addressHhgIxel = accounts[4]
		const uinttmg6hgA = await ANRXTokenC09cFRp.totalSupply.call({from: accounts[3]});
//		const boolsCZHNKO = await ANRXTokenC09cFRp.transfer.call(addressz5DoOy, uintcqcv8Ky, {from: accounts[4]});
//		const boolHq0NwCC = await ANRXTokenC09cFRp.approve.call(addressHhgIxel, uintAibqPPB, {from: accounts[1]});

		assert.equal(uinttmg6hgA, BigInt("467"))
		await expect(ANRXTokenC09cFRp.transfer.call(addressz5DoOy, uintcqcv8Ky, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintAYU2vFT = BigInt("1872")
		const stringbxWAFMG = "RQRHhJGSFVeKL28B6nAMeWITKz3nozVZPyCivB2VsIykintGCYMge8sslngo2ildDJGYcqF1u1SdItdLBFBvx4clcCBmD"
		const stringeassr6U = "55AsLkMk6KgaBWk2Fx88tN5mOS6dssVyEVv6ugYthGi983IgUzcKa"
		const uintUB5dW8G = BigInt("519")
		const ANRXTokenhOoWge3 = await ANRXToken.new(uintAYU2vFT, stringbxWAFMG, stringeassr6U, uintUB5dW8G, {from: accounts[2]});
		const addressQMSsgsl = accounts[2]
		const addressN7otx7R = accounts[5]
		const uintVGLODi = BigInt("659")
		const uintVzNmuiU = await ANRXTokenhOoWge3.allowance.call(addressN7otx7R, addressQMSsgsl, {from: accounts[3]});
		const uintQD7KGHa = await ANRXTokenhOoWge3.redeem.call(uintVGLODi, {from: accounts[2]});

		assert.equal(uintVzNmuiU, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintcW9cfj4 = BigInt("1872")
		const stringbxWAFMG = "RQRHhJGSFVeKL28B6nAMeWITKz3nozVZPyCivB2VsIykintGCYMge8sslngo2ildDJGYcqF1u1SdItdLBFBvx4clcCBmD"
		const stringeassr6U = "55AsLkMk6KgaBWk2Fx88tN5mOS6dssVyEVv6ugYthGi983IgUzcKa"
		const uintsfQIlDc = BigInt("519")
		const ANRXTokenhOoWge3 = await ANRXToken.new(uintcW9cfj4, stringbxWAFMG, stringeassr6U, uintsfQIlDc, {from: accounts[2]});
		const uintFBR37Fq = BigInt("142")
		const uintBfZ0BZz = BigInt("1448")
		const address2q0Y90 = accounts[2]
		const addresso2rDkaQ = accounts[5]
//		const uintC3I2GJs = await ANRXTokenhOoWge3.setParams.call(uintBfZ0BZz, uintFBR37Fq, {from: accounts[2]});
//		const uintVzNmuiU = await ANRXTokenhOoWge3.allowance.call(addresso2rDkaQ, address2q0Y90, {from: accounts[3]});

		await expect(ANRXTokenhOoWge3.setParams.call(uintBfZ0BZz, uintFBR37Fq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintnCKHTHc = BigInt("1794")
		const stringuv6LT8Z = "oRNRpibRae7npjvCxBRj1vOTWjhZupSkrroEPrBomRjpLKXIFbbcqWqN"
		const stringM93qKl1 = "vAuPNKSdAR0G8ncDSHZxfAsKP4RT"
		const uintoEqMVz = BigInt("725")
		const ANRXTokenM5OzP4B = await ANRXToken.new(uintnCKHTHc, stringuv6LT8Z, stringM93qKl1, uintoEqMVz, {from: accounts[3]});
		const addressy5RVbvJ = accounts[2]
		const addressAFtaiJQ = accounts[5]
		const addressCFeczV6 = accounts[5]
		const addressIISRzR1 = await ANRXTokenM5OzP4B.deprecate.call(addressy5RVbvJ, {from: accounts[3]});
		const uintxiz2Z3T = await ANRXTokenM5OzP4B.allowance.call(addressCFeczV6, addressAFtaiJQ, {from: accounts[0]});

		assert.equal(uintxiz2Z3T, BigInt("0"))
	});
})