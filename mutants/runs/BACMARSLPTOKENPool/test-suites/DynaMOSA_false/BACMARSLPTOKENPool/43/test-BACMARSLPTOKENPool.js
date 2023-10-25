const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressjfTRWmo = accounts[2]
		const addressvXTuvEF = accounts[3]
		const addresso2lr1AY = accounts[0]
		const BACMARSLPTOKENPoolMz3yTfA = await BACMARSLPTOKENPool.new(addressjfTRWmo, addressvXTuvEF, addresso2lr1AY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Gg2wtYf = await BACMARSLPTOKENPoolMz3yTfA.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolMz3yTfA.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringadGGVpH = "WifVMAdGAGgk3q4Yocn7VdhoUOjcow8TO2E"
		const stringnKSz8K = "NObPBDrJ27jVeopDDXt7QIqGDIFYDMRVfd6WvQL94utpWvfg"
		const uintid1Hlpz = BigInt("175")
		const BACMARSLPTOKENPooltJGRNbx = await BACMARSLPTOKENPool.new(stringadGGVpH, stringnKSz8K, uintid1Hlpz, {from: accounts[0]});
		const uintpOeF1g = BigInt("1514")
		const uintaXdhe1r = BigInt("1265")
		const uint256y6KNvA = await BACMARSLPTOKENPooltJGRNbx.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bxAxdo = await BACMARSLPTOKENPooltJGRNbx.withdraw.call(uintpOeF1g, {from: accounts[3]});
		const uint256mmG7Upn = await BACMARSLPTOKENPooltJGRNbx.withdraw.call(uintaXdhe1r, {from: accounts[0]});
		const stringoYNdb5 = await BACMARSLPTOKENPooltJGRNbx.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressI906sI6 = accounts[2]
		const addressGUVJQEW = accounts[2]
		const addressW4FBNJj = accounts[2]
		const BACMARSLPTOKENPoolCXXWlD = await BACMARSLPTOKENPool.new(addressI906sI6, addressGUVJQEW, addressW4FBNJj, {from: accounts[2]});
		const addressAsuz0VI = "0x0000000000000000000000000000000000000001"
		const uint256wUBFkd = await BACMARSLPTOKENPoolCXXWlD.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256Uyc6Vko = await BACMARSLPTOKENPoolCXXWlD.balanceOf.call(addressAsuz0VI, {from: accounts[4]});
		await BACMARSLPTOKENPoolCXXWlD.nonReentrant.call({from: accounts[4]});

		assert.equal(uint256Uyc6Vko, BigInt("0"))
		assert.equal(uint256wUBFkd, BigInt("0"))
		await expect(BACMARSLPTOKENPoolCXXWlD.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string41ZPy0 = "HIoffRXgId6kP3IfoEm2IrMUOKvgRuVWLwzGMBmOtbWd2VdRCxHODzehFWFIoUAIXJwsFNj8L4TXi1cLlTl6f"
		const stringvMA2fXa = "k8fa7cBDwi0"
		const uintuEu6Rj = BigInt("34")
		const BACMARSLPTOKENPoolshJQ9Jr = await BACMARSLPTOKENPool.new(string41ZPy0, stringvMA2fXa, uintuEu6Rj, {from: accounts[3]});
		const addressqpiIMRV = accounts[0]
		const byteExPSbeC = "0x0a1c00120c111c1a031a071100031a1617201b201f1c0f1a0b161d1b161a0607"
		const byteHhfo3lN = "0x1f19041011020e1e03021f1d0c100312051103161b0e1605080902101d100811"
		const uintBFFVJM = BigInt("22")
		const uintArZXyGi = BigInt("1555")
		const uint4HcUgc = BigInt("1683")
		const uinttltwfUW = BigInt("3")
		const uintUvrcovG = BigInt("893")
		const uint89hI4BP = await BACMARSLPTOKENPoolshJQ9Jr.decimals.call({from: accounts[1]});
		const uint256u1g1cy = await BACMARSLPTOKENPoolshJQ9Jr.balanceOf.call(addressqpiIMRV, {from: accounts[2]});
		const uint256KqFpRXF = await BACMARSLPTOKENPoolshJQ9Jr.stakeWithPermit.call(uint4HcUgc, uintArZXyGi, uintBFFVJM, byteHhfo3lN, byteExPSbeC, {from: accounts[4]});
		const uint256sgcK120 = await BACMARSLPTOKENPoolshJQ9Jr.stake.call(uinttltwfUW, {from: accounts[0]});
		const uint256DjPubMj = await BACMARSLPTOKENPoolshJQ9Jr.stake.call(uintUvrcovG, {from: accounts[3]});
		await BACMARSLPTOKENPoolshJQ9Jr.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeXr45i = "vfyEUl3zAvJo79RuhEvQvrHfvmWGTlhIOTq2OWqgNGICDgfpN9GhzBBsCzpj1WXjyuNeaRX98SUxwJ2OwTwqMhygAvXpz3cc"
		const stringNhBgbra = "Moi1cBO8MmkrJusC"
		const uintHdkBSCy = BigInt("145")
		const BACMARSLPTOKENPoolZDxFHv5 = await BACMARSLPTOKENPool.new(stringeXr45i, stringNhBgbra, uintHdkBSCy, {from: accounts[5]});
		const uintzUsR4nJ = BigInt("253")
		const bytehsNAROL = "0x161b1b0d021507141404161c0b1110200a140f00141c1906151b200708090c0b"
		const byte8DfBvV = "0x190806101f19140220180e1904011f07081c06060c191713041d090c181e1403"
		const uintWblEKZ8 = BigInt("147")
		const uintdTIjskr = BigInt("433")
		const uintsRcPSJh = BigInt("1623")
		await BACMARSLPTOKENPoolZDxFHv5.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256M7kYMoS = await BACMARSLPTOKENPoolZDxFHv5.notifyRewardAmount.call(uintzUsR4nJ, {from: accounts[5]});
		await BACMARSLPTOKENPoolZDxFHv5.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256bBrOxr5 = await BACMARSLPTOKENPoolZDxFHv5.totalSupply.call({from: accounts[1]});
		const uint256gPsMKai = await BACMARSLPTOKENPoolZDxFHv5.stakeWithPermit.call(uintsRcPSJh, uintdTIjskr, uintWblEKZ8, byte8DfBvV, bytehsNAROL, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressMB0Abt7 = accounts[3]
		const addressGWakHlE = accounts[0]
		const addressOPLPm02 = accounts[0]
		const BACMARSLPTOKENPoolUUq1y3E = await BACMARSLPTOKENPool.new(addressMB0Abt7, addressGWakHlE, addressOPLPm02, {from: accounts[1]});
		const uintz2obus = BigInt("949")
		const byteog8A4wd = "0x1500170c1b0b121a0e0d1e101c0e051c0b1e171220041f20111c1f1b05080916"
		const bytehKVedFw = "0x171913080f16040d050e011d0b1a0a0d151d0a1712120101051e141d11151e0d"
		const uintfE1vEij = BigInt("15")
		const uintu4dsgkD = BigInt("897")
		const uintGPYQxtm = BigInt("1293")
		const uint256gmA3dl = await BACMARSLPTOKENPoolUUq1y3E.stake.call(uintz2obus, {from: accounts[2]});
		const uint256cO7zQva = await BACMARSLPTOKENPoolUUq1y3E.rewardPerToken.call({from: accounts[3]});
		const stringDiBU3n = await BACMARSLPTOKENPoolUUq1y3E.symbol.call({from: accounts[1]});
		const uint8NIW8Ujf = await BACMARSLPTOKENPoolUUq1y3E.decimals.call({from: accounts[2]});
		const uint256NULP8hj = await BACMARSLPTOKENPoolUUq1y3E.stakeWithPermit.call(uintGPYQxtm, uintu4dsgkD, uintfE1vEij, bytehKVedFw, byteog8A4wd, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolUUq1y3E.stake.call(uintz2obus, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringV0GsgIo = "pGgRQGsfrE7p91o9gti"
		const stringPX39tWC = "n3YZV65iZxRS3fuqcHG1lLDKBBL2rh83S6bvEkl14X4ZMZNUSGYu8R0OMvStvyRhHHzpVG"
		const uint0BrtZz = BigInt("75")
		const BACMARSLPTOKENPooljPdKiS6 = await BACMARSLPTOKENPool.new(stringV0GsgIo, stringPX39tWC, uint0BrtZz, {from: accounts[1]});
		const addresshDkoLP3 = accounts[1]
		const uint256lMwmXRi = await BACMARSLPTOKENPooljPdKiS6.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256KlWMm7v = await BACMARSLPTOKENPooljPdKiS6.earned.call(addresshDkoLP3, {from: accounts[5]});
		await BACMARSLPTOKENPooljPdKiS6.nonReentrant.call({from: accounts[5]});
		const stringggRLqCg = await BACMARSLPTOKENPooljPdKiS6.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBsz6Idk = "TXHFCrP8vfWtpFaOT2sNq04KMJ2neASjDnWQLe4Sq26gY6ZR7uSYuzmkKyxPAEYLNNpnwDOqdnau2aV"
		const stringgj8wl0m = "KrTYD4"
		const uintHs9aevX = BigInt("1")
		const BACMARSLPTOKENPoolLGsLjlN = await BACMARSLPTOKENPool.new(stringBsz6Idk, stringgj8wl0m, uintHs9aevX, {from: accounts[4]});
		const uintaMlqnE = BigInt("940")
		await BACMARSLPTOKENPoolLGsLjlN.exit.call({from: accounts[5]});
		const uint256J84bS6V = await BACMARSLPTOKENPoolLGsLjlN.withdraw.call(uintaMlqnE, {from: accounts[5]});
		const uint256mgLq9kB = await BACMARSLPTOKENPoolLGsLjlN.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolLGsLjlN.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjunnAF = accounts[0]
		const addressZxsS72C = accounts[0]
		const addressPTgGJn = accounts[3]
		const BACMARSLPTOKENPools90P4lt = await BACMARSLPTOKENPool.new(addressjunnAF, addressZxsS72C, addressPTgGJn, {from: accounts[2]});
		const addressyi3K4sr = accounts[2]
		const bytemX0EpPd = "0x0b0a110c0a06091b1113050e1010090a19200d020c051c04150b100a041a1014"
		const byteHZzlCJe = "0x0f0c1a02191f1b200e1a0605131a17181b160a151f021b110307150d1f080404"
		const uintb6Mb5de = BigInt("105")
		const uintlae1tZ4 = BigInt("1211")
		const uintS6Divg = BigInt("321")
		const addresss0rv9CV = accounts[1]
		const uint256LFi1fKA = await BACMARSLPTOKENPools90P4lt.balanceOf.call(addressyi3K4sr, {from: accounts[0]});
		const uint2566VXfOe = await BACMARSLPTOKENPools90P4lt.stakeWithPermit.call(uintS6Divg, uintlae1tZ4, uintb6Mb5de, byteHZzlCJe, bytemX0EpPd, {from: accounts[2]});
		const uint8gb3HGe5 = await BACMARSLPTOKENPools90P4lt.decimals.call({from: accounts[3]});
		const uint256Fp23X1m = await BACMARSLPTOKENPools90P4lt.earned.call(addresss0rv9CV, {from: accounts[3]});

		assert.equal(uint256LFi1fKA, BigInt("0"))
		await expect(BACMARSLPTOKENPools90P4lt.stakeWithPermit.call(uintS6Divg, uintlae1tZ4, uintb6Mb5de, byteHZzlCJe, bytemX0EpPd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrPDvNWG = "W63UXbwD2j5V6cbBFQtUetbcSYacMseAi7pTDAYzSTONMd4ksUNiCLBMbjQcrhWlzEOAXWg1Jw7TxuULTpxduNRpb2GE"
		const stringNsvATRL = "Bl"
		const uintBt88K6Z = BigInt("183")
		const BACMARSLPTOKENPoolCNkIvaP = await BACMARSLPTOKENPool.new(stringrPDvNWG, stringNsvATRL, uintBt88K6Z, {from: accounts[2]});
		const addresscohy9I3 = "0x0000000000000000000000000000000000000001"
		const uint256Gpp3rV7 = await BACMARSLPTOKENPoolCNkIvaP.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolCNkIvaP.exit.call({from: accounts[0]});
		const uint256uMzJz0 = await BACMARSLPTOKENPoolCNkIvaP.getRewardForDuration.call({from: accounts[2]});
		const uint256QbionEM = await BACMARSLPTOKENPoolCNkIvaP.balanceOf.call(addresscohy9I3, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZjEfBfY = accounts[2]
		const addressq7Twhwn = accounts[1]
		const addresstXWCpcs = accounts[4]
		const BACMARSLPTOKENPoolshH9whm = await BACMARSLPTOKENPool.new(addressZjEfBfY, addressq7Twhwn, addresstXWCpcs, {from: accounts[1]});
		const uintkQYdE10 = BigInt("374")
		const uintQmNQeqB = BigInt("212")
		const addressIyWWLTC = accounts[1]
		const uint256gccLn5h = await BACMARSLPTOKENPoolshH9whm.withdraw.call(uintkQYdE10, {from: accounts[2]});
		const string04VzZ9 = await BACMARSLPTOKENPoolshH9whm.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolshH9whm.nonReentrant.call({from: accounts[3]});
		const uint256gXT2biX = await BACMARSLPTOKENPoolshH9whm.stake.call(uintQmNQeqB, {from: accounts[2]});
		await BACMARSLPTOKENPoolshH9whm.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2567UnadD = await BACMARSLPTOKENPoolshH9whm.balanceOf.call(addressIyWWLTC, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolshH9whm.withdraw.call(uintkQYdE10, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdxjoc2O = accounts[3]
		const addressSmK8vq4 = accounts[5]
		const addressNiTM3Qc = accounts[3]
		const BACMARSLPTOKENPoolefSP1P = await BACMARSLPTOKENPool.new(addressdxjoc2O, addressSmK8vq4, addressNiTM3Qc, {from: accounts[1]});
		const addressiiokk6L = accounts[4]
		const uintrbhVawZ = BigInt("1287")
		const uint256zIygIfV = await BACMARSLPTOKENPoolefSP1P.balanceOf.call(addressiiokk6L, {from: accounts[2]});
		await BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]});
		const uint256unQ2Y4 = await BACMARSLPTOKENPoolefSP1P.getRewardForDuration.call({from: accounts[3]});
		const uint256GrI0ai = await BACMARSLPTOKENPoolefSP1P.stake.call(uintrbhVawZ, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]});
		const uint8g6Uk9xM = await BACMARSLPTOKENPoolefSP1P.decimals.call({from: accounts[4]});

		assert.equal(uint256zIygIfV, BigInt("0"))
		await expect(BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnmnkiQv = "emYjt9p5bjZ6pvP3xtoYbFKzT"
		const stringTI9l4Bb = "2Hx6qgUebFYHoEW3mi03TUKSx7VwO7hyU6hybkEOQ1zG7CGLoV8E28b4275qSHaCtxqDrUfNaag"
		const uintmDHQON = BigInt("95")
		const BACMARSLPTOKENPoolTCZUJz6 = await BACMARSLPTOKENPool.new(stringnmnkiQv, stringTI9l4Bb, uintmDHQON, {from: "0x0000000000000000000000000000000000000001"});
		const addressxDcmi5X = accounts[2]
		const addresscym5Xd = accounts[2]
		const uint256aGCS9kY = await BACMARSLPTOKENPoolTCZUJz6.earned.call(addressxDcmi5X, {from: accounts[2]});
		const addressiS58mDS = await BACMARSLPTOKENPoolTCZUJz6.updateReward.call(addresscym5Xd, {from: accounts[4]});
		await BACMARSLPTOKENPoolTCZUJz6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolTCZUJz6.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolTCZUJz6.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnDWmlKZ = accounts[5]
		const addressChVsxY9 = accounts[3]
		const addressUrJfKC = accounts[0]
		const BACMARSLPTOKENPoolYyB1yDX = await BACMARSLPTOKENPool.new(addressnDWmlKZ, addressChVsxY9, addressUrJfKC, {from: accounts[4]});
		const addressQyRtDTJ = accounts[1]
		const uint256umClqCp = await BACMARSLPTOKENPoolYyB1yDX.totalSupply.call({from: accounts[2]});
		const uint8EK1myx4 = await BACMARSLPTOKENPoolYyB1yDX.decimals.call({from: accounts[3]});
		const uint256e1ZFcO0 = await BACMARSLPTOKENPoolYyB1yDX.earned.call(addressQyRtDTJ, {from: accounts[1]});
		const stringwR01M04 = await BACMARSLPTOKENPoolYyB1yDX.name.call({from: accounts[2]});
		await BACMARSLPTOKENPoolYyB1yDX.nonReentrant.call({from: accounts[2]});

		assert.equal(uint256umClqCp, BigInt("0"))
		await expect(BACMARSLPTOKENPoolYyB1yDX.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlPQ69f1 = "jCv7Cl7FjzGtAjviosBgxxIsTILD9m4m6wrnvqB5F3o3gyBmD9OeobiYNlj8is7TF4Bj7mgdBrWqh8SjeVEbyDu5snuLnn"
		const stringHKJK8hy = "VkJQj2EV1ZvP9VywHYSzQFvWjm8HzmVPKL2LEFdjjz7eTpuKx4RRTCg6JjcLtJ8TYPoDk7CW"
		const uinti5xClvW = BigInt("161")
		const BACMARSLPTOKENPoolzyrsACa = await BACMARSLPTOKENPool.new(stringlPQ69f1, stringHKJK8hy, uinti5xClvW, {from: accounts[2]});
		const stringDELn8Yg = await BACMARSLPTOKENPoolzyrsACa.symbol.call({from: accounts[4]});
		const uint8Oh3wyUf = await BACMARSLPTOKENPoolzyrsACa.decimals.call({from: accounts[4]});
		const uint256WXjoOA4 = await BACMARSLPTOKENPoolzyrsACa.totalSupply.call({from: accounts[1]});
		const uint8uDrtXlZ = await BACMARSLPTOKENPoolzyrsACa.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssUKrzlt = accounts[3]
		const addressbMu1HjQ = accounts[5]
		const addressGSxSLzQ = accounts[3]
		const BACMARSLPTOKENPoolefSP1P = await BACMARSLPTOKENPool.new(addresssUKrzlt, addressbMu1HjQ, addressGSxSLzQ, {from: accounts[1]});
		const addressPJ6iCIa = accounts[3]
		const uintmGahMO = BigInt("817")
		const uintwMDrQlv = BigInt("1287")
		const uint256zIygIfV = await BACMARSLPTOKENPoolefSP1P.balanceOf.call(addressPJ6iCIa, {from: accounts[2]});
		await BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]});
		const uint256unQ2Y4 = await BACMARSLPTOKENPoolefSP1P.getRewardForDuration.call({from: accounts[3]});
		const uint256aEyxg3c = await BACMARSLPTOKENPoolefSP1P.notifyRewardAmount.call(uintmGahMO, {from: accounts[0]});
		const uint256GrI0ai = await BACMARSLPTOKENPoolefSP1P.stake.call(uintwMDrQlv, {from: "0x0000000000000000000000000000000000000001"});
		const uint8g6Uk9xM = await BACMARSLPTOKENPoolefSP1P.decimals.call({from: accounts[4]});

		assert.equal(uint256zIygIfV, BigInt("0"))
		await expect(BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringff5D0U = "XN7k86nIyufpN"
		const stringNTfSQms = "qHdED1KT9arOhjgpJeBwUdj83W63qOT39hq0aNndQwnrLOxJs171Xi6uPk9nucmzrtItUCOBIgOd0iPHhipre2iC7bzqA"
		const uints1H3CZv = BigInt("9")
		const BACMARSLPTOKENPoolEvYFJFB = await BACMARSLPTOKENPool.new(stringff5D0U, stringNTfSQms, uints1H3CZv, {from: accounts[5]});
		const uintFPHqFdN = BigInt("1541")
		const uintvgPEy9 = BigInt("946")
		const uint256Lrrj78L = await BACMARSLPTOKENPoolEvYFJFB.notifyRewardAmount.call(uintFPHqFdN, {from: accounts[3]});
		const uint256RysRQRo = await BACMARSLPTOKENPoolEvYFJFB.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolEvYFJFB.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPoolEvYFJFB.exit.call({from: accounts[0]});
		const uint8wAB9fl1 = await BACMARSLPTOKENPoolEvYFJFB.decimals.call({from: accounts[3]});
		const uint256JyNuhMH = await BACMARSLPTOKENPoolEvYFJFB.notifyRewardAmount.call(uintvgPEy9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoTW21a3 = "3FyrdYY2wOJplKuSE7ZobxuCsiji"
		const stringg1pU3ar = "NBMqIzPdMBdvvAS5YqTPFEUrmWubX"
		const uintp7KojMF = BigInt("121")
		const BACMARSLPTOKENPoolQ28Jeaf = await BACMARSLPTOKENPool.new(stringoTW21a3, stringg1pU3ar, uintp7KojMF, {from: accounts[5]});
		const addressAkbZDLI = accounts[4]
		const addressZTfaLo0 = accounts[0]
		const uintiO3EBU = BigInt("201")
		const uint256aMImM9N = await BACMARSLPTOKENPoolQ28Jeaf.balanceOf.call(addressAkbZDLI, {from: accounts[4]});
		const uint256gtACORL = await BACMARSLPTOKENPoolQ28Jeaf.earned.call(addressZTfaLo0, {from: accounts[2]});
		const uint256IuCJJUZ = await BACMARSLPTOKENPoolQ28Jeaf.withdraw.call(uintiO3EBU, {from: accounts[0]});
		const uint256qXyQybc = await BACMARSLPTOKENPoolQ28Jeaf.getRewardForDuration.call({from: accounts[4]});
		const uint256l3lKF2t = await BACMARSLPTOKENPoolQ28Jeaf.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZateXbA = "I69wtJ3ZDE7k4W"
		const stringE90gwGH = "iXAxbhPpUGA2p5Jd4U"
		const uintsQQvFIU = BigInt("44")
		const BACMARSLPTOKENPoolBmFhKht = await BACMARSLPTOKENPool.new(stringZateXbA, stringE90gwGH, uintsQQvFIU, {from: accounts[4]});
		const addressQIB9TgF = accounts[2]
		const addressYgMU6m7 = accounts[2]
		const uint256MyHcfgF = await BACMARSLPTOKENPoolBmFhKht.rewardPerToken.call({from: accounts[4]});
		const uint256U7y95I = await BACMARSLPTOKENPoolBmFhKht.earned.call(addressQIB9TgF, {from: accounts[1]});
		const stringet45WbJ = await BACMARSLPTOKENPoolBmFhKht.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolBmFhKht.nonReentrant.call({from: accounts[3]});
		const uint2569JW0yt = await BACMARSLPTOKENPoolBmFhKht.earned.call(addressYgMU6m7, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkiawKUi = "fOew5Dv2yyToqCkbUzuTvPyO60H0QiB3RRrpSJfjROAaWF8Iiw7N"
		const stringgvfaspA = "I1vuiaWD7JaCU9eMuR6jczO3hLcrGJ460IKwxGgFXmn"
		const uintV2Qvoh3 = BigInt("197")
		const BACMARSLPTOKENPoollAZX49K = await BACMARSLPTOKENPool.new(stringkiawKUi, stringgvfaspA, uintV2Qvoh3, {from: "0x0000000000000000000000000000000000000001"});
		const uintU0qNX3i = BigInt("1009")
		const uintSMlyT3 = BigInt("1194")
		const uinttfdYgch = BigInt("1536")
		const uint256PoH7jtj = await BACMARSLPTOKENPoollAZX49K.withdraw.call(uintU0qNX3i, {from: accounts[4]});
		const stringNqq4QGY = await BACMARSLPTOKENPoollAZX49K.symbol.call({from: accounts[1]});
		const uint256lD4N5Bf = await BACMARSLPTOKENPoollAZX49K.rewardPerToken.call({from: accounts[2]});
		const uint256rqnrzDP = await BACMARSLPTOKENPoollAZX49K.stake.call(uintSMlyT3, {from: accounts[0]});
		const uint256sw3xYYD = await BACMARSLPTOKENPoollAZX49K.notifyRewardAmount.call(uinttfdYgch, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxmH4cIh = accounts[3]
		const addressAoInOk7 = accounts[5]
		const addressAK9XCMX = accounts[3]
		const BACMARSLPTOKENPoolefSP1P = await BACMARSLPTOKENPool.new(addressxmH4cIh, addressAoInOk7, addressAK9XCMX, {from: accounts[1]});
		const addressOedmeYe = accounts[3]
		const uintfdmuUNA = BigInt("1287")
		const uint256YdAojGu = await BACMARSLPTOKENPoolefSP1P.rewardPerToken.call({from: accounts[3]});
		const uint256zIygIfV = await BACMARSLPTOKENPoolefSP1P.balanceOf.call(addressOedmeYe, {from: accounts[2]});
		await BACMARSLPTOKENPoolefSP1P.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]});
		const uint256unQ2Y4 = await BACMARSLPTOKENPoolefSP1P.getRewardForDuration.call({from: accounts[3]});
		const uint256GrI0ai = await BACMARSLPTOKENPoolefSP1P.stake.call(uintfdmuUNA, {from: "0x0000000000000000000000000000000000000001"});
		const uint8g6Uk9xM = await BACMARSLPTOKENPoolefSP1P.decimals.call({from: accounts[4]});

		assert.equal(uint256YdAojGu, BigInt("0"))
		assert.equal(uint256zIygIfV, BigInt("0"))
		await expect(BACMARSLPTOKENPoolefSP1P.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpLbJ2l = "ogu5YjLSDwy3E9YkqIjyCfg6w8FlYONl6hacoEWXtmPXzA6XvfHRaovNHAbfjwIi8zb8YUa3ZZazVdc"
		const stringc1sCGpe = "caOuctPgtYCPHue8u31I3629NTJlpbv6NPjLikqGBbsJAaX0yjDxL62NU1uplRsr5t6rJLiZqOD"
		const uintApHCgee = BigInt("234")
		const BACMARSLPTOKENPoolRzHj94f = await BACMARSLPTOKENPool.new(stringpLbJ2l, stringc1sCGpe, uintApHCgee, {from: accounts[0]});
		const uintT8zDoP = BigInt("1257")
		const uintXP6BheV = BigInt("5")
		const uint256Ptmbdjv = await BACMARSLPTOKENPoolRzHj94f.withdraw.call(uintT8zDoP, {from: accounts[2]});
		const stringQcykH9y = await BACMARSLPTOKENPoolRzHj94f.symbol.call({from: accounts[0]});
		const stringKiSjRgd = await BACMARSLPTOKENPoolRzHj94f.name.call({from: accounts[5]});
		const uint256O0Af9w7 = await BACMARSLPTOKENPoolRzHj94f.stake.call(uintXP6BheV, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuaz6S7a = "YJqOQ868OnSUAApwrCDWTsYRAQllKp9l0fwkIFXgxw8AFhEVJXVNTbsRjv31vBURRpKSA2T3Ip7Re6arjibSJTGzxKyQCL"
		const stringCxc6LU4 = "PzVgGa7qTvtKEEYVzv3wzlwGLU"
		const uintnRY9c0 = BigInt("123")
		const BACMARSLPTOKENPoolZSRIyur = await BACMARSLPTOKENPool.new(stringuaz6S7a, stringCxc6LU4, uintnRY9c0, {from: accounts[5]});
		const uintIwbRbFv = BigInt("21")
		const addressbJKCxP = accounts[2]
		const uint256FFqA9U8 = await BACMARSLPTOKENPoolZSRIyur.getRewardForDuration.call({from: accounts[0]});
		const stringX6tTn4F = await BACMARSLPTOKENPoolZSRIyur.symbol.call({from: accounts[4]});
		const uint256wOIk4YB = await BACMARSLPTOKENPoolZSRIyur.notifyRewardAmount.call(uintIwbRbFv, {from: accounts[4]});
		await BACMARSLPTOKENPoolZSRIyur.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256Os9ggT5 = await BACMARSLPTOKENPoolZSRIyur.getRewardForDuration.call({from: accounts[4]});
		const addressBZqn43O = await BACMARSLPTOKENPoolZSRIyur.updateReward.call(addressbJKCxP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings3UjrGN = "VnxDeqhOioht"
		const stringZ7C67B = "eGenl1eQR1IcwSt16NKJWN35qFS3"
		const uintBHifqou = BigInt("149")
		const BACMARSLPTOKENPoolYensXJj = await BACMARSLPTOKENPool.new(strings3UjrGN, stringZ7C67B, uintBHifqou, {from: accounts[4]});
		const addressB3amBuP = accounts[4]
		const uintq5fU4qf = BigInt("219")
		const uint256jb83DdK = await BACMARSLPTOKENPoolYensXJj.earned.call(addressB3amBuP, {from: accounts[3]});
		const uint256tcMHnSJ = await BACMARSLPTOKENPoolYensXJj.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolYensXJj.getReward.call({from: accounts[3]});
		const uint256gmq4k9t = await BACMARSLPTOKENPoolYensXJj.stake.call(uintq5fU4qf, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmwvwYbb = "7VYeK7oO9N2Ob8I1JpKmdPGasf85qNSAbJzPRW81LC5fcyLJXskgiqQuB2EQnzIyuBhYXC4l"
		const stringns8F4e3 = "gXjfBMZQtvwUVV6wvtJDf62FInQmh5xPB9di2I"
		const uintfnhBRt4 = BigInt("30")
		const BACMARSLPTOKENPoolRfm4uE = await BACMARSLPTOKENPool.new(stringmwvwYbb, stringns8F4e3, uintfnhBRt4, {from: accounts[5]});
		const addressjeiVXGR = accounts[4]
		await BACMARSLPTOKENPoolRfm4uE.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256m1wcsqv = await BACMARSLPTOKENPoolRfm4uE.balanceOf.call(addressjeiVXGR, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZvInIj6 = "XAKRnaV3HdSZ8MwL1q2U5Fie"
		const stringPtTo79K = "BWJTbNsEYKq5mFLTm2WnwQWwqVwQNDLMzIUBmoPNMaTJvFFVpJh"
		const uintJEZBD5r = BigInt("160")
		const BACMARSLPTOKENPooliCAOJe9 = await BACMARSLPTOKENPool.new(stringZvInIj6, stringPtTo79K, uintJEZBD5r, {from: accounts[4]});
		await BACMARSLPTOKENPooliCAOJe9.nonReentrant.call({from: accounts[2]});
		const uint256Fs0Z8Sj = await BACMARSLPTOKENPooliCAOJe9.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPooliCAOJe9.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXVcF8Bu = "D9tmKu0mirCdwlozomCXGHJA7BGwgezfJ8eSnJbUXaESgC9mqPn8tU7UGGG"
		const stringIYOXHf1 = "X"
		const uintwbLEdPf = BigInt("240")
		const BACMARSLPTOKENPooljhVNCb8 = await BACMARSLPTOKENPool.new(stringXVcF8Bu, stringIYOXHf1, uintwbLEdPf, {from: accounts[4]});
		const addressnPxVDy8 = accounts[3]
		const addressqOmBB2u = accounts[4]
		const uint256LqccwxQ = await BACMARSLPTOKENPooljhVNCb8.getRewardForDuration.call({from: accounts[1]});
		const uint256tyx16ER = await BACMARSLPTOKENPooljhVNCb8.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256yTAehZe = await BACMARSLPTOKENPooljhVNCb8.balanceOf.call(addressnPxVDy8, {from: accounts[4]});
		const uint256DLt7Sxp = await BACMARSLPTOKENPooljhVNCb8.earned.call(addressqOmBB2u, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbDR26g = "FYr8YBMwaWdekVnSmjAysmxfY9OFTwP9l2bFGPY42N4eNgCoeeUDwEUVaHn3IRFxT9lk2SbzLkYBdvSMXvu3"
		const stringdp5OwxN = "8xHAt4gYd8lgd7KHyGUhYcfRfwAHH1eRV"
		const uintzBI4gJy = BigInt("88")
		const BACMARSLPTOKENPooleUAJJLs = await BACMARSLPTOKENPool.new(stringbDR26g, stringdp5OwxN, uintzBI4gJy, {from: accounts[2]});
		const uintpn5lJxp = BigInt("1833")
		const addressgQQo8Md = accounts[3]
		const uint8nHJCyUN = await BACMARSLPTOKENPooleUAJJLs.decimals.call({from: accounts[4]});
		const uint256IPyv2Eb = await BACMARSLPTOKENPooleUAJJLs.notifyRewardAmount.call(uintpn5lJxp, {from: accounts[0]});
		const uint8MESoRk = await BACMARSLPTOKENPooleUAJJLs.decimals.call({from: accounts[3]});
		const uint2568kNP4N = await BACMARSLPTOKENPooleUAJJLs.balanceOf.call(addressgQQo8Md, {from: accounts[4]});
		const uint256nWV3ms = await BACMARSLPTOKENPooleUAJJLs.totalSupply.call({from: accounts[4]});
		const uint256F4ruez7 = await BACMARSLPTOKENPooleUAJJLs.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUPh9Ytb = "0ELSaxY5dQUYrP"
		const stringwS6yGbB = "naaHManarpG5dFByQycIYLomKJ5R6qRrLsYJyqGFdIiMg5W1qG7jxYyPPg15cwAHeYRz9Sh7NCY"
		const uintyGZuQfx = BigInt("109")
		const BACMARSLPTOKENPoolZ4dVvy7 = await BACMARSLPTOKENPool.new(stringUPh9Ytb, stringwS6yGbB, uintyGZuQfx, {from: accounts[2]});
		const uint256srRS7f = await BACMARSLPTOKENPoolZ4dVvy7.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZ4dVvy7.exit.call({from: accounts[0]});
		const uint256lDhBShF = await BACMARSLPTOKENPoolZ4dVvy7.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNOVcH3u = "2D3lZr68j8PvxydLG5T9eUkTX3W1CgaXEZJi7igtnVQRio27zZSSdmIPUQMHxp4ENYisdpO0ihQolQvHXfH26hOQbCo8hgmq"
		const stringsVkDoGx = "47LR0YX8AnX3jbQatH"
		const uintMD98TbF = BigInt("94")
		const BACMARSLPTOKENPoolw5HSX08 = await BACMARSLPTOKENPool.new(stringNOVcH3u, stringsVkDoGx, uintMD98TbF, {from: accounts[0]});
		const uintyflFptj = BigInt("288")
		const uintSaW6Zgv = BigInt("1991")
		await BACMARSLPTOKENPoolw5HSX08.getReward.call({from: accounts[0]});
		const uint256f2cTEqR = await BACMARSLPTOKENPoolw5HSX08.notifyRewardAmount.call(uintyflFptj, {from: accounts[2]});
		await BACMARSLPTOKENPoolw5HSX08.getReward.call({from: accounts[4]});
		const uint8pAV6Ajb = await BACMARSLPTOKENPoolw5HSX08.decimals.call({from: accounts[2]});
		const uint256wloQLxI = await BACMARSLPTOKENPoolw5HSX08.stake.call(uintSaW6Zgv, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVSouGyV = "Tv30BNJziKTXsMuaU78AyJZWYLKTQVoQI5ZwRj"
		const stringWppGfxm = "gGuPH1heWqXfbXaRzWUIGg2mGskbL51cksT44d3qfjO1MtPfHmRDNbpN7QfPhOq7vlnpUjeNSjTdN697x"
		const uintw4MvnP = BigInt("63")
		const BACMARSLPTOKENPoolpLinbuw = await BACMARSLPTOKENPool.new(stringVSouGyV, stringWppGfxm, uintw4MvnP, {from: accounts[1]});
		const uintjp1ucbl = BigInt("858")
		const addressVLkZFj = accounts[1]
		const uintcxV5ptL = BigInt("720")
		const uinthqpwZcM = BigInt("1458")
		const uint256Jt5cLdL = await BACMARSLPTOKENPoolpLinbuw.rewardPerToken.call({from: accounts[1]});
		const uint256xqKpZ6C = await BACMARSLPTOKENPoolpLinbuw.notifyRewardAmount.call(uintjp1ucbl, {from: accounts[2]});
		const uint256ye8qW0 = await BACMARSLPTOKENPoolpLinbuw.getRewardForDuration.call({from: accounts[1]});
		const addresshK7HJqP = await BACMARSLPTOKENPoolpLinbuw.updateReward.call(addressVLkZFj, {from: accounts[2]});
		const uint256Tg8Zrxu = await BACMARSLPTOKENPoolpLinbuw.withdraw.call(uintcxV5ptL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LgBNLFc = await BACMARSLPTOKENPoolpLinbuw.stake.call(uinthqpwZcM, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA1Tvsbl = "uolZHWyncMMQ5ukRxOajsHN52eTVSiepyKrHYiRQrVg1aGf28gT178gOYLUowOXNE"
		const stringPffh9Bt = "4aL5INzImz3qHdBENE9QSrFvzqN2HUY1gkcip4MEcChYCYME9Yfaek2Jm9dHyuwLXvYAOdUhdmPSD9MPFisiL482M7"
		const uintVYJG1Ax = BigInt("202")
		const BACMARSLPTOKENPooldQc12OS = await BACMARSLPTOKENPool.new(stringA1Tvsbl, stringPffh9Bt, uintVYJG1Ax, {from: accounts[2]});
		const addressyKMJCSK = accounts[3]
		const uint256PZQu0Kq = await BACMARSLPTOKENPooldQc12OS.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256n0nZFey = await BACMARSLPTOKENPooldQc12OS.rewardPerToken.call({from: accounts[5]});
		const uint256PBYIcGw = await BACMARSLPTOKENPooldQc12OS.earned.call(addressyKMJCSK, {from: accounts[5]});
		await BACMARSLPTOKENPooldQc12OS.onlyRewardsDistribution.call({from: accounts[5]});
		const uint8bITeFkU = await BACMARSLPTOKENPooldQc12OS.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressObL0B6s = accounts[3]
		const addressxgxz7KD = accounts[5]
		const addressE67jXvf = accounts[3]
		const BACMARSLPTOKENPoolefSP1P = await BACMARSLPTOKENPool.new(addressObL0B6s, addressxgxz7KD, addressE67jXvf, {from: accounts[1]});
		const uintqQaLNUl = BigInt("1429")
		const addresspCM0QfJ = accounts[3]
		const addressdND9mbc = accounts[2]
		const uintfck2w3Y = BigInt("1287")
		const uint256Jl2wwP0 = await BACMARSLPTOKENPoolefSP1P.notifyRewardAmount.call(uintqQaLNUl, {from: accounts[3]});
		const uint256zIygIfV = await BACMARSLPTOKENPoolefSP1P.balanceOf.call(addresspCM0QfJ, {from: accounts[2]});
		const uint256k3N11YC = await BACMARSLPTOKENPoolefSP1P.earned.call(addressdND9mbc, {from: accounts[2]});
		await BACMARSLPTOKENPoolefSP1P.getReward.call({from: accounts[4]});
		const uint256unQ2Y4 = await BACMARSLPTOKENPoolefSP1P.getRewardForDuration.call({from: accounts[3]});
		const uint256GrI0ai = await BACMARSLPTOKENPoolefSP1P.stake.call(uintfck2w3Y, {from: "0x0000000000000000000000000000000000000001"});
		const uint8g6Uk9xM = await BACMARSLPTOKENPoolefSP1P.decimals.call({from: accounts[4]});
		const uint8mv4iWz4 = await BACMARSLPTOKENPoolefSP1P.decimals.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolefSP1P.notifyRewardAmount.call(uintqQaLNUl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEoKGM2n = "TWKSSSHFblHwIHC4nhNui"
		const stringacIkEQy = "MWsf4sztRujTkFXfymwlzeqLuI4UY9mREQtqNpcF6WzDoBdHJJnpC3a"
		const uintpxo8ly3 = BigInt("136")
		const BACMARSLPTOKENPoolQfNlWHB = await BACMARSLPTOKENPool.new(stringEoKGM2n, stringacIkEQy, uintpxo8ly3, {from: accounts[1]});
		const addressPgazPs = accounts[4]
		const addressljrlwIv = accounts[1]
		const addressVwqTxGc = await BACMARSLPTOKENPoolQfNlWHB.updateReward.call(addressPgazPs, {from: accounts[3]});
		const uint256vAneqvr = await BACMARSLPTOKENPoolQfNlWHB.balanceOf.call(addressljrlwIv, {from: accounts[0]});
		const uint256ANvziIt = await BACMARSLPTOKENPoolQfNlWHB.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmmycH3 = "T2GgmB21tnyTePjUQ7vSA8h1tsdYcQiYoxjGOD3lJU60"
		const stringIgFstgi = "WnnP6JhSGReeKOfbsU6"
		const uintq4foZ1E = BigInt("23")
		const BACMARSLPTOKENPoolbANN3Ck = await BACMARSLPTOKENPool.new(stringmmycH3, stringIgFstgi, uintq4foZ1E, {from: accounts[5]});
		const uintwX5Jh1R = BigInt("115")
		const uint256gqekIWc = await BACMARSLPTOKENPoolbANN3Ck.withdraw.call(uintwX5Jh1R, {from: accounts[3]});
		const uint256HiTAjNN = await BACMARSLPTOKENPoolbANN3Ck.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolbANN3Ck.exit.call({from: accounts[2]});
		const stringycyAOr = await BACMARSLPTOKENPoolbANN3Ck.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolbANN3Ck.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string7cZzG5 = "8WTiKbV7bM7debEr7cvKJlDhoLhxhRoAsWdhH5aS"
		const stringN3KGsJi = "UVrnwfilmtTHgmjEGIm"
		const uintJXF2Q2L = BigInt("4")
		const BACMARSLPTOKENPoolPq7EEOc = await BACMARSLPTOKENPool.new(string7cZzG5, stringN3KGsJi, uintJXF2Q2L, {from: accounts[2]});
		const uint8s1na5YS = await BACMARSLPTOKENPoolPq7EEOc.decimals.call({from: accounts[0]});
		const stringbuXrAgk = await BACMARSLPTOKENPoolPq7EEOc.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256W7dUP0k = await BACMARSLPTOKENPoolPq7EEOc.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFoKXo8h = "rTtG2Q3G9ISkqtDYNNg5hbdMMpNbYCbftvHjSnuFJkPv4kcoX6lrw4zK6YJLs1ry1Z4fp1mbvkAKOfX22K"
		const stringcVkdg18 = "OXvJuD5WpfeN7B928h"
		const uintR4S5mOL = BigInt("144")
		const BACMARSLPTOKENPoolDz0J7qD = await BACMARSLPTOKENPool.new(stringFoKXo8h, stringcVkdg18, uintR4S5mOL, {from: accounts[0]});
		const uintfyVWcFP = BigInt("953")
		const addressi7wWC8 = accounts[0]
		const uint256cnTmxu = await BACMARSLPTOKENPoolDz0J7qD.stake.call(uintfyVWcFP, {from: accounts[1]});
		await BACMARSLPTOKENPoolDz0J7qD.nonReentrant.call({from: accounts[2]});
		const uint256HSNLEeP = await BACMARSLPTOKENPoolDz0J7qD.earned.call(addressi7wWC8, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiusgefO = "nYBJkJZX4Vq5J5PscfuFExlGgVpi0VweyPusIY7tCyXhMRdgMYOvYJFJshHehpeJ6jo2w3mLmffu"
		const stringpJnbR4T = "P9kHrK"
		const uintDZ1bdHS = BigInt("34")
		const BACMARSLPTOKENPoolJy4dAoY = await BACMARSLPTOKENPool.new(stringiusgefO, stringpJnbR4T, uintDZ1bdHS, {from: accounts[4]});
		const byteBWNwIwa = "0x191f0f0d100c0901111312121018030a0b041d0e190508081e190a0f06011b1a"
		const byteq660cB = "0x1a1605120508090e080e10120a061e121b200c0f0b1502020f050f071320191e"
		const uintAlEoVLw = BigInt("219")
		const uintZvijEI6 = BigInt("1034")
		const uinttPSgs8 = BigInt("784")
		const addressC6OAy1A = accounts[1]
		const uint256y2kEW2A = await BACMARSLPTOKENPoolJy4dAoY.stakeWithPermit.call(uinttPSgs8, uintZvijEI6, uintAlEoVLw, byteq660cB, byteBWNwIwa, {from: accounts[3]});
		await BACMARSLPTOKENPoolJy4dAoY.onlyRewardsDistribution.call({from: accounts[1]});
		const stringJJpjsa0 = await BACMARSLPTOKENPoolJy4dAoY.name.call({from: accounts[0]});
		const uint256k9ICNJC = await BACMARSLPTOKENPoolJy4dAoY.totalSupply.call({from: accounts[3]});
		const addressMowVqSP = await BACMARSLPTOKENPoolJy4dAoY.updateReward.call(addressC6OAy1A, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsSCR6ob = "8l1Nc8iW0XnTxHbX63ilhYwlVl"
		const stringzYi5g48 = "FYuonTmVtMShB"
		const uintsOI4avM = BigInt("213")
		const BACMARSLPTOKENPoolyrKxpLZ = await BACMARSLPTOKENPool.new(stringsSCR6ob, stringzYi5g48, uintsOI4avM, {from: accounts[1]});
		await BACMARSLPTOKENPoolyrKxpLZ.exit.call({from: accounts[3]});
		const uint25653dez6 = await BACMARSLPTOKENPoolyrKxpLZ.rewardPerToken.call({from: accounts[2]});
		const uint256d153sOB = await BACMARSLPTOKENPoolyrKxpLZ.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvTFTxfA = "P1OVH8kjl7AScpvARxKSEyAnBdSwhB2j42hJxXlzhTb4SrHuqb7Au95aLLp3mTDZVR5mGVIBmjePr8uYD2YfGKAMWDlFs"
		const stringbxucP4r = "ofaoRLspVBdH3NSEqt4T2eslt2vo9lOYPf38vKJiS8Tlm9TUVVeVxLcqZ9"
		const uintHLCiCd8 = BigInt("45")
		const BACMARSLPTOKENPooleddta76 = await BACMARSLPTOKENPool.new(stringvTFTxfA, stringbxucP4r, uintHLCiCd8, {from: accounts[5]});
		const uinti825Xg0 = BigInt("1574")
		const uint256J7ACpwK = await BACMARSLPTOKENPooleddta76.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPooleddta76.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPooleddta76.getReward.call({from: accounts[2]});
		const uint256soZm3h = await BACMARSLPTOKENPooleddta76.stake.call(uinti825Xg0, {from: accounts[0]});
		await BACMARSLPTOKENPooleddta76.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPooleddta76.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmA4xOSQ = "iOqn3oDNehXaSJbtU7Z0xEcbEUX1Dxct8hmr84yvYpeUZxNMHAelWTOL2HO"
		const stringBQvA7Qz = "iJnXFsJb3KSeybUSgqelxeETJD6DDRpB5cPcdMXwqvNeLAfjiMIL4dy1yP8b9EARwm"
		const uintm3pj4u = BigInt("207")
		const BACMARSLPTOKENPoolFyjv15q = await BACMARSLPTOKENPool.new(stringmA4xOSQ, stringBQvA7Qz, uintm3pj4u, {from: accounts[4]});
		const byteo89oG3C = "0x0f121d150c0a0d090417191c150e1d18151f160212110a070d140b0f131d0218"
		const byteKp3HOgK = "0x17140819121f030703031004061c110b15032016011e1a0f04170a1f090d0e10"
		const uintULQ6Xhx = BigInt("91")
		const uintFduIVZ6 = BigInt("204")
		const uintbFNhdiP = BigInt("2000")
		const byteScn30KL = "0x180103080f0c0a1a0b03040b0b03011515011218000c1c1220001c130d020a11"
		const byteKDN9Km1 = "0x0c0a0f0711140910030b060308051c111a040c06030c1714180c071108151a14"
		const uintxs4cBo7 = BigInt("237")
		const uintnicvkcq = BigInt("1893")
		const uintAslDphD = BigInt("1101")
		const uint256hMcNWng = await BACMARSLPTOKENPoolFyjv15q.stakeWithPermit.call(uintbFNhdiP, uintFduIVZ6, uintULQ6Xhx, byteKp3HOgK, byteo89oG3C, {from: accounts[3]});
		const uint256IWYmqG0 = await BACMARSLPTOKENPoolFyjv15q.stakeWithPermit.call(uintAslDphD, uintnicvkcq, uintxs4cBo7, byteKDN9Km1, byteScn30KL, {from: accounts[0]});
		const stringcLBcT5r = await BACMARSLPTOKENPoolFyjv15q.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolFyjv15q.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQHFgSJS = "6KPKOh5nowqt7LPPp6Mvo6NNE"
		const stringZdkM5VR = "iSVAGE1PAAaOdF41VWeFbb5"
		const uintvYmlix = BigInt("182")
		const BACMARSLPTOKENPool6osEQh = await BACMARSLPTOKENPool.new(stringQHFgSJS, stringZdkM5VR, uintvYmlix, {from: accounts[3]});
		const addressmirAZav = accounts[2]
		const byteXE4siJf = "0x161b1e16141c021401100b000b12140001121c140619120402120d191d0a110e"
		const byterkmL8E = "0x190312190c142012010300060b07191919022008030b1d06080c0e110c01071b"
		const uintrVS0NIc = BigInt("90")
		const uintAyAuiUi = BigInt("1048")
		const uinteFqDiOq = BigInt("475")
		const stringnNX5Gxc = await BACMARSLPTOKENPool6osEQh.symbol.call({from: accounts[3]});
		const addressb9ysN2 = await BACMARSLPTOKENPool6osEQh.updateReward.call(addressmirAZav, {from: accounts[4]});
		const uint256c0AH7s2 = await BACMARSLPTOKENPool6osEQh.stakeWithPermit.call(uinteFqDiOq, uintAyAuiUi, uintrVS0NIc, byterkmL8E, byteXE4siJf, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqexjN73 = "tA3iQ8KJanXQmf5npqdHJmhmYRSunyyQv7eQqjqvFiKQvhjB96S5qjjkw5q"
		const stringYANhWWS = "QgBnIK8T1KXIyKGwFEaA51"
		const uintFXguooG = BigInt("189")
		const BACMARSLPTOKENPoolMFlJT4a = await BACMARSLPTOKENPool.new(stringqexjN73, stringYANhWWS, uintFXguooG, {from: accounts[0]});
		await BACMARSLPTOKENPoolMFlJT4a.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolMFlJT4a.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvg8dnjZ = "VuufWlg5J5kInaBAISiqPXFPUhTU5bHpEAhUOipP5GZ8"
		const stringx4WrBQR = "busYTqvOSE9QXg82ogfwvlWXSWk8pkQyJ"
		const uintAHuZZ6t = BigInt("74")
		const BACMARSLPTOKENPoolie1McZS = await BACMARSLPTOKENPool.new(stringvg8dnjZ, stringx4WrBQR, uintAHuZZ6t, {from: accounts[4]});
		const addressuv3O6WU = accounts[3]
		const uint256ZHHHgwH = await BACMARSLPTOKENPoolie1McZS.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringTjb85gH = await BACMARSLPTOKENPoolie1McZS.symbol.call({from: accounts[2]});
		const uint256ecFEEKs = await BACMARSLPTOKENPoolie1McZS.balanceOf.call(addressuv3O6WU, {from: accounts[1]});
		await BACMARSLPTOKENPoolie1McZS.nonReentrant.call({from: accounts[1]});
		const uint256H0JCVmb = await BACMARSLPTOKENPoolie1McZS.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGwt6sQg = "tbfXfAGm0gQj"
		const stringzOzi7cp = "RsvmyV"
		const uintG63iIE1 = BigInt("178")
		const BACMARSLPTOKENPoolR8jp9c = await BACMARSLPTOKENPool.new(stringGwt6sQg, stringzOzi7cp, uintG63iIE1, {from: accounts[2]});
		const uintup0pkyf = BigInt("411")
		const uint256koCVlRG = await BACMARSLPTOKENPoolR8jp9c.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint8WfEHmaa = await BACMARSLPTOKENPoolR8jp9c.decimals.call({from: accounts[0]});
		const stringj30S59q = await BACMARSLPTOKENPoolR8jp9c.symbol.call({from: accounts[2]});
		const uint8fqcLZxm = await BACMARSLPTOKENPoolR8jp9c.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bQZAXMD = await BACMARSLPTOKENPoolR8jp9c.notifyRewardAmount.call(uintup0pkyf, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfxkbv24 = "TWazvoaynKzXmbPbBaGrNv4WxlvKeiXWtW2vjdRTuTgTREht9NKrVPiDe8LYs7Uanda881HSSPvTldQilu0MTR"
		const stringshWgmXD = "QcCxanjH4SjOspoGvOU7KyRhJm4PIgCv3tH0WHvSSKnahd9TI956EXMc"
		const uintnCW8IKn = BigInt("128")
		const BACMARSLPTOKENPoolCctXDex = await BACMARSLPTOKENPool.new(stringfxkbv24, stringshWgmXD, uintnCW8IKn, {from: "0x0000000000000000000000000000000000000001"});
		const stringtoXhrAM = await BACMARSLPTOKENPoolCctXDex.symbol.call({from: accounts[4]});
		const stringYGJSlP = await BACMARSLPTOKENPoolCctXDex.symbol.call({from: accounts[3]});
		const uint256WqzW6v = await BACMARSLPTOKENPoolCctXDex.totalSupply.call({from: accounts[4]});
		const uint256Red4gMX = await BACMARSLPTOKENPoolCctXDex.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy96toWK = "nk1bQ22PJPYAXfWz2hXwO3TpclmmgWCjhqagdvyWfvrhL2WV"
		const string62ijPa = "cPfLmhAWhrmwZeNEhOZ"
		const uintN4veIf5 = BigInt("191")
		const BACMARSLPTOKENPoolZBltgfG = await BACMARSLPTOKENPool.new(stringy96toWK, string62ijPa, uintN4veIf5, {from: accounts[4]});
		const uintxHMGEmF = BigInt("470")
		const uinttVjg8wE = BigInt("1742")
		const uint256zWrfLxl = await BACMARSLPTOKENPoolZBltgfG.withdraw.call(uintxHMGEmF, {from: accounts[4]});
		const uint256xAnDiFI = await BACMARSLPTOKENPoolZBltgfG.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolZBltgfG.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256ZFFzLri = await BACMARSLPTOKENPoolZBltgfG.stake.call(uinttVjg8wE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256taBKprS = await BACMARSLPTOKENPoolZBltgfG.getRewardForDuration.call({from: accounts[1]});
		const uint256XGN77S2 = await BACMARSLPTOKENPoolZBltgfG.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWjV3TMh = "w8adkNWgDB0mfW"
		const stringfQLXO2u = "znmq1KOa997aNRwEwYyNjVdOB2tTWvEOVvzhgRyzlCtYWYsLaRL6S34VtY1WfRCuL91XzjoORTO9"
		const uintpGFUiSU = BigInt("44")
		const BACMARSLPTOKENPoolSwD5qo5 = await BACMARSLPTOKENPool.new(stringWjV3TMh, stringfQLXO2u, uintpGFUiSU, {from: accounts[4]});
		const addressjPgYBzw = accounts[2]
		const bytejwW8g0V = "0x200c1a010217150d1f0a1313110011131b0e060c0204021b0e031902040f031f"
		const byteL12LNhe = "0x06111f01031c040a1707171b09091f0802150d1003190d15061d121f010a1b05"
		const uintdayRB8m = BigInt("201")
		const uintDb3zDY6 = BigInt("808")
		const uintXcs5WxY = BigInt("1674")
		const addressyuVuR8H = accounts[3]
		const uint256wLdklvz = await BACMARSLPTOKENPoolSwD5qo5.balanceOf.call(addressjPgYBzw, {from: accounts[1]});
		await BACMARSLPTOKENPoolSwD5qo5.exit.call({from: accounts[0]});
		const uint256AKDCyEZ = await BACMARSLPTOKENPoolSwD5qo5.stakeWithPermit.call(uintXcs5WxY, uintDb3zDY6, uintdayRB8m, byteL12LNhe, bytejwW8g0V, {from: accounts[1]});
		const uint256Lh6ySbd = await BACMARSLPTOKENPoolSwD5qo5.earned.call(addressyuVuR8H, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRce9t0T = "ku1vntAIWahUhny7Le9JuTQKe1u7cx9BLoiqRcnwWKnGXS7BgJLaYZRzbN43snTs3Gr4fkiq2NKV"
		const stringDnFV4Ly = "gVp7LH4VYCIJ8T6TReNW8L8bqs5HbFxLWtxevv9eZ6BxEMmjWOkoQCRgJTb3Dw9rOlRdgen4PUPDDKU"
		const uintVnsOGU = BigInt("230")
		const BACMARSLPTOKENPoolR5mw7tM = await BACMARSLPTOKENPool.new(stringRce9t0T, stringDnFV4Ly, uintVnsOGU, {from: accounts[3]});
		const uintwmaNv0x = BigInt("1094")
		await BACMARSLPTOKENPoolR5mw7tM.exit.call({from: accounts[4]});
		const uint256u3c7Rb = await BACMARSLPTOKENPoolR5mw7tM.notifyRewardAmount.call(uintwmaNv0x, {from: accounts[2]});
		const uint256QfYzCv7 = await BACMARSLPTOKENPoolR5mw7tM.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolR5mw7tM.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtBfduia = "UOjnqq3dWO6zbUYfuYcvUQA4ataM84t3zo784WKxvvHWaOrmVLJ3ngEyO52m2SK3ebmk7AiYFCftLp"
		const stringfK4S8Ng = "pl7GosA6qQeRV8AXfvSS984kPtMSAXPrVyY1osnMWuM1Hx7eh3G7rhDaLy"
		const uintYJhy534 = BigInt("51")
		const BACMARSLPTOKENPoolPOhVhoH = await BACMARSLPTOKENPool.new(stringtBfduia, stringfK4S8Ng, uintYJhy534, {from: accounts[0]});
		const uinthIk5tI = BigInt("1063")
		const byteEXf1rX3 = "0x1c0e0c141e12101c020d1108170404131f150d001a0f0a0413001c0b1c161b0d"
		const byteolJCVcY = "0x070f121810160114151704151007190d0a1004111615161e181e151205110900"
		const uinto9xbZp1 = BigInt("30")
		const uintQw8HPDk = BigInt("629")
		const uintrpfjgTa = BigInt("1218")
		await BACMARSLPTOKENPoolPOhVhoH.nonReentrant.call({from: accounts[3]});
		const uint256YbNEvtJ = await BACMARSLPTOKENPoolPOhVhoH.notifyRewardAmount.call(uinthIk5tI, {from: accounts[3]});
		const uint256ipOWEjb = await BACMARSLPTOKENPoolPOhVhoH.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256mh9p85v = await BACMARSLPTOKENPoolPOhVhoH.stakeWithPermit.call(uintrpfjgTa, uintQw8HPDk, uinto9xbZp1, byteolJCVcY, byteEXf1rX3, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtfdSBCm = "tCYpzZQmW6ySLttz13y4icafa8IEkpXqMr7VxGa1SUw3KLNmPRz8Uao3pe4cJWXmWRQWT"
		const stringo9sUMa = "FlkEgy5QIoM3D4hq7eflgYeuuuPfJEi0bnUvtMsmsxVDj7adj6ht4ClexxVzuKikYWlvh5ayEykTfMbP3JSmMWD"
		const uintHtt58dP = BigInt("177")
		const BACMARSLPTOKENPoolbT8CpQm = await BACMARSLPTOKENPool.new(stringtfdSBCm, stringo9sUMa, uintHtt58dP, {from: "0x0000000000000000000000000000000000000001"});
		const uintHTW5BEr = BigInt("1609")
		const addressazv8ob8 = accounts[1]
		const uint2563c4N56 = await BACMARSLPTOKENPoolbT8CpQm.withdraw.call(uintHTW5BEr, {from: accounts[0]});
		const uint256oiK7rpJ = await BACMARSLPTOKENPoolbT8CpQm.earned.call(addressazv8ob8, {from: accounts[3]});
		const uint256ipIATAQ = await BACMARSLPTOKENPoolbT8CpQm.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZqVgkWp = "tLV2t0dzrgdsGNcJnzTzHVrTxAlizaC9ezUJXRjQahFXviISSW238CRZYIwMcCiFLxxvW7X9RrcW"
		const stringKtwDKUl = "KIhOMjwAB8cV4JryLkwygQbPakqnCxt4xXBP9eBJUucoKtYSYGGdnpL8SrVULqBi8b9GCgb"
		const uintkxuUNU2 = BigInt("12")
		const BACMARSLPTOKENPoolVrLrAHn = await BACMARSLPTOKENPool.new(stringZqVgkWp, stringKtwDKUl, uintkxuUNU2, {from: accounts[0]});
		await BACMARSLPTOKENPoolVrLrAHn.exit.call({from: accounts[1]});
		const uint256MxKVwZT = await BACMARSLPTOKENPoolVrLrAHn.lastTimeRewardApplicable.call({from: accounts[3]});
		const stringiJxtc36 = await BACMARSLPTOKENPoolVrLrAHn.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAbVY3N2 = "Ja5BpRbzclDegJdTm9SUw4iiVtPBeMOjxWxTb2k8CqJBiWS7nbSjuuVWaKiNAxqlEYr583MN"
		const stringOfZEoAe = "FZMjcdo89DfFrPttUy6IGN4AmkwNtGpiuNaOJSwRipPw3Sy1Vd5aC1gIIOieQeeE"
		const uintjiSGKLe = BigInt("34")
		const BACMARSLPTOKENPoolbPj8s9o = await BACMARSLPTOKENPool.new(stringAbVY3N2, stringOfZEoAe, uintjiSGKLe, {from: accounts[3]});
		const addressUCAawXB = accounts[2]
		const addresseYqvg0a = await BACMARSLPTOKENPoolbPj8s9o.updateReward.call(addressUCAawXB, {from: accounts[1]});
		const uint8pgnAVzU = await BACMARSLPTOKENPoolbPj8s9o.decimals.call({from: accounts[1]});
	});
})