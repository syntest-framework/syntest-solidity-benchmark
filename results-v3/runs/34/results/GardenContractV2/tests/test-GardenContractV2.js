const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresswdU998 = accounts[4]
		const addressqVszkDJ = "0x0000000000000000000000000000000000000001"
		const addressaaVda3O = accounts[2]
		const GardenContractV2UWc9MMD = await GardenContractV2.new(addresswdU998, addressqVszkDJ, addressaaVda3O, {from: accounts[3]});
		const stringCcc6aKA = "aLZkKRzG8Bmnhf2tQbIiWx3Yz16VOkWtbjR"
		const stringqaY5HDv = "7FAPggVhfnowN9Jmg1OOqXe6UrwSioHe15LVA3THbUk83PdxVMSO4atfgF3hNyV0P4kNlpJeG0YF4btLXbyE"
		const uintDfUm7dl = BigInt("234")
		const uint256lbUSQXT = await GardenContractV2UWc9MMD.totalTLPGrown.call(stringCcc6aKA, {from: accounts[1]});
		const uint256mSl3YCQ = await GardenContractV2UWc9MMD.totalGardenSupply.call(stringqaY5HDv, {from: accounts[4]});
		const uint256PxEZtsG = await GardenContractV2UWc9MMD.getTotalrTLPHarvest.call(uintDfUm7dl, {from: accounts[0]});

		await expect(GardenContractV2UWc9MMD.totalTLPGrown.call(stringCcc6aKA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscSJzkqB = accounts[5]
		const address8X2T9i = accounts[4]
		const addressTv1a6PK = "0x0000000000000000000000000000000000000001"
		const GardenContractV2mye86pR = await GardenContractV2.new(addresscSJzkqB, address8X2T9i, addressTv1a6PK, {from: accounts[1]});
		const addressQXiSmFu = "0x0000000000000000000000000000000000000001"
		const uintqSzkapi = BigInt("125")
		const string2qTnUl = "u2iSTgdBarXIvq"
		const uintjFgMYDp = BigInt("144")
		const stringWQsXatE = "H8QQjBJDnhyZHq2PQQt5MsmDmI3"
		const addressCa4aKtD = await GardenContractV2mye86pR.changeOwner.call(addressQXiSmFu, {from: accounts[2]});
		const stringlA9oIkJ = await GardenContractV2mye86pR.harvest.call(string2qTnUl, uintqSzkapi, {from: accounts[2]});
		const stringuUXFi1l = await GardenContractV2mye86pR.claimDecompose.call(stringWQsXatE, uintjFgMYDp, {from: accounts[4]});

		await expect(GardenContractV2mye86pR.changeOwner.call(addressQXiSmFu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstlm9Vux = accounts[0]
		const addressA30nnF = accounts[1]
		const addressFrioo7W = accounts[1]
		const GardenContractV2OY8JUqC = await GardenContractV2.new(addresstlm9Vux, addressA30nnF, addressFrioo7W, {from: accounts[3]});
		const stringnzvdIOo = "kix4xj1gS"
		const uinta7VjuaY = BigInt("32")
		const stringXvoWU0L = "cr1Zh"
		const boolD9WMegL = false
		const uintY27EKxY = BigInt("25")
		const stringtNCHm7D = "nLVmk2RWAtkuSjxLHrxf71uLfFmCcEXkFzNegAOr7PpbHXojKxS46gqKJlej2MYSyqNDfICAKkc34I12EXBA8o0tXPuc3B6eLF"
		const uintIE0D2lr = BigInt("940")
		const uint256gonWXhb = await GardenContractV2OY8JUqC.totalGardenSupply.call(stringnzvdIOo, {from: accounts[5]});
		const uint256cB4tLHP = await GardenContractV2OY8JUqC.timeUntilNextTLP.call(stringXvoWU0L, uinta7VjuaY, {from: accounts[5]});
		const uint256BiVpi2k = await GardenContractV2OY8JUqC.plant.call(uintIE0D2lr, stringtNCHm7D, uintY27EKxY, boolD9WMegL, {from: accounts[2]});

		await expect(GardenContractV2OY8JUqC.totalGardenSupply.call(stringnzvdIOo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswoYOiZU = accounts[2]
		const addressmXwbKM0 = "0x0000000000000000000000000000000000000001"
		const addressiweozP = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addresswoYOiZU, addressmXwbKM0, addressiweozP, {from: accounts[2]});
		const stringhBUuoa5 = ""
		const addressxJFOEX = accounts[3]
		const stringKhJyVbm = "iC7yf5Zaga0QLm89f7YzoI0eMzsbJC26cl"
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addressxJFOEX, stringhBUuoa5, {from: accounts[1]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.balanceOf.call(addressxJFOEX, stringhBUuoa5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfuKHY49 = accounts[5]
		const addressuYDlKuk = accounts[1]
		const addressrj96PHG = accounts[1]
		const GardenContractV2MOPLLN = await GardenContractV2.new(addressfuKHY49, addressuYDlKuk, addressrj96PHG, {from: accounts[2]});
		const stringMEUgMg = "rTcKt5"
		const stringDMJqKaL = "6N1aPvO1kPfXuIinIMNdzRtq2AjevaM9IRWUmJp9FfwfQtpFfXkarS3y7xs46qN8Er66X30Dpd7kTgROAxr4cgCT3qAauFC"
		const uintbz7adBy = BigInt("214")
		const uintrkZqLB1 = BigInt("102")
		const uintiqOabD8 = BigInt("118")
		const stringykKKzWF = "sbP0ejcUtf3PXw6AiJlNjReGjTIvylmOyEBEoYNoZguaFuyC9UGNLCGXVj4UgSzLjkhzpr2DEzNwhTyIB34d4qNM3SxLfn9Vld"
		const addressh1ZCOfO = accounts[4]
		const addressAiBmL2S = "0x0000000000000000000000000000000000000001"
		const uint256q8EWcDQ = await GardenContractV2MOPLLN.totalTLPGrowing.call(stringMEUgMg, {from: accounts[3]});
		const uint256jHTAiyh = await GardenContractV2MOPLLN.totalTLPBurnt.call(stringDMJqKaL, {from: accounts[0]});
		const uint2561fSvho = await GardenContractV2MOPLLN.getTotalsTLPHarvest.call(uintbz7adBy, {from: "0x0000000000000000000000000000000000000001"});
		const stringviz9Yn3 = await GardenContractV2MOPLLN.decompose.call(stringykKKzWF, uintiqOabD8, uintrkZqLB1, {from: accounts[2]});
		const addressYz4goCZ = await GardenContractV2MOPLLN.addTokenOwner.call(addressAiBmL2S, addressh1ZCOfO, {from: accounts[3]});

		await expect(GardenContractV2MOPLLN.totalTLPGrowing.call(stringMEUgMg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYCBy9z = accounts[3]
		const addressFdhTOwt = accounts[3]
		const addressQo8lFJc = accounts[3]
		const GardenContractV2oczkYoV = await GardenContractV2.new(addressYCBy9z, addressFdhTOwt, addressQo8lFJc, {from: accounts[5]});
		const uinteNVvw17 = BigInt("5")
		const stringaRyFWiE = "Ywu6xeSV6MyzpGP55nzBB7oiV"
		const stringX7dFFnJ = "3O9fP6INlgixqnTooQ3z2MvXydKcRyL2WTgFUT8Y5qgtCpVChuOCwQ"
		const boolDQ4TS0x = true
		const uintRavyHKs = BigInt("184")
		const stringCeRcxRU = "MEXqKQpGtPX"
		const uintbqSCPAC = BigInt("179")
		const uint256LvdFaNh = await GardenContractV2oczkYoV.timeUntilNextTLP.call(stringaRyFWiE, uinteNVvw17, {from: accounts[3]});
		const stringreylPPQ = await GardenContractV2oczkYoV.harvestAllBeds.call(stringX7dFFnJ, {from: accounts[3]});
		const uint256oKvxMSP = await GardenContractV2oczkYoV.plant.call(uintbqSCPAC, stringCeRcxRU, uintRavyHKs, boolDQ4TS0x, {from: accounts[3]});

		await expect(GardenContractV2oczkYoV.timeUntilNextTLP.call(stringaRyFWiE, uinteNVvw17, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCnGUnCr = accounts[2]
		const addressmIvg3zw = "0x0000000000000000000000000000000000000001"
		const addressSK0QERC = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addressCnGUnCr, addressmIvg3zw, addressSK0QERC, {from: accounts[2]});
		const uintsNYqH1 = BigInt("200")
		const stringKczoweG = "1377xG"
		const stringhBUuoa5 = ""
		const addresszrsZMAa = accounts[3]
		const boolHfHioei = true
		const uintJqUogOm = BigInt("170")
		const stringBYd9dfA = "BqO7TtKyH96lGNWZyYDijglE90qM9HbI70bXuXgyJgP3MRjgW9WcezkPFYceq9DWyKWpk1baJ46B6tCs66wnqgUFOk6CNeSGssG"
		const uintDN0sQV8 = BigInt("1450")
		const addresshdxmtPw = accounts[5]
		const stringKhJyVbm = "iC7yf5Zdaga0QLm89f7YzoI0eMzsbJC26cl"
		const stringGqqin4p = await GardenContractV2KUzxbqN.withdraw.call(stringKczoweG, uintsNYqH1, {from: accounts[0]});
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addresszrsZMAa, stringhBUuoa5, {from: accounts[1]});
		const uint256LGOlUu9 = await GardenContractV2KUzxbqN.plant.call(uintDN0sQV8, stringBYd9dfA, uintJqUogOm, boolHfHioei, {from: accounts[2]});
		const addressIicwsbu = await GardenContractV2KUzxbqN.changeBenefitiary.call(addresshdxmtPw, {from: accounts[1]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.withdraw.call(stringKczoweG, uintsNYqH1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMSPVW5M = accounts[2]
		const addressHTWnSdR = "0x0000000000000000000000000000000000000001"
		const addressn4pKL5 = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addressMSPVW5M, addressHTWnSdR, addressn4pKL5, {from: accounts[2]});
		const stringTUrEVQT = "Jqt12WX8ibv8Yi6E8KwG7hcYSX5aPw0z5ms65HfrYUvnjd2BoJxqK46GBXfrquYvCqOXFKzvmpB5LY57TwyxA"
		const stringhBUuoa5 = ""
		const addressGSL6LfA = accounts[3]
		const stringKhJyVbm = "iC7yf5Zaga0QLm89f7YzoI0eMzsbJC26cl"
		const stringDyJmMKO = await GardenContractV2KUzxbqN.harvestAllBeds.call(stringTUrEVQT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addressGSL6LfA, stringhBUuoa5, {from: accounts[1]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.harvestAllBeds.call(stringTUrEVQT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXzKeegG = accounts[5]
		const addresssVT304U = accounts[2]
		const addressXx7O14 = accounts[3]
		const GardenContractV2W9saYu = await GardenContractV2.new(addressXzKeegG, addresssVT304U, addressXx7O14, {from: accounts[2]});
		const uintkDVADf = BigInt("121")
		const stringH6nGkp2 = "XblBbZjaD4fLgxWjIHUW5N8CxkheeBwBL1iud4XsnP"
		const stringLSTDwJ2 = "Vg61PQUgQPdZgOR5cn01HoVM2cWknO2QS6NcK0FOB8AGu8BExRhyxetGG2nPQ"
		const uintYEwUa5x = BigInt("41")
		const stringavia5ut = "dCxHIlk8AvfreTaCJkS1VVEurmUmuMjXqIuVMj9rXq2YzgnqvyRikziB"
		const addressdOoYrHI = accounts[3]
		await GardenContractV2W9saYu.totalBedSupply.call(stringH6nGkp2, uintkDVADf, {from: accounts[2]});
		const uint256XtvOSS7 = await GardenContractV2W9saYu.totalTLPGrowing.call(stringLSTDwJ2, {from: accounts[4]});
		const uint256zysu0Oy = await GardenContractV2W9saYu.timeUntilNextTLP.call(stringavia5ut, uintYEwUa5x, {from: accounts[2]});
		const addressW0DQbX6 = await GardenContractV2W9saYu.renounceTokenOwner.call(addressdOoYrHI, {from: accounts[2]});

		await expect(GardenContractV2W9saYu.totalBedSupply.call(stringH6nGkp2, uintkDVADf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnClKvBO = accounts[2]
		const addressyCmR5GO = "0x0000000000000000000000000000000000000001"
		const addressUCYAilS = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addressnClKvBO, addressyCmR5GO, addressUCYAilS, {from: accounts[2]});
		const uintKXqO3z = BigInt("205")
		const stringlQPK1WP = "8Xuzbo3fzVQRU4HHMPL24ii2LeU3x6CPNdBfIustyFKoh"
		const stringhBUuoa5 = ""
		const addressSpGJeVN = accounts[3]
		const uintAtx8NCq = BigInt("27")
		const stringP3TUiGI = "cQMyYvc9MKEhXUl227YVpkdQS7tgLnwBsvSkAN7AhNFvp8hqDEFY5wfQFbbP3SIOruCiRWa9qfwakcD"
		const stringKhJyVbm = "iC7yf5Zagga0QLm89f7YzoI0eMzsbJC26cl"
		const uint256bBKOdco = await GardenContractV2KUzxbqN.getTotalsTLPHarvest.call(uintKXqO3z, {from: accounts[0]});
		const uint256ajE0KlG = await GardenContractV2KUzxbqN.totalTLPGrowing.call(stringlQPK1WP, {from: accounts[5]});
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addressSpGJeVN, stringhBUuoa5, {from: accounts[1]});
		await GardenContractV2KUzxbqN.totalBedSupply.call(stringP3TUiGI, uintAtx8NCq, {from: accounts[4]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.getTotalsTLPHarvest.call(uintKXqO3z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAGgSzT9 = accounts[2]
		const addressAOOZ84E = accounts[1]
		const addressOJxHat5 = accounts[4]
		const GardenContractV2OcrKNj9 = await GardenContractV2.new(addressAGgSzT9, addressAOOZ84E, addressOJxHat5, {from: accounts[0]});
		const uintVYqWULP = BigInt("139")
		const stringlYObCqI = "BjNj3U6V9UOhivzTogsutv6Eilh0AmZFPyqHcqwaqaBc825l6BjvWuCKeJ0bV4ir5DGZXrbzLhJP3i13QbqNqGn1BGLBVS1gDH"
		const stringaRGtdC4 = "cJtrR3zSfUNpn9ZKMnov04AnOHDPSwm5"
		const addressHRPcSv = accounts[4]
		const stringuGjuaWg = "wY2RDynln1wv"
		const stringzuAakUU = await GardenContractV2OcrKNj9.claimDecompose.call(stringlYObCqI, uintVYqWULP, {from: accounts[2]});
		const uint256S77opF = await GardenContractV2OcrKNj9.balanceOf.call(addressHRPcSv, stringaRGtdC4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256htUDZbA = await GardenContractV2OcrKNj9.totalTLPDecomposed.call(stringuGjuaWg, {from: accounts[3]});

		await expect(GardenContractV2OcrKNj9.claimDecompose.call(stringlYObCqI, uintVYqWULP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressf1c57Kr = accounts[2]
		const addressQrWtA3z = "0x0000000000000000000000000000000000000001"
		const addressv9bYCPd = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addressf1c57Kr, addressQrWtA3z, addressv9bYCPd, {from: accounts[2]});
		const uintTimxwbA = BigInt("933")
		const uintlFmSbt5 = BigInt("40")
		const stringunK6kLx = "OYUJxlRS9jsltniz4j1p"
		const stringKhJyVbm = "iC7yf5Zaga0QLm89f7YzoI0eMzsbC26cR"
		const stringo4B1FZe = await GardenContractV2KUzxbqN.decompose.call(stringunK6kLx, uintlFmSbt5, uintTimxwbA, {from: accounts[4]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.decompose.call(stringunK6kLx, uintlFmSbt5, uintTimxwbA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOAULkFx = accounts[3]
		const addressphxFAIJ = accounts[3]
		const addressUP4qYkb = accounts[3]
		const GardenContractV2oczkYoV = await GardenContractV2.new(addressOAULkFx, addressphxFAIJ, addressUP4qYkb, {from: accounts[5]});
		const uintCSglIEX = BigInt("1431")
		const uintqHNKBIo = BigInt("181")
		const uintT2Xea2 = BigInt("57")
		const stringX7dFFnJ = "2O9fP6INlgiqnTooQ3z2MvXydKcRyL2WTgFUT8Y5qgtCpVChuOCwQ"
		const addressl9YQT4b = accounts[0]
		const uint8msoER92 = await GardenContractV2oczkYoV.operationBurnMint.call(uintT2Xea2, uintqHNKBIo, uintCSglIEX, {from: accounts[2]});
		const stringreylPPQ = await GardenContractV2oczkYoV.harvestAllBeds.call(stringX7dFFnJ, {from: accounts[3]});
		const addressoJPZY56 = await GardenContractV2oczkYoV.renounceTokenOwner.call(addressl9YQT4b, {from: accounts[4]});

		await expect(GardenContractV2oczkYoV.operationBurnMint.call(uintT2Xea2, uintqHNKBIo, uintCSglIEX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressy1ii1qp = accounts[1]
		const addressYrffTms = accounts[3]
		const addressDxUwVAd = accounts[4]
		const GardenContractV2gmLtib = await GardenContractV2.new(addressy1ii1qp, addressYrffTms, addressDxUwVAd, {from: "0x0000000000000000000000000000000000000001"});
		const addressRy7m0A = accounts[0]
		const boolhVKWQiO = false
		const uintvWPBbdp = BigInt("187")
		const stringB76PtL = "k4RyLkqUv2JkZZoL"
		const uintnJKQ9h = BigInt("1515")
		const stringVmhJb5 = "TNkullLmgmvflA4b3yGNMvKCjlDuBKuYNdRqu6qG7FVHQpTx"
		const addressgCkNOs = await GardenContractV2gmLtib.changeBenefitiary.call(addressRy7m0A, {from: accounts[0]});
		const uint256gpmZF6 = await GardenContractV2gmLtib.plant.call(uintnJKQ9h, stringB76PtL, uintvWPBbdp, boolhVKWQiO, {from: accounts[0]});
		const uint256gNg8WoG = await GardenContractV2gmLtib.totalTLPDecomposed.call(stringVmhJb5, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressp5qQJVC = accounts[2]
		const addressNG5qosE = "0x0000000000000000000000000000000000000001"
		const addressfxYCpGY = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addressp5qQJVC, addressNG5qosE, addressfxYCpGY, {from: accounts[2]});
		const uintbWffcS3 = BigInt("156")
		const uintHuft33y = BigInt("93")
		const stringETjeBw = "rIHxKDNqdE6"
		const stringhBUuoa5 = ""
		const addressPhGz8z1 = "0x0000000000000000000000000000000000000001"
		const stringKhJyVbm = "iC7ye5Zaga0QLm89f7YzoI0eMzsbJC26cl"
		const uint256xJclEhP = await GardenContractV2KUzxbqN.getTotalrTLPHarvest.call(uintbWffcS3, {from: accounts[1]});
		const stringWzTQuxr = await GardenContractV2KUzxbqN.withdraw.call(stringETjeBw, uintHuft33y, {from: accounts[4]});
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addressPhGz8z1, stringhBUuoa5, {from: accounts[1]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.getTotalrTLPHarvest.call(uintbWffcS3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuzpfe5r = accounts[2]
		const addressBAwWKlF = "0x0000000000000000000000000000000000000001"
		const addressHxfqfmn = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addressuzpfe5r, addressBAwWKlF, addressHxfqfmn, {from: accounts[2]});
		const boolInHJGBd = true
		const uintw7GynDD = BigInt("54")
		const stringvk37s62 = "ckWq5kKUywK6DVnzYEvpwpxltDNA8H3BvH6VXFWvi9MBa4l9MbNpgrBDpIPEMDMD6dON8AcCr"
		const uintdOBpWl2 = BigInt("1989")
		const addressNAGeahz = "0x0000000000000000000000000000000000000001"
		const stringKhJyVbm = "iC7yf5Zaga0QLm89f7YzoI0eMzbJCF26cl"
		const uint256nlX9b5m = await GardenContractV2KUzxbqN.plant.call(uintdOBpWl2, stringvk37s62, uintw7GynDD, boolInHJGBd, {from: accounts[0]});
		const addresskVSa3Gc = await GardenContractV2KUzxbqN.changeOwner.call(addressNAGeahz, {from: accounts[5]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.plant.call(uintdOBpWl2, stringvk37s62, uintw7GynDD, boolInHJGBd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKHIMhf = accounts[3]
		const addressNPUYL79 = accounts[3]
		const addressrvqrFHU = accounts[3]
		const GardenContractV2oczkYoV = await GardenContractV2.new(addressKHIMhf, addressNPUYL79, addressrvqrFHU, {from: accounts[5]});
		const stringKVW3d8t = "gIaI"
		const stringX7dFFnJ = "2O9fP6INlgixqnTooQ3z2MvXydKcRyL2WTgFUT8Y5qgtCIVChuOCwQ"
		const uint256lWFRYOG = await GardenContractV2oczkYoV.totalTLPDecomposed.call(stringKVW3d8t, {from: accounts[3]});
		const stringreylPPQ = await GardenContractV2oczkYoV.harvestAllBeds.call(stringX7dFFnJ, {from: accounts[3]});

		await expect(GardenContractV2oczkYoV.totalTLPDecomposed.call(stringKVW3d8t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswdR4E4r = accounts[2]
		const addressYd0ucra = "0x0000000000000000000000000000000000000001"
		const addresssbRMmjf = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addresswdR4E4r, addressYd0ucra, addresssbRMmjf, {from: accounts[2]});
		const stringDzEmJg0 = "3NTWzjhpEBtbrVY84Q7kJauMwWNhBOUBl"
		const addressIT4YELD = accounts[2]
		const stringhBUuoa5 = ""
		const addressOqe4Blk = "0x0000000000000000000000000000000000000000"
		const uintt75oJ22 = BigInt("140")
		const stringIuZC6qT = "DIIt5Hlgi"
		const stringKhJyVbm = "iC7yf5Zaga0QLm89f7YzoI0eMzsbJC26cl"
		const uint256X8l765 = await GardenContractV2KUzxbqN.totalTLPBurnt.call(stringDzEmJg0, {from: accounts[5]});
		const address5YGfKn = await GardenContractV2KUzxbqN.changeOwner.call(addressIT4YELD, {from: accounts[0]});
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addressOqe4Blk, stringhBUuoa5, {from: accounts[1]});
		const stringK5EqQ2 = await GardenContractV2KUzxbqN.harvest.call(stringIuZC6qT, uintt75oJ22, {from: accounts[4]});
		const uint256zY5sic = await GardenContractV2KUzxbqN.totalTLPGrown.call(stringKhJyVbm, {from: accounts[4]});

		await expect(GardenContractV2KUzxbqN.totalTLPBurnt.call(stringDzEmJg0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRYFMkvx = accounts[3]
		const addressLF0Op7X = accounts[3]
		const addressohjw6ev = accounts[3]
		const GardenContractV2oczkYoV = await GardenContractV2.new(addressRYFMkvx, addressLF0Op7X, addressohjw6ev, {from: accounts[5]});
		const uintwnT91Y = BigInt("250")
		const stringIVorfLV = "M43CBCdSuWVIWd6458j1r9Rs9nCOvh6SPlvqDqi48yU9atq9QnIg8otmA4i4xSCb4Me8ut2Hiof"
		const stringX7dFFnJ = "2O9fP6INlglixqnTooQ3z2MvXydKcRyL2WTgFUT8Y5qgtCpVChuOCwQ"
		const stringW7MWF6B = await GardenContractV2oczkYoV.harvest.call(stringIVorfLV, uintwnT91Y, {from: accounts[2]});
		const stringreylPPQ = await GardenContractV2oczkYoV.harvestAllBeds.call(stringX7dFFnJ, {from: accounts[3]});

		await expect(GardenContractV2oczkYoV.harvest.call(stringIVorfLV, uintwnT91Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvnBrX03 = accounts[1]
		const addressgjnzd7 = accounts[2]
		const addresssMyAWHJ = accounts[2]
		const GardenContractV2lqQEphT = await GardenContractV2.new(addressvnBrX03, addressgjnzd7, addresssMyAWHJ, {from: accounts[3]});
		const addressn5bgAhA = accounts[3]
		const addressGXlmH6 = accounts[0]
		const stringbf5GOW = "TFKBAcSLXRYKW9cVd83JRbhKGAqzwl4JVExNMgREu8cbDspRYHN5OtrIkIWc3N7AQpNvrCpK7CXaXcAjbQNCiSuwrjwD5"
		const uintAmIutrk = BigInt("207")
		const stringjiyd1AH = "RgMq2vSh1o6CiRqPE9BNl"
		const addressv0jAEEe = await GardenContractV2lqQEphT.addTokenOwner.call(addressGXlmH6, addressn5bgAhA, {from: accounts[3]});
		const stringTyqsS9Q = await GardenContractV2lqQEphT.harvestAllBeds.call(stringbf5GOW, {from: accounts[2]});
		await GardenContractV2lqQEphT.totalBedSupply.call(stringjiyd1AH, uintAmIutrk, {from: accounts[5]});

		await expect(GardenContractV2lqQEphT.addTokenOwner.call(addressGXlmH6, addressn5bgAhA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspzbHbzP = accounts[2]
		const addressJzezu1 = "0x0000000000000000000000000000000000000001"
		const addressP7teCVO = accounts[0]
		const GardenContractV2KUzxbqN = await GardenContractV2.new(addresspzbHbzP, addressJzezu1, addressP7teCVO, {from: accounts[2]});
		const uintIwlyJEs = BigInt("200")
		const stringYodRYNe = "GX6oo9AS3N3vGLLrAPtzL4IaL9jaf7x22hXPql3hYvAvcRVS6VI9JG6GOZhZBT"
		const addresslo4bh8r = accounts[4]
		const stringhBUuoa5 = ""
		const addressBy8ekV = accounts[4]
		const uintVbkXYF = BigInt("42")
		const uintqde2zMO = BigInt("15")
		const stringlrhIARz = "jbR19ZTQHC1DKgB14uZ1GEegNLVLWp46AzWSk5I9"
		const uint256NP8osSX = await GardenContractV2KUzxbqN.growthRemaining.call(addresslo4bh8r, stringYodRYNe, uintIwlyJEs, {from: accounts[2]});
		const uint256AKyC23m = await GardenContractV2KUzxbqN.balanceOf.call(addressBy8ekV, stringhBUuoa5, {from: accounts[1]});
		const stringgRRGZIa = await GardenContractV2KUzxbqN.decompose.call(stringlrhIARz, uintqde2zMO, uintVbkXYF, {from: accounts[5]});

		await expect(GardenContractV2KUzxbqN.growthRemaining.call(addresslo4bh8r, stringYodRYNe, uintIwlyJEs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrkaB3Y = accounts[1]
		const addressqbHwjZq = accounts[3]
		const addressPeBNUHJ = accounts[5]
		const GardenContractV2Llqclxp = await GardenContractV2.new(addressrkaB3Y, addressqbHwjZq, addressPeBNUHJ, {from: accounts[0]});
		const addressvt0jNXj = accounts[1]
		const uintStMioa7 = BigInt("102")
		const uintqXV7OqE = BigInt("242")
		const string5ZOJOa = "L3TPv4xWvhFkjlKhaIenk6PAPYBePIl8NC2idah9wmx06"
		const stringiGwNpXt = "CSLuCp5XRUYvCfPBwC3nm94az7fEt8cR1aSxL"
		const uint0FZT21 = BigInt("211")
		const addressuYeqnvo = await GardenContractV2Llqclxp.renounceTokenOwner.call(addressvt0jNXj, {from: accounts[0]});
		const uint256heP0Ai5 = await GardenContractV2Llqclxp.getTotalrTLPHarvest.call(uintStMioa7, {from: accounts[3]});
		const stringNzrfG5s = await GardenContractV2Llqclxp.claimDecompose.call(string5ZOJOa, uintqXV7OqE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uqr1Px0 = await GardenContractV2Llqclxp.totalTLPDecomposed.call(stringiGwNpXt, {from: accounts[2]});
		const uint256LRnUR9 = await GardenContractV2Llqclxp.getTotalsTLPHarvest.call(uint0FZT21, {from: accounts[0]});

		await expect(GardenContractV2Llqclxp.renounceTokenOwner.call(addressvt0jNXj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQPUZP0N = accounts[1]
		const addressIHyRsub = accounts[3]
		const addressq2lpBQ7 = accounts[5]
		const GardenContractV2Llqclxp = await GardenContractV2.new(addressQPUZP0N, addressIHyRsub, addressq2lpBQ7, {from: accounts[0]});
		const addressOFdzLSd = accounts[2]
		const uintU0RyvwS = BigInt("175")
		const addressj4Z2n5O = await GardenContractV2Llqclxp.changeOwner.call(addressOFdzLSd, {from: accounts[0]});
		const uint256heP0Ai5 = await GardenContractV2Llqclxp.getTotalrTLPHarvest.call(uintU0RyvwS, {from: accounts[3]});

		await expect(GardenContractV2Llqclxp.getTotalrTLPHarvest.call(uintU0RyvwS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZEbUxGD = accounts[1]
		const addresslK0AqxS = accounts[3]
		const addressvNANUo1 = accounts[5]
		const GardenContractV2Llqclxp = await GardenContractV2.new(addressZEbUxGD, addresslK0AqxS, addressvNANUo1, {from: accounts[0]});
		const uintjjZQq09 = BigInt("7")
		const stringtRLBWEE = "7xHAYhXRVQPGWGXdARWfn635qSRFu2khU8atMf1EBVVOh0sviy5LJGY1sYh1aQcLKum7x8xjy3gHK5EqlT7JczsruvX"
		const uint256heP0Ai5 = await GardenContractV2Llqclxp.getTotalrTLPHarvest.call(uintjjZQq09, {from: accounts[3]});
		const uint256K7cEAU0 = await GardenContractV2Llqclxp.totalTLPGrown.call(stringtRLBWEE, {from: accounts[2]});

		await expect(GardenContractV2Llqclxp.getTotalrTLPHarvest.call(uintjjZQq09, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})