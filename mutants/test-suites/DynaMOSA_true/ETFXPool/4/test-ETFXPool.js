const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolf4XPG9t = await ETFXPool.new({from: accounts[0]});
		const addressF1L44P = accounts[4]
		const uintEGX4P2p = BigInt("710")
		const addresswXUFVSi = accounts[1]
		const addressP2ckZ0M = "0x0000000000000000000000000000000000000001"
//		const addressFVWJ1z9 = await ETFXPoolf4XPG9t.transferOwnership.call(addressF1L44P, {from: accounts[2]});
//		const boolnBoqaIG = await ETFXPoolf4XPG9t.approve.call(addresswXUFVSi, uintEGX4P2p, {from: accounts[1]});
//		const uint256sTDXxAw = await ETFXPoolf4XPG9t.balanceOf.call(addressP2ckZ0M, {from: accounts[0]});

		await expect(ETFXPoolf4XPG9t.transferOwnership.call(addressF1L44P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollJ3kjSt = await ETFXPool.new({from: accounts[2]});
		const uint8yzzMaMj = await ETFXPoollJ3kjSt.decimals.call({from: accounts[3]});
		const stringUhlCWWD = await ETFXPoollJ3kjSt.name.call({from: accounts[1]});
		const uint256xx9mN57 = await ETFXPoollJ3kjSt.rewardPerToken.call({from: accounts[2]});
		const addressEMGZfMu = await ETFXPoollJ3kjSt.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressEMGZfMu, 0x9DE7453d1f74743815472af2E40c77fb5dC3921f)
		assert.equal(stringUhlCWWD, "ETFX-FARM")
		assert.equal(uint256xx9mN57, BigInt("0"))
		assert.equal(uint8yzzMaMj, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolXtLrpg = await ETFXPool.new({from: accounts[4]});
		const uintXpOH7tM = BigInt("850")
		const addressHWCGDOG = accounts[3]
		const uintahYqSKR = BigInt("1583")
		const addressDHeOYlK = accounts[2]
		const addresszpn6ndZ = accounts[2]
//		const uint256zxcBoEi = await ETFXPoolXtLrpg.stake.call(uintXpOH7tM, {from: accounts[0]});
//		const uint256j7jDgbm = await ETFXPoolXtLrpg.earned.call(addressHWCGDOG, {from: accounts[2]});
//		const boolgwhn9I = await ETFXPoolXtLrpg.increaseAllowance.call(addressDHeOYlK, uintahYqSKR, {from: accounts[0]});
//		const uint8XzDLqeL = await ETFXPoolXtLrpg.decimals.call({from: accounts[3]});
//		const uint256sMG5Wtq = await ETFXPoolXtLrpg.balanceOf.call(addresszpn6ndZ, {from: accounts[4]});

		await expect(ETFXPoolXtLrpg.stake.call(uintXpOH7tM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolB56nsXd = await ETFXPool.new({from: accounts[4]});
		const uintO62uUWr = BigInt("169")
		const addressDt8h7WF = accounts[4]
		const uintVw8tOMP = BigInt("737")
		const booljQKv3uc = await ETFXPoolB56nsXd.increaseAllowance.call(addressDt8h7WF, uintO62uUWr, {from: accounts[1]});
//		const uint256o5jkHwF = await ETFXPoolB56nsXd.stake.call(uintVw8tOMP, {from: accounts[3]});

		assert.equal(booljQKv3uc, true)
		await expect(ETFXPoolB56nsXd.stake.call(uintVw8tOMP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringqwyTNq = "O8hFlmzQvAplQvAugV3xari"
		const string7mVPIp = "Qt1KKCeBD2zEtCLRprXwbg8TgaTFcCjqemf9iJbYnSPQUg3LjoPUoh8YIWKqfBjUFUcpD"
		const uintFUk8bso = BigInt("61")
		const ETFXPoolVfTjf8o = await ETFXPool.new(stringqwyTNq, string7mVPIp, uintFUk8bso, {from: accounts[4]});
		const uintaErxxBm = BigInt("885")
		const addressQivf7zx = accounts[4]
		const addressbenusR = accounts[5]
		const boolMAygOJ = await ETFXPoolVfTjf8o.transferFrom.call(addressbenusR, addressQivf7zx, uintaErxxBm, {from: accounts[5]});
		await ETFXPoolVfTjf8o.getReward.call({from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIMohC6n = await ETFXPool.new({from: accounts[1]});
		const addressluvcDL5 = accounts[1]
		const addressPCoxJX = accounts[2]
//		await ETFXPoolIMohC6n.nonReentrant.call({from: accounts[0]});
//		const uint256HVOvGza = await ETFXPoolIMohC6n.allowance.call(addressPCoxJX, addressluvcDL5, {from: accounts[0]});
//		await ETFXPoolIMohC6n.renounceOwnership.call({from: accounts[4]});

		await expect(ETFXPoolIMohC6n.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltLofEbk = await ETFXPool.new({from: accounts[3]});
		const addressQTGN2rF = accounts[1]
		const addressMV0vbUl = "0x0000000000000000000000000000000000000001"
		const uint256wUfiyNl = await ETFXPooltLofEbk.allowance.call(addressMV0vbUl, addressQTGN2rF, {from: accounts[0]});
//		await ETFXPooltLofEbk.onlyOwner.call({from: accounts[1]});
		await ETFXPooltLofEbk.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256wUfiyNl, BigInt("0"))
		await expect(ETFXPooltLofEbk.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEAuwY8 = await ETFXPool.new({from: accounts[2]});
		const uintx4JmtAs = BigInt("1987")
		const addressJyua4Ho = accounts[1]
//		await ETFXPoolEAuwY8.getReward.call({from: accounts[1]});
//		await ETFXPoolEAuwY8.renounceOwnership.call({from: accounts[3]});
//		const boolOfgn6GV = await ETFXPoolEAuwY8.increaseAllowance.call(addressJyua4Ho, uintx4JmtAs, {from: accounts[0]});

		await expect(ETFXPoolEAuwY8.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwroYI5V = await ETFXPool.new({from: accounts[3]});
		const uintvNhMLM = BigInt("219")
		const addressv7gtJtM = accounts[3]
		const addressGVovNV9 = accounts[5]
		const uint88e1bKw = await ETFXPoolwroYI5V.decimals.call({from: accounts[2]});
		const stringYbGsJtc = await ETFXPoolwroYI5V.symbol.call({from: accounts[0]});
//		const boolDgrn3RX = await ETFXPoolwroYI5V.transferFrom.call(addressGVovNV9, addressv7gtJtM, uintvNhMLM, {from: accounts[0]});

		assert.equal(stringYbGsJtc, "FETFX")
		assert.equal(uint88e1bKw, BigInt("8"))
		await expect(ETFXPoolwroYI5V.transferFrom.call(addressGVovNV9, addressv7gtJtM, uintvNhMLM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwroYI5V = await ETFXPool.new({from: accounts[3]});
		const uintSZeKFIO = BigInt("252")
		const addressRGvyFjk = accounts[2]
		const uintOqIZ7iR = BigInt("786")
		const addressijqNHAW = accounts[1]
		const uintNz0abuG = BigInt("961")
		const addressVuZ1Cqj = accounts[3]
		const addressqWhH9R1 = accounts[5]
		const uint88e1bKw = await ETFXPoolwroYI5V.decimals.call({from: accounts[2]});
//		const boolK1YlqL2 = await ETFXPoolwroYI5V.decreaseAllowance.call(addressRGvyFjk, uintSZeKFIO, {from: accounts[2]});
//		const boolMmyCfqU = await ETFXPoolwroYI5V.decreaseAllowance.call(addressijqNHAW, uintOqIZ7iR, {from: accounts[3]});
//		const boolDgrn3RX = await ETFXPoolwroYI5V.transferFrom.call(addressqWhH9R1, addressVuZ1Cqj, uintNz0abuG, {from: accounts[0]});

		assert.equal(uint88e1bKw, BigInt("8"))
		await expect(ETFXPoolwroYI5V.decreaseAllowance.call(addressRGvyFjk, uintSZeKFIO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollJ3kjSt = await ETFXPool.new({from: accounts[2]});
		const addressP18r6sa = accounts[4]
		const uint256QIHyPgL = await ETFXPoollJ3kjSt.balanceOf.call(addressP18r6sa, {from: accounts[1]});
		const uint8yzzMaMj = await ETFXPoollJ3kjSt.decimals.call({from: accounts[3]});
		const stringUhlCWWD = await ETFXPoollJ3kjSt.name.call({from: accounts[1]});
		const uint256xx9mN57 = await ETFXPoollJ3kjSt.rewardPerToken.call({from: accounts[2]});
		const addressEMGZfMu = await ETFXPoollJ3kjSt.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressEMGZfMu, 0x9DE7453d1f74743815472af2E40c77fb5dC3921f)
		assert.equal(stringUhlCWWD, "ETFX-FARM")
		assert.equal(uint256QIHyPgL, BigInt("0"))
		assert.equal(uint256xx9mN57, BigInt("0"))
		assert.equal(uint8yzzMaMj, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltYoNACr = await ETFXPool.new({from: accounts[4]});
		const uintHkq9jNz = BigInt("1981")
		const addressuwEiOtN = accounts[0]
		const uintzGok9D6 = BigInt("1191")
		const addressC0kIWH = "0x0000000000000000000000000000000000000001"
		const uintOmr7mBc = BigInt("516")
		const addresspeRWRyS = accounts[2]
		const uint256P8RwpHH = await ETFXPooltYoNACr.totalSupply.call({from: accounts[2]});
		const boolwqXjf4p = await ETFXPooltYoNACr.approve.call(addressuwEiOtN, uintHkq9jNz, {from: accounts[2]});
//		const boolWuTE6Z9 = await ETFXPooltYoNACr.decreaseAllowance.call(addressC0kIWH, uintzGok9D6, {from: accounts[3]});
//		const booleUKGUbe = await ETFXPooltYoNACr.approve.call(addresspeRWRyS, uintOmr7mBc, {from: accounts[1]});
//		const addressGf6mRmL = await ETFXPooltYoNACr.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwqXjf4p, true)
		assert.equal(uint256P8RwpHH, BigInt("0"))
		await expect(ETFXPooltYoNACr.decreaseAllowance.call(addressC0kIWH, uintzGok9D6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZ5D25Dc = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTueCbno = accounts[5]
		await ETFXPoolZ5D25Dc.getReward.call({from: accounts[5]});
		await ETFXPoolZ5D25Dc.renounceOwnership.call({from: accounts[5]});
		const uint256Aw5VZo = await ETFXPoolZ5D25Dc.balanceOf.call(addressTueCbno, {from: accounts[2]});
		await ETFXPoolZ5D25Dc.exit.call({from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEAuwY8 = await ETFXPool.new({from: accounts[2]});
//		await ETFXPoolEAuwY8.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolEAuwY8.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollJ3kjSt = await ETFXPool.new({from: accounts[2]});
		const uintREGdbLA = BigInt("1898")
		const uintADJZ7GV = BigInt("452")
		const addressAK09NKV = "0x0000000000000000000000000000000000000001"
		const stringUhlCWWD = await ETFXPoollJ3kjSt.name.call({from: accounts[1]});
//		const uint256RSMxm1m = await ETFXPoollJ3kjSt.withdraw.call(uintREGdbLA, {from: accounts[4]});
//		const boolnVZvdg7 = await ETFXPoollJ3kjSt.decreaseAllowance.call(addressAK09NKV, uintADJZ7GV, {from: accounts[0]});
//		const uint256xx9mN57 = await ETFXPoollJ3kjSt.rewardPerToken.call({from: accounts[2]});
//		const addressEMGZfMu = await ETFXPoollJ3kjSt.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringUhlCWWD, "ETFX-FARM")
		await expect(ETFXPoollJ3kjSt.withdraw.call(uintREGdbLA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolwroYI5V = await ETFXPool.new({from: accounts[3]});
		const uintZn99P8m = BigInt("1361")
		const addressjKbthk4 = accounts[0]
		const uintVoGcqv = BigInt("252")
		const addressZl5rR56 = accounts[3]
		const uint88e1bKw = await ETFXPoolwroYI5V.decimals.call({from: accounts[2]});
//		const boolTnIaSrK = await ETFXPoolwroYI5V.transfer.call(addressjKbthk4, uintZn99P8m, {from: accounts[3]});
//		const boolK1YlqL2 = await ETFXPoolwroYI5V.decreaseAllowance.call(addressZl5rR56, uintVoGcqv, {from: accounts[2]});

		assert.equal(uint88e1bKw, BigInt("8"))
		await expect(ETFXPoolwroYI5V.transfer.call(addressjKbthk4, uintZn99P8m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEAuwY8 = await ETFXPool.new({from: accounts[2]});
		const addressBaKmQ1p = accounts[4]
		const uintiqjrlGQ = BigInt("1418")
		const addressyJS6Pk = await ETFXPoolEAuwY8.transferOwnership.call(addressBaKmQ1p, {from: accounts[2]});
//		const uint256VFgan56 = await ETFXPoolEAuwY8.withdraw.call(uintiqjrlGQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolEAuwY8.withdraw.call(uintiqjrlGQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollJ3kjSt = await ETFXPool.new({from: accounts[2]});
//		await ETFXPoollJ3kjSt.renounceOwnership.call({from: accounts[2]});
//		const uint256xx9mN57 = await ETFXPoollJ3kjSt.rewardPerToken.call({from: accounts[2]});

		await expect(ETFXPoollJ3kjSt.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollJ3kjSt = await ETFXPool.new({from: accounts[2]});
		const uintQBVyEM1 = BigInt("0")
		const addressgp4GIjR = accounts[2]
		const uint256xx9mN57 = await ETFXPoollJ3kjSt.rewardPerToken.call({from: accounts[2]});
		const boolYsZuY4j = await ETFXPoollJ3kjSt.transfer.call(addressgp4GIjR, uintQBVyEM1, {from: accounts[4]});

		assert.equal(boolYsZuY4j, true)
		assert.equal(uint256xx9mN57, BigInt("0"))
	});
})