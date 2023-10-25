const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclecwXD5k3 = await BirdOracle.new({from: accounts[2]});
		const addressi3NXpse = accounts[2]
		const uintWEwjjjg = BigInt("1961")
		const uinttE43LG = BigInt("590")
		const stringBpJkIv1 = "ed5BDoHgdt9XG99iQHuI159eHnQoES7fg9yMo11SHbv9vb3GYcdlvIhdlF2FHkLTInTPWqRurMmSxX7QoRIqYXBART9Y"
		const uintNPsNzfW = BigInt("1454")
		const uintWM59ei2 = BigInt("591")
		const stringSXdgRz = "ka6fu2FlYJ1Dj3YHcDq9JsvF6FI27ikOYpKP5C2xwvf5FIBqcoVKBc5K5gKyNlY3aTS4AOoUtiNRwfZuQbtdXp6QmOI74cizf"
		const uintWkrRSw2 = await BirdOraclecwXD5k3.getRatingByAddress.call(addressi3NXpse, {from: accounts[0]});
		const uintgCh3lI3 = await BirdOraclecwXD5k3.getRating.call({from: accounts[0]});
		const stringvbGIyia = await BirdOraclecwXD5k3.substring.call(stringBpJkIv1, uinttE43LG, uintWEwjjjg, {from: accounts[4]});
		const stringueWkSIf = await BirdOraclecwXD5k3.substring.call(stringSXdgRz, uintWM59ei2, uintNPsNzfW, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleqRDODTA = await BirdOracle.new({from: accounts[1]});
		const uintT3RAeK = BigInt("761")
		const stringVS5L1AD = "doGKyASN2jfYtXWvnG0QiBvAOz"
		const stringyQ5qie3 = "ntcvRO42IQMCxnPaVn7xY1pp07bgpwKeYsz9wlWDOcM1lwGrE5hhO"
		const uintpr04FWh = BigInt("524")
		const uintfUFTWBH = BigInt("757")
		const string3ZdArb = "MYq1zAk4MtKqhBeR"
		const stringaYSXCbj = "ILHxa2MoBHzSNcFrlANQdwtXFpaLjwuyd5u9EYEB2s7var"
		const stringUSUNYJh = "PYruN"
		const stringBLj19Wd = "XCdn5"
		const stringWjEutFr = await BirdOracleqRDODTA.substring.call(stringVS5L1AD, uintT3RAeK, {from: accounts[1]});
		const addressQ0cPUBn = await BirdOracleqRDODTA.parseAddr.call(stringyQ5qie3, {from: accounts[1]});
		const stringLJaocW5 = await BirdOracleqRDODTA.substring.call(string3ZdArb, uintfUFTWBH, uintpr04FWh, {from: accounts[2]});
		const 
qN5i7hW = await BirdOracleqRDODTA.newChainRequest.call(stringUSUNYJh, stringaYSXCbj, {from: accounts[1]});
		const uintJMA2emF = await BirdOracleqRDODTA.getRatingByAddressString.call(stringBLj19Wd, {from: accounts[3]});
		const uintA7DOxdw = await BirdOracleqRDODTA.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclec4DoThW = await BirdOracle.new({from: accounts[2]});
		const addressZwCLby = accounts[4]
		const stringo1NFFY = "cRhTcU7zHE7hy1axG2woJxWZoqGfpQuTrnXzgCmKuQLmDoHFis4Y"
		const uintayIu7JW = BigInt("1543")
		const uintqBs9KdE = BigInt("661")
		const uintutef0Zw = await BirdOraclec4DoThW.getRatingByAddress.call(addressZwCLby, {from: accounts[2]});
		const uintJIPZ3Dh = await BirdOraclec4DoThW.getRatingByAddressString.call(stringo1NFFY, {from: accounts[3]});
		const 
a7jDtxz = await BirdOraclec4DoThW.updatedChainRequest.call(uintqBs9KdE, uintayIu7JW, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclePtRGkB = await BirdOracle.new({from: accounts[1]});
		const stringp5u6vFp = "ixM15Lbfl2qopyiCI44oWkc5z5KCgEjoy8cn4PGg8LuibJQfHrhoIXlkefBm8leCQeltLgvfh94Ss4SDkbsdCbAVZXu4qG56D"
		const uintKESa9vc = BigInt("1644")
		const uintDQ1LpIu = BigInt("491")
		const stringgljt4MS = "akYdxAMyjVf7mEoBGEabGNcbywyDpX5o9"
		const uintO8yIM5Q = await BirdOraclePtRGkB.getRating.call({from: accounts[0]});
		const stringQTQNOl = await BirdOraclePtRGkB.extractAddress.call(stringp5u6vFp, {from: accounts[2]});
		const stringHQd0Hn2 = await BirdOraclePtRGkB.substring.call(stringgljt4MS, uintDQ1LpIu, uintKESa9vc, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefltkQbT = await BirdOracle.new({from: accounts[2]});
		const uintwupwHF3 = BigInt("284")
		const uintSPHUVgN = BigInt("742")
		const stringchLhAMN = "284y17iRvXnMfEqgv5REAUXxWRhuOjBqvPnJvAqnuLkJahAxI31HivHGmmMttWnLRA4SX7kKUnG6G4QROHRNge2UJru"
		const addressowBStlz = "0x0000000000000000000000000000000000000001"
		const stringC2xkScz = "W18Hwvr7PYKBiqOuSdNgA3OIeKMzhF3ynHK9EwWMvGy2txL7RCIO8cW"
		const string61pvVW = "VWeZlnDv"
		const stringd3m9abj = await BirdOraclefltkQbT.substring.call(stringchLhAMN, uintSPHUVgN, uintwupwHF3, {from: accounts[5]});
		const uintZOmzYkW = await BirdOraclefltkQbT.getRatingByAddress.call(addressowBStlz, {from: accounts[4]});
		const 
emmyTOY = await BirdOraclefltkQbT.newChainRequest.call(string61pvVW, stringC2xkScz, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefltkQbT = await BirdOracle.new({from: accounts[2]});
		const addresskiXPxWu = "0x0000000000000000000000000000000000000001"
		const stringC2xkScz = "W18Hwvr7PYKBiqOuSdNgA3OIeKMzhF3ynHK9EwWMvGy2txL7RCIO8cW"
		const string61pvVW = "VWeZlnDv"
		const addressr6encfV = accounts[4]
		const uintZOmzYkW = await BirdOraclefltkQbT.getRatingByAddress.call(addresskiXPxWu, {from: accounts[4]});
		const 
emmyTOY = await BirdOraclefltkQbT.newChainRequest.call(string61pvVW, stringC2xkScz, {from: accounts[3]});
		const uintqSpWGi = await BirdOraclefltkQbT.getRatingByAddress.call(addressr6encfV, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleSKS3uyE = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOFDcfe = accounts[2]
		const stringoFjrSSO = "c3boWXD6c1iwergSXHLPTgIAIdrfvRiQnNKhkCH2qFFouxPtqeoLUDNUF1DKQvy94aRNO"
		const stringBT71BOT = ""
		const addressokg56zD = accounts[2]
		const stringhMgEJn = "oa5z8bOEENpNgYi5lLat6q4yS1SqIMtQTWzs"
		const uintzluPOvz = BigInt("1397")
		const stringRJWDZTS = "ke5sIGxQAv4nwVP1jQQ9MHZJAVwQ3yiipJ67dtHlVvzms3V1qO7jrb5DCA4Pb2GeRETnCvDdRWchtmrZrrEJ5xuPOQ"
		const uintfpHdgWp = await BirdOracleSKS3uyE.getRatingByAddress.call(addressOFDcfe, {from: accounts[3]});
		const stringgTlSc5a = await BirdOracleSKS3uyE.extractAddress.call(stringoFjrSSO, {from: accounts[0]});
		const stringwtGdRTY = await BirdOracleSKS3uyE.extractAddress.call(stringBT71BOT, {from: accounts[1]});
		const uintequ1CfC = await BirdOracleSKS3uyE.getRatingByAddress.call(addressokg56zD, {from: accounts[2]});
		const addressN2jNZAh = await BirdOracleSKS3uyE.parseAddr.call(stringhMgEJn, {from: accounts[3]});
		const stringk53McnX = await BirdOracleSKS3uyE.substring.call(stringRJWDZTS, uintzluPOvz, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefltkQbT = await BirdOracle.new({from: accounts[2]});
		const uintZ18RfbU = BigInt("1116")
		const stringmEoB0FY = "SKxHwkE186ed0clKHYbJ2UwYqroyQCN6iC"
		const uintJzYgvVk = BigInt("284")
		const uintPurrjR = BigInt("750")
		const stringchLhAMN = "284y1iRvXnMfEqgv5REAUXxWRhuOjBqvPnJvAqnuLkJahAxI31HivHGmmMttWnLRA4SX7kKUnG6G4QROHRNge2UJru"
		const stringzhYcxiE = await BirdOraclefltkQbT.substring.call(stringmEoB0FY, uintZ18RfbU, {from: accounts[2]});
		const stringd3m9abj = await BirdOraclefltkQbT.substring.call(stringchLhAMN, uintPurrjR, uintJzYgvVk, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefjx3iz = await BirdOracle.new({from: accounts[0]});
		const addressGdfcrm8 = accounts[2]
		const uintPK7vP5a = BigInt("926")
		const stringegUE50y = "iCR1587cInbVsH6zIEya7rcv5SftLoV5UAcFqR189FUcA4nDAtyJccHRSwEibYXTgPJi53iCWae"
		const stringQifRPiS = "g4IJx6399ytnyhKqwSyGaWntZAo829PXlT8jyS65s3MI6MJCUiYcb8eSBM4NgalfbOMlHj"
		const stringOtcCs8o = "DptJ"
		const addressiEgjH4 = accounts[0]
		const addressBxA6QNn = accounts[3]
		const uintg68fDE = await BirdOraclefjx3iz.getRatingByAddress.call(addressGdfcrm8, {from: accounts[0]});
		const stringveuvAJz = await BirdOraclefjx3iz.substring.call(stringegUE50y, uintPK7vP5a, {from: accounts[0]});
		const 
KfjyClc = await BirdOraclefjx3iz.newChainRequest.call(stringOtcCs8o, stringQifRPiS, {from: accounts[2]});
		const uintaP4we5W = await BirdOraclefjx3iz.getRatingByAddress.call(addressiEgjH4, {from: accounts[4]});
		const uinti4Lqc6I = await BirdOraclefjx3iz.getRatingByAddress.call(addressBxA6QNn, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleFZCW0q2 = await BirdOracle.new({from: accounts[2]});
		const uintR1EvWvb = BigInt("1531")
		const stringqhtzarB = "BDrjQYoqj7FgPG5FHPSYXM90"
		const stringpqxlqkD = "ZEAGladoaqEWxDdY01tkgZgK3vIeyeDSeiIgUkIbX2t46czCgqVVXfq"
		const stringpzPvYTB = "CdnbIUkk3NWmtexn"
		const stringQvYUCO1 = "ut3jJVaUo3nnXvXeUDJiEpdzYcgeQ8krmLpAUfbQhTlCd3ePLC1IDHOoJUnB9i"
		const stringmnceG4t = "RP9bjasTNp47LbewHLHrlgyETD2fV1FmCj2e1ugOXkmrUjnOzyYvLe7Ddfo4iSGbNibVe1q69skliOEAH"
		const stringBFMzhWO = "8dJ2gR32ZcDKFzbEjp3LTqaEN2jXhSPaG4ImCSuuZR8sD1gge4WBxEpdxIz91N"
		const uintgXt72S5 = BigInt("817")
		const uintkKpMIH = BigInt("2025")
		const stringcfxs6uh = "AWPYjGg2QvRkqR9xuGWt3XGChi7MmOtNGFdMB55VWguO9WA4Jtn7a2dwVsJDJrtJ3DZR9D88e9Lpihz66"
		const stringtNCKtAJ = await BirdOracleFZCW0q2.substring.call(stringqhtzarB, uintR1EvWvb, {from: accounts[4]});
		const 
MUHFeTn = await BirdOracleFZCW0q2.newChainRequest.call(stringpzPvYTB, stringpqxlqkD, {from: accounts[1]});
		const uintmy4c6Ar = await BirdOracleFZCW0q2.getRatingByAddressString.call(stringQvYUCO1, {from: accounts[0]});
		const stringHjZJOB = await BirdOracleFZCW0q2.extractAddress.call(stringmnceG4t, {from: accounts[5]});
		const addressdEpgX1H = await BirdOracleFZCW0q2.parseAddr.call(stringBFMzhWO, {from: accounts[2]});
		const stringN7IGYT0 = await BirdOracleFZCW0q2.substring.call(stringcfxs6uh, uintkKpMIH, uintgXt72S5, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle84C8U8 = await BirdOracle.new({from: accounts[0]});
		const uintq3tRA7R = BigInt("420")
		const stringRUWQGuF = "2dSvoe2WGGXECPhKDtwxL4G5qRAxTOAYLe61BEen2g2cHlYlIkEglzq"
		const uintUawzCn = BigInt("708")
		const uintZoZkRdE = BigInt("639")
		const stringHkeyqT = "3tKhG3LRzn5k9dDy6HTfLD"
		const uintgsC5Uuh = BigInt("373")
		const uintRc87g9X = BigInt("1408")
		const stringoBsAl7A = "MrKwDBZx1a545TUiU31LVMle5QfKmBFhqNJEXlMdE"
		const addresswALRzbJ = accounts[5]
		const stringv5YdaoS = "EwVcZvbzuGa9GqJoD9GWjvKXSzRNsJEwc"
		const stringOum27p = "wud8sbtbtQJRbs9L9VzihLLFeHnmqVF7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb"
		const stringjV8pDQ = await BirdOracle84C8U8.substring.call(stringRUWQGuF, uintq3tRA7R, {from: "0x0000000000000000000000000000000000000001"});
		const uintBkmvQw4 = await BirdOracle84C8U8.getRating.call({from: accounts[2]});
		const stringwnapdLu = await BirdOracle84C8U8.substring.call(stringHkeyqT, uintZoZkRdE, uintUawzCn, {from: accounts[0]});
		const stringbErUfb = await BirdOracle84C8U8.substring.call(stringoBsAl7A, uintRc87g9X, uintgsC5Uuh, {from: accounts[2]});
		const uintrzbE5Kq = await BirdOracle84C8U8.getRatingByAddress.call(addresswALRzbJ, {from: accounts[2]});
		const stringBuXpTmj = await BirdOracle84C8U8.extractAddress.call(stringv5YdaoS, {from: accounts[1]});
		const uintaDKm7B4 = await BirdOracle84C8U8.getRatingByAddressString.call(stringOum27p, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOgQl8m = await BirdOracle.new({from: accounts[2]});
		const uintpOxHw8I = BigInt("501")
		const stringNu3sDwM = "XtHbyuUWcXstbb6LnqNnOXfSFjDJDDaQTdbrrwAwMW2RPO2oBwxHEf1tyHeyhkecp7V6OwGPSNxu8Dar"
		const uintvLmtY16 = BigInt("785")
		const uintrmmPCEi = BigInt("216")
		const uinthKvUXL = BigInt("854")
		const uintWbIgOt0 = BigInt("787")
		const stringTmUP8SQ = await BirdOracleOgQl8m.substring.call(stringNu3sDwM, uintpOxHw8I, {from: accounts[3]});
		const uintXPDixTW = await BirdOracleOgQl8m.getRating.call({from: accounts[2]});
		const 
kXcTra = await BirdOracleOgQl8m.updatedChainRequest.call(uintrmmPCEi, uintvLmtY16, {from: accounts[5]});
		const 
AYEowBU = await BirdOracleOgQl8m.updatedChainRequest.call(uintWbIgOt0, uinthKvUXL, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyYHypp0 = await BirdOracle.new({from: accounts[2]});
		const uintivGRQH1 = BigInt("1729")
		const stringtJUmgYe = "u94pmNcfeKadxTbNoWVQmrg8PeQ8Y9cQHIUdQvwRT6LeXI1inWtv1ozIwulul0oxJZxrSyKEBmJSur"
		const stringrWy8vip = "hROoWG7S"
		const stringz3Fqg0o = await BirdOracleyYHypp0.substring.call(stringtJUmgYe, uintivGRQH1, {from: accounts[5]});
		const uintssM3HcJ = await BirdOracleyYHypp0.getRatingByAddressString.call(stringrWy8vip, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOgQl8m = await BirdOracle.new({from: accounts[2]});
		const uint3kBxPa = BigInt("894")
		const uintV18hD0T = BigInt("894")
		const stringHWQJgE = "cShAdESVGq3SBICgybEyIPcQX67WE29kpghbBM0yC9fOjoR68OAS2RGc2"
		const stringg0PhJGJ = "U1"
		const stringbzqKulB = "N"
		const stringv3YFDyN = "lymCqf4ErgquAGk9QiGH9FO1sOjNK7Y0PP5nqhycy6Glk9qsFEqj5clsMWsMeR"
		const stringCMb2mKR = "aIn8lGDCNAodPph2cpGe98sOPplOYtkRL3"
		const stringF6ASysn = "GJe0Q8XSHn2uUbLOMYq52IQxo6nhMGhOHpE6CRFgbsq0M1aV064w7cp6B1MbwJEDu24gschHS4jku8j5WKDF4U854hTWZ6n"
		const stringOR6GVB = "3Aq9WYc1fjX2rF5hGM"
		const uintz5HEyr = await BirdOracleOgQl8m.getRating.call({from: accounts[5]});
		const uintxQZ0KRo = await BirdOracleOgQl8m.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const stringrVgRWDW = await BirdOracleOgQl8m.substring.call(stringHWQJgE, uintV18hD0T, uint3kBxPa, {from: accounts[1]});
		const uint6ml3Lg = await BirdOracleOgQl8m.getRating.call({from: accounts[3]});
		const stringZOxlzkt = await BirdOracleOgQl8m.extractAddress.call(stringg0PhJGJ, {from: accounts[0]});
		const addressq3RE4TD = await BirdOracleOgQl8m.parseAddr.call(stringbzqKulB, {from: accounts[2]});
		const uintP6RGFdU = await BirdOracleOgQl8m.getRating.call({from: accounts[4]});
		const stringpRDAyNw = await BirdOracleOgQl8m.extractAddress.call(stringv3YFDyN, {from: accounts[2]});
		const 
NmpfGkW = await BirdOracleOgQl8m.newChainRequest.call(stringF6ASysn, stringCMb2mKR, {from: accounts[4]});
		const stringd8tjhRu = await BirdOracleOgQl8m.extractAddress.call(stringOR6GVB, {from: "0x0000000000000000000000000000000000000001"});
	});
})