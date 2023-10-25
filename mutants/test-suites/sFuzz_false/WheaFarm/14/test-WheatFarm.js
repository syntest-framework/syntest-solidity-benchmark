const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringCqS3xuM = "iCe98UlpnI6Bc3nzBCbL9VETI6LIDcyE3lqyr6ukbg6RPj2MkFRsrRznX8R1t"
		const stringPInvwyH = "qzVX7RJNh"
		const uintZodXMSe = BigInt("56")
		const WheatFarmumq5MUf = await WheatFarm.new(stringCqS3xuM, stringPInvwyH, uintZodXMSe, {from: accounts[3]});
		const uintkBDbxO = BigInt("873")
		const addressizhd6Vc = accounts[0]
		const uintX6Lr7fd = BigInt("442")
		const addressa3mFB6v = accounts[4]
		const uint5Kkb0s = BigInt("1447")
		const addressJtwl9zy = accounts[4]
		const uint6BqDah = BigInt("863")
		const addressfDLvlRq = accounts[1]
		const uintjqqpmbw = BigInt("2009")
		const addressz6yobsK = accounts[3]
		const boolLJl0Rmk = await WheatFarmumq5MUf.approve.call(addressizhd6Vc, uintkBDbxO, {from: accounts[3]});
		const stringFXDF05I = await WheatFarmumq5MUf.symbol.call({from: accounts[2]});
		const bools7sMaK8 = await WheatFarmumq5MUf.approve.call(addressa3mFB6v, uintX6Lr7fd, {from: accounts[2]});
		const boolcg5PI5a = await WheatFarmumq5MUf.approve.call(addressJtwl9zy, uint5Kkb0s, {from: accounts[3]});
		const boolbeiVZiN = await WheatFarmumq5MUf.approve.call(addressfDLvlRq, uint6BqDah, {from: accounts[4]});
		const boolU1YXrO4 = await WheatFarmumq5MUf.transfer.call(addressz6yobsK, uintjqqpmbw, {from: accounts[3]});

		assert.equal(boolLJl0Rmk, true)
		assert.equal(boolU1YXrO4, true)
		assert.equal(boolbeiVZiN, true)
		assert.equal(boolcg5PI5a, true)
		assert.equal(bools7sMaK8, true)
		assert.equal(stringFXDF05I, "qzVX7RJNh")
	});

	it('test for WheatFarm', async () => {
		const stringXC9JecE = "yaSQrqndyCU"
		const stringZp7mgMm = "jdPXWqDFL0cxGVoyK5B7Q1jmjeit3VPw0xoxGRxHS"
		const uintTgrejAo = BigInt("6")
		const WheatFarmHl0B39J = await WheatFarm.new(stringXC9JecE, stringZp7mgMm, uintTgrejAo, {from: accounts[2]});
		const uintzOwU2K = BigInt("1130")
		const addressqdA4mG = accounts[0]
		const uintxMSUsEc = BigInt("1246")
		const addressaY5o7KN = accounts[5]
		const uinta9WYCTT = BigInt("271")
		const addressCHhYAVi = accounts[2]
		const uintjp8dciq = BigInt("547")
		const addressVL2ynA = accounts[4]
//		const boolPm4w57t = await WheatFarmHl0B39J.decreaseAllowance.call(addressqdA4mG, uintzOwU2K, {from: accounts[3]});
//		const boolsFVc5kp = await WheatFarmHl0B39J.decreaseAllowance.call(addressaY5o7KN, uintxMSUsEc, {from: accounts[3]});
//		const boolpFHq6U = await WheatFarmHl0B39J.transfer.call(addressCHhYAVi, uinta9WYCTT, {from: accounts[0]});
//		const boolSqTeDMY = await WheatFarmHl0B39J.approveAndCall.call(addressVL2ynA, uintjp8dciq, {from: accounts[5]});

		await expect(WheatFarmHl0B39J.decreaseAllowance.call(addressqdA4mG, uintzOwU2K, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringdtTUaf = "JFHBHoIhkKLIOG0O7qKQ7u0bkx91AOjvBNbDipnfHrA3SG3Iw9D3EJt7f3qOmPIpEs5vQalNGetK"
		const stringE13CFrr = "babc0U11qXq21bw4u1GPdkZ8Wojgu12un1t76wsPPBUqpYft8rYJq"
		const uintnyBt5rG = BigInt("90")
		const WheatFarmpBKCqO = await WheatFarm.new(stringdtTUaf, stringE13CFrr, uintnyBt5rG, {from: accounts[2]});
		const uintBGqRTjj = BigInt("351")
		const addresslBStTF = accounts[5]
		const addressMqDf3FN = accounts[2]
		const uinthawXB2z = BigInt("633")
		const addressFY6nuwL = accounts[4]
		const uintnasAjEN = BigInt("1974")
		const addressx1X30YJ = accounts[1]
//		const boolYIJjzal = await WheatFarmpBKCqO.transferFrom.call(addressMqDf3FN, addresslBStTF, uintBGqRTjj, {from: accounts[1]});
//		const boolSHHweD8 = await WheatFarmpBKCqO.approve.call(addressFY6nuwL, uinthawXB2z, {from: accounts[4]});
//		const boolEFJG6zm = await WheatFarmpBKCqO.transfer.call(addressx1X30YJ, uintnasAjEN, {from: accounts[4]});
//		const uint8TJPRmUh = await WheatFarmpBKCqO.decimals.call({from: accounts[1]});
//		const stringrqtJU1 = await WheatFarmpBKCqO.name.call({from: accounts[3]});

		await expect(WheatFarmpBKCqO.transferFrom.call(addressMqDf3FN, addresslBStTF, uintBGqRTjj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringl0ATt8 = "8OKOEoUClwHfoe"
		const stringFBUjmXw = "UT72Cs8v1"
		const uinta4DKIE = BigInt("172")
		const WheatFarmFQZVATs = await WheatFarm.new(stringl0ATt8, stringFBUjmXw, uinta4DKIE, {from: accounts[2]});
		const uintMysdeBK = BigInt("1232")
		const addressNHGVJUC = accounts[5]
		const addressU2io2MK = accounts[3]
		const uinthEVXuO0 = BigInt("1722")
		const addressrdVUB3R = accounts[0]
//		const booll8zZcjY = await WheatFarmFQZVATs.transferFrom.call(addressU2io2MK, addressNHGVJUC, uintMysdeBK, {from: accounts[3]});
//		const boolgeVlvc2 = await WheatFarmFQZVATs.approve.call(addressrdVUB3R, uinthEVXuO0, {from: accounts[3]});

		await expect(WheatFarmFQZVATs.transferFrom.call(addressU2io2MK, addressNHGVJUC, uintMysdeBK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringI2YwyiB = "DlWizN31IF4E5lETwMmBPKDjU8VhS1Xr64fMph3kYQHwx8uv76UNumwVKhAUQBb"
		const stringORZuD4f = "F1jAxiG5X48dB73ECEpZ9ytKljSAk8F1zwLJPez5DBfAMbheqXID0dTI2CUR83"
		const uintGqUYFkf = BigInt("229")
		const WheatFarmmYkgWnR = await WheatFarm.new(stringI2YwyiB, stringORZuD4f, uintGqUYFkf, {from: accounts[3]});
		const uintaMJ8DCC = BigInt("1092")
		const addressfhBpk08 = "0x0000000000000000000000000000000000000001"
		const uintkhWwoFv = BigInt("1441")
		const addresshFDJ6eX = accounts[0]
//		const boolzM858as = await WheatFarmmYkgWnR.approveAndCall.call(addressfhBpk08, uintaMJ8DCC, {from: accounts[0]});
//		const boolkVZK7WW = await WheatFarmmYkgWnR.decreaseAllowance.call(addresshFDJ6eX, uintkhWwoFv, {from: accounts[4]});
//		const uint8vqLUuHI = await WheatFarmmYkgWnR.decimals.call({from: accounts[4]});

		await expect(WheatFarmmYkgWnR.approveAndCall.call(addressfhBpk08, uintaMJ8DCC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringl0ATt8 = "8OKOEoUClwHfoe"
		const stringFBUjmXw = "UT72Cs8v1"
		const uint7lau7T = BigInt("172")
		const WheatFarmFQZVATs = await WheatFarm.new(stringl0ATt8, stringFBUjmXw, uint7lau7T, {from: accounts[2]});
		const addressP7BISXV = accounts[1]
		const uint35gGs1 = BigInt("1739")
		const addresseQ71vs = accounts[0]
//		const booldkER2oU = await WheatFarmFQZVATs.transferownership.call(addressP7BISXV, {from: accounts[4]});
//		const stringXTvZ9Xq = await WheatFarmFQZVATs.name.call({from: accounts[2]});
//		const boolgeVlvc2 = await WheatFarmFQZVATs.approve.call(addresseQ71vs, uint35gGs1, {from: accounts[3]});

		await expect(WheatFarmFQZVATs.transferownership.call(addressP7BISXV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvVtxZqh = "qBUN4D5nvK6JHoAemOsIK2tNiMgBLsvFrqk2i5"
		const stringwte0wk1 = "FDpahVicbrJYHT3k6OkVQebUxseH6yEQRPwjpjrDa9AmGceikUm"
		const uintMF57jlz = BigInt("224")
		const WheatFarmt7p8Mz = await WheatFarm.new(stringvVtxZqh, stringwte0wk1, uintMF57jlz, {from: "0x0000000000000000000000000000000000000001"});
		const uintRmmlc6s = BigInt("1827")
		const addressBQhaRs6 = accounts[0]
		const stringxSsFCPh = await WheatFarmt7p8Mz.name.call({from: accounts[2]});
		const boolOSw8ZV = await WheatFarmt7p8Mz.increaseAllowance.call(addressBQhaRs6, uintRmmlc6s, {from: accounts[0]});
	});

	it('test for WheatFarm', async () => {
		const stringl0ATt8 = "8OKOEoUClwHfoe"
		const stringFBUjmXw = "UT72Cs8v1"
		const uintEnsO6ba = BigInt("172")
		const WheatFarmFQZVATs = await WheatFarm.new(stringl0ATt8, stringFBUjmXw, uintEnsO6ba, {from: accounts[2]});
		const uintrqDfips = BigInt("1006")
		const addressDhBHCeg = accounts[3]
		const uintdyHof2o = BigInt("1722")
		const address7Ob1eb = accounts[0]
		const uintVV85xjD = BigInt("872")
		const addressnCi9SYU = "0x0000000000000000000000000000000000000001"
		const boolS5GdVXr = await WheatFarmFQZVATs.approveAndCall.call(addressDhBHCeg, uintrqDfips, {from: accounts[2]});
		const boolgeVlvc2 = await WheatFarmFQZVATs.approve.call(address7Ob1eb, uintdyHof2o, {from: accounts[3]});
		const boolPgHfo7 = await WheatFarmFQZVATs.approve.call(addressnCi9SYU, uintVV85xjD, {from: accounts[5]});

		assert.equal(boolPgHfo7, true)
		assert.equal(boolS5GdVXr, true)
		assert.equal(boolgeVlvc2, true)
	});

	it('test for WheatFarm', async () => {
		const stringMiAKYD = "pvOvNBZTa3vbfJ5r2tqAl8zNhTqjYil5uwaQ1ydXph4ChR1j99xU6ufV5On2zeJubsQbgpaupCHHHQiatIOC5xQ5JF"
		const stringaK1gPpp = "bytticzwUktP9uYNmP8QHjv6Tiz9BpmLgnlMAeNbO4sBsCFZyGkKwJGCBoGtdccoUkfwR8LnbWjjTL"
		const uintMCbyC6b = BigInt("1862")
		const WheatFarmPUabGFg = await WheatFarm.new(stringMiAKYD, stringaK1gPpp, uintMCbyC6b, {from: accounts[1]});
		const uintFT0SOWJ = BigInt("0")
		const addressfzAuvjh = accounts[1]
		const uintqMVkiAZ = BigInt("1019")
		const addressNlgsCuW = accounts[1]
		const uinthAD8cp2 = BigInt("1001")
		const addressJgiOz6X = accounts[4]
		const boolKaVvfI9 = await WheatFarmPUabGFg.transfer.call(addressfzAuvjh, uintFT0SOWJ, {from: accounts[3]});
//		const boolg8XUts7 = await WheatFarmPUabGFg.transfer.call(addressNlgsCuW, uintqMVkiAZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolo5Z3OrR = await WheatFarmPUabGFg.approve.call(addressJgiOz6X, uinthAD8cp2, {from: accounts[1]});

		assert.equal(boolKaVvfI9, true)
		await expect(WheatFarmPUabGFg.transfer.call(addressNlgsCuW, uintqMVkiAZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})