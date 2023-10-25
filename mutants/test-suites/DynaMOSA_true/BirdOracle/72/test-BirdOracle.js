const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleCihVLJy = await BirdOracle.new({from: accounts[2]});
		const uintEH59PSS = BigInt("1757")
		const stringyKpEAO = "yBvr6bqCYxJPONP0edYnmPlgGujMLIxaX20"
		const uintOeJQAKy = BigInt("1255")
		const uintWgUzlSE = BigInt("1851")
		const stringdVTRFGs = "P97sMtTAKyZ8BTnWranjcJIhVVmjG4agQfxvIDnJC715kHx7zhqkXLodrcply3L2vEE18xOlnXWt"
		const uintzMpiitj = BigInt("371")
		const stringJPZelab = "hetIcFUJo7obWyFgjL3fLeWotm1sQtmGUOMeBCXdovoKlWGmoMPMoITWM4kao9D3YjI1nTNFFphqiIwVB5psHBgvxzMy"
		const stringbppCsAb = "ChiK7PHGeQE7QDjwTTdIc58bWx2ZcmXL6G3v8cP9U3A6OWx5vlrUFFSRNyHy9SkXzjBQvI7CgT"
		const stringHsUyeRm = "xWfpe9DDpBk"
		const strings0XqXto = await BirdOracleCihVLJy.substring.call(stringyKpEAO, uintEH59PSS, {from: accounts[3]});
		const stringydGVMu = await BirdOracleCihVLJy.substring.call(stringdVTRFGs, uintWgUzlSE, uintOeJQAKy, {from: accounts[4]});
		const stringyHqpbaT = await BirdOracleCihVLJy.substring.call(stringJPZelab, uintzMpiitj, {from: accounts[0]});
		const stringdB4ieon = await BirdOracleCihVLJy.extractAddress.call(stringbppCsAb, {from: accounts[3]});
		const uintxrsffHi = await BirdOracleCihVLJy.getRatingByAddressString.call(stringHsUyeRm, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKcE6kA7 = await BirdOracle.new({from: accounts[3]});
		const uintcKmNjhD = BigInt("1081")
		const stringeQVgJEl = "Zs12MrJ3QuH1e2GexzBvGMvogmeprB8cIlWLXuY3BPvX9ofWYcSMGCGlqQNYJzA6CMltleBFoM46MCEeK3pnRIe"
		const addressyZCXYIJ = "0x0000000000000000000000000000000000000001"
		const stringbK2h7Ou = "mHX1CSBbvg6USt9NUjMyD5kljEsfqloaxpsUgvwU1f"
		const stringTSLrpsK = "jS1B1XMOT0TXcB9Y0E5Z5xfmSQ0F9j9ywKXY5MPfHRorAgdr"
		const stringvS2c4Bg = await BirdOracleKcE6kA7.substring.call(stringeQVgJEl, uintcKmNjhD, {from: accounts[0]});
		const uintpJPlxI7 = await BirdOracleKcE6kA7.getRatingByAddress.call(addressyZCXYIJ, {from: accounts[2]});
		const uintAkXjCjP = await BirdOracleKcE6kA7.getRatingByAddressString.call(stringbK2h7Ou, {from: accounts[2]});
		const uintWzXxrYg = await BirdOracleKcE6kA7.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVxOsrL4 = await BirdOracleKcE6kA7.parseAddr.call(stringTSLrpsK, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleZfTjWH3 = await BirdOracle.new({from: accounts[1]});
		const stringHT2upkL = "KzGDcTS0rrjR7WuTcVVx8zI6DlVkBXo1LVb9dH4uCxoQ0"
		const stringVbyr19P = "KVT17cJs2yP2qzYMeQshamNAEWasVU9mwSoaN6wnfIcExXfS16s5T51WQQw2koHqXTgfKNiF0w"
		const addressw2HOvjA = accounts[3]
		const uintT3tcqdg = BigInt("770")
		const uint4MrWKG = BigInt("1607")
		const stringlEZoZu = "D1MSUhoXOnu9xQi8cml8sGyaqv2VZCcRE8FgvXPPXuXaeseDL"
		const uintWYPA3OH = BigInt("696")
		const stringKOiUkuO = "afEJ1ph0kE7hYSYPDy1EtPZw5poV5kOMGuwsVbRzP82iGW"
		const 
l1TODJr = await BirdOracleZfTjWH3.newChainRequest.call(stringVbyr19P, stringHT2upkL, {from: accounts[4]});
		const uintdHmdRZ1 = await BirdOracleZfTjWH3.getRating.call({from: accounts[0]});
		const uintUC03vvX = await BirdOracleZfTjWH3.getRatingByAddress.call(addressw2HOvjA, {from: accounts[0]});
		const stringx5gDOtT = await BirdOracleZfTjWH3.substring.call(stringlEZoZu, uint4MrWKG, uintT3tcqdg, {from: accounts[4]});
		const string4nBaN3 = await BirdOracleZfTjWH3.substring.call(stringKOiUkuO, uintWYPA3OH, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclernfSYRx = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringabJsey = "gwEmkcpJOoyrCm8kgNuODbZxsXFtT1mlgm1A5h3ak73xYxtWEaTWOL2yZTswlXADVnmvpP3ztqK"
		const uintmxXNQ0S = BigInt("1256")
		const uintMxuCYJ6 = BigInt("454")
		const stringOmKWmgX = "VacA3gcrtwduVgDGGGoaFbutOTthIKnEyheSfEPxejE7ZPRFVouMpL08WfFnQ1hEeNzPUOehwxzQGLdU"
		const uintzsuVgmJ = await BirdOraclernfSYRx.getRatingByAddressString.call(stringabJsey, {from: accounts[0]});
		const 
sOZFC13 = await BirdOraclernfSYRx.updatedChainRequest.call(uintMxuCYJ6, uintmxXNQ0S, {from: accounts[3]});
		const uintPdBKj9R = await BirdOraclernfSYRx.getRating.call({from: accounts[2]});
		const stringmVGtt7E = await BirdOraclernfSYRx.extractAddress.call(stringOmKWmgX, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleAt98Q5A = await BirdOracle.new({from: accounts[0]});
		const uintyCejMDd = BigInt("1886")
		const uintaHJ6vuI = BigInt("1647")
		const stringX6c25E6 = "V1z4xQBsltDi8zEik7vibT1mBkq5taNgrx3E"
		const uintbbxU44c = BigInt("161")
		const uintx1Vrb4F = BigInt("1466")
		const uintGxy6mAN = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const uintHP6ufEo = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const stringEdP81HX = await BirdOracleAt98Q5A.substring.call(stringX6c25E6, uintaHJ6vuI, uintyCejMDd, {from: accounts[3]});
		const 
IWkF1sQ = await BirdOracleAt98Q5A.updatedChainRequest.call(uintx1Vrb4F, uintbbxU44c, {from: accounts[0]});
		const uintXVUiBm = await BirdOracleAt98Q5A.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleAt98Q5A = await BirdOracle.new({from: accounts[0]});
		const uintY3kbUqX = BigInt("830")
		const stringnJa5apP = "rxsg2Nm"
		const uintbjcas7P = BigInt("1496")
		const uintRGfWWty = BigInt("1093")
		const uintmViWmD4 = BigInt("1886")
		const uintdxW5eAB = BigInt("1647")
		const stringX6c25E6 = "V1z4xQBsltDi8zEik7vibT1mBkq5taNgrx3E"
		const stringHhVhDor = await BirdOracleAt98Q5A.substring.call(stringnJa5apP, uintY3kbUqX, {from: accounts[1]});
		const uintGxy6mAN = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const 
a1kw8Rg = await BirdOracleAt98Q5A.updatedChainRequest.call(uintRGfWWty, uintbjcas7P, {from: accounts[5]});
		const uintHP6ufEo = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const stringEdP81HX = await BirdOracleAt98Q5A.substring.call(stringX6c25E6, uintdxW5eAB, uintmViWmD4, {from: accounts[3]});
		const uintXVUiBm = await BirdOracleAt98Q5A.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle69kFys = await BirdOracle.new({from: accounts[2]});
		const stringaFjObsD = "i9LErcqFnkggTglUV9KVQupzU4pYlH9zj"
		const uintB722p5F = BigInt("999")
		const stringE2IiAyU = "oTSUkcg9T9gimQbHUCwONpaeRaDyz6CZEnydhU21No8nXrw4tWhiVfl3tGowij49rMOmZqrhg9eGd6H"
		const uintspXYYJQ = BigInt("1436")
		const stringhEUHODh = "M"
		const uintqjjHAQ = BigInt("1673")
		const stringEQ0nqmR = "XBapJ43o6elp2wiiT1NJlYfoAE8JfWnQM"
		const uintndt7vSV = await BirdOracle69kFys.getRatingByAddressString.call(stringaFjObsD, {from: accounts[4]});
		const stringnomm8bU = await BirdOracle69kFys.substring.call(stringE2IiAyU, uintB722p5F, {from: accounts[0]});
		const stringTfLbEpx = await BirdOracle69kFys.substring.call(stringhEUHODh, uintspXYYJQ, {from: accounts[0]});
		const stringP2nx8Ml = await BirdOracle69kFys.substring.call(stringEQ0nqmR, uintqjjHAQ, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVOTIxj3 = await BirdOracle.new({from: accounts[2]});
		const addressbnnQMJx = accounts[5]
		const stringn0GFHNH = "0wrsOK6gP6gsIT"
		const stringwbOqxUH = "Qcdq1rmPAUcRTuENv8PmK6et"
		const stringMBxeTQU = "A"
		const uintWL86jyR = await BirdOracleVOTIxj3.getRatingByAddress.call(addressbnnQMJx, {from: accounts[3]});
		const address0ihYaK = await BirdOracleVOTIxj3.parseAddr.call(stringn0GFHNH, {from: accounts[3]});
		const uintyJUQZN = await BirdOracleVOTIxj3.getRatingByAddressString.call(stringwbOqxUH, {from: accounts[2]});
		const addresscGw4OCg = await BirdOracleVOTIxj3.parseAddr.call(stringMBxeTQU, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleAt98Q5A = await BirdOracle.new({from: accounts[0]});
		const uintEVXwq3J = BigInt("770")
		const stringVmUqB4 = "7COH9iHc3n6Vbdg5CioVQdrPD6XhK1Adot"
		const uintjvaDKzo = BigInt("1886")
		const uintPNBplH = BigInt("1647")
		const stringX6c25E6 = "V1z4xQBsltDi8zEik7vibT1mBkq5taNgrx3E"
		const uintFtSpQzl = BigInt("161")
		const uintG28XcEY = BigInt("1466")
		const uintGxy6mAN = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const uintHP6ufEo = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const stringka159Nx = await BirdOracleAt98Q5A.substring.call(stringVmUqB4, uintEVXwq3J, {from: accounts[4]});
		const uintZfps3rS = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const stringEdP81HX = await BirdOracleAt98Q5A.substring.call(stringX6c25E6, uintPNBplH, uintjvaDKzo, {from: accounts[3]});
		const 
IWkF1sQ = await BirdOracleAt98Q5A.updatedChainRequest.call(uintG28XcEY, uintFtSpQzl, {from: accounts[0]});
		const uintXVUiBm = await BirdOracleAt98Q5A.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle69kFys = await BirdOracle.new({from: accounts[2]});
		const uinta6MvbNB = BigInt("1696")
		const stringB89fweD = "WCYv3rwnxVB6CO9HJATB280346FZro7Joad46Hde9sYsOcf0VVWrPZIskJ3y9k"
		const stringaFjObsD = "i9LErcqFnkggTglUa9KVQupzU4pYlH9zj"
		const uintIK87rIg = BigInt("999")
		const stringE2IiAyU = "oTSUkcg9T9gimQbHUCwONpaeRaDyz6CZEnydhU21No8nXrw4tWhiVfl3tGowij49rMOmZqrhg9eGd6H"
		const addressNvkLTlm = accounts[3]
		const addresscM0uctM = "0x0000000000000000000000000000000000000001"
		const uintnR4VKBH = BigInt("1436")
		const stringhEUHODh = "M"
		const uintdfV7Vak = BigInt("1673")
		const stringEQ0nqmR = "XBapJ43o6elp2wiiT1NJlYfoAE8JfWnQM"
		const stringHipCPD = await BirdOracle69kFys.substring.call(stringB89fweD, uinta6MvbNB, {from: accounts[2]});
		const uintndt7vSV = await BirdOracle69kFys.getRatingByAddressString.call(stringaFjObsD, {from: accounts[4]});
		const stringnomm8bU = await BirdOracle69kFys.substring.call(stringE2IiAyU, uintIK87rIg, {from: accounts[0]});
		const uintYEsSUO = await BirdOracle69kFys.getRatingByAddress.call(addressNvkLTlm, {from: accounts[4]});
		const uintZcA2AnY = await BirdOracle69kFys.getRatingByAddress.call(addresscM0uctM, {from: "0x0000000000000000000000000000000000000001"});
		const stringTfLbEpx = await BirdOracle69kFys.substring.call(stringhEUHODh, uintnR4VKBH, {from: accounts[0]});
		const stringP2nx8Ml = await BirdOracle69kFys.substring.call(stringEQ0nqmR, uintdfV7Vak, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclen20OaV = await BirdOracle.new({from: accounts[4]});
		const uintPHlLn63 = BigInt("884")
		const uintfXMJap = BigInt("1628")
		const stringkWWh5dO = "de"
		const stringb8YuNv2 = await BirdOraclen20OaV.substring.call(stringkWWh5dO, uintfXMJap, uintPHlLn63, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle69kFys = await BirdOracle.new({from: accounts[2]});
		const stringYUUXo2 = "qKxhNsHxSEk2XzjVIoDTXpQoJRwCrJlx9PgZLnlIJFaipU2l7uB6TJamlOT1pncttr"
		const uintWrDzwBI = BigInt("1673")
		const stringEQ0nqmR = "XBapJ43o6elp2wiiT1NJlYfoAEJfWnQM"
		const uintIKBjXxk = await BirdOracle69kFys.getRatingByAddressString.call(stringYUUXo2, {from: accounts[3]});
		const stringP2nx8Ml = await BirdOracle69kFys.substring.call(stringEQ0nqmR, uintWrDzwBI, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleAt98Q5A = await BirdOracle.new({from: accounts[0]});
		const uintwXhjUkf = BigInt("1793")
		const uintxnZwlS = BigInt("146")
		const stringnXzRrVl = "6et3UI476MsvMAO36e3RNID41zsjTQQTcPcx4gdJAjwXWrIebureJcE4gvFhdtEzJH8K3fbbm"
		const uintuHXp76W = BigInt("949")
		const uintf6akJxV = BigInt("742")
		const stringMXL4tOZ = "zPboMAYCCSMvniRUJhKPwAh7AYs19MwIcHaX7B3M2Lu9gwjUJC3E4TOCNniTSJD9NSOQZ0O7t7eDhDjkJ4FlTz32l7JyVc"
		const stringxrIzwD = "1BjmoMW"
		const uintGxy6mAN = await BirdOracleAt98Q5A.getRating.call({from: accounts[1]});
		const 
srrIhLu = await BirdOracleAt98Q5A.updatedChainRequest.call(uintxnZwlS, uintwXhjUkf, {from: accounts[4]});
		const addressMBB5br8 = await BirdOracleAt98Q5A.parseAddr.call(stringnXzRrVl, {from: accounts[2]});
		const stringBnupwJA = await BirdOracleAt98Q5A.substring.call(stringMXL4tOZ, uintf6akJxV, uintuHXp76W, {from: accounts[0]});
		const stringB8qd6x5 = await BirdOracleAt98Q5A.extractAddress.call(stringxrIzwD, {from: accounts[3]});
		const uintXVUiBm = await BirdOracleAt98Q5A.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle69kFys = await BirdOracle.new({from: accounts[2]});
		const uinto5mk1Av = BigInt("840")
		const stringD7CLFzD = "fiUgKJPaGY1PyBSKxnVP4kXCx1QAuf8S8"
		const uintFscbG89 = BigInt("1673")
		const stringEQ0nqmR = "XBapJ43o6el2wiiT1NJlYfoAEJfWnQM"
		const stringnwOmyn7 = await BirdOracle69kFys.substring.call(stringD7CLFzD, uinto5mk1Av, {from: "0x0000000000000000000000000000000000000001"});
		const stringP2nx8Ml = await BirdOracle69kFys.substring.call(stringEQ0nqmR, uintFscbG89, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclen20OaV = await BirdOracle.new({from: accounts[4]});
		const uintGKcbCtN = BigInt("1539")
		const stringgI4tYwY = "ErF4DAYY7V6nhWOjUpDJ0nobcuw21qgvoYvWSIGIsiKw4BT9nk"
		const uintZZkSPOd = BigInt("1455")
		const stringVdADask = "Cm63n2qBsd7wVyQ2yIXQQYO2gpsfm6YjCZNf9pqcDIbN2jCQhD0"
		const uintyI6GxW = BigInt("825")
		const uint8CTeFH = BigInt("1627")
		const stringDOP0Bv2 = await BirdOraclen20OaV.substring.call(stringgI4tYwY, uintGKcbCtN, {from: accounts[5]});
		const uintK3qkcOy = await BirdOraclen20OaV.getRating.call({from: accounts[0]});
		const stringKzIkkf = await BirdOraclen20OaV.substring.call(stringVdADask, uintZZkSPOd, {from: accounts[2]});
		const 
jw9UhWc = await BirdOraclen20OaV.updatedChainRequest.call(uint8CTeFH, uintyI6GxW, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclen20OaV = await BirdOracle.new({from: accounts[4]});
		const uintcWXvht = BigInt("220")
		const uintyGXC59h = BigInt("220")
		const stringu91l2b = "cdryp8CS2uCAeC9zB8JMlqI48Uy4HihRHQds4k8RHi7Oa6sRrQJuo"
		const uintfnhPBId = BigInt("6")
		const uintYFHjKO = BigInt("1954")
		const stringfJ3oIfk = await BirdOraclen20OaV.substring.call(stringu91l2b, uintyGXC59h, uintcWXvht, {from: accounts[0]});
		const 
qgskOcL = await BirdOraclen20OaV.updatedChainRequest.call(uintYFHjKO, uintfnhPBId, {from: accounts[0]});
	});
})