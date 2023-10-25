const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolEVThIcg = await ETFXPool.new({from: accounts[4]});
		const uintHwrR5U5 = BigInt("2003")
//		await ETFXPoolEVThIcg.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressu4dYPxH = await ETFXPoolEVThIcg.owner.call({from: accounts[1]});
//		const uint256v0YKaZr = await ETFXPoolEVThIcg.stake.call(uintHwrR5U5, {from: accounts[1]});
//		const uint8AZVgP4J = await ETFXPoolEVThIcg.decimals.call({from: accounts[4]});

		await expect(ETFXPoolEVThIcg.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolnw0ZKXo = await ETFXPool.new({from: accounts[0]});
		const addressikFpYy = accounts[3]
		const uintr3Vu8Sb = BigInt("1717")
		const addressVxGQvfV = accounts[0]
		const uint256BksqYBx = await ETFXPoolnw0ZKXo.balanceOf.call(addressikFpYy, {from: accounts[5]});
//		await ETFXPoolnw0ZKXo.getReward.call({from: accounts[1]});
//		const stringrXOJ1dh = await ETFXPoolnw0ZKXo.symbol.call({from: accounts[2]});
//		const boolYyknDuF = await ETFXPoolnw0ZKXo.increaseAllowance.call(addressVxGQvfV, uintr3Vu8Sb, {from: accounts[5]});

		assert.equal(uint256BksqYBx, BigInt("0"))
		await expect(ETFXPoolnw0ZKXo.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbNHaBtG = await ETFXPool.new({from: accounts[3]});
		const uintcL1B8M = BigInt("1529")
		const addressOZL9KdW = accounts[3]
		const uintxTcqcQw = BigInt("1849")
		const addressllPb4Gf = accounts[4]
		const addressEGJ20qM = accounts[4]
		const addressTkD2BGG = accounts[5]
		const uintOnCCKN6 = BigInt("1060")
		const addressemcZQ3M = "0x0000000000000000000000000000000000000001"
		const addressQ7VsxZR = accounts[2]
//		const boolAsJ9fVD = await ETFXPoolbNHaBtG.transfer.call(addressOZL9KdW, uintcL1B8M, {from: accounts[1]});
//		const boollHaoZnf = await ETFXPoolbNHaBtG.decreaseAllowance.call(addressllPb4Gf, uintxTcqcQw, {from: accounts[4]});
//		await ETFXPoolbNHaBtG.onlyOwner.call({from: accounts[3]});
//		const uint256TAI0y4P = await ETFXPoolbNHaBtG.allowance.call(addressTkD2BGG, addressEGJ20qM, {from: accounts[4]});
//		const uint256dyq8XGd = await ETFXPoolbNHaBtG.withdraw.call(uintOnCCKN6, {from: accounts[0]});
//		const uint256upQ9h5q = await ETFXPoolbNHaBtG.allowance.call(addressQ7VsxZR, addressemcZQ3M, {from: accounts[0]});

		await expect(ETFXPoolbNHaBtG.transfer.call(addressOZL9KdW, uintcL1B8M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringQDxqAOd = "H8RLfqq9jwB9GMU7olKyvaLM8zkXXbvRDPDIHoeGUEvXViGkX"
		const stringjgmoHb = "UNts9cC5r3CzfHCduLoTArbzkd2OUtB8Rcxlxo7lW7AS"
		const uintYqxiym = BigInt("160")
		const ETFXPool55wMRD = await ETFXPool.new(stringQDxqAOd, stringjgmoHb, uintYqxiym, {from: accounts[1]});
		const uintOeIYsET = BigInt("970")
		const addressrfN0IL5 = accounts[0]
		const uintrT0cPFY = BigInt("59")
		const addressuvSMQ0W = "0x0000000000000000000000000000000000000001"
		const addresskaOsE7S = accounts[2]
		const uintu5shWn8 = BigInt("2043")
		const addressJmyzvaQ = accounts[0]
		const boolsBW5eYE = await ETFXPool55wMRD.approve.call(addressrfN0IL5, uintOeIYsET, {from: accounts[3]});
		const boolp8tj3du = await ETFXPool55wMRD.transferFrom.call(addresskaOsE7S, addressuvSMQ0W, uintrT0cPFY, {from: accounts[0]});
		const boollOL6KOG = await ETFXPool55wMRD.increaseAllowance.call(addressJmyzvaQ, uintu5shWn8, {from: accounts[0]});
		await ETFXPool55wMRD.exit.call({from: accounts[4]});
		await ETFXPool55wMRD.exit.call({from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolK1PkhVI = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const address9AGAnf = accounts[1]
		const uintSbjcVwI = BigInt("1093")
		const addressexoYp1I = accounts[4]
		const addressIYwHzGz = await ETFXPoolK1PkhVI.transferOwnership.call(address9AGAnf, {from: accounts[2]});
		const boolFNSfgXe = await ETFXPoolK1PkhVI.increaseAllowance.call(addressexoYp1I, uintSbjcVwI, {from: accounts[0]});
		const addressFdFiun = await ETFXPoolK1PkhVI.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPfuMySc = await ETFXPool.new({from: accounts[0]});
		const stringNTnN3f = await ETFXPoolPfuMySc.symbol.call({from: accounts[3]});
		const addresslPHqkrY = await ETFXPoolPfuMySc.owner.call({from: accounts[0]});
		const addressAQz7JA = await ETFXPoolPfuMySc.owner.call({from: accounts[3]});
//		await ETFXPoolPfuMySc.getReward.call({from: accounts[4]});
//		await ETFXPoolPfuMySc.nonReentrant.call({from: accounts[0]});
//		const stringc91uraE = await ETFXPoolPfuMySc.name.call({from: accounts[1]});

		assert.equal(addressAQz7JA, 0x57b9Daa8d9654b0Bac9114402bDC1A14Be342193)
		assert.equal(addresslPHqkrY, 0x57b9Daa8d9654b0Bac9114402bDC1A14Be342193)
		assert.equal(stringNTnN3f, "FETFX")
		await expect(ETFXPoolPfuMySc.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltsHwPNy = await ETFXPool.new({from: accounts[4]});
		const addressWvjrzC7 = "0x0000000000000000000000000000000000000001"
//		await ETFXPooltsHwPNy.onlyOwner.call({from: accounts[3]});
//		await ETFXPooltsHwPNy.getReward.call({from: accounts[1]});
//		const uint256TEy0ClZ = await ETFXPooltsHwPNy.balanceOf.call(addressWvjrzC7, {from: accounts[5]});

		await expect(ETFXPooltsHwPNy.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrQYQBPH = await ETFXPool.new({from: accounts[2]});
		const addressInT1eek = accounts[5]
		const addresskhtbrCJ = accounts[1]
		const addressq4iMBFH = accounts[0]
		const addressKu680d4 = accounts[4]
		const addressK1JqHs5 = accounts[2]
		const uint256yxUAbbR = await ETFXPoolrQYQBPH.balanceOf.call(addressInT1eek, {from: accounts[4]});
		const uint256AaALqT9 = await ETFXPoolrQYQBPH.allowance.call(addressq4iMBFH, addresskhtbrCJ, {from: accounts[3]});
//		const uint256vB9sbEb = await ETFXPoolrQYQBPH.earned.call(addressKu680d4, {from: accounts[1]});
//		const uint256mpJIisj = await ETFXPoolrQYQBPH.totalSupply.call({from: accounts[0]});
//		const uint256vd9hTh9 = await ETFXPoolrQYQBPH.earned.call(addressK1JqHs5, {from: accounts[1]});

		assert.equal(uint256AaALqT9, BigInt("0"))
		assert.equal(uint256yxUAbbR, BigInt("0"))
		await expect(ETFXPoolrQYQBPH.earned.call(addressKu680d4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEVThIcg = await ETFXPool.new({from: accounts[4]});
		const addressYKLDRPD = accounts[4]
		const uintHhSkPzg = BigInt("2003")
		const addressxOzeLz0 = await ETFXPoolEVThIcg.transferOwnership.call(addressYKLDRPD, {from: accounts[4]});
//		await ETFXPoolEVThIcg.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressu4dYPxH = await ETFXPoolEVThIcg.owner.call({from: accounts[1]});
//		const uint256v0YKaZr = await ETFXPoolEVThIcg.stake.call(uintHhSkPzg, {from: accounts[1]});
//		const uint8AZVgP4J = await ETFXPoolEVThIcg.decimals.call({from: accounts[4]});

		await expect(ETFXPoolEVThIcg.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzRt0yA1 = await ETFXPool.new({from: accounts[3]});
		const uint98Z0Uq = BigInt("1769")
		const addressbXFGLbR = accounts[1]
		const booleNIfJiJ = await ETFXPoolzRt0yA1.increaseAllowance.call(addressbXFGLbR, uint98Z0Uq, {from: accounts[0]});
		const uint256h1U77Rj = await ETFXPoolzRt0yA1.rewardPerToken.call({from: accounts[4]});
		const uint8Rx5Dkym = await ETFXPoolzRt0yA1.decimals.call({from: accounts[5]});
		const stringvWWfTE5 = await ETFXPoolzRt0yA1.name.call({from: accounts[1]});

		assert.equal(booleNIfJiJ, true)
		assert.equal(stringvWWfTE5, "ETFX-FARM")
		assert.equal(uint256h1U77Rj, BigInt("0"))
		assert.equal(uint8Rx5Dkym, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltxlSmT = await ETFXPool.new({from: accounts[4]});
		const addressv3hPAEH = accounts[4]
		const addressTRZxeuf = accounts[3]
		const uintAR7nsxq = BigInt("364")
		const addressvmhAuC = accounts[1]
		const uint2569mhA3a = await ETFXPooltxlSmT.allowance.call(addressTRZxeuf, addressv3hPAEH, {from: accounts[3]});
//		const boolfPvazV = await ETFXPooltxlSmT.decreaseAllowance.call(addressvmhAuC, uintAR7nsxq, {from: accounts[4]});
//		const addressVZNbniI = await ETFXPooltxlSmT.owner.call({from: accounts[1]});
//		const uint256thRd87x = await ETFXPooltxlSmT.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint2569mhA3a, BigInt("0"))
		await expect(ETFXPooltxlSmT.decreaseAllowance.call(addressvmhAuC, uintAR7nsxq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwXlReCe = await ETFXPool.new({from: accounts[1]});
		const uintpIUm78c = BigInt("1956")
		const addressiFgA2VO = accounts[2]
		const addressKn1V5At = accounts[2]
		const addressMfHsPAX = accounts[3]
//		const booldzroqmN = await ETFXPoolwXlReCe.transferFrom.call(addressKn1V5At, addressiFgA2VO, uintpIUm78c, {from: accounts[4]});
//		const uint256wOqu93k = await ETFXPoolwXlReCe.balanceOf.call(addressMfHsPAX, {from: accounts[0]});

		await expect(ETFXPoolwXlReCe.transferFrom.call(addressKn1V5At, addressiFgA2VO, uintpIUm78c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGXHSYj9 = await ETFXPool.new({from: accounts[5]});
		const uintdHTLbwF = BigInt("522")
		const addressLeWLvnv = accounts[1]
//		await ETFXPoolGXHSYj9.renounceOwnership.call({from: accounts[0]});
//		const uint256IpeTNeS = await ETFXPoolGXHSYj9.rewardPerToken.call({from: accounts[0]});
//		const bool3FJO07 = await ETFXPoolGXHSYj9.decreaseAllowance.call(addressLeWLvnv, uintdHTLbwF, {from: "0x0000000000000000000000000000000000000001"});
//		const stringBf68gtN = await ETFXPoolGXHSYj9.symbol.call({from: accounts[3]});

		await expect(ETFXPoolGXHSYj9.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzRt0yA1 = await ETFXPool.new({from: accounts[3]});
		const uints727z40 = BigInt("1386")
//		const uint256gJrTqh = await ETFXPoolzRt0yA1.stake.call(uints727z40, {from: accounts[4]});
//		const uint256h1U77Rj = await ETFXPoolzRt0yA1.rewardPerToken.call({from: accounts[4]});

		await expect(ETFXPoolzRt0yA1.stake.call(uints727z40, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzRt0yA1 = await ETFXPool.new({from: accounts[3]});
		const uintYG0sm4x = BigInt("1430")
		const addressWLmhJFI = accounts[5]
		const uintsAQCgEV = BigInt("1321")
//		await ETFXPoolzRt0yA1.renounceOwnership.call({from: accounts[3]});
//		const boolb9HJ4IC = await ETFXPoolzRt0yA1.approve.call(addressWLmhJFI, uintYG0sm4x, {from: accounts[4]});
//		const uint256GZANvM2 = await ETFXPoolzRt0yA1.stake.call(uintsAQCgEV, {from: accounts[1]});
//		const uint256h1U77Rj = await ETFXPoolzRt0yA1.rewardPerToken.call({from: accounts[4]});

		await expect(ETFXPoolzRt0yA1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzRt0yA1 = await ETFXPool.new({from: accounts[3]});
		const uintvGBIioi = BigInt("519")
		const uint8LttiS7m = await ETFXPoolzRt0yA1.decimals.call({from: accounts[2]});
//		const uint256xO04Yn1 = await ETFXPoolzRt0yA1.withdraw.call(uintvGBIioi, {from: accounts[2]});
//		const uint256h1U77Rj = await ETFXPoolzRt0yA1.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint8LttiS7m, BigInt("8"))
		await expect(ETFXPoolzRt0yA1.withdraw.call(uintvGBIioi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})