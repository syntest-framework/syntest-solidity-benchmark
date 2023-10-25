const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPf4XPG9t = await DSP.new({from: accounts[0]});
		const addressP2ckZ0M = "0x0000000000000000000000000000000000000001"
//		await DSPf4XPG9t.unpause.call({from: accounts[1]});
//		await DSPf4XPG9t.unpause.call({from: accounts[2]});
//		const addresssTDXxAw = await DSPf4XPG9t.removePauser.call(addressP2ckZ0M, {from: accounts[0]});

		await expect(DSPf4XPG9t.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXQ3OA8l = await DSP.new({from: accounts[0]});
		const uintLcepJXt = BigInt("375")
		const addressgBgeXBO = accounts[3]
		const uintUhlCWWD = BigInt("566")
		const addressLb2sdA = accounts[0]
		const addressCGZfMuA = accounts[0]
		const addressdp05pli = accounts[4]
		const uint8d6ndZ2M = await DSPXQ3OA8l.decimals.call({from: accounts[0]});
		const boolhpgwhXd = await DSPXQ3OA8l.approve.call(addressgBgeXBO, uintLcepJXt, {from: accounts[1]});
		const uint8R7rxduI = await DSPXQ3OA8l.decimals.call({from: accounts[5]});
		const boolAPMW4Pj = await DSPXQ3OA8l.transfer.call(addressLb2sdA, uintUhlCWWD, {from: accounts[0]});
		const uint256RFXURdJ = await DSPXQ3OA8l.allowance.call(addressdp05pli, addressCGZfMuA, {from: accounts[5]});
		const stringmtRU74q = await DSPXQ3OA8l.symbol.call({from: accounts[4]});

		assert.equal(boolAPMW4Pj, true)
		assert.equal(boolhpgwhXd, true)
		assert.equal(stringmtRU74q, "DSP")
		assert.equal(uint256RFXURdJ, BigInt("0"))
		assert.equal(uint8R7rxduI, BigInt("18"))
		assert.equal(uint8d6ndZ2M, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPPeNHeOY = await DSP.new({from: accounts[3]});
		const uintsJrLxdt = BigInt("1472")
		const addressncBoEiH = accounts[5]
		const addressfOH7tMZ = accounts[2]
		const uintiRWCGDO = BigInt("222")
		const addressAkz8y1 = accounts[1]
		const addressWwhn9IP = accounts[0]
		const boolyiLrL56 = await DSPPeNHeOY.paused.call({from: accounts[3]});
//		const boolea6NjLO = await DSPPeNHeOY.transferFrom.call(addressfOH7tMZ, addressncBoEiH, uintsJrLxdt, {from: accounts[5]});
//		const boolj7jDgbm = await DSPPeNHeOY.transferFrom.call(addressWwhn9IP, addressAkz8y1, uintiRWCGDO, {from: accounts[2]});

		assert.equal(boolyiLrL56, false)
		await expect(DSPPeNHeOY.transferFrom.call(addressfOH7tMZ, addressncBoEiH, uintsJrLxdt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringLPIpPUk = "2zEtCLRprXwbg8TgaTFcCjqemf9iJbYnSPQUg3LjoPUoh8YIWKqfBjUFUcpD1XC"
		const stringIMohC6n = "rIEevvjzvXESvDsFdz92WqMXpJxDK30vUNrDoV8ruDJIiOqyKvWONA4HMN2Cq3d0Owe9XYZhVLrro4tH8LGi8VRToAIduS8BW"
		const uintJ4Ia7H2 = BigInt("247")
		const DSPqzbnE9 = await DSP.new(stringLPIpPUk, stringIMohC6n, uintJ4Ia7H2, {from: accounts[2]});
		const uintyFCRQnu = BigInt("1590")
		const addressWaWbYs1 = accounts[0]
		const addressHVOvGza = accounts[5]
		const boolkf7Dj5 = await DSPqzbnE9.transfer.call(addressWaWbYs1, uintyFCRQnu, {from: accounts[2]});
		const addressqT5sQ5 = await DSPqzbnE9.addPauser.call(addressHVOvGza, {from: accounts[1]});
		const stringIcHPCox = await DSPqzbnE9.symbol.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPi8Yfgn6 = await DSP.new({from: accounts[0]});
		const uintDhMLMGN = BigInt("1084")
		const addressWtJtMJv = accounts[5]
		const uintOI5Vkwa = BigInt("1331")
		const uintf2rHq6r = BigInt("1321")
		const addressBJei2RG = accounts[3]
		const addresssqlHTMm = accounts[5]
		const boolhn3RXNh = await DSPi8Yfgn6.mint.call(addressWtJtMJv, uintDhMLMGN, {from: accounts[0]});
//		const boolNiRzTX7 = await DSPi8Yfgn6.transferWithLock.call(addressBJei2RG, uintf2rHq6r, uintOI5Vkwa, {from: accounts[1]});
//		const addressKQfYlxs = await DSPi8Yfgn6.addPauser.call(addresssqlHTMm, {from: accounts[4]});
//		await DSPi8Yfgn6.renouncePauser.call({from: accounts[2]});

		assert.equal(boolhn3RXNh, true)
		await expect(DSPi8Yfgn6.transferWithLock.call(addressBJei2RG, uintf2rHq6r, uintOI5Vkwa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmj8uLem = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskrXTgOp = accounts[4]
		const boolIbRbyx3 = await DSPmj8uLem.isPauser.call(addresskrXTgOp, {from: accounts[2]});
		await DSPmj8uLem.whenPaused.call({from: accounts[0]});
		const uint256jaYlAHb = await DSPmj8uLem.totalSupply.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPCRsjPrX = await DSP.new({from: accounts[0]});
		const uintPmgGC9D = BigInt("31")
		const addresswf7qdj2 = accounts[4]
		const uintgoIhep = BigInt("305")
		const addressWrMYWJI = accounts[2]
		const uintCsYGYxb = BigInt("1588")
		const addresshIgWIWa = accounts[0]
		const boolGMLlGr6 = await DSPCRsjPrX.increaseAllowance.call(addresswf7qdj2, uintPmgGC9D, {from: accounts[1]});
		const stringD2dJdA = await DSPCRsjPrX.name.call({from: accounts[3]});
//		await DSPCRsjPrX.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolZMO5zb7 = await DSPCRsjPrX.transfer.call(addressWrMYWJI, uintgoIhep, {from: "0x0000000000000000000000000000000000000001"});
//		const boolajcoLWJ = await DSPCRsjPrX.transfer.call(addresshIgWIWa, uintCsYGYxb, {from: accounts[1]});

		assert.equal(boolGMLlGr6, true)
		assert.equal(stringD2dJdA, "DSP")
		await expect(DSPCRsjPrX.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXQ3OA8l = await DSP.new({from: accounts[0]});
		const uintfShpu1r = BigInt("566")
		const addressnHiYoEx = accounts[0]
		const addressYWlPVYA = accounts[0]
		const addressa6YqyPn = accounts[4]
		const uint8d6ndZ2M = await DSPXQ3OA8l.decimals.call({from: accounts[0]});
		const uint8R7rxduI = await DSPXQ3OA8l.decimals.call({from: accounts[5]});
		const boolAPMW4Pj = await DSPXQ3OA8l.transfer.call(addressnHiYoEx, uintfShpu1r, {from: accounts[0]});
//		await DSPXQ3OA8l.f.call({from: accounts[3]});
//		const uint256RFXURdJ = await DSPXQ3OA8l.allowance.call(addressa6YqyPn, addressYWlPVYA, {from: accounts[5]});
//		const stringmtRU74q = await DSPXQ3OA8l.symbol.call({from: accounts[4]});

		assert.equal(boolAPMW4Pj, true)
		assert.equal(uint8R7rxduI, BigInt("18"))
		assert.equal(uint8d6ndZ2M, BigInt("18"))
		await expect(DSPXQ3OA8l.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPf4XPG9t = await DSP.new({from: accounts[0]});
		const addressH4UaLsm = "0x0000000000000000000000000000000000000000"
		const addresspDnMy76 = accounts[1]
//		const addresssTDXxAw = await DSPf4XPG9t.removePauser.call(addressH4UaLsm, {from: accounts[0]});
//		const addressxWg9pjA = await DSPf4XPG9t.upgradeTo.call(addresspDnMy76, {from: accounts[2]});

		await expect(DSPf4XPG9t.removePauser.call(addressH4UaLsm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const uintlh6u8xi = BigInt("687")
		const addresswVYS2R = accounts[1]
//		const boolbSaTGN2 = await DSPbPmJbWu.decreaseAllowance.call(addresswVYS2R, uintlh6u8xi, {from: accounts[3]});

		await expect(DSPbPmJbWu.decreaseAllowance.call(addresswVYS2R, uintlh6u8xi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXQ3OA8l = await DSP.new({from: accounts[0]});
		const uintlZMB5jv = BigInt("375")
		const addressCzKdBhb = accounts[4]
		const uintO3VSnXB = BigInt("1650")
		const uintomUX28U = BigInt("1391")
		const addressEzs8uLv = accounts[5]
		const uintWOp1u2 = BigInt("566")
		const addressy9AECHu = accounts[0]
		const uintdidRyhY = BigInt("947")
		const addressxe4yhJz = "0x0000000000000000000000000000000000000001"
		const addressfGxBI47 = accounts[0]
		const addressCPsceMW = accounts[5]
		const uint8d6ndZ2M = await DSPXQ3OA8l.decimals.call({from: accounts[0]});
		const uint256LWUL5wq = await DSPXQ3OA8l.totalSupply.call({from: accounts[2]});
		const boolhpgwhXd = await DSPXQ3OA8l.approve.call(addressCzKdBhb, uintlZMB5jv, {from: accounts[1]});
//		const boolI0ivLYo = await DSPXQ3OA8l.lock.call(addressEzs8uLv, uintomUX28U, uintO3VSnXB, {from: accounts[1]});
//		const uint8R7rxduI = await DSPXQ3OA8l.decimals.call({from: accounts[5]});
//		const boolAPMW4Pj = await DSPXQ3OA8l.transfer.call(addressy9AECHu, uintWOp1u2, {from: accounts[0]});
//		const boolOxMnEnP = await DSPXQ3OA8l.mint.call(addressxe4yhJz, uintdidRyhY, {from: accounts[1]});
//		const uint256RFXURdJ = await DSPXQ3OA8l.allowance.call(addressCPsceMW, addressfGxBI47, {from: accounts[5]});
//		const stringmtRU74q = await DSPXQ3OA8l.symbol.call({from: accounts[4]});

		assert.equal(boolhpgwhXd, true)
		assert.equal(uint256LWUL5wq, BigInt("100000000000000000000000000000"))
		assert.equal(uint8d6ndZ2M, BigInt("18"))
		await expect(DSPXQ3OA8l.lock.call(addressEzs8uLv, uintomUX28U, uintO3VSnXB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRh1Cf0N = await DSP.new({from: accounts[5]});
		const uintjnHPK5X = BigInt("226")
		const addressL6v6ddw = accounts[1]
		const uintTLqbtrO = BigInt("1138")
		const addresskj4ed8w = accounts[2]
		const addresstnYB4uq = accounts[3]
		const addressAGiVo3W = accounts[3]
		const boolAmxX1K = await DSPRh1Cf0N.approve.call(addressL6v6ddw, uintjnHPK5X, {from: accounts[0]});
//		await DSPRh1Cf0N.whenNotPaused.call({from: accounts[4]});
//		const boolHC7BJFV = await DSPRh1Cf0N.transfer.call(addresskj4ed8w, uintTLqbtrO, {from: accounts[2]});
//		const addressoha97In = await DSPRh1Cf0N.upgradeTo.call(addresstnYB4uq, {from: accounts[1]});
//		const boollaey5zL = await DSPRh1Cf0N.freezeAccount.call(addressAGiVo3W, {from: accounts[1]});
//		const booli97ohgS = await DSPRh1Cf0N.paused.call({from: accounts[0]});

		assert.equal(boolAmxX1K, true)
		await expect(DSPRh1Cf0N.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGuzAi0b = await DSP.new({from: accounts[0]});
		const uinthonkQLf = BigInt("76")
		const uintLktJC8G = BigInt("276")
		const addressjd73ZNn = accounts[4]
		const uintAjyCf8T = BigInt("83")
		const addresswkRhzGs = accounts[5]
		const boolgubEFph = await DSPGuzAi0b.paused.call({from: accounts[2]});
//		const boolr0H3fV = await DSPGuzAi0b.lock.call(addressjd73ZNn, uintLktJC8G, uinthonkQLf, {from: accounts[0]});
//		await DSPGuzAi0b.onlyNewOwner.call({from: accounts[5]});
//		const boolOfBFshS = await DSPGuzAi0b.decreaseAllowance.call(addresswkRhzGs, uintAjyCf8T, {from: accounts[5]});

		assert.equal(boolgubEFph, false)
		await expect(DSPGuzAi0b.lock.call(addressjd73ZNn, uintLktJC8G, uinthonkQLf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPf4XPG9t = await DSP.new({from: accounts[0]});
		const addressHldMcRR = "0x00000000000000000000000000000000000000-1"
//		const addresssTDXxAw = await DSPf4XPG9t.removePauser.call(addressHldMcRR, {from: accounts[0]});

		await expect(DSPf4XPG9t.removePauser.call(addressHldMcRR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmDhxRs = await DSP.new({from: accounts[3]});
		const addressieW5qPL = accounts[1]
		const uinttwpGr4g = BigInt("624")
		const addressyCWYUH = accounts[2]
		const addressiNWbeX = accounts[1]
		const uintRsQ2v6 = BigInt("378")
		const addressGGMBVXI = accounts[2]
		const addressdx909jC = await DSPmDhxRs.addPauser.call(addressieW5qPL, {from: accounts[3]});
//		await DSPmDhxRs.onlyPauser.call({from: accounts[4]});
//		await DSPmDhxRs.whenPaused.call({from: accounts[2]});
//		await DSPmDhxRs.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolQzuv3IP = await DSPmDhxRs.transferFrom.call(addressiNWbeX, addressyCWYUH, uinttwpGr4g, {from: accounts[0]});
//		const boolwqYbHyf = await DSPmDhxRs.decreaseAllowance.call(addressGGMBVXI, uintRsQ2v6, {from: accounts[3]});

		await expect(DSPmDhxRs.onlyPauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyGtuiU6 = await DSP.new({from: accounts[0]});
		const uintGKNOrSJ = BigInt("312")
		const addressMltjPH5 = accounts[3]
		const uintWZUgSBU = BigInt("619")
		const uintQSPY3U0 = BigInt("968")
		const addressZX8Cchs = accounts[2]
		const addressZrrbsCV = accounts[5]
		const addresszgY8MWl = accounts[3]
//		const boollaQW3ZY = await DSPyGtuiU6.unlock.call(addressMltjPH5, uintGKNOrSJ, {from: accounts[0]});
//		const boolEW7SpUh = await DSPyGtuiU6.lock.call(addressZX8Cchs, uintQSPY3U0, uintWZUgSBU, {from: accounts[4]});
//		const addresszJrm7j1 = await DSPyGtuiU6.addPauser.call(addressZrrbsCV, {from: accounts[1]});
//		await DSPyGtuiU6.pause.call({from: accounts[4]});
//		await DSPyGtuiU6.whenNotPaused.call({from: accounts[5]});
//		const boolST0YbMH = await DSPyGtuiU6.isPauser.call(addresszgY8MWl, {from: accounts[1]});

		await expect(DSPyGtuiU6.unlock.call(addressMltjPH5, uintGKNOrSJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPf4XPG9t = await DSP.new({from: accounts[0]});
		const addressU4QfQoK = "0x0000000000000000000000000000000000000001"
		const uintxiG9WPd = BigInt("378")
		const addresssviRRR = accounts[2]
		const addresslfo0Gt0 = accounts[0]
//		const bool1omChO = await DSPf4XPG9t.unfreezeAccount.call(addressU4QfQoK, {from: accounts[0]});
//		const boolADG2UjW = await DSPf4XPG9t.transferFrom.call(addresslfo0Gt0, addresssviRRR, uintxiG9WPd, {from: accounts[1]});
//		await DSPf4XPG9t.unpause.call({from: accounts[1]});

		await expect(DSPf4XPG9t.unfreezeAccount.call(addressU4QfQoK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const addressRvy6Ti = accounts[0]
		const uintqz82KY8 = BigInt("1960")
		const addressMcPW1ns = accounts[2]
		const address3A1UGQ = accounts[3]
		const boolaFMyoj = await DSPbPmJbWu.freezeAccount.call(addressRvy6Ti, {from: accounts[4]});
		const booleSQ3GfN = await DSPbPmJbWu.transfer.call(addressMcPW1ns, uintqz82KY8, {from: accounts[4]});
//		const addressKk6Plph = await DSPbPmJbWu.transferOwnership.call(address3A1UGQ, {from: accounts[0]});

		assert.equal(boolaFMyoj, true)
		assert.equal(booleSQ3GfN, true)
		await expect(DSPbPmJbWu.transferOwnership.call(address3A1UGQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPf4XPG9t = await DSP.new({from: accounts[0]});
		const addressBXJgF2L = accounts[4]
		const uintgMqjhf = BigInt("1435")
		const addressxWG7gDS = accounts[0]
		const addressKfBFOmv = await DSPf4XPG9t.upgradeTo.call(addressBXJgF2L, {from: accounts[0]});
//		const boolO5W7urK = await DSPf4XPG9t.unlock.call(addressxWG7gDS, uintgMqjhf, {from: accounts[0]});
//		await DSPf4XPG9t.unpause.call({from: accounts[1]});

		await expect(DSPf4XPG9t.unlock.call(addressxWG7gDS, uintgMqjhf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const uintUxifYLg = BigInt("1960")
		const addressZVJp7j3 = accounts[2]
//		await DSPbPmJbWu.pause.call({from: accounts[4]});
//		const string4ITZFa = await DSPbPmJbWu.name.call({from: accounts[4]});
//		const booleSQ3GfN = await DSPbPmJbWu.transfer.call(addressZVJp7j3, uintUxifYLg, {from: accounts[4]});

		await expect(DSPbPmJbWu.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const addresstcxS8g = accounts[0]
		const uintpWXqidT = BigInt("1971")
		const addressijyyMVW = accounts[3]
		const addresslvT7mR5 = accounts[0]
		const addressji7K2HB = accounts[1]
		const addressmjnHDjs = accounts[2]
		const uint256WNlMDpA = await DSPbPmJbWu.balanceOf.call(addresstcxS8g, {from: accounts[2]});
		const booleSQ3GfN = await DSPbPmJbWu.transfer.call(addressijyyMVW, uintpWXqidT, {from: accounts[4]});
//		const boolRUYJste = await DSPbPmJbWu.freezeAccount.call(addresslvT7mR5, {from: accounts[1]});
//		const addressSINeQvo = await DSPbPmJbWu.upgradeTo.call(addressji7K2HB, {from: accounts[5]});
//		await DSPbPmJbWu.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressKk6Plph = await DSPbPmJbWu.transferOwnership.call(addressmjnHDjs, {from: accounts[0]});

		assert.equal(booleSQ3GfN, true)
		assert.equal(uint256WNlMDpA, BigInt("0"))
		await expect(DSPbPmJbWu.freezeAccount.call(addresslvT7mR5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const addressVq851vZ = accounts[2]
		const uintNBni87u = BigInt("514")
		const uinto2zlKsh = BigInt("1603")
		const addressvLAinOX = accounts[4]
		const uintSgRowp = BigInt("1597")
		const addressUnwkXkk = "0x0000000000000000000000000000000000000002"
		const addressClQKUCy = accounts[0]
		const boolQMmVGz = await DSPbPmJbWu.isOwner.call(addressVq851vZ, {from: accounts[1]});
		const boolwcDHDVd = await DSPbPmJbWu.lock.call(addressvLAinOX, uinto2zlKsh, uintNBni87u, {from: accounts[4]});
//		const boolVR9pjDE = await DSPbPmJbWu.transferFrom.call(addressClQKUCy, addressUnwkXkk, uintSgRowp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQMmVGz, false)
		assert.equal(boolwcDHDVd, true)
		await expect(DSPbPmJbWu.transferFrom.call(addressClQKUCy, addressUnwkXkk, uintSgRowp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const addressF5CB3xs = accounts[2]
		const addressSHR5XGk = accounts[4]
		const uintqUXfZhk = BigInt("514")
		const uintMJZqhxX = BigInt("1603")
		const addressnvrC7jB = accounts[4]
		const uintRCzDAQl = BigInt("2014")
		const addressHoq0i5g = accounts[0]
		const uintpX9qnnS = BigInt("943")
		const addressj5l3oU4 = "0x0000000000000000000000000000000000000002"
		const addressZyJ9xh4 = accounts[0]
		const addressEflq0cu = await DSPbPmJbWu.upgradeTo.call(addressF5CB3xs, {from: accounts[4]});
		const boolQMmVGz = await DSPbPmJbWu.isOwner.call(addressSHR5XGk, {from: accounts[1]});
		const boolwcDHDVd = await DSPbPmJbWu.lock.call(addressnvrC7jB, uintMJZqhxX, uintqUXfZhk, {from: accounts[4]});
		const boollVIZDYp = await DSPbPmJbWu.increaseAllowance.call(addressHoq0i5g, uintRCzDAQl, {from: accounts[3]});
//		const boolVR9pjDE = await DSPbPmJbWu.transferFrom.call(addressZyJ9xh4, addressj5l3oU4, uintpX9qnnS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQMmVGz, true)
		assert.equal(boollVIZDYp, true)
		assert.equal(boolwcDHDVd, true)
		await expect(DSPbPmJbWu.transferFrom.call(addressZyJ9xh4, addressj5l3oU4, uintpX9qnnS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const addressAAJIMnr = accounts[4]
		const addressR4z4rYn = accounts[2]
		const uintzF3CM6r = BigInt("1398")
		const addressGVUiUQO = accounts[2]
		const addressYAtfL3U = accounts[0]
		const uint256Lc0FyF9 = await DSPbPmJbWu.balanceOf.call(addressAAJIMnr, {from: "0x0000000000000000000000000000000000000001"});
		const addressYFdc7Ma = await DSPbPmJbWu.transferOwnership.call(addressR4z4rYn, {from: accounts[4]});
		const boolr72MLkZ = await DSPbPmJbWu.approve.call(addressGVUiUQO, uintzF3CM6r, {from: accounts[1]});
		const booloIFMQK = await DSPbPmJbWu.isOwner.call(addressYAtfL3U, {from: accounts[3]});

		assert.equal(booloIFMQK, false)
		assert.equal(boolr72MLkZ, true)
		assert.equal(uint256Lc0FyF9, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPbPmJbWu = await DSP.new({from: accounts[4]});
		const uintKQAeLMG = BigInt("1733")
		const uintg91TdAO = BigInt("1439")
		const addressaOYoikH = accounts[3]
		const uintV2iq1Rz = BigInt("198")
		const addressfFbq14p = "0x0000000000000000000000000000000000000001"
		const uintEPV2fZA = BigInt("1597")
		const addressA2jB1LM = "0x0000000000000000000000000000000000000001"
		const addressyYJMVV4 = accounts[0]
		const boolRTAUqFc = await DSPbPmJbWu.transferWithLock.call(addressaOYoikH, uintg91TdAO, uintKQAeLMG, {from: accounts[4]});
		const booleatGhER = await DSPbPmJbWu.transfer.call(addressfFbq14p, uintV2iq1Rz, {from: accounts[4]});
//		const boolVR9pjDE = await DSPbPmJbWu.transferFrom.call(addressyYJMVV4, addressA2jB1LM, uintEPV2fZA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRTAUqFc, true)
		assert.equal(booleatGhER, true)
		await expect(DSPbPmJbWu.transferFrom.call(addressyYJMVV4, addressA2jB1LM, uintEPV2fZA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})