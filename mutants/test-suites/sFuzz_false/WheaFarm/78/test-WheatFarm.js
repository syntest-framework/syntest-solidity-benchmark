const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringjK7JN2l = "mzEdYuKcchPQlawUtA7QJyl3x4J36vAjxPbQ9TlZ4rJ6J36qWCbwwTAMsfLuHtreY8mVZsSu7AXGRKBR9KLPs2"
		const stringYdTgcs = "CTwW6rLx6KqrYEa3jX5YqRsSeiNbUneOSp147zQBTmkCWL5z"
		const uintEFXeWX8 = BigInt("167")
		const WheatFarmRj27KoV = await WheatFarm.new(stringjK7JN2l, stringYdTgcs, uintEFXeWX8, {from: accounts[0]});
		const uintYJhV0gS = BigInt("346")
		const addressJo6Z3Ar = accounts[3]
		const addressoCmGogR = accounts[3]
		const uintEwFjeS0 = BigInt("1184")
		const addressV2iljDF = accounts[4]
//		const boolwiuuOnZ = await WheatFarmRj27KoV.transferFrom.call(addressoCmGogR, addressJo6Z3Ar, uintYJhV0gS, {from: accounts[4]});
//		const boolACSvNBv = await WheatFarmRj27KoV.decreaseAllowance.call(addressV2iljDF, uintEwFjeS0, {from: accounts[0]});
//		const stringcXYezxo = await WheatFarmRj27KoV.name.call({from: accounts[1]});

		await expect(WheatFarmRj27KoV.transferFrom.call(addressoCmGogR, addressJo6Z3Ar, uintYJhV0gS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringYG5UwgF = "HQf9UhrLbO1EgPPbpIxkmMUfjO6KQ1Yabue3ht62M"
		const stringf5VA74t = "BB1Yh0xOOHoJgDtcBJds3Rx59igEi"
		const uintNoQkHB = BigInt("1697")
		const WheatFarmoj9wEb1 = await WheatFarm.new(stringYG5UwgF, stringf5VA74t, uintNoQkHB, {from: accounts[3]});
		const uinth72LWzr = BigInt("928")
		const addresszcwUYG = accounts[0]
		const uintRBPdTD = BigInt("1242")
		const addressdNJctnN = accounts[0]
		const uintQ1xWS6q = BigInt("892")
		const addressGR33wJp = accounts[5]
		const uintpGMpmO0 = BigInt("1514")
		const addressQoyL7Ss = accounts[1]
//		const boolBznCzAs = await WheatFarmoj9wEb1.decreaseAllowance.call(addresszcwUYG, uinth72LWzr, {from: accounts[4]});
//		const booloaJZuq1 = await WheatFarmoj9wEb1.decreaseAllowance.call(addressdNJctnN, uintRBPdTD, {from: "0x0000000000000000000000000000000000000001"});
//		const booltm3NwrY = await WheatFarmoj9wEb1.decreaseAllowance.call(addressGR33wJp, uintQ1xWS6q, {from: accounts[2]});
//		const boolkKYDlJP = await WheatFarmoj9wEb1.approveAndCall.call(addressQoyL7Ss, uintpGMpmO0, {from: accounts[1]});

		await expect(WheatFarmoj9wEb1.decreaseAllowance.call(addresszcwUYG, uinth72LWzr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringDIhzQBy = "ghfRx8h1nceWwSoePfSKjVUbIMRxGURIDAvDDW34QFosMhVL9UimQRnnqgxmo3i8o421eHErsLBUw"
		const stringUCAYNxJ = "rlfiPEpW5fkg5UB2eSO7GpBZ2"
		const uintRH3apY2 = BigInt("156")
		const WheatFarmJa9YZLT = await WheatFarm.new(stringDIhzQBy, stringUCAYNxJ, uintRH3apY2, {from: accounts[0]});
		const uintOKCG06S = BigInt("422")
		const addressjOfmnl8 = accounts[3]
		const addresslFokYfS = accounts[0]
		const uintSQDVP1y = BigInt("1762")
		const addressZLqoyIg = accounts[2]
		const boolaRrlIO = await WheatFarmJa9YZLT.transferFrom.call(addresslFokYfS, addressjOfmnl8, uintOKCG06S, {from: accounts[0]});
		const bool6FExZq = await WheatFarmJa9YZLT.approve.call(addressZLqoyIg, uintSQDVP1y, {from: accounts[2]});
		const uint8P8p50sR = await WheatFarmJa9YZLT.decimals.call({from: accounts[5]});

		assert.equal(bool6FExZq, true)
		assert.equal(boolaRrlIO, true)
		assert.equal(uint8P8p50sR, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const stringP1NbXde = "0gqKXVy5d5xmm5NvZkbHSlDzVN3peOexzvNrr"
		const stringXqibtEu = "smX66TCFw2XXjofXRGteJD6L2"
		const uintyJJhhVj = BigInt("270")
		const WheatFarmxKLA9GB = await WheatFarm.new(stringP1NbXde, stringXqibtEu, uintyJJhhVj, {from: "0x0000000000000000000000000000000000000001"});
		const uintyhYiXtM = BigInt("669")
		const addressV2VA9tf = accounts[4]
		const uintAdKopaj = BigInt("310")
		const addressptMkgWI = accounts[3]
		const uintHOeowU = BigInt("1304")
		const addressFKt6DIm = accounts[3]
		const uintqGxgmU = BigInt("857")
		const address3uj682 = accounts[4]
		const boolerNJspv = await WheatFarmxKLA9GB.transfer.call(addressV2VA9tf, uintyhYiXtM, {from: accounts[1]});
		const uint8TTnvyuw = await WheatFarmxKLA9GB.decimals.call({from: accounts[3]});
		const boolZgISlO = await WheatFarmxKLA9GB.approveAndCall.call(addressptMkgWI, uintAdKopaj, {from: accounts[1]});
		const boolHQaTVZ = await WheatFarmxKLA9GB.approveAndCall.call(addressFKt6DIm, uintHOeowU, {from: accounts[1]});
		const strings7Djazk = await WheatFarmxKLA9GB.symbol.call({from: accounts[4]});
		const boolQgidvuH = await WheatFarmxKLA9GB.approve.call(address3uj682, uintqGxgmU, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringjCHbTFz = "WvAhxHUlyqb1ai8g2Uo6qLv81cKmjs9J1uoYFbDHdsA7YDvdYjshIbGlMP9u2"
		const stringUHQUw4C = "efKolP6g97myvPMo62bnbWngNoBIBeoi"
		const uinthUq7rxl = BigInt("15")
		const WheatFarmaTxuI6h = await WheatFarm.new(stringjCHbTFz, stringUHQUw4C, uinthUq7rxl, {from: accounts[1]});
		const uintInCrhq = BigInt("261")
		const addressKiZ3nIj = accounts[4]
		const uintst8tZjW = BigInt("1117")
		const addressHKCD334 = accounts[4]
		const addressiSKIXLh = accounts[0]
		const addressgMAjQwk = accounts[3]
		const addresscdeug5Q = accounts[2]
//		const boolPRqU17Y = await WheatFarmaTxuI6h.transfer.call(addressKiZ3nIj, uintInCrhq, {from: accounts[4]});
//		const booltD8YSPZ = await WheatFarmaTxuI6h.transferFrom.call(addressiSKIXLh, addressHKCD334, uintst8tZjW, {from: accounts[1]});
//		const uintwNVmOuN = await WheatFarmaTxuI6h.allowance.call(addresscdeug5Q, addressgMAjQwk, {from: accounts[5]});

		await expect(WheatFarmaTxuI6h.transfer.call(addressKiZ3nIj, uintInCrhq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringfYmkf3L = "h19haQfjGLSIeoVHiRIRBf"
		const stringscE1gvl = "nqw45XhjpFwv"
		const uintN8Vjw0D = BigInt("100")
		const WheatFarmgBvC9BA = await WheatFarm.new(stringfYmkf3L, stringscE1gvl, uintN8Vjw0D, {from: accounts[3]});
		const uintVFijFLn = BigInt("88")
		const addressIO1wyVx = accounts[4]
		const addressr26fB1c = accounts[3]
		const addressxjyt098 = accounts[1]
		const addressQnRkDa5 = accounts[0]
		const uintulWrFgj = BigInt("64")
		const addressHtwbZ8q = accounts[3]
		const boolGJH4BGI = await WheatFarmgBvC9BA.transfer.call(addressIO1wyVx, uintVFijFLn, {from: accounts[3]});
		const stringKhYglHy = await WheatFarmgBvC9BA.name.call({from: accounts[2]});
		const uint1rF4RG = await WheatFarmgBvC9BA.allowance.call(addressxjyt098, addressr26fB1c, {from: accounts[3]});
		const stringZBIXDQt = await WheatFarmgBvC9BA.name.call({from: accounts[1]});
		const uintTZQ4Ijr = await WheatFarmgBvC9BA.balanceOf.call(addressQnRkDa5, {from: "0x0000000000000000000000000000000000000001"});
		const boolEpp9bRU = await WheatFarmgBvC9BA.approveAndCall.call(addressHtwbZ8q, uintulWrFgj, {from: accounts[3]});

		assert.equal(boolEpp9bRU, true)
		assert.equal(boolGJH4BGI, true)
		assert.equal(stringKhYglHy, "h19haQfjGLSIeoVHiRIRBf")
		assert.equal(stringZBIXDQt, "h19haQfjGLSIeoVHiRIRBf")
		assert.equal(uint1rF4RG, BigInt("0"))
		assert.equal(uintTZQ4Ijr, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringAU8OWR = "1uGQRIvEvWURg7"
		const stringRVIQ58o = "6C4TcSbiaqvOhI8fXQCy"
		const uintZC931C5 = BigInt("1357")
		const WheatFarmaVffQyW = await WheatFarm.new(stringAU8OWR, stringRVIQ58o, uintZC931C5, {from: accounts[4]});
		const uintvWxSVYu = BigInt("1819")
		const addressNAxbXjJ = "0x0000000000000000000000000000000000000001"
		const addressf6a27eK = accounts[2]
		const uintvr9b81t = BigInt("652")
		const addressaGcNjwO = accounts[1]
		const uintBtP6m5r = BigInt("716")
		const addressyMtF5wD = "0x0000000000000000000000000000000000000001"
		const boolSuJEw8M = await WheatFarmaVffQyW.approve.call(addressNAxbXjJ, uintvWxSVYu, {from: accounts[0]});
		const uint8aOwx6z = await WheatFarmaVffQyW.decimals.call({from: accounts[2]});
		const boolJfiCDcr = await WheatFarmaVffQyW.transferownership.call(addressf6a27eK, {from: accounts[4]});
//		const boolnSoOAh = await WheatFarmaVffQyW.transfer.call(addressaGcNjwO, uintvr9b81t, {from: accounts[1]});
//		const booltwI8ceV = await WheatFarmaVffQyW.approve.call(addressyMtF5wD, uintBtP6m5r, {from: accounts[2]});

		assert.equal(boolJfiCDcr, true)
		assert.equal(boolSuJEw8M, true)
		assert.equal(uint8aOwx6z, BigInt("18"))
		await expect(WheatFarmaVffQyW.transfer.call(addressaGcNjwO, uintvr9b81t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringfYmkf3L = "h19haQfjGLSIeoVHiRIRBf"
		const stringscE1gvl = "nqw45XhjpFwv"
		const uintGXy6qCJ = BigInt("100")
		const WheatFarmgBvC9BA = await WheatFarm.new(stringfYmkf3L, stringscE1gvl, uintGXy6qCJ, {from: accounts[3]});
		const uintuPNd5jT = BigInt("1499")
		const addressUYFPKu = accounts[0]
		const uintiJqyeYa = BigInt("0")
		const addresswu3Rkew = accounts[4]
		const uintzPzqssU = BigInt("758")
		const addressL0o1BRe = accounts[5]
		const addressALhnp6v = accounts[1]
		const boola5FXnQ = await WheatFarmgBvC9BA.approve.call(addressUYFPKu, uintuPNd5jT, {from: accounts[5]});
		const boolGJH4BGI = await WheatFarmgBvC9BA.transfer.call(addresswu3Rkew, uintiJqyeYa, {from: accounts[3]});
//		const boolUPsw5gG = await WheatFarmgBvC9BA.transferFrom.call(addressALhnp6v, addressL0o1BRe, uintzPzqssU, {from: accounts[0]});

		assert.equal(boolGJH4BGI, true)
		assert.equal(boola5FXnQ, true)
		await expect(WheatFarmgBvC9BA.transferFrom.call(addressALhnp6v, addressL0o1BRe, uintzPzqssU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringfYmkf3L = "h19haQfjGLSIeoVHiRIRBf"
		const stringscE1gvl = "nqw45XhjpFwv"
		const uintWduYkiN = BigInt("100")
		const WheatFarmgBvC9BA = await WheatFarm.new(stringfYmkf3L, stringscE1gvl, uintWduYkiN, {from: accounts[3]});
		const uinti7BQUXR = BigInt("0")
		const addressD6hEMCe = accounts[3]
		const stringiSiGrC3 = await WheatFarmgBvC9BA.symbol.call({from: accounts[4]});
		const boolEpp9bRU = await WheatFarmgBvC9BA.approveAndCall.call(addressD6hEMCe, uinti7BQUXR, {from: accounts[3]});

		assert.equal(boolEpp9bRU, true)
		assert.equal(stringiSiGrC3, "nqw45XhjpFwv")
	});
})