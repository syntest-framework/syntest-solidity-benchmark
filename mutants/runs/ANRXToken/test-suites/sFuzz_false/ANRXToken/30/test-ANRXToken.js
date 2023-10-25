const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintjvC5Ztc = BigInt("822")
		const stringFUgb2VY = "5Q2pAzYO5Ic9GRA44CnPu9qfTdIYpLPUJlTcC16DylXTH8S4wU4ZbjKiYNCfntQ8gXtxRtgJieC0rI1ExBd4nQ6rC"
		const stringhlZQIL = "ha6jJzIcenk0tKTqT5N9xwv8s5Soyg9ANP6zcg7amhnzYjj5kmWyDEfac92p2FWm"
		const uintoDmerjz = BigInt("1242")
		const ANRXTokenJfYDtA0 = await ANRXToken.new(uintjvC5Ztc, stringFUgb2VY, stringhlZQIL, uintoDmerjz, {from: accounts[3]});
		const uintaqOTC8G = BigInt("1636")
		const uintskX4fto = BigInt("959")
		const addresslxKKgDe = accounts[2]
		const addressao3MkoE = accounts[2]
		const uintSqaiAQU = await ANRXTokenJfYDtA0.issue.call(uintaqOTC8G, {from: accounts[1]});
		const uintvMUylU7 = await ANRXTokenJfYDtA0.totalSupply.call({from: accounts[5]});
		const uintQhkOt5b = await ANRXTokenJfYDtA0.issue.call(uintskX4fto, {from: accounts[0]});
		const uintL1qOz2J = await ANRXTokenJfYDtA0.allowance.call(addressao3MkoE, addresslxKKgDe, {from: accounts[4]});
		const uintg2V4vtO = await ANRXTokenJfYDtA0.totalSupply.call({from: accounts[0]});

		await expect(ANRXTokenJfYDtA0.issue.call(uintaqOTC8G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintuefIyPz = BigInt("871")
		const stringD82NaVw = "Mp59X7abrfzkUns9MlAHMLXGJdKKy6omrtkqIsbmvbwTqoM2zDYPAfyKEcchKUErHiNEpz3PtefkE5P16QNf"
		const stringWTUNwr = "lh6v3rAF1i7IPKflZHEpc8MvqjjcV5SuqlayxdIytMkR3NylyTQsu1HwKxmXiMQTbQm89"
		const uintkaVY2NE = BigInt("784")
		const ANRXTokenFX4THEz = await ANRXToken.new(uintuefIyPz, stringD82NaVw, stringWTUNwr, uintkaVY2NE, {from: accounts[0]});
		const uintLmK2RA9 = BigInt("2001")
		const addressZwy9XeY = accounts[2]
		const uintKweVAdI = BigInt("1638")
		const uintppPzo3D = BigInt("1811")
		const uintWaUSYC3 = BigInt("418")
		const addressYc4E9j4 = accounts[1]
		const boolt8dVjLa = await ANRXTokenFX4THEz.approve.call(addressZwy9XeY, uintLmK2RA9, {from: accounts[1]});
		const uintiRIyZcD = await ANRXTokenFX4THEz.issue.call(uintKweVAdI, {from: accounts[4]});
		const uinth0ervpZ = await ANRXTokenFX4THEz.issue.call(uintppPzo3D, {from: accounts[3]});
		const boolEts0D0W = await ANRXTokenFX4THEz.transfer.call(addressYc4E9j4, uintWaUSYC3, {from: accounts[1]});
		const uintVbjNdRi = await ANRXTokenFX4THEz.totalSupply.call({from: accounts[2]});

		assert.equal(boolt8dVjLa, true)
		await expect(ANRXTokenFX4THEz.issue.call(uintKweVAdI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintPjqeutE = BigInt("1163")
		const stringIahf2jl = "3jaYkF43o3P"
		const stringSZdUMTh = "lBpF5ttwU3cHPGe4IC"
		const uinttYJUtRD = BigInt("952")
		const ANRXTokenFfdo6jW = await ANRXToken.new(uintPjqeutE, stringIahf2jl, stringSZdUMTh, uinttYJUtRD, {from: accounts[1]});
		const addressnr2mUXs = accounts[4]
		const addressr830t7d = accounts[3]
		const uintWWNUWmG = BigInt("1316")
		const uintkMmWYP6 = await ANRXTokenFfdo6jW.allowance.call(addressr830t7d, addressnr2mUXs, {from: accounts[3]});
		const uintxdQhAkj = await ANRXTokenFfdo6jW.totalSupply.call({from: accounts[2]});
		const uintzFYhr6x = await ANRXTokenFfdo6jW.issue.call(uintWWNUWmG, {from: accounts[4]});

		assert.equal(uintkMmWYP6, BigInt("0"))
		assert.equal(uintxdQhAkj, BigInt("1163"))
		await expect(ANRXTokenFfdo6jW.issue.call(uintWWNUWmG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlnLI7I = BigInt("1968")
		const stringRnVtVKR = "s1QF5bWETUwEqGQNicXdGF1ePYoJ6jFs5P35U9yyI8HXIDKg18RnW8SCEiX0jRiTxFkj7paDY2mDdTmDQ3bfxReGrQt"
		const stringRcdV274 = "FBveDKOhx4WfAqRPnXgcubQ7rKYiI"
		const uintPpgU7JB = BigInt("1018")
		const ANRXTokenss5KHMr = await ANRXToken.new(uintlnLI7I, stringRnVtVKR, stringRcdV274, uintPpgU7JB, {from: accounts[2]});
		const uintIdMPKkH = BigInt("998")
		const addressbZadLmm = accounts[1]
		const address3CjCnZ = accounts[3]
		const addressHLtCzME = accounts[4]
		const boolKw0u5Qe = await ANRXTokenss5KHMr.approve.call(addressbZadLmm, uintIdMPKkH, {from: "0x0000000000000000000000000000000000000001"});
		const uintYXPGdOT = await ANRXTokenss5KHMr.balanceOf.call(address3CjCnZ, {from: accounts[0]});
		const uintfrNYsFC = await ANRXTokenss5KHMr.balanceOf.call(addressHLtCzME, {from: accounts[3]});

		assert.equal(boolKw0u5Qe, true)
		assert.equal(uintYXPGdOT, BigInt("0"))
		assert.equal(uintfrNYsFC, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintnToO8of = BigInt("656")
		const stringHEsMDJP = "1U6PXyBxvDWTbIxUhUUTlCxPcbskAhFKeRnXIWUCsJpNhl6oBzeIjDnNEhoEyDEz8YkXeJesQsMJeEKczNdCTLC"
		const stringyBBGGmF = "4WXLla3mBv3TxR1BA7dTuKI"
		const uintt5uWGeu = BigInt("745")
		const ANRXTokenk0iASc = await ANRXToken.new(uintnToO8of, stringHEsMDJP, stringyBBGGmF, uintt5uWGeu, {from: accounts[4]});
		const uint7QKhLw = BigInt("95")
		const addressCILlvda = accounts[3]
		const uintNjhjJMd = BigInt("172")
		const addressFSLBO7 = accounts[5]
		const uintV6rEIZ4 = BigInt("2031")
		const addressjxaPgP8 = accounts[0]
		const uintOJL2N5I = BigInt("946")
		const uintyh98Qek = await ANRXTokenk0iASc.redeem.call(uint7QKhLw, {from: accounts[4]});
		const addressnoCRsXA = await ANRXTokenk0iASc.deprecate.call(addressCILlvda, {from: accounts[1]});
		const uintf3YXby5 = await ANRXTokenk0iASc.redeem.call(uintNjhjJMd, {from: accounts[3]});
		const uintdcj9qG3 = await ANRXTokenk0iASc.balanceOf.call(addressFSLBO7, {from: "0x0000000000000000000000000000000000000001"});
		const boolSjwRaT = await ANRXTokenk0iASc.approve.call(addressjxaPgP8, uintV6rEIZ4, {from: accounts[5]});
		const uintiGoxKMK = await ANRXTokenk0iASc.redeem.call(uintOJL2N5I, {from: accounts[2]});

		await expect(ANRXTokenk0iASc.deprecate.call(addressCILlvda, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzgcmQh = BigInt("849")
		const stringd2GxF6 = "oGaFCdF4DNmYzRO5Yh5NYneIUB41kuTNXLfjW7nsTdPmlRY5ne"
		const stringoGF2ZIb = "XqJvQAP4TyHsbCHDn1DthdWvgr4b25U2jXHcPJTQs73zIkZ6NJqHaWnQXDamSGj08X0"
		const uintBswqwUk = BigInt("468")
		const ANRXTokenHSM4TO8 = await ANRXToken.new(uintzgcmQh, stringd2GxF6, stringoGF2ZIb, uintBswqwUk, {from: "0x0000000000000000000000000000000000000001"});
		const uintLXxpPMG = BigInt("471")
		const addressOq0132b = accounts[3]
		const addressJVRGlwX = accounts[2]
		const addressMRIiM09 = accounts[3]
		const uintR8NHzjV = BigInt("803")
		const addresscI8QHg1 = accounts[4]
		const addresshfXBXyr = accounts[0]
		const uint8lyruP = BigInt("1976")
		const addressTTapdkl = accounts[0]
		const addresskIDj2d = "0x0000000000000000000000000000000000000001"
		const uintKhewm1F = BigInt("915")
		const booltp51Fmd = await ANRXTokenHSM4TO8.transferFrom.call(addressJVRGlwX, addressOq0132b, uintLXxpPMG, {from: accounts[1]});
		const uintBJ9CMnm = await ANRXTokenHSM4TO8.balanceOf.call(addressMRIiM09, {from: accounts[1]});
		const boolw4YP8FW = await ANRXTokenHSM4TO8.transferFrom.call(addresshfXBXyr, addresscI8QHg1, uintR8NHzjV, {from: accounts[5]});
		const boolz3zYErp = await ANRXTokenHSM4TO8.approve.call(addressTTapdkl, uint8lyruP, {from: accounts[4]});
		const addressoul1y20 = await ANRXTokenHSM4TO8.deprecate.call(addresskIDj2d, {from: accounts[2]});
		const uintivcZcA = await ANRXTokenHSM4TO8.issue.call(uintKhewm1F, {from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uintzc7fHxH = BigInt("1968")
		const stringRnVtVKR = "s1QF5bWETUwEqGQNicXdGF1ePYoJ6jFs5P35U9yyI8HXIDKg18RnW8SCEiX0jRiTxFkj7paDY2mDdTmDQ3bfxReGrQt"
		const stringRcdV274 = "FBveDKOhx4WfAqRPnXgcubQ7rKYiI"
		const uintredvaAB = BigInt("1018")
		const ANRXTokenss5KHMr = await ANRXToken.new(uintzc7fHxH, stringRnVtVKR, stringRcdV274, uintredvaAB, {from: accounts[2]});
		const uintFNO9ZQA = BigInt("998")
		const addresscIfXVXN = accounts[1]
		const addressix1JMtC = accounts[3]
		const uintLUsBlSV = BigInt("1778")
		const addressLLtMrQS = "0x0000000000000000000000000000000000000001"
		const addressJltIkVA = accounts[0]
		const addressirBizt4 = accounts[4]
		const addressZTcyldQ = accounts[4]
		const boolKw0u5Qe = await ANRXTokenss5KHMr.approve.call(addresscIfXVXN, uintFNO9ZQA, {from: "0x0000000000000000000000000000000000000001"});
		const uintYXPGdOT = await ANRXTokenss5KHMr.balanceOf.call(addressix1JMtC, {from: accounts[0]});
		const boolypCnyb8 = await ANRXTokenss5KHMr.transferFrom.call(addressJltIkVA, addressLLtMrQS, uintLUsBlSV, {from: accounts[3]});
		const uintsH6M5K = await ANRXTokenss5KHMr.balanceOf.call(addressirBizt4, {from: accounts[0]});
		const uintfrNYsFC = await ANRXTokenss5KHMr.balanceOf.call(addressZTcyldQ, {from: accounts[3]});

		assert.equal(boolKw0u5Qe, true)
		assert.equal(uintYXPGdOT, BigInt("0"))
		await expect(ANRXTokenss5KHMr.transferFrom.call(addressJltIkVA, addressLLtMrQS, uintLUsBlSV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzONnl7 = BigInt("826")
		const stringfYw9wgg = "waoYTg3OcwF9iTLRCk706cbNisoTQixiPjQeIlMlSkjrDF1Nm2JdssXOEUa6yhnIM"
		const stringOtWazZy = "fRdbssTCa8CjqtpplowFExFNIl2Cz6d5DRKoCsRcAsd7yMKjIXHEeRG1BU3Pnt59XcB2BuFwm1WpdcIKcRtfDZ5u6E4LlglT"
		const uintHZ4XbIw = BigInt("596")
		const ANRXTokenhTJnH1J = await ANRXToken.new(uintzONnl7, stringfYw9wgg, stringOtWazZy, uintHZ4XbIw, {from: accounts[5]});
		const uintc5wf3cZ = BigInt("1943")
		const address0JGIii = accounts[3]
		const uintY2jCiyc = BigInt("124")
		const uintt7sD5mn = BigInt("1627")
		const addressqEF4v54 = accounts[3]
		const boolGfO7Cay = await ANRXTokenhTJnH1J.transfer.call(address0JGIii, uintc5wf3cZ, {from: accounts[2]});
		const uintcAsuq6U = await ANRXTokenhTJnH1J.totalSupply.call({from: accounts[3]});
		const uintedPwwZN = await ANRXTokenhTJnH1J.setParams.call(uintt7sD5mn, uintY2jCiyc, {from: accounts[4]});
		const uintdSBcvV = await ANRXTokenhTJnH1J.balanceOf.call(addressqEF4v54, {from: accounts[0]});

		await expect(ANRXTokenhTJnH1J.transfer.call(address0JGIii, uintc5wf3cZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintIdRAf5 = BigInt("1968")
		const stringRnVtVKR = "s1QF5bWETUwEqGQNicXdGF1ePYoJ6jFs5P35U9yyI8HXIDKg18RnW8SCEiX0jRiTxFkj7paDY2mDdTmDQ3bfxReGrQt"
		const stringRcdV274 = "FBveDKOhx4WfAqRPnXgcubQ7rKYiI"
		const uintMHmvN2T = BigInt("1018")
		const ANRXTokenss5KHMr = await ANRXToken.new(uintIdRAf5, stringRnVtVKR, stringRcdV274, uintMHmvN2T, {from: accounts[2]});
		const addressDEXjtLo = accounts[3]
		const addressMGFmU2t = accounts[4]
		const uintwzJArpu = BigInt("1129")
		const uintwE7xMVS = BigInt("1326")
		const addressE7NEvMZ = await ANRXTokenss5KHMr.deprecate.call(addressDEXjtLo, {from: accounts[2]});
		const uintfrNYsFC = await ANRXTokenss5KHMr.balanceOf.call(addressMGFmU2t, {from: accounts[3]});
		const uintDwUbQTa = await ANRXTokenss5KHMr.setParams.call(uintwE7xMVS, uintwzJArpu, {from: accounts[0]});

		assert.equal(uintfrNYsFC, BigInt("0"))
		await expect(ANRXTokenss5KHMr.setParams.call(uintwE7xMVS, uintwzJArpu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintH4OwXJU = BigInt("1968")
		const stringRnVtVKR = "s1QF5bWETUwEqGQNicXdGF1ePYoJ6jFs5P35U9yyI8HXIDKg18RnW8SCEiX0jRiTxFkj7paDY2mDdTmDQ3bfxReGrQt"
		const stringRcdV274 = "FBveDKOhx4WfAqRPnXgcubQ7rKYiI"
		const uinttUTLC7 = BigInt("1018")
		const ANRXTokenss5KHMr = await ANRXToken.new(uintH4OwXJU, stringRnVtVKR, stringRcdV274, uinttUTLC7, {from: accounts[2]});
		const uintiC17cm7 = BigInt("998")
		const addressdUeVwMM = accounts[3]
		const uintbKOwbtK = BigInt("1288")
		const uintFKyT6mc = BigInt("2031")
		const addressHosKmyn = accounts[3]
		const addressdJM12HV = accounts[1]
		const boolKw0u5Qe = await ANRXTokenss5KHMr.approve.call(addressdUeVwMM, uintiC17cm7, {from: "0x0000000000000000000000000000000000000001"});
		const uintOUoysFo = await ANRXTokenss5KHMr.issue.call(uintbKOwbtK, {from: accounts[2]});
		const boolmVXJNfg = await ANRXTokenss5KHMr.transferFrom.call(addressdJM12HV, addressHosKmyn, uintFKyT6mc, {from: accounts[1]});

		assert.equal(boolKw0u5Qe, true)
		await expect(ANRXTokenss5KHMr.transferFrom.call(addressdJM12HV, addressHosKmyn, uintFKyT6mc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintSXUuf5n = BigInt("1968")
		const stringRnVtVKR = "s1QF5bWETUwEqGQNicXdGF1ePYoJ6jFs5P35U9yyI8HXIDKg18RnW8SCEiX0jRiTxFkj7paDY2mDdTmDQ3bfxReGrQt"
		const stringRcdV274 = "FBveDKOhx4WfAqRPnXgcubQ7rKYiI"
		const uintdUXYEBg = BigInt("1018")
		const ANRXTokenss5KHMr = await ANRXToken.new(uintSXUuf5n, stringRnVtVKR, stringRcdV274, uintdUXYEBg, {from: accounts[2]});
		const uintEtzV4Dc = BigInt("611")
		const uintrGGSPcc = BigInt("1466")
		const addressEdIKExe = accounts[5]
		const uintM7FaEtJ = await ANRXTokenss5KHMr.setParams.call(uintrGGSPcc, uintEtzV4Dc, {from: accounts[2]});
		const uintfrNYsFC = await ANRXTokenss5KHMr.balanceOf.call(addressEdIKExe, {from: accounts[3]});

		await expect(ANRXTokenss5KHMr.setParams.call(uintrGGSPcc, uintEtzV4Dc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})