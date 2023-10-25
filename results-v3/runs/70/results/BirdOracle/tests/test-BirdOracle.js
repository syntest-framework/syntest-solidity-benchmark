const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleBwbawV = await BirdOracle.new({from: accounts[5]});
		const stringKS8HWBD = "OlqvAWxvckYaVaaeVQuftylcR48gYKfmf3sS6opTdGQocZhgLXX9tVKP5FQlbQKX"
		const stringIsPyU1g = "Hu9QHXUigHtOu0vT6xLCuwf2dH4ZHoIOeayQkEsMuuoAKgzhrRS9YGyo08mTumItoVCtP2hJentcTVtR2za42zGPJ6Gqa"
		const uintJmcy81f = BigInt("1010")
		const uintkZF4ZAk = BigInt("1116")
		const uintUI9mwjo = BigInt("1621")
		const uinthmOV9Sp = BigInt("522")
		const stringkzBr0Cw = "kTKEMdglgnCv7G23DOtmPqpm8ETjCxRD4PBXQiANkC9XAE4bMyH42hc"
		const 
njClrjo = await BirdOracleBwbawV.newChainRequest.call(stringIsPyU1g, stringKS8HWBD, {from: accounts[5]});
		const 
Kf8ffW3 = await BirdOracleBwbawV.updatedChainRequest.call(uintkZF4ZAk, uintJmcy81f, {from: accounts[1]});
		const stringlWCuAEh = await BirdOracleBwbawV.substring.call(stringkzBr0Cw, uinthmOV9Sp, uintUI9mwjo, {from: accounts[0]});
		const uintvHRiop6 = await BirdOracleBwbawV.getRating.call({from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclebOIwoNr = await BirdOracle.new({from: accounts[4]});
		const uintCgsiGOG = BigInt("1937")
		const stringnVSqaXz = "VdFEJFwTSBayGNnXRtt1AMkfzfVVVbnHQI6veXMI6B4VqXaMYPCQUVwxeumaXm8IOkSFtp2MV5Mtgsib7OMp"
		const uintLCYOHj3 = BigInt("67")
		const uintbPYbO22 = BigInt("1602")
		const string8r2GXQ = "AtNQoANw4MMjXC13h4PEcHR"
		const addressoxK16WT = "0x0000000000000000000000000000000000000001"
		const uintYl2Xt3g = BigInt("275")
		const stringjUNu8g = "MhMGFdKT2lQIX5fF7jTb7464hUmg1pqypUqu9lljKLoEyp0dMaUW9BwXH0d5PTvED4iebT8RYVS7zaInCrM0ycJu94Aogjn"
		const uintE4KR22R = BigInt("1076")
		const uinteujGsok = BigInt("1213")
		const stringdaozaC8 = "XkqzAsptrrI6qV0wc"
		const stringjhYwOtk = await BirdOraclebOIwoNr.substring.call(stringnVSqaXz, uintCgsiGOG, {from: accounts[1]});
		const stringbnPWzjH = await BirdOraclebOIwoNr.substring.call(string8r2GXQ, uintbPYbO22, uintLCYOHj3, {from: "0x0000000000000000000000000000000000000001"});
		const uintjNV1E6 = await BirdOraclebOIwoNr.getRatingByAddress.call(addressoxK16WT, {from: accounts[2]});
		const string1ju9Ec = await BirdOraclebOIwoNr.substring.call(stringjUNu8g, uintYl2Xt3g, {from: accounts[4]});
		const string29CUOJ = await BirdOraclebOIwoNr.substring.call(stringdaozaC8, uinteujGsok, uintE4KR22R, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclesCjrFXZ = await BirdOracle.new({from: accounts[2]});
		const stringFQVkxw3 = "dv9zEAUHAhRsxVkfkVENoLDpe6prAm5XnWEuxaQwsCsViU7u80RSMtobXhGs8MNmMR6LLGdlJvCk"
		const stringYv1BkPE = "sii4UiPdgzlKsc3AYNVeK068c750uWyMKixE3PwlkD9k6BY5SyX8xO6ywCb4zSLKaPkBKlW71M1G9vnxb8CyYXiioG0lVAs"
		const uintNbDTBUk = await BirdOraclesCjrFXZ.getRating.call({from: accounts[1]});
		const stringO9MwkuU = await BirdOraclesCjrFXZ.extractAddress.call(stringFQVkxw3, {from: accounts[3]});
		const uintqB4MdeX = await BirdOraclesCjrFXZ.getRatingByAddressString.call(stringYv1BkPE, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleS0bp6jX = await BirdOracle.new({from: accounts[0]});
		const uintKyXaGP = BigInt("1917")
		const stringKQGiSsa = "RcnX3be5XH3ADSvsrk4sPqe5pswiw1F2jyGQqy9LODKMy7mBq"
		const stringeJEwz6q = "UTGr"
		const uintnJxviZs = BigInt("15")
		const stringbNiG7S = "QC4hRo0Qaysu3VBnn5xlf2h3rveI5yNRB7Ew1DyYVz13jwaA54n5qPp7HfgpMz7qOtx6i9pgsylN82"
		const stringwz2RLwr = await BirdOracleS0bp6jX.substring.call(stringKQGiSsa, uintKyXaGP, {from: accounts[3]});
		const uintXFkCmLp = await BirdOracleS0bp6jX.getRatingByAddressString.call(stringeJEwz6q, {from: accounts[1]});
		const uinto4FuaRO = await BirdOracleS0bp6jX.getRating.call({from: accounts[0]});
		const stringsRXR7W = await BirdOracleS0bp6jX.substring.call(stringbNiG7S, uintnJxviZs, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOSc8r2U = await BirdOracle.new({from: accounts[3]});
		const stringsPhJ7AW = "KvmYo0gKN9dYaN6W6iTIQF"
		const addressDBEzKUt = accounts[0]
		const stringxdJnHmE = "pOUETM9gNekYSApKhlQMWTKhmSE2Y9bYZ3uROXLcz5Xj"
		const stringf6OmqeQ = "qRRfkNWqWzwnQ8m5IQLpn"
		const uintFubjfRW = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringsPhJ7AW, {from: accounts[1]});
		const uintXwqPVFR = await BirdOracleOSc8r2U.getRatingByAddress.call(addressDBEzKUt, {from: accounts[0]});
		const uintOzWPkbF = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringxdJnHmE, {from: accounts[3]});
		const stringsMSj791 = await BirdOracleOSc8r2U.extractAddress.call(stringf6OmqeQ, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEHjPWEf = await BirdOracle.new({from: accounts[3]});
		const uint8BYOOs = BigInt("1012")
		const uintc3t153M = BigInt("954")
		const uintxJH9cEU = BigInt("1618")
		const uintBo0LCiS = BigInt("1952")
		const string1qWd69 = "APntyre6I2mKQGNmNKLsZVpaf6qslCEi56fDOQ5AHM3pcqDn8KYH7f2PJKG1FsgnJw1zdXHKr9LPnt9gy"
		const stringmxwRbHL = "B0illtkeDThfKTFj5HxdsLaVs3ACNA1qqseDMnwVBJjhSgM1VT8Cvr4L2"
		const 
vEf8HeY = await BirdOracleEHjPWEf.updatedChainRequest.call(uintc3t153M, uint8BYOOs, {from: accounts[0]});
		const stringkPH1TRX = await BirdOracleEHjPWEf.substring.call(string1qWd69, uintBo0LCiS, uintxJH9cEU, {from: accounts[3]});
		const stringwcqtXAu = await BirdOracleEHjPWEf.extractAddress.call(stringmxwRbHL, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleQT2Mdr = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzy3dkjD = BigInt("568")
		const uintu1Hgnvl = BigInt("160")
		const stringhiMvglP = "e6KxzkHm8tGPxazyjYgqvkXSz2QHx"
		const stringUqu1KiT = "aEFkXORutehCs9z5Gx7DebLBwUgeJq728NfIVZXC740Kz3hrVvuVahgAliQWIRglCcagcfEt9aEUsmumKyNQKLkGXcqIJYc"
		const uints7hmLF = BigInt("1342")
		const uintJpa1aeH = BigInt("1178")
		const stringBwuAwu = "dKH5Oxkc9XDIyGf5pGxUwR2gUak7"
		const stringMxsEwbO = await BirdOracleQT2Mdr.substring.call(stringhiMvglP, uintu1Hgnvl, uintzy3dkjD, {from: accounts[1]});
		const uintLLWTEAt = await BirdOracleQT2Mdr.getRatingByAddressString.call(stringUqu1KiT, {from: accounts[3]});
		const stringX0VTRRV = await BirdOracleQT2Mdr.substring.call(stringBwuAwu, uintJpa1aeH, uints7hmLF, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclexh7sQX = await BirdOracle.new({from: accounts[0]});
		const uintAXarva0 = BigInt("312")
		const uintGlSHqxF = BigInt("485")
		const stringPMxvQt = "yWmYTLTFRrQjOeLL2cd7wGk0y"
		const stringm0GETgs = "BpoSlSTKie9ywN81T1KdGnLyW31OguwBOfWtFSj1p"
		const stringbT7WQoJ = "q1S6viawcN"
		const stringdt7SRqz = await BirdOraclexh7sQX.substring.call(stringPMxvQt, uintGlSHqxF, uintAXarva0, {from: accounts[4]});
		const stringE3myWqO = await BirdOraclexh7sQX.extractAddress.call(stringm0GETgs, {from: "0x0000000000000000000000000000000000000001"});
		const uintLclyqs = await BirdOraclexh7sQX.getRatingByAddressString.call(stringbT7WQoJ, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEHjPWEf = await BirdOracle.new({from: accounts[3]});
		const addressTGf0rBm = accounts[0]
		const uinteYtRHMJ = BigInt("1012")
		const uintkX1ttPP = BigInt("954")
		const stringThvGLXy = "SzGDmusNI9eHand4Yf65kDxr9ov7"
		const uintgNvRJ4j = BigInt("1618")
		const uintU79IiNS = BigInt("1952")
		const string1qWd69 = "APntyre6I2mKQGNmNKLsZVpaf6qslCEi56fDOQ5AHM3pcqDn8KYH7f2PJKG1FsgnJw1zdXHKr9LPnt9gy"
		const stringmxwRbHL = "B0illtkeDThfKTFj5HxdsLaVs3ACNA1qqseDMnwVBJjhSgM1VT8Cvr4L2"
		const uintpXbSJIj = await BirdOracleEHjPWEf.getRatingByAddress.call(addressTGf0rBm, {from: accounts[5]});
		const 
vEf8HeY = await BirdOracleEHjPWEf.updatedChainRequest.call(uintkX1ttPP, uinteYtRHMJ, {from: accounts[0]});
		const uintHSgMYH = await BirdOracleEHjPWEf.getRatingByAddressString.call(stringThvGLXy, {from: "0x0000000000000000000000000000000000000001"});
		const stringkPH1TRX = await BirdOracleEHjPWEf.substring.call(string1qWd69, uintU79IiNS, uintgNvRJ4j, {from: accounts[3]});
		const stringwcqtXAu = await BirdOracleEHjPWEf.extractAddress.call(stringmxwRbHL, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEHjPWEf = await BirdOracle.new({from: accounts[3]});
		const uinto8nl2ob = BigInt("234")
		const stringRRJNXJy = "IWHNrjTFa"
		const uintWFE2LWz = BigInt("757")
		const uintF2xwNOY = BigInt("954")
		const uintAAYthLS = BigInt("1618")
		const uintozcasTd = BigInt("1952")
		const string1qWd69 = "APntyre6I2mKQGNmNKLsZVpaf6qslCEi56fDOQ5AHM3pcqDn8KYH7f2PJKG1FsgnJw1zdXHKr9LPnt9gy"
		const stringqAxWXnz = await BirdOracleEHjPWEf.substring.call(stringRRJNXJy, uinto8nl2ob, {from: accounts[4]});
		const 
vEf8HeY = await BirdOracleEHjPWEf.updatedChainRequest.call(uintF2xwNOY, uintWFE2LWz, {from: accounts[0]});
		const stringkPH1TRX = await BirdOracleEHjPWEf.substring.call(string1qWd69, uintozcasTd, uintAAYthLS, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOSc8r2U = await BirdOracle.new({from: accounts[3]});
		const uintUMtmPIi = BigInt("994")
		const stringSaTSsia = "UtGRrPvk1mNHEF1FOXJN7jH0GKCgAQxr1nYDALgE"
		const stringsPhJ7AW = "KvmFYo0gKN9dYaN6W6iTIQF"
		const stringf6OmqeQ = "qRRfkNWqWzwnQ8m5IQLpn"
		const stringD1MyaZZ = await BirdOracleOSc8r2U.substring.call(stringSaTSsia, uintUMtmPIi, {from: accounts[5]});
		const uintFubjfRW = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringsPhJ7AW, {from: accounts[1]});
		const stringsMSj791 = await BirdOracleOSc8r2U.extractAddress.call(stringf6OmqeQ, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEHjPWEf = await BirdOracle.new({from: accounts[3]});
		const uintd7PT0x = BigInt("1442")
		const string9DCp1r = "vOTzNOqyL3ppBcm2cAThQx7ecxK4r5mYpzgcJsJ9qCXkf8dWoNvfmtEo4CwdhMw1AlFadwm"
		const uintM7CP14 = BigInt("582")
		const uintNl7sV8V = BigInt("1238")
		const addressOHOIfBi = "0x0000000000000000000000000000000000000001"
		const stringzPfwptT = await BirdOracleEHjPWEf.substring.call(string9DCp1r, uintd7PT0x, {from: "0x0000000000000000000000000000000000000001"});
		const 
vEf8HeY = await BirdOracleEHjPWEf.updatedChainRequest.call(uintNl7sV8V, uintM7CP14, {from: accounts[0]});
		const uintDH7ZhQk = await BirdOracleEHjPWEf.getRatingByAddress.call(addressOHOIfBi, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOSc8r2U = await BirdOracle.new({from: accounts[3]});
		const uintjdCbq0U = BigInt("380")
		const stringh3a2MVI = "VHuU0ZNcJCsCVPJPIEzqN1HQCg11Ankrnp0LKzGROAzQwadPYP3UynpXnNsK5K2B9JUlioHiiTP9JbP"
		const stringsPhJ7AW = "KvmYo0gHKN9dYaN6W6iTIQF"
		const stringkxSarR = await BirdOracleOSc8r2U.substring.call(stringh3a2MVI, uintjdCbq0U, {from: accounts[0]});
		const uintFubjfRW = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringsPhJ7AW, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOSc8r2U = await BirdOracle.new({from: accounts[3]});
		const uintEdsgvYx = BigInt("1320")
		const uintvQd8uMt = BigInt("1209")
		const stringDKT394A = "3IczYaOy0XsFDsiNDkFGTE42tPUAp8kWxuf66EIVMAoZbuPsdQXLLCN7SxEt8YbpyqUApWQ6HLQi2n0s7NOz6iDalOqroICa"
		const stringsPhJ7AW = "KvmYo0gKN9dYjN6W6iTIQF"
		const stringivu1FIu = "zPdfFcLejXpj7kBJSxkxecyAm6HC5dzaellWEkb4kyLDDHPt2FFAF4L1cb5xu1vTqlm"
		const stringt72ROMf = await BirdOracleOSc8r2U.substring.call(stringDKT394A, uintvQd8uMt, uintEdsgvYx, {from: accounts[0]});
		const uintFubjfRW = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringsPhJ7AW, {from: accounts[1]});
		const uintDVDut2g = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringivu1FIu, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOSc8r2U = await BirdOracle.new({from: accounts[3]});
		const stringivu1FIu = "zPdfFcLejXpj7kBJSxkxecyAm6HC5dzaellWEkb4kyLDDHPt2FFAF4L1cb5xu1vTqlm"
		const uintDVDut2g = await BirdOracleOSc8r2U.getRatingByAddressString.call(stringivu1FIu, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEHjPWEf = await BirdOracle.new({from: accounts[3]});
		const addressTFENuV3 = "0x0000000000000000000000000000000000000001"
		const uintYn3Dox7 = BigInt("446")
		const stringDbnBXK = "J1VL3l3zONb4al9Pw7LOeyXgzog8F0q9iQKUD8xYPMbj"
		const uintLEsLE4h = BigInt("581")
		const uintiVKT7I4 = BigInt("954")
		const stringGkyxqEV = "NdzT3uUGYboKIpQVCmaoVgSVlgibruiqz6w8vJe8ChStMYpoJFLyCOrWBVmJ9yV480yxNvipoubhzgKjymdiJcQS2twf"
		const uintjp4xNOU = await BirdOracleEHjPWEf.getRatingByAddress.call(addressTFENuV3, {from: accounts[3]});
		const stringl2WOxxC = await BirdOracleEHjPWEf.substring.call(stringDbnBXK, uintYn3Dox7, {from: accounts[2]});
		const 
vEf8HeY = await BirdOracleEHjPWEf.updatedChainRequest.call(uintiVKT7I4, uintLEsLE4h, {from: accounts[0]});
		const uintN9MhXpo = await BirdOracleEHjPWEf.getRatingByAddressString.call(stringGkyxqEV, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOSc8r2U = await BirdOracle.new({from: accounts[3]});
		const uintlABhceK = BigInt("1295")
		const uintUXmkNiZ = BigInt("1295")
		const stringDKT394A = "3IczYaOy0XsFDsiNDkFGTE42tPUAp8kWxuf66EIVMAoZbuPsdQXLLCN7SxEt8YbpyqUApWQ6HLQi2n0s7NOz6iDalOqroICa"
		const stringt72ROMf = await BirdOracleOSc8r2U.substring.call(stringDKT394A, uintUXmkNiZ, uintlABhceK, {from: accounts[0]});
	});
})