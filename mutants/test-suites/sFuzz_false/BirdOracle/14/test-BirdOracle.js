const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const uintGxx4dvO = BigInt("1086")
		const uintItmUZqM = BigInt("659")
		const uinttPtpcr = BigInt("913")
		const uintaK3Ym5 = BigInt("311")
		const 
mhrsdsr = await BirdOracleFDwRyaE.updatedChainRequest.call(uintItmUZqM, uintGxx4dvO, {from: accounts[1]});
		const 
TnGitoC = await BirdOracleFDwRyaE.updatedChainRequest.call(uintaK3Ym5, uinttPtpcr, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKmQaQbE = await BirdOracle.new({from: accounts[0]});
		const uintJgPFTN = BigInt("778")
		const uintt3Xr2sr = BigInt("1023")
		const stringJjtnfMQ = "Jf8pKrEYEolubJRz5gVbNjfypCA4RU4KyeUN1sMLH9HCBT6tKv1MX7HIYP8MvfjPnPFjc3WklA6l5LB8b4Gtg"
		const stringkBfyIaY = "qNlD66FU6uWDJjAqmnaLxuAXIHPbyWDAMnnr8v0O"
		const uintPCEsDZB = BigInt("634")
		const uintc2nAU8i = BigInt("1998")
		const stringQoOX6p5 = "RnoUzaVLBLmA5EY8t9rG1w5WRj25tHVARUpbyjRbwlqZCQndQoPpCtKI2cMFS3PjJl4KHWTeY12PBjmLgtjHgRGV24ayJQ8"
		const stringDpYZs9G = "F8MF6UGwjYbIRothJrMiusg2a3t"
		const stringvrcgdTy = "cc5SLH5RFkQuyGDb11Ug2QE8Uocjq6MBdALzb6vCnPRTpLbw5G"
		const uintXhhceKg = BigInt("827")
		const uintRhVKaaD = BigInt("1533")
		const stringCNMFix0 = "vkW1MsgoyaoeoeieXbOjez8Ulir4pfqav28G1jBadD3KQ6p1P8FCIrTWDKrM0EBgwirDLoIeZmcR88CK8OSJpPM8Bt"
		const stringCaXdtBk = await BirdOracleKmQaQbE.substring.call(stringJjtnfMQ, uintt3Xr2sr, uintJgPFTN, {from: accounts[1]});
		const addressYrmNlTQ = await BirdOracleKmQaQbE.parseAddr.call(stringkBfyIaY, {from: accounts[4]});
		const string1RGXCA = await BirdOracleKmQaQbE.substring.call(stringQoOX6p5, uintc2nAU8i, uintPCEsDZB, {from: accounts[2]});
		const 
zMcRGni = await BirdOracleKmQaQbE.newChainRequest.call(stringvrcgdTy, stringDpYZs9G, {from: accounts[0]});
		const uintQ2nUKXL = await BirdOracleKmQaQbE.getRating.call({from: accounts[0]});
		const stringGIdAEP5 = await BirdOracleKmQaQbE.substring.call(stringCNMFix0, uintRhVKaaD, uintXhhceKg, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledljMbhX = await BirdOracle.new({from: accounts[0]});
		const uintfCX5XH = BigInt("1474")
		const stringZ8s86wq = "CJs"
		const uintWqijg2k = BigInt("207")
		const uintfkWDFxl = BigInt("36")
		const uint3lsVAh = BigInt("567")
		const uintfZuAwlA = BigInt("634")
		const stringroTYmf = "5QyQNaR4Dq8mRmpzfR3ysaTUidnrzXLugWWDYhkhH2Jf3yjScvcpJR5Q7y"
		const uintQeMfP6T = BigInt("1726")
		const uintaViowB8 = BigInt("1827")
		const stringnn02sue = "jaTsIt4lsesEF25twO6tFBlWTLOOW39JLWs0J"
		const stringUuG3Dge = await BirdOracledljMbhX.substring.call(stringZ8s86wq, uintfCX5XH, {from: accounts[2]});
		const 
UJqClVR = await BirdOracledljMbhX.updatedChainRequest.call(uintfkWDFxl, uintWqijg2k, {from: "0x0000000000000000000000000000000000000001"});
		const string8WbnoE = await BirdOracledljMbhX.substring.call(stringroTYmf, uintfZuAwlA, uint3lsVAh, {from: accounts[3]});
		const string42RQWU = await BirdOracledljMbhX.substring.call(stringnn02sue, uintaViowB8, uintQeMfP6T, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleY8ECSBl = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringNAGSiD = "KaWJrl"
		const stringicdKC2W = "5D2WmHcOq8TfRaudyqQxJqiTF85f7"
		const uintCRkMgqu = BigInt("1165")
		const uint0ITIBC = BigInt("993")
		const stringtScj3Fd = "TsY5BQQ3nj0cnUiDXoMKyrbIYHyv2ZaVPTQYtmUUtvr8P07B"
		const 
aZXuFaJ = await BirdOracleY8ECSBl.newChainRequest.call(stringicdKC2W, stringNAGSiD, {from: accounts[4]});
		const 
I7bE1U = await BirdOracleY8ECSBl.updatedChainRequest.call(uint0ITIBC, uintCRkMgqu, {from: accounts[2]});
		const uintJRlvGi = await BirdOracleY8ECSBl.getRatingByAddressString.call(stringtScj3Fd, {from: accounts[0]});
		const uintD7lOHgd = await BirdOracleY8ECSBl.getRating.call({from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleibX5HXk = await BirdOracle.new({from: accounts[0]});
		const uintm5aJREi = BigInt("1142")
		const uintx7nN997 = BigInt("392")
		const stringMD42g7s = "bQeXKW2lTsuGd5woeN2oDGARtubecpuLCENn7tvY1vxjee07ntLuRYaoxNUYiW2wjkZ5JWBTKB"
		const uintqbUdIFZ = BigInt("1505")
		const uintyBMTZu = BigInt("1899")
		const stringZO9fyr = "r"
		const uintToXcJb = BigInt("1277")
		const uintN3o35fK = BigInt("1603")
		const stringn2ePYUa = "2"
		const stringZRkSejH = "cxC2bbT7PIwGRk6bukXd"
		const stringL4zgMzy = await BirdOracleibX5HXk.substring.call(stringMD42g7s, uintx7nN997, uintm5aJREi, {from: accounts[0]});
		const 
sqGKBG = await BirdOracleibX5HXk.updatedChainRequest.call(uintyBMTZu, uintqbUdIFZ, {from: accounts[3]});
		const stringVWBI38O = await BirdOracleibX5HXk.extractAddress.call(stringZO9fyr, {from: accounts[2]});
		const stringVK2bWQA = await BirdOracleibX5HXk.substring.call(stringn2ePYUa, uintN3o35fK, uintToXcJb, {from: accounts[2]});
		const uintKqW9ET5 = await BirdOracleibX5HXk.getRatingByAddressString.call(stringZRkSejH, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclei0uzj7k = await BirdOracle.new({from: accounts[2]});
		const addressLJk7c9U = accounts[3]
		const stringqqEZ923 = "FSvAYDnYsGuDJj14lcAIiu8NRWsPraf07Or976Lo933uQapE5z5dfwE8jQErJWe4Il8yk8c8H5YlFm61P"
		const uintlCfpsrw = BigInt("1239")
		const stringlAtoz9J = "51hO5TrBhC33WuwSIbfCLjNwG6JL6wPhU8w"
		const uintwwIqKjJ = BigInt("1789")
		const uintU7Cm3Dv = BigInt("671")
		const stringltlqOCn = "meG8YkzkzjDkqs9XqBW3BrRxTWaOpKD5NRy1T5OxyvZQPpJf0EW3ebHu"
		const uint93g7Iq = await BirdOraclei0uzj7k.getRatingByAddress.call(addressLJk7c9U, {from: accounts[4]});
		const stringNkmyfV2 = await BirdOraclei0uzj7k.extractAddress.call(stringqqEZ923, {from: accounts[4]});
		const stringxtm5yWR = await BirdOraclei0uzj7k.substring.call(stringlAtoz9J, uintlCfpsrw, {from: accounts[1]});
		const stringWBxJQTw = await BirdOraclei0uzj7k.substring.call(stringltlqOCn, uintU7Cm3Dv, uintwwIqKjJ, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleXCvk0p0 = await BirdOracle.new({from: accounts[3]});
		const stringzJIcbSD = ""
		const uintNRthiED = BigInt("604")
		const stringT1W973 = "qn8jWGwGeoGlv6r4h6JYlBc4mY8"
		const stringy5gBTTm = "VdfXc8bHeFQEpInvLYIopqwM389uQdV2RPxhootnCn1J"
		const stringEBOVbYp = "4i1RgTFFOwoQ"
		const stringWmA2IJf = "ezOmgJ88w0AJSEFyGmf55L2EQ3NhOs"
		const string4Nbxu5 = "HXgPq4cYMPdMFFtxLXPr4JR1mRQNLlVZPHPKXdhuIyqgF6iKSFTxCdYqF1zkgAU4"
		const uintmP6QGz1 = await BirdOracleXCvk0p0.getRatingByAddressString.call(stringzJIcbSD, {from: accounts[1]});
		const stringOIgQLeO = await BirdOracleXCvk0p0.substring.call(stringT1W973, uintNRthiED, {from: accounts[4]});
		const 
aZHQVT = await BirdOracleXCvk0p0.newChainRequest.call(stringEBOVbYp, stringy5gBTTm, {from: "0x0000000000000000000000000000000000000001"});
		const uintkdZJuHg = await BirdOracleXCvk0p0.getRating.call({from: accounts[5]});
		const uintjUoJVrR = await BirdOracleXCvk0p0.getRatingByAddressString.call(stringWmA2IJf, {from: accounts[3]});
		const stringWLwnPck = await BirdOracleXCvk0p0.extractAddress.call(string4Nbxu5, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const stringQqTZEfZ = "uiYaM2NuISwOJ8KUl3grhyvyCw4zyfHlWynKdTrPvhVODcSzje"
		const uintt1Z2yDs = BigInt("352")
		const uintRb0ykcY = BigInt("108")
		const uint4qcTw3 = BigInt("1086")
		const uintOvSh4lR = BigInt("659")
		const uintdTO0B3 = BigInt("913")
		const uintp2vahmL = BigInt("286")
		const uintgBgqHXT = await BirdOracleFDwRyaE.getRatingByAddressString.call(stringQqTZEfZ, {from: accounts[4]});
		const 
ZJAdBb6 = await BirdOracleFDwRyaE.updatedChainRequest.call(uintRb0ykcY, uintt1Z2yDs, {from: accounts[2]});
		const 
mhrsdsr = await BirdOracleFDwRyaE.updatedChainRequest.call(uintOvSh4lR, uint4qcTw3, {from: accounts[1]});
		const 
TnGitoC = await BirdOracleFDwRyaE.updatedChainRequest.call(uintp2vahmL, uintdTO0B3, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFVyiWil = await BirdOracle.new({from: accounts[3]});
		const stringHnebRz3 = "MRrI1kICuB59Ct3EoC4hIIWOGopgA3tBP26Igoue9oZPpbGPlqIylry6JN1LViY7JnG"
		const uintFVnQCav = await BirdOracleFVyiWil.getRating.call({from: accounts[0]});
		const uintQGhD4e = await BirdOracleFVyiWil.getRatingByAddressString.call(stringHnebRz3, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEiNfVJV = await BirdOracle.new({from: accounts[1]});
		const stringwDHPSZX = "ImeOiYhg9S6WhR6KwXnIXoB"
		const stringdrYLxP1 = "OFo13vF5zOAXstgjmaKP7cLRv63OGVX38IN9apYEBHemHsMObtFthukdS"
		const string1QaKS2 = "B42wBiuNNDdhu60Bo9IdpjMCGxy6m5q5biNOzdh6lH4de2oQmYuh3E5HjeGoD1yTW39OwEh"
		const 
hMRSSua = await BirdOracleEiNfVJV.newChainRequest.call(stringdrYLxP1, stringwDHPSZX, {from: accounts[4]});
		const stringwAruuts = await BirdOracleEiNfVJV.extractAddress.call(string1QaKS2, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleibX5HXk = await BirdOracle.new({from: accounts[0]});
		const stringdkSYsh7 = "RGxFD1N3qHOPPt3zLD1m41YX94bupjNj4SHZUCkLlYBBk7eeDqz2sQ7hGhy0LcgMCFzTCYzVKR1AlQWi1xPRbsQIyu9VsXJ"
		const uintgBZvLsL = BigInt("196")
		const stringT1eYcZX = "v4NgPXVoPsbb7RP9tl7k8RsTIrgJta7HSrVpBI7isZmtWR8G2D7MKgsEmadhHFGoQWkLgBiAbrWWLHjf"
		const uintybJ6Zw = BigInt("1534")
		const uint9JgIfU = BigInt("1237")
		const stringatQtasB = "xJ8JVCqsXJr7IVs19w7UnIRR9YoxU8"
		const uintXRXU31R = BigInt("1142")
		const uintjB3WrOf = BigInt("392")
		const stringMD42g7s = "bQeXKW2lTsuGd5woeN2oDGARtubecpuLCENn7tvY1vxjee07ntLuRYaoxNUYiW2wjkZ5JWBTKB"
		const uintwg6iBdI = BigInt("1518")
		const uinteAFm2W = BigInt("1899")
		const uintdgV0zCx = BigInt("1341")
		const uintyMniuim = BigInt("1745")
		const uintPcQncD0 = BigInt("1277")
		const uintRjStOFk = BigInt("1603")
		const stringn2ePYUa = "2"
		const uintg5s2qZV = await BirdOracleibX5HXk.getRatingByAddressString.call(stringdkSYsh7, {from: "0x0000000000000000000000000000000000000001"});
		const stringgcYBKbg = await BirdOracleibX5HXk.substring.call(stringT1eYcZX, uintgBZvLsL, {from: accounts[4]});
		const stringZksjgyS = await BirdOracleibX5HXk.substring.call(stringatQtasB, uint9JgIfU, uintybJ6Zw, {from: "0x0000000000000000000000000000000000000001"});
		const uintpDpRwG9 = await BirdOracleibX5HXk.getRating.call({from: accounts[1]});
		const stringL4zgMzy = await BirdOracleibX5HXk.substring.call(stringMD42g7s, uintjB3WrOf, uintXRXU31R, {from: accounts[0]});
		const 
sqGKBG = await BirdOracleibX5HXk.updatedChainRequest.call(uinteAFm2W, uintwg6iBdI, {from: accounts[3]});
		const 
HaqbBSf = await BirdOracleibX5HXk.updatedChainRequest.call(uintyMniuim, uintdgV0zCx, {from: accounts[3]});
		const stringVK2bWQA = await BirdOracleibX5HXk.substring.call(stringn2ePYUa, uintRjStOFk, uintPcQncD0, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclemKlDCjD = await BirdOracle.new({from: accounts[1]});
		const uintx3iJ8Ht = BigInt("120")
		const stringoMAx2ed = "jTtmOqWjBKmW1Dwb7KnVzAkcsr1xH9MqrXOHE"
		const stringqS7OzbD = "A3m702lmOA9FEeyYs10bHKyYu4NpPyAkYsG6FFxO7A9"
		const stringIyKYmOh = "lRovFcRV30XQuHwIrt24AHzzHTV8dIG8N1X4dBYHbJgRnts2QZriDi7ftn81pcL3xtCnEkdr3AXUPr3lJGB8ywElhNOZclbxs"
		const uintq8Umg3b = BigInt("164")
		const uintKdYuO2f = BigInt("493")
		const stringmdfI8fn = "KGj3sTY2uJqGwasSNwSmV8NO12IVNoTsefL2ekvGtBLUDrr7FBfvacXSwWnvSgLGYvvm3ei"
		const stringX10szH9 = "rUlFK3EJO3XZmVJ1NJm"
		const uintxn6c2aQ = BigInt("1449")
		const stringYSUYe0u = "VmjPnhVmTWwNjsah41tUT6ha7zHbLxyt"
		const stringnBIdb1r = await BirdOraclemKlDCjD.substring.call(stringoMAx2ed, uintx3iJ8Ht, {from: accounts[0]});
		const 
nHOcy9h = await BirdOraclemKlDCjD.newChainRequest.call(stringIyKYmOh, stringqS7OzbD, {from: accounts[4]});
		const stringmMWrzC = await BirdOraclemKlDCjD.substring.call(stringmdfI8fn, uintKdYuO2f, uintq8Umg3b, {from: accounts[0]});
		const uintim9Zh6U = await BirdOraclemKlDCjD.getRatingByAddressString.call(stringX10szH9, {from: accounts[4]});
		const stringbT7tUWC = await BirdOraclemKlDCjD.substring.call(stringYSUYe0u, uintxn6c2aQ, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const stringU7ab1yO = "UJKlXpuBrRDMSORfqPZDFHpuhiiDFhNSKwrCbS8dyraGbNTRmAZsMxrN1Ojx"
		const uintbihlRdo = BigInt("1269")
		const stringXVGmu5 = "ohUDHT4z3NPH6ePMPzrlR9b3JN8sbK6"
		const uinte5GoKGC = BigInt("937")
		const uintH6uPHIq = BigInt("311")
		const stringuZm88rY = "L2sAgxFp5SLMeUCYiGRvzFgKJfvR716k7mzwX6t8sT13RLCmpP363OinXtu2c99DOnQq"
		const uintNDtN3PB = await BirdOracleFDwRyaE.getRatingByAddressString.call(stringU7ab1yO, {from: accounts[0]});
		const stringeBKucmb = await BirdOracleFDwRyaE.substring.call(stringXVGmu5, uintbihlRdo, {from: accounts[1]});
		const 
TnGitoC = await BirdOracleFDwRyaE.updatedChainRequest.call(uintH6uPHIq, uinte5GoKGC, {from: accounts[1]});
		const uintPv4IR8Q = await BirdOracleFDwRyaE.getRatingByAddressString.call(stringuZm88rY, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const uintqjLWmic = BigInt("926")
		const stringfo2Cayp = "SW0Um8WvjHGscFkDyrppBzU2lpdFYqJWXO8GHa"
		const stringgZJwPPx = "H99IfTLnxkGTMszm27WeblLYGLMmInhadCv68acWirLr9jrG9MSj"
		const stringXwm5WoR = "sX"
		const addressnBpzhhX = accounts[0]
		const uintOOVIaFM = BigInt("913")
		const uint7inXRe = BigInt("329")
		const stringhirqOI9 = await BirdOracleFDwRyaE.substring.call(stringfo2Cayp, uintqjLWmic, {from: accounts[5]});
		const 
FQhfzK3 = await BirdOracleFDwRyaE.newChainRequest.call(stringXwm5WoR, stringgZJwPPx, {from: accounts[2]});
		const uintwNI9zD = await BirdOracleFDwRyaE.getRatingByAddress.call(addressnBpzhhX, {from: accounts[4]});
		const 
TnGitoC = await BirdOracleFDwRyaE.updatedChainRequest.call(uint7inXRe, uintOOVIaFM, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const uintA1s8Rlf = BigInt("574")
		const stringWIFZkdl = "UhywFh6OCndWg"
		const addresshoSrTDz = accounts[0]
		const uintLLmjW38 = BigInt("920")
		const uintUoRQvv9 = BigInt("311")
		const stringxRgjqmA = await BirdOracleFDwRyaE.substring.call(stringWIFZkdl, uintA1s8Rlf, {from: accounts[3]});
		const uintF2VX8eE = await BirdOracleFDwRyaE.getRatingByAddress.call(addresshoSrTDz, {from: "0x0000000000000000000000000000000000000001"});
		const 
TnGitoC = await BirdOracleFDwRyaE.updatedChainRequest.call(uintUoRQvv9, uintLLmjW38, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const uintDgSl2fF = BigInt("531")
		const stringfKK0V2q = "XlFrrjH95m7jORHJc45gSWXYBBJOPrBkohErvDgdsfJGDLPK5eatRtuy9703hVa"
		const uintBGiIcgh = BigInt("913")
		const uintYlqN7e6 = BigInt("311")
		const uintjMoY3Td = await BirdOracleFDwRyaE.getRating.call({from: accounts[0]});
		const stringv3DHP3M = await BirdOracleFDwRyaE.substring.call(stringfKK0V2q, uintDgSl2fF, {from: "0x0000000000000000000000000000000000000001"});
		const 
TnGitoC = await BirdOracleFDwRyaE.updatedChainRequest.call(uintYlqN7e6, uintBGiIcgh, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFDwRyaE = await BirdOracle.new({from: accounts[4]});
		const uintESQY1ic = BigInt("1832")
		const uintFaBifcn = BigInt("1832")
		const stringERG6mmB = "yBQF4PK84xJavOEmCMMALlQi82zTlUg1QdD"
		const uintw04xwgw = BigInt("1578")
		const stringvLSnfti = "FF"
		const uintGUrGY3N = BigInt("263")
		const stringpk9dz8Y = "99AY7WUhY7J0tbnIZrqX6MjJy9X1jfDF58FNoIKoWt3Ylo9Ru8ShuqDH46okRgMiqHTiy88V2FCze8rCKYRb6yvmND9RrM7ESMm"
		const stringFAGlwdU = await BirdOracleFDwRyaE.substring.call(stringERG6mmB, uintFaBifcn, uintESQY1ic, {from: accounts[3]});
		const stringkXoEMCJ = await BirdOracleFDwRyaE.substring.call(stringvLSnfti, uintw04xwgw, {from: accounts[2]});
		const stringzSmRIdV = await BirdOracleFDwRyaE.substring.call(stringpk9dz8Y, uintGUrGY3N, {from: accounts[4]});
	});
})