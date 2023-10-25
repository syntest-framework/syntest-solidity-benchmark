const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintC7zqg8O = BigInt("836")
		const stringSotYqO8 = "fpgfBxsiSxaZK5virMs7cbPBgWCYk1pXoldK2NTfAlOldoyef1RbKkrriwR"
		const stringF2ZfWLd = "8VninlC27daioNym"
		const GreenMarkTrustoqpkitq = await GreenMarkTrust.new(uintC7zqg8O, stringSotYqO8, stringF2ZfWLd, {from: accounts[2]});
		const uintP6xdhdT = BigInt("1232")
		const addressflnhDGy = accounts[5]
		const uintQQkvoYa = BigInt("1388")
		const addressLExoxsD = accounts[2]
		const uintHz1FfaL = BigInt("834")
		const addressFMSU0JZ = accounts[3]
		const boolxqhhK5h = await GreenMarkTrustoqpkitq.transfer.call(addressflnhDGy, uintP6xdhdT, {from: accounts[4]});
		const boolQp7UyEq = await GreenMarkTrustoqpkitq.transfer.call(addressLExoxsD, uintQQkvoYa, {from: accounts[2]});
		const boolXoJSsm6 = await GreenMarkTrustoqpkitq.transfer.call(addressFMSU0JZ, uintHz1FfaL, {from: accounts[2]});

		await expect(GreenMarkTrustoqpkitq.transfer.call(addressflnhDGy, uintP6xdhdT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintnXoCG8u = BigInt("398")
		const stringpkuOL9H = "hZaae51e9bwCjydadfnBw3HeNGabenAdFoE9xSWXbvzAuxqURKZIRlhwN4KtCaT8kXsW1cyqL4OmDQCjwjT3qigPM6I"
		const stringcHYTUWe = "rV94vLlZbIsCYDXizcW"
		const GreenMarkTrustlE2ELJJ = await GreenMarkTrust.new(uintnXoCG8u, stringpkuOL9H, stringcHYTUWe, {from: accounts[3]});
		const byteHLVzX3Q = "0x060a191a1504"
		const uintBsLE53R = BigInt("582")
		const addressra5sKyi = accounts[0]
		const uintxR0JNOT = BigInt("397")
		const addresstvsTaOH = "0x0000000000000000000000000000000000000001"
		const uintD5HsWYB = BigInt("1306")
		const byteRjci96 = "0x09151d11"
		const uintrMr1djd = BigInt("1425")
		const addresskcbO4MQ = accounts[4]
		const byteqBiiuk = "0x130f0f0206"
		const uintb9UdwHY = BigInt("1545")
		const addressZL1JQt = accounts[2]
		const booldiLjyIX = await GreenMarkTrustlE2ELJJ.approveAndCall.call(addressra5sKyi, uintBsLE53R, byteHLVzX3Q, {from: accounts[5]});
		const boolcYR1grf = await GreenMarkTrustlE2ELJJ.approve.call(addresstvsTaOH, uintxR0JNOT, {from: accounts[1]});
		const boolDH5SDZZ = await GreenMarkTrustlE2ELJJ.burn.call(uintD5HsWYB, {from: accounts[3]});
		const boolhuC4Ql8 = await GreenMarkTrustlE2ELJJ.approveAndCall.call(addresskcbO4MQ, uintrMr1djd, byteRjci96, {from: accounts[2]});
		const boolW4WOpIh = await GreenMarkTrustlE2ELJJ.approveAndCall.call(addressZL1JQt, uintb9UdwHY, byteqBiiuk, {from: accounts[0]});

		await expect(GreenMarkTrustlE2ELJJ.approveAndCall.call(addressra5sKyi, uintBsLE53R, byteHLVzX3Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintGpJkMN = BigInt("1881")
		const stringZdLstK8 = "X0mMzkuy4xJTrBCdtCqPBxDVsBiEvRBzNM88ABmhgiT1JtCEDh1TnzdREcpcRwMI4SIJnsA91wsR49nzLXHJ3WUTqaHpCs"
		const stringPy0JgGO = "y4MA6YF0MaMy4hrA4BYPIi5zX8ihEvgEY7xbajNeAy6NInyt1Yei7mxPFCnYxjm"
		const GreenMarkTrustbNHr4U = await GreenMarkTrust.new(uintGpJkMN, stringZdLstK8, stringPy0JgGO, {from: accounts[1]});
		const uintDACiS0 = BigInt("1149")
		const addressSEU2eVw = accounts[4]
		const addressTXKk9N1 = accounts[2]
		const uintZ1hYeER = BigInt("599")
		const addressxaEfLmC = accounts[2]
		const booloqA14b = await GreenMarkTrustbNHr4U.transferFrom.call(addressTXKk9N1, addressSEU2eVw, uintDACiS0, {from: "0x0000000000000000000000000000000000000001"});
		const boolt6jfACO = await GreenMarkTrustbNHr4U.transfer.call(addressxaEfLmC, uintZ1hYeER, {from: accounts[0]});

		await expect(GreenMarkTrustbNHr4U.transferFrom.call(addressTXKk9N1, addressSEU2eVw, uintDACiS0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQFPSk0X = BigInt("1114")
		const stringfwFvthi = "zZFlRf7LkIDzUFEBbWl1ubchuWlkr7Ve898VnFRNa4Pe9lPOfh51tjuHs2jbsHhesc"
		const stringKv28hKI = "BNtyDHkM23utHr0y1hS6z8yF4QHb5EjabWPI8hTLmFBdCfd5G54fmZbjRBe8SpKqNXB59zVzLoeKlyfrL66q8M"
		const GreenMarkTrustGYKa1ak = await GreenMarkTrust.new(uintQFPSk0X, stringfwFvthi, stringKv28hKI, {from: accounts[3]});
		const uintDJqd96D = BigInt("1005")
		const addressS19Ngw = "0x0000000000000000000000000000000000000001"
		const bytenPIDGZh = "0x14141b09170d0e"
		const uintmuu0MhX = BigInt("1546")
		const addressGBNN7XO = accounts[4]
		const uintlSaCDQx = BigInt("924")
		const addresstAi4LPl = accounts[0]
		const uinteAi9lDE = BigInt("1812")
		const addressnioloGN = accounts[5]
		const boolIuBAA5W = await GreenMarkTrustGYKa1ak.burnFrom.call(addressS19Ngw, uintDJqd96D, {from: accounts[2]});
		const boolnBkQBbJ = await GreenMarkTrustGYKa1ak.approveAndCall.call(addressGBNN7XO, uintmuu0MhX, bytenPIDGZh, {from: accounts[4]});
		const boolyJBs5qF = await GreenMarkTrustGYKa1ak.burnFrom.call(addresstAi4LPl, uintlSaCDQx, {from: accounts[1]});
		const booljFUXo9F = await GreenMarkTrustGYKa1ak.burnFrom.call(addressnioloGN, uinteAi9lDE, {from: accounts[3]});

		await expect(GreenMarkTrustGYKa1ak.burnFrom.call(addressS19Ngw, uintDJqd96D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintEgkyd91 = BigInt("636")
		const stringAQyJF9P = "BvODUeSh"
		const stringyRkadYv = "fRPKYLAE8L3qYOXYBwetZUQzKRM"
		const GreenMarkTrustPIZAPKq = await GreenMarkTrust.new(uintEgkyd91, stringAQyJF9P, stringyRkadYv, {from: accounts[4]});
		const uinte3XI1b = BigInt("211")
		const uinthDMZG2l = BigInt("1562")
		const addressmIC9tW7 = accounts[4]
		const uintM72Pqa7 = BigInt("737")
		const uintut8eayi = BigInt("130")
		const addressmaUWVc1 = accounts[2]
		const uintW4i3Bp3 = BigInt("1429")
		const addressQt7j4t8 = accounts[2]
		const byteuOonURO = "0x0b181c030a04141c16071b12020007151912131f1c121f"
		const uintFLUdXd = BigInt("784")
		const addressqrdE2Cr = accounts[5]
		const bool44V7ls = await GreenMarkTrustPIZAPKq.burn.call(uinte3XI1b, {from: "0x0000000000000000000000000000000000000001"});
		const booljm0uKDr = await GreenMarkTrustPIZAPKq.transfer.call(addressmIC9tW7, uinthDMZG2l, {from: accounts[3]});
		const boolfwiTMEW = await GreenMarkTrustPIZAPKq.burn.call(uintM72Pqa7, {from: accounts[1]});
		const boolf7hlh84 = await GreenMarkTrustPIZAPKq.approve.call(addressmaUWVc1, uintut8eayi, {from: "0x0000000000000000000000000000000000000001"});
		const boolxAyUhFu = await GreenMarkTrustPIZAPKq.transfer.call(addressQt7j4t8, uintW4i3Bp3, {from: accounts[0]});
		const boolOuwTqBW = await GreenMarkTrustPIZAPKq.approveAndCall.call(addressqrdE2Cr, uintFLUdXd, byteuOonURO, {from: accounts[4]});

		await expect(GreenMarkTrustPIZAPKq.burn.call(uinte3XI1b, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintCZuVANw = BigInt("1526")
		const stringJnNJPpV = "Bw573gpblNdRX8nl"
		const stringHJBOFr = "7Fr6Ji2m9sdJgWVUnwHNFxVHIxD1rhm2nBQdVXt61JpyyeNhdpd"
		const GreenMarkTrustIaW1t2h = await GreenMarkTrust.new(uintCZuVANw, stringJnNJPpV, stringHJBOFr, {from: "0x0000000000000000000000000000000000000001"});
		const uintulCSKYX = BigInt("1110")
		const addressNdiNl3 = accounts[3]
		const addressc62lLua = accounts[4]
		const uintWMuGxtO = BigInt("1399")
		const addressDYT7mQ3 = accounts[4]
		const addressF8q3ZoH = accounts[1]
		const uintXS9YMLL = BigInt("1296")
		const addressjUU16zJ = accounts[2]
		const uintO86mA2h = BigInt("1664")
		const addressNu30DIM = accounts[3]
		const uintud9rlyQ = BigInt("336")
		const addressD9XuFNM = accounts[3]
		const boolvFE0zuh = await GreenMarkTrustIaW1t2h.transferFrom.call(addressc62lLua, addressNdiNl3, uintulCSKYX, {from: accounts[5]});
		const booluevdCa = await GreenMarkTrustIaW1t2h.transferFrom.call(addressF8q3ZoH, addressDYT7mQ3, uintWMuGxtO, {from: accounts[5]});
		const boolUFRDAcv = await GreenMarkTrustIaW1t2h.burnFrom.call(addressjUU16zJ, uintXS9YMLL, {from: accounts[5]});
		const boolw7Zw8IF = await GreenMarkTrustIaW1t2h.burnFrom.call(addressNu30DIM, uintO86mA2h, {from: "0x0000000000000000000000000000000000000001"});
		const boolreWqGgn = await GreenMarkTrustIaW1t2h.approve.call(addressD9XuFNM, uintud9rlyQ, {from: "0x0000000000000000000000000000000000000001"});
	});
})