const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleLFRX0Yx = await BirdOracle.new({from: accounts[1]});
		const stringsr7SsTq = "mIPH3UOdurUGEkEXmIoBnANRKwCM4y1nGYvsnQ7G4ty"
		const stringPXCJJqX = "Kf1d2onGK36bA74aOgwKXKiHAcmhjun3TDwOavrty88651c0nIAtzdHbUn2tTIcATnR0FAnWGwGQcB5Qcng"
		const addressgymIn70 = accounts[0]
		const stringkQF3vnS = await BirdOracleLFRX0Yx.extractAddress.call(stringsr7SsTq, {from: accounts[1]});
		const stringB15SnZM = await BirdOracleLFRX0Yx.extractAddress.call(stringPXCJJqX, {from: accounts[4]});
		const uintK3Zl4Kp = await BirdOracleLFRX0Yx.getRatingByAddress.call(addressgymIn70, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLopPkd = await BirdOracle.new({from: accounts[0]});
		const uintMErLCsY = BigInt("124")
		const uintqdvhb7i = BigInt("1700")
		const stringsI4hcJw = "bb3Xcoy7zRA2LPQ4Uk9nbUB9qI43zg3z9az84seQ32"
		const stringStyHFP = "PbvJ7SIiNImRCgQt9n49xa6yjYhmVx"
		const string5swZSC = await BirdOracleLopPkd.substring.call(stringsI4hcJw, uintqdvhb7i, uintMErLCsY, {from: accounts[0]});
		const uintjBerVG = await BirdOracleLopPkd.getRatingByAddressString.call(stringStyHFP, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleihFt84N = await BirdOracle.new({from: accounts[4]});
		const uintFC4LHEL = BigInt("147")
		const uintmkVu2d2 = BigInt("1731")
		const stringUGXnmrd = "cBfK8rIaEFtcspujYWeYAhjtL5eiwJPMchLE2y2HfJ7"
		const uintvfijNTh = await BirdOracleihFt84N.getRating.call({from: accounts[1]});
		const stringiWBaE8 = await BirdOracleihFt84N.substring.call(stringUGXnmrd, uintmkVu2d2, uintFC4LHEL, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGHHVRZ = await BirdOracle.new({from: accounts[3]});
		const uintk2fbHlY = BigInt("842")
		const stringGkMAQdn = "6jrKpkReZzEkjHG4y7DEr9k00r4TGBiy5k4D0rJWB9cS8"
		const uintiApuUn = BigInt("209")
		const uintwhGm5dY = BigInt("143")
		const stringZ3AhUJZ = "6AIXGahcy2RsMLFnHQXtANTD0"
		const stringlY9mFOn = "X874894jVFDkzC6jL9t91SpPL9HYxWbiuGh"
		const uintz4gZ44Z = BigInt("783")
		const stringOqqIfjS = "H8wMDArDLIdPvO5ao3FFcKwqgswkUBd1gfgHwzlqe0OCVX8pS7vAhvuPw1acP16"
		const stringPjq01GD = "a2SLCQLQkcBayBdmfeY8ad5wRnFRXHcUC7g"
		const stringmawYlm = await BirdOracleGHHVRZ.substring.call(stringGkMAQdn, uintk2fbHlY, {from: accounts[0]});
		const stringCAxUfjq = await BirdOracleGHHVRZ.substring.call(stringZ3AhUJZ, uintwhGm5dY, uintiApuUn, {from: "0x0000000000000000000000000000000000000001"});
		const addressSGFYYME = await BirdOracleGHHVRZ.parseAddr.call(stringlY9mFOn, {from: accounts[4]});
		const stringBmAll62 = await BirdOracleGHHVRZ.substring.call(stringOqqIfjS, uintz4gZ44Z, {from: accounts[0]});
		const stringBeoHebk = await BirdOracleGHHVRZ.extractAddress.call(stringPjq01GD, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledtuivQL = await BirdOracle.new({from: accounts[2]});
		const uintLojQxCE = BigInt("1317")
		const uintB9K9pM = BigInt("1911")
		const uintMDCpelY = BigInt("273")
		const stringM9aoix = "qkHAnoSIZpDhLH3TRjMIpGrs9VWVvMroPptFIKVZIYqjtE5Wx8"
		const uintEwicYUr = BigInt("1616")
		const stringUKFfZH0 = "BWdKn8b7OAOvAPtMbPjsxpGs1jDam8MkA7uEWEgAnFQN8jY6odjxLSgf8SaroTINMy42Vpv896tmg3yLHT6RgdWF"
		const uintxaf2kjX = await BirdOracledtuivQL.getRating.call({from: accounts[3]});
		const 
toegJ3D = await BirdOracledtuivQL.updatedChainRequest.call(uintB9K9pM, uintLojQxCE, {from: accounts[4]});
		const stringLyKSlY5 = await BirdOracledtuivQL.substring.call(stringM9aoix, uintMDCpelY, {from: accounts[3]});
		const stringkdUqxF2 = await BirdOracledtuivQL.substring.call(stringUKFfZH0, uintEwicYUr, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle781SKf = await BirdOracle.new({from: accounts[2]});
		const uintvvTy0Mc = BigInt("1848")
		const uintDYDb3fV = BigInt("1257")
		const stringm5EHV1I = "AzNQvxac5Gfocsdrw2OSFzesksH"
		const stringHICrDW1 = "4bHavsXvrmHqgDa9ww5zJ"
		const stringsWcayGX = await BirdOracle781SKf.substring.call(stringm5EHV1I, uintDYDb3fV, uintvvTy0Mc, {from: "0x0000000000000000000000000000000000000001"});
		const uintrFA03aM = await BirdOracle781SKf.getRating.call({from: accounts[2]});
		const stringvbstF4n = await BirdOracle781SKf.extractAddress.call(stringHICrDW1, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleF9mbRv = await BirdOracle.new({from: accounts[2]});
		const stringgoH6KCO = "XBJanWbWLcRzYq0FabLboDvdSzkypq9BmiRbF1VfxD"
		const stringFUvXxvM = "9nDE5v8lWwleEWytH9aGHtKrGlJIhs48SjNalnAri9Pbyre"
		const stringV1HJ7a6 = "BB3jRc5DA1uTsfsDu3ckIdJINYxBlUZ6VAU1WKXRYemDHPW8farImUtH9yRal"
		const uintEPSxMSs = BigInt("347")
		const uintF2bdRGe = BigInt("986")
		const uintFUZOwU = BigInt("1938")
		const stringNVkQ1NQ = "pNQssHZ3AivHU5NEjPKi63dLw5ZANy7OlwPCJBjfPzZzHu3YWYCxq6q5Haguzu161U"
		const uintzBD1e0q = await BirdOracleF9mbRv.getRating.call({from: accounts[5]});
		const uintNjNLOzX = await BirdOracleF9mbRv.getRatingByAddressString.call(stringgoH6KCO, {from: accounts[1]});
		const uintCHl2cbT = await BirdOracleF9mbRv.getRatingByAddressString.call(stringFUvXxvM, {from: accounts[0]});
		const uintewBiuyl = await BirdOracleF9mbRv.getRatingByAddressString.call(stringV1HJ7a6, {from: accounts[3]});
		const 
btGIHB = await BirdOracleF9mbRv.updatedChainRequest.call(uintF2bdRGe, uintEPSxMSs, {from: accounts[3]});
		const stringmMWI7WL = await BirdOracleF9mbRv.substring.call(stringNVkQ1NQ, uintFUZOwU, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle3Wdquj = await BirdOracle.new({from: accounts[0]});
		const uintjOSRyuV = BigInt("1300")
		const stringOkrc9Ev = "b061Hokct"
		const addressua11rZl = accounts[2]
		const uintqA2ibUx = BigInt("666")
		const stringFKyJItE = "aff8gpx7dmWTcne3wQTgmkaz6jZnWWKL83"
		const stringgvRI6YN = "DNF3Grqyw8S7PCx3Xadv1ajnarul9uVFK3I5s9rDHHRJNQ8Vhq6o"
		const stringYczFXiX = "tKq"
		const stringBJ2Caaq = await BirdOracle3Wdquj.substring.call(stringOkrc9Ev, uintjOSRyuV, {from: accounts[2]});
		const uintEcKb4PQ = await BirdOracle3Wdquj.getRatingByAddress.call(addressua11rZl, {from: accounts[2]});
		const stringsHwoM2u = await BirdOracle3Wdquj.substring.call(stringFKyJItE, uintqA2ibUx, {from: accounts[1]});
		const 
VRBGRAu = await BirdOracle3Wdquj.newChainRequest.call(stringYczFXiX, stringgvRI6YN, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleSI4ysOG = await BirdOracle.new({from: accounts[5]});
		const addressTSvDTFd = accounts[3]
		const string4OaEvy = "6qz7IKJi1EKfKSff3yjcvXBfY0sOuTreD2aQKOnnOENs4mfM"
		const addresse98hFQ = accounts[1]
		const uintvZkt4t5 = BigInt("302")
		const uintefMU0I5 = BigInt("746")
		const stringDdJq8mq = "5ARwJsSRlY4N4eGHdOsvwwfB5JuZIcNt4xMFM5nbC"
		const uintgTXUTQW = await BirdOracleSI4ysOG.getRatingByAddress.call(addressTSvDTFd, {from: accounts[3]});
		const uint7U74yH = await BirdOracleSI4ysOG.getRatingByAddressString.call(string4OaEvy, {from: accounts[5]});
		const uintVvEwugU = await BirdOracleSI4ysOG.getRatingByAddress.call(addresse98hFQ, {from: accounts[1]});
		const 
XIdw6c = await BirdOracleSI4ysOG.updatedChainRequest.call(uintefMU0I5, uintvZkt4t5, {from: accounts[1]});
		const uintjdYXlY0 = await BirdOracleSI4ysOG.getRating.call({from: accounts[3]});
		const addressKQch13M = await BirdOracleSI4ysOG.parseAddr.call(stringDdJq8mq, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleE7wgzbY = await BirdOracle.new({from: accounts[1]});
		const stringIEQhKv3 = "srfW3lwjEudh3xRISByvNVQJF1qmf4mdROvFyS0lEe5SC5ICFT28vtVYcK"
		const stringekLHOB = "44PYe5Vp3GPS4Xc"
		const stringJVcOGEP = "w2bDQEZgnOnGGcP3KwC1elS9DzvJwcN3MqZPqRwFkReq3QTqXjODwCH5YtQglnvpAk8lhXRu"
		const uintzxszEbU = BigInt("1293")
		const stringp67Q1c5 = "tj6sh5FhIUViStYLBpyNJO8pmhQcB6ca7c2BVKWnC"
		const 
JyfIAW = await BirdOracleE7wgzbY.newChainRequest.call(stringekLHOB, stringIEQhKv3, {from: accounts[2]});
		const addressNA01ap = await BirdOracleE7wgzbY.parseAddr.call(stringJVcOGEP, {from: accounts[3]});
		const stringVyeVVHC = await BirdOracleE7wgzbY.substring.call(stringp67Q1c5, uintzxszEbU, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledtuivQL = await BirdOracle.new({from: accounts[2]});
		const uintEiY2cw0 = BigInt("273")
		const stringM9aoix = "qkHAnoSIZpDhLH3TRjMIpGrs9VWVvMroPptFIKVZIYqjtE5Wx8"
		const uintdL3jV4q = BigInt("1046")
		const uintq2iemur = BigInt("637")
		const uintk0fvAR = BigInt("1616")
		const stringUKFfZH0 = "BWdKn8b7OAOvAPtMbPjsxpGs1jDam8MkA7uEWEgAnFQN8jY6odjxLSgf8SaroTINMy42Vpv896tmg3yLHT6RgdWF"
		const uintoFatBI = BigInt("597")
		const uintP1Z0LuQ = BigInt("1402")
		const stringfaIFLk = "PSmYJ1N94TnOEGnEQmUVUqDVP9HvrWgu4YaMnCR"
		const uintxaf2kjX = await BirdOracledtuivQL.getRating.call({from: accounts[3]});
		const stringLyKSlY5 = await BirdOracledtuivQL.substring.call(stringM9aoix, uintEiY2cw0, {from: accounts[3]});
		const 
wFbx9w = await BirdOracledtuivQL.updatedChainRequest.call(uintq2iemur, uintdL3jV4q, {from: accounts[4]});
		const stringkdUqxF2 = await BirdOracledtuivQL.substring.call(stringUKFfZH0, uintk0fvAR, {from: accounts[3]});
		const stringjkQ28yd = await BirdOracledtuivQL.substring.call(stringfaIFLk, uintP1Z0LuQ, uintoFatBI, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleihFt84N = await BirdOracle.new({from: accounts[4]});
		const uintZHJHieO = BigInt("973")
		const stringvsWe0Rs = "AC5YQOens7MSHJvooYFa9F53GhMfv0ozS41Bc4Ao"
		const stringQe3dgmm = "hnUGNWWXDHy4a6pF4Va83a6b28EszLItUG1HxlCS5gj7iTNOpaHFT39MYBbJwgEYut"
		const stringjgmpNkh = await BirdOracleihFt84N.substring.call(stringvsWe0Rs, uintZHJHieO, {from: accounts[4]});
		const uintvfijNTh = await BirdOracleihFt84N.getRating.call({from: accounts[1]});
		const stringaYvr9N = await BirdOracleihFt84N.extractAddress.call(stringQe3dgmm, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleImKPtnI = await BirdOracle.new({from: accounts[1]});
		const uintjm7u6f9 = BigInt("1998")
		const stringYZ3n9oJ = "PGsZHLIetHr2yqw9vv7rZED"
		const uintqD70x2C = BigInt("767")
		const uintoTbWS9 = BigInt("1132")
		const stringN7YBjaE = "FN8y"
		const stringQ6Ej880 = "fsknw5KwUMEb47"
		const addresshZrOG3s = "0x0000000000000000000000000000000000000001"
		const stringMg2JJ1x = await BirdOracleImKPtnI.substring.call(stringYZ3n9oJ, uintjm7u6f9, {from: accounts[1]});
		const stringGY3Z7Cr = await BirdOracleImKPtnI.substring.call(stringN7YBjaE, uintoTbWS9, uintqD70x2C, {from: accounts[4]});
		const stringDK8Px4P = await BirdOracleImKPtnI.extractAddress.call(stringQ6Ej880, {from: "0x0000000000000000000000000000000000000001"});
		const uintUSGRh5J = await BirdOracleImKPtnI.getRatingByAddress.call(addresshZrOG3s, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleihFt84N = await BirdOracle.new({from: accounts[4]});
		const uintwhykeEk = BigInt("1754")
		const stringIXLD3H = "VAzx57erd28Y0P9lPj6JdfDKBRgifWqxhmfqaGsKuFYJJ7g7Rn8p6rCCQmd6xhDy4DuHdkTMf62suCOejv6QaFG6EtpUsOuI6"
		const uintPAaQ6sJ = BigInt("488")
		const uintQ04oFVr = BigInt("624")
		const uintvfijNTh = await BirdOracleihFt84N.getRating.call({from: accounts[1]});
		const stringdume0nJ = await BirdOracleihFt84N.substring.call(stringIXLD3H, uintwhykeEk, {from: "0x0000000000000000000000000000000000000001"});
		const 
DEXjrLP = await BirdOracleihFt84N.updatedChainRequest.call(uintQ04oFVr, uintPAaQ6sJ, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleWbd4EW = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringPBesr6X = "ErPlIxkTNsFi0nQTbiPYzO4Y3hQoMdmdaewWulD5Z6uFxbVcqsYjsewxCQRdxgE"
		const uintD0iJhwc = BigInt("1718")
		const uintUE8sOo4 = BigInt("694")
		const stringq594PU2 = "SdMMKNp71gxU2TRoxU1ZHyvmzncarr4FsLIKaRqNbI4Gx861q9GlDWDmg8EYhqWACeV2mn"
		const uintofWfFa = BigInt("837")
		const stringIzdSZjM = "ez5"
		const uintLJ9EA29 = BigInt("1425")
		const uintE9YWrIN = BigInt("1872")
		const stringIJSEusg = "Vbt6QqpSPF8NKIOBbBK4BHWmG9oGTHwI1iRu7RvKkX7AkTw8Ckg8XXwcIFrMTl"
		const stringnXEU9tP = await BirdOracleWbd4EW.extractAddress.call(stringPBesr6X, {from: accounts[5]});
		const stringmbXByCr = await BirdOracleWbd4EW.substring.call(stringq594PU2, uintUE8sOo4, uintD0iJhwc, {from: accounts[3]});
		const stringjquBN6v = await BirdOracleWbd4EW.substring.call(stringIzdSZjM, uintofWfFa, {from: accounts[1]});
		const 
bKvjHwE = await BirdOracleWbd4EW.updatedChainRequest.call(uintE9YWrIN, uintLJ9EA29, {from: accounts[3]});
		const uintLT1xthm = await BirdOracleWbd4EW.getRatingByAddressString.call(stringIJSEusg, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledtuivQL = await BirdOracle.new({from: accounts[2]});
		const uintj72enQ7 = BigInt("960")
		const stringrVd6CoO = "pTnlLJMCslqSnPcWQXDtSLOt7bCKnQDrnaRDXLGSK2KFUcxW89GdtJCP4"
		const uintOAy24fT = BigInt("1098")
		const uintxsjNZzr = BigInt("954")
		const stringTj0NeRz = "AoyPDdc4txosb9VfDMeDr6SmVQTOcJp5i5DhjbWj7qf7alknij77gdguIr0YrI4mvZBNACwKsBkSMIWUSpJ"
		const uintEAEtxyK = BigInt("1297")
		const uintN1z3Wfu = BigInt("1570")
		const uintTpGYaN1 = BigInt("148")
		const uinttBOleZ = BigInt("287")
		const addresswBcG1zf = accounts[1]
		const uintGAb9PZ1 = BigInt("1607")
		const stringUKFfZH0 = "BWdKn8b7OAOvAPtMbPjsxpGs1jDam8MkA7uEWEgAnFQN8jY6odjxLSgf8SaroTINMy42Vpv89ctmg3yLHT6RgdWF"
		const uintzxj0ki4 = BigInt("947")
		const stringUl5AbZ = "p0IbgjumcwqRuXPpzNjJANilgJG5gk"
		const stringsROy1cN = await BirdOracledtuivQL.substring.call(stringrVd6CoO, uintj72enQ7, {from: accounts[5]});
		const stringzc04i2 = await BirdOracledtuivQL.substring.call(stringTj0NeRz, uintxsjNZzr, uintOAy24fT, {from: accounts[2]});
		const 
toegJ3D = await BirdOracledtuivQL.updatedChainRequest.call(uintN1z3Wfu, uintEAEtxyK, {from: accounts[4]});
		const 
nm91sQJ = await BirdOracledtuivQL.updatedChainRequest.call(uinttBOleZ, uintTpGYaN1, {from: accounts[0]});
		const uintOcH79fE = await BirdOracledtuivQL.getRating.call({from: accounts[4]});
		const uintdH5rENu = await BirdOracledtuivQL.getRatingByAddress.call(addresswBcG1zf, {from: accounts[0]});
		const stringkdUqxF2 = await BirdOracledtuivQL.substring.call(stringUKFfZH0, uintGAb9PZ1, {from: accounts[3]});
		const stringoHmK08v = await BirdOracledtuivQL.substring.call(stringUl5AbZ, uintzxj0ki4, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleihFt84N = await BirdOracle.new({from: accounts[4]});
		const uintHDdKBvz = BigInt("1291")
		const uintxd0jFcx = BigInt("1291")
		const stringJJswALn = "yGovQ8fGGP2EAmUgWzBjfexcDceEVQGwzE59TJncAPVEOxT0wtK6N2gGqmHaOQXeg"
		const uintzBEEWoX = BigInt("488")
		const uintIAH1wHZ = BigInt("634")
		const uintvfijNTh = await BirdOracleihFt84N.getRating.call({from: accounts[1]});
		const stringuWYQ83s = await BirdOracleihFt84N.substring.call(stringJJswALn, uintxd0jFcx, uintHDdKBvz, {from: accounts[2]});
		const 
DEXjrLP = await BirdOracleihFt84N.updatedChainRequest.call(uintIAH1wHZ, uintzBEEWoX, {from: accounts[4]});
	});
})