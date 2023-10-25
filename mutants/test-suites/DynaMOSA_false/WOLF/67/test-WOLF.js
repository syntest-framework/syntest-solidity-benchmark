const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringGRTUJ9 = "YdHkYYK0HAEmB2gLF0LtGqrTYhpJ8BpcQXoVpvHIua4hT7l52YmRc1BtPKQQyq2WxvmkHaRDApLb6S3bqNZoKy"
		const stringf5e4eW1 = "Qaiuu6dckko63ODGuAs8tNrx6yuLwGlfnGJIYRyOwJbhldIPjFEWjFUnrYvzLhU423WsneFFgaagVV"
		const uintrdMDYDf = BigInt("2003")
		const WOLFjYil71J = await WOLF.new(stringGRTUJ9, stringf5e4eW1, uintrdMDYDf, {from: accounts[2]});
		const uintcqul77T = BigInt("862")
		const addresshnT3OZO = accounts[2]
		const uintIhsBjb = BigInt("1419")
		const addressmY84se9 = accounts[4]
		const uintJwl7AuW = BigInt("600")
		const addressKw9zB64 = accounts[1]
		const addressIOsuxSn = accounts[5]
		const boolmcQRXJc = await WOLFjYil71J.approve.call(addresshnT3OZO, uintcqul77T, {from: "0x0000000000000000000000000000000000000001"});
		const boolkvjNPMo = await WOLFjYil71J.approve.call(addressmY84se9, uintIhsBjb, {from: accounts[2]});
//		const boolLZfXWbr = await WOLFjYil71J.transferFrom.call(addressIOsuxSn, addressKw9zB64, uintJwl7AuW, {from: accounts[1]});

		assert.equal(boolkvjNPMo, true)
		assert.equal(boolmcQRXJc, true)
		await expect(WOLFjYil71J.transferFrom.call(addressIOsuxSn, addressKw9zB64, uintJwl7AuW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringrV3AzwX = "zOAvtprcU9drJo9TncVeKcQGlUKCdYf3PSFQwlH6331YqOGTyt9nj6Dl4g"
		const stringxMsCJtG = "sCeGExFDqoffWMjqH5cw9HFb2gFFnhIc5"
		const uintQ86Xc9w = BigInt("2011")
		const WOLFFPKRAcX = await WOLF.new(stringrV3AzwX, stringxMsCJtG, uintQ86Xc9w, {from: accounts[5]});
		const uintIusaAwc = BigInt("744")
		const addresskZt1dfx = accounts[0]
		const uintot1fRJe = BigInt("1266")
		const addresswvU4Xb5 = accounts[4]
		const addressIJFysi7 = accounts[4]
		const uintS4KzxDD = BigInt("658")
		const address4l2M8V = accounts[1]
		const uinticbUucD = BigInt("1280")
		const addressHUkYGKi = accounts[1]
		const uinto0kue18 = BigInt("236")
		const addressIgzPCt1 = accounts[2]
		const boolrm9m1BX = await WOLFFPKRAcX.approve.call(addresskZt1dfx, uintIusaAwc, {from: accounts[0]});
//		const boolBwULtz6 = await WOLFFPKRAcX.transferFrom.call(addressIJFysi7, addresswvU4Xb5, uintot1fRJe, {from: accounts[4]});
//		const boolWSzr5UU = await WOLFFPKRAcX.approveAndCall.call(address4l2M8V, uintS4KzxDD, {from: accounts[4]});
//		const boolBVtiSXT = await WOLFFPKRAcX.approveAndCall.call(addressHUkYGKi, uinticbUucD, {from: accounts[0]});
//		const boolh7lDAtb = await WOLFFPKRAcX.approve.call(addressIgzPCt1, uinto0kue18, {from: accounts[3]});

		assert.equal(boolrm9m1BX, true)
		await expect(WOLFFPKRAcX.transferFrom.call(addressIJFysi7, addresswvU4Xb5, uintot1fRJe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringvTrwTVu = "lKWlQGEMDzQjNfoea"
		const stringM63XdNb = "pUUfW61BgwtOiCaHpsKGkMAsXrnV3LyorzgEcJDYcws8TvUbkz95iQVRgC3KEZk6E4"
		const uintwbqkal = BigInt("2010")
		const WOLFqYHOHAu = await WOLF.new(stringvTrwTVu, stringM63XdNb, uintwbqkal, {from: accounts[2]});
		const uintN35sS24 = BigInt("865")
		const addressqCS0lh = accounts[4]
		const uintuXJQKWQ = BigInt("1249")
		const addressFM3dE46 = accounts[3]
//		const boolvITAFOT = await WOLFqYHOHAu.approveAndCall.call(addressqCS0lh, uintN35sS24, {from: accounts[1]});
//		const boolojRFsKR = await WOLFqYHOHAu.approve.call(addressFM3dE46, uintuXJQKWQ, {from: accounts[4]});

		await expect(WOLFqYHOHAu.approveAndCall.call(addressqCS0lh, uintN35sS24, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringGuUtuWh = "7UjQiP1ZiC26TIV3UJyFbTbMkGO4LyTovtfM3o3OOq"
		const stringEdSr8Bh = "NcdD9RWdvIqistUg"
		const uinte9NoFTr = BigInt("1148")
		const WOLFUnTiGIQ = await WOLF.new(stringGuUtuWh, stringEdSr8Bh, uinte9NoFTr, {from: accounts[3]});
		const uintA6YAOez = BigInt("1049")
		const addressdpDp224 = accounts[2]
		const uintVsvJEkI = BigInt("1043")
		const addressBcDJ8Nq = accounts[3]
		const uintkcqcHRP = BigInt("892")
		const addressN4BJmH5 = accounts[3]
		const uintB3gEajD = BigInt("893")
		const addressvyyt8Q = accounts[2]
		const uintbqvTWbr = BigInt("2001")
		const addressjX2vuO = accounts[2]
		const boolJDP7skU = await WOLFUnTiGIQ.transfer.call(addressdpDp224, uintA6YAOez, {from: accounts[3]});
//		const booliKjlLy7 = await WOLFUnTiGIQ.approveAndCall.call(addressBcDJ8Nq, uintVsvJEkI, {from: accounts[5]});
//		const booliV8G7pn = await WOLFUnTiGIQ.approve.call(addressN4BJmH5, uintkcqcHRP, {from: accounts[3]});
//		const booll4S1gA = await WOLFUnTiGIQ.approveAndCall.call(addressvyyt8Q, uintB3gEajD, {from: accounts[1]});
//		const boolR46yDw2 = await WOLFUnTiGIQ.transfer.call(addressjX2vuO, uintbqvTWbr, {from: accounts[4]});

		assert.equal(boolJDP7skU, true)
		await expect(WOLFUnTiGIQ.approveAndCall.call(addressBcDJ8Nq, uintVsvJEkI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringTNHOcZ2 = "fBsYVmRInouFFEruUi7SEXDhKAJwsyvGNwNx4a7UkKlgQjW"
		const stringPexn66 = "AAD72ClGNKNF21DfTDMAsGANA3bAvpaTUfPgQg"
		const uintMnuOuy = BigInt("72")
		const WOLFCuGOEUG = await WOLF.new(stringTNHOcZ2, stringPexn66, uintMnuOuy, {from: "0x0000000000000000000000000000000000000001"});
		const uintBPezW6U = BigInt("1569")
		const addressxEmpGLy = accounts[1]
		const uintIwkQo4 = BigInt("1696")
		const addresskOErBm = accounts[5]
		const addresscPIJxcr = "0x0000000000000000000000000000000000000001"
		const uintmP0cFaz = BigInt("1607")
		const addressNAascM = accounts[4]
		const addressdGIpliC = accounts[0]
		const uintWpf8Cxa = BigInt("1795")
		const addresscMr9DwE = accounts[5]
		const boolRbk9NOc = await WOLFCuGOEUG.approve.call(addressxEmpGLy, uintBPezW6U, {from: accounts[4]});
		const boolDYXpyn = await WOLFCuGOEUG.transferFrom.call(addresscPIJxcr, addresskOErBm, uintIwkQo4, {from: accounts[4]});
		const boolWg0Dvxq = await WOLFCuGOEUG.approve.call(addressNAascM, uintmP0cFaz, {from: accounts[1]});
		const boolPTkvct = await WOLFCuGOEUG.transferownership.call(addressdGIpliC, {from: accounts[0]});
		const boolTeGeZR6 = await WOLFCuGOEUG.approve.call(addresscMr9DwE, uintWpf8Cxa, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringojvQVlq = "MBAsLndLfGIbDU7JOlRR41bc"
		const stringH2RqbB0 = "4zYXlEiD2afpi1WPjyKBkKTrwhSU7lIUBPM4loV9NRO6VLnIVfbO5z5nRC1spd6"
		const uintJuo8YN5 = BigInt("162")
		const WOLFFU3KuvF = await WOLF.new(stringojvQVlq, stringH2RqbB0, uintJuo8YN5, {from: accounts[0]});
		const uint1F0ldG = BigInt("1321")
		const addressN8fop8s = accounts[1]
		const addresswbC6eTz = accounts[3]
		const uint3INYw2 = BigInt("43")
		const addressgoINEZc = accounts[2]
		const uintp1s7QzD = BigInt("801")
		const addressFgLlpn0 = accounts[2]
		const addressGQegUuj = accounts[5]
		const uintQLnw26h = BigInt("241")
		const addressw2KWKjt = accounts[3]
		const boolAUlIckf = await WOLFFU3KuvF.approve.call(addressN8fop8s, uint1F0ldG, {from: accounts[2]});
//		const boolsBmVKZ = await WOLFFU3KuvF.transferownership.call(addresswbC6eTz, {from: accounts[5]});
//		const booljkJ30IY = await WOLFFU3KuvF.approve.call(addressgoINEZc, uint3INYw2, {from: accounts[5]});
//		const boolWk7Bt56 = await WOLFFU3KuvF.transferFrom.call(addressGQegUuj, addressFgLlpn0, uintp1s7QzD, {from: accounts[3]});
//		const boolQ97kyYI = await WOLFFU3KuvF.approve.call(addressw2KWKjt, uintQLnw26h, {from: accounts[2]});

		assert.equal(boolAUlIckf, true)
		await expect(WOLFFU3KuvF.transferownership.call(addresswbC6eTz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRDgkwxN = "pPaQUZrjVvxMkd97kgC4kRe88KICgCSzYxzqTj74SfSSCTnuhBnOBQLVBGp24UKEUwOvejPlOHymDMsTX6m9HzmluuyANWYy"
		const stringnvz5TIq = "Fti8P5bAyMMSOObFWr7cZu6nRtejeLudu1JKikw94P3E47HB7tNyfjfma8iqk1P"
		const uintifZUrdz = BigInt("1887")
		const WOLFqXVVmD3 = await WOLF.new(stringRDgkwxN, stringnvz5TIq, uintifZUrdz, {from: accounts[0]});
		const uintuGmXgB0 = BigInt("15")
		const addressOO2s49T = accounts[0]
		const uintQJOWxrl = BigInt("1595")
		const addressrygPcRh = accounts[4]
		const uintRyLSspH = BigInt("1320")
		const addressr8zK3un = accounts[4]
		const addressO5uqM5l = accounts[2]
		const boolD3XObKx = await WOLFqXVVmD3.approveAndCall.call(addressOO2s49T, uintuGmXgB0, {from: accounts[0]});
//		const boolzNZrAOa = await WOLFqXVVmD3.approveAndCall.call(addressrygPcRh, uintQJOWxrl, {from: accounts[1]});
//		const boolEDhYLpO = await WOLFqXVVmD3.transferFrom.call(addressO5uqM5l, addressr8zK3un, uintRyLSspH, {from: accounts[0]});

		assert.equal(boolD3XObKx, true)
		await expect(WOLFqXVVmD3.approveAndCall.call(addressrygPcRh, uintQJOWxrl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRDgkwxN = "pPaQUZrjVvxMkd97kgC4kRe88KICgCSzYxzqTj74SfSSCTnuhBnOBQLVBGp24UKEUwOvejPlOHymDMsTX6m9HzmluuyANWYy"
		const stringnvz5TIq = "Fti8P5bAyMMSOObFWr7cZu6nRtejeLudu1JKikw94P3E47HB7tNyfjfma8iqk1P"
		const uintBipbWN1 = BigInt("1887")
		const WOLFqXVVmD3 = await WOLF.new(stringRDgkwxN, stringnvz5TIq, uintBipbWN1, {from: accounts[0]});
		const uintJhQkZRE = BigInt("0")
		const addressathGrjD = accounts[3]
		const uintzpqDrgQ = BigInt("2")
		const addressjgjuHo0 = accounts[3]
		const uint0LCcfQ = BigInt("741")
		const addressBI7ZnkI = accounts[0]
		const addressPYL3m3 = accounts[4]
		const uintIL4HdYh = BigInt("1331")
		const addressIZbgPpM = accounts[0]
		const uintVMJaLXb = BigInt("1197")
		const addressfjiYveU = accounts[3]
		const boolD3XObKx = await WOLFqXVVmD3.approveAndCall.call(addressathGrjD, uintJhQkZRE, {from: accounts[0]});
//		const boolAxldao5 = await WOLFqXVVmD3.transfer.call(addressjgjuHo0, uintzpqDrgQ, {from: accounts[1]});
//		const boolhIHSH3q = await WOLFqXVVmD3.transfer.call(addressBI7ZnkI, uint0LCcfQ, {from: accounts[3]});
//		const boolwcv6xaU = await WOLFqXVVmD3.transferownership.call(addressPYL3m3, {from: accounts[2]});
//		const boolVhwOnR1 = await WOLFqXVVmD3.approve.call(addressIZbgPpM, uintIL4HdYh, {from: accounts[1]});
//		const boolIXXOadH = await WOLFqXVVmD3.transfer.call(addressfjiYveU, uintVMJaLXb, {from: accounts[0]});

		assert.equal(boolD3XObKx, true)
		await expect(WOLFqXVVmD3.transfer.call(addressjgjuHo0, uintzpqDrgQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRDgkwxN = "pPaQUZrjVvxMkd97kgC4kRe88KICgCSzYxzqTj74SfSSCTnuhBnOBQLVBGp24UKEUwOvejPlOHymDMsTX6m9HzmluuyANWYy"
		const stringnvz5TIq = "Fti8P5bAyMMSOObFWr7cZu6nRtejeLudu1JKikw94P3E47HB7tNyfjfma8iqk1P"
		const uintja9J2eK = BigInt("1887")
		const WOLFqXVVmD3 = await WOLF.new(stringRDgkwxN, stringnvz5TIq, uintja9J2eK, {from: accounts[0]});
		const uintnENdmIh = BigInt("15")
		const addressvu9fwKR = accounts[1]
		const uintsbXoOI3 = BigInt("0")
		const addressiyrcLhZ = accounts[3]
		const boolD3XObKx = await WOLFqXVVmD3.approveAndCall.call(addressvu9fwKR, uintnENdmIh, {from: accounts[0]});
		const boolAxldao5 = await WOLFqXVVmD3.transfer.call(addressiyrcLhZ, uintsbXoOI3, {from: accounts[1]});

		assert.equal(boolAxldao5, true)
		assert.equal(boolD3XObKx, true)
	});

	it('test for WOLF', async () => {
		const stringwepUEW = "Q2pZkihOxIHhsVrHKT8Nro74HNhT5KETqnLQhcn0uxJOc6G"
		const stringv7KyD9 = "5YFWBebygUXSFGGEmwYHW6j1yzabaSTotmXFPuwffuKuVYN9YlP4Qa3o1lUgxC0bIFc1tOT8iJ5YG73mBJhJlNlVo"
		const uintKNCkGfc = BigInt("359")
		const WOLFSzzNzWa = await WOLF.new(stringwepUEW, stringv7KyD9, uintKNCkGfc, {from: accounts[1]});
		const uintEB8XGc = BigInt("1283")
		const addressb0MsqKF = "0x00000000000000000000000000000000000000-1"
		const addressKaxGh6q = accounts[3]
		const uintdDuSjR = BigInt("1114")
		const address1KYFIj = accounts[3]
		const addressm41xc1D = accounts[5]
//		const booltF1X0v = await WOLFSzzNzWa.transferFrom.call(addressKaxGh6q, addressb0MsqKF, uintEB8XGc, {from: accounts[3]});
//		const boolWR8YAP4 = await WOLFSzzNzWa.transferFrom.call(addressm41xc1D, address1KYFIj, uintdDuSjR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFSzzNzWa.transferFrom.call(addressKaxGh6q, addressb0MsqKF, uintEB8XGc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})