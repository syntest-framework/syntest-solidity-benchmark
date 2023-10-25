const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintJbWySjn = BigInt("2032")
		const stringIJ1knuY = "agxZfAQHiV4XtqgNXkpQ5SJKKXjR3TSycO7U8oGUV1IOMO6mh67dRBqAJcmXRT7sj42HjPm"
		const stringcUBiV6y = "4"
		const uintcsMTclh = BigInt("1149")
		const ANRXTokenMqzgEvy = await ANRXToken.new(uintJbWySjn, stringIJ1knuY, stringcUBiV6y, uintcsMTclh, {from: "0x0000000000000000000000000000000000000001"});
		const uintleeUEz = BigInt("1378")
		const addressvm11uE6 = "0x0000000000000000000000000000000000000001"
		const uintGMaY0kK = BigInt("1282")
		const addressKzyopgv = accounts[0]
		const addressvjYJOo = accounts[4]
		const addressz73NOaP = accounts[4]
		const addressoTt9yuN = accounts[3]
		const boolyq6Ndbn = await ANRXTokenMqzgEvy.approve.call(addressvm11uE6, uintleeUEz, {from: accounts[1]});
		const boola4e0ynz = await ANRXTokenMqzgEvy.transferFrom.call(addressvjYJOo, addressKzyopgv, uintGMaY0kK, {from: accounts[2]});
		const uintMYxjCf6 = await ANRXTokenMqzgEvy.totalSupply.call({from: accounts[4]});
		const uintxg9Rz1g = await ANRXTokenMqzgEvy.balanceOf.call(addressz73NOaP, {from: "0x0000000000000000000000000000000000000001"});
		const addresstpJUXDp = await ANRXTokenMqzgEvy.deprecate.call(addressoTt9yuN, {from: accounts[2]});
	});

	it('test for ANRXToken', async () => {
		const uintA85d4a4 = BigInt("1412")
		const strings6onV4m = "jQzPjHjMudrbIaK12IykTyMXeo1KkidLEApBVLwCTWp"
		const stringn7BNoil = "ahrm1PPTiwWhmtXlkNjuBfvys8lOCIhH0NrYpet6sCg9xKi8aqeTumvIfYqMzbrQ8MPpMZ3E7vovHPa8o7Z1So5"
		const uintoXmbFQF = BigInt("1197")
		const ANRXTokenRQzQtJJ = await ANRXToken.new(uintA85d4a4, strings6onV4m, stringn7BNoil, uintoXmbFQF, {from: accounts[1]});
		const addressgG3oOx3 = accounts[3]
		const addresssczBhR8 = accounts[0]
		const uintqoemrun = BigInt("541")
		const addressJ1Ai3LJ = "0x0000000000000000000000000000000000000001"
		const uintjbWBD4g = BigInt("1046")
		const addressZtDIZpQ = accounts[2]
		const addressLlMh2m2 = accounts[1]
		const uintOktoRc6 = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[4]});
		const uinto3NG2O = await ANRXTokenRQzQtJJ.allowance.call(addresssczBhR8, addressgG3oOx3, {from: accounts[2]});
		const boolXMZmkkq = await ANRXTokenRQzQtJJ.approve.call(addressJ1Ai3LJ, uintqoemrun, {from: accounts[3]});
//		const boolDCf4xQX = await ANRXTokenRQzQtJJ.transferFrom.call(addressLlMh2m2, addressZtDIZpQ, uintjbWBD4g, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXMZmkkq, true)
		assert.equal(uintOktoRc6, BigInt("1412"))
		assert.equal(uinto3NG2O, BigInt("0"))
		await expect(ANRXTokenRQzQtJJ.transferFrom.call(addressLlMh2m2, addressZtDIZpQ, uintjbWBD4g, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintbu9JDrN = BigInt("1475")
		const stringUPRbhUz = "OQr3TfXj0Imc0NrsJLeW5rOVR9fv8VivCkX8iprwhWR8sDefqKIouY6dheGAHr54lGFj6pdRGBcH5n5hI"
		const stringmj8y5gG = "jI3hVT4n79rMNImWSDhh7kuVobT2jWQCX"
		const uint4juc4z = BigInt("537")
		const ANRXTokenikXqWTs = await ANRXToken.new(uintbu9JDrN, stringUPRbhUz, stringmj8y5gG, uint4juc4z, {from: accounts[4]});
		const uintYCKaAbk = BigInt("258")
		const addresstV7KvG = accounts[3]
		const uintjA2ypi = BigInt("1009")
		const boolWGr0esI = await ANRXTokenikXqWTs.approve.call(addresstV7KvG, uintYCKaAbk, {from: accounts[2]});
//		const uintJAePO2f = await ANRXTokenikXqWTs.issue.call(uintjA2ypi, {from: accounts[0]});

		assert.equal(boolWGr0esI, true)
		await expect(ANRXTokenikXqWTs.issue.call(uintjA2ypi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintROfQcvW = BigInt("1727")
		const stringutYH8Bz = "dLGs2d1LtUCtc"
		const stringGL6FeJM = "ks3nUxwh"
		const uintEhFMhE6 = BigInt("507")
		const ANRXTokenKm01ksT = await ANRXToken.new(uintROfQcvW, stringutYH8Bz, stringGL6FeJM, uintEhFMhE6, {from: accounts[3]});
		const uintxm1KHIH = BigInt("462")
		const addressoAthEHj = accounts[2]
		const addressFns8din = accounts[1]
		const addressXVJ9VGy = accounts[4]
		const uintfJO7l5D = BigInt("142")
		const address9C61sD = "0x0000000000000000000000000000000000000001"
//		const boolp9nwylA = await ANRXTokenKm01ksT.transfer.call(addressoAthEHj, uintxm1KHIH, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPyUuUj3 = await ANRXTokenKm01ksT.balanceOf.call(addressFns8din, {from: accounts[3]});
//		const addressayeDWJR = await ANRXTokenKm01ksT.deprecate.call(addressXVJ9VGy, {from: accounts[1]});
//		const boolDHBoWig = await ANRXTokenKm01ksT.approve.call(address9C61sD, uintfJO7l5D, {from: accounts[4]});

		await expect(ANRXTokenKm01ksT.transfer.call(addressoAthEHj, uintxm1KHIH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintDRT9J2J = BigInt("1412")
		const strings6onV4m = "jQzPjHjMudrbIaK12IykTyMXeo1KkidLEApBVLwCTWp"
		const stringn7BNoil = "ahrm1PPTiwWhmtXlkNjuBfvys8lOCIhH0NrYpet6sCg9xKi8aqeTumvIfYqMzbrQ8MPpMZ3E7vovHPa8o7Z1So5"
		const uintkTsVqOE = BigInt("1197")
		const ANRXTokenRQzQtJJ = await ANRXToken.new(uintDRT9J2J, strings6onV4m, stringn7BNoil, uintkTsVqOE, {from: accounts[1]});
		const addressrpCjhHw = accounts[3]
		const uintOlrUkDs = BigInt("541")
		const addressAJkX24T = "0x0000000000000000000000000000000000000002"
		const uintbubWNDG = BigInt("1046")
		const addressfKrNXd9 = accounts[2]
		const addressr520hgF = accounts[1]
		const uintOktoRc6 = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[4]});
		const uintktwCHIU = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[3]});
		const uintAaReh0G = await ANRXTokenRQzQtJJ.balanceOf.call(addressrpCjhHw, {from: accounts[3]});
		const boolXMZmkkq = await ANRXTokenRQzQtJJ.approve.call(addressAJkX24T, uintOlrUkDs, {from: accounts[3]});
//		const boolDCf4xQX = await ANRXTokenRQzQtJJ.transferFrom.call(addressr520hgF, addressfKrNXd9, uintbubWNDG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXMZmkkq, true)
		assert.equal(uintAaReh0G, BigInt("0"))
		assert.equal(uintOktoRc6, BigInt("1412"))
		assert.equal(uintktwCHIU, BigInt("1412"))
		await expect(ANRXTokenRQzQtJJ.transferFrom.call(addressr520hgF, addressfKrNXd9, uintbubWNDG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlYkOjKY = BigInt("1412")
		const strings6onV4m = "jQzPjHjMudrbIaK12IykTyMXeo1KkidLEApBVLwCTWp"
		const stringn7BNoil = "ahrm1PPTiwWhmtXlkNjuBfvys8lOCIhH0NrYpet6sCg9xKi8aqeTumvIfYqMzbrQ8MPpMZ3E7vovHPa8o7Z1So5"
		const uint5qLKdt = BigInt("1197")
		const ANRXTokenRQzQtJJ = await ANRXToken.new(uintlYkOjKY, strings6onV4m, stringn7BNoil, uint5qLKdt, {from: accounts[1]});
		const uint1iOuId = BigInt("2047")
		const uintK49cpHB = BigInt("1246")
		const addressv1Aj8xR = accounts[1]
		const addressGug0QdF = accounts[3]
		const addressT7iajuM = accounts[0]
		const uintdXmNCkb = BigInt("1398")
		const addressrdBfCYE = "0x0000000000000000000000000000000000000001"
		const uintCQfvUGd = await ANRXTokenRQzQtJJ.issue.call(uint1iOuId, {from: accounts[1]});
		const uintOktoRc6 = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[4]});
		const boolDi5R15a = await ANRXTokenRQzQtJJ.transfer.call(addressv1Aj8xR, uintK49cpHB, {from: accounts[1]});
		const uinto3NG2O = await ANRXTokenRQzQtJJ.allowance.call(addressT7iajuM, addressGug0QdF, {from: accounts[2]});
		const boolXMZmkkq = await ANRXTokenRQzQtJJ.approve.call(addressrdBfCYE, uintdXmNCkb, {from: accounts[3]});

		assert.equal(boolDi5R15a, true)
		assert.equal(boolXMZmkkq, true)
		assert.equal(uintOktoRc6, BigInt("1412"))
		assert.equal(uinto3NG2O, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintukDMOsU = BigInt("1475")
		const stringUPRbhUz = "OQr3TfXj0Imc0NrsJLeW5rOVR9fv8VivCkX8iprwhWR8sDefqKIouY6dheGAHr54lGFj6pdRGBcH5n5hI"
		const stringmj8y5gG = "jI3hVT4n79rMNImWSDhh7kuVobT2jWQCX"
		const uintIpNfLCs = BigInt("537")
		const ANRXTokenikXqWTs = await ANRXToken.new(uintukDMOsU, stringUPRbhUz, stringmj8y5gG, uintIpNfLCs, {from: accounts[4]});
		const uintZNfFdAK = BigInt("258")
		const addresswbxDl3 = accounts[3]
		const addressyRdGEE6 = accounts[2]
		const boolWGr0esI = await ANRXTokenikXqWTs.approve.call(addresswbxDl3, uintZNfFdAK, {from: accounts[2]});
		const addressH6qdPim = await ANRXTokenikXqWTs.deprecate.call(addressyRdGEE6, {from: accounts[4]});

		assert.equal(boolWGr0esI, true)
	});

	it('test for ANRXToken', async () => {
		const uintECrHXn7 = BigInt("1727")
		const stringutYH8Bz = "dLGs2d1LtUCtc"
		const stringGL6FeJM = "ks3nUxwh"
		const uintiBNPyrS = BigInt("507")
		const ANRXTokenKm01ksT = await ANRXToken.new(uintECrHXn7, stringutYH8Bz, stringGL6FeJM, uintiBNPyrS, {from: accounts[3]});
		const addressqyQuSOV = accounts[1]
		const uintSJx1QJl = BigInt("592")
		const uintNXvuZE = BigInt("1264")
		const uintwmEdfg0 = BigInt("462")
		const addressTCJuMeO = accounts[3]
		const addressof1Fy00 = "0x0000000000000000000000000000000000000001"
		const addressaTLUDqJ = accounts[4]
		const addressynzQEK5 = accounts[1]
		const uintNUep0mt = BigInt("202")
		const addressEUaLATE = accounts[1]
		const uintxfzDXlE = BigInt("29")
		const addressdczaSZB = accounts[3]
		const addressTpgTBX1 = accounts[4]
		const uintUmxVs4 = BigInt("142")
		const addressMwfuFP = "0x0000000000000000000000000000000000000001"
		const uintUcMk3mC = await ANRXTokenKm01ksT.balanceOf.call(addressqyQuSOV, {from: accounts[2]});
//		const uintz8mxzQ = await ANRXTokenKm01ksT.setParams.call(uintNXvuZE, uintSJx1QJl, {from: accounts[3]});
//		const boolp9nwylA = await ANRXTokenKm01ksT.transfer.call(addressTCJuMeO, uintwmEdfg0, {from: "0x0000000000000000000000000000000000000001"});
//		const uintplYUNSB = await ANRXTokenKm01ksT.allowance.call(addressaTLUDqJ, addressof1Fy00, {from: accounts[4]});
//		const uintPyUuUj3 = await ANRXTokenKm01ksT.balanceOf.call(addressynzQEK5, {from: accounts[3]});
//		const boolb91Twv5 = await ANRXTokenKm01ksT.approve.call(addressEUaLATE, uintNUep0mt, {from: accounts[4]});
//		const boolxNEpr7L = await ANRXTokenKm01ksT.approve.call(addressdczaSZB, uintxfzDXlE, {from: "0x0000000000000000000000000000000000000001"});
//		const addressayeDWJR = await ANRXTokenKm01ksT.deprecate.call(addressTpgTBX1, {from: accounts[1]});
//		const boolDHBoWig = await ANRXTokenKm01ksT.approve.call(addressMwfuFP, uintUmxVs4, {from: accounts[4]});

		assert.equal(uintUcMk3mC, BigInt("0"))
		await expect(ANRXTokenKm01ksT.setParams.call(uintNXvuZE, uintSJx1QJl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxnzRoQB = BigInt("1412")
		const strings6onV4m = "jQzPjHjMudrbIaK12IykTyMXeo1KkidLEApBVLwCTWp"
		const stringn7BNoil = "ahrm1PPTiwWhmtXlkNjuBfvys8lOCIhH0NrYpet6sCg9xKi8aqeTumvIfYqMzbrQ8MPpMZ3E7vovHPa8o7Z1So5"
		const uintcPmC1Wg = BigInt("1197")
		const ANRXTokenRQzQtJJ = await ANRXToken.new(uintxnzRoQB, strings6onV4m, stringn7BNoil, uintcPmC1Wg, {from: accounts[1]});
		const uintofMGMam = BigInt("963")
		const addressdkOlsVv = accounts[0]
		const addressCZjArY = accounts[3]
		const addressXeZawVQ = accounts[4]
		const addressiXpnkt5 = accounts[5]
		const addressam2ahwh = accounts[2]
		const uintXmhPVra = BigInt("541")
		const addressGU1Lzh5 = "0x0000000000000000000000000000000000000003"
		const uintMMdduP8 = BigInt("302")
		const addressd6G2nHb = accounts[3]
		const uintkZQtB8W = BigInt("1046")
		const addressq4mRjLq = accounts[2]
		const addresslpYkcNn = accounts[1]
		const uintQC3KaW = BigInt("929")
		const uintqosfIST = BigInt("753")
		const addressRuyPare = accounts[4]
		const uintOktoRc6 = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[4]});
		const uintK1pE3ow = await ANRXTokenRQzQtJJ.redeem.call(uintofMGMam, {from: accounts[1]});
		const uintktwCHIU = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[3]});
		const uintSN5jkkT = await ANRXTokenRQzQtJJ.allowance.call(addressCZjArY, addressdkOlsVv, {from: accounts[2]});
		const uintAaReh0G = await ANRXTokenRQzQtJJ.balanceOf.call(addressXeZawVQ, {from: accounts[3]});
		const uintKRnHa7d = await ANRXTokenRQzQtJJ.allowance.call(addressam2ahwh, addressiXpnkt5, {from: accounts[1]});
		const uintf7lA9jH = await ANRXTokenRQzQtJJ.totalSupply.call({from: accounts[1]});
		const boolXMZmkkq = await ANRXTokenRQzQtJJ.approve.call(addressGU1Lzh5, uintXmhPVra, {from: accounts[3]});
//		const boolCZF0VO4 = await ANRXTokenRQzQtJJ.transfer.call(addressd6G2nHb, uintMMdduP8, {from: accounts[4]});
//		const boolDCf4xQX = await ANRXTokenRQzQtJJ.transferFrom.call(addresslpYkcNn, addressq4mRjLq, uintkZQtB8W, {from: "0x0000000000000000000000000000000000000001"});
//		const uintAgWjwwj = await ANRXTokenRQzQtJJ.redeem.call(uintQC3KaW, {from: accounts[3]});
//		const boolrzDlJF8 = await ANRXTokenRQzQtJJ.approve.call(addressRuyPare, uintqosfIST, {from: accounts[0]});

		assert.equal(boolXMZmkkq, true)
		assert.equal(uintAaReh0G, BigInt("0"))
		assert.equal(uintKRnHa7d, BigInt("0"))
		assert.equal(uintOktoRc6, BigInt("1412"))
		assert.equal(uintSN5jkkT, BigInt("0"))
		assert.equal(uintf7lA9jH, BigInt("1412"))
		assert.equal(uintktwCHIU, BigInt("1412"))
		await expect(ANRXTokenRQzQtJJ.transfer.call(addressd6G2nHb, uintMMdduP8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})