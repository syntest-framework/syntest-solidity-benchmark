const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100sBFy0NU = await Token50X100.new({from: accounts[4]});
		const uintPMhtLR1 = BigInt("1402")
		const addressRCABv3L = accounts[1]
		const addressyWAaxOM = accounts[2]
		const boolM5gaTFV = false
		const addressvsG07IA = accounts[2]
//		const boolur3NnO9 = await Token50X100sBFy0NU.transferFrom.call(addressyWAaxOM, addressRCABv3L, uintPMhtLR1, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100sBFy0NU.setWhiteList.call(addressvsG07IA, boolM5gaTFV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100sBFy0NU.transferFrom.call(addressyWAaxOM, addressRCABv3L, uintPMhtLR1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Hi54gx = await Token50X100.new({from: accounts[1]});
		const addresshYkqRuI = accounts[2]
		const uint256FRk6aji = await Token50X100Hi54gx.balanceOf.call(addresshYkqRuI, {from: accounts[3]});
//		await Token50X100Hi54gx.lock.call({from: accounts[2]});
//		await Token50X100Hi54gx.lock.call({from: accounts[5]});

		assert.equal(uint256FRk6aji, BigInt("0"))
		await expect(Token50X100Hi54gx.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KDLtxt0 = await Token50X100.new({from: accounts[4]});
		const addressi8vqeg6 = accounts[0]
		const addressEzk0dXQ = accounts[4]
		const uintaX9JRJ = BigInt("1883")
		const uinthcpEEiE = BigInt("1206")
		const addressqEyTdvp = accounts[2]
		const uintMbD8kum = BigInt("1900")
		const addressQuBJim = accounts[4]
		const uint256SGS0dnv = await Token50X100KDLtxt0.allowance.call(addressEzk0dXQ, addressi8vqeg6, {from: accounts[0]});
//		const boolvIck2Mn = await Token50X100KDLtxt0.setVesting.call(addressqEyTdvp, uinthcpEEiE, uintaX9JRJ, {from: accounts[1]});
//		await Token50X100KDLtxt0.lock.call({from: accounts[0]});
//		const boolb7yPwBv = await Token50X100KDLtxt0.increaseApproval.call(addressQuBJim, uintMbD8kum, {from: accounts[1]});

		assert.equal(uint256SGS0dnv, BigInt("0"))
		await expect(Token50X100KDLtxt0.setVesting.call(addressqEyTdvp, uinthcpEEiE, uintaX9JRJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HrU4BI9 = await Token50X100.new({from: accounts[2]});
		const uintyJBJ4Fy = BigInt("641")
		const addresskUqxIvp = "0x0000000000000000000000000000000000000001"
		const uints3kJA1 = BigInt("895")
		const addresse1FSdt4 = accounts[4]
		const boolHLfA8n = true
		const addressdEuM7E = accounts[1]
		const boolLQ5qWSF = await Token50X100HrU4BI9.increaseApproval.call(addresskUqxIvp, uintyJBJ4Fy, {from: accounts[4]});
//		const boolNDPlO74 = await Token50X100HrU4BI9.transfer.call(addresse1FSdt4, uints3kJA1, {from: accounts[5]});
//		await Token50X100HrU4BI9.setWhiteListReceivers.call(addressdEuM7E, boolHLfA8n, {from: accounts[0]});
//		await Token50X100HrU4BI9.onlyOwner.call({from: accounts[1]});

		assert.equal(boolLQ5qWSF, true)
		await expect(Token50X100HrU4BI9.transfer.call(addresse1FSdt4, uints3kJA1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100W663il5 = await Token50X100.new({from: accounts[2]});
		const addressLkolfEh = accounts[1]
		const uintNhWXkOc = BigInt("1630")
		const addressOZGNt3J = accounts[3]
		const uintDjzFP5Z = BigInt("182")
		const uint256EdbiUXk = await Token50X100W663il5.balanceOf.call(addressLkolfEh, {from: "0x0000000000000000000000000000000000000001"});
		const boolYicCz49 = await Token50X100W663il5.decreaseApproval.call(addressOZGNt3J, uintNhWXkOc, {from: accounts[4]});
		const boolTx6p6JE = await Token50X100W663il5.setMaxLockPeriod.call(uintDjzFP5Z, {from: accounts[4]});

		assert.equal(boolTx6p6JE, false)
		assert.equal(boolYicCz49, true)
		assert.equal(uint256EdbiUXk, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100sBFy0NU = await Token50X100.new({from: accounts[4]});
		const uintf6gIEh = BigInt("982")
		const addressFgh9Le2 = accounts[1]
		const uintk8NAcIf = BigInt("1402")
		const addressmIz1Eo = accounts[1]
		const addressaWT4gw4 = accounts[2]
		const addressmBzVoq4 = accounts[5]
		const boolM5gaTFV = false
		const addressL5cdY0l = accounts[2]
		const booloSZ9xEE = await Token50X100sBFy0NU.approve.call(addressFgh9Le2, uintf6gIEh, {from: accounts[2]});
//		const boolur3NnO9 = await Token50X100sBFy0NU.transferFrom.call(addressaWT4gw4, addressmIz1Eo, uintk8NAcIf, {from: "0x0000000000000000000000000000000000000001"});
//		const addresskMFxWmE = await Token50X100sBFy0NU.transferOwnership.call(addressmBzVoq4, {from: accounts[4]});
//		await Token50X100sBFy0NU.setWhiteList.call(addressL5cdY0l, boolM5gaTFV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booloSZ9xEE, true)
		await expect(Token50X100sBFy0NU.transferFrom.call(addressaWT4gw4, addressmIz1Eo, uintk8NAcIf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sBFy0NU = await Token50X100.new({from: accounts[4]});
		const uintq53fUIk = BigInt("508")
		const addressqX3ai9 = accounts[5]
		const addressThK3Ysh = accounts[3]
		const boolM5gaTFV = true
		const addressCtkaaXn = accounts[3]
//		const boolfPoDBor = await Token50X100sBFy0NU.issueTokens.call(addressThK3Ysh, addressqX3ai9, uintq53fUIk, {from: accounts[0]});
//		await Token50X100sBFy0NU.setWhiteList.call(addressCtkaaXn, boolM5gaTFV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100sBFy0NU.issueTokens.call(addressThK3Ysh, addressqX3ai9, uintq53fUIk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HrU4BI9 = await Token50X100.new({from: accounts[2]});
		const uintjOoRweA = BigInt("641")
		const addressnz0RKob = "0x0000000000000000000000000000000000000001"
		const uintPL9bGS = BigInt("902")
		const uintLetvTC0 = BigInt("221")
		const uintIFWCDGR = BigInt("895")
		const addressJ1K4UhN = accounts[4]
		const boolLQ5qWSF = await Token50X100HrU4BI9.increaseApproval.call(addressnz0RKob, uintjOoRweA, {from: accounts[4]});
//		const boolO53uwQ = await Token50X100HrU4BI9.safeLock.call(uintLetvTC0, uintPL9bGS, {from: accounts[4]});
//		const boolNDPlO74 = await Token50X100HrU4BI9.transfer.call(addressJ1K4UhN, uintIFWCDGR, {from: accounts[5]});
//		await Token50X100HrU4BI9.onlyOwner.call({from: accounts[1]});

		assert.equal(boolLQ5qWSF, true)
		await expect(Token50X100HrU4BI9.safeLock.call(uintLetvTC0, uintPL9bGS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YPYL4JV = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiJ068jk = accounts[3]
		const addresschuaPUL = accounts[4]
		const uintkXiYvuI = BigInt("1875")
		const uintrcLkU8K = BigInt("1968")
		const addresscHp3XLc = accounts[0]
		const addressxm4HjEF = accounts[1]
		const uintQuee0oR = BigInt("246")
		const stringTVePxqq = "elryiwzvJ9S7F7J1HdbgWN9tDynazkMGbh92gHlyCDOqi2hd1KYS6eS4G19wX"
		const stringSQwNCQD = "TghEv8YFXYcEHpICv98HHEXwhCB9TofL6JP84AVvGpfdNeuiATM5rVUWhdgQh6vHwY4AhXli5rB"
		const addressQMLXlTZ = accounts[0]
		await Token50X100YPYL4JV.setLinkingAddresses.call(addresschuaPUL, addressiJ068jk, {from: accounts[4]});
		const boolIapGdZ = await Token50X100YPYL4JV._transfer.call(addressxm4HjEF, addresscHp3XLc, uintrcLkU8K, uintkXiYvuI, {from: accounts[2]});
		const boolizQaZya = await Token50X100YPYL4JV.setSymbolNameDecimals.call(stringSQwNCQD, stringTVePxqq, uintQuee0oR, {from: accounts[2]});
		await Token50X100YPYL4JV.setTokenContract.call(addressQMLXlTZ, {from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100Wqeb04e = await Token50X100.new({from: accounts[2]});
		const uintqnSkzSJ = BigInt("53")
		const stringL96GyNz = "GXu02ePteD8dEtkL1Ci9uR25X2LpG5VmB61PEVU9YpWJwWuNDe86fyquaLvNHQCYuTLzr5n"
		const stringd6zFMeb = "dczhMBYsLpo1j2AiYMr8iwSGEcpXY40SDjrWwnDXhP6TpfZrwu48rhAP3Gjq8UmgXxr6ySwwUXj"
		const uintYgyPmYJ = BigInt("819")
		const uintyImgTB9 = BigInt("95")
		const addressWBtqrhr = accounts[2]
		const addressKWCegLe = accounts[3]
		const uintpLcDwmN = BigInt("1950")
		const addressBv8sHYU = accounts[3]
		const addressFpkLGIW = accounts[2]
		const uintKZs53IA = BigInt("211")
		const addresshqBFmg = accounts[3]
//		await Token50X100Wqeb04e.setSymbolNameDecimals.call(stringd6zFMeb, stringL96GyNz, uintqnSkzSJ, {from: accounts[2]});
//		const boolYcXEwCW = await Token50X100Wqeb04e._transfer.call(addressKWCegLe, addressWBtqrhr, uintyImgTB9, uintYgyPmYJ, {from: accounts[0]});
//		const boolk72Xbfk = await Token50X100Wqeb04e.transferFrom.call(addressFpkLGIW, addressBv8sHYU, uintpLcDwmN, {from: accounts[4]});
//		const boolvkg1xd3 = await Token50X100Wqeb04e.transfer.call(addresshqBFmg, uintKZs53IA, {from: accounts[4]});

		await expect(Token50X100Wqeb04e.setSymbolNameDecimals.call(stringd6zFMeb, stringL96GyNz, uintqnSkzSJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100W663il5 = await Token50X100.new({from: accounts[2]});
		const uintWkbhBvr = BigInt("1630")
		const addressyELGXt = accounts[3]
		const addressXyPQUE1 = accounts[3]
		const uintjd6JudJ = BigInt("185")
		const boolYicCz49 = await Token50X100W663il5.decreaseApproval.call(addressyELGXt, uintWkbhBvr, {from: accounts[4]});
		const uint256G8JjhB1 = await Token50X100W663il5.balanceOf.call(addressXyPQUE1, {from: accounts[0]});
		const uint256KbLC4g = await Token50X100W663il5.totalSupply.call({from: accounts[1]});
		const boolTx6p6JE = await Token50X100W663il5.setMaxLockPeriod.call(uintjd6JudJ, {from: accounts[4]});

		assert.equal(boolTx6p6JE, false)
		assert.equal(boolYicCz49, true)
		assert.equal(uint256G8JjhB1, BigInt("0"))
		assert.equal(uint256KbLC4g, BigInt("4714285714285710"))
	});

	it('test for Token50X100', async () => {
		const Token50X100W663il5 = await Token50X100.new({from: accounts[2]});
		const addresswD7ttwA = accounts[1]
		const uintdclpxo = BigInt("215")
		const uintk0aGepZ = BigInt("1697")
		const addressE8OeXV = accounts[3]
		const uintQxBeGC = BigInt("236")
		const stringAQeyW1f = "yF35HFmWaUqpljtuZWR7IJBJtDPBjkPfWEsyVcDLa45Tbzrato5RfEPjV"
		const stringVvO8TZ = "xdfmCqadVXFT3Jn14X9w7y"
		const uinth30kusP = BigInt("1620")
		const addressqxHFi5L = accounts[3]
		const uintBnvwsL0 = BigInt("182")
		const uint256EdbiUXk = await Token50X100W663il5.balanceOf.call(addresswD7ttwA, {from: "0x0000000000000000000000000000000000000001"});
		const boolPGlL2KX = await Token50X100W663il5.setVesting.call(addressE8OeXV, uintk0aGepZ, uintdclpxo, {from: accounts[2]});
//		await Token50X100W663il5.setSymbolNameDecimals.call(stringVvO8TZ, stringAQeyW1f, uintQxBeGC, {from: accounts[0]});
//		const boolYicCz49 = await Token50X100W663il5.decreaseApproval.call(addressqxHFi5L, uinth30kusP, {from: accounts[4]});
//		await Token50X100W663il5.release.call({from: accounts[1]});
//		await Token50X100W663il5.onlyOwner.call({from: accounts[1]});
//		const boolTx6p6JE = await Token50X100W663il5.setMaxLockPeriod.call(uintBnvwsL0, {from: accounts[4]});

		assert.equal(boolPGlL2KX, true)
		assert.equal(uint256EdbiUXk, BigInt("0"))
		await expect(Token50X100W663il5.setSymbolNameDecimals.call(stringVvO8TZ, stringAQeyW1f, uintQxBeGC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HrU4BI9 = await Token50X100.new({from: accounts[2]});
		const uintQlrswPE = BigInt("641")
		const addressQ5rdwXq = "0x0000000000000000000000000000000000000001"
		const boolHLfA8n = true
		const addressIYlR6hQ = accounts[1]
		const uintSrMAyBZ = BigInt("1196")
		const addressGm0YTQI = accounts[2]
		const addressTPG7uMs = accounts[5]
		const boolLQ5qWSF = await Token50X100HrU4BI9.increaseApproval.call(addressQ5rdwXq, uintQlrswPE, {from: accounts[4]});
//		await Token50X100HrU4BI9.release.call({from: accounts[2]});
//		await Token50X100HrU4BI9.setWhiteListReceivers.call(addressIYlR6hQ, boolHLfA8n, {from: accounts[0]});
//		const boolbChOjC2 = await Token50X100HrU4BI9.increaseApproval.call(addressGm0YTQI, uintSrMAyBZ, {from: accounts[3]});
//		const uint256rifD8Gf = await Token50X100HrU4BI9.balanceOf.call(addressTPG7uMs, {from: accounts[0]});

		assert.equal(boolLQ5qWSF, true)
		await expect(Token50X100HrU4BI9.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lT5rXnw = await Token50X100.new({from: accounts[1]});
		const uintV80V0TF = BigInt("1748")
		const addressbsg5izq = "0x0000000000000000000000000000000000000000"
//		const booluYkoTn6 = await Token50X100lT5rXnw.transfer.call(addressbsg5izq, uintV80V0TF, {from: accounts[4]});
//		await Token50X100lT5rXnw.release.call({from: accounts[0]});

		await expect(Token50X100lT5rXnw.transfer.call(addressbsg5izq, uintV80V0TF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HrU4BI9 = await Token50X100.new({from: accounts[2]});
		const uintZtq8Lff = BigInt("60")
		const addressU97fihk = accounts[3]
		const uintHRo5ESU = BigInt("641")
		const addressr5UbeDM = "0x0000000000000000000000000000000000000001"
		const uintycpHCb2 = BigInt("296")
		const uinty0ZjJB = BigInt("1652")
		const addressKwok56c = accounts[2]
		const addressuYfTt7L = accounts[3]
		const uintv7WPcO6 = BigInt("318")
		const uintGm6TB6 = BigInt("1646")
		const addresshL32Gyk = accounts[1]
		const addresszCuRo0O = accounts[4]
		const addressvHT5ssY = accounts[3]
		const uintzmgAMSW = BigInt("1038")
		const addressbXZqD8B = "0x0000000000000000000000000000000000000001"
		const uint1FkTQ9 = BigInt("516")
		const boolHLfA8n = true
		const addressCBlEVf = accounts[1]
		const uintOWhdrgd = BigInt("1205")
		const addresssZDNs8 = accounts[2]
		const addressk4KOuW = accounts[5]
		const booljIODaO4 = await Token50X100HrU4BI9.decreaseApproval.call(addressU97fihk, uintZtq8Lff, {from: accounts[4]});
		const boolLQ5qWSF = await Token50X100HrU4BI9.increaseApproval.call(addressr5UbeDM, uintHRo5ESU, {from: accounts[4]});
//		const boolnghGFy = await Token50X100HrU4BI9._transfer.call(addressuYfTt7L, addressKwok56c, uinty0ZjJB, uintycpHCb2, {from: accounts[2]});
//		const boolHW4j28 = await Token50X100HrU4BI9._transfer.call(addresszCuRo0O, addresshL32Gyk, uintGm6TB6, uintv7WPcO6, {from: accounts[4]});
//		const addressaAnBIGa = await Token50X100HrU4BI9.setOriginalContract.call(addressvHT5ssY, {from: accounts[5]});
//		const boolhocqU6 = await Token50X100HrU4BI9.transfer.call(addressbXZqD8B, uintzmgAMSW, {from: accounts[0]});
//		await Token50X100HrU4BI9.release.call({from: accounts[2]});
//		const boolPVn3qm3 = await Token50X100HrU4BI9.setMaxLockPeriod.call(uint1FkTQ9, {from: accounts[1]});
//		await Token50X100HrU4BI9.setWhiteListReceivers.call(addressCBlEVf, boolHLfA8n, {from: accounts[0]});
//		const boolbChOjC2 = await Token50X100HrU4BI9.increaseApproval.call(addresssZDNs8, uintOWhdrgd, {from: accounts[3]});
//		const uint256rifD8Gf = await Token50X100HrU4BI9.balanceOf.call(addressk4KOuW, {from: accounts[0]});

		assert.equal(boolLQ5qWSF, true)
		assert.equal(booljIODaO4, true)
		await expect(Token50X100HrU4BI9._transfer.call(addressuYfTt7L, addressKwok56c, uinty0ZjJB, uintycpHCb2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lT5rXnw = await Token50X100.new({from: accounts[1]});
		const uintVY5IJRo = BigInt("1408")
		const uintrvto4bn = BigInt("1748")
		const addresskwiHd0v = "0x00000000000000000000000000000000000000-1"
		const uinttYD6bBi = BigInt("1741")
		const uintgTKSGXl = BigInt("2038")
		const addressr7GMi1w = "0x0000000000000000000000000000000000000001"
		const uintaLrJrNM = BigInt("194")
		const uintej72Ml5 = BigInt("1418")
		const uintn7ptj3K = BigInt("1901")
		const boolxlkFSJ2 = await Token50X100lT5rXnw.setMaxLockPeriod.call(uintVY5IJRo, {from: accounts[5]});
//		const booluYkoTn6 = await Token50X100lT5rXnw.transfer.call(addresskwiHd0v, uintrvto4bn, {from: accounts[4]});
//		const boolF95MyHq = await Token50X100lT5rXnw.setVesting.call(addressr7GMi1w, uintgTKSGXl, uinttYD6bBi, {from: accounts[4]});
//		const boolqHGegY6 = await Token50X100lT5rXnw.setMaxLockPeriod.call(uintaLrJrNM, {from: accounts[1]});
//		const boolmRzjcPh = await Token50X100lT5rXnw.safeLock.call(uintn7ptj3K, uintej72Ml5, {from: accounts[2]});

		assert.equal(boolxlkFSJ2, false)
		await expect(Token50X100lT5rXnw.transfer.call(addresskwiHd0v, uintrvto4bn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HrU4BI9 = await Token50X100.new({from: accounts[2]});
		const uinttx6OFAp = BigInt("60")
		const addressUSyWLn8 = accounts[3]
		const boolF5wsgSX = false
		const addressYimKY1U = accounts[5]
		const uintktbvxhu = BigInt("318")
		const uintRdH5Kdx = BigInt("1646")
		const addressNEJKT1d = accounts[1]
		const addressPukTk2A = accounts[4]
		const addressSC8IfDt = accounts[5]
		const boolHLfA8n = true
		const addressciKcSp = accounts[1]
		const uintdYpWg5t = BigInt("341")
		const addressYk6MMyz = accounts[1]
		const addressjqseOdP = accounts[0]
		const addressHnG2kIa = accounts[5]
		const booljIODaO4 = await Token50X100HrU4BI9.decreaseApproval.call(addressUSyWLn8, uinttx6OFAp, {from: accounts[4]});
//		await Token50X100HrU4BI9.setWhiteListReceivers.call(addressYimKY1U, boolF5wsgSX, {from: accounts[2]});
//		const boolHW4j28 = await Token50X100HrU4BI9._transfer.call(addressPukTk2A, addressNEJKT1d, uintRdH5Kdx, uintktbvxhu, {from: accounts[4]});
//		const addressaAnBIGa = await Token50X100HrU4BI9.setOriginalContract.call(addressSC8IfDt, {from: accounts[5]});
//		await Token50X100HrU4BI9.release.call({from: accounts[2]});
//		await Token50X100HrU4BI9.setWhiteListReceivers.call(addressciKcSp, boolHLfA8n, {from: accounts[0]});
//		const boollTbfXAn = await Token50X100HrU4BI9.transferFrom.call(addressjqseOdP, addressYk6MMyz, uintdYpWg5t, {from: accounts[2]});
//		const uint256rifD8Gf = await Token50X100HrU4BI9.balanceOf.call(addressHnG2kIa, {from: accounts[0]});

		assert.equal(booljIODaO4, true)
		await expect(Token50X100HrU4BI9.setWhiteListReceivers.call(addressYimKY1U, boolF5wsgSX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lT5rXnw = await Token50X100.new({from: accounts[1]});
		const addressumHXh0z = accounts[0]
		const uintOEVf8e1 = BigInt("946")
		const addressnC8k7KY = "0x0000000000000000000000000000000000000001"
//		await Token50X100lT5rXnw.setTokenContract.call(addressumHXh0z, {from: accounts[1]});
//		const booluYkoTn6 = await Token50X100lT5rXnw.transfer.call(addressnC8k7KY, uintOEVf8e1, {from: accounts[4]});

		await expect(Token50X100lT5rXnw.setTokenContract.call(addressumHXh0z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100fkDbUo = await Token50X100.new({from: accounts[0]});
		const addressp3qCCER = accounts[4]
		const addressmJkRgCY = accounts[1]
		const uintL03Sibb = BigInt("559")
		const addressnYrSlKS = accounts[3]
		const addresshNA3ekc = accounts[4]
		const uintbcAUHf9 = BigInt("587")
		const addressPESAzyj = accounts[0]
		const addressLkWQYvx = await Token50X100fkDbUo.transferOwnership.call(addressp3qCCER, {from: accounts[0]});
//		await Token50X100fkDbUo.release.call({from: accounts[4]});
//		await Token50X100fkDbUo.lock.call({from: accounts[1]});
//		await Token50X100fkDbUo.setTokenContract.call(addressmJkRgCY, {from: accounts[3]});
//		const boolRk8QY6B = await Token50X100fkDbUo.transferFrom.call(addresshNA3ekc, addressnYrSlKS, uintL03Sibb, {from: accounts[1]});
//		const boolMj5d5Oa = await Token50X100fkDbUo.transfer.call(addressPESAzyj, uintbcAUHf9, {from: accounts[1]});

		await expect(Token50X100fkDbUo.release.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lT5rXnw = await Token50X100.new({from: accounts[1]});
		const uintoa3tFu = BigInt("1612")
		const addressnBpyDQ2 = accounts[2]
		const uinttl4Lr32 = BigInt("1587")
		const addressvzaj5e = accounts[0]
		const uintch4zZPU = BigInt("1748")
		const addressOYSo0fG = "0x0000000000000000000000000000000000000001"
		const addressJw65eO0 = accounts[3]
		const boolcPBxVEI = await Token50X100lT5rXnw.decreaseApproval.call(addressnBpyDQ2, uintoa3tFu, {from: accounts[1]});
		const booldjs4RmU = await Token50X100lT5rXnw.increaseApproval.call(addressvzaj5e, uinttl4Lr32, {from: accounts[4]});
		const uint256g6REl5S = await Token50X100lT5rXnw.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100lT5rXnw.lock.call({from: accounts[1]});
//		const booluYkoTn6 = await Token50X100lT5rXnw.transfer.call(addressOYSo0fG, uintch4zZPU, {from: accounts[4]});
//		const addresslNKokuw = await Token50X100lT5rXnw.transferOwnership.call(addressJw65eO0, {from: accounts[3]});

		assert.equal(boolcPBxVEI, true)
		assert.equal(booldjs4RmU, true)
		assert.equal(uint256g6REl5S, BigInt("4714285714285710"))
		await expect(Token50X100lT5rXnw.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HrU4BI9 = await Token50X100.new({from: accounts[2]});
		const addressxM88k98 = accounts[0]
		const addressP9bXeqM = accounts[4]
		const uintQrE2mbp = BigInt("60")
		const addressRdhhiV = accounts[6]
//		await Token50X100HrU4BI9.setLinkingAddresses.call(addressP9bXeqM, addressxM88k98, {from: accounts[2]});
//		await Token50X100HrU4BI9.release.call({from: accounts[4]});
//		const booljIODaO4 = await Token50X100HrU4BI9.decreaseApproval.call(addressRdhhiV, uintQrE2mbp, {from: accounts[4]});

		await expect(Token50X100HrU4BI9.setLinkingAddresses.call(addressP9bXeqM, addressxM88k98, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})