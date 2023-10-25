const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclecaFaniR = await BirdOracle.new({from: accounts[0]});
		const stringkYOGWg = "HehSmfDeSpfredg202SBGg4nqa7"
		const addressCKGmvkn = accounts[4]
		const uintcO1uSOu = await BirdOraclecaFaniR.getRatingByAddressString.call(stringkYOGWg, {from: accounts[5]});
		const uintbrKROxX = await BirdOraclecaFaniR.getRating.call({from: accounts[0]});
		const uintXdi5Ri1 = await BirdOraclecaFaniR.getRatingByAddress.call(addressCKGmvkn, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUARu1uG = await BirdOracle.new({from: accounts[3]});
		const stringbheti59 = "y1A48Q8S1kWg24OcTI3Mgp13ds7QeEOKxcz84FIEYemUpfJdwsyXSpbPny8p7ye29zEAN"
		const uintrW7RguN = await BirdOracleUARu1uG.getRating.call({from: accounts[5]});
		const uintK59aX7S = await BirdOracleUARu1uG.getRatingByAddressString.call(stringbheti59, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleWXClwgT = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addressph3DKRc = accounts[5]
		const uintV22S3qe = BigInt("675")
		const stringBX4NrjP = "hvtrXiNHaFSrpyvdzJL4YEbm5DKcxwD5psMR"
		const uintO2z9eis = BigInt("69")
		const uintyjdZxa = BigInt("50")
		const stringqU4hkAR = "Ro7sB92oCvPRMyzxj22gQdivEmJVnbzG1laiTL7pDLsM16PLxiMheYHM80T9T5z0UsuX4rkKekKpoIjgrX"
		const uintWvzNgsS = BigInt("259")
		const uintBHoJE8 = BigInt("1586")
		const stringxFcy6h9 = "CQr9Wq5xKlamzpxbClJuRfX5rX7DCkUxlTlGq6FKCEnZAxvZgXTsh4ZoMi0k"
		const uintGRsoG7g = BigInt("1251")
		const uintbPcf4kq = BigInt("569")
		const uintzKMp1iR = await BirdOracleWXClwgT.getRatingByAddress.call(addressph3DKRc, {from: accounts[2]});
		const stringpeATq3b = await BirdOracleWXClwgT.substring.call(stringBX4NrjP, uintV22S3qe, {from: accounts[3]});
		const stringjRXqgv8 = await BirdOracleWXClwgT.substring.call(stringqU4hkAR, uintyjdZxa, uintO2z9eis, {from: accounts[3]});
		const stringM7FvPFV = await BirdOracleWXClwgT.substring.call(stringxFcy6h9, uintBHoJE8, uintWvzNgsS, {from: accounts[4]});
		const 
zD38nPu = await BirdOracleWXClwgT.updatedChainRequest.call(uintbPcf4kq, uintGRsoG7g, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleTtkeXKk = await BirdOracle.new({from: accounts[2]});
		const stringi7S5cVp = "qcH8kckXudusbQk1C665eQXn1jLA08MNl9gPl"
		const stringqi6gM0y = "iUSZLcypzfS4txXVAdtvInf7wHWYGvVLUKD3qjxPymzUwifoooA2SURSJAyX66hWOI8Emb2dl2WDNDmNZkYA2kWvhz3Aktt7e"
		const stringvJn1eGk = "FzyIzRpWXTgRaAe2XHQ6C41sBAgK9QiBUjgH2CUspWdXMWis7I8HwYx5XM"
		const stringEhtDVV = "q4Y5V0J7LP74yqF5Rix63oyIqiwv"
		const stringRqkSzzt = await BirdOracleTtkeXKk.extractAddress.call(stringi7S5cVp, {from: accounts[2]});
		const uinte6Da3EF = await BirdOracleTtkeXKk.getRatingByAddressString.call(stringqi6gM0y, {from: accounts[2]});
		const stringdtvIc6S = await BirdOracleTtkeXKk.extractAddress.call(stringvJn1eGk, {from: accounts[3]});
		const addressrKJ1fwn = await BirdOracleTtkeXKk.parseAddr.call(stringEhtDVV, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeNYjbsa = await BirdOracle.new({from: accounts[1]});
		const addressuwBwmd1 = accounts[4]
		const uinti1JbpiQ = BigInt("1800")
		const uinteJ1xb8X = BigInt("1699")
		const stringbIEoSwH = "4yTKOLSvkWOiGDA93lhGysINI3KzmXYkDPYV2JC7M6XKOQJAUzSSeb1FFopovms400Iv3oS0SPaim6oqh1nEXYIxgL1kvvUHf"
		const uintxuXOHMz = await BirdOracleeNYjbsa.getRatingByAddress.call(addressuwBwmd1, {from: accounts[4]});
		const stringEVYl7ZU = await BirdOracleeNYjbsa.substring.call(stringbIEoSwH, uinteJ1xb8X, uinti1JbpiQ, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleEW7YlB4 = await BirdOracle.new({from: accounts[4]});
		const addressPe52kWY = accounts[2]
		const uintVA9wGrv = BigInt("780")
		const stringNyj1QtK = "keFIM"
		const uintYuwupPs = BigInt("292")
		const stringvsbXcQI = "4RxvbCDsWln"
		const stringd2KgMyF = "qjtCQXyIB"
		const uintZyRuxP = await BirdOracleEW7YlB4.getRatingByAddress.call(addressPe52kWY, {from: accounts[2]});
		const stringfq8n8fq = await BirdOracleEW7YlB4.substring.call(stringNyj1QtK, uintVA9wGrv, {from: accounts[5]});
		const uintKlU5Fgb = await BirdOracleEW7YlB4.getRating.call({from: accounts[3]});
		const stringLRUusCH = await BirdOracleEW7YlB4.substring.call(stringvsbXcQI, uintYuwupPs, {from: accounts[1]});
		const stringQCyVGnp = await BirdOracleEW7YlB4.extractAddress.call(stringd2KgMyF, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUARu1uG = await BirdOracle.new({from: accounts[3]});
		const uintykpF3KJ = BigInt("1848")
		const uintWivTZ0L = BigInt("600")
		const stringBR3N39M = "FtR6I52nMjpwh2hpLrMHcrMYT572sRS559rxnW"
		const stringIfgOp2M = "dhneGBNTitmsTxaIl5MOm4cjFJouMTxK038LMSNXRlXMzdK"
		const stringoCDeXsz = "Yn48Qs2yaL9WKanZQ1RWm71hr4kh6OkM6IzyFJfOJuXWuuw9DnlDJvAhLfsEdlc4kEyblLkcK8W1HPHvHwDcr"
		const stringbheti59 = "y1A48Q8S1kWg24OcTI3Mgp13ds7QeEOKxcz84FIEYemUpfJdwsyXSpbPny8p7ye29zEAN"
		const uintrW7RguN = await BirdOracleUARu1uG.getRating.call({from: accounts[5]});
		const 
CB0FmwL = await BirdOracleUARu1uG.updatedChainRequest.call(uintWivTZ0L, uintykpF3KJ, {from: accounts[0]});
		const 
AOPcxo = await BirdOracleUARu1uG.newChainRequest.call(stringIfgOp2M, stringBR3N39M, {from: accounts[2]});
		const uintoafJjSc = await BirdOracleUARu1uG.getRatingByAddressString.call(stringoCDeXsz, {from: accounts[1]});
		const uintK59aX7S = await BirdOracleUARu1uG.getRatingByAddressString.call(stringbheti59, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUARu1uG = await BirdOracle.new({from: accounts[3]});
		const stringbgq1Pm = "kMM2pvBpovkeJhMIHj3rXSXEROBaGe1cUv"
		const stringKU7O0go = "z1SzmAfbaW6dIj3yfVUsdmCfindvs2ozaWpUafVZLRRl3pEEiSUo9CLHV3"
		const stringbheti59 = "y1A48Q8S1kWg24OcTI3Mgp13ds7QeEOKxcz84FIEYemUpfJdwsyXSpbPny8p7ye29zEAN"
		const uintrW7RguN = await BirdOracleUARu1uG.getRating.call({from: accounts[5]});
		const 
IpHK1rW = await BirdOracleUARu1uG.newChainRequest.call(stringKU7O0go, stringbgq1Pm, {from: accounts[5]});
		const uintK59aX7S = await BirdOracleUARu1uG.getRatingByAddressString.call(stringbheti59, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeNYjbsa = await BirdOracle.new({from: accounts[1]});
		const uintW6UYpfe = BigInt("2034")
		const stringh1Fqgkp = "qGgC4YR1fTLqtYDaqIJKKFtWHTjiOGUnhnsCrvwbIS4kmfIpjAXXvIlp49o4kC"
		const stringS83B3WX = "29Hcw32TWXS0d3NoaM7QdkjDM9pzz91tA4gcCM5kox"
		const addressG4igiB = accounts[4]
		const stringiUlnlbt = await BirdOracleeNYjbsa.substring.call(stringh1Fqgkp, uintW6UYpfe, {from: accounts[3]});
		const uintsU3hkYr = await BirdOracleeNYjbsa.getRatingByAddressString.call(stringS83B3WX, {from: accounts[2]});
		const uintxuXOHMz = await BirdOracleeNYjbsa.getRatingByAddress.call(addressG4igiB, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeNYjbsa = await BirdOracle.new({from: accounts[1]});
		const addressBWPUVE9 = accounts[4]
		const uinthZtvZZM = BigInt("165")
		const uintnHqw0a = BigInt("1699")
		const stringbIEoSwH = "4yTKOLSvkWOiGDA93lhGysINI3KzmXYkDPYV2JC7M6XKOQJAUzSSeb1FFopovms400Iv3oS0SPaim6oqh1nEXYIxgL1kvvUHf"
		const uintrOaRpzB = await BirdOracleeNYjbsa.getRating.call({from: accounts[5]});
		const uintxuXOHMz = await BirdOracleeNYjbsa.getRatingByAddress.call(addressBWPUVE9, {from: accounts[4]});
		const stringEVYl7ZU = await BirdOracleeNYjbsa.substring.call(stringbIEoSwH, uintnHqw0a, uinthZtvZZM, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeNYjbsa = await BirdOracle.new({from: accounts[1]});
		const addressM2CtUwk = accounts[5]
		const uintCjQ5kP8 = BigInt("925")
		const stringtiFRATU = "1PoQ2ngpZUaT9iLMxKMWICqlFnTqqoaS"
		const uinthmcSDu7 = BigInt("1779")
		const uintTbNgTXl = BigInt("1699")
		const stringbIEoSwH = "4yTKOLSvkWOiGDA93lhGysINI3KzmXYkDPYV2JC7M6XKOQJAUzSSeb1FFopovms400Iv3oS0SPaim6oqh1nEXYIxgL1kvvUHf"
		const uintxuXOHMz = await BirdOracleeNYjbsa.getRatingByAddress.call(addressM2CtUwk, {from: accounts[4]});
		const stringuT8IU00 = await BirdOracleeNYjbsa.substring.call(stringtiFRATU, uintCjQ5kP8, {from: accounts[2]});
		const stringEVYl7ZU = await BirdOracleeNYjbsa.substring.call(stringbIEoSwH, uintTbNgTXl, uinthmcSDu7, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHRZaZcv = await BirdOracle.new({from: accounts[0]});
		const uintzN65mRS = BigInt("915")
		const stringTsKg4Y3 = "kVi8DUFlpfbgUW8PnJeSjohvrUvdPpbn9BVk2gSfe6T1PsWNk4mHf7uWQHo0RvW8fR2DVtvlVQSMT94WVtPq"
		const stringAx0640T = "y4MWdffJjkyiALMub"
		const stringg0MeGE2 = "8QCZ2hyLLsh1jlsgeSmCVxpc1L5yrKjRykA3WjvEKUkjU5Yh9tVvR4Hc2jQQ3Zmd0Tm"
		const stringoTg1QDE = "0gD1LPvbOZmrCQVxeDzqHmNkByJF24B9L4mpoEhip9KGQfnGku"
		const stringCEOVsNh = "Fmnu"
		const uintelx5kRz = await BirdOracleHRZaZcv.getRating.call({from: accounts[2]});
		const stringCZX0OWC = await BirdOracleHRZaZcv.substring.call(stringTsKg4Y3, uintzN65mRS, {from: accounts[4]});
		const uintZ0eY3qV = await BirdOracleHRZaZcv.getRatingByAddressString.call(stringAx0640T, {from: accounts[0]});
		const stringkwQ4sI5 = await BirdOracleHRZaZcv.extractAddress.call(stringg0MeGE2, {from: "0x0000000000000000000000000000000000000001"});
		const stringO577Tk8 = await BirdOracleHRZaZcv.extractAddress.call(stringoTg1QDE, {from: accounts[0]});
		const uintUfrCne5 = await BirdOracleHRZaZcv.getRatingByAddressString.call(stringCEOVsNh, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUARu1uG = await BirdOracle.new({from: accounts[3]});
		const uintkeFBxYa = BigInt("1322")
		const stringCQKPtpy = "hxT"
		const stringbheti59 = "y1A48Q8S1kWg24OcTI3Mgp13ds7QeEOKxcdz84FIEYemUpfJdwsyXSwpbPny8p7ye29zEAN"
		const stringocmsHEW = await BirdOracleUARu1uG.substring.call(stringCQKPtpy, uintkeFBxYa, {from: accounts[1]});
		const uintK59aX7S = await BirdOracleUARu1uG.getRatingByAddressString.call(stringbheti59, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleiyQY6r = await BirdOracle.new({from: accounts[1]});
		const uintyQ9VeHu = BigInt("1971")
		const stringRRgP0wY = "Ak86qtJ6kbgILohTDE4"
		const uintSGdWCTf = BigInt("729")
		const uintGwAailq = BigInt("1352")
		const stringph6GeuG = "Di4fjxzxxvA4fLc9mbGTzYVKC8UfeVYy2t5ezei4kLFfxFuwXbYggM5dpyC3cI"
		const stringD32zsgB = "aOJVQOMmdOF62EPJ8c6Ptawtueu07a9O"
		const stringdvmIyUg = "PGb20Qp8FeshrkCRfKxrAHVN6HFSccugGnRMI2MxP7BeKbECt4TYvUUgiFyx"
		const stringHnKZTBu = await BirdOracleiyQY6r.substring.call(stringRRgP0wY, uintyQ9VeHu, {from: accounts[0]});
		const stringpUpxRfx = await BirdOracleiyQY6r.substring.call(stringph6GeuG, uintGwAailq, uintSGdWCTf, {from: accounts[1]});
		const stringatOYHn9 = await BirdOracleiyQY6r.extractAddress.call(stringD32zsgB, {from: accounts[4]});
		const uintIHSwMyP = await BirdOracleiyQY6r.getRating.call({from: accounts[2]});
		const uintqTqMp02 = await BirdOracleiyQY6r.getRatingByAddressString.call(stringdvmIyUg, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeNYjbsa = await BirdOracle.new({from: accounts[1]});
		const uintO9fbFU2 = BigInt("418")
		const stringNIYkrbK = "OLQl9Q3ix3MSAhjbhjUoAjLP2A9FsSkyNgzRIGji1QmCH4Sm1Drnm"
		const stringXDgycYG = "S4IVfUGvltF3xCAqB2trl4UdOUXMkWlJKGJv8VaMDKSxvNq0YMmmJoUtlcE9LIEFDHjvxh"
		const uintCPMy33W = BigInt("1779")
		const uintso57jQ = BigInt("1764")
		const stringbIEoSwH = "4yTKOLSvkWOiGDA93lhGysINI3KzmXYkDPYV2JC7M6XKOQJAUzSSeb1FFopovms400Iv3oS0SPaim6oqh1nEXYIxgL1kvvUHf"
		const stringAGqREG = await BirdOracleeNYjbsa.substring.call(stringNIYkrbK, uintO9fbFU2, {from: "0x0000000000000000000000000000000000000001"});
		const addressAK9fYJb = await BirdOracleeNYjbsa.parseAddr.call(stringXDgycYG, {from: accounts[4]});
		const uintBgfr28S = await BirdOracleeNYjbsa.getRating.call({from: accounts[3]});
		const stringEVYl7ZU = await BirdOracleeNYjbsa.substring.call(stringbIEoSwH, uintso57jQ, uintCPMy33W, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeNYjbsa = await BirdOracle.new({from: accounts[1]});
		const uintyuBHQ2 = BigInt("1779")
		const uintWjpglSh = BigInt("1779")
		const stringbIEoSwH = "4yTKOLSvkWOiGDA93lhGysINI3KzmXYkDPYV2JC7M6XKOQJAUzSSeb1FFopovms400Iv3oS0SPaim6oqh1nEXYIxgL1kvvUHf"
		const stringEVYl7ZU = await BirdOracleeNYjbsa.substring.call(stringbIEoSwH, uintWjpglSh, uintyuBHQ2, {from: accounts[0]});
	});
})