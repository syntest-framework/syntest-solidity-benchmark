const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleL3FJhrb = await BirdOracle.new({from: accounts[0]});
		const addressiXML39n = accounts[5]
		const stringToevlUH = "GE6lLmy"
		const uinteKzwu9 = BigInt("101")
		const stringFykWOGZ = "Y0nsdhZf0WEWfLkkr5Px8SNS2skcSmjZWf4Gek5EtTNMcAJ8QCdMuo5N7IVHVKcP2FBJDjkv"
		const uintuJB0hlx = BigInt("666")
		const uintNUn76aT = BigInt("1873")
		const uintVzU8Dxy = await BirdOracleL3FJhrb.getRating.call({from: accounts[4]});
		const uintEL7ZUyU = await BirdOracleL3FJhrb.getRatingByAddress.call(addressiXML39n, {from: accounts[3]});
		const stringXfDvbOJ = await BirdOracleL3FJhrb.extractAddress.call(stringToevlUH, {from: accounts[2]});
		const stringHf8B3cR = await BirdOracleL3FJhrb.substring.call(stringFykWOGZ, uinteKzwu9, {from: accounts[1]});
		const 
LbEzkS = await BirdOracleL3FJhrb.updatedChainRequest.call(uintNUn76aT, uintuJB0hlx, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintbCP9IU1 = BigInt("1477")
		const uintILXAxwW = BigInt("1645")
		const uintU42ZL4t = BigInt("1526")
		const uintaWfiay = BigInt("101")
		const stringCNvGTpD = "kHCE6gFoLo4COTwyaqUluUFpagsRMP0R26rfIXBNCxdMRzGqnrhlHouXQqpadNhozFPtxYHEU23YdYRZfxmuPzSPSX7"
		const uint2tui1X = await BirdOracleqzHFbBc.getRating.call({from: accounts[4]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintILXAxwW, uintbCP9IU1, {from: accounts[2]});
		const stringD1DZgiL = await BirdOracleqzHFbBc.substring.call(stringCNvGTpD, uintaWfiay, uintU42ZL4t, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleIeLKKmP = await BirdOracle.new({from: accounts[3]});
		const addressnSqMD7A = "0x0000000000000000000000000000000000000001"
		const addressQnvYF3H = accounts[0]
		const stringwAAAbez = "AGflklAEfc0U2kEG0oZGYpG4YEHMy7aerGbUyfGj58z4zvPLOulEqoC3C2UPhePxVs"
		const stringBHpZLXf = "TtRfTFtnN4hZKNr7dnAJWJvXE5GrUr4MPstmg1jvJ01qy9"
		const uintELNqxJY = await BirdOracleIeLKKmP.getRatingByAddress.call(addressnSqMD7A, {from: accounts[4]});
		const uintqbDN94N = await BirdOracleIeLKKmP.getRatingByAddress.call(addressQnvYF3H, {from: accounts[4]});
		const 
HjI8A9M = await BirdOracleIeLKKmP.newChainRequest.call(stringBHpZLXf, stringwAAAbez, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclexuHs06M = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringVPyFlhj = "Z6Uza"
		const uintYO0prZv = BigInt("1741")
		const stringSKqROcx = "7RJLRpWHgJP6oyo2CBf0D8mNmS83n3636AcwV9YqRGirmTIHHgNyO4mN9GFpfRlc8q3C6EkRM092k7Jwe88Sa0xIx"
		const stringZRq2za = "69zKeUSHnTVrm3NKX4TqfMBNpP5HmEzpb"
		const stringDA3Znf6 = "w3j9UU9lpNo1gqDCCFe61Hdvg1furfgs5aapfwecP8g1WjW4"
		const addressQjKGyh = await BirdOraclexuHs06M.parseAddr.call(stringVPyFlhj, {from: accounts[4]});
		const stringZqdxGf = await BirdOraclexuHs06M.substring.call(stringSKqROcx, uintYO0prZv, {from: accounts[5]});
		const uintIGJ3tTd = await BirdOraclexuHs06M.getRating.call({from: accounts[2]});
		const uintGGn6sA = await BirdOraclexuHs06M.getRatingByAddressString.call(stringZRq2za, {from: accounts[3]});
		const uintq5mkfd3 = await BirdOraclexuHs06M.getRating.call({from: accounts[4]});
		const uintXOblDhc = await BirdOraclexuHs06M.getRatingByAddressString.call(stringDA3Znf6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclexGAHKv5 = await BirdOracle.new({from: accounts[2]});
		const uintoQ60kzs = BigInt("153")
		const stringFuqh5SX = "CJuWUnFls9ghHBEQRBnSN3uwrataKNNrUKssRXtuiW8jiKdTcVUKtJngv4WRAWaZTnxWyaXV8yhMzgL5I"
		const uintHgHfBcP = BigInt("478")
		const uintWHLMciW = BigInt("376")
		const stringbNPl2ol = "3MBjnA43agTTyiMjNdFgeVGHG0Kf4UOdahmp2QgL8Mo7w8YDxPuKHUxgfiMLLpftfdqw5JrL2dQgS64jAWNERMZKBf"
		const stringGKV100r = "naOEgFrKV1I1LxRenG9UtjGHvlSAv31YY2vIJnBNh3q7N0hxzwP1Zhas0xs9PLzGHx5iLe2jZPkuyJp"
		const uintXDqfUJ = BigInt("1693")
		const uintQb6hEni = BigInt("1807")
		const stringIkQEfK7 = await BirdOraclexGAHKv5.substring.call(stringFuqh5SX, uintoQ60kzs, {from: accounts[3]});
		const 
iAEsiuy = await BirdOraclexGAHKv5.updatedChainRequest.call(uintWHLMciW, uintHgHfBcP, {from: "0x0000000000000000000000000000000000000001"});
		const 
m4D4hME = await BirdOraclexGAHKv5.newChainRequest.call(stringGKV100r, stringbNPl2ol, {from: accounts[4]});
		const uintMz7RwE8 = await BirdOraclexGAHKv5.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const 
qtpeADH = await BirdOraclexGAHKv5.updatedChainRequest.call(uintQb6hEni, uintXDqfUJ, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintCfB9viP = BigInt("441")
		const stringBhXgYvw = "mX9qejGzOGrM2zH03QBQd8C43Hnpvx7Mf3Xr1yg9FNO8A2AyvJj4xppKskNQ6I9dR4URHcC"
		const uintO7PNwxe = BigInt("1477")
		const uintnnnpce3 = BigInt("1645")
		const uintEKxok99 = BigInt("1526")
		const uintcKSE1no = BigInt("101")
		const stringCNvGTpD = "kHCE6gFoLo4COTwyaqUluUFpagsRMP0R26rfIXBNCxdMRzGqnrhlHouXQqpadNhozFPtxYHEU23YdYRZfxmuPzSPSX7"
		const uint2tui1X = await BirdOracleqzHFbBc.getRating.call({from: accounts[4]});
		const stringXmndt2p = await BirdOracleqzHFbBc.substring.call(stringBhXgYvw, uintCfB9viP, {from: accounts[2]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintnnnpce3, uintO7PNwxe, {from: accounts[2]});
		const stringD1DZgiL = await BirdOracleqzHFbBc.substring.call(stringCNvGTpD, uintcKSE1no, uintEKxok99, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const addresscu1lonr = accounts[0]
		const uintPqq4Dx6 = BigInt("1102")
		const uintfNKK8dd = BigInt("1924")
		const stringilgC7CD = "TODz6cdXhFlWLp1"
		const uintjH7YkbP = BigInt("1477")
		const uintlI95kaU = BigInt("1638")
		const uint2tui1X = await BirdOracleqzHFbBc.getRating.call({from: accounts[4]});
		const uintiMnraNK = await BirdOracleqzHFbBc.getRatingByAddress.call(addresscu1lonr, {from: accounts[0]});
		const stringU3l9QCz = await BirdOracleqzHFbBc.substring.call(stringilgC7CD, uintfNKK8dd, uintPqq4Dx6, {from: "0x0000000000000000000000000000000000000001"});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintlI95kaU, uintjH7YkbP, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintByphMr = BigInt("1526")
		const uintqVveL5M = BigInt("101")
		const stringCNvGTpD = "kHCE6gFoLo4COTwyaqUluUFpagsRMP0R26rfIXBNCxdMRzGqnrhlHouXQqpadNhozFPtxYHEU23YdYRZfxmuPzSPSX7"
		const addresshWzm7PP = accounts[1]
		const stringZbkphXW = "nq0GUG95KxjajQyMt3knEwxbpB2DHHbL2x4k6Gc"
		const uint2tui1X = await BirdOracleqzHFbBc.getRating.call({from: accounts[4]});
		const stringD1DZgiL = await BirdOracleqzHFbBc.substring.call(stringCNvGTpD, uintqVveL5M, uintByphMr, {from: accounts[4]});
		const uintY69vHe = await BirdOracleqzHFbBc.getRatingByAddress.call(addresshWzm7PP, {from: accounts[5]});
		const uintiIEnLyf = await BirdOracleqzHFbBc.getRatingByAddressString.call(stringZbkphXW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const stringrDtBFSS = "USnT774kaq4HWbEI36SEqqRkFizi7IFOm2Ug4O9qPKS3ns6LK2omrcy5jBdrZHCd"
		const uintERQWAe6 = BigInt("1526")
		const uintl3dArRk = BigInt("101")
		const stringCNvGTpD = "kHCE6gFoLo4COTwyaqUluUFpagsRMP0R26rfIXBNCxdMRzGqnrhlHouXQqpadNhozFPtxYHEU23YdYRZfxmuPzSPSX7"
		const addresssaa3bxr = accounts[2]
		const addressG3MTlsG = accounts[2]
		const addressE2641E = await BirdOracleqzHFbBc.parseAddr.call(stringrDtBFSS, {from: accounts[0]});
		const uint2tui1X = await BirdOracleqzHFbBc.getRating.call({from: accounts[4]});
		const stringD1DZgiL = await BirdOracleqzHFbBc.substring.call(stringCNvGTpD, uintl3dArRk, uintERQWAe6, {from: accounts[4]});
		const uintu8GOkGC = await BirdOracleqzHFbBc.getRatingByAddress.call(addresssaa3bxr, {from: accounts[0]});
		const uintY69vHe = await BirdOracleqzHFbBc.getRatingByAddress.call(addressG3MTlsG, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const stringG1VTINb = "LFMsyzshgrNiKdoBQz3DxsrRpXSiS5ahM9orkboXlzFz2haDTUfcWt9o"
		const uintK7SadN = BigInt("1526")
		const uintnKutOV1 = BigInt("101")
		const stringCNvGTpD = "kHCE6gFoLo4COTwyaqUluUFpagsRMP0R26rfIXBNCxdMRzGqnrhlHouXQqpadNhozFPtxYHEU23YdYRZfxmuPzSPSX7"
		const addressWmjhabE = accounts[2]
		const stringsb7W0bR = "l8re9t92NwxYV1PVFhacx5qBMofNHgEKcaw8ePH8eUwWYox7ytyxDKETu0pVGn"
		const stringucLqrO = "pvNFuzrd1Gwemp"
		const stringZbkphXW = "nq0GUG95KxjajQyMt3knEwxbpB2DHHbL2x4k6Gc"
		const uint2tui1X = await BirdOracleqzHFbBc.getRating.call({from: accounts[4]});
		const uintFn21G3W = await BirdOracleqzHFbBc.getRatingByAddressString.call(stringG1VTINb, {from: accounts[3]});
		const stringD1DZgiL = await BirdOracleqzHFbBc.substring.call(stringCNvGTpD, uintnKutOV1, uintK7SadN, {from: accounts[4]});
		const uintY69vHe = await BirdOracleqzHFbBc.getRatingByAddress.call(addressWmjhabE, {from: accounts[5]});
		const 
No0BZNy = await BirdOracleqzHFbBc.newChainRequest.call(stringucLqrO, stringsb7W0bR, {from: accounts[2]});
		const uintiIEnLyf = await BirdOracleqzHFbBc.getRatingByAddressString.call(stringZbkphXW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintdZd5NXi = BigInt("929")
		const stringb2LpFPP = "EecKXYx17Bj7AIEyJ"
		const stringGaatZo = "G4mJBHtrbNR53qjRTBzNKQ"
		const uintXQzTv71 = BigInt("1474")
		const uintJkz1Yc6 = BigInt("1634")
		const stringEfKUym3 = await BirdOracleqzHFbBc.substring.call(stringb2LpFPP, uintdZd5NXi, {from: "0x0000000000000000000000000000000000000001"});
		const uintjswyYhT = await BirdOracleqzHFbBc.getRatingByAddressString.call(stringGaatZo, {from: accounts[2]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintJkz1Yc6, uintXQzTv71, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintxc6DGgi = BigInt("1812")
		const stringFSlWYYU = "79hvYjYE5ch7ogUoq4lMlgjNuEOmczVWR48KM86ICuG6TuaoFr7orHKsdPlMQfTNoOLe04Vg6dZLssgDvNs3PJp"
		const stringoNhlSBH = "jaxew"
		const uintQtPdTHP = BigInt("1474")
		const uintKIQihdH = BigInt("1645")
		const stringYtKmURC = await BirdOracleqzHFbBc.substring.call(stringFSlWYYU, uintxc6DGgi, {from: accounts[4]});
		const uintcqOId19 = await BirdOracleqzHFbBc.getRatingByAddressString.call(stringoNhlSBH, {from: accounts[3]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintKIQihdH, uintQtPdTHP, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintIUPqaN = BigInt("114")
		const stringgYrcJkt = "PghaqI2KOKIYWqRkAtEDhjMYf6EgtdJ9X4xWPCNcSYJjfsbmzJ2U0dE8u2sd6RftBzxEihOO1tBaCzkwBofwpqdBoU8lG"
		const uintHKBKuDc = BigInt("1474")
		const uintAVjfgR = BigInt("1645")
		const uintAXtuBSI = BigInt("1131")
		const stringK7gD1mY = "8HraIq3tGQ"
		const stringOxVaHDl = await BirdOracleqzHFbBc.substring.call(stringgYrcJkt, uintIUPqaN, {from: accounts[5]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintAVjfgR, uintHKBKuDc, {from: accounts[2]});
		const stringJ6jig2 = await BirdOracleqzHFbBc.substring.call(stringK7gD1mY, uintAXtuBSI, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintYL0kvu = BigInt("1696")
		const stringtzERV2H = "TLRU"
		const uintmrizq7 = BigInt("1402")
		const stringlqIOMJc = "k21YJhH6a4ex2NEa32yNWoCUftraLFNuXfV8iMnAhhyL6WykXiFnGSL6GYWZMu"
		const uintIZQLzeL = BigInt("1518")
		const uintvDCPB6a = BigInt("1645")
		const stringYWLWogB = await BirdOracleqzHFbBc.substring.call(stringtzERV2H, uintYL0kvu, {from: accounts[1]});
		const stringqjkc6AE = await BirdOracleqzHFbBc.substring.call(stringlqIOMJc, uintmrizq7, {from: accounts[2]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintvDCPB6a, uintIZQLzeL, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintjxjXyl4 = BigInt("587")
		const uint0aUySb = BigInt("587")
		const stringCNvGTpD = "kHCE6gFoLo4OTwyaqUluUFpagsRMP0R26rfIXBNCxdMRzGqnrhlHouXQqpadNhozFPtxYHEU23YdYRZfxmuPzSPSX7"
		const addressTilsiYe = accounts[1]
		const stringD1DZgiL = await BirdOracleqzHFbBc.substring.call(stringCNvGTpD, uint0aUySb, uintjxjXyl4, {from: accounts[4]});
		const uintHKLrCs1 = await BirdOracleqzHFbBc.getRatingByAddress.call(addressTilsiYe, {from: accounts[5]});
		const uintkbTXvQ8 = await BirdOracleqzHFbBc.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqzHFbBc = await BirdOracle.new({from: accounts[3]});
		const uintiBLP0pv = BigInt("1980")
		const stringRwCYPrA = "hCWw1gKMNCllm6v5dfExkAW1Fz9jPu9iZJiwaoQTv0A5sh7N3uCqlBKom1jqSMLbmUzILEgDp"
		const uintzFUvCdt = BigInt("7")
		const stringhSz8DjF = "mRpWMMwqsajMTYt1wtyHehXoeTyKP9XTe"
		const uintNFAeong = BigInt("1474")
		const uintSJLL14u = BigInt("1645")
		const stringsrUqZr3 = await BirdOracleqzHFbBc.substring.call(stringRwCYPrA, uintiBLP0pv, {from: accounts[0]});
		const stringnnC5ajU = await BirdOracleqzHFbBc.substring.call(stringhSz8DjF, uintzFUvCdt, {from: accounts[2]});
		const 
mSst6sL = await BirdOracleqzHFbBc.updatedChainRequest.call(uintSJLL14u, uintNFAeong, {from: accounts[2]});
	});
})