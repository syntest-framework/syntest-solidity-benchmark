const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclehqvId6J = await BirdOracle.new({from: accounts[2]});
		const uintyXveguN = BigInt("110")
		const uintar6YOom = BigInt("193")
		const stringXXZ9JuQ = "caxtpry1I1SZ4oYgpFHT3wcVYY1i4kcuWUaAgGVzRSvvQbSLCffFIHcR1OazMLnKDhhB2g"
		const uintdSzTBYk = BigInt("700")
		const stringV538Ify = "sy0k7gJgDBPiPq9jX1mDmJwBUIbTZffraF0fMIFjLaShUXh3d"
		const uintLSco8ha = BigInt("1670")
		const stringFrSur5B = "LGbEPnjqzt7qxj5dupnQtErpiF4Potr7oR"
		const stringg3OvRFT = "d08yYSZtMC9uhmihaJ1FCk1m9xMjmHXs2J61K75yC4Ivkkn8hAjxseArUaiphUU5ULFLIxJ2rRgTDISEFQKylis2UEB"
		const stringVQIxlse = "rXgfS4TX0AjnxJsOP5iy5Ix4NUwZxDtLimgYLahNUeQTaprS7gdXIu2VaJjWswMi9cYdybaxxsHRFBoIwYqy3TYLp6MfVx"
		const stringVeWeh3T = "ejXNAGSuAtqBwXmuLry4RTrV3MIeek3qqqGTNmnMz"
		const stringsFVVNAu = await BirdOraclehqvId6J.substring.call(stringXXZ9JuQ, uintar6YOom, uintyXveguN, {from: accounts[0]});
		const stringpM14bXQ = await BirdOraclehqvId6J.substring.call(stringV538Ify, uintdSzTBYk, {from: accounts[0]});
		const stringQW3Q545 = await BirdOraclehqvId6J.substring.call(stringFrSur5B, uintLSco8ha, {from: accounts[2]});
		const 
hM2gUva = await BirdOraclehqvId6J.newChainRequest.call(stringVQIxlse, stringg3OvRFT, {from: accounts[2]});
		const stringrCUwZlv = await BirdOraclehqvId6J.extractAddress.call(stringVeWeh3T, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleQhcA5YC = await BirdOracle.new({from: accounts[0]});
		const stringAHT92A0 = "TJ6wo1JjnpkHQkoxCjoaO7cBpOawto2tlzGOyof"
		const stringDjonKv5 = "OeHD3kZhkbHiQeaDC3gxzMZJjKPOZDVwmZYMTbBoRRVJPOuLtXX4lDYpksOGc73NNh8PR69Hp4ozUE4rr"
		const uintt6ZGyf = BigInt("1831")
		const uintnpfoMMU = BigInt("1082")
		const stringxXaooZ0 = "QQWDKU3xszBwLDe5npMgoQoD83pbdHuPbmhpkUw5L7TJV8GjAgzLtQ0UMEkf0tVuBj9tz6wR4sRHpxPQLhzWzn7"
		const addressBZwWHlO = accounts[0]
		const 
l3APChX = await BirdOracleQhcA5YC.newChainRequest.call(stringDjonKv5, stringAHT92A0, {from: accounts[2]});
		const stringCSIrK6R = await BirdOracleQhcA5YC.substring.call(stringxXaooZ0, uintnpfoMMU, uintt6ZGyf, {from: accounts[1]});
		const uintnvCp3OO = await BirdOracleQhcA5YC.getRatingByAddress.call(addressBZwWHlO, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclepwTVrmq = await BirdOracle.new({from: accounts[3]});
		const stringiS84Lcp = "lIgxMzbHgLt6O6ddbii2Sy9qo52IT7P1bbkY"
		const stringKpAUbMl = "iqaUHeVCxiYiQrqSWPqG9baTEpqTXlP8YadTu3EWofiCeOHRD7TL4aWYfIVpXSVJrUW7p5x95PmC"
		const stringPkVNSOK = "bnhMo128dzBL0mcvx1VFtk0vWlFubYnuHQdtd7MopwYkRfqyNvHB4xAcgKP"
		const stringGxuyFuY = "dGjEJwGUSkfiy65IeTgO7zaC45t7G7pETtfggGquWTw6YsvD8yg6QgEUW36e4dk8evMFt6RD1YhBZwzkDZ6"
		const uintbO6lkt1 = await BirdOraclepwTVrmq.getRatingByAddressString.call(stringiS84Lcp, {from: "0x0000000000000000000000000000000000000001"});
		const addressxElKz07 = await BirdOraclepwTVrmq.parseAddr.call(stringKpAUbMl, {from: accounts[4]});
		const uintXLhHRE = await BirdOraclepwTVrmq.getRating.call({from: accounts[3]});
		const 
zx56qrb = await BirdOraclepwTVrmq.newChainRequest.call(stringGxuyFuY, stringPkVNSOK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqD5B8oF = await BirdOracle.new({from: accounts[0]});
		const stringNDjLHfc = "dQz2rrKxSTA9d84nuInj9hvOiTCFVlEoOkstRAqm5KV1VASTf7GTHoudFtzfbV9EwjwWyOAVmd17SOjJzau6JwoqGE3sHbT"
		const stringBYjrsGu = "zrMdevegSlL2Fq3gVuHdm2YSEVeipLI8Jkzy9Aha8CLuinmglYK07knxy4aJLdVcFF5YAyMzxeTc2BPcL"
		const stringiq1kCN0 = "9H6bAWtXl8nUU8reuMFPUxKDhQBv7bYMlluomnPqXP4B4c8c5ofo"
		const addressUKyUbAj = await BirdOracleqD5B8oF.parseAddr.call(stringNDjLHfc, {from: accounts[4]});
		const uintlyhDi6Y = await BirdOracleqD5B8oF.getRatingByAddressString.call(stringBYjrsGu, {from: accounts[5]});
		const uintdLLLo8I = await BirdOracleqD5B8oF.getRatingByAddressString.call(stringiq1kCN0, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVGQpeq2 = await BirdOracle.new({from: accounts[4]});
		const addresskTFqoNs = accounts[2]
		const uintEVJXf3a = await BirdOracleVGQpeq2.getRating.call({from: accounts[0]});
		const uintBHlJEan = await BirdOracleVGQpeq2.getRatingByAddress.call(addresskTFqoNs, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGJPWFHC = await BirdOracle.new({from: accounts[0]});
		const uinthRQNkb0 = BigInt("1551")
		const stringye4EDF = "qHMcLJP2RZQ5oVvbcZHLQWqm9FbpcjSXdB0ISSiHLikNGZLUhnp"
		const addressMxUdQMh = accounts[2]
		const stringZN5yQz6 = "Ba2NU5zEBdop9D7q6Fcif7HVW7KFObhkCcVQjIqqMLvHSdG5WDRHHUD"
		const stringGpwa7CB = "B4Rriqw9L9wVtpG2gIrfvIaWt8lb6HT9yAFL4yYXvBreypTnKL5zkpKPtM"
		const uintsNesPdG = BigInt("196")
		const uintVr390vS = BigInt("995")
		const addressjjrOGeq = "0x0000000000000000000000000000000000000001"
		const stringEaebWJ = await BirdOracleGJPWFHC.substring.call(stringye4EDF, uinthRQNkb0, {from: accounts[2]});
		const uintTYg5GHs = await BirdOracleGJPWFHC.getRatingByAddress.call(addressMxUdQMh, {from: accounts[0]});
		const stringQVVEOvj = await BirdOracleGJPWFHC.extractAddress.call(stringZN5yQz6, {from: accounts[0]});
		const stringceReqir = await BirdOracleGJPWFHC.extractAddress.call(stringGpwa7CB, {from: accounts[5]});
		const 
VuyRdm6 = await BirdOracleGJPWFHC.updatedChainRequest.call(uintVr390vS, uintsNesPdG, {from: accounts[0]});
		const uintXMYgglK = await BirdOracleGJPWFHC.getRatingByAddress.call(addressjjrOGeq, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclevCUCZKT = await BirdOracle.new({from: accounts[4]});
		const uintoNsEXqN = BigInt("301")
		const uintk2c7HH5 = BigInt("1603")
		const stringfzCJpLh = "oiNrj9MyK21tPJxAhRGgHVGMwIqB2fcVJKVuPpphF6lrsJzNbzDnFJ"
		const stringxXLFt7M = "ugOmgybDZ8Kie27FShpHLYmcvYkGxlRCB62"
		const stringpiBInur = "XZDCrcOruxJt7QZLrN8PJcHzM7ikaM216YhJsVaXd24YQx4oNfhj4BTVLc7GLoz9zCoQd3brtV2vyOs7eml9sRWEGhjDRi8i"
		const 
bxhmz0 = await BirdOraclevCUCZKT.updatedChainRequest.call(uintk2c7HH5, uintoNsEXqN, {from: accounts[3]});
		const uintm5tIBm = await BirdOraclevCUCZKT.getRating.call({from: accounts[3]});
		const 
qNGHi0K = await BirdOraclevCUCZKT.newChainRequest.call(stringxXLFt7M, stringfzCJpLh, {from: accounts[2]});
		const stringXSlBBG = await BirdOraclevCUCZKT.extractAddress.call(stringpiBInur, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNF3otHM = await BirdOracle.new({from: accounts[5]});
		const stringcyUe4oS = "9hG6UDJrTfkmIqHzR98VffesaVBmXvHdqvp8wPnywcSSCDYtthSgCANk8ihYIF5"
		const uintgg5hhq9 = BigInt("1993")
		const uintqDoTWa = BigInt("964")
		const stringoSO3gs8 = "C6hlp7KuDsA2lJlsgbTctMoNyJIOCRQ6"
		const stringnPLdCDn = "jmu6rP2TIrBB5G9OHWw8ZjmrwOxlMQQrGKifvKR1epgJ2ZqJQhTN7RwpQQTGA7s3Ffx7HRc8KWApLcoC48cYzUOHkCWd2Y0Dt2z"
		const stringu56fQ59 = "zXznxQQySIeVQ1GZUcmKlUHX4kGLzJnyWPLeJBqwgSJ6maGZnrWrE6t"
		const uintju6lZUG = await BirdOracleNF3otHM.getRatingByAddressString.call(stringcyUe4oS, {from: accounts[2]});
		const stringSZA0CUA = await BirdOracleNF3otHM.substring.call(stringoSO3gs8, uintqDoTWa, uintgg5hhq9, {from: accounts[4]});
		const stringTKFhb9u = await BirdOracleNF3otHM.extractAddress.call(stringnPLdCDn, {from: accounts[4]});
		const addressroUJuvO = await BirdOracleNF3otHM.parseAddr.call(stringu56fQ59, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVGQpeq2 = await BirdOracle.new({from: accounts[4]});
		const uintBzfUmg = BigInt("1055")
		const stringld50OT7 = "eBjECTAuzQTS2CvAokt7jL3PiVowSbgD5HITnei3oAKTBxJAXm0vI2N3lzNQNFDUDg9vxM2cT8KK6rt9oe9B"
		const addressnAJGIPm = accounts[2]
		const stringhgsuMEV = await BirdOracleVGQpeq2.substring.call(stringld50OT7, uintBzfUmg, {from: accounts[3]});
		const uintBHlJEan = await BirdOracleVGQpeq2.getRatingByAddress.call(addressnAJGIPm, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleB6gK9q2 = await BirdOracle.new({from: accounts[4]});
		const uintydVnvyP = BigInt("1214")
		const stringJVvZ75G = "OAPyE9H76J3nAqnSVxgzhrc4oOBgENDi34qUkO1zKMZ7WfpUGbcshGM5yETkcoTT8qdpKPAoHgDx"
		const stringsVqoEhu = "vy3q2qqjNVFBzYyQ4C8cKd6JT5FrndW6OX347mzwB772Kc4TSipGagJKWVmaYcQOFrKf6WU7DPd"
		const addressIeiLcRt = accounts[1]
		const addressNBm5C3q = accounts[4]
		const stringDFN4gSn = "qTeP4oYICF6ApvHm0f5QvT8KbwhPXXX7b782wRtjNI2eRSYNOuuzuIjxecpZExGEyWq5TrDhCXvUpiBs"
		const stringEMm66Hl = "RoCifCR5Q860TO"
		const stringR9C63is = await BirdOracleB6gK9q2.substring.call(stringJVvZ75G, uintydVnvyP, {from: accounts[0]});
		const uint79GfID = await BirdOracleB6gK9q2.getRatingByAddressString.call(stringsVqoEhu, {from: accounts[4]});
		const uintYRyDTQt = await BirdOracleB6gK9q2.getRatingByAddress.call(addressIeiLcRt, {from: accounts[3]});
		const uintMSHz7Rp = await BirdOracleB6gK9q2.getRatingByAddress.call(addressNBm5C3q, {from: accounts[1]});
		const 
Q0peSa = await BirdOracleB6gK9q2.newChainRequest.call(stringEMm66Hl, stringDFN4gSn, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVGQpeq2 = await BirdOracle.new({from: accounts[4]});
		const addressoInd2s8 = accounts[2]
		const uintkDKsyE = BigInt("1287")
		const stringTytbB4 = "FgPYW4WyRStVPFWQisJhj9UFLQLJ6QqwI"
		const uintpKUj5im = BigInt("1589")
		const uintc4IbyT2 = BigInt("1978")
		const uintBHlJEan = await BirdOracleVGQpeq2.getRatingByAddress.call(addressoInd2s8, {from: accounts[0]});
		const stringseKPki6 = await BirdOracleVGQpeq2.substring.call(stringTytbB4, uintkDKsyE, {from: accounts[5]});
		const 
qNoKtYn = await BirdOracleVGQpeq2.updatedChainRequest.call(uintc4IbyT2, uintpKUj5im, {from: accounts[4]});
		const uintGYPLKEW = await BirdOracleVGQpeq2.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleVfqdI4o = await BirdOracle.new({from: accounts[2]});
		const uintEycpia4 = BigInt("1918")
		const stringkCJeMJ = "qo9D9J9DWl3RZeamuvQQQhmaAqMUJYK"
		const stringUIs9Gt3 = "pkDFIFTdz"
		const stringVjUMQG3 = "KHy7X71iJbbUUL9EO5b3wFm5M79x3SFS6l5IORU33bSEN3r8mRUu2IAgVnkAE9vwCcT7MLibdwm3Fxax2ch27tdz9n1"
		const uinty6UDAtm = BigInt("852")
		const stringBXQYc0F = "3RP7mE39jRnQHTa16zuJ8"
		const stringv7KEgHw = await BirdOracleVfqdI4o.substring.call(stringkCJeMJ, uintEycpia4, {from: accounts[1]});
		const 
InhwJbP = await BirdOracleVfqdI4o.newChainRequest.call(stringVjUMQG3, stringUIs9Gt3, {from: accounts[2]});
		const stringpcJff0Q = await BirdOracleVfqdI4o.substring.call(stringBXQYc0F, uinty6UDAtm, {from: accounts[5]});
		const uintSYAEht = await BirdOracleVfqdI4o.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKpEMwfE = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRJp9LO1 = BigInt("584")
		const uintcmc0ViO = BigInt("1071")
		const stringkXbtDiJ = "Io8ra6pwsBAMw4gLDsN7wGfSwjC1QjuOTQzWnXgzzJZjtnP9Ssw2MY3fbW6bx4zs0ONGUYGiESY81jZgWTghgVPAV"
		const stringwHQziPk = "Q0EocyhlntcZMy88n9yDzKGtzWnaRHTk5Vm19NXxi3DCkhQAQGV"
		const stringCRb1PKB = await BirdOracleKpEMwfE.substring.call(stringkXbtDiJ, uintcmc0ViO, uintRJp9LO1, {from: "0x0000000000000000000000000000000000000001"});
		const uintRq4Gyyk = await BirdOracleKpEMwfE.getRatingByAddressString.call(stringwHQziPk, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclezeHLr5P = await BirdOracle.new({from: accounts[2]});
		const uintT8a7YXr = BigInt("164")
		const stringfTXh0LN = "Qcrcne3Gypj2qR3DSwNHEzEcDFihAEIXgSjp2jA"
		const uintcqegA4W = BigInt("954")
		const uintb6cIUhX = BigInt("1076")
		const stringfcat0Cs = "EXimprrYAQfHyMsyErA2ftOudjBKmXBKbkjJ2GI8fkfn6dCQ0CummljIS5aI83kobLpDK14y4AlK9NrbD1tymz0uuA"
		const uintQ7JptkD = BigInt("861")
		const uintjrELer8 = BigInt("20")
		const stringDZfIMrX = "qGwWb886OKgemXRpf5K3Cq582lUOuaUs4JTEDDn5keOiquYjJwfToSa"
		const stringcsv0eNR = await BirdOraclezeHLr5P.substring.call(stringfTXh0LN, uintT8a7YXr, {from: "0x0000000000000000000000000000000000000001"});
		const stringKVjO9Oy = await BirdOraclezeHLr5P.substring.call(stringfcat0Cs, uintb6cIUhX, uintcqegA4W, {from: accounts[0]});
		const stringmr2TdM = await BirdOraclezeHLr5P.substring.call(stringDZfIMrX, uintjrELer8, uintQ7JptkD, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleajVpM79 = await BirdOracle.new({from: accounts[4]});
		const addressccfZcVl = accounts[3]
		const uintDFvs65b = BigInt("1022")
		const stringSrwB5c8 = "fdIpAkSpTH4lLsXKlT5H4aN71XoYGWyJ2diSlVxrBn1WQOpMIOdOIONCUbNWim"
		const uintDtFx4iW = BigInt("681")
		const uintg3fBjty = BigInt("1953")
		const uintrYlxtI = BigInt("1587")
		const stringrOEGJQx = "cmCJnESsAf4jTpls73m"
		const uintbUhiIVu = await BirdOracleajVpM79.getRatingByAddress.call(addressccfZcVl, {from: accounts[3]});
		const stringY5KdNOV = await BirdOracleajVpM79.substring.call(stringSrwB5c8, uintDFvs65b, {from: accounts[4]});
		const 
H1DvFl = await BirdOracleajVpM79.updatedChainRequest.call(uintg3fBjty, uintDtFx4iW, {from: accounts[2]});
		const stringoat7sOl = await BirdOracleajVpM79.substring.call(stringrOEGJQx, uintrYlxtI, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclexn54gRr = await BirdOracle.new({from: accounts[4]});
		const stringCS9oPDB = "w8RyWOgaqBWUMMjUeZU9JYbMhEnh1AiyVBmLx5oKbkeBAV4nSuHdNXCbbM46A7ZmEFkkCwdoalBFzr"
		const uintJcirDs9 = BigInt("740")
		const uintxzMymat = BigInt("740")
		const stringnSOPkIk = "NflvXxCl2UgaDGqh5Xcn4RkLfzFE78guKy4CQmbnI49O8cr"
		const stringLh57RGl = "3nUkwzcdtUeBqKcYQfN8dUoUPbAzmLfFJrfnlhxacEULLjcvRLGrF6vaVpmDtus"
		const addressdjMrs09 = await BirdOraclexn54gRr.parseAddr.call(stringCS9oPDB, {from: accounts[3]});
		const stringURXX2xA = await BirdOraclexn54gRr.substring.call(stringnSOPkIk, uintxzMymat, uintJcirDs9, {from: accounts[2]});
		const uintqW9NuR1 = await BirdOraclexn54gRr.getRatingByAddressString.call(stringLh57RGl, {from: accounts[0]});
	});
})