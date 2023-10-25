const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerJ8JRyzs = await TimeMiner.new({from: accounts[4]});
		const addressLmmY1Lz = accounts[3]
		const uintYensuoD = BigInt("841")
		const addressZiFjEr1 = accounts[3]
		const boolZqyCOQ7 = true
		const uint256pBJ6YMo = await TimeMinerJ8JRyzs.balanceOf.call(addressLmmY1Lz, {from: accounts[4]});
		const boolfeXJzRe = await TimeMinerJ8JRyzs.approve.call(addressZiFjEr1, uintYensuoD, {from: accounts[2]});
		const boolwm6g0YP = await TimeMinerJ8JRyzs.infoStableSystem.call({from: accounts[0]});
		const boolII0OCny = await TimeMinerJ8JRyzs.setStableCoinSystem.call(boolZqyCOQ7, {from: accounts[4]});
		const boolXNjUulZ = await TimeMinerJ8JRyzs.infoStableSystem.call({from: accounts[1]});

		assert.equal(boolfeXJzRe, true)
		assert.equal(uint256pBJ6YMo, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhfNHDsD = await TimeMiner.new({from: accounts[2]});
		const uintjZVNpTE = BigInt("307")
		const addressKGqwqFC = accounts[1]
		const addressm3Pp0lW = accounts[3]
		const addressd1Avird = accounts[5]
		const addressefhDEAi = accounts[4]
		const uintsR1jqt0 = BigInt("1895")
		const addressXk5rL8v = accounts[2]
		const addressIJiGH2u = accounts[2]
		const boolxdzdcaH = await TimeMinerhfNHDsD.transfer.call(addressKGqwqFC, uintjZVNpTE, {from: accounts[3]});
		const uint256DhuAbOh = await TimeMinerhfNHDsD.allInfoFor.call(addressm3Pp0lW, {from: accounts[3]});
		const uint256uPZ4P7j = await TimeMinerhfNHDsD.balanceOfTokenCirculation.call(addressd1Avird, {from: accounts[3]});
		const uint256tAcLc0 = await TimeMinerhfNHDsD.balanceOf.call(addressefhDEAi, {from: accounts[4]});
		const boolkXfH0oY = await TimeMinerhfNHDsD.transfer.call(addressXk5rL8v, uintsR1jqt0, {from: accounts[5]});
		const uint2563grfT4 = await TimeMinerhfNHDsD.tokensToClaim.call(addressIJiGH2u, {from: accounts[4]});

		await expect(TimeMinerhfNHDsD.transfer.call(addressKGqwqFC, uintjZVNpTE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNXfSVYT = await TimeMiner.new({from: accounts[4]});
		const uintSJyZ7Ef = BigInt("252")
		const addressJiX4Efa = accounts[5]
		const addressmtC7XOn = "0x0000000000000000000000000000000000000001"
		const uintle9y5De = BigInt("2028")
		const addressy3NsJLZ = "0x0000000000000000000000000000000000000001"
		const boolHDICBke = await TimeMinerNXfSVYT.approve.call(addressJiX4Efa, uintSJyZ7Ef, {from: accounts[5]});
		const uint256eqrc7Dl = await TimeMinerNXfSVYT.balanceOfTokenCirculation.call(addressmtC7XOn, {from: accounts[4]});
		const uint256ren07cm = await TimeMinerNXfSVYT.changePreSalePriceIfToHigh.call(uintle9y5De, {from: accounts[4]});
		const uint256PpYbIf = await TimeMinerNXfSVYT.allInfoFor.call(addressy3NsJLZ, {from: accounts[2]});
		await TimeMinerNXfSVYT.preSaleFinished.call({from: accounts[4]});

		assert.equal(boolHDICBke, true)
		assert.equal(uint256eqrc7Dl, BigInt("0"))
		await expect(TimeMinerNXfSVYT.allInfoFor.call(addressy3NsJLZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPi5UaaQ = await TimeMiner.new({from: accounts[5]});
		const uintxp98yY7 = BigInt("1750")
		const uintQ2mSFAN = BigInt("654")
		const uintWXzF26m = BigInt("1688")
		const addressNocaniN = accounts[0]
		const boolrhEPpk8 = await TimeMinerPi5UaaQ.infoStableSystem.call({from: accounts[4]});
		const uint256Eaa4zS = await TimeMinerPi5UaaQ.setPrizeFromNewAddress.call(uintQ2mSFAN, uintxp98yY7, {from: accounts[0]});
		const boolunItyJX = await TimeMinerPi5UaaQ.transfer.call(addressNocaniN, uintWXzF26m, {from: accounts[0]});

		await expect(TimeMinerPi5UaaQ.setPrizeFromNewAddress.call(uintQ2mSFAN, uintxp98yY7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerdkT0IZo = await TimeMiner.new({from: accounts[0]});
		const addressWrdUmpI = "0x0000000000000000000000000000000000000001"
		const addressp9N2dKg = "0x0000000000000000000000000000000000000001"
		const addressxu56WKa = accounts[4]
		const uintLuxmn7r = BigInt("481")
		const addressUmf4JD = accounts[1]
		const addressTP6Sk1K = accounts[2]
		const uint256jfdHKCr = await TimeMinerdkT0IZo.allowance.call(addressp9N2dKg, addressWrdUmpI, {from: accounts[3]});
		const uint256MoPStHE = await TimeMinerdkT0IZo.balanceOfTokenCirculation.call(addressxu56WKa, {from: accounts[1]});
		const boolOP56UfU = await TimeMinerdkT0IZo.transfer.call(addressUmf4JD, uintLuxmn7r, {from: accounts[4]});
		const uint256PRNByf = await TimeMinerdkT0IZo.allInfoFor.call(addressTP6Sk1K, {from: accounts[2]});
		await TimeMinerdkT0IZo.preSaleFinished.call({from: accounts[0]});

		assert.equal(uint256MoPStHE, BigInt("0"))
		assert.equal(uint256jfdHKCr, BigInt("0"))
		await expect(TimeMinerdkT0IZo.transfer.call(addressUmf4JD, uintLuxmn7r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinermmjJ0mB = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUcCurlT = BigInt("346")
		const addressujJVvMu = accounts[3]
		const addressSiCbQ8 = accounts[3]
		const uintPp4CbfD = BigInt("771")
		const addressqziLRT = accounts[4]
		const address6UxLpN = accounts[1]
		const boolYIKFoEH = false
		const addressIyi3fN = accounts[0]
		const addressbyCm9cT = accounts[0]
		const boolzwj4Wlp = await TimeMinermmjJ0mB.transferFrom.call(addressSiCbQ8, addressujJVvMu, uintUcCurlT, {from: accounts[2]});
		const boolG5n3Q8Y = await TimeMinermmjJ0mB.transferFrom.call(address6UxLpN, addressqziLRT, uintPp4CbfD, {from: accounts[3]});
		const addressDk2zzZs = await TimeMinermmjJ0mB.whitelist.call(addressIyi3fN, boolYIKFoEH, {from: accounts[1]});
		const uint256rCRa1VA = await TimeMinermmjJ0mB.allInfoFor.call(addressbyCm9cT, {from: accounts[3]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerFKt2rg2 = await TimeMiner.new({from: accounts[2]});
		const addressPclNopS = accounts[4]
		const address9a63zk = accounts[3]
		const addressFhK9Nw3 = accounts[5]
		const uint256UJC1rDM = await TimeMinerFKt2rg2.totalSupply.call({from: accounts[5]});
		await TimeMinerFKt2rg2.preSaleFinished.call({from: accounts[1]});
		const boolGPPWzDG = await TimeMinerFKt2rg2.isWhitelisted.call(addressPclNopS, {from: accounts[0]});
		const uint256nH1sTt = await TimeMinerFKt2rg2.allowance.call(addressFhK9Nw3, address9a63zk, {from: accounts[1]});

		assert.equal(uint256UJC1rDM, BigInt("24000000"))
		await expect(TimeMinerFKt2rg2.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPi5UaaQ = await TimeMiner.new({from: accounts[5]});
		const uintfhaN3i8 = BigInt("1489")
		const addressJSSEC3 = accounts[4]
		const addressAOVGJjW = "0x0000000000000000000000000000000000000001"
		const uintSUvin1q = BigInt("1750")
		const uintFS89V1H = BigInt("654")
		const boolrhEPpk8 = await TimeMinerPi5UaaQ.infoStableSystem.call({from: accounts[4]});
		const uintFvUDwWF = await TimeMinerPi5UaaQ.preSale.call(uintfhaN3i8, {from: accounts[1]});
		const uint256qRjClkQ = await TimeMinerPi5UaaQ.allowance.call(addressAOVGJjW, addressJSSEC3, {from: accounts[2]});
		const uint256Eaa4zS = await TimeMinerPi5UaaQ.setPrizeFromNewAddress.call(uintFS89V1H, uintSUvin1q, {from: accounts[0]});

		await expect(TimeMinerPi5UaaQ.preSale.call(uintfhaN3i8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPMBwiVy = await TimeMiner.new({from: accounts[0]});
		const uintxXbZOua = BigInt("1765")
		const addresssfmWGYU = accounts[0]
		const uintOvG76dM = BigInt("1409")
		const addressm3ijMR = accounts[1]
		const addressxbiu5cV = accounts[0]
		const addressD6p3VO = "0x0000000000000000000000000000000000000001"
		const boolZ3eQBhO = await TimeMinerPMBwiVy.transfer.call(addresssfmWGYU, uintxXbZOua, {from: accounts[0]});
		const boolrV4U7Yi = await TimeMinerPMBwiVy.transfer.call(addressm3ijMR, uintOvG76dM, {from: accounts[1]});
		const boolBpPJ10 = await TimeMinerPMBwiVy.isWhitelisted.call(addressxbiu5cV, {from: accounts[0]});
		const uint256x8g9IZ = await TimeMinerPMBwiVy.allInfoFor.call(addressD6p3VO, {from: accounts[0]});

		assert.equal(boolZ3eQBhO, true)
		await expect(TimeMinerPMBwiVy.transfer.call(addressm3ijMR, uintOvG76dM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPMBwiVy = await TimeMiner.new({from: accounts[0]});
		const uintKpRMpoa = BigInt("1765")
		const addressKSEsavU = accounts[1]
		const addressr7jJGmn = accounts[4]
		const uintDlTVnhi = BigInt("1409")
		const addressDTRaIVX = accounts[1]
		const addresswv9oN4s = accounts[0]
		const addresshEQARPB = "0x0000000000000000000000000000000000000001"
		const boolJHvbApO = true
		const addressVt3QJhJ = accounts[4]
		const boolZ3eQBhO = await TimeMinerPMBwiVy.transfer.call(addressKSEsavU, uintKpRMpoa, {from: accounts[0]});
		const uint256fghWhI8 = await TimeMinerPMBwiVy.allInfoFor.call(addressr7jJGmn, {from: accounts[4]});
		const boolrV4U7Yi = await TimeMinerPMBwiVy.transfer.call(addressDTRaIVX, uintDlTVnhi, {from: accounts[1]});
		const boolBpPJ10 = await TimeMinerPMBwiVy.isWhitelisted.call(addresswv9oN4s, {from: accounts[0]});
		const uint256x8g9IZ = await TimeMinerPMBwiVy.allInfoFor.call(addresshEQARPB, {from: accounts[0]});
		const addressy0Gs7qx = await TimeMinerPMBwiVy.whitelist.call(addressVt3QJhJ, boolJHvbApO, {from: accounts[2]});

		assert.equal(boolZ3eQBhO, true)
		await expect(TimeMinerPMBwiVy.allInfoFor.call(addressr7jJGmn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineruxC9CHQ = await TimeMiner.new({from: accounts[1]});
		const boolO35a6f3 = true
		const addressqsFAEe4 = accounts[3]
		const uintRmHFKZT = BigInt("123")
		const uintqsK7Kul = BigInt("787")
		const uint256yGs95OI = await TimeMineruxC9CHQ.totalSupply.call({from: accounts[4]});
		const addressFgUjLB0 = await TimeMineruxC9CHQ.whitelist.call(addressqsFAEe4, boolO35a6f3, {from: accounts[5]});
		const uint256odnvjoF = await TimeMineruxC9CHQ.changePreSalePriceIfToHigh.call(uintRmHFKZT, {from: accounts[4]});
		const uint256BAWe2sB = await TimeMineruxC9CHQ.totalSupply.call({from: accounts[4]});
		const uint256aC26UmJ = await TimeMineruxC9CHQ.changePreSalePriceIfToHigh.call(uintqsK7Kul, {from: accounts[1]});

		assert.equal(uint256yGs95OI, BigInt("24000000"))
		await expect(TimeMineruxC9CHQ.whitelist.call(addressqsFAEe4, boolO35a6f3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPMBwiVy = await TimeMiner.new({from: accounts[0]});
		const uintPMb91jY = BigInt("1765")
		const addressHy4lyDI = accounts[0]
		const addressSIfzRX = accounts[0]
		const boolZ3eQBhO = await TimeMinerPMBwiVy.transfer.call(addressHy4lyDI, uintPMb91jY, {from: accounts[0]});
		const boolBpPJ10 = await TimeMinerPMBwiVy.isWhitelisted.call(addressSIfzRX, {from: accounts[0]});

		assert.equal(boolBpPJ10, true)
		assert.equal(boolZ3eQBhO, true)
	});

	it('test for TimeMiner', async () => {
		const TimeMinerO6CElMA = await TimeMiner.new({from: accounts[5]});
		const uintaGGjIpr = BigInt("2011")
		const addressuUYulYu = accounts[1]
		const addressstOyfUt = accounts[5]
		const addressJ4dOWGE = accounts[2]
		const addressEiVqjgU = accounts[4]
		const addressL2SGGB0 = accounts[1]
		const uintiuFJUs = BigInt("2017")
		const addressgYSbYhL = accounts[1]
		const addressekTYfUl = accounts[3]
		const boolUjM4dd = await TimeMinerO6CElMA.transferFrom.call(addressstOyfUt, addressuUYulYu, uintaGGjIpr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256den9bfJ = await TimeMinerO6CElMA.allowance.call(addressEiVqjgU, addressJ4dOWGE, {from: accounts[4]});
		const uint256Xa15PD = await TimeMinerO6CElMA.balanceOf.call(addressL2SGGB0, {from: accounts[0]});
		const boolHmXzHV0 = await TimeMinerO6CElMA.transfer.call(addressgYSbYhL, uintiuFJUs, {from: accounts[2]});
		const uint256nj6Okix = await TimeMinerO6CElMA.balanceOfTokenCirculation.call(addressekTYfUl, {from: "0x0000000000000000000000000000000000000001"});
		await TimeMinerO6CElMA.preSaleFinished.call({from: accounts[0]});

		await expect(TimeMinerO6CElMA.transferFrom.call(addressstOyfUt, addressuUYulYu, uintaGGjIpr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})