const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressNs0Q4lP = accounts[2]
		const addressB9kGvQS = accounts[1]
		const addressvptdxdj = accounts[5]
		const GardenContractV2e61ZY3Z = await GardenContractV2.new(addressNs0Q4lP, addressB9kGvQS, addressvptdxdj, {from: accounts[4]});
		const stringenTBQ9E = "bW1Zo2MR1fLyFm9gVYYlDHjtFVmNX385Or"
		const addressJo36xWK = accounts[3]
		const uintfk1Hkyh = BigInt("1542")
		const uintHFv9tCh = BigInt("154")
		const stringdRVO9Yq = "OSP0lvPhDMARUKQ"
		const uintkz1DJ92 = BigInt("21")
		const stringcMhxukh = "UhxxhhR9SwH5cgjyEcjc6WTsgtcGvOK2wIW4bnI1l0wICcdNkH47p1z7sIkkvl8zRKeULdpQqQ5pqUinFL93PhaajSvMnjEzVj"
		const addressBiUlfEU = accounts[0]
		const uintxsM00ju = BigInt("152")
		const string4vRfa9 = "v3RtjEC6KRMRuTHTFeHcHLm6G7Ey61rnIloGWgQyCCYeA0CdDqH6Cc2tapryHN24oVcnBWe8UkSAJm0V"
		const uint256ZyVUzHL = await GardenContractV2e61ZY3Z.balanceOf.call(addressJo36xWK, stringenTBQ9E, {from: accounts[2]});
		const stringgRd2MlX = await GardenContractV2e61ZY3Z.decompose.call(stringdRVO9Yq, uintHFv9tCh, uintfk1Hkyh, {from: accounts[0]});
		const uint256GysxoeW = await GardenContractV2e61ZY3Z.growthRemaining.call(addressBiUlfEU, stringcMhxukh, uintkz1DJ92, {from: accounts[3]});
		const uint256W6wpozh = await GardenContractV2e61ZY3Z.getTotalsTLPHarvest.call(uintxsM00ju, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K4Guhld = await GardenContractV2e61ZY3Z.totalTLPGrowing.call(string4vRfa9, {from: accounts[2]});

		await expect(GardenContractV2e61ZY3Z.balanceOf.call(addressJo36xWK, stringenTBQ9E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszPID1F7 = accounts[3]
		const addresskhiXsSY = accounts[5]
		const addressipYxtbv = accounts[4]
		const GardenContractV2J24OJZd = await GardenContractV2.new(addresszPID1F7, addresskhiXsSY, addressipYxtbv, {from: "0x0000000000000000000000000000000000000001"});
		const uintgNtJVQa = BigInt("1762")
		const uintoRNQmX0 = BigInt("94")
		const stringbNuHrY7 = "IUoG0DhJLVS6T7IsYyrqKrFVrHhOCRQ4gcqJThJk"
		const addressXJZMd0f = accounts[3]
		const uintmj2Jy3e = BigInt("85")
		const stringlJqaZJ7 = "hE2l"
		const stringxmRaEZo = await GardenContractV2J24OJZd.decompose.call(stringbNuHrY7, uintoRNQmX0, uintgNtJVQa, {from: accounts[0]});
		const addressvAMHsO3 = await GardenContractV2J24OJZd.changeOwner.call(addressXJZMd0f, {from: accounts[5]});
		const stringD1lcPkW = await GardenContractV2J24OJZd.withdraw.call(stringlJqaZJ7, uintmj2Jy3e, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addresstAkkbn = accounts[4]
		const addressqnyTQ1v = accounts[0]
		const addresstXAlrwA = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addresstAkkbn, addressqnyTQ1v, addresstXAlrwA, {from: accounts[1]});
		const uintrjURRp = BigInt("89")
		const stringqCt10Ho = "jtSU"
		const uintZFApT3M = BigInt("235")
		const uintffPLN3j = BigInt("15")
		const uint256Ca8iYC = await GardenContractV2WwrzS3v.getTotalrTLPHarvest.call(uintrjURRp, {from: accounts[3]});
		const uint256kSMRRfO = await GardenContractV2WwrzS3v.totalGardenSupply.call(stringqCt10Ho, {from: accounts[2]});
		const uint8Bi0Us7h = await GardenContractV2WwrzS3v.zeroHoldings.call(uintffPLN3j, uintZFApT3M, {from: accounts[3]});

		await expect(GardenContractV2WwrzS3v.getTotalrTLPHarvest.call(uintrjURRp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOEiIRyh = accounts[1]
		const addressig123s3 = accounts[0]
		const addressKFGjKGR = accounts[0]
		const GardenContractV2gCH1vPn = await GardenContractV2.new(addressOEiIRyh, addressig123s3, addressKFGjKGR, {from: accounts[0]});
		const uintbdsGA6j = BigInt("192")
		const stringrdCpH4 = "Dap828wiyl26DBWEh6DVYRgCYZxjrXEi9v1F3JaR661Plx"
		const uintc7ZbOeY = BigInt("75")
		const stringrU1QCPQ = "xg9MMR68RxL3itzMhCtwCr0GmrTsMXxvEeAQQwIPNqrkozXvhJvqKgfJcRbI54j2inedKwQuiMEBfFCkX87tSbfYxw44Sn5UNO"
		const uintXXYLSP3 = BigInt("0")
		const stringj9a1YFy = "4etQAdARdORgN6PMwmYpHXvFTzxMC7B"
		const stringP7XDSC = "yDigYI6LRLeFq9xVLjo34IKi0JXdlaCVKnf3QeIX6UGGYngblLXIqDPmRD4CWvWNoWBtdesOLGxihQs8CA6RXD3M"
		const stringK33Egwc = "dhuGOWXP8D2ibbChdmqQx8ynP4qZefNP4XPau"
		const addressTRcvjIk = accounts[4]
		const stringLwxVLc7 = await GardenContractV2gCH1vPn.claimDecompose.call(stringrdCpH4, uintbdsGA6j, {from: accounts[4]});
		const stringlGRz8a = await GardenContractV2gCH1vPn.harvest.call(stringrU1QCPQ, uintc7ZbOeY, {from: accounts[2]});
		const stringzmi5TWI = await GardenContractV2gCH1vPn.withdraw.call(stringj9a1YFy, uintXXYLSP3, {from: accounts[2]});
		const uint256H0QUcue = await GardenContractV2gCH1vPn.totalTLPDecomposed.call(stringP7XDSC, {from: accounts[0]});
		const uint256KDrlh0e = await GardenContractV2gCH1vPn.totalTLPBurnt.call(stringK33Egwc, {from: accounts[4]});
		const addressCG58oeE = await GardenContractV2gCH1vPn.renounceTokenOwner.call(addressTRcvjIk, {from: accounts[1]});

		await expect(GardenContractV2gCH1vPn.claimDecompose.call(stringrdCpH4, uintbdsGA6j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressI2sZGLy = accounts[1]
		const addressyWYdEBN = accounts[3]
		const addressr0p2DPv = "0x0000000000000000000000000000000000000001"
		const GardenContractV2ShXes0p = await GardenContractV2.new(addressI2sZGLy, addressyWYdEBN, addressr0p2DPv, {from: accounts[5]});
		const stringdbtaALg = "DUuo9nkfooQuJfdexdauy0VdZa89n6zLLygK9ErVMTpbfb8O8NNV5Gzk1LmHc39WKCojH9woKvwJJBl3UdtOWSx80MlxMi"
		const uintZOFjZY4 = BigInt("5")
		const stringMIX5zP8 = "VWdiNWps3ERVUG8ljXgQ"
		const addressjz42oqy = accounts[4]
		const boolcSEyilj = false
		const uintLnNVHg1 = BigInt("79")
		const stringYaNamtx = "zgxD36PKjPGW6AONaKb4"
		const uintalbQDOX = BigInt("1567")
		const uintyzVIHXv = BigInt("105")
		const uint256ibtDlTT = await GardenContractV2ShXes0p.totalTLPBurnt.call(stringdbtaALg, {from: accounts[3]});
		const uint256ymzZ1Vi = await GardenContractV2ShXes0p.growthRemaining.call(addressjz42oqy, stringMIX5zP8, uintZOFjZY4, {from: accounts[1]});
		const uint256S2E2by7 = await GardenContractV2ShXes0p.plant.call(uintalbQDOX, stringYaNamtx, uintLnNVHg1, boolcSEyilj, {from: accounts[0]});
		const uint256WR7Zecn = await GardenContractV2ShXes0p.getTotalsTLPHarvest.call(uintyzVIHXv, {from: accounts[4]});

		await expect(GardenContractV2ShXes0p.totalTLPBurnt.call(stringdbtaALg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressw6CEDkI = accounts[2]
		const addressvSW788I = accounts[4]
		const addressMJc55im = accounts[4]
		const GardenContractV2VGk1RY5 = await GardenContractV2.new(addressw6CEDkI, addressvSW788I, addressMJc55im, {from: accounts[5]});
		const uintydZqhW8 = BigInt("196")
		const stringHCy7xJz = "Mn0oJanmqKV4DPTvXwl9NRbVqEIoEbJN"
		const uintaeZq0yv = BigInt("109")
		const stringzrFjIBw = "Hzmau9t5ydWwrU4xrqUa6Rpw9zf8rEJ18BuPrkqiT7Hf69dNrrD7ll5MJEGyxfeToUR0p9KGIrwgnfP7UH"
		const addressod0wj15 = accounts[2]
		const stringmTKksuY = "XoMZQvhpW0vJAR"
		const uintqljirjh = BigInt("61")
		const stringmS1ruNI = "oM6SgsXFINw39YxdrMXRXcQWzGVMDPbw"
		const stringzPzg8NN = await GardenContractV2VGk1RY5.harvest.call(stringHCy7xJz, uintydZqhW8, {from: accounts[0]});
		const uint256c93hn16 = await GardenContractV2VGk1RY5.growthRemaining.call(addressod0wj15, stringzrFjIBw, uintaeZq0yv, {from: accounts[3]});
		const uint256r7AxY7 = await GardenContractV2VGk1RY5.totalTLPDecomposed.call(stringmTKksuY, {from: accounts[1]});
		const stringbWgzEje = await GardenContractV2VGk1RY5.harvest.call(stringmS1ruNI, uintqljirjh, {from: accounts[0]});

		await expect(GardenContractV2VGk1RY5.harvest.call(stringHCy7xJz, uintydZqhW8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgWkxn6I = "0x0000000000000000000000000000000000000001"
		const addressHBV9Ub6 = accounts[1]
		const addressjq5vKKI = accounts[1]
		const GardenContractV2X7go19A = await GardenContractV2.new(addressgWkxn6I, addressHBV9Ub6, addressjq5vKKI, {from: accounts[4]});
		const stringIg0dOEl = "kyk7VBJ"
		const uintDKROZOK = BigInt("147")
		const stringoqIiZgw = "z7bTm1d1yy3HIVNHndwc0k9FXwZuRDJd0TfBiCDUyXDOpY1rxY"
		const uintbbg1DUl = BigInt("233")
		const stringxBAvbD8 = "sPuEnePYlX24fCkqPB2j9FPS85qAxd196W4irtcdm4HIajHvextjTxNcobb"
		const addressoIEvLV = "0x0000000000000000000000000000000000000001"
		const uintHpBS80 = BigInt("235")
		const stringez6j4ja = "umHb9t8"
		const uinto4Ur45f = BigInt("1071")
		const uintgD4ORXT = BigInt("111")
		const stringFfD7qfF = "LGFYzx6fHKsgjdeV3UKQKVOE2jl22lV8PYWNCdtwIpHbNM4ZqXqSVgwdD9brsn63wzRm8NdvcsF0jWibRE4L4uI"
		const uint256kr3BLkQ = await GardenContractV2X7go19A.totalTLPGrowing.call(stringIg0dOEl, {from: accounts[2]});
		const stringkSKPTSW = await GardenContractV2X7go19A.claimDecompose.call(stringoqIiZgw, uintDKROZOK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pD84Ih1 = await GardenContractV2X7go19A.growthRemaining.call(addressoIEvLV, stringxBAvbD8, uintbbg1DUl, {from: accounts[1]});
		const uint256v4bnhpO = await GardenContractV2X7go19A.timeUntilNextTLP.call(stringez6j4ja, uintHpBS80, {from: accounts[2]});
		const stringU0zRSDB = await GardenContractV2X7go19A.decompose.call(stringFfD7qfF, uintgD4ORXT, uinto4Ur45f, {from: accounts[1]});

		await expect(GardenContractV2X7go19A.totalTLPGrowing.call(stringIg0dOEl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressbfMVA1a = accounts[0]
		const addressy3nqZj5 = accounts[0]
		const addressUi9eCOi = accounts[0]
		const GardenContractV2LoGGxx9 = await GardenContractV2.new(addressbfMVA1a, addressy3nqZj5, addressUi9eCOi, {from: accounts[2]});
		const stringzawgHyR = "44z8sadSy2aTyvbvDS225Ps8vBjqoDkIvlK0"
		const uintScW3kYT = BigInt("1191")
		const uintZfH05BV = BigInt("166")
		const uintLWZ8WeU = BigInt("28")
		const stringBPpzVOD = "fgf6xjINGl5wsYww4j4RTbdg2luXDdebF8ZpCok8EmS41elEjQSqaN0AWhEz4tOXBmBMouNyMHezmxlzjPprzeXgBseqHfnTx"
		const addressQh71CId = accounts[2]
		const stringP1JJuKc = "aD"
		const uintW0qR4Hm = BigInt("129")
		const uintcBKa4gi = BigInt("125")
		const uint256ZuF5Xy2 = await GardenContractV2LoGGxx9.totalTLPDecomposed.call(stringzawgHyR, {from: accounts[0]});
		const uint8yuxREYj = await GardenContractV2LoGGxx9.operationBurnMint.call(uintLWZ8WeU, uintZfH05BV, uintScW3kYT, {from: accounts[3]});
		const uint256Y4EUsLZ = await GardenContractV2LoGGxx9.totalTLPGrown.call(stringBPpzVOD, {from: "0x0000000000000000000000000000000000000001"});
		const addresssSFJZBh = await GardenContractV2LoGGxx9.changeOwner.call(addressQh71CId, {from: accounts[1]});
		const uint256hw5dqP = await GardenContractV2LoGGxx9.totalTLPGrowing.call(stringP1JJuKc, {from: accounts[3]});
		const uint8m9SzZJa = await GardenContractV2LoGGxx9.zeroHoldings.call(uintcBKa4gi, uintW0qR4Hm, {from: accounts[2]});

		await expect(GardenContractV2LoGGxx9.totalTLPDecomposed.call(stringzawgHyR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstB91ol = accounts[3]
		const addresszsEWb8 = accounts[4]
		const addressejcsWDU = accounts[4]
		const GardenContractV2Wv8GZil = await GardenContractV2.new(addresstB91ol, addresszsEWb8, addressejcsWDU, {from: accounts[0]});
		const addresspEbu9z = accounts[5]
		const addressbPM7r6p = accounts[3]
		const uintldXbPc1 = BigInt("99")
		const uintHWUiF9r = BigInt("100")
		const uint19sGua = BigInt("122")
		const uintyOwpbzQ = BigInt("142")
		const uintY2Ozokj = BigInt("183")
		const uintXq2Ryjq = BigInt("191")
		const uintFY0OV5A = BigInt("116")
		const uintyDrX92G = BigInt("42")
		const addresscXWw9K = await GardenContractV2Wv8GZil.addTokenOwner.call(addressbPM7r6p, addresspEbu9z, {from: accounts[2]});
		const uint256tv4Ehxf = await GardenContractV2Wv8GZil.getTotalrTLPHarvest.call(uintldXbPc1, {from: accounts[4]});
		const uint256CijV1Db = await GardenContractV2Wv8GZil.getTotalrTLPHarvest.call(uintHWUiF9r, {from: accounts[4]});
		const uint256RGtzBYP = await GardenContractV2Wv8GZil.getTotalrTLPHarvest.call(uint19sGua, {from: accounts[1]});
		const uint86EWQTd = await GardenContractV2Wv8GZil.zeroHoldings.call(uintY2Ozokj, uintyOwpbzQ, {from: accounts[0]});
		const uint8Q4PZQfR = await GardenContractV2Wv8GZil.operationBurnMint.call(uintyDrX92G, uintFY0OV5A, uintXq2Ryjq, {from: accounts[4]});

		await expect(GardenContractV2Wv8GZil.addTokenOwner.call(addressbPM7r6p, addresspEbu9z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPAxI0K = accounts[1]
		const address71hDVQ = accounts[3]
		const addressh525J6v = "0x0000000000000000000000000000000000000001"
		const GardenContractV2ShXes0p = await GardenContractV2.new(addressPAxI0K, address71hDVQ, addressh525J6v, {from: accounts[5]});
		const uintk5mCCnx = BigInt("73")
		const stringc4YULV = "FQCwPWDNCaUTs6FPtT277zgApqfBB7kQNEueq2HvTWwUQGsKafy884rObWNCtkX3Ky98svJIL6JFU1RNs9lMs"
		const stringdbtaALg = "DUuo9nkfooQuJfdexdauy0VdZa89n6zLLygK9ErVMTpbfb8O8NNV5Gzk1LmHc39WKCojH9woKvwJJBl3UdtOWSx80MlxMi"
		const uintxPQX904 = BigInt("5")
		const stringMIX5zP8 = "VWdiNWps3ERVUG8cjXgQ"
		const addressW433ZDL = accounts[4]
		const boolcSEyilj = false
		const uintQcYEwMt = BigInt("79")
		const stringYaNamtx = "zgxD36PKjPGW6AONaKb4"
		const uintsO3BgP2 = BigInt("1567")
		const uintYCTwFF8 = BigInt("105")
		const stringfltzhT8 = await GardenContractV2ShXes0p.withdraw.call(stringc4YULV, uintk5mCCnx, {from: accounts[2]});
		const uint256ibtDlTT = await GardenContractV2ShXes0p.totalTLPBurnt.call(stringdbtaALg, {from: accounts[3]});
		const uint256ymzZ1Vi = await GardenContractV2ShXes0p.growthRemaining.call(addressW433ZDL, stringMIX5zP8, uintxPQX904, {from: accounts[1]});
		const uint256S2E2by7 = await GardenContractV2ShXes0p.plant.call(uintsO3BgP2, stringYaNamtx, uintQcYEwMt, boolcSEyilj, {from: accounts[0]});
		const uint256WR7Zecn = await GardenContractV2ShXes0p.getTotalsTLPHarvest.call(uintYCTwFF8, {from: accounts[4]});

		await expect(GardenContractV2ShXes0p.withdraw.call(stringc4YULV, uintk5mCCnx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEWWfXy0 = accounts[0]
		const addressiGRRDts = accounts[4]
		const addressE8G656L = accounts[4]
		const GardenContractV2v1wZAg1 = await GardenContractV2.new(addressEWWfXy0, addressiGRRDts, addressE8G656L, {from: accounts[3]});
		const booliaUWDuv = true
		const uintlB59XI = BigInt("80")
		const string4gONhB = "ivygoyaIhlXRzO3RYScRaLywID0FSjCGITBMNqWOUbY1E6qsPc8iAubzFdSUhmjgfQgdpb8Syfs9OsFpwQkWWsFqe6O8jt3qdWE"
		const uintjAV7sa = BigInt("862")
		const uintGhgfbTo = BigInt("0")
		const uintyYYBRMr = BigInt("204")
		const uinthlPC3MQ = BigInt("223")
		const stringNhPfh6T = "L5Onkv1OrutjoggH5wNz5m1iatH7lySdXy23sopNA1NkPFPe6FCBX5YhxrSsdUTT0ZfcEMRMVFyL"
		const uintp61yFA6 = BigInt("121")
		const stringHmWNDh7 = "ZSM4UUjIbYAt7ipWstAJxyjhGxIYXpJLGL5kTkvYsHNr1BiCaHLIzrIMd1Vz6Ns51sF6PvkRRXKwoSTT2gBdY89t8nXJKDgyC"
		const stringRyUiV3Q = "vV7mcSGw"
		const uint256agL8P58 = await GardenContractV2v1wZAg1.plant.call(uintjAV7sa, string4gONhB, uintlB59XI, booliaUWDuv, {from: accounts[1]});
		const uint8t5ZX8cU = await GardenContractV2v1wZAg1.zeroHoldings.call(uintyYYBRMr, uintGhgfbTo, {from: accounts[5]});
		const stringy6QHHVW = await GardenContractV2v1wZAg1.claimDecompose.call(stringNhPfh6T, uinthlPC3MQ, {from: accounts[4]});
		await GardenContractV2v1wZAg1.totalBedSupply.call(stringHmWNDh7, uintp61yFA6, {from: accounts[2]});
		const uint256M7IjYM1 = await GardenContractV2v1wZAg1.totalGardenSupply.call(stringRyUiV3Q, {from: accounts[3]});

		await expect(GardenContractV2v1wZAg1.plant.call(uintjAV7sa, string4gONhB, uintlB59XI, booliaUWDuv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuKv87G5 = accounts[4]
		const addressjGuclGH = accounts[0]
		const addressF7STy2w = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addressuKv87G5, addressjGuclGH, addressF7STy2w, {from: accounts[1]});
		const uintha1yKK1 = BigInt("255")
		const uintsV0QyhY = BigInt("15")
		const uint8Bi0Us7h = await GardenContractV2WwrzS3v.zeroHoldings.call(uintsV0QyhY, uintha1yKK1, {from: accounts[3]});

		await expect(GardenContractV2WwrzS3v.zeroHoldings.call(uintsV0QyhY, uintha1yKK1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvtaxNM = accounts[2]
		const addressuMHTwO = accounts[4]
		const addressbhjXKLj = accounts[4]
		const GardenContractV2VGk1RY5 = await GardenContractV2.new(addressvtaxNM, addressuMHTwO, addressbhjXKLj, {from: accounts[5]});
		const uintk9uW14p = BigInt("109")
		const stringzrFjIBw = "Hzmau9t5ydWwrU4xrqUa6Rpw9zf8rEJ18BuPrkqiT7Hf69dNrrD7ll5MJEGyxfeToUR0p9KGIrwgnfP7UH"
		const addressiVVdlA = accounts[0]
		const uintPv3r5fC = BigInt("130")
		const stringyXfIi6o = "SiqtravOsf20Pv1CGXE72yrDSB1oCw5Oc6mdx8yGvUvr1pCiV8pe3oW2pmoiLqrS3BOGbgM6ljQetGG"
		const uintVKCG0pC = BigInt("61")
		const stringmS1ruNI = "oM6SgsXFINw39YxdrMXRXcQWzGVMDPbw"
		const uintKFH99MI = BigInt("67")
		const stringeHAqTBi = "Ohl3KGmSLR66FnfzOWBocjaXCd6pbOw3eVasFfyNWmX1hQy4L29hhJVG3HGEvw0pK96SE4dwJ2JeQYgAWMsOHoAif04Myc"
		const addressCAPjTwM = accounts[3]
		const uint256c93hn16 = await GardenContractV2VGk1RY5.growthRemaining.call(addressiVVdlA, stringzrFjIBw, uintk9uW14p, {from: accounts[3]});
		const stringDprIAcX = await GardenContractV2VGk1RY5.withdraw.call(stringyXfIi6o, uintPv3r5fC, {from: "0x0000000000000000000000000000000000000001"});
		const stringbWgzEje = await GardenContractV2VGk1RY5.harvest.call(stringmS1ruNI, uintVKCG0pC, {from: accounts[0]});
		const uint2564wuTjo = await GardenContractV2VGk1RY5.growthRemaining.call(addressCAPjTwM, stringeHAqTBi, uintKFH99MI, {from: accounts[3]});

		await expect(GardenContractV2VGk1RY5.growthRemaining.call(addressiVVdlA, stringzrFjIBw, uintk9uW14p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJ3odub7 = accounts[0]
		const address0E8pZw = accounts[5]
		const addressoYj8U4z = accounts[1]
		const GardenContractV2VpfetAi = await GardenContractV2.new(addressJ3odub7, address0E8pZw, addressoYj8U4z, {from: accounts[2]});
		const uintZETu9v = BigInt("79")
		const stringwMB0gcC = "5PIRat7OSk5zob8oGRBFYnLUwUq0Wndp4RHXhdL5WcfuFq5k6zowUzZmTT8cdocupEJEyJ2ZQcrb5HX6mWX25S1nmaXaIOt"
		const uintqdSiyZ5 = BigInt("1322")
		const uintTX2TXCa = BigInt("19")
		const stringMFtseUQ = "uj3nsSI5b6PFjFHlqSryCzGXpUfjvEAY6Toq44zqWBScnN1YrmGEFwR6zS3pKb"
		const stringfLDYLrj = "BkA8SZ"
		const addresstrHc9ai = accounts[3]
		await GardenContractV2VpfetAi.totalBedSupply.call(stringwMB0gcC, uintZETu9v, {from: accounts[2]});
		const stringFZVrfve = await GardenContractV2VpfetAi.decompose.call(stringMFtseUQ, uintTX2TXCa, uintqdSiyZ5, {from: accounts[2]});
		const uint256K0lhNNv = await GardenContractV2VpfetAi.balanceOf.call(addresstrHc9ai, stringfLDYLrj, {from: accounts[0]});

		await expect(GardenContractV2VpfetAi.totalBedSupply.call(stringwMB0gcC, uintZETu9v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNWXydJ = accounts[0]
		const addressPefNtdR = accounts[5]
		const addressPL49SmA = accounts[1]
		const GardenContractV2VpfetAi = await GardenContractV2.new(addressNWXydJ, addressPefNtdR, addressPL49SmA, {from: accounts[2]});
		const uintDFzvt9 = BigInt("153")
		const stringLdAy0Ah = "AddiENSQVT2JspsapDGC4q2xEz37odgcjuSKezlRwv2WUUyVL7qcLX1WpBe"
		const stringfLDYLrj = "BkA89SZ"
		const addressb8nbFC3 = accounts[0]
		const uint256kR9XXgx = await GardenContractV2VpfetAi.timeUntilNextTLP.call(stringLdAy0Ah, uintDFzvt9, {from: accounts[4]});
		const uint256K0lhNNv = await GardenContractV2VpfetAi.balanceOf.call(addressb8nbFC3, stringfLDYLrj, {from: accounts[0]});

		await expect(GardenContractV2VpfetAi.timeUntilNextTLP.call(stringLdAy0Ah, uintDFzvt9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressu4uHusJ = accounts[4]
		const addresseH87h5 = accounts[0]
		const addressZQ9mQBw = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addressu4uHusJ, addresseH87h5, addressZQ9mQBw, {from: accounts[1]});
		const uintzdAj5Ij = BigInt("215")
		const stringilN2ICY = "CNy0pJhJLDmNX2WclMGe8LKJuu3Nh88OOvs5YsfO2T"
		const uintyG0J59M = BigInt("75")
		const uint256FG6THaj = await GardenContractV2WwrzS3v.getTotalsTLPHarvest.call(uintzdAj5Ij, {from: accounts[1]});
		const uint256RskN1Ly = await GardenContractV2WwrzS3v.totalTLPGrowing.call(stringilN2ICY, {from: accounts[3]});
		const uint256Ca8iYC = await GardenContractV2WwrzS3v.getTotalrTLPHarvest.call(uintyG0J59M, {from: accounts[3]});

		await expect(GardenContractV2WwrzS3v.getTotalsTLPHarvest.call(uintzdAj5Ij, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressUruYfLz = accounts[4]
		const addressu03UWdD = accounts[0]
		const addressoIKb8xJ = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addressUruYfLz, addressu03UWdD, addressoIKb8xJ, {from: accounts[1]});
		const uintiNkVbF = BigInt("930")
		const uintoj7EUNE = BigInt("108")
		const stringbWiUU1Y = "Mm5P45bOXLMKL3FyNM6ioGiLuue6sbTaH"
		const uintiNUIAAc = BigInt("35")
		const stringayzudn4 = await GardenContractV2WwrzS3v.decompose.call(stringbWiUU1Y, uintoj7EUNE, uintiNkVbF, {from: accounts[4]});
		const uint256Ca8iYC = await GardenContractV2WwrzS3v.getTotalrTLPHarvest.call(uintiNUIAAc, {from: accounts[3]});

		await expect(GardenContractV2WwrzS3v.decompose.call(stringbWiUU1Y, uintoj7EUNE, uintiNkVbF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWyJP286 = accounts[4]
		const addressHFeHBpG = accounts[0]
		const addressi05YN4S = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addressWyJP286, addressHFeHBpG, addressi05YN4S, {from: accounts[1]});
		const uintZBry6er = BigInt("1")
		const uintYIUjFcU = BigInt("182")
		const stringaLEZQGQ = "fEJGkDYpOFL39Lt5wmG5pVzM6qLjwSUGWFasReWbKS5uqmRrU3hw58wBuNkkvtYc4X78pllV4kYDp0lA"
		const uint256Ca8iYC = await GardenContractV2WwrzS3v.getTotalrTLPHarvest.call(uintZBry6er, {from: accounts[3]});
		const stringsuRRLNd = await GardenContractV2WwrzS3v.claimDecompose.call(stringaLEZQGQ, uintYIUjFcU, {from: accounts[4]});

		await expect(GardenContractV2WwrzS3v.getTotalrTLPHarvest.call(uintZBry6er, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCMDxRQB = accounts[1]
		const addressGg3KiOg = accounts[3]
		const addressfPocdFT = "0x0000000000000000000000000000000000000001"
		const GardenContractV2ShXes0p = await GardenContractV2.new(addressCMDxRQB, addressGg3KiOg, addressfPocdFT, {from: accounts[5]});
		const stringgnGiBnx = "7jJxtiLnhTzDXoz635fNO7cKlktFi66HVrK"
		const uint88MsHy = BigInt("110")
		const stringfbbv2JF = "wlhrAJ4QkhMubFUmJ6cXyfn42luH4RuFiFbJP9g6BdF"
		const uintam9Wznk = BigInt("73")
		const stringc4YULV = "FQCwPWDNCaUTs6FPtT277zgApqfBB7kQNEueq2HvTWwUQGsKafy884rObWNCtkX3Ky98svJIL6JFU1RNs9lMs"
		const uintnYyeur7 = BigInt("192")
		const stringMIX5zP8 = "VWdiNWps3ERVUG8cjXgQ"
		const addresswL0zy7X = accounts[5]
		const boolcSEyilj = false
		const uintt82yL1R = BigInt("79")
		const stringYaNamtx = "zgxD36PKjPGW6AONaKb4"
		const uintJNMl66 = BigInt("1567")
		const uintZlWwIgi = BigInt("105")
		const uint256c3Akger = await GardenContractV2ShXes0p.totalTLPGrown.call(stringgnGiBnx, {from: accounts[0]});
		const uint256rLgjN7M = await GardenContractV2ShXes0p.timeUntilNextTLP.call(stringfbbv2JF, uint88MsHy, {from: accounts[5]});
		const stringfltzhT8 = await GardenContractV2ShXes0p.withdraw.call(stringc4YULV, uintam9Wznk, {from: accounts[2]});
		const uint256ymzZ1Vi = await GardenContractV2ShXes0p.growthRemaining.call(addresswL0zy7X, stringMIX5zP8, uintnYyeur7, {from: accounts[1]});
		const uint256S2E2by7 = await GardenContractV2ShXes0p.plant.call(uintJNMl66, stringYaNamtx, uintt82yL1R, boolcSEyilj, {from: accounts[0]});
		const uint256WR7Zecn = await GardenContractV2ShXes0p.getTotalsTLPHarvest.call(uintZlWwIgi, {from: accounts[4]});

		await expect(GardenContractV2ShXes0p.totalTLPGrown.call(stringgnGiBnx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdQ1MpD = accounts[4]
		const addresskOxqJPn = accounts[0]
		const addressD0Gd78I = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addressdQ1MpD, addresskOxqJPn, addressD0Gd78I, {from: accounts[1]});
		const stringZyMVvn = "akhaR3hkbWoE4Rv9ggmuC2eY2Vy5NC"
		const uintDdUdIUX = BigInt("1453")
		const uintZXdJMXL = BigInt("192")
		const uintcuioupg = BigInt("50")
		const uintva1NzTe = BigInt("176")
		const stringaLEZQGQ = "fEJGkDYpOFL39Lt5wmG5pVzM6qLjwSUGWFasReWbKS5uqmRrU3hw58wBuNkkvtYc4X78pllV4kYDp0lA"
		const stringguD8suk = await GardenContractV2WwrzS3v.harvestAllBeds.call(stringZyMVvn, {from: accounts[4]});
		const uint8PA4ruBK = await GardenContractV2WwrzS3v.operationBurnMint.call(uintcuioupg, uintZXdJMXL, uintDdUdIUX, {from: accounts[0]});
		const stringsuRRLNd = await GardenContractV2WwrzS3v.claimDecompose.call(stringaLEZQGQ, uintva1NzTe, {from: accounts[4]});

		await expect(GardenContractV2WwrzS3v.harvestAllBeds.call(stringZyMVvn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrMBZdkI = accounts[0]
		const addressnwYED74 = accounts[4]
		const addressCK07jPD = accounts[4]
		const GardenContractV2v1wZAg1 = await GardenContractV2.new(addressrMBZdkI, addressnwYED74, addressCK07jPD, {from: accounts[3]});
		const stringRyUiV3Q = "vV7mcSGw"
		const uint256M7IjYM1 = await GardenContractV2v1wZAg1.totalGardenSupply.call(stringRyUiV3Q, {from: accounts[3]});

		await expect(GardenContractV2v1wZAg1.totalGardenSupply.call(stringRyUiV3Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressC0To1Z = accounts[0]
		const addressmmWsYCf = accounts[4]
		const addressFr6OTb4 = accounts[4]
		const GardenContractV2v1wZAg1 = await GardenContractV2.new(addressC0To1Z, addressmmWsYCf, addressFr6OTb4, {from: accounts[3]});
		const addressq9PQO0L = accounts[2]
		const addresskEhDRl = "0x0000000000000000000000000000000000000001"
		const booliaUWDuv = true
		const uintAmnD67p = BigInt("122")
		const string4gONhB = "ivygoyaIhlXRzO3RYScRaLywID0FSjCGITBMNqWOUbY1E6qsNc8iAubzFdSAhmjgfQgdpb8Syfs9OsFpwQkWWsFqe6O8jt3qdWE"
		const uint7XWkxM = BigInt("862")
		const stringRyUiV3Q = "vV7mcSGw"
		const addressGYHORE7 = await GardenContractV2v1wZAg1.addTokenOwner.call(addresskEhDRl, addressq9PQO0L, {from: accounts[3]});
		const uint256agL8P58 = await GardenContractV2v1wZAg1.plant.call(uint7XWkxM, string4gONhB, uintAmnD67p, booliaUWDuv, {from: accounts[1]});
		const uint256M7IjYM1 = await GardenContractV2v1wZAg1.totalGardenSupply.call(stringRyUiV3Q, {from: accounts[3]});

		await expect(GardenContractV2v1wZAg1.addTokenOwner.call(addresskEhDRl, addressq9PQO0L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskTB1HOT = accounts[4]
		const addressaK65gMv = accounts[0]
		const addressdE2TWJY = accounts[2]
		const GardenContractV2WwrzS3v = await GardenContractV2.new(addresskTB1HOT, addressaK65gMv, addressdE2TWJY, {from: accounts[1]});
		const addressTPnx05U = accounts[5]
		const uintQieZ4Xk = BigInt("182")
		const stringaLEZQGQ = "fEJGkDYpOFL39Lt5wmG5pVzM6qLjwSUGWFasReWbKS5uqmRrU3hw58wBuNkkvtYc4X78pllV4kYDp0lA"
		const addresssII5Bfo = await GardenContractV2WwrzS3v.changeBenefitiary.call(addressTPnx05U, {from: accounts[1]});
		const stringsuRRLNd = await GardenContractV2WwrzS3v.claimDecompose.call(stringaLEZQGQ, uintQieZ4Xk, {from: accounts[4]});

		await expect(GardenContractV2WwrzS3v.claimDecompose.call(stringaLEZQGQ, uintQieZ4Xk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxPn0M7w = accounts[0]
		const addressnYNweTP = accounts[5]
		const addressWCRUZpy = accounts[1]
		const GardenContractV2VpfetAi = await GardenContractV2.new(addressxPn0M7w, addressnYNweTP, addressWCRUZpy, {from: accounts[2]});
		const addressKMJ304 = accounts[1]
		const stringfLDYLrj = "BkA8SZ"
		const addressmK1MfEo = accounts[4]
		const string6xlNEi = "js8l6gtzdWckyknMATga4aJFidF65oC15qJYeDGw1s4k"
		const addressrObKj5 = await GardenContractV2VpfetAi.renounceTokenOwner.call(addressKMJ304, {from: accounts[2]});
		const uint256K0lhNNv = await GardenContractV2VpfetAi.balanceOf.call(addressmK1MfEo, stringfLDYLrj, {from: accounts[0]});
		const uint256F6MclV9 = await GardenContractV2VpfetAi.totalTLPGrowing.call(string6xlNEi, {from: accounts[0]});

		await expect(GardenContractV2VpfetAi.renounceTokenOwner.call(addressKMJ304, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskp2WZ9S = accounts[0]
		const addressi6VZ4gu = accounts[5]
		const addressGJjG7e = accounts[1]
		const GardenContractV2VpfetAi = await GardenContractV2.new(addresskp2WZ9S, addressi6VZ4gu, addressGJjG7e, {from: accounts[2]});
		const addresssijJJrx = accounts[3]
		const uintvPzoYxQ = BigInt("0")
		const stringtLTxBle = "mxOlDLW7gfvrPJvMw3dWls"
		const addressbY4YXCD = await GardenContractV2VpfetAi.changeOwner.call(addresssijJJrx, {from: accounts[2]});
		const stringKbd4ppq = await GardenContractV2VpfetAi.withdraw.call(stringtLTxBle, uintvPzoYxQ, {from: accounts[1]});

		await expect(GardenContractV2VpfetAi.withdraw.call(stringtLTxBle, uintvPzoYxQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})