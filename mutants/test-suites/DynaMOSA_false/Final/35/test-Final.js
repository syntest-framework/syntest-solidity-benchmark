const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringsJssCqm = "XpUMRCflr9EykXkzt"
		const stringLzDr3ft = "LCUOMNWmU4N6PVJVijgmoii6CTRbvAEHkVXn1SKI4OwpegJ78XRr3s3BrH7duJJohj28ty25DCaNhb1y2xOFRnchGD"
		const uintMi1IKlT = BigInt("114")
		const FinalXlk1vCI = await Final.new(stringsJssCqm, stringLzDr3ft, uintMi1IKlT, {from: accounts[0]});
		const uintS5lIp4V = BigInt("284")
		const addressYPtng6 = accounts[4]
		const uintcV91bjP = BigInt("1804")
		const addressqdg1O2O = accounts[4]
		const addressXYXTLC5 = accounts[2]
		const uintO6CvE1i = BigInt("198")
		const addressQEXP3QA = accounts[4]
		const addressj5XRacr = accounts[1]
		const uinti0nVtOM = BigInt("1410")
		const addressfmpnza4 = accounts[2]
		const booluy79e35 = await FinalXlk1vCI.approve.call(addressYPtng6, uintS5lIp4V, {from: accounts[3]});
//		const boolYhBmTbK = await FinalXlk1vCI.transferFrom.call(addressXYXTLC5, addressqdg1O2O, uintcV91bjP, {from: accounts[0]});
//		const boolLvncj7f = await FinalXlk1vCI.transferFrom.call(addressj5XRacr, addressQEXP3QA, uintO6CvE1i, {from: accounts[1]});
//		const boolsRqwglZ = await FinalXlk1vCI.approveAndCall.call(addressfmpnza4, uinti0nVtOM, {from: accounts[1]});

		assert.equal(booluy79e35, true)
		await expect(FinalXlk1vCI.transferFrom.call(addressXYXTLC5, addressqdg1O2O, uintcV91bjP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringioUrV2d = "ugIpsa0yy1M8tFTrDYxsTmjVpjyHsCxVlgrXFy59"
		const stringgRhimDb = "SrkddxFj5nExQebXjKJic7E7jbbmvXwNFqFAUnjQXThpmm9CelcJSoflm9O7Kk0qFo3OxQe34RWl1vRhpYjEnNME6yWAK4wGW"
		const uintgyEh6wy = BigInt("38")
		const FinallL1W852 = await Final.new(stringioUrV2d, stringgRhimDb, uintgyEh6wy, {from: accounts[1]});
		const uintvaWey6b = BigInt("2019")
		const addressNw2tGh3 = accounts[2]
		const uintLvy3pG5 = BigInt("1286")
		const addressmUJs0yF = accounts[2]
		const addressMx2mzcE = accounts[2]
		const uintliKGDVR = BigInt("1795")
		const addressxb0hZtj = "0x0000000000000000000000000000000000000001"
		const uinttdo51ul = BigInt("916")
		const addressw2jXz7G = "0x0000000000000000000000000000000000000001"
		const addressYXL5DjC = accounts[3]
//		const boolJO80lMn = await FinallL1W852.transfer.call(addressNw2tGh3, uintvaWey6b, {from: accounts[5]});
//		const boolY2BYS3g = await FinallL1W852.transferFrom.call(addressMx2mzcE, addressmUJs0yF, uintLvy3pG5, {from: accounts[3]});
//		const boolwaqoje8 = await FinallL1W852.increaseAllowance.call(addressxb0hZtj, uintliKGDVR, {from: accounts[2]});
//		const boolZJFv1wA = await FinallL1W852.approveAndCall.call(addressw2jXz7G, uinttdo51ul, {from: accounts[1]});
//		const uintlHDCvRH = await FinallL1W852.balanceOf.call(addressYXL5DjC, {from: accounts[4]});
//		const stringmAKaBpI = await FinallL1W852.symbol.call({from: accounts[4]});

		await expect(FinallL1W852.transfer.call(addressNw2tGh3, uintvaWey6b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringtUzw9cB = "Dvhfoz1W1bDI7nyHEZdAswhdDGzfDAKH"
		const stringZXSVyzx = "UQ5e904tLUzswLSh5JCKlK4nyQ3NVxYyHQcGCKtaDiBrtJu9Kps"
		const uintXexe0Cr = BigInt("212")
		const FinalKA9myuj = await Final.new(stringtUzw9cB, stringZXSVyzx, uintXexe0Cr, {from: accounts[0]});
		const uintkFtK4E6 = BigInt("1391")
		const addressz3Njuv = accounts[2]
		const uintphR2b4x = BigInt("721")
		const addressrJhwzch = accounts[2]
		const uintKm4wJB6 = BigInt("1701")
		const addressTYgJfnu = accounts[4]
		const uintFZKPDQn = BigInt("1523")
		const addressKBmV7Eb = accounts[2]
		const uintgJ2WC5S = BigInt("788")
		const addressTtPDsPK = accounts[3]
		const addressjTKkKRU = accounts[4]
//		const boolWX22fer = await FinalKA9myuj.decreaseAllowance.call(addressz3Njuv, uintkFtK4E6, {from: accounts[0]});
//		const boolNnuanZD = await FinalKA9myuj.transfer.call(addressrJhwzch, uintphR2b4x, {from: accounts[3]});
//		const stringB2msyAZ = await FinalKA9myuj.symbol.call({from: accounts[0]});
//		const booloFixhOV = await FinalKA9myuj.transfer.call(addressTYgJfnu, uintKm4wJB6, {from: accounts[5]});
//		const boold0NI7PO = await FinalKA9myuj.approve.call(addressKBmV7Eb, uintFZKPDQn, {from: accounts[2]});
//		const boolbvQXYXw = await FinalKA9myuj.transferFrom.call(addressjTKkKRU, addressTtPDsPK, uintgJ2WC5S, {from: accounts[1]});

		await expect(FinalKA9myuj.decreaseAllowance.call(addressz3Njuv, uintkFtK4E6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringzLlzWPh = "LucdnKJhByExBUqs2BeerQhprApFexNXCANUHHZehxmfSpu1IdOxvWXv8Egza1ze4fzKRT8XbAGdCTTexr6xBHdCL5t89Tiu5"
		const stringBeE6Yb5 = "C67Zan3jsroiqArquzCVyLq87vAreLpvemFvabgfk27P6pJu8fOSnWlO"
		const uintX0vfvG1 = BigInt("517")
		const FinalfTPUspR = await Final.new(stringzLlzWPh, stringBeE6Yb5, uintX0vfvG1, {from: accounts[5]});
		const uintW6wOxhk = BigInt("231")
		const addressqUf5ew = accounts[4]
		const addressaWZZXyl = accounts[4]
		const uintUKDNpIt = BigInt("1790")
		const addressR7owri3 = accounts[2]
		const uint8XjrwAzh = await FinalfTPUspR.decimals.call({from: accounts[3]});
		const boolOrzvwJk = await FinalfTPUspR.approve.call(addressqUf5ew, uintW6wOxhk, {from: accounts[3]});
//		const boolUf62i1 = await FinalfTPUspR.transferownership.call(addressaWZZXyl, {from: accounts[2]});
//		const boolZuTNxaz = await FinalfTPUspR.decreaseAllowance.call(addressR7owri3, uintUKDNpIt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOrzvwJk, true)
		assert.equal(uint8XjrwAzh, BigInt("18"))
		await expect(FinalfTPUspR.transferownership.call(addressaWZZXyl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringG0aHJBl = "ezD9vIOxE8XDpoC2vByhpu33vXgVyoCWm2xGJ56gMDF7xDcIiVrV7pcekAILvhh1LN7EhOqMfFHFmDOUWFvKMEx7qR8"
		const stringjZm6zAL = "Yirw3qWnXAUJbIGioMxppxUM7XlBSlnI0pPXA5kIqrM5gUjARcO4xNdW"
		const uintVpApHgf = BigInt("171")
		const FinalCzdxZDe = await Final.new(stringG0aHJBl, stringjZm6zAL, uintVpApHgf, {from: "0x0000000000000000000000000000000000000001"});
		const uintRr63dt = BigInt("1816")
		const addressZtNKKHq = accounts[3]
		const uints9Qn2I = BigInt("307")
		const addressO7FCew = accounts[5]
		const booluqplNHa = await FinalCzdxZDe.transfer.call(addressZtNKKHq, uintRr63dt, {from: accounts[4]});
		const boolHz8oDk = await FinalCzdxZDe.approveAndCall.call(addressO7FCew, uints9Qn2I, {from: "0x0000000000000000000000000000000000000001"});
		const stringCHbdiJd = await FinalCzdxZDe.symbol.call({from: accounts[1]});
		const stringm3yg7sO = await FinalCzdxZDe.name.call({from: accounts[1]});
	});

	it('test for Final', async () => {
		const stringZ4uymEq = "HwHgQl0g9563huvOfWJB3NFdwDsaKIR"
		const stringScBosj9 = "rSCA9FTvWIkCYJt5EKmOz"
		const uintMDuy4BD = BigInt("738")
		const FinalQA7PRYJ = await Final.new(stringZ4uymEq, stringScBosj9, uintMDuy4BD, {from: accounts[2]});
		const uintDp5JSP7 = BigInt("1430")
		const addressMmlN8s = accounts[0]
		const uintf2Z9nIF = BigInt("1545")
		const addresssNB7CuQ = "0x0000000000000000000000000000000000000001"
		const addressXknxcR4 = accounts[0]
		const boolirp1na1 = await FinalQA7PRYJ.transfer.call(addressMmlN8s, uintDp5JSP7, {from: accounts[2]});
//		const boolJ3LELZf = await FinalQA7PRYJ.transferFrom.call(addressXknxcR4, addresssNB7CuQ, uintf2Z9nIF, {from: accounts[0]});
//		const stringXVkjUsw = await FinalQA7PRYJ.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolirp1na1, true)
		await expect(FinalQA7PRYJ.transferFrom.call(addressXknxcR4, addresssNB7CuQ, uintf2Z9nIF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringizfr5YP = "CnbDJhYK4DdrjXQRa"
		const stringgXmTDAe = "RGL0O8rhzoxVR0hYhHEFji4l6RnBkF3mHZvIF1kj7b2UnNByNi"
		const uint3l880C = BigInt("858")
		const FinalDi8v1AT = await Final.new(stringizfr5YP, stringgXmTDAe, uint3l880C, {from: accounts[2]});
		const uintExWWwhX = BigInt("1692")
		const addressiVOy4mV = accounts[0]
		const uintokz4lIC = BigInt("939")
		const addressFDQmiqt = accounts[4]
		const uintHvj3zPM = BigInt("86")
		const addressWlrUUUU = accounts[2]
		const addresszZxSAqb = accounts[2]
		const addressmNdyKev = accounts[3]
		const addressKEZD4pU = accounts[3]
		const uintiSaFy5 = BigInt("1987")
		const addressFyUIrCj = accounts[1]
		const uintUtMhYge = BigInt("1446")
		const addressn680XY = accounts[0]
		const addressLl6B0Ye = accounts[1]
		const boolOnvUwsU = await FinalDi8v1AT.approveAndCall.call(addressiVOy4mV, uintExWWwhX, {from: accounts[2]});
		const stringyrd2SGy = await FinalDi8v1AT.symbol.call({from: accounts[3]});
//		const boolrrjyGig = await FinalDi8v1AT.transfer.call(addressFDQmiqt, uintokz4lIC, {from: accounts[0]});
//		const boolbzm14iW = await FinalDi8v1AT.transferFrom.call(addresszZxSAqb, addressWlrUUUU, uintHvj3zPM, {from: accounts[4]});
//		const uintVrfuRBJ = await FinalDi8v1AT.allowance.call(addressKEZD4pU, addressmNdyKev, {from: accounts[0]});
//		const uint8H5NpZzC = await FinalDi8v1AT.decimals.call({from: accounts[2]});
//		const boolWnL6bFq = await FinalDi8v1AT.transfer.call(addressFyUIrCj, uintiSaFy5, {from: accounts[2]});
//		const boolR2AG69 = await FinalDi8v1AT.transferFrom.call(addressLl6B0Ye, addressn680XY, uintUtMhYge, {from: accounts[5]});

		assert.equal(boolOnvUwsU, true)
		assert.equal(stringyrd2SGy, "RGL0O8rhzoxVR0hYhHEFji4l6RnBkF3mHZvIF1kj7b2UnNByNi")
		await expect(FinalDi8v1AT.transfer.call(addressFDQmiqt, uintokz4lIC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringslrJkGI = "nXc5wh3IO4cCjFAATGcPIuELtULDaGJ4ddDgQ9CFXupvgVZmv6zbQ45brn0b"
		const stringREoZsFE = "pAcguJRJguYWWdNop"
		const uintychOG1Q = BigInt("1727")
		const FinalRk4Bof = await Final.new(stringslrJkGI, stringREoZsFE, uintychOG1Q, {from: accounts[1]});
		const uinttiqOxrZ = BigInt("0")
		const addressvoHchyZ = "0x0000000000000000000000000000000000000001"
		const uintieVnRk = BigInt("1563")
		const addressbaaXbzK = accounts[1]
		const boolpFg0cVW = await FinalRk4Bof.transfer.call(addressvoHchyZ, uinttiqOxrZ, {from: accounts[3]});
//		const boolE8eV2Yb = await FinalRk4Bof.transfer.call(addressbaaXbzK, uintieVnRk, {from: accounts[4]});
//		const uint8GIHeY4 = await FinalRk4Bof.decimals.call({from: accounts[5]});

		assert.equal(boolpFg0cVW, true)
		await expect(FinalRk4Bof.transfer.call(addressbaaXbzK, uintieVnRk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})