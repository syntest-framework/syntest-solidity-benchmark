const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleD2z9Zdi = await BirdOracle.new({from: accounts[5]});
		const stringRfilfsN = "hfaluQFHlwBA6i4E6akpRks0Xah1Pbdgm7MjEVaMHyKRgREtucn7nxNmzy2zy"
		const stringYELJtPT = "8ySiMNWM4QzdSYbNvGUwXbhdbnjxQGhdOHD6fPpRLCgYylCr15LEBHGtkwn0FAr1gjJHQ0oDbPmvWfvtaGWhPmkL1yM48T"
		const stringm0tfcIG = "zXsXw7NJMwavp3ndjGm2V6"
		const addressHCTgnF0 = accounts[1]
		const uintiM9Gk7l = BigInt("443")
		const uintPtapZai = BigInt("1775")
		const stringyb2VaKR = "ejLdg9KeUrcHq2wt2YEYcUIOlLGh8UN5WMWhbUKVpAt8AuB95dSA0Z"
		const addressDp6ZmKk = accounts[5]
		const uintyocg2l = BigInt("629")
		const uintYhL1N0X = BigInt("1150")
		const stringJbzqFpU = "zTsrp5E7JUK4rLBvuKadvFLxyNS5QWyxtHKMdDvV85eh9CKu"
		const 
MqH7y2o = await BirdOracleD2z9Zdi.newChainRequest.call(stringYELJtPT, stringRfilfsN, {from: accounts[2]});
		const uintOQT8Pxs = await BirdOracleD2z9Zdi.getRatingByAddressString.call(stringm0tfcIG, {from: accounts[3]});
		const uintekBxnmt = await BirdOracleD2z9Zdi.getRatingByAddress.call(addressHCTgnF0, {from: "0x0000000000000000000000000000000000000001"});
		const stringkgaOHCq = await BirdOracleD2z9Zdi.substring.call(stringyb2VaKR, uintPtapZai, uintiM9Gk7l, {from: accounts[4]});
		const uint82t4nh = await BirdOracleD2z9Zdi.getRatingByAddress.call(addressDp6ZmKk, {from: accounts[2]});
		const stringkxS58v = await BirdOracleD2z9Zdi.substring.call(stringJbzqFpU, uintYhL1N0X, uintyocg2l, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleLgIPVU = await BirdOracle.new({from: accounts[4]});
		const uintROfAMlD = BigInt("278")
		const uintshnUNg = BigInt("465")
		const stringPXKjuyW = "IBDE98cVh3Q39AqPyCqJiiHzYnQC69sjcQuFNxPzCxCl0CgbfWhMxHU9xg66cJ9IEaUKc5q9L"
		const stringZqxkzoj = "fIa3O84IzkoF3BVlPedCXv4Vn1iuVYcByMF3kYWDXIqnV1bskI9wsVAHRwUk9R"
		const uintzbk7r3t = BigInt("269")
		const uintIZzSr4K = BigInt("756")
		const stringkj6IJ7O = "KMWDDBtQHJw1FGlJqoJKkzRMHeRzijnjMvr3xU7EueF6nQ6g8wUTF5300cgsJF55kQA6DB9jey8TmJmpqPlDDDtquf"
		const stringGhhFCY1 = await BirdOracleLgIPVU.substring.call(stringPXKjuyW, uintshnUNg, uintROfAMlD, {from: accounts[3]});
		const stringlODvVEW = await BirdOracleLgIPVU.extractAddress.call(stringZqxkzoj, {from: accounts[3]});
		const stringQdGDEQw = await BirdOracleLgIPVU.substring.call(stringkj6IJ7O, uintIZzSr4K, uintzbk7r3t, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefaDw9kr = await BirdOracle.new({from: accounts[1]});
		const uintLVRmPtv = BigInt("1567")
		const uintZsJ5qug = BigInt("602")
		const uintMzekJ82 = BigInt("97")
		const stringQyv1Kz4 = "9H2tDtxmoeCkI3BZDEDaxBhLI6DZfsN9vtP3LgtjOkO9bbw2eDpOrpV5i6st0aj0skbv8xAjCMQxaROHz6kFX5bUOGPRZ"
		const 
X4sTQN = await BirdOraclefaDw9kr.updatedChainRequest.call(uintZsJ5qug, uintLVRmPtv, {from: accounts[4]});
		const stringLsDzFE1 = await BirdOraclefaDw9kr.substring.call(stringQyv1Kz4, uintMzekJ82, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleYHc9bCA = await BirdOracle.new({from: accounts[4]});
		const stringQ2Y1D9 = "yx0fq61z"
		const addressZ9O3bWG = accounts[2]
		const uintNmlPwyp = await BirdOracleYHc9bCA.getRating.call({from: accounts[0]});
		const uintHNzMMR = await BirdOracleYHc9bCA.getRating.call({from: accounts[5]});
		const addresssRzDlYc = await BirdOracleYHc9bCA.parseAddr.call(stringQ2Y1D9, {from: accounts[5]});
		const uintiiA7Ce4 = await BirdOracleYHc9bCA.getRatingByAddress.call(addressZ9O3bWG, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleo5Fr1Gh = await BirdOracle.new({from: accounts[1]});
		const addresshx3uq2B = "0x0000000000000000000000000000000000000001"
		const uintfoKYpSD = BigInt("602")
		const uintfFvJzLp = BigInt("864")
		const stringJBA6Pdv = "qintx1k43m9yggHZuGZOwM5fLGA8OKrTWizG3NTMVY4LJkw5x4"
		const uintwsUZNuO = BigInt("1330")
		const uint4c9ZrU = BigInt("1824")
		const uintuhMf4K6 = await BirdOracleo5Fr1Gh.getRatingByAddress.call(addresshx3uq2B, {from: accounts[0]});
		const 
dQqFcx7 = await BirdOracleo5Fr1Gh.updatedChainRequest.call(uintfFvJzLp, uintfoKYpSD, {from: accounts[0]});
		const addressj7ajlqv = await BirdOracleo5Fr1Gh.parseAddr.call(stringJBA6Pdv, {from: accounts[2]});
		const 
WNRYH3N = await BirdOracleo5Fr1Gh.updatedChainRequest.call(uint4c9ZrU, uintwsUZNuO, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOp7oGO = await BirdOracle.new({from: accounts[3]});
		const stringxPFaC6b = "GRVA3I3MchTnlCRpsUolSUvJ3GD7b5V2f5vuXdJplRF59HvavBKc6n1LjnXrFMU3acTYtSodHJsu2rb1yU3GHQyns7g8"
		const addressEqdohV = accounts[2]
		const addresspOsnDg = accounts[0]
		const stringj6NRv4E = "eDwVjA9eUxoSJzxNaFL8D38Nb9vXDqPUk43IXfPdhCfG"
		const addressgikOuP = accounts[0]
		const addressenpMD3 = await BirdOracleOp7oGO.parseAddr.call(stringxPFaC6b, {from: accounts[2]});
		const uintix6AXVU = await BirdOracleOp7oGO.getRatingByAddress.call(addressEqdohV, {from: accounts[0]});
		const uintieem3v0 = await BirdOracleOp7oGO.getRatingByAddress.call(addresspOsnDg, {from: accounts[4]});
		const addressU6c5txw = await BirdOracleOp7oGO.parseAddr.call(stringj6NRv4E, {from: accounts[3]});
		const uintxC61eS1 = await BirdOracleOp7oGO.getRatingByAddress.call(addressgikOuP, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRCSHwqo = await BirdOracle.new({from: accounts[2]});
		const uintwlVQX50 = BigInt("942")
		const stringjosJPU0 = "xMR"
		const uint20W3dE = await BirdOracleRCSHwqo.getRating.call({from: accounts[2]});
		const stringaTORjbC = await BirdOracleRCSHwqo.substring.call(stringjosJPU0, uintwlVQX50, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclep8xfd1k = await BirdOracle.new({from: accounts[5]});
		const uintTBBxNxL = BigInt("1715")
		const uints0J1Ur = BigInt("656")
		const stringL6npxEt = "3HhO8IzQexWD7cLPklrZGSUMGggloqYuRmDbPwQEYTuXbeHB3LXgfR64BWU8CajB"
		const stringHwonfQG = "7Zsi767NlLQmfnkVL"
		const uintK6NYoWb = BigInt("1074")
		const uintIZSmYTF = BigInt("452")
		const uintcILGQbm = BigInt("1484")
		const uintbhGlrQK = BigInt("1022")
		const stringnfJyvdN = "hCAZ3cCm1u0kDnWJ9kasYnths3QJIGflmn8L9oNySpIacehd6HaHR1dujERYDc"
		const stringZvvmEiL = await BirdOraclep8xfd1k.substring.call(stringL6npxEt, uints0J1Ur, uintTBBxNxL, {from: accounts[0]});
		const uintuTdxxKo = await BirdOraclep8xfd1k.getRatingByAddressString.call(stringHwonfQG, {from: accounts[3]});
		const 
CYFYqY8 = await BirdOraclep8xfd1k.updatedChainRequest.call(uintIZSmYTF, uintK6NYoWb, {from: accounts[5]});
		const stringZ5MRvEH = await BirdOraclep8xfd1k.substring.call(stringnfJyvdN, uintbhGlrQK, uintcILGQbm, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleo5Fr1Gh = await BirdOracle.new({from: accounts[1]});
		const addresssrDExJm = "0x0000000000000000000000000000000000000001"
		const stringEDBZ6cj = "tkDKFMtIysz4hugpWNj2NenQklqxJa43bCviIbz9m"
		const uintkEqhLQE = BigInt("602")
		const uintm4uOARl = BigInt("864")
		const stringrrYSsb = "6ic8OcPtROCftCxIRgGNffV1m2MqAr9mIowgD6bqs8l3xvkinnXP1mPKihu8Ap3aW7I"
		const stringJBA6Pdv = "qintx1k43m9yggHZuGZOwM5fLGA8OKrTWzG3NTMVY4LJkw5x4"
		const uintiX2fKe9 = BigInt("1330")
		const uintmNLa4h = BigInt("1824")
		const uintuhMf4K6 = await BirdOracleo5Fr1Gh.getRatingByAddress.call(addresssrDExJm, {from: accounts[0]});
		const uintTCbPyc = await BirdOracleo5Fr1Gh.getRatingByAddressString.call(stringEDBZ6cj, {from: accounts[0]});
		const 
dQqFcx7 = await BirdOracleo5Fr1Gh.updatedChainRequest.call(uintm4uOARl, uintkEqhLQE, {from: accounts[0]});
		const uintdaNekR = await BirdOracleo5Fr1Gh.getRatingByAddressString.call(stringrrYSsb, {from: accounts[0]});
		const addressj7ajlqv = await BirdOracleo5Fr1Gh.parseAddr.call(stringJBA6Pdv, {from: accounts[2]});
		const 
WNRYH3N = await BirdOracleo5Fr1Gh.updatedChainRequest.call(uintmNLa4h, uintiX2fKe9, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclep8xfd1k = await BirdOracle.new({from: accounts[5]});
		const uintasrsAj1 = BigInt("701")
		const strings3lH2kn = "7GskIK19sUGxBxnOfBrtStsHPWqzMEWriT9YW91RICPKH82YCIcSAPgjVwzg1SRdWgqTW"
		const uintOleg7Ea = BigInt("1715")
		const uintVJz5ep = BigInt("656")
		const stringL6npxEt = "3HhO8IzQexWD7cLPklrZGSUMGggloqYuRmDbPwQEYTuXbeHB3LXgfR64BWU8CajB"
		const stringHwonfQG = "7Zsi767NlLQmfnkVL"
		const uintAwy3Kcs = BigInt("1484")
		const uintURUZCl = BigInt("1022")
		const stringnfJyvdN = "hCAZ3cCm1u0kDnWJ9kasYnths3QJIGflmn8L9oNySpIacehd6HaHR1dujERYDc"
		const stringVnhqzkO = await BirdOraclep8xfd1k.substring.call(strings3lH2kn, uintasrsAj1, {from: accounts[3]});
		const stringZvvmEiL = await BirdOraclep8xfd1k.substring.call(stringL6npxEt, uintVJz5ep, uintOleg7Ea, {from: accounts[0]});
		const uintuTdxxKo = await BirdOraclep8xfd1k.getRatingByAddressString.call(stringHwonfQG, {from: accounts[3]});
		const stringZ5MRvEH = await BirdOraclep8xfd1k.substring.call(stringnfJyvdN, uintURUZCl, uintAwy3Kcs, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejOQfuuf = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscL3Uc3l = accounts[2]
		const stringgM7cVYk = "GB8HsXiyTkVZa570mUth8sGWsjY2FJQq5KJ8QSXU1ngNZIqN4PDWDrFBlYIh5s4siSRZBzfTEktgqAHpqs5MftufX8Oi"
		const stringKGWn0iY = "ca3c2O9BDbC"
		const uintwFQljRQ = BigInt("650")
		const stringvRgZhMC = "7luPmUkdjH0i1TpRfXFhTjCQkKlv9mzyNfbKA7kxUIHBiv2"
		const uinthSPvb6B = BigInt("255")
		const stringqwCqDeB = "lAzftrgNNPidAfJsaxyRfqE8Wev2qGa5Jyo2MbfgFKa6ImNxpHCbWX9GQ59zBMygcptzDCrPk3cZD4wtgbq32AM"
		const uintjm9UesC = await BirdOraclejOQfuuf.getRatingByAddress.call(addresscL3Uc3l, {from: accounts[4]});
		const uinten0J9Yc = await BirdOraclejOQfuuf.getRating.call({from: accounts[0]});
		const addressBXZ7tBW = await BirdOraclejOQfuuf.parseAddr.call(stringgM7cVYk, {from: accounts[4]});
		const addressszaRxxQ = await BirdOraclejOQfuuf.parseAddr.call(stringKGWn0iY, {from: accounts[0]});
		const stringP73ShPS = await BirdOraclejOQfuuf.substring.call(stringvRgZhMC, uintwFQljRQ, {from: accounts[0]});
		const stringfCAVAwv = await BirdOraclejOQfuuf.substring.call(stringqwCqDeB, uinthSPvb6B, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefaDw9kr = await BirdOracle.new({from: accounts[1]});
		const uintVhPSWpu = BigInt("1757")
		const stringEYHaCt0 = "X2rCRqgbtmANHiIjHE8Y5TKkTw7ZzHDce"
		const uintKGeEvU4 = BigInt("1567")
		const uintSDYVdW8 = BigInt("602")
		const stringPEzWYd6 = "QwZCRz7jItfQcrnYyu4UngNubsTBOFOqbfwe7w8UwzCbrB8"
		const stringmuDDjEk = "2KBfjsnjHbQrUAyxWDEA4ThSftJ9T8brL3qxbd"
		const uintOmmAXVm = BigInt("106")
		const stringQyv1Kz4 = "9H2tDtxmoeCkI3BZDEDaxBhLI6DZfsN9vtP3LgtjOkO9bbw2eDpOrpV5i6st0aj0skbv8xAjCMQxaROHz6kFX5bUOGPRZ"
		const stringZidosUh = await BirdOraclefaDw9kr.substring.call(stringEYHaCt0, uintVhPSWpu, {from: accounts[4]});
		const 
X4sTQN = await BirdOraclefaDw9kr.updatedChainRequest.call(uintSDYVdW8, uintKGeEvU4, {from: accounts[4]});
		const 
mU5NlXM = await BirdOraclefaDw9kr.newChainRequest.call(stringmuDDjEk, stringPEzWYd6, {from: accounts[2]});
		const stringLsDzFE1 = await BirdOraclefaDw9kr.substring.call(stringQyv1Kz4, uintOmmAXVm, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefaDw9kr = await BirdOracle.new({from: accounts[1]});
		const uintsdzP4ir = BigInt("1592")
		const stringyKa20Tk = "nZ0peQAnXREMqmhZPdNWqPf8LmXfaozBuVgAjnT3voDQ4wkxmheHVzqtFRBDJdTUu0vTKwXp"
		const uintQlKz8q = BigInt("1567")
		const uintDVSJzNV = BigInt("1034")
		const stringhDqO1H = await BirdOraclefaDw9kr.substring.call(stringyKa20Tk, uintsdzP4ir, {from: accounts[2]});
		const 
X4sTQN = await BirdOraclefaDw9kr.updatedChainRequest.call(uintDVSJzNV, uintQlKz8q, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleZD9Gi3J = await BirdOracle.new({from: accounts[0]});
		const addressEOUIQx8 = accounts[0]
		const uintHgJt6lP = BigInt("1499")
		const stringwCvIxiN = "epDLcCnrJVfWQUpaXPSHmXo4gdo48cSSYPO4KYUXnfD2jY4sGwVr2OAOK75uM"
		const uintJ2lWSGc = await BirdOracleZD9Gi3J.getRatingByAddress.call(addressEOUIQx8, {from: accounts[3]});
		const stringtLLx5fo = await BirdOracleZD9Gi3J.substring.call(stringwCvIxiN, uintHgJt6lP, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefaDw9kr = await BirdOracle.new({from: accounts[1]});
		const stringdaytB9O = "yBOPeN6SMD5zcrGlWh8X05Fe9j4KPH6MtrFNTY605bLAOt6yl6NHd9gOtbDwXLBsSeq6rrXIXff7bLV90DiUldMCs92F"
		const addressRpfhF84 = accounts[3]
		const stringWN2d0q1 = "G6BNxr5Gn0ZjDOeE8eHKLr8EaKlrO6zKYgddEA54kBeo4pPp5nSPVRoqwEEpTiJA"
		const uint4QL9Ip = BigInt("328")
		const stringlnsD2Cx = "KaFLmyBYzWDofWsDMW6599qLNmUoqKnhkucJV8NgVHKO4nrUnp7Vz5oROAG47pBFL939A"
		const uintuLTZT5u = BigInt("592")
		const uintg4ivniJ = BigInt("222")
		const stringxOTAbVe = "g6acp116v3uC2VwDTudmAU5MpT9tLDDdDb8pRgiUfUfznTn7sl3He927"
		const uintiC6io7D = BigInt("1379")
		const uintk7fSP94 = BigInt("1431")
		const stringKdBWP3i = "e8YELY1ebj0RtUzmE4VVttCRmbO1SEjcFljpIRUWrQ28p4NnjkzVOliuMicKSLGym5sM7QH2nIeTnmFaz2DSDeCwgaRkzbg7Jd"
		const uintLGvtHvB = BigInt("174")
		const uintIIXMSdX = BigInt("467")
		const stringTEWZWKI = "FWketg6VehdxSdrA39QNBJF"
		const stringDHFQeP = "XN5CARS1CogepNpfUGgRAn8fq5EK6p5nRphOpxEwLbOgMzPetzBFduTdu0Ugys8"
		const uintFFwxIU = await BirdOraclefaDw9kr.getRatingByAddressString.call(stringdaytB9O, {from: accounts[1]});
		const uintWWy3HNK = await BirdOraclefaDw9kr.getRatingByAddress.call(addressRpfhF84, {from: accounts[2]});
		const uinthYy17da = await BirdOraclefaDw9kr.getRatingByAddressString.call(stringWN2d0q1, {from: accounts[3]});
		const stringmpfqNkH = await BirdOraclefaDw9kr.substring.call(stringlnsD2Cx, uint4QL9Ip, {from: "0x0000000000000000000000000000000000000001"});
		const stringiYOyatX = await BirdOraclefaDw9kr.substring.call(stringxOTAbVe, uintg4ivniJ, uintuLTZT5u, {from: accounts[4]});
		const uintPIXZ1i2 = await BirdOraclefaDw9kr.getRating.call({from: accounts[0]});
		const stringXLcDDh = await BirdOraclefaDw9kr.substring.call(stringKdBWP3i, uintk7fSP94, uintiC6io7D, {from: accounts[3]});
		const stringqI2na4a = await BirdOraclefaDw9kr.substring.call(stringTEWZWKI, uintIIXMSdX, uintLGvtHvB, {from: accounts[3]});
		const uintC9H4Szg = await BirdOraclefaDw9kr.getRatingByAddressString.call(stringDHFQeP, {from: accounts[1]});
		const uintKrqjurX = await BirdOraclefaDw9kr.getRating.call({from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefaDw9kr = await BirdOracle.new({from: accounts[1]});
		const uintzN6W7dP = BigInt("266")
		const stringODK045x = "owj3th892edH41xe2NqQiCMFh2XWM957OrFnzLoDCDloVYAx9"
		const uintKsBqLp = BigInt("377")
		const uintSmRQ4cv = BigInt("1034")
		const stringAk7p5kI = "YpPPky5uxh3QtFVxSxfjOb9YhvAXk3EwqyfJGIoWxywE2BaBIqycc"
		const stringyXsUI4f = await BirdOraclefaDw9kr.substring.call(stringODK045x, uintzN6W7dP, {from: accounts[1]});
		const 
X4sTQN = await BirdOraclefaDw9kr.updatedChainRequest.call(uintSmRQ4cv, uintKsBqLp, {from: accounts[4]});
		const stringEwK4CJB = await BirdOraclefaDw9kr.extractAddress.call(stringAk7p5kI, {from: accounts[2]});
		const uintnqav0P1 = await BirdOraclefaDw9kr.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclefaDw9kr = await BirdOracle.new({from: accounts[1]});
		const stringOlb0YZk = "yqLIC0BnLlzgzKmFrAYvQhuhengdguDT2tBdoiZccNZxRc4jaGEuQdZIglp5AtMQSKGQ6GWxWL143Tk4X6GW"
		const addressvGrXc12 = accounts[5]
		const addressh1jr60 = accounts[6]
		const uintAZUdHBj = BigInt("525")
		const uintDJQbS4n = BigInt("525")
		const stringiJ27OjM = "9PtaPYo4VK8VVggVkfPBhOdbYquiFesxseE4EXUiasCu0ZJ"
		const uintDToZNZ4 = BigInt("114")
		const uintuhenu0D = BigInt("1614")
		const stringfKkyQJk = "NemD4iljBqx12OzfW4WySec1m5M4CKjGgpAIbrSfNNkJyTbT"
		const stringtPJbywJ = "lfbGDFc7rpUMI6LmA"
		const uintQMyV8RM = BigInt("225")
		const uintZjUMNkM = BigInt("362")
		const uinttzfMUks = await BirdOraclefaDw9kr.getRatingByAddressString.call(stringOlb0YZk, {from: accounts[2]});
		const uintj777yU = await BirdOraclefaDw9kr.getRatingByAddress.call(addressvGrXc12, {from: accounts[0]});
		const uintfkU9k5e = await BirdOraclefaDw9kr.getRatingByAddress.call(addressh1jr60, {from: accounts[4]});
		const stringjjYv9J8 = await BirdOraclefaDw9kr.substring.call(stringiJ27OjM, uintDJQbS4n, uintAZUdHBj, {from: accounts[3]});
		const stringEDuBhll = await BirdOraclefaDw9kr.substring.call(stringfKkyQJk, uintuhenu0D, uintDToZNZ4, {from: accounts[4]});
		const uintofxFaPb = await BirdOraclefaDw9kr.getRatingByAddressString.call(stringtPJbywJ, {from: "0x0000000000000000000000000000000000000001"});
		const 
jrLPWfC = await BirdOraclefaDw9kr.updatedChainRequest.call(uintZjUMNkM, uintQMyV8RM, {from: accounts[4]});
	});
})