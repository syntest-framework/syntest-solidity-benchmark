const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsK5GyUd = await UFragments.new({from: accounts[2]});
		const uintbVajcaG = BigInt("247")
		const stringnvS7nYj = "cB3OISzdIPIt8ZNMCYNjTpCvRU"
		const string5vOE4g = "83DEDtenX4uxyCHnU2hFswPoK"
		await UFragmentsK5GyUd.onlyOwner.call({from: accounts[1]});
		const uint256PeK48s = await UFragmentsK5GyUd.totalSupply.call({from: accounts[4]});
		const stringRON9jW = await UFragmentsK5GyUd.initialize.call(string5vOE4g, stringnvS7nYj, uintbVajcaG, {from: accounts[5]});
		const stringjNciBR = await UFragmentsK5GyUd.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsK5GyUd.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsE4marm = await UFragments.new({from: accounts[0]});
		const uintQs7hjq8 = BigInt("133")
		const stringxrYDCQn = "qgRSL38Ftn1p"
		const stringkXbJ8vC = "uIUv9y9BNDXbOPkodtnCM"
		const uintUZE2fy0 = BigInt("1413")
		const addressSxBJ9zw = accounts[1]
		const addressIdWSoc = accounts[0]
		const uintPj2cznW = BigInt("1897")
		const addressOoxcMdf = accounts[4]
		const stringZJT09Ri = await UFragmentsE4marm.initialize.call(stringkXbJ8vC, stringxrYDCQn, uintQs7hjq8, {from: accounts[5]});
		const boolLzIxbOl = await UFragmentsE4marm.transferFrom.call(addressIdWSoc, addressSxBJ9zw, uintUZE2fy0, {from: accounts[1]});
		const addressMfMda3j = await UFragmentsE4marm.initRebase.call(addressOoxcMdf, uintPj2cznW, {from: accounts[2]});

		await expect(UFragmentsE4marm.transferFrom.call(addressIdWSoc, addressSxBJ9zw, uintUZE2fy0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsl0AiZRi = await UFragments.new({from: accounts[4]});
		const uintsokvX8Z = BigInt("1469")
		const addressn5jzeh2 = accounts[3]
		const inthwBcWQO = BigInt("-1429")
		const intpPr7Ra = BigInt("982")
		const addressZCU2yJ5 = accounts[0]
		const addressx7OL0CV = accounts[1]
		const uintX6eueN9 = BigInt("901")
		const addressdhwNzyU = accounts[1]
		const address5Sm3vu = accounts[3]
		const addressfYSu5Wj = await UFragmentsl0AiZRi.initRebase.call(addressn5jzeh2, uintsokvX8Z, {from: accounts[2]});
		const int2561OA5cZ = await UFragmentsl0AiZRi.mul.call(intpPr7Ra, inthwBcWQO, {from: accounts[3]});
		const uint256Gf2yJ4t = await UFragmentsl0AiZRi.allowance.call(addressx7OL0CV, addressZCU2yJ5, {from: accounts[3]});
		const boolxGrXwtj = await UFragmentsl0AiZRi.transferFrom.call(address5Sm3vu, addressdhwNzyU, uintX6eueN9, {from: accounts[0]});

		await expect(UFragmentsl0AiZRi.initRebase.call(addressn5jzeh2, uintsokvX8Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsOjeuBgi = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrBSDseP = BigInt("597")
		const addressao19p2A = accounts[0]
		const boolF1YFf8 = await UFragmentsOjeuBgi.transfer.call(addressao19p2A, uintrBSDseP, {from: accounts[4]});
		const stringAN5xS1x = await UFragmentsOjeuBgi.symbol.call({from: accounts[2]});
	});

	it('test for UFragments', async () => {
		const UFragmentsRErmkrn = await UFragments.new({from: accounts[5]});
		const intJlvBLrB = BigInt("1956")
		const intPW7OyOY = BigInt("-388")
		const addresswNHLiyP = accounts[5]
		const uint8kj5EUjo = await UFragmentsRErmkrn.decimals.call({from: accounts[3]});
		const int256cWz1iyp = await UFragmentsRErmkrn.add.call(intPW7OyOY, intJlvBLrB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256abtG0E = await UFragmentsRErmkrn.calRebase.call({from: accounts[5]});
		const uint256dt3f1Nw = await UFragmentsRErmkrn.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fulyvfi = await UFragmentsRErmkrn.balanceOf.call(addresswNHLiyP, {from: accounts[5]});

		assert.equal(uint8kj5EUjo, BigInt("0"))
		await expect(UFragmentsRErmkrn.add.call(intPW7OyOY, intJlvBLrB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsye8jMF7 = await UFragments.new({from: accounts[2]});
		const addressgW3qyMq = accounts[0]
		const addresski3dVGw = accounts[5]
		const uinthIQ9tpt = BigInt("421")
		const addressdken4WI = accounts[3]
		const addresskoMQZOJ = await UFragmentsye8jMF7.initialize.call(addressgW3qyMq, {from: accounts[4]});
		const uint256Oujdpuw = await UFragmentsye8jMF7.balanceOf.call(addresski3dVGw, {from: accounts[1]});
		const uint2563ZiLxN = await UFragmentsye8jMF7.calRebase.call({from: accounts[4]});
		const bool67m5t6 = await UFragmentsye8jMF7.approve.call(addressdken4WI, uinthIQ9tpt, {from: accounts[1]});

		await expect(UFragmentsye8jMF7.initialize.call(addressgW3qyMq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsm5XMFzH = await UFragments.new({from: accounts[5]});
		const addressZQM6bmR = accounts[0]
		const addressltLCfpH = accounts[1]
		const addressmOwjSpT = await UFragmentsm5XMFzH.owner.call({from: accounts[0]});
		const uint256f4bKyc = await UFragmentsm5XMFzH.allowance.call(addressltLCfpH, addressZQM6bmR, {from: accounts[4]});
		const boolGFObgOD = await UFragmentsm5XMFzH.isOwner.call({from: accounts[1]});

		assert.equal(addressmOwjSpT, 0x0000000000000000000000000000000000000000)
		assert.equal(boolGFObgOD, false)
		assert.equal(uint256f4bKyc, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsmEg8kDU = await UFragments.new({from: accounts[3]});
		const intK0o2koY = BigInt("1592")
		const intc23mjk = BigInt("-1678")
		const uint256R5JZG4g = await UFragmentsmEg8kDU.totalSupply.call({from: accounts[5]});
		const int256rhJXGxY = await UFragmentsmEg8kDU.div.call(intc23mjk, intK0o2koY, {from: accounts[3]});
		await UFragmentsmEg8kDU.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256R5JZG4g, BigInt("0"))
		await expect(UFragmentsmEg8kDU.div.call(intc23mjk, intK0o2koY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsK5GyUd = await UFragments.new({from: accounts[2]});
		const uintsm55LxD = BigInt("247")
		const stringnvS7nYj = "cB3OISzdIPIt8ZNMCYNjTpCvRU"
		const string5vOE4g = "83DEDtenX4uxyCHnU2hFswPoK"
		const uintZTfbc2T = BigInt("44")
		const stringhiX2JxE = "brVRBCuJWVhyFFeeIksGSaY6tgNs3YQxjVlYElc9cCFOkw"
		const stringojWdzDP = "Ck53UoJhm"
		const uint256PeK48s = await UFragmentsK5GyUd.totalSupply.call({from: accounts[4]});
		const boolXLVYwTI = await UFragmentsK5GyUd.isOwner.call({from: accounts[4]});
		const stringRON9jW = await UFragmentsK5GyUd.initialize.call(string5vOE4g, stringnvS7nYj, uintsm55LxD, {from: accounts[5]});
		const stringeAC921F = await UFragmentsK5GyUd.initialize.call(stringojWdzDP, stringhiX2JxE, uintZTfbc2T, {from: accounts[1]});
		const stringjNciBR = await UFragmentsK5GyUd.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXLVYwTI, false)
		assert.equal(stringjNciBR, "")
		assert.equal(uint256PeK48s, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentskXYxcxD = await UFragments.new({from: accounts[1]});
		const addressMsoWG61 = accounts[4]
		const uint256RAPwHe6 = await UFragmentskXYxcxD.totalSupply.call({from: accounts[1]});
		const stringAoLpOVH = await UFragmentskXYxcxD.symbol.call({from: accounts[4]});
		const addressULTIk8q = await UFragmentskXYxcxD.initialize.call(addressMsoWG61, {from: accounts[3]});

		assert.equal(stringAoLpOVH, "")
		assert.equal(uint256RAPwHe6, BigInt("0"))
		await expect(UFragmentskXYxcxD.initialize.call(addressMsoWG61, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmEg8kDU = await UFragments.new({from: accounts[3]});
		const addressMIk1c1W = accounts[5]
		const intInZw55T = BigInt("1561")
		const intQjY31G7 = BigInt("-1678")
		const uint256lpibssv = await UFragmentsmEg8kDU.balanceOf.call(addressMIk1c1W, {from: accounts[1]});
		const int256rhJXGxY = await UFragmentsmEg8kDU.div.call(intQjY31G7, intInZw55T, {from: accounts[3]});

		assert.equal(uint256lpibssv, BigInt("0"))
		await expect(UFragmentsmEg8kDU.div.call(intQjY31G7, intInZw55T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmEg8kDU = await UFragments.new({from: accounts[3]});
		const addressyEBlU5 = accounts[6]
		const intrl3MVI = BigInt("1561")
		const intp6QqBdQ = BigInt("-1678")
		const uint256lpibssv = await UFragmentsmEg8kDU.balanceOf.call(addressyEBlU5, {from: accounts[1]});
		const boolKAflUhL = await UFragmentsmEg8kDU.rebaseTimeInfo.call({from: accounts[0]});
		const int256rhJXGxY = await UFragmentsmEg8kDU.div.call(intp6QqBdQ, intrl3MVI, {from: accounts[3]});

		assert.equal(uint256lpibssv, BigInt("0"))
		await expect(UFragmentsmEg8kDU.div.call(intp6QqBdQ, intrl3MVI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsRBAqAuh = await UFragments.new({from: accounts[1]});
		const addresst3xMwPM = accounts[0]
		const addressmNGrRzg = accounts[3]
		const uintxBoOEcA = BigInt("161")
		const addressukq9K7O = accounts[3]
		const uintlbJZaCy = BigInt("25")
		const addresspsUP0sI = accounts[2]
		const addressZUrHHbc = accounts[3]
		const uint256mqZYGC3 = await UFragmentsRBAqAuh.balanceOf.call(addresst3xMwPM, {from: accounts[2]});
		const uint256ZRAb8Ia = await UFragmentsRBAqAuh.balanceOf.call(addressmNGrRzg, {from: accounts[4]});
		const uint256OnzGeQ0 = await UFragmentsRBAqAuh.totalSupply.call({from: accounts[3]});
		const boolXu3bfJ5 = await UFragmentsRBAqAuh.transfer.call(addressukq9K7O, uintxBoOEcA, {from: accounts[5]});
		const bool8cyZrH = await UFragmentsRBAqAuh.transferFrom.call(addressZUrHHbc, addresspsUP0sI, uintlbJZaCy, {from: accounts[3]});

		assert.equal(uint256OnzGeQ0, BigInt("0"))
		assert.equal(uint256ZRAb8Ia, BigInt("0"))
		assert.equal(uint256mqZYGC3, BigInt("0"))
		await expect(UFragmentsRBAqAuh.transfer.call(addressukq9K7O, uintxBoOEcA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsRBAqAuh = await UFragments.new({from: accounts[1]});
		const addresstYxuYDy = accounts[0]
		const addressQagSzNo = accounts[4]
		const uintCWmQuYp = BigInt("163")
		const addressF5Bsa7u = accounts[3]
		const uint256mqZYGC3 = await UFragmentsRBAqAuh.balanceOf.call(addresstYxuYDy, {from: accounts[2]});
		const uint256wdSmXMk = await UFragmentsRBAqAuh.calRebase.call({from: accounts[2]});
		const boolotMmM7r = await UFragmentsRBAqAuh.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZRAb8Ia = await UFragmentsRBAqAuh.balanceOf.call(addressQagSzNo, {from: accounts[4]});
		const uint256OnzGeQ0 = await UFragmentsRBAqAuh.totalSupply.call({from: accounts[3]});
		const boolXu3bfJ5 = await UFragmentsRBAqAuh.transfer.call(addressF5Bsa7u, uintCWmQuYp, {from: accounts[5]});

		assert.equal(uint256mqZYGC3, BigInt("0"))
		await expect(UFragmentsRBAqAuh.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswP2FHoZ = await UFragments.new({from: accounts[4]});
		const uintxHXQgmC = BigInt("1458")
		const addressJmY3gZc = "0x0000000000000000000000000000000000000001"
		const intus0qsM = BigInt("1742")
		const intsSUwJtK = BigInt("-886")
		const addressdaK8TZ3 = accounts[1]
		const intAA4uFQX = BigInt("-669")
		const intTpZLjU = BigInt("1812")
		const intFtMvUvE = BigInt("358")
		const intNgc8rKy = BigInt("-1319")
		const bool5yDjQf = await UFragmentswP2FHoZ.approve.call(addressJmY3gZc, uintxHXQgmC, {from: "0x0000000000000000000000000000000000000001"});
		const int256ev2lNw = await UFragmentswP2FHoZ.add.call(intsSUwJtK, intus0qsM, {from: accounts[5]});
		const addressx6mzkeo = await UFragmentswP2FHoZ.transferOwnership.call(addressdaK8TZ3, {from: "0x0000000000000000000000000000000000000001"});
		const int256DzgLe5S = await UFragmentswP2FHoZ.mul.call(intTpZLjU, intAA4uFQX, {from: accounts[0]});
		const int256YgmosE = await UFragmentswP2FHoZ.div.call(intNgc8rKy, intFtMvUvE, {from: accounts[4]});
		const stringl62mpoA = await UFragmentswP2FHoZ.symbol.call({from: accounts[3]});

		assert.equal(bool5yDjQf, true)
		await expect(UFragmentswP2FHoZ.add.call(intsSUwJtK, intus0qsM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})