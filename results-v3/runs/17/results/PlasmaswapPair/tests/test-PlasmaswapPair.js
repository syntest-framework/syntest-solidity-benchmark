const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairC86RFWS = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressk0ItO7d = accounts[1]
		const addressoKI4JJD = accounts[0]
		const addressh4iAPIC = "0x0000000000000000000000000000000000000001"
		const addressT1E5JF1 = accounts[1]
		const addressn4ptiJe = accounts[3]
		const addressBTocfsS = accounts[1]
		const addressbXildV0 = accounts[2]
		const addressF12eQ0D = accounts[4]
		const addressmXKeejz = await PlasmaswapPairC86RFWS.skim.call(addressk0ItO7d, {from: accounts[0]});
		const addressBmgCyiM = await PlasmaswapPairC86RFWS.initialize.call(addressh4iAPIC, addressoKI4JJD, {from: accounts[3]});
		const addressjFaQLjV = await PlasmaswapPairC86RFWS.initialize.call(addressn4ptiJe, addressT1E5JF1, {from: accounts[0]});
		const addressIxWk1hs = await PlasmaswapPairC86RFWS.initialize.call(addressbXildV0, addressBTocfsS, {from: accounts[3]});
		const uintVoQRDXs = await PlasmaswapPairC86RFWS.burn.call(addressF12eQ0D, {from: accounts[0]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairsGZGQPJ = await PlasmaswapPair.new({from: accounts[2]});
		const addressntIs3Lr = accounts[5]
		const addressVUUwpqy = accounts[3]
		const addressmBttrTT = accounts[3]
		const addressdJ39Ak6 = await PlasmaswapPairsGZGQPJ.skim.call(addressntIs3Lr, {from: accounts[5]});
		const uints0sTuZh = await PlasmaswapPairsGZGQPJ.mint.call(addressVUUwpqy, {from: accounts[0]});
		const uint112zmofb5i = await PlasmaswapPairsGZGQPJ.getReserves.call({from: accounts[4]});
		const uintbdLXZTS = await PlasmaswapPairsGZGQPJ.mint.call(addressmBttrTT, {from: accounts[0]});

		await expect(PlasmaswapPairsGZGQPJ.skim.call(addressntIs3Lr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZnwHoK = await PlasmaswapPair.new({from: accounts[3]});
		const byteGElsOQk = "0x11"
		const addressysOa6r1 = accounts[2]
		const uintgOCHOqt = BigInt("47")
		const uintKohlgC1 = BigInt("340")
		const addressWVvLmq9 = accounts[4]
		const uintNe6HRfZ = await PlasmaswapPairZnwHoK.swap.call(uintKohlgC1, uintgOCHOqt, addressysOa6r1, byteGElsOQk, {from: accounts[2]});
		const addressVTig0mA = await PlasmaswapPairZnwHoK.skim.call(addressWVvLmq9, {from: accounts[3]});

		await expect(PlasmaswapPairZnwHoK.swap.call(uintKohlgC1, uintgOCHOqt, addressysOa6r1, byteGElsOQk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairSwUnPhG = await PlasmaswapPair.new({from: accounts[0]});
		const addressqUNkW7n = "0x0000000000000000000000000000000000000001"
		const addressVwtLukc = accounts[3]
		const addresscA8ND9x = "0x0000000000000000000000000000000000000001"
		const addressTvaxbl = accounts[3]
		const uint112Cfk46Fh = await PlasmaswapPairSwUnPhG.getReserves.call({from: accounts[5]});
		await PlasmaswapPairSwUnPhG.lock.call({from: accounts[3]});
		const uintykLZh78 = await PlasmaswapPairSwUnPhG.burn.call(addressqUNkW7n, {from: accounts[4]});
		const addressBr8XAYm = await PlasmaswapPairSwUnPhG.initialize.call(addresscA8ND9x, addressVwtLukc, {from: accounts[1]});
		const addressOPUhb1 = await PlasmaswapPairSwUnPhG.skim.call(addressTvaxbl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairSwUnPhG.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairwSufHFF = await PlasmaswapPair.new({from: accounts[2]});
		const addressqOzCFbJ = accounts[3]
		const byteOh6Mun4 = "0x0a01061b18120f"
		const addressDCgzT58 = "0x0000000000000000000000000000000000000001"
		const uintTJO8OrT = BigInt("73")
		const uintzGGRGt4 = BigInt("27")
		const addressAFdaOyR = accounts[1]
		const addressVkxAlQF = "0x0000000000000000000000000000000000000001"
		const uintAi38VPa = await PlasmaswapPairwSufHFF.mint.call(addressqOzCFbJ, {from: accounts[2]});
		const uintrUj2hyq = await PlasmaswapPairwSufHFF.swap.call(uintzGGRGt4, uintTJO8OrT, addressDCgzT58, byteOh6Mun4, {from: "0x0000000000000000000000000000000000000001"});
		const uintk6HLAoD = await PlasmaswapPairwSufHFF.burn.call(addressAFdaOyR, {from: accounts[1]});
		await PlasmaswapPairwSufHFF.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintltJlJMX = await PlasmaswapPairwSufHFF.mint.call(addressVkxAlQF, {from: accounts[4]});

		await expect(PlasmaswapPairwSufHFF.mint.call(addressqOzCFbJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairlbimQTL = await PlasmaswapPair.new({from: accounts[3]});
		const addressrJMmX7E = accounts[3]
		const addresskvDVLUr = accounts[2]
		const addressH9JYBWT = "0x0000000000000000000000000000000000000001"
		const uint112BL6su2V = await PlasmaswapPairlbimQTL.getReserves.call({from: accounts[1]});
		const addressGURbORF = await PlasmaswapPairlbimQTL.initialize.call(addresskvDVLUr, addressrJMmX7E, {from: "0x0000000000000000000000000000000000000001"});
		const addressJtA7dXl = await PlasmaswapPairlbimQTL.skim.call(addressH9JYBWT, {from: accounts[4]});

		await expect(PlasmaswapPairlbimQTL.initialize.call(addresskvDVLUr, addressrJMmX7E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairlbimQTL = await PlasmaswapPair.new({from: accounts[3]});
		const addressAWyV5rU = accounts[4]
		const addresskZw03P6 = accounts[1]
		const addressUacTd5r = accounts[3]
		const addressHsyojl = accounts[4]
		const addressVx3Ze27 = accounts[2]
		const addressXA4o3Pf = "0x0000000000000000000000000000000000000001"
		const uinta3xeeFp = await PlasmaswapPairlbimQTL.burn.call(addressAWyV5rU, {from: accounts[4]});
		const addressiQQqsZg = await PlasmaswapPairlbimQTL.skim.call(addresskZw03P6, {from: accounts[3]});
		const uint112BL6su2V = await PlasmaswapPairlbimQTL.getReserves.call({from: accounts[1]});
		const uinta01qM2V = await PlasmaswapPairlbimQTL.mint.call(addressUacTd5r, {from: accounts[3]});
		const addressGURbORF = await PlasmaswapPairlbimQTL.initialize.call(addressVx3Ze27, addressHsyojl, {from: "0x0000000000000000000000000000000000000001"});
		const addressJtA7dXl = await PlasmaswapPairlbimQTL.skim.call(addressXA4o3Pf, {from: accounts[4]});

		await expect(PlasmaswapPairlbimQTL.burn.call(addressAWyV5rU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairlbimQTL = await PlasmaswapPair.new({from: accounts[3]});
		const addresscMl3dc9 = accounts[3]
		const addressoqBYpbU = accounts[2]
		const addressEU3FeG2 = accounts[3]
		const addressqwjFrsh = accounts[3]
		const addressgKu8PnT = accounts[1]
		const addressZ3jvOeX = "0x0000000000000000000000000000000000000001"
		const uint112BL6su2V = await PlasmaswapPairlbimQTL.getReserves.call({from: accounts[1]});
		const addressbrNpd61 = await PlasmaswapPairlbimQTL.initialize.call(addressoqBYpbU, addresscMl3dc9, {from: accounts[3]});
		const addressGURbORF = await PlasmaswapPairlbimQTL.initialize.call(addressqwjFrsh, addressEU3FeG2, {from: "0x0000000000000000000000000000000000000001"});
		const uintQgeEtjx = await PlasmaswapPairlbimQTL.mint.call(addressgKu8PnT, {from: accounts[5]});
		const addressJtA7dXl = await PlasmaswapPairlbimQTL.skim.call(addressZ3jvOeX, {from: accounts[4]});

		await expect(PlasmaswapPairlbimQTL.initialize.call(addressqwjFrsh, addressEU3FeG2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZnwHoK = await PlasmaswapPair.new({from: accounts[3]});
		const addressxE4ECc = accounts[3]
		const addressY90YDsu = accounts[2]
		const addressjWhgSiS = accounts[2]
		const byteY9pWo9f = "0x11"
		const addressjQK5q8v = accounts[2]
		const uintHIHtaZ2 = BigInt("47")
		const uintmfWVZ0d = BigInt("320")
		await PlasmaswapPairZnwHoK.sync.call({from: accounts[3]});
		const uintnKI3M4t = await PlasmaswapPairZnwHoK.burn.call(addressxE4ECc, {from: accounts[3]});
		const uintzn1AalD = await PlasmaswapPairZnwHoK.burn.call(addressY90YDsu, {from: accounts[3]});
		const uintkclt56t = await PlasmaswapPairZnwHoK.burn.call(addressjWhgSiS, {from: accounts[1]});
		const uintNe6HRfZ = await PlasmaswapPairZnwHoK.swap.call(uintmfWVZ0d, uintHIHtaZ2, addressjQK5q8v, byteY9pWo9f, {from: accounts[2]});

		await expect(PlasmaswapPairZnwHoK.sync.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})