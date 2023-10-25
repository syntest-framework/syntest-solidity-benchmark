const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const addressoWZa7Qm = accounts[4]
		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lU75Xsb = await ETFXPoolf10MPJC.rewardPerToken.call({from: accounts[2]});
//		const addressCemfXbs = await ETFXPoolf10MPJC.transferOwnership.call(addressoWZa7Qm, {from: accounts[0]});

		assert.equal(stringwTkjKbM, "FETFX")
		assert.equal(uint256lU75Xsb, BigInt("0"))
		await expect(ETFXPoolf10MPJC.transferOwnership.call(addressoWZa7Qm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringOrMkQr7 = "dFj7dlJjqx5i4tFj"
		const stringI4KinKJ = "kysroPA6FteuxaW4L3yAlYmo7NM9LFAsAjPUKvcfVfhcY3pBKggzfTuBRSjJOJyWBSDOmVE90L9cLt4v6Fk4Srm"
		const uintfMPSt1g = BigInt("168")
		const ETFXPooleXDQvCy = await ETFXPool.new(stringOrMkQr7, stringI4KinKJ, uintfMPSt1g, {from: accounts[0]});
		const addressdtB4NV = accounts[3]
		const addressYLOdOx8 = accounts[3]
		const uintTLTROZs = BigInt("785")
		const addressQtadKq3 = accounts[5]
		const addressIBq1Jg1 = accounts[0]
		const addressLDvsYRd = accounts[1]
		const addresslFMw6Qz = await ETFXPooleXDQvCy.transferOwnership.call(addressdtB4NV, {from: accounts[4]});
		const uint256HX7XBD = await ETFXPooleXDQvCy.earned.call(addressYLOdOx8, {from: accounts[2]});
		const boolWYUuMA9 = await ETFXPooleXDQvCy.transferFrom.call(addressIBq1Jg1, addressQtadKq3, uintTLTROZs, {from: accounts[5]});
		const uint256KTD4Ub = await ETFXPooleXDQvCy.balanceOf.call(addressLDvsYRd, {from: accounts[0]});
		const stringkUmxFjy = await ETFXPooleXDQvCy.name.call({from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolv7GNvGi = await ETFXPool.new({from: accounts[0]});
		const uintwHmO0W = BigInt("1578")
		const addressvcDw1G2 = accounts[1]
		const addressaN5svHR = await ETFXPoolv7GNvGi.owner.call({from: accounts[3]});
//		await ETFXPoolv7GNvGi.nonReentrant.call({from: accounts[1]});
//		const boolYBOMi7E = await ETFXPoolv7GNvGi.approve.call(addressvcDw1G2, uintwHmO0W, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressaN5svHR, 0x6b75977CFA16605BB24914B69665d959A4c20772)
		await expect(ETFXPoolv7GNvGi.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPuZye2R = await ETFXPool.new({from: accounts[2]});
		const uintRrOUAjT = BigInt("1170")
		const addressTbsapLC = accounts[0]
		const uintSlQERQ7 = BigInt("1857")
		const addressW6puvsH = accounts[3]
		const uintThhgmeg = BigInt("648")
//		const boolgacisGp = await ETFXPoolPuZye2R.transfer.call(addressTbsapLC, uintRrOUAjT, {from: accounts[2]});
//		const boolpngQ3Lt = await ETFXPoolPuZye2R.decreaseAllowance.call(addressW6puvsH, uintSlQERQ7, {from: accounts[0]});
//		const uint256X2rste = await ETFXPoolPuZye2R.stake.call(uintThhgmeg, {from: accounts[2]});
//		const stringIg2vJEw = await ETFXPoolPuZye2R.symbol.call({from: accounts[4]});

		await expect(ETFXPoolPuZye2R.transfer.call(addressTbsapLC, uintRrOUAjT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolOsZ77U1 = await ETFXPool.new({from: accounts[2]});
		const uintsW7ntBe = BigInt("1450")
		const addressD5ZT4eU = accounts[3]
		const addresssaBCA7o = accounts[1]
		const addressQ0zjyBN = accounts[4]
//		const boolG4J9OMT = await ETFXPoolOsZ77U1.transferFrom.call(addresssaBCA7o, addressD5ZT4eU, uintsW7ntBe, {from: accounts[5]});
//		await ETFXPoolOsZ77U1.getReward.call({from: accounts[1]});
//		const addressJ9SF5tO = await ETFXPoolOsZ77U1.transferOwnership.call(addressQ0zjyBN, {from: accounts[4]});

		await expect(ETFXPoolOsZ77U1.transferFrom.call(addresssaBCA7o, addressD5ZT4eU, uintsW7ntBe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolU32ISJ = await ETFXPool.new({from: accounts[2]});
		const uintpNAq75 = BigInt("1805")
		const addresspE6O9D = "0x0000000000000000000000000000000000000001"
		const uintirI6QSU = BigInt("1847")
		const addressDmRpVrN = accounts[1]
		const addressHpYqw2h = accounts[3]
		const uint256MkdNSOd = await ETFXPoolU32ISJ.totalSupply.call({from: accounts[3]});
		const boolJY1uXwT = await ETFXPoolU32ISJ.increaseAllowance.call(addresspE6O9D, uintpNAq75, {from: accounts[1]});
//		await ETFXPoolU32ISJ.exit.call({from: accounts[3]});
//		const uint256bQkt6Np = await ETFXPoolU32ISJ.rewardPerToken.call({from: accounts[1]});
//		await ETFXPoolU32ISJ.nonReentrant.call({from: accounts[0]});
//		const boolac4FBIq = await ETFXPoolU32ISJ.transferFrom.call(addressHpYqw2h, addressDmRpVrN, uintirI6QSU, {from: accounts[4]});

		assert.equal(boolJY1uXwT, true)
		assert.equal(uint256MkdNSOd, BigInt("0"))
		await expect(ETFXPoolU32ISJ.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUakpTXT = await ETFXPool.new({from: accounts[4]});
		const addresscpwB0C = accounts[1]
		const addresscp8Q00h = accounts[2]
		const stringPDYt4lT = await ETFXPoolUakpTXT.name.call({from: accounts[3]});
//		await ETFXPoolUakpTXT.exit.call({from: accounts[2]});
//		const addressR959K5O = await ETFXPoolUakpTXT.transferOwnership.call(addresscpwB0C, {from: accounts[0]});
//		const uint256tuRb8ID = await ETFXPoolUakpTXT.earned.call(addresscp8Q00h, {from: accounts[2]});

		assert.equal(stringPDYt4lT, "ETFX-FARM")
		await expect(ETFXPoolUakpTXT.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqrv0oA2 = await ETFXPool.new({from: accounts[1]});
		const uintwDRSoSZ = BigInt("1573")
		const addressbhW2bS3 = accounts[2]
		const uintMQEaiRq = BigInt("1252")
		const uintqTOvZy = BigInt("1021")
		const uintDOy9E2i = BigInt("565")
		const addressxez3g6W = accounts[4]
//		const uint256u1EwDBx = await ETFXPoolqrv0oA2.stake.call(uintwDRSoSZ, {from: accounts[2]});
//		const addressmAetIOF = await ETFXPoolqrv0oA2.transferOwnership.call(addressbhW2bS3, {from: accounts[0]});
//		const uint256aqicxx = await ETFXPoolqrv0oA2.stake.call(uintMQEaiRq, {from: accounts[2]});
//		const uint256YH4EaJf = await ETFXPoolqrv0oA2.withdraw.call(uintqTOvZy, {from: accounts[1]});
//		const boolpR6YlmV = await ETFXPoolqrv0oA2.decreaseAllowance.call(addressxez3g6W, uintDOy9E2i, {from: accounts[5]});

		await expect(ETFXPoolqrv0oA2.stake.call(uintwDRSoSZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const uintX1FLKKD = BigInt("364")
		const uintuRZ9JDK = BigInt("1012")
		const addresspasIqjZ = "0x0000000000000000000000000000000000000001"
		const addressDlZlL6g = accounts[4]
//		const uint256um3hL7e = await ETFXPoolf10MPJC.withdraw.call(uintX1FLKKD, {from: accounts[4]});
//		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolEsgfU1R = await ETFXPoolf10MPJC.increaseAllowance.call(addresspasIqjZ, uintuRZ9JDK, {from: accounts[3]});
//		const uint256lU75Xsb = await ETFXPoolf10MPJC.rewardPerToken.call({from: accounts[2]});
//		const addressCemfXbs = await ETFXPoolf10MPJC.transferOwnership.call(addressDlZlL6g, {from: accounts[0]});

		await expect(ETFXPoolf10MPJC.withdraw.call(uintX1FLKKD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqrv0oA2 = await ETFXPool.new({from: accounts[1]});
		const addressy5UIdTv = accounts[3]
		const addresshF0CyTR = accounts[3]
		const uintDhQ2JOj = BigInt("1071")
		const addressvbBFAl = accounts[2]
		const uintCjRkcrK = BigInt("1265")
		const uinti0Qdklg = BigInt("1021")
		const addressYx5APV9 = accounts[3]
		const uintxXslu9E = BigInt("565")
		const address6WlT3a = accounts[4]
		const uint256uUHGSCN = await ETFXPoolqrv0oA2.allowance.call(addresshF0CyTR, addressy5UIdTv, {from: accounts[3]});
		const uint2568052ss = await ETFXPoolqrv0oA2.totalSupply.call({from: accounts[0]});
//		const uint256mITnJBM = await ETFXPoolqrv0oA2.stake.call(uintDhQ2JOj, {from: accounts[0]});
//		const addressmAetIOF = await ETFXPoolqrv0oA2.transferOwnership.call(addressvbBFAl, {from: accounts[0]});
//		const uint256aqicxx = await ETFXPoolqrv0oA2.stake.call(uintCjRkcrK, {from: accounts[2]});
//		const uint256YH4EaJf = await ETFXPoolqrv0oA2.withdraw.call(uinti0Qdklg, {from: accounts[1]});
//		const uint256Up9j2E7 = await ETFXPoolqrv0oA2.balanceOf.call(addressYx5APV9, {from: accounts[3]});
//		const boolpR6YlmV = await ETFXPoolqrv0oA2.decreaseAllowance.call(address6WlT3a, uintxXslu9E, {from: accounts[5]});

		assert.equal(uint2568052ss, BigInt("0"))
		assert.equal(uint256uUHGSCN, BigInt("0"))
		await expect(ETFXPoolqrv0oA2.stake.call(uintDhQ2JOj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const uintkkOfSv = BigInt("1027")
		const addressgZJm5yi = accounts[0]
		const addressLcikJdy = accounts[4]
		const addressvFTLH8 = accounts[4]
		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const addresskCUDgpC = await ETFXPoolf10MPJC.owner.call({from: accounts[0]});
//		const boolP7scymB = await ETFXPoolf10MPJC.decreaseAllowance.call(addressgZJm5yi, uintkkOfSv, {from: accounts[1]});
//		const stringyt6e1cg = await ETFXPoolf10MPJC.name.call({from: accounts[0]});
//		const uint256lU75Xsb = await ETFXPoolf10MPJC.rewardPerToken.call({from: accounts[2]});
//		const addressCemfXbs = await ETFXPoolf10MPJC.transferOwnership.call(addressLcikJdy, {from: accounts[0]});
//		const uint2563S2TOA = await ETFXPoolf10MPJC.balanceOf.call(addressvFTLH8, {from: accounts[4]});

		assert.equal(addresskCUDgpC, 0xd26e6b2D5C80EcE34925Ce79dc87303f48b44833)
		assert.equal(stringwTkjKbM, "FETFX")
		await expect(ETFXPoolf10MPJC.decreaseAllowance.call(addressgZJm5yi, uintkkOfSv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPools2lh1Pc = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYOo7e5Q = BigInt("176")
		const addressSyf1Q9w = accounts[0]
		const addressW3GZTYs = accounts[4]
		const addressdOXBezo = accounts[1]
		const uintJJKYEhG = BigInt("670")
		const addressNg2atKR = accounts[4]
		const boolsis7MjE = await ETFXPools2lh1Pc.transferFrom.call(addressW3GZTYs, addressSyf1Q9w, uintYOo7e5Q, {from: accounts[3]});
		const uint256lJ1ui2b = await ETFXPools2lh1Pc.earned.call(addressdOXBezo, {from: accounts[3]});
		const boolYBJ1tgx = await ETFXPools2lh1Pc.increaseAllowance.call(addressNg2atKR, uintJJKYEhG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const addressNCWf95k = accounts[2]
		const uintaxjCT62 = BigInt("279")
		const addressTBAOdUV = accounts[4]
		const addressYG4CxQj = accounts[4]
		const uint256qts7s0N = await ETFXPoolf10MPJC.balanceOf.call(addressNCWf95k, {from: accounts[1]});
		const boolxh2tKgH = await ETFXPoolf10MPJC.approve.call(addressTBAOdUV, uintaxjCT62, {from: accounts[2]});
		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressCemfXbs = await ETFXPoolf10MPJC.transferOwnership.call(addressYG4CxQj, {from: accounts[0]});

		assert.equal(boolxh2tKgH, true)
		assert.equal(stringwTkjKbM, "FETFX")
		assert.equal(uint256qts7s0N, BigInt("0"))
		await expect(ETFXPoolf10MPJC.transferOwnership.call(addressYG4CxQj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const uint8BosICmK = await ETFXPoolf10MPJC.decimals.call({from: accounts[1]});
		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringwTkjKbM, "FETFX")
		assert.equal(uint8BosICmK, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
//		await ETFXPoolf10MPJC.getReward.call({from: accounts[0]});
//		const addressEafTxNG = await ETFXPoolf10MPJC.owner.call({from: accounts[0]});
//		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolf10MPJC.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const addressDPsu4aU = accounts[5]
		const addressZaN3fjg = await ETFXPoolf10MPJC.transferOwnership.call(addressDPsu4aU, {from: accounts[4]});
		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringwTkjKbM, "FETFX")
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolf10MPJC = await ETFXPool.new({from: accounts[4]});
		const stringwTkjKbM = await ETFXPoolf10MPJC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolf10MPJC.renounceOwnership.call({from: accounts[4]});

		assert.equal(stringwTkjKbM, "FETFX")
		await expect(ETFXPoolf10MPJC.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})