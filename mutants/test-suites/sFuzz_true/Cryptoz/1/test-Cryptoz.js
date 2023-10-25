const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozMtVL474 = await Cryptoz.new({from: accounts[4]});
		const uintRtxL73Y = BigInt("547")
		const uintrQNNAX1 = BigInt("848")
		const addresstfQk0QW = accounts[1]
		const addressqYGA5Y = accounts[4]
		const addressPLrPrS = accounts[1]
		const addressxqN5AWc = accounts[1]
//		const boolWfJQlKQ = await CryptozMtVL474.buyCard.call(uintRtxL73Y, {from: accounts[1]});
//		const addressxOeuEoa = await CryptozMtVL474.transferFrom.call(addressqYGA5Y, addresstfQk0QW, uintrQNNAX1, {from: "0x0000000000000000000000000000000000000001"});
//		const uintsrqfrbc = await CryptozMtVL474.getTimeToDailyBonus.call(addressPLrPrS, {from: accounts[1]});
//		const uintfbFBqWJ = await CryptozMtVL474.getTimeToDailyBonus.call(addressxqN5AWc, {from: accounts[1]});
//		await CryptozMtVL474.f.call({from: accounts[2]});

		await expect(CryptozMtVL474.buyCard.call(uintRtxL73Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkzWhHSo = await Cryptoz.new({from: accounts[4]});
		const uintXFStGFe = BigInt("1344")
		const uinticPY61b = BigInt("1366")
		const uinthGDd97I = BigInt("369")
		const uintbs4JpU1 = BigInt("653")
		const uintk0LYbsq = BigInt("1575")
		const uint08u2sO = BigInt("168")
		const uintrE6joak = BigInt("3")
		const uintCYsZHR = BigInt("201")
		const stringO9zuMl = "MvuHKp2nFqbg"
		const stringdXfirI1 = "K"
		const uintZPOPvTI = BigInt("19")
//		const uint256VZyrgM7 = await CryptozkzWhHSo.sacrifice.call(uintXFStGFe, {from: accounts[4]});
//		const stringqki3gdu = await CryptozkzWhHSo.tokenURI.call(uinticPY61b, {from: accounts[1]});
//		const boolvQXp838 = await CryptozkzWhHSo.loadNewCardType.call(uintZPOPvTI, stringdXfirI1, stringO9zuMl, uintCYsZHR, uintrE6joak, uint08u2sO, uintk0LYbsq, uintbs4JpU1, uinthGDd97I, {from: accounts[5]});

		await expect(CryptozkzWhHSo.sacrifice.call(uintXFStGFe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGgL0T1 = await Cryptoz.new({from: accounts[2]});
		const uint8xJnUb = BigInt("573")
		const uintYWxaJ8w = BigInt("1474")
		const addressKjyiXfj = accounts[0]
//		await CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]});
//		const uint32ktKOSS = await CryptoztGgL0T1.getFreeCard.call(uint8xJnUb, {from: accounts[1]});
//		await CryptoztGgL0T1.getOwnedCard.call(uintYWxaJ8w, {from: accounts[0]});
//		const addressVypL15Q = await CryptoztGgL0T1.linkMySponsor.call(addressKjyiXfj, {from: accounts[4]});
//		await CryptoztGgL0T1.getBonusBoosters.call({from: accounts[3]});

		await expect(CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTqk6Rzv = await Cryptoz.new({from: accounts[3]});
		const addressPWBLWPP = accounts[1]
		const uintxMeR2N6 = BigInt("949")
		const uintBX7a5u = BigInt("23")
		const uintGGn0af3 = BigInt("19")
		const uintnOnsJ3z = BigInt("141")
		const uintKG85Zae = BigInt("245")
		const uintybMrets = BigInt("102")
		const stringzXEfHvN = "kIWRKqlqTHZUzuQqhgir7yFbtrGHbDDg"
		const stringRqkahZO = "U7vmJgplK7LhioALevE63k9OVJUwSm3dYdD3RWpeYUh0BNL8y"
		const uintzKNi9za = BigInt("85")
		const addresssa0u0ik = accounts[0]
		const uinti7YBwGk = BigInt("1053")
//		const addressedfNKmz = await CryptozTqk6Rzv.initialize.call(addressPWBLWPP, {from: accounts[4]});
//		const boolRxXFuF = await CryptozTqk6Rzv.loadNewCardType.call(uintzKNi9za, stringRqkahZO, stringzXEfHvN, uintybMrets, uintKG85Zae, uintnOnsJ3z, uintGGn0af3, uintBX7a5u, uintxMeR2N6, {from: accounts[4]});
//		const uintT3pLN8E = await CryptozTqk6Rzv.getTimeToDailyBonus.call(addresssa0u0ik, {from: accounts[0]});
//		const uint256ENsgYsg = await CryptozTqk6Rzv.tokenByIndex.call(uinti7YBwGk, {from: accounts[2]});
//		await CryptozTqk6Rzv.getBonusBoosters.call({from: accounts[2]});

		await expect(CryptozTqk6Rzv.initialize.call(addressPWBLWPP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozxpfYek = await Cryptoz.new({from: accounts[0]});
		const addresswREYbIO = accounts[3]
		const uintl7DblqO = BigInt("398")
		const addressOCAeb5R = accounts[2]
		const uintCKVcyjs = BigInt("1037")
//		const addressjuS8cfi = await CryptozxpfYek.linkMySponsor.call(addresswREYbIO, {from: accounts[1]});
//		const stringN88ClFB = await CryptozxpfYek.tokenURI.call(uintl7DblqO, {from: accounts[2]});
//		const addressZML3kyq = await CryptozxpfYek.linkMySponsor.call(addressOCAeb5R, {from: accounts[1]});
//		const boolu9wZVwt = await CryptozxpfYek.buyBoosterCard.call(uintCKVcyjs, {from: accounts[5]});

		await expect(CryptozxpfYek.linkMySponsor.call(addresswREYbIO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozybygEao = await Cryptoz.new({from: accounts[4]});
		const uintD4WoM3f = BigInt("1786")
		const uintJPRJ5ZF = BigInt("2044")
		const uintPY3h8YX = BigInt("1316")
		const uintNLrWvCj = BigInt("61")
		const uintqQNRXob = BigInt("1985")
		const uintghnhAyF = BigInt("99")
		const uintX2tnR50 = BigInt("207")
		const uintLykiumW = BigInt("17")
		const stringWFw5Kb9 = "OgWRNqhUMxJ3MBxvy6cjIHCfifiJJjQCto1nQzCw5dz"
		const stringQjS7mJ = "lPUqCK"
		const uintypu913I = BigInt("118")
//		const boolmtZZ13 = await CryptozybygEao.buyBoosterCard.call(uintD4WoM3f, {from: accounts[1]});
//		await CryptozybygEao.getOwnedCard.call(uintJPRJ5ZF, {from: accounts[1]});
//		const stringvDSWsX = await CryptozybygEao.symbol.call({from: accounts[0]});
//		const boolTwKZKv = await CryptozybygEao.loadNewCardType.call(uintypu913I, stringQjS7mJ, stringWFw5Kb9, uintLykiumW, uintX2tnR50, uintghnhAyF, uintqQNRXob, uintNLrWvCj, uintPY3h8YX, {from: accounts[1]});
//		await CryptozybygEao.buyBoosterCardAndOpen.call({from: accounts[3]});

		await expect(CryptozybygEao.buyBoosterCard.call(uintD4WoM3f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozn4AhRyn = await Cryptoz.new({from: accounts[0]});
		const addressVRrEudV = accounts[0]
		const uint256array0h8pDV = await Cryptozn4AhRyn.tokensOfOwner.call(addressVRrEudV, {from: accounts[1]});
		const stringHAHZvpj = await Cryptozn4AhRyn.name.call({from: accounts[0]});
		const uint256LbLPZaK = await Cryptozn4AhRyn.totalSupply.call({from: accounts[3]});

		assert.equal(stringHAHZvpj, "Cryptoz Cards")
		assert.equal(uint256LbLPZaK, BigInt("0"))
		assert.equal(uint256array0h8pDV, BigInt(""))
	});

	it('test for Cryptoz', async () => {
		const CryptozXeNUTel = await Cryptoz.new({from: accounts[3]});
		const uintSWUT6i3 = BigInt("383")
		const addressj6MyYKu = accounts[4]
		const addressEFrsMzy = accounts[5]
		const stringM3J3S2 = await CryptozXeNUTel.tokenURI.call(uintSWUT6i3, {from: accounts[3]});
//		await CryptozXeNUTel.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressyBd5irp = await CryptozXeNUTel.linkMySponsor.call(addressj6MyYKu, {from: accounts[4]});
//		const uint256arrayGDrHJ8D = await CryptozXeNUTel.tokensOfOwner.call(addressEFrsMzy, {from: accounts[2]});

		assert.equal(stringM3J3S2, "https://cryptoz.cards/data/383")
		await expect(CryptozXeNUTel.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd6lnP2x = await Cryptoz.new({from: accounts[3]});
		const uintDh1rOSO = BigInt("1103")
		const addresskeVLlx0 = accounts[3]
		const uintccMujQ = BigInt("1626")
//		const uint256GfauF9d = await Cryptozd6lnP2x.tokenOfOwnerByIndex.call(addresskeVLlx0, uintDh1rOSO, {from: accounts[3]});
//		const stringvNiR4Sf = await Cryptozd6lnP2x.tokenURI.call(uintccMujQ, {from: accounts[2]});

		await expect(Cryptozd6lnP2x.tokenOfOwnerByIndex.call(addresskeVLlx0, uintDh1rOSO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz8TMx04 = await Cryptoz.new({from: accounts[3]});
		const uintEVF9ma6 = BigInt("542")
		const uintbjHhfM = BigInt("1159")
//		const boolNUUex02 = await Cryptoz8TMx04.openBoosterCard.call(uintEVF9ma6, {from: accounts[5]});
//		const uint256svZGSZ = await Cryptoz8TMx04.sacrifice.call(uintbjHhfM, {from: "0x0000000000000000000000000000000000000001"});
//		await Cryptoz8TMx04.f.call({from: accounts[3]});

		await expect(Cryptoz8TMx04.openBoosterCard.call(uintEVF9ma6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd6lnP2x = await Cryptoz.new({from: accounts[3]});
		const uintzgwcF8d = BigInt("1626")
		const uintfbRIAB2 = BigInt("573")
//		await Cryptozd6lnP2x.getTokensByRarity.call({from: accounts[1]});
//		const stringvNiR4Sf = await Cryptozd6lnP2x.tokenURI.call(uintzgwcF8d, {from: accounts[2]});
//		const stringqsVLta9 = await Cryptozd6lnP2x.tokenURI.call(uintfbRIAB2, {from: accounts[0]});

		await expect(Cryptozd6lnP2x.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd6lnP2x = await Cryptoz.new({from: accounts[3]});
		const uintgn6lykv = BigInt("27")
		const addresskuWVcC = accounts[0]
		const uintp4No3bT = BigInt("1103")
		const addressO6HfAV = accounts[4]
		const uint9foGMg = BigInt("1626")
		const stringOhRHfLO = await Cryptozd6lnP2x.tokenURI.call(uintgn6lykv, {from: accounts[3]});
		const addressVQs2C7 = await Cryptozd6lnP2x.initialize.call(addresskuWVcC, {from: accounts[3]});
//		const uint256GfauF9d = await Cryptozd6lnP2x.tokenOfOwnerByIndex.call(addressO6HfAV, uintp4No3bT, {from: accounts[3]});
//		const stringvNiR4Sf = await Cryptozd6lnP2x.tokenURI.call(uint9foGMg, {from: accounts[2]});

		assert.equal(stringOhRHfLO, "https://cryptoz.cards/data/27")
		await expect(Cryptozd6lnP2x.tokenOfOwnerByIndex.call(addressO6HfAV, uintp4No3bT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozvbxvHdV = await Cryptoz.new({from: accounts[4]});
		const uintgDpuz3b = BigInt("571")
		const addressSVSGY4L = accounts[0]
		const addressf2EvfMb = accounts[2]
		const uintL6URVsN = BigInt("1225")
		const addressGU5qytv = accounts[0]
//		const addressWJeA97o = await CryptozvbxvHdV.transferFrom.call(addressf2EvfMb, addressSVSGY4L, uintgDpuz3b, {from: accounts[2]});
//		const uint256jzgwAYG = await CryptozvbxvHdV.tokenOfOwnerByIndex.call(addressGU5qytv, uintL6URVsN, {from: accounts[3]});
//		await CryptozvbxvHdV.f.call({from: accounts[1]});
//		await CryptozvbxvHdV.f.call({from: accounts[4]});

		await expect(CryptozvbxvHdV.transferFrom.call(addressf2EvfMb, addressSVSGY4L, uintgDpuz3b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd6lnP2x = await Cryptoz.new({from: accounts[3]});
		const uintXDj83se = BigInt("749")
		const uintpoFHQ9 = BigInt("511")
		const uintlUQTWGI = BigInt("1103")
		const addressVx052Iq = accounts[3]
		const uintj9wcSSr = BigInt("1620")
//		await Cryptozd6lnP2x.getOwnedCard.call(uintXDj83se, {from: accounts[1]});
//		const boolSPAdbdp = await Cryptozd6lnP2x.openBoosterCard.call(uintpoFHQ9, {from: accounts[4]});
//		const uint256GfauF9d = await Cryptozd6lnP2x.tokenOfOwnerByIndex.call(addressVx052Iq, uintlUQTWGI, {from: accounts[3]});
//		const stringvNiR4Sf = await Cryptozd6lnP2x.tokenURI.call(uintj9wcSSr, {from: accounts[2]});

		await expect(Cryptozd6lnP2x.getOwnedCard.call(uintXDj83se, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozx9YQpbF = await Cryptoz.new({from: accounts[2]});
		const uintTBQNlKP = BigInt("1530")
		const stringZpVd4iK = await Cryptozx9YQpbF.symbol.call({from: accounts[0]});
//		const booli9IoADb = await Cryptozx9YQpbF.openBoosterCard.call(uintTBQNlKP, {from: accounts[3]});

		assert.equal(stringZpVd4iK, "Cryptoz")
		await expect(Cryptozx9YQpbF.openBoosterCard.call(uintTBQNlKP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeforRDP = await Cryptoz.new({from: accounts[1]});
		const uintuPf4W2W = BigInt("447")
		const uintG04MyUQ = BigInt("1143")
		const uintQ5Mgk8Z = BigInt("53")
		const uinttVYHWtg = BigInt("1059")
		const uintRtR2zCm = BigInt("254")
		const uintjnsqetW = BigInt("30")
		const uintAuJYw4s = BigInt("29")
		const stringFMgjvQ = "YFJ9yB9xJvSyixpSfiw9FhDASWMVurYqTjQPi7oFw54NOvoq7kTwBrKRUFY4I31tkNhQG1QljeX9qRsPMIw4N"
		const stringM63oxi7 = "9yGmWAGixenFWaLDdPhsfcI"
		const uintdIpFMq5 = BigInt("184")
		const stringKbH1nrs = await CryptozeforRDP.symbol.call({from: accounts[5]});
//		const uint32O6XOQs6 = await CryptozeforRDP.isValidCard.call(uintuPf4W2W, {from: accounts[3]});
//		const uint2565xF4oI = await CryptozeforRDP.totalSupply.call({from: accounts[0]});
//		await CryptozeforRDP.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const boolNw9DkYu = await CryptozeforRDP.loadNewCardType.call(uintdIpFMq5, stringM63oxi7, stringFMgjvQ, uintAuJYw4s, uintjnsqetW, uintRtR2zCm, uinttVYHWtg, uintQ5Mgk8Z, uintG04MyUQ, {from: accounts[4]});

		assert.equal(stringKbH1nrs, "Cryptoz")
		await expect(CryptozeforRDP.isValidCard.call(uintuPf4W2W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGgL0T1 = await Cryptoz.new({from: accounts[2]});
//		await CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]});
//		await CryptoztGgL0T1.buyBoosterCardAndOpen.call({from: accounts[3]});

		await expect(CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz8TMx04 = await Cryptoz.new({from: accounts[3]});
		const uinthvtYVhF = BigInt("155")
		const uintC5AbCvo = BigInt("1177")
		const uintngKDtgz = BigInt("392")
		const uintwr6Eqn = BigInt("1678")
		const uintpsAeJhC = BigInt("1391")
		const uintFQBPaYg = BigInt("1239")
//		const boolsh4ToHP = await Cryptoz8TMx04.addTocardType.call(uintpsAeJhC, uintwr6Eqn, uintngKDtgz, uintC5AbCvo, uinthvtYVhF, {from: accounts[3]});
//		const boolNUUex02 = await Cryptoz8TMx04.openBoosterCard.call(uintFQBPaYg, {from: accounts[5]});

		await expect(Cryptoz8TMx04.addTocardType.call(uintpsAeJhC, uintwr6Eqn, uintngKDtgz, uintC5AbCvo, uinthvtYVhF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbBAncTN = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXDq0YO0 = "0x0000000000000000000000000000000000000001"
		const addressAMowGeG = accounts[2]
		const uintLb5xxFz = BigInt("982")
		const uintpYLTQKV = BigInt("1948")
		const uintsmLHADs = BigInt("154")
		const uintgOV2Yk9 = BigInt("163")
		const uintoQdzbFy = BigInt("1857")
		const uintkOfVAu = BigInt("179")
		const uintrUASijT = BigInt("229")
		const uintU9Nxch = BigInt("202")
		const stringBh7bchQ = "rqWRvWouHI1RgwJazAZxV4iBKULpk3Nm6K5CbIfmRZsRuMDIlGVZawwGsuFRRSwblJ6l4OHOtnKErYIShaJAnMw"
		const stringooJr0Af = "HpVkACZ8R2jhrLmNe6gnGhOMuzVpaLbdUd84AG0w4JCvpgez8d3eNVXYMQcAKAXnuVpPnKskl4kpIN7fN"
		const uintejMko63 = BigInt("250")
		const uint0b2nx4 = BigInt("738")
		const uint256arraypOka7TS = await CryptozbBAncTN.tokensOfOwner.call(addressXDq0YO0, {from: accounts[0]});
		const addressgmpzQYg = await CryptozbBAncTN.linkMySponsor.call(addressAMowGeG, {from: accounts[1]});
		const boolxFJuqyS = await CryptozbBAncTN.buyCard.call(uintLb5xxFz, {from: accounts[0]});
		const uint256HDPZ7EN = await CryptozbBAncTN.tokenByIndex.call(uintpYLTQKV, {from: accounts[4]});
		const booltqHCz2U = await CryptozbBAncTN.loadNewCardType.call(uintejMko63, stringooJr0Af, stringBh7bchQ, uintU9Nxch, uintrUASijT, uintkOfVAu, uintoQdzbFy, uintgOV2Yk9, uintsmLHADs, {from: accounts[4]});
		const boolD15Msk2 = await CryptozbBAncTN.openBoosterCard.call(uint0b2nx4, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptoztGgL0T1 = await Cryptoz.new({from: accounts[2]});
//		await CryptoztGgL0T1.withdraw.call({from: accounts[2]});
//		await CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]});

		await expect(CryptoztGgL0T1.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGgL0T1 = await Cryptoz.new({from: accounts[2]});
		const uinto2kHae = BigInt("965")
//		await CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]});
//		const uint256Mmy4O25 = await CryptoztGgL0T1.tokenByIndex.call(uinto2kHae, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGgL0T1 = await Cryptoz.new({from: accounts[2]});
		const uintggjP2Wr = BigInt("652")
		const uintQqnCoTL = BigInt("623")
		const uint6a7k1J = BigInt("1151")
		const uintNnG5qp = BigInt("213")
		const uintFyA2kx6 = BigInt("118")
		const uintFa07eXd = BigInt("135")
		const stringvmTmSY = "VgJiAaTkphGGv5qShMbDWE5TcrmKEdulRLEji4RRbHMIhe0vjOiWvhyOp5ONhFrwDy9gQsvnVDUNLpmzdHPBy82T5cMnMhqbCw"
		const stringETbGWch = "Rhg0vO84fvTLQSxI4N4gYCeqeegOXV7pDQZ"
		const uintvGZGSt8 = BigInt("22")
		const uinteq0bcdg = BigInt("666")
		const boolLGhbxqW = await CryptoztGgL0T1.loadNewCardType.call(uintvGZGSt8, stringETbGWch, stringvmTmSY, uintFa07eXd, uintFyA2kx6, uintNnG5qp, uint6a7k1J, uintQqnCoTL, uintggjP2Wr, {from: accounts[2]});
//		await CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]});
//		const bool5JjzbU = await CryptoztGgL0T1.buyBoosterCard.call(uinteq0bcdg, {from: accounts[0]});

		assert.equal(boolLGhbxqW, true)
		await expect(CryptoztGgL0T1.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})