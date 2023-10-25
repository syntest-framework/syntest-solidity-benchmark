const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclermcQzn6 = await BirdOracle.new({from: accounts[2]});
		const stringVA52upc = "dGwhHmLyOXDHl5AYcXtDma5D8BMRgQdER9boOs9q5WRRbc5BBkArNuio8ody10FkUvnkt"
		const addressjB8Ktq = "0x0000000000000000000000000000000000000001"
		const stringXT8BXio = "cQD6yF6j5JJEGcFmqWooba3Xyu3mH3FYlzjabdcynFBcx4kPp3O8LRnSyYCCW12sbBK"
		const stringHogR7nX = "fzrb8qOZBqc2AADpOnlqKREZNjdZ4QMn7R0HI4OrfFX7MtLziXZjn9WA9e3oZtRx3K"
		const uintmRLhjV = BigInt("1433")
		const stringRotDRI = "vbIGErEm8DFESWnE6zc5eoPr48p8R8tCm5FtZEJTkKAMdlcu7aYbNaeAyYpHkvqvaxS0urKGX89ykrDztCYshK1ioQN6"
		const stringEWX38Dy = await BirdOraclermcQzn6.extractAddress.call(stringVA52upc, {from: accounts[2]});
		const uintNJH8oWY = await BirdOraclermcQzn6.getRatingByAddress.call(addressjB8Ktq, {from: accounts[4]});
		const uintmi7OOs6 = await BirdOraclermcQzn6.getRating.call({from: accounts[1]});
		const 
T1fpss = await BirdOraclermcQzn6.newChainRequest.call(stringHogR7nX, stringXT8BXio, {from: accounts[5]});
		const stringXKhY5U = await BirdOraclermcQzn6.substring.call(stringRotDRI, uintmRLhjV, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFKELnRE = await BirdOracle.new({from: accounts[1]});
		const uintx5zrPOa = BigInt("1630")
		const uinttoUUEea = BigInt("1608")
		const stringjuJxoL = "igM12mq1WVcQBIV3tkbM3IRstQJoGrclpRdTmAOMqet9dwz"
		const stringyj1d71E = "UdMBpy4GymhRR7llaTu7dQBtqIpbJwCwF0ADnXp5BRo5nkpxiVYwyo2gDCeTbGDIwy3JUcs7ufvVfgFfIkQBjL7OKNRGoXJKU"
		const stringLmX0SDS = "x3amNCG3DvappUQfi86vkrLoezzFAQWJFhJQEkWQgP9xYre1Mn3Ahn3gDgxDiPh97zrT2FGIK4fRAGz26ik1"
		const uintFhSsLg4 = BigInt("1366")
		const uintZa0GStJ = BigInt("505")
		const stringEF6hlNQ = "5DRx6WklWqWwzieCPrezYVMKt4vmia3SBWjS6aa3jV7OLpcobrGGtBuv4rE"
		const string45VlKR = await BirdOracleFKELnRE.substring.call(stringjuJxoL, uinttoUUEea, uintx5zrPOa, {from: accounts[3]});
		const stringeF9hRvH = await BirdOracleFKELnRE.extractAddress.call(stringyj1d71E, {from: accounts[3]});
		const uintRDjmge2 = await BirdOracleFKELnRE.getRatingByAddressString.call(stringLmX0SDS, {from: accounts[3]});
		const stringpzYolKe = await BirdOracleFKELnRE.substring.call(stringEF6hlNQ, uintZa0GStJ, uintFhSsLg4, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqOEOqYu = await BirdOracle.new({from: accounts[4]});
		const address0TMWV8 = accounts[2]
		const uint42WlHu = BigInt("603")
		const stringtaslmyb = "FOuNpm0m98AzhFjS5HRnNJC71OoVzNzezEmcYAhF8HxYPnx96sCR4DAEmrBHJuCt4fz5ZkEImM9puDMieawl4wEu61zDeia1V9O"
		const uintTv2Bf1p = BigInt("1096")
		const uintQW4CR1v = BigInt("556")
		const uintVvgo5zI = BigInt("1903")
		const uintYNXmNl1 = BigInt("483")
		const uintoQf7OM2 = await BirdOracleqOEOqYu.getRatingByAddress.call(address0TMWV8, {from: accounts[0]});
		const stringdsKRZXq = await BirdOracleqOEOqYu.substring.call(stringtaslmyb, uint42WlHu, {from: accounts[1]});
		const 
oh3InM = await BirdOracleqOEOqYu.updatedChainRequest.call(uintQW4CR1v, uintTv2Bf1p, {from: accounts[4]});
		const 
MoQpCfW = await BirdOracleqOEOqYu.updatedChainRequest.call(uintYNXmNl1, uintVvgo5zI, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleTBjiGiW = await BirdOracle.new({from: accounts[0]});
		const uintk83fc3n = BigInt("100")
		const uintsckomlY = BigInt("108")
		const uintRwCAErb = BigInt("1023")
		const stringQbuVUBY = "xgCNljhFFSGEWKVZg952KOyNjuzAK2TCMGV3r4R9S9E"
		const stringHNeUF6S = "y49Wc6whEdynOCh7CGcvkT5aeSqXdg"
		const stringkhSs3Ou = "ASYm5ch0wJrHiPPK2I4yV6OMBRCDXyHP4xJ7f9h9qXLIIXE"
		const uintc2zMYpb = BigInt("1898")
		const uintwYJU6X9 = BigInt("1962")
		const stringFvfbYfp = "JrWFUqq5OUPKLstqu4yp7oa7kwgfk4CcTAL8gKSXgaRfANkODOxq8Cs1chRAtuWUrsFuwVJqJe4dgi0hPr3onpVuJ22"
		const stringS2tY3tq = "kxG6MSfolVo1rMQak2zFddqocFDlc9oGGD51ilNQ4hkC2eBdr58ePmeiNyX89YWN0b7jBQj57K8zi783VrfrH9MEgUmc"
		const stringLLzcXx2 = "mAqKrbptaMW7DWH7oyZMO63A3MNS7IjzTQmMUTtO6vGEyi"
		const uintBjIxOp9 = BigInt("24")
		const uintYFwppxb = BigInt("433")
		const stringZzhFad = "2WoWdmbMOWpBB9p5yG1FpQPoA73Ce6wHpjgw41uObsYzYiYVOdUkiSBKkIybrJVrb2v3uNXVTaJPsV35hm2a4IZIGH"
		const 
lLUmHSF = await BirdOracleTBjiGiW.updatedChainRequest.call(uintsckomlY, uintk83fc3n, {from: accounts[4]});
		const stringbhO5oOw = await BirdOracleTBjiGiW.substring.call(stringQbuVUBY, uintRwCAErb, {from: accounts[0]});
		const 
koB9XUA = await BirdOracleTBjiGiW.newChainRequest.call(stringkhSs3Ou, stringHNeUF6S, {from: accounts[3]});
		const stringZguR37U = await BirdOracleTBjiGiW.substring.call(stringFvfbYfp, uintwYJU6X9, uintc2zMYpb, {from: accounts[1]});
		const 
fsPP1Xb = await BirdOracleTBjiGiW.newChainRequest.call(stringLLzcXx2, stringS2tY3tq, {from: accounts[3]});
		const stringKoBg4oP = await BirdOracleTBjiGiW.substring.call(stringZzhFad, uintYFwppxb, uintBjIxOp9, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNAmV24r = await BirdOracle.new({from: accounts[2]});
		const stringsFEWJHY = "PyPS9q7njvbFbm71FmEzRAIu7aQLlYddXTXLN3GxokdyXvSIqapcB21jN7YtOY"
		const uint2wukho = BigInt("979")
		const uintx6affyT = BigInt("1874")
		const stringfxyBd1H = "v70Bnu"
		const uintztUFHx4 = await BirdOracleNAmV24r.getRatingByAddressString.call(stringsFEWJHY, {from: accounts[4]});
		const 
zE5bgPX = await BirdOracleNAmV24r.updatedChainRequest.call(uintx6affyT, uint2wukho, {from: accounts[4]});
		const uintqDlnRCe = await BirdOracleNAmV24r.getRatingByAddressString.call(stringfxyBd1H, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGBwqfwe = await BirdOracle.new({from: accounts[2]});
		const stringF2a8N3K = "Zts6lsgWGq3XVCVwCLhCKFsDeuakCB5ojNCN2wgwZd0P8lJwLR1m8u9Ku7sahVaRVVIOXSjgAcNHJFjiTKR"
		const addressbqaOPwp = accounts[1]
		const addressRUbzSn = accounts[1]
		const uintH77h0aI = BigInt("2002")
		const uintFLb3YQZ = BigInt("1833")
		const uintw00SkJc = await BirdOracleGBwqfwe.getRating.call({from: accounts[5]});
		const uintzvcYOKw = await BirdOracleGBwqfwe.getRatingByAddressString.call(stringF2a8N3K, {from: accounts[1]});
		const uintxfdLUQj = await BirdOracleGBwqfwe.getRatingByAddress.call(addressbqaOPwp, {from: accounts[2]});
		const uintrS86JOu = await BirdOracleGBwqfwe.getRatingByAddress.call(addressRUbzSn, {from: "0x0000000000000000000000000000000000000001"});
		const 
zraiYi4 = await BirdOracleGBwqfwe.updatedChainRequest.call(uintFLb3YQZ, uintH77h0aI, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclek0NFf0 = await BirdOracle.new({from: accounts[5]});
		const uinti7KskSW = BigInt("924")
		const uintcmz4hlj = BigInt("927")
		const stringH0Pe3lj = "AeZ9pR3c5U9z4opmdb"
		const stringOQsoTAP = "pBI3IiklRuhqUSTtq9WPd2B"
		const stringPmJhz4D = await BirdOraclek0NFf0.substring.call(stringH0Pe3lj, uintcmz4hlj, uinti7KskSW, {from: accounts[1]});
		const stringBqnfrVY = await BirdOraclek0NFf0.extractAddress.call(stringOQsoTAP, {from: accounts[1]});
		const uintJXEOxp9 = await BirdOraclek0NFf0.getRating.call({from: accounts[0]});
		const uintcwdHj3C = await BirdOraclek0NFf0.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const uintuXSBPgg = await BirdOraclek0NFf0.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNAmV24r = await BirdOracle.new({from: accounts[2]});
		const uintRMFdC9z = BigInt("604")
		const stringYujcIJB = "iXfqjtvBFx5LKot1kMMlYs4h"
		const stringsFEWJHY = "PyPS9q7njvbFbm71FmEzRAIu7aQLlYddXTXLN3GxokdyXvSIqapcB21jQN7YtOY"
		const stringl4Aqptr = "Bvwqt84iBwHA9fN5o"
		const stringwvU04o1 = "p1YRRSrOTlwapFaN2"
		const stringE00vFyQ = await BirdOracleNAmV24r.substring.call(stringYujcIJB, uintRMFdC9z, {from: accounts[3]});
		const uintztUFHx4 = await BirdOracleNAmV24r.getRatingByAddressString.call(stringsFEWJHY, {from: accounts[4]});
		const 
uFicDz8 = await BirdOracleNAmV24r.newChainRequest.call(stringwvU04o1, stringl4Aqptr, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleMyQEwB = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringyQcQLiw = "7cpxHxaUlXENtZ9i5iFvhMvCvlkffpOXWpnftvbtUKw7RGUME7Wviy40fgxTbuNqQzK3rJfw7UvxtXF8SYE10"
		const uintjaFseFR = BigInt("1641")
		const uintFfNEFQI = BigInt("898")
		const stringoyqv9bg = "JBuYy7mlHHUKSx3cs6k3H18CHzzx04KYo7R4FyjnFCb99w3F61oKFmOoyYSVv8c"
		const uintK9H6m6b = await BirdOracleMyQEwB.getRatingByAddressString.call(stringyQcQLiw, {from: accounts[3]});
		const stringqumuPf = await BirdOracleMyQEwB.substring.call(stringoyqv9bg, uintFfNEFQI, uintjaFseFR, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNAmV24r = await BirdOracle.new({from: accounts[2]});
		const stringC0rwvN = "S19m9zxzY5MH0Y5tDAt933IDKuP9SyQDW22xCm019bioFfL8BjCjV3A7A44AA5R"
		const stringMdhAIs = "UlWTNV5Idz6jNmXczkq2LTEaxqTdAIWl2wO3qQAWnETg7Jd4C8NgQecJy0QZHu6CeQMaFC26WqxeKBilsMa12FQizV"
		const uintOvqsnoA = BigInt("1134")
		const uintHMxKulk = BigInt("123")
		const stringGAojuQ = "NJLMjUfnEmGacKWgfQVIt8UpDQjrmSKMbbMuqO4QS9dbLerzFxmb9FtBzGXmI41wdg09EO2iWp8dtNmFrGXMdN"
		const 
ZlJRf5A = await BirdOracleNAmV24r.newChainRequest.call(stringMdhAIs, stringC0rwvN, {from: accounts[4]});
		const 
mfMWd55 = await BirdOracleNAmV24r.updatedChainRequest.call(uintHMxKulk, uintOvqsnoA, {from: accounts[0]});
		const uintfOGemnf = await BirdOracleNAmV24r.getRatingByAddressString.call(stringGAojuQ, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFKELnRE = await BirdOracle.new({from: accounts[1]});
		const uintWPFXlWY = BigInt("1783")
		const stringzd5inEV = "wEXRy1Eay6Jvi6z9UEV4Jrp1BM"
		const stringK7AzMgB = "45KxVzMM9K47KxWHhNPwCuau3lpXsFq3tifJZWLPl5akQen484yZ4IDM84AHwSoG"
		const stringPxIE11 = "5RSh7RBGN5WWigsJHNWVdu4oDXdIyMb9yPQOnrfIoCK7yWVuAgLTYKTzabBajasouluTDl"
		const stringgwiQEDs = "eXPzGWhFfebLxtnmoiIJkTc1BFjlVBkiFQhyW1IBWfCJteQquChiekUm6FtkP16R94crswIWbBlnzWDZ25"
		const stringLmX0SDS = "x3amNCG3DvappUQfi86vkrLoezzFAQWJFhJQEkWQgP9xYre1Mn3Ahn3gDgxDiPh97zrT2FGIK4fRAGz26ik1"
		const stringo90cdQL = await BirdOracleFKELnRE.substring.call(stringzd5inEV, uintWPFXlWY, {from: accounts[2]});
		const 
actIpVK = await BirdOracleFKELnRE.newChainRequest.call(stringPxIE11, stringK7AzMgB, {from: "0x0000000000000000000000000000000000000001"});
		const uintavHCtb = await BirdOracleFKELnRE.getRatingByAddressString.call(stringgwiQEDs, {from: accounts[5]});
		const uintRDjmge2 = await BirdOracleFKELnRE.getRatingByAddressString.call(stringLmX0SDS, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNAmV24r = await BirdOracle.new({from: accounts[2]});
		const uintMdxURUY = BigInt("269")
		const stringlvh4ceE = "nU2xg3FyVhcrtmPUcVJtm0THrm2AA5NKTUjNMf0oyyUD7i6APapa8tE9k0FOR9zhQgRANbF"
		const stringbjN3tcG = "3NIRz54WyOTtrWDh1g9MNt5gWQXPdYYzGCvkKPxOPCcLWO1OmPLxLhi7MvWXzxghSYmJCwkIocNGwENzt6"
		const stringK56OG3H = "7nowBECs9sjo3OfwPxr9ywkqtuuarNGS7bzBgp8Sv6RLpFFJyTOz36MydLWuVl4QmQBDiqLFgcaTo5JIloF9o4XbTaztxgMh"
		const uintJA196kp = BigInt("1475")
		const uintU29BSyy = BigInt("1365")
		const uintzAZVeo6 = BigInt("1134")
		const uintLcmwo9V = BigInt("1708")
		const addressb3rcQS = accounts[4]
		const stringxrpD4xw = await BirdOracleNAmV24r.substring.call(stringlvh4ceE, uintMdxURUY, {from: accounts[0]});
		const 
XqJsJkO = await BirdOracleNAmV24r.newChainRequest.call(stringK56OG3H, stringbjN3tcG, {from: accounts[3]});
		const 
qdvDtJc = await BirdOracleNAmV24r.updatedChainRequest.call(uintU29BSyy, uintJA196kp, {from: accounts[5]});
		const 
mfMWd55 = await BirdOracleNAmV24r.updatedChainRequest.call(uintLcmwo9V, uintzAZVeo6, {from: accounts[0]});
		const uintouqoB7f = await BirdOracleNAmV24r.getRatingByAddress.call(addressb3rcQS, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNAmV24r = await BirdOracle.new({from: accounts[2]});
		const stringcqhlCAR = "uUNMCJDSONkfOWzKmkq4wiYvI9HkNeEFe5utNFikcBflzeuaerdDBEmmfGFEwGXCRhW7V9hIWTPOO"
		const uintu8ikHvc = BigInt("1106")
		const stringOjvY1L = "Cp4Hlft3CkghC287W7T5A"
		const uintzss5bg = BigInt("1134")
		const uintbADIGaW = BigInt("123")
		const uintlVR3O4P = await BirdOracleNAmV24r.getRatingByAddressString.call(stringcqhlCAR, {from: accounts[3]});
		const stringPAJYLAK = await BirdOracleNAmV24r.substring.call(stringOjvY1L, uintu8ikHvc, {from: accounts[4]});
		const 
mfMWd55 = await BirdOracleNAmV24r.updatedChainRequest.call(uintbADIGaW, uintzss5bg, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFKELnRE = await BirdOracle.new({from: accounts[1]});
		const uintTVP9ybO = BigInt("1778")
		const stringYO4hJBP = "YEX5ktcYb9OzzE5JT9zoijAFrkYUJNbAJ9LiYMXV91Wlv3sbayR"
		const uintCg1J0Mp = BigInt("1630")
		const uintDypEDn = BigInt("1623")
		const stringjuJxoL = "igM12mq1WVcQBIV3tkbM3IRstQJoGrclpRdTmAOMqet9dwz"
		const uintG2CQsp = BigInt("1783")
		const stringzd5inEV = "wEXRypEay6Jvi6z9UEV4Jrp1BG"
		const stringLmX0SDS = "x3amNCG3DvappUQfi86vkrLoezzFAQWJFhJQEkWQgP9xYre1Mn3Ahn3gDgxDiPh97zrT2FGIK4fRAGz26ik1"
		const stringnUK71VA = await BirdOracleFKELnRE.substring.call(stringYO4hJBP, uintTVP9ybO, {from: accounts[5]});
		const string45VlKR = await BirdOracleFKELnRE.substring.call(stringjuJxoL, uintDypEDn, uintCg1J0Mp, {from: accounts[3]});
		const stringo90cdQL = await BirdOracleFKELnRE.substring.call(stringzd5inEV, uintG2CQsp, {from: accounts[2]});
		const uintRDjmge2 = await BirdOracleFKELnRE.getRatingByAddressString.call(stringLmX0SDS, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEvJUa7K = await BirdOracle.new({from: accounts[3]});
		const uintdDzhHaR = BigInt("1889")
		const stringI2uEBhM = "ET4XgQ7TQiGnpDFatxgOvuqrKABtzWVhmsnwJAL8hexeIruxdkJFt2PRqKnUu4JtPOW5tKKnDjzy2Azw9SR6wdcBg3J"
		const stringkvmrTf = "vZDhtInV8I7V30kDFYHv9dU8CyXkAc4LWVXrB71zdE8CvfbAlo9xEpg7TJdMyXm9"
		const stringGT1HN39 = await BirdOracleEvJUa7K.substring.call(stringI2uEBhM, uintdDzhHaR, {from: "0x0000000000000000000000000000000000000001"});
		const stringOUTex6S = await BirdOracleEvJUa7K.extractAddress.call(stringkvmrTf, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFKELnRE = await BirdOracle.new({from: accounts[1]});
		const uintXXoKIhE = BigInt("1626")
		const uintYDKaMD6 = BigInt("1626")
		const stringjuJxoL = "igM12mq1WVcQBIV3tkcM3IRstQJoGrclpRdTmAOMqet9dwz"
		const stringlS8RQZ2 = "Px0qibEjgBPDVorFhLAe8fdFQQKMwlK1zLJt1ki19ppVrjVIPWO9IHvs1oD2ibpg56hG3XV4WpOa4jUFsjCzAdqj"
		const uintNTCbEoG = BigInt("1785")
		const stringxWcsgrZ = "ugnRYP9uLy6APCM7"
		const string45VlKR = await BirdOracleFKELnRE.substring.call(stringjuJxoL, uintYDKaMD6, uintXXoKIhE, {from: accounts[3]});
		const stringMx861nR = await BirdOracleFKELnRE.extractAddress.call(stringlS8RQZ2, {from: accounts[3]});
		const stringiCZYT9o = await BirdOracleFKELnRE.substring.call(stringxWcsgrZ, uintNTCbEoG, {from: accounts[0]});
	});
})