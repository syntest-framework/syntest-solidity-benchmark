const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintJ8JRyzs = BigInt("1843")
		const stringeDZpeXJ = "Yl3jJ5QJxdzkKBphd70gOezNzGO2egXoi9Qe3CONpj0koHOLVCVwPogdFsnboDlxEzy6y5HQyuDIK"
		const stringWrfT44V = "huw7GKEN2OlGlCCoRcOP19VocDPtUYnWRjjw6m4N5qmbMfdvvOOjA5qHvd74I3tGmHSCGGUusiay67RK3T"
		const uintG3aZfi5 = BigInt("957")
		const TetherTokenXk5rL8v = await TetherToken.new(uintJ8JRyzs, stringeDZpeXJ, stringWrfT44V, uintG3aZfi5, {from: accounts[4]});
		const addressXXfSVY = "0x0000000000000000000000000000000000000001"
		const addressXlO7Y0J = accounts[4]
		const addressTcaHknV = accounts[4]
		const addressDpTEJ7d = accounts[1]
		const uintkAbOhqp = BigInt("381")
		const addressFp0lWNh = accounts[4]
		const addresseRK4alw = accounts[5]
		const addresswxn1P7n = accounts[3]
		const uintL7mk9T2 = BigInt("1353")
		const address0oY5oc = accounts[2]
		const uintJyDfLTh = await TetherTokenXk5rL8v.allowance.call(addressXlO7Y0J, addressXXfSVY, {from: accounts[4]});
		const uintHbTZWP = await TetherTokenXk5rL8v.allowance.call(addressDpTEJ7d, addressTcaHknV, {from: accounts[5]});
//		const addresseinhn5V = await TetherTokenXk5rL8v.transferFrom.call(addresseRK4alw, addressFp0lWNh, uintkAbOhqp, {from: accounts[1]});
//		const uintrAvird4 = await TetherTokenXk5rL8v.balanceOf.call(addresswxn1P7n, {from: accounts[1]});
//		const addressVhDEAiF = await TetherTokenXk5rL8v.approve.call(address0oY5oc, uintL7mk9T2, {from: accounts[3]});

		assert.equal(uintHbTZWP, BigInt("0"))
		assert.equal(uintJyDfLTh, BigInt("0"))
		await expect(TetherTokenXk5rL8v.transferFrom.call(addresseRK4alw, addressFp0lWNh, uintkAbOhqp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintFpYbIfd = BigInt("703")
		const stringWfFMkN = "Ceg9X4KuZOU4uYRuDPXsBPOTpcrJqe5LI3XneDDGHsX3BP"
		const stringQaQ6Xbv = "VkynU4vqs9OqW4v8i4921zuXG5b1BjVbpdEC7AWzSbChgmEbjENMpyVk"
		const uintUSWjR6H = BigInt("770")
		const TetherTokenecaniNg = await TetherToken.new(uintFpYbIfd, stringWfFMkN, stringQaQ6Xbv, uintUSWjR6H, {from: accounts[1]});
		const uintDVuxmn = BigInt("1952")
		const addressACPRNBy = accounts[4]
		const addressSadP6Sk = accounts[1]
		const uintBX76D2C = BigInt("695")
		const addressdkT0IZo = accounts[1]
		const uintIgEdEu = BigInt("357")
		const addressfk83xBT = accounts[0]
		const addressmYv1hE = accounts[1]
		const uintIFANT7p = BigInt("2022")
		const addressPbgpa2m = accounts[2]
		const addressoJXHWai = accounts[3]
//		const uinthOYP56U = await TetherTokenecaniNg.redeem.call(uintDVuxmn, {from: accounts[2]});
//		const uintVghngwJ = await TetherTokenecaniNg.allowance.call(addressSadP6Sk, addressACPRNBy, {from: accounts[4]});
//		const addressjG0CQQf = await TetherTokenecaniNg.approve.call(addressdkT0IZo, uintBX76D2C, {from: accounts[1]});
//		const addressE8F6r0d = await TetherTokenecaniNg.transferFrom.call(addressmYv1hE, addressfk83xBT, uintIgEdEu, {from: accounts[5]});
//		const addressyyY71HE = await TetherTokenecaniNg.transferFrom.call(addressoJXHWai, addressPbgpa2m, uintIFANT7p, {from: accounts[2]});

		await expect(TetherTokenecaniNg.redeem.call(uintDVuxmn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGvmqZKT = BigInt("1054")
		const stringauRV3iS = "jflWiVSetGPtleqWdTmtr9rWaOJJXnf"
		const stringKsIJhX8 = "eMEm4YNG2jZWR5AdRiR2sopu2jTEXUcm36Otgx55w4yQzlL"
		const uintV2f4Sfo = BigInt("141")
		const TetherTokenetHv3Q = await TetherToken.new(uintGvmqZKT, stringauRV3iS, stringKsIJhX8, uintV2f4Sfo, {from: accounts[2]});
		const addressdPKt2rg = accounts[4]
		const addressTyBvg4m = accounts[5]
		const uintRLvkWo8 = BigInt("166")
		const addressnvA4Zj1 = accounts[2]
		const uintsjTOG0F = await TetherTokenetHv3Q.allowance.call(addressTyBvg4m, addressdPKt2rg, {from: accounts[1]});
//		const addressfnX2F8T = await TetherTokenetHv3Q.transfer.call(addressnvA4Zj1, uintRLvkWo8, {from: accounts[1]});
//		const uintgbOcavh = await TetherTokenetHv3Q.totalSupply.call({from: accounts[2]});

		assert.equal(uintsjTOG0F, BigInt("0"))
		await expect(TetherTokenetHv3Q.transfer.call(addressnvA4Zj1, uintRLvkWo8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintuVq0vD4 = BigInt("1558")
		const stringrrDM5aT = "sBdDFigffmP47eSSXzzsx9SgrCvRlmdNd2eiUdu93"
		const stringXrIuLla = "0n1sD7Afo5cpUSN5jTVwE2Sz5qsjfC3tGH0H6m09dAo"
		const uintRbWl1LV = BigInt("1783")
		const TetherTokenRpdwirw = await TetherToken.new(uintuVq0vD4, stringrrDM5aT, stringXrIuLla, uintRbWl1LV, {from: "0x0000000000000000000000000000000000000001"});
		const uintebLLRmH = BigInt("604")
		const uintLbHfAPG = BigInt("405")
		const uintp6KK7K = BigInt("1628")
		const addressydrw4O = accounts[0]
		const addressJBMEWgA = accounts[3]
		const addressCLKq01f = accounts[1]
		const addressvuYj1D = accounts[5]
		const addressQlL0hmC = "0x0000000000000000000000000000000000000001"
		const uintIGws39 = await TetherTokenRpdwirw.setParams.call(uintLbHfAPG, uintebLLRmH, {from: accounts[4]});
		const addressUeKmlo6 = await TetherTokenRpdwirw.transfer.call(addressydrw4O, uintp6KK7K, {from: accounts[4]});
		const uintP07HV10 = await TetherTokenRpdwirw.allowance.call(addressCLKq01f, addressJBMEWgA, {from: accounts[2]});
		const uintKO3oHC6 = await TetherTokenRpdwirw.allowance.call(addressQlL0hmC, addressvuYj1D, {from: accounts[1]});
	});

	it('test for TetherToken', async () => {
		const uintQ1RMpp3 = BigInt("941")
		const stringQxzq5kl = "B7F628J"
		const stringwb5YW5a = "4"
		const uintMWY5eN9 = BigInt("669")
		const TetherTokenH6dRQwY = await TetherToken.new(uintQ1RMpp3, stringQxzq5kl, stringwb5YW5a, uintMWY5eN9, {from: accounts[0]});
		const addressWabItDY = accounts[4]
		const addressRRBaSj = accounts[0]
		const uintnouZRmI = BigInt("512")
		const addressGZAgUSx = accounts[5]
		const uintgt6bixp = await TetherTokenH6dRQwY.balanceOf.call(addressWabItDY, {from: accounts[1]});
		const uintjO45iF7 = await TetherTokenH6dRQwY.balanceOf.call(addressRRBaSj, {from: accounts[0]});
		const uintQfPIocs = await TetherTokenH6dRQwY.totalSupply.call({from: accounts[1]});
		const addressKwlUbmW = await TetherTokenH6dRQwY.approve.call(addressGZAgUSx, uintnouZRmI, {from: accounts[5]});

		assert.equal(uintQfPIocs, BigInt("941"))
		assert.equal(uintgt6bixp, BigInt("0"))
		assert.equal(uintjO45iF7, BigInt("941"))
	});

	it('test for TetherToken', async () => {
		const uintjedKt5X = BigInt("614")
		const stringhytI6bl = "8BGjXpSkrnc7euHORXRzN2SSJh5ZVZxV68ffFGV4"
		const stringBmQbNFx = "TLHudtkCmODDQqqKHYj9zjad9NlCAPxXsKAsOeRj9S2i"
		const uintRkwezjn = BigInt("1103")
		const TetherTokenAlkAtZo = await TetherToken.new(uintjedKt5X, stringhytI6bl, stringBmQbNFx, uintRkwezjn, {from: accounts[3]});
		const uinthPmnBnw = BigInt("763")
		const addressBOKz6Q0 = accounts[0]
		const uintSjXFJi0 = await TetherTokenAlkAtZo.totalSupply.call({from: accounts[4]});
//		const uintJY6v63E = await TetherTokenAlkAtZo.issue.call(uinthPmnBnw, {from: accounts[1]});
//		const addressRqbhI8H = await TetherTokenAlkAtZo.deprecate.call(addressBOKz6Q0, {from: accounts[2]});

		assert.equal(uintSjXFJi0, BigInt("614"))
		await expect(TetherTokenAlkAtZo.issue.call(uinthPmnBnw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLJBpPJ1 = BigInt("1719")
		const stringCRYvG76 = "j04giCrWj4CTyz"
		const stringqrCAbyu = "dGRmUkXoyjeWhKPdfW8SvCm7okWorpfJqRzSug1xe7iVuis"
		const uintpq734Z = BigInt("1477")
		const TetherTokenFsVLaXe = await TetherToken.new(uintLJBpPJ1, stringCRYvG76, stringqrCAbyu, uintpq734Z, {from: accounts[4]});
		const uintvrMTyr = BigInt("1940")
		const addressKbbX2w8 = accounts[3]
		const addressBf1TUHx = "0x0000000000000000000000000000000000000001"
		const addressdHcu82E = accounts[5]
		const uintpetL55a = BigInt("894")
		const addressJQ42CPW = "0x0000000000000000000000000000000000000001"
		const addressHNZOqU = accounts[4]
		const uintKrM4NUC = await TetherTokenFsVLaXe.issue.call(uintvrMTyr, {from: accounts[4]});
		const uintVU7ravf = await TetherTokenFsVLaXe.allowance.call(addressBf1TUHx, addressKbbX2w8, {from: accounts[1]});
//		const addressRFB20D = await TetherTokenFsVLaXe.deprecate.call(addressdHcu82E, {from: accounts[5]});
//		const uintCOeT8I = await TetherTokenFsVLaXe.redeem.call(uintpetL55a, {from: accounts[3]});
//		const uintylNPTAp = await TetherTokenFsVLaXe.allowance.call(addressHNZOqU, addressJQ42CPW, {from: accounts[2]});

		assert.equal(uintVU7ravf, BigInt("0"))
		await expect(TetherTokenFsVLaXe.deprecate.call(addressdHcu82E, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintvhgiAFA = BigInt("1054")
		const stringauRV3iS = "jflWiVSetGPtleqWdTmtr9rWaOJJXnf"
		const stringKsIJhX8 = "eMEm4YNG2jZWR5AdRiR2sopu2jTEXUcm36Otgx55w4yQzlL"
		const uintCggNOLk = BigInt("141")
		const TetherTokenetHv3Q = await TetherToken.new(uintvhgiAFA, stringauRV3iS, stringKsIJhX8, uintCggNOLk, {from: accounts[2]});
		const addressUa7oFp = accounts[4]
		const addressDDGOEs3 = accounts[5]
		const uintI3sV0ME = BigInt("1856")
		const uintGxAEr9C = BigInt("427")
		const uintsjTOG0F = await TetherTokenetHv3Q.allowance.call(addressDDGOEs3, addressUa7oFp, {from: accounts[1]});
//		const uintP4l7Vb = await TetherTokenetHv3Q.setParams.call(uintGxAEr9C, uintI3sV0ME, {from: accounts[1]});

		assert.equal(uintsjTOG0F, BigInt("0"))
		await expect(TetherTokenetHv3Q.setParams.call(uintGxAEr9C, uintI3sV0ME, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})