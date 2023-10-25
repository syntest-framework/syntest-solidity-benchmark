const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclei6ojSi = await BirdOracle.new({from: accounts[4]});
		const addressVGjMb9m = accounts[0]
		const stringEvepboR = "9xCy63Ms7hYriCqNlWzataH4nLKTNB"
		const uintIflMHmF = BigInt("1997")
		const uintgXi4fgd = BigInt("426")
		const stringdY7fB00 = "Md8HNUu6zAILcuoPEzFng7lqBmkeTPYP8OPAQ791GPsFg2sEzoIjdeOhVXfd4czLF1AU621HK4jve8Fw5BFNzovb9L33Ev"
		const uintHDB8gbv = await BirdOraclei6ojSi.getRating.call({from: accounts[5]});
		const uints2YmZqX = await BirdOraclei6ojSi.getRatingByAddress.call(addressVGjMb9m, {from: accounts[0]});
		const stringM4mg7SX = await BirdOraclei6ojSi.extractAddress.call(stringEvepboR, {from: accounts[1]});
		const stringCIhDU4Q = await BirdOraclei6ojSi.substring.call(stringdY7fB00, uintgXi4fgd, uintIflMHmF, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclelJ4vCrk = await BirdOracle.new({from: accounts[1]});
		const stringsqdqmMo = "DW1xPRU39hjHwpSfas483KNSnItWWa7m9NxCAb8kr1SFoxqQpDTMlrKJ4txVkQlSIf"
		const stringayaS3x = "aLx4HUYWb9ZdNoqfARiCzHNI4nq7hHpcGcfn2Icd"
		const uintsRF8Bf = BigInt("1468")
		const stringDiVB9Yo = "fsrbE392r6yoE"
		const uintwJJqWTC = BigInt("0")
		const stringn1hBaI0 = "Chkuhz1Qg8cvy17Nm99BsftYG39"
		const stringN22FT05 = "q0XsmzckjshOu1YEeFJ1zyVT095XicrWQ3zOCSRvnncuQiu0UWMNBhm6TMSPcPmJlOobSEy28cHPA9"
		const 
xZ2qSZe = await BirdOraclelJ4vCrk.newChainRequest.call(stringayaS3x, stringsqdqmMo, {from: accounts[1]});
		const stringoqcfTZf = await BirdOraclelJ4vCrk.substring.call(stringDiVB9Yo, uintsRF8Bf, {from: accounts[3]});
		const stringda8dNPA = await BirdOraclelJ4vCrk.substring.call(stringn1hBaI0, uintwJJqWTC, {from: accounts[3]});
		const uintLlCYaK = await BirdOraclelJ4vCrk.getRatingByAddressString.call(stringN22FT05, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclee7jFmuq = await BirdOracle.new({from: accounts[1]});
		const uintUZtM81M = BigInt("47")
		const string2Q7wG9 = "LRm3uS3JNxHBQkmlL451WnosVk8mqCHOJgjNpR6HaFqS6WjPupdr5jnzq2uniF9vjgfBB871bR28owYbDnwVq0vfHxRcoK"
		const stringjDrWjIo = "m0d2PGfm7Sy6pVxhvOR5pNEbxOiOPMuNf2Xp1Y2NEmUlxUSBC"
		const stringpwwbtfQ = "9aPQ3M4ZYJIvDN6zJ5SdGRfWxgsuHoxQKQBFuO7WCsnd8c2Ynxs2M7pHAaA2cHW2PMgR9zsqFYK6DUZkWk"
		const uintnb8tHd3 = BigInt("275")
		const stringPC244Ur = "d53jdJnR1z5vyd8gerfLkihNhYS8LPBOMcAJo3mXkGnXiF48WRbinGipUI9jWvyhQSYkILqJ"
		const addressZM1dHG = accounts[0]
		const stringLNC3n3j = await BirdOraclee7jFmuq.substring.call(string2Q7wG9, uintUZtM81M, {from: accounts[3]});
		const 
CwuUq2u = await BirdOraclee7jFmuq.newChainRequest.call(stringpwwbtfQ, stringjDrWjIo, {from: accounts[1]});
		const stringpqS3uWf = await BirdOraclee7jFmuq.substring.call(stringPC244Ur, uintnb8tHd3, {from: accounts[0]});
		const uintkg9J3ta = await BirdOraclee7jFmuq.getRatingByAddress.call(addressZM1dHG, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclebLX8oq3 = await BirdOracle.new({from: accounts[5]});
		const uintV1mn99P = BigInt("507")
		const stringGhzpVkR = "o3VH4LxQGMxMewdEDEuKydnWheQ5TXt"
		const uintNyErG6 = BigInt("318")
		const uintEPWgq32 = BigInt("438")
		const stringUEhEZCF = "r4bpuKQT5sxmokPOm"
		const uintgPWiGPo = BigInt("77")
		const uintb9gx6py = BigInt("611")
		const string5zQSkT = "qhTDvWAoiBc8BfnuV5CFTQthMFwuu"
		const addressptAbSj0 = accounts[2]
		const uintXkWWvWA = BigInt("1990")
		const uintS0yioV6 = BigInt("1810")
		const stringNOwAuud = "TlJBWqfzsLuGRdCt4eIK8gkQgyEo3T135i9hYmMgIdJVOFnjJ5gsIWV5Dc9oN82jDXFYmg31kakUCyWlwAYTG"
		const stringbZ7N7qi = await BirdOraclebLX8oq3.substring.call(stringGhzpVkR, uintV1mn99P, {from: accounts[4]});
		const stringO8ZTM8e = await BirdOraclebLX8oq3.substring.call(stringUEhEZCF, uintEPWgq32, uintNyErG6, {from: accounts[3]});
		const stringEHeWjyR = await BirdOraclebLX8oq3.substring.call(string5zQSkT, uintb9gx6py, uintgPWiGPo, {from: accounts[5]});
		const uintvcdwBK = await BirdOraclebLX8oq3.getRatingByAddress.call(addressptAbSj0, {from: accounts[4]});
		const 
qwE4CqC = await BirdOraclebLX8oq3.updatedChainRequest.call(uintS0yioV6, uintXkWWvWA, {from: accounts[4]});
		const stringfA9jrVI = await BirdOraclebLX8oq3.extractAddress.call(stringNOwAuud, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGYYZDVt = await BirdOracle.new({from: accounts[3]});
		const uintPh4V8Cs = BigInt("1965")
		const stringnjBQF4m = "QHPAQ"
		const uintH0SFNR1 = BigInt("1287")
		const stringJivuD4M = "tsxspuigIWmRPgWXtu2Cv3Mfgy0Jn8AFcwtR58L02lguwro"
		const stringRdqmRbF = "W"
		const stringbZau6oL = "3ZRyUNOPuHD"
		const stringLdPF9TO = await BirdOracleGYYZDVt.substring.call(stringnjBQF4m, uintPh4V8Cs, {from: accounts[0]});
		const stringFZFeLsz = await BirdOracleGYYZDVt.substring.call(stringJivuD4M, uintH0SFNR1, {from: accounts[2]});
		const uintt50S6tx = await BirdOracleGYYZDVt.getRatingByAddressString.call(stringRdqmRbF, {from: accounts[1]});
		const addressWyjv3Yr = await BirdOracleGYYZDVt.parseAddr.call(stringbZau6oL, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintxyhi2qP = BigInt("1910")
		const uintEdnhz0H = BigInt("684")
		const stringSjruSxA = "ZWucJ16t5ZovXrPj7RECAGIiJVyKXG0o"
		const stringnXirT72 = "SUwHeskenxUNqLOIxd2K983otOq45thMk2U"
		const stringLQkukKV = await BirdOraclefCuRrBZ.substring.call(stringSjruSxA, uintEdnhz0H, uintxyhi2qP, {from: accounts[1]});
		const uintspXWbc8 = await BirdOraclefCuRrBZ.getRating.call({from: accounts[5]});
		const stringDL5idcL = await BirdOraclefCuRrBZ.extractAddress.call(stringnXirT72, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclekAn61c = await BirdOracle.new({from: accounts[2]});
		const addresswtN1KOs = accounts[1]
		const addressGeedUrS = accounts[1]
		const stringDNqP2kt = "UR0d5jutr36PjBnwMU8o"
		const uintl0t5mzn = BigInt("1816")
		const uintnnX4Kqs = BigInt("1365")
		const stringyNs2D0Z = "wE3VDqvtwDw4r5aI4E6KH0itaEcBzKJvjrv38RPe7qkWPAwv3lHsQIff7lMUf8nD6hVAVCi"
		const uintw703TL = await BirdOraclekAn61c.getRatingByAddress.call(addresswtN1KOs, {from: accounts[1]});
		const uintJamZT2z = await BirdOraclekAn61c.getRatingByAddress.call(addressGeedUrS, {from: accounts[2]});
		const uintTRxLuQk = await BirdOraclekAn61c.getRatingByAddressString.call(stringDNqP2kt, {from: accounts[2]});
		const stringA1B83Oi = await BirdOraclekAn61c.substring.call(stringyNs2D0Z, uintnnX4Kqs, uintl0t5mzn, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintxFLI7MI = BigInt("87")
		const uintqDiAR1Z = BigInt("1455")
		const uintj5xcPZv = BigInt("1910")
		const uintsZY0GML = BigInt("684")
		const stringSjruSxA = "ZWucJ16t5ZovXrPj7RECAGIiJVyKXG0o"
		const stringnXirT72 = "SUwHeskenxUNqLOIxd2K983otOq45thMk2U"
		const 
jw3JrL7 = await BirdOraclefCuRrBZ.updatedChainRequest.call(uintqDiAR1Z, uintxFLI7MI, {from: accounts[0]});
		const stringLQkukKV = await BirdOraclefCuRrBZ.substring.call(stringSjruSxA, uintsZY0GML, uintj5xcPZv, {from: accounts[1]});
		const uintspXWbc8 = await BirdOraclefCuRrBZ.getRating.call({from: accounts[5]});
		const stringDL5idcL = await BirdOraclefCuRrBZ.extractAddress.call(stringnXirT72, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleMvoxgmm = await BirdOracle.new({from: accounts[4]});
		const stringPMzF0kh = "OHLffjBFyCcl4lheEdwIXYa2RuHUU1rtscupSXV3LhtW5IairLMyTCGh0JpgB07dhjGAs1dxbq9YuaDLN"
		const stringz1rwfoo = "3Lwh1EqsABnX03KaCkIWsHtmBXgoHW7GHUBP2unjmMqQRrtqyJbH"
		const uintSKWjRfJ = await BirdOracleMvoxgmm.getRating.call({from: accounts[0]});
		const uintyX4Bkpw = await BirdOracleMvoxgmm.getRatingByAddressString.call(stringPMzF0kh, {from: accounts[0]});
		const uintCSiZlwf = await BirdOracleMvoxgmm.getRating.call({from: accounts[2]});
		const uintImoOIN1 = await BirdOracleMvoxgmm.getRatingByAddressString.call(stringz1rwfoo, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleBN5iCdv = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintU0kqEUM = BigInt("409")
		const uint3CGC9f = BigInt("1517")
		const stringEczjovV = "tPP"
		const stringQRHjBMB = "FcGOHrrEg2RIck4cV2UJQM1A3SEVFPs6QVDkSRuz9ZCkxx1G7XOhfyKwDW96cyRBsXLEyD"
		const stringQ877s7K = "x7q2hc5wb7oPUNoYRSRxmumu6at8nua7UwKPTvd8vpLSKY8jglcNjpRHVFGUeztRJ9ssRrctceDRTCfvi2KE"
		const uintIUOWNpg = BigInt("1415")
		const uintC2bXXf = BigInt("530")
		const stringmU70kV = "G467XlQqE1Jzy8"
		const uintmiYjHuU = BigInt("1766")
		const uintUHpLgH = BigInt("1953")
		const stringbuzhWvJ = "AhevpNETy"
		const stringaCwxyWt = "E30tDxcZp98XnLuJRkJ6ORWymsMKfZFVoVYnLXZ5whcnGFrxH9TJQbNBNDWGnc8iFzb9e4V738Rl5FQUpk"
		const stringoh5XhdI = await BirdOracleBN5iCdv.substring.call(stringEczjovV, uint3CGC9f, uintU0kqEUM, {from: accounts[4]});
		const 
NXOKKy = await BirdOracleBN5iCdv.newChainRequest.call(stringQ877s7K, stringQRHjBMB, {from: accounts[2]});
		const stringG202Ew = await BirdOracleBN5iCdv.substring.call(stringmU70kV, uintC2bXXf, uintIUOWNpg, {from: accounts[0]});
		const 
CDzJfU = await BirdOracleBN5iCdv.updatedChainRequest.call(uintUHpLgH, uintmiYjHuU, {from: accounts[3]});
		const 
xWx98iu = await BirdOracleBN5iCdv.newChainRequest.call(stringaCwxyWt, stringbuzhWvJ, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintl1RZvS = BigInt("394")
		const uintJWTOM2 = BigInt("811")
		const stringspGAoMq = "cBup6HLGgaBEqaPofUJ"
		const uintj7atz5S = BigInt("1127")
		const uintSz1W56W = BigInt("684")
		const stringSjruSxA = "ZWucJ1t5ZovXrPj7RECAGIiJVyKXG0o"
		const stringpPUpdAV = "MiuG1dn7e18Seg7DsFnZY0cjPGLv216hE4DVuPPeagn6psvY3mYWbS5uLNQVI2rF"
		const stringSomVwcg = await BirdOraclefCuRrBZ.substring.call(stringspGAoMq, uintJWTOM2, uintl1RZvS, {from: accounts[0]});
		const stringLQkukKV = await BirdOraclefCuRrBZ.substring.call(stringSjruSxA, uintSz1W56W, uintj7atz5S, {from: accounts[1]});
		const stringFpw2I67 = await BirdOraclefCuRrBZ.extractAddress.call(stringpPUpdAV, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintKzaZHwx = BigInt("155")
		const stringcOKUS1H = "MyIaRxGQTBsaBI"
		const uintSr1uYnF = BigInt("1062")
		const uintAlK2xLo = BigInt("700")
		const stringSjruSxA = "ZWucJ16t5ZovXrPj7RECAGIiJVyKXG0o"
		const stringOLMAZxV = await BirdOraclefCuRrBZ.substring.call(stringcOKUS1H, uintKzaZHwx, {from: accounts[2]});
		const stringLQkukKV = await BirdOraclefCuRrBZ.substring.call(stringSjruSxA, uintAlK2xLo, uintSr1uYnF, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintdCE02Jf = BigInt("497")
		const stringgYaKNZG = "XCFMi5RfzFnwcfipvJWf4ApPBOAtUglgSIVKBEIwOEaF3ATiyrYTupNQL2ysZtJR4WY6FZepByeYCwohMfUMMLe"
		const uintHfpBQ0B = BigInt("1042")
		const uintiK9QrKQ = BigInt("736")
		const stringSjruSxA = "ZWucJ16t5ZovXrPj7RECAGIiJVyKXG0o"
		const uintoTuCVjB = await BirdOraclefCuRrBZ.getRating.call({from: accounts[1]});
		const stringieqGD0Z = await BirdOraclefCuRrBZ.substring.call(stringgYaKNZG, uintdCE02Jf, {from: accounts[5]});
		const stringLQkukKV = await BirdOraclefCuRrBZ.substring.call(stringSjruSxA, uintiK9QrKQ, uintHfpBQ0B, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintw3cBHPg = BigInt("1800")
		const stringxL8w2dj = "TtzIF8nRM"
		const uintdR6VXKb = BigInt("2030")
		const uintB81amJ = BigInt("733")
		const stringWLDrv2n = "WDyQu7ARAggJWXQyPoMJBtOUI07nJ5F286Ueaj4RlY8NIW7ts2SW2k65cqyx"
		const uintRMW45u = BigInt("1910")
		const uintdUKkYpN = BigInt("684")
		const stringSjruSxA = "ZWucJ16t5ZovXrPj7RECAGIiJVyKXG0o"
		const stringXL580vD = await BirdOraclefCuRrBZ.substring.call(stringxL8w2dj, uintw3cBHPg, {from: accounts[1]});
		const stringJYI0kyE = await BirdOraclefCuRrBZ.substring.call(stringWLDrv2n, uintB81amJ, uintdR6VXKb, {from: "0x0000000000000000000000000000000000000001"});
		const stringLQkukKV = await BirdOraclefCuRrBZ.substring.call(stringSjruSxA, uintdUKkYpN, uintRMW45u, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUClmElp = await BirdOracle.new({from: accounts[5]});
		const uintHYeWi8l = BigInt("384")
		const stringGO9JscC = "2AA1wVk9qdL1hCb7Wrykv8WzuxpTXlYDgb40yMhogeLgtpeERwo7TdJ8BFlJRzaYIzCupBTNs8xVhx6AtX8y27djipgAgJe1"
		const uintlSZvMXZ = BigInt("2047")
		const uintIGCEcla = BigInt("1633")
		const stringfFmpTFB = "PKX6TLcchAOY7vTDhyUW37MiUpqo7npAVPDQmDuWK9c8IjEghuVTXshHUlGYbjJiiwl02mUfBFgGcfpEbraI9vLvt31jS"
		const stringUL3xTk2 = "ACeb2IaWyaoJbCdkKGAKD8Y7WaputE0N"
		const stringHBSq0U = "7EBFMcBgwFQD2N8PMkKq1jUmRplWEeVn8SCQtwAYcWggvoYOvOvz7WHNASt6Rz94WeCNBqQ7DqIHO"
		const stringzmnXK2 = await BirdOracleUClmElp.substring.call(stringGO9JscC, uintHYeWi8l, {from: "0x0000000000000000000000000000000000000001"});
		const string2CWFHv = await BirdOracleUClmElp.substring.call(stringfFmpTFB, uintIGCEcla, uintlSZvMXZ, {from: accounts[2]});
		const uintZ5jMUWm = await BirdOracleUClmElp.getRatingByAddressString.call(stringUL3xTk2, {from: accounts[3]});
		const stringZVi4Elk = await BirdOracleUClmElp.extractAddress.call(stringHBSq0U, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefCuRrBZ = await BirdOracle.new({from: accounts[5]});
		const uintkXeDzKX = BigInt("1991")
		const uintvyhRCE = BigInt("1991")
		const stringcteYkr = "iNoknFDHb7NH7VoJp4QFLxwbKKa97BKhq3VyzhUJtKbMKpcRxjuN666DYXtrnBY"
		const stringmzhrQjP = await BirdOraclefCuRrBZ.substring.call(stringcteYkr, uintvyhRCE, uintkXeDzKX, {from: accounts[4]});
	});
})