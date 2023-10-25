const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinq2G5Acd = await DJCoin.new({from: accounts[2]});
		const uintsIFNOTk = BigInt("1507")
		const addressDoUitLQ = accounts[3]
		const addressylQdW3h = accounts[4]
		const addresslEv6Kgk = accounts[2]
		const uintdgABBE5 = BigInt("1430")
		const addressVoRBq1A = accounts[0]
		const bool0CufTu = await DJCoinq2G5Acd.approve.call(addressDoUitLQ, uintsIFNOTk, {from: accounts[4]});
		const uint256t3rgIT2 = await DJCoinq2G5Acd.balanceOf.call(addressylQdW3h, {from: accounts[1]});
		const addressfvlXfI2 = await DJCoinq2G5Acd.validRecipient.call(addresslEv6Kgk, {from: accounts[4]});
		const addressHwTbJfW = await DJCoinq2G5Acd.owner.call({from: accounts[5]});
		const boolVsEsq0y = await DJCoinq2G5Acd.transfer.call(addressVoRBq1A, uintdgABBE5, {from: accounts[4]});

		assert.equal(bool0CufTu, true)
		assert.equal(uint256t3rgIT2, BigInt("0"))
		await expect(DJCoinq2G5Acd.validRecipient.call(addresslEv6Kgk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinEo2rtKK = await DJCoin.new({from: accounts[1]});
		const uintfHL86RT = BigInt("856")
		const uinta838HcB = BigInt("1366")
		const uintYXRKLl4 = BigInt("477")
		const addressWz5MWFL = accounts[0]
		const uint256pgc1icF = await DJCoinEo2rtKK.burn.call(uinta838HcB, uintfHL86RT, {from: accounts[3]});
		const booluqcP9u = await DJCoinEo2rtKK.transfer.call(addressWz5MWFL, uintYXRKLl4, {from: accounts[3]});
		await DJCoinEo2rtKK.onlyOwner.call({from: accounts[2]});
		const uint256B9ddJ90 = await DJCoinEo2rtKK.totalSupply.call({from: accounts[4]});
		const addressgICFRCn = await DJCoinEo2rtKK.owner.call({from: accounts[1]});
		await DJCoinEo2rtKK.renounceOwnership.call({from: accounts[1]});

		await expect(DJCoinEo2rtKK.burn.call(uinta838HcB, uintfHL86RT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinJxtQ0It = await DJCoin.new({from: accounts[1]});
		const uintd6hgNnm = BigInt("1527")
		const addressSxq5xrx = accounts[1]
		const uintWVCD5lz = BigInt("786")
		const uintjTLh9ND = BigInt("984")
		const addressGX0d28A = accounts[1]
		const addressNIc64l4 = accounts[0]
		const uintS2lz1X8 = BigInt("122")
		const uintiEBuTQo = BigInt("1423")
		const addressScCCvOq = accounts[0]
		const addressI7LZULU = accounts[1]
		const boolqNSEid = await DJCoinJxtQ0It.decreaseAllowance.call(addressSxq5xrx, uintd6hgNnm, {from: accounts[0]});
		const boolUjhrBVb = await DJCoinJxtQ0It.changetokensPerBlock.call(uintWVCD5lz, {from: accounts[3]});
		const boolgKrWCb = await DJCoinJxtQ0It.transferFrom.call(addressNIc64l4, addressGX0d28A, uintjTLh9ND, {from: accounts[1]});
		const boolo82QUuX = await DJCoinJxtQ0It.changetokensPerBlock.call(uintS2lz1X8, {from: accounts[2]});
		const boolELHDoq = await DJCoinJxtQ0It.approve.call(addressScCCvOq, uintiEBuTQo, {from: accounts[1]});
		const addressUv57jOB = await DJCoinJxtQ0It.transferOwnership.call(addressI7LZULU, {from: accounts[1]});

		assert.equal(boolUjhrBVb, true)
		assert.equal(boolqNSEid, true)
		await expect(DJCoinJxtQ0It.transferFrom.call(addressNIc64l4, addressGX0d28A, uintjTLh9ND, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoind6plrQu = await DJCoin.new({from: accounts[3]});
		const addressPQ6qxTe = accounts[5]
		const uint4ir7dv = BigInt("545")
		const addressv5VoqpK = accounts[2]
		const addressq0Hu2n7 = accounts[4]
		const uint256fi6RoIk = await DJCoind6plrQu.balanceOf.call(addressPQ6qxTe, {from: "0x0000000000000000000000000000000000000001"});
		const boolvHLinz = await DJCoind6plrQu.transfer.call(addressv5VoqpK, uint4ir7dv, {from: accounts[5]});
		const uint256yCJWdP9 = await DJCoind6plrQu.balanceOf.call(addressq0Hu2n7, {from: accounts[4]});

		assert.equal(uint256fi6RoIk, BigInt("0"))
		await expect(DJCoind6plrQu.transfer.call(addressv5VoqpK, uint4ir7dv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoingOumGJT = await DJCoin.new({from: accounts[2]});
		const addressmFzniW8 = accounts[0]
		const uint256tgUlXwb = await DJCoingOumGJT.totalSupply.call({from: accounts[4]});
		const addressoX8jDyO = await DJCoingOumGJT.validRecipient.call(addressmFzniW8, {from: accounts[2]});

		assert.equal(uint256tgUlXwb, BigInt("2100000000000"))
		await expect(DJCoingOumGJT.validRecipient.call(addressmFzniW8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinWgq4Ecx = await DJCoin.new({from: accounts[2]});
		const addresswVm35U5 = accounts[3]
		const addressCWaAdhr = accounts[4]
		const addressB8gbZ1H = accounts[4]
		const addressorIXrjw = accounts[5]
		const addresse2p1dFG = "0x0000000000000000000000000000000000000001"
		const uintunivsdc = BigInt("419")
		const addressKRWL1he = accounts[4]
		const addresstySdTw = "0x0000000000000000000000000000000000000001"
		const uintkhtjm18 = BigInt("90")
		const uint256vs26lS = await DJCoinWgq4Ecx.allowance.call(addressCWaAdhr, addresswVm35U5, {from: accounts[3]});
		const uint256OshHUqU = await DJCoinWgq4Ecx.balanceOf.call(addressB8gbZ1H, {from: accounts[3]});
		const uint256zsEJmeP = await DJCoinWgq4Ecx.allowance.call(addresse2p1dFG, addressorIXrjw, {from: accounts[3]});
		const boolDMd1K6c = await DJCoinWgq4Ecx.decreaseAllowance.call(addressKRWL1he, uintunivsdc, {from: accounts[2]});
		const uint256FZ7SGz3 = await DJCoinWgq4Ecx.balanceOf.call(addresstySdTw, {from: accounts[1]});
		const booltLostyL = await DJCoinWgq4Ecx.changetokensPerBlock.call(uintkhtjm18, {from: accounts[3]});

		assert.equal(boolDMd1K6c, true)
		assert.equal(booltLostyL, true)
		assert.equal(uint256FZ7SGz3, BigInt("0"))
		assert.equal(uint256OshHUqU, BigInt("0"))
		assert.equal(uint256vs26lS, BigInt("0"))
		assert.equal(uint256zsEJmeP, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinmR3YL1 = await DJCoin.new({from: accounts[2]});
		const uintG8KkYiK = BigInt("1100")
		const addressnfu4O3 = accounts[1]
		const address5sqUht = accounts[2]
		const addressuTNUuub = accounts[0]
		const uintY8PhIFI = BigInt("1327")
		const addressLn2hnAb = accounts[4]
		const uint256sRGabzJ = await DJCoinmR3YL1.totalSupply.call({from: accounts[0]});
		const boolaoUvIzz = await DJCoinmR3YL1.decreaseAllowance.call(addressnfu4O3, uintG8KkYiK, {from: accounts[3]});
		const uint256LqggfG = await DJCoinmR3YL1.allowance.call(addressuTNUuub, address5sqUht, {from: "0x0000000000000000000000000000000000000001"});
		const boolpTTYJGf = await DJCoinmR3YL1.increaseAllowance.call(addressLn2hnAb, uintY8PhIFI, {from: accounts[1]});

		assert.equal(boolaoUvIzz, true)
		assert.equal(boolpTTYJGf, true)
		assert.equal(uint256LqggfG, BigInt("0"))
		assert.equal(uint256sRGabzJ, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoingOumGJT = await DJCoin.new({from: accounts[2]});
		const addressbDKkAS8 = accounts[1]
		const uint256tgUlXwb = await DJCoingOumGJT.totalSupply.call({from: accounts[4]});
		await DJCoingOumGJT.renounceOwnership.call({from: accounts[2]});
		const addressoX8jDyO = await DJCoingOumGJT.validRecipient.call(addressbDKkAS8, {from: accounts[2]});

		assert.equal(uint256tgUlXwb, BigInt("2100000000000"))
		await expect(DJCoingOumGJT.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoingOumGJT = await DJCoin.new({from: accounts[2]});
		const uintUWOfIz = BigInt("1248")
		const addressho7GZBj = accounts[3]
		const uintHuwJhl = BigInt("1802")
		const addressMgiV4FC = accounts[4]
		const uinttIxoKD7 = BigInt("629")
		const addressbAMdt9P = accounts[2]
		const address88FtvI = accounts[1]
		const boolsTgJCh = await DJCoingOumGJT.decreaseAllowance.call(addressho7GZBj, uintUWOfIz, {from: accounts[0]});
		const uint256tgUlXwb = await DJCoingOumGJT.totalSupply.call({from: accounts[4]});
		const boolD0U6dr6 = await DJCoingOumGJT.approve.call(addressMgiV4FC, uintHuwJhl, {from: accounts[0]});
		const addressM2fMiuh = await DJCoingOumGJT.owner.call({from: accounts[2]});
		const boolXMhk8C8 = await DJCoingOumGJT.transfer.call(addressbAMdt9P, uinttIxoKD7, {from: accounts[1]});
		const addressoX8jDyO = await DJCoingOumGJT.validRecipient.call(address88FtvI, {from: accounts[2]});

		assert.equal(addressM2fMiuh, 0x73207cEA9a529c591d90D2F9F93a927A98758553)
		assert.equal(boolD0U6dr6, true)
		assert.equal(boolsTgJCh, true)
		assert.equal(uint256tgUlXwb, BigInt("2100000000000"))
		await expect(DJCoingOumGJT.transfer.call(addressbAMdt9P, uinttIxoKD7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoingOumGJT = await DJCoin.new({from: accounts[2]});
		const addressJO5l6zv = accounts[1]
		const uintpzuZ5Wr = BigInt("305")
		const uintasutHdz = BigInt("225")
		const addresslptInhZ = accounts[2]
		const addresseOL9tYl = accounts[1]
		const address4xtneR = "0x0000000000000000000000000000000000000001"
		const addressu4kQ8lv = await DJCoingOumGJT.transferOwnership.call(addressJO5l6zv, {from: accounts[2]});
		const uint256tgUlXwb = await DJCoingOumGJT.totalSupply.call({from: accounts[4]});
		const boolqDfROP = await DJCoingOumGJT.changetokensPerBlock.call(uintpzuZ5Wr, {from: accounts[0]});
		const boolQAcSqk = await DJCoingOumGJT.transfer.call(addresslptInhZ, uintasutHdz, {from: accounts[1]});
		const addressoX8jDyO = await DJCoingOumGJT.validRecipient.call(addresseOL9tYl, {from: accounts[2]});
		const uint256s0zxMjK = await DJCoingOumGJT.balanceOf.call(address4xtneR, {from: accounts[0]});
		const uint256FFbKtds = await DJCoingOumGJT.totalSupply.call({from: accounts[1]});

		assert.equal(boolqDfROP, true)
		assert.equal(uint256tgUlXwb, BigInt("2100000000000"))
		await expect(DJCoingOumGJT.transfer.call(addresslptInhZ, uintasutHdz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQySkWg8 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUlUetA5 = accounts[3]
		const uintMEDyh3h = BigInt("1617")
		const addresscUkuOV5 = accounts[3]
		const addressJeVLgZW = accounts[2]
		const addresswvdJTQS = accounts[0]
		const addressdLWMrAL = await DJCoinQySkWg8.transferOwnership.call(addressUlUetA5, {from: "0x0000000000000000000000000000000000000001"});
		const booldjFo84M = await DJCoinQySkWg8.transferFrom.call(addressJeVLgZW, addresscUkuOV5, uintMEDyh3h, {from: accounts[3]});
		const addresslOuIkxv = await DJCoinQySkWg8.transferOwnership.call(addresswvdJTQS, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoingOumGJT = await DJCoin.new({from: accounts[2]});
		const uinttebhCG = BigInt("774")
		const addressNH4NxdJ = "0x0000000000000000000000000000000000000001"
		const addressNMizN46 = accounts[4]
		const addressmcDAbs9 = "0x0000000000000000000000000000000000000001"
		const uintgGWYD6y = BigInt("0")
		const addresssZt7Lq = accounts[4]
		const uintJo3eLYl = BigInt("330")
		const addressSzfiNdU = accounts[0]
		const addressZ5LVMuX = accounts[3]
		const addresspiYt5IX = accounts[3]
		const addressqDSoWf6 = accounts[4]
		const uintLac9sSg = BigInt("1533")
		const addresshazINCF = accounts[1]
		const addressPYNymEq = accounts[4]
		const boolvypXEUQ = await DJCoingOumGJT.decreaseAllowance.call(addressNH4NxdJ, uinttebhCG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tgUlXwb = await DJCoingOumGJT.totalSupply.call({from: accounts[4]});
		const uint256X3IMq6N = await DJCoingOumGJT.allowance.call(addressmcDAbs9, addressNMizN46, {from: accounts[4]});
		const boolYz7ktKQ = await DJCoingOumGJT.transfer.call(addresssZt7Lq, uintgGWYD6y, {from: accounts[3]});
		const boolgIu2wOd = await DJCoingOumGJT.approve.call(addressSzfiNdU, uintJo3eLYl, {from: accounts[0]});
		const addressWlBDaw1 = await DJCoingOumGJT.validRecipient.call(addressZ5LVMuX, {from: accounts[5]});
		const uint256RlTrH6 = await DJCoingOumGJT.allowance.call(addressqDSoWf6, addresspiYt5IX, {from: accounts[0]});
		const uint256BY4K1lh = await DJCoingOumGJT.totalSupply.call({from: accounts[1]});
		const boolFCy3Gmr = await DJCoingOumGJT.transferFrom.call(addressPYNymEq, addresshazINCF, uintLac9sSg, {from: accounts[5]});

		assert.equal(boolYz7ktKQ, true)
		assert.equal(boolgIu2wOd, true)
		assert.equal(boolvypXEUQ, true)
		assert.equal(uint256X3IMq6N, BigInt("0"))
		assert.equal(uint256tgUlXwb, BigInt("2100000000000"))
		await expect(DJCoingOumGJT.validRecipient.call(addressZ5LVMuX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoingOumGJT = await DJCoin.new({from: accounts[2]});
		const uintEP3Hkgi = BigInt("768")
		const addressKrZV4LX = "0x0000000000000000000000000000000000000001"
		const uintWkE2Jsj = BigInt("1577")
		const uintvgp7ptJ = BigInt("1385")
		const uintDDiJq3I = BigInt("15")
		const addressne3Sig3 = accounts[4]
		const address5o3UwV = "0x0000000000000000000000000000000000000001"
		const uintSHztyyc = BigInt("1533")
		const addressUfiOlsF = accounts[1]
		const addresslFTKgre = accounts[4]
		const addressR2OPpPm = accounts[1]
		const addressAFzakR = accounts[3]
		const boolvypXEUQ = await DJCoingOumGJT.decreaseAllowance.call(addressKrZV4LX, uintEP3Hkgi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ztfznxc = await DJCoingOumGJT.burn.call(uintvgp7ptJ, uintWkE2Jsj, {from: accounts[2]});
		const boolYz7ktKQ = await DJCoingOumGJT.transfer.call(addressne3Sig3, uintDDiJq3I, {from: accounts[3]});
		const addressfUVQ9kk = await DJCoingOumGJT.transferOwnership.call(address5o3UwV, {from: accounts[1]});
		const uint256BY4K1lh = await DJCoingOumGJT.totalSupply.call({from: accounts[1]});
		const boolFCy3Gmr = await DJCoingOumGJT.transferFrom.call(addresslFTKgre, addressUfiOlsF, uintSHztyyc, {from: accounts[5]});
		const uint256AO64kIL = await DJCoingOumGJT.allowance.call(addressAFzakR, addressR2OPpPm, {from: accounts[2]});

		assert.equal(boolvypXEUQ, true)
		assert.equal(uint256ztfznxc, BigInt("1768830000000"))
		await expect(DJCoingOumGJT.transfer.call(addressne3Sig3, uintDDiJq3I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})