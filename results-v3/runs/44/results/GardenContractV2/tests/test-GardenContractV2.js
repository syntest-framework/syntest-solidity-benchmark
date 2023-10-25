const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressu2MoWOk = accounts[4]
		const addressAcPWZn5 = accounts[0]
		const addressUNa4UF = "0x0000000000000000000000000000000000000001"
		const GardenContractV2l1NIWuN = await GardenContractV2.new(addressu2MoWOk, addressAcPWZn5, addressUNa4UF, {from: accounts[3]});
		const addressJwpaFOL = accounts[3]
		const addressCaAvAEw = "0x0000000000000000000000000000000000000001"
		const uintv1st4b0 = BigInt("66")
		const stringu0ij4Vr = "WcHOybgY4KsHmsLp7Z9DsATbUHMHpLwtEKR"
		const uintNDZUhsL = BigInt("226")
		const stringkGfsAB3 = "rG4OvYXkHlr1EQwdgtSmmBxptW"
		const addresspmneytI = accounts[1]
		const uintsCUjawY = BigInt("86")
		const stringkmuhQ5V = "ghSeiLfjEnmikQKUqlhQU1qlIUpwyPLMFULoUrce01DX"
		const addressT5vetwl = await GardenContractV2l1NIWuN.changeBenefitiary.call(addressJwpaFOL, {from: accounts[1]});
		const addressSXixmMI = await GardenContractV2l1NIWuN.changeOwner.call(addressCaAvAEw, {from: accounts[5]});
		const uint256CWIs8AJ = await GardenContractV2l1NIWuN.timeUntilNextTLP.call(stringu0ij4Vr, uintv1st4b0, {from: accounts[1]});
		const stringquCnNt = await GardenContractV2l1NIWuN.claimDecompose.call(stringkGfsAB3, uintNDZUhsL, {from: accounts[2]});
		const addressIoFtyL9 = await GardenContractV2l1NIWuN.changeOwner.call(addresspmneytI, {from: accounts[2]});
		const stringg6W3Mck = await GardenContractV2l1NIWuN.claimDecompose.call(stringkmuhQ5V, uintsCUjawY, {from: accounts[2]});

		await expect(GardenContractV2l1NIWuN.changeBenefitiary.call(addressJwpaFOL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address2LoM5h = accounts[4]
		const addressuoCScOz = accounts[3]
		const addresswMVAREq = accounts[0]
		const GardenContractV2yDaRN5I = await GardenContractV2.new(address2LoM5h, addressuoCScOz, addresswMVAREq, {from: accounts[0]});
		const stringd58IfcT = "923XeH1sHhrTFRydxbMPbvdsOe86H35LhXCgXXJtlX1qNnsq"
		const addresslhV2MFC = accounts[3]
		const uint256LrmUMgr = await GardenContractV2yDaRN5I.totalTLPBurnt.call(stringd58IfcT, {from: accounts[1]});
		const addressm4LpgJS = await GardenContractV2yDaRN5I.changeOwner.call(addresslhV2MFC, {from: accounts[4]});

		await expect(GardenContractV2yDaRN5I.totalTLPBurnt.call(stringd58IfcT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressagIltWS = accounts[0]
		const addresslZ7boXR = accounts[2]
		const addressIE230sZ = accounts[4]
		const GardenContractV25ol9Vc = await GardenContractV2.new(addressagIltWS, addresslZ7boXR, addressIE230sZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressobQqEB6 = accounts[3]
		const uintr8BAdMZ = BigInt("1955")
		const uintUGSgzDN = BigInt("75")
		const stringYa7M4S2 = "0qTSrElxYFZFl8jhgQeO3Lzw4XiTul2QZC2iElRTJIcUHRu42Hb5fo3VrRaYfflmYrIxuCXYxb2YXs9nx"
		const uintyNGokt9 = BigInt("1121")
		const uintESzbQFr = BigInt("45")
		const stringbEUNPi = "gSmAaLiBEkcv3tM1M1QJTalJOUoN5ig7W"
		const uintMMHnKpR = BigInt("1617")
		const uintGeVkU95 = BigInt("89")
		const stringM1fkR1 = "ZU2uki49SY2MhrwtptuzBv5igwIOAcHSsePvKS"
		const stringkqdD7O = "cNB4b2mPw8kmPOhJg9IgichlJyVBRMsWneq3W"
		const uintGvA60wa = BigInt("689")
		const uintdN8c1nb = BigInt("240")
		const stringF3ynhE7 = "BGkQa2zH78zsMH9fU6dfGEc1wSAsPipDbqfS"
		const addressCtelgv = await GardenContractV25ol9Vc.changeBenefitiary.call(addressobQqEB6, {from: accounts[5]});
		const stringvuSWeIN = await GardenContractV25ol9Vc.decompose.call(stringYa7M4S2, uintUGSgzDN, uintr8BAdMZ, {from: accounts[4]});
		const stringooWxXeL = await GardenContractV25ol9Vc.decompose.call(stringbEUNPi, uintESzbQFr, uintyNGokt9, {from: accounts[1]});
		const stringxDjSlZ = await GardenContractV25ol9Vc.decompose.call(stringM1fkR1, uintGeVkU95, uintMMHnKpR, {from: accounts[4]});
		const uint256SXBro4J = await GardenContractV25ol9Vc.totalTLPGrowing.call(stringkqdD7O, {from: accounts[4]});
		const stringvRIlAXK = await GardenContractV25ol9Vc.decompose.call(stringF3ynhE7, uintdN8c1nb, uintGvA60wa, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressSTGrWAG = accounts[3]
		const addressYebuOm5 = accounts[3]
		const addressUBKkBD = accounts[0]
		const GardenContractV2SyBov8x = await GardenContractV2.new(addressSTGrWAG, addressYebuOm5, addressUBKkBD, {from: accounts[3]});
		const uintsGdokQ = BigInt("173")
		const string3Yswm8 = "SIYDKhYmy"
		const uintcdNXrvu = BigInt("100")
		const string5gEXty = "2Vzx1nrLEH3VXAISjO9wUBiCCz6Wbj2L49yfttW"
		const addressSIbXWy1 = accounts[4]
		const uintMX6B8s = BigInt("201")
		const stringfQpSiGO = "2cyZHdx87OzL2jUiCQjVApQyvozSmT6zETqYFyH7bMl1PlVIMHFVnWVTh4enCYtWUv"
		const addressriOuon0 = accounts[3]
		const uintEDONFA3 = BigInt("60")
		const stringpTKct4V = "z5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUVqG17ULsaduqg8DTjJecieAmvvlCC0vE3"
		await GardenContractV2SyBov8x.totalBedSupply.call(string3Yswm8, uintsGdokQ, {from: accounts[3]});
		const uint256eqKlHy = await GardenContractV2SyBov8x.growthRemaining.call(addressSIbXWy1, string5gEXty, uintcdNXrvu, {from: accounts[3]});
		const uint256L4pSpEW = await GardenContractV2SyBov8x.getTotalrTLPHarvest.call(uintMX6B8s, {from: accounts[2]});
		const uint256YTcDBxO = await GardenContractV2SyBov8x.balanceOf.call(addressriOuon0, stringfQpSiGO, {from: accounts[2]});
		const uint256pMCzHPU = await GardenContractV2SyBov8x.timeUntilNextTLP.call(stringpTKct4V, uintEDONFA3, {from: accounts[4]});

		await expect(GardenContractV2SyBov8x.totalBedSupply.call(string3Yswm8, uintsGdokQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGE7qeq = accounts[1]
		const addressnwmDfrT = accounts[2]
		const addressGeJc3iE = accounts[3]
		const GardenContractV2zZCJx9l = await GardenContractV2.new(addressGE7qeq, addressnwmDfrT, addressGeJc3iE, {from: accounts[1]});
		const uint7pZ5nI = BigInt("235")
		const stringkjnQg3n = "yDmeb3JxUjNO"
		const addressBMZFvgH = accounts[2]
		const stringdkvMV5 = "E6X7BcTuQLwh1E0H1VbtZRdb50kjrlBBqZt75SquwKBI0sKaATcHn5jtpueqOPDywQ222NuRRRL6ek"
		const uint256UPoIdT5 = await GardenContractV2zZCJx9l.growthRemaining.call(addressBMZFvgH, stringkjnQg3n, uint7pZ5nI, {from: accounts[4]});
		const stringMhaf8BB = await GardenContractV2zZCJx9l.harvestAllBeds.call(stringdkvMV5, {from: accounts[1]});

		await expect(GardenContractV2zZCJx9l.growthRemaining.call(addressBMZFvgH, stringkjnQg3n, uint7pZ5nI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTs33zo3 = accounts[0]
		const addressbrZ4jUw = accounts[2]
		const addressqtqEf5w = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressTs33zo3, addressbrZ4jUw, addressqtqEf5w, {from: accounts[2]});
		const uintAgYF4jJ = BigInt("215")
		const stringILomgwh = "3W5"
		const uintG64zIRE = BigInt("102")
		const uintJtpOjQ = BigInt("233")
		const uint256MQxfRl = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintAgYF4jJ, {from: accounts[0]});
		const uint8Q6wTsZ = await GardenContractV2VoE4Onc.setTimeStamp.call(uintJtpOjQ, uintG64zIRE, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintAgYF4jJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressiwAi3Dj = accounts[3]
		const addressEoHufvG = accounts[2]
		const addressXpwvAYO = accounts[2]
		const GardenContractV2OFRWldH = await GardenContractV2.new(addressiwAi3Dj, addressEoHufvG, addressXpwvAYO, {from: accounts[4]});
		const stringzGVqzDl = "NaaNv8Qe3eIOiBh3Pt"
		const uintI6JxHBQ = BigInt("192")
		const stringm51yoyY = "afPcQUqYEIKnKGjphq"
		const uintUqyECCr = BigInt("201")
		const stringPFWtbb = "rV4LJ2Vf7yPH9HHB5crNCNecBHrN7uP"
		const addressQpLNaD0 = accounts[1]
		const stringjSrM5If = await GardenContractV2OFRWldH.harvestAllBeds.call(stringzGVqzDl, {from: accounts[4]});
		const stringMoc0Cd7 = await GardenContractV2OFRWldH.withdraw.call(stringm51yoyY, uintI6JxHBQ, {from: accounts[3]});
		const uint256ymllXTa = await GardenContractV2OFRWldH.growthRemaining.call(addressQpLNaD0, stringPFWtbb, uintUqyECCr, {from: accounts[2]});

		await expect(GardenContractV2OFRWldH.harvestAllBeds.call(stringzGVqzDl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressmWBxbVk = accounts[3]
		const address8G2hBN = accounts[0]
		const addressnlbcvnv = accounts[4]
		const GardenContractV2W4Cj0Lm = await GardenContractV2.new(addressmWBxbVk, address8G2hBN, addressnlbcvnv, {from: accounts[1]});
		const stringkkuaSGS = "gUJzJXVmEtfPfqEy"
		const addressEWKlBe = accounts[4]
		const uintqX0Yg5 = BigInt("214")
		const stringh7JHQjg = "J71KhGiU84hquWKRLIQ9Xi6Lp5TfzTGu"
		const uintVZ5jFbn = BigInt("47")
		const stringNzutKnG = "S0pueRRz6YBHFUZzJUtD3aWsS9X2dkEp1ZCYZy5MggaftTUaQ8ufIDtX"
		const uint256Y4Ft1gL = await GardenContractV2W4Cj0Lm.balanceOf.call(addressEWKlBe, stringkkuaSGS, {from: accounts[1]});
		await GardenContractV2W4Cj0Lm.totalBedSupply.call(stringh7JHQjg, uintqX0Yg5, {from: accounts[3]});
		const uint256to2gGl5 = await GardenContractV2W4Cj0Lm.timeUntilNextTLP.call(stringNzutKnG, uintVZ5jFbn, {from: accounts[3]});

		await expect(GardenContractV2W4Cj0Lm.balanceOf.call(addressEWKlBe, stringkkuaSGS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAY3wQl5 = accounts[1]
		const addressNnhX8ok = accounts[2]
		const addressAw4LOrC = accounts[3]
		const GardenContractV2zZCJx9l = await GardenContractV2.new(addressAY3wQl5, addressNnhX8ok, addressAw4LOrC, {from: accounts[1]});
		const stringE6wpkZO = "BjEciCMaEy236uGlXBrxKt0yuJ6a886Np72UhFtnjyVnbETmSgUhi6ERVxud54nhoqTkKH9RX1Dk8fqklWV4SYNYP"
		const addressMOv56tG = accounts[4]
		const uintqua83lr = BigInt("235")
		const stringkjnQg3n = "yDeb3JxUjNO"
		const addressrbxDJf = accounts[2]
		const uint256WXABYjN = await GardenContractV2zZCJx9l.totalTLPGrown.call(stringE6wpkZO, {from: accounts[2]});
		const addresscjcIbcU = await GardenContractV2zZCJx9l.changeBenefitiary.call(addressMOv56tG, {from: accounts[4]});
		const uint256UPoIdT5 = await GardenContractV2zZCJx9l.growthRemaining.call(addressrbxDJf, stringkjnQg3n, uintqua83lr, {from: accounts[4]});

		await expect(GardenContractV2zZCJx9l.totalTLPGrown.call(stringE6wpkZO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqOtR4wY = accounts[0]
		const addressbcQ1kG = accounts[2]
		const addressNkS8tfM = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressqOtR4wY, addressbcQ1kG, addressNkS8tfM, {from: accounts[2]});
		const uintOtIw7L2 = BigInt("222")
		const stringnUdmHD = "NAnbBNALMiMtpdmvpCBQMoxUnghQHnBKMGzkMv893Y"
		const uintKdo5Im = BigInt("102")
		const uinthHiPo0n = BigInt("86")
		const stringy5roNfy = await GardenContractV2VoE4Onc.claimDecompose.call(stringnUdmHD, uintOtIw7L2, {from: accounts[3]});
		const uint8Q6wTsZ = await GardenContractV2VoE4Onc.setTimeStamp.call(uinthHiPo0n, uintKdo5Im, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.claimDecompose.call(stringnUdmHD, uintOtIw7L2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstjuJhB = accounts[0]
		const addressQaDWhtX = accounts[2]
		const addresstbswpZC = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addresstjuJhB, addressQaDWhtX, addresstbswpZC, {from: accounts[2]});
		const uinto3tstW3 = BigInt("56")
		const uintfOOKfu = BigInt("146")
		const stringuVgHRP = "6IMXoCjn9XNttWu90gp4vg1weNAfzmnC96k"
		const uintoL3M59H = BigInt("215")
		const stringILomgwh = "3W4"
		const uint256P9SZXW = await GardenContractV2VoE4Onc.getTotalrTLPHarvest.call(uinto3tstW3, {from: accounts[0]});
		const stringlW8skvE = await GardenContractV2VoE4Onc.withdraw.call(stringuVgHRP, uintfOOKfu, {from: accounts[3]});
		const uint256MQxfRl = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintoL3M59H, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.getTotalrTLPHarvest.call(uinto3tstW3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPYNSbas = accounts[0]
		const addressYGh2IG7 = accounts[2]
		const addressQjRaUbW = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressPYNSbas, addressYGh2IG7, addressQjRaUbW, {from: accounts[2]});
		const uintwF0mMy = BigInt("1547")
		const uintURV8txH = BigInt("244")
		const stringHyMvmuZ = "45c8oG8P50s21UMbdn5vGpVt49PkTqwRjLseLGcPCBEY0cg4WwbR5UlGXgSyr4yPTvzFT6bryUAsW51VrOJVmdnvzbMISZjG"
		const uintDxoZ1UJ = BigInt("215")
		const stringILomgwh = "PW5"
		const stringqrS5U0X = await GardenContractV2VoE4Onc.decompose.call(stringHyMvmuZ, uintURV8txH, uintwF0mMy, {from: accounts[3]});
		const uint256MQxfRl = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintDxoZ1UJ, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.decompose.call(stringHyMvmuZ, uintURV8txH, uintwF0mMy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoUAMS6i = accounts[0]
		const address7SZyeG = accounts[2]
		const addresseWWCP1c = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressoUAMS6i, address7SZyeG, addresseWWCP1c, {from: accounts[2]});
		const uintD7igG6 = BigInt("77")
		const uintRNQFYEZ = BigInt("86")
		const uint8Q6wTsZ = await GardenContractV2VoE4Onc.setTimeStamp.call(uintRNQFYEZ, uintD7igG6, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.setTimeStamp.call(uintRNQFYEZ, uintD7igG6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrXEc2ue = accounts[3]
		const addresss84SWjD = accounts[2]
		const addressgRth7g5 = accounts[2]
		const GardenContractV2OFRWldH = await GardenContractV2.new(addressrXEc2ue, addresss84SWjD, addressgRth7g5, {from: accounts[4]});
		const uintv2cnOCZ = BigInt("192")
		const stringm51yoyY = "afPcQUqYEIKnKGjphq"
		const stringMoc0Cd7 = await GardenContractV2OFRWldH.withdraw.call(stringm51yoyY, uintv2cnOCZ, {from: accounts[3]});

		await expect(GardenContractV2OFRWldH.withdraw.call(stringm51yoyY, uintv2cnOCZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspm2Gd8 = accounts[0]
		const addresstkzjrmq = accounts[2]
		const addressm44bWaE = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addresspm2Gd8, addresstkzjrmq, addressm44bWaE, {from: accounts[2]});
		const uintzYaBlMw = BigInt("92")
		const uintplYKn1Q = BigInt("73")
		const stringqhlntNs = "IYNhRHAx8gqMHpVuc7i9WR8nTnANHst5hywQmiautBT7QViSRMkWcxmlVsAyMWPSwG1fJkijCGetbaKPCCAGg"
		const addressYV8A1NT = accounts[1]
		const uintc5BiD1b = BigInt("146")
		const stringuVgHRP = "6IMXoCjn9XNttWu90gp4vg1weNAfzmnC96k"
		const uintuNCezn = BigInt("250")
		const uintsk9LWmt = BigInt("224")
		const uintpGikDyk = BigInt("215")
		const stringILomgwh = "3W4"
		const uint256No8SXuI = await GardenContractV2VoE4Onc.getTotalsTLPHarvest.call(uintzYaBlMw, {from: accounts[1]});
		const uint256hdK2Ygr = await GardenContractV2VoE4Onc.growthRemaining.call(addressYV8A1NT, stringqhlntNs, uintplYKn1Q, {from: accounts[4]});
		const stringlW8skvE = await GardenContractV2VoE4Onc.withdraw.call(stringuVgHRP, uintc5BiD1b, {from: accounts[3]});
		const uint8jE6KTE = await GardenContractV2VoE4Onc.zeroHoldings.call(uintsk9LWmt, uintuNCezn, {from: accounts[1]});
		const uint256MQxfRl = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintpGikDyk, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.getTotalsTLPHarvest.call(uintzYaBlMw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressBGcAz4t = accounts[0]
		const addressuqATjv = accounts[2]
		const addressb9WfUpv = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressBGcAz4t, addressuqATjv, addressb9WfUpv, {from: accounts[2]});
		const addressRRkn0BI = accounts[2]
		const addressgU65wL = accounts[4]
		const uintiogkKKE = BigInt("25")
		const stringILomgwh = "3W5"
		const addressoqQC2dn = await GardenContractV2VoE4Onc.changeBenefitiary.call(addressRRkn0BI, {from: accounts[2]});
		const addressErJ8Wcn = await GardenContractV2VoE4Onc.changeBenefitiary.call(addressgU65wL, {from: accounts[0]});
		const uint256MQxfRl = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintiogkKKE, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.changeBenefitiary.call(addressgU65wL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGGU3k4G = accounts[0]
		const addresspZSA3Lv = accounts[2]
		const addressJ41gLqD = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressGGU3k4G, addresspZSA3Lv, addressJ41gLqD, {from: accounts[2]});
		const stringF9qtpfz = "BVzXhWwTqJccHmDfOi5"
		const addressGJayf6G = accounts[0]
		const uintKApeRBh = BigInt("56")
		const uintRkaHIm2 = BigInt("85")
		const stringILomgwh = "3W4"
		const uintymdsqC = BigInt("44")
		const uint256XaTC7YT = await GardenContractV2VoE4Onc.totalTLPDecomposed.call(stringF9qtpfz, {from: accounts[3]});
		const addresszdLN6p8 = await GardenContractV2VoE4Onc.changeBenefitiary.call(addressGJayf6G, {from: accounts[4]});
		const uint256P9SZXW = await GardenContractV2VoE4Onc.getTotalrTLPHarvest.call(uintKApeRBh, {from: accounts[0]});
		const uint256MQxfRl = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringILomgwh, uintRkaHIm2, {from: accounts[0]});
		const uint256ONnxLnO = await GardenContractV2VoE4Onc.getTotalrTLPHarvest.call(uintymdsqC, {from: accounts[1]});

		await expect(GardenContractV2VoE4Onc.totalTLPDecomposed.call(stringF9qtpfz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWGCMxl0 = accounts[0]
		const addresspRZzOUl = accounts[2]
		const addresseqHj0LM = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressWGCMxl0, addresspRZzOUl, addresseqHj0LM, {from: accounts[2]});
		const boolJYRypsZ = false
		const uintPHKLyiW = BigInt("218")
		const stringG2XUNqK = "GjK"
		const uintPk6n3yD = BigInt("154")
		const stringOaHvIAz = "ia0lDTPtmyndkNtLL0Vda59WGNXP06o8fSjIp1Ew9VSszEtt9CyQ9XeU4Ua9eHqHAfEyH1GudsgumWhc1j36AH4ewl3"
		const addressBydzFXj = "0x0000000000000000000000000000000000000001"
		const uintzhTktah = BigInt("222")
		const stringnUdmHD = "NAnbBNALMiMtpdmvpCBQMoxUnghQHnBKMGzkMv893Y"
		const uintiBgBtnP = BigInt("100")
		const stringI0zRMT = "GyrKVBplTYtSqOKBpuqFfmFHeRfIRaLd16aKswmRFIzaeR4KuG12q8meY4i"
		const uintQA9V4fU = BigInt("132")
		const uintwEH7CKR = BigInt("86")
		const uint256AKLNO2P = await GardenContractV2VoE4Onc.plant.call(uintPk6n3yD, stringG2XUNqK, uintPHKLyiW, boolJYRypsZ, {from: accounts[4]});
		const uint256FIeaZyx = await GardenContractV2VoE4Onc.balanceOf.call(addressBydzFXj, stringOaHvIAz, {from: accounts[4]});
		const stringy5roNfy = await GardenContractV2VoE4Onc.claimDecompose.call(stringnUdmHD, uintzhTktah, {from: accounts[3]});
		const stringtrN3qU = await GardenContractV2VoE4Onc.claimDecompose.call(stringI0zRMT, uintiBgBtnP, {from: accounts[2]});
		const uint8Q6wTsZ = await GardenContractV2VoE4Onc.setTimeStamp.call(uintwEH7CKR, uintQA9V4fU, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.plant.call(uintPk6n3yD, stringG2XUNqK, uintPHKLyiW, boolJYRypsZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnrZNAXf = accounts[0]
		const addressfOCp7ti = accounts[2]
		const addressLtmqWVr = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressnrZNAXf, addressfOCp7ti, addressLtmqWVr, {from: accounts[2]});
		const stringqhu7joa = "Ragri74O75o5D8d"
		const uintYWib9wL = BigInt("222")
		const stringnUdmHD = "NAnbBNALMiMtpdmvpCBQMoxUnghQHnBKMGzkMv893Y"
		const uint1binax = BigInt("102")
		const uintxJrjld = BigInt("86")
		const uint256U79xPID = await GardenContractV2VoE4Onc.totalTLPGrowing.call(stringqhu7joa, {from: accounts[5]});
		const stringy5roNfy = await GardenContractV2VoE4Onc.claimDecompose.call(stringnUdmHD, uintYWib9wL, {from: accounts[3]});
		const uint8Q6wTsZ = await GardenContractV2VoE4Onc.setTimeStamp.call(uintxJrjld, uint1binax, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.totalTLPGrowing.call(stringqhu7joa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrCB9MrH = accounts[0]
		const addressiP9FQT4 = accounts[2]
		const addresspJ0ktPA = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressrCB9MrH, addressiP9FQT4, addresspJ0ktPA, {from: accounts[2]});
		const uintWObNDQ = BigInt("7")
		const uintYloSNO4 = BigInt("98")
		const stringTQXxLn = "dWOKeetR3DhllKkbLOPEhyhbiBICWkG6BH4CMc5S3nXa"
		const uint256P9SZXW = await GardenContractV2VoE4Onc.getTotalrTLPHarvest.call(uintWObNDQ, {from: accounts[0]});
		const uint256BvdR96 = await GardenContractV2VoE4Onc.timeUntilNextTLP.call(stringTQXxLn, uintYloSNO4, {from: accounts[0]});

		await expect(GardenContractV2VoE4Onc.getTotalrTLPHarvest.call(uintWObNDQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHyWqUaA = accounts[3]
		const addressuhfWlqX = accounts[3]
		const addressc2ZiFZo = accounts[4]
		const GardenContractV2Bl3X7qI = await GardenContractV2.new(addressHyWqUaA, addressuhfWlqX, addressc2ZiFZo, {from: accounts[3]});
		const addressKVYIZ55 = accounts[1]
		const addressEWVwrJ = "0x0000000000000000000000000000000000000001"
		const stringWHhX0Z = "Qw8h8VCud7qnHQH5SIIgjd34W2zlcvSgWh8tFsJ0xvsxe9xfvWNrOfDCeVNAm3EwVXQUH0Xwg4njr5UVfYmrqGwyfg"
		const addressK87iQfM = await GardenContractV2Bl3X7qI.addTokenOwner.call(addressEWVwrJ, addressKVYIZ55, {from: accounts[3]});
		const uint2565hahKc = await GardenContractV2Bl3X7qI.totalTLPGrown.call(stringWHhX0Z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2Bl3X7qI.addTokenOwner.call(addressEWVwrJ, addressKVYIZ55, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswPj4VV = accounts[0]
		const addressp0mvi19 = accounts[2]
		const addressg9oQrkG = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addresswPj4VV, addressp0mvi19, addressg9oQrkG, {from: accounts[2]});
		const uintr016Fd = BigInt("167")
		const stringpEB5dEh = "A2gKdmEhiTg5igtbEbRwXv8oLWbkoPq5erryhETdic97iT6dTAj3IQIFKpOsBSRCEGwHQD2WKV4ZxKkhAnefxJ8n"
		const uintzjTBU04 = BigInt("54")
		const stringZMxb9V = "kMbVcx3gFBVIwc8GV2CBzGiXYM69ySN6iiVWWwwmHh7yiX8ihCcn8g9W9C8VCn8EMGuglEahtXARIMxjytQunWgzw8"
		const stringpjKk6jN = "xeotFf"
		const uintEl2yuM3 = BigInt("222")
		const stringnUdmHD = "NAnbBNALMisMtpdmvpCYQMoxUnghQHnBKMGzkMv893Y"
		const stringQhjXBgU = await GardenContractV2VoE4Onc.harvest.call(stringpEB5dEh, uintr016Fd, {from: accounts[0]});
		const stringy3tX8EO = await GardenContractV2VoE4Onc.claimDecompose.call(stringZMxb9V, uintzjTBU04, {from: accounts[0]});
		const uint256ly2lRbb = await GardenContractV2VoE4Onc.totalTLPGrown.call(stringpjKk6jN, {from: accounts[0]});
		const stringy5roNfy = await GardenContractV2VoE4Onc.claimDecompose.call(stringnUdmHD, uintEl2yuM3, {from: accounts[3]});

		await expect(GardenContractV2VoE4Onc.harvest.call(stringpEB5dEh, uintr016Fd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressq3NYKQ0 = accounts[0]
		const addressvJV37C0 = accounts[2]
		const addressdZg4Md4 = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addressq3NYKQ0, addressvJV37C0, addressdZg4Md4, {from: accounts[2]});
		const addresssRAQW27 = accounts[4]
		const uintgnhjsIM = BigInt("7")
		const stringVyM2pX = "hr3YpPBFyGo139r319UMgSa5n4qmm1Xy93diB7UsBuvclYKAgKJobKaaFsy7coKPJ6eRR1BjLJFI"
		const addresshtsN2JC = accounts[4]
		const uint1oIZSl = BigInt("1547")
		const uintsAxqeWa = BigInt("255")
		const stringHyMvmuZ = "45c8oG8P50s21UMbdn5vGpVt49PkTqwRjLseLGcPCBEY0cg4WwbR5UlGXgSyr4yPTvzFT6bryUAsW51VrOJVmdnvzbMISZjG"
		const addressouYMHel = await GardenContractV2VoE4Onc.changeOwner.call(addresssRAQW27, {from: accounts[2]});
		const uint256NXBbzb = await GardenContractV2VoE4Onc.growthRemaining.call(addresshtsN2JC, stringVyM2pX, uintgnhjsIM, {from: "0x0000000000000000000000000000000000000001"});
		const stringqrS5U0X = await GardenContractV2VoE4Onc.decompose.call(stringHyMvmuZ, uintsAxqeWa, uint1oIZSl, {from: accounts[3]});

		await expect(GardenContractV2VoE4Onc.growthRemaining.call(addresshtsN2JC, stringVyM2pX, uintgnhjsIM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address0E1V7x = accounts[3]
		const address2ctAXY = accounts[0]
		const addressayezFHD = accounts[4]
		const GardenContractV2W4Cj0Lm = await GardenContractV2.new(address0E1V7x, address2ctAXY, addressayezFHD, {from: accounts[1]});
		const stringXfOv74v = "rMx2VIGk30dYxJckySXlzdWCEkQwdHpeSezUkPOunqEj2WUShDk9uADLoU4I1ZeinIPp"
		const stringkkuaSGS = "gUJzJXVmEtfPfqEy"
		const addressNhPLJ5A = accounts[3]
		const uint256yPuktWc = await GardenContractV2W4Cj0Lm.totalGardenSupply.call(stringXfOv74v, {from: accounts[0]});
		const uint256Y4Ft1gL = await GardenContractV2W4Cj0Lm.balanceOf.call(addressNhPLJ5A, stringkkuaSGS, {from: accounts[1]});

		await expect(GardenContractV2W4Cj0Lm.totalGardenSupply.call(stringXfOv74v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszV9cNwF = accounts[0]
		const addressmW5s5GG = accounts[2]
		const addressUdPZtvB = accounts[2]
		const GardenContractV2VoE4Onc = await GardenContractV2.new(addresszV9cNwF, addressmW5s5GG, addressUdPZtvB, {from: accounts[2]});
		const addressMlwMfFg = accounts[1]
		const boolNuvY4b = false
		const uintFvDs98J = BigInt("75")
		const stringErJ8Eh = "ww3VlPAwwXlNwqcXmpD3fiftpCXGkAN"
		const uintMwUo0ta = BigInt("1900")
		const addressDiFAWO = await GardenContractV2VoE4Onc.renounceTokenOwner.call(addressMlwMfFg, {from: accounts[2]});
		const uint256nHoz15 = await GardenContractV2VoE4Onc.plant.call(uintMwUo0ta, stringErJ8Eh, uintFvDs98J, boolNuvY4b, {from: accounts[4]});

		await expect(GardenContractV2VoE4Onc.renounceTokenOwner.call(addressMlwMfFg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})