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
		const boolhfh1geo = await GreenMarkTrustpaTWJFK.transferFrom.call(addressnNpb6Re, addressEcti4d3, uinthpgctpW, {from: accounts[0]});
		const boolTMo4Y92 = await GreenMarkTrustpaTWJFK.approveAndCall.call(addressPGA2GXo, uintXlcHy5J, byteYN2L3Ib, {from: accounts[3]});
		const booll3rXKne = await GreenMarkTrustpaTWJFK.transfer.call(addressYlqlf3e, uintBwcMfiO, {from: accounts[5]});

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
		const boolTQ52tTn = await GreenMarkTrustI5YXwEw.approveAndCall.call(addressJVT2Z5K, uint3BxvYW, byten9KZBDu, {from: accounts[4]});
		const boolD3FzXkW = await GreenMarkTrustI5YXwEw.approveAndCall.call(addressvOkAvpr, uintiuAac5x, byteMv9mwba, {from: accounts[4]});
		const booljTYfP1t = await GreenMarkTrustI5YXwEw.approve.call(addressDLIln7D, uintztV25R, {from: accounts[0]});
		const boolQYmw2A = await GreenMarkTrustI5YXwEw.approve.call(addressPh2cYWv, uintX3vTd0P, {from: accounts[1]});

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
		const boolrVj5RiC = await GreenMarkTrust97MYHc.burnFrom.call(addresshMwatTn, uintkgQ8Cho, {from: accounts[0]});
		const boolPtd8o51 = await GreenMarkTrust97MYHc.burn.call(uintgfLrl04, {from: accounts[3]});

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
		const uinteoryCbZ = BigInt("382")
		const stringAuvkbQk = "4Lda1fMF6KFFnIL7d4P6KNqNrGWZ2aBQtxBzxf77YB3Wdrn9xYSnlauBvLvQ"
		const stringffRRJ3R = "tHxR3J8xIklFoScBd7PT8FUd6nPkvh1yyaP9GMBBvQiWWfjHGIkOgTsj"
		const GreenMarkTrustcv4dWS = await GreenMarkTrust.new(uinteoryCbZ, stringAuvkbQk, stringffRRJ3R, {from: accounts[3]});
		const uintsEenXaL = BigInt("385")
		const uintXyuAVww = BigInt("169")
		const addresslqeMs3N = accounts[0]
		const addressATxiVrs = accounts[1]
		const uint69YcpG = BigInt("1697")
		const addressiipNWc0 = accounts[1]
		const bytew8hvCTb = "0x0a1b122000131003101b18141d1c1b1e"
		const uintmIG6sUP = BigInt("1381")
		const addressM6UB7rp = accounts[1]
		const boolyodRQI = await GreenMarkTrustcv4dWS.burn.call(uintsEenXaL, {from: accounts[1]});
		const boolhCySy56 = await GreenMarkTrustcv4dWS.transferFrom.call(addressATxiVrs, addresslqeMs3N, uintXyuAVww, {from: accounts[3]});
		const boolB5uM57 = await GreenMarkTrustcv4dWS.approve.call(addressiipNWc0, uint69YcpG, {from: accounts[1]});
		const booltDqA7x2 = await GreenMarkTrustcv4dWS.approveAndCall.call(addressM6UB7rp, uintmIG6sUP, bytew8hvCTb, {from: accounts[1]});

		await expect(GreenMarkTrustcv4dWS.burn.call(uintsEenXaL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintpeGoO7D = BigInt("129")
		const stringRKa9ksQ = "C1Xr1sJ7jdvQNKKySjPjtjwvruGMS62ugZsNN5kDrjdNJ3ovi7AtzQjvmWJ4H7ePDtHWdSwMn0NoIKTnLKAx2IcK"
		const stringMsUVIKR = "1ipnuxpn0Xk2Pm9a1PTc2PpnzgfhFKAoPX4RAEEEa88OSioZEL8rC9cRRMQkYsCcQ4qv"
		const GreenMarkTrustAd53LsU = await GreenMarkTrust.new(uintpeGoO7D, stringRKa9ksQ, stringMsUVIKR, {from: accounts[4]});
		const uintBfUgcI = BigInt("426")
		const addressJmHdZHC = accounts[1]
		const uintdVbQF38 = BigInt("1114")
		const addressSiEMUSV = accounts[1]
		const boolMgN2bI7 = await GreenMarkTrustAd53LsU.approve.call(addressJmHdZHC, uintBfUgcI, {from: accounts[0]});
		const boolqhvyZS = await GreenMarkTrustAd53LsU.transfer.call(addressSiEMUSV, uintdVbQF38, {from: accounts[3]});

		assert.equal(boolMgN2bI7, true)
		await expect(GreenMarkTrustAd53LsU.transfer.call(addressSiEMUSV, uintdVbQF38, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})