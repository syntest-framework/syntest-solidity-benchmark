const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclejVbVCJy = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringpQfZzWb = "fyP7EwenANLx5sg4d1GjCWKdTzPSkGB2fBGo128tYvAJQfU61acACW4nVy8TkOLrr"
		const stringQkmJDL = "RmLydMOg4MZ0t5GRaufWin"
		const uintGY5g1rx = BigInt("105")
		const stringTDNS3zy = "f6UHDdgt7BRkIVo3BxCX210u9AdJB3QMvmmRfTxpMJWbn295RYuWjDl"
		const addressd2rjXTH = await BirdOraclejVbVCJy.parseAddr.call(stringpQfZzWb, {from: accounts[4]});
		const addresskd3UrxL = await BirdOraclejVbVCJy.parseAddr.call(stringQkmJDL, {from: accounts[2]});
		const stringguugsVD = await BirdOraclejVbVCJy.substring.call(stringTDNS3zy, uintGY5g1rx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLD0MwU9 = await BirdOracle.new({from: accounts[5]});
		const uintFcMDowt = BigInt("744")
		const uintE821fFu = BigInt("879")
		const stringa2N6L6J = "UWGntc9FX8PO7lwS9nd6dHey8cYYVh"
		const stringaXsSKUY = "YynMDYR2Lr2cXOgrtC3GgKXqvaAaO5smKhjARNlviAQIudtXs1H2"
		const addressd7hNUhx = accounts[3]
		const uintFnlGltW = BigInt("243")
		const uintmx5eRNi = BigInt("1098")
		const stringjKFhgun = "twLnE069cwFczoByP3GkTEmwlw4xlgZVQuFq1695Mztfao7QHvNcDtF0cS3osPq4iQ6KQ9WLExDaTyYq2j1Bfdhs"
		const uintCH3fyXz = BigInt("1872")
		const stringfo2oeH = "T1s2tpa9jwTAtwH8Ovtv7V5WcpvfAkkbzk"
		const 
FydxnUh = await BirdOracleLD0MwU9.updatedChainRequest.call(uintE821fFu, uintFcMDowt, {from: accounts[0]});
		const uintwV73r62 = await BirdOracleLD0MwU9.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const 
vSEI07b = await BirdOracleLD0MwU9.newChainRequest.call(stringaXsSKUY, stringa2N6L6J, {from: accounts[3]});
		const uintuzAsLn3 = await BirdOracleLD0MwU9.getRatingByAddress.call(addressd7hNUhx, {from: accounts[0]});
		const stringsEynh90 = await BirdOracleLD0MwU9.substring.call(stringjKFhgun, uintmx5eRNi, uintFnlGltW, {from: accounts[4]});
		const stringR5EWHzV = await BirdOracleLD0MwU9.substring.call(stringfo2oeH, uintCH3fyXz, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVBXceIg = await BirdOracle.new({from: accounts[0]});
		const address81xdYa = accounts[5]
		const stringMFvpCDy = "JqpBMfMh5BrdcowYXVJRPerQnk3eKlrk3p255CYu1NgqG2RagNTqhHJ9jnnpT5W9"
		const uintOfuuUUy = BigInt("1181")
		const stringfcpIRds = "6ztan5NkcZ54yitu4W77jiBFNkBVGHODZO5oU3wY2"
		const uintoQMyZKw = await BirdOracleVBXceIg.getRatingByAddress.call(address81xdYa, {from: accounts[2]});
		const uintIN1zNP = await BirdOracleVBXceIg.getRatingByAddressString.call(stringMFvpCDy, {from: accounts[0]});
		const stringJLWSblH = await BirdOracleVBXceIg.substring.call(stringfcpIRds, uintOfuuUUy, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleiIjxBsP = await BirdOracle.new({from: accounts[3]});
		const stringDK3W9R = "uAcCIBjDSbzdj2Hz2KlnN947"
		const uintUxO660x = BigInt("1575")
		const stringxidrDaa = "qefqjNMkTan2YCthmoTw802Ef"
		const uintrKeD0GG = BigInt("978")
		const uintOeLY8sC = BigInt("1135")
		const stringAzS28vQ = "a3tIjuCakVEErj9MJS7ebpH5l73k6OlGPmfv3HHcDx6LbXBDyelYYU8IOsuKeOXbOyzELQ5WC6ps5GdUNt42yTAn"
		const stringgiZVjFM = "ROcYsbyuI4hO3bWCz"
		const stringcmxdR4z = "Bnyjnkp8DxvQg9MUC"
		const stringtoGfEey = "apSRYidpeMETbe1K8Bb9fJOyvhl7C2bGdJJ8VA6otwQGPTlDHu5FVGgIOfNVnJLksGLVFpUWh8AJxUNo1ec5WySptgra9"
		const stringwG2dTx1 = await BirdOracleiIjxBsP.extractAddress.call(stringDK3W9R, {from: accounts[0]});
		const stringj0wQYme = await BirdOracleiIjxBsP.substring.call(stringxidrDaa, uintUxO660x, {from: accounts[1]});
		const stringfsCWCjO = await BirdOracleiIjxBsP.substring.call(stringAzS28vQ, uintOeLY8sC, uintrKeD0GG, {from: accounts[4]});
		const uintFzLA4hT = await BirdOracleiIjxBsP.getRatingByAddressString.call(stringgiZVjFM, {from: accounts[1]});
		const 
DUHjVqT = await BirdOracleiIjxBsP.newChainRequest.call(stringtoGfEey, stringcmxdR4z, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVNmcxAR = await BirdOracle.new({from: accounts[2]});
		const addressRr0XmeH = accounts[2]
		const addressNBhB67P = accounts[1]
		const stringoCzy8Nd = "DnU9ojzOgh3Hc8gvkrrNgSCxGYOZhhu78TelkLKmXxmQU2ViATFG5mfPPVTJvAgfwI5AyUAdIQNuD4WQLGW2gfx9I"
		const stringRQFkJHk = "bw3h2awEDTTNkfmuYxOt0iittrWeWe9FA8472ULLNqjTv"
		const stringTTq6NlO = "kFaYH5xvciZ35UA4Dnxn1jwirrC2TWK59fuuVzanwPIqGtfFxT2Q4hbBxQagGyc88AolNcD"
		const uintm26efqr = await BirdOracleVNmcxAR.getRatingByAddress.call(addressRr0XmeH, {from: accounts[3]});
		const uintB3enwNd = await BirdOracleVNmcxAR.getRatingByAddress.call(addressNBhB67P, {from: accounts[0]});
		const 
BFlxOsZ = await BirdOracleVNmcxAR.newChainRequest.call(stringRQFkJHk, stringoCzy8Nd, {from: accounts[1]});
		const uintb0NhTJg = await BirdOracleVNmcxAR.getRatingByAddressString.call(stringTTq6NlO, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addresswz2tsU6 = accounts[3]
		const stringv093pGX = "AdXZHmjMA6rHBhJSdmc6IxMOKPf4pMUK6dCfcrWLWz5Ov0SI3DdAOG1xQlq1cWjxhRP21dRInmHe4YVHLjIG"
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addresswz2tsU6, {from: accounts[5]});
		const uintqH8P2Yk = await BirdOracleHmx9vW.getRatingByAddressString.call(stringv093pGX, {from: accounts[3]});
		const uintlLOnCY8 = await BirdOracleHmx9vW.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addressHHXHNu5 = accounts[4]
		const uintWNvowp = BigInt("781")
		const stringbGx5h4U = "c1"
		const uintqioAkT3 = BigInt("1552")
		const uintMpgodhL = BigInt("1443")
		const stringzied2YY = "b1bmh5yuGjkcSOevfyQh5bXJPrz9mzY7dKAIPrSD6cFDDeyOfUKK"
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressHHXHNu5, {from: accounts[5]});
		const stringzcIJk9l = await BirdOracleHmx9vW.substring.call(stringbGx5h4U, uintWNvowp, {from: accounts[1]});
		const 
xtZPEeu = await BirdOracleHmx9vW.updatedChainRequest.call(uintMpgodhL, uintqioAkT3, {from: accounts[1]});
		const uintFdliptF = await BirdOracleHmx9vW.getRatingByAddressString.call(stringzied2YY, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const uinttweK2Bh = BigInt("1693")
		const uintQ8I0Nt = BigInt("461")
		const stringaGcB7r4 = "3XzMEctY"
		const stringAC91eBm = "IHMK9zqEUdhr8TzVbpBRj"
		const addressbh2ZWw6 = accounts[4]
		const stringNFjw0Of = await BirdOracleHmx9vW.substring.call(stringaGcB7r4, uintQ8I0Nt, uinttweK2Bh, {from: accounts[4]});
		const stringj0ScSZS = await BirdOracleHmx9vW.extractAddress.call(stringAC91eBm, {from: accounts[0]});
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressbh2ZWw6, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addressfQVLMpe = accounts[5]
		const uintck2Escy = BigInt("1305")
		const uintHKufGt5 = BigInt("2041")
		const stringgU0PCEk = "9cX8FUB2tFkDrLYiDhB5qBnhDrDygXEQWUTodIdYZeRY9rybIWl2tNT3ReNZRPl209n0EiJI5VxG7AOQza2h3"
		const uintipN3BzW = BigInt("1070")
		const uintZDPcock = BigInt("879")
		const stringqmQgzHT = "hXH11Fpuv7DBevDlKZCqTnVXNxcB6Qoyoh1G4GK8CmroO1pMkdjSWwqr7dXls1UdJI1ijRnCUmYujB1cJIXTJ2dx"
		const stringbWDsOjv = "ISEQqfhGAbEg5ppiBBwo"
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressfQVLMpe, {from: accounts[5]});
		const stringnwS5ZFP = await BirdOracleHmx9vW.substring.call(stringgU0PCEk, uintHKufGt5, uintck2Escy, {from: accounts[4]});
		const 
fs3bGZY = await BirdOracleHmx9vW.updatedChainRequest.call(uintZDPcock, uintipN3BzW, {from: accounts[1]});
		const 
NUY5iWz = await BirdOracleHmx9vW.newChainRequest.call(stringbWDsOjv, stringqmQgzHT, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addressxwBiRm2 = accounts[4]
		const uint3efB2T = BigInt("90")
		const stringpeO667x = "61pkd0e2HqjhCeggNwcmjiijNaJcVpF87rXXq3tNwcz7gVPArKziAdHI2LC4l6w4vXTpV33vk1cmX2XtahA4OXr9gclVi"
		const uintaBa0XbH = BigInt("624")
		const uintSzmlW0 = BigInt("19")
		const stringP0lxKts = "4VyYGFaj6eOmEojaXNEAzbgOJtMCNY3iY4MSxAvQdaycrmUFSoZDa7t5FtLzHEFveB2xzsCHSPYaOjM"
		const uintAOu0gHD = BigInt("484")
		const uintTyFt9hm = BigInt("425")
		const stringxv90XrH = "nHYJSQfc0BAgUg8L3JWQmf5b92fkhvhDMFOeV2S7eCIefHzJvJgTa8hiyJfRkxYsiFgGYsqGvHa"
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressxwBiRm2, {from: accounts[5]});
		const stringXEhYHb9 = await BirdOracleHmx9vW.substring.call(stringpeO667x, uint3efB2T, {from: accounts[3]});
		const stringhleSHmo = await BirdOracleHmx9vW.substring.call(stringP0lxKts, uintSzmlW0, uintaBa0XbH, {from: accounts[0]});
		const stringzjrR1Rf = await BirdOracleHmx9vW.substring.call(stringxv90XrH, uintTyFt9hm, uintAOu0gHD, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const uintTIlKOYo = BigInt("1181")
		const stringXB0qtU5 = "z2LMnqG6xHDTHlTrGtsPTw2UD6EJsoMzXYBEusiOL7BTHA7KbCtipieKeIJCossNmuTIuVhOzTRLWGmAqk"
		const stringsapmqJ = "kLyNEcIIHhFom7Tfr8"
		const stringYtg8pty = await BirdOracleHmx9vW.substring.call(stringXB0qtU5, uintTIlKOYo, {from: accounts[0]});
		const uintBOD3OrR = await BirdOracleHmx9vW.getRatingByAddressString.call(stringsapmqJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addressGsDEuOV = accounts[4]
		const uintS4QnqQn = BigInt("1512")
		const stringvRAJGwf = "VKNoqTiqzbeNtgh7GzkZTqId2IC"
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressGsDEuOV, {from: accounts[5]});
		const stringN65Mz6 = await BirdOracleHmx9vW.substring.call(stringvRAJGwf, uintS4QnqQn, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const uintt2zMYB4 = BigInt("33")
		const uint6JCpkn = BigInt("25")
		const stringO7jkWU = "bQWR4N248MJCCxwmjnF77KgKBNxchNyxW05odlcl3F3uPRS8Ha4NyezNkseB9F1n"
		const addressEuxcU9 = accounts[5]
		const stringOrwcmla = await BirdOracleHmx9vW.substring.call(stringO7jkWU, uint6JCpkn, uintt2zMYB4, {from: accounts[4]});
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressEuxcU9, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addressvH1gI6L = accounts[5]
		const uinthCMJUi = BigInt("610")
		const stringhDfJvX1 = "7zP"
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressvH1gI6L, {from: accounts[5]});
		const stringT9yZof8 = await BirdOracleHmx9vW.substring.call(stringhDfJvX1, uinthCMJUi, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHmx9vW = await BirdOracle.new({from: accounts[4]});
		const addressI29SjX = accounts[0]
		const addressmeCasK6 = accounts[5]
		const uintDL8y3z = BigInt("761")
		const stringcjJ1OdL = "6FcrjGDnd1HibpKywS7PDPqa0WgL457YGbrOlUCHiRVBm1na0Exf5PNoBa6yrnDy26HsHJm4LWmUE"
		const uintoStxt2k = await BirdOracleHmx9vW.getRatingByAddress.call(addressI29SjX, {from: accounts[3]});
		const uintc5kRVFj = await BirdOracleHmx9vW.getRatingByAddress.call(addressmeCasK6, {from: accounts[5]});
		const stringMKZI0ZY = await BirdOracleHmx9vW.substring.call(stringcjJ1OdL, uintDL8y3z, {from: "0x0000000000000000000000000000000000000001"});
	});
})