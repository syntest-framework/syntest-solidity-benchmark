const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uinty2tiUQM = BigInt("1418")
		const stringes75bal = "KysS3HwdMMJhN1ZL57i4BXruRgAoPrSMwc9NAJ9r8WxBfc4vnilLLXUb2ZHSMuHULSH22pSqINK0iOHhhCz3tjl70NKPHrAA"
		const stringLPQg1iC = "czrSRSlgwgjKW6k5c2m5yFX15cmfikfkNehioLNTuQqyhFqbMlcZQ4QjVuio41JjqdCGO3oybf9YWQoeCcWi"
		const GreenMarkTrustYrXk1FR = await GreenMarkTrust.new(uinty2tiUQM, stringes75bal, stringLPQg1iC, {from: accounts[5]});
		const uintn6q3wrC = BigInt("136")
		const uintVZzZGn = BigInt("574")
		const uintIcHzoT7 = BigInt("599")
		const uintKXqgGth = BigInt("1901")
		const addressSMSV6l = accounts[3]
		const boolsVaGjSD = await GreenMarkTrustYrXk1FR.burn.call(uintn6q3wrC, {from: "0x0000000000000000000000000000000000000001"});
		const boolFyaBpRT = await GreenMarkTrustYrXk1FR.burn.call(uintVZzZGn, {from: "0x0000000000000000000000000000000000000001"});
		const boolLnwiNU = await GreenMarkTrustYrXk1FR.burn.call(uintIcHzoT7, {from: "0x0000000000000000000000000000000000000001"});
		const boolK124ZNY = await GreenMarkTrustYrXk1FR.transfer.call(addressSMSV6l, uintKXqgGth, {from: accounts[0]});

		await expect(GreenMarkTrustYrXk1FR.burn.call(uintn6q3wrC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintsGWrQsb = BigInt("1822")
		const stringagJZwqh = "eVDcIFq7jl89fDeUdrqjYSRxls7mp3TkJnlMWQwMnuqbJE1QhBAETDTzMtSxXdsqz9QI6H4Sxe6QRq7ulhPPO"
		const stringET7PBrD = "tvSnWwrTBK5iS4EA1g"
		const GreenMarkTrustpGQ6mdA = await GreenMarkTrust.new(uintsGWrQsb, stringagJZwqh, stringET7PBrD, {from: accounts[0]});
		const uintKiIlIBm = BigInt("1174")
		const addresswQY1l8U = accounts[0]
		const uintrC2lJE3 = BigInt("92")
		const address8mbpRA = accounts[4]
		const uintsRpm5Ny = BigInt("898")
		const addressKwXKTj = accounts[0]
		const booleAVnTVD = await GreenMarkTrustpGQ6mdA.approve.call(addresswQY1l8U, uintKiIlIBm, {from: accounts[1]});
		const bools5dALYZ = await GreenMarkTrustpGQ6mdA.transfer.call(address8mbpRA, uintrC2lJE3, {from: accounts[2]});
		const bool9D100B = await GreenMarkTrustpGQ6mdA.approve.call(addressKwXKTj, uintsRpm5Ny, {from: accounts[0]});

		assert.equal(booleAVnTVD, true)
		await expect(GreenMarkTrustpGQ6mdA.transfer.call(address8mbpRA, uintrC2lJE3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintmFIe5em = BigInt("974")
		const stringvfSOxPP = "F5lL0dzEiH5VgOaPSgREUrtk1VBnQTIWr4QKneqy8geD198ipowyGw8fmkXoPZtTIjTmmaX5FdlUhnfrdTAVc92qBh7xK2O"
		const stringWfxXDUI = "JjUO1BFKW9LvFOwDrHrzhQb4jCqNZ5z6MKV1yYE2Duir5MA66mxXheb8VNzWFePab1giLb52eO8CM13SXBkLk07sA"
		const GreenMarkTrustgZV9nAE = await GreenMarkTrust.new(uintmFIe5em, stringvfSOxPP, stringWfxXDUI, {from: accounts[2]});
		const uintRhqv4V5 = BigInt("1462")
		const addressjHIMjI4 = accounts[5]
		const addressBgPhMv = accounts[2]
		const uintq8Rv4mG = BigInt("844")
		const uintIvUZZE8 = BigInt("1447")
		const addressI1YmWaL = accounts[1]
		const uinttwvyDfT = BigInt("258")
		const addressYiuoP00 = accounts[2]
		const uint9GAx9i = BigInt("1912")
		const addressKfz15jc = accounts[4]
		const addressCZtry1j = accounts[4]
		const boolU34Jl7Z = await GreenMarkTrustgZV9nAE.transferFrom.call(addressBgPhMv, addressjHIMjI4, uintRhqv4V5, {from: accounts[4]});
		const boolhJg8AW8 = await GreenMarkTrustgZV9nAE.burn.call(uintq8Rv4mG, {from: accounts[0]});
		const boolr9R7jZG = await GreenMarkTrustgZV9nAE.transfer.call(addressI1YmWaL, uintIvUZZE8, {from: accounts[2]});
		const boolANP0QEj = await GreenMarkTrustgZV9nAE.transfer.call(addressYiuoP00, uinttwvyDfT, {from: accounts[3]});
		const boolIAkWjlw = await GreenMarkTrustgZV9nAE.transferFrom.call(addressCZtry1j, addressKfz15jc, uint9GAx9i, {from: accounts[2]});

		await expect(GreenMarkTrustgZV9nAE.transferFrom.call(addressBgPhMv, addressjHIMjI4, uintRhqv4V5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintew6fHwJ = BigInt("1672")
		const stringajRaGiu = "MRcQ4t9FFiLEZtgx2ObEsjTpz3AX8N80SkQxyymir0KkGUG5pGR76aQaAKTpA2j8P8uuoPKjLPj"
		const stringlS9snHc = "cFeHUdHF9HlVq3PiQuBCEF2vE4GWPjWhSASW"
		const GreenMarkTrustv6pB445 = await GreenMarkTrust.new(uintew6fHwJ, stringajRaGiu, stringlS9snHc, {from: accounts[2]});
		const uintFoXjggG = BigInt("325")
		const addresstcw0Q2N = accounts[5]
		const uintl87h3aB = BigInt("999")
		const byteLIwDmNf = "0x0c0f120a190a061d1f15170615100b"
		const uint6fcuGX = BigInt("1707")
		const addressnOkzLrv = "0x0000000000000000000000000000000000000001"
		const byteaVBXLvV = "0x1112140b0414130a0c"
		const uintYEydMt2 = BigInt("1700")
		const addressxrCGmRV = accounts[2]
		const uintRcVMuK = BigInt("1110")
		const boolAKktlys = await GreenMarkTrustv6pB445.burnFrom.call(addresstcw0Q2N, uintFoXjggG, {from: accounts[2]});
		const boole7kXLJ8 = await GreenMarkTrustv6pB445.burn.call(uintl87h3aB, {from: accounts[4]});
		const boolAIxoYl = await GreenMarkTrustv6pB445.approveAndCall.call(addressnOkzLrv, uint6fcuGX, byteLIwDmNf, {from: accounts[0]});
		const boolv7HRCB3 = await GreenMarkTrustv6pB445.approveAndCall.call(addressxrCGmRV, uintYEydMt2, byteaVBXLvV, {from: accounts[5]});
		const boolFITiICz = await GreenMarkTrustv6pB445.burn.call(uintRcVMuK, {from: accounts[0]});

		await expect(GreenMarkTrustv6pB445.burnFrom.call(addresstcw0Q2N, uintFoXjggG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQEXq7Cw = BigInt("2000")
		const stringB9DpiUK = "JHZxVj"
		const stringAmeaWT8 = "DKs4Ix9wpG7fzWhsD2Hhs8DlRFQLAWi9NTl2pmtM2zPEbTYSTN9kuEnD3khSLRvgLFNK4ioul"
		const GreenMarkTrustKcGaOte = await GreenMarkTrust.new(uintQEXq7Cw, stringB9DpiUK, stringAmeaWT8, {from: accounts[1]});
		const bytegrQlCb = "0x1e14130a0f1b1220081f1109130f17091c"
		const uinttpREnAo = BigInt("936")
		const addresskIzo3G7 = "0x0000000000000000000000000000000000000001"
		const uintKRsxas = BigInt("525")
		const addressfKkaCat = accounts[2]
		const uintgg3TAl7 = BigInt("482")
		const boolI3vn5nC = await GreenMarkTrustKcGaOte.approveAndCall.call(addresskIzo3G7, uinttpREnAo, bytegrQlCb, {from: accounts[2]});
		const boolvbiUMVS = await GreenMarkTrustKcGaOte.transfer.call(addressfKkaCat, uintKRsxas, {from: accounts[4]});
		const boolQjLJK83 = await GreenMarkTrustKcGaOte.burn.call(uintgg3TAl7, {from: accounts[0]});

		await expect(GreenMarkTrustKcGaOte.approveAndCall.call(addresskIzo3G7, uinttpREnAo, bytegrQlCb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinteoULVyk = BigInt("1388")
		const stringTezCkZ4 = "pa38zU1T3fKT1b9qPGoc9HhhhCzTiVK"
		const stringUFPcAzG = "mfbpmFlxGWx78EnJMhLMGTIv0v6yPJ80fGBtdbcTjXZbKdIxKngMi5uxixx35TfeCkS94VKsdY2Jx0yX1czs1R0uww6faw2ZMf"
		const GreenMarkTrustzJoYJUr = await GreenMarkTrust.new(uinteoULVyk, stringTezCkZ4, stringUFPcAzG, {from: "0x0000000000000000000000000000000000000001"});
		const byteoqnEY4 = "0x1e0703070b0908031017021e041115200207071c"
		const uintciwVm8 = BigInt("598")
		const addressk8gTPDA = accounts[0]
		const uinthK4Nu7M = BigInt("976")
		const address8EO4pN = accounts[0]
		const uintFo6Kyos = BigInt("783")
		const uintZe8fe73 = BigInt("1409")
		const addressA6kZUxP = "0x0000000000000000000000000000000000000001"
		const addresszforuav = accounts[3]
		const boolmj33PIa = await GreenMarkTrustzJoYJUr.approveAndCall.call(addressk8gTPDA, uintciwVm8, byteoqnEY4, {from: accounts[4]});
		const bool3GTfWP = await GreenMarkTrustzJoYJUr.approve.call(address8EO4pN, uinthK4Nu7M, {from: accounts[1]});
		const boolTquwPBC = await GreenMarkTrustzJoYJUr.burn.call(uintFo6Kyos, {from: accounts[0]});
		const boolNTfkLW0 = await GreenMarkTrustzJoYJUr.transferFrom.call(addresszforuav, addressA6kZUxP, uintZe8fe73, {from: accounts[1]});
	});
})