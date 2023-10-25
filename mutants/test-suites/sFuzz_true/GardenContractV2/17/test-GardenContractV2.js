const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressm3kN1Cb = accounts[4]
		const addresspglQ72P = accounts[1]
		const addressrzOPsOy = accounts[4]
		const GardenContractV2EN5J3ca = await GardenContractV2.new(addressm3kN1Cb, addresspglQ72P, addressrzOPsOy, {from: accounts[4]});
		const stringUYJbQbt = ""
		const uinteBuWnNf = BigInt("84")
		const uintQoqu5xa = BigInt("235")
//		const uint256MXSIVyt = await GardenContractV2EN5J3ca.totalTLPBurnt.call(stringUYJbQbt, {from: accounts[1]});
//		const uint8lCmCEU4 = await GardenContractV2EN5J3ca.zeroHoldings.call(uintQoqu5xa, uinteBuWnNf, {from: accounts[1]});

		await expect(GardenContractV2EN5J3ca.totalTLPBurnt.call(stringUYJbQbt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspl8zi04 = accounts[0]
		const addressV7opv6A = accounts[1]
		const addressCStCVbY = accounts[0]
		const GardenContractV2SQ6Vdw4 = await GardenContractV2.new(addresspl8zi04, addressV7opv6A, addressCStCVbY, {from: accounts[5]});
		const uintQpHszpm = BigInt("177")
		const stringENS8Djw = "VtP1cJXOIHeoO66NZTk78GJ"
		const uintaIdDLRe = BigInt("167")
		const boolkX3uBnK = true
		const uintj4smbvc = BigInt("154")
		const stringzJgpmDo = "chS7mmuEMfJIh9WhbM69fQHQK"
		const uintm53RMWM = BigInt("1394")
		const uintwEwvtca = BigInt("175")
		const uintpfbGOHQ = BigInt("153")
		const addressasAaAIF = accounts[4]
//		const stringG0OQmmk = await GardenContractV2SQ6Vdw4.withdraw.call(stringENS8Djw, uintQpHszpm, {from: accounts[4]});
//		const uint256Tb0AA9s = await GardenContractV2SQ6Vdw4.getTotalsTLPHarvest.call(uintaIdDLRe, {from: accounts[3]});
//		const uint256BnrvPgt = await GardenContractV2SQ6Vdw4.plant.call(uintm53RMWM, stringzJgpmDo, uintj4smbvc, boolkX3uBnK, {from: accounts[3]});
//		const uint8gE5pRKZ = await GardenContractV2SQ6Vdw4.zeroHoldings.call(uintpfbGOHQ, uintwEwvtca, {from: accounts[0]});
//		const addressZ4Kk89T = await GardenContractV2SQ6Vdw4.changeBenefitiary.call(addressasAaAIF, {from: accounts[0]});

		await expect(GardenContractV2SQ6Vdw4.withdraw.call(stringENS8Djw, uintQpHszpm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswtqe1P = accounts[2]
		const addresscdu5nxr = accounts[5]
		const addressdJ6nKb6 = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addresswtqe1P, addresscdu5nxr, addressdJ6nKb6, {from: accounts[4]});
		const uintV1VmXYG = BigInt("209")
		const uintYEZT1Gb = BigInt("232")
//		const uint256WMN2itp = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintV1VmXYG, {from: accounts[0]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintYEZT1Gb, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintV1VmXYG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrfyApI0 = accounts[2]
		const addressmbrXo6C = accounts[2]
		const addressELqxyB = accounts[1]
		const GardenContractV2tGDtAc = await GardenContractV2.new(addressrfyApI0, addressmbrXo6C, addressELqxyB, {from: accounts[3]});
		const uintbtOt15G = BigInt("159")
		const stringBRJ9DFc = "hT5RStSxeCUy965Mai2YffczzR3MKS6a2XixADkPye1diJI89yP4FxpfzBDl7R7NHaLBMQz1OBZb6s"
		const addressLU0uWqm = accounts[1]
		const uintNy5gbIy = BigInt("248")
		const stringF9Vgk9 = "hoN7MGPggXpbnQi9qg7ZAtBP"
		const address99Sz3u = accounts[4]
//		const uint256Cs5r3i5 = await GardenContractV2tGDtAc.timeUntilNextTLP.call(stringBRJ9DFc, uintbtOt15G, {from: accounts[3]});
//		const addressbgS5Se6 = await GardenContractV2tGDtAc.changeBenefitiary.call(addressLU0uWqm, {from: accounts[0]});
//		const stringN2NkreV = await GardenContractV2tGDtAc.harvest.call(stringF9Vgk9, uintNy5gbIy, {from: accounts[4]});
//		const addressSfTCjcG = await GardenContractV2tGDtAc.renounceTokenOwner.call(address99Sz3u, {from: accounts[4]});

		await expect(GardenContractV2tGDtAc.timeUntilNextTLP.call(stringBRJ9DFc, uintbtOt15G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJxmLMaQ = "0x0000000000000000000000000000000000000001"
		const addressSPA05nj = accounts[1]
		const addressuPLTuOA = accounts[3]
		const GardenContractV2jvgq9St = await GardenContractV2.new(addressJxmLMaQ, addressSPA05nj, addressuPLTuOA, {from: accounts[3]});
		const uintOXFtmjw = BigInt("172")
		const stringYBzb0ny = "8laT6wVj1a6QYg5Ykygz78gg4aa8DB9SK9xIfDNQ"
		const addressvbtsTwZ = accounts[5]
		const addressukOAfjj = accounts[2]
		const addressig1XKJ5 = accounts[3]
//		await GardenContractV2jvgq9St.totalBedSupply.call(stringYBzb0ny, uintOXFtmjw, {from: accounts[0]});
//		const addresskGVrlnl = await GardenContractV2jvgq9St.changeBenefitiary.call(addressvbtsTwZ, {from: accounts[3]});
//		const addresswhielvc = await GardenContractV2jvgq9St.addTokenOwner.call(addressig1XKJ5, addressukOAfjj, {from: accounts[4]});

		await expect(GardenContractV2jvgq9St.totalBedSupply.call(stringYBzb0ny, uintOXFtmjw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqavSCN4 = "0x0000000000000000000000000000000000000001"
		const addressknDb0PT = accounts[4]
		const addressuNtXmkt = accounts[3]
		const GardenContractV2tWV1TEX = await GardenContractV2.new(addressqavSCN4, addressknDb0PT, addressuNtXmkt, {from: accounts[4]});
		const stringqbCz2jF = "SEYKzpjs7KJM8avC3DA99tYt9bLBjOAfnTgV9A1rAA295S8oGOB7V3Uvgtbn96rhvqDHLzDU13MC1aXiAiLe6z2x"
		const uintElz6yvD = BigInt("9")
		const stringXJtLeZo = "MkqpIhhiMNcTP5KwdohG5rrgKb80JGrbHzjMJwFyCTEHPwPqPRl5omQH5V5SgS8qa"
		const stringmW8ANew = "AEZRC3PYAfWfxLpeSwXqAUd7NP34NX1MT4GWNgrOujw2ZOdC6x9yPeLPB5F4llmMKcRMuxtnpjRR7Tffq8"
		const uintLCN270 = BigInt("132")
		const uintTFZzak1 = BigInt("217")
//		const uint256CCU8JoZ = await GardenContractV2tWV1TEX.totalGardenSupply.call(stringqbCz2jF, {from: accounts[2]});
//		const uint256niYAWlJ = await GardenContractV2tWV1TEX.getTotalrTLPHarvest.call(uintElz6yvD, {from: accounts[3]});
//		const stringSWGWQy5 = await GardenContractV2tWV1TEX.harvestAllBeds.call(stringXJtLeZo, {from: accounts[5]});
//		const uint256e7iISU9 = await GardenContractV2tWV1TEX.totalTLPGrown.call(stringmW8ANew, {from: accounts[3]});
//		const uint8jyJwy42 = await GardenContractV2tWV1TEX.setTimeStamp.call(uintTFZzak1, uintLCN270, {from: accounts[2]});

		await expect(GardenContractV2tWV1TEX.totalGardenSupply.call(stringqbCz2jF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTGCpEP8 = accounts[1]
		const addressg4sVxsq = accounts[2]
		const addressB26oSis = accounts[0]
		const GardenContractV2BjGK5p = await GardenContractV2.new(addressTGCpEP8, addressg4sVxsq, addressB26oSis, {from: accounts[5]});
		const addressUsv1GP = accounts[0]
		const uintDTVRTbC = BigInt("52")
		const stringKwfaDqt = "UkRNAXAzGnOTcvxBoGGlFYCBnW"
		const uintA6rZx8r = BigInt("1652")
		const uintjocIoS = BigInt("204")
		const stringXxFBpwm = "HnH2qlL4hLTC9i5Nu8HPheo"
		const uintEphnnh = BigInt("111")
		const stringh87SDNy = "qxnXE9eS"
		const uintKk084eF = BigInt("78")
		const uintPEwV1ol = BigInt("153")
//		const addressTs809B = await GardenContractV2BjGK5p.changeOwner.call(addressUsv1GP, {from: accounts[4]});
//		await GardenContractV2BjGK5p.totalBedSupply.call(stringKwfaDqt, uintDTVRTbC, {from: accounts[2]});
//		const stringhlR6mKk = await GardenContractV2BjGK5p.decompose.call(stringXxFBpwm, uintjocIoS, uintA6rZx8r, {from: accounts[3]});
//		const stringNLParZW = await GardenContractV2BjGK5p.claimDecompose.call(stringh87SDNy, uintEphnnh, {from: accounts[0]});
//		const uint256UGnbo18 = await GardenContractV2BjGK5p.getTotalsTLPHarvest.call(uintKk084eF, {from: accounts[0]});
//		const uint256kjI9ae6 = await GardenContractV2BjGK5p.getTotalsTLPHarvest.call(uintPEwV1ol, {from: accounts[3]});

		await expect(GardenContractV2BjGK5p.changeOwner.call(addressUsv1GP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszYp4v8L = accounts[4]
		const addressSrxkTE7 = accounts[0]
		const addressxm2LAD = accounts[3]
		const GardenContractV2h5pxp3L = await GardenContractV2.new(addresszYp4v8L, addressSrxkTE7, addressxm2LAD, {from: accounts[4]});
		const boolgQ7m7TW = true
		const uintrbjZG75 = BigInt("52")
		const stringg3BNIZ6 = "0qkXbdB27s6E0K5cQ7aIp2r"
		const uintWSO6BZJ = BigInt("834")
		const stringIF5FlPx = "Qb4EUjLHLHLwOonPSOevttFZUtgVGNBXbxynFqJb7DF8dCmIAqYUKph44MsWpT0q6DHgI9B8X68mJ4EvlW2S"
		const uintT1D8kbY = BigInt("183")
		const uintCSV0PCR = BigInt("231")
		const uintNNRxGW = BigInt("8")
//		const uint256gT9t8ff = await GardenContractV2h5pxp3L.plant.call(uintWSO6BZJ, stringg3BNIZ6, uintrbjZG75, boolgQ7m7TW, {from: accounts[1]});
//		const uint256XYbBLb = await GardenContractV2h5pxp3L.totalTLPDecomposed.call(stringIF5FlPx, {from: accounts[4]});
//		const uint256dwDG8iK = await GardenContractV2h5pxp3L.getTotalsTLPHarvest.call(uintT1D8kbY, {from: accounts[4]});
//		const uint8g6A7NK4 = await GardenContractV2h5pxp3L.zeroHoldings.call(uintNNRxGW, uintCSV0PCR, {from: accounts[4]});

		await expect(GardenContractV2h5pxp3L.plant.call(uintWSO6BZJ, stringg3BNIZ6, uintrbjZG75, boolgQ7m7TW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJhZZkHI = accounts[0]
		const addressI3hKMA = accounts[4]
		const addressbNYR69H = accounts[1]
		const GardenContractV2nrsJVp5 = await GardenContractV2.new(addressJhZZkHI, addressI3hKMA, addressbNYR69H, {from: accounts[3]});
		const uintn59q3Xq = BigInt("151")
		const stringFOKEarD = "H8rVWMQBYPU6ioMjHokNzfi4OYjS6ddrcMKT3U7OLQNhXQoJPxxbUI1kG5HwKF7oHl4ifYB6gt0YcpPpvRQ5cyGM"
		const uintGC4j1nw = BigInt("25")
		const stringDmahkHZ = "V8jYLTR8KqtnfErH7eDkCjxHFdRnFNPPtOxP0wvlpjQ94qM7XAxaQKXvARe77rc7dDOguSdd7cEuDE53WwoYhBxJCQL"
		const stringa1F6CxR = "mzK4ns5eLdTc54PtpDnYHXNc7d4i4cjjHbgNjjBidMur"
		const stringz1iZ65x = "P9jkjFexexYJUgIxlClf8zrV67GnNhKP8vvDrgpljxazbiQG5"
		const addresssS4ZZyO = accounts[0]
//		const stringsocAWV = await GardenContractV2nrsJVp5.harvest.call(stringFOKEarD, uintn59q3Xq, {from: accounts[3]});
//		const stringDiA4861 = await GardenContractV2nrsJVp5.harvest.call(stringDmahkHZ, uintGC4j1nw, {from: accounts[2]});
//		const stringQueWxrs = await GardenContractV2nrsJVp5.harvestAllBeds.call(stringa1F6CxR, {from: accounts[2]});
//		const uint256XwjSlnx = await GardenContractV2nrsJVp5.balanceOf.call(addresssS4ZZyO, stringz1iZ65x, {from: accounts[1]});

		await expect(GardenContractV2nrsJVp5.harvest.call(stringFOKEarD, uintn59q3Xq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstpcu7u = accounts[2]
		const addressjNR6SQD = accounts[5]
		const addressn923LTM = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addresstpcu7u, addressjNR6SQD, addressn923LTM, {from: accounts[4]});
		const uintHksJKYU = BigInt("170")
		const stringiVIcvuG = "a"
		const uintnR057S5 = BigInt("246")
//		const stringpTKrEBM = await GardenContractV2Q9JvqR.claimDecompose.call(stringiVIcvuG, uintHksJKYU, {from: accounts[2]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintnR057S5, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.claimDecompose.call(stringiVIcvuG, uintHksJKYU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoZBDi4u = accounts[3]
		const addresspW9oKwq = accounts[0]
		const addressm2fD2BV = accounts[2]
		const GardenContractV2zLL09Tz = await GardenContractV2.new(addressoZBDi4u, addresspW9oKwq, addressm2fD2BV, {from: accounts[5]});
		const stringYYGmXND = "OlriWpQnHc"
		const uintC2odogQ = BigInt("229")
		const stringh61UQVv = "IJfoIGyuvP"
		const addressr5dRx0 = accounts[5]
		const stringtNoHb3A = "QFYQMJeYsGKt6Hyz2RAdHquwD8ixUlqSg3mtEknIXz7471gQW2x9DbYav0cCf"
		const stringshJaEW5 = "X9VIwUP2zRfA3gov7oCK1OZ12Ip7NwYnisOE82qSvIlgdHf1MfNfxP1eoMsIUeFCk3Ry7OOEKYMmAjCnZ699oI"
		const addressQ6Pdroo = accounts[1]
		const address9qMWOe = accounts[0]
//		const stringhqoJ1II = await GardenContractV2zLL09Tz.harvestAllBeds.call(stringYYGmXND, {from: accounts[5]});
//		const uint256WDN4Xnu = await GardenContractV2zLL09Tz.growthRemaining.call(addressr5dRx0, stringh61UQVv, uintC2odogQ, {from: accounts[4]});
//		const uint256V0t2w65 = await GardenContractV2zLL09Tz.totalTLPBurnt.call(stringtNoHb3A, {from: accounts[1]});
//		const uint256KKrCOr7 = await GardenContractV2zLL09Tz.totalTLPGrown.call(stringshJaEW5, {from: accounts[3]});
//		const addressSPwYUBC = await GardenContractV2zLL09Tz.addTokenOwner.call(address9qMWOe, addressQ6Pdroo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2zLL09Tz.harvestAllBeds.call(stringYYGmXND, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressB73amcQ = accounts[2]
		const addressfq09VCS = accounts[5]
		const addressP5cCHvu = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressB73amcQ, addressfq09VCS, addressP5cCHvu, {from: accounts[4]});
		const stringhemBdDe = "ytDWwL318CnZAtMYtkdbqV6gffOmoKyqRAIIeCGupuqA5tfbf1cUfnVPPBQJ230Zb"
		const uintVLYbXKj = BigInt("95")
		const uintyEbinox = BigInt("130")
		const stringbqCmFg = "dBsJAYObOCL2Ri9nW2ZpIPpUdHIysE1TKr1C2FJD2yI4TFKSD"
//		const uint256Wq9HXp = await GardenContractV2Q9JvqR.totalTLPGrown.call(stringhemBdDe, {from: accounts[4]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintVLYbXKj, {from: accounts[5]});
//		const uint256sEJiB6 = await GardenContractV2Q9JvqR.timeUntilNextTLP.call(stringbqCmFg, uintyEbinox, {from: accounts[2]});

		await expect(GardenContractV2Q9JvqR.totalTLPGrown.call(stringhemBdDe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdofNugL = accounts[3]
		const addressa3SAZ6P = accounts[5]
		const addressGsLLot = "0x0000000000000000000000000000000000000001"
		const GardenContractV2PmCfMS3 = await GardenContractV2.new(addressdofNugL, addressa3SAZ6P, addressGsLLot, {from: "0x0000000000000000000000000000000000000001"});
		const uintvKseuwC = BigInt("247")
		const uintB7kTFa2 = BigInt("130")
		const uintiHhyXkL = BigInt("72")
		const stringm0qLguA = "bnHqEItLj8e6TGjFvq1MNl"
		const uint256iLzGYzb = await GardenContractV2PmCfMS3.getTotalsTLPHarvest.call(uintvKseuwC, {from: accounts[2]});
		const uint8I4oleib = await GardenContractV2PmCfMS3.zeroHoldings.call(uintiHhyXkL, uintB7kTFa2, {from: accounts[2]});
		const uint256LLMFBpo = await GardenContractV2PmCfMS3.totalTLPBurnt.call(stringm0qLguA, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addresscwKpGfR = accounts[2]
		const addresskWimawb = accounts[5]
		const addressLyrhzZP = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addresscwKpGfR, addresskWimawb, addressLyrhzZP, {from: accounts[4]});
		const uintKZoLhNq = BigInt("48")
		const uints1mR4a0 = BigInt("90")
		const uintrvwqHar = BigInt("250")
		const stringgs7on3t = "PQpqxE70sKJ3SpF4tggv9KefbFa1Y2j2uzVx7C1caAXBJg6ym7SNe99Iot3BRbkPOQreaee"
		const uintpuiTlXb = BigInt("255")
//		const uint256m5RQ1x = await GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintKZoLhNq, {from: accounts[3]});
//		const stringXG4vVac = await GardenContractV2Q9JvqR.decompose.call(stringgs7on3t, uintrvwqHar, uints1mR4a0, {from: accounts[1]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintpuiTlXb, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintKZoLhNq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxv2Sv3Y = accounts[2]
		const addressLb1IOhg = accounts[5]
		const addressoWvEJ3B = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressxv2Sv3Y, addressLb1IOhg, addressoWvEJ3B, {from: accounts[4]});
		const stringFXGQ1JL = "FSghFp10GX2AHPGK1Eb6IMCd4V4VswyhQFz2zGZgnxoKlh6rNfBqZ1WI7iGUt25X"
		const addresshgyxCCH = accounts[0]
		const uintoKMwiGQ = BigInt("184")
		const stringUPH8fPf = "rEsnkInlcEwUnhuUlFRBzV2"
		const uintvMHXGxu = BigInt("48")
		const uintiIEFMdm = BigInt("90")
		const uintHsdmib = BigInt("250")
		const stringgs7on3t = "PQpqxE70sKJ3SpF4tggv9KefbFa1Y2j2uzVx7C1caAXBJg6ym7SNe99Iot3BRbkPOQreaee"
		const uintLXk4KAW = BigInt("255")
//		const uint256EV19mtK = await GardenContractV2Q9JvqR.balanceOf.call(addresshgyxCCH, stringFXGQ1JL, {from: accounts[4]});
//		const stringuXbn8vc = await GardenContractV2Q9JvqR.harvest.call(stringUPH8fPf, uintoKMwiGQ, {from: accounts[3]});
//		const uint256m5RQ1x = await GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintvMHXGxu, {from: accounts[3]});
//		const stringXG4vVac = await GardenContractV2Q9JvqR.decompose.call(stringgs7on3t, uintHsdmib, uintiIEFMdm, {from: accounts[1]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintLXk4KAW, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.balanceOf.call(addresshgyxCCH, stringFXGQ1JL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresst2oYQ8g = accounts[2]
		const addresstrcAjY = accounts[5]
		const addresske4kak = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addresst2oYQ8g, addresstrcAjY, addresske4kak, {from: accounts[4]});
		const stringUQdLmlG = "E2DpIjM2qFpPJlNvFPTcGQOnjUFC"
		const uinteOiF1bj = BigInt("255")
//		const uint256c28UHWz = await GardenContractV2Q9JvqR.totalTLPDecomposed.call(stringUQdLmlG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uinteOiF1bj, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.totalTLPDecomposed.call(stringUQdLmlG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPpeyUzp = accounts[3]
		const addressaWZDR3R = accounts[1]
		const addresstdkBk0L = accounts[2]
		const GardenContractV2IZuNoW = await GardenContractV2.new(addressPpeyUzp, addressaWZDR3R, addresstdkBk0L, {from: accounts[4]});
		const addressPQJnnzo = accounts[3]
		const uintwZH7Vf7 = BigInt("212")
		const stringQQsYY0u = "7gUeFgefeFh6kC"
		const uinttg6peqC = BigInt("14")
		const stringfJRj5N3 = "3aEjPPhvSP67JapxCP4s6Sbdzn6seL968lonjkzpWT"
		const addressDJysvZQ = await GardenContractV2IZuNoW.changeBenefitiary.call(addressPQJnnzo, {from: accounts[4]});
//		const uint256Rhz3Ndi = await GardenContractV2IZuNoW.getTotalrTLPHarvest.call(uintwZH7Vf7, {from: accounts[1]});
//		const uint256MW4I7yM = await GardenContractV2IZuNoW.totalGardenSupply.call(stringQQsYY0u, {from: accounts[2]});
//		const stringpGcm5Xu = await GardenContractV2IZuNoW.withdraw.call(stringfJRj5N3, uinttg6peqC, {from: accounts[3]});

		await expect(GardenContractV2IZuNoW.getTotalrTLPHarvest.call(uintwZH7Vf7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnDUz1D = accounts[3]
		const addressWlZxCI8 = accounts[0]
		const address5ktcvj = accounts[2]
		const GardenContractV2zLL09Tz = await GardenContractV2.new(addressnDUz1D, addressWlZxCI8, address5ktcvj, {from: accounts[5]});
		const uintStymeo4 = BigInt("229")
		const stringh61UQVv = "IJfoIGyFvP"
		const addresshAHBvY6 = accounts[5]
		const stringtNoHb3A = "QFYQMJeYsGKt6Hyz2RAdHquwD8ixUlqSg3mtEknIXz7471gQW2x9DbYav0cCf"
		const stringshJaEW5 = "X9VIwUP2zRfA3gov7oCK1OZ12Ip7NwYnisOE82qSvIlgdHf1MfNfxP1eoMsIUeFCk3Ry7OOEKYMmAjCnZ699oI"
//		const uint256WDN4Xnu = await GardenContractV2zLL09Tz.growthRemaining.call(addresshAHBvY6, stringh61UQVv, uintStymeo4, {from: accounts[4]});
//		const uint256V0t2w65 = await GardenContractV2zLL09Tz.totalTLPBurnt.call(stringtNoHb3A, {from: accounts[1]});
//		const uint256KKrCOr7 = await GardenContractV2zLL09Tz.totalTLPGrown.call(stringshJaEW5, {from: accounts[3]});

		await expect(GardenContractV2zLL09Tz.growthRemaining.call(addresshAHBvY6, stringh61UQVv, uintStymeo4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMR0Bwbj = accounts[2]
		const addressWWhJrgE = accounts[5]
		const addresslczEjH = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressMR0Bwbj, addressWWhJrgE, addresslczEjH, {from: accounts[4]});
		const uintvp4pr0 = BigInt("1294")
		const uintAr6KdnK = BigInt("81")
		const stringDxu0gbq = "ItcdsGdb5ifM8EFTFqWuh5jH4bBbaWHRoQgXtMWzbC6pzh13X2HHzuuaQr9gCKp6HM9SMvI2PqcuwygtHnO1W7YtXi"
		const uintvt8QXFm = BigInt("203")
		const uintK33OSLy = BigInt("194")
		const uintb8aipT = BigInt("245")
		const uintmLKuTzi = BigInt("246")
//		const stringONx2XDt = await GardenContractV2Q9JvqR.decompose.call(stringDxu0gbq, uintAr6KdnK, uintvp4pr0, {from: accounts[3]});
//		const uint256DzCvUqR = await GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintvt8QXFm, {from: accounts[0]});
//		const uint8taJw47W = await GardenContractV2Q9JvqR.zeroHoldings.call(uintb8aipT, uintK33OSLy, {from: accounts[3]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintmLKuTzi, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.decompose.call(stringDxu0gbq, uintAr6KdnK, uintvp4pr0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspCX1JJl = accounts[2]
		const addressou1iNv = accounts[5]
		const addressObdw2E = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addresspCX1JJl, addressou1iNv, addressObdw2E, {from: accounts[4]});
		const addressqts8x1D = accounts[2]
		const uintDTTFnlk = BigInt("255")
//		const addresshdVyqJM = await GardenContractV2Q9JvqR.renounceTokenOwner.call(addressqts8x1D, {from: accounts[4]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintDTTFnlk, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.renounceTokenOwner.call(addressqts8x1D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfMdeQSN = accounts[2]
		const addressUQUXzXQ = accounts[5]
		const addressYvncBv = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressfMdeQSN, addressUQUXzXQ, addressYvncBv, {from: accounts[4]});
		const uintTq5vogU = BigInt("226")
		const uintxo3Bld = BigInt("160")
		const stringhsYLvPQ = "tuYUic1qPXu1hyyie"
		const uintvkDCBRe = BigInt("255")
//		const uint8OZz7zMX = await GardenContractV2Q9JvqR.zeroHoldings.call(uintxo3Bld, uintTq5vogU, {from: accounts[5]});
//		const stringGs65TGs = await GardenContractV2Q9JvqR.harvestAllBeds.call(stringhsYLvPQ, {from: accounts[2]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintvkDCBRe, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.zeroHoldings.call(uintxo3Bld, uintTq5vogU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressj8AQPr5 = accounts[2]
		const addressYKuRNvc = accounts[5]
		const addressHwe0DXZ = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressj8AQPr5, addressYKuRNvc, addressHwe0DXZ, {from: accounts[4]});
		const addressyrO4XLS = accounts[3]
		const uinthBofDqV = BigInt("48")
		const uintatjTySp = BigInt("90")
		const uintFpxD5Q = BigInt("250")
		const stringgs7on3t = "PQpqxE70sKJ3SpF4tggv9KefbFa1Y2j2uzVx7C1caAXBJg6ym7SNe99Iot3BRbkPOQreaee"
		const stringFMcKDbX = "EyVCobqMexnAJpSOwCsPhUTkSEh"
		const uintIvP7Kd = BigInt("255")
		const addressEpyIgTO = await GardenContractV2Q9JvqR.changeOwner.call(addressyrO4XLS, {from: accounts[4]});
//		const uint256m5RQ1x = await GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uinthBofDqV, {from: accounts[3]});
//		const stringXG4vVac = await GardenContractV2Q9JvqR.decompose.call(stringgs7on3t, uintFpxD5Q, uintatjTySp, {from: accounts[1]});
//		const uint256coHQhAT = await GardenContractV2Q9JvqR.totalTLPGrowing.call(stringFMcKDbX, {from: accounts[4]});
//		const uint256cC0Vtv6 = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintIvP7Kd, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uinthBofDqV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJA5jm1k = accounts[4]
		const addressWF2xwtr = accounts[1]
		const addresstSz9G2l = accounts[2]
		const GardenContractV2CsEBG7t = await GardenContractV2.new(addressJA5jm1k, addressWF2xwtr, addresstSz9G2l, {from: accounts[3]});
		const stringzcpufK3 = "aKRt5oUibFNT6PxpBWUyCSedwipc"
		const stringLMV7vyG = "IW5qfTDgCXuAd5FP57NW2gaOrnQn9UGYQnZ6tlXinMwsn7qnn3tX"
		const uint5Ls79U = BigInt("239")
		const uintwY3cmLw = BigInt("91")
//		const uint256GKotKdY = await GardenContractV2CsEBG7t.totalTLPGrowing.call(stringzcpufK3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256t5zjWKd = await GardenContractV2CsEBG7t.totalTLPGrown.call(stringLMV7vyG, {from: accounts[4]});
//		const uint8fZ8rpRt = await GardenContractV2CsEBG7t.zeroHoldings.call(uintwY3cmLw, uint5Ls79U, {from: accounts[1]});

		await expect(GardenContractV2CsEBG7t.totalTLPGrowing.call(stringzcpufK3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEKSiTLB = accounts[2]
		const addressAKfdyVT = accounts[5]
		const addressIm54ClR = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressEKSiTLB, addressAKfdyVT, addressIm54ClR, {from: accounts[4]});
		const uintOaGDqWz = BigInt("6")
		const stringwNiDpCM = "zlwvURtWfzdcuxSVVINBExP2s7LKRTJDqbgcoMqVRUkIWt2fy7gVyS"
//		const uint256m5RQ1x = await GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintOaGDqWz, {from: accounts[3]});
//		const stringNsORCOG = await GardenContractV2Q9JvqR.harvestAllBeds.call(stringwNiDpCM, {from: accounts[5]});

		await expect(GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintOaGDqWz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrdTJGYG = accounts[2]
		const addressWgWjLXq = accounts[5]
		const addressPldXdal = accounts[2]
		const GardenContractV2Q9JvqR = await GardenContractV2.new(addressrdTJGYG, addressWgWjLXq, addressPldXdal, {from: accounts[4]});
		const addresse4CZsw9 = "0x0000000000000000000000000000000000000001"
		const addressltDsojv = accounts[5]
		const uintuBwEvmm = BigInt("24")
		const stringRCuo7xH = "rXkcX4HIojgd"
		const uintegez1ze = BigInt("13")
//		const addressIqsrAYH = await GardenContractV2Q9JvqR.addTokenOwner.call(addressltDsojv, addresse4CZsw9, {from: accounts[4]});
//		const uint256PW819zf = await GardenContractV2Q9JvqR.getTotalsTLPHarvest.call(uintuBwEvmm, {from: accounts[2]});
//		const uint256lAPssyZ = await GardenContractV2Q9JvqR.totalTLPGrowing.call(stringRCuo7xH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256m5RQ1x = await GardenContractV2Q9JvqR.getTotalrTLPHarvest.call(uintegez1ze, {from: accounts[3]});

		await expect(GardenContractV2Q9JvqR.addTokenOwner.call(addressltDsojv, addresse4CZsw9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})