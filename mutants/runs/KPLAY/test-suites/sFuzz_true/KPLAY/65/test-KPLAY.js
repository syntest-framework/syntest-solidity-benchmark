const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYSYnEdX5 = await KPLAY.new({from: accounts[0]});
		const uintkzAkOe = BigInt("1556")
		const addresshHgAsSO = accounts[2]
		const uintZu7XQL = BigInt("1622")
		const addressg7AW21 = accounts[4]
		const uintiQHGZfx = BigInt("238")
		const addresso5PJhUs = accounts[1]
		const uintXt07lqr = BigInt("405")
		const addressQYGQaW = accounts[4]
		const addressPs9u6h = await KPLAYSYnEdX5.burn.call(addresshHgAsSO, uintkzAkOe, {from: accounts[4]});
		const boolKc0agl = await KPLAYSYnEdX5.transfer.call(addressg7AW21, uintZu7XQL, {from: accounts[3]});
		const boolZAAmG6d = await KPLAYSYnEdX5.approve.call(addresso5PJhUs, uintiQHGZfx, {from: accounts[3]});
		await KPLAYSYnEdX5.lockState.call(addressQYGQaW, uintXt07lqr, {from: accounts[1]});

		await expect(KPLAYSYnEdX5.burn.call(addresshHgAsSO, uintkzAkOe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uintPzWbgg = BigInt("624")
		const addressSf0OZZi = accounts[0]
		const addresse7NJYkc = accounts[3]
		const uintah27KId = BigInt("926")
		const addressH4RM501 = accounts[1]
		const boolyUSxNbg = await KPLAYHgF53DP.approve.call(addressSf0OZZi, uintPzWbgg, {from: accounts[4]});
		const uint256RpSyScy = await KPLAYHgF53DP.lockCount.call(addresse7NJYkc, {from: accounts[3]});
		const boolz8WC6Nv = await KPLAYHgF53DP.transfer.call(addressH4RM501, uintah27KId, {from: accounts[4]});

		assert.equal(boolyUSxNbg, true)
		assert.equal(uint256RpSyScy, BigInt("0"))
		await expect(KPLAYHgF53DP.transfer.call(addressH4RM501, uintah27KId, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHMdiIJ = await KPLAY.new({from: accounts[1]});
		const uintdragH7Y = BigInt("1333")
		const addressSsu6HOu = "0x0000000000000000000000000000000000000001"
		const uinttKkMtXx = BigInt("615")
		const addressbY2Fp6Q = accounts[4]
		const addressJXokhgH = accounts[0]
		await KPLAYHMdiIJ.whenNotPaused.call({from: accounts[2]});
		const boolpFNQpUA = await KPLAYHMdiIJ.transfer.call(addressSsu6HOu, uintdragH7Y, {from: accounts[4]});
		await KPLAYHMdiIJ.pause.call({from: accounts[1]});
		const boolTZhSqr = await KPLAYHMdiIJ.approve.call(addressbY2Fp6Q, uinttKkMtXx, {from: "0x0000000000000000000000000000000000000001"});
		const boolUEpNMHm = await KPLAYHMdiIJ.isFrozen.call(addressJXokhgH, {from: accounts[0]});
		await KPLAYHMdiIJ.whenPaused.call({from: accounts[2]});

		await expect(KPLAYHMdiIJ.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYXRb9xst = await KPLAY.new({from: accounts[2]});
		const addresssXwmUMR = accounts[5]
		const addressOT9kdA9 = accounts[3]
		const uintNpINj1 = BigInt("44")
		const addressH3iQ1d = accounts[1]
		const boolDOVtUJ = await KPLAYXRb9xst.isFrozen.call(addresssXwmUMR, {from: accounts[5]});
		const addressG0tzP7y = await KPLAYXRb9xst.transferOwnership.call(addressOT9kdA9, {from: accounts[4]});
		const boolMLV1wqB = await KPLAYXRb9xst.decreaseAllowance.call(addressH3iQ1d, uintNpINj1, {from: accounts[5]});
		await KPLAYXRb9xst.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolDOVtUJ, false)
		await expect(KPLAYXRb9xst.transferOwnership.call(addressOT9kdA9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHv5zHp = await KPLAY.new({from: accounts[2]});
		const uintHF4E1rW = BigInt("475")
		const uint256ElxMGV2 = await KPLAYHv5zHp.afterTime.call(uintHF4E1rW, {from: accounts[2]});
		const uint256PnK5qpC = await KPLAYHv5zHp.currentTime.call({from: accounts[1]});

		assert.equal(uint256ElxMGV2, BigInt("1630226563"))
		assert.equal(uint256PnK5qpC, BigInt("1630226088"))
	});

	it('test for KPLAY', async () => {
		const KPLAYdS5YXwE = await KPLAY.new({from: accounts[4]});
		const addresshzEUkxg = accounts[0]
		const addressOZh2cYW = accounts[1]
		const uint256ZZ5OkAv = await KPLAYdS5YXwE.lockCount.call(addresshzEUkxg, {from: accounts[3]});
		const uint256EztV25 = await KPLAYdS5YXwE.currentTime.call({from: accounts[1]});
		const uint256L6LfBeb = await KPLAYdS5YXwE.totalSupply.call({from: accounts[0]});
		const addresslh3vTd0 = await KPLAYdS5YXwE.freeze.call(addressOZh2cYW, {from: accounts[1]});

		assert.equal(uint256EztV25, BigInt("1630226094"))
		assert.equal(uint256L6LfBeb, BigInt("10000000000000000"))
		assert.equal(uint256ZZ5OkAv, BigInt("0"))
		await expect(KPLAYdS5YXwE.freeze.call(addressOZh2cYW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYMzxMRJK = await KPLAY.new({from: accounts[1]});
		const uintRQq6R5N = BigInt("601")
		const addressslRv9B0 = accounts[3]
		const addressQmr1WlL = accounts[1]
		const uintE05z70o = BigInt("430")
		const addressfsJQRX9 = accounts[2]
		const uintNYX69K = BigInt("1807")
		const uintSxhMyE4 = BigInt("1914")
		const address3BxvYW = accounts[0]
		const boolsHBFcc3 = await KPLAYMzxMRJK.transferFrom.call(addressQmr1WlL, addressslRv9B0, uintRQq6R5N, {from: accounts[1]});
		const bool3356Kt = await KPLAYMzxMRJK.approve.call(addressfsJQRX9, uintE05z70o, {from: accounts[4]});
		await KPLAYMzxMRJK.pause.call({from: accounts[3]});
		const boolBCVwEaO = await KPLAYMzxMRJK.transferWithLockAfter.call(address3BxvYW, uintSxhMyE4, uintNYX69K, {from: accounts[2]});

		await expect(KPLAYMzxMRJK.transferFrom.call(addressQmr1WlL, addressslRv9B0, uintRQq6R5N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const addressmF9cW5 = accounts[0]
		const addresscFL62xx = accounts[3]
		const uintywfZUmn = BigInt("746")
		const addressuVVpZNb = accounts[3]
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addressmF9cW5, {from: accounts[1]});
		const boolCtwCjVq = await KPLAYbhgMfzS.isFrozen.call(addresscFL62xx, {from: accounts[1]});
		const boolpGw9Ls9 = await KPLAYbhgMfzS.mint.call(addressuVVpZNb, uintywfZUmn, {from: accounts[5]});

		assert.equal(boolCtwCjVq, false)
		assert.equal(uint256O6y2Zt, BigInt("0"))
		await expect(KPLAYbhgMfzS.mint.call(addressuVVpZNb, uintywfZUmn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const addressRVQQ48x = accounts[0]
		const addressZLHkE4E = accounts[3]
		const uintCvfOIky = BigInt("746")
		const addressEajhetF = accounts[4]
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addressRVQQ48x, {from: accounts[1]});
		await KPLAYbhgMfzS.renounceOwnership.call({from: accounts[4]});
		const boolCtwCjVq = await KPLAYbhgMfzS.isFrozen.call(addressZLHkE4E, {from: accounts[1]});
		const boolpGw9Ls9 = await KPLAYbhgMfzS.mint.call(addressEajhetF, uintCvfOIky, {from: accounts[5]});

		assert.equal(uint256O6y2Zt, BigInt("0"))
		await expect(KPLAYbhgMfzS.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uintX2CtIhs = BigInt("624")
		const addressabQkjdr = accounts[0]
		const uintHrV3aoX = BigInt("737")
		const addressTWSsFxG = accounts[5]
		const addressy3XVJel = accounts[3]
		const uintZhPHH9l = BigInt("926")
		const addressKm1dhl = accounts[1]
		const boolyUSxNbg = await KPLAYHgF53DP.approve.call(addressabQkjdr, uintX2CtIhs, {from: accounts[4]});
		await KPLAYHgF53DP.lockState.call(addressTWSsFxG, uintHrV3aoX, {from: accounts[0]});
		const uint256RpSyScy = await KPLAYHgF53DP.lockCount.call(addressy3XVJel, {from: accounts[3]});
		const boolz8WC6Nv = await KPLAYHgF53DP.transfer.call(addressKm1dhl, uintZhPHH9l, {from: accounts[4]});

		assert.equal(boolyUSxNbg, true)
		await expect(KPLAYHgF53DP.lockState.call(addressTWSsFxG, uintHrV3aoX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const addressr4MPCDT = accounts[0]
		const uintMDBX3yk = BigInt("248")
		const addressYOc8OBF = "0x0000000000000000000000000000000000000001"
		const addressJBycBd = accounts[3]
		const uintur73XkC = BigInt("712")
		const addressmChKjpD = accounts[2]
		const uintZqu8U5t = BigInt("746")
		const addressAV0VS8 = accounts[4]
		const addressX0lXUGC = accounts[0]
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addressr4MPCDT, {from: accounts[1]});
		const boolXrQKvI = await KPLAYbhgMfzS.decreaseAllowance.call(addressYOc8OBF, uintMDBX3yk, {from: accounts[2]});
		const boolCtwCjVq = await KPLAYbhgMfzS.isFrozen.call(addressJBycBd, {from: accounts[1]});
		const boolbPxt2JE = await KPLAYbhgMfzS.approve.call(addressmChKjpD, uintur73XkC, {from: accounts[1]});
		const boolpGw9Ls9 = await KPLAYbhgMfzS.mint.call(addressAV0VS8, uintZqu8U5t, {from: accounts[5]});
		const uint256k8L7MEy = await KPLAYbhgMfzS.balanceOf.call(addressX0lXUGC, {from: accounts[3]});

		assert.equal(uint256O6y2Zt, BigInt("0"))
		await expect(KPLAYbhgMfzS.decreaseAllowance.call(addressYOc8OBF, uintMDBX3yk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uintrOrChcN = BigInt("624")
		const addressGse3lCJ = accounts[0]
		const uintDGhcR0 = BigInt("365")
		const addressrQsjo5 = accounts[1]
		const uintYxR9vlP = BigInt("295")
		const addressMJEiME9 = accounts[3]
		const addressr35ITSx = accounts[4]
		const uintqMbWBwQ = BigInt("930")
		const addressI4kRAZG = accounts[1]
		const boolyUSxNbg = await KPLAYHgF53DP.approve.call(addressGse3lCJ, uintrOrChcN, {from: accounts[4]});
		const addressro4PUwc = await KPLAYHgF53DP.burn.call(addressrQsjo5, uintDGhcR0, {from: accounts[5]});
		const boolyR3UYWS = await KPLAYHgF53DP.transferFrom.call(addressr35ITSx, addressMJEiME9, uintYxR9vlP, {from: accounts[5]});
		const boolz8WC6Nv = await KPLAYHgF53DP.transfer.call(addressI4kRAZG, uintqMbWBwQ, {from: accounts[4]});

		assert.equal(boolyUSxNbg, true)
		await expect(KPLAYHgF53DP.burn.call(addressrQsjo5, uintDGhcR0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const addressHFiOhw2 = accounts[0]
		const addressdgA1a4N = accounts[3]
		const addressYIZcN7t = accounts[1]
		const addressGGUcI0Z = accounts[1]
		const uintQcp2pq3 = BigInt("746")
		const addresstMkSjjh = accounts[3]
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addressHFiOhw2, {from: accounts[1]});
		const boolCtwCjVq = await KPLAYbhgMfzS.isFrozen.call(addressdgA1a4N, {from: accounts[1]});
		const uint256pbYRdxE = await KPLAYbhgMfzS.allowance.call(addressGGUcI0Z, addressYIZcN7t, {from: accounts[3]});
		const boolpGw9Ls9 = await KPLAYbhgMfzS.mint.call(addresstMkSjjh, uintQcp2pq3, {from: accounts[5]});

		assert.equal(boolCtwCjVq, false)
		assert.equal(uint256O6y2Zt, BigInt("0"))
		assert.equal(uint256pbYRdxE, BigInt("0"))
		await expect(KPLAYbhgMfzS.mint.call(addresstMkSjjh, uintQcp2pq3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlj5dw7 = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdlp1Jfl = BigInt("340")
		const addresshLNIOcF = accounts[0]
		const uintDOENs07 = BigInt("1589")
		const addressOKvAUea = accounts[2]
		const addressEYcNK6I = accounts[4]
		const addressjfuNrJ = await KPLAYlj5dw7.unlock.call(addresshLNIOcF, uintdlp1Jfl, {from: accounts[4]});
		const boolS9PHQSZ = await KPLAYlj5dw7.increaseAllowance.call(addressOKvAUea, uintDOENs07, {from: accounts[0]});
		const boolVxnprDh = await KPLAYlj5dw7.isFrozen.call(addressEYcNK6I, {from: accounts[5]});
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uinteZaJ6wG = BigInt("616")
		const addresshUmlohL = accounts[1]
		const uintVNudCDO = BigInt("1475")
		const uintsJAD2ln = BigInt("390")
		const addresswtLRU7H = accounts[1]
		const boolyUSxNbg = await KPLAYHgF53DP.approve.call(addresshUmlohL, uinteZaJ6wG, {from: accounts[4]});
		const booljbLERSj = await KPLAYHgF53DP.transferWithLock.call(addresswtLRU7H, uintsJAD2ln, uintVNudCDO, {from: accounts[5]});

		assert.equal(booljbLERSj, true)
		assert.equal(boolyUSxNbg, true)
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const addressA4u5Yhv = accounts[1]
		const uintWfeo25f = BigInt("926")
		const addresscPphIiu = accounts[2]
		const addressCWsAd1 = await KPLAYHgF53DP.unfreeze.call(addressA4u5Yhv, {from: accounts[5]});
		const boolz8WC6Nv = await KPLAYHgF53DP.transfer.call(addresscPphIiu, uintWfeo25f, {from: accounts[4]});

		await expect(KPLAYHgF53DP.transfer.call(addresscPphIiu, uintWfeo25f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAv3VAaV = await KPLAY.new({from: accounts[2]});
		const addressaDS5zbQ = accounts[0]
		const uintaBCpzP = BigInt("1542")
		const uintsUyEEo5 = BigInt("173")
		const addressEoqTvqq = accounts[1]
		const address1We8sY = await KPLAYAv3VAaV.freeze.call(addressaDS5zbQ, {from: accounts[2]});
		const addressG2FUNP = await KPLAYAv3VAaV.lock.call(addressEoqTvqq, uintsUyEEo5, uintaBCpzP, {from: accounts[2]});

		await expect(KPLAYAv3VAaV.lock.call(addressEoqTvqq, uintsUyEEo5, uintaBCpzP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHy9nhDe = await KPLAY.new({from: accounts[2]});
		const addressrBYJjHV = accounts[2]
		const addressrjX0jcY = accounts[3]
		const addressoId3ru = accounts[3]
		const addresshawZIoj = accounts[4]
		const addressPSsQLww = await KPLAYHy9nhDe.transferOwnership.call(addressrBYJjHV, {from: accounts[2]});
		const uint256ypZR8DT = await KPLAYHy9nhDe.allowance.call(addressoId3ru, addressrjX0jcY, {from: accounts[3]});
		const boolP9gSuAt = await KPLAYHy9nhDe.isFrozen.call(addresshawZIoj, {from: accounts[4]});

		assert.equal(boolP9gSuAt, false)
		assert.equal(uint256ypZR8DT, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uintqD899i1 = BigInt("57")
		const addressRd5tiTH = accounts[0]
		const uintv725vEj = BigInt("926")
		const addresso6Ohtp4 = accounts[2]
		const boolLJ1X8Z = await KPLAYHgF53DP.increaseAllowance.call(addressRd5tiTH, uintqD899i1, {from: accounts[4]});
		const boolz8WC6Nv = await KPLAYHgF53DP.transfer.call(addresso6Ohtp4, uintv725vEj, {from: accounts[4]});

		assert.equal(boolLJ1X8Z, true)
		await expect(KPLAYHgF53DP.transfer.call(addresso6Ohtp4, uintv725vEj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uintv3xkhEm = BigInt("904")
		const uintlqKd0kA = BigInt("856")
		const addresshTBOHD = accounts[5]
		const uintz9bG7jS = BigInt("926")
		const addressIXAyY7V = accounts[2]
		await KPLAYHgF53DP.unpause.call({from: accounts[5]});
		const booloI5ae0l = await KPLAYHgF53DP.transferWithLock.call(addresshTBOHD, uintlqKd0kA, uintv3xkhEm, {from: accounts[0]});
		const boolz8WC6Nv = await KPLAYHgF53DP.transfer.call(addressIXAyY7V, uintz9bG7jS, {from: accounts[4]});

		await expect(KPLAYHgF53DP.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaSVUTXL = await KPLAY.new({from: accounts[4]});
		const uintJSxxCBr = BigInt("230")
		const addressGeQVCH4 = accounts[4]
		const uintIq1J4Ry = BigInt("1098")
		const addressCyvsdwC = accounts[5]
		const addressC3tyqwj = accounts[5]
		const uintuPIIQnT = BigInt("71")
		const addressmmgrMvq = accounts[3]
		const uint256WMF4F6j = await KPLAYaSVUTXL.currentTime.call({from: accounts[5]});
		const addresscYGQm0Q = await KPLAYaSVUTXL.burn.call(addressGeQVCH4, uintJSxxCBr, {from: accounts[4]});
		await KPLAYaSVUTXL.unpause.call({from: accounts[2]});
		const boolo4mf2cM = await KPLAYaSVUTXL.transferFrom.call(addressC3tyqwj, addressCyvsdwC, uintIq1J4Ry, {from: accounts[2]});
		const boolkHnjvH3 = await KPLAYaSVUTXL.mint.call(addressmmgrMvq, uintuPIIQnT, {from: accounts[0]});

		assert.equal(uint256WMF4F6j, BigInt("1630226093"))
		await expect(KPLAYaSVUTXL.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const uinte2TG6AV = BigInt("1698")
		const addressydpkUUm = accounts[4]
		const addresshhlUjJD = accounts[2]
		const boolte6KVO9 = await KPLAYbhgMfzS.mint.call(addressydpkUUm, uinte2TG6AV, {from: accounts[4]});
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addresshhlUjJD, {from: accounts[1]});

		assert.equal(boolte6KVO9, true)
		assert.equal(uint256O6y2Zt, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYHgF53DP = await KPLAY.new({from: accounts[5]});
		const uintbXV9vhK = BigInt("1202")
		const addressrgHyczs = accounts[1]
		await KPLAYHgF53DP.pause.call({from: accounts[5]});
		const boolyUSxNbg = await KPLAYHgF53DP.approve.call(addressrgHyczs, uintbXV9vhK, {from: accounts[4]});

		await expect(KPLAYHgF53DP.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const addressBF5bd0W = accounts[0]
		const uintOJHzcU2 = BigInt("224")
		const uintJb272c7 = BigInt("381")
		const addressbWpNqc = "0x0000000000000000000000000000000000000001"
		const addressBb0DhE3 = accounts[2]
		const boolYW2kHDc = await KPLAYbhgMfzS.isFrozen.call(addressBF5bd0W, {from: accounts[1]});
		const addressKKsC9Ck = await KPLAYbhgMfzS.lockAfter.call(addressbWpNqc, uintJb272c7, uintOJHzcU2, {from: accounts[4]});
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addressBb0DhE3, {from: accounts[1]});

		assert.equal(boolYW2kHDc, false)
		await expect(KPLAYbhgMfzS.lockAfter.call(addressbWpNqc, uintJb272c7, uintOJHzcU2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbhgMfzS = await KPLAY.new({from: accounts[4]});
		const uintRNplSrG = BigInt("906")
		const addressVG8lQm7 = accounts[3]
		const addressX2ofoRf = accounts[1]
		const addresssVipIs = await KPLAYbhgMfzS.unlock.call(addressVG8lQm7, uintRNplSrG, {from: accounts[4]});
		const uint256O6y2Zt = await KPLAYbhgMfzS.balanceOf.call(addressX2ofoRf, {from: accounts[1]});

		await expect(KPLAYbhgMfzS.unlock.call(addressVG8lQm7, uintRNplSrG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})