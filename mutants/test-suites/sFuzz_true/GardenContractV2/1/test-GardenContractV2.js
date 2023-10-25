const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressWgEJEy = "0x0000000000000000000000000000000000000001"
		const addressdcEU4ix = accounts[4]
		const addressokIjcUr = accounts[5]
		const GardenContractV2qMC2O8O = await GardenContractV2.new(addressWgEJEy, addressdcEU4ix, addressokIjcUr, {from: accounts[1]});
		const uintU8YzqdD = BigInt("424")
		const uintCql9Ask = BigInt("243")
		const stringvljaYOP = "YjLWp8yQKzGUs52OY4iycCUwHaoijQK8dmg2HMLEmsWABaVKy35ysIBFIIoiCyIc5bz"
		const stringPlD6gbu = "spRAmmL2GbdNqI46JQZ5o5qxRB08b6DOGCr9VwjOZazIfFuj4QiVXzQ14sMnftBKSq2x0hmYoMwKxTdsNPtXrgbxqDEfToJD"
		const addressWbmnHKk = accounts[4]
		const addresseluIXz = accounts[2]
		const uintYpWP1Ts = BigInt("199")
		const stringleA4xyP = "CJQ3jpxoIFlhTiYnndvbGHuCw50B"
		const addressQ20ra6e = accounts[3]
//		const stringn56nkIs = await GardenContractV2qMC2O8O.decompose.call(stringvljaYOP, uintCql9Ask, uintU8YzqdD, {from: accounts[2]});
//		const stringvwrKMll = await GardenContractV2qMC2O8O.harvestAllBeds.call(stringPlD6gbu, {from: accounts[2]});
//		const addressi27ouD8 = await GardenContractV2qMC2O8O.addTokenOwner.call(addresseluIXz, addressWbmnHKk, {from: accounts[0]});
//		const uint256dlTvWD5 = await GardenContractV2qMC2O8O.growthRemaining.call(addressQ20ra6e, stringleA4xyP, uintYpWP1Ts, {from: accounts[2]});

		await expect(GardenContractV2qMC2O8O.decompose.call(stringvljaYOP, uintCql9Ask, uintU8YzqdD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressh0foaIX = accounts[2]
		const addressGutaDl = accounts[1]
		const addresspGFIHI5 = accounts[1]
		const GardenContractV2D6ddPBX = await GardenContractV2.new(addressh0foaIX, addressGutaDl, addresspGFIHI5, {from: accounts[5]});
		const uintmfoVJoN = BigInt("207")
		const address3rIH5q = accounts[2]
		const stringpqdyi9x = "DvV6L9KVoJoJjQ9vpevaAYXcHga7wEhazzBsmEKxHKhx6YwzTnrd47y5bUXWDeEeSSgC9dP"
		const addressBY7eUhN = accounts[3]
		const uintnnejpRo = BigInt("129")
		const stringwRDfmeT = "tkSCj2"
		const boolzU4ri5n = false
		const uintbHnzgzS = BigInt("59")
		const stringdk9BfHP = "810erFBPbeC7Oo3OvbC4c5P04W0nmgabUV1hQ0w7mKBU3fhh5mTDxdY1wOaUBtLqCH7vpURtGU1yhzmWgE65YEYjLqHoBRJ"
		const uintF05AvVh = BigInt("1450")
//		const uint256KZa7RYt = await GardenContractV2D6ddPBX.getTotalsTLPHarvest.call(uintmfoVJoN, {from: accounts[4]});
//		const addressgLkEw31 = await GardenContractV2D6ddPBX.changeBenefitiary.call(address3rIH5q, {from: accounts[4]});
//		const uint256kV29kXU = await GardenContractV2D6ddPBX.balanceOf.call(addressBY7eUhN, stringpqdyi9x, {from: accounts[0]});
//		const stringFS5X53b = await GardenContractV2D6ddPBX.withdraw.call(stringwRDfmeT, uintnnejpRo, {from: accounts[5]});
//		const uint256gtzfm9D = await GardenContractV2D6ddPBX.plant.call(uintF05AvVh, stringdk9BfHP, uintbHnzgzS, boolzU4ri5n, {from: accounts[4]});

		await expect(GardenContractV2D6ddPBX.getTotalsTLPHarvest.call(uintmfoVJoN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZa1NGqz = accounts[2]
		const addressXHqFvxl = accounts[5]
		const addressvj9ubkH = accounts[0]
		const GardenContractV2YXfeaPn = await GardenContractV2.new(addressZa1NGqz, addressXHqFvxl, addressvj9ubkH, {from: accounts[4]});
		const uintg3zS7Oa = BigInt("88")
		const boolHfcCpK2 = true
		const uintgk1l2W = BigInt("136")
		const stringHmBBtgu = "LidyWGUXOfpFkciati4L08SdJph79zfYVtYfM419nT9LUfPe8nTCcSh"
		const uintjHqTmY = BigInt("1529")
		const stringNm9WDpF = "pBgZPOr3O0uKrkTY2EwqAuGUhZTR823S4094"
		const addresskldgNhF = accounts[0]
		const addressJEnybgX = accounts[3]
//		const uint256DrTtzv = await GardenContractV2YXfeaPn.getTotalrTLPHarvest.call(uintg3zS7Oa, {from: accounts[0]});
//		const uint256XUaUPHJ = await GardenContractV2YXfeaPn.plant.call(uintjHqTmY, stringHmBBtgu, uintgk1l2W, boolHfcCpK2, {from: accounts[2]});
//		const uint256oXXZ8I4 = await GardenContractV2YXfeaPn.totalTLPBurnt.call(stringNm9WDpF, {from: accounts[4]});
//		const addressrffh6Gt = await GardenContractV2YXfeaPn.addTokenOwner.call(addressJEnybgX, addresskldgNhF, {from: accounts[2]});

		await expect(GardenContractV2YXfeaPn.getTotalrTLPHarvest.call(uintg3zS7Oa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJrFziWy = accounts[3]
		const addressrOTV5Ai = accounts[0]
		const addressFxucDoT = "0x0000000000000000000000000000000000000001"
		const GardenContractV2cpFFKar = await GardenContractV2.new(addressJrFziWy, addressrOTV5Ai, addressFxucDoT, {from: accounts[3]});
		const addressHly2pWI = accounts[1]
		const stringHvhcFlp = "pinHeWSX74Y1VLYJm2wPX8DxLoL5icHEGQJX8TpsZmxl0QywqWuJQjF5PEvjFNEdJjdhnPOq1oLl5clviN7GUC1JBAvpCU"
		const stringIrURvI = "NIMHDu3m7IlhBMWUVU9XFcVcFjJpNctlxVQpz6j7u7LS5"
		const uintYQrYcEw = BigInt("27")
		const stringdlgxwIw = "NIafhCtc41M7abOpr6rQ17OABU1RnuOC44w5IJYU1Oscall1US85g6ZwMTnWpCpwqLfnpT8vRoMkFRPDGHXObsjkdYfvvp"
		const uintmxc7B8G = BigInt("1925")
		const uintlLHqEvN = BigInt("21")
		const stringF1ATEFO = "1oLMob0huIzInl6dAHvAne181360gIhDPQM3EKg4M1G7ODytBo"
		const uintpr6HYeQ = BigInt("18")
		const uintjKgYaLJ = BigInt("41")
		const addressg6R0tRU = await GardenContractV2cpFFKar.changeBenefitiary.call(addressHly2pWI, {from: accounts[3]});
//		const uint256dDKI1hV = await GardenContractV2cpFFKar.totalTLPDecomposed.call(stringHvhcFlp, {from: accounts[4]});
//		const uint256a39mBA4 = await GardenContractV2cpFFKar.totalTLPGrown.call(stringIrURvI, {from: accounts[2]});
//		const uint256d3HyrGG = await GardenContractV2cpFFKar.timeUntilNextTLP.call(stringdlgxwIw, uintYQrYcEw, {from: accounts[0]});
//		const stringWzjKr5I = await GardenContractV2cpFFKar.decompose.call(stringF1ATEFO, uintlLHqEvN, uintmxc7B8G, {from: accounts[0]});
//		const uint8tShyg66 = await GardenContractV2cpFFKar.zeroHoldings.call(uintjKgYaLJ, uintpr6HYeQ, {from: accounts[2]});

		await expect(GardenContractV2cpFFKar.totalTLPDecomposed.call(stringHvhcFlp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWncwdj = "0x0000000000000000000000000000000000000001"
		const addressKwp6hp = accounts[2]
		const addressKhXNYFs = accounts[0]
		const GardenContractV2ayeMLoz = await GardenContractV2.new(addressWncwdj, addressKwp6hp, addressKhXNYFs, {from: accounts[1]});
		const uintOB3vFij = BigInt("192")
		const stringpAMKBx9 = "blZkjN66ngixJdc1gVidQml8QhKQHm"
		const uintEKlSoFT = BigInt("79")
		const uintRePFXWt = BigInt("117")
		const uintZSkVZsR = BigInt("1691")
		const uintb5il0cx = BigInt("17")
		const uintaL9KLy9 = BigInt("212")
		const addressjKeSQRH = accounts[3]
		const stringwu5QH57 = "LRvb81YSYur"
		const addressSHgnUM = accounts[2]
		const uint00eykk = BigInt("176")
//		const stringix7NdAg = await GardenContractV2ayeMLoz.withdraw.call(stringpAMKBx9, uintOB3vFij, {from: accounts[0]});
//		const uint8NIWGo6E = await GardenContractV2ayeMLoz.zeroHoldings.call(uintRePFXWt, uintEKlSoFT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8hOcPYfO = await GardenContractV2ayeMLoz.operationBurnMint.call(uintaL9KLy9, uintb5il0cx, uintZSkVZsR, {from: accounts[2]});
//		const addressU32Gb6Z = await GardenContractV2ayeMLoz.changeBenefitiary.call(addressjKeSQRH, {from: accounts[3]});
//		const uint256FD4xG1X = await GardenContractV2ayeMLoz.balanceOf.call(addressSHgnUM, stringwu5QH57, {from: accounts[3]});
//		const uint256nSKo76k = await GardenContractV2ayeMLoz.getTotalsTLPHarvest.call(uint00eykk, {from: accounts[1]});

		await expect(GardenContractV2ayeMLoz.withdraw.call(stringpAMKBx9, uintOB3vFij, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressq8VHsXt = accounts[0]
		const addressmSjJWmU = accounts[4]
		const addressXZTtWGR = accounts[0]
		const GardenContractV2b28pVo = await GardenContractV2.new(addressq8VHsXt, addressmSjJWmU, addressXZTtWGR, {from: accounts[2]});
		const uintgjFUZFq = BigInt("739")
		const uintBpEOsn = BigInt("64")
		const uintCnUm9tP = BigInt("35")
		const string3ECjrt = "KXXYxyBs4ecKv8bIWE57l7Ibac0ZuCzwliESueAQgWA2Lt1tHruvFYkRg31Pg2z1mLweiOasSURWLeELoj16R3NpNYmRp"
		const uintb3kPZKx = BigInt("237")
		const stringBQ89ozo = "QPqAr870QMhVRrE0pzxH4yhAtdvzicjpS9Pmr9bmIFNQlgdXLu"
		const uintFuy6eZ = BigInt("40")
		const stringQfuf6a6 = "TXbgb9wkfshxNy8RTMxXr4"
		const addressHsZytcb = "0x0000000000000000000000000000000000000001"
//		const uint8M2t6Zvb = await GardenContractV2b28pVo.operationBurnMint.call(uintCnUm9tP, uintBpEOsn, uintgjFUZFq, {from: "0x0000000000000000000000000000000000000001"});
//		const stringE5yfvlb = await GardenContractV2b28pVo.harvestAllBeds.call(string3ECjrt, {from: accounts[5]});
//		const stringdHgsFYU = await GardenContractV2b28pVo.withdraw.call(stringBQ89ozo, uintb3kPZKx, {from: accounts[3]});
//		const uint256ikbggxi = await GardenContractV2b28pVo.growthRemaining.call(addressHsZytcb, stringQfuf6a6, uintFuy6eZ, {from: accounts[4]});

		await expect(GardenContractV2b28pVo.operationBurnMint.call(uintCnUm9tP, uintBpEOsn, uintgjFUZFq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWBfHr4F = accounts[1]
		const addressUh2obdJ = "0x0000000000000000000000000000000000000001"
		const addressy0ke86 = accounts[1]
		const GardenContractV2BPhlDF4 = await GardenContractV2.new(addressWBfHr4F, addressUh2obdJ, addressy0ke86, {from: accounts[5]});
		const addressEweXkm = accounts[4]
		const addressfqhgJpV = accounts[3]
		const uintHpvA21q = BigInt("939")
		const uint5Zov00 = BigInt("216")
		const stringqrVbHb = "j20OMu5cBMIAOLLvBVI5Z90jXSKjtRxR54h9aRh8G69vkWBfSQT7mFXu1U3uhRdz"
		const addressehQ4h1o = accounts[4]
		const addresswWfoGLi = accounts[3]
//		const addressdpbbDE8 = await GardenContractV2BPhlDF4.addTokenOwner.call(addressfqhgJpV, addressEweXkm, {from: accounts[4]});
//		const stringx4cEs3H = await GardenContractV2BPhlDF4.decompose.call(stringqrVbHb, uint5Zov00, uintHpvA21q, {from: accounts[0]});
//		const addresscmZ16En = await GardenContractV2BPhlDF4.changeOwner.call(addressehQ4h1o, {from: accounts[4]});
//		const addressT1kfFKf = await GardenContractV2BPhlDF4.renounceTokenOwner.call(addresswWfoGLi, {from: accounts[2]});

		await expect(GardenContractV2BPhlDF4.addTokenOwner.call(addressfqhgJpV, addressEweXkm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOMNqu3T = accounts[1]
		const addresshNt0Shz = accounts[3]
		const addressNyyR9N = accounts[4]
		const GardenContractV2Xm0vTg8 = await GardenContractV2.new(addressOMNqu3T, addresshNt0Shz, addressNyyR9N, {from: accounts[0]});
		const stringPat9mL = "fdZ3KRCmjEzGgIZntJ7mIFWxnTygT46YcJCMqmfOv6Zp4DGSEUGXbSf7OKqr4FDLO6coOhUd6a37RhKveTfmAyH19wS"
		const addressvmu5C36 = accounts[1]
		const addressq7h2G98 = accounts[2]
		const addressTh428Il = "0x0000000000000000000000000000000000000001"
		const stringGRPwvGz = "gqAbIur"
		const addressnspheMR = accounts[1]
//		const stringNJA2sOG = await GardenContractV2Xm0vTg8.harvestAllBeds.call(stringPat9mL, {from: accounts[3]});
//		const addresstwQSCDc = await GardenContractV2Xm0vTg8.addTokenOwner.call(addressq7h2G98, addressvmu5C36, {from: accounts[4]});
//		const addressIwMlmHe = await GardenContractV2Xm0vTg8.changeBenefitiary.call(addressTh428Il, {from: accounts[0]});
//		const uint256RX4NvDD = await GardenContractV2Xm0vTg8.balanceOf.call(addressnspheMR, stringGRPwvGz, {from: accounts[2]});

		await expect(GardenContractV2Xm0vTg8.harvestAllBeds.call(stringPat9mL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJipNedf = accounts[3]
		const addressXrVG7TC = accounts[4]
		const addressigrZdhX = accounts[4]
		const GardenContractV2uwIW8JJ = await GardenContractV2.new(addressJipNedf, addressXrVG7TC, addressigrZdhX, {from: accounts[0]});
		const stringt7N3yn6 = "hMzA6OeWX"
		const uinty937aiH = BigInt("18")
		const uintVNKGcKw = BigInt("215")
		const addressVKlTf3 = "0x0000000000000000000000000000000000000000"
//		const uint256SbBJHaC = await GardenContractV2uwIW8JJ.totalTLPGrowing.call(stringt7N3yn6, {from: accounts[4]});
//		const uint8GdxvaLC = await GardenContractV2uwIW8JJ.setTimeStamp.call(uintVNKGcKw, uinty937aiH, {from: accounts[2]});
//		const addressd4Texwu = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressVKlTf3, {from: accounts[2]});

		await expect(GardenContractV2uwIW8JJ.totalTLPGrowing.call(stringt7N3yn6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseLfyFAI = accounts[2]
		const addressA1EpCdj = accounts[5]
		const addressBTFlV9I = accounts[0]
		const GardenContractV2YXfeaPn = await GardenContractV2.new(addresseLfyFAI, addressA1EpCdj, addressBTFlV9I, {from: accounts[4]});
		const boolHfcCpK2 = false
		const uintylIS4wM = BigInt("136")
		const stringHmBBtgu = "LidyWGUXOfpFkciati4L08SdJph79zfYVtYfM419nT9LUfPe8nTCcSh"
		const uinte6yfYh = BigInt("1529")
		const stringNm9WDpF = "pBgZPOr3O0uKrkTY2EwqAuGUhZTR823S4094"
		const addressviUDTvK = accounts[0]
		const addressYihnqGD = accounts[3]
//		const uint256XUaUPHJ = await GardenContractV2YXfeaPn.plant.call(uinte6yfYh, stringHmBBtgu, uintylIS4wM, boolHfcCpK2, {from: accounts[2]});
//		const uint256oXXZ8I4 = await GardenContractV2YXfeaPn.totalTLPBurnt.call(stringNm9WDpF, {from: accounts[4]});
//		const addressrffh6Gt = await GardenContractV2YXfeaPn.addTokenOwner.call(addressYihnqGD, addressviUDTvK, {from: accounts[2]});

		await expect(GardenContractV2YXfeaPn.plant.call(uinte6yfYh, stringHmBBtgu, uintylIS4wM, boolHfcCpK2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQtAJWPw = accounts[2]
		const addressIXnAdKl = accounts[5]
		const addressQdXdcyu = accounts[0]
		const GardenContractV2YXfeaPn = await GardenContractV2.new(addressQtAJWPw, addressIXnAdKl, addressQdXdcyu, {from: accounts[4]});
		const stringNm9WDpF = "pBgZPOr3O0uKrkTY2EwqAuGUhZTR823S4094"
		const addressDfO4yjQ = accounts[0]
		const addressAn30W2t = accounts[4]
//		const uint256oXXZ8I4 = await GardenContractV2YXfeaPn.totalTLPBurnt.call(stringNm9WDpF, {from: accounts[4]});
//		const addressrffh6Gt = await GardenContractV2YXfeaPn.addTokenOwner.call(addressAn30W2t, addressDfO4yjQ, {from: accounts[2]});

		await expect(GardenContractV2YXfeaPn.totalTLPBurnt.call(stringNm9WDpF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressr5iFLA3 = accounts[4]
		const addressAzg9qNm = accounts[0]
		const addressz44ROcD = accounts[1]
		const GardenContractV2Ves7NG3 = await GardenContractV2.new(addressr5iFLA3, addressAzg9qNm, addressz44ROcD, {from: accounts[5]});
		const uintJEn80OY = BigInt("247")
		const stringYgGiwsI = "RPwnVDTfo"
		const addresspHlPWfE = accounts[4]
		const uintLIgSnv1 = BigInt("136")
		const stringZd4FN26 = "mKiR0pGXqSc52SGL34Sq0hMNJChRS3AmzHmUSU0aXsInOuoMjPG084HiWWMgQzz6T7fsKxh"
		const uintkl1adL = BigInt("97")
//		await GardenContractV2Ves7NG3.totalBedSupply.call(stringYgGiwsI, uintJEn80OY, {from: accounts[0]});
//		const address9RYLSY = await GardenContractV2Ves7NG3.changeBenefitiary.call(addresspHlPWfE, {from: accounts[0]});
//		const uint256YcrEfPx = await GardenContractV2Ves7NG3.timeUntilNextTLP.call(stringZd4FN26, uintLIgSnv1, {from: accounts[2]});
//		const uint256YQCfA5A = await GardenContractV2Ves7NG3.getTotalsTLPHarvest.call(uintkl1adL, {from: accounts[5]});

		await expect(GardenContractV2Ves7NG3.totalBedSupply.call(stringYgGiwsI, uintJEn80OY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuJpNWD = accounts[3]
		const address5mALsj = accounts[4]
		const addressCBEbG0 = accounts[4]
		const GardenContractV2uwIW8JJ = await GardenContractV2.new(addressuJpNWD, address5mALsj, addressCBEbG0, {from: accounts[0]});
		const uintcIHtfOH = BigInt("155")
		const stringIlJgtuX = "9afU9hu6ijNH6Nw8jsycFhPVxaS5X2k"
		const addressIWqxI2v = "0x0000000000000000000000000000000000000001"
//		const uint256wBviwZ = await GardenContractV2uwIW8JJ.timeUntilNextTLP.call(stringIlJgtuX, uintcIHtfOH, {from: accounts[2]});
//		const addressd4Texwu = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressIWqxI2v, {from: accounts[2]});

		await expect(GardenContractV2uwIW8JJ.timeUntilNextTLP.call(stringIlJgtuX, uintcIHtfOH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJMYVwaf = accounts[3]
		const addressZFw7kTf = accounts[4]
		const addressThlWoWJ = accounts[4]
		const GardenContractV2uwIW8JJ = await GardenContractV2.new(addressJMYVwaf, addressZFw7kTf, addressThlWoWJ, {from: accounts[0]});
		const addressuAT9lFj = accounts[3]
		const addressLb4f0W4 = accounts[2]
		const stringoHOQmVm = "DIHSFxnpYZQkx85Lh4qtP6BvOXr3y5k7xnL29RjdmFPWieOYhWwQzj0TeV"
		const addressQdJ6PvG = "0x0000000000000000000000000000000000000002"
//		const addressf4oVm16 = await GardenContractV2uwIW8JJ.addTokenOwner.call(addressLb4f0W4, addressuAT9lFj, {from: accounts[0]});
//		const uint256BNpYCuY = await GardenContractV2uwIW8JJ.totalTLPGrowing.call(stringoHOQmVm, {from: accounts[4]});
//		const addressd4Texwu = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressQdJ6PvG, {from: accounts[2]});

		await expect(GardenContractV2uwIW8JJ.addTokenOwner.call(addressLb4f0W4, addressuAT9lFj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJJUHnfU = accounts[0]
		const addressoR5z0sI = accounts[0]
		const addresscMOto6f = accounts[3]
		const GardenContractV2Hj66PVp = await GardenContractV2.new(addressJJUHnfU, addressoR5z0sI, addresscMOto6f, {from: accounts[2]});
		const stringgvPQug = "wa6uQTLzXloAeqPyAOgV8a4KICcXWBcKps5DgSlFvfDlByWJV0PjWrH5RbhjWDshAo7rTvfbkJxEcBiwvnVgA9zvVIcNXQ"
		const uintg8nDlUv = BigInt("1533")
		const uintC0ngP2H = BigInt("198")
		const stringYupuW4 = "jL7RCOFkNVstmlpyDeE6A5EYsbjsl2Mo5e8PURxTxpSV"
//		const uint256eD4Wuoy = await GardenContractV2Hj66PVp.totalGardenSupply.call(stringgvPQug, {from: accounts[3]});
//		const stringe0OJhy4 = await GardenContractV2Hj66PVp.decompose.call(stringYupuW4, uintC0ngP2H, uintg8nDlUv, {from: accounts[5]});

		await expect(GardenContractV2Hj66PVp.totalGardenSupply.call(stringgvPQug, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressiynQold = accounts[3]
		const addressI78ibnR = accounts[4]
		const addresssGkjGo4 = accounts[4]
		const GardenContractV2uwIW8JJ = await GardenContractV2.new(addressiynQold, addressI78ibnR, addresssGkjGo4, {from: accounts[0]});
		const stringEUz4M6F = "YAioF5PTKGgYBS5ojQJLFHX49h"
		const addressDoGCfKF = accounts[4]
//		const uint256HF1xdzF = await GardenContractV2uwIW8JJ.totalTLPGrown.call(stringEUz4M6F, {from: "0x0000000000000000000000000000000000000001"});
//		const addressd4Texwu = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressDoGCfKF, {from: accounts[2]});

		await expect(GardenContractV2uwIW8JJ.totalTLPGrown.call(stringEUz4M6F, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressE9YkZsY = accounts[2]
		const addressV8HTW0e = accounts[0]
		const address3nOxXY = "0x0000000000000000000000000000000000000001"
		const GardenContractV2JRvIyde = await GardenContractV2.new(addressE9YkZsY, addressV8HTW0e, address3nOxXY, {from: accounts[4]});
		const stringrXqAYIO = "brmQDhOv4f6uOwKac9U7Ojl3C1g9jV7Rihjpvzven8aYvRoYhM2ilwYCczRMIpT"
		const addressEev9PQt = "0x0000000000000000000000000000000000000001"
		const uintiHW0DPj = BigInt("236")
		const uintWhc2d2 = BigInt("30")
		const uintnD7rmTW = BigInt("25")
//		const uint256AgtO10Q = await GardenContractV2JRvIyde.balanceOf.call(addressEev9PQt, stringrXqAYIO, {from: accounts[5]});
//		const uint256jklII9v = await GardenContractV2JRvIyde.getTotalsTLPHarvest.call(uintiHW0DPj, {from: accounts[2]});
//		const uint8oQvEq9n = await GardenContractV2JRvIyde.zeroHoldings.call(uintnD7rmTW, uintWhc2d2, {from: accounts[5]});

		await expect(GardenContractV2JRvIyde.balanceOf.call(addressEev9PQt, stringrXqAYIO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstwr772 = accounts[0]
		const addresseZrNSQW = accounts[1]
		const addressWWU19eq = accounts[1]
		const GardenContractV2mivzxH9 = await GardenContractV2.new(addresstwr772, addresseZrNSQW, addressWWU19eq, {from: accounts[4]});
		const uintCC4NAYZ = BigInt("37")
		const stringwKENTME = "dDx16FX7AS1LdA0dJ7ACrKNYwSmrOvTYkXFjekjtvuckb1AMYH6"
		const addressjUCVLcL = accounts[2]
		const stringuo907x = "hzdmgl4paOHf5lGNsLEzktTs5L2pTLT6J7iX7Y6ARsCGZgkG3dKLgNEUR1tqKjJCaNYNVO19acTwi8hrDmx7EEO"
		const uintcK9gXLi = BigInt("160")
		const uintd112eUS = BigInt("95")
		const stringZh8sZ0Y = "ph573PXiXijxjgKqbbxy4b48sHloBzJbBRbFSHQfqD15yBHdpo3aJ5tfle78Ub3poymgKg"
//		const uint256qI8Ds6 = await GardenContractV2mivzxH9.growthRemaining.call(addressjUCVLcL, stringwKENTME, uintCC4NAYZ, {from: accounts[1]});
//		const uint256m5ZcnBF = await GardenContractV2mivzxH9.totalTLPGrowing.call(stringuo907x, {from: accounts[3]});
//		const uint8xfFTNGY = await GardenContractV2mivzxH9.setTimeStamp.call(uintd112eUS, uintcK9gXLi, {from: accounts[0]});
//		const stringJXgXJBH = await GardenContractV2mivzxH9.harvestAllBeds.call(stringZh8sZ0Y, {from: accounts[2]});

		await expect(GardenContractV2mivzxH9.growthRemaining.call(addressjUCVLcL, stringwKENTME, uintCC4NAYZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address2MTvHu = accounts[3]
		const addressT9Gxxhx = accounts[4]
		const addressbLukXVc = accounts[4]
		const GardenContractV2uwIW8JJ = await GardenContractV2.new(address2MTvHu, addressT9Gxxhx, addressbLukXVc, {from: accounts[0]});
		const uintVjVQVwl = BigInt("142")
		const stringViXsKp = "dx6Apaqp6lNrLkV3M4iEXvxLtLgNelrjTVq2u2G5X8KUIUDsrHp4K40DmHpE4PkuktK6ir2ldFS2sMACRz1fMVrT6p2"
		const addressIuxCeBt = "0x0000000000000000000000000000000000000003"
//		const stringUpov43w = await GardenContractV2uwIW8JJ.harvest.call(stringViXsKp, uintVjVQVwl, {from: accounts[0]});
//		const addressd4Texwu = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressIuxCeBt, {from: accounts[2]});

		await expect(GardenContractV2uwIW8JJ.harvest.call(stringViXsKp, uintVjVQVwl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address1lHoWM = accounts[3]
		const addressq69W6KC = accounts[3]
		const addressN1eThq = accounts[0]
		const GardenContractV2mCsZrJj = await GardenContractV2.new(address1lHoWM, addressq69W6KC, addressN1eThq, {from: "0x0000000000000000000000000000000000000001"});
		const uintgrlmVoK = BigInt("160")
		const stringBfOXBa8 = "avbX2IRq1l9uM9HJ5scSFkyKYAeZWZploeK52si"
		const uintxy6V7I = BigInt("5")
		const stringlxqTjGU = "QCdLV"
		const uint256KGPOdW6 = await GardenContractV2mCsZrJj.timeUntilNextTLP.call(stringBfOXBa8, uintgrlmVoK, {from: accounts[3]});
		const stringF7nsZOr = await GardenContractV2mCsZrJj.withdraw.call(stringlxqTjGU, uintxy6V7I, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressuGcWHh9 = "0x0000000000000000000000000000000000000001"
		const addressdchuaj5 = accounts[4]
		const addressYW2fKX = accounts[2]
		const GardenContractV2jO6Hpzk = await GardenContractV2.new(addressuGcWHh9, addressdchuaj5, addressYW2fKX, {from: accounts[5]});
		const uintHcEJLbZ = BigInt("242")
		const stringUZBEsmG = "kgTwNjRiDXnbY1t2jgzzUncCPLYedrSFJovERq7i0WQEtiA3"
		const stringIg55jC7 = "F9gsINOLW9RSYPVwTsQRGUvNSR52YPp"
		const addressDWof2AT = accounts[4]
//		const stringPqbqmJI = await GardenContractV2jO6Hpzk.claimDecompose.call(stringUZBEsmG, uintHcEJLbZ, {from: accounts[4]});
//		const uint256rppNOGr = await GardenContractV2jO6Hpzk.balanceOf.call(addressDWof2AT, stringIg55jC7, {from: accounts[0]});

		await expect(GardenContractV2jO6Hpzk.claimDecompose.call(stringUZBEsmG, uintHcEJLbZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssSVe5S9 = accounts[1]
		const addressRgLggB1 = accounts[3]
		const addressvBUkN3h = accounts[4]
		const GardenContractV2Xm0vTg8 = await GardenContractV2.new(addresssSVe5S9, addressRgLggB1, addressvBUkN3h, {from: accounts[0]});
		const addressemrKGAG = "0x0000000000000000000000000000000000000001"
		const stringlceuj5W = "TqPTtLwouVxGfW3xLhvMGQfAjpJSklbd4xhVmt4PByd6w6G89aOPZ6yKPtg8"
		const uintxCPEE21 = BigInt("687")
		const uinthrcgILa = BigInt("140")
		const uintNNXTYez = BigInt("156")
		const stringPat9mL = "fdZ3KRCmjEzGgIZntJ7mIFWxnTygT46YcJCMqmfOv6Zp4DGSEUGXbSf7OKqr4FDLO6coOhUd6a37RhKveTfmAyH19wS"
		const addressYAB299F = await GardenContractV2Xm0vTg8.changeOwner.call(addressemrKGAG, {from: accounts[0]});
//		const uint256f8ofLqK = await GardenContractV2Xm0vTg8.totalTLPDecomposed.call(stringlceuj5W, {from: accounts[4]});
//		const uint8qP5EvJ = await GardenContractV2Xm0vTg8.operationBurnMint.call(uintNNXTYez, uinthrcgILa, uintxCPEE21, {from: accounts[0]});
//		const stringNJA2sOG = await GardenContractV2Xm0vTg8.harvestAllBeds.call(stringPat9mL, {from: accounts[3]});

		await expect(GardenContractV2Xm0vTg8.totalTLPDecomposed.call(stringlceuj5W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaz1CGHz = accounts[3]
		const addressGsoBiDi = accounts[4]
		const addressTj8zyp = accounts[4]
		const GardenContractV2uwIW8JJ = await GardenContractV2.new(addressaz1CGHz, addressGsoBiDi, addressTj8zyp, {from: accounts[0]});
		const addressIVUK4CA = accounts[1]
		const addressUY2jvMi = accounts[2]
		const stringCRixif = "2Omzg7Cf1ntRRPw2jgy1"
//		const addresshAteoA4 = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressIVUK4CA, {from: accounts[0]});
//		const addressd4Texwu = await GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressUY2jvMi, {from: accounts[2]});
//		const uint256yruYJiv = await GardenContractV2uwIW8JJ.totalTLPDecomposed.call(stringCRixif, {from: accounts[0]});

		await expect(GardenContractV2uwIW8JJ.renounceTokenOwner.call(addressIVUK4CA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWNvSuD = accounts[2]
		const addressiYBfUsL = accounts[5]
		const addressZMORo8 = accounts[0]
		const GardenContractV2YXfeaPn = await GardenContractV2.new(addressWNvSuD, addressiYBfUsL, addressZMORo8, {from: accounts[4]});
		const uintFBKkMB = BigInt("0")
		const uintV5uF3bd = BigInt("70")
		const stringU6rarQk = "j"
		const addressisU1rBG = accounts[2]
		const uintKSanm9o = BigInt("91")
//		const uint256DrTtzv = await GardenContractV2YXfeaPn.getTotalrTLPHarvest.call(uintFBKkMB, {from: accounts[0]});
//		const uint256ZOvBmnU = await GardenContractV2YXfeaPn.growthRemaining.call(addressisU1rBG, stringU6rarQk, uintV5uF3bd, {from: accounts[2]});
//		const uint256gXgQb3I = await GardenContractV2YXfeaPn.getTotalrTLPHarvest.call(uintKSanm9o, {from: accounts[2]});

		await expect(GardenContractV2YXfeaPn.getTotalrTLPHarvest.call(uintFBKkMB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})