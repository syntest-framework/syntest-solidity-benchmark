const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozJGKeuvE = await Cryptoz.new({from: accounts[3]});
		const uintAdqVJFS = BigInt("1147")
		const addressnmCvtnv = accounts[2]
		const uintKhqqWBp = BigInt("1369")
		const addressTLmMBc = accounts[4]
		const addressOvMsOep = accounts[2]
		const addressA0fljrx = accounts[0]
//		const uint256y4DhvnT = await CryptozJGKeuvE.tokenOfOwnerByIndex.call(addressnmCvtnv, uintAdqVJFS, {from: accounts[0]});
//		const addressLYsZOD = await CryptozJGKeuvE.transferFrom.call(addressOvMsOep, addressTLmMBc, uintKhqqWBp, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgQX6jbO = await CryptozJGKeuvE.linkMySponsor.call(addressA0fljrx, {from: accounts[1]});

		await expect(CryptozJGKeuvE.tokenOfOwnerByIndex.call(addressnmCvtnv, uintAdqVJFS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz0o4bS2 = await Cryptoz.new({from: accounts[2]});
		const uintUxXfUpa = BigInt("117")
		const uintDP78mto = BigInt("890")
		const uintBbmtSoq = BigInt("953")
		const uintgklW5e4 = BigInt("586")
		const uintPQR0Egw = BigInt("79")
		const uintde5GOUa = BigInt("1506")
		const addressuA1NIb6 = accounts[2]
		const uintAC0ivOq = BigInt("341")
		const uintGBMUVhY = BigInt("542")
		const addressubtbV3 = accounts[2]
//		const bool72CXZP = await Cryptoz0o4bS2.addTocardType.call(uintPQR0Egw, uintgklW5e4, uintBbmtSoq, uintDP78mto, uintUxXfUpa, {from: accounts[2]});
//		const uint32Dxph3vW = await Cryptoz0o4bS2.getFreeCard.call(uintde5GOUa, {from: accounts[4]});
//		const addressN6ZuDlf = await Cryptoz0o4bS2.initialize.call(addressuA1NIb6, {from: accounts[0]});
//		const uint256mKtwaOd = await Cryptoz0o4bS2.tokenByIndex.call(uintAC0ivOq, {from: accounts[4]});
//		const uint2564q1TLA = await Cryptoz0o4bS2.sacrifice.call(uintGBMUVhY, {from: accounts[0]});
//		const uintGdjzDVB = await Cryptoz0o4bS2.getTimeToDailyBonus.call(addressubtbV3, {from: accounts[4]});

		await expect(Cryptoz0o4bS2.addTocardType.call(uintPQR0Egw, uintgklW5e4, uintBbmtSoq, uintDP78mto, uintUxXfUpa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const addressWLGQbLP = accounts[4]
		const uintT8abIz0 = BigInt("156")
		const uintCQ1OE2X = BigInt("1575")
		const uintr03AxmI = BigInt("1372")
		const uintxxICZJU = BigInt("784")
		const uintvsH4Bdq = BigInt("1406")
		const uintIwP7QdV = BigInt("1336")
		const uintGNvgq9i = await Cryptozuh4FlFT.getTimeToDailyBonus.call(addressWLGQbLP, {from: accounts[0]});
//		const boolj4UFoT = await Cryptozuh4FlFT.addTocardType.call(uintvsH4Bdq, uintxxICZJU, uintr03AxmI, uintCQ1OE2X, uintT8abIz0, {from: accounts[4]});
//		const boollFADCCW = await Cryptozuh4FlFT.openBoosterCard.call(uintIwP7QdV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGNvgq9i, BigInt("1630203746"))
		await expect(Cryptozuh4FlFT.addTocardType.call(uintvsH4Bdq, uintxxICZJU, uintr03AxmI, uintCQ1OE2X, uintT8abIz0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozenxnSiP = await Cryptoz.new({from: accounts[5]});
		const uintJnRXiWN = BigInt("680")
		const uintzrHd88B = BigInt("362")
		const uintaq1ANUu = BigInt("1586")
		const uintzFq8tn = BigInt("27")
		const uintGcYFUTp = BigInt("163")
		const uints8JxFNr = BigInt("150")
		const stringDhYUGKc = "cVUG48VgF4abzOl5Z2s3icLDeHyqLSfvMFkLDsNy5CoJB6"
		const stringx65wsy = "ZvAeA"
		const uintxUYttA = BigInt("145")
		const uintJL4Q5d = BigInt("1329")
		const boolaDI57Ag = await CryptozenxnSiP.loadNewCardType.call(uintxUYttA, stringx65wsy, stringDhYUGKc, uints8JxFNr, uintGcYFUTp, uintzFq8tn, uintaq1ANUu, uintzrHd88B, uintJnRXiWN, {from: accounts[5]});
//		await CryptozenxnSiP.buyBoosterCardAndOpen.call({from: accounts[1]});
//		await CryptozenxnSiP.getOwnedCard.call(uintJL4Q5d, {from: accounts[2]});

		assert.equal(boolaDI57Ag, true)
		await expect(CryptozenxnSiP.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozsWLhi7v = await Cryptoz.new({from: accounts[2]});
		const addressRRY5Ciq = accounts[4]
		const uintmt2QEdn = BigInt("1121")
		const uintMO8EXfD = BigInt("434")
//		const addressmVsAGt = await CryptozsWLhi7v.linkMySponsor.call(addressRRY5Ciq, {from: accounts[0]});
//		const stringzg19Ub3 = await CryptozsWLhi7v.tokenURI.call(uintmt2QEdn, {from: accounts[3]});
//		const uint256NJPRs3o = await CryptozsWLhi7v.tokenByIndex.call(uintMO8EXfD, {from: accounts[1]});

		await expect(CryptozsWLhi7v.linkMySponsor.call(addressRRY5Ciq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozPoiqAUv = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvTruvfo = BigInt("152")
		const uintvMzvUij = BigInt("324")
		const uintk9bFxqF = BigInt("1931")
		const uintBdC02YR = BigInt("285")
		const uintF1XZZPh = BigInt("110")
		const addressZrzUB4k = "0x0000000000000000000000000000000000000001"
		const addressTjS1Hwd = accounts[4]
		const boolX5qK6R9 = await CryptozPoiqAUv.addTocardType.call(uintF1XZZPh, uintBdC02YR, uintk9bFxqF, uintvMzvUij, uintvTruvfo, {from: accounts[2]});
		const addressdGMVJKM = await CryptozPoiqAUv.initialize.call(addressZrzUB4k, {from: accounts[2]});
		await CryptozPoiqAUv.getBonusBoosters.call({from: accounts[1]});
		await CryptozPoiqAUv.buyBoosterCardAndOpen.call({from: accounts[2]});
		const uintsvt3s8 = await CryptozPoiqAUv.getTimeToDailyBonus.call(addressTjS1Hwd, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozn0Zbmkv = await Cryptoz.new({from: accounts[3]});
		const uintBS5FNam = BigInt("623")
		const uintHpOudG = BigInt("1183")
		const uintd6za3Eu = BigInt("717")
		const uintEArLnBA = BigInt("829")
		const uintk2aVVW7 = BigInt("166")
		const uintJNFVSmk = BigInt("27")
		const uintEnYV9x2 = BigInt("226")
		const stringKzQmcL = "15u8pfzshz8g2kwbLfEHJ0BJvxGmNkncHSeGoPR6w41Y040qF8y6z7cwoNRyuUKiyOM0vdGqaskAv"
		const stringYcJFAe = "gs9fnm8RiMtsN06O1ppBso9qIjcFyQSjFxQMKYinJEtn9K2j2eK00a5A1Kb29gHpZpo3CwBrnclXcE4cWTVCZnMDaO"
		const uintPePrclG = BigInt("139")
		const stringxH3vzeg = await Cryptozn0Zbmkv.name.call({from: accounts[1]});
//		await Cryptozn0Zbmkv.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const boolyqgzR5A = await Cryptozn0Zbmkv.buyBoosterCard.call(uintBS5FNam, {from: accounts[4]});
//		const boolIQWFyb = await Cryptozn0Zbmkv.loadNewCardType.call(uintPePrclG, stringYcJFAe, stringKzQmcL, uintEnYV9x2, uintJNFVSmk, uintk2aVVW7, uintEArLnBA, uintd6za3Eu, uintHpOudG, {from: accounts[0]});

		assert.equal(stringxH3vzeg, "Cryptoz Cards")
		await expect(Cryptozn0Zbmkv.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const uintTay9kv2 = BigInt("429")
		const addressxDJ5AfR = accounts[4]
		const uintHWLLBxt = BigInt("156")
		const uintlnXRQH6 = BigInt("1168")
		const uintK6N9oB = BigInt("1372")
		const uintJNA5r3v = BigInt("784")
		const uinteFP6eS = BigInt("1406")
		const uintrw3aHB4 = BigInt("1336")
		const stringtfvU5c2 = await Cryptozuh4FlFT.tokenURI.call(uintTay9kv2, {from: accounts[1]});
		const uintGNvgq9i = await Cryptozuh4FlFT.getTimeToDailyBonus.call(addressxDJ5AfR, {from: accounts[0]});
//		const boolj4UFoT = await Cryptozuh4FlFT.addTocardType.call(uinteFP6eS, uintJNA5r3v, uintK6N9oB, uintlnXRQH6, uintHWLLBxt, {from: accounts[4]});
//		const boollFADCCW = await Cryptozuh4FlFT.openBoosterCard.call(uintrw3aHB4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringtfvU5c2, "https://cryptoz.cards/data/429")
		assert.equal(uintGNvgq9i, BigInt("1630203759"))
		await expect(Cryptozuh4FlFT.addTocardType.call(uinteFP6eS, uintJNA5r3v, uintK6N9oB, uintlnXRQH6, uintHWLLBxt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const addressfWtm8qB = accounts[4]
		const uintbOZn8vn = BigInt("156")
		const uintJTtKpd2 = BigInt("1575")
		const uintR7LAkkE = BigInt("1372")
		const uintRGR2wN9 = BigInt("784")
		const uintnEyBZNT = BigInt("1406")
		const uintM2QKdiL = BigInt("1963")
		const uintGNvgq9i = await Cryptozuh4FlFT.getTimeToDailyBonus.call(addressfWtm8qB, {from: accounts[0]});
//		await Cryptozuh4FlFT.f.call({from: accounts[3]});
//		const boolj4UFoT = await Cryptozuh4FlFT.addTocardType.call(uintnEyBZNT, uintRGR2wN9, uintR7LAkkE, uintJTtKpd2, uintbOZn8vn, {from: accounts[4]});
//		const boolDUFfNzk = await Cryptozuh4FlFT.openBoosterCard.call(uintM2QKdiL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGNvgq9i, BigInt("1630203730"))
		await expect(Cryptozuh4FlFT.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const uint90DEs0 = BigInt("156")
		const uintCpZioLn = BigInt("1575")
		const uintiIQMcEl = BigInt("1392")
		const uintCPz6uIM = BigInt("784")
		const uintwBvtMta = BigInt("1406")
		const stringzH47gk = await Cryptozuh4FlFT.symbol.call({from: accounts[3]});
//		const boolj4UFoT = await Cryptozuh4FlFT.addTocardType.call(uintwBvtMta, uintCPz6uIM, uintiIQMcEl, uintCpZioLn, uint90DEs0, {from: accounts[4]});

		assert.equal(stringzH47gk, "Cryptoz")
		await expect(Cryptozuh4FlFT.addTocardType.call(uintwBvtMta, uintCPz6uIM, uintiIQMcEl, uintCpZioLn, uint90DEs0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozenxnSiP = await Cryptoz.new({from: accounts[5]});
		const uinteu7G1GQ = BigInt("680")
		const uintApm5id = BigInt("362")
		const uintaMjOSJA = BigInt("1586")
		const uintq5gTPQE = BigInt("27")
		const uinteP88r2Q = BigInt("163")
		const uintw3u64D = BigInt("150")
		const stringDhYUGKc = "cVUG48VgF4abzOl5Z2s3icLDeHyqLSfvMFkLDsNy5CoJB6"
		const stringx65wsy = "ZvAeA"
		const uintxbAOuyH = BigInt("145")
		const uintHgutbif = BigInt("1329")
		const boolaDI57Ag = await CryptozenxnSiP.loadNewCardType.call(uintxbAOuyH, stringx65wsy, stringDhYUGKc, uintw3u64D, uinteP88r2Q, uintq5gTPQE, uintaMjOSJA, uintApm5id, uinteu7G1GQ, {from: accounts[5]});
//		await CryptozenxnSiP.getOwnedCard.call(uintHgutbif, {from: accounts[2]});

		assert.equal(boolaDI57Ag, true)
		await expect(CryptozenxnSiP.getOwnedCard.call(uintHgutbif, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz0zT0bB = await Cryptoz.new({from: accounts[1]});
		const uinthcnYbrH = BigInt("1028")
		const uintTyN6ng = BigInt("1420")
		const stringxwE9bzw = await Cryptoz0zT0bB.name.call({from: accounts[1]});
//		await Cryptoz0zT0bB.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});
//		const booln3fIMUe = await Cryptoz0zT0bB.openBoosterCard.call(uinthcnYbrH, {from: "0x0000000000000000000000000000000000000001"});
//		const stringKt2LcfQ = await Cryptoz0zT0bB.name.call({from: accounts[4]});
//		const uint32xBk1XFW = await Cryptoz0zT0bB.isValidCard.call(uintTyN6ng, {from: accounts[3]});

		assert.equal(stringxwE9bzw, "Cryptoz Cards")
		await expect(Cryptoz0zT0bB.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz0zT0bB = await Cryptoz.new({from: accounts[1]});
		const uintDEGzR8o = BigInt("1420")
		const stringxwE9bzw = await Cryptoz0zT0bB.name.call({from: accounts[1]});
//		await Cryptoz0zT0bB.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringKt2LcfQ = await Cryptoz0zT0bB.name.call({from: accounts[4]});
//		const uint32xBk1XFW = await Cryptoz0zT0bB.isValidCard.call(uintDEGzR8o, {from: accounts[3]});

		assert.equal(stringxwE9bzw, "Cryptoz Cards")
		await expect(Cryptoz0zT0bB.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDua1znD = await Cryptoz.new({from: accounts[5]});
		const uintIBawYDM = BigInt("1250")
		const uintLTY71YN = BigInt("1887")
		const uintK3X8Vu = BigInt("1225")
		const uintNclyt9P = BigInt("1360")
		const uintvKbjPHy = BigInt("87")
		const uintzNXktp3 = BigInt("173")
		const uintErVPcwA = BigInt("246")
		const stringCHOvRGx = "aqWG3nVJ6ya84rboV7UiIW7rs8i391uZORxjSyefNLYszaAdGovqPKBQaac7mjbd4Boksjuo"
		const stringMa5ln2 = "ClBV2VkV3C7sWUrXE6wisei2DktOoVqsW"
		const uintVszNiLk = BigInt("72")
		const uintnssHn83 = BigInt("874")
		const uintm472eC = BigInt("1765")
		const addressevmXrnW = accounts[5]
		const addressBUbWFgi = accounts[4]
//		const uint256VuJwTaV = await CryptozDua1znD.sacrifice.call(uintIBawYDM, {from: accounts[4]});
//		const boolocfWKYt = await CryptozDua1znD.loadNewCardType.call(uintVszNiLk, stringMa5ln2, stringCHOvRGx, uintErVPcwA, uintzNXktp3, uintvKbjPHy, uintNclyt9P, uintK3X8Vu, uintLTY71YN, {from: accounts[3]});
//		const boolIVFiCgI = await CryptozDua1znD.openBoosterCard.call(uintnssHn83, {from: accounts[2]});
//		const uint256WhjXzNF = await CryptozDua1znD.sacrifice.call(uintm472eC, {from: "0x0000000000000000000000000000000000000001"});
//		const addressex5FhH = await CryptozDua1znD.initialize.call(addressevmXrnW, {from: accounts[5]});
//		const addressgWqDYZy = await CryptozDua1znD.initialize.call(addressBUbWFgi, {from: accounts[3]});

		await expect(CryptozDua1znD.sacrifice.call(uintIBawYDM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const addresszp1uOA8 = accounts[0]
		const uintdrlAFa6 = BigInt("831")
		const addressp2g5vdM = accounts[6]
		const uint256arrayw643xZt = await Cryptozuh4FlFT.tokensOfOwner.call(addresszp1uOA8, {from: accounts[0]});
//		const uint32YHu72Z = await Cryptozuh4FlFT.getFreeCard.call(uintdrlAFa6, {from: accounts[0]});
//		const uintGNvgq9i = await Cryptozuh4FlFT.getTimeToDailyBonus.call(addressp2g5vdM, {from: accounts[0]});

		assert.equal(uint256arrayw643xZt, BigInt(""))
		await expect(Cryptozuh4FlFT.getFreeCard.call(uintdrlAFa6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozenxnSiP = await Cryptoz.new({from: accounts[5]});
		const uintKGSsrs4 = BigInt("680")
		const uintVDRVimC = BigInt("362")
		const uintN3Ql5z = BigInt("1586")
		const uinttjVHMyc = BigInt("46")
		const uintRvpFy4e = BigInt("163")
		const uintmz9jvBO = BigInt("150")
		const stringDhYUGKc = "cVUG48VgF4abzOl5Z2s3icLDeHyqLSfvMFkLDsNy5CoJB6"
		const stringx65wsy = "ZvAeA"
		const uintuoiyHYx = BigInt("145")
//		await CryptozenxnSiP.getTokensByRarity.call({from: accounts[5]});
//		await CryptozenxnSiP.getBonusBoosters.call({from: accounts[1]});
//		const boolaDI57Ag = await CryptozenxnSiP.loadNewCardType.call(uintuoiyHYx, stringx65wsy, stringDhYUGKc, uintmz9jvBO, uintRvpFy4e, uinttjVHMyc, uintN3Ql5z, uintVDRVimC, uintKGSsrs4, {from: accounts[5]});

		await expect(CryptozenxnSiP.getTokensByRarity.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const addressse92703 = accounts[6]
		const uintSr27ZE2 = BigInt("1339")
		const uintGNvgq9i = await Cryptozuh4FlFT.getTimeToDailyBonus.call(addressse92703, {from: accounts[0]});
//		const boolbGeC6kq = await Cryptozuh4FlFT.buyBoosterCard.call(uintSr27ZE2, {from: accounts[1]});

		assert.equal(uintGNvgq9i, BigInt("1630203753"))
		await expect(Cryptozuh4FlFT.buyBoosterCard.call(uintSr27ZE2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozenxnSiP = await Cryptoz.new({from: accounts[5]});
		const uintk85jik5 = BigInt("935")
		const uintKhv9LyA = BigInt("680")
		const uintPQglpd = BigInt("362")
		const uintB3p45uh = BigInt("1586")
		const uintmy8PYld = BigInt("27")
		const uinttnEdJaD = BigInt("163")
		const uintgYJG75M = BigInt("150")
		const stringDhYUGKc = "cVUG48VgF4abzOl5Z2s3icLDeHyqLSfvMFkLDsNy5CoJB6"
		const stringx65wsy = "ZvAeA"
		const uintFR0Y7ig = BigInt("145")
//		const uint256O3uwf95 = await CryptozenxnSiP.tokenByIndex.call(uintk85jik5, {from: accounts[4]});
//		const boolaDI57Ag = await CryptozenxnSiP.loadNewCardType.call(uintFR0Y7ig, stringx65wsy, stringDhYUGKc, uintgYJG75M, uinttnEdJaD, uintmy8PYld, uintB3p45uh, uintPQglpd, uintKhv9LyA, {from: accounts[5]});

		await expect(CryptozenxnSiP.tokenByIndex.call(uintk85jik5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozenxnSiP = await Cryptoz.new({from: accounts[5]});
		const uintUaDiThY = BigInt("1233")
		const addressxAUQNQd = accounts[0]
		const addressibdcKdR = accounts[5]
		const uintPkGEGy3 = BigInt("680")
		const uintqKBVJUy = BigInt("362")
		const uintgBguNoV = BigInt("1586")
		const uintPhoYcyB = BigInt("27")
		const uintOEpejkP = BigInt("163")
		const uintFjaZy9o = BigInt("161")
		const stringDhYUGKc = "cVUG48VgF4abzOl5Z2s3icLDeHyqLSfvMFkLDsNy5CoJB6"
		const stringx65wsy = "ZvAeA"
		const uinttGOQQ3n = BigInt("145")
//		const addressr8N8e0f = await CryptozenxnSiP.transferFrom.call(addressibdcKdR, addressxAUQNQd, uintUaDiThY, {from: accounts[1]});
//		const boolaDI57Ag = await CryptozenxnSiP.loadNewCardType.call(uinttGOQQ3n, stringx65wsy, stringDhYUGKc, uintFjaZy9o, uintOEpejkP, uintPhoYcyB, uintgBguNoV, uintqKBVJUy, uintPkGEGy3, {from: accounts[5]});

		await expect(CryptozenxnSiP.transferFrom.call(addressibdcKdR, addressxAUQNQd, uintUaDiThY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const addressPwY8bZd = accounts[0]
		const addressF3m1NiC = accounts[0]
		const uintZtD9EJb = BigInt("1096")
		const addressQikZIKf = "0x0000000000000000000000000000000000000000"
		const addressU41rFR = await Cryptozuh4FlFT.initialize.call(addressPwY8bZd, {from: accounts[0]});
//		await Cryptozuh4FlFT.f.call({from: accounts[1]});
//		const addressOCzYcrx = await Cryptozuh4FlFT.linkMySponsor.call(addressF3m1NiC, {from: accounts[4]});
//		const uint256kTKsIV9 = await Cryptozuh4FlFT.tokenOfOwnerByIndex.call(addressQikZIKf, uintZtD9EJb, {from: accounts[4]});

		await expect(Cryptozuh4FlFT.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozuh4FlFT = await Cryptoz.new({from: accounts[0]});
		const uintuaGXWkP = BigInt("1586")
		const uintyhxNN4l = BigInt("1096")
		const addressEA4us6i = "0x0000000000000000000000000000000000000000"
		const addressg5MMCIE = accounts[5]
		const addresscXMms2M = accounts[0]
		const stringad2SSWo = await Cryptozuh4FlFT.tokenURI.call(uintuaGXWkP, {from: accounts[3]});
//		const uint256kTKsIV9 = await Cryptozuh4FlFT.tokenOfOwnerByIndex.call(addressEA4us6i, uintyhxNN4l, {from: accounts[4]});
//		const addressUxyVWix = await Cryptozuh4FlFT.initialize.call(addressg5MMCIE, {from: accounts[2]});
//		const uint256arraycA7ADP6 = await Cryptozuh4FlFT.tokensOfOwner.call(addresscXMms2M, {from: accounts[3]});

		assert.equal(stringad2SSWo, "https://cryptoz.cards/data/1586")
		await expect(Cryptozuh4FlFT.tokenOfOwnerByIndex.call(addressEA4us6i, uintyhxNN4l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})