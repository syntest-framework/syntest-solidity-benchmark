const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptoziZ3wftk = await Cryptoz.new({from: accounts[2]});
		const uintBpjKAN = BigInt("1111")
		const uintJptr4Er = BigInt("1414")
		const uintLw5FXSr = BigInt("762")
		const uintU5nAWWt = BigInt("14")
		const uintNrm1oS6 = BigInt("82")
		const uintqVgpaEG = BigInt("157")
		const stringdK6z7X = "mr2Dwmt7A4nhBkiJNgtGwyIX6GBwaD6xPIyNYAiq4s"
		const stringAfrdOu = "dHeTE7aAtbjm3MaWjPrnAPAFQcuPJh2sa8h7oGBklP7qVYL"
		const uint9zTEup = BigInt("200")
		const addressWO4K3w9 = accounts[0]
//		await CryptoziZ3wftk.buyBoosterCardAndOpen.call({from: accounts[5]});
//		const boolfLvP25 = await CryptoziZ3wftk.loadNewCardType.call(uint9zTEup, stringAfrdOu, stringdK6z7X, uintqVgpaEG, uintNrm1oS6, uintU5nAWWt, uintLw5FXSr, uintJptr4Er, uintBpjKAN, {from: accounts[0]});
//		const uintdDtcXR8 = await CryptoziZ3wftk.getTimeToDailyBonus.call(addressWO4K3w9, {from: accounts[2]});
//		const uint256BZhMOU4 = await CryptoziZ3wftk.totalSupply.call({from: accounts[5]});

		await expect(CryptoziZ3wftk.buyBoosterCardAndOpen.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozPIvZRVx = await Cryptoz.new({from: accounts[4]});
		const uintkEot9N = BigInt("1982")
		const addressxYr9pFR = accounts[4]
		const addressSv73SwH = accounts[4]
		const uintOxYDPOX = BigInt("708")
		const addresslqyTRbj = accounts[2]
		const uintoOF31nX = BigInt("1874")
		const addressQQ8WH0L = accounts[4]
		const addressP5hbfv = accounts[1]
		const uinttzcoOCI = BigInt("1203")
		const addressJWEuXgK = accounts[4]
		const addressjnEnBE9 = accounts[0]
//		const addressLKQqHPs = await CryptozPIvZRVx.transferFrom.call(addressSv73SwH, addressxYr9pFR, uintkEot9N, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEozAkbx = await CryptozPIvZRVx.openBoosterCard.call(uintOxYDPOX, {from: accounts[4]});
//		await CryptozPIvZRVx.getTokensByRarity.call({from: accounts[3]});
//		const uint256arrayNHYE8Ns = await CryptozPIvZRVx.tokensOfOwner.call(addresslqyTRbj, {from: accounts[3]});
//		const addressVawVqOc = await CryptozPIvZRVx.transferFrom.call(addressP5hbfv, addressQQ8WH0L, uintoOF31nX, {from: "0x0000000000000000000000000000000000000001"});
//		const addressfOPGSqJ = await CryptozPIvZRVx.transferFrom.call(addressjnEnBE9, addressJWEuXgK, uinttzcoOCI, {from: accounts[5]});

		await expect(CryptozPIvZRVx.transferFrom.call(addressSv73SwH, addressxYr9pFR, uintkEot9N, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHHESHf8 = await Cryptoz.new({from: accounts[0]});
		const uintsaRzMvE = BigInt("1013")
		const uintXfro12e = BigInt("949")
		const uintWsfQXLY = BigInt("995")
		const addressbVQ5YH2 = "0x0000000000000000000000000000000000000001"
		const addressoKABFiw = accounts[1]
		const uintTAe8tIn = BigInt("500")
		const uintor6g2Zm = BigInt("1505")
//		const uint32IK64ZhS = await CryptozHHESHf8.isValidCard.call(uintsaRzMvE, {from: accounts[3]});
//		const boolK8glbTS = await CryptozHHESHf8.buyBoosterCard.call(uintXfro12e, {from: accounts[0]});
//		const addresstvFmY8O = await CryptozHHESHf8.transferFrom.call(addressoKABFiw, addressbVQ5YH2, uintWsfQXLY, {from: accounts[5]});
//		const boolMT11rE3 = await CryptozHHESHf8.buyCard.call(uintTAe8tIn, {from: accounts[2]});
//		const uint256Z2vihf = await CryptozHHESHf8.tokenByIndex.call(uintor6g2Zm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozHHESHf8.isValidCard.call(uintsaRzMvE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozW0J5dGV = await Cryptoz.new({from: accounts[2]});
		const uintAm0YWX = BigInt("261")
//		await CryptozW0J5dGV.f.call({from: accounts[4]});
//		const boolKZIcqVG = await CryptozW0J5dGV.buyCard.call(uintAm0YWX, {from: accounts[0]});
//		await CryptozW0J5dGV.buyBoosterCardAndOpen.call({from: accounts[4]});

		await expect(CryptozW0J5dGV.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozew0VuX9 = await Cryptoz.new({from: accounts[4]});
		const uint5Kg6ed = BigInt("210")
		const uintcVGWu5L = BigInt("1698")
		const uintpbggzpz = BigInt("624")
		const uintHy4QLj3 = BigInt("1410")
		const uint3RF9Vi = BigInt("1433")
		const uintVXB8xmR = BigInt("192")
		const uintqmmWRPt = BigInt("240")
		const uintsfYSTU6 = BigInt("76")
		const uintatGFpiX = BigInt("222")
		const uintjCHH4LV = BigInt("82")
		const uintW89wQwY = BigInt("175")
		const stringmSmbJmZ = "mkcEmjsMxnu536YJKLsbuHVP2nRVG5zD3NdexvHKzn43MHEdTDVpTlUCrhCRXaNnzJd8NBNJrb"
		const string8HsmtL = "eSCKnF8EM2kylifGDPX42Un0FFSqRRzvX7PsK6cUa9nzzRnPLDSesGzyoF0TQL3VYmYFJ5TexI3KsV57eu"
		const uintzDqesL6 = BigInt("150")
//		const booljb3BLj1 = await Cryptozew0VuX9.addTocardType.call(uint3RF9Vi, uintHy4QLj3, uintpbggzpz, uintcVGWu5L, uint5Kg6ed, {from: accounts[0]});
//		const uint256RqKTEaM = await Cryptozew0VuX9.totalSupply.call({from: accounts[2]});
//		const booliBf1OlN = await Cryptozew0VuX9.loadNewCardType.call(uintzDqesL6, string8HsmtL, stringmSmbJmZ, uintW89wQwY, uintjCHH4LV, uintatGFpiX, uintsfYSTU6, uintqmmWRPt, uintVXB8xmR, {from: accounts[1]});
//		const stringO933wM = await Cryptozew0VuX9.name.call({from: accounts[3]});

		await expect(Cryptozew0VuX9.addTocardType.call(uint3RF9Vi, uintHy4QLj3, uintpbggzpz, uintcVGWu5L, uint5Kg6ed, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeLo7KD = await Cryptoz.new({from: accounts[3]});
		const uintlnkcLUB = BigInt("1737")
		const uintAsZsa7l = BigInt("1787")
//		const uint256g3hC6Qo = await CryptozeLo7KD.tokenByIndex.call(uintlnkcLUB, {from: accounts[0]});
//		const stringzvVK8jc = await CryptozeLo7KD.symbol.call({from: accounts[4]});
//		const stringykBUuv2 = await CryptozeLo7KD.name.call({from: accounts[2]});
//		const boolxeUyArC = await CryptozeLo7KD.buyCard.call(uintAsZsa7l, {from: accounts[4]});
//		await CryptozeLo7KD.f.call({from: accounts[2]});

		await expect(CryptozeLo7KD.tokenByIndex.call(uintlnkcLUB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJx6o8lB = await Cryptoz.new({from: accounts[2]});
		const addressgRjPD6 = accounts[2]
		const uintmexc3f = BigInt("1467")
//		await CryptozJx6o8lB.getTokensByRarity.call({from: accounts[1]});
//		const addressaPkE9ip = await CryptozJx6o8lB.linkMySponsor.call(addressgRjPD6, {from: accounts[3]});
//		const stringd1V5FZ0 = await CryptozJx6o8lB.tokenURI.call(uintmexc3f, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozJx6o8lB.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintZmo5I87 = BigInt("1018")
		const addressUeT50Bf = accounts[3]
		const uintTSTh7FC = BigInt("608")
		const uintkeZmuxz = BigInt("81")
		const uinthYbZEFe = BigInt("1594")
		const uintAlHkA3z = BigInt("1011")
		const uintDlYh2VN = BigInt("1272")
		const uintMCnMx0B = BigInt("1104")
//		await CryptozIrmAES1.getBonusBoosters.call({from: accounts[3]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintZmo5I87, {from: accounts[4]});
//		const addresshcPCneX = await CryptozIrmAES1.initialize.call(addressUeT50Bf, {from: accounts[2]});
//		const boolA2Fhbq2 = await CryptozIrmAES1.buyBoosterCard.call(uintTSTh7FC, {from: accounts[4]});
//		const boolg67Ukao = await CryptozIrmAES1.addTocardType.call(uintMCnMx0B, uintDlYh2VN, uintAlHkA3z, uinthYbZEFe, uintkeZmuxz, {from: accounts[2]});
//		await CryptozIrmAES1.buyBoosterCardAndOpen.call({from: accounts[2]});

		await expect(CryptozIrmAES1.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintHBHeyr8 = BigInt("1553")
		const addressAOdfEc = accounts[1]
		const uintp9mOdrg = BigInt("1018")
		const uintuwVDZms = BigInt("81")
		const uintd3bJ4yc = BigInt("1594")
		const uint2DK1BO = BigInt("1011")
		const uintpcczfmD = BigInt("1244")
		const uintJgmI2oK = BigInt("1110")
//		const uint256jnGsg6A = await CryptozIrmAES1.sacrifice.call(uintHBHeyr8, {from: accounts[2]});
//		const addresso4USJZz = await CryptozIrmAES1.linkMySponsor.call(addressAOdfEc, {from: accounts[3]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintp9mOdrg, {from: accounts[4]});
//		const boolg67Ukao = await CryptozIrmAES1.addTocardType.call(uintJgmI2oK, uintpcczfmD, uint2DK1BO, uintd3bJ4yc, uintuwVDZms, {from: accounts[2]});
//		await CryptozIrmAES1.buyBoosterCardAndOpen.call({from: accounts[2]});

		await expect(CryptozIrmAES1.sacrifice.call(uintHBHeyr8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintCLUQ578 = BigInt("1447")
		const stringhMToJxW = await CryptozIrmAES1.symbol.call({from: accounts[2]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintCLUQ578, {from: accounts[4]});

		assert.equal(stringhMToJxW, "Cryptoz")
		await expect(CryptozIrmAES1.getFreeCard.call(uintCLUQ578, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const addressyMKnU0W = accounts[2]
		const uintwuh2uCz = BigInt("1719")
		const uintCmQC7LX = BigInt("1473")
		const uintz1uoGkg = await CryptozIrmAES1.getTimeToDailyBonus.call(addressyMKnU0W, {from: accounts[4]});
//		await CryptozIrmAES1.getOwnedCard.call(uintwuh2uCz, {from: accounts[4]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintCmQC7LX, {from: accounts[4]});

		assert.equal(uintz1uoGkg, BigInt("1630203923"))
		await expect(CryptozIrmAES1.getOwnedCard.call(uintwuh2uCz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintn1wf36R = BigInt("134")
		const addressZSZCkVv = accounts[1]
		const uintiCPWUbm = BigInt("1449")
//		const booln5WODdv = await CryptozIrmAES1.buyBoosterCard.call(uintn1wf36R, {from: accounts[0]});
//		const addressH487nnp = await CryptozIrmAES1.initialize.call(addressZSZCkVv, {from: accounts[5]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintiCPWUbm, {from: accounts[4]});

		await expect(CryptozIrmAES1.buyBoosterCard.call(uintn1wf36R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintEUrjw0y = BigInt("1451")
//		await CryptozIrmAES1.getTokensByRarity.call({from: accounts[3]});
//		const stringm2rZchP = await CryptozIrmAES1.name.call({from: accounts[1]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintEUrjw0y, {from: accounts[4]});

		await expect(CryptozIrmAES1.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintlNPKUZf = BigInt("1276")
		const uintAc6qk7F = BigInt("1060")
		const addressZptjXC = accounts[2]
		const uintUi5fDzt = BigInt("1451")
		const stringvilqOu = await CryptozIrmAES1.tokenURI.call(uintlNPKUZf, {from: accounts[0]});
//		const uint256f549qhI = await CryptozIrmAES1.tokenOfOwnerByIndex.call(addressZptjXC, uintAc6qk7F, {from: accounts[2]});
//		await CryptozIrmAES1.getTokensByRarity.call({from: accounts[0]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uintUi5fDzt, {from: accounts[4]});

		assert.equal(stringvilqOu, "https://cryptoz.cards/data/1276")
		await expect(CryptozIrmAES1.tokenOfOwnerByIndex.call(addressZptjXC, uintAc6qk7F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintSj8Gz24 = BigInt("1712")
		const uinth8FqYlj = BigInt("1441")
//		const boolUVXkDRt = await CryptozIrmAES1.openBoosterCard.call(uintSj8Gz24, {from: accounts[4]});
//		const uint32yke1GI = await CryptozIrmAES1.getFreeCard.call(uinth8FqYlj, {from: accounts[4]});

		await expect(CryptozIrmAES1.openBoosterCard.call(uintSj8Gz24, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozitvRtRu = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		await CryptozitvRtRu.getTokensByRarity.call({from: accounts[1]});
		await CryptozitvRtRu.buyBoosterCardAndOpen.call({from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const addresszKEonH8 = accounts[1]
		const uint256arraywS2zUCC = await CryptozIrmAES1.tokensOfOwner.call(addresszKEonH8, {from: accounts[3]});
//		await CryptozIrmAES1.getTokensByRarity.call({from: accounts[5]});
//		await CryptozIrmAES1.getBonusBoosters.call({from: accounts[5]});

		assert.equal(uint256arraywS2zUCC, BigInt(""))
		await expect(CryptozIrmAES1.getTokensByRarity.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const addressZt8VNNF = accounts[3]
		const addressnyWIvV0 = accounts[3]
		const uintWWStT3m = BigInt("1440")
		const uintAo6fbqR = BigInt("1524")
		const uintm9LEfhZ = BigInt("1833")
		const uintcZSZtK3 = BigInt("160")
		const uintmDkMUyT = BigInt("167")
		const uintArcp8X0 = BigInt("116")
		const stringkIbpGOR = "rXt63GC3kcuFRsmrEFSjAE24rAp"
		const stringOvbqkMn = "fw5AudOjos9KyrRgsvUO"
		const uintQHiUyXL = BigInt("15")
//		await CryptozIrmAES1.getBonusBoosters.call({from: accounts[5]});
//		const uinth6sT79c = await CryptozIrmAES1.getTimeToDailyBonus.call(addressZt8VNNF, {from: accounts[0]});
//		const address7D5aJC = await CryptozIrmAES1.initialize.call(addressnyWIvV0, {from: accounts[3]});
//		const booljF3DFQK = await CryptozIrmAES1.loadNewCardType.call(uintQHiUyXL, stringOvbqkMn, stringkIbpGOR, uintArcp8X0, uintmDkMUyT, uintcZSZtK3, uintm9LEfhZ, uintAo6fbqR, uintWWStT3m, {from: accounts[2]});

		await expect(CryptozIrmAES1.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintypMWClo = BigInt("210")
		const uintPi3i4j = BigInt("1294")
		const uint4si76v = BigInt("1591")
		const uintJl0KR7D = BigInt("1896")
		const uintXg1MQCq = BigInt("1609")
		const uintmDMXHgZ = BigInt("1801")
//		await CryptozIrmAES1.getBonusBoosters.call({from: accounts[5]});
//		const boolVkTG6yk = await CryptozIrmAES1.addTocardType.call(uintXg1MQCq, uintJl0KR7D, uint4si76v, uintPi3i4j, uintypMWClo, {from: accounts[3]});
//		const boolyMrBhm6 = await CryptozIrmAES1.buyBoosterCard.call(uintmDMXHgZ, {from: accounts[0]});

		await expect(CryptozIrmAES1.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIrmAES1 = await Cryptoz.new({from: accounts[3]});
		const uintYCwns0 = BigInt("743")
		const uintDbx9npa = BigInt("1502")
		const stringYiiHKSu = await CryptozIrmAES1.tokenURI.call(uintYCwns0, {from: accounts[0]});
//		await CryptozIrmAES1.withdraw.call({from: accounts[3]});
//		await CryptozIrmAES1.getBonusBoosters.call({from: accounts[5]});
//		const uint256PbMuSdX = await CryptozIrmAES1.tokenByIndex.call(uintDbx9npa, {from: accounts[4]});

		assert.equal(stringYiiHKSu, "https://cryptoz.cards/data/743")
		await expect(CryptozIrmAES1.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozw5FbL0 = await Cryptoz.new({from: accounts[3]});
		const uintyLdR9ve = BigInt("1589")
		const uintDnxSCiJ = BigInt("442")
		const uintkQUJKY7 = BigInt("414")
		const uintZpThpVr = BigInt("232")
		const uintqnYBRS = BigInt("178")
		const uintahEQNS = BigInt("76")
		const stringVibnkmv = "5SyfG3UC6hkS1GGqGBDJZdDQAHQrwoWJAQVs0sC8F8CFeOadX1O1Cwp4r8qO1TSxH6rOQy"
		const stringihk9RPE = "7dTc5L3Uw15mxLr4LmpUpcWXdx2b7WhcqjwGV2UnBaVL45AWQWfJkwUFhmIVdk1sAhVC5vz4KqkgBNuvsIHFQIOsJb3PCT"
		const uintOrkx5ZJ = BigInt("13")
		const uintGldsJUM = BigInt("1853")
		const boolVbhdkCs = await Cryptozw5FbL0.loadNewCardType.call(uintOrkx5ZJ, stringihk9RPE, stringVibnkmv, uintahEQNS, uintqnYBRS, uintZpThpVr, uintkQUJKY7, uintDnxSCiJ, uintyLdR9ve, {from: accounts[3]});
//		const boolORyqdgn = await Cryptozw5FbL0.buyCard.call(uintGldsJUM, {from: accounts[2]});
//		await Cryptozw5FbL0.f.call({from: accounts[3]});
//		await Cryptozw5FbL0.getBonusBoosters.call({from: accounts[2]});

		assert.equal(boolVbhdkCs, true)
		await expect(Cryptozw5FbL0.buyCard.call(uintGldsJUM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})