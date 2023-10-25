const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozX6TrxNH = await Cryptoz.new({from: accounts[0]});
		const uintsuW9Qm1 = BigInt("1742")
		const addressQZfhtL = accounts[2]
		const addresshhxrosT = accounts[1]
		const addressZFk3g9K = accounts[2]
		const addressGAE5ZI = accounts[1]
		const uintgjLsvdY = BigInt("1836")
//		const addressh1rjUUV = await CryptozX6TrxNH.transferFrom.call(addresshhxrosT, addressQZfhtL, uintsuW9Qm1, {from: accounts[3]});
//		const uintoDwpKxJ = await CryptozX6TrxNH.getTimeToDailyBonus.call(addressZFk3g9K, {from: accounts[5]});
//		const uintHiwmwiW = await CryptozX6TrxNH.getTimeToDailyBonus.call(addressGAE5ZI, {from: accounts[2]});
//		const uint256u53hHPa = await CryptozX6TrxNH.totalSupply.call({from: accounts[5]});
//		const uint256g3PzOOu = await CryptozX6TrxNH.sacrifice.call(uintgjLsvdY, {from: accounts[0]});
//		await CryptozX6TrxNH.getTokensByRarity.call({from: accounts[2]});

		await expect(CryptozX6TrxNH.transferFrom.call(addresshhxrosT, addressQZfhtL, uintsuW9Qm1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNsjC9Nw = await Cryptoz.new({from: accounts[5]});
		const uintVtucGK7 = BigInt("1812")
//		await CryptozNsjC9Nw.getOwnedCard.call(uintVtucGK7, {from: accounts[1]});
//		await CryptozNsjC9Nw.f.call({from: accounts[3]});
//		await CryptozNsjC9Nw.buyBoosterCardAndOpen.call({from: accounts[5]});

		await expect(CryptozNsjC9Nw.getOwnedCard.call(uintVtucGK7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uintx7HOcO7 = BigInt("1164")
		const uint8G5vYk = BigInt("1448")
		const addressUmaIXRm = "0x0000000000000000000000000000000000000001"
//		const boollTr1AqA = await CryptozTT3uQh7.openBoosterCard.call(uintx7HOcO7, {from: accounts[4]});
//		const uint256i2h6a8O = await CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressUmaIXRm, uint8G5vYk, {from: accounts[0]});

		await expect(CryptozTT3uQh7.openBoosterCard.call(uintx7HOcO7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoziAqy7wd = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZnQqJwE = BigInt("1934")
		const uintx1eTjKq = BigInt("955")
		const boolUy11bH = await CryptoziAqy7wd.buyCard.call(uintZnQqJwE, {from: accounts[5]});
		const uint32PbsC9jD = await CryptoziAqy7wd.isValidCard.call(uintx1eTjKq, {from: accounts[3]});
		await CryptoziAqy7wd.withdraw.call({from: accounts[3]});
		const uint256TWlx9yC = await CryptoziAqy7wd.totalSupply.call({from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptozlXlpAEf = await Cryptoz.new({from: accounts[3]});
		const uintgVVcUCC = BigInt("940")
		const stringzJppbAU = await CryptozlXlpAEf.tokenURI.call(uintgVVcUCC, {from: accounts[2]});
//		await CryptozlXlpAEf.buyBoosterCardAndOpen.call({from: accounts[2]});
//		await CryptozlXlpAEf.getTokensByRarity.call({from: accounts[3]});

		assert.equal(stringzJppbAU, "https://cryptoz.cards/data/940")
		await expect(CryptozlXlpAEf.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfdPw5cM = await Cryptoz.new({from: accounts[5]});
		const uintJ5RUi3d = BigInt("1363")
		const uintlvhekE9 = BigInt("982")
		const uintZpD0UPj = BigInt("1965")
//		const uint256bIVLqPN = await CryptozfdPw5cM.sacrifice.call(uintJ5RUi3d, {from: accounts[5]});
//		const boolspjSzRo = await CryptozfdPw5cM.openBoosterCard.call(uintlvhekE9, {from: accounts[1]});
//		const uint32RtnANfO = await CryptozfdPw5cM.isValidCard.call(uintZpD0UPj, {from: accounts[4]});

		await expect(CryptozfdPw5cM.sacrifice.call(uintJ5RUi3d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozH4x8Dau = await Cryptoz.new({from: accounts[2]});
		const uintdg9ABqa = BigInt("782")
		const uintVS6ELRI = BigInt("250")
		const uintzoJ4yOL = BigInt("604")
		const uintH5M3SOf = BigInt("857")
		const uintNnRhjBM = BigInt("1456")
		const uintGGdkprk = BigInt("678")
//		const uint32cKL9Rtc = await CryptozH4x8Dau.isValidCard.call(uintdg9ABqa, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozH4x8Dau.getBonusBoosters.call({from: accounts[3]});
//		const boolQOMG4N5 = await CryptozH4x8Dau.addTocardType.call(uintGGdkprk, uintNnRhjBM, uintH5M3SOf, uintzoJ4yOL, uintVS6ELRI, {from: accounts[2]});

		await expect(CryptozH4x8Dau.isValidCard.call(uintdg9ABqa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozlXlpAEf = await Cryptoz.new({from: accounts[3]});
		const uintGqvuiWi = BigInt("940")
		const addressFJEt1v9 = accounts[1]
		const stringzJppbAU = await CryptozlXlpAEf.tokenURI.call(uintGqvuiWi, {from: accounts[2]});
//		const addressrPmCLkQ = await CryptozlXlpAEf.linkMySponsor.call(addressFJEt1v9, {from: accounts[0]});
//		await CryptozlXlpAEf.getTokensByRarity.call({from: accounts[0]});
//		await CryptozlXlpAEf.buyBoosterCardAndOpen.call({from: accounts[2]});
//		await CryptozlXlpAEf.getTokensByRarity.call({from: accounts[3]});
//		await CryptozlXlpAEf.buyBoosterCardAndOpen.call({from: accounts[5]});

		assert.equal(stringzJppbAU, "https://cryptoz.cards/data/940")
		await expect(CryptozlXlpAEf.linkMySponsor.call(addressFJEt1v9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz6jMkwe = await Cryptoz.new({from: accounts[2]});
//		await Cryptozz6jMkwe.getBonusBoosters.call({from: accounts[5]});

		await expect(Cryptozz6jMkwe.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz6jMkwe = await Cryptoz.new({from: accounts[2]});
//		await Cryptozz6jMkwe.getBonusBoosters.call({from: accounts[5]});
//		await Cryptozz6jMkwe.f.call({from: accounts[4]});

		await expect(Cryptozz6jMkwe.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz6jMkwe = await Cryptoz.new({from: accounts[2]});
		const uintdxMUJkO = BigInt("1792")
		const addressMmHwY7 = accounts[0]
		const uintTBBM4QI = BigInt("2001")
		const addressDmI0TZ = accounts[0]
		const addressOlYw8vn = accounts[1]
//		const uint256a8yHQ6p = await Cryptozz6jMkwe.tokenOfOwnerByIndex.call(addressMmHwY7, uintdxMUJkO, {from: accounts[3]});
//		const addressE6fwTeo = await Cryptozz6jMkwe.transferFrom.call(addressOlYw8vn, addressDmI0TZ, uintTBBM4QI, {from: accounts[1]});
//		await Cryptozz6jMkwe.getBonusBoosters.call({from: accounts[4]});

		await expect(Cryptozz6jMkwe.tokenOfOwnerByIndex.call(addressMmHwY7, uintdxMUJkO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDqbCV6U = await Cryptoz.new({from: accounts[3]});
		const addressXhIxW5M = accounts[1]
		const uintHDvne2 = BigInt("688")
		const addresspJ35ie1 = "0x0000000000000000000000000000000000000001"
		const addressc4bVLvE = accounts[4]
		const addressg3yFeTW = accounts[1]
		const addressW8KYbA = accounts[4]
		const addressyszcyui = accounts[5]
		const uint256arrayB2OE9eJ = await CryptozDqbCV6U.tokensOfOwner.call(addressXhIxW5M, {from: accounts[4]});
//		const addressytGq94 = await CryptozDqbCV6U.transferFrom.call(addressc4bVLvE, addresspJ35ie1, uintHDvne2, {from: accounts[3]});
//		const uint256arrayk3cCBAj = await CryptozDqbCV6U.tokensOfOwner.call(addressg3yFeTW, {from: accounts[1]});
//		const stringM5gd2Yp = await CryptozDqbCV6U.symbol.call({from: accounts[0]});
//		const addressDkUn6qy = await CryptozDqbCV6U.linkMySponsor.call(addressW8KYbA, {from: accounts[2]});
//		const uint256arrayQVDiE1L = await CryptozDqbCV6U.tokensOfOwner.call(addressyszcyui, {from: accounts[1]});

		assert.equal(uint256arrayB2OE9eJ, BigInt(""))
		await expect(CryptozDqbCV6U.transferFrom.call(addressc4bVLvE, addresspJ35ie1, uintHDvne2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz6jMkwe = await Cryptoz.new({from: accounts[2]});
		const uintx0faiZY = BigInt("87")
		const uintQNCrJR8 = BigInt("1872")
		const uintU5zO2lY = BigInt("388")
		const uintuEhN1XR = BigInt("874")
		const uintCWeCZHM = BigInt("1995")
		const uintzQnHgXm = BigInt("106")
		const uintQuRLBt = BigInt("123")
		const uintnPOIQB = BigInt("629")
		const uintQONlGo3 = BigInt("135")
		const uintJTE8GtG = BigInt("80")
		const uintBpiHcW2 = BigInt("3")
		const stringRO14MyM = "Koc2OS6GFXtjt3sIAl5DoI6dOXA1YCTFd9uyWWyNNUYycirttkcrReGVxvf3BFc5xFxcLoWgh9ppzOHL"
		const stringUwk3jcr = "IhtJPHoxgD8HyH7L1VBCN1GoSd4NfML96E8R2zYkMIVIUifdEycRyLL4NwOuYXx29Ukn"
		const uintguQhO8R = BigInt("245")
		const uintkzoxhy1 = BigInt("1333")
		const addressjGfyFfB = accounts[0]
		const uintsvF3YSV = BigInt("2001")
		const addressGA9I0XV = accounts[0]
		const addressiBW8nmJ = accounts[1]
//		const booloyYpKfD = await Cryptozz6jMkwe.addTocardType.call(uintCWeCZHM, uintuEhN1XR, uintU5zO2lY, uintQNCrJR8, uintx0faiZY, {from: accounts[4]});
//		const boolgfTbSw = await Cryptozz6jMkwe.loadNewCardType.call(uintguQhO8R, stringUwk3jcr, stringRO14MyM, uintBpiHcW2, uintJTE8GtG, uintQONlGo3, uintnPOIQB, uintQuRLBt, uintzQnHgXm, {from: accounts[1]});
//		const uint256OmkEPZB = await Cryptozz6jMkwe.tokenOfOwnerByIndex.call(addressjGfyFfB, uintkzoxhy1, {from: accounts[4]});
//		const addressE6fwTeo = await Cryptozz6jMkwe.transferFrom.call(addressiBW8nmJ, addressGA9I0XV, uintsvF3YSV, {from: accounts[1]});

		await expect(Cryptozz6jMkwe.addTocardType.call(uintCWeCZHM, uintuEhN1XR, uintU5zO2lY, uintQNCrJR8, uintx0faiZY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uintRW1aNiL = BigInt("1414")
		const uintGLRcDQV = BigInt("1432")
		const addressMUMLxr4 = "0x0000000000000000000000000000000000000001"
//		const uint256iIMt7lv = await CryptozTT3uQh7.tokenByIndex.call(uintRW1aNiL, {from: accounts[2]});
//		const uint256i2h6a8O = await CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressMUMLxr4, uintGLRcDQV, {from: accounts[0]});

		await expect(CryptozTT3uQh7.tokenByIndex.call(uintRW1aNiL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uintnRaWf3N = BigInt("1448")
		const addressJARhcN = "0x0000000000000000000000000000000000000000"
//		const uint256i2h6a8O = await CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressJARhcN, uintnRaWf3N, {from: accounts[0]});
//		const stringxzIWAUy = await CryptozTT3uQh7.symbol.call({from: accounts[3]});

		await expect(CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressJARhcN, uintnRaWf3N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz6jMkwe = await Cryptoz.new({from: accounts[2]});
		const uintmlb19GM = BigInt("64")
		const uintFbZ5qFj = BigInt("964")
		const uintWrcKmHm = BigInt("312")
		const uintY2OvS20 = BigInt("661")
		const uintJUeiSR = BigInt("718")
		const uintKRlRdd8 = BigInt("2001")
		const addressl3yuBE6 = accounts[1]
		const addressRyMDn0 = accounts[1]
//		await Cryptozz6jMkwe.getTokensByRarity.call({from: accounts[0]});
//		const boolgEfhBVt = await Cryptozz6jMkwe.addTocardType.call(uintJUeiSR, uintY2OvS20, uintWrcKmHm, uintFbZ5qFj, uintmlb19GM, {from: accounts[4]});
//		const addressE6fwTeo = await Cryptozz6jMkwe.transferFrom.call(addressRyMDn0, addressl3yuBE6, uintKRlRdd8, {from: accounts[1]});

		await expect(Cryptozz6jMkwe.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz6jMkwe = await Cryptoz.new({from: accounts[2]});
		const uintizE2cQz = BigInt("2001")
		const addresst6OA6qy = accounts[0]
		const addressMXMw00P = accounts[1]
		const stringpI1QWJz = await Cryptozz6jMkwe.symbol.call({from: accounts[2]});
//		const addressE6fwTeo = await Cryptozz6jMkwe.transferFrom.call(addressMXMw00P, addresst6OA6qy, uintizE2cQz, {from: accounts[1]});

		assert.equal(stringpI1QWJz, "Cryptoz")
		await expect(Cryptozz6jMkwe.transferFrom.call(addressMXMw00P, addresst6OA6qy, uintizE2cQz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uinte5pNYN6 = BigInt("1448")
		const addressQK51h8d = "0x0000000000000000000000000000000000000001"
//		await CryptozTT3uQh7.withdraw.call({from: accounts[4]});
//		const uint256i2h6a8O = await CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressQK51h8d, uinte5pNYN6, {from: accounts[0]});

		await expect(CryptozTT3uQh7.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uintfEZEs9c = BigInt("1435")
		const uintVdRlijk = BigInt("1448")
		const addressKMMJKml = "0x0000000000000000000000000000000000000002"
//		const boolECErFjo = await CryptozTT3uQh7.buyBoosterCard.call(uintfEZEs9c, {from: accounts[0]});
//		const uint256i2h6a8O = await CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressKMMJKml, uintVdRlijk, {from: accounts[0]});

		await expect(CryptozTT3uQh7.buyBoosterCard.call(uintfEZEs9c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uintkXpwTi7 = BigInt("1945")
		const uintmU9FDfx = BigInt("1407")
		const addressz9F70r9 = "0x0000000000000000000000000000000000000001"
		const stringpT7TRxj = await CryptozTT3uQh7.name.call({from: accounts[3]});
//		await CryptozTT3uQh7.getBonusBoosters.call({from: accounts[0]});
//		const uint256p4QwIQF = await CryptozTT3uQh7.tokenByIndex.call(uintkXpwTi7, {from: accounts[0]});
//		const uint256i2h6a8O = await CryptozTT3uQh7.tokenOfOwnerByIndex.call(addressz9F70r9, uintmU9FDfx, {from: accounts[0]});

		assert.equal(stringpT7TRxj, "Cryptoz Cards")
		await expect(CryptozTT3uQh7.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTT3uQh7 = await Cryptoz.new({from: accounts[4]});
		const uintxHFoUlH = BigInt("192")
		const uintjcPSv1M = BigInt("759")
		const uintjWEz87 = BigInt("846")
		const uintiwG1BQ = BigInt("627")
		const uinthcNSlbV = BigInt("1523")
		const uinthmxuwG = BigInt("1151")
		const uint256JzJPrZo = await CryptozTT3uQh7.totalSupply.call({from: accounts[5]});
//		const boolygNHnDO = await CryptozTT3uQh7.addTocardType.call(uinthcNSlbV, uintiwG1BQ, uintjWEz87, uintjcPSv1M, uintxHFoUlH, {from: accounts[4]});
//		const boollTr1AqA = await CryptozTT3uQh7.openBoosterCard.call(uinthmxuwG, {from: accounts[4]});

		assert.equal(uint256JzJPrZo, BigInt("0"))
		await expect(CryptozTT3uQh7.addTocardType.call(uinthcNSlbV, uintiwG1BQ, uintjWEz87, uintjcPSv1M, uintxHFoUlH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})