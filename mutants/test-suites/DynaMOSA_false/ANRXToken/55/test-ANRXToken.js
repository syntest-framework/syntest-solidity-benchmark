const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintBeJSqm = BigInt("1940")
		const stringlxIfnT = "hWwwQNghumbwJHIENvk3EUBkkM3M5Tr1WctXfUe2G25iRMVBnk207"
		const stringNxfLtMU = "8hmRjkPb"
		const uintDFnerAb = BigInt("1373")
		const ANRXTokencZuSFte = await ANRXToken.new(uintBeJSqm, stringlxIfnT, stringNxfLtMU, uintDFnerAb, {from: accounts[5]});
		const uintKR4YelP = BigInt("6")
		const uintJS9SfR = BigInt("1286")
		const addressKkLeVAg = accounts[3]
		const addressWedvrZ2 = accounts[3]
//		const uintT57NcHD = await ANRXTokencZuSFte.redeem.call(uintKR4YelP, {from: accounts[1]});
//		const boolJC7J9HO = await ANRXTokencZuSFte.approve.call(addressKkLeVAg, uintJS9SfR, {from: accounts[0]});
//		const addressEBd2IAa = await ANRXTokencZuSFte.deprecate.call(addressWedvrZ2, {from: accounts[4]});

		await expect(ANRXTokencZuSFte.redeem.call(uintKR4YelP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintVeODlUm = BigInt("402")
		const stringlSppBX = "1k0fQr"
		const stringvl4y9Wq = "QlAH5zGN4pYFR2SVescsOO6z0N8onmLoIsJyu9yZi7SQlYNfEzumuBXbSCuH7ykti9ve40eG"
		const uintsz0qAG = BigInt("1403")
		const ANRXTokenwgEM0zE = await ANRXToken.new(uintVeODlUm, stringlSppBX, stringvl4y9Wq, uintsz0qAG, {from: accounts[5]});
		const uintMpf1Yd3 = BigInt("437")
		const addressTx1IJe2 = accounts[5]
		const addresseP1tm8p = accounts[2]
		const uintgaFVvs8 = BigInt("1099")
		const addressK8P9jWw = accounts[4]
		const addresso9r4Eyf = accounts[2]
		const addressBAEgpRh = accounts[3]
		const boolLLoYyWv = await ANRXTokenwgEM0zE.approve.call(addressTx1IJe2, uintMpf1Yd3, {from: accounts[5]});
		const uintsBLe3nH = await ANRXTokenwgEM0zE.totalSupply.call({from: accounts[4]});
//		const addressIsrppQ4 = await ANRXTokenwgEM0zE.deprecate.call(addresseP1tm8p, {from: accounts[1]});
//		const boolOpVpbfI = await ANRXTokenwgEM0zE.transferFrom.call(addresso9r4Eyf, addressK8P9jWw, uintgaFVvs8, {from: accounts[3]});
//		const addressSBlepoQ = await ANRXTokenwgEM0zE.deprecate.call(addressBAEgpRh, {from: accounts[1]});

		assert.equal(boolLLoYyWv, true)
		assert.equal(uintsBLe3nH, BigInt("402"))
		await expect(ANRXTokenwgEM0zE.deprecate.call(addresseP1tm8p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintaWhAkng = BigInt("1148")
		const stringxZAXvqr = "JeEJPA7zfiazNkWh7RE5okGhylOa1Bwx0aYbilFekf2iXHkiJW"
		const stringczfyTzP = "okBFvao3daYZTfR9tnu3KqZUH6djwkqT46YgMOHIxgwsmBhNC53WhMAGSgU"
		const uintot2rdZe = BigInt("1922")
		const ANRXTokenYnpQWQd = await ANRXToken.new(uintaWhAkng, stringxZAXvqr, stringczfyTzP, uintot2rdZe, {from: accounts[1]});
		const addresssCAwKsu = "0x0000000000000000000000000000000000000001"
		const addressUl5dQUG = accounts[1]
		const addressYG03USj = accounts[2]
		const uintTCE5V1 = await ANRXTokenYnpQWQd.allowance.call(addressUl5dQUG, addresssCAwKsu, {from: "0x0000000000000000000000000000000000000001"});
		const uintXKj5Y80 = await ANRXTokenYnpQWQd.balanceOf.call(addressYG03USj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintTCE5V1, BigInt("0"))
		assert.equal(uintXKj5Y80, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintfqVgLOI = BigInt("957")
		const stringRIRuKG6 = "xlBgi9z9Gq23vnXKDNACXf"
		const stringbr8ob5 = "8Jlbv6u9wN6BnvTne61wGX2hOvYWwxJ40paQmEX1og7Y3DB1NqC5cICNSl4LzcR"
		const uintyipFVZs = BigInt("1773")
		const ANRXTokenSExlRi2 = await ANRXToken.new(uintfqVgLOI, stringRIRuKG6, stringbr8ob5, uintyipFVZs, {from: accounts[0]});
		const addressT0G8Feu = accounts[0]
		const addressf6qc3C6 = accounts[2]
		const uintz0K8lsf = BigInt("1511")
		const addressVOhTh9 = accounts[5]
		const addressNQSi7QU = accounts[4]
		const uintDrDwaS = await ANRXTokenSExlRi2.allowance.call(addressf6qc3C6, addressT0G8Feu, {from: accounts[1]});
//		const boolNWy2Kkq = await ANRXTokenSExlRi2.transferFrom.call(addressNQSi7QU, addressVOhTh9, uintz0K8lsf, {from: accounts[1]});

		assert.equal(uintDrDwaS, BigInt("0"))
		await expect(ANRXTokenSExlRi2.transferFrom.call(addressNQSi7QU, addressVOhTh9, uintz0K8lsf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uints9TNOFJ = BigInt("1802")
		const stringportwxO = "OJvpYOn"
		const stringWwopLuZ = "FtUvL0tAV0BAQfg1ctthE3K8uggtICON6g4wDUeKP0fTowIjeb3QJchfKJuOj1uv58VRqdsrTXyb6u2O9aEoWcICGWinprcHc"
		const uintg7yjO4R = BigInt("1175")
		const ANRXTokenMFZgELX = await ANRXToken.new(uints9TNOFJ, stringportwxO, stringWwopLuZ, uintg7yjO4R, {from: accounts[0]});
		const addressqfV5xWp = accounts[1]
		const uintuKLyfu1 = BigInt("1046")
		const addressoZ6ZG0k = "0x0000000000000000000000000000000000000001"
		const uintREckmXc = BigInt("637")
		const addressCgCinit = accounts[0]
		const addressOtlYXrI = accounts[0]
		const uintl2f33t5 = BigInt("6")
		const uintncgwcPz = BigInt("1782")
		const addressCDjVBQV = await ANRXTokenMFZgELX.deprecate.call(addressqfV5xWp, {from: accounts[0]});
		const boolGgQchcl = await ANRXTokenMFZgELX.approve.call(addressoZ6ZG0k, uintuKLyfu1, {from: accounts[2]});
//		const boolYmFhaAF = await ANRXTokenMFZgELX.transfer.call(addressCgCinit, uintREckmXc, {from: accounts[4]});
//		const addressZH6Eio2 = await ANRXTokenMFZgELX.deprecate.call(addressOtlYXrI, {from: accounts[0]});
//		const uintxGB1s9M = await ANRXTokenMFZgELX.redeem.call(uintl2f33t5, {from: accounts[0]});
//		const uintIBgxghG = await ANRXTokenMFZgELX.issue.call(uintncgwcPz, {from: accounts[2]});

		assert.equal(boolGgQchcl, true)
		await expect(ANRXTokenMFZgELX.transfer.call(addressCgCinit, uintREckmXc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintCCJXxYk = BigInt("1827")
		const stringGr8oLMN = "xY369hF35YBUTpojf936I2uRchcJmmzvGBWTongM4uEKFRQnq3vaGeQ4dCE"
		const stringC1hzf8G = "A7yjQGdFPaeSYptyrK40BaZvEwux1Sm"
		const uintGDw5EZm = BigInt("365")
		const ANRXTokenfiAO2Qy = await ANRXToken.new(uintCCJXxYk, stringGr8oLMN, stringC1hzf8G, uintGDw5EZm, {from: "0x0000000000000000000000000000000000000001"});
		const uintXRhxoU = BigInt("881")
		const addresssFL15Un = accounts[4]
		const addressnE3YD6S = accounts[2]
		const addressAxdELt3 = accounts[4]
		const uintMXwicqo = BigInt("357")
		const uintcCDLPs5 = BigInt("1557")
		const addressq3r4Up7 = accounts[3]
		const boolrbIkgec = await ANRXTokenfiAO2Qy.transfer.call(addresssFL15Un, uintXRhxoU, {from: "0x0000000000000000000000000000000000000001"});
		const uintuTZaHLL = await ANRXTokenfiAO2Qy.allowance.call(addressAxdELt3, addressnE3YD6S, {from: accounts[3]});
		const uintyJjb1RP = await ANRXTokenfiAO2Qy.redeem.call(uintMXwicqo, {from: accounts[2]});
		const boolO49rAbC = await ANRXTokenfiAO2Qy.transfer.call(addressq3r4Up7, uintcCDLPs5, {from: accounts[5]});
	});

	it('test for ANRXToken', async () => {
		const uinthtUzpiC = BigInt("402")
		const stringlSppBX = "1k0fQr"
		const stringvl4y9Wq = "QlAH5zGN4pYFR2SVescsOO6z0N8onmLoIsJyu9yZi7SQlYNfEzumuBXbSCuH7ykti9ve40eG"
		const uintB4Dnawh = BigInt("1403")
		const ANRXTokenwgEM0zE = await ANRXToken.new(uinthtUzpiC, stringlSppBX, stringvl4y9Wq, uintB4Dnawh, {from: accounts[5]});
		const uintYZ7T86N = BigInt("437")
		const addresslBlhpby = accounts[5]
		const uintlPX7DXh = BigInt("730")
		const addressIvbzVJU = accounts[3]
		const boolLLoYyWv = await ANRXTokenwgEM0zE.approve.call(addresslBlhpby, uintYZ7T86N, {from: accounts[5]});
//		const uintizYxmwj = await ANRXTokenwgEM0zE.redeem.call(uintlPX7DXh, {from: accounts[5]});
//		const uintsBLe3nH = await ANRXTokenwgEM0zE.totalSupply.call({from: accounts[4]});
//		const addressSBlepoQ = await ANRXTokenwgEM0zE.deprecate.call(addressIvbzVJU, {from: accounts[1]});

		assert.equal(boolLLoYyWv, true)
		await expect(ANRXTokenwgEM0zE.redeem.call(uintlPX7DXh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintrYuw7Mo = BigInt("1148")
		const stringxZAXvqr = "JeEJPA7zfiazNkWh7RE5okGhylOa1Bwx0aYbilFekf2iXHkiJW"
		const stringczfyTzP = "okBFvao3daYZTfR9tnu3KqZUH6djwkqT46YgMOHIxgwsmBhNC53WhMAGSgU"
		const uintPkccK8Y = BigInt("1922")
		const ANRXTokenYnpQWQd = await ANRXToken.new(uintrYuw7Mo, stringxZAXvqr, stringczfyTzP, uintPkccK8Y, {from: accounts[1]});
		const uintobESELO = BigInt("1065")
		const uint7UORmG = BigInt("421")
		const uintzGqnnCX = BigInt("1520")
		const addressE3OU1pr = accounts[5]
		const addressAsSSSOa = accounts[2]
		const addressBxPK8dM = "0x0000000000000000000000000000000000000000"
		const addressLUguD7e = accounts[2]
//		const uintbjNYzxY = await ANRXTokenYnpQWQd.setParams.call(uint7UORmG, uintobESELO, {from: accounts[1]});
//		const boolYjRpsFB = await ANRXTokenYnpQWQd.transferFrom.call(addressAsSSSOa, addressE3OU1pr, uintzGqnnCX, {from: accounts[4]});
//		const uintTCE5V1 = await ANRXTokenYnpQWQd.allowance.call(addressLUguD7e, addressBxPK8dM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXTokenYnpQWQd.setParams.call(uint7UORmG, uintobESELO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintsNFW1yp = BigInt("1148")
		const stringxZAXvqr = "JeEJPA7zfiazNkWh7RE5okGhylOa1Bwx0aYbilFekf2iXHkiJW"
		const stringczfyTzP = "okBFvao3daYZTfR9tnu3KqZUH6djwkqT46YgMOHIxgwsmBhNC53WhMAGSgU"
		const uintmfIdqJj = BigInt("1922")
		const ANRXTokenYnpQWQd = await ANRXToken.new(uintsNFW1yp, stringxZAXvqr, stringczfyTzP, uintmfIdqJj, {from: accounts[1]});
		const addressYMlwedj = "0x0000000000000000000000000000000000000001"
		const addressNFAvCaH = accounts[3]
		const uintqFYnAeq = BigInt("187")
		const uintTCE5V1 = await ANRXTokenYnpQWQd.allowance.call(addressNFAvCaH, addressYMlwedj, {from: "0x0000000000000000000000000000000000000001"});
		const uintk33TXc0 = await ANRXTokenYnpQWQd.issue.call(uintqFYnAeq, {from: accounts[1]});

		assert.equal(uintTCE5V1, BigInt("0"))
	});
})