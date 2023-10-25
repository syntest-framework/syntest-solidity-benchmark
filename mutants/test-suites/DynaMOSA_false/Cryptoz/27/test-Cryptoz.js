const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozAIMvf6x = await Cryptoz.new({from: accounts[3]});
		const uintHeWm9zF = BigInt("1470")
		const addressj8eomsr = accounts[3]
		const addressH6v1VzK = "0x0000000000000000000000000000000000000001"
		const uintSvzVII7 = BigInt("609")
		const uintK58ENr2 = BigInt("1504")
		const uintzIx4Gve = BigInt("196")
		const uintFiBw9CX = BigInt("1724")
		const uintbe1nymR = BigInt("210")
		const uintpuSSiB2 = BigInt("89")
		const uintBgAMoxh = BigInt("164")
		const string7wAFD3 = "X7LaEWL8awxjmua99BJt1X"
		const stringTYzlOlp = "fu9IxcYmagbkq4FS88Xz"
		const uintfikrug = BigInt("73")
		const uintKMWoVF9 = BigInt("826")
//		const addressl9GbdXw = await CryptozAIMvf6x.transferFrom.call(addressH6v1VzK, addressj8eomsr, uintHeWm9zF, {from: accounts[3]});
//		const uint32LAyYAuZ = await CryptozAIMvf6x.getFreeCard.call(uintSvzVII7, {from: accounts[1]});
//		const boolZwhKD0F = await CryptozAIMvf6x.loadNewCardType.call(uintfikrug, stringTYzlOlp, string7wAFD3, uintBgAMoxh, uintpuSSiB2, uintbe1nymR, uintFiBw9CX, uintzIx4Gve, uintK58ENr2, {from: accounts[0]});
//		const uint256Qpg4ZJN = await CryptozAIMvf6x.sacrifice.call(uintKMWoVF9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozAIMvf6x.transferFrom.call(addressH6v1VzK, addressj8eomsr, uintHeWm9zF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozyMHyYag = await Cryptoz.new({from: accounts[4]});
		const uinthFqcRan = BigInt("1692")
		const uintc8l0Wui = BigInt("453")
		const addresshatc4oo = accounts[3]
		const uintfKxuwRc = BigInt("594")
//		await CryptozyMHyYag.f.call({from: accounts[2]});
//		const uint32aw5ilgo = await CryptozyMHyYag.getFreeCard.call(uinthFqcRan, {from: accounts[0]});
//		const uint32OwAlecP = await CryptozyMHyYag.getFreeCard.call(uintc8l0Wui, {from: accounts[4]});
//		const addressBhbioOS = await CryptozyMHyYag.initialize.call(addresshatc4oo, {from: accounts[1]});
//		const uint256iOLePoS = await CryptozyMHyYag.sacrifice.call(uintfKxuwRc, {from: accounts[2]});
//		await CryptozyMHyYag.getBonusBoosters.call({from: accounts[5]});

		await expect(CryptozyMHyYag.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozxLACCOs = await Cryptoz.new({from: accounts[1]});
		const uintAlzgZVK = BigInt("1699")
		const uintjoa8Yax = BigInt("533")
		const addressDlnBqdS = accounts[0]
		const uinttssqBwb = BigInt("470")
		const uintjGzWWf8 = BigInt("280")
		const uintw4BuIe = BigInt("850")
		const uintzN8dEAW = BigInt("31")
		const uintjY9ZQe = BigInt("147")
		const uintySsecvb = BigInt("96")
		const stringXigcdL3 = "RADDTvIMtzy4Ps4pMncGsyQTxj9SDHSdl3qnC5"
		const stringBQbgP47 = "zuTexvs7zkLgOcalKR8SbYKzL31BemXvTYEbU5DHxHEvT8vhv4mVIjqnNTKdgDfp8cCP4bkPrB"
		const uintNb5NUej = BigInt("8")
//		const uint256XDx1hDn = await CryptozxLACCOs.sacrifice.call(uintAlzgZVK, {from: accounts[1]});
//		const uint256p4zL77P = await CryptozxLACCOs.tokenOfOwnerByIndex.call(addressDlnBqdS, uintjoa8Yax, {from: accounts[5]});
//		await CryptozxLACCOs.withdraw.call({from: accounts[1]});
//		const boolcmYWkU = await CryptozxLACCOs.loadNewCardType.call(uintNb5NUej, stringBQbgP47, stringXigcdL3, uintySsecvb, uintjY9ZQe, uintzN8dEAW, uintw4BuIe, uintjGzWWf8, uinttssqBwb, {from: accounts[0]});
//		const uint256eDJcRyB = await CryptozxLACCOs.totalSupply.call({from: accounts[3]});

		await expect(CryptozxLACCOs.sacrifice.call(uintAlzgZVK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const uintVR99iP = BigInt("2018")
		const uintvlyFzf9 = BigInt("187")
		const uintZM38hDc = BigInt("943")
		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintVR99iP, {from: accounts[4]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uintvlyFzf9, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintZM38hDc, {from: accounts[1]});

		assert.equal(uint256HVTawX, BigInt("0"))
		await expect(Cryptozd8CRWno.sacrifice.call(uintVR99iP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJDcTJiL = await Cryptoz.new({from: accounts[1]});
		const uintNk64C4I = BigInt("1202")
		const uintU64vtvF = BigInt("1924")
//		const uint256Ypqu4Rk = await CryptozJDcTJiL.tokenByIndex.call(uintNk64C4I, {from: accounts[2]});
//		const uint32Jn8I3dQ = await CryptozJDcTJiL.getFreeCard.call(uintU64vtvF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozJDcTJiL.tokenByIndex.call(uintNk64C4I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozK9eavwT = await Cryptoz.new({from: accounts[2]});
		const uintaEtPCMA = BigInt("286")
		const addressLXOY3VH = accounts[4]
		const uintNaNMPCj = BigInt("546")
//		const boolGgbPMF8 = await CryptozK9eavwT.openBoosterCard.call(uintaEtPCMA, {from: accounts[3]});
//		await CryptozK9eavwT.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const addressGhxfBSF = await CryptozK9eavwT.initialize.call(addressLXOY3VH, {from: accounts[5]});
//		const uint32VadR0k9 = await CryptozK9eavwT.getFreeCard.call(uintNaNMPCj, {from: accounts[3]});

		await expect(CryptozK9eavwT.openBoosterCard.call(uintaEtPCMA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const uintHgkEdDa = BigInt("122")
		const uintdeGx651 = BigInt("1564")
		const uintWAOA42H = BigInt("1030")
		const uintGntPPOt = BigInt("2013")
		const uintTMTWJJ = BigInt("345")
		const uintaS0sjHt = BigInt("2018")
		const addressCMfcELa = accounts[0]
		const uint1PDQpO = BigInt("187")
		const uintsQL1umd = BigInt("943")
		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
//		const booliG7sV0P = await Cryptozd8CRWno.addTocardType.call(uintTMTWJJ, uintGntPPOt, uintWAOA42H, uintdeGx651, uintHgkEdDa, {from: accounts[2]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintaS0sjHt, {from: accounts[4]});
//		const uintZEFa59 = await Cryptozd8CRWno.getTimeToDailyBonus.call(addressCMfcELa, {from: accounts[2]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uint1PDQpO, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintsQL1umd, {from: accounts[1]});

		assert.equal(uint256HVTawX, BigInt("0"))
		await expect(Cryptozd8CRWno.addTocardType.call(uintTMTWJJ, uintGntPPOt, uintWAOA42H, uintdeGx651, uintHgkEdDa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozdNJwxnG = await Cryptoz.new({from: accounts[2]});
		const uintAkHVZBR = BigInt("1667")
		const uintf3KLsS0 = BigInt("118")
		const addressdTGwRU3 = accounts[3]
		const addressbPEISnG = accounts[1]
		const addressFCmNYpr = accounts[1]
		const uintqULoKwq = BigInt("1456")
		const addressoZgcR3j = accounts[5]
		const addressuSolehe = accounts[4]
		const stringbE1HjL9 = await CryptozdNJwxnG.tokenURI.call(uintAkHVZBR, {from: accounts[0]});
//		const addresscRZWkLG = await CryptozdNJwxnG.transferFrom.call(addressbPEISnG, addressdTGwRU3, uintf3KLsS0, {from: accounts[4]});
//		const uint256TPe7xiG = await CryptozdNJwxnG.totalSupply.call({from: accounts[2]});
//		const addressBuWFsIY = await CryptozdNJwxnG.initialize.call(addressFCmNYpr, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FlUTnWR = await CryptozdNJwxnG.tokenOfOwnerByIndex.call(addressoZgcR3j, uintqULoKwq, {from: accounts[5]});
//		const addressdo9QNKx = await CryptozdNJwxnG.linkMySponsor.call(addressuSolehe, {from: accounts[4]});
//		const uint256x1aSDSL = await CryptozdNJwxnG.totalSupply.call({from: accounts[2]});
//		await CryptozdNJwxnG.withdraw.call({from: accounts[1]});

		assert.equal(stringbE1HjL9, "https://cryptoz.cards/data/1667")
		await expect(CryptozdNJwxnG.transferFrom.call(addressbPEISnG, addressdTGwRU3, uintf3KLsS0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const addressOwF39n = accounts[4]
		const uintIPvJ1Gi = BigInt("2018")
		const uintvcENDYN = BigInt("187")
		const uintW9MC8Yz = BigInt("943")
		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
		const uint256arraytA2W54 = await Cryptozd8CRWno.tokensOfOwner.call(addressOwF39n, {from: "0x0000000000000000000000000000000000000001"});
//		await Cryptozd8CRWno.f.call({from: accounts[4]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintIPvJ1Gi, {from: accounts[4]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uintvcENDYN, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintW9MC8Yz, {from: accounts[1]});

		assert.equal(uint256HVTawX, BigInt("0"))
		assert.equal(uint256arraytA2W54, BigInt(""))
		await expect(Cryptozd8CRWno.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const addressO7o2Z1f = accounts[1]
		const uintxTPhSYL = BigInt("2018")
		const uintq6ZUN7 = BigInt("1053")
		const uintyo0UyHx = BigInt("935")
		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
//		await Cryptozd8CRWno.getTokensByRarity.call({from: accounts[0]});
//		const addressjU25QJn = await Cryptozd8CRWno.linkMySponsor.call(addressO7o2Z1f, {from: accounts[4]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintxTPhSYL, {from: accounts[4]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uintq6ZUN7, {from: accounts[4]});
//		const stringErhvWyz = await Cryptozd8CRWno.symbol.call({from: accounts[2]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintyo0UyHx, {from: accounts[1]});

		assert.equal(uint256HVTawX, BigInt("0"))
		await expect(Cryptozd8CRWno.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const uintjDRp5sK = BigInt("5")
		const uintL6TxuC = BigInt("1642")
		const uintzXELyW = BigInt("183")
		const uintsBKbkFj = BigInt("855")
		const uinttfApg60 = BigInt("1353")
		const uintjAJ1qpK = BigInt("2005")
		const uintGqauZph = BigInt("943")
		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
//		const boolDDdfBLO = await Cryptozd8CRWno.addTocardType.call(uinttfApg60, uintsBKbkFj, uintzXELyW, uintL6TxuC, uintjDRp5sK, {from: accounts[3]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintjAJ1qpK, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintGqauZph, {from: accounts[1]});

		assert.equal(uint256HVTawX, BigInt("0"))
		await expect(Cryptozd8CRWno.addTocardType.call(uinttfApg60, uintsBKbkFj, uintzXELyW, uintL6TxuC, uintjDRp5sK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHIA2iA3 = await Cryptoz.new({from: accounts[3]});
		const uintcp9xkpM = BigInt("859")
		const uintfZMB1xq = BigInt("854")
		const uintzoHOVIg = BigInt("2042")
		const uintLdk8mGI = BigInt("230")
		const uinteQNfvJf = BigInt("206")
		const uintRbHGQBY = BigInt("46")
		const uintC68iAjg = BigInt("87")
		const stringhVhYzMV = "sc4J9jnADhvkjZikkosoDEMBlwnFAbo1AogrmjyUeBpRNkq7NSfw6GrGWMgHLGtr4i3DlVOHAXyGgwnlyd3EFAd0X5FCIsmC"
		const stringB5d8tF0 = "iYTORXhE9RK45rHzyzJ1LvIe5rL8dJvOXETbMdUNRV1HWTlR3Pf38hKLDQHqJ56QogbUkt1"
		const uintGdrQNxd = BigInt("57")
//		await CryptozHIA2iA3.getOwnedCard.call(uintcp9xkpM, {from: accounts[3]});
//		await CryptozHIA2iA3.getBonusBoosters.call({from: accounts[3]});
//		const uint256w1EpDNl = await CryptozHIA2iA3.totalSupply.call({from: accounts[5]});
//		const boolJwRgZ19 = await CryptozHIA2iA3.loadNewCardType.call(uintGdrQNxd, stringB5d8tF0, stringhVhYzMV, uintC68iAjg, uintRbHGQBY, uinteQNfvJf, uintLdk8mGI, uintzoHOVIg, uintfZMB1xq, {from: accounts[3]});
//		await CryptozHIA2iA3.getBonusBoosters.call({from: accounts[4]});

		await expect(CryptozHIA2iA3.getOwnedCard.call(uintcp9xkpM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const uintRVru1S0 = BigInt("135")
		const uintvjuNDzO = BigInt("2018")
		const uintiwxpL0 = BigInt("187")
		const uintHWQKeQz = BigInt("943")
//		const boolhiOT840 = await Cryptozd8CRWno.buyBoosterCard.call(uintRVru1S0, {from: accounts[0]});
//		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintvjuNDzO, {from: accounts[4]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uintiwxpL0, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintHWQKeQz, {from: accounts[1]});

		await expect(Cryptozd8CRWno.buyBoosterCard.call(uintRVru1S0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const addressmsHTou = accounts[2]
		const uintFvOU0ih = BigInt("2018")
		const uintE51yEed = BigInt("187")
		const uintCRIYRmH = BigInt("935")
		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
		const addressktR4bco = await Cryptozd8CRWno.initialize.call(addressmsHTou, {from: accounts[3]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintFvOU0ih, {from: accounts[4]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uintE51yEed, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintCRIYRmH, {from: accounts[1]});

		assert.equal(uint256HVTawX, BigInt("0"))
		await expect(Cryptozd8CRWno.sacrifice.call(uintFvOU0ih, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz6eSqAG = await Cryptoz.new({from: accounts[4]});
		const uintijx3ult = BigInt("1309")
		const uintJTNHQxp = BigInt("1883")
		const addressRBudVA = accounts[2]
		const addressLM4DUDW = accounts[4]
		const uintaJ25OL6 = BigInt("100")
		const uintonVZO1A = BigInt("1857")
		const uintKc4zAWL = BigInt("914")
		const uintxU6XcyA = BigInt("430")
		const uint2wWwvu = BigInt("1352")
		const uintiGwPLVI = BigInt("1296")
		const uintKYqy39O = BigInt("149")
//		await Cryptoz6eSqAG.getBonusBoosters.call({from: accounts[3]});
//		const stringNGF2K24 = await Cryptoz6eSqAG.tokenURI.call(uintijx3ult, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbLaXQOA = await Cryptoz6eSqAG.transferFrom.call(addressLM4DUDW, addressRBudVA, uintJTNHQxp, {from: accounts[3]});
//		const boolfQaJKsn = await Cryptoz6eSqAG.addTocardType.call(uint2wWwvu, uintxU6XcyA, uintKc4zAWL, uintonVZO1A, uintaJ25OL6, {from: accounts[0]});
//		const bool5y0bPO = await Cryptoz6eSqAG.openBoosterCard.call(uintiGwPLVI, {from: accounts[4]});
//		await Cryptoz6eSqAG.getOwnedCard.call(uintKYqy39O, {from: accounts[3]});

		await expect(Cryptoz6eSqAG.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const addressNjjQiq = accounts[1]
		const uintm1KXIiR = BigInt("206")
		const uintNeBM2p1 = BigInt("935")
//		await Cryptozd8CRWno.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const addressNre98Sj = await Cryptozd8CRWno.linkMySponsor.call(addressNjjQiq, {from: accounts[1]});
//		const uint256HVTawX = await Cryptozd8CRWno.totalSupply.call({from: accounts[4]});
//		const boolJ12fw4u = await Cryptozd8CRWno.buyCard.call(uintm1KXIiR, {from: accounts[4]});
//		await Cryptozd8CRWno.getOwnedCard.call(uintNeBM2p1, {from: accounts[1]});

		await expect(Cryptozd8CRWno.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const uintSAMSuyg = BigInt("1471")
		const addressEEss62 = accounts[0]
		const addressO4CHPF4 = accounts[2]
		const uintXdNQhMx = BigInt("133")
		const uintfziCrXg = BigInt("2018")
//		const uint256mgMLoZv = await Cryptozd8CRWno.tokenOfOwnerByIndex.call(addressEEss62, uintSAMSuyg, {from: accounts[3]});
//		const uintyvR84vH = await Cryptozd8CRWno.getTimeToDailyBonus.call(addressO4CHPF4, {from: accounts[1]});
//		const stringCmDgmCl = await Cryptozd8CRWno.tokenURI.call(uintXdNQhMx, {from: accounts[4]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintfziCrXg, {from: accounts[4]});

		await expect(Cryptozd8CRWno.tokenOfOwnerByIndex.call(addressEEss62, uintSAMSuyg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLWFnFN5 = await Cryptoz.new({from: accounts[2]});
		const stringUFJrw1J = await CryptozLWFnFN5.symbol.call({from: accounts[4]});
		const stringxSKvOg3 = await CryptozLWFnFN5.name.call({from: accounts[0]});

		assert.equal(stringUFJrw1J, "Cryptoz")
		assert.equal(stringxSKvOg3, "Cryptoz Cards")
	});

	it('test for Cryptoz', async () => {
		const Cryptozd8CRWno = await Cryptoz.new({from: accounts[3]});
		const uintFzxL7K = BigInt("488")
		const uintE8fU6MM = BigInt("2018")
//		const uint32duUbVcr = await Cryptozd8CRWno.isValidCard.call(uintFzxL7K, {from: accounts[0]});
//		const uint256LPIk17z = await Cryptozd8CRWno.sacrifice.call(uintE8fU6MM, {from: accounts[4]});

		await expect(Cryptozd8CRWno.isValidCard.call(uintFzxL7K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozGQuG5JM = await Cryptoz.new({from: accounts[5]});
//		await CryptozGQuG5JM.getBonusBoosters.call({from: accounts[1]});
//		await CryptozGQuG5JM.withdraw.call({from: accounts[5]});

		await expect(CryptozGQuG5JM.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozv70khIz = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const stringNBb0Lt5 = await Cryptozv70khIz.name.call({from: accounts[4]});
		const stringnNHHTE0 = await Cryptozv70khIz.name.call({from: accounts[0]});
	});
})