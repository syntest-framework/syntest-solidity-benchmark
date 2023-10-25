const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringjDzsa8M = "TIezjxMVHaILPP16M1nuhe3ii8a4OYmz8OCWv5kYyXTmVNje7Vnl8t1m44Bg3y"
		const stringAKZg8Z1 = "hQxGKl8LHSJoovy40eAx90GAVSIcyBWKwyXyqqX6U"
		const uintmyIX3vI = BigInt("365")
		const Rexonadzq3jqw = await Rexona.new(stringjDzsa8M, stringAKZg8Z1, uintmyIX3vI, {from: accounts[3]});
		const uintQ5mtdJe = BigInt("1855")
		const addressYrSGE7R = accounts[3]
		const addressLgcvHRX = accounts[0]
		const uintSkoxra6 = BigInt("1847")
		const addresszWn2bD = accounts[3]
		const boolWw5Qptv = await Rexonadzq3jqw.transferFrom.call(addressLgcvHRX, addressYrSGE7R, uintQ5mtdJe, {from: accounts[1]});
		const boolQDpq2dC = await Rexonadzq3jqw.approve.call(addresszWn2bD, uintSkoxra6, {from: accounts[1]});

		await expect(Rexonadzq3jqw.transferFrom.call(addressLgcvHRX, addressYrSGE7R, uintQ5mtdJe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringDHtXfNZ = "m41tozmLdi8mNcPtSqKJspXSFJok"
		const stringdNDKpw = "4ergGIG0vZg2vEB13MuDWaD7TE"
		const uintl2b1ber = BigInt("496")
		const RexonaCQA2MYH = await Rexona.new(stringDHtXfNZ, stringdNDKpw, uintl2b1ber, {from: accounts[4]});
		const uintzdDsm0b = BigInt("370")
		const addressESoGQpl = accounts[3]
		const uintwNJsRzE = BigInt("1207")
		const addressPsGl8MG = accounts[5]
		const addressArofCHw = accounts[2]
		const uintCZEQAAn = BigInt("835")
		const addressC0HVrj4 = accounts[1]
		const addresseWcCUDp = accounts[2]
		const boolx7blOdB = await RexonaCQA2MYH.approve.call(addressESoGQpl, uintzdDsm0b, {from: accounts[1]});
		const boolSQHrNDf = await RexonaCQA2MYH.transferFrom.call(addressArofCHw, addressPsGl8MG, uintwNJsRzE, {from: accounts[2]});
		const boolhMmeHcz = await RexonaCQA2MYH.transferFrom.call(addresseWcCUDp, addressC0HVrj4, uintCZEQAAn, {from: accounts[1]});

		assert.equal(boolx7blOdB, true)
		await expect(RexonaCQA2MYH.transferFrom.call(addressArofCHw, addressPsGl8MG, uintwNJsRzE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringdv5KTLJ = "bYuCaRyYg77I17KTKkb8lS0NAd8R7HrBt2rLCsqmOUaWGI8Xo6wkHAYheSl"
		const stringSFgKE9z = "lLzp"
		const uintq04Js80 = BigInt("1627")
		const Rexonaihgcldb = await Rexona.new(stringdv5KTLJ, stringSFgKE9z, uintq04Js80, {from: accounts[4]});
		const addressOGWu9x1 = accounts[0]
		const uintfdifacg = BigInt("765")
		const addressVooKIyq = accounts[2]
		const addressB80gRno = accounts[5]
		const uinthq6YqvO = BigInt("790")
		const addressYXGsSf = accounts[2]
		const uintMKNFXC2 = BigInt("1850")
		const addressa2AFOfu = accounts[2]
		const uintGdMX9JH = BigInt("1178")
		const addressOP9T2YP = accounts[0]
		const addresskezKOL = accounts[4]
		const uintXa02QgX = BigInt("830")
		const addressIHDrcOt = accounts[2]
		const boolbinnsNA = await Rexonaihgcldb.transferownership.call(addressOGWu9x1, {from: accounts[3]});
		const boolbkf4Au = await Rexonaihgcldb.transferFrom.call(addressB80gRno, addressVooKIyq, uintfdifacg, {from: accounts[3]});
		const boolGtykSc = await Rexonaihgcldb.transfer.call(addressYXGsSf, uinthq6YqvO, {from: accounts[3]});
		const bool5PF4fY = await Rexonaihgcldb.approveAndCall.call(addressa2AFOfu, uintMKNFXC2, {from: accounts[5]});
		const boolVdZgY5c = await Rexonaihgcldb.transferFrom.call(addresskezKOL, addressOP9T2YP, uintGdMX9JH, {from: accounts[1]});
		const booliqcrn7A = await Rexonaihgcldb.approve.call(addressIHDrcOt, uintXa02QgX, {from: accounts[1]});

		await expect(Rexonaihgcldb.transferownership.call(addressOGWu9x1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringNSNMoMl = "krx6JPhbDO7RuC6Ltk0J3p94JvR6IvKbSo2F9qqH4QtO7PkzHoxdrhqOPoYWR4lbVFk3aubyZz7thYsDcn98VJGh13wyOd"
		const stringqE20n49 = "OjuwmEwmdgwyJBCO9m8tUrjQpi9Q1AJRXyvCpBj1INIQPUN7rabcZU2YPOrQJWTiF72rgFo9fDMvNIInbQK8AVv"
		const uintUIySo5v = BigInt("776")
		const RexonazNmdej = await Rexona.new(stringNSNMoMl, stringqE20n49, uintUIySo5v, {from: accounts[3]});
		const uintxsvoP8 = BigInt("2021")
		const addressMOAlsxU = accounts[2]
		const uinthXLjVXB = BigInt("684")
		const addresspH4WFTi = accounts[4]
		const addressYpMj7Rj = accounts[4]
		const uintjFFw2gz = BigInt("1601")
		const addressKUg9leq = accounts[4]
		const uintb7tqEU = BigInt("911")
		const addressqRJIoUm = "0x0000000000000000000000000000000000000001"
		const boolU7Jcoov = await RexonazNmdej.approveAndCall.call(addressMOAlsxU, uintxsvoP8, {from: accounts[0]});
		const boolgfq0iGK = await RexonazNmdej.transferFrom.call(addressYpMj7Rj, addresspH4WFTi, uinthXLjVXB, {from: accounts[2]});
		const boolemLhwjy = await RexonazNmdej.transfer.call(addressKUg9leq, uintjFFw2gz, {from: accounts[3]});
		const boolmKzKLbb = await RexonazNmdej.approveAndCall.call(addressqRJIoUm, uintb7tqEU, {from: accounts[5]});

		await expect(RexonazNmdej.approveAndCall.call(addressMOAlsxU, uintxsvoP8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringBohDCNR = "mrvMU7ud3AuqAjDL5OnjIkbGwSjS1zRpP2OwrJKGPp5A"
		const stringk8fgndS = "xUn18MPjWbvCKjP7IcTvHpR1PWOD3aLaaLni01V6N9Rn65kz5kSe1nVKhv36g3lTIUwGlR0nqJNDEOL3p1IfoP6BEw"
		const uintfdbFGu3 = BigInt("1407")
		const Rexonazyn69lu = await Rexona.new(stringBohDCNR, stringk8fgndS, uintfdbFGu3, {from: accounts[2]});
		const addressWEsAu1x = accounts[4]
		const uintG9fsW9P = BigInt("1108")
		const addressymGysC6 = accounts[4]
		const uintYTLJCyt = BigInt("196")
		const addressURUBCeA = accounts[0]
		const uintpGCoFYU = BigInt("172")
		const addressPAmAdD6 = accounts[1]
		const boolKQ1JKpA = await Rexonazyn69lu.transferownership.call(addressWEsAu1x, {from: accounts[2]});
		const booloFzEV2n = await Rexonazyn69lu.transfer.call(addressymGysC6, uintG9fsW9P, {from: accounts[5]});
		const boolCwLhumo = await Rexonazyn69lu.transfer.call(addressURUBCeA, uintYTLJCyt, {from: "0x0000000000000000000000000000000000000001"});
		const boolqw6R3IX = await Rexonazyn69lu.transfer.call(addressPAmAdD6, uintpGCoFYU, {from: accounts[2]});

		assert.equal(boolKQ1JKpA, true)
		await expect(Rexonazyn69lu.transfer.call(addressymGysC6, uintG9fsW9P, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string8kWNvt = "kJUT1HUon9C9eSTUlFQdGIIg8bdJqftXXIUAv2yUBg5IFIqHDmjhcqJbobAwCcGKrYSihhNY6oorgtl"
		const stringekgibRK = "eEzmOhO8tJWqqWC9UbQjHYxI4MxjmM6Vg9"
		const uintIy3GeXq = BigInt("156")
		const RexonajDiN8mI = await Rexona.new(string8kWNvt, stringekgibRK, uintIy3GeXq, {from: "0x0000000000000000000000000000000000000001"});
		const uintR0bAr3 = BigInt("239")
		const addressCw8TBv6 = accounts[0]
		const addressdW0ysm = accounts[3]
		const uintxrL2qc = BigInt("40")
		const addressowB4D6P = accounts[0]
		const addresswIjuSY1 = accounts[1]
		const uintvpqGnfi = BigInt("3")
		const addressWOtXudb = accounts[3]
		const booljLNrEe1 = await RexonajDiN8mI.transferFrom.call(addressdW0ysm, addressCw8TBv6, uintR0bAr3, {from: accounts[5]});
		const boolnCeqope = await RexonajDiN8mI.transferFrom.call(addresswIjuSY1, addressowB4D6P, uintxrL2qc, {from: "0x0000000000000000000000000000000000000001"});
		const boolJFtqI8t = await RexonajDiN8mI.approveAndCall.call(addressWOtXudb, uintvpqGnfi, {from: accounts[5]});
	});

	it('test for Rexona', async () => {
		const stringNSNMoMl = "krx6JPhbDO7RuC6Ltk0J3p94JvR6IvKbSo2F9qqH4QtO7PkzHoxdrhqOPoYWR4lbVFk3aubyZz7thYsDcn98VJGh13wyOd"
		const stringqE20n49 = "OjuwmEwmdgwyJBCO9m8tUrjQpi9Q1AJRXyvCpBj1INIQPUN7rabcZU2YPOrQJWTiF72rgFo9fDMvNIInbQK8AVv"
		const uintji5Ksde = BigInt("776")
		const RexonazNmdej = await Rexona.new(stringNSNMoMl, stringqE20n49, uintji5Ksde, {from: accounts[3]});
		const uintDkneHWm = BigInt("764")
		const addressYQbsOzv = accounts[3]
		const uintNh3yHmx = BigInt("1601")
		const addressGGRiaFc = accounts[4]
		const uintLUBFXfY = BigInt("1644")
		const addressKFdkacg = accounts[0]
		const uintrwFvRh = BigInt("1422")
		const addressJ5PmsA3 = accounts[3]
		const uintcxKpByl = BigInt("167")
		const addressB8DFeAJ = accounts[1]
		const uintd48VOj2 = BigInt("911")
		const addresssfm7q0 = "0x0000000000000000000000000000000000000001"
		const boolzNArfRy = await RexonazNmdej.approve.call(addressYQbsOzv, uintDkneHWm, {from: accounts[3]});
		const boolemLhwjy = await RexonazNmdej.transfer.call(addressGGRiaFc, uintNh3yHmx, {from: accounts[3]});
		const boolnCPeRmX = await RexonazNmdej.transfer.call(addressKFdkacg, uintLUBFXfY, {from: "0x0000000000000000000000000000000000000001"});
		const boolMBxgzH2 = await RexonazNmdej.approve.call(addressJ5PmsA3, uintrwFvRh, {from: accounts[4]});
		const boolMYyoauz = await RexonazNmdej.transfer.call(addressB8DFeAJ, uintcxKpByl, {from: accounts[1]});
		const boolmKzKLbb = await RexonazNmdej.approveAndCall.call(addresssfm7q0, uintd48VOj2, {from: accounts[5]});

		assert.equal(boolemLhwjy, true)
		assert.equal(boolzNArfRy, true)
		await expect(RexonazNmdej.transfer.call(addressKFdkacg, uintLUBFXfY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringn7vtjsx = "sajp1W345HwKAPUY3zhOTAs"
		const stringPqn1p3I = "wYEkB350ONnV32yAJsZzfbp5qIwhV"
		const uintaWbQRih = BigInt("1134")
		const RexonamE9khV = await Rexona.new(stringn7vtjsx, stringPqn1p3I, uintaWbQRih, {from: accounts[1]});
		const uintC38OgP = BigInt("1474")
		const addressUQA23fV = accounts[4]
		const uintWNuTNoe = BigInt("390")
		const addressAbrIVWi = accounts[4]
		const uintUgdVd8r = BigInt("22")
		const addresssAPnTMg = accounts[1]
		const addressvAJIvn6 = "0x0000000000000000000000000000000000000001"
		const booliQPQh67 = await RexonamE9khV.approve.call(addressUQA23fV, uintC38OgP, {from: accounts[5]});
		const boolxMQdya2 = await RexonamE9khV.approveAndCall.call(addressAbrIVWi, uintWNuTNoe, {from: accounts[1]});
		const boolZoHkh6x = await RexonamE9khV.transferFrom.call(addressvAJIvn6, addresssAPnTMg, uintUgdVd8r, {from: accounts[5]});

		assert.equal(booliQPQh67, true)
		assert.equal(boolxMQdya2, true)
		await expect(RexonamE9khV.transferFrom.call(addressvAJIvn6, addresssAPnTMg, uintUgdVd8r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringn7vtjsx = "sajp1W345HwKAPUY3zhOTAs"
		const stringPqn1p3I = "wYEkB350ONnV32yAJsZzfbp5qIwhV"
		const uintAsDvSM = BigInt("1134")
		const RexonamE9khV = await Rexona.new(stringn7vtjsx, stringPqn1p3I, uintAsDvSM, {from: accounts[1]});
		const uintZjOEw6T = BigInt("0")
		const addressUJtYPOz = accounts[1]
		const addressAGvWpBP = "0x0000000000000000000000000000000000000001"
		const uintiUSArBa = BigInt("1524")
		const addressPGUy9iS = accounts[3]
		const addressO7xlNwt = accounts[0]
		const boolZoHkh6x = await RexonamE9khV.transferFrom.call(addressAGvWpBP, addressUJtYPOz, uintZjOEw6T, {from: accounts[5]});
		const boolq4qp2Sw = await RexonamE9khV.transferFrom.call(addressO7xlNwt, addressPGUy9iS, uintiUSArBa, {from: accounts[1]});

		assert.equal(boolZoHkh6x, true)
		await expect(RexonamE9khV.transferFrom.call(addressO7xlNwt, addressPGUy9iS, uintiUSArBa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})