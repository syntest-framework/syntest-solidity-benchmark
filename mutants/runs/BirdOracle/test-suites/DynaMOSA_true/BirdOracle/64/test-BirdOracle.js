const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleFGOMfvC = await BirdOracle.new({from: accounts[3]});
		const stringaAoOsl = "xMhDPWF1ww9KlZMjFmcPieWSoQxolpOuTnN38gZveXrHhNMyLufmtFpNOcRgaugorpdnmXGm6OpCA"
		const stringivH8SP = "1DlCrFvRl95R3hCJjGyUSKYOReA0Kq8OgrbRrlGTBC4BldCgyzxWacosUSkMYLsBDyoJ44KdotNSEpSB9yt"
		const stringfdPWqQJ = "w3uyh05a32NlUxezpRVbMOeWi3qtOUSihasGgmwOHJMW6rDRuv4kq"
		const stringQpSbvBA = "7JRH64WG4sukqH7K3vcOFCx1jeYdZtrtH"
		const stringxw2gMFN = "xX2LmT1DavI3Erp4s4hEQkxoiio3dNE7PIvkvqxk5qAC7NuHIARmoDij8VC6Tynl9mpX0"
		const addressgRH44zO = accounts[2]
		const string848A0Q = await BirdOracleFGOMfvC.extractAddress.call(stringaAoOsl, {from: accounts[4]});
		const addressEkiiJ1h = await BirdOracleFGOMfvC.parseAddr.call(stringivH8SP, {from: accounts[0]});
		const 
nQstwZF = await BirdOracleFGOMfvC.newChainRequest.call(stringQpSbvBA, stringfdPWqQJ, {from: accounts[2]});
		const stringqwUHXO5 = await BirdOracleFGOMfvC.extractAddress.call(stringxw2gMFN, {from: accounts[0]});
		const uintnOwakb3 = await BirdOracleFGOMfvC.getRatingByAddress.call(addressgRH44zO, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleIrouChB = await BirdOracle.new({from: accounts[1]});
		const stringqWMvr1W = "o1bejYnnMg19R31"
		const stringPe0BYOF = "U6F5QXsF2nevrKqFvimUmxMuW695aiw5djuJ1fEt"
		const uintLz0c0qh = await BirdOracleIrouChB.getRating.call({from: accounts[4]});
		const uintORNLpy = await BirdOracleIrouChB.getRatingByAddressString.call(stringqWMvr1W, {from: accounts[2]});
		const stringRGUeUa = await BirdOracleIrouChB.extractAddress.call(stringPe0BYOF, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL0jIvEx = await BirdOracle.new({from: accounts[1]});
		const stringGKX1GgE = "zb4PD8adBm7mCWLMFWBRl4D5edxlewR2TcxNKmGZZwr49OJNUiAAGjB0Rak"
		const uintuLbWjWz = BigInt("1885")
		const uintorb1LdQ = BigInt("1860")
		const stringIGTZESE = "9CwTqqCFn3en12FoSyS01ZdyTUP1blhjDmBqS1V8wE97JQv6Hp1gguF392l6co3jsXVCrhrq"
		const uintKHjaHMc = await BirdOracleL0jIvEx.getRatingByAddressString.call(stringGKX1GgE, {from: "0x0000000000000000000000000000000000000001"});
		const stringjJA2PJK = await BirdOracleL0jIvEx.substring.call(stringIGTZESE, uintorb1LdQ, uintuLbWjWz, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledT8c3wo = await BirdOracle.new({from: accounts[2]});
		const uintjtrdUkr = BigInt("1277")
		const stringn8ytf9h = "WThdNGeu1fRRM3vwRwM6rg9EPIDDDAAaMxx0jFvF686xYRRuNOOiGJaYnNgbcWYITFYOGGrlYBpocjTGApIXFttb"
		const stringMctOGP7 = "nN0LIg9he5KD9g5pJAlRcd2YcQx5Lj2HtphrLoPpOBWumJGCj"
		const uintxvCgNfr = BigInt("664")
		const string5P5oee = "xU0IKyjCl4kWq4AYif1TIyR5vqzIvrwJwEpNvSsbKX7ybRBeHRBlC6OI2Z5m2FcNgsppIqBRmYo8YxBiWJVQNHbUsyxJ5chy"
		const stringnTJzkOn = "3k3JTrNLPO3pFjNzQ57KiAHg96wsuWmQ2be5m1dHC1sU6Y9nqbqcA3rd"
		const stringOwNmtFv = "jTuCGvSTc8XAN03RliR8gFE2ZLRkPYblVTnMo4yIiSEzosllRgN7idYLnAYNXGZ2zE6"
		const uintoe0ij85 = BigInt("1868")
		const uintDBP0Dto = BigInt("165")
		const addressQR28VI4 = accounts[2]
		const stringiSqECN = await BirdOracledT8c3wo.substring.call(stringn8ytf9h, uintjtrdUkr, {from: accounts[3]});
		const stringxmp2VV9 = await BirdOracledT8c3wo.extractAddress.call(stringMctOGP7, {from: accounts[3]});
		const stringv6fIkPs = await BirdOracledT8c3wo.substring.call(string5P5oee, uintxvCgNfr, {from: "0x0000000000000000000000000000000000000001"});
		const 
eB2JOBY = await BirdOracledT8c3wo.newChainRequest.call(stringOwNmtFv, stringnTJzkOn, {from: "0x0000000000000000000000000000000000000001"});
		const 
pk0P5Cp = await BirdOracledT8c3wo.updatedChainRequest.call(uintDBP0Dto, uintoe0ij85, {from: accounts[2]});
		const uinttDdZq24 = await BirdOracledT8c3wo.getRatingByAddress.call(addressQR28VI4, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleDAruJTH = await BirdOracle.new({from: accounts[0]});
		const string5Ll1Jj = "9dyRylwDSQfZKHdlGFgUwi0Egkug6ICVLRhvAUBM2N4310"
		const addressmvdLVA = accounts[3]
		const stringRdECCnx = "vGCNFQE4A4oz6dl7Yd6naP5VHgYMVPSNDTAV8dXSJE3uU4gd7AbFY87LdIKwOJ8txnaBVb4wvb94X8CkeQlxfL46gq5jnHs7v"
		const stringyaBQ7Sm = "6zbDEa6DKLtABh4JYcMap21pXlbQt8GjZNfzbbIrVAFvuxvpKyALnbhzUOilkWzWXo"
		const stringDiJjKs6 = "0GDkVTxitDFmAMcjR2sEUHQVgDgDYLixNGEJ4qtNs65sD1Vd1Dso3aynleb5vdiu7oujMPqO7zk"
		const uinto5YupMb = await BirdOracleDAruJTH.getRatingByAddressString.call(string5Ll1Jj, {from: "0x0000000000000000000000000000000000000001"});
		const uintM9XviF8 = await BirdOracleDAruJTH.getRatingByAddress.call(addressmvdLVA, {from: accounts[5]});
		const uintRlw0s6X = await BirdOracleDAruJTH.getRatingByAddressString.call(stringRdECCnx, {from: accounts[0]});
		const 
fHS28gs = await BirdOracleDAruJTH.newChainRequest.call(stringDiJjKs6, stringyaBQ7Sm, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGbCXhe = await BirdOracle.new({from: accounts[4]});
		const uintGZYm63u = BigInt("896")
		const stringNaQGTlk = "UigS2KXLQ83kI2AuAX4OKkBuDFiFEcBkwGgP5sXVcdfmP30baMxLfCR5kVdJPAPiwLZIb8BHIPHD"
		const stringU5HWvm6 = "8GjqDT1I"
		const uintYzsQcK5 = BigInt("289")
		const stringVHihxq1 = "EEpJIcwobCVG9"
		const stringKvsU0fg = await BirdOracleGbCXhe.substring.call(stringNaQGTlk, uintGZYm63u, {from: accounts[0]});
		const stringVeZIAMN = await BirdOracleGbCXhe.extractAddress.call(stringU5HWvm6, {from: accounts[4]});
		const uintak7cmFf = await BirdOracleGbCXhe.getRating.call({from: accounts[0]});
		const stringGNITrHg = await BirdOracleGbCXhe.substring.call(stringVHihxq1, uintYzsQcK5, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleDAruJTH = await BirdOracle.new({from: accounts[0]});
		const string5Ll1Jj = "9dyRylwDSQfZKHdlGFgUwi0Egkug6ICVLRhvAUBM2N4310"
		const addresspOrX0lw = accounts[3]
		const uintbaeenX = BigInt("1218")
		const stringedkz8B2 = "UwI7OoeOmAdUax43fQ2Dmbx7epWgckzz1NQwl4HAfoDGHPhBiPNxu"
		const addressO81cfxU = accounts[4]
		const stringRdECCnx = "vGCNFQE4A4oz6dl7Yd6naP5VHgYMVPSNDTAV8dXSJE3uU4gd7AbFY87LdIKwOJ8txnaBVb4wvb94X8CkeQlxfL46gq5jnHs7v"
		const uinthX8xEa = BigInt("273")
		const uintMhHKyKw = BigInt("244")
		const stringyaBQ7Sm = "6zbDEa6DKLtABh4JYcMap21pXlbQt8GjZNfzbbIrVAFvuxvpKyALnbhzUOilkWzWXo"
		const stringDiJjKs6 = "0GDkVTxitDFmAMcjR2sEUHQVgDgDYLixNGEJ4qtNs65sD1Vd1Dso3aynleb5vdiu7oujMPqO7zk"
		const uinto5YupMb = await BirdOracleDAruJTH.getRatingByAddressString.call(string5Ll1Jj, {from: "0x0000000000000000000000000000000000000001"});
		const uintM9XviF8 = await BirdOracleDAruJTH.getRatingByAddress.call(addresspOrX0lw, {from: accounts[5]});
		const stringwCE13ur = await BirdOracleDAruJTH.substring.call(stringedkz8B2, uintbaeenX, {from: accounts[5]});
		const uintvJOexH9 = await BirdOracleDAruJTH.getRatingByAddress.call(addressO81cfxU, {from: accounts[3]});
		const uintRlw0s6X = await BirdOracleDAruJTH.getRatingByAddressString.call(stringRdECCnx, {from: accounts[0]});
		const 
mBNp95 = await BirdOracleDAruJTH.updatedChainRequest.call(uintMhHKyKw, uinthX8xEa, {from: accounts[5]});
		const 
fHS28gs = await BirdOracleDAruJTH.newChainRequest.call(stringDiJjKs6, stringyaBQ7Sm, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL0jIvEx = await BirdOracle.new({from: accounts[1]});
		const stringGKX1GgE = "zb4PD8adBm7mCWLMFWBRl4D5edxlewR2TbxNKmGZZwr49OJNUiAAGjB0Rak"
		const addressuinx6b2 = accounts[4]
		const uinthIQgbSf = BigInt("893")
		const uintYp4Qvv2 = BigInt("1706")
		const stringOFf6tfh = "uaTeODS6gELstajhSMbASErDhYWPd8PS8LWuJm1LOaq19Tq8Aaa1sU19tD87PeydCiI"
		const stringqvB3D8j = "u5qFHIjH2JAFRArQQF9V1y16UjMLFjWbyak5F1pHtUxtTU"
		const uintKHjaHMc = await BirdOracleL0jIvEx.getRatingByAddressString.call(stringGKX1GgE, {from: "0x0000000000000000000000000000000000000001"});
		const uintCySrkm9 = await BirdOracleL0jIvEx.getRatingByAddress.call(addressuinx6b2, {from: accounts[0]});
		const 
FhcheZ4 = await BirdOracleL0jIvEx.updatedChainRequest.call(uintYp4Qvv2, uinthIQgbSf, {from: "0x0000000000000000000000000000000000000001"});
		const 
LMqelZw = await BirdOracleL0jIvEx.newChainRequest.call(stringqvB3D8j, stringOFf6tfh, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL0jIvEx = await BirdOracle.new({from: accounts[1]});
		const stringGKX1GgE = "zb4PD8adBm7mCWLMFWBRl4D5edxlewR2TcxNKmGZZwr49OJNUiAAGjB0Rak"
		const addresst4SCz0 = accounts[1]
		const uintc68w2Ba = BigInt("1855")
		const uintZeYOlIm = BigInt("1860")
		const stringIGTZESE = "9CwTqqCFn3en12FoSyS01ZdyTUP1blhjDmBqS1V8wE97JQv6Hp1gguF392l6co3jsXVCrhrq"
		const uintKHjaHMc = await BirdOracleL0jIvEx.getRatingByAddressString.call(stringGKX1GgE, {from: "0x0000000000000000000000000000000000000001"});
		const uintpXxE7Lw = await BirdOracleL0jIvEx.getRatingByAddress.call(addresst4SCz0, {from: accounts[4]});
		const stringjJA2PJK = await BirdOracleL0jIvEx.substring.call(stringIGTZESE, uintZeYOlIm, uintc68w2Ba, {from: accounts[0]});
		const uintwGEYLV0 = await BirdOracleL0jIvEx.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL0jIvEx = await BirdOracle.new({from: accounts[1]});
		const stringGKX1GgE = "zb4PD8adBm7mCWLMFWBRl4D5edxlewR2TcxNKmGZZwr49OJNUiAAGjB0Rak"
		const uintt0PkLz6 = BigInt("903")
		const stringfikqv2C = "Uy0SLuctsbgnmmuwCJf6fbxXfnlAOw4mgK9zAmFbqIDbyElCge0pq7622nUkhXElgIScMUK0m"
		const addressZLy9GwU = accounts[1]
		const uintAzTgBJ = BigInt("1885")
		const uintsZRdabZ = BigInt("1860")
		const stringIGTZESE = "9CwTqqCFn3en12FoSyS01ZdyTUP1blhjDmBqS1V8wE97JQv6Hp1gguF392l6co3jsXVCrhrq"
		const uintKHjaHMc = await BirdOracleL0jIvEx.getRatingByAddressString.call(stringGKX1GgE, {from: "0x0000000000000000000000000000000000000001"});
		const string5hLOQk = await BirdOracleL0jIvEx.substring.call(stringfikqv2C, uintt0PkLz6, {from: "0x0000000000000000000000000000000000000001"});
		const uintpXxE7Lw = await BirdOracleL0jIvEx.getRatingByAddress.call(addressZLy9GwU, {from: accounts[4]});
		const stringjJA2PJK = await BirdOracleL0jIvEx.substring.call(stringIGTZESE, uintsZRdabZ, uintAzTgBJ, {from: accounts[0]});
		const uintwGEYLV0 = await BirdOracleL0jIvEx.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewLiY5Fi = await BirdOracle.new({from: accounts[3]});
		const uintnRS6HvH = BigInt("1994")
		const stringgowLDiD = "xorunoaz7b6YJLnOytkRUcExyEhCZVfHmAcRTldcCs5"
		const uintE9I0w5U = BigInt("1265")
		const uintMHMfAEs = BigInt("1671")
		const uintlsb1SJD = BigInt("643")
		const uintRYA0SV = BigInt("1635")
		const uintK2gCiRM = BigInt("693")
		const uintgk8uZZc = BigInt("740")
		const stringITMBFKl = "KSz0WOW7TJD6a99OVAPT6fLC2kJU1aXAUNcczUUoDQeduwrJNyMf1RVSfTjumeg"
		const string5F2kiK = "kEsJep1ybKMdlJqdp7"
		const stringswktqlb = await BirdOraclewLiY5Fi.substring.call(stringgowLDiD, uintnRS6HvH, {from: accounts[1]});
		const 
yHm7T9H = await BirdOraclewLiY5Fi.updatedChainRequest.call(uintMHMfAEs, uintE9I0w5U, {from: accounts[2]});
		const 
KkX7cJU = await BirdOraclewLiY5Fi.updatedChainRequest.call(uintRYA0SV, uintlsb1SJD, {from: accounts[1]});
		const uintdlpu3mX = await BirdOraclewLiY5Fi.getRating.call({from: accounts[2]});
		const stringzfVR8SP = await BirdOraclewLiY5Fi.substring.call(stringITMBFKl, uintgk8uZZc, uintK2gCiRM, {from: accounts[4]});
		const uintjsCnBw = await BirdOraclewLiY5Fi.getRatingByAddressString.call(string5F2kiK, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOYfFuYT = await BirdOracle.new({from: accounts[2]});
		const stringVqO5twa = "sz0QvTPkbRKDuidQRE2dX4cqmdgDwgbuSuIyrC4kOFlSkdkAfnNITBueY5K09D9shxLrQz58G"
		const uintAmvHqm1 = BigInt("1849")
		const stringzV0p9jE = "HrrqQLFSjy9qWd4iG2uMoK1E2IrtPiJlIRR6DJaOAsBXNwnfK49qjqZ1Bw7puVRCQzRAmGeCyhnIr6gd"
		const uintUwI5P82 = BigInt("1867")
		const uintsQl4XVJ = BigInt("1800")
		const stringoI5EueN = "taS4ZJhAnWI5MnWSsCrilqgRAtAowqdji6Nag5eetPUlNPaz1gJoQxC9wuUHrP3clsVOIH8jUeecKMVLOSDh2hP8xS4Nzy"
		const stringAmORvUT = "OMtCKFg3JYnFKy"
		const uintBtmecjS = BigInt("1807")
		const stringOiQSEEi = "2XDBmJSyhMPyvH67lHvRE1PrMFTeCnvqmN"
		const stringpZgY1Zw = "ligU0SqH66oahBgT9lgqpnmvKrjJvdzwhSyrQ1ekbT"
		const stringhWKNINo = "3v3YBRv8GtO7cPtpXHK24w4OLIQV43NNPjK9zsHFdXUyaMQxKGro8a7gsFUy97UopHvpg1QIGW"
		const uintwl5Uq4 = await BirdOracleOYfFuYT.getRatingByAddressString.call(stringVqO5twa, {from: "0x0000000000000000000000000000000000000001"});
		const stringN8kay4m = await BirdOracleOYfFuYT.substring.call(stringzV0p9jE, uintAmvHqm1, {from: accounts[2]});
		const 
lPhruHQ = await BirdOracleOYfFuYT.updatedChainRequest.call(uintsQl4XVJ, uintUwI5P82, {from: accounts[4]});
		const addressc3nrKkD = await BirdOracleOYfFuYT.parseAddr.call(stringoI5EueN, {from: accounts[3]});
		const addressO7kbz2n = await BirdOracleOYfFuYT.parseAddr.call(stringAmORvUT, {from: "0x0000000000000000000000000000000000000001"});
		const stringMq7liB3 = await BirdOracleOYfFuYT.substring.call(stringOiQSEEi, uintBtmecjS, {from: accounts[1]});
		const stringilO7TKG = await BirdOracleOYfFuYT.extractAddress.call(stringpZgY1Zw, {from: accounts[0]});
		const stringzVpTPmq = await BirdOracleOYfFuYT.extractAddress.call(stringhWKNINo, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclettUZFwx = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringdX7i1cv = "B1jKpbUt6SgSp4NwYzeaM7HVS93hHpFfKy2mzVI6rXmHlCCib0cUPyhhTcjQGtsz5BxjOFIrTJNNNRy"
		const stringvwKQoMC = "sRW"
		const stringFYcNiOw = "RiczHMGv1LL3rAqKpLRzPDaD31wSptHIgOXyBeMeqkW4rzw6Q4E8SV9GDIelPczhgszdCbAht"
		const uintTxCfZ4z = BigInt("1845")
		const uintj8kFVzR = BigInt("1005")
		const stringZAFptXa = "tZdkmaZ1bJN2iF4vS5hjI6mWmLnkBv39kfuQcNka6sy6vHNvjs"
		const 
z2DmypX = await BirdOraclettUZFwx.newChainRequest.call(stringvwKQoMC, stringdX7i1cv, {from: accounts[4]});
		const addressLNYvUW = await BirdOraclettUZFwx.parseAddr.call(stringFYcNiOw, {from: accounts[0]});
		const 
t9CEArJ = await BirdOraclettUZFwx.updatedChainRequest.call(uintj8kFVzR, uintTxCfZ4z, {from: accounts[2]});
		const addresszb6yqca = await BirdOraclettUZFwx.parseAddr.call(stringZAFptXa, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKlfAx7C = await BirdOracle.new({from: accounts[4]});
		const uintJcyaR68 = BigInt("1021")
		const stringT63bxhS = "NpD6dqCxdhVBDyY2KZtNsg3I5GYKItuFGIMGDkLUyoMFYdtZlTIvQidd3wdhlk"
		const stringQ6DEtgF = "s05IoKrYyfH6INijuQ8GN5uNrOOUYg9Y8RAWYBz8FmM4szhgUdIvs77q9NISBp1wemWZpQiowXMoU22D"
		const stringeyBv9BV = await BirdOracleKlfAx7C.substring.call(stringT63bxhS, uintJcyaR68, {from: accounts[4]});
		const stringj9nBIaF = await BirdOracleKlfAx7C.extractAddress.call(stringQ6DEtgF, {from: accounts[3]});
	});
})