const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintONpCKj2 = BigInt("1059")
		const stringQDucfPb = "UxfIpBQAOSvPL8"
		const stringlBZnrFA = "jn2LlKpRei2f8AW"
		const GFCGoBO1r = await GFC.new(uintONpCKj2, stringQDucfPb, stringlBZnrFA, {from: accounts[2]});
		const uintsXDXlar = BigInt("1217")
		const addressDklAhGS = accounts[1]
		const addressFF6MS5s = accounts[1]
		const uintgQQImvi = BigInt("1338")
		const addressznDzpXX = accounts[4]
		const uintc6oxq5w = BigInt("615")
		const addressqsplGyu = accounts[4]
		const addressrLRlHUo = accounts[1]
		const uintQS1L6vi = BigInt("1833")
		const addressETujofK = accounts[1]
//		const boolodgPhJL = await GFCGoBO1r.transferFrom.call(addressFF6MS5s, addressDklAhGS, uintsXDXlar, {from: accounts[1]});
//		const booldhxtOmg = await GFCGoBO1r.transfer.call(addressznDzpXX, uintgQQImvi, {from: accounts[1]});
//		const boolYUs3Dp = await GFCGoBO1r.transferFrom.call(addressrLRlHUo, addressqsplGyu, uintc6oxq5w, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLhd7WTt = await GFCGoBO1r.approve.call(addressETujofK, uintQS1L6vi, {from: accounts[2]});

		await expect(GFCGoBO1r.transferFrom.call(addressFF6MS5s, addressDklAhGS, uintsXDXlar, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintDg4pMck = BigInt("837")
		const stringw7H4jHO = "tW"
		const stringIsuYlwh = "5tKwXrXfeFp"
		const GFCj0iZOiM = await GFC.new(uintDg4pMck, stringw7H4jHO, stringIsuYlwh, {from: accounts[3]});
		const uintL1M2c0A = BigInt("352")
		const addressA7ipvy = accounts[2]
		const uintD9cS6T = BigInt("1460")
		const addresslRPsrIk = accounts[1]
		const uintAdIqs6r = BigInt("420")
		const uintaw9otk = BigInt("1123")
		const addressUIzh87x = accounts[5]
		const addressFi7VUGz = accounts[0]
		const uintfq8tx17 = BigInt("888")
		const booln50DqZK = await GFCj0iZOiM.approve.call(addressA7ipvy, uintL1M2c0A, {from: accounts[0]});
		const boolaFtQ7SH = await GFCj0iZOiM.approve.call(addresslRPsrIk, uintD9cS6T, {from: accounts[4]});
//		const boolO8XHIG9 = await GFCj0iZOiM.burn.call(uintAdIqs6r, {from: accounts[0]});
//		const boolxIjns3a = await GFCj0iZOiM.transferFrom.call(addressFi7VUGz, addressUIzh87x, uintaw9otk, {from: accounts[1]});
//		const boolx5fcdMf = await GFCj0iZOiM.burn.call(uintfq8tx17, {from: accounts[4]});

		assert.equal(boolaFtQ7SH, true)
		assert.equal(booln50DqZK, true)
		await expect(GFCj0iZOiM.burn.call(uintAdIqs6r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintptHjO1w = BigInt("1743")
		const stringm8yTsbi = "lhnjsIM6tinNMVF"
		const stringZ4Pznq0 = "SwHYt4aQVaJI6Fx3SHsG"
		const GFCXvR7dGB = await GFC.new(uintptHjO1w, stringm8yTsbi, stringZ4Pznq0, {from: accounts[0]});
		const bytekBHIK0 = "0x0c0f0c021d0e07151b050417"
		const uintSUoNwIp = BigInt("987")
		const addressEf0cv7b = accounts[2]
		const byteECWpDSJ = "0x0308140f02191e0c00100c"
		const uintykhHxmO = BigInt("746")
		const addresswmhugyw = accounts[4]
		const uintMYz8vBG = BigInt("1928")
		const addressLKtd9q = accounts[3]
		const bytevQKrL9i = "0x1e160a1a00020e161713051d180f0e120b010b0e08001d16121e0a0f1d19"
		const uintHlMpWy = BigInt("795")
		const addressQbmaVb = accounts[3]
		const uintrK2DZy = BigInt("1714")
		const addressu2wwSvp = accounts[3]
		const uintfkd5POu = BigInt("751")
		const addressGNQ6L4n = accounts[1]
//		const boolJCFqJ4E = await GFCXvR7dGB.approveAndCall.call(addressEf0cv7b, uintSUoNwIp, bytekBHIK0, {from: accounts[4]});
//		const boolGNoPVD6 = await GFCXvR7dGB.approveAndCall.call(addresswmhugyw, uintykhHxmO, byteECWpDSJ, {from: accounts[4]});
//		const boolQf9xyta = await GFCXvR7dGB.approve.call(addressLKtd9q, uintMYz8vBG, {from: accounts[4]});
//		const boolR9FWAyn = await GFCXvR7dGB.approveAndCall.call(addressQbmaVb, uintHlMpWy, bytevQKrL9i, {from: accounts[2]});
//		const boolmIvrCo = await GFCXvR7dGB.burnFrom.call(addressu2wwSvp, uintrK2DZy, {from: accounts[4]});
//		const bool8WN1Ni = await GFCXvR7dGB.burnFrom.call(addressGNQ6L4n, uintfkd5POu, {from: accounts[3]});

		await expect(GFCXvR7dGB.approveAndCall.call(addressEf0cv7b, uintSUoNwIp, bytekBHIK0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintlh4SM7B = BigInt("408")
		const stringxF4xfCY = "8oOAeidpaBtAE05uUslHfFqYgh4GYMLbeRBxDG1V1ksNCF3hKrxFhfRJunje5z4dH6KR"
		const stringtsNwxle = "47ROqsdujLV2ZBGaViwBlqSPbOkbHmYWyKDRmflrgmzKsXbxe2Hw"
		const GFCwOv862Y = await GFC.new(uintlh4SM7B, stringxF4xfCY, stringtsNwxle, {from: "0x0000000000000000000000000000000000000001"});
		const uint7SV3ZI = BigInt("746")
		const addressYcj5N5j = accounts[2]
		const addressEuxDdK = "0x0000000000000000000000000000000000000001"
		const uintdRmhh91 = BigInt("146")
		const addressD8AZ6B8 = accounts[0]
		const uintZcj3WcC = BigInt("143")
		const addressf0Ipkib = accounts[3]
		const uintcLk84XC = BigInt("2027")
		const addressQDeCWIs = "0x0000000000000000000000000000000000000001"
		const uintCON7slR = BigInt("1009")
		const addresso3NcUjb = accounts[4]
		const boolMSBtbyQ = await GFCwOv862Y.transferFrom.call(addressEuxDdK, addressYcj5N5j, uint7SV3ZI, {from: accounts[1]});
		const boolRPk6smC = await GFCwOv862Y.transfer.call(addressD8AZ6B8, uintdRmhh91, {from: accounts[4]});
		const boolSeLZaZz = await GFCwOv862Y.approve.call(addressf0Ipkib, uintZcj3WcC, {from: accounts[5]});
		const boolPMp3l0D = await GFCwOv862Y.approve.call(addressQDeCWIs, uintcLk84XC, {from: accounts[0]});
		const boolWyGHgp9 = await GFCwOv862Y.burnFrom.call(addresso3NcUjb, uintCON7slR, {from: accounts[5]});
	});

	it('test for GFC', async () => {
		const uintsdb182 = BigInt("1535")
		const stringaeRpspF = "A94fDPMkdmyZw3dlvr74NerM2kGjYCin29TIhQIydiT34xm"
		const stringmadjce7 = "FZ5fJsE7iUVigS73JhAgJFLQaNjbK5WLXAd3xPwi6077MHUnfeAg"
		const GFClLPypqX = await GFC.new(uintsdb182, stringaeRpspF, stringmadjce7, {from: accounts[4]});
		const uintwMvli4c = BigInt("267")
		const addressLsaUwwe = accounts[2]
		const uintHZSjiKq = BigInt("1164")
//		const boolwjVmXM = await GFClLPypqX.burnFrom.call(addressLsaUwwe, uintwMvli4c, {from: accounts[1]});
//		const booljUZNjAr = await GFClLPypqX.burn.call(uintHZSjiKq, {from: accounts[0]});

		await expect(GFClLPypqX.burnFrom.call(addressLsaUwwe, uintwMvli4c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintydclZ8I = BigInt("1382")
		const stringhjZk6gF = "FKvuB1ej4pp62aBWk3O3HBc0qLtoRX6Dw37Joox2z8G6xOPcIXyPmcspNWLwTmrBW0NjRfuaeLAXlNvGzvNb5SEjmP45cdHR"
		const stringPktWHEY = "XzItPsEBFVX5KTOEK0dRtnaLREWPp6AAFYgMQLGKHccc1Ddu4RvN3OQduobCzJcx28Y5zwjfOYyF90YIDwdQCjSWtY1h"
		const GFCnQJKDtU = await GFC.new(uintydclZ8I, stringhjZk6gF, stringPktWHEY, {from: accounts[2]});
		const uintI4U10sa = BigInt("1821")
		const addressbNDPEnO = accounts[2]
		const uintfUJYvFy = BigInt("276")
		const addressvLb18qq = accounts[5]
		const boolVlaOyVn = await GFCnQJKDtU.approve.call(addressbNDPEnO, uintI4U10sa, {from: accounts[3]});
//		const booluFFnyGj = await GFCnQJKDtU.transfer.call(addressvLb18qq, uintfUJYvFy, {from: accounts[0]});

		assert.equal(boolVlaOyVn, true)
		await expect(GFCnQJKDtU.transfer.call(addressvLb18qq, uintfUJYvFy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintzCXzRU2 = BigInt("837")
		const stringw7H4jHO = "tW"
		const stringIsuYlwh = "5tKwXrXfeFp"
		const GFCj0iZOiM = await GFC.new(uintzCXzRU2, stringw7H4jHO, stringIsuYlwh, {from: accounts[3]});
		const uintPXqRfAY = BigInt("352")
		const addressHkzTgff = accounts[2]
		const uintygpdQFf = BigInt("1460")
		const address7j2Y7T = accounts[1]
		const uintNjRwkW = BigInt("168")
		const uintL1f13wb = BigInt("1123")
		const addressYHQWpDt = accounts[5]
		const addressklNv8rb = accounts[1]
		const uintsLPmCiv = BigInt("633")
		const uintIrUV6hK = BigInt("888")
		const booln50DqZK = await GFCj0iZOiM.approve.call(addressHkzTgff, uintPXqRfAY, {from: accounts[0]});
		const boolaFtQ7SH = await GFCj0iZOiM.approve.call(address7j2Y7T, uintygpdQFf, {from: accounts[4]});
		const boolE6t41rG = await GFCj0iZOiM.burn.call(uintNjRwkW, {from: accounts[3]});
//		const boolxIjns3a = await GFCj0iZOiM.transferFrom.call(addressklNv8rb, addressYHQWpDt, uintL1f13wb, {from: accounts[1]});
//		const booljqxi0fE = await GFCj0iZOiM.burn.call(uintsLPmCiv, {from: accounts[2]});
//		const boolx5fcdMf = await GFCj0iZOiM.burn.call(uintIrUV6hK, {from: accounts[4]});

		assert.equal(boolE6t41rG, true)
		assert.equal(boolaFtQ7SH, true)
		assert.equal(booln50DqZK, true)
		await expect(GFCj0iZOiM.transferFrom.call(addressklNv8rb, addressYHQWpDt, uintL1f13wb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintJ7YNPU = BigInt("1754")
		const stringF2NhIX0 = "olOgLFlJgaSIxXj8z1WzKuEmcXxhRrbAo9mH5ERkUrxUx6C5QqC8qqCCGaFCr3cGVWh8oQqFmRkCIxUFQ7PjIF"
		const stringtGZGBAM = "O8iUVuPbpagwSfX8pE3RcWhYxhUMl3P6IWw1acQLImHBmbXF1OhD6mW6Ndbj2u6hBFfVwTH2CCINuQy8gfjWfID9yhi"
		const GFChAWkuwZ = await GFC.new(uintJ7YNPU, stringF2NhIX0, stringtGZGBAM, {from: accounts[2]});
		const uintFvxVz7Y = BigInt("591")
		const addressiB29fqJ = accounts[5]
		const uintAlwX6kr = BigInt("1654")
		const addressUk87apj = accounts[4]
		const boolohv0YI = await GFChAWkuwZ.approve.call(addressiB29fqJ, uintFvxVz7Y, {from: accounts[4]});
		const boolf3moSBb = await GFChAWkuwZ.transfer.call(addressUk87apj, uintAlwX6kr, {from: accounts[2]});

		assert.equal(boolf3moSBb, true)
		assert.equal(boolohv0YI, true)
	});

	it('test for GFC', async () => {
		const uintSIrtnm = BigInt("1535")
		const stringaeRpspF = "A94fDPMkdmyZw3dlvr74NerM2kGjYCin29TIhQIydiT34xm"
		const stringmadjce7 = "FZ5fJsE7iUVigS73JhAgJFLQaNjbK5WLXAd3xPwi6077MHUnfeAg"
		const GFClLPypqX = await GFC.new(uintSIrtnm, stringaeRpspF, stringmadjce7, {from: accounts[4]});
		const uintVWDkiZM = BigInt("1808")
		const addressh27RY8x = accounts[4]
		const uintMN18TCO = BigInt("267")
		const addressy1XVWSq = accounts[2]
//		const boolL7g4r0h = await GFClLPypqX.burnFrom.call(addressh27RY8x, uintVWDkiZM, {from: accounts[4]});
//		const boolwjVmXM = await GFClLPypqX.burnFrom.call(addressy1XVWSq, uintMN18TCO, {from: accounts[1]});

		await expect(GFClLPypqX.burnFrom.call(addressh27RY8x, uintVWDkiZM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})