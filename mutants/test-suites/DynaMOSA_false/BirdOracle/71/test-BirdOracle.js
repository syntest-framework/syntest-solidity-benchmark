const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclell6CSff = await BirdOracle.new({from: accounts[0]});
		const addressQIViMC9 = accounts[0]
		const addressFt5szYo = accounts[1]
		const uinthEyXbsM = BigInt("1855")
		const stringv1XVsVs = "5uhaRX157lzBTYd908A3jaWKsN"
		const stringYUrBPVa = "DQgaTl2m7JPqCO13N6g6dLGFmxrZyUy6eBgja49u4"
		const uintM1WPNR9 = await BirdOraclell6CSff.getRatingByAddress.call(addressQIViMC9, {from: accounts[5]});
		const uintb4uao1 = await BirdOraclell6CSff.getRatingByAddress.call(addressFt5szYo, {from: accounts[5]});
		const stringJD1DJlL = await BirdOraclell6CSff.substring.call(stringv1XVsVs, uinthEyXbsM, {from: accounts[0]});
		const uintJOGS0YR = await BirdOraclell6CSff.getRating.call({from: accounts[1]});
		const uintjoYb5A = await BirdOraclell6CSff.getRatingByAddressString.call(stringYUrBPVa, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKkvtg19 = await BirdOracle.new({from: accounts[3]});
		const addressS6EBNbt = accounts[0]
		const stringgGW5n9r = "H8mr2cCaFhJLshaDGCBiQViEBsxPYBT2rsyAQsIurK5ij7QR9TQMkKejM1fq"
		const uintJINDAhx = BigInt("1220")
		const uintfC9z1W = BigInt("1453")
		const addressbB2EJT = accounts[0]
		const stringQlx2MC = "o3XtOVIpJTedahZWISPb1fhyX1rYRnyvlS8CShVxwf5HzRV2THt"
		const uintxcOlufM = await BirdOracleKkvtg19.getRatingByAddress.call(addressS6EBNbt, {from: accounts[0]});
		const uintUO3JFg = await BirdOracleKkvtg19.getRatingByAddressString.call(stringgGW5n9r, {from: "0x0000000000000000000000000000000000000001"});
		const 
o2koYLw = await BirdOracleKkvtg19.updatedChainRequest.call(uintfC9z1W, uintJINDAhx, {from: accounts[4]});
		const uintJv6YYvb = await BirdOracleKkvtg19.getRatingByAddress.call(addressbB2EJT, {from: accounts[1]});
		const uintP88hh4 = await BirdOracleKkvtg19.getRatingByAddressString.call(stringQlx2MC, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledke8bLK = await BirdOracle.new({from: accounts[2]});
		const uintBr17Sww = BigInt("512")
		const uintsPHdUy = BigInt("1285")
		const addressGphNJvp = accounts[3]
		const uintPn1WJB = await BirdOracledke8bLK.getRating.call({from: accounts[0]});
		const 
qxwJi4T = await BirdOracledke8bLK.updatedChainRequest.call(uintsPHdUy, uintBr17Sww, {from: accounts[0]});
		const uintS0wy0wa = await BirdOracledke8bLK.getRatingByAddress.call(addressGphNJvp, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleaNzKrSQ = await BirdOracle.new({from: accounts[4]});
		const stringXK0WvtB = "t7RJIX1H2voq1RRzPZKYS"
		const uintwkBfvVB = BigInt("2028")
		const uintB4iXjUT = BigInt("667")
		const stringXZk8GOA = "h1Lf8iYov"
		const stringLKNkVd = await BirdOracleaNzKrSQ.extractAddress.call(stringXK0WvtB, {from: accounts[4]});
		const 
HuLudD9 = await BirdOracleaNzKrSQ.updatedChainRequest.call(uintB4iXjUT, uintwkBfvVB, {from: accounts[2]});
		const uinttIrKhbz = await BirdOracleaNzKrSQ.getRating.call({from: accounts[1]});
		const uintLVviSUS = await BirdOracleaNzKrSQ.getRatingByAddressString.call(stringXZk8GOA, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyVV3xBD = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQZLyPkC = accounts[0]
		const addresszdavBi6 = accounts[4]
		const uintQ6zex1 = BigInt("13")
		const stringv96CrCT = ""
		const uint1ba8Cz = await BirdOracleyVV3xBD.getRatingByAddress.call(addressQZLyPkC, {from: accounts[2]});
		const uintzgMbWAU = await BirdOracleyVV3xBD.getRatingByAddress.call(addresszdavBi6, {from: accounts[4]});
		const uintuHcCBul = await BirdOracleyVV3xBD.getRating.call({from: accounts[1]});
		const stringU0XDZKE = await BirdOracleyVV3xBD.substring.call(stringv96CrCT, uintQ6zex1, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledke8bLK = await BirdOracle.new({from: accounts[2]});
		const uintgOzHhec = BigInt("1457")
		const stringHTDZWiB = "DG5nh6So3GvM"
		const stringc7cwGn = "VBlmxeM5"
		const uintRinHmt = BigInt("512")
		const uintkMORfBh = BigInt("1285")
		const addressSWBBUpP = accounts[3]
		const uintPn1WJB = await BirdOracledke8bLK.getRating.call({from: accounts[0]});
		const stringN0fe9m = await BirdOracledke8bLK.substring.call(stringHTDZWiB, uintgOzHhec, {from: accounts[3]});
		const stringeT56gJd = await BirdOracledke8bLK.extractAddress.call(stringc7cwGn, {from: accounts[0]});
		const 
qxwJi4T = await BirdOracledke8bLK.updatedChainRequest.call(uintkMORfBh, uintRinHmt, {from: accounts[0]});
		const uintS0wy0wa = await BirdOracledke8bLK.getRatingByAddress.call(addressSWBBUpP, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclec0Wnhzg = await BirdOracle.new({from: accounts[2]});
		const stringDQP69u = "lB9VRFovH7KtXk4NRTFk7QllZmQTdsED8VOkD4c5GlzMeeLeAGhYjwtGo5lpnyLCwdyX6I0un6MbFWwbqyF"
		const uintL0dWqDw = BigInt("1929")
		const uintMqbDu71 = BigInt("1628")
		const stringLJ2Si7C = "zF6CszoZPQWG0gnoFxhg0d2c6F0oNBMXt4AsJ18HKO5WOmU4"
		const stringqMSByqk = "WOfwN1hiYTJTQUixVcRvbr1ijas"
		const uintz7VI71y = BigInt("1933")
		const uintC5gELJq = BigInt("1306")
		const stringmbavKk8 = "EN3TSljW8abvbhgaRjFBitajLBf4lwxJqUh4jEqvzTzq2wbEvFhFkwjMbjMD2kQzd78pqsx"
		const stringw4ep1dR = "xOCCj2x1lG"
		const uintdQcGoGq = BigInt("64")
		const uintyTUyJzr = BigInt("1560")
		const addressuhyJ0RU = accounts[3]
		const addressTo7Tdj = await BirdOraclec0Wnhzg.parseAddr.call(stringDQP69u, {from: accounts[0]});
		const stringSyh92sk = await BirdOraclec0Wnhzg.substring.call(stringLJ2Si7C, uintMqbDu71, uintL0dWqDw, {from: accounts[2]});
		const uintAotHwPw = await BirdOraclec0Wnhzg.getRatingByAddressString.call(stringqMSByqk, {from: accounts[4]});
		const stringNfb26n = await BirdOraclec0Wnhzg.substring.call(stringmbavKk8, uintC5gELJq, uintz7VI71y, {from: "0x0000000000000000000000000000000000000001"});
		const stringCZnvjU = await BirdOraclec0Wnhzg.extractAddress.call(stringw4ep1dR, {from: accounts[0]});
		const 
w0n1aH = await BirdOraclec0Wnhzg.updatedChainRequest.call(uintyTUyJzr, uintdQcGoGq, {from: accounts[3]});
		const uintYGdR7z5 = await BirdOraclec0Wnhzg.getRatingByAddress.call(addressuhyJ0RU, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclec0Wnhzg = await BirdOracle.new({from: accounts[2]});
		const stringDQP69u = "lB9VRFovH7KtXk4NRTFk7QllZmQTdsED8VOkD4c5GlzMeeLeAGhYjwtGo5lpnyLCwddX6I0un6MbFWwbqyF"
		const stringivAcgl6 = "HHpxJN7obBrHsxe3jtSl5yFEmUAm7ijavq0Yv5XaM1NaY1lG7wQLeCMoUiNZ0t2m25m8YZL0pAHjVzq5EMAdOMEsN8PlJX"
		const stringPC3lZmC = "HJzMbMY8aMqc9Cvp7cq7qbgTFyv28eWmKpgoC1aQyoArqY2z8MMiE2ygUxTkYHWFke43uNKO8BDmNni8Xt0K3"
		const uintZczbMPA = BigInt("1929")
		const uintfEPfcqQ = BigInt("1628")
		const stringLJ2Si7C = "zF6CszoZPQWG0gnoFxhg0d2c6F0oNBMXt4AsJ18HKO5WOmU4"
		const stringqMSByqk = "WOfwN1hiYTJTQUixVcRvbr1ijas"
		const uintE0LY3l1 = BigInt("1933")
		const uintyQeUkvc = BigInt("1306")
		const stringmbavKk8 = "EN3TSljW8abvbhgaRjFBitajLBf4lwxJqUh4jEqvzTzq2wbEvFhFkwjMbjMD2kQzd78pqsx"
		const stringw4ep1dR = "xOCCj2x1lG"
		const uintzHa5i15 = BigInt("64")
		const uinthKAx6g6 = BigInt("1560")
		const stringne8r8YW = "p8yDcKJLXj9rSmMB4Vv8egfnXmxSGaok3y4HIS9gWusywvuPqq1SH4vO6CWpxIXrDxBM738"
		const stringjwXcO93 = "WPEIGZ0v8K8RDMk7w0xuCzR4TWbVW73x15hhIcSCuNYXDrWNNg8imqvhUP8Vcc7Ow26T"
		const addresshbat04G = accounts[3]
		const addressTo7Tdj = await BirdOraclec0Wnhzg.parseAddr.call(stringDQP69u, {from: accounts[0]});
		const 
f7Okeol = await BirdOraclec0Wnhzg.newChainRequest.call(stringPC3lZmC, stringivAcgl6, {from: accounts[1]});
		const stringSyh92sk = await BirdOraclec0Wnhzg.substring.call(stringLJ2Si7C, uintfEPfcqQ, uintZczbMPA, {from: accounts[2]});
		const uintAotHwPw = await BirdOraclec0Wnhzg.getRatingByAddressString.call(stringqMSByqk, {from: accounts[4]});
		const stringNfb26n = await BirdOraclec0Wnhzg.substring.call(stringmbavKk8, uintyQeUkvc, uintE0LY3l1, {from: "0x0000000000000000000000000000000000000001"});
		const stringCZnvjU = await BirdOraclec0Wnhzg.extractAddress.call(stringw4ep1dR, {from: accounts[0]});
		const 
w0n1aH = await BirdOraclec0Wnhzg.updatedChainRequest.call(uinthKAx6g6, uintzHa5i15, {from: accounts[3]});
		const 
yt3sRJ = await BirdOraclec0Wnhzg.newChainRequest.call(stringjwXcO93, stringne8r8YW, {from: accounts[3]});
		const uintYGdR7z5 = await BirdOraclec0Wnhzg.getRatingByAddress.call(addresshbat04G, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHf9kPGy = await BirdOracle.new({from: accounts[4]});
		const stringdgeHDcU = "Qoo3PKNzFphmeACAGjNvQVQltyMWErwaNbpYGT9eZmoNBb4SNFjVtvM9VWDcVGrG4DG3ioc5AIakty9XnenXOWFumKGDplMqBPF"
		const uintkDw9FzG = BigInt("1605")
		const stringXfKy9X = "B6NN1pBgk9ddhZqhGiGNxj6p2EPRR27MGbGiC6HhcEX"
		const uintrhHH9c = BigInt("623")
		const uintLXWpe4p = BigInt("1632")
		const addressBKIrbCJ = await BirdOracleHf9kPGy.parseAddr.call(stringdgeHDcU, {from: accounts[1]});
		const stringDzTp08 = await BirdOracleHf9kPGy.substring.call(stringXfKy9X, uintkDw9FzG, {from: accounts[4]});
		const 
FgcPNbn = await BirdOracleHf9kPGy.updatedChainRequest.call(uintLXWpe4p, uintrhHH9c, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewCylmao = await BirdOracle.new({from: accounts[0]});
		const uinthNeanU = BigInt("533")
		const uinto7IeG5 = BigInt("1114")
		const stringxUYrB3X = "aJghIS3h2YMhLocvMHTEvol9ZQru4GgJzrdMz8KHUkgumwIlQqUl"
		const uintxpHMrYV = BigInt("1378")
		const uintmbAV0oL = BigInt("1110")
		const stringaB8HG1 = "2L0UxUyzJNRudGAbLyy"
		const stringY44M44M = "7EhNl3Pg1gCVm3ETcMOG9uMY7ehjogQTMNIiAJm7gagSKC28Ub6BPtRtWAmNHA"
		const uintu73dypZ = BigInt("97")
		const uintnev9btW = BigInt("1961")
		const stringGp03c9i = "WsWoO9g0f"
		const stringV1ESraw = "b7UocL75SLF15AjJKojgrEuNNldmSlzfR2LPQnGslt6HYia3T"
		const stringxirDgPG = "X1PTEG4J7boQwLZNTgLo8vnCKysSRGM95vFrPIwNsv4gUyBbYB"
		const stringurRLpcZ = await BirdOraclewCylmao.substring.call(stringxUYrB3X, uinto7IeG5, uinthNeanU, {from: "0x0000000000000000000000000000000000000001"});
		const stringyFmpcJw = await BirdOraclewCylmao.substring.call(stringaB8HG1, uintmbAV0oL, uintxpHMrYV, {from: accounts[2]});
		const stringZw3Mrn7 = await BirdOraclewCylmao.extractAddress.call(stringY44M44M, {from: accounts[3]});
		const stringGu8rPcg = await BirdOraclewCylmao.substring.call(stringGp03c9i, uintnev9btW, uintu73dypZ, {from: accounts[0]});
		const stringjLEC2Wb = await BirdOraclewCylmao.extractAddress.call(stringV1ESraw, {from: accounts[2]});
		const uintYhg5cZZ = await BirdOraclewCylmao.getRatingByAddressString.call(stringxirDgPG, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledke8bLK = await BirdOracle.new({from: accounts[2]});
		const uintzo4itSP = BigInt("743")
		const stringtCqMuKm = "sBGFSNrHohEuXKlevS5rVkNzv0S7Akqbca"
		const uintwHXaigC = BigInt("1833")
		const stringaQtaQNF = "bIFKm7iz4Ie1GJ8Ld5cdbQ9I26G7FP01aecorL4iaHTsG6OEOmmdpSnB"
		const uintLKCnRvA = BigInt("539")
		const uintjo9589s = BigInt("1285")
		const addressFAquhy = accounts[3]
		const stringANq2gvN = await BirdOracledke8bLK.substring.call(stringtCqMuKm, uintzo4itSP, {from: "0x0000000000000000000000000000000000000001"});
		const stringDhtI0iV = await BirdOracledke8bLK.substring.call(stringaQtaQNF, uintwHXaigC, {from: accounts[2]});
		const uintPn1WJB = await BirdOracledke8bLK.getRating.call({from: accounts[0]});
		const 
qxwJi4T = await BirdOracledke8bLK.updatedChainRequest.call(uintjo9589s, uintLKCnRvA, {from: accounts[0]});
		const uintS0wy0wa = await BirdOracledke8bLK.getRatingByAddress.call(addressFAquhy, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle7n9IHO = await BirdOracle.new({from: accounts[4]});
		const addresshz3Nbwr = accounts[4]
		const uintV2H8Rtc = BigInt("774")
		const stringGqHKxuK = "p2JGEftYHZidSaSBMRe4G65h8jTaW59gonAzALyFueMwLVob2RUKkegL9LtBTEfRQgDcJIYIWObDgCyrlBWNgFHsJ"
		const stringHh09PsF = "vOzlfeBKVioDQG0iHkKVwn7pyWwBxOOUG9dcW5BYrfduZODLQkYUIpTPiYeroN9vJ588HDwSO2hUHdmwW4qWFpqSMtXUNj4rk"
		const uintWrkQGWl = BigInt("376")
		const uintj3pxsjZ = BigInt("257")
		const stringMhdubIa = "9wumwXH448o4ZlY1ZyYcUphvKs7V93aRr"
		const stringuVsr7P = "R6lYa8Do4NTE3zJuCjR2deEyQwD1VyRKu1fe"
		const stringnfLOmgy = "5qblHd5SsxxRcOLfcOF0FaRhqkSXKnwnVjp3P8Ki1bizawFu8"
		const stringnV61sG = "cFBaAdzbgGSVO8AnfTR6MDLuhC7Sb2JdFcwhXbOrhCOgRBPVqPAyWRwJ6gdHiLgPAqoKpxE7Cfbc6"
		const uintZ69paqx = BigInt("125")
		const stringERoQaj1 = "TC4JiiHepE26sKKk3"
		const addressd4qT6i8 = accounts[2]
		const stringXaql51i = "Lfn6GzVfqiXJSXQOjBuhD7XkvhGhAGQLqyUPx1kpLC8nhlmgmfs4ih9x8e7UFOBjjqO1QTy9B7chgVGTJK3VV1"
		const stringHT3z9ER = "2iipPG"
		const uintz0EXnkP = await BirdOracle7n9IHO.getRatingByAddress.call(addresshz3Nbwr, {from: accounts[4]});
		const stringKhu0fFO = await BirdOracle7n9IHO.substring.call(stringGqHKxuK, uintV2H8Rtc, {from: accounts[1]});
		const uintBsBXpC7 = await BirdOracle7n9IHO.getRating.call({from: accounts[2]});
		const uintsBilQ3B = await BirdOracle7n9IHO.getRatingByAddressString.call(stringHh09PsF, {from: accounts[4]});
		const stringO4oPVwZ = await BirdOracle7n9IHO.substring.call(stringMhdubIa, uintj3pxsjZ, uintWrkQGWl, {from: accounts[2]});
		const stringjOr1lv = await BirdOracle7n9IHO.extractAddress.call(stringuVsr7P, {from: accounts[3]});
		const stringkmJyau = await BirdOracle7n9IHO.extractAddress.call(stringnfLOmgy, {from: accounts[3]});
		const uintyfar6PY = await BirdOracle7n9IHO.getRatingByAddressString.call(stringnV61sG, {from: accounts[3]});
		const stringq5sLxAJ = await BirdOracle7n9IHO.substring.call(stringERoQaj1, uintZ69paqx, {from: accounts[5]});
		const uintIcSuI5g = await BirdOracle7n9IHO.getRatingByAddress.call(addressd4qT6i8, {from: accounts[1]});
		const string1Jhp0K = await BirdOracle7n9IHO.extractAddress.call(stringXaql51i, {from: "0x0000000000000000000000000000000000000001"});
		const uintfhStASz = await BirdOracle7n9IHO.getRating.call({from: accounts[2]});
		const stringLvRsqF5 = await BirdOracle7n9IHO.extractAddress.call(stringHT3z9ER, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclemFC6ZOB = await BirdOracle.new({from: accounts[3]});
		const stringLaUlOjE = "GsRZoNdmGTCAHvxTdQUhZ23Ta3KxdDwzenmYIhpQABn8zqdKZIQkLSxXscL1SPVF6bxulxqJLzEEGFhJF0VPxgAl6G"
		const uintZbV4kvT = BigInt("477")
		const stringnS9OjLG = "1Lrx86AnDm8fj4Xn2QsmSjD8hymSMGouCg4YritRaCyerYpKDjEygx7GzPyqiXQsHMV6zdjWlfhD"
		const uintsP7vwnd = BigInt("603")
		const uintN5LPgJW = BigInt("2025")
		const stringJMgda8m = "4MGgjJas4JMVzNFzxA5CxGIIhwrQZXibW"
		const uintL4W8Omk = BigInt("1133")
		const string6S5UTI = "88R5WISiYGIGvYJW7gHOioiK7UkVFct8VqhDeDYu1QTt6vREI0e6Dre6lvE61XYI57uyCWgZDT1h"
		const uintAlNdbU = await BirdOraclemFC6ZOB.getRatingByAddressString.call(stringLaUlOjE, {from: accounts[2]});
		const stringA8PZu1d = await BirdOraclemFC6ZOB.substring.call(stringnS9OjLG, uintZbV4kvT, {from: accounts[5]});
		const stringJXZan3 = await BirdOraclemFC6ZOB.substring.call(stringJMgda8m, uintN5LPgJW, uintsP7vwnd, {from: accounts[3]});
		const stringJgWq6j = await BirdOraclemFC6ZOB.substring.call(string6S5UTI, uintL4W8Omk, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledke8bLK = await BirdOracle.new({from: accounts[2]});
		const uintH7mAaYF = BigInt("1107")
		const stringTBPBahb = "Ay25IsAlwsAFrevBYjkeWMKznJvrqtSgAjHqLNIlGlcsle5RhMosTv4f70X"
		const stringX2aZdn = "xSf8iCT2CIVzn4k2LzGnP8UQ4t765GxNAKxFD90ecDVUfiiqe4Ibr7JD00KJ"
		const uintFqTWzGy = BigInt("1306")
		const uintVbqyFgc = BigInt("1263")
		const stringmY7RXT7 = "fMQeucz9VgblbsyfepbZ5ECMgKxffxfDgewcozgLnyNhryA2dY4blV6gzK3hmUcseinIrOSk6"
		const uintJFDPnmU = BigInt("512")
		const uintafmCwA9 = BigInt("1285")
		const uintdPEMvoE = await BirdOracledke8bLK.getRating.call({from: accounts[0]});
		const uintTtwlyqR = await BirdOracledke8bLK.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const stringNlP2r3 = await BirdOracledke8bLK.substring.call(stringTBPBahb, uintH7mAaYF, {from: accounts[2]});
		const uintBovesnt = await BirdOracledke8bLK.getRatingByAddressString.call(stringX2aZdn, {from: accounts[4]});
		const stringSQ3pY5s = await BirdOracledke8bLK.substring.call(stringmY7RXT7, uintVbqyFgc, uintFqTWzGy, {from: "0x0000000000000000000000000000000000000001"});
		const uintMaoAidM = await BirdOracledke8bLK.getRating.call({from: accounts[1]});
		const 
qxwJi4T = await BirdOracledke8bLK.updatedChainRequest.call(uintafmCwA9, uintJFDPnmU, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledke8bLK = await BirdOracle.new({from: accounts[2]});
		const uintLcRwnnq = BigInt("1284")
		const uint54EEsY = BigInt("1284")
		const stringmY7RXT7 = "fMQeucz9VgblbsyfepbZ5ECMgKxffxfDgewcozgLnyNhryA2dY4blV6gzK3hmUcseinIrOSk6"
		const uintDp3tag = BigInt("304")
		const uintYXnnHc8 = BigInt("38")
		const uintYEMpzs5 = BigInt("173")
		const uintS2c7sJt = BigInt("1638")
		const stringjNEz7Ly = "JcSTfN9vGuul9Sp7ntRmqHw4lGNyr2ThdM"
		const stringSQ3pY5s = await BirdOracledke8bLK.substring.call(stringmY7RXT7, uint54EEsY, uintLcRwnnq, {from: "0x0000000000000000000000000000000000000001"});
		const 
hgvhmJ6 = await BirdOracledke8bLK.updatedChainRequest.call(uintYXnnHc8, uintDp3tag, {from: accounts[4]});
		const stringShVSjnK = await BirdOracledke8bLK.substring.call(stringjNEz7Ly, uintS2c7sJt, uintYEMpzs5, {from: accounts[5]});
	});
})