const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringA4ee4b7 = "aIsvLFMYAXn"
		const stringG02bB93 = "PGPCzvwHV4uDsFp4Fswb8oTimgttUadV8lCMsPkt1W6pwiXkXo6nQCvzhdciX7tibz8paUiIJBGDRTLq"
		const uintomITFhK = BigInt("110")
		const WheatFarmxA0KAeT = await WheatFarm.new(stringA4ee4b7, stringG02bB93, uintomITFhK, {from: "0x0000000000000000000000000000000000000001"});
		const uintx7ZezRG = BigInt("417")
		const addressB1pp0mD = accounts[4]
		const uintGZ6ZStD = BigInt("1037")
		const addressqh4iDdo = accounts[2]
		const uinteD9hzyv = BigInt("126")
		const addressrDmsWFZ = accounts[2]
		const uintBfxFpfm = BigInt("777")
		const addressWKBkg7X = accounts[4]
		const boolGDCWRC = await WheatFarmxA0KAeT.approveAndCall.call(addressB1pp0mD, uintx7ZezRG, {from: "0x0000000000000000000000000000000000000001"});
		const boolUCmxUrY = await WheatFarmxA0KAeT.approve.call(addressqh4iDdo, uintGZ6ZStD, {from: accounts[1]});
		const boolKDxkTg2 = await WheatFarmxA0KAeT.approve.call(addressrDmsWFZ, uinteD9hzyv, {from: accounts[1]});
		const boolMbGc83H = await WheatFarmxA0KAeT.approve.call(addressWKBkg7X, uintBfxFpfm, {from: accounts[0]});
	});

	it('test for WheatFarm', async () => {
		const stringqOTNubo = "ZIxzrGg7JmfDHtx2Vyv4JYIcLc5iMdDYDXg2k8mnc4drbmN5xivJiDAB"
		const stringcKqlpTn = "DKcgRgOXEfzntpbVuO1NbPW3U9GCplefdYLGct6hxogbBPMA1RfHvIiSCbiFoQ8qX"
		const uintr5S7wI = BigInt("22")
		const WheatFarmfYR8UHG = await WheatFarm.new(stringqOTNubo, stringcKqlpTn, uintr5S7wI, {from: accounts[3]});
		const uintDjg0yW = BigInt("2040")
		const addressaQt9mr = accounts[0]
		const uintnm2nmnn = BigInt("311")
		const addressCfFQVkU = accounts[3]
		const uintzz6mItU = BigInt("1518")
		const address8aT4DR = accounts[3]
		const boolky9pnAa = await WheatFarmfYR8UHG.approveAndCall.call(addressaQt9mr, uintDjg0yW, {from: accounts[4]});
		const boolpDefGlA = await WheatFarmfYR8UHG.transfer.call(addressCfFQVkU, uintnm2nmnn, {from: accounts[0]});
		const boolGsYMt71 = await WheatFarmfYR8UHG.approve.call(address8aT4DR, uintzz6mItU, {from: accounts[4]});

		await expect(WheatFarmfYR8UHG.approveAndCall.call(addressaQt9mr, uintDjg0yW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringL5PwjKH = "D1Uvek1zDWXwzWSMQKwAMziA5dbb7BM"
		const stringtS1hyj = "w0j5Gs6Mlb3xkwNQfOlmkKuushMO"
		const uintUIv0Gzp = BigInt("168")
		const WheatFarmd2nwgSu = await WheatFarm.new(stringL5PwjKH, stringtS1hyj, uintUIv0Gzp, {from: accounts[1]});
		const addressfZxz6q8 = accounts[1]
		const addressVfc4NfK = accounts[4]
		const addressk3QpDfU = accounts[3]
		const uint3lAIdi = BigInt("583")
		const addressfRfG3fD = accounts[0]
		const uintsPmagwn = BigInt("2005")
		const addressBv0aVHV = accounts[4]
		const uintrRTgKg7 = BigInt("1834")
		const addressNrAB7QS = accounts[1]
		const addressR7HvUK = accounts[2]
		const stringBb7KEY = await WheatFarmd2nwgSu.name.call({from: accounts[5]});
		const uintS3q2j9q = await WheatFarmd2nwgSu.allowance.call(addressVfc4NfK, addressfZxz6q8, {from: accounts[3]});
		const uintw70Iys7 = await WheatFarmd2nwgSu.balanceOf.call(addressk3QpDfU, {from: accounts[5]});
		const boolJKrRaRL = await WheatFarmd2nwgSu.transfer.call(addressfRfG3fD, uint3lAIdi, {from: "0x0000000000000000000000000000000000000001"});
		const boolLwcGFLW = await WheatFarmd2nwgSu.transfer.call(addressBv0aVHV, uintsPmagwn, {from: accounts[5]});
		const booleJqvWWS = await WheatFarmd2nwgSu.transferFrom.call(addressR7HvUK, addressNrAB7QS, uintrRTgKg7, {from: accounts[3]});

		assert.equal(stringBb7KEY, "D1Uvek1zDWXwzWSMQKwAMziA5dbb7BM")
		assert.equal(uintS3q2j9q, BigInt("0"))
		assert.equal(uintw70Iys7, BigInt("0"))
		await expect(WheatFarmd2nwgSu.transfer.call(addressfRfG3fD, uint3lAIdi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrnfKHUr = "U43MhacdfUGdxy"
		const stringYm5CtHN = "Y3ABeJm3rEUYxhh6kvdYFdepwkq5A55ctKWBn4uS5oD7EWgdmq"
		const uintGPC0rj = BigInt("80")
		const WheatFarmN3Lt9aA = await WheatFarm.new(stringrnfKHUr, stringYm5CtHN, uintGPC0rj, {from: accounts[4]});
		const uintKqTE8FG = BigInt("1701")
		const addressluFcwrR = accounts[1]
		const uintd5FUe1Y = BigInt("848")
		const addressL2m44wv = "0x0000000000000000000000000000000000000001"
		const stringf43AXue = await WheatFarmN3Lt9aA.name.call({from: accounts[1]});
		const boolv32svU7 = await WheatFarmN3Lt9aA.approve.call(addressluFcwrR, uintKqTE8FG, {from: accounts[4]});
		const boolNDqZLCb = await WheatFarmN3Lt9aA.approveAndCall.call(addressL2m44wv, uintd5FUe1Y, {from: accounts[0]});
		const uint8mE6JINZ = await WheatFarmN3Lt9aA.decimals.call({from: accounts[1]});

		assert.equal(boolv32svU7, true)
		assert.equal(stringf43AXue, "U43MhacdfUGdxy")
		await expect(WheatFarmN3Lt9aA.approveAndCall.call(addressL2m44wv, uintd5FUe1Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringNIwFp8v = "PXEzlZsmMSVlW6xN81KiYBHyNB1FfKYOaE8ZEZpvvkdn9icSgNE"
		const stringJdWnZ8 = "xwqjljS3ol7AIYTT3QFRbplcYWTTzxY089yuo1TI3fvb75clwtqSP8xR13qxtwMgbhS1u3Tx9AVXPZrZPXUTsGZMvCaoqHwHUSA"
		const uintwOWAyUR = BigInt("253")
		const WheatFarmcwQlsZ = await WheatFarm.new(stringNIwFp8v, stringJdWnZ8, uintwOWAyUR, {from: accounts[2]});
		const uintAuttyCq = BigInt("1324")
		const address4ISvy4 = accounts[2]
		const uintMmxglmY = BigInt("1193")
		const addressCbd8Knc = accounts[4]
		const addressGllcMok = accounts[4]
		const addresskYYXbnd = accounts[3]
		const stringPtVvRYo = await WheatFarmcwQlsZ.symbol.call({from: accounts[5]});
		const booljqNuvWy = await WheatFarmcwQlsZ.increaseAllowance.call(address4ISvy4, uintAuttyCq, {from: accounts[3]});
		const boolwTQ1qt5 = await WheatFarmcwQlsZ.transfer.call(addressCbd8Knc, uintMmxglmY, {from: accounts[5]});
		const uint8AzW3bod = await WheatFarmcwQlsZ.decimals.call({from: accounts[0]});
		const uintyQmLOFs = await WheatFarmcwQlsZ.allowance.call(addresskYYXbnd, addressGllcMok, {from: accounts[3]});

		assert.equal(stringPtVvRYo, "xwqjljS3ol7AIYTT3QFRbplcYWTTzxY089yuo1TI3fvb75clwtqSP8xR13qxtwMgbhS1u3Tx9AVXPZrZPXUTsGZMvCaoqHwHUSA")
		await expect(WheatFarmcwQlsZ.increaseAllowance.call(address4ISvy4, uintAuttyCq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQSU3pbe = "Ot"
		const stringkP0iR5F = "FXpVi1I4GglN7Oo8b2Uq1qkc7iKhzU1e1J5WjoixD2Z1Gd5sqXUQryL6uxtVCBJeVy"
		const uintoFkzP7 = BigInt("876")
		const WheatFarmFNcTZOr = await WheatFarm.new(stringQSU3pbe, stringkP0iR5F, uintoFkzP7, {from: accounts[1]});
		const uintRzK06Dx = BigInt("155")
		const addressrfnRBHF = accounts[2]
		const uintRq2Lv5l = BigInt("569")
		const address6XKzMo = accounts[2]
		const addressceAssPm = accounts[4]
		const addressuh2ELHu = accounts[5]
		const addressN6EBFsc = accounts[3]
		const boolQAMTfF1 = await WheatFarmFNcTZOr.transfer.call(addressrfnRBHF, uintRzK06Dx, {from: accounts[1]});
		const boolUpG7Ng = await WheatFarmFNcTZOr.increaseAllowance.call(address6XKzMo, uintRq2Lv5l, {from: accounts[2]});
		const uintbPq8ByP = await WheatFarmFNcTZOr.balanceOf.call(addressceAssPm, {from: accounts[2]});
		const uintsXFyvrl = await WheatFarmFNcTZOr.allowance.call(addressN6EBFsc, addressuh2ELHu, {from: accounts[1]});

		assert.equal(boolQAMTfF1, true)
		await expect(WheatFarmFNcTZOr.increaseAllowance.call(address6XKzMo, uintRq2Lv5l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringv0eCyhq = "E43NmFhXYoHeED7CbokdouucFzycu9XqjTJRDe4mXW"
		const stringznF4Zw6 = "YTdk7Ddr8wUB7GkoNau1dDUQXFTCMFQbL"
		const uintkZLrKvT = BigInt("55")
		const WheatFarmNtQyhI1 = await WheatFarm.new(stringv0eCyhq, stringznF4Zw6, uintkZLrKvT, {from: accounts[1]});
		const uintxg6FoHv = BigInt("1351")
		const addressnefwcVG = accounts[5]
		const addressbi6fIf = accounts[2]
		const uintEosWxTu = BigInt("1779")
		const addressthIjMG = accounts[0]
		const uintLfvAzzP = BigInt("1474")
		const addressNNRphLC = accounts[3]
		const uintPVpruSU = BigInt("1855")
		const addressbmIBlAn = accounts[0]
		const addressE1jOTvD = accounts[1]
		const boolrArjJ5C = await WheatFarmNtQyhI1.transferFrom.call(addressbi6fIf, addressnefwcVG, uintxg6FoHv, {from: accounts[1]});
		const boolOyDJRd = await WheatFarmNtQyhI1.approve.call(addressthIjMG, uintEosWxTu, {from: "0x0000000000000000000000000000000000000001"});
		const boolTFs3Dv2 = await WheatFarmNtQyhI1.transfer.call(addressNNRphLC, uintLfvAzzP, {from: accounts[0]});
		const boolTvx6Kj = await WheatFarmNtQyhI1.transferFrom.call(addressE1jOTvD, addressbmIBlAn, uintPVpruSU, {from: accounts[3]});
		const uint8qdNOyNf = await WheatFarmNtQyhI1.decimals.call({from: accounts[2]});

		await expect(WheatFarmNtQyhI1.transferFrom.call(addressbi6fIf, addressnefwcVG, uintxg6FoHv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQSU3pbe = "Ot"
		const stringkP0iR5F = "FXpVi1I4GglN7Oo8b2Uq1qkc7iKhzU1e1J5WjoixD2Z1Gd5sqXUQryL6uxtVCBJeVy"
		const uintvZOd4nQ = BigInt("876")
		const WheatFarmFNcTZOr = await WheatFarm.new(stringQSU3pbe, stringkP0iR5F, uintvZOd4nQ, {from: accounts[1]});
		const addressBwiubFa = accounts[5]
		const addressXj7hid = accounts[4]
		const uintwEjteNM = BigInt("1801")
		const addressYonnEHY = accounts[1]
		const addressUCFdLhZ = accounts[5]
		const uintsXFyvrl = await WheatFarmFNcTZOr.allowance.call(addressXj7hid, addressBwiubFa, {from: accounts[1]});
		const boollzjBVd = await WheatFarmFNcTZOr.approve.call(addressYonnEHY, uintwEjteNM, {from: accounts[3]});
		const boolq3xSNnj = await WheatFarmFNcTZOr.transferownership.call(addressUCFdLhZ, {from: accounts[4]});

		assert.equal(boollzjBVd, true)
		assert.equal(uintsXFyvrl, BigInt("0"))
		await expect(WheatFarmFNcTZOr.transferownership.call(addressUCFdLhZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQSU3pbe = "Ot"
		const stringkP0iR5F = "FXpVi1I4GglN7Oo8b2Uq1qkc7iKhzU1e1J5WjoixD2Z1Gd5sqXUQryL6uxtVCBJeVy"
		const uintExxvuUi = BigInt("876")
		const WheatFarmFNcTZOr = await WheatFarm.new(stringQSU3pbe, stringkP0iR5F, uintExxvuUi, {from: accounts[1]});
		const uintcDLOdrI = BigInt("16")
		const addresswuMckj = accounts[1]
		const addressLlzDkJC = accounts[1]
		const addressfGNjwRD = accounts[5]
		const addressyp43Ii3 = accounts[4]
		const uintQYCPePc = BigInt("909")
		const addressYOHOhDP = accounts[3]
		const uintHFWr4vz = BigInt("2026")
		const address1iZqGA = accounts[2]
		const uintjjnrL5 = BigInt("1034")
		const addressgzE5nJz = accounts[5]
		const addressTKAT6b1 = accounts[0]
		const uintg2DpV2f = BigInt("419")
		const addressnIvXsNp = accounts[1]
		const addressVaqWJi0 = accounts[2]
		const uintm4PS57 = BigInt("1534")
		const addressdsOYguV = accounts[3]
		const uintticUoYZ = BigInt("2037")
		const addressir6t5dn = accounts[1]
		const addressJMEbkHh = accounts[3]
		const uinttboC2fd = BigInt("1118")
		const addressbFjanzY = accounts[4]
		const booluBBvZqk = await WheatFarmFNcTZOr.approveAndCall.call(addresswuMckj, uintcDLOdrI, {from: accounts[1]});
		const boolQdcAkf = await WheatFarmFNcTZOr.transferownership.call(addressLlzDkJC, {from: "0x0000000000000000000000000000000000000001"});
		const uintsXFyvrl = await WheatFarmFNcTZOr.allowance.call(addressyp43Ii3, addressfGNjwRD, {from: accounts[1]});
		const boolAdUgJs = await WheatFarmFNcTZOr.approve.call(addressYOHOhDP, uintQYCPePc, {from: accounts[2]});
		const boolzIAk8hT = await WheatFarmFNcTZOr.increaseAllowance.call(address1iZqGA, uintHFWr4vz, {from: accounts[2]});
		const boolL26Cjhc = await WheatFarmFNcTZOr.transferFrom.call(addressTKAT6b1, addressgzE5nJz, uintjjnrL5, {from: accounts[2]});
		const boolly2Ckdn = await WheatFarmFNcTZOr.transferFrom.call(addressVaqWJi0, addressnIvXsNp, uintg2DpV2f, {from: "0x0000000000000000000000000000000000000001"});
		const boolWptdskS = await WheatFarmFNcTZOr.transfer.call(addressdsOYguV, uintm4PS57, {from: accounts[4]});
		const boolesE8gh = await WheatFarmFNcTZOr.transferFrom.call(addressJMEbkHh, addressir6t5dn, uintticUoYZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolNHhauDY = await WheatFarmFNcTZOr.transfer.call(addressbFjanzY, uinttboC2fd, {from: accounts[3]});

		assert.equal(booluBBvZqk, true)
		await expect(WheatFarmFNcTZOr.transferownership.call(addressLlzDkJC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringqOTNubo = "ZIxzrGg7JmfDHtx2Vyv4JYIcLc5iMdDYDXg2k8mnc4drbmN5xivJiDAB"
		const stringcKqlpTn = "DKcgRgOXEfzntpbVuO1NbPW3U9GCplefdYLGct6hxogbBPMA1RfHvIiSCbiFoQ8qX"
		const uintwBbCN70 = BigInt("22")
		const WheatFarmfYR8UHG = await WheatFarm.new(stringqOTNubo, stringcKqlpTn, uintwBbCN70, {from: accounts[3]});
		const addressxlyOkCS = accounts[5]
		const uintehAjWCt = BigInt("72")
		const addressw3xRNs9 = "0x0000000000000000000000000000000000000002"
		const uintewWTrJo = await WheatFarmfYR8UHG.totalSupply.call({from: accounts[3]});
		const boolusB6tub = await WheatFarmfYR8UHG.transferownership.call(addressxlyOkCS, {from: accounts[3]});
		const bool6iLEh7 = await WheatFarmfYR8UHG.transfer.call(addressw3xRNs9, uintehAjWCt, {from: accounts[1]});

		assert.equal(boolusB6tub, true)
		assert.equal(uintewWTrJo, BigInt("22000000000000000000"))
		await expect(WheatFarmfYR8UHG.transfer.call(addressw3xRNs9, uintehAjWCt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringqOTNubo = "ZIxzrGg7JmfDHtx2Vyv4JYIcLc5iMdDYDXg2k8mnc4drbmN5xivJiDAB"
		const stringcKqlpTn = "DKcgRgOXEfzntpbVuO1NbPW3U9GCplefdYLGct6hxogbBPMA1RfHvIiSCbiFoQ8qX"
		const uintSTRf9IG = BigInt("22")
		const WheatFarmfYR8UHG = await WheatFarm.new(stringqOTNubo, stringcKqlpTn, uintSTRf9IG, {from: accounts[3]});
		const uintkQUcWug = BigInt("0")
		const addressQcNQZH = accounts[5]
		const uintoSMgqCd = BigInt("1518")
		const addressqNSZeDP = accounts[4]
		const uintd4LYXp0 = BigInt("1764")
		const addressI9ltCZA = accounts[2]
		const addressHkZifrd = accounts[0]
		const addresssYkHOlz = accounts[5]
		const uintgA1eTf5 = BigInt("1125")
		const addressMQuHkYI = accounts[2]
		const uintZaUAdd = BigInt("568")
		const addresskpbHaPT = accounts[0]
		const boolXEugoLy = await WheatFarmfYR8UHG.transfer.call(addressQcNQZH, uintkQUcWug, {from: accounts[4]});
		const boolGsYMt71 = await WheatFarmfYR8UHG.approve.call(addressqNSZeDP, uintoSMgqCd, {from: accounts[4]});
		const boolE4N6jus = await WheatFarmfYR8UHG.approve.call(addressI9ltCZA, uintd4LYXp0, {from: accounts[2]});
		const uinttMefBL = await WheatFarmfYR8UHG.allowance.call(addresssYkHOlz, addressHkZifrd, {from: accounts[0]});
		const boolc8UOBMZ = await WheatFarmfYR8UHG.approve.call(addressMQuHkYI, uintgA1eTf5, {from: accounts[2]});
		const boolhf99kGD = await WheatFarmfYR8UHG.decreaseAllowance.call(addresskpbHaPT, uintZaUAdd, {from: accounts[2]});

		assert.equal(boolE4N6jus, true)
		assert.equal(boolGsYMt71, true)
		assert.equal(boolXEugoLy, true)
		assert.equal(boolc8UOBMZ, true)
		assert.equal(uinttMefBL, BigInt("0"))
		await expect(WheatFarmfYR8UHG.decreaseAllowance.call(addresskpbHaPT, uintZaUAdd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringjeG81dM = "gxa1R2tpAjRCzDDUqZ"
		const stringz9qTzrZ = "cR8zQQionmjCswnaihh4XAxEWcHlTnXyFrCNbJTKSAJCjdNM9XtIlFSynGwpR4LhSSZERGpYLBmWT"
		const uintNRgRBAT = BigInt("1523")
		const WheatFarmjI9WqBB = await WheatFarm.new(stringjeG81dM, stringz9qTzrZ, uintNRgRBAT, {from: accounts[1]});
		const uintt9Z1mCZ = BigInt("979")
		const addressiwPopzW = accounts[2]
		const addresstV9pAJK = accounts[0]
		const addresszvoVccT = accounts[1]
		const uintKSXD1Ek = BigInt("1147")
		const addresskhoVlcV = accounts[3]
		const uintUOGdEy = BigInt("0")
		const addressPzHKEeM = accounts[3]
		const addressbNP8SDR = accounts[5]
		const addresstJ3fML = accounts[0]
		const uintXfSFGk5 = BigInt("832")
		const addresshKjlnEQ = "0x0000000000000000000000000000000000000001"
		const uintEF1Wz1P = BigInt("1669")
		const addresse7DAacO = accounts[3]
		const boolSUTKTqE = await WheatFarmjI9WqBB.approve.call(addressiwPopzW, uintt9Z1mCZ, {from: accounts[1]});
		const uint7796RO = await WheatFarmjI9WqBB.allowance.call(addresszvoVccT, addresstV9pAJK, {from: accounts[3]});
		const stringBqfsfC = await WheatFarmjI9WqBB.name.call({from: accounts[0]});
		const bool5b7I4h = await WheatFarmjI9WqBB.approve.call(addresskhoVlcV, uintKSXD1Ek, {from: accounts[4]});
		const uint8gUB94cw = await WheatFarmjI9WqBB.decimals.call({from: accounts[2]});
		const stringtLqqcq7 = await WheatFarmjI9WqBB.name.call({from: accounts[0]});
		const boolv1TiOro = await WheatFarmjI9WqBB.approveAndCall.call(addressPzHKEeM, uintUOGdEy, {from: accounts[1]});
		const uintgHM5YnG = await WheatFarmjI9WqBB.allowance.call(addresstJ3fML, addressbNP8SDR, {from: accounts[4]});
		const booldUMuAqF = await WheatFarmjI9WqBB.transfer.call(addresshKjlnEQ, uintXfSFGk5, {from: accounts[0]});
		const boolRZRKQsb = await WheatFarmjI9WqBB.increaseAllowance.call(addresse7DAacO, uintEF1Wz1P, {from: accounts[4]});

		assert.equal(bool5b7I4h, true)
		assert.equal(boolSUTKTqE, true)
		assert.equal(boolv1TiOro, true)
		assert.equal(stringBqfsfC, "gxa1R2tpAjRCzDDUqZ")
		assert.equal(stringtLqqcq7, "gxa1R2tpAjRCzDDUqZ")
		assert.equal(uint7796RO, BigInt("0"))
		assert.equal(uint8gUB94cw, BigInt("18"))
		assert.equal(uintgHM5YnG, BigInt("0"))
		await expect(WheatFarmjI9WqBB.transfer.call(addresshKjlnEQ, uintXfSFGk5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})