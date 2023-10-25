const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleDb5ikfc = await BirdOracle.new({from: accounts[1]});
		const addresswKx3Vk2 = accounts[3]
		const stringiPPdY2q = "lJIvCCzKVPhgrcgmLTwR7nz"
		const uintrAEwuX = await BirdOracleDb5ikfc.getRatingByAddress.call(addresswKx3Vk2, {from: accounts[3]});
		const uintTupqjk = await BirdOracleDb5ikfc.getRating.call({from: accounts[2]});
		const addressBBWu0qh = await BirdOracleDb5ikfc.parseAddr.call(stringiPPdY2q, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOuzCvl = await BirdOracle.new({from: accounts[5]});
		const stringUSnY5h = "n8UtpandIlLetHkUHFW7H2dIs7xSc0GH4ThrgJUAy3LUXKtxRuz0irVq07XIaQ5TC7X1jDGbz"
		const uintCsA8rwb = BigInt("1442")
		const uintGg0EBe6 = BigInt("523")
		const string0iAg2v = "8JP04z95ebmJDE8bjx4AA9HoJri10bRjGNkiffnkJa2"
		const stringIqFo36e = "QI9NbguAEf7Rxw39Bck4DerW4rJkOteyNfr7OaAu4jNSYoWyqGqE2a2QQrLT1r4TBoUPlQIs72pbpFkBHeD5qhQCIACv8vTk"
		const uintxtjB6zo = await BirdOracleOuzCvl.getRatingByAddressString.call(stringUSnY5h, {from: accounts[0]});
		const 
eNfGV6 = await BirdOracleOuzCvl.updatedChainRequest.call(uintGg0EBe6, uintCsA8rwb, {from: accounts[5]});
		const addressoMd8xuY = await BirdOracleOuzCvl.parseAddr.call(string0iAg2v, {from: accounts[2]});
		const uintUt2JSS3 = await BirdOracleOuzCvl.getRating.call({from: accounts[4]});
		const uintIKeYeGk = await BirdOracleOuzCvl.getRatingByAddressString.call(stringIqFo36e, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUzl8gbU = await BirdOracle.new({from: accounts[3]});
		const stringdQuDiI = "GuhCiKBknJyNAWUC"
		const uintnqGacn5 = BigInt("85")
		const stringVtHMmoD = "WD45QPhc6teYDJaDnf5haHywWp2O8cs"
		const stringZr7UvUB = "HJzXSEiHFS2clq8lAKOAkzct9CL6S8rlAH13MyV8dPhuoa2eZBFQEAFT6xRMMXkrF6gwe4GHSXwYCndOQ"
		const addressu4FmyU = accounts[2]
		const stringtqfYpl = await BirdOracleUzl8gbU.extractAddress.call(stringdQuDiI, {from: accounts[3]});
		const stringTzG0673 = await BirdOracleUzl8gbU.substring.call(stringVtHMmoD, uintnqGacn5, {from: accounts[4]});
		const stringP8JOEVp = await BirdOracleUzl8gbU.extractAddress.call(stringZr7UvUB, {from: accounts[2]});
		const uintCOaGvhI = await BirdOracleUzl8gbU.getRating.call({from: accounts[0]});
		const uintVpoTkVX = await BirdOracleUzl8gbU.getRatingByAddress.call(addressu4FmyU, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledcZsC5j = await BirdOracle.new({from: accounts[2]});
		const uintmatOkSZ = BigInt("1131")
		const uintvKHrph0 = BigInt("328")
		const stringWfkC3Lq = "oFcqSKtxEpdlLweOc8Kn9ULOY07eouEBK2lHdoB"
		const stringxxR64JV = "2XySj4JswBwYSE4zUyT3Tcc6HJA7AcYFDujSWuROtDnpzeEOaoFtpK8L6cSG0ucL5g4e55CzMot1l1boxi"
		const uintXkTyUzb = BigInt("62")
		const uintHjt0rUD = BigInt("1119")
		const stringsrtwg2o = "9dJ9GhPubi6LQRgwOTcpGL2MEYBCHzmWCxzFwjxDwqlr8WUKx7fQGKhhNzWyTjgOAxHuNCX3q8XtzgxRv72bwyMr7s7rJPXtNB"
		const stringk8rSWOr = "ZuI3DQ8lDpyNKVzSArBRf7gSmjeBv4sNs3dpKbhU36EoWselPPHvd8Qmr9"
		const stringMLGRUIX = await BirdOracledcZsC5j.substring.call(stringWfkC3Lq, uintvKHrph0, uintmatOkSZ, {from: accounts[5]});
		const uintWTMGuaq = await BirdOracledcZsC5j.getRating.call({from: accounts[1]});
		const uintEpMg15h = await BirdOracledcZsC5j.getRatingByAddressString.call(stringxxR64JV, {from: accounts[1]});
		const 
DSE3Zgk = await BirdOracledcZsC5j.updatedChainRequest.call(uintHjt0rUD, uintXkTyUzb, {from: accounts[0]});
		const 
fAhs3Ll = await BirdOracledcZsC5j.newChainRequest.call(stringk8rSWOr, stringsrtwg2o, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleIzb29N6 = await BirdOracle.new({from: accounts[5]});
		const addressBnc0hC = accounts[2]
		const uintptwNxya = BigInt("637")
		const stringB9aozpT = "hullIDje1xx8D7NSNipLlpBqutyYPgcHpe2YRqCYp4xYwm9DHI04a9eOFo1KFWNOoOQO"
		const stringHhIJJcF = "rQQNCfLnA3LKt0kr5L4zN8roUtMXDQ3X9AfPLyMgQ5xYhsTX"
		const uintKBbGHKR = await BirdOracleIzb29N6.getRating.call({from: accounts[2]});
		const uintZprTAxw = await BirdOracleIzb29N6.getRating.call({from: accounts[0]});
		const uintsSAJYFB = await BirdOracleIzb29N6.getRatingByAddress.call(addressBnc0hC, {from: "0x0000000000000000000000000000000000000001"});
		const stringwbGe7hF = await BirdOracleIzb29N6.substring.call(stringB9aozpT, uintptwNxya, {from: "0x0000000000000000000000000000000000000001"});
		const stringA7mMnKi = await BirdOracleIzb29N6.extractAddress.call(stringHhIJJcF, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRDTMwAe = await BirdOracle.new({from: accounts[4]});
		const uintNdkv5lL = BigInt("1546")
		const uintIOkqAu = BigInt("1783")
		const stringxbQdO9z = "jgAD"
		const addresso6gnopa = accounts[4]
		const stringBjccNGC = await BirdOracleRDTMwAe.substring.call(stringxbQdO9z, uintIOkqAu, uintNdkv5lL, {from: accounts[2]});
		const uintf0jzg4b = await BirdOracleRDTMwAe.getRatingByAddress.call(addresso6gnopa, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleDb5ikfc = await BirdOracle.new({from: accounts[1]});
		const uintdZ88Vmg = BigInt("27")
		const stringEqWHnqk = "n7ELCYEDzEq"
		const addressfOuuivu = accounts[3]
		const stringLrVASzf = "E1zvehGIc1ofmO6s6rH6neV4O5g"
		const stringlC6iPRk = "HOyToivI3CqxWnxql7e1YuF2Zu76vEul4AqhQv"
		const stringiPPdY2q = "lJIvCCzKVPhgrcgmLTwR7nz"
		const stringyIj9qt = await BirdOracleDb5ikfc.substring.call(stringEqWHnqk, uintdZ88Vmg, {from: accounts[3]});
		const uintrAEwuX = await BirdOracleDb5ikfc.getRatingByAddress.call(addressfOuuivu, {from: accounts[3]});
		const uintTupqjk = await BirdOracleDb5ikfc.getRating.call({from: accounts[2]});
		const 
dDIp73k = await BirdOracleDb5ikfc.newChainRequest.call(stringlC6iPRk, stringLrVASzf, {from: accounts[4]});
		const addressBBWu0qh = await BirdOracleDb5ikfc.parseAddr.call(stringiPPdY2q, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRDTMwAe = await BirdOracle.new({from: accounts[4]});
		const stringPdNbQzz = "3"
		const stringnrh59v = "sRAcNrFARDXp1zjUsVMNXWe2jaGetrn8F7q1vuPlGpZh38W7187sbsE53k6oKGD8j6QSk"
		const addressWfz5SnL = accounts[0]
		const 
gZe1tU = await BirdOracleRDTMwAe.newChainRequest.call(stringnrh59v, stringPdNbQzz, {from: accounts[4]});
		const uintf0jzg4b = await BirdOracleRDTMwAe.getRatingByAddress.call(addressWfz5SnL, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRDTMwAe = await BirdOracle.new({from: accounts[4]});
		const stringOwkd6lx = "oMWYzTxOmrA2w7Vwh145p6zxoEeajvJRRkhA1QZnOy0ubDnfkGNqBVcDkkYyjPpFuzBNTeBXmqO4"
		const uintH0I3ffA = BigInt("901")
		const stringd5e3tqC = "Zotd1MLj2d1MmhY6SgM3jBKGYAFF5bvvUoX51grxBtgv2t59ZKb"
		const uintKhNeVev = BigInt("1541")
		const uintRg5r0nh = BigInt("1783")
		const stringxbQdO9z = "jgAD"
		const uintkVm80Cx = await BirdOracleRDTMwAe.getRatingByAddressString.call(stringOwkd6lx, {from: accounts[1]});
		const stringhBWu6LQ = await BirdOracleRDTMwAe.substring.call(stringd5e3tqC, uintH0I3ffA, {from: accounts[5]});
		const stringBjccNGC = await BirdOracleRDTMwAe.substring.call(stringxbQdO9z, uintRg5r0nh, uintKhNeVev, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEcxYdjt = await BirdOracle.new({from: accounts[0]});
		const stringqXwUHu7 = "j6op2BPmXwN1xr2BxLar4XFkqZ8cAIGchwV5llWTJpSEe"
		const uintMVY6dA1 = BigInt("33")
		const stringYwWB3Qn = "rjGP37aHDMlkHSUdBBga5wB1NrWixyiL1SP1CQ3rL3led9F2Im"
		const uintExtttzf = BigInt("1875")
		const stringS3EYGfw = "moNkr1Y7TwraVzihdT"
		const stringFxyxDR = "tGQCc7UYGrrjhiy41c2POzTELhXHPrEkN1GKeAs3ISbsuISWvS7c3672O"
		const stringuYHDqUg = "yRJgfuD7SMP5pivJX3N2jakQD1GN4qcxFJLWcNI5TiBopZBO6WgKU7UmRLWffaBbxdmw5jV5es2"
		const uintgbJfwlu = await BirdOracleEcxYdjt.getRatingByAddressString.call(stringqXwUHu7, {from: "0x0000000000000000000000000000000000000001"});
		const stringHow4OSG = await BirdOracleEcxYdjt.substring.call(stringYwWB3Qn, uintMVY6dA1, {from: accounts[0]});
		const stringUJRWYHo = await BirdOracleEcxYdjt.substring.call(stringS3EYGfw, uintExtttzf, {from: accounts[1]});
		const uintZWdJx5n = await BirdOracleEcxYdjt.getRatingByAddressString.call(stringFxyxDR, {from: accounts[1]});
		const addressHu2tbw = await BirdOracleEcxYdjt.parseAddr.call(stringuYHDqUg, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledcZsC5j = await BirdOracle.new({from: accounts[2]});
		const uintLu3zB2b = BigInt("363")
		const stringPdIC5U = "U5nPpJ2jEop3Qk6QhDeaVfgJlxRQyaxOoQkWlA1IoQs1GRNRt89uaj6YRaO5dRof3Q1NfVwXqHJjzGFxpJDehkZXPAaCC"
		const uintY5KRll6 = BigInt("713")
		const uintWG52Uek = BigInt("659")
		const stringpOzCjcZ = "k2T0voMs2XPGN2jeXtbASE5V0y495IkRIo55uCO8JXsNr0qopelfl47Q"
		const uintl3C0FGk = BigInt("1131")
		const uintEqZnE5f = BigInt("1495")
		const stringWfkC3Lq = "oFcqSKtxEpdlLweOc8Kn9ULOY07eouEBK2lHdoB"
		const stringx8TtEOB = "Y9TD24uJ5d2bkEKeFFy"
		const stringfDLzkxV = "sLT20"
		const stringsrtwg2o = "9dJ9GhPubi6LQRgwOTcpGL2MEYBCHzmWCxzFwjxDwqlr8WUKx7fQGKhhNzWyTjgOAxHuNCX3q8XtzgxRv72bwyMr7s7rJPXtNB"
		const stringk8rSWOr = "ZuI3DQ8lDpyNKVzSArBRf7gSmjeBv4sNs3dpKbhU36EoWselPPHvd8Qmr9"
		const stringQwN1xit = await BirdOracledcZsC5j.substring.call(stringPdIC5U, uintLu3zB2b, {from: accounts[1]});
		const stringopVN4MH = await BirdOracledcZsC5j.substring.call(stringpOzCjcZ, uintWG52Uek, uintY5KRll6, {from: accounts[5]});
		const stringMLGRUIX = await BirdOracledcZsC5j.substring.call(stringWfkC3Lq, uintEqZnE5f, uintl3C0FGk, {from: accounts[5]});
		const uintdLkilpW = await BirdOracledcZsC5j.getRatingByAddressString.call(stringx8TtEOB, {from: accounts[4]});
		const addressDqTOvZr = await BirdOracledcZsC5j.parseAddr.call(stringfDLzkxV, {from: "0x0000000000000000000000000000000000000001"});
		const 
fAhs3Ll = await BirdOracledcZsC5j.newChainRequest.call(stringk8rSWOr, stringsrtwg2o, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleoQ8ossx = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintX7IgsKl = BigInt("597")
		const stringPIZTC1i = "7HqAwCn9ytquIW8zf93aDbfqh9Hs2L9lkbnGsgN5zEepm1ouUL5h2tNWbcqKqr7JuNE2JOaKjAbYwbovl6PrBDoUZBvZV4ZWMFe"
		const uintWQlo2Y = BigInt("714")
		const stringmgcR3v = "NJrPdjHgyKIR6Eox8gN0Bfjs2ezFYY8ZRmlf"
		const stringepxPuf = await BirdOracleoQ8ossx.substring.call(stringPIZTC1i, uintX7IgsKl, {from: accounts[5]});
		const uintRxvIyGD = await BirdOracleoQ8ossx.getRating.call({from: accounts[5]});
		const stringWkJ0SpO = await BirdOracleoQ8ossx.substring.call(stringmgcR3v, uintWQlo2Y, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledcZsC5j = await BirdOracle.new({from: accounts[2]});
		const stringHUWSfkU = "VD66LfJqY1mxMnURCObuSBVNsixZj69GreiEzYXDKcjVNKEj6118dF2bkThBieWz7RlCMkxAbHLjZxqwIYAP7tDX"
		const addressANCBRyR = accounts[1]
		const uintGoNbVZy = BigInt("1245")
		const stringtMtR4US = "N8CbtyGpyKCAR5LGInoSPcDiHkEw8MF3n0StG8rnJfl82RCDmjWJVOGPXyG6s9UMahFI8oyjTN7DXBmSsRj"
		const stringXrA963i = "TQJVw2Wyt9oNpZPFqRVrbw0f4LISXG2Op5GoNyy9sg9invTD3yyAdkqmB0fZwpoesFfYXGO"
		const uintnyZhBri = BigInt("713")
		const uints77fCoh = BigInt("672")
		const stringpOzCjcZ = "k2T0voMs2XPGN2jeXtbASE5V0y495IkRIo55uCO8JXsNr0qopelfl47Q"
		const uintpcZlL99 = await BirdOracledcZsC5j.getRatingByAddressString.call(stringHUWSfkU, {from: accounts[1]});
		const uintmr9nMgz = await BirdOracledcZsC5j.getRating.call({from: accounts[3]});
		const uintODdv6i9 = await BirdOracledcZsC5j.getRatingByAddress.call(addressANCBRyR, {from: accounts[1]});
		const stringb3Hsj0N = await BirdOracledcZsC5j.substring.call(stringtMtR4US, uintGoNbVZy, {from: accounts[4]});
		const addresscF0xj3U = await BirdOracledcZsC5j.parseAddr.call(stringXrA963i, {from: accounts[4]});
		const stringopVN4MH = await BirdOracledcZsC5j.substring.call(stringpOzCjcZ, uints77fCoh, uintnyZhBri, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledcZsC5j = await BirdOracle.new({from: accounts[2]});
		const uintGjlW1t = BigInt("713")
		const uinthZVt1eX = BigInt("713")
		const stringpOzCjcZ = "k2T0voMs2XPGN2jeXtbASE5V0y495IkRIo55uCO8JXsNr0qopelfl47Q"
		const stringopVN4MH = await BirdOracledcZsC5j.substring.call(stringpOzCjcZ, uinthZVt1eX, uintGjlW1t, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRDTMwAe = await BirdOracle.new({from: accounts[4]});
		const uintXCnSX4L = BigInt("1425")
		const stringn7UpOZ = "iK6nEzbydG7DiCvQsyKi3BlhFO2n0aB8V3gSyMKxH"
		const uintGRTIv0 = BigInt("1524")
		const uinttQBXxZn = BigInt("127")
		const stringwkcnZLR = "Xa9tLSqjuzDiEAlkWXLXGOYXlB08mxE6iuLetS593G"
		const uintY0KsG3o = BigInt("1546")
		const uintDctTwrX = BigInt("1030")
		const stringxbQdO9z = "jgAD"
		const stringq9ZUXi8 = await BirdOracleRDTMwAe.substring.call(stringn7UpOZ, uintXCnSX4L, {from: accounts[2]});
		const stringbp5RCt5 = await BirdOracleRDTMwAe.substring.call(stringwkcnZLR, uinttQBXxZn, uintGRTIv0, {from: accounts[0]});
		const stringBjccNGC = await BirdOracleRDTMwAe.substring.call(stringxbQdO9z, uintDctTwrX, uintY0KsG3o, {from: accounts[2]});
	});
})