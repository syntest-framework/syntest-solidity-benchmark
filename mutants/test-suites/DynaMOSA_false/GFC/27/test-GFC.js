const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintLyf5b0 = BigInt("952")
		const stringUKXLpiG = "jyANcRi896I9mV3oZ6k9fxrlITXyPLRJRcSW6WTlGBiqu3C6dJcHpLbDtgVxOcgiuBGEAuQ5xt9"
		const stringbslUZxC = "4wQhp5T3vB4MwWjg9o22iErYgJ0yFBsF33yg3tc1gjxqYDUTFlSk5jKjxSuP9R6mtXXt"
		const GFCoeU7qws = await GFC.new(uintLyf5b0, stringUKXLpiG, stringbslUZxC, {from: accounts[4]});
		const uintlwcU7Me = BigInt("884")
		const uintUAnywPf = BigInt("222")
		const addressQarvXaO = accounts[5]
		const addressrwXW4uR = "0x0000000000000000000000000000000000000001"
		const uintvDzS61u = BigInt("1151")
		const addresswjmxyp = accounts[3]
//		const boolQiLN81o = await GFCoeU7qws.burn.call(uintlwcU7Me, {from: accounts[3]});
//		const boolzjL72uI = await GFCoeU7qws.transferFrom.call(addressrwXW4uR, addressQarvXaO, uintUAnywPf, {from: accounts[1]});
//		const boolZPa5r0q = await GFCoeU7qws.approve.call(addresswjmxyp, uintvDzS61u, {from: accounts[2]});

		await expect(GFCoeU7qws.burn.call(uintlwcU7Me, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKDsYzbe = BigInt("766")
		const stringJbAY44K = "w4vWCjuPeWDhwiLu0YxSCEtavVE6n3L1BGKxpw5xS7IcVHuhTb4atxcrCsdX"
		const string7uOCC0 = "PMRBT2ZQoXGLuIoXHIGywwCKsW1LUqV1iWwwyzd"
		const GFCrEkCSiG = await GFC.new(uintKDsYzbe, stringJbAY44K, string7uOCC0, {from: "0x0000000000000000000000000000000000000001"});
		const uintQLKr8ND = BigInt("1055")
		const uintE85wGF9 = BigInt("350")
		const uintK2t0k0m = BigInt("1980")
		const addressAkj4WXA = accounts[1]
		const addressEZ9MbW2 = accounts[0]
		const uintO6DYeUS = BigInt("414")
		const addressr17re5 = accounts[2]
		const addressXHjAoju = accounts[0]
		const uintShgwaUg = BigInt("485")
		const addresslR3TxfR = accounts[1]
		const boolTKh63N = await GFCrEkCSiG.burn.call(uintQLKr8ND, {from: accounts[2]});
		const boolZEfW9Y = await GFCrEkCSiG.burn.call(uintE85wGF9, {from: accounts[4]});
		const boolJ8xw1sI = await GFCrEkCSiG.transferFrom.call(addressEZ9MbW2, addressAkj4WXA, uintK2t0k0m, {from: accounts[1]});
		const boolUrxbCZn = await GFCrEkCSiG.transferFrom.call(addressXHjAoju, addressr17re5, uintO6DYeUS, {from: accounts[2]});
		const boolpk6bN1a = await GFCrEkCSiG.approve.call(addresslR3TxfR, uintShgwaUg, {from: accounts[3]});
	});

	it('test for GFC', async () => {
		const uintQsnjOGi = BigInt("1192")
		const stringjVcRThx = "U4RYZ2M"
		const stringndfksCp = "1AiVcgd3orLXxjdfatPXGUAmeruQHUo5RHUFan9qAn3EjrJYHA8wdacrl9hO6rwivjHMPS"
		const GFCpbEO2SM = await GFC.new(uintQsnjOGi, stringjVcRThx, stringndfksCp, {from: accounts[3]});
		const uintljVDZ4E = BigInt("1132")
		const byteLMECciD = "0x1e0e0a1f1f07081103170104100908"
		const uintwE48dH = BigInt("1499")
		const addressACKTXya = accounts[4]
		const uintZWoM20 = BigInt("1788")
		const addressfqOKgH = accounts[3]
		const boolDb1t1gM = await GFCpbEO2SM.burn.call(uintljVDZ4E, {from: accounts[3]});
//		const boolu6ebss = await GFCpbEO2SM.approveAndCall.call(addressACKTXya, uintwE48dH, byteLMECciD, {from: accounts[5]});
//		const boolprbvMD4 = await GFCpbEO2SM.approve.call(addressfqOKgH, uintZWoM20, {from: accounts[2]});

		assert.equal(boolDb1t1gM, true)
		await expect(GFCpbEO2SM.approveAndCall.call(addressACKTXya, uintwE48dH, byteLMECciD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintFJIrrX = BigInt("1684")
		const stringOYRMOnk = "KoPJf6LTVoPvgk1khueTOLozhh8fQtJNeRdD2JBP5jmMrbm519Vdwh17pvTObwil1IK4u37XC0THAfbpF"
		const stringQ1f6gw = "vVos8pd0BbEfECG4Y2szk98Z4MUQYdXHEvp5Cg0deCpxiMYPfXsuEdQljzwYseh"
		const GFCxuCYcpj = await GFC.new(uintFJIrrX, stringOYRMOnk, stringQ1f6gw, {from: accounts[4]});
		const uintAZwNvNd = BigInt("395")
		const addresseD3AQlV = accounts[0]
		const byteaI0OCrf = "0x05070f11190b1c031814070509031f0c010c19020e"
		const uintmYXSrKZ = BigInt("1944")
		const addressTKX20VY = accounts[2]
		const uintV6kiKe4 = BigInt("1554")
		const addressHzH7bC = accounts[0]
//		const boolj6eh1KK = await GFCxuCYcpj.burnFrom.call(addresseD3AQlV, uintAZwNvNd, {from: accounts[0]});
//		const boolSbVJuvO = await GFCxuCYcpj.approveAndCall.call(addressTKX20VY, uintmYXSrKZ, byteaI0OCrf, {from: accounts[2]});
//		const boolGXs2yEE = await GFCxuCYcpj.transfer.call(addressHzH7bC, uintV6kiKe4, {from: accounts[5]});

		await expect(GFCxuCYcpj.burnFrom.call(addresseD3AQlV, uintAZwNvNd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKRcSSGs = BigInt("1068")
		const stringTCULCYv = "9DawzDrtKuV1gmWemPHiAPlcXKEeo4aWP8DbTdUba1GxM9Gdqkc101VxUqzCfbLFrNgmPgTouQr8"
		const stringVp4wWUA = "cOObS3NmLWozWmVg5rbVe6uPa0qevP6Vnpl32iUHI5lTO4yBIE8rXzDEKfdo8D4JsP8P59AMsF"
		const GFCSLJ9dOz = await GFC.new(uintKRcSSGs, stringTCULCYv, stringVp4wWUA, {from: accounts[0]});
		const uintaVWczsg = BigInt("114")
		const addresselkpovV = accounts[3]
		const uintn06GgkK = BigInt("1337")
		const addresskMqkK4w = accounts[1]
		const uintZovsBZj = BigInt("823")
		const addressWnbrkt0 = accounts[2]
		const boolUt6196v = await GFCSLJ9dOz.approve.call(addresselkpovV, uintaVWczsg, {from: accounts[5]});
		const boolkpSu0u7 = await GFCSLJ9dOz.approve.call(addresskMqkK4w, uintn06GgkK, {from: accounts[2]});
//		const boolSlev8I6 = await GFCSLJ9dOz.transfer.call(addressWnbrkt0, uintZovsBZj, {from: accounts[4]});

		assert.equal(boolUt6196v, true)
		assert.equal(boolkpSu0u7, true)
		await expect(GFCSLJ9dOz.transfer.call(addressWnbrkt0, uintZovsBZj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintsBdXg8W = BigInt("1068")
		const stringTCULCYv = "9DawzDrtKuV1gmWemPHiAPlcXKEeo4aWP8DbTdUba1GxM9Gdqkc101VxUqzCfbLFrNgmPgTouQr8"
		const stringVp4wWUA = "cOObS3NmLWozWmVg5rbVe6uPa0qevP6Vnpl32iUHI5lTO4yBIE8rXzDEKfdo8D4JsP8P59AMsF"
		const GFCSLJ9dOz = await GFC.new(uintsBdXg8W, stringTCULCYv, stringVp4wWUA, {from: accounts[0]});
		const uint2Uaqed = BigInt("114")
		const addressypvtr3l = accounts[3]
		const uintUFGTNjj = BigInt("1322")
		const addressYXdItnP = accounts[1]
		const uintzLF7fXB = BigInt("452")
		const addressoFrGdUd = accounts[4]
		const addresspu3nTRO = accounts[0]
		const uintMta82Fz = BigInt("635")
		const byteEabR6mq = "0x1d0d0e121e0a030f1f100d0a050c181d"
		const uintOVq37Ky = BigInt("1210")
		const addressvxNh6Tv = accounts[0]
		const uintu0AZ9hS = BigInt("823")
		const addressg0I5YWi = accounts[2]
		const boolUt6196v = await GFCSLJ9dOz.approve.call(addressypvtr3l, uint2Uaqed, {from: accounts[5]});
		const boolkpSu0u7 = await GFCSLJ9dOz.approve.call(addressYXdItnP, uintUFGTNjj, {from: accounts[2]});
//		const booloIo6Cj2 = await GFCSLJ9dOz.transferFrom.call(addresspu3nTRO, addressoFrGdUd, uintzLF7fXB, {from: accounts[1]});
//		const boolepbGHQ = await GFCSLJ9dOz.burn.call(uintMta82Fz, {from: accounts[4]});
//		const booliAPVsdj = await GFCSLJ9dOz.approveAndCall.call(addressvxNh6Tv, uintOVq37Ky, byteEabR6mq, {from: accounts[1]});
//		const boolSlev8I6 = await GFCSLJ9dOz.transfer.call(addressg0I5YWi, uintu0AZ9hS, {from: accounts[4]});

		assert.equal(boolUt6196v, true)
		assert.equal(boolkpSu0u7, true)
		await expect(GFCSLJ9dOz.transferFrom.call(addresspu3nTRO, addressoFrGdUd, uintzLF7fXB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})