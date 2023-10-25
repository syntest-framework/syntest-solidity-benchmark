const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintW2FM2uF = BigInt("1752")
		const stringptdiIy4 = "z6j56YYiEYkzvIqLkS7UkLrB03jbpMuHpm5Il9a7NXC4YTpuHsAc2752xWTENTMAz3nWDQIT1GOBAe37tepGybl89x1e8Hyagu"
		const stringGNEW0c = "IwSC1ETaeffsKUk16ckBlq5azsYVAY6NAmnRqno5tbvYY7Wm59nIutNvUIPYfO8l"
		const INSTdnpXp = await INS.new(uintW2FM2uF, stringptdiIy4, stringGNEW0c, {from: "0x0000000000000000000000000000000000000001"});
		const uintSbCxYVf = BigInt("1118")
		const addressYLyq59 = accounts[2]
		const uintoaD9Hjq = BigInt("1914")
		const addressq9vsuJ0 = accounts[5]
		const addressf4Jwcgi = accounts[0]
		const bytexteFwuY = "0x0c180b070f0d140e0002171908081d07030f16200d050d0a1e1b"
		const uinte7JP1X3 = BigInt("1178")
		const addresslTCSlNm = accounts[5]
		const uint45K26J = BigInt("98")
		const addressvqxoTPF = accounts[0]
		const uintWNiDPiP = BigInt("583")
		const addressUL84HiX = "0x0000000000000000000000000000000000000001"
		const addressPvUsec = accounts[0]
		const uintao7hrcl = BigInt("1905")
		const addressNq4ln2k = accounts[4]
		const boolcxyPIv7 = await INSTdnpXp.transfer.call(addressYLyq59, uintSbCxYVf, {from: accounts[5]});
		const boolkyGcMNe = await INSTdnpXp.transferFrom.call(addressf4Jwcgi, addressq9vsuJ0, uintoaD9Hjq, {from: accounts[2]});
		const boollI9t4bE = await INSTdnpXp.approveAndCall.call(addresslTCSlNm, uinte7JP1X3, bytexteFwuY, {from: accounts[3]});
		const boolBijvNK = await INSTdnpXp.approve.call(addressvqxoTPF, uint45K26J, {from: accounts[3]});
		const booldsP5T6L = await INSTdnpXp.transferFrom.call(addressPvUsec, addressUL84HiX, uintWNiDPiP, {from: accounts[2]});
		const boolwHhl9k1 = await INSTdnpXp.approve.call(addressNq4ln2k, uintao7hrcl, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintMqfpAnd = BigInt("274")
		const stringtz4NUvS = "j65MSLXm5WNGptoKobcODdRjLsDILoMAbSW4ikTcGplTv8OugKGUGm2u1H25BnfSDXNuhvNjwiSKjREgMK8K9RHia3tu0"
		const stringKSnfMZI = "KoI8kMzZoWpBePkGaoqi8TOVG0U"
		const INSFqc4016 = await INS.new(uintMqfpAnd, stringtz4NUvS, stringKSnfMZI, {from: accounts[4]});
		const byteKK8NCmS = "0x07"
		const uintvLExmer = BigInt("1558")
		const addressrNsSGAy = "0x0000000000000000000000000000000000000001"
		const uinthMqr0Jq = BigInt("1695")
		const uintWQ1evjG = BigInt("11")
		const addressrKMDlWp = accounts[3]
		const uintsjx0MEM = BigInt("1998")
//		const boolpWqmX1j = await INSFqc4016.approveAndCall.call(addressrNsSGAy, uintvLExmer, byteKK8NCmS, {from: accounts[2]});
//		const boolzD9E6u9 = await INSFqc4016.burn.call(uinthMqr0Jq, {from: accounts[3]});
//		const boolDywK2t8 = await INSFqc4016.approve.call(addressrKMDlWp, uintWQ1evjG, {from: accounts[3]});
//		const boolLM2rgvr = await INSFqc4016.burn.call(uintsjx0MEM, {from: accounts[1]});

		await expect(INSFqc4016.approveAndCall.call(addressrNsSGAy, uintvLExmer, byteKK8NCmS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintuNv1fz = BigInt("1783")
		const stringGXnyz7w = "eYllaPmJLX2faGH5LtCxuPsd0NVHAJDNCWnUOXTlyvOOQSuLpqUshMLT1"
		const stringqZca2h = "kcqhbKgbzPEC9oJBrE5twegZ"
		const INSP23ClCU = await INS.new(uintuNv1fz, stringGXnyz7w, stringqZca2h, {from: accounts[4]});
		const uintehot3W6 = BigInt("13")
		const uintKD0WYc8 = BigInt("702")
		const addressvi7bwKy = accounts[5]
		const uint8tgBxr = BigInt("1200")
		const address6dQS4G = accounts[1]
		const uintwqNdNy = BigInt("1788")
		const addressnIsL5Tw = accounts[3]
		const addressXaZ0MO2 = accounts[4]
//		const boolSgGNjF = await INSP23ClCU.burn.call(uintehot3W6, {from: accounts[2]});
//		const boolvhX6RpQ = await INSP23ClCU.transfer.call(addressvi7bwKy, uintKD0WYc8, {from: accounts[0]});
//		const boolV8jjw2x = await INSP23ClCU.approve.call(address6dQS4G, uint8tgBxr, {from: accounts[3]});
//		const boolZyCo1M = await INSP23ClCU.transferFrom.call(addressXaZ0MO2, addressnIsL5Tw, uintwqNdNy, {from: accounts[2]});

		await expect(INSP23ClCU.burn.call(uintehot3W6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintLII7Q64 = BigInt("1533")
		const stringgfhnBIm = "JfsStS3miQhDsV6Bij5pMcXcITaDKEMPigllALXigUeYw3ydXo6zjHO"
		const stringdqyh7HS = "R2Yxkuxs1qFE1rGBE7yef9bj8w1zfh2CdP6u"
		const INSkzZTXc6 = await INS.new(uintLII7Q64, stringgfhnBIm, stringdqyh7HS, {from: accounts[5]});
		const uintBWAQq0m = BigInt("781")
		const addressFIfx3E7 = accounts[4]
		const uintORR1Clr = BigInt("903")
		const addressXibIvYk = accounts[4]
		const uintooGHBUp = BigInt("361")
		const addressEfHCJIU = accounts[1]
		const bytefpzhuUJ = "0x13031a051003020c1b1d121b18201a0a01"
		const uintUhyIo3d = BigInt("1965")
		const addressab6saM = accounts[2]
		const uintoPhDDoj = BigInt("143")
		const addressmz4V5m = accounts[4]
		const uintZzYodvr = BigInt("225")
		const addressLSr4qnl = accounts[0]
		const addressz4iYL8G = accounts[2]
		const boolWUcF65r = await INSkzZTXc6.approve.call(addressFIfx3E7, uintBWAQq0m, {from: accounts[2]});
//		const boolFZBJQcQ = await INSkzZTXc6.burnFrom.call(addressXibIvYk, uintORR1Clr, {from: "0x0000000000000000000000000000000000000001"});
//		const boold8Skf7s = await INSkzZTXc6.approve.call(addressEfHCJIU, uintooGHBUp, {from: accounts[3]});
//		const boolbeuZ29Q = await INSkzZTXc6.approveAndCall.call(addressab6saM, uintUhyIo3d, bytefpzhuUJ, {from: accounts[0]});
//		const boolJjgPzNn = await INSkzZTXc6.approve.call(addressmz4V5m, uintoPhDDoj, {from: accounts[2]});
//		const boolJJMJv5C = await INSkzZTXc6.transferFrom.call(addressz4iYL8G, addressLSr4qnl, uintZzYodvr, {from: accounts[0]});

		assert.equal(boolWUcF65r, true)
		await expect(INSkzZTXc6.burnFrom.call(addressXibIvYk, uintORR1Clr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintHN3JvU = BigInt("1476")
		const stringwAQ4CGH = "N1F7Wsm6LiH88"
		const stringHmImDAT = "tgKdLpAdxfnUPMtMWU22ZlB8THIDqfN7rdvwWDyTZkrwLbVl6w9UjQkPnCLSHseBr2qtIHrJf8FXiNioSScjYnKZI8o3pNZOg"
		const INSf6X6N5y = await INS.new(uintHN3JvU, stringwAQ4CGH, stringHmImDAT, {from: accounts[5]});
		const uintk5DldR = BigInt("912")
		const addressLv7Xu7R = "0x0000000000000000000000000000000000000001"
		const addressl4vwNR9 = "0x0000000000000000000000000000000000000001"
		const byteGSbaqrQ = "0x011e190f0917130a001f200b1d"
		const uintzuAVLHS = BigInt("2033")
		const addressFZLR5M = accounts[2]
		const uintI4Gt1tP = BigInt("403")
		const addressaqFzMVs = accounts[2]
//		const boolPRrrlY3 = await INSf6X6N5y.transferFrom.call(addressl4vwNR9, addressLv7Xu7R, uintk5DldR, {from: accounts[0]});
//		const boolQGLONvo = await INSf6X6N5y.approveAndCall.call(addressFZLR5M, uintzuAVLHS, byteGSbaqrQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwQs9lQf = await INSf6X6N5y.burnFrom.call(addressaqFzMVs, uintI4Gt1tP, {from: accounts[2]});

		await expect(INSf6X6N5y.transferFrom.call(addressl4vwNR9, addressLv7Xu7R, uintk5DldR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintAbOcAUc = BigInt("1750")
		const stringWA01Cc1 = "SgY9tTaxIrLGx7VedQuweF8avg"
		const stringtzWiuPp = "wWA2hciZul23LCVY5vrb4BqKPvMgT"
		const INSpWJNVs = await INS.new(uintAbOcAUc, stringWA01Cc1, stringtzWiuPp, {from: accounts[0]});
		const uintUWwHDN = BigInt("821")
		const addressIjhiDuI = accounts[5]
		const uintoECcwCE = BigInt("794")
		const byte127fyf = "0x0c1c121e081c060e170613"
		const uintjzuM58f = BigInt("1905")
		const addressBE73DGy = accounts[2]
		const bytexth4chU = "0x111407"
		const uintQkFStYL = BigInt("1004")
		const addressCgfuEo0 = accounts[2]
		const uintfeUPqD3 = BigInt("222")
		const addressJlku6SN = accounts[4]
		const addressJEc6VSm = accounts[0]
		const byteHx0vDWq = "0x140a"
		const uintnCwRywl = BigInt("262")
		const addressDfDR7O3 = accounts[5]
//		const boolFX3PsGJ = await INSpWJNVs.transfer.call(addressIjhiDuI, uintUWwHDN, {from: accounts[3]});
//		const booljlzMo9 = await INSpWJNVs.burn.call(uintoECcwCE, {from: accounts[2]});
//		const booloVjVS3 = await INSpWJNVs.approveAndCall.call(addressBE73DGy, uintjzuM58f, byte127fyf, {from: accounts[3]});
//		const boolcZQwUqM = await INSpWJNVs.approveAndCall.call(addressCgfuEo0, uintQkFStYL, bytexth4chU, {from: accounts[3]});
//		const boolENqg65Q = await INSpWJNVs.transferFrom.call(addressJEc6VSm, addressJlku6SN, uintfeUPqD3, {from: accounts[2]});
//		const boolhvaA7VU = await INSpWJNVs.approveAndCall.call(addressDfDR7O3, uintnCwRywl, byteHx0vDWq, {from: accounts[1]});

		await expect(INSpWJNVs.transfer.call(addressIjhiDuI, uintUWwHDN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})