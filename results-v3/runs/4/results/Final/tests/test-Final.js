const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringQ24Dpok = "ic6d7yBwoYqeUgrUAHB8tVplFycDsuGou"
		const stringb8DNtws = "EvPmFvzWFdblI9QPyaCURhVOcS75nHC3QlihKrZfudWiNcEEfc1czbjgkqkaQhAvVxzukw"
		const uintK8HGah8 = BigInt("128")
		const FinalzdDMpb9 = await Final.new(stringQ24Dpok, stringb8DNtws, uintK8HGah8, {from: accounts[1]});
		const uintWQ3dkIL = BigInt("982")
		const addressU4h4MTs = accounts[1]
		const addressgyzLgMk = "0x0000000000000000000000000000000000000001"
		const stringhALVR1W = await FinalzdDMpb9.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8VexmwI = await FinalzdDMpb9.decimals.call({from: accounts[1]});
		const booloXBg0az = await FinalzdDMpb9.transferFrom.call(addressgyzLgMk, addressU4h4MTs, uintWQ3dkIL, {from: accounts[0]});
		const stringex7gj2Z = await FinalzdDMpb9.name.call({from: accounts[2]});
		const stringpCsoNrc = await FinalzdDMpb9.symbol.call({from: accounts[3]});

		assert.equal(stringhALVR1W, "ic6d7yBwoYqeUgrUAHB8tVplFycDsuGou")
		assert.equal(uint8VexmwI, BigInt("18"))
		await expect(FinalzdDMpb9.transferFrom.call(addressgyzLgMk, addressU4h4MTs, uintWQ3dkIL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringLqIwTVj = "zz99asf2euTN"
		const stringapdnWoP = "lFtEj5LVWgEXooiliV9UtA6QFKCAD4fRaHS16soMnXv3lauGC1rGhr49XrfHgl2b5kH55CNFyR3IlV97"
		const uintMop8sLr = BigInt("1601")
		const Finalt0w9H3P = await Final.new(stringLqIwTVj, stringapdnWoP, uintMop8sLr, {from: accounts[2]});
		const uintnUespVw = BigInt("583")
		const address1jUGFu = accounts[2]
		const addresslirmxtn = accounts[4]
		const uintM3kl5H = BigInt("1037")
		const address1xQS2H = accounts[0]
		const addressOK032by = accounts[1]
		const addresstcluwKu = accounts[4]
		const boolZydioN1 = await Finalt0w9H3P.transferFrom.call(addresslirmxtn, address1jUGFu, uintnUespVw, {from: accounts[4]});
		const boolIhzNxYG = await Finalt0w9H3P.approve.call(address1xQS2H, uintM3kl5H, {from: accounts[0]});
		const uint8zdR3rN = await Finalt0w9H3P.decimals.call({from: accounts[4]});
		const uintyk2qZtK = await Finalt0w9H3P.allowance.call(addresstcluwKu, addressOK032by, {from: accounts[3]});

		await expect(Finalt0w9H3P.transferFrom.call(addresslirmxtn, address1jUGFu, uintnUespVw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringkGFj1Zg = "aZAdAW98JVBrAow9n"
		const stringL4MEaPL = "e6VTp9HIpKKmq7Fa14KTk"
		const uintbo8x9dz = BigInt("519")
		const FinalGcBoeQm = await Final.new(stringkGFj1Zg, stringL4MEaPL, uintbo8x9dz, {from: accounts[4]});
		const uintD9c7thV = BigInt("2032")
		const addressJa23734 = accounts[3]
		const addressF6F4zLk = accounts[0]
		const uintqvPqE9k = BigInt("1472")
		const addressKgUNxWL = accounts[0]
		const addressvxEpXYS = accounts[3]
		const addressxXvvPNV = "0x0000000000000000000000000000000000000001"
		const booleLmnS8x = await FinalGcBoeQm.transferFrom.call(addressF6F4zLk, addressJa23734, uintD9c7thV, {from: accounts[0]});
		const uintiFkfoZx = await FinalGcBoeQm.totalSupply.call({from: accounts[2]});
		const boolAMvZPui = await FinalGcBoeQm.approve.call(addressKgUNxWL, uintqvPqE9k, {from: accounts[3]});
		const uintmNqsYLv = await FinalGcBoeQm.allowance.call(addressxXvvPNV, addressvxEpXYS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalGcBoeQm.transferFrom.call(addressF6F4zLk, addressJa23734, uintD9c7thV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringkC2EKyu = "ex5GXwaJAYV5xRl9GZjv9"
		const stringVHOlHbe = "arrnBCoqvWgUYNcjAfE7vvJAH3AE1lJrTsQRPNzGhMgHFcvIDRUo9P41pDTgLRQ8QSSeDfogutn"
		const uintW6wIUUR = BigInt("519")
		const Finalql6YG3E = await Final.new(stringkC2EKyu, stringVHOlHbe, uintW6wIUUR, {from: accounts[0]});
		const uintqjVd78 = BigInt("1839")
		const addressKQeVanN = accounts[3]
		const addressnShUvKl = accounts[4]
		const addresshmvBHq = accounts[4]
		const uintPlt9yYO = BigInt("479")
		const addressfLy0KXK = accounts[1]
		const boolfi4cQY = await Finalql6YG3E.transfer.call(addressKQeVanN, uintqjVd78, {from: accounts[0]});
		const uintWcsOPKu = await Finalql6YG3E.allowance.call(addresshmvBHq, addressnShUvKl, {from: accounts[3]});
		const boolqOc4Z6 = await Finalql6YG3E.transfer.call(addressfLy0KXK, uintPlt9yYO, {from: accounts[3]});

		assert.equal(boolfi4cQY, true)
		assert.equal(uintWcsOPKu, BigInt("0"))
		await expect(Finalql6YG3E.transfer.call(addressfLy0KXK, uintPlt9yYO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringriAn6mb = "oKno2tgamGUCtXcdD49nlyHJ4AAyUGMJO7n5PQ3"
		const stringan0m5pj = "IfjW9VgIvgVDH28rv6Hq4Syfe8u6cHKRFxuvnlYjP9rVAYH8b8Fy"
		const uintg1565Ee = BigInt("217")
		const FinalX3Gvzzb = await Final.new(stringriAn6mb, stringan0m5pj, uintg1565Ee, {from: accounts[5]});
		const uintQAOLp5f = BigInt("451")
		const addressWIWDR35 = "0x0000000000000000000000000000000000000001"
		const uintBXu2AKd = BigInt("708")
		const addresshCu6h2 = accounts[2]
		const addressLs0Jem = accounts[1]
		const addresszZDvnO = accounts[3]
		const boolPM9gPfq = await FinalX3Gvzzb.approve.call(addressWIWDR35, uintQAOLp5f, {from: accounts[5]});
		const boolX3doss = await FinalX3Gvzzb.approveAndCall.call(addresshCu6h2, uintBXu2AKd, {from: accounts[3]});
		const uint8Ui8WAo = await FinalX3Gvzzb.decimals.call({from: accounts[0]});
		const uintTKDoKpZ = await FinalX3Gvzzb.allowance.call(addresszZDvnO, addressLs0Jem, {from: accounts[4]});

		assert.equal(boolPM9gPfq, true)
		await expect(FinalX3Gvzzb.approveAndCall.call(addresshCu6h2, uintBXu2AKd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringw2yPKY = "aarcvbLgzKssWbfWKtNvcx5KAVt4wSxIJdzKkD2vtfy2ReZW7QWEdGSUHX8B6l182h7nX55BK22Z1EimE2U17HR1HzXNLhMA"
		const stringeMxnnBM = "9ObUDRe6zJimmMuBptg8MT8la5ery6ywM5JXb8WcSUw6C6N1I7w8W7EJW1kno2t3hpj1Nwkhh1su5CZNPPNSvE5J"
		const uintYDZZgFU = BigInt("46")
		const FinalJ2xzDrJ = await Final.new(stringw2yPKY, stringeMxnnBM, uintYDZZgFU, {from: accounts[2]});
		const uinteNOxECx = BigInt("1151")
		const addressGU9HFz = accounts[4]
		const addressf93Gcbv = accounts[1]
		const uintesR39oo = BigInt("2007")
		const addressZF5UKJH = accounts[3]
		const uintEN1v6mx = BigInt("712")
		const addressJv4ySWN = accounts[0]
		const uintWefjReq = BigInt("394")
		const addressyAysI3O = accounts[1]
		const stringrOmpXud = await FinalJ2xzDrJ.name.call({from: accounts[4]});
		const boolaRXitH = await FinalJ2xzDrJ.transfer.call(addressGU9HFz, uinteNOxECx, {from: accounts[2]});
		const strings4AvMTO = await FinalJ2xzDrJ.symbol.call({from: accounts[3]});
		const boolOj5UuQy = await FinalJ2xzDrJ.transferownership.call(addressf93Gcbv, {from: accounts[0]});
		const boolUCfJE56 = await FinalJ2xzDrJ.transfer.call(addressZF5UKJH, uintesR39oo, {from: accounts[0]});
		const stringRpqZjD = await FinalJ2xzDrJ.name.call({from: accounts[2]});
		const boolAP7pVpa = await FinalJ2xzDrJ.decreaseAllowance.call(addressJv4ySWN, uintEN1v6mx, {from: accounts[0]});
		const boolFOD5TWA = await FinalJ2xzDrJ.increaseAllowance.call(addressyAysI3O, uintWefjReq, {from: accounts[0]});

		assert.equal(boolaRXitH, true)
		assert.equal(stringrOmpXud, "aarcvbLgzKssWbfWKtNvcx5KAVt4wSxIJdzKkD2vtfy2ReZW7QWEdGSUHX8B6l182h7nX55BK22Z1EimE2U17HR1HzXNLhMA")
		assert.equal(strings4AvMTO, "9ObUDRe6zJimmMuBptg8MT8la5ery6ywM5JXb8WcSUw6C6N1I7w8W7EJW1kno2t3hpj1Nwkhh1su5CZNPPNSvE5J")
		await expect(FinalJ2xzDrJ.transferownership.call(addressf93Gcbv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQtgiWJE = "Pv2qoHmqbvgelPlMarRRDkoJYfCEnrlfoMJpspE4TPBJIrMnMvMuUKSrSfL9nThuaAousiccfLTWs6JmIDqqKvpK"
		const stringrYcryF = "P2kuXv8WNnsinsYhZybfCDyG9vejYLWuFC8p1LVau0ridaWCzD1T1dmt1z6tGGjCya79bHNOZD"
		const uintmu7Hfka = BigInt("1871")
		const FinalW1bUKJi = await Final.new(stringQtgiWJE, stringrYcryF, uintmu7Hfka, {from: accounts[1]});
		const uintimKdONl = BigInt("628")
		const addressWNB3veU = accounts[3]
		const uintWDXIRRj = BigInt("1727")
		const addressBLCvjaw = accounts[0]
		const addressdMKCzfX = accounts[4]
		const uintHgz9nQA = BigInt("1965")
		const addressd5G8oQ1 = accounts[2]
		const boolZFbtbWu = await FinalW1bUKJi.decreaseAllowance.call(addressWNB3veU, uintimKdONl, {from: accounts[0]});
		const boolLkc5FuE = await FinalW1bUKJi.transferFrom.call(addressdMKCzfX, addressBLCvjaw, uintWDXIRRj, {from: "0x0000000000000000000000000000000000000001"});
		const boolvK010tn = await FinalW1bUKJi.transfer.call(addressd5G8oQ1, uintHgz9nQA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalW1bUKJi.decreaseAllowance.call(addressWNB3veU, uintimKdONl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringkC2EKyu = "ex5GXwaJAYV5xRl9GZjv9"
		const stringVHOlHbe = "arrnBCoqvWgUYNcjAfE7vvJAH3AE1lJrTsQRPNzGhMgHFcvIDRUo9P41pDTgLRQ8QSSeDfogutn"
		const uintf4GyoMw = BigInt("519")
		const Finalql6YG3E = await Final.new(stringkC2EKyu, stringVHOlHbe, uintf4GyoMw, {from: accounts[0]});
		const addressBsmruBv = accounts[2]
		const uintGtf3Uj9 = BigInt("1839")
		const addressGdTcJnU = accounts[3]
		const addressYHk7rx5 = accounts[5]
		const addresstJoD3xH = accounts[4]
		const addressGAJLxwy = "0x0000000000000000000000000000000000000001"
		const uintg2unHP3 = BigInt("479")
		const addressqSnLOJA = accounts[1]
		const boolkFr1RL2 = await Finalql6YG3E.transferownership.call(addressBsmruBv, {from: accounts[0]});
		const stringSqMXNiK = await Finalql6YG3E.name.call({from: accounts[5]});
		const boolfi4cQY = await Finalql6YG3E.transfer.call(addressGdTcJnU, uintGtf3Uj9, {from: accounts[0]});
		const uintWcsOPKu = await Finalql6YG3E.allowance.call(addresstJoD3xH, addressYHk7rx5, {from: accounts[3]});
		const uintBlRKf6 = await Finalql6YG3E.balanceOf.call(addressGAJLxwy, {from: accounts[3]});
		const boolqOc4Z6 = await Finalql6YG3E.transfer.call(addressqSnLOJA, uintg2unHP3, {from: accounts[3]});

		assert.equal(boolfi4cQY, true)
		assert.equal(boolkFr1RL2, true)
		assert.equal(stringSqMXNiK, "ex5GXwaJAYV5xRl9GZjv9")
		assert.equal(uintBlRKf6, BigInt("0"))
		assert.equal(uintWcsOPKu, BigInt("0"))
		await expect(Finalql6YG3E.transfer.call(addressqSnLOJA, uintg2unHP3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringVaWXHmO = "E9uFXkhnuv4fVy65vSHABNuRtDGq8QJacy1l"
		const stringg3yvAQG = "33FqsJLhR7i"
		const uintZDGtf0d = BigInt("2006")
		const FinalhvsOVQ2 = await Final.new(stringVaWXHmO, stringg3yvAQG, uintZDGtf0d, {from: "0x0000000000000000000000000000000000000001"});
		const uintZPfx4vR = BigInt("612")
		const addressNR2rLAH = accounts[1]
		const uintF81diU5 = BigInt("1314")
		const addressahcUCcw = accounts[5]
		const uintQlhVWj = BigInt("1168")
		const addressBRioKng = accounts[2]
		const boolRAKWacc = await FinalhvsOVQ2.decreaseAllowance.call(addressNR2rLAH, uintZPfx4vR, {from: accounts[2]});
		const uint8pTWN1uv = await FinalhvsOVQ2.decimals.call({from: accounts[1]});
		const boolnDOI85w = await FinalhvsOVQ2.decreaseAllowance.call(addressahcUCcw, uintF81diU5, {from: accounts[0]});
		const boolRswXJFP = await FinalhvsOVQ2.approveAndCall.call(addressBRioKng, uintQlhVWj, {from: accounts[2]});
	});

	it('test for Final', async () => {
		const stringhFwLN6C = "cPYbQSp7o"
		const string8US7Mm = "wpql7DPTJXQrdr8VgAvGV"
		const uintuU47hn7 = BigInt("112")
		const FinalQhUObY8 = await Final.new(stringhFwLN6C, string8US7Mm, uintuU47hn7, {from: accounts[5]});
		const uintuhZkXf6 = BigInt("1998")
		const addressFYuVL93 = accounts[1]
		const addressrUhpigG = accounts[3]
		const uintxqIwWe8 = BigInt("670")
		const addresseTHSMkz = "0x0000000000000000000000000000000000000001"
		const boolc0TxnYw = await FinalQhUObY8.approveAndCall.call(addressFYuVL93, uintuhZkXf6, {from: accounts[5]});
		const uintnK3mq1Y = await FinalQhUObY8.balanceOf.call(addressrUhpigG, {from: accounts[1]});
		const boole5HMw2y = await FinalQhUObY8.transfer.call(addresseTHSMkz, uintxqIwWe8, {from: accounts[3]});

		assert.equal(boolc0TxnYw, true)
		assert.equal(uintnK3mq1Y, BigInt("0"))
		await expect(FinalQhUObY8.transfer.call(addresseTHSMkz, uintxqIwWe8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})