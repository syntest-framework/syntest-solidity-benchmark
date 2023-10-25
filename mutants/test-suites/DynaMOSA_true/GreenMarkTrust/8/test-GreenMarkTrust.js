const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintSYnEdX5 = BigInt("233")
		const stringW21AZu = "BKDzwlnNR7ho6gqmxJPWBGHckWJbTe9gq4J31Rj7nOVgaxlIIg87pvN7z11C7VtDjb5DkAM4R6wW"
		const stringFaSwboB = "ngbM9atPqwAIOz8INQRGuH8w1Iie7AP0AeuK2gIYKWxSHFbXYSPe8TEDtTaQYicJgWBSBQatElfHY7twVEsWkiz1kR0DYbhk"
		const GreenMarkTrustpaTWJFK = await GreenMarkTrust.new(uintSYnEdX5, stringW21AZu, stringFaSwboB, {from: accounts[4]});
		const uintXDAj8aJ = BigInt("1368")
		const addresseHjiY2y = accounts[1]
		const uinthpgctpW = BigInt("1589")
		const addressEcti4d3 = accounts[3]
		const addressnNpb6Re = accounts[4]
		const byteYN2L3Ib = "0x0e19"
		const uintXlcHy5J = BigInt("148")
		const addressPGA2GXo = accounts[3]
		const uintBwcMfiO = BigInt("1312")
		const addressYlqlf3e = accounts[2]
		const boolQsq2m5w = await GreenMarkTrustpaTWJFK.approve.call(addresseHjiY2y, uintXDAj8aJ, {from: accounts[0]});
//		const boolhfh1geo = await GreenMarkTrustpaTWJFK.transferFrom.call(addressnNpb6Re, addressEcti4d3, uinthpgctpW, {from: accounts[0]});
//		const boolTMo4Y92 = await GreenMarkTrustpaTWJFK.approveAndCall.call(addressPGA2GXo, uintXlcHy5J, byteYN2L3Ib, {from: accounts[3]});
//		const booll3rXKne = await GreenMarkTrustpaTWJFK.transfer.call(addressYlqlf3e, uintBwcMfiO, {from: accounts[5]});

		assert.equal(boolQsq2m5w, true)
		await expect(GreenMarkTrustpaTWJFK.transferFrom.call(addressnNpb6Re, addressEcti4d3, uinthpgctpW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintzL0CZNN = BigInt("1618")
		const stringDOVtUJ = "GojYAt1YgPIPfXOUVUttja3yXRnMCldh"
		const stringYIc55Zn = "H3OYaZGjBkggkEChmpWFGoHbDWEI47LUP8FznRSeaJu4XpDaUGF2mm9kzov0Zh5T4RHmeeBNc7lSszNcHEZaEKoIbPcQUKkpGgM"
		const GreenMarkTrustI5YXwEw = await GreenMarkTrust.new(uintzL0CZNN, stringDOVtUJ, stringYIc55Zn, {from: accounts[0]});
		const byten9KZBDu = "0x11061a021d1e05070d0c1e20051c06020b19020d070e1a0e1414"
		const uint3BxvYW = BigInt("941")
		const addressJVT2Z5K = "0x0000000000000000000000000000000000000001"
		const byteMv9mwba = "0x181e0a020c"
		const uintiuAac5x = BigInt("1042")
		const addressvOkAvpr = accounts[1]
		const uintztV25R = BigInt("1934")
		const addressDLIln7D = accounts[0]
		const uintX3vTd0P = BigInt("1826")
		const addressPh2cYWv = accounts[1]
//		const boolTQ52tTn = await GreenMarkTrustI5YXwEw.approveAndCall.call(addressJVT2Z5K, uint3BxvYW, byten9KZBDu, {from: accounts[4]});
//		const boolD3FzXkW = await GreenMarkTrustI5YXwEw.approveAndCall.call(addressvOkAvpr, uintiuAac5x, byteMv9mwba, {from: accounts[4]});
//		const booljTYfP1t = await GreenMarkTrustI5YXwEw.approve.call(addressDLIln7D, uintztV25R, {from: accounts[0]});
//		const boolQYmw2A = await GreenMarkTrustI5YXwEw.approve.call(addressPh2cYWv, uintX3vTd0P, {from: accounts[1]});

		await expect(GreenMarkTrustI5YXwEw.approveAndCall.call(addressJVT2Z5K, uint3BxvYW, byten9KZBDu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintrqvi08 = BigInt("962")
		const stringa4Iirjb = "2o5hPmfARDaQKyJTPFel9tpqXh5EGlbtpw8NALys9NpJzyKPPDDmdCxI7cjHMV3Anx4iuagxwNdRHT9CxTrYo"
		const stringN3byI66 = "fbUAKLfRqMI3a"
		const GreenMarkTrust97MYHc = await GreenMarkTrust.new(uintrqvi08, stringa4Iirjb, stringN3byI66, {from: accounts[0]});
		const uintkgQ8Cho = BigInt("669")
		const addresshMwatTn = accounts[2]
		const uintgfLrl04 = BigInt("230")
//		const boolrVj5RiC = await GreenMarkTrust97MYHc.burnFrom.call(addresshMwatTn, uintkgQ8Cho, {from: accounts[0]});
//		const boolPtd8o51 = await GreenMarkTrust97MYHc.burn.call(uintgfLrl04, {from: accounts[3]});

		await expect(GreenMarkTrust97MYHc.burnFrom.call(addresshMwatTn, uintkgQ8Cho, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintANegdu2 = BigInt("1500")
		const stringjjvEsfq = "3IEst1Q7uOGVPdhy4oDjhwIUOUelonzT8Eh5wfNi7WjKtbSP"
		const stringon525b = "FIxGwTmI4H6ZuXYdR4shgIyCSBgGuwfQGdV1ZEphP2iJJregTOJtNmEtaE2mhWqC7cCo7RXqRAx6FtzMXxATHI"
		const GreenMarkTrustNkf4eFJ = await GreenMarkTrust.new(uintANegdu2, stringjjvEsfq, stringon525b, {from: "0x0000000000000000000000000000000000000001"});
		const uintHzi4UNv = BigInt("1995")
		const addressrjmA4wh = accounts[5]
		const uintXUdQl5j = BigInt("1206")
		const bytePInh1iP = "0x1f04161803092003041f091f0d0f1c10171b08110f0903030d02"
		const uintlqOgkj = BigInt("746")
		const addressgIGOHV4 = accounts[1]
		const uint9tzH6U = BigInt("784")
		const boolX6MM1N9 = await GreenMarkTrustNkf4eFJ.approve.call(addressrjmA4wh, uintHzi4UNv, {from: accounts[3]});
		const booleaYkZUD = await GreenMarkTrustNkf4eFJ.burn.call(uintXUdQl5j, {from: "0x0000000000000000000000000000000000000001"});
		const boolT94fHUm = await GreenMarkTrustNkf4eFJ.approveAndCall.call(addressgIGOHV4, uintlqOgkj, bytePInh1iP, {from: accounts[3]});
		const boolaKmGLD = await GreenMarkTrustNkf4eFJ.burn.call(uint9tzH6U, {from: accounts[0]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintVMuaVxk = BigInt("962")
		const stringa4Iirjb = "2o5hPmfARDaQKyJTPFel9tpqXh5EGlbtpw8NALys9NpJzyKPPDDmdCxI7cjHMV3Anx4iuagxwNdRHT9CxTrYo"
		const stringN3byI66 = "fbUAKLfRqMI3a"
		const GreenMarkTrust97MYHc = await GreenMarkTrust.new(uintVMuaVxk, stringa4Iirjb, stringN3byI66, {from: accounts[0]});
		const uintyLnc8M7 = BigInt("230")
//		const boolPtd8o51 = await GreenMarkTrust97MYHc.burn.call(uintyLnc8M7, {from: accounts[3]});

		await expect(GreenMarkTrust97MYHc.burn.call(uintyLnc8M7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDNfVPLs = BigInt("1075")
		const stringz6nLMWv = "Y5ZPENGbQPbrwkUAEb5JGpI4GKACjjhYi3jMqZbpqrEahhdwPvEtjLD3r8unqQitxk2RuUuKuwuNDOmPd6yq"
		const stringMX0vT55 = "xtgXy8Bzn1p3PNBYFySkisLtSpEhaX8SObGBWFIqEmPH"
		const GreenMarkTrustfYomddy = await GreenMarkTrust.new(uintDNfVPLs, stringz6nLMWv, stringMX0vT55, {from: accounts[3]});
		const uintOaumjm = BigInt("1764")
		const addressPpC5d1L = accounts[5]
		const uintA3d3qTA = BigInt("1576")
		const addressIsMagZx = accounts[2]
		const addressbzZuCe0 = accounts[0]
		const byteAxhSsFi = "0x08140e10041a1c1816170a160c11141c080d0a191a161e0d0b09030001"
		const uintZ8xSl5m = BigInt("200")
		const addresssArOh1Q = accounts[2]
		const uintrybaB3w = BigInt("69")
		const addressTJlgs20 = "0x0000000000000000000000000000000000000001"
		const addressu5EQYfH = "0x0000000000000000000000000000000000000001"
		const bytegcwbuUx = "0x091f0b0314"
		const uint8fPJkQ = BigInt("1513")
		const addressEZsWP6w = accounts[3]
//		const boolA1tLcY2 = await GreenMarkTrustfYomddy.transfer.call(addressPpC5d1L, uintOaumjm, {from: accounts[5]});
//		const boolSaayZfu = await GreenMarkTrustfYomddy.transferFrom.call(addressbzZuCe0, addressIsMagZx, uintA3d3qTA, {from: accounts[4]});
//		const boolvb3UnB = await GreenMarkTrustfYomddy.approveAndCall.call(addresssArOh1Q, uintZ8xSl5m, byteAxhSsFi, {from: accounts[3]});
//		const boolXZjVP56 = await GreenMarkTrustfYomddy.transferFrom.call(addressu5EQYfH, addressTJlgs20, uintrybaB3w, {from: "0x0000000000000000000000000000000000000001"});
//		const boolowfuqnT = await GreenMarkTrustfYomddy.approveAndCall.call(addressEZsWP6w, uint8fPJkQ, bytegcwbuUx, {from: accounts[1]});

		await expect(GreenMarkTrustfYomddy.transfer.call(addressPpC5d1L, uintOaumjm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintnv8pOBV = BigInt("441")
		const stringAkMtXxS = "7C9RKWXzke8PBoS6FWgT"
		const stringkYHrQVM = "jpxiGH4Gc2aKXHo"
		const GreenMarkTrustMYbhnre = await GreenMarkTrust.new(uintnv8pOBV, stringAkMtXxS, stringkYHrQVM, {from: accounts[4]});
		const uintWi1uv4F = BigInt("395")
		const address9DoMZx = "0x0000000000000000000000000000000000000001"
		const uintGUmBMxp = BigInt("1333")
		const boolfTH1aFc = await GreenMarkTrustMYbhnre.approve.call(address9DoMZx, uintWi1uv4F, {from: accounts[1]});
		const boolpFNQpUA = await GreenMarkTrustMYbhnre.burn.call(uintGUmBMxp, {from: accounts[4]});

		assert.equal(boolfTH1aFc, true)
		assert.equal(boolpFNQpUA, true)
	});

	it('test for GreenMarkTrust', async () => {
		const uintolEeuVJ = BigInt("185")
		const stringcIUEgEU = "0dFS4SdTivFVcDvnst4zPlT83G1gVekt3x0qoB"
		const stringj8wnCRG = "c1HT3ei1Ie0lilYAQ"
		const GreenMarkTrustbdOGcJf = await GreenMarkTrust.new(uintolEeuVJ, stringcIUEgEU, stringj8wnCRG, {from: accounts[3]});
		const uintX0AinOn = BigInt("667")
		const addressLTbwGJM = accounts[3]
		const bytesoIJjJ0 = "0x12130f0810131a100d0b0e170511011f1b0408100b050a131e19"
		const uintGAVxyhx = BigInt("194")
		const addressHf2IpfW = accounts[4]
		const uinta0irmzn = BigInt("1822")
		const addresseFAsCJ = accounts[5]
		const addressbn6q3Z3 = accounts[1]
		const uint9XLoZT = BigInt("1179")
		const addressakPJDL = accounts[2]
		const uintgffvfkl = BigInt("1192")
		const addressj5FjEmT = accounts[1]
//		const boolZ6yTkTp = await GreenMarkTrustbdOGcJf.burnFrom.call(addressLTbwGJM, uintX0AinOn, {from: accounts[0]});
//		const booleZm8Qnh = await GreenMarkTrustbdOGcJf.approveAndCall.call(addressHf2IpfW, uintGAVxyhx, bytesoIJjJ0, {from: accounts[0]});
//		const boolbXkUo77 = await GreenMarkTrustbdOGcJf.transferFrom.call(addressbn6q3Z3, addresseFAsCJ, uinta0irmzn, {from: accounts[2]});
//		const boolfWAsmA2 = await GreenMarkTrustbdOGcJf.burnFrom.call(addressakPJDL, uint9XLoZT, {from: accounts[3]});
//		const boolmyqvXft = await GreenMarkTrustbdOGcJf.approve.call(addressj5FjEmT, uintgffvfkl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustbdOGcJf.burnFrom.call(addressLTbwGJM, uintX0AinOn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintG32i0Fu = BigInt("233")
		const stringW21AZu = "BKDzwlnNR7ho6gqmxJPWBGHckWJbTe9gq4J31Rj7nOVgaxlIIg87pvN7z11C7VtDjb5DkAM4R6wW"
		const stringFaSwboB = "ngbM9atPqwAIOz8INQRGuH8w1Iie7AP0AeuK2gIYKWxSHFbXYSPe8TEDtTaQYicJgWBSBQatElfHY7twVEsWkiz1kR0DYbhk"
		const GreenMarkTrustpaTWJFK = await GreenMarkTrust.new(uintG32i0Fu, stringW21AZu, stringFaSwboB, {from: accounts[4]});
		const uintYIdxExu = BigInt("0")
		const addressJqUHKhJ = "0x0000000000000000000000000000000000000001"
		const boolINbGWw6 = await GreenMarkTrustpaTWJFK.transfer.call(addressJqUHKhJ, uintYIdxExu, {from: accounts[5]});

		assert.equal(boolINbGWw6, true)
	});
})