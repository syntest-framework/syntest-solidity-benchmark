const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinfFVbnVl = await FreakCoin.new({from: accounts[2]});
		const uintEiedAVZ = BigInt("1770")
		const addressTXL09ZK = accounts[3]
		const boold42U2cu = await FreakCoinfFVbnVl.approve.call(addressTXL09ZK, uintEiedAVZ, {from: accounts[0]});
		const addressgckCma0 = await FreakCoinfFVbnVl.uniswapAddress.call({from: accounts[1]});

		assert.equal(addressgckCma0, 0x0000000000000000000000000000000000000000)
		assert.equal(boold42U2cu, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfaJjiz3 = await FreakCoin.new({from: accounts[1]});
		const addresstlCJuX = accounts[3]
		const uintpQu5geY = BigInt("1920")
		const addressSV3pt7 = accounts[1]
		const uintNnoBZrd = BigInt("1208")
		const address4q0baH = accounts[4]
		const addressP2yzSWZ = accounts[4]
		const uintE7E0a8U = BigInt("1220")
		const addressfi8jeza = accounts[4]
		const addressGbCo64M = accounts[4]
		const addressI1bJ2vA = await FreakCoinfaJjiz3.setUniswapAddress.call(addresstlCJuX, {from: accounts[5]});
		const boolnAg8DI = await FreakCoinfaJjiz3.approve.call(addressSV3pt7, uintpQu5geY, {from: accounts[3]});
		const boolzWst7Dk = await FreakCoinfaJjiz3.transfer.call(address4q0baH, uintNnoBZrd, {from: accounts[0]});
		const uint256VfvFQ3b = await FreakCoinfaJjiz3.balanceOf.call(addressP2yzSWZ, {from: accounts[1]});
		const booleO28PT8 = await FreakCoinfaJjiz3.approve.call(addressfi8jeza, uintE7E0a8U, {from: accounts[4]});
		const uint256asHoXfk = await FreakCoinfaJjiz3.allUserBalances.call(addressGbCo64M, {from: accounts[1]});

		await expect(FreakCoinfaJjiz3.setUniswapAddress.call(addresstlCJuX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinb85Q326 = await FreakCoin.new({from: accounts[2]});
		const addressBbpveZJ = accounts[5]
		const addressSbU1FrR = accounts[3]
		const uint4PRfeb = BigInt("399")
		const addressF3la4le = "0x0000000000000000000000000000000000000001"
		const uintdTcqgU3 = BigInt("1930")
		const addressZqa5iVB = accounts[0]
		const addressfPmUX22 = accounts[0]
		const addresstTsdLi0 = await FreakCoinb85Q326.uniswapAddress.call({from: accounts[5]});
		const uint256ix3mfJQ = await FreakCoinb85Q326.allUserBalances.call(addressBbpveZJ, {from: accounts[0]});
		const uint256rgAC6xd = await FreakCoinb85Q326.balanceOf.call(addressSbU1FrR, {from: accounts[1]});
		const boolQdwvDOK = await FreakCoinb85Q326.transfer.call(addressF3la4le, uint4PRfeb, {from: accounts[5]});
		const boolKBOEVM = await FreakCoinb85Q326.transferFrom.call(addressfPmUX22, addressZqa5iVB, uintdTcqgU3, {from: accounts[1]});

		assert.equal(addresstTsdLi0, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinb85Q326.allUserBalances.call(addressBbpveZJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzvVl4K6 = await FreakCoin.new({from: accounts[2]});
		const uintKTE7n3V = BigInt("809")
		const addressMjHhQ4Y = "0x0000000000000000000000000000000000000001"
		const addressipjQnD = accounts[0]
		const uint14d1J0 = BigInt("382")
		const addresserAfq5K = accounts[1]
		const boolEbecmNc = await FreakCoinzvVl4K6.transfer.call(addressMjHhQ4Y, uintKTE7n3V, {from: accounts[4]});
		const uint256RGM1YmM = await FreakCoinzvVl4K6.balanceOf.call(addressipjQnD, {from: accounts[2]});
		const addressvaBKNAG = await FreakCoinzvVl4K6.uniswapAddress.call({from: accounts[5]});
		const boolcaox3zc = await FreakCoinzvVl4K6.approve.call(addresserAfq5K, uint14d1J0, {from: accounts[0]});

		await expect(FreakCoinzvVl4K6.transfer.call(addressMjHhQ4Y, uintKTE7n3V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinFWzcDvD = await FreakCoin.new({from: accounts[0]});
		const addressRkw6Mlr = accounts[4]
		const addressBTJyzJA = accounts[1]
		const addressG5psyX = accounts[0]
		const uintX5e1BMg = BigInt("1435")
		const addressrTH5qqK = accounts[1]
		const uint256oEMMhJG = await FreakCoinFWzcDvD.totalSupply.call({from: accounts[4]});
		const addressziiLjmC = await FreakCoinFWzcDvD.uniswapAddress.call({from: accounts[1]});
		const uint256YQ9pddL = await FreakCoinFWzcDvD.allowance.call(addressBTJyzJA, addressRkw6Mlr, {from: accounts[3]});
		const addresssdRJ58 = await FreakCoinFWzcDvD.uniswapAddress.call({from: accounts[0]});
		const uint2568YzGKt = await FreakCoinFWzcDvD.balanceOf.call(addressG5psyX, {from: accounts[0]});
		const boolURoz6xH = await FreakCoinFWzcDvD.approve.call(addressrTH5qqK, uintX5e1BMg, {from: accounts[1]});

		assert.equal(addresssdRJ58, 0x0000000000000000000000000000000000000000)
		assert.equal(addressziiLjmC, 0x0000000000000000000000000000000000000000)
		assert.equal(boolURoz6xH, true)
		assert.equal(uint2568YzGKt, BigInt("1000000"))
		assert.equal(uint256YQ9pddL, BigInt("0"))
		assert.equal(uint256oEMMhJG, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnnR2Spt = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZYZmb8F = BigInt("880")
		const addresse7Zq6Eg = accounts[3]
		const addressfQmTaC4 = accounts[1]
		const addressZ3YdDPo = accounts[1]
		const uint256tRPAEon = await FreakCoinnnR2Spt.totalSupply.call({from: accounts[0]});
		const boolCYL8lZs = await FreakCoinnnR2Spt.transferFrom.call(addressfQmTaC4, addresse7Zq6Eg, uintZYZmb8F, {from: accounts[3]});
		const addressCMRPCYZ = await FreakCoinnnR2Spt.uniswapAddress.call({from: accounts[0]});
		const uint256CyVkwxB = await FreakCoinnnR2Spt.totalSupply.call({from: accounts[0]});
		const uint256nQ8fFLo = await FreakCoinnnR2Spt.allUserBalances.call(addressZ3YdDPo, {from: accounts[3]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfFVbnVl = await FreakCoin.new({from: accounts[2]});
		const uintgIwruTY = BigInt("1770")
		const addressJMTi2Dx = accounts[3]
		const addressepxpAeJ = accounts[1]
		const addressRaz3S1 = accounts[1]
		const uintYSv3xN8 = BigInt("557")
		const addresspmxuD9n = accounts[3]
		const addresskey9akv = accounts[4]
		const boold42U2cu = await FreakCoinfFVbnVl.approve.call(addressJMTi2Dx, uintgIwruTY, {from: accounts[0]});
		const addressgckCma0 = await FreakCoinfFVbnVl.uniswapAddress.call({from: accounts[1]});
		const uint256Y9dIfkb = await FreakCoinfFVbnVl.allowance.call(addressRaz3S1, addressepxpAeJ, {from: accounts[0]});
		const boolOukDZm = await FreakCoinfFVbnVl.transferFrom.call(addresskey9akv, addresspmxuD9n, uintYSv3xN8, {from: accounts[1]});

		assert.equal(addressgckCma0, 0x0000000000000000000000000000000000000000)
		assert.equal(boold42U2cu, true)
		assert.equal(uint256Y9dIfkb, BigInt("0"))
		await expect(FreakCoinfFVbnVl.transferFrom.call(addresskey9akv, addresspmxuD9n, uintYSv3xN8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfFVbnVl = await FreakCoin.new({from: accounts[2]});
		const uintJw7Ugzp = BigInt("216")
		const addresssnUo6or = "0x00000000000000000000000000000000000000-1"
		const addressd6p6xcW = accounts[0]
		const boolVqwplQk = await FreakCoinfFVbnVl.transfer.call(addresssnUo6or, uintJw7Ugzp, {from: accounts[3]});
		const uint256TXLTGXu = await FreakCoinfFVbnVl.balanceOf.call(addressd6p6xcW, {from: accounts[3]});

		await expect(FreakCoinfFVbnVl.transfer.call(addresssnUo6or, uintJw7Ugzp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinjgRn73v = await FreakCoin.new({from: accounts[4]});
		const addressP5Mcq5p = "0x0000000000000000000000000000000000000001"
		const address38jC6f = accounts[5]
		const uintLXmKqfY = BigInt("1605")
		const addressl8i6vJd = "0x0000000000000000000000000000000000000001"
		const addressCdgWqOm = accounts[4]
		const uintxllT6Ub = BigInt("1568")
		const addressJun4ehc = accounts[0]
		const uint256nz0J4q = await FreakCoinjgRn73v.allowance.call(address38jC6f, addressP5Mcq5p, {from: accounts[1]});
		const boolJoJRE0 = await FreakCoinjgRn73v.approve.call(addressl8i6vJd, uintLXmKqfY, {from: accounts[0]});
		const uint256rTGgHk7 = await FreakCoinjgRn73v.balanceOf.call(addressCdgWqOm, {from: "0x0000000000000000000000000000000000000001"});
		const boolO9StRcY = await FreakCoinjgRn73v.transfer.call(addressJun4ehc, uintxllT6Ub, {from: accounts[4]});
		const uint256roTYQZx = await FreakCoinjgRn73v.totalSupply.call({from: accounts[2]});

		assert.equal(boolJoJRE0, true)
		assert.equal(boolO9StRcY, true)
		assert.equal(uint256nz0J4q, BigInt("0"))
		assert.equal(uint256rTGgHk7, BigInt("1000000"))
		assert.equal(uint256roTYQZx, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfFVbnVl = await FreakCoin.new({from: accounts[2]});
		const addressOssYtWh = accounts[0]
		const addressREfPxUn = await FreakCoinfFVbnVl.setUniswapAddress.call(addressOssYtWh, {from: accounts[2]});
		const addressgckCma0 = await FreakCoinfFVbnVl.uniswapAddress.call({from: accounts[1]});

		assert.equal(addressgckCma0, 0x0000000000000000000000000000000000000000)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinB8OkMME = await FreakCoin.new({from: accounts[0]});
		const uint7wBPuS = BigInt("1529")
		const addresslpdAn0T = accounts[0]
		const uintiGR1Kyf = BigInt("1825")
		const addressI2i8EyQ = accounts[0]
		const addressOHsdEz8 = accounts[4]
		const addressqDtiOUT = await FreakCoinB8OkMME.uniswapAddress.call({from: accounts[3]});
		const boolo1wkPeG = await FreakCoinB8OkMME.transfer.call(addresslpdAn0T, uint7wBPuS, {from: accounts[0]});
		const boolRpKeZbf = await FreakCoinB8OkMME.transfer.call(addressI2i8EyQ, uintiGR1Kyf, {from: accounts[5]});
		const uint256zfnSYhh = await FreakCoinB8OkMME.balanceOf.call(addressOHsdEz8, {from: accounts[2]});

		assert.equal(addressqDtiOUT, 0x0000000000000000000000000000000000000000)
		assert.equal(boolo1wkPeG, true)
		await expect(FreakCoinB8OkMME.transfer.call(addressI2i8EyQ, uintiGR1Kyf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})